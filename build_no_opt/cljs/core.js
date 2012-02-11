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
var or__3548__auto____6349 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____6349))
{return or__3548__auto____6349;
} else
{var or__3548__auto____6350 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____6350))
{return or__3548__auto____6350;
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
var _invoke__6735 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____6378 = this$;

if(cljs.core.truth_(and__3546__auto____6378))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6378;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____6379 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6379))
{return or__3548__auto____6379;
} else
{var or__3548__auto____6380 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6380))
{return or__3548__auto____6380;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__6736 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____6381 = this$;

if(cljs.core.truth_(and__3546__auto____6381))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6381;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____6382 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6382))
{return or__3548__auto____6382;
} else
{var or__3548__auto____6383 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6383))
{return or__3548__auto____6383;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__6737 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____6384 = this$;

if(cljs.core.truth_(and__3546__auto____6384))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6384;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____6385 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6385))
{return or__3548__auto____6385;
} else
{var or__3548__auto____6386 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6386))
{return or__3548__auto____6386;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__6738 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____6387 = this$;

if(cljs.core.truth_(and__3546__auto____6387))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6387;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____6388 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6388))
{return or__3548__auto____6388;
} else
{var or__3548__auto____6390 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6390))
{return or__3548__auto____6390;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__6739 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____6392 = this$;

if(cljs.core.truth_(and__3546__auto____6392))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6392;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____6394 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6394))
{return or__3548__auto____6394;
} else
{var or__3548__auto____6395 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6395))
{return or__3548__auto____6395;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6740 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____6397 = this$;

if(cljs.core.truth_(and__3546__auto____6397))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6397;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____6402 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6402))
{return or__3548__auto____6402;
} else
{var or__3548__auto____6405 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6405))
{return or__3548__auto____6405;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__6741 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____6408 = this$;

if(cljs.core.truth_(and__3546__auto____6408))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6408;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____6499 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6499))
{return or__3548__auto____6499;
} else
{var or__3548__auto____6501 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6501))
{return or__3548__auto____6501;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__6742 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____6504 = this$;

if(cljs.core.truth_(and__3546__auto____6504))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6504;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____6536 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6536))
{return or__3548__auto____6536;
} else
{var or__3548__auto____6537 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6537))
{return or__3548__auto____6537;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__6743 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____6539 = this$;

if(cljs.core.truth_(and__3546__auto____6539))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6539;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____6542 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6542))
{return or__3548__auto____6542;
} else
{var or__3548__auto____6543 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6543))
{return or__3548__auto____6543;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__6744 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____6545 = this$;

if(cljs.core.truth_(and__3546__auto____6545))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6545;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____6548 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6548))
{return or__3548__auto____6548;
} else
{var or__3548__auto____6551 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6551))
{return or__3548__auto____6551;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__6745 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____6554 = this$;

if(cljs.core.truth_(and__3546__auto____6554))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6554;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____6557 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6557))
{return or__3548__auto____6557;
} else
{var or__3548__auto____6560 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6560))
{return or__3548__auto____6560;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__6746 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____6563 = this$;

if(cljs.core.truth_(and__3546__auto____6563))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6563;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____6565 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6565))
{return or__3548__auto____6565;
} else
{var or__3548__auto____6567 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6567))
{return or__3548__auto____6567;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__6747 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____6569 = this$;

if(cljs.core.truth_(and__3546__auto____6569))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6569;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____6573 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6573))
{return or__3548__auto____6573;
} else
{var or__3548__auto____6575 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6575))
{return or__3548__auto____6575;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__6748 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____6579 = this$;

if(cljs.core.truth_(and__3546__auto____6579))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6579;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____6582 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6582))
{return or__3548__auto____6582;
} else
{var or__3548__auto____6584 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6584))
{return or__3548__auto____6584;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__6749 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____6587 = this$;

if(cljs.core.truth_(and__3546__auto____6587))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6587;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____6589 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6589))
{return or__3548__auto____6589;
} else
{var or__3548__auto____6600 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6600))
{return or__3548__auto____6600;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__6750 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____6614 = this$;

if(cljs.core.truth_(and__3546__auto____6614))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6614;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____6617 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6617))
{return or__3548__auto____6617;
} else
{var or__3548__auto____6618 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6618))
{return or__3548__auto____6618;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__6751 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____6620 = this$;

if(cljs.core.truth_(and__3546__auto____6620))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6620;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____6624 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6624))
{return or__3548__auto____6624;
} else
{var or__3548__auto____6625 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6625))
{return or__3548__auto____6625;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__6752 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____6629 = this$;

if(cljs.core.truth_(and__3546__auto____6629))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6629;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____6633 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6633))
{return or__3548__auto____6633;
} else
{var or__3548__auto____6634 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6634))
{return or__3548__auto____6634;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__6753 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____6638 = this$;

if(cljs.core.truth_(and__3546__auto____6638))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6638;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____6640 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6640))
{return or__3548__auto____6640;
} else
{var or__3548__auto____6641 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6641))
{return or__3548__auto____6641;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__6754 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____6723 = this$;

if(cljs.core.truth_(and__3546__auto____6723))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6723;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____6724 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6724))
{return or__3548__auto____6724;
} else
{var or__3548__auto____6726 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6726))
{return or__3548__auto____6726;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__6755 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____6729 = this$;

if(cljs.core.truth_(and__3546__auto____6729))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6729;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____6730 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6730))
{return or__3548__auto____6730;
} else
{var or__3548__auto____6732 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6732))
{return or__3548__auto____6732;
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
return _invoke__6735.call(this,this$);
case  2 :
return _invoke__6736.call(this,this$,a);
case  3 :
return _invoke__6737.call(this,this$,a,b);
case  4 :
return _invoke__6738.call(this,this$,a,b,c);
case  5 :
return _invoke__6739.call(this,this$,a,b,c,d);
case  6 :
return _invoke__6740.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__6741.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__6742.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__6743.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__6744.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__6745.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__6746.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__6747.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__6748.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__6749.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__6750.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__6751.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__6752.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__6753.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__6754.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__6755.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6870 = coll;

if(cljs.core.truth_(and__3546__auto____6870))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____6870;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____6872 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6872))
{return or__3548__auto____6872;
} else
{var or__3548__auto____6873 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____6873))
{return or__3548__auto____6873;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6893 = coll;

if(cljs.core.truth_(and__3546__auto____6893))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____6893;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____6894 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6894))
{return or__3548__auto____6894;
} else
{var or__3548__auto____6896 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____6896))
{return or__3548__auto____6896;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____6908 = coll;

if(cljs.core.truth_(and__3546__auto____6908))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____6908;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____6914 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6914))
{return or__3548__auto____6914;
} else
{var or__3548__auto____6916 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____6916))
{return or__3548__auto____6916;
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
var _nth__6932 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____6921 = coll;

if(cljs.core.truth_(and__3546__auto____6921))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6921;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____6923 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6923))
{return or__3548__auto____6923;
} else
{var or__3548__auto____6925 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6925))
{return or__3548__auto____6925;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__6933 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6928 = coll;

if(cljs.core.truth_(and__3546__auto____6928))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6928;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____6930 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6930))
{return or__3548__auto____6930;
} else
{var or__3548__auto____6931 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6931))
{return or__3548__auto____6931;
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
return _nth__6932.call(this,coll,n);
case  3 :
return _nth__6933.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6939 = coll;

if(cljs.core.truth_(and__3546__auto____6939))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____6939;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____6942 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6942))
{return or__3548__auto____6942;
} else
{var or__3548__auto____6943 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____6943))
{return or__3548__auto____6943;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6947 = coll;

if(cljs.core.truth_(and__3546__auto____6947))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____6947;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____6951 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6951))
{return or__3548__auto____6951;
} else
{var or__3548__auto____6952 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____6952))
{return or__3548__auto____6952;
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
var _lookup__7011 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____6994 = o;

if(cljs.core.truth_(and__3546__auto____6994))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6994;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____6997 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6997))
{return or__3548__auto____6997;
} else
{var or__3548__auto____6998 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6998))
{return or__3548__auto____6998;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7012 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6999 = o;

if(cljs.core.truth_(and__3546__auto____6999))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6999;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7006 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7006))
{return or__3548__auto____7006;
} else
{var or__3548__auto____7008 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7008))
{return or__3548__auto____7008;
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
return _lookup__7011.call(this,o,k);
case  3 :
return _lookup__7012.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7027 = coll;

if(cljs.core.truth_(and__3546__auto____7027))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7027;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7030 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7030))
{return or__3548__auto____7030;
} else
{var or__3548__auto____7031 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7031))
{return or__3548__auto____7031;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7033 = coll;

if(cljs.core.truth_(and__3546__auto____7033))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7033;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7036 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7036))
{return or__3548__auto____7036;
} else
{var or__3548__auto____7038 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7038))
{return or__3548__auto____7038;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7043 = coll;

if(cljs.core.truth_(and__3546__auto____7043))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7043;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7046 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7046))
{return or__3548__auto____7046;
} else
{var or__3548__auto____7049 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7049))
{return or__3548__auto____7049;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7053 = coll;

if(cljs.core.truth_(and__3546__auto____7053))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7053;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7058 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7058))
{return or__3548__auto____7058;
} else
{var or__3548__auto____7059 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7059))
{return or__3548__auto____7059;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7063 = coll;

if(cljs.core.truth_(and__3546__auto____7063))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7063;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7084 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7084))
{return or__3548__auto____7084;
} else
{var or__3548__auto____7085 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7085))
{return or__3548__auto____7085;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7088 = coll;

if(cljs.core.truth_(and__3546__auto____7088))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7088;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7093 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7093))
{return or__3548__auto____7093;
} else
{var or__3548__auto____7096 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7096))
{return or__3548__auto____7096;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7103 = coll;

if(cljs.core.truth_(and__3546__auto____7103))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7103;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7107 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7107))
{return or__3548__auto____7107;
} else
{var or__3548__auto____7109 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7109))
{return or__3548__auto____7109;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7112 = o;

if(cljs.core.truth_(and__3546__auto____7112))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7112;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7116 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7116))
{return or__3548__auto____7116;
} else
{var or__3548__auto____7120 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7120))
{return or__3548__auto____7120;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7123 = o;

if(cljs.core.truth_(and__3546__auto____7123))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7123;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7130 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7130))
{return or__3548__auto____7130;
} else
{var or__3548__auto____7131 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7131))
{return or__3548__auto____7131;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7142 = o;

if(cljs.core.truth_(and__3546__auto____7142))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7142;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7147 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7147))
{return or__3548__auto____7147;
} else
{var or__3548__auto____7148 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7148))
{return or__3548__auto____7148;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7155 = o;

if(cljs.core.truth_(and__3546__auto____7155))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7155;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7159 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7159))
{return or__3548__auto____7159;
} else
{var or__3548__auto____7160 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7160))
{return or__3548__auto____7160;
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
var _reduce__7186 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7170 = coll;

if(cljs.core.truth_(and__3546__auto____7170))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7170;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7173 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7173))
{return or__3548__auto____7173;
} else
{var or__3548__auto____7175 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7175))
{return or__3548__auto____7175;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7187 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7179 = coll;

if(cljs.core.truth_(and__3546__auto____7179))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7179;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7183 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7183))
{return or__3548__auto____7183;
} else
{var or__3548__auto____7184 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7184))
{return or__3548__auto____7184;
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
return _reduce__7186.call(this,coll,f);
case  3 :
return _reduce__7187.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7194 = o;

if(cljs.core.truth_(and__3546__auto____7194))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7194;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7195 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7195))
{return or__3548__auto____7195;
} else
{var or__3548__auto____7196 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7196))
{return or__3548__auto____7196;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7201 = o;

if(cljs.core.truth_(and__3546__auto____7201))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7201;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7203 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7203))
{return or__3548__auto____7203;
} else
{var or__3548__auto____7204 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7204))
{return or__3548__auto____7204;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7210 = o;

if(cljs.core.truth_(and__3546__auto____7210))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7210;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7212 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7212))
{return or__3548__auto____7212;
} else
{var or__3548__auto____7213 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7213))
{return or__3548__auto____7213;
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
if(cljs.core.truth_((function (){var and__3546__auto____7222 = o;

if(cljs.core.truth_(and__3546__auto____7222))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7222;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7224 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7224))
{return or__3548__auto____7224;
} else
{var or__3548__auto____7225 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7225))
{return or__3548__auto____7225;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7229 = d;

if(cljs.core.truth_(and__3546__auto____7229))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7229;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7230 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7230))
{return or__3548__auto____7230;
} else
{var or__3548__auto____7231 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7231))
{return or__3548__auto____7231;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7236 = this$;

if(cljs.core.truth_(and__3546__auto____7236))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7236;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7239 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7239))
{return or__3548__auto____7239;
} else
{var or__3548__auto____7244 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7244))
{return or__3548__auto____7244;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7248 = this$;

if(cljs.core.truth_(and__3546__auto____7248))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7248;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7253 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7253))
{return or__3548__auto____7253;
} else
{var or__3548__auto____7254 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7254))
{return or__3548__auto____7254;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7255 = this$;

if(cljs.core.truth_(and__3546__auto____7255))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7255;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____7257 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7257))
{return or__3548__auto____7257;
} else
{var or__3548__auto____7258 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7258))
{return or__3548__auto____7258;
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
var G__7289 = null;
var G__7289__7290 = (function (o,k){
return null;
});
var G__7289__7291 = (function (o,k,not_found){
return not_found;
});
G__7289 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__7289__7290.call(this,o,k);
case  3 :
return G__7289__7291.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7289;
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
var G__7293 = null;
var G__7293__7294 = (function (_,f){
return f.call(null);
});
var G__7293__7295 = (function (_,f,start){
return start;
});
G__7293 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7293__7294.call(this,_,f);
case  3 :
return G__7293__7295.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7293;
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
var G__7297 = null;
var G__7297__7298 = (function (_,n){
return null;
});
var G__7297__7299 = (function (_,n,not_found){
return not_found;
});
G__7297 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__7297__7298.call(this,_,n);
case  3 :
return G__7297__7299.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7297;
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
var ci_reduce__7342 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__7317 = cljs.core._nth.call(null,cicoll,0);
var n__7318 = 1;

while(true){
if(cljs.core.truth_((n__7318 < cljs.core._count.call(null,cicoll))))
{{
var G__7350 = f.call(null,val__7317,cljs.core._nth.call(null,cicoll,n__7318));
var G__7351 = (n__7318 + 1);
val__7317 = G__7350;
n__7318 = G__7351;
continue;
}
} else
{return val__7317;
}
break;
}
}
});
var ci_reduce__7343 = (function (cicoll,f,val){
var val__7326 = val;
var n__7327 = 0;

while(true){
if(cljs.core.truth_((n__7327 < cljs.core._count.call(null,cicoll))))
{{
var G__7355 = f.call(null,val__7326,cljs.core._nth.call(null,cicoll,n__7327));
var G__7356 = (n__7327 + 1);
val__7326 = G__7355;
n__7327 = G__7356;
continue;
}
} else
{return val__7326;
}
break;
}
});
var ci_reduce__7344 = (function (cicoll,f,val,idx){
var val__7331 = val;
var n__7332 = idx;

while(true){
if(cljs.core.truth_((n__7332 < cljs.core._count.call(null,cicoll))))
{{
var G__7357 = f.call(null,val__7331,cljs.core._nth.call(null,cicoll,n__7332));
var G__7358 = (n__7332 + 1);
val__7331 = G__7357;
n__7332 = G__7358;
continue;
}
} else
{return val__7331;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__7342.call(this,cicoll,f);
case  3 :
return ci_reduce__7343.call(this,cicoll,f,val);
case  4 :
return ci_reduce__7344.call(this,cicoll,f,val,idx);
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
var this__7366 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7428 = null;
var G__7428__7431 = (function (_,f){
var this__7369 = this;
return cljs.core.ci_reduce.call(null,this__7369.a,f,(this__7369.a[this__7369.i]),(this__7369.i + 1));
});
var G__7428__7432 = (function (_,f,start){
var this__7372 = this;
return cljs.core.ci_reduce.call(null,this__7372.a,f,start,this__7372.i);
});
G__7428 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7428__7431.call(this,_,f);
case  3 :
return G__7428__7432.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7428;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7376 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7378 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7437 = null;
var G__7437__7439 = (function (coll,n){
var this__7381 = this;
var i__7405 = (n + this__7381.i);

if(cljs.core.truth_((i__7405 < this__7381.a.length)))
{return (this__7381.a[i__7405]);
} else
{return null;
}
});
var G__7437__7441 = (function (coll,n,not_found){
var this__7406 = this;
var i__7410 = (n + this__7406.i);

if(cljs.core.truth_((i__7410 < this__7406.a.length)))
{return (this__7406.a[i__7410]);
} else
{return not_found;
}
});
G__7437 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7437__7439.call(this,coll,n);
case  3 :
return G__7437__7441.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7437;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__7412 = this;
return (this__7412.a.length - this__7412.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__7420 = this;
return (this__7420.a[this__7420.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__7422 = this;
if(cljs.core.truth_(((this__7422.i + 1) < this__7422.a.length)))
{return (new cljs.core.IndexedSeq(this__7422.a,(this__7422.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__7427 = this;
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
var G__7484 = null;
var G__7484__7485 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7484__7486 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7484 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__7484__7485.call(this,array,f);
case  3 :
return G__7484__7486.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7484;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7492 = null;
var G__7492__7493 = (function (array,k){
return (array[k]);
});
var G__7492__7494 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7492 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__7492__7493.call(this,array,k);
case  3 :
return G__7492__7494.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7492;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7500 = null;
var G__7500__7501 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__7500__7502 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__7500 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__7500__7501.call(this,array,n);
case  3 :
return G__7500__7502.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7500;
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
var temp__3698__auto____7509 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7509))
{var s__7511 = temp__3698__auto____7509;

return cljs.core._first.call(null,s__7511);
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
var G__7543 = cljs.core.next.call(null,s);
s = G__7543;
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
var s__7544 = cljs.core.seq.call(null,x);
var n__7545 = 0;

while(true){
if(cljs.core.truth_(s__7544))
{{
var G__7546 = cljs.core.next.call(null,s__7544);
var G__7547 = (n__7545 + 1);
s__7544 = G__7546;
n__7545 = G__7547;
continue;
}
} else
{return n__7545;
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
var conj__7548 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__7549 = (function() { 
var G__7551__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7552 = conj.call(null,coll,x);
var G__7553 = cljs.core.first.call(null,xs);
var G__7554 = cljs.core.next.call(null,xs);
coll = G__7552;
x = G__7553;
xs = G__7554;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7551 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7551__delegate.call(this, coll, x, xs);
};
G__7551.cljs$lang$maxFixedArity = 2;
G__7551.cljs$lang$applyTo = (function (arglist__7556){
var coll = cljs.core.first(arglist__7556);
var x = cljs.core.first(cljs.core.next(arglist__7556));
var xs = cljs.core.rest(cljs.core.next(arglist__7556));
return G__7551__delegate.call(this, coll, x, xs);
});
return G__7551;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__7548.call(this,coll,x);
default:
return conj__7549.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__7549.cljs$lang$applyTo;
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
var nth__7598 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__7601 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__7598.call(this,coll,n);
case  3 :
return nth__7601.call(this,coll,n,not_found);
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
var get__7605 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__7607 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__7605.call(this,o,k);
case  3 :
return get__7607.call(this,o,k,not_found);
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
var assoc__7659 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__7660 = (function() { 
var G__7663__delegate = function (coll,k,v,kvs){
while(true){
var ret__7655 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__7668 = ret__7655;
var G__7669 = cljs.core.first.call(null,kvs);
var G__7670 = cljs.core.second.call(null,kvs);
var G__7671 = cljs.core.nnext.call(null,kvs);
coll = G__7668;
k = G__7669;
v = G__7670;
kvs = G__7671;
continue;
}
} else
{return ret__7655;
}
break;
}
};
var G__7663 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7663__delegate.call(this, coll, k, v, kvs);
};
G__7663.cljs$lang$maxFixedArity = 3;
G__7663.cljs$lang$applyTo = (function (arglist__7673){
var coll = cljs.core.first(arglist__7673);
var k = cljs.core.first(cljs.core.next(arglist__7673));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7673)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7673)));
return G__7663__delegate.call(this, coll, k, v, kvs);
});
return G__7663;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__7659.call(this,coll,k,v);
default:
return assoc__7660.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__7660.cljs$lang$applyTo;
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
var dissoc__7676 = (function (coll){
return coll;
});
var dissoc__7677 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__7678 = (function() { 
var G__7681__delegate = function (coll,k,ks){
while(true){
var ret__7675 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7682 = ret__7675;
var G__7683 = cljs.core.first.call(null,ks);
var G__7684 = cljs.core.next.call(null,ks);
coll = G__7682;
k = G__7683;
ks = G__7684;
continue;
}
} else
{return ret__7675;
}
break;
}
};
var G__7681 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7681__delegate.call(this, coll, k, ks);
};
G__7681.cljs$lang$maxFixedArity = 2;
G__7681.cljs$lang$applyTo = (function (arglist__7689){
var coll = cljs.core.first(arglist__7689);
var k = cljs.core.first(cljs.core.next(arglist__7689));
var ks = cljs.core.rest(cljs.core.next(arglist__7689));
return G__7681__delegate.call(this, coll, k, ks);
});
return G__7681;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__7676.call(this,coll);
case  2 :
return dissoc__7677.call(this,coll,k);
default:
return dissoc__7678.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__7678.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____7695 = o;

if(cljs.core.truth_((function (){var and__3546__auto____7696 = x__445__auto____7695;

if(cljs.core.truth_(and__3546__auto____7696))
{var and__3546__auto____7697 = x__445__auto____7695.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7697))
{return cljs.core.not.call(null,x__445__auto____7695.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7697;
}
} else
{return and__3546__auto____7696;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____7695);
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
var disj__7729 = (function (coll){
return coll;
});
var disj__7730 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__7731 = (function() { 
var G__7734__delegate = function (coll,k,ks){
while(true){
var ret__7726 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7735 = ret__7726;
var G__7736 = cljs.core.first.call(null,ks);
var G__7737 = cljs.core.next.call(null,ks);
coll = G__7735;
k = G__7736;
ks = G__7737;
continue;
}
} else
{return ret__7726;
}
break;
}
};
var G__7734 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7734__delegate.call(this, coll, k, ks);
};
G__7734.cljs$lang$maxFixedArity = 2;
G__7734.cljs$lang$applyTo = (function (arglist__7739){
var coll = cljs.core.first(arglist__7739);
var k = cljs.core.first(cljs.core.next(arglist__7739));
var ks = cljs.core.rest(cljs.core.next(arglist__7739));
return G__7734__delegate.call(this, coll, k, ks);
});
return G__7734;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__7729.call(this,coll);
case  2 :
return disj__7730.call(this,coll,k);
default:
return disj__7731.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__7731.cljs$lang$applyTo;
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
{var x__445__auto____7834 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7835 = x__445__auto____7834;

if(cljs.core.truth_(and__3546__auto____7835))
{var and__3546__auto____7836 = x__445__auto____7834.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____7836))
{return cljs.core.not.call(null,x__445__auto____7834.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____7836;
}
} else
{return and__3546__auto____7835;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____7834);
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
{var x__445__auto____7838 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7839 = x__445__auto____7838;

if(cljs.core.truth_(and__3546__auto____7839))
{var and__3546__auto____7840 = x__445__auto____7838.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____7840))
{return cljs.core.not.call(null,x__445__auto____7838.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____7840;
}
} else
{return and__3546__auto____7839;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____7838);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____7841 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7842 = x__445__auto____7841;

if(cljs.core.truth_(and__3546__auto____7842))
{var and__3546__auto____7843 = x__445__auto____7841.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____7843))
{return cljs.core.not.call(null,x__445__auto____7841.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____7843;
}
} else
{return and__3546__auto____7842;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____7841);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____7845 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7846 = x__445__auto____7845;

if(cljs.core.truth_(and__3546__auto____7846))
{var and__3546__auto____7847 = x__445__auto____7845.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____7847))
{return cljs.core.not.call(null,x__445__auto____7845.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____7847;
}
} else
{return and__3546__auto____7846;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____7845);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____7852 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7853 = x__445__auto____7852;

if(cljs.core.truth_(and__3546__auto____7853))
{var and__3546__auto____7854 = x__445__auto____7852.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____7854))
{return cljs.core.not.call(null,x__445__auto____7852.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____7854;
}
} else
{return and__3546__auto____7853;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____7852);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____7855 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7856 = x__445__auto____7855;

if(cljs.core.truth_(and__3546__auto____7856))
{var and__3546__auto____7860 = x__445__auto____7855.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____7860))
{return cljs.core.not.call(null,x__445__auto____7855.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____7860;
}
} else
{return and__3546__auto____7856;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____7855);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____7972 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7973 = x__445__auto____7972;

if(cljs.core.truth_(and__3546__auto____7973))
{var and__3546__auto____7975 = x__445__auto____7972.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____7975))
{return cljs.core.not.call(null,x__445__auto____7972.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____7975;
}
} else
{return and__3546__auto____7973;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____7972);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__7980 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__7980.push(key);
}));
return keys__7980;
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
{var x__445__auto____7990 = s;

if(cljs.core.truth_((function (){var and__3546__auto____7998 = x__445__auto____7990;

if(cljs.core.truth_(and__3546__auto____7998))
{var and__3546__auto____7999 = x__445__auto____7990.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____7999))
{return cljs.core.not.call(null,x__445__auto____7990.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____7999;
}
} else
{return and__3546__auto____7998;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____7990);
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
var and__3546__auto____8002 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8002))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8003 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8003))
{return or__3548__auto____8003;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8002;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8004 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8004))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8004;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8060 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8060))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8060;
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
var and__3546__auto____8090 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8090))
{return (n == n.toFixed());
} else
{return and__3546__auto____8090;
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
if(cljs.core.truth_((function (){var and__3546__auto____8101 = coll;

if(cljs.core.truth_(and__3546__auto____8101))
{var and__3546__auto____8102 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8102))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8102;
}
} else
{return and__3546__auto____8101;
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
var distinct_QMARK___8112 = (function (x){
return true;
});
var distinct_QMARK___8113 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8114 = (function() { 
var G__8117__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8104 = cljs.core.set([y,x]);
var xs__8105 = more;

while(true){
var x__8106 = cljs.core.first.call(null,xs__8105);
var etc__8107 = cljs.core.next.call(null,xs__8105);

if(cljs.core.truth_(xs__8105))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8104,x__8106)))
{return false;
} else
{{
var G__8119 = cljs.core.conj.call(null,s__8104,x__8106);
var G__8120 = etc__8107;
s__8104 = G__8119;
xs__8105 = G__8120;
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
var G__8117 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8117__delegate.call(this, x, y, more);
};
G__8117.cljs$lang$maxFixedArity = 2;
G__8117.cljs$lang$applyTo = (function (arglist__8121){
var x = cljs.core.first(arglist__8121);
var y = cljs.core.first(cljs.core.next(arglist__8121));
var more = cljs.core.rest(cljs.core.next(arglist__8121));
return G__8117__delegate.call(this, x, y, more);
});
return G__8117;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8112.call(this,x);
case  2 :
return distinct_QMARK___8113.call(this,x,y);
default:
return distinct_QMARK___8114.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8114.cljs$lang$applyTo;
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
var r__8130 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8130)))
{return r__8130;
} else
{if(cljs.core.truth_(r__8130))
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
var sort__8198 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8199 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8133 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8133,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8133);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8198.call(this,comp);
case  2 :
return sort__8199.call(this,comp,coll);
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
var sort_by__8211 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8212 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8211.call(this,keyfn,comp);
case  3 :
return sort_by__8212.call(this,keyfn,comp,coll);
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
var reduce__8227 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8228 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8227.call(this,f,val);
case  3 :
return reduce__8228.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8248 = (function (f,coll){
var temp__3695__auto____8236 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8236))
{var s__8238 = temp__3695__auto____8236;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8238),cljs.core.next.call(null,s__8238));
} else
{return f.call(null);
}
});
var seq_reduce__8250 = (function (f,val,coll){
var val__8244 = val;
var coll__8246 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8246))
{{
var G__8255 = f.call(null,val__8244,cljs.core.first.call(null,coll__8246));
var G__8256 = cljs.core.next.call(null,coll__8246);
val__8244 = G__8255;
coll__8246 = G__8256;
continue;
}
} else
{return val__8244;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8248.call(this,f,val);
case  3 :
return seq_reduce__8250.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8264 = null;
var G__8264__8267 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8264__8268 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8264 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8264__8267.call(this,coll,f);
case  3 :
return G__8264__8268.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8264;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8304 = (function (){
return 0;
});
var _PLUS___8305 = (function (x){
return x;
});
var _PLUS___8306 = (function (x,y){
return (x + y);
});
var _PLUS___8307 = (function() { 
var G__8315__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8315 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8315__delegate.call(this, x, y, more);
};
G__8315.cljs$lang$maxFixedArity = 2;
G__8315.cljs$lang$applyTo = (function (arglist__8317){
var x = cljs.core.first(arglist__8317);
var y = cljs.core.first(cljs.core.next(arglist__8317));
var more = cljs.core.rest(cljs.core.next(arglist__8317));
return G__8315__delegate.call(this, x, y, more);
});
return G__8315;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8304.call(this);
case  1 :
return _PLUS___8305.call(this,x);
case  2 :
return _PLUS___8306.call(this,x,y);
default:
return _PLUS___8307.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8307.cljs$lang$applyTo;
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
var ___8319 = (function (x){
return (- x);
});
var ___8320 = (function (x,y){
return (x - y);
});
var ___8321 = (function() { 
var G__8323__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8323 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8323__delegate.call(this, x, y, more);
};
G__8323.cljs$lang$maxFixedArity = 2;
G__8323.cljs$lang$applyTo = (function (arglist__8327){
var x = cljs.core.first(arglist__8327);
var y = cljs.core.first(cljs.core.next(arglist__8327));
var more = cljs.core.rest(cljs.core.next(arglist__8327));
return G__8323__delegate.call(this, x, y, more);
});
return G__8323;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8319.call(this,x);
case  2 :
return ___8320.call(this,x,y);
default:
return ___8321.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8321.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8333 = (function (){
return 1;
});
var _STAR___8334 = (function (x){
return x;
});
var _STAR___8335 = (function (x,y){
return (x * y);
});
var _STAR___8336 = (function() { 
var G__8342__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8342 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8342__delegate.call(this, x, y, more);
};
G__8342.cljs$lang$maxFixedArity = 2;
G__8342.cljs$lang$applyTo = (function (arglist__8344){
var x = cljs.core.first(arglist__8344);
var y = cljs.core.first(cljs.core.next(arglist__8344));
var more = cljs.core.rest(cljs.core.next(arglist__8344));
return G__8342__delegate.call(this, x, y, more);
});
return G__8342;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8333.call(this);
case  1 :
return _STAR___8334.call(this,x);
case  2 :
return _STAR___8335.call(this,x,y);
default:
return _STAR___8336.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8336.cljs$lang$applyTo;
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
var _SLASH___8352 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8353 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___8354 = (function() { 
var G__8358__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8358 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8358__delegate.call(this, x, y, more);
};
G__8358.cljs$lang$maxFixedArity = 2;
G__8358.cljs$lang$applyTo = (function (arglist__8359){
var x = cljs.core.first(arglist__8359);
var y = cljs.core.first(cljs.core.next(arglist__8359));
var more = cljs.core.rest(cljs.core.next(arglist__8359));
return G__8358__delegate.call(this, x, y, more);
});
return G__8358;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8352.call(this,x);
case  2 :
return _SLASH___8353.call(this,x,y);
default:
return _SLASH___8354.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8354.cljs$lang$applyTo;
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
var _LT___8377 = (function (x){
return true;
});
var _LT___8378 = (function (x,y){
return (x < y);
});
var _LT___8379 = (function() { 
var G__8381__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8383 = y;
var G__8384 = cljs.core.first.call(null,more);
var G__8385 = cljs.core.next.call(null,more);
x = G__8383;
y = G__8384;
more = G__8385;
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
var G__8381 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8381__delegate.call(this, x, y, more);
};
G__8381.cljs$lang$maxFixedArity = 2;
G__8381.cljs$lang$applyTo = (function (arglist__8386){
var x = cljs.core.first(arglist__8386);
var y = cljs.core.first(cljs.core.next(arglist__8386));
var more = cljs.core.rest(cljs.core.next(arglist__8386));
return G__8381__delegate.call(this, x, y, more);
});
return G__8381;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___8377.call(this,x);
case  2 :
return _LT___8378.call(this,x,y);
default:
return _LT___8379.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___8379.cljs$lang$applyTo;
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
var _LT__EQ___8399 = (function (x){
return true;
});
var _LT__EQ___8400 = (function (x,y){
return (x <= y);
});
var _LT__EQ___8401 = (function() { 
var G__8404__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8405 = y;
var G__8406 = cljs.core.first.call(null,more);
var G__8407 = cljs.core.next.call(null,more);
x = G__8405;
y = G__8406;
more = G__8407;
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
var G__8404 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8404__delegate.call(this, x, y, more);
};
G__8404.cljs$lang$maxFixedArity = 2;
G__8404.cljs$lang$applyTo = (function (arglist__8408){
var x = cljs.core.first(arglist__8408);
var y = cljs.core.first(cljs.core.next(arglist__8408));
var more = cljs.core.rest(cljs.core.next(arglist__8408));
return G__8404__delegate.call(this, x, y, more);
});
return G__8404;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___8399.call(this,x);
case  2 :
return _LT__EQ___8400.call(this,x,y);
default:
return _LT__EQ___8401.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___8401.cljs$lang$applyTo;
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
var _GT___8531 = (function (x){
return true;
});
var _GT___8532 = (function (x,y){
return (x > y);
});
var _GT___8533 = (function() { 
var G__8539__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8540 = y;
var G__8541 = cljs.core.first.call(null,more);
var G__8542 = cljs.core.next.call(null,more);
x = G__8540;
y = G__8541;
more = G__8542;
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
var G__8539 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8539__delegate.call(this, x, y, more);
};
G__8539.cljs$lang$maxFixedArity = 2;
G__8539.cljs$lang$applyTo = (function (arglist__8544){
var x = cljs.core.first(arglist__8544);
var y = cljs.core.first(cljs.core.next(arglist__8544));
var more = cljs.core.rest(cljs.core.next(arglist__8544));
return G__8539__delegate.call(this, x, y, more);
});
return G__8539;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___8531.call(this,x);
case  2 :
return _GT___8532.call(this,x,y);
default:
return _GT___8533.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___8533.cljs$lang$applyTo;
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
var _GT__EQ___8559 = (function (x){
return true;
});
var _GT__EQ___8560 = (function (x,y){
return (x >= y);
});
var _GT__EQ___8561 = (function() { 
var G__8566__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8567 = y;
var G__8569 = cljs.core.first.call(null,more);
var G__8570 = cljs.core.next.call(null,more);
x = G__8567;
y = G__8569;
more = G__8570;
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
var G__8566 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8566__delegate.call(this, x, y, more);
};
G__8566.cljs$lang$maxFixedArity = 2;
G__8566.cljs$lang$applyTo = (function (arglist__8573){
var x = cljs.core.first(arglist__8573);
var y = cljs.core.first(cljs.core.next(arglist__8573));
var more = cljs.core.rest(cljs.core.next(arglist__8573));
return G__8566__delegate.call(this, x, y, more);
});
return G__8566;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___8559.call(this,x);
case  2 :
return _GT__EQ___8560.call(this,x,y);
default:
return _GT__EQ___8561.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___8561.cljs$lang$applyTo;
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
var max__8581 = (function (x){
return x;
});
var max__8582 = (function (x,y){
return ((x > y) ? x : y);
});
var max__8583 = (function() { 
var G__8585__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8585 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8585__delegate.call(this, x, y, more);
};
G__8585.cljs$lang$maxFixedArity = 2;
G__8585.cljs$lang$applyTo = (function (arglist__8586){
var x = cljs.core.first(arglist__8586);
var y = cljs.core.first(cljs.core.next(arglist__8586));
var more = cljs.core.rest(cljs.core.next(arglist__8586));
return G__8585__delegate.call(this, x, y, more);
});
return G__8585;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__8581.call(this,x);
case  2 :
return max__8582.call(this,x,y);
default:
return max__8583.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__8583.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__8590 = (function (x){
return x;
});
var min__8591 = (function (x,y){
return ((x < y) ? x : y);
});
var min__8592 = (function() { 
var G__8594__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8594 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8594__delegate.call(this, x, y, more);
};
G__8594.cljs$lang$maxFixedArity = 2;
G__8594.cljs$lang$applyTo = (function (arglist__8596){
var x = cljs.core.first(arglist__8596);
var y = cljs.core.first(cljs.core.next(arglist__8596));
var more = cljs.core.rest(cljs.core.next(arglist__8596));
return G__8594__delegate.call(this, x, y, more);
});
return G__8594;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__8590.call(this,x);
case  2 :
return min__8591.call(this,x,y);
default:
return min__8592.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__8592.cljs$lang$applyTo;
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
var rem__8624 = (n % d);

return cljs.core.fix.call(null,((n - rem__8624) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8627 = cljs.core.quot.call(null,n,d);

return (n - (d * q__8627));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8636 = (function (){
return Math.random.call(null);
});
var rand__8637 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8636.call(this);
case  1 :
return rand__8637.call(this,n);
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
var _EQ__EQ___8699 = (function (x){
return true;
});
var _EQ__EQ___8700 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___8701 = (function() { 
var G__8705__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8707 = y;
var G__8708 = cljs.core.first.call(null,more);
var G__8709 = cljs.core.next.call(null,more);
x = G__8707;
y = G__8708;
more = G__8709;
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
var G__8705 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8705__delegate.call(this, x, y, more);
};
G__8705.cljs$lang$maxFixedArity = 2;
G__8705.cljs$lang$applyTo = (function (arglist__8717){
var x = cljs.core.first(arglist__8717);
var y = cljs.core.first(cljs.core.next(arglist__8717));
var more = cljs.core.rest(cljs.core.next(arglist__8717));
return G__8705__delegate.call(this, x, y, more);
});
return G__8705;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___8699.call(this,x);
case  2 :
return _EQ__EQ___8700.call(this,x,y);
default:
return _EQ__EQ___8701.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___8701.cljs$lang$applyTo;
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
var n__8731 = n;
var xs__8733 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8738 = xs__8733;

if(cljs.core.truth_(and__3546__auto____8738))
{return (n__8731 > 0);
} else
{return and__3546__auto____8738;
}
})()))
{{
var G__8747 = (n__8731 - 1);
var G__8748 = cljs.core.next.call(null,xs__8733);
n__8731 = G__8747;
xs__8733 = G__8748;
continue;
}
} else
{return xs__8733;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__8767 = null;
var G__8767__8768 = (function (coll,n){
var temp__3695__auto____8753 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8753))
{var xs__8754 = temp__3695__auto____8753;

return cljs.core.first.call(null,xs__8754);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__8767__8769 = (function (coll,n,not_found){
var temp__3695__auto____8757 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8757))
{var xs__8758 = temp__3695__auto____8757;

return cljs.core.first.call(null,xs__8758);
} else
{return not_found;
}
});
G__8767 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8767__8768.call(this,coll,n);
case  3 :
return G__8767__8769.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8767;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___8775 = (function (){
return "";
});
var str_STAR___8776 = (function (x){
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
var str_STAR___8777 = (function() { 
var G__8779__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8780 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8781 = cljs.core.next.call(null,more);
sb = G__8780;
more = G__8781;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8779 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8779__delegate.call(this, x, ys);
};
G__8779.cljs$lang$maxFixedArity = 1;
G__8779.cljs$lang$applyTo = (function (arglist__8782){
var x = cljs.core.first(arglist__8782);
var ys = cljs.core.rest(arglist__8782);
return G__8779__delegate.call(this, x, ys);
});
return G__8779;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___8775.call(this);
case  1 :
return str_STAR___8776.call(this,x);
default:
return str_STAR___8777.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___8777.cljs$lang$applyTo;
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
var str__8790 = (function (){
return "";
});
var str__8791 = (function (x){
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
var str__8792 = (function() { 
var G__8805__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__8805 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8805__delegate.call(this, x, ys);
};
G__8805.cljs$lang$maxFixedArity = 1;
G__8805.cljs$lang$applyTo = (function (arglist__8821){
var x = cljs.core.first(arglist__8821);
var ys = cljs.core.rest(arglist__8821);
return G__8805__delegate.call(this, x, ys);
});
return G__8805;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__8790.call(this);
case  1 :
return str__8791.call(this,x);
default:
return str__8792.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__8792.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__8822 = (function (s,start){
return s.substring(start);
});
var subs__8823 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__8822.call(this,s,start);
case  3 :
return subs__8823.call(this,s,start,end);
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
var symbol__8837 = (function (name){
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
var symbol__8838 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__8837.call(this,ns);
case  2 :
return symbol__8838.call(this,ns,name);
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
var keyword__8846 = (function (name){
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
var keyword__8847 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__8846.call(this,ns);
case  2 :
return keyword__8847.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8852 = cljs.core.seq.call(null,x);
var ys__8853 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__8852)))
{return cljs.core.nil_QMARK_.call(null,ys__8853);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__8853)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8852),cljs.core.first.call(null,ys__8853))))
{{
var G__8867 = cljs.core.next.call(null,xs__8852);
var G__8868 = cljs.core.next.call(null,ys__8853);
xs__8852 = G__8867;
ys__8853 = G__8868;
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
return cljs.core.reduce.call(null,(function (p1__8874_SHARP_,p2__8877_SHARP_){
return cljs.core.hash_combine.call(null,p1__8874_SHARP_,cljs.core.hash.call(null,p2__8877_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8894__8895 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__8894__8895))
{var G__8898__8903 = cljs.core.first.call(null,G__8894__8895);
var vec__8900__8904 = G__8898__8903;
var key_name__8906 = cljs.core.nth.call(null,vec__8900__8904,0,null);
var f__8908 = cljs.core.nth.call(null,vec__8900__8904,1,null);
var G__8894__8910 = G__8894__8895;

var G__8898__8912 = G__8898__8903;
var G__8894__8913 = G__8894__8910;

while(true){
var vec__8915__8918 = G__8898__8912;
var key_name__8920 = cljs.core.nth.call(null,vec__8915__8918,0,null);
var f__8922 = cljs.core.nth.call(null,vec__8915__8918,1,null);
var G__8894__8924 = G__8894__8913;

var str_name__8926 = cljs.core.name.call(null,key_name__8920);

obj[str_name__8926] = f__8922;
var temp__3698__auto____8932 = cljs.core.next.call(null,G__8894__8924);

if(cljs.core.truth_(temp__3698__auto____8932))
{var G__8894__8933 = temp__3698__auto____8932;

{
var G__8942 = cljs.core.first.call(null,G__8894__8933);
var G__8943 = G__8894__8933;
G__8898__8912 = G__8942;
G__8894__8913 = G__8943;
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
var this__9009 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9013 = this;
return (new cljs.core.List(this__9013.meta,o,coll,(this__9013.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9017 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9021 = this;
return this__9021.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9023 = this;
return this__9023.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9027 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9028 = this;
return this__9028.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9032 = this;
return this__9032.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9034 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9035 = this;
return (new cljs.core.List(meta,this__9035.first,this__9035.rest,this__9035.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9040 = this;
return this__9040.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9041 = this;
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
var this__9050 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9051 = this;
return (new cljs.core.List(this__9051.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9053 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9055 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9056 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9058 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9059 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9061 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9063 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9065 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9068 = this;
return this__9068.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9071 = this;
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
list.cljs$lang$applyTo = (function (arglist__9100){
var items = cljs.core.seq( arglist__9100 );;
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
var this__9101 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9102 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9103 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9104 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9104.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9105 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9106 = this;
return this__9106.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9107 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9107.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9107.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9109 = this;
return this__9109.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9110 = this;
return (new cljs.core.Cons(meta,this__9110.first,this__9110.rest));
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
var G__9199 = null;
var G__9199__9200 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9199__9201 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9199 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9199__9200.call(this,string,f);
case  3 :
return G__9199__9201.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9199;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9204 = null;
var G__9204__9205 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9204__9206 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9204 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9204__9205.call(this,string,k);
case  3 :
return G__9204__9206.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9204;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9212 = null;
var G__9212__9213 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9212__9214 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9212 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9212__9213.call(this,string,n);
case  3 :
return G__9212__9214.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9212;
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
var G__9239 = null;
var G__9239__9240 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9239__9241 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9239 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9239__9240.call(this,this$,coll);
case  3 :
return G__9239__9241.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9239;
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
var x__9285 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9285;
} else
{lazy_seq.x = x__9285.call(null);
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
var this__9300 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9301 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9304 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9306 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9306.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9308 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9311 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9312 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9315 = this;
return this__9315.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9318 = this;
return (new cljs.core.LazySeq(meta,this__9318.realized,this__9318.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__9342 = cljs.core.array.call(null);

var s__9343 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9343)))
{ary__9342.push(cljs.core.first.call(null,s__9343));
{
var G__9347 = cljs.core.next.call(null,s__9343);
s__9343 = G__9347;
continue;
}
} else
{return ary__9342;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__9348 = s;
var i__9349 = n;
var sum__9350 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9351 = (i__9349 > 0);

if(cljs.core.truth_(and__3546__auto____9351))
{return cljs.core.seq.call(null,s__9348);
} else
{return and__3546__auto____9351;
}
})()))
{{
var G__9353 = cljs.core.next.call(null,s__9348);
var G__9354 = (i__9349 - 1);
var G__9355 = (sum__9350 + 1);
s__9348 = G__9353;
i__9349 = G__9354;
sum__9350 = G__9355;
continue;
}
} else
{return sum__9350;
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
var concat__9375 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__9376 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__9377 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9368 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__9368))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9368),concat.call(null,cljs.core.rest.call(null,s__9368),y));
} else
{return y;
}
})));
});
var concat__9378 = (function() { 
var G__9384__delegate = function (x,y,zs){
var cat__9373 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9369 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__9369))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9369),cat.call(null,cljs.core.rest.call(null,xys__9369),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__9373.call(null,concat.call(null,x,y),zs);
};
var G__9384 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9384__delegate.call(this, x, y, zs);
};
G__9384.cljs$lang$maxFixedArity = 2;
G__9384.cljs$lang$applyTo = (function (arglist__9387){
var x = cljs.core.first(arglist__9387);
var y = cljs.core.first(cljs.core.next(arglist__9387));
var zs = cljs.core.rest(cljs.core.next(arglist__9387));
return G__9384__delegate.call(this, x, y, zs);
});
return G__9384;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__9375.call(this);
case  1 :
return concat__9376.call(this,x);
case  2 :
return concat__9377.call(this,x,y);
default:
return concat__9378.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__9378.cljs$lang$applyTo;
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
var list_STAR___9413 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___9414 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___9415 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___9416 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___9417 = (function() { 
var G__9424__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9424 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9424__delegate.call(this, a, b, c, d, more);
};
G__9424.cljs$lang$maxFixedArity = 4;
G__9424.cljs$lang$applyTo = (function (arglist__9426){
var a = cljs.core.first(arglist__9426);
var b = cljs.core.first(cljs.core.next(arglist__9426));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9426)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9426))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9426))));
return G__9424__delegate.call(this, a, b, c, d, more);
});
return G__9424;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___9413.call(this,a);
case  2 :
return list_STAR___9414.call(this,a,b);
case  3 :
return list_STAR___9415.call(this,a,b,c);
case  4 :
return list_STAR___9416.call(this,a,b,c,d);
default:
return list_STAR___9417.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___9417.cljs$lang$applyTo;
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
var apply__9474 = (function (f,args){
var fixed_arity__9432 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__9432 + 1)) <= fixed_arity__9432)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__9475 = (function (f,x,args){
var arglist__9445 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__9446 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9445,fixed_arity__9446) <= fixed_arity__9446)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9445));
} else
{return f.cljs$lang$applyTo(arglist__9445);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9445));
}
});
var apply__9476 = (function (f,x,y,args){
var arglist__9448 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__9449 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9448,fixed_arity__9449) <= fixed_arity__9449)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9448));
} else
{return f.cljs$lang$applyTo(arglist__9448);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9448));
}
});
var apply__9477 = (function (f,x,y,z,args){
var arglist__9453 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__9454 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9453,fixed_arity__9454) <= fixed_arity__9454)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9453));
} else
{return f.cljs$lang$applyTo(arglist__9453);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9453));
}
});
var apply__9478 = (function() { 
var G__9549__delegate = function (f,a,b,c,d,args){
var arglist__9457 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__9458 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9457,fixed_arity__9458) <= fixed_arity__9458)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9457));
} else
{return f.cljs$lang$applyTo(arglist__9457);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9457));
}
};
var G__9549 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9549__delegate.call(this, f, a, b, c, d, args);
};
G__9549.cljs$lang$maxFixedArity = 5;
G__9549.cljs$lang$applyTo = (function (arglist__9551){
var f = cljs.core.first(arglist__9551);
var a = cljs.core.first(cljs.core.next(arglist__9551));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9551)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9551))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9551)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9551)))));
return G__9549__delegate.call(this, f, a, b, c, d, args);
});
return G__9549;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__9474.call(this,f,a);
case  3 :
return apply__9475.call(this,f,a,b);
case  4 :
return apply__9476.call(this,f,a,b,c);
case  5 :
return apply__9477.call(this,f,a,b,c,d);
default:
return apply__9478.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__9478.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__9568){
var obj = cljs.core.first(arglist__9568);
var f = cljs.core.first(cljs.core.next(arglist__9568));
var args = cljs.core.rest(cljs.core.next(arglist__9568));
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
var not_EQ___9572 = (function (x){
return false;
});
var not_EQ___9573 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___9574 = (function() { 
var G__9577__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__9577 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9577__delegate.call(this, x, y, more);
};
G__9577.cljs$lang$maxFixedArity = 2;
G__9577.cljs$lang$applyTo = (function (arglist__9579){
var x = cljs.core.first(arglist__9579);
var y = cljs.core.first(cljs.core.next(arglist__9579));
var more = cljs.core.rest(cljs.core.next(arglist__9579));
return G__9577__delegate.call(this, x, y, more);
});
return G__9577;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___9572.call(this,x);
case  2 :
return not_EQ___9573.call(this,x,y);
default:
return not_EQ___9574.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___9574.cljs$lang$applyTo;
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
var G__9593 = pred;
var G__9594 = cljs.core.next.call(null,coll);
pred = G__9593;
coll = G__9594;
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
{var or__3548__auto____9601 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____9601))
{return or__3548__auto____9601;
} else
{{
var G__9605 = pred;
var G__9606 = cljs.core.next.call(null,coll);
pred = G__9605;
coll = G__9606;
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
var G__9625 = null;
var G__9625__9627 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__9625__9628 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__9625__9629 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__9625__9630 = (function() { 
var G__9634__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__9634 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9634__delegate.call(this, x, y, zs);
};
G__9634.cljs$lang$maxFixedArity = 2;
G__9634.cljs$lang$applyTo = (function (arglist__9635){
var x = cljs.core.first(arglist__9635);
var y = cljs.core.first(cljs.core.next(arglist__9635));
var zs = cljs.core.rest(cljs.core.next(arglist__9635));
return G__9634__delegate.call(this, x, y, zs);
});
return G__9634;
})()
;
G__9625 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__9625__9627.call(this);
case  1 :
return G__9625__9628.call(this,x);
case  2 :
return G__9625__9629.call(this,x,y);
default:
return G__9625__9630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9625.cljs$lang$maxFixedArity = 2;
G__9625.cljs$lang$applyTo = G__9625__9630.cljs$lang$applyTo;
return G__9625;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__9645__delegate = function (args){
return x;
};
var G__9645 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9645__delegate.call(this, args);
};
G__9645.cljs$lang$maxFixedArity = 0;
G__9645.cljs$lang$applyTo = (function (arglist__9646){
var args = cljs.core.seq( arglist__9646 );;
return G__9645__delegate.call(this, args);
});
return G__9645;
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
var comp__9771 = (function (){
return cljs.core.identity;
});
var comp__9772 = (function (f){
return f;
});
var comp__9773 = (function (f,g){
return (function() {
var G__9826 = null;
var G__9826__9836 = (function (){
return f.call(null,g.call(null));
});
var G__9826__9837 = (function (x){
return f.call(null,g.call(null,x));
});
var G__9826__9838 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__9826__9839 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__9826__9840 = (function() { 
var G__9854__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9854 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9854__delegate.call(this, x, y, z, args);
};
G__9854.cljs$lang$maxFixedArity = 3;
G__9854.cljs$lang$applyTo = (function (arglist__9861){
var x = cljs.core.first(arglist__9861);
var y = cljs.core.first(cljs.core.next(arglist__9861));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9861)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9861)));
return G__9854__delegate.call(this, x, y, z, args);
});
return G__9854;
})()
;
G__9826 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9826__9836.call(this);
case  1 :
return G__9826__9837.call(this,x);
case  2 :
return G__9826__9838.call(this,x,y);
case  3 :
return G__9826__9839.call(this,x,y,z);
default:
return G__9826__9840.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9826.cljs$lang$maxFixedArity = 3;
G__9826.cljs$lang$applyTo = G__9826__9840.cljs$lang$applyTo;
return G__9826;
})()
});
var comp__9774 = (function (f,g,h){
return (function() {
var G__9864 = null;
var G__9864__9867 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__9864__9868 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__9864__9869 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__9864__9870 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__9864__9871 = (function() { 
var G__9879__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__9879 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9879__delegate.call(this, x, y, z, args);
};
G__9879.cljs$lang$maxFixedArity = 3;
G__9879.cljs$lang$applyTo = (function (arglist__9884){
var x = cljs.core.first(arglist__9884);
var y = cljs.core.first(cljs.core.next(arglist__9884));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9884)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9884)));
return G__9879__delegate.call(this, x, y, z, args);
});
return G__9879;
})()
;
G__9864 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9864__9867.call(this);
case  1 :
return G__9864__9868.call(this,x);
case  2 :
return G__9864__9869.call(this,x,y);
case  3 :
return G__9864__9870.call(this,x,y,z);
default:
return G__9864__9871.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9864.cljs$lang$maxFixedArity = 3;
G__9864.cljs$lang$applyTo = G__9864__9871.cljs$lang$applyTo;
return G__9864;
})()
});
var comp__9775 = (function() { 
var G__9889__delegate = function (f1,f2,f3,fs){
var fs__9672 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__9890__delegate = function (args){
var ret__9674 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__9672),args);
var fs__9676 = cljs.core.next.call(null,fs__9672);

while(true){
if(cljs.core.truth_(fs__9676))
{{
var G__9918 = cljs.core.first.call(null,fs__9676).call(null,ret__9674);
var G__9919 = cljs.core.next.call(null,fs__9676);
ret__9674 = G__9918;
fs__9676 = G__9919;
continue;
}
} else
{return ret__9674;
}
break;
}
};
var G__9890 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9890__delegate.call(this, args);
};
G__9890.cljs$lang$maxFixedArity = 0;
G__9890.cljs$lang$applyTo = (function (arglist__9920){
var args = cljs.core.seq( arglist__9920 );;
return G__9890__delegate.call(this, args);
});
return G__9890;
})()
;
};
var G__9889 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9889__delegate.call(this, f1, f2, f3, fs);
};
G__9889.cljs$lang$maxFixedArity = 3;
G__9889.cljs$lang$applyTo = (function (arglist__9921){
var f1 = cljs.core.first(arglist__9921);
var f2 = cljs.core.first(cljs.core.next(arglist__9921));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9921)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9921)));
return G__9889__delegate.call(this, f1, f2, f3, fs);
});
return G__9889;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__9771.call(this);
case  1 :
return comp__9772.call(this,f1);
case  2 :
return comp__9773.call(this,f1,f2);
case  3 :
return comp__9774.call(this,f1,f2,f3);
default:
return comp__9775.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__9775.cljs$lang$applyTo;
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
var partial__10071 = (function (f,arg1){
return (function() { 
var G__10076__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10076 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10076__delegate.call(this, args);
};
G__10076.cljs$lang$maxFixedArity = 0;
G__10076.cljs$lang$applyTo = (function (arglist__10079){
var args = cljs.core.seq( arglist__10079 );;
return G__10076__delegate.call(this, args);
});
return G__10076;
})()
;
});
var partial__10072 = (function (f,arg1,arg2){
return (function() { 
var G__10080__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10080 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10080__delegate.call(this, args);
};
G__10080.cljs$lang$maxFixedArity = 0;
G__10080.cljs$lang$applyTo = (function (arglist__10082){
var args = cljs.core.seq( arglist__10082 );;
return G__10080__delegate.call(this, args);
});
return G__10080;
})()
;
});
var partial__10073 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10083__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10083 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10083__delegate.call(this, args);
};
G__10083.cljs$lang$maxFixedArity = 0;
G__10083.cljs$lang$applyTo = (function (arglist__10084){
var args = cljs.core.seq( arglist__10084 );;
return G__10083__delegate.call(this, args);
});
return G__10083;
})()
;
});
var partial__10074 = (function() { 
var G__10085__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10086__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10086 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10086__delegate.call(this, args);
};
G__10086.cljs$lang$maxFixedArity = 0;
G__10086.cljs$lang$applyTo = (function (arglist__10096){
var args = cljs.core.seq( arglist__10096 );;
return G__10086__delegate.call(this, args);
});
return G__10086;
})()
;
};
var G__10085 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10085__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10085.cljs$lang$maxFixedArity = 4;
G__10085.cljs$lang$applyTo = (function (arglist__10101){
var f = cljs.core.first(arglist__10101);
var arg1 = cljs.core.first(cljs.core.next(arglist__10101));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10101)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10101))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10101))));
return G__10085__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10085;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10071.call(this,f,arg1);
case  3 :
return partial__10072.call(this,f,arg1,arg2);
case  4 :
return partial__10073.call(this,f,arg1,arg2,arg3);
default:
return partial__10074.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10074.cljs$lang$applyTo;
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
var fnil__10133 = (function (f,x){
return (function() {
var G__10137 = null;
var G__10137__10139 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10137__10140 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10137__10141 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10137__10143 = (function() { 
var G__10146__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10146 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10146__delegate.call(this, a, b, c, ds);
};
G__10146.cljs$lang$maxFixedArity = 3;
G__10146.cljs$lang$applyTo = (function (arglist__10149){
var a = cljs.core.first(arglist__10149);
var b = cljs.core.first(cljs.core.next(arglist__10149));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10149)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10149)));
return G__10146__delegate.call(this, a, b, c, ds);
});
return G__10146;
})()
;
G__10137 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10137__10139.call(this,a);
case  2 :
return G__10137__10140.call(this,a,b);
case  3 :
return G__10137__10141.call(this,a,b,c);
default:
return G__10137__10143.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10137.cljs$lang$maxFixedArity = 3;
G__10137.cljs$lang$applyTo = G__10137__10143.cljs$lang$applyTo;
return G__10137;
})()
});
var fnil__10134 = (function (f,x,y){
return (function() {
var G__10151 = null;
var G__10151__10152 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10151__10153 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10151__10155 = (function() { 
var G__10163__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10163 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10163__delegate.call(this, a, b, c, ds);
};
G__10163.cljs$lang$maxFixedArity = 3;
G__10163.cljs$lang$applyTo = (function (arglist__10164){
var a = cljs.core.first(arglist__10164);
var b = cljs.core.first(cljs.core.next(arglist__10164));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10164)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10164)));
return G__10163__delegate.call(this, a, b, c, ds);
});
return G__10163;
})()
;
G__10151 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10151__10152.call(this,a,b);
case  3 :
return G__10151__10153.call(this,a,b,c);
default:
return G__10151__10155.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10151.cljs$lang$maxFixedArity = 3;
G__10151.cljs$lang$applyTo = G__10151__10155.cljs$lang$applyTo;
return G__10151;
})()
});
var fnil__10135 = (function (f,x,y,z){
return (function() {
var G__10165 = null;
var G__10165__10166 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10165__10167 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10165__10168 = (function() { 
var G__10170__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10170 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10170__delegate.call(this, a, b, c, ds);
};
G__10170.cljs$lang$maxFixedArity = 3;
G__10170.cljs$lang$applyTo = (function (arglist__10171){
var a = cljs.core.first(arglist__10171);
var b = cljs.core.first(cljs.core.next(arglist__10171));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10171)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10171)));
return G__10170__delegate.call(this, a, b, c, ds);
});
return G__10170;
})()
;
G__10165 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10165__10166.call(this,a,b);
case  3 :
return G__10165__10167.call(this,a,b,c);
default:
return G__10165__10168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10165.cljs$lang$maxFixedArity = 3;
G__10165.cljs$lang$applyTo = G__10165__10168.cljs$lang$applyTo;
return G__10165;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10133.call(this,f,x);
case  3 :
return fnil__10134.call(this,f,x,y);
case  4 :
return fnil__10135.call(this,f,x,y,z);
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
var mapi__10177 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10174 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10174))
{var s__10175 = temp__3698__auto____10174;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10175)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10175)));
} else
{return null;
}
})));
});

return mapi__10177.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10186 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10186))
{var s__10188 = temp__3698__auto____10186;

var x__10194 = f.call(null,cljs.core.first.call(null,s__10188));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10194)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10188));
} else
{return cljs.core.cons.call(null,x__10194,keep.call(null,f,cljs.core.rest.call(null,s__10188)));
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
var keepi__10323 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10299 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10299))
{var s__10300 = temp__3698__auto____10299;

var x__10301 = f.call(null,idx,cljs.core.first.call(null,s__10300));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10301)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10300));
} else
{return cljs.core.cons.call(null,x__10301,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10300)));
}
} else
{return null;
}
})));
});

return keepi__10323.call(null,0,coll);
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
var every_pred__10419 = (function (p){
return (function() {
var ep1 = null;
var ep1__10425 = (function (){
return true;
});
var ep1__10426 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10427 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10338 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10338))
{return p.call(null,y);
} else
{return and__3546__auto____10338;
}
})());
});
var ep1__10428 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10339 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10339))
{var and__3546__auto____10341 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10341))
{return p.call(null,z);
} else
{return and__3546__auto____10341;
}
} else
{return and__3546__auto____10339;
}
})());
});
var ep1__10429 = (function() { 
var G__10434__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10342 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10342))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10342;
}
})());
};
var G__10434 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10434__delegate.call(this, x, y, z, args);
};
G__10434.cljs$lang$maxFixedArity = 3;
G__10434.cljs$lang$applyTo = (function (arglist__10440){
var x = cljs.core.first(arglist__10440);
var y = cljs.core.first(cljs.core.next(arglist__10440));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10440)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10440)));
return G__10434__delegate.call(this, x, y, z, args);
});
return G__10434;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10425.call(this);
case  1 :
return ep1__10426.call(this,x);
case  2 :
return ep1__10427.call(this,x,y);
case  3 :
return ep1__10428.call(this,x,y,z);
default:
return ep1__10429.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10429.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10420 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10444 = (function (){
return true;
});
var ep2__10445 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10347 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10347))
{return p2.call(null,x);
} else
{return and__3546__auto____10347;
}
})());
});
var ep2__10446 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10348 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10348))
{var and__3546__auto____10350 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10350))
{var and__3546__auto____10352 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10352))
{return p2.call(null,y);
} else
{return and__3546__auto____10352;
}
} else
{return and__3546__auto____10350;
}
} else
{return and__3546__auto____10348;
}
})());
});
var ep2__10447 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10354 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10354))
{var and__3546__auto____10356 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10356))
{var and__3546__auto____10357 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10357))
{var and__3546__auto____10359 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10359))
{var and__3546__auto____10360 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10360))
{return p2.call(null,z);
} else
{return and__3546__auto____10360;
}
} else
{return and__3546__auto____10359;
}
} else
{return and__3546__auto____10357;
}
} else
{return and__3546__auto____10356;
}
} else
{return and__3546__auto____10354;
}
})());
});
var ep2__10448 = (function() { 
var G__10468__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10362 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10362))
{return cljs.core.every_QMARK_.call(null,(function (p1__10284_SHARP_){
var and__3546__auto____10364 = p1.call(null,p1__10284_SHARP_);

if(cljs.core.truth_(and__3546__auto____10364))
{return p2.call(null,p1__10284_SHARP_);
} else
{return and__3546__auto____10364;
}
}),args);
} else
{return and__3546__auto____10362;
}
})());
};
var G__10468 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10468__delegate.call(this, x, y, z, args);
};
G__10468.cljs$lang$maxFixedArity = 3;
G__10468.cljs$lang$applyTo = (function (arglist__10474){
var x = cljs.core.first(arglist__10474);
var y = cljs.core.first(cljs.core.next(arglist__10474));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10474)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10474)));
return G__10468__delegate.call(this, x, y, z, args);
});
return G__10468;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10444.call(this);
case  1 :
return ep2__10445.call(this,x);
case  2 :
return ep2__10446.call(this,x,y);
case  3 :
return ep2__10447.call(this,x,y,z);
default:
return ep2__10448.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10448.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10421 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10483 = (function (){
return true;
});
var ep3__10484 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10368 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10368))
{var and__3546__auto____10370 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10370))
{return p3.call(null,x);
} else
{return and__3546__auto____10370;
}
} else
{return and__3546__auto____10368;
}
})());
});
var ep3__10485 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10373 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10373))
{var and__3546__auto____10375 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10375))
{var and__3546__auto____10377 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10377))
{var and__3546__auto____10378 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10378))
{var and__3546__auto____10380 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10380))
{return p3.call(null,y);
} else
{return and__3546__auto____10380;
}
} else
{return and__3546__auto____10378;
}
} else
{return and__3546__auto____10377;
}
} else
{return and__3546__auto____10375;
}
} else
{return and__3546__auto____10373;
}
})());
});
var ep3__10486 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10382 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10382))
{var and__3546__auto____10383 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10383))
{var and__3546__auto____10384 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10384))
{var and__3546__auto____10386 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10386))
{var and__3546__auto____10388 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10388))
{var and__3546__auto____10390 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10390))
{var and__3546__auto____10391 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10391))
{var and__3546__auto____10393 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10393))
{return p3.call(null,z);
} else
{return and__3546__auto____10393;
}
} else
{return and__3546__auto____10391;
}
} else
{return and__3546__auto____10390;
}
} else
{return and__3546__auto____10388;
}
} else
{return and__3546__auto____10386;
}
} else
{return and__3546__auto____10384;
}
} else
{return and__3546__auto____10383;
}
} else
{return and__3546__auto____10382;
}
})());
});
var ep3__10487 = (function() { 
var G__10507__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10397 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10397))
{return cljs.core.every_QMARK_.call(null,(function (p1__10286_SHARP_){
var and__3546__auto____10399 = p1.call(null,p1__10286_SHARP_);

if(cljs.core.truth_(and__3546__auto____10399))
{var and__3546__auto____10401 = p2.call(null,p1__10286_SHARP_);

if(cljs.core.truth_(and__3546__auto____10401))
{return p3.call(null,p1__10286_SHARP_);
} else
{return and__3546__auto____10401;
}
} else
{return and__3546__auto____10399;
}
}),args);
} else
{return and__3546__auto____10397;
}
})());
};
var G__10507 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10507__delegate.call(this, x, y, z, args);
};
G__10507.cljs$lang$maxFixedArity = 3;
G__10507.cljs$lang$applyTo = (function (arglist__10511){
var x = cljs.core.first(arglist__10511);
var y = cljs.core.first(cljs.core.next(arglist__10511));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10511)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10511)));
return G__10507__delegate.call(this, x, y, z, args);
});
return G__10507;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10483.call(this);
case  1 :
return ep3__10484.call(this,x);
case  2 :
return ep3__10485.call(this,x,y);
case  3 :
return ep3__10486.call(this,x,y,z);
default:
return ep3__10487.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10487.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10423 = (function() { 
var G__10527__delegate = function (p1,p2,p3,ps){
var ps__10405 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10535 = (function (){
return true;
});
var epn__10536 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10287_SHARP_){
return p1__10287_SHARP_.call(null,x);
}),ps__10405);
});
var epn__10537 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10288_SHARP_){
var and__3546__auto____10409 = p1__10288_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10409))
{return p1__10288_SHARP_.call(null,y);
} else
{return and__3546__auto____10409;
}
}),ps__10405);
});
var epn__10538 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10289_SHARP_){
var and__3546__auto____10411 = p1__10289_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10411))
{var and__3546__auto____10414 = p1__10289_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10414))
{return p1__10289_SHARP_.call(null,z);
} else
{return and__3546__auto____10414;
}
} else
{return and__3546__auto____10411;
}
}),ps__10405);
});
var epn__10539 = (function() { 
var G__10549__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10416 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10416))
{return cljs.core.every_QMARK_.call(null,(function (p1__10290_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10290_SHARP_,args);
}),ps__10405);
} else
{return and__3546__auto____10416;
}
})());
};
var G__10549 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10549__delegate.call(this, x, y, z, args);
};
G__10549.cljs$lang$maxFixedArity = 3;
G__10549.cljs$lang$applyTo = (function (arglist__10551){
var x = cljs.core.first(arglist__10551);
var y = cljs.core.first(cljs.core.next(arglist__10551));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10551)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10551)));
return G__10549__delegate.call(this, x, y, z, args);
});
return G__10549;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10535.call(this);
case  1 :
return epn__10536.call(this,x);
case  2 :
return epn__10537.call(this,x,y);
case  3 :
return epn__10538.call(this,x,y,z);
default:
return epn__10539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10539.cljs$lang$applyTo;
return epn;
})()
};
var G__10527 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10527__delegate.call(this, p1, p2, p3, ps);
};
G__10527.cljs$lang$maxFixedArity = 3;
G__10527.cljs$lang$applyTo = (function (arglist__10553){
var p1 = cljs.core.first(arglist__10553);
var p2 = cljs.core.first(cljs.core.next(arglist__10553));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10553)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10553)));
return G__10527__delegate.call(this, p1, p2, p3, ps);
});
return G__10527;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10419.call(this,p1);
case  2 :
return every_pred__10420.call(this,p1,p2);
case  3 :
return every_pred__10421.call(this,p1,p2,p3);
default:
return every_pred__10423.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10423.cljs$lang$applyTo;
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
var some_fn__10727 = (function (p){
return (function() {
var sp1 = null;
var sp1__10734 = (function (){
return null;
});
var sp1__10735 = (function (x){
return p.call(null,x);
});
var sp1__10736 = (function (x,y){
var or__3548__auto____10561 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10561))
{return or__3548__auto____10561;
} else
{return p.call(null,y);
}
});
var sp1__10737 = (function (x,y,z){
var or__3548__auto____10563 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10563))
{return or__3548__auto____10563;
} else
{var or__3548__auto____10564 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____10564))
{return or__3548__auto____10564;
} else
{return p.call(null,z);
}
}
});
var sp1__10738 = (function() { 
var G__10746__delegate = function (x,y,z,args){
var or__3548__auto____10566 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10566))
{return or__3548__auto____10566;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__10746 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10746__delegate.call(this, x, y, z, args);
};
G__10746.cljs$lang$maxFixedArity = 3;
G__10746.cljs$lang$applyTo = (function (arglist__10750){
var x = cljs.core.first(arglist__10750);
var y = cljs.core.first(cljs.core.next(arglist__10750));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10750)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10750)));
return G__10746__delegate.call(this, x, y, z, args);
});
return G__10746;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__10734.call(this);
case  1 :
return sp1__10735.call(this,x);
case  2 :
return sp1__10736.call(this,x,y);
case  3 :
return sp1__10737.call(this,x,y,z);
default:
return sp1__10738.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__10738.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__10728 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__10756 = (function (){
return null;
});
var sp2__10757 = (function (x){
var or__3548__auto____10573 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10573))
{return or__3548__auto____10573;
} else
{return p2.call(null,x);
}
});
var sp2__10758 = (function (x,y){
var or__3548__auto____10574 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10574))
{return or__3548__auto____10574;
} else
{var or__3548__auto____10575 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10575))
{return or__3548__auto____10575;
} else
{var or__3548__auto____10576 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10576))
{return or__3548__auto____10576;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__10759 = (function (x,y,z){
var or__3548__auto____10577 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10577))
{return or__3548__auto____10577;
} else
{var or__3548__auto____10578 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10578))
{return or__3548__auto____10578;
} else
{var or__3548__auto____10579 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10579))
{return or__3548__auto____10579;
} else
{var or__3548__auto____10580 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10580))
{return or__3548__auto____10580;
} else
{var or__3548__auto____10582 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10582))
{return or__3548__auto____10582;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__10760 = (function() { 
var G__10768__delegate = function (x,y,z,args){
var or__3548__auto____10583 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10583))
{return or__3548__auto____10583;
} else
{return cljs.core.some.call(null,(function (p1__10326_SHARP_){
var or__3548__auto____10585 = p1.call(null,p1__10326_SHARP_);

if(cljs.core.truth_(or__3548__auto____10585))
{return or__3548__auto____10585;
} else
{return p2.call(null,p1__10326_SHARP_);
}
}),args);
}
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
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__10756.call(this);
case  1 :
return sp2__10757.call(this,x);
case  2 :
return sp2__10758.call(this,x,y);
case  3 :
return sp2__10759.call(this,x,y,z);
default:
return sp2__10760.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__10760.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__10729 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__10773 = (function (){
return null;
});
var sp3__10774 = (function (x){
var or__3548__auto____10592 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10592))
{return or__3548__auto____10592;
} else
{var or__3548__auto____10593 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10593))
{return or__3548__auto____10593;
} else
{return p3.call(null,x);
}
}
});
var sp3__10776 = (function (x,y){
var or__3548__auto____10595 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10595))
{return or__3548__auto____10595;
} else
{var or__3548__auto____10596 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10596))
{return or__3548__auto____10596;
} else
{var or__3548__auto____10598 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____10598))
{return or__3548__auto____10598;
} else
{var or__3548__auto____10600 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10600))
{return or__3548__auto____10600;
} else
{var or__3548__auto____10602 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10602))
{return or__3548__auto____10602;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__10777 = (function (x,y,z){
var or__3548__auto____10603 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10603))
{return or__3548__auto____10603;
} else
{var or__3548__auto____10604 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10604))
{return or__3548__auto____10604;
} else
{var or__3548__auto____10606 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____10606))
{return or__3548__auto____10606;
} else
{var or__3548__auto____10607 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10607))
{return or__3548__auto____10607;
} else
{var or__3548__auto____10609 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10609))
{return or__3548__auto____10609;
} else
{var or__3548__auto____10612 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____10612))
{return or__3548__auto____10612;
} else
{var or__3548__auto____10613 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10613))
{return or__3548__auto____10613;
} else
{var or__3548__auto____10615 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____10615))
{return or__3548__auto____10615;
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
var sp3__10778 = (function() { 
var G__10790__delegate = function (x,y,z,args){
var or__3548__auto____10700 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10700))
{return or__3548__auto____10700;
} else
{return cljs.core.some.call(null,(function (p1__10327_SHARP_){
var or__3548__auto____10702 = p1.call(null,p1__10327_SHARP_);

if(cljs.core.truth_(or__3548__auto____10702))
{return or__3548__auto____10702;
} else
{var or__3548__auto____10703 = p2.call(null,p1__10327_SHARP_);

if(cljs.core.truth_(or__3548__auto____10703))
{return or__3548__auto____10703;
} else
{return p3.call(null,p1__10327_SHARP_);
}
}
}),args);
}
};
var G__10790 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10790__delegate.call(this, x, y, z, args);
};
G__10790.cljs$lang$maxFixedArity = 3;
G__10790.cljs$lang$applyTo = (function (arglist__10797){
var x = cljs.core.first(arglist__10797);
var y = cljs.core.first(cljs.core.next(arglist__10797));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10797)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10797)));
return G__10790__delegate.call(this, x, y, z, args);
});
return G__10790;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__10773.call(this);
case  1 :
return sp3__10774.call(this,x);
case  2 :
return sp3__10776.call(this,x,y);
case  3 :
return sp3__10777.call(this,x,y,z);
default:
return sp3__10778.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__10778.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__10730 = (function() { 
var G__10802__delegate = function (p1,p2,p3,ps){
var ps__10709 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__10803 = (function (){
return null;
});
var spn__10804 = (function (x){
return cljs.core.some.call(null,(function (p1__10328_SHARP_){
return p1__10328_SHARP_.call(null,x);
}),ps__10709);
});
var spn__10805 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10329_SHARP_){
var or__3548__auto____10712 = p1__10329_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____10712))
{return or__3548__auto____10712;
} else
{return p1__10329_SHARP_.call(null,y);
}
}),ps__10709);
});
var spn__10807 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10330_SHARP_){
var or__3548__auto____10714 = p1__10330_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____10714))
{return or__3548__auto____10714;
} else
{var or__3548__auto____10717 = p1__10330_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____10717))
{return or__3548__auto____10717;
} else
{return p1__10330_SHARP_.call(null,z);
}
}
}),ps__10709);
});
var spn__10808 = (function() { 
var G__10946__delegate = function (x,y,z,args){
var or__3548__auto____10720 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10720))
{return or__3548__auto____10720;
} else
{return cljs.core.some.call(null,(function (p1__10331_SHARP_){
return cljs.core.some.call(null,p1__10331_SHARP_,args);
}),ps__10709);
}
};
var G__10946 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10946__delegate.call(this, x, y, z, args);
};
G__10946.cljs$lang$maxFixedArity = 3;
G__10946.cljs$lang$applyTo = (function (arglist__10947){
var x = cljs.core.first(arglist__10947);
var y = cljs.core.first(cljs.core.next(arglist__10947));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10947)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10947)));
return G__10946__delegate.call(this, x, y, z, args);
});
return G__10946;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__10803.call(this);
case  1 :
return spn__10804.call(this,x);
case  2 :
return spn__10805.call(this,x,y);
case  3 :
return spn__10807.call(this,x,y,z);
default:
return spn__10808.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__10808.cljs$lang$applyTo;
return spn;
})()
};
var G__10802 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10802__delegate.call(this, p1, p2, p3, ps);
};
G__10802.cljs$lang$maxFixedArity = 3;
G__10802.cljs$lang$applyTo = (function (arglist__10955){
var p1 = cljs.core.first(arglist__10955);
var p2 = cljs.core.first(cljs.core.next(arglist__10955));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10955)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10955)));
return G__10802__delegate.call(this, p1, p2, p3, ps);
});
return G__10802;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__10727.call(this,p1);
case  2 :
return some_fn__10728.call(this,p1,p2);
case  3 :
return some_fn__10729.call(this,p1,p2,p3);
default:
return some_fn__10730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__10730.cljs$lang$applyTo;
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
var map__11041 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10965 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10965))
{var s__10966 = temp__3698__auto____10965;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__10966)),map.call(null,f,cljs.core.rest.call(null,s__10966)));
} else
{return null;
}
})));
});
var map__11042 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10973 = cljs.core.seq.call(null,c1);
var s2__10974 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____10976 = s1__10973;

if(cljs.core.truth_(and__3546__auto____10976))
{return s2__10974;
} else
{return and__3546__auto____10976;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10973),cljs.core.first.call(null,s2__10974)),map.call(null,f,cljs.core.rest.call(null,s1__10973),cljs.core.rest.call(null,s2__10974)));
} else
{return null;
}
})));
});
var map__11043 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11031 = cljs.core.seq.call(null,c1);
var s2__11032 = cljs.core.seq.call(null,c2);
var s3__11033 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11034 = s1__11031;

if(cljs.core.truth_(and__3546__auto____11034))
{var and__3546__auto____11035 = s2__11032;

if(cljs.core.truth_(and__3546__auto____11035))
{return s3__11033;
} else
{return and__3546__auto____11035;
}
} else
{return and__3546__auto____11034;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11031),cljs.core.first.call(null,s2__11032),cljs.core.first.call(null,s3__11033)),map.call(null,f,cljs.core.rest.call(null,s1__11031),cljs.core.rest.call(null,s2__11032),cljs.core.rest.call(null,s3__11033)));
} else
{return null;
}
})));
});
var map__11044 = (function() { 
var G__11050__delegate = function (f,c1,c2,c3,colls){
var step__11038 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11036 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11036)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11036),step.call(null,map.call(null,cljs.core.rest,ss__11036)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__10560_SHARP_){
return cljs.core.apply.call(null,f,p1__10560_SHARP_);
}),step__11038.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11050 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11050__delegate.call(this, f, c1, c2, c3, colls);
};
G__11050.cljs$lang$maxFixedArity = 4;
G__11050.cljs$lang$applyTo = (function (arglist__11052){
var f = cljs.core.first(arglist__11052);
var c1 = cljs.core.first(cljs.core.next(arglist__11052));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11052)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11052))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11052))));
return G__11050__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11050;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11041.call(this,f,c1);
case  3 :
return map__11042.call(this,f,c1,c2);
case  4 :
return map__11043.call(this,f,c1,c2,c3);
default:
return map__11044.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11044.cljs$lang$applyTo;
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
{var temp__3698__auto____11057 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11057))
{var s__11058 = temp__3698__auto____11057;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11058),take.call(null,(n - 1),cljs.core.rest.call(null,s__11058)));
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
var step__11080 = (function (n,coll){
while(true){
var s__11077 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11078 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11078))
{return s__11077;
} else
{return and__3546__auto____11078;
}
})()))
{{
var G__11081 = (n - 1);
var G__11082 = cljs.core.rest.call(null,s__11077);
n = G__11081;
coll = G__11082;
continue;
}
} else
{return s__11077;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11080.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11085 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11086 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11085.call(this,n);
case  2 :
return drop_last__11086.call(this,n,s);
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
var s__11089 = cljs.core.seq.call(null,coll);
var lead__11090 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11090))
{{
var G__11093 = cljs.core.next.call(null,s__11089);
var G__11094 = cljs.core.next.call(null,lead__11090);
s__11089 = G__11093;
lead__11090 = G__11094;
continue;
}
} else
{return s__11089;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11099 = (function (pred,coll){
while(true){
var s__11097 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11098 = s__11097;

if(cljs.core.truth_(and__3546__auto____11098))
{return pred.call(null,cljs.core.first.call(null,s__11097));
} else
{return and__3546__auto____11098;
}
})()))
{{
var G__11118 = pred;
var G__11119 = cljs.core.rest.call(null,s__11097);
pred = G__11118;
coll = G__11119;
continue;
}
} else
{return s__11097;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11099.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11120 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11120))
{var s__11121 = temp__3698__auto____11120;

return cljs.core.concat.call(null,s__11121,cycle.call(null,s__11121));
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
var repeat__11124 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11125 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11124.call(this,n);
case  2 :
return repeat__11125.call(this,n,x);
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
var repeatedly__11127 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11128 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11127.call(this,n);
case  2 :
return repeatedly__11128.call(this,n,f);
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
var interleave__11180 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11175 = cljs.core.seq.call(null,c1);
var s2__11176 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11177 = s1__11175;

if(cljs.core.truth_(and__3546__auto____11177))
{return s2__11176;
} else
{return and__3546__auto____11177;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11175),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11176),interleave.call(null,cljs.core.rest.call(null,s1__11175),cljs.core.rest.call(null,s2__11176))));
} else
{return null;
}
})));
});
var interleave__11181 = (function() { 
var G__11183__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11179 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11179)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11179),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11179)));
} else
{return null;
}
})));
};
var G__11183 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11183__delegate.call(this, c1, c2, colls);
};
G__11183.cljs$lang$maxFixedArity = 2;
G__11183.cljs$lang$applyTo = (function (arglist__11199){
var c1 = cljs.core.first(arglist__11199);
var c2 = cljs.core.first(cljs.core.next(arglist__11199));
var colls = cljs.core.rest(cljs.core.next(arglist__11199));
return G__11183__delegate.call(this, c1, c2, colls);
});
return G__11183;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11180.call(this,c1,c2);
default:
return interleave__11181.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11181.cljs$lang$applyTo;
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
var cat__11207 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11204 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11204))
{var coll__11205 = temp__3695__auto____11204;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11205),cat.call(null,cljs.core.rest.call(null,coll__11205),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11207.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11225 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11226 = (function() { 
var G__11228__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11228 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11228__delegate.call(this, f, coll, colls);
};
G__11228.cljs$lang$maxFixedArity = 2;
G__11228.cljs$lang$applyTo = (function (arglist__11229){
var f = cljs.core.first(arglist__11229);
var coll = cljs.core.first(cljs.core.next(arglist__11229));
var colls = cljs.core.rest(cljs.core.next(arglist__11229));
return G__11228__delegate.call(this, f, coll, colls);
});
return G__11228;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11225.call(this,f,coll);
default:
return mapcat__11226.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11226.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11230 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11230))
{var s__11231 = temp__3698__auto____11230;

var f__11232 = cljs.core.first.call(null,s__11231);
var r__11233 = cljs.core.rest.call(null,s__11231);

if(cljs.core.truth_(pred.call(null,f__11232)))
{return cljs.core.cons.call(null,f__11232,filter.call(null,pred,r__11233));
} else
{return filter.call(null,pred,r__11233);
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
var walk__11340 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11340.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11339_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11339_SHARP_));
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
var partition__11367 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11368 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11353 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11353))
{var s__11358 = temp__3698__auto____11353;

var p__11359 = cljs.core.take.call(null,n,s__11358);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11359))))
{return cljs.core.cons.call(null,p__11359,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11358)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11369 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11360 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11360))
{var s__11361 = temp__3698__auto____11360;

var p__11366 = cljs.core.take.call(null,n,s__11361);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11366))))
{return cljs.core.cons.call(null,p__11366,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11361)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11366,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11367.call(this,n,step);
case  3 :
return partition__11368.call(this,n,step,pad);
case  4 :
return partition__11369.call(this,n,step,pad,coll);
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
var get_in__11379 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__11380 = (function (m,ks,not_found){
var sentinel__11372 = cljs.core.lookup_sentinel;
var m__11376 = m;
var ks__11377 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__11377))
{var m__11378 = cljs.core.get.call(null,m__11376,cljs.core.first.call(null,ks__11377),sentinel__11372);

if(cljs.core.truth_((sentinel__11372 === m__11378)))
{return not_found;
} else
{{
var G__11382 = sentinel__11372;
var G__11383 = m__11378;
var G__11384 = cljs.core.next.call(null,ks__11377);
sentinel__11372 = G__11382;
m__11376 = G__11383;
ks__11377 = G__11384;
continue;
}
}
} else
{return m__11376;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__11379.call(this,m,ks);
case  3 :
return get_in__11380.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__11385,v){
var vec__11386__11387 = p__11385;
var k__11388 = cljs.core.nth.call(null,vec__11386__11387,0,null);
var ks__11389 = cljs.core.nthnext.call(null,vec__11386__11387,1);

if(cljs.core.truth_(ks__11389))
{return cljs.core.assoc.call(null,m,k__11388,assoc_in.call(null,cljs.core.get.call(null,m,k__11388),ks__11389,v));
} else
{return cljs.core.assoc.call(null,m,k__11388,v);
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
var update_in__delegate = function (m,p__11395,f,args){
var vec__11396__11397 = p__11395;
var k__11398 = cljs.core.nth.call(null,vec__11396__11397,0,null);
var ks__11399 = cljs.core.nthnext.call(null,vec__11396__11397,1);

if(cljs.core.truth_(ks__11399))
{return cljs.core.assoc.call(null,m,k__11398,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__11398),ks__11399,f,args));
} else
{return cljs.core.assoc.call(null,m,k__11398,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__11398),args));
}
};
var update_in = function (m,p__11395,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__11395, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__11402){
var m = cljs.core.first(arglist__11402);
var p__11395 = cljs.core.first(cljs.core.next(arglist__11402));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11402)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11402)));
return update_in__delegate.call(this, m, p__11395, f, args);
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
var this__11409 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11625 = null;
var G__11625__11626 = (function (coll,k){
var this__11411 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__11625__11627 = (function (coll,k,not_found){
var this__11412 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__11625 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11625__11626.call(this,coll,k);
case  3 :
return G__11625__11627.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11625;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11415 = this;
var new_array__11416 = cljs.core.aclone.call(null,this__11415.array);

(new_array__11416[k] = v);
return (new cljs.core.Vector(this__11415.meta,new_array__11416));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__11632 = null;
var G__11632__11633 = (function (coll,k){
var this__11418 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11632__11634 = (function (coll,k,not_found){
var this__11420 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11632 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11632__11633.call(this,coll,k);
case  3 :
return G__11632__11634.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11632;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11423 = this;
var new_array__11426 = cljs.core.aclone.call(null,this__11423.array);

new_array__11426.push(o);
return (new cljs.core.Vector(this__11423.meta,new_array__11426));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__11676 = null;
var G__11676__11677 = (function (v,f){
var this__11429 = this;
return cljs.core.ci_reduce.call(null,this__11429.array,f);
});
var G__11676__11678 = (function (v,f,start){
var this__11430 = this;
return cljs.core.ci_reduce.call(null,this__11430.array,f,start);
});
G__11676 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__11676__11677.call(this,v,f);
case  3 :
return G__11676__11678.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11676;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11433 = this;
if(cljs.core.truth_((this__11433.array.length > 0)))
{var vector_seq__11440 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__11433.array.length)))
{return cljs.core.cons.call(null,(this__11433.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__11440.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11442 = this;
return this__11442.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11447 = this;
var count__11449 = this__11447.array.length;

if(cljs.core.truth_((count__11449 > 0)))
{return (this__11447.array[(count__11449 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11450 = this;
if(cljs.core.truth_((this__11450.array.length > 0)))
{var new_array__11451 = cljs.core.aclone.call(null,this__11450.array);

new_array__11451.pop();
return (new cljs.core.Vector(this__11450.meta,new_array__11451));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__11456 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11457 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11458 = this;
return (new cljs.core.Vector(meta,this__11458.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11463 = this;
return this__11463.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__11699 = null;
var G__11699__11700 = (function (coll,n){
var this__11464 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11600 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11600))
{return (n < this__11464.array.length);
} else
{return and__3546__auto____11600;
}
})()))
{return (this__11464.array[n]);
} else
{return null;
}
});
var G__11699__11701 = (function (coll,n,not_found){
var this__11618 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11619 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11619))
{return (n < this__11618.array.length);
} else
{return and__3546__auto____11619;
}
})()))
{return (this__11618.array[n]);
} else
{return not_found;
}
});
G__11699 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__11699__11700.call(this,coll,n);
case  3 :
return G__11699__11701.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11699;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11624 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__11624.meta);
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
vector.cljs$lang$applyTo = (function (arglist__11724){
var args = cljs.core.seq( arglist__11724 );;
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
var this__11742 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11801 = null;
var G__11801__11802 = (function (coll,k){
var this__11747 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__11801__11803 = (function (coll,k,not_found){
var this__11749 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__11801 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11801__11802.call(this,coll,k);
case  3 :
return G__11801__11803.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11801;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__11750 = this;
var v_pos__11752 = (this__11750.start + key);

return (new cljs.core.Subvec(this__11750.meta,cljs.core._assoc.call(null,this__11750.v,v_pos__11752,val),this__11750.start,((this__11750.end > (v_pos__11752 + 1)) ? this__11750.end : (v_pos__11752 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__11809 = null;
var G__11809__11810 = (function (coll,k){
var this__11755 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11809__11811 = (function (coll,k,not_found){
var this__11757 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11809 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11809__11810.call(this,coll,k);
case  3 :
return G__11809__11811.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11809;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11759 = this;
return (new cljs.core.Subvec(this__11759.meta,cljs.core._assoc_n.call(null,this__11759.v,this__11759.end,o),this__11759.start,(this__11759.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__11814 = null;
var G__11814__11815 = (function (coll,f){
var this__11762 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__11814__11816 = (function (coll,f,start){
var this__11764 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__11814 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__11814__11815.call(this,coll,f);
case  3 :
return G__11814__11816.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11814;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11768 = this;
var subvec_seq__11773 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__11768.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__11768.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__11773.call(null,this__11768.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11776 = this;
return (this__11776.end - this__11776.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11778 = this;
return cljs.core._nth.call(null,this__11778.v,(this__11778.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11781 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__11781.start,this__11781.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__11781.meta,this__11781.v,this__11781.start,(this__11781.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__11785 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11790 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11792 = this;
return (new cljs.core.Subvec(meta,this__11792.v,this__11792.start,this__11792.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11793 = this;
return this__11793.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__11823 = null;
var G__11823__11824 = (function (coll,n){
var this__11794 = this;
return cljs.core._nth.call(null,this__11794.v,(this__11794.start + n));
});
var G__11823__11825 = (function (coll,n,not_found){
var this__11795 = this;
return cljs.core._nth.call(null,this__11795.v,(this__11795.start + n),not_found);
});
G__11823 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__11823__11824.call(this,coll,n);
case  3 :
return G__11823__11825.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11823;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11798 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__11798.meta);
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
var subvec__11845 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__11846 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__11845.call(this,v,start);
case  3 :
return subvec__11846.call(this,v,start,end);
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
var this__11860 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__11861 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11862 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11863 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11863.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11864 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__11884 = this;
return cljs.core._first.call(null,this__11884.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__11887 = this;
var temp__3695__auto____11889 = cljs.core.next.call(null,this__11887.front);

if(cljs.core.truth_(temp__3695__auto____11889))
{var f1__11892 = temp__3695__auto____11889;

return (new cljs.core.PersistentQueueSeq(this__11887.meta,f1__11892,this__11887.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__11887.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__11887.meta,this__11887.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11893 = this;
return this__11893.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11894 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__11894.front,this__11894.rear));
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
var this__11909 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11912 = this;
if(cljs.core.truth_(this__11912.front))
{return (new cljs.core.PersistentQueue(this__11912.meta,(this__11912.count + 1),this__11912.front,cljs.core.conj.call(null,(function (){var or__3548__auto____11916 = this__11912.rear;

if(cljs.core.truth_(or__3548__auto____11916))
{return or__3548__auto____11916;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__11912.meta,(this__11912.count + 1),cljs.core.conj.call(null,this__11912.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11921 = this;
var rear__11925 = cljs.core.seq.call(null,this__11921.rear);

if(cljs.core.truth_((function (){var or__3548__auto____11927 = this__11921.front;

if(cljs.core.truth_(or__3548__auto____11927))
{return or__3548__auto____11927;
} else
{return rear__11925;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__11921.front,cljs.core.seq.call(null,rear__11925)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11933 = this;
return this__11933.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11934 = this;
return cljs.core._first.call(null,this__11934.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11937 = this;
if(cljs.core.truth_(this__11937.front))
{var temp__3695__auto____11940 = cljs.core.next.call(null,this__11937.front);

if(cljs.core.truth_(temp__3695__auto____11940))
{var f1__11943 = temp__3695__auto____11940;

return (new cljs.core.PersistentQueue(this__11937.meta,(this__11937.count - 1),f1__11943,this__11937.rear));
} else
{return (new cljs.core.PersistentQueue(this__11937.meta,(this__11937.count - 1),cljs.core.seq.call(null,this__11937.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__11948 = this;
return cljs.core.first.call(null,this__11948.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__11950 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11973 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11978 = this;
return (new cljs.core.PersistentQueue(meta,this__11978.count,this__11978.front,this__11978.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11979 = this;
return this__11979.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11984 = this;
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
var this__12002 = this;
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
var len__12031 = array.length;

var i__12034 = 0;

while(true){
if(cljs.core.truth_((i__12034 < len__12031)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12034]))))
{return i__12034;
} else
{{
var G__12043 = (i__12034 + incr);
i__12034 = G__12043;
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
var obj_map_contains_key_QMARK___12053 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12054 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12048 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12048))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12048;
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
return obj_map_contains_key_QMARK___12053.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12054.call(this,k,strobj,true_val,false_val);
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
var this__12080 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12122 = null;
var G__12122__12123 = (function (coll,k){
var this__12082 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12122__12124 = (function (coll,k,not_found){
var this__12083 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12083.strobj,(this__12083.strobj[k]),not_found);
});
G__12122 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12122__12123.call(this,coll,k);
case  3 :
return G__12122__12124.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12122;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12085 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12086 = goog.object.clone.call(null,this__12085.strobj);
var overwrite_QMARK___12088 = new_strobj__12086.hasOwnProperty(k);

(new_strobj__12086[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12088))
{return (new cljs.core.ObjMap(this__12085.meta,this__12085.keys,new_strobj__12086));
} else
{var new_keys__12092 = cljs.core.aclone.call(null,this__12085.keys);

new_keys__12092.push(k);
return (new cljs.core.ObjMap(this__12085.meta,new_keys__12092,new_strobj__12086));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12085.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12093 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12093.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12137 = null;
var G__12137__12138 = (function (coll,k){
var this__12095 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12137__12139 = (function (coll,k,not_found){
var this__12097 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12137 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12137__12138.call(this,coll,k);
case  3 :
return G__12137__12139.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12137;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12098 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12100 = this;
if(cljs.core.truth_((this__12100.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12064_SHARP_){
return cljs.core.vector.call(null,p1__12064_SHARP_,(this__12100.strobj[p1__12064_SHARP_]));
}),this__12100.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12102 = this;
return this__12102.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12107 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12111 = this;
return (new cljs.core.ObjMap(meta,this__12111.keys,this__12111.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12112 = this;
return this__12112.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12113 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12113.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12115 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12116 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12116))
{return this__12115.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12116;
}
})()))
{var new_keys__12118 = cljs.core.aclone.call(null,this__12115.keys);
var new_strobj__12119 = goog.object.clone.call(null,this__12115.strobj);

new_keys__12118.splice(cljs.core.scan_array.call(null,1,k,new_keys__12118),1);
cljs.core.js_delete.call(null,new_strobj__12119,k);
return (new cljs.core.ObjMap(this__12115.meta,new_keys__12118,new_strobj__12119));
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
var this__12198 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12266 = null;
var G__12266__12267 = (function (coll,k){
var this__12199 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12266__12268 = (function (coll,k,not_found){
var this__12201 = this;
var bucket__12202 = (this__12201.hashobj[cljs.core.hash.call(null,k)]);
var i__12203 = (cljs.core.truth_(bucket__12202)?cljs.core.scan_array.call(null,2,k,bucket__12202):null);

if(cljs.core.truth_(i__12203))
{return (bucket__12202[(i__12203 + 1)]);
} else
{return not_found;
}
});
G__12266 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12266__12267.call(this,coll,k);
case  3 :
return G__12266__12268.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12266;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12205 = this;
var h__12206 = cljs.core.hash.call(null,k);
var bucket__12210 = (this__12205.hashobj[h__12206]);

if(cljs.core.truth_(bucket__12210))
{var new_bucket__12213 = cljs.core.aclone.call(null,bucket__12210);
var new_hashobj__12214 = goog.object.clone.call(null,this__12205.hashobj);

(new_hashobj__12214[h__12206] = new_bucket__12213);
var temp__3695__auto____12216 = cljs.core.scan_array.call(null,2,k,new_bucket__12213);

if(cljs.core.truth_(temp__3695__auto____12216))
{var i__12218 = temp__3695__auto____12216;

(new_bucket__12213[(i__12218 + 1)] = v);
return (new cljs.core.HashMap(this__12205.meta,this__12205.count,new_hashobj__12214));
} else
{new_bucket__12213.push(k,v);
return (new cljs.core.HashMap(this__12205.meta,(this__12205.count + 1),new_hashobj__12214));
}
} else
{var new_hashobj__12221 = goog.object.clone.call(null,this__12205.hashobj);

(new_hashobj__12221[h__12206] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12205.meta,(this__12205.count + 1),new_hashobj__12221));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12223 = this;
var bucket__12226 = (this__12223.hashobj[cljs.core.hash.call(null,k)]);
var i__12228 = (cljs.core.truth_(bucket__12226)?cljs.core.scan_array.call(null,2,k,bucket__12226):null);

if(cljs.core.truth_(i__12228))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12374 = null;
var G__12374__12375 = (function (coll,k){
var this__12230 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12374__12376 = (function (coll,k,not_found){
var this__12232 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12374 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12374__12375.call(this,coll,k);
case  3 :
return G__12374__12376.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12374;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12233 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12236 = this;
if(cljs.core.truth_((this__12236.count > 0)))
{var hashes__12241 = cljs.core.js_keys.call(null,this__12236.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12163_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12236.hashobj[p1__12163_SHARP_])));
}),hashes__12241);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12245 = this;
return this__12245.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12246 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12247 = this;
return (new cljs.core.HashMap(meta,this__12247.count,this__12247.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12248 = this;
return this__12248.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12249 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12249.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12250 = this;
var h__12253 = cljs.core.hash.call(null,k);
var bucket__12254 = (this__12250.hashobj[h__12253]);
var i__12255 = (cljs.core.truth_(bucket__12254)?cljs.core.scan_array.call(null,2,k,bucket__12254):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12255)))
{return coll;
} else
{var new_hashobj__12257 = goog.object.clone.call(null,this__12250.hashobj);

if(cljs.core.truth_((3 > bucket__12254.length)))
{cljs.core.js_delete.call(null,new_hashobj__12257,h__12253);
} else
{var new_bucket__12262 = cljs.core.aclone.call(null,bucket__12254);

new_bucket__12262.splice(i__12255,2);
(new_hashobj__12257[h__12253] = new_bucket__12262);
}
return (new cljs.core.HashMap(this__12250.meta,(this__12250.count - 1),new_hashobj__12257));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12397 = ks.length;

var i__12398 = 0;
var out__12399 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12398 < len__12397)))
{{
var G__12402 = (i__12398 + 1);
var G__12403 = cljs.core.assoc.call(null,out__12399,(ks[i__12398]),(vs[i__12398]));
i__12398 = G__12402;
out__12399 = G__12403;
continue;
}
} else
{return out__12399;
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
var in$__12408 = cljs.core.seq.call(null,keyvals);
var out__12409 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__12408))
{{
var G__12415 = cljs.core.nnext.call(null,in$__12408);
var G__12416 = cljs.core.assoc.call(null,out__12409,cljs.core.first.call(null,in$__12408),cljs.core.second.call(null,in$__12408));
in$__12408 = G__12415;
out__12409 = G__12416;
continue;
}
} else
{return out__12409;
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
hash_map.cljs$lang$applyTo = (function (arglist__12422){
var keyvals = cljs.core.seq( arglist__12422 );;
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
{return cljs.core.reduce.call(null,(function (p1__12424_SHARP_,p2__12425_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____12434 = p1__12424_SHARP_;

if(cljs.core.truth_(or__3548__auto____12434))
{return or__3548__auto____12434;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__12425_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__12500){
var maps = cljs.core.seq( arglist__12500 );;
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
{var merge_entry__12510 = (function (m,e){
var k__12506 = cljs.core.first.call(null,e);
var v__12508 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__12506)))
{return cljs.core.assoc.call(null,m,k__12506,f.call(null,cljs.core.get.call(null,m,k__12506),v__12508));
} else
{return cljs.core.assoc.call(null,m,k__12506,v__12508);
}
});
var merge2__12514 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__12510,(function (){var or__3548__auto____12512 = m1;

if(cljs.core.truth_(or__3548__auto____12512))
{return or__3548__auto____12512;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__12514,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__12523){
var f = cljs.core.first(arglist__12523);
var maps = cljs.core.rest(arglist__12523);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__12535 = cljs.core.ObjMap.fromObject([],{});
var keys__12536 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__12536))
{var key__12537 = cljs.core.first.call(null,keys__12536);
var entry__12538 = cljs.core.get.call(null,map,key__12537,"﷐'user/not-found");

{
var G__12539 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__12538,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__12535,key__12537,entry__12538):ret__12535);
var G__12540 = cljs.core.next.call(null,keys__12536);
ret__12535 = G__12539;
keys__12536 = G__12540;
continue;
}
} else
{return ret__12535;
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
var this__12632 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12703 = null;
var G__12703__12706 = (function (coll,v){
var this__12639 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__12703__12708 = (function (coll,v,not_found){
var this__12667 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__12667.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__12703 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__12703__12706.call(this,coll,v);
case  3 :
return G__12703__12708.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12703;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__12713 = null;
var G__12713__12715 = (function (coll,k){
var this__12671 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12713__12716 = (function (coll,k,not_found){
var this__12672 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12713 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12713__12715.call(this,coll,k);
case  3 :
return G__12713__12716.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12713;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12678 = this;
return (new cljs.core.Set(this__12678.meta,cljs.core.assoc.call(null,this__12678.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12680 = this;
return cljs.core.keys.call(null,this__12680.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__12683 = this;
return (new cljs.core.Set(this__12683.meta,cljs.core.dissoc.call(null,this__12683.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12685 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12687 = this;
var and__3546__auto____12692 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____12692))
{var and__3546__auto____12695 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____12695))
{return cljs.core.every_QMARK_.call(null,(function (p1__12530_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__12530_SHARP_);
}),other);
} else
{return and__3546__auto____12695;
}
} else
{return and__3546__auto____12692;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12696 = this;
return (new cljs.core.Set(meta,this__12696.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12699 = this;
return this__12699.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12701 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__12701.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__12737 = cljs.core.seq.call(null,coll);
var out__12738 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__12737))))
{{
var G__12742 = cljs.core.rest.call(null,in$__12737);
var G__12743 = cljs.core.conj.call(null,out__12738,cljs.core.first.call(null,in$__12737));
in$__12737 = G__12742;
out__12738 = G__12743;
continue;
}
} else
{return out__12738;
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
{var n__12746 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____12749 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____12749))
{var e__12752 = temp__3695__auto____12749;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__12752));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__12746,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__12735_SHARP_){
var temp__3695__auto____12759 = cljs.core.find.call(null,smap,p1__12735_SHARP_);

if(cljs.core.truth_(temp__3695__auto____12759))
{var e__12761 = temp__3695__auto____12759;

return cljs.core.second.call(null,e__12761);
} else
{return p1__12735_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__12905 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__12774,seen){
while(true){
var vec__12792__12900 = p__12774;
var f__12901 = cljs.core.nth.call(null,vec__12792__12900,0,null);
var xs__12902 = vec__12792__12900;

var temp__3698__auto____12903 = cljs.core.seq.call(null,xs__12902);

if(cljs.core.truth_(temp__3698__auto____12903))
{var s__12904 = temp__3698__auto____12903;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__12901)))
{{
var G__12907 = cljs.core.rest.call(null,s__12904);
var G__12908 = seen;
p__12774 = G__12907;
seen = G__12908;
continue;
}
} else
{return cljs.core.cons.call(null,f__12901,step.call(null,cljs.core.rest.call(null,s__12904),cljs.core.conj.call(null,seen,f__12901)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__12905.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__12913 = cljs.core.Vector.fromArray([]);
var s__12914 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__12914)))
{{
var G__12915 = cljs.core.conj.call(null,ret__12913,cljs.core.first.call(null,s__12914));
var G__12916 = cljs.core.next.call(null,s__12914);
ret__12913 = G__12915;
s__12914 = G__12916;
continue;
}
} else
{return cljs.core.seq.call(null,ret__12913);
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
{if(cljs.core.truth_((function (){var or__3548__auto____12929 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____12929))
{return or__3548__auto____12929;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__12930 = x.lastIndexOf("/");

if(cljs.core.truth_((i__12930 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__12930 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____12945 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____12945))
{return or__3548__auto____12945;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__12949 = x.lastIndexOf("/");

if(cljs.core.truth_((i__12949 > -1)))
{return cljs.core.subs.call(null,x,2,i__12949);
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
var map__12961 = cljs.core.ObjMap.fromObject([],{});
var ks__12962 = cljs.core.seq.call(null,keys);
var vs__12963 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____12964 = ks__12962;

if(cljs.core.truth_(and__3546__auto____12964))
{return vs__12963;
} else
{return and__3546__auto____12964;
}
})()))
{{
var G__12968 = cljs.core.assoc.call(null,map__12961,cljs.core.first.call(null,ks__12962),cljs.core.first.call(null,vs__12963));
var G__12969 = cljs.core.next.call(null,ks__12962);
var G__12970 = cljs.core.next.call(null,vs__12963);
map__12961 = G__12968;
ks__12962 = G__12969;
vs__12963 = G__12970;
continue;
}
} else
{return map__12961;
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
var max_key__12985 = (function (k,x){
return x;
});
var max_key__12986 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__12987 = (function() { 
var G__12990__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12959_SHARP_,p2__12960_SHARP_){
return max_key.call(null,k,p1__12959_SHARP_,p2__12960_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__12990 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12990__delegate.call(this, k, x, y, more);
};
G__12990.cljs$lang$maxFixedArity = 3;
G__12990.cljs$lang$applyTo = (function (arglist__12992){
var k = cljs.core.first(arglist__12992);
var x = cljs.core.first(cljs.core.next(arglist__12992));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12992)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12992)));
return G__12990__delegate.call(this, k, x, y, more);
});
return G__12990;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__12985.call(this,k,x);
case  3 :
return max_key__12986.call(this,k,x,y);
default:
return max_key__12987.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__12987.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__12996 = (function (k,x){
return x;
});
var min_key__12997 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__12998 = (function() { 
var G__13001__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12980_SHARP_,p2__12981_SHARP_){
return min_key.call(null,k,p1__12980_SHARP_,p2__12981_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13001 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13001__delegate.call(this, k, x, y, more);
};
G__13001.cljs$lang$maxFixedArity = 3;
G__13001.cljs$lang$applyTo = (function (arglist__13035){
var k = cljs.core.first(arglist__13035);
var x = cljs.core.first(cljs.core.next(arglist__13035));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13035)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13035)));
return G__13001__delegate.call(this, k, x, y, more);
});
return G__13001;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__12996.call(this,k,x);
case  3 :
return min_key__12997.call(this,k,x,y);
default:
return min_key__12998.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__12998.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13057 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13059 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13049 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13049))
{var s__13051 = temp__3698__auto____13049;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13051),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13051)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13057.call(this,n,step);
case  3 :
return partition_all__13059.call(this,n,step,coll);
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
var temp__3698__auto____13075 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13075))
{var s__13076 = temp__3698__auto____13075;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13076))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13076),take_while.call(null,pred,cljs.core.rest.call(null,s__13076)));
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
var this__13095 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13098 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13167 = null;
var G__13167__13168 = (function (rng,f){
var this__13099 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13167__13169 = (function (rng,f,s){
var this__13100 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13167 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13167__13168.call(this,rng,f);
case  3 :
return G__13167__13169.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13167;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13110 = this;
var comp__13113 = (cljs.core.truth_((this__13110.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13113.call(null,this__13110.start,this__13110.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13114 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13114.end - this__13114.start) / this__13114.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13128 = this;
return this__13128.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13130 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13130.meta,(this__13130.start + this__13130.step),this__13130.end,this__13130.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13132 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13142 = this;
return (new cljs.core.Range(meta,this__13142.start,this__13142.end,this__13142.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13143 = this;
return this__13143.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13192 = null;
var G__13192__13193 = (function (rng,n){
var this__13151 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13151.start + (n * this__13151.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13153 = (this__13151.start > this__13151.end);

if(cljs.core.truth_(and__3546__auto____13153))
{return cljs.core._EQ_.call(null,this__13151.step,0);
} else
{return and__3546__auto____13153;
}
})()))
{return this__13151.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13192__13194 = (function (rng,n,not_found){
var this__13154 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13154.start + (n * this__13154.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13158 = (this__13154.start > this__13154.end);

if(cljs.core.truth_(and__3546__auto____13158))
{return cljs.core._EQ_.call(null,this__13154.step,0);
} else
{return and__3546__auto____13158;
}
})()))
{return this__13154.start;
} else
{return not_found;
}
}
});
G__13192 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13192__13193.call(this,rng,n);
case  3 :
return G__13192__13194.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13192;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13159 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13159.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13208 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13209 = (function (end){
return range.call(null,0,end,1);
});
var range__13210 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13211 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13208.call(this);
case  1 :
return range__13209.call(this,start);
case  2 :
return range__13210.call(this,start,end);
case  3 :
return range__13211.call(this,start,end,step);
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
var temp__3698__auto____13220 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13220))
{var s__13221 = temp__3698__auto____13220;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13221),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13221)));
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
var temp__3698__auto____13232 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13232))
{var s__13233 = temp__3698__auto____13232;

var fst__13235 = cljs.core.first.call(null,s__13233);
var fv__13236 = f.call(null,fst__13235);
var run__13237 = cljs.core.cons.call(null,fst__13235,cljs.core.take_while.call(null,(function (p1__13230_SHARP_){
return cljs.core._EQ_.call(null,fv__13236,f.call(null,p1__13230_SHARP_));
}),cljs.core.next.call(null,s__13233)));

return cljs.core.cons.call(null,run__13237,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13237),s__13233))));
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
var reductions__13407 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13397 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13397))
{var s__13398 = temp__3695__auto____13397;

return reductions.call(null,f,cljs.core.first.call(null,s__13398),cljs.core.rest.call(null,s__13398));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13408 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13401 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13401))
{var s__13403 = temp__3698__auto____13401;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13403)),cljs.core.rest.call(null,s__13403));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13407.call(this,f,init);
case  3 :
return reductions__13408.call(this,f,init,coll);
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
var juxt__13430 = (function (f){
return (function() {
var G__13435 = null;
var G__13435__13436 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13435__13437 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13435__13438 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13435__13439 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13435__13440 = (function() { 
var G__13445__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13445 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13445__delegate.call(this, x, y, z, args);
};
G__13445.cljs$lang$maxFixedArity = 3;
G__13445.cljs$lang$applyTo = (function (arglist__13448){
var x = cljs.core.first(arglist__13448);
var y = cljs.core.first(cljs.core.next(arglist__13448));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13448)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13448)));
return G__13445__delegate.call(this, x, y, z, args);
});
return G__13445;
})()
;
G__13435 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13435__13436.call(this);
case  1 :
return G__13435__13437.call(this,x);
case  2 :
return G__13435__13438.call(this,x,y);
case  3 :
return G__13435__13439.call(this,x,y,z);
default:
return G__13435__13440.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13435.cljs$lang$maxFixedArity = 3;
G__13435.cljs$lang$applyTo = G__13435__13440.cljs$lang$applyTo;
return G__13435;
})()
});
var juxt__13431 = (function (f,g){
return (function() {
var G__13451 = null;
var G__13451__13455 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13451__13456 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13451__13457 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13451__13458 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13451__13459 = (function() { 
var G__13468__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13468 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13468__delegate.call(this, x, y, z, args);
};
G__13468.cljs$lang$maxFixedArity = 3;
G__13468.cljs$lang$applyTo = (function (arglist__13472){
var x = cljs.core.first(arglist__13472);
var y = cljs.core.first(cljs.core.next(arglist__13472));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13472)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13472)));
return G__13468__delegate.call(this, x, y, z, args);
});
return G__13468;
})()
;
G__13451 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13451__13455.call(this);
case  1 :
return G__13451__13456.call(this,x);
case  2 :
return G__13451__13457.call(this,x,y);
case  3 :
return G__13451__13458.call(this,x,y,z);
default:
return G__13451__13459.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13451.cljs$lang$maxFixedArity = 3;
G__13451.cljs$lang$applyTo = G__13451__13459.cljs$lang$applyTo;
return G__13451;
})()
});
var juxt__13432 = (function (f,g,h){
return (function() {
var G__13481 = null;
var G__13481__13482 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13481__13483 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13481__13484 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13481__13485 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13481__13486 = (function() { 
var G__13490__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13490 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13490__delegate.call(this, x, y, z, args);
};
G__13490.cljs$lang$maxFixedArity = 3;
G__13490.cljs$lang$applyTo = (function (arglist__13497){
var x = cljs.core.first(arglist__13497);
var y = cljs.core.first(cljs.core.next(arglist__13497));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13497)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13497)));
return G__13490__delegate.call(this, x, y, z, args);
});
return G__13490;
})()
;
G__13481 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13481__13482.call(this);
case  1 :
return G__13481__13483.call(this,x);
case  2 :
return G__13481__13484.call(this,x,y);
case  3 :
return G__13481__13485.call(this,x,y,z);
default:
return G__13481__13486.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13481.cljs$lang$maxFixedArity = 3;
G__13481.cljs$lang$applyTo = G__13481__13486.cljs$lang$applyTo;
return G__13481;
})()
});
var juxt__13433 = (function() { 
var G__13501__delegate = function (f,g,h,fs){
var fs__13421 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13502 = null;
var G__13502__13503 = (function (){
return cljs.core.reduce.call(null,(function (p1__13386_SHARP_,p2__13387_SHARP_){
return cljs.core.conj.call(null,p1__13386_SHARP_,p2__13387_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13421);
});
var G__13502__13504 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13388_SHARP_,p2__13389_SHARP_){
return cljs.core.conj.call(null,p1__13388_SHARP_,p2__13389_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13421);
});
var G__13502__13505 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13390_SHARP_,p2__13391_SHARP_){
return cljs.core.conj.call(null,p1__13390_SHARP_,p2__13391_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13421);
});
var G__13502__13506 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13392_SHARP_,p2__13393_SHARP_){
return cljs.core.conj.call(null,p1__13392_SHARP_,p2__13393_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13421);
});
var G__13502__13507 = (function() { 
var G__13512__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13394_SHARP_,p2__13395_SHARP_){
return cljs.core.conj.call(null,p1__13394_SHARP_,cljs.core.apply.call(null,p2__13395_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13421);
};
var G__13512 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13512__delegate.call(this, x, y, z, args);
};
G__13512.cljs$lang$maxFixedArity = 3;
G__13512.cljs$lang$applyTo = (function (arglist__13513){
var x = cljs.core.first(arglist__13513);
var y = cljs.core.first(cljs.core.next(arglist__13513));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13513)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13513)));
return G__13512__delegate.call(this, x, y, z, args);
});
return G__13512;
})()
;
G__13502 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13502__13503.call(this);
case  1 :
return G__13502__13504.call(this,x);
case  2 :
return G__13502__13505.call(this,x,y);
case  3 :
return G__13502__13506.call(this,x,y,z);
default:
return G__13502__13507.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13502.cljs$lang$maxFixedArity = 3;
G__13502.cljs$lang$applyTo = G__13502__13507.cljs$lang$applyTo;
return G__13502;
})()
};
var G__13501 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13501__delegate.call(this, f, g, h, fs);
};
G__13501.cljs$lang$maxFixedArity = 3;
G__13501.cljs$lang$applyTo = (function (arglist__13517){
var f = cljs.core.first(arglist__13517);
var g = cljs.core.first(cljs.core.next(arglist__13517));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13517)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13517)));
return G__13501__delegate.call(this, f, g, h, fs);
});
return G__13501;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13430.call(this,f);
case  2 :
return juxt__13431.call(this,f,g);
case  3 :
return juxt__13432.call(this,f,g,h);
default:
return juxt__13433.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13433.cljs$lang$applyTo;
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
var dorun__13524 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13527 = cljs.core.next.call(null,coll);
coll = G__13527;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13525 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13519 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13519))
{return (n > 0);
} else
{return and__3546__auto____13519;
}
})()))
{{
var G__13529 = (n - 1);
var G__13530 = cljs.core.next.call(null,coll);
n = G__13529;
coll = G__13530;
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
return dorun__13524.call(this,n);
case  2 :
return dorun__13525.call(this,n,coll);
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
var doall__13537 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13538 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13537.call(this,n);
case  2 :
return doall__13538.call(this,n,coll);
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
var matches__13540 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13540),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13540),1)))
{return cljs.core.first.call(null,matches__13540);
} else
{return cljs.core.vec.call(null,matches__13540);
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
var matches__13541 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__13541)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13541),1)))
{return cljs.core.first.call(null,matches__13541);
} else
{return cljs.core.vec.call(null,matches__13541);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13551 = cljs.core.re_find.call(null,re,s);
var match_idx__13552 = s.search(re);
var match_str__13553 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__13551))?cljs.core.first.call(null,match_data__13551):match_data__13551);
var post_match__13557 = cljs.core.subs.call(null,s,(match_idx__13552 + cljs.core.count.call(null,match_str__13553)));

if(cljs.core.truth_(match_data__13551))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13551,re_seq.call(null,re,post_match__13557));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__13569_SHARP_){
return print_one.call(null,p1__13569_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____13590 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____13590))
{var and__3546__auto____13594 = (function (){var x__445__auto____13591 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13592 = x__445__auto____13591;

if(cljs.core.truth_(and__3546__auto____13592))
{var and__3546__auto____13593 = x__445__auto____13591.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____13593))
{return cljs.core.not.call(null,x__445__auto____13591.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____13593;
}
} else
{return and__3546__auto____13592;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____13591);
}
})();

if(cljs.core.truth_(and__3546__auto____13594))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____13594;
}
} else
{return and__3546__auto____13590;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____13595 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13596 = x__445__auto____13595;

if(cljs.core.truth_(and__3546__auto____13596))
{var and__3546__auto____13597 = x__445__auto____13595.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____13597))
{return cljs.core.not.call(null,x__445__auto____13595.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____13597;
}
} else
{return and__3546__auto____13596;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____13595);
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
var first_obj__13605 = cljs.core.first.call(null,objs);
var sb__13608 = (new goog.string.StringBuffer());

var G__13610__13614 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13610__13614))
{var obj__13618 = cljs.core.first.call(null,G__13610__13614);
var G__13610__13619 = G__13610__13614;

while(true){
if(cljs.core.truth_((obj__13618 === first_obj__13605)))
{} else
{sb__13608.append(" ");
}
var G__13620__13621 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13618,opts));

if(cljs.core.truth_(G__13620__13621))
{var string__13622 = cljs.core.first.call(null,G__13620__13621);
var G__13620__13623 = G__13620__13621;

while(true){
sb__13608.append(string__13622);
var temp__3698__auto____13624 = cljs.core.next.call(null,G__13620__13623);

if(cljs.core.truth_(temp__3698__auto____13624))
{var G__13620__13625 = temp__3698__auto____13624;

{
var G__13629 = cljs.core.first.call(null,G__13620__13625);
var G__13630 = G__13620__13625;
string__13622 = G__13629;
G__13620__13623 = G__13630;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13626 = cljs.core.next.call(null,G__13610__13619);

if(cljs.core.truth_(temp__3698__auto____13626))
{var G__13610__13627 = temp__3698__auto____13626;

{
var G__13634 = cljs.core.first.call(null,G__13610__13627);
var G__13635 = G__13610__13627;
obj__13618 = G__13634;
G__13610__13619 = G__13635;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__13608);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__13640 = cljs.core.first.call(null,objs);

var G__13641__13643 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13641__13643))
{var obj__13644 = cljs.core.first.call(null,G__13641__13643);
var G__13641__13645 = G__13641__13643;

while(true){
if(cljs.core.truth_((obj__13644 === first_obj__13640)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__13647__13649 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13644,opts));

if(cljs.core.truth_(G__13647__13649))
{var string__13650 = cljs.core.first.call(null,G__13647__13649);
var G__13647__13651 = G__13647__13649;

while(true){
cljs.core.string_print.call(null,string__13650);
var temp__3698__auto____13653 = cljs.core.next.call(null,G__13647__13651);

if(cljs.core.truth_(temp__3698__auto____13653))
{var G__13647__13655 = temp__3698__auto____13653;

{
var G__13660 = cljs.core.first.call(null,G__13647__13655);
var G__13661 = G__13647__13655;
string__13650 = G__13660;
G__13647__13651 = G__13661;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13657 = cljs.core.next.call(null,G__13641__13645);

if(cljs.core.truth_(temp__3698__auto____13657))
{var G__13641__13658 = temp__3698__auto____13657;

{
var G__13662 = cljs.core.first.call(null,G__13641__13658);
var G__13663 = G__13641__13658;
obj__13644 = G__13662;
G__13641__13645 = G__13663;
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
pr_str.cljs$lang$applyTo = (function (arglist__13672){
var objs = cljs.core.seq( arglist__13672 );;
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
pr.cljs$lang$applyTo = (function (arglist__13687){
var objs = cljs.core.seq( arglist__13687 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__13693){
var objs = cljs.core.seq( arglist__13693 );;
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
println.cljs$lang$applyTo = (function (arglist__13697){
var objs = cljs.core.seq( arglist__13697 );;
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
prn.cljs$lang$applyTo = (function (arglist__13703){
var objs = cljs.core.seq( arglist__13703 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__13709 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__13709,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____13737 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____13737))
{var nspc__13739 = temp__3698__auto____13737;

return cljs.core.str.call(null,nspc__13739,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____13740 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____13740))
{var nspc__13741 = temp__3698__auto____13740;

return cljs.core.str.call(null,nspc__13741,"/");
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
var pr_pair__13752 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__13752,"{",", ","}",opts,coll);
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
var this__13771 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__13773 = this;
var G__13774__13776 = cljs.core.seq.call(null,this__13773.watches);

if(cljs.core.truth_(G__13774__13776))
{var G__13778__13780 = cljs.core.first.call(null,G__13774__13776);
var vec__13779__13781 = G__13778__13780;
var key__13782 = cljs.core.nth.call(null,vec__13779__13781,0,null);
var f__13783 = cljs.core.nth.call(null,vec__13779__13781,1,null);
var G__13774__13784 = G__13774__13776;

var G__13778__13785 = G__13778__13780;
var G__13774__13786 = G__13774__13784;

while(true){
var vec__13787__13788 = G__13778__13785;
var key__13789 = cljs.core.nth.call(null,vec__13787__13788,0,null);
var f__13791 = cljs.core.nth.call(null,vec__13787__13788,1,null);
var G__13774__13792 = G__13774__13786;

f__13791.call(null,key__13789,this$,oldval,newval);
var temp__3698__auto____13793 = cljs.core.next.call(null,G__13774__13792);

if(cljs.core.truth_(temp__3698__auto____13793))
{var G__13774__13794 = temp__3698__auto____13793;

{
var G__13809 = cljs.core.first.call(null,G__13774__13794);
var G__13810 = G__13774__13794;
G__13778__13785 = G__13809;
G__13774__13786 = G__13810;
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
var this__13795 = this;
return this$.watches = cljs.core.assoc.call(null,this__13795.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__13796 = this;
return this$.watches = cljs.core.dissoc.call(null,this__13796.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__13797 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__13797.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__13798 = this;
return this__13798.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__13799 = this;
return this__13799.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__13802 = this;
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
var atom__13840 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__13841 = (function() { 
var G__13843__delegate = function (x,p__13814){
var map__13815__13816 = p__13814;
var map__13815__13817 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13815__13816))?cljs.core.apply.call(null,cljs.core.hash_map,map__13815__13816):map__13815__13816);
var validator__13818 = cljs.core.get.call(null,map__13815__13817,"﷐'validator");
var meta__13819 = cljs.core.get.call(null,map__13815__13817,"﷐'meta");

return (new cljs.core.Atom(x,meta__13819,validator__13818,null));
};
var G__13843 = function (x,var_args){
var p__13814 = null;
if (goog.isDef(var_args)) {
  p__13814 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13843__delegate.call(this, x, p__13814);
};
G__13843.cljs$lang$maxFixedArity = 1;
G__13843.cljs$lang$applyTo = (function (arglist__13847){
var x = cljs.core.first(arglist__13847);
var p__13814 = cljs.core.rest(arglist__13847);
return G__13843__delegate.call(this, x, p__13814);
});
return G__13843;
})()
;
atom = function(x,var_args){
var p__13814 = var_args;
switch(arguments.length){
case  1 :
return atom__13840.call(this,x);
default:
return atom__13841.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__13841.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____13849 = a.validator;

if(cljs.core.truth_(temp__3698__auto____13849))
{var validate__13850 = temp__3698__auto____13849;

if(cljs.core.truth_(validate__13850.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__13856 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__13856,new_value);
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
var swap_BANG___13888 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___13889 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___13891 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___13892 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___13893 = (function() { 
var G__13895__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__13895 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__13895__delegate.call(this, a, f, x, y, z, more);
};
G__13895.cljs$lang$maxFixedArity = 5;
G__13895.cljs$lang$applyTo = (function (arglist__13896){
var a = cljs.core.first(arglist__13896);
var f = cljs.core.first(cljs.core.next(arglist__13896));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13896)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13896))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13896)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13896)))));
return G__13895__delegate.call(this, a, f, x, y, z, more);
});
return G__13895;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___13888.call(this,a,f);
case  3 :
return swap_BANG___13889.call(this,a,f,x);
case  4 :
return swap_BANG___13891.call(this,a,f,x,y);
case  5 :
return swap_BANG___13892.call(this,a,f,x,y,z);
default:
return swap_BANG___13893.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___13893.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__13920){
var iref = cljs.core.first(arglist__13920);
var f = cljs.core.first(cljs.core.next(arglist__13920));
var args = cljs.core.rest(cljs.core.next(arglist__13920));
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
var gensym__14009 = (function (){
return gensym.call(null,"G__");
});
var gensym__14010 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14009.call(this);
case  1 :
return gensym__14010.call(this,prefix_string);
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
var this__14088 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14088.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14090 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14090.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14090.state,this__14090.f);
}
return cljs.core.deref.call(null,this__14090.state);
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
delay.cljs$lang$applyTo = (function (arglist__14111){
var body = cljs.core.seq( arglist__14111 );;
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
var map__14126__14127 = options;
var map__14126__14128 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14126__14127))?cljs.core.apply.call(null,cljs.core.hash_map,map__14126__14127):map__14126__14127);
var keywordize_keys__14129 = cljs.core.get.call(null,map__14126__14128,"﷐'keywordize-keys");
var keyfn__14130 = (cljs.core.truth_(keywordize_keys__14129)?cljs.core.keyword:cljs.core.str);
var f__14141 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14139 = (function iter__14131(s__14132){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14132__14133 = s__14132;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14132__14133)))
{var k__14136 = cljs.core.first.call(null,s__14132__14133);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14130.call(null,k__14136),thisfn.call(null,(x[k__14136]))]),iter__14131.call(null,cljs.core.rest.call(null,s__14132__14133)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14139.call(null,cljs.core.js_keys.call(null,x));
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

return f__14141.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14164){
var x = cljs.core.first(arglist__14164);
var options = cljs.core.rest(arglist__14164);
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
var mem__14169 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14189__delegate = function (args){
var temp__3695__auto____14172 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14169),args);

if(cljs.core.truth_(temp__3695__auto____14172))
{var v__14175 = temp__3695__auto____14172;

return v__14175;
} else
{var ret__14177 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14169,cljs.core.assoc,args,ret__14177);
return ret__14177;
}
};
var G__14189 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14189__delegate.call(this, args);
};
G__14189.cljs$lang$maxFixedArity = 0;
G__14189.cljs$lang$applyTo = (function (arglist__14192){
var args = cljs.core.seq( arglist__14192 );;
return G__14189__delegate.call(this, args);
});
return G__14189;
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
var trampoline__14197 = (function (f){
while(true){
var ret__14193 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14193)))
{{
var G__14200 = ret__14193;
f = G__14200;
continue;
}
} else
{return ret__14193;
}
break;
}
});
var trampoline__14198 = (function() { 
var G__14202__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14202 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14202__delegate.call(this, f, args);
};
G__14202.cljs$lang$maxFixedArity = 1;
G__14202.cljs$lang$applyTo = (function (arglist__14205){
var f = cljs.core.first(arglist__14205);
var args = cljs.core.rest(arglist__14205);
return G__14202__delegate.call(this, f, args);
});
return G__14202;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14197.call(this,f);
default:
return trampoline__14198.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14198.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14214 = (function (){
return rand.call(null,1);
});
var rand__14215 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14214.call(this);
case  1 :
return rand__14215.call(this,n);
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
var k__14228 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14228,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14228,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14261 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14262 = (function (h,child,parent){
var or__3548__auto____14239 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14239))
{return or__3548__auto____14239;
} else
{var or__3548__auto____14240 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14240))
{return or__3548__auto____14240;
} else
{var and__3546__auto____14242 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14242))
{var and__3546__auto____14243 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14243))
{var and__3546__auto____14246 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14246))
{var ret__14252 = true;
var i__14253 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14254 = cljs.core.not.call(null,ret__14252);

if(cljs.core.truth_(or__3548__auto____14254))
{return or__3548__auto____14254;
} else
{return cljs.core._EQ_.call(null,i__14253,cljs.core.count.call(null,parent));
}
})()))
{return ret__14252;
} else
{{
var G__14271 = isa_QMARK_.call(null,h,child.call(null,i__14253),parent.call(null,i__14253));
var G__14272 = (i__14253 + 1);
ret__14252 = G__14271;
i__14253 = G__14272;
continue;
}
}
break;
}
} else
{return and__3546__auto____14246;
}
} else
{return and__3546__auto____14243;
}
} else
{return and__3546__auto____14242;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14261.call(this,h,child);
case  3 :
return isa_QMARK___14262.call(this,h,child,parent);
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
var parents__14289 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14290 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14289.call(this,h);
case  2 :
return parents__14290.call(this,h,tag);
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
var ancestors__14306 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14307 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14306.call(this,h);
case  2 :
return ancestors__14307.call(this,h,tag);
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
var descendants__14319 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14337 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14319.call(this,h);
case  2 :
return descendants__14337.call(this,h,tag);
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
var derive__14365 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14366 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14345 = "﷐'parents".call(null,h);
var td__14346 = "﷐'descendants".call(null,h);
var ta__14348 = "﷐'ancestors".call(null,h);
var tf__14352 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14363 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14345.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14348.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14348.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14345,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14352.call(null,"﷐'ancestors".call(null,h),tag,td__14346,parent,ta__14348),"﷐'descendants":tf__14352.call(null,"﷐'descendants".call(null,h),parent,ta__14348,tag,td__14346)});
})());

if(cljs.core.truth_(or__3548__auto____14363))
{return or__3548__auto____14363;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14365.call(this,h,tag);
case  3 :
return derive__14366.call(this,h,tag,parent);
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
var underive__14390 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__14391 = (function (h,tag,parent){
var parentMap__14385 = "﷐'parents".call(null,h);
var childsParents__14386 = (cljs.core.truth_(parentMap__14385.call(null,tag))?cljs.core.disj.call(null,parentMap__14385.call(null,tag),parent):cljs.core.set([]));
var newParents__14388 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14386))?cljs.core.assoc.call(null,parentMap__14385,tag,childsParents__14386):cljs.core.dissoc.call(null,parentMap__14385,tag));
var deriv_seq__14389 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14339_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14339_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14339_SHARP_),cljs.core.second.call(null,p1__14339_SHARP_)));
}),cljs.core.seq.call(null,newParents__14388)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__14385.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14340_SHARP_,p2__14341_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14340_SHARP_,p2__14341_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14389));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__14390.call(this,h,tag);
case  3 :
return underive__14391.call(this,h,tag,parent);
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
var xprefs__14402 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____14421 = (cljs.core.truth_((function (){var and__3546__auto____14404 = xprefs__14402;

if(cljs.core.truth_(and__3546__auto____14404))
{return xprefs__14402.call(null,y);
} else
{return and__3546__auto____14404;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____14421))
{return or__3548__auto____14421;
} else
{var or__3548__auto____14431 = (function (){var ps__14425 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14425) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__14425),prefer_table)))
{} else
{}
{
var G__14444 = cljs.core.rest.call(null,ps__14425);
ps__14425 = G__14444;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14431))
{return or__3548__auto____14431;
} else
{var or__3548__auto____14435 = (function (){var ps__14434 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14434) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__14434),y,prefer_table)))
{} else
{}
{
var G__14445 = cljs.core.rest.call(null,ps__14434);
ps__14434 = G__14445;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14435))
{return or__3548__auto____14435;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____14448 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____14448))
{return or__3548__auto____14448;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__14476 = cljs.core.reduce.call(null,(function (be,p__14468){
var vec__14469__14470 = p__14468;
var k__14471 = cljs.core.nth.call(null,vec__14469__14470,0,null);
var ___14472 = cljs.core.nth.call(null,vec__14469__14470,1,null);
var e__14473 = vec__14469__14470;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__14471)))
{var be2__14475 = (cljs.core.truth_((function (){var or__3548__auto____14474 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____14474))
{return or__3548__auto____14474;
} else
{return cljs.core.dominates.call(null,k__14471,cljs.core.first.call(null,be),prefer_table);
}
})())?e__14473:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__14475),k__14471,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__14471," and ",cljs.core.first.call(null,be2__14475),", and neither is preferred")));
}
return be2__14475;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__14476))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__14476));
return cljs.core.second.call(null,best_entry__14476);
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
if(cljs.core.truth_((function (){var and__3546__auto____14480 = mf;

if(cljs.core.truth_(and__3546__auto____14480))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____14480;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____14483 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14483))
{return or__3548__auto____14483;
} else
{var or__3548__auto____14484 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____14484))
{return or__3548__auto____14484;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____14485 = mf;

if(cljs.core.truth_(and__3546__auto____14485))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____14485;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____14489 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14489))
{return or__3548__auto____14489;
} else
{var or__3548__auto____14490 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____14490))
{return or__3548__auto____14490;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____14491 = mf;

if(cljs.core.truth_(and__3546__auto____14491))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____14491;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____14493 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14493))
{return or__3548__auto____14493;
} else
{var or__3548__auto____14495 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____14495))
{return or__3548__auto____14495;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____14515 = mf;

if(cljs.core.truth_(and__3546__auto____14515))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____14515;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____14516 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14516))
{return or__3548__auto____14516;
} else
{var or__3548__auto____14517 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____14517))
{return or__3548__auto____14517;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____14518 = mf;

if(cljs.core.truth_(and__3546__auto____14518))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____14518;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____14519 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14519))
{return or__3548__auto____14519;
} else
{var or__3548__auto____14520 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____14520))
{return or__3548__auto____14520;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____14521 = mf;

if(cljs.core.truth_(and__3546__auto____14521))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____14521;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____14522 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14522))
{return or__3548__auto____14522;
} else
{var or__3548__auto____14523 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____14523))
{return or__3548__auto____14523;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____14524 = mf;

if(cljs.core.truth_(and__3546__auto____14524))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____14524;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____14527 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14527))
{return or__3548__auto____14527;
} else
{var or__3548__auto____14528 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____14528))
{return or__3548__auto____14528;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____14529 = mf;

if(cljs.core.truth_(and__3546__auto____14529))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____14529;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____14530 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14530))
{return or__3548__auto____14530;
} else
{var or__3548__auto____14531 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____14531))
{return or__3548__auto____14531;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__14545 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__14546 = cljs.core._get_method.call(null,mf,dispatch_val__14545);

if(cljs.core.truth_(target_fn__14546))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__14545)));
}
return cljs.core.apply.call(null,target_fn__14546,args);
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
var this__14551 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__14555 = this;
cljs.core.swap_BANG_.call(null,this__14555.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__14555.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__14555.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__14555.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__14556 = this;
cljs.core.swap_BANG_.call(null,this__14556.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__14556.method_cache,this__14556.method_table,this__14556.cached_hierarchy,this__14556.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__14557 = this;
cljs.core.swap_BANG_.call(null,this__14557.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__14557.method_cache,this__14557.method_table,this__14557.cached_hierarchy,this__14557.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__14558 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__14558.cached_hierarchy),cljs.core.deref.call(null,this__14558.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__14558.method_cache,this__14558.method_table,this__14558.cached_hierarchy,this__14558.hierarchy);
}
var temp__3695__auto____14559 = cljs.core.deref.call(null,this__14558.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____14559))
{var target_fn__14560 = temp__3695__auto____14559;

return target_fn__14560;
} else
{var temp__3695__auto____14563 = cljs.core.find_and_cache_best_method.call(null,this__14558.name,dispatch_val,this__14558.hierarchy,this__14558.method_table,this__14558.prefer_table,this__14558.method_cache,this__14558.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____14563))
{var target_fn__14565 = temp__3695__auto____14563;

return target_fn__14565;
} else
{return cljs.core.deref.call(null,this__14558.method_table).call(null,this__14558.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__14567 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__14567.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__14567.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__14567.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__14567.method_cache,this__14567.method_table,this__14567.cached_hierarchy,this__14567.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__14570 = this;
return cljs.core.deref.call(null,this__14570.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__14571 = this;
return cljs.core.deref.call(null,this__14571.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__14574 = this;
return cljs.core.do_dispatch.call(null,mf,this__14574.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__14588__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__14588 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14588__delegate.call(this, _, args);
};
G__14588.cljs$lang$maxFixedArity = 1;
G__14588.cljs$lang$applyTo = (function (arglist__14589){
var _ = cljs.core.first(arglist__14589);
var args = cljs.core.rest(arglist__14589);
return G__14588__delegate.call(this, _, args);
});
return G__14588;
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
