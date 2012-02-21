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
var or__3548__auto____7368 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7368))
{return or__3548__auto____7368;
} else
{var or__3548__auto____7370 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7370))
{return or__3548__auto____7370;
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
var _invoke__7669 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7401 = this$;

if(cljs.core.truth_(and__3546__auto____7401))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7401;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7404 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7404))
{return or__3548__auto____7404;
} else
{var or__3548__auto____7407 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7407))
{return or__3548__auto____7407;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7671 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7410 = this$;

if(cljs.core.truth_(and__3546__auto____7410))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7410;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7439 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7439))
{return or__3548__auto____7439;
} else
{var or__3548__auto____7442 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7442))
{return or__3548__auto____7442;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7674 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7445 = this$;

if(cljs.core.truth_(and__3546__auto____7445))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7445;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7450 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7450))
{return or__3548__auto____7450;
} else
{var or__3548__auto____7453 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7453))
{return or__3548__auto____7453;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7675 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7456 = this$;

if(cljs.core.truth_(and__3546__auto____7456))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7456;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
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
})().call(null,this$,a,b,c);
}
});
var _invoke__7677 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7469 = this$;

if(cljs.core.truth_(and__3546__auto____7469))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7469;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7473 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7473))
{return or__3548__auto____7473;
} else
{var or__3548__auto____7475 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7475))
{return or__3548__auto____7475;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7680 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7479 = this$;

if(cljs.core.truth_(and__3546__auto____7479))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7479;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7484 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7484))
{return or__3548__auto____7484;
} else
{var or__3548__auto____7486 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7486))
{return or__3548__auto____7486;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7682 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7489 = this$;

if(cljs.core.truth_(and__3546__auto____7489))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7489;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7493 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7493))
{return or__3548__auto____7493;
} else
{var or__3548__auto____7495 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7495))
{return or__3548__auto____7495;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7684 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7499 = this$;

if(cljs.core.truth_(and__3546__auto____7499))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7499;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7503 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7503))
{return or__3548__auto____7503;
} else
{var or__3548__auto____7507 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7507))
{return or__3548__auto____7507;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7685 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7511 = this$;

if(cljs.core.truth_(and__3546__auto____7511))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7511;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7687 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7520 = this$;

if(cljs.core.truth_(and__3546__auto____7520))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7520;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7525 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7525))
{return or__3548__auto____7525;
} else
{var or__3548__auto____7526 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7526))
{return or__3548__auto____7526;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7689 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7530 = this$;

if(cljs.core.truth_(and__3546__auto____7530))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7530;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7536 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7536))
{return or__3548__auto____7536;
} else
{var or__3548__auto____7538 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7538))
{return or__3548__auto____7538;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7691 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7542 = this$;

if(cljs.core.truth_(and__3546__auto____7542))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7542;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7547 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7547))
{return or__3548__auto____7547;
} else
{var or__3548__auto____7549 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7549))
{return or__3548__auto____7549;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7693 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7551 = this$;

if(cljs.core.truth_(and__3546__auto____7551))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7551;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7556 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7556))
{return or__3548__auto____7556;
} else
{var or__3548__auto____7558 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7558))
{return or__3548__auto____7558;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7695 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7564 = this$;

if(cljs.core.truth_(and__3546__auto____7564))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7564;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7584 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7584))
{return or__3548__auto____7584;
} else
{var or__3548__auto____7586 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7586))
{return or__3548__auto____7586;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7697 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7589 = this$;

if(cljs.core.truth_(and__3546__auto____7589))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7589;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7594 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7594))
{return or__3548__auto____7594;
} else
{var or__3548__auto____7596 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7596))
{return or__3548__auto____7596;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7699 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7598 = this$;

if(cljs.core.truth_(and__3546__auto____7598))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7598;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7600 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7600))
{return or__3548__auto____7600;
} else
{var or__3548__auto____7602 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7602))
{return or__3548__auto____7602;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7701 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7605 = this$;

if(cljs.core.truth_(and__3546__auto____7605))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7605;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7620 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7620))
{return or__3548__auto____7620;
} else
{var or__3548__auto____7621 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7621))
{return or__3548__auto____7621;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7703 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7626 = this$;

if(cljs.core.truth_(and__3546__auto____7626))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7626;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7628 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7628))
{return or__3548__auto____7628;
} else
{var or__3548__auto____7639 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7639))
{return or__3548__auto____7639;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7705 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7654 = this$;

if(cljs.core.truth_(and__3546__auto____7654))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7654;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7656 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7656))
{return or__3548__auto____7656;
} else
{var or__3548__auto____7657 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7657))
{return or__3548__auto____7657;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7707 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7660 = this$;

if(cljs.core.truth_(and__3546__auto____7660))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7660;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7661 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7661))
{return or__3548__auto____7661;
} else
{var or__3548__auto____7662 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7662))
{return or__3548__auto____7662;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7710 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7663 = this$;

if(cljs.core.truth_(and__3546__auto____7663))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7663;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7665 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7665))
{return or__3548__auto____7665;
} else
{var or__3548__auto____7667 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7667))
{return or__3548__auto____7667;
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
return _invoke__7669.call(this,this$);
case  2 :
return _invoke__7671.call(this,this$,a);
case  3 :
return _invoke__7674.call(this,this$,a,b);
case  4 :
return _invoke__7675.call(this,this$,a,b,c);
case  5 :
return _invoke__7677.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7680.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7682.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7684.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7685.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7687.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7689.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7691.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7693.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7695.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7697.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7699.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7701.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7703.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7705.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7707.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7710.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7750 = coll;

if(cljs.core.truth_(and__3546__auto____7750))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7750;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7751 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7751))
{return or__3548__auto____7751;
} else
{var or__3548__auto____7752 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7752))
{return or__3548__auto____7752;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7760 = coll;

if(cljs.core.truth_(and__3546__auto____7760))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7760;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7763 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7763))
{return or__3548__auto____7763;
} else
{var or__3548__auto____7764 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7764))
{return or__3548__auto____7764;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7777 = coll;

if(cljs.core.truth_(and__3546__auto____7777))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7777;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7778 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7778))
{return or__3548__auto____7778;
} else
{var or__3548__auto____7779 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7779))
{return or__3548__auto____7779;
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
var _nth__7810 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7788 = coll;

if(cljs.core.truth_(and__3546__auto____7788))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7788;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7792 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7792))
{return or__3548__auto____7792;
} else
{var or__3548__auto____7797 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7797))
{return or__3548__auto____7797;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7811 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7801 = coll;

if(cljs.core.truth_(and__3546__auto____7801))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7801;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7806 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7806))
{return or__3548__auto____7806;
} else
{var or__3548__auto____7807 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7807))
{return or__3548__auto____7807;
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
return _nth__7810.call(this,coll,n);
case  3 :
return _nth__7811.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7820 = coll;

if(cljs.core.truth_(and__3546__auto____7820))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7820;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7825 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7825))
{return or__3548__auto____7825;
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
if(cljs.core.truth_((function (){var and__3546__auto____7832 = coll;

if(cljs.core.truth_(and__3546__auto____7832))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7832;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7833 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7833))
{return or__3548__auto____7833;
} else
{var or__3548__auto____7835 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7835))
{return or__3548__auto____7835;
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
var _lookup__7879 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7844 = o;

if(cljs.core.truth_(and__3546__auto____7844))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7844;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7847 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7847))
{return or__3548__auto____7847;
} else
{var or__3548__auto____7848 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7848))
{return or__3548__auto____7848;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7880 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7853 = o;

if(cljs.core.truth_(and__3546__auto____7853))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7853;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7856 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7856))
{return or__3548__auto____7856;
} else
{var or__3548__auto____7878 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7878))
{return or__3548__auto____7878;
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
return _lookup__7879.call(this,o,k);
case  3 :
return _lookup__7880.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7885 = coll;

if(cljs.core.truth_(and__3546__auto____7885))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7885;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7887 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7887))
{return or__3548__auto____7887;
} else
{var or__3548__auto____7889 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7889))
{return or__3548__auto____7889;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7893 = coll;

if(cljs.core.truth_(and__3546__auto____7893))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7893;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7903 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7903))
{return or__3548__auto____7903;
} else
{var or__3548__auto____7904 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7904))
{return or__3548__auto____7904;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7908 = coll;

if(cljs.core.truth_(and__3546__auto____7908))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7908;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7909 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7909))
{return or__3548__auto____7909;
} else
{var or__3548__auto____7910 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7910))
{return or__3548__auto____7910;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7914 = coll;

if(cljs.core.truth_(and__3546__auto____7914))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7914;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7915 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{var or__3548__auto____7916 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7916))
{return or__3548__auto____7916;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7930 = coll;

if(cljs.core.truth_(and__3546__auto____7930))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7930;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7935 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7935))
{return or__3548__auto____7935;
} else
{var or__3548__auto____7937 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7937))
{return or__3548__auto____7937;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7940 = coll;

if(cljs.core.truth_(and__3546__auto____7940))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7940;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7944 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7944))
{return or__3548__auto____7944;
} else
{var or__3548__auto____7945 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7945))
{return or__3548__auto____7945;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7949 = coll;

if(cljs.core.truth_(and__3546__auto____7949))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7949;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7959 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7959))
{return or__3548__auto____7959;
} else
{var or__3548__auto____7961 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7961))
{return or__3548__auto____7961;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7969 = o;

if(cljs.core.truth_(and__3546__auto____7969))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7969;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7970 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7970))
{return or__3548__auto____7970;
} else
{var or__3548__auto____7972 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7972))
{return or__3548__auto____7972;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7977 = o;

if(cljs.core.truth_(and__3546__auto____7977))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7977;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7981 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7981))
{return or__3548__auto____7981;
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
if(cljs.core.truth_((function (){var and__3546__auto____7992 = o;

if(cljs.core.truth_(and__3546__auto____7992))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7992;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7995 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7995))
{return or__3548__auto____7995;
} else
{var or__3548__auto____7997 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7997))
{return or__3548__auto____7997;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8001 = o;

if(cljs.core.truth_(and__3546__auto____8001))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8001;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8005 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
} else
{var or__3548__auto____8006 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8006))
{return or__3548__auto____8006;
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
if(cljs.core.truth_((function (){var and__3546__auto____8011 = coll;

if(cljs.core.truth_(and__3546__auto____8011))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8011;
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
var _reduce__8024 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8016 = coll;

if(cljs.core.truth_(and__3546__auto____8016))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8016;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8018 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8018))
{return or__3548__auto____8018;
} else
{var or__3548__auto____8019 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
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
return _reduce__8024.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8032 = o;

if(cljs.core.truth_(and__3546__auto____8032))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8032;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8036 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8036))
{return or__3548__auto____8036;
} else
{var or__3548__auto____8039 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8039))
{return or__3548__auto____8039;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8049 = o;

if(cljs.core.truth_(and__3546__auto____8049))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8049;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8051 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8051))
{return or__3548__auto____8051;
} else
{var or__3548__auto____8052 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8052))
{return or__3548__auto____8052;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8055 = o;

if(cljs.core.truth_(and__3546__auto____8055))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8055;
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
{return (function (){var or__3548__auto____8071 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8071))
{return or__3548__auto____8071;
} else
{var or__3548__auto____8073 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8080 = d;

if(cljs.core.truth_(and__3546__auto____8080))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8080;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8081 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8081))
{return or__3548__auto____8081;
} else
{var or__3548__auto____8082 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8082))
{return or__3548__auto____8082;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8087 = this$;

if(cljs.core.truth_(and__3546__auto____8087))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8087;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8091 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8091))
{return or__3548__auto____8091;
} else
{var or__3548__auto____8094 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8094))
{return or__3548__auto____8094;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8097 = this$;

if(cljs.core.truth_(and__3546__auto____8097))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8097;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8098 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8098))
{return or__3548__auto____8098;
} else
{var or__3548__auto____8099 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8099))
{return or__3548__auto____8099;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8103 = this$;

if(cljs.core.truth_(and__3546__auto____8103))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8103;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8108 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8108))
{return or__3548__auto____8108;
} else
{var or__3548__auto____8110 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8110))
{return or__3548__auto____8110;
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
var G__8199 = null;
var G__8199__8201 = (function (o,k){
return null;
});
var G__8199__8202 = (function (o,k,not_found){
return not_found;
});
G__8199 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8199__8201.call(this,o,k);
case  3 :
return G__8199__8202.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8199;
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
var G__8205 = null;
var G__8205__8206 = (function (_,f){
return f.call(null);
});
var G__8205__8207 = (function (_,f,start){
return start;
});
G__8205 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8205__8206.call(this,_,f);
case  3 :
return G__8205__8207.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8205;
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
var G__8221 = null;
var G__8221__8222 = (function (_,n){
return null;
});
var G__8221__8223 = (function (_,n,not_found){
return not_found;
});
G__8221 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8221__8222.call(this,_,n);
case  3 :
return G__8221__8223.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8221;
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
var ci_reduce__8255 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8244 = cljs.core._nth.call(null,cicoll,0);
var n__8245 = 1;

while(true){
if(cljs.core.truth_((n__8245 < cljs.core._count.call(null,cicoll))))
{{
var G__8262 = f.call(null,val__8244,cljs.core._nth.call(null,cicoll,n__8245));
var G__8264 = (n__8245 + 1);
val__8244 = G__8262;
n__8245 = G__8264;
continue;
}
} else
{return val__8244;
}
break;
}
}
});
var ci_reduce__8256 = (function (cicoll,f,val){
var val__8248 = val;
var n__8249 = 0;

while(true){
if(cljs.core.truth_((n__8249 < cljs.core._count.call(null,cicoll))))
{{
var G__8276 = f.call(null,val__8248,cljs.core._nth.call(null,cicoll,n__8249));
var G__8277 = (n__8249 + 1);
val__8248 = G__8276;
n__8249 = G__8277;
continue;
}
} else
{return val__8248;
}
break;
}
});
var ci_reduce__8257 = (function (cicoll,f,val,idx){
var val__8251 = val;
var n__8252 = idx;

while(true){
if(cljs.core.truth_((n__8252 < cljs.core._count.call(null,cicoll))))
{{
var G__8283 = f.call(null,val__8251,cljs.core._nth.call(null,cicoll,n__8252));
var G__8284 = (n__8252 + 1);
val__8251 = G__8283;
n__8252 = G__8284;
continue;
}
} else
{return val__8251;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8255.call(this,cicoll,f);
case  3 :
return ci_reduce__8256.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8257.call(this,cicoll,f,val,idx);
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
var this__8292 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8321 = null;
var G__8321__8322 = (function (_,f){
var this__8294 = this;
return cljs.core.ci_reduce.call(null,this__8294.a,f,(this__8294.a[this__8294.i]),(this__8294.i + 1));
});
var G__8321__8323 = (function (_,f,start){
var this__8296 = this;
return cljs.core.ci_reduce.call(null,this__8296.a,f,start,this__8296.i);
});
G__8321 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8321__8322.call(this,_,f);
case  3 :
return G__8321__8323.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8321;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8299 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8301 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8325 = null;
var G__8325__8326 = (function (coll,n){
var this__8313 = this;
var i__8314 = (n + this__8313.i);

if(cljs.core.truth_((i__8314 < this__8313.a.length)))
{return (this__8313.a[i__8314]);
} else
{return null;
}
});
var G__8325__8327 = (function (coll,n,not_found){
var this__8315 = this;
var i__8316 = (n + this__8315.i);

if(cljs.core.truth_((i__8316 < this__8315.a.length)))
{return (this__8315.a[i__8316]);
} else
{return not_found;
}
});
G__8325 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8325__8326.call(this,coll,n);
case  3 :
return G__8325__8327.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8325;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8317 = this;
return (this__8317.a.length - this__8317.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8318 = this;
return (this__8318.a[this__8318.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8319 = this;
if(cljs.core.truth_(((this__8319.i + 1) < this__8319.a.length)))
{return (new cljs.core.IndexedSeq(this__8319.a,(this__8319.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8320 = this;
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
var G__8350 = null;
var G__8350__8351 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8350__8352 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8350 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8350__8351.call(this,array,f);
case  3 :
return G__8350__8352.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8350;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8358 = null;
var G__8358__8359 = (function (array,k){
return (array[k]);
});
var G__8358__8360 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8358 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8358__8359.call(this,array,k);
case  3 :
return G__8358__8360.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8358;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8365 = null;
var G__8365__8367 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8365__8368 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8365 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8365__8367.call(this,array,n);
case  3 :
return G__8365__8368.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8365;
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
var temp__3698__auto____8378 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8378))
{var s__8379 = temp__3698__auto____8378;

return cljs.core._first.call(null,s__8379);
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
var G__8407 = cljs.core.next.call(null,s);
s = G__8407;
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
var s__8408 = cljs.core.seq.call(null,x);
var n__8409 = 0;

while(true){
if(cljs.core.truth_(s__8408))
{{
var G__8411 = cljs.core.next.call(null,s__8408);
var G__8412 = (n__8409 + 1);
s__8408 = G__8411;
n__8409 = G__8412;
continue;
}
} else
{return n__8409;
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
var conj__8463 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8464 = (function() { 
var G__8467__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8468 = conj.call(null,coll,x);
var G__8469 = cljs.core.first.call(null,xs);
var G__8470 = cljs.core.next.call(null,xs);
coll = G__8468;
x = G__8469;
xs = G__8470;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8467 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8467__delegate.call(this, coll, x, xs);
};
G__8467.cljs$lang$maxFixedArity = 2;
G__8467.cljs$lang$applyTo = (function (arglist__8474){
var coll = cljs.core.first(arglist__8474);
var x = cljs.core.first(cljs.core.next(arglist__8474));
var xs = cljs.core.rest(cljs.core.next(arglist__8474));
return G__8467__delegate.call(this, coll, x, xs);
});
return G__8467;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8463.call(this,coll,x);
default:
return conj__8464.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8464.cljs$lang$applyTo;
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
var nth__8481 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8482 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8481.call(this,coll,n);
case  3 :
return nth__8482.call(this,coll,n,not_found);
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
var get__8484 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8485 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8484.call(this,o,k);
case  3 :
return get__8485.call(this,o,k,not_found);
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
var assoc__8488 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8489 = (function() { 
var G__8491__delegate = function (coll,k,v,kvs){
while(true){
var ret__8487 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8492 = ret__8487;
var G__8493 = cljs.core.first.call(null,kvs);
var G__8494 = cljs.core.second.call(null,kvs);
var G__8495 = cljs.core.nnext.call(null,kvs);
coll = G__8492;
k = G__8493;
v = G__8494;
kvs = G__8495;
continue;
}
} else
{return ret__8487;
}
break;
}
};
var G__8491 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8491__delegate.call(this, coll, k, v, kvs);
};
G__8491.cljs$lang$maxFixedArity = 3;
G__8491.cljs$lang$applyTo = (function (arglist__8496){
var coll = cljs.core.first(arglist__8496);
var k = cljs.core.first(cljs.core.next(arglist__8496));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8496)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8496)));
return G__8491__delegate.call(this, coll, k, v, kvs);
});
return G__8491;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8488.call(this,coll,k,v);
default:
return assoc__8489.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8489.cljs$lang$applyTo;
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
var dissoc__8502 = (function (coll){
return coll;
});
var dissoc__8503 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8504 = (function() { 
var G__8506__delegate = function (coll,k,ks){
while(true){
var ret__8501 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8507 = ret__8501;
var G__8508 = cljs.core.first.call(null,ks);
var G__8509 = cljs.core.next.call(null,ks);
coll = G__8507;
k = G__8508;
ks = G__8509;
continue;
}
} else
{return ret__8501;
}
break;
}
};
var G__8506 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8506__delegate.call(this, coll, k, ks);
};
G__8506.cljs$lang$maxFixedArity = 2;
G__8506.cljs$lang$applyTo = (function (arglist__8510){
var coll = cljs.core.first(arglist__8510);
var k = cljs.core.first(cljs.core.next(arglist__8510));
var ks = cljs.core.rest(cljs.core.next(arglist__8510));
return G__8506__delegate.call(this, coll, k, ks);
});
return G__8506;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8502.call(this,coll);
case  2 :
return dissoc__8503.call(this,coll,k);
default:
return dissoc__8504.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8504.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8523 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8524 = x__445__auto____8523;

if(cljs.core.truth_(and__3546__auto____8524))
{var and__3546__auto____8525 = x__445__auto____8523.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8525))
{return cljs.core.not.call(null,x__445__auto____8523.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8525;
}
} else
{return and__3546__auto____8524;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8523);
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
var disj__8529 = (function (coll){
return coll;
});
var disj__8530 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8531 = (function() { 
var G__8533__delegate = function (coll,k,ks){
while(true){
var ret__8528 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8534 = ret__8528;
var G__8535 = cljs.core.first.call(null,ks);
var G__8536 = cljs.core.next.call(null,ks);
coll = G__8534;
k = G__8535;
ks = G__8536;
continue;
}
} else
{return ret__8528;
}
break;
}
};
var G__8533 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8533__delegate.call(this, coll, k, ks);
};
G__8533.cljs$lang$maxFixedArity = 2;
G__8533.cljs$lang$applyTo = (function (arglist__8537){
var coll = cljs.core.first(arglist__8537);
var k = cljs.core.first(cljs.core.next(arglist__8537));
var ks = cljs.core.rest(cljs.core.next(arglist__8537));
return G__8533__delegate.call(this, coll, k, ks);
});
return G__8533;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8529.call(this,coll);
case  2 :
return disj__8530.call(this,coll,k);
default:
return disj__8531.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8531.cljs$lang$applyTo;
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
{var x__445__auto____8538 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8539 = x__445__auto____8538;

if(cljs.core.truth_(and__3546__auto____8539))
{var and__3546__auto____8540 = x__445__auto____8538.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8540))
{return cljs.core.not.call(null,x__445__auto____8538.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8540;
}
} else
{return and__3546__auto____8539;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8538);
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
{var x__445__auto____8546 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8550 = x__445__auto____8546;

if(cljs.core.truth_(and__3546__auto____8550))
{var and__3546__auto____8551 = x__445__auto____8546.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8551))
{return cljs.core.not.call(null,x__445__auto____8546.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8551;
}
} else
{return and__3546__auto____8550;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8546);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8581 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8582 = x__445__auto____8581;

if(cljs.core.truth_(and__3546__auto____8582))
{var and__3546__auto____8583 = x__445__auto____8581.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8583))
{return cljs.core.not.call(null,x__445__auto____8581.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8583;
}
} else
{return and__3546__auto____8582;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8581);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8589 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8590 = x__445__auto____8589;

if(cljs.core.truth_(and__3546__auto____8590))
{var and__3546__auto____8592 = x__445__auto____8589.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8592))
{return cljs.core.not.call(null,x__445__auto____8589.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8592;
}
} else
{return and__3546__auto____8590;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8589);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8609 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8610 = x__445__auto____8609;

if(cljs.core.truth_(and__3546__auto____8610))
{var and__3546__auto____8611 = x__445__auto____8609.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8611))
{return cljs.core.not.call(null,x__445__auto____8609.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8611;
}
} else
{return and__3546__auto____8610;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8609);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8612 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8613 = x__445__auto____8612;

if(cljs.core.truth_(and__3546__auto____8613))
{var and__3546__auto____8614 = x__445__auto____8612.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8614))
{return cljs.core.not.call(null,x__445__auto____8612.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8614;
}
} else
{return and__3546__auto____8613;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8612);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8635 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8636 = x__445__auto____8635;

if(cljs.core.truth_(and__3546__auto____8636))
{var and__3546__auto____8640 = x__445__auto____8635.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8640))
{return cljs.core.not.call(null,x__445__auto____8635.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8640;
}
} else
{return and__3546__auto____8636;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8635);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8647 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8647.push(key);
}));
return keys__8647;
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
{var x__445__auto____8680 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8683 = x__445__auto____8680;

if(cljs.core.truth_(and__3546__auto____8683))
{var and__3546__auto____8687 = x__445__auto____8680.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8687))
{return cljs.core.not.call(null,x__445__auto____8680.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8687;
}
} else
{return and__3546__auto____8683;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8680);
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
var and__3546__auto____8707 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8707))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8708 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8708))
{return or__3548__auto____8708;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8707;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8709 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8709))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8709;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8711 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8711))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8711;
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
var and__3546__auto____8719 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8719))
{return (n == n.toFixed());
} else
{return and__3546__auto____8719;
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
if(cljs.core.truth_((function (){var and__3546__auto____8730 = coll;

if(cljs.core.truth_(and__3546__auto____8730))
{var and__3546__auto____8731 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8731))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8731;
}
} else
{return and__3546__auto____8730;
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
var distinct_QMARK___8741 = (function (x){
return true;
});
var distinct_QMARK___8742 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8743 = (function() { 
var G__8745__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8734 = cljs.core.set([y,x]);
var xs__8735 = more;

while(true){
var x__8736 = cljs.core.first.call(null,xs__8735);
var etc__8737 = cljs.core.next.call(null,xs__8735);

if(cljs.core.truth_(xs__8735))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8734,x__8736)))
{return false;
} else
{{
var G__8753 = cljs.core.conj.call(null,s__8734,x__8736);
var G__8754 = etc__8737;
s__8734 = G__8753;
xs__8735 = G__8754;
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
var G__8745 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8745__delegate.call(this, x, y, more);
};
G__8745.cljs$lang$maxFixedArity = 2;
G__8745.cljs$lang$applyTo = (function (arglist__8757){
var x = cljs.core.first(arglist__8757);
var y = cljs.core.first(cljs.core.next(arglist__8757));
var more = cljs.core.rest(cljs.core.next(arglist__8757));
return G__8745__delegate.call(this, x, y, more);
});
return G__8745;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8741.call(this,x);
case  2 :
return distinct_QMARK___8742.call(this,x,y);
default:
return distinct_QMARK___8743.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8743.cljs$lang$applyTo;
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
var r__8815 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8815)))
{return r__8815;
} else
{if(cljs.core.truth_(r__8815))
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
var sort__8826 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8827 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8820 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8820,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8820);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8826.call(this,comp);
case  2 :
return sort__8827.call(this,comp,coll);
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
var sort_by__8836 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8837 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8836.call(this,keyfn,comp);
case  3 :
return sort_by__8837.call(this,keyfn,comp,coll);
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
var reduce__8854 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8855 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8854.call(this,f,val);
case  3 :
return reduce__8855.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8880 = (function (f,coll){
var temp__3695__auto____8875 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8875))
{var s__8877 = temp__3695__auto____8875;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8877),cljs.core.next.call(null,s__8877));
} else
{return f.call(null);
}
});
var seq_reduce__8881 = (function (f,val,coll){
var val__8878 = val;
var coll__8879 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8879))
{{
var G__8884 = f.call(null,val__8878,cljs.core.first.call(null,coll__8879));
var G__8885 = cljs.core.next.call(null,coll__8879);
val__8878 = G__8884;
coll__8879 = G__8885;
continue;
}
} else
{return val__8878;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8880.call(this,f,val);
case  3 :
return seq_reduce__8881.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8892 = null;
var G__8892__8893 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8892__8894 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8892 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8892__8893.call(this,coll,f);
case  3 :
return G__8892__8894.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8892;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8900 = (function (){
return 0;
});
var _PLUS___8901 = (function (x){
return x;
});
var _PLUS___8902 = (function (x,y){
return (x + y);
});
var _PLUS___8903 = (function() { 
var G__8905__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8905 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8905__delegate.call(this, x, y, more);
};
G__8905.cljs$lang$maxFixedArity = 2;
G__8905.cljs$lang$applyTo = (function (arglist__8906){
var x = cljs.core.first(arglist__8906);
var y = cljs.core.first(cljs.core.next(arglist__8906));
var more = cljs.core.rest(cljs.core.next(arglist__8906));
return G__8905__delegate.call(this, x, y, more);
});
return G__8905;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8900.call(this);
case  1 :
return _PLUS___8901.call(this,x);
case  2 :
return _PLUS___8902.call(this,x,y);
default:
return _PLUS___8903.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8903.cljs$lang$applyTo;
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
var ___8914 = (function (x){
return (- x);
});
var ___8915 = (function (x,y){
return (x - y);
});
var ___8916 = (function() { 
var G__8919__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8919 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8919__delegate.call(this, x, y, more);
};
G__8919.cljs$lang$maxFixedArity = 2;
G__8919.cljs$lang$applyTo = (function (arglist__8921){
var x = cljs.core.first(arglist__8921);
var y = cljs.core.first(cljs.core.next(arglist__8921));
var more = cljs.core.rest(cljs.core.next(arglist__8921));
return G__8919__delegate.call(this, x, y, more);
});
return G__8919;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8914.call(this,x);
case  2 :
return ___8915.call(this,x,y);
default:
return ___8916.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8916.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8931 = (function (){
return 1;
});
var _STAR___8932 = (function (x){
return x;
});
var _STAR___8933 = (function (x,y){
return (x * y);
});
var _STAR___8934 = (function() { 
var G__8938__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8938 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8938__delegate.call(this, x, y, more);
};
G__8938.cljs$lang$maxFixedArity = 2;
G__8938.cljs$lang$applyTo = (function (arglist__8940){
var x = cljs.core.first(arglist__8940);
var y = cljs.core.first(cljs.core.next(arglist__8940));
var more = cljs.core.rest(cljs.core.next(arglist__8940));
return G__8938__delegate.call(this, x, y, more);
});
return G__8938;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8931.call(this);
case  1 :
return _STAR___8932.call(this,x);
case  2 :
return _STAR___8933.call(this,x,y);
default:
return _STAR___8934.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8934.cljs$lang$applyTo;
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
var _SLASH___8950 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8952 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___8953 = (function() { 
var G__8956__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8956 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8956__delegate.call(this, x, y, more);
};
G__8956.cljs$lang$maxFixedArity = 2;
G__8956.cljs$lang$applyTo = (function (arglist__8960){
var x = cljs.core.first(arglist__8960);
var y = cljs.core.first(cljs.core.next(arglist__8960));
var more = cljs.core.rest(cljs.core.next(arglist__8960));
return G__8956__delegate.call(this, x, y, more);
});
return G__8956;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8950.call(this,x);
case  2 :
return _SLASH___8952.call(this,x,y);
default:
return _SLASH___8953.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8953.cljs$lang$applyTo;
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
var _LT___8971 = (function (x){
return true;
});
var _LT___8972 = (function (x,y){
return (x < y);
});
var _LT___8973 = (function() { 
var G__8975__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8976 = y;
var G__8977 = cljs.core.first.call(null,more);
var G__8978 = cljs.core.next.call(null,more);
x = G__8976;
y = G__8977;
more = G__8978;
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
var G__8975 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8975__delegate.call(this, x, y, more);
};
G__8975.cljs$lang$maxFixedArity = 2;
G__8975.cljs$lang$applyTo = (function (arglist__8979){
var x = cljs.core.first(arglist__8979);
var y = cljs.core.first(cljs.core.next(arglist__8979));
var more = cljs.core.rest(cljs.core.next(arglist__8979));
return G__8975__delegate.call(this, x, y, more);
});
return G__8975;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___8971.call(this,x);
case  2 :
return _LT___8972.call(this,x,y);
default:
return _LT___8973.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___8973.cljs$lang$applyTo;
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
var _LT__EQ___8988 = (function (x){
return true;
});
var _LT__EQ___8991 = (function (x,y){
return (x <= y);
});
var _LT__EQ___8993 = (function() { 
var G__8996__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8998 = y;
var G__8999 = cljs.core.first.call(null,more);
var G__9000 = cljs.core.next.call(null,more);
x = G__8998;
y = G__8999;
more = G__9000;
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
var G__8996 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8996__delegate.call(this, x, y, more);
};
G__8996.cljs$lang$maxFixedArity = 2;
G__8996.cljs$lang$applyTo = (function (arglist__9004){
var x = cljs.core.first(arglist__9004);
var y = cljs.core.first(cljs.core.next(arglist__9004));
var more = cljs.core.rest(cljs.core.next(arglist__9004));
return G__8996__delegate.call(this, x, y, more);
});
return G__8996;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___8988.call(this,x);
case  2 :
return _LT__EQ___8991.call(this,x,y);
default:
return _LT__EQ___8993.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___8993.cljs$lang$applyTo;
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
var _GT___9115 = (function (x){
return true;
});
var _GT___9117 = (function (x,y){
return (x > y);
});
var _GT___9118 = (function() { 
var G__9120__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9123 = y;
var G__9124 = cljs.core.first.call(null,more);
var G__9125 = cljs.core.next.call(null,more);
x = G__9123;
y = G__9124;
more = G__9125;
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
var G__9120 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9120__delegate.call(this, x, y, more);
};
G__9120.cljs$lang$maxFixedArity = 2;
G__9120.cljs$lang$applyTo = (function (arglist__9127){
var x = cljs.core.first(arglist__9127);
var y = cljs.core.first(cljs.core.next(arglist__9127));
var more = cljs.core.rest(cljs.core.next(arglist__9127));
return G__9120__delegate.call(this, x, y, more);
});
return G__9120;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9115.call(this,x);
case  2 :
return _GT___9117.call(this,x,y);
default:
return _GT___9118.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9118.cljs$lang$applyTo;
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
var _GT__EQ___9134 = (function (x){
return true;
});
var _GT__EQ___9135 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9136 = (function() { 
var G__9138__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
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
{return (y >= cljs.core.first.call(null,more));
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
G__9138.cljs$lang$applyTo = (function (arglist__9143){
var x = cljs.core.first(arglist__9143);
var y = cljs.core.first(cljs.core.next(arglist__9143));
var more = cljs.core.rest(cljs.core.next(arglist__9143));
return G__9138__delegate.call(this, x, y, more);
});
return G__9138;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9134.call(this,x);
case  2 :
return _GT__EQ___9135.call(this,x,y);
default:
return _GT__EQ___9136.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9136.cljs$lang$applyTo;
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
var max__9152 = (function (x){
return x;
});
var max__9153 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9154 = (function() { 
var G__9157__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9157 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9157__delegate.call(this, x, y, more);
};
G__9157.cljs$lang$maxFixedArity = 2;
G__9157.cljs$lang$applyTo = (function (arglist__9158){
var x = cljs.core.first(arglist__9158);
var y = cljs.core.first(cljs.core.next(arglist__9158));
var more = cljs.core.rest(cljs.core.next(arglist__9158));
return G__9157__delegate.call(this, x, y, more);
});
return G__9157;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9152.call(this,x);
case  2 :
return max__9153.call(this,x,y);
default:
return max__9154.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9154.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9165 = (function (x){
return x;
});
var min__9166 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9167 = (function() { 
var G__9169__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9169 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9169__delegate.call(this, x, y, more);
};
G__9169.cljs$lang$maxFixedArity = 2;
G__9169.cljs$lang$applyTo = (function (arglist__9170){
var x = cljs.core.first(arglist__9170);
var y = cljs.core.first(cljs.core.next(arglist__9170));
var more = cljs.core.rest(cljs.core.next(arglist__9170));
return G__9169__delegate.call(this, x, y, more);
});
return G__9169;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9165.call(this,x);
case  2 :
return min__9166.call(this,x,y);
default:
return min__9167.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9167.cljs$lang$applyTo;
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
var rem__9179 = (n % d);

return cljs.core.fix.call(null,((n - rem__9179) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9188 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9188));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9192 = (function (){
return Math.random.call(null);
});
var rand__9193 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9192.call(this);
case  1 :
return rand__9193.call(this,n);
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
var _EQ__EQ___9277 = (function (x){
return true;
});
var _EQ__EQ___9278 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9279 = (function() { 
var G__9285__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9287 = y;
var G__9288 = cljs.core.first.call(null,more);
var G__9289 = cljs.core.next.call(null,more);
x = G__9287;
y = G__9288;
more = G__9289;
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
var G__9285 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9285__delegate.call(this, x, y, more);
};
G__9285.cljs$lang$maxFixedArity = 2;
G__9285.cljs$lang$applyTo = (function (arglist__9291){
var x = cljs.core.first(arglist__9291);
var y = cljs.core.first(cljs.core.next(arglist__9291));
var more = cljs.core.rest(cljs.core.next(arglist__9291));
return G__9285__delegate.call(this, x, y, more);
});
return G__9285;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9277.call(this,x);
case  2 :
return _EQ__EQ___9278.call(this,x,y);
default:
return _EQ__EQ___9279.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9279.cljs$lang$applyTo;
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
var n__9299 = n;
var xs__9300 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9302 = xs__9300;

if(cljs.core.truth_(and__3546__auto____9302))
{return (n__9299 > 0);
} else
{return and__3546__auto____9302;
}
})()))
{{
var G__9305 = (n__9299 - 1);
var G__9306 = cljs.core.next.call(null,xs__9300);
n__9299 = G__9305;
xs__9300 = G__9306;
continue;
}
} else
{return xs__9300;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9323 = null;
var G__9323__9324 = (function (coll,n){
var temp__3695__auto____9309 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9309))
{var xs__9311 = temp__3695__auto____9309;

return cljs.core.first.call(null,xs__9311);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9323__9325 = (function (coll,n,not_found){
var temp__3695__auto____9314 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9314))
{var xs__9315 = temp__3695__auto____9314;

return cljs.core.first.call(null,xs__9315);
} else
{return not_found;
}
});
G__9323 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9323__9324.call(this,coll,n);
case  3 :
return G__9323__9325.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9323;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9331 = (function (){
return "";
});
var str_STAR___9332 = (function (x){
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
var str_STAR___9333 = (function() { 
var G__9335__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9336 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9337 = cljs.core.next.call(null,more);
sb = G__9336;
more = G__9337;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9335 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9335__delegate.call(this, x, ys);
};
G__9335.cljs$lang$maxFixedArity = 1;
G__9335.cljs$lang$applyTo = (function (arglist__9343){
var x = cljs.core.first(arglist__9343);
var ys = cljs.core.rest(arglist__9343);
return G__9335__delegate.call(this, x, ys);
});
return G__9335;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9331.call(this);
case  1 :
return str_STAR___9332.call(this,x);
default:
return str_STAR___9333.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9333.cljs$lang$applyTo;
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
var str__9354 = (function (){
return "";
});
var str__9355 = (function (x){
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
var str__9357 = (function() { 
var G__9400__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9400 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9400__delegate.call(this, x, ys);
};
G__9400.cljs$lang$maxFixedArity = 1;
G__9400.cljs$lang$applyTo = (function (arglist__9401){
var x = cljs.core.first(arglist__9401);
var ys = cljs.core.rest(arglist__9401);
return G__9400__delegate.call(this, x, ys);
});
return G__9400;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9354.call(this);
case  1 :
return str__9355.call(this,x);
default:
return str__9357.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9357.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9414 = (function (s,start){
return s.substring(start);
});
var subs__9415 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9414.call(this,s,start);
case  3 :
return subs__9415.call(this,s,start,end);
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
var symbol__9425 = (function (name){
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
var symbol__9426 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9425.call(this,ns);
case  2 :
return symbol__9426.call(this,ns,name);
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
var keyword__9433 = (function (name){
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
var keyword__9434 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9433.call(this,ns);
case  2 :
return keyword__9434.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9444 = cljs.core.seq.call(null,x);
var ys__9446 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9444)))
{return cljs.core.nil_QMARK_.call(null,ys__9446);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9446)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9444),cljs.core.first.call(null,ys__9446))))
{{
var G__9452 = cljs.core.next.call(null,xs__9444);
var G__9453 = cljs.core.next.call(null,ys__9446);
xs__9444 = G__9452;
ys__9446 = G__9453;
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
return cljs.core.reduce.call(null,(function (p1__9454_SHARP_,p2__9455_SHARP_){
return cljs.core.hash_combine.call(null,p1__9454_SHARP_,cljs.core.hash.call(null,p2__9455_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9507__9509 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9507__9509))
{var G__9608__9610 = cljs.core.first.call(null,G__9507__9509);
var vec__9609__9611 = G__9608__9610;
var key_name__9612 = cljs.core.nth.call(null,vec__9609__9611,0,null);
var f__9613 = cljs.core.nth.call(null,vec__9609__9611,1,null);
var G__9507__9614 = G__9507__9509;

var G__9608__9615 = G__9608__9610;
var G__9507__9617 = G__9507__9614;

while(true){
var vec__9618__9619 = G__9608__9615;
var key_name__9621 = cljs.core.nth.call(null,vec__9618__9619,0,null);
var f__9622 = cljs.core.nth.call(null,vec__9618__9619,1,null);
var G__9507__9623 = G__9507__9617;

var str_name__9629 = cljs.core.name.call(null,key_name__9621);

obj[str_name__9629] = f__9622;
var temp__3698__auto____9631 = cljs.core.next.call(null,G__9507__9623);

if(cljs.core.truth_(temp__3698__auto____9631))
{var G__9507__9632 = temp__3698__auto____9631;

{
var G__9641 = cljs.core.first.call(null,G__9507__9632);
var G__9642 = G__9507__9632;
G__9608__9615 = G__9641;
G__9507__9617 = G__9642;
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
var this__9663 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9664 = this;
return (new cljs.core.List(this__9664.meta,o,coll,(this__9664.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9669 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9671 = this;
return this__9671.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9675 = this;
return this__9675.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9677 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9680 = this;
return this__9680.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9681 = this;
return this__9681.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9682 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9683 = this;
return (new cljs.core.List(meta,this__9683.first,this__9683.rest,this__9683.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9684 = this;
return this__9684.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9685 = this;
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
var this__9752 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9753 = this;
return (new cljs.core.List(this__9753.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9754 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9755 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9756 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9757 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9760 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9765 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9768 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9770 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9772 = this;
return this__9772.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9773 = this;
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
list.cljs$lang$applyTo = (function (arglist__9794){
var items = cljs.core.seq( arglist__9794 );;
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
var this__9834 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9836 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9839 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9842 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9842.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9844 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9860 = this;
return this__9860.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9861 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9861.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9861.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9864 = this;
return this__9864.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9866 = this;
return (new cljs.core.Cons(meta,this__9866.first,this__9866.rest));
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
var G__9970 = null;
var G__9970__9971 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9970__9972 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9970 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9970__9971.call(this,string,f);
case  3 :
return G__9970__9972.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9970;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9974 = null;
var G__9974__9975 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9974__9976 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9974 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9974__9975.call(this,string,k);
case  3 :
return G__9974__9976.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9974;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9978 = null;
var G__9978__9979 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9978__9980 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9978 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9978__9979.call(this,string,n);
case  3 :
return G__9978__9980.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9978;
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
var G__9983 = null;
var G__9983__9984 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9983__9985 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9983 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9983__9984.call(this,this$,coll);
case  3 :
return G__9983__9985.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9983;
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
var x__10019 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10019;
} else
{lazy_seq.x = x__10019.call(null);
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
var this__10022 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10027 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10028 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10029 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10029.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10031 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10033 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10034 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10036 = this;
return this__10036.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10038 = this;
return (new cljs.core.LazySeq(meta,this__10038.realized,this__10038.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10105 = cljs.core.array.call(null);

var s__10106 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10106)))
{ary__10105.push(cljs.core.first.call(null,s__10106));
{
var G__10110 = cljs.core.next.call(null,s__10106);
s__10106 = G__10110;
continue;
}
} else
{return ary__10105;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10113 = s;
var i__10114 = n;
var sum__10115 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10116 = (i__10114 > 0);

if(cljs.core.truth_(and__3546__auto____10116))
{return cljs.core.seq.call(null,s__10113);
} else
{return and__3546__auto____10116;
}
})()))
{{
var G__10119 = cljs.core.next.call(null,s__10113);
var G__10120 = (i__10114 - 1);
var G__10121 = (sum__10115 + 1);
s__10113 = G__10119;
i__10114 = G__10120;
sum__10115 = G__10121;
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
var concat__10162 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10163 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10164 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10147 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10147))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10147),concat.call(null,cljs.core.rest.call(null,s__10147),y));
} else
{return y;
}
})));
});
var concat__10165 = (function() { 
var G__10169__delegate = function (x,y,zs){
var cat__10158 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10154 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10154))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10154),cat.call(null,cljs.core.rest.call(null,xys__10154),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10158.call(null,concat.call(null,x,y),zs);
};
var G__10169 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10169__delegate.call(this, x, y, zs);
};
G__10169.cljs$lang$maxFixedArity = 2;
G__10169.cljs$lang$applyTo = (function (arglist__10170){
var x = cljs.core.first(arglist__10170);
var y = cljs.core.first(cljs.core.next(arglist__10170));
var zs = cljs.core.rest(cljs.core.next(arglist__10170));
return G__10169__delegate.call(this, x, y, zs);
});
return G__10169;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10162.call(this);
case  1 :
return concat__10163.call(this,x);
case  2 :
return concat__10164.call(this,x,y);
default:
return concat__10165.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10165.cljs$lang$applyTo;
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
var list_STAR___10184 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10187 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10188 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10189 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10190 = (function() { 
var G__10211__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10211 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10211__delegate.call(this, a, b, c, d, more);
};
G__10211.cljs$lang$maxFixedArity = 4;
G__10211.cljs$lang$applyTo = (function (arglist__10213){
var a = cljs.core.first(arglist__10213);
var b = cljs.core.first(cljs.core.next(arglist__10213));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10213)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10213))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10213))));
return G__10211__delegate.call(this, a, b, c, d, more);
});
return G__10211;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10184.call(this,a);
case  2 :
return list_STAR___10187.call(this,a,b);
case  3 :
return list_STAR___10188.call(this,a,b,c);
case  4 :
return list_STAR___10189.call(this,a,b,c,d);
default:
return list_STAR___10190.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10190.cljs$lang$applyTo;
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
var apply__10255 = (function (f,args){
var fixed_arity__10214 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10214 + 1)) <= fixed_arity__10214)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10256 = (function (f,x,args){
var arglist__10215 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10216 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10215,fixed_arity__10216) <= fixed_arity__10216)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10215));
} else
{return f.cljs$lang$applyTo(arglist__10215);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10215));
}
});
var apply__10257 = (function (f,x,y,args){
var arglist__10223 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10224 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10223,fixed_arity__10224) <= fixed_arity__10224)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10223));
} else
{return f.cljs$lang$applyTo(arglist__10223);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10223));
}
});
var apply__10258 = (function (f,x,y,z,args){
var arglist__10229 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10230 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10229,fixed_arity__10230) <= fixed_arity__10230)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10229));
} else
{return f.cljs$lang$applyTo(arglist__10229);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10229));
}
});
var apply__10259 = (function() { 
var G__10274__delegate = function (f,a,b,c,d,args){
var arglist__10238 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10240 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10238,fixed_arity__10240) <= fixed_arity__10240)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10238));
} else
{return f.cljs$lang$applyTo(arglist__10238);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10238));
}
};
var G__10274 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10274__delegate.call(this, f, a, b, c, d, args);
};
G__10274.cljs$lang$maxFixedArity = 5;
G__10274.cljs$lang$applyTo = (function (arglist__10277){
var f = cljs.core.first(arglist__10277);
var a = cljs.core.first(cljs.core.next(arglist__10277));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10277)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10277))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10277)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10277)))));
return G__10274__delegate.call(this, f, a, b, c, d, args);
});
return G__10274;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10255.call(this,f,a);
case  3 :
return apply__10256.call(this,f,a,b);
case  4 :
return apply__10257.call(this,f,a,b,c);
case  5 :
return apply__10258.call(this,f,a,b,c,d);
default:
return apply__10259.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10259.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10284){
var obj = cljs.core.first(arglist__10284);
var f = cljs.core.first(cljs.core.next(arglist__10284));
var args = cljs.core.rest(cljs.core.next(arglist__10284));
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
var not_EQ___10286 = (function (x){
return false;
});
var not_EQ___10287 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10288 = (function() { 
var G__10290__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10290 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10290__delegate.call(this, x, y, more);
};
G__10290.cljs$lang$maxFixedArity = 2;
G__10290.cljs$lang$applyTo = (function (arglist__10292){
var x = cljs.core.first(arglist__10292);
var y = cljs.core.first(cljs.core.next(arglist__10292));
var more = cljs.core.rest(cljs.core.next(arglist__10292));
return G__10290__delegate.call(this, x, y, more);
});
return G__10290;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10286.call(this,x);
case  2 :
return not_EQ___10287.call(this,x,y);
default:
return not_EQ___10288.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10288.cljs$lang$applyTo;
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
var G__10317 = pred;
var G__10318 = cljs.core.next.call(null,coll);
pred = G__10317;
coll = G__10318;
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
{var or__3548__auto____10326 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10326))
{return or__3548__auto____10326;
} else
{{
var G__10327 = pred;
var G__10328 = cljs.core.next.call(null,coll);
pred = G__10327;
coll = G__10328;
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
var G__10338 = null;
var G__10338__10339 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10338__10340 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10338__10341 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10338__10342 = (function() { 
var G__10344__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10344 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10344__delegate.call(this, x, y, zs);
};
G__10344.cljs$lang$maxFixedArity = 2;
G__10344.cljs$lang$applyTo = (function (arglist__10345){
var x = cljs.core.first(arglist__10345);
var y = cljs.core.first(cljs.core.next(arglist__10345));
var zs = cljs.core.rest(cljs.core.next(arglist__10345));
return G__10344__delegate.call(this, x, y, zs);
});
return G__10344;
})()
;
G__10338 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10338__10339.call(this);
case  1 :
return G__10338__10340.call(this,x);
case  2 :
return G__10338__10341.call(this,x,y);
default:
return G__10338__10342.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10338.cljs$lang$maxFixedArity = 2;
G__10338.cljs$lang$applyTo = G__10338__10342.cljs$lang$applyTo;
return G__10338;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10348__delegate = function (args){
return x;
};
var G__10348 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10348__delegate.call(this, args);
};
G__10348.cljs$lang$maxFixedArity = 0;
G__10348.cljs$lang$applyTo = (function (arglist__10350){
var args = cljs.core.seq( arglist__10350 );;
return G__10348__delegate.call(this, args);
});
return G__10348;
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
var comp__10377 = (function (){
return cljs.core.identity;
});
var comp__10378 = (function (f){
return f;
});
var comp__10379 = (function (f,g){
return (function() {
var G__10386 = null;
var G__10386__10388 = (function (){
return f.call(null,g.call(null));
});
var G__10386__10389 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10386__10390 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10386__10391 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10386__10392 = (function() { 
var G__10394__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10394 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10394__delegate.call(this, x, y, z, args);
};
G__10394.cljs$lang$maxFixedArity = 3;
G__10394.cljs$lang$applyTo = (function (arglist__10395){
var x = cljs.core.first(arglist__10395);
var y = cljs.core.first(cljs.core.next(arglist__10395));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10395)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10395)));
return G__10394__delegate.call(this, x, y, z, args);
});
return G__10394;
})()
;
G__10386 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10386__10388.call(this);
case  1 :
return G__10386__10389.call(this,x);
case  2 :
return G__10386__10390.call(this,x,y);
case  3 :
return G__10386__10391.call(this,x,y,z);
default:
return G__10386__10392.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10386.cljs$lang$maxFixedArity = 3;
G__10386.cljs$lang$applyTo = G__10386__10392.cljs$lang$applyTo;
return G__10386;
})()
});
var comp__10380 = (function (f,g,h){
return (function() {
var G__10402 = null;
var G__10402__10403 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10402__10404 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10402__10405 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10402__10406 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10402__10407 = (function() { 
var G__10411__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10411 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10411__delegate.call(this, x, y, z, args);
};
G__10411.cljs$lang$maxFixedArity = 3;
G__10411.cljs$lang$applyTo = (function (arglist__10416){
var x = cljs.core.first(arglist__10416);
var y = cljs.core.first(cljs.core.next(arglist__10416));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10416)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10416)));
return G__10411__delegate.call(this, x, y, z, args);
});
return G__10411;
})()
;
G__10402 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10402__10403.call(this);
case  1 :
return G__10402__10404.call(this,x);
case  2 :
return G__10402__10405.call(this,x,y);
case  3 :
return G__10402__10406.call(this,x,y,z);
default:
return G__10402__10407.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10402.cljs$lang$maxFixedArity = 3;
G__10402.cljs$lang$applyTo = G__10402__10407.cljs$lang$applyTo;
return G__10402;
})()
});
var comp__10381 = (function() { 
var G__10419__delegate = function (f1,f2,f3,fs){
var fs__10366 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10422__delegate = function (args){
var ret__10368 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10366),args);
var fs__10372 = cljs.core.next.call(null,fs__10366);

while(true){
if(cljs.core.truth_(fs__10372))
{{
var G__10425 = cljs.core.first.call(null,fs__10372).call(null,ret__10368);
var G__10427 = cljs.core.next.call(null,fs__10372);
ret__10368 = G__10425;
fs__10372 = G__10427;
continue;
}
} else
{return ret__10368;
}
break;
}
};
var G__10422 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10422__delegate.call(this, args);
};
G__10422.cljs$lang$maxFixedArity = 0;
G__10422.cljs$lang$applyTo = (function (arglist__10430){
var args = cljs.core.seq( arglist__10430 );;
return G__10422__delegate.call(this, args);
});
return G__10422;
})()
;
};
var G__10419 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10419__delegate.call(this, f1, f2, f3, fs);
};
G__10419.cljs$lang$maxFixedArity = 3;
G__10419.cljs$lang$applyTo = (function (arglist__10431){
var f1 = cljs.core.first(arglist__10431);
var f2 = cljs.core.first(cljs.core.next(arglist__10431));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10431)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10431)));
return G__10419__delegate.call(this, f1, f2, f3, fs);
});
return G__10419;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10377.call(this);
case  1 :
return comp__10378.call(this,f1);
case  2 :
return comp__10379.call(this,f1,f2);
case  3 :
return comp__10380.call(this,f1,f2,f3);
default:
return comp__10381.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10381.cljs$lang$applyTo;
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
var partial__10443 = (function (f,arg1){
return (function() { 
var G__10449__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10449 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10449__delegate.call(this, args);
};
G__10449.cljs$lang$maxFixedArity = 0;
G__10449.cljs$lang$applyTo = (function (arglist__10456){
var args = cljs.core.seq( arglist__10456 );;
return G__10449__delegate.call(this, args);
});
return G__10449;
})()
;
});
var partial__10444 = (function (f,arg1,arg2){
return (function() { 
var G__10459__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10459 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10459__delegate.call(this, args);
};
G__10459.cljs$lang$maxFixedArity = 0;
G__10459.cljs$lang$applyTo = (function (arglist__10460){
var args = cljs.core.seq( arglist__10460 );;
return G__10459__delegate.call(this, args);
});
return G__10459;
})()
;
});
var partial__10445 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10462__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10462 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10462__delegate.call(this, args);
};
G__10462.cljs$lang$maxFixedArity = 0;
G__10462.cljs$lang$applyTo = (function (arglist__10463){
var args = cljs.core.seq( arglist__10463 );;
return G__10462__delegate.call(this, args);
});
return G__10462;
})()
;
});
var partial__10446 = (function() { 
var G__10465__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10466__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10466 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10466__delegate.call(this, args);
};
G__10466.cljs$lang$maxFixedArity = 0;
G__10466.cljs$lang$applyTo = (function (arglist__10481){
var args = cljs.core.seq( arglist__10481 );;
return G__10466__delegate.call(this, args);
});
return G__10466;
})()
;
};
var G__10465 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10465__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10465.cljs$lang$maxFixedArity = 4;
G__10465.cljs$lang$applyTo = (function (arglist__10482){
var f = cljs.core.first(arglist__10482);
var arg1 = cljs.core.first(cljs.core.next(arglist__10482));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10482)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10482))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10482))));
return G__10465__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10465;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10443.call(this,f,arg1);
case  3 :
return partial__10444.call(this,f,arg1,arg2);
case  4 :
return partial__10445.call(this,f,arg1,arg2,arg3);
default:
return partial__10446.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10446.cljs$lang$applyTo;
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
var fnil__10519 = (function (f,x){
return (function() {
var G__10523 = null;
var G__10523__10524 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10523__10525 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10523__10526 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10523__10527 = (function() { 
var G__10529__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10529 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10529__delegate.call(this, a, b, c, ds);
};
G__10529.cljs$lang$maxFixedArity = 3;
G__10529.cljs$lang$applyTo = (function (arglist__10531){
var a = cljs.core.first(arglist__10531);
var b = cljs.core.first(cljs.core.next(arglist__10531));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10531)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10531)));
return G__10529__delegate.call(this, a, b, c, ds);
});
return G__10529;
})()
;
G__10523 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10523__10524.call(this,a);
case  2 :
return G__10523__10525.call(this,a,b);
case  3 :
return G__10523__10526.call(this,a,b,c);
default:
return G__10523__10527.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10523.cljs$lang$maxFixedArity = 3;
G__10523.cljs$lang$applyTo = G__10523__10527.cljs$lang$applyTo;
return G__10523;
})()
});
var fnil__10520 = (function (f,x,y){
return (function() {
var G__10532 = null;
var G__10532__10533 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10532__10534 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10532__10535 = (function() { 
var G__10537__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10537 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10537__delegate.call(this, a, b, c, ds);
};
G__10537.cljs$lang$maxFixedArity = 3;
G__10537.cljs$lang$applyTo = (function (arglist__10538){
var a = cljs.core.first(arglist__10538);
var b = cljs.core.first(cljs.core.next(arglist__10538));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10538)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10538)));
return G__10537__delegate.call(this, a, b, c, ds);
});
return G__10537;
})()
;
G__10532 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10532__10533.call(this,a,b);
case  3 :
return G__10532__10534.call(this,a,b,c);
default:
return G__10532__10535.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10532.cljs$lang$maxFixedArity = 3;
G__10532.cljs$lang$applyTo = G__10532__10535.cljs$lang$applyTo;
return G__10532;
})()
});
var fnil__10521 = (function (f,x,y,z){
return (function() {
var G__10539 = null;
var G__10539__10540 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10539__10541 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10539__10542 = (function() { 
var G__10544__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10544 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10544__delegate.call(this, a, b, c, ds);
};
G__10544.cljs$lang$maxFixedArity = 3;
G__10544.cljs$lang$applyTo = (function (arglist__10545){
var a = cljs.core.first(arglist__10545);
var b = cljs.core.first(cljs.core.next(arglist__10545));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10545)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10545)));
return G__10544__delegate.call(this, a, b, c, ds);
});
return G__10544;
})()
;
G__10539 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10539__10540.call(this,a,b);
case  3 :
return G__10539__10541.call(this,a,b,c);
default:
return G__10539__10542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10539.cljs$lang$maxFixedArity = 3;
G__10539.cljs$lang$applyTo = G__10539__10542.cljs$lang$applyTo;
return G__10539;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10519.call(this,f,x);
case  3 :
return fnil__10520.call(this,f,x,y);
case  4 :
return fnil__10521.call(this,f,x,y,z);
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
var mapi__10555 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10551 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10551))
{var s__10552 = temp__3698__auto____10551;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10552)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10552)));
} else
{return null;
}
})));
});

return mapi__10555.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10558 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10558))
{var s__10559 = temp__3698__auto____10558;

var x__10560 = f.call(null,cljs.core.first.call(null,s__10559));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10560)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10559));
} else
{return cljs.core.cons.call(null,x__10560,keep.call(null,f,cljs.core.rest.call(null,s__10559)));
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
var keepi__10705 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10702 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10702))
{var s__10703 = temp__3698__auto____10702;

var x__10704 = f.call(null,idx,cljs.core.first.call(null,s__10703));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10704)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10703));
} else
{return cljs.core.cons.call(null,x__10704,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10703)));
}
} else
{return null;
}
})));
});

return keepi__10705.call(null,0,coll);
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
var every_pred__10914 = (function (p){
return (function() {
var ep1 = null;
var ep1__10952 = (function (){
return true;
});
var ep1__10953 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10954 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10787 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10787))
{return p.call(null,y);
} else
{return and__3546__auto____10787;
}
})());
});
var ep1__10955 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10790 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10790))
{var and__3546__auto____10791 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10791))
{return p.call(null,z);
} else
{return and__3546__auto____10791;
}
} else
{return and__3546__auto____10790;
}
})());
});
var ep1__10956 = (function() { 
var G__10959__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10798 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10798))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10798;
}
})());
};
var G__10959 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10959__delegate.call(this, x, y, z, args);
};
G__10959.cljs$lang$maxFixedArity = 3;
G__10959.cljs$lang$applyTo = (function (arglist__10961){
var x = cljs.core.first(arglist__10961);
var y = cljs.core.first(cljs.core.next(arglist__10961));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10961)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10961)));
return G__10959__delegate.call(this, x, y, z, args);
});
return G__10959;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10952.call(this);
case  1 :
return ep1__10953.call(this,x);
case  2 :
return ep1__10954.call(this,x,y);
case  3 :
return ep1__10955.call(this,x,y,z);
default:
return ep1__10956.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10956.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10915 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10965 = (function (){
return true;
});
var ep2__10966 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10806 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10806))
{return p2.call(null,x);
} else
{return and__3546__auto____10806;
}
})());
});
var ep2__10967 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10809 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10809))
{var and__3546__auto____10812 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10812))
{var and__3546__auto____10814 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10814))
{return p2.call(null,y);
} else
{return and__3546__auto____10814;
}
} else
{return and__3546__auto____10812;
}
} else
{return and__3546__auto____10809;
}
})());
});
var ep2__10968 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10818 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10818))
{var and__3546__auto____10821 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10821))
{var and__3546__auto____10823 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10823))
{var and__3546__auto____10824 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10824))
{var and__3546__auto____10827 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10827))
{return p2.call(null,z);
} else
{return and__3546__auto____10827;
}
} else
{return and__3546__auto____10824;
}
} else
{return and__3546__auto____10823;
}
} else
{return and__3546__auto____10821;
}
} else
{return and__3546__auto____10818;
}
})());
});
var ep2__10969 = (function() { 
var G__11030__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10829 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10829))
{return cljs.core.every_QMARK_.call(null,(function (p1__10566_SHARP_){
var and__3546__auto____10831 = p1.call(null,p1__10566_SHARP_);

if(cljs.core.truth_(and__3546__auto____10831))
{return p2.call(null,p1__10566_SHARP_);
} else
{return and__3546__auto____10831;
}
}),args);
} else
{return and__3546__auto____10829;
}
})());
};
var G__11030 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11030__delegate.call(this, x, y, z, args);
};
G__11030.cljs$lang$maxFixedArity = 3;
G__11030.cljs$lang$applyTo = (function (arglist__11034){
var x = cljs.core.first(arglist__11034);
var y = cljs.core.first(cljs.core.next(arglist__11034));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11034)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11034)));
return G__11030__delegate.call(this, x, y, z, args);
});
return G__11030;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10965.call(this);
case  1 :
return ep2__10966.call(this,x);
case  2 :
return ep2__10967.call(this,x,y);
case  3 :
return ep2__10968.call(this,x,y,z);
default:
return ep2__10969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10969.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10949 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11035 = (function (){
return true;
});
var ep3__11037 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10834 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10834))
{var and__3546__auto____10840 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10840))
{return p3.call(null,x);
} else
{return and__3546__auto____10840;
}
} else
{return and__3546__auto____10834;
}
})());
});
var ep3__11039 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10841 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10841))
{var and__3546__auto____10848 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10848))
{var and__3546__auto____10849 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10849))
{var and__3546__auto____10851 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10851))
{var and__3546__auto____10852 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10852))
{return p3.call(null,y);
} else
{return and__3546__auto____10852;
}
} else
{return and__3546__auto____10851;
}
} else
{return and__3546__auto____10849;
}
} else
{return and__3546__auto____10848;
}
} else
{return and__3546__auto____10841;
}
})());
});
var ep3__11041 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10855 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10855))
{var and__3546__auto____10857 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10857))
{var and__3546__auto____10859 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10859))
{var and__3546__auto____10860 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10860))
{var and__3546__auto____10862 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10862))
{var and__3546__auto____10864 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10864))
{var and__3546__auto____10865 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10865))
{var and__3546__auto____10867 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10867))
{return p3.call(null,z);
} else
{return and__3546__auto____10867;
}
} else
{return and__3546__auto____10865;
}
} else
{return and__3546__auto____10864;
}
} else
{return and__3546__auto____10862;
}
} else
{return and__3546__auto____10860;
}
} else
{return and__3546__auto____10859;
}
} else
{return and__3546__auto____10857;
}
} else
{return and__3546__auto____10855;
}
})());
});
var ep3__11043 = (function() { 
var G__11152__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10875 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10875))
{return cljs.core.every_QMARK_.call(null,(function (p1__10574_SHARP_){
var and__3546__auto____10885 = p1.call(null,p1__10574_SHARP_);

if(cljs.core.truth_(and__3546__auto____10885))
{var and__3546__auto____10887 = p2.call(null,p1__10574_SHARP_);

if(cljs.core.truth_(and__3546__auto____10887))
{return p3.call(null,p1__10574_SHARP_);
} else
{return and__3546__auto____10887;
}
} else
{return and__3546__auto____10885;
}
}),args);
} else
{return and__3546__auto____10875;
}
})());
};
var G__11152 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11152__delegate.call(this, x, y, z, args);
};
G__11152.cljs$lang$maxFixedArity = 3;
G__11152.cljs$lang$applyTo = (function (arglist__11153){
var x = cljs.core.first(arglist__11153);
var y = cljs.core.first(cljs.core.next(arglist__11153));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11153)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11153)));
return G__11152__delegate.call(this, x, y, z, args);
});
return G__11152;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11035.call(this);
case  1 :
return ep3__11037.call(this,x);
case  2 :
return ep3__11039.call(this,x,y);
case  3 :
return ep3__11041.call(this,x,y,z);
default:
return ep3__11043.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11043.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10950 = (function() { 
var G__11155__delegate = function (p1,p2,p3,ps){
var ps__10890 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11156 = (function (){
return true;
});
var epn__11157 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10575_SHARP_){
return p1__10575_SHARP_.call(null,x);
}),ps__10890);
});
var epn__11158 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10577_SHARP_){
var and__3546__auto____10895 = p1__10577_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10895))
{return p1__10577_SHARP_.call(null,y);
} else
{return and__3546__auto____10895;
}
}),ps__10890);
});
var epn__11159 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10578_SHARP_){
var and__3546__auto____10897 = p1__10578_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10897))
{var and__3546__auto____10899 = p1__10578_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10899))
{return p1__10578_SHARP_.call(null,z);
} else
{return and__3546__auto____10899;
}
} else
{return and__3546__auto____10897;
}
}),ps__10890);
});
var epn__11160 = (function() { 
var G__11168__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10906 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10906))
{return cljs.core.every_QMARK_.call(null,(function (p1__10580_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10580_SHARP_,args);
}),ps__10890);
} else
{return and__3546__auto____10906;
}
})());
};
var G__11168 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11168__delegate.call(this, x, y, z, args);
};
G__11168.cljs$lang$maxFixedArity = 3;
G__11168.cljs$lang$applyTo = (function (arglist__11172){
var x = cljs.core.first(arglist__11172);
var y = cljs.core.first(cljs.core.next(arglist__11172));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11172)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11172)));
return G__11168__delegate.call(this, x, y, z, args);
});
return G__11168;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11156.call(this);
case  1 :
return epn__11157.call(this,x);
case  2 :
return epn__11158.call(this,x,y);
case  3 :
return epn__11159.call(this,x,y,z);
default:
return epn__11160.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11160.cljs$lang$applyTo;
return epn;
})()
};
var G__11155 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11155__delegate.call(this, p1, p2, p3, ps);
};
G__11155.cljs$lang$maxFixedArity = 3;
G__11155.cljs$lang$applyTo = (function (arglist__11173){
var p1 = cljs.core.first(arglist__11173);
var p2 = cljs.core.first(cljs.core.next(arglist__11173));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11173)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11173)));
return G__11155__delegate.call(this, p1, p2, p3, ps);
});
return G__11155;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10914.call(this,p1);
case  2 :
return every_pred__10915.call(this,p1,p2);
case  3 :
return every_pred__10949.call(this,p1,p2,p3);
default:
return every_pred__10950.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10950.cljs$lang$applyTo;
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
var some_fn__11302 = (function (p){
return (function() {
var sp1 = null;
var sp1__11308 = (function (){
return null;
});
var sp1__11310 = (function (x){
return p.call(null,x);
});
var sp1__11311 = (function (x,y){
var or__3548__auto____11180 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11180))
{return or__3548__auto____11180;
} else
{return p.call(null,y);
}
});
var sp1__11312 = (function (x,y,z){
var or__3548__auto____11182 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11182))
{return or__3548__auto____11182;
} else
{var or__3548__auto____11184 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11184))
{return or__3548__auto____11184;
} else
{return p.call(null,z);
}
}
});
var sp1__11313 = (function() { 
var G__11321__delegate = function (x,y,z,args){
var or__3548__auto____11189 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11189))
{return or__3548__auto____11189;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11321 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11321__delegate.call(this, x, y, z, args);
};
G__11321.cljs$lang$maxFixedArity = 3;
G__11321.cljs$lang$applyTo = (function (arglist__11323){
var x = cljs.core.first(arglist__11323);
var y = cljs.core.first(cljs.core.next(arglist__11323));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11323)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11323)));
return G__11321__delegate.call(this, x, y, z, args);
});
return G__11321;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11308.call(this);
case  1 :
return sp1__11310.call(this,x);
case  2 :
return sp1__11311.call(this,x,y);
case  3 :
return sp1__11312.call(this,x,y,z);
default:
return sp1__11313.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11313.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11303 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11329 = (function (){
return null;
});
var sp2__11331 = (function (x){
var or__3548__auto____11197 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11197))
{return or__3548__auto____11197;
} else
{return p2.call(null,x);
}
});
var sp2__11332 = (function (x,y){
var or__3548__auto____11201 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11201))
{return or__3548__auto____11201;
} else
{var or__3548__auto____11203 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11203))
{return or__3548__auto____11203;
} else
{var or__3548__auto____11205 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11205))
{return or__3548__auto____11205;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11333 = (function (x,y,z){
var or__3548__auto____11211 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11211))
{return or__3548__auto____11211;
} else
{var or__3548__auto____11212 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11212))
{return or__3548__auto____11212;
} else
{var or__3548__auto____11214 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11214))
{return or__3548__auto____11214;
} else
{var or__3548__auto____11216 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11216))
{return or__3548__auto____11216;
} else
{var or__3548__auto____11218 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11218))
{return or__3548__auto____11218;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11334 = (function() { 
var G__11366__delegate = function (x,y,z,args){
var or__3548__auto____11221 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11221))
{return or__3548__auto____11221;
} else
{return cljs.core.some.call(null,(function (p1__10714_SHARP_){
var or__3548__auto____11225 = p1.call(null,p1__10714_SHARP_);

if(cljs.core.truth_(or__3548__auto____11225))
{return or__3548__auto____11225;
} else
{return p2.call(null,p1__10714_SHARP_);
}
}),args);
}
};
var G__11366 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11366__delegate.call(this, x, y, z, args);
};
G__11366.cljs$lang$maxFixedArity = 3;
G__11366.cljs$lang$applyTo = (function (arglist__11368){
var x = cljs.core.first(arglist__11368);
var y = cljs.core.first(cljs.core.next(arglist__11368));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11368)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11368)));
return G__11366__delegate.call(this, x, y, z, args);
});
return G__11366;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11329.call(this);
case  1 :
return sp2__11331.call(this,x);
case  2 :
return sp2__11332.call(this,x,y);
case  3 :
return sp2__11333.call(this,x,y,z);
default:
return sp2__11334.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11334.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11305 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11370 = (function (){
return null;
});
var sp3__11371 = (function (x){
var or__3548__auto____11228 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11228))
{return or__3548__auto____11228;
} else
{var or__3548__auto____11230 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11230))
{return or__3548__auto____11230;
} else
{return p3.call(null,x);
}
}
});
var sp3__11372 = (function (x,y){
var or__3548__auto____11233 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11233))
{return or__3548__auto____11233;
} else
{var or__3548__auto____11235 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11235))
{return or__3548__auto____11235;
} else
{var or__3548__auto____11237 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11237))
{return or__3548__auto____11237;
} else
{var or__3548__auto____11240 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11240))
{return or__3548__auto____11240;
} else
{var or__3548__auto____11241 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11241))
{return or__3548__auto____11241;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11374 = (function (x,y,z){
var or__3548__auto____11243 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11243))
{return or__3548__auto____11243;
} else
{var or__3548__auto____11245 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11245))
{return or__3548__auto____11245;
} else
{var or__3548__auto____11247 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11247))
{return or__3548__auto____11247;
} else
{var or__3548__auto____11248 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11248))
{return or__3548__auto____11248;
} else
{var or__3548__auto____11249 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11249))
{return or__3548__auto____11249;
} else
{var or__3548__auto____11262 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11262))
{return or__3548__auto____11262;
} else
{var or__3548__auto____11263 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11263))
{return or__3548__auto____11263;
} else
{var or__3548__auto____11264 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11264))
{return or__3548__auto____11264;
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
var sp3__11376 = (function() { 
var G__11402__delegate = function (x,y,z,args){
var or__3548__auto____11266 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11266))
{return or__3548__auto____11266;
} else
{return cljs.core.some.call(null,(function (p1__10716_SHARP_){
var or__3548__auto____11269 = p1.call(null,p1__10716_SHARP_);

if(cljs.core.truth_(or__3548__auto____11269))
{return or__3548__auto____11269;
} else
{var or__3548__auto____11270 = p2.call(null,p1__10716_SHARP_);

if(cljs.core.truth_(or__3548__auto____11270))
{return or__3548__auto____11270;
} else
{return p3.call(null,p1__10716_SHARP_);
}
}
}),args);
}
};
var G__11402 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11402__delegate.call(this, x, y, z, args);
};
G__11402.cljs$lang$maxFixedArity = 3;
G__11402.cljs$lang$applyTo = (function (arglist__11414){
var x = cljs.core.first(arglist__11414);
var y = cljs.core.first(cljs.core.next(arglist__11414));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11414)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11414)));
return G__11402__delegate.call(this, x, y, z, args);
});
return G__11402;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11370.call(this);
case  1 :
return sp3__11371.call(this,x);
case  2 :
return sp3__11372.call(this,x,y);
case  3 :
return sp3__11374.call(this,x,y,z);
default:
return sp3__11376.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11376.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11306 = (function() { 
var G__11418__delegate = function (p1,p2,p3,ps){
var ps__11272 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11419 = (function (){
return null;
});
var spn__11420 = (function (x){
return cljs.core.some.call(null,(function (p1__10717_SHARP_){
return p1__10717_SHARP_.call(null,x);
}),ps__11272);
});
var spn__11421 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10719_SHARP_){
var or__3548__auto____11274 = p1__10719_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11274))
{return or__3548__auto____11274;
} else
{return p1__10719_SHARP_.call(null,y);
}
}),ps__11272);
});
var spn__11422 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10720_SHARP_){
var or__3548__auto____11280 = p1__10720_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11280))
{return or__3548__auto____11280;
} else
{var or__3548__auto____11281 = p1__10720_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11281))
{return or__3548__auto____11281;
} else
{return p1__10720_SHARP_.call(null,z);
}
}
}),ps__11272);
});
var spn__11424 = (function() { 
var G__11435__delegate = function (x,y,z,args){
var or__3548__auto____11294 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11294))
{return or__3548__auto____11294;
} else
{return cljs.core.some.call(null,(function (p1__10722_SHARP_){
return cljs.core.some.call(null,p1__10722_SHARP_,args);
}),ps__11272);
}
};
var G__11435 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11435__delegate.call(this, x, y, z, args);
};
G__11435.cljs$lang$maxFixedArity = 3;
G__11435.cljs$lang$applyTo = (function (arglist__11437){
var x = cljs.core.first(arglist__11437);
var y = cljs.core.first(cljs.core.next(arglist__11437));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11437)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11437)));
return G__11435__delegate.call(this, x, y, z, args);
});
return G__11435;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11419.call(this);
case  1 :
return spn__11420.call(this,x);
case  2 :
return spn__11421.call(this,x,y);
case  3 :
return spn__11422.call(this,x,y,z);
default:
return spn__11424.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11424.cljs$lang$applyTo;
return spn;
})()
};
var G__11418 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11418__delegate.call(this, p1, p2, p3, ps);
};
G__11418.cljs$lang$maxFixedArity = 3;
G__11418.cljs$lang$applyTo = (function (arglist__11440){
var p1 = cljs.core.first(arglist__11440);
var p2 = cljs.core.first(cljs.core.next(arglist__11440));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11440)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11440)));
return G__11418__delegate.call(this, p1, p2, p3, ps);
});
return G__11418;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11302.call(this,p1);
case  2 :
return some_fn__11303.call(this,p1,p2);
case  3 :
return some_fn__11305.call(this,p1,p2,p3);
default:
return some_fn__11306.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11306.cljs$lang$applyTo;
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
var map__11494 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11460 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11460))
{var s__11462 = temp__3698__auto____11460;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11462)),map.call(null,f,cljs.core.rest.call(null,s__11462)));
} else
{return null;
}
})));
});
var map__11495 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11463 = cljs.core.seq.call(null,c1);
var s2__11464 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11467 = s1__11463;

if(cljs.core.truth_(and__3546__auto____11467))
{return s2__11464;
} else
{return and__3546__auto____11467;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11463),cljs.core.first.call(null,s2__11464)),map.call(null,f,cljs.core.rest.call(null,s1__11463),cljs.core.rest.call(null,s2__11464)));
} else
{return null;
}
})));
});
var map__11496 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11471 = cljs.core.seq.call(null,c1);
var s2__11473 = cljs.core.seq.call(null,c2);
var s3__11474 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11476 = s1__11471;

if(cljs.core.truth_(and__3546__auto____11476))
{var and__3546__auto____11477 = s2__11473;

if(cljs.core.truth_(and__3546__auto____11477))
{return s3__11474;
} else
{return and__3546__auto____11477;
}
} else
{return and__3546__auto____11476;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11471),cljs.core.first.call(null,s2__11473),cljs.core.first.call(null,s3__11474)),map.call(null,f,cljs.core.rest.call(null,s1__11471),cljs.core.rest.call(null,s2__11473),cljs.core.rest.call(null,s3__11474)));
} else
{return null;
}
})));
});
var map__11497 = (function() { 
var G__11523__delegate = function (f,c1,c2,c3,colls){
var step__11487 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11484 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11484)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11484),step.call(null,map.call(null,cljs.core.rest,ss__11484)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11177_SHARP_){
return cljs.core.apply.call(null,f,p1__11177_SHARP_);
}),step__11487.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11523 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11523__delegate.call(this, f, c1, c2, c3, colls);
};
G__11523.cljs$lang$maxFixedArity = 4;
G__11523.cljs$lang$applyTo = (function (arglist__11539){
var f = cljs.core.first(arglist__11539);
var c1 = cljs.core.first(cljs.core.next(arglist__11539));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11539)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11539))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11539))));
return G__11523__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11523;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11494.call(this,f,c1);
case  3 :
return map__11495.call(this,f,c1,c2);
case  4 :
return map__11496.call(this,f,c1,c2,c3);
default:
return map__11497.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11497.cljs$lang$applyTo;
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
{var temp__3698__auto____11548 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11548))
{var s__11550 = temp__3698__auto____11548;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11550),take.call(null,(n - 1),cljs.core.rest.call(null,s__11550)));
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
var step__11572 = (function (n,coll){
while(true){
var s__11564 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11565 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11565))
{return s__11564;
} else
{return and__3546__auto____11565;
}
})()))
{{
var G__11573 = (n - 1);
var G__11574 = cljs.core.rest.call(null,s__11564);
n = G__11573;
coll = G__11574;
continue;
}
} else
{return s__11564;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11572.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11583 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11585 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11583.call(this,n);
case  2 :
return drop_last__11585.call(this,n,s);
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
var s__11591 = cljs.core.seq.call(null,coll);
var lead__11593 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11593))
{{
var G__11597 = cljs.core.next.call(null,s__11591);
var G__11598 = cljs.core.next.call(null,lead__11593);
s__11591 = G__11597;
lead__11593 = G__11598;
continue;
}
} else
{return s__11591;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11608 = (function (pred,coll){
while(true){
var s__11602 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11603 = s__11602;

if(cljs.core.truth_(and__3546__auto____11603))
{return pred.call(null,cljs.core.first.call(null,s__11602));
} else
{return and__3546__auto____11603;
}
})()))
{{
var G__11611 = pred;
var G__11612 = cljs.core.rest.call(null,s__11602);
pred = G__11611;
coll = G__11612;
continue;
}
} else
{return s__11602;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11608.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11613 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11613))
{var s__11614 = temp__3698__auto____11613;

return cljs.core.concat.call(null,s__11614,cycle.call(null,s__11614));
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
var repeat__11714 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11715 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11714.call(this,n);
case  2 :
return repeat__11715.call(this,n,x);
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
var repeatedly__11738 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11739 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11738.call(this,n);
case  2 :
return repeatedly__11739.call(this,n,f);
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
var interleave__11776 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11757 = cljs.core.seq.call(null,c1);
var s2__11762 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11766 = s1__11757;

if(cljs.core.truth_(and__3546__auto____11766))
{return s2__11762;
} else
{return and__3546__auto____11766;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11757),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11762),interleave.call(null,cljs.core.rest.call(null,s1__11757),cljs.core.rest.call(null,s2__11762))));
} else
{return null;
}
})));
});
var interleave__11777 = (function() { 
var G__11782__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11774 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11774)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11774),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11774)));
} else
{return null;
}
})));
};
var G__11782 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11782__delegate.call(this, c1, c2, colls);
};
G__11782.cljs$lang$maxFixedArity = 2;
G__11782.cljs$lang$applyTo = (function (arglist__11784){
var c1 = cljs.core.first(arglist__11784);
var c2 = cljs.core.first(cljs.core.next(arglist__11784));
var colls = cljs.core.rest(cljs.core.next(arglist__11784));
return G__11782__delegate.call(this, c1, c2, colls);
});
return G__11782;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11776.call(this,c1,c2);
default:
return interleave__11777.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11777.cljs$lang$applyTo;
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
var cat__11798 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11796 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11796))
{var coll__11797 = temp__3695__auto____11796;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11797),cat.call(null,cljs.core.rest.call(null,coll__11797),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11798.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11809 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11811 = (function() { 
var G__11814__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11814 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11814__delegate.call(this, f, coll, colls);
};
G__11814.cljs$lang$maxFixedArity = 2;
G__11814.cljs$lang$applyTo = (function (arglist__11818){
var f = cljs.core.first(arglist__11818);
var coll = cljs.core.first(cljs.core.next(arglist__11818));
var colls = cljs.core.rest(cljs.core.next(arglist__11818));
return G__11814__delegate.call(this, f, coll, colls);
});
return G__11814;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11809.call(this,f,coll);
default:
return mapcat__11811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11811.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11823 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11823))
{var s__11825 = temp__3698__auto____11823;

var f__11826 = cljs.core.first.call(null,s__11825);
var r__11827 = cljs.core.rest.call(null,s__11825);

if(cljs.core.truth_(pred.call(null,f__11826)))
{return cljs.core.cons.call(null,f__11826,filter.call(null,pred,r__11827));
} else
{return filter.call(null,pred,r__11827);
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
var walk__11866 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11866.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11865_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11865_SHARP_));
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
var partition__11891 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11892 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11879 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11879))
{var s__11880 = temp__3698__auto____11879;

var p__11881 = cljs.core.take.call(null,n,s__11880);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11881))))
{return cljs.core.cons.call(null,p__11881,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11880)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11893 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11882 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11882))
{var s__11883 = temp__3698__auto____11882;

var p__11884 = cljs.core.take.call(null,n,s__11883);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11884))))
{return cljs.core.cons.call(null,p__11884,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11883)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11884,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11891.call(this,n,step);
case  3 :
return partition__11892.call(this,n,step,pad);
case  4 :
return partition__11893.call(this,n,step,pad,coll);
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
var get_in__11911 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__11912 = (function (m,ks,not_found){
var sentinel__11905 = cljs.core.lookup_sentinel;
var m__11906 = m;
var ks__11907 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__11907))
{var m__11909 = cljs.core.get.call(null,m__11906,cljs.core.first.call(null,ks__11907),sentinel__11905);

if(cljs.core.truth_((sentinel__11905 === m__11909)))
{return not_found;
} else
{{
var G__11914 = sentinel__11905;
var G__11915 = m__11909;
var G__11916 = cljs.core.next.call(null,ks__11907);
sentinel__11905 = G__11914;
m__11906 = G__11915;
ks__11907 = G__11916;
continue;
}
}
} else
{return m__11906;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__11911.call(this,m,ks);
case  3 :
return get_in__11912.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__11919,v){
var vec__11922__11923 = p__11919;
var k__11924 = cljs.core.nth.call(null,vec__11922__11923,0,null);
var ks__11926 = cljs.core.nthnext.call(null,vec__11922__11923,1);

if(cljs.core.truth_(ks__11926))
{return cljs.core.assoc.call(null,m,k__11924,assoc_in.call(null,cljs.core.get.call(null,m,k__11924),ks__11926,v));
} else
{return cljs.core.assoc.call(null,m,k__11924,v);
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
var update_in__delegate = function (m,p__11952,f,args){
var vec__11953__11954 = p__11952;
var k__11955 = cljs.core.nth.call(null,vec__11953__11954,0,null);
var ks__11956 = cljs.core.nthnext.call(null,vec__11953__11954,1);

if(cljs.core.truth_(ks__11956))
{return cljs.core.assoc.call(null,m,k__11955,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__11955),ks__11956,f,args));
} else
{return cljs.core.assoc.call(null,m,k__11955,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__11955),args));
}
};
var update_in = function (m,p__11952,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__11952, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__11964){
var m = cljs.core.first(arglist__11964);
var p__11952 = cljs.core.first(cljs.core.next(arglist__11964));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11964)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11964)));
return update_in__delegate.call(this, m, p__11952, f, args);
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
var this__11968 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12024 = null;
var G__12024__12025 = (function (coll,k){
var this__11969 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12024__12026 = (function (coll,k,not_found){
var this__11971 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12024 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12024__12025.call(this,coll,k);
case  3 :
return G__12024__12026.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12024;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11972 = this;
var new_array__11973 = cljs.core.aclone.call(null,this__11972.array);

(new_array__11973[k] = v);
return (new cljs.core.Vector(this__11972.meta,new_array__11973));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12028 = null;
var G__12028__12029 = (function (coll,k){
var this__11974 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12028__12030 = (function (coll,k,not_found){
var this__11977 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12028 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12028__12029.call(this,coll,k);
case  3 :
return G__12028__12030.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12028;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11978 = this;
var new_array__11979 = cljs.core.aclone.call(null,this__11978.array);

new_array__11979.push(o);
return (new cljs.core.Vector(this__11978.meta,new_array__11979));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12036 = null;
var G__12036__12037 = (function (v,f){
var this__11980 = this;
return cljs.core.ci_reduce.call(null,this__11980.array,f);
});
var G__12036__12038 = (function (v,f,start){
var this__11981 = this;
return cljs.core.ci_reduce.call(null,this__11981.array,f,start);
});
G__12036 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12036__12037.call(this,v,f);
case  3 :
return G__12036__12038.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12036;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11982 = this;
if(cljs.core.truth_((this__11982.array.length > 0)))
{var vector_seq__11989 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__11982.array.length)))
{return cljs.core.cons.call(null,(this__11982.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__11989.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11992 = this;
return this__11992.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11993 = this;
var count__11994 = this__11993.array.length;

if(cljs.core.truth_((count__11994 > 0)))
{return (this__11993.array[(count__11994 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11999 = this;
if(cljs.core.truth_((this__11999.array.length > 0)))
{var new_array__12002 = cljs.core.aclone.call(null,this__11999.array);

new_array__12002.pop();
return (new cljs.core.Vector(this__11999.meta,new_array__12002));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12003 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12006 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12008 = this;
return (new cljs.core.Vector(meta,this__12008.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12009 = this;
return this__12009.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12063 = null;
var G__12063__12064 = (function (coll,n){
var this__12012 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12014 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12014))
{return (n < this__12012.array.length);
} else
{return and__3546__auto____12014;
}
})()))
{return (this__12012.array[n]);
} else
{return null;
}
});
var G__12063__12065 = (function (coll,n,not_found){
var this__12015 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12017 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12017))
{return (n < this__12015.array.length);
} else
{return and__3546__auto____12017;
}
})()))
{return (this__12015.array[n]);
} else
{return not_found;
}
});
G__12063 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12063__12064.call(this,coll,n);
case  3 :
return G__12063__12065.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12063;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12022 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12022.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12090){
var args = cljs.core.seq( arglist__12090 );;
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
var this__12267 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12451 = null;
var G__12451__12452 = (function (coll,k){
var this__12268 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12451__12453 = (function (coll,k,not_found){
var this__12270 = this;
return cljs.core._nth.call(null,coll,k,not_found);
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
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12272 = this;
var v_pos__12276 = (this__12272.start + key);

return (new cljs.core.Subvec(this__12272.meta,cljs.core._assoc.call(null,this__12272.v,v_pos__12276,val),this__12272.start,((this__12272.end > (v_pos__12276 + 1)) ? this__12272.end : (v_pos__12276 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12461 = null;
var G__12461__12463 = (function (coll,k){
var this__12280 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12461__12464 = (function (coll,k,not_found){
var this__12283 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12461 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12461__12463.call(this,coll,k);
case  3 :
return G__12461__12464.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12461;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12286 = this;
return (new cljs.core.Subvec(this__12286.meta,cljs.core._assoc_n.call(null,this__12286.v,this__12286.end,o),this__12286.start,(this__12286.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12510 = null;
var G__12510__12511 = (function (coll,f){
var this__12289 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12510__12512 = (function (coll,f,start){
var this__12294 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12510 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12510__12511.call(this,coll,f);
case  3 :
return G__12510__12512.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12510;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12393 = this;
var subvec_seq__12398 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12393.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12393.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12398.call(null,this__12393.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12430 = this;
return (this__12430.end - this__12430.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12431 = this;
return cljs.core._nth.call(null,this__12431.v,(this__12431.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12432 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12432.start,this__12432.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12432.meta,this__12432.v,this__12432.start,(this__12432.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12435 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12437 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12439 = this;
return (new cljs.core.Subvec(meta,this__12439.v,this__12439.start,this__12439.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12441 = this;
return this__12441.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12525 = null;
var G__12525__12537 = (function (coll,n){
var this__12442 = this;
return cljs.core._nth.call(null,this__12442.v,(this__12442.start + n));
});
var G__12525__12538 = (function (coll,n,not_found){
var this__12443 = this;
return cljs.core._nth.call(null,this__12443.v,(this__12443.start + n),not_found);
});
G__12525 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12525__12537.call(this,coll,n);
case  3 :
return G__12525__12538.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12525;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12446 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12446.meta);
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
var subvec__12553 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12554 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12553.call(this,v,start);
case  3 :
return subvec__12554.call(this,v,start,end);
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
var this__12563 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12564 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12566 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12569 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12569.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12572 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12587 = this;
return cljs.core._first.call(null,this__12587.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12588 = this;
var temp__3695__auto____12589 = cljs.core.next.call(null,this__12588.front);

if(cljs.core.truth_(temp__3695__auto____12589))
{var f1__12590 = temp__3695__auto____12589;

return (new cljs.core.PersistentQueueSeq(this__12588.meta,f1__12590,this__12588.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12588.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12588.meta,this__12588.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12591 = this;
return this__12591.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12592 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12592.front,this__12592.rear));
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
var this__12627 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12628 = this;
if(cljs.core.truth_(this__12628.front))
{return (new cljs.core.PersistentQueue(this__12628.meta,(this__12628.count + 1),this__12628.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12632 = this__12628.rear;

if(cljs.core.truth_(or__3548__auto____12632))
{return or__3548__auto____12632;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12628.meta,(this__12628.count + 1),cljs.core.conj.call(null,this__12628.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12634 = this;
var rear__12635 = cljs.core.seq.call(null,this__12634.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12636 = this__12634.front;

if(cljs.core.truth_(or__3548__auto____12636))
{return or__3548__auto____12636;
} else
{return rear__12635;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12634.front,cljs.core.seq.call(null,rear__12635)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12637 = this;
return this__12637.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12661 = this;
return cljs.core._first.call(null,this__12661.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12663 = this;
if(cljs.core.truth_(this__12663.front))
{var temp__3695__auto____12667 = cljs.core.next.call(null,this__12663.front);

if(cljs.core.truth_(temp__3695__auto____12667))
{var f1__12670 = temp__3695__auto____12667;

return (new cljs.core.PersistentQueue(this__12663.meta,(this__12663.count - 1),f1__12670,this__12663.rear));
} else
{return (new cljs.core.PersistentQueue(this__12663.meta,(this__12663.count - 1),cljs.core.seq.call(null,this__12663.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12672 = this;
return cljs.core.first.call(null,this__12672.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12675 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12681 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12683 = this;
return (new cljs.core.PersistentQueue(meta,this__12683.count,this__12683.front,this__12683.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12685 = this;
return this__12685.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12687 = this;
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
var this__12744 = this;
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
var len__12764 = array.length;

var i__12765 = 0;

while(true){
if(cljs.core.truth_((i__12765 < len__12764)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12765]))))
{return i__12765;
} else
{{
var G__12769 = (i__12765 + incr);
i__12765 = G__12769;
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
var obj_map_contains_key_QMARK___12775 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12776 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12772 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12772))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12772;
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
return obj_map_contains_key_QMARK___12775.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12776.call(this,k,strobj,true_val,false_val);
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
var this__12816 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12881 = null;
var G__12881__12882 = (function (coll,k){
var this__12821 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12881__12883 = (function (coll,k,not_found){
var this__12822 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12822.strobj,(this__12822.strobj[k]),not_found);
});
G__12881 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12881__12882.call(this,coll,k);
case  3 :
return G__12881__12883.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12881;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12828 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12830 = goog.object.clone.call(null,this__12828.strobj);
var overwrite_QMARK___12831 = new_strobj__12830.hasOwnProperty(k);

(new_strobj__12830[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12831))
{return (new cljs.core.ObjMap(this__12828.meta,this__12828.keys,new_strobj__12830));
} else
{var new_keys__12834 = cljs.core.aclone.call(null,this__12828.keys);

new_keys__12834.push(k);
return (new cljs.core.ObjMap(this__12828.meta,new_keys__12834,new_strobj__12830));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12828.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12842 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12842.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12889 = null;
var G__12889__12890 = (function (coll,k){
var this__12844 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12889__12891 = (function (coll,k,not_found){
var this__12845 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12889 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12889__12890.call(this,coll,k);
case  3 :
return G__12889__12891.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12889;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12847 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12854 = this;
if(cljs.core.truth_((this__12854.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12782_SHARP_){
return cljs.core.vector.call(null,p1__12782_SHARP_,(this__12854.strobj[p1__12782_SHARP_]));
}),this__12854.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12856 = this;
return this__12856.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12857 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12860 = this;
return (new cljs.core.ObjMap(meta,this__12860.keys,this__12860.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12863 = this;
return this__12863.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12867 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12867.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12869 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12873 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12873))
{return this__12869.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12873;
}
})()))
{var new_keys__12875 = cljs.core.aclone.call(null,this__12869.keys);
var new_strobj__12876 = goog.object.clone.call(null,this__12869.strobj);

new_keys__12875.splice(cljs.core.scan_array.call(null,1,k,new_keys__12875),1);
cljs.core.js_delete.call(null,new_strobj__12876,k);
return (new cljs.core.ObjMap(this__12869.meta,new_keys__12875,new_strobj__12876));
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
var this__12980 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13147 = null;
var G__13147__13148 = (function (coll,k){
var this__12981 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13147__13149 = (function (coll,k,not_found){
var this__12983 = this;
var bucket__12984 = (this__12983.hashobj[cljs.core.hash.call(null,k)]);
var i__12986 = (cljs.core.truth_(bucket__12984)?cljs.core.scan_array.call(null,2,k,bucket__12984):null);

if(cljs.core.truth_(i__12986))
{return (bucket__12984[(i__12986 + 1)]);
} else
{return not_found;
}
});
G__13147 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13147__13148.call(this,coll,k);
case  3 :
return G__13147__13149.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13147;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12992 = this;
var h__12993 = cljs.core.hash.call(null,k);
var bucket__12995 = (this__12992.hashobj[h__12993]);

if(cljs.core.truth_(bucket__12995))
{var new_bucket__12996 = cljs.core.aclone.call(null,bucket__12995);
var new_hashobj__12998 = goog.object.clone.call(null,this__12992.hashobj);

(new_hashobj__12998[h__12993] = new_bucket__12996);
var temp__3695__auto____13000 = cljs.core.scan_array.call(null,2,k,new_bucket__12996);

if(cljs.core.truth_(temp__3695__auto____13000))
{var i__13001 = temp__3695__auto____13000;

(new_bucket__12996[(i__13001 + 1)] = v);
return (new cljs.core.HashMap(this__12992.meta,this__12992.count,new_hashobj__12998));
} else
{new_bucket__12996.push(k,v);
return (new cljs.core.HashMap(this__12992.meta,(this__12992.count + 1),new_hashobj__12998));
}
} else
{var new_hashobj__13008 = goog.object.clone.call(null,this__12992.hashobj);

(new_hashobj__13008[h__12993] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12992.meta,(this__12992.count + 1),new_hashobj__13008));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13029 = this;
var bucket__13031 = (this__13029.hashobj[cljs.core.hash.call(null,k)]);
var i__13032 = (cljs.core.truth_(bucket__13031)?cljs.core.scan_array.call(null,2,k,bucket__13031):null);

if(cljs.core.truth_(i__13032))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13160 = null;
var G__13160__13162 = (function (coll,k){
var this__13033 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13160__13163 = (function (coll,k,not_found){
var this__13034 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13160 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13160__13162.call(this,coll,k);
case  3 :
return G__13160__13163.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13160;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13039 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13040 = this;
if(cljs.core.truth_((this__13040.count > 0)))
{var hashes__13041 = cljs.core.js_keys.call(null,this__13040.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12922_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13040.hashobj[p1__12922_SHARP_])));
}),hashes__13041);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13042 = this;
return this__13042.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13043 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13044 = this;
return (new cljs.core.HashMap(meta,this__13044.count,this__13044.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13048 = this;
return this__13048.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13053 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13053.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13072 = this;
var h__13075 = cljs.core.hash.call(null,k);
var bucket__13076 = (this__13072.hashobj[h__13075]);
var i__13078 = (cljs.core.truth_(bucket__13076)?cljs.core.scan_array.call(null,2,k,bucket__13076):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13078)))
{return coll;
} else
{var new_hashobj__13087 = goog.object.clone.call(null,this__13072.hashobj);

if(cljs.core.truth_((3 > bucket__13076.length)))
{cljs.core.js_delete.call(null,new_hashobj__13087,h__13075);
} else
{var new_bucket__13141 = cljs.core.aclone.call(null,bucket__13076);

new_bucket__13141.splice(i__13078,2);
(new_hashobj__13087[h__13075] = new_bucket__13141);
}
return (new cljs.core.HashMap(this__13072.meta,(this__13072.count - 1),new_hashobj__13087));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13189 = ks.length;

var i__13190 = 0;
var out__13192 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13190 < len__13189)))
{{
var G__13196 = (i__13190 + 1);
var G__13197 = cljs.core.assoc.call(null,out__13192,(ks[i__13190]),(vs[i__13190]));
i__13190 = G__13196;
out__13192 = G__13197;
continue;
}
} else
{return out__13192;
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
var in$__13205 = cljs.core.seq.call(null,keyvals);
var out__13206 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13205))
{{
var G__13222 = cljs.core.nnext.call(null,in$__13205);
var G__13223 = cljs.core.assoc.call(null,out__13206,cljs.core.first.call(null,in$__13205),cljs.core.second.call(null,in$__13205));
in$__13205 = G__13222;
out__13206 = G__13223;
continue;
}
} else
{return out__13206;
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
hash_map.cljs$lang$applyTo = (function (arglist__13224){
var keyvals = cljs.core.seq( arglist__13224 );;
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
{return cljs.core.reduce.call(null,(function (p1__13226_SHARP_,p2__13227_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13228 = p1__13226_SHARP_;

if(cljs.core.truth_(or__3548__auto____13228))
{return or__3548__auto____13228;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13227_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13231){
var maps = cljs.core.seq( arglist__13231 );;
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
{var merge_entry__13242 = (function (m,e){
var k__13237 = cljs.core.first.call(null,e);
var v__13238 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13237)))
{return cljs.core.assoc.call(null,m,k__13237,f.call(null,cljs.core.get.call(null,m,k__13237),v__13238));
} else
{return cljs.core.assoc.call(null,m,k__13237,v__13238);
}
});
var merge2__13247 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13242,(function (){var or__3548__auto____13246 = m1;

if(cljs.core.truth_(or__3548__auto____13246))
{return or__3548__auto____13246;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13247,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13256){
var f = cljs.core.first(arglist__13256);
var maps = cljs.core.rest(arglist__13256);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13264 = cljs.core.ObjMap.fromObject([],{});
var keys__13266 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13266))
{var key__13268 = cljs.core.first.call(null,keys__13266);
var entry__13269 = cljs.core.get.call(null,map,key__13268,"﷐'user/not-found");

{
var G__13277 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13269,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13264,key__13268,entry__13269):ret__13264);
var G__13278 = cljs.core.next.call(null,keys__13266);
ret__13264 = G__13277;
keys__13266 = G__13278;
continue;
}
} else
{return ret__13264;
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
var this__13287 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13306 = null;
var G__13306__13307 = (function (coll,v){
var this__13288 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13306__13308 = (function (coll,v,not_found){
var this__13289 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13289.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13306 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13306__13307.call(this,coll,v);
case  3 :
return G__13306__13308.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13306;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13310 = null;
var G__13310__13311 = (function (coll,k){
var this__13294 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13310__13312 = (function (coll,k,not_found){
var this__13295 = this;
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
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13296 = this;
return (new cljs.core.Set(this__13296.meta,cljs.core.assoc.call(null,this__13296.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13297 = this;
return cljs.core.keys.call(null,this__13297.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13298 = this;
return (new cljs.core.Set(this__13298.meta,cljs.core.dissoc.call(null,this__13298.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13299 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13300 = this;
var and__3546__auto____13301 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13301))
{var and__3546__auto____13302 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13302))
{return cljs.core.every_QMARK_.call(null,(function (p1__13257_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13257_SHARP_);
}),other);
} else
{return and__3546__auto____13302;
}
} else
{return and__3546__auto____13301;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13303 = this;
return (new cljs.core.Set(meta,this__13303.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13304 = this;
return this__13304.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13305 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13305.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13318 = cljs.core.seq.call(null,coll);
var out__13319 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13318))))
{{
var G__13419 = cljs.core.rest.call(null,in$__13318);
var G__13420 = cljs.core.conj.call(null,out__13319,cljs.core.first.call(null,in$__13318));
in$__13318 = G__13419;
out__13319 = G__13420;
continue;
}
} else
{return out__13319;
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
{var n__13424 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13429 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13429))
{var e__13430 = temp__3695__auto____13429;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13430));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13424,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13317_SHARP_){
var temp__3695__auto____13435 = cljs.core.find.call(null,smap,p1__13317_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13435))
{var e__13437 = temp__3695__auto____13435;

return cljs.core.second.call(null,e__13437);
} else
{return p1__13317_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13461 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13454,seen){
while(true){
var vec__13455__13456 = p__13454;
var f__13457 = cljs.core.nth.call(null,vec__13455__13456,0,null);
var xs__13458 = vec__13455__13456;

var temp__3698__auto____13459 = cljs.core.seq.call(null,xs__13458);

if(cljs.core.truth_(temp__3698__auto____13459))
{var s__13460 = temp__3698__auto____13459;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13457)))
{{
var G__13468 = cljs.core.rest.call(null,s__13460);
var G__13469 = seen;
p__13454 = G__13468;
seen = G__13469;
continue;
}
} else
{return cljs.core.cons.call(null,f__13457,step.call(null,cljs.core.rest.call(null,s__13460),cljs.core.conj.call(null,seen,f__13457)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13461.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13470 = cljs.core.Vector.fromArray([]);
var s__13471 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13471)))
{{
var G__13477 = cljs.core.conj.call(null,ret__13470,cljs.core.first.call(null,s__13471));
var G__13478 = cljs.core.next.call(null,s__13471);
ret__13470 = G__13477;
s__13471 = G__13478;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13470);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13484 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13484))
{return or__3548__auto____13484;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13485 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13485 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13485 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13506 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13506))
{return or__3548__auto____13506;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13508 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13508 > -1)))
{return cljs.core.subs.call(null,x,2,i__13508);
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
var map__13524 = cljs.core.ObjMap.fromObject([],{});
var ks__13525 = cljs.core.seq.call(null,keys);
var vs__13527 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13529 = ks__13525;

if(cljs.core.truth_(and__3546__auto____13529))
{return vs__13527;
} else
{return and__3546__auto____13529;
}
})()))
{{
var G__13542 = cljs.core.assoc.call(null,map__13524,cljs.core.first.call(null,ks__13525),cljs.core.first.call(null,vs__13527));
var G__13543 = cljs.core.next.call(null,ks__13525);
var G__13544 = cljs.core.next.call(null,vs__13527);
map__13524 = G__13542;
ks__13525 = G__13543;
vs__13527 = G__13544;
continue;
}
} else
{return map__13524;
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
var max_key__13560 = (function (k,x){
return x;
});
var max_key__13561 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13562 = (function() { 
var G__13567__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13519_SHARP_,p2__13520_SHARP_){
return max_key.call(null,k,p1__13519_SHARP_,p2__13520_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13567 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13567__delegate.call(this, k, x, y, more);
};
G__13567.cljs$lang$maxFixedArity = 3;
G__13567.cljs$lang$applyTo = (function (arglist__13568){
var k = cljs.core.first(arglist__13568);
var x = cljs.core.first(cljs.core.next(arglist__13568));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13568)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13568)));
return G__13567__delegate.call(this, k, x, y, more);
});
return G__13567;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13560.call(this,k,x);
case  3 :
return max_key__13561.call(this,k,x,y);
default:
return max_key__13562.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13562.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13580 = (function (k,x){
return x;
});
var min_key__13581 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13582 = (function() { 
var G__13586__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13546_SHARP_,p2__13547_SHARP_){
return min_key.call(null,k,p1__13546_SHARP_,p2__13547_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13586 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13586__delegate.call(this, k, x, y, more);
};
G__13586.cljs$lang$maxFixedArity = 3;
G__13586.cljs$lang$applyTo = (function (arglist__13589){
var k = cljs.core.first(arglist__13589);
var x = cljs.core.first(cljs.core.next(arglist__13589));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13589)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13589)));
return G__13586__delegate.call(this, k, x, y, more);
});
return G__13586;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13580.call(this,k,x);
case  3 :
return min_key__13581.call(this,k,x,y);
default:
return min_key__13582.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13582.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13601 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13602 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13596 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13596))
{var s__13598 = temp__3698__auto____13596;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13598),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13598)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13601.call(this,n,step);
case  3 :
return partition_all__13602.call(this,n,step,coll);
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
var temp__3698__auto____13611 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13611))
{var s__13612 = temp__3698__auto____13611;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13612))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13612),take_while.call(null,pred,cljs.core.rest.call(null,s__13612)));
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
var this__13625 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13626 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13718 = null;
var G__13718__13720 = (function (rng,f){
var this__13627 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13718__13721 = (function (rng,f,s){
var this__13628 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13718 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13718__13720.call(this,rng,f);
case  3 :
return G__13718__13721.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13718;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13630 = this;
var comp__13633 = (cljs.core.truth_((this__13630.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13633.call(null,this__13630.start,this__13630.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13634 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13634.end - this__13634.start) / this__13634.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13637 = this;
return this__13637.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13639 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13639.meta,(this__13639.start + this__13639.step),this__13639.end,this__13639.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13645 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13647 = this;
return (new cljs.core.Range(meta,this__13647.start,this__13647.end,this__13647.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13651 = this;
return this__13651.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13729 = null;
var G__13729__13730 = (function (rng,n){
var this__13653 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13653.start + (n * this__13653.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13657 = (this__13653.start > this__13653.end);

if(cljs.core.truth_(and__3546__auto____13657))
{return cljs.core._EQ_.call(null,this__13653.step,0);
} else
{return and__3546__auto____13657;
}
})()))
{return this__13653.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13729__13731 = (function (rng,n,not_found){
var this__13659 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13659.start + (n * this__13659.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13661 = (this__13659.start > this__13659.end);

if(cljs.core.truth_(and__3546__auto____13661))
{return cljs.core._EQ_.call(null,this__13659.step,0);
} else
{return and__3546__auto____13661;
}
})()))
{return this__13659.start;
} else
{return not_found;
}
}
});
G__13729 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13729__13730.call(this,rng,n);
case  3 :
return G__13729__13731.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13729;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13665 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13665.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13742 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13744 = (function (end){
return range.call(null,0,end,1);
});
var range__13745 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13747 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13742.call(this);
case  1 :
return range__13744.call(this,start);
case  2 :
return range__13745.call(this,start,end);
case  3 :
return range__13747.call(this,start,end,step);
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
var temp__3698__auto____13759 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13759))
{var s__13761 = temp__3698__auto____13759;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13761),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13761)));
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
var temp__3698__auto____13775 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13775))
{var s__13777 = temp__3698__auto____13775;

var fst__13778 = cljs.core.first.call(null,s__13777);
var fv__13779 = f.call(null,fst__13778);
var run__13781 = cljs.core.cons.call(null,fst__13778,cljs.core.take_while.call(null,(function (p1__13769_SHARP_){
return cljs.core._EQ_.call(null,fv__13779,f.call(null,p1__13769_SHARP_));
}),cljs.core.next.call(null,s__13777)));

return cljs.core.cons.call(null,run__13781,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13781),s__13777))));
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
var reductions__13823 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13813 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13813))
{var s__13814 = temp__3695__auto____13813;

return reductions.call(null,f,cljs.core.first.call(null,s__13814),cljs.core.rest.call(null,s__13814));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13824 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13818 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13818))
{var s__13819 = temp__3698__auto____13818;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13819)),cljs.core.rest.call(null,s__13819));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13823.call(this,f,init);
case  3 :
return reductions__13824.call(this,f,init,coll);
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
var juxt__13898 = (function (f){
return (function() {
var G__13903 = null;
var G__13903__13904 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13903__13905 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13903__13906 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13903__13907 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13903__13908 = (function() { 
var G__13913__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13913 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13913__delegate.call(this, x, y, z, args);
};
G__13913.cljs$lang$maxFixedArity = 3;
G__13913.cljs$lang$applyTo = (function (arglist__13917){
var x = cljs.core.first(arglist__13917);
var y = cljs.core.first(cljs.core.next(arglist__13917));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13917)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13917)));
return G__13913__delegate.call(this, x, y, z, args);
});
return G__13913;
})()
;
G__13903 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13903__13904.call(this);
case  1 :
return G__13903__13905.call(this,x);
case  2 :
return G__13903__13906.call(this,x,y);
case  3 :
return G__13903__13907.call(this,x,y,z);
default:
return G__13903__13908.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13903.cljs$lang$maxFixedArity = 3;
G__13903.cljs$lang$applyTo = G__13903__13908.cljs$lang$applyTo;
return G__13903;
})()
});
var juxt__13899 = (function (f,g){
return (function() {
var G__13922 = null;
var G__13922__13925 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13922__13926 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13922__13928 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13922__13929 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13922__13930 = (function() { 
var G__13937__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13937 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13937__delegate.call(this, x, y, z, args);
};
G__13937.cljs$lang$maxFixedArity = 3;
G__13937.cljs$lang$applyTo = (function (arglist__13939){
var x = cljs.core.first(arglist__13939);
var y = cljs.core.first(cljs.core.next(arglist__13939));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13939)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13939)));
return G__13937__delegate.call(this, x, y, z, args);
});
return G__13937;
})()
;
G__13922 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13922__13925.call(this);
case  1 :
return G__13922__13926.call(this,x);
case  2 :
return G__13922__13928.call(this,x,y);
case  3 :
return G__13922__13929.call(this,x,y,z);
default:
return G__13922__13930.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13922.cljs$lang$maxFixedArity = 3;
G__13922.cljs$lang$applyTo = G__13922__13930.cljs$lang$applyTo;
return G__13922;
})()
});
var juxt__13900 = (function (f,g,h){
return (function() {
var G__13946 = null;
var G__13946__13948 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13946__13950 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13946__13952 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13946__13953 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13946__13954 = (function() { 
var G__13961__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13961 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13961__delegate.call(this, x, y, z, args);
};
G__13961.cljs$lang$maxFixedArity = 3;
G__13961.cljs$lang$applyTo = (function (arglist__13965){
var x = cljs.core.first(arglist__13965);
var y = cljs.core.first(cljs.core.next(arglist__13965));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13965)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13965)));
return G__13961__delegate.call(this, x, y, z, args);
});
return G__13961;
})()
;
G__13946 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13946__13948.call(this);
case  1 :
return G__13946__13950.call(this,x);
case  2 :
return G__13946__13952.call(this,x,y);
case  3 :
return G__13946__13953.call(this,x,y,z);
default:
return G__13946__13954.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13946.cljs$lang$maxFixedArity = 3;
G__13946.cljs$lang$applyTo = G__13946__13954.cljs$lang$applyTo;
return G__13946;
})()
});
var juxt__13901 = (function() { 
var G__13970__delegate = function (f,g,h,fs){
var fs__13892 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13971 = null;
var G__13971__13973 = (function (){
return cljs.core.reduce.call(null,(function (p1__13794_SHARP_,p2__13795_SHARP_){
return cljs.core.conj.call(null,p1__13794_SHARP_,p2__13795_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13892);
});
var G__13971__13974 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13796_SHARP_,p2__13797_SHARP_){
return cljs.core.conj.call(null,p1__13796_SHARP_,p2__13797_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13892);
});
var G__13971__13975 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13800_SHARP_,p2__13801_SHARP_){
return cljs.core.conj.call(null,p1__13800_SHARP_,p2__13801_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13892);
});
var G__13971__13976 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13802_SHARP_,p2__13803_SHARP_){
return cljs.core.conj.call(null,p1__13802_SHARP_,p2__13803_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13892);
});
var G__13971__13978 = (function() { 
var G__14012__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13806_SHARP_,p2__13807_SHARP_){
return cljs.core.conj.call(null,p1__13806_SHARP_,cljs.core.apply.call(null,p2__13807_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13892);
};
var G__14012 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14012__delegate.call(this, x, y, z, args);
};
G__14012.cljs$lang$maxFixedArity = 3;
G__14012.cljs$lang$applyTo = (function (arglist__14017){
var x = cljs.core.first(arglist__14017);
var y = cljs.core.first(cljs.core.next(arglist__14017));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14017)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14017)));
return G__14012__delegate.call(this, x, y, z, args);
});
return G__14012;
})()
;
G__13971 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13971__13973.call(this);
case  1 :
return G__13971__13974.call(this,x);
case  2 :
return G__13971__13975.call(this,x,y);
case  3 :
return G__13971__13976.call(this,x,y,z);
default:
return G__13971__13978.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13971.cljs$lang$maxFixedArity = 3;
G__13971.cljs$lang$applyTo = G__13971__13978.cljs$lang$applyTo;
return G__13971;
})()
};
var G__13970 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13970__delegate.call(this, f, g, h, fs);
};
G__13970.cljs$lang$maxFixedArity = 3;
G__13970.cljs$lang$applyTo = (function (arglist__14018){
var f = cljs.core.first(arglist__14018);
var g = cljs.core.first(cljs.core.next(arglist__14018));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14018)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14018)));
return G__13970__delegate.call(this, f, g, h, fs);
});
return G__13970;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13898.call(this,f);
case  2 :
return juxt__13899.call(this,f,g);
case  3 :
return juxt__13900.call(this,f,g,h);
default:
return juxt__13901.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13901.cljs$lang$applyTo;
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
var dorun__14036 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14040 = cljs.core.next.call(null,coll);
coll = G__14040;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14037 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14020 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14020))
{return (n > 0);
} else
{return and__3546__auto____14020;
}
})()))
{{
var G__14046 = (n - 1);
var G__14047 = cljs.core.next.call(null,coll);
n = G__14046;
coll = G__14047;
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
return dorun__14036.call(this,n);
case  2 :
return dorun__14037.call(this,n,coll);
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
var doall__14059 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14061 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14059.call(this,n);
case  2 :
return doall__14061.call(this,n,coll);
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
var matches__14075 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14075),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14075),1)))
{return cljs.core.first.call(null,matches__14075);
} else
{return cljs.core.vec.call(null,matches__14075);
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
var matches__14078 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14078)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14078),1)))
{return cljs.core.first.call(null,matches__14078);
} else
{return cljs.core.vec.call(null,matches__14078);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14096 = cljs.core.re_find.call(null,re,s);
var match_idx__14098 = s.search(re);
var match_str__14100 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14096))?cljs.core.first.call(null,match_data__14096):match_data__14096);
var post_match__14102 = cljs.core.subs.call(null,s,(match_idx__14098 + cljs.core.count.call(null,match_str__14100)));

if(cljs.core.truth_(match_data__14096))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14096,re_seq.call(null,re,post_match__14102));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14109_SHARP_){
return print_one.call(null,p1__14109_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14163 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14163))
{var and__3546__auto____14172 = (function (){var x__445__auto____14164 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14169 = x__445__auto____14164;

if(cljs.core.truth_(and__3546__auto____14169))
{var and__3546__auto____14170 = x__445__auto____14164.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14170))
{return cljs.core.not.call(null,x__445__auto____14164.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14170;
}
} else
{return and__3546__auto____14169;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14164);
}
})();

if(cljs.core.truth_(and__3546__auto____14172))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14172;
}
} else
{return and__3546__auto____14163;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14179 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14180 = x__445__auto____14179;

if(cljs.core.truth_(and__3546__auto____14180))
{var and__3546__auto____14182 = x__445__auto____14179.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14182))
{return cljs.core.not.call(null,x__445__auto____14179.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14182;
}
} else
{return and__3546__auto____14180;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14179);
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
var first_obj__14231 = cljs.core.first.call(null,objs);
var sb__14233 = (new goog.string.StringBuffer());

var G__14234__14235 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14234__14235))
{var obj__14236 = cljs.core.first.call(null,G__14234__14235);
var G__14234__14237 = G__14234__14235;

while(true){
if(cljs.core.truth_((obj__14236 === first_obj__14231)))
{} else
{sb__14233.append(" ");
}
var G__14238__14240 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14236,opts));

if(cljs.core.truth_(G__14238__14240))
{var string__14241 = cljs.core.first.call(null,G__14238__14240);
var G__14238__14242 = G__14238__14240;

while(true){
sb__14233.append(string__14241);
var temp__3698__auto____14243 = cljs.core.next.call(null,G__14238__14242);

if(cljs.core.truth_(temp__3698__auto____14243))
{var G__14238__14244 = temp__3698__auto____14243;

{
var G__14256 = cljs.core.first.call(null,G__14238__14244);
var G__14257 = G__14238__14244;
string__14241 = G__14256;
G__14238__14242 = G__14257;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14246 = cljs.core.next.call(null,G__14234__14237);

if(cljs.core.truth_(temp__3698__auto____14246))
{var G__14234__14247 = temp__3698__auto____14246;

{
var G__14263 = cljs.core.first.call(null,G__14234__14247);
var G__14264 = G__14234__14247;
obj__14236 = G__14263;
G__14234__14237 = G__14264;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14233);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14276 = cljs.core.first.call(null,objs);

var G__14277__14279 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14277__14279))
{var obj__14281 = cljs.core.first.call(null,G__14277__14279);
var G__14277__14282 = G__14277__14279;

while(true){
if(cljs.core.truth_((obj__14281 === first_obj__14276)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14286__14287 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14281,opts));

if(cljs.core.truth_(G__14286__14287))
{var string__14288 = cljs.core.first.call(null,G__14286__14287);
var G__14286__14289 = G__14286__14287;

while(true){
cljs.core.string_print.call(null,string__14288);
var temp__3698__auto____14291 = cljs.core.next.call(null,G__14286__14289);

if(cljs.core.truth_(temp__3698__auto____14291))
{var G__14286__14292 = temp__3698__auto____14291;

{
var G__14377 = cljs.core.first.call(null,G__14286__14292);
var G__14378 = G__14286__14292;
string__14288 = G__14377;
G__14286__14289 = G__14378;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14294 = cljs.core.next.call(null,G__14277__14282);

if(cljs.core.truth_(temp__3698__auto____14294))
{var G__14277__14373 = temp__3698__auto____14294;

{
var G__14380 = cljs.core.first.call(null,G__14277__14373);
var G__14381 = G__14277__14373;
obj__14281 = G__14380;
G__14277__14282 = G__14381;
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
pr_str.cljs$lang$applyTo = (function (arglist__14399){
var objs = cljs.core.seq( arglist__14399 );;
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
pr.cljs$lang$applyTo = (function (arglist__14431){
var objs = cljs.core.seq( arglist__14431 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14440){
var objs = cljs.core.seq( arglist__14440 );;
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
println.cljs$lang$applyTo = (function (arglist__14446){
var objs = cljs.core.seq( arglist__14446 );;
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
prn.cljs$lang$applyTo = (function (arglist__14450){
var objs = cljs.core.seq( arglist__14450 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14460 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14460,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14487 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14487))
{var nspc__14488 = temp__3698__auto____14487;

return cljs.core.str.call(null,nspc__14488,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14521 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14521))
{var nspc__14523 = temp__3698__auto____14521;

return cljs.core.str.call(null,nspc__14523,"/");
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
var pr_pair__14548 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14548,"{",", ","}",opts,coll);
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
var this__14579 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14580 = this;
var G__14582__14584 = cljs.core.seq.call(null,this__14580.watches);

if(cljs.core.truth_(G__14582__14584))
{var G__14587__14589 = cljs.core.first.call(null,G__14582__14584);
var vec__14588__14590 = G__14587__14589;
var key__14591 = cljs.core.nth.call(null,vec__14588__14590,0,null);
var f__14593 = cljs.core.nth.call(null,vec__14588__14590,1,null);
var G__14582__14594 = G__14582__14584;

var G__14587__14621 = G__14587__14589;
var G__14582__14622 = G__14582__14594;

while(true){
var vec__14623__14624 = G__14587__14621;
var key__14626 = cljs.core.nth.call(null,vec__14623__14624,0,null);
var f__14627 = cljs.core.nth.call(null,vec__14623__14624,1,null);
var G__14582__14628 = G__14582__14622;

f__14627.call(null,key__14626,this$,oldval,newval);
var temp__3698__auto____14629 = cljs.core.next.call(null,G__14582__14628);

if(cljs.core.truth_(temp__3698__auto____14629))
{var G__14582__14631 = temp__3698__auto____14629;

{
var G__14652 = cljs.core.first.call(null,G__14582__14631);
var G__14653 = G__14582__14631;
G__14587__14621 = G__14652;
G__14582__14622 = G__14653;
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
var this__14633 = this;
return this$.watches = cljs.core.assoc.call(null,this__14633.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14639 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14639.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14644 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14644.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14645 = this;
return this__14645.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14646 = this;
return this__14646.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14647 = this;
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
var atom__14670 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14671 = (function() { 
var G__14673__delegate = function (x,p__14661){
var map__14662__14663 = p__14661;
var map__14662__14664 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14662__14663))?cljs.core.apply.call(null,cljs.core.hash_map,map__14662__14663):map__14662__14663);
var validator__14665 = cljs.core.get.call(null,map__14662__14664,"﷐'validator");
var meta__14666 = cljs.core.get.call(null,map__14662__14664,"﷐'meta");

return (new cljs.core.Atom(x,meta__14666,validator__14665,null));
};
var G__14673 = function (x,var_args){
var p__14661 = null;
if (goog.isDef(var_args)) {
  p__14661 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14673__delegate.call(this, x, p__14661);
};
G__14673.cljs$lang$maxFixedArity = 1;
G__14673.cljs$lang$applyTo = (function (arglist__14702){
var x = cljs.core.first(arglist__14702);
var p__14661 = cljs.core.rest(arglist__14702);
return G__14673__delegate.call(this, x, p__14661);
});
return G__14673;
})()
;
atom = function(x,var_args){
var p__14661 = var_args;
switch(arguments.length){
case  1 :
return atom__14670.call(this,x);
default:
return atom__14671.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14671.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14706 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14706))
{var validate__14707 = temp__3698__auto____14706;

if(cljs.core.truth_(validate__14707.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14708 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14708,new_value);
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
var swap_BANG___14724 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14725 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14726 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14727 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14728 = (function() { 
var G__14732__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14732 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14732__delegate.call(this, a, f, x, y, z, more);
};
G__14732.cljs$lang$maxFixedArity = 5;
G__14732.cljs$lang$applyTo = (function (arglist__14735){
var a = cljs.core.first(arglist__14735);
var f = cljs.core.first(cljs.core.next(arglist__14735));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14735)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14735))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14735)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14735)))));
return G__14732__delegate.call(this, a, f, x, y, z, more);
});
return G__14732;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14724.call(this,a,f);
case  3 :
return swap_BANG___14725.call(this,a,f,x);
case  4 :
return swap_BANG___14726.call(this,a,f,x,y);
case  5 :
return swap_BANG___14727.call(this,a,f,x,y,z);
default:
return swap_BANG___14728.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14728.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14756){
var iref = cljs.core.first(arglist__14756);
var f = cljs.core.first(cljs.core.next(arglist__14756));
var args = cljs.core.rest(cljs.core.next(arglist__14756));
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
var this__14801 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14801.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14802 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14802.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14802.state,this__14802.f);
}
return cljs.core.deref.call(null,this__14802.state);
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
delay.cljs$lang$applyTo = (function (arglist__14804){
var body = cljs.core.seq( arglist__14804 );;
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
var map__14832__14834 = options;
var map__14832__14837 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14832__14834))?cljs.core.apply.call(null,cljs.core.hash_map,map__14832__14834):map__14832__14834);
var keywordize_keys__14838 = cljs.core.get.call(null,map__14832__14837,"﷐'keywordize-keys");
var keyfn__14839 = (cljs.core.truth_(keywordize_keys__14838)?cljs.core.keyword:cljs.core.str);
var f__14853 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14852 = (function iter__14843(s__14844){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14844__14849 = s__14844;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14844__14849)))
{var k__14851 = cljs.core.first.call(null,s__14844__14849);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14839.call(null,k__14851),thisfn.call(null,(x[k__14851]))]),iter__14843.call(null,cljs.core.rest.call(null,s__14844__14849)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14852.call(null,cljs.core.js_keys.call(null,x));
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

return f__14853.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14881){
var x = cljs.core.first(arglist__14881);
var options = cljs.core.rest(arglist__14881);
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
var mem__14883 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14892__delegate = function (args){
var temp__3695__auto____14884 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14883),args);

if(cljs.core.truth_(temp__3695__auto____14884))
{var v__14885 = temp__3695__auto____14884;

return v__14885;
} else
{var ret__14889 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14883,cljs.core.assoc,args,ret__14889);
return ret__14889;
}
};
var G__14892 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14892__delegate.call(this, args);
};
G__14892.cljs$lang$maxFixedArity = 0;
G__14892.cljs$lang$applyTo = (function (arglist__14894){
var args = cljs.core.seq( arglist__14894 );;
return G__14892__delegate.call(this, args);
});
return G__14892;
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
var trampoline__14901 = (function (f){
while(true){
var ret__14898 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14898)))
{{
var G__14907 = ret__14898;
f = G__14907;
continue;
}
} else
{return ret__14898;
}
break;
}
});
var trampoline__14902 = (function() { 
var G__14908__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14908 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14908__delegate.call(this, f, args);
};
G__14908.cljs$lang$maxFixedArity = 1;
G__14908.cljs$lang$applyTo = (function (arglist__14911){
var f = cljs.core.first(arglist__14911);
var args = cljs.core.rest(arglist__14911);
return G__14908__delegate.call(this, f, args);
});
return G__14908;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14901.call(this,f);
default:
return trampoline__14902.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14902.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14920 = (function (){
return rand.call(null,1);
});
var rand__14921 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14920.call(this);
case  1 :
return rand__14921.call(this,n);
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
var k__14941 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14941,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14941,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14958 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14959 = (function (h,child,parent){
var or__3548__auto____14947 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14947))
{return or__3548__auto____14947;
} else
{var or__3548__auto____14948 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14948))
{return or__3548__auto____14948;
} else
{var and__3546__auto____14949 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14949))
{var and__3546__auto____14951 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14951))
{var and__3546__auto____14952 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14952))
{var ret__14953 = true;
var i__14955 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14956 = cljs.core.not.call(null,ret__14953);

if(cljs.core.truth_(or__3548__auto____14956))
{return or__3548__auto____14956;
} else
{return cljs.core._EQ_.call(null,i__14955,cljs.core.count.call(null,parent));
}
})()))
{return ret__14953;
} else
{{
var G__14966 = isa_QMARK_.call(null,h,child.call(null,i__14955),parent.call(null,i__14955));
var G__14967 = (i__14955 + 1);
ret__14953 = G__14966;
i__14955 = G__14967;
continue;
}
}
break;
}
} else
{return and__3546__auto____14952;
}
} else
{return and__3546__auto____14951;
}
} else
{return and__3546__auto____14949;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14958.call(this,h,child);
case  3 :
return isa_QMARK___14959.call(this,h,child,parent);
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
var parents__14971 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14972 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14971.call(this,h);
case  2 :
return parents__14972.call(this,h,tag);
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
var ancestors__14975 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14976 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14975.call(this,h);
case  2 :
return ancestors__14976.call(this,h,tag);
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
var descendants__14979 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14981 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14979.call(this,h);
case  2 :
return descendants__14981.call(this,h,tag);
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
var derive__15006 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15007 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14996 = "﷐'parents".call(null,h);
var td__14997 = "﷐'descendants".call(null,h);
var ta__14998 = "﷐'ancestors".call(null,h);
var tf__15001 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15004 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14996.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14998.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14998.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14996,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15001.call(null,"﷐'ancestors".call(null,h),tag,td__14997,parent,ta__14998),"﷐'descendants":tf__15001.call(null,"﷐'descendants".call(null,h),parent,ta__14998,tag,td__14997)});
})());

if(cljs.core.truth_(or__3548__auto____15004))
{return or__3548__auto____15004;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15006.call(this,h,tag);
case  3 :
return derive__15007.call(this,h,tag,parent);
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
var underive__15023 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15024 = (function (h,tag,parent){
var parentMap__15016 = "﷐'parents".call(null,h);
var childsParents__15017 = (cljs.core.truth_(parentMap__15016.call(null,tag))?cljs.core.disj.call(null,parentMap__15016.call(null,tag),parent):cljs.core.set([]));
var newParents__15018 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15017))?cljs.core.assoc.call(null,parentMap__15016,tag,childsParents__15017):cljs.core.dissoc.call(null,parentMap__15016,tag));
var deriv_seq__15022 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14986_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14986_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14986_SHARP_),cljs.core.second.call(null,p1__14986_SHARP_)));
}),cljs.core.seq.call(null,newParents__15018)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15016.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14988_SHARP_,p2__14989_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14988_SHARP_,p2__14989_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15022));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15023.call(this,h,tag);
case  3 :
return underive__15024.call(this,h,tag,parent);
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
var xprefs__15037 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15040 = (cljs.core.truth_((function (){var and__3546__auto____15039 = xprefs__15037;

if(cljs.core.truth_(and__3546__auto____15039))
{return xprefs__15037.call(null,y);
} else
{return and__3546__auto____15039;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15040))
{return or__3548__auto____15040;
} else
{var or__3548__auto____15042 = (function (){var ps__15041 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15041) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15041),prefer_table)))
{} else
{}
{
var G__15048 = cljs.core.rest.call(null,ps__15041);
ps__15041 = G__15048;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15042))
{return or__3548__auto____15042;
} else
{var or__3548__auto____15045 = (function (){var ps__15043 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15043) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15043),y,prefer_table)))
{} else
{}
{
var G__15050 = cljs.core.rest.call(null,ps__15043);
ps__15043 = G__15050;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15045))
{return or__3548__auto____15045;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15055 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15055))
{return or__3548__auto____15055;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15086 = cljs.core.reduce.call(null,(function (be,p__15069){
var vec__15071__15073 = p__15069;
var k__15074 = cljs.core.nth.call(null,vec__15071__15073,0,null);
var ___15075 = cljs.core.nth.call(null,vec__15071__15073,1,null);
var e__15076 = vec__15071__15073;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15074)))
{var be2__15081 = (cljs.core.truth_((function (){var or__3548__auto____15077 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15077))
{return or__3548__auto____15077;
} else
{return cljs.core.dominates.call(null,k__15074,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15076:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15081),k__15074,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15074," and ",cljs.core.first.call(null,be2__15081),", and neither is preferred")));
}
return be2__15081;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15086))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15086));
return cljs.core.second.call(null,best_entry__15086);
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
if(cljs.core.truth_((function (){var and__3546__auto____15099 = mf;

if(cljs.core.truth_(and__3546__auto____15099))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15099;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15106 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15106))
{return or__3548__auto____15106;
} else
{var or__3548__auto____15116 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15116))
{return or__3548__auto____15116;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15123 = mf;

if(cljs.core.truth_(and__3546__auto____15123))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15123;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15126 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15126))
{return or__3548__auto____15126;
} else
{var or__3548__auto____15130 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15130))
{return or__3548__auto____15130;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15134 = mf;

if(cljs.core.truth_(and__3546__auto____15134))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15134;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15137 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15137))
{return or__3548__auto____15137;
} else
{var or__3548__auto____15139 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15139))
{return or__3548__auto____15139;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15145 = mf;

if(cljs.core.truth_(and__3546__auto____15145))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15145;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15150 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15150))
{return or__3548__auto____15150;
} else
{var or__3548__auto____15153 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15153))
{return or__3548__auto____15153;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15157 = mf;

if(cljs.core.truth_(and__3546__auto____15157))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15157;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15162 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15162))
{return or__3548__auto____15162;
} else
{var or__3548__auto____15164 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15164))
{return or__3548__auto____15164;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15166 = mf;

if(cljs.core.truth_(and__3546__auto____15166))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15166;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15172 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15172))
{return or__3548__auto____15172;
} else
{var or__3548__auto____15177 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15177))
{return or__3548__auto____15177;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15180 = mf;

if(cljs.core.truth_(and__3546__auto____15180))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15180;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15182 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15182))
{return or__3548__auto____15182;
} else
{var or__3548__auto____15190 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15190))
{return or__3548__auto____15190;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15193 = mf;

if(cljs.core.truth_(and__3546__auto____15193))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15193;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15195 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15195))
{return or__3548__auto____15195;
} else
{var or__3548__auto____15196 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15196))
{return or__3548__auto____15196;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15279 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15280 = cljs.core._get_method.call(null,mf,dispatch_val__15279);

if(cljs.core.truth_(target_fn__15280))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15279)));
}
return cljs.core.apply.call(null,target_fn__15280,args);
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
var this__15288 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15290 = this;
cljs.core.swap_BANG_.call(null,this__15290.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15290.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15290.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15290.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15302 = this;
cljs.core.swap_BANG_.call(null,this__15302.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15302.method_cache,this__15302.method_table,this__15302.cached_hierarchy,this__15302.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15305 = this;
cljs.core.swap_BANG_.call(null,this__15305.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15305.method_cache,this__15305.method_table,this__15305.cached_hierarchy,this__15305.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15307 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15307.cached_hierarchy),cljs.core.deref.call(null,this__15307.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15307.method_cache,this__15307.method_table,this__15307.cached_hierarchy,this__15307.hierarchy);
}
var temp__3695__auto____15309 = cljs.core.deref.call(null,this__15307.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15309))
{var target_fn__15313 = temp__3695__auto____15309;

return target_fn__15313;
} else
{var temp__3695__auto____15314 = cljs.core.find_and_cache_best_method.call(null,this__15307.name,dispatch_val,this__15307.hierarchy,this__15307.method_table,this__15307.prefer_table,this__15307.method_cache,this__15307.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15314))
{var target_fn__15316 = temp__3695__auto____15314;

return target_fn__15316;
} else
{return cljs.core.deref.call(null,this__15307.method_table).call(null,this__15307.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15318 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15318.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15318.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15318.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15318.method_cache,this__15318.method_table,this__15318.cached_hierarchy,this__15318.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15324 = this;
return cljs.core.deref.call(null,this__15324.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15325 = this;
return cljs.core.deref.call(null,this__15325.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15331 = this;
return cljs.core.do_dispatch.call(null,mf,this__15331.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15362__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15362 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15362__delegate.call(this, _, args);
};
G__15362.cljs$lang$maxFixedArity = 1;
G__15362.cljs$lang$applyTo = (function (arglist__15363){
var _ = cljs.core.first(arglist__15363);
var args = cljs.core.rest(arglist__15363);
return G__15362__delegate.call(this, _, args);
});
return G__15362;
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
