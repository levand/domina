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
var or__3548__auto____7349 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7349))
{return or__3548__auto____7349;
} else
{var or__3548__auto____7350 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7350))
{return or__3548__auto____7350;
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
var _invoke__7758 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7353 = this$;

if(cljs.core.truth_(and__3546__auto____7353))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7353;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7354 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7354))
{return or__3548__auto____7354;
} else
{var or__3548__auto____7355 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7355))
{return or__3548__auto____7355;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7759 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7356 = this$;

if(cljs.core.truth_(and__3546__auto____7356))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7356;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7357 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7357))
{return or__3548__auto____7357;
} else
{var or__3548__auto____7358 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7358))
{return or__3548__auto____7358;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7760 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7359 = this$;

if(cljs.core.truth_(and__3546__auto____7359))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7359;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7361 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7361))
{return or__3548__auto____7361;
} else
{var or__3548__auto____7362 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7362))
{return or__3548__auto____7362;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7761 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7365 = this$;

if(cljs.core.truth_(and__3546__auto____7365))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7365;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7373 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7373))
{return or__3548__auto____7373;
} else
{var or__3548__auto____7375 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7375))
{return or__3548__auto____7375;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7762 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7378 = this$;

if(cljs.core.truth_(and__3546__auto____7378))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7378;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7382 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7382))
{return or__3548__auto____7382;
} else
{var or__3548__auto____7385 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7385))
{return or__3548__auto____7385;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7763 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7388 = this$;

if(cljs.core.truth_(and__3546__auto____7388))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7388;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7391 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7391))
{return or__3548__auto____7391;
} else
{var or__3548__auto____7394 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7394))
{return or__3548__auto____7394;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7764 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7397 = this$;

if(cljs.core.truth_(and__3546__auto____7397))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7397;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7765 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7486 = this$;

if(cljs.core.truth_(and__3546__auto____7486))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7486;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7503 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7503))
{return or__3548__auto____7503;
} else
{var or__3548__auto____7504 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7504))
{return or__3548__auto____7504;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7766 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7510 = this$;

if(cljs.core.truth_(and__3546__auto____7510))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7510;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7600 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7600))
{return or__3548__auto____7600;
} else
{var or__3548__auto____7616 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7616))
{return or__3548__auto____7616;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7767 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7635 = this$;

if(cljs.core.truth_(and__3546__auto____7635))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7635;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7638 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7638))
{return or__3548__auto____7638;
} else
{var or__3548__auto____7639 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7639))
{return or__3548__auto____7639;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7768 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7643 = this$;

if(cljs.core.truth_(and__3546__auto____7643))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7643;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7646 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7646))
{return or__3548__auto____7646;
} else
{var or__3548__auto____7648 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7648))
{return or__3548__auto____7648;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7769 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7650 = this$;

if(cljs.core.truth_(and__3546__auto____7650))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7650;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7652 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7652))
{return or__3548__auto____7652;
} else
{var or__3548__auto____7654 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7654))
{return or__3548__auto____7654;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7770 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7656 = this$;

if(cljs.core.truth_(and__3546__auto____7656))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7656;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7687 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7687))
{return or__3548__auto____7687;
} else
{var or__3548__auto____7688 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7688))
{return or__3548__auto____7688;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7771 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7691 = this$;

if(cljs.core.truth_(and__3546__auto____7691))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7691;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7693 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7693))
{return or__3548__auto____7693;
} else
{var or__3548__auto____7702 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7702))
{return or__3548__auto____7702;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7772 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7703 = this$;

if(cljs.core.truth_(and__3546__auto____7703))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7703;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7704 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7704))
{return or__3548__auto____7704;
} else
{var or__3548__auto____7706 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7706))
{return or__3548__auto____7706;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7773 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7708 = this$;

if(cljs.core.truth_(and__3546__auto____7708))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7708;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7711 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7711))
{return or__3548__auto____7711;
} else
{var or__3548__auto____7712 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7712))
{return or__3548__auto____7712;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7774 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7714 = this$;

if(cljs.core.truth_(and__3546__auto____7714))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7714;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7716 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7716))
{return or__3548__auto____7716;
} else
{var or__3548__auto____7718 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7718))
{return or__3548__auto____7718;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7775 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7720 = this$;

if(cljs.core.truth_(and__3546__auto____7720))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7720;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7722 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7722))
{return or__3548__auto____7722;
} else
{var or__3548__auto____7723 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7723))
{return or__3548__auto____7723;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7776 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7724 = this$;

if(cljs.core.truth_(and__3546__auto____7724))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7724;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7726 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7726))
{return or__3548__auto____7726;
} else
{var or__3548__auto____7727 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7727))
{return or__3548__auto____7727;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7777 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7730 = this$;

if(cljs.core.truth_(and__3546__auto____7730))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7730;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7731 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7731))
{return or__3548__auto____7731;
} else
{var or__3548__auto____7732 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7732))
{return or__3548__auto____7732;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7778 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7747 = this$;

if(cljs.core.truth_(and__3546__auto____7747))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7747;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7756 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7756))
{return or__3548__auto____7756;
} else
{var or__3548__auto____7757 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7757))
{return or__3548__auto____7757;
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
return _invoke__7758.call(this,this$);
case  2 :
return _invoke__7759.call(this,this$,a);
case  3 :
return _invoke__7760.call(this,this$,a,b);
case  4 :
return _invoke__7761.call(this,this$,a,b,c);
case  5 :
return _invoke__7762.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7763.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7764.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7765.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7766.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7767.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7768.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7769.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7770.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7771.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7772.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7773.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7774.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7775.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7776.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7777.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7778.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7846 = coll;

if(cljs.core.truth_(and__3546__auto____7846))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7846;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7847 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7847))
{return or__3548__auto____7847;
} else
{var or__3548__auto____7848 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7848))
{return or__3548__auto____7848;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7852 = coll;

if(cljs.core.truth_(and__3546__auto____7852))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7852;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7854 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7854))
{return or__3548__auto____7854;
} else
{var or__3548__auto____7856 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7856))
{return or__3548__auto____7856;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7861 = coll;

if(cljs.core.truth_(and__3546__auto____7861))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7861;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7864 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7864))
{return or__3548__auto____7864;
} else
{var or__3548__auto____7866 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7866))
{return or__3548__auto____7866;
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
var _nth__7894 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7874 = coll;

if(cljs.core.truth_(and__3546__auto____7874))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7874;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7875 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7875))
{return or__3548__auto____7875;
} else
{var or__3548__auto____7887 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7887))
{return or__3548__auto____7887;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7895 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7888 = coll;

if(cljs.core.truth_(and__3546__auto____7888))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7888;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7890 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7890))
{return or__3548__auto____7890;
} else
{var or__3548__auto____7891 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7891))
{return or__3548__auto____7891;
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
return _nth__7894.call(this,coll,n);
case  3 :
return _nth__7895.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7913 = coll;

if(cljs.core.truth_(and__3546__auto____7913))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7913;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7914 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7914))
{return or__3548__auto____7914;
} else
{var or__3548__auto____7915 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7916 = coll;

if(cljs.core.truth_(and__3546__auto____7916))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7916;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7918 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7918))
{return or__3548__auto____7918;
} else
{var or__3548__auto____7919 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7919))
{return or__3548__auto____7919;
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
if(cljs.core.truth_((function (){var and__3546__auto____7926 = o;

if(cljs.core.truth_(and__3546__auto____7926))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7926;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7929 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7929))
{return or__3548__auto____7929;
} else
{var or__3548__auto____7931 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7931))
{return or__3548__auto____7931;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7961 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7935 = o;

if(cljs.core.truth_(and__3546__auto____7935))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7935;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7937 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7937))
{return or__3548__auto____7937;
} else
{var or__3548__auto____7939 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7939))
{return or__3548__auto____7939;
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
if(cljs.core.truth_((function (){var and__3546__auto____7971 = coll;

if(cljs.core.truth_(and__3546__auto____7971))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7971;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7973 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7973))
{return or__3548__auto____7973;
} else
{var or__3548__auto____7976 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7976))
{return or__3548__auto____7976;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7979 = coll;

if(cljs.core.truth_(and__3546__auto____7979))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7979;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7980 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7980))
{return or__3548__auto____7980;
} else
{var or__3548__auto____7981 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7981))
{return or__3548__auto____7981;
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
{var or__3548__auto____7993 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7993))
{return or__3548__auto____7993;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____8001 = coll;

if(cljs.core.truth_(and__3546__auto____8001))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____8001;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____8003 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8003))
{return or__3548__auto____8003;
} else
{var or__3548__auto____8005 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8015 = coll;

if(cljs.core.truth_(and__3546__auto____8015))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____8015;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____8018 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8018))
{return or__3548__auto____8018;
} else
{var or__3548__auto____8019 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8020 = coll;

if(cljs.core.truth_(and__3546__auto____8020))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____8020;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8021 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8021))
{return or__3548__auto____8021;
} else
{var or__3548__auto____8023 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8023))
{return or__3548__auto____8023;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8037 = coll;

if(cljs.core.truth_(and__3546__auto____8037))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8037;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8038 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8038))
{return or__3548__auto____8038;
} else
{var or__3548__auto____8040 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8040))
{return or__3548__auto____8040;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8046 = o;

if(cljs.core.truth_(and__3546__auto____8046))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8046;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8047 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8047))
{return or__3548__auto____8047;
} else
{var or__3548__auto____8048 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8048))
{return or__3548__auto____8048;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8056 = o;

if(cljs.core.truth_(and__3546__auto____8056))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8056;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8059 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8059))
{return or__3548__auto____8059;
} else
{var or__3548__auto____8060 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8060))
{return or__3548__auto____8060;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8065 = o;

if(cljs.core.truth_(and__3546__auto____8065))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8065;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8068 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8068))
{return or__3548__auto____8068;
} else
{var or__3548__auto____8071 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8071))
{return or__3548__auto____8071;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8076 = o;

if(cljs.core.truth_(and__3546__auto____8076))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8076;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8078 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8078))
{return or__3548__auto____8078;
} else
{var or__3548__auto____8080 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8080))
{return or__3548__auto____8080;
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
var _reduce__8100 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8085 = coll;

if(cljs.core.truth_(and__3546__auto____8085))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8085;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8087 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
} else
{var or__3548__auto____8089 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8089))
{return or__3548__auto____8089;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8101 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8093 = coll;

if(cljs.core.truth_(and__3546__auto____8093))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8093;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8094 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8094))
{return or__3548__auto____8094;
} else
{var or__3548__auto____8096 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8096))
{return or__3548__auto____8096;
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
return _reduce__8100.call(this,coll,f);
case  3 :
return _reduce__8101.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8110 = o;

if(cljs.core.truth_(and__3546__auto____8110))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8110;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8113 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8113))
{return or__3548__auto____8113;
} else
{var or__3548__auto____8114 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8114))
{return or__3548__auto____8114;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8125 = o;

if(cljs.core.truth_(and__3546__auto____8125))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8125;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8130 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8130))
{return or__3548__auto____8130;
} else
{var or__3548__auto____8131 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8131))
{return or__3548__auto____8131;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8137 = o;

if(cljs.core.truth_(and__3546__auto____8137))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8137;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8140 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8140))
{return or__3548__auto____8140;
} else
{var or__3548__auto____8141 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8141))
{return or__3548__auto____8141;
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
if(cljs.core.truth_((function (){var and__3546__auto____8150 = o;

if(cljs.core.truth_(and__3546__auto____8150))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8150;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8155 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8155))
{return or__3548__auto____8155;
} else
{var or__3548__auto____8157 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8157))
{return or__3548__auto____8157;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8165 = d;

if(cljs.core.truth_(and__3546__auto____8165))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8165;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8168 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8168))
{return or__3548__auto____8168;
} else
{var or__3548__auto____8169 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8169))
{return or__3548__auto____8169;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8170 = this$;

if(cljs.core.truth_(and__3546__auto____8170))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8170;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8174 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8174))
{return or__3548__auto____8174;
} else
{var or__3548__auto____8175 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8175))
{return or__3548__auto____8175;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8176 = this$;

if(cljs.core.truth_(and__3546__auto____8176))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8176;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8179 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8179))
{return or__3548__auto____8179;
} else
{var or__3548__auto____8181 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8181))
{return or__3548__auto____8181;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8200 = this$;

if(cljs.core.truth_(and__3546__auto____8200))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8200;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8203 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8203))
{return or__3548__auto____8203;
} else
{var or__3548__auto____8205 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8205))
{return or__3548__auto____8205;
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
var G__8230 = null;
var G__8230__8231 = (function (o,k){
return null;
});
var G__8230__8232 = (function (o,k,not_found){
return not_found;
});
G__8230 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8230__8231.call(this,o,k);
case  3 :
return G__8230__8232.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8230;
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
var G__8234 = null;
var G__8234__8235 = (function (_,f){
return f.call(null);
});
var G__8234__8236 = (function (_,f,start){
return start;
});
G__8234 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8234__8235.call(this,_,f);
case  3 :
return G__8234__8236.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8234;
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
var G__8239 = null;
var G__8239__8240 = (function (_,n){
return null;
});
var G__8239__8241 = (function (_,n,not_found){
return not_found;
});
G__8239 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8239__8240.call(this,_,n);
case  3 :
return G__8239__8241.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8239;
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
var ci_reduce__8271 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8261 = cljs.core._nth.call(null,cicoll,0);
var n__8262 = 1;

while(true){
if(cljs.core.truth_((n__8262 < cljs.core._count.call(null,cicoll))))
{{
var G__8277 = f.call(null,val__8261,cljs.core._nth.call(null,cicoll,n__8262));
var G__8278 = (n__8262 + 1);
val__8261 = G__8277;
n__8262 = G__8278;
continue;
}
} else
{return val__8261;
}
break;
}
}
});
var ci_reduce__8272 = (function (cicoll,f,val){
var val__8263 = val;
var n__8264 = 0;

while(true){
if(cljs.core.truth_((n__8264 < cljs.core._count.call(null,cicoll))))
{{
var G__8279 = f.call(null,val__8263,cljs.core._nth.call(null,cicoll,n__8264));
var G__8280 = (n__8264 + 1);
val__8263 = G__8279;
n__8264 = G__8280;
continue;
}
} else
{return val__8263;
}
break;
}
});
var ci_reduce__8273 = (function (cicoll,f,val,idx){
var val__8265 = val;
var n__8266 = idx;

while(true){
if(cljs.core.truth_((n__8266 < cljs.core._count.call(null,cicoll))))
{{
var G__8282 = f.call(null,val__8265,cljs.core._nth.call(null,cicoll,n__8266));
var G__8283 = (n__8266 + 1);
val__8265 = G__8282;
n__8266 = G__8283;
continue;
}
} else
{return val__8265;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8271.call(this,cicoll,f);
case  3 :
return ci_reduce__8272.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8273.call(this,cicoll,f,val,idx);
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
var this__8321 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8338 = null;
var G__8338__8341 = (function (_,f){
var this__8322 = this;
return cljs.core.ci_reduce.call(null,this__8322.a,f,(this__8322.a[this__8322.i]),(this__8322.i + 1));
});
var G__8338__8342 = (function (_,f,start){
var this__8323 = this;
return cljs.core.ci_reduce.call(null,this__8323.a,f,start,this__8323.i);
});
G__8338 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8338__8341.call(this,_,f);
case  3 :
return G__8338__8342.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8338;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8324 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8325 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8344 = null;
var G__8344__8345 = (function (coll,n){
var this__8326 = this;
var i__8327 = (n + this__8326.i);

if(cljs.core.truth_((i__8327 < this__8326.a.length)))
{return (this__8326.a[i__8327]);
} else
{return null;
}
});
var G__8344__8346 = (function (coll,n,not_found){
var this__8328 = this;
var i__8329 = (n + this__8328.i);

if(cljs.core.truth_((i__8329 < this__8328.a.length)))
{return (this__8328.a[i__8329]);
} else
{return not_found;
}
});
G__8344 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8344__8345.call(this,coll,n);
case  3 :
return G__8344__8346.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8344;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8330 = this;
return (this__8330.a.length - this__8330.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8331 = this;
return (this__8331.a[this__8331.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8332 = this;
if(cljs.core.truth_(((this__8332.i + 1) < this__8332.a.length)))
{return (new cljs.core.IndexedSeq(this__8332.a,(this__8332.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8335 = this;
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
var G__8356 = null;
var G__8356__8357 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8356__8358 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8356 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8356__8357.call(this,array,f);
case  3 :
return G__8356__8358.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8356;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8364 = null;
var G__8364__8365 = (function (array,k){
return (array[k]);
});
var G__8364__8366 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8364 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8364__8365.call(this,array,k);
case  3 :
return G__8364__8366.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8364;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8368 = null;
var G__8368__8369 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8368__8370 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8368 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8368__8369.call(this,array,n);
case  3 :
return G__8368__8370.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8368;
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
var temp__3698__auto____8374 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8374))
{var s__8375 = temp__3698__auto____8374;

return cljs.core._first.call(null,s__8375);
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
var G__8423 = cljs.core.next.call(null,s);
s = G__8423;
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
var s__8428 = cljs.core.seq.call(null,x);
var n__8429 = 0;

while(true){
if(cljs.core.truth_(s__8428))
{{
var G__8434 = cljs.core.next.call(null,s__8428);
var G__8435 = (n__8429 + 1);
s__8428 = G__8434;
n__8429 = G__8435;
continue;
}
} else
{return n__8429;
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
var conj__8452 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8453 = (function() { 
var G__8456__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8457 = conj.call(null,coll,x);
var G__8458 = cljs.core.first.call(null,xs);
var G__8459 = cljs.core.next.call(null,xs);
coll = G__8457;
x = G__8458;
xs = G__8459;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8456 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8456__delegate.call(this, coll, x, xs);
};
G__8456.cljs$lang$maxFixedArity = 2;
G__8456.cljs$lang$applyTo = (function (arglist__8460){
var coll = cljs.core.first(arglist__8460);
var x = cljs.core.first(cljs.core.next(arglist__8460));
var xs = cljs.core.rest(cljs.core.next(arglist__8460));
return G__8456__delegate.call(this, coll, x, xs);
});
return G__8456;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8452.call(this,coll,x);
default:
return conj__8453.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8453.cljs$lang$applyTo;
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
var nth__8514 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8515 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8514.call(this,coll,n);
case  3 :
return nth__8515.call(this,coll,n,not_found);
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
var get__8518 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8519 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8518.call(this,o,k);
case  3 :
return get__8519.call(this,o,k,not_found);
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
var assoc__8558 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8559 = (function() { 
var G__8561__delegate = function (coll,k,v,kvs){
while(true){
var ret__8523 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8564 = ret__8523;
var G__8566 = cljs.core.first.call(null,kvs);
var G__8568 = cljs.core.second.call(null,kvs);
var G__8569 = cljs.core.nnext.call(null,kvs);
coll = G__8564;
k = G__8566;
v = G__8568;
kvs = G__8569;
continue;
}
} else
{return ret__8523;
}
break;
}
};
var G__8561 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8561__delegate.call(this, coll, k, v, kvs);
};
G__8561.cljs$lang$maxFixedArity = 3;
G__8561.cljs$lang$applyTo = (function (arglist__8570){
var coll = cljs.core.first(arglist__8570);
var k = cljs.core.first(cljs.core.next(arglist__8570));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8570)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8570)));
return G__8561__delegate.call(this, coll, k, v, kvs);
});
return G__8561;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8558.call(this,coll,k,v);
default:
return assoc__8559.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8559.cljs$lang$applyTo;
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
var dissoc__8575 = (function (coll){
return coll;
});
var dissoc__8576 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8577 = (function() { 
var G__8579__delegate = function (coll,k,ks){
while(true){
var ret__8573 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8580 = ret__8573;
var G__8581 = cljs.core.first.call(null,ks);
var G__8582 = cljs.core.next.call(null,ks);
coll = G__8580;
k = G__8581;
ks = G__8582;
continue;
}
} else
{return ret__8573;
}
break;
}
};
var G__8579 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8579__delegate.call(this, coll, k, ks);
};
G__8579.cljs$lang$maxFixedArity = 2;
G__8579.cljs$lang$applyTo = (function (arglist__8583){
var coll = cljs.core.first(arglist__8583);
var k = cljs.core.first(cljs.core.next(arglist__8583));
var ks = cljs.core.rest(cljs.core.next(arglist__8583));
return G__8579__delegate.call(this, coll, k, ks);
});
return G__8579;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8575.call(this,coll);
case  2 :
return dissoc__8576.call(this,coll,k);
default:
return dissoc__8577.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8577.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8595 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8596 = x__445__auto____8595;

if(cljs.core.truth_(and__3546__auto____8596))
{var and__3546__auto____8598 = x__445__auto____8595.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8598))
{return cljs.core.not.call(null,x__445__auto____8595.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8598;
}
} else
{return and__3546__auto____8596;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8595);
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
var disj__8647 = (function (coll){
return coll;
});
var disj__8648 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8649 = (function() { 
var G__8652__delegate = function (coll,k,ks){
while(true){
var ret__8609 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8654 = ret__8609;
var G__8655 = cljs.core.first.call(null,ks);
var G__8656 = cljs.core.next.call(null,ks);
coll = G__8654;
k = G__8655;
ks = G__8656;
continue;
}
} else
{return ret__8609;
}
break;
}
};
var G__8652 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8652__delegate.call(this, coll, k, ks);
};
G__8652.cljs$lang$maxFixedArity = 2;
G__8652.cljs$lang$applyTo = (function (arglist__8658){
var coll = cljs.core.first(arglist__8658);
var k = cljs.core.first(cljs.core.next(arglist__8658));
var ks = cljs.core.rest(cljs.core.next(arglist__8658));
return G__8652__delegate.call(this, coll, k, ks);
});
return G__8652;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8647.call(this,coll);
case  2 :
return disj__8648.call(this,coll,k);
default:
return disj__8649.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8649.cljs$lang$applyTo;
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
{var x__445__auto____8669 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8670 = x__445__auto____8669;

if(cljs.core.truth_(and__3546__auto____8670))
{var and__3546__auto____8671 = x__445__auto____8669.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8671))
{return cljs.core.not.call(null,x__445__auto____8669.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8671;
}
} else
{return and__3546__auto____8670;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8669);
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
{var x__445__auto____8679 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8683 = x__445__auto____8679;

if(cljs.core.truth_(and__3546__auto____8683))
{var and__3546__auto____8684 = x__445__auto____8679.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8684))
{return cljs.core.not.call(null,x__445__auto____8679.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8684;
}
} else
{return and__3546__auto____8683;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8679);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8685 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8686 = x__445__auto____8685;

if(cljs.core.truth_(and__3546__auto____8686))
{var and__3546__auto____8690 = x__445__auto____8685.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8690))
{return cljs.core.not.call(null,x__445__auto____8685.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8690;
}
} else
{return and__3546__auto____8686;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8685);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8701 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8703 = x__445__auto____8701;

if(cljs.core.truth_(and__3546__auto____8703))
{var and__3546__auto____8704 = x__445__auto____8701.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8704))
{return cljs.core.not.call(null,x__445__auto____8701.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8704;
}
} else
{return and__3546__auto____8703;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8701);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8710 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8711 = x__445__auto____8710;

if(cljs.core.truth_(and__3546__auto____8711))
{var and__3546__auto____8719 = x__445__auto____8710.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8719))
{return cljs.core.not.call(null,x__445__auto____8710.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8719;
}
} else
{return and__3546__auto____8711;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8710);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8725 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8726 = x__445__auto____8725;

if(cljs.core.truth_(and__3546__auto____8726))
{var and__3546__auto____8727 = x__445__auto____8725.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8727))
{return cljs.core.not.call(null,x__445__auto____8725.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8727;
}
} else
{return and__3546__auto____8726;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8725);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8736 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8737 = x__445__auto____8736;

if(cljs.core.truth_(and__3546__auto____8737))
{var and__3546__auto____8738 = x__445__auto____8736.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8738))
{return cljs.core.not.call(null,x__445__auto____8736.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8738;
}
} else
{return and__3546__auto____8737;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8736);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8757 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8757.push(key);
}));
return keys__8757;
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
{var x__445__auto____8784 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8785 = x__445__auto____8784;

if(cljs.core.truth_(and__3546__auto____8785))
{var and__3546__auto____8786 = x__445__auto____8784.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8786))
{return cljs.core.not.call(null,x__445__auto____8784.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8786;
}
} else
{return and__3546__auto____8785;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8784);
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
var and__3546__auto____8790 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8790))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8791 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8791))
{return or__3548__auto____8791;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8790;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8795 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8795))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8795;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8799 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8799))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8799;
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
var and__3546__auto____8812 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8812))
{return (n == n.toFixed());
} else
{return and__3546__auto____8812;
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
if(cljs.core.truth_((function (){var and__3546__auto____8820 = coll;

if(cljs.core.truth_(and__3546__auto____8820))
{var and__3546__auto____8821 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8821))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8821;
}
} else
{return and__3546__auto____8820;
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
var distinct_QMARK___8838 = (function (x){
return true;
});
var distinct_QMARK___8839 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8840 = (function() { 
var G__8843__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8829 = cljs.core.set([y,x]);
var xs__8830 = more;

while(true){
var x__8832 = cljs.core.first.call(null,xs__8830);
var etc__8835 = cljs.core.next.call(null,xs__8830);

if(cljs.core.truth_(xs__8830))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8829,x__8832)))
{return false;
} else
{{
var G__8844 = cljs.core.conj.call(null,s__8829,x__8832);
var G__8845 = etc__8835;
s__8829 = G__8844;
xs__8830 = G__8845;
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
var G__8843 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8843__delegate.call(this, x, y, more);
};
G__8843.cljs$lang$maxFixedArity = 2;
G__8843.cljs$lang$applyTo = (function (arglist__8850){
var x = cljs.core.first(arglist__8850);
var y = cljs.core.first(cljs.core.next(arglist__8850));
var more = cljs.core.rest(cljs.core.next(arglist__8850));
return G__8843__delegate.call(this, x, y, more);
});
return G__8843;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8838.call(this,x);
case  2 :
return distinct_QMARK___8839.call(this,x,y);
default:
return distinct_QMARK___8840.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8840.cljs$lang$applyTo;
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
var r__8868 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8868)))
{return r__8868;
} else
{if(cljs.core.truth_(r__8868))
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
var sort__8895 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8896 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8887 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8887,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8887);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8895.call(this,comp);
case  2 :
return sort__8896.call(this,comp,coll);
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
var sort_by__8916 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8917 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8916.call(this,keyfn,comp);
case  3 :
return sort_by__8917.call(this,keyfn,comp,coll);
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
var reduce__8920 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8921 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8920.call(this,f,val);
case  3 :
return reduce__8921.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8937 = (function (f,coll){
var temp__3695__auto____8929 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8929))
{var s__8930 = temp__3695__auto____8929;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8930),cljs.core.next.call(null,s__8930));
} else
{return f.call(null);
}
});
var seq_reduce__8938 = (function (f,val,coll){
var val__8932 = val;
var coll__8933 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8933))
{{
var G__8946 = f.call(null,val__8932,cljs.core.first.call(null,coll__8933));
var G__8947 = cljs.core.next.call(null,coll__8933);
val__8932 = G__8946;
coll__8933 = G__8947;
continue;
}
} else
{return val__8932;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8937.call(this,f,val);
case  3 :
return seq_reduce__8938.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8953 = null;
var G__8953__8954 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8953__8955 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8953 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8953__8954.call(this,coll,f);
case  3 :
return G__8953__8955.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8953;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8961 = (function (){
return 0;
});
var _PLUS___8962 = (function (x){
return x;
});
var _PLUS___8963 = (function (x,y){
return (x + y);
});
var _PLUS___8964 = (function() { 
var G__8967__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8967 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8967__delegate.call(this, x, y, more);
};
G__8967.cljs$lang$maxFixedArity = 2;
G__8967.cljs$lang$applyTo = (function (arglist__8972){
var x = cljs.core.first(arglist__8972);
var y = cljs.core.first(cljs.core.next(arglist__8972));
var more = cljs.core.rest(cljs.core.next(arglist__8972));
return G__8967__delegate.call(this, x, y, more);
});
return G__8967;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8961.call(this);
case  1 :
return _PLUS___8962.call(this,x);
case  2 :
return _PLUS___8963.call(this,x,y);
default:
return _PLUS___8964.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8964.cljs$lang$applyTo;
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
var ___8980 = (function (x){
return (- x);
});
var ___8981 = (function (x,y){
return (x - y);
});
var ___8982 = (function() { 
var G__8986__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8986 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8986__delegate.call(this, x, y, more);
};
G__8986.cljs$lang$maxFixedArity = 2;
G__8986.cljs$lang$applyTo = (function (arglist__8987){
var x = cljs.core.first(arglist__8987);
var y = cljs.core.first(cljs.core.next(arglist__8987));
var more = cljs.core.rest(cljs.core.next(arglist__8987));
return G__8986__delegate.call(this, x, y, more);
});
return G__8986;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8980.call(this,x);
case  2 :
return ___8981.call(this,x,y);
default:
return ___8982.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8982.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8997 = (function (){
return 1;
});
var _STAR___8998 = (function (x){
return x;
});
var _STAR___8999 = (function (x,y){
return (x * y);
});
var _STAR___9000 = (function() { 
var G__9002__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
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
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8997.call(this);
case  1 :
return _STAR___8998.call(this,x);
case  2 :
return _STAR___8999.call(this,x,y);
default:
return _STAR___9000.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9000.cljs$lang$applyTo;
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
var _SLASH___9008 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9010 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9011 = (function() { 
var G__9014__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9014 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9014__delegate.call(this, x, y, more);
};
G__9014.cljs$lang$maxFixedArity = 2;
G__9014.cljs$lang$applyTo = (function (arglist__9015){
var x = cljs.core.first(arglist__9015);
var y = cljs.core.first(cljs.core.next(arglist__9015));
var more = cljs.core.rest(cljs.core.next(arglist__9015));
return G__9014__delegate.call(this, x, y, more);
});
return G__9014;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9008.call(this,x);
case  2 :
return _SLASH___9010.call(this,x,y);
default:
return _SLASH___9011.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9011.cljs$lang$applyTo;
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
var _LT___9017 = (function (x){
return true;
});
var _LT___9018 = (function (x,y){
return (x < y);
});
var _LT___9019 = (function() { 
var G__9023__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9024 = y;
var G__9025 = cljs.core.first.call(null,more);
var G__9026 = cljs.core.next.call(null,more);
x = G__9024;
y = G__9025;
more = G__9026;
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
var G__9023 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9023__delegate.call(this, x, y, more);
};
G__9023.cljs$lang$maxFixedArity = 2;
G__9023.cljs$lang$applyTo = (function (arglist__9027){
var x = cljs.core.first(arglist__9027);
var y = cljs.core.first(cljs.core.next(arglist__9027));
var more = cljs.core.rest(cljs.core.next(arglist__9027));
return G__9023__delegate.call(this, x, y, more);
});
return G__9023;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9017.call(this,x);
case  2 :
return _LT___9018.call(this,x,y);
default:
return _LT___9019.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9019.cljs$lang$applyTo;
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
var _LT__EQ___9053 = (function (x){
return true;
});
var _LT__EQ___9054 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9055 = (function() { 
var G__9058__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9059 = y;
var G__9060 = cljs.core.first.call(null,more);
var G__9061 = cljs.core.next.call(null,more);
x = G__9059;
y = G__9060;
more = G__9061;
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
var G__9058 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9058__delegate.call(this, x, y, more);
};
G__9058.cljs$lang$maxFixedArity = 2;
G__9058.cljs$lang$applyTo = (function (arglist__9064){
var x = cljs.core.first(arglist__9064);
var y = cljs.core.first(cljs.core.next(arglist__9064));
var more = cljs.core.rest(cljs.core.next(arglist__9064));
return G__9058__delegate.call(this, x, y, more);
});
return G__9058;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9053.call(this,x);
case  2 :
return _LT__EQ___9054.call(this,x,y);
default:
return _LT__EQ___9055.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9055.cljs$lang$applyTo;
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
var _GT___9074 = (function (x){
return true;
});
var _GT___9075 = (function (x,y){
return (x > y);
});
var _GT___9076 = (function() { 
var G__9078__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9079 = y;
var G__9080 = cljs.core.first.call(null,more);
var G__9081 = cljs.core.next.call(null,more);
x = G__9079;
y = G__9080;
more = G__9081;
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
var G__9078 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9078__delegate.call(this, x, y, more);
};
G__9078.cljs$lang$maxFixedArity = 2;
G__9078.cljs$lang$applyTo = (function (arglist__9087){
var x = cljs.core.first(arglist__9087);
var y = cljs.core.first(cljs.core.next(arglist__9087));
var more = cljs.core.rest(cljs.core.next(arglist__9087));
return G__9078__delegate.call(this, x, y, more);
});
return G__9078;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9074.call(this,x);
case  2 :
return _GT___9075.call(this,x,y);
default:
return _GT___9076.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9076.cljs$lang$applyTo;
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
var _GT__EQ___9097 = (function (x){
return true;
});
var _GT__EQ___9098 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9099 = (function() { 
var G__9105__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9107 = y;
var G__9108 = cljs.core.first.call(null,more);
var G__9109 = cljs.core.next.call(null,more);
x = G__9107;
y = G__9108;
more = G__9109;
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
var G__9105 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9105__delegate.call(this, x, y, more);
};
G__9105.cljs$lang$maxFixedArity = 2;
G__9105.cljs$lang$applyTo = (function (arglist__9116){
var x = cljs.core.first(arglist__9116);
var y = cljs.core.first(cljs.core.next(arglist__9116));
var more = cljs.core.rest(cljs.core.next(arglist__9116));
return G__9105__delegate.call(this, x, y, more);
});
return G__9105;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9097.call(this,x);
case  2 :
return _GT__EQ___9098.call(this,x,y);
default:
return _GT__EQ___9099.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9099.cljs$lang$applyTo;
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
var max__9127 = (function (x){
return x;
});
var max__9128 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9129 = (function() { 
var G__9132__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9132 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9132__delegate.call(this, x, y, more);
};
G__9132.cljs$lang$maxFixedArity = 2;
G__9132.cljs$lang$applyTo = (function (arglist__9133){
var x = cljs.core.first(arglist__9133);
var y = cljs.core.first(cljs.core.next(arglist__9133));
var more = cljs.core.rest(cljs.core.next(arglist__9133));
return G__9132__delegate.call(this, x, y, more);
});
return G__9132;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9127.call(this,x);
case  2 :
return max__9128.call(this,x,y);
default:
return max__9129.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9129.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9140 = (function (x){
return x;
});
var min__9141 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9142 = (function() { 
var G__9147__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9147 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9147__delegate.call(this, x, y, more);
};
G__9147.cljs$lang$maxFixedArity = 2;
G__9147.cljs$lang$applyTo = (function (arglist__9148){
var x = cljs.core.first(arglist__9148);
var y = cljs.core.first(cljs.core.next(arglist__9148));
var more = cljs.core.rest(cljs.core.next(arglist__9148));
return G__9147__delegate.call(this, x, y, more);
});
return G__9147;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9140.call(this,x);
case  2 :
return min__9141.call(this,x,y);
default:
return min__9142.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9142.cljs$lang$applyTo;
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
var rem__9155 = (n % d);

return cljs.core.fix.call(null,((n - rem__9155) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9156 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9156));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9196 = (function (){
return Math.random.call(null);
});
var rand__9198 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9196.call(this);
case  1 :
return rand__9198.call(this,n);
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
var _EQ__EQ___9295 = (function (x){
return true;
});
var _EQ__EQ___9296 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9297 = (function() { 
var G__9300__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9303 = y;
var G__9304 = cljs.core.first.call(null,more);
var G__9305 = cljs.core.next.call(null,more);
x = G__9303;
y = G__9304;
more = G__9305;
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
var G__9300 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9300__delegate.call(this, x, y, more);
};
G__9300.cljs$lang$maxFixedArity = 2;
G__9300.cljs$lang$applyTo = (function (arglist__9308){
var x = cljs.core.first(arglist__9308);
var y = cljs.core.first(cljs.core.next(arglist__9308));
var more = cljs.core.rest(cljs.core.next(arglist__9308));
return G__9300__delegate.call(this, x, y, more);
});
return G__9300;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9295.call(this,x);
case  2 :
return _EQ__EQ___9296.call(this,x,y);
default:
return _EQ__EQ___9297.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9297.cljs$lang$applyTo;
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
var n__9322 = n;
var xs__9323 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9324 = xs__9323;

if(cljs.core.truth_(and__3546__auto____9324))
{return (n__9322 > 0);
} else
{return and__3546__auto____9324;
}
})()))
{{
var G__9326 = (n__9322 - 1);
var G__9327 = cljs.core.next.call(null,xs__9323);
n__9322 = G__9326;
xs__9323 = G__9327;
continue;
}
} else
{return xs__9323;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9341 = null;
var G__9341__9342 = (function (coll,n){
var temp__3695__auto____9330 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9330))
{var xs__9333 = temp__3695__auto____9330;

return cljs.core.first.call(null,xs__9333);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9341__9343 = (function (coll,n,not_found){
var temp__3695__auto____9338 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9338))
{var xs__9339 = temp__3695__auto____9338;

return cljs.core.first.call(null,xs__9339);
} else
{return not_found;
}
});
G__9341 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9341__9342.call(this,coll,n);
case  3 :
return G__9341__9343.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9341;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9353 = (function (){
return "";
});
var str_STAR___9354 = (function (x){
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
var str_STAR___9355 = (function() { 
var G__9358__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9359 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9360 = cljs.core.next.call(null,more);
sb = G__9359;
more = G__9360;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9358 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9358__delegate.call(this, x, ys);
};
G__9358.cljs$lang$maxFixedArity = 1;
G__9358.cljs$lang$applyTo = (function (arglist__9361){
var x = cljs.core.first(arglist__9361);
var ys = cljs.core.rest(arglist__9361);
return G__9358__delegate.call(this, x, ys);
});
return G__9358;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9353.call(this);
case  1 :
return str_STAR___9354.call(this,x);
default:
return str_STAR___9355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9355.cljs$lang$applyTo;
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
var str__9363 = (function (){
return "";
});
var str__9364 = (function (x){
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
var str__9365 = (function() { 
var G__9367__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9367 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9367__delegate.call(this, x, ys);
};
G__9367.cljs$lang$maxFixedArity = 1;
G__9367.cljs$lang$applyTo = (function (arglist__9368){
var x = cljs.core.first(arglist__9368);
var ys = cljs.core.rest(arglist__9368);
return G__9367__delegate.call(this, x, ys);
});
return G__9367;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9363.call(this);
case  1 :
return str__9364.call(this,x);
default:
return str__9365.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9365.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9474 = (function (s,start){
return s.substring(start);
});
var subs__9475 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9474.call(this,s,start);
case  3 :
return subs__9475.call(this,s,start,end);
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
var symbol__9481 = (function (name){
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
var symbol__9482 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9481.call(this,ns);
case  2 :
return symbol__9482.call(this,ns,name);
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
var keyword__9491 = (function (name){
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
var keyword__9492 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9491.call(this,ns);
case  2 :
return keyword__9492.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9498 = cljs.core.seq.call(null,x);
var ys__9499 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9498)))
{return cljs.core.nil_QMARK_.call(null,ys__9499);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9499)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9498),cljs.core.first.call(null,ys__9499))))
{{
var G__9505 = cljs.core.next.call(null,xs__9498);
var G__9506 = cljs.core.next.call(null,ys__9499);
xs__9498 = G__9505;
ys__9499 = G__9506;
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
return cljs.core.reduce.call(null,(function (p1__9510_SHARP_,p2__9511_SHARP_){
return cljs.core.hash_combine.call(null,p1__9510_SHARP_,cljs.core.hash.call(null,p2__9511_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9517__9518 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9517__9518))
{var G__9520__9522 = cljs.core.first.call(null,G__9517__9518);
var vec__9521__9523 = G__9520__9522;
var key_name__9525 = cljs.core.nth.call(null,vec__9521__9523,0,null);
var f__9526 = cljs.core.nth.call(null,vec__9521__9523,1,null);
var G__9517__9527 = G__9517__9518;

var G__9520__9528 = G__9520__9522;
var G__9517__9529 = G__9517__9527;

while(true){
var vec__9530__9531 = G__9520__9528;
var key_name__9532 = cljs.core.nth.call(null,vec__9530__9531,0,null);
var f__9533 = cljs.core.nth.call(null,vec__9530__9531,1,null);
var G__9517__9534 = G__9517__9529;

var str_name__9535 = cljs.core.name.call(null,key_name__9532);

obj[str_name__9535] = f__9533;
var temp__3698__auto____9536 = cljs.core.next.call(null,G__9517__9534);

if(cljs.core.truth_(temp__3698__auto____9536))
{var G__9517__9537 = temp__3698__auto____9536;

{
var G__9544 = cljs.core.first.call(null,G__9517__9537);
var G__9545 = G__9517__9537;
G__9520__9528 = G__9544;
G__9517__9529 = G__9545;
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
var this__9567 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9569 = this;
return (new cljs.core.List(this__9569.meta,o,coll,(this__9569.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9570 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9571 = this;
return this__9571.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9572 = this;
return this__9572.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9573 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9575 = this;
return this__9575.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9577 = this;
return this__9577.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9581 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9587 = this;
return (new cljs.core.List(meta,this__9587.first,this__9587.rest,this__9587.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9591 = this;
return this__9591.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9592 = this;
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
var this__9606 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9607 = this;
return (new cljs.core.List(this__9607.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9611 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9612 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9613 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9614 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9615 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9616 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9617 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9618 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9619 = this;
return this__9619.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9623 = this;
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
list.cljs$lang$applyTo = (function (arglist__9772){
var items = cljs.core.seq( arglist__9772 );;
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
var this__9773 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9774 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9775 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9776 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9776.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9777 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9778 = this;
return this__9778.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9779 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9779.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9779.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9780 = this;
return this__9780.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9781 = this;
return (new cljs.core.Cons(meta,this__9781.first,this__9781.rest));
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
var G__9802 = null;
var G__9802__9803 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9802__9804 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9802 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9802__9803.call(this,string,f);
case  3 :
return G__9802__9804.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9802;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9808 = null;
var G__9808__9809 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9808__9810 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9808 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9808__9809.call(this,string,k);
case  3 :
return G__9808__9810.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9808;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9837 = null;
var G__9837__9839 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9837__9840 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9837 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9837__9839.call(this,string,n);
case  3 :
return G__9837__9840.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9837;
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
var G__9854 = null;
var G__9854__9855 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9854__9856 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9854 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9854__9855.call(this,this$,coll);
case  3 :
return G__9854__9856.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9854;
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
var x__9872 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9872;
} else
{lazy_seq.x = x__9872.call(null);
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
var this__9882 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9883 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9884 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9885 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9885.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9886 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9888 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9892 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9897 = this;
return this__9897.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9898 = this;
return (new cljs.core.LazySeq(meta,this__9898.realized,this__9898.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__9908 = cljs.core.array.call(null);

var s__9910 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9910)))
{ary__9908.push(cljs.core.first.call(null,s__9910));
{
var G__9952 = cljs.core.next.call(null,s__9910);
s__9910 = G__9952;
continue;
}
} else
{return ary__9908;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__9954 = s;
var i__9955 = n;
var sum__9956 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9957 = (i__9955 > 0);

if(cljs.core.truth_(and__3546__auto____9957))
{return cljs.core.seq.call(null,s__9954);
} else
{return and__3546__auto____9957;
}
})()))
{{
var G__9962 = cljs.core.next.call(null,s__9954);
var G__9963 = (i__9955 - 1);
var G__9964 = (sum__9956 + 1);
s__9954 = G__9962;
i__9955 = G__9963;
sum__9956 = G__9964;
continue;
}
} else
{return sum__9956;
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
var concat__9995 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__9996 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__9997 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9986 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__9986))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9986),concat.call(null,cljs.core.rest.call(null,s__9986),y));
} else
{return y;
}
})));
});
var concat__9998 = (function() { 
var G__10003__delegate = function (x,y,zs){
var cat__9993 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9990 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__9990))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9990),cat.call(null,cljs.core.rest.call(null,xys__9990),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__9993.call(null,concat.call(null,x,y),zs);
};
var G__10003 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10003__delegate.call(this, x, y, zs);
};
G__10003.cljs$lang$maxFixedArity = 2;
G__10003.cljs$lang$applyTo = (function (arglist__10004){
var x = cljs.core.first(arglist__10004);
var y = cljs.core.first(cljs.core.next(arglist__10004));
var zs = cljs.core.rest(cljs.core.next(arglist__10004));
return G__10003__delegate.call(this, x, y, zs);
});
return G__10003;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__9995.call(this);
case  1 :
return concat__9996.call(this,x);
case  2 :
return concat__9997.call(this,x,y);
default:
return concat__9998.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__9998.cljs$lang$applyTo;
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
var list_STAR___10006 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10007 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10008 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10009 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10010 = (function() { 
var G__10012__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10012 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10012__delegate.call(this, a, b, c, d, more);
};
G__10012.cljs$lang$maxFixedArity = 4;
G__10012.cljs$lang$applyTo = (function (arglist__10013){
var a = cljs.core.first(arglist__10013);
var b = cljs.core.first(cljs.core.next(arglist__10013));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10013)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10013))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10013))));
return G__10012__delegate.call(this, a, b, c, d, more);
});
return G__10012;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10006.call(this,a);
case  2 :
return list_STAR___10007.call(this,a,b);
case  3 :
return list_STAR___10008.call(this,a,b,c);
case  4 :
return list_STAR___10009.call(this,a,b,c,d);
default:
return list_STAR___10010.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10010.cljs$lang$applyTo;
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
var apply__10105 = (function (f,args){
var fixed_arity__10018 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10018 + 1)) <= fixed_arity__10018)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10106 = (function (f,x,args){
var arglist__10022 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10024 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10022,fixed_arity__10024) <= fixed_arity__10024)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10022));
} else
{return f.cljs$lang$applyTo(arglist__10022);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10022));
}
});
var apply__10107 = (function (f,x,y,args){
var arglist__10051 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10052 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10051,fixed_arity__10052) <= fixed_arity__10052)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10051));
} else
{return f.cljs$lang$applyTo(arglist__10051);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10051));
}
});
var apply__10108 = (function (f,x,y,z,args){
var arglist__10088 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10090 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10088,fixed_arity__10090) <= fixed_arity__10090)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10088));
} else
{return f.cljs$lang$applyTo(arglist__10088);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10088));
}
});
var apply__10109 = (function() { 
var G__10120__delegate = function (f,a,b,c,d,args){
var arglist__10096 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10097 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10096,fixed_arity__10097) <= fixed_arity__10097)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10096));
} else
{return f.cljs$lang$applyTo(arglist__10096);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10096));
}
};
var G__10120 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10120__delegate.call(this, f, a, b, c, d, args);
};
G__10120.cljs$lang$maxFixedArity = 5;
G__10120.cljs$lang$applyTo = (function (arglist__10129){
var f = cljs.core.first(arglist__10129);
var a = cljs.core.first(cljs.core.next(arglist__10129));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10129)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10129))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10129)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10129)))));
return G__10120__delegate.call(this, f, a, b, c, d, args);
});
return G__10120;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10105.call(this,f,a);
case  3 :
return apply__10106.call(this,f,a,b);
case  4 :
return apply__10107.call(this,f,a,b,c);
case  5 :
return apply__10108.call(this,f,a,b,c,d);
default:
return apply__10109.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10109.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10131){
var obj = cljs.core.first(arglist__10131);
var f = cljs.core.first(cljs.core.next(arglist__10131));
var args = cljs.core.rest(cljs.core.next(arglist__10131));
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
var not_EQ___10138 = (function (x){
return false;
});
var not_EQ___10139 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10140 = (function() { 
var G__10143__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10143 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10143__delegate.call(this, x, y, more);
};
G__10143.cljs$lang$maxFixedArity = 2;
G__10143.cljs$lang$applyTo = (function (arglist__10145){
var x = cljs.core.first(arglist__10145);
var y = cljs.core.first(cljs.core.next(arglist__10145));
var more = cljs.core.rest(cljs.core.next(arglist__10145));
return G__10143__delegate.call(this, x, y, more);
});
return G__10143;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10138.call(this,x);
case  2 :
return not_EQ___10139.call(this,x,y);
default:
return not_EQ___10140.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10140.cljs$lang$applyTo;
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
var G__10150 = pred;
var G__10151 = cljs.core.next.call(null,coll);
pred = G__10150;
coll = G__10151;
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
{var or__3548__auto____10157 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10157))
{return or__3548__auto____10157;
} else
{{
var G__10168 = pred;
var G__10169 = cljs.core.next.call(null,coll);
pred = G__10168;
coll = G__10169;
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
var G__10185 = null;
var G__10185__10188 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10185__10189 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10185__10190 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10185__10191 = (function() { 
var G__10195__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10195 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10195__delegate.call(this, x, y, zs);
};
G__10195.cljs$lang$maxFixedArity = 2;
G__10195.cljs$lang$applyTo = (function (arglist__10196){
var x = cljs.core.first(arglist__10196);
var y = cljs.core.first(cljs.core.next(arglist__10196));
var zs = cljs.core.rest(cljs.core.next(arglist__10196));
return G__10195__delegate.call(this, x, y, zs);
});
return G__10195;
})()
;
G__10185 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10185__10188.call(this);
case  1 :
return G__10185__10189.call(this,x);
case  2 :
return G__10185__10190.call(this,x,y);
default:
return G__10185__10191.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10185.cljs$lang$maxFixedArity = 2;
G__10185.cljs$lang$applyTo = G__10185__10191.cljs$lang$applyTo;
return G__10185;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10197__delegate = function (args){
return x;
};
var G__10197 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10197__delegate.call(this, args);
};
G__10197.cljs$lang$maxFixedArity = 0;
G__10197.cljs$lang$applyTo = (function (arglist__10202){
var args = cljs.core.seq( arglist__10202 );;
return G__10197__delegate.call(this, args);
});
return G__10197;
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
var comp__10285 = (function (){
return cljs.core.identity;
});
var comp__10286 = (function (f){
return f;
});
var comp__10287 = (function (f,g){
return (function() {
var G__10292 = null;
var G__10292__10293 = (function (){
return f.call(null,g.call(null));
});
var G__10292__10294 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10292__10295 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10292__10296 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10292__10297 = (function() { 
var G__10299__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10299 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10299__delegate.call(this, x, y, z, args);
};
G__10299.cljs$lang$maxFixedArity = 3;
G__10299.cljs$lang$applyTo = (function (arglist__10300){
var x = cljs.core.first(arglist__10300);
var y = cljs.core.first(cljs.core.next(arglist__10300));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10300)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10300)));
return G__10299__delegate.call(this, x, y, z, args);
});
return G__10299;
})()
;
G__10292 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10292__10293.call(this);
case  1 :
return G__10292__10294.call(this,x);
case  2 :
return G__10292__10295.call(this,x,y);
case  3 :
return G__10292__10296.call(this,x,y,z);
default:
return G__10292__10297.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10292.cljs$lang$maxFixedArity = 3;
G__10292.cljs$lang$applyTo = G__10292__10297.cljs$lang$applyTo;
return G__10292;
})()
});
var comp__10288 = (function (f,g,h){
return (function() {
var G__10301 = null;
var G__10301__10302 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10301__10303 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10301__10304 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10301__10305 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10301__10306 = (function() { 
var G__10309__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10309 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10309__delegate.call(this, x, y, z, args);
};
G__10309.cljs$lang$maxFixedArity = 3;
G__10309.cljs$lang$applyTo = (function (arglist__10310){
var x = cljs.core.first(arglist__10310);
var y = cljs.core.first(cljs.core.next(arglist__10310));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10310)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10310)));
return G__10309__delegate.call(this, x, y, z, args);
});
return G__10309;
})()
;
G__10301 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10301__10302.call(this);
case  1 :
return G__10301__10303.call(this,x);
case  2 :
return G__10301__10304.call(this,x,y);
case  3 :
return G__10301__10305.call(this,x,y,z);
default:
return G__10301__10306.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10301.cljs$lang$maxFixedArity = 3;
G__10301.cljs$lang$applyTo = G__10301__10306.cljs$lang$applyTo;
return G__10301;
})()
});
var comp__10289 = (function() { 
var G__10311__delegate = function (f1,f2,f3,fs){
var fs__10276 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10313__delegate = function (args){
var ret__10278 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10276),args);
var fs__10280 = cljs.core.next.call(null,fs__10276);

while(true){
if(cljs.core.truth_(fs__10280))
{{
var G__10314 = cljs.core.first.call(null,fs__10280).call(null,ret__10278);
var G__10315 = cljs.core.next.call(null,fs__10280);
ret__10278 = G__10314;
fs__10280 = G__10315;
continue;
}
} else
{return ret__10278;
}
break;
}
};
var G__10313 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10313__delegate.call(this, args);
};
G__10313.cljs$lang$maxFixedArity = 0;
G__10313.cljs$lang$applyTo = (function (arglist__10317){
var args = cljs.core.seq( arglist__10317 );;
return G__10313__delegate.call(this, args);
});
return G__10313;
})()
;
};
var G__10311 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10311__delegate.call(this, f1, f2, f3, fs);
};
G__10311.cljs$lang$maxFixedArity = 3;
G__10311.cljs$lang$applyTo = (function (arglist__10318){
var f1 = cljs.core.first(arglist__10318);
var f2 = cljs.core.first(cljs.core.next(arglist__10318));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10318)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10318)));
return G__10311__delegate.call(this, f1, f2, f3, fs);
});
return G__10311;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10285.call(this);
case  1 :
return comp__10286.call(this,f1);
case  2 :
return comp__10287.call(this,f1,f2);
case  3 :
return comp__10288.call(this,f1,f2,f3);
default:
return comp__10289.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10289.cljs$lang$applyTo;
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
var partial__10327 = (function (f,arg1){
return (function() { 
var G__10334__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10334 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10334__delegate.call(this, args);
};
G__10334.cljs$lang$maxFixedArity = 0;
G__10334.cljs$lang$applyTo = (function (arglist__10337){
var args = cljs.core.seq( arglist__10337 );;
return G__10334__delegate.call(this, args);
});
return G__10334;
})()
;
});
var partial__10329 = (function (f,arg1,arg2){
return (function() { 
var G__10339__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10339 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10339__delegate.call(this, args);
};
G__10339.cljs$lang$maxFixedArity = 0;
G__10339.cljs$lang$applyTo = (function (arglist__10340){
var args = cljs.core.seq( arglist__10340 );;
return G__10339__delegate.call(this, args);
});
return G__10339;
})()
;
});
var partial__10330 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10342__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10342 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10342__delegate.call(this, args);
};
G__10342.cljs$lang$maxFixedArity = 0;
G__10342.cljs$lang$applyTo = (function (arglist__10344){
var args = cljs.core.seq( arglist__10344 );;
return G__10342__delegate.call(this, args);
});
return G__10342;
})()
;
});
var partial__10331 = (function() { 
var G__10345__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10347__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10347 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10347__delegate.call(this, args);
};
G__10347.cljs$lang$maxFixedArity = 0;
G__10347.cljs$lang$applyTo = (function (arglist__10348){
var args = cljs.core.seq( arglist__10348 );;
return G__10347__delegate.call(this, args);
});
return G__10347;
})()
;
};
var G__10345 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10345__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10345.cljs$lang$maxFixedArity = 4;
G__10345.cljs$lang$applyTo = (function (arglist__10350){
var f = cljs.core.first(arglist__10350);
var arg1 = cljs.core.first(cljs.core.next(arglist__10350));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10350)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10350))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10350))));
return G__10345__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10345;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10327.call(this,f,arg1);
case  3 :
return partial__10329.call(this,f,arg1,arg2);
case  4 :
return partial__10330.call(this,f,arg1,arg2,arg3);
default:
return partial__10331.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10331.cljs$lang$applyTo;
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
var fnil__10377 = (function (f,x){
return (function() {
var G__10381 = null;
var G__10381__10382 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10381__10383 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10381__10384 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10381__10389 = (function() { 
var G__10394__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10394 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10394__delegate.call(this, a, b, c, ds);
};
G__10394.cljs$lang$maxFixedArity = 3;
G__10394.cljs$lang$applyTo = (function (arglist__10401){
var a = cljs.core.first(arglist__10401);
var b = cljs.core.first(cljs.core.next(arglist__10401));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10401)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10401)));
return G__10394__delegate.call(this, a, b, c, ds);
});
return G__10394;
})()
;
G__10381 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10381__10382.call(this,a);
case  2 :
return G__10381__10383.call(this,a,b);
case  3 :
return G__10381__10384.call(this,a,b,c);
default:
return G__10381__10389.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10381.cljs$lang$maxFixedArity = 3;
G__10381.cljs$lang$applyTo = G__10381__10389.cljs$lang$applyTo;
return G__10381;
})()
});
var fnil__10378 = (function (f,x,y){
return (function() {
var G__10404 = null;
var G__10404__10405 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10404__10407 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10404__10408 = (function() { 
var G__10411__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10411 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10411__delegate.call(this, a, b, c, ds);
};
G__10411.cljs$lang$maxFixedArity = 3;
G__10411.cljs$lang$applyTo = (function (arglist__10414){
var a = cljs.core.first(arglist__10414);
var b = cljs.core.first(cljs.core.next(arglist__10414));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10414)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10414)));
return G__10411__delegate.call(this, a, b, c, ds);
});
return G__10411;
})()
;
G__10404 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10404__10405.call(this,a,b);
case  3 :
return G__10404__10407.call(this,a,b,c);
default:
return G__10404__10408.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10404.cljs$lang$maxFixedArity = 3;
G__10404.cljs$lang$applyTo = G__10404__10408.cljs$lang$applyTo;
return G__10404;
})()
});
var fnil__10379 = (function (f,x,y,z){
return (function() {
var G__10418 = null;
var G__10418__10419 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10418__10420 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10418__10421 = (function() { 
var G__10426__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10426 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10426__delegate.call(this, a, b, c, ds);
};
G__10426.cljs$lang$maxFixedArity = 3;
G__10426.cljs$lang$applyTo = (function (arglist__10428){
var a = cljs.core.first(arglist__10428);
var b = cljs.core.first(cljs.core.next(arglist__10428));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10428)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10428)));
return G__10426__delegate.call(this, a, b, c, ds);
});
return G__10426;
})()
;
G__10418 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10418__10419.call(this,a,b);
case  3 :
return G__10418__10420.call(this,a,b,c);
default:
return G__10418__10421.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10418.cljs$lang$maxFixedArity = 3;
G__10418.cljs$lang$applyTo = G__10418__10421.cljs$lang$applyTo;
return G__10418;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10377.call(this,f,x);
case  3 :
return fnil__10378.call(this,f,x,y);
case  4 :
return fnil__10379.call(this,f,x,y,z);
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
var mapi__10434 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10432 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10432))
{var s__10433 = temp__3698__auto____10432;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10433)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10433)));
} else
{return null;
}
})));
});

return mapi__10434.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10450 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10450))
{var s__10451 = temp__3698__auto____10450;

var x__10452 = f.call(null,cljs.core.first.call(null,s__10451));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10452)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10451));
} else
{return cljs.core.cons.call(null,x__10452,keep.call(null,f,cljs.core.rest.call(null,s__10451)));
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
var keepi__10477 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10473 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10473))
{var s__10475 = temp__3698__auto____10473;

var x__10476 = f.call(null,idx,cljs.core.first.call(null,s__10475));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10476)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10475));
} else
{return cljs.core.cons.call(null,x__10476,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10475)));
}
} else
{return null;
}
})));
});

return keepi__10477.call(null,0,coll);
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
var every_pred__10557 = (function (p){
return (function() {
var ep1 = null;
var ep1__10562 = (function (){
return true;
});
var ep1__10563 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10564 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10493 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10493))
{return p.call(null,y);
} else
{return and__3546__auto____10493;
}
})());
});
var ep1__10565 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10494 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10494))
{var and__3546__auto____10495 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10495))
{return p.call(null,z);
} else
{return and__3546__auto____10495;
}
} else
{return and__3546__auto____10494;
}
})());
});
var ep1__10566 = (function() { 
var G__10572__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10497 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10497))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10497;
}
})());
};
var G__10572 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10572__delegate.call(this, x, y, z, args);
};
G__10572.cljs$lang$maxFixedArity = 3;
G__10572.cljs$lang$applyTo = (function (arglist__10573){
var x = cljs.core.first(arglist__10573);
var y = cljs.core.first(cljs.core.next(arglist__10573));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10573)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10573)));
return G__10572__delegate.call(this, x, y, z, args);
});
return G__10572;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10562.call(this);
case  1 :
return ep1__10563.call(this,x);
case  2 :
return ep1__10564.call(this,x,y);
case  3 :
return ep1__10565.call(this,x,y,z);
default:
return ep1__10566.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10566.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10558 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10578 = (function (){
return true;
});
var ep2__10579 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10498 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10498))
{return p2.call(null,x);
} else
{return and__3546__auto____10498;
}
})());
});
var ep2__10580 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10501 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10501))
{var and__3546__auto____10502 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10502))
{var and__3546__auto____10503 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10503))
{return p2.call(null,y);
} else
{return and__3546__auto____10503;
}
} else
{return and__3546__auto____10502;
}
} else
{return and__3546__auto____10501;
}
})());
});
var ep2__10581 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10504 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10504))
{var and__3546__auto____10505 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10505))
{var and__3546__auto____10506 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10506))
{var and__3546__auto____10507 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10507))
{var and__3546__auto____10510 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10510))
{return p2.call(null,z);
} else
{return and__3546__auto____10510;
}
} else
{return and__3546__auto____10507;
}
} else
{return and__3546__auto____10506;
}
} else
{return and__3546__auto____10505;
}
} else
{return and__3546__auto____10504;
}
})());
});
var ep2__10582 = (function() { 
var G__10592__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10511 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10511))
{return cljs.core.every_QMARK_.call(null,(function (p1__10462_SHARP_){
var and__3546__auto____10512 = p1.call(null,p1__10462_SHARP_);

if(cljs.core.truth_(and__3546__auto____10512))
{return p2.call(null,p1__10462_SHARP_);
} else
{return and__3546__auto____10512;
}
}),args);
} else
{return and__3546__auto____10511;
}
})());
};
var G__10592 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10592__delegate.call(this, x, y, z, args);
};
G__10592.cljs$lang$maxFixedArity = 3;
G__10592.cljs$lang$applyTo = (function (arglist__10593){
var x = cljs.core.first(arglist__10593);
var y = cljs.core.first(cljs.core.next(arglist__10593));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10593)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10593)));
return G__10592__delegate.call(this, x, y, z, args);
});
return G__10592;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10578.call(this);
case  1 :
return ep2__10579.call(this,x);
case  2 :
return ep2__10580.call(this,x,y);
case  3 :
return ep2__10581.call(this,x,y,z);
default:
return ep2__10582.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10582.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10559 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10594 = (function (){
return true;
});
var ep3__10595 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10519 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10519))
{var and__3546__auto____10520 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10520))
{return p3.call(null,x);
} else
{return and__3546__auto____10520;
}
} else
{return and__3546__auto____10519;
}
})());
});
var ep3__10596 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10521 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10521))
{var and__3546__auto____10522 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10522))
{var and__3546__auto____10523 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10523))
{var and__3546__auto____10524 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10524))
{var and__3546__auto____10525 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10525))
{return p3.call(null,y);
} else
{return and__3546__auto____10525;
}
} else
{return and__3546__auto____10524;
}
} else
{return and__3546__auto____10523;
}
} else
{return and__3546__auto____10522;
}
} else
{return and__3546__auto____10521;
}
})());
});
var ep3__10597 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10526 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10526))
{var and__3546__auto____10527 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10527))
{var and__3546__auto____10528 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10528))
{var and__3546__auto____10529 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10529))
{var and__3546__auto____10530 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10530))
{var and__3546__auto____10531 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10531))
{var and__3546__auto____10532 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10532))
{var and__3546__auto____10533 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10533))
{return p3.call(null,z);
} else
{return and__3546__auto____10533;
}
} else
{return and__3546__auto____10532;
}
} else
{return and__3546__auto____10531;
}
} else
{return and__3546__auto____10530;
}
} else
{return and__3546__auto____10529;
}
} else
{return and__3546__auto____10528;
}
} else
{return and__3546__auto____10527;
}
} else
{return and__3546__auto____10526;
}
})());
});
var ep3__10598 = (function() { 
var G__10615__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10534 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10534))
{return cljs.core.every_QMARK_.call(null,(function (p1__10463_SHARP_){
var and__3546__auto____10535 = p1.call(null,p1__10463_SHARP_);

if(cljs.core.truth_(and__3546__auto____10535))
{var and__3546__auto____10541 = p2.call(null,p1__10463_SHARP_);

if(cljs.core.truth_(and__3546__auto____10541))
{return p3.call(null,p1__10463_SHARP_);
} else
{return and__3546__auto____10541;
}
} else
{return and__3546__auto____10535;
}
}),args);
} else
{return and__3546__auto____10534;
}
})());
};
var G__10615 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10615__delegate.call(this, x, y, z, args);
};
G__10615.cljs$lang$maxFixedArity = 3;
G__10615.cljs$lang$applyTo = (function (arglist__10619){
var x = cljs.core.first(arglist__10619);
var y = cljs.core.first(cljs.core.next(arglist__10619));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10619)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10619)));
return G__10615__delegate.call(this, x, y, z, args);
});
return G__10615;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10594.call(this);
case  1 :
return ep3__10595.call(this,x);
case  2 :
return ep3__10596.call(this,x,y);
case  3 :
return ep3__10597.call(this,x,y,z);
default:
return ep3__10598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10598.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10560 = (function() { 
var G__10625__delegate = function (p1,p2,p3,ps){
var ps__10543 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10648 = (function (){
return true;
});
var epn__10649 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10465_SHARP_){
return p1__10465_SHARP_.call(null,x);
}),ps__10543);
});
var epn__10650 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10466_SHARP_){
var and__3546__auto____10547 = p1__10466_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10547))
{return p1__10466_SHARP_.call(null,y);
} else
{return and__3546__auto____10547;
}
}),ps__10543);
});
var epn__10651 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10467_SHARP_){
var and__3546__auto____10550 = p1__10467_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10550))
{var and__3546__auto____10553 = p1__10467_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10553))
{return p1__10467_SHARP_.call(null,z);
} else
{return and__3546__auto____10553;
}
} else
{return and__3546__auto____10550;
}
}),ps__10543);
});
var epn__10652 = (function() { 
var G__10658__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10555 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10555))
{return cljs.core.every_QMARK_.call(null,(function (p1__10469_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10469_SHARP_,args);
}),ps__10543);
} else
{return and__3546__auto____10555;
}
})());
};
var G__10658 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10658__delegate.call(this, x, y, z, args);
};
G__10658.cljs$lang$maxFixedArity = 3;
G__10658.cljs$lang$applyTo = (function (arglist__10661){
var x = cljs.core.first(arglist__10661);
var y = cljs.core.first(cljs.core.next(arglist__10661));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10661)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10661)));
return G__10658__delegate.call(this, x, y, z, args);
});
return G__10658;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10648.call(this);
case  1 :
return epn__10649.call(this,x);
case  2 :
return epn__10650.call(this,x,y);
case  3 :
return epn__10651.call(this,x,y,z);
default:
return epn__10652.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10652.cljs$lang$applyTo;
return epn;
})()
};
var G__10625 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10625__delegate.call(this, p1, p2, p3, ps);
};
G__10625.cljs$lang$maxFixedArity = 3;
G__10625.cljs$lang$applyTo = (function (arglist__10678){
var p1 = cljs.core.first(arglist__10678);
var p2 = cljs.core.first(cljs.core.next(arglist__10678));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10678)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10678)));
return G__10625__delegate.call(this, p1, p2, p3, ps);
});
return G__10625;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10557.call(this,p1);
case  2 :
return every_pred__10558.call(this,p1,p2);
case  3 :
return every_pred__10559.call(this,p1,p2,p3);
default:
return every_pred__10560.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10560.cljs$lang$applyTo;
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
var some_fn__10936 = (function (p){
return (function() {
var sp1 = null;
var sp1__10941 = (function (){
return null;
});
var sp1__10942 = (function (x){
return p.call(null,x);
});
var sp1__10943 = (function (x,y){
var or__3548__auto____10686 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10686))
{return or__3548__auto____10686;
} else
{return p.call(null,y);
}
});
var sp1__10944 = (function (x,y,z){
var or__3548__auto____10687 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10687))
{return or__3548__auto____10687;
} else
{var or__3548__auto____10688 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____10688))
{return or__3548__auto____10688;
} else
{return p.call(null,z);
}
}
});
var sp1__10945 = (function() { 
var G__10947__delegate = function (x,y,z,args){
var or__3548__auto____10691 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10691))
{return or__3548__auto____10691;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__10947 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10947__delegate.call(this, x, y, z, args);
};
G__10947.cljs$lang$maxFixedArity = 3;
G__10947.cljs$lang$applyTo = (function (arglist__10948){
var x = cljs.core.first(arglist__10948);
var y = cljs.core.first(cljs.core.next(arglist__10948));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10948)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10948)));
return G__10947__delegate.call(this, x, y, z, args);
});
return G__10947;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__10941.call(this);
case  1 :
return sp1__10942.call(this,x);
case  2 :
return sp1__10943.call(this,x,y);
case  3 :
return sp1__10944.call(this,x,y,z);
default:
return sp1__10945.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__10945.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__10937 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__10950 = (function (){
return null;
});
var sp2__10951 = (function (x){
var or__3548__auto____10696 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10696))
{return or__3548__auto____10696;
} else
{return p2.call(null,x);
}
});
var sp2__10952 = (function (x,y){
var or__3548__auto____10702 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10702))
{return or__3548__auto____10702;
} else
{var or__3548__auto____10704 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10704))
{return or__3548__auto____10704;
} else
{var or__3548__auto____10706 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10706))
{return or__3548__auto____10706;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__10953 = (function (x,y,z){
var or__3548__auto____10708 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10708))
{return or__3548__auto____10708;
} else
{var or__3548__auto____10709 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10709))
{return or__3548__auto____10709;
} else
{var or__3548__auto____10711 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10711))
{return or__3548__auto____10711;
} else
{var or__3548__auto____10712 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10712))
{return or__3548__auto____10712;
} else
{var or__3548__auto____10713 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10713))
{return or__3548__auto____10713;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__10954 = (function() { 
var G__10967__delegate = function (x,y,z,args){
var or__3548__auto____10716 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10716))
{return or__3548__auto____10716;
} else
{return cljs.core.some.call(null,(function (p1__10484_SHARP_){
var or__3548__auto____10717 = p1.call(null,p1__10484_SHARP_);

if(cljs.core.truth_(or__3548__auto____10717))
{return or__3548__auto____10717;
} else
{return p2.call(null,p1__10484_SHARP_);
}
}),args);
}
};
var G__10967 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10967__delegate.call(this, x, y, z, args);
};
G__10967.cljs$lang$maxFixedArity = 3;
G__10967.cljs$lang$applyTo = (function (arglist__10971){
var x = cljs.core.first(arglist__10971);
var y = cljs.core.first(cljs.core.next(arglist__10971));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10971)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10971)));
return G__10967__delegate.call(this, x, y, z, args);
});
return G__10967;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__10950.call(this);
case  1 :
return sp2__10951.call(this,x);
case  2 :
return sp2__10952.call(this,x,y);
case  3 :
return sp2__10953.call(this,x,y,z);
default:
return sp2__10954.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__10954.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__10938 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__10975 = (function (){
return null;
});
var sp3__10976 = (function (x){
var or__3548__auto____10718 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10718))
{return or__3548__auto____10718;
} else
{var or__3548__auto____10719 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10719))
{return or__3548__auto____10719;
} else
{return p3.call(null,x);
}
}
});
var sp3__10977 = (function (x,y){
var or__3548__auto____10720 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10720))
{return or__3548__auto____10720;
} else
{var or__3548__auto____10721 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10721))
{return or__3548__auto____10721;
} else
{var or__3548__auto____10722 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____10722))
{return or__3548__auto____10722;
} else
{var or__3548__auto____10723 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10723))
{return or__3548__auto____10723;
} else
{var or__3548__auto____10724 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10724))
{return or__3548__auto____10724;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__10978 = (function (x,y,z){
var or__3548__auto____10725 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10725))
{return or__3548__auto____10725;
} else
{var or__3548__auto____10735 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10735))
{return or__3548__auto____10735;
} else
{var or__3548__auto____10893 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____10893))
{return or__3548__auto____10893;
} else
{var or__3548__auto____10894 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10894))
{return or__3548__auto____10894;
} else
{var or__3548__auto____10895 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10895))
{return or__3548__auto____10895;
} else
{var or__3548__auto____10897 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____10897))
{return or__3548__auto____10897;
} else
{var or__3548__auto____10898 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10898))
{return or__3548__auto____10898;
} else
{var or__3548__auto____10899 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____10899))
{return or__3548__auto____10899;
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
var sp3__10979 = (function() { 
var G__10987__delegate = function (x,y,z,args){
var or__3548__auto____10900 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10900))
{return or__3548__auto____10900;
} else
{return cljs.core.some.call(null,(function (p1__10486_SHARP_){
var or__3548__auto____10903 = p1.call(null,p1__10486_SHARP_);

if(cljs.core.truth_(or__3548__auto____10903))
{return or__3548__auto____10903;
} else
{var or__3548__auto____10905 = p2.call(null,p1__10486_SHARP_);

if(cljs.core.truth_(or__3548__auto____10905))
{return or__3548__auto____10905;
} else
{return p3.call(null,p1__10486_SHARP_);
}
}
}),args);
}
};
var G__10987 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10987__delegate.call(this, x, y, z, args);
};
G__10987.cljs$lang$maxFixedArity = 3;
G__10987.cljs$lang$applyTo = (function (arglist__10988){
var x = cljs.core.first(arglist__10988);
var y = cljs.core.first(cljs.core.next(arglist__10988));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10988)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10988)));
return G__10987__delegate.call(this, x, y, z, args);
});
return G__10987;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__10975.call(this);
case  1 :
return sp3__10976.call(this,x);
case  2 :
return sp3__10977.call(this,x,y);
case  3 :
return sp3__10978.call(this,x,y,z);
default:
return sp3__10979.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__10979.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__10939 = (function() { 
var G__10989__delegate = function (p1,p2,p3,ps){
var ps__10907 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__10996 = (function (){
return null;
});
var spn__10997 = (function (x){
return cljs.core.some.call(null,(function (p1__10487_SHARP_){
return p1__10487_SHARP_.call(null,x);
}),ps__10907);
});
var spn__10998 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10488_SHARP_){
var or__3548__auto____10912 = p1__10488_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____10912))
{return or__3548__auto____10912;
} else
{return p1__10488_SHARP_.call(null,y);
}
}),ps__10907);
});
var spn__11000 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10489_SHARP_){
var or__3548__auto____10915 = p1__10489_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____10915))
{return or__3548__auto____10915;
} else
{var or__3548__auto____10916 = p1__10489_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____10916))
{return or__3548__auto____10916;
} else
{return p1__10489_SHARP_.call(null,z);
}
}
}),ps__10907);
});
var spn__11001 = (function() { 
var G__11100__delegate = function (x,y,z,args){
var or__3548__auto____10919 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10919))
{return or__3548__auto____10919;
} else
{return cljs.core.some.call(null,(function (p1__10491_SHARP_){
return cljs.core.some.call(null,p1__10491_SHARP_,args);
}),ps__10907);
}
};
var G__11100 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11100__delegate.call(this, x, y, z, args);
};
G__11100.cljs$lang$maxFixedArity = 3;
G__11100.cljs$lang$applyTo = (function (arglist__11110){
var x = cljs.core.first(arglist__11110);
var y = cljs.core.first(cljs.core.next(arglist__11110));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11110)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11110)));
return G__11100__delegate.call(this, x, y, z, args);
});
return G__11100;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__10996.call(this);
case  1 :
return spn__10997.call(this,x);
case  2 :
return spn__10998.call(this,x,y);
case  3 :
return spn__11000.call(this,x,y,z);
default:
return spn__11001.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11001.cljs$lang$applyTo;
return spn;
})()
};
var G__10989 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10989__delegate.call(this, p1, p2, p3, ps);
};
G__10989.cljs$lang$maxFixedArity = 3;
G__10989.cljs$lang$applyTo = (function (arglist__11116){
var p1 = cljs.core.first(arglist__11116);
var p2 = cljs.core.first(cljs.core.next(arglist__11116));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11116)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11116)));
return G__10989__delegate.call(this, p1, p2, p3, ps);
});
return G__10989;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__10936.call(this,p1);
case  2 :
return some_fn__10937.call(this,p1,p2);
case  3 :
return some_fn__10938.call(this,p1,p2,p3);
default:
return some_fn__10939.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__10939.cljs$lang$applyTo;
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
var map__11270 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11138 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11138))
{var s__11141 = temp__3698__auto____11138;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11141)),map.call(null,f,cljs.core.rest.call(null,s__11141)));
} else
{return null;
}
})));
});
var map__11271 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11155 = cljs.core.seq.call(null,c1);
var s2__11157 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11159 = s1__11155;

if(cljs.core.truth_(and__3546__auto____11159))
{return s2__11157;
} else
{return and__3546__auto____11159;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11155),cljs.core.first.call(null,s2__11157)),map.call(null,f,cljs.core.rest.call(null,s1__11155),cljs.core.rest.call(null,s2__11157)));
} else
{return null;
}
})));
});
var map__11272 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11166 = cljs.core.seq.call(null,c1);
var s2__11169 = cljs.core.seq.call(null,c2);
var s3__11170 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11174 = s1__11166;

if(cljs.core.truth_(and__3546__auto____11174))
{var and__3546__auto____11181 = s2__11169;

if(cljs.core.truth_(and__3546__auto____11181))
{return s3__11170;
} else
{return and__3546__auto____11181;
}
} else
{return and__3546__auto____11174;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11166),cljs.core.first.call(null,s2__11169),cljs.core.first.call(null,s3__11170)),map.call(null,f,cljs.core.rest.call(null,s1__11166),cljs.core.rest.call(null,s2__11169),cljs.core.rest.call(null,s3__11170)));
} else
{return null;
}
})));
});
var map__11273 = (function() { 
var G__11283__delegate = function (f,c1,c2,c3,colls){
var step__11193 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11190 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11190)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11190),step.call(null,map.call(null,cljs.core.rest,ss__11190)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__10685_SHARP_){
return cljs.core.apply.call(null,f,p1__10685_SHARP_);
}),step__11193.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11283 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11283__delegate.call(this, f, c1, c2, c3, colls);
};
G__11283.cljs$lang$maxFixedArity = 4;
G__11283.cljs$lang$applyTo = (function (arglist__11292){
var f = cljs.core.first(arglist__11292);
var c1 = cljs.core.first(cljs.core.next(arglist__11292));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11292)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11292))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11292))));
return G__11283__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11283;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11270.call(this,f,c1);
case  3 :
return map__11271.call(this,f,c1,c2);
case  4 :
return map__11272.call(this,f,c1,c2,c3);
default:
return map__11273.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11273.cljs$lang$applyTo;
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
{var temp__3698__auto____11296 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11296))
{var s__11298 = temp__3698__auto____11296;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11298),take.call(null,(n - 1),cljs.core.rest.call(null,s__11298)));
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
var step__11431 = (function (n,coll){
while(true){
var s__11428 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11430 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11430))
{return s__11428;
} else
{return and__3546__auto____11430;
}
})()))
{{
var G__11436 = (n - 1);
var G__11437 = cljs.core.rest.call(null,s__11428);
n = G__11436;
coll = G__11437;
continue;
}
} else
{return s__11428;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11431.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11453 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11454 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11453.call(this,n);
case  2 :
return drop_last__11454.call(this,n,s);
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
var s__11457 = cljs.core.seq.call(null,coll);
var lead__11459 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11459))
{{
var G__11463 = cljs.core.next.call(null,s__11457);
var G__11464 = cljs.core.next.call(null,lead__11459);
s__11457 = G__11463;
lead__11459 = G__11464;
continue;
}
} else
{return s__11457;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11471 = (function (pred,coll){
while(true){
var s__11467 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11468 = s__11467;

if(cljs.core.truth_(and__3546__auto____11468))
{return pred.call(null,cljs.core.first.call(null,s__11467));
} else
{return and__3546__auto____11468;
}
})()))
{{
var G__11473 = pred;
var G__11474 = cljs.core.rest.call(null,s__11467);
pred = G__11473;
coll = G__11474;
continue;
}
} else
{return s__11467;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11471.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11483 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11483))
{var s__11486 = temp__3698__auto____11483;

return cljs.core.concat.call(null,s__11486,cycle.call(null,s__11486));
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
var repeat__11497 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11498 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11497.call(this,n);
case  2 :
return repeat__11498.call(this,n,x);
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
var repeatedly__11519 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11520 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11519.call(this,n);
case  2 :
return repeatedly__11520.call(this,n,f);
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
var interleave__11556 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11538 = cljs.core.seq.call(null,c1);
var s2__11539 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11541 = s1__11538;

if(cljs.core.truth_(and__3546__auto____11541))
{return s2__11539;
} else
{return and__3546__auto____11541;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11538),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11539),interleave.call(null,cljs.core.rest.call(null,s1__11538),cljs.core.rest.call(null,s2__11539))));
} else
{return null;
}
})));
});
var interleave__11557 = (function() { 
var G__11562__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11549 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11549)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11549),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11549)));
} else
{return null;
}
})));
};
var G__11562 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11562__delegate.call(this, c1, c2, colls);
};
G__11562.cljs$lang$maxFixedArity = 2;
G__11562.cljs$lang$applyTo = (function (arglist__11567){
var c1 = cljs.core.first(arglist__11567);
var c2 = cljs.core.first(cljs.core.next(arglist__11567));
var colls = cljs.core.rest(cljs.core.next(arglist__11567));
return G__11562__delegate.call(this, c1, c2, colls);
});
return G__11562;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11556.call(this,c1,c2);
default:
return interleave__11557.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11557.cljs$lang$applyTo;
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
var cat__11591 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11586 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11586))
{var coll__11589 = temp__3695__auto____11586;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11589),cat.call(null,cljs.core.rest.call(null,coll__11589),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11591.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11627 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11628 = (function() { 
var G__11631__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11631 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11631__delegate.call(this, f, coll, colls);
};
G__11631.cljs$lang$maxFixedArity = 2;
G__11631.cljs$lang$applyTo = (function (arglist__11635){
var f = cljs.core.first(arglist__11635);
var coll = cljs.core.first(cljs.core.next(arglist__11635));
var colls = cljs.core.rest(cljs.core.next(arglist__11635));
return G__11631__delegate.call(this, f, coll, colls);
});
return G__11631;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11627.call(this,f,coll);
default:
return mapcat__11628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11628.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11641 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11641))
{var s__11644 = temp__3698__auto____11641;

var f__11645 = cljs.core.first.call(null,s__11644);
var r__11646 = cljs.core.rest.call(null,s__11644);

if(cljs.core.truth_(pred.call(null,f__11645)))
{return cljs.core.cons.call(null,f__11645,filter.call(null,pred,r__11646));
} else
{return filter.call(null,pred,r__11646);
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
var walk__11674 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11674.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11657_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11657_SHARP_));
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
var partition__11699 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11700 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11687 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11687))
{var s__11688 = temp__3698__auto____11687;

var p__11689 = cljs.core.take.call(null,n,s__11688);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11689))))
{return cljs.core.cons.call(null,p__11689,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11688)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11701 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11696 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11696))
{var s__11697 = temp__3698__auto____11696;

var p__11698 = cljs.core.take.call(null,n,s__11697);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11698))))
{return cljs.core.cons.call(null,p__11698,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11697)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11698,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11699.call(this,n,step);
case  3 :
return partition__11700.call(this,n,step,pad);
case  4 :
return partition__11701.call(this,n,step,pad,coll);
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
var get_in__11721 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__11722 = (function (m,ks,not_found){
var sentinel__11714 = cljs.core.lookup_sentinel;
var m__11715 = m;
var ks__11716 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__11716))
{var m__11718 = cljs.core.get.call(null,m__11715,cljs.core.first.call(null,ks__11716),sentinel__11714);

if(cljs.core.truth_((sentinel__11714 === m__11718)))
{return not_found;
} else
{{
var G__11726 = sentinel__11714;
var G__11727 = m__11718;
var G__11728 = cljs.core.next.call(null,ks__11716);
sentinel__11714 = G__11726;
m__11715 = G__11727;
ks__11716 = G__11728;
continue;
}
}
} else
{return m__11715;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__11721.call(this,m,ks);
case  3 :
return get_in__11722.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__11732,v){
var vec__11733__11734 = p__11732;
var k__11736 = cljs.core.nth.call(null,vec__11733__11734,0,null);
var ks__11737 = cljs.core.nthnext.call(null,vec__11733__11734,1);

if(cljs.core.truth_(ks__11737))
{return cljs.core.assoc.call(null,m,k__11736,assoc_in.call(null,cljs.core.get.call(null,m,k__11736),ks__11737,v));
} else
{return cljs.core.assoc.call(null,m,k__11736,v);
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
var update_in__delegate = function (m,p__11742,f,args){
var vec__11743__11744 = p__11742;
var k__11745 = cljs.core.nth.call(null,vec__11743__11744,0,null);
var ks__11746 = cljs.core.nthnext.call(null,vec__11743__11744,1);

if(cljs.core.truth_(ks__11746))
{return cljs.core.assoc.call(null,m,k__11745,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__11745),ks__11746,f,args));
} else
{return cljs.core.assoc.call(null,m,k__11745,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__11745),args));
}
};
var update_in = function (m,p__11742,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__11742, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__11754){
var m = cljs.core.first(arglist__11754);
var p__11742 = cljs.core.first(cljs.core.next(arglist__11754));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11754)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11754)));
return update_in__delegate.call(this, m, p__11742, f, args);
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
var this__11788 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11874 = null;
var G__11874__11876 = (function (coll,k){
var this__11789 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__11874__11877 = (function (coll,k,not_found){
var this__11790 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__11874 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11874__11876.call(this,coll,k);
case  3 :
return G__11874__11877.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11874;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11798 = this;
var new_array__11799 = cljs.core.aclone.call(null,this__11798.array);

(new_array__11799[k] = v);
return (new cljs.core.Vector(this__11798.meta,new_array__11799));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__11994 = null;
var G__11994__11995 = (function (coll,k){
var this__11801 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11994__11997 = (function (coll,k,not_found){
var this__11802 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11994 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11994__11995.call(this,coll,k);
case  3 :
return G__11994__11997.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11994;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11809 = this;
var new_array__11810 = cljs.core.aclone.call(null,this__11809.array);

new_array__11810.push(o);
return (new cljs.core.Vector(this__11809.meta,new_array__11810));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12005 = null;
var G__12005__12006 = (function (v,f){
var this__11811 = this;
return cljs.core.ci_reduce.call(null,this__11811.array,f);
});
var G__12005__12007 = (function (v,f,start){
var this__11812 = this;
return cljs.core.ci_reduce.call(null,this__11812.array,f,start);
});
G__12005 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12005__12006.call(this,v,f);
case  3 :
return G__12005__12007.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12005;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11813 = this;
if(cljs.core.truth_((this__11813.array.length > 0)))
{var vector_seq__11815 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__11813.array.length)))
{return cljs.core.cons.call(null,(this__11813.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__11815.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11816 = this;
return this__11816.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11817 = this;
var count__11819 = this__11817.array.length;

if(cljs.core.truth_((count__11819 > 0)))
{return (this__11817.array[(count__11819 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11820 = this;
if(cljs.core.truth_((this__11820.array.length > 0)))
{var new_array__11821 = cljs.core.aclone.call(null,this__11820.array);

new_array__11821.pop();
return (new cljs.core.Vector(this__11820.meta,new_array__11821));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__11828 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11829 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11830 = this;
return (new cljs.core.Vector(meta,this__11830.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11831 = this;
return this__11831.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12022 = null;
var G__12022__12023 = (function (coll,n){
var this__11832 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11833 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11833))
{return (n < this__11832.array.length);
} else
{return and__3546__auto____11833;
}
})()))
{return (this__11832.array[n]);
} else
{return null;
}
});
var G__12022__12024 = (function (coll,n,not_found){
var this__11835 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11852 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11852))
{return (n < this__11835.array.length);
} else
{return and__3546__auto____11852;
}
})()))
{return (this__11835.array[n]);
} else
{return not_found;
}
});
G__12022 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12022__12023.call(this,coll,n);
case  3 :
return G__12022__12024.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12022;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11854 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__11854.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12028){
var args = cljs.core.seq( arglist__12028 );;
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
var this__12038 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12125 = null;
var G__12125__12126 = (function (coll,k){
var this__12040 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12125__12127 = (function (coll,k,not_found){
var this__12041 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12125 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12125__12126.call(this,coll,k);
case  3 :
return G__12125__12127.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12125;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12046 = this;
var v_pos__12047 = (this__12046.start + key);

return (new cljs.core.Subvec(this__12046.meta,cljs.core._assoc.call(null,this__12046.v,v_pos__12047,val),this__12046.start,((this__12046.end > (v_pos__12047 + 1)) ? this__12046.end : (v_pos__12047 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12131 = null;
var G__12131__12132 = (function (coll,k){
var this__12051 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12131__12133 = (function (coll,k,not_found){
var this__12052 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12131 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12131__12132.call(this,coll,k);
case  3 :
return G__12131__12133.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12131;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12053 = this;
return (new cljs.core.Subvec(this__12053.meta,cljs.core._assoc_n.call(null,this__12053.v,this__12053.end,o),this__12053.start,(this__12053.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12138 = null;
var G__12138__12140 = (function (coll,f){
var this__12055 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12138__12141 = (function (coll,f,start){
var this__12056 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12138 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12138__12140.call(this,coll,f);
case  3 :
return G__12138__12141.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12138;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12058 = this;
var subvec_seq__12092 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12058.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12058.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12092.call(null,this__12058.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12094 = this;
return (this__12094.end - this__12094.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12095 = this;
return cljs.core._nth.call(null,this__12095.v,(this__12095.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12097 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12097.start,this__12097.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12097.meta,this__12097.v,this__12097.start,(this__12097.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12102 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12105 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12107 = this;
return (new cljs.core.Subvec(meta,this__12107.v,this__12107.start,this__12107.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12110 = this;
return this__12110.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12151 = null;
var G__12151__12154 = (function (coll,n){
var this__12112 = this;
return cljs.core._nth.call(null,this__12112.v,(this__12112.start + n));
});
var G__12151__12156 = (function (coll,n,not_found){
var this__12114 = this;
return cljs.core._nth.call(null,this__12114.v,(this__12114.start + n),not_found);
});
G__12151 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12151__12154.call(this,coll,n);
case  3 :
return G__12151__12156.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12151;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12118 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12118.meta);
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
var subvec__12181 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12182 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12181.call(this,v,start);
case  3 :
return subvec__12182.call(this,v,start,end);
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
var this__12186 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12208 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12209 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12210 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12210.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12211 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12212 = this;
return cljs.core._first.call(null,this__12212.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12213 = this;
var temp__3695__auto____12214 = cljs.core.next.call(null,this__12213.front);

if(cljs.core.truth_(temp__3695__auto____12214))
{var f1__12215 = temp__3695__auto____12214;

return (new cljs.core.PersistentQueueSeq(this__12213.meta,f1__12215,this__12213.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12213.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12213.meta,this__12213.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12216 = this;
return this__12216.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12217 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12217.front,this__12217.rear));
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
var this__12283 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12287 = this;
if(cljs.core.truth_(this__12287.front))
{return (new cljs.core.PersistentQueue(this__12287.meta,(this__12287.count + 1),this__12287.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12291 = this__12287.rear;

if(cljs.core.truth_(or__3548__auto____12291))
{return or__3548__auto____12291;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12287.meta,(this__12287.count + 1),cljs.core.conj.call(null,this__12287.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12298 = this;
var rear__12299 = cljs.core.seq.call(null,this__12298.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12300 = this__12298.front;

if(cljs.core.truth_(or__3548__auto____12300))
{return or__3548__auto____12300;
} else
{return rear__12299;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12298.front,cljs.core.seq.call(null,rear__12299)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12307 = this;
return this__12307.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12308 = this;
return cljs.core._first.call(null,this__12308.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12309 = this;
if(cljs.core.truth_(this__12309.front))
{var temp__3695__auto____12312 = cljs.core.next.call(null,this__12309.front);

if(cljs.core.truth_(temp__3695__auto____12312))
{var f1__12313 = temp__3695__auto____12312;

return (new cljs.core.PersistentQueue(this__12309.meta,(this__12309.count - 1),f1__12313,this__12309.rear));
} else
{return (new cljs.core.PersistentQueue(this__12309.meta,(this__12309.count - 1),cljs.core.seq.call(null,this__12309.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12314 = this;
return cljs.core.first.call(null,this__12314.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12316 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12318 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12322 = this;
return (new cljs.core.PersistentQueue(meta,this__12322.count,this__12322.front,this__12322.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12324 = this;
return this__12324.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12329 = this;
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
var this__12349 = this;
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
var len__12505 = array.length;

var i__12506 = 0;

while(true){
if(cljs.core.truth_((i__12506 < len__12505)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12506]))))
{return i__12506;
} else
{{
var G__12507 = (i__12506 + incr);
i__12506 = G__12507;
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
var obj_map_contains_key_QMARK___12569 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12570 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12568 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12568))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12568;
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
return obj_map_contains_key_QMARK___12569.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12570.call(this,k,strobj,true_val,false_val);
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
var this__12580 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12628 = null;
var G__12628__12629 = (function (coll,k){
var this__12583 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12628__12630 = (function (coll,k,not_found){
var this__12584 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12584.strobj,(this__12584.strobj[k]),not_found);
});
G__12628 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12628__12629.call(this,coll,k);
case  3 :
return G__12628__12630.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12628;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12587 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12589 = goog.object.clone.call(null,this__12587.strobj);
var overwrite_QMARK___12590 = new_strobj__12589.hasOwnProperty(k);

(new_strobj__12589[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12590))
{return (new cljs.core.ObjMap(this__12587.meta,this__12587.keys,new_strobj__12589));
} else
{var new_keys__12595 = cljs.core.aclone.call(null,this__12587.keys);

new_keys__12595.push(k);
return (new cljs.core.ObjMap(this__12587.meta,new_keys__12595,new_strobj__12589));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12587.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12597 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12597.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12642 = null;
var G__12642__12643 = (function (coll,k){
var this__12602 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12642__12644 = (function (coll,k,not_found){
var this__12604 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12642 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12642__12643.call(this,coll,k);
case  3 :
return G__12642__12644.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12642;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12605 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12606 = this;
if(cljs.core.truth_((this__12606.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12572_SHARP_){
return cljs.core.vector.call(null,p1__12572_SHARP_,(this__12606.strobj[p1__12572_SHARP_]));
}),this__12606.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12611 = this;
return this__12611.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12612 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12617 = this;
return (new cljs.core.ObjMap(meta,this__12617.keys,this__12617.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12619 = this;
return this__12619.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12620 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12620.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12621 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12622 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12622))
{return this__12621.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12622;
}
})()))
{var new_keys__12623 = cljs.core.aclone.call(null,this__12621.keys);
var new_strobj__12624 = goog.object.clone.call(null,this__12621.strobj);

new_keys__12623.splice(cljs.core.scan_array.call(null,1,k,new_keys__12623),1);
cljs.core.js_delete.call(null,new_strobj__12624,k);
return (new cljs.core.ObjMap(this__12621.meta,new_keys__12623,new_strobj__12624));
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
var this__12716 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12846 = null;
var G__12846__12847 = (function (coll,k){
var this__12717 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12846__12848 = (function (coll,k,not_found){
var this__12720 = this;
var bucket__12724 = (this__12720.hashobj[cljs.core.hash.call(null,k)]);
var i__12726 = (cljs.core.truth_(bucket__12724)?cljs.core.scan_array.call(null,2,k,bucket__12724):null);

if(cljs.core.truth_(i__12726))
{return (bucket__12724[(i__12726 + 1)]);
} else
{return not_found;
}
});
G__12846 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12846__12847.call(this,coll,k);
case  3 :
return G__12846__12848.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12846;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12730 = this;
var h__12749 = cljs.core.hash.call(null,k);
var bucket__12751 = (this__12730.hashobj[h__12749]);

if(cljs.core.truth_(bucket__12751))
{var new_bucket__12753 = cljs.core.aclone.call(null,bucket__12751);
var new_hashobj__12755 = goog.object.clone.call(null,this__12730.hashobj);

(new_hashobj__12755[h__12749] = new_bucket__12753);
var temp__3695__auto____12762 = cljs.core.scan_array.call(null,2,k,new_bucket__12753);

if(cljs.core.truth_(temp__3695__auto____12762))
{var i__12764 = temp__3695__auto____12762;

(new_bucket__12753[(i__12764 + 1)] = v);
return (new cljs.core.HashMap(this__12730.meta,this__12730.count,new_hashobj__12755));
} else
{new_bucket__12753.push(k,v);
return (new cljs.core.HashMap(this__12730.meta,(this__12730.count + 1),new_hashobj__12755));
}
} else
{var new_hashobj__12795 = goog.object.clone.call(null,this__12730.hashobj);

(new_hashobj__12795[h__12749] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12730.meta,(this__12730.count + 1),new_hashobj__12795));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12796 = this;
var bucket__12801 = (this__12796.hashobj[cljs.core.hash.call(null,k)]);
var i__12802 = (cljs.core.truth_(bucket__12801)?cljs.core.scan_array.call(null,2,k,bucket__12801):null);

if(cljs.core.truth_(i__12802))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12862 = null;
var G__12862__12863 = (function (coll,k){
var this__12804 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12862__12864 = (function (coll,k,not_found){
var this__12805 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12862 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12862__12863.call(this,coll,k);
case  3 :
return G__12862__12864.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12862;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12806 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12807 = this;
if(cljs.core.truth_((this__12807.count > 0)))
{var hashes__12812 = cljs.core.js_keys.call(null,this__12807.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12693_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12807.hashobj[p1__12693_SHARP_])));
}),hashes__12812);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12820 = this;
return this__12820.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12823 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12825 = this;
return (new cljs.core.HashMap(meta,this__12825.count,this__12825.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12829 = this;
return this__12829.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12832 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12832.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12834 = this;
var h__12836 = cljs.core.hash.call(null,k);
var bucket__12838 = (this__12834.hashobj[h__12836]);
var i__12840 = (cljs.core.truth_(bucket__12838)?cljs.core.scan_array.call(null,2,k,bucket__12838):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12840)))
{return coll;
} else
{var new_hashobj__12842 = goog.object.clone.call(null,this__12834.hashobj);

if(cljs.core.truth_((3 > bucket__12838.length)))
{cljs.core.js_delete.call(null,new_hashobj__12842,h__12836);
} else
{var new_bucket__12844 = cljs.core.aclone.call(null,bucket__12838);

new_bucket__12844.splice(i__12840,2);
(new_hashobj__12842[h__12836] = new_bucket__12844);
}
return (new cljs.core.HashMap(this__12834.meta,(this__12834.count - 1),new_hashobj__12842));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12885 = ks.length;

var i__12887 = 0;
var out__12888 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12887 < len__12885)))
{{
var G__12891 = (i__12887 + 1);
var G__12892 = cljs.core.assoc.call(null,out__12888,(ks[i__12887]),(vs[i__12887]));
i__12887 = G__12891;
out__12888 = G__12892;
continue;
}
} else
{return out__12888;
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
var in$__12895 = cljs.core.seq.call(null,keyvals);
var out__12896 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__12895))
{{
var G__12901 = cljs.core.nnext.call(null,in$__12895);
var G__12902 = cljs.core.assoc.call(null,out__12896,cljs.core.first.call(null,in$__12895),cljs.core.second.call(null,in$__12895));
in$__12895 = G__12901;
out__12896 = G__12902;
continue;
}
} else
{return out__12896;
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
hash_map.cljs$lang$applyTo = (function (arglist__12905){
var keyvals = cljs.core.seq( arglist__12905 );;
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
{return cljs.core.reduce.call(null,(function (p1__12913_SHARP_,p2__12914_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____12923 = p1__12913_SHARP_;

if(cljs.core.truth_(or__3548__auto____12923))
{return or__3548__auto____12923;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__12914_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__12928){
var maps = cljs.core.seq( arglist__12928 );;
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
{var merge_entry__12941 = (function (m,e){
var k__12939 = cljs.core.first.call(null,e);
var v__12940 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__12939)))
{return cljs.core.assoc.call(null,m,k__12939,f.call(null,cljs.core.get.call(null,m,k__12939),v__12940));
} else
{return cljs.core.assoc.call(null,m,k__12939,v__12940);
}
});
var merge2__12944 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__12941,(function (){var or__3548__auto____12943 = m1;

if(cljs.core.truth_(or__3548__auto____12943))
{return or__3548__auto____12943;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__12944,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__12960){
var f = cljs.core.first(arglist__12960);
var maps = cljs.core.rest(arglist__12960);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__12965 = cljs.core.ObjMap.fromObject([],{});
var keys__12966 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__12966))
{var key__12967 = cljs.core.first.call(null,keys__12966);
var entry__12968 = cljs.core.get.call(null,map,key__12967,"﷐'user/not-found");

{
var G__12979 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__12968,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__12965,key__12967,entry__12968):ret__12965);
var G__12980 = cljs.core.next.call(null,keys__12966);
ret__12965 = G__12979;
keys__12966 = G__12980;
continue;
}
} else
{return ret__12965;
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
var this__12997 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13044 = null;
var G__13044__13045 = (function (coll,v){
var this__13002 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13044__13046 = (function (coll,v,not_found){
var this__13004 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13004.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13044 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13044__13045.call(this,coll,v);
case  3 :
return G__13044__13046.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13044;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13051 = null;
var G__13051__13052 = (function (coll,k){
var this__13005 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13051__13053 = (function (coll,k,not_found){
var this__13007 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13051 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13051__13052.call(this,coll,k);
case  3 :
return G__13051__13053.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13051;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13008 = this;
return (new cljs.core.Set(this__13008.meta,cljs.core.assoc.call(null,this__13008.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13011 = this;
return cljs.core.keys.call(null,this__13011.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13014 = this;
return (new cljs.core.Set(this__13014.meta,cljs.core.dissoc.call(null,this__13014.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13020 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13026 = this;
var and__3546__auto____13027 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13027))
{var and__3546__auto____13029 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13029))
{return cljs.core.every_QMARK_.call(null,(function (p1__12963_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__12963_SHARP_);
}),other);
} else
{return and__3546__auto____13029;
}
} else
{return and__3546__auto____13027;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13033 = this;
return (new cljs.core.Set(meta,this__13033.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13034 = this;
return this__13034.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13039 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13039.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13122 = cljs.core.seq.call(null,coll);
var out__13123 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13122))))
{{
var G__13130 = cljs.core.rest.call(null,in$__13122);
var G__13131 = cljs.core.conj.call(null,out__13123,cljs.core.first.call(null,in$__13122));
in$__13122 = G__13130;
out__13123 = G__13131;
continue;
}
} else
{return out__13123;
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
{var n__13139 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13188 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13188))
{var e__13189 = temp__3695__auto____13188;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13189));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13139,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13116_SHARP_){
var temp__3695__auto____13196 = cljs.core.find.call(null,smap,p1__13116_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13196))
{var e__13198 = temp__3695__auto____13196;

return cljs.core.second.call(null,e__13198);
} else
{return p1__13116_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13212 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13205,seen){
while(true){
var vec__13206__13207 = p__13205;
var f__13208 = cljs.core.nth.call(null,vec__13206__13207,0,null);
var xs__13209 = vec__13206__13207;

var temp__3698__auto____13210 = cljs.core.seq.call(null,xs__13209);

if(cljs.core.truth_(temp__3698__auto____13210))
{var s__13211 = temp__3698__auto____13210;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13208)))
{{
var G__13219 = cljs.core.rest.call(null,s__13211);
var G__13220 = seen;
p__13205 = G__13219;
seen = G__13220;
continue;
}
} else
{return cljs.core.cons.call(null,f__13208,step.call(null,cljs.core.rest.call(null,s__13211),cljs.core.conj.call(null,seen,f__13208)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13212.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13241 = cljs.core.Vector.fromArray([]);
var s__13242 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13242)))
{{
var G__13245 = cljs.core.conj.call(null,ret__13241,cljs.core.first.call(null,s__13242));
var G__13246 = cljs.core.next.call(null,s__13242);
ret__13241 = G__13245;
s__13242 = G__13246;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13241);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13253 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13253))
{return or__3548__auto____13253;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13254 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13254 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13254 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13258 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13258))
{return or__3548__auto____13258;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13259 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13259 > -1)))
{return cljs.core.subs.call(null,x,2,i__13259);
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
var map__13264 = cljs.core.ObjMap.fromObject([],{});
var ks__13265 = cljs.core.seq.call(null,keys);
var vs__13266 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13268 = ks__13265;

if(cljs.core.truth_(and__3546__auto____13268))
{return vs__13266;
} else
{return and__3546__auto____13268;
}
})()))
{{
var G__13271 = cljs.core.assoc.call(null,map__13264,cljs.core.first.call(null,ks__13265),cljs.core.first.call(null,vs__13266));
var G__13272 = cljs.core.next.call(null,ks__13265);
var G__13273 = cljs.core.next.call(null,vs__13266);
map__13264 = G__13271;
ks__13265 = G__13272;
vs__13266 = G__13273;
continue;
}
} else
{return map__13264;
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
var max_key__13282 = (function (k,x){
return x;
});
var max_key__13283 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13284 = (function() { 
var G__13287__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13262_SHARP_,p2__13263_SHARP_){
return max_key.call(null,k,p1__13262_SHARP_,p2__13263_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13287 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13287__delegate.call(this, k, x, y, more);
};
G__13287.cljs$lang$maxFixedArity = 3;
G__13287.cljs$lang$applyTo = (function (arglist__13291){
var k = cljs.core.first(arglist__13291);
var x = cljs.core.first(cljs.core.next(arglist__13291));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13291)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13291)));
return G__13287__delegate.call(this, k, x, y, more);
});
return G__13287;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13282.call(this,k,x);
case  3 :
return max_key__13283.call(this,k,x,y);
default:
return max_key__13284.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13284.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13304 = (function (k,x){
return x;
});
var min_key__13305 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13306 = (function() { 
var G__13336__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13276_SHARP_,p2__13277_SHARP_){
return min_key.call(null,k,p1__13276_SHARP_,p2__13277_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13336 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13336__delegate.call(this, k, x, y, more);
};
G__13336.cljs$lang$maxFixedArity = 3;
G__13336.cljs$lang$applyTo = (function (arglist__13340){
var k = cljs.core.first(arglist__13340);
var x = cljs.core.first(cljs.core.next(arglist__13340));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13340)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13340)));
return G__13336__delegate.call(this, k, x, y, more);
});
return G__13336;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13304.call(this,k,x);
case  3 :
return min_key__13305.call(this,k,x,y);
default:
return min_key__13306.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13306.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13354 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13355 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13350 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13350))
{var s__13351 = temp__3698__auto____13350;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13351),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13351)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13354.call(this,n,step);
case  3 :
return partition_all__13355.call(this,n,step,coll);
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
var temp__3698__auto____13371 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13371))
{var s__13372 = temp__3698__auto____13371;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13372))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13372),take_while.call(null,pred,cljs.core.rest.call(null,s__13372)));
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
var this__13394 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13398 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13469 = null;
var G__13469__13470 = (function (rng,f){
var this__13402 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13469__13471 = (function (rng,f,s){
var this__13405 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13469 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13469__13470.call(this,rng,f);
case  3 :
return G__13469__13471.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13469;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13408 = this;
var comp__13411 = (cljs.core.truth_((this__13408.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13411.call(null,this__13408.start,this__13408.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13412 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13412.end - this__13412.start) / this__13412.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13419 = this;
return this__13419.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13423 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13423.meta,(this__13423.start + this__13423.step),this__13423.end,this__13423.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13430 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13433 = this;
return (new cljs.core.Range(meta,this__13433.start,this__13433.end,this__13433.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13437 = this;
return this__13437.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13492 = null;
var G__13492__13493 = (function (rng,n){
var this__13440 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13440.start + (n * this__13440.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13443 = (this__13440.start > this__13440.end);

if(cljs.core.truth_(and__3546__auto____13443))
{return cljs.core._EQ_.call(null,this__13440.step,0);
} else
{return and__3546__auto____13443;
}
})()))
{return this__13440.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13492__13494 = (function (rng,n,not_found){
var this__13450 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13450.start + (n * this__13450.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13453 = (this__13450.start > this__13450.end);

if(cljs.core.truth_(and__3546__auto____13453))
{return cljs.core._EQ_.call(null,this__13450.step,0);
} else
{return and__3546__auto____13453;
}
})()))
{return this__13450.start;
} else
{return not_found;
}
}
});
G__13492 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13492__13493.call(this,rng,n);
case  3 :
return G__13492__13494.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13492;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13459 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13459.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13517 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13518 = (function (end){
return range.call(null,0,end,1);
});
var range__13519 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13520 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13517.call(this);
case  1 :
return range__13518.call(this,start);
case  2 :
return range__13519.call(this,start,end);
case  3 :
return range__13520.call(this,start,end,step);
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
var temp__3698__auto____13541 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13541))
{var s__13543 = temp__3698__auto____13541;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13543),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13543)));
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
var temp__3698__auto____13561 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13561))
{var s__13563 = temp__3698__auto____13561;

var fst__13564 = cljs.core.first.call(null,s__13563);
var fv__13565 = f.call(null,fst__13564);
var run__13601 = cljs.core.cons.call(null,fst__13564,cljs.core.take_while.call(null,(function (p1__13549_SHARP_){
return cljs.core._EQ_.call(null,fv__13565,f.call(null,p1__13549_SHARP_));
}),cljs.core.next.call(null,s__13563)));

return cljs.core.cons.call(null,run__13601,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13601),s__13563))));
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
var reductions__13653 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13641 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13641))
{var s__13642 = temp__3695__auto____13641;

return reductions.call(null,f,cljs.core.first.call(null,s__13642),cljs.core.rest.call(null,s__13642));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13654 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13647 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13647))
{var s__13649 = temp__3698__auto____13647;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13649)),cljs.core.rest.call(null,s__13649));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13653.call(this,f,init);
case  3 :
return reductions__13654.call(this,f,init,coll);
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
var juxt__13694 = (function (f){
return (function() {
var G__13699 = null;
var G__13699__13700 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13699__13701 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13699__13702 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13699__13703 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13699__13704 = (function() { 
var G__13706__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13706 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13706__delegate.call(this, x, y, z, args);
};
G__13706.cljs$lang$maxFixedArity = 3;
G__13706.cljs$lang$applyTo = (function (arglist__13707){
var x = cljs.core.first(arglist__13707);
var y = cljs.core.first(cljs.core.next(arglist__13707));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13707)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13707)));
return G__13706__delegate.call(this, x, y, z, args);
});
return G__13706;
})()
;
G__13699 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13699__13700.call(this);
case  1 :
return G__13699__13701.call(this,x);
case  2 :
return G__13699__13702.call(this,x,y);
case  3 :
return G__13699__13703.call(this,x,y,z);
default:
return G__13699__13704.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13699.cljs$lang$maxFixedArity = 3;
G__13699.cljs$lang$applyTo = G__13699__13704.cljs$lang$applyTo;
return G__13699;
})()
});
var juxt__13695 = (function (f,g){
return (function() {
var G__13709 = null;
var G__13709__13710 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13709__13711 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13709__13712 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13709__13713 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13709__13714 = (function() { 
var G__13716__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13716 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13716__delegate.call(this, x, y, z, args);
};
G__13716.cljs$lang$maxFixedArity = 3;
G__13716.cljs$lang$applyTo = (function (arglist__13718){
var x = cljs.core.first(arglist__13718);
var y = cljs.core.first(cljs.core.next(arglist__13718));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13718)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13718)));
return G__13716__delegate.call(this, x, y, z, args);
});
return G__13716;
})()
;
G__13709 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13709__13710.call(this);
case  1 :
return G__13709__13711.call(this,x);
case  2 :
return G__13709__13712.call(this,x,y);
case  3 :
return G__13709__13713.call(this,x,y,z);
default:
return G__13709__13714.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13709.cljs$lang$maxFixedArity = 3;
G__13709.cljs$lang$applyTo = G__13709__13714.cljs$lang$applyTo;
return G__13709;
})()
});
var juxt__13696 = (function (f,g,h){
return (function() {
var G__13727 = null;
var G__13727__13729 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13727__13730 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13727__13731 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13727__13732 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13727__13733 = (function() { 
var G__13736__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13736 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13736__delegate.call(this, x, y, z, args);
};
G__13736.cljs$lang$maxFixedArity = 3;
G__13736.cljs$lang$applyTo = (function (arglist__13737){
var x = cljs.core.first(arglist__13737);
var y = cljs.core.first(cljs.core.next(arglist__13737));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13737)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13737)));
return G__13736__delegate.call(this, x, y, z, args);
});
return G__13736;
})()
;
G__13727 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13727__13729.call(this);
case  1 :
return G__13727__13730.call(this,x);
case  2 :
return G__13727__13731.call(this,x,y);
case  3 :
return G__13727__13732.call(this,x,y,z);
default:
return G__13727__13733.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13727.cljs$lang$maxFixedArity = 3;
G__13727.cljs$lang$applyTo = G__13727__13733.cljs$lang$applyTo;
return G__13727;
})()
});
var juxt__13697 = (function() { 
var G__13739__delegate = function (f,g,h,fs){
var fs__13686 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13740 = null;
var G__13740__13742 = (function (){
return cljs.core.reduce.call(null,(function (p1__13624_SHARP_,p2__13625_SHARP_){
return cljs.core.conj.call(null,p1__13624_SHARP_,p2__13625_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13686);
});
var G__13740__13743 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13626_SHARP_,p2__13627_SHARP_){
return cljs.core.conj.call(null,p1__13626_SHARP_,p2__13627_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13686);
});
var G__13740__13744 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13631_SHARP_,p2__13632_SHARP_){
return cljs.core.conj.call(null,p1__13631_SHARP_,p2__13632_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13686);
});
var G__13740__13745 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13633_SHARP_,p2__13634_SHARP_){
return cljs.core.conj.call(null,p1__13633_SHARP_,p2__13634_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13686);
});
var G__13740__13746 = (function() { 
var G__13751__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13635_SHARP_,p2__13636_SHARP_){
return cljs.core.conj.call(null,p1__13635_SHARP_,cljs.core.apply.call(null,p2__13636_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13686);
};
var G__13751 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13751__delegate.call(this, x, y, z, args);
};
G__13751.cljs$lang$maxFixedArity = 3;
G__13751.cljs$lang$applyTo = (function (arglist__13753){
var x = cljs.core.first(arglist__13753);
var y = cljs.core.first(cljs.core.next(arglist__13753));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13753)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13753)));
return G__13751__delegate.call(this, x, y, z, args);
});
return G__13751;
})()
;
G__13740 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13740__13742.call(this);
case  1 :
return G__13740__13743.call(this,x);
case  2 :
return G__13740__13744.call(this,x,y);
case  3 :
return G__13740__13745.call(this,x,y,z);
default:
return G__13740__13746.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13740.cljs$lang$maxFixedArity = 3;
G__13740.cljs$lang$applyTo = G__13740__13746.cljs$lang$applyTo;
return G__13740;
})()
};
var G__13739 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13739__delegate.call(this, f, g, h, fs);
};
G__13739.cljs$lang$maxFixedArity = 3;
G__13739.cljs$lang$applyTo = (function (arglist__13754){
var f = cljs.core.first(arglist__13754);
var g = cljs.core.first(cljs.core.next(arglist__13754));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13754)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13754)));
return G__13739__delegate.call(this, f, g, h, fs);
});
return G__13739;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13694.call(this,f);
case  2 :
return juxt__13695.call(this,f,g);
case  3 :
return juxt__13696.call(this,f,g,h);
default:
return juxt__13697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13697.cljs$lang$applyTo;
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
var dorun__13758 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13761 = cljs.core.next.call(null,coll);
coll = G__13761;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13759 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13757 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13757))
{return (n > 0);
} else
{return and__3546__auto____13757;
}
})()))
{{
var G__13763 = (n - 1);
var G__13765 = cljs.core.next.call(null,coll);
n = G__13763;
coll = G__13765;
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
return dorun__13758.call(this,n);
case  2 :
return dorun__13759.call(this,n,coll);
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
var doall__13769 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13770 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13769.call(this,n);
case  2 :
return doall__13770.call(this,n,coll);
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
var matches__13773 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13773),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13773),1)))
{return cljs.core.first.call(null,matches__13773);
} else
{return cljs.core.vec.call(null,matches__13773);
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
var matches__13774 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__13774)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13774),1)))
{return cljs.core.first.call(null,matches__13774);
} else
{return cljs.core.vec.call(null,matches__13774);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13779 = cljs.core.re_find.call(null,re,s);
var match_idx__13781 = s.search(re);
var match_str__13782 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__13779))?cljs.core.first.call(null,match_data__13779):match_data__13779);
var post_match__13785 = cljs.core.subs.call(null,s,(match_idx__13781 + cljs.core.count.call(null,match_str__13782)));

if(cljs.core.truth_(match_data__13779))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13779,re_seq.call(null,re,post_match__13785));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__13822_SHARP_){
return print_one.call(null,p1__13822_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____13850 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____13850))
{var and__3546__auto____13858 = (function (){var x__445__auto____13854 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13855 = x__445__auto____13854;

if(cljs.core.truth_(and__3546__auto____13855))
{var and__3546__auto____13856 = x__445__auto____13854.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____13856))
{return cljs.core.not.call(null,x__445__auto____13854.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____13856;
}
} else
{return and__3546__auto____13855;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____13854);
}
})();

if(cljs.core.truth_(and__3546__auto____13858))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____13858;
}
} else
{return and__3546__auto____13850;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____13861 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13862 = x__445__auto____13861;

if(cljs.core.truth_(and__3546__auto____13862))
{var and__3546__auto____13863 = x__445__auto____13861.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____13863))
{return cljs.core.not.call(null,x__445__auto____13861.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____13863;
}
} else
{return and__3546__auto____13862;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____13861);
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
var first_obj__13880 = cljs.core.first.call(null,objs);
var sb__13882 = (new goog.string.StringBuffer());

var G__13883__13884 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13883__13884))
{var obj__13886 = cljs.core.first.call(null,G__13883__13884);
var G__13883__13887 = G__13883__13884;

while(true){
if(cljs.core.truth_((obj__13886 === first_obj__13880)))
{} else
{sb__13882.append(" ");
}
var G__13888__13889 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13886,opts));

if(cljs.core.truth_(G__13888__13889))
{var string__13892 = cljs.core.first.call(null,G__13888__13889);
var G__13888__13893 = G__13888__13889;

while(true){
sb__13882.append(string__13892);
var temp__3698__auto____13900 = cljs.core.next.call(null,G__13888__13893);

if(cljs.core.truth_(temp__3698__auto____13900))
{var G__13888__13901 = temp__3698__auto____13900;

{
var G__13911 = cljs.core.first.call(null,G__13888__13901);
var G__13912 = G__13888__13901;
string__13892 = G__13911;
G__13888__13893 = G__13912;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13902 = cljs.core.next.call(null,G__13883__13887);

if(cljs.core.truth_(temp__3698__auto____13902))
{var G__13883__13903 = temp__3698__auto____13902;

{
var G__13914 = cljs.core.first.call(null,G__13883__13903);
var G__13916 = G__13883__13903;
obj__13886 = G__13914;
G__13883__13887 = G__13916;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__13882);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__13921 = cljs.core.first.call(null,objs);

var G__13923__13925 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13923__13925))
{var obj__13926 = cljs.core.first.call(null,G__13923__13925);
var G__13923__13928 = G__13923__13925;

while(true){
if(cljs.core.truth_((obj__13926 === first_obj__13921)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__13930__13933 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13926,opts));

if(cljs.core.truth_(G__13930__13933))
{var string__13935 = cljs.core.first.call(null,G__13930__13933);
var G__13930__13936 = G__13930__13933;

while(true){
cljs.core.string_print.call(null,string__13935);
var temp__3698__auto____13939 = cljs.core.next.call(null,G__13930__13936);

if(cljs.core.truth_(temp__3698__auto____13939))
{var G__13930__13941 = temp__3698__auto____13939;

{
var G__13953 = cljs.core.first.call(null,G__13930__13941);
var G__13954 = G__13930__13941;
string__13935 = G__13953;
G__13930__13936 = G__13954;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13944 = cljs.core.next.call(null,G__13923__13928);

if(cljs.core.truth_(temp__3698__auto____13944))
{var G__13923__13945 = temp__3698__auto____13944;

{
var G__13959 = cljs.core.first.call(null,G__13923__13945);
var G__13960 = G__13923__13945;
obj__13926 = G__13959;
G__13923__13928 = G__13960;
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
pr_str.cljs$lang$applyTo = (function (arglist__13970){
var objs = cljs.core.seq( arglist__13970 );;
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
pr.cljs$lang$applyTo = (function (arglist__13987){
var objs = cljs.core.seq( arglist__13987 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__13996){
var objs = cljs.core.seq( arglist__13996 );;
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
println.cljs$lang$applyTo = (function (arglist__14013){
var objs = cljs.core.seq( arglist__14013 );;
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
prn.cljs$lang$applyTo = (function (arglist__14029){
var objs = cljs.core.seq( arglist__14029 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14034 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14034,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14043 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14043))
{var nspc__14045 = temp__3698__auto____14043;

return cljs.core.str.call(null,nspc__14045,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14046 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14046))
{var nspc__14049 = temp__3698__auto____14046;

return cljs.core.str.call(null,nspc__14049,"/");
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
var pr_pair__14113 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14113,"{",", ","}",opts,coll);
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
var this__14158 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14160 = this;
var G__14163__14165 = cljs.core.seq.call(null,this__14160.watches);

if(cljs.core.truth_(G__14163__14165))
{var G__14167__14170 = cljs.core.first.call(null,G__14163__14165);
var vec__14169__14171 = G__14167__14170;
var key__14173 = cljs.core.nth.call(null,vec__14169__14171,0,null);
var f__14174 = cljs.core.nth.call(null,vec__14169__14171,1,null);
var G__14163__14252 = G__14163__14165;

var G__14167__14253 = G__14167__14170;
var G__14163__14254 = G__14163__14252;

while(true){
var vec__14256__14259 = G__14167__14253;
var key__14260 = cljs.core.nth.call(null,vec__14256__14259,0,null);
var f__14261 = cljs.core.nth.call(null,vec__14256__14259,1,null);
var G__14163__14262 = G__14163__14254;

f__14261.call(null,key__14260,this$,oldval,newval);
var temp__3698__auto____14264 = cljs.core.next.call(null,G__14163__14262);

if(cljs.core.truth_(temp__3698__auto____14264))
{var G__14163__14267 = temp__3698__auto____14264;

{
var G__14324 = cljs.core.first.call(null,G__14163__14267);
var G__14325 = G__14163__14267;
G__14167__14253 = G__14324;
G__14163__14254 = G__14325;
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
var this__14270 = this;
return this$.watches = cljs.core.assoc.call(null,this__14270.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14310 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14310.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14312 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14312.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14316 = this;
return this__14316.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14319 = this;
return this__14319.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14322 = this;
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
var atom__14346 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14347 = (function() { 
var G__14355__delegate = function (x,p__14334){
var map__14336__14337 = p__14334;
var map__14336__14338 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14336__14337))?cljs.core.apply.call(null,cljs.core.hash_map,map__14336__14337):map__14336__14337);
var validator__14339 = cljs.core.get.call(null,map__14336__14338,"﷐'validator");
var meta__14340 = cljs.core.get.call(null,map__14336__14338,"﷐'meta");

return (new cljs.core.Atom(x,meta__14340,validator__14339,null));
};
var G__14355 = function (x,var_args){
var p__14334 = null;
if (goog.isDef(var_args)) {
  p__14334 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14355__delegate.call(this, x, p__14334);
};
G__14355.cljs$lang$maxFixedArity = 1;
G__14355.cljs$lang$applyTo = (function (arglist__14368){
var x = cljs.core.first(arglist__14368);
var p__14334 = cljs.core.rest(arglist__14368);
return G__14355__delegate.call(this, x, p__14334);
});
return G__14355;
})()
;
atom = function(x,var_args){
var p__14334 = var_args;
switch(arguments.length){
case  1 :
return atom__14346.call(this,x);
default:
return atom__14347.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14347.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14374 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14374))
{var validate__14375 = temp__3698__auto____14374;

if(cljs.core.truth_(validate__14375.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14376 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14376,new_value);
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
var swap_BANG___14398 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14400 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14402 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14404 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14406 = (function() { 
var G__14411__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14411 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14411__delegate.call(this, a, f, x, y, z, more);
};
G__14411.cljs$lang$maxFixedArity = 5;
G__14411.cljs$lang$applyTo = (function (arglist__14413){
var a = cljs.core.first(arglist__14413);
var f = cljs.core.first(cljs.core.next(arglist__14413));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14413)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14413))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14413)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14413)))));
return G__14411__delegate.call(this, a, f, x, y, z, more);
});
return G__14411;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14398.call(this,a,f);
case  3 :
return swap_BANG___14400.call(this,a,f,x);
case  4 :
return swap_BANG___14402.call(this,a,f,x,y);
case  5 :
return swap_BANG___14404.call(this,a,f,x,y,z);
default:
return swap_BANG___14406.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14406.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14488){
var iref = cljs.core.first(arglist__14488);
var f = cljs.core.first(cljs.core.next(arglist__14488));
var args = cljs.core.rest(cljs.core.next(arglist__14488));
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
var gensym__14569 = (function (){
return gensym.call(null,"G__");
});
var gensym__14570 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14569.call(this);
case  1 :
return gensym__14570.call(this,prefix_string);
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
var this__14578 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14578.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14579 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14579.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14579.state,this__14579.f);
}
return cljs.core.deref.call(null,this__14579.state);
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
delay.cljs$lang$applyTo = (function (arglist__14594){
var body = cljs.core.seq( arglist__14594 );;
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
var map__14609__14611 = options;
var map__14609__14614 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14609__14611))?cljs.core.apply.call(null,cljs.core.hash_map,map__14609__14611):map__14609__14611);
var keywordize_keys__14615 = cljs.core.get.call(null,map__14609__14614,"﷐'keywordize-keys");
var keyfn__14617 = (cljs.core.truth_(keywordize_keys__14615)?cljs.core.keyword:cljs.core.str);
var f__14627 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14625 = (function iter__14621(s__14622){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14622__14623 = s__14622;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14622__14623)))
{var k__14624 = cljs.core.first.call(null,s__14622__14623);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14617.call(null,k__14624),thisfn.call(null,(x[k__14624]))]),iter__14621.call(null,cljs.core.rest.call(null,s__14622__14623)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14625.call(null,cljs.core.js_keys.call(null,x));
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

return f__14627.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14633){
var x = cljs.core.first(arglist__14633);
var options = cljs.core.rest(arglist__14633);
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
var mem__14634 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14640__delegate = function (args){
var temp__3695__auto____14635 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14634),args);

if(cljs.core.truth_(temp__3695__auto____14635))
{var v__14637 = temp__3695__auto____14635;

return v__14637;
} else
{var ret__14639 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14634,cljs.core.assoc,args,ret__14639);
return ret__14639;
}
};
var G__14640 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14640__delegate.call(this, args);
};
G__14640.cljs$lang$maxFixedArity = 0;
G__14640.cljs$lang$applyTo = (function (arglist__14641){
var args = cljs.core.seq( arglist__14641 );;
return G__14640__delegate.call(this, args);
});
return G__14640;
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
var trampoline__14655 = (function (f){
while(true){
var ret__14642 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14642)))
{{
var G__14658 = ret__14642;
f = G__14658;
continue;
}
} else
{return ret__14642;
}
break;
}
});
var trampoline__14656 = (function() { 
var G__14659__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14659 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14659__delegate.call(this, f, args);
};
G__14659.cljs$lang$maxFixedArity = 1;
G__14659.cljs$lang$applyTo = (function (arglist__14661){
var f = cljs.core.first(arglist__14661);
var args = cljs.core.rest(arglist__14661);
return G__14659__delegate.call(this, f, args);
});
return G__14659;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14655.call(this,f);
default:
return trampoline__14656.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14656.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14670 = (function (){
return rand.call(null,1);
});
var rand__14671 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14670.call(this);
case  1 :
return rand__14671.call(this,n);
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
var k__14684 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14684,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14684,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14751 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14753 = (function (h,child,parent){
var or__3548__auto____14701 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14701))
{return or__3548__auto____14701;
} else
{var or__3548__auto____14705 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14705))
{return or__3548__auto____14705;
} else
{var and__3546__auto____14710 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14710))
{var and__3546__auto____14714 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14714))
{var and__3546__auto____14722 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14722))
{var ret__14727 = true;
var i__14728 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14732 = cljs.core.not.call(null,ret__14727);

if(cljs.core.truth_(or__3548__auto____14732))
{return or__3548__auto____14732;
} else
{return cljs.core._EQ_.call(null,i__14728,cljs.core.count.call(null,parent));
}
})()))
{return ret__14727;
} else
{{
var G__14763 = isa_QMARK_.call(null,h,child.call(null,i__14728),parent.call(null,i__14728));
var G__14764 = (i__14728 + 1);
ret__14727 = G__14763;
i__14728 = G__14764;
continue;
}
}
break;
}
} else
{return and__3546__auto____14722;
}
} else
{return and__3546__auto____14714;
}
} else
{return and__3546__auto____14710;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14751.call(this,h,child);
case  3 :
return isa_QMARK___14753.call(this,h,child,parent);
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
var parents__14772 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14773 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14772.call(this,h);
case  2 :
return parents__14773.call(this,h,tag);
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
var ancestors__14869 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14870 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14869.call(this,h);
case  2 :
return ancestors__14870.call(this,h,tag);
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
var descendants__14886 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14887 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14886.call(this,h);
case  2 :
return descendants__14887.call(this,h,tag);
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
var derive__14934 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14935 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14909 = "﷐'parents".call(null,h);
var td__14911 = "﷐'descendants".call(null,h);
var ta__14912 = "﷐'ancestors".call(null,h);
var tf__14921 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14929 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14909.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14912.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14912.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14909,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14921.call(null,"﷐'ancestors".call(null,h),tag,td__14911,parent,ta__14912),"﷐'descendants":tf__14921.call(null,"﷐'descendants".call(null,h),parent,ta__14912,tag,td__14911)});
})());

if(cljs.core.truth_(or__3548__auto____14929))
{return or__3548__auto____14929;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14934.call(this,h,tag);
case  3 :
return derive__14935.call(this,h,tag,parent);
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
var underive__14977 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__14978 = (function (h,tag,parent){
var parentMap__14967 = "﷐'parents".call(null,h);
var childsParents__14969 = (cljs.core.truth_(parentMap__14967.call(null,tag))?cljs.core.disj.call(null,parentMap__14967.call(null,tag),parent):cljs.core.set([]));
var newParents__14970 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14969))?cljs.core.assoc.call(null,parentMap__14967,tag,childsParents__14969):cljs.core.dissoc.call(null,parentMap__14967,tag));
var deriv_seq__14972 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14893_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14893_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14893_SHARP_),cljs.core.second.call(null,p1__14893_SHARP_)));
}),cljs.core.seq.call(null,newParents__14970)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__14967.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14896_SHARP_,p2__14897_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14896_SHARP_,p2__14897_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14972));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__14977.call(this,h,tag);
case  3 :
return underive__14978.call(this,h,tag,parent);
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
{var or__3548__auto____15042 = (function (){var ps__15039 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15039) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15039),prefer_table)))
{} else
{}
{
var G__15056 = cljs.core.rest.call(null,ps__15039);
ps__15039 = G__15056;
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
{var or__3548__auto____15045 = (function (){var ps__15044 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15044) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15044),y,prefer_table)))
{} else
{}
{
var G__15057 = cljs.core.rest.call(null,ps__15044);
ps__15044 = G__15057;
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
var or__3548__auto____15061 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15061))
{return or__3548__auto____15061;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15078 = cljs.core.reduce.call(null,(function (be,p__15067){
var vec__15069__15070 = p__15067;
var k__15072 = cljs.core.nth.call(null,vec__15069__15070,0,null);
var ___15073 = cljs.core.nth.call(null,vec__15069__15070,1,null);
var e__15074 = vec__15069__15070;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15072)))
{var be2__15077 = (cljs.core.truth_((function (){var or__3548__auto____15076 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15076))
{return or__3548__auto____15076;
} else
{return cljs.core.dominates.call(null,k__15072,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15074:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15077),k__15072,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15072," and ",cljs.core.first.call(null,be2__15077),", and neither is preferred")));
}
return be2__15077;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15078))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15078));
return cljs.core.second.call(null,best_entry__15078);
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
if(cljs.core.truth_((function (){var and__3546__auto____15106 = mf;

if(cljs.core.truth_(and__3546__auto____15106))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15106;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15110 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15110))
{return or__3548__auto____15110;
} else
{var or__3548__auto____15111 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15111))
{return or__3548__auto____15111;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15112 = mf;

if(cljs.core.truth_(and__3546__auto____15112))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15112;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15113 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15113))
{return or__3548__auto____15113;
} else
{var or__3548__auto____15114 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15114))
{return or__3548__auto____15114;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15118 = mf;

if(cljs.core.truth_(and__3546__auto____15118))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15118;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15120 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15120))
{return or__3548__auto____15120;
} else
{var or__3548__auto____15123 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15123))
{return or__3548__auto____15123;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15127 = mf;

if(cljs.core.truth_(and__3546__auto____15127))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15127;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15129 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15129))
{return or__3548__auto____15129;
} else
{var or__3548__auto____15130 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15130))
{return or__3548__auto____15130;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15199 = mf;

if(cljs.core.truth_(and__3546__auto____15199))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15199;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15201 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15201))
{return or__3548__auto____15201;
} else
{var or__3548__auto____15203 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15203))
{return or__3548__auto____15203;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15207 = mf;

if(cljs.core.truth_(and__3546__auto____15207))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15207;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15211 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15211))
{return or__3548__auto____15211;
} else
{var or__3548__auto____15212 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15212))
{return or__3548__auto____15212;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15213 = mf;

if(cljs.core.truth_(and__3546__auto____15213))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15213;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15214 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15214))
{return or__3548__auto____15214;
} else
{var or__3548__auto____15215 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15215))
{return or__3548__auto____15215;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15222 = mf;

if(cljs.core.truth_(and__3546__auto____15222))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15222;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15223 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15223))
{return or__3548__auto____15223;
} else
{var or__3548__auto____15224 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15224))
{return or__3548__auto____15224;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15273 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15274 = cljs.core._get_method.call(null,mf,dispatch_val__15273);

if(cljs.core.truth_(target_fn__15274))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15273)));
}
return cljs.core.apply.call(null,target_fn__15274,args);
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
var this__15285 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15287 = this;
cljs.core.swap_BANG_.call(null,this__15287.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15287.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15287.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15287.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15301 = this;
cljs.core.swap_BANG_.call(null,this__15301.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15301.method_cache,this__15301.method_table,this__15301.cached_hierarchy,this__15301.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15304 = this;
cljs.core.swap_BANG_.call(null,this__15304.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15304.method_cache,this__15304.method_table,this__15304.cached_hierarchy,this__15304.hierarchy);
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
{var target_fn__15310 = temp__3695__auto____15309;

return target_fn__15310;
} else
{var temp__3695__auto____15311 = cljs.core.find_and_cache_best_method.call(null,this__15307.name,dispatch_val,this__15307.hierarchy,this__15307.method_table,this__15307.prefer_table,this__15307.method_cache,this__15307.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15311))
{var target_fn__15313 = temp__3695__auto____15311;

return target_fn__15313;
} else
{return cljs.core.deref.call(null,this__15307.method_table).call(null,this__15307.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15314 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15314.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15314.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15314.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15314.method_cache,this__15314.method_table,this__15314.cached_hierarchy,this__15314.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15318 = this;
return cljs.core.deref.call(null,this__15318.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15320 = this;
return cljs.core.deref.call(null,this__15320.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15321 = this;
return cljs.core.do_dispatch.call(null,mf,this__15321.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15333__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15333 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15333__delegate.call(this, _, args);
};
G__15333.cljs$lang$maxFixedArity = 1;
G__15333.cljs$lang$applyTo = (function (arglist__15349){
var _ = cljs.core.first(arglist__15349);
var args = cljs.core.rest(arglist__15349);
return G__15333__delegate.call(this, _, args);
});
return G__15333;
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
