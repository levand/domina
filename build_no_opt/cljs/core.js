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
var or__3548__auto____7253 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7253))
{return or__3548__auto____7253;
} else
{var or__3548__auto____7415 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7415))
{return or__3548__auto____7415;
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
var _invoke__7729 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7449 = this$;

if(cljs.core.truth_(and__3546__auto____7449))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7449;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7451 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7451))
{return or__3548__auto____7451;
} else
{var or__3548__auto____7453 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7453))
{return or__3548__auto____7453;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7730 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7454 = this$;

if(cljs.core.truth_(and__3546__auto____7454))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7454;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7457 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7457))
{return or__3548__auto____7457;
} else
{var or__3548__auto____7458 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7458))
{return or__3548__auto____7458;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7731 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7460 = this$;

if(cljs.core.truth_(and__3546__auto____7460))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7460;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
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
})().call(null,this$,a,b);
}
});
var _invoke__7732 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7466 = this$;

if(cljs.core.truth_(and__3546__auto____7466))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7466;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
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
})().call(null,this$,a,b,c);
}
});
var _invoke__7733 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7471 = this$;

if(cljs.core.truth_(and__3546__auto____7471))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7471;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7473 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7473))
{return or__3548__auto____7473;
} else
{var or__3548__auto____7479 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7479))
{return or__3548__auto____7479;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7734 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7483 = this$;

if(cljs.core.truth_(and__3546__auto____7483))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7483;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
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
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7735 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7491 = this$;

if(cljs.core.truth_(and__3546__auto____7491))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7491;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7494 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7494))
{return or__3548__auto____7494;
} else
{var or__3548__auto____7502 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7502))
{return or__3548__auto____7502;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7736 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7504 = this$;

if(cljs.core.truth_(and__3546__auto____7504))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7504;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7507 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7507))
{return or__3548__auto____7507;
} else
{var or__3548__auto____7508 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7508))
{return or__3548__auto____7508;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7737 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7515 = this$;

if(cljs.core.truth_(and__3546__auto____7515))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7515;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7535 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7535))
{return or__3548__auto____7535;
} else
{var or__3548__auto____7536 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7536))
{return or__3548__auto____7536;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7738 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7540 = this$;

if(cljs.core.truth_(and__3546__auto____7540))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7540;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7559 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7559))
{return or__3548__auto____7559;
} else
{var or__3548__auto____7565 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7565))
{return or__3548__auto____7565;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7739 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7568 = this$;

if(cljs.core.truth_(and__3546__auto____7568))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7568;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7569 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7569))
{return or__3548__auto____7569;
} else
{var or__3548__auto____7570 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7570))
{return or__3548__auto____7570;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7740 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7579 = this$;

if(cljs.core.truth_(and__3546__auto____7579))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7579;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7741 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7597 = this$;

if(cljs.core.truth_(and__3546__auto____7597))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7597;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7742 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7600 = this$;

if(cljs.core.truth_(and__3546__auto____7600))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7600;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7601 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7601))
{return or__3548__auto____7601;
} else
{var or__3548__auto____7644 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7644))
{return or__3548__auto____7644;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7743 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7645 = this$;

if(cljs.core.truth_(and__3546__auto____7645))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7645;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7646 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7646))
{return or__3548__auto____7646;
} else
{var or__3548__auto____7647 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7647))
{return or__3548__auto____7647;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7744 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7648 = this$;

if(cljs.core.truth_(and__3546__auto____7648))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7648;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7745 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7651 = this$;

if(cljs.core.truth_(and__3546__auto____7651))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7651;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7652 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7652))
{return or__3548__auto____7652;
} else
{var or__3548__auto____7653 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7653))
{return or__3548__auto____7653;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7746 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7654 = this$;

if(cljs.core.truth_(and__3546__auto____7654))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7654;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7668 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7668))
{return or__3548__auto____7668;
} else
{var or__3548__auto____7669 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7669))
{return or__3548__auto____7669;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7747 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7672 = this$;

if(cljs.core.truth_(and__3546__auto____7672))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7672;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7677 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7677))
{return or__3548__auto____7677;
} else
{var or__3548__auto____7678 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7678))
{return or__3548__auto____7678;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7748 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7679 = this$;

if(cljs.core.truth_(and__3546__auto____7679))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7679;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7711 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7711))
{return or__3548__auto____7711;
} else
{var or__3548__auto____7713 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7713))
{return or__3548__auto____7713;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7749 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7715 = this$;

if(cljs.core.truth_(and__3546__auto____7715))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7715;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7717 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7717))
{return or__3548__auto____7717;
} else
{var or__3548__auto____7719 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7719))
{return or__3548__auto____7719;
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
return _invoke__7729.call(this,this$);
case  2 :
return _invoke__7730.call(this,this$,a);
case  3 :
return _invoke__7731.call(this,this$,a,b);
case  4 :
return _invoke__7732.call(this,this$,a,b,c);
case  5 :
return _invoke__7733.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7734.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7735.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7736.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7737.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7738.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7739.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7740.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7741.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7742.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7743.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7744.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7745.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7746.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7747.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7748.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7749.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7812 = coll;

if(cljs.core.truth_(and__3546__auto____7812))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7812;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7815 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7815))
{return or__3548__auto____7815;
} else
{var or__3548__auto____7816 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7816))
{return or__3548__auto____7816;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7820 = coll;

if(cljs.core.truth_(and__3546__auto____7820))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7820;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7822 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7822))
{return or__3548__auto____7822;
} else
{var or__3548__auto____7823 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7823))
{return or__3548__auto____7823;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7829 = coll;

if(cljs.core.truth_(and__3546__auto____7829))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7829;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7831 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7831))
{return or__3548__auto____7831;
} else
{var or__3548__auto____7832 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7832))
{return or__3548__auto____7832;
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
var _nth__7848 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7838 = coll;

if(cljs.core.truth_(and__3546__auto____7838))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7838;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7840 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7840))
{return or__3548__auto____7840;
} else
{var or__3548__auto____7842 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7842))
{return or__3548__auto____7842;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7850 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7843 = coll;

if(cljs.core.truth_(and__3546__auto____7843))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7843;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7844 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7844))
{return or__3548__auto____7844;
} else
{var or__3548__auto____7846 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7846))
{return or__3548__auto____7846;
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
return _nth__7848.call(this,coll,n);
case  3 :
return _nth__7850.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7857 = coll;

if(cljs.core.truth_(and__3546__auto____7857))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7857;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7862 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7862))
{return or__3548__auto____7862;
} else
{var or__3548__auto____7863 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7863))
{return or__3548__auto____7863;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7864 = coll;

if(cljs.core.truth_(and__3546__auto____7864))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7864;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7865 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7865))
{return or__3548__auto____7865;
} else
{var or__3548__auto____7866 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7866))
{return or__3548__auto____7866;
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
var _lookup__7895 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7882 = o;

if(cljs.core.truth_(and__3546__auto____7882))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7882;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7886 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7886))
{return or__3548__auto____7886;
} else
{var or__3548__auto____7887 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7887))
{return or__3548__auto____7887;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7896 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7888 = o;

if(cljs.core.truth_(and__3546__auto____7888))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7888;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7889 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7889))
{return or__3548__auto____7889;
} else
{var or__3548__auto____7892 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7892))
{return or__3548__auto____7892;
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
return _lookup__7895.call(this,o,k);
case  3 :
return _lookup__7896.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7915 = coll;

if(cljs.core.truth_(and__3546__auto____7915))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7915;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7918 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7918))
{return or__3548__auto____7918;
} else
{var or__3548__auto____7921 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7921))
{return or__3548__auto____7921;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7923 = coll;

if(cljs.core.truth_(and__3546__auto____7923))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7923;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7925 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7925))
{return or__3548__auto____7925;
} else
{var or__3548__auto____7927 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7927))
{return or__3548__auto____7927;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7936 = coll;

if(cljs.core.truth_(and__3546__auto____7936))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7936;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7938 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7938))
{return or__3548__auto____7938;
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
if(cljs.core.truth_((function (){var and__3546__auto____7946 = coll;

if(cljs.core.truth_(and__3546__auto____7946))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7946;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7947 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7947))
{return or__3548__auto____7947;
} else
{var or__3548__auto____7949 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7949))
{return or__3548__auto____7949;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7955 = coll;

if(cljs.core.truth_(and__3546__auto____7955))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7955;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7956 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7956))
{return or__3548__auto____7956;
} else
{var or__3548__auto____7958 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7958))
{return or__3548__auto____7958;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7962 = coll;

if(cljs.core.truth_(and__3546__auto____7962))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7962;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7964 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7964))
{return or__3548__auto____7964;
} else
{var or__3548__auto____7966 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7966))
{return or__3548__auto____7966;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7980 = coll;

if(cljs.core.truth_(and__3546__auto____7980))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7980;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7981 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7981))
{return or__3548__auto____7981;
} else
{var or__3548__auto____7983 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7983))
{return or__3548__auto____7983;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8000 = o;

if(cljs.core.truth_(and__3546__auto____8000))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8000;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8003 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8003))
{return or__3548__auto____8003;
} else
{var or__3548__auto____8005 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8052 = o;

if(cljs.core.truth_(and__3546__auto____8052))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8052;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8118 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8118))
{return or__3548__auto____8118;
} else
{var or__3548__auto____8119 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8119))
{return or__3548__auto____8119;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8122 = o;

if(cljs.core.truth_(and__3546__auto____8122))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8122;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8124 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8124))
{return or__3548__auto____8124;
} else
{var or__3548__auto____8125 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8125))
{return or__3548__auto____8125;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8129 = o;

if(cljs.core.truth_(and__3546__auto____8129))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8129;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8130 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8130))
{return or__3548__auto____8130;
} else
{var or__3548__auto____8131 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8131))
{return or__3548__auto____8131;
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
var _reduce__8228 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8219 = coll;

if(cljs.core.truth_(and__3546__auto____8219))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8219;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8220 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8220))
{return or__3548__auto____8220;
} else
{var or__3548__auto____8221 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8221))
{return or__3548__auto____8221;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8229 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8222 = coll;

if(cljs.core.truth_(and__3546__auto____8222))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8222;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8224 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8224))
{return or__3548__auto____8224;
} else
{var or__3548__auto____8225 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8225))
{return or__3548__auto____8225;
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
return _reduce__8228.call(this,coll,f);
case  3 :
return _reduce__8229.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8233 = o;

if(cljs.core.truth_(and__3546__auto____8233))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8233;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8234 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8234))
{return or__3548__auto____8234;
} else
{var or__3548__auto____8235 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8235))
{return or__3548__auto____8235;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8248 = o;

if(cljs.core.truth_(and__3546__auto____8248))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8248;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8253 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8253))
{return or__3548__auto____8253;
} else
{var or__3548__auto____8254 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8254))
{return or__3548__auto____8254;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8255 = o;

if(cljs.core.truth_(and__3546__auto____8255))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8255;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8256 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8256))
{return or__3548__auto____8256;
} else
{var or__3548__auto____8260 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8260))
{return or__3548__auto____8260;
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
if(cljs.core.truth_((function (){var and__3546__auto____8262 = o;

if(cljs.core.truth_(and__3546__auto____8262))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8262;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8265 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8265))
{return or__3548__auto____8265;
} else
{var or__3548__auto____8266 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8266))
{return or__3548__auto____8266;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8271 = d;

if(cljs.core.truth_(and__3546__auto____8271))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8271;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8305 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8305))
{return or__3548__auto____8305;
} else
{var or__3548__auto____8307 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8307))
{return or__3548__auto____8307;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8319 = this$;

if(cljs.core.truth_(and__3546__auto____8319))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8319;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8322 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8322))
{return or__3548__auto____8322;
} else
{var or__3548__auto____8325 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8325))
{return or__3548__auto____8325;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8328 = this$;

if(cljs.core.truth_(and__3546__auto____8328))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8328;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8329 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8329))
{return or__3548__auto____8329;
} else
{var or__3548__auto____8330 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8330))
{return or__3548__auto____8330;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8331 = this$;

if(cljs.core.truth_(and__3546__auto____8331))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8331;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8332 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8332))
{return or__3548__auto____8332;
} else
{var or__3548__auto____8333 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8333))
{return or__3548__auto____8333;
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
var G__8378 = null;
var G__8378__8379 = (function (o,k){
return null;
});
var G__8378__8380 = (function (o,k,not_found){
return not_found;
});
G__8378 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8378__8379.call(this,o,k);
case  3 :
return G__8378__8380.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8378;
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
var G__8386 = null;
var G__8386__8387 = (function (_,f){
return f.call(null);
});
var G__8386__8388 = (function (_,f,start){
return start;
});
G__8386 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8386__8387.call(this,_,f);
case  3 :
return G__8386__8388.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8386;
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
var G__8394 = null;
var G__8394__8395 = (function (_,n){
return null;
});
var G__8394__8396 = (function (_,n,not_found){
return not_found;
});
G__8394 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8394__8395.call(this,_,n);
case  3 :
return G__8394__8396.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8394;
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
var ci_reduce__8418 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8410 = cljs.core._nth.call(null,cicoll,0);
var n__8411 = 1;

while(true){
if(cljs.core.truth_((n__8411 < cljs.core._count.call(null,cicoll))))
{{
var G__8422 = f.call(null,val__8410,cljs.core._nth.call(null,cicoll,n__8411));
var G__8423 = (n__8411 + 1);
val__8410 = G__8422;
n__8411 = G__8423;
continue;
}
} else
{return val__8410;
}
break;
}
}
});
var ci_reduce__8419 = (function (cicoll,f,val){
var val__8412 = val;
var n__8413 = 0;

while(true){
if(cljs.core.truth_((n__8413 < cljs.core._count.call(null,cicoll))))
{{
var G__8424 = f.call(null,val__8412,cljs.core._nth.call(null,cicoll,n__8413));
var G__8425 = (n__8413 + 1);
val__8412 = G__8424;
n__8413 = G__8425;
continue;
}
} else
{return val__8412;
}
break;
}
});
var ci_reduce__8420 = (function (cicoll,f,val,idx){
var val__8414 = val;
var n__8415 = idx;

while(true){
if(cljs.core.truth_((n__8415 < cljs.core._count.call(null,cicoll))))
{{
var G__8426 = f.call(null,val__8414,cljs.core._nth.call(null,cicoll,n__8415));
var G__8427 = (n__8415 + 1);
val__8414 = G__8426;
n__8415 = G__8427;
continue;
}
} else
{return val__8414;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8418.call(this,cicoll,f);
case  3 :
return ci_reduce__8419.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8420.call(this,cicoll,f,val,idx);
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
var this__8432 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8456 = null;
var G__8456__8459 = (function (_,f){
var this__8433 = this;
return cljs.core.ci_reduce.call(null,this__8433.a,f,(this__8433.a[this__8433.i]),(this__8433.i + 1));
});
var G__8456__8460 = (function (_,f,start){
var this__8434 = this;
return cljs.core.ci_reduce.call(null,this__8434.a,f,start,this__8434.i);
});
G__8456 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8456__8459.call(this,_,f);
case  3 :
return G__8456__8460.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8456;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8436 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8440 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8467 = null;
var G__8467__8468 = (function (coll,n){
var this__8441 = this;
var i__8442 = (n + this__8441.i);

if(cljs.core.truth_((i__8442 < this__8441.a.length)))
{return (this__8441.a[i__8442]);
} else
{return null;
}
});
var G__8467__8469 = (function (coll,n,not_found){
var this__8443 = this;
var i__8444 = (n + this__8443.i);

if(cljs.core.truth_((i__8444 < this__8443.a.length)))
{return (this__8443.a[i__8444]);
} else
{return not_found;
}
});
G__8467 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8467__8468.call(this,coll,n);
case  3 :
return G__8467__8469.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8467;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8445 = this;
return (this__8445.a.length - this__8445.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8446 = this;
return (this__8446.a[this__8446.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8447 = this;
if(cljs.core.truth_(((this__8447.i + 1) < this__8447.a.length)))
{return (new cljs.core.IndexedSeq(this__8447.a,(this__8447.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8452 = this;
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
var G__8539 = null;
var G__8539__8540 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8539__8541 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8539 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8539__8540.call(this,array,f);
case  3 :
return G__8539__8541.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8539;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8547 = null;
var G__8547__8548 = (function (array,k){
return (array[k]);
});
var G__8547__8549 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8547 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8547__8548.call(this,array,k);
case  3 :
return G__8547__8549.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8547;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8551 = null;
var G__8551__8552 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8551__8553 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8551 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8551__8552.call(this,array,n);
case  3 :
return G__8551__8553.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8551;
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
var temp__3698__auto____8557 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8557))
{var s__8558 = temp__3698__auto____8557;

return cljs.core._first.call(null,s__8558);
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
var G__8586 = cljs.core.next.call(null,s);
s = G__8586;
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
var s__8595 = cljs.core.seq.call(null,x);
var n__8596 = 0;

while(true){
if(cljs.core.truth_(s__8595))
{{
var G__8602 = cljs.core.next.call(null,s__8595);
var G__8603 = (n__8596 + 1);
s__8595 = G__8602;
n__8596 = G__8603;
continue;
}
} else
{return n__8596;
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
var conj__8616 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8632 = (function() { 
var G__8635__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8636 = conj.call(null,coll,x);
var G__8637 = cljs.core.first.call(null,xs);
var G__8638 = cljs.core.next.call(null,xs);
coll = G__8636;
x = G__8637;
xs = G__8638;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8635 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8635__delegate.call(this, coll, x, xs);
};
G__8635.cljs$lang$maxFixedArity = 2;
G__8635.cljs$lang$applyTo = (function (arglist__8642){
var coll = cljs.core.first(arglist__8642);
var x = cljs.core.first(cljs.core.next(arglist__8642));
var xs = cljs.core.rest(cljs.core.next(arglist__8642));
return G__8635__delegate.call(this, coll, x, xs);
});
return G__8635;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8616.call(this,coll,x);
default:
return conj__8632.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8632.cljs$lang$applyTo;
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
var nth__8652 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8653 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8652.call(this,coll,n);
case  3 :
return nth__8653.call(this,coll,n,not_found);
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
var get__8658 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8659 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8658.call(this,o,k);
case  3 :
return get__8659.call(this,o,k,not_found);
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
var assoc__8675 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8676 = (function() { 
var G__8679__delegate = function (coll,k,v,kvs){
while(true){
var ret__8663 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8680 = ret__8663;
var G__8681 = cljs.core.first.call(null,kvs);
var G__8682 = cljs.core.second.call(null,kvs);
var G__8683 = cljs.core.nnext.call(null,kvs);
coll = G__8680;
k = G__8681;
v = G__8682;
kvs = G__8683;
continue;
}
} else
{return ret__8663;
}
break;
}
};
var G__8679 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8679__delegate.call(this, coll, k, v, kvs);
};
G__8679.cljs$lang$maxFixedArity = 3;
G__8679.cljs$lang$applyTo = (function (arglist__8686){
var coll = cljs.core.first(arglist__8686);
var k = cljs.core.first(cljs.core.next(arglist__8686));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8686)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8686)));
return G__8679__delegate.call(this, coll, k, v, kvs);
});
return G__8679;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8675.call(this,coll,k,v);
default:
return assoc__8676.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8676.cljs$lang$applyTo;
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
var dissoc__8689 = (function (coll){
return coll;
});
var dissoc__8690 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8691 = (function() { 
var G__8695__delegate = function (coll,k,ks){
while(true){
var ret__8687 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8698 = ret__8687;
var G__8700 = cljs.core.first.call(null,ks);
var G__8701 = cljs.core.next.call(null,ks);
coll = G__8698;
k = G__8700;
ks = G__8701;
continue;
}
} else
{return ret__8687;
}
break;
}
};
var G__8695 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8695__delegate.call(this, coll, k, ks);
};
G__8695.cljs$lang$maxFixedArity = 2;
G__8695.cljs$lang$applyTo = (function (arglist__8706){
var coll = cljs.core.first(arglist__8706);
var k = cljs.core.first(cljs.core.next(arglist__8706));
var ks = cljs.core.rest(cljs.core.next(arglist__8706));
return G__8695__delegate.call(this, coll, k, ks);
});
return G__8695;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8689.call(this,coll);
case  2 :
return dissoc__8690.call(this,coll,k);
default:
return dissoc__8691.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8691.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8711 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8712 = x__445__auto____8711;

if(cljs.core.truth_(and__3546__auto____8712))
{var and__3546__auto____8715 = x__445__auto____8711.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8715))
{return cljs.core.not.call(null,x__445__auto____8711.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8715;
}
} else
{return and__3546__auto____8712;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8711);
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
var disj__8817 = (function (coll){
return coll;
});
var disj__8818 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8819 = (function() { 
var G__8821__delegate = function (coll,k,ks){
while(true){
var ret__8737 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8822 = ret__8737;
var G__8823 = cljs.core.first.call(null,ks);
var G__8824 = cljs.core.next.call(null,ks);
coll = G__8822;
k = G__8823;
ks = G__8824;
continue;
}
} else
{return ret__8737;
}
break;
}
};
var G__8821 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8821__delegate.call(this, coll, k, ks);
};
G__8821.cljs$lang$maxFixedArity = 2;
G__8821.cljs$lang$applyTo = (function (arglist__8825){
var coll = cljs.core.first(arglist__8825);
var k = cljs.core.first(cljs.core.next(arglist__8825));
var ks = cljs.core.rest(cljs.core.next(arglist__8825));
return G__8821__delegate.call(this, coll, k, ks);
});
return G__8821;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8817.call(this,coll);
case  2 :
return disj__8818.call(this,coll,k);
default:
return disj__8819.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8819.cljs$lang$applyTo;
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
{var x__445__auto____8832 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8836 = x__445__auto____8832;

if(cljs.core.truth_(and__3546__auto____8836))
{var and__3546__auto____8837 = x__445__auto____8832.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8837))
{return cljs.core.not.call(null,x__445__auto____8832.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8837;
}
} else
{return and__3546__auto____8836;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8832);
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
{var x__445__auto____8839 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8840 = x__445__auto____8839;

if(cljs.core.truth_(and__3546__auto____8840))
{var and__3546__auto____8841 = x__445__auto____8839.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8841))
{return cljs.core.not.call(null,x__445__auto____8839.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8841;
}
} else
{return and__3546__auto____8840;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8839);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8847 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8849 = x__445__auto____8847;

if(cljs.core.truth_(and__3546__auto____8849))
{var and__3546__auto____8850 = x__445__auto____8847.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8850))
{return cljs.core.not.call(null,x__445__auto____8847.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8850;
}
} else
{return and__3546__auto____8849;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8847);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8856 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8857 = x__445__auto____8856;

if(cljs.core.truth_(and__3546__auto____8857))
{var and__3546__auto____8859 = x__445__auto____8856.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8859))
{return cljs.core.not.call(null,x__445__auto____8856.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8859;
}
} else
{return and__3546__auto____8857;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8856);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8864 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8866 = x__445__auto____8864;

if(cljs.core.truth_(and__3546__auto____8866))
{var and__3546__auto____8868 = x__445__auto____8864.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8868))
{return cljs.core.not.call(null,x__445__auto____8864.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8868;
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
{var x__445__auto____8873 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8875 = x__445__auto____8873;

if(cljs.core.truth_(and__3546__auto____8875))
{var and__3546__auto____8878 = x__445__auto____8873.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8878))
{return cljs.core.not.call(null,x__445__auto____8873.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8878;
}
} else
{return and__3546__auto____8875;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8873);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8881 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8883 = x__445__auto____8881;

if(cljs.core.truth_(and__3546__auto____8883))
{var and__3546__auto____8885 = x__445__auto____8881.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8885))
{return cljs.core.not.call(null,x__445__auto____8881.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8885;
}
} else
{return and__3546__auto____8883;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8881);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8890 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8890.push(key);
}));
return keys__8890;
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
{var x__445__auto____8902 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8903 = x__445__auto____8902;

if(cljs.core.truth_(and__3546__auto____8903))
{var and__3546__auto____8904 = x__445__auto____8902.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8904))
{return cljs.core.not.call(null,x__445__auto____8902.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8904;
}
} else
{return and__3546__auto____8903;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8902);
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
var and__3546__auto____8908 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8908))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8911 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8911))
{return or__3548__auto____8911;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8908;
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
var and__3546__auto____8925 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8925))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8925;
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
var and__3546__auto____8932 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8932))
{return (n == n.toFixed());
} else
{return and__3546__auto____8932;
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
if(cljs.core.truth_((function (){var and__3546__auto____8963 = coll;

if(cljs.core.truth_(and__3546__auto____8963))
{var and__3546__auto____8965 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8965))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8965;
}
} else
{return and__3546__auto____8963;
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
var distinct_QMARK___9081 = (function (x){
return true;
});
var distinct_QMARK___9082 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9083 = (function() { 
var G__9086__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9070 = cljs.core.set([y,x]);
var xs__9071 = more;

while(true){
var x__9072 = cljs.core.first.call(null,xs__9071);
var etc__9079 = cljs.core.next.call(null,xs__9071);

if(cljs.core.truth_(xs__9071))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9070,x__9072)))
{return false;
} else
{{
var G__9087 = cljs.core.conj.call(null,s__9070,x__9072);
var G__9088 = etc__9079;
s__9070 = G__9087;
xs__9071 = G__9088;
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
var G__9086 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9086__delegate.call(this, x, y, more);
};
G__9086.cljs$lang$maxFixedArity = 2;
G__9086.cljs$lang$applyTo = (function (arglist__9090){
var x = cljs.core.first(arglist__9090);
var y = cljs.core.first(cljs.core.next(arglist__9090));
var more = cljs.core.rest(cljs.core.next(arglist__9090));
return G__9086__delegate.call(this, x, y, more);
});
return G__9086;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9081.call(this,x);
case  2 :
return distinct_QMARK___9082.call(this,x,y);
default:
return distinct_QMARK___9083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9083.cljs$lang$applyTo;
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
var r__9108 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9108)))
{return r__9108;
} else
{if(cljs.core.truth_(r__9108))
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
var sort__9129 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9130 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9127 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9127,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9127);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9129.call(this,comp);
case  2 :
return sort__9130.call(this,comp,coll);
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
var sort_by__9146 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9147 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9146.call(this,keyfn,comp);
case  3 :
return sort_by__9147.call(this,keyfn,comp,coll);
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
var reduce__9156 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9157 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9156.call(this,f,val);
case  3 :
return reduce__9157.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9174 = (function (f,coll){
var temp__3695__auto____9168 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9168))
{var s__9169 = temp__3695__auto____9168;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9169),cljs.core.next.call(null,s__9169));
} else
{return f.call(null);
}
});
var seq_reduce__9175 = (function (f,val,coll){
var val__9171 = val;
var coll__9172 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9172))
{{
var G__9181 = f.call(null,val__9171,cljs.core.first.call(null,coll__9172));
var G__9182 = cljs.core.next.call(null,coll__9172);
val__9171 = G__9181;
coll__9172 = G__9182;
continue;
}
} else
{return val__9171;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9174.call(this,f,val);
case  3 :
return seq_reduce__9175.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9192 = null;
var G__9192__9193 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9192__9194 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9192 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9192__9193.call(this,coll,f);
case  3 :
return G__9192__9194.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9192;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9200 = (function (){
return 0;
});
var _PLUS___9201 = (function (x){
return x;
});
var _PLUS___9202 = (function (x,y){
return (x + y);
});
var _PLUS___9203 = (function() { 
var G__9209__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9209 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9209__delegate.call(this, x, y, more);
};
G__9209.cljs$lang$maxFixedArity = 2;
G__9209.cljs$lang$applyTo = (function (arglist__9210){
var x = cljs.core.first(arglist__9210);
var y = cljs.core.first(cljs.core.next(arglist__9210));
var more = cljs.core.rest(cljs.core.next(arglist__9210));
return G__9209__delegate.call(this, x, y, more);
});
return G__9209;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9200.call(this);
case  1 :
return _PLUS___9201.call(this,x);
case  2 :
return _PLUS___9202.call(this,x,y);
default:
return _PLUS___9203.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9203.cljs$lang$applyTo;
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
var ___9221 = (function (x){
return (- x);
});
var ___9222 = (function (x,y){
return (x - y);
});
var ___9223 = (function() { 
var G__9229__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9229 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9229__delegate.call(this, x, y, more);
};
G__9229.cljs$lang$maxFixedArity = 2;
G__9229.cljs$lang$applyTo = (function (arglist__9231){
var x = cljs.core.first(arglist__9231);
var y = cljs.core.first(cljs.core.next(arglist__9231));
var more = cljs.core.rest(cljs.core.next(arglist__9231));
return G__9229__delegate.call(this, x, y, more);
});
return G__9229;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9221.call(this,x);
case  2 :
return ___9222.call(this,x,y);
default:
return ___9223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9223.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9237 = (function (){
return 1;
});
var _STAR___9239 = (function (x){
return x;
});
var _STAR___9242 = (function (x,y){
return (x * y);
});
var _STAR___9243 = (function() { 
var G__9246__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9246 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9246__delegate.call(this, x, y, more);
};
G__9246.cljs$lang$maxFixedArity = 2;
G__9246.cljs$lang$applyTo = (function (arglist__9383){
var x = cljs.core.first(arglist__9383);
var y = cljs.core.first(cljs.core.next(arglist__9383));
var more = cljs.core.rest(cljs.core.next(arglist__9383));
return G__9246__delegate.call(this, x, y, more);
});
return G__9246;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9237.call(this);
case  1 :
return _STAR___9239.call(this,x);
case  2 :
return _STAR___9242.call(this,x,y);
default:
return _STAR___9243.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9243.cljs$lang$applyTo;
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
var _SLASH___9434 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9435 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9436 = (function() { 
var G__9440__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9440 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9440__delegate.call(this, x, y, more);
};
G__9440.cljs$lang$maxFixedArity = 2;
G__9440.cljs$lang$applyTo = (function (arglist__9460){
var x = cljs.core.first(arglist__9460);
var y = cljs.core.first(cljs.core.next(arglist__9460));
var more = cljs.core.rest(cljs.core.next(arglist__9460));
return G__9440__delegate.call(this, x, y, more);
});
return G__9440;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9434.call(this,x);
case  2 :
return _SLASH___9435.call(this,x,y);
default:
return _SLASH___9436.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9436.cljs$lang$applyTo;
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
var _LT___9466 = (function (x){
return true;
});
var _LT___9467 = (function (x,y){
return (x < y);
});
var _LT___9468 = (function() { 
var G__9473__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9476 = y;
var G__9477 = cljs.core.first.call(null,more);
var G__9479 = cljs.core.next.call(null,more);
x = G__9476;
y = G__9477;
more = G__9479;
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
var G__9473 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9473__delegate.call(this, x, y, more);
};
G__9473.cljs$lang$maxFixedArity = 2;
G__9473.cljs$lang$applyTo = (function (arglist__9491){
var x = cljs.core.first(arglist__9491);
var y = cljs.core.first(cljs.core.next(arglist__9491));
var more = cljs.core.rest(cljs.core.next(arglist__9491));
return G__9473__delegate.call(this, x, y, more);
});
return G__9473;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9466.call(this,x);
case  2 :
return _LT___9467.call(this,x,y);
default:
return _LT___9468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9468.cljs$lang$applyTo;
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
var _LT__EQ___9500 = (function (x){
return true;
});
var _LT__EQ___9501 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9502 = (function() { 
var G__9508__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9510 = y;
var G__9511 = cljs.core.first.call(null,more);
var G__9512 = cljs.core.next.call(null,more);
x = G__9510;
y = G__9511;
more = G__9512;
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
var G__9508 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9508__delegate.call(this, x, y, more);
};
G__9508.cljs$lang$maxFixedArity = 2;
G__9508.cljs$lang$applyTo = (function (arglist__9516){
var x = cljs.core.first(arglist__9516);
var y = cljs.core.first(cljs.core.next(arglist__9516));
var more = cljs.core.rest(cljs.core.next(arglist__9516));
return G__9508__delegate.call(this, x, y, more);
});
return G__9508;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9500.call(this,x);
case  2 :
return _LT__EQ___9501.call(this,x,y);
default:
return _LT__EQ___9502.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9502.cljs$lang$applyTo;
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
var _GT___9524 = (function (x){
return true;
});
var _GT___9525 = (function (x,y){
return (x > y);
});
var _GT___9526 = (function() { 
var G__9530__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9535 = y;
var G__9536 = cljs.core.first.call(null,more);
var G__9537 = cljs.core.next.call(null,more);
x = G__9535;
y = G__9536;
more = G__9537;
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
var G__9530 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9530__delegate.call(this, x, y, more);
};
G__9530.cljs$lang$maxFixedArity = 2;
G__9530.cljs$lang$applyTo = (function (arglist__9540){
var x = cljs.core.first(arglist__9540);
var y = cljs.core.first(cljs.core.next(arglist__9540));
var more = cljs.core.rest(cljs.core.next(arglist__9540));
return G__9530__delegate.call(this, x, y, more);
});
return G__9530;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9524.call(this,x);
case  2 :
return _GT___9525.call(this,x,y);
default:
return _GT___9526.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9526.cljs$lang$applyTo;
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
var _GT__EQ___9550 = (function (x){
return true;
});
var _GT__EQ___9551 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9552 = (function() { 
var G__9566__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9571 = y;
var G__9572 = cljs.core.first.call(null,more);
var G__9573 = cljs.core.next.call(null,more);
x = G__9571;
y = G__9572;
more = G__9573;
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
var G__9566 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9566__delegate.call(this, x, y, more);
};
G__9566.cljs$lang$maxFixedArity = 2;
G__9566.cljs$lang$applyTo = (function (arglist__9579){
var x = cljs.core.first(arglist__9579);
var y = cljs.core.first(cljs.core.next(arglist__9579));
var more = cljs.core.rest(cljs.core.next(arglist__9579));
return G__9566__delegate.call(this, x, y, more);
});
return G__9566;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9550.call(this,x);
case  2 :
return _GT__EQ___9551.call(this,x,y);
default:
return _GT__EQ___9552.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9552.cljs$lang$applyTo;
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
var max__9656 = (function (x){
return x;
});
var max__9657 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9658 = (function() { 
var G__9661__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9661 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9661__delegate.call(this, x, y, more);
};
G__9661.cljs$lang$maxFixedArity = 2;
G__9661.cljs$lang$applyTo = (function (arglist__9663){
var x = cljs.core.first(arglist__9663);
var y = cljs.core.first(cljs.core.next(arglist__9663));
var more = cljs.core.rest(cljs.core.next(arglist__9663));
return G__9661__delegate.call(this, x, y, more);
});
return G__9661;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9656.call(this,x);
case  2 :
return max__9657.call(this,x,y);
default:
return max__9658.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9658.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9685 = (function (x){
return x;
});
var min__9687 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9688 = (function() { 
var G__9691__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9691 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9691__delegate.call(this, x, y, more);
};
G__9691.cljs$lang$maxFixedArity = 2;
G__9691.cljs$lang$applyTo = (function (arglist__9692){
var x = cljs.core.first(arglist__9692);
var y = cljs.core.first(cljs.core.next(arglist__9692));
var more = cljs.core.rest(cljs.core.next(arglist__9692));
return G__9691__delegate.call(this, x, y, more);
});
return G__9691;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9685.call(this,x);
case  2 :
return min__9687.call(this,x,y);
default:
return min__9688.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9688.cljs$lang$applyTo;
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
var rem__9693 = (n % d);

return cljs.core.fix.call(null,((n - rem__9693) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9694 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9694));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9699 = (function (){
return Math.random.call(null);
});
var rand__9700 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9699.call(this);
case  1 :
return rand__9700.call(this,n);
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
var _EQ__EQ___9804 = (function (x){
return true;
});
var _EQ__EQ___9805 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9806 = (function() { 
var G__9808__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9809 = y;
var G__9810 = cljs.core.first.call(null,more);
var G__9811 = cljs.core.next.call(null,more);
x = G__9809;
y = G__9810;
more = G__9811;
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
var G__9808 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9808__delegate.call(this, x, y, more);
};
G__9808.cljs$lang$maxFixedArity = 2;
G__9808.cljs$lang$applyTo = (function (arglist__9812){
var x = cljs.core.first(arglist__9812);
var y = cljs.core.first(cljs.core.next(arglist__9812));
var more = cljs.core.rest(cljs.core.next(arglist__9812));
return G__9808__delegate.call(this, x, y, more);
});
return G__9808;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9804.call(this,x);
case  2 :
return _EQ__EQ___9805.call(this,x,y);
default:
return _EQ__EQ___9806.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9806.cljs$lang$applyTo;
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
var n__9814 = n;
var xs__9815 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9816 = xs__9815;

if(cljs.core.truth_(and__3546__auto____9816))
{return (n__9814 > 0);
} else
{return and__3546__auto____9816;
}
})()))
{{
var G__9817 = (n__9814 - 1);
var G__9818 = cljs.core.next.call(null,xs__9815);
n__9814 = G__9817;
xs__9815 = G__9818;
continue;
}
} else
{return xs__9815;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9827 = null;
var G__9827__9828 = (function (coll,n){
var temp__3695__auto____9823 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9823))
{var xs__9824 = temp__3695__auto____9823;

return cljs.core.first.call(null,xs__9824);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9827__9829 = (function (coll,n,not_found){
var temp__3695__auto____9825 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9825))
{var xs__9826 = temp__3695__auto____9825;

return cljs.core.first.call(null,xs__9826);
} else
{return not_found;
}
});
G__9827 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9827__9828.call(this,coll,n);
case  3 :
return G__9827__9829.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9827;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9836 = (function (){
return "";
});
var str_STAR___9837 = (function (x){
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
var str_STAR___9838 = (function() { 
var G__9841__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9842 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9843 = cljs.core.next.call(null,more);
sb = G__9842;
more = G__9843;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9841 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9841__delegate.call(this, x, ys);
};
G__9841.cljs$lang$maxFixedArity = 1;
G__9841.cljs$lang$applyTo = (function (arglist__9846){
var x = cljs.core.first(arglist__9846);
var ys = cljs.core.rest(arglist__9846);
return G__9841__delegate.call(this, x, ys);
});
return G__9841;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9836.call(this);
case  1 :
return str_STAR___9837.call(this,x);
default:
return str_STAR___9838.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9838.cljs$lang$applyTo;
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
var str__9862 = (function (){
return "";
});
var str__9863 = (function (x){
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
var str__9864 = (function() { 
var G__9869__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9869 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9869__delegate.call(this, x, ys);
};
G__9869.cljs$lang$maxFixedArity = 1;
G__9869.cljs$lang$applyTo = (function (arglist__9870){
var x = cljs.core.first(arglist__9870);
var ys = cljs.core.rest(arglist__9870);
return G__9869__delegate.call(this, x, ys);
});
return G__9869;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9862.call(this);
case  1 :
return str__9863.call(this,x);
default:
return str__9864.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9864.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9874 = (function (s,start){
return s.substring(start);
});
var subs__9875 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9874.call(this,s,start);
case  3 :
return subs__9875.call(this,s,start,end);
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
var symbol__9879 = (function (name){
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
var symbol__9880 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9879.call(this,ns);
case  2 :
return symbol__9880.call(this,ns,name);
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
var keyword__9888 = (function (name){
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
var keyword__9889 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9888.call(this,ns);
case  2 :
return keyword__9889.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9901 = cljs.core.seq.call(null,x);
var ys__9902 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9901)))
{return cljs.core.nil_QMARK_.call(null,ys__9902);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9902)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9901),cljs.core.first.call(null,ys__9902))))
{{
var G__9905 = cljs.core.next.call(null,xs__9901);
var G__9906 = cljs.core.next.call(null,ys__9902);
xs__9901 = G__9905;
ys__9902 = G__9906;
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
return cljs.core.reduce.call(null,(function (p1__9912_SHARP_,p2__9914_SHARP_){
return cljs.core.hash_combine.call(null,p1__9912_SHARP_,cljs.core.hash.call(null,p2__9914_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9927__9930 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9927__9930))
{var G__9932__9934 = cljs.core.first.call(null,G__9927__9930);
var vec__9933__9935 = G__9932__9934;
var key_name__9936 = cljs.core.nth.call(null,vec__9933__9935,0,null);
var f__9937 = cljs.core.nth.call(null,vec__9933__9935,1,null);
var G__9927__9938 = G__9927__9930;

var G__9932__9939 = G__9932__9934;
var G__9927__9940 = G__9927__9938;

while(true){
var vec__9941__9942 = G__9932__9939;
var key_name__9943 = cljs.core.nth.call(null,vec__9941__9942,0,null);
var f__9944 = cljs.core.nth.call(null,vec__9941__9942,1,null);
var G__9927__9945 = G__9927__9940;

var str_name__9946 = cljs.core.name.call(null,key_name__9943);

obj[str_name__9946] = f__9944;
var temp__3698__auto____9948 = cljs.core.next.call(null,G__9927__9945);

if(cljs.core.truth_(temp__3698__auto____9948))
{var G__9927__9950 = temp__3698__auto____9948;

{
var G__9959 = cljs.core.first.call(null,G__9927__9950);
var G__9960 = G__9927__9950;
G__9932__9939 = G__9959;
G__9927__9940 = G__9960;
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
var this__9962 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9963 = this;
return (new cljs.core.List(this__9963.meta,o,coll,(this__9963.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9964 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9965 = this;
return this__9965.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9966 = this;
return this__9966.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9967 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9984 = this;
return this__9984.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9985 = this;
return this__9985.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9986 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9987 = this;
return (new cljs.core.List(meta,this__9987.first,this__9987.rest,this__9987.count));
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
var this__10004 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10006 = this;
return (new cljs.core.List(this__10006.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10008 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10010 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10011 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10013 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10014 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10017 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10020 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10023 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10069 = this;
return this__10069.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10075 = this;
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
list.cljs$lang$applyTo = (function (arglist__10085){
var items = cljs.core.seq( arglist__10085 );;
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
var this__10166 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10168 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10170 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10172 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10172.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10174 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10177 = this;
return this__10177.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10179 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10179.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10179.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10181 = this;
return this__10181.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10184 = this;
return (new cljs.core.Cons(meta,this__10184.first,this__10184.rest));
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
var G__10191 = null;
var G__10191__10192 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10191__10193 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10191 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10191__10192.call(this,string,f);
case  3 :
return G__10191__10193.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10191;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10195 = null;
var G__10195__10196 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10195__10197 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10195 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10195__10196.call(this,string,k);
case  3 :
return G__10195__10197.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10195;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10201 = null;
var G__10201__10202 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10201__10203 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10201 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10201__10202.call(this,string,n);
case  3 :
return G__10201__10203.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10201;
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
var G__10213 = null;
var G__10213__10218 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10213__10219 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10213 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10213__10218.call(this,this$,coll);
case  3 :
return G__10213__10219.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10213;
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
var x__10231 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10231;
} else
{lazy_seq.x = x__10231.call(null);
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
var this__10241 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10242 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10245 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10246 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10246.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10247 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10249 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10250 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10251 = this;
return this__10251.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10262 = this;
return (new cljs.core.LazySeq(meta,this__10262.realized,this__10262.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10274 = cljs.core.array.call(null);

var s__10275 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10275)))
{ary__10274.push(cljs.core.first.call(null,s__10275));
{
var G__10278 = cljs.core.next.call(null,s__10275);
s__10275 = G__10278;
continue;
}
} else
{return ary__10274;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10279 = s;
var i__10280 = n;
var sum__10281 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10380 = (i__10280 > 0);

if(cljs.core.truth_(and__3546__auto____10380))
{return cljs.core.seq.call(null,s__10279);
} else
{return and__3546__auto____10380;
}
})()))
{{
var G__10395 = cljs.core.next.call(null,s__10279);
var G__10396 = (i__10280 - 1);
var G__10398 = (sum__10281 + 1);
s__10279 = G__10395;
i__10280 = G__10396;
sum__10281 = G__10398;
continue;
}
} else
{return sum__10281;
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
var concat__10550 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10551 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10552 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10451 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10451))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10451),concat.call(null,cljs.core.rest.call(null,s__10451),y));
} else
{return y;
}
})));
});
var concat__10553 = (function() { 
var G__10556__delegate = function (x,y,zs){
var cat__10453 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10452 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10452))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10452),cat.call(null,cljs.core.rest.call(null,xys__10452),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10453.call(null,concat.call(null,x,y),zs);
};
var G__10556 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10556__delegate.call(this, x, y, zs);
};
G__10556.cljs$lang$maxFixedArity = 2;
G__10556.cljs$lang$applyTo = (function (arglist__10562){
var x = cljs.core.first(arglist__10562);
var y = cljs.core.first(cljs.core.next(arglist__10562));
var zs = cljs.core.rest(cljs.core.next(arglist__10562));
return G__10556__delegate.call(this, x, y, zs);
});
return G__10556;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10550.call(this);
case  1 :
return concat__10551.call(this,x);
case  2 :
return concat__10552.call(this,x,y);
default:
return concat__10553.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10553.cljs$lang$applyTo;
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
var list_STAR___10574 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10575 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10576 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10582 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10584 = (function() { 
var G__10593__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10593 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10593__delegate.call(this, a, b, c, d, more);
};
G__10593.cljs$lang$maxFixedArity = 4;
G__10593.cljs$lang$applyTo = (function (arglist__10596){
var a = cljs.core.first(arglist__10596);
var b = cljs.core.first(cljs.core.next(arglist__10596));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10596)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10596))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10596))));
return G__10593__delegate.call(this, a, b, c, d, more);
});
return G__10593;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10574.call(this,a);
case  2 :
return list_STAR___10575.call(this,a,b);
case  3 :
return list_STAR___10576.call(this,a,b,c);
case  4 :
return list_STAR___10582.call(this,a,b,c,d);
default:
return list_STAR___10584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10584.cljs$lang$applyTo;
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
var apply__10682 = (function (f,args){
var fixed_arity__10638 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10638 + 1)) <= fixed_arity__10638)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10683 = (function (f,x,args){
var arglist__10648 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10649 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10648,fixed_arity__10649) <= fixed_arity__10649)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10648));
} else
{return f.cljs$lang$applyTo(arglist__10648);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10648));
}
});
var apply__10684 = (function (f,x,y,args){
var arglist__10654 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10655 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10654,fixed_arity__10655) <= fixed_arity__10655)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10654));
} else
{return f.cljs$lang$applyTo(arglist__10654);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10654));
}
});
var apply__10685 = (function (f,x,y,z,args){
var arglist__10659 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10660 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10659,fixed_arity__10660) <= fixed_arity__10660)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10659));
} else
{return f.cljs$lang$applyTo(arglist__10659);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10659));
}
});
var apply__10686 = (function() { 
var G__10702__delegate = function (f,a,b,c,d,args){
var arglist__10672 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10676 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10672,fixed_arity__10676) <= fixed_arity__10676)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10672));
} else
{return f.cljs$lang$applyTo(arglist__10672);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10672));
}
};
var G__10702 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10702__delegate.call(this, f, a, b, c, d, args);
};
G__10702.cljs$lang$maxFixedArity = 5;
G__10702.cljs$lang$applyTo = (function (arglist__10703){
var f = cljs.core.first(arglist__10703);
var a = cljs.core.first(cljs.core.next(arglist__10703));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10703)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10703))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10703)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10703)))));
return G__10702__delegate.call(this, f, a, b, c, d, args);
});
return G__10702;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10682.call(this,f,a);
case  3 :
return apply__10683.call(this,f,a,b);
case  4 :
return apply__10684.call(this,f,a,b,c);
case  5 :
return apply__10685.call(this,f,a,b,c,d);
default:
return apply__10686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10686.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10706){
var obj = cljs.core.first(arglist__10706);
var f = cljs.core.first(cljs.core.next(arglist__10706));
var args = cljs.core.rest(cljs.core.next(arglist__10706));
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
var not_EQ___10718 = (function (x){
return false;
});
var not_EQ___10719 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10721 = (function() { 
var G__10774__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10774 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10774__delegate.call(this, x, y, more);
};
G__10774.cljs$lang$maxFixedArity = 2;
G__10774.cljs$lang$applyTo = (function (arglist__10775){
var x = cljs.core.first(arglist__10775);
var y = cljs.core.first(cljs.core.next(arglist__10775));
var more = cljs.core.rest(cljs.core.next(arglist__10775));
return G__10774__delegate.call(this, x, y, more);
});
return G__10774;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10718.call(this,x);
case  2 :
return not_EQ___10719.call(this,x,y);
default:
return not_EQ___10721.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10721.cljs$lang$applyTo;
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
var G__10795 = pred;
var G__10796 = cljs.core.next.call(null,coll);
pred = G__10795;
coll = G__10796;
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
{var or__3548__auto____10805 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10805))
{return or__3548__auto____10805;
} else
{{
var G__10808 = pred;
var G__10809 = cljs.core.next.call(null,coll);
pred = G__10808;
coll = G__10809;
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
var G__10870 = null;
var G__10870__10871 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10870__10872 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10870__10873 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10870__10874 = (function() { 
var G__10877__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10877 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10877__delegate.call(this, x, y, zs);
};
G__10877.cljs$lang$maxFixedArity = 2;
G__10877.cljs$lang$applyTo = (function (arglist__10879){
var x = cljs.core.first(arglist__10879);
var y = cljs.core.first(cljs.core.next(arglist__10879));
var zs = cljs.core.rest(cljs.core.next(arglist__10879));
return G__10877__delegate.call(this, x, y, zs);
});
return G__10877;
})()
;
G__10870 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10870__10871.call(this);
case  1 :
return G__10870__10872.call(this,x);
case  2 :
return G__10870__10873.call(this,x,y);
default:
return G__10870__10874.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10870.cljs$lang$maxFixedArity = 2;
G__10870.cljs$lang$applyTo = G__10870__10874.cljs$lang$applyTo;
return G__10870;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10888__delegate = function (args){
return x;
};
var G__10888 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10888__delegate.call(this, args);
};
G__10888.cljs$lang$maxFixedArity = 0;
G__10888.cljs$lang$applyTo = (function (arglist__10889){
var args = cljs.core.seq( arglist__10889 );;
return G__10888__delegate.call(this, args);
});
return G__10888;
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
var comp__10909 = (function (){
return cljs.core.identity;
});
var comp__10911 = (function (f){
return f;
});
var comp__10912 = (function (f,g){
return (function() {
var G__11100 = null;
var G__11100__11102 = (function (){
return f.call(null,g.call(null));
});
var G__11100__11103 = (function (x){
return f.call(null,g.call(null,x));
});
var G__11100__11104 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__11100__11105 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__11100__11106 = (function() { 
var G__11108__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__11108 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11108__delegate.call(this, x, y, z, args);
};
G__11108.cljs$lang$maxFixedArity = 3;
G__11108.cljs$lang$applyTo = (function (arglist__11110){
var x = cljs.core.first(arglist__11110);
var y = cljs.core.first(cljs.core.next(arglist__11110));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11110)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11110)));
return G__11108__delegate.call(this, x, y, z, args);
});
return G__11108;
})()
;
G__11100 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__11100__11102.call(this);
case  1 :
return G__11100__11103.call(this,x);
case  2 :
return G__11100__11104.call(this,x,y);
case  3 :
return G__11100__11105.call(this,x,y,z);
default:
return G__11100__11106.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11100.cljs$lang$maxFixedArity = 3;
G__11100.cljs$lang$applyTo = G__11100__11106.cljs$lang$applyTo;
return G__11100;
})()
});
var comp__10914 = (function (f,g,h){
return (function() {
var G__11112 = null;
var G__11112__11113 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__11112__11114 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__11112__11115 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__11112__11116 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__11112__11117 = (function() { 
var G__11125__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__11125 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11125__delegate.call(this, x, y, z, args);
};
G__11125.cljs$lang$maxFixedArity = 3;
G__11125.cljs$lang$applyTo = (function (arglist__11131){
var x = cljs.core.first(arglist__11131);
var y = cljs.core.first(cljs.core.next(arglist__11131));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11131)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11131)));
return G__11125__delegate.call(this, x, y, z, args);
});
return G__11125;
})()
;
G__11112 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__11112__11113.call(this);
case  1 :
return G__11112__11114.call(this,x);
case  2 :
return G__11112__11115.call(this,x,y);
case  3 :
return G__11112__11116.call(this,x,y,z);
default:
return G__11112__11117.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11112.cljs$lang$maxFixedArity = 3;
G__11112.cljs$lang$applyTo = G__11112__11117.cljs$lang$applyTo;
return G__11112;
})()
});
var comp__10915 = (function() { 
var G__11133__delegate = function (f1,f2,f3,fs){
var fs__10896 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__11135__delegate = function (args){
var ret__10898 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10896),args);
var fs__10899 = cljs.core.next.call(null,fs__10896);

while(true){
if(cljs.core.truth_(fs__10899))
{{
var G__11136 = cljs.core.first.call(null,fs__10899).call(null,ret__10898);
var G__11137 = cljs.core.next.call(null,fs__10899);
ret__10898 = G__11136;
fs__10899 = G__11137;
continue;
}
} else
{return ret__10898;
}
break;
}
};
var G__11135 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11135__delegate.call(this, args);
};
G__11135.cljs$lang$maxFixedArity = 0;
G__11135.cljs$lang$applyTo = (function (arglist__11141){
var args = cljs.core.seq( arglist__11141 );;
return G__11135__delegate.call(this, args);
});
return G__11135;
})()
;
};
var G__11133 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11133__delegate.call(this, f1, f2, f3, fs);
};
G__11133.cljs$lang$maxFixedArity = 3;
G__11133.cljs$lang$applyTo = (function (arglist__11148){
var f1 = cljs.core.first(arglist__11148);
var f2 = cljs.core.first(cljs.core.next(arglist__11148));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11148)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11148)));
return G__11133__delegate.call(this, f1, f2, f3, fs);
});
return G__11133;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10909.call(this);
case  1 :
return comp__10911.call(this,f1);
case  2 :
return comp__10912.call(this,f1,f2);
case  3 :
return comp__10914.call(this,f1,f2,f3);
default:
return comp__10915.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10915.cljs$lang$applyTo;
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
var partial__11169 = (function (f,arg1){
return (function() { 
var G__11174__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__11174 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11174__delegate.call(this, args);
};
G__11174.cljs$lang$maxFixedArity = 0;
G__11174.cljs$lang$applyTo = (function (arglist__11175){
var args = cljs.core.seq( arglist__11175 );;
return G__11174__delegate.call(this, args);
});
return G__11174;
})()
;
});
var partial__11170 = (function (f,arg1,arg2){
return (function() { 
var G__11177__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__11177 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11177__delegate.call(this, args);
};
G__11177.cljs$lang$maxFixedArity = 0;
G__11177.cljs$lang$applyTo = (function (arglist__11178){
var args = cljs.core.seq( arglist__11178 );;
return G__11177__delegate.call(this, args);
});
return G__11177;
})()
;
});
var partial__11171 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__11179__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__11179 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11179__delegate.call(this, args);
};
G__11179.cljs$lang$maxFixedArity = 0;
G__11179.cljs$lang$applyTo = (function (arglist__11181){
var args = cljs.core.seq( arglist__11181 );;
return G__11179__delegate.call(this, args);
});
return G__11179;
})()
;
});
var partial__11172 = (function() { 
var G__11182__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__11183__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__11183 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11183__delegate.call(this, args);
};
G__11183.cljs$lang$maxFixedArity = 0;
G__11183.cljs$lang$applyTo = (function (arglist__11185){
var args = cljs.core.seq( arglist__11185 );;
return G__11183__delegate.call(this, args);
});
return G__11183;
})()
;
};
var G__11182 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11182__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__11182.cljs$lang$maxFixedArity = 4;
G__11182.cljs$lang$applyTo = (function (arglist__11186){
var f = cljs.core.first(arglist__11186);
var arg1 = cljs.core.first(cljs.core.next(arglist__11186));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11186)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11186))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11186))));
return G__11182__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__11182;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__11169.call(this,f,arg1);
case  3 :
return partial__11170.call(this,f,arg1,arg2);
case  4 :
return partial__11171.call(this,f,arg1,arg2,arg3);
default:
return partial__11172.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__11172.cljs$lang$applyTo;
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
var fnil__11225 = (function (f,x){
return (function() {
var G__11230 = null;
var G__11230__11231 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__11230__11232 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__11230__11233 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__11230__11234 = (function() { 
var G__11243__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__11243 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11243__delegate.call(this, a, b, c, ds);
};
G__11243.cljs$lang$maxFixedArity = 3;
G__11243.cljs$lang$applyTo = (function (arglist__11261){
var a = cljs.core.first(arglist__11261);
var b = cljs.core.first(cljs.core.next(arglist__11261));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11261)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11261)));
return G__11243__delegate.call(this, a, b, c, ds);
});
return G__11243;
})()
;
G__11230 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__11230__11231.call(this,a);
case  2 :
return G__11230__11232.call(this,a,b);
case  3 :
return G__11230__11233.call(this,a,b,c);
default:
return G__11230__11234.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11230.cljs$lang$maxFixedArity = 3;
G__11230.cljs$lang$applyTo = G__11230__11234.cljs$lang$applyTo;
return G__11230;
})()
});
var fnil__11226 = (function (f,x,y){
return (function() {
var G__11263 = null;
var G__11263__11264 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11263__11265 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11263__11266 = (function() { 
var G__11275__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11275 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11275__delegate.call(this, a, b, c, ds);
};
G__11275.cljs$lang$maxFixedArity = 3;
G__11275.cljs$lang$applyTo = (function (arglist__11277){
var a = cljs.core.first(arglist__11277);
var b = cljs.core.first(cljs.core.next(arglist__11277));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11277)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11277)));
return G__11275__delegate.call(this, a, b, c, ds);
});
return G__11275;
})()
;
G__11263 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11263__11264.call(this,a,b);
case  3 :
return G__11263__11265.call(this,a,b,c);
default:
return G__11263__11266.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11263.cljs$lang$maxFixedArity = 3;
G__11263.cljs$lang$applyTo = G__11263__11266.cljs$lang$applyTo;
return G__11263;
})()
});
var fnil__11227 = (function (f,x,y,z){
return (function() {
var G__11279 = null;
var G__11279__11281 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11279__11282 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11279__11283 = (function() { 
var G__11286__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11286 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11286__delegate.call(this, a, b, c, ds);
};
G__11286.cljs$lang$maxFixedArity = 3;
G__11286.cljs$lang$applyTo = (function (arglist__11288){
var a = cljs.core.first(arglist__11288);
var b = cljs.core.first(cljs.core.next(arglist__11288));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11288)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11288)));
return G__11286__delegate.call(this, a, b, c, ds);
});
return G__11286;
})()
;
G__11279 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11279__11281.call(this,a,b);
case  3 :
return G__11279__11282.call(this,a,b,c);
default:
return G__11279__11283.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11279.cljs$lang$maxFixedArity = 3;
G__11279.cljs$lang$applyTo = G__11279__11283.cljs$lang$applyTo;
return G__11279;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__11225.call(this,f,x);
case  3 :
return fnil__11226.call(this,f,x,y);
case  4 :
return fnil__11227.call(this,f,x,y,z);
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
var mapi__11297 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11293 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11293))
{var s__11295 = temp__3698__auto____11293;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11295)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11295)));
} else
{return null;
}
})));
});

return mapi__11297.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11366 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11366))
{var s__11367 = temp__3698__auto____11366;

var x__11368 = f.call(null,cljs.core.first.call(null,s__11367));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11368)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11367));
} else
{return cljs.core.cons.call(null,x__11368,keep.call(null,f,cljs.core.rest.call(null,s__11367)));
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
var keepi__11415 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11404 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11404))
{var s__11406 = temp__3698__auto____11404;

var x__11409 = f.call(null,idx,cljs.core.first.call(null,s__11406));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11409)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11406));
} else
{return cljs.core.cons.call(null,x__11409,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11406)));
}
} else
{return null;
}
})));
});

return keepi__11415.call(null,0,coll);
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
var every_pred__11615 = (function (p){
return (function() {
var ep1 = null;
var ep1__11624 = (function (){
return true;
});
var ep1__11625 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11627 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11452 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11452))
{return p.call(null,y);
} else
{return and__3546__auto____11452;
}
})());
});
var ep1__11628 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11454 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11454))
{var and__3546__auto____11456 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11456))
{return p.call(null,z);
} else
{return and__3546__auto____11456;
}
} else
{return and__3546__auto____11454;
}
})());
});
var ep1__11629 = (function() { 
var G__11639__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11457 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11457))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11457;
}
})());
};
var G__11639 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11639__delegate.call(this, x, y, z, args);
};
G__11639.cljs$lang$maxFixedArity = 3;
G__11639.cljs$lang$applyTo = (function (arglist__11642){
var x = cljs.core.first(arglist__11642);
var y = cljs.core.first(cljs.core.next(arglist__11642));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11642)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11642)));
return G__11639__delegate.call(this, x, y, z, args);
});
return G__11639;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11624.call(this);
case  1 :
return ep1__11625.call(this,x);
case  2 :
return ep1__11627.call(this,x,y);
case  3 :
return ep1__11628.call(this,x,y,z);
default:
return ep1__11629.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11629.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11616 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11644 = (function (){
return true;
});
var ep2__11645 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11507 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11507))
{return p2.call(null,x);
} else
{return and__3546__auto____11507;
}
})());
});
var ep2__11646 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11508 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11508))
{var and__3546__auto____11510 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11510))
{var and__3546__auto____11512 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11512))
{return p2.call(null,y);
} else
{return and__3546__auto____11512;
}
} else
{return and__3546__auto____11510;
}
} else
{return and__3546__auto____11508;
}
})());
});
var ep2__11648 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11516 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11516))
{var and__3546__auto____11517 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11517))
{var and__3546__auto____11518 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11518))
{var and__3546__auto____11519 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11519))
{var and__3546__auto____11525 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11525))
{return p2.call(null,z);
} else
{return and__3546__auto____11525;
}
} else
{return and__3546__auto____11519;
}
} else
{return and__3546__auto____11518;
}
} else
{return and__3546__auto____11517;
}
} else
{return and__3546__auto____11516;
}
})());
});
var ep2__11650 = (function() { 
var G__11754__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11538 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11538))
{return cljs.core.every_QMARK_.call(null,(function (p1__11386_SHARP_){
var and__3546__auto____11539 = p1.call(null,p1__11386_SHARP_);

if(cljs.core.truth_(and__3546__auto____11539))
{return p2.call(null,p1__11386_SHARP_);
} else
{return and__3546__auto____11539;
}
}),args);
} else
{return and__3546__auto____11538;
}
})());
};
var G__11754 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11754__delegate.call(this, x, y, z, args);
};
G__11754.cljs$lang$maxFixedArity = 3;
G__11754.cljs$lang$applyTo = (function (arglist__11764){
var x = cljs.core.first(arglist__11764);
var y = cljs.core.first(cljs.core.next(arglist__11764));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11764)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11764)));
return G__11754__delegate.call(this, x, y, z, args);
});
return G__11754;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11644.call(this);
case  1 :
return ep2__11645.call(this,x);
case  2 :
return ep2__11646.call(this,x,y);
case  3 :
return ep2__11648.call(this,x,y,z);
default:
return ep2__11650.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11650.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11617 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11767 = (function (){
return true;
});
var ep3__11768 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11543 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11543))
{var and__3546__auto____11544 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11544))
{return p3.call(null,x);
} else
{return and__3546__auto____11544;
}
} else
{return and__3546__auto____11543;
}
})());
});
var ep3__11769 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11546 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11546))
{var and__3546__auto____11547 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11547))
{var and__3546__auto____11553 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11553))
{var and__3546__auto____11556 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11556))
{var and__3546__auto____11557 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11557))
{return p3.call(null,y);
} else
{return and__3546__auto____11557;
}
} else
{return and__3546__auto____11556;
}
} else
{return and__3546__auto____11553;
}
} else
{return and__3546__auto____11547;
}
} else
{return and__3546__auto____11546;
}
})());
});
var ep3__11770 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11559 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11559))
{var and__3546__auto____11560 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11560))
{var and__3546__auto____11563 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11563))
{var and__3546__auto____11570 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11570))
{var and__3546__auto____11571 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11571))
{var and__3546__auto____11573 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11573))
{var and__3546__auto____11574 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11574))
{var and__3546__auto____11575 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11575))
{return p3.call(null,z);
} else
{return and__3546__auto____11575;
}
} else
{return and__3546__auto____11574;
}
} else
{return and__3546__auto____11573;
}
} else
{return and__3546__auto____11571;
}
} else
{return and__3546__auto____11570;
}
} else
{return and__3546__auto____11563;
}
} else
{return and__3546__auto____11560;
}
} else
{return and__3546__auto____11559;
}
})());
});
var ep3__11771 = (function() { 
var G__11852__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11583 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11583))
{return cljs.core.every_QMARK_.call(null,(function (p1__11390_SHARP_){
var and__3546__auto____11584 = p1.call(null,p1__11390_SHARP_);

if(cljs.core.truth_(and__3546__auto____11584))
{var and__3546__auto____11586 = p2.call(null,p1__11390_SHARP_);

if(cljs.core.truth_(and__3546__auto____11586))
{return p3.call(null,p1__11390_SHARP_);
} else
{return and__3546__auto____11586;
}
} else
{return and__3546__auto____11584;
}
}),args);
} else
{return and__3546__auto____11583;
}
})());
};
var G__11852 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11852__delegate.call(this, x, y, z, args);
};
G__11852.cljs$lang$maxFixedArity = 3;
G__11852.cljs$lang$applyTo = (function (arglist__11854){
var x = cljs.core.first(arglist__11854);
var y = cljs.core.first(cljs.core.next(arglist__11854));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11854)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11854)));
return G__11852__delegate.call(this, x, y, z, args);
});
return G__11852;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11767.call(this);
case  1 :
return ep3__11768.call(this,x);
case  2 :
return ep3__11769.call(this,x,y);
case  3 :
return ep3__11770.call(this,x,y,z);
default:
return ep3__11771.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11771.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11618 = (function() { 
var G__11856__delegate = function (p1,p2,p3,ps){
var ps__11590 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11857 = (function (){
return true;
});
var epn__11858 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11392_SHARP_){
return p1__11392_SHARP_.call(null,x);
}),ps__11590);
});
var epn__11860 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11395_SHARP_){
var and__3546__auto____11595 = p1__11395_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11595))
{return p1__11395_SHARP_.call(null,y);
} else
{return and__3546__auto____11595;
}
}),ps__11590);
});
var epn__11862 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11397_SHARP_){
var and__3546__auto____11599 = p1__11397_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11599))
{var and__3546__auto____11600 = p1__11397_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11600))
{return p1__11397_SHARP_.call(null,z);
} else
{return and__3546__auto____11600;
}
} else
{return and__3546__auto____11599;
}
}),ps__11590);
});
var epn__11864 = (function() { 
var G__11869__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11606 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11606))
{return cljs.core.every_QMARK_.call(null,(function (p1__11399_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11399_SHARP_,args);
}),ps__11590);
} else
{return and__3546__auto____11606;
}
})());
};
var G__11869 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11869__delegate.call(this, x, y, z, args);
};
G__11869.cljs$lang$maxFixedArity = 3;
G__11869.cljs$lang$applyTo = (function (arglist__11873){
var x = cljs.core.first(arglist__11873);
var y = cljs.core.first(cljs.core.next(arglist__11873));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11873)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11873)));
return G__11869__delegate.call(this, x, y, z, args);
});
return G__11869;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11857.call(this);
case  1 :
return epn__11858.call(this,x);
case  2 :
return epn__11860.call(this,x,y);
case  3 :
return epn__11862.call(this,x,y,z);
default:
return epn__11864.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11864.cljs$lang$applyTo;
return epn;
})()
};
var G__11856 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11856__delegate.call(this, p1, p2, p3, ps);
};
G__11856.cljs$lang$maxFixedArity = 3;
G__11856.cljs$lang$applyTo = (function (arglist__11877){
var p1 = cljs.core.first(arglist__11877);
var p2 = cljs.core.first(cljs.core.next(arglist__11877));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11877)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11877)));
return G__11856__delegate.call(this, p1, p2, p3, ps);
});
return G__11856;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11615.call(this,p1);
case  2 :
return every_pred__11616.call(this,p1,p2);
case  3 :
return every_pred__11617.call(this,p1,p2,p3);
default:
return every_pred__11618.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11618.cljs$lang$applyTo;
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
var some_fn__11991 = (function (p){
return (function() {
var sp1 = null;
var sp1__11998 = (function (){
return null;
});
var sp1__11999 = (function (x){
return p.call(null,x);
});
var sp1__12000 = (function (x,y){
var or__3548__auto____11879 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11879))
{return or__3548__auto____11879;
} else
{return p.call(null,y);
}
});
var sp1__12001 = (function (x,y,z){
var or__3548__auto____11881 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11881))
{return or__3548__auto____11881;
} else
{var or__3548__auto____11882 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11882))
{return or__3548__auto____11882;
} else
{return p.call(null,z);
}
}
});
var sp1__12003 = (function() { 
var G__12031__delegate = function (x,y,z,args){
var or__3548__auto____11883 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11883))
{return or__3548__auto____11883;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__12031 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12031__delegate.call(this, x, y, z, args);
};
G__12031.cljs$lang$maxFixedArity = 3;
G__12031.cljs$lang$applyTo = (function (arglist__12036){
var x = cljs.core.first(arglist__12036);
var y = cljs.core.first(cljs.core.next(arglist__12036));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12036)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12036)));
return G__12031__delegate.call(this, x, y, z, args);
});
return G__12031;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11998.call(this);
case  1 :
return sp1__11999.call(this,x);
case  2 :
return sp1__12000.call(this,x,y);
case  3 :
return sp1__12001.call(this,x,y,z);
default:
return sp1__12003.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__12003.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11993 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__12039 = (function (){
return null;
});
var sp2__12041 = (function (x){
var or__3548__auto____11933 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11933))
{return or__3548__auto____11933;
} else
{return p2.call(null,x);
}
});
var sp2__12042 = (function (x,y){
var or__3548__auto____11935 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11935))
{return or__3548__auto____11935;
} else
{var or__3548__auto____11938 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11938))
{return or__3548__auto____11938;
} else
{var or__3548__auto____11942 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11942))
{return or__3548__auto____11942;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__12043 = (function (x,y,z){
var or__3548__auto____11945 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11945))
{return or__3548__auto____11945;
} else
{var or__3548__auto____11946 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11946))
{return or__3548__auto____11946;
} else
{var or__3548__auto____11947 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11947))
{return or__3548__auto____11947;
} else
{var or__3548__auto____11948 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11948))
{return or__3548__auto____11948;
} else
{var or__3548__auto____11951 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11951))
{return or__3548__auto____11951;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__12044 = (function() { 
var G__12052__delegate = function (x,y,z,args){
var or__3548__auto____11952 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11952))
{return or__3548__auto____11952;
} else
{return cljs.core.some.call(null,(function (p1__11437_SHARP_){
var or__3548__auto____11953 = p1.call(null,p1__11437_SHARP_);

if(cljs.core.truth_(or__3548__auto____11953))
{return or__3548__auto____11953;
} else
{return p2.call(null,p1__11437_SHARP_);
}
}),args);
}
};
var G__12052 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12052__delegate.call(this, x, y, z, args);
};
G__12052.cljs$lang$maxFixedArity = 3;
G__12052.cljs$lang$applyTo = (function (arglist__12056){
var x = cljs.core.first(arglist__12056);
var y = cljs.core.first(cljs.core.next(arglist__12056));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12056)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12056)));
return G__12052__delegate.call(this, x, y, z, args);
});
return G__12052;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__12039.call(this);
case  1 :
return sp2__12041.call(this,x);
case  2 :
return sp2__12042.call(this,x,y);
case  3 :
return sp2__12043.call(this,x,y,z);
default:
return sp2__12044.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__12044.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11994 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__12058 = (function (){
return null;
});
var sp3__12059 = (function (x){
var or__3548__auto____11957 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11957))
{return or__3548__auto____11957;
} else
{var or__3548__auto____11958 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11958))
{return or__3548__auto____11958;
} else
{return p3.call(null,x);
}
}
});
var sp3__12060 = (function (x,y){
var or__3548__auto____11960 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11960))
{return or__3548__auto____11960;
} else
{var or__3548__auto____11961 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11961))
{return or__3548__auto____11961;
} else
{var or__3548__auto____11962 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11962))
{return or__3548__auto____11962;
} else
{var or__3548__auto____11963 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11963))
{return or__3548__auto____11963;
} else
{var or__3548__auto____11964 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11964))
{return or__3548__auto____11964;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__12061 = (function (x,y,z){
var or__3548__auto____11965 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11965))
{return or__3548__auto____11965;
} else
{var or__3548__auto____11966 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11966))
{return or__3548__auto____11966;
} else
{var or__3548__auto____11967 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11967))
{return or__3548__auto____11967;
} else
{var or__3548__auto____11968 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11968))
{return or__3548__auto____11968;
} else
{var or__3548__auto____11972 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11972))
{return or__3548__auto____11972;
} else
{var or__3548__auto____11973 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11973))
{return or__3548__auto____11973;
} else
{var or__3548__auto____11974 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11974))
{return or__3548__auto____11974;
} else
{var or__3548__auto____11975 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11975))
{return or__3548__auto____11975;
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
var sp3__12062 = (function() { 
var G__12075__delegate = function (x,y,z,args){
var or__3548__auto____11976 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11976))
{return or__3548__auto____11976;
} else
{return cljs.core.some.call(null,(function (p1__11438_SHARP_){
var or__3548__auto____11977 = p1.call(null,p1__11438_SHARP_);

if(cljs.core.truth_(or__3548__auto____11977))
{return or__3548__auto____11977;
} else
{var or__3548__auto____11978 = p2.call(null,p1__11438_SHARP_);

if(cljs.core.truth_(or__3548__auto____11978))
{return or__3548__auto____11978;
} else
{return p3.call(null,p1__11438_SHARP_);
}
}
}),args);
}
};
var G__12075 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12075__delegate.call(this, x, y, z, args);
};
G__12075.cljs$lang$maxFixedArity = 3;
G__12075.cljs$lang$applyTo = (function (arglist__12079){
var x = cljs.core.first(arglist__12079);
var y = cljs.core.first(cljs.core.next(arglist__12079));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12079)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12079)));
return G__12075__delegate.call(this, x, y, z, args);
});
return G__12075;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__12058.call(this);
case  1 :
return sp3__12059.call(this,x);
case  2 :
return sp3__12060.call(this,x,y);
case  3 :
return sp3__12061.call(this,x,y,z);
default:
return sp3__12062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__12062.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11995 = (function() { 
var G__12082__delegate = function (p1,p2,p3,ps){
var ps__11979 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__12083 = (function (){
return null;
});
var spn__12084 = (function (x){
return cljs.core.some.call(null,(function (p1__11440_SHARP_){
return p1__11440_SHARP_.call(null,x);
}),ps__11979);
});
var spn__12086 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11441_SHARP_){
var or__3548__auto____11983 = p1__11441_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11983))
{return or__3548__auto____11983;
} else
{return p1__11441_SHARP_.call(null,y);
}
}),ps__11979);
});
var spn__12087 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11442_SHARP_){
var or__3548__auto____11984 = p1__11442_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11984))
{return or__3548__auto____11984;
} else
{var or__3548__auto____11985 = p1__11442_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11985))
{return or__3548__auto____11985;
} else
{return p1__11442_SHARP_.call(null,z);
}
}
}),ps__11979);
});
var spn__12088 = (function() { 
var G__12092__delegate = function (x,y,z,args){
var or__3548__auto____11988 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11988))
{return or__3548__auto____11988;
} else
{return cljs.core.some.call(null,(function (p1__11444_SHARP_){
return cljs.core.some.call(null,p1__11444_SHARP_,args);
}),ps__11979);
}
};
var G__12092 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12092__delegate.call(this, x, y, z, args);
};
G__12092.cljs$lang$maxFixedArity = 3;
G__12092.cljs$lang$applyTo = (function (arglist__12095){
var x = cljs.core.first(arglist__12095);
var y = cljs.core.first(cljs.core.next(arglist__12095));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12095)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12095)));
return G__12092__delegate.call(this, x, y, z, args);
});
return G__12092;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__12083.call(this);
case  1 :
return spn__12084.call(this,x);
case  2 :
return spn__12086.call(this,x,y);
case  3 :
return spn__12087.call(this,x,y,z);
default:
return spn__12088.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__12088.cljs$lang$applyTo;
return spn;
})()
};
var G__12082 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12082__delegate.call(this, p1, p2, p3, ps);
};
G__12082.cljs$lang$maxFixedArity = 3;
G__12082.cljs$lang$applyTo = (function (arglist__12098){
var p1 = cljs.core.first(arglist__12098);
var p2 = cljs.core.first(cljs.core.next(arglist__12098));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12098)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12098)));
return G__12082__delegate.call(this, p1, p2, p3, ps);
});
return G__12082;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11991.call(this,p1);
case  2 :
return some_fn__11993.call(this,p1,p2);
case  3 :
return some_fn__11994.call(this,p1,p2,p3);
default:
return some_fn__11995.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11995.cljs$lang$applyTo;
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
var map__12160 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12103 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12103))
{var s__12104 = temp__3698__auto____12103;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__12104)),map.call(null,f,cljs.core.rest.call(null,s__12104)));
} else
{return null;
}
})));
});
var map__12161 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12107 = cljs.core.seq.call(null,c1);
var s2__12109 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12110 = s1__12107;

if(cljs.core.truth_(and__3546__auto____12110))
{return s2__12109;
} else
{return and__3546__auto____12110;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12107),cljs.core.first.call(null,s2__12109)),map.call(null,f,cljs.core.rest.call(null,s1__12107),cljs.core.rest.call(null,s2__12109)));
} else
{return null;
}
})));
});
var map__12162 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12114 = cljs.core.seq.call(null,c1);
var s2__12115 = cljs.core.seq.call(null,c2);
var s3__12116 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____12118 = s1__12114;

if(cljs.core.truth_(and__3546__auto____12118))
{var and__3546__auto____12119 = s2__12115;

if(cljs.core.truth_(and__3546__auto____12119))
{return s3__12116;
} else
{return and__3546__auto____12119;
}
} else
{return and__3546__auto____12118;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12114),cljs.core.first.call(null,s2__12115),cljs.core.first.call(null,s3__12116)),map.call(null,f,cljs.core.rest.call(null,s1__12114),cljs.core.rest.call(null,s2__12115),cljs.core.rest.call(null,s3__12116)));
} else
{return null;
}
})));
});
var map__12163 = (function() { 
var G__12170__delegate = function (f,c1,c2,c3,colls){
var step__12155 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12124 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12124)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12124),step.call(null,map.call(null,cljs.core.rest,ss__12124)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11878_SHARP_){
return cljs.core.apply.call(null,f,p1__11878_SHARP_);
}),step__12155.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12170 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12170__delegate.call(this, f, c1, c2, c3, colls);
};
G__12170.cljs$lang$maxFixedArity = 4;
G__12170.cljs$lang$applyTo = (function (arglist__12175){
var f = cljs.core.first(arglist__12175);
var c1 = cljs.core.first(cljs.core.next(arglist__12175));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12175)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12175))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12175))));
return G__12170__delegate.call(this, f, c1, c2, c3, colls);
});
return G__12170;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__12160.call(this,f,c1);
case  3 :
return map__12161.call(this,f,c1,c2);
case  4 :
return map__12162.call(this,f,c1,c2,c3);
default:
return map__12163.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__12163.cljs$lang$applyTo;
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
{var temp__3698__auto____12180 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12180))
{var s__12181 = temp__3698__auto____12180;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12181),take.call(null,(n - 1),cljs.core.rest.call(null,s__12181)));
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
var step__12188 = (function (n,coll){
while(true){
var s__12186 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12187 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12187))
{return s__12186;
} else
{return and__3546__auto____12187;
}
})()))
{{
var G__12192 = (n - 1);
var G__12193 = cljs.core.rest.call(null,s__12186);
n = G__12192;
coll = G__12193;
continue;
}
} else
{return s__12186;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12188.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12198 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12199 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12198.call(this,n);
case  2 :
return drop_last__12199.call(this,n,s);
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
var s__12205 = cljs.core.seq.call(null,coll);
var lead__12206 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12206))
{{
var G__12211 = cljs.core.next.call(null,s__12205);
var G__12212 = cljs.core.next.call(null,lead__12206);
s__12205 = G__12211;
lead__12206 = G__12212;
continue;
}
} else
{return s__12205;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12223 = (function (pred,coll){
while(true){
var s__12218 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12220 = s__12218;

if(cljs.core.truth_(and__3546__auto____12220))
{return pred.call(null,cljs.core.first.call(null,s__12218));
} else
{return and__3546__auto____12220;
}
})()))
{{
var G__12230 = pred;
var G__12231 = cljs.core.rest.call(null,s__12218);
pred = G__12230;
coll = G__12231;
continue;
}
} else
{return s__12218;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12223.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12237 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12237))
{var s__12238 = temp__3698__auto____12237;

return cljs.core.concat.call(null,s__12238,cycle.call(null,s__12238));
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
var repeat__12248 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12249 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12248.call(this,n);
case  2 :
return repeat__12249.call(this,n,x);
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
var repeatedly__12273 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12274 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12273.call(this,n);
case  2 :
return repeatedly__12274.call(this,n,f);
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
var interleave__12299 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12287 = cljs.core.seq.call(null,c1);
var s2__12288 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12289 = s1__12287;

if(cljs.core.truth_(and__3546__auto____12289))
{return s2__12288;
} else
{return and__3546__auto____12289;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12287),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12288),interleave.call(null,cljs.core.rest.call(null,s1__12287),cljs.core.rest.call(null,s2__12288))));
} else
{return null;
}
})));
});
var interleave__12300 = (function() { 
var G__12303__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12294 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12294)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12294),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12294)));
} else
{return null;
}
})));
};
var G__12303 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12303__delegate.call(this, c1, c2, colls);
};
G__12303.cljs$lang$maxFixedArity = 2;
G__12303.cljs$lang$applyTo = (function (arglist__12305){
var c1 = cljs.core.first(arglist__12305);
var c2 = cljs.core.first(cljs.core.next(arglist__12305));
var colls = cljs.core.rest(cljs.core.next(arglist__12305));
return G__12303__delegate.call(this, c1, c2, colls);
});
return G__12303;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12299.call(this,c1,c2);
default:
return interleave__12300.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12300.cljs$lang$applyTo;
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
var cat__12330 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12328 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12328))
{var coll__12329 = temp__3695__auto____12328;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12329),cat.call(null,cljs.core.rest.call(null,coll__12329),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12330.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12338 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12339 = (function() { 
var G__12341__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12341 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12341__delegate.call(this, f, coll, colls);
};
G__12341.cljs$lang$maxFixedArity = 2;
G__12341.cljs$lang$applyTo = (function (arglist__12342){
var f = cljs.core.first(arglist__12342);
var coll = cljs.core.first(cljs.core.next(arglist__12342));
var colls = cljs.core.rest(cljs.core.next(arglist__12342));
return G__12341__delegate.call(this, f, coll, colls);
});
return G__12341;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12338.call(this,f,coll);
default:
return mapcat__12339.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12339.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12347 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12347))
{var s__12348 = temp__3698__auto____12347;

var f__12349 = cljs.core.first.call(null,s__12348);
var r__12354 = cljs.core.rest.call(null,s__12348);

if(cljs.core.truth_(pred.call(null,f__12349)))
{return cljs.core.cons.call(null,f__12349,filter.call(null,pred,r__12354));
} else
{return filter.call(null,pred,r__12354);
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
var walk__12369 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12369.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12365_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12365_SHARP_));
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
var partition__12422 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12423 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12381 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12381))
{var s__12386 = temp__3698__auto____12381;

var p__12387 = cljs.core.take.call(null,n,s__12386);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12387))))
{return cljs.core.cons.call(null,p__12387,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12386)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12425 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12419 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12419))
{var s__12420 = temp__3698__auto____12419;

var p__12421 = cljs.core.take.call(null,n,s__12420);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12421))))
{return cljs.core.cons.call(null,p__12421,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12420)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12421,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12422.call(this,n,step);
case  3 :
return partition__12423.call(this,n,step,pad);
case  4 :
return partition__12425.call(this,n,step,pad,coll);
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
var get_in__12445 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12446 = (function (m,ks,not_found){
var sentinel__12439 = cljs.core.lookup_sentinel;
var m__12441 = m;
var ks__12442 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12442))
{var m__12444 = cljs.core.get.call(null,m__12441,cljs.core.first.call(null,ks__12442),sentinel__12439);

if(cljs.core.truth_((sentinel__12439 === m__12444)))
{return not_found;
} else
{{
var G__12448 = sentinel__12439;
var G__12449 = m__12444;
var G__12450 = cljs.core.next.call(null,ks__12442);
sentinel__12439 = G__12448;
m__12441 = G__12449;
ks__12442 = G__12450;
continue;
}
}
} else
{return m__12441;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12445.call(this,m,ks);
case  3 :
return get_in__12446.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12489,v){
var vec__12491__12492 = p__12489;
var k__12493 = cljs.core.nth.call(null,vec__12491__12492,0,null);
var ks__12494 = cljs.core.nthnext.call(null,vec__12491__12492,1);

if(cljs.core.truth_(ks__12494))
{return cljs.core.assoc.call(null,m,k__12493,assoc_in.call(null,cljs.core.get.call(null,m,k__12493),ks__12494,v));
} else
{return cljs.core.assoc.call(null,m,k__12493,v);
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
var update_in__delegate = function (m,p__12503,f,args){
var vec__12504__12506 = p__12503;
var k__12507 = cljs.core.nth.call(null,vec__12504__12506,0,null);
var ks__12509 = cljs.core.nthnext.call(null,vec__12504__12506,1);

if(cljs.core.truth_(ks__12509))
{return cljs.core.assoc.call(null,m,k__12507,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12507),ks__12509,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12507,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12507),args));
}
};
var update_in = function (m,p__12503,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12503, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12519){
var m = cljs.core.first(arglist__12519);
var p__12503 = cljs.core.first(cljs.core.next(arglist__12519));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12519)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12519)));
return update_in__delegate.call(this, m, p__12503, f, args);
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
var this__12530 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12605 = null;
var G__12605__12606 = (function (coll,k){
var this__12535 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12605__12607 = (function (coll,k,not_found){
var this__12537 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12605 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12605__12606.call(this,coll,k);
case  3 :
return G__12605__12607.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12605;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12539 = this;
var new_array__12540 = cljs.core.aclone.call(null,this__12539.array);

(new_array__12540[k] = v);
return (new cljs.core.Vector(this__12539.meta,new_array__12540));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12613 = null;
var G__12613__12614 = (function (coll,k){
var this__12543 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12613__12615 = (function (coll,k,not_found){
var this__12549 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12613 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12613__12614.call(this,coll,k);
case  3 :
return G__12613__12615.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12613;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12550 = this;
var new_array__12551 = cljs.core.aclone.call(null,this__12550.array);

new_array__12551.push(o);
return (new cljs.core.Vector(this__12550.meta,new_array__12551));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12617 = null;
var G__12617__12618 = (function (v,f){
var this__12552 = this;
return cljs.core.ci_reduce.call(null,this__12552.array,f);
});
var G__12617__12619 = (function (v,f,start){
var this__12554 = this;
return cljs.core.ci_reduce.call(null,this__12554.array,f,start);
});
G__12617 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12617__12618.call(this,v,f);
case  3 :
return G__12617__12619.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12617;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12560 = this;
if(cljs.core.truth_((this__12560.array.length > 0)))
{var vector_seq__12566 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12560.array.length)))
{return cljs.core.cons.call(null,(this__12560.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12566.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12569 = this;
return this__12569.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12571 = this;
var count__12575 = this__12571.array.length;

if(cljs.core.truth_((count__12575 > 0)))
{return (this__12571.array[(count__12575 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12578 = this;
if(cljs.core.truth_((this__12578.array.length > 0)))
{var new_array__12581 = cljs.core.aclone.call(null,this__12578.array);

new_array__12581.pop();
return (new cljs.core.Vector(this__12578.meta,new_array__12581));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12583 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12585 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12588 = this;
return (new cljs.core.Vector(meta,this__12588.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12589 = this;
return this__12589.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12631 = null;
var G__12631__12632 = (function (coll,n){
var this__12595 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12597 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12597))
{return (n < this__12595.array.length);
} else
{return and__3546__auto____12597;
}
})()))
{return (this__12595.array[n]);
} else
{return null;
}
});
var G__12631__12633 = (function (coll,n,not_found){
var this__12599 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12600 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12600))
{return (n < this__12599.array.length);
} else
{return and__3546__auto____12600;
}
})()))
{return (this__12599.array[n]);
} else
{return not_found;
}
});
G__12631 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12631__12632.call(this,coll,n);
case  3 :
return G__12631__12633.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12631;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12603 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12603.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12667){
var args = cljs.core.seq( arglist__12667 );;
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
var this__12671 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12750 = null;
var G__12750__12753 = (function (coll,k){
var this__12672 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12750__12755 = (function (coll,k,not_found){
var this__12673 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12750 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12750__12753.call(this,coll,k);
case  3 :
return G__12750__12755.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12750;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12675 = this;
var v_pos__12677 = (this__12675.start + key);

return (new cljs.core.Subvec(this__12675.meta,cljs.core._assoc.call(null,this__12675.v,v_pos__12677,val),this__12675.start,((this__12675.end > (v_pos__12677 + 1)) ? this__12675.end : (v_pos__12677 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12764 = null;
var G__12764__12765 = (function (coll,k){
var this__12680 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12764__12766 = (function (coll,k,not_found){
var this__12682 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12764 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12764__12765.call(this,coll,k);
case  3 :
return G__12764__12766.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12764;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12687 = this;
return (new cljs.core.Subvec(this__12687.meta,cljs.core._assoc_n.call(null,this__12687.v,this__12687.end,o),this__12687.start,(this__12687.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12772 = null;
var G__12772__12773 = (function (coll,f){
var this__12691 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12772__12774 = (function (coll,f,start){
var this__12694 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12772 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12772__12773.call(this,coll,f);
case  3 :
return G__12772__12774.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12772;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12697 = this;
var subvec_seq__12706 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12697.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12697.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12706.call(null,this__12697.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12708 = this;
return (this__12708.end - this__12708.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12712 = this;
return cljs.core._nth.call(null,this__12712.v,(this__12712.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12716 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12716.start,this__12716.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12716.meta,this__12716.v,this__12716.start,(this__12716.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12722 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12725 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12727 = this;
return (new cljs.core.Subvec(meta,this__12727.v,this__12727.start,this__12727.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12731 = this;
return this__12731.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12866 = null;
var G__12866__12868 = (function (coll,n){
var this__12735 = this;
return cljs.core._nth.call(null,this__12735.v,(this__12735.start + n));
});
var G__12866__12869 = (function (coll,n,not_found){
var this__12738 = this;
return cljs.core._nth.call(null,this__12738.v,(this__12738.start + n),not_found);
});
G__12866 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12866__12868.call(this,coll,n);
case  3 :
return G__12866__12869.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12866;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12744 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12744.meta);
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
var subvec__12890 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12891 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12890.call(this,v,start);
case  3 :
return subvec__12891.call(this,v,start,end);
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
var this__12922 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12923 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12927 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12929 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12929.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12934 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12935 = this;
return cljs.core._first.call(null,this__12935.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12936 = this;
var temp__3695__auto____12937 = cljs.core.next.call(null,this__12936.front);

if(cljs.core.truth_(temp__3695__auto____12937))
{var f1__12938 = temp__3695__auto____12937;

return (new cljs.core.PersistentQueueSeq(this__12936.meta,f1__12938,this__12936.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12936.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12936.meta,this__12936.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12943 = this;
return this__12943.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12945 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12945.front,this__12945.rear));
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
var this__12968 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12998 = this;
if(cljs.core.truth_(this__12998.front))
{return (new cljs.core.PersistentQueue(this__12998.meta,(this__12998.count + 1),this__12998.front,cljs.core.conj.call(null,(function (){var or__3548__auto____13000 = this__12998.rear;

if(cljs.core.truth_(or__3548__auto____13000))
{return or__3548__auto____13000;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12998.meta,(this__12998.count + 1),cljs.core.conj.call(null,this__12998.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13003 = this;
var rear__13004 = cljs.core.seq.call(null,this__13003.rear);

if(cljs.core.truth_((function (){var or__3548__auto____13007 = this__13003.front;

if(cljs.core.truth_(or__3548__auto____13007))
{return or__3548__auto____13007;
} else
{return rear__13004;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__13003.front,cljs.core.seq.call(null,rear__13004)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13008 = this;
return this__13008.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__13010 = this;
return cljs.core._first.call(null,this__13010.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__13013 = this;
if(cljs.core.truth_(this__13013.front))
{var temp__3695__auto____13017 = cljs.core.next.call(null,this__13013.front);

if(cljs.core.truth_(temp__3695__auto____13017))
{var f1__13019 = temp__3695__auto____13017;

return (new cljs.core.PersistentQueue(this__13013.meta,(this__13013.count - 1),f1__13019,this__13013.rear));
} else
{return (new cljs.core.PersistentQueue(this__13013.meta,(this__13013.count - 1),cljs.core.seq.call(null,this__13013.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__13025 = this;
return cljs.core.first.call(null,this__13025.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__13028 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13034 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13037 = this;
return (new cljs.core.PersistentQueue(meta,this__13037.count,this__13037.front,this__13037.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13040 = this;
return this__13040.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13042 = this;
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
var this__13084 = this;
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
var len__13120 = array.length;

var i__13122 = 0;

while(true){
if(cljs.core.truth_((i__13122 < len__13120)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__13122]))))
{return i__13122;
} else
{{
var G__13129 = (i__13122 + incr);
i__13122 = G__13129;
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
var obj_map_contains_key_QMARK___13136 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___13137 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____13132 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13132))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13132;
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
return obj_map_contains_key_QMARK___13136.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___13137.call(this,k,strobj,true_val,false_val);
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
var this__13213 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13249 = null;
var G__13249__13251 = (function (coll,k){
var this__13214 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13249__13252 = (function (coll,k,not_found){
var this__13215 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13215.strobj,(this__13215.strobj[k]),not_found);
});
G__13249 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13249__13251.call(this,coll,k);
case  3 :
return G__13249__13252.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13249;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13216 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13217 = goog.object.clone.call(null,this__13216.strobj);
var overwrite_QMARK___13218 = new_strobj__13217.hasOwnProperty(k);

(new_strobj__13217[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13218))
{return (new cljs.core.ObjMap(this__13216.meta,this__13216.keys,new_strobj__13217));
} else
{var new_keys__13219 = cljs.core.aclone.call(null,this__13216.keys);

new_keys__13219.push(k);
return (new cljs.core.ObjMap(this__13216.meta,new_keys__13219,new_strobj__13217));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13216.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13222 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13222.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13264 = null;
var G__13264__13265 = (function (coll,k){
var this__13223 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13264__13266 = (function (coll,k,not_found){
var this__13224 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13264 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13264__13265.call(this,coll,k);
case  3 :
return G__13264__13266.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13264;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13225 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13228 = this;
if(cljs.core.truth_((this__13228.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__13177_SHARP_){
return cljs.core.vector.call(null,p1__13177_SHARP_,(this__13228.strobj[p1__13177_SHARP_]));
}),this__13228.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13233 = this;
return this__13233.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13234 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13235 = this;
return (new cljs.core.ObjMap(meta,this__13235.keys,this__13235.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13236 = this;
return this__13236.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13237 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13237.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13238 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13240 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13240))
{return this__13238.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13240;
}
})()))
{var new_keys__13241 = cljs.core.aclone.call(null,this__13238.keys);
var new_strobj__13242 = goog.object.clone.call(null,this__13238.strobj);

new_keys__13241.splice(cljs.core.scan_array.call(null,1,k,new_keys__13241),1);
cljs.core.js_delete.call(null,new_strobj__13242,k);
return (new cljs.core.ObjMap(this__13238.meta,new_keys__13241,new_strobj__13242));
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
var this__13330 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13415 = null;
var G__13415__13416 = (function (coll,k){
var this__13333 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13415__13417 = (function (coll,k,not_found){
var this__13334 = this;
var bucket__13337 = (this__13334.hashobj[cljs.core.hash.call(null,k)]);
var i__13339 = (cljs.core.truth_(bucket__13337)?cljs.core.scan_array.call(null,2,k,bucket__13337):null);

if(cljs.core.truth_(i__13339))
{return (bucket__13337[(i__13339 + 1)]);
} else
{return not_found;
}
});
G__13415 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13415__13416.call(this,coll,k);
case  3 :
return G__13415__13417.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13415;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13340 = this;
var h__13344 = cljs.core.hash.call(null,k);
var bucket__13345 = (this__13340.hashobj[h__13344]);

if(cljs.core.truth_(bucket__13345))
{var new_bucket__13348 = cljs.core.aclone.call(null,bucket__13345);
var new_hashobj__13349 = goog.object.clone.call(null,this__13340.hashobj);

(new_hashobj__13349[h__13344] = new_bucket__13348);
var temp__3695__auto____13350 = cljs.core.scan_array.call(null,2,k,new_bucket__13348);

if(cljs.core.truth_(temp__3695__auto____13350))
{var i__13351 = temp__3695__auto____13350;

(new_bucket__13348[(i__13351 + 1)] = v);
return (new cljs.core.HashMap(this__13340.meta,this__13340.count,new_hashobj__13349));
} else
{new_bucket__13348.push(k,v);
return (new cljs.core.HashMap(this__13340.meta,(this__13340.count + 1),new_hashobj__13349));
}
} else
{var new_hashobj__13352 = goog.object.clone.call(null,this__13340.hashobj);

(new_hashobj__13352[h__13344] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13340.meta,(this__13340.count + 1),new_hashobj__13352));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13359 = this;
var bucket__13361 = (this__13359.hashobj[cljs.core.hash.call(null,k)]);
var i__13362 = (cljs.core.truth_(bucket__13361)?cljs.core.scan_array.call(null,2,k,bucket__13361):null);

if(cljs.core.truth_(i__13362))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13432 = null;
var G__13432__13435 = (function (coll,k){
var this__13363 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13432__13439 = (function (coll,k,not_found){
var this__13366 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13432 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13432__13435.call(this,coll,k);
case  3 :
return G__13432__13439.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13432;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13367 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13370 = this;
if(cljs.core.truth_((this__13370.count > 0)))
{var hashes__13381 = cljs.core.js_keys.call(null,this__13370.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13301_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13370.hashobj[p1__13301_SHARP_])));
}),hashes__13381);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13386 = this;
return this__13386.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13389 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13392 = this;
return (new cljs.core.HashMap(meta,this__13392.count,this__13392.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13394 = this;
return this__13394.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13396 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13396.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13398 = this;
var h__13400 = cljs.core.hash.call(null,k);
var bucket__13401 = (this__13398.hashobj[h__13400]);
var i__13406 = (cljs.core.truth_(bucket__13401)?cljs.core.scan_array.call(null,2,k,bucket__13401):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13406)))
{return coll;
} else
{var new_hashobj__13408 = goog.object.clone.call(null,this__13398.hashobj);

if(cljs.core.truth_((3 > bucket__13401.length)))
{cljs.core.js_delete.call(null,new_hashobj__13408,h__13400);
} else
{var new_bucket__13409 = cljs.core.aclone.call(null,bucket__13401);

new_bucket__13409.splice(i__13406,2);
(new_hashobj__13408[h__13400] = new_bucket__13409);
}
return (new cljs.core.HashMap(this__13398.meta,(this__13398.count - 1),new_hashobj__13408));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13469 = ks.length;

var i__13472 = 0;
var out__13473 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13472 < len__13469)))
{{
var G__13479 = (i__13472 + 1);
var G__13480 = cljs.core.assoc.call(null,out__13473,(ks[i__13472]),(vs[i__13472]));
i__13472 = G__13479;
out__13473 = G__13480;
continue;
}
} else
{return out__13473;
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
var in$__13485 = cljs.core.seq.call(null,keyvals);
var out__13486 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13485))
{{
var G__13547 = cljs.core.nnext.call(null,in$__13485);
var G__13548 = cljs.core.assoc.call(null,out__13486,cljs.core.first.call(null,in$__13485),cljs.core.second.call(null,in$__13485));
in$__13485 = G__13547;
out__13486 = G__13548;
continue;
}
} else
{return out__13486;
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
hash_map.cljs$lang$applyTo = (function (arglist__13550){
var keyvals = cljs.core.seq( arglist__13550 );;
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
{return cljs.core.reduce.call(null,(function (p1__13560_SHARP_,p2__13562_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13571 = p1__13560_SHARP_;

if(cljs.core.truth_(or__3548__auto____13571))
{return or__3548__auto____13571;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13562_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13580){
var maps = cljs.core.seq( arglist__13580 );;
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
{var merge_entry__13588 = (function (m,e){
var k__13586 = cljs.core.first.call(null,e);
var v__13587 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13586)))
{return cljs.core.assoc.call(null,m,k__13586,f.call(null,cljs.core.get.call(null,m,k__13586),v__13587));
} else
{return cljs.core.assoc.call(null,m,k__13586,v__13587);
}
});
var merge2__13591 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13588,(function (){var or__3548__auto____13589 = m1;

if(cljs.core.truth_(or__3548__auto____13589))
{return or__3548__auto____13589;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13591,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13654){
var f = cljs.core.first(arglist__13654);
var maps = cljs.core.rest(arglist__13654);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13660 = cljs.core.ObjMap.fromObject([],{});
var keys__13661 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13661))
{var key__13662 = cljs.core.first.call(null,keys__13661);
var entry__13663 = cljs.core.get.call(null,map,key__13662,"﷐'user/not-found");

{
var G__13704 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13663,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13660,key__13662,entry__13663):ret__13660);
var G__13705 = cljs.core.next.call(null,keys__13661);
ret__13660 = G__13704;
keys__13661 = G__13705;
continue;
}
} else
{return ret__13660;
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
var this__13714 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13746 = null;
var G__13746__13747 = (function (coll,v){
var this__13715 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13746__13748 = (function (coll,v,not_found){
var this__13716 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13716.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13746 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13746__13747.call(this,coll,v);
case  3 :
return G__13746__13748.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13746;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13751 = null;
var G__13751__13752 = (function (coll,k){
var this__13721 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13751__13753 = (function (coll,k,not_found){
var this__13722 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13751 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13751__13752.call(this,coll,k);
case  3 :
return G__13751__13753.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13751;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13723 = this;
return (new cljs.core.Set(this__13723.meta,cljs.core.assoc.call(null,this__13723.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13725 = this;
return cljs.core.keys.call(null,this__13725.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13732 = this;
return (new cljs.core.Set(this__13732.meta,cljs.core.dissoc.call(null,this__13732.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13733 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13734 = this;
var and__3546__auto____13735 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13735))
{var and__3546__auto____13737 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13737))
{return cljs.core.every_QMARK_.call(null,(function (p1__13655_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13655_SHARP_);
}),other);
} else
{return and__3546__auto____13737;
}
} else
{return and__3546__auto____13735;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13743 = this;
return (new cljs.core.Set(meta,this__13743.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13744 = this;
return this__13744.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13745 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13745.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13770 = cljs.core.seq.call(null,coll);
var out__13771 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13770))))
{{
var G__13773 = cljs.core.rest.call(null,in$__13770);
var G__13774 = cljs.core.conj.call(null,out__13771,cljs.core.first.call(null,in$__13770));
in$__13770 = G__13773;
out__13771 = G__13774;
continue;
}
} else
{return out__13771;
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
{var n__13777 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13783 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13783))
{var e__13784 = temp__3695__auto____13783;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13784));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13777,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13769_SHARP_){
var temp__3695__auto____13789 = cljs.core.find.call(null,smap,p1__13769_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13789))
{var e__13791 = temp__3695__auto____13789;

return cljs.core.second.call(null,e__13791);
} else
{return p1__13769_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13894 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13878,seen){
while(true){
var vec__13879__13880 = p__13878;
var f__13882 = cljs.core.nth.call(null,vec__13879__13880,0,null);
var xs__13883 = vec__13879__13880;

var temp__3698__auto____13888 = cljs.core.seq.call(null,xs__13883);

if(cljs.core.truth_(temp__3698__auto____13888))
{var s__13891 = temp__3698__auto____13888;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13882)))
{{
var G__13922 = cljs.core.rest.call(null,s__13891);
var G__13923 = seen;
p__13878 = G__13922;
seen = G__13923;
continue;
}
} else
{return cljs.core.cons.call(null,f__13882,step.call(null,cljs.core.rest.call(null,s__13891),cljs.core.conj.call(null,seen,f__13882)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13894.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13940 = cljs.core.Vector.fromArray([]);
var s__13941 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13941)))
{{
var G__13953 = cljs.core.conj.call(null,ret__13940,cljs.core.first.call(null,s__13941));
var G__13954 = cljs.core.next.call(null,s__13941);
ret__13940 = G__13953;
s__13941 = G__13954;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13940);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13963 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13963))
{return or__3548__auto____13963;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13964 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13964 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13964 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13985 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13985))
{return or__3548__auto____13985;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13986 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13986 > -1)))
{return cljs.core.subs.call(null,x,2,i__13986);
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
var map__14008 = cljs.core.ObjMap.fromObject([],{});
var ks__14009 = cljs.core.seq.call(null,keys);
var vs__14010 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14014 = ks__14009;

if(cljs.core.truth_(and__3546__auto____14014))
{return vs__14010;
} else
{return and__3546__auto____14014;
}
})()))
{{
var G__14019 = cljs.core.assoc.call(null,map__14008,cljs.core.first.call(null,ks__14009),cljs.core.first.call(null,vs__14010));
var G__14020 = cljs.core.next.call(null,ks__14009);
var G__14021 = cljs.core.next.call(null,vs__14010);
map__14008 = G__14019;
ks__14009 = G__14020;
vs__14010 = G__14021;
continue;
}
} else
{return map__14008;
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
var max_key__14036 = (function (k,x){
return x;
});
var max_key__14037 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__14038 = (function() { 
var G__14052__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13999_SHARP_,p2__14001_SHARP_){
return max_key.call(null,k,p1__13999_SHARP_,p2__14001_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__14052 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14052__delegate.call(this, k, x, y, more);
};
G__14052.cljs$lang$maxFixedArity = 3;
G__14052.cljs$lang$applyTo = (function (arglist__14054){
var k = cljs.core.first(arglist__14054);
var x = cljs.core.first(cljs.core.next(arglist__14054));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14054)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14054)));
return G__14052__delegate.call(this, k, x, y, more);
});
return G__14052;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__14036.call(this,k,x);
case  3 :
return max_key__14037.call(this,k,x,y);
default:
return max_key__14038.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__14038.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__14064 = (function (k,x){
return x;
});
var min_key__14065 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__14066 = (function() { 
var G__14068__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__14027_SHARP_,p2__14028_SHARP_){
return min_key.call(null,k,p1__14027_SHARP_,p2__14028_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__14068 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14068__delegate.call(this, k, x, y, more);
};
G__14068.cljs$lang$maxFixedArity = 3;
G__14068.cljs$lang$applyTo = (function (arglist__14071){
var k = cljs.core.first(arglist__14071);
var x = cljs.core.first(cljs.core.next(arglist__14071));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14071)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14071)));
return G__14068__delegate.call(this, k, x, y, more);
});
return G__14068;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__14064.call(this,k,x);
case  3 :
return min_key__14065.call(this,k,x,y);
default:
return min_key__14066.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__14066.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__14093 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__14094 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14089 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14089))
{var s__14092 = temp__3698__auto____14089;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__14092),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__14092)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__14093.call(this,n,step);
case  3 :
return partition_all__14094.call(this,n,step,coll);
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
var temp__3698__auto____14135 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14135))
{var s__14136 = temp__3698__auto____14135;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__14136))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__14136),take_while.call(null,pred,cljs.core.rest.call(null,s__14136)));
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
var this__14147 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__14150 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__14192 = null;
var G__14192__14193 = (function (rng,f){
var this__14153 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__14192__14194 = (function (rng,f,s){
var this__14156 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__14192 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__14192__14193.call(this,rng,f);
case  3 :
return G__14192__14194.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14192;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__14158 = this;
var comp__14163 = (cljs.core.truth_((this__14158.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__14163.call(null,this__14158.start,this__14158.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__14164 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__14164.end - this__14164.start) / this__14164.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__14165 = this;
return this__14165.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__14166 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__14166.meta,(this__14166.start + this__14166.step),this__14166.end,this__14166.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__14168 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__14171 = this;
return (new cljs.core.Range(meta,this__14171.start,this__14171.end,this__14171.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__14175 = this;
return this__14175.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14212 = null;
var G__14212__14213 = (function (rng,n){
var this__14177 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14177.start + (n * this__14177.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14181 = (this__14177.start > this__14177.end);

if(cljs.core.truth_(and__3546__auto____14181))
{return cljs.core._EQ_.call(null,this__14177.step,0);
} else
{return and__3546__auto____14181;
}
})()))
{return this__14177.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14212__14215 = (function (rng,n,not_found){
var this__14183 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14183.start + (n * this__14183.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14185 = (this__14183.start > this__14183.end);

if(cljs.core.truth_(and__3546__auto____14185))
{return cljs.core._EQ_.call(null,this__14183.step,0);
} else
{return and__3546__auto____14185;
}
})()))
{return this__14183.start;
} else
{return not_found;
}
}
});
G__14212 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14212__14213.call(this,rng,n);
case  3 :
return G__14212__14215.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14212;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__14186 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14186.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14238 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14239 = (function (end){
return range.call(null,0,end,1);
});
var range__14240 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14241 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14238.call(this);
case  1 :
return range__14239.call(this,start);
case  2 :
return range__14240.call(this,start,end);
case  3 :
return range__14241.call(this,start,end,step);
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
var temp__3698__auto____14255 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14255))
{var s__14256 = temp__3698__auto____14255;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14256),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14256)));
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
var temp__3698__auto____14268 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14268))
{var s__14269 = temp__3698__auto____14268;

var fst__14271 = cljs.core.first.call(null,s__14269);
var fv__14272 = f.call(null,fst__14271);
var run__14273 = cljs.core.cons.call(null,fst__14271,cljs.core.take_while.call(null,(function (p1__14257_SHARP_){
return cljs.core._EQ_.call(null,fv__14272,f.call(null,p1__14257_SHARP_));
}),cljs.core.next.call(null,s__14269)));

return cljs.core.cons.call(null,run__14273,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14273),s__14269))));
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
var reductions__14344 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14311 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14311))
{var s__14315 = temp__3695__auto____14311;

return reductions.call(null,f,cljs.core.first.call(null,s__14315),cljs.core.rest.call(null,s__14315));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14345 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14329 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14329))
{var s__14333 = temp__3698__auto____14329;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14333)),cljs.core.rest.call(null,s__14333));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14344.call(this,f,init);
case  3 :
return reductions__14345.call(this,f,init,coll);
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
var juxt__14453 = (function (f){
return (function() {
var G__14460 = null;
var G__14460__14461 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14460__14462 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14460__14463 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14460__14464 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14460__14465 = (function() { 
var G__14472__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14472 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14472__delegate.call(this, x, y, z, args);
};
G__14472.cljs$lang$maxFixedArity = 3;
G__14472.cljs$lang$applyTo = (function (arglist__14475){
var x = cljs.core.first(arglist__14475);
var y = cljs.core.first(cljs.core.next(arglist__14475));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14475)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14475)));
return G__14472__delegate.call(this, x, y, z, args);
});
return G__14472;
})()
;
G__14460 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14460__14461.call(this);
case  1 :
return G__14460__14462.call(this,x);
case  2 :
return G__14460__14463.call(this,x,y);
case  3 :
return G__14460__14464.call(this,x,y,z);
default:
return G__14460__14465.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14460.cljs$lang$maxFixedArity = 3;
G__14460.cljs$lang$applyTo = G__14460__14465.cljs$lang$applyTo;
return G__14460;
})()
});
var juxt__14455 = (function (f,g){
return (function() {
var G__14484 = null;
var G__14484__14485 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14484__14486 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14484__14487 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14484__14488 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14484__14489 = (function() { 
var G__14494__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14494 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14494__delegate.call(this, x, y, z, args);
};
G__14494.cljs$lang$maxFixedArity = 3;
G__14494.cljs$lang$applyTo = (function (arglist__14495){
var x = cljs.core.first(arglist__14495);
var y = cljs.core.first(cljs.core.next(arglist__14495));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14495)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14495)));
return G__14494__delegate.call(this, x, y, z, args);
});
return G__14494;
})()
;
G__14484 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14484__14485.call(this);
case  1 :
return G__14484__14486.call(this,x);
case  2 :
return G__14484__14487.call(this,x,y);
case  3 :
return G__14484__14488.call(this,x,y,z);
default:
return G__14484__14489.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14484.cljs$lang$maxFixedArity = 3;
G__14484.cljs$lang$applyTo = G__14484__14489.cljs$lang$applyTo;
return G__14484;
})()
});
var juxt__14456 = (function (f,g,h){
return (function() {
var G__14498 = null;
var G__14498__14499 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14498__14500 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14498__14501 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14498__14502 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14498__14503 = (function() { 
var G__14509__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14509 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14509__delegate.call(this, x, y, z, args);
};
G__14509.cljs$lang$maxFixedArity = 3;
G__14509.cljs$lang$applyTo = (function (arglist__14535){
var x = cljs.core.first(arglist__14535);
var y = cljs.core.first(cljs.core.next(arglist__14535));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14535)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14535)));
return G__14509__delegate.call(this, x, y, z, args);
});
return G__14509;
})()
;
G__14498 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14498__14499.call(this);
case  1 :
return G__14498__14500.call(this,x);
case  2 :
return G__14498__14501.call(this,x,y);
case  3 :
return G__14498__14502.call(this,x,y,z);
default:
return G__14498__14503.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14498.cljs$lang$maxFixedArity = 3;
G__14498.cljs$lang$applyTo = G__14498__14503.cljs$lang$applyTo;
return G__14498;
})()
});
var juxt__14457 = (function() { 
var G__14538__delegate = function (f,g,h,fs){
var fs__14434 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14541 = null;
var G__14541__14543 = (function (){
return cljs.core.reduce.call(null,(function (p1__14282_SHARP_,p2__14284_SHARP_){
return cljs.core.conj.call(null,p1__14282_SHARP_,p2__14284_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14434);
});
var G__14541__14544 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14285_SHARP_,p2__14286_SHARP_){
return cljs.core.conj.call(null,p1__14285_SHARP_,p2__14286_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14434);
});
var G__14541__14545 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14287_SHARP_,p2__14288_SHARP_){
return cljs.core.conj.call(null,p1__14287_SHARP_,p2__14288_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14434);
});
var G__14541__14546 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14304_SHARP_,p2__14306_SHARP_){
return cljs.core.conj.call(null,p1__14304_SHARP_,p2__14306_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14434);
});
var G__14541__14547 = (function() { 
var G__14553__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14307_SHARP_,p2__14308_SHARP_){
return cljs.core.conj.call(null,p1__14307_SHARP_,cljs.core.apply.call(null,p2__14308_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14434);
};
var G__14553 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14553__delegate.call(this, x, y, z, args);
};
G__14553.cljs$lang$maxFixedArity = 3;
G__14553.cljs$lang$applyTo = (function (arglist__14555){
var x = cljs.core.first(arglist__14555);
var y = cljs.core.first(cljs.core.next(arglist__14555));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14555)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14555)));
return G__14553__delegate.call(this, x, y, z, args);
});
return G__14553;
})()
;
G__14541 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14541__14543.call(this);
case  1 :
return G__14541__14544.call(this,x);
case  2 :
return G__14541__14545.call(this,x,y);
case  3 :
return G__14541__14546.call(this,x,y,z);
default:
return G__14541__14547.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14541.cljs$lang$maxFixedArity = 3;
G__14541.cljs$lang$applyTo = G__14541__14547.cljs$lang$applyTo;
return G__14541;
})()
};
var G__14538 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14538__delegate.call(this, f, g, h, fs);
};
G__14538.cljs$lang$maxFixedArity = 3;
G__14538.cljs$lang$applyTo = (function (arglist__14556){
var f = cljs.core.first(arglist__14556);
var g = cljs.core.first(cljs.core.next(arglist__14556));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14556)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14556)));
return G__14538__delegate.call(this, f, g, h, fs);
});
return G__14538;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14453.call(this,f);
case  2 :
return juxt__14455.call(this,f,g);
case  3 :
return juxt__14456.call(this,f,g,h);
default:
return juxt__14457.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14457.cljs$lang$applyTo;
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
var dorun__14562 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14565 = cljs.core.next.call(null,coll);
coll = G__14565;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14563 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14561 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14561))
{return (n > 0);
} else
{return and__3546__auto____14561;
}
})()))
{{
var G__14566 = (n - 1);
var G__14567 = cljs.core.next.call(null,coll);
n = G__14566;
coll = G__14567;
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
return dorun__14562.call(this,n);
case  2 :
return dorun__14563.call(this,n,coll);
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
var doall__14569 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14570 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14569.call(this,n);
case  2 :
return doall__14570.call(this,n,coll);
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
var matches__14589 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14589),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14589),1)))
{return cljs.core.first.call(null,matches__14589);
} else
{return cljs.core.vec.call(null,matches__14589);
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
var matches__14605 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14605)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14605),1)))
{return cljs.core.first.call(null,matches__14605);
} else
{return cljs.core.vec.call(null,matches__14605);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14608 = cljs.core.re_find.call(null,re,s);
var match_idx__14609 = s.search(re);
var match_str__14610 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14608))?cljs.core.first.call(null,match_data__14608):match_data__14608);
var post_match__14612 = cljs.core.subs.call(null,s,(match_idx__14609 + cljs.core.count.call(null,match_str__14610)));

if(cljs.core.truth_(match_data__14608))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14608,re_seq.call(null,re,post_match__14612));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14618_SHARP_){
return print_one.call(null,p1__14618_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14644 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14644))
{var and__3546__auto____14653 = (function (){var x__445__auto____14647 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14648 = x__445__auto____14647;

if(cljs.core.truth_(and__3546__auto____14648))
{var and__3546__auto____14650 = x__445__auto____14647.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14650))
{return cljs.core.not.call(null,x__445__auto____14647.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14650;
}
} else
{return and__3546__auto____14648;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14647);
}
})();

if(cljs.core.truth_(and__3546__auto____14653))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14653;
}
} else
{return and__3546__auto____14644;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14656 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14657 = x__445__auto____14656;

if(cljs.core.truth_(and__3546__auto____14657))
{var and__3546__auto____14660 = x__445__auto____14656.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14660))
{return cljs.core.not.call(null,x__445__auto____14656.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14660;
}
} else
{return and__3546__auto____14657;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14656);
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
var first_obj__14666 = cljs.core.first.call(null,objs);
var sb__14668 = (new goog.string.StringBuffer());

var G__14669__14670 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14669__14670))
{var obj__14672 = cljs.core.first.call(null,G__14669__14670);
var G__14669__14673 = G__14669__14670;

while(true){
if(cljs.core.truth_((obj__14672 === first_obj__14666)))
{} else
{sb__14668.append(" ");
}
var G__14676__14685 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14672,opts));

if(cljs.core.truth_(G__14676__14685))
{var string__14686 = cljs.core.first.call(null,G__14676__14685);
var G__14676__14698 = G__14676__14685;

while(true){
sb__14668.append(string__14686);
var temp__3698__auto____14703 = cljs.core.next.call(null,G__14676__14698);

if(cljs.core.truth_(temp__3698__auto____14703))
{var G__14676__14705 = temp__3698__auto____14703;

{
var G__14712 = cljs.core.first.call(null,G__14676__14705);
var G__14713 = G__14676__14705;
string__14686 = G__14712;
G__14676__14698 = G__14713;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14707 = cljs.core.next.call(null,G__14669__14673);

if(cljs.core.truth_(temp__3698__auto____14707))
{var G__14669__14708 = temp__3698__auto____14707;

{
var G__14717 = cljs.core.first.call(null,G__14669__14708);
var G__14719 = G__14669__14708;
obj__14672 = G__14717;
G__14669__14673 = G__14719;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14668);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14723 = cljs.core.first.call(null,objs);

var G__14725__14726 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14725__14726))
{var obj__14729 = cljs.core.first.call(null,G__14725__14726);
var G__14725__14730 = G__14725__14726;

while(true){
if(cljs.core.truth_((obj__14729 === first_obj__14723)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14732__14734 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14729,opts));

if(cljs.core.truth_(G__14732__14734))
{var string__14735 = cljs.core.first.call(null,G__14732__14734);
var G__14732__14736 = G__14732__14734;

while(true){
cljs.core.string_print.call(null,string__14735);
var temp__3698__auto____14738 = cljs.core.next.call(null,G__14732__14736);

if(cljs.core.truth_(temp__3698__auto____14738))
{var G__14732__14739 = temp__3698__auto____14738;

{
var G__14747 = cljs.core.first.call(null,G__14732__14739);
var G__14748 = G__14732__14739;
string__14735 = G__14747;
G__14732__14736 = G__14748;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14742 = cljs.core.next.call(null,G__14725__14730);

if(cljs.core.truth_(temp__3698__auto____14742))
{var G__14725__14744 = temp__3698__auto____14742;

{
var G__14752 = cljs.core.first.call(null,G__14725__14744);
var G__14754 = G__14725__14744;
obj__14729 = G__14752;
G__14725__14730 = G__14754;
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
pr_str.cljs$lang$applyTo = (function (arglist__14775){
var objs = cljs.core.seq( arglist__14775 );;
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
pr.cljs$lang$applyTo = (function (arglist__14782){
var objs = cljs.core.seq( arglist__14782 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14789){
var objs = cljs.core.seq( arglist__14789 );;
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
println.cljs$lang$applyTo = (function (arglist__14796){
var objs = cljs.core.seq( arglist__14796 );;
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
prn.cljs$lang$applyTo = (function (arglist__14806){
var objs = cljs.core.seq( arglist__14806 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14809 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14809,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14816 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14816))
{var nspc__14817 = temp__3698__auto____14816;

return cljs.core.str.call(null,nspc__14817,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14819 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14819))
{var nspc__14820 = temp__3698__auto____14819;

return cljs.core.str.call(null,nspc__14820,"/");
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
var pr_pair__14826 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14826,"{",", ","}",opts,coll);
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
var this__14842 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14843 = this;
var G__14844__14845 = cljs.core.seq.call(null,this__14843.watches);

if(cljs.core.truth_(G__14844__14845))
{var G__14847__14849 = cljs.core.first.call(null,G__14844__14845);
var vec__14848__14850 = G__14847__14849;
var key__14851 = cljs.core.nth.call(null,vec__14848__14850,0,null);
var f__14852 = cljs.core.nth.call(null,vec__14848__14850,1,null);
var G__14844__14853 = G__14844__14845;

var G__14847__14855 = G__14847__14849;
var G__14844__14858 = G__14844__14853;

while(true){
var vec__14859__14860 = G__14847__14855;
var key__14861 = cljs.core.nth.call(null,vec__14859__14860,0,null);
var f__14862 = cljs.core.nth.call(null,vec__14859__14860,1,null);
var G__14844__14863 = G__14844__14858;

f__14862.call(null,key__14861,this$,oldval,newval);
var temp__3698__auto____14864 = cljs.core.next.call(null,G__14844__14863);

if(cljs.core.truth_(temp__3698__auto____14864))
{var G__14844__14865 = temp__3698__auto____14864;

{
var G__14881 = cljs.core.first.call(null,G__14844__14865);
var G__14882 = G__14844__14865;
G__14847__14855 = G__14881;
G__14844__14858 = G__14882;
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
var this__14870 = this;
return this$.watches = cljs.core.assoc.call(null,this__14870.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14871 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14871.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14872 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14872.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14873 = this;
return this__14873.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14874 = this;
return this__14874.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14878 = this;
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
var atom__14889 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14890 = (function() { 
var G__14893__delegate = function (x,p__14883){
var map__14884__14885 = p__14883;
var map__14884__14886 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14884__14885))?cljs.core.apply.call(null,cljs.core.hash_map,map__14884__14885):map__14884__14885);
var validator__14887 = cljs.core.get.call(null,map__14884__14886,"﷐'validator");
var meta__14888 = cljs.core.get.call(null,map__14884__14886,"﷐'meta");

return (new cljs.core.Atom(x,meta__14888,validator__14887,null));
};
var G__14893 = function (x,var_args){
var p__14883 = null;
if (goog.isDef(var_args)) {
  p__14883 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14893__delegate.call(this, x, p__14883);
};
G__14893.cljs$lang$maxFixedArity = 1;
G__14893.cljs$lang$applyTo = (function (arglist__14897){
var x = cljs.core.first(arglist__14897);
var p__14883 = cljs.core.rest(arglist__14897);
return G__14893__delegate.call(this, x, p__14883);
});
return G__14893;
})()
;
atom = function(x,var_args){
var p__14883 = var_args;
switch(arguments.length){
case  1 :
return atom__14889.call(this,x);
default:
return atom__14890.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14890.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14913 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14913))
{var validate__14914 = temp__3698__auto____14913;

if(cljs.core.truth_(validate__14914.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14917 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14917,new_value);
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
var swap_BANG___14982 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14983 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14984 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14985 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14986 = (function() { 
var G__14997__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14997 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14997__delegate.call(this, a, f, x, y, z, more);
};
G__14997.cljs$lang$maxFixedArity = 5;
G__14997.cljs$lang$applyTo = (function (arglist__14998){
var a = cljs.core.first(arglist__14998);
var f = cljs.core.first(cljs.core.next(arglist__14998));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14998)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14998))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14998)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14998)))));
return G__14997__delegate.call(this, a, f, x, y, z, more);
});
return G__14997;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14982.call(this,a,f);
case  3 :
return swap_BANG___14983.call(this,a,f,x);
case  4 :
return swap_BANG___14984.call(this,a,f,x,y);
case  5 :
return swap_BANG___14985.call(this,a,f,x,y,z);
default:
return swap_BANG___14986.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14986.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15020){
var iref = cljs.core.first(arglist__15020);
var f = cljs.core.first(cljs.core.next(arglist__15020));
var args = cljs.core.rest(cljs.core.next(arglist__15020));
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
var gensym__15037 = (function (){
return gensym.call(null,"G__");
});
var gensym__15038 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__15037.call(this);
case  1 :
return gensym__15038.call(this,prefix_string);
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
var this__15045 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__15045.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15050 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__15050.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__15050.state,this__15050.f);
}
return cljs.core.deref.call(null,this__15050.state);
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
delay.cljs$lang$applyTo = (function (arglist__15068){
var body = cljs.core.seq( arglist__15068 );;
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
var map__15077__15078 = options;
var map__15077__15079 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15077__15078))?cljs.core.apply.call(null,cljs.core.hash_map,map__15077__15078):map__15077__15078);
var keywordize_keys__15080 = cljs.core.get.call(null,map__15077__15079,"﷐'keywordize-keys");
var keyfn__15081 = (cljs.core.truth_(keywordize_keys__15080)?cljs.core.keyword:cljs.core.str);
var f__15090 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15088 = (function iter__15082(s__15083){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15083__15085 = s__15083;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15083__15085)))
{var k__15086 = cljs.core.first.call(null,s__15083__15085);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15081.call(null,k__15086),thisfn.call(null,(x[k__15086]))]),iter__15082.call(null,cljs.core.rest.call(null,s__15083__15085)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15088.call(null,cljs.core.js_keys.call(null,x));
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

return f__15090.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15101){
var x = cljs.core.first(arglist__15101);
var options = cljs.core.rest(arglist__15101);
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
var mem__15104 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15115__delegate = function (args){
var temp__3695__auto____15106 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15104),args);

if(cljs.core.truth_(temp__3695__auto____15106))
{var v__15107 = temp__3695__auto____15106;

return v__15107;
} else
{var ret__15108 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15104,cljs.core.assoc,args,ret__15108);
return ret__15108;
}
};
var G__15115 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15115__delegate.call(this, args);
};
G__15115.cljs$lang$maxFixedArity = 0;
G__15115.cljs$lang$applyTo = (function (arglist__15117){
var args = cljs.core.seq( arglist__15117 );;
return G__15115__delegate.call(this, args);
});
return G__15115;
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
var trampoline__15122 = (function (f){
while(true){
var ret__15119 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15119)))
{{
var G__15127 = ret__15119;
f = G__15127;
continue;
}
} else
{return ret__15119;
}
break;
}
});
var trampoline__15123 = (function() { 
var G__15128__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15128 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15128__delegate.call(this, f, args);
};
G__15128.cljs$lang$maxFixedArity = 1;
G__15128.cljs$lang$applyTo = (function (arglist__15129){
var f = cljs.core.first(arglist__15129);
var args = cljs.core.rest(arglist__15129);
return G__15128__delegate.call(this, f, args);
});
return G__15128;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15122.call(this,f);
default:
return trampoline__15123.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15123.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15140 = (function (){
return rand.call(null,1);
});
var rand__15141 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15140.call(this);
case  1 :
return rand__15141.call(this,n);
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
var k__15149 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15149,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15149,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15271 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15272 = (function (h,child,parent){
var or__3548__auto____15258 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15258))
{return or__3548__auto____15258;
} else
{var or__3548__auto____15261 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15261))
{return or__3548__auto____15261;
} else
{var and__3546__auto____15262 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15262))
{var and__3546__auto____15263 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15263))
{var and__3546__auto____15264 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15264))
{var ret__15265 = true;
var i__15266 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15267 = cljs.core.not.call(null,ret__15265);

if(cljs.core.truth_(or__3548__auto____15267))
{return or__3548__auto____15267;
} else
{return cljs.core._EQ_.call(null,i__15266,cljs.core.count.call(null,parent));
}
})()))
{return ret__15265;
} else
{{
var G__15274 = isa_QMARK_.call(null,h,child.call(null,i__15266),parent.call(null,i__15266));
var G__15275 = (i__15266 + 1);
ret__15265 = G__15274;
i__15266 = G__15275;
continue;
}
}
break;
}
} else
{return and__3546__auto____15264;
}
} else
{return and__3546__auto____15263;
}
} else
{return and__3546__auto____15262;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15271.call(this,h,child);
case  3 :
return isa_QMARK___15272.call(this,h,child,parent);
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
var parents__15281 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15282 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15281.call(this,h);
case  2 :
return parents__15282.call(this,h,tag);
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
var ancestors__15290 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15291 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15290.call(this,h);
case  2 :
return ancestors__15291.call(this,h,tag);
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
var descendants__15297 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15298 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15297.call(this,h);
case  2 :
return descendants__15298.call(this,h,tag);
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
var derive__15316 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15317 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15311 = "﷐'parents".call(null,h);
var td__15312 = "﷐'descendants".call(null,h);
var ta__15313 = "﷐'ancestors".call(null,h);
var tf__15314 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15315 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15311.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15313.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15313.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15311,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15314.call(null,"﷐'ancestors".call(null,h),tag,td__15312,parent,ta__15313),"﷐'descendants":tf__15314.call(null,"﷐'descendants".call(null,h),parent,ta__15313,tag,td__15312)});
})());

if(cljs.core.truth_(or__3548__auto____15315))
{return or__3548__auto____15315;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15316.call(this,h,tag);
case  3 :
return derive__15317.call(this,h,tag,parent);
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
var underive__15352 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15353 = (function (h,tag,parent){
var parentMap__15336 = "﷐'parents".call(null,h);
var childsParents__15337 = (cljs.core.truth_(parentMap__15336.call(null,tag))?cljs.core.disj.call(null,parentMap__15336.call(null,tag),parent):cljs.core.set([]));
var newParents__15339 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15337))?cljs.core.assoc.call(null,parentMap__15336,tag,childsParents__15337):cljs.core.dissoc.call(null,parentMap__15336,tag));
var deriv_seq__15341 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15305_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15305_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15305_SHARP_),cljs.core.second.call(null,p1__15305_SHARP_)));
}),cljs.core.seq.call(null,newParents__15339)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15336.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15306_SHARP_,p2__15307_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15306_SHARP_,p2__15307_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15341));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15352.call(this,h,tag);
case  3 :
return underive__15353.call(this,h,tag,parent);
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
var xprefs__15363 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15365 = (cljs.core.truth_((function (){var and__3546__auto____15364 = xprefs__15363;

if(cljs.core.truth_(and__3546__auto____15364))
{return xprefs__15363.call(null,y);
} else
{return and__3546__auto____15364;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15365))
{return or__3548__auto____15365;
} else
{var or__3548__auto____15368 = (function (){var ps__15366 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15366) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15366),prefer_table)))
{} else
{}
{
var G__15377 = cljs.core.rest.call(null,ps__15366);
ps__15366 = G__15377;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15368))
{return or__3548__auto____15368;
} else
{var or__3548__auto____15373 = (function (){var ps__15371 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15371) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15371),y,prefer_table)))
{} else
{}
{
var G__15378 = cljs.core.rest.call(null,ps__15371);
ps__15371 = G__15378;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15373))
{return or__3548__auto____15373;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15380 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15380))
{return or__3548__auto____15380;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15398 = cljs.core.reduce.call(null,(function (be,p__15384){
var vec__15385__15386 = p__15384;
var k__15387 = cljs.core.nth.call(null,vec__15385__15386,0,null);
var ___15388 = cljs.core.nth.call(null,vec__15385__15386,1,null);
var e__15389 = vec__15385__15386;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15387)))
{var be2__15394 = (cljs.core.truth_((function (){var or__3548__auto____15392 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15392))
{return or__3548__auto____15392;
} else
{return cljs.core.dominates.call(null,k__15387,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15389:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15394),k__15387,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15387," and ",cljs.core.first.call(null,be2__15394),", and neither is preferred")));
}
return be2__15394;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15398))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15398));
return cljs.core.second.call(null,best_entry__15398);
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
if(cljs.core.truth_((function (){var and__3546__auto____15408 = mf;

if(cljs.core.truth_(and__3546__auto____15408))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15408;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15409 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15409))
{return or__3548__auto____15409;
} else
{var or__3548__auto____15411 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15411))
{return or__3548__auto____15411;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15414 = mf;

if(cljs.core.truth_(and__3546__auto____15414))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15414;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15419 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15419))
{return or__3548__auto____15419;
} else
{var or__3548__auto____15420 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15420))
{return or__3548__auto____15420;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15423 = mf;

if(cljs.core.truth_(and__3546__auto____15423))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15423;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15427 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15427))
{return or__3548__auto____15427;
} else
{var or__3548__auto____15429 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15429))
{return or__3548__auto____15429;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15430 = mf;

if(cljs.core.truth_(and__3546__auto____15430))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15430;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15432 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15432))
{return or__3548__auto____15432;
} else
{var or__3548__auto____15434 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15434))
{return or__3548__auto____15434;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15508 = mf;

if(cljs.core.truth_(and__3546__auto____15508))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15508;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15512 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15512))
{return or__3548__auto____15512;
} else
{var or__3548__auto____15513 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15513))
{return or__3548__auto____15513;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15516 = mf;

if(cljs.core.truth_(and__3546__auto____15516))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15516;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15519 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15519))
{return or__3548__auto____15519;
} else
{var or__3548__auto____15520 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15520))
{return or__3548__auto____15520;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15521 = mf;

if(cljs.core.truth_(and__3546__auto____15521))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15521;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15522 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15522))
{return or__3548__auto____15522;
} else
{var or__3548__auto____15525 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15525))
{return or__3548__auto____15525;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15527 = mf;

if(cljs.core.truth_(and__3546__auto____15527))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15527;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15530 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15530))
{return or__3548__auto____15530;
} else
{var or__3548__auto____15532 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15532))
{return or__3548__auto____15532;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15543 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15545 = cljs.core._get_method.call(null,mf,dispatch_val__15543);

if(cljs.core.truth_(target_fn__15545))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15543)));
}
return cljs.core.apply.call(null,target_fn__15545,args);
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
var this__15549 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15550 = this;
cljs.core.swap_BANG_.call(null,this__15550.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15550.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15550.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15550.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15551 = this;
cljs.core.swap_BANG_.call(null,this__15551.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15551.method_cache,this__15551.method_table,this__15551.cached_hierarchy,this__15551.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15552 = this;
cljs.core.swap_BANG_.call(null,this__15552.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15552.method_cache,this__15552.method_table,this__15552.cached_hierarchy,this__15552.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15554 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15554.cached_hierarchy),cljs.core.deref.call(null,this__15554.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15554.method_cache,this__15554.method_table,this__15554.cached_hierarchy,this__15554.hierarchy);
}
var temp__3695__auto____15555 = cljs.core.deref.call(null,this__15554.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15555))
{var target_fn__15556 = temp__3695__auto____15555;

return target_fn__15556;
} else
{var temp__3695__auto____15557 = cljs.core.find_and_cache_best_method.call(null,this__15554.name,dispatch_val,this__15554.hierarchy,this__15554.method_table,this__15554.prefer_table,this__15554.method_cache,this__15554.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15557))
{var target_fn__15558 = temp__3695__auto____15557;

return target_fn__15558;
} else
{return cljs.core.deref.call(null,this__15554.method_table).call(null,this__15554.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15559 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15559.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15559.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15559.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15559.method_cache,this__15559.method_table,this__15559.cached_hierarchy,this__15559.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15564 = this;
return cljs.core.deref.call(null,this__15564.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15565 = this;
return cljs.core.deref.call(null,this__15565.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15566 = this;
return cljs.core.do_dispatch.call(null,mf,this__15566.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15597__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15597 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15597__delegate.call(this, _, args);
};
G__15597.cljs$lang$maxFixedArity = 1;
G__15597.cljs$lang$applyTo = (function (arglist__15599){
var _ = cljs.core.first(arglist__15599);
var args = cljs.core.rest(arglist__15599);
return G__15597__delegate.call(this, _, args);
});
return G__15597;
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
