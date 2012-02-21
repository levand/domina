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
var or__3548__auto____7305 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7305))
{return or__3548__auto____7305;
} else
{var or__3548__auto____7313 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7313))
{return or__3548__auto____7313;
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
var _invoke__7717 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7444 = this$;

if(cljs.core.truth_(and__3546__auto____7444))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7444;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7447 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7447))
{return or__3548__auto____7447;
} else
{var or__3548__auto____7449 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7449))
{return or__3548__auto____7449;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7718 = (function (this$,a){
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
{var or__3548__auto____7460 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7460))
{return or__3548__auto____7460;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7719 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7465 = this$;

if(cljs.core.truth_(and__3546__auto____7465))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7465;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7468 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7468))
{return or__3548__auto____7468;
} else
{var or__3548__auto____7471 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7471))
{return or__3548__auto____7471;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7720 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7475 = this$;

if(cljs.core.truth_(and__3546__auto____7475))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7475;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7479 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7479))
{return or__3548__auto____7479;
} else
{var or__3548__auto____7482 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7482))
{return or__3548__auto____7482;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7721 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7485 = this$;

if(cljs.core.truth_(and__3546__auto____7485))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7485;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
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
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7722 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7492 = this$;

if(cljs.core.truth_(and__3546__auto____7492))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7492;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7547 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7547))
{return or__3548__auto____7547;
} else
{var or__3548__auto____7548 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7548))
{return or__3548__auto____7548;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7723 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7552 = this$;

if(cljs.core.truth_(and__3546__auto____7552))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7552;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7555 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7555))
{return or__3548__auto____7555;
} else
{var or__3548__auto____7557 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7557))
{return or__3548__auto____7557;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7724 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7560 = this$;

if(cljs.core.truth_(and__3546__auto____7560))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7560;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7562 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7562))
{return or__3548__auto____7562;
} else
{var or__3548__auto____7573 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7573))
{return or__3548__auto____7573;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7725 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7629 = this$;

if(cljs.core.truth_(and__3546__auto____7629))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7629;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7631 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7631))
{return or__3548__auto____7631;
} else
{var or__3548__auto____7641 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7641))
{return or__3548__auto____7641;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7726 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7642 = this$;

if(cljs.core.truth_(and__3546__auto____7642))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7642;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7643 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7643))
{return or__3548__auto____7643;
} else
{var or__3548__auto____7644 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7644))
{return or__3548__auto____7644;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7727 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7645 = this$;

if(cljs.core.truth_(and__3546__auto____7645))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7645;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7728 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7648 = this$;

if(cljs.core.truth_(and__3546__auto____7648))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7648;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7729 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7651 = this$;

if(cljs.core.truth_(and__3546__auto____7651))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7651;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7730 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7655 = this$;

if(cljs.core.truth_(and__3546__auto____7655))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7655;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7657 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7657))
{return or__3548__auto____7657;
} else
{var or__3548__auto____7659 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7659))
{return or__3548__auto____7659;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7731 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7661 = this$;

if(cljs.core.truth_(and__3546__auto____7661))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7661;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7663 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7663))
{return or__3548__auto____7663;
} else
{var or__3548__auto____7665 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7665))
{return or__3548__auto____7665;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7732 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7667 = this$;

if(cljs.core.truth_(and__3546__auto____7667))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7667;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7733 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7670 = this$;

if(cljs.core.truth_(and__3546__auto____7670))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7670;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7671 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7671))
{return or__3548__auto____7671;
} else
{var or__3548__auto____7672 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7672))
{return or__3548__auto____7672;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7734 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7678 = this$;

if(cljs.core.truth_(and__3546__auto____7678))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7678;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7735 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7681 = this$;

if(cljs.core.truth_(and__3546__auto____7681))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7681;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7686 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7686))
{return or__3548__auto____7686;
} else
{var or__3548__auto____7688 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7688))
{return or__3548__auto____7688;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7736 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7689 = this$;

if(cljs.core.truth_(and__3546__auto____7689))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7689;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7699 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7699))
{return or__3548__auto____7699;
} else
{var or__3548__auto____7712 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7712))
{return or__3548__auto____7712;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7738 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7714 = this$;

if(cljs.core.truth_(and__3546__auto____7714))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7714;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7715 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7715))
{return or__3548__auto____7715;
} else
{var or__3548__auto____7716 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7716))
{return or__3548__auto____7716;
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
return _invoke__7717.call(this,this$);
case  2 :
return _invoke__7718.call(this,this$,a);
case  3 :
return _invoke__7719.call(this,this$,a,b);
case  4 :
return _invoke__7720.call(this,this$,a,b,c);
case  5 :
return _invoke__7721.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7722.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7723.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7724.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7725.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7726.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7727.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7728.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7729.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7730.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7731.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7732.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7733.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7734.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7735.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7736.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7738.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7833 = coll;

if(cljs.core.truth_(and__3546__auto____7833))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7833;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7836 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7836))
{return or__3548__auto____7836;
} else
{var or__3548__auto____7837 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7837))
{return or__3548__auto____7837;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7841 = coll;

if(cljs.core.truth_(and__3546__auto____7841))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7841;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7842 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7842))
{return or__3548__auto____7842;
} else
{var or__3548__auto____7843 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7843))
{return or__3548__auto____7843;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7845 = coll;

if(cljs.core.truth_(and__3546__auto____7845))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7845;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7848 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7848))
{return or__3548__auto____7848;
} else
{var or__3548__auto____7850 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7850))
{return or__3548__auto____7850;
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
var _nth__7915 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7859 = coll;

if(cljs.core.truth_(and__3546__auto____7859))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7859;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7903 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7903))
{return or__3548__auto____7903;
} else
{var or__3548__auto____7904 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7904))
{return or__3548__auto____7904;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7916 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7910 = coll;

if(cljs.core.truth_(and__3546__auto____7910))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7910;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7912 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7912))
{return or__3548__auto____7912;
} else
{var or__3548__auto____7914 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7914))
{return or__3548__auto____7914;
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
return _nth__7915.call(this,coll,n);
case  3 :
return _nth__7916.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7924 = coll;

if(cljs.core.truth_(and__3546__auto____7924))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7924;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7926 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7926))
{return or__3548__auto____7926;
} else
{var or__3548__auto____7928 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7928))
{return or__3548__auto____7928;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7933 = coll;

if(cljs.core.truth_(and__3546__auto____7933))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7933;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7936 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7936))
{return or__3548__auto____7936;
} else
{var or__3548__auto____7939 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7939))
{return or__3548__auto____7939;
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
var _lookup__7960 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7945 = o;

if(cljs.core.truth_(and__3546__auto____7945))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7945;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7947 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7947))
{return or__3548__auto____7947;
} else
{var or__3548__auto____7949 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7949))
{return or__3548__auto____7949;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7961 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7953 = o;

if(cljs.core.truth_(and__3546__auto____7953))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7953;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7956 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7956))
{return or__3548__auto____7956;
} else
{var or__3548__auto____7957 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7957))
{return or__3548__auto____7957;
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
return _lookup__7960.call(this,o,k);
case  3 :
return _lookup__7961.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7972 = coll;

if(cljs.core.truth_(and__3546__auto____7972))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7972;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7974 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7974))
{return or__3548__auto____7974;
} else
{var or__3548__auto____7975 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7975))
{return or__3548__auto____7975;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7980 = coll;

if(cljs.core.truth_(and__3546__auto____7980))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7980;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7982 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7982))
{return or__3548__auto____7982;
} else
{var or__3548__auto____7984 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7984))
{return or__3548__auto____7984;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7990 = coll;

if(cljs.core.truth_(and__3546__auto____7990))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7990;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7991 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7991))
{return or__3548__auto____7991;
} else
{var or__3548__auto____7992 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7992))
{return or__3548__auto____7992;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7998 = coll;

if(cljs.core.truth_(and__3546__auto____7998))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7998;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____8001 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8001))
{return or__3548__auto____8001;
} else
{var or__3548__auto____8002 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____8002))
{return or__3548__auto____8002;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8011 = coll;

if(cljs.core.truth_(and__3546__auto____8011))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____8011;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____8016 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8016))
{return or__3548__auto____8016;
} else
{var or__3548__auto____8017 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____8017))
{return or__3548__auto____8017;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8022 = coll;

if(cljs.core.truth_(and__3546__auto____8022))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____8022;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8025 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8025))
{return or__3548__auto____8025;
} else
{var or__3548__auto____8026 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8026))
{return or__3548__auto____8026;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8042 = coll;

if(cljs.core.truth_(and__3546__auto____8042))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8042;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8043 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8043))
{return or__3548__auto____8043;
} else
{var or__3548__auto____8044 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8044))
{return or__3548__auto____8044;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8051 = o;

if(cljs.core.truth_(and__3546__auto____8051))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8051;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8055 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8055))
{return or__3548__auto____8055;
} else
{var or__3548__auto____8056 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8056))
{return or__3548__auto____8056;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8063 = o;

if(cljs.core.truth_(and__3546__auto____8063))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8063;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8067 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8067))
{return or__3548__auto____8067;
} else
{var or__3548__auto____8068 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8068))
{return or__3548__auto____8068;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8072 = o;

if(cljs.core.truth_(and__3546__auto____8072))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8072;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8073 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
} else
{var or__3548__auto____8075 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8083 = o;

if(cljs.core.truth_(and__3546__auto____8083))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8083;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8085 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8085))
{return or__3548__auto____8085;
} else
{var or__3548__auto____8086 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8086))
{return or__3548__auto____8086;
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
{return (function (){var or__3548__auto____8093 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8093))
{return or__3548__auto____8093;
} else
{var or__3548__auto____8095 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8095))
{return or__3548__auto____8095;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8103 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8099 = coll;

if(cljs.core.truth_(and__3546__auto____8099))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8099;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8100 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8100))
{return or__3548__auto____8100;
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
return _reduce__8103.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8114 = o;

if(cljs.core.truth_(and__3546__auto____8114))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8114;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8115 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8115))
{return or__3548__auto____8115;
} else
{var or__3548__auto____8116 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8116))
{return or__3548__auto____8116;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8122 = o;

if(cljs.core.truth_(and__3546__auto____8122))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8122;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8124 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8124))
{return or__3548__auto____8124;
} else
{var or__3548__auto____8125 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8125))
{return or__3548__auto____8125;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8132 = o;

if(cljs.core.truth_(and__3546__auto____8132))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8132;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8180 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8180))
{return or__3548__auto____8180;
} else
{var or__3548__auto____8181 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8181))
{return or__3548__auto____8181;
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
if(cljs.core.truth_((function (){var and__3546__auto____8195 = o;

if(cljs.core.truth_(and__3546__auto____8195))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8195;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8196 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8196))
{return or__3548__auto____8196;
} else
{var or__3548__auto____8197 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8197))
{return or__3548__auto____8197;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8201 = d;

if(cljs.core.truth_(and__3546__auto____8201))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8201;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8203 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8203))
{return or__3548__auto____8203;
} else
{var or__3548__auto____8205 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8205))
{return or__3548__auto____8205;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8208 = this$;

if(cljs.core.truth_(and__3546__auto____8208))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8208;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8210 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8210))
{return or__3548__auto____8210;
} else
{var or__3548__auto____8212 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8212))
{return or__3548__auto____8212;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8213 = this$;

if(cljs.core.truth_(and__3546__auto____8213))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8213;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8214 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8214))
{return or__3548__auto____8214;
} else
{var or__3548__auto____8215 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8215))
{return or__3548__auto____8215;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8220 = this$;

if(cljs.core.truth_(and__3546__auto____8220))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8220;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8221 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8221))
{return or__3548__auto____8221;
} else
{var or__3548__auto____8222 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8222))
{return or__3548__auto____8222;
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
var G__8260 = null;
var G__8260__8261 = (function (o,k){
return null;
});
var G__8260__8262 = (function (o,k,not_found){
return not_found;
});
G__8260 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8260__8261.call(this,o,k);
case  3 :
return G__8260__8262.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8260;
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
var G__8266 = null;
var G__8266__8267 = (function (_,f){
return f.call(null);
});
var G__8266__8268 = (function (_,f,start){
return start;
});
G__8266 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8266__8267.call(this,_,f);
case  3 :
return G__8266__8268.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8266;
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
var G__8284 = null;
var G__8284__8285 = (function (_,n){
return null;
});
var G__8284__8286 = (function (_,n,not_found){
return not_found;
});
G__8284 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8284__8285.call(this,_,n);
case  3 :
return G__8284__8286.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8284;
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
var ci_reduce__8302 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8296 = cljs.core._nth.call(null,cicoll,0);
var n__8297 = 1;

while(true){
if(cljs.core.truth_((n__8297 < cljs.core._count.call(null,cicoll))))
{{
var G__8338 = f.call(null,val__8296,cljs.core._nth.call(null,cicoll,n__8297));
var G__8339 = (n__8297 + 1);
val__8296 = G__8338;
n__8297 = G__8339;
continue;
}
} else
{return val__8296;
}
break;
}
}
});
var ci_reduce__8303 = (function (cicoll,f,val){
var val__8298 = val;
var n__8299 = 0;

while(true){
if(cljs.core.truth_((n__8299 < cljs.core._count.call(null,cicoll))))
{{
var G__8340 = f.call(null,val__8298,cljs.core._nth.call(null,cicoll,n__8299));
var G__8341 = (n__8299 + 1);
val__8298 = G__8340;
n__8299 = G__8341;
continue;
}
} else
{return val__8298;
}
break;
}
});
var ci_reduce__8304 = (function (cicoll,f,val,idx){
var val__8300 = val;
var n__8301 = idx;

while(true){
if(cljs.core.truth_((n__8301 < cljs.core._count.call(null,cicoll))))
{{
var G__8342 = f.call(null,val__8300,cljs.core._nth.call(null,cicoll,n__8301));
var G__8343 = (n__8301 + 1);
val__8300 = G__8342;
n__8301 = G__8343;
continue;
}
} else
{return val__8300;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8302.call(this,cicoll,f);
case  3 :
return ci_reduce__8303.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8304.call(this,cicoll,f,val,idx);
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
var this__8348 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8366 = null;
var G__8366__8367 = (function (_,f){
var this__8349 = this;
return cljs.core.ci_reduce.call(null,this__8349.a,f,(this__8349.a[this__8349.i]),(this__8349.i + 1));
});
var G__8366__8368 = (function (_,f,start){
var this__8353 = this;
return cljs.core.ci_reduce.call(null,this__8353.a,f,start,this__8353.i);
});
G__8366 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8366__8367.call(this,_,f);
case  3 :
return G__8366__8368.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8366;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8355 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8357 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8375 = null;
var G__8375__8376 = (function (coll,n){
var this__8358 = this;
var i__8359 = (n + this__8358.i);

if(cljs.core.truth_((i__8359 < this__8358.a.length)))
{return (this__8358.a[i__8359]);
} else
{return null;
}
});
var G__8375__8377 = (function (coll,n,not_found){
var this__8360 = this;
var i__8361 = (n + this__8360.i);

if(cljs.core.truth_((i__8361 < this__8360.a.length)))
{return (this__8360.a[i__8361]);
} else
{return not_found;
}
});
G__8375 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8375__8376.call(this,coll,n);
case  3 :
return G__8375__8377.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8375;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8362 = this;
return (this__8362.a.length - this__8362.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8363 = this;
return (this__8363.a[this__8363.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8364 = this;
if(cljs.core.truth_(((this__8364.i + 1) < this__8364.a.length)))
{return (new cljs.core.IndexedSeq(this__8364.a,(this__8364.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8365 = this;
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
var G__8693 = null;
var G__8693__8694 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8693__8695 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8693 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8693__8694.call(this,array,f);
case  3 :
return G__8693__8695.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8693;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8698 = null;
var G__8698__8699 = (function (array,k){
return (array[k]);
});
var G__8698__8701 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8698 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8698__8699.call(this,array,k);
case  3 :
return G__8698__8701.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8698;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8706 = null;
var G__8706__8707 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8706__8708 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8706 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8706__8707.call(this,array,n);
case  3 :
return G__8706__8708.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8706;
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
var temp__3698__auto____8728 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8728))
{var s__8729 = temp__3698__auto____8728;

return cljs.core._first.call(null,s__8729);
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
var G__8760 = cljs.core.next.call(null,s);
s = G__8760;
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
var s__8765 = cljs.core.seq.call(null,x);
var n__8766 = 0;

while(true){
if(cljs.core.truth_(s__8765))
{{
var G__8771 = cljs.core.next.call(null,s__8765);
var G__8772 = (n__8766 + 1);
s__8765 = G__8771;
n__8766 = G__8772;
continue;
}
} else
{return n__8766;
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
var conj__8791 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8792 = (function() { 
var G__8794__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8795 = conj.call(null,coll,x);
var G__8796 = cljs.core.first.call(null,xs);
var G__8797 = cljs.core.next.call(null,xs);
coll = G__8795;
x = G__8796;
xs = G__8797;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8794 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8794__delegate.call(this, coll, x, xs);
};
G__8794.cljs$lang$maxFixedArity = 2;
G__8794.cljs$lang$applyTo = (function (arglist__8799){
var coll = cljs.core.first(arglist__8799);
var x = cljs.core.first(cljs.core.next(arglist__8799));
var xs = cljs.core.rest(cljs.core.next(arglist__8799));
return G__8794__delegate.call(this, coll, x, xs);
});
return G__8794;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8791.call(this,coll,x);
default:
return conj__8792.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8792.cljs$lang$applyTo;
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
var nth__8820 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8822 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8820.call(this,coll,n);
case  3 :
return nth__8822.call(this,coll,n,not_found);
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
var get__8827 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8828 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8827.call(this,o,k);
case  3 :
return get__8828.call(this,o,k,not_found);
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
var assoc__8833 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8834 = (function() { 
var G__8836__delegate = function (coll,k,v,kvs){
while(true){
var ret__8831 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8838 = ret__8831;
var G__8839 = cljs.core.first.call(null,kvs);
var G__8840 = cljs.core.second.call(null,kvs);
var G__8841 = cljs.core.nnext.call(null,kvs);
coll = G__8838;
k = G__8839;
v = G__8840;
kvs = G__8841;
continue;
}
} else
{return ret__8831;
}
break;
}
};
var G__8836 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8836__delegate.call(this, coll, k, v, kvs);
};
G__8836.cljs$lang$maxFixedArity = 3;
G__8836.cljs$lang$applyTo = (function (arglist__8842){
var coll = cljs.core.first(arglist__8842);
var k = cljs.core.first(cljs.core.next(arglist__8842));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8842)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8842)));
return G__8836__delegate.call(this, coll, k, v, kvs);
});
return G__8836;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8833.call(this,coll,k,v);
default:
return assoc__8834.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8834.cljs$lang$applyTo;
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
var dissoc__8857 = (function (coll){
return coll;
});
var dissoc__8859 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8860 = (function() { 
var G__8863__delegate = function (coll,k,ks){
while(true){
var ret__8854 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8865 = ret__8854;
var G__8866 = cljs.core.first.call(null,ks);
var G__8867 = cljs.core.next.call(null,ks);
coll = G__8865;
k = G__8866;
ks = G__8867;
continue;
}
} else
{return ret__8854;
}
break;
}
};
var G__8863 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8863__delegate.call(this, coll, k, ks);
};
G__8863.cljs$lang$maxFixedArity = 2;
G__8863.cljs$lang$applyTo = (function (arglist__8871){
var coll = cljs.core.first(arglist__8871);
var k = cljs.core.first(cljs.core.next(arglist__8871));
var ks = cljs.core.rest(cljs.core.next(arglist__8871));
return G__8863__delegate.call(this, coll, k, ks);
});
return G__8863;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8857.call(this,coll);
case  2 :
return dissoc__8859.call(this,coll,k);
default:
return dissoc__8860.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8860.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8884 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8889 = x__445__auto____8884;

if(cljs.core.truth_(and__3546__auto____8889))
{var and__3546__auto____8890 = x__445__auto____8884.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8890))
{return cljs.core.not.call(null,x__445__auto____8884.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8890;
}
} else
{return and__3546__auto____8889;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8884);
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
var disj__8897 = (function (coll){
return coll;
});
var disj__8898 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8899 = (function() { 
var G__8901__delegate = function (coll,k,ks){
while(true){
var ret__8896 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8903 = ret__8896;
var G__8904 = cljs.core.first.call(null,ks);
var G__8905 = cljs.core.next.call(null,ks);
coll = G__8903;
k = G__8904;
ks = G__8905;
continue;
}
} else
{return ret__8896;
}
break;
}
};
var G__8901 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8901__delegate.call(this, coll, k, ks);
};
G__8901.cljs$lang$maxFixedArity = 2;
G__8901.cljs$lang$applyTo = (function (arglist__8910){
var coll = cljs.core.first(arglist__8910);
var k = cljs.core.first(cljs.core.next(arglist__8910));
var ks = cljs.core.rest(cljs.core.next(arglist__8910));
return G__8901__delegate.call(this, coll, k, ks);
});
return G__8901;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8897.call(this,coll);
case  2 :
return disj__8898.call(this,coll,k);
default:
return disj__8899.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8899.cljs$lang$applyTo;
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
{var x__445__auto____8924 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8925 = x__445__auto____8924;

if(cljs.core.truth_(and__3546__auto____8925))
{var and__3546__auto____8927 = x__445__auto____8924.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8927))
{return cljs.core.not.call(null,x__445__auto____8924.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8927;
}
} else
{return and__3546__auto____8925;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8924);
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
{var x__445__auto____8931 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8933 = x__445__auto____8931;

if(cljs.core.truth_(and__3546__auto____8933))
{var and__3546__auto____8934 = x__445__auto____8931.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8934))
{return cljs.core.not.call(null,x__445__auto____8931.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8934;
}
} else
{return and__3546__auto____8933;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8931);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8942 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8943 = x__445__auto____8942;

if(cljs.core.truth_(and__3546__auto____8943))
{var and__3546__auto____8945 = x__445__auto____8942.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8945))
{return cljs.core.not.call(null,x__445__auto____8942.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8945;
}
} else
{return and__3546__auto____8943;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8942);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8963 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8964 = x__445__auto____8963;

if(cljs.core.truth_(and__3546__auto____8964))
{var and__3546__auto____8968 = x__445__auto____8963.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8968))
{return cljs.core.not.call(null,x__445__auto____8963.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8968;
}
} else
{return and__3546__auto____8964;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8963);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8976 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8979 = x__445__auto____8976;

if(cljs.core.truth_(and__3546__auto____8979))
{var and__3546__auto____8981 = x__445__auto____8976.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8981))
{return cljs.core.not.call(null,x__445__auto____8976.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8981;
}
} else
{return and__3546__auto____8979;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8976);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8983 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8984 = x__445__auto____8983;

if(cljs.core.truth_(and__3546__auto____8984))
{var and__3546__auto____8985 = x__445__auto____8983.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8985))
{return cljs.core.not.call(null,x__445__auto____8983.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8985;
}
} else
{return and__3546__auto____8984;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8983);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8987 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8988 = x__445__auto____8987;

if(cljs.core.truth_(and__3546__auto____8988))
{var and__3546__auto____8989 = x__445__auto____8987.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8989))
{return cljs.core.not.call(null,x__445__auto____8987.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8989;
}
} else
{return and__3546__auto____8988;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8987);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8996 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8996.push(key);
}));
return keys__8996;
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
{var x__445__auto____9008 = s;

if(cljs.core.truth_((function (){var and__3546__auto____9011 = x__445__auto____9008;

if(cljs.core.truth_(and__3546__auto____9011))
{var and__3546__auto____9012 = x__445__auto____9008.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____9012))
{return cljs.core.not.call(null,x__445__auto____9008.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____9012;
}
} else
{return and__3546__auto____9011;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____9008);
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
var and__3546__auto____9018 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9018))
{return cljs.core.not.call(null,(function (){var or__3548__auto____9019 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____9019))
{return or__3548__auto____9019;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____9018;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____9024 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9024))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____9024;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____9033 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9033))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____9033;
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
var and__3546__auto____9042 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____9042))
{return (n == n.toFixed());
} else
{return and__3546__auto____9042;
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
if(cljs.core.truth_((function (){var and__3546__auto____9054 = coll;

if(cljs.core.truth_(and__3546__auto____9054))
{var and__3546__auto____9058 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9058))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9058;
}
} else
{return and__3546__auto____9054;
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
var distinct_QMARK___9084 = (function (x){
return true;
});
var distinct_QMARK___9085 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9086 = (function() { 
var G__9089__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9069 = cljs.core.set([y,x]);
var xs__9072 = more;

while(true){
var x__9074 = cljs.core.first.call(null,xs__9072);
var etc__9077 = cljs.core.next.call(null,xs__9072);

if(cljs.core.truth_(xs__9072))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9069,x__9074)))
{return false;
} else
{{
var G__9094 = cljs.core.conj.call(null,s__9069,x__9074);
var G__9095 = etc__9077;
s__9069 = G__9094;
xs__9072 = G__9095;
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
var G__9089 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9089__delegate.call(this, x, y, more);
};
G__9089.cljs$lang$maxFixedArity = 2;
G__9089.cljs$lang$applyTo = (function (arglist__9101){
var x = cljs.core.first(arglist__9101);
var y = cljs.core.first(cljs.core.next(arglist__9101));
var more = cljs.core.rest(cljs.core.next(arglist__9101));
return G__9089__delegate.call(this, x, y, more);
});
return G__9089;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9084.call(this,x);
case  2 :
return distinct_QMARK___9085.call(this,x,y);
default:
return distinct_QMARK___9086.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9086.cljs$lang$applyTo;
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
var r__9119 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9119)))
{return r__9119;
} else
{if(cljs.core.truth_(r__9119))
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
var sort__9136 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9137 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9129 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9129,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9129);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9136.call(this,comp);
case  2 :
return sort__9137.call(this,comp,coll);
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
var sort_by__9148 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9151 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9148.call(this,keyfn,comp);
case  3 :
return sort_by__9151.call(this,keyfn,comp,coll);
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
var reduce__9204 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9205 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9204.call(this,f,val);
case  3 :
return reduce__9205.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9227 = (function (f,coll){
var temp__3695__auto____9207 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9207))
{var s__9212 = temp__3695__auto____9207;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9212),cljs.core.next.call(null,s__9212));
} else
{return f.call(null);
}
});
var seq_reduce__9228 = (function (f,val,coll){
var val__9218 = val;
var coll__9221 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9221))
{{
var G__9232 = f.call(null,val__9218,cljs.core.first.call(null,coll__9221));
var G__9233 = cljs.core.next.call(null,coll__9221);
val__9218 = G__9232;
coll__9221 = G__9233;
continue;
}
} else
{return val__9218;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9227.call(this,f,val);
case  3 :
return seq_reduce__9228.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9234 = null;
var G__9234__9235 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9234__9236 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9234 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9234__9235.call(this,coll,f);
case  3 :
return G__9234__9236.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9234;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9251 = (function (){
return 0;
});
var _PLUS___9252 = (function (x){
return x;
});
var _PLUS___9253 = (function (x,y){
return (x + y);
});
var _PLUS___9254 = (function() { 
var G__9256__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9256 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9256__delegate.call(this, x, y, more);
};
G__9256.cljs$lang$maxFixedArity = 2;
G__9256.cljs$lang$applyTo = (function (arglist__9257){
var x = cljs.core.first(arglist__9257);
var y = cljs.core.first(cljs.core.next(arglist__9257));
var more = cljs.core.rest(cljs.core.next(arglist__9257));
return G__9256__delegate.call(this, x, y, more);
});
return G__9256;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9251.call(this);
case  1 :
return _PLUS___9252.call(this,x);
case  2 :
return _PLUS___9253.call(this,x,y);
default:
return _PLUS___9254.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9254.cljs$lang$applyTo;
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
var ___9267 = (function (x){
return (- x);
});
var ___9268 = (function (x,y){
return (x - y);
});
var ___9269 = (function() { 
var G__9271__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9271 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9271__delegate.call(this, x, y, more);
};
G__9271.cljs$lang$maxFixedArity = 2;
G__9271.cljs$lang$applyTo = (function (arglist__9272){
var x = cljs.core.first(arglist__9272);
var y = cljs.core.first(cljs.core.next(arglist__9272));
var more = cljs.core.rest(cljs.core.next(arglist__9272));
return G__9271__delegate.call(this, x, y, more);
});
return G__9271;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9267.call(this,x);
case  2 :
return ___9268.call(this,x,y);
default:
return ___9269.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9269.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9276 = (function (){
return 1;
});
var _STAR___9277 = (function (x){
return x;
});
var _STAR___9279 = (function (x,y){
return (x * y);
});
var _STAR___9280 = (function() { 
var G__9283__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9283 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9283__delegate.call(this, x, y, more);
};
G__9283.cljs$lang$maxFixedArity = 2;
G__9283.cljs$lang$applyTo = (function (arglist__9285){
var x = cljs.core.first(arglist__9285);
var y = cljs.core.first(cljs.core.next(arglist__9285));
var more = cljs.core.rest(cljs.core.next(arglist__9285));
return G__9283__delegate.call(this, x, y, more);
});
return G__9283;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9276.call(this);
case  1 :
return _STAR___9277.call(this,x);
case  2 :
return _STAR___9279.call(this,x,y);
default:
return _STAR___9280.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9280.cljs$lang$applyTo;
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
var _SLASH___9290 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9291 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9292 = (function() { 
var G__9295__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9295 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9295__delegate.call(this, x, y, more);
};
G__9295.cljs$lang$maxFixedArity = 2;
G__9295.cljs$lang$applyTo = (function (arglist__9298){
var x = cljs.core.first(arglist__9298);
var y = cljs.core.first(cljs.core.next(arglist__9298));
var more = cljs.core.rest(cljs.core.next(arglist__9298));
return G__9295__delegate.call(this, x, y, more);
});
return G__9295;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9290.call(this,x);
case  2 :
return _SLASH___9291.call(this,x,y);
default:
return _SLASH___9292.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9292.cljs$lang$applyTo;
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
var _LT___9306 = (function (x){
return true;
});
var _LT___9307 = (function (x,y){
return (x < y);
});
var _LT___9308 = (function() { 
var G__9310__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9311 = y;
var G__9312 = cljs.core.first.call(null,more);
var G__9313 = cljs.core.next.call(null,more);
x = G__9311;
y = G__9312;
more = G__9313;
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
var G__9310 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9310__delegate.call(this, x, y, more);
};
G__9310.cljs$lang$maxFixedArity = 2;
G__9310.cljs$lang$applyTo = (function (arglist__9321){
var x = cljs.core.first(arglist__9321);
var y = cljs.core.first(cljs.core.next(arglist__9321));
var more = cljs.core.rest(cljs.core.next(arglist__9321));
return G__9310__delegate.call(this, x, y, more);
});
return G__9310;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9306.call(this,x);
case  2 :
return _LT___9307.call(this,x,y);
default:
return _LT___9308.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9308.cljs$lang$applyTo;
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
var _LT__EQ___9388 = (function (x){
return true;
});
var _LT__EQ___9390 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9391 = (function() { 
var G__9394__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9398 = y;
var G__9399 = cljs.core.first.call(null,more);
var G__9400 = cljs.core.next.call(null,more);
x = G__9398;
y = G__9399;
more = G__9400;
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
var G__9394 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9394__delegate.call(this, x, y, more);
};
G__9394.cljs$lang$maxFixedArity = 2;
G__9394.cljs$lang$applyTo = (function (arglist__9416){
var x = cljs.core.first(arglist__9416);
var y = cljs.core.first(cljs.core.next(arglist__9416));
var more = cljs.core.rest(cljs.core.next(arglist__9416));
return G__9394__delegate.call(this, x, y, more);
});
return G__9394;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9388.call(this,x);
case  2 :
return _LT__EQ___9390.call(this,x,y);
default:
return _LT__EQ___9391.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9391.cljs$lang$applyTo;
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
var _GT___9454 = (function (x){
return true;
});
var _GT___9455 = (function (x,y){
return (x > y);
});
var _GT___9456 = (function() { 
var G__9458__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9459 = y;
var G__9460 = cljs.core.first.call(null,more);
var G__9461 = cljs.core.next.call(null,more);
x = G__9459;
y = G__9460;
more = G__9461;
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
var G__9458 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9458__delegate.call(this, x, y, more);
};
G__9458.cljs$lang$maxFixedArity = 2;
G__9458.cljs$lang$applyTo = (function (arglist__9486){
var x = cljs.core.first(arglist__9486);
var y = cljs.core.first(cljs.core.next(arglist__9486));
var more = cljs.core.rest(cljs.core.next(arglist__9486));
return G__9458__delegate.call(this, x, y, more);
});
return G__9458;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9454.call(this,x);
case  2 :
return _GT___9455.call(this,x,y);
default:
return _GT___9456.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9456.cljs$lang$applyTo;
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
var _GT__EQ___9496 = (function (x){
return true;
});
var _GT__EQ___9497 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9498 = (function() { 
var G__9500__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9503 = y;
var G__9504 = cljs.core.first.call(null,more);
var G__9505 = cljs.core.next.call(null,more);
x = G__9503;
y = G__9504;
more = G__9505;
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
var G__9500 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9500__delegate.call(this, x, y, more);
};
G__9500.cljs$lang$maxFixedArity = 2;
G__9500.cljs$lang$applyTo = (function (arglist__9506){
var x = cljs.core.first(arglist__9506);
var y = cljs.core.first(cljs.core.next(arglist__9506));
var more = cljs.core.rest(cljs.core.next(arglist__9506));
return G__9500__delegate.call(this, x, y, more);
});
return G__9500;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9496.call(this,x);
case  2 :
return _GT__EQ___9497.call(this,x,y);
default:
return _GT__EQ___9498.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9498.cljs$lang$applyTo;
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
var max__9518 = (function (x){
return x;
});
var max__9519 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9520 = (function() { 
var G__9523__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9523 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9523__delegate.call(this, x, y, more);
};
G__9523.cljs$lang$maxFixedArity = 2;
G__9523.cljs$lang$applyTo = (function (arglist__9524){
var x = cljs.core.first(arglist__9524);
var y = cljs.core.first(cljs.core.next(arglist__9524));
var more = cljs.core.rest(cljs.core.next(arglist__9524));
return G__9523__delegate.call(this, x, y, more);
});
return G__9523;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9518.call(this,x);
case  2 :
return max__9519.call(this,x,y);
default:
return max__9520.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9520.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9525 = (function (x){
return x;
});
var min__9526 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9527 = (function() { 
var G__9533__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9533 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9533__delegate.call(this, x, y, more);
};
G__9533.cljs$lang$maxFixedArity = 2;
G__9533.cljs$lang$applyTo = (function (arglist__9534){
var x = cljs.core.first(arglist__9534);
var y = cljs.core.first(cljs.core.next(arglist__9534));
var more = cljs.core.rest(cljs.core.next(arglist__9534));
return G__9533__delegate.call(this, x, y, more);
});
return G__9533;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9525.call(this,x);
case  2 :
return min__9526.call(this,x,y);
default:
return min__9527.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9527.cljs$lang$applyTo;
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
var rem__9537 = (n % d);

return cljs.core.fix.call(null,((n - rem__9537) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9538 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9538));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9548 = (function (){
return Math.random.call(null);
});
var rand__9549 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9548.call(this);
case  1 :
return rand__9549.call(this,n);
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
var _EQ__EQ___9706 = (function (x){
return true;
});
var _EQ__EQ___9707 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9708 = (function() { 
var G__9710__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9711 = y;
var G__9712 = cljs.core.first.call(null,more);
var G__9713 = cljs.core.next.call(null,more);
x = G__9711;
y = G__9712;
more = G__9713;
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
var G__9710 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9710__delegate.call(this, x, y, more);
};
G__9710.cljs$lang$maxFixedArity = 2;
G__9710.cljs$lang$applyTo = (function (arglist__9716){
var x = cljs.core.first(arglist__9716);
var y = cljs.core.first(cljs.core.next(arglist__9716));
var more = cljs.core.rest(cljs.core.next(arglist__9716));
return G__9710__delegate.call(this, x, y, more);
});
return G__9710;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9706.call(this,x);
case  2 :
return _EQ__EQ___9707.call(this,x,y);
default:
return _EQ__EQ___9708.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9708.cljs$lang$applyTo;
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
var n__9719 = n;
var xs__9720 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9721 = xs__9720;

if(cljs.core.truth_(and__3546__auto____9721))
{return (n__9719 > 0);
} else
{return and__3546__auto____9721;
}
})()))
{{
var G__9723 = (n__9719 - 1);
var G__9724 = cljs.core.next.call(null,xs__9720);
n__9719 = G__9723;
xs__9720 = G__9724;
continue;
}
} else
{return xs__9720;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9737 = null;
var G__9737__9738 = (function (coll,n){
var temp__3695__auto____9728 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9728))
{var xs__9730 = temp__3695__auto____9728;

return cljs.core.first.call(null,xs__9730);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9737__9739 = (function (coll,n,not_found){
var temp__3695__auto____9733 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9733))
{var xs__9734 = temp__3695__auto____9733;

return cljs.core.first.call(null,xs__9734);
} else
{return not_found;
}
});
G__9737 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9737__9738.call(this,coll,n);
case  3 :
return G__9737__9739.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9737;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9744 = (function (){
return "";
});
var str_STAR___9745 = (function (x){
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
var str_STAR___9746 = (function() { 
var G__9748__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9749 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9750 = cljs.core.next.call(null,more);
sb = G__9749;
more = G__9750;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9748 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9748__delegate.call(this, x, ys);
};
G__9748.cljs$lang$maxFixedArity = 1;
G__9748.cljs$lang$applyTo = (function (arglist__9751){
var x = cljs.core.first(arglist__9751);
var ys = cljs.core.rest(arglist__9751);
return G__9748__delegate.call(this, x, ys);
});
return G__9748;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9744.call(this);
case  1 :
return str_STAR___9745.call(this,x);
default:
return str_STAR___9746.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9746.cljs$lang$applyTo;
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
var str__9753 = (function (){
return "";
});
var str__9754 = (function (x){
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
var str__9755 = (function() { 
var G__9758__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9758 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9758__delegate.call(this, x, ys);
};
G__9758.cljs$lang$maxFixedArity = 1;
G__9758.cljs$lang$applyTo = (function (arglist__9759){
var x = cljs.core.first(arglist__9759);
var ys = cljs.core.rest(arglist__9759);
return G__9758__delegate.call(this, x, ys);
});
return G__9758;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9753.call(this);
case  1 :
return str__9754.call(this,x);
default:
return str__9755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9755.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9765 = (function (s,start){
return s.substring(start);
});
var subs__9767 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9765.call(this,s,start);
case  3 :
return subs__9767.call(this,s,start,end);
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
var symbol__9781 = (function (name){
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
var symbol__9782 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9781.call(this,ns);
case  2 :
return symbol__9782.call(this,ns,name);
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
var keyword__9785 = (function (name){
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
var keyword__9786 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9785.call(this,ns);
case  2 :
return keyword__9786.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9791 = cljs.core.seq.call(null,x);
var ys__9792 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9791)))
{return cljs.core.nil_QMARK_.call(null,ys__9792);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9792)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9791),cljs.core.first.call(null,ys__9792))))
{{
var G__9811 = cljs.core.next.call(null,xs__9791);
var G__9812 = cljs.core.next.call(null,ys__9792);
xs__9791 = G__9811;
ys__9792 = G__9812;
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
return cljs.core.reduce.call(null,(function (p1__9843_SHARP_,p2__9844_SHARP_){
return cljs.core.hash_combine.call(null,p1__9843_SHARP_,cljs.core.hash.call(null,p2__9844_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9852__9853 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9852__9853))
{var G__9857__9859 = cljs.core.first.call(null,G__9852__9853);
var vec__9858__9860 = G__9857__9859;
var key_name__9861 = cljs.core.nth.call(null,vec__9858__9860,0,null);
var f__9862 = cljs.core.nth.call(null,vec__9858__9860,1,null);
var G__9852__9863 = G__9852__9853;

var G__9857__9864 = G__9857__9859;
var G__9852__9865 = G__9852__9863;

while(true){
var vec__9866__9867 = G__9857__9864;
var key_name__9868 = cljs.core.nth.call(null,vec__9866__9867,0,null);
var f__9869 = cljs.core.nth.call(null,vec__9866__9867,1,null);
var G__9852__9870 = G__9852__9865;

var str_name__9871 = cljs.core.name.call(null,key_name__9868);

obj[str_name__9871] = f__9869;
var temp__3698__auto____9872 = cljs.core.next.call(null,G__9852__9870);

if(cljs.core.truth_(temp__3698__auto____9872))
{var G__9852__9873 = temp__3698__auto____9872;

{
var G__9887 = cljs.core.first.call(null,G__9852__9873);
var G__9888 = G__9852__9873;
G__9857__9864 = G__9887;
G__9852__9865 = G__9888;
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
var this__9908 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9911 = this;
return (new cljs.core.List(this__9911.meta,o,coll,(this__9911.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9912 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9913 = this;
return this__9913.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9914 = this;
return this__9914.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9915 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9916 = this;
return this__9916.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9917 = this;
return this__9917.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9918 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9919 = this;
return (new cljs.core.List(meta,this__9919.first,this__9919.rest,this__9919.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9920 = this;
return this__9920.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9921 = this;
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
var this__9986 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10056 = this;
return (new cljs.core.List(this__10056.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10057 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10058 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10059 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10060 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10061 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10062 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10064 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10066 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10068 = this;
return this__10068.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10091 = this;
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
list.cljs$lang$applyTo = (function (arglist__10101){
var items = cljs.core.seq( arglist__10101 );;
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
var this__10102 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10103 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10105 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10107 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10107.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10108 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10109 = this;
return this__10109.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10110 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10110.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10110.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10111 = this;
return this__10111.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10112 = this;
return (new cljs.core.Cons(meta,this__10112.first,this__10112.rest));
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
var G__10145 = null;
var G__10145__10146 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10145__10147 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10145 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10145__10146.call(this,string,f);
case  3 :
return G__10145__10147.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10145;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10154 = null;
var G__10154__10155 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10154__10156 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10154 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10154__10155.call(this,string,k);
case  3 :
return G__10154__10156.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10154;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10159 = null;
var G__10159__10160 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10159__10161 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10159 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10159__10160.call(this,string,n);
case  3 :
return G__10159__10161.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10159;
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
var G__10210 = null;
var G__10210__10211 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10210__10212 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10210 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10210__10211.call(this,this$,coll);
case  3 :
return G__10210__10212.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10210;
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
var x__10223 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10223;
} else
{lazy_seq.x = x__10223.call(null);
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
var this__10231 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10232 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10233 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10234 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10234.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10235 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10236 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10237 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10238 = this;
return this__10238.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10241 = this;
return (new cljs.core.LazySeq(meta,this__10241.realized,this__10241.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10318 = cljs.core.array.call(null);

var s__10327 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10327)))
{ary__10318.push(cljs.core.first.call(null,s__10327));
{
var G__10331 = cljs.core.next.call(null,s__10327);
s__10327 = G__10331;
continue;
}
} else
{return ary__10318;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10332 = s;
var i__10333 = n;
var sum__10334 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10335 = (i__10333 > 0);

if(cljs.core.truth_(and__3546__auto____10335))
{return cljs.core.seq.call(null,s__10332);
} else
{return and__3546__auto____10335;
}
})()))
{{
var G__10336 = cljs.core.next.call(null,s__10332);
var G__10337 = (i__10333 - 1);
var G__10338 = (sum__10334 + 1);
s__10332 = G__10336;
i__10333 = G__10337;
sum__10334 = G__10338;
continue;
}
} else
{return sum__10334;
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
var concat__10366 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10367 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10368 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10353 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10353))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10353),concat.call(null,cljs.core.rest.call(null,s__10353),y));
} else
{return y;
}
})));
});
var concat__10369 = (function() { 
var G__10373__delegate = function (x,y,zs){
var cat__10363 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10361 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10361))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10361),cat.call(null,cljs.core.rest.call(null,xys__10361),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10363.call(null,concat.call(null,x,y),zs);
};
var G__10373 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10373__delegate.call(this, x, y, zs);
};
G__10373.cljs$lang$maxFixedArity = 2;
G__10373.cljs$lang$applyTo = (function (arglist__10382){
var x = cljs.core.first(arglist__10382);
var y = cljs.core.first(cljs.core.next(arglist__10382));
var zs = cljs.core.rest(cljs.core.next(arglist__10382));
return G__10373__delegate.call(this, x, y, zs);
});
return G__10373;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10366.call(this);
case  1 :
return concat__10367.call(this,x);
case  2 :
return concat__10368.call(this,x,y);
default:
return concat__10369.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10369.cljs$lang$applyTo;
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
var list_STAR___10396 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10397 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10398 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10399 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10400 = (function() { 
var G__10411__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10411 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10411__delegate.call(this, a, b, c, d, more);
};
G__10411.cljs$lang$maxFixedArity = 4;
G__10411.cljs$lang$applyTo = (function (arglist__10422){
var a = cljs.core.first(arglist__10422);
var b = cljs.core.first(cljs.core.next(arglist__10422));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10422)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10422))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10422))));
return G__10411__delegate.call(this, a, b, c, d, more);
});
return G__10411;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10396.call(this,a);
case  2 :
return list_STAR___10397.call(this,a,b);
case  3 :
return list_STAR___10398.call(this,a,b,c);
case  4 :
return list_STAR___10399.call(this,a,b,c,d);
default:
return list_STAR___10400.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10400.cljs$lang$applyTo;
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
var apply__10476 = (function (f,args){
var fixed_arity__10426 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10426 + 1)) <= fixed_arity__10426)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10477 = (function (f,x,args){
var arglist__10433 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10434 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10433,fixed_arity__10434) <= fixed_arity__10434)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10433));
} else
{return f.cljs$lang$applyTo(arglist__10433);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10433));
}
});
var apply__10478 = (function (f,x,y,args){
var arglist__10444 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10445 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10444,fixed_arity__10445) <= fixed_arity__10445)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10444));
} else
{return f.cljs$lang$applyTo(arglist__10444);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10444));
}
});
var apply__10479 = (function (f,x,y,z,args){
var arglist__10454 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10455 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10454,fixed_arity__10455) <= fixed_arity__10455)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10454));
} else
{return f.cljs$lang$applyTo(arglist__10454);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10454));
}
});
var apply__10480 = (function() { 
var G__10496__delegate = function (f,a,b,c,d,args){
var arglist__10463 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10465 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10463,fixed_arity__10465) <= fixed_arity__10465)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10463));
} else
{return f.cljs$lang$applyTo(arglist__10463);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10463));
}
};
var G__10496 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10496__delegate.call(this, f, a, b, c, d, args);
};
G__10496.cljs$lang$maxFixedArity = 5;
G__10496.cljs$lang$applyTo = (function (arglist__10500){
var f = cljs.core.first(arglist__10500);
var a = cljs.core.first(cljs.core.next(arglist__10500));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10500)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10500))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10500)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10500)))));
return G__10496__delegate.call(this, f, a, b, c, d, args);
});
return G__10496;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10476.call(this,f,a);
case  3 :
return apply__10477.call(this,f,a,b);
case  4 :
return apply__10478.call(this,f,a,b,c);
case  5 :
return apply__10479.call(this,f,a,b,c,d);
default:
return apply__10480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10480.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10505){
var obj = cljs.core.first(arglist__10505);
var f = cljs.core.first(cljs.core.next(arglist__10505));
var args = cljs.core.rest(cljs.core.next(arglist__10505));
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
var not_EQ___10515 = (function (x){
return false;
});
var not_EQ___10516 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10517 = (function() { 
var G__10519__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10519 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10519__delegate.call(this, x, y, more);
};
G__10519.cljs$lang$maxFixedArity = 2;
G__10519.cljs$lang$applyTo = (function (arglist__10520){
var x = cljs.core.first(arglist__10520);
var y = cljs.core.first(cljs.core.next(arglist__10520));
var more = cljs.core.rest(cljs.core.next(arglist__10520));
return G__10519__delegate.call(this, x, y, more);
});
return G__10519;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10515.call(this,x);
case  2 :
return not_EQ___10516.call(this,x,y);
default:
return not_EQ___10517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10517.cljs$lang$applyTo;
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
var G__10548 = pred;
var G__10549 = cljs.core.next.call(null,coll);
pred = G__10548;
coll = G__10549;
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
{var or__3548__auto____10561 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10561))
{return or__3548__auto____10561;
} else
{{
var G__10563 = pred;
var G__10564 = cljs.core.next.call(null,coll);
pred = G__10563;
coll = G__10564;
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
var G__10580 = null;
var G__10580__10581 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10580__10582 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10580__10583 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10580__10584 = (function() { 
var G__10586__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10586 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10586__delegate.call(this, x, y, zs);
};
G__10586.cljs$lang$maxFixedArity = 2;
G__10586.cljs$lang$applyTo = (function (arglist__10588){
var x = cljs.core.first(arglist__10588);
var y = cljs.core.first(cljs.core.next(arglist__10588));
var zs = cljs.core.rest(cljs.core.next(arglist__10588));
return G__10586__delegate.call(this, x, y, zs);
});
return G__10586;
})()
;
G__10580 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10580__10581.call(this);
case  1 :
return G__10580__10582.call(this,x);
case  2 :
return G__10580__10583.call(this,x,y);
default:
return G__10580__10584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10580.cljs$lang$maxFixedArity = 2;
G__10580.cljs$lang$applyTo = G__10580__10584.cljs$lang$applyTo;
return G__10580;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10592__delegate = function (args){
return x;
};
var G__10592 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10592__delegate.call(this, args);
};
G__10592.cljs$lang$maxFixedArity = 0;
G__10592.cljs$lang$applyTo = (function (arglist__10595){
var args = cljs.core.seq( arglist__10595 );;
return G__10592__delegate.call(this, args);
});
return G__10592;
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
var comp__10631 = (function (){
return cljs.core.identity;
});
var comp__10633 = (function (f){
return f;
});
var comp__10634 = (function (f,g){
return (function() {
var G__10638 = null;
var G__10638__10639 = (function (){
return f.call(null,g.call(null));
});
var G__10638__10640 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10638__10641 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10638__10642 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10638__10643 = (function() { 
var G__10802__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10802 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10802__delegate.call(this, x, y, z, args);
};
G__10802.cljs$lang$maxFixedArity = 3;
G__10802.cljs$lang$applyTo = (function (arglist__10803){
var x = cljs.core.first(arglist__10803);
var y = cljs.core.first(cljs.core.next(arglist__10803));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10803)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10803)));
return G__10802__delegate.call(this, x, y, z, args);
});
return G__10802;
})()
;
G__10638 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10638__10639.call(this);
case  1 :
return G__10638__10640.call(this,x);
case  2 :
return G__10638__10641.call(this,x,y);
case  3 :
return G__10638__10642.call(this,x,y,z);
default:
return G__10638__10643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10638.cljs$lang$maxFixedArity = 3;
G__10638.cljs$lang$applyTo = G__10638__10643.cljs$lang$applyTo;
return G__10638;
})()
});
var comp__10635 = (function (f,g,h){
return (function() {
var G__10805 = null;
var G__10805__10807 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10805__10808 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10805__10809 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10805__10810 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10805__10811 = (function() { 
var G__10874__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10874 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10874__delegate.call(this, x, y, z, args);
};
G__10874.cljs$lang$maxFixedArity = 3;
G__10874.cljs$lang$applyTo = (function (arglist__10891){
var x = cljs.core.first(arglist__10891);
var y = cljs.core.first(cljs.core.next(arglist__10891));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10891)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10891)));
return G__10874__delegate.call(this, x, y, z, args);
});
return G__10874;
})()
;
G__10805 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10805__10807.call(this);
case  1 :
return G__10805__10808.call(this,x);
case  2 :
return G__10805__10809.call(this,x,y);
case  3 :
return G__10805__10810.call(this,x,y,z);
default:
return G__10805__10811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10805.cljs$lang$maxFixedArity = 3;
G__10805.cljs$lang$applyTo = G__10805__10811.cljs$lang$applyTo;
return G__10805;
})()
});
var comp__10636 = (function() { 
var G__10894__delegate = function (f1,f2,f3,fs){
var fs__10604 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10895__delegate = function (args){
var ret__10620 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10604),args);
var fs__10621 = cljs.core.next.call(null,fs__10604);

while(true){
if(cljs.core.truth_(fs__10621))
{{
var G__10897 = cljs.core.first.call(null,fs__10621).call(null,ret__10620);
var G__10898 = cljs.core.next.call(null,fs__10621);
ret__10620 = G__10897;
fs__10621 = G__10898;
continue;
}
} else
{return ret__10620;
}
break;
}
};
var G__10895 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10895__delegate.call(this, args);
};
G__10895.cljs$lang$maxFixedArity = 0;
G__10895.cljs$lang$applyTo = (function (arglist__10902){
var args = cljs.core.seq( arglist__10902 );;
return G__10895__delegate.call(this, args);
});
return G__10895;
})()
;
};
var G__10894 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10894__delegate.call(this, f1, f2, f3, fs);
};
G__10894.cljs$lang$maxFixedArity = 3;
G__10894.cljs$lang$applyTo = (function (arglist__10903){
var f1 = cljs.core.first(arglist__10903);
var f2 = cljs.core.first(cljs.core.next(arglist__10903));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10903)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10903)));
return G__10894__delegate.call(this, f1, f2, f3, fs);
});
return G__10894;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10631.call(this);
case  1 :
return comp__10633.call(this,f1);
case  2 :
return comp__10634.call(this,f1,f2);
case  3 :
return comp__10635.call(this,f1,f2,f3);
default:
return comp__10636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10636.cljs$lang$applyTo;
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
var partial__10911 = (function (f,arg1){
return (function() { 
var G__10917__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10917 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10917__delegate.call(this, args);
};
G__10917.cljs$lang$maxFixedArity = 0;
G__10917.cljs$lang$applyTo = (function (arglist__10919){
var args = cljs.core.seq( arglist__10919 );;
return G__10917__delegate.call(this, args);
});
return G__10917;
})()
;
});
var partial__10912 = (function (f,arg1,arg2){
return (function() { 
var G__10921__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10921 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10921__delegate.call(this, args);
};
G__10921.cljs$lang$maxFixedArity = 0;
G__10921.cljs$lang$applyTo = (function (arglist__10923){
var args = cljs.core.seq( arglist__10923 );;
return G__10921__delegate.call(this, args);
});
return G__10921;
})()
;
});
var partial__10913 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10924__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10924 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10924__delegate.call(this, args);
};
G__10924.cljs$lang$maxFixedArity = 0;
G__10924.cljs$lang$applyTo = (function (arglist__10926){
var args = cljs.core.seq( arglist__10926 );;
return G__10924__delegate.call(this, args);
});
return G__10924;
})()
;
});
var partial__10914 = (function() { 
var G__10927__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10928__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10928 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10928__delegate.call(this, args);
};
G__10928.cljs$lang$maxFixedArity = 0;
G__10928.cljs$lang$applyTo = (function (arglist__10930){
var args = cljs.core.seq( arglist__10930 );;
return G__10928__delegate.call(this, args);
});
return G__10928;
})()
;
};
var G__10927 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10927__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10927.cljs$lang$maxFixedArity = 4;
G__10927.cljs$lang$applyTo = (function (arglist__10933){
var f = cljs.core.first(arglist__10933);
var arg1 = cljs.core.first(cljs.core.next(arglist__10933));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10933)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10933))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10933))));
return G__10927__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10927;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10911.call(this,f,arg1);
case  3 :
return partial__10912.call(this,f,arg1,arg2);
case  4 :
return partial__10913.call(this,f,arg1,arg2,arg3);
default:
return partial__10914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10914.cljs$lang$applyTo;
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
var fnil__10947 = (function (f,x){
return (function() {
var G__10951 = null;
var G__10951__10952 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10951__10953 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10951__10954 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10951__10955 = (function() { 
var G__10963__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10963 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10963__delegate.call(this, a, b, c, ds);
};
G__10963.cljs$lang$maxFixedArity = 3;
G__10963.cljs$lang$applyTo = (function (arglist__10964){
var a = cljs.core.first(arglist__10964);
var b = cljs.core.first(cljs.core.next(arglist__10964));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10964)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10964)));
return G__10963__delegate.call(this, a, b, c, ds);
});
return G__10963;
})()
;
G__10951 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10951__10952.call(this,a);
case  2 :
return G__10951__10953.call(this,a,b);
case  3 :
return G__10951__10954.call(this,a,b,c);
default:
return G__10951__10955.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10951.cljs$lang$maxFixedArity = 3;
G__10951.cljs$lang$applyTo = G__10951__10955.cljs$lang$applyTo;
return G__10951;
})()
});
var fnil__10948 = (function (f,x,y){
return (function() {
var G__10976 = null;
var G__10976__10978 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10976__10979 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10976__10980 = (function() { 
var G__10988__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10988 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10988__delegate.call(this, a, b, c, ds);
};
G__10988.cljs$lang$maxFixedArity = 3;
G__10988.cljs$lang$applyTo = (function (arglist__10993){
var a = cljs.core.first(arglist__10993);
var b = cljs.core.first(cljs.core.next(arglist__10993));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10993)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10993)));
return G__10988__delegate.call(this, a, b, c, ds);
});
return G__10988;
})()
;
G__10976 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10976__10978.call(this,a,b);
case  3 :
return G__10976__10979.call(this,a,b,c);
default:
return G__10976__10980.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10976.cljs$lang$maxFixedArity = 3;
G__10976.cljs$lang$applyTo = G__10976__10980.cljs$lang$applyTo;
return G__10976;
})()
});
var fnil__10949 = (function (f,x,y,z){
return (function() {
var G__10995 = null;
var G__10995__10996 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10995__10997 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10995__10998 = (function() { 
var G__11000__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11000 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11000__delegate.call(this, a, b, c, ds);
};
G__11000.cljs$lang$maxFixedArity = 3;
G__11000.cljs$lang$applyTo = (function (arglist__11001){
var a = cljs.core.first(arglist__11001);
var b = cljs.core.first(cljs.core.next(arglist__11001));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11001)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11001)));
return G__11000__delegate.call(this, a, b, c, ds);
});
return G__11000;
})()
;
G__10995 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10995__10996.call(this,a,b);
case  3 :
return G__10995__10997.call(this,a,b,c);
default:
return G__10995__10998.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10995.cljs$lang$maxFixedArity = 3;
G__10995.cljs$lang$applyTo = G__10995__10998.cljs$lang$applyTo;
return G__10995;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10947.call(this,f,x);
case  3 :
return fnil__10948.call(this,f,x,y);
case  4 :
return fnil__10949.call(this,f,x,y,z);
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
var mapi__11016 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11010 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11010))
{var s__11013 = temp__3698__auto____11010;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11013)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11013)));
} else
{return null;
}
})));
});

return mapi__11016.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11046 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11046))
{var s__11049 = temp__3698__auto____11046;

var x__11050 = f.call(null,cljs.core.first.call(null,s__11049));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11050)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11049));
} else
{return cljs.core.cons.call(null,x__11050,keep.call(null,f,cljs.core.rest.call(null,s__11049)));
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
var keepi__11075 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11067 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11067))
{var s__11068 = temp__3698__auto____11067;

var x__11069 = f.call(null,idx,cljs.core.first.call(null,s__11068));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11069)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11068));
} else
{return cljs.core.cons.call(null,x__11069,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11068)));
}
} else
{return null;
}
})));
});

return keepi__11075.call(null,0,coll);
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
var every_pred__11308 = (function (p){
return (function() {
var ep1 = null;
var ep1__11329 = (function (){
return true;
});
var ep1__11330 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11331 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11098 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11098))
{return p.call(null,y);
} else
{return and__3546__auto____11098;
}
})());
});
var ep1__11332 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11100 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11100))
{var and__3546__auto____11101 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11101))
{return p.call(null,z);
} else
{return and__3546__auto____11101;
}
} else
{return and__3546__auto____11100;
}
})());
});
var ep1__11333 = (function() { 
var G__11339__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11103 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11103))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11103;
}
})());
};
var G__11339 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11339__delegate.call(this, x, y, z, args);
};
G__11339.cljs$lang$maxFixedArity = 3;
G__11339.cljs$lang$applyTo = (function (arglist__11342){
var x = cljs.core.first(arglist__11342);
var y = cljs.core.first(cljs.core.next(arglist__11342));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11342)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11342)));
return G__11339__delegate.call(this, x, y, z, args);
});
return G__11339;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11329.call(this);
case  1 :
return ep1__11330.call(this,x);
case  2 :
return ep1__11331.call(this,x,y);
case  3 :
return ep1__11332.call(this,x,y,z);
default:
return ep1__11333.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11333.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11309 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11351 = (function (){
return true;
});
var ep2__11352 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11110 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11110))
{return p2.call(null,x);
} else
{return and__3546__auto____11110;
}
})());
});
var ep2__11354 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11117 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11117))
{var and__3546__auto____11119 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11119))
{var and__3546__auto____11120 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11120))
{return p2.call(null,y);
} else
{return and__3546__auto____11120;
}
} else
{return and__3546__auto____11119;
}
} else
{return and__3546__auto____11117;
}
})());
});
var ep2__11356 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11121 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11121))
{var and__3546__auto____11130 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11130))
{var and__3546__auto____11132 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11132))
{var and__3546__auto____11134 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11134))
{var and__3546__auto____11211 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11211))
{return p2.call(null,z);
} else
{return and__3546__auto____11211;
}
} else
{return and__3546__auto____11134;
}
} else
{return and__3546__auto____11132;
}
} else
{return and__3546__auto____11130;
}
} else
{return and__3546__auto____11121;
}
})());
});
var ep2__11358 = (function() { 
var G__11393__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11214 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11214))
{return cljs.core.every_QMARK_.call(null,(function (p1__11057_SHARP_){
var and__3546__auto____11217 = p1.call(null,p1__11057_SHARP_);

if(cljs.core.truth_(and__3546__auto____11217))
{return p2.call(null,p1__11057_SHARP_);
} else
{return and__3546__auto____11217;
}
}),args);
} else
{return and__3546__auto____11214;
}
})());
};
var G__11393 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11393__delegate.call(this, x, y, z, args);
};
G__11393.cljs$lang$maxFixedArity = 3;
G__11393.cljs$lang$applyTo = (function (arglist__11397){
var x = cljs.core.first(arglist__11397);
var y = cljs.core.first(cljs.core.next(arglist__11397));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11397)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11397)));
return G__11393__delegate.call(this, x, y, z, args);
});
return G__11393;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11351.call(this);
case  1 :
return ep2__11352.call(this,x);
case  2 :
return ep2__11354.call(this,x,y);
case  3 :
return ep2__11356.call(this,x,y,z);
default:
return ep2__11358.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11358.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11310 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11405 = (function (){
return true;
});
var ep3__11407 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11233 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11233))
{var and__3546__auto____11240 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11240))
{return p3.call(null,x);
} else
{return and__3546__auto____11240;
}
} else
{return and__3546__auto____11233;
}
})());
});
var ep3__11408 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11243 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11243))
{var and__3546__auto____11244 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11244))
{var and__3546__auto____11246 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11246))
{var and__3546__auto____11247 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11247))
{var and__3546__auto____11248 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11248))
{return p3.call(null,y);
} else
{return and__3546__auto____11248;
}
} else
{return and__3546__auto____11247;
}
} else
{return and__3546__auto____11246;
}
} else
{return and__3546__auto____11244;
}
} else
{return and__3546__auto____11243;
}
})());
});
var ep3__11409 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11250 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11250))
{var and__3546__auto____11252 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11252))
{var and__3546__auto____11254 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11254))
{var and__3546__auto____11255 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11255))
{var and__3546__auto____11256 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11256))
{var and__3546__auto____11258 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11258))
{var and__3546__auto____11259 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11259))
{var and__3546__auto____11261 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11261))
{return p3.call(null,z);
} else
{return and__3546__auto____11261;
}
} else
{return and__3546__auto____11259;
}
} else
{return and__3546__auto____11258;
}
} else
{return and__3546__auto____11256;
}
} else
{return and__3546__auto____11255;
}
} else
{return and__3546__auto____11254;
}
} else
{return and__3546__auto____11252;
}
} else
{return and__3546__auto____11250;
}
})());
});
var ep3__11410 = (function() { 
var G__11422__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11274 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11274))
{return cljs.core.every_QMARK_.call(null,(function (p1__11059_SHARP_){
var and__3546__auto____11275 = p1.call(null,p1__11059_SHARP_);

if(cljs.core.truth_(and__3546__auto____11275))
{var and__3546__auto____11276 = p2.call(null,p1__11059_SHARP_);

if(cljs.core.truth_(and__3546__auto____11276))
{return p3.call(null,p1__11059_SHARP_);
} else
{return and__3546__auto____11276;
}
} else
{return and__3546__auto____11275;
}
}),args);
} else
{return and__3546__auto____11274;
}
})());
};
var G__11422 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11422__delegate.call(this, x, y, z, args);
};
G__11422.cljs$lang$maxFixedArity = 3;
G__11422.cljs$lang$applyTo = (function (arglist__11475){
var x = cljs.core.first(arglist__11475);
var y = cljs.core.first(cljs.core.next(arglist__11475));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11475)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11475)));
return G__11422__delegate.call(this, x, y, z, args);
});
return G__11422;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11405.call(this);
case  1 :
return ep3__11407.call(this,x);
case  2 :
return ep3__11408.call(this,x,y);
case  3 :
return ep3__11409.call(this,x,y,z);
default:
return ep3__11410.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11410.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11311 = (function() { 
var G__11481__delegate = function (p1,p2,p3,ps){
var ps__11285 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11486 = (function (){
return true;
});
var epn__11487 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11060_SHARP_){
return p1__11060_SHARP_.call(null,x);
}),ps__11285);
});
var epn__11488 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11061_SHARP_){
var and__3546__auto____11287 = p1__11061_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11287))
{return p1__11061_SHARP_.call(null,y);
} else
{return and__3546__auto____11287;
}
}),ps__11285);
});
var epn__11489 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11063_SHARP_){
var and__3546__auto____11295 = p1__11063_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11295))
{var and__3546__auto____11297 = p1__11063_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11297))
{return p1__11063_SHARP_.call(null,z);
} else
{return and__3546__auto____11297;
}
} else
{return and__3546__auto____11295;
}
}),ps__11285);
});
var epn__11490 = (function() { 
var G__11505__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11300 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11300))
{return cljs.core.every_QMARK_.call(null,(function (p1__11064_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11064_SHARP_,args);
}),ps__11285);
} else
{return and__3546__auto____11300;
}
})());
};
var G__11505 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11505__delegate.call(this, x, y, z, args);
};
G__11505.cljs$lang$maxFixedArity = 3;
G__11505.cljs$lang$applyTo = (function (arglist__11510){
var x = cljs.core.first(arglist__11510);
var y = cljs.core.first(cljs.core.next(arglist__11510));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11510)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11510)));
return G__11505__delegate.call(this, x, y, z, args);
});
return G__11505;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11486.call(this);
case  1 :
return epn__11487.call(this,x);
case  2 :
return epn__11488.call(this,x,y);
case  3 :
return epn__11489.call(this,x,y,z);
default:
return epn__11490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11490.cljs$lang$applyTo;
return epn;
})()
};
var G__11481 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11481__delegate.call(this, p1, p2, p3, ps);
};
G__11481.cljs$lang$maxFixedArity = 3;
G__11481.cljs$lang$applyTo = (function (arglist__11515){
var p1 = cljs.core.first(arglist__11515);
var p2 = cljs.core.first(cljs.core.next(arglist__11515));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11515)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11515)));
return G__11481__delegate.call(this, p1, p2, p3, ps);
});
return G__11481;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11308.call(this,p1);
case  2 :
return every_pred__11309.call(this,p1,p2);
case  3 :
return every_pred__11310.call(this,p1,p2,p3);
default:
return every_pred__11311.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11311.cljs$lang$applyTo;
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
var some_fn__11755 = (function (p){
return (function() {
var sp1 = null;
var sp1__11760 = (function (){
return null;
});
var sp1__11761 = (function (x){
return p.call(null,x);
});
var sp1__11762 = (function (x,y){
var or__3548__auto____11524 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11524))
{return or__3548__auto____11524;
} else
{return p.call(null,y);
}
});
var sp1__11763 = (function (x,y,z){
var or__3548__auto____11531 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11531))
{return or__3548__auto____11531;
} else
{var or__3548__auto____11538 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11538))
{return or__3548__auto____11538;
} else
{return p.call(null,z);
}
}
});
var sp1__11764 = (function() { 
var G__11774__delegate = function (x,y,z,args){
var or__3548__auto____11547 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11547))
{return or__3548__auto____11547;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11774 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11774__delegate.call(this, x, y, z, args);
};
G__11774.cljs$lang$maxFixedArity = 3;
G__11774.cljs$lang$applyTo = (function (arglist__11775){
var x = cljs.core.first(arglist__11775);
var y = cljs.core.first(cljs.core.next(arglist__11775));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11775)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11775)));
return G__11774__delegate.call(this, x, y, z, args);
});
return G__11774;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11760.call(this);
case  1 :
return sp1__11761.call(this,x);
case  2 :
return sp1__11762.call(this,x,y);
case  3 :
return sp1__11763.call(this,x,y,z);
default:
return sp1__11764.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11764.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11756 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11776 = (function (){
return null;
});
var sp2__11777 = (function (x){
var or__3548__auto____11550 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11550))
{return or__3548__auto____11550;
} else
{return p2.call(null,x);
}
});
var sp2__11778 = (function (x,y){
var or__3548__auto____11554 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11554))
{return or__3548__auto____11554;
} else
{var or__3548__auto____11556 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11556))
{return or__3548__auto____11556;
} else
{var or__3548__auto____11558 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11558))
{return or__3548__auto____11558;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11779 = (function (x,y,z){
var or__3548__auto____11697 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11697))
{return or__3548__auto____11697;
} else
{var or__3548__auto____11698 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11698))
{return or__3548__auto____11698;
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
var sp2__11780 = (function() { 
var G__11786__delegate = function (x,y,z,args){
var or__3548__auto____11704 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11704))
{return or__3548__auto____11704;
} else
{return cljs.core.some.call(null,(function (p1__11085_SHARP_){
var or__3548__auto____11707 = p1.call(null,p1__11085_SHARP_);

if(cljs.core.truth_(or__3548__auto____11707))
{return or__3548__auto____11707;
} else
{return p2.call(null,p1__11085_SHARP_);
}
}),args);
}
};
var G__11786 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11786__delegate.call(this, x, y, z, args);
};
G__11786.cljs$lang$maxFixedArity = 3;
G__11786.cljs$lang$applyTo = (function (arglist__11788){
var x = cljs.core.first(arglist__11788);
var y = cljs.core.first(cljs.core.next(arglist__11788));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11788)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11788)));
return G__11786__delegate.call(this, x, y, z, args);
});
return G__11786;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11776.call(this);
case  1 :
return sp2__11777.call(this,x);
case  2 :
return sp2__11778.call(this,x,y);
case  3 :
return sp2__11779.call(this,x,y,z);
default:
return sp2__11780.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11780.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11757 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11795 = (function (){
return null;
});
var sp3__11796 = (function (x){
var or__3548__auto____11709 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11709))
{return or__3548__auto____11709;
} else
{var or__3548__auto____11710 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11710))
{return or__3548__auto____11710;
} else
{return p3.call(null,x);
}
}
});
var sp3__11797 = (function (x,y){
var or__3548__auto____11711 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11711))
{return or__3548__auto____11711;
} else
{var or__3548__auto____11712 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11712))
{return or__3548__auto____11712;
} else
{var or__3548__auto____11714 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11714))
{return or__3548__auto____11714;
} else
{var or__3548__auto____11719 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11719))
{return or__3548__auto____11719;
} else
{var or__3548__auto____11720 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11720))
{return or__3548__auto____11720;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11798 = (function (x,y,z){
var or__3548__auto____11721 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11721))
{return or__3548__auto____11721;
} else
{var or__3548__auto____11722 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11722))
{return or__3548__auto____11722;
} else
{var or__3548__auto____11723 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11723))
{return or__3548__auto____11723;
} else
{var or__3548__auto____11724 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11724))
{return or__3548__auto____11724;
} else
{var or__3548__auto____11725 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11725))
{return or__3548__auto____11725;
} else
{var or__3548__auto____11726 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11726))
{return or__3548__auto____11726;
} else
{var or__3548__auto____11728 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11728))
{return or__3548__auto____11728;
} else
{var or__3548__auto____11734 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11734))
{return or__3548__auto____11734;
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
var sp3__11799 = (function() { 
var G__11825__delegate = function (x,y,z,args){
var or__3548__auto____11735 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11735))
{return or__3548__auto____11735;
} else
{return cljs.core.some.call(null,(function (p1__11086_SHARP_){
var or__3548__auto____11736 = p1.call(null,p1__11086_SHARP_);

if(cljs.core.truth_(or__3548__auto____11736))
{return or__3548__auto____11736;
} else
{var or__3548__auto____11738 = p2.call(null,p1__11086_SHARP_);

if(cljs.core.truth_(or__3548__auto____11738))
{return or__3548__auto____11738;
} else
{return p3.call(null,p1__11086_SHARP_);
}
}
}),args);
}
};
var G__11825 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11825__delegate.call(this, x, y, z, args);
};
G__11825.cljs$lang$maxFixedArity = 3;
G__11825.cljs$lang$applyTo = (function (arglist__11828){
var x = cljs.core.first(arglist__11828);
var y = cljs.core.first(cljs.core.next(arglist__11828));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11828)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11828)));
return G__11825__delegate.call(this, x, y, z, args);
});
return G__11825;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11795.call(this);
case  1 :
return sp3__11796.call(this,x);
case  2 :
return sp3__11797.call(this,x,y);
case  3 :
return sp3__11798.call(this,x,y,z);
default:
return sp3__11799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11799.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11758 = (function() { 
var G__11829__delegate = function (p1,p2,p3,ps){
var ps__11740 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11832 = (function (){
return null;
});
var spn__11833 = (function (x){
return cljs.core.some.call(null,(function (p1__11087_SHARP_){
return p1__11087_SHARP_.call(null,x);
}),ps__11740);
});
var spn__11834 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11088_SHARP_){
var or__3548__auto____11747 = p1__11088_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11747))
{return or__3548__auto____11747;
} else
{return p1__11088_SHARP_.call(null,y);
}
}),ps__11740);
});
var spn__11835 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11089_SHARP_){
var or__3548__auto____11749 = p1__11089_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11749))
{return or__3548__auto____11749;
} else
{var or__3548__auto____11750 = p1__11089_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11750))
{return or__3548__auto____11750;
} else
{return p1__11089_SHARP_.call(null,z);
}
}
}),ps__11740);
});
var spn__11836 = (function() { 
var G__11842__delegate = function (x,y,z,args){
var or__3548__auto____11751 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11751))
{return or__3548__auto____11751;
} else
{return cljs.core.some.call(null,(function (p1__11090_SHARP_){
return cljs.core.some.call(null,p1__11090_SHARP_,args);
}),ps__11740);
}
};
var G__11842 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11842__delegate.call(this, x, y, z, args);
};
G__11842.cljs$lang$maxFixedArity = 3;
G__11842.cljs$lang$applyTo = (function (arglist__11845){
var x = cljs.core.first(arglist__11845);
var y = cljs.core.first(cljs.core.next(arglist__11845));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11845)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11845)));
return G__11842__delegate.call(this, x, y, z, args);
});
return G__11842;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11832.call(this);
case  1 :
return spn__11833.call(this,x);
case  2 :
return spn__11834.call(this,x,y);
case  3 :
return spn__11835.call(this,x,y,z);
default:
return spn__11836.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11836.cljs$lang$applyTo;
return spn;
})()
};
var G__11829 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11829__delegate.call(this, p1, p2, p3, ps);
};
G__11829.cljs$lang$maxFixedArity = 3;
G__11829.cljs$lang$applyTo = (function (arglist__11850){
var p1 = cljs.core.first(arglist__11850);
var p2 = cljs.core.first(cljs.core.next(arglist__11850));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11850)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11850)));
return G__11829__delegate.call(this, p1, p2, p3, ps);
});
return G__11829;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11755.call(this,p1);
case  2 :
return some_fn__11756.call(this,p1,p2);
case  3 :
return some_fn__11757.call(this,p1,p2,p3);
default:
return some_fn__11758.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11758.cljs$lang$applyTo;
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
var map__11879 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11852 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11852))
{var s__11853 = temp__3698__auto____11852;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11853)),map.call(null,f,cljs.core.rest.call(null,s__11853)));
} else
{return null;
}
})));
});
var map__11880 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11855 = cljs.core.seq.call(null,c1);
var s2__11856 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11858 = s1__11855;

if(cljs.core.truth_(and__3546__auto____11858))
{return s2__11856;
} else
{return and__3546__auto____11858;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11855),cljs.core.first.call(null,s2__11856)),map.call(null,f,cljs.core.rest.call(null,s1__11855),cljs.core.rest.call(null,s2__11856)));
} else
{return null;
}
})));
});
var map__11881 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11859 = cljs.core.seq.call(null,c1);
var s2__11861 = cljs.core.seq.call(null,c2);
var s3__11862 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11863 = s1__11859;

if(cljs.core.truth_(and__3546__auto____11863))
{var and__3546__auto____11865 = s2__11861;

if(cljs.core.truth_(and__3546__auto____11865))
{return s3__11862;
} else
{return and__3546__auto____11865;
}
} else
{return and__3546__auto____11863;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11859),cljs.core.first.call(null,s2__11861),cljs.core.first.call(null,s3__11862)),map.call(null,f,cljs.core.rest.call(null,s1__11859),cljs.core.rest.call(null,s2__11861),cljs.core.rest.call(null,s3__11862)));
} else
{return null;
}
})));
});
var map__11882 = (function() { 
var G__11896__delegate = function (f,c1,c2,c3,colls){
var step__11873 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11871 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11871)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11871),step.call(null,map.call(null,cljs.core.rest,ss__11871)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11518_SHARP_){
return cljs.core.apply.call(null,f,p1__11518_SHARP_);
}),step__11873.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11896 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11896__delegate.call(this, f, c1, c2, c3, colls);
};
G__11896.cljs$lang$maxFixedArity = 4;
G__11896.cljs$lang$applyTo = (function (arglist__11897){
var f = cljs.core.first(arglist__11897);
var c1 = cljs.core.first(cljs.core.next(arglist__11897));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11897)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11897))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11897))));
return G__11896__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11896;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11879.call(this,f,c1);
case  3 :
return map__11880.call(this,f,c1,c2);
case  4 :
return map__11881.call(this,f,c1,c2,c3);
default:
return map__11882.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11882.cljs$lang$applyTo;
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
{var temp__3698__auto____11928 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11928))
{var s__11929 = temp__3698__auto____11928;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11929),take.call(null,(n - 1),cljs.core.rest.call(null,s__11929)));
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
var step__11944 = (function (n,coll){
while(true){
var s__11936 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11940 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11940))
{return s__11936;
} else
{return and__3546__auto____11940;
}
})()))
{{
var G__12002 = (n - 1);
var G__12003 = cljs.core.rest.call(null,s__11936);
n = G__12002;
coll = G__12003;
continue;
}
} else
{return s__11936;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11944.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12006 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12007 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12006.call(this,n);
case  2 :
return drop_last__12007.call(this,n,s);
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
var s__12012 = cljs.core.seq.call(null,coll);
var lead__12013 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12013))
{{
var G__12017 = cljs.core.next.call(null,s__12012);
var G__12018 = cljs.core.next.call(null,lead__12013);
s__12012 = G__12017;
lead__12013 = G__12018;
continue;
}
} else
{return s__12012;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12021 = (function (pred,coll){
while(true){
var s__12019 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12020 = s__12019;

if(cljs.core.truth_(and__3546__auto____12020))
{return pred.call(null,cljs.core.first.call(null,s__12019));
} else
{return and__3546__auto____12020;
}
})()))
{{
var G__12024 = pred;
var G__12025 = cljs.core.rest.call(null,s__12019);
pred = G__12024;
coll = G__12025;
continue;
}
} else
{return s__12019;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12021.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12030 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12030))
{var s__12032 = temp__3698__auto____12030;

return cljs.core.concat.call(null,s__12032,cycle.call(null,s__12032));
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
var repeat__12041 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12042 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12041.call(this,n);
case  2 :
return repeat__12042.call(this,n,x);
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
var repeatedly__12051 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12052 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12051.call(this,n);
case  2 :
return repeatedly__12052.call(this,n,f);
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
var interleave__12127 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12058 = cljs.core.seq.call(null,c1);
var s2__12060 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12061 = s1__12058;

if(cljs.core.truth_(and__3546__auto____12061))
{return s2__12060;
} else
{return and__3546__auto____12061;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12058),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12060),interleave.call(null,cljs.core.rest.call(null,s1__12058),cljs.core.rest.call(null,s2__12060))));
} else
{return null;
}
})));
});
var interleave__12129 = (function() { 
var G__12134__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12066 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12066)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12066),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12066)));
} else
{return null;
}
})));
};
var G__12134 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12134__delegate.call(this, c1, c2, colls);
};
G__12134.cljs$lang$maxFixedArity = 2;
G__12134.cljs$lang$applyTo = (function (arglist__12143){
var c1 = cljs.core.first(arglist__12143);
var c2 = cljs.core.first(cljs.core.next(arglist__12143));
var colls = cljs.core.rest(cljs.core.next(arglist__12143));
return G__12134__delegate.call(this, c1, c2, colls);
});
return G__12134;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12127.call(this,c1,c2);
default:
return interleave__12129.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12129.cljs$lang$applyTo;
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
var cat__12152 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12145 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12145))
{var coll__12146 = temp__3695__auto____12145;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12146),cat.call(null,cljs.core.rest.call(null,coll__12146),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12152.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12153 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12154 = (function() { 
var G__12156__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12156 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12156__delegate.call(this, f, coll, colls);
};
G__12156.cljs$lang$maxFixedArity = 2;
G__12156.cljs$lang$applyTo = (function (arglist__12157){
var f = cljs.core.first(arglist__12157);
var coll = cljs.core.first(cljs.core.next(arglist__12157));
var colls = cljs.core.rest(cljs.core.next(arglist__12157));
return G__12156__delegate.call(this, f, coll, colls);
});
return G__12156;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12153.call(this,f,coll);
default:
return mapcat__12154.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12154.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12163 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12163))
{var s__12164 = temp__3698__auto____12163;

var f__12165 = cljs.core.first.call(null,s__12164);
var r__12166 = cljs.core.rest.call(null,s__12164);

if(cljs.core.truth_(pred.call(null,f__12165)))
{return cljs.core.cons.call(null,f__12165,filter.call(null,pred,r__12166));
} else
{return filter.call(null,pred,r__12166);
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
var walk__12179 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12179.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12178_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12178_SHARP_));
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
var partition__12328 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12329 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12212 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12212))
{var s__12313 = temp__3698__auto____12212;

var p__12317 = cljs.core.take.call(null,n,s__12313);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12317))))
{return cljs.core.cons.call(null,p__12317,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12313)));
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
var temp__3698__auto____12319 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12319))
{var s__12320 = temp__3698__auto____12319;

var p__12321 = cljs.core.take.call(null,n,s__12320);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12321))))
{return cljs.core.cons.call(null,p__12321,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12320)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12321,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12328.call(this,n,step);
case  3 :
return partition__12329.call(this,n,step,pad);
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
var get_in__12351 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12352 = (function (m,ks,not_found){
var sentinel__12343 = cljs.core.lookup_sentinel;
var m__12344 = m;
var ks__12345 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12345))
{var m__12346 = cljs.core.get.call(null,m__12344,cljs.core.first.call(null,ks__12345),sentinel__12343);

if(cljs.core.truth_((sentinel__12343 === m__12346)))
{return not_found;
} else
{{
var G__12354 = sentinel__12343;
var G__12355 = m__12346;
var G__12356 = cljs.core.next.call(null,ks__12345);
sentinel__12343 = G__12354;
m__12344 = G__12355;
ks__12345 = G__12356;
continue;
}
}
} else
{return m__12344;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12351.call(this,m,ks);
case  3 :
return get_in__12352.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12357,v){
var vec__12358__12359 = p__12357;
var k__12360 = cljs.core.nth.call(null,vec__12358__12359,0,null);
var ks__12362 = cljs.core.nthnext.call(null,vec__12358__12359,1);

if(cljs.core.truth_(ks__12362))
{return cljs.core.assoc.call(null,m,k__12360,assoc_in.call(null,cljs.core.get.call(null,m,k__12360),ks__12362,v));
} else
{return cljs.core.assoc.call(null,m,k__12360,v);
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
var update_in__delegate = function (m,p__12366,f,args){
var vec__12367__12368 = p__12366;
var k__12369 = cljs.core.nth.call(null,vec__12367__12368,0,null);
var ks__12370 = cljs.core.nthnext.call(null,vec__12367__12368,1);

if(cljs.core.truth_(ks__12370))
{return cljs.core.assoc.call(null,m,k__12369,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12369),ks__12370,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12369,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12369),args));
}
};
var update_in = function (m,p__12366,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12366, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12372){
var m = cljs.core.first(arglist__12372);
var p__12366 = cljs.core.first(cljs.core.next(arglist__12372));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12372)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12372)));
return update_in__delegate.call(this, m, p__12366, f, args);
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
var this__12375 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12426 = null;
var G__12426__12427 = (function (coll,k){
var this__12377 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12426__12428 = (function (coll,k,not_found){
var this__12378 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12426 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12426__12427.call(this,coll,k);
case  3 :
return G__12426__12428.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12426;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12381 = this;
var new_array__12382 = cljs.core.aclone.call(null,this__12381.array);

(new_array__12382[k] = v);
return (new cljs.core.Vector(this__12381.meta,new_array__12382));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12434 = null;
var G__12434__12435 = (function (coll,k){
var this__12384 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12434__12436 = (function (coll,k,not_found){
var this__12387 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12434 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12434__12435.call(this,coll,k);
case  3 :
return G__12434__12436.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12434;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12388 = this;
var new_array__12390 = cljs.core.aclone.call(null,this__12388.array);

new_array__12390.push(o);
return (new cljs.core.Vector(this__12388.meta,new_array__12390));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12552 = null;
var G__12552__12587 = (function (v,f){
var this__12393 = this;
return cljs.core.ci_reduce.call(null,this__12393.array,f);
});
var G__12552__12593 = (function (v,f,start){
var this__12394 = this;
return cljs.core.ci_reduce.call(null,this__12394.array,f,start);
});
G__12552 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12552__12587.call(this,v,f);
case  3 :
return G__12552__12593.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12552;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12395 = this;
if(cljs.core.truth_((this__12395.array.length > 0)))
{var vector_seq__12399 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12395.array.length)))
{return cljs.core.cons.call(null,(this__12395.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12399.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12401 = this;
return this__12401.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12402 = this;
var count__12403 = this__12402.array.length;

if(cljs.core.truth_((count__12403 > 0)))
{return (this__12402.array[(count__12403 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12405 = this;
if(cljs.core.truth_((this__12405.array.length > 0)))
{var new_array__12407 = cljs.core.aclone.call(null,this__12405.array);

new_array__12407.pop();
return (new cljs.core.Vector(this__12405.meta,new_array__12407));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12410 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12412 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12414 = this;
return (new cljs.core.Vector(meta,this__12414.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12416 = this;
return this__12416.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12619 = null;
var G__12619__12620 = (function (coll,n){
var this__12417 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12418 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12418))
{return (n < this__12417.array.length);
} else
{return and__3546__auto____12418;
}
})()))
{return (this__12417.array[n]);
} else
{return null;
}
});
var G__12619__12621 = (function (coll,n,not_found){
var this__12419 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12421 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12421))
{return (n < this__12419.array.length);
} else
{return and__3546__auto____12421;
}
})()))
{return (this__12419.array[n]);
} else
{return not_found;
}
});
G__12619 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12619__12620.call(this,coll,n);
case  3 :
return G__12619__12621.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12619;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12425 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12425.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12637){
var args = cljs.core.seq( arglist__12637 );;
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
var this__12650 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12716 = null;
var G__12716__12717 = (function (coll,k){
var this__12652 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12716__12718 = (function (coll,k,not_found){
var this__12653 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12716 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12716__12717.call(this,coll,k);
case  3 :
return G__12716__12718.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12716;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12656 = this;
var v_pos__12660 = (this__12656.start + key);

return (new cljs.core.Subvec(this__12656.meta,cljs.core._assoc.call(null,this__12656.v,v_pos__12660,val),this__12656.start,((this__12656.end > (v_pos__12660 + 1)) ? this__12656.end : (v_pos__12660 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12723 = null;
var G__12723__12724 = (function (coll,k){
var this__12663 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12723__12725 = (function (coll,k,not_found){
var this__12668 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12723 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12723__12724.call(this,coll,k);
case  3 :
return G__12723__12725.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12723;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12670 = this;
return (new cljs.core.Subvec(this__12670.meta,cljs.core._assoc_n.call(null,this__12670.v,this__12670.end,o),this__12670.start,(this__12670.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12743 = null;
var G__12743__12744 = (function (coll,f){
var this__12672 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12743__12745 = (function (coll,f,start){
var this__12674 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12743 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12743__12744.call(this,coll,f);
case  3 :
return G__12743__12745.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12743;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12680 = this;
var subvec_seq__12683 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12680.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12680.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12683.call(null,this__12680.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12688 = this;
return (this__12688.end - this__12688.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12690 = this;
return cljs.core._nth.call(null,this__12690.v,(this__12690.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12691 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12691.start,this__12691.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12691.meta,this__12691.v,this__12691.start,(this__12691.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12694 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12696 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12698 = this;
return (new cljs.core.Subvec(meta,this__12698.v,this__12698.start,this__12698.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12700 = this;
return this__12700.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12762 = null;
var G__12762__12764 = (function (coll,n){
var this__12702 = this;
return cljs.core._nth.call(null,this__12702.v,(this__12702.start + n));
});
var G__12762__12765 = (function (coll,n,not_found){
var this__12705 = this;
return cljs.core._nth.call(null,this__12705.v,(this__12705.start + n),not_found);
});
G__12762 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12762__12764.call(this,coll,n);
case  3 :
return G__12762__12765.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12762;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12706 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12706.meta);
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
var subvec__12845 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12846 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12845.call(this,v,start);
case  3 :
return subvec__12846.call(this,v,start,end);
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
var this__12856 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12861 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12864 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12866 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12866.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12869 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12871 = this;
return cljs.core._first.call(null,this__12871.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12877 = this;
var temp__3695__auto____12878 = cljs.core.next.call(null,this__12877.front);

if(cljs.core.truth_(temp__3695__auto____12878))
{var f1__12879 = temp__3695__auto____12878;

return (new cljs.core.PersistentQueueSeq(this__12877.meta,f1__12879,this__12877.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12877.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12877.meta,this__12877.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12882 = this;
return this__12882.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12884 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12884.front,this__12884.rear));
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
var this__12893 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12895 = this;
if(cljs.core.truth_(this__12895.front))
{return (new cljs.core.PersistentQueue(this__12895.meta,(this__12895.count + 1),this__12895.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12898 = this__12895.rear;

if(cljs.core.truth_(or__3548__auto____12898))
{return or__3548__auto____12898;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12895.meta,(this__12895.count + 1),cljs.core.conj.call(null,this__12895.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12901 = this;
var rear__12904 = cljs.core.seq.call(null,this__12901.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12906 = this__12901.front;

if(cljs.core.truth_(or__3548__auto____12906))
{return or__3548__auto____12906;
} else
{return rear__12904;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12901.front,cljs.core.seq.call(null,rear__12904)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12907 = this;
return this__12907.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12910 = this;
return cljs.core._first.call(null,this__12910.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12913 = this;
if(cljs.core.truth_(this__12913.front))
{var temp__3695__auto____12916 = cljs.core.next.call(null,this__12913.front);

if(cljs.core.truth_(temp__3695__auto____12916))
{var f1__12918 = temp__3695__auto____12916;

return (new cljs.core.PersistentQueue(this__12913.meta,(this__12913.count - 1),f1__12918,this__12913.rear));
} else
{return (new cljs.core.PersistentQueue(this__12913.meta,(this__12913.count - 1),cljs.core.seq.call(null,this__12913.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12924 = this;
return cljs.core.first.call(null,this__12924.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12926 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12929 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12933 = this;
return (new cljs.core.PersistentQueue(meta,this__12933.count,this__12933.front,this__12933.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13010 = this;
return this__13010.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13011 = this;
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
var this__13027 = this;
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
var len__13028 = array.length;

var i__13030 = 0;

while(true){
if(cljs.core.truth_((i__13030 < len__13028)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__13030]))))
{return i__13030;
} else
{{
var G__13032 = (i__13030 + incr);
i__13030 = G__13032;
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
var obj_map_contains_key_QMARK___13034 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___13035 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____13033 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13033))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13033;
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
return obj_map_contains_key_QMARK___13034.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___13035.call(this,k,strobj,true_val,false_val);
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
var this__13051 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13120 = null;
var G__13120__13121 = (function (coll,k){
var this__13053 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13120__13122 = (function (coll,k,not_found){
var this__13054 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13054.strobj,(this__13054.strobj[k]),not_found);
});
G__13120 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13120__13121.call(this,coll,k);
case  3 :
return G__13120__13122.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13120;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13056 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13057 = goog.object.clone.call(null,this__13056.strobj);
var overwrite_QMARK___13058 = new_strobj__13057.hasOwnProperty(k);

(new_strobj__13057[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13058))
{return (new cljs.core.ObjMap(this__13056.meta,this__13056.keys,new_strobj__13057));
} else
{var new_keys__13060 = cljs.core.aclone.call(null,this__13056.keys);

new_keys__13060.push(k);
return (new cljs.core.ObjMap(this__13056.meta,new_keys__13060,new_strobj__13057));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13056.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13065 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13065.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13129 = null;
var G__13129__13130 = (function (coll,k){
var this__13069 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13129__13131 = (function (coll,k,not_found){
var this__13072 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
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
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13076 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13082 = this;
if(cljs.core.truth_((this__13082.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__13037_SHARP_){
return cljs.core.vector.call(null,p1__13037_SHARP_,(this__13082.strobj[p1__13037_SHARP_]));
}),this__13082.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13086 = this;
return this__13086.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13088 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13090 = this;
return (new cljs.core.ObjMap(meta,this__13090.keys,this__13090.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13096 = this;
return this__13096.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13098 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13098.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13103 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13104 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13104))
{return this__13103.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13104;
}
})()))
{var new_keys__13105 = cljs.core.aclone.call(null,this__13103.keys);
var new_strobj__13106 = goog.object.clone.call(null,this__13103.strobj);

new_keys__13105.splice(cljs.core.scan_array.call(null,1,k,new_keys__13105),1);
cljs.core.js_delete.call(null,new_strobj__13106,k);
return (new cljs.core.ObjMap(this__13103.meta,new_keys__13105,new_strobj__13106));
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
var G__13425 = null;
var G__13425__13426 = (function (coll,k){
var this__13332 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13425__13427 = (function (coll,k,not_found){
var this__13334 = this;
var bucket__13335 = (this__13334.hashobj[cljs.core.hash.call(null,k)]);
var i__13336 = (cljs.core.truth_(bucket__13335)?cljs.core.scan_array.call(null,2,k,bucket__13335):null);

if(cljs.core.truth_(i__13336))
{return (bucket__13335[(i__13336 + 1)]);
} else
{return not_found;
}
});
G__13425 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13425__13426.call(this,coll,k);
case  3 :
return G__13425__13427.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13425;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13338 = this;
var h__13340 = cljs.core.hash.call(null,k);
var bucket__13341 = (this__13338.hashobj[h__13340]);

if(cljs.core.truth_(bucket__13341))
{var new_bucket__13343 = cljs.core.aclone.call(null,bucket__13341);
var new_hashobj__13344 = goog.object.clone.call(null,this__13338.hashobj);

(new_hashobj__13344[h__13340] = new_bucket__13343);
var temp__3695__auto____13348 = cljs.core.scan_array.call(null,2,k,new_bucket__13343);

if(cljs.core.truth_(temp__3695__auto____13348))
{var i__13349 = temp__3695__auto____13348;

(new_bucket__13343[(i__13349 + 1)] = v);
return (new cljs.core.HashMap(this__13338.meta,this__13338.count,new_hashobj__13344));
} else
{new_bucket__13343.push(k,v);
return (new cljs.core.HashMap(this__13338.meta,(this__13338.count + 1),new_hashobj__13344));
}
} else
{var new_hashobj__13351 = goog.object.clone.call(null,this__13338.hashobj);

(new_hashobj__13351[h__13340] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13338.meta,(this__13338.count + 1),new_hashobj__13351));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13354 = this;
var bucket__13357 = (this__13354.hashobj[cljs.core.hash.call(null,k)]);
var i__13358 = (cljs.core.truth_(bucket__13357)?cljs.core.scan_array.call(null,2,k,bucket__13357):null);

if(cljs.core.truth_(i__13358))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13440 = null;
var G__13440__13441 = (function (coll,k){
var this__13359 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13440__13442 = (function (coll,k,not_found){
var this__13361 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13440 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13440__13441.call(this,coll,k);
case  3 :
return G__13440__13442.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13440;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13364 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13366 = this;
if(cljs.core.truth_((this__13366.count > 0)))
{var hashes__13371 = cljs.core.js_keys.call(null,this__13366.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13312_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13366.hashobj[p1__13312_SHARP_])));
}),hashes__13371);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13372 = this;
return this__13372.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13373 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13374 = this;
return (new cljs.core.HashMap(meta,this__13374.count,this__13374.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13378 = this;
return this__13378.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13381 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13381.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13383 = this;
var h__13384 = cljs.core.hash.call(null,k);
var bucket__13386 = (this__13383.hashobj[h__13384]);
var i__13387 = (cljs.core.truth_(bucket__13386)?cljs.core.scan_array.call(null,2,k,bucket__13386):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13387)))
{return coll;
} else
{var new_hashobj__13389 = goog.object.clone.call(null,this__13383.hashobj);

if(cljs.core.truth_((3 > bucket__13386.length)))
{cljs.core.js_delete.call(null,new_hashobj__13389,h__13384);
} else
{var new_bucket__13391 = cljs.core.aclone.call(null,bucket__13386);

new_bucket__13391.splice(i__13387,2);
(new_hashobj__13389[h__13384] = new_bucket__13391);
}
return (new cljs.core.HashMap(this__13383.meta,(this__13383.count - 1),new_hashobj__13389));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13467 = ks.length;

var i__13468 = 0;
var out__13469 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13468 < len__13467)))
{{
var G__13496 = (i__13468 + 1);
var G__13497 = cljs.core.assoc.call(null,out__13469,(ks[i__13468]),(vs[i__13468]));
i__13468 = G__13496;
out__13469 = G__13497;
continue;
}
} else
{return out__13469;
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
var in$__13500 = cljs.core.seq.call(null,keyvals);
var out__13501 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13500))
{{
var G__13589 = cljs.core.nnext.call(null,in$__13500);
var G__13590 = cljs.core.assoc.call(null,out__13501,cljs.core.first.call(null,in$__13500),cljs.core.second.call(null,in$__13500));
in$__13500 = G__13589;
out__13501 = G__13590;
continue;
}
} else
{return out__13501;
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
hash_map.cljs$lang$applyTo = (function (arglist__13593){
var keyvals = cljs.core.seq( arglist__13593 );;
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
{return cljs.core.reduce.call(null,(function (p1__13595_SHARP_,p2__13596_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13601 = p1__13595_SHARP_;

if(cljs.core.truth_(or__3548__auto____13601))
{return or__3548__auto____13601;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13596_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13603){
var maps = cljs.core.seq( arglist__13603 );;
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
{var merge_entry__13613 = (function (m,e){
var k__13609 = cljs.core.first.call(null,e);
var v__13611 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13609)))
{return cljs.core.assoc.call(null,m,k__13609,f.call(null,cljs.core.get.call(null,m,k__13609),v__13611));
} else
{return cljs.core.assoc.call(null,m,k__13609,v__13611);
}
});
var merge2__13616 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13613,(function (){var or__3548__auto____13614 = m1;

if(cljs.core.truth_(or__3548__auto____13614))
{return or__3548__auto____13614;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13616,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13619){
var f = cljs.core.first(arglist__13619);
var maps = cljs.core.rest(arglist__13619);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13627 = cljs.core.ObjMap.fromObject([],{});
var keys__13628 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13628))
{var key__13629 = cljs.core.first.call(null,keys__13628);
var entry__13630 = cljs.core.get.call(null,map,key__13629,"﷐'user/not-found");

{
var G__13637 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13630,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13627,key__13629,entry__13630):ret__13627);
var G__13638 = cljs.core.next.call(null,keys__13628);
ret__13627 = G__13637;
keys__13628 = G__13638;
continue;
}
} else
{return ret__13627;
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
var this__13668 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13694 = null;
var G__13694__13695 = (function (coll,v){
var this__13671 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13694__13696 = (function (coll,v,not_found){
var this__13672 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13672.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13694 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13694__13695.call(this,coll,v);
case  3 :
return G__13694__13696.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13694;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13716 = null;
var G__13716__13717 = (function (coll,k){
var this__13673 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13716__13718 = (function (coll,k,not_found){
var this__13677 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13716 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13716__13717.call(this,coll,k);
case  3 :
return G__13716__13718.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13716;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13678 = this;
return (new cljs.core.Set(this__13678.meta,cljs.core.assoc.call(null,this__13678.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13683 = this;
return cljs.core.keys.call(null,this__13683.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13684 = this;
return (new cljs.core.Set(this__13684.meta,cljs.core.dissoc.call(null,this__13684.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13685 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13686 = this;
var and__3546__auto____13687 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13687))
{var and__3546__auto____13689 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13689))
{return cljs.core.every_QMARK_.call(null,(function (p1__13622_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13622_SHARP_);
}),other);
} else
{return and__3546__auto____13689;
}
} else
{return and__3546__auto____13687;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13691 = this;
return (new cljs.core.Set(meta,this__13691.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13692 = this;
return this__13692.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13693 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13693.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13743 = cljs.core.seq.call(null,coll);
var out__13744 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13743))))
{{
var G__13753 = cljs.core.rest.call(null,in$__13743);
var G__13754 = cljs.core.conj.call(null,out__13744,cljs.core.first.call(null,in$__13743));
in$__13743 = G__13753;
out__13744 = G__13754;
continue;
}
} else
{return out__13744;
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
{var n__13759 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13760 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13760))
{var e__13761 = temp__3695__auto____13760;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13761));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13759,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13742_SHARP_){
var temp__3695__auto____13763 = cljs.core.find.call(null,smap,p1__13742_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13763))
{var e__13765 = temp__3695__auto____13763;

return cljs.core.second.call(null,e__13765);
} else
{return p1__13742_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13790 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13776,seen){
while(true){
var vec__13778__13779 = p__13776;
var f__13785 = cljs.core.nth.call(null,vec__13778__13779,0,null);
var xs__13786 = vec__13778__13779;

var temp__3698__auto____13787 = cljs.core.seq.call(null,xs__13786);

if(cljs.core.truth_(temp__3698__auto____13787))
{var s__13788 = temp__3698__auto____13787;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13785)))
{{
var G__13801 = cljs.core.rest.call(null,s__13788);
var G__13802 = seen;
p__13776 = G__13801;
seen = G__13802;
continue;
}
} else
{return cljs.core.cons.call(null,f__13785,step.call(null,cljs.core.rest.call(null,s__13788),cljs.core.conj.call(null,seen,f__13785)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13790.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13807 = cljs.core.Vector.fromArray([]);
var s__13808 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13808)))
{{
var G__13817 = cljs.core.conj.call(null,ret__13807,cljs.core.first.call(null,s__13808));
var G__13818 = cljs.core.next.call(null,s__13808);
ret__13807 = G__13817;
s__13808 = G__13818;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13807);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13822 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13822))
{return or__3548__auto____13822;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13823 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13823 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13823 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13836 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13836))
{return or__3548__auto____13836;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13838 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13838 > -1)))
{return cljs.core.subs.call(null,x,2,i__13838);
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
var map__13847 = cljs.core.ObjMap.fromObject([],{});
var ks__13851 = cljs.core.seq.call(null,keys);
var vs__13852 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13853 = ks__13851;

if(cljs.core.truth_(and__3546__auto____13853))
{return vs__13852;
} else
{return and__3546__auto____13853;
}
})()))
{{
var G__13854 = cljs.core.assoc.call(null,map__13847,cljs.core.first.call(null,ks__13851),cljs.core.first.call(null,vs__13852));
var G__13855 = cljs.core.next.call(null,ks__13851);
var G__13856 = cljs.core.next.call(null,vs__13852);
map__13847 = G__13854;
ks__13851 = G__13855;
vs__13852 = G__13856;
continue;
}
} else
{return map__13847;
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
var max_key__13868 = (function (k,x){
return x;
});
var max_key__13869 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13870 = (function() { 
var G__13877__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13843_SHARP_,p2__13844_SHARP_){
return max_key.call(null,k,p1__13843_SHARP_,p2__13844_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13877 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13877__delegate.call(this, k, x, y, more);
};
G__13877.cljs$lang$maxFixedArity = 3;
G__13877.cljs$lang$applyTo = (function (arglist__13878){
var k = cljs.core.first(arglist__13878);
var x = cljs.core.first(cljs.core.next(arglist__13878));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13878)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13878)));
return G__13877__delegate.call(this, k, x, y, more);
});
return G__13877;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13868.call(this,k,x);
case  3 :
return max_key__13869.call(this,k,x,y);
default:
return max_key__13870.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13870.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13881 = (function (k,x){
return x;
});
var min_key__13882 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13883 = (function() { 
var G__13886__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13861_SHARP_,p2__13862_SHARP_){
return min_key.call(null,k,p1__13861_SHARP_,p2__13862_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13886 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13886__delegate.call(this, k, x, y, more);
};
G__13886.cljs$lang$maxFixedArity = 3;
G__13886.cljs$lang$applyTo = (function (arglist__13887){
var k = cljs.core.first(arglist__13887);
var x = cljs.core.first(cljs.core.next(arglist__13887));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13887)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13887)));
return G__13886__delegate.call(this, k, x, y, more);
});
return G__13886;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13881.call(this,k,x);
case  3 :
return min_key__13882.call(this,k,x,y);
default:
return min_key__13883.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13883.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13897 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13898 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13890 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13890))
{var s__13892 = temp__3698__auto____13890;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13892),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13892)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13897.call(this,n,step);
case  3 :
return partition_all__13898.call(this,n,step,coll);
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
var temp__3698__auto____13996 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13996))
{var s__13997 = temp__3698__auto____13996;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13997))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13997),take_while.call(null,pred,cljs.core.rest.call(null,s__13997)));
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
var this__13999 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__14000 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__14314 = null;
var G__14314__14315 = (function (rng,f){
var this__14017 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__14314__14316 = (function (rng,f,s){
var this__14130 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__14314 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__14314__14315.call(this,rng,f);
case  3 :
return G__14314__14316.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14314;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__14132 = this;
var comp__14133 = (cljs.core.truth_((this__14132.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__14133.call(null,this__14132.start,this__14132.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__14134 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__14134.end - this__14134.start) / this__14134.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__14136 = this;
return this__14136.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__14138 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__14138.meta,(this__14138.start + this__14138.step),this__14138.end,this__14138.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__14143 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__14296 = this;
return (new cljs.core.Range(meta,this__14296.start,this__14296.end,this__14296.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__14299 = this;
return this__14299.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14338 = null;
var G__14338__14339 = (function (rng,n){
var this__14300 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14300.start + (n * this__14300.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14301 = (this__14300.start > this__14300.end);

if(cljs.core.truth_(and__3546__auto____14301))
{return cljs.core._EQ_.call(null,this__14300.step,0);
} else
{return and__3546__auto____14301;
}
})()))
{return this__14300.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14338__14340 = (function (rng,n,not_found){
var this__14303 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14303.start + (n * this__14303.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14304 = (this__14303.start > this__14303.end);

if(cljs.core.truth_(and__3546__auto____14304))
{return cljs.core._EQ_.call(null,this__14303.step,0);
} else
{return and__3546__auto____14304;
}
})()))
{return this__14303.start;
} else
{return not_found;
}
}
});
G__14338 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14338__14339.call(this,rng,n);
case  3 :
return G__14338__14340.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14338;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__14306 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14306.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14350 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14351 = (function (end){
return range.call(null,0,end,1);
});
var range__14352 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14353 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14350.call(this);
case  1 :
return range__14351.call(this,start);
case  2 :
return range__14352.call(this,start,end);
case  3 :
return range__14353.call(this,start,end,step);
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
var temp__3698__auto____14356 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14356))
{var s__14379 = temp__3698__auto____14356;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14379),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14379)));
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
var temp__3698__auto____14387 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14387))
{var s__14389 = temp__3698__auto____14387;

var fst__14390 = cljs.core.first.call(null,s__14389);
var fv__14391 = f.call(null,fst__14390);
var run__14393 = cljs.core.cons.call(null,fst__14390,cljs.core.take_while.call(null,(function (p1__14384_SHARP_){
return cljs.core._EQ_.call(null,fv__14391,f.call(null,p1__14384_SHARP_));
}),cljs.core.next.call(null,s__14389)));

return cljs.core.cons.call(null,run__14393,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14393),s__14389))));
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
var reductions__14424 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14418 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14418))
{var s__14420 = temp__3695__auto____14418;

return reductions.call(null,f,cljs.core.first.call(null,s__14420),cljs.core.rest.call(null,s__14420));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14425 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14422 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14422))
{var s__14423 = temp__3698__auto____14422;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14423)),cljs.core.rest.call(null,s__14423));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14424.call(this,f,init);
case  3 :
return reductions__14425.call(this,f,init,coll);
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
var juxt__14471 = (function (f){
return (function() {
var G__14479 = null;
var G__14479__14480 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14479__14483 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14479__14484 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14479__14485 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14479__14486 = (function() { 
var G__14506__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14506 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14506__delegate.call(this, x, y, z, args);
};
G__14506.cljs$lang$maxFixedArity = 3;
G__14506.cljs$lang$applyTo = (function (arglist__14514){
var x = cljs.core.first(arglist__14514);
var y = cljs.core.first(cljs.core.next(arglist__14514));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14514)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14514)));
return G__14506__delegate.call(this, x, y, z, args);
});
return G__14506;
})()
;
G__14479 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14479__14480.call(this);
case  1 :
return G__14479__14483.call(this,x);
case  2 :
return G__14479__14484.call(this,x,y);
case  3 :
return G__14479__14485.call(this,x,y,z);
default:
return G__14479__14486.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14479.cljs$lang$maxFixedArity = 3;
G__14479.cljs$lang$applyTo = G__14479__14486.cljs$lang$applyTo;
return G__14479;
})()
});
var juxt__14472 = (function (f,g){
return (function() {
var G__14528 = null;
var G__14528__14529 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14528__14530 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14528__14531 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14528__14532 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14528__14533 = (function() { 
var G__14543__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14543 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14543__delegate.call(this, x, y, z, args);
};
G__14543.cljs$lang$maxFixedArity = 3;
G__14543.cljs$lang$applyTo = (function (arglist__14548){
var x = cljs.core.first(arglist__14548);
var y = cljs.core.first(cljs.core.next(arglist__14548));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14548)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14548)));
return G__14543__delegate.call(this, x, y, z, args);
});
return G__14543;
})()
;
G__14528 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14528__14529.call(this);
case  1 :
return G__14528__14530.call(this,x);
case  2 :
return G__14528__14531.call(this,x,y);
case  3 :
return G__14528__14532.call(this,x,y,z);
default:
return G__14528__14533.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14528.cljs$lang$maxFixedArity = 3;
G__14528.cljs$lang$applyTo = G__14528__14533.cljs$lang$applyTo;
return G__14528;
})()
});
var juxt__14473 = (function (f,g,h){
return (function() {
var G__14551 = null;
var G__14551__14553 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14551__14554 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14551__14555 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14551__14556 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14551__14557 = (function() { 
var G__14562__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14562 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14562__delegate.call(this, x, y, z, args);
};
G__14562.cljs$lang$maxFixedArity = 3;
G__14562.cljs$lang$applyTo = (function (arglist__14568){
var x = cljs.core.first(arglist__14568);
var y = cljs.core.first(cljs.core.next(arglist__14568));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14568)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14568)));
return G__14562__delegate.call(this, x, y, z, args);
});
return G__14562;
})()
;
G__14551 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14551__14553.call(this);
case  1 :
return G__14551__14554.call(this,x);
case  2 :
return G__14551__14555.call(this,x,y);
case  3 :
return G__14551__14556.call(this,x,y,z);
default:
return G__14551__14557.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14551.cljs$lang$maxFixedArity = 3;
G__14551.cljs$lang$applyTo = G__14551__14557.cljs$lang$applyTo;
return G__14551;
})()
});
var juxt__14474 = (function() { 
var G__14573__delegate = function (f,g,h,fs){
var fs__14457 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14575 = null;
var G__14575__14576 = (function (){
return cljs.core.reduce.call(null,(function (p1__14400_SHARP_,p2__14402_SHARP_){
return cljs.core.conj.call(null,p1__14400_SHARP_,p2__14402_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14457);
});
var G__14575__14577 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14403_SHARP_,p2__14404_SHARP_){
return cljs.core.conj.call(null,p1__14403_SHARP_,p2__14404_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14457);
});
var G__14575__14578 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14406_SHARP_,p2__14407_SHARP_){
return cljs.core.conj.call(null,p1__14406_SHARP_,p2__14407_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14457);
});
var G__14575__14579 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14409_SHARP_,p2__14410_SHARP_){
return cljs.core.conj.call(null,p1__14409_SHARP_,p2__14410_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14457);
});
var G__14575__14580 = (function() { 
var G__14590__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14412_SHARP_,p2__14414_SHARP_){
return cljs.core.conj.call(null,p1__14412_SHARP_,cljs.core.apply.call(null,p2__14414_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14457);
};
var G__14590 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14590__delegate.call(this, x, y, z, args);
};
G__14590.cljs$lang$maxFixedArity = 3;
G__14590.cljs$lang$applyTo = (function (arglist__14591){
var x = cljs.core.first(arglist__14591);
var y = cljs.core.first(cljs.core.next(arglist__14591));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14591)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14591)));
return G__14590__delegate.call(this, x, y, z, args);
});
return G__14590;
})()
;
G__14575 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14575__14576.call(this);
case  1 :
return G__14575__14577.call(this,x);
case  2 :
return G__14575__14578.call(this,x,y);
case  3 :
return G__14575__14579.call(this,x,y,z);
default:
return G__14575__14580.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14575.cljs$lang$maxFixedArity = 3;
G__14575.cljs$lang$applyTo = G__14575__14580.cljs$lang$applyTo;
return G__14575;
})()
};
var G__14573 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14573__delegate.call(this, f, g, h, fs);
};
G__14573.cljs$lang$maxFixedArity = 3;
G__14573.cljs$lang$applyTo = (function (arglist__14593){
var f = cljs.core.first(arglist__14593);
var g = cljs.core.first(cljs.core.next(arglist__14593));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14593)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14593)));
return G__14573__delegate.call(this, f, g, h, fs);
});
return G__14573;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14471.call(this,f);
case  2 :
return juxt__14472.call(this,f,g);
case  3 :
return juxt__14473.call(this,f,g,h);
default:
return juxt__14474.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14474.cljs$lang$applyTo;
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
var dorun__14623 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14628 = cljs.core.next.call(null,coll);
coll = G__14628;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14624 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14617 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14617))
{return (n > 0);
} else
{return and__3546__auto____14617;
}
})()))
{{
var G__14629 = (n - 1);
var G__14630 = cljs.core.next.call(null,coll);
n = G__14629;
coll = G__14630;
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
return dorun__14623.call(this,n);
case  2 :
return dorun__14624.call(this,n,coll);
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
var doall__14633 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14634 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14633.call(this,n);
case  2 :
return doall__14634.call(this,n,coll);
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
var matches__14638 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14638),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14638),1)))
{return cljs.core.first.call(null,matches__14638);
} else
{return cljs.core.vec.call(null,matches__14638);
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
var matches__14640 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14640)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14640),1)))
{return cljs.core.first.call(null,matches__14640);
} else
{return cljs.core.vec.call(null,matches__14640);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14644 = cljs.core.re_find.call(null,re,s);
var match_idx__14645 = s.search(re);
var match_str__14646 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14644))?cljs.core.first.call(null,match_data__14644):match_data__14644);
var post_match__14647 = cljs.core.subs.call(null,s,(match_idx__14645 + cljs.core.count.call(null,match_str__14646)));

if(cljs.core.truth_(match_data__14644))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14644,re_seq.call(null,re,post_match__14647));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14655_SHARP_){
return print_one.call(null,p1__14655_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14671 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14671))
{var and__3546__auto____14677 = (function (){var x__445__auto____14672 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14673 = x__445__auto____14672;

if(cljs.core.truth_(and__3546__auto____14673))
{var and__3546__auto____14675 = x__445__auto____14672.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14675))
{return cljs.core.not.call(null,x__445__auto____14672.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14675;
}
} else
{return and__3546__auto____14673;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14672);
}
})();

if(cljs.core.truth_(and__3546__auto____14677))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14677;
}
} else
{return and__3546__auto____14671;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14684 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14685 = x__445__auto____14684;

if(cljs.core.truth_(and__3546__auto____14685))
{var and__3546__auto____14686 = x__445__auto____14684.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14686))
{return cljs.core.not.call(null,x__445__auto____14684.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14686;
}
} else
{return and__3546__auto____14685;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14684);
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
var first_obj__14689 = cljs.core.first.call(null,objs);
var sb__14690 = (new goog.string.StringBuffer());

var G__14691__14692 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14691__14692))
{var obj__14694 = cljs.core.first.call(null,G__14691__14692);
var G__14691__14695 = G__14691__14692;

while(true){
if(cljs.core.truth_((obj__14694 === first_obj__14689)))
{} else
{sb__14690.append(" ");
}
var G__14696__14698 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14694,opts));

if(cljs.core.truth_(G__14696__14698))
{var string__14699 = cljs.core.first.call(null,G__14696__14698);
var G__14696__14700 = G__14696__14698;

while(true){
sb__14690.append(string__14699);
var temp__3698__auto____14701 = cljs.core.next.call(null,G__14696__14700);

if(cljs.core.truth_(temp__3698__auto____14701))
{var G__14696__14702 = temp__3698__auto____14701;

{
var G__14735 = cljs.core.first.call(null,G__14696__14702);
var G__14736 = G__14696__14702;
string__14699 = G__14735;
G__14696__14700 = G__14736;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14712 = cljs.core.next.call(null,G__14691__14695);

if(cljs.core.truth_(temp__3698__auto____14712))
{var G__14691__14713 = temp__3698__auto____14712;

{
var G__14737 = cljs.core.first.call(null,G__14691__14713);
var G__14738 = G__14691__14713;
obj__14694 = G__14737;
G__14691__14695 = G__14738;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14690);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14739 = cljs.core.first.call(null,objs);

var G__14743__14744 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14743__14744))
{var obj__14745 = cljs.core.first.call(null,G__14743__14744);
var G__14743__14746 = G__14743__14744;

while(true){
if(cljs.core.truth_((obj__14745 === first_obj__14739)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14747__14748 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14745,opts));

if(cljs.core.truth_(G__14747__14748))
{var string__14749 = cljs.core.first.call(null,G__14747__14748);
var G__14747__14750 = G__14747__14748;

while(true){
cljs.core.string_print.call(null,string__14749);
var temp__3698__auto____14751 = cljs.core.next.call(null,G__14747__14750);

if(cljs.core.truth_(temp__3698__auto____14751))
{var G__14747__14752 = temp__3698__auto____14751;

{
var G__14757 = cljs.core.first.call(null,G__14747__14752);
var G__14758 = G__14747__14752;
string__14749 = G__14757;
G__14747__14750 = G__14758;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14753 = cljs.core.next.call(null,G__14743__14746);

if(cljs.core.truth_(temp__3698__auto____14753))
{var G__14743__14754 = temp__3698__auto____14753;

{
var G__14759 = cljs.core.first.call(null,G__14743__14754);
var G__14760 = G__14743__14754;
obj__14745 = G__14759;
G__14743__14746 = G__14760;
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
pr_str.cljs$lang$applyTo = (function (arglist__14784){
var objs = cljs.core.seq( arglist__14784 );;
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
pr.cljs$lang$applyTo = (function (arglist__14789){
var objs = cljs.core.seq( arglist__14789 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14795){
var objs = cljs.core.seq( arglist__14795 );;
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
println.cljs$lang$applyTo = (function (arglist__14798){
var objs = cljs.core.seq( arglist__14798 );;
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
prn.cljs$lang$applyTo = (function (arglist__14800){
var objs = cljs.core.seq( arglist__14800 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14801 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14801,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14825 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14825))
{var nspc__14830 = temp__3698__auto____14825;

return cljs.core.str.call(null,nspc__14830,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14837 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14837))
{var nspc__14838 = temp__3698__auto____14837;

return cljs.core.str.call(null,nspc__14838,"/");
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
var pr_pair__14981 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14981,"{",", ","}",opts,coll);
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
var this__15010 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__15011 = this;
var G__15012__15016 = cljs.core.seq.call(null,this__15011.watches);

if(cljs.core.truth_(G__15012__15016))
{var G__15018__15020 = cljs.core.first.call(null,G__15012__15016);
var vec__15019__15021 = G__15018__15020;
var key__15022 = cljs.core.nth.call(null,vec__15019__15021,0,null);
var f__15023 = cljs.core.nth.call(null,vec__15019__15021,1,null);
var G__15012__15024 = G__15012__15016;

var G__15018__15025 = G__15018__15020;
var G__15012__15026 = G__15012__15024;

while(true){
var vec__15027__15028 = G__15018__15025;
var key__15029 = cljs.core.nth.call(null,vec__15027__15028,0,null);
var f__15030 = cljs.core.nth.call(null,vec__15027__15028,1,null);
var G__15012__15031 = G__15012__15026;

f__15030.call(null,key__15029,this$,oldval,newval);
var temp__3698__auto____15032 = cljs.core.next.call(null,G__15012__15031);

if(cljs.core.truth_(temp__3698__auto____15032))
{var G__15012__15033 = temp__3698__auto____15032;

{
var G__15043 = cljs.core.first.call(null,G__15012__15033);
var G__15044 = G__15012__15033;
G__15018__15025 = G__15043;
G__15012__15026 = G__15044;
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
var this__15034 = this;
return this$.watches = cljs.core.assoc.call(null,this__15034.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__15035 = this;
return this$.watches = cljs.core.dissoc.call(null,this__15035.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__15039 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__15039.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15040 = this;
return this__15040.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15041 = this;
return this__15041.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__15042 = this;
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
var atom__15082 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__15083 = (function() { 
var G__15086__delegate = function (x,p__15073){
var map__15074__15075 = p__15073;
var map__15074__15076 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15074__15075))?cljs.core.apply.call(null,cljs.core.hash_map,map__15074__15075):map__15074__15075);
var validator__15077 = cljs.core.get.call(null,map__15074__15076,"﷐'validator");
var meta__15078 = cljs.core.get.call(null,map__15074__15076,"﷐'meta");

return (new cljs.core.Atom(x,meta__15078,validator__15077,null));
};
var G__15086 = function (x,var_args){
var p__15073 = null;
if (goog.isDef(var_args)) {
  p__15073 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15086__delegate.call(this, x, p__15073);
};
G__15086.cljs$lang$maxFixedArity = 1;
G__15086.cljs$lang$applyTo = (function (arglist__15087){
var x = cljs.core.first(arglist__15087);
var p__15073 = cljs.core.rest(arglist__15087);
return G__15086__delegate.call(this, x, p__15073);
});
return G__15086;
})()
;
atom = function(x,var_args){
var p__15073 = var_args;
switch(arguments.length){
case  1 :
return atom__15082.call(this,x);
default:
return atom__15083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__15083.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____15098 = a.validator;

if(cljs.core.truth_(temp__3698__auto____15098))
{var validate__15099 = temp__3698__auto____15098;

if(cljs.core.truth_(validate__15099.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__15101 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__15101,new_value);
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
var swap_BANG___15125 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___15127 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___15128 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___15129 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___15130 = (function() { 
var G__15132__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__15132 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__15132__delegate.call(this, a, f, x, y, z, more);
};
G__15132.cljs$lang$maxFixedArity = 5;
G__15132.cljs$lang$applyTo = (function (arglist__15134){
var a = cljs.core.first(arglist__15134);
var f = cljs.core.first(cljs.core.next(arglist__15134));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15134)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15134))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15134)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15134)))));
return G__15132__delegate.call(this, a, f, x, y, z, more);
});
return G__15132;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___15125.call(this,a,f);
case  3 :
return swap_BANG___15127.call(this,a,f,x);
case  4 :
return swap_BANG___15128.call(this,a,f,x,y);
case  5 :
return swap_BANG___15129.call(this,a,f,x,y,z);
default:
return swap_BANG___15130.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___15130.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15170){
var iref = cljs.core.first(arglist__15170);
var f = cljs.core.first(cljs.core.next(arglist__15170));
var args = cljs.core.rest(cljs.core.next(arglist__15170));
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
var gensym__15179 = (function (){
return gensym.call(null,"G__");
});
var gensym__15180 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__15179.call(this);
case  1 :
return gensym__15180.call(this,prefix_string);
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
var this__15189 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__15189.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15190 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__15190.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__15190.state,this__15190.f);
}
return cljs.core.deref.call(null,this__15190.state);
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
delay.cljs$lang$applyTo = (function (arglist__15199){
var body = cljs.core.seq( arglist__15199 );;
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
var map__15209__15210 = options;
var map__15209__15211 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15209__15210))?cljs.core.apply.call(null,cljs.core.hash_map,map__15209__15210):map__15209__15210);
var keywordize_keys__15212 = cljs.core.get.call(null,map__15209__15211,"﷐'keywordize-keys");
var keyfn__15213 = (cljs.core.truth_(keywordize_keys__15212)?cljs.core.keyword:cljs.core.str);
var f__15231 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15228 = (function iter__15219(s__15220){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15220__15223 = s__15220;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15220__15223)))
{var k__15225 = cljs.core.first.call(null,s__15220__15223);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15213.call(null,k__15225),thisfn.call(null,(x[k__15225]))]),iter__15219.call(null,cljs.core.rest.call(null,s__15220__15223)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15228.call(null,cljs.core.js_keys.call(null,x));
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

return f__15231.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15263){
var x = cljs.core.first(arglist__15263);
var options = cljs.core.rest(arglist__15263);
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
var mem__15266 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15278__delegate = function (args){
var temp__3695__auto____15268 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15266),args);

if(cljs.core.truth_(temp__3695__auto____15268))
{var v__15269 = temp__3695__auto____15268;

return v__15269;
} else
{var ret__15272 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15266,cljs.core.assoc,args,ret__15272);
return ret__15272;
}
};
var G__15278 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15278__delegate.call(this, args);
};
G__15278.cljs$lang$maxFixedArity = 0;
G__15278.cljs$lang$applyTo = (function (arglist__15282){
var args = cljs.core.seq( arglist__15282 );;
return G__15278__delegate.call(this, args);
});
return G__15278;
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
var trampoline__15287 = (function (f){
while(true){
var ret__15284 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15284)))
{{
var G__15291 = ret__15284;
f = G__15291;
continue;
}
} else
{return ret__15284;
}
break;
}
});
var trampoline__15288 = (function() { 
var G__15292__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15292 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15292__delegate.call(this, f, args);
};
G__15292.cljs$lang$maxFixedArity = 1;
G__15292.cljs$lang$applyTo = (function (arglist__15295){
var f = cljs.core.first(arglist__15295);
var args = cljs.core.rest(arglist__15295);
return G__15292__delegate.call(this, f, args);
});
return G__15292;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15287.call(this,f);
default:
return trampoline__15288.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15288.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15299 = (function (){
return rand.call(null,1);
});
var rand__15300 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15299.call(this);
case  1 :
return rand__15300.call(this,n);
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
var k__15314 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15314,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15314,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15343 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15344 = (function (h,child,parent){
var or__3548__auto____15326 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15326))
{return or__3548__auto____15326;
} else
{var or__3548__auto____15328 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15328))
{return or__3548__auto____15328;
} else
{var and__3546__auto____15330 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15330))
{var and__3546__auto____15331 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15331))
{var and__3546__auto____15332 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15332))
{var ret__15334 = true;
var i__15335 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15339 = cljs.core.not.call(null,ret__15334);

if(cljs.core.truth_(or__3548__auto____15339))
{return or__3548__auto____15339;
} else
{return cljs.core._EQ_.call(null,i__15335,cljs.core.count.call(null,parent));
}
})()))
{return ret__15334;
} else
{{
var G__15349 = isa_QMARK_.call(null,h,child.call(null,i__15335),parent.call(null,i__15335));
var G__15352 = (i__15335 + 1);
ret__15334 = G__15349;
i__15335 = G__15352;
continue;
}
}
break;
}
} else
{return and__3546__auto____15332;
}
} else
{return and__3546__auto____15331;
}
} else
{return and__3546__auto____15330;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15343.call(this,h,child);
case  3 :
return isa_QMARK___15344.call(this,h,child,parent);
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
var parents__15355 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15356 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15355.call(this,h);
case  2 :
return parents__15356.call(this,h,tag);
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
var ancestors__15361 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15362 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15361.call(this,h);
case  2 :
return ancestors__15362.call(this,h,tag);
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
var descendants__15364 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15365 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15364.call(this,h);
case  2 :
return descendants__15365.call(this,h,tag);
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
var derive__15384 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15385 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15373 = "﷐'parents".call(null,h);
var td__15375 = "﷐'descendants".call(null,h);
var ta__15376 = "﷐'ancestors".call(null,h);
var tf__15378 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15382 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15373.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15376.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15376.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15373,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15378.call(null,"﷐'ancestors".call(null,h),tag,td__15375,parent,ta__15376),"﷐'descendants":tf__15378.call(null,"﷐'descendants".call(null,h),parent,ta__15376,tag,td__15375)});
})());

if(cljs.core.truth_(or__3548__auto____15382))
{return or__3548__auto____15382;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15384.call(this,h,tag);
case  3 :
return derive__15385.call(this,h,tag,parent);
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
var underive__15422 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15423 = (function (h,tag,parent){
var parentMap__15406 = "﷐'parents".call(null,h);
var childsParents__15407 = (cljs.core.truth_(parentMap__15406.call(null,tag))?cljs.core.disj.call(null,parentMap__15406.call(null,tag),parent):cljs.core.set([]));
var newParents__15408 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15407))?cljs.core.assoc.call(null,parentMap__15406,tag,childsParents__15407):cljs.core.dissoc.call(null,parentMap__15406,tag));
var deriv_seq__15409 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15367_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15367_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15367_SHARP_),cljs.core.second.call(null,p1__15367_SHARP_)));
}),cljs.core.seq.call(null,newParents__15408)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15406.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15369_SHARP_,p2__15371_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15369_SHARP_,p2__15371_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15409));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15422.call(this,h,tag);
case  3 :
return underive__15423.call(this,h,tag,parent);
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
var xprefs__15436 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15438 = (cljs.core.truth_((function (){var and__3546__auto____15437 = xprefs__15436;

if(cljs.core.truth_(and__3546__auto____15437))
{return xprefs__15436.call(null,y);
} else
{return and__3546__auto____15437;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15438))
{return or__3548__auto____15438;
} else
{var or__3548__auto____15441 = (function (){var ps__15439 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15439) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15439),prefer_table)))
{} else
{}
{
var G__15449 = cljs.core.rest.call(null,ps__15439);
ps__15439 = G__15449;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15441))
{return or__3548__auto____15441;
} else
{var or__3548__auto____15444 = (function (){var ps__15443 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15443) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15443),y,prefer_table)))
{} else
{}
{
var G__15451 = cljs.core.rest.call(null,ps__15443);
ps__15443 = G__15451;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15444))
{return or__3548__auto____15444;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15453 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15453))
{return or__3548__auto____15453;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15472 = cljs.core.reduce.call(null,(function (be,p__15459){
var vec__15461__15463 = p__15459;
var k__15464 = cljs.core.nth.call(null,vec__15461__15463,0,null);
var ___15465 = cljs.core.nth.call(null,vec__15461__15463,1,null);
var e__15466 = vec__15461__15463;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15464)))
{var be2__15469 = (cljs.core.truth_((function (){var or__3548__auto____15468 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15468))
{return or__3548__auto____15468;
} else
{return cljs.core.dominates.call(null,k__15464,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15466:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15469),k__15464,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15464," and ",cljs.core.first.call(null,be2__15469),", and neither is preferred")));
}
return be2__15469;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15472))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15472));
return cljs.core.second.call(null,best_entry__15472);
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
if(cljs.core.truth_((function (){var and__3546__auto____15483 = mf;

if(cljs.core.truth_(and__3546__auto____15483))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15483;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15484 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15484))
{return or__3548__auto____15484;
} else
{var or__3548__auto____15528 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15528))
{return or__3548__auto____15528;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15529 = mf;

if(cljs.core.truth_(and__3546__auto____15529))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15529;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15530 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15530))
{return or__3548__auto____15530;
} else
{var or__3548__auto____15531 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15531))
{return or__3548__auto____15531;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15532 = mf;

if(cljs.core.truth_(and__3546__auto____15532))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15532;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15534 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15534))
{return or__3548__auto____15534;
} else
{var or__3548__auto____15535 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15535))
{return or__3548__auto____15535;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15536 = mf;

if(cljs.core.truth_(and__3546__auto____15536))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15536;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15538 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15538))
{return or__3548__auto____15538;
} else
{var or__3548__auto____15539 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15539))
{return or__3548__auto____15539;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15540 = mf;

if(cljs.core.truth_(and__3546__auto____15540))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15540;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15541 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15541))
{return or__3548__auto____15541;
} else
{var or__3548__auto____15542 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15542))
{return or__3548__auto____15542;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15545 = mf;

if(cljs.core.truth_(and__3546__auto____15545))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15545;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15547 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15547))
{return or__3548__auto____15547;
} else
{var or__3548__auto____15549 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15549))
{return or__3548__auto____15549;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15552 = mf;

if(cljs.core.truth_(and__3546__auto____15552))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15552;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15555 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15555))
{return or__3548__auto____15555;
} else
{var or__3548__auto____15556 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15556))
{return or__3548__auto____15556;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15558 = mf;

if(cljs.core.truth_(and__3546__auto____15558))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15558;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15560 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15560))
{return or__3548__auto____15560;
} else
{var or__3548__auto____15561 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15561))
{return or__3548__auto____15561;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15570 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15571 = cljs.core._get_method.call(null,mf,dispatch_val__15570);

if(cljs.core.truth_(target_fn__15571))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15570)));
}
return cljs.core.apply.call(null,target_fn__15571,args);
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
var this__15576 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15580 = this;
cljs.core.swap_BANG_.call(null,this__15580.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15580.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15580.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15580.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15587 = this;
cljs.core.swap_BANG_.call(null,this__15587.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15587.method_cache,this__15587.method_table,this__15587.cached_hierarchy,this__15587.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15590 = this;
cljs.core.swap_BANG_.call(null,this__15590.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15590.method_cache,this__15590.method_table,this__15590.cached_hierarchy,this__15590.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15591 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15591.cached_hierarchy),cljs.core.deref.call(null,this__15591.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15591.method_cache,this__15591.method_table,this__15591.cached_hierarchy,this__15591.hierarchy);
}
var temp__3695__auto____15593 = cljs.core.deref.call(null,this__15591.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15593))
{var target_fn__15594 = temp__3695__auto____15593;

return target_fn__15594;
} else
{var temp__3695__auto____15596 = cljs.core.find_and_cache_best_method.call(null,this__15591.name,dispatch_val,this__15591.hierarchy,this__15591.method_table,this__15591.prefer_table,this__15591.method_cache,this__15591.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15596))
{var target_fn__15597 = temp__3695__auto____15596;

return target_fn__15597;
} else
{return cljs.core.deref.call(null,this__15591.method_table).call(null,this__15591.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15598 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15598.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15598.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15598.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15598.method_cache,this__15598.method_table,this__15598.cached_hierarchy,this__15598.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15601 = this;
return cljs.core.deref.call(null,this__15601.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15606 = this;
return cljs.core.deref.call(null,this__15606.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15609 = this;
return cljs.core.do_dispatch.call(null,mf,this__15609.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15623__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15623 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15623__delegate.call(this, _, args);
};
G__15623.cljs$lang$maxFixedArity = 1;
G__15623.cljs$lang$applyTo = (function (arglist__15624){
var _ = cljs.core.first(arglist__15624);
var args = cljs.core.rest(arglist__15624);
return G__15623__delegate.call(this, _, args);
});
return G__15623;
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
