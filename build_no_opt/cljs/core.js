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
var or__3548__auto____7270 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7270))
{return or__3548__auto____7270;
} else
{var or__3548__auto____7271 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7271))
{return or__3548__auto____7271;
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
var _invoke__7620 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7277 = this$;

if(cljs.core.truth_(and__3546__auto____7277))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7277;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
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
})().call(null,this$);
}
});
var _invoke__7621 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7285 = this$;

if(cljs.core.truth_(and__3546__auto____7285))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7285;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7289 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7289))
{return or__3548__auto____7289;
} else
{var or__3548__auto____7293 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7293))
{return or__3548__auto____7293;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7622 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7297 = this$;

if(cljs.core.truth_(and__3546__auto____7297))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7297;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7303 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7303))
{return or__3548__auto____7303;
} else
{var or__3548__auto____7305 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7305))
{return or__3548__auto____7305;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7623 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7307 = this$;

if(cljs.core.truth_(and__3546__auto____7307))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7307;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7309 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7309))
{return or__3548__auto____7309;
} else
{var or__3548__auto____7311 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7311))
{return or__3548__auto____7311;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7624 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7312 = this$;

if(cljs.core.truth_(and__3546__auto____7312))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7312;
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
var _invoke__7625 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7315 = this$;

if(cljs.core.truth_(and__3546__auto____7315))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7315;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7344 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7344))
{return or__3548__auto____7344;
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
var _invoke__7626 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7351 = this$;

if(cljs.core.truth_(and__3546__auto____7351))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7351;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7627 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7364 = this$;

if(cljs.core.truth_(and__3546__auto____7364))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7364;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7367 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7367))
{return or__3548__auto____7367;
} else
{var or__3548__auto____7371 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7371))
{return or__3548__auto____7371;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7628 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7375 = this$;

if(cljs.core.truth_(and__3546__auto____7375))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7375;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7395 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7395))
{return or__3548__auto____7395;
} else
{var or__3548__auto____7398 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7398))
{return or__3548__auto____7398;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7629 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7402 = this$;

if(cljs.core.truth_(and__3546__auto____7402))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7402;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7630 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7542 = this$;

if(cljs.core.truth_(and__3546__auto____7542))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7542;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7546 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7546))
{return or__3548__auto____7546;
} else
{var or__3548__auto____7547 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7547))
{return or__3548__auto____7547;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7631 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7550 = this$;

if(cljs.core.truth_(and__3546__auto____7550))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7550;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7554 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7554))
{return or__3548__auto____7554;
} else
{var or__3548__auto____7555 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7555))
{return or__3548__auto____7555;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7632 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7559 = this$;

if(cljs.core.truth_(and__3546__auto____7559))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7559;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7561 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7561))
{return or__3548__auto____7561;
} else
{var or__3548__auto____7563 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7563))
{return or__3548__auto____7563;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7633 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7564 = this$;

if(cljs.core.truth_(and__3546__auto____7564))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7564;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7570 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7570))
{return or__3548__auto____7570;
} else
{var or__3548__auto____7585 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7585))
{return or__3548__auto____7585;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7634 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7589 = this$;

if(cljs.core.truth_(and__3546__auto____7589))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7589;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7590 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7590))
{return or__3548__auto____7590;
} else
{var or__3548__auto____7591 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7591))
{return or__3548__auto____7591;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7635 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7592 = this$;

if(cljs.core.truth_(and__3546__auto____7592))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7592;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7593 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7593))
{return or__3548__auto____7593;
} else
{var or__3548__auto____7594 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7594))
{return or__3548__auto____7594;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7637 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7595 = this$;

if(cljs.core.truth_(and__3546__auto____7595))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7595;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7596 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7596))
{return or__3548__auto____7596;
} else
{var or__3548__auto____7597 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7597))
{return or__3548__auto____7597;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7638 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7598 = this$;

if(cljs.core.truth_(and__3546__auto____7598))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7598;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7599 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7599))
{return or__3548__auto____7599;
} else
{var or__3548__auto____7600 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7600))
{return or__3548__auto____7600;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7602 = this$;

if(cljs.core.truth_(and__3546__auto____7602))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7602;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7604 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7604))
{return or__3548__auto____7604;
} else
{var or__3548__auto____7605 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7605))
{return or__3548__auto____7605;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7640 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7606 = this$;

if(cljs.core.truth_(and__3546__auto____7606))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7606;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7607 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7607))
{return or__3548__auto____7607;
} else
{var or__3548__auto____7608 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7608))
{return or__3548__auto____7608;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7641 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7612 = this$;

if(cljs.core.truth_(and__3546__auto____7612))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7612;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7615 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7615))
{return or__3548__auto____7615;
} else
{var or__3548__auto____7616 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7616))
{return or__3548__auto____7616;
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
return _invoke__7620.call(this,this$);
case  2 :
return _invoke__7621.call(this,this$,a);
case  3 :
return _invoke__7622.call(this,this$,a,b);
case  4 :
return _invoke__7623.call(this,this$,a,b,c);
case  5 :
return _invoke__7624.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7625.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7626.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7627.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7628.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7629.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7630.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7631.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7632.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7633.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7634.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7635.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7637.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7638.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7639.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7640.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7641.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7713 = coll;

if(cljs.core.truth_(and__3546__auto____7713))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7713;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7714 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7714))
{return or__3548__auto____7714;
} else
{var or__3548__auto____7715 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7715))
{return or__3548__auto____7715;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7719 = coll;

if(cljs.core.truth_(and__3546__auto____7719))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7719;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7721 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7721))
{return or__3548__auto____7721;
} else
{var or__3548__auto____7723 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7723))
{return or__3548__auto____7723;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7730 = coll;

if(cljs.core.truth_(and__3546__auto____7730))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7730;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7732 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7732))
{return or__3548__auto____7732;
} else
{var or__3548__auto____7733 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7733))
{return or__3548__auto____7733;
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
var _nth__7762 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7738 = coll;

if(cljs.core.truth_(and__3546__auto____7738))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7738;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7753 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7753))
{return or__3548__auto____7753;
} else
{var or__3548__auto____7755 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7755))
{return or__3548__auto____7755;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7764 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7757 = coll;

if(cljs.core.truth_(and__3546__auto____7757))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7757;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7759 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7759))
{return or__3548__auto____7759;
} else
{var or__3548__auto____7761 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7761))
{return or__3548__auto____7761;
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
return _nth__7762.call(this,coll,n);
case  3 :
return _nth__7764.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7768 = coll;

if(cljs.core.truth_(and__3546__auto____7768))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7768;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7822 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7822))
{return or__3548__auto____7822;
} else
{var or__3548__auto____7823 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7823))
{return or__3548__auto____7823;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7825 = coll;

if(cljs.core.truth_(and__3546__auto____7825))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7825;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7827 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7827))
{return or__3548__auto____7827;
} else
{var or__3548__auto____7829 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7829))
{return or__3548__auto____7829;
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
var _lookup__7843 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7836 = o;

if(cljs.core.truth_(and__3546__auto____7836))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7836;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7837 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7837))
{return or__3548__auto____7837;
} else
{var or__3548__auto____7838 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7838))
{return or__3548__auto____7838;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7844 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7839 = o;

if(cljs.core.truth_(and__3546__auto____7839))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7839;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7840 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7840))
{return or__3548__auto____7840;
} else
{var or__3548__auto____7842 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7842))
{return or__3548__auto____7842;
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
return _lookup__7843.call(this,o,k);
case  3 :
return _lookup__7844.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7851 = coll;

if(cljs.core.truth_(and__3546__auto____7851))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7851;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7852 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7852))
{return or__3548__auto____7852;
} else
{var or__3548__auto____7853 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7853))
{return or__3548__auto____7853;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7854 = coll;

if(cljs.core.truth_(and__3546__auto____7854))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7854;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7856 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7856))
{return or__3548__auto____7856;
} else
{var or__3548__auto____7857 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7857))
{return or__3548__auto____7857;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7889 = coll;

if(cljs.core.truth_(and__3546__auto____7889))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7889;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7890 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7890))
{return or__3548__auto____7890;
} else
{var or__3548__auto____7893 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7893))
{return or__3548__auto____7893;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7898 = coll;

if(cljs.core.truth_(and__3546__auto____7898))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7898;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7900 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7900))
{return or__3548__auto____7900;
} else
{var or__3548__auto____7901 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7901))
{return or__3548__auto____7901;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7905 = coll;

if(cljs.core.truth_(and__3546__auto____7905))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7905;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7907 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7907))
{return or__3548__auto____7907;
} else
{var or__3548__auto____7908 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7908))
{return or__3548__auto____7908;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7912 = coll;

if(cljs.core.truth_(and__3546__auto____7912))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7912;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7915 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{var or__3548__auto____7917 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7917))
{return or__3548__auto____7917;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7937 = coll;

if(cljs.core.truth_(and__3546__auto____7937))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7937;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7939 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7939))
{return or__3548__auto____7939;
} else
{var or__3548__auto____7941 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7941))
{return or__3548__auto____7941;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7944 = o;

if(cljs.core.truth_(and__3546__auto____7944))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7944;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7946 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7946))
{return or__3548__auto____7946;
} else
{var or__3548__auto____7948 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7948))
{return or__3548__auto____7948;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7951 = o;

if(cljs.core.truth_(and__3546__auto____7951))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7951;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7953 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7953))
{return or__3548__auto____7953;
} else
{var or__3548__auto____7955 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7955))
{return or__3548__auto____7955;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7958 = o;

if(cljs.core.truth_(and__3546__auto____7958))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7958;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7961 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7961))
{return or__3548__auto____7961;
} else
{var or__3548__auto____7962 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7962))
{return or__3548__auto____7962;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7965 = o;

if(cljs.core.truth_(and__3546__auto____7965))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7965;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7967 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7967))
{return or__3548__auto____7967;
} else
{var or__3548__auto____7969 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7969))
{return or__3548__auto____7969;
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
var _reduce__8023 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7974 = coll;

if(cljs.core.truth_(and__3546__auto____7974))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7974;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8017 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8017))
{return or__3548__auto____8017;
} else
{var or__3548__auto____8018 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8018))
{return or__3548__auto____8018;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8025 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8019 = coll;

if(cljs.core.truth_(and__3546__auto____8019))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8019;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8020 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8020))
{return or__3548__auto____8020;
} else
{var or__3548__auto____8022 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8022))
{return or__3548__auto____8022;
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
return _reduce__8023.call(this,coll,f);
case  3 :
return _reduce__8025.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8037 = o;

if(cljs.core.truth_(and__3546__auto____8037))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8037;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8039 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8039))
{return or__3548__auto____8039;
} else
{var or__3548__auto____8041 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8041))
{return or__3548__auto____8041;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8044 = o;

if(cljs.core.truth_(and__3546__auto____8044))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8044;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8048 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8048))
{return or__3548__auto____8048;
} else
{var or__3548__auto____8049 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8053 = o;

if(cljs.core.truth_(and__3546__auto____8053))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8053;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8055 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8055))
{return or__3548__auto____8055;
} else
{var or__3548__auto____8057 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8057))
{return or__3548__auto____8057;
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
if(cljs.core.truth_((function (){var and__3546__auto____8066 = o;

if(cljs.core.truth_(and__3546__auto____8066))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8066;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8071 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8071))
{return or__3548__auto____8071;
} else
{var or__3548__auto____8072 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8072))
{return or__3548__auto____8072;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8074 = d;

if(cljs.core.truth_(and__3546__auto____8074))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8074;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8077 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8077))
{return or__3548__auto____8077;
} else
{var or__3548__auto____8080 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8080))
{return or__3548__auto____8080;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8091 = this$;

if(cljs.core.truth_(and__3546__auto____8091))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8091;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8094 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8094))
{return or__3548__auto____8094;
} else
{var or__3548__auto____8095 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8095))
{return or__3548__auto____8095;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8100 = this$;

if(cljs.core.truth_(and__3546__auto____8100))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8100;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8138 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8138))
{return or__3548__auto____8138;
} else
{var or__3548__auto____8139 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8139))
{return or__3548__auto____8139;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8141 = this$;

if(cljs.core.truth_(and__3546__auto____8141))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8141;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8144 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8144))
{return or__3548__auto____8144;
} else
{var or__3548__auto____8145 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8145))
{return or__3548__auto____8145;
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
var G__8182 = null;
var G__8182__8183 = (function (o,k){
return null;
});
var G__8182__8184 = (function (o,k,not_found){
return not_found;
});
G__8182 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8182__8183.call(this,o,k);
case  3 :
return G__8182__8184.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8182;
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
var G__8191 = null;
var G__8191__8193 = (function (_,f){
return f.call(null);
});
var G__8191__8194 = (function (_,f,start){
return start;
});
G__8191 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8191__8193.call(this,_,f);
case  3 :
return G__8191__8194.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8191;
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
var G__8203__8205 = (function (_,n){
return null;
});
var G__8203__8206 = (function (_,n,not_found){
return not_found;
});
G__8203 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8203__8205.call(this,_,n);
case  3 :
return G__8203__8206.call(this,_,n,not_found);
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
var ci_reduce__8235 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8229 = cljs.core._nth.call(null,cicoll,0);
var n__8230 = 1;

while(true){
if(cljs.core.truth_((n__8230 < cljs.core._count.call(null,cicoll))))
{{
var G__8239 = f.call(null,val__8229,cljs.core._nth.call(null,cicoll,n__8230));
var G__8240 = (n__8230 + 1);
val__8229 = G__8239;
n__8230 = G__8240;
continue;
}
} else
{return val__8229;
}
break;
}
}
});
var ci_reduce__8236 = (function (cicoll,f,val){
var val__8231 = val;
var n__8232 = 0;

while(true){
if(cljs.core.truth_((n__8232 < cljs.core._count.call(null,cicoll))))
{{
var G__8241 = f.call(null,val__8231,cljs.core._nth.call(null,cicoll,n__8232));
var G__8242 = (n__8232 + 1);
val__8231 = G__8241;
n__8232 = G__8242;
continue;
}
} else
{return val__8231;
}
break;
}
});
var ci_reduce__8237 = (function (cicoll,f,val,idx){
var val__8233 = val;
var n__8234 = idx;

while(true){
if(cljs.core.truth_((n__8234 < cljs.core._count.call(null,cicoll))))
{{
var G__8243 = f.call(null,val__8233,cljs.core._nth.call(null,cicoll,n__8234));
var G__8244 = (n__8234 + 1);
val__8233 = G__8243;
n__8234 = G__8244;
continue;
}
} else
{return val__8233;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8235.call(this,cicoll,f);
case  3 :
return ci_reduce__8236.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8237.call(this,cicoll,f,val,idx);
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
var this__8263 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8292 = null;
var G__8292__8293 = (function (_,f){
var this__8264 = this;
return cljs.core.ci_reduce.call(null,this__8264.a,f,(this__8264.a[this__8264.i]),(this__8264.i + 1));
});
var G__8292__8294 = (function (_,f,start){
var this__8266 = this;
return cljs.core.ci_reduce.call(null,this__8266.a,f,start,this__8266.i);
});
G__8292 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8292__8293.call(this,_,f);
case  3 :
return G__8292__8294.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8292;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8268 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8271 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8296 = null;
var G__8296__8297 = (function (coll,n){
var this__8272 = this;
var i__8274 = (n + this__8272.i);

if(cljs.core.truth_((i__8274 < this__8272.a.length)))
{return (this__8272.a[i__8274]);
} else
{return null;
}
});
var G__8296__8299 = (function (coll,n,not_found){
var this__8276 = this;
var i__8277 = (n + this__8276.i);

if(cljs.core.truth_((i__8277 < this__8276.a.length)))
{return (this__8276.a[i__8277]);
} else
{return not_found;
}
});
G__8296 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8296__8297.call(this,coll,n);
case  3 :
return G__8296__8299.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8296;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8282 = this;
return (this__8282.a.length - this__8282.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8283 = this;
return (this__8283.a[this__8283.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8288 = this;
if(cljs.core.truth_(((this__8288.i + 1) < this__8288.a.length)))
{return (new cljs.core.IndexedSeq(this__8288.a,(this__8288.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8291 = this;
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
var G__8335 = null;
var G__8335__8336 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8335__8337 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8335 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8335__8336.call(this,array,f);
case  3 :
return G__8335__8337.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8335;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8341 = null;
var G__8341__8342 = (function (array,k){
return (array[k]);
});
var G__8341__8343 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8341 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8341__8342.call(this,array,k);
case  3 :
return G__8341__8343.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8341;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8348 = null;
var G__8348__8349 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8348__8350 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8348 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8348__8349.call(this,array,n);
case  3 :
return G__8348__8350.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8348;
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
var temp__3698__auto____8355 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8355))
{var s__8356 = temp__3698__auto____8355;

return cljs.core._first.call(null,s__8356);
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
var G__8460 = cljs.core.next.call(null,s);
s = G__8460;
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
var s__8463 = cljs.core.seq.call(null,x);
var n__8464 = 0;

while(true){
if(cljs.core.truth_(s__8463))
{{
var G__8465 = cljs.core.next.call(null,s__8463);
var G__8466 = (n__8464 + 1);
s__8463 = G__8465;
n__8464 = G__8466;
continue;
}
} else
{return n__8464;
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
var conj__8468 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8469 = (function() { 
var G__8473__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8474 = conj.call(null,coll,x);
var G__8475 = cljs.core.first.call(null,xs);
var G__8476 = cljs.core.next.call(null,xs);
coll = G__8474;
x = G__8475;
xs = G__8476;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8473 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8473__delegate.call(this, coll, x, xs);
};
G__8473.cljs$lang$maxFixedArity = 2;
G__8473.cljs$lang$applyTo = (function (arglist__8477){
var coll = cljs.core.first(arglist__8477);
var x = cljs.core.first(cljs.core.next(arglist__8477));
var xs = cljs.core.rest(cljs.core.next(arglist__8477));
return G__8473__delegate.call(this, coll, x, xs);
});
return G__8473;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8468.call(this,coll,x);
default:
return conj__8469.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8469.cljs$lang$applyTo;
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
var nth__8489 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8490 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8489.call(this,coll,n);
case  3 :
return nth__8490.call(this,coll,n,not_found);
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
var get__8492 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8493 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8492.call(this,o,k);
case  3 :
return get__8493.call(this,o,k,not_found);
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
var assoc__8498 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8499 = (function() { 
var G__8501__delegate = function (coll,k,v,kvs){
while(true){
var ret__8497 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8502 = ret__8497;
var G__8503 = cljs.core.first.call(null,kvs);
var G__8504 = cljs.core.second.call(null,kvs);
var G__8505 = cljs.core.nnext.call(null,kvs);
coll = G__8502;
k = G__8503;
v = G__8504;
kvs = G__8505;
continue;
}
} else
{return ret__8497;
}
break;
}
};
var G__8501 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8501__delegate.call(this, coll, k, v, kvs);
};
G__8501.cljs$lang$maxFixedArity = 3;
G__8501.cljs$lang$applyTo = (function (arglist__8506){
var coll = cljs.core.first(arglist__8506);
var k = cljs.core.first(cljs.core.next(arglist__8506));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8506)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8506)));
return G__8501__delegate.call(this, coll, k, v, kvs);
});
return G__8501;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8498.call(this,coll,k,v);
default:
return assoc__8499.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8499.cljs$lang$applyTo;
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
var dissoc__8508 = (function (coll){
return coll;
});
var dissoc__8509 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8510 = (function() { 
var G__8512__delegate = function (coll,k,ks){
while(true){
var ret__8507 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8513 = ret__8507;
var G__8514 = cljs.core.first.call(null,ks);
var G__8515 = cljs.core.next.call(null,ks);
coll = G__8513;
k = G__8514;
ks = G__8515;
continue;
}
} else
{return ret__8507;
}
break;
}
};
var G__8512 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8512__delegate.call(this, coll, k, ks);
};
G__8512.cljs$lang$maxFixedArity = 2;
G__8512.cljs$lang$applyTo = (function (arglist__8609){
var coll = cljs.core.first(arglist__8609);
var k = cljs.core.first(cljs.core.next(arglist__8609));
var ks = cljs.core.rest(cljs.core.next(arglist__8609));
return G__8512__delegate.call(this, coll, k, ks);
});
return G__8512;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8508.call(this,coll);
case  2 :
return dissoc__8509.call(this,coll,k);
default:
return dissoc__8510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8510.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8738 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8739 = x__445__auto____8738;

if(cljs.core.truth_(and__3546__auto____8739))
{var and__3546__auto____8741 = x__445__auto____8738.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8741))
{return cljs.core.not.call(null,x__445__auto____8738.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8741;
}
} else
{return and__3546__auto____8739;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8738);
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
var disj__8749 = (function (coll){
return coll;
});
var disj__8750 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8751 = (function() { 
var G__8754__delegate = function (coll,k,ks){
while(true){
var ret__8748 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8756 = ret__8748;
var G__8777 = cljs.core.first.call(null,ks);
var G__8778 = cljs.core.next.call(null,ks);
coll = G__8756;
k = G__8777;
ks = G__8778;
continue;
}
} else
{return ret__8748;
}
break;
}
};
var G__8754 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8754__delegate.call(this, coll, k, ks);
};
G__8754.cljs$lang$maxFixedArity = 2;
G__8754.cljs$lang$applyTo = (function (arglist__8779){
var coll = cljs.core.first(arglist__8779);
var k = cljs.core.first(cljs.core.next(arglist__8779));
var ks = cljs.core.rest(cljs.core.next(arglist__8779));
return G__8754__delegate.call(this, coll, k, ks);
});
return G__8754;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8749.call(this,coll);
case  2 :
return disj__8750.call(this,coll,k);
default:
return disj__8751.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8751.cljs$lang$applyTo;
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
{var x__445__auto____8784 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8785 = x__445__auto____8784;

if(cljs.core.truth_(and__3546__auto____8785))
{var and__3546__auto____8787 = x__445__auto____8784.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8787))
{return cljs.core.not.call(null,x__445__auto____8784.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8787;
}
} else
{return and__3546__auto____8785;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8784);
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
{var x__445__auto____8790 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8791 = x__445__auto____8790;

if(cljs.core.truth_(and__3546__auto____8791))
{var and__3546__auto____8792 = x__445__auto____8790.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8792))
{return cljs.core.not.call(null,x__445__auto____8790.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8792;
}
} else
{return and__3546__auto____8791;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8790);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8793 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8794 = x__445__auto____8793;

if(cljs.core.truth_(and__3546__auto____8794))
{var and__3546__auto____8795 = x__445__auto____8793.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8795))
{return cljs.core.not.call(null,x__445__auto____8793.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8795;
}
} else
{return and__3546__auto____8794;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8793);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8802 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8803 = x__445__auto____8802;

if(cljs.core.truth_(and__3546__auto____8803))
{var and__3546__auto____8804 = x__445__auto____8802.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8804))
{return cljs.core.not.call(null,x__445__auto____8802.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8804;
}
} else
{return and__3546__auto____8803;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8802);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8855 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8856 = x__445__auto____8855;

if(cljs.core.truth_(and__3546__auto____8856))
{var and__3546__auto____8857 = x__445__auto____8855.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8857))
{return cljs.core.not.call(null,x__445__auto____8855.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8857;
}
} else
{return and__3546__auto____8856;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8855);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8866 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8867 = x__445__auto____8866;

if(cljs.core.truth_(and__3546__auto____8867))
{var and__3546__auto____8869 = x__445__auto____8866.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8869))
{return cljs.core.not.call(null,x__445__auto____8866.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8869;
}
} else
{return and__3546__auto____8867;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8866);
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
{var and__3546__auto____8877 = x__445__auto____8875.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8877))
{return cljs.core.not.call(null,x__445__auto____8875.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8877;
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
var keys__8891 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8891.push(key);
}));
return keys__8891;
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
{var x__445__auto____8898 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8899 = x__445__auto____8898;

if(cljs.core.truth_(and__3546__auto____8899))
{var and__3546__auto____8900 = x__445__auto____8898.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8900))
{return cljs.core.not.call(null,x__445__auto____8898.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8900;
}
} else
{return and__3546__auto____8899;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8898);
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
var and__3546__auto____8913 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8913))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8915 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8915))
{return or__3548__auto____8915;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8913;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8917 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8917))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8917;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8918 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8918))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8918;
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
var and__3546__auto____8920 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8920))
{return (n == n.toFixed());
} else
{return and__3546__auto____8920;
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
if(cljs.core.truth_((function (){var and__3546__auto____8926 = coll;

if(cljs.core.truth_(and__3546__auto____8926))
{var and__3546__auto____8927 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8927))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8927;
}
} else
{return and__3546__auto____8926;
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
var distinct_QMARK___8948 = (function (x){
return true;
});
var distinct_QMARK___8950 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8951 = (function() { 
var G__8956__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8940 = cljs.core.set([y,x]);
var xs__8941 = more;

while(true){
var x__8942 = cljs.core.first.call(null,xs__8941);
var etc__8944 = cljs.core.next.call(null,xs__8941);

if(cljs.core.truth_(xs__8941))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8940,x__8942)))
{return false;
} else
{{
var G__8960 = cljs.core.conj.call(null,s__8940,x__8942);
var G__8961 = etc__8944;
s__8940 = G__8960;
xs__8941 = G__8961;
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
var G__8956 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8956__delegate.call(this, x, y, more);
};
G__8956.cljs$lang$maxFixedArity = 2;
G__8956.cljs$lang$applyTo = (function (arglist__8963){
var x = cljs.core.first(arglist__8963);
var y = cljs.core.first(cljs.core.next(arglist__8963));
var more = cljs.core.rest(cljs.core.next(arglist__8963));
return G__8956__delegate.call(this, x, y, more);
});
return G__8956;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8948.call(this,x);
case  2 :
return distinct_QMARK___8950.call(this,x,y);
default:
return distinct_QMARK___8951.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8951.cljs$lang$applyTo;
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
var r__8973 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8973)))
{return r__8973;
} else
{if(cljs.core.truth_(r__8973))
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
var sort__8990 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8991 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8983 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8983,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8983);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8990.call(this,comp);
case  2 :
return sort__8991.call(this,comp,coll);
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
var sort_by__9017 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9019 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9017.call(this,keyfn,comp);
case  3 :
return sort_by__9019.call(this,keyfn,comp,coll);
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
var reduce__9028 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9029 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9028.call(this,f,val);
case  3 :
return reduce__9029.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9047 = (function (f,coll){
var temp__3695__auto____9037 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9037))
{var s__9040 = temp__3695__auto____9037;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9040),cljs.core.next.call(null,s__9040));
} else
{return f.call(null);
}
});
var seq_reduce__9049 = (function (f,val,coll){
var val__9043 = val;
var coll__9044 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9044))
{{
var G__9057 = f.call(null,val__9043,cljs.core.first.call(null,coll__9044));
var G__9058 = cljs.core.next.call(null,coll__9044);
val__9043 = G__9057;
coll__9044 = G__9058;
continue;
}
} else
{return val__9043;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9047.call(this,f,val);
case  3 :
return seq_reduce__9049.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9067 = null;
var G__9067__9069 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9067__9071 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9067 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9067__9069.call(this,coll,f);
case  3 :
return G__9067__9071.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9067;
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
var _PLUS___9084 = (function (x){
return x;
});
var _PLUS___9086 = (function (x,y){
return (x + y);
});
var _PLUS___9088 = (function() { 
var G__9091__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9091 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9091__delegate.call(this, x, y, more);
};
G__9091.cljs$lang$maxFixedArity = 2;
G__9091.cljs$lang$applyTo = (function (arglist__9093){
var x = cljs.core.first(arglist__9093);
var y = cljs.core.first(cljs.core.next(arglist__9093));
var more = cljs.core.rest(cljs.core.next(arglist__9093));
return G__9091__delegate.call(this, x, y, more);
});
return G__9091;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9082.call(this);
case  1 :
return _PLUS___9084.call(this,x);
case  2 :
return _PLUS___9086.call(this,x,y);
default:
return _PLUS___9088.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9088.cljs$lang$applyTo;
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
var ___9114 = (function (x){
return (- x);
});
var ___9115 = (function (x,y){
return (x - y);
});
var ___9116 = (function() { 
var G__9120__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9120 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9120__delegate.call(this, x, y, more);
};
G__9120.cljs$lang$maxFixedArity = 2;
G__9120.cljs$lang$applyTo = (function (arglist__9121){
var x = cljs.core.first(arglist__9121);
var y = cljs.core.first(cljs.core.next(arglist__9121));
var more = cljs.core.rest(cljs.core.next(arglist__9121));
return G__9120__delegate.call(this, x, y, more);
});
return G__9120;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9114.call(this,x);
case  2 :
return ___9115.call(this,x,y);
default:
return ___9116.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9116.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9175 = (function (){
return 1;
});
var _STAR___9176 = (function (x){
return x;
});
var _STAR___9177 = (function (x,y){
return (x * y);
});
var _STAR___9178 = (function() { 
var G__9184__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9184 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9184__delegate.call(this, x, y, more);
};
G__9184.cljs$lang$maxFixedArity = 2;
G__9184.cljs$lang$applyTo = (function (arglist__9185){
var x = cljs.core.first(arglist__9185);
var y = cljs.core.first(cljs.core.next(arglist__9185));
var more = cljs.core.rest(cljs.core.next(arglist__9185));
return G__9184__delegate.call(this, x, y, more);
});
return G__9184;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9175.call(this);
case  1 :
return _STAR___9176.call(this,x);
case  2 :
return _STAR___9177.call(this,x,y);
default:
return _STAR___9178.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9178.cljs$lang$applyTo;
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
var _SLASH___9188 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9189 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9190 = (function() { 
var G__9196__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9196 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9196__delegate.call(this, x, y, more);
};
G__9196.cljs$lang$maxFixedArity = 2;
G__9196.cljs$lang$applyTo = (function (arglist__9201){
var x = cljs.core.first(arglist__9201);
var y = cljs.core.first(cljs.core.next(arglist__9201));
var more = cljs.core.rest(cljs.core.next(arglist__9201));
return G__9196__delegate.call(this, x, y, more);
});
return G__9196;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9188.call(this,x);
case  2 :
return _SLASH___9189.call(this,x,y);
default:
return _SLASH___9190.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9190.cljs$lang$applyTo;
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
var _LT___9211 = (function (x){
return true;
});
var _LT___9212 = (function (x,y){
return (x < y);
});
var _LT___9213 = (function() { 
var G__9220__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9222 = y;
var G__9223 = cljs.core.first.call(null,more);
var G__9224 = cljs.core.next.call(null,more);
x = G__9222;
y = G__9223;
more = G__9224;
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
var G__9220 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9220__delegate.call(this, x, y, more);
};
G__9220.cljs$lang$maxFixedArity = 2;
G__9220.cljs$lang$applyTo = (function (arglist__9228){
var x = cljs.core.first(arglist__9228);
var y = cljs.core.first(cljs.core.next(arglist__9228));
var more = cljs.core.rest(cljs.core.next(arglist__9228));
return G__9220__delegate.call(this, x, y, more);
});
return G__9220;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9211.call(this,x);
case  2 :
return _LT___9212.call(this,x,y);
default:
return _LT___9213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9213.cljs$lang$applyTo;
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
var _LT__EQ___9239 = (function (x){
return true;
});
var _LT__EQ___9240 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9241 = (function() { 
var G__9243__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9244 = y;
var G__9245 = cljs.core.first.call(null,more);
var G__9246 = cljs.core.next.call(null,more);
x = G__9244;
y = G__9245;
more = G__9246;
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
var G__9243 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9243__delegate.call(this, x, y, more);
};
G__9243.cljs$lang$maxFixedArity = 2;
G__9243.cljs$lang$applyTo = (function (arglist__9252){
var x = cljs.core.first(arglist__9252);
var y = cljs.core.first(cljs.core.next(arglist__9252));
var more = cljs.core.rest(cljs.core.next(arglist__9252));
return G__9243__delegate.call(this, x, y, more);
});
return G__9243;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9239.call(this,x);
case  2 :
return _LT__EQ___9240.call(this,x,y);
default:
return _LT__EQ___9241.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9241.cljs$lang$applyTo;
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
var _GT___9268 = (function (x){
return true;
});
var _GT___9269 = (function (x,y){
return (x > y);
});
var _GT___9270 = (function() { 
var G__9272__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9275 = y;
var G__9277 = cljs.core.first.call(null,more);
var G__9279 = cljs.core.next.call(null,more);
x = G__9275;
y = G__9277;
more = G__9279;
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
var G__9272 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9272__delegate.call(this, x, y, more);
};
G__9272.cljs$lang$maxFixedArity = 2;
G__9272.cljs$lang$applyTo = (function (arglist__9329){
var x = cljs.core.first(arglist__9329);
var y = cljs.core.first(cljs.core.next(arglist__9329));
var more = cljs.core.rest(cljs.core.next(arglist__9329));
return G__9272__delegate.call(this, x, y, more);
});
return G__9272;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9268.call(this,x);
case  2 :
return _GT___9269.call(this,x,y);
default:
return _GT___9270.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9270.cljs$lang$applyTo;
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
var _GT__EQ___9343 = (function (x){
return true;
});
var _GT__EQ___9344 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9345 = (function() { 
var G__9347__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9350 = y;
var G__9351 = cljs.core.first.call(null,more);
var G__9352 = cljs.core.next.call(null,more);
x = G__9350;
y = G__9351;
more = G__9352;
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
var G__9347 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9347__delegate.call(this, x, y, more);
};
G__9347.cljs$lang$maxFixedArity = 2;
G__9347.cljs$lang$applyTo = (function (arglist__9358){
var x = cljs.core.first(arglist__9358);
var y = cljs.core.first(cljs.core.next(arglist__9358));
var more = cljs.core.rest(cljs.core.next(arglist__9358));
return G__9347__delegate.call(this, x, y, more);
});
return G__9347;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9343.call(this,x);
case  2 :
return _GT__EQ___9344.call(this,x,y);
default:
return _GT__EQ___9345.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9345.cljs$lang$applyTo;
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
var max__9368 = (function (x){
return x;
});
var max__9369 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9370 = (function() { 
var G__9379__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9379 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9379__delegate.call(this, x, y, more);
};
G__9379.cljs$lang$maxFixedArity = 2;
G__9379.cljs$lang$applyTo = (function (arglist__9381){
var x = cljs.core.first(arglist__9381);
var y = cljs.core.first(cljs.core.next(arglist__9381));
var more = cljs.core.rest(cljs.core.next(arglist__9381));
return G__9379__delegate.call(this, x, y, more);
});
return G__9379;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9368.call(this,x);
case  2 :
return max__9369.call(this,x,y);
default:
return max__9370.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9370.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9389 = (function (x){
return x;
});
var min__9390 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9391 = (function() { 
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
G__9394.cljs$lang$applyTo = (function (arglist__9395){
var x = cljs.core.first(arglist__9395);
var y = cljs.core.first(cljs.core.next(arglist__9395));
var more = cljs.core.rest(cljs.core.next(arglist__9395));
return G__9394__delegate.call(this, x, y, more);
});
return G__9394;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9389.call(this,x);
case  2 :
return min__9390.call(this,x,y);
default:
return min__9391.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9391.cljs$lang$applyTo;
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
var rem__9440 = (n % d);

return cljs.core.fix.call(null,((n - rem__9440) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9445 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9445));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9446 = (function (){
return Math.random.call(null);
});
var rand__9447 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9446.call(this);
case  1 :
return rand__9447.call(this,n);
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
var _EQ__EQ___9556 = (function (x){
return true;
});
var _EQ__EQ___9557 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9558 = (function() { 
var G__9560__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9561 = y;
var G__9562 = cljs.core.first.call(null,more);
var G__9563 = cljs.core.next.call(null,more);
x = G__9561;
y = G__9562;
more = G__9563;
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
var G__9560 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9560__delegate.call(this, x, y, more);
};
G__9560.cljs$lang$maxFixedArity = 2;
G__9560.cljs$lang$applyTo = (function (arglist__9567){
var x = cljs.core.first(arglist__9567);
var y = cljs.core.first(cljs.core.next(arglist__9567));
var more = cljs.core.rest(cljs.core.next(arglist__9567));
return G__9560__delegate.call(this, x, y, more);
});
return G__9560;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9556.call(this,x);
case  2 :
return _EQ__EQ___9557.call(this,x,y);
default:
return _EQ__EQ___9558.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9558.cljs$lang$applyTo;
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
var n__9571 = n;
var xs__9572 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9573 = xs__9572;

if(cljs.core.truth_(and__3546__auto____9573))
{return (n__9571 > 0);
} else
{return and__3546__auto____9573;
}
})()))
{{
var G__9577 = (n__9571 - 1);
var G__9578 = cljs.core.next.call(null,xs__9572);
n__9571 = G__9577;
xs__9572 = G__9578;
continue;
}
} else
{return xs__9572;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9588 = null;
var G__9588__9590 = (function (coll,n){
var temp__3695__auto____9579 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9579))
{var xs__9580 = temp__3695__auto____9579;

return cljs.core.first.call(null,xs__9580);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9588__9592 = (function (coll,n,not_found){
var temp__3695__auto____9583 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9583))
{var xs__9586 = temp__3695__auto____9583;

return cljs.core.first.call(null,xs__9586);
} else
{return not_found;
}
});
G__9588 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9588__9590.call(this,coll,n);
case  3 :
return G__9588__9592.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9588;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9642 = (function (){
return "";
});
var str_STAR___9643 = (function (x){
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
var str_STAR___9644 = (function() { 
var G__9646__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9647 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9648 = cljs.core.next.call(null,more);
sb = G__9647;
more = G__9648;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9646 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9646__delegate.call(this, x, ys);
};
G__9646.cljs$lang$maxFixedArity = 1;
G__9646.cljs$lang$applyTo = (function (arglist__9649){
var x = cljs.core.first(arglist__9649);
var ys = cljs.core.rest(arglist__9649);
return G__9646__delegate.call(this, x, ys);
});
return G__9646;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9642.call(this);
case  1 :
return str_STAR___9643.call(this,x);
default:
return str_STAR___9644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9644.cljs$lang$applyTo;
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
var str__9662 = (function (){
return "";
});
var str__9663 = (function (x){
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
var str__9664 = (function() { 
var G__9668__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9668 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9668__delegate.call(this, x, ys);
};
G__9668.cljs$lang$maxFixedArity = 1;
G__9668.cljs$lang$applyTo = (function (arglist__9670){
var x = cljs.core.first(arglist__9670);
var ys = cljs.core.rest(arglist__9670);
return G__9668__delegate.call(this, x, ys);
});
return G__9668;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9662.call(this);
case  1 :
return str__9663.call(this,x);
default:
return str__9664.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9664.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9678 = (function (s,start){
return s.substring(start);
});
var subs__9680 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9678.call(this,s,start);
case  3 :
return subs__9680.call(this,s,start,end);
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
var symbol__9691 = (function (name){
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
var symbol__9692 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9691.call(this,ns);
case  2 :
return symbol__9692.call(this,ns,name);
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
var keyword__9699 = (function (name){
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
var keyword__9701 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9699.call(this,ns);
case  2 :
return keyword__9701.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9794 = cljs.core.seq.call(null,x);
var ys__9797 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9794)))
{return cljs.core.nil_QMARK_.call(null,ys__9797);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9797)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9794),cljs.core.first.call(null,ys__9797))))
{{
var G__9808 = cljs.core.next.call(null,xs__9794);
var G__9809 = cljs.core.next.call(null,ys__9797);
xs__9794 = G__9808;
ys__9797 = G__9809;
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
var G__9819__9820 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9819__9820))
{var G__9822__9825 = cljs.core.first.call(null,G__9819__9820);
var vec__9823__9826 = G__9822__9825;
var key_name__9827 = cljs.core.nth.call(null,vec__9823__9826,0,null);
var f__9828 = cljs.core.nth.call(null,vec__9823__9826,1,null);
var G__9819__9829 = G__9819__9820;

var G__9822__9831 = G__9822__9825;
var G__9819__9832 = G__9819__9829;

while(true){
var vec__9833__9835 = G__9822__9831;
var key_name__9837 = cljs.core.nth.call(null,vec__9833__9835,0,null);
var f__9838 = cljs.core.nth.call(null,vec__9833__9835,1,null);
var G__9819__9840 = G__9819__9832;

var str_name__9841 = cljs.core.name.call(null,key_name__9837);

obj[str_name__9841] = f__9838;
var temp__3698__auto____9844 = cljs.core.next.call(null,G__9819__9840);

if(cljs.core.truth_(temp__3698__auto____9844))
{var G__9819__9846 = temp__3698__auto____9844;

{
var G__9857 = cljs.core.first.call(null,G__9819__9846);
var G__9858 = G__9819__9846;
G__9822__9831 = G__9857;
G__9819__9832 = G__9858;
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
var this__9861 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9862 = this;
return (new cljs.core.List(this__9862.meta,o,coll,(this__9862.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9863 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9864 = this;
return this__9864.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9865 = this;
return this__9865.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9866 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9867 = this;
return this__9867.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9868 = this;
return this__9868.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9869 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9870 = this;
return (new cljs.core.List(meta,this__9870.first,this__9870.rest,this__9870.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9872 = this;
return this__9872.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9874 = this;
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
var this__10019 = this;
return (new cljs.core.List(this__10019.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10020 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10021 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10022 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10023 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10024 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10025 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10027 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10032 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10034 = this;
return this__10034.meta;
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
list.cljs$lang$applyTo = (function (arglist__10069){
var items = cljs.core.seq( arglist__10069 );;
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
var this__10078 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10078.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10081 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10086 = this;
return this__10086.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10087 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10087.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10087.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10088 = this;
return this__10088.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10093 = this;
return (new cljs.core.Cons(meta,this__10093.first,this__10093.rest));
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
var G__10109 = null;
var G__10109__10110 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10109__10111 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10109 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10109__10110.call(this,string,f);
case  3 :
return G__10109__10111.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10109;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10116 = null;
var G__10116__10118 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10116__10119 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10116 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10116__10118.call(this,string,k);
case  3 :
return G__10116__10119.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10116;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10125 = null;
var G__10125__10126 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10125__10127 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10125 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10125__10126.call(this,string,n);
case  3 :
return G__10125__10127.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10125;
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
var G__10136 = null;
var G__10136__10137 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10136__10138 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10136 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10136__10137.call(this,this$,coll);
case  3 :
return G__10136__10138.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10136;
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
var x__10159 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10159;
} else
{lazy_seq.x = x__10159.call(null);
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
var this__10176 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10182 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10183 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10183.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10184 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10186 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10187 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10188 = this;
return this__10188.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10194 = this;
return (new cljs.core.LazySeq(meta,this__10194.realized,this__10194.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10242 = cljs.core.array.call(null);

var s__10243 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10243)))
{ary__10242.push(cljs.core.first.call(null,s__10243));
{
var G__10246 = cljs.core.next.call(null,s__10243);
s__10243 = G__10246;
continue;
}
} else
{return ary__10242;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10249 = s;
var i__10250 = n;
var sum__10251 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10253 = (i__10250 > 0);

if(cljs.core.truth_(and__3546__auto____10253))
{return cljs.core.seq.call(null,s__10249);
} else
{return and__3546__auto____10253;
}
})()))
{{
var G__10261 = cljs.core.next.call(null,s__10249);
var G__10262 = (i__10250 - 1);
var G__10263 = (sum__10251 + 1);
s__10249 = G__10261;
i__10250 = G__10262;
sum__10251 = G__10263;
continue;
}
} else
{return sum__10251;
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
var concat__10287 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10288 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10289 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10274 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10274))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10274),concat.call(null,cljs.core.rest.call(null,s__10274),y));
} else
{return y;
}
})));
});
var concat__10290 = (function() { 
var G__10293__delegate = function (x,y,zs){
var cat__10284 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10275 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10275))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10275),cat.call(null,cljs.core.rest.call(null,xys__10275),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10284.call(null,concat.call(null,x,y),zs);
};
var G__10293 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10293__delegate.call(this, x, y, zs);
};
G__10293.cljs$lang$maxFixedArity = 2;
G__10293.cljs$lang$applyTo = (function (arglist__10305){
var x = cljs.core.first(arglist__10305);
var y = cljs.core.first(cljs.core.next(arglist__10305));
var zs = cljs.core.rest(cljs.core.next(arglist__10305));
return G__10293__delegate.call(this, x, y, zs);
});
return G__10293;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10287.call(this);
case  1 :
return concat__10288.call(this,x);
case  2 :
return concat__10289.call(this,x,y);
default:
return concat__10290.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10290.cljs$lang$applyTo;
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
var list_STAR___10313 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10314 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10315 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10316 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10317 = (function() { 
var G__10325__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10325 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10325__delegate.call(this, a, b, c, d, more);
};
G__10325.cljs$lang$maxFixedArity = 4;
G__10325.cljs$lang$applyTo = (function (arglist__10326){
var a = cljs.core.first(arglist__10326);
var b = cljs.core.first(cljs.core.next(arglist__10326));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10326)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10326))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10326))));
return G__10325__delegate.call(this, a, b, c, d, more);
});
return G__10325;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10313.call(this,a);
case  2 :
return list_STAR___10314.call(this,a,b);
case  3 :
return list_STAR___10315.call(this,a,b,c);
case  4 :
return list_STAR___10316.call(this,a,b,c,d);
default:
return list_STAR___10317.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10317.cljs$lang$applyTo;
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
var apply__10351 = (function (f,args){
var fixed_arity__10331 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10331 + 1)) <= fixed_arity__10331)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10352 = (function (f,x,args){
var arglist__10334 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10335 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10334,fixed_arity__10335) <= fixed_arity__10335)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10334));
} else
{return f.cljs$lang$applyTo(arglist__10334);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10334));
}
});
var apply__10353 = (function (f,x,y,args){
var arglist__10336 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10337 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10336,fixed_arity__10337) <= fixed_arity__10337)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10336));
} else
{return f.cljs$lang$applyTo(arglist__10336);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10336));
}
});
var apply__10354 = (function (f,x,y,z,args){
var arglist__10340 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10341 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10340,fixed_arity__10341) <= fixed_arity__10341)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10340));
} else
{return f.cljs$lang$applyTo(arglist__10340);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10340));
}
});
var apply__10355 = (function() { 
var G__10366__delegate = function (f,a,b,c,d,args){
var arglist__10348 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10349 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10348,fixed_arity__10349) <= fixed_arity__10349)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10348));
} else
{return f.cljs$lang$applyTo(arglist__10348);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10348));
}
};
var G__10366 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10366__delegate.call(this, f, a, b, c, d, args);
};
G__10366.cljs$lang$maxFixedArity = 5;
G__10366.cljs$lang$applyTo = (function (arglist__10371){
var f = cljs.core.first(arglist__10371);
var a = cljs.core.first(cljs.core.next(arglist__10371));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10371)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10371))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10371)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10371)))));
return G__10366__delegate.call(this, f, a, b, c, d, args);
});
return G__10366;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10351.call(this,f,a);
case  3 :
return apply__10352.call(this,f,a,b);
case  4 :
return apply__10353.call(this,f,a,b,c);
case  5 :
return apply__10354.call(this,f,a,b,c,d);
default:
return apply__10355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10355.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10410){
var obj = cljs.core.first(arglist__10410);
var f = cljs.core.first(cljs.core.next(arglist__10410));
var args = cljs.core.rest(cljs.core.next(arglist__10410));
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
var not_EQ___10412 = (function (x){
return false;
});
var not_EQ___10413 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10414 = (function() { 
var G__10416__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10416 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10416__delegate.call(this, x, y, more);
};
G__10416.cljs$lang$maxFixedArity = 2;
G__10416.cljs$lang$applyTo = (function (arglist__10419){
var x = cljs.core.first(arglist__10419);
var y = cljs.core.first(cljs.core.next(arglist__10419));
var more = cljs.core.rest(cljs.core.next(arglist__10419));
return G__10416__delegate.call(this, x, y, more);
});
return G__10416;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10412.call(this,x);
case  2 :
return not_EQ___10413.call(this,x,y);
default:
return not_EQ___10414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10414.cljs$lang$applyTo;
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
var G__10431 = pred;
var G__10432 = cljs.core.next.call(null,coll);
pred = G__10431;
coll = G__10432;
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
{var or__3548__auto____10437 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10437))
{return or__3548__auto____10437;
} else
{{
var G__10440 = pred;
var G__10441 = cljs.core.next.call(null,coll);
pred = G__10440;
coll = G__10441;
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
var G__10468 = null;
var G__10468__10469 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10468__10470 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10468__10471 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10468__10472 = (function() { 
var G__10482__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10482 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10482__delegate.call(this, x, y, zs);
};
G__10482.cljs$lang$maxFixedArity = 2;
G__10482.cljs$lang$applyTo = (function (arglist__10484){
var x = cljs.core.first(arglist__10484);
var y = cljs.core.first(cljs.core.next(arglist__10484));
var zs = cljs.core.rest(cljs.core.next(arglist__10484));
return G__10482__delegate.call(this, x, y, zs);
});
return G__10482;
})()
;
G__10468 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10468__10469.call(this);
case  1 :
return G__10468__10470.call(this,x);
case  2 :
return G__10468__10471.call(this,x,y);
default:
return G__10468__10472.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10468.cljs$lang$maxFixedArity = 2;
G__10468.cljs$lang$applyTo = G__10468__10472.cljs$lang$applyTo;
return G__10468;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10530__delegate = function (args){
return x;
};
var G__10530 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10530__delegate.call(this, args);
};
G__10530.cljs$lang$maxFixedArity = 0;
G__10530.cljs$lang$applyTo = (function (arglist__10531){
var args = cljs.core.seq( arglist__10531 );;
return G__10530__delegate.call(this, args);
});
return G__10530;
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
var comp__10540 = (function (){
return cljs.core.identity;
});
var comp__10541 = (function (f){
return f;
});
var comp__10542 = (function (f,g){
return (function() {
var G__10758 = null;
var G__10758__10759 = (function (){
return f.call(null,g.call(null));
});
var G__10758__10760 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10758__10761 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10758__10762 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10758__10763 = (function() { 
var G__10768__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10768 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10768__delegate.call(this, x, y, z, args);
};
G__10768.cljs$lang$maxFixedArity = 3;
G__10768.cljs$lang$applyTo = (function (arglist__10770){
var x = cljs.core.first(arglist__10770);
var y = cljs.core.first(cljs.core.next(arglist__10770));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10770)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10770)));
return G__10768__delegate.call(this, x, y, z, args);
});
return G__10768;
})()
;
G__10758 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10758__10759.call(this);
case  1 :
return G__10758__10760.call(this,x);
case  2 :
return G__10758__10761.call(this,x,y);
case  3 :
return G__10758__10762.call(this,x,y,z);
default:
return G__10758__10763.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10758.cljs$lang$maxFixedArity = 3;
G__10758.cljs$lang$applyTo = G__10758__10763.cljs$lang$applyTo;
return G__10758;
})()
});
var comp__10543 = (function (f,g,h){
return (function() {
var G__10777 = null;
var G__10777__10779 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10777__10780 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10777__10781 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10777__10784 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10777__10785 = (function() { 
var G__10789__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10789 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10789__delegate.call(this, x, y, z, args);
};
G__10789.cljs$lang$maxFixedArity = 3;
G__10789.cljs$lang$applyTo = (function (arglist__10791){
var x = cljs.core.first(arglist__10791);
var y = cljs.core.first(cljs.core.next(arglist__10791));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10791)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10791)));
return G__10789__delegate.call(this, x, y, z, args);
});
return G__10789;
})()
;
G__10777 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10777__10779.call(this);
case  1 :
return G__10777__10780.call(this,x);
case  2 :
return G__10777__10781.call(this,x,y);
case  3 :
return G__10777__10784.call(this,x,y,z);
default:
return G__10777__10785.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10777.cljs$lang$maxFixedArity = 3;
G__10777.cljs$lang$applyTo = G__10777__10785.cljs$lang$applyTo;
return G__10777;
})()
});
var comp__10544 = (function() { 
var G__10796__delegate = function (f1,f2,f3,fs){
var fs__10534 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10800__delegate = function (args){
var ret__10535 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10534),args);
var fs__10536 = cljs.core.next.call(null,fs__10534);

while(true){
if(cljs.core.truth_(fs__10536))
{{
var G__10807 = cljs.core.first.call(null,fs__10536).call(null,ret__10535);
var G__10808 = cljs.core.next.call(null,fs__10536);
ret__10535 = G__10807;
fs__10536 = G__10808;
continue;
}
} else
{return ret__10535;
}
break;
}
};
var G__10800 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10800__delegate.call(this, args);
};
G__10800.cljs$lang$maxFixedArity = 0;
G__10800.cljs$lang$applyTo = (function (arglist__10811){
var args = cljs.core.seq( arglist__10811 );;
return G__10800__delegate.call(this, args);
});
return G__10800;
})()
;
};
var G__10796 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10796__delegate.call(this, f1, f2, f3, fs);
};
G__10796.cljs$lang$maxFixedArity = 3;
G__10796.cljs$lang$applyTo = (function (arglist__10818){
var f1 = cljs.core.first(arglist__10818);
var f2 = cljs.core.first(cljs.core.next(arglist__10818));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10818)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10818)));
return G__10796__delegate.call(this, f1, f2, f3, fs);
});
return G__10796;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10540.call(this);
case  1 :
return comp__10541.call(this,f1);
case  2 :
return comp__10542.call(this,f1,f2);
case  3 :
return comp__10543.call(this,f1,f2,f3);
default:
return comp__10544.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10544.cljs$lang$applyTo;
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
var partial__10952 = (function (f,arg1){
return (function() { 
var G__10959__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10959 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10959__delegate.call(this, args);
};
G__10959.cljs$lang$maxFixedArity = 0;
G__10959.cljs$lang$applyTo = (function (arglist__10965){
var args = cljs.core.seq( arglist__10965 );;
return G__10959__delegate.call(this, args);
});
return G__10959;
})()
;
});
var partial__10953 = (function (f,arg1,arg2){
return (function() { 
var G__10973__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10973 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10973__delegate.call(this, args);
};
G__10973.cljs$lang$maxFixedArity = 0;
G__10973.cljs$lang$applyTo = (function (arglist__10975){
var args = cljs.core.seq( arglist__10975 );;
return G__10973__delegate.call(this, args);
});
return G__10973;
})()
;
});
var partial__10954 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10977__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10977 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10977__delegate.call(this, args);
};
G__10977.cljs$lang$maxFixedArity = 0;
G__10977.cljs$lang$applyTo = (function (arglist__10978){
var args = cljs.core.seq( arglist__10978 );;
return G__10977__delegate.call(this, args);
});
return G__10977;
})()
;
});
var partial__10955 = (function() { 
var G__10980__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10981__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10981 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10981__delegate.call(this, args);
};
G__10981.cljs$lang$maxFixedArity = 0;
G__10981.cljs$lang$applyTo = (function (arglist__10984){
var args = cljs.core.seq( arglist__10984 );;
return G__10981__delegate.call(this, args);
});
return G__10981;
})()
;
};
var G__10980 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10980__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10980.cljs$lang$maxFixedArity = 4;
G__10980.cljs$lang$applyTo = (function (arglist__10985){
var f = cljs.core.first(arglist__10985);
var arg1 = cljs.core.first(cljs.core.next(arglist__10985));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10985)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10985))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10985))));
return G__10980__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10980;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10952.call(this,f,arg1);
case  3 :
return partial__10953.call(this,f,arg1,arg2);
case  4 :
return partial__10954.call(this,f,arg1,arg2,arg3);
default:
return partial__10955.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10955.cljs$lang$applyTo;
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
var fnil__11033 = (function (f,x){
return (function() {
var G__11041 = null;
var G__11041__11045 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__11041__11047 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__11041__11049 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__11041__11052 = (function() { 
var G__11056__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__11056 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11056__delegate.call(this, a, b, c, ds);
};
G__11056.cljs$lang$maxFixedArity = 3;
G__11056.cljs$lang$applyTo = (function (arglist__11058){
var a = cljs.core.first(arglist__11058);
var b = cljs.core.first(cljs.core.next(arglist__11058));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11058)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11058)));
return G__11056__delegate.call(this, a, b, c, ds);
});
return G__11056;
})()
;
G__11041 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__11041__11045.call(this,a);
case  2 :
return G__11041__11047.call(this,a,b);
case  3 :
return G__11041__11049.call(this,a,b,c);
default:
return G__11041__11052.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11041.cljs$lang$maxFixedArity = 3;
G__11041.cljs$lang$applyTo = G__11041__11052.cljs$lang$applyTo;
return G__11041;
})()
});
var fnil__11034 = (function (f,x,y){
return (function() {
var G__11060 = null;
var G__11060__11061 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11060__11062 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11060__11063 = (function() { 
var G__11068__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11068 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11068__delegate.call(this, a, b, c, ds);
};
G__11068.cljs$lang$maxFixedArity = 3;
G__11068.cljs$lang$applyTo = (function (arglist__11074){
var a = cljs.core.first(arglist__11074);
var b = cljs.core.first(cljs.core.next(arglist__11074));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11074)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11074)));
return G__11068__delegate.call(this, a, b, c, ds);
});
return G__11068;
})()
;
G__11060 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11060__11061.call(this,a,b);
case  3 :
return G__11060__11062.call(this,a,b,c);
default:
return G__11060__11063.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11060.cljs$lang$maxFixedArity = 3;
G__11060.cljs$lang$applyTo = G__11060__11063.cljs$lang$applyTo;
return G__11060;
})()
});
var fnil__11035 = (function (f,x,y,z){
return (function() {
var G__11081 = null;
var G__11081__11082 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11081__11084 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11081__11086 = (function() { 
var G__11130__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11130 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11130__delegate.call(this, a, b, c, ds);
};
G__11130.cljs$lang$maxFixedArity = 3;
G__11130.cljs$lang$applyTo = (function (arglist__11137){
var a = cljs.core.first(arglist__11137);
var b = cljs.core.first(cljs.core.next(arglist__11137));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11137)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11137)));
return G__11130__delegate.call(this, a, b, c, ds);
});
return G__11130;
})()
;
G__11081 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11081__11082.call(this,a,b);
case  3 :
return G__11081__11084.call(this,a,b,c);
default:
return G__11081__11086.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11081.cljs$lang$maxFixedArity = 3;
G__11081.cljs$lang$applyTo = G__11081__11086.cljs$lang$applyTo;
return G__11081;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__11033.call(this,f,x);
case  3 :
return fnil__11034.call(this,f,x,y);
case  4 :
return fnil__11035.call(this,f,x,y,z);
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
var mapi__11148 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11143 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11143))
{var s__11144 = temp__3698__auto____11143;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11144)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11144)));
} else
{return null;
}
})));
});

return mapi__11148.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11160 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11160))
{var s__11165 = temp__3698__auto____11160;

var x__11166 = f.call(null,cljs.core.first.call(null,s__11165));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11166)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11165));
} else
{return cljs.core.cons.call(null,x__11166,keep.call(null,f,cljs.core.rest.call(null,s__11165)));
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
var keepi__11361 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11347 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11347))
{var s__11348 = temp__3698__auto____11347;

var x__11349 = f.call(null,idx,cljs.core.first.call(null,s__11348));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11349)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11348));
} else
{return cljs.core.cons.call(null,x__11349,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11348)));
}
} else
{return null;
}
})));
});

return keepi__11361.call(null,0,coll);
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
var every_pred__11527 = (function (p){
return (function() {
var ep1 = null;
var ep1__11532 = (function (){
return true;
});
var ep1__11533 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11534 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11393 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11393))
{return p.call(null,y);
} else
{return and__3546__auto____11393;
}
})());
});
var ep1__11535 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11394 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11394))
{var and__3546__auto____11395 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11395))
{return p.call(null,z);
} else
{return and__3546__auto____11395;
}
} else
{return and__3546__auto____11394;
}
})());
});
var ep1__11536 = (function() { 
var G__11540__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11398 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11398))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11398;
}
})());
};
var G__11540 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11540__delegate.call(this, x, y, z, args);
};
G__11540.cljs$lang$maxFixedArity = 3;
G__11540.cljs$lang$applyTo = (function (arglist__11543){
var x = cljs.core.first(arglist__11543);
var y = cljs.core.first(cljs.core.next(arglist__11543));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11543)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11543)));
return G__11540__delegate.call(this, x, y, z, args);
});
return G__11540;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11532.call(this);
case  1 :
return ep1__11533.call(this,x);
case  2 :
return ep1__11534.call(this,x,y);
case  3 :
return ep1__11535.call(this,x,y,z);
default:
return ep1__11536.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11536.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11528 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11557 = (function (){
return true;
});
var ep2__11558 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11401 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11401))
{return p2.call(null,x);
} else
{return and__3546__auto____11401;
}
})());
});
var ep2__11559 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11404 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11404))
{var and__3546__auto____11405 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11405))
{var and__3546__auto____11406 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11406))
{return p2.call(null,y);
} else
{return and__3546__auto____11406;
}
} else
{return and__3546__auto____11405;
}
} else
{return and__3546__auto____11404;
}
})());
});
var ep2__11560 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11408 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11408))
{var and__3546__auto____11410 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11410))
{var and__3546__auto____11417 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11417))
{var and__3546__auto____11418 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11418))
{var and__3546__auto____11419 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11419))
{return p2.call(null,z);
} else
{return and__3546__auto____11419;
}
} else
{return and__3546__auto____11418;
}
} else
{return and__3546__auto____11417;
}
} else
{return and__3546__auto____11410;
}
} else
{return and__3546__auto____11408;
}
})());
});
var ep2__11561 = (function() { 
var G__11569__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11423 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11423))
{return cljs.core.every_QMARK_.call(null,(function (p1__11174_SHARP_){
var and__3546__auto____11424 = p1.call(null,p1__11174_SHARP_);

if(cljs.core.truth_(and__3546__auto____11424))
{return p2.call(null,p1__11174_SHARP_);
} else
{return and__3546__auto____11424;
}
}),args);
} else
{return and__3546__auto____11423;
}
})());
};
var G__11569 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11569__delegate.call(this, x, y, z, args);
};
G__11569.cljs$lang$maxFixedArity = 3;
G__11569.cljs$lang$applyTo = (function (arglist__11583){
var x = cljs.core.first(arglist__11583);
var y = cljs.core.first(cljs.core.next(arglist__11583));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11583)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11583)));
return G__11569__delegate.call(this, x, y, z, args);
});
return G__11569;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11557.call(this);
case  1 :
return ep2__11558.call(this,x);
case  2 :
return ep2__11559.call(this,x,y);
case  3 :
return ep2__11560.call(this,x,y,z);
default:
return ep2__11561.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11561.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11529 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11584 = (function (){
return true;
});
var ep3__11585 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11427 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11427))
{var and__3546__auto____11428 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11428))
{return p3.call(null,x);
} else
{return and__3546__auto____11428;
}
} else
{return and__3546__auto____11427;
}
})());
});
var ep3__11587 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11431 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11431))
{var and__3546__auto____11434 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11434))
{var and__3546__auto____11436 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11436))
{var and__3546__auto____11439 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11439))
{var and__3546__auto____11447 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11447))
{return p3.call(null,y);
} else
{return and__3546__auto____11447;
}
} else
{return and__3546__auto____11439;
}
} else
{return and__3546__auto____11436;
}
} else
{return and__3546__auto____11434;
}
} else
{return and__3546__auto____11431;
}
})());
});
var ep3__11588 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11450 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11450))
{var and__3546__auto____11453 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11453))
{var and__3546__auto____11455 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11455))
{var and__3546__auto____11462 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11462))
{var and__3546__auto____11463 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11463))
{var and__3546__auto____11465 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11465))
{var and__3546__auto____11467 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11467))
{var and__3546__auto____11469 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11469))
{return p3.call(null,z);
} else
{return and__3546__auto____11469;
}
} else
{return and__3546__auto____11467;
}
} else
{return and__3546__auto____11465;
}
} else
{return and__3546__auto____11463;
}
} else
{return and__3546__auto____11462;
}
} else
{return and__3546__auto____11455;
}
} else
{return and__3546__auto____11453;
}
} else
{return and__3546__auto____11450;
}
})());
});
var ep3__11589 = (function() { 
var G__11645__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11474 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11474))
{return cljs.core.every_QMARK_.call(null,(function (p1__11175_SHARP_){
var and__3546__auto____11499 = p1.call(null,p1__11175_SHARP_);

if(cljs.core.truth_(and__3546__auto____11499))
{var and__3546__auto____11500 = p2.call(null,p1__11175_SHARP_);

if(cljs.core.truth_(and__3546__auto____11500))
{return p3.call(null,p1__11175_SHARP_);
} else
{return and__3546__auto____11500;
}
} else
{return and__3546__auto____11499;
}
}),args);
} else
{return and__3546__auto____11474;
}
})());
};
var G__11645 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11645__delegate.call(this, x, y, z, args);
};
G__11645.cljs$lang$maxFixedArity = 3;
G__11645.cljs$lang$applyTo = (function (arglist__11652){
var x = cljs.core.first(arglist__11652);
var y = cljs.core.first(cljs.core.next(arglist__11652));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11652)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11652)));
return G__11645__delegate.call(this, x, y, z, args);
});
return G__11645;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11584.call(this);
case  1 :
return ep3__11585.call(this,x);
case  2 :
return ep3__11587.call(this,x,y);
case  3 :
return ep3__11588.call(this,x,y,z);
default:
return ep3__11589.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11589.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11530 = (function() { 
var G__11655__delegate = function (p1,p2,p3,ps){
var ps__11503 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11661 = (function (){
return true;
});
var epn__11662 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11176_SHARP_){
return p1__11176_SHARP_.call(null,x);
}),ps__11503);
});
var epn__11663 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11177_SHARP_){
var and__3546__auto____11508 = p1__11177_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11508))
{return p1__11177_SHARP_.call(null,y);
} else
{return and__3546__auto____11508;
}
}),ps__11503);
});
var epn__11664 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11179_SHARP_){
var and__3546__auto____11512 = p1__11179_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11512))
{var and__3546__auto____11514 = p1__11179_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11514))
{return p1__11179_SHARP_.call(null,z);
} else
{return and__3546__auto____11514;
}
} else
{return and__3546__auto____11512;
}
}),ps__11503);
});
var epn__11665 = (function() { 
var G__11679__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11519 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11519))
{return cljs.core.every_QMARK_.call(null,(function (p1__11180_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11180_SHARP_,args);
}),ps__11503);
} else
{return and__3546__auto____11519;
}
})());
};
var G__11679 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11679__delegate.call(this, x, y, z, args);
};
G__11679.cljs$lang$maxFixedArity = 3;
G__11679.cljs$lang$applyTo = (function (arglist__11683){
var x = cljs.core.first(arglist__11683);
var y = cljs.core.first(cljs.core.next(arglist__11683));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11683)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11683)));
return G__11679__delegate.call(this, x, y, z, args);
});
return G__11679;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11661.call(this);
case  1 :
return epn__11662.call(this,x);
case  2 :
return epn__11663.call(this,x,y);
case  3 :
return epn__11664.call(this,x,y,z);
default:
return epn__11665.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11665.cljs$lang$applyTo;
return epn;
})()
};
var G__11655 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11655__delegate.call(this, p1, p2, p3, ps);
};
G__11655.cljs$lang$maxFixedArity = 3;
G__11655.cljs$lang$applyTo = (function (arglist__11688){
var p1 = cljs.core.first(arglist__11688);
var p2 = cljs.core.first(cljs.core.next(arglist__11688));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11688)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11688)));
return G__11655__delegate.call(this, p1, p2, p3, ps);
});
return G__11655;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11527.call(this,p1);
case  2 :
return every_pred__11528.call(this,p1,p2);
case  3 :
return every_pred__11529.call(this,p1,p2,p3);
default:
return every_pred__11530.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11530.cljs$lang$applyTo;
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
var some_fn__11794 = (function (p){
return (function() {
var sp1 = null;
var sp1__11880 = (function (){
return null;
});
var sp1__11881 = (function (x){
return p.call(null,x);
});
var sp1__11882 = (function (x,y){
var or__3548__auto____11698 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11698))
{return or__3548__auto____11698;
} else
{return p.call(null,y);
}
});
var sp1__11883 = (function (x,y,z){
var or__3548__auto____11699 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11699))
{return or__3548__auto____11699;
} else
{var or__3548__auto____11701 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11701))
{return or__3548__auto____11701;
} else
{return p.call(null,z);
}
}
});
var sp1__11884 = (function() { 
var G__11892__delegate = function (x,y,z,args){
var or__3548__auto____11704 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11704))
{return or__3548__auto____11704;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11892 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11892__delegate.call(this, x, y, z, args);
};
G__11892.cljs$lang$maxFixedArity = 3;
G__11892.cljs$lang$applyTo = (function (arglist__11894){
var x = cljs.core.first(arglist__11894);
var y = cljs.core.first(cljs.core.next(arglist__11894));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11894)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11894)));
return G__11892__delegate.call(this, x, y, z, args);
});
return G__11892;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11880.call(this);
case  1 :
return sp1__11881.call(this,x);
case  2 :
return sp1__11882.call(this,x,y);
case  3 :
return sp1__11883.call(this,x,y,z);
default:
return sp1__11884.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11884.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11795 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11900 = (function (){
return null;
});
var sp2__11901 = (function (x){
var or__3548__auto____11705 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11705))
{return or__3548__auto____11705;
} else
{return p2.call(null,x);
}
});
var sp2__11902 = (function (x,y){
var or__3548__auto____11706 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11706))
{return or__3548__auto____11706;
} else
{var or__3548__auto____11707 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11707))
{return or__3548__auto____11707;
} else
{var or__3548__auto____11708 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11708))
{return or__3548__auto____11708;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11903 = (function (x,y,z){
var or__3548__auto____11714 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11714))
{return or__3548__auto____11714;
} else
{var or__3548__auto____11715 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11715))
{return or__3548__auto____11715;
} else
{var or__3548__auto____11722 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11722))
{return or__3548__auto____11722;
} else
{var or__3548__auto____11723 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11723))
{return or__3548__auto____11723;
} else
{var or__3548__auto____11724 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11724))
{return or__3548__auto____11724;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11904 = (function() { 
var G__11912__delegate = function (x,y,z,args){
var or__3548__auto____11728 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11728))
{return or__3548__auto____11728;
} else
{return cljs.core.some.call(null,(function (p1__11378_SHARP_){
var or__3548__auto____11730 = p1.call(null,p1__11378_SHARP_);

if(cljs.core.truth_(or__3548__auto____11730))
{return or__3548__auto____11730;
} else
{return p2.call(null,p1__11378_SHARP_);
}
}),args);
}
};
var G__11912 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11912__delegate.call(this, x, y, z, args);
};
G__11912.cljs$lang$maxFixedArity = 3;
G__11912.cljs$lang$applyTo = (function (arglist__11913){
var x = cljs.core.first(arglist__11913);
var y = cljs.core.first(cljs.core.next(arglist__11913));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11913)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11913)));
return G__11912__delegate.call(this, x, y, z, args);
});
return G__11912;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11900.call(this);
case  1 :
return sp2__11901.call(this,x);
case  2 :
return sp2__11902.call(this,x,y);
case  3 :
return sp2__11903.call(this,x,y,z);
default:
return sp2__11904.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11904.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11796 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11914 = (function (){
return null;
});
var sp3__11915 = (function (x){
var or__3548__auto____11733 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11733))
{return or__3548__auto____11733;
} else
{var or__3548__auto____11740 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11740))
{return or__3548__auto____11740;
} else
{return p3.call(null,x);
}
}
});
var sp3__11916 = (function (x,y){
var or__3548__auto____11742 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11742))
{return or__3548__auto____11742;
} else
{var or__3548__auto____11745 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11745))
{return or__3548__auto____11745;
} else
{var or__3548__auto____11747 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11747))
{return or__3548__auto____11747;
} else
{var or__3548__auto____11748 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11748))
{return or__3548__auto____11748;
} else
{var or__3548__auto____11749 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11749))
{return or__3548__auto____11749;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11917 = (function (x,y,z){
var or__3548__auto____11752 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11752))
{return or__3548__auto____11752;
} else
{var or__3548__auto____11755 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11755))
{return or__3548__auto____11755;
} else
{var or__3548__auto____11758 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11758))
{return or__3548__auto____11758;
} else
{var or__3548__auto____11759 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11759))
{return or__3548__auto____11759;
} else
{var or__3548__auto____11761 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11761))
{return or__3548__auto____11761;
} else
{var or__3548__auto____11762 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11762))
{return or__3548__auto____11762;
} else
{var or__3548__auto____11763 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11763))
{return or__3548__auto____11763;
} else
{var or__3548__auto____11764 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11764))
{return or__3548__auto____11764;
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
var sp3__11918 = (function() { 
var G__11929__delegate = function (x,y,z,args){
var or__3548__auto____11772 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11772))
{return or__3548__auto____11772;
} else
{return cljs.core.some.call(null,(function (p1__11380_SHARP_){
var or__3548__auto____11774 = p1.call(null,p1__11380_SHARP_);

if(cljs.core.truth_(or__3548__auto____11774))
{return or__3548__auto____11774;
} else
{var or__3548__auto____11775 = p2.call(null,p1__11380_SHARP_);

if(cljs.core.truth_(or__3548__auto____11775))
{return or__3548__auto____11775;
} else
{return p3.call(null,p1__11380_SHARP_);
}
}
}),args);
}
};
var G__11929 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11929__delegate.call(this, x, y, z, args);
};
G__11929.cljs$lang$maxFixedArity = 3;
G__11929.cljs$lang$applyTo = (function (arglist__11989){
var x = cljs.core.first(arglist__11989);
var y = cljs.core.first(cljs.core.next(arglist__11989));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11989)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11989)));
return G__11929__delegate.call(this, x, y, z, args);
});
return G__11929;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11914.call(this);
case  1 :
return sp3__11915.call(this,x);
case  2 :
return sp3__11916.call(this,x,y);
case  3 :
return sp3__11917.call(this,x,y,z);
default:
return sp3__11918.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11918.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11797 = (function() { 
var G__11990__delegate = function (p1,p2,p3,ps){
var ps__11777 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11992 = (function (){
return null;
});
var spn__11993 = (function (x){
return cljs.core.some.call(null,(function (p1__11381_SHARP_){
return p1__11381_SHARP_.call(null,x);
}),ps__11777);
});
var spn__11994 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11382_SHARP_){
var or__3548__auto____11784 = p1__11382_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11784))
{return or__3548__auto____11784;
} else
{return p1__11382_SHARP_.call(null,y);
}
}),ps__11777);
});
var spn__11995 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11383_SHARP_){
var or__3548__auto____11785 = p1__11383_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11785))
{return or__3548__auto____11785;
} else
{var or__3548__auto____11789 = p1__11383_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11789))
{return or__3548__auto____11789;
} else
{return p1__11383_SHARP_.call(null,z);
}
}
}),ps__11777);
});
var spn__11997 = (function() { 
var G__12008__delegate = function (x,y,z,args){
var or__3548__auto____11790 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11790))
{return or__3548__auto____11790;
} else
{return cljs.core.some.call(null,(function (p1__11385_SHARP_){
return cljs.core.some.call(null,p1__11385_SHARP_,args);
}),ps__11777);
}
};
var G__12008 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12008__delegate.call(this, x, y, z, args);
};
G__12008.cljs$lang$maxFixedArity = 3;
G__12008.cljs$lang$applyTo = (function (arglist__12011){
var x = cljs.core.first(arglist__12011);
var y = cljs.core.first(cljs.core.next(arglist__12011));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12011)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12011)));
return G__12008__delegate.call(this, x, y, z, args);
});
return G__12008;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11992.call(this);
case  1 :
return spn__11993.call(this,x);
case  2 :
return spn__11994.call(this,x,y);
case  3 :
return spn__11995.call(this,x,y,z);
default:
return spn__11997.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11997.cljs$lang$applyTo;
return spn;
})()
};
var G__11990 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11990__delegate.call(this, p1, p2, p3, ps);
};
G__11990.cljs$lang$maxFixedArity = 3;
G__11990.cljs$lang$applyTo = (function (arglist__12016){
var p1 = cljs.core.first(arglist__12016);
var p2 = cljs.core.first(cljs.core.next(arglist__12016));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12016)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12016)));
return G__11990__delegate.call(this, p1, p2, p3, ps);
});
return G__11990;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11794.call(this,p1);
case  2 :
return some_fn__11795.call(this,p1,p2);
case  3 :
return some_fn__11796.call(this,p1,p2,p3);
default:
return some_fn__11797.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11797.cljs$lang$applyTo;
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
var map__12078 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12022 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12022))
{var s__12025 = temp__3698__auto____12022;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__12025)),map.call(null,f,cljs.core.rest.call(null,s__12025)));
} else
{return null;
}
})));
});
var map__12079 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12026 = cljs.core.seq.call(null,c1);
var s2__12027 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12028 = s1__12026;

if(cljs.core.truth_(and__3546__auto____12028))
{return s2__12027;
} else
{return and__3546__auto____12028;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12026),cljs.core.first.call(null,s2__12027)),map.call(null,f,cljs.core.rest.call(null,s1__12026),cljs.core.rest.call(null,s2__12027)));
} else
{return null;
}
})));
});
var map__12080 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12033 = cljs.core.seq.call(null,c1);
var s2__12034 = cljs.core.seq.call(null,c2);
var s3__12036 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____12040 = s1__12033;

if(cljs.core.truth_(and__3546__auto____12040))
{var and__3546__auto____12044 = s2__12034;

if(cljs.core.truth_(and__3546__auto____12044))
{return s3__12036;
} else
{return and__3546__auto____12044;
}
} else
{return and__3546__auto____12040;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12033),cljs.core.first.call(null,s2__12034),cljs.core.first.call(null,s3__12036)),map.call(null,f,cljs.core.rest.call(null,s1__12033),cljs.core.rest.call(null,s2__12034),cljs.core.rest.call(null,s3__12036)));
} else
{return null;
}
})));
});
var map__12081 = (function() { 
var G__12095__delegate = function (f,c1,c2,c3,colls){
var step__12070 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12052 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12052)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12052),step.call(null,map.call(null,cljs.core.rest,ss__12052)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11694_SHARP_){
return cljs.core.apply.call(null,f,p1__11694_SHARP_);
}),step__12070.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12095 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12095__delegate.call(this, f, c1, c2, c3, colls);
};
G__12095.cljs$lang$maxFixedArity = 4;
G__12095.cljs$lang$applyTo = (function (arglist__12101){
var f = cljs.core.first(arglist__12101);
var c1 = cljs.core.first(cljs.core.next(arglist__12101));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12101)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12101))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12101))));
return G__12095__delegate.call(this, f, c1, c2, c3, colls);
});
return G__12095;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__12078.call(this,f,c1);
case  3 :
return map__12079.call(this,f,c1,c2);
case  4 :
return map__12080.call(this,f,c1,c2,c3);
default:
return map__12081.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__12081.cljs$lang$applyTo;
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
{var temp__3698__auto____12108 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12108))
{var s__12109 = temp__3698__auto____12108;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12109),take.call(null,(n - 1),cljs.core.rest.call(null,s__12109)));
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
var step__12123 = (function (n,coll){
while(true){
var s__12118 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12119 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12119))
{return s__12118;
} else
{return and__3546__auto____12119;
}
})()))
{{
var G__12129 = (n - 1);
var G__12130 = cljs.core.rest.call(null,s__12118);
n = G__12129;
coll = G__12130;
continue;
}
} else
{return s__12118;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12123.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12137 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12138 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12137.call(this,n);
case  2 :
return drop_last__12138.call(this,n,s);
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
var s__12140 = cljs.core.seq.call(null,coll);
var lead__12141 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12141))
{{
var G__12145 = cljs.core.next.call(null,s__12140);
var G__12146 = cljs.core.next.call(null,lead__12141);
s__12140 = G__12145;
lead__12141 = G__12146;
continue;
}
} else
{return s__12140;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12153 = (function (pred,coll){
while(true){
var s__12148 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12152 = s__12148;

if(cljs.core.truth_(and__3546__auto____12152))
{return pred.call(null,cljs.core.first.call(null,s__12148));
} else
{return and__3546__auto____12152;
}
})()))
{{
var G__12158 = pred;
var G__12159 = cljs.core.rest.call(null,s__12148);
pred = G__12158;
coll = G__12159;
continue;
}
} else
{return s__12148;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12153.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12164 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12164))
{var s__12167 = temp__3698__auto____12164;

return cljs.core.concat.call(null,s__12167,cycle.call(null,s__12167));
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
var repeat__12176 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12177 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12176.call(this,n);
case  2 :
return repeat__12177.call(this,n,x);
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
var repeatedly__12188 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12189 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12188.call(this,n);
case  2 :
return repeatedly__12189.call(this,n,f);
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
var interleave__12222 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12199 = cljs.core.seq.call(null,c1);
var s2__12200 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12201 = s1__12199;

if(cljs.core.truth_(and__3546__auto____12201))
{return s2__12200;
} else
{return and__3546__auto____12201;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12199),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12200),interleave.call(null,cljs.core.rest.call(null,s1__12199),cljs.core.rest.call(null,s2__12200))));
} else
{return null;
}
})));
});
var interleave__12223 = (function() { 
var G__12226__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12209 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12209)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12209),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12209)));
} else
{return null;
}
})));
};
var G__12226 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12226__delegate.call(this, c1, c2, colls);
};
G__12226.cljs$lang$maxFixedArity = 2;
G__12226.cljs$lang$applyTo = (function (arglist__12229){
var c1 = cljs.core.first(arglist__12229);
var c2 = cljs.core.first(cljs.core.next(arglist__12229));
var colls = cljs.core.rest(cljs.core.next(arglist__12229));
return G__12226__delegate.call(this, c1, c2, colls);
});
return G__12226;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12222.call(this,c1,c2);
default:
return interleave__12223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12223.cljs$lang$applyTo;
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
var cat__12241 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12237 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12237))
{var coll__12239 = temp__3695__auto____12237;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12239),cat.call(null,cljs.core.rest.call(null,coll__12239),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12241.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12255 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12256 = (function() { 
var G__12260__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12260 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12260__delegate.call(this, f, coll, colls);
};
G__12260.cljs$lang$maxFixedArity = 2;
G__12260.cljs$lang$applyTo = (function (arglist__12261){
var f = cljs.core.first(arglist__12261);
var coll = cljs.core.first(cljs.core.next(arglist__12261));
var colls = cljs.core.rest(cljs.core.next(arglist__12261));
return G__12260__delegate.call(this, f, coll, colls);
});
return G__12260;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12255.call(this,f,coll);
default:
return mapcat__12256.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12256.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12266 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12266))
{var s__12267 = temp__3698__auto____12266;

var f__12268 = cljs.core.first.call(null,s__12267);
var r__12269 = cljs.core.rest.call(null,s__12267);

if(cljs.core.truth_(pred.call(null,f__12268)))
{return cljs.core.cons.call(null,f__12268,filter.call(null,pred,r__12269));
} else
{return filter.call(null,pred,r__12269);
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
var walk__12278 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12278.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12276_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12276_SHARP_));
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
var partition__12364 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12365 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12355 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12355))
{var s__12357 = temp__3698__auto____12355;

var p__12358 = cljs.core.take.call(null,n,s__12357);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12358))))
{return cljs.core.cons.call(null,p__12358,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12357)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12366 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12361 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12361))
{var s__12362 = temp__3698__auto____12361;

var p__12363 = cljs.core.take.call(null,n,s__12362);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12363))))
{return cljs.core.cons.call(null,p__12363,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12362)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12363,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12364.call(this,n,step);
case  3 :
return partition__12365.call(this,n,step,pad);
case  4 :
return partition__12366.call(this,n,step,pad,coll);
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
var get_in__12375 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12376 = (function (m,ks,not_found){
var sentinel__12368 = cljs.core.lookup_sentinel;
var m__12369 = m;
var ks__12370 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12370))
{var m__12371 = cljs.core.get.call(null,m__12369,cljs.core.first.call(null,ks__12370),sentinel__12368);

if(cljs.core.truth_((sentinel__12368 === m__12371)))
{return not_found;
} else
{{
var G__12381 = sentinel__12368;
var G__12382 = m__12371;
var G__12383 = cljs.core.next.call(null,ks__12370);
sentinel__12368 = G__12381;
m__12369 = G__12382;
ks__12370 = G__12383;
continue;
}
}
} else
{return m__12369;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12375.call(this,m,ks);
case  3 :
return get_in__12376.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12387,v){
var vec__12389__12391 = p__12387;
var k__12392 = cljs.core.nth.call(null,vec__12389__12391,0,null);
var ks__12393 = cljs.core.nthnext.call(null,vec__12389__12391,1);

if(cljs.core.truth_(ks__12393))
{return cljs.core.assoc.call(null,m,k__12392,assoc_in.call(null,cljs.core.get.call(null,m,k__12392),ks__12393,v));
} else
{return cljs.core.assoc.call(null,m,k__12392,v);
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
var update_in__delegate = function (m,p__12404,f,args){
var vec__12405__12406 = p__12404;
var k__12407 = cljs.core.nth.call(null,vec__12405__12406,0,null);
var ks__12408 = cljs.core.nthnext.call(null,vec__12405__12406,1);

if(cljs.core.truth_(ks__12408))
{return cljs.core.assoc.call(null,m,k__12407,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12407),ks__12408,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12407,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12407),args));
}
};
var update_in = function (m,p__12404,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12404, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12409){
var m = cljs.core.first(arglist__12409);
var p__12404 = cljs.core.first(cljs.core.next(arglist__12409));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12409)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12409)));
return update_in__delegate.call(this, m, p__12404, f, args);
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
var this__12424 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12494 = null;
var G__12494__12495 = (function (coll,k){
var this__12426 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12494__12496 = (function (coll,k,not_found){
var this__12428 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12494 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12494__12495.call(this,coll,k);
case  3 :
return G__12494__12496.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12494;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12463 = this;
var new_array__12465 = cljs.core.aclone.call(null,this__12463.array);

(new_array__12465[k] = v);
return (new cljs.core.Vector(this__12463.meta,new_array__12465));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12502 = null;
var G__12502__12503 = (function (coll,k){
var this__12468 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12502__12504 = (function (coll,k,not_found){
var this__12469 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12502 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12502__12503.call(this,coll,k);
case  3 :
return G__12502__12504.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12502;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12470 = this;
var new_array__12471 = cljs.core.aclone.call(null,this__12470.array);

new_array__12471.push(o);
return (new cljs.core.Vector(this__12470.meta,new_array__12471));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12511 = null;
var G__12511__12512 = (function (v,f){
var this__12472 = this;
return cljs.core.ci_reduce.call(null,this__12472.array,f);
});
var G__12511__12513 = (function (v,f,start){
var this__12473 = this;
return cljs.core.ci_reduce.call(null,this__12473.array,f,start);
});
G__12511 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12511__12512.call(this,v,f);
case  3 :
return G__12511__12513.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12511;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12474 = this;
if(cljs.core.truth_((this__12474.array.length > 0)))
{var vector_seq__12475 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12474.array.length)))
{return cljs.core.cons.call(null,(this__12474.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12475.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12476 = this;
return this__12476.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12478 = this;
var count__12479 = this__12478.array.length;

if(cljs.core.truth_((count__12479 > 0)))
{return (this__12478.array[(count__12479 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12480 = this;
if(cljs.core.truth_((this__12480.array.length > 0)))
{var new_array__12481 = cljs.core.aclone.call(null,this__12480.array);

new_array__12481.pop();
return (new cljs.core.Vector(this__12480.meta,new_array__12481));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12482 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12483 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12484 = this;
return (new cljs.core.Vector(meta,this__12484.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12485 = this;
return this__12485.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12519 = null;
var G__12519__12520 = (function (coll,n){
var this__12486 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12487 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12487))
{return (n < this__12486.array.length);
} else
{return and__3546__auto____12487;
}
})()))
{return (this__12486.array[n]);
} else
{return null;
}
});
var G__12519__12521 = (function (coll,n,not_found){
var this__12488 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12489 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12489))
{return (n < this__12488.array.length);
} else
{return and__3546__auto____12489;
}
})()))
{return (this__12488.array[n]);
} else
{return not_found;
}
});
G__12519 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12519__12520.call(this,coll,n);
case  3 :
return G__12519__12521.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12519;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12492 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12492.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12532){
var args = cljs.core.seq( arglist__12532 );;
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
var this__12553 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12584 = null;
var G__12584__12586 = (function (coll,k){
var this__12554 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12584__12588 = (function (coll,k,not_found){
var this__12555 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12584 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12584__12586.call(this,coll,k);
case  3 :
return G__12584__12588.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12584;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12560 = this;
var v_pos__12561 = (this__12560.start + key);

return (new cljs.core.Subvec(this__12560.meta,cljs.core._assoc.call(null,this__12560.v,v_pos__12561,val),this__12560.start,((this__12560.end > (v_pos__12561 + 1)) ? this__12560.end : (v_pos__12561 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12621 = null;
var G__12621__12622 = (function (coll,k){
var this__12562 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12621__12624 = (function (coll,k,not_found){
var this__12563 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12621 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12621__12622.call(this,coll,k);
case  3 :
return G__12621__12624.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12621;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12564 = this;
return (new cljs.core.Subvec(this__12564.meta,cljs.core._assoc_n.call(null,this__12564.v,this__12564.end,o),this__12564.start,(this__12564.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12626 = null;
var G__12626__12627 = (function (coll,f){
var this__12565 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12626__12628 = (function (coll,f,start){
var this__12566 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12626 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12626__12627.call(this,coll,f);
case  3 :
return G__12626__12628.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12626;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12567 = this;
var subvec_seq__12568 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12567.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12567.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12568.call(null,this__12567.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12569 = this;
return (this__12569.end - this__12569.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12570 = this;
return cljs.core._nth.call(null,this__12570.v,(this__12570.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12571 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12571.start,this__12571.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12571.meta,this__12571.v,this__12571.start,(this__12571.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12572 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12575 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12579 = this;
return (new cljs.core.Subvec(meta,this__12579.v,this__12579.start,this__12579.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12580 = this;
return this__12580.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12657 = null;
var G__12657__12658 = (function (coll,n){
var this__12581 = this;
return cljs.core._nth.call(null,this__12581.v,(this__12581.start + n));
});
var G__12657__12659 = (function (coll,n,not_found){
var this__12582 = this;
return cljs.core._nth.call(null,this__12582.v,(this__12582.start + n),not_found);
});
G__12657 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12657__12658.call(this,coll,n);
case  3 :
return G__12657__12659.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12657;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12583 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12583.meta);
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
var subvec__12669 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12670 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12669.call(this,v,start);
case  3 :
return subvec__12670.call(this,v,start,end);
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
var this__12683 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12686 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12687 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12688 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12688.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12689 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12690 = this;
return cljs.core._first.call(null,this__12690.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12691 = this;
var temp__3695__auto____12692 = cljs.core.next.call(null,this__12691.front);

if(cljs.core.truth_(temp__3695__auto____12692))
{var f1__12693 = temp__3695__auto____12692;

return (new cljs.core.PersistentQueueSeq(this__12691.meta,f1__12693,this__12691.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12691.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12691.meta,this__12691.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12694 = this;
return this__12694.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12696 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12696.front,this__12696.rear));
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
var this__12703 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12704 = this;
if(cljs.core.truth_(this__12704.front))
{return (new cljs.core.PersistentQueue(this__12704.meta,(this__12704.count + 1),this__12704.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12705 = this__12704.rear;

if(cljs.core.truth_(or__3548__auto____12705))
{return or__3548__auto____12705;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12704.meta,(this__12704.count + 1),cljs.core.conj.call(null,this__12704.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12706 = this;
var rear__12707 = cljs.core.seq.call(null,this__12706.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12708 = this__12706.front;

if(cljs.core.truth_(or__3548__auto____12708))
{return or__3548__auto____12708;
} else
{return rear__12707;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12706.front,cljs.core.seq.call(null,rear__12707)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12709 = this;
return this__12709.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12711 = this;
return cljs.core._first.call(null,this__12711.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12714 = this;
if(cljs.core.truth_(this__12714.front))
{var temp__3695__auto____12716 = cljs.core.next.call(null,this__12714.front);

if(cljs.core.truth_(temp__3695__auto____12716))
{var f1__12717 = temp__3695__auto____12716;

return (new cljs.core.PersistentQueue(this__12714.meta,(this__12714.count - 1),f1__12717,this__12714.rear));
} else
{return (new cljs.core.PersistentQueue(this__12714.meta,(this__12714.count - 1),cljs.core.seq.call(null,this__12714.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12721 = this;
return cljs.core.first.call(null,this__12721.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12722 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12725 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12726 = this;
return (new cljs.core.PersistentQueue(meta,this__12726.count,this__12726.front,this__12726.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12729 = this;
return this__12729.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12730 = this;
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
var this__12745 = this;
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
var len__12804 = array.length;

var i__12805 = 0;

while(true){
if(cljs.core.truth_((i__12805 < len__12804)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12805]))))
{return i__12805;
} else
{{
var G__12808 = (i__12805 + incr);
i__12805 = G__12808;
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
var obj_map_contains_key_QMARK___12813 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12814 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12812 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12812))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12812;
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
return obj_map_contains_key_QMARK___12813.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12814.call(this,k,strobj,true_val,false_val);
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
var this__12832 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12954 = null;
var G__12954__12955 = (function (coll,k){
var this__12834 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12954__12956 = (function (coll,k,not_found){
var this__12866 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12866.strobj,(this__12866.strobj[k]),not_found);
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
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12868 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12869 = goog.object.clone.call(null,this__12868.strobj);
var overwrite_QMARK___12870 = new_strobj__12869.hasOwnProperty(k);

(new_strobj__12869[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12870))
{return (new cljs.core.ObjMap(this__12868.meta,this__12868.keys,new_strobj__12869));
} else
{var new_keys__12871 = cljs.core.aclone.call(null,this__12868.keys);

new_keys__12871.push(k);
return (new cljs.core.ObjMap(this__12868.meta,new_keys__12871,new_strobj__12869));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12868.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12878 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12878.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12967 = null;
var G__12967__12968 = (function (coll,k){
var this__12879 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12967__12970 = (function (coll,k,not_found){
var this__12880 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12967 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12967__12968.call(this,coll,k);
case  3 :
return G__12967__12970.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12967;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12881 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12882 = this;
if(cljs.core.truth_((this__12882.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12820_SHARP_){
return cljs.core.vector.call(null,p1__12820_SHARP_,(this__12882.strobj[p1__12820_SHARP_]));
}),this__12882.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12883 = this;
return this__12883.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12884 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12885 = this;
return (new cljs.core.ObjMap(meta,this__12885.keys,this__12885.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12889 = this;
return this__12889.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12891 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12891.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12892 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12946 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12946))
{return this__12892.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12946;
}
})()))
{var new_keys__12947 = cljs.core.aclone.call(null,this__12892.keys);
var new_strobj__12948 = goog.object.clone.call(null,this__12892.strobj);

new_keys__12947.splice(cljs.core.scan_array.call(null,1,k,new_keys__12947),1);
cljs.core.js_delete.call(null,new_strobj__12948,k);
return (new cljs.core.ObjMap(this__12892.meta,new_keys__12947,new_strobj__12948));
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
var this__13013 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13101 = null;
var G__13101__13102 = (function (coll,k){
var this__13043 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13101__13103 = (function (coll,k,not_found){
var this__13044 = this;
var bucket__13047 = (this__13044.hashobj[cljs.core.hash.call(null,k)]);
var i__13049 = (cljs.core.truth_(bucket__13047)?cljs.core.scan_array.call(null,2,k,bucket__13047):null);

if(cljs.core.truth_(i__13049))
{return (bucket__13047[(i__13049 + 1)]);
} else
{return not_found;
}
});
G__13101 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13101__13102.call(this,coll,k);
case  3 :
return G__13101__13103.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13101;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13050 = this;
var h__13052 = cljs.core.hash.call(null,k);
var bucket__13053 = (this__13050.hashobj[h__13052]);

if(cljs.core.truth_(bucket__13053))
{var new_bucket__13054 = cljs.core.aclone.call(null,bucket__13053);
var new_hashobj__13055 = goog.object.clone.call(null,this__13050.hashobj);

(new_hashobj__13055[h__13052] = new_bucket__13054);
var temp__3695__auto____13056 = cljs.core.scan_array.call(null,2,k,new_bucket__13054);

if(cljs.core.truth_(temp__3695__auto____13056))
{var i__13057 = temp__3695__auto____13056;

(new_bucket__13054[(i__13057 + 1)] = v);
return (new cljs.core.HashMap(this__13050.meta,this__13050.count,new_hashobj__13055));
} else
{new_bucket__13054.push(k,v);
return (new cljs.core.HashMap(this__13050.meta,(this__13050.count + 1),new_hashobj__13055));
}
} else
{var new_hashobj__13064 = goog.object.clone.call(null,this__13050.hashobj);

(new_hashobj__13064[h__13052] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13050.meta,(this__13050.count + 1),new_hashobj__13064));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13065 = this;
var bucket__13066 = (this__13065.hashobj[cljs.core.hash.call(null,k)]);
var i__13069 = (cljs.core.truth_(bucket__13066)?cljs.core.scan_array.call(null,2,k,bucket__13066):null);

if(cljs.core.truth_(i__13069))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13119 = null;
var G__13119__13123 = (function (coll,k){
var this__13070 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13119__13125 = (function (coll,k,not_found){
var this__13071 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13119 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13119__13123.call(this,coll,k);
case  3 :
return G__13119__13125.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13119;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13074 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13075 = this;
if(cljs.core.truth_((this__13075.count > 0)))
{var hashes__13078 = cljs.core.js_keys.call(null,this__13075.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12993_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13075.hashobj[p1__12993_SHARP_])));
}),hashes__13078);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13079 = this;
return this__13079.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13080 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13081 = this;
return (new cljs.core.HashMap(meta,this__13081.count,this__13081.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13082 = this;
return this__13082.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13083 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13083.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13085 = this;
var h__13088 = cljs.core.hash.call(null,k);
var bucket__13091 = (this__13085.hashobj[h__13088]);
var i__13092 = (cljs.core.truth_(bucket__13091)?cljs.core.scan_array.call(null,2,k,bucket__13091):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13092)))
{return coll;
} else
{var new_hashobj__13093 = goog.object.clone.call(null,this__13085.hashobj);

if(cljs.core.truth_((3 > bucket__13091.length)))
{cljs.core.js_delete.call(null,new_hashobj__13093,h__13088);
} else
{var new_bucket__13096 = cljs.core.aclone.call(null,bucket__13091);

new_bucket__13096.splice(i__13092,2);
(new_hashobj__13093[h__13088] = new_bucket__13096);
}
return (new cljs.core.HashMap(this__13085.meta,(this__13085.count - 1),new_hashobj__13093));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13252 = ks.length;

var i__13253 = 0;
var out__13254 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13253 < len__13252)))
{{
var G__13259 = (i__13253 + 1);
var G__13260 = cljs.core.assoc.call(null,out__13254,(ks[i__13253]),(vs[i__13253]));
i__13253 = G__13259;
out__13254 = G__13260;
continue;
}
} else
{return out__13254;
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
var in$__13261 = cljs.core.seq.call(null,keyvals);
var out__13262 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13261))
{{
var G__13270 = cljs.core.nnext.call(null,in$__13261);
var G__13271 = cljs.core.assoc.call(null,out__13262,cljs.core.first.call(null,in$__13261),cljs.core.second.call(null,in$__13261));
in$__13261 = G__13270;
out__13262 = G__13271;
continue;
}
} else
{return out__13262;
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
hash_map.cljs$lang$applyTo = (function (arglist__13272){
var keyvals = cljs.core.seq( arglist__13272 );;
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
{return cljs.core.reduce.call(null,(function (p1__13275_SHARP_,p2__13276_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13282 = p1__13275_SHARP_;

if(cljs.core.truth_(or__3548__auto____13282))
{return or__3548__auto____13282;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13276_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13283){
var maps = cljs.core.seq( arglist__13283 );;
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
{var merge_entry__13293 = (function (m,e){
var k__13287 = cljs.core.first.call(null,e);
var v__13289 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13287)))
{return cljs.core.assoc.call(null,m,k__13287,f.call(null,cljs.core.get.call(null,m,k__13287),v__13289));
} else
{return cljs.core.assoc.call(null,m,k__13287,v__13289);
}
});
var merge2__13296 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13293,(function (){var or__3548__auto____13295 = m1;

if(cljs.core.truth_(or__3548__auto____13295))
{return or__3548__auto____13295;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13296,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13300){
var f = cljs.core.first(arglist__13300);
var maps = cljs.core.rest(arglist__13300);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13305 = cljs.core.ObjMap.fromObject([],{});
var keys__13306 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13306))
{var key__13308 = cljs.core.first.call(null,keys__13306);
var entry__13309 = cljs.core.get.call(null,map,key__13308,"﷐'user/not-found");

{
var G__13319 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13309,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13305,key__13308,entry__13309):ret__13305);
var G__13320 = cljs.core.next.call(null,keys__13306);
ret__13305 = G__13319;
keys__13306 = G__13320;
continue;
}
} else
{return ret__13305;
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
var this__13333 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13408 = null;
var G__13408__13411 = (function (coll,v){
var this__13334 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13408__13445 = (function (coll,v,not_found){
var this__13336 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13336.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13408 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13408__13411.call(this,coll,v);
case  3 :
return G__13408__13445.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13408;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13451 = null;
var G__13451__13452 = (function (coll,k){
var this__13384 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13451__13453 = (function (coll,k,not_found){
var this__13385 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13451 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13451__13452.call(this,coll,k);
case  3 :
return G__13451__13453.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13451;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13386 = this;
return (new cljs.core.Set(this__13386.meta,cljs.core.assoc.call(null,this__13386.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13387 = this;
return cljs.core.keys.call(null,this__13387.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13392 = this;
return (new cljs.core.Set(this__13392.meta,cljs.core.dissoc.call(null,this__13392.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13393 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13395 = this;
var and__3546__auto____13397 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13397))
{var and__3546__auto____13398 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13398))
{return cljs.core.every_QMARK_.call(null,(function (p1__13302_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13302_SHARP_);
}),other);
} else
{return and__3546__auto____13398;
}
} else
{return and__3546__auto____13397;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13399 = this;
return (new cljs.core.Set(meta,this__13399.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13400 = this;
return this__13400.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13401 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13401.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13470 = cljs.core.seq.call(null,coll);
var out__13471 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13470))))
{{
var G__13478 = cljs.core.rest.call(null,in$__13470);
var G__13479 = cljs.core.conj.call(null,out__13471,cljs.core.first.call(null,in$__13470));
in$__13470 = G__13478;
out__13471 = G__13479;
continue;
}
} else
{return out__13471;
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
{var n__13481 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13483 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13483))
{var e__13484 = temp__3695__auto____13483;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13484));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13481,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13469_SHARP_){
var temp__3695__auto____13485 = cljs.core.find.call(null,smap,p1__13469_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13485))
{var e__13486 = temp__3695__auto____13485;

return cljs.core.second.call(null,e__13486);
} else
{return p1__13469_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13509 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13498,seen){
while(true){
var vec__13499__13501 = p__13498;
var f__13502 = cljs.core.nth.call(null,vec__13499__13501,0,null);
var xs__13503 = vec__13499__13501;

var temp__3698__auto____13504 = cljs.core.seq.call(null,xs__13503);

if(cljs.core.truth_(temp__3698__auto____13504))
{var s__13506 = temp__3698__auto____13504;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13502)))
{{
var G__13513 = cljs.core.rest.call(null,s__13506);
var G__13514 = seen;
p__13498 = G__13513;
seen = G__13514;
continue;
}
} else
{return cljs.core.cons.call(null,f__13502,step.call(null,cljs.core.rest.call(null,s__13506),cljs.core.conj.call(null,seen,f__13502)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13509.call(null,coll,cljs.core.set([]));
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
{if(cljs.core.truth_((function (){var or__3548__auto____13529 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13529))
{return or__3548__auto____13529;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13531 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13531 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13531 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13557 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13557))
{return or__3548__auto____13557;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13558 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13558 > -1)))
{return cljs.core.subs.call(null,x,2,i__13558);
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
var map__13573 = cljs.core.ObjMap.fromObject([],{});
var ks__13574 = cljs.core.seq.call(null,keys);
var vs__13575 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13582 = ks__13574;

if(cljs.core.truth_(and__3546__auto____13582))
{return vs__13575;
} else
{return and__3546__auto____13582;
}
})()))
{{
var G__13594 = cljs.core.assoc.call(null,map__13573,cljs.core.first.call(null,ks__13574),cljs.core.first.call(null,vs__13575));
var G__13595 = cljs.core.next.call(null,ks__13574);
var G__13596 = cljs.core.next.call(null,vs__13575);
map__13573 = G__13594;
ks__13574 = G__13595;
vs__13575 = G__13596;
continue;
}
} else
{return map__13573;
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
var max_key__13673 = (function (k,x){
return x;
});
var max_key__13674 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13675 = (function() { 
var G__13680__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13569_SHARP_,p2__13570_SHARP_){
return max_key.call(null,k,p1__13569_SHARP_,p2__13570_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13680 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13680__delegate.call(this, k, x, y, more);
};
G__13680.cljs$lang$maxFixedArity = 3;
G__13680.cljs$lang$applyTo = (function (arglist__13683){
var k = cljs.core.first(arglist__13683);
var x = cljs.core.first(cljs.core.next(arglist__13683));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13683)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13683)));
return G__13680__delegate.call(this, k, x, y, more);
});
return G__13680;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13673.call(this,k,x);
case  3 :
return max_key__13674.call(this,k,x,y);
default:
return max_key__13675.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13675.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13695 = (function (k,x){
return x;
});
var min_key__13696 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13697 = (function() { 
var G__13700__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13600_SHARP_,p2__13601_SHARP_){
return min_key.call(null,k,p1__13600_SHARP_,p2__13601_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13700 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13700__delegate.call(this, k, x, y, more);
};
G__13700.cljs$lang$maxFixedArity = 3;
G__13700.cljs$lang$applyTo = (function (arglist__13704){
var k = cljs.core.first(arglist__13704);
var x = cljs.core.first(cljs.core.next(arglist__13704));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13704)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13704)));
return G__13700__delegate.call(this, k, x, y, more);
});
return G__13700;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13695.call(this,k,x);
case  3 :
return min_key__13696.call(this,k,x,y);
default:
return min_key__13697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13697.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13726 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13727 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13719 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13719))
{var s__13720 = temp__3698__auto____13719;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13720),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13720)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13726.call(this,n,step);
case  3 :
return partition_all__13727.call(this,n,step,coll);
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
var temp__3698__auto____13738 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13738))
{var s__13741 = temp__3698__auto____13738;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13741))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13741),take_while.call(null,pred,cljs.core.rest.call(null,s__13741)));
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
var this__13753 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13756 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13828 = null;
var G__13828__13829 = (function (rng,f){
var this__13759 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13828__13831 = (function (rng,f,s){
var this__13760 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13828 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13828__13829.call(this,rng,f);
case  3 :
return G__13828__13831.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13828;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13762 = this;
var comp__13765 = (cljs.core.truth_((this__13762.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13765.call(null,this__13762.start,this__13762.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13768 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13768.end - this__13768.start) / this__13768.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13770 = this;
return this__13770.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13774 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13774.meta,(this__13774.start + this__13774.step),this__13774.end,this__13774.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13776 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13779 = this;
return (new cljs.core.Range(meta,this__13779.start,this__13779.end,this__13779.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13780 = this;
return this__13780.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13841 = null;
var G__13841__13842 = (function (rng,n){
var this__13781 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13781.start + (n * this__13781.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13784 = (this__13781.start > this__13781.end);

if(cljs.core.truth_(and__3546__auto____13784))
{return cljs.core._EQ_.call(null,this__13781.step,0);
} else
{return and__3546__auto____13784;
}
})()))
{return this__13781.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13841__13843 = (function (rng,n,not_found){
var this__13789 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13789.start + (n * this__13789.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13816 = (this__13789.start > this__13789.end);

if(cljs.core.truth_(and__3546__auto____13816))
{return cljs.core._EQ_.call(null,this__13789.step,0);
} else
{return and__3546__auto____13816;
}
})()))
{return this__13789.start;
} else
{return not_found;
}
}
});
G__13841 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13841__13842.call(this,rng,n);
case  3 :
return G__13841__13843.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13841;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13817 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13817.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13851 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13852 = (function (end){
return range.call(null,0,end,1);
});
var range__13853 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13854 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13851.call(this);
case  1 :
return range__13852.call(this,start);
case  2 :
return range__13853.call(this,start,end);
case  3 :
return range__13854.call(this,start,end,step);
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
var temp__3698__auto____13864 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13864))
{var s__13866 = temp__3698__auto____13864;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13866),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13866)));
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
var temp__3698__auto____13892 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13892))
{var s__13894 = temp__3698__auto____13892;

var fst__13897 = cljs.core.first.call(null,s__13894);
var fv__13898 = f.call(null,fst__13897);
var run__13900 = cljs.core.cons.call(null,fst__13897,cljs.core.take_while.call(null,(function (p1__13870_SHARP_){
return cljs.core._EQ_.call(null,fv__13898,f.call(null,p1__13870_SHARP_));
}),cljs.core.next.call(null,s__13894)));

return cljs.core.cons.call(null,run__13900,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13900),s__13894))));
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
var reductions__13980 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13966 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13966))
{var s__13972 = temp__3695__auto____13966;

return reductions.call(null,f,cljs.core.first.call(null,s__13972),cljs.core.rest.call(null,s__13972));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13981 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13976 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13976))
{var s__13977 = temp__3698__auto____13976;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13977)),cljs.core.rest.call(null,s__13977));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13980.call(this,f,init);
case  3 :
return reductions__13981.call(this,f,init,coll);
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
var juxt__14035 = (function (f){
return (function() {
var G__14040 = null;
var G__14040__14041 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14040__14042 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14040__14043 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14040__14044 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14040__14045 = (function() { 
var G__14056__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14056 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14056__delegate.call(this, x, y, z, args);
};
G__14056.cljs$lang$maxFixedArity = 3;
G__14056.cljs$lang$applyTo = (function (arglist__14057){
var x = cljs.core.first(arglist__14057);
var y = cljs.core.first(cljs.core.next(arglist__14057));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14057)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14057)));
return G__14056__delegate.call(this, x, y, z, args);
});
return G__14056;
})()
;
G__14040 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14040__14041.call(this);
case  1 :
return G__14040__14042.call(this,x);
case  2 :
return G__14040__14043.call(this,x,y);
case  3 :
return G__14040__14044.call(this,x,y,z);
default:
return G__14040__14045.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14040.cljs$lang$maxFixedArity = 3;
G__14040.cljs$lang$applyTo = G__14040__14045.cljs$lang$applyTo;
return G__14040;
})()
});
var juxt__14036 = (function (f,g){
return (function() {
var G__14060 = null;
var G__14060__14062 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14060__14063 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14060__14064 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14060__14065 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14060__14066 = (function() { 
var G__14071__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14071 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14071__delegate.call(this, x, y, z, args);
};
G__14071.cljs$lang$maxFixedArity = 3;
G__14071.cljs$lang$applyTo = (function (arglist__14072){
var x = cljs.core.first(arglist__14072);
var y = cljs.core.first(cljs.core.next(arglist__14072));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14072)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14072)));
return G__14071__delegate.call(this, x, y, z, args);
});
return G__14071;
})()
;
G__14060 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14060__14062.call(this);
case  1 :
return G__14060__14063.call(this,x);
case  2 :
return G__14060__14064.call(this,x,y);
case  3 :
return G__14060__14065.call(this,x,y,z);
default:
return G__14060__14066.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14060.cljs$lang$maxFixedArity = 3;
G__14060.cljs$lang$applyTo = G__14060__14066.cljs$lang$applyTo;
return G__14060;
})()
});
var juxt__14037 = (function (f,g,h){
return (function() {
var G__14078 = null;
var G__14078__14079 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14078__14080 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14078__14081 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14078__14082 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14078__14083 = (function() { 
var G__14088__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14088 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14088__delegate.call(this, x, y, z, args);
};
G__14088.cljs$lang$maxFixedArity = 3;
G__14088.cljs$lang$applyTo = (function (arglist__14091){
var x = cljs.core.first(arglist__14091);
var y = cljs.core.first(cljs.core.next(arglist__14091));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14091)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14091)));
return G__14088__delegate.call(this, x, y, z, args);
});
return G__14088;
})()
;
G__14078 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14078__14079.call(this);
case  1 :
return G__14078__14080.call(this,x);
case  2 :
return G__14078__14081.call(this,x,y);
case  3 :
return G__14078__14082.call(this,x,y,z);
default:
return G__14078__14083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14078.cljs$lang$maxFixedArity = 3;
G__14078.cljs$lang$applyTo = G__14078__14083.cljs$lang$applyTo;
return G__14078;
})()
});
var juxt__14038 = (function() { 
var G__14094__delegate = function (f,g,h,fs){
var fs__14018 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14095 = null;
var G__14095__14096 = (function (){
return cljs.core.reduce.call(null,(function (p1__13929_SHARP_,p2__13930_SHARP_){
return cljs.core.conj.call(null,p1__13929_SHARP_,p2__13930_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14018);
});
var G__14095__14097 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13932_SHARP_,p2__13933_SHARP_){
return cljs.core.conj.call(null,p1__13932_SHARP_,p2__13933_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14018);
});
var G__14095__14098 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13934_SHARP_,p2__13949_SHARP_){
return cljs.core.conj.call(null,p1__13934_SHARP_,p2__13949_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14018);
});
var G__14095__14099 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13952_SHARP_,p2__13953_SHARP_){
return cljs.core.conj.call(null,p1__13952_SHARP_,p2__13953_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14018);
});
var G__14095__14100 = (function() { 
var G__14113__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13955_SHARP_,p2__13957_SHARP_){
return cljs.core.conj.call(null,p1__13955_SHARP_,cljs.core.apply.call(null,p2__13957_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14018);
};
var G__14113 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14113__delegate.call(this, x, y, z, args);
};
G__14113.cljs$lang$maxFixedArity = 3;
G__14113.cljs$lang$applyTo = (function (arglist__14119){
var x = cljs.core.first(arglist__14119);
var y = cljs.core.first(cljs.core.next(arglist__14119));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14119)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14119)));
return G__14113__delegate.call(this, x, y, z, args);
});
return G__14113;
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
};
var G__14094 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14094__delegate.call(this, f, g, h, fs);
};
G__14094.cljs$lang$maxFixedArity = 3;
G__14094.cljs$lang$applyTo = (function (arglist__14121){
var f = cljs.core.first(arglist__14121);
var g = cljs.core.first(cljs.core.next(arglist__14121));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14121)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14121)));
return G__14094__delegate.call(this, f, g, h, fs);
});
return G__14094;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14035.call(this,f);
case  2 :
return juxt__14036.call(this,f,g);
case  3 :
return juxt__14037.call(this,f,g,h);
default:
return juxt__14038.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14038.cljs$lang$applyTo;
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
var dorun__14128 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14133 = cljs.core.next.call(null,coll);
coll = G__14133;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14129 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14124 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14124))
{return (n > 0);
} else
{return and__3546__auto____14124;
}
})()))
{{
var G__14138 = (n - 1);
var G__14139 = cljs.core.next.call(null,coll);
n = G__14138;
coll = G__14139;
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
return dorun__14128.call(this,n);
case  2 :
return dorun__14129.call(this,n,coll);
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
var doall__14175 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14176 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14175.call(this,n);
case  2 :
return doall__14176.call(this,n,coll);
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
var matches__14180 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14180),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14180),1)))
{return cljs.core.first.call(null,matches__14180);
} else
{return cljs.core.vec.call(null,matches__14180);
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
var matches__14196 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14196)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14196),1)))
{return cljs.core.first.call(null,matches__14196);
} else
{return cljs.core.vec.call(null,matches__14196);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14208 = cljs.core.re_find.call(null,re,s);
var match_idx__14211 = s.search(re);
var match_str__14214 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14208))?cljs.core.first.call(null,match_data__14208):match_data__14208);
var post_match__14217 = cljs.core.subs.call(null,s,(match_idx__14211 + cljs.core.count.call(null,match_str__14214)));

if(cljs.core.truth_(match_data__14208))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14208,re_seq.call(null,re,post_match__14217));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14234_SHARP_){
return print_one.call(null,p1__14234_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14247 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14247))
{var and__3546__auto____14259 = (function (){var x__445__auto____14250 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14252 = x__445__auto____14250;

if(cljs.core.truth_(and__3546__auto____14252))
{var and__3546__auto____14254 = x__445__auto____14250.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14254))
{return cljs.core.not.call(null,x__445__auto____14250.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14254;
}
} else
{return and__3546__auto____14252;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14250);
}
})();

if(cljs.core.truth_(and__3546__auto____14259))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14259;
}
} else
{return and__3546__auto____14247;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14261 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14262 = x__445__auto____14261;

if(cljs.core.truth_(and__3546__auto____14262))
{var and__3546__auto____14264 = x__445__auto____14261.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14264))
{return cljs.core.not.call(null,x__445__auto____14261.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14264;
}
} else
{return and__3546__auto____14262;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14261);
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
var first_obj__14280 = cljs.core.first.call(null,objs);
var sb__14282 = (new goog.string.StringBuffer());

var G__14283__14285 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14283__14285))
{var obj__14286 = cljs.core.first.call(null,G__14283__14285);
var G__14283__14287 = G__14283__14285;

while(true){
if(cljs.core.truth_((obj__14286 === first_obj__14280)))
{} else
{sb__14282.append(" ");
}
var G__14310__14312 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14286,opts));

if(cljs.core.truth_(G__14310__14312))
{var string__14315 = cljs.core.first.call(null,G__14310__14312);
var G__14310__14316 = G__14310__14312;

while(true){
sb__14282.append(string__14315);
var temp__3698__auto____14318 = cljs.core.next.call(null,G__14310__14316);

if(cljs.core.truth_(temp__3698__auto____14318))
{var G__14310__14319 = temp__3698__auto____14318;

{
var G__14329 = cljs.core.first.call(null,G__14310__14319);
var G__14330 = G__14310__14319;
string__14315 = G__14329;
G__14310__14316 = G__14330;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14321 = cljs.core.next.call(null,G__14283__14287);

if(cljs.core.truth_(temp__3698__auto____14321))
{var G__14283__14322 = temp__3698__auto____14321;

{
var G__14331 = cljs.core.first.call(null,G__14283__14322);
var G__14332 = G__14283__14322;
obj__14286 = G__14331;
G__14283__14287 = G__14332;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14282);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14338 = cljs.core.first.call(null,objs);

var G__14339__14342 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14339__14342))
{var obj__14346 = cljs.core.first.call(null,G__14339__14342);
var G__14339__14348 = G__14339__14342;

while(true){
if(cljs.core.truth_((obj__14346 === first_obj__14338)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14352__14357 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14346,opts));

if(cljs.core.truth_(G__14352__14357))
{var string__14361 = cljs.core.first.call(null,G__14352__14357);
var G__14352__14362 = G__14352__14357;

while(true){
cljs.core.string_print.call(null,string__14361);
var temp__3698__auto____14366 = cljs.core.next.call(null,G__14352__14362);

if(cljs.core.truth_(temp__3698__auto____14366))
{var G__14352__14368 = temp__3698__auto____14366;

{
var G__14380 = cljs.core.first.call(null,G__14352__14368);
var G__14381 = G__14352__14368;
string__14361 = G__14380;
G__14352__14362 = G__14381;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14374 = cljs.core.next.call(null,G__14339__14348);

if(cljs.core.truth_(temp__3698__auto____14374))
{var G__14339__14375 = temp__3698__auto____14374;

{
var G__14383 = cljs.core.first.call(null,G__14339__14375);
var G__14384 = G__14339__14375;
obj__14346 = G__14383;
G__14339__14348 = G__14384;
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
pr_str.cljs$lang$applyTo = (function (arglist__14389){
var objs = cljs.core.seq( arglist__14389 );;
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
pr.cljs$lang$applyTo = (function (arglist__14392){
var objs = cljs.core.seq( arglist__14392 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14398){
var objs = cljs.core.seq( arglist__14398 );;
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
println.cljs$lang$applyTo = (function (arglist__14411){
var objs = cljs.core.seq( arglist__14411 );;
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
prn.cljs$lang$applyTo = (function (arglist__14424){
var objs = cljs.core.seq( arglist__14424 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14431 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14431,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14510 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14510))
{var nspc__14512 = temp__3698__auto____14510;

return cljs.core.str.call(null,nspc__14512,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14514 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14514))
{var nspc__14515 = temp__3698__auto____14514;

return cljs.core.str.call(null,nspc__14515,"/");
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
var pr_pair__14536 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14536,"{",", ","}",opts,coll);
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
var this__14590 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14595 = this;
var G__14600__14602 = cljs.core.seq.call(null,this__14595.watches);

if(cljs.core.truth_(G__14600__14602))
{var G__14605__14609 = cljs.core.first.call(null,G__14600__14602);
var vec__14606__14610 = G__14605__14609;
var key__14612 = cljs.core.nth.call(null,vec__14606__14610,0,null);
var f__14613 = cljs.core.nth.call(null,vec__14606__14610,1,null);
var G__14600__14614 = G__14600__14602;

var G__14605__14617 = G__14605__14609;
var G__14600__14618 = G__14600__14614;

while(true){
var vec__14619__14621 = G__14605__14617;
var key__14622 = cljs.core.nth.call(null,vec__14619__14621,0,null);
var f__14624 = cljs.core.nth.call(null,vec__14619__14621,1,null);
var G__14600__14625 = G__14600__14618;

f__14624.call(null,key__14622,this$,oldval,newval);
var temp__3698__auto____14629 = cljs.core.next.call(null,G__14600__14625);

if(cljs.core.truth_(temp__3698__auto____14629))
{var G__14600__14633 = temp__3698__auto____14629;

{
var G__14676 = cljs.core.first.call(null,G__14600__14633);
var G__14677 = G__14600__14633;
G__14605__14617 = G__14676;
G__14600__14618 = G__14677;
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
var this__14639 = this;
return this$.watches = cljs.core.assoc.call(null,this__14639.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14647 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14647.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14652 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14652.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14660 = this;
return this__14660.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14665 = this;
return this__14665.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14668 = this;
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
var atom__14707 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14708 = (function() { 
var G__14710__delegate = function (x,p__14683){
var map__14685__14686 = p__14683;
var map__14685__14687 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14685__14686))?cljs.core.apply.call(null,cljs.core.hash_map,map__14685__14686):map__14685__14686);
var validator__14693 = cljs.core.get.call(null,map__14685__14687,"﷐'validator");
var meta__14694 = cljs.core.get.call(null,map__14685__14687,"﷐'meta");

return (new cljs.core.Atom(x,meta__14694,validator__14693,null));
};
var G__14710 = function (x,var_args){
var p__14683 = null;
if (goog.isDef(var_args)) {
  p__14683 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14710__delegate.call(this, x, p__14683);
};
G__14710.cljs$lang$maxFixedArity = 1;
G__14710.cljs$lang$applyTo = (function (arglist__14719){
var x = cljs.core.first(arglist__14719);
var p__14683 = cljs.core.rest(arglist__14719);
return G__14710__delegate.call(this, x, p__14683);
});
return G__14710;
})()
;
atom = function(x,var_args){
var p__14683 = var_args;
switch(arguments.length){
case  1 :
return atom__14707.call(this,x);
default:
return atom__14708.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14708.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14721 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14721))
{var validate__14723 = temp__3698__auto____14721;

if(cljs.core.truth_(validate__14723.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14728 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14728,new_value);
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
var swap_BANG___14738 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14741 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14743 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14744 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14745 = (function() { 
var G__14766__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14766 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14766__delegate.call(this, a, f, x, y, z, more);
};
G__14766.cljs$lang$maxFixedArity = 5;
G__14766.cljs$lang$applyTo = (function (arglist__14769){
var a = cljs.core.first(arglist__14769);
var f = cljs.core.first(cljs.core.next(arglist__14769));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14769)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14769))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14769)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14769)))));
return G__14766__delegate.call(this, a, f, x, y, z, more);
});
return G__14766;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14738.call(this,a,f);
case  3 :
return swap_BANG___14741.call(this,a,f,x);
case  4 :
return swap_BANG___14743.call(this,a,f,x,y);
case  5 :
return swap_BANG___14744.call(this,a,f,x,y,z);
default:
return swap_BANG___14745.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14745.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14794){
var iref = cljs.core.first(arglist__14794);
var f = cljs.core.first(cljs.core.next(arglist__14794));
var args = cljs.core.rest(cljs.core.next(arglist__14794));
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
var gensym__14813 = (function (){
return gensym.call(null,"G__");
});
var gensym__14814 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14813.call(this);
case  1 :
return gensym__14814.call(this,prefix_string);
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
var this__14823 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14823.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14824 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14824.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14824.state,this__14824.f);
}
return cljs.core.deref.call(null,this__14824.state);
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
delay.cljs$lang$applyTo = (function (arglist__14860){
var body = cljs.core.seq( arglist__14860 );;
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
var map__14878__14879 = options;
var map__14878__14881 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14878__14879))?cljs.core.apply.call(null,cljs.core.hash_map,map__14878__14879):map__14878__14879);
var keywordize_keys__14883 = cljs.core.get.call(null,map__14878__14881,"﷐'keywordize-keys");
var keyfn__14884 = (cljs.core.truth_(keywordize_keys__14883)?cljs.core.keyword:cljs.core.str);
var f__14902 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14897 = (function iter__14892(s__14893){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14893__14895 = s__14893;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14893__14895)))
{var k__14896 = cljs.core.first.call(null,s__14893__14895);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14884.call(null,k__14896),thisfn.call(null,(x[k__14896]))]),iter__14892.call(null,cljs.core.rest.call(null,s__14893__14895)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14897.call(null,cljs.core.js_keys.call(null,x));
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

return f__14902.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14908){
var x = cljs.core.first(arglist__14908);
var options = cljs.core.rest(arglist__14908);
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
var mem__14909 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14913__delegate = function (args){
var temp__3695__auto____14910 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14909),args);

if(cljs.core.truth_(temp__3695__auto____14910))
{var v__14911 = temp__3695__auto____14910;

return v__14911;
} else
{var ret__14912 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14909,cljs.core.assoc,args,ret__14912);
return ret__14912;
}
};
var G__14913 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14913__delegate.call(this, args);
};
G__14913.cljs$lang$maxFixedArity = 0;
G__14913.cljs$lang$applyTo = (function (arglist__14914){
var args = cljs.core.seq( arglist__14914 );;
return G__14913__delegate.call(this, args);
});
return G__14913;
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
var trampoline__14922 = (function (f){
while(true){
var ret__14915 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14915)))
{{
var G__14928 = ret__14915;
f = G__14928;
continue;
}
} else
{return ret__14915;
}
break;
}
});
var trampoline__14923 = (function() { 
var G__14930__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14930 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14930__delegate.call(this, f, args);
};
G__14930.cljs$lang$maxFixedArity = 1;
G__14930.cljs$lang$applyTo = (function (arglist__14932){
var f = cljs.core.first(arglist__14932);
var args = cljs.core.rest(arglist__14932);
return G__14930__delegate.call(this, f, args);
});
return G__14930;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14922.call(this,f);
default:
return trampoline__14923.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14923.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14933 = (function (){
return rand.call(null,1);
});
var rand__14934 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14933.call(this);
case  1 :
return rand__14934.call(this,n);
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
var k__14938 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14938,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14938,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15022 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15023 = (function (h,child,parent){
var or__3548__auto____14955 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14955))
{return or__3548__auto____14955;
} else
{var or__3548__auto____14959 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14959))
{return or__3548__auto____14959;
} else
{var and__3546__auto____14961 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14961))
{var and__3546__auto____14963 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14963))
{var and__3546__auto____14965 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14965))
{var ret__14967 = true;
var i__14968 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14969 = cljs.core.not.call(null,ret__14967);

if(cljs.core.truth_(or__3548__auto____14969))
{return or__3548__auto____14969;
} else
{return cljs.core._EQ_.call(null,i__14968,cljs.core.count.call(null,parent));
}
})()))
{return ret__14967;
} else
{{
var G__15028 = isa_QMARK_.call(null,h,child.call(null,i__14968),parent.call(null,i__14968));
var G__15029 = (i__14968 + 1);
ret__14967 = G__15028;
i__14968 = G__15029;
continue;
}
}
break;
}
} else
{return and__3546__auto____14965;
}
} else
{return and__3546__auto____14963;
}
} else
{return and__3546__auto____14961;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15022.call(this,h,child);
case  3 :
return isa_QMARK___15023.call(this,h,child,parent);
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
var parents__15034 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15035 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15034.call(this,h);
case  2 :
return parents__15035.call(this,h,tag);
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
var ancestors__15041 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15042 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15041.call(this,h);
case  2 :
return ancestors__15042.call(this,h,tag);
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
var descendants__15047 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15048 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15047.call(this,h);
case  2 :
return descendants__15048.call(this,h,tag);
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
var derive__15119 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15120 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15056 = "﷐'parents".call(null,h);
var td__15057 = "﷐'descendants".call(null,h);
var ta__15058 = "﷐'ancestors".call(null,h);
var tf__15062 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15066 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15056.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15058.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15058.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15056,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15062.call(null,"﷐'ancestors".call(null,h),tag,td__15057,parent,ta__15058),"﷐'descendants":tf__15062.call(null,"﷐'descendants".call(null,h),parent,ta__15058,tag,td__15057)});
})());

if(cljs.core.truth_(or__3548__auto____15066))
{return or__3548__auto____15066;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15119.call(this,h,tag);
case  3 :
return derive__15120.call(this,h,tag,parent);
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
var underive__15139 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15140 = (function (h,tag,parent){
var parentMap__15131 = "﷐'parents".call(null,h);
var childsParents__15132 = (cljs.core.truth_(parentMap__15131.call(null,tag))?cljs.core.disj.call(null,parentMap__15131.call(null,tag),parent):cljs.core.set([]));
var newParents__15133 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15132))?cljs.core.assoc.call(null,parentMap__15131,tag,childsParents__15132):cljs.core.dissoc.call(null,parentMap__15131,tag));
var deriv_seq__15134 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15053_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15053_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15053_SHARP_),cljs.core.second.call(null,p1__15053_SHARP_)));
}),cljs.core.seq.call(null,newParents__15133)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15131.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15054_SHARP_,p2__15055_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15054_SHARP_,p2__15055_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15134));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15139.call(this,h,tag);
case  3 :
return underive__15140.call(this,h,tag,parent);
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
var xprefs__15146 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15149 = (cljs.core.truth_((function (){var and__3546__auto____15148 = xprefs__15146;

if(cljs.core.truth_(and__3546__auto____15148))
{return xprefs__15146.call(null,y);
} else
{return and__3546__auto____15148;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15149))
{return or__3548__auto____15149;
} else
{var or__3548__auto____15152 = (function (){var ps__15151 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15151) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15151),prefer_table)))
{} else
{}
{
var G__15158 = cljs.core.rest.call(null,ps__15151);
ps__15151 = G__15158;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15152))
{return or__3548__auto____15152;
} else
{var or__3548__auto____15154 = (function (){var ps__15153 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15153) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15153),y,prefer_table)))
{} else
{}
{
var G__15160 = cljs.core.rest.call(null,ps__15153);
ps__15153 = G__15160;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15154))
{return or__3548__auto____15154;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15169 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15169))
{return or__3548__auto____15169;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15189 = cljs.core.reduce.call(null,(function (be,p__15178){
var vec__15179__15180 = p__15178;
var k__15181 = cljs.core.nth.call(null,vec__15179__15180,0,null);
var ___15182 = cljs.core.nth.call(null,vec__15179__15180,1,null);
var e__15183 = vec__15179__15180;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15181)))
{var be2__15188 = (cljs.core.truth_((function (){var or__3548__auto____15184 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15184))
{return or__3548__auto____15184;
} else
{return cljs.core.dominates.call(null,k__15181,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15183:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15188),k__15181,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15181," and ",cljs.core.first.call(null,be2__15188),", and neither is preferred")));
}
return be2__15188;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15189))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15189));
return cljs.core.second.call(null,best_entry__15189);
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
if(cljs.core.truth_((function (){var and__3546__auto____15240 = mf;

if(cljs.core.truth_(and__3546__auto____15240))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15240;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15241 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15241))
{return or__3548__auto____15241;
} else
{var or__3548__auto____15242 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15242))
{return or__3548__auto____15242;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15243 = mf;

if(cljs.core.truth_(and__3546__auto____15243))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15243;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15244 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15244))
{return or__3548__auto____15244;
} else
{var or__3548__auto____15245 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15245))
{return or__3548__auto____15245;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15246 = mf;

if(cljs.core.truth_(and__3546__auto____15246))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15246;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15248 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15248))
{return or__3548__auto____15248;
} else
{var or__3548__auto____15250 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15250))
{return or__3548__auto____15250;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15255 = mf;

if(cljs.core.truth_(and__3546__auto____15255))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15255;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15257 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15257))
{return or__3548__auto____15257;
} else
{var or__3548__auto____15258 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15258))
{return or__3548__auto____15258;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15260 = mf;

if(cljs.core.truth_(and__3546__auto____15260))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15260;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15262 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15262))
{return or__3548__auto____15262;
} else
{var or__3548__auto____15263 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15263))
{return or__3548__auto____15263;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15265 = mf;

if(cljs.core.truth_(and__3546__auto____15265))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15265;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15267 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15267))
{return or__3548__auto____15267;
} else
{var or__3548__auto____15269 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15269))
{return or__3548__auto____15269;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15272 = mf;

if(cljs.core.truth_(and__3546__auto____15272))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15272;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15275 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15275))
{return or__3548__auto____15275;
} else
{var or__3548__auto____15276 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15276))
{return or__3548__auto____15276;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15278 = mf;

if(cljs.core.truth_(and__3546__auto____15278))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15278;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15281 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15281))
{return or__3548__auto____15281;
} else
{var or__3548__auto____15282 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15282))
{return or__3548__auto____15282;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15307 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15309 = cljs.core._get_method.call(null,mf,dispatch_val__15307);

if(cljs.core.truth_(target_fn__15309))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15307)));
}
return cljs.core.apply.call(null,target_fn__15309,args);
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
var this__15314 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15316 = this;
cljs.core.swap_BANG_.call(null,this__15316.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15316.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15316.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15316.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15321 = this;
cljs.core.swap_BANG_.call(null,this__15321.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15321.method_cache,this__15321.method_table,this__15321.cached_hierarchy,this__15321.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15324 = this;
cljs.core.swap_BANG_.call(null,this__15324.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15324.method_cache,this__15324.method_table,this__15324.cached_hierarchy,this__15324.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15330 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15330.cached_hierarchy),cljs.core.deref.call(null,this__15330.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15330.method_cache,this__15330.method_table,this__15330.cached_hierarchy,this__15330.hierarchy);
}
var temp__3695__auto____15331 = cljs.core.deref.call(null,this__15330.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15331))
{var target_fn__15332 = temp__3695__auto____15331;

return target_fn__15332;
} else
{var temp__3695__auto____15334 = cljs.core.find_and_cache_best_method.call(null,this__15330.name,dispatch_val,this__15330.hierarchy,this__15330.method_table,this__15330.prefer_table,this__15330.method_cache,this__15330.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15334))
{var target_fn__15335 = temp__3695__auto____15334;

return target_fn__15335;
} else
{return cljs.core.deref.call(null,this__15330.method_table).call(null,this__15330.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15336 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15336.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15336.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15336.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15336.method_cache,this__15336.method_table,this__15336.cached_hierarchy,this__15336.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15343 = this;
return cljs.core.deref.call(null,this__15343.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15344 = this;
return cljs.core.deref.call(null,this__15344.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15348 = this;
return cljs.core.do_dispatch.call(null,mf,this__15348.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15361__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15361 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15361__delegate.call(this, _, args);
};
G__15361.cljs$lang$maxFixedArity = 1;
G__15361.cljs$lang$applyTo = (function (arglist__15362){
var _ = cljs.core.first(arglist__15362);
var args = cljs.core.rest(arglist__15362);
return G__15361__delegate.call(this, _, args);
});
return G__15361;
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
