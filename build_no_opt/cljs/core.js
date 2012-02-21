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
var or__3548__auto____7311 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7311))
{return or__3548__auto____7311;
} else
{var or__3548__auto____7312 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7312))
{return or__3548__auto____7312;
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
var _invoke__7621 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7382 = this$;

if(cljs.core.truth_(and__3546__auto____7382))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7382;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7384 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7384))
{return or__3548__auto____7384;
} else
{var or__3548__auto____7387 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7387))
{return or__3548__auto____7387;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7622 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7389 = this$;

if(cljs.core.truth_(and__3546__auto____7389))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7389;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7391 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7391))
{return or__3548__auto____7391;
} else
{var or__3548__auto____7393 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7393))
{return or__3548__auto____7393;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7623 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7397 = this$;

if(cljs.core.truth_(and__3546__auto____7397))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7397;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7401 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7401))
{return or__3548__auto____7401;
} else
{var or__3548__auto____7405 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7405))
{return or__3548__auto____7405;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7624 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7408 = this$;

if(cljs.core.truth_(and__3546__auto____7408))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7408;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7413 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7413))
{return or__3548__auto____7413;
} else
{var or__3548__auto____7415 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7415))
{return or__3548__auto____7415;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7625 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7420 = this$;

if(cljs.core.truth_(and__3546__auto____7420))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7420;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7424 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7424))
{return or__3548__auto____7424;
} else
{var or__3548__auto____7426 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7426))
{return or__3548__auto____7426;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7626 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7429 = this$;

if(cljs.core.truth_(and__3546__auto____7429))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7429;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7434 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7434))
{return or__3548__auto____7434;
} else
{var or__3548__auto____7437 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7437))
{return or__3548__auto____7437;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7628 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7440 = this$;

if(cljs.core.truth_(and__3546__auto____7440))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7440;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7451 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7451))
{return or__3548__auto____7451;
} else
{var or__3548__auto____7465 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7465))
{return or__3548__auto____7465;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7629 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7468 = this$;

if(cljs.core.truth_(and__3546__auto____7468))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7468;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7473 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7473))
{return or__3548__auto____7473;
} else
{var or__3548__auto____7476 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7476))
{return or__3548__auto____7476;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7630 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7506 = this$;

if(cljs.core.truth_(and__3546__auto____7506))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7506;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7631 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7515 = this$;

if(cljs.core.truth_(and__3546__auto____7515))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7515;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7518 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7518))
{return or__3548__auto____7518;
} else
{var or__3548__auto____7520 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7520))
{return or__3548__auto____7520;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7632 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7523 = this$;

if(cljs.core.truth_(and__3546__auto____7523))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7523;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7525 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7525))
{return or__3548__auto____7525;
} else
{var or__3548__auto____7527 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7527))
{return or__3548__auto____7527;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7633 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7529 = this$;

if(cljs.core.truth_(and__3546__auto____7529))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7529;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7531 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7531))
{return or__3548__auto____7531;
} else
{var or__3548__auto____7532 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7532))
{return or__3548__auto____7532;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7634 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7533 = this$;

if(cljs.core.truth_(and__3546__auto____7533))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7533;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7538 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7538))
{return or__3548__auto____7538;
} else
{var or__3548__auto____7539 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7539))
{return or__3548__auto____7539;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7635 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7542 = this$;

if(cljs.core.truth_(and__3546__auto____7542))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7542;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7636 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7549 = this$;

if(cljs.core.truth_(and__3546__auto____7549))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7549;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7553 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7553))
{return or__3548__auto____7553;
} else
{var or__3548__auto____7555 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7555))
{return or__3548__auto____7555;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7637 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7558 = this$;

if(cljs.core.truth_(and__3546__auto____7558))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7558;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7562 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7562))
{return or__3548__auto____7562;
} else
{var or__3548__auto____7563 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7563))
{return or__3548__auto____7563;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7638 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7568 = this$;

if(cljs.core.truth_(and__3546__auto____7568))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7568;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7572 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7572))
{return or__3548__auto____7572;
} else
{var or__3548__auto____7575 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7575))
{return or__3548__auto____7575;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7580 = this$;

if(cljs.core.truth_(and__3546__auto____7580))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7580;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7584 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7584))
{return or__3548__auto____7584;
} else
{var or__3548__auto____7587 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7587))
{return or__3548__auto____7587;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7640 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7592 = this$;

if(cljs.core.truth_(and__3546__auto____7592))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7592;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7596 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7596))
{return or__3548__auto____7596;
} else
{var or__3548__auto____7598 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7598))
{return or__3548__auto____7598;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7641 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7602 = this$;

if(cljs.core.truth_(and__3546__auto____7602))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7602;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7605 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7605))
{return or__3548__auto____7605;
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
var _invoke__7642 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
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
return _invoke__7621.call(this,this$);
case  2 :
return _invoke__7622.call(this,this$,a);
case  3 :
return _invoke__7623.call(this,this$,a,b);
case  4 :
return _invoke__7624.call(this,this$,a,b,c);
case  5 :
return _invoke__7625.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7626.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7628.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7629.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7630.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7631.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7632.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7633.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7634.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7635.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7636.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7637.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7638.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7639.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7640.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7641.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7642.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7796 = coll;

if(cljs.core.truth_(and__3546__auto____7796))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7796;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7798 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7798))
{return or__3548__auto____7798;
} else
{var or__3548__auto____7800 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7800))
{return or__3548__auto____7800;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7822 = coll;

if(cljs.core.truth_(and__3546__auto____7822))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7822;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7823 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7823))
{return or__3548__auto____7823;
} else
{var or__3548__auto____7824 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7824))
{return or__3548__auto____7824;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7828 = coll;

if(cljs.core.truth_(and__3546__auto____7828))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7828;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7829 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7829))
{return or__3548__auto____7829;
} else
{var or__3548__auto____7830 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7830))
{return or__3548__auto____7830;
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
var _nth__7843 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7834 = coll;

if(cljs.core.truth_(and__3546__auto____7834))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7834;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7835 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7835))
{return or__3548__auto____7835;
} else
{var or__3548__auto____7836 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7836))
{return or__3548__auto____7836;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7844 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7837 = coll;

if(cljs.core.truth_(and__3546__auto____7837))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7837;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7839 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7839))
{return or__3548__auto____7839;
} else
{var or__3548__auto____7840 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7840))
{return or__3548__auto____7840;
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
return _nth__7843.call(this,coll,n);
case  3 :
return _nth__7844.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7849 = coll;

if(cljs.core.truth_(and__3546__auto____7849))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7849;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7851 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7851))
{return or__3548__auto____7851;
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
if(cljs.core.truth_((function (){var and__3546__auto____7855 = coll;

if(cljs.core.truth_(and__3546__auto____7855))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7855;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7856 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7856))
{return or__3548__auto____7856;
} else
{var or__3548__auto____7857 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7857))
{return or__3548__auto____7857;
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
if(cljs.core.truth_((function (){var and__3546__auto____7861 = o;

if(cljs.core.truth_(and__3546__auto____7861))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7861;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7862 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7862))
{return or__3548__auto____7862;
} else
{var or__3548__auto____7863 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7863))
{return or__3548__auto____7863;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7871 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7864 = o;

if(cljs.core.truth_(and__3546__auto____7864))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7864;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7866 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7866))
{return or__3548__auto____7866;
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
if(cljs.core.truth_((function (){var and__3546__auto____7907 = coll;

if(cljs.core.truth_(and__3546__auto____7907))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7907;
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
if(cljs.core.truth_((function (){var and__3546__auto____7912 = coll;

if(cljs.core.truth_(and__3546__auto____7912))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7912;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7913 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7913))
{return or__3548__auto____7913;
} else
{var or__3548__auto____7914 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7914))
{return or__3548__auto____7914;
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
{return (function (){var or__3548__auto____7924 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7924))
{return or__3548__auto____7924;
} else
{var or__3548__auto____7926 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7926))
{return or__3548__auto____7926;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7938 = coll;

if(cljs.core.truth_(and__3546__auto____7938))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7938;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7940 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7940))
{return or__3548__auto____7940;
} else
{var or__3548__auto____7941 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7941))
{return or__3548__auto____7941;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7949 = coll;

if(cljs.core.truth_(and__3546__auto____7949))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7949;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7953 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7953))
{return or__3548__auto____7953;
} else
{var or__3548__auto____7954 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7954))
{return or__3548__auto____7954;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7959 = coll;

if(cljs.core.truth_(and__3546__auto____7959))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7959;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7961 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7961))
{return or__3548__auto____7961;
} else
{var or__3548__auto____7963 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7963))
{return or__3548__auto____7963;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8017 = coll;

if(cljs.core.truth_(and__3546__auto____8017))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8017;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8019 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
} else
{var or__3548__auto____8020 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8020))
{return or__3548__auto____8020;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8026 = o;

if(cljs.core.truth_(and__3546__auto____8026))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8026;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8028 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8028))
{return or__3548__auto____8028;
} else
{var or__3548__auto____8030 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8030))
{return or__3548__auto____8030;
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
{return (function (){var or__3548__auto____8039 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8039))
{return or__3548__auto____8039;
} else
{var or__3548__auto____8040 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8040))
{return or__3548__auto____8040;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8045 = o;

if(cljs.core.truth_(and__3546__auto____8045))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8045;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8048 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8048))
{return or__3548__auto____8048;
} else
{var or__3548__auto____8049 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8054 = o;

if(cljs.core.truth_(and__3546__auto____8054))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8054;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8058 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8058))
{return or__3548__auto____8058;
} else
{var or__3548__auto____8061 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8061))
{return or__3548__auto____8061;
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
var _reduce__8085 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8067 = coll;

if(cljs.core.truth_(and__3546__auto____8067))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8067;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8070 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8070))
{return or__3548__auto____8070;
} else
{var or__3548__auto____8072 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8072))
{return or__3548__auto____8072;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8086 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8076 = coll;

if(cljs.core.truth_(and__3546__auto____8076))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8076;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8079 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8079))
{return or__3548__auto____8079;
} else
{var or__3548__auto____8082 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8082))
{return or__3548__auto____8082;
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
return _reduce__8085.call(this,coll,f);
case  3 :
return _reduce__8086.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8099 = o;

if(cljs.core.truth_(and__3546__auto____8099))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8099;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8102 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8102))
{return or__3548__auto____8102;
} else
{var or__3548__auto____8105 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8105))
{return or__3548__auto____8105;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8108 = o;

if(cljs.core.truth_(and__3546__auto____8108))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8108;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8113 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8113))
{return or__3548__auto____8113;
} else
{var or__3548__auto____8115 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8115))
{return or__3548__auto____8115;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8143 = o;

if(cljs.core.truth_(and__3546__auto____8143))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8143;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8145 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8145))
{return or__3548__auto____8145;
} else
{var or__3548__auto____8147 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8147))
{return or__3548__auto____8147;
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
if(cljs.core.truth_((function (){var and__3546__auto____8154 = o;

if(cljs.core.truth_(and__3546__auto____8154))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8154;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8157 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8157))
{return or__3548__auto____8157;
} else
{var or__3548__auto____8159 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8159))
{return or__3548__auto____8159;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8170 = d;

if(cljs.core.truth_(and__3546__auto____8170))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8170;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8172 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8172))
{return or__3548__auto____8172;
} else
{var or__3548__auto____8175 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8175))
{return or__3548__auto____8175;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8182 = this$;

if(cljs.core.truth_(and__3546__auto____8182))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8182;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8184 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8184))
{return or__3548__auto____8184;
} else
{var or__3548__auto____8186 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8186))
{return or__3548__auto____8186;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8188 = this$;

if(cljs.core.truth_(and__3546__auto____8188))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8188;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8191 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8191))
{return or__3548__auto____8191;
} else
{var or__3548__auto____8192 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8192))
{return or__3548__auto____8192;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8195 = this$;

if(cljs.core.truth_(and__3546__auto____8195))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8195;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8200 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8200))
{return or__3548__auto____8200;
} else
{var or__3548__auto____8202 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8202))
{return or__3548__auto____8202;
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
var G__8244 = null;
var G__8244__8245 = (function (o,k){
return null;
});
var G__8244__8246 = (function (o,k,not_found){
return not_found;
});
G__8244 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8244__8245.call(this,o,k);
case  3 :
return G__8244__8246.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8244;
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
var G__8248 = null;
var G__8248__8249 = (function (_,f){
return f.call(null);
});
var G__8248__8250 = (function (_,f,start){
return start;
});
G__8248 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8248__8249.call(this,_,f);
case  3 :
return G__8248__8250.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8248;
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
var G__8256 = null;
var G__8256__8257 = (function (_,n){
return null;
});
var G__8256__8258 = (function (_,n,not_found){
return not_found;
});
G__8256 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8256__8257.call(this,_,n);
case  3 :
return G__8256__8258.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8256;
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
var ci_reduce__8327 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8315 = cljs.core._nth.call(null,cicoll,0);
var n__8317 = 1;

while(true){
if(cljs.core.truth_((n__8317 < cljs.core._count.call(null,cicoll))))
{{
var G__8331 = f.call(null,val__8315,cljs.core._nth.call(null,cicoll,n__8317));
var G__8332 = (n__8317 + 1);
val__8315 = G__8331;
n__8317 = G__8332;
continue;
}
} else
{return val__8315;
}
break;
}
}
});
var ci_reduce__8328 = (function (cicoll,f,val){
var val__8320 = val;
var n__8321 = 0;

while(true){
if(cljs.core.truth_((n__8321 < cljs.core._count.call(null,cicoll))))
{{
var G__8333 = f.call(null,val__8320,cljs.core._nth.call(null,cicoll,n__8321));
var G__8334 = (n__8321 + 1);
val__8320 = G__8333;
n__8321 = G__8334;
continue;
}
} else
{return val__8320;
}
break;
}
});
var ci_reduce__8329 = (function (cicoll,f,val,idx){
var val__8324 = val;
var n__8326 = idx;

while(true){
if(cljs.core.truth_((n__8326 < cljs.core._count.call(null,cicoll))))
{{
var G__8338 = f.call(null,val__8324,cljs.core._nth.call(null,cicoll,n__8326));
var G__8339 = (n__8326 + 1);
val__8324 = G__8338;
n__8326 = G__8339;
continue;
}
} else
{return val__8324;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8327.call(this,cicoll,f);
case  3 :
return ci_reduce__8328.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8329.call(this,cicoll,f,val,idx);
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
var this__8359 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8385 = null;
var G__8385__8386 = (function (_,f){
var this__8362 = this;
return cljs.core.ci_reduce.call(null,this__8362.a,f,(this__8362.a[this__8362.i]),(this__8362.i + 1));
});
var G__8385__8387 = (function (_,f,start){
var this__8363 = this;
return cljs.core.ci_reduce.call(null,this__8363.a,f,start,this__8363.i);
});
G__8385 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8385__8386.call(this,_,f);
case  3 :
return G__8385__8387.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8385;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8366 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8369 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8394 = null;
var G__8394__8395 = (function (coll,n){
var this__8370 = this;
var i__8371 = (n + this__8370.i);

if(cljs.core.truth_((i__8371 < this__8370.a.length)))
{return (this__8370.a[i__8371]);
} else
{return null;
}
});
var G__8394__8396 = (function (coll,n,not_found){
var this__8374 = this;
var i__8375 = (n + this__8374.i);

if(cljs.core.truth_((i__8375 < this__8374.a.length)))
{return (this__8374.a[i__8375]);
} else
{return not_found;
}
});
G__8394 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8394__8395.call(this,coll,n);
case  3 :
return G__8394__8396.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8394;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8376 = this;
return (this__8376.a.length - this__8376.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8377 = this;
return (this__8377.a[this__8377.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8378 = this;
if(cljs.core.truth_(((this__8378.i + 1) < this__8378.a.length)))
{return (new cljs.core.IndexedSeq(this__8378.a,(this__8378.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8382 = this;
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
var G__8495 = null;
var G__8495__8496 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8495__8497 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8495 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8495__8496.call(this,array,f);
case  3 :
return G__8495__8497.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8495;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8500 = null;
var G__8500__8501 = (function (array,k){
return (array[k]);
});
var G__8500__8502 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8500 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8500__8501.call(this,array,k);
case  3 :
return G__8500__8502.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8500;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8504 = null;
var G__8504__8505 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8504__8506 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8504 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8504__8505.call(this,array,n);
case  3 :
return G__8504__8506.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8504;
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
var temp__3698__auto____8514 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8514))
{var s__8515 = temp__3698__auto____8514;

return cljs.core._first.call(null,s__8515);
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
var G__8550 = cljs.core.next.call(null,s);
s = G__8550;
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
var s__8581 = cljs.core.seq.call(null,x);
var n__8582 = 0;

while(true){
if(cljs.core.truth_(s__8581))
{{
var G__8587 = cljs.core.next.call(null,s__8581);
var G__8588 = (n__8582 + 1);
s__8581 = G__8587;
n__8582 = G__8588;
continue;
}
} else
{return n__8582;
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
var conj__8594 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8595 = (function() { 
var G__8597__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8598 = conj.call(null,coll,x);
var G__8599 = cljs.core.first.call(null,xs);
var G__8600 = cljs.core.next.call(null,xs);
coll = G__8598;
x = G__8599;
xs = G__8600;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8597 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8597__delegate.call(this, coll, x, xs);
};
G__8597.cljs$lang$maxFixedArity = 2;
G__8597.cljs$lang$applyTo = (function (arglist__8601){
var coll = cljs.core.first(arglist__8601);
var x = cljs.core.first(cljs.core.next(arglist__8601));
var xs = cljs.core.rest(cljs.core.next(arglist__8601));
return G__8597__delegate.call(this, coll, x, xs);
});
return G__8597;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8594.call(this,coll,x);
default:
return conj__8595.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8595.cljs$lang$applyTo;
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
var nth__8603 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8604 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8603.call(this,coll,n);
case  3 :
return nth__8604.call(this,coll,n,not_found);
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
var get__8614 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8615 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8614.call(this,o,k);
case  3 :
return get__8615.call(this,o,k,not_found);
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
var assoc__8622 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8623 = (function() { 
var G__8625__delegate = function (coll,k,v,kvs){
while(true){
var ret__8619 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8627 = ret__8619;
var G__8629 = cljs.core.first.call(null,kvs);
var G__8630 = cljs.core.second.call(null,kvs);
var G__8631 = cljs.core.nnext.call(null,kvs);
coll = G__8627;
k = G__8629;
v = G__8630;
kvs = G__8631;
continue;
}
} else
{return ret__8619;
}
break;
}
};
var G__8625 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8625__delegate.call(this, coll, k, v, kvs);
};
G__8625.cljs$lang$maxFixedArity = 3;
G__8625.cljs$lang$applyTo = (function (arglist__8635){
var coll = cljs.core.first(arglist__8635);
var k = cljs.core.first(cljs.core.next(arglist__8635));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8635)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8635)));
return G__8625__delegate.call(this, coll, k, v, kvs);
});
return G__8625;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8622.call(this,coll,k,v);
default:
return assoc__8623.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8623.cljs$lang$applyTo;
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
var dissoc__8639 = (function (coll){
return coll;
});
var dissoc__8640 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8641 = (function() { 
var G__8643__delegate = function (coll,k,ks){
while(true){
var ret__8636 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8644 = ret__8636;
var G__8645 = cljs.core.first.call(null,ks);
var G__8646 = cljs.core.next.call(null,ks);
coll = G__8644;
k = G__8645;
ks = G__8646;
continue;
}
} else
{return ret__8636;
}
break;
}
};
var G__8643 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8643__delegate.call(this, coll, k, ks);
};
G__8643.cljs$lang$maxFixedArity = 2;
G__8643.cljs$lang$applyTo = (function (arglist__8647){
var coll = cljs.core.first(arglist__8647);
var k = cljs.core.first(cljs.core.next(arglist__8647));
var ks = cljs.core.rest(cljs.core.next(arglist__8647));
return G__8643__delegate.call(this, coll, k, ks);
});
return G__8643;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8639.call(this,coll);
case  2 :
return dissoc__8640.call(this,coll,k);
default:
return dissoc__8641.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8641.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8689 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8690 = x__445__auto____8689;

if(cljs.core.truth_(and__3546__auto____8690))
{var and__3546__auto____8691 = x__445__auto____8689.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8691))
{return cljs.core.not.call(null,x__445__auto____8689.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8691;
}
} else
{return and__3546__auto____8690;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8689);
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
var disj__8702 = (function (coll){
return coll;
});
var disj__8703 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8704 = (function() { 
var G__8706__delegate = function (coll,k,ks){
while(true){
var ret__8701 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8707 = ret__8701;
var G__8708 = cljs.core.first.call(null,ks);
var G__8709 = cljs.core.next.call(null,ks);
coll = G__8707;
k = G__8708;
ks = G__8709;
continue;
}
} else
{return ret__8701;
}
break;
}
};
var G__8706 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8706__delegate.call(this, coll, k, ks);
};
G__8706.cljs$lang$maxFixedArity = 2;
G__8706.cljs$lang$applyTo = (function (arglist__8712){
var coll = cljs.core.first(arglist__8712);
var k = cljs.core.first(cljs.core.next(arglist__8712));
var ks = cljs.core.rest(cljs.core.next(arglist__8712));
return G__8706__delegate.call(this, coll, k, ks);
});
return G__8706;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8702.call(this,coll);
case  2 :
return disj__8703.call(this,coll,k);
default:
return disj__8704.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8704.cljs$lang$applyTo;
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
{var x__445__auto____8718 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8719 = x__445__auto____8718;

if(cljs.core.truth_(and__3546__auto____8719))
{var and__3546__auto____8720 = x__445__auto____8718.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8720))
{return cljs.core.not.call(null,x__445__auto____8718.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8720;
}
} else
{return and__3546__auto____8719;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8718);
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
{var x__445__auto____8724 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8725 = x__445__auto____8724;

if(cljs.core.truth_(and__3546__auto____8725))
{var and__3546__auto____8726 = x__445__auto____8724.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8726))
{return cljs.core.not.call(null,x__445__auto____8724.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8726;
}
} else
{return and__3546__auto____8725;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8724);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8728 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8729 = x__445__auto____8728;

if(cljs.core.truth_(and__3546__auto____8729))
{var and__3546__auto____8730 = x__445__auto____8728.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8730))
{return cljs.core.not.call(null,x__445__auto____8728.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8730;
}
} else
{return and__3546__auto____8729;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8728);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8731 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8736 = x__445__auto____8731;

if(cljs.core.truth_(and__3546__auto____8736))
{var and__3546__auto____8737 = x__445__auto____8731.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8737))
{return cljs.core.not.call(null,x__445__auto____8731.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8737;
}
} else
{return and__3546__auto____8736;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8731);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8882 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8883 = x__445__auto____8882;

if(cljs.core.truth_(and__3546__auto____8883))
{var and__3546__auto____8884 = x__445__auto____8882.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8884))
{return cljs.core.not.call(null,x__445__auto____8882.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8884;
}
} else
{return and__3546__auto____8883;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8882);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8892 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8893 = x__445__auto____8892;

if(cljs.core.truth_(and__3546__auto____8893))
{var and__3546__auto____8894 = x__445__auto____8892.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8894))
{return cljs.core.not.call(null,x__445__auto____8892.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8894;
}
} else
{return and__3546__auto____8893;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8892);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8905 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8906 = x__445__auto____8905;

if(cljs.core.truth_(and__3546__auto____8906))
{var and__3546__auto____8907 = x__445__auto____8905.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8907))
{return cljs.core.not.call(null,x__445__auto____8905.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8907;
}
} else
{return and__3546__auto____8906;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8905);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8914 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8914.push(key);
}));
return keys__8914;
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
{var x__445__auto____8922 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8923 = x__445__auto____8922;

if(cljs.core.truth_(and__3546__auto____8923))
{var and__3546__auto____8924 = x__445__auto____8922.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8924))
{return cljs.core.not.call(null,x__445__auto____8922.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8924;
}
} else
{return and__3546__auto____8923;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8922);
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
var and__3546__auto____8971 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8971))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8972 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8972))
{return or__3548__auto____8972;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8971;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8980 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8980))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8980;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8982 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8982))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8982;
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
var and__3546__auto____8993 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8993))
{return (n == n.toFixed());
} else
{return and__3546__auto____8993;
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
if(cljs.core.truth_((function (){var and__3546__auto____9002 = coll;

if(cljs.core.truth_(and__3546__auto____9002))
{var and__3546__auto____9005 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9005))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9005;
}
} else
{return and__3546__auto____9002;
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
var distinct_QMARK___9024 = (function (x){
return true;
});
var distinct_QMARK___9025 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9026 = (function() { 
var G__9029__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9013 = cljs.core.set([y,x]);
var xs__9014 = more;

while(true){
var x__9016 = cljs.core.first.call(null,xs__9014);
var etc__9018 = cljs.core.next.call(null,xs__9014);

if(cljs.core.truth_(xs__9014))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9013,x__9016)))
{return false;
} else
{{
var G__9031 = cljs.core.conj.call(null,s__9013,x__9016);
var G__9033 = etc__9018;
s__9013 = G__9031;
xs__9014 = G__9033;
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
var G__9029 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9029__delegate.call(this, x, y, more);
};
G__9029.cljs$lang$maxFixedArity = 2;
G__9029.cljs$lang$applyTo = (function (arglist__9035){
var x = cljs.core.first(arglist__9035);
var y = cljs.core.first(cljs.core.next(arglist__9035));
var more = cljs.core.rest(cljs.core.next(arglist__9035));
return G__9029__delegate.call(this, x, y, more);
});
return G__9029;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9024.call(this,x);
case  2 :
return distinct_QMARK___9025.call(this,x,y);
default:
return distinct_QMARK___9026.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9026.cljs$lang$applyTo;
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
var r__9037 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9037)))
{return r__9037;
} else
{if(cljs.core.truth_(r__9037))
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
var sort__9042 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9045 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9040 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9040,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9040);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9042.call(this,comp);
case  2 :
return sort__9045.call(this,comp,coll);
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
var sort_by__9060 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9062 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9060.call(this,keyfn,comp);
case  3 :
return sort_by__9062.call(this,keyfn,comp,coll);
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
var reduce__9081 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9082 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9081.call(this,f,val);
case  3 :
return reduce__9082.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9094 = (function (f,coll){
var temp__3695__auto____9090 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9090))
{var s__9091 = temp__3695__auto____9090;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9091),cljs.core.next.call(null,s__9091));
} else
{return f.call(null);
}
});
var seq_reduce__9096 = (function (f,val,coll){
var val__9092 = val;
var coll__9093 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9093))
{{
var G__9108 = f.call(null,val__9092,cljs.core.first.call(null,coll__9093));
var G__9109 = cljs.core.next.call(null,coll__9093);
val__9092 = G__9108;
coll__9093 = G__9109;
continue;
}
} else
{return val__9092;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9094.call(this,f,val);
case  3 :
return seq_reduce__9096.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9115 = null;
var G__9115__9117 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9115__9119 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9115 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9115__9117.call(this,coll,f);
case  3 :
return G__9115__9119.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9115;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9135 = (function (){
return 0;
});
var _PLUS___9136 = (function (x){
return x;
});
var _PLUS___9137 = (function (x,y){
return (x + y);
});
var _PLUS___9138 = (function() { 
var G__9144__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9144 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9144__delegate.call(this, x, y, more);
};
G__9144.cljs$lang$maxFixedArity = 2;
G__9144.cljs$lang$applyTo = (function (arglist__9146){
var x = cljs.core.first(arglist__9146);
var y = cljs.core.first(cljs.core.next(arglist__9146));
var more = cljs.core.rest(cljs.core.next(arglist__9146));
return G__9144__delegate.call(this, x, y, more);
});
return G__9144;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9135.call(this);
case  1 :
return _PLUS___9136.call(this,x);
case  2 :
return _PLUS___9137.call(this,x,y);
default:
return _PLUS___9138.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9138.cljs$lang$applyTo;
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
var ___9155 = (function (x){
return (- x);
});
var ___9157 = (function (x,y){
return (x - y);
});
var ___9159 = (function() { 
var G__9163__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9163 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9163__delegate.call(this, x, y, more);
};
G__9163.cljs$lang$maxFixedArity = 2;
G__9163.cljs$lang$applyTo = (function (arglist__9165){
var x = cljs.core.first(arglist__9165);
var y = cljs.core.first(cljs.core.next(arglist__9165));
var more = cljs.core.rest(cljs.core.next(arglist__9165));
return G__9163__delegate.call(this, x, y, more);
});
return G__9163;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9155.call(this,x);
case  2 :
return ___9157.call(this,x,y);
default:
return ___9159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9159.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9173 = (function (){
return 1;
});
var _STAR___9174 = (function (x){
return x;
});
var _STAR___9175 = (function (x,y){
return (x * y);
});
var _STAR___9176 = (function() { 
var G__9179__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9179 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9179__delegate.call(this, x, y, more);
};
G__9179.cljs$lang$maxFixedArity = 2;
G__9179.cljs$lang$applyTo = (function (arglist__9181){
var x = cljs.core.first(arglist__9181);
var y = cljs.core.first(cljs.core.next(arglist__9181));
var more = cljs.core.rest(cljs.core.next(arglist__9181));
return G__9179__delegate.call(this, x, y, more);
});
return G__9179;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9173.call(this);
case  1 :
return _STAR___9174.call(this,x);
case  2 :
return _STAR___9175.call(this,x,y);
default:
return _STAR___9176.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9176.cljs$lang$applyTo;
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
var _SLASH___9185 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9187 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9189 = (function() { 
var G__9191__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9191 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9191__delegate.call(this, x, y, more);
};
G__9191.cljs$lang$maxFixedArity = 2;
G__9191.cljs$lang$applyTo = (function (arglist__9192){
var x = cljs.core.first(arglist__9192);
var y = cljs.core.first(cljs.core.next(arglist__9192));
var more = cljs.core.rest(cljs.core.next(arglist__9192));
return G__9191__delegate.call(this, x, y, more);
});
return G__9191;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9185.call(this,x);
case  2 :
return _SLASH___9187.call(this,x,y);
default:
return _SLASH___9189.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9189.cljs$lang$applyTo;
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
var _LT___9198 = (function (x){
return true;
});
var _LT___9199 = (function (x,y){
return (x < y);
});
var _LT___9200 = (function() { 
var G__9202__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9203 = y;
var G__9204 = cljs.core.first.call(null,more);
var G__9205 = cljs.core.next.call(null,more);
x = G__9203;
y = G__9204;
more = G__9205;
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
var G__9202 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9202__delegate.call(this, x, y, more);
};
G__9202.cljs$lang$maxFixedArity = 2;
G__9202.cljs$lang$applyTo = (function (arglist__9206){
var x = cljs.core.first(arglist__9206);
var y = cljs.core.first(cljs.core.next(arglist__9206));
var more = cljs.core.rest(cljs.core.next(arglist__9206));
return G__9202__delegate.call(this, x, y, more);
});
return G__9202;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9198.call(this,x);
case  2 :
return _LT___9199.call(this,x,y);
default:
return _LT___9200.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9200.cljs$lang$applyTo;
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
var _LT__EQ___9210 = (function (x){
return true;
});
var _LT__EQ___9211 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9213 = (function() { 
var G__9216__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9217 = y;
var G__9218 = cljs.core.first.call(null,more);
var G__9219 = cljs.core.next.call(null,more);
x = G__9217;
y = G__9218;
more = G__9219;
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
var G__9216 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9216__delegate.call(this, x, y, more);
};
G__9216.cljs$lang$maxFixedArity = 2;
G__9216.cljs$lang$applyTo = (function (arglist__9225){
var x = cljs.core.first(arglist__9225);
var y = cljs.core.first(cljs.core.next(arglist__9225));
var more = cljs.core.rest(cljs.core.next(arglist__9225));
return G__9216__delegate.call(this, x, y, more);
});
return G__9216;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9210.call(this,x);
case  2 :
return _LT__EQ___9211.call(this,x,y);
default:
return _LT__EQ___9213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9213.cljs$lang$applyTo;
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
var _GT___9237 = (function (x){
return true;
});
var _GT___9238 = (function (x,y){
return (x > y);
});
var _GT___9239 = (function() { 
var G__9243__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
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
{return (y > cljs.core.first.call(null,more));
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
G__9243.cljs$lang$applyTo = (function (arglist__9253){
var x = cljs.core.first(arglist__9253);
var y = cljs.core.first(cljs.core.next(arglist__9253));
var more = cljs.core.rest(cljs.core.next(arglist__9253));
return G__9243__delegate.call(this, x, y, more);
});
return G__9243;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9237.call(this,x);
case  2 :
return _GT___9238.call(this,x,y);
default:
return _GT___9239.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9239.cljs$lang$applyTo;
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
var _GT__EQ___9256 = (function (x){
return true;
});
var _GT__EQ___9257 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9258 = (function() { 
var G__9260__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9266 = y;
var G__9267 = cljs.core.first.call(null,more);
var G__9268 = cljs.core.next.call(null,more);
x = G__9266;
y = G__9267;
more = G__9268;
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
var G__9260 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9260__delegate.call(this, x, y, more);
};
G__9260.cljs$lang$maxFixedArity = 2;
G__9260.cljs$lang$applyTo = (function (arglist__9270){
var x = cljs.core.first(arglist__9270);
var y = cljs.core.first(cljs.core.next(arglist__9270));
var more = cljs.core.rest(cljs.core.next(arglist__9270));
return G__9260__delegate.call(this, x, y, more);
});
return G__9260;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9256.call(this,x);
case  2 :
return _GT__EQ___9257.call(this,x,y);
default:
return _GT__EQ___9258.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9258.cljs$lang$applyTo;
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
var max__9278 = (function (x){
return x;
});
var max__9280 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9281 = (function() { 
var G__9284__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9284 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9284__delegate.call(this, x, y, more);
};
G__9284.cljs$lang$maxFixedArity = 2;
G__9284.cljs$lang$applyTo = (function (arglist__9287){
var x = cljs.core.first(arglist__9287);
var y = cljs.core.first(cljs.core.next(arglist__9287));
var more = cljs.core.rest(cljs.core.next(arglist__9287));
return G__9284__delegate.call(this, x, y, more);
});
return G__9284;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9278.call(this,x);
case  2 :
return max__9280.call(this,x,y);
default:
return max__9281.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9281.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9353 = (function (x){
return x;
});
var min__9354 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9355 = (function() { 
var G__9357__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9357 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9357__delegate.call(this, x, y, more);
};
G__9357.cljs$lang$maxFixedArity = 2;
G__9357.cljs$lang$applyTo = (function (arglist__9358){
var x = cljs.core.first(arglist__9358);
var y = cljs.core.first(cljs.core.next(arglist__9358));
var more = cljs.core.rest(cljs.core.next(arglist__9358));
return G__9357__delegate.call(this, x, y, more);
});
return G__9357;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9353.call(this,x);
case  2 :
return min__9354.call(this,x,y);
default:
return min__9355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9355.cljs$lang$applyTo;
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
var rem__9368 = (n % d);

return cljs.core.fix.call(null,((n - rem__9368) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9374 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9374));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9377 = (function (){
return Math.random.call(null);
});
var rand__9378 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9377.call(this);
case  1 :
return rand__9378.call(this,n);
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
var _EQ__EQ___9542 = (function (x){
return true;
});
var _EQ__EQ___9543 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9544 = (function() { 
var G__9547__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9549 = y;
var G__9550 = cljs.core.first.call(null,more);
var G__9551 = cljs.core.next.call(null,more);
x = G__9549;
y = G__9550;
more = G__9551;
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
var G__9547 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9547__delegate.call(this, x, y, more);
};
G__9547.cljs$lang$maxFixedArity = 2;
G__9547.cljs$lang$applyTo = (function (arglist__9552){
var x = cljs.core.first(arglist__9552);
var y = cljs.core.first(cljs.core.next(arglist__9552));
var more = cljs.core.rest(cljs.core.next(arglist__9552));
return G__9547__delegate.call(this, x, y, more);
});
return G__9547;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9542.call(this,x);
case  2 :
return _EQ__EQ___9543.call(this,x,y);
default:
return _EQ__EQ___9544.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9544.cljs$lang$applyTo;
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
var n__9555 = n;
var xs__9556 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9573 = xs__9556;

if(cljs.core.truth_(and__3546__auto____9573))
{return (n__9555 > 0);
} else
{return and__3546__auto____9573;
}
})()))
{{
var G__9575 = (n__9555 - 1);
var G__9576 = cljs.core.next.call(null,xs__9556);
n__9555 = G__9575;
xs__9556 = G__9576;
continue;
}
} else
{return xs__9556;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9589 = null;
var G__9589__9590 = (function (coll,n){
var temp__3695__auto____9581 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9581))
{var xs__9582 = temp__3695__auto____9581;

return cljs.core.first.call(null,xs__9582);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9589__9591 = (function (coll,n,not_found){
var temp__3695__auto____9583 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9583))
{var xs__9588 = temp__3695__auto____9583;

return cljs.core.first.call(null,xs__9588);
} else
{return not_found;
}
});
G__9589 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9589__9590.call(this,coll,n);
case  3 :
return G__9589__9591.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9589;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9593 = (function (){
return "";
});
var str_STAR___9595 = (function (x){
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
var str_STAR___9597 = (function() { 
var G__9602__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9605 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9606 = cljs.core.next.call(null,more);
sb = G__9605;
more = G__9606;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9602 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9602__delegate.call(this, x, ys);
};
G__9602.cljs$lang$maxFixedArity = 1;
G__9602.cljs$lang$applyTo = (function (arglist__9608){
var x = cljs.core.first(arglist__9608);
var ys = cljs.core.rest(arglist__9608);
return G__9602__delegate.call(this, x, ys);
});
return G__9602;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9593.call(this);
case  1 :
return str_STAR___9595.call(this,x);
default:
return str_STAR___9597.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9597.cljs$lang$applyTo;
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
var str__9719 = (function (){
return "";
});
var str__9721 = (function (x){
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
var str__9723 = (function() { 
var G__9725__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9725 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9725__delegate.call(this, x, ys);
};
G__9725.cljs$lang$maxFixedArity = 1;
G__9725.cljs$lang$applyTo = (function (arglist__9726){
var x = cljs.core.first(arglist__9726);
var ys = cljs.core.rest(arglist__9726);
return G__9725__delegate.call(this, x, ys);
});
return G__9725;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9719.call(this);
case  1 :
return str__9721.call(this,x);
default:
return str__9723.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9723.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9744 = (function (s,start){
return s.substring(start);
});
var subs__9745 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9744.call(this,s,start);
case  3 :
return subs__9745.call(this,s,start,end);
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
var symbol__9750 = (function (name){
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
var symbol__9751 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9750.call(this,ns);
case  2 :
return symbol__9751.call(this,ns,name);
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
var keyword__9758 = (function (name){
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
var keyword__9759 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9758.call(this,ns);
case  2 :
return keyword__9759.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9776 = cljs.core.seq.call(null,x);
var ys__9777 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9776)))
{return cljs.core.nil_QMARK_.call(null,ys__9777);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9777)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9776),cljs.core.first.call(null,ys__9777))))
{{
var G__9778 = cljs.core.next.call(null,xs__9776);
var G__9779 = cljs.core.next.call(null,ys__9777);
xs__9776 = G__9778;
ys__9777 = G__9779;
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
return cljs.core.reduce.call(null,(function (p1__9780_SHARP_,p2__9781_SHARP_){
return cljs.core.hash_combine.call(null,p1__9780_SHARP_,cljs.core.hash.call(null,p2__9781_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9782__9793 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9782__9793))
{var G__9798__9804 = cljs.core.first.call(null,G__9782__9793);
var vec__9801__9806 = G__9798__9804;
var key_name__9808 = cljs.core.nth.call(null,vec__9801__9806,0,null);
var f__9811 = cljs.core.nth.call(null,vec__9801__9806,1,null);
var G__9782__9813 = G__9782__9793;

var G__9798__9816 = G__9798__9804;
var G__9782__9817 = G__9782__9813;

while(true){
var vec__9819__9822 = G__9798__9816;
var key_name__9824 = cljs.core.nth.call(null,vec__9819__9822,0,null);
var f__9825 = cljs.core.nth.call(null,vec__9819__9822,1,null);
var G__9782__9827 = G__9782__9817;

var str_name__9830 = cljs.core.name.call(null,key_name__9824);

obj[str_name__9830] = f__9825;
var temp__3698__auto____9835 = cljs.core.next.call(null,G__9782__9827);

if(cljs.core.truth_(temp__3698__auto____9835))
{var G__9782__9838 = temp__3698__auto____9835;

{
var G__9853 = cljs.core.first.call(null,G__9782__9838);
var G__9854 = G__9782__9838;
G__9798__9816 = G__9853;
G__9782__9817 = G__9854;
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
var this__9859 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9863 = this;
return (new cljs.core.List(this__9863.meta,o,coll,(this__9863.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9869 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9873 = this;
return this__9873.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9878 = this;
return this__9878.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9881 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9884 = this;
return this__9884.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9887 = this;
return this__9887.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9890 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9893 = this;
return (new cljs.core.List(meta,this__9893.first,this__9893.rest,this__9893.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9897 = this;
return this__9897.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9899 = this;
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
var this__9996 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9997 = this;
return (new cljs.core.List(this__9997.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9998 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9999 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10000 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10001 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10003 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10005 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10006 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10013 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10015 = this;
return this__10015.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10017 = this;
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
list.cljs$lang$applyTo = (function (arglist__10033){
var items = cljs.core.seq( arglist__10033 );;
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
var this__10034 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10035 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10036 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10037 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10037.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10038 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10039 = this;
return this__10039.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10040 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10040.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10040.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10042 = this;
return this__10042.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10076 = this;
return (new cljs.core.Cons(meta,this__10076.first,this__10076.rest));
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
var G__10087 = null;
var G__10087__10088 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10087__10089 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10087 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10087__10088.call(this,string,f);
case  3 :
return G__10087__10089.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10087;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10091 = null;
var G__10091__10092 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10091__10093 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10091 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10091__10092.call(this,string,k);
case  3 :
return G__10091__10093.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10091;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10095 = null;
var G__10095__10096 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10095__10097 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10095 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10095__10096.call(this,string,n);
case  3 :
return G__10095__10097.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10095;
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
var G__10099 = null;
var G__10099__10100 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10099__10101 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10099 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10099__10100.call(this,this$,coll);
case  3 :
return G__10099__10101.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10099;
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
var x__10103 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10103;
} else
{lazy_seq.x = x__10103.call(null);
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
var this__10155 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10160 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10161 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10162 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10162.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10163 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10164 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10166 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10169 = this;
return this__10169.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10170 = this;
return (new cljs.core.LazySeq(meta,this__10170.realized,this__10170.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10178 = cljs.core.array.call(null);

var s__10179 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10179)))
{ary__10178.push(cljs.core.first.call(null,s__10179));
{
var G__10184 = cljs.core.next.call(null,s__10179);
s__10179 = G__10184;
continue;
}
} else
{return ary__10178;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10186 = s;
var i__10187 = n;
var sum__10188 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10189 = (i__10187 > 0);

if(cljs.core.truth_(and__3546__auto____10189))
{return cljs.core.seq.call(null,s__10186);
} else
{return and__3546__auto____10189;
}
})()))
{{
var G__10190 = cljs.core.next.call(null,s__10186);
var G__10191 = (i__10187 - 1);
var G__10192 = (sum__10188 + 1);
s__10186 = G__10190;
i__10187 = G__10191;
sum__10188 = G__10192;
continue;
}
} else
{return sum__10188;
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
var concat__10212 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10213 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10214 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10203 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10203))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10203),concat.call(null,cljs.core.rest.call(null,s__10203),y));
} else
{return y;
}
})));
});
var concat__10215 = (function() { 
var G__10221__delegate = function (x,y,zs){
var cat__10208 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10206 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10206))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10206),cat.call(null,cljs.core.rest.call(null,xys__10206),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10208.call(null,concat.call(null,x,y),zs);
};
var G__10221 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10221__delegate.call(this, x, y, zs);
};
G__10221.cljs$lang$maxFixedArity = 2;
G__10221.cljs$lang$applyTo = (function (arglist__10224){
var x = cljs.core.first(arglist__10224);
var y = cljs.core.first(cljs.core.next(arglist__10224));
var zs = cljs.core.rest(cljs.core.next(arglist__10224));
return G__10221__delegate.call(this, x, y, zs);
});
return G__10221;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10212.call(this);
case  1 :
return concat__10213.call(this,x);
case  2 :
return concat__10214.call(this,x,y);
default:
return concat__10215.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10215.cljs$lang$applyTo;
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
var list_STAR___10235 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10236 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10237 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10239 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10240 = (function() { 
var G__10303__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10303 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10303__delegate.call(this, a, b, c, d, more);
};
G__10303.cljs$lang$maxFixedArity = 4;
G__10303.cljs$lang$applyTo = (function (arglist__10304){
var a = cljs.core.first(arglist__10304);
var b = cljs.core.first(cljs.core.next(arglist__10304));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10304)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10304))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10304))));
return G__10303__delegate.call(this, a, b, c, d, more);
});
return G__10303;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10235.call(this,a);
case  2 :
return list_STAR___10236.call(this,a,b);
case  3 :
return list_STAR___10237.call(this,a,b,c);
case  4 :
return list_STAR___10239.call(this,a,b,c,d);
default:
return list_STAR___10240.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10240.cljs$lang$applyTo;
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
var apply__10343 = (function (f,args){
var fixed_arity__10319 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10319 + 1)) <= fixed_arity__10319)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10344 = (function (f,x,args){
var arglist__10322 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10323 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10322,fixed_arity__10323) <= fixed_arity__10323)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10322));
} else
{return f.cljs$lang$applyTo(arglist__10322);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10322));
}
});
var apply__10345 = (function (f,x,y,args){
var arglist__10327 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10329 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10327,fixed_arity__10329) <= fixed_arity__10329)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10327));
} else
{return f.cljs$lang$applyTo(arglist__10327);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10327));
}
});
var apply__10346 = (function (f,x,y,z,args){
var arglist__10334 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10336 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10334,fixed_arity__10336) <= fixed_arity__10336)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10334));
} else
{return f.cljs$lang$applyTo(arglist__10334);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10334));
}
});
var apply__10347 = (function() { 
var G__10362__delegate = function (f,a,b,c,d,args){
var arglist__10339 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10340 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10339,fixed_arity__10340) <= fixed_arity__10340)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10339));
} else
{return f.cljs$lang$applyTo(arglist__10339);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10339));
}
};
var G__10362 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10362__delegate.call(this, f, a, b, c, d, args);
};
G__10362.cljs$lang$maxFixedArity = 5;
G__10362.cljs$lang$applyTo = (function (arglist__10370){
var f = cljs.core.first(arglist__10370);
var a = cljs.core.first(cljs.core.next(arglist__10370));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10370)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10370))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10370)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10370)))));
return G__10362__delegate.call(this, f, a, b, c, d, args);
});
return G__10362;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10343.call(this,f,a);
case  3 :
return apply__10344.call(this,f,a,b);
case  4 :
return apply__10345.call(this,f,a,b,c);
case  5 :
return apply__10346.call(this,f,a,b,c,d);
default:
return apply__10347.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10347.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10372){
var obj = cljs.core.first(arglist__10372);
var f = cljs.core.first(cljs.core.next(arglist__10372));
var args = cljs.core.rest(cljs.core.next(arglist__10372));
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
var not_EQ___10374 = (function (x){
return false;
});
var not_EQ___10376 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10377 = (function() { 
var G__10385__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10385 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10385__delegate.call(this, x, y, more);
};
G__10385.cljs$lang$maxFixedArity = 2;
G__10385.cljs$lang$applyTo = (function (arglist__10386){
var x = cljs.core.first(arglist__10386);
var y = cljs.core.first(cljs.core.next(arglist__10386));
var more = cljs.core.rest(cljs.core.next(arglist__10386));
return G__10385__delegate.call(this, x, y, more);
});
return G__10385;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10374.call(this,x);
case  2 :
return not_EQ___10376.call(this,x,y);
default:
return not_EQ___10377.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10377.cljs$lang$applyTo;
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
var G__10434 = pred;
var G__10435 = cljs.core.next.call(null,coll);
pred = G__10434;
coll = G__10435;
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
{var or__3548__auto____10457 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10457))
{return or__3548__auto____10457;
} else
{{
var G__10458 = pred;
var G__10459 = cljs.core.next.call(null,coll);
pred = G__10458;
coll = G__10459;
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
var G__10476 = null;
var G__10476__10477 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10476__10478 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10476__10479 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10476__10480 = (function() { 
var G__10483__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10483 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10483__delegate.call(this, x, y, zs);
};
G__10483.cljs$lang$maxFixedArity = 2;
G__10483.cljs$lang$applyTo = (function (arglist__10488){
var x = cljs.core.first(arglist__10488);
var y = cljs.core.first(cljs.core.next(arglist__10488));
var zs = cljs.core.rest(cljs.core.next(arglist__10488));
return G__10483__delegate.call(this, x, y, zs);
});
return G__10483;
})()
;
G__10476 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10476__10477.call(this);
case  1 :
return G__10476__10478.call(this,x);
case  2 :
return G__10476__10479.call(this,x,y);
default:
return G__10476__10480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10476.cljs$lang$maxFixedArity = 2;
G__10476.cljs$lang$applyTo = G__10476__10480.cljs$lang$applyTo;
return G__10476;
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
G__10493.cljs$lang$applyTo = (function (arglist__10494){
var args = cljs.core.seq( arglist__10494 );;
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
var comp__10513 = (function (){
return cljs.core.identity;
});
var comp__10514 = (function (f){
return f;
});
var comp__10515 = (function (f,g){
return (function() {
var G__10521 = null;
var G__10521__10522 = (function (){
return f.call(null,g.call(null));
});
var G__10521__10523 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10521__10524 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10521__10525 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10521__10527 = (function() { 
var G__10534__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10534 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10534__delegate.call(this, x, y, z, args);
};
G__10534.cljs$lang$maxFixedArity = 3;
G__10534.cljs$lang$applyTo = (function (arglist__10535){
var x = cljs.core.first(arglist__10535);
var y = cljs.core.first(cljs.core.next(arglist__10535));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10535)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10535)));
return G__10534__delegate.call(this, x, y, z, args);
});
return G__10534;
})()
;
G__10521 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10521__10522.call(this);
case  1 :
return G__10521__10523.call(this,x);
case  2 :
return G__10521__10524.call(this,x,y);
case  3 :
return G__10521__10525.call(this,x,y,z);
default:
return G__10521__10527.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10521.cljs$lang$maxFixedArity = 3;
G__10521.cljs$lang$applyTo = G__10521__10527.cljs$lang$applyTo;
return G__10521;
})()
});
var comp__10516 = (function (f,g,h){
return (function() {
var G__10538 = null;
var G__10538__10539 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10538__10540 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10538__10541 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10538__10542 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10538__10543 = (function() { 
var G__10546__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10546 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10546__delegate.call(this, x, y, z, args);
};
G__10546.cljs$lang$maxFixedArity = 3;
G__10546.cljs$lang$applyTo = (function (arglist__10547){
var x = cljs.core.first(arglist__10547);
var y = cljs.core.first(cljs.core.next(arglist__10547));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10547)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10547)));
return G__10546__delegate.call(this, x, y, z, args);
});
return G__10546;
})()
;
G__10538 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10538__10539.call(this);
case  1 :
return G__10538__10540.call(this,x);
case  2 :
return G__10538__10541.call(this,x,y);
case  3 :
return G__10538__10542.call(this,x,y,z);
default:
return G__10538__10543.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10538.cljs$lang$maxFixedArity = 3;
G__10538.cljs$lang$applyTo = G__10538__10543.cljs$lang$applyTo;
return G__10538;
})()
});
var comp__10517 = (function() { 
var G__10550__delegate = function (f1,f2,f3,fs){
var fs__10503 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10551__delegate = function (args){
var ret__10504 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10503),args);
var fs__10505 = cljs.core.next.call(null,fs__10503);

while(true){
if(cljs.core.truth_(fs__10505))
{{
var G__10552 = cljs.core.first.call(null,fs__10505).call(null,ret__10504);
var G__10553 = cljs.core.next.call(null,fs__10505);
ret__10504 = G__10552;
fs__10505 = G__10553;
continue;
}
} else
{return ret__10504;
}
break;
}
};
var G__10551 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10551__delegate.call(this, args);
};
G__10551.cljs$lang$maxFixedArity = 0;
G__10551.cljs$lang$applyTo = (function (arglist__10554){
var args = cljs.core.seq( arglist__10554 );;
return G__10551__delegate.call(this, args);
});
return G__10551;
})()
;
};
var G__10550 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10550__delegate.call(this, f1, f2, f3, fs);
};
G__10550.cljs$lang$maxFixedArity = 3;
G__10550.cljs$lang$applyTo = (function (arglist__10555){
var f1 = cljs.core.first(arglist__10555);
var f2 = cljs.core.first(cljs.core.next(arglist__10555));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10555)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10555)));
return G__10550__delegate.call(this, f1, f2, f3, fs);
});
return G__10550;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10513.call(this);
case  1 :
return comp__10514.call(this,f1);
case  2 :
return comp__10515.call(this,f1,f2);
case  3 :
return comp__10516.call(this,f1,f2,f3);
default:
return comp__10517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10517.cljs$lang$applyTo;
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
var partial__10606 = (function (f,arg1){
return (function() { 
var G__10612__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10612 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10612__delegate.call(this, args);
};
G__10612.cljs$lang$maxFixedArity = 0;
G__10612.cljs$lang$applyTo = (function (arglist__10614){
var args = cljs.core.seq( arglist__10614 );;
return G__10612__delegate.call(this, args);
});
return G__10612;
})()
;
});
var partial__10607 = (function (f,arg1,arg2){
return (function() { 
var G__10616__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10616 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10616__delegate.call(this, args);
};
G__10616.cljs$lang$maxFixedArity = 0;
G__10616.cljs$lang$applyTo = (function (arglist__10617){
var args = cljs.core.seq( arglist__10617 );;
return G__10616__delegate.call(this, args);
});
return G__10616;
})()
;
});
var partial__10608 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10618__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10618 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10618__delegate.call(this, args);
};
G__10618.cljs$lang$maxFixedArity = 0;
G__10618.cljs$lang$applyTo = (function (arglist__10621){
var args = cljs.core.seq( arglist__10621 );;
return G__10618__delegate.call(this, args);
});
return G__10618;
})()
;
});
var partial__10609 = (function() { 
var G__10626__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10627__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10627 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10627__delegate.call(this, args);
};
G__10627.cljs$lang$maxFixedArity = 0;
G__10627.cljs$lang$applyTo = (function (arglist__10632){
var args = cljs.core.seq( arglist__10632 );;
return G__10627__delegate.call(this, args);
});
return G__10627;
})()
;
};
var G__10626 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10626__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10626.cljs$lang$maxFixedArity = 4;
G__10626.cljs$lang$applyTo = (function (arglist__10636){
var f = cljs.core.first(arglist__10636);
var arg1 = cljs.core.first(cljs.core.next(arglist__10636));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10636)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10636))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10636))));
return G__10626__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10626;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10606.call(this,f,arg1);
case  3 :
return partial__10607.call(this,f,arg1,arg2);
case  4 :
return partial__10608.call(this,f,arg1,arg2,arg3);
default:
return partial__10609.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10609.cljs$lang$applyTo;
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
var fnil__10845 = (function (f,x){
return (function() {
var G__10854 = null;
var G__10854__10855 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10854__10856 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10854__10857 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10854__10859 = (function() { 
var G__10863__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10863 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10863__delegate.call(this, a, b, c, ds);
};
G__10863.cljs$lang$maxFixedArity = 3;
G__10863.cljs$lang$applyTo = (function (arglist__10864){
var a = cljs.core.first(arglist__10864);
var b = cljs.core.first(cljs.core.next(arglist__10864));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10864)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10864)));
return G__10863__delegate.call(this, a, b, c, ds);
});
return G__10863;
})()
;
G__10854 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10854__10855.call(this,a);
case  2 :
return G__10854__10856.call(this,a,b);
case  3 :
return G__10854__10857.call(this,a,b,c);
default:
return G__10854__10859.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10854.cljs$lang$maxFixedArity = 3;
G__10854.cljs$lang$applyTo = G__10854__10859.cljs$lang$applyTo;
return G__10854;
})()
});
var fnil__10848 = (function (f,x,y){
return (function() {
var G__10869 = null;
var G__10869__10871 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10869__10873 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10869__10874 = (function() { 
var G__10881__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10881 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10881__delegate.call(this, a, b, c, ds);
};
G__10881.cljs$lang$maxFixedArity = 3;
G__10881.cljs$lang$applyTo = (function (arglist__10883){
var a = cljs.core.first(arglist__10883);
var b = cljs.core.first(cljs.core.next(arglist__10883));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10883)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10883)));
return G__10881__delegate.call(this, a, b, c, ds);
});
return G__10881;
})()
;
G__10869 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10869__10871.call(this,a,b);
case  3 :
return G__10869__10873.call(this,a,b,c);
default:
return G__10869__10874.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10869.cljs$lang$maxFixedArity = 3;
G__10869.cljs$lang$applyTo = G__10869__10874.cljs$lang$applyTo;
return G__10869;
})()
});
var fnil__10850 = (function (f,x,y,z){
return (function() {
var G__10885 = null;
var G__10885__10886 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10885__10887 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10885__10888 = (function() { 
var G__10897__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10897 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10897__delegate.call(this, a, b, c, ds);
};
G__10897.cljs$lang$maxFixedArity = 3;
G__10897.cljs$lang$applyTo = (function (arglist__10901){
var a = cljs.core.first(arglist__10901);
var b = cljs.core.first(cljs.core.next(arglist__10901));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10901)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10901)));
return G__10897__delegate.call(this, a, b, c, ds);
});
return G__10897;
})()
;
G__10885 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10885__10886.call(this,a,b);
case  3 :
return G__10885__10887.call(this,a,b,c);
default:
return G__10885__10888.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10885.cljs$lang$maxFixedArity = 3;
G__10885.cljs$lang$applyTo = G__10885__10888.cljs$lang$applyTo;
return G__10885;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10845.call(this,f,x);
case  3 :
return fnil__10848.call(this,f,x,y);
case  4 :
return fnil__10850.call(this,f,x,y,z);
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
var mapi__10918 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10915 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10915))
{var s__10916 = temp__3698__auto____10915;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10916)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10916)));
} else
{return null;
}
})));
});

return mapi__10918.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10938 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10938))
{var s__10940 = temp__3698__auto____10938;

var x__10944 = f.call(null,cljs.core.first.call(null,s__10940));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10944)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10940));
} else
{return cljs.core.cons.call(null,x__10944,keep.call(null,f,cljs.core.rest.call(null,s__10940)));
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
var keepi__10987 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10978 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10978))
{var s__10980 = temp__3698__auto____10978;

var x__10982 = f.call(null,idx,cljs.core.first.call(null,s__10980));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10982)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10980));
} else
{return cljs.core.cons.call(null,x__10982,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10980)));
}
} else
{return null;
}
})));
});

return keepi__10987.call(null,0,coll);
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
var every_pred__11157 = (function (p){
return (function() {
var ep1 = null;
var ep1__11164 = (function (){
return true;
});
var ep1__11165 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11166 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11041 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11041))
{return p.call(null,y);
} else
{return and__3546__auto____11041;
}
})());
});
var ep1__11167 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11046 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11046))
{var and__3546__auto____11048 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11048))
{return p.call(null,z);
} else
{return and__3546__auto____11048;
}
} else
{return and__3546__auto____11046;
}
})());
});
var ep1__11168 = (function() { 
var G__11177__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11052 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11052))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11052;
}
})());
};
var G__11177 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11177__delegate.call(this, x, y, z, args);
};
G__11177.cljs$lang$maxFixedArity = 3;
G__11177.cljs$lang$applyTo = (function (arglist__11238){
var x = cljs.core.first(arglist__11238);
var y = cljs.core.first(cljs.core.next(arglist__11238));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11238)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11238)));
return G__11177__delegate.call(this, x, y, z, args);
});
return G__11177;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11164.call(this);
case  1 :
return ep1__11165.call(this,x);
case  2 :
return ep1__11166.call(this,x,y);
case  3 :
return ep1__11167.call(this,x,y,z);
default:
return ep1__11168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11168.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11158 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11244 = (function (){
return true;
});
var ep2__11246 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11056 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11056))
{return p2.call(null,x);
} else
{return and__3546__auto____11056;
}
})());
});
var ep2__11249 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11065 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11065))
{var and__3546__auto____11067 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11067))
{var and__3546__auto____11068 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11068))
{return p2.call(null,y);
} else
{return and__3546__auto____11068;
}
} else
{return and__3546__auto____11067;
}
} else
{return and__3546__auto____11065;
}
})());
});
var ep2__11250 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11070 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11070))
{var and__3546__auto____11072 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11072))
{var and__3546__auto____11073 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11073))
{var and__3546__auto____11074 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11074))
{var and__3546__auto____11076 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11076))
{return p2.call(null,z);
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
{return and__3546__auto____11072;
}
} else
{return and__3546__auto____11070;
}
})());
});
var ep2__11251 = (function() { 
var G__11316__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11080 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11080))
{return cljs.core.every_QMARK_.call(null,(function (p1__10962_SHARP_){
var and__3546__auto____11083 = p1.call(null,p1__10962_SHARP_);

if(cljs.core.truth_(and__3546__auto____11083))
{return p2.call(null,p1__10962_SHARP_);
} else
{return and__3546__auto____11083;
}
}),args);
} else
{return and__3546__auto____11080;
}
})());
};
var G__11316 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11316__delegate.call(this, x, y, z, args);
};
G__11316.cljs$lang$maxFixedArity = 3;
G__11316.cljs$lang$applyTo = (function (arglist__11320){
var x = cljs.core.first(arglist__11320);
var y = cljs.core.first(cljs.core.next(arglist__11320));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11320)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11320)));
return G__11316__delegate.call(this, x, y, z, args);
});
return G__11316;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11244.call(this);
case  1 :
return ep2__11246.call(this,x);
case  2 :
return ep2__11249.call(this,x,y);
case  3 :
return ep2__11250.call(this,x,y,z);
default:
return ep2__11251.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11251.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11159 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11328 = (function (){
return true;
});
var ep3__11329 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11087 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11087))
{var and__3546__auto____11089 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11089))
{return p3.call(null,x);
} else
{return and__3546__auto____11089;
}
} else
{return and__3546__auto____11087;
}
})());
});
var ep3__11330 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11098 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11098))
{var and__3546__auto____11100 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11100))
{var and__3546__auto____11102 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11102))
{var and__3546__auto____11104 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11104))
{var and__3546__auto____11105 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11105))
{return p3.call(null,y);
} else
{return and__3546__auto____11105;
}
} else
{return and__3546__auto____11104;
}
} else
{return and__3546__auto____11102;
}
} else
{return and__3546__auto____11100;
}
} else
{return and__3546__auto____11098;
}
})());
});
var ep3__11331 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11107 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11107))
{var and__3546__auto____11108 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11108))
{var and__3546__auto____11110 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11110))
{var and__3546__auto____11112 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11112))
{var and__3546__auto____11113 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11113))
{var and__3546__auto____11115 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11115))
{var and__3546__auto____11117 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11117))
{var and__3546__auto____11119 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11119))
{return p3.call(null,z);
} else
{return and__3546__auto____11119;
}
} else
{return and__3546__auto____11117;
}
} else
{return and__3546__auto____11115;
}
} else
{return and__3546__auto____11113;
}
} else
{return and__3546__auto____11112;
}
} else
{return and__3546__auto____11110;
}
} else
{return and__3546__auto____11108;
}
} else
{return and__3546__auto____11107;
}
})());
});
var ep3__11332 = (function() { 
var G__11344__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11121 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11121))
{return cljs.core.every_QMARK_.call(null,(function (p1__10965_SHARP_){
var and__3546__auto____11123 = p1.call(null,p1__10965_SHARP_);

if(cljs.core.truth_(and__3546__auto____11123))
{var and__3546__auto____11127 = p2.call(null,p1__10965_SHARP_);

if(cljs.core.truth_(and__3546__auto____11127))
{return p3.call(null,p1__10965_SHARP_);
} else
{return and__3546__auto____11127;
}
} else
{return and__3546__auto____11123;
}
}),args);
} else
{return and__3546__auto____11121;
}
})());
};
var G__11344 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11344__delegate.call(this, x, y, z, args);
};
G__11344.cljs$lang$maxFixedArity = 3;
G__11344.cljs$lang$applyTo = (function (arglist__11352){
var x = cljs.core.first(arglist__11352);
var y = cljs.core.first(cljs.core.next(arglist__11352));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11352)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11352)));
return G__11344__delegate.call(this, x, y, z, args);
});
return G__11344;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11328.call(this);
case  1 :
return ep3__11329.call(this,x);
case  2 :
return ep3__11330.call(this,x,y);
case  3 :
return ep3__11331.call(this,x,y,z);
default:
return ep3__11332.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11332.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11160 = (function() { 
var G__11355__delegate = function (p1,p2,p3,ps){
var ps__11130 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11358 = (function (){
return true;
});
var epn__11359 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10966_SHARP_){
return p1__10966_SHARP_.call(null,x);
}),ps__11130);
});
var epn__11360 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10967_SHARP_){
var and__3546__auto____11135 = p1__10967_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11135))
{return p1__10967_SHARP_.call(null,y);
} else
{return and__3546__auto____11135;
}
}),ps__11130);
});
var epn__11361 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10968_SHARP_){
var and__3546__auto____11144 = p1__10968_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11144))
{var and__3546__auto____11152 = p1__10968_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11152))
{return p1__10968_SHARP_.call(null,z);
} else
{return and__3546__auto____11152;
}
} else
{return and__3546__auto____11144;
}
}),ps__11130);
});
var epn__11362 = (function() { 
var G__11379__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11154 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11154))
{return cljs.core.every_QMARK_.call(null,(function (p1__10971_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10971_SHARP_,args);
}),ps__11130);
} else
{return and__3546__auto____11154;
}
})());
};
var G__11379 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11379__delegate.call(this, x, y, z, args);
};
G__11379.cljs$lang$maxFixedArity = 3;
G__11379.cljs$lang$applyTo = (function (arglist__11384){
var x = cljs.core.first(arglist__11384);
var y = cljs.core.first(cljs.core.next(arglist__11384));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11384)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11384)));
return G__11379__delegate.call(this, x, y, z, args);
});
return G__11379;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11358.call(this);
case  1 :
return epn__11359.call(this,x);
case  2 :
return epn__11360.call(this,x,y);
case  3 :
return epn__11361.call(this,x,y,z);
default:
return epn__11362.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11362.cljs$lang$applyTo;
return epn;
})()
};
var G__11355 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11355__delegate.call(this, p1, p2, p3, ps);
};
G__11355.cljs$lang$maxFixedArity = 3;
G__11355.cljs$lang$applyTo = (function (arglist__11391){
var p1 = cljs.core.first(arglist__11391);
var p2 = cljs.core.first(cljs.core.next(arglist__11391));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11391)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11391)));
return G__11355__delegate.call(this, p1, p2, p3, ps);
});
return G__11355;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11157.call(this,p1);
case  2 :
return every_pred__11158.call(this,p1,p2);
case  3 :
return every_pred__11159.call(this,p1,p2,p3);
default:
return every_pred__11160.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11160.cljs$lang$applyTo;
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
var some_fn__11634 = (function (p){
return (function() {
var sp1 = null;
var sp1__11640 = (function (){
return null;
});
var sp1__11641 = (function (x){
return p.call(null,x);
});
var sp1__11642 = (function (x,y){
var or__3548__auto____11407 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11407))
{return or__3548__auto____11407;
} else
{return p.call(null,y);
}
});
var sp1__11644 = (function (x,y,z){
var or__3548__auto____11410 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11410))
{return or__3548__auto____11410;
} else
{var or__3548__auto____11412 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11412))
{return or__3548__auto____11412;
} else
{return p.call(null,z);
}
}
});
var sp1__11645 = (function() { 
var G__11652__delegate = function (x,y,z,args){
var or__3548__auto____11415 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11415))
{return or__3548__auto____11415;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11652 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11652__delegate.call(this, x, y, z, args);
};
G__11652.cljs$lang$maxFixedArity = 3;
G__11652.cljs$lang$applyTo = (function (arglist__11653){
var x = cljs.core.first(arglist__11653);
var y = cljs.core.first(cljs.core.next(arglist__11653));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11653)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11653)));
return G__11652__delegate.call(this, x, y, z, args);
});
return G__11652;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11640.call(this);
case  1 :
return sp1__11641.call(this,x);
case  2 :
return sp1__11642.call(this,x,y);
case  3 :
return sp1__11644.call(this,x,y,z);
default:
return sp1__11645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11645.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11635 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11662 = (function (){
return null;
});
var sp2__11663 = (function (x){
var or__3548__auto____11420 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11420))
{return or__3548__auto____11420;
} else
{return p2.call(null,x);
}
});
var sp2__11664 = (function (x,y){
var or__3548__auto____11421 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11421))
{return or__3548__auto____11421;
} else
{var or__3548__auto____11425 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11425))
{return or__3548__auto____11425;
} else
{var or__3548__auto____11427 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11427))
{return or__3548__auto____11427;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11665 = (function (x,y,z){
var or__3548__auto____11430 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11430))
{return or__3548__auto____11430;
} else
{var or__3548__auto____11431 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11431))
{return or__3548__auto____11431;
} else
{var or__3548__auto____11433 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11433))
{return or__3548__auto____11433;
} else
{var or__3548__auto____11435 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11435))
{return or__3548__auto____11435;
} else
{var or__3548__auto____11437 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11437))
{return or__3548__auto____11437;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11666 = (function() { 
var G__11672__delegate = function (x,y,z,args){
var or__3548__auto____11439 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11439))
{return or__3548__auto____11439;
} else
{return cljs.core.some.call(null,(function (p1__11021_SHARP_){
var or__3548__auto____11442 = p1.call(null,p1__11021_SHARP_);

if(cljs.core.truth_(or__3548__auto____11442))
{return or__3548__auto____11442;
} else
{return p2.call(null,p1__11021_SHARP_);
}
}),args);
}
};
var G__11672 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11672__delegate.call(this, x, y, z, args);
};
G__11672.cljs$lang$maxFixedArity = 3;
G__11672.cljs$lang$applyTo = (function (arglist__11676){
var x = cljs.core.first(arglist__11676);
var y = cljs.core.first(cljs.core.next(arglist__11676));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11676)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11676)));
return G__11672__delegate.call(this, x, y, z, args);
});
return G__11672;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11662.call(this);
case  1 :
return sp2__11663.call(this,x);
case  2 :
return sp2__11664.call(this,x,y);
case  3 :
return sp2__11665.call(this,x,y,z);
default:
return sp2__11666.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11666.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11636 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11682 = (function (){
return null;
});
var sp3__11683 = (function (x){
var or__3548__auto____11447 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11447))
{return or__3548__auto____11447;
} else
{var or__3548__auto____11449 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11449))
{return or__3548__auto____11449;
} else
{return p3.call(null,x);
}
}
});
var sp3__11684 = (function (x,y){
var or__3548__auto____11453 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11453))
{return or__3548__auto____11453;
} else
{var or__3548__auto____11455 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11455))
{return or__3548__auto____11455;
} else
{var or__3548__auto____11457 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11457))
{return or__3548__auto____11457;
} else
{var or__3548__auto____11459 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11459))
{return or__3548__auto____11459;
} else
{var or__3548__auto____11463 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11463))
{return or__3548__auto____11463;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11685 = (function (x,y,z){
var or__3548__auto____11467 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11467))
{return or__3548__auto____11467;
} else
{var or__3548__auto____11535 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11535))
{return or__3548__auto____11535;
} else
{var or__3548__auto____11537 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11537))
{return or__3548__auto____11537;
} else
{var or__3548__auto____11539 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11539))
{return or__3548__auto____11539;
} else
{var or__3548__auto____11541 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11541))
{return or__3548__auto____11541;
} else
{var or__3548__auto____11542 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11542))
{return or__3548__auto____11542;
} else
{var or__3548__auto____11543 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11543))
{return or__3548__auto____11543;
} else
{var or__3548__auto____11544 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11544))
{return or__3548__auto____11544;
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
var sp3__11686 = (function() { 
var G__11693__delegate = function (x,y,z,args){
var or__3548__auto____11547 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11547))
{return or__3548__auto____11547;
} else
{return cljs.core.some.call(null,(function (p1__11025_SHARP_){
var or__3548__auto____11550 = p1.call(null,p1__11025_SHARP_);

if(cljs.core.truth_(or__3548__auto____11550))
{return or__3548__auto____11550;
} else
{var or__3548__auto____11551 = p2.call(null,p1__11025_SHARP_);

if(cljs.core.truth_(or__3548__auto____11551))
{return or__3548__auto____11551;
} else
{return p3.call(null,p1__11025_SHARP_);
}
}
}),args);
}
};
var G__11693 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11693__delegate.call(this, x, y, z, args);
};
G__11693.cljs$lang$maxFixedArity = 3;
G__11693.cljs$lang$applyTo = (function (arglist__11734){
var x = cljs.core.first(arglist__11734);
var y = cljs.core.first(cljs.core.next(arglist__11734));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11734)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11734)));
return G__11693__delegate.call(this, x, y, z, args);
});
return G__11693;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11682.call(this);
case  1 :
return sp3__11683.call(this,x);
case  2 :
return sp3__11684.call(this,x,y);
case  3 :
return sp3__11685.call(this,x,y,z);
default:
return sp3__11686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11686.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11637 = (function() { 
var G__11735__delegate = function (p1,p2,p3,ps){
var ps__11623 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11736 = (function (){
return null;
});
var spn__11737 = (function (x){
return cljs.core.some.call(null,(function (p1__11027_SHARP_){
return p1__11027_SHARP_.call(null,x);
}),ps__11623);
});
var spn__11738 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11029_SHARP_){
var or__3548__auto____11625 = p1__11029_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11625))
{return or__3548__auto____11625;
} else
{return p1__11029_SHARP_.call(null,y);
}
}),ps__11623);
});
var spn__11739 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11030_SHARP_){
var or__3548__auto____11629 = p1__11030_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11629))
{return or__3548__auto____11629;
} else
{var or__3548__auto____11630 = p1__11030_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11630))
{return or__3548__auto____11630;
} else
{return p1__11030_SHARP_.call(null,z);
}
}
}),ps__11623);
});
var spn__11740 = (function() { 
var G__11743__delegate = function (x,y,z,args){
var or__3548__auto____11631 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11631))
{return or__3548__auto____11631;
} else
{return cljs.core.some.call(null,(function (p1__11032_SHARP_){
return cljs.core.some.call(null,p1__11032_SHARP_,args);
}),ps__11623);
}
};
var G__11743 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11743__delegate.call(this, x, y, z, args);
};
G__11743.cljs$lang$maxFixedArity = 3;
G__11743.cljs$lang$applyTo = (function (arglist__11747){
var x = cljs.core.first(arglist__11747);
var y = cljs.core.first(cljs.core.next(arglist__11747));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11747)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11747)));
return G__11743__delegate.call(this, x, y, z, args);
});
return G__11743;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11736.call(this);
case  1 :
return spn__11737.call(this,x);
case  2 :
return spn__11738.call(this,x,y);
case  3 :
return spn__11739.call(this,x,y,z);
default:
return spn__11740.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11740.cljs$lang$applyTo;
return spn;
})()
};
var G__11735 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11735__delegate.call(this, p1, p2, p3, ps);
};
G__11735.cljs$lang$maxFixedArity = 3;
G__11735.cljs$lang$applyTo = (function (arglist__11748){
var p1 = cljs.core.first(arglist__11748);
var p2 = cljs.core.first(cljs.core.next(arglist__11748));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11748)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11748)));
return G__11735__delegate.call(this, p1, p2, p3, ps);
});
return G__11735;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11634.call(this,p1);
case  2 :
return some_fn__11635.call(this,p1,p2);
case  3 :
return some_fn__11636.call(this,p1,p2,p3);
default:
return some_fn__11637.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11637.cljs$lang$applyTo;
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
var map__11869 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11752 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11752))
{var s__11754 = temp__3698__auto____11752;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11754)),map.call(null,f,cljs.core.rest.call(null,s__11754)));
} else
{return null;
}
})));
});
var map__11870 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11756 = cljs.core.seq.call(null,c1);
var s2__11831 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11832 = s1__11756;

if(cljs.core.truth_(and__3546__auto____11832))
{return s2__11831;
} else
{return and__3546__auto____11832;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11756),cljs.core.first.call(null,s2__11831)),map.call(null,f,cljs.core.rest.call(null,s1__11756),cljs.core.rest.call(null,s2__11831)));
} else
{return null;
}
})));
});
var map__11871 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11836 = cljs.core.seq.call(null,c1);
var s2__11837 = cljs.core.seq.call(null,c2);
var s3__11840 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11845 = s1__11836;

if(cljs.core.truth_(and__3546__auto____11845))
{var and__3546__auto____11847 = s2__11837;

if(cljs.core.truth_(and__3546__auto____11847))
{return s3__11840;
} else
{return and__3546__auto____11847;
}
} else
{return and__3546__auto____11845;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11836),cljs.core.first.call(null,s2__11837),cljs.core.first.call(null,s3__11840)),map.call(null,f,cljs.core.rest.call(null,s1__11836),cljs.core.rest.call(null,s2__11837),cljs.core.rest.call(null,s3__11840)));
} else
{return null;
}
})));
});
var map__11872 = (function() { 
var G__11878__delegate = function (f,c1,c2,c3,colls){
var step__11854 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11852 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11852)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11852),step.call(null,map.call(null,cljs.core.rest,ss__11852)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11404_SHARP_){
return cljs.core.apply.call(null,f,p1__11404_SHARP_);
}),step__11854.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11878 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11878__delegate.call(this, f, c1, c2, c3, colls);
};
G__11878.cljs$lang$maxFixedArity = 4;
G__11878.cljs$lang$applyTo = (function (arglist__11932){
var f = cljs.core.first(arglist__11932);
var c1 = cljs.core.first(cljs.core.next(arglist__11932));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11932)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11932))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11932))));
return G__11878__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11878;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11869.call(this,f,c1);
case  3 :
return map__11870.call(this,f,c1,c2);
case  4 :
return map__11871.call(this,f,c1,c2,c3);
default:
return map__11872.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11872.cljs$lang$applyTo;
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
{var temp__3698__auto____11934 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11934))
{var s__11936 = temp__3698__auto____11934;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11936),take.call(null,(n - 1),cljs.core.rest.call(null,s__11936)));
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
var step__11958 = (function (n,coll){
while(true){
var s__11953 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11954 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11954))
{return s__11953;
} else
{return and__3546__auto____11954;
}
})()))
{{
var G__11959 = (n - 1);
var G__11960 = cljs.core.rest.call(null,s__11953);
n = G__11959;
coll = G__11960;
continue;
}
} else
{return s__11953;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11958.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11961 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11962 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11961.call(this,n);
case  2 :
return drop_last__11962.call(this,n,s);
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
var s__11968 = cljs.core.seq.call(null,coll);
var lead__11969 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11969))
{{
var G__11972 = cljs.core.next.call(null,s__11968);
var G__11973 = cljs.core.next.call(null,lead__11969);
s__11968 = G__11972;
lead__11969 = G__11973;
continue;
}
} else
{return s__11968;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11981 = (function (pred,coll){
while(true){
var s__11976 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11978 = s__11976;

if(cljs.core.truth_(and__3546__auto____11978))
{return pred.call(null,cljs.core.first.call(null,s__11976));
} else
{return and__3546__auto____11978;
}
})()))
{{
var G__11985 = pred;
var G__11986 = cljs.core.rest.call(null,s__11976);
pred = G__11985;
coll = G__11986;
continue;
}
} else
{return s__11976;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11981.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11989 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11989))
{var s__11990 = temp__3698__auto____11989;

return cljs.core.concat.call(null,s__11990,cycle.call(null,s__11990));
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
var repeat__11997 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11998 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11997.call(this,n);
case  2 :
return repeat__11998.call(this,n,x);
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
var repeatedly__12009 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12067 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12009.call(this,n);
case  2 :
return repeatedly__12067.call(this,n,f);
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
var interleave__12098 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12082 = cljs.core.seq.call(null,c1);
var s2__12083 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12084 = s1__12082;

if(cljs.core.truth_(and__3546__auto____12084))
{return s2__12083;
} else
{return and__3546__auto____12084;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12082),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12083),interleave.call(null,cljs.core.rest.call(null,s1__12082),cljs.core.rest.call(null,s2__12083))));
} else
{return null;
}
})));
});
var interleave__12099 = (function() { 
var G__12102__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12091 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12091)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12091),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12091)));
} else
{return null;
}
})));
};
var G__12102 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12102__delegate.call(this, c1, c2, colls);
};
G__12102.cljs$lang$maxFixedArity = 2;
G__12102.cljs$lang$applyTo = (function (arglist__12107){
var c1 = cljs.core.first(arglist__12107);
var c2 = cljs.core.first(cljs.core.next(arglist__12107));
var colls = cljs.core.rest(cljs.core.next(arglist__12107));
return G__12102__delegate.call(this, c1, c2, colls);
});
return G__12102;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12098.call(this,c1,c2);
default:
return interleave__12099.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12099.cljs$lang$applyTo;
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
var cat__12119 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12114 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12114))
{var coll__12116 = temp__3695__auto____12114;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12116),cat.call(null,cljs.core.rest.call(null,coll__12116),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12119.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12132 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12133 = (function() { 
var G__12138__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12138 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12138__delegate.call(this, f, coll, colls);
};
G__12138.cljs$lang$maxFixedArity = 2;
G__12138.cljs$lang$applyTo = (function (arglist__12140){
var f = cljs.core.first(arglist__12140);
var coll = cljs.core.first(cljs.core.next(arglist__12140));
var colls = cljs.core.rest(cljs.core.next(arglist__12140));
return G__12138__delegate.call(this, f, coll, colls);
});
return G__12138;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12132.call(this,f,coll);
default:
return mapcat__12133.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12133.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12147 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12147))
{var s__12149 = temp__3698__auto____12147;

var f__12153 = cljs.core.first.call(null,s__12149);
var r__12154 = cljs.core.rest.call(null,s__12149);

if(cljs.core.truth_(pred.call(null,f__12153)))
{return cljs.core.cons.call(null,f__12153,filter.call(null,pred,r__12154));
} else
{return filter.call(null,pred,r__12154);
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
var walk__12169 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12169.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12162_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12162_SHARP_));
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
var partition__12327 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12328 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12306 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12306))
{var s__12307 = temp__3698__auto____12306;

var p__12308 = cljs.core.take.call(null,n,s__12307);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12308))))
{return cljs.core.cons.call(null,p__12308,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12307)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12330 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12309 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12309))
{var s__12322 = temp__3698__auto____12309;

var p__12323 = cljs.core.take.call(null,n,s__12322);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12323))))
{return cljs.core.cons.call(null,p__12323,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12322)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12323,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12327.call(this,n,step);
case  3 :
return partition__12328.call(this,n,step,pad);
case  4 :
return partition__12330.call(this,n,step,pad,coll);
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
var get_in__12341 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12342 = (function (m,ks,not_found){
var sentinel__12336 = cljs.core.lookup_sentinel;
var m__12337 = m;
var ks__12338 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12338))
{var m__12340 = cljs.core.get.call(null,m__12337,cljs.core.first.call(null,ks__12338),sentinel__12336);

if(cljs.core.truth_((sentinel__12336 === m__12340)))
{return not_found;
} else
{{
var G__12344 = sentinel__12336;
var G__12345 = m__12340;
var G__12346 = cljs.core.next.call(null,ks__12338);
sentinel__12336 = G__12344;
m__12337 = G__12345;
ks__12338 = G__12346;
continue;
}
}
} else
{return m__12337;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12341.call(this,m,ks);
case  3 :
return get_in__12342.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12347,v){
var vec__12348__12349 = p__12347;
var k__12350 = cljs.core.nth.call(null,vec__12348__12349,0,null);
var ks__12351 = cljs.core.nthnext.call(null,vec__12348__12349,1);

if(cljs.core.truth_(ks__12351))
{return cljs.core.assoc.call(null,m,k__12350,assoc_in.call(null,cljs.core.get.call(null,m,k__12350),ks__12351,v));
} else
{return cljs.core.assoc.call(null,m,k__12350,v);
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
var update_in__delegate = function (m,p__12360,f,args){
var vec__12362__12375 = p__12360;
var k__12376 = cljs.core.nth.call(null,vec__12362__12375,0,null);
var ks__12377 = cljs.core.nthnext.call(null,vec__12362__12375,1);

if(cljs.core.truth_(ks__12377))
{return cljs.core.assoc.call(null,m,k__12376,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12376),ks__12377,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12376,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12376),args));
}
};
var update_in = function (m,p__12360,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12360, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12382){
var m = cljs.core.first(arglist__12382);
var p__12360 = cljs.core.first(cljs.core.next(arglist__12382));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12382)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12382)));
return update_in__delegate.call(this, m, p__12360, f, args);
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
var this__12394 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12501 = null;
var G__12501__12502 = (function (coll,k){
var this__12395 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12501__12504 = (function (coll,k,not_found){
var this__12396 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12501 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12501__12502.call(this,coll,k);
case  3 :
return G__12501__12504.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12501;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12441 = this;
var new_array__12444 = cljs.core.aclone.call(null,this__12441.array);

(new_array__12444[k] = v);
return (new cljs.core.Vector(this__12441.meta,new_array__12444));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12512 = null;
var G__12512__12513 = (function (coll,k){
var this__12447 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12512__12514 = (function (coll,k,not_found){
var this__12448 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12512 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12512__12513.call(this,coll,k);
case  3 :
return G__12512__12514.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12512;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12452 = this;
var new_array__12454 = cljs.core.aclone.call(null,this__12452.array);

new_array__12454.push(o);
return (new cljs.core.Vector(this__12452.meta,new_array__12454));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12558 = null;
var G__12558__12559 = (function (v,f){
var this__12457 = this;
return cljs.core.ci_reduce.call(null,this__12457.array,f);
});
var G__12558__12560 = (function (v,f,start){
var this__12459 = this;
return cljs.core.ci_reduce.call(null,this__12459.array,f,start);
});
G__12558 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12558__12559.call(this,v,f);
case  3 :
return G__12558__12560.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12558;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12462 = this;
if(cljs.core.truth_((this__12462.array.length > 0)))
{var vector_seq__12469 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12462.array.length)))
{return cljs.core.cons.call(null,(this__12462.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12469.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12470 = this;
return this__12470.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12473 = this;
var count__12474 = this__12473.array.length;

if(cljs.core.truth_((count__12474 > 0)))
{return (this__12473.array[(count__12474 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12476 = this;
if(cljs.core.truth_((this__12476.array.length > 0)))
{var new_array__12478 = cljs.core.aclone.call(null,this__12476.array);

new_array__12478.pop();
return (new cljs.core.Vector(this__12476.meta,new_array__12478));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12481 = this;
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
var this__12486 = this;
return this__12486.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12576 = null;
var G__12576__12579 = (function (coll,n){
var this__12488 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12490 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12490))
{return (n < this__12488.array.length);
} else
{return and__3546__auto____12490;
}
})()))
{return (this__12488.array[n]);
} else
{return null;
}
});
var G__12576__12580 = (function (coll,n,not_found){
var this__12493 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12495 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12495))
{return (n < this__12493.array.length);
} else
{return and__3546__auto____12495;
}
})()))
{return (this__12493.array[n]);
} else
{return not_found;
}
});
G__12576 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12576__12579.call(this,coll,n);
case  3 :
return G__12576__12580.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12576;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12498 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12498.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12591){
var args = cljs.core.seq( arglist__12591 );;
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
var this__12603 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12690 = null;
var G__12690__12691 = (function (coll,k){
var this__12605 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12690__12692 = (function (coll,k,not_found){
var this__12606 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12690 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12690__12691.call(this,coll,k);
case  3 :
return G__12690__12692.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12690;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12609 = this;
var v_pos__12610 = (this__12609.start + key);

return (new cljs.core.Subvec(this__12609.meta,cljs.core._assoc.call(null,this__12609.v,v_pos__12610,val),this__12609.start,((this__12609.end > (v_pos__12610 + 1)) ? this__12609.end : (v_pos__12610 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12698 = null;
var G__12698__12699 = (function (coll,k){
var this__12612 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12698__12700 = (function (coll,k,not_found){
var this__12614 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12698 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12698__12699.call(this,coll,k);
case  3 :
return G__12698__12700.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12698;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12617 = this;
return (new cljs.core.Subvec(this__12617.meta,cljs.core._assoc_n.call(null,this__12617.v,this__12617.end,o),this__12617.start,(this__12617.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12705 = null;
var G__12705__12706 = (function (coll,f){
var this__12620 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12705__12707 = (function (coll,f,start){
var this__12621 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12705 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12705__12706.call(this,coll,f);
case  3 :
return G__12705__12707.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12705;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12623 = this;
var subvec_seq__12626 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12623.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12623.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12626.call(null,this__12623.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12627 = this;
return (this__12627.end - this__12627.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12628 = this;
return cljs.core._nth.call(null,this__12628.v,(this__12628.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12631 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12631.start,this__12631.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12631.meta,this__12631.v,this__12631.start,(this__12631.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12669 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12674 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12675 = this;
return (new cljs.core.Subvec(meta,this__12675.v,this__12675.start,this__12675.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12676 = this;
return this__12676.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12754 = null;
var G__12754__12755 = (function (coll,n){
var this__12677 = this;
return cljs.core._nth.call(null,this__12677.v,(this__12677.start + n));
});
var G__12754__12756 = (function (coll,n,not_found){
var this__12684 = this;
return cljs.core._nth.call(null,this__12684.v,(this__12684.start + n),not_found);
});
G__12754 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12754__12755.call(this,coll,n);
case  3 :
return G__12754__12756.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12754;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12685 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12685.meta);
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
var subvec__12778 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12779 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12778.call(this,v,start);
case  3 :
return subvec__12779.call(this,v,start,end);
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
var this__12798 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12800 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12805 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12811 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12811.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12813 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12815 = this;
return cljs.core._first.call(null,this__12815.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12817 = this;
var temp__3695__auto____12818 = cljs.core.next.call(null,this__12817.front);

if(cljs.core.truth_(temp__3695__auto____12818))
{var f1__12820 = temp__3695__auto____12818;

return (new cljs.core.PersistentQueueSeq(this__12817.meta,f1__12820,this__12817.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12817.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12817.meta,this__12817.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12822 = this;
return this__12822.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12824 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12824.front,this__12824.rear));
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
var this__12842 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12844 = this;
if(cljs.core.truth_(this__12844.front))
{return (new cljs.core.PersistentQueue(this__12844.meta,(this__12844.count + 1),this__12844.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12847 = this__12844.rear;

if(cljs.core.truth_(or__3548__auto____12847))
{return or__3548__auto____12847;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12844.meta,(this__12844.count + 1),cljs.core.conj.call(null,this__12844.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12850 = this;
var rear__12870 = cljs.core.seq.call(null,this__12850.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12871 = this__12850.front;

if(cljs.core.truth_(or__3548__auto____12871))
{return or__3548__auto____12871;
} else
{return rear__12870;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12850.front,cljs.core.seq.call(null,rear__12870)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12872 = this;
return this__12872.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12873 = this;
return cljs.core._first.call(null,this__12873.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12875 = this;
if(cljs.core.truth_(this__12875.front))
{var temp__3695__auto____12877 = cljs.core.next.call(null,this__12875.front);

if(cljs.core.truth_(temp__3695__auto____12877))
{var f1__12878 = temp__3695__auto____12877;

return (new cljs.core.PersistentQueue(this__12875.meta,(this__12875.count - 1),f1__12878,this__12875.rear));
} else
{return (new cljs.core.PersistentQueue(this__12875.meta,(this__12875.count - 1),cljs.core.seq.call(null,this__12875.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12882 = this;
return cljs.core.first.call(null,this__12882.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12885 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12888 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12891 = this;
return (new cljs.core.PersistentQueue(meta,this__12891.count,this__12891.front,this__12891.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12897 = this;
return this__12897.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12903 = this;
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
var this__12925 = this;
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
var len__12952 = array.length;

var i__12954 = 0;

while(true){
if(cljs.core.truth_((i__12954 < len__12952)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12954]))))
{return i__12954;
} else
{{
var G__13044 = (i__12954 + incr);
i__12954 = G__13044;
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
var obj_map_contains_key_QMARK___13048 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___13049 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____13046 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13046))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13046;
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
return obj_map_contains_key_QMARK___13048.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___13049.call(this,k,strobj,true_val,false_val);
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
var this__13064 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13129 = null;
var G__13129__13130 = (function (coll,k){
var this__13066 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13129__13131 = (function (coll,k,not_found){
var this__13068 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13068.strobj,(this__13068.strobj[k]),not_found);
});
G__13129 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13129__13130.call(this,coll,k);
case  3 :
return G__13129__13131.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13129;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13071 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13073 = goog.object.clone.call(null,this__13071.strobj);
var overwrite_QMARK___13075 = new_strobj__13073.hasOwnProperty(k);

(new_strobj__13073[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13075))
{return (new cljs.core.ObjMap(this__13071.meta,this__13071.keys,new_strobj__13073));
} else
{var new_keys__13077 = cljs.core.aclone.call(null,this__13071.keys);

new_keys__13077.push(k);
return (new cljs.core.ObjMap(this__13071.meta,new_keys__13077,new_strobj__13073));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13071.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13081 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13081.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13138 = null;
var G__13138__13139 = (function (coll,k){
var this__13084 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13138__13140 = (function (coll,k,not_found){
var this__13086 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13138 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13138__13139.call(this,coll,k);
case  3 :
return G__13138__13140.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13138;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13093 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13097 = this;
if(cljs.core.truth_((this__13097.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__13056_SHARP_){
return cljs.core.vector.call(null,p1__13056_SHARP_,(this__13097.strobj[p1__13056_SHARP_]));
}),this__13097.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13103 = this;
return this__13103.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13107 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13110 = this;
return (new cljs.core.ObjMap(meta,this__13110.keys,this__13110.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13112 = this;
return this__13112.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13113 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13113.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13119 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13121 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13121))
{return this__13119.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13121;
}
})()))
{var new_keys__13123 = cljs.core.aclone.call(null,this__13119.keys);
var new_strobj__13125 = goog.object.clone.call(null,this__13119.strobj);

new_keys__13123.splice(cljs.core.scan_array.call(null,1,k,new_keys__13123),1);
cljs.core.js_delete.call(null,new_strobj__13125,k);
return (new cljs.core.ObjMap(this__13119.meta,new_keys__13123,new_strobj__13125));
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
var this__13217 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13287 = null;
var G__13287__13288 = (function (coll,k){
var this__13222 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13287__13289 = (function (coll,k,not_found){
var this__13224 = this;
var bucket__13226 = (this__13224.hashobj[cljs.core.hash.call(null,k)]);
var i__13228 = (cljs.core.truth_(bucket__13226)?cljs.core.scan_array.call(null,2,k,bucket__13226):null);

if(cljs.core.truth_(i__13228))
{return (bucket__13226[(i__13228 + 1)]);
} else
{return not_found;
}
});
G__13287 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13287__13288.call(this,coll,k);
case  3 :
return G__13287__13289.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13287;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13233 = this;
var h__13235 = cljs.core.hash.call(null,k);
var bucket__13236 = (this__13233.hashobj[h__13235]);

if(cljs.core.truth_(bucket__13236))
{var new_bucket__13238 = cljs.core.aclone.call(null,bucket__13236);
var new_hashobj__13239 = goog.object.clone.call(null,this__13233.hashobj);

(new_hashobj__13239[h__13235] = new_bucket__13238);
var temp__3695__auto____13240 = cljs.core.scan_array.call(null,2,k,new_bucket__13238);

if(cljs.core.truth_(temp__3695__auto____13240))
{var i__13241 = temp__3695__auto____13240;

(new_bucket__13238[(i__13241 + 1)] = v);
return (new cljs.core.HashMap(this__13233.meta,this__13233.count,new_hashobj__13239));
} else
{new_bucket__13238.push(k,v);
return (new cljs.core.HashMap(this__13233.meta,(this__13233.count + 1),new_hashobj__13239));
}
} else
{var new_hashobj__13242 = goog.object.clone.call(null,this__13233.hashobj);

(new_hashobj__13242[h__13235] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13233.meta,(this__13233.count + 1),new_hashobj__13242));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13243 = this;
var bucket__13244 = (this__13243.hashobj[cljs.core.hash.call(null,k)]);
var i__13245 = (cljs.core.truth_(bucket__13244)?cljs.core.scan_array.call(null,2,k,bucket__13244):null);

if(cljs.core.truth_(i__13245))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13308 = null;
var G__13308__13309 = (function (coll,k){
var this__13248 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13308__13310 = (function (coll,k,not_found){
var this__13252 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13308 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13308__13309.call(this,coll,k);
case  3 :
return G__13308__13310.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13308;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13254 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13255 = this;
if(cljs.core.truth_((this__13255.count > 0)))
{var hashes__13260 = cljs.core.js_keys.call(null,this__13255.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13199_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13255.hashobj[p1__13199_SHARP_])));
}),hashes__13260);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13263 = this;
return this__13263.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13265 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13266 = this;
return (new cljs.core.HashMap(meta,this__13266.count,this__13266.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13269 = this;
return this__13269.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13270 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13270.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13272 = this;
var h__13274 = cljs.core.hash.call(null,k);
var bucket__13275 = (this__13272.hashobj[h__13274]);
var i__13276 = (cljs.core.truth_(bucket__13275)?cljs.core.scan_array.call(null,2,k,bucket__13275):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13276)))
{return coll;
} else
{var new_hashobj__13277 = goog.object.clone.call(null,this__13272.hashobj);

if(cljs.core.truth_((3 > bucket__13275.length)))
{cljs.core.js_delete.call(null,new_hashobj__13277,h__13274);
} else
{var new_bucket__13279 = cljs.core.aclone.call(null,bucket__13275);

new_bucket__13279.splice(i__13276,2);
(new_hashobj__13277[h__13274] = new_bucket__13279);
}
return (new cljs.core.HashMap(this__13272.meta,(this__13272.count - 1),new_hashobj__13277));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13340 = ks.length;

var i__13341 = 0;
var out__13342 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13341 < len__13340)))
{{
var G__13345 = (i__13341 + 1);
var G__13346 = cljs.core.assoc.call(null,out__13342,(ks[i__13341]),(vs[i__13341]));
i__13341 = G__13345;
out__13342 = G__13346;
continue;
}
} else
{return out__13342;
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
var in$__13348 = cljs.core.seq.call(null,keyvals);
var out__13365 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13348))
{{
var G__13368 = cljs.core.nnext.call(null,in$__13348);
var G__13369 = cljs.core.assoc.call(null,out__13365,cljs.core.first.call(null,in$__13348),cljs.core.second.call(null,in$__13348));
in$__13348 = G__13368;
out__13365 = G__13369;
continue;
}
} else
{return out__13365;
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
hash_map.cljs$lang$applyTo = (function (arglist__13370){
var keyvals = cljs.core.seq( arglist__13370 );;
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
{return cljs.core.reduce.call(null,(function (p1__13372_SHARP_,p2__13374_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13380 = p1__13372_SHARP_;

if(cljs.core.truth_(or__3548__auto____13380))
{return or__3548__auto____13380;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13374_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13385){
var maps = cljs.core.seq( arglist__13385 );;
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
{var merge_entry__13396 = (function (m,e){
var k__13391 = cljs.core.first.call(null,e);
var v__13392 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13391)))
{return cljs.core.assoc.call(null,m,k__13391,f.call(null,cljs.core.get.call(null,m,k__13391),v__13392));
} else
{return cljs.core.assoc.call(null,m,k__13391,v__13392);
}
});
var merge2__13399 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13396,(function (){var or__3548__auto____13398 = m1;

if(cljs.core.truth_(or__3548__auto____13398))
{return or__3548__auto____13398;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13399,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13414){
var f = cljs.core.first(arglist__13414);
var maps = cljs.core.rest(arglist__13414);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13418 = cljs.core.ObjMap.fromObject([],{});
var keys__13419 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13419))
{var key__13420 = cljs.core.first.call(null,keys__13419);
var entry__13421 = cljs.core.get.call(null,map,key__13420,"﷐'user/not-found");

{
var G__13429 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13421,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13418,key__13420,entry__13421):ret__13418);
var G__13430 = cljs.core.next.call(null,keys__13419);
ret__13418 = G__13429;
keys__13419 = G__13430;
continue;
}
} else
{return ret__13418;
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
var this__13443 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13485 = null;
var G__13485__13487 = (function (coll,v){
var this__13445 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13485__13488 = (function (coll,v,not_found){
var this__13447 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13447.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13485 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13485__13487.call(this,coll,v);
case  3 :
return G__13485__13488.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13485;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13495 = null;
var G__13495__13496 = (function (coll,k){
var this__13451 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13495__13497 = (function (coll,k,not_found){
var this__13452 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13495 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13495__13496.call(this,coll,k);
case  3 :
return G__13495__13497.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13495;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13455 = this;
return (new cljs.core.Set(this__13455.meta,cljs.core.assoc.call(null,this__13455.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13460 = this;
return cljs.core.keys.call(null,this__13460.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13462 = this;
return (new cljs.core.Set(this__13462.meta,cljs.core.dissoc.call(null,this__13462.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13468 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13470 = this;
var and__3546__auto____13471 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13471))
{var and__3546__auto____13472 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13472))
{return cljs.core.every_QMARK_.call(null,(function (p1__13417_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13417_SHARP_);
}),other);
} else
{return and__3546__auto____13472;
}
} else
{return and__3546__auto____13471;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13477 = this;
return (new cljs.core.Set(meta,this__13477.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13482 = this;
return this__13482.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13483 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13483.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13524 = cljs.core.seq.call(null,coll);
var out__13525 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13524))))
{{
var G__13534 = cljs.core.rest.call(null,in$__13524);
var G__13535 = cljs.core.conj.call(null,out__13525,cljs.core.first.call(null,in$__13524));
in$__13524 = G__13534;
out__13525 = G__13535;
continue;
}
} else
{return out__13525;
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
{var n__13542 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13543 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13543))
{var e__13544 = temp__3695__auto____13543;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13544));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13542,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13523_SHARP_){
var temp__3695__auto____13547 = cljs.core.find.call(null,smap,p1__13523_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13547))
{var e__13551 = temp__3695__auto____13547;

return cljs.core.second.call(null,e__13551);
} else
{return p1__13523_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13579 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13567,seen){
while(true){
var vec__13568__13569 = p__13567;
var f__13570 = cljs.core.nth.call(null,vec__13568__13569,0,null);
var xs__13571 = vec__13568__13569;

var temp__3698__auto____13572 = cljs.core.seq.call(null,xs__13571);

if(cljs.core.truth_(temp__3698__auto____13572))
{var s__13575 = temp__3698__auto____13572;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13570)))
{{
var G__13585 = cljs.core.rest.call(null,s__13575);
var G__13586 = seen;
p__13567 = G__13585;
seen = G__13586;
continue;
}
} else
{return cljs.core.cons.call(null,f__13570,step.call(null,cljs.core.rest.call(null,s__13575),cljs.core.conj.call(null,seen,f__13570)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13579.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13594 = cljs.core.Vector.fromArray([]);
var s__13595 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13595)))
{{
var G__13597 = cljs.core.conj.call(null,ret__13594,cljs.core.first.call(null,s__13595));
var G__13598 = cljs.core.next.call(null,s__13595);
ret__13594 = G__13597;
s__13595 = G__13598;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13594);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13600 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13600))
{return or__3548__auto____13600;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13607 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13607 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13607 + 1));
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
var map__13626 = cljs.core.ObjMap.fromObject([],{});
var ks__13627 = cljs.core.seq.call(null,keys);
var vs__13628 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13629 = ks__13627;

if(cljs.core.truth_(and__3546__auto____13629))
{return vs__13628;
} else
{return and__3546__auto____13629;
}
})()))
{{
var G__13641 = cljs.core.assoc.call(null,map__13626,cljs.core.first.call(null,ks__13627),cljs.core.first.call(null,vs__13628));
var G__13642 = cljs.core.next.call(null,ks__13627);
var G__13643 = cljs.core.next.call(null,vs__13628);
map__13626 = G__13641;
ks__13627 = G__13642;
vs__13628 = G__13643;
continue;
}
} else
{return map__13626;
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
var max_key__13651 = (function (k,x){
return x;
});
var max_key__13652 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13653 = (function() { 
var G__13655__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13624_SHARP_,p2__13625_SHARP_){
return max_key.call(null,k,p1__13624_SHARP_,p2__13625_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13655 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13655__delegate.call(this, k, x, y, more);
};
G__13655.cljs$lang$maxFixedArity = 3;
G__13655.cljs$lang$applyTo = (function (arglist__13658){
var k = cljs.core.first(arglist__13658);
var x = cljs.core.first(cljs.core.next(arglist__13658));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13658)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13658)));
return G__13655__delegate.call(this, k, x, y, more);
});
return G__13655;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13651.call(this,k,x);
case  3 :
return max_key__13652.call(this,k,x,y);
default:
return max_key__13653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13653.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13665 = (function (k,x){
return x;
});
var min_key__13666 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13667 = (function() { 
var G__13669__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13645_SHARP_,p2__13646_SHARP_){
return min_key.call(null,k,p1__13645_SHARP_,p2__13646_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13669 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13669__delegate.call(this, k, x, y, more);
};
G__13669.cljs$lang$maxFixedArity = 3;
G__13669.cljs$lang$applyTo = (function (arglist__13671){
var k = cljs.core.first(arglist__13671);
var x = cljs.core.first(cljs.core.next(arglist__13671));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13671)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13671)));
return G__13669__delegate.call(this, k, x, y, more);
});
return G__13669;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13665.call(this,k,x);
case  3 :
return min_key__13666.call(this,k,x,y);
default:
return min_key__13667.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13667.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13684 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13685 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13678 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13678))
{var s__13679 = temp__3698__auto____13678;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13679),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13679)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13684.call(this,n,step);
case  3 :
return partition_all__13685.call(this,n,step,coll);
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
var temp__3698__auto____13701 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13701))
{var s__13705 = temp__3698__auto____13701;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13705))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13705),take_while.call(null,pred,cljs.core.rest.call(null,s__13705)));
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
var this__13770 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13773 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13823 = null;
var G__13823__13825 = (function (rng,f){
var this__13776 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13823__13826 = (function (rng,f,s){
var this__13778 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13823 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13823__13825.call(this,rng,f);
case  3 :
return G__13823__13826.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13823;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13780 = this;
var comp__13781 = (cljs.core.truth_((this__13780.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13781.call(null,this__13780.start,this__13780.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13783 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13783.end - this__13783.start) / this__13783.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13788 = this;
return this__13788.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13790 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13790.meta,(this__13790.start + this__13790.step),this__13790.end,this__13790.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13796 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13798 = this;
return (new cljs.core.Range(meta,this__13798.start,this__13798.end,this__13798.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13800 = this;
return this__13800.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13903 = null;
var G__13903__13906 = (function (rng,n){
var this__13805 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13805.start + (n * this__13805.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13808 = (this__13805.start > this__13805.end);

if(cljs.core.truth_(and__3546__auto____13808))
{return cljs.core._EQ_.call(null,this__13805.step,0);
} else
{return and__3546__auto____13808;
}
})()))
{return this__13805.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13903__13908 = (function (rng,n,not_found){
var this__13811 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13811.start + (n * this__13811.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13817 = (this__13811.start > this__13811.end);

if(cljs.core.truth_(and__3546__auto____13817))
{return cljs.core._EQ_.call(null,this__13811.step,0);
} else
{return and__3546__auto____13817;
}
})()))
{return this__13811.start;
} else
{return not_found;
}
}
});
G__13903 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13903__13906.call(this,rng,n);
case  3 :
return G__13903__13908.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13903;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13818 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13818.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13925 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13926 = (function (end){
return range.call(null,0,end,1);
});
var range__13927 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13928 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13925.call(this);
case  1 :
return range__13926.call(this,start);
case  2 :
return range__13927.call(this,start,end);
case  3 :
return range__13928.call(this,start,end,step);
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
var temp__3698__auto____13941 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13941))
{var s__13942 = temp__3698__auto____13941;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13942),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13942)));
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
var temp__3698__auto____13952 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13952))
{var s__13954 = temp__3698__auto____13952;

var fst__13956 = cljs.core.first.call(null,s__13954);
var fv__13959 = f.call(null,fst__13956);
var run__13962 = cljs.core.cons.call(null,fst__13956,cljs.core.take_while.call(null,(function (p1__13947_SHARP_){
return cljs.core._EQ_.call(null,fv__13959,f.call(null,p1__13947_SHARP_));
}),cljs.core.next.call(null,s__13954)));

return cljs.core.cons.call(null,run__13962,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13962),s__13954))));
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
var reductions__14024 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14008 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14008))
{var s__14013 = temp__3695__auto____14008;

return reductions.call(null,f,cljs.core.first.call(null,s__14013),cljs.core.rest.call(null,s__14013));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14025 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14017 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14017))
{var s__14019 = temp__3698__auto____14017;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14019)),cljs.core.rest.call(null,s__14019));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14024.call(this,f,init);
case  3 :
return reductions__14025.call(this,f,init,coll);
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
var juxt__14046 = (function (f){
return (function() {
var G__14052 = null;
var G__14052__14054 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14052__14055 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14052__14057 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14052__14058 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14052__14059 = (function() { 
var G__14064__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14064 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14064__delegate.call(this, x, y, z, args);
};
G__14064.cljs$lang$maxFixedArity = 3;
G__14064.cljs$lang$applyTo = (function (arglist__14065){
var x = cljs.core.first(arglist__14065);
var y = cljs.core.first(cljs.core.next(arglist__14065));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14065)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14065)));
return G__14064__delegate.call(this, x, y, z, args);
});
return G__14064;
})()
;
G__14052 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14052__14054.call(this);
case  1 :
return G__14052__14055.call(this,x);
case  2 :
return G__14052__14057.call(this,x,y);
case  3 :
return G__14052__14058.call(this,x,y,z);
default:
return G__14052__14059.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14052.cljs$lang$maxFixedArity = 3;
G__14052.cljs$lang$applyTo = G__14052__14059.cljs$lang$applyTo;
return G__14052;
})()
});
var juxt__14047 = (function (f,g){
return (function() {
var G__14066 = null;
var G__14066__14067 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14066__14068 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14066__14069 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14066__14070 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14066__14071 = (function() { 
var G__14073__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14073 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14073__delegate.call(this, x, y, z, args);
};
G__14073.cljs$lang$maxFixedArity = 3;
G__14073.cljs$lang$applyTo = (function (arglist__14074){
var x = cljs.core.first(arglist__14074);
var y = cljs.core.first(cljs.core.next(arglist__14074));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14074)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14074)));
return G__14073__delegate.call(this, x, y, z, args);
});
return G__14073;
})()
;
G__14066 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14066__14067.call(this);
case  1 :
return G__14066__14068.call(this,x);
case  2 :
return G__14066__14069.call(this,x,y);
case  3 :
return G__14066__14070.call(this,x,y,z);
default:
return G__14066__14071.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14066.cljs$lang$maxFixedArity = 3;
G__14066.cljs$lang$applyTo = G__14066__14071.cljs$lang$applyTo;
return G__14066;
})()
});
var juxt__14048 = (function (f,g,h){
return (function() {
var G__14075 = null;
var G__14075__14076 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14075__14077 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14075__14078 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14075__14079 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14075__14080 = (function() { 
var G__14092__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14092 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14092__delegate.call(this, x, y, z, args);
};
G__14092.cljs$lang$maxFixedArity = 3;
G__14092.cljs$lang$applyTo = (function (arglist__14096){
var x = cljs.core.first(arglist__14096);
var y = cljs.core.first(cljs.core.next(arglist__14096));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14096)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14096)));
return G__14092__delegate.call(this, x, y, z, args);
});
return G__14092;
})()
;
G__14075 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14075__14076.call(this);
case  1 :
return G__14075__14077.call(this,x);
case  2 :
return G__14075__14078.call(this,x,y);
case  3 :
return G__14075__14079.call(this,x,y,z);
default:
return G__14075__14080.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14075.cljs$lang$maxFixedArity = 3;
G__14075.cljs$lang$applyTo = G__14075__14080.cljs$lang$applyTo;
return G__14075;
})()
});
var juxt__14049 = (function() { 
var G__14111__delegate = function (f,g,h,fs){
var fs__14042 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14112 = null;
var G__14112__14113 = (function (){
return cljs.core.reduce.call(null,(function (p1__13973_SHARP_,p2__13975_SHARP_){
return cljs.core.conj.call(null,p1__13973_SHARP_,p2__13975_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14042);
});
var G__14112__14114 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13976_SHARP_,p2__13978_SHARP_){
return cljs.core.conj.call(null,p1__13976_SHARP_,p2__13978_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14042);
});
var G__14112__14115 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13980_SHARP_,p2__13982_SHARP_){
return cljs.core.conj.call(null,p1__13980_SHARP_,p2__13982_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14042);
});
var G__14112__14116 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13985_SHARP_,p2__13988_SHARP_){
return cljs.core.conj.call(null,p1__13985_SHARP_,p2__13988_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14042);
});
var G__14112__14117 = (function() { 
var G__14133__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13992_SHARP_,p2__13993_SHARP_){
return cljs.core.conj.call(null,p1__13992_SHARP_,cljs.core.apply.call(null,p2__13993_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14042);
};
var G__14133 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14133__delegate.call(this, x, y, z, args);
};
G__14133.cljs$lang$maxFixedArity = 3;
G__14133.cljs$lang$applyTo = (function (arglist__14134){
var x = cljs.core.first(arglist__14134);
var y = cljs.core.first(cljs.core.next(arglist__14134));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14134)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14134)));
return G__14133__delegate.call(this, x, y, z, args);
});
return G__14133;
})()
;
G__14112 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14112__14113.call(this);
case  1 :
return G__14112__14114.call(this,x);
case  2 :
return G__14112__14115.call(this,x,y);
case  3 :
return G__14112__14116.call(this,x,y,z);
default:
return G__14112__14117.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14112.cljs$lang$maxFixedArity = 3;
G__14112.cljs$lang$applyTo = G__14112__14117.cljs$lang$applyTo;
return G__14112;
})()
};
var G__14111 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14111__delegate.call(this, f, g, h, fs);
};
G__14111.cljs$lang$maxFixedArity = 3;
G__14111.cljs$lang$applyTo = (function (arglist__14136){
var f = cljs.core.first(arglist__14136);
var g = cljs.core.first(cljs.core.next(arglist__14136));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14136)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14136)));
return G__14111__delegate.call(this, f, g, h, fs);
});
return G__14111;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14046.call(this,f);
case  2 :
return juxt__14047.call(this,f,g);
case  3 :
return juxt__14048.call(this,f,g,h);
default:
return juxt__14049.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14049.cljs$lang$applyTo;
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
var dorun__14141 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14144 = cljs.core.next.call(null,coll);
coll = G__14144;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14142 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14139 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14139))
{return (n > 0);
} else
{return and__3546__auto____14139;
}
})()))
{{
var G__14145 = (n - 1);
var G__14146 = cljs.core.next.call(null,coll);
n = G__14145;
coll = G__14146;
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
return dorun__14141.call(this,n);
case  2 :
return dorun__14142.call(this,n,coll);
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
var doall__14160 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14161 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14160.call(this,n);
case  2 :
return doall__14161.call(this,n,coll);
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
var matches__14165 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14165),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14165),1)))
{return cljs.core.first.call(null,matches__14165);
} else
{return cljs.core.vec.call(null,matches__14165);
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
var matches__14252 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14252)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14252),1)))
{return cljs.core.first.call(null,matches__14252);
} else
{return cljs.core.vec.call(null,matches__14252);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14312 = cljs.core.re_find.call(null,re,s);
var match_idx__14315 = s.search(re);
var match_str__14316 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14312))?cljs.core.first.call(null,match_data__14312):match_data__14312);
var post_match__14317 = cljs.core.subs.call(null,s,(match_idx__14315 + cljs.core.count.call(null,match_str__14316)));

if(cljs.core.truth_(match_data__14312))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14312,re_seq.call(null,re,post_match__14317));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14322_SHARP_){
return print_one.call(null,p1__14322_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14336 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14336))
{var and__3546__auto____14340 = (function (){var x__445__auto____14337 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14338 = x__445__auto____14337;

if(cljs.core.truth_(and__3546__auto____14338))
{var and__3546__auto____14339 = x__445__auto____14337.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14339))
{return cljs.core.not.call(null,x__445__auto____14337.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14339;
}
} else
{return and__3546__auto____14338;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14337);
}
})();

if(cljs.core.truth_(and__3546__auto____14340))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14340;
}
} else
{return and__3546__auto____14336;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14341 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14343 = x__445__auto____14341;

if(cljs.core.truth_(and__3546__auto____14343))
{var and__3546__auto____14345 = x__445__auto____14341.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14345))
{return cljs.core.not.call(null,x__445__auto____14341.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14345;
}
} else
{return and__3546__auto____14343;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14341);
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
var first_obj__14360 = cljs.core.first.call(null,objs);
var sb__14361 = (new goog.string.StringBuffer());

var G__14362__14363 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14362__14363))
{var obj__14364 = cljs.core.first.call(null,G__14362__14363);
var G__14362__14365 = G__14362__14363;

while(true){
if(cljs.core.truth_((obj__14364 === first_obj__14360)))
{} else
{sb__14361.append(" ");
}
var G__14366__14367 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14364,opts));

if(cljs.core.truth_(G__14366__14367))
{var string__14368 = cljs.core.first.call(null,G__14366__14367);
var G__14366__14369 = G__14366__14367;

while(true){
sb__14361.append(string__14368);
var temp__3698__auto____14372 = cljs.core.next.call(null,G__14366__14369);

if(cljs.core.truth_(temp__3698__auto____14372))
{var G__14366__14374 = temp__3698__auto____14372;

{
var G__14388 = cljs.core.first.call(null,G__14366__14374);
var G__14389 = G__14366__14374;
string__14368 = G__14388;
G__14366__14369 = G__14389;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14379 = cljs.core.next.call(null,G__14362__14365);

if(cljs.core.truth_(temp__3698__auto____14379))
{var G__14362__14381 = temp__3698__auto____14379;

{
var G__14390 = cljs.core.first.call(null,G__14362__14381);
var G__14391 = G__14362__14381;
obj__14364 = G__14390;
G__14362__14365 = G__14391;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14361);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14394 = cljs.core.first.call(null,objs);

var G__14395__14396 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14395__14396))
{var obj__14399 = cljs.core.first.call(null,G__14395__14396);
var G__14395__14400 = G__14395__14396;

while(true){
if(cljs.core.truth_((obj__14399 === first_obj__14394)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14404__14413 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14399,opts));

if(cljs.core.truth_(G__14404__14413))
{var string__14415 = cljs.core.first.call(null,G__14404__14413);
var G__14404__14416 = G__14404__14413;

while(true){
cljs.core.string_print.call(null,string__14415);
var temp__3698__auto____14419 = cljs.core.next.call(null,G__14404__14416);

if(cljs.core.truth_(temp__3698__auto____14419))
{var G__14404__14421 = temp__3698__auto____14419;

{
var G__14440 = cljs.core.first.call(null,G__14404__14421);
var G__14495 = G__14404__14421;
string__14415 = G__14440;
G__14404__14416 = G__14495;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14427 = cljs.core.next.call(null,G__14395__14400);

if(cljs.core.truth_(temp__3698__auto____14427))
{var G__14395__14428 = temp__3698__auto____14427;

{
var G__14496 = cljs.core.first.call(null,G__14395__14428);
var G__14497 = G__14395__14428;
obj__14399 = G__14496;
G__14395__14400 = G__14497;
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
pr_str.cljs$lang$applyTo = (function (arglist__14510){
var objs = cljs.core.seq( arglist__14510 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14515){
var objs = cljs.core.seq( arglist__14515 );;
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
println.cljs$lang$applyTo = (function (arglist__14524){
var objs = cljs.core.seq( arglist__14524 );;
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
prn.cljs$lang$applyTo = (function (arglist__14536){
var objs = cljs.core.seq( arglist__14536 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14540 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14540,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14555 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14555))
{var nspc__14557 = temp__3698__auto____14555;

return cljs.core.str.call(null,nspc__14557,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14558 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14558))
{var nspc__14559 = temp__3698__auto____14558;

return cljs.core.str.call(null,nspc__14559,"/");
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
var pr_pair__14596 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14596,"{",", ","}",opts,coll);
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
var this__14646 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14648 = this;
var G__14650__14656 = cljs.core.seq.call(null,this__14648.watches);

if(cljs.core.truth_(G__14650__14656))
{var G__14659__14663 = cljs.core.first.call(null,G__14650__14656);
var vec__14662__14666 = G__14659__14663;
var key__14668 = cljs.core.nth.call(null,vec__14662__14666,0,null);
var f__14669 = cljs.core.nth.call(null,vec__14662__14666,1,null);
var G__14650__14671 = G__14650__14656;

var G__14659__14674 = G__14659__14663;
var G__14650__14675 = G__14650__14671;

while(true){
var vec__14676__14677 = G__14659__14674;
var key__14678 = cljs.core.nth.call(null,vec__14676__14677,0,null);
var f__14679 = cljs.core.nth.call(null,vec__14676__14677,1,null);
var G__14650__14680 = G__14650__14675;

f__14679.call(null,key__14678,this$,oldval,newval);
var temp__3698__auto____14682 = cljs.core.next.call(null,G__14650__14680);

if(cljs.core.truth_(temp__3698__auto____14682))
{var G__14650__14685 = temp__3698__auto____14682;

{
var G__14708 = cljs.core.first.call(null,G__14650__14685);
var G__14709 = G__14650__14685;
G__14659__14674 = G__14708;
G__14650__14675 = G__14709;
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
var this__14688 = this;
return this$.watches = cljs.core.assoc.call(null,this__14688.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14691 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14691.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14693 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14693.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14695 = this;
return this__14695.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14699 = this;
return this__14699.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14701 = this;
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
var atom__14751 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14752 = (function() { 
var G__14755__delegate = function (x,p__14716){
var map__14717__14719 = p__14716;
var map__14717__14720 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14717__14719))?cljs.core.apply.call(null,cljs.core.hash_map,map__14717__14719):map__14717__14719);
var validator__14721 = cljs.core.get.call(null,map__14717__14720,"﷐'validator");
var meta__14722 = cljs.core.get.call(null,map__14717__14720,"﷐'meta");

return (new cljs.core.Atom(x,meta__14722,validator__14721,null));
};
var G__14755 = function (x,var_args){
var p__14716 = null;
if (goog.isDef(var_args)) {
  p__14716 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14755__delegate.call(this, x, p__14716);
};
G__14755.cljs$lang$maxFixedArity = 1;
G__14755.cljs$lang$applyTo = (function (arglist__14760){
var x = cljs.core.first(arglist__14760);
var p__14716 = cljs.core.rest(arglist__14760);
return G__14755__delegate.call(this, x, p__14716);
});
return G__14755;
})()
;
atom = function(x,var_args){
var p__14716 = var_args;
switch(arguments.length){
case  1 :
return atom__14751.call(this,x);
default:
return atom__14752.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14752.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14766 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14766))
{var validate__14770 = temp__3698__auto____14766;

if(cljs.core.truth_(validate__14770.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14772 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14772,new_value);
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
var swap_BANG___14777 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14778 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14780 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14781 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14782 = (function() { 
var G__14787__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14787 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14787__delegate.call(this, a, f, x, y, z, more);
};
G__14787.cljs$lang$maxFixedArity = 5;
G__14787.cljs$lang$applyTo = (function (arglist__14794){
var a = cljs.core.first(arglist__14794);
var f = cljs.core.first(cljs.core.next(arglist__14794));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14794)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14794))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14794)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14794)))));
return G__14787__delegate.call(this, a, f, x, y, z, more);
});
return G__14787;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14777.call(this,a,f);
case  3 :
return swap_BANG___14778.call(this,a,f,x);
case  4 :
return swap_BANG___14780.call(this,a,f,x,y);
case  5 :
return swap_BANG___14781.call(this,a,f,x,y,z);
default:
return swap_BANG___14782.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14782.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14799){
var iref = cljs.core.first(arglist__14799);
var f = cljs.core.first(cljs.core.next(arglist__14799));
var args = cljs.core.rest(cljs.core.next(arglist__14799));
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
var gensym__14804 = (function (){
return gensym.call(null,"G__");
});
var gensym__14805 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14804.call(this);
case  1 :
return gensym__14805.call(this,prefix_string);
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
var this__14831 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14831.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14831.state,this__14831.f);
}
return cljs.core.deref.call(null,this__14831.state);
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
delay.cljs$lang$applyTo = (function (arglist__14832){
var body = cljs.core.seq( arglist__14832 );;
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
var map__14932__14934 = options;
var map__14932__14935 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14932__14934))?cljs.core.apply.call(null,cljs.core.hash_map,map__14932__14934):map__14932__14934);
var keywordize_keys__14936 = cljs.core.get.call(null,map__14932__14935,"﷐'keywordize-keys");
var keyfn__14937 = (cljs.core.truth_(keywordize_keys__14936)?cljs.core.keyword:cljs.core.str);
var f__14944 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14942 = (function iter__14938(s__14939){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14939__14940 = s__14939;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14939__14940)))
{var k__14941 = cljs.core.first.call(null,s__14939__14940);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14937.call(null,k__14941),thisfn.call(null,(x[k__14941]))]),iter__14938.call(null,cljs.core.rest.call(null,s__14939__14940)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14942.call(null,cljs.core.js_keys.call(null,x));
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

return f__14944.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14962){
var x = cljs.core.first(arglist__14962);
var options = cljs.core.rest(arglist__14962);
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
var mem__14968 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14979__delegate = function (args){
var temp__3695__auto____14969 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14968),args);

if(cljs.core.truth_(temp__3695__auto____14969))
{var v__14970 = temp__3695__auto____14969;

return v__14970;
} else
{var ret__14974 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14968,cljs.core.assoc,args,ret__14974);
return ret__14974;
}
};
var G__14979 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14979__delegate.call(this, args);
};
G__14979.cljs$lang$maxFixedArity = 0;
G__14979.cljs$lang$applyTo = (function (arglist__14982){
var args = cljs.core.seq( arglist__14982 );;
return G__14979__delegate.call(this, args);
});
return G__14979;
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
var trampoline__14988 = (function (f){
while(true){
var ret__14987 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14987)))
{{
var G__14991 = ret__14987;
f = G__14991;
continue;
}
} else
{return ret__14987;
}
break;
}
});
var trampoline__14989 = (function() { 
var G__14995__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14995 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14995__delegate.call(this, f, args);
};
G__14995.cljs$lang$maxFixedArity = 1;
G__14995.cljs$lang$applyTo = (function (arglist__14996){
var f = cljs.core.first(arglist__14996);
var args = cljs.core.rest(arglist__14996);
return G__14995__delegate.call(this, f, args);
});
return G__14995;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14988.call(this,f);
default:
return trampoline__14989.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14989.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14998 = (function (){
return rand.call(null,1);
});
var rand__14999 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14998.call(this);
case  1 :
return rand__14999.call(this,n);
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
var k__15017 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15017,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15017,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15052 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15053 = (function (h,child,parent){
var or__3548__auto____15038 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15038))
{return or__3548__auto____15038;
} else
{var or__3548__auto____15039 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15039))
{return or__3548__auto____15039;
} else
{var and__3546__auto____15040 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15040))
{var and__3546__auto____15041 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15041))
{var and__3546__auto____15042 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15042))
{var ret__15043 = true;
var i__15044 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15045 = cljs.core.not.call(null,ret__15043);

if(cljs.core.truth_(or__3548__auto____15045))
{return or__3548__auto____15045;
} else
{return cljs.core._EQ_.call(null,i__15044,cljs.core.count.call(null,parent));
}
})()))
{return ret__15043;
} else
{{
var G__15058 = isa_QMARK_.call(null,h,child.call(null,i__15044),parent.call(null,i__15044));
var G__15059 = (i__15044 + 1);
ret__15043 = G__15058;
i__15044 = G__15059;
continue;
}
}
break;
}
} else
{return and__3546__auto____15042;
}
} else
{return and__3546__auto____15041;
}
} else
{return and__3546__auto____15040;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15052.call(this,h,child);
case  3 :
return isa_QMARK___15053.call(this,h,child,parent);
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
var parents__15067 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15068 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15067.call(this,h);
case  2 :
return parents__15068.call(this,h,tag);
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
var ancestors__15071 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15072 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15071.call(this,h);
case  2 :
return ancestors__15072.call(this,h,tag);
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
var descendants__15085 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15086 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15085.call(this,h);
case  2 :
return descendants__15086.call(this,h,tag);
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
var derive__15112 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15113 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15100 = "﷐'parents".call(null,h);
var td__15101 = "﷐'descendants".call(null,h);
var ta__15102 = "﷐'ancestors".call(null,h);
var tf__15104 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15111 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15100.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15102.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15102.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15100,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15104.call(null,"﷐'ancestors".call(null,h),tag,td__15101,parent,ta__15102),"﷐'descendants":tf__15104.call(null,"﷐'descendants".call(null,h),parent,ta__15102,tag,td__15101)});
})());

if(cljs.core.truth_(or__3548__auto____15111))
{return or__3548__auto____15111;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15112.call(this,h,tag);
case  3 :
return derive__15113.call(this,h,tag,parent);
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
var underive__15199 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15200 = (function (h,tag,parent){
var parentMap__15150 = "﷐'parents".call(null,h);
var childsParents__15153 = (cljs.core.truth_(parentMap__15150.call(null,tag))?cljs.core.disj.call(null,parentMap__15150.call(null,tag),parent):cljs.core.set([]));
var newParents__15155 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15153))?cljs.core.assoc.call(null,parentMap__15150,tag,childsParents__15153):cljs.core.dissoc.call(null,parentMap__15150,tag));
var deriv_seq__15168 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15091_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15091_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15091_SHARP_),cljs.core.second.call(null,p1__15091_SHARP_)));
}),cljs.core.seq.call(null,newParents__15155)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15150.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15092_SHARP_,p2__15093_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15092_SHARP_,p2__15093_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15168));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15199.call(this,h,tag);
case  3 :
return underive__15200.call(this,h,tag,parent);
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
var xprefs__15232 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15234 = (cljs.core.truth_((function (){var and__3546__auto____15233 = xprefs__15232;

if(cljs.core.truth_(and__3546__auto____15233))
{return xprefs__15232.call(null,y);
} else
{return and__3546__auto____15233;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15234))
{return or__3548__auto____15234;
} else
{var or__3548__auto____15238 = (function (){var ps__15236 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15236) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15236),prefer_table)))
{} else
{}
{
var G__15289 = cljs.core.rest.call(null,ps__15236);
ps__15236 = G__15289;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15238))
{return or__3548__auto____15238;
} else
{var or__3548__auto____15285 = (function (){var ps__15239 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15239) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15239),y,prefer_table)))
{} else
{}
{
var G__15290 = cljs.core.rest.call(null,ps__15239);
ps__15239 = G__15290;
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
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15293 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15293))
{return or__3548__auto____15293;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15348 = cljs.core.reduce.call(null,(function (be,p__15297){
var vec__15298__15299 = p__15297;
var k__15300 = cljs.core.nth.call(null,vec__15298__15299,0,null);
var ___15301 = cljs.core.nth.call(null,vec__15298__15299,1,null);
var e__15302 = vec__15298__15299;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15300)))
{var be2__15344 = (cljs.core.truth_((function (){var or__3548__auto____15304 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15304))
{return or__3548__auto____15304;
} else
{return cljs.core.dominates.call(null,k__15300,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15302:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15344),k__15300,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15300," and ",cljs.core.first.call(null,be2__15344),", and neither is preferred")));
}
return be2__15344;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15348))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15348));
return cljs.core.second.call(null,best_entry__15348);
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
if(cljs.core.truth_((function (){var and__3546__auto____15361 = mf;

if(cljs.core.truth_(and__3546__auto____15361))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15361;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15363 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15363))
{return or__3548__auto____15363;
} else
{var or__3548__auto____15367 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15367))
{return or__3548__auto____15367;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15387 = mf;

if(cljs.core.truth_(and__3546__auto____15387))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15387;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15388 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15388))
{return or__3548__auto____15388;
} else
{var or__3548__auto____15389 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15389))
{return or__3548__auto____15389;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15392 = mf;

if(cljs.core.truth_(and__3546__auto____15392))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15392;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15393 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15393))
{return or__3548__auto____15393;
} else
{var or__3548__auto____15394 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15394))
{return or__3548__auto____15394;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15395 = mf;

if(cljs.core.truth_(and__3546__auto____15395))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15395;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15396 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15396))
{return or__3548__auto____15396;
} else
{var or__3548__auto____15397 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15397))
{return or__3548__auto____15397;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15400 = mf;

if(cljs.core.truth_(and__3546__auto____15400))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15400;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15402 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15402))
{return or__3548__auto____15402;
} else
{var or__3548__auto____15404 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15404))
{return or__3548__auto____15404;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15405 = mf;

if(cljs.core.truth_(and__3546__auto____15405))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15405;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15408 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15408))
{return or__3548__auto____15408;
} else
{var or__3548__auto____15409 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15409))
{return or__3548__auto____15409;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15410 = mf;

if(cljs.core.truth_(and__3546__auto____15410))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15410;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15411 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15411))
{return or__3548__auto____15411;
} else
{var or__3548__auto____15412 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15412))
{return or__3548__auto____15412;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15413 = mf;

if(cljs.core.truth_(and__3546__auto____15413))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15413;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15414 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15414))
{return or__3548__auto____15414;
} else
{var or__3548__auto____15415 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15415))
{return or__3548__auto____15415;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15436 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15437 = cljs.core._get_method.call(null,mf,dispatch_val__15436);

if(cljs.core.truth_(target_fn__15437))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15436)));
}
return cljs.core.apply.call(null,target_fn__15437,args);
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
var this__15448 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15451 = this;
cljs.core.swap_BANG_.call(null,this__15451.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15451.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15451.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15451.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15454 = this;
cljs.core.swap_BANG_.call(null,this__15454.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15454.method_cache,this__15454.method_table,this__15454.cached_hierarchy,this__15454.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15456 = this;
cljs.core.swap_BANG_.call(null,this__15456.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15456.method_cache,this__15456.method_table,this__15456.cached_hierarchy,this__15456.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15457 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15457.cached_hierarchy),cljs.core.deref.call(null,this__15457.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15457.method_cache,this__15457.method_table,this__15457.cached_hierarchy,this__15457.hierarchy);
}
var temp__3695__auto____15460 = cljs.core.deref.call(null,this__15457.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15460))
{var target_fn__15461 = temp__3695__auto____15460;

return target_fn__15461;
} else
{var temp__3695__auto____15462 = cljs.core.find_and_cache_best_method.call(null,this__15457.name,dispatch_val,this__15457.hierarchy,this__15457.method_table,this__15457.prefer_table,this__15457.method_cache,this__15457.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15462))
{var target_fn__15463 = temp__3695__auto____15462;

return target_fn__15463;
} else
{return cljs.core.deref.call(null,this__15457.method_table).call(null,this__15457.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15464 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15464.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15464.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15464.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15464.method_cache,this__15464.method_table,this__15464.cached_hierarchy,this__15464.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15466 = this;
return cljs.core.deref.call(null,this__15466.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15467 = this;
return cljs.core.deref.call(null,this__15467.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15469 = this;
return cljs.core.do_dispatch.call(null,mf,this__15469.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15475__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15475 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15475__delegate.call(this, _, args);
};
G__15475.cljs$lang$maxFixedArity = 1;
G__15475.cljs$lang$applyTo = (function (arglist__15476){
var _ = cljs.core.first(arglist__15476);
var args = cljs.core.rest(arglist__15476);
return G__15475__delegate.call(this, _, args);
});
return G__15475;
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
