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
var or__3548__auto____7334 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7334))
{return or__3548__auto____7334;
} else
{var or__3548__auto____7453 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7453))
{return or__3548__auto____7453;
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
var _invoke__7704 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7514 = this$;

if(cljs.core.truth_(and__3546__auto____7514))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7514;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7516 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7516))
{return or__3548__auto____7516;
} else
{var or__3548__auto____7519 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7519))
{return or__3548__auto____7519;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7705 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7520 = this$;

if(cljs.core.truth_(and__3546__auto____7520))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7520;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
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
})().call(null,this$,a);
}
});
var _invoke__7706 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7533 = this$;

if(cljs.core.truth_(and__3546__auto____7533))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7533;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7536 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7536))
{return or__3548__auto____7536;
} else
{var or__3548__auto____7541 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7541))
{return or__3548__auto____7541;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7707 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7573 = this$;

if(cljs.core.truth_(and__3546__auto____7573))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7573;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7575 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7575))
{return or__3548__auto____7575;
} else
{var or__3548__auto____7576 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7576))
{return or__3548__auto____7576;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7708 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7578 = this$;

if(cljs.core.truth_(and__3546__auto____7578))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7578;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7579 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7579))
{return or__3548__auto____7579;
} else
{var or__3548__auto____7581 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7581))
{return or__3548__auto____7581;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7709 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7583 = this$;

if(cljs.core.truth_(and__3546__auto____7583))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7583;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7585 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7585))
{return or__3548__auto____7585;
} else
{var or__3548__auto____7587 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7587))
{return or__3548__auto____7587;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7710 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7589 = this$;

if(cljs.core.truth_(and__3546__auto____7589))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7589;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7591 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7591))
{return or__3548__auto____7591;
} else
{var or__3548__auto____7592 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7592))
{return or__3548__auto____7592;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7711 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7595 = this$;

if(cljs.core.truth_(and__3546__auto____7595))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7595;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
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
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7712 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7601 = this$;

if(cljs.core.truth_(and__3546__auto____7601))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7601;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7602 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7602))
{return or__3548__auto____7602;
} else
{var or__3548__auto____7604 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7604))
{return or__3548__auto____7604;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7713 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7606 = this$;

if(cljs.core.truth_(and__3546__auto____7606))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7606;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7608 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7608))
{return or__3548__auto____7608;
} else
{var or__3548__auto____7610 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7610))
{return or__3548__auto____7610;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7714 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7612 = this$;

if(cljs.core.truth_(and__3546__auto____7612))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7612;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7614 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7614))
{return or__3548__auto____7614;
} else
{var or__3548__auto____7615 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7615))
{return or__3548__auto____7615;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7715 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7616 = this$;

if(cljs.core.truth_(and__3546__auto____7616))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7616;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7629 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7629))
{return or__3548__auto____7629;
} else
{var or__3548__auto____7640 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7640))
{return or__3548__auto____7640;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7716 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7641 = this$;

if(cljs.core.truth_(and__3546__auto____7641))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7641;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7642 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7642))
{return or__3548__auto____7642;
} else
{var or__3548__auto____7643 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7643))
{return or__3548__auto____7643;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7717 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7644 = this$;

if(cljs.core.truth_(and__3546__auto____7644))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7644;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7645 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7645))
{return or__3548__auto____7645;
} else
{var or__3548__auto____7646 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7646))
{return or__3548__auto____7646;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7718 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7647 = this$;

if(cljs.core.truth_(and__3546__auto____7647))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7647;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7649 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7649))
{return or__3548__auto____7649;
} else
{var or__3548__auto____7650 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7650))
{return or__3548__auto____7650;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7719 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7653 = this$;

if(cljs.core.truth_(and__3546__auto____7653))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7653;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7654 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7654))
{return or__3548__auto____7654;
} else
{var or__3548__auto____7655 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7655))
{return or__3548__auto____7655;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7720 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7656 = this$;

if(cljs.core.truth_(and__3546__auto____7656))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7656;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7672 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7672))
{return or__3548__auto____7672;
} else
{var or__3548__auto____7673 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7673))
{return or__3548__auto____7673;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7721 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7674 = this$;

if(cljs.core.truth_(and__3546__auto____7674))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7674;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7675 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7675))
{return or__3548__auto____7675;
} else
{var or__3548__auto____7676 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7676))
{return or__3548__auto____7676;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7722 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7681 = this$;

if(cljs.core.truth_(and__3546__auto____7681))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7681;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7683 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7683))
{return or__3548__auto____7683;
} else
{var or__3548__auto____7684 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7684))
{return or__3548__auto____7684;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7723 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7687 = this$;

if(cljs.core.truth_(and__3546__auto____7687))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7687;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7689 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7689))
{return or__3548__auto____7689;
} else
{var or__3548__auto____7691 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7691))
{return or__3548__auto____7691;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7724 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7693 = this$;

if(cljs.core.truth_(and__3546__auto____7693))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7693;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7696 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7696))
{return or__3548__auto____7696;
} else
{var or__3548__auto____7699 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7699))
{return or__3548__auto____7699;
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
return _invoke__7704.call(this,this$);
case  2 :
return _invoke__7705.call(this,this$,a);
case  3 :
return _invoke__7706.call(this,this$,a,b);
case  4 :
return _invoke__7707.call(this,this$,a,b,c);
case  5 :
return _invoke__7708.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7709.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7710.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7711.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7712.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7713.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7714.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7715.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7716.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7717.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7718.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7719.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7720.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7721.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7722.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7723.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7724.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7816 = coll;

if(cljs.core.truth_(and__3546__auto____7816))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7816;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7817 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7817))
{return or__3548__auto____7817;
} else
{var or__3548__auto____7818 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7818))
{return or__3548__auto____7818;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7821 = coll;

if(cljs.core.truth_(and__3546__auto____7821))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7821;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7824 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7824))
{return or__3548__auto____7824;
} else
{var or__3548__auto____7826 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7826))
{return or__3548__auto____7826;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7830 = coll;

if(cljs.core.truth_(and__3546__auto____7830))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7830;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7832 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7832))
{return or__3548__auto____7832;
} else
{var or__3548__auto____7833 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7833))
{return or__3548__auto____7833;
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
var _nth__7840 = (function (coll,n){
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
var _nth__7841 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7837 = coll;

if(cljs.core.truth_(and__3546__auto____7837))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7837;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7838 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7838))
{return or__3548__auto____7838;
} else
{var or__3548__auto____7839 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7839))
{return or__3548__auto____7839;
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
return _nth__7840.call(this,coll,n);
case  3 :
return _nth__7841.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7844 = coll;

if(cljs.core.truth_(and__3546__auto____7844))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7844;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7846 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7846))
{return or__3548__auto____7846;
} else
{var or__3548__auto____7848 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7848))
{return or__3548__auto____7848;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7849 = coll;

if(cljs.core.truth_(and__3546__auto____7849))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7849;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7850 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7850))
{return or__3548__auto____7850;
} else
{var or__3548__auto____7851 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7851))
{return or__3548__auto____7851;
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
var _lookup__7861 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7855 = o;

if(cljs.core.truth_(and__3546__auto____7855))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7855;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7856 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7856))
{return or__3548__auto____7856;
} else
{var or__3548__auto____7857 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7857))
{return or__3548__auto____7857;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7862 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7858 = o;

if(cljs.core.truth_(and__3546__auto____7858))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7858;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7859 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7859))
{return or__3548__auto____7859;
} else
{var or__3548__auto____7860 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
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
return _lookup__7861.call(this,o,k);
case  3 :
return _lookup__7862.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7942 = coll;

if(cljs.core.truth_(and__3546__auto____7942))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7942;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7944 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7944))
{return or__3548__auto____7944;
} else
{var or__3548__auto____7945 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7945))
{return or__3548__auto____7945;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7948 = coll;

if(cljs.core.truth_(and__3546__auto____7948))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7948;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7949 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7949))
{return or__3548__auto____7949;
} else
{var or__3548__auto____7950 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7950))
{return or__3548__auto____7950;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7964 = coll;

if(cljs.core.truth_(and__3546__auto____7964))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7964;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7966 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7966))
{return or__3548__auto____7966;
} else
{var or__3548__auto____7968 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7968))
{return or__3548__auto____7968;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7969 = coll;

if(cljs.core.truth_(and__3546__auto____7969))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7969;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7971 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7971))
{return or__3548__auto____7971;
} else
{var or__3548__auto____7973 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7973))
{return or__3548__auto____7973;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7981 = coll;

if(cljs.core.truth_(and__3546__auto____7981))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7981;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7983 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7983))
{return or__3548__auto____7983;
} else
{var or__3548__auto____7985 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7985))
{return or__3548__auto____7985;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7987 = coll;

if(cljs.core.truth_(and__3546__auto____7987))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7987;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7988 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7988))
{return or__3548__auto____7988;
} else
{var or__3548__auto____7989 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7989))
{return or__3548__auto____7989;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7995 = coll;

if(cljs.core.truth_(and__3546__auto____7995))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7995;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7999 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7999))
{return or__3548__auto____7999;
} else
{var or__3548__auto____8001 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8001))
{return or__3548__auto____8001;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8008 = o;

if(cljs.core.truth_(and__3546__auto____8008))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8008;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8011 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8011))
{return or__3548__auto____8011;
} else
{var or__3548__auto____8013 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8013))
{return or__3548__auto____8013;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8016 = o;

if(cljs.core.truth_(and__3546__auto____8016))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8016;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8019 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
} else
{var or__3548__auto____8021 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8021))
{return or__3548__auto____8021;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8116 = o;

if(cljs.core.truth_(and__3546__auto____8116))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8116;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8117 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8117))
{return or__3548__auto____8117;
} else
{var or__3548__auto____8118 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8118))
{return or__3548__auto____8118;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8122 = o;

if(cljs.core.truth_(and__3546__auto____8122))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8122;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8123 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8123))
{return or__3548__auto____8123;
} else
{var or__3548__auto____8124 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8124))
{return or__3548__auto____8124;
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
var _reduce__8140 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8129 = coll;

if(cljs.core.truth_(and__3546__auto____8129))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8129;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8132 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8132))
{return or__3548__auto____8132;
} else
{var or__3548__auto____8133 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8133))
{return or__3548__auto____8133;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8141 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8134 = coll;

if(cljs.core.truth_(and__3546__auto____8134))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8134;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8136 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8136))
{return or__3548__auto____8136;
} else
{var or__3548__auto____8138 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8138))
{return or__3548__auto____8138;
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
return _reduce__8140.call(this,coll,f);
case  3 :
return _reduce__8141.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8144 = o;

if(cljs.core.truth_(and__3546__auto____8144))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8144;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8145 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8145))
{return or__3548__auto____8145;
} else
{var or__3548__auto____8146 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8146))
{return or__3548__auto____8146;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8147 = o;

if(cljs.core.truth_(and__3546__auto____8147))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8147;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8148 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8148))
{return or__3548__auto____8148;
} else
{var or__3548__auto____8150 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8150))
{return or__3548__auto____8150;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8153 = o;

if(cljs.core.truth_(and__3546__auto____8153))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8153;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8154 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8154))
{return or__3548__auto____8154;
} else
{var or__3548__auto____8160 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8160))
{return or__3548__auto____8160;
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
if(cljs.core.truth_((function (){var and__3546__auto____8170 = o;

if(cljs.core.truth_(and__3546__auto____8170))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8170;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8171 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8171))
{return or__3548__auto____8171;
} else
{var or__3548__auto____8172 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8172))
{return or__3548__auto____8172;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8205 = d;

if(cljs.core.truth_(and__3546__auto____8205))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8205;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8210 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8210))
{return or__3548__auto____8210;
} else
{var or__3548__auto____8211 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8211))
{return or__3548__auto____8211;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8212 = this$;

if(cljs.core.truth_(and__3546__auto____8212))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8212;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8213 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8213))
{return or__3548__auto____8213;
} else
{var or__3548__auto____8214 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8214))
{return or__3548__auto____8214;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8217 = this$;

if(cljs.core.truth_(and__3546__auto____8217))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8217;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8220 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8220))
{return or__3548__auto____8220;
} else
{var or__3548__auto____8221 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8221))
{return or__3548__auto____8221;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8224 = this$;

if(cljs.core.truth_(and__3546__auto____8224))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8224;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8229 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8229))
{return or__3548__auto____8229;
} else
{var or__3548__auto____8230 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8230))
{return or__3548__auto____8230;
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
var G__8270 = null;
var G__8270__8271 = (function (o,k){
return null;
});
var G__8270__8272 = (function (o,k,not_found){
return not_found;
});
G__8270 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8270__8271.call(this,o,k);
case  3 :
return G__8270__8272.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8270;
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
var G__8277 = null;
var G__8277__8279 = (function (_,f){
return f.call(null);
});
var G__8277__8280 = (function (_,f,start){
return start;
});
G__8277 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8277__8279.call(this,_,f);
case  3 :
return G__8277__8280.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8277;
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
var G__8310 = null;
var G__8310__8313 = (function (_,n){
return null;
});
var G__8310__8315 = (function (_,n,not_found){
return not_found;
});
G__8310 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8310__8313.call(this,_,n);
case  3 :
return G__8310__8315.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8310;
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
var ci_reduce__8378 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8368 = cljs.core._nth.call(null,cicoll,0);
var n__8369 = 1;

while(true){
if(cljs.core.truth_((n__8369 < cljs.core._count.call(null,cicoll))))
{{
var G__8382 = f.call(null,val__8368,cljs.core._nth.call(null,cicoll,n__8369));
var G__8383 = (n__8369 + 1);
val__8368 = G__8382;
n__8369 = G__8383;
continue;
}
} else
{return val__8368;
}
break;
}
}
});
var ci_reduce__8379 = (function (cicoll,f,val){
var val__8374 = val;
var n__8375 = 0;

while(true){
if(cljs.core.truth_((n__8375 < cljs.core._count.call(null,cicoll))))
{{
var G__8388 = f.call(null,val__8374,cljs.core._nth.call(null,cicoll,n__8375));
var G__8389 = (n__8375 + 1);
val__8374 = G__8388;
n__8375 = G__8389;
continue;
}
} else
{return val__8374;
}
break;
}
});
var ci_reduce__8380 = (function (cicoll,f,val,idx){
var val__8376 = val;
var n__8377 = idx;

while(true){
if(cljs.core.truth_((n__8377 < cljs.core._count.call(null,cicoll))))
{{
var G__8393 = f.call(null,val__8376,cljs.core._nth.call(null,cicoll,n__8377));
var G__8395 = (n__8377 + 1);
val__8376 = G__8393;
n__8377 = G__8395;
continue;
}
} else
{return val__8376;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8378.call(this,cicoll,f);
case  3 :
return ci_reduce__8379.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8380.call(this,cicoll,f,val,idx);
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
var this__8396 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8421 = null;
var G__8421__8422 = (function (_,f){
var this__8397 = this;
return cljs.core.ci_reduce.call(null,this__8397.a,f,(this__8397.a[this__8397.i]),(this__8397.i + 1));
});
var G__8421__8423 = (function (_,f,start){
var this__8398 = this;
return cljs.core.ci_reduce.call(null,this__8398.a,f,start,this__8398.i);
});
G__8421 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8421__8422.call(this,_,f);
case  3 :
return G__8421__8423.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8421;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8399 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8400 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8425 = null;
var G__8425__8426 = (function (coll,n){
var this__8401 = this;
var i__8402 = (n + this__8401.i);

if(cljs.core.truth_((i__8402 < this__8401.a.length)))
{return (this__8401.a[i__8402]);
} else
{return null;
}
});
var G__8425__8427 = (function (coll,n,not_found){
var this__8403 = this;
var i__8404 = (n + this__8403.i);

if(cljs.core.truth_((i__8404 < this__8403.a.length)))
{return (this__8403.a[i__8404]);
} else
{return not_found;
}
});
G__8425 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8425__8426.call(this,coll,n);
case  3 :
return G__8425__8427.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8425;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8409 = this;
return (this__8409.a.length - this__8409.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8418 = this;
return (this__8418.a[this__8418.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8419 = this;
if(cljs.core.truth_(((this__8419.i + 1) < this__8419.a.length)))
{return (new cljs.core.IndexedSeq(this__8419.a,(this__8419.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8420 = this;
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
var G__8463 = null;
var G__8463__8464 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8463__8465 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8463 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8463__8464.call(this,array,f);
case  3 :
return G__8463__8465.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8463;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8467 = null;
var G__8467__8468 = (function (array,k){
return (array[k]);
});
var G__8467__8469 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8467 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8467__8468.call(this,array,k);
case  3 :
return G__8467__8469.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8467;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8471 = null;
var G__8471__8472 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8471__8473 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8471 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8471__8472.call(this,array,n);
case  3 :
return G__8471__8473.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8471;
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
var temp__3698__auto____8497 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8497))
{var s__8498 = temp__3698__auto____8497;

return cljs.core._first.call(null,s__8498);
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
var G__8549 = cljs.core.next.call(null,s);
s = G__8549;
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
var s__8554 = cljs.core.seq.call(null,x);
var n__8556 = 0;

while(true){
if(cljs.core.truth_(s__8554))
{{
var G__8563 = cljs.core.next.call(null,s__8554);
var G__8564 = (n__8556 + 1);
s__8554 = G__8563;
n__8556 = G__8564;
continue;
}
} else
{return n__8556;
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
var conj__8565 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8566 = (function() { 
var G__8571__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8572 = conj.call(null,coll,x);
var G__8573 = cljs.core.first.call(null,xs);
var G__8574 = cljs.core.next.call(null,xs);
coll = G__8572;
x = G__8573;
xs = G__8574;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8571 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8571__delegate.call(this, coll, x, xs);
};
G__8571.cljs$lang$maxFixedArity = 2;
G__8571.cljs$lang$applyTo = (function (arglist__8576){
var coll = cljs.core.first(arglist__8576);
var x = cljs.core.first(cljs.core.next(arglist__8576));
var xs = cljs.core.rest(cljs.core.next(arglist__8576));
return G__8571__delegate.call(this, coll, x, xs);
});
return G__8571;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8565.call(this,coll,x);
default:
return conj__8566.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8566.cljs$lang$applyTo;
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
var nth__8595 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8596 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8595.call(this,coll,n);
case  3 :
return nth__8596.call(this,coll,n,not_found);
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
var get__8608 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8609 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8608.call(this,o,k);
case  3 :
return get__8609.call(this,o,k,not_found);
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
var assoc__8627 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8628 = (function() { 
var G__8630__delegate = function (coll,k,v,kvs){
while(true){
var ret__8618 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8631 = ret__8618;
var G__8632 = cljs.core.first.call(null,kvs);
var G__8633 = cljs.core.second.call(null,kvs);
var G__8634 = cljs.core.nnext.call(null,kvs);
coll = G__8631;
k = G__8632;
v = G__8633;
kvs = G__8634;
continue;
}
} else
{return ret__8618;
}
break;
}
};
var G__8630 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8630__delegate.call(this, coll, k, v, kvs);
};
G__8630.cljs$lang$maxFixedArity = 3;
G__8630.cljs$lang$applyTo = (function (arglist__8635){
var coll = cljs.core.first(arglist__8635);
var k = cljs.core.first(cljs.core.next(arglist__8635));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8635)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8635)));
return G__8630__delegate.call(this, coll, k, v, kvs);
});
return G__8630;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8627.call(this,coll,k,v);
default:
return assoc__8628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8628.cljs$lang$applyTo;
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
var dissoc__8655 = (function (coll){
return coll;
});
var dissoc__8656 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8657 = (function() { 
var G__8659__delegate = function (coll,k,ks){
while(true){
var ret__8647 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8661 = ret__8647;
var G__8662 = cljs.core.first.call(null,ks);
var G__8663 = cljs.core.next.call(null,ks);
coll = G__8661;
k = G__8662;
ks = G__8663;
continue;
}
} else
{return ret__8647;
}
break;
}
};
var G__8659 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8659__delegate.call(this, coll, k, ks);
};
G__8659.cljs$lang$maxFixedArity = 2;
G__8659.cljs$lang$applyTo = (function (arglist__8665){
var coll = cljs.core.first(arglist__8665);
var k = cljs.core.first(cljs.core.next(arglist__8665));
var ks = cljs.core.rest(cljs.core.next(arglist__8665));
return G__8659__delegate.call(this, coll, k, ks);
});
return G__8659;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8655.call(this,coll);
case  2 :
return dissoc__8656.call(this,coll,k);
default:
return dissoc__8657.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8657.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8671 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8672 = x__445__auto____8671;

if(cljs.core.truth_(and__3546__auto____8672))
{var and__3546__auto____8673 = x__445__auto____8671.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8673))
{return cljs.core.not.call(null,x__445__auto____8671.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8673;
}
} else
{return and__3546__auto____8672;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8671);
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
var disj__8704 = (function (coll){
return coll;
});
var disj__8705 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8706 = (function() { 
var G__8710__delegate = function (coll,k,ks){
while(true){
var ret__8703 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8713 = ret__8703;
var G__8714 = cljs.core.first.call(null,ks);
var G__8715 = cljs.core.next.call(null,ks);
coll = G__8713;
k = G__8714;
ks = G__8715;
continue;
}
} else
{return ret__8703;
}
break;
}
};
var G__8710 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8710__delegate.call(this, coll, k, ks);
};
G__8710.cljs$lang$maxFixedArity = 2;
G__8710.cljs$lang$applyTo = (function (arglist__8721){
var coll = cljs.core.first(arglist__8721);
var k = cljs.core.first(cljs.core.next(arglist__8721));
var ks = cljs.core.rest(cljs.core.next(arglist__8721));
return G__8710__delegate.call(this, coll, k, ks);
});
return G__8710;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8704.call(this,coll);
case  2 :
return disj__8705.call(this,coll,k);
default:
return disj__8706.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8706.cljs$lang$applyTo;
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
{var x__445__auto____8738 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8742 = x__445__auto____8738;

if(cljs.core.truth_(and__3546__auto____8742))
{var and__3546__auto____8744 = x__445__auto____8738.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8744))
{return cljs.core.not.call(null,x__445__auto____8738.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8744;
}
} else
{return and__3546__auto____8742;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8738);
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
{var x__445__auto____8753 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8754 = x__445__auto____8753;

if(cljs.core.truth_(and__3546__auto____8754))
{var and__3546__auto____8757 = x__445__auto____8753.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8757))
{return cljs.core.not.call(null,x__445__auto____8753.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8757;
}
} else
{return and__3546__auto____8754;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8753);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8761 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8762 = x__445__auto____8761;

if(cljs.core.truth_(and__3546__auto____8762))
{var and__3546__auto____8763 = x__445__auto____8761.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8763))
{return cljs.core.not.call(null,x__445__auto____8761.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8763;
}
} else
{return and__3546__auto____8762;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8761);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8840 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8841 = x__445__auto____8840;

if(cljs.core.truth_(and__3546__auto____8841))
{var and__3546__auto____8842 = x__445__auto____8840.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8842))
{return cljs.core.not.call(null,x__445__auto____8840.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8842;
}
} else
{return and__3546__auto____8841;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8840);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8851 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8852 = x__445__auto____8851;

if(cljs.core.truth_(and__3546__auto____8852))
{var and__3546__auto____8853 = x__445__auto____8851.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8853))
{return cljs.core.not.call(null,x__445__auto____8851.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8853;
}
} else
{return and__3546__auto____8852;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8851);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8859 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8860 = x__445__auto____8859;

if(cljs.core.truth_(and__3546__auto____8860))
{var and__3546__auto____8861 = x__445__auto____8859.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8861))
{return cljs.core.not.call(null,x__445__auto____8859.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8861;
}
} else
{return and__3546__auto____8860;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8859);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8863 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8866 = x__445__auto____8863;

if(cljs.core.truth_(and__3546__auto____8866))
{var and__3546__auto____8869 = x__445__auto____8863.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8869))
{return cljs.core.not.call(null,x__445__auto____8863.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8869;
}
} else
{return and__3546__auto____8866;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8863);
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
{var x__445__auto____8882 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8883 = x__445__auto____8882;

if(cljs.core.truth_(and__3546__auto____8883))
{var and__3546__auto____8884 = x__445__auto____8882.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8884))
{return cljs.core.not.call(null,x__445__auto____8882.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8884;
}
} else
{return and__3546__auto____8883;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8882);
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
var and__3546__auto____8912 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8912))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8915 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8915))
{return or__3548__auto____8915;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8912;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8921 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8921))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8921;
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
var and__3546__auto____8930 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8930))
{return (n == n.toFixed());
} else
{return and__3546__auto____8930;
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
if(cljs.core.truth_((function (){var and__3546__auto____8950 = coll;

if(cljs.core.truth_(and__3546__auto____8950))
{var and__3546__auto____8951 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8951))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8951;
}
} else
{return and__3546__auto____8950;
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
var distinct_QMARK___8975 = (function (x){
return true;
});
var distinct_QMARK___8976 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8977 = (function() { 
var G__8993__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8965 = cljs.core.set([y,x]);
var xs__8966 = more;

while(true){
var x__8967 = cljs.core.first.call(null,xs__8966);
var etc__8968 = cljs.core.next.call(null,xs__8966);

if(cljs.core.truth_(xs__8966))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8965,x__8967)))
{return false;
} else
{{
var G__8995 = cljs.core.conj.call(null,s__8965,x__8967);
var G__8996 = etc__8968;
s__8965 = G__8995;
xs__8966 = G__8996;
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
var G__8993 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8993__delegate.call(this, x, y, more);
};
G__8993.cljs$lang$maxFixedArity = 2;
G__8993.cljs$lang$applyTo = (function (arglist__8999){
var x = cljs.core.first(arglist__8999);
var y = cljs.core.first(cljs.core.next(arglist__8999));
var more = cljs.core.rest(cljs.core.next(arglist__8999));
return G__8993__delegate.call(this, x, y, more);
});
return G__8993;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8975.call(this,x);
case  2 :
return distinct_QMARK___8976.call(this,x,y);
default:
return distinct_QMARK___8977.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8977.cljs$lang$applyTo;
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
var r__9010 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9010)))
{return r__9010;
} else
{if(cljs.core.truth_(r__9010))
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
var sort__9022 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9023 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9018 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9018,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9018);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9022.call(this,comp);
case  2 :
return sort__9023.call(this,comp,coll);
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
var sort_by__9035 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9036 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9035.call(this,keyfn,comp);
case  3 :
return sort_by__9036.call(this,keyfn,comp,coll);
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
var reduce__9045 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9046 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9045.call(this,f,val);
case  3 :
return reduce__9046.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9060 = (function (f,coll){
var temp__3695__auto____9052 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9052))
{var s__9053 = temp__3695__auto____9052;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9053),cljs.core.next.call(null,s__9053));
} else
{return f.call(null);
}
});
var seq_reduce__9061 = (function (f,val,coll){
var val__9054 = val;
var coll__9055 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9055))
{{
var G__9068 = f.call(null,val__9054,cljs.core.first.call(null,coll__9055));
var G__9069 = cljs.core.next.call(null,coll__9055);
val__9054 = G__9068;
coll__9055 = G__9069;
continue;
}
} else
{return val__9054;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9060.call(this,f,val);
case  3 :
return seq_reduce__9061.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9070 = null;
var G__9070__9072 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9070__9074 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9070 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9070__9072.call(this,coll,f);
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
var _PLUS___9105 = (function (){
return 0;
});
var _PLUS___9106 = (function (x){
return x;
});
var _PLUS___9107 = (function (x,y){
return (x + y);
});
var _PLUS___9108 = (function() { 
var G__9113__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9113 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9113__delegate.call(this, x, y, more);
};
G__9113.cljs$lang$maxFixedArity = 2;
G__9113.cljs$lang$applyTo = (function (arglist__9125){
var x = cljs.core.first(arglist__9125);
var y = cljs.core.first(cljs.core.next(arglist__9125));
var more = cljs.core.rest(cljs.core.next(arglist__9125));
return G__9113__delegate.call(this, x, y, more);
});
return G__9113;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9105.call(this);
case  1 :
return _PLUS___9106.call(this,x);
case  2 :
return _PLUS___9107.call(this,x,y);
default:
return _PLUS___9108.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9108.cljs$lang$applyTo;
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
var ___9134 = (function (x){
return (- x);
});
var ___9136 = (function (x,y){
return (x - y);
});
var ___9137 = (function() { 
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
G__9142.cljs$lang$applyTo = (function (arglist__9143){
var x = cljs.core.first(arglist__9143);
var y = cljs.core.first(cljs.core.next(arglist__9143));
var more = cljs.core.rest(cljs.core.next(arglist__9143));
return G__9142__delegate.call(this, x, y, more);
});
return G__9142;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9134.call(this,x);
case  2 :
return ___9136.call(this,x,y);
default:
return ___9137.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9137.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9159 = (function (){
return 1;
});
var _STAR___9160 = (function (x){
return x;
});
var _STAR___9161 = (function (x,y){
return (x * y);
});
var _STAR___9162 = (function() { 
var G__9164__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9164 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9164__delegate.call(this, x, y, more);
};
G__9164.cljs$lang$maxFixedArity = 2;
G__9164.cljs$lang$applyTo = (function (arglist__9165){
var x = cljs.core.first(arglist__9165);
var y = cljs.core.first(cljs.core.next(arglist__9165));
var more = cljs.core.rest(cljs.core.next(arglist__9165));
return G__9164__delegate.call(this, x, y, more);
});
return G__9164;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9159.call(this);
case  1 :
return _STAR___9160.call(this,x);
case  2 :
return _STAR___9161.call(this,x,y);
default:
return _STAR___9162.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9162.cljs$lang$applyTo;
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
var _SLASH___9178 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9179 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9180 = (function() { 
var G__9182__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9182 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9182__delegate.call(this, x, y, more);
};
G__9182.cljs$lang$maxFixedArity = 2;
G__9182.cljs$lang$applyTo = (function (arglist__9183){
var x = cljs.core.first(arglist__9183);
var y = cljs.core.first(cljs.core.next(arglist__9183));
var more = cljs.core.rest(cljs.core.next(arglist__9183));
return G__9182__delegate.call(this, x, y, more);
});
return G__9182;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9178.call(this,x);
case  2 :
return _SLASH___9179.call(this,x,y);
default:
return _SLASH___9180.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9180.cljs$lang$applyTo;
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
var _LT___9200 = (function (x){
return true;
});
var _LT___9201 = (function (x,y){
return (x < y);
});
var _LT___9202 = (function() { 
var G__9204__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9205 = y;
var G__9206 = cljs.core.first.call(null,more);
var G__9207 = cljs.core.next.call(null,more);
x = G__9205;
y = G__9206;
more = G__9207;
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
var G__9204 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9204__delegate.call(this, x, y, more);
};
G__9204.cljs$lang$maxFixedArity = 2;
G__9204.cljs$lang$applyTo = (function (arglist__9208){
var x = cljs.core.first(arglist__9208);
var y = cljs.core.first(cljs.core.next(arglist__9208));
var more = cljs.core.rest(cljs.core.next(arglist__9208));
return G__9204__delegate.call(this, x, y, more);
});
return G__9204;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9200.call(this,x);
case  2 :
return _LT___9201.call(this,x,y);
default:
return _LT___9202.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9202.cljs$lang$applyTo;
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
var _LT__EQ___9223 = (function (x){
return true;
});
var _LT__EQ___9224 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9225 = (function() { 
var G__9227__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9228 = y;
var G__9229 = cljs.core.first.call(null,more);
var G__9230 = cljs.core.next.call(null,more);
x = G__9228;
y = G__9229;
more = G__9230;
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
var G__9227 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9227__delegate.call(this, x, y, more);
};
G__9227.cljs$lang$maxFixedArity = 2;
G__9227.cljs$lang$applyTo = (function (arglist__9231){
var x = cljs.core.first(arglist__9231);
var y = cljs.core.first(cljs.core.next(arglist__9231));
var more = cljs.core.rest(cljs.core.next(arglist__9231));
return G__9227__delegate.call(this, x, y, more);
});
return G__9227;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9223.call(this,x);
case  2 :
return _LT__EQ___9224.call(this,x,y);
default:
return _LT__EQ___9225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9225.cljs$lang$applyTo;
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
var _GT___9358 = (function (x){
return true;
});
var _GT___9359 = (function (x,y){
return (x > y);
});
var _GT___9360 = (function() { 
var G__9362__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
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
{return (y > cljs.core.first.call(null,more));
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
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9358.call(this,x);
case  2 :
return _GT___9359.call(this,x,y);
default:
return _GT___9360.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9360.cljs$lang$applyTo;
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
var _GT__EQ___9378 = (function (x){
return true;
});
var _GT__EQ___9379 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9380 = (function() { 
var G__9385__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9386 = y;
var G__9387 = cljs.core.first.call(null,more);
var G__9388 = cljs.core.next.call(null,more);
x = G__9386;
y = G__9387;
more = G__9388;
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
var G__9385 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9385__delegate.call(this, x, y, more);
};
G__9385.cljs$lang$maxFixedArity = 2;
G__9385.cljs$lang$applyTo = (function (arglist__9394){
var x = cljs.core.first(arglist__9394);
var y = cljs.core.first(cljs.core.next(arglist__9394));
var more = cljs.core.rest(cljs.core.next(arglist__9394));
return G__9385__delegate.call(this, x, y, more);
});
return G__9385;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9378.call(this,x);
case  2 :
return _GT__EQ___9379.call(this,x,y);
default:
return _GT__EQ___9380.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9380.cljs$lang$applyTo;
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
var max__9413 = (function (x){
return x;
});
var max__9414 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9415 = (function() { 
var G__9418__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9418 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9418__delegate.call(this, x, y, more);
};
G__9418.cljs$lang$maxFixedArity = 2;
G__9418.cljs$lang$applyTo = (function (arglist__9419){
var x = cljs.core.first(arglist__9419);
var y = cljs.core.first(cljs.core.next(arglist__9419));
var more = cljs.core.rest(cljs.core.next(arglist__9419));
return G__9418__delegate.call(this, x, y, more);
});
return G__9418;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9413.call(this,x);
case  2 :
return max__9414.call(this,x,y);
default:
return max__9415.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9415.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9426 = (function (x){
return x;
});
var min__9427 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9428 = (function() { 
var G__9430__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9430 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9430__delegate.call(this, x, y, more);
};
G__9430.cljs$lang$maxFixedArity = 2;
G__9430.cljs$lang$applyTo = (function (arglist__9431){
var x = cljs.core.first(arglist__9431);
var y = cljs.core.first(cljs.core.next(arglist__9431));
var more = cljs.core.rest(cljs.core.next(arglist__9431));
return G__9430__delegate.call(this, x, y, more);
});
return G__9430;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9426.call(this,x);
case  2 :
return min__9427.call(this,x,y);
default:
return min__9428.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9428.cljs$lang$applyTo;
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
var rem__9433 = (n % d);

return cljs.core.fix.call(null,((n - rem__9433) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9436 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9436));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9444 = (function (){
return Math.random.call(null);
});
var rand__9445 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9444.call(this);
case  1 :
return rand__9445.call(this,n);
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
var _EQ__EQ___9523 = (function (x){
return true;
});
var _EQ__EQ___9554 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9555 = (function() { 
var G__9557__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9558 = y;
var G__9559 = cljs.core.first.call(null,more);
var G__9560 = cljs.core.next.call(null,more);
x = G__9558;
y = G__9559;
more = G__9560;
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
var G__9557 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9557__delegate.call(this, x, y, more);
};
G__9557.cljs$lang$maxFixedArity = 2;
G__9557.cljs$lang$applyTo = (function (arglist__9561){
var x = cljs.core.first(arglist__9561);
var y = cljs.core.first(cljs.core.next(arglist__9561));
var more = cljs.core.rest(cljs.core.next(arglist__9561));
return G__9557__delegate.call(this, x, y, more);
});
return G__9557;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9523.call(this,x);
case  2 :
return _EQ__EQ___9554.call(this,x,y);
default:
return _EQ__EQ___9555.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9555.cljs$lang$applyTo;
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
var n__9579 = n;
var xs__9580 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9581 = xs__9580;

if(cljs.core.truth_(and__3546__auto____9581))
{return (n__9579 > 0);
} else
{return and__3546__auto____9581;
}
})()))
{{
var G__9590 = (n__9579 - 1);
var G__9592 = cljs.core.next.call(null,xs__9580);
n__9579 = G__9590;
xs__9580 = G__9592;
continue;
}
} else
{return xs__9580;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9602 = null;
var G__9602__9603 = (function (coll,n){
var temp__3695__auto____9598 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9598))
{var xs__9599 = temp__3695__auto____9598;

return cljs.core.first.call(null,xs__9599);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9602__9604 = (function (coll,n,not_found){
var temp__3695__auto____9600 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9600))
{var xs__9601 = temp__3695__auto____9600;

return cljs.core.first.call(null,xs__9601);
} else
{return not_found;
}
});
G__9602 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9602__9603.call(this,coll,n);
case  3 :
return G__9602__9604.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9602;
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
var str__9656 = (function (){
return "";
});
var str__9657 = (function (x){
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
var str__9658 = (function() { 
var G__9660__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9660 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9660__delegate.call(this, x, ys);
};
G__9660.cljs$lang$maxFixedArity = 1;
G__9660.cljs$lang$applyTo = (function (arglist__9661){
var x = cljs.core.first(arglist__9661);
var ys = cljs.core.rest(arglist__9661);
return G__9660__delegate.call(this, x, ys);
});
return G__9660;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9656.call(this);
case  1 :
return str__9657.call(this,x);
default:
return str__9658.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9658.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9673 = (function (s,start){
return s.substring(start);
});
var subs__9675 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9673.call(this,s,start);
case  3 :
return subs__9675.call(this,s,start,end);
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
var symbol__9680 = (function (name){
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
var symbol__9681 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9680.call(this,ns);
case  2 :
return symbol__9681.call(this,ns,name);
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
var keyword__9691 = (function (name){
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
var keyword__9692 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9691.call(this,ns);
case  2 :
return keyword__9692.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9696 = cljs.core.seq.call(null,x);
var ys__9697 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9696)))
{return cljs.core.nil_QMARK_.call(null,ys__9697);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9697)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9696),cljs.core.first.call(null,ys__9697))))
{{
var G__9703 = cljs.core.next.call(null,xs__9696);
var G__9704 = cljs.core.next.call(null,ys__9697);
xs__9696 = G__9703;
ys__9697 = G__9704;
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
return cljs.core.reduce.call(null,(function (p1__9712_SHARP_,p2__9714_SHARP_){
return cljs.core.hash_combine.call(null,p1__9712_SHARP_,cljs.core.hash.call(null,p2__9714_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9728__9731 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9728__9731))
{var G__9733__9735 = cljs.core.first.call(null,G__9728__9731);
var vec__9734__9736 = G__9733__9735;
var key_name__9737 = cljs.core.nth.call(null,vec__9734__9736,0,null);
var f__9738 = cljs.core.nth.call(null,vec__9734__9736,1,null);
var G__9728__9739 = G__9728__9731;

var G__9733__9740 = G__9733__9735;
var G__9728__9741 = G__9728__9739;

while(true){
var vec__9742__9743 = G__9733__9740;
var key_name__9744 = cljs.core.nth.call(null,vec__9742__9743,0,null);
var f__9745 = cljs.core.nth.call(null,vec__9742__9743,1,null);
var G__9728__9746 = G__9728__9741;

var str_name__9747 = cljs.core.name.call(null,key_name__9744);

obj[str_name__9747] = f__9745;
var temp__3698__auto____9792 = cljs.core.next.call(null,G__9728__9746);

if(cljs.core.truth_(temp__3698__auto____9792))
{var G__9728__9794 = temp__3698__auto____9792;

{
var G__9815 = cljs.core.first.call(null,G__9728__9794);
var G__9816 = G__9728__9794;
G__9733__9740 = G__9815;
G__9728__9741 = G__9816;
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
var this__9828 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9877 = this;
return (new cljs.core.List(this__9877.meta,o,coll,(this__9877.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9878 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9879 = this;
return this__9879.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9880 = this;
return this__9880.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9891 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9897 = this;
return this__9897.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9902 = this;
return this__9902.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9907 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9913 = this;
return (new cljs.core.List(meta,this__9913.first,this__9913.rest,this__9913.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9917 = this;
return this__9917.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9919 = this;
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
var this__9951 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9956 = this;
return (new cljs.core.List(this__9956.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9957 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9958 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9960 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9961 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9964 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9966 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9969 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9972 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9975 = this;
return this__9975.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9978 = this;
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
list.cljs$lang$applyTo = (function (arglist__9988){
var items = cljs.core.seq( arglist__9988 );;
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
var this__9992 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9994 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9996 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9999 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9999.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10006 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10008 = this;
return this__10008.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10009 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10009.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10009.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10012 = this;
return this__10012.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10013 = this;
return (new cljs.core.Cons(meta,this__10013.first,this__10013.rest));
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
var G__10016 = null;
var G__10016__10017 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10016__10018 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10016 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10016__10017.call(this,string,f);
case  3 :
return G__10016__10018.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10016;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10020 = null;
var G__10020__10021 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10020__10022 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10020 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10020__10021.call(this,string,k);
case  3 :
return G__10020__10022.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10020;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10024 = null;
var G__10024__10025 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10024__10026 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10024 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10024__10025.call(this,string,n);
case  3 :
return G__10024__10026.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10024;
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
var G__10032 = null;
var G__10032__10033 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10032__10034 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10032 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10032__10033.call(this,this$,coll);
case  3 :
return G__10032__10034.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10032;
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
var x__10044 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10044;
} else
{lazy_seq.x = x__10044.call(null);
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
var this__10125 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10129 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10130 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10131 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10131.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10135 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10137 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10138 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10139 = this;
return this__10139.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10143 = this;
return (new cljs.core.LazySeq(meta,this__10143.realized,this__10143.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10148 = cljs.core.array.call(null);

var s__10149 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10149)))
{ary__10148.push(cljs.core.first.call(null,s__10149));
{
var G__10155 = cljs.core.next.call(null,s__10149);
s__10149 = G__10155;
continue;
}
} else
{return ary__10148;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10157 = s;
var i__10158 = n;
var sum__10159 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10160 = (i__10158 > 0);

if(cljs.core.truth_(and__3546__auto____10160))
{return cljs.core.seq.call(null,s__10157);
} else
{return and__3546__auto____10160;
}
})()))
{{
var G__10165 = cljs.core.next.call(null,s__10157);
var G__10166 = (i__10158 - 1);
var G__10167 = (sum__10159 + 1);
s__10157 = G__10165;
i__10158 = G__10166;
sum__10159 = G__10167;
continue;
}
} else
{return sum__10159;
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
var concat__10188 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10189 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10222 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10181 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10181))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10181),concat.call(null,cljs.core.rest.call(null,s__10181),y));
} else
{return y;
}
})));
});
var concat__10223 = (function() { 
var G__10231__delegate = function (x,y,zs){
var cat__10187 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10182 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10182))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10182),cat.call(null,cljs.core.rest.call(null,xys__10182),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10187.call(null,concat.call(null,x,y),zs);
};
var G__10231 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10231__delegate.call(this, x, y, zs);
};
G__10231.cljs$lang$maxFixedArity = 2;
G__10231.cljs$lang$applyTo = (function (arglist__10234){
var x = cljs.core.first(arglist__10234);
var y = cljs.core.first(cljs.core.next(arglist__10234));
var zs = cljs.core.rest(cljs.core.next(arglist__10234));
return G__10231__delegate.call(this, x, y, zs);
});
return G__10231;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10188.call(this);
case  1 :
return concat__10189.call(this,x);
case  2 :
return concat__10222.call(this,x,y);
default:
return concat__10223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10223.cljs$lang$applyTo;
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
var list_STAR___10238 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10239 = (function() { 
var G__10241__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10241 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10241__delegate.call(this, a, b, c, d, more);
};
G__10241.cljs$lang$maxFixedArity = 4;
G__10241.cljs$lang$applyTo = (function (arglist__10242){
var a = cljs.core.first(arglist__10242);
var b = cljs.core.first(cljs.core.next(arglist__10242));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10242)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10242))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10242))));
return G__10241__delegate.call(this, a, b, c, d, more);
});
return G__10241;
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
return list_STAR___10238.call(this,a,b,c,d);
default:
return list_STAR___10239.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10239.cljs$lang$applyTo;
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
var apply__10259 = (function (f,args){
var fixed_arity__10243 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10243 + 1)) <= fixed_arity__10243)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10260 = (function (f,x,args){
var arglist__10244 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10245 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10244,fixed_arity__10245) <= fixed_arity__10245)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10244));
} else
{return f.cljs$lang$applyTo(arglist__10244);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10244));
}
});
var apply__10261 = (function (f,x,y,args){
var arglist__10246 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10247 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10246,fixed_arity__10247) <= fixed_arity__10247)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10246));
} else
{return f.cljs$lang$applyTo(arglist__10246);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10246));
}
});
var apply__10262 = (function (f,x,y,z,args){
var arglist__10250 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10251 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10250,fixed_arity__10251) <= fixed_arity__10251)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10250));
} else
{return f.cljs$lang$applyTo(arglist__10250);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10250));
}
});
var apply__10263 = (function() { 
var G__10359__delegate = function (f,a,b,c,d,args){
var arglist__10253 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10254 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10253,fixed_arity__10254) <= fixed_arity__10254)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10253));
} else
{return f.cljs$lang$applyTo(arglist__10253);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10253));
}
};
var G__10359 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10359__delegate.call(this, f, a, b, c, d, args);
};
G__10359.cljs$lang$maxFixedArity = 5;
G__10359.cljs$lang$applyTo = (function (arglist__10370){
var f = cljs.core.first(arglist__10370);
var a = cljs.core.first(cljs.core.next(arglist__10370));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10370)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10370))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10370)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10370)))));
return G__10359__delegate.call(this, f, a, b, c, d, args);
});
return G__10359;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10259.call(this,f,a);
case  3 :
return apply__10260.call(this,f,a,b);
case  4 :
return apply__10261.call(this,f,a,b,c);
case  5 :
return apply__10262.call(this,f,a,b,c,d);
default:
return apply__10263.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10263.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10388){
var obj = cljs.core.first(arglist__10388);
var f = cljs.core.first(cljs.core.next(arglist__10388));
var args = cljs.core.rest(cljs.core.next(arglist__10388));
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
var G__10399__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10399 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10399__delegate.call(this, x, y, more);
};
G__10399.cljs$lang$maxFixedArity = 2;
G__10399.cljs$lang$applyTo = (function (arglist__10401){
var x = cljs.core.first(arglist__10401);
var y = cljs.core.first(cljs.core.next(arglist__10401));
var more = cljs.core.rest(cljs.core.next(arglist__10401));
return G__10399__delegate.call(this, x, y, more);
});
return G__10399;
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
var G__10411 = pred;
var G__10413 = cljs.core.next.call(null,coll);
pred = G__10411;
coll = G__10413;
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
{var or__3548__auto____10455 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10455))
{return or__3548__auto____10455;
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
var G__10494 = null;
var G__10494__10497 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10494__10498 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10494__10499 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10494__10500 = (function() { 
var G__10508__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10508 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10508__delegate.call(this, x, y, zs);
};
G__10508.cljs$lang$maxFixedArity = 2;
G__10508.cljs$lang$applyTo = (function (arglist__10510){
var x = cljs.core.first(arglist__10510);
var y = cljs.core.first(cljs.core.next(arglist__10510));
var zs = cljs.core.rest(cljs.core.next(arglist__10510));
return G__10508__delegate.call(this, x, y, zs);
});
return G__10508;
})()
;
G__10494 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10494__10497.call(this);
case  1 :
return G__10494__10498.call(this,x);
case  2 :
return G__10494__10499.call(this,x,y);
default:
return G__10494__10500.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10494.cljs$lang$maxFixedArity = 2;
G__10494.cljs$lang$applyTo = G__10494__10500.cljs$lang$applyTo;
return G__10494;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10567__delegate = function (args){
return x;
};
var G__10567 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10567__delegate.call(this, args);
};
G__10567.cljs$lang$maxFixedArity = 0;
G__10567.cljs$lang$applyTo = (function (arglist__10579){
var args = cljs.core.seq( arglist__10579 );;
return G__10567__delegate.call(this, args);
});
return G__10567;
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
var comp__10624 = (function (){
return cljs.core.identity;
});
var comp__10625 = (function (f){
return f;
});
var comp__10626 = (function (f,g){
return (function() {
var G__10633 = null;
var G__10633__10635 = (function (){
return f.call(null,g.call(null));
});
var G__10633__10636 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10633__10637 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10633__10639 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10633__10640 = (function() { 
var G__10644__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10644 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10644__delegate.call(this, x, y, z, args);
};
G__10644.cljs$lang$maxFixedArity = 3;
G__10644.cljs$lang$applyTo = (function (arglist__10649){
var x = cljs.core.first(arglist__10649);
var y = cljs.core.first(cljs.core.next(arglist__10649));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10649)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10649)));
return G__10644__delegate.call(this, x, y, z, args);
});
return G__10644;
})()
;
G__10633 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10633__10635.call(this);
case  1 :
return G__10633__10636.call(this,x);
case  2 :
return G__10633__10637.call(this,x,y);
case  3 :
return G__10633__10639.call(this,x,y,z);
default:
return G__10633__10640.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10633.cljs$lang$maxFixedArity = 3;
G__10633.cljs$lang$applyTo = G__10633__10640.cljs$lang$applyTo;
return G__10633;
})()
});
var comp__10627 = (function (f,g,h){
return (function() {
var G__10650 = null;
var G__10650__10651 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10650__10654 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10650__10655 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10650__10657 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10650__10659 = (function() { 
var G__10669__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10669 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10669__delegate.call(this, x, y, z, args);
};
G__10669.cljs$lang$maxFixedArity = 3;
G__10669.cljs$lang$applyTo = (function (arglist__10676){
var x = cljs.core.first(arglist__10676);
var y = cljs.core.first(cljs.core.next(arglist__10676));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10676)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10676)));
return G__10669__delegate.call(this, x, y, z, args);
});
return G__10669;
})()
;
G__10650 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10650__10651.call(this);
case  1 :
return G__10650__10654.call(this,x);
case  2 :
return G__10650__10655.call(this,x,y);
case  3 :
return G__10650__10657.call(this,x,y,z);
default:
return G__10650__10659.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10650.cljs$lang$maxFixedArity = 3;
G__10650.cljs$lang$applyTo = G__10650__10659.cljs$lang$applyTo;
return G__10650;
})()
});
var comp__10628 = (function() { 
var G__10683__delegate = function (f1,f2,f3,fs){
var fs__10612 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10691__delegate = function (args){
var ret__10613 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10612),args);
var fs__10615 = cljs.core.next.call(null,fs__10612);

while(true){
if(cljs.core.truth_(fs__10615))
{{
var G__10694 = cljs.core.first.call(null,fs__10615).call(null,ret__10613);
var G__10695 = cljs.core.next.call(null,fs__10615);
ret__10613 = G__10694;
fs__10615 = G__10695;
continue;
}
} else
{return ret__10613;
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
G__10691.cljs$lang$applyTo = (function (arglist__10700){
var args = cljs.core.seq( arglist__10700 );;
return G__10691__delegate.call(this, args);
});
return G__10691;
})()
;
};
var G__10683 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10683__delegate.call(this, f1, f2, f3, fs);
};
G__10683.cljs$lang$maxFixedArity = 3;
G__10683.cljs$lang$applyTo = (function (arglist__10701){
var f1 = cljs.core.first(arglist__10701);
var f2 = cljs.core.first(cljs.core.next(arglist__10701));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10701)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10701)));
return G__10683__delegate.call(this, f1, f2, f3, fs);
});
return G__10683;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10624.call(this);
case  1 :
return comp__10625.call(this,f1);
case  2 :
return comp__10626.call(this,f1,f2);
case  3 :
return comp__10627.call(this,f1,f2,f3);
default:
return comp__10628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10628.cljs$lang$applyTo;
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
var partial__10722 = (function (f,arg1){
return (function() { 
var G__10727__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10727 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10727__delegate.call(this, args);
};
G__10727.cljs$lang$maxFixedArity = 0;
G__10727.cljs$lang$applyTo = (function (arglist__10728){
var args = cljs.core.seq( arglist__10728 );;
return G__10727__delegate.call(this, args);
});
return G__10727;
})()
;
});
var partial__10723 = (function (f,arg1,arg2){
return (function() { 
var G__10730__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10730 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10730__delegate.call(this, args);
};
G__10730.cljs$lang$maxFixedArity = 0;
G__10730.cljs$lang$applyTo = (function (arglist__10732){
var args = cljs.core.seq( arglist__10732 );;
return G__10730__delegate.call(this, args);
});
return G__10730;
})()
;
});
var partial__10724 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10734__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10734 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10734__delegate.call(this, args);
};
G__10734.cljs$lang$maxFixedArity = 0;
G__10734.cljs$lang$applyTo = (function (arglist__10737){
var args = cljs.core.seq( arglist__10737 );;
return G__10734__delegate.call(this, args);
});
return G__10734;
})()
;
});
var partial__10725 = (function() { 
var G__10738__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10739__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10739 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10739__delegate.call(this, args);
};
G__10739.cljs$lang$maxFixedArity = 0;
G__10739.cljs$lang$applyTo = (function (arglist__10741){
var args = cljs.core.seq( arglist__10741 );;
return G__10739__delegate.call(this, args);
});
return G__10739;
})()
;
};
var G__10738 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10738__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10738.cljs$lang$maxFixedArity = 4;
G__10738.cljs$lang$applyTo = (function (arglist__10746){
var f = cljs.core.first(arglist__10746);
var arg1 = cljs.core.first(cljs.core.next(arglist__10746));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10746)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10746))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10746))));
return G__10738__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10738;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10722.call(this,f,arg1);
case  3 :
return partial__10723.call(this,f,arg1,arg2);
case  4 :
return partial__10724.call(this,f,arg1,arg2,arg3);
default:
return partial__10725.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10725.cljs$lang$applyTo;
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
var fnil__10826 = (function (f,x){
return (function() {
var G__10834 = null;
var G__10834__10836 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10834__10837 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10834__10838 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10834__10839 = (function() { 
var G__10844__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10844 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10844__delegate.call(this, a, b, c, ds);
};
G__10844.cljs$lang$maxFixedArity = 3;
G__10844.cljs$lang$applyTo = (function (arglist__10853){
var a = cljs.core.first(arglist__10853);
var b = cljs.core.first(cljs.core.next(arglist__10853));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10853)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10853)));
return G__10844__delegate.call(this, a, b, c, ds);
});
return G__10844;
})()
;
G__10834 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10834__10836.call(this,a);
case  2 :
return G__10834__10837.call(this,a,b);
case  3 :
return G__10834__10838.call(this,a,b,c);
default:
return G__10834__10839.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10834.cljs$lang$maxFixedArity = 3;
G__10834.cljs$lang$applyTo = G__10834__10839.cljs$lang$applyTo;
return G__10834;
})()
});
var fnil__10827 = (function (f,x,y){
return (function() {
var G__10855 = null;
var G__10855__10856 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10855__10858 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10855__10859 = (function() { 
var G__10870__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10870 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10870__delegate.call(this, a, b, c, ds);
};
G__10870.cljs$lang$maxFixedArity = 3;
G__10870.cljs$lang$applyTo = (function (arglist__10872){
var a = cljs.core.first(arglist__10872);
var b = cljs.core.first(cljs.core.next(arglist__10872));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10872)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10872)));
return G__10870__delegate.call(this, a, b, c, ds);
});
return G__10870;
})()
;
G__10855 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10855__10856.call(this,a,b);
case  3 :
return G__10855__10858.call(this,a,b,c);
default:
return G__10855__10859.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10855.cljs$lang$maxFixedArity = 3;
G__10855.cljs$lang$applyTo = G__10855__10859.cljs$lang$applyTo;
return G__10855;
})()
});
var fnil__10829 = (function (f,x,y,z){
return (function() {
var G__10879 = null;
var G__10879__10881 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10879__10883 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10879__10884 = (function() { 
var G__10891__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10891 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10891__delegate.call(this, a, b, c, ds);
};
G__10891.cljs$lang$maxFixedArity = 3;
G__10891.cljs$lang$applyTo = (function (arglist__10893){
var a = cljs.core.first(arglist__10893);
var b = cljs.core.first(cljs.core.next(arglist__10893));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10893)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10893)));
return G__10891__delegate.call(this, a, b, c, ds);
});
return G__10891;
})()
;
G__10879 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10879__10881.call(this,a,b);
case  3 :
return G__10879__10883.call(this,a,b,c);
default:
return G__10879__10884.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10879.cljs$lang$maxFixedArity = 3;
G__10879.cljs$lang$applyTo = G__10879__10884.cljs$lang$applyTo;
return G__10879;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10826.call(this,f,x);
case  3 :
return fnil__10827.call(this,f,x,y);
case  4 :
return fnil__10829.call(this,f,x,y,z);
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
var mapi__10927 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10921 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10921))
{var s__10923 = temp__3698__auto____10921;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10923)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10923)));
} else
{return null;
}
})));
});

return mapi__10927.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10949 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10949))
{var s__10952 = temp__3698__auto____10949;

var x__10955 = f.call(null,cljs.core.first.call(null,s__10952));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10955)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10952));
} else
{return cljs.core.cons.call(null,x__10955,keep.call(null,f,cljs.core.rest.call(null,s__10952)));
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
var keepi__11001 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10994 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10994))
{var s__10995 = temp__3698__auto____10994;

var x__10998 = f.call(null,idx,cljs.core.first.call(null,s__10995));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10998)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10995));
} else
{return cljs.core.cons.call(null,x__10998,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10995)));
}
} else
{return null;
}
})));
});

return keepi__11001.call(null,0,coll);
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
var every_pred__11186 = (function (p){
return (function() {
var ep1 = null;
var ep1__11191 = (function (){
return true;
});
var ep1__11192 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11193 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11053 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11053))
{return p.call(null,y);
} else
{return and__3546__auto____11053;
}
})());
});
var ep1__11194 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11056 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11056))
{var and__3546__auto____11059 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11059))
{return p.call(null,z);
} else
{return and__3546__auto____11059;
}
} else
{return and__3546__auto____11056;
}
})());
});
var ep1__11195 = (function() { 
var G__11198__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11063 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11063))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11063;
}
})());
};
var G__11198 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11198__delegate.call(this, x, y, z, args);
};
G__11198.cljs$lang$maxFixedArity = 3;
G__11198.cljs$lang$applyTo = (function (arglist__11200){
var x = cljs.core.first(arglist__11200);
var y = cljs.core.first(cljs.core.next(arglist__11200));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11200)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11200)));
return G__11198__delegate.call(this, x, y, z, args);
});
return G__11198;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11191.call(this);
case  1 :
return ep1__11192.call(this,x);
case  2 :
return ep1__11193.call(this,x,y);
case  3 :
return ep1__11194.call(this,x,y,z);
default:
return ep1__11195.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11195.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11187 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11209 = (function (){
return true;
});
var ep2__11210 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11068 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11068))
{return p2.call(null,x);
} else
{return and__3546__auto____11068;
}
})());
});
var ep2__11211 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11077 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11077))
{var and__3546__auto____11079 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11079))
{var and__3546__auto____11081 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11081))
{return p2.call(null,y);
} else
{return and__3546__auto____11081;
}
} else
{return and__3546__auto____11079;
}
} else
{return and__3546__auto____11077;
}
})());
});
var ep2__11212 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11139 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11139))
{var and__3546__auto____11140 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11140))
{var and__3546__auto____11142 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11142))
{var and__3546__auto____11143 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11143))
{var and__3546__auto____11144 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11144))
{return p2.call(null,z);
} else
{return and__3546__auto____11144;
}
} else
{return and__3546__auto____11143;
}
} else
{return and__3546__auto____11142;
}
} else
{return and__3546__auto____11140;
}
} else
{return and__3546__auto____11139;
}
})());
});
var ep2__11213 = (function() { 
var G__11221__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11146 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11146))
{return cljs.core.every_QMARK_.call(null,(function (p1__10978_SHARP_){
var and__3546__auto____11148 = p1.call(null,p1__10978_SHARP_);

if(cljs.core.truth_(and__3546__auto____11148))
{return p2.call(null,p1__10978_SHARP_);
} else
{return and__3546__auto____11148;
}
}),args);
} else
{return and__3546__auto____11146;
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
G__11221.cljs$lang$applyTo = (function (arglist__11223){
var x = cljs.core.first(arglist__11223);
var y = cljs.core.first(cljs.core.next(arglist__11223));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11223)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11223)));
return G__11221__delegate.call(this, x, y, z, args);
});
return G__11221;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11209.call(this);
case  1 :
return ep2__11210.call(this,x);
case  2 :
return ep2__11211.call(this,x,y);
case  3 :
return ep2__11212.call(this,x,y,z);
default:
return ep2__11213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11213.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11188 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11271 = (function (){
return true;
});
var ep3__11272 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11149 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11149))
{var and__3546__auto____11150 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11150))
{return p3.call(null,x);
} else
{return and__3546__auto____11150;
}
} else
{return and__3546__auto____11149;
}
})());
});
var ep3__11274 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11152 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11152))
{var and__3546__auto____11153 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11153))
{var and__3546__auto____11154 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11154))
{var and__3546__auto____11156 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11156))
{var and__3546__auto____11157 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11157))
{return p3.call(null,y);
} else
{return and__3546__auto____11157;
}
} else
{return and__3546__auto____11156;
}
} else
{return and__3546__auto____11154;
}
} else
{return and__3546__auto____11153;
}
} else
{return and__3546__auto____11152;
}
})());
});
var ep3__11275 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11160 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11160))
{var and__3546__auto____11162 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11162))
{var and__3546__auto____11163 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11163))
{var and__3546__auto____11164 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11164))
{var and__3546__auto____11165 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11165))
{var and__3546__auto____11167 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11167))
{var and__3546__auto____11169 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11169))
{var and__3546__auto____11171 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11171))
{return p3.call(null,z);
} else
{return and__3546__auto____11171;
}
} else
{return and__3546__auto____11169;
}
} else
{return and__3546__auto____11167;
}
} else
{return and__3546__auto____11165;
}
} else
{return and__3546__auto____11164;
}
} else
{return and__3546__auto____11163;
}
} else
{return and__3546__auto____11162;
}
} else
{return and__3546__auto____11160;
}
})());
});
var ep3__11276 = (function() { 
var G__11289__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11174 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11174))
{return cljs.core.every_QMARK_.call(null,(function (p1__10982_SHARP_){
var and__3546__auto____11176 = p1.call(null,p1__10982_SHARP_);

if(cljs.core.truth_(and__3546__auto____11176))
{var and__3546__auto____11178 = p2.call(null,p1__10982_SHARP_);

if(cljs.core.truth_(and__3546__auto____11178))
{return p3.call(null,p1__10982_SHARP_);
} else
{return and__3546__auto____11178;
}
} else
{return and__3546__auto____11176;
}
}),args);
} else
{return and__3546__auto____11174;
}
})());
};
var G__11289 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11289__delegate.call(this, x, y, z, args);
};
G__11289.cljs$lang$maxFixedArity = 3;
G__11289.cljs$lang$applyTo = (function (arglist__11300){
var x = cljs.core.first(arglist__11300);
var y = cljs.core.first(cljs.core.next(arglist__11300));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11300)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11300)));
return G__11289__delegate.call(this, x, y, z, args);
});
return G__11289;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11271.call(this);
case  1 :
return ep3__11272.call(this,x);
case  2 :
return ep3__11274.call(this,x,y);
case  3 :
return ep3__11275.call(this,x,y,z);
default:
return ep3__11276.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11276.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11189 = (function() { 
var G__11304__delegate = function (p1,p2,p3,ps){
var ps__11181 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11308 = (function (){
return true;
});
var epn__11310 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10984_SHARP_){
return p1__10984_SHARP_.call(null,x);
}),ps__11181);
});
var epn__11311 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10985_SHARP_){
var and__3546__auto____11182 = p1__10985_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11182))
{return p1__10985_SHARP_.call(null,y);
} else
{return and__3546__auto____11182;
}
}),ps__11181);
});
var epn__11312 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10986_SHARP_){
var and__3546__auto____11183 = p1__10986_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11183))
{var and__3546__auto____11184 = p1__10986_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11184))
{return p1__10986_SHARP_.call(null,z);
} else
{return and__3546__auto____11184;
}
} else
{return and__3546__auto____11183;
}
}),ps__11181);
});
var epn__11313 = (function() { 
var G__11322__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11185 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11185))
{return cljs.core.every_QMARK_.call(null,(function (p1__10988_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10988_SHARP_,args);
}),ps__11181);
} else
{return and__3546__auto____11185;
}
})());
};
var G__11322 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11322__delegate.call(this, x, y, z, args);
};
G__11322.cljs$lang$maxFixedArity = 3;
G__11322.cljs$lang$applyTo = (function (arglist__11327){
var x = cljs.core.first(arglist__11327);
var y = cljs.core.first(cljs.core.next(arglist__11327));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11327)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11327)));
return G__11322__delegate.call(this, x, y, z, args);
});
return G__11322;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11308.call(this);
case  1 :
return epn__11310.call(this,x);
case  2 :
return epn__11311.call(this,x,y);
case  3 :
return epn__11312.call(this,x,y,z);
default:
return epn__11313.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11313.cljs$lang$applyTo;
return epn;
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
G__11304.cljs$lang$applyTo = (function (arglist__11329){
var p1 = cljs.core.first(arglist__11329);
var p2 = cljs.core.first(cljs.core.next(arglist__11329));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11329)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11329)));
return G__11304__delegate.call(this, p1, p2, p3, ps);
});
return G__11304;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11186.call(this,p1);
case  2 :
return every_pred__11187.call(this,p1,p2);
case  3 :
return every_pred__11188.call(this,p1,p2,p3);
default:
return every_pred__11189.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11189.cljs$lang$applyTo;
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
var some_fn__11612 = (function (p){
return (function() {
var sp1 = null;
var sp1__11620 = (function (){
return null;
});
var sp1__11622 = (function (x){
return p.call(null,x);
});
var sp1__11623 = (function (x,y){
var or__3548__auto____11335 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11335))
{return or__3548__auto____11335;
} else
{return p.call(null,y);
}
});
var sp1__11624 = (function (x,y,z){
var or__3548__auto____11337 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11337))
{return or__3548__auto____11337;
} else
{var or__3548__auto____11338 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11338))
{return or__3548__auto____11338;
} else
{return p.call(null,z);
}
}
});
var sp1__11625 = (function() { 
var G__11629__delegate = function (x,y,z,args){
var or__3548__auto____11339 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11339))
{return or__3548__auto____11339;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11629 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11629__delegate.call(this, x, y, z, args);
};
G__11629.cljs$lang$maxFixedArity = 3;
G__11629.cljs$lang$applyTo = (function (arglist__11632){
var x = cljs.core.first(arglist__11632);
var y = cljs.core.first(cljs.core.next(arglist__11632));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11632)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11632)));
return G__11629__delegate.call(this, x, y, z, args);
});
return G__11629;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11620.call(this);
case  1 :
return sp1__11622.call(this,x);
case  2 :
return sp1__11623.call(this,x,y);
case  3 :
return sp1__11624.call(this,x,y,z);
default:
return sp1__11625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11625.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11614 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11634 = (function (){
return null;
});
var sp2__11635 = (function (x){
var or__3548__auto____11340 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11340))
{return or__3548__auto____11340;
} else
{return p2.call(null,x);
}
});
var sp2__11636 = (function (x,y){
var or__3548__auto____11341 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11341))
{return or__3548__auto____11341;
} else
{var or__3548__auto____11342 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11342))
{return or__3548__auto____11342;
} else
{var or__3548__auto____11343 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11343))
{return or__3548__auto____11343;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11637 = (function (x,y,z){
var or__3548__auto____11345 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11345))
{return or__3548__auto____11345;
} else
{var or__3548__auto____11350 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11350))
{return or__3548__auto____11350;
} else
{var or__3548__auto____11351 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11351))
{return or__3548__auto____11351;
} else
{var or__3548__auto____11357 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11357))
{return or__3548__auto____11357;
} else
{var or__3548__auto____11405 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11405))
{return or__3548__auto____11405;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11638 = (function() { 
var G__11648__delegate = function (x,y,z,args){
var or__3548__auto____11408 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11408))
{return or__3548__auto____11408;
} else
{return cljs.core.some.call(null,(function (p1__11021_SHARP_){
var or__3548__auto____11524 = p1.call(null,p1__11021_SHARP_);

if(cljs.core.truth_(or__3548__auto____11524))
{return or__3548__auto____11524;
} else
{return p2.call(null,p1__11021_SHARP_);
}
}),args);
}
};
var G__11648 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11648__delegate.call(this, x, y, z, args);
};
G__11648.cljs$lang$maxFixedArity = 3;
G__11648.cljs$lang$applyTo = (function (arglist__11650){
var x = cljs.core.first(arglist__11650);
var y = cljs.core.first(cljs.core.next(arglist__11650));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11650)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11650)));
return G__11648__delegate.call(this, x, y, z, args);
});
return G__11648;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11634.call(this);
case  1 :
return sp2__11635.call(this,x);
case  2 :
return sp2__11636.call(this,x,y);
case  3 :
return sp2__11637.call(this,x,y,z);
default:
return sp2__11638.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11638.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11615 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11704 = (function (){
return null;
});
var sp3__11705 = (function (x){
var or__3548__auto____11527 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11527))
{return or__3548__auto____11527;
} else
{var or__3548__auto____11530 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11530))
{return or__3548__auto____11530;
} else
{return p3.call(null,x);
}
}
});
var sp3__11706 = (function (x,y){
var or__3548__auto____11537 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11537))
{return or__3548__auto____11537;
} else
{var or__3548__auto____11538 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11538))
{return or__3548__auto____11538;
} else
{var or__3548__auto____11540 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11540))
{return or__3548__auto____11540;
} else
{var or__3548__auto____11542 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11542))
{return or__3548__auto____11542;
} else
{var or__3548__auto____11543 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11543))
{return or__3548__auto____11543;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11707 = (function (x,y,z){
var or__3548__auto____11552 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11552))
{return or__3548__auto____11552;
} else
{var or__3548__auto____11553 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11553))
{return or__3548__auto____11553;
} else
{var or__3548__auto____11555 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11555))
{return or__3548__auto____11555;
} else
{var or__3548__auto____11556 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11556))
{return or__3548__auto____11556;
} else
{var or__3548__auto____11557 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11557))
{return or__3548__auto____11557;
} else
{var or__3548__auto____11559 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11559))
{return or__3548__auto____11559;
} else
{var or__3548__auto____11560 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11560))
{return or__3548__auto____11560;
} else
{var or__3548__auto____11561 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11561))
{return or__3548__auto____11561;
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
var sp3__11708 = (function() { 
var G__11721__delegate = function (x,y,z,args){
var or__3548__auto____11568 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11568))
{return or__3548__auto____11568;
} else
{return cljs.core.some.call(null,(function (p1__11022_SHARP_){
var or__3548__auto____11576 = p1.call(null,p1__11022_SHARP_);

if(cljs.core.truth_(or__3548__auto____11576))
{return or__3548__auto____11576;
} else
{var or__3548__auto____11577 = p2.call(null,p1__11022_SHARP_);

if(cljs.core.truth_(or__3548__auto____11577))
{return or__3548__auto____11577;
} else
{return p3.call(null,p1__11022_SHARP_);
}
}
}),args);
}
};
var G__11721 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11721__delegate.call(this, x, y, z, args);
};
G__11721.cljs$lang$maxFixedArity = 3;
G__11721.cljs$lang$applyTo = (function (arglist__11724){
var x = cljs.core.first(arglist__11724);
var y = cljs.core.first(cljs.core.next(arglist__11724));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11724)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11724)));
return G__11721__delegate.call(this, x, y, z, args);
});
return G__11721;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11704.call(this);
case  1 :
return sp3__11705.call(this,x);
case  2 :
return sp3__11706.call(this,x,y);
case  3 :
return sp3__11707.call(this,x,y,z);
default:
return sp3__11708.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11708.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11616 = (function() { 
var G__11805__delegate = function (p1,p2,p3,ps){
var ps__11580 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11810 = (function (){
return null;
});
var spn__11811 = (function (x){
return cljs.core.some.call(null,(function (p1__11028_SHARP_){
return p1__11028_SHARP_.call(null,x);
}),ps__11580);
});
var spn__11812 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11029_SHARP_){
var or__3548__auto____11584 = p1__11029_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11584))
{return or__3548__auto____11584;
} else
{return p1__11029_SHARP_.call(null,y);
}
}),ps__11580);
});
var spn__11813 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11030_SHARP_){
var or__3548__auto____11593 = p1__11030_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11593))
{return or__3548__auto____11593;
} else
{var or__3548__auto____11601 = p1__11030_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11601))
{return or__3548__auto____11601;
} else
{return p1__11030_SHARP_.call(null,z);
}
}
}),ps__11580);
});
var spn__11814 = (function() { 
var G__11818__delegate = function (x,y,z,args){
var or__3548__auto____11602 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11602))
{return or__3548__auto____11602;
} else
{return cljs.core.some.call(null,(function (p1__11038_SHARP_){
return cljs.core.some.call(null,p1__11038_SHARP_,args);
}),ps__11580);
}
};
var G__11818 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11818__delegate.call(this, x, y, z, args);
};
G__11818.cljs$lang$maxFixedArity = 3;
G__11818.cljs$lang$applyTo = (function (arglist__11820){
var x = cljs.core.first(arglist__11820);
var y = cljs.core.first(cljs.core.next(arglist__11820));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11820)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11820)));
return G__11818__delegate.call(this, x, y, z, args);
});
return G__11818;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11810.call(this);
case  1 :
return spn__11811.call(this,x);
case  2 :
return spn__11812.call(this,x,y);
case  3 :
return spn__11813.call(this,x,y,z);
default:
return spn__11814.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11814.cljs$lang$applyTo;
return spn;
})()
};
var G__11805 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11805__delegate.call(this, p1, p2, p3, ps);
};
G__11805.cljs$lang$maxFixedArity = 3;
G__11805.cljs$lang$applyTo = (function (arglist__11825){
var p1 = cljs.core.first(arglist__11825);
var p2 = cljs.core.first(cljs.core.next(arglist__11825));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11825)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11825)));
return G__11805__delegate.call(this, p1, p2, p3, ps);
});
return G__11805;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11612.call(this,p1);
case  2 :
return some_fn__11614.call(this,p1,p2);
case  3 :
return some_fn__11615.call(this,p1,p2,p3);
default:
return some_fn__11616.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11616.cljs$lang$applyTo;
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
var map__11857 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11833 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11833))
{var s__11834 = temp__3698__auto____11833;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11834)),map.call(null,f,cljs.core.rest.call(null,s__11834)));
} else
{return null;
}
})));
});
var map__11858 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11835 = cljs.core.seq.call(null,c1);
var s2__11837 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11838 = s1__11835;

if(cljs.core.truth_(and__3546__auto____11838))
{return s2__11837;
} else
{return and__3546__auto____11838;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11835),cljs.core.first.call(null,s2__11837)),map.call(null,f,cljs.core.rest.call(null,s1__11835),cljs.core.rest.call(null,s2__11837)));
} else
{return null;
}
})));
});
var map__11859 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11840 = cljs.core.seq.call(null,c1);
var s2__11841 = cljs.core.seq.call(null,c2);
var s3__11842 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11843 = s1__11840;

if(cljs.core.truth_(and__3546__auto____11843))
{var and__3546__auto____11850 = s2__11841;

if(cljs.core.truth_(and__3546__auto____11850))
{return s3__11842;
} else
{return and__3546__auto____11850;
}
} else
{return and__3546__auto____11843;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11840),cljs.core.first.call(null,s2__11841),cljs.core.first.call(null,s3__11842)),map.call(null,f,cljs.core.rest.call(null,s1__11840),cljs.core.rest.call(null,s2__11841),cljs.core.rest.call(null,s3__11842)));
} else
{return null;
}
})));
});
var map__11860 = (function() { 
var G__11869__delegate = function (f,c1,c2,c3,colls){
var step__11852 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11851 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11851)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11851),step.call(null,map.call(null,cljs.core.rest,ss__11851)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11333_SHARP_){
return cljs.core.apply.call(null,f,p1__11333_SHARP_);
}),step__11852.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11869 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11869__delegate.call(this, f, c1, c2, c3, colls);
};
G__11869.cljs$lang$maxFixedArity = 4;
G__11869.cljs$lang$applyTo = (function (arglist__11870){
var f = cljs.core.first(arglist__11870);
var c1 = cljs.core.first(cljs.core.next(arglist__11870));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11870)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11870))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11870))));
return G__11869__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11869;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11857.call(this,f,c1);
case  3 :
return map__11858.call(this,f,c1,c2);
case  4 :
return map__11859.call(this,f,c1,c2,c3);
default:
return map__11860.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11860.cljs$lang$applyTo;
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
{var temp__3698__auto____11878 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11878))
{var s__11879 = temp__3698__auto____11878;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11879),take.call(null,(n - 1),cljs.core.rest.call(null,s__11879)));
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
var step__11887 = (function (n,coll){
while(true){
var s__11883 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11884 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11884))
{return s__11883;
} else
{return and__3546__auto____11884;
}
})()))
{{
var G__11891 = (n - 1);
var G__11892 = cljs.core.rest.call(null,s__11883);
n = G__11891;
coll = G__11892;
continue;
}
} else
{return s__11883;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11887.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11960 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11961 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11960.call(this,n);
case  2 :
return drop_last__11961.call(this,n,s);
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
var s__11963 = cljs.core.seq.call(null,coll);
var lead__11964 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11964))
{{
var G__11966 = cljs.core.next.call(null,s__11963);
var G__11967 = cljs.core.next.call(null,lead__11964);
s__11963 = G__11966;
lead__11964 = G__11967;
continue;
}
} else
{return s__11963;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11976 = (function (pred,coll){
while(true){
var s__11973 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11974 = s__11973;

if(cljs.core.truth_(and__3546__auto____11974))
{return pred.call(null,cljs.core.first.call(null,s__11973));
} else
{return and__3546__auto____11974;
}
})()))
{{
var G__11981 = pred;
var G__11983 = cljs.core.rest.call(null,s__11973);
pred = G__11981;
coll = G__11983;
continue;
}
} else
{return s__11973;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11976.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11988 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11988))
{var s__11989 = temp__3698__auto____11988;

return cljs.core.concat.call(null,s__11989,cycle.call(null,s__11989));
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
var repeat__11999 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11997.call(this,n);
case  2 :
return repeat__11999.call(this,n,x);
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
var repeatedly__12006 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12007 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12006.call(this,n);
case  2 :
return repeatedly__12007.call(this,n,f);
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
var interleave__12029 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12019 = cljs.core.seq.call(null,c1);
var s2__12021 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12022 = s1__12019;

if(cljs.core.truth_(and__3546__auto____12022))
{return s2__12021;
} else
{return and__3546__auto____12022;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12019),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12021),interleave.call(null,cljs.core.rest.call(null,s1__12019),cljs.core.rest.call(null,s2__12021))));
} else
{return null;
}
})));
});
var interleave__12030 = (function() { 
var G__12034__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12025 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12025)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12025),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12025)));
} else
{return null;
}
})));
};
var G__12034 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12034__delegate.call(this, c1, c2, colls);
};
G__12034.cljs$lang$maxFixedArity = 2;
G__12034.cljs$lang$applyTo = (function (arglist__12035){
var c1 = cljs.core.first(arglist__12035);
var c2 = cljs.core.first(cljs.core.next(arglist__12035));
var colls = cljs.core.rest(cljs.core.next(arglist__12035));
return G__12034__delegate.call(this, c1, c2, colls);
});
return G__12034;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12029.call(this,c1,c2);
default:
return interleave__12030.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12030.cljs$lang$applyTo;
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
var cat__12044 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12039 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12039))
{var coll__12040 = temp__3695__auto____12039;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12040),cat.call(null,cljs.core.rest.call(null,coll__12040),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12044.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12051 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12053 = (function() { 
var G__12057__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12057 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12057__delegate.call(this, f, coll, colls);
};
G__12057.cljs$lang$maxFixedArity = 2;
G__12057.cljs$lang$applyTo = (function (arglist__12058){
var f = cljs.core.first(arglist__12058);
var coll = cljs.core.first(cljs.core.next(arglist__12058));
var colls = cljs.core.rest(cljs.core.next(arglist__12058));
return G__12057__delegate.call(this, f, coll, colls);
});
return G__12057;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12051.call(this,f,coll);
default:
return mapcat__12053.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12053.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12064 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12064))
{var s__12065 = temp__3698__auto____12064;

var f__12066 = cljs.core.first.call(null,s__12065);
var r__12067 = cljs.core.rest.call(null,s__12065);

if(cljs.core.truth_(pred.call(null,f__12066)))
{return cljs.core.cons.call(null,f__12066,filter.call(null,pred,r__12067));
} else
{return filter.call(null,pred,r__12067);
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
var walk__12076 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12076.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12072_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12072_SHARP_));
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
var partition__12107 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12108 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12100 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12100))
{var s__12101 = temp__3698__auto____12100;

var p__12102 = cljs.core.take.call(null,n,s__12101);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12102))))
{return cljs.core.cons.call(null,p__12102,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12101)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12109 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12103 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12103))
{var s__12104 = temp__3698__auto____12103;

var p__12106 = cljs.core.take.call(null,n,s__12104);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12106))))
{return cljs.core.cons.call(null,p__12106,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12104)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12106,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12107.call(this,n,step);
case  3 :
return partition__12108.call(this,n,step,pad);
case  4 :
return partition__12109.call(this,n,step,pad,coll);
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
var get_in__12123 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12124 = (function (m,ks,not_found){
var sentinel__12115 = cljs.core.lookup_sentinel;
var m__12117 = m;
var ks__12118 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12118))
{var m__12119 = cljs.core.get.call(null,m__12117,cljs.core.first.call(null,ks__12118),sentinel__12115);

if(cljs.core.truth_((sentinel__12115 === m__12119)))
{return not_found;
} else
{{
var G__12129 = sentinel__12115;
var G__12130 = m__12119;
var G__12131 = cljs.core.next.call(null,ks__12118);
sentinel__12115 = G__12129;
m__12117 = G__12130;
ks__12118 = G__12131;
continue;
}
}
} else
{return m__12117;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12123.call(this,m,ks);
case  3 :
return get_in__12124.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12135,v){
var vec__12137__12139 = p__12135;
var k__12140 = cljs.core.nth.call(null,vec__12137__12139,0,null);
var ks__12142 = cljs.core.nthnext.call(null,vec__12137__12139,1);

if(cljs.core.truth_(ks__12142))
{return cljs.core.assoc.call(null,m,k__12140,assoc_in.call(null,cljs.core.get.call(null,m,k__12140),ks__12142,v));
} else
{return cljs.core.assoc.call(null,m,k__12140,v);
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
var vec__12158__12159 = p__12156;
var k__12160 = cljs.core.nth.call(null,vec__12158__12159,0,null);
var ks__12162 = cljs.core.nthnext.call(null,vec__12158__12159,1);

if(cljs.core.truth_(ks__12162))
{return cljs.core.assoc.call(null,m,k__12160,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12160),ks__12162,f,args));
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
update_in.cljs$lang$applyTo = (function (arglist__12168){
var m = cljs.core.first(arglist__12168);
var p__12156 = cljs.core.first(cljs.core.next(arglist__12168));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12168)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12168)));
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
var this__12177 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12265 = null;
var G__12265__12266 = (function (coll,k){
var this__12182 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12265__12267 = (function (coll,k,not_found){
var this__12183 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12265 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12265__12266.call(this,coll,k);
case  3 :
return G__12265__12267.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12265;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12231 = this;
var new_array__12235 = cljs.core.aclone.call(null,this__12231.array);

(new_array__12235[k] = v);
return (new cljs.core.Vector(this__12231.meta,new_array__12235));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12272 = null;
var G__12272__12273 = (function (coll,k){
var this__12237 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12272__12274 = (function (coll,k,not_found){
var this__12238 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12272 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12272__12273.call(this,coll,k);
case  3 :
return G__12272__12274.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12272;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12239 = this;
var new_array__12240 = cljs.core.aclone.call(null,this__12239.array);

new_array__12240.push(o);
return (new cljs.core.Vector(this__12239.meta,new_array__12240));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12277 = null;
var G__12277__12278 = (function (v,f){
var this__12241 = this;
return cljs.core.ci_reduce.call(null,this__12241.array,f);
});
var G__12277__12279 = (function (v,f,start){
var this__12242 = this;
return cljs.core.ci_reduce.call(null,this__12242.array,f,start);
});
G__12277 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12277__12278.call(this,v,f);
case  3 :
return G__12277__12279.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12277;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12243 = this;
if(cljs.core.truth_((this__12243.array.length > 0)))
{var vector_seq__12247 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12243.array.length)))
{return cljs.core.cons.call(null,(this__12243.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12247.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12248 = this;
return this__12248.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12249 = this;
var count__12250 = this__12249.array.length;

if(cljs.core.truth_((count__12250 > 0)))
{return (this__12249.array[(count__12250 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12251 = this;
if(cljs.core.truth_((this__12251.array.length > 0)))
{var new_array__12252 = cljs.core.aclone.call(null,this__12251.array);

new_array__12252.pop();
return (new cljs.core.Vector(this__12251.meta,new_array__12252));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12253 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12254 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12257 = this;
return (new cljs.core.Vector(meta,this__12257.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12259 = this;
return this__12259.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12281 = null;
var G__12281__12282 = (function (coll,n){
var this__12260 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12261 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12261))
{return (n < this__12260.array.length);
} else
{return and__3546__auto____12261;
}
})()))
{return (this__12260.array[n]);
} else
{return null;
}
});
var G__12281__12283 = (function (coll,n,not_found){
var this__12262 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12263 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12263))
{return (n < this__12262.array.length);
} else
{return and__3546__auto____12263;
}
})()))
{return (this__12262.array[n]);
} else
{return not_found;
}
});
G__12281 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12281__12282.call(this,coll,n);
case  3 :
return G__12281__12283.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12281;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12264 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12264.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12350){
var args = cljs.core.seq( arglist__12350 );;
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
var this__12355 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12391 = null;
var G__12391__12393 = (function (coll,k){
var this__12356 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12391__12394 = (function (coll,k,not_found){
var this__12357 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12391 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12391__12393.call(this,coll,k);
case  3 :
return G__12391__12394.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12391;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12358 = this;
var v_pos__12359 = (this__12358.start + key);

return (new cljs.core.Subvec(this__12358.meta,cljs.core._assoc.call(null,this__12358.v,v_pos__12359,val),this__12358.start,((this__12358.end > (v_pos__12359 + 1)) ? this__12358.end : (v_pos__12359 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12399 = null;
var G__12399__12400 = (function (coll,k){
var this__12360 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12399__12401 = (function (coll,k,not_found){
var this__12361 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12399 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12399__12400.call(this,coll,k);
case  3 :
return G__12399__12401.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12399;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12362 = this;
return (new cljs.core.Subvec(this__12362.meta,cljs.core._assoc_n.call(null,this__12362.v,this__12362.end,o),this__12362.start,(this__12362.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12479 = null;
var G__12479__12480 = (function (coll,f){
var this__12364 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12479__12482 = (function (coll,f,start){
var this__12365 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12479 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12479__12480.call(this,coll,f);
case  3 :
return G__12479__12482.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12479;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12366 = this;
var subvec_seq__12370 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12366.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12366.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12370.call(null,this__12366.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12372 = this;
return (this__12372.end - this__12372.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12373 = this;
return cljs.core._nth.call(null,this__12373.v,(this__12373.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12374 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12374.start,this__12374.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12374.meta,this__12374.v,this__12374.start,(this__12374.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12375 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12377 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12379 = this;
return (new cljs.core.Subvec(meta,this__12379.v,this__12379.start,this__12379.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12380 = this;
return this__12380.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12492 = null;
var G__12492__12493 = (function (coll,n){
var this__12382 = this;
return cljs.core._nth.call(null,this__12382.v,(this__12382.start + n));
});
var G__12492__12494 = (function (coll,n,not_found){
var this__12384 = this;
return cljs.core._nth.call(null,this__12384.v,(this__12384.start + n),not_found);
});
G__12492 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12492__12493.call(this,coll,n);
case  3 :
return G__12492__12494.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12492;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12386 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12386.meta);
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
var subvec__12503 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12504 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12503.call(this,v,start);
case  3 :
return subvec__12504.call(this,v,start,end);
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
var this__12521 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12523 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12526 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12528 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12528.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12531 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12536 = this;
return cljs.core._first.call(null,this__12536.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12538 = this;
var temp__3695__auto____12539 = cljs.core.next.call(null,this__12538.front);

if(cljs.core.truth_(temp__3695__auto____12539))
{var f1__12540 = temp__3695__auto____12539;

return (new cljs.core.PersistentQueueSeq(this__12538.meta,f1__12540,this__12538.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12538.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12538.meta,this__12538.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12547 = this;
return this__12547.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12548 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12548.front,this__12548.rear));
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
var this__12646 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12648 = this;
if(cljs.core.truth_(this__12648.front))
{return (new cljs.core.PersistentQueue(this__12648.meta,(this__12648.count + 1),this__12648.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12651 = this__12648.rear;

if(cljs.core.truth_(or__3548__auto____12651))
{return or__3548__auto____12651;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12648.meta,(this__12648.count + 1),cljs.core.conj.call(null,this__12648.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12654 = this;
var rear__12655 = cljs.core.seq.call(null,this__12654.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12657 = this__12654.front;

if(cljs.core.truth_(or__3548__auto____12657))
{return or__3548__auto____12657;
} else
{return rear__12655;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12654.front,cljs.core.seq.call(null,rear__12655)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12659 = this;
return this__12659.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12662 = this;
return cljs.core._first.call(null,this__12662.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12665 = this;
if(cljs.core.truth_(this__12665.front))
{var temp__3695__auto____12669 = cljs.core.next.call(null,this__12665.front);

if(cljs.core.truth_(temp__3695__auto____12669))
{var f1__12671 = temp__3695__auto____12669;

return (new cljs.core.PersistentQueue(this__12665.meta,(this__12665.count - 1),f1__12671,this__12665.rear));
} else
{return (new cljs.core.PersistentQueue(this__12665.meta,(this__12665.count - 1),cljs.core.seq.call(null,this__12665.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12676 = this;
return cljs.core.first.call(null,this__12676.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12678 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12682 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12685 = this;
return (new cljs.core.PersistentQueue(meta,this__12685.count,this__12685.front,this__12685.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12688 = this;
return this__12688.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12690 = this;
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
var this__12720 = this;
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
var len__12744 = array.length;

var i__12745 = 0;

while(true){
if(cljs.core.truth_((i__12745 < len__12744)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12745]))))
{return i__12745;
} else
{{
var G__12791 = (i__12745 + incr);
i__12745 = G__12791;
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
var obj_map_contains_key_QMARK___12833 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12834 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12795 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12795))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12795;
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
return obj_map_contains_key_QMARK___12833.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12834.call(this,k,strobj,true_val,false_val);
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
var this__12866 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12917 = null;
var G__12917__12918 = (function (coll,k){
var this__12868 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12917__12919 = (function (coll,k,not_found){
var this__12870 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12870.strobj,(this__12870.strobj[k]),not_found);
});
G__12917 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12917__12918.call(this,coll,k);
case  3 :
return G__12917__12919.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12917;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12872 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12878 = goog.object.clone.call(null,this__12872.strobj);
var overwrite_QMARK___12880 = new_strobj__12878.hasOwnProperty(k);

(new_strobj__12878[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12880))
{return (new cljs.core.ObjMap(this__12872.meta,this__12872.keys,new_strobj__12878));
} else
{var new_keys__12882 = cljs.core.aclone.call(null,this__12872.keys);

new_keys__12882.push(k);
return (new cljs.core.ObjMap(this__12872.meta,new_keys__12882,new_strobj__12878));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12872.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12883 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12883.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12925 = null;
var G__12925__12926 = (function (coll,k){
var this__12888 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12925__12927 = (function (coll,k,not_found){
var this__12889 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12925 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12925__12926.call(this,coll,k);
case  3 :
return G__12925__12927.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12925;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12890 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12891 = this;
if(cljs.core.truth_((this__12891.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12844_SHARP_){
return cljs.core.vector.call(null,p1__12844_SHARP_,(this__12891.strobj[p1__12844_SHARP_]));
}),this__12891.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12897 = this;
return this__12897.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12900 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12901 = this;
return (new cljs.core.ObjMap(meta,this__12901.keys,this__12901.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12902 = this;
return this__12902.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12904 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12904.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12906 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12907 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12907))
{return this__12906.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12907;
}
})()))
{var new_keys__12913 = cljs.core.aclone.call(null,this__12906.keys);
var new_strobj__12916 = goog.object.clone.call(null,this__12906.strobj);

new_keys__12913.splice(cljs.core.scan_array.call(null,1,k,new_keys__12913),1);
cljs.core.js_delete.call(null,new_strobj__12916,k);
return (new cljs.core.ObjMap(this__12906.meta,new_keys__12913,new_strobj__12916));
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
var this__12973 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13091 = null;
var G__13091__13092 = (function (coll,k){
var this__12975 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13091__13093 = (function (coll,k,not_found){
var this__12978 = this;
var bucket__12979 = (this__12978.hashobj[cljs.core.hash.call(null,k)]);
var i__12980 = (cljs.core.truth_(bucket__12979)?cljs.core.scan_array.call(null,2,k,bucket__12979):null);

if(cljs.core.truth_(i__12980))
{return (bucket__12979[(i__12980 + 1)]);
} else
{return not_found;
}
});
G__13091 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13091__13092.call(this,coll,k);
case  3 :
return G__13091__13093.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13091;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12982 = this;
var h__12984 = cljs.core.hash.call(null,k);
var bucket__12985 = (this__12982.hashobj[h__12984]);

if(cljs.core.truth_(bucket__12985))
{var new_bucket__12986 = cljs.core.aclone.call(null,bucket__12985);
var new_hashobj__12987 = goog.object.clone.call(null,this__12982.hashobj);

(new_hashobj__12987[h__12984] = new_bucket__12986);
var temp__3695__auto____12990 = cljs.core.scan_array.call(null,2,k,new_bucket__12986);

if(cljs.core.truth_(temp__3695__auto____12990))
{var i__12992 = temp__3695__auto____12990;

(new_bucket__12986[(i__12992 + 1)] = v);
return (new cljs.core.HashMap(this__12982.meta,this__12982.count,new_hashobj__12987));
} else
{new_bucket__12986.push(k,v);
return (new cljs.core.HashMap(this__12982.meta,(this__12982.count + 1),new_hashobj__12987));
}
} else
{var new_hashobj__12997 = goog.object.clone.call(null,this__12982.hashobj);

(new_hashobj__12997[h__12984] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12982.meta,(this__12982.count + 1),new_hashobj__12997));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13001 = this;
var bucket__13004 = (this__13001.hashobj[cljs.core.hash.call(null,k)]);
var i__13008 = (cljs.core.truth_(bucket__13004)?cljs.core.scan_array.call(null,2,k,bucket__13004):null);

if(cljs.core.truth_(i__13008))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13095 = null;
var G__13095__13096 = (function (coll,k){
var this__13012 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13095__13097 = (function (coll,k,not_found){
var this__13015 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
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
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13018 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13019 = this;
if(cljs.core.truth_((this__13019.count > 0)))
{var hashes__13024 = cljs.core.js_keys.call(null,this__13019.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12971_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13019.hashobj[p1__12971_SHARP_])));
}),hashes__13024);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13026 = this;
return this__13026.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13027 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13029 = this;
return (new cljs.core.HashMap(meta,this__13029.count,this__13029.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13032 = this;
return this__13032.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13034 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13034.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13036 = this;
var h__13038 = cljs.core.hash.call(null,k);
var bucket__13039 = (this__13036.hashobj[h__13038]);
var i__13040 = (cljs.core.truth_(bucket__13039)?cljs.core.scan_array.call(null,2,k,bucket__13039):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13040)))
{return coll;
} else
{var new_hashobj__13041 = goog.object.clone.call(null,this__13036.hashobj);

if(cljs.core.truth_((3 > bucket__13039.length)))
{cljs.core.js_delete.call(null,new_hashobj__13041,h__13038);
} else
{var new_bucket__13043 = cljs.core.aclone.call(null,bucket__13039);

new_bucket__13043.splice(i__13040,2);
(new_hashobj__13041[h__13038] = new_bucket__13043);
}
return (new cljs.core.HashMap(this__13036.meta,(this__13036.count - 1),new_hashobj__13041));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13137 = ks.length;

var i__13138 = 0;
var out__13139 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13138 < len__13137)))
{{
var G__13143 = (i__13138 + 1);
var G__13144 = cljs.core.assoc.call(null,out__13139,(ks[i__13138]),(vs[i__13138]));
i__13138 = G__13143;
out__13139 = G__13144;
continue;
}
} else
{return out__13139;
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
var in$__13147 = cljs.core.seq.call(null,keyvals);
var out__13148 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13147))
{{
var G__13157 = cljs.core.nnext.call(null,in$__13147);
var G__13158 = cljs.core.assoc.call(null,out__13148,cljs.core.first.call(null,in$__13147),cljs.core.second.call(null,in$__13147));
in$__13147 = G__13157;
out__13148 = G__13158;
continue;
}
} else
{return out__13148;
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
hash_map.cljs$lang$applyTo = (function (arglist__13159){
var keyvals = cljs.core.seq( arglist__13159 );;
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
{return cljs.core.reduce.call(null,(function (p1__13163_SHARP_,p2__13164_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13170 = p1__13163_SHARP_;

if(cljs.core.truth_(or__3548__auto____13170))
{return or__3548__auto____13170;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13164_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13217){
var maps = cljs.core.seq( arglist__13217 );;
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
{var merge_entry__13223 = (function (m,e){
var k__13220 = cljs.core.first.call(null,e);
var v__13221 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13220)))
{return cljs.core.assoc.call(null,m,k__13220,f.call(null,cljs.core.get.call(null,m,k__13220),v__13221));
} else
{return cljs.core.assoc.call(null,m,k__13220,v__13221);
}
});
var merge2__13226 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13223,(function (){var or__3548__auto____13225 = m1;

if(cljs.core.truth_(or__3548__auto____13225))
{return or__3548__auto____13225;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13226,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13235){
var f = cljs.core.first(arglist__13235);
var maps = cljs.core.rest(arglist__13235);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13247 = cljs.core.ObjMap.fromObject([],{});
var keys__13248 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13248))
{var key__13249 = cljs.core.first.call(null,keys__13248);
var entry__13250 = cljs.core.get.call(null,map,key__13249,"﷐'user/not-found");

{
var G__13265 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13250,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13247,key__13249,entry__13250):ret__13247);
var G__13266 = cljs.core.next.call(null,keys__13248);
ret__13247 = G__13265;
keys__13248 = G__13266;
continue;
}
} else
{return ret__13247;
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
var this__13278 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13373 = null;
var G__13373__13374 = (function (coll,v){
var this__13279 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13373__13375 = (function (coll,v,not_found){
var this__13281 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13281.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13373 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13373__13374.call(this,coll,v);
case  3 :
return G__13373__13375.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13373;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13379 = null;
var G__13379__13380 = (function (coll,k){
var this__13285 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13379__13381 = (function (coll,k,not_found){
var this__13289 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13379 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13379__13380.call(this,coll,k);
case  3 :
return G__13379__13381.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13379;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13291 = this;
return (new cljs.core.Set(this__13291.meta,cljs.core.assoc.call(null,this__13291.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13294 = this;
return cljs.core.keys.call(null,this__13294.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13357 = this;
return (new cljs.core.Set(this__13357.meta,cljs.core.dissoc.call(null,this__13357.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13358 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13361 = this;
var and__3546__auto____13363 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13363))
{var and__3546__auto____13365 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13365))
{return cljs.core.every_QMARK_.call(null,(function (p1__13238_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13238_SHARP_);
}),other);
} else
{return and__3546__auto____13365;
}
} else
{return and__3546__auto____13363;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13367 = this;
return (new cljs.core.Set(meta,this__13367.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13369 = this;
return this__13369.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13370 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13370.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13393 = cljs.core.seq.call(null,coll);
var out__13394 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13393))))
{{
var G__13400 = cljs.core.rest.call(null,in$__13393);
var G__13401 = cljs.core.conj.call(null,out__13394,cljs.core.first.call(null,in$__13393));
in$__13393 = G__13400;
out__13394 = G__13401;
continue;
}
} else
{return out__13394;
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
{var n__13404 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13405 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13405))
{var e__13408 = temp__3695__auto____13405;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13408));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13404,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13392_SHARP_){
var temp__3695__auto____13409 = cljs.core.find.call(null,smap,p1__13392_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13409))
{var e__13411 = temp__3695__auto____13409;

return cljs.core.second.call(null,e__13411);
} else
{return p1__13392_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13427 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13420,seen){
while(true){
var vec__13421__13422 = p__13420;
var f__13423 = cljs.core.nth.call(null,vec__13421__13422,0,null);
var xs__13424 = vec__13421__13422;

var temp__3698__auto____13425 = cljs.core.seq.call(null,xs__13424);

if(cljs.core.truth_(temp__3698__auto____13425))
{var s__13426 = temp__3698__auto____13425;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13423)))
{{
var G__13434 = cljs.core.rest.call(null,s__13426);
var G__13435 = seen;
p__13420 = G__13434;
seen = G__13435;
continue;
}
} else
{return cljs.core.cons.call(null,f__13423,step.call(null,cljs.core.rest.call(null,s__13426),cljs.core.conj.call(null,seen,f__13423)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13427.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13438 = cljs.core.Vector.fromArray([]);
var s__13439 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13439)))
{{
var G__13442 = cljs.core.conj.call(null,ret__13438,cljs.core.first.call(null,s__13439));
var G__13443 = cljs.core.next.call(null,s__13439);
ret__13438 = G__13442;
s__13439 = G__13443;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13438);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13448 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13448))
{return or__3548__auto____13448;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13450 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13450 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13450 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13459 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13459))
{return or__3548__auto____13459;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13460 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13460 > -1)))
{return cljs.core.subs.call(null,x,2,i__13460);
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
var map__13611 = cljs.core.ObjMap.fromObject([],{});
var ks__13612 = cljs.core.seq.call(null,keys);
var vs__13613 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13614 = ks__13612;

if(cljs.core.truth_(and__3546__auto____13614))
{return vs__13613;
} else
{return and__3546__auto____13614;
}
})()))
{{
var G__13615 = cljs.core.assoc.call(null,map__13611,cljs.core.first.call(null,ks__13612),cljs.core.first.call(null,vs__13613));
var G__13616 = cljs.core.next.call(null,ks__13612);
var G__13617 = cljs.core.next.call(null,vs__13613);
map__13611 = G__13615;
ks__13612 = G__13616;
vs__13613 = G__13617;
continue;
}
} else
{return map__13611;
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
var max_key__13629 = (function (k,x){
return x;
});
var max_key__13630 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13631 = (function() { 
var G__13636__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13609_SHARP_,p2__13610_SHARP_){
return max_key.call(null,k,p1__13609_SHARP_,p2__13610_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13636 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13636__delegate.call(this, k, x, y, more);
};
G__13636.cljs$lang$maxFixedArity = 3;
G__13636.cljs$lang$applyTo = (function (arglist__13639){
var k = cljs.core.first(arglist__13639);
var x = cljs.core.first(cljs.core.next(arglist__13639));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13639)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13639)));
return G__13636__delegate.call(this, k, x, y, more);
});
return G__13636;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13629.call(this,k,x);
case  3 :
return max_key__13630.call(this,k,x,y);
default:
return max_key__13631.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13631.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13648 = (function (k,x){
return x;
});
var min_key__13649 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13650 = (function() { 
var G__13654__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13621_SHARP_,p2__13622_SHARP_){
return min_key.call(null,k,p1__13621_SHARP_,p2__13622_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13654 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13654__delegate.call(this, k, x, y, more);
};
G__13654.cljs$lang$maxFixedArity = 3;
G__13654.cljs$lang$applyTo = (function (arglist__13657){
var k = cljs.core.first(arglist__13657);
var x = cljs.core.first(cljs.core.next(arglist__13657));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13657)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13657)));
return G__13654__delegate.call(this, k, x, y, more);
});
return G__13654;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13648.call(this,k,x);
case  3 :
return min_key__13649.call(this,k,x,y);
default:
return min_key__13650.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13650.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13665 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13666 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13659 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13659))
{var s__13660 = temp__3698__auto____13659;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13660),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13660)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13665.call(this,n,step);
case  3 :
return partition_all__13666.call(this,n,step,coll);
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
var temp__3698__auto____13675 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13675))
{var s__13676 = temp__3698__auto____13675;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13676))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13676),take_while.call(null,pred,cljs.core.rest.call(null,s__13676)));
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
var this__13718 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13720 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13868 = null;
var G__13868__13869 = (function (rng,f){
var this__13818 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13868__13870 = (function (rng,f,s){
var this__13819 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13868 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13868__13869.call(this,rng,f);
case  3 :
return G__13868__13870.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13868;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13820 = this;
var comp__13825 = (cljs.core.truth_((this__13820.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13825.call(null,this__13820.start,this__13820.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13827 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13827.end - this__13827.start) / this__13827.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13830 = this;
return this__13830.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13831 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13831.meta,(this__13831.start + this__13831.step),this__13831.end,this__13831.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13833 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13837 = this;
return (new cljs.core.Range(meta,this__13837.start,this__13837.end,this__13837.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13839 = this;
return this__13839.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13910 = null;
var G__13910__13911 = (function (rng,n){
var this__13840 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13840.start + (n * this__13840.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13846 = (this__13840.start > this__13840.end);

if(cljs.core.truth_(and__3546__auto____13846))
{return cljs.core._EQ_.call(null,this__13840.step,0);
} else
{return and__3546__auto____13846;
}
})()))
{return this__13840.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13910__13912 = (function (rng,n,not_found){
var this__13847 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13847.start + (n * this__13847.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13850 = (this__13847.start > this__13847.end);

if(cljs.core.truth_(and__3546__auto____13850))
{return cljs.core._EQ_.call(null,this__13847.step,0);
} else
{return and__3546__auto____13850;
}
})()))
{return this__13847.start;
} else
{return not_found;
}
}
});
G__13910 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13910__13911.call(this,rng,n);
case  3 :
return G__13910__13912.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13910;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13851 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13851.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13932 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13933 = (function (end){
return range.call(null,0,end,1);
});
var range__13934 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13935 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13932.call(this);
case  1 :
return range__13933.call(this,start);
case  2 :
return range__13934.call(this,start,end);
case  3 :
return range__13935.call(this,start,end,step);
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
var temp__3698__auto____13948 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13948))
{var s__13949 = temp__3698__auto____13948;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13949),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13949)));
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
var temp__3698__auto____13999 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13999))
{var s__14000 = temp__3698__auto____13999;

var fst__14001 = cljs.core.first.call(null,s__14000);
var fv__14002 = f.call(null,fst__14001);
var run__14003 = cljs.core.cons.call(null,fst__14001,cljs.core.take_while.call(null,(function (p1__13960_SHARP_){
return cljs.core._EQ_.call(null,fv__14002,f.call(null,p1__13960_SHARP_));
}),cljs.core.next.call(null,s__14000)));

return cljs.core.cons.call(null,run__14003,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14003),s__14000))));
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
var reductions__14047 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14030 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14030))
{var s__14031 = temp__3695__auto____14030;

return reductions.call(null,f,cljs.core.first.call(null,s__14031),cljs.core.rest.call(null,s__14031));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14048 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14044 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14044))
{var s__14045 = temp__3698__auto____14044;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14045)),cljs.core.rest.call(null,s__14045));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14047.call(this,f,init);
case  3 :
return reductions__14048.call(this,f,init,coll);
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
var juxt__14101 = (function (f){
return (function() {
var G__14112 = null;
var G__14112__14117 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14112__14118 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14112__14119 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14112__14120 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14112__14121 = (function() { 
var G__14125__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14125 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14125__delegate.call(this, x, y, z, args);
};
G__14125.cljs$lang$maxFixedArity = 3;
G__14125.cljs$lang$applyTo = (function (arglist__14127){
var x = cljs.core.first(arglist__14127);
var y = cljs.core.first(cljs.core.next(arglist__14127));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14127)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14127)));
return G__14125__delegate.call(this, x, y, z, args);
});
return G__14125;
})()
;
G__14112 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14112__14117.call(this);
case  1 :
return G__14112__14118.call(this,x);
case  2 :
return G__14112__14119.call(this,x,y);
case  3 :
return G__14112__14120.call(this,x,y,z);
default:
return G__14112__14121.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14112.cljs$lang$maxFixedArity = 3;
G__14112.cljs$lang$applyTo = G__14112__14121.cljs$lang$applyTo;
return G__14112;
})()
});
var juxt__14103 = (function (f,g){
return (function() {
var G__14130 = null;
var G__14130__14133 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14130__14134 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14130__14135 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14130__14136 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14130__14137 = (function() { 
var G__14153__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14153 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14153__delegate.call(this, x, y, z, args);
};
G__14153.cljs$lang$maxFixedArity = 3;
G__14153.cljs$lang$applyTo = (function (arglist__14154){
var x = cljs.core.first(arglist__14154);
var y = cljs.core.first(cljs.core.next(arglist__14154));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14154)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14154)));
return G__14153__delegate.call(this, x, y, z, args);
});
return G__14153;
})()
;
G__14130 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14130__14133.call(this);
case  1 :
return G__14130__14134.call(this,x);
case  2 :
return G__14130__14135.call(this,x,y);
case  3 :
return G__14130__14136.call(this,x,y,z);
default:
return G__14130__14137.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14130.cljs$lang$maxFixedArity = 3;
G__14130.cljs$lang$applyTo = G__14130__14137.cljs$lang$applyTo;
return G__14130;
})()
});
var juxt__14104 = (function (f,g,h){
return (function() {
var G__14157 = null;
var G__14157__14158 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14157__14159 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14157__14160 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14157__14161 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14157__14162 = (function() { 
var G__14175__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14175 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14175__delegate.call(this, x, y, z, args);
};
G__14175.cljs$lang$maxFixedArity = 3;
G__14175.cljs$lang$applyTo = (function (arglist__14179){
var x = cljs.core.first(arglist__14179);
var y = cljs.core.first(cljs.core.next(arglist__14179));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14179)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14179)));
return G__14175__delegate.call(this, x, y, z, args);
});
return G__14175;
})()
;
G__14157 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14157__14158.call(this);
case  1 :
return G__14157__14159.call(this,x);
case  2 :
return G__14157__14160.call(this,x,y);
case  3 :
return G__14157__14161.call(this,x,y,z);
default:
return G__14157__14162.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14157.cljs$lang$maxFixedArity = 3;
G__14157.cljs$lang$applyTo = G__14157__14162.cljs$lang$applyTo;
return G__14157;
})()
});
var juxt__14105 = (function() { 
var G__14183__delegate = function (f,g,h,fs){
var fs__14079 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14184 = null;
var G__14184__14185 = (function (){
return cljs.core.reduce.call(null,(function (p1__14014_SHARP_,p2__14016_SHARP_){
return cljs.core.conj.call(null,p1__14014_SHARP_,p2__14016_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14079);
});
var G__14184__14186 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14022_SHARP_,p2__14023_SHARP_){
return cljs.core.conj.call(null,p1__14022_SHARP_,p2__14023_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14079);
});
var G__14184__14187 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14024_SHARP_,p2__14025_SHARP_){
return cljs.core.conj.call(null,p1__14024_SHARP_,p2__14025_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14079);
});
var G__14184__14188 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14026_SHARP_,p2__14027_SHARP_){
return cljs.core.conj.call(null,p1__14026_SHARP_,p2__14027_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14079);
});
var G__14184__14189 = (function() { 
var G__14207__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14028_SHARP_,p2__14029_SHARP_){
return cljs.core.conj.call(null,p1__14028_SHARP_,cljs.core.apply.call(null,p2__14029_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14079);
};
var G__14207 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14207__delegate.call(this, x, y, z, args);
};
G__14207.cljs$lang$maxFixedArity = 3;
G__14207.cljs$lang$applyTo = (function (arglist__14210){
var x = cljs.core.first(arglist__14210);
var y = cljs.core.first(cljs.core.next(arglist__14210));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14210)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14210)));
return G__14207__delegate.call(this, x, y, z, args);
});
return G__14207;
})()
;
G__14184 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14184__14185.call(this);
case  1 :
return G__14184__14186.call(this,x);
case  2 :
return G__14184__14187.call(this,x,y);
case  3 :
return G__14184__14188.call(this,x,y,z);
default:
return G__14184__14189.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14184.cljs$lang$maxFixedArity = 3;
G__14184.cljs$lang$applyTo = G__14184__14189.cljs$lang$applyTo;
return G__14184;
})()
};
var G__14183 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14183__delegate.call(this, f, g, h, fs);
};
G__14183.cljs$lang$maxFixedArity = 3;
G__14183.cljs$lang$applyTo = (function (arglist__14212){
var f = cljs.core.first(arglist__14212);
var g = cljs.core.first(cljs.core.next(arglist__14212));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14212)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14212)));
return G__14183__delegate.call(this, f, g, h, fs);
});
return G__14183;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14101.call(this,f);
case  2 :
return juxt__14103.call(this,f,g);
case  3 :
return juxt__14104.call(this,f,g,h);
default:
return juxt__14105.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14105.cljs$lang$applyTo;
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
var dorun__14250 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14258 = cljs.core.next.call(null,coll);
coll = G__14258;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14252 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14241 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14241))
{return (n > 0);
} else
{return and__3546__auto____14241;
}
})()))
{{
var G__14259 = (n - 1);
var G__14260 = cljs.core.next.call(null,coll);
n = G__14259;
coll = G__14260;
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
return dorun__14250.call(this,n);
case  2 :
return dorun__14252.call(this,n,coll);
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
var doall__14273 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14274 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14273.call(this,n);
case  2 :
return doall__14274.call(this,n,coll);
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
var matches__14279 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14279),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14279),1)))
{return cljs.core.first.call(null,matches__14279);
} else
{return cljs.core.vec.call(null,matches__14279);
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
var matches__14297 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14297)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14297),1)))
{return cljs.core.first.call(null,matches__14297);
} else
{return cljs.core.vec.call(null,matches__14297);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14310 = cljs.core.re_find.call(null,re,s);
var match_idx__14312 = s.search(re);
var match_str__14314 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14310))?cljs.core.first.call(null,match_data__14310):match_data__14310);
var post_match__14316 = cljs.core.subs.call(null,s,(match_idx__14312 + cljs.core.count.call(null,match_str__14314)));

if(cljs.core.truth_(match_data__14310))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14310,re_seq.call(null,re,post_match__14316));
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14340 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14340))
{var and__3546__auto____14349 = (function (){var x__445__auto____14342 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14345 = x__445__auto____14342;

if(cljs.core.truth_(and__3546__auto____14345))
{var and__3546__auto____14346 = x__445__auto____14342.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14346))
{return cljs.core.not.call(null,x__445__auto____14342.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14346;
}
} else
{return and__3546__auto____14345;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14342);
}
})();

if(cljs.core.truth_(and__3546__auto____14349))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14349;
}
} else
{return and__3546__auto____14340;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14354 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14355 = x__445__auto____14354;

if(cljs.core.truth_(and__3546__auto____14355))
{var and__3546__auto____14358 = x__445__auto____14354.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14358))
{return cljs.core.not.call(null,x__445__auto____14354.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14358;
}
} else
{return and__3546__auto____14355;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14354);
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
var first_obj__14492 = cljs.core.first.call(null,objs);
var sb__14493 = (new goog.string.StringBuffer());

var G__14494__14495 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14494__14495))
{var obj__14496 = cljs.core.first.call(null,G__14494__14495);
var G__14494__14497 = G__14494__14495;

while(true){
if(cljs.core.truth_((obj__14496 === first_obj__14492)))
{} else
{sb__14493.append(" ");
}
var G__14498__14500 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14496,opts));

if(cljs.core.truth_(G__14498__14500))
{var string__14503 = cljs.core.first.call(null,G__14498__14500);
var G__14498__14504 = G__14498__14500;

while(true){
sb__14493.append(string__14503);
var temp__3698__auto____14505 = cljs.core.next.call(null,G__14498__14504);

if(cljs.core.truth_(temp__3698__auto____14505))
{var G__14498__14507 = temp__3698__auto____14505;

{
var G__14518 = cljs.core.first.call(null,G__14498__14507);
var G__14519 = G__14498__14507;
string__14503 = G__14518;
G__14498__14504 = G__14519;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14509 = cljs.core.next.call(null,G__14494__14497);

if(cljs.core.truth_(temp__3698__auto____14509))
{var G__14494__14510 = temp__3698__auto____14509;

{
var G__14523 = cljs.core.first.call(null,G__14494__14510);
var G__14524 = G__14494__14510;
obj__14496 = G__14523;
G__14494__14497 = G__14524;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14493);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14530 = cljs.core.first.call(null,objs);

var G__14531__14533 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14531__14533))
{var obj__14535 = cljs.core.first.call(null,G__14531__14533);
var G__14531__14536 = G__14531__14533;

while(true){
if(cljs.core.truth_((obj__14535 === first_obj__14530)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14538__14540 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14535,opts));

if(cljs.core.truth_(G__14538__14540))
{var string__14542 = cljs.core.first.call(null,G__14538__14540);
var G__14538__14543 = G__14538__14540;

while(true){
cljs.core.string_print.call(null,string__14542);
var temp__3698__auto____14544 = cljs.core.next.call(null,G__14538__14543);

if(cljs.core.truth_(temp__3698__auto____14544))
{var G__14538__14545 = temp__3698__auto____14544;

{
var G__14557 = cljs.core.first.call(null,G__14538__14545);
var G__14558 = G__14538__14545;
string__14542 = G__14557;
G__14538__14543 = G__14558;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14546 = cljs.core.next.call(null,G__14531__14536);

if(cljs.core.truth_(temp__3698__auto____14546))
{var G__14531__14547 = temp__3698__auto____14546;

{
var G__14560 = cljs.core.first.call(null,G__14531__14547);
var G__14561 = G__14531__14547;
obj__14535 = G__14560;
G__14531__14536 = G__14561;
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
pr_str.cljs$lang$applyTo = (function (arglist__14567){
var objs = cljs.core.seq( arglist__14567 );;
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
pr.cljs$lang$applyTo = (function (arglist__14571){
var objs = cljs.core.seq( arglist__14571 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14574){
var objs = cljs.core.seq( arglist__14574 );;
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
println.cljs$lang$applyTo = (function (arglist__14577){
var objs = cljs.core.seq( arglist__14577 );;
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
prn.cljs$lang$applyTo = (function (arglist__14617){
var objs = cljs.core.seq( arglist__14617 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14619 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14619,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14621 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14621))
{var nspc__14622 = temp__3698__auto____14621;

return cljs.core.str.call(null,nspc__14622,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14624 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14624))
{var nspc__14625 = temp__3698__auto____14624;

return cljs.core.str.call(null,nspc__14625,"/");
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
var pr_pair__14626 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14626,"{",", ","}",opts,coll);
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
var this__14885 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14886 = this;
var G__14887__14888 = cljs.core.seq.call(null,this__14886.watches);

if(cljs.core.truth_(G__14887__14888))
{var G__14890__14895 = cljs.core.first.call(null,G__14887__14888);
var vec__14892__14897 = G__14890__14895;
var key__14898 = cljs.core.nth.call(null,vec__14892__14897,0,null);
var f__14900 = cljs.core.nth.call(null,vec__14892__14897,1,null);
var G__14887__14901 = G__14887__14888;

var G__14890__14902 = G__14890__14895;
var G__14887__14903 = G__14887__14901;

while(true){
var vec__14905__14907 = G__14890__14902;
var key__14909 = cljs.core.nth.call(null,vec__14905__14907,0,null);
var f__14910 = cljs.core.nth.call(null,vec__14905__14907,1,null);
var G__14887__14911 = G__14887__14903;

f__14910.call(null,key__14909,this$,oldval,newval);
var temp__3698__auto____14913 = cljs.core.next.call(null,G__14887__14911);

if(cljs.core.truth_(temp__3698__auto____14913))
{var G__14887__14916 = temp__3698__auto____14913;

{
var G__14945 = cljs.core.first.call(null,G__14887__14916);
var G__14946 = G__14887__14916;
G__14890__14902 = G__14945;
G__14887__14903 = G__14946;
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
var this__14919 = this;
return this$.watches = cljs.core.assoc.call(null,this__14919.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14928 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14928.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14930 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14930.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14933 = this;
return this__14933.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14936 = this;
return this__14936.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14938 = this;
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
var atom__14966 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14967 = (function() { 
var G__14969__delegate = function (x,p__14953){
var map__14954__14955 = p__14953;
var map__14954__14957 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14954__14955))?cljs.core.apply.call(null,cljs.core.hash_map,map__14954__14955):map__14954__14955);
var validator__14960 = cljs.core.get.call(null,map__14954__14957,"﷐'validator");
var meta__14961 = cljs.core.get.call(null,map__14954__14957,"﷐'meta");

return (new cljs.core.Atom(x,meta__14961,validator__14960,null));
};
var G__14969 = function (x,var_args){
var p__14953 = null;
if (goog.isDef(var_args)) {
  p__14953 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14969__delegate.call(this, x, p__14953);
};
G__14969.cljs$lang$maxFixedArity = 1;
G__14969.cljs$lang$applyTo = (function (arglist__14973){
var x = cljs.core.first(arglist__14973);
var p__14953 = cljs.core.rest(arglist__14973);
return G__14969__delegate.call(this, x, p__14953);
});
return G__14969;
})()
;
atom = function(x,var_args){
var p__14953 = var_args;
switch(arguments.length){
case  1 :
return atom__14966.call(this,x);
default:
return atom__14967.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14967.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14975 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14975))
{var validate__14976 = temp__3698__auto____14975;

if(cljs.core.truth_(validate__14976.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14977 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14977,new_value);
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
var swap_BANG___14990 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14991 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14992 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14993 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14994 = (function() { 
var G__14999__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14999 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14999__delegate.call(this, a, f, x, y, z, more);
};
G__14999.cljs$lang$maxFixedArity = 5;
G__14999.cljs$lang$applyTo = (function (arglist__15001){
var a = cljs.core.first(arglist__15001);
var f = cljs.core.first(cljs.core.next(arglist__15001));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15001)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15001))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15001)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15001)))));
return G__14999__delegate.call(this, a, f, x, y, z, more);
});
return G__14999;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14990.call(this,a,f);
case  3 :
return swap_BANG___14991.call(this,a,f,x);
case  4 :
return swap_BANG___14992.call(this,a,f,x,y);
case  5 :
return swap_BANG___14993.call(this,a,f,x,y,z);
default:
return swap_BANG___14994.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14994.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15093){
var iref = cljs.core.first(arglist__15093);
var f = cljs.core.first(cljs.core.next(arglist__15093));
var args = cljs.core.rest(cljs.core.next(arglist__15093));
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
var gensym__15096 = (function (){
return gensym.call(null,"G__");
});
var gensym__15097 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__15096.call(this);
case  1 :
return gensym__15097.call(this,prefix_string);
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
var this__15100 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__15100.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15102 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__15102.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__15102.state,this__15102.f);
}
return cljs.core.deref.call(null,this__15102.state);
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
delay.cljs$lang$applyTo = (function (arglist__15103){
var body = cljs.core.seq( arglist__15103 );;
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
var map__15104__15105 = options;
var map__15104__15106 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15104__15105))?cljs.core.apply.call(null,cljs.core.hash_map,map__15104__15105):map__15104__15105);
var keywordize_keys__15107 = cljs.core.get.call(null,map__15104__15106,"﷐'keywordize-keys");
var keyfn__15108 = (cljs.core.truth_(keywordize_keys__15107)?cljs.core.keyword:cljs.core.str);
var f__15121 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15120 = (function iter__15113(s__15114){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15114__15115 = s__15114;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15114__15115)))
{var k__15116 = cljs.core.first.call(null,s__15114__15115);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15108.call(null,k__15116),thisfn.call(null,(x[k__15116]))]),iter__15113.call(null,cljs.core.rest.call(null,s__15114__15115)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15120.call(null,cljs.core.js_keys.call(null,x));
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

return f__15121.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15122){
var x = cljs.core.first(arglist__15122);
var options = cljs.core.rest(arglist__15122);
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
var mem__15125 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15134__delegate = function (args){
var temp__3695__auto____15127 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15125),args);

if(cljs.core.truth_(temp__3695__auto____15127))
{var v__15129 = temp__3695__auto____15127;

return v__15129;
} else
{var ret__15130 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15125,cljs.core.assoc,args,ret__15130);
return ret__15130;
}
};
var G__15134 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15134__delegate.call(this, args);
};
G__15134.cljs$lang$maxFixedArity = 0;
G__15134.cljs$lang$applyTo = (function (arglist__15135){
var args = cljs.core.seq( arglist__15135 );;
return G__15134__delegate.call(this, args);
});
return G__15134;
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
var trampoline__15186 = (function (f){
while(true){
var ret__15137 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15137)))
{{
var G__15189 = ret__15137;
f = G__15189;
continue;
}
} else
{return ret__15137;
}
break;
}
});
var trampoline__15187 = (function() { 
var G__15190__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15190 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15190__delegate.call(this, f, args);
};
G__15190.cljs$lang$maxFixedArity = 1;
G__15190.cljs$lang$applyTo = (function (arglist__15191){
var f = cljs.core.first(arglist__15191);
var args = cljs.core.rest(arglist__15191);
return G__15190__delegate.call(this, f, args);
});
return G__15190;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15186.call(this,f);
default:
return trampoline__15187.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15187.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15194 = (function (){
return rand.call(null,1);
});
var rand__15195 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15194.call(this);
case  1 :
return rand__15195.call(this,n);
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
var k__15204 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15204,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15204,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15225 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15226 = (function (h,child,parent){
var or__3548__auto____15214 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15214))
{return or__3548__auto____15214;
} else
{var or__3548__auto____15215 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15215))
{return or__3548__auto____15215;
} else
{var and__3546__auto____15216 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15216))
{var and__3546__auto____15217 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15217))
{var and__3546__auto____15218 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15218))
{var ret__15219 = true;
var i__15220 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15222 = cljs.core.not.call(null,ret__15219);

if(cljs.core.truth_(or__3548__auto____15222))
{return or__3548__auto____15222;
} else
{return cljs.core._EQ_.call(null,i__15220,cljs.core.count.call(null,parent));
}
})()))
{return ret__15219;
} else
{{
var G__15233 = isa_QMARK_.call(null,h,child.call(null,i__15220),parent.call(null,i__15220));
var G__15234 = (i__15220 + 1);
ret__15219 = G__15233;
i__15220 = G__15234;
continue;
}
}
break;
}
} else
{return and__3546__auto____15218;
}
} else
{return and__3546__auto____15217;
}
} else
{return and__3546__auto____15216;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15225.call(this,h,child);
case  3 :
return isa_QMARK___15226.call(this,h,child,parent);
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
var parents__15239 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15240 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15239.call(this,h);
case  2 :
return parents__15240.call(this,h,tag);
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
var ancestors__15247 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15248 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15247.call(this,h);
case  2 :
return ancestors__15248.call(this,h,tag);
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
var descendants__15255 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15256 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15255.call(this,h);
case  2 :
return descendants__15256.call(this,h,tag);
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
var derive__15325 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15326 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15318 = "﷐'parents".call(null,h);
var td__15319 = "﷐'descendants".call(null,h);
var ta__15320 = "﷐'ancestors".call(null,h);
var tf__15321 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15323 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15318.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15320.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15320.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15318,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15321.call(null,"﷐'ancestors".call(null,h),tag,td__15319,parent,ta__15320),"﷐'descendants":tf__15321.call(null,"﷐'descendants".call(null,h),parent,ta__15320,tag,td__15319)});
})());

if(cljs.core.truth_(or__3548__auto____15323))
{return or__3548__auto____15323;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15325.call(this,h,tag);
case  3 :
return derive__15326.call(this,h,tag,parent);
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
var underive__15370 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15371 = (function (h,tag,parent){
var parentMap__15363 = "﷐'parents".call(null,h);
var childsParents__15364 = (cljs.core.truth_(parentMap__15363.call(null,tag))?cljs.core.disj.call(null,parentMap__15363.call(null,tag),parent):cljs.core.set([]));
var newParents__15368 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15364))?cljs.core.assoc.call(null,parentMap__15363,tag,childsParents__15364):cljs.core.dissoc.call(null,parentMap__15363,tag));
var deriv_seq__15369 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15260_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15260_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15260_SHARP_),cljs.core.second.call(null,p1__15260_SHARP_)));
}),cljs.core.seq.call(null,newParents__15368)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15363.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15314_SHARP_,p2__15315_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15314_SHARP_,p2__15315_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15369));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15370.call(this,h,tag);
case  3 :
return underive__15371.call(this,h,tag,parent);
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
var xprefs__15374 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15376 = (cljs.core.truth_((function (){var and__3546__auto____15375 = xprefs__15374;

if(cljs.core.truth_(and__3546__auto____15375))
{return xprefs__15374.call(null,y);
} else
{return and__3546__auto____15375;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15376))
{return or__3548__auto____15376;
} else
{var or__3548__auto____15378 = (function (){var ps__15377 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15377) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15377),prefer_table)))
{} else
{}
{
var G__15399 = cljs.core.rest.call(null,ps__15377);
ps__15377 = G__15399;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15378))
{return or__3548__auto____15378;
} else
{var or__3548__auto____15380 = (function (){var ps__15379 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15379) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15379),y,prefer_table)))
{} else
{}
{
var G__15400 = cljs.core.rest.call(null,ps__15379);
ps__15379 = G__15400;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15380))
{return or__3548__auto____15380;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15401 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15401))
{return or__3548__auto____15401;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15455 = cljs.core.reduce.call(null,(function (be,p__15402){
var vec__15403__15441 = p__15402;
var k__15443 = cljs.core.nth.call(null,vec__15403__15441,0,null);
var ___15445 = cljs.core.nth.call(null,vec__15403__15441,1,null);
var e__15447 = vec__15403__15441;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15443)))
{var be2__15452 = (cljs.core.truth_((function (){var or__3548__auto____15450 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15450))
{return or__3548__auto____15450;
} else
{return cljs.core.dominates.call(null,k__15443,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15447:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15452),k__15443,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15443," and ",cljs.core.first.call(null,be2__15452),", and neither is preferred")));
}
return be2__15452;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15455))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15455));
return cljs.core.second.call(null,best_entry__15455);
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
if(cljs.core.truth_((function (){var and__3546__auto____15463 = mf;

if(cljs.core.truth_(and__3546__auto____15463))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15463;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15464 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15464))
{return or__3548__auto____15464;
} else
{var or__3548__auto____15465 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15465))
{return or__3548__auto____15465;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15470 = mf;

if(cljs.core.truth_(and__3546__auto____15470))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15470;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15474 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15474))
{return or__3548__auto____15474;
} else
{var or__3548__auto____15477 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15477))
{return or__3548__auto____15477;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15481 = mf;

if(cljs.core.truth_(and__3546__auto____15481))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15481;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15483 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15483))
{return or__3548__auto____15483;
} else
{var or__3548__auto____15484 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15484))
{return or__3548__auto____15484;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15487 = mf;

if(cljs.core.truth_(and__3546__auto____15487))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15487;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15489 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15489))
{return or__3548__auto____15489;
} else
{var or__3548__auto____15490 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15490))
{return or__3548__auto____15490;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15492 = mf;

if(cljs.core.truth_(and__3546__auto____15492))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15492;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15495 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15495))
{return or__3548__auto____15495;
} else
{var or__3548__auto____15496 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15496))
{return or__3548__auto____15496;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15498 = mf;

if(cljs.core.truth_(and__3546__auto____15498))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15498;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15501 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15501))
{return or__3548__auto____15501;
} else
{var or__3548__auto____15502 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15502))
{return or__3548__auto____15502;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15504 = mf;

if(cljs.core.truth_(and__3546__auto____15504))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15504;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15507 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15507))
{return or__3548__auto____15507;
} else
{var or__3548__auto____15508 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15508))
{return or__3548__auto____15508;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15511 = mf;

if(cljs.core.truth_(and__3546__auto____15511))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15511;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15514 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15514))
{return or__3548__auto____15514;
} else
{var or__3548__auto____15515 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15515))
{return or__3548__auto____15515;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15581 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15583 = cljs.core._get_method.call(null,mf,dispatch_val__15581);

if(cljs.core.truth_(target_fn__15583))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15581)));
}
return cljs.core.apply.call(null,target_fn__15583,args);
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
var this__15590 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15592 = this;
cljs.core.swap_BANG_.call(null,this__15592.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15592.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15592.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15592.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15593 = this;
cljs.core.swap_BANG_.call(null,this__15593.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15593.method_cache,this__15593.method_table,this__15593.cached_hierarchy,this__15593.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15596 = this;
cljs.core.swap_BANG_.call(null,this__15596.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15596.method_cache,this__15596.method_table,this__15596.cached_hierarchy,this__15596.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15597 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15597.cached_hierarchy),cljs.core.deref.call(null,this__15597.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15597.method_cache,this__15597.method_table,this__15597.cached_hierarchy,this__15597.hierarchy);
}
var temp__3695__auto____15598 = cljs.core.deref.call(null,this__15597.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15598))
{var target_fn__15599 = temp__3695__auto____15598;

return target_fn__15599;
} else
{var temp__3695__auto____15600 = cljs.core.find_and_cache_best_method.call(null,this__15597.name,dispatch_val,this__15597.hierarchy,this__15597.method_table,this__15597.prefer_table,this__15597.method_cache,this__15597.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15600))
{var target_fn__15601 = temp__3695__auto____15600;

return target_fn__15601;
} else
{return cljs.core.deref.call(null,this__15597.method_table).call(null,this__15597.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15602 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15602.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15602.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15602.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15602.method_cache,this__15602.method_table,this__15602.cached_hierarchy,this__15602.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15603 = this;
return cljs.core.deref.call(null,this__15603.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15604 = this;
return cljs.core.deref.call(null,this__15604.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15605 = this;
return cljs.core.do_dispatch.call(null,mf,this__15605.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15616__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15616 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15616__delegate.call(this, _, args);
};
G__15616.cljs$lang$maxFixedArity = 1;
G__15616.cljs$lang$applyTo = (function (arglist__15617){
var _ = cljs.core.first(arglist__15617);
var args = cljs.core.rest(arglist__15617);
return G__15616__delegate.call(this, _, args);
});
return G__15616;
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
