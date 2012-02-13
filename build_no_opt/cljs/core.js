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
var or__3548__auto____7371 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7371))
{return or__3548__auto____7371;
} else
{var or__3548__auto____7373 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7373))
{return or__3548__auto____7373;
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
var _invoke__7684 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7454 = this$;

if(cljs.core.truth_(and__3546__auto____7454))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7454;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7463 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7463))
{return or__3548__auto____7463;
} else
{var or__3548__auto____7465 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7465))
{return or__3548__auto____7465;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7685 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7469 = this$;

if(cljs.core.truth_(and__3546__auto____7469))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7469;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7474 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7474))
{return or__3548__auto____7474;
} else
{var or__3548__auto____7476 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7476))
{return or__3548__auto____7476;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7686 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7479 = this$;

if(cljs.core.truth_(and__3546__auto____7479))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7479;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7483 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7483))
{return or__3548__auto____7483;
} else
{var or__3548__auto____7487 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7487))
{return or__3548__auto____7487;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7687 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7491 = this$;

if(cljs.core.truth_(and__3546__auto____7491))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7491;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7497 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7497))
{return or__3548__auto____7497;
} else
{var or__3548__auto____7502 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7502))
{return or__3548__auto____7502;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7688 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7505 = this$;

if(cljs.core.truth_(and__3546__auto____7505))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7505;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7510 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7510))
{return or__3548__auto____7510;
} else
{var or__3548__auto____7514 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7514))
{return or__3548__auto____7514;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7689 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7518 = this$;

if(cljs.core.truth_(and__3546__auto____7518))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7518;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7535 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7535))
{return or__3548__auto____7535;
} else
{var or__3548__auto____7539 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7539))
{return or__3548__auto____7539;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7690 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7542 = this$;

if(cljs.core.truth_(and__3546__auto____7542))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7542;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7545 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7545))
{return or__3548__auto____7545;
} else
{var or__3548__auto____7548 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7548))
{return or__3548__auto____7548;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7691 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7551 = this$;

if(cljs.core.truth_(and__3546__auto____7551))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7551;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7554 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7554))
{return or__3548__auto____7554;
} else
{var or__3548__auto____7556 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7556))
{return or__3548__auto____7556;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7692 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7559 = this$;

if(cljs.core.truth_(and__3546__auto____7559))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7559;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7564 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7564))
{return or__3548__auto____7564;
} else
{var or__3548__auto____7566 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7566))
{return or__3548__auto____7566;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7693 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7570 = this$;

if(cljs.core.truth_(and__3546__auto____7570))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7570;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7574 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7574))
{return or__3548__auto____7574;
} else
{var or__3548__auto____7575 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7575))
{return or__3548__auto____7575;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7694 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7579 = this$;

if(cljs.core.truth_(and__3546__auto____7579))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7579;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7582 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7582))
{return or__3548__auto____7582;
} else
{var or__3548__auto____7584 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7584))
{return or__3548__auto____7584;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7695 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7587 = this$;

if(cljs.core.truth_(and__3546__auto____7587))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7587;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7589 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7589))
{return or__3548__auto____7589;
} else
{var or__3548__auto____7592 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7592))
{return or__3548__auto____7592;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7696 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7595 = this$;

if(cljs.core.truth_(and__3546__auto____7595))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7595;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7597 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7597))
{return or__3548__auto____7597;
} else
{var or__3548__auto____7624 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7624))
{return or__3548__auto____7624;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7697 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7628 = this$;

if(cljs.core.truth_(and__3546__auto____7628))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7628;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7631 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7631))
{return or__3548__auto____7631;
} else
{var or__3548__auto____7634 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7634))
{return or__3548__auto____7634;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7698 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7638 = this$;

if(cljs.core.truth_(and__3546__auto____7638))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7638;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7639 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7639))
{return or__3548__auto____7639;
} else
{var or__3548__auto____7644 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7644))
{return or__3548__auto____7644;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7699 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7666 = this$;

if(cljs.core.truth_(and__3546__auto____7666))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7666;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7667 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7667))
{return or__3548__auto____7667;
} else
{var or__3548__auto____7668 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7668))
{return or__3548__auto____7668;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7700 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7669 = this$;

if(cljs.core.truth_(and__3546__auto____7669))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7669;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7670 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7670))
{return or__3548__auto____7670;
} else
{var or__3548__auto____7671 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7671))
{return or__3548__auto____7671;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7701 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7672 = this$;

if(cljs.core.truth_(and__3546__auto____7672))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7672;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7673 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7673))
{return or__3548__auto____7673;
} else
{var or__3548__auto____7674 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7674))
{return or__3548__auto____7674;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7702 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7675 = this$;

if(cljs.core.truth_(and__3546__auto____7675))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7675;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7676 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7676))
{return or__3548__auto____7676;
} else
{var or__3548__auto____7677 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7677))
{return or__3548__auto____7677;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7703 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7678 = this$;

if(cljs.core.truth_(and__3546__auto____7678))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7678;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7679 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7679))
{return or__3548__auto____7679;
} else
{var or__3548__auto____7680 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7680))
{return or__3548__auto____7680;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7704 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7681 = this$;

if(cljs.core.truth_(and__3546__auto____7681))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7681;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7682 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7682))
{return or__3548__auto____7682;
} else
{var or__3548__auto____7683 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7683))
{return or__3548__auto____7683;
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
return _invoke__7684.call(this,this$);
case  2 :
return _invoke__7685.call(this,this$,a);
case  3 :
return _invoke__7686.call(this,this$,a,b);
case  4 :
return _invoke__7687.call(this,this$,a,b,c);
case  5 :
return _invoke__7688.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7689.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7690.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7691.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7692.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7693.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7694.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7695.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7696.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7697.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7698.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7699.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7700.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7701.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7702.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7703.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7704.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7780 = coll;

if(cljs.core.truth_(and__3546__auto____7780))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7780;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7781 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7781))
{return or__3548__auto____7781;
} else
{var or__3548__auto____7782 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7782))
{return or__3548__auto____7782;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7783 = coll;

if(cljs.core.truth_(and__3546__auto____7783))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7783;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7784 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7784))
{return or__3548__auto____7784;
} else
{var or__3548__auto____7785 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7785))
{return or__3548__auto____7785;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7795 = coll;

if(cljs.core.truth_(and__3546__auto____7795))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7795;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7797 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7797))
{return or__3548__auto____7797;
} else
{var or__3548__auto____7799 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7799))
{return or__3548__auto____7799;
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
var _nth__7812 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7802 = coll;

if(cljs.core.truth_(and__3546__auto____7802))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7802;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7805 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7805))
{return or__3548__auto____7805;
} else
{var or__3548__auto____7806 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7806))
{return or__3548__auto____7806;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7813 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7807 = coll;

if(cljs.core.truth_(and__3546__auto____7807))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7807;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7808 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7808))
{return or__3548__auto____7808;
} else
{var or__3548__auto____7810 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7810))
{return or__3548__auto____7810;
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
return _nth__7812.call(this,coll,n);
case  3 :
return _nth__7813.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7822 = coll;

if(cljs.core.truth_(and__3546__auto____7822))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7822;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7826 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7826))
{return or__3548__auto____7826;
} else
{var or__3548__auto____7827 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7827))
{return or__3548__auto____7827;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7828 = coll;

if(cljs.core.truth_(and__3546__auto____7828))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7828;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7829 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7829))
{return or__3548__auto____7829;
} else
{var or__3548__auto____7830 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7830))
{return or__3548__auto____7830;
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
if(cljs.core.truth_((function (){var and__3546__auto____7878 = o;

if(cljs.core.truth_(and__3546__auto____7878))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7878;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7884 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7884))
{return or__3548__auto____7884;
} else
{var or__3548__auto____7888 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7888))
{return or__3548__auto____7888;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7896 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7890 = o;

if(cljs.core.truth_(and__3546__auto____7890))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7890;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7892 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7892))
{return or__3548__auto____7892;
} else
{var or__3548__auto____7893 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7893))
{return or__3548__auto____7893;
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
if(cljs.core.truth_((function (){var and__3546__auto____7920 = coll;

if(cljs.core.truth_(and__3546__auto____7920))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7920;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7923 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7923))
{return or__3548__auto____7923;
} else
{var or__3548__auto____7924 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7924))
{return or__3548__auto____7924;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7928 = coll;

if(cljs.core.truth_(and__3546__auto____7928))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7928;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7931 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7931))
{return or__3548__auto____7931;
} else
{var or__3548__auto____7933 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7933))
{return or__3548__auto____7933;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7942 = coll;

if(cljs.core.truth_(and__3546__auto____7942))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7942;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7945 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7945))
{return or__3548__auto____7945;
} else
{var or__3548__auto____7948 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7948))
{return or__3548__auto____7948;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7960 = coll;

if(cljs.core.truth_(and__3546__auto____7960))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7960;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7964 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7964))
{return or__3548__auto____7964;
} else
{var or__3548__auto____7965 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7965))
{return or__3548__auto____7965;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7969 = coll;

if(cljs.core.truth_(and__3546__auto____7969))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7969;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7972 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7972))
{return or__3548__auto____7972;
} else
{var or__3548__auto____7974 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7974))
{return or__3548__auto____7974;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7978 = coll;

if(cljs.core.truth_(and__3546__auto____7978))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7978;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7982 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7982))
{return or__3548__auto____7982;
} else
{var or__3548__auto____7985 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7985))
{return or__3548__auto____7985;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7996 = coll;

if(cljs.core.truth_(and__3546__auto____7996))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7996;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7998 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
} else
{var or__3548__auto____8000 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8000))
{return or__3548__auto____8000;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8033 = o;

if(cljs.core.truth_(and__3546__auto____8033))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8033;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8037 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8037))
{return or__3548__auto____8037;
} else
{var or__3548__auto____8039 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8039))
{return or__3548__auto____8039;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8046 = o;

if(cljs.core.truth_(and__3546__auto____8046))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8046;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8051 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8051))
{return or__3548__auto____8051;
} else
{var or__3548__auto____8052 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8052))
{return or__3548__auto____8052;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8062 = o;

if(cljs.core.truth_(and__3546__auto____8062))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8062;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8066 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8066))
{return or__3548__auto____8066;
} else
{var or__3548__auto____8070 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8070))
{return or__3548__auto____8070;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8081 = o;

if(cljs.core.truth_(and__3546__auto____8081))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8081;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8086 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8086))
{return or__3548__auto____8086;
} else
{var or__3548__auto____8089 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8089))
{return or__3548__auto____8089;
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
var _reduce__8151 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8094 = coll;

if(cljs.core.truth_(and__3546__auto____8094))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8094;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8138 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8138))
{return or__3548__auto____8138;
} else
{var or__3548__auto____8139 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8139))
{return or__3548__auto____8139;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8152 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8141 = coll;

if(cljs.core.truth_(and__3546__auto____8141))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8141;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8145 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8145))
{return or__3548__auto____8145;
} else
{var or__3548__auto____8150 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8150))
{return or__3548__auto____8150;
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
return _reduce__8151.call(this,coll,f);
case  3 :
return _reduce__8152.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8171 = o;

if(cljs.core.truth_(and__3546__auto____8171))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8171;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8173 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8173))
{return or__3548__auto____8173;
} else
{var or__3548__auto____8175 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8175))
{return or__3548__auto____8175;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8183 = o;

if(cljs.core.truth_(and__3546__auto____8183))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8183;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8187 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8187))
{return or__3548__auto____8187;
} else
{var or__3548__auto____8188 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8188))
{return or__3548__auto____8188;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8192 = o;

if(cljs.core.truth_(and__3546__auto____8192))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8192;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8194 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8194))
{return or__3548__auto____8194;
} else
{var or__3548__auto____8196 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8196))
{return or__3548__auto____8196;
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
if(cljs.core.truth_((function (){var and__3546__auto____8234 = o;

if(cljs.core.truth_(and__3546__auto____8234))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8234;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8235 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8235))
{return or__3548__auto____8235;
} else
{var or__3548__auto____8236 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8236))
{return or__3548__auto____8236;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8237 = d;

if(cljs.core.truth_(and__3546__auto____8237))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8237;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8239 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8239))
{return or__3548__auto____8239;
} else
{var or__3548__auto____8240 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8240))
{return or__3548__auto____8240;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8254 = this$;

if(cljs.core.truth_(and__3546__auto____8254))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8254;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8256 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8256))
{return or__3548__auto____8256;
} else
{var or__3548__auto____8257 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8257))
{return or__3548__auto____8257;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8258 = this$;

if(cljs.core.truth_(and__3546__auto____8258))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8258;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8259 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8259))
{return or__3548__auto____8259;
} else
{var or__3548__auto____8261 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8261))
{return or__3548__auto____8261;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8263 = this$;

if(cljs.core.truth_(and__3546__auto____8263))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8263;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8264 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8264))
{return or__3548__auto____8264;
} else
{var or__3548__auto____8265 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8265))
{return or__3548__auto____8265;
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
var G__8296 = null;
var G__8296__8297 = (function (o,k){
return null;
});
var G__8296__8298 = (function (o,k,not_found){
return not_found;
});
G__8296 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8296__8297.call(this,o,k);
case  3 :
return G__8296__8298.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8296;
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
var G__8300 = null;
var G__8300__8301 = (function (_,f){
return f.call(null);
});
var G__8300__8302 = (function (_,f,start){
return start;
});
G__8300 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8300__8301.call(this,_,f);
case  3 :
return G__8300__8302.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8300;
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
var G__8310__8311 = (function (_,n){
return null;
});
var G__8310__8312 = (function (_,n,not_found){
return not_found;
});
G__8310 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8310__8311.call(this,_,n);
case  3 :
return G__8310__8312.call(this,_,n,not_found);
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
var ci_reduce__8338 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8328 = cljs.core._nth.call(null,cicoll,0);
var n__8329 = 1;

while(true){
if(cljs.core.truth_((n__8329 < cljs.core._count.call(null,cicoll))))
{{
var G__8344 = f.call(null,val__8328,cljs.core._nth.call(null,cicoll,n__8329));
var G__8345 = (n__8329 + 1);
val__8328 = G__8344;
n__8329 = G__8345;
continue;
}
} else
{return val__8328;
}
break;
}
}
});
var ci_reduce__8339 = (function (cicoll,f,val){
var val__8334 = val;
var n__8335 = 0;

while(true){
if(cljs.core.truth_((n__8335 < cljs.core._count.call(null,cicoll))))
{{
var G__8347 = f.call(null,val__8334,cljs.core._nth.call(null,cicoll,n__8335));
var G__8349 = (n__8335 + 1);
val__8334 = G__8347;
n__8335 = G__8349;
continue;
}
} else
{return val__8334;
}
break;
}
});
var ci_reduce__8340 = (function (cicoll,f,val,idx){
var val__8336 = val;
var n__8337 = idx;

while(true){
if(cljs.core.truth_((n__8337 < cljs.core._count.call(null,cicoll))))
{{
var G__8354 = f.call(null,val__8336,cljs.core._nth.call(null,cicoll,n__8337));
var G__8355 = (n__8337 + 1);
val__8336 = G__8354;
n__8337 = G__8355;
continue;
}
} else
{return val__8336;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8338.call(this,cicoll,f);
case  3 :
return ci_reduce__8339.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8340.call(this,cicoll,f,val,idx);
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
var this__8366 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8398 = null;
var G__8398__8400 = (function (_,f){
var this__8369 = this;
return cljs.core.ci_reduce.call(null,this__8369.a,f,(this__8369.a[this__8369.i]),(this__8369.i + 1));
});
var G__8398__8401 = (function (_,f,start){
var this__8370 = this;
return cljs.core.ci_reduce.call(null,this__8370.a,f,start,this__8370.i);
});
G__8398 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8398__8400.call(this,_,f);
case  3 :
return G__8398__8401.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8398;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8371 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8372 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8420 = null;
var G__8420__8421 = (function (coll,n){
var this__8373 = this;
var i__8374 = (n + this__8373.i);

if(cljs.core.truth_((i__8374 < this__8373.a.length)))
{return (this__8373.a[i__8374]);
} else
{return null;
}
});
var G__8420__8422 = (function (coll,n,not_found){
var this__8375 = this;
var i__8376 = (n + this__8375.i);

if(cljs.core.truth_((i__8376 < this__8375.a.length)))
{return (this__8375.a[i__8376]);
} else
{return not_found;
}
});
G__8420 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8420__8421.call(this,coll,n);
case  3 :
return G__8420__8422.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8420;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8377 = this;
return (this__8377.a.length - this__8377.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8380 = this;
return (this__8380.a[this__8380.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8382 = this;
if(cljs.core.truth_(((this__8382.i + 1) < this__8382.a.length)))
{return (new cljs.core.IndexedSeq(this__8382.a,(this__8382.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8389 = this;
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
var G__8469 = null;
var G__8469__8470 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8469__8472 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8469 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8469__8470.call(this,array,f);
case  3 :
return G__8469__8472.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8469;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8476 = null;
var G__8476__8477 = (function (array,k){
return (array[k]);
});
var G__8476__8478 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8476 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8476__8477.call(this,array,k);
case  3 :
return G__8476__8478.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8476;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8482 = null;
var G__8482__8483 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8482__8484 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8482 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8482__8483.call(this,array,n);
case  3 :
return G__8482__8484.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8482;
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
var temp__3698__auto____8507 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8507))
{var s__8508 = temp__3698__auto____8507;

return cljs.core._first.call(null,s__8508);
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
var G__8511 = cljs.core.next.call(null,s);
s = G__8511;
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
var s__8512 = cljs.core.seq.call(null,x);
var n__8513 = 0;

while(true){
if(cljs.core.truth_(s__8512))
{{
var G__8522 = cljs.core.next.call(null,s__8512);
var G__8523 = (n__8513 + 1);
s__8512 = G__8522;
n__8513 = G__8523;
continue;
}
} else
{return n__8513;
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
var conj__8530 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8531 = (function() { 
var G__8534__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8536 = conj.call(null,coll,x);
var G__8537 = cljs.core.first.call(null,xs);
var G__8538 = cljs.core.next.call(null,xs);
coll = G__8536;
x = G__8537;
xs = G__8538;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8534 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8534__delegate.call(this, coll, x, xs);
};
G__8534.cljs$lang$maxFixedArity = 2;
G__8534.cljs$lang$applyTo = (function (arglist__8541){
var coll = cljs.core.first(arglist__8541);
var x = cljs.core.first(cljs.core.next(arglist__8541));
var xs = cljs.core.rest(cljs.core.next(arglist__8541));
return G__8534__delegate.call(this, coll, x, xs);
});
return G__8534;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8530.call(this,coll,x);
default:
return conj__8531.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8531.cljs$lang$applyTo;
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
var nth__8555 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8556 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8555.call(this,coll,n);
case  3 :
return nth__8556.call(this,coll,n,not_found);
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
var get__8562 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8563 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8562.call(this,o,k);
case  3 :
return get__8563.call(this,o,k,not_found);
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
var assoc__8570 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8571 = (function() { 
var G__8577__delegate = function (coll,k,v,kvs){
while(true){
var ret__8566 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8581 = ret__8566;
var G__8582 = cljs.core.first.call(null,kvs);
var G__8583 = cljs.core.second.call(null,kvs);
var G__8584 = cljs.core.nnext.call(null,kvs);
coll = G__8581;
k = G__8582;
v = G__8583;
kvs = G__8584;
continue;
}
} else
{return ret__8566;
}
break;
}
};
var G__8577 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8577__delegate.call(this, coll, k, v, kvs);
};
G__8577.cljs$lang$maxFixedArity = 3;
G__8577.cljs$lang$applyTo = (function (arglist__8586){
var coll = cljs.core.first(arglist__8586);
var k = cljs.core.first(cljs.core.next(arglist__8586));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8586)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8586)));
return G__8577__delegate.call(this, coll, k, v, kvs);
});
return G__8577;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8570.call(this,coll,k,v);
default:
return assoc__8571.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8571.cljs$lang$applyTo;
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
var dissoc__8593 = (function (coll){
return coll;
});
var dissoc__8594 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8595 = (function() { 
var G__8598__delegate = function (coll,k,ks){
while(true){
var ret__8590 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8599 = ret__8590;
var G__8600 = cljs.core.first.call(null,ks);
var G__8601 = cljs.core.next.call(null,ks);
coll = G__8599;
k = G__8600;
ks = G__8601;
continue;
}
} else
{return ret__8590;
}
break;
}
};
var G__8598 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8598__delegate.call(this, coll, k, ks);
};
G__8598.cljs$lang$maxFixedArity = 2;
G__8598.cljs$lang$applyTo = (function (arglist__8602){
var coll = cljs.core.first(arglist__8602);
var k = cljs.core.first(cljs.core.next(arglist__8602));
var ks = cljs.core.rest(cljs.core.next(arglist__8602));
return G__8598__delegate.call(this, coll, k, ks);
});
return G__8598;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8593.call(this,coll);
case  2 :
return dissoc__8594.call(this,coll,k);
default:
return dissoc__8595.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8595.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8614 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8615 = x__445__auto____8614;

if(cljs.core.truth_(and__3546__auto____8615))
{var and__3546__auto____8617 = x__445__auto____8614.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8617))
{return cljs.core.not.call(null,x__445__auto____8614.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8617;
}
} else
{return and__3546__auto____8615;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8614);
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
var G__8654__delegate = function (coll,k,ks){
while(true){
var ret__8649 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8655 = ret__8649;
var G__8656 = cljs.core.first.call(null,ks);
var G__8657 = cljs.core.next.call(null,ks);
coll = G__8655;
k = G__8656;
ks = G__8657;
continue;
}
} else
{return ret__8649;
}
break;
}
};
var G__8654 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8654__delegate.call(this, coll, k, ks);
};
G__8654.cljs$lang$maxFixedArity = 2;
G__8654.cljs$lang$applyTo = (function (arglist__8658){
var coll = cljs.core.first(arglist__8658);
var k = cljs.core.first(cljs.core.next(arglist__8658));
var ks = cljs.core.rest(cljs.core.next(arglist__8658));
return G__8654__delegate.call(this, coll, k, ks);
});
return G__8654;
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
{var x__445__auto____8662 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8663 = x__445__auto____8662;

if(cljs.core.truth_(and__3546__auto____8663))
{var and__3546__auto____8704 = x__445__auto____8662.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8704))
{return cljs.core.not.call(null,x__445__auto____8662.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8704;
}
} else
{return and__3546__auto____8663;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8662);
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
{var x__445__auto____8714 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8715 = x__445__auto____8714;

if(cljs.core.truth_(and__3546__auto____8715))
{var and__3546__auto____8716 = x__445__auto____8714.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8716))
{return cljs.core.not.call(null,x__445__auto____8714.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8716;
}
} else
{return and__3546__auto____8715;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8714);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8717 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8718 = x__445__auto____8717;

if(cljs.core.truth_(and__3546__auto____8718))
{var and__3546__auto____8719 = x__445__auto____8717.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8719))
{return cljs.core.not.call(null,x__445__auto____8717.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8719;
}
} else
{return and__3546__auto____8718;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8717);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8720 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8721 = x__445__auto____8720;

if(cljs.core.truth_(and__3546__auto____8721))
{var and__3546__auto____8722 = x__445__auto____8720.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8722))
{return cljs.core.not.call(null,x__445__auto____8720.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8722;
}
} else
{return and__3546__auto____8721;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8720);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8723 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8724 = x__445__auto____8723;

if(cljs.core.truth_(and__3546__auto____8724))
{var and__3546__auto____8725 = x__445__auto____8723.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8725))
{return cljs.core.not.call(null,x__445__auto____8723.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8725;
}
} else
{return and__3546__auto____8724;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8723);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8726 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8727 = x__445__auto____8726;

if(cljs.core.truth_(and__3546__auto____8727))
{var and__3546__auto____8728 = x__445__auto____8726.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8728))
{return cljs.core.not.call(null,x__445__auto____8726.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8728;
}
} else
{return and__3546__auto____8727;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8726);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8729 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8730 = x__445__auto____8729;

if(cljs.core.truth_(and__3546__auto____8730))
{var and__3546__auto____8731 = x__445__auto____8729.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8731))
{return cljs.core.not.call(null,x__445__auto____8729.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8731;
}
} else
{return and__3546__auto____8730;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8729);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8732 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8732.push(key);
}));
return keys__8732;
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
{var x__445__auto____8768 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8769 = x__445__auto____8768;

if(cljs.core.truth_(and__3546__auto____8769))
{var and__3546__auto____8771 = x__445__auto____8768.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8771))
{return cljs.core.not.call(null,x__445__auto____8768.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8771;
}
} else
{return and__3546__auto____8769;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8768);
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
var and__3546__auto____8783 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8783))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8790 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8790))
{return or__3548__auto____8790;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8783;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8807 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8807))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8807;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8809 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8809))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8809;
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
var and__3546__auto____8823 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8823))
{return (n == n.toFixed());
} else
{return and__3546__auto____8823;
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
if(cljs.core.truth_((function (){var and__3546__auto____8828 = coll;

if(cljs.core.truth_(and__3546__auto____8828))
{var and__3546__auto____8833 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8833))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8833;
}
} else
{return and__3546__auto____8828;
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
var distinct_QMARK___8862 = (function (x){
return true;
});
var distinct_QMARK___8872 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8873 = (function() { 
var G__8876__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8842 = cljs.core.set([y,x]);
var xs__8843 = more;

while(true){
var x__8844 = cljs.core.first.call(null,xs__8843);
var etc__8845 = cljs.core.next.call(null,xs__8843);

if(cljs.core.truth_(xs__8843))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8842,x__8844)))
{return false;
} else
{{
var G__8877 = cljs.core.conj.call(null,s__8842,x__8844);
var G__8878 = etc__8845;
s__8842 = G__8877;
xs__8843 = G__8878;
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
var G__8876 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8876__delegate.call(this, x, y, more);
};
G__8876.cljs$lang$maxFixedArity = 2;
G__8876.cljs$lang$applyTo = (function (arglist__8880){
var x = cljs.core.first(arglist__8880);
var y = cljs.core.first(cljs.core.next(arglist__8880));
var more = cljs.core.rest(cljs.core.next(arglist__8880));
return G__8876__delegate.call(this, x, y, more);
});
return G__8876;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8862.call(this,x);
case  2 :
return distinct_QMARK___8872.call(this,x,y);
default:
return distinct_QMARK___8873.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8873.cljs$lang$applyTo;
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
var r__8889 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8889)))
{return r__8889;
} else
{if(cljs.core.truth_(r__8889))
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
var sort__8938 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8939 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8936 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8936,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8936);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8938.call(this,comp);
case  2 :
return sort__8939.call(this,comp,coll);
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
var sort_by__8953 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8954 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8953.call(this,keyfn,comp);
case  3 :
return sort_by__8954.call(this,keyfn,comp,coll);
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
var reduce__8962 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8963 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8962.call(this,f,val);
case  3 :
return reduce__8963.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8978 = (function (f,coll){
var temp__3695__auto____8968 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8968))
{var s__8969 = temp__3695__auto____8968;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8969),cljs.core.next.call(null,s__8969));
} else
{return f.call(null);
}
});
var seq_reduce__8979 = (function (f,val,coll){
var val__8970 = val;
var coll__8971 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8971))
{{
var G__8986 = f.call(null,val__8970,cljs.core.first.call(null,coll__8971));
var G__8987 = cljs.core.next.call(null,coll__8971);
val__8970 = G__8986;
coll__8971 = G__8987;
continue;
}
} else
{return val__8970;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8978.call(this,f,val);
case  3 :
return seq_reduce__8979.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8988 = null;
var G__8988__8989 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8988__8990 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8988 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8988__8989.call(this,coll,f);
case  3 :
return G__8988__8990.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8988;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8997 = (function (){
return 0;
});
var _PLUS___8998 = (function (x){
return x;
});
var _PLUS___8999 = (function (x,y){
return (x + y);
});
var _PLUS___9000 = (function() { 
var G__9002__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9002 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9002__delegate.call(this, x, y, more);
};
G__9002.cljs$lang$maxFixedArity = 2;
G__9002.cljs$lang$applyTo = (function (arglist__9003){
var x = cljs.core.first(arglist__9003);
var y = cljs.core.first(cljs.core.next(arglist__9003));
var more = cljs.core.rest(cljs.core.next(arglist__9003));
return G__9002__delegate.call(this, x, y, more);
});
return G__9002;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8997.call(this);
case  1 :
return _PLUS___8998.call(this,x);
case  2 :
return _PLUS___8999.call(this,x,y);
default:
return _PLUS___9000.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9000.cljs$lang$applyTo;
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
var ___9004 = (function (x){
return (- x);
});
var ___9005 = (function (x,y){
return (x - y);
});
var ___9006 = (function() { 
var G__9008__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9008 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9008__delegate.call(this, x, y, more);
};
G__9008.cljs$lang$maxFixedArity = 2;
G__9008.cljs$lang$applyTo = (function (arglist__9010){
var x = cljs.core.first(arglist__9010);
var y = cljs.core.first(cljs.core.next(arglist__9010));
var more = cljs.core.rest(cljs.core.next(arglist__9010));
return G__9008__delegate.call(this, x, y, more);
});
return G__9008;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9004.call(this,x);
case  2 :
return ___9005.call(this,x,y);
default:
return ___9006.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9006.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9083 = (function (){
return 1;
});
var _STAR___9084 = (function (x){
return x;
});
var _STAR___9085 = (function (x,y){
return (x * y);
});
var _STAR___9086 = (function() { 
var G__9088__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9088 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9088__delegate.call(this, x, y, more);
};
G__9088.cljs$lang$maxFixedArity = 2;
G__9088.cljs$lang$applyTo = (function (arglist__9089){
var x = cljs.core.first(arglist__9089);
var y = cljs.core.first(cljs.core.next(arglist__9089));
var more = cljs.core.rest(cljs.core.next(arglist__9089));
return G__9088__delegate.call(this, x, y, more);
});
return G__9088;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9083.call(this);
case  1 :
return _STAR___9084.call(this,x);
case  2 :
return _STAR___9085.call(this,x,y);
default:
return _STAR___9086.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9086.cljs$lang$applyTo;
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
var _SLASH___9097 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9098 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9099 = (function() { 
var G__9101__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9101 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9101__delegate.call(this, x, y, more);
};
G__9101.cljs$lang$maxFixedArity = 2;
G__9101.cljs$lang$applyTo = (function (arglist__9102){
var x = cljs.core.first(arglist__9102);
var y = cljs.core.first(cljs.core.next(arglist__9102));
var more = cljs.core.rest(cljs.core.next(arglist__9102));
return G__9101__delegate.call(this, x, y, more);
});
return G__9101;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9097.call(this,x);
case  2 :
return _SLASH___9098.call(this,x,y);
default:
return _SLASH___9099.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9099.cljs$lang$applyTo;
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
var _LT___9109 = (function (x){
return true;
});
var _LT___9111 = (function (x,y){
return (x < y);
});
var _LT___9133 = (function() { 
var G__9135__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9136 = y;
var G__9137 = cljs.core.first.call(null,more);
var G__9138 = cljs.core.next.call(null,more);
x = G__9136;
y = G__9137;
more = G__9138;
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
var G__9135 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9135__delegate.call(this, x, y, more);
};
G__9135.cljs$lang$maxFixedArity = 2;
G__9135.cljs$lang$applyTo = (function (arglist__9146){
var x = cljs.core.first(arglist__9146);
var y = cljs.core.first(cljs.core.next(arglist__9146));
var more = cljs.core.rest(cljs.core.next(arglist__9146));
return G__9135__delegate.call(this, x, y, more);
});
return G__9135;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9109.call(this,x);
case  2 :
return _LT___9111.call(this,x,y);
default:
return _LT___9133.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9133.cljs$lang$applyTo;
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
var _LT__EQ___9154 = (function (x){
return true;
});
var _LT__EQ___9155 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9156 = (function() { 
var G__9158__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9161 = y;
var G__9162 = cljs.core.first.call(null,more);
var G__9163 = cljs.core.next.call(null,more);
x = G__9161;
y = G__9162;
more = G__9163;
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
var G__9158 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9158__delegate.call(this, x, y, more);
};
G__9158.cljs$lang$maxFixedArity = 2;
G__9158.cljs$lang$applyTo = (function (arglist__9164){
var x = cljs.core.first(arglist__9164);
var y = cljs.core.first(cljs.core.next(arglist__9164));
var more = cljs.core.rest(cljs.core.next(arglist__9164));
return G__9158__delegate.call(this, x, y, more);
});
return G__9158;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9154.call(this,x);
case  2 :
return _LT__EQ___9155.call(this,x,y);
default:
return _LT__EQ___9156.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9156.cljs$lang$applyTo;
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
var _GT___9169 = (function (x){
return true;
});
var _GT___9170 = (function (x,y){
return (x > y);
});
var _GT___9171 = (function() { 
var G__9173__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9178 = y;
var G__9179 = cljs.core.first.call(null,more);
var G__9180 = cljs.core.next.call(null,more);
x = G__9178;
y = G__9179;
more = G__9180;
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
var G__9173 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9173__delegate.call(this, x, y, more);
};
G__9173.cljs$lang$maxFixedArity = 2;
G__9173.cljs$lang$applyTo = (function (arglist__9187){
var x = cljs.core.first(arglist__9187);
var y = cljs.core.first(cljs.core.next(arglist__9187));
var more = cljs.core.rest(cljs.core.next(arglist__9187));
return G__9173__delegate.call(this, x, y, more);
});
return G__9173;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9169.call(this,x);
case  2 :
return _GT___9170.call(this,x,y);
default:
return _GT___9171.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9171.cljs$lang$applyTo;
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
var _GT__EQ___9191 = (function (x){
return true;
});
var _GT__EQ___9192 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9193 = (function() { 
var G__9195__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9196 = y;
var G__9197 = cljs.core.first.call(null,more);
var G__9198 = cljs.core.next.call(null,more);
x = G__9196;
y = G__9197;
more = G__9198;
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
var G__9195 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9195__delegate.call(this, x, y, more);
};
G__9195.cljs$lang$maxFixedArity = 2;
G__9195.cljs$lang$applyTo = (function (arglist__9205){
var x = cljs.core.first(arglist__9205);
var y = cljs.core.first(cljs.core.next(arglist__9205));
var more = cljs.core.rest(cljs.core.next(arglist__9205));
return G__9195__delegate.call(this, x, y, more);
});
return G__9195;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9191.call(this,x);
case  2 :
return _GT__EQ___9192.call(this,x,y);
default:
return _GT__EQ___9193.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9193.cljs$lang$applyTo;
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
var max__9210 = (function (x){
return x;
});
var max__9212 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9214 = (function() { 
var G__9220__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9220 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9220__delegate.call(this, x, y, more);
};
G__9220.cljs$lang$maxFixedArity = 2;
G__9220.cljs$lang$applyTo = (function (arglist__9222){
var x = cljs.core.first(arglist__9222);
var y = cljs.core.first(cljs.core.next(arglist__9222));
var more = cljs.core.rest(cljs.core.next(arglist__9222));
return G__9220__delegate.call(this, x, y, more);
});
return G__9220;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9210.call(this,x);
case  2 :
return max__9212.call(this,x,y);
default:
return max__9214.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9214.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9226 = (function (x){
return x;
});
var min__9228 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9229 = (function() { 
var G__9231__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9231 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9231__delegate.call(this, x, y, more);
};
G__9231.cljs$lang$maxFixedArity = 2;
G__9231.cljs$lang$applyTo = (function (arglist__9234){
var x = cljs.core.first(arglist__9234);
var y = cljs.core.first(cljs.core.next(arglist__9234));
var more = cljs.core.rest(cljs.core.next(arglist__9234));
return G__9231__delegate.call(this, x, y, more);
});
return G__9231;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9226.call(this,x);
case  2 :
return min__9228.call(this,x,y);
default:
return min__9229.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9229.cljs$lang$applyTo;
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
var rem__9244 = (n % d);

return cljs.core.fix.call(null,((n - rem__9244) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9256 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9256));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9264 = (function (){
return Math.random.call(null);
});
var rand__9265 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9264.call(this);
case  1 :
return rand__9265.call(this,n);
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
var _EQ__EQ___9466 = (function (x){
return true;
});
var _EQ__EQ___9467 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9468 = (function() { 
var G__9470__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9472 = y;
var G__9473 = cljs.core.first.call(null,more);
var G__9474 = cljs.core.next.call(null,more);
x = G__9472;
y = G__9473;
more = G__9474;
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
var G__9470 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9470__delegate.call(this, x, y, more);
};
G__9470.cljs$lang$maxFixedArity = 2;
G__9470.cljs$lang$applyTo = (function (arglist__9475){
var x = cljs.core.first(arglist__9475);
var y = cljs.core.first(cljs.core.next(arglist__9475));
var more = cljs.core.rest(cljs.core.next(arglist__9475));
return G__9470__delegate.call(this, x, y, more);
});
return G__9470;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9466.call(this,x);
case  2 :
return _EQ__EQ___9467.call(this,x,y);
default:
return _EQ__EQ___9468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9468.cljs$lang$applyTo;
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
var n__9480 = n;
var xs__9481 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9482 = xs__9481;

if(cljs.core.truth_(and__3546__auto____9482))
{return (n__9480 > 0);
} else
{return and__3546__auto____9482;
}
})()))
{{
var G__9499 = (n__9480 - 1);
var G__9500 = cljs.core.next.call(null,xs__9481);
n__9480 = G__9499;
xs__9481 = G__9500;
continue;
}
} else
{return xs__9481;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9519 = null;
var G__9519__9520 = (function (coll,n){
var temp__3695__auto____9509 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9509))
{var xs__9510 = temp__3695__auto____9509;

return cljs.core.first.call(null,xs__9510);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9519__9521 = (function (coll,n,not_found){
var temp__3695__auto____9515 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9515))
{var xs__9517 = temp__3695__auto____9515;

return cljs.core.first.call(null,xs__9517);
} else
{return not_found;
}
});
G__9519 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9519__9520.call(this,coll,n);
case  3 :
return G__9519__9521.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9519;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9534 = (function (){
return "";
});
var str_STAR___9535 = (function (x){
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
var str_STAR___9536 = (function() { 
var G__9542__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9543 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9544 = cljs.core.next.call(null,more);
sb = G__9543;
more = G__9544;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9542 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9542__delegate.call(this, x, ys);
};
G__9542.cljs$lang$maxFixedArity = 1;
G__9542.cljs$lang$applyTo = (function (arglist__9546){
var x = cljs.core.first(arglist__9546);
var ys = cljs.core.rest(arglist__9546);
return G__9542__delegate.call(this, x, ys);
});
return G__9542;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9534.call(this);
case  1 :
return str_STAR___9535.call(this,x);
default:
return str_STAR___9536.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9536.cljs$lang$applyTo;
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
var str__9553 = (function (){
return "";
});
var str__9554 = (function (x){
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
var str__9555 = (function() { 
var G__9563__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9563 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9563__delegate.call(this, x, ys);
};
G__9563.cljs$lang$maxFixedArity = 1;
G__9563.cljs$lang$applyTo = (function (arglist__9566){
var x = cljs.core.first(arglist__9566);
var ys = cljs.core.rest(arglist__9566);
return G__9563__delegate.call(this, x, ys);
});
return G__9563;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9553.call(this);
case  1 :
return str__9554.call(this,x);
default:
return str__9555.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9555.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9573 = (function (s,start){
return s.substring(start);
});
var subs__9574 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9573.call(this,s,start);
case  3 :
return subs__9574.call(this,s,start,end);
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
var symbol__9587 = (function (name){
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
var symbol__9588 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9587.call(this,ns);
case  2 :
return symbol__9588.call(this,ns,name);
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
var keyword__9591 = (function (name){
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
var keyword__9592 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9591.call(this,ns);
case  2 :
return keyword__9592.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9646 = cljs.core.seq.call(null,x);
var ys__9647 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9646)))
{return cljs.core.nil_QMARK_.call(null,ys__9647);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9647)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9646),cljs.core.first.call(null,ys__9647))))
{{
var G__9651 = cljs.core.next.call(null,xs__9646);
var G__9652 = cljs.core.next.call(null,ys__9647);
xs__9646 = G__9651;
ys__9647 = G__9652;
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
return cljs.core.reduce.call(null,(function (p1__9653_SHARP_,p2__9654_SHARP_){
return cljs.core.hash_combine.call(null,p1__9653_SHARP_,cljs.core.hash.call(null,p2__9654_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9665__9666 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9665__9666))
{var G__9668__9670 = cljs.core.first.call(null,G__9665__9666);
var vec__9669__9671 = G__9668__9670;
var key_name__9672 = cljs.core.nth.call(null,vec__9669__9671,0,null);
var f__9673 = cljs.core.nth.call(null,vec__9669__9671,1,null);
var G__9665__9674 = G__9665__9666;

var G__9668__9675 = G__9668__9670;
var G__9665__9676 = G__9665__9674;

while(true){
var vec__9677__9678 = G__9668__9675;
var key_name__9679 = cljs.core.nth.call(null,vec__9677__9678,0,null);
var f__9680 = cljs.core.nth.call(null,vec__9677__9678,1,null);
var G__9665__9681 = G__9665__9676;

var str_name__9683 = cljs.core.name.call(null,key_name__9679);

obj[str_name__9683] = f__9680;
var temp__3698__auto____9688 = cljs.core.next.call(null,G__9665__9681);

if(cljs.core.truth_(temp__3698__auto____9688))
{var G__9665__9689 = temp__3698__auto____9688;

{
var G__9696 = cljs.core.first.call(null,G__9665__9689);
var G__9697 = G__9665__9689;
G__9668__9675 = G__9696;
G__9665__9676 = G__9697;
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
var this__9704 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9705 = this;
return (new cljs.core.List(this__9705.meta,o,coll,(this__9705.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9706 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9707 = this;
return this__9707.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9711 = this;
return this__9711.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9784 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9785 = this;
return this__9785.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9786 = this;
return this__9786.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9788 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9790 = this;
return (new cljs.core.List(meta,this__9790.first,this__9790.rest,this__9790.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9795 = this;
return this__9795.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9797 = this;
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
var this__9816 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9817 = this;
return (new cljs.core.List(this__9817.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9819 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9821 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9822 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9824 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9861 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9862 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9865 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9867 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9872 = this;
return this__9872.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9876 = this;
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
list.cljs$lang$applyTo = (function (arglist__9884){
var items = cljs.core.seq( arglist__9884 );;
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
var this__9897 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9901 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9907 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9912 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9912.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9915 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9918 = this;
return this__9918.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9919 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9919.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9919.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9922 = this;
return this__9922.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9923 = this;
return (new cljs.core.Cons(meta,this__9923.first,this__9923.rest));
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
var G__9981 = null;
var G__9981__9982 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9981__9983 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9981 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9981__9982.call(this,string,f);
case  3 :
return G__9981__9983.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9981;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9986 = null;
var G__9986__9987 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9986__9988 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9986 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9986__9987.call(this,string,k);
case  3 :
return G__9986__9988.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9986;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9992 = null;
var G__9992__9993 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9992__9994 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9992 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9992__9993.call(this,string,n);
case  3 :
return G__9992__9994.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9992;
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
var G__10012 = null;
var G__10012__10013 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10012__10014 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10012 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10012__10013.call(this,this$,coll);
case  3 :
return G__10012__10014.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10012;
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
var x__10021 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10021;
} else
{lazy_seq.x = x__10021.call(null);
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
var this__10031 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10034 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10035 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10037 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10037.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10040 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10041 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10044 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10046 = this;
return this__10046.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10048 = this;
return (new cljs.core.LazySeq(meta,this__10048.realized,this__10048.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10049 = cljs.core.array.call(null);

var s__10050 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10050)))
{ary__10049.push(cljs.core.first.call(null,s__10050));
{
var G__10051 = cljs.core.next.call(null,s__10050);
s__10050 = G__10051;
continue;
}
} else
{return ary__10049;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10052 = s;
var i__10053 = n;
var sum__10054 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10055 = (i__10053 > 0);

if(cljs.core.truth_(and__3546__auto____10055))
{return cljs.core.seq.call(null,s__10052);
} else
{return and__3546__auto____10055;
}
})()))
{{
var G__10056 = cljs.core.next.call(null,s__10052);
var G__10057 = (i__10053 - 1);
var G__10058 = (sum__10054 + 1);
s__10052 = G__10056;
i__10053 = G__10057;
sum__10054 = G__10058;
continue;
}
} else
{return sum__10054;
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
var concat__10098 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10144 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10145 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10090 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10090))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10090),concat.call(null,cljs.core.rest.call(null,s__10090),y));
} else
{return y;
}
})));
});
var concat__10146 = (function() { 
var G__10153__delegate = function (x,y,zs){
var cat__10094 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10091 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10091))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10091),cat.call(null,cljs.core.rest.call(null,xys__10091),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10094.call(null,concat.call(null,x,y),zs);
};
var G__10153 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10153__delegate.call(this, x, y, zs);
};
G__10153.cljs$lang$maxFixedArity = 2;
G__10153.cljs$lang$applyTo = (function (arglist__10173){
var x = cljs.core.first(arglist__10173);
var y = cljs.core.first(cljs.core.next(arglist__10173));
var zs = cljs.core.rest(cljs.core.next(arglist__10173));
return G__10153__delegate.call(this, x, y, zs);
});
return G__10153;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10098.call(this);
case  1 :
return concat__10144.call(this,x);
case  2 :
return concat__10145.call(this,x,y);
default:
return concat__10146.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10146.cljs$lang$applyTo;
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
var list_STAR___10176 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10177 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10178 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10179 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10180 = (function() { 
var G__10184__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10184 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10184__delegate.call(this, a, b, c, d, more);
};
G__10184.cljs$lang$maxFixedArity = 4;
G__10184.cljs$lang$applyTo = (function (arglist__10186){
var a = cljs.core.first(arglist__10186);
var b = cljs.core.first(cljs.core.next(arglist__10186));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10186)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10186))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10186))));
return G__10184__delegate.call(this, a, b, c, d, more);
});
return G__10184;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10176.call(this,a);
case  2 :
return list_STAR___10177.call(this,a,b);
case  3 :
return list_STAR___10178.call(this,a,b,c);
case  4 :
return list_STAR___10179.call(this,a,b,c,d);
default:
return list_STAR___10180.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10180.cljs$lang$applyTo;
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
var apply__10208 = (function (f,args){
var fixed_arity__10192 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10192 + 1)) <= fixed_arity__10192)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10209 = (function (f,x,args){
var arglist__10197 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10198 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10197,fixed_arity__10198) <= fixed_arity__10198)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10197));
} else
{return f.cljs$lang$applyTo(arglist__10197);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10197));
}
});
var apply__10210 = (function (f,x,y,args){
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
var apply__10211 = (function (f,x,y,z,args){
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
var apply__10212 = (function() { 
var G__10222__delegate = function (f,a,b,c,d,args){
var arglist__10206 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10207 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10206,fixed_arity__10207) <= fixed_arity__10207)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10206));
} else
{return f.cljs$lang$applyTo(arglist__10206);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10206));
}
};
var G__10222 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10222__delegate.call(this, f, a, b, c, d, args);
};
G__10222.cljs$lang$maxFixedArity = 5;
G__10222.cljs$lang$applyTo = (function (arglist__10227){
var f = cljs.core.first(arglist__10227);
var a = cljs.core.first(cljs.core.next(arglist__10227));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10227)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10227))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10227)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10227)))));
return G__10222__delegate.call(this, f, a, b, c, d, args);
});
return G__10222;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10208.call(this,f,a);
case  3 :
return apply__10209.call(this,f,a,b);
case  4 :
return apply__10210.call(this,f,a,b,c);
case  5 :
return apply__10211.call(this,f,a,b,c,d);
default:
return apply__10212.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10212.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10300){
var obj = cljs.core.first(arglist__10300);
var f = cljs.core.first(cljs.core.next(arglist__10300));
var args = cljs.core.rest(cljs.core.next(arglist__10300));
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
var not_EQ___10303 = (function (x){
return false;
});
var not_EQ___10304 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10305 = (function() { 
var G__10309__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10309 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10309__delegate.call(this, x, y, more);
};
G__10309.cljs$lang$maxFixedArity = 2;
G__10309.cljs$lang$applyTo = (function (arglist__10312){
var x = cljs.core.first(arglist__10312);
var y = cljs.core.first(cljs.core.next(arglist__10312));
var more = cljs.core.rest(cljs.core.next(arglist__10312));
return G__10309__delegate.call(this, x, y, more);
});
return G__10309;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10303.call(this,x);
case  2 :
return not_EQ___10304.call(this,x,y);
default:
return not_EQ___10305.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10305.cljs$lang$applyTo;
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
var G__10330 = pred;
var G__10331 = cljs.core.next.call(null,coll);
pred = G__10330;
coll = G__10331;
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
{var or__3548__auto____10335 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10335))
{return or__3548__auto____10335;
} else
{{
var G__10340 = pred;
var G__10341 = cljs.core.next.call(null,coll);
pred = G__10340;
coll = G__10341;
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
var G__10352 = null;
var G__10352__10353 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10352__10354 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10352__10355 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10352__10356 = (function() { 
var G__10359__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10359 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10359__delegate.call(this, x, y, zs);
};
G__10359.cljs$lang$maxFixedArity = 2;
G__10359.cljs$lang$applyTo = (function (arglist__10360){
var x = cljs.core.first(arglist__10360);
var y = cljs.core.first(cljs.core.next(arglist__10360));
var zs = cljs.core.rest(cljs.core.next(arglist__10360));
return G__10359__delegate.call(this, x, y, zs);
});
return G__10359;
})()
;
G__10352 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10352__10353.call(this);
case  1 :
return G__10352__10354.call(this,x);
case  2 :
return G__10352__10355.call(this,x,y);
default:
return G__10352__10356.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10352.cljs$lang$maxFixedArity = 2;
G__10352.cljs$lang$applyTo = G__10352__10356.cljs$lang$applyTo;
return G__10352;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10361__delegate = function (args){
return x;
};
var G__10361 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10361__delegate.call(this, args);
};
G__10361.cljs$lang$maxFixedArity = 0;
G__10361.cljs$lang$applyTo = (function (arglist__10362){
var args = cljs.core.seq( arglist__10362 );;
return G__10361__delegate.call(this, args);
});
return G__10361;
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
var comp__10375 = (function (){
return cljs.core.identity;
});
var comp__10395 = (function (f){
return f;
});
var comp__10396 = (function (f,g){
return (function() {
var G__10400 = null;
var G__10400__10401 = (function (){
return f.call(null,g.call(null));
});
var G__10400__10402 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10400__10403 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10400__10404 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10400__10405 = (function() { 
var G__10408__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10408 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10408__delegate.call(this, x, y, z, args);
};
G__10408.cljs$lang$maxFixedArity = 3;
G__10408.cljs$lang$applyTo = (function (arglist__10409){
var x = cljs.core.first(arglist__10409);
var y = cljs.core.first(cljs.core.next(arglist__10409));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10409)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10409)));
return G__10408__delegate.call(this, x, y, z, args);
});
return G__10408;
})()
;
G__10400 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10400__10401.call(this);
case  1 :
return G__10400__10402.call(this,x);
case  2 :
return G__10400__10403.call(this,x,y);
case  3 :
return G__10400__10404.call(this,x,y,z);
default:
return G__10400__10405.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10400.cljs$lang$maxFixedArity = 3;
G__10400.cljs$lang$applyTo = G__10400__10405.cljs$lang$applyTo;
return G__10400;
})()
});
var comp__10397 = (function (f,g,h){
return (function() {
var G__10414 = null;
var G__10414__10415 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10414__10416 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10414__10417 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10414__10418 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10414__10419 = (function() { 
var G__10423__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10423 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10423__delegate.call(this, x, y, z, args);
};
G__10423.cljs$lang$maxFixedArity = 3;
G__10423.cljs$lang$applyTo = (function (arglist__10424){
var x = cljs.core.first(arglist__10424);
var y = cljs.core.first(cljs.core.next(arglist__10424));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10424)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10424)));
return G__10423__delegate.call(this, x, y, z, args);
});
return G__10423;
})()
;
G__10414 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10414__10415.call(this);
case  1 :
return G__10414__10416.call(this,x);
case  2 :
return G__10414__10417.call(this,x,y);
case  3 :
return G__10414__10418.call(this,x,y,z);
default:
return G__10414__10419.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10414.cljs$lang$maxFixedArity = 3;
G__10414.cljs$lang$applyTo = G__10414__10419.cljs$lang$applyTo;
return G__10414;
})()
});
var comp__10398 = (function() { 
var G__10425__delegate = function (f1,f2,f3,fs){
var fs__10371 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10426__delegate = function (args){
var ret__10372 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10371),args);
var fs__10373 = cljs.core.next.call(null,fs__10371);

while(true){
if(cljs.core.truth_(fs__10373))
{{
var G__10427 = cljs.core.first.call(null,fs__10373).call(null,ret__10372);
var G__10428 = cljs.core.next.call(null,fs__10373);
ret__10372 = G__10427;
fs__10373 = G__10428;
continue;
}
} else
{return ret__10372;
}
break;
}
};
var G__10426 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10426__delegate.call(this, args);
};
G__10426.cljs$lang$maxFixedArity = 0;
G__10426.cljs$lang$applyTo = (function (arglist__10429){
var args = cljs.core.seq( arglist__10429 );;
return G__10426__delegate.call(this, args);
});
return G__10426;
})()
;
};
var G__10425 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10425__delegate.call(this, f1, f2, f3, fs);
};
G__10425.cljs$lang$maxFixedArity = 3;
G__10425.cljs$lang$applyTo = (function (arglist__10430){
var f1 = cljs.core.first(arglist__10430);
var f2 = cljs.core.first(cljs.core.next(arglist__10430));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10430)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10430)));
return G__10425__delegate.call(this, f1, f2, f3, fs);
});
return G__10425;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10375.call(this);
case  1 :
return comp__10395.call(this,f1);
case  2 :
return comp__10396.call(this,f1,f2);
case  3 :
return comp__10397.call(this,f1,f2,f3);
default:
return comp__10398.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10398.cljs$lang$applyTo;
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
var partial__10433 = (function (f,arg1){
return (function() { 
var G__10438__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10438 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10438__delegate.call(this, args);
};
G__10438.cljs$lang$maxFixedArity = 0;
G__10438.cljs$lang$applyTo = (function (arglist__10439){
var args = cljs.core.seq( arglist__10439 );;
return G__10438__delegate.call(this, args);
});
return G__10438;
})()
;
});
var partial__10434 = (function (f,arg1,arg2){
return (function() { 
var G__10440__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10440 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10440__delegate.call(this, args);
};
G__10440.cljs$lang$maxFixedArity = 0;
G__10440.cljs$lang$applyTo = (function (arglist__10441){
var args = cljs.core.seq( arglist__10441 );;
return G__10440__delegate.call(this, args);
});
return G__10440;
})()
;
});
var partial__10435 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10442__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10442 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10442__delegate.call(this, args);
};
G__10442.cljs$lang$maxFixedArity = 0;
G__10442.cljs$lang$applyTo = (function (arglist__10443){
var args = cljs.core.seq( arglist__10443 );;
return G__10442__delegate.call(this, args);
});
return G__10442;
})()
;
});
var partial__10436 = (function() { 
var G__10444__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10445__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10445 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10445__delegate.call(this, args);
};
G__10445.cljs$lang$maxFixedArity = 0;
G__10445.cljs$lang$applyTo = (function (arglist__10446){
var args = cljs.core.seq( arglist__10446 );;
return G__10445__delegate.call(this, args);
});
return G__10445;
})()
;
};
var G__10444 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10444__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10444.cljs$lang$maxFixedArity = 4;
G__10444.cljs$lang$applyTo = (function (arglist__10447){
var f = cljs.core.first(arglist__10447);
var arg1 = cljs.core.first(cljs.core.next(arglist__10447));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10447)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10447))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10447))));
return G__10444__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10444;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10433.call(this,f,arg1);
case  3 :
return partial__10434.call(this,f,arg1,arg2);
case  4 :
return partial__10435.call(this,f,arg1,arg2,arg3);
default:
return partial__10436.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10436.cljs$lang$applyTo;
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
var fnil__10457 = (function (f,x){
return (function() {
var G__10463 = null;
var G__10463__10465 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10463__10466 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10463__10468 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10463__10469 = (function() { 
var G__10471__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10471 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10471__delegate.call(this, a, b, c, ds);
};
G__10471.cljs$lang$maxFixedArity = 3;
G__10471.cljs$lang$applyTo = (function (arglist__10473){
var a = cljs.core.first(arglist__10473);
var b = cljs.core.first(cljs.core.next(arglist__10473));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10473)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10473)));
return G__10471__delegate.call(this, a, b, c, ds);
});
return G__10471;
})()
;
G__10463 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10463__10465.call(this,a);
case  2 :
return G__10463__10466.call(this,a,b);
case  3 :
return G__10463__10468.call(this,a,b,c);
default:
return G__10463__10469.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10463.cljs$lang$maxFixedArity = 3;
G__10463.cljs$lang$applyTo = G__10463__10469.cljs$lang$applyTo;
return G__10463;
})()
});
var fnil__10458 = (function (f,x,y){
return (function() {
var G__10477 = null;
var G__10477__10478 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10477__10479 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10477__10480 = (function() { 
var G__10482__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10482 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10482__delegate.call(this, a, b, c, ds);
};
G__10482.cljs$lang$maxFixedArity = 3;
G__10482.cljs$lang$applyTo = (function (arglist__10483){
var a = cljs.core.first(arglist__10483);
var b = cljs.core.first(cljs.core.next(arglist__10483));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10483)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10483)));
return G__10482__delegate.call(this, a, b, c, ds);
});
return G__10482;
})()
;
G__10477 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10477__10478.call(this,a,b);
case  3 :
return G__10477__10479.call(this,a,b,c);
default:
return G__10477__10480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10477.cljs$lang$maxFixedArity = 3;
G__10477.cljs$lang$applyTo = G__10477__10480.cljs$lang$applyTo;
return G__10477;
})()
});
var fnil__10459 = (function (f,x,y,z){
return (function() {
var G__10484 = null;
var G__10484__10485 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10484__10486 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10484__10487 = (function() { 
var G__10489__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10489 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10489__delegate.call(this, a, b, c, ds);
};
G__10489.cljs$lang$maxFixedArity = 3;
G__10489.cljs$lang$applyTo = (function (arglist__10490){
var a = cljs.core.first(arglist__10490);
var b = cljs.core.first(cljs.core.next(arglist__10490));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10490)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10490)));
return G__10489__delegate.call(this, a, b, c, ds);
});
return G__10489;
})()
;
G__10484 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10484__10485.call(this,a,b);
case  3 :
return G__10484__10486.call(this,a,b,c);
default:
return G__10484__10487.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10484.cljs$lang$maxFixedArity = 3;
G__10484.cljs$lang$applyTo = G__10484__10487.cljs$lang$applyTo;
return G__10484;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10457.call(this,f,x);
case  3 :
return fnil__10458.call(this,f,x,y);
case  4 :
return fnil__10459.call(this,f,x,y,z);
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
var mapi__10495 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10491 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10491))
{var s__10492 = temp__3698__auto____10491;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10492)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10492)));
} else
{return null;
}
})));
});

return mapi__10495.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10505 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10505))
{var s__10506 = temp__3698__auto____10505;

var x__10507 = f.call(null,cljs.core.first.call(null,s__10506));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10507)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10506));
} else
{return cljs.core.cons.call(null,x__10507,keep.call(null,f,cljs.core.rest.call(null,s__10506)));
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
var keepi__10542 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10538 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10538))
{var s__10540 = temp__3698__auto____10538;

var x__10541 = f.call(null,idx,cljs.core.first.call(null,s__10540));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10541)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10540));
} else
{return cljs.core.cons.call(null,x__10541,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10540)));
}
} else
{return null;
}
})));
});

return keepi__10542.call(null,0,coll);
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
var every_pred__10733 = (function (p){
return (function() {
var ep1 = null;
var ep1__10738 = (function (){
return true;
});
var ep1__10739 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10740 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10638 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10638))
{return p.call(null,y);
} else
{return and__3546__auto____10638;
}
})());
});
var ep1__10741 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10639 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10639))
{var and__3546__auto____10640 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10640))
{return p.call(null,z);
} else
{return and__3546__auto____10640;
}
} else
{return and__3546__auto____10639;
}
})());
});
var ep1__10742 = (function() { 
var G__10744__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10641 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10641))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10641;
}
})());
};
var G__10744 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10744__delegate.call(this, x, y, z, args);
};
G__10744.cljs$lang$maxFixedArity = 3;
G__10744.cljs$lang$applyTo = (function (arglist__10745){
var x = cljs.core.first(arglist__10745);
var y = cljs.core.first(cljs.core.next(arglist__10745));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10745)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10745)));
return G__10744__delegate.call(this, x, y, z, args);
});
return G__10744;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10738.call(this);
case  1 :
return ep1__10739.call(this,x);
case  2 :
return ep1__10740.call(this,x,y);
case  3 :
return ep1__10741.call(this,x,y,z);
default:
return ep1__10742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10742.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10734 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10747 = (function (){
return true;
});
var ep2__10748 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10643 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10643))
{return p2.call(null,x);
} else
{return and__3546__auto____10643;
}
})());
});
var ep2__10749 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10646 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10646))
{var and__3546__auto____10648 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10648))
{var and__3546__auto____10649 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10649))
{return p2.call(null,y);
} else
{return and__3546__auto____10649;
}
} else
{return and__3546__auto____10648;
}
} else
{return and__3546__auto____10646;
}
})());
});
var ep2__10750 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10653 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10653))
{var and__3546__auto____10654 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10654))
{var and__3546__auto____10656 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10656))
{var and__3546__auto____10658 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10658))
{var and__3546__auto____10659 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10659))
{return p2.call(null,z);
} else
{return and__3546__auto____10659;
}
} else
{return and__3546__auto____10658;
}
} else
{return and__3546__auto____10656;
}
} else
{return and__3546__auto____10654;
}
} else
{return and__3546__auto____10653;
}
})());
});
var ep2__10751 = (function() { 
var G__10766__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10660 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10660))
{return cljs.core.every_QMARK_.call(null,(function (p1__10525_SHARP_){
var and__3546__auto____10662 = p1.call(null,p1__10525_SHARP_);

if(cljs.core.truth_(and__3546__auto____10662))
{return p2.call(null,p1__10525_SHARP_);
} else
{return and__3546__auto____10662;
}
}),args);
} else
{return and__3546__auto____10660;
}
})());
};
var G__10766 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10766__delegate.call(this, x, y, z, args);
};
G__10766.cljs$lang$maxFixedArity = 3;
G__10766.cljs$lang$applyTo = (function (arglist__10772){
var x = cljs.core.first(arglist__10772);
var y = cljs.core.first(cljs.core.next(arglist__10772));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10772)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10772)));
return G__10766__delegate.call(this, x, y, z, args);
});
return G__10766;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10747.call(this);
case  1 :
return ep2__10748.call(this,x);
case  2 :
return ep2__10749.call(this,x,y);
case  3 :
return ep2__10750.call(this,x,y,z);
default:
return ep2__10751.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10751.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10735 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10777 = (function (){
return true;
});
var ep3__10778 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10663 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10663))
{var and__3546__auto____10666 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10666))
{return p3.call(null,x);
} else
{return and__3546__auto____10666;
}
} else
{return and__3546__auto____10663;
}
})());
});
var ep3__10779 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10667 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10667))
{var and__3546__auto____10668 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10668))
{var and__3546__auto____10669 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10669))
{var and__3546__auto____10670 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10670))
{var and__3546__auto____10671 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10671))
{return p3.call(null,y);
} else
{return and__3546__auto____10671;
}
} else
{return and__3546__auto____10670;
}
} else
{return and__3546__auto____10669;
}
} else
{return and__3546__auto____10668;
}
} else
{return and__3546__auto____10667;
}
})());
});
var ep3__10780 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10672 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10672))
{var and__3546__auto____10673 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10673))
{var and__3546__auto____10674 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10674))
{var and__3546__auto____10675 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10675))
{var and__3546__auto____10677 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10677))
{var and__3546__auto____10678 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10678))
{var and__3546__auto____10679 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10679))
{var and__3546__auto____10680 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10680))
{return p3.call(null,z);
} else
{return and__3546__auto____10680;
}
} else
{return and__3546__auto____10679;
}
} else
{return and__3546__auto____10678;
}
} else
{return and__3546__auto____10677;
}
} else
{return and__3546__auto____10675;
}
} else
{return and__3546__auto____10674;
}
} else
{return and__3546__auto____10673;
}
} else
{return and__3546__auto____10672;
}
})());
});
var ep3__10781 = (function() { 
var G__10839__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10687 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10687))
{return cljs.core.every_QMARK_.call(null,(function (p1__10526_SHARP_){
var and__3546__auto____10692 = p1.call(null,p1__10526_SHARP_);

if(cljs.core.truth_(and__3546__auto____10692))
{var and__3546__auto____10694 = p2.call(null,p1__10526_SHARP_);

if(cljs.core.truth_(and__3546__auto____10694))
{return p3.call(null,p1__10526_SHARP_);
} else
{return and__3546__auto____10694;
}
} else
{return and__3546__auto____10692;
}
}),args);
} else
{return and__3546__auto____10687;
}
})());
};
var G__10839 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10839__delegate.call(this, x, y, z, args);
};
G__10839.cljs$lang$maxFixedArity = 3;
G__10839.cljs$lang$applyTo = (function (arglist__10840){
var x = cljs.core.first(arglist__10840);
var y = cljs.core.first(cljs.core.next(arglist__10840));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10840)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10840)));
return G__10839__delegate.call(this, x, y, z, args);
});
return G__10839;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10777.call(this);
case  1 :
return ep3__10778.call(this,x);
case  2 :
return ep3__10779.call(this,x,y);
case  3 :
return ep3__10780.call(this,x,y,z);
default:
return ep3__10781.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10781.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10736 = (function() { 
var G__10844__delegate = function (p1,p2,p3,ps){
var ps__10697 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10849 = (function (){
return true;
});
var epn__10851 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10527_SHARP_){
return p1__10527_SHARP_.call(null,x);
}),ps__10697);
});
var epn__10853 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10530_SHARP_){
var and__3546__auto____10699 = p1__10530_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10699))
{return p1__10530_SHARP_.call(null,y);
} else
{return and__3546__auto____10699;
}
}),ps__10697);
});
var epn__10854 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10534_SHARP_){
var and__3546__auto____10701 = p1__10534_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10701))
{var and__3546__auto____10702 = p1__10534_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10702))
{return p1__10534_SHARP_.call(null,z);
} else
{return and__3546__auto____10702;
}
} else
{return and__3546__auto____10701;
}
}),ps__10697);
});
var epn__10855 = (function() { 
var G__10865__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10705 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10705))
{return cljs.core.every_QMARK_.call(null,(function (p1__10535_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10535_SHARP_,args);
}),ps__10697);
} else
{return and__3546__auto____10705;
}
})());
};
var G__10865 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10865__delegate.call(this, x, y, z, args);
};
G__10865.cljs$lang$maxFixedArity = 3;
G__10865.cljs$lang$applyTo = (function (arglist__10869){
var x = cljs.core.first(arglist__10869);
var y = cljs.core.first(cljs.core.next(arglist__10869));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10869)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10869)));
return G__10865__delegate.call(this, x, y, z, args);
});
return G__10865;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10849.call(this);
case  1 :
return epn__10851.call(this,x);
case  2 :
return epn__10853.call(this,x,y);
case  3 :
return epn__10854.call(this,x,y,z);
default:
return epn__10855.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10855.cljs$lang$applyTo;
return epn;
})()
};
var G__10844 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10844__delegate.call(this, p1, p2, p3, ps);
};
G__10844.cljs$lang$maxFixedArity = 3;
G__10844.cljs$lang$applyTo = (function (arglist__10873){
var p1 = cljs.core.first(arglist__10873);
var p2 = cljs.core.first(cljs.core.next(arglist__10873));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10873)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10873)));
return G__10844__delegate.call(this, p1, p2, p3, ps);
});
return G__10844;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10733.call(this,p1);
case  2 :
return every_pred__10734.call(this,p1,p2);
case  3 :
return every_pred__10735.call(this,p1,p2,p3);
default:
return every_pred__10736.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10736.cljs$lang$applyTo;
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
var some_fn__11094 = (function (p){
return (function() {
var sp1 = null;
var sp1__11103 = (function (){
return null;
});
var sp1__11105 = (function (x){
return p.call(null,x);
});
var sp1__11106 = (function (x,y){
var or__3548__auto____10884 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10884))
{return or__3548__auto____10884;
} else
{return p.call(null,y);
}
});
var sp1__11107 = (function (x,y,z){
var or__3548__auto____10885 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10885))
{return or__3548__auto____10885;
} else
{var or__3548__auto____10886 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____10886))
{return or__3548__auto____10886;
} else
{return p.call(null,z);
}
}
});
var sp1__11108 = (function() { 
var G__11113__delegate = function (x,y,z,args){
var or__3548__auto____10887 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10887))
{return or__3548__auto____10887;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11113 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11113__delegate.call(this, x, y, z, args);
};
G__11113.cljs$lang$maxFixedArity = 3;
G__11113.cljs$lang$applyTo = (function (arglist__11115){
var x = cljs.core.first(arglist__11115);
var y = cljs.core.first(cljs.core.next(arglist__11115));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11115)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11115)));
return G__11113__delegate.call(this, x, y, z, args);
});
return G__11113;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11103.call(this);
case  1 :
return sp1__11105.call(this,x);
case  2 :
return sp1__11106.call(this,x,y);
case  3 :
return sp1__11107.call(this,x,y,z);
default:
return sp1__11108.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11108.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11096 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11122 = (function (){
return null;
});
var sp2__11123 = (function (x){
var or__3548__auto____10888 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10888))
{return or__3548__auto____10888;
} else
{return p2.call(null,x);
}
});
var sp2__11124 = (function (x,y){
var or__3548__auto____10889 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10889))
{return or__3548__auto____10889;
} else
{var or__3548__auto____10890 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10890))
{return or__3548__auto____10890;
} else
{var or__3548__auto____10891 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10891))
{return or__3548__auto____10891;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11125 = (function (x,y,z){
var or__3548__auto____10901 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10901))
{return or__3548__auto____10901;
} else
{var or__3548__auto____10903 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10903))
{return or__3548__auto____10903;
} else
{var or__3548__auto____10904 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10904))
{return or__3548__auto____10904;
} else
{var or__3548__auto____10905 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10905))
{return or__3548__auto____10905;
} else
{var or__3548__auto____10906 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10906))
{return or__3548__auto____10906;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11126 = (function() { 
var G__11142__delegate = function (x,y,z,args){
var or__3548__auto____10915 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10915))
{return or__3548__auto____10915;
} else
{return cljs.core.some.call(null,(function (p1__10549_SHARP_){
var or__3548__auto____10916 = p1.call(null,p1__10549_SHARP_);

if(cljs.core.truth_(or__3548__auto____10916))
{return or__3548__auto____10916;
} else
{return p2.call(null,p1__10549_SHARP_);
}
}),args);
}
};
var G__11142 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11142__delegate.call(this, x, y, z, args);
};
G__11142.cljs$lang$maxFixedArity = 3;
G__11142.cljs$lang$applyTo = (function (arglist__11148){
var x = cljs.core.first(arglist__11148);
var y = cljs.core.first(cljs.core.next(arglist__11148));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11148)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11148)));
return G__11142__delegate.call(this, x, y, z, args);
});
return G__11142;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11122.call(this);
case  1 :
return sp2__11123.call(this,x);
case  2 :
return sp2__11124.call(this,x,y);
case  3 :
return sp2__11125.call(this,x,y,z);
default:
return sp2__11126.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11126.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11097 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11150 = (function (){
return null;
});
var sp3__11151 = (function (x){
var or__3548__auto____10930 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10930))
{return or__3548__auto____10930;
} else
{var or__3548__auto____10931 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10931))
{return or__3548__auto____10931;
} else
{return p3.call(null,x);
}
}
});
var sp3__11152 = (function (x,y){
var or__3548__auto____10933 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10933))
{return or__3548__auto____10933;
} else
{var or__3548__auto____10935 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10935))
{return or__3548__auto____10935;
} else
{var or__3548__auto____10936 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____10936))
{return or__3548__auto____10936;
} else
{var or__3548__auto____10938 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10938))
{return or__3548__auto____10938;
} else
{var or__3548__auto____10939 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10939))
{return or__3548__auto____10939;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11154 = (function (x,y,z){
var or__3548__auto____10945 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10945))
{return or__3548__auto____10945;
} else
{var or__3548__auto____10946 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10946))
{return or__3548__auto____10946;
} else
{var or__3548__auto____10947 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____10947))
{return or__3548__auto____10947;
} else
{var or__3548__auto____10948 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10948))
{return or__3548__auto____10948;
} else
{var or__3548__auto____10949 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10949))
{return or__3548__auto____10949;
} else
{var or__3548__auto____10951 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____10951))
{return or__3548__auto____10951;
} else
{var or__3548__auto____10952 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10952))
{return or__3548__auto____10952;
} else
{var or__3548__auto____10953 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____10953))
{return or__3548__auto____10953;
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
var sp3__11155 = (function() { 
var G__11181__delegate = function (x,y,z,args){
var or__3548__auto____10955 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10955))
{return or__3548__auto____10955;
} else
{return cljs.core.some.call(null,(function (p1__10630_SHARP_){
var or__3548__auto____10956 = p1.call(null,p1__10630_SHARP_);

if(cljs.core.truth_(or__3548__auto____10956))
{return or__3548__auto____10956;
} else
{var or__3548__auto____10957 = p2.call(null,p1__10630_SHARP_);

if(cljs.core.truth_(or__3548__auto____10957))
{return or__3548__auto____10957;
} else
{return p3.call(null,p1__10630_SHARP_);
}
}
}),args);
}
};
var G__11181 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11181__delegate.call(this, x, y, z, args);
};
G__11181.cljs$lang$maxFixedArity = 3;
G__11181.cljs$lang$applyTo = (function (arglist__11188){
var x = cljs.core.first(arglist__11188);
var y = cljs.core.first(cljs.core.next(arglist__11188));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11188)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11188)));
return G__11181__delegate.call(this, x, y, z, args);
});
return G__11181;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11150.call(this);
case  1 :
return sp3__11151.call(this,x);
case  2 :
return sp3__11152.call(this,x,y);
case  3 :
return sp3__11154.call(this,x,y,z);
default:
return sp3__11155.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11155.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11098 = (function() { 
var G__11198__delegate = function (p1,p2,p3,ps){
var ps__10958 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11209 = (function (){
return null;
});
var spn__11211 = (function (x){
return cljs.core.some.call(null,(function (p1__10631_SHARP_){
return p1__10631_SHARP_.call(null,x);
}),ps__10958);
});
var spn__11212 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10632_SHARP_){
var or__3548__auto____10962 = p1__10632_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____10962))
{return or__3548__auto____10962;
} else
{return p1__10632_SHARP_.call(null,y);
}
}),ps__10958);
});
var spn__11213 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10633_SHARP_){
var or__3548__auto____10966 = p1__10633_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____10966))
{return or__3548__auto____10966;
} else
{var or__3548__auto____10967 = p1__10633_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____10967))
{return or__3548__auto____10967;
} else
{return p1__10633_SHARP_.call(null,z);
}
}
}),ps__10958);
});
var spn__11214 = (function() { 
var G__11223__delegate = function (x,y,z,args){
var or__3548__auto____11066 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11066))
{return or__3548__auto____11066;
} else
{return cljs.core.some.call(null,(function (p1__10636_SHARP_){
return cljs.core.some.call(null,p1__10636_SHARP_,args);
}),ps__10958);
}
};
var G__11223 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11223__delegate.call(this, x, y, z, args);
};
G__11223.cljs$lang$maxFixedArity = 3;
G__11223.cljs$lang$applyTo = (function (arglist__11229){
var x = cljs.core.first(arglist__11229);
var y = cljs.core.first(cljs.core.next(arglist__11229));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11229)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11229)));
return G__11223__delegate.call(this, x, y, z, args);
});
return G__11223;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11209.call(this);
case  1 :
return spn__11211.call(this,x);
case  2 :
return spn__11212.call(this,x,y);
case  3 :
return spn__11213.call(this,x,y,z);
default:
return spn__11214.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11214.cljs$lang$applyTo;
return spn;
})()
};
var G__11198 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11198__delegate.call(this, p1, p2, p3, ps);
};
G__11198.cljs$lang$maxFixedArity = 3;
G__11198.cljs$lang$applyTo = (function (arglist__11235){
var p1 = cljs.core.first(arglist__11235);
var p2 = cljs.core.first(cljs.core.next(arglist__11235));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11235)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11235)));
return G__11198__delegate.call(this, p1, p2, p3, ps);
});
return G__11198;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11094.call(this,p1);
case  2 :
return some_fn__11096.call(this,p1,p2);
case  3 :
return some_fn__11097.call(this,p1,p2,p3);
default:
return some_fn__11098.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11098.cljs$lang$applyTo;
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
var map__11630 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11241 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11241))
{var s__11242 = temp__3698__auto____11241;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11242)),map.call(null,f,cljs.core.rest.call(null,s__11242)));
} else
{return null;
}
})));
});
var map__11631 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11245 = cljs.core.seq.call(null,c1);
var s2__11247 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11248 = s1__11245;

if(cljs.core.truth_(and__3546__auto____11248))
{return s2__11247;
} else
{return and__3546__auto____11248;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11245),cljs.core.first.call(null,s2__11247)),map.call(null,f,cljs.core.rest.call(null,s1__11245),cljs.core.rest.call(null,s2__11247)));
} else
{return null;
}
})));
});
var map__11632 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11599 = cljs.core.seq.call(null,c1);
var s2__11601 = cljs.core.seq.call(null,c2);
var s3__11607 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11609 = s1__11599;

if(cljs.core.truth_(and__3546__auto____11609))
{var and__3546__auto____11614 = s2__11601;

if(cljs.core.truth_(and__3546__auto____11614))
{return s3__11607;
} else
{return and__3546__auto____11614;
}
} else
{return and__3546__auto____11609;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11599),cljs.core.first.call(null,s2__11601),cljs.core.first.call(null,s3__11607)),map.call(null,f,cljs.core.rest.call(null,s1__11599),cljs.core.rest.call(null,s2__11601),cljs.core.rest.call(null,s3__11607)));
} else
{return null;
}
})));
});
var map__11633 = (function() { 
var G__11637__delegate = function (f,c1,c2,c3,colls){
var step__11623 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11621 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11621)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11621),step.call(null,map.call(null,cljs.core.rest,ss__11621)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__10876_SHARP_){
return cljs.core.apply.call(null,f,p1__10876_SHARP_);
}),step__11623.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11637 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11637__delegate.call(this, f, c1, c2, c3, colls);
};
G__11637.cljs$lang$maxFixedArity = 4;
G__11637.cljs$lang$applyTo = (function (arglist__11645){
var f = cljs.core.first(arglist__11645);
var c1 = cljs.core.first(cljs.core.next(arglist__11645));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11645)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11645))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11645))));
return G__11637__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11637;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11630.call(this,f,c1);
case  3 :
return map__11631.call(this,f,c1,c2);
case  4 :
return map__11632.call(this,f,c1,c2,c3);
default:
return map__11633.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11633.cljs$lang$applyTo;
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
{var s__11655 = temp__3698__auto____11654;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11655),take.call(null,(n - 1),cljs.core.rest.call(null,s__11655)));
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
var step__11665 = (function (n,coll){
while(true){
var s__11661 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11663 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11663))
{return s__11661;
} else
{return and__3546__auto____11663;
}
})()))
{{
var G__11670 = (n - 1);
var G__11671 = cljs.core.rest.call(null,s__11661);
n = G__11670;
coll = G__11671;
continue;
}
} else
{return s__11661;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11665.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11686 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11687 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11686.call(this,n);
case  2 :
return drop_last__11687.call(this,n,s);
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
var s__11693 = cljs.core.seq.call(null,coll);
var lead__11694 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11694))
{{
var G__11696 = cljs.core.next.call(null,s__11693);
var G__11697 = cljs.core.next.call(null,lead__11694);
s__11693 = G__11696;
lead__11694 = G__11697;
continue;
}
} else
{return s__11693;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11784 = (function (pred,coll){
while(true){
var s__11700 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11703 = s__11700;

if(cljs.core.truth_(and__3546__auto____11703))
{return pred.call(null,cljs.core.first.call(null,s__11700));
} else
{return and__3546__auto____11703;
}
})()))
{{
var G__11788 = pred;
var G__11789 = cljs.core.rest.call(null,s__11700);
pred = G__11788;
coll = G__11789;
continue;
}
} else
{return s__11700;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11784.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11793 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11793))
{var s__11795 = temp__3698__auto____11793;

return cljs.core.concat.call(null,s__11795,cycle.call(null,s__11795));
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
var repeat__11813 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11814 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11813.call(this,n);
case  2 :
return repeat__11814.call(this,n,x);
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
var repeatedly__11878 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11879 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11878.call(this,n);
case  2 :
return repeatedly__11879.call(this,n,f);
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
var interleave__11907 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11896 = cljs.core.seq.call(null,c1);
var s2__11897 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11900 = s1__11896;

if(cljs.core.truth_(and__3546__auto____11900))
{return s2__11897;
} else
{return and__3546__auto____11900;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11896),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11897),interleave.call(null,cljs.core.rest.call(null,s1__11896),cljs.core.rest.call(null,s2__11897))));
} else
{return null;
}
})));
});
var interleave__11908 = (function() { 
var G__11912__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11902 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11902)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11902),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11902)));
} else
{return null;
}
})));
};
var G__11912 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11912__delegate.call(this, c1, c2, colls);
};
G__11912.cljs$lang$maxFixedArity = 2;
G__11912.cljs$lang$applyTo = (function (arglist__11921){
var c1 = cljs.core.first(arglist__11921);
var c2 = cljs.core.first(cljs.core.next(arglist__11921));
var colls = cljs.core.rest(cljs.core.next(arglist__11921));
return G__11912__delegate.call(this, c1, c2, colls);
});
return G__11912;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11907.call(this,c1,c2);
default:
return interleave__11908.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11908.cljs$lang$applyTo;
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
var cat__11945 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11932 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11932))
{var coll__11935 = temp__3695__auto____11932;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11935),cat.call(null,cljs.core.rest.call(null,coll__11935),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11945.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11953 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11954 = (function() { 
var G__11956__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11956 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11956__delegate.call(this, f, coll, colls);
};
G__11956.cljs$lang$maxFixedArity = 2;
G__11956.cljs$lang$applyTo = (function (arglist__11960){
var f = cljs.core.first(arglist__11960);
var coll = cljs.core.first(cljs.core.next(arglist__11960));
var colls = cljs.core.rest(cljs.core.next(arglist__11960));
return G__11956__delegate.call(this, f, coll, colls);
});
return G__11956;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11953.call(this,f,coll);
default:
return mapcat__11954.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11954.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11966 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11966))
{var s__11971 = temp__3698__auto____11966;

var f__11972 = cljs.core.first.call(null,s__11971);
var r__11973 = cljs.core.rest.call(null,s__11971);

if(cljs.core.truth_(pred.call(null,f__11972)))
{return cljs.core.cons.call(null,f__11972,filter.call(null,pred,r__11973));
} else
{return filter.call(null,pred,r__11973);
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
var walk__12008 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12008.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12001_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12001_SHARP_));
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
var partition__12058 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12059 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12048 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12048))
{var s__12050 = temp__3698__auto____12048;

var p__12051 = cljs.core.take.call(null,n,s__12050);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12051))))
{return cljs.core.cons.call(null,p__12051,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12050)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12060 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12052 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12052))
{var s__12053 = temp__3698__auto____12052;

var p__12055 = cljs.core.take.call(null,n,s__12053);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12055))))
{return cljs.core.cons.call(null,p__12055,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12053)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12055,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12058.call(this,n,step);
case  3 :
return partition__12059.call(this,n,step,pad);
case  4 :
return partition__12060.call(this,n,step,pad,coll);
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
var get_in__12087 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12088 = (function (m,ks,not_found){
var sentinel__12078 = cljs.core.lookup_sentinel;
var m__12079 = m;
var ks__12080 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12080))
{var m__12081 = cljs.core.get.call(null,m__12079,cljs.core.first.call(null,ks__12080),sentinel__12078);

if(cljs.core.truth_((sentinel__12078 === m__12081)))
{return not_found;
} else
{{
var G__12092 = sentinel__12078;
var G__12093 = m__12081;
var G__12094 = cljs.core.next.call(null,ks__12080);
sentinel__12078 = G__12092;
m__12079 = G__12093;
ks__12080 = G__12094;
continue;
}
}
} else
{return m__12079;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12087.call(this,m,ks);
case  3 :
return get_in__12088.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12098,v){
var vec__12100__12101 = p__12098;
var k__12102 = cljs.core.nth.call(null,vec__12100__12101,0,null);
var ks__12103 = cljs.core.nthnext.call(null,vec__12100__12101,1);

if(cljs.core.truth_(ks__12103))
{return cljs.core.assoc.call(null,m,k__12102,assoc_in.call(null,cljs.core.get.call(null,m,k__12102),ks__12103,v));
} else
{return cljs.core.assoc.call(null,m,k__12102,v);
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
var update_in__delegate = function (m,p__12138,f,args){
var vec__12140__12141 = p__12138;
var k__12143 = cljs.core.nth.call(null,vec__12140__12141,0,null);
var ks__12145 = cljs.core.nthnext.call(null,vec__12140__12141,1);

if(cljs.core.truth_(ks__12145))
{return cljs.core.assoc.call(null,m,k__12143,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12143),ks__12145,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12143,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12143),args));
}
};
var update_in = function (m,p__12138,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12138, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12156){
var m = cljs.core.first(arglist__12156);
var p__12138 = cljs.core.first(cljs.core.next(arglist__12156));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12156)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12156)));
return update_in__delegate.call(this, m, p__12138, f, args);
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
var this__12185 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12257 = null;
var G__12257__12259 = (function (coll,k){
var this__12186 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12257__12260 = (function (coll,k,not_found){
var this__12191 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12257 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12257__12259.call(this,coll,k);
case  3 :
return G__12257__12260.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12257;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12192 = this;
var new_array__12193 = cljs.core.aclone.call(null,this__12192.array);

(new_array__12193[k] = v);
return (new cljs.core.Vector(this__12192.meta,new_array__12193));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12265 = null;
var G__12265__12267 = (function (coll,k){
var this__12194 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12265__12268 = (function (coll,k,not_found){
var this__12196 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12265 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12265__12267.call(this,coll,k);
case  3 :
return G__12265__12268.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12265;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12200 = this;
var new_array__12201 = cljs.core.aclone.call(null,this__12200.array);

new_array__12201.push(o);
return (new cljs.core.Vector(this__12200.meta,new_array__12201));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12272 = null;
var G__12272__12273 = (function (v,f){
var this__12204 = this;
return cljs.core.ci_reduce.call(null,this__12204.array,f);
});
var G__12272__12274 = (function (v,f,start){
var this__12222 = this;
return cljs.core.ci_reduce.call(null,this__12222.array,f,start);
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
var this__12225 = this;
if(cljs.core.truth_((this__12225.array.length > 0)))
{var vector_seq__12226 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12225.array.length)))
{return cljs.core.cons.call(null,(this__12225.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12226.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12228 = this;
return this__12228.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12229 = this;
var count__12231 = this__12229.array.length;

if(cljs.core.truth_((count__12231 > 0)))
{return (this__12229.array[(count__12231 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12235 = this;
if(cljs.core.truth_((this__12235.array.length > 0)))
{var new_array__12236 = cljs.core.aclone.call(null,this__12235.array);

new_array__12236.pop();
return (new cljs.core.Vector(this__12235.meta,new_array__12236));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12237 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12238 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12239 = this;
return (new cljs.core.Vector(meta,this__12239.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12240 = this;
return this__12240.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12285 = null;
var G__12285__12286 = (function (coll,n){
var this__12241 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12242 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12242))
{return (n < this__12241.array.length);
} else
{return and__3546__auto____12242;
}
})()))
{return (this__12241.array[n]);
} else
{return null;
}
});
var G__12285__12287 = (function (coll,n,not_found){
var this__12245 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12248 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12248))
{return (n < this__12245.array.length);
} else
{return and__3546__auto____12248;
}
})()))
{return (this__12245.array[n]);
} else
{return not_found;
}
});
G__12285 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12285__12286.call(this,coll,n);
case  3 :
return G__12285__12287.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12285;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12250 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12250.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12395){
var args = cljs.core.seq( arglist__12395 );;
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
var this__12399 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12444 = null;
var G__12444__12445 = (function (coll,k){
var this__12400 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12444__12446 = (function (coll,k,not_found){
var this__12401 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12444 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12444__12445.call(this,coll,k);
case  3 :
return G__12444__12446.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12444;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12402 = this;
var v_pos__12403 = (this__12402.start + key);

return (new cljs.core.Subvec(this__12402.meta,cljs.core._assoc.call(null,this__12402.v,v_pos__12403,val),this__12402.start,((this__12402.end > (v_pos__12403 + 1)) ? this__12402.end : (v_pos__12403 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12451 = null;
var G__12451__12452 = (function (coll,k){
var this__12404 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12451__12453 = (function (coll,k,not_found){
var this__12405 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12451 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12451__12452.call(this,coll,k);
case  3 :
return G__12451__12453.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12451;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12406 = this;
return (new cljs.core.Subvec(this__12406.meta,cljs.core._assoc_n.call(null,this__12406.v,this__12406.end,o),this__12406.start,(this__12406.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12459 = null;
var G__12459__12460 = (function (coll,f){
var this__12407 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12459__12461 = (function (coll,f,start){
var this__12408 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12459 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12459__12460.call(this,coll,f);
case  3 :
return G__12459__12461.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12459;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12412 = this;
var subvec_seq__12415 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12412.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12412.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12415.call(null,this__12412.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12417 = this;
return (this__12417.end - this__12417.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12419 = this;
return cljs.core._nth.call(null,this__12419.v,(this__12419.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12422 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12422.start,this__12422.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12422.meta,this__12422.v,this__12422.start,(this__12422.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12424 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12429 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12432 = this;
return (new cljs.core.Subvec(meta,this__12432.v,this__12432.start,this__12432.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12434 = this;
return this__12434.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12472 = null;
var G__12472__12474 = (function (coll,n){
var this__12435 = this;
return cljs.core._nth.call(null,this__12435.v,(this__12435.start + n));
});
var G__12472__12476 = (function (coll,n,not_found){
var this__12437 = this;
return cljs.core._nth.call(null,this__12437.v,(this__12437.start + n),not_found);
});
G__12472 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12472__12474.call(this,coll,n);
case  3 :
return G__12472__12476.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12472;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12440 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12440.meta);
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
var subvec__12491 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12493 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12491.call(this,v,start);
case  3 :
return subvec__12493.call(this,v,start,end);
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
var this__12507 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12510 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12512 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12514 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12514.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12516 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12518 = this;
return cljs.core._first.call(null,this__12518.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12519 = this;
var temp__3695__auto____12526 = cljs.core.next.call(null,this__12519.front);

if(cljs.core.truth_(temp__3695__auto____12526))
{var f1__12528 = temp__3695__auto____12526;

return (new cljs.core.PersistentQueueSeq(this__12519.meta,f1__12528,this__12519.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12519.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12519.meta,this__12519.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12530 = this;
return this__12530.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12531 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12531.front,this__12531.rear));
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
var this__12552 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12559 = this;
if(cljs.core.truth_(this__12559.front))
{return (new cljs.core.PersistentQueue(this__12559.meta,(this__12559.count + 1),this__12559.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12562 = this__12559.rear;

if(cljs.core.truth_(or__3548__auto____12562))
{return or__3548__auto____12562;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12559.meta,(this__12559.count + 1),cljs.core.conj.call(null,this__12559.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12563 = this;
var rear__12564 = cljs.core.seq.call(null,this__12563.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12565 = this__12563.front;

if(cljs.core.truth_(or__3548__auto____12565))
{return or__3548__auto____12565;
} else
{return rear__12564;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12563.front,cljs.core.seq.call(null,rear__12564)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12567 = this;
return this__12567.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12568 = this;
return cljs.core._first.call(null,this__12568.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12569 = this;
if(cljs.core.truth_(this__12569.front))
{var temp__3695__auto____12571 = cljs.core.next.call(null,this__12569.front);

if(cljs.core.truth_(temp__3695__auto____12571))
{var f1__12572 = temp__3695__auto____12571;

return (new cljs.core.PersistentQueue(this__12569.meta,(this__12569.count - 1),f1__12572,this__12569.rear));
} else
{return (new cljs.core.PersistentQueue(this__12569.meta,(this__12569.count - 1),cljs.core.seq.call(null,this__12569.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12576 = this;
return cljs.core.first.call(null,this__12576.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12579 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12580 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12583 = this;
return (new cljs.core.PersistentQueue(meta,this__12583.count,this__12583.front,this__12583.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12585 = this;
return this__12585.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12587 = this;
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
var this__12660 = this;
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

var i__12694 = 0;

while(true){
if(cljs.core.truth_((i__12694 < len__12693)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12694]))))
{return i__12694;
} else
{{
var G__12700 = (i__12694 + incr);
i__12694 = G__12700;
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
var this__12796 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12869 = null;
var G__12869__12870 = (function (coll,k){
var this__12797 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12869__12871 = (function (coll,k,not_found){
var this__12799 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12799.strobj,(this__12799.strobj[k]),not_found);
});
G__12869 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12869__12870.call(this,coll,k);
case  3 :
return G__12869__12871.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12869;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12803 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12804 = goog.object.clone.call(null,this__12803.strobj);
var overwrite_QMARK___12807 = new_strobj__12804.hasOwnProperty(k);

(new_strobj__12804[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12807))
{return (new cljs.core.ObjMap(this__12803.meta,this__12803.keys,new_strobj__12804));
} else
{var new_keys__12809 = cljs.core.aclone.call(null,this__12803.keys);

new_keys__12809.push(k);
return (new cljs.core.ObjMap(this__12803.meta,new_keys__12809,new_strobj__12804));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12803.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12810 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12810.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12878 = null;
var G__12878__12879 = (function (coll,k){
var this__12811 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12878__12880 = (function (coll,k,not_found){
var this__12812 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12878 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12878__12879.call(this,coll,k);
case  3 :
return G__12878__12880.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12878;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12814 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12817 = this;
if(cljs.core.truth_((this__12817.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12728_SHARP_){
return cljs.core.vector.call(null,p1__12728_SHARP_,(this__12817.strobj[p1__12728_SHARP_]));
}),this__12817.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12820 = this;
return this__12820.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12823 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12826 = this;
return (new cljs.core.ObjMap(meta,this__12826.keys,this__12826.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12852 = this;
return this__12852.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12856 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12856.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12858 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12860 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12860))
{return this__12858.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12860;
}
})()))
{var new_keys__12863 = cljs.core.aclone.call(null,this__12858.keys);
var new_strobj__12866 = goog.object.clone.call(null,this__12858.strobj);

new_keys__12863.splice(cljs.core.scan_array.call(null,1,k,new_keys__12863),1);
cljs.core.js_delete.call(null,new_strobj__12866,k);
return (new cljs.core.ObjMap(this__12858.meta,new_keys__12863,new_strobj__12866));
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
var this__12906 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13050 = null;
var G__13050__13052 = (function (coll,k){
var this__12909 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13050__13053 = (function (coll,k,not_found){
var this__12911 = this;
var bucket__12913 = (this__12911.hashobj[cljs.core.hash.call(null,k)]);
var i__12914 = (cljs.core.truth_(bucket__12913)?cljs.core.scan_array.call(null,2,k,bucket__12913):null);

if(cljs.core.truth_(i__12914))
{return (bucket__12913[(i__12914 + 1)]);
} else
{return not_found;
}
});
G__13050 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13050__13052.call(this,coll,k);
case  3 :
return G__13050__13053.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13050;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12916 = this;
var h__12920 = cljs.core.hash.call(null,k);
var bucket__12921 = (this__12916.hashobj[h__12920]);

if(cljs.core.truth_(bucket__12921))
{var new_bucket__12922 = cljs.core.aclone.call(null,bucket__12921);
var new_hashobj__12924 = goog.object.clone.call(null,this__12916.hashobj);

(new_hashobj__12924[h__12920] = new_bucket__12922);
var temp__3695__auto____12925 = cljs.core.scan_array.call(null,2,k,new_bucket__12922);

if(cljs.core.truth_(temp__3695__auto____12925))
{var i__12927 = temp__3695__auto____12925;

(new_bucket__12922[(i__12927 + 1)] = v);
return (new cljs.core.HashMap(this__12916.meta,this__12916.count,new_hashobj__12924));
} else
{new_bucket__12922.push(k,v);
return (new cljs.core.HashMap(this__12916.meta,(this__12916.count + 1),new_hashobj__12924));
}
} else
{var new_hashobj__12928 = goog.object.clone.call(null,this__12916.hashobj);

(new_hashobj__12928[h__12920] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12916.meta,(this__12916.count + 1),new_hashobj__12928));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12932 = this;
var bucket__12934 = (this__12932.hashobj[cljs.core.hash.call(null,k)]);
var i__12935 = (cljs.core.truth_(bucket__12934)?cljs.core.scan_array.call(null,2,k,bucket__12934):null);

if(cljs.core.truth_(i__12935))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13096 = null;
var G__13096__13097 = (function (coll,k){
var this__12936 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13096__13098 = (function (coll,k,not_found){
var this__12985 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13096 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13096__13097.call(this,coll,k);
case  3 :
return G__13096__13098.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13096;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12987 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12989 = this;
if(cljs.core.truth_((this__12989.count > 0)))
{var hashes__12992 = cljs.core.js_keys.call(null,this__12989.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12898_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12989.hashobj[p1__12898_SHARP_])));
}),hashes__12992);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12997 = this;
return this__12997.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12999 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13025 = this;
return (new cljs.core.HashMap(meta,this__13025.count,this__13025.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13033 = this;
return this__13033.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13035 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13035.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13037 = this;
var h__13039 = cljs.core.hash.call(null,k);
var bucket__13041 = (this__13037.hashobj[h__13039]);
var i__13042 = (cljs.core.truth_(bucket__13041)?cljs.core.scan_array.call(null,2,k,bucket__13041):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13042)))
{return coll;
} else
{var new_hashobj__13044 = goog.object.clone.call(null,this__13037.hashobj);

if(cljs.core.truth_((3 > bucket__13041.length)))
{cljs.core.js_delete.call(null,new_hashobj__13044,h__13039);
} else
{var new_bucket__13046 = cljs.core.aclone.call(null,bucket__13041);

new_bucket__13046.splice(i__13042,2);
(new_hashobj__13044[h__13039] = new_bucket__13046);
}
return (new cljs.core.HashMap(this__13037.meta,(this__13037.count - 1),new_hashobj__13044));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13107 = ks.length;

var i__13108 = 0;
var out__13109 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13108 < len__13107)))
{{
var G__13111 = (i__13108 + 1);
var G__13112 = cljs.core.assoc.call(null,out__13109,(ks[i__13108]),(vs[i__13108]));
i__13108 = G__13111;
out__13109 = G__13112;
continue;
}
} else
{return out__13109;
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
var in$__13115 = cljs.core.seq.call(null,keyvals);
var out__13118 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13115))
{{
var G__13121 = cljs.core.nnext.call(null,in$__13115);
var G__13122 = cljs.core.assoc.call(null,out__13118,cljs.core.first.call(null,in$__13115),cljs.core.second.call(null,in$__13115));
in$__13115 = G__13121;
out__13118 = G__13122;
continue;
}
} else
{return out__13118;
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
hash_map.cljs$lang$applyTo = (function (arglist__13123){
var keyvals = cljs.core.seq( arglist__13123 );;
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
{return cljs.core.reduce.call(null,(function (p1__13181_SHARP_,p2__13182_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13190 = p1__13181_SHARP_;

if(cljs.core.truth_(or__3548__auto____13190))
{return or__3548__auto____13190;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13182_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13201){
var maps = cljs.core.seq( arglist__13201 );;
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
{var merge_entry__13218 = (function (m,e){
var k__13214 = cljs.core.first.call(null,e);
var v__13215 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13214)))
{return cljs.core.assoc.call(null,m,k__13214,f.call(null,cljs.core.get.call(null,m,k__13214),v__13215));
} else
{return cljs.core.assoc.call(null,m,k__13214,v__13215);
}
});
var merge2__13234 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13218,(function (){var or__3548__auto____13220 = m1;

if(cljs.core.truth_(or__3548__auto____13220))
{return or__3548__auto____13220;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13234,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13302){
var f = cljs.core.first(arglist__13302);
var maps = cljs.core.rest(arglist__13302);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13309 = cljs.core.ObjMap.fromObject([],{});
var keys__13310 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13310))
{var key__13311 = cljs.core.first.call(null,keys__13310);
var entry__13313 = cljs.core.get.call(null,map,key__13311,"﷐'user/not-found");

{
var G__13314 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13313,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13309,key__13311,entry__13313):ret__13309);
var G__13315 = cljs.core.next.call(null,keys__13310);
ret__13309 = G__13314;
keys__13310 = G__13315;
continue;
}
} else
{return ret__13309;
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
var this__13322 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13383 = null;
var G__13383__13384 = (function (coll,v){
var this__13324 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13383__13386 = (function (coll,v,not_found){
var this__13325 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13325.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13383 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13383__13384.call(this,coll,v);
case  3 :
return G__13383__13386.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13383;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13391 = null;
var G__13391__13393 = (function (coll,k){
var this__13326 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13391__13394 = (function (coll,k,not_found){
var this__13327 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13391 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13391__13393.call(this,coll,k);
case  3 :
return G__13391__13394.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13391;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13329 = this;
return (new cljs.core.Set(this__13329.meta,cljs.core.assoc.call(null,this__13329.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13331 = this;
return cljs.core.keys.call(null,this__13331.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13340 = this;
return (new cljs.core.Set(this__13340.meta,cljs.core.dissoc.call(null,this__13340.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13345 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13346 = this;
var and__3546__auto____13350 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13350))
{var and__3546__auto____13352 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13352))
{return cljs.core.every_QMARK_.call(null,(function (p1__13308_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13308_SHARP_);
}),other);
} else
{return and__3546__auto____13352;
}
} else
{return and__3546__auto____13350;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13358 = this;
return (new cljs.core.Set(meta,this__13358.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13360 = this;
return this__13360.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13362 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13362.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13424 = cljs.core.seq.call(null,coll);
var out__13427 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13424))))
{{
var G__13433 = cljs.core.rest.call(null,in$__13424);
var G__13435 = cljs.core.conj.call(null,out__13427,cljs.core.first.call(null,in$__13424));
in$__13424 = G__13433;
out__13427 = G__13435;
continue;
}
} else
{return out__13427;
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
{var n__13441 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13445 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13445))
{var e__13447 = temp__3695__auto____13445;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13447));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13441,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13419_SHARP_){
var temp__3695__auto____13452 = cljs.core.find.call(null,smap,p1__13419_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13452))
{var e__13456 = temp__3695__auto____13452;

return cljs.core.second.call(null,e__13456);
} else
{return p1__13419_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13493 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13469,seen){
while(true){
var vec__13471__13472 = p__13469;
var f__13473 = cljs.core.nth.call(null,vec__13471__13472,0,null);
var xs__13484 = vec__13471__13472;

var temp__3698__auto____13487 = cljs.core.seq.call(null,xs__13484);

if(cljs.core.truth_(temp__3698__auto____13487))
{var s__13488 = temp__3698__auto____13487;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13473)))
{{
var G__13497 = cljs.core.rest.call(null,s__13488);
var G__13498 = seen;
p__13469 = G__13497;
seen = G__13498;
continue;
}
} else
{return cljs.core.cons.call(null,f__13473,step.call(null,cljs.core.rest.call(null,s__13488),cljs.core.conj.call(null,seen,f__13473)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13493.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13504 = cljs.core.Vector.fromArray([]);
var s__13505 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13505)))
{{
var G__13512 = cljs.core.conj.call(null,ret__13504,cljs.core.first.call(null,s__13505));
var G__13514 = cljs.core.next.call(null,s__13505);
ret__13504 = G__13512;
s__13505 = G__13514;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13504);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13519 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13519))
{return or__3548__auto____13519;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13521 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13521 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13521 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13540 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13540))
{return or__3548__auto____13540;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13544 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13544 > -1)))
{return cljs.core.subs.call(null,x,2,i__13544);
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
var map__13558 = cljs.core.ObjMap.fromObject([],{});
var ks__13559 = cljs.core.seq.call(null,keys);
var vs__13560 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13561 = ks__13559;

if(cljs.core.truth_(and__3546__auto____13561))
{return vs__13560;
} else
{return and__3546__auto____13561;
}
})()))
{{
var G__13563 = cljs.core.assoc.call(null,map__13558,cljs.core.first.call(null,ks__13559),cljs.core.first.call(null,vs__13560));
var G__13564 = cljs.core.next.call(null,ks__13559);
var G__13565 = cljs.core.next.call(null,vs__13560);
map__13558 = G__13563;
ks__13559 = G__13564;
vs__13560 = G__13565;
continue;
}
} else
{return map__13558;
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
var max_key__13568 = (function (k,x){
return x;
});
var max_key__13569 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13570 = (function() { 
var G__13573__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13555_SHARP_,p2__13557_SHARP_){
return max_key.call(null,k,p1__13555_SHARP_,p2__13557_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13573 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13573__delegate.call(this, k, x, y, more);
};
G__13573.cljs$lang$maxFixedArity = 3;
G__13573.cljs$lang$applyTo = (function (arglist__13581){
var k = cljs.core.first(arglist__13581);
var x = cljs.core.first(cljs.core.next(arglist__13581));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13581)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13581)));
return G__13573__delegate.call(this, k, x, y, more);
});
return G__13573;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13568.call(this,k,x);
case  3 :
return max_key__13569.call(this,k,x,y);
default:
return max_key__13570.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13570.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13586 = (function (k,x){
return x;
});
var min_key__13587 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13588 = (function() { 
var G__13618__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13566_SHARP_,p2__13567_SHARP_){
return min_key.call(null,k,p1__13566_SHARP_,p2__13567_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13618 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13618__delegate.call(this, k, x, y, more);
};
G__13618.cljs$lang$maxFixedArity = 3;
G__13618.cljs$lang$applyTo = (function (arglist__13622){
var k = cljs.core.first(arglist__13622);
var x = cljs.core.first(cljs.core.next(arglist__13622));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13622)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13622)));
return G__13618__delegate.call(this, k, x, y, more);
});
return G__13618;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13586.call(this,k,x);
case  3 :
return min_key__13587.call(this,k,x,y);
default:
return min_key__13588.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13588.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13627 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13628 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13625 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13625))
{var s__13626 = temp__3698__auto____13625;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13626),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13626)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13627.call(this,n,step);
case  3 :
return partition_all__13628.call(this,n,step,coll);
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
var temp__3698__auto____13635 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13635))
{var s__13637 = temp__3698__auto____13635;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13637))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13637),take_while.call(null,pred,cljs.core.rest.call(null,s__13637)));
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
var this__13661 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13669 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13715 = null;
var G__13715__13716 = (function (rng,f){
var this__13672 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13715__13717 = (function (rng,f,s){
var this__13673 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13715 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13715__13716.call(this,rng,f);
case  3 :
return G__13715__13717.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13715;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13675 = this;
var comp__13677 = (cljs.core.truth_((this__13675.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13677.call(null,this__13675.start,this__13675.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13679 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13679.end - this__13679.start) / this__13679.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13686 = this;
return this__13686.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13688 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13688.meta,(this__13688.start + this__13688.step),this__13688.end,this__13688.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13692 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13693 = this;
return (new cljs.core.Range(meta,this__13693.start,this__13693.end,this__13693.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13695 = this;
return this__13695.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13779 = null;
var G__13779__13780 = (function (rng,n){
var this__13697 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13697.start + (n * this__13697.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13705 = (this__13697.start > this__13697.end);

if(cljs.core.truth_(and__3546__auto____13705))
{return cljs.core._EQ_.call(null,this__13697.step,0);
} else
{return and__3546__auto____13705;
}
})()))
{return this__13697.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13779__13781 = (function (rng,n,not_found){
var this__13706 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13706.start + (n * this__13706.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13707 = (this__13706.start > this__13706.end);

if(cljs.core.truth_(and__3546__auto____13707))
{return cljs.core._EQ_.call(null,this__13706.step,0);
} else
{return and__3546__auto____13707;
}
})()))
{return this__13706.start;
} else
{return not_found;
}
}
});
G__13779 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13779__13780.call(this,rng,n);
case  3 :
return G__13779__13781.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13779;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13708 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13708.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13828 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13829 = (function (end){
return range.call(null,0,end,1);
});
var range__13830 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13831 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13828.call(this);
case  1 :
return range__13829.call(this,start);
case  2 :
return range__13830.call(this,start,end);
case  3 :
return range__13831.call(this,start,end,step);
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
var temp__3698__auto____13863 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13863))
{var s__13864 = temp__3698__auto____13863;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13864),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13864)));
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
var temp__3698__auto____13913 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13913))
{var s__13916 = temp__3698__auto____13913;

var fst__13917 = cljs.core.first.call(null,s__13916);
var fv__13919 = f.call(null,fst__13917);
var run__13921 = cljs.core.cons.call(null,fst__13917,cljs.core.take_while.call(null,(function (p1__13865_SHARP_){
return cljs.core._EQ_.call(null,fv__13919,f.call(null,p1__13865_SHARP_));
}),cljs.core.next.call(null,s__13916)));

return cljs.core.cons.call(null,run__13921,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13921),s__13916))));
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
var reductions__13959 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13949 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13949))
{var s__13952 = temp__3695__auto____13949;

return reductions.call(null,f,cljs.core.first.call(null,s__13952),cljs.core.rest.call(null,s__13952));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13960 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13956 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13956))
{var s__13957 = temp__3698__auto____13956;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13957)),cljs.core.rest.call(null,s__13957));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13959.call(this,f,init);
case  3 :
return reductions__13960.call(this,f,init,coll);
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
var juxt__13996 = (function (f){
return (function() {
var G__14003 = null;
var G__14003__14004 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14003__14005 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14003__14006 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14003__14007 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14003__14008 = (function() { 
var G__14010__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14010 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14010__delegate.call(this, x, y, z, args);
};
G__14010.cljs$lang$maxFixedArity = 3;
G__14010.cljs$lang$applyTo = (function (arglist__14015){
var x = cljs.core.first(arglist__14015);
var y = cljs.core.first(cljs.core.next(arglist__14015));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14015)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14015)));
return G__14010__delegate.call(this, x, y, z, args);
});
return G__14010;
})()
;
G__14003 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14003__14004.call(this);
case  1 :
return G__14003__14005.call(this,x);
case  2 :
return G__14003__14006.call(this,x,y);
case  3 :
return G__14003__14007.call(this,x,y,z);
default:
return G__14003__14008.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14003.cljs$lang$maxFixedArity = 3;
G__14003.cljs$lang$applyTo = G__14003__14008.cljs$lang$applyTo;
return G__14003;
})()
});
var juxt__13998 = (function (f,g){
return (function() {
var G__14019 = null;
var G__14019__14021 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14019__14022 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14019__14023 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14019__14024 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14019__14026 = (function() { 
var G__14032__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14032 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14032__delegate.call(this, x, y, z, args);
};
G__14032.cljs$lang$maxFixedArity = 3;
G__14032.cljs$lang$applyTo = (function (arglist__14036){
var x = cljs.core.first(arglist__14036);
var y = cljs.core.first(cljs.core.next(arglist__14036));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14036)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14036)));
return G__14032__delegate.call(this, x, y, z, args);
});
return G__14032;
})()
;
G__14019 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14019__14021.call(this);
case  1 :
return G__14019__14022.call(this,x);
case  2 :
return G__14019__14023.call(this,x,y);
case  3 :
return G__14019__14024.call(this,x,y,z);
default:
return G__14019__14026.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14019.cljs$lang$maxFixedArity = 3;
G__14019.cljs$lang$applyTo = G__14019__14026.cljs$lang$applyTo;
return G__14019;
})()
});
var juxt__13999 = (function (f,g,h){
return (function() {
var G__14041 = null;
var G__14041__14042 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14041__14043 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14041__14044 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14041__14045 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14041__14046 = (function() { 
var G__14051__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14051 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14051__delegate.call(this, x, y, z, args);
};
G__14051.cljs$lang$maxFixedArity = 3;
G__14051.cljs$lang$applyTo = (function (arglist__14057){
var x = cljs.core.first(arglist__14057);
var y = cljs.core.first(cljs.core.next(arglist__14057));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14057)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14057)));
return G__14051__delegate.call(this, x, y, z, args);
});
return G__14051;
})()
;
G__14041 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14041__14042.call(this);
case  1 :
return G__14041__14043.call(this,x);
case  2 :
return G__14041__14044.call(this,x,y);
case  3 :
return G__14041__14045.call(this,x,y,z);
default:
return G__14041__14046.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14041.cljs$lang$maxFixedArity = 3;
G__14041.cljs$lang$applyTo = G__14041__14046.cljs$lang$applyTo;
return G__14041;
})()
});
var juxt__14000 = (function() { 
var G__14061__delegate = function (f,g,h,fs){
var fs__13977 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14063 = null;
var G__14063__14064 = (function (){
return cljs.core.reduce.call(null,(function (p1__13939_SHARP_,p2__13940_SHARP_){
return cljs.core.conj.call(null,p1__13939_SHARP_,p2__13940_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13977);
});
var G__14063__14065 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13941_SHARP_,p2__13942_SHARP_){
return cljs.core.conj.call(null,p1__13941_SHARP_,p2__13942_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13977);
});
var G__14063__14066 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13943_SHARP_,p2__13944_SHARP_){
return cljs.core.conj.call(null,p1__13943_SHARP_,p2__13944_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13977);
});
var G__14063__14067 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13945_SHARP_,p2__13946_SHARP_){
return cljs.core.conj.call(null,p1__13945_SHARP_,p2__13946_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13977);
});
var G__14063__14068 = (function() { 
var G__14078__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13947_SHARP_,p2__13948_SHARP_){
return cljs.core.conj.call(null,p1__13947_SHARP_,cljs.core.apply.call(null,p2__13948_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13977);
};
var G__14078 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14078__delegate.call(this, x, y, z, args);
};
G__14078.cljs$lang$maxFixedArity = 3;
G__14078.cljs$lang$applyTo = (function (arglist__14086){
var x = cljs.core.first(arglist__14086);
var y = cljs.core.first(cljs.core.next(arglist__14086));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14086)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14086)));
return G__14078__delegate.call(this, x, y, z, args);
});
return G__14078;
})()
;
G__14063 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14063__14064.call(this);
case  1 :
return G__14063__14065.call(this,x);
case  2 :
return G__14063__14066.call(this,x,y);
case  3 :
return G__14063__14067.call(this,x,y,z);
default:
return G__14063__14068.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14063.cljs$lang$maxFixedArity = 3;
G__14063.cljs$lang$applyTo = G__14063__14068.cljs$lang$applyTo;
return G__14063;
})()
};
var G__14061 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14061__delegate.call(this, f, g, h, fs);
};
G__14061.cljs$lang$maxFixedArity = 3;
G__14061.cljs$lang$applyTo = (function (arglist__14096){
var f = cljs.core.first(arglist__14096);
var g = cljs.core.first(cljs.core.next(arglist__14096));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14096)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14096)));
return G__14061__delegate.call(this, f, g, h, fs);
});
return G__14061;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13996.call(this,f);
case  2 :
return juxt__13998.call(this,f,g);
case  3 :
return juxt__13999.call(this,f,g,h);
default:
return juxt__14000.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14000.cljs$lang$applyTo;
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
var dorun__14113 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14118 = cljs.core.next.call(null,coll);
coll = G__14118;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14114 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14104 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14104))
{return (n > 0);
} else
{return and__3546__auto____14104;
}
})()))
{{
var G__14121 = (n - 1);
var G__14122 = cljs.core.next.call(null,coll);
n = G__14121;
coll = G__14122;
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
return dorun__14113.call(this,n);
case  2 :
return dorun__14114.call(this,n,coll);
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
var doall__14133 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14134 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14133.call(this,n);
case  2 :
return doall__14134.call(this,n,coll);
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
var matches__14140 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14140),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14140),1)))
{return cljs.core.first.call(null,matches__14140);
} else
{return cljs.core.vec.call(null,matches__14140);
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
var matches__14154 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14154)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14154),1)))
{return cljs.core.first.call(null,matches__14154);
} else
{return cljs.core.vec.call(null,matches__14154);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14162 = cljs.core.re_find.call(null,re,s);
var match_idx__14164 = s.search(re);
var match_str__14165 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14162))?cljs.core.first.call(null,match_data__14162):match_data__14162);
var post_match__14168 = cljs.core.subs.call(null,s,(match_idx__14164 + cljs.core.count.call(null,match_str__14165)));

if(cljs.core.truth_(match_data__14162))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14162,re_seq.call(null,re,post_match__14168));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14178_SHARP_){
return print_one.call(null,p1__14178_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14200 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14200))
{var and__3546__auto____14209 = (function (){var x__445__auto____14201 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14202 = x__445__auto____14201;

if(cljs.core.truth_(and__3546__auto____14202))
{var and__3546__auto____14203 = x__445__auto____14201.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14203))
{return cljs.core.not.call(null,x__445__auto____14201.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14203;
}
} else
{return and__3546__auto____14202;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14201);
}
})();

if(cljs.core.truth_(and__3546__auto____14209))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14209;
}
} else
{return and__3546__auto____14200;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14216 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14217 = x__445__auto____14216;

if(cljs.core.truth_(and__3546__auto____14217))
{var and__3546__auto____14218 = x__445__auto____14216.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14218))
{return cljs.core.not.call(null,x__445__auto____14216.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14218;
}
} else
{return and__3546__auto____14217;
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
var first_obj__14241 = cljs.core.first.call(null,objs);
var sb__14242 = (new goog.string.StringBuffer());

var G__14243__14246 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14243__14246))
{var obj__14248 = cljs.core.first.call(null,G__14243__14246);
var G__14243__14250 = G__14243__14246;

while(true){
if(cljs.core.truth_((obj__14248 === first_obj__14241)))
{} else
{sb__14242.append(" ");
}
var G__14256__14257 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14248,opts));

if(cljs.core.truth_(G__14256__14257))
{var string__14258 = cljs.core.first.call(null,G__14256__14257);
var G__14256__14259 = G__14256__14257;

while(true){
sb__14242.append(string__14258);
var temp__3698__auto____14265 = cljs.core.next.call(null,G__14256__14259);

if(cljs.core.truth_(temp__3698__auto____14265))
{var G__14256__14266 = temp__3698__auto____14265;

{
var G__14279 = cljs.core.first.call(null,G__14256__14266);
var G__14280 = G__14256__14266;
string__14258 = G__14279;
G__14256__14259 = G__14280;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14268 = cljs.core.next.call(null,G__14243__14250);

if(cljs.core.truth_(temp__3698__auto____14268))
{var G__14243__14269 = temp__3698__auto____14268;

{
var G__14282 = cljs.core.first.call(null,G__14243__14269);
var G__14283 = G__14243__14269;
obj__14248 = G__14282;
G__14243__14250 = G__14283;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14242);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14288 = cljs.core.first.call(null,objs);

var G__14289__14290 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14289__14290))
{var obj__14291 = cljs.core.first.call(null,G__14289__14290);
var G__14289__14293 = G__14289__14290;

while(true){
if(cljs.core.truth_((obj__14291 === first_obj__14288)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14294__14298 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14291,opts));

if(cljs.core.truth_(G__14294__14298))
{var string__14299 = cljs.core.first.call(null,G__14294__14298);
var G__14294__14300 = G__14294__14298;

while(true){
cljs.core.string_print.call(null,string__14299);
var temp__3698__auto____14306 = cljs.core.next.call(null,G__14294__14300);

if(cljs.core.truth_(temp__3698__auto____14306))
{var G__14294__14308 = temp__3698__auto____14306;

{
var G__14315 = cljs.core.first.call(null,G__14294__14308);
var G__14317 = G__14294__14308;
string__14299 = G__14315;
G__14294__14300 = G__14317;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14309 = cljs.core.next.call(null,G__14289__14293);

if(cljs.core.truth_(temp__3698__auto____14309))
{var G__14289__14310 = temp__3698__auto____14309;

{
var G__14323 = cljs.core.first.call(null,G__14289__14310);
var G__14324 = G__14289__14310;
obj__14291 = G__14323;
G__14289__14293 = G__14324;
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
pr_str.cljs$lang$applyTo = (function (arglist__14337){
var objs = cljs.core.seq( arglist__14337 );;
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
pr.cljs$lang$applyTo = (function (arglist__14350){
var objs = cljs.core.seq( arglist__14350 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14355){
var objs = cljs.core.seq( arglist__14355 );;
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
println.cljs$lang$applyTo = (function (arglist__14357){
var objs = cljs.core.seq( arglist__14357 );;
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
prn.cljs$lang$applyTo = (function (arglist__14362){
var objs = cljs.core.seq( arglist__14362 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14390 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14390,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14414 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14414))
{var nspc__14416 = temp__3698__auto____14414;

return cljs.core.str.call(null,nspc__14416,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14420 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14420))
{var nspc__14422 = temp__3698__auto____14420;

return cljs.core.str.call(null,nspc__14422,"/");
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
var pr_pair__14447 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14447,"{",", ","}",opts,coll);
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
var this__14471 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14473 = this;
var G__14474__14475 = cljs.core.seq.call(null,this__14473.watches);

if(cljs.core.truth_(G__14474__14475))
{var G__14478__14480 = cljs.core.first.call(null,G__14474__14475);
var vec__14479__14481 = G__14478__14480;
var key__14482 = cljs.core.nth.call(null,vec__14479__14481,0,null);
var f__14487 = cljs.core.nth.call(null,vec__14479__14481,1,null);
var G__14474__14488 = G__14474__14475;

var G__14478__14489 = G__14478__14480;
var G__14474__14490 = G__14474__14488;

while(true){
var vec__14492__14493 = G__14478__14489;
var key__14496 = cljs.core.nth.call(null,vec__14492__14493,0,null);
var f__14497 = cljs.core.nth.call(null,vec__14492__14493,1,null);
var G__14474__14498 = G__14474__14490;

f__14497.call(null,key__14496,this$,oldval,newval);
var temp__3698__auto____14501 = cljs.core.next.call(null,G__14474__14498);

if(cljs.core.truth_(temp__3698__auto____14501))
{var G__14474__14503 = temp__3698__auto____14501;

{
var G__14535 = cljs.core.first.call(null,G__14474__14503);
var G__14536 = G__14474__14503;
G__14478__14489 = G__14535;
G__14474__14490 = G__14536;
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
var this__14506 = this;
return this$.watches = cljs.core.assoc.call(null,this__14506.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14509 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14509.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14512 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14512.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14514 = this;
return this__14514.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14515 = this;
return this__14515.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14517 = this;
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
var atom__14565 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14566 = (function() { 
var G__14569__delegate = function (x,p__14552){
var map__14553__14555 = p__14552;
var map__14553__14556 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14553__14555))?cljs.core.apply.call(null,cljs.core.hash_map,map__14553__14555):map__14553__14555);
var validator__14558 = cljs.core.get.call(null,map__14553__14556,"﷐'validator");
var meta__14559 = cljs.core.get.call(null,map__14553__14556,"﷐'meta");

return (new cljs.core.Atom(x,meta__14559,validator__14558,null));
};
var G__14569 = function (x,var_args){
var p__14552 = null;
if (goog.isDef(var_args)) {
  p__14552 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14569__delegate.call(this, x, p__14552);
};
G__14569.cljs$lang$maxFixedArity = 1;
G__14569.cljs$lang$applyTo = (function (arglist__14570){
var x = cljs.core.first(arglist__14570);
var p__14552 = cljs.core.rest(arglist__14570);
return G__14569__delegate.call(this, x, p__14552);
});
return G__14569;
})()
;
atom = function(x,var_args){
var p__14552 = var_args;
switch(arguments.length){
case  1 :
return atom__14565.call(this,x);
default:
return atom__14566.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14566.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14646 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14646))
{var validate__14647 = temp__3698__auto____14646;

if(cljs.core.truth_(validate__14647.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14648 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14648,new_value);
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
var swap_BANG___14697 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14698 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14699 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14701 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14702 = (function() { 
var G__14720__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14720 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14720__delegate.call(this, a, f, x, y, z, more);
};
G__14720.cljs$lang$maxFixedArity = 5;
G__14720.cljs$lang$applyTo = (function (arglist__14721){
var a = cljs.core.first(arglist__14721);
var f = cljs.core.first(cljs.core.next(arglist__14721));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14721)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14721))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14721)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14721)))));
return G__14720__delegate.call(this, a, f, x, y, z, more);
});
return G__14720;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14697.call(this,a,f);
case  3 :
return swap_BANG___14698.call(this,a,f,x);
case  4 :
return swap_BANG___14699.call(this,a,f,x,y);
case  5 :
return swap_BANG___14701.call(this,a,f,x,y,z);
default:
return swap_BANG___14702.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14702.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14763){
var iref = cljs.core.first(arglist__14763);
var f = cljs.core.first(cljs.core.next(arglist__14763));
var args = cljs.core.rest(cljs.core.next(arglist__14763));
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
var gensym__14780 = (function (){
return gensym.call(null,"G__");
});
var gensym__14781 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14780.call(this);
case  1 :
return gensym__14781.call(this,prefix_string);
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
var this__14792 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14792.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14794 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14794.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14794.state,this__14794.f);
}
return cljs.core.deref.call(null,this__14794.state);
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
delay.cljs$lang$applyTo = (function (arglist__14802){
var body = cljs.core.seq( arglist__14802 );;
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
var map__14816__14819 = options;
var map__14816__14821 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14816__14819))?cljs.core.apply.call(null,cljs.core.hash_map,map__14816__14819):map__14816__14819);
var keywordize_keys__14822 = cljs.core.get.call(null,map__14816__14821,"﷐'keywordize-keys");
var keyfn__14823 = (cljs.core.truth_(keywordize_keys__14822)?cljs.core.keyword:cljs.core.str);
var f__14835 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14834 = (function iter__14828(s__14829){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14829__14831 = s__14829;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14829__14831)))
{var k__14832 = cljs.core.first.call(null,s__14829__14831);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14823.call(null,k__14832),thisfn.call(null,(x[k__14832]))]),iter__14828.call(null,cljs.core.rest.call(null,s__14829__14831)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14834.call(null,cljs.core.js_keys.call(null,x));
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

return f__14835.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14855){
var x = cljs.core.first(arglist__14855);
var options = cljs.core.rest(arglist__14855);
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
var mem__14856 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14862__delegate = function (args){
var temp__3695__auto____14859 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14856),args);

if(cljs.core.truth_(temp__3695__auto____14859))
{var v__14860 = temp__3695__auto____14859;

return v__14860;
} else
{var ret__14861 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14856,cljs.core.assoc,args,ret__14861);
return ret__14861;
}
};
var G__14862 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14862__delegate.call(this, args);
};
G__14862.cljs$lang$maxFixedArity = 0;
G__14862.cljs$lang$applyTo = (function (arglist__14865){
var args = cljs.core.seq( arglist__14865 );;
return G__14862__delegate.call(this, args);
});
return G__14862;
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
var trampoline__14868 = (function (f){
while(true){
var ret__14867 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14867)))
{{
var G__14872 = ret__14867;
f = G__14872;
continue;
}
} else
{return ret__14867;
}
break;
}
});
var trampoline__14869 = (function() { 
var G__14873__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14873 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14873__delegate.call(this, f, args);
};
G__14873.cljs$lang$maxFixedArity = 1;
G__14873.cljs$lang$applyTo = (function (arglist__14874){
var f = cljs.core.first(arglist__14874);
var args = cljs.core.rest(arglist__14874);
return G__14873__delegate.call(this, f, args);
});
return G__14873;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14868.call(this,f);
default:
return trampoline__14869.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14869.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14875 = (function (){
return rand.call(null,1);
});
var rand__14876 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14875.call(this);
case  1 :
return rand__14876.call(this,n);
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
var k__14882 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14882,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14882,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14906 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14907 = (function (h,child,parent){
var or__3548__auto____14884 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14884))
{return or__3548__auto____14884;
} else
{var or__3548__auto____14885 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14885))
{return or__3548__auto____14885;
} else
{var and__3546__auto____14891 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14891))
{var and__3546__auto____14893 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14893))
{var and__3546__auto____14900 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14900))
{var ret__14901 = true;
var i__14902 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14903 = cljs.core.not.call(null,ret__14901);

if(cljs.core.truth_(or__3548__auto____14903))
{return or__3548__auto____14903;
} else
{return cljs.core._EQ_.call(null,i__14902,cljs.core.count.call(null,parent));
}
})()))
{return ret__14901;
} else
{{
var G__14917 = isa_QMARK_.call(null,h,child.call(null,i__14902),parent.call(null,i__14902));
var G__14918 = (i__14902 + 1);
ret__14901 = G__14917;
i__14902 = G__14918;
continue;
}
}
break;
}
} else
{return and__3546__auto____14900;
}
} else
{return and__3546__auto____14893;
}
} else
{return and__3546__auto____14891;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14906.call(this,h,child);
case  3 :
return isa_QMARK___14907.call(this,h,child,parent);
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
var parents__14929 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14930 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14929.call(this,h);
case  2 :
return parents__14930.call(this,h,tag);
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
var ancestors__14936 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14937 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14936.call(this,h);
case  2 :
return ancestors__14937.call(this,h,tag);
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
var descendants__14951 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14952 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14951.call(this,h);
case  2 :
return descendants__14952.call(this,h,tag);
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
var derive__14998 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14999 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14963 = "﷐'parents".call(null,h);
var td__14994 = "﷐'descendants".call(null,h);
var ta__14995 = "﷐'ancestors".call(null,h);
var tf__14996 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14997 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14963.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14995.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14995.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14963,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14996.call(null,"﷐'ancestors".call(null,h),tag,td__14994,parent,ta__14995),"﷐'descendants":tf__14996.call(null,"﷐'descendants".call(null,h),parent,ta__14995,tag,td__14994)});
})());

if(cljs.core.truth_(or__3548__auto____14997))
{return or__3548__auto____14997;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14998.call(this,h,tag);
case  3 :
return derive__14999.call(this,h,tag,parent);
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
var underive__15027 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15028 = (function (h,tag,parent){
var parentMap__15017 = "﷐'parents".call(null,h);
var childsParents__15019 = (cljs.core.truth_(parentMap__15017.call(null,tag))?cljs.core.disj.call(null,parentMap__15017.call(null,tag),parent):cljs.core.set([]));
var newParents__15021 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15019))?cljs.core.assoc.call(null,parentMap__15017,tag,childsParents__15019):cljs.core.dissoc.call(null,parentMap__15017,tag));
var deriv_seq__15022 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14957_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14957_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14957_SHARP_),cljs.core.second.call(null,p1__14957_SHARP_)));
}),cljs.core.seq.call(null,newParents__15021)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15017.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14959_SHARP_,p2__14960_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14959_SHARP_,p2__14960_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15022));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15027.call(this,h,tag);
case  3 :
return underive__15028.call(this,h,tag,parent);
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
var xprefs__15036 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15038 = (cljs.core.truth_((function (){var and__3546__auto____15037 = xprefs__15036;

if(cljs.core.truth_(and__3546__auto____15037))
{return xprefs__15036.call(null,y);
} else
{return and__3546__auto____15037;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15038))
{return or__3548__auto____15038;
} else
{var or__3548__auto____15040 = (function (){var ps__15039 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15039) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15039),prefer_table)))
{} else
{}
{
var G__15089 = cljs.core.rest.call(null,ps__15039);
ps__15039 = G__15089;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15040))
{return or__3548__auto____15040;
} else
{var or__3548__auto____15084 = (function (){var ps__15041 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15041) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15041),y,prefer_table)))
{} else
{}
{
var G__15090 = cljs.core.rest.call(null,ps__15041);
ps__15041 = G__15090;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15084))
{return or__3548__auto____15084;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15094 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15094))
{return or__3548__auto____15094;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15104 = cljs.core.reduce.call(null,(function (be,p__15096){
var vec__15097__15098 = p__15096;
var k__15099 = cljs.core.nth.call(null,vec__15097__15098,0,null);
var ___15100 = cljs.core.nth.call(null,vec__15097__15098,1,null);
var e__15101 = vec__15097__15098;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15099)))
{var be2__15103 = (cljs.core.truth_((function (){var or__3548__auto____15102 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15102))
{return or__3548__auto____15102;
} else
{return cljs.core.dominates.call(null,k__15099,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15101:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15103),k__15099,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15099," and ",cljs.core.first.call(null,be2__15103),", and neither is preferred")));
}
return be2__15103;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15104))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15104));
return cljs.core.second.call(null,best_entry__15104);
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
if(cljs.core.truth_((function (){var and__3546__auto____15193 = mf;

if(cljs.core.truth_(and__3546__auto____15193))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15193;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15194 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15194))
{return or__3548__auto____15194;
} else
{var or__3548__auto____15195 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15195))
{return or__3548__auto____15195;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15202 = mf;

if(cljs.core.truth_(and__3546__auto____15202))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15202;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15203 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15203))
{return or__3548__auto____15203;
} else
{var or__3548__auto____15204 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15204))
{return or__3548__auto____15204;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15217 = mf;

if(cljs.core.truth_(and__3546__auto____15217))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15217;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15224 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15224))
{return or__3548__auto____15224;
} else
{var or__3548__auto____15227 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15227))
{return or__3548__auto____15227;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15231 = mf;

if(cljs.core.truth_(and__3546__auto____15231))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15231;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15244 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15244))
{return or__3548__auto____15244;
} else
{var or__3548__auto____15245 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15245))
{return or__3548__auto____15245;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15249 = mf;

if(cljs.core.truth_(and__3546__auto____15249))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15249;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15271 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15271))
{return or__3548__auto____15271;
} else
{var or__3548__auto____15272 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15272))
{return or__3548__auto____15272;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15285 = mf;

if(cljs.core.truth_(and__3546__auto____15285))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15285;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15288 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15288))
{return or__3548__auto____15288;
} else
{var or__3548__auto____15299 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15299))
{return or__3548__auto____15299;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15300 = mf;

if(cljs.core.truth_(and__3546__auto____15300))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15300;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15301 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15301))
{return or__3548__auto____15301;
} else
{var or__3548__auto____15303 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15303))
{return or__3548__auto____15303;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15308 = mf;

if(cljs.core.truth_(and__3546__auto____15308))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15308;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15309 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15309))
{return or__3548__auto____15309;
} else
{var or__3548__auto____15311 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15311))
{return or__3548__auto____15311;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15355 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15357 = cljs.core._get_method.call(null,mf,dispatch_val__15355);

if(cljs.core.truth_(target_fn__15357))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15355)));
}
return cljs.core.apply.call(null,target_fn__15357,args);
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
var this__15363 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15370 = this;
cljs.core.swap_BANG_.call(null,this__15370.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15370.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15370.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15370.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15371 = this;
cljs.core.swap_BANG_.call(null,this__15371.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15371.method_cache,this__15371.method_table,this__15371.cached_hierarchy,this__15371.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15372 = this;
cljs.core.swap_BANG_.call(null,this__15372.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15372.method_cache,this__15372.method_table,this__15372.cached_hierarchy,this__15372.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15373 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15373.cached_hierarchy),cljs.core.deref.call(null,this__15373.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15373.method_cache,this__15373.method_table,this__15373.cached_hierarchy,this__15373.hierarchy);
}
var temp__3695__auto____15375 = cljs.core.deref.call(null,this__15373.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15375))
{var target_fn__15376 = temp__3695__auto____15375;

return target_fn__15376;
} else
{var temp__3695__auto____15377 = cljs.core.find_and_cache_best_method.call(null,this__15373.name,dispatch_val,this__15373.hierarchy,this__15373.method_table,this__15373.prefer_table,this__15373.method_cache,this__15373.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15377))
{var target_fn__15378 = temp__3695__auto____15377;

return target_fn__15378;
} else
{return cljs.core.deref.call(null,this__15373.method_table).call(null,this__15373.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15481 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15481.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15481.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15481.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15481.method_cache,this__15481.method_table,this__15481.cached_hierarchy,this__15481.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15487 = this;
return cljs.core.deref.call(null,this__15487.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15492 = this;
return cljs.core.deref.call(null,this__15492.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15493 = this;
return cljs.core.do_dispatch.call(null,mf,this__15493.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15517__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15517 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15517__delegate.call(this, _, args);
};
G__15517.cljs$lang$maxFixedArity = 1;
G__15517.cljs$lang$applyTo = (function (arglist__15518){
var _ = cljs.core.first(arglist__15518);
var args = cljs.core.rest(arglist__15518);
return G__15517__delegate.call(this, _, args);
});
return G__15517;
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
