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
var or__3548__auto____7310 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7310))
{return or__3548__auto____7310;
} else
{var or__3548__auto____7311 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7311))
{return or__3548__auto____7311;
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
var _invoke__7635 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7359 = this$;

if(cljs.core.truth_(and__3546__auto____7359))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7359;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
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
})().call(null,this$);
}
});
var _invoke__7638 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7383 = this$;

if(cljs.core.truth_(and__3546__auto____7383))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7383;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
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
})().call(null,this$,a);
}
});
var _invoke__7639 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7391 = this$;

if(cljs.core.truth_(and__3546__auto____7391))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7391;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
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
})().call(null,this$,a,b);
}
});
var _invoke__7641 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7402 = this$;

if(cljs.core.truth_(and__3546__auto____7402))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7402;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
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
})().call(null,this$,a,b,c);
}
});
var _invoke__7644 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7411 = this$;

if(cljs.core.truth_(and__3546__auto____7411))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7411;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7414 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7414))
{return or__3548__auto____7414;
} else
{var or__3548__auto____7415 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7415))
{return or__3548__auto____7415;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7647 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7420 = this$;

if(cljs.core.truth_(and__3546__auto____7420))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7420;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7423 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7423))
{return or__3548__auto____7423;
} else
{var or__3548__auto____7424 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7424))
{return or__3548__auto____7424;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7649 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7429 = this$;

if(cljs.core.truth_(and__3546__auto____7429))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7429;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7432 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7432))
{return or__3548__auto____7432;
} else
{var or__3548__auto____7434 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7434))
{return or__3548__auto____7434;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7652 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7440 = this$;

if(cljs.core.truth_(and__3546__auto____7440))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7440;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
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
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7656 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7452 = this$;

if(cljs.core.truth_(and__3546__auto____7452))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7452;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7456 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7456))
{return or__3548__auto____7456;
} else
{var or__3548__auto____7458 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7458))
{return or__3548__auto____7458;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7732 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7464 = this$;

if(cljs.core.truth_(and__3546__auto____7464))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7464;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7468 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7468))
{return or__3548__auto____7468;
} else
{var or__3548__auto____7470 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7470))
{return or__3548__auto____7470;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7733 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7476 = this$;

if(cljs.core.truth_(and__3546__auto____7476))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7476;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7481 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7481))
{return or__3548__auto____7481;
} else
{var or__3548__auto____7482 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7482))
{return or__3548__auto____7482;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7734 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7487 = this$;

if(cljs.core.truth_(and__3546__auto____7487))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7487;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7489 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7489))
{return or__3548__auto____7489;
} else
{var or__3548__auto____7491 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7491))
{return or__3548__auto____7491;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7735 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7495 = this$;

if(cljs.core.truth_(and__3546__auto____7495))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7495;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7498 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7498))
{return or__3548__auto____7498;
} else
{var or__3548__auto____7500 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7500))
{return or__3548__auto____7500;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7736 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7506 = this$;

if(cljs.core.truth_(and__3546__auto____7506))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7506;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7510 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7510))
{return or__3548__auto____7510;
} else
{var or__3548__auto____7512 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7512))
{return or__3548__auto____7512;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7737 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7518 = this$;

if(cljs.core.truth_(and__3546__auto____7518))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7518;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7522 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7522))
{return or__3548__auto____7522;
} else
{var or__3548__auto____7524 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7524))
{return or__3548__auto____7524;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7738 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7529 = this$;

if(cljs.core.truth_(and__3546__auto____7529))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7529;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7556 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7556))
{return or__3548__auto____7556;
} else
{var or__3548__auto____7559 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7559))
{return or__3548__auto____7559;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7739 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7564 = this$;

if(cljs.core.truth_(and__3546__auto____7564))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7564;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7567 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7567))
{return or__3548__auto____7567;
} else
{var or__3548__auto____7570 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7570))
{return or__3548__auto____7570;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7740 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7593 = this$;

if(cljs.core.truth_(and__3546__auto____7593))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7593;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7597 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7597))
{return or__3548__auto____7597;
} else
{var or__3548__auto____7598 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7598))
{return or__3548__auto____7598;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7741 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7602 = this$;

if(cljs.core.truth_(and__3546__auto____7602))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7602;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7605 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7605))
{return or__3548__auto____7605;
} else
{var or__3548__auto____7606 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7606))
{return or__3548__auto____7606;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7742 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7608 = this$;

if(cljs.core.truth_(and__3546__auto____7608))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7608;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7611 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7611))
{return or__3548__auto____7611;
} else
{var or__3548__auto____7612 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7612))
{return or__3548__auto____7612;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7743 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7614 = this$;

if(cljs.core.truth_(and__3546__auto____7614))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7614;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7617 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7617))
{return or__3548__auto____7617;
} else
{var or__3548__auto____7618 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7618))
{return or__3548__auto____7618;
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
return _invoke__7635.call(this,this$);
case  2 :
return _invoke__7638.call(this,this$,a);
case  3 :
return _invoke__7639.call(this,this$,a,b);
case  4 :
return _invoke__7641.call(this,this$,a,b,c);
case  5 :
return _invoke__7644.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7647.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7649.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7652.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7656.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7732.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7733.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7734.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7735.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7736.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7737.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7738.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7739.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7740.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7741.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7742.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7743.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7745 = coll;

if(cljs.core.truth_(and__3546__auto____7745))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7745;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7746 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7746))
{return or__3548__auto____7746;
} else
{var or__3548__auto____7747 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7747))
{return or__3548__auto____7747;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7748 = coll;

if(cljs.core.truth_(and__3546__auto____7748))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7748;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7749 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7749))
{return or__3548__auto____7749;
} else
{var or__3548__auto____7750 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7750))
{return or__3548__auto____7750;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7779 = coll;

if(cljs.core.truth_(and__3546__auto____7779))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7779;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7780 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7780))
{return or__3548__auto____7780;
} else
{var or__3548__auto____7781 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7781))
{return or__3548__auto____7781;
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
var _nth__7799 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7789 = coll;

if(cljs.core.truth_(and__3546__auto____7789))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7789;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7790 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7790))
{return or__3548__auto____7790;
} else
{var or__3548__auto____7791 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7791))
{return or__3548__auto____7791;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7800 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7792 = coll;

if(cljs.core.truth_(and__3546__auto____7792))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7792;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7794 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7794))
{return or__3548__auto____7794;
} else
{var or__3548__auto____7795 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7795))
{return or__3548__auto____7795;
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
return _nth__7799.call(this,coll,n);
case  3 :
return _nth__7800.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7813 = coll;

if(cljs.core.truth_(and__3546__auto____7813))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7813;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7814 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7814))
{return or__3548__auto____7814;
} else
{var or__3548__auto____7815 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7815))
{return or__3548__auto____7815;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7816 = coll;

if(cljs.core.truth_(and__3546__auto____7816))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7816;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7818 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7818))
{return or__3548__auto____7818;
} else
{var or__3548__auto____7819 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7819))
{return or__3548__auto____7819;
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
var _lookup__7834 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7825 = o;

if(cljs.core.truth_(and__3546__auto____7825))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7825;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7826 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7826))
{return or__3548__auto____7826;
} else
{var or__3548__auto____7827 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7827))
{return or__3548__auto____7827;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7835 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7828 = o;

if(cljs.core.truth_(and__3546__auto____7828))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7828;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7830 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7830))
{return or__3548__auto____7830;
} else
{var or__3548__auto____7832 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7832))
{return or__3548__auto____7832;
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
return _lookup__7834.call(this,o,k);
case  3 :
return _lookup__7835.call(this,o,k,not_found);
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
{var or__3548__auto____7905 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7905))
{return or__3548__auto____7905;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7910 = coll;

if(cljs.core.truth_(and__3546__auto____7910))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7910;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7916 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7916))
{return or__3548__auto____7916;
} else
{var or__3548__auto____7918 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7918))
{return or__3548__auto____7918;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7921 = coll;

if(cljs.core.truth_(and__3546__auto____7921))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7921;
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
if(cljs.core.truth_((function (){var and__3546__auto____7933 = coll;

if(cljs.core.truth_(and__3546__auto____7933))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7933;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7937 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7937))
{return or__3548__auto____7937;
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
{var or__3548__auto____7946 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7946))
{return or__3548__auto____7946;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7949 = coll;

if(cljs.core.truth_(and__3546__auto____7949))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7949;
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
if(cljs.core.truth_((function (){var and__3546__auto____7961 = coll;

if(cljs.core.truth_(and__3546__auto____7961))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7961;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7962 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7962))
{return or__3548__auto____7962;
} else
{var or__3548__auto____7963 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7963))
{return or__3548__auto____7963;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7967 = o;

if(cljs.core.truth_(and__3546__auto____7967))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7967;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7968 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7968))
{return or__3548__auto____7968;
} else
{var or__3548__auto____7969 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7969))
{return or__3548__auto____7969;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7982 = o;

if(cljs.core.truth_(and__3546__auto____7982))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7982;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7983 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7983))
{return or__3548__auto____7983;
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
if(cljs.core.truth_((function (){var and__3546__auto____7991 = o;

if(cljs.core.truth_(and__3546__auto____7991))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7991;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7992 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7992))
{return or__3548__auto____7992;
} else
{var or__3548__auto____7993 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7993))
{return or__3548__auto____7993;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8000 = o;

if(cljs.core.truth_(and__3546__auto____8000))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8000;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8002 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8002))
{return or__3548__auto____8002;
} else
{var or__3548__auto____8004 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8004))
{return or__3548__auto____8004;
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
var _reduce__8025 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8012 = coll;

if(cljs.core.truth_(and__3546__auto____8012))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8012;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8014 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8014))
{return or__3548__auto____8014;
} else
{var or__3548__auto____8015 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8015))
{return or__3548__auto____8015;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8027 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8017 = coll;

if(cljs.core.truth_(and__3546__auto____8017))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8017;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8022 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8022))
{return or__3548__auto____8022;
} else
{var or__3548__auto____8024 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8024))
{return or__3548__auto____8024;
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
return _reduce__8025.call(this,coll,f);
case  3 :
return _reduce__8027.call(this,coll,f,start);
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
{return (function (){var or__3548__auto____8040 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8040))
{return or__3548__auto____8040;
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
if(cljs.core.truth_((function (){var and__3546__auto____8045 = o;

if(cljs.core.truth_(and__3546__auto____8045))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8045;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8049 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{var or__3548__auto____8050 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8050))
{return or__3548__auto____8050;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8054 = o;

if(cljs.core.truth_(and__3546__auto____8054))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8054;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8058 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8058))
{return or__3548__auto____8058;
} else
{var or__3548__auto____8061 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8061))
{return or__3548__auto____8061;
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
if(cljs.core.truth_((function (){var and__3546__auto____8069 = o;

if(cljs.core.truth_(and__3546__auto____8069))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8069;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8073 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
} else
{var or__3548__auto____8074 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8074))
{return or__3548__auto____8074;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8081 = d;

if(cljs.core.truth_(and__3546__auto____8081))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8081;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8085 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8085))
{return or__3548__auto____8085;
} else
{var or__3548__auto____8087 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8097 = this$;

if(cljs.core.truth_(and__3546__auto____8097))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8097;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8101 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8101))
{return or__3548__auto____8101;
} else
{var or__3548__auto____8103 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8103))
{return or__3548__auto____8103;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8105 = this$;

if(cljs.core.truth_(and__3546__auto____8105))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8105;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8107 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8107))
{return or__3548__auto____8107;
} else
{var or__3548__auto____8141 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8141))
{return or__3548__auto____8141;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8145 = this$;

if(cljs.core.truth_(and__3546__auto____8145))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8145;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8146 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8146))
{return or__3548__auto____8146;
} else
{var or__3548__auto____8147 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8147))
{return or__3548__auto____8147;
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
var G__8200 = null;
var G__8200__8202 = (function (o,k){
return null;
});
var G__8200__8203 = (function (o,k,not_found){
return not_found;
});
G__8200 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8200__8202.call(this,o,k);
case  3 :
return G__8200__8203.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8200;
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
var G__8207 = null;
var G__8207__8208 = (function (_,f){
return f.call(null);
});
var G__8207__8209 = (function (_,f,start){
return start;
});
G__8207 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8207__8208.call(this,_,f);
case  3 :
return G__8207__8209.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8207;
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
var G__8224 = null;
var G__8224__8225 = (function (_,n){
return null;
});
var G__8224__8226 = (function (_,n,not_found){
return not_found;
});
G__8224 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8224__8225.call(this,_,n);
case  3 :
return G__8224__8226.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8224;
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
var ci_reduce__8266 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8251 = cljs.core._nth.call(null,cicoll,0);
var n__8252 = 1;

while(true){
if(cljs.core.truth_((n__8252 < cljs.core._count.call(null,cicoll))))
{{
var G__8276 = f.call(null,val__8251,cljs.core._nth.call(null,cicoll,n__8252));
var G__8277 = (n__8252 + 1);
val__8251 = G__8276;
n__8252 = G__8277;
continue;
}
} else
{return val__8251;
}
break;
}
}
});
var ci_reduce__8267 = (function (cicoll,f,val){
var val__8256 = val;
var n__8257 = 0;

while(true){
if(cljs.core.truth_((n__8257 < cljs.core._count.call(null,cicoll))))
{{
var G__8278 = f.call(null,val__8256,cljs.core._nth.call(null,cicoll,n__8257));
var G__8279 = (n__8257 + 1);
val__8256 = G__8278;
n__8257 = G__8279;
continue;
}
} else
{return val__8256;
}
break;
}
});
var ci_reduce__8268 = (function (cicoll,f,val,idx){
var val__8261 = val;
var n__8262 = idx;

while(true){
if(cljs.core.truth_((n__8262 < cljs.core._count.call(null,cicoll))))
{{
var G__8281 = f.call(null,val__8261,cljs.core._nth.call(null,cicoll,n__8262));
var G__8283 = (n__8262 + 1);
val__8261 = G__8281;
n__8262 = G__8283;
continue;
}
} else
{return val__8261;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8266.call(this,cicoll,f);
case  3 :
return ci_reduce__8267.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8268.call(this,cicoll,f,val,idx);
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
var this__8294 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8390 = null;
var G__8390__8391 = (function (_,f){
var this__8295 = this;
return cljs.core.ci_reduce.call(null,this__8295.a,f,(this__8295.a[this__8295.i]),(this__8295.i + 1));
});
var G__8390__8392 = (function (_,f,start){
var this__8296 = this;
return cljs.core.ci_reduce.call(null,this__8296.a,f,start,this__8296.i);
});
G__8390 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8390__8391.call(this,_,f);
case  3 :
return G__8390__8392.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8390;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8365 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8367 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8397 = null;
var G__8397__8398 = (function (coll,n){
var this__8368 = this;
var i__8369 = (n + this__8368.i);

if(cljs.core.truth_((i__8369 < this__8368.a.length)))
{return (this__8368.a[i__8369]);
} else
{return null;
}
});
var G__8397__8399 = (function (coll,n,not_found){
var this__8370 = this;
var i__8371 = (n + this__8370.i);

if(cljs.core.truth_((i__8371 < this__8370.a.length)))
{return (this__8370.a[i__8371]);
} else
{return not_found;
}
});
G__8397 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8397__8398.call(this,coll,n);
case  3 :
return G__8397__8399.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8397;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8377 = this;
return (this__8377.a.length - this__8377.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8379 = this;
return (this__8379.a[this__8379.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8381 = this;
if(cljs.core.truth_(((this__8381.i + 1) < this__8381.a.length)))
{return (new cljs.core.IndexedSeq(this__8381.a,(this__8381.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8387 = this;
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
var G__8422 = null;
var G__8422__8423 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8422__8424 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8422 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8422__8423.call(this,array,f);
case  3 :
return G__8422__8424.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8422;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8428 = null;
var G__8428__8430 = (function (array,k){
return (array[k]);
});
var G__8428__8432 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8428 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8428__8430.call(this,array,k);
case  3 :
return G__8428__8432.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8428;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8441 = null;
var G__8441__8442 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8441__8443 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8441 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8441__8442.call(this,array,n);
case  3 :
return G__8441__8443.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8441;
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
var temp__3698__auto____8461 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8461))
{var s__8464 = temp__3698__auto____8461;

return cljs.core._first.call(null,s__8464);
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
var G__8475 = cljs.core.next.call(null,s);
s = G__8475;
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
var s__8538 = cljs.core.seq.call(null,x);
var n__8539 = 0;

while(true){
if(cljs.core.truth_(s__8538))
{{
var G__8543 = cljs.core.next.call(null,s__8538);
var G__8544 = (n__8539 + 1);
s__8538 = G__8543;
n__8539 = G__8544;
continue;
}
} else
{return n__8539;
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
var conj__8553 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8554 = (function() { 
var G__8556__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8557 = conj.call(null,coll,x);
var G__8558 = cljs.core.first.call(null,xs);
var G__8559 = cljs.core.next.call(null,xs);
coll = G__8557;
x = G__8558;
xs = G__8559;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8556 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8556__delegate.call(this, coll, x, xs);
};
G__8556.cljs$lang$maxFixedArity = 2;
G__8556.cljs$lang$applyTo = (function (arglist__8560){
var coll = cljs.core.first(arglist__8560);
var x = cljs.core.first(cljs.core.next(arglist__8560));
var xs = cljs.core.rest(cljs.core.next(arglist__8560));
return G__8556__delegate.call(this, coll, x, xs);
});
return G__8556;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8553.call(this,coll,x);
default:
return conj__8554.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8554.cljs$lang$applyTo;
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
var nth__8641 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8642 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8641.call(this,coll,n);
case  3 :
return nth__8642.call(this,coll,n,not_found);
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
var get__8650 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8651 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8650.call(this,o,k);
case  3 :
return get__8651.call(this,o,k,not_found);
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
var assoc__8662 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8663 = (function() { 
var G__8665__delegate = function (coll,k,v,kvs){
while(true){
var ret__8657 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8671 = ret__8657;
var G__8672 = cljs.core.first.call(null,kvs);
var G__8673 = cljs.core.second.call(null,kvs);
var G__8674 = cljs.core.nnext.call(null,kvs);
coll = G__8671;
k = G__8672;
v = G__8673;
kvs = G__8674;
continue;
}
} else
{return ret__8657;
}
break;
}
};
var G__8665 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8665__delegate.call(this, coll, k, v, kvs);
};
G__8665.cljs$lang$maxFixedArity = 3;
G__8665.cljs$lang$applyTo = (function (arglist__8676){
var coll = cljs.core.first(arglist__8676);
var k = cljs.core.first(cljs.core.next(arglist__8676));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8676)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8676)));
return G__8665__delegate.call(this, coll, k, v, kvs);
});
return G__8665;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8662.call(this,coll,k,v);
default:
return assoc__8663.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8663.cljs$lang$applyTo;
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
var dissoc__8693 = (function (coll){
return coll;
});
var dissoc__8694 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8695 = (function() { 
var G__8697__delegate = function (coll,k,ks){
while(true){
var ret__8686 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8698 = ret__8686;
var G__8699 = cljs.core.first.call(null,ks);
var G__8700 = cljs.core.next.call(null,ks);
coll = G__8698;
k = G__8699;
ks = G__8700;
continue;
}
} else
{return ret__8686;
}
break;
}
};
var G__8697 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8697__delegate.call(this, coll, k, ks);
};
G__8697.cljs$lang$maxFixedArity = 2;
G__8697.cljs$lang$applyTo = (function (arglist__8701){
var coll = cljs.core.first(arglist__8701);
var k = cljs.core.first(cljs.core.next(arglist__8701));
var ks = cljs.core.rest(cljs.core.next(arglist__8701));
return G__8697__delegate.call(this, coll, k, ks);
});
return G__8697;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8693.call(this,coll);
case  2 :
return dissoc__8694.call(this,coll,k);
default:
return dissoc__8695.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8695.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8723 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8734 = x__445__auto____8723;

if(cljs.core.truth_(and__3546__auto____8734))
{var and__3546__auto____8737 = x__445__auto____8723.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8737))
{return cljs.core.not.call(null,x__445__auto____8723.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8737;
}
} else
{return and__3546__auto____8734;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8723);
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
var disj__8765 = (function (coll){
return coll;
});
var disj__8766 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8767 = (function() { 
var G__8771__delegate = function (coll,k,ks){
while(true){
var ret__8757 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8772 = ret__8757;
var G__8773 = cljs.core.first.call(null,ks);
var G__8774 = cljs.core.next.call(null,ks);
coll = G__8772;
k = G__8773;
ks = G__8774;
continue;
}
} else
{return ret__8757;
}
break;
}
};
var G__8771 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8771__delegate.call(this, coll, k, ks);
};
G__8771.cljs$lang$maxFixedArity = 2;
G__8771.cljs$lang$applyTo = (function (arglist__8778){
var coll = cljs.core.first(arglist__8778);
var k = cljs.core.first(cljs.core.next(arglist__8778));
var ks = cljs.core.rest(cljs.core.next(arglist__8778));
return G__8771__delegate.call(this, coll, k, ks);
});
return G__8771;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8765.call(this,coll);
case  2 :
return disj__8766.call(this,coll,k);
default:
return disj__8767.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8767.cljs$lang$applyTo;
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
{var x__445__auto____8787 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8788 = x__445__auto____8787;

if(cljs.core.truth_(and__3546__auto____8788))
{var and__3546__auto____8790 = x__445__auto____8787.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8790))
{return cljs.core.not.call(null,x__445__auto____8787.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8790;
}
} else
{return and__3546__auto____8788;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8787);
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
{var x__445__auto____8798 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8800 = x__445__auto____8798;

if(cljs.core.truth_(and__3546__auto____8800))
{var and__3546__auto____8803 = x__445__auto____8798.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8803))
{return cljs.core.not.call(null,x__445__auto____8798.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8803;
}
} else
{return and__3546__auto____8800;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8798);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8810 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8811 = x__445__auto____8810;

if(cljs.core.truth_(and__3546__auto____8811))
{var and__3546__auto____8813 = x__445__auto____8810.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8813))
{return cljs.core.not.call(null,x__445__auto____8810.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8813;
}
} else
{return and__3546__auto____8811;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8810);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8825 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8826 = x__445__auto____8825;

if(cljs.core.truth_(and__3546__auto____8826))
{var and__3546__auto____8829 = x__445__auto____8825.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8829))
{return cljs.core.not.call(null,x__445__auto____8825.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8829;
}
} else
{return and__3546__auto____8826;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8825);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8842 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8843 = x__445__auto____8842;

if(cljs.core.truth_(and__3546__auto____8843))
{var and__3546__auto____8844 = x__445__auto____8842.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8844))
{return cljs.core.not.call(null,x__445__auto____8842.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8844;
}
} else
{return and__3546__auto____8843;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8842);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8849 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8850 = x__445__auto____8849;

if(cljs.core.truth_(and__3546__auto____8850))
{var and__3546__auto____8851 = x__445__auto____8849.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8851))
{return cljs.core.not.call(null,x__445__auto____8849.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8851;
}
} else
{return and__3546__auto____8850;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8849);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8857 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8858 = x__445__auto____8857;

if(cljs.core.truth_(and__3546__auto____8858))
{var and__3546__auto____8861 = x__445__auto____8857.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8861))
{return cljs.core.not.call(null,x__445__auto____8857.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8861;
}
} else
{return and__3546__auto____8858;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8857);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8875 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8875.push(key);
}));
return keys__8875;
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

if(cljs.core.truth_((function (){var and__3546__auto____8912 = x__445__auto____8910;

if(cljs.core.truth_(and__3546__auto____8912))
{var and__3546__auto____8915 = x__445__auto____8910.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8915))
{return cljs.core.not.call(null,x__445__auto____8910.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8915;
}
} else
{return and__3546__auto____8912;
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
var and__3546__auto____8926 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8926))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8927 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8927))
{return or__3548__auto____8927;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8926;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8942 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8942))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8942;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8947 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8947))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8947;
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
var and__3546__auto____8963 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8963))
{return (n == n.toFixed());
} else
{return and__3546__auto____8963;
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
if(cljs.core.truth_((function (){var and__3546__auto____8966 = coll;

if(cljs.core.truth_(and__3546__auto____8966))
{var and__3546__auto____8967 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8967))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8967;
}
} else
{return and__3546__auto____8966;
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
var distinct_QMARK___8980 = (function (x){
return true;
});
var distinct_QMARK___8981 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8982 = (function() { 
var G__8984__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8973 = cljs.core.set([y,x]);
var xs__8974 = more;

while(true){
var x__8976 = cljs.core.first.call(null,xs__8974);
var etc__8977 = cljs.core.next.call(null,xs__8974);

if(cljs.core.truth_(xs__8974))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8973,x__8976)))
{return false;
} else
{{
var G__8985 = cljs.core.conj.call(null,s__8973,x__8976);
var G__8986 = etc__8977;
s__8973 = G__8985;
xs__8974 = G__8986;
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
var G__8984 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8984__delegate.call(this, x, y, more);
};
G__8984.cljs$lang$maxFixedArity = 2;
G__8984.cljs$lang$applyTo = (function (arglist__8988){
var x = cljs.core.first(arglist__8988);
var y = cljs.core.first(cljs.core.next(arglist__8988));
var more = cljs.core.rest(cljs.core.next(arglist__8988));
return G__8984__delegate.call(this, x, y, more);
});
return G__8984;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8980.call(this,x);
case  2 :
return distinct_QMARK___8981.call(this,x,y);
default:
return distinct_QMARK___8982.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8982.cljs$lang$applyTo;
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
var r__8992 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8992)))
{return r__8992;
} else
{if(cljs.core.truth_(r__8992))
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
var sort__9003 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9004 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9001 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9001,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9001);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9003.call(this,comp);
case  2 :
return sort__9004.call(this,comp,coll);
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
var sort_by__9043 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9044 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9043.call(this,keyfn,comp);
case  3 :
return sort_by__9044.call(this,keyfn,comp,coll);
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
var reduce__9049 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9050 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9049.call(this,f,val);
case  3 :
return reduce__9050.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9062 = (function (f,coll){
var temp__3695__auto____9056 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9056))
{var s__9058 = temp__3695__auto____9056;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9058),cljs.core.next.call(null,s__9058));
} else
{return f.call(null);
}
});
var seq_reduce__9063 = (function (f,val,coll){
var val__9060 = val;
var coll__9061 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9061))
{{
var G__9067 = f.call(null,val__9060,cljs.core.first.call(null,coll__9061));
var G__9068 = cljs.core.next.call(null,coll__9061);
val__9060 = G__9067;
coll__9061 = G__9068;
continue;
}
} else
{return val__9060;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9062.call(this,f,val);
case  3 :
return seq_reduce__9063.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9077 = null;
var G__9077__9078 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9077__9079 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9077 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9077__9078.call(this,coll,f);
case  3 :
return G__9077__9079.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9077;
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
var G__9087__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9087 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9087__delegate.call(this, x, y, more);
};
G__9087.cljs$lang$maxFixedArity = 2;
G__9087.cljs$lang$applyTo = (function (arglist__9088){
var x = cljs.core.first(arglist__9088);
var y = cljs.core.first(cljs.core.next(arglist__9088));
var more = cljs.core.rest(cljs.core.next(arglist__9088));
return G__9087__delegate.call(this, x, y, more);
});
return G__9087;
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
var ___9093 = (function (x){
return (- x);
});
var ___9094 = (function (x,y){
return (x - y);
});
var ___9095 = (function() { 
var G__9097__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9097 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9097__delegate.call(this, x, y, more);
};
G__9097.cljs$lang$maxFixedArity = 2;
G__9097.cljs$lang$applyTo = (function (arglist__9100){
var x = cljs.core.first(arglist__9100);
var y = cljs.core.first(cljs.core.next(arglist__9100));
var more = cljs.core.rest(cljs.core.next(arglist__9100));
return G__9097__delegate.call(this, x, y, more);
});
return G__9097;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9093.call(this,x);
case  2 :
return ___9094.call(this,x,y);
default:
return ___9095.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9095.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9111 = (function (){
return 1;
});
var _STAR___9112 = (function (x){
return x;
});
var _STAR___9113 = (function (x,y){
return (x * y);
});
var _STAR___9114 = (function() { 
var G__9116__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9116 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9116__delegate.call(this, x, y, more);
};
G__9116.cljs$lang$maxFixedArity = 2;
G__9116.cljs$lang$applyTo = (function (arglist__9117){
var x = cljs.core.first(arglist__9117);
var y = cljs.core.first(cljs.core.next(arglist__9117));
var more = cljs.core.rest(cljs.core.next(arglist__9117));
return G__9116__delegate.call(this, x, y, more);
});
return G__9116;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9111.call(this);
case  1 :
return _STAR___9112.call(this,x);
case  2 :
return _STAR___9113.call(this,x,y);
default:
return _STAR___9114.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9114.cljs$lang$applyTo;
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
var _SLASH___9119 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9120 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9121 = (function() { 
var G__9124__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
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
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9119.call(this,x);
case  2 :
return _SLASH___9120.call(this,x,y);
default:
return _SLASH___9121.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9121.cljs$lang$applyTo;
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
var _LT___9134 = (function (x){
return true;
});
var _LT___9135 = (function (x,y){
return (x < y);
});
var _LT___9136 = (function() { 
var G__9138__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9139 = y;
var G__9140 = cljs.core.first.call(null,more);
var G__9141 = cljs.core.next.call(null,more);
x = G__9139;
y = G__9140;
more = G__9141;
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
var G__9138 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9138__delegate.call(this, x, y, more);
};
G__9138.cljs$lang$maxFixedArity = 2;
G__9138.cljs$lang$applyTo = (function (arglist__9147){
var x = cljs.core.first(arglist__9147);
var y = cljs.core.first(cljs.core.next(arglist__9147));
var more = cljs.core.rest(cljs.core.next(arglist__9147));
return G__9138__delegate.call(this, x, y, more);
});
return G__9138;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9134.call(this,x);
case  2 :
return _LT___9135.call(this,x,y);
default:
return _LT___9136.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9136.cljs$lang$applyTo;
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
var _LT__EQ___9166 = (function (x){
return true;
});
var _LT__EQ___9168 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9169 = (function() { 
var G__9171__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9172 = y;
var G__9173 = cljs.core.first.call(null,more);
var G__9174 = cljs.core.next.call(null,more);
x = G__9172;
y = G__9173;
more = G__9174;
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
var G__9171 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9171__delegate.call(this, x, y, more);
};
G__9171.cljs$lang$maxFixedArity = 2;
G__9171.cljs$lang$applyTo = (function (arglist__9310){
var x = cljs.core.first(arglist__9310);
var y = cljs.core.first(cljs.core.next(arglist__9310));
var more = cljs.core.rest(cljs.core.next(arglist__9310));
return G__9171__delegate.call(this, x, y, more);
});
return G__9171;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9166.call(this,x);
case  2 :
return _LT__EQ___9168.call(this,x,y);
default:
return _LT__EQ___9169.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9169.cljs$lang$applyTo;
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
var _GT___9325 = (function (x){
return true;
});
var _GT___9326 = (function (x,y){
return (x > y);
});
var _GT___9327 = (function() { 
var G__9330__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9334 = y;
var G__9335 = cljs.core.first.call(null,more);
var G__9336 = cljs.core.next.call(null,more);
x = G__9334;
y = G__9335;
more = G__9336;
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
var G__9330 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9330__delegate.call(this, x, y, more);
};
G__9330.cljs$lang$maxFixedArity = 2;
G__9330.cljs$lang$applyTo = (function (arglist__9342){
var x = cljs.core.first(arglist__9342);
var y = cljs.core.first(cljs.core.next(arglist__9342));
var more = cljs.core.rest(cljs.core.next(arglist__9342));
return G__9330__delegate.call(this, x, y, more);
});
return G__9330;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9325.call(this,x);
case  2 :
return _GT___9326.call(this,x,y);
default:
return _GT___9327.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9327.cljs$lang$applyTo;
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
var _GT__EQ___9356 = (function (x){
return true;
});
var _GT__EQ___9357 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9359 = (function() { 
var G__9366__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9370 = y;
var G__9371 = cljs.core.first.call(null,more);
var G__9372 = cljs.core.next.call(null,more);
x = G__9370;
y = G__9371;
more = G__9372;
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
var G__9366 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9366__delegate.call(this, x, y, more);
};
G__9366.cljs$lang$maxFixedArity = 2;
G__9366.cljs$lang$applyTo = (function (arglist__9377){
var x = cljs.core.first(arglist__9377);
var y = cljs.core.first(cljs.core.next(arglist__9377));
var more = cljs.core.rest(cljs.core.next(arglist__9377));
return G__9366__delegate.call(this, x, y, more);
});
return G__9366;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9356.call(this,x);
case  2 :
return _GT__EQ___9357.call(this,x,y);
default:
return _GT__EQ___9359.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9359.cljs$lang$applyTo;
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
var max__9386 = (function (x){
return x;
});
var max__9387 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9388 = (function() { 
var G__9392__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9392 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9392__delegate.call(this, x, y, more);
};
G__9392.cljs$lang$maxFixedArity = 2;
G__9392.cljs$lang$applyTo = (function (arglist__9393){
var x = cljs.core.first(arglist__9393);
var y = cljs.core.first(cljs.core.next(arglist__9393));
var more = cljs.core.rest(cljs.core.next(arglist__9393));
return G__9392__delegate.call(this, x, y, more);
});
return G__9392;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9386.call(this,x);
case  2 :
return max__9387.call(this,x,y);
default:
return max__9388.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9388.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9395 = (function (x){
return x;
});
var min__9396 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9397 = (function() { 
var G__9399__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9399 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9399__delegate.call(this, x, y, more);
};
G__9399.cljs$lang$maxFixedArity = 2;
G__9399.cljs$lang$applyTo = (function (arglist__9400){
var x = cljs.core.first(arglist__9400);
var y = cljs.core.first(cljs.core.next(arglist__9400));
var more = cljs.core.rest(cljs.core.next(arglist__9400));
return G__9399__delegate.call(this, x, y, more);
});
return G__9399;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9395.call(this,x);
case  2 :
return min__9396.call(this,x,y);
default:
return min__9397.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9397.cljs$lang$applyTo;
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
var rem__9407 = (n % d);

return cljs.core.fix.call(null,((n - rem__9407) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9412 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9412));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9422 = (function (){
return Math.random.call(null);
});
var rand__9423 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9422.call(this);
case  1 :
return rand__9423.call(this,n);
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
var _EQ__EQ___9471 = (function (x){
return true;
});
var _EQ__EQ___9472 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9473 = (function() { 
var G__9475__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9476 = y;
var G__9477 = cljs.core.first.call(null,more);
var G__9478 = cljs.core.next.call(null,more);
x = G__9476;
y = G__9477;
more = G__9478;
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
var G__9475 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9475__delegate.call(this, x, y, more);
};
G__9475.cljs$lang$maxFixedArity = 2;
G__9475.cljs$lang$applyTo = (function (arglist__9482){
var x = cljs.core.first(arglist__9482);
var y = cljs.core.first(cljs.core.next(arglist__9482));
var more = cljs.core.rest(cljs.core.next(arglist__9482));
return G__9475__delegate.call(this, x, y, more);
});
return G__9475;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9471.call(this,x);
case  2 :
return _EQ__EQ___9472.call(this,x,y);
default:
return _EQ__EQ___9473.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9473.cljs$lang$applyTo;
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
var n__9499 = n;
var xs__9500 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9501 = xs__9500;

if(cljs.core.truth_(and__3546__auto____9501))
{return (n__9499 > 0);
} else
{return and__3546__auto____9501;
}
})()))
{{
var G__9502 = (n__9499 - 1);
var G__9503 = cljs.core.next.call(null,xs__9500);
n__9499 = G__9502;
xs__9500 = G__9503;
continue;
}
} else
{return xs__9500;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9510 = null;
var G__9510__9511 = (function (coll,n){
var temp__3695__auto____9505 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9505))
{var xs__9506 = temp__3695__auto____9505;

return cljs.core.first.call(null,xs__9506);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9510__9512 = (function (coll,n,not_found){
var temp__3695__auto____9507 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9507))
{var xs__9509 = temp__3695__auto____9507;

return cljs.core.first.call(null,xs__9509);
} else
{return not_found;
}
});
G__9510 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9510__9511.call(this,coll,n);
case  3 :
return G__9510__9512.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9510;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9518 = (function (){
return "";
});
var str_STAR___9519 = (function (x){
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
var str_STAR___9521 = (function() { 
var G__9524__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9526 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9527 = cljs.core.next.call(null,more);
sb = G__9526;
more = G__9527;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9524 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9524__delegate.call(this, x, ys);
};
G__9524.cljs$lang$maxFixedArity = 1;
G__9524.cljs$lang$applyTo = (function (arglist__9529){
var x = cljs.core.first(arglist__9529);
var ys = cljs.core.rest(arglist__9529);
return G__9524__delegate.call(this, x, ys);
});
return G__9524;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9518.call(this);
case  1 :
return str_STAR___9519.call(this,x);
default:
return str_STAR___9521.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9521.cljs$lang$applyTo;
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
var str__9535 = (function (){
return "";
});
var str__9536 = (function (x){
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
var str__9537 = (function() { 
var G__9539__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9539 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9539__delegate.call(this, x, ys);
};
G__9539.cljs$lang$maxFixedArity = 1;
G__9539.cljs$lang$applyTo = (function (arglist__9540){
var x = cljs.core.first(arglist__9540);
var ys = cljs.core.rest(arglist__9540);
return G__9539__delegate.call(this, x, ys);
});
return G__9539;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9535.call(this);
case  1 :
return str__9536.call(this,x);
default:
return str__9537.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9537.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9559 = (function (s,start){
return s.substring(start);
});
var subs__9560 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9559.call(this,s,start);
case  3 :
return subs__9560.call(this,s,start,end);
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
var symbol__9566 = (function (name){
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
var symbol__9567 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9566.call(this,ns);
case  2 :
return symbol__9567.call(this,ns,name);
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
var keyword__9580 = (function (name){
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
var keyword__9581 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9580.call(this,ns);
case  2 :
return keyword__9581.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9631 = cljs.core.seq.call(null,x);
var ys__9633 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9631)))
{return cljs.core.nil_QMARK_.call(null,ys__9633);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9633)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9631),cljs.core.first.call(null,ys__9633))))
{{
var G__9637 = cljs.core.next.call(null,xs__9631);
var G__9638 = cljs.core.next.call(null,ys__9633);
xs__9631 = G__9637;
ys__9633 = G__9638;
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
return cljs.core.reduce.call(null,(function (p1__9641_SHARP_,p2__9642_SHARP_){
return cljs.core.hash_combine.call(null,p1__9641_SHARP_,cljs.core.hash.call(null,p2__9642_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9657__9659 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9657__9659))
{var G__9661__9663 = cljs.core.first.call(null,G__9657__9659);
var vec__9662__9664 = G__9661__9663;
var key_name__9665 = cljs.core.nth.call(null,vec__9662__9664,0,null);
var f__9666 = cljs.core.nth.call(null,vec__9662__9664,1,null);
var G__9657__9667 = G__9657__9659;

var G__9661__9668 = G__9661__9663;
var G__9657__9669 = G__9657__9667;

while(true){
var vec__9670__9671 = G__9661__9668;
var key_name__9672 = cljs.core.nth.call(null,vec__9670__9671,0,null);
var f__9673 = cljs.core.nth.call(null,vec__9670__9671,1,null);
var G__9657__9676 = G__9657__9669;

var str_name__9678 = cljs.core.name.call(null,key_name__9672);

obj[str_name__9678] = f__9673;
var temp__3698__auto____9679 = cljs.core.next.call(null,G__9657__9676);

if(cljs.core.truth_(temp__3698__auto____9679))
{var G__9657__9680 = temp__3698__auto____9679;

{
var G__9686 = cljs.core.first.call(null,G__9657__9680);
var G__9687 = G__9657__9680;
G__9661__9668 = G__9686;
G__9657__9669 = G__9687;
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
var this__9692 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9695 = this;
return (new cljs.core.List(this__9695.meta,o,coll,(this__9695.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9696 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9697 = this;
return this__9697.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9698 = this;
return this__9698.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9699 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9702 = this;
return this__9702.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9703 = this;
return this__9703.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9766 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9769 = this;
return (new cljs.core.List(meta,this__9769.first,this__9769.rest,this__9769.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9771 = this;
return this__9771.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9773 = this;
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
var this__9897 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9898 = this;
return (new cljs.core.List(this__9898.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9899 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9900 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9901 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9902 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9903 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9908 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9909 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9910 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9911 = this;
return this__9911.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9912 = this;
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
list.cljs$lang$applyTo = (function (arglist__9925){
var items = cljs.core.seq( arglist__9925 );;
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
var this__9928 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9932 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9933 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9934 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9934.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9935 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9936 = this;
return this__9936.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9937 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9937.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9937.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9941 = this;
return this__9941.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9942 = this;
return (new cljs.core.Cons(meta,this__9942.first,this__9942.rest));
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
var G__10012 = null;
var G__10012__10013 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10012__10014 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10012 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10012__10013.call(this,string,f);
case  3 :
return G__10012__10014.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10012;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10020 = null;
var G__10020__10024 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10020__10026 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10020 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10020__10024.call(this,string,k);
case  3 :
return G__10020__10026.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10020;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10034 = null;
var G__10034__10035 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10034__10036 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10034 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10034__10035.call(this,string,n);
case  3 :
return G__10034__10036.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10034;
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
var G__10044 = null;
var G__10044__10045 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10044__10046 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10044 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10044__10045.call(this,this$,coll);
case  3 :
return G__10044__10046.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10044;
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
var x__10064 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10064;
} else
{lazy_seq.x = x__10064.call(null);
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
var this__10072 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10077 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10083 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10155 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10155.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10156 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10157 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10158 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10160 = this;
return this__10160.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10162 = this;
return (new cljs.core.LazySeq(meta,this__10162.realized,this__10162.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10256 = cljs.core.array.call(null);

var s__10257 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10257)))
{ary__10256.push(cljs.core.first.call(null,s__10257));
{
var G__10261 = cljs.core.next.call(null,s__10257);
s__10257 = G__10261;
continue;
}
} else
{return ary__10256;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10271 = s;
var i__10272 = n;
var sum__10273 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10274 = (i__10272 > 0);

if(cljs.core.truth_(and__3546__auto____10274))
{return cljs.core.seq.call(null,s__10271);
} else
{return and__3546__auto____10274;
}
})()))
{{
var G__10276 = cljs.core.next.call(null,s__10271);
var G__10277 = (i__10272 - 1);
var G__10278 = (sum__10273 + 1);
s__10271 = G__10276;
i__10272 = G__10277;
sum__10273 = G__10278;
continue;
}
} else
{return sum__10273;
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
var concat__10288 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10289 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10290 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10283 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10283))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10283),concat.call(null,cljs.core.rest.call(null,s__10283),y));
} else
{return y;
}
})));
});
var concat__10291 = (function() { 
var G__10299__delegate = function (x,y,zs){
var cat__10286 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10284 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10284))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10284),cat.call(null,cljs.core.rest.call(null,xys__10284),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10286.call(null,concat.call(null,x,y),zs);
};
var G__10299 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10299__delegate.call(this, x, y, zs);
};
G__10299.cljs$lang$maxFixedArity = 2;
G__10299.cljs$lang$applyTo = (function (arglist__10301){
var x = cljs.core.first(arglist__10301);
var y = cljs.core.first(cljs.core.next(arglist__10301));
var zs = cljs.core.rest(cljs.core.next(arglist__10301));
return G__10299__delegate.call(this, x, y, zs);
});
return G__10299;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10288.call(this);
case  1 :
return concat__10289.call(this,x);
case  2 :
return concat__10290.call(this,x,y);
default:
return concat__10291.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10291.cljs$lang$applyTo;
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
var list_STAR___10323 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10324 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10325 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10326 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10327 = (function() { 
var G__10333__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10333 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10333__delegate.call(this, a, b, c, d, more);
};
G__10333.cljs$lang$maxFixedArity = 4;
G__10333.cljs$lang$applyTo = (function (arglist__10334){
var a = cljs.core.first(arglist__10334);
var b = cljs.core.first(cljs.core.next(arglist__10334));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10334)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10334))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10334))));
return G__10333__delegate.call(this, a, b, c, d, more);
});
return G__10333;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10323.call(this,a);
case  2 :
return list_STAR___10324.call(this,a,b);
case  3 :
return list_STAR___10325.call(this,a,b,c);
case  4 :
return list_STAR___10326.call(this,a,b,c,d);
default:
return list_STAR___10327.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10327.cljs$lang$applyTo;
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
var apply__10353 = (function (f,args){
var fixed_arity__10343 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10343 + 1)) <= fixed_arity__10343)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10355 = (function (f,x,args){
var arglist__10344 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10345 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10344,fixed_arity__10345) <= fixed_arity__10345)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10344));
} else
{return f.cljs$lang$applyTo(arglist__10344);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10344));
}
});
var apply__10357 = (function (f,x,y,args){
var arglist__10346 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10347 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10346,fixed_arity__10347) <= fixed_arity__10347)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10346));
} else
{return f.cljs$lang$applyTo(arglist__10346);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10346));
}
});
var apply__10359 = (function (f,x,y,z,args){
var arglist__10348 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10350 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10348,fixed_arity__10350) <= fixed_arity__10350)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10348));
} else
{return f.cljs$lang$applyTo(arglist__10348);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10348));
}
});
var apply__10361 = (function() { 
var G__10370__delegate = function (f,a,b,c,d,args){
var arglist__10351 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10352 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10351,fixed_arity__10352) <= fixed_arity__10352)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10351));
} else
{return f.cljs$lang$applyTo(arglist__10351);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10351));
}
};
var G__10370 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10370__delegate.call(this, f, a, b, c, d, args);
};
G__10370.cljs$lang$maxFixedArity = 5;
G__10370.cljs$lang$applyTo = (function (arglist__10379){
var f = cljs.core.first(arglist__10379);
var a = cljs.core.first(cljs.core.next(arglist__10379));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10379)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10379))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10379)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10379)))));
return G__10370__delegate.call(this, f, a, b, c, d, args);
});
return G__10370;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10353.call(this,f,a);
case  3 :
return apply__10355.call(this,f,a,b);
case  4 :
return apply__10357.call(this,f,a,b,c);
case  5 :
return apply__10359.call(this,f,a,b,c,d);
default:
return apply__10361.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10361.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10386){
var obj = cljs.core.first(arglist__10386);
var f = cljs.core.first(cljs.core.next(arglist__10386));
var args = cljs.core.rest(cljs.core.next(arglist__10386));
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
var not_EQ___10393 = (function (x){
return false;
});
var not_EQ___10394 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10395 = (function() { 
var G__10397__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10397 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10397__delegate.call(this, x, y, more);
};
G__10397.cljs$lang$maxFixedArity = 2;
G__10397.cljs$lang$applyTo = (function (arglist__10400){
var x = cljs.core.first(arglist__10400);
var y = cljs.core.first(cljs.core.next(arglist__10400));
var more = cljs.core.rest(cljs.core.next(arglist__10400));
return G__10397__delegate.call(this, x, y, more);
});
return G__10397;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10393.call(this,x);
case  2 :
return not_EQ___10394.call(this,x,y);
default:
return not_EQ___10395.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10395.cljs$lang$applyTo;
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
var G__10407 = pred;
var G__10408 = cljs.core.next.call(null,coll);
pred = G__10407;
coll = G__10408;
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
{var or__3548__auto____10419 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10419))
{return or__3548__auto____10419;
} else
{{
var G__10422 = pred;
var G__10423 = cljs.core.next.call(null,coll);
pred = G__10422;
coll = G__10423;
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
var G__10439 = null;
var G__10439__10441 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10439__10442 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10439__10443 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10439__10444 = (function() { 
var G__10447__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10447 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10447__delegate.call(this, x, y, zs);
};
G__10447.cljs$lang$maxFixedArity = 2;
G__10447.cljs$lang$applyTo = (function (arglist__10451){
var x = cljs.core.first(arglist__10451);
var y = cljs.core.first(cljs.core.next(arglist__10451));
var zs = cljs.core.rest(cljs.core.next(arglist__10451));
return G__10447__delegate.call(this, x, y, zs);
});
return G__10447;
})()
;
G__10439 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10439__10441.call(this);
case  1 :
return G__10439__10442.call(this,x);
case  2 :
return G__10439__10443.call(this,x,y);
default:
return G__10439__10444.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10439.cljs$lang$maxFixedArity = 2;
G__10439.cljs$lang$applyTo = G__10439__10444.cljs$lang$applyTo;
return G__10439;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10493__delegate = function (args){
return x;
};
var G__10493 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10493__delegate.call(this, args);
};
G__10493.cljs$lang$maxFixedArity = 0;
G__10493.cljs$lang$applyTo = (function (arglist__10495){
var args = cljs.core.seq( arglist__10495 );;
return G__10493__delegate.call(this, args);
});
return G__10493;
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
var comp__10674 = (function (){
return cljs.core.identity;
});
var comp__10675 = (function (f){
return f;
});
var comp__10677 = (function (f,g){
return (function() {
var G__10682 = null;
var G__10682__10685 = (function (){
return f.call(null,g.call(null));
});
var G__10682__10686 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10682__10687 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10682__10688 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10682__10689 = (function() { 
var G__10700__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10700 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10700__delegate.call(this, x, y, z, args);
};
G__10700.cljs$lang$maxFixedArity = 3;
G__10700.cljs$lang$applyTo = (function (arglist__10705){
var x = cljs.core.first(arglist__10705);
var y = cljs.core.first(cljs.core.next(arglist__10705));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10705)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10705)));
return G__10700__delegate.call(this, x, y, z, args);
});
return G__10700;
})()
;
G__10682 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10682__10685.call(this);
case  1 :
return G__10682__10686.call(this,x);
case  2 :
return G__10682__10687.call(this,x,y);
case  3 :
return G__10682__10688.call(this,x,y,z);
default:
return G__10682__10689.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10682.cljs$lang$maxFixedArity = 3;
G__10682.cljs$lang$applyTo = G__10682__10689.cljs$lang$applyTo;
return G__10682;
})()
});
var comp__10678 = (function (f,g,h){
return (function() {
var G__10708 = null;
var G__10708__10709 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10708__10710 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10708__10712 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10708__10713 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10708__10714 = (function() { 
var G__10716__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10716 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10716__delegate.call(this, x, y, z, args);
};
G__10716.cljs$lang$maxFixedArity = 3;
G__10716.cljs$lang$applyTo = (function (arglist__10717){
var x = cljs.core.first(arglist__10717);
var y = cljs.core.first(cljs.core.next(arglist__10717));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10717)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10717)));
return G__10716__delegate.call(this, x, y, z, args);
});
return G__10716;
})()
;
G__10708 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10708__10709.call(this);
case  1 :
return G__10708__10710.call(this,x);
case  2 :
return G__10708__10712.call(this,x,y);
case  3 :
return G__10708__10713.call(this,x,y,z);
default:
return G__10708__10714.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10708.cljs$lang$maxFixedArity = 3;
G__10708.cljs$lang$applyTo = G__10708__10714.cljs$lang$applyTo;
return G__10708;
})()
});
var comp__10679 = (function() { 
var G__10718__delegate = function (f1,f2,f3,fs){
var fs__10506 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10721__delegate = function (args){
var ret__10510 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10506),args);
var fs__10511 = cljs.core.next.call(null,fs__10506);

while(true){
if(cljs.core.truth_(fs__10511))
{{
var G__10722 = cljs.core.first.call(null,fs__10511).call(null,ret__10510);
var G__10723 = cljs.core.next.call(null,fs__10511);
ret__10510 = G__10722;
fs__10511 = G__10723;
continue;
}
} else
{return ret__10510;
}
break;
}
};
var G__10721 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10721__delegate.call(this, args);
};
G__10721.cljs$lang$maxFixedArity = 0;
G__10721.cljs$lang$applyTo = (function (arglist__10724){
var args = cljs.core.seq( arglist__10724 );;
return G__10721__delegate.call(this, args);
});
return G__10721;
})()
;
};
var G__10718 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10718__delegate.call(this, f1, f2, f3, fs);
};
G__10718.cljs$lang$maxFixedArity = 3;
G__10718.cljs$lang$applyTo = (function (arglist__10725){
var f1 = cljs.core.first(arglist__10725);
var f2 = cljs.core.first(cljs.core.next(arglist__10725));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10725)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10725)));
return G__10718__delegate.call(this, f1, f2, f3, fs);
});
return G__10718;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10674.call(this);
case  1 :
return comp__10675.call(this,f1);
case  2 :
return comp__10677.call(this,f1,f2);
case  3 :
return comp__10678.call(this,f1,f2,f3);
default:
return comp__10679.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10679.cljs$lang$applyTo;
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
var partial__10729 = (function (f,arg1){
return (function() { 
var G__10735__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10735 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10735__delegate.call(this, args);
};
G__10735.cljs$lang$maxFixedArity = 0;
G__10735.cljs$lang$applyTo = (function (arglist__10737){
var args = cljs.core.seq( arglist__10737 );;
return G__10735__delegate.call(this, args);
});
return G__10735;
})()
;
});
var partial__10730 = (function (f,arg1,arg2){
return (function() { 
var G__10739__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10739 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10739__delegate.call(this, args);
};
G__10739.cljs$lang$maxFixedArity = 0;
G__10739.cljs$lang$applyTo = (function (arglist__10740){
var args = cljs.core.seq( arglist__10740 );;
return G__10739__delegate.call(this, args);
});
return G__10739;
})()
;
});
var partial__10731 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10742__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10742 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10742__delegate.call(this, args);
};
G__10742.cljs$lang$maxFixedArity = 0;
G__10742.cljs$lang$applyTo = (function (arglist__10744){
var args = cljs.core.seq( arglist__10744 );;
return G__10742__delegate.call(this, args);
});
return G__10742;
})()
;
});
var partial__10732 = (function() { 
var G__10745__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10746__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10746 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10746__delegate.call(this, args);
};
G__10746.cljs$lang$maxFixedArity = 0;
G__10746.cljs$lang$applyTo = (function (arglist__10753){
var args = cljs.core.seq( arglist__10753 );;
return G__10746__delegate.call(this, args);
});
return G__10746;
})()
;
};
var G__10745 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10745__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10745.cljs$lang$maxFixedArity = 4;
G__10745.cljs$lang$applyTo = (function (arglist__10755){
var f = cljs.core.first(arglist__10755);
var arg1 = cljs.core.first(cljs.core.next(arglist__10755));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10755)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10755))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10755))));
return G__10745__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10745;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10729.call(this,f,arg1);
case  3 :
return partial__10730.call(this,f,arg1,arg2);
case  4 :
return partial__10731.call(this,f,arg1,arg2,arg3);
default:
return partial__10732.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10732.cljs$lang$applyTo;
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
var fnil__10768 = (function (f,x){
return (function() {
var G__10772 = null;
var G__10772__10773 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10772__10774 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10772__10775 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10772__10776 = (function() { 
var G__10778__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10778 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10778__delegate.call(this, a, b, c, ds);
};
G__10778.cljs$lang$maxFixedArity = 3;
G__10778.cljs$lang$applyTo = (function (arglist__10783){
var a = cljs.core.first(arglist__10783);
var b = cljs.core.first(cljs.core.next(arglist__10783));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10783)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10783)));
return G__10778__delegate.call(this, a, b, c, ds);
});
return G__10778;
})()
;
G__10772 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10772__10773.call(this,a);
case  2 :
return G__10772__10774.call(this,a,b);
case  3 :
return G__10772__10775.call(this,a,b,c);
default:
return G__10772__10776.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10772.cljs$lang$maxFixedArity = 3;
G__10772.cljs$lang$applyTo = G__10772__10776.cljs$lang$applyTo;
return G__10772;
})()
});
var fnil__10769 = (function (f,x,y){
return (function() {
var G__10790 = null;
var G__10790__10791 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10790__10792 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10790__10793 = (function() { 
var G__10796__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10796 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10796__delegate.call(this, a, b, c, ds);
};
G__10796.cljs$lang$maxFixedArity = 3;
G__10796.cljs$lang$applyTo = (function (arglist__10798){
var a = cljs.core.first(arglist__10798);
var b = cljs.core.first(cljs.core.next(arglist__10798));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10798)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10798)));
return G__10796__delegate.call(this, a, b, c, ds);
});
return G__10796;
})()
;
G__10790 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10790__10791.call(this,a,b);
case  3 :
return G__10790__10792.call(this,a,b,c);
default:
return G__10790__10793.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10790.cljs$lang$maxFixedArity = 3;
G__10790.cljs$lang$applyTo = G__10790__10793.cljs$lang$applyTo;
return G__10790;
})()
});
var fnil__10770 = (function (f,x,y,z){
return (function() {
var G__10802 = null;
var G__10802__10871 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10802__10872 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10802__10873 = (function() { 
var G__10881__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10881 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10881__delegate.call(this, a, b, c, ds);
};
G__10881.cljs$lang$maxFixedArity = 3;
G__10881.cljs$lang$applyTo = (function (arglist__10882){
var a = cljs.core.first(arglist__10882);
var b = cljs.core.first(cljs.core.next(arglist__10882));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10882)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10882)));
return G__10881__delegate.call(this, a, b, c, ds);
});
return G__10881;
})()
;
G__10802 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10802__10871.call(this,a,b);
case  3 :
return G__10802__10872.call(this,a,b,c);
default:
return G__10802__10873.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10802.cljs$lang$maxFixedArity = 3;
G__10802.cljs$lang$applyTo = G__10802__10873.cljs$lang$applyTo;
return G__10802;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10768.call(this,f,x);
case  3 :
return fnil__10769.call(this,f,x,y);
case  4 :
return fnil__10770.call(this,f,x,y,z);
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
var mapi__10889 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10887 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10887))
{var s__10888 = temp__3698__auto____10887;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10888)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10888)));
} else
{return null;
}
})));
});

return mapi__10889.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10895 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10895))
{var s__10897 = temp__3698__auto____10895;

var x__10898 = f.call(null,cljs.core.first.call(null,s__10897));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10898)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10897));
} else
{return cljs.core.cons.call(null,x__10898,keep.call(null,f,cljs.core.rest.call(null,s__10897)));
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
var keepi__10921 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10915 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10915))
{var s__10917 = temp__3698__auto____10915;

var x__10919 = f.call(null,idx,cljs.core.first.call(null,s__10917));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10919)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10917));
} else
{return cljs.core.cons.call(null,x__10919,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10917)));
}
} else
{return null;
}
})));
});

return keepi__10921.call(null,0,coll);
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
var every_pred__11077 = (function (p){
return (function() {
var ep1 = null;
var ep1__11088 = (function (){
return true;
});
var ep1__11089 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11090 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10942 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10942))
{return p.call(null,y);
} else
{return and__3546__auto____10942;
}
})());
});
var ep1__11091 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10945 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10945))
{var and__3546__auto____10947 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10947))
{return p.call(null,z);
} else
{return and__3546__auto____10947;
}
} else
{return and__3546__auto____10945;
}
})());
});
var ep1__11092 = (function() { 
var G__11099__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10960 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10960))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10960;
}
})());
};
var G__11099 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11099__delegate.call(this, x, y, z, args);
};
G__11099.cljs$lang$maxFixedArity = 3;
G__11099.cljs$lang$applyTo = (function (arglist__11101){
var x = cljs.core.first(arglist__11101);
var y = cljs.core.first(cljs.core.next(arglist__11101));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11101)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11101)));
return G__11099__delegate.call(this, x, y, z, args);
});
return G__11099;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11088.call(this);
case  1 :
return ep1__11089.call(this,x);
case  2 :
return ep1__11090.call(this,x,y);
case  3 :
return ep1__11091.call(this,x,y,z);
default:
return ep1__11092.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11092.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11078 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11103 = (function (){
return true;
});
var ep2__11104 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10961 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10961))
{return p2.call(null,x);
} else
{return and__3546__auto____10961;
}
})());
});
var ep2__11105 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10993 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10993))
{var and__3546__auto____10994 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10994))
{var and__3546__auto____10996 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10996))
{return p2.call(null,y);
} else
{return and__3546__auto____10996;
}
} else
{return and__3546__auto____10994;
}
} else
{return and__3546__auto____10993;
}
})());
});
var ep2__11106 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11001 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11001))
{var and__3546__auto____11002 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11002))
{var and__3546__auto____11008 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11008))
{var and__3546__auto____11009 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11009))
{var and__3546__auto____11010 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11010))
{return p2.call(null,z);
} else
{return and__3546__auto____11010;
}
} else
{return and__3546__auto____11009;
}
} else
{return and__3546__auto____11008;
}
} else
{return and__3546__auto____11002;
}
} else
{return and__3546__auto____11001;
}
})());
});
var ep2__11107 = (function() { 
var G__11120__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11013 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11013))
{return cljs.core.every_QMARK_.call(null,(function (p1__10903_SHARP_){
var and__3546__auto____11016 = p1.call(null,p1__10903_SHARP_);

if(cljs.core.truth_(and__3546__auto____11016))
{return p2.call(null,p1__10903_SHARP_);
} else
{return and__3546__auto____11016;
}
}),args);
} else
{return and__3546__auto____11013;
}
})());
};
var G__11120 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11120__delegate.call(this, x, y, z, args);
};
G__11120.cljs$lang$maxFixedArity = 3;
G__11120.cljs$lang$applyTo = (function (arglist__11133){
var x = cljs.core.first(arglist__11133);
var y = cljs.core.first(cljs.core.next(arglist__11133));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11133)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11133)));
return G__11120__delegate.call(this, x, y, z, args);
});
return G__11120;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11103.call(this);
case  1 :
return ep2__11104.call(this,x);
case  2 :
return ep2__11105.call(this,x,y);
case  3 :
return ep2__11106.call(this,x,y,z);
default:
return ep2__11107.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11107.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11079 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11196 = (function (){
return true;
});
var ep3__11197 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11023 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11023))
{var and__3546__auto____11024 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11024))
{return p3.call(null,x);
} else
{return and__3546__auto____11024;
}
} else
{return and__3546__auto____11023;
}
})());
});
var ep3__11198 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11025 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11025))
{var and__3546__auto____11026 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11026))
{var and__3546__auto____11027 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11027))
{var and__3546__auto____11028 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11028))
{var and__3546__auto____11034 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11034))
{return p3.call(null,y);
} else
{return and__3546__auto____11034;
}
} else
{return and__3546__auto____11028;
}
} else
{return and__3546__auto____11027;
}
} else
{return and__3546__auto____11026;
}
} else
{return and__3546__auto____11025;
}
})());
});
var ep3__11199 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11038 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11038))
{var and__3546__auto____11039 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11039))
{var and__3546__auto____11040 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11040))
{var and__3546__auto____11041 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11041))
{var and__3546__auto____11042 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11042))
{var and__3546__auto____11043 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11043))
{var and__3546__auto____11044 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11044))
{var and__3546__auto____11047 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11047))
{return p3.call(null,z);
} else
{return and__3546__auto____11047;
}
} else
{return and__3546__auto____11044;
}
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
{return and__3546__auto____11039;
}
} else
{return and__3546__auto____11038;
}
})());
});
var ep3__11200 = (function() { 
var G__11211__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11048 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11048))
{return cljs.core.every_QMARK_.call(null,(function (p1__10905_SHARP_){
var and__3546__auto____11049 = p1.call(null,p1__10905_SHARP_);

if(cljs.core.truth_(and__3546__auto____11049))
{var and__3546__auto____11052 = p2.call(null,p1__10905_SHARP_);

if(cljs.core.truth_(and__3546__auto____11052))
{return p3.call(null,p1__10905_SHARP_);
} else
{return and__3546__auto____11052;
}
} else
{return and__3546__auto____11049;
}
}),args);
} else
{return and__3546__auto____11048;
}
})());
};
var G__11211 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11211__delegate.call(this, x, y, z, args);
};
G__11211.cljs$lang$maxFixedArity = 3;
G__11211.cljs$lang$applyTo = (function (arglist__11213){
var x = cljs.core.first(arglist__11213);
var y = cljs.core.first(cljs.core.next(arglist__11213));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11213)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11213)));
return G__11211__delegate.call(this, x, y, z, args);
});
return G__11211;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11196.call(this);
case  1 :
return ep3__11197.call(this,x);
case  2 :
return ep3__11198.call(this,x,y);
case  3 :
return ep3__11199.call(this,x,y,z);
default:
return ep3__11200.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11200.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11080 = (function() { 
var G__11214__delegate = function (p1,p2,p3,ps){
var ps__11053 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11216 = (function (){
return true;
});
var epn__11217 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10907_SHARP_){
return p1__10907_SHARP_.call(null,x);
}),ps__11053);
});
var epn__11218 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10908_SHARP_){
var and__3546__auto____11057 = p1__10908_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11057))
{return p1__10908_SHARP_.call(null,y);
} else
{return and__3546__auto____11057;
}
}),ps__11053);
});
var epn__11219 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10909_SHARP_){
var and__3546__auto____11058 = p1__10909_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11058))
{var and__3546__auto____11059 = p1__10909_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11059))
{return p1__10909_SHARP_.call(null,z);
} else
{return and__3546__auto____11059;
}
} else
{return and__3546__auto____11058;
}
}),ps__11053);
});
var epn__11220 = (function() { 
var G__11237__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11062 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11062))
{return cljs.core.every_QMARK_.call(null,(function (p1__10911_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10911_SHARP_,args);
}),ps__11053);
} else
{return and__3546__auto____11062;
}
})());
};
var G__11237 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11237__delegate.call(this, x, y, z, args);
};
G__11237.cljs$lang$maxFixedArity = 3;
G__11237.cljs$lang$applyTo = (function (arglist__11239){
var x = cljs.core.first(arglist__11239);
var y = cljs.core.first(cljs.core.next(arglist__11239));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11239)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11239)));
return G__11237__delegate.call(this, x, y, z, args);
});
return G__11237;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11216.call(this);
case  1 :
return epn__11217.call(this,x);
case  2 :
return epn__11218.call(this,x,y);
case  3 :
return epn__11219.call(this,x,y,z);
default:
return epn__11220.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11220.cljs$lang$applyTo;
return epn;
})()
};
var G__11214 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11214__delegate.call(this, p1, p2, p3, ps);
};
G__11214.cljs$lang$maxFixedArity = 3;
G__11214.cljs$lang$applyTo = (function (arglist__11242){
var p1 = cljs.core.first(arglist__11242);
var p2 = cljs.core.first(cljs.core.next(arglist__11242));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11242)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11242)));
return G__11214__delegate.call(this, p1, p2, p3, ps);
});
return G__11214;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11077.call(this,p1);
case  2 :
return every_pred__11078.call(this,p1,p2);
case  3 :
return every_pred__11079.call(this,p1,p2,p3);
default:
return every_pred__11080.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11080.cljs$lang$applyTo;
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
var some_fn__11365 = (function (p){
return (function() {
var sp1 = null;
var sp1__11372 = (function (){
return null;
});
var sp1__11373 = (function (x){
return p.call(null,x);
});
var sp1__11374 = (function (x,y){
var or__3548__auto____11253 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11253))
{return or__3548__auto____11253;
} else
{return p.call(null,y);
}
});
var sp1__11375 = (function (x,y,z){
var or__3548__auto____11256 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11256))
{return or__3548__auto____11256;
} else
{var or__3548__auto____11258 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11258))
{return or__3548__auto____11258;
} else
{return p.call(null,z);
}
}
});
var sp1__11376 = (function() { 
var G__11384__delegate = function (x,y,z,args){
var or__3548__auto____11260 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11260))
{return or__3548__auto____11260;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11384 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11384__delegate.call(this, x, y, z, args);
};
G__11384.cljs$lang$maxFixedArity = 3;
G__11384.cljs$lang$applyTo = (function (arglist__11390){
var x = cljs.core.first(arglist__11390);
var y = cljs.core.first(cljs.core.next(arglist__11390));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11390)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11390)));
return G__11384__delegate.call(this, x, y, z, args);
});
return G__11384;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11372.call(this);
case  1 :
return sp1__11373.call(this,x);
case  2 :
return sp1__11374.call(this,x,y);
case  3 :
return sp1__11375.call(this,x,y,z);
default:
return sp1__11376.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11376.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11366 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11393 = (function (){
return null;
});
var sp2__11394 = (function (x){
var or__3548__auto____11265 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11265))
{return or__3548__auto____11265;
} else
{return p2.call(null,x);
}
});
var sp2__11395 = (function (x,y){
var or__3548__auto____11266 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11266))
{return or__3548__auto____11266;
} else
{var or__3548__auto____11268 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11268))
{return or__3548__auto____11268;
} else
{var or__3548__auto____11272 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11272))
{return or__3548__auto____11272;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11396 = (function (x,y,z){
var or__3548__auto____11278 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11278))
{return or__3548__auto____11278;
} else
{var or__3548__auto____11281 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11281))
{return or__3548__auto____11281;
} else
{var or__3548__auto____11284 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11284))
{return or__3548__auto____11284;
} else
{var or__3548__auto____11286 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11286))
{return or__3548__auto____11286;
} else
{var or__3548__auto____11287 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11287))
{return or__3548__auto____11287;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11397 = (function() { 
var G__11405__delegate = function (x,y,z,args){
var or__3548__auto____11296 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11296))
{return or__3548__auto____11296;
} else
{return cljs.core.some.call(null,(function (p1__10929_SHARP_){
var or__3548__auto____11301 = p1.call(null,p1__10929_SHARP_);

if(cljs.core.truth_(or__3548__auto____11301))
{return or__3548__auto____11301;
} else
{return p2.call(null,p1__10929_SHARP_);
}
}),args);
}
};
var G__11405 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11405__delegate.call(this, x, y, z, args);
};
G__11405.cljs$lang$maxFixedArity = 3;
G__11405.cljs$lang$applyTo = (function (arglist__11408){
var x = cljs.core.first(arglist__11408);
var y = cljs.core.first(cljs.core.next(arglist__11408));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11408)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11408)));
return G__11405__delegate.call(this, x, y, z, args);
});
return G__11405;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11393.call(this);
case  1 :
return sp2__11394.call(this,x);
case  2 :
return sp2__11395.call(this,x,y);
case  3 :
return sp2__11396.call(this,x,y,z);
default:
return sp2__11397.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11397.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11367 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11412 = (function (){
return null;
});
var sp3__11413 = (function (x){
var or__3548__auto____11304 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11304))
{return or__3548__auto____11304;
} else
{var or__3548__auto____11305 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11305))
{return or__3548__auto____11305;
} else
{return p3.call(null,x);
}
}
});
var sp3__11414 = (function (x,y){
var or__3548__auto____11309 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11309))
{return or__3548__auto____11309;
} else
{var or__3548__auto____11310 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11310))
{return or__3548__auto____11310;
} else
{var or__3548__auto____11311 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11311))
{return or__3548__auto____11311;
} else
{var or__3548__auto____11314 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11314))
{return or__3548__auto____11314;
} else
{var or__3548__auto____11316 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11316))
{return or__3548__auto____11316;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11415 = (function (x,y,z){
var or__3548__auto____11318 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11318))
{return or__3548__auto____11318;
} else
{var or__3548__auto____11319 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11319))
{return or__3548__auto____11319;
} else
{var or__3548__auto____11321 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11321))
{return or__3548__auto____11321;
} else
{var or__3548__auto____11323 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11323))
{return or__3548__auto____11323;
} else
{var or__3548__auto____11324 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11324))
{return or__3548__auto____11324;
} else
{var or__3548__auto____11327 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11327))
{return or__3548__auto____11327;
} else
{var or__3548__auto____11329 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11329))
{return or__3548__auto____11329;
} else
{var or__3548__auto____11330 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11330))
{return or__3548__auto____11330;
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
var sp3__11416 = (function() { 
var G__11434__delegate = function (x,y,z,args){
var or__3548__auto____11333 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11333))
{return or__3548__auto____11333;
} else
{return cljs.core.some.call(null,(function (p1__10932_SHARP_){
var or__3548__auto____11338 = p1.call(null,p1__10932_SHARP_);

if(cljs.core.truth_(or__3548__auto____11338))
{return or__3548__auto____11338;
} else
{var or__3548__auto____11339 = p2.call(null,p1__10932_SHARP_);

if(cljs.core.truth_(or__3548__auto____11339))
{return or__3548__auto____11339;
} else
{return p3.call(null,p1__10932_SHARP_);
}
}
}),args);
}
};
var G__11434 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11434__delegate.call(this, x, y, z, args);
};
G__11434.cljs$lang$maxFixedArity = 3;
G__11434.cljs$lang$applyTo = (function (arglist__11445){
var x = cljs.core.first(arglist__11445);
var y = cljs.core.first(cljs.core.next(arglist__11445));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11445)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11445)));
return G__11434__delegate.call(this, x, y, z, args);
});
return G__11434;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11412.call(this);
case  1 :
return sp3__11413.call(this,x);
case  2 :
return sp3__11414.call(this,x,y);
case  3 :
return sp3__11415.call(this,x,y,z);
default:
return sp3__11416.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11416.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11368 = (function() { 
var G__11450__delegate = function (p1,p2,p3,ps){
var ps__11343 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11453 = (function (){
return null;
});
var spn__11454 = (function (x){
return cljs.core.some.call(null,(function (p1__10933_SHARP_){
return p1__10933_SHARP_.call(null,x);
}),ps__11343);
});
var spn__11456 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10934_SHARP_){
var or__3548__auto____11348 = p1__10934_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11348))
{return or__3548__auto____11348;
} else
{return p1__10934_SHARP_.call(null,y);
}
}),ps__11343);
});
var spn__11457 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10935_SHARP_){
var or__3548__auto____11349 = p1__10935_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11349))
{return or__3548__auto____11349;
} else
{var or__3548__auto____11354 = p1__10935_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11354))
{return or__3548__auto____11354;
} else
{return p1__10935_SHARP_.call(null,z);
}
}
}),ps__11343);
});
var spn__11458 = (function() { 
var G__11471__delegate = function (x,y,z,args){
var or__3548__auto____11356 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11356))
{return or__3548__auto____11356;
} else
{return cljs.core.some.call(null,(function (p1__10936_SHARP_){
return cljs.core.some.call(null,p1__10936_SHARP_,args);
}),ps__11343);
}
};
var G__11471 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11471__delegate.call(this, x, y, z, args);
};
G__11471.cljs$lang$maxFixedArity = 3;
G__11471.cljs$lang$applyTo = (function (arglist__11473){
var x = cljs.core.first(arglist__11473);
var y = cljs.core.first(cljs.core.next(arglist__11473));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11473)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11473)));
return G__11471__delegate.call(this, x, y, z, args);
});
return G__11471;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11453.call(this);
case  1 :
return spn__11454.call(this,x);
case  2 :
return spn__11456.call(this,x,y);
case  3 :
return spn__11457.call(this,x,y,z);
default:
return spn__11458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11458.cljs$lang$applyTo;
return spn;
})()
};
var G__11450 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11450__delegate.call(this, p1, p2, p3, ps);
};
G__11450.cljs$lang$maxFixedArity = 3;
G__11450.cljs$lang$applyTo = (function (arglist__11475){
var p1 = cljs.core.first(arglist__11475);
var p2 = cljs.core.first(cljs.core.next(arglist__11475));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11475)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11475)));
return G__11450__delegate.call(this, p1, p2, p3, ps);
});
return G__11450;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11365.call(this,p1);
case  2 :
return some_fn__11366.call(this,p1,p2);
case  3 :
return some_fn__11367.call(this,p1,p2,p3);
default:
return some_fn__11368.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11368.cljs$lang$applyTo;
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
var map__11528 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11487 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11487))
{var s__11488 = temp__3698__auto____11487;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11488)),map.call(null,f,cljs.core.rest.call(null,s__11488)));
} else
{return null;
}
})));
});
var map__11529 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11489 = cljs.core.seq.call(null,c1);
var s2__11490 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11491 = s1__11489;

if(cljs.core.truth_(and__3546__auto____11491))
{return s2__11490;
} else
{return and__3546__auto____11491;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11489),cljs.core.first.call(null,s2__11490)),map.call(null,f,cljs.core.rest.call(null,s1__11489),cljs.core.rest.call(null,s2__11490)));
} else
{return null;
}
})));
});
var map__11530 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11499 = cljs.core.seq.call(null,c1);
var s2__11500 = cljs.core.seq.call(null,c2);
var s3__11503 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11506 = s1__11499;

if(cljs.core.truth_(and__3546__auto____11506))
{var and__3546__auto____11508 = s2__11500;

if(cljs.core.truth_(and__3546__auto____11508))
{return s3__11503;
} else
{return and__3546__auto____11508;
}
} else
{return and__3546__auto____11506;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11499),cljs.core.first.call(null,s2__11500),cljs.core.first.call(null,s3__11503)),map.call(null,f,cljs.core.rest.call(null,s1__11499),cljs.core.rest.call(null,s2__11500),cljs.core.rest.call(null,s3__11503)));
} else
{return null;
}
})));
});
var map__11531 = (function() { 
var G__11547__delegate = function (f,c1,c2,c3,colls){
var step__11518 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11514 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11514)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11514),step.call(null,map.call(null,cljs.core.rest,ss__11514)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11249_SHARP_){
return cljs.core.apply.call(null,f,p1__11249_SHARP_);
}),step__11518.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11547 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11547__delegate.call(this, f, c1, c2, c3, colls);
};
G__11547.cljs$lang$maxFixedArity = 4;
G__11547.cljs$lang$applyTo = (function (arglist__11562){
var f = cljs.core.first(arglist__11562);
var c1 = cljs.core.first(cljs.core.next(arglist__11562));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11562)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11562))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11562))));
return G__11547__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11547;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11528.call(this,f,c1);
case  3 :
return map__11529.call(this,f,c1,c2);
case  4 :
return map__11530.call(this,f,c1,c2,c3);
default:
return map__11531.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11531.cljs$lang$applyTo;
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
{var temp__3698__auto____11654 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11654))
{var s__11656 = temp__3698__auto____11654;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11656),take.call(null,(n - 1),cljs.core.rest.call(null,s__11656)));
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
var step__11666 = (function (n,coll){
while(true){
var s__11662 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11664 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11664))
{return s__11662;
} else
{return and__3546__auto____11664;
}
})()))
{{
var G__11671 = (n - 1);
var G__11673 = cljs.core.rest.call(null,s__11662);
n = G__11671;
coll = G__11673;
continue;
}
} else
{return s__11662;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11666.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11689 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11690 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11689.call(this,n);
case  2 :
return drop_last__11690.call(this,n,s);
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
var s__11699 = cljs.core.seq.call(null,coll);
var lead__11701 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11701))
{{
var G__11706 = cljs.core.next.call(null,s__11699);
var G__11708 = cljs.core.next.call(null,lead__11701);
s__11699 = G__11706;
lead__11701 = G__11708;
continue;
}
} else
{return s__11699;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11718 = (function (pred,coll){
while(true){
var s__11711 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11712 = s__11711;

if(cljs.core.truth_(and__3546__auto____11712))
{return pred.call(null,cljs.core.first.call(null,s__11711));
} else
{return and__3546__auto____11712;
}
})()))
{{
var G__11724 = pred;
var G__11725 = cljs.core.rest.call(null,s__11711);
pred = G__11724;
coll = G__11725;
continue;
}
} else
{return s__11711;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11718.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11728 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11728))
{var s__11730 = temp__3698__auto____11728;

return cljs.core.concat.call(null,s__11730,cycle.call(null,s__11730));
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
var repeat__11811 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11812 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11811.call(this,n);
case  2 :
return repeat__11812.call(this,n,x);
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
var repeatedly__11822 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11823 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11822.call(this,n);
case  2 :
return repeatedly__11823.call(this,n,f);
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
var interleave__11979 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11863 = cljs.core.seq.call(null,c1);
var s2__11865 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11869 = s1__11863;

if(cljs.core.truth_(and__3546__auto____11869))
{return s2__11865;
} else
{return and__3546__auto____11869;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11863),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11865),interleave.call(null,cljs.core.rest.call(null,s1__11863),cljs.core.rest.call(null,s2__11865))));
} else
{return null;
}
})));
});
var interleave__11980 = (function() { 
var G__11983__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11878 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11878)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11878),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11878)));
} else
{return null;
}
})));
};
var G__11983 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11983__delegate.call(this, c1, c2, colls);
};
G__11983.cljs$lang$maxFixedArity = 2;
G__11983.cljs$lang$applyTo = (function (arglist__11988){
var c1 = cljs.core.first(arglist__11988);
var c2 = cljs.core.first(cljs.core.next(arglist__11988));
var colls = cljs.core.rest(cljs.core.next(arglist__11988));
return G__11983__delegate.call(this, c1, c2, colls);
});
return G__11983;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11979.call(this,c1,c2);
default:
return interleave__11980.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11980.cljs$lang$applyTo;
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
var temp__3695__auto____12015 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12015))
{var coll__12016 = temp__3695__auto____12015;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12016),cat.call(null,cljs.core.rest.call(null,coll__12016),colls));
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
var mapcat__12028 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12029 = (function() { 
var G__12033__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12033 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12033__delegate.call(this, f, coll, colls);
};
G__12033.cljs$lang$maxFixedArity = 2;
G__12033.cljs$lang$applyTo = (function (arglist__12034){
var f = cljs.core.first(arglist__12034);
var coll = cljs.core.first(cljs.core.next(arglist__12034));
var colls = cljs.core.rest(cljs.core.next(arglist__12034));
return G__12033__delegate.call(this, f, coll, colls);
});
return G__12033;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12028.call(this,f,coll);
default:
return mapcat__12029.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12029.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12041 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12041))
{var s__12047 = temp__3698__auto____12041;

var f__12050 = cljs.core.first.call(null,s__12047);
var r__12051 = cljs.core.rest.call(null,s__12047);

if(cljs.core.truth_(pred.call(null,f__12050)))
{return cljs.core.cons.call(null,f__12050,filter.call(null,pred,r__12051));
} else
{return filter.call(null,pred,r__12051);
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
var walk__12062 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12062.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12058_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12058_SHARP_));
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
var partition__12112 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12113 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12087 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12087))
{var s__12088 = temp__3698__auto____12087;

var p__12089 = cljs.core.take.call(null,n,s__12088);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12089))))
{return cljs.core.cons.call(null,p__12089,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12088)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12114 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12109 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12109))
{var s__12110 = temp__3698__auto____12109;

var p__12111 = cljs.core.take.call(null,n,s__12110);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12111))))
{return cljs.core.cons.call(null,p__12111,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12110)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12111,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12112.call(this,n,step);
case  3 :
return partition__12113.call(this,n,step,pad);
case  4 :
return partition__12114.call(this,n,step,pad,coll);
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
var get_in__12142 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12143 = (function (m,ks,not_found){
var sentinel__12131 = cljs.core.lookup_sentinel;
var m__12132 = m;
var ks__12133 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12133))
{var m__12134 = cljs.core.get.call(null,m__12132,cljs.core.first.call(null,ks__12133),sentinel__12131);

if(cljs.core.truth_((sentinel__12131 === m__12134)))
{return not_found;
} else
{{
var G__12148 = sentinel__12131;
var G__12149 = m__12134;
var G__12150 = cljs.core.next.call(null,ks__12133);
sentinel__12131 = G__12148;
m__12132 = G__12149;
ks__12133 = G__12150;
continue;
}
}
} else
{return m__12132;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12142.call(this,m,ks);
case  3 :
return get_in__12143.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12151,v){
var vec__12154__12170 = p__12151;
var k__12172 = cljs.core.nth.call(null,vec__12154__12170,0,null);
var ks__12173 = cljs.core.nthnext.call(null,vec__12154__12170,1);

if(cljs.core.truth_(ks__12173))
{return cljs.core.assoc.call(null,m,k__12172,assoc_in.call(null,cljs.core.get.call(null,m,k__12172),ks__12173,v));
} else
{return cljs.core.assoc.call(null,m,k__12172,v);
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
var update_in__delegate = function (m,p__12201,f,args){
var vec__12203__12204 = p__12201;
var k__12206 = cljs.core.nth.call(null,vec__12203__12204,0,null);
var ks__12208 = cljs.core.nthnext.call(null,vec__12203__12204,1);

if(cljs.core.truth_(ks__12208))
{return cljs.core.assoc.call(null,m,k__12206,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12206),ks__12208,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12206,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12206),args));
}
};
var update_in = function (m,p__12201,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12201, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12214){
var m = cljs.core.first(arglist__12214);
var p__12201 = cljs.core.first(cljs.core.next(arglist__12214));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12214)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12214)));
return update_in__delegate.call(this, m, p__12201, f, args);
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
var this__12278 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12333 = null;
var G__12333__12334 = (function (coll,k){
var this__12280 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12333__12335 = (function (coll,k,not_found){
var this__12281 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12333 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12333__12334.call(this,coll,k);
case  3 :
return G__12333__12335.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12333;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12282 = this;
var new_array__12284 = cljs.core.aclone.call(null,this__12282.array);

(new_array__12284[k] = v);
return (new cljs.core.Vector(this__12282.meta,new_array__12284));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12337 = null;
var G__12337__12338 = (function (coll,k){
var this__12286 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12337__12339 = (function (coll,k,not_found){
var this__12288 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12337 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12337__12338.call(this,coll,k);
case  3 :
return G__12337__12339.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12337;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12293 = this;
var new_array__12295 = cljs.core.aclone.call(null,this__12293.array);

new_array__12295.push(o);
return (new cljs.core.Vector(this__12293.meta,new_array__12295));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12347 = null;
var G__12347__12348 = (function (v,f){
var this__12297 = this;
return cljs.core.ci_reduce.call(null,this__12297.array,f);
});
var G__12347__12349 = (function (v,f,start){
var this__12299 = this;
return cljs.core.ci_reduce.call(null,this__12299.array,f,start);
});
G__12347 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12347__12348.call(this,v,f);
case  3 :
return G__12347__12349.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12347;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12302 = this;
if(cljs.core.truth_((this__12302.array.length > 0)))
{var vector_seq__12306 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12302.array.length)))
{return cljs.core.cons.call(null,(this__12302.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12306.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12307 = this;
return this__12307.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12312 = this;
var count__12313 = this__12312.array.length;

if(cljs.core.truth_((count__12313 > 0)))
{return (this__12312.array[(count__12313 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12314 = this;
if(cljs.core.truth_((this__12314.array.length > 0)))
{var new_array__12315 = cljs.core.aclone.call(null,this__12314.array);

new_array__12315.pop();
return (new cljs.core.Vector(this__12314.meta,new_array__12315));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12316 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12319 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12324 = this;
return (new cljs.core.Vector(meta,this__12324.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12326 = this;
return this__12326.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12364 = null;
var G__12364__12365 = (function (coll,n){
var this__12327 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12328 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12328))
{return (n < this__12327.array.length);
} else
{return and__3546__auto____12328;
}
})()))
{return (this__12327.array[n]);
} else
{return null;
}
});
var G__12364__12366 = (function (coll,n,not_found){
var this__12329 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12330 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12330))
{return (n < this__12329.array.length);
} else
{return and__3546__auto____12330;
}
})()))
{return (this__12329.array[n]);
} else
{return not_found;
}
});
G__12364 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12364__12365.call(this,coll,n);
case  3 :
return G__12364__12366.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12364;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12331 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12331.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12401){
var args = cljs.core.seq( arglist__12401 );;
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
var this__12419 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12562 = null;
var G__12562__12564 = (function (coll,k){
var this__12421 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12562__12565 = (function (coll,k,not_found){
var this__12423 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12562 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12562__12564.call(this,coll,k);
case  3 :
return G__12562__12565.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12562;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12425 = this;
var v_pos__12426 = (this__12425.start + key);

return (new cljs.core.Subvec(this__12425.meta,cljs.core._assoc.call(null,this__12425.v,v_pos__12426,val),this__12425.start,((this__12425.end > (v_pos__12426 + 1)) ? this__12425.end : (v_pos__12426 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12567 = null;
var G__12567__12568 = (function (coll,k){
var this__12428 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12567__12569 = (function (coll,k,not_found){
var this__12431 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12567 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12567__12568.call(this,coll,k);
case  3 :
return G__12567__12569.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12567;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12433 = this;
return (new cljs.core.Subvec(this__12433.meta,cljs.core._assoc_n.call(null,this__12433.v,this__12433.end,o),this__12433.start,(this__12433.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12572 = null;
var G__12572__12573 = (function (coll,f){
var this__12517 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12572__12574 = (function (coll,f,start){
var this__12520 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12572 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12572__12573.call(this,coll,f);
case  3 :
return G__12572__12574.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12572;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12540 = this;
var subvec_seq__12541 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12540.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12540.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12541.call(null,this__12540.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12542 = this;
return (this__12542.end - this__12542.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12543 = this;
return cljs.core._nth.call(null,this__12543.v,(this__12543.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12546 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12546.start,this__12546.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12546.meta,this__12546.v,this__12546.start,(this__12546.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12551 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12554 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12555 = this;
return (new cljs.core.Subvec(meta,this__12555.v,this__12555.start,this__12555.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12556 = this;
return this__12556.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12586 = null;
var G__12586__12587 = (function (coll,n){
var this__12558 = this;
return cljs.core._nth.call(null,this__12558.v,(this__12558.start + n));
});
var G__12586__12589 = (function (coll,n,not_found){
var this__12559 = this;
return cljs.core._nth.call(null,this__12559.v,(this__12559.start + n),not_found);
});
G__12586 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12586__12587.call(this,coll,n);
case  3 :
return G__12586__12589.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12586;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12560 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12560.meta);
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
var subvec__12615 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12616 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12615.call(this,v,start);
case  3 :
return subvec__12616.call(this,v,start,end);
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
var this__12627 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12628 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12630 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12632 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12632.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12636 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12639 = this;
return cljs.core._first.call(null,this__12639.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12642 = this;
var temp__3695__auto____12643 = cljs.core.next.call(null,this__12642.front);

if(cljs.core.truth_(temp__3695__auto____12643))
{var f1__12645 = temp__3695__auto____12643;

return (new cljs.core.PersistentQueueSeq(this__12642.meta,f1__12645,this__12642.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12642.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12642.meta,this__12642.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12650 = this;
return this__12650.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12653 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12653.front,this__12653.rear));
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
var this__12689 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12691 = this;
if(cljs.core.truth_(this__12691.front))
{return (new cljs.core.PersistentQueue(this__12691.meta,(this__12691.count + 1),this__12691.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12696 = this__12691.rear;

if(cljs.core.truth_(or__3548__auto____12696))
{return or__3548__auto____12696;
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
var this__12703 = this;
var rear__12704 = cljs.core.seq.call(null,this__12703.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12706 = this__12703.front;

if(cljs.core.truth_(or__3548__auto____12706))
{return or__3548__auto____12706;
} else
{return rear__12704;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12703.front,cljs.core.seq.call(null,rear__12704)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12708 = this;
return this__12708.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12714 = this;
return cljs.core._first.call(null,this__12714.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12721 = this;
if(cljs.core.truth_(this__12721.front))
{var temp__3695__auto____12722 = cljs.core.next.call(null,this__12721.front);

if(cljs.core.truth_(temp__3695__auto____12722))
{var f1__12724 = temp__3695__auto____12722;

return (new cljs.core.PersistentQueue(this__12721.meta,(this__12721.count - 1),f1__12724,this__12721.rear));
} else
{return (new cljs.core.PersistentQueue(this__12721.meta,(this__12721.count - 1),cljs.core.seq.call(null,this__12721.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12725 = this;
return cljs.core.first.call(null,this__12725.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12729 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12730 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12735 = this;
return (new cljs.core.PersistentQueue(meta,this__12735.count,this__12735.front,this__12735.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12737 = this;
return this__12737.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12738 = this;
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
var len__12763 = array.length;

var i__12764 = 0;

while(true){
if(cljs.core.truth_((i__12764 < len__12763)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12764]))))
{return i__12764;
} else
{{
var G__12768 = (i__12764 + incr);
i__12764 = G__12768;
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
var obj_map_contains_key_QMARK___12780 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12781 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12775 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12775))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12775;
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
return obj_map_contains_key_QMARK___12780.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12781.call(this,k,strobj,true_val,false_val);
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
var this__12841 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12897 = null;
var G__12897__12898 = (function (coll,k){
var this__12842 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12897__12899 = (function (coll,k,not_found){
var this__12843 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12843.strobj,(this__12843.strobj[k]),not_found);
});
G__12897 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12897__12898.call(this,coll,k);
case  3 :
return G__12897__12899.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12897;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12846 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12848 = goog.object.clone.call(null,this__12846.strobj);
var overwrite_QMARK___12849 = new_strobj__12848.hasOwnProperty(k);

(new_strobj__12848[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12849))
{return (new cljs.core.ObjMap(this__12846.meta,this__12846.keys,new_strobj__12848));
} else
{var new_keys__12858 = cljs.core.aclone.call(null,this__12846.keys);

new_keys__12858.push(k);
return (new cljs.core.ObjMap(this__12846.meta,new_keys__12858,new_strobj__12848));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12846.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12859 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12859.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12946 = null;
var G__12946__12947 = (function (coll,k){
var this__12860 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12946__12948 = (function (coll,k,not_found){
var this__12861 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12946 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12946__12947.call(this,coll,k);
case  3 :
return G__12946__12948.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12946;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12862 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12866 = this;
if(cljs.core.truth_((this__12866.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12790_SHARP_){
return cljs.core.vector.call(null,p1__12790_SHARP_,(this__12866.strobj[p1__12790_SHARP_]));
}),this__12866.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12871 = this;
return this__12871.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12872 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12876 = this;
return (new cljs.core.ObjMap(meta,this__12876.keys,this__12876.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12877 = this;
return this__12877.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12881 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12881.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12882 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12883 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12883))
{return this__12882.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12883;
}
})()))
{var new_keys__12892 = cljs.core.aclone.call(null,this__12882.keys);
var new_strobj__12894 = goog.object.clone.call(null,this__12882.strobj);

new_keys__12892.splice(cljs.core.scan_array.call(null,1,k,new_keys__12892),1);
cljs.core.js_delete.call(null,new_strobj__12894,k);
return (new cljs.core.ObjMap(this__12882.meta,new_keys__12892,new_strobj__12894));
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
var this__13060 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13137 = null;
var G__13137__13139 = (function (coll,k){
var this__13061 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13137__13221 = (function (coll,k,not_found){
var this__13062 = this;
var bucket__13063 = (this__13062.hashobj[cljs.core.hash.call(null,k)]);
var i__13064 = (cljs.core.truth_(bucket__13063)?cljs.core.scan_array.call(null,2,k,bucket__13063):null);

if(cljs.core.truth_(i__13064))
{return (bucket__13063[(i__13064 + 1)]);
} else
{return not_found;
}
});
G__13137 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13137__13139.call(this,coll,k);
case  3 :
return G__13137__13221.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13137;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13065 = this;
var h__13066 = cljs.core.hash.call(null,k);
var bucket__13067 = (this__13065.hashobj[h__13066]);

if(cljs.core.truth_(bucket__13067))
{var new_bucket__13069 = cljs.core.aclone.call(null,bucket__13067);
var new_hashobj__13070 = goog.object.clone.call(null,this__13065.hashobj);

(new_hashobj__13070[h__13066] = new_bucket__13069);
var temp__3695__auto____13073 = cljs.core.scan_array.call(null,2,k,new_bucket__13069);

if(cljs.core.truth_(temp__3695__auto____13073))
{var i__13074 = temp__3695__auto____13073;

(new_bucket__13069[(i__13074 + 1)] = v);
return (new cljs.core.HashMap(this__13065.meta,this__13065.count,new_hashobj__13070));
} else
{new_bucket__13069.push(k,v);
return (new cljs.core.HashMap(this__13065.meta,(this__13065.count + 1),new_hashobj__13070));
}
} else
{var new_hashobj__13079 = goog.object.clone.call(null,this__13065.hashobj);

(new_hashobj__13079[h__13066] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13065.meta,(this__13065.count + 1),new_hashobj__13079));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13085 = this;
var bucket__13086 = (this__13085.hashobj[cljs.core.hash.call(null,k)]);
var i__13089 = (cljs.core.truth_(bucket__13086)?cljs.core.scan_array.call(null,2,k,bucket__13086):null);

if(cljs.core.truth_(i__13089))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13232 = null;
var G__13232__13233 = (function (coll,k){
var this__13091 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13232__13234 = (function (coll,k,not_found){
var this__13093 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13232 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13232__13233.call(this,coll,k);
case  3 :
return G__13232__13234.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13232;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13095 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13102 = this;
if(cljs.core.truth_((this__13102.count > 0)))
{var hashes__13105 = cljs.core.js_keys.call(null,this__13102.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13058_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13102.hashobj[p1__13058_SHARP_])));
}),hashes__13105);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13107 = this;
return this__13107.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13108 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13109 = this;
return (new cljs.core.HashMap(meta,this__13109.count,this__13109.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13111 = this;
return this__13111.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13113 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13113.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13116 = this;
var h__13120 = cljs.core.hash.call(null,k);
var bucket__13123 = (this__13116.hashobj[h__13120]);
var i__13124 = (cljs.core.truth_(bucket__13123)?cljs.core.scan_array.call(null,2,k,bucket__13123):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13124)))
{return coll;
} else
{var new_hashobj__13126 = goog.object.clone.call(null,this__13116.hashobj);

if(cljs.core.truth_((3 > bucket__13123.length)))
{cljs.core.js_delete.call(null,new_hashobj__13126,h__13120);
} else
{var new_bucket__13128 = cljs.core.aclone.call(null,bucket__13123);

new_bucket__13128.splice(i__13124,2);
(new_hashobj__13126[h__13120] = new_bucket__13128);
}
return (new cljs.core.HashMap(this__13116.meta,(this__13116.count - 1),new_hashobj__13126));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13363 = ks.length;

var i__13364 = 0;
var out__13367 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13364 < len__13363)))
{{
var G__13368 = (i__13364 + 1);
var G__13369 = cljs.core.assoc.call(null,out__13367,(ks[i__13364]),(vs[i__13364]));
i__13364 = G__13368;
out__13367 = G__13369;
continue;
}
} else
{return out__13367;
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
var in$__13371 = cljs.core.seq.call(null,keyvals);
var out__13372 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13371))
{{
var G__13373 = cljs.core.nnext.call(null,in$__13371);
var G__13374 = cljs.core.assoc.call(null,out__13372,cljs.core.first.call(null,in$__13371),cljs.core.second.call(null,in$__13371));
in$__13371 = G__13373;
out__13372 = G__13374;
continue;
}
} else
{return out__13372;
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
hash_map.cljs$lang$applyTo = (function (arglist__13375){
var keyvals = cljs.core.seq( arglist__13375 );;
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
{return cljs.core.reduce.call(null,(function (p1__13380_SHARP_,p2__13381_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13399 = p1__13380_SHARP_;

if(cljs.core.truth_(or__3548__auto____13399))
{return or__3548__auto____13399;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13381_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13411){
var maps = cljs.core.seq( arglist__13411 );;
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
{var merge_entry__13418 = (function (m,e){
var k__13415 = cljs.core.first.call(null,e);
var v__13416 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13415)))
{return cljs.core.assoc.call(null,m,k__13415,f.call(null,cljs.core.get.call(null,m,k__13415),v__13416));
} else
{return cljs.core.assoc.call(null,m,k__13415,v__13416);
}
});
var merge2__13426 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13418,(function (){var or__3548__auto____13421 = m1;

if(cljs.core.truth_(or__3548__auto____13421))
{return or__3548__auto____13421;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13426,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13439){
var f = cljs.core.first(arglist__13439);
var maps = cljs.core.rest(arglist__13439);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13447 = cljs.core.ObjMap.fromObject([],{});
var keys__13449 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13449))
{var key__13450 = cljs.core.first.call(null,keys__13449);
var entry__13451 = cljs.core.get.call(null,map,key__13450,"﷐'user/not-found");

{
var G__13458 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13451,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13447,key__13450,entry__13451):ret__13447);
var G__13459 = cljs.core.next.call(null,keys__13449);
ret__13447 = G__13458;
keys__13449 = G__13459;
continue;
}
} else
{return ret__13447;
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
var this__13470 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13514 = null;
var G__13514__13515 = (function (coll,v){
var this__13479 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13514__13516 = (function (coll,v,not_found){
var this__13482 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13482.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13514 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13514__13515.call(this,coll,v);
case  3 :
return G__13514__13516.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13514;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13521 = null;
var G__13521__13522 = (function (coll,k){
var this__13492 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13521__13523 = (function (coll,k,not_found){
var this__13493 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13521 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13521__13522.call(this,coll,k);
case  3 :
return G__13521__13523.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13521;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13495 = this;
return (new cljs.core.Set(this__13495.meta,cljs.core.assoc.call(null,this__13495.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13497 = this;
return cljs.core.keys.call(null,this__13497.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13499 = this;
return (new cljs.core.Set(this__13499.meta,cljs.core.dissoc.call(null,this__13499.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13502 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13505 = this;
var and__3546__auto____13506 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13506))
{var and__3546__auto____13509 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13509))
{return cljs.core.every_QMARK_.call(null,(function (p1__13444_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13444_SHARP_);
}),other);
} else
{return and__3546__auto____13509;
}
} else
{return and__3546__auto____13506;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13510 = this;
return (new cljs.core.Set(meta,this__13510.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13511 = this;
return this__13511.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13512 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13512.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13551 = cljs.core.seq.call(null,coll);
var out__13552 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13551))))
{{
var G__13556 = cljs.core.rest.call(null,in$__13551);
var G__13557 = cljs.core.conj.call(null,out__13552,cljs.core.first.call(null,in$__13551));
in$__13551 = G__13556;
out__13552 = G__13557;
continue;
}
} else
{return out__13552;
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
{var n__13560 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13561 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13561))
{var e__13562 = temp__3695__auto____13561;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13562));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13560,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13544_SHARP_){
var temp__3695__auto____13569 = cljs.core.find.call(null,smap,p1__13544_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13569))
{var e__13572 = temp__3695__auto____13569;

return cljs.core.second.call(null,e__13572);
} else
{return p1__13544_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13595 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13582,seen){
while(true){
var vec__13585__13590 = p__13582;
var f__13591 = cljs.core.nth.call(null,vec__13585__13590,0,null);
var xs__13592 = vec__13585__13590;

var temp__3698__auto____13593 = cljs.core.seq.call(null,xs__13592);

if(cljs.core.truth_(temp__3698__auto____13593))
{var s__13594 = temp__3698__auto____13593;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13591)))
{{
var G__13603 = cljs.core.rest.call(null,s__13594);
var G__13604 = seen;
p__13582 = G__13603;
seen = G__13604;
continue;
}
} else
{return cljs.core.cons.call(null,f__13591,step.call(null,cljs.core.rest.call(null,s__13594),cljs.core.conj.call(null,seen,f__13591)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13595.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13621 = cljs.core.Vector.fromArray([]);
var s__13623 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13623)))
{{
var G__13626 = cljs.core.conj.call(null,ret__13621,cljs.core.first.call(null,s__13623));
var G__13627 = cljs.core.next.call(null,s__13623);
ret__13621 = G__13626;
s__13623 = G__13627;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13621);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13705 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13705))
{return or__3548__auto____13705;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13706 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13706 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13706 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13710 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13710))
{return or__3548__auto____13710;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13712 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13712 > -1)))
{return cljs.core.subs.call(null,x,2,i__13712);
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
var map__13719 = cljs.core.ObjMap.fromObject([],{});
var ks__13721 = cljs.core.seq.call(null,keys);
var vs__13722 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13723 = ks__13721;

if(cljs.core.truth_(and__3546__auto____13723))
{return vs__13722;
} else
{return and__3546__auto____13723;
}
})()))
{{
var G__13728 = cljs.core.assoc.call(null,map__13719,cljs.core.first.call(null,ks__13721),cljs.core.first.call(null,vs__13722));
var G__13729 = cljs.core.next.call(null,ks__13721);
var G__13730 = cljs.core.next.call(null,vs__13722);
map__13719 = G__13728;
ks__13721 = G__13729;
vs__13722 = G__13730;
continue;
}
} else
{return map__13719;
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
var max_key__13746 = (function (k,x){
return x;
});
var max_key__13747 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13748 = (function() { 
var G__13752__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13716_SHARP_,p2__13717_SHARP_){
return max_key.call(null,k,p1__13716_SHARP_,p2__13717_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13752 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13752__delegate.call(this, k, x, y, more);
};
G__13752.cljs$lang$maxFixedArity = 3;
G__13752.cljs$lang$applyTo = (function (arglist__13753){
var k = cljs.core.first(arglist__13753);
var x = cljs.core.first(cljs.core.next(arglist__13753));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13753)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13753)));
return G__13752__delegate.call(this, k, x, y, more);
});
return G__13752;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13746.call(this,k,x);
case  3 :
return max_key__13747.call(this,k,x,y);
default:
return max_key__13748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13748.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13770 = (function (k,x){
return x;
});
var min_key__13771 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13772 = (function() { 
var G__13776__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13732_SHARP_,p2__13734_SHARP_){
return min_key.call(null,k,p1__13732_SHARP_,p2__13734_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13776 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13776__delegate.call(this, k, x, y, more);
};
G__13776.cljs$lang$maxFixedArity = 3;
G__13776.cljs$lang$applyTo = (function (arglist__13779){
var k = cljs.core.first(arglist__13779);
var x = cljs.core.first(cljs.core.next(arglist__13779));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13779)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13779)));
return G__13776__delegate.call(this, k, x, y, more);
});
return G__13776;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13770.call(this,k,x);
case  3 :
return min_key__13771.call(this,k,x,y);
default:
return min_key__13772.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13772.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13791 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13792 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13782 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13782))
{var s__13784 = temp__3698__auto____13782;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13784),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13784)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13791.call(this,n,step);
case  3 :
return partition_all__13792.call(this,n,step,coll);
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
var temp__3698__auto____13808 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13808))
{var s__13809 = temp__3698__auto____13808;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13809))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13809),take_while.call(null,pred,cljs.core.rest.call(null,s__13809)));
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
var this__13823 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13825 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13890 = null;
var G__13890__13891 = (function (rng,f){
var this__13840 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13890__13892 = (function (rng,f,s){
var this__13841 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13890 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13890__13891.call(this,rng,f);
case  3 :
return G__13890__13892.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13890;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13842 = this;
var comp__13843 = (cljs.core.truth_((this__13842.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13843.call(null,this__13842.start,this__13842.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13845 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13845.end - this__13845.start) / this__13845.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13848 = this;
return this__13848.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13850 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13850.meta,(this__13850.start + this__13850.step),this__13850.end,this__13850.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13864 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13867 = this;
return (new cljs.core.Range(meta,this__13867.start,this__13867.end,this__13867.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13871 = this;
return this__13871.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13904 = null;
var G__13904__13905 = (function (rng,n){
var this__13872 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13872.start + (n * this__13872.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13876 = (this__13872.start > this__13872.end);

if(cljs.core.truth_(and__3546__auto____13876))
{return cljs.core._EQ_.call(null,this__13872.step,0);
} else
{return and__3546__auto____13876;
}
})()))
{return this__13872.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13904__13906 = (function (rng,n,not_found){
var this__13879 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13879.start + (n * this__13879.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13885 = (this__13879.start > this__13879.end);

if(cljs.core.truth_(and__3546__auto____13885))
{return cljs.core._EQ_.call(null,this__13879.step,0);
} else
{return and__3546__auto____13885;
}
})()))
{return this__13879.start;
} else
{return not_found;
}
}
});
G__13904 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13904__13905.call(this,rng,n);
case  3 :
return G__13904__13906.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13904;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13887 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13887.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13927 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13928 = (function (end){
return range.call(null,0,end,1);
});
var range__13929 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13930 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13927.call(this);
case  1 :
return range__13928.call(this,start);
case  2 :
return range__13929.call(this,start,end);
case  3 :
return range__13930.call(this,start,end,step);
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
var temp__3698__auto____13939 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13939))
{var s__13950 = temp__3698__auto____13939;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13950),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13950)));
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
var temp__3698__auto____14058 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14058))
{var s__14060 = temp__3698__auto____14058;

var fst__14061 = cljs.core.first.call(null,s__14060);
var fv__14063 = f.call(null,fst__14061);
var run__14067 = cljs.core.cons.call(null,fst__14061,cljs.core.take_while.call(null,(function (p1__13957_SHARP_){
return cljs.core._EQ_.call(null,fv__14063,f.call(null,p1__13957_SHARP_));
}),cljs.core.next.call(null,s__14060)));

return cljs.core.cons.call(null,run__14067,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14067),s__14060))));
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
var reductions__14134 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14110 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14110))
{var s__14112 = temp__3695__auto____14110;

return reductions.call(null,f,cljs.core.first.call(null,s__14112),cljs.core.rest.call(null,s__14112));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14135 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14117 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14117))
{var s__14119 = temp__3698__auto____14117;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14119)),cljs.core.rest.call(null,s__14119));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14134.call(this,f,init);
case  3 :
return reductions__14135.call(this,f,init,coll);
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
var juxt__14176 = (function (f){
return (function() {
var G__14186 = null;
var G__14186__14187 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14186__14188 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14186__14189 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14186__14190 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14186__14191 = (function() { 
var G__14195__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14195 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14195__delegate.call(this, x, y, z, args);
};
G__14195.cljs$lang$maxFixedArity = 3;
G__14195.cljs$lang$applyTo = (function (arglist__14199){
var x = cljs.core.first(arglist__14199);
var y = cljs.core.first(cljs.core.next(arglist__14199));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14199)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14199)));
return G__14195__delegate.call(this, x, y, z, args);
});
return G__14195;
})()
;
G__14186 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14186__14187.call(this);
case  1 :
return G__14186__14188.call(this,x);
case  2 :
return G__14186__14189.call(this,x,y);
case  3 :
return G__14186__14190.call(this,x,y,z);
default:
return G__14186__14191.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14186.cljs$lang$maxFixedArity = 3;
G__14186.cljs$lang$applyTo = G__14186__14191.cljs$lang$applyTo;
return G__14186;
})()
});
var juxt__14178 = (function (f,g){
return (function() {
var G__14203 = null;
var G__14203__14204 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14203__14205 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14203__14206 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14203__14208 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14203__14209 = (function() { 
var G__14215__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14215 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14215__delegate.call(this, x, y, z, args);
};
G__14215.cljs$lang$maxFixedArity = 3;
G__14215.cljs$lang$applyTo = (function (arglist__14217){
var x = cljs.core.first(arglist__14217);
var y = cljs.core.first(cljs.core.next(arglist__14217));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14217)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14217)));
return G__14215__delegate.call(this, x, y, z, args);
});
return G__14215;
})()
;
G__14203 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14203__14204.call(this);
case  1 :
return G__14203__14205.call(this,x);
case  2 :
return G__14203__14206.call(this,x,y);
case  3 :
return G__14203__14208.call(this,x,y,z);
default:
return G__14203__14209.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14203.cljs$lang$maxFixedArity = 3;
G__14203.cljs$lang$applyTo = G__14203__14209.cljs$lang$applyTo;
return G__14203;
})()
});
var juxt__14180 = (function (f,g,h){
return (function() {
var G__14220 = null;
var G__14220__14221 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14220__14222 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14220__14223 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14220__14224 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14220__14225 = (function() { 
var G__14232__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14232 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14232__delegate.call(this, x, y, z, args);
};
G__14232.cljs$lang$maxFixedArity = 3;
G__14232.cljs$lang$applyTo = (function (arglist__14237){
var x = cljs.core.first(arglist__14237);
var y = cljs.core.first(cljs.core.next(arglist__14237));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14237)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14237)));
return G__14232__delegate.call(this, x, y, z, args);
});
return G__14232;
})()
;
G__14220 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14220__14221.call(this);
case  1 :
return G__14220__14222.call(this,x);
case  2 :
return G__14220__14223.call(this,x,y);
case  3 :
return G__14220__14224.call(this,x,y,z);
default:
return G__14220__14225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14220.cljs$lang$maxFixedArity = 3;
G__14220.cljs$lang$applyTo = G__14220__14225.cljs$lang$applyTo;
return G__14220;
})()
});
var juxt__14182 = (function() { 
var G__14240__delegate = function (f,g,h,fs){
var fs__14164 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14241 = null;
var G__14241__14243 = (function (){
return cljs.core.reduce.call(null,(function (p1__14097_SHARP_,p2__14098_SHARP_){
return cljs.core.conj.call(null,p1__14097_SHARP_,p2__14098_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14164);
});
var G__14241__14245 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14099_SHARP_,p2__14100_SHARP_){
return cljs.core.conj.call(null,p1__14099_SHARP_,p2__14100_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14164);
});
var G__14241__14246 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14102_SHARP_,p2__14103_SHARP_){
return cljs.core.conj.call(null,p1__14102_SHARP_,p2__14103_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14164);
});
var G__14241__14248 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14104_SHARP_,p2__14105_SHARP_){
return cljs.core.conj.call(null,p1__14104_SHARP_,p2__14105_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14164);
});
var G__14241__14249 = (function() { 
var G__14260__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14106_SHARP_,p2__14108_SHARP_){
return cljs.core.conj.call(null,p1__14106_SHARP_,cljs.core.apply.call(null,p2__14108_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14164);
};
var G__14260 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14260__delegate.call(this, x, y, z, args);
};
G__14260.cljs$lang$maxFixedArity = 3;
G__14260.cljs$lang$applyTo = (function (arglist__14263){
var x = cljs.core.first(arglist__14263);
var y = cljs.core.first(cljs.core.next(arglist__14263));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14263)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14263)));
return G__14260__delegate.call(this, x, y, z, args);
});
return G__14260;
})()
;
G__14241 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14241__14243.call(this);
case  1 :
return G__14241__14245.call(this,x);
case  2 :
return G__14241__14246.call(this,x,y);
case  3 :
return G__14241__14248.call(this,x,y,z);
default:
return G__14241__14249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14241.cljs$lang$maxFixedArity = 3;
G__14241.cljs$lang$applyTo = G__14241__14249.cljs$lang$applyTo;
return G__14241;
})()
};
var G__14240 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14240__delegate.call(this, f, g, h, fs);
};
G__14240.cljs$lang$maxFixedArity = 3;
G__14240.cljs$lang$applyTo = (function (arglist__14267){
var f = cljs.core.first(arglist__14267);
var g = cljs.core.first(cljs.core.next(arglist__14267));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14267)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14267)));
return G__14240__delegate.call(this, f, g, h, fs);
});
return G__14240;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14176.call(this,f);
case  2 :
return juxt__14178.call(this,f,g);
case  3 :
return juxt__14180.call(this,f,g,h);
default:
return juxt__14182.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14182.cljs$lang$applyTo;
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
var dorun__14314 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14317 = cljs.core.next.call(null,coll);
coll = G__14317;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14315 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14272 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14272))
{return (n > 0);
} else
{return and__3546__auto____14272;
}
})()))
{{
var G__14318 = (n - 1);
var G__14319 = cljs.core.next.call(null,coll);
n = G__14318;
coll = G__14319;
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
return dorun__14314.call(this,n);
case  2 :
return dorun__14315.call(this,n,coll);
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
var doall__14321 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14322 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14321.call(this,n);
case  2 :
return doall__14322.call(this,n,coll);
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
var matches__14326 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14326),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14326),1)))
{return cljs.core.first.call(null,matches__14326);
} else
{return cljs.core.vec.call(null,matches__14326);
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
var matches__14334 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14334)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14334),1)))
{return cljs.core.first.call(null,matches__14334);
} else
{return cljs.core.vec.call(null,matches__14334);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14345 = cljs.core.re_find.call(null,re,s);
var match_idx__14348 = s.search(re);
var match_str__14352 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14345))?cljs.core.first.call(null,match_data__14345):match_data__14345);
var post_match__14358 = cljs.core.subs.call(null,s,(match_idx__14348 + cljs.core.count.call(null,match_str__14352)));

if(cljs.core.truth_(match_data__14345))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14345,re_seq.call(null,re,post_match__14358));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14382_SHARP_){
return print_one.call(null,p1__14382_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14401 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14401))
{var and__3546__auto____14408 = (function (){var x__445__auto____14402 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14403 = x__445__auto____14402;

if(cljs.core.truth_(and__3546__auto____14403))
{var and__3546__auto____14405 = x__445__auto____14402.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14405))
{return cljs.core.not.call(null,x__445__auto____14402.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14405;
}
} else
{return and__3546__auto____14403;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14402);
}
})();

if(cljs.core.truth_(and__3546__auto____14408))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14408;
}
} else
{return and__3546__auto____14401;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14409 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14410 = x__445__auto____14409;

if(cljs.core.truth_(and__3546__auto____14410))
{var and__3546__auto____14415 = x__445__auto____14409.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14415))
{return cljs.core.not.call(null,x__445__auto____14409.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14415;
}
} else
{return and__3546__auto____14410;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14409);
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
var first_obj__14504 = cljs.core.first.call(null,objs);
var sb__14505 = (new goog.string.StringBuffer());

var G__14506__14507 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14506__14507))
{var obj__14508 = cljs.core.first.call(null,G__14506__14507);
var G__14506__14509 = G__14506__14507;

while(true){
if(cljs.core.truth_((obj__14508 === first_obj__14504)))
{} else
{sb__14505.append(" ");
}
var G__14513__14514 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14508,opts));

if(cljs.core.truth_(G__14513__14514))
{var string__14515 = cljs.core.first.call(null,G__14513__14514);
var G__14513__14516 = G__14513__14514;

while(true){
sb__14505.append(string__14515);
var temp__3698__auto____14517 = cljs.core.next.call(null,G__14513__14516);

if(cljs.core.truth_(temp__3698__auto____14517))
{var G__14513__14518 = temp__3698__auto____14517;

{
var G__14556 = cljs.core.first.call(null,G__14513__14518);
var G__14557 = G__14513__14518;
string__14515 = G__14556;
G__14513__14516 = G__14557;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14526 = cljs.core.next.call(null,G__14506__14509);

if(cljs.core.truth_(temp__3698__auto____14526))
{var G__14506__14527 = temp__3698__auto____14526;

{
var G__14559 = cljs.core.first.call(null,G__14506__14527);
var G__14560 = G__14506__14527;
obj__14508 = G__14559;
G__14506__14509 = G__14560;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14505);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14566 = cljs.core.first.call(null,objs);

var G__14568__14582 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14568__14582))
{var obj__14584 = cljs.core.first.call(null,G__14568__14582);
var G__14568__14585 = G__14568__14582;

while(true){
if(cljs.core.truth_((obj__14584 === first_obj__14566)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14586__14640 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14584,opts));

if(cljs.core.truth_(G__14586__14640))
{var string__14644 = cljs.core.first.call(null,G__14586__14640);
var G__14586__14645 = G__14586__14640;

while(true){
cljs.core.string_print.call(null,string__14644);
var temp__3698__auto____14651 = cljs.core.next.call(null,G__14586__14645);

if(cljs.core.truth_(temp__3698__auto____14651))
{var G__14586__14654 = temp__3698__auto____14651;

{
var G__14672 = cljs.core.first.call(null,G__14586__14654);
var G__14673 = G__14586__14654;
string__14644 = G__14672;
G__14586__14645 = G__14673;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14657 = cljs.core.next.call(null,G__14568__14585);

if(cljs.core.truth_(temp__3698__auto____14657))
{var G__14568__14660 = temp__3698__auto____14657;

{
var G__14675 = cljs.core.first.call(null,G__14568__14660);
var G__14676 = G__14568__14660;
obj__14584 = G__14675;
G__14568__14585 = G__14676;
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
pr_str.cljs$lang$applyTo = (function (arglist__14688){
var objs = cljs.core.seq( arglist__14688 );;
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
pr.cljs$lang$applyTo = (function (arglist__14690){
var objs = cljs.core.seq( arglist__14690 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14691){
var objs = cljs.core.seq( arglist__14691 );;
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
println.cljs$lang$applyTo = (function (arglist__14693){
var objs = cljs.core.seq( arglist__14693 );;
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
prn.cljs$lang$applyTo = (function (arglist__14708){
var objs = cljs.core.seq( arglist__14708 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14717 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14717,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14735 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14735))
{var nspc__14736 = temp__3698__auto____14735;

return cljs.core.str.call(null,nspc__14736,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14738 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14738))
{var nspc__14739 = temp__3698__auto____14738;

return cljs.core.str.call(null,nspc__14739,"/");
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
var pr_pair__14754 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14754,"{",", ","}",opts,coll);
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
var this__14778 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14780 = this;
var G__14782__14784 = cljs.core.seq.call(null,this__14780.watches);

if(cljs.core.truth_(G__14782__14784))
{var G__14786__14788 = cljs.core.first.call(null,G__14782__14784);
var vec__14787__14789 = G__14786__14788;
var key__14790 = cljs.core.nth.call(null,vec__14787__14789,0,null);
var f__14792 = cljs.core.nth.call(null,vec__14787__14789,1,null);
var G__14782__14793 = G__14782__14784;

var G__14786__14794 = G__14786__14788;
var G__14782__14795 = G__14782__14793;

while(true){
var vec__14796__14797 = G__14786__14794;
var key__14798 = cljs.core.nth.call(null,vec__14796__14797,0,null);
var f__14800 = cljs.core.nth.call(null,vec__14796__14797,1,null);
var G__14782__14801 = G__14782__14795;

f__14800.call(null,key__14798,this$,oldval,newval);
var temp__3698__auto____14803 = cljs.core.next.call(null,G__14782__14801);

if(cljs.core.truth_(temp__3698__auto____14803))
{var G__14782__14804 = temp__3698__auto____14803;

{
var G__14868 = cljs.core.first.call(null,G__14782__14804);
var G__14869 = G__14782__14804;
G__14786__14794 = G__14868;
G__14782__14795 = G__14869;
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
var this__14805 = this;
return this$.watches = cljs.core.assoc.call(null,this__14805.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14807 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14807.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14808 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14808.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14809 = this;
return this__14809.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14810 = this;
return this__14810.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14811 = this;
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
var atom__14882 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14883 = (function() { 
var G__14885__delegate = function (x,p__14871){
var map__14872__14874 = p__14871;
var map__14872__14875 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14872__14874))?cljs.core.apply.call(null,cljs.core.hash_map,map__14872__14874):map__14872__14874);
var validator__14876 = cljs.core.get.call(null,map__14872__14875,"﷐'validator");
var meta__14877 = cljs.core.get.call(null,map__14872__14875,"﷐'meta");

return (new cljs.core.Atom(x,meta__14877,validator__14876,null));
};
var G__14885 = function (x,var_args){
var p__14871 = null;
if (goog.isDef(var_args)) {
  p__14871 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14885__delegate.call(this, x, p__14871);
};
G__14885.cljs$lang$maxFixedArity = 1;
G__14885.cljs$lang$applyTo = (function (arglist__14887){
var x = cljs.core.first(arglist__14887);
var p__14871 = cljs.core.rest(arglist__14887);
return G__14885__delegate.call(this, x, p__14871);
});
return G__14885;
})()
;
atom = function(x,var_args){
var p__14871 = var_args;
switch(arguments.length){
case  1 :
return atom__14882.call(this,x);
default:
return atom__14883.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14883.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14893 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14893))
{var validate__14895 = temp__3698__auto____14893;

if(cljs.core.truth_(validate__14895.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14897 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14897,new_value);
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
var swap_BANG___14910 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14911 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14912 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14913 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14914 = (function() { 
var G__14922__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14922 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14922__delegate.call(this, a, f, x, y, z, more);
};
G__14922.cljs$lang$maxFixedArity = 5;
G__14922.cljs$lang$applyTo = (function (arglist__14924){
var a = cljs.core.first(arglist__14924);
var f = cljs.core.first(cljs.core.next(arglist__14924));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14924)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14924))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14924)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14924)))));
return G__14922__delegate.call(this, a, f, x, y, z, more);
});
return G__14922;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14910.call(this,a,f);
case  3 :
return swap_BANG___14911.call(this,a,f,x);
case  4 :
return swap_BANG___14912.call(this,a,f,x,y);
case  5 :
return swap_BANG___14913.call(this,a,f,x,y,z);
default:
return swap_BANG___14914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14914.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14967){
var iref = cljs.core.first(arglist__14967);
var f = cljs.core.first(cljs.core.next(arglist__14967));
var args = cljs.core.rest(cljs.core.next(arglist__14967));
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
var gensym__14994 = (function (){
return gensym.call(null,"G__");
});
var gensym__14995 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14994.call(this);
case  1 :
return gensym__14995.call(this,prefix_string);
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
var this__15007 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__15007.state)));
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
delay.cljs$lang$applyTo = (function (arglist__15028){
var body = cljs.core.seq( arglist__15028 );;
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
var map__15032__15035 = options;
var map__15032__15036 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15032__15035))?cljs.core.apply.call(null,cljs.core.hash_map,map__15032__15035):map__15032__15035);
var keywordize_keys__15037 = cljs.core.get.call(null,map__15032__15036,"﷐'keywordize-keys");
var keyfn__15038 = (cljs.core.truth_(keywordize_keys__15037)?cljs.core.keyword:cljs.core.str);
var f__15070 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15069 = (function iter__15039(s__15040){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15040__15041 = s__15040;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15040__15041)))
{var k__15045 = cljs.core.first.call(null,s__15040__15041);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15038.call(null,k__15045),thisfn.call(null,(x[k__15045]))]),iter__15039.call(null,cljs.core.rest.call(null,s__15040__15041)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15069.call(null,cljs.core.js_keys.call(null,x));
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

return f__15070.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15076){
var x = cljs.core.first(arglist__15076);
var options = cljs.core.rest(arglist__15076);
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
var mem__15080 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15094__delegate = function (args){
var temp__3695__auto____15081 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15080),args);

if(cljs.core.truth_(temp__3695__auto____15081))
{var v__15082 = temp__3695__auto____15081;

return v__15082;
} else
{var ret__15089 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15080,cljs.core.assoc,args,ret__15089);
return ret__15089;
}
};
var G__15094 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15094__delegate.call(this, args);
};
G__15094.cljs$lang$maxFixedArity = 0;
G__15094.cljs$lang$applyTo = (function (arglist__15097){
var args = cljs.core.seq( arglist__15097 );;
return G__15094__delegate.call(this, args);
});
return G__15094;
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
var trampoline__15101 = (function (f){
while(true){
var ret__15098 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15098)))
{{
var G__15107 = ret__15098;
f = G__15107;
continue;
}
} else
{return ret__15098;
}
break;
}
});
var trampoline__15102 = (function() { 
var G__15108__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15108 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15108__delegate.call(this, f, args);
};
G__15108.cljs$lang$maxFixedArity = 1;
G__15108.cljs$lang$applyTo = (function (arglist__15111){
var f = cljs.core.first(arglist__15111);
var args = cljs.core.rest(arglist__15111);
return G__15108__delegate.call(this, f, args);
});
return G__15108;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15101.call(this,f);
default:
return trampoline__15102.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15102.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15113 = (function (){
return rand.call(null,1);
});
var rand__15114 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15113.call(this);
case  1 :
return rand__15114.call(this,n);
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
var k__15121 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15121,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15121,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15145 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15146 = (function (h,child,parent){
var or__3548__auto____15129 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15129))
{return or__3548__auto____15129;
} else
{var or__3548__auto____15131 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15131))
{return or__3548__auto____15131;
} else
{var and__3546__auto____15133 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15133))
{var and__3546__auto____15135 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15135))
{var and__3546__auto____15136 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15136))
{var ret__15137 = true;
var i__15139 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15140 = cljs.core.not.call(null,ret__15137);

if(cljs.core.truth_(or__3548__auto____15140))
{return or__3548__auto____15140;
} else
{return cljs.core._EQ_.call(null,i__15139,cljs.core.count.call(null,parent));
}
})()))
{return ret__15137;
} else
{{
var G__15150 = isa_QMARK_.call(null,h,child.call(null,i__15139),parent.call(null,i__15139));
var G__15151 = (i__15139 + 1);
ret__15137 = G__15150;
i__15139 = G__15151;
continue;
}
}
break;
}
} else
{return and__3546__auto____15136;
}
} else
{return and__3546__auto____15135;
}
} else
{return and__3546__auto____15133;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15145.call(this,h,child);
case  3 :
return isa_QMARK___15146.call(this,h,child,parent);
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
var parents__15160 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15162 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15160.call(this,h);
case  2 :
return parents__15162.call(this,h,tag);
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
var ancestors__15184 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15185 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15184.call(this,h);
case  2 :
return ancestors__15185.call(this,h,tag);
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
var descendants__15195 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15196 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15195.call(this,h);
case  2 :
return descendants__15196.call(this,h,tag);
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
var derive__15237 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15238 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15207 = "﷐'parents".call(null,h);
var td__15208 = "﷐'descendants".call(null,h);
var ta__15209 = "﷐'ancestors".call(null,h);
var tf__15211 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15216 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15207.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15209.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15209.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15207,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15211.call(null,"﷐'ancestors".call(null,h),tag,td__15208,parent,ta__15209),"﷐'descendants":tf__15211.call(null,"﷐'descendants".call(null,h),parent,ta__15209,tag,td__15208)});
})());

if(cljs.core.truth_(or__3548__auto____15216))
{return or__3548__auto____15216;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15237.call(this,h,tag);
case  3 :
return derive__15238.call(this,h,tag,parent);
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
var underive__15263 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15264 = (function (h,tag,parent){
var parentMap__15254 = "﷐'parents".call(null,h);
var childsParents__15255 = (cljs.core.truth_(parentMap__15254.call(null,tag))?cljs.core.disj.call(null,parentMap__15254.call(null,tag),parent):cljs.core.set([]));
var newParents__15256 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15255))?cljs.core.assoc.call(null,parentMap__15254,tag,childsParents__15255):cljs.core.dissoc.call(null,parentMap__15254,tag));
var deriv_seq__15257 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15201_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15201_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15201_SHARP_),cljs.core.second.call(null,p1__15201_SHARP_)));
}),cljs.core.seq.call(null,newParents__15256)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15254.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15203_SHARP_,p2__15204_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15203_SHARP_,p2__15204_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15257));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15263.call(this,h,tag);
case  3 :
return underive__15264.call(this,h,tag,parent);
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
var xprefs__15277 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15281 = (cljs.core.truth_((function (){var and__3546__auto____15280 = xprefs__15277;

if(cljs.core.truth_(and__3546__auto____15280))
{return xprefs__15277.call(null,y);
} else
{return and__3546__auto____15280;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15281))
{return or__3548__auto____15281;
} else
{var or__3548__auto____15285 = (function (){var ps__15282 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15282) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15282),prefer_table)))
{} else
{}
{
var G__15295 = cljs.core.rest.call(null,ps__15282);
ps__15282 = G__15295;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15285))
{return or__3548__auto____15285;
} else
{var or__3548__auto____15290 = (function (){var ps__15286 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15286) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15286),y,prefer_table)))
{} else
{}
{
var G__15296 = cljs.core.rest.call(null,ps__15286);
ps__15286 = G__15296;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15290))
{return or__3548__auto____15290;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15302 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15302))
{return or__3548__auto____15302;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15387 = cljs.core.reduce.call(null,(function (be,p__15308){
var vec__15309__15310 = p__15308;
var k__15311 = cljs.core.nth.call(null,vec__15309__15310,0,null);
var ___15312 = cljs.core.nth.call(null,vec__15309__15310,1,null);
var e__15313 = vec__15309__15310;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15311)))
{var be2__15386 = (cljs.core.truth_((function (){var or__3548__auto____15314 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15314))
{return or__3548__auto____15314;
} else
{return cljs.core.dominates.call(null,k__15311,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15313:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15386),k__15311,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15311," and ",cljs.core.first.call(null,be2__15386),", and neither is preferred")));
}
return be2__15386;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15387))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15387));
return cljs.core.second.call(null,best_entry__15387);
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
if(cljs.core.truth_((function (){var and__3546__auto____15389 = mf;

if(cljs.core.truth_(and__3546__auto____15389))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15389;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15390 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15390))
{return or__3548__auto____15390;
} else
{var or__3548__auto____15391 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15391))
{return or__3548__auto____15391;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15393 = mf;

if(cljs.core.truth_(and__3546__auto____15393))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15393;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15394 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15394))
{return or__3548__auto____15394;
} else
{var or__3548__auto____15395 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15395))
{return or__3548__auto____15395;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15396 = mf;

if(cljs.core.truth_(and__3546__auto____15396))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15396;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15399 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15399))
{return or__3548__auto____15399;
} else
{var or__3548__auto____15400 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15400))
{return or__3548__auto____15400;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15401 = mf;

if(cljs.core.truth_(and__3546__auto____15401))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15401;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15402 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15402))
{return or__3548__auto____15402;
} else
{var or__3548__auto____15403 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15403))
{return or__3548__auto____15403;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15404 = mf;

if(cljs.core.truth_(and__3546__auto____15404))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15404;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15405 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15405))
{return or__3548__auto____15405;
} else
{var or__3548__auto____15406 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15406))
{return or__3548__auto____15406;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15408 = mf;

if(cljs.core.truth_(and__3546__auto____15408))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15408;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15411 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15411))
{return or__3548__auto____15411;
} else
{var or__3548__auto____15412 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15412))
{return or__3548__auto____15412;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15413 = mf;

if(cljs.core.truth_(and__3546__auto____15413))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15413;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15416 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15416))
{return or__3548__auto____15416;
} else
{var or__3548__auto____15417 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15417))
{return or__3548__auto____15417;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15421 = mf;

if(cljs.core.truth_(and__3546__auto____15421))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15421;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15425 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15425))
{return or__3548__auto____15425;
} else
{var or__3548__auto____15426 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15426))
{return or__3548__auto____15426;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15462 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15463 = cljs.core._get_method.call(null,mf,dispatch_val__15462);

if(cljs.core.truth_(target_fn__15463))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15462)));
}
return cljs.core.apply.call(null,target_fn__15463,args);
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
var this__15466 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15467 = this;
cljs.core.swap_BANG_.call(null,this__15467.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15467.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15467.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15467.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15468 = this;
cljs.core.swap_BANG_.call(null,this__15468.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15468.method_cache,this__15468.method_table,this__15468.cached_hierarchy,this__15468.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15469 = this;
cljs.core.swap_BANG_.call(null,this__15469.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15469.method_cache,this__15469.method_table,this__15469.cached_hierarchy,this__15469.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15471 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15471.cached_hierarchy),cljs.core.deref.call(null,this__15471.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15471.method_cache,this__15471.method_table,this__15471.cached_hierarchy,this__15471.hierarchy);
}
var temp__3695__auto____15510 = cljs.core.deref.call(null,this__15471.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15510))
{var target_fn__15512 = temp__3695__auto____15510;

return target_fn__15512;
} else
{var temp__3695__auto____15513 = cljs.core.find_and_cache_best_method.call(null,this__15471.name,dispatch_val,this__15471.hierarchy,this__15471.method_table,this__15471.prefer_table,this__15471.method_cache,this__15471.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15513))
{var target_fn__15515 = temp__3695__auto____15513;

return target_fn__15515;
} else
{return cljs.core.deref.call(null,this__15471.method_table).call(null,this__15471.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15518 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15518.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15518.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15518.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15518.method_cache,this__15518.method_table,this__15518.cached_hierarchy,this__15518.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15521 = this;
return cljs.core.deref.call(null,this__15521.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15523 = this;
return cljs.core.deref.call(null,this__15523.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15525 = this;
return cljs.core.do_dispatch.call(null,mf,this__15525.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15549__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15549 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15549__delegate.call(this, _, args);
};
G__15549.cljs$lang$maxFixedArity = 1;
G__15549.cljs$lang$applyTo = (function (arglist__15551){
var _ = cljs.core.first(arglist__15551);
var args = cljs.core.rest(arglist__15551);
return G__15549__delegate.call(this, _, args);
});
return G__15549;
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
