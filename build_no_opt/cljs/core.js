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
var or__3548__auto____7258 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7258))
{return or__3548__auto____7258;
} else
{var or__3548__auto____7259 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7259))
{return or__3548__auto____7259;
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
var _invoke__7660 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7296 = this$;

if(cljs.core.truth_(and__3546__auto____7296))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7296;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7301 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7301))
{return or__3548__auto____7301;
} else
{var or__3548__auto____7303 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7303))
{return or__3548__auto____7303;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7661 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7329 = this$;

if(cljs.core.truth_(and__3546__auto____7329))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7329;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7334 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7334))
{return or__3548__auto____7334;
} else
{var or__3548__auto____7337 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7337))
{return or__3548__auto____7337;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7662 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7340 = this$;

if(cljs.core.truth_(and__3546__auto____7340))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7340;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7496 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7496))
{return or__3548__auto____7496;
} else
{var or__3548__auto____7553 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7553))
{return or__3548__auto____7553;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7663 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7554 = this$;

if(cljs.core.truth_(and__3546__auto____7554))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7554;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7555 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7555))
{return or__3548__auto____7555;
} else
{var or__3548__auto____7556 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7556))
{return or__3548__auto____7556;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7664 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7557 = this$;

if(cljs.core.truth_(and__3546__auto____7557))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7557;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7558 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7558))
{return or__3548__auto____7558;
} else
{var or__3548__auto____7559 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7559))
{return or__3548__auto____7559;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7665 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7560 = this$;

if(cljs.core.truth_(and__3546__auto____7560))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7560;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7561 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7561))
{return or__3548__auto____7561;
} else
{var or__3548__auto____7562 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7562))
{return or__3548__auto____7562;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7666 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7563 = this$;

if(cljs.core.truth_(and__3546__auto____7563))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7563;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7564 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7564))
{return or__3548__auto____7564;
} else
{var or__3548__auto____7565 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7565))
{return or__3548__auto____7565;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7667 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7566 = this$;

if(cljs.core.truth_(and__3546__auto____7566))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7566;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7567 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7567))
{return or__3548__auto____7567;
} else
{var or__3548__auto____7568 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7568))
{return or__3548__auto____7568;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7668 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7569 = this$;

if(cljs.core.truth_(and__3546__auto____7569))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7569;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7571 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7571))
{return or__3548__auto____7571;
} else
{var or__3548__auto____7573 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7573))
{return or__3548__auto____7573;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7669 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7624 = this$;

if(cljs.core.truth_(and__3546__auto____7624))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7624;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7625 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7625))
{return or__3548__auto____7625;
} else
{var or__3548__auto____7626 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7626))
{return or__3548__auto____7626;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7670 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7627 = this$;

if(cljs.core.truth_(and__3546__auto____7627))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7627;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7628 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7628))
{return or__3548__auto____7628;
} else
{var or__3548__auto____7629 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7629))
{return or__3548__auto____7629;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7671 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7630 = this$;

if(cljs.core.truth_(and__3546__auto____7630))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7630;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7631 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7631))
{return or__3548__auto____7631;
} else
{var or__3548__auto____7632 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7632))
{return or__3548__auto____7632;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7672 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7633 = this$;

if(cljs.core.truth_(and__3546__auto____7633))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7633;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7634 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7634))
{return or__3548__auto____7634;
} else
{var or__3548__auto____7635 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7635))
{return or__3548__auto____7635;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7673 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7636 = this$;

if(cljs.core.truth_(and__3546__auto____7636))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7636;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7637 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7637))
{return or__3548__auto____7637;
} else
{var or__3548__auto____7638 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7638))
{return or__3548__auto____7638;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7674 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7639 = this$;

if(cljs.core.truth_(and__3546__auto____7639))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7639;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7640 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7640))
{return or__3548__auto____7640;
} else
{var or__3548__auto____7641 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7641))
{return or__3548__auto____7641;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7675 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7642 = this$;

if(cljs.core.truth_(and__3546__auto____7642))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7642;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7676 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7645 = this$;

if(cljs.core.truth_(and__3546__auto____7645))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7645;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7677 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7648 = this$;

if(cljs.core.truth_(and__3546__auto____7648))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7648;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7678 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7651 = this$;

if(cljs.core.truth_(and__3546__auto____7651))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7651;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7679 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7654 = this$;

if(cljs.core.truth_(and__3546__auto____7654))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7654;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7655 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7655))
{return or__3548__auto____7655;
} else
{var or__3548__auto____7656 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7656))
{return or__3548__auto____7656;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7680 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7657 = this$;

if(cljs.core.truth_(and__3546__auto____7657))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7657;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7658 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7658))
{return or__3548__auto____7658;
} else
{var or__3548__auto____7659 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7659))
{return or__3548__auto____7659;
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
return _invoke__7660.call(this,this$);
case  2 :
return _invoke__7661.call(this,this$,a);
case  3 :
return _invoke__7662.call(this,this$,a,b);
case  4 :
return _invoke__7663.call(this,this$,a,b,c);
case  5 :
return _invoke__7664.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7665.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7666.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7667.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7668.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7669.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7670.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7671.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7672.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7673.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7674.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7675.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7676.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7677.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7678.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7679.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7680.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7715 = coll;

if(cljs.core.truth_(and__3546__auto____7715))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7715;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7717 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7717))
{return or__3548__auto____7717;
} else
{var or__3548__auto____7719 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7719))
{return or__3548__auto____7719;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7721 = coll;

if(cljs.core.truth_(and__3546__auto____7721))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7721;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7722 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7722))
{return or__3548__auto____7722;
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
if(cljs.core.truth_((function (){var and__3546__auto____7729 = coll;

if(cljs.core.truth_(and__3546__auto____7729))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7729;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7731 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7731))
{return or__3548__auto____7731;
} else
{var or__3548__auto____7732 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7732))
{return or__3548__auto____7732;
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
var _nth__7745 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7736 = coll;

if(cljs.core.truth_(and__3546__auto____7736))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7736;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7737 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7737))
{return or__3548__auto____7737;
} else
{var or__3548__auto____7738 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7738))
{return or__3548__auto____7738;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7746 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7740 = coll;

if(cljs.core.truth_(and__3546__auto____7740))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7740;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7742 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7742))
{return or__3548__auto____7742;
} else
{var or__3548__auto____7744 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7744))
{return or__3548__auto____7744;
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
return _nth__7745.call(this,coll,n);
case  3 :
return _nth__7746.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7758 = coll;

if(cljs.core.truth_(and__3546__auto____7758))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7758;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7761 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7761))
{return or__3548__auto____7761;
} else
{var or__3548__auto____7763 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7763))
{return or__3548__auto____7763;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7767 = coll;

if(cljs.core.truth_(and__3546__auto____7767))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7767;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7771 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7771))
{return or__3548__auto____7771;
} else
{var or__3548__auto____7772 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7772))
{return or__3548__auto____7772;
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
var _lookup__7821 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7779 = o;

if(cljs.core.truth_(and__3546__auto____7779))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7779;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7804 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{var or__3548__auto____7807 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7807))
{return or__3548__auto____7807;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7822 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7810 = o;

if(cljs.core.truth_(and__3546__auto____7810))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7810;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7816 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7816))
{return or__3548__auto____7816;
} else
{var or__3548__auto____7818 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7818))
{return or__3548__auto____7818;
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
return _lookup__7821.call(this,o,k);
case  3 :
return _lookup__7822.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7836 = coll;

if(cljs.core.truth_(and__3546__auto____7836))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7836;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7843 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7843))
{return or__3548__auto____7843;
} else
{var or__3548__auto____7845 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7848 = coll;

if(cljs.core.truth_(and__3546__auto____7848))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7848;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7849 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7849))
{return or__3548__auto____7849;
} else
{var or__3548__auto____7851 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7851))
{return or__3548__auto____7851;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7865 = coll;

if(cljs.core.truth_(and__3546__auto____7865))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7865;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7866 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7866))
{return or__3548__auto____7866;
} else
{var or__3548__auto____7867 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7867))
{return or__3548__auto____7867;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7876 = coll;

if(cljs.core.truth_(and__3546__auto____7876))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7876;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7884 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7884))
{return or__3548__auto____7884;
} else
{var or__3548__auto____7887 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7887))
{return or__3548__auto____7887;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7891 = coll;

if(cljs.core.truth_(and__3546__auto____7891))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7891;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7894 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7894))
{return or__3548__auto____7894;
} else
{var or__3548__auto____7895 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7895))
{return or__3548__auto____7895;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7897 = coll;

if(cljs.core.truth_(and__3546__auto____7897))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7897;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7900 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7900))
{return or__3548__auto____7900;
} else
{var or__3548__auto____7902 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7902))
{return or__3548__auto____7902;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7917 = coll;

if(cljs.core.truth_(and__3546__auto____7917))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7917;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7920 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7920))
{return or__3548__auto____7920;
} else
{var or__3548__auto____7921 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7921))
{return or__3548__auto____7921;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7929 = o;

if(cljs.core.truth_(and__3546__auto____7929))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7929;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7931 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7931))
{return or__3548__auto____7931;
} else
{var or__3548__auto____7932 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7932))
{return or__3548__auto____7932;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7936 = o;

if(cljs.core.truth_(and__3546__auto____7936))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7936;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7938 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7938))
{return or__3548__auto____7938;
} else
{var or__3548__auto____7941 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7941))
{return or__3548__auto____7941;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7945 = o;

if(cljs.core.truth_(and__3546__auto____7945))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7945;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7973 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7973))
{return or__3548__auto____7973;
} else
{var or__3548__auto____7974 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7974))
{return or__3548__auto____7974;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8046 = o;

if(cljs.core.truth_(and__3546__auto____8046))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8046;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8049 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{var or__3548__auto____8051 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8051))
{return or__3548__auto____8051;
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
var _reduce__8072 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8060 = coll;

if(cljs.core.truth_(and__3546__auto____8060))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8060;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8061 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8061))
{return or__3548__auto____8061;
} else
{var or__3548__auto____8063 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8063))
{return or__3548__auto____8063;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8073 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8065 = coll;

if(cljs.core.truth_(and__3546__auto____8065))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8065;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8067 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8067))
{return or__3548__auto____8067;
} else
{var or__3548__auto____8069 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8069))
{return or__3548__auto____8069;
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
return _reduce__8072.call(this,coll,f);
case  3 :
return _reduce__8073.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8082 = o;

if(cljs.core.truth_(and__3546__auto____8082))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8082;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8085 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8085))
{return or__3548__auto____8085;
} else
{var or__3548__auto____8087 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8093 = o;

if(cljs.core.truth_(and__3546__auto____8093))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8093;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8096 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8096))
{return or__3548__auto____8096;
} else
{var or__3548__auto____8098 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8098))
{return or__3548__auto____8098;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8102 = o;

if(cljs.core.truth_(and__3546__auto____8102))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8102;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8104 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8104))
{return or__3548__auto____8104;
} else
{var or__3548__auto____8107 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8107))
{return or__3548__auto____8107;
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
if(cljs.core.truth_((function (){var and__3546__auto____8111 = o;

if(cljs.core.truth_(and__3546__auto____8111))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8111;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8114 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8114))
{return or__3548__auto____8114;
} else
{var or__3548__auto____8116 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8116))
{return or__3548__auto____8116;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8122 = d;

if(cljs.core.truth_(and__3546__auto____8122))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8122;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8125 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8125))
{return or__3548__auto____8125;
} else
{var or__3548__auto____8138 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8138))
{return or__3548__auto____8138;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8143 = this$;

if(cljs.core.truth_(and__3546__auto____8143))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8143;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8146 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8146))
{return or__3548__auto____8146;
} else
{var or__3548__auto____8148 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8148))
{return or__3548__auto____8148;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8152 = this$;

if(cljs.core.truth_(and__3546__auto____8152))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8152;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8154 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8154))
{return or__3548__auto____8154;
} else
{var or__3548__auto____8155 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8155))
{return or__3548__auto____8155;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8159 = this$;

if(cljs.core.truth_(and__3546__auto____8159))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8159;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8162 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8162))
{return or__3548__auto____8162;
} else
{var or__3548__auto____8172 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8172))
{return or__3548__auto____8172;
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
var G__8203 = null;
var G__8203__8204 = (function (o,k){
return null;
});
var G__8203__8205 = (function (o,k,not_found){
return not_found;
});
G__8203 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8203__8204.call(this,o,k);
case  3 :
return G__8203__8205.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8203;
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
var G__8211 = null;
var G__8211__8212 = (function (_,f){
return f.call(null);
});
var G__8211__8213 = (function (_,f,start){
return start;
});
G__8211 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8211__8212.call(this,_,f);
case  3 :
return G__8211__8213.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8211;
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
var G__8229 = null;
var G__8229__8230 = (function (_,n){
return null;
});
var G__8229__8231 = (function (_,n,not_found){
return not_found;
});
G__8229 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8229__8230.call(this,_,n);
case  3 :
return G__8229__8231.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8229;
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
var ci_reduce__8265 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8251 = cljs.core._nth.call(null,cicoll,0);
var n__8252 = 1;

while(true){
if(cljs.core.truth_((n__8252 < cljs.core._count.call(null,cicoll))))
{{
var G__8271 = f.call(null,val__8251,cljs.core._nth.call(null,cicoll,n__8252));
var G__8272 = (n__8252 + 1);
val__8251 = G__8271;
n__8252 = G__8272;
continue;
}
} else
{return val__8251;
}
break;
}
}
});
var ci_reduce__8266 = (function (cicoll,f,val){
var val__8257 = val;
var n__8258 = 0;

while(true){
if(cljs.core.truth_((n__8258 < cljs.core._count.call(null,cicoll))))
{{
var G__8273 = f.call(null,val__8257,cljs.core._nth.call(null,cicoll,n__8258));
var G__8274 = (n__8258 + 1);
val__8257 = G__8273;
n__8258 = G__8274;
continue;
}
} else
{return val__8257;
}
break;
}
});
var ci_reduce__8267 = (function (cicoll,f,val,idx){
var val__8261 = val;
var n__8262 = idx;

while(true){
if(cljs.core.truth_((n__8262 < cljs.core._count.call(null,cicoll))))
{{
var G__8275 = f.call(null,val__8261,cljs.core._nth.call(null,cicoll,n__8262));
var G__8276 = (n__8262 + 1);
val__8261 = G__8275;
n__8262 = G__8276;
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
return ci_reduce__8265.call(this,cicoll,f);
case  3 :
return ci_reduce__8266.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8267.call(this,cicoll,f,val,idx);
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
var this__8289 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8338 = null;
var G__8338__8339 = (function (_,f){
var this__8291 = this;
return cljs.core.ci_reduce.call(null,this__8291.a,f,(this__8291.a[this__8291.i]),(this__8291.i + 1));
});
var G__8338__8340 = (function (_,f,start){
var this__8294 = this;
return cljs.core.ci_reduce.call(null,this__8294.a,f,start,this__8294.i);
});
G__8338 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8338__8339.call(this,_,f);
case  3 :
return G__8338__8340.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8338;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8298 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8300 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8342 = null;
var G__8342__8343 = (function (coll,n){
var this__8302 = this;
var i__8305 = (n + this__8302.i);

if(cljs.core.truth_((i__8305 < this__8302.a.length)))
{return (this__8302.a[i__8305]);
} else
{return null;
}
});
var G__8342__8344 = (function (coll,n,not_found){
var this__8307 = this;
var i__8308 = (n + this__8307.i);

if(cljs.core.truth_((i__8308 < this__8307.a.length)))
{return (this__8307.a[i__8308]);
} else
{return not_found;
}
});
G__8342 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8342__8343.call(this,coll,n);
case  3 :
return G__8342__8344.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8342;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8318 = this;
return (this__8318.a.length - this__8318.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8319 = this;
return (this__8319.a[this__8319.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8322 = this;
if(cljs.core.truth_(((this__8322.i + 1) < this__8322.a.length)))
{return (new cljs.core.IndexedSeq(this__8322.a,(this__8322.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8331 = this;
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
var G__8368 = null;
var G__8368__8369 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8368__8370 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8368 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8368__8369.call(this,array,f);
case  3 :
return G__8368__8370.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8368;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8378 = null;
var G__8378__8379 = (function (array,k){
return (array[k]);
});
var G__8378__8380 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8378 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8378__8379.call(this,array,k);
case  3 :
return G__8378__8380.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8378;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8388 = null;
var G__8388__8389 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8388__8390 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8388 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8388__8389.call(this,array,n);
case  3 :
return G__8388__8390.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8388;
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
var temp__3698__auto____8402 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8402))
{var s__8403 = temp__3698__auto____8402;

return cljs.core._first.call(null,s__8403);
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
var G__8481 = cljs.core.next.call(null,s);
s = G__8481;
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
var s__8485 = cljs.core.seq.call(null,x);
var n__8486 = 0;

while(true){
if(cljs.core.truth_(s__8485))
{{
var G__8492 = cljs.core.next.call(null,s__8485);
var G__8493 = (n__8486 + 1);
s__8485 = G__8492;
n__8486 = G__8493;
continue;
}
} else
{return n__8486;
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
var conj__8494 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8495 = (function() { 
var G__8497__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8498 = conj.call(null,coll,x);
var G__8499 = cljs.core.first.call(null,xs);
var G__8500 = cljs.core.next.call(null,xs);
coll = G__8498;
x = G__8499;
xs = G__8500;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8497 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8497__delegate.call(this, coll, x, xs);
};
G__8497.cljs$lang$maxFixedArity = 2;
G__8497.cljs$lang$applyTo = (function (arglist__8501){
var coll = cljs.core.first(arglist__8501);
var x = cljs.core.first(cljs.core.next(arglist__8501));
var xs = cljs.core.rest(cljs.core.next(arglist__8501));
return G__8497__delegate.call(this, coll, x, xs);
});
return G__8497;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8494.call(this,coll,x);
default:
return conj__8495.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8495.cljs$lang$applyTo;
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
var nth__8513 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8514 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8513.call(this,coll,n);
case  3 :
return nth__8514.call(this,coll,n,not_found);
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
var get__8529 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8531 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8529.call(this,o,k);
case  3 :
return get__8531.call(this,o,k,not_found);
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
var assoc__8539 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8540 = (function() { 
var G__8546__delegate = function (coll,k,v,kvs){
while(true){
var ret__8537 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8547 = ret__8537;
var G__8548 = cljs.core.first.call(null,kvs);
var G__8549 = cljs.core.second.call(null,kvs);
var G__8550 = cljs.core.nnext.call(null,kvs);
coll = G__8547;
k = G__8548;
v = G__8549;
kvs = G__8550;
continue;
}
} else
{return ret__8537;
}
break;
}
};
var G__8546 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8546__delegate.call(this, coll, k, v, kvs);
};
G__8546.cljs$lang$maxFixedArity = 3;
G__8546.cljs$lang$applyTo = (function (arglist__8555){
var coll = cljs.core.first(arglist__8555);
var k = cljs.core.first(cljs.core.next(arglist__8555));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8555)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8555)));
return G__8546__delegate.call(this, coll, k, v, kvs);
});
return G__8546;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8539.call(this,coll,k,v);
default:
return assoc__8540.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8540.cljs$lang$applyTo;
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
var dissoc__8558 = (function (coll){
return coll;
});
var dissoc__8559 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8560 = (function() { 
var G__8562__delegate = function (coll,k,ks){
while(true){
var ret__8557 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8563 = ret__8557;
var G__8564 = cljs.core.first.call(null,ks);
var G__8565 = cljs.core.next.call(null,ks);
coll = G__8563;
k = G__8564;
ks = G__8565;
continue;
}
} else
{return ret__8557;
}
break;
}
};
var G__8562 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8562__delegate.call(this, coll, k, ks);
};
G__8562.cljs$lang$maxFixedArity = 2;
G__8562.cljs$lang$applyTo = (function (arglist__8568){
var coll = cljs.core.first(arglist__8568);
var k = cljs.core.first(cljs.core.next(arglist__8568));
var ks = cljs.core.rest(cljs.core.next(arglist__8568));
return G__8562__delegate.call(this, coll, k, ks);
});
return G__8562;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8558.call(this,coll);
case  2 :
return dissoc__8559.call(this,coll,k);
default:
return dissoc__8560.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8560.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8574 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8575 = x__445__auto____8574;

if(cljs.core.truth_(and__3546__auto____8575))
{var and__3546__auto____8580 = x__445__auto____8574.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8580))
{return cljs.core.not.call(null,x__445__auto____8574.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8580;
}
} else
{return and__3546__auto____8575;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8574);
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
var disj__8598 = (function (coll){
return coll;
});
var disj__8599 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8600 = (function() { 
var G__8602__delegate = function (coll,k,ks){
while(true){
var ret__8597 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8603 = ret__8597;
var G__8604 = cljs.core.first.call(null,ks);
var G__8605 = cljs.core.next.call(null,ks);
coll = G__8603;
k = G__8604;
ks = G__8605;
continue;
}
} else
{return ret__8597;
}
break;
}
};
var G__8602 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8602__delegate.call(this, coll, k, ks);
};
G__8602.cljs$lang$maxFixedArity = 2;
G__8602.cljs$lang$applyTo = (function (arglist__8608){
var coll = cljs.core.first(arglist__8608);
var k = cljs.core.first(cljs.core.next(arglist__8608));
var ks = cljs.core.rest(cljs.core.next(arglist__8608));
return G__8602__delegate.call(this, coll, k, ks);
});
return G__8602;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8598.call(this,coll);
case  2 :
return disj__8599.call(this,coll,k);
default:
return disj__8600.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8600.cljs$lang$applyTo;
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
{var x__445__auto____8612 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8613 = x__445__auto____8612;

if(cljs.core.truth_(and__3546__auto____8613))
{var and__3546__auto____8616 = x__445__auto____8612.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8616))
{return cljs.core.not.call(null,x__445__auto____8612.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8616;
}
} else
{return and__3546__auto____8613;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8612);
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
{var x__445__auto____8623 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8625 = x__445__auto____8623;

if(cljs.core.truth_(and__3546__auto____8625))
{var and__3546__auto____8626 = x__445__auto____8623.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8626))
{return cljs.core.not.call(null,x__445__auto____8623.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8626;
}
} else
{return and__3546__auto____8625;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8623);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8635 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8637 = x__445__auto____8635;

if(cljs.core.truth_(and__3546__auto____8637))
{var and__3546__auto____8638 = x__445__auto____8635.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8638))
{return cljs.core.not.call(null,x__445__auto____8635.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8638;
}
} else
{return and__3546__auto____8637;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8635);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8641 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8642 = x__445__auto____8641;

if(cljs.core.truth_(and__3546__auto____8642))
{var and__3546__auto____8643 = x__445__auto____8641.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8643))
{return cljs.core.not.call(null,x__445__auto____8641.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8643;
}
} else
{return and__3546__auto____8642;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8641);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8655 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8658 = x__445__auto____8655;

if(cljs.core.truth_(and__3546__auto____8658))
{var and__3546__auto____8663 = x__445__auto____8655.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8663))
{return cljs.core.not.call(null,x__445__auto____8655.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8663;
}
} else
{return and__3546__auto____8658;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8655);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8669 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8670 = x__445__auto____8669;

if(cljs.core.truth_(and__3546__auto____8670))
{var and__3546__auto____8673 = x__445__auto____8669.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8673))
{return cljs.core.not.call(null,x__445__auto____8669.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8673;
}
} else
{return and__3546__auto____8670;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8669);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8683 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8684 = x__445__auto____8683;

if(cljs.core.truth_(and__3546__auto____8684))
{var and__3546__auto____8685 = x__445__auto____8683.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8685))
{return cljs.core.not.call(null,x__445__auto____8683.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8685;
}
} else
{return and__3546__auto____8684;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8683);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8716 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8716.push(key);
}));
return keys__8716;
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
{var x__445__auto____8737 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8738 = x__445__auto____8737;

if(cljs.core.truth_(and__3546__auto____8738))
{var and__3546__auto____8740 = x__445__auto____8737.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8740))
{return cljs.core.not.call(null,x__445__auto____8737.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8740;
}
} else
{return and__3546__auto____8738;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8737);
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
var and__3546__auto____8744 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8744))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8745 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8745))
{return or__3548__auto____8745;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8744;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8746 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8746))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8746;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8752 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8752))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8752;
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
var and__3546__auto____8843 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8843))
{return (n == n.toFixed());
} else
{return and__3546__auto____8843;
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
if(cljs.core.truth_((function (){var and__3546__auto____8852 = coll;

if(cljs.core.truth_(and__3546__auto____8852))
{var and__3546__auto____8867 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8867))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8867;
}
} else
{return and__3546__auto____8852;
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
var distinct_QMARK___8890 = (function (x){
return true;
});
var distinct_QMARK___8892 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8893 = (function() { 
var G__8941__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8881 = cljs.core.set([y,x]);
var xs__8882 = more;

while(true){
var x__8883 = cljs.core.first.call(null,xs__8882);
var etc__8885 = cljs.core.next.call(null,xs__8882);

if(cljs.core.truth_(xs__8882))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8881,x__8883)))
{return false;
} else
{{
var G__8944 = cljs.core.conj.call(null,s__8881,x__8883);
var G__8945 = etc__8885;
s__8881 = G__8944;
xs__8882 = G__8945;
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
var G__8941 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8941__delegate.call(this, x, y, more);
};
G__8941.cljs$lang$maxFixedArity = 2;
G__8941.cljs$lang$applyTo = (function (arglist__8946){
var x = cljs.core.first(arglist__8946);
var y = cljs.core.first(cljs.core.next(arglist__8946));
var more = cljs.core.rest(cljs.core.next(arglist__8946));
return G__8941__delegate.call(this, x, y, more);
});
return G__8941;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8890.call(this,x);
case  2 :
return distinct_QMARK___8892.call(this,x,y);
default:
return distinct_QMARK___8893.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8893.cljs$lang$applyTo;
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
var r__8957 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8957)))
{return r__8957;
} else
{if(cljs.core.truth_(r__8957))
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
var sort__8966 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8967 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8965 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8965,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8965);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8966.call(this,comp);
case  2 :
return sort__8967.call(this,comp,coll);
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
var sort_by__9077 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9079 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9077.call(this,keyfn,comp);
case  3 :
return sort_by__9079.call(this,keyfn,comp,coll);
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
var reduce__9087 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9088 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9087.call(this,f,val);
case  3 :
return reduce__9088.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9099 = (function (f,coll){
var temp__3695__auto____9095 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9095))
{var s__9096 = temp__3695__auto____9095;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9096),cljs.core.next.call(null,s__9096));
} else
{return f.call(null);
}
});
var seq_reduce__9100 = (function (f,val,coll){
var val__9097 = val;
var coll__9098 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9098))
{{
var G__9103 = f.call(null,val__9097,cljs.core.first.call(null,coll__9098));
var G__9104 = cljs.core.next.call(null,coll__9098);
val__9097 = G__9103;
coll__9098 = G__9104;
continue;
}
} else
{return val__9097;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9099.call(this,f,val);
case  3 :
return seq_reduce__9100.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9111 = null;
var G__9111__9112 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9111__9113 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9111 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9111__9112.call(this,coll,f);
case  3 :
return G__9111__9113.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9111;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9121 = (function (){
return 0;
});
var _PLUS___9122 = (function (x){
return x;
});
var _PLUS___9123 = (function (x,y){
return (x + y);
});
var _PLUS___9124 = (function() { 
var G__9126__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9126 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9126__delegate.call(this, x, y, more);
};
G__9126.cljs$lang$maxFixedArity = 2;
G__9126.cljs$lang$applyTo = (function (arglist__9129){
var x = cljs.core.first(arglist__9129);
var y = cljs.core.first(cljs.core.next(arglist__9129));
var more = cljs.core.rest(cljs.core.next(arglist__9129));
return G__9126__delegate.call(this, x, y, more);
});
return G__9126;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9121.call(this);
case  1 :
return _PLUS___9122.call(this,x);
case  2 :
return _PLUS___9123.call(this,x,y);
default:
return _PLUS___9124.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9124.cljs$lang$applyTo;
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
var ___9138 = (function (x){
return (- x);
});
var ___9139 = (function (x,y){
return (x - y);
});
var ___9140 = (function() { 
var G__9144__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
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
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9138.call(this,x);
case  2 :
return ___9139.call(this,x,y);
default:
return ___9140.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9140.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9157 = (function (){
return 1;
});
var _STAR___9158 = (function (x){
return x;
});
var _STAR___9159 = (function (x,y){
return (x * y);
});
var _STAR___9160 = (function() { 
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
return _STAR___9157.call(this);
case  1 :
return _STAR___9158.call(this,x);
case  2 :
return _STAR___9159.call(this,x,y);
default:
return _STAR___9160.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9160.cljs$lang$applyTo;
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
var _SLASH___9177 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9178 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9179 = (function() { 
var G__9181__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9181 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9181__delegate.call(this, x, y, more);
};
G__9181.cljs$lang$maxFixedArity = 2;
G__9181.cljs$lang$applyTo = (function (arglist__9182){
var x = cljs.core.first(arglist__9182);
var y = cljs.core.first(cljs.core.next(arglist__9182));
var more = cljs.core.rest(cljs.core.next(arglist__9182));
return G__9181__delegate.call(this, x, y, more);
});
return G__9181;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9177.call(this,x);
case  2 :
return _SLASH___9178.call(this,x,y);
default:
return _SLASH___9179.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9179.cljs$lang$applyTo;
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
var _LT___9194 = (function (x){
return true;
});
var _LT___9195 = (function (x,y){
return (x < y);
});
var _LT___9196 = (function() { 
var G__9203__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9204 = y;
var G__9205 = cljs.core.first.call(null,more);
var G__9206 = cljs.core.next.call(null,more);
x = G__9204;
y = G__9205;
more = G__9206;
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
var G__9203 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9203__delegate.call(this, x, y, more);
};
G__9203.cljs$lang$maxFixedArity = 2;
G__9203.cljs$lang$applyTo = (function (arglist__9209){
var x = cljs.core.first(arglist__9209);
var y = cljs.core.first(cljs.core.next(arglist__9209));
var more = cljs.core.rest(cljs.core.next(arglist__9209));
return G__9203__delegate.call(this, x, y, more);
});
return G__9203;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9194.call(this,x);
case  2 :
return _LT___9195.call(this,x,y);
default:
return _LT___9196.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9196.cljs$lang$applyTo;
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
var _LT__EQ___9212 = (function (x){
return true;
});
var _LT__EQ___9213 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9214 = (function() { 
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
G__9216.cljs$lang$applyTo = (function (arglist__9220){
var x = cljs.core.first(arglist__9220);
var y = cljs.core.first(cljs.core.next(arglist__9220));
var more = cljs.core.rest(cljs.core.next(arglist__9220));
return G__9216__delegate.call(this, x, y, more);
});
return G__9216;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9212.call(this,x);
case  2 :
return _LT__EQ___9213.call(this,x,y);
default:
return _LT__EQ___9214.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9214.cljs$lang$applyTo;
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
var _GT___9227 = (function (x){
return true;
});
var _GT___9228 = (function (x,y){
return (x > y);
});
var _GT___9229 = (function() { 
var G__9231__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9237 = y;
var G__9238 = cljs.core.first.call(null,more);
var G__9239 = cljs.core.next.call(null,more);
x = G__9237;
y = G__9238;
more = G__9239;
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
var G__9231 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9231__delegate.call(this, x, y, more);
};
G__9231.cljs$lang$maxFixedArity = 2;
G__9231.cljs$lang$applyTo = (function (arglist__9241){
var x = cljs.core.first(arglist__9241);
var y = cljs.core.first(cljs.core.next(arglist__9241));
var more = cljs.core.rest(cljs.core.next(arglist__9241));
return G__9231__delegate.call(this, x, y, more);
});
return G__9231;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9227.call(this,x);
case  2 :
return _GT___9228.call(this,x,y);
default:
return _GT___9229.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9229.cljs$lang$applyTo;
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
var _GT__EQ___9247 = (function (x){
return true;
});
var _GT__EQ___9248 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9249 = (function() { 
var G__9252__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9253 = y;
var G__9254 = cljs.core.first.call(null,more);
var G__9255 = cljs.core.next.call(null,more);
x = G__9253;
y = G__9254;
more = G__9255;
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
var G__9252 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9252__delegate.call(this, x, y, more);
};
G__9252.cljs$lang$maxFixedArity = 2;
G__9252.cljs$lang$applyTo = (function (arglist__9257){
var x = cljs.core.first(arglist__9257);
var y = cljs.core.first(cljs.core.next(arglist__9257));
var more = cljs.core.rest(cljs.core.next(arglist__9257));
return G__9252__delegate.call(this, x, y, more);
});
return G__9252;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9247.call(this,x);
case  2 :
return _GT__EQ___9248.call(this,x,y);
default:
return _GT__EQ___9249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9249.cljs$lang$applyTo;
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
var max__9266 = (function (x){
return x;
});
var max__9267 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9268 = (function() { 
var G__9271__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
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
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9266.call(this,x);
case  2 :
return max__9267.call(this,x,y);
default:
return max__9268.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9268.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9273 = (function (x){
return x;
});
var min__9274 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9275 = (function() { 
var G__9281__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9281 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9281__delegate.call(this, x, y, more);
};
G__9281.cljs$lang$maxFixedArity = 2;
G__9281.cljs$lang$applyTo = (function (arglist__9370){
var x = cljs.core.first(arglist__9370);
var y = cljs.core.first(cljs.core.next(arglist__9370));
var more = cljs.core.rest(cljs.core.next(arglist__9370));
return G__9281__delegate.call(this, x, y, more);
});
return G__9281;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9273.call(this,x);
case  2 :
return min__9274.call(this,x,y);
default:
return min__9275.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9275.cljs$lang$applyTo;
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
var rem__9385 = (n % d);

return cljs.core.fix.call(null,((n - rem__9385) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9388 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9388));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9396 = (function (){
return Math.random.call(null);
});
var rand__9397 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9396.call(this);
case  1 :
return rand__9397.call(this,n);
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
var _EQ__EQ___9420 = (function (x){
return true;
});
var _EQ__EQ___9421 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9422 = (function() { 
var G__9424__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9425 = y;
var G__9426 = cljs.core.first.call(null,more);
var G__9427 = cljs.core.next.call(null,more);
x = G__9425;
y = G__9426;
more = G__9427;
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
var G__9424 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9424__delegate.call(this, x, y, more);
};
G__9424.cljs$lang$maxFixedArity = 2;
G__9424.cljs$lang$applyTo = (function (arglist__9428){
var x = cljs.core.first(arglist__9428);
var y = cljs.core.first(cljs.core.next(arglist__9428));
var more = cljs.core.rest(cljs.core.next(arglist__9428));
return G__9424__delegate.call(this, x, y, more);
});
return G__9424;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9420.call(this,x);
case  2 :
return _EQ__EQ___9421.call(this,x,y);
default:
return _EQ__EQ___9422.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9422.cljs$lang$applyTo;
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
var n__9441 = n;
var xs__9442 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9449 = xs__9442;

if(cljs.core.truth_(and__3546__auto____9449))
{return (n__9441 > 0);
} else
{return and__3546__auto____9449;
}
})()))
{{
var G__9460 = (n__9441 - 1);
var G__9462 = cljs.core.next.call(null,xs__9442);
n__9441 = G__9460;
xs__9442 = G__9462;
continue;
}
} else
{return xs__9442;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9471 = null;
var G__9471__9472 = (function (coll,n){
var temp__3695__auto____9467 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9467))
{var xs__9468 = temp__3695__auto____9467;

return cljs.core.first.call(null,xs__9468);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9471__9473 = (function (coll,n,not_found){
var temp__3695__auto____9469 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9469))
{var xs__9470 = temp__3695__auto____9469;

return cljs.core.first.call(null,xs__9470);
} else
{return not_found;
}
});
G__9471 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9471__9472.call(this,coll,n);
case  3 :
return G__9471__9473.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9471;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9483 = (function (){
return "";
});
var str_STAR___9485 = (function (x){
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
var str_STAR___9487 = (function() { 
var G__9490__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9492 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9493 = cljs.core.next.call(null,more);
sb = G__9492;
more = G__9493;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9490 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9490__delegate.call(this, x, ys);
};
G__9490.cljs$lang$maxFixedArity = 1;
G__9490.cljs$lang$applyTo = (function (arglist__9494){
var x = cljs.core.first(arglist__9494);
var ys = cljs.core.rest(arglist__9494);
return G__9490__delegate.call(this, x, ys);
});
return G__9490;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9483.call(this);
case  1 :
return str_STAR___9485.call(this,x);
default:
return str_STAR___9487.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9487.cljs$lang$applyTo;
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
var str__9497 = (function (){
return "";
});
var str__9499 = (function (x){
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
var str__9501 = (function() { 
var G__9508__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9508 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9508__delegate.call(this, x, ys);
};
G__9508.cljs$lang$maxFixedArity = 1;
G__9508.cljs$lang$applyTo = (function (arglist__9510){
var x = cljs.core.first(arglist__9510);
var ys = cljs.core.rest(arglist__9510);
return G__9508__delegate.call(this, x, ys);
});
return G__9508;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9497.call(this);
case  1 :
return str__9499.call(this,x);
default:
return str__9501.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9501.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9511 = (function (s,start){
return s.substring(start);
});
var subs__9512 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9511.call(this,s,start);
case  3 :
return subs__9512.call(this,s,start,end);
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
var symbol__9520 = (function (name){
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
var symbol__9521 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9520.call(this,ns);
case  2 :
return symbol__9521.call(this,ns,name);
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
var keyword__9529 = (function (name){
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
var keyword__9530 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9529.call(this,ns);
case  2 :
return keyword__9530.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9532 = cljs.core.seq.call(null,x);
var ys__9533 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9532)))
{return cljs.core.nil_QMARK_.call(null,ys__9533);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9533)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9532),cljs.core.first.call(null,ys__9533))))
{{
var G__9536 = cljs.core.next.call(null,xs__9532);
var G__9537 = cljs.core.next.call(null,ys__9533);
xs__9532 = G__9536;
ys__9533 = G__9537;
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
return cljs.core.reduce.call(null,(function (p1__9538_SHARP_,p2__9539_SHARP_){
return cljs.core.hash_combine.call(null,p1__9538_SHARP_,cljs.core.hash.call(null,p2__9539_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9543__9544 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9543__9544))
{var G__9546__9548 = cljs.core.first.call(null,G__9543__9544);
var vec__9547__9549 = G__9546__9548;
var key_name__9593 = cljs.core.nth.call(null,vec__9547__9549,0,null);
var f__9594 = cljs.core.nth.call(null,vec__9547__9549,1,null);
var G__9543__9595 = G__9543__9544;

var G__9546__9596 = G__9546__9548;
var G__9543__9597 = G__9543__9595;

while(true){
var vec__9598__9599 = G__9546__9596;
var key_name__9600 = cljs.core.nth.call(null,vec__9598__9599,0,null);
var f__9601 = cljs.core.nth.call(null,vec__9598__9599,1,null);
var G__9543__9602 = G__9543__9597;

var str_name__9603 = cljs.core.name.call(null,key_name__9600);

obj[str_name__9603] = f__9601;
var temp__3698__auto____9605 = cljs.core.next.call(null,G__9543__9602);

if(cljs.core.truth_(temp__3698__auto____9605))
{var G__9543__9609 = temp__3698__auto____9605;

{
var G__9620 = cljs.core.first.call(null,G__9543__9609);
var G__9621 = G__9543__9609;
G__9546__9596 = G__9620;
G__9543__9597 = G__9621;
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
var this__9630 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9631 = this;
return (new cljs.core.List(this__9631.meta,o,coll,(this__9631.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9632 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9633 = this;
return this__9633.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9634 = this;
return this__9634.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9635 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9636 = this;
return this__9636.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9637 = this;
return this__9637.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9642 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9644 = this;
return (new cljs.core.List(meta,this__9644.first,this__9644.rest,this__9644.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9647 = this;
return this__9647.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9648 = this;
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
var this__9658 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9663 = this;
return (new cljs.core.List(this__9663.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9665 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9669 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9670 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9671 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9673 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9674 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9675 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9898 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9899 = this;
return this__9899.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9900 = this;
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
list.cljs$lang$applyTo = (function (arglist__9917){
var items = cljs.core.seq( arglist__9917 );;
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
var this__9925 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9926 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9927 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9929 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9929.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9931 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9934 = this;
return this__9934.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9936 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9936.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9936.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9938 = this;
return this__9938.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9941 = this;
return (new cljs.core.Cons(meta,this__9941.first,this__9941.rest));
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
var G__10017 = null;
var G__10017__10018 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10017__10019 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10017 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10017__10018.call(this,string,f);
case  3 :
return G__10017__10019.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10017;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10024 = null;
var G__10024__10026 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10024__10027 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10024 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10024__10026.call(this,string,k);
case  3 :
return G__10024__10027.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10024;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10029 = null;
var G__10029__10030 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10029__10031 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10029 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10029__10030.call(this,string,n);
case  3 :
return G__10029__10031.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10029;
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
var G__10054 = null;
var G__10054__10055 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10054__10056 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10054 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10054__10055.call(this,this$,coll);
case  3 :
return G__10054__10056.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10054;
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
var x__10058 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10058;
} else
{lazy_seq.x = x__10058.call(null);
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
var this__10071 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10072 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10073 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10078 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10078.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10079 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10082 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10086 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10092 = this;
return this__10092.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10095 = this;
return (new cljs.core.LazySeq(meta,this__10095.realized,this__10095.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10102 = cljs.core.array.call(null);

var s__10103 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10103)))
{ary__10102.push(cljs.core.first.call(null,s__10103));
{
var G__10104 = cljs.core.next.call(null,s__10103);
s__10103 = G__10104;
continue;
}
} else
{return ary__10102;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10137 = s;
var i__10138 = n;
var sum__10139 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10141 = (i__10138 > 0);

if(cljs.core.truth_(and__3546__auto____10141))
{return cljs.core.seq.call(null,s__10137);
} else
{return and__3546__auto____10141;
}
})()))
{{
var G__10145 = cljs.core.next.call(null,s__10137);
var G__10146 = (i__10138 - 1);
var G__10147 = (sum__10139 + 1);
s__10137 = G__10145;
i__10138 = G__10146;
sum__10139 = G__10147;
continue;
}
} else
{return sum__10139;
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
var concat__10158 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10160 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10162 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10150 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10150))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10150),concat.call(null,cljs.core.rest.call(null,s__10150),y));
} else
{return y;
}
})));
});
var concat__10164 = (function() { 
var G__10172__delegate = function (x,y,zs){
var cat__10155 = (function cat(xys,zs){
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

return cat__10155.call(null,concat.call(null,x,y),zs);
};
var G__10172 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10172__delegate.call(this, x, y, zs);
};
G__10172.cljs$lang$maxFixedArity = 2;
G__10172.cljs$lang$applyTo = (function (arglist__10179){
var x = cljs.core.first(arglist__10179);
var y = cljs.core.first(cljs.core.next(arglist__10179));
var zs = cljs.core.rest(cljs.core.next(arglist__10179));
return G__10172__delegate.call(this, x, y, zs);
});
return G__10172;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10158.call(this);
case  1 :
return concat__10160.call(this,x);
case  2 :
return concat__10162.call(this,x,y);
default:
return concat__10164.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10164.cljs$lang$applyTo;
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
var list_STAR___10212 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10213 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10214 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10215 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10216 = (function() { 
var G__10219__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10219 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10219__delegate.call(this, a, b, c, d, more);
};
G__10219.cljs$lang$maxFixedArity = 4;
G__10219.cljs$lang$applyTo = (function (arglist__10226){
var a = cljs.core.first(arglist__10226);
var b = cljs.core.first(cljs.core.next(arglist__10226));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10226)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10226))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10226))));
return G__10219__delegate.call(this, a, b, c, d, more);
});
return G__10219;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10212.call(this,a);
case  2 :
return list_STAR___10213.call(this,a,b);
case  3 :
return list_STAR___10214.call(this,a,b,c);
case  4 :
return list_STAR___10215.call(this,a,b,c,d);
default:
return list_STAR___10216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10216.cljs$lang$applyTo;
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
var apply__10271 = (function (f,args){
var fixed_arity__10229 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10229 + 1)) <= fixed_arity__10229)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10272 = (function (f,x,args){
var arglist__10230 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10232 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10230,fixed_arity__10232) <= fixed_arity__10232)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10230));
} else
{return f.cljs$lang$applyTo(arglist__10230);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10230));
}
});
var apply__10273 = (function (f,x,y,args){
var arglist__10241 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10242 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10241,fixed_arity__10242) <= fixed_arity__10242)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10241));
} else
{return f.cljs$lang$applyTo(arglist__10241);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10241));
}
});
var apply__10274 = (function (f,x,y,z,args){
var arglist__10247 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10248 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10247,fixed_arity__10248) <= fixed_arity__10248)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10247));
} else
{return f.cljs$lang$applyTo(arglist__10247);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10247));
}
});
var apply__10275 = (function() { 
var G__10286__delegate = function (f,a,b,c,d,args){
var arglist__10266 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10267 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10266,fixed_arity__10267) <= fixed_arity__10267)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10266));
} else
{return f.cljs$lang$applyTo(arglist__10266);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10266));
}
};
var G__10286 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10286__delegate.call(this, f, a, b, c, d, args);
};
G__10286.cljs$lang$maxFixedArity = 5;
G__10286.cljs$lang$applyTo = (function (arglist__10293){
var f = cljs.core.first(arglist__10293);
var a = cljs.core.first(cljs.core.next(arglist__10293));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10293)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10293))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10293)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10293)))));
return G__10286__delegate.call(this, f, a, b, c, d, args);
});
return G__10286;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10271.call(this,f,a);
case  3 :
return apply__10272.call(this,f,a,b);
case  4 :
return apply__10273.call(this,f,a,b,c);
case  5 :
return apply__10274.call(this,f,a,b,c,d);
default:
return apply__10275.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10275.cljs$lang$applyTo;
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
var not_EQ___10305 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10306 = (function() { 
var G__10310__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10310 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10310__delegate.call(this, x, y, more);
};
G__10310.cljs$lang$maxFixedArity = 2;
G__10310.cljs$lang$applyTo = (function (arglist__10311){
var x = cljs.core.first(arglist__10311);
var y = cljs.core.first(cljs.core.next(arglist__10311));
var more = cljs.core.rest(cljs.core.next(arglist__10311));
return G__10310__delegate.call(this, x, y, more);
});
return G__10310;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10303.call(this,x);
case  2 :
return not_EQ___10305.call(this,x,y);
default:
return not_EQ___10306.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10306.cljs$lang$applyTo;
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
var G__10319 = pred;
var G__10320 = cljs.core.next.call(null,coll);
pred = G__10319;
coll = G__10320;
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
{var or__3548__auto____10321 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10321))
{return or__3548__auto____10321;
} else
{{
var G__10322 = pred;
var G__10323 = cljs.core.next.call(null,coll);
pred = G__10322;
coll = G__10323;
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
var G__10410 = null;
var G__10410__10411 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10410__10412 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10410__10413 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10410__10414 = (function() { 
var G__10417__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10417 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10417__delegate.call(this, x, y, zs);
};
G__10417.cljs$lang$maxFixedArity = 2;
G__10417.cljs$lang$applyTo = (function (arglist__10418){
var x = cljs.core.first(arglist__10418);
var y = cljs.core.first(cljs.core.next(arglist__10418));
var zs = cljs.core.rest(cljs.core.next(arglist__10418));
return G__10417__delegate.call(this, x, y, zs);
});
return G__10417;
})()
;
G__10410 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10410__10411.call(this);
case  1 :
return G__10410__10412.call(this,x);
case  2 :
return G__10410__10413.call(this,x,y);
default:
return G__10410__10414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10410.cljs$lang$maxFixedArity = 2;
G__10410.cljs$lang$applyTo = G__10410__10414.cljs$lang$applyTo;
return G__10410;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10420__delegate = function (args){
return x;
};
var G__10420 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10420__delegate.call(this, args);
};
G__10420.cljs$lang$maxFixedArity = 0;
G__10420.cljs$lang$applyTo = (function (arglist__10421){
var args = cljs.core.seq( arglist__10421 );;
return G__10420__delegate.call(this, args);
});
return G__10420;
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
var comp__10439 = (function (){
return cljs.core.identity;
});
var comp__10440 = (function (f){
return f;
});
var comp__10441 = (function (f,g){
return (function() {
var G__10445 = null;
var G__10445__10446 = (function (){
return f.call(null,g.call(null));
});
var G__10445__10447 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10445__10448 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10445__10449 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10445__10450 = (function() { 
var G__10456__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10456 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10456__delegate.call(this, x, y, z, args);
};
G__10456.cljs$lang$maxFixedArity = 3;
G__10456.cljs$lang$applyTo = (function (arglist__10457){
var x = cljs.core.first(arglist__10457);
var y = cljs.core.first(cljs.core.next(arglist__10457));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10457)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10457)));
return G__10456__delegate.call(this, x, y, z, args);
});
return G__10456;
})()
;
G__10445 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10445__10446.call(this);
case  1 :
return G__10445__10447.call(this,x);
case  2 :
return G__10445__10448.call(this,x,y);
case  3 :
return G__10445__10449.call(this,x,y,z);
default:
return G__10445__10450.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10445.cljs$lang$maxFixedArity = 3;
G__10445.cljs$lang$applyTo = G__10445__10450.cljs$lang$applyTo;
return G__10445;
})()
});
var comp__10442 = (function (f,g,h){
return (function() {
var G__10458 = null;
var G__10458__10459 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10458__10460 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10458__10461 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10458__10462 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10458__10463 = (function() { 
var G__10466__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10466 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10466__delegate.call(this, x, y, z, args);
};
G__10466.cljs$lang$maxFixedArity = 3;
G__10466.cljs$lang$applyTo = (function (arglist__10467){
var x = cljs.core.first(arglist__10467);
var y = cljs.core.first(cljs.core.next(arglist__10467));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10467)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10467)));
return G__10466__delegate.call(this, x, y, z, args);
});
return G__10466;
})()
;
G__10458 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10458__10459.call(this);
case  1 :
return G__10458__10460.call(this,x);
case  2 :
return G__10458__10461.call(this,x,y);
case  3 :
return G__10458__10462.call(this,x,y,z);
default:
return G__10458__10463.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10458.cljs$lang$maxFixedArity = 3;
G__10458.cljs$lang$applyTo = G__10458__10463.cljs$lang$applyTo;
return G__10458;
})()
});
var comp__10443 = (function() { 
var G__10473__delegate = function (f1,f2,f3,fs){
var fs__10434 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10474__delegate = function (args){
var ret__10436 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10434),args);
var fs__10437 = cljs.core.next.call(null,fs__10434);

while(true){
if(cljs.core.truth_(fs__10437))
{{
var G__10475 = cljs.core.first.call(null,fs__10437).call(null,ret__10436);
var G__10476 = cljs.core.next.call(null,fs__10437);
ret__10436 = G__10475;
fs__10437 = G__10476;
continue;
}
} else
{return ret__10436;
}
break;
}
};
var G__10474 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10474__delegate.call(this, args);
};
G__10474.cljs$lang$maxFixedArity = 0;
G__10474.cljs$lang$applyTo = (function (arglist__10479){
var args = cljs.core.seq( arglist__10479 );;
return G__10474__delegate.call(this, args);
});
return G__10474;
})()
;
};
var G__10473 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10473__delegate.call(this, f1, f2, f3, fs);
};
G__10473.cljs$lang$maxFixedArity = 3;
G__10473.cljs$lang$applyTo = (function (arglist__10484){
var f1 = cljs.core.first(arglist__10484);
var f2 = cljs.core.first(cljs.core.next(arglist__10484));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10484)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10484)));
return G__10473__delegate.call(this, f1, f2, f3, fs);
});
return G__10473;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10439.call(this);
case  1 :
return comp__10440.call(this,f1);
case  2 :
return comp__10441.call(this,f1,f2);
case  3 :
return comp__10442.call(this,f1,f2,f3);
default:
return comp__10443.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10443.cljs$lang$applyTo;
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
var partial__10501 = (function (f,arg1){
return (function() { 
var G__10506__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10506 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10506__delegate.call(this, args);
};
G__10506.cljs$lang$maxFixedArity = 0;
G__10506.cljs$lang$applyTo = (function (arglist__10508){
var args = cljs.core.seq( arglist__10508 );;
return G__10506__delegate.call(this, args);
});
return G__10506;
})()
;
});
var partial__10502 = (function (f,arg1,arg2){
return (function() { 
var G__10509__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10509 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10509__delegate.call(this, args);
};
G__10509.cljs$lang$maxFixedArity = 0;
G__10509.cljs$lang$applyTo = (function (arglist__10511){
var args = cljs.core.seq( arglist__10511 );;
return G__10509__delegate.call(this, args);
});
return G__10509;
})()
;
});
var partial__10503 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10512__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10512 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10512__delegate.call(this, args);
};
G__10512.cljs$lang$maxFixedArity = 0;
G__10512.cljs$lang$applyTo = (function (arglist__10513){
var args = cljs.core.seq( arglist__10513 );;
return G__10512__delegate.call(this, args);
});
return G__10512;
})()
;
});
var partial__10504 = (function() { 
var G__10515__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10516__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10516 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10516__delegate.call(this, args);
};
G__10516.cljs$lang$maxFixedArity = 0;
G__10516.cljs$lang$applyTo = (function (arglist__10518){
var args = cljs.core.seq( arglist__10518 );;
return G__10516__delegate.call(this, args);
});
return G__10516;
})()
;
};
var G__10515 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10515__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10515.cljs$lang$maxFixedArity = 4;
G__10515.cljs$lang$applyTo = (function (arglist__10521){
var f = cljs.core.first(arglist__10521);
var arg1 = cljs.core.first(cljs.core.next(arglist__10521));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10521)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10521))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10521))));
return G__10515__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10515;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10501.call(this,f,arg1);
case  3 :
return partial__10502.call(this,f,arg1,arg2);
case  4 :
return partial__10503.call(this,f,arg1,arg2,arg3);
default:
return partial__10504.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10504.cljs$lang$applyTo;
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
var fnil__10675 = (function (f,x){
return (function() {
var G__10682 = null;
var G__10682__10687 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10682__10689 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10682__10690 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10682__10691 = (function() { 
var G__10695__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10695 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10695__delegate.call(this, a, b, c, ds);
};
G__10695.cljs$lang$maxFixedArity = 3;
G__10695.cljs$lang$applyTo = (function (arglist__10703){
var a = cljs.core.first(arglist__10703);
var b = cljs.core.first(cljs.core.next(arglist__10703));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10703)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10703)));
return G__10695__delegate.call(this, a, b, c, ds);
});
return G__10695;
})()
;
G__10682 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10682__10687.call(this,a);
case  2 :
return G__10682__10689.call(this,a,b);
case  3 :
return G__10682__10690.call(this,a,b,c);
default:
return G__10682__10691.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10682.cljs$lang$maxFixedArity = 3;
G__10682.cljs$lang$applyTo = G__10682__10691.cljs$lang$applyTo;
return G__10682;
})()
});
var fnil__10676 = (function (f,x,y){
return (function() {
var G__10712 = null;
var G__10712__10713 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10712__10714 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10712__10715 = (function() { 
var G__10722__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10722 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10722__delegate.call(this, a, b, c, ds);
};
G__10722.cljs$lang$maxFixedArity = 3;
G__10722.cljs$lang$applyTo = (function (arglist__10726){
var a = cljs.core.first(arglist__10726);
var b = cljs.core.first(cljs.core.next(arglist__10726));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10726)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10726)));
return G__10722__delegate.call(this, a, b, c, ds);
});
return G__10722;
})()
;
G__10712 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10712__10713.call(this,a,b);
case  3 :
return G__10712__10714.call(this,a,b,c);
default:
return G__10712__10715.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10712.cljs$lang$maxFixedArity = 3;
G__10712.cljs$lang$applyTo = G__10712__10715.cljs$lang$applyTo;
return G__10712;
})()
});
var fnil__10677 = (function (f,x,y,z){
return (function() {
var G__10734 = null;
var G__10734__10735 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10734__10736 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10734__10737 = (function() { 
var G__10741__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10741 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10741__delegate.call(this, a, b, c, ds);
};
G__10741.cljs$lang$maxFixedArity = 3;
G__10741.cljs$lang$applyTo = (function (arglist__10745){
var a = cljs.core.first(arglist__10745);
var b = cljs.core.first(cljs.core.next(arglist__10745));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10745)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10745)));
return G__10741__delegate.call(this, a, b, c, ds);
});
return G__10741;
})()
;
G__10734 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10734__10735.call(this,a,b);
case  3 :
return G__10734__10736.call(this,a,b,c);
default:
return G__10734__10737.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10734.cljs$lang$maxFixedArity = 3;
G__10734.cljs$lang$applyTo = G__10734__10737.cljs$lang$applyTo;
return G__10734;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10675.call(this,f,x);
case  3 :
return fnil__10676.call(this,f,x,y);
case  4 :
return fnil__10677.call(this,f,x,y,z);
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
var mapi__10755 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10751 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10751))
{var s__10753 = temp__3698__auto____10751;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10753)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10753)));
} else
{return null;
}
})));
});

return mapi__10755.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10758 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10758))
{var s__10759 = temp__3698__auto____10758;

var x__10761 = f.call(null,cljs.core.first.call(null,s__10759));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10761)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10759));
} else
{return cljs.core.cons.call(null,x__10761,keep.call(null,f,cljs.core.rest.call(null,s__10759)));
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
var keepi__10861 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10856 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10856))
{var s__10857 = temp__3698__auto____10856;

var x__10859 = f.call(null,idx,cljs.core.first.call(null,s__10857));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10859)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10857));
} else
{return cljs.core.cons.call(null,x__10859,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10857)));
}
} else
{return null;
}
})));
});

return keepi__10861.call(null,0,coll);
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
var every_pred__11028 = (function (p){
return (function() {
var ep1 = null;
var ep1__11033 = (function (){
return true;
});
var ep1__11034 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11035 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10871 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10871))
{return p.call(null,y);
} else
{return and__3546__auto____10871;
}
})());
});
var ep1__11036 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10873 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10873))
{var and__3546__auto____10875 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10875))
{return p.call(null,z);
} else
{return and__3546__auto____10875;
}
} else
{return and__3546__auto____10873;
}
})());
});
var ep1__11037 = (function() { 
var G__11039__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10877 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10877))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10877;
}
})());
};
var G__11039 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11039__delegate.call(this, x, y, z, args);
};
G__11039.cljs$lang$maxFixedArity = 3;
G__11039.cljs$lang$applyTo = (function (arglist__11040){
var x = cljs.core.first(arglist__11040);
var y = cljs.core.first(cljs.core.next(arglist__11040));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11040)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11040)));
return G__11039__delegate.call(this, x, y, z, args);
});
return G__11039;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11033.call(this);
case  1 :
return ep1__11034.call(this,x);
case  2 :
return ep1__11035.call(this,x,y);
case  3 :
return ep1__11036.call(this,x,y,z);
default:
return ep1__11037.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11037.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11029 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11041 = (function (){
return true;
});
var ep2__11042 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10878 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10878))
{return p2.call(null,x);
} else
{return and__3546__auto____10878;
}
})());
});
var ep2__11043 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10879 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10879))
{var and__3546__auto____10880 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10880))
{var and__3546__auto____10881 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10881))
{return p2.call(null,y);
} else
{return and__3546__auto____10881;
}
} else
{return and__3546__auto____10880;
}
} else
{return and__3546__auto____10879;
}
})());
});
var ep2__11044 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10883 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10883))
{var and__3546__auto____10884 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10884))
{var and__3546__auto____10885 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10885))
{var and__3546__auto____10886 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10886))
{var and__3546__auto____10887 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10887))
{return p2.call(null,z);
} else
{return and__3546__auto____10887;
}
} else
{return and__3546__auto____10886;
}
} else
{return and__3546__auto____10885;
}
} else
{return and__3546__auto____10884;
}
} else
{return and__3546__auto____10883;
}
})());
});
var ep2__11045 = (function() { 
var G__11050__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10888 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10888))
{return cljs.core.every_QMARK_.call(null,(function (p1__10780_SHARP_){
var and__3546__auto____10889 = p1.call(null,p1__10780_SHARP_);

if(cljs.core.truth_(and__3546__auto____10889))
{return p2.call(null,p1__10780_SHARP_);
} else
{return and__3546__auto____10889;
}
}),args);
} else
{return and__3546__auto____10888;
}
})());
};
var G__11050 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11050__delegate.call(this, x, y, z, args);
};
G__11050.cljs$lang$maxFixedArity = 3;
G__11050.cljs$lang$applyTo = (function (arglist__11051){
var x = cljs.core.first(arglist__11051);
var y = cljs.core.first(cljs.core.next(arglist__11051));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11051)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11051)));
return G__11050__delegate.call(this, x, y, z, args);
});
return G__11050;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11041.call(this);
case  1 :
return ep2__11042.call(this,x);
case  2 :
return ep2__11043.call(this,x,y);
case  3 :
return ep2__11044.call(this,x,y,z);
default:
return ep2__11045.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11045.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11030 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11057 = (function (){
return true;
});
var ep3__11058 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10890 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10890))
{var and__3546__auto____10891 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10891))
{return p3.call(null,x);
} else
{return and__3546__auto____10891;
}
} else
{return and__3546__auto____10890;
}
})());
});
var ep3__11059 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10893 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10893))
{var and__3546__auto____10894 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10894))
{var and__3546__auto____10895 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10895))
{var and__3546__auto____10897 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10897))
{var and__3546__auto____10902 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10902))
{return p3.call(null,y);
} else
{return and__3546__auto____10902;
}
} else
{return and__3546__auto____10897;
}
} else
{return and__3546__auto____10895;
}
} else
{return and__3546__auto____10894;
}
} else
{return and__3546__auto____10893;
}
})());
});
var ep3__11060 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10903 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10903))
{var and__3546__auto____10904 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10904))
{var and__3546__auto____10906 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10906))
{var and__3546__auto____10907 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10907))
{var and__3546__auto____10908 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10908))
{var and__3546__auto____10910 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10910))
{var and__3546__auto____10911 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10911))
{var and__3546__auto____10912 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10912))
{return p3.call(null,z);
} else
{return and__3546__auto____10912;
}
} else
{return and__3546__auto____10911;
}
} else
{return and__3546__auto____10910;
}
} else
{return and__3546__auto____10908;
}
} else
{return and__3546__auto____10907;
}
} else
{return and__3546__auto____10906;
}
} else
{return and__3546__auto____10904;
}
} else
{return and__3546__auto____10903;
}
})());
});
var ep3__11062 = (function() { 
var G__11068__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10918 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10918))
{return cljs.core.every_QMARK_.call(null,(function (p1__10783_SHARP_){
var and__3546__auto____10919 = p1.call(null,p1__10783_SHARP_);

if(cljs.core.truth_(and__3546__auto____10919))
{var and__3546__auto____10921 = p2.call(null,p1__10783_SHARP_);

if(cljs.core.truth_(and__3546__auto____10921))
{return p3.call(null,p1__10783_SHARP_);
} else
{return and__3546__auto____10921;
}
} else
{return and__3546__auto____10919;
}
}),args);
} else
{return and__3546__auto____10918;
}
})());
};
var G__11068 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11068__delegate.call(this, x, y, z, args);
};
G__11068.cljs$lang$maxFixedArity = 3;
G__11068.cljs$lang$applyTo = (function (arglist__11074){
var x = cljs.core.first(arglist__11074);
var y = cljs.core.first(cljs.core.next(arglist__11074));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11074)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11074)));
return G__11068__delegate.call(this, x, y, z, args);
});
return G__11068;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11057.call(this);
case  1 :
return ep3__11058.call(this,x);
case  2 :
return ep3__11059.call(this,x,y);
case  3 :
return ep3__11060.call(this,x,y,z);
default:
return ep3__11062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11062.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11031 = (function() { 
var G__11076__delegate = function (p1,p2,p3,ps){
var ps__10922 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11077 = (function (){
return true;
});
var epn__11078 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10785_SHARP_){
return p1__10785_SHARP_.call(null,x);
}),ps__10922);
});
var epn__11080 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10786_SHARP_){
var and__3546__auto____11024 = p1__10786_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11024))
{return p1__10786_SHARP_.call(null,y);
} else
{return and__3546__auto____11024;
}
}),ps__10922);
});
var epn__11081 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10788_SHARP_){
var and__3546__auto____11025 = p1__10788_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11025))
{var and__3546__auto____11026 = p1__10788_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11026))
{return p1__10788_SHARP_.call(null,z);
} else
{return and__3546__auto____11026;
}
} else
{return and__3546__auto____11025;
}
}),ps__10922);
});
var epn__11082 = (function() { 
var G__11087__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11027 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11027))
{return cljs.core.every_QMARK_.call(null,(function (p1__10789_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10789_SHARP_,args);
}),ps__10922);
} else
{return and__3546__auto____11027;
}
})());
};
var G__11087 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11087__delegate.call(this, x, y, z, args);
};
G__11087.cljs$lang$maxFixedArity = 3;
G__11087.cljs$lang$applyTo = (function (arglist__11089){
var x = cljs.core.first(arglist__11089);
var y = cljs.core.first(cljs.core.next(arglist__11089));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11089)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11089)));
return G__11087__delegate.call(this, x, y, z, args);
});
return G__11087;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11077.call(this);
case  1 :
return epn__11078.call(this,x);
case  2 :
return epn__11080.call(this,x,y);
case  3 :
return epn__11081.call(this,x,y,z);
default:
return epn__11082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11082.cljs$lang$applyTo;
return epn;
})()
};
var G__11076 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11076__delegate.call(this, p1, p2, p3, ps);
};
G__11076.cljs$lang$maxFixedArity = 3;
G__11076.cljs$lang$applyTo = (function (arglist__11093){
var p1 = cljs.core.first(arglist__11093);
var p2 = cljs.core.first(cljs.core.next(arglist__11093));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11093)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11093)));
return G__11076__delegate.call(this, p1, p2, p3, ps);
});
return G__11076;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11028.call(this,p1);
case  2 :
return every_pred__11029.call(this,p1,p2);
case  3 :
return every_pred__11030.call(this,p1,p2,p3);
default:
return every_pred__11031.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11031.cljs$lang$applyTo;
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
var some_fn__11217 = (function (p){
return (function() {
var sp1 = null;
var sp1__11223 = (function (){
return null;
});
var sp1__11224 = (function (x){
return p.call(null,x);
});
var sp1__11225 = (function (x,y){
var or__3548__auto____11101 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11101))
{return or__3548__auto____11101;
} else
{return p.call(null,y);
}
});
var sp1__11226 = (function (x,y,z){
var or__3548__auto____11107 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11107))
{return or__3548__auto____11107;
} else
{var or__3548__auto____11109 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11109))
{return or__3548__auto____11109;
} else
{return p.call(null,z);
}
}
});
var sp1__11227 = (function() { 
var G__11232__delegate = function (x,y,z,args){
var or__3548__auto____11112 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11112))
{return or__3548__auto____11112;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11232 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11232__delegate.call(this, x, y, z, args);
};
G__11232.cljs$lang$maxFixedArity = 3;
G__11232.cljs$lang$applyTo = (function (arglist__11238){
var x = cljs.core.first(arglist__11238);
var y = cljs.core.first(cljs.core.next(arglist__11238));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11238)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11238)));
return G__11232__delegate.call(this, x, y, z, args);
});
return G__11232;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11223.call(this);
case  1 :
return sp1__11224.call(this,x);
case  2 :
return sp1__11225.call(this,x,y);
case  3 :
return sp1__11226.call(this,x,y,z);
default:
return sp1__11227.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11227.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11218 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11252 = (function (){
return null;
});
var sp2__11253 = (function (x){
var or__3548__auto____11117 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11117))
{return or__3548__auto____11117;
} else
{return p2.call(null,x);
}
});
var sp2__11254 = (function (x,y){
var or__3548__auto____11120 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11120))
{return or__3548__auto____11120;
} else
{var or__3548__auto____11123 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11123))
{return or__3548__auto____11123;
} else
{var or__3548__auto____11125 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11125))
{return or__3548__auto____11125;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11255 = (function (x,y,z){
var or__3548__auto____11129 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11129))
{return or__3548__auto____11129;
} else
{var or__3548__auto____11131 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11131))
{return or__3548__auto____11131;
} else
{var or__3548__auto____11132 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11132))
{return or__3548__auto____11132;
} else
{var or__3548__auto____11134 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11134))
{return or__3548__auto____11134;
} else
{var or__3548__auto____11137 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11137))
{return or__3548__auto____11137;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11256 = (function() { 
var G__11327__delegate = function (x,y,z,args){
var or__3548__auto____11140 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11140))
{return or__3548__auto____11140;
} else
{return cljs.core.some.call(null,(function (p1__10865_SHARP_){
var or__3548__auto____11142 = p1.call(null,p1__10865_SHARP_);

if(cljs.core.truth_(or__3548__auto____11142))
{return or__3548__auto____11142;
} else
{return p2.call(null,p1__10865_SHARP_);
}
}),args);
}
};
var G__11327 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11327__delegate.call(this, x, y, z, args);
};
G__11327.cljs$lang$maxFixedArity = 3;
G__11327.cljs$lang$applyTo = (function (arglist__11330){
var x = cljs.core.first(arglist__11330);
var y = cljs.core.first(cljs.core.next(arglist__11330));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11330)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11330)));
return G__11327__delegate.call(this, x, y, z, args);
});
return G__11327;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11252.call(this);
case  1 :
return sp2__11253.call(this,x);
case  2 :
return sp2__11254.call(this,x,y);
case  3 :
return sp2__11255.call(this,x,y,z);
default:
return sp2__11256.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11256.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11219 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11333 = (function (){
return null;
});
var sp3__11334 = (function (x){
var or__3548__auto____11148 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11148))
{return or__3548__auto____11148;
} else
{var or__3548__auto____11149 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11149))
{return or__3548__auto____11149;
} else
{return p3.call(null,x);
}
}
});
var sp3__11335 = (function (x,y){
var or__3548__auto____11152 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11152))
{return or__3548__auto____11152;
} else
{var or__3548__auto____11154 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11154))
{return or__3548__auto____11154;
} else
{var or__3548__auto____11155 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11155))
{return or__3548__auto____11155;
} else
{var or__3548__auto____11158 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11158))
{return or__3548__auto____11158;
} else
{var or__3548__auto____11160 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11160))
{return or__3548__auto____11160;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11336 = (function (x,y,z){
var or__3548__auto____11162 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11162))
{return or__3548__auto____11162;
} else
{var or__3548__auto____11164 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11164))
{return or__3548__auto____11164;
} else
{var or__3548__auto____11166 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11166))
{return or__3548__auto____11166;
} else
{var or__3548__auto____11167 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11167))
{return or__3548__auto____11167;
} else
{var or__3548__auto____11169 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11169))
{return or__3548__auto____11169;
} else
{var or__3548__auto____11171 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11171))
{return or__3548__auto____11171;
} else
{var or__3548__auto____11174 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11174))
{return or__3548__auto____11174;
} else
{var or__3548__auto____11181 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11181))
{return or__3548__auto____11181;
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
var sp3__11337 = (function() { 
var G__11422__delegate = function (x,y,z,args){
var or__3548__auto____11189 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11189))
{return or__3548__auto____11189;
} else
{return cljs.core.some.call(null,(function (p1__10866_SHARP_){
var or__3548__auto____11191 = p1.call(null,p1__10866_SHARP_);

if(cljs.core.truth_(or__3548__auto____11191))
{return or__3548__auto____11191;
} else
{var or__3548__auto____11193 = p2.call(null,p1__10866_SHARP_);

if(cljs.core.truth_(or__3548__auto____11193))
{return or__3548__auto____11193;
} else
{return p3.call(null,p1__10866_SHARP_);
}
}
}),args);
}
};
var G__11422 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11422__delegate.call(this, x, y, z, args);
};
G__11422.cljs$lang$maxFixedArity = 3;
G__11422.cljs$lang$applyTo = (function (arglist__11424){
var x = cljs.core.first(arglist__11424);
var y = cljs.core.first(cljs.core.next(arglist__11424));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11424)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11424)));
return G__11422__delegate.call(this, x, y, z, args);
});
return G__11422;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11333.call(this);
case  1 :
return sp3__11334.call(this,x);
case  2 :
return sp3__11335.call(this,x,y);
case  3 :
return sp3__11336.call(this,x,y,z);
default:
return sp3__11337.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11337.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11220 = (function() { 
var G__11427__delegate = function (p1,p2,p3,ps){
var ps__11197 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11429 = (function (){
return null;
});
var spn__11430 = (function (x){
return cljs.core.some.call(null,(function (p1__10867_SHARP_){
return p1__10867_SHARP_.call(null,x);
}),ps__11197);
});
var spn__11431 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10868_SHARP_){
var or__3548__auto____11201 = p1__10868_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11201))
{return or__3548__auto____11201;
} else
{return p1__10868_SHARP_.call(null,y);
}
}),ps__11197);
});
var spn__11432 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10869_SHARP_){
var or__3548__auto____11204 = p1__10869_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11204))
{return or__3548__auto____11204;
} else
{var or__3548__auto____11206 = p1__10869_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11206))
{return or__3548__auto____11206;
} else
{return p1__10869_SHARP_.call(null,z);
}
}
}),ps__11197);
});
var spn__11433 = (function() { 
var G__11488__delegate = function (x,y,z,args){
var or__3548__auto____11214 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11214))
{return or__3548__auto____11214;
} else
{return cljs.core.some.call(null,(function (p1__10870_SHARP_){
return cljs.core.some.call(null,p1__10870_SHARP_,args);
}),ps__11197);
}
};
var G__11488 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11488__delegate.call(this, x, y, z, args);
};
G__11488.cljs$lang$maxFixedArity = 3;
G__11488.cljs$lang$applyTo = (function (arglist__11496){
var x = cljs.core.first(arglist__11496);
var y = cljs.core.first(cljs.core.next(arglist__11496));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11496)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11496)));
return G__11488__delegate.call(this, x, y, z, args);
});
return G__11488;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11429.call(this);
case  1 :
return spn__11430.call(this,x);
case  2 :
return spn__11431.call(this,x,y);
case  3 :
return spn__11432.call(this,x,y,z);
default:
return spn__11433.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11433.cljs$lang$applyTo;
return spn;
})()
};
var G__11427 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11427__delegate.call(this, p1, p2, p3, ps);
};
G__11427.cljs$lang$maxFixedArity = 3;
G__11427.cljs$lang$applyTo = (function (arglist__11497){
var p1 = cljs.core.first(arglist__11497);
var p2 = cljs.core.first(cljs.core.next(arglist__11497));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11497)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11497)));
return G__11427__delegate.call(this, p1, p2, p3, ps);
});
return G__11427;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11217.call(this,p1);
case  2 :
return some_fn__11218.call(this,p1,p2);
case  3 :
return some_fn__11219.call(this,p1,p2,p3);
default:
return some_fn__11220.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11220.cljs$lang$applyTo;
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
var map__11556 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11499 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11499))
{var s__11502 = temp__3698__auto____11499;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11502)),map.call(null,f,cljs.core.rest.call(null,s__11502)));
} else
{return null;
}
})));
});
var map__11557 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11505 = cljs.core.seq.call(null,c1);
var s2__11507 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11509 = s1__11505;

if(cljs.core.truth_(and__3546__auto____11509))
{return s2__11507;
} else
{return and__3546__auto____11509;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11505),cljs.core.first.call(null,s2__11507)),map.call(null,f,cljs.core.rest.call(null,s1__11505),cljs.core.rest.call(null,s2__11507)));
} else
{return null;
}
})));
});
var map__11558 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11518 = cljs.core.seq.call(null,c1);
var s2__11520 = cljs.core.seq.call(null,c2);
var s3__11521 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11523 = s1__11518;

if(cljs.core.truth_(and__3546__auto____11523))
{var and__3546__auto____11524 = s2__11520;

if(cljs.core.truth_(and__3546__auto____11524))
{return s3__11521;
} else
{return and__3546__auto____11524;
}
} else
{return and__3546__auto____11523;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11518),cljs.core.first.call(null,s2__11520),cljs.core.first.call(null,s3__11521)),map.call(null,f,cljs.core.rest.call(null,s1__11518),cljs.core.rest.call(null,s2__11520),cljs.core.rest.call(null,s3__11521)));
} else
{return null;
}
})));
});
var map__11559 = (function() { 
var G__11568__delegate = function (f,c1,c2,c3,colls){
var step__11533 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11531 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11531)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11531),step.call(null,map.call(null,cljs.core.rest,ss__11531)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11095_SHARP_){
return cljs.core.apply.call(null,f,p1__11095_SHARP_);
}),step__11533.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11568 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11568__delegate.call(this, f, c1, c2, c3, colls);
};
G__11568.cljs$lang$maxFixedArity = 4;
G__11568.cljs$lang$applyTo = (function (arglist__11574){
var f = cljs.core.first(arglist__11574);
var c1 = cljs.core.first(cljs.core.next(arglist__11574));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11574)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11574))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11574))));
return G__11568__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11568;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11556.call(this,f,c1);
case  3 :
return map__11557.call(this,f,c1,c2);
case  4 :
return map__11558.call(this,f,c1,c2,c3);
default:
return map__11559.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11559.cljs$lang$applyTo;
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
{var temp__3698__auto____11583 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11583))
{var s__11584 = temp__3698__auto____11583;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11584),take.call(null,(n - 1),cljs.core.rest.call(null,s__11584)));
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
var step__11661 = (function (n,coll){
while(true){
var s__11602 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11609 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11609))
{return s__11602;
} else
{return and__3546__auto____11609;
}
})()))
{{
var G__11669 = (n - 1);
var G__11670 = cljs.core.rest.call(null,s__11602);
n = G__11669;
coll = G__11670;
continue;
}
} else
{return s__11602;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11661.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11682 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11683 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11682.call(this,n);
case  2 :
return drop_last__11683.call(this,n,s);
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
var s__11688 = cljs.core.seq.call(null,coll);
var lead__11689 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11689))
{{
var G__11695 = cljs.core.next.call(null,s__11688);
var G__11696 = cljs.core.next.call(null,lead__11689);
s__11688 = G__11695;
lead__11689 = G__11696;
continue;
}
} else
{return s__11688;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11797 = (function (pred,coll){
while(true){
var s__11795 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11796 = s__11795;

if(cljs.core.truth_(and__3546__auto____11796))
{return pred.call(null,cljs.core.first.call(null,s__11795));
} else
{return and__3546__auto____11796;
}
})()))
{{
var G__11809 = pred;
var G__11810 = cljs.core.rest.call(null,s__11795);
pred = G__11809;
coll = G__11810;
continue;
}
} else
{return s__11795;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11797.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11818 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11818))
{var s__11819 = temp__3698__auto____11818;

return cljs.core.concat.call(null,s__11819,cycle.call(null,s__11819));
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
var repeat__11829 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11830 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11829.call(this,n);
case  2 :
return repeat__11830.call(this,n,x);
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
var repeatedly__11841 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11842 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11841.call(this,n);
case  2 :
return repeatedly__11842.call(this,n,f);
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
var interleave__11867 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11858 = cljs.core.seq.call(null,c1);
var s2__11859 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11860 = s1__11858;

if(cljs.core.truth_(and__3546__auto____11860))
{return s2__11859;
} else
{return and__3546__auto____11860;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11858),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11859),interleave.call(null,cljs.core.rest.call(null,s1__11858),cljs.core.rest.call(null,s2__11859))));
} else
{return null;
}
})));
});
var interleave__11868 = (function() { 
var G__11875__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11865 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11865)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11865),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11865)));
} else
{return null;
}
})));
};
var G__11875 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11875__delegate.call(this, c1, c2, colls);
};
G__11875.cljs$lang$maxFixedArity = 2;
G__11875.cljs$lang$applyTo = (function (arglist__11878){
var c1 = cljs.core.first(arglist__11878);
var c2 = cljs.core.first(cljs.core.next(arglist__11878));
var colls = cljs.core.rest(cljs.core.next(arglist__11878));
return G__11875__delegate.call(this, c1, c2, colls);
});
return G__11875;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11867.call(this,c1,c2);
default:
return interleave__11868.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11868.cljs$lang$applyTo;
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
var cat__11930 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11928 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11928))
{var coll__11929 = temp__3695__auto____11928;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11929),cat.call(null,cljs.core.rest.call(null,coll__11929),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11930.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11932 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11933 = (function() { 
var G__11935__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11935 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11935__delegate.call(this, f, coll, colls);
};
G__11935.cljs$lang$maxFixedArity = 2;
G__11935.cljs$lang$applyTo = (function (arglist__11936){
var f = cljs.core.first(arglist__11936);
var coll = cljs.core.first(cljs.core.next(arglist__11936));
var colls = cljs.core.rest(cljs.core.next(arglist__11936));
return G__11935__delegate.call(this, f, coll, colls);
});
return G__11935;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11932.call(this,f,coll);
default:
return mapcat__11933.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11933.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11938 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11938))
{var s__11939 = temp__3698__auto____11938;

var f__11940 = cljs.core.first.call(null,s__11939);
var r__11942 = cljs.core.rest.call(null,s__11939);

if(cljs.core.truth_(pred.call(null,f__11940)))
{return cljs.core.cons.call(null,f__11940,filter.call(null,pred,r__11942));
} else
{return filter.call(null,pred,r__11942);
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
var walk__11952 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11952.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11948_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11948_SHARP_));
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
var partition__12028 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12029 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12010 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12010))
{var s__12015 = temp__3698__auto____12010;

var p__12016 = cljs.core.take.call(null,n,s__12015);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12016))))
{return cljs.core.cons.call(null,p__12016,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12015)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12030 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12018 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12018))
{var s__12019 = temp__3698__auto____12018;

var p__12021 = cljs.core.take.call(null,n,s__12019);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12021))))
{return cljs.core.cons.call(null,p__12021,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12019)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12021,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12028.call(this,n,step);
case  3 :
return partition__12029.call(this,n,step,pad);
case  4 :
return partition__12030.call(this,n,step,pad,coll);
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
var get_in__12045 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12046 = (function (m,ks,not_found){
var sentinel__12039 = cljs.core.lookup_sentinel;
var m__12040 = m;
var ks__12041 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12041))
{var m__12042 = cljs.core.get.call(null,m__12040,cljs.core.first.call(null,ks__12041),sentinel__12039);

if(cljs.core.truth_((sentinel__12039 === m__12042)))
{return not_found;
} else
{{
var G__12052 = sentinel__12039;
var G__12053 = m__12042;
var G__12054 = cljs.core.next.call(null,ks__12041);
sentinel__12039 = G__12052;
m__12040 = G__12053;
ks__12041 = G__12054;
continue;
}
}
} else
{return m__12040;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12045.call(this,m,ks);
case  3 :
return get_in__12046.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12056,v){
var vec__12057__12058 = p__12056;
var k__12059 = cljs.core.nth.call(null,vec__12057__12058,0,null);
var ks__12060 = cljs.core.nthnext.call(null,vec__12057__12058,1);

if(cljs.core.truth_(ks__12060))
{return cljs.core.assoc.call(null,m,k__12059,assoc_in.call(null,cljs.core.get.call(null,m,k__12059),ks__12060,v));
} else
{return cljs.core.assoc.call(null,m,k__12059,v);
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
var update_in__delegate = function (m,p__12229,f,args){
var vec__12230__12231 = p__12229;
var k__12232 = cljs.core.nth.call(null,vec__12230__12231,0,null);
var ks__12233 = cljs.core.nthnext.call(null,vec__12230__12231,1);

if(cljs.core.truth_(ks__12233))
{return cljs.core.assoc.call(null,m,k__12232,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12232),ks__12233,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12232,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12232),args));
}
};
var update_in = function (m,p__12229,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12229, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12242){
var m = cljs.core.first(arglist__12242);
var p__12229 = cljs.core.first(cljs.core.next(arglist__12242));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12242)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12242)));
return update_in__delegate.call(this, m, p__12229, f, args);
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
var this__12270 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12329 = null;
var G__12329__12331 = (function (coll,k){
var this__12271 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12329__12332 = (function (coll,k,not_found){
var this__12273 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12329 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12329__12331.call(this,coll,k);
case  3 :
return G__12329__12332.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12329;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12277 = this;
var new_array__12278 = cljs.core.aclone.call(null,this__12277.array);

(new_array__12278[k] = v);
return (new cljs.core.Vector(this__12277.meta,new_array__12278));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12339 = null;
var G__12339__12340 = (function (coll,k){
var this__12279 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12339__12341 = (function (coll,k,not_found){
var this__12280 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12339 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12339__12340.call(this,coll,k);
case  3 :
return G__12339__12341.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12339;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12284 = this;
var new_array__12287 = cljs.core.aclone.call(null,this__12284.array);

new_array__12287.push(o);
return (new cljs.core.Vector(this__12284.meta,new_array__12287));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12346 = null;
var G__12346__12347 = (function (v,f){
var this__12288 = this;
return cljs.core.ci_reduce.call(null,this__12288.array,f);
});
var G__12346__12348 = (function (v,f,start){
var this__12289 = this;
return cljs.core.ci_reduce.call(null,this__12289.array,f,start);
});
G__12346 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12346__12347.call(this,v,f);
case  3 :
return G__12346__12348.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12346;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12290 = this;
if(cljs.core.truth_((this__12290.array.length > 0)))
{var vector_seq__12294 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12290.array.length)))
{return cljs.core.cons.call(null,(this__12290.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12294.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12296 = this;
return this__12296.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12300 = this;
var count__12304 = this__12300.array.length;

if(cljs.core.truth_((count__12304 > 0)))
{return (this__12300.array[(count__12304 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12307 = this;
if(cljs.core.truth_((this__12307.array.length > 0)))
{var new_array__12309 = cljs.core.aclone.call(null,this__12307.array);

new_array__12309.pop();
return (new cljs.core.Vector(this__12307.meta,new_array__12309));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12311 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12314 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12316 = this;
return (new cljs.core.Vector(meta,this__12316.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12317 = this;
return this__12317.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12365 = null;
var G__12365__12366 = (function (coll,n){
var this__12318 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12319 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12319))
{return (n < this__12318.array.length);
} else
{return and__3546__auto____12319;
}
})()))
{return (this__12318.array[n]);
} else
{return null;
}
});
var G__12365__12367 = (function (coll,n,not_found){
var this__12322 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12323 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12323))
{return (n < this__12322.array.length);
} else
{return and__3546__auto____12323;
}
})()))
{return (this__12322.array[n]);
} else
{return not_found;
}
});
G__12365 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12365__12366.call(this,coll,n);
case  3 :
return G__12365__12367.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12365;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12326 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12326.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12383){
var args = cljs.core.seq( arglist__12383 );;
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
var this__12393 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12519 = null;
var G__12519__12521 = (function (coll,k){
var this__12395 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12519__12522 = (function (coll,k,not_found){
var this__12397 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12519 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12519__12521.call(this,coll,k);
case  3 :
return G__12519__12522.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12519;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12399 = this;
var v_pos__12400 = (this__12399.start + key);

return (new cljs.core.Subvec(this__12399.meta,cljs.core._assoc.call(null,this__12399.v,v_pos__12400,val),this__12399.start,((this__12399.end > (v_pos__12400 + 1)) ? this__12399.end : (v_pos__12400 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12525 = null;
var G__12525__12529 = (function (coll,k){
var this__12403 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12525__12530 = (function (coll,k,not_found){
var this__12407 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12525 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12525__12529.call(this,coll,k);
case  3 :
return G__12525__12530.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12525;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12412 = this;
return (new cljs.core.Subvec(this__12412.meta,cljs.core._assoc_n.call(null,this__12412.v,this__12412.end,o),this__12412.start,(this__12412.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12532 = null;
var G__12532__12533 = (function (coll,f){
var this__12413 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12532__12534 = (function (coll,f,start){
var this__12414 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12532 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12532__12533.call(this,coll,f);
case  3 :
return G__12532__12534.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12532;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12419 = this;
var subvec_seq__12420 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12419.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12419.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12420.call(null,this__12419.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12422 = this;
return (this__12422.end - this__12422.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12426 = this;
return cljs.core._nth.call(null,this__12426.v,(this__12426.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12427 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12427.start,this__12427.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12427.meta,this__12427.v,this__12427.start,(this__12427.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12428 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12429 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12430 = this;
return (new cljs.core.Subvec(meta,this__12430.v,this__12430.start,this__12430.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12432 = this;
return this__12432.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12540 = null;
var G__12540__12541 = (function (coll,n){
var this__12433 = this;
return cljs.core._nth.call(null,this__12433.v,(this__12433.start + n));
});
var G__12540__12542 = (function (coll,n,not_found){
var this__12513 = this;
return cljs.core._nth.call(null,this__12513.v,(this__12513.start + n),not_found);
});
G__12540 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12540__12541.call(this,coll,n);
case  3 :
return G__12540__12542.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12540;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12517 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12517.meta);
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
var subvec__12552 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12553 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12552.call(this,v,start);
case  3 :
return subvec__12553.call(this,v,start,end);
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
var this__12573 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12578 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12579 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12584 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12584.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12585 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12590 = this;
return cljs.core._first.call(null,this__12590.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12591 = this;
var temp__3695__auto____12596 = cljs.core.next.call(null,this__12591.front);

if(cljs.core.truth_(temp__3695__auto____12596))
{var f1__12597 = temp__3695__auto____12596;

return (new cljs.core.PersistentQueueSeq(this__12591.meta,f1__12597,this__12591.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12591.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12591.meta,this__12591.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12598 = this;
return this__12598.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12599 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12599.front,this__12599.rear));
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
var this__12613 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12618 = this;
if(cljs.core.truth_(this__12618.front))
{return (new cljs.core.PersistentQueue(this__12618.meta,(this__12618.count + 1),this__12618.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12619 = this__12618.rear;

if(cljs.core.truth_(or__3548__auto____12619))
{return or__3548__auto____12619;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12618.meta,(this__12618.count + 1),cljs.core.conj.call(null,this__12618.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12620 = this;
var rear__12625 = cljs.core.seq.call(null,this__12620.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12626 = this__12620.front;

if(cljs.core.truth_(or__3548__auto____12626))
{return or__3548__auto____12626;
} else
{return rear__12625;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12620.front,cljs.core.seq.call(null,rear__12625)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12627 = this;
return this__12627.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12629 = this;
return cljs.core._first.call(null,this__12629.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12632 = this;
if(cljs.core.truth_(this__12632.front))
{var temp__3695__auto____12637 = cljs.core.next.call(null,this__12632.front);

if(cljs.core.truth_(temp__3695__auto____12637))
{var f1__12638 = temp__3695__auto____12637;

return (new cljs.core.PersistentQueue(this__12632.meta,(this__12632.count - 1),f1__12638,this__12632.rear));
} else
{return (new cljs.core.PersistentQueue(this__12632.meta,(this__12632.count - 1),cljs.core.seq.call(null,this__12632.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12641 = this;
return cljs.core.first.call(null,this__12641.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12643 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12646 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12648 = this;
return (new cljs.core.PersistentQueue(meta,this__12648.count,this__12648.front,this__12648.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12650 = this;
return this__12650.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12652 = this;
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
var len__12749 = array.length;

var i__12750 = 0;

while(true){
if(cljs.core.truth_((i__12750 < len__12749)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12750]))))
{return i__12750;
} else
{{
var G__12762 = (i__12750 + incr);
i__12750 = G__12762;
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
var obj_map_contains_key_QMARK___12767 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12768 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12765 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12765))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12765;
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
return obj_map_contains_key_QMARK___12767.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12768.call(this,k,strobj,true_val,false_val);
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
var this__12790 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12839 = null;
var G__12839__12840 = (function (coll,k){
var this__12791 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12839__12841 = (function (coll,k,not_found){
var this__12792 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12792.strobj,(this__12792.strobj[k]),not_found);
});
G__12839 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12839__12840.call(this,coll,k);
case  3 :
return G__12839__12841.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12839;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12794 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12798 = goog.object.clone.call(null,this__12794.strobj);
var overwrite_QMARK___12799 = new_strobj__12798.hasOwnProperty(k);

(new_strobj__12798[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12799))
{return (new cljs.core.ObjMap(this__12794.meta,this__12794.keys,new_strobj__12798));
} else
{var new_keys__12801 = cljs.core.aclone.call(null,this__12794.keys);

new_keys__12801.push(k);
return (new cljs.core.ObjMap(this__12794.meta,new_keys__12801,new_strobj__12798));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12794.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12804 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12804.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12849 = null;
var G__12849__12850 = (function (coll,k){
var this__12806 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12849__12851 = (function (coll,k,not_found){
var this__12808 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12849 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12849__12850.call(this,coll,k);
case  3 :
return G__12849__12851.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12849;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12811 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12816 = this;
if(cljs.core.truth_((this__12816.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12775_SHARP_){
return cljs.core.vector.call(null,p1__12775_SHARP_,(this__12816.strobj[p1__12775_SHARP_]));
}),this__12816.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12819 = this;
return this__12819.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12821 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12822 = this;
return (new cljs.core.ObjMap(meta,this__12822.keys,this__12822.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12824 = this;
return this__12824.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12825 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12825.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12827 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12830 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12830))
{return this__12827.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12830;
}
})()))
{var new_keys__12832 = cljs.core.aclone.call(null,this__12827.keys);
var new_strobj__12833 = goog.object.clone.call(null,this__12827.strobj);

new_keys__12832.splice(cljs.core.scan_array.call(null,1,k,new_keys__12832),1);
cljs.core.js_delete.call(null,new_strobj__12833,k);
return (new cljs.core.ObjMap(this__12827.meta,new_keys__12832,new_strobj__12833));
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
var this__12880 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13082 = null;
var G__13082__13084 = (function (coll,k){
var this__12885 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13082__13085 = (function (coll,k,not_found){
var this__12886 = this;
var bucket__12890 = (this__12886.hashobj[cljs.core.hash.call(null,k)]);
var i__12894 = (cljs.core.truth_(bucket__12890)?cljs.core.scan_array.call(null,2,k,bucket__12890):null);

if(cljs.core.truth_(i__12894))
{return (bucket__12890[(i__12894 + 1)]);
} else
{return not_found;
}
});
G__13082 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13082__13084.call(this,coll,k);
case  3 :
return G__13082__13085.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13082;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12897 = this;
var h__12898 = cljs.core.hash.call(null,k);
var bucket__12902 = (this__12897.hashobj[h__12898]);

if(cljs.core.truth_(bucket__12902))
{var new_bucket__12904 = cljs.core.aclone.call(null,bucket__12902);
var new_hashobj__12930 = goog.object.clone.call(null,this__12897.hashobj);

(new_hashobj__12930[h__12898] = new_bucket__12904);
var temp__3695__auto____12933 = cljs.core.scan_array.call(null,2,k,new_bucket__12904);

if(cljs.core.truth_(temp__3695__auto____12933))
{var i__12936 = temp__3695__auto____12933;

(new_bucket__12904[(i__12936 + 1)] = v);
return (new cljs.core.HashMap(this__12897.meta,this__12897.count,new_hashobj__12930));
} else
{new_bucket__12904.push(k,v);
return (new cljs.core.HashMap(this__12897.meta,(this__12897.count + 1),new_hashobj__12930));
}
} else
{var new_hashobj__12939 = goog.object.clone.call(null,this__12897.hashobj);

(new_hashobj__12939[h__12898] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12897.meta,(this__12897.count + 1),new_hashobj__12939));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12942 = this;
var bucket__12944 = (this__12942.hashobj[cljs.core.hash.call(null,k)]);
var i__12947 = (cljs.core.truth_(bucket__12944)?cljs.core.scan_array.call(null,2,k,bucket__12944):null);

if(cljs.core.truth_(i__12947))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13107 = null;
var G__13107__13109 = (function (coll,k){
var this__12948 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13107__13110 = (function (coll,k,not_found){
var this__12950 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13107 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13107__13109.call(this,coll,k);
case  3 :
return G__13107__13110.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13107;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12952 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12957 = this;
if(cljs.core.truth_((this__12957.count > 0)))
{var hashes__12963 = cljs.core.js_keys.call(null,this__12957.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12876_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12957.hashobj[p1__12876_SHARP_])));
}),hashes__12963);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12964 = this;
return this__12964.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12969 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12972 = this;
return (new cljs.core.HashMap(meta,this__12972.count,this__12972.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12974 = this;
return this__12974.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12976 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12976.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12977 = this;
var h__12979 = cljs.core.hash.call(null,k);
var bucket__12980 = (this__12977.hashobj[h__12979]);
var i__12981 = (cljs.core.truth_(bucket__12980)?cljs.core.scan_array.call(null,2,k,bucket__12980):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12981)))
{return coll;
} else
{var new_hashobj__12984 = goog.object.clone.call(null,this__12977.hashobj);

if(cljs.core.truth_((3 > bucket__12980.length)))
{cljs.core.js_delete.call(null,new_hashobj__12984,h__12979);
} else
{var new_bucket__12987 = cljs.core.aclone.call(null,bucket__12980);

new_bucket__12987.splice(i__12981,2);
(new_hashobj__12984[h__12979] = new_bucket__12987);
}
return (new cljs.core.HashMap(this__12977.meta,(this__12977.count - 1),new_hashobj__12984));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13124 = ks.length;

var i__13125 = 0;
var out__13126 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13125 < len__13124)))
{{
var G__13143 = (i__13125 + 1);
var G__13145 = cljs.core.assoc.call(null,out__13126,(ks[i__13125]),(vs[i__13125]));
i__13125 = G__13143;
out__13126 = G__13145;
continue;
}
} else
{return out__13126;
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
var in$__13149 = cljs.core.seq.call(null,keyvals);
var out__13150 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13149))
{{
var G__13153 = cljs.core.nnext.call(null,in$__13149);
var G__13154 = cljs.core.assoc.call(null,out__13150,cljs.core.first.call(null,in$__13149),cljs.core.second.call(null,in$__13149));
in$__13149 = G__13153;
out__13150 = G__13154;
continue;
}
} else
{return out__13150;
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
hash_map.cljs$lang$applyTo = (function (arglist__13156){
var keyvals = cljs.core.seq( arglist__13156 );;
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
{return cljs.core.reduce.call(null,(function (p1__13166_SHARP_,p2__13167_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13181 = p1__13166_SHARP_;

if(cljs.core.truth_(or__3548__auto____13181))
{return or__3548__auto____13181;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13167_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13187){
var maps = cljs.core.seq( arglist__13187 );;
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
{var merge_entry__13192 = (function (m,e){
var k__13189 = cljs.core.first.call(null,e);
var v__13190 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13189)))
{return cljs.core.assoc.call(null,m,k__13189,f.call(null,cljs.core.get.call(null,m,k__13189),v__13190));
} else
{return cljs.core.assoc.call(null,m,k__13189,v__13190);
}
});
var merge2__13199 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13192,(function (){var or__3548__auto____13196 = m1;

if(cljs.core.truth_(or__3548__auto____13196))
{return or__3548__auto____13196;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13199,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13212){
var f = cljs.core.first(arglist__13212);
var maps = cljs.core.rest(arglist__13212);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13223 = cljs.core.ObjMap.fromObject([],{});
var keys__13227 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13227))
{var key__13228 = cljs.core.first.call(null,keys__13227);
var entry__13229 = cljs.core.get.call(null,map,key__13228,"﷐'user/not-found");

{
var G__13234 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13229,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13223,key__13228,entry__13229):ret__13223);
var G__13235 = cljs.core.next.call(null,keys__13227);
ret__13223 = G__13234;
keys__13227 = G__13235;
continue;
}
} else
{return ret__13223;
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
var this__13248 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13276 = null;
var G__13276__13277 = (function (coll,v){
var this__13249 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13276__13278 = (function (coll,v,not_found){
var this__13250 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13250.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13276 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13276__13277.call(this,coll,v);
case  3 :
return G__13276__13278.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13276;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13282 = null;
var G__13282__13283 = (function (coll,k){
var this__13255 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13282__13284 = (function (coll,k,not_found){
var this__13256 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13282 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13282__13283.call(this,coll,k);
case  3 :
return G__13282__13284.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13282;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13257 = this;
return (new cljs.core.Set(this__13257.meta,cljs.core.assoc.call(null,this__13257.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13260 = this;
return cljs.core.keys.call(null,this__13260.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13261 = this;
return (new cljs.core.Set(this__13261.meta,cljs.core.dissoc.call(null,this__13261.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13264 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13265 = this;
var and__3546__auto____13266 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13266))
{var and__3546__auto____13267 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13267))
{return cljs.core.every_QMARK_.call(null,(function (p1__13216_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13216_SHARP_);
}),other);
} else
{return and__3546__auto____13267;
}
} else
{return and__3546__auto____13266;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13271 = this;
return (new cljs.core.Set(meta,this__13271.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13272 = this;
return this__13272.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13273 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13273.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13296 = cljs.core.seq.call(null,coll);
var out__13297 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13296))))
{{
var G__13299 = cljs.core.rest.call(null,in$__13296);
var G__13300 = cljs.core.conj.call(null,out__13297,cljs.core.first.call(null,in$__13296));
in$__13296 = G__13299;
out__13297 = G__13300;
continue;
}
} else
{return out__13297;
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
{var n__13304 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13307 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13307))
{var e__13308 = temp__3695__auto____13307;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13308));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13304,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13295_SHARP_){
var temp__3695__auto____13312 = cljs.core.find.call(null,smap,p1__13295_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13312))
{var e__13313 = temp__3695__auto____13312;

return cljs.core.second.call(null,e__13313);
} else
{return p1__13295_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13376 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13364,seen){
while(true){
var vec__13365__13367 = p__13364;
var f__13368 = cljs.core.nth.call(null,vec__13365__13367,0,null);
var xs__13369 = vec__13365__13367;

var temp__3698__auto____13371 = cljs.core.seq.call(null,xs__13369);

if(cljs.core.truth_(temp__3698__auto____13371))
{var s__13372 = temp__3698__auto____13371;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13368)))
{{
var G__13387 = cljs.core.rest.call(null,s__13372);
var G__13388 = seen;
p__13364 = G__13387;
seen = G__13388;
continue;
}
} else
{return cljs.core.cons.call(null,f__13368,step.call(null,cljs.core.rest.call(null,s__13372),cljs.core.conj.call(null,seen,f__13368)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13376.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13402 = cljs.core.Vector.fromArray([]);
var s__13403 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13403)))
{{
var G__13406 = cljs.core.conj.call(null,ret__13402,cljs.core.first.call(null,s__13403));
var G__13407 = cljs.core.next.call(null,s__13403);
ret__13402 = G__13406;
s__13403 = G__13407;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13402);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13412 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13412))
{return or__3548__auto____13412;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13415 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13415 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13415 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13428 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13428))
{return or__3548__auto____13428;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13430 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13430 > -1)))
{return cljs.core.subs.call(null,x,2,i__13430);
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
var map__13439 = cljs.core.ObjMap.fromObject([],{});
var ks__13440 = cljs.core.seq.call(null,keys);
var vs__13441 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13445 = ks__13440;

if(cljs.core.truth_(and__3546__auto____13445))
{return vs__13441;
} else
{return and__3546__auto____13445;
}
})()))
{{
var G__13457 = cljs.core.assoc.call(null,map__13439,cljs.core.first.call(null,ks__13440),cljs.core.first.call(null,vs__13441));
var G__13458 = cljs.core.next.call(null,ks__13440);
var G__13459 = cljs.core.next.call(null,vs__13441);
map__13439 = G__13457;
ks__13440 = G__13458;
vs__13441 = G__13459;
continue;
}
} else
{return map__13439;
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
var max_key__13475 = (function (k,x){
return x;
});
var max_key__13481 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13482 = (function() { 
var G__13505__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13435_SHARP_,p2__13436_SHARP_){
return max_key.call(null,k,p1__13435_SHARP_,p2__13436_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13505 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13505__delegate.call(this, k, x, y, more);
};
G__13505.cljs$lang$maxFixedArity = 3;
G__13505.cljs$lang$applyTo = (function (arglist__13528){
var k = cljs.core.first(arglist__13528);
var x = cljs.core.first(cljs.core.next(arglist__13528));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13528)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13528)));
return G__13505__delegate.call(this, k, x, y, more);
});
return G__13505;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13475.call(this,k,x);
case  3 :
return max_key__13481.call(this,k,x,y);
default:
return max_key__13482.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13482.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13536 = (function (k,x){
return x;
});
var min_key__13538 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13539 = (function() { 
var G__13543__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13465_SHARP_,p2__13466_SHARP_){
return min_key.call(null,k,p1__13465_SHARP_,p2__13466_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13543 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13543__delegate.call(this, k, x, y, more);
};
G__13543.cljs$lang$maxFixedArity = 3;
G__13543.cljs$lang$applyTo = (function (arglist__13545){
var k = cljs.core.first(arglist__13545);
var x = cljs.core.first(cljs.core.next(arglist__13545));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13545)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13545)));
return G__13543__delegate.call(this, k, x, y, more);
});
return G__13543;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13536.call(this,k,x);
case  3 :
return min_key__13538.call(this,k,x,y);
default:
return min_key__13539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13539.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13561 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13562 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13546 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13546))
{var s__13550 = temp__3698__auto____13546;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13550),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13550)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13561.call(this,n,step);
case  3 :
return partition_all__13562.call(this,n,step,coll);
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
var temp__3698__auto____13589 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13589))
{var s__13592 = temp__3698__auto____13589;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13592))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13592),take_while.call(null,pred,cljs.core.rest.call(null,s__13592)));
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
var this__13598 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13599 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13702 = null;
var G__13702__13703 = (function (rng,f){
var this__13603 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13702__13704 = (function (rng,f,s){
var this__13606 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13702 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13702__13703.call(this,rng,f);
case  3 :
return G__13702__13704.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13702;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13609 = this;
var comp__13610 = (cljs.core.truth_((this__13609.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13610.call(null,this__13609.start,this__13609.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13612 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13612.end - this__13612.start) / this__13612.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13616 = this;
return this__13616.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13619 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13619.meta,(this__13619.start + this__13619.step),this__13619.end,this__13619.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13620 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13622 = this;
return (new cljs.core.Range(meta,this__13622.start,this__13622.end,this__13622.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13627 = this;
return this__13627.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13772 = null;
var G__13772__13776 = (function (rng,n){
var this__13628 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13628.start + (n * this__13628.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13635 = (this__13628.start > this__13628.end);

if(cljs.core.truth_(and__3546__auto____13635))
{return cljs.core._EQ_.call(null,this__13628.step,0);
} else
{return and__3546__auto____13635;
}
})()))
{return this__13628.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13772__13777 = (function (rng,n,not_found){
var this__13636 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13636.start + (n * this__13636.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13637 = (this__13636.start > this__13636.end);

if(cljs.core.truth_(and__3546__auto____13637))
{return cljs.core._EQ_.call(null,this__13636.step,0);
} else
{return and__3546__auto____13637;
}
})()))
{return this__13636.start;
} else
{return not_found;
}
}
});
G__13772 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13772__13776.call(this,rng,n);
case  3 :
return G__13772__13777.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13772;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13701 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13701.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13814 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13816 = (function (end){
return range.call(null,0,end,1);
});
var range__13817 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13818 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13814.call(this);
case  1 :
return range__13816.call(this,start);
case  2 :
return range__13817.call(this,start,end);
case  3 :
return range__13818.call(this,start,end,step);
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
var temp__3698__auto____13824 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13824))
{var s__13825 = temp__3698__auto____13824;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13825),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13825)));
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
var temp__3698__auto____13844 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13844))
{var s__13845 = temp__3698__auto____13844;

var fst__13846 = cljs.core.first.call(null,s__13845);
var fv__13847 = f.call(null,fst__13846);
var run__13890 = cljs.core.cons.call(null,fst__13846,cljs.core.take_while.call(null,(function (p1__13838_SHARP_){
return cljs.core._EQ_.call(null,fv__13847,f.call(null,p1__13838_SHARP_));
}),cljs.core.next.call(null,s__13845)));

return cljs.core.cons.call(null,run__13890,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13890),s__13845))));
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
var reductions__13933 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13922 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13922))
{var s__13923 = temp__3695__auto____13922;

return reductions.call(null,f,cljs.core.first.call(null,s__13923),cljs.core.rest.call(null,s__13923));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13934 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13931 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13931))
{var s__13932 = temp__3698__auto____13931;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13932)),cljs.core.rest.call(null,s__13932));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13933.call(this,f,init);
case  3 :
return reductions__13934.call(this,f,init,coll);
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
var juxt__14030 = (function (f){
return (function() {
var G__14035 = null;
var G__14035__14036 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14035__14037 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14035__14038 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14035__14039 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14035__14040 = (function() { 
var G__14047__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14047 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14047__delegate.call(this, x, y, z, args);
};
G__14047.cljs$lang$maxFixedArity = 3;
G__14047.cljs$lang$applyTo = (function (arglist__14055){
var x = cljs.core.first(arglist__14055);
var y = cljs.core.first(cljs.core.next(arglist__14055));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14055)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14055)));
return G__14047__delegate.call(this, x, y, z, args);
});
return G__14047;
})()
;
G__14035 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14035__14036.call(this);
case  1 :
return G__14035__14037.call(this,x);
case  2 :
return G__14035__14038.call(this,x,y);
case  3 :
return G__14035__14039.call(this,x,y,z);
default:
return G__14035__14040.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14035.cljs$lang$maxFixedArity = 3;
G__14035.cljs$lang$applyTo = G__14035__14040.cljs$lang$applyTo;
return G__14035;
})()
});
var juxt__14031 = (function (f,g){
return (function() {
var G__14059 = null;
var G__14059__14061 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14059__14062 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14059__14063 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14059__14064 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14059__14066 = (function() { 
var G__14077__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14077 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14077__delegate.call(this, x, y, z, args);
};
G__14077.cljs$lang$maxFixedArity = 3;
G__14077.cljs$lang$applyTo = (function (arglist__14078){
var x = cljs.core.first(arglist__14078);
var y = cljs.core.first(cljs.core.next(arglist__14078));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14078)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14078)));
return G__14077__delegate.call(this, x, y, z, args);
});
return G__14077;
})()
;
G__14059 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14059__14061.call(this);
case  1 :
return G__14059__14062.call(this,x);
case  2 :
return G__14059__14063.call(this,x,y);
case  3 :
return G__14059__14064.call(this,x,y,z);
default:
return G__14059__14066.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14059.cljs$lang$maxFixedArity = 3;
G__14059.cljs$lang$applyTo = G__14059__14066.cljs$lang$applyTo;
return G__14059;
})()
});
var juxt__14032 = (function (f,g,h){
return (function() {
var G__14080 = null;
var G__14080__14081 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14080__14082 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14080__14083 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14080__14084 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14080__14085 = (function() { 
var G__14107__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14107 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14107__delegate.call(this, x, y, z, args);
};
G__14107.cljs$lang$maxFixedArity = 3;
G__14107.cljs$lang$applyTo = (function (arglist__14110){
var x = cljs.core.first(arglist__14110);
var y = cljs.core.first(cljs.core.next(arglist__14110));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14110)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14110)));
return G__14107__delegate.call(this, x, y, z, args);
});
return G__14107;
})()
;
G__14080 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14080__14081.call(this);
case  1 :
return G__14080__14082.call(this,x);
case  2 :
return G__14080__14083.call(this,x,y);
case  3 :
return G__14080__14084.call(this,x,y,z);
default:
return G__14080__14085.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14080.cljs$lang$maxFixedArity = 3;
G__14080.cljs$lang$applyTo = G__14080__14085.cljs$lang$applyTo;
return G__14080;
})()
});
var juxt__14033 = (function() { 
var G__14113__delegate = function (f,g,h,fs){
var fs__14021 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14114 = null;
var G__14114__14116 = (function (){
return cljs.core.reduce.call(null,(function (p1__13902_SHARP_,p2__13903_SHARP_){
return cljs.core.conj.call(null,p1__13902_SHARP_,p2__13903_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14021);
});
var G__14114__14117 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13904_SHARP_,p2__13908_SHARP_){
return cljs.core.conj.call(null,p1__13904_SHARP_,p2__13908_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14021);
});
var G__14114__14118 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13912_SHARP_,p2__13914_SHARP_){
return cljs.core.conj.call(null,p1__13912_SHARP_,p2__13914_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14021);
});
var G__14114__14119 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13915_SHARP_,p2__13916_SHARP_){
return cljs.core.conj.call(null,p1__13915_SHARP_,p2__13916_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14021);
});
var G__14114__14120 = (function() { 
var G__14136__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13917_SHARP_,p2__13918_SHARP_){
return cljs.core.conj.call(null,p1__13917_SHARP_,cljs.core.apply.call(null,p2__13918_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14021);
};
var G__14136 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14136__delegate.call(this, x, y, z, args);
};
G__14136.cljs$lang$maxFixedArity = 3;
G__14136.cljs$lang$applyTo = (function (arglist__14141){
var x = cljs.core.first(arglist__14141);
var y = cljs.core.first(cljs.core.next(arglist__14141));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14141)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14141)));
return G__14136__delegate.call(this, x, y, z, args);
});
return G__14136;
})()
;
G__14114 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14114__14116.call(this);
case  1 :
return G__14114__14117.call(this,x);
case  2 :
return G__14114__14118.call(this,x,y);
case  3 :
return G__14114__14119.call(this,x,y,z);
default:
return G__14114__14120.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14114.cljs$lang$maxFixedArity = 3;
G__14114.cljs$lang$applyTo = G__14114__14120.cljs$lang$applyTo;
return G__14114;
})()
};
var G__14113 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14113__delegate.call(this, f, g, h, fs);
};
G__14113.cljs$lang$maxFixedArity = 3;
G__14113.cljs$lang$applyTo = (function (arglist__14143){
var f = cljs.core.first(arglist__14143);
var g = cljs.core.first(cljs.core.next(arglist__14143));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14143)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14143)));
return G__14113__delegate.call(this, f, g, h, fs);
});
return G__14113;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14030.call(this,f);
case  2 :
return juxt__14031.call(this,f,g);
case  3 :
return juxt__14032.call(this,f,g,h);
default:
return juxt__14033.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14033.cljs$lang$applyTo;
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
var dorun__14152 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14155 = cljs.core.next.call(null,coll);
coll = G__14155;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14153 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14147 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14147))
{return (n > 0);
} else
{return and__3546__auto____14147;
}
})()))
{{
var G__14156 = (n - 1);
var G__14158 = cljs.core.next.call(null,coll);
n = G__14156;
coll = G__14158;
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
return dorun__14152.call(this,n);
case  2 :
return dorun__14153.call(this,n,coll);
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
var doall__14174 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14175 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14174.call(this,n);
case  2 :
return doall__14175.call(this,n,coll);
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
var matches__14190 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14190),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14190),1)))
{return cljs.core.first.call(null,matches__14190);
} else
{return cljs.core.vec.call(null,matches__14190);
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
var matches__14199 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14199)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14199),1)))
{return cljs.core.first.call(null,matches__14199);
} else
{return cljs.core.vec.call(null,matches__14199);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14201 = cljs.core.re_find.call(null,re,s);
var match_idx__14202 = s.search(re);
var match_str__14203 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14201))?cljs.core.first.call(null,match_data__14201):match_data__14201);
var post_match__14205 = cljs.core.subs.call(null,s,(match_idx__14202 + cljs.core.count.call(null,match_str__14203)));

if(cljs.core.truth_(match_data__14201))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14201,re_seq.call(null,re,post_match__14205));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14223_SHARP_){
return print_one.call(null,p1__14223_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14236 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14236))
{var and__3546__auto____14244 = (function (){var x__445__auto____14237 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14240 = x__445__auto____14237;

if(cljs.core.truth_(and__3546__auto____14240))
{var and__3546__auto____14241 = x__445__auto____14237.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14241))
{return cljs.core.not.call(null,x__445__auto____14237.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14241;
}
} else
{return and__3546__auto____14240;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14237);
}
})();

if(cljs.core.truth_(and__3546__auto____14244))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14244;
}
} else
{return and__3546__auto____14236;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14247 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14249 = x__445__auto____14247;

if(cljs.core.truth_(and__3546__auto____14249))
{var and__3546__auto____14258 = x__445__auto____14247.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14258))
{return cljs.core.not.call(null,x__445__auto____14247.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14258;
}
} else
{return and__3546__auto____14249;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14247);
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
var sb__14281 = (new goog.string.StringBuffer());

var G__14282__14285 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14282__14285))
{var obj__14287 = cljs.core.first.call(null,G__14282__14285);
var G__14282__14288 = G__14282__14285;

while(true){
if(cljs.core.truth_((obj__14287 === first_obj__14280)))
{} else
{sb__14281.append(" ");
}
var G__14291__14293 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14287,opts));

if(cljs.core.truth_(G__14291__14293))
{var string__14301 = cljs.core.first.call(null,G__14291__14293);
var G__14291__14302 = G__14291__14293;

while(true){
sb__14281.append(string__14301);
var temp__3698__auto____14306 = cljs.core.next.call(null,G__14291__14302);

if(cljs.core.truth_(temp__3698__auto____14306))
{var G__14291__14307 = temp__3698__auto____14306;

{
var G__14317 = cljs.core.first.call(null,G__14291__14307);
var G__14318 = G__14291__14307;
string__14301 = G__14317;
G__14291__14302 = G__14318;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14310 = cljs.core.next.call(null,G__14282__14288);

if(cljs.core.truth_(temp__3698__auto____14310))
{var G__14282__14311 = temp__3698__auto____14310;

{
var G__14319 = cljs.core.first.call(null,G__14282__14311);
var G__14320 = G__14282__14311;
obj__14287 = G__14319;
G__14282__14288 = G__14320;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14281);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14321 = cljs.core.first.call(null,objs);

var G__14322__14325 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14322__14325))
{var obj__14328 = cljs.core.first.call(null,G__14322__14325);
var G__14322__14329 = G__14322__14325;

while(true){
if(cljs.core.truth_((obj__14328 === first_obj__14321)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14336__14340 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14328,opts));

if(cljs.core.truth_(G__14336__14340))
{var string__14345 = cljs.core.first.call(null,G__14336__14340);
var G__14336__14346 = G__14336__14340;

while(true){
cljs.core.string_print.call(null,string__14345);
var temp__3698__auto____14348 = cljs.core.next.call(null,G__14336__14346);

if(cljs.core.truth_(temp__3698__auto____14348))
{var G__14336__14349 = temp__3698__auto____14348;

{
var G__14364 = cljs.core.first.call(null,G__14336__14349);
var G__14365 = G__14336__14349;
string__14345 = G__14364;
G__14336__14346 = G__14365;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14352 = cljs.core.next.call(null,G__14322__14329);

if(cljs.core.truth_(temp__3698__auto____14352))
{var G__14322__14353 = temp__3698__auto____14352;

{
var G__14369 = cljs.core.first.call(null,G__14322__14353);
var G__14370 = G__14322__14353;
obj__14328 = G__14369;
G__14322__14329 = G__14370;
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
pr_str.cljs$lang$applyTo = (function (arglist__14384){
var objs = cljs.core.seq( arglist__14384 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14402){
var objs = cljs.core.seq( arglist__14402 );;
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
println.cljs$lang$applyTo = (function (arglist__14412){
var objs = cljs.core.seq( arglist__14412 );;
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
prn.cljs$lang$applyTo = (function (arglist__14428){
var objs = cljs.core.seq( arglist__14428 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14442 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14442,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14449 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14449))
{var nspc__14450 = temp__3698__auto____14449;

return cljs.core.str.call(null,nspc__14450,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14452 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14452))
{var nspc__14453 = temp__3698__auto____14452;

return cljs.core.str.call(null,nspc__14453,"/");
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
var pr_pair__14470 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14470,"{",", ","}",opts,coll);
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
var this__14516 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14521 = this;
var G__14526__14529 = cljs.core.seq.call(null,this__14521.watches);

if(cljs.core.truth_(G__14526__14529))
{var G__14534__14538 = cljs.core.first.call(null,G__14526__14529);
var vec__14535__14539 = G__14534__14538;
var key__14540 = cljs.core.nth.call(null,vec__14535__14539,0,null);
var f__14542 = cljs.core.nth.call(null,vec__14535__14539,1,null);
var G__14526__14543 = G__14526__14529;

var G__14534__14544 = G__14534__14538;
var G__14526__14545 = G__14526__14543;

while(true){
var vec__14546__14547 = G__14534__14544;
var key__14550 = cljs.core.nth.call(null,vec__14546__14547,0,null);
var f__14551 = cljs.core.nth.call(null,vec__14546__14547,1,null);
var G__14526__14552 = G__14526__14545;

f__14551.call(null,key__14550,this$,oldval,newval);
var temp__3698__auto____14553 = cljs.core.next.call(null,G__14526__14552);

if(cljs.core.truth_(temp__3698__auto____14553))
{var G__14526__14556 = temp__3698__auto____14553;

{
var G__14577 = cljs.core.first.call(null,G__14526__14556);
var G__14578 = G__14526__14556;
G__14534__14544 = G__14577;
G__14526__14545 = G__14578;
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
var this__14557 = this;
return this$.watches = cljs.core.assoc.call(null,this__14557.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14560 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14560.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14563 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14563.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14565 = this;
return this__14565.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14566 = this;
return this__14566.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14567 = this;
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
var atom__14597 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14598 = (function() { 
var G__14600__delegate = function (x,p__14585){
var map__14587__14590 = p__14585;
var map__14587__14594 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14587__14590))?cljs.core.apply.call(null,cljs.core.hash_map,map__14587__14590):map__14587__14590);
var validator__14595 = cljs.core.get.call(null,map__14587__14594,"﷐'validator");
var meta__14596 = cljs.core.get.call(null,map__14587__14594,"﷐'meta");

return (new cljs.core.Atom(x,meta__14596,validator__14595,null));
};
var G__14600 = function (x,var_args){
var p__14585 = null;
if (goog.isDef(var_args)) {
  p__14585 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14600__delegate.call(this, x, p__14585);
};
G__14600.cljs$lang$maxFixedArity = 1;
G__14600.cljs$lang$applyTo = (function (arglist__14602){
var x = cljs.core.first(arglist__14602);
var p__14585 = cljs.core.rest(arglist__14602);
return G__14600__delegate.call(this, x, p__14585);
});
return G__14600;
})()
;
atom = function(x,var_args){
var p__14585 = var_args;
switch(arguments.length){
case  1 :
return atom__14597.call(this,x);
default:
return atom__14598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14598.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14605 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14605))
{var validate__14606 = temp__3698__auto____14605;

if(cljs.core.truth_(validate__14606.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14615 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14615,new_value);
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
var swap_BANG___14641 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14642 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14643 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14644 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14645 = (function() { 
var G__14653__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14653 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14653__delegate.call(this, a, f, x, y, z, more);
};
G__14653.cljs$lang$maxFixedArity = 5;
G__14653.cljs$lang$applyTo = (function (arglist__14655){
var a = cljs.core.first(arglist__14655);
var f = cljs.core.first(cljs.core.next(arglist__14655));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14655)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14655))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14655)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14655)))));
return G__14653__delegate.call(this, a, f, x, y, z, more);
});
return G__14653;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14641.call(this,a,f);
case  3 :
return swap_BANG___14642.call(this,a,f,x);
case  4 :
return swap_BANG___14643.call(this,a,f,x,y);
case  5 :
return swap_BANG___14644.call(this,a,f,x,y,z);
default:
return swap_BANG___14645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14645.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14682){
var iref = cljs.core.first(arglist__14682);
var f = cljs.core.first(cljs.core.next(arglist__14682));
var args = cljs.core.rest(cljs.core.next(arglist__14682));
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
var gensym__14848 = (function (){
return gensym.call(null,"G__");
});
var gensym__14849 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14848.call(this);
case  1 :
return gensym__14849.call(this,prefix_string);
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
var this__14861 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14861.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14868 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14868.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14868.state,this__14868.f);
}
return cljs.core.deref.call(null,this__14868.state);
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
delay.cljs$lang$applyTo = (function (arglist__14884){
var body = cljs.core.seq( arglist__14884 );;
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
var map__14908__14910 = options;
var map__14908__14911 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14908__14910))?cljs.core.apply.call(null,cljs.core.hash_map,map__14908__14910):map__14908__14910);
var keywordize_keys__14912 = cljs.core.get.call(null,map__14908__14911,"﷐'keywordize-keys");
var keyfn__14914 = (cljs.core.truth_(keywordize_keys__14912)?cljs.core.keyword:cljs.core.str);
var f__14932 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14930 = (function iter__14917(s__14918){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14918__14924 = s__14918;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14918__14924)))
{var k__14926 = cljs.core.first.call(null,s__14918__14924);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14914.call(null,k__14926),thisfn.call(null,(x[k__14926]))]),iter__14917.call(null,cljs.core.rest.call(null,s__14918__14924)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14930.call(null,cljs.core.js_keys.call(null,x));
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

return f__14932.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14940){
var x = cljs.core.first(arglist__14940);
var options = cljs.core.rest(arglist__14940);
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
var mem__14944 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14961__delegate = function (args){
var temp__3695__auto____14948 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14944),args);

if(cljs.core.truth_(temp__3695__auto____14948))
{var v__14950 = temp__3695__auto____14948;

return v__14950;
} else
{var ret__14956 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14944,cljs.core.assoc,args,ret__14956);
return ret__14956;
}
};
var G__14961 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14961__delegate.call(this, args);
};
G__14961.cljs$lang$maxFixedArity = 0;
G__14961.cljs$lang$applyTo = (function (arglist__14963){
var args = cljs.core.seq( arglist__14963 );;
return G__14961__delegate.call(this, args);
});
return G__14961;
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
var trampoline__14970 = (function (f){
while(true){
var ret__14965 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14965)))
{{
var G__14973 = ret__14965;
f = G__14973;
continue;
}
} else
{return ret__14965;
}
break;
}
});
var trampoline__14971 = (function() { 
var G__14974__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14974 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14974__delegate.call(this, f, args);
};
G__14974.cljs$lang$maxFixedArity = 1;
G__14974.cljs$lang$applyTo = (function (arglist__14975){
var f = cljs.core.first(arglist__14975);
var args = cljs.core.rest(arglist__14975);
return G__14974__delegate.call(this, f, args);
});
return G__14974;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14970.call(this,f);
default:
return trampoline__14971.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14971.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14977 = (function (){
return rand.call(null,1);
});
var rand__14978 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14977.call(this);
case  1 :
return rand__14978.call(this,n);
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
var k__14992 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14992,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14992,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15043 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15044 = (function (h,child,parent){
var or__3548__auto____15032 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15032))
{return or__3548__auto____15032;
} else
{var or__3548__auto____15034 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15034))
{return or__3548__auto____15034;
} else
{var and__3546__auto____15035 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15035))
{var and__3546__auto____15037 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15037))
{var and__3546__auto____15039 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15039))
{var ret__15040 = true;
var i__15041 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15042 = cljs.core.not.call(null,ret__15040);

if(cljs.core.truth_(or__3548__auto____15042))
{return or__3548__auto____15042;
} else
{return cljs.core._EQ_.call(null,i__15041,cljs.core.count.call(null,parent));
}
})()))
{return ret__15040;
} else
{{
var G__15047 = isa_QMARK_.call(null,h,child.call(null,i__15041),parent.call(null,i__15041));
var G__15049 = (i__15041 + 1);
ret__15040 = G__15047;
i__15041 = G__15049;
continue;
}
}
break;
}
} else
{return and__3546__auto____15039;
}
} else
{return and__3546__auto____15037;
}
} else
{return and__3546__auto____15035;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15043.call(this,h,child);
case  3 :
return isa_QMARK___15044.call(this,h,child,parent);
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
var parents__15060 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15061 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15060.call(this,h);
case  2 :
return parents__15061.call(this,h,tag);
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
var ancestors__15147 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15148 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15147.call(this,h);
case  2 :
return ancestors__15148.call(this,h,tag);
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
var descendants__15188 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15189 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15188.call(this,h);
case  2 :
return descendants__15189.call(this,h,tag);
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
var derive__15214 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15215 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15199 = "﷐'parents".call(null,h);
var td__15202 = "﷐'descendants".call(null,h);
var ta__15203 = "﷐'ancestors".call(null,h);
var tf__15204 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15207 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15199.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15203.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15203.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15199,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15204.call(null,"﷐'ancestors".call(null,h),tag,td__15202,parent,ta__15203),"﷐'descendants":tf__15204.call(null,"﷐'descendants".call(null,h),parent,ta__15203,tag,td__15202)});
})());

if(cljs.core.truth_(or__3548__auto____15207))
{return or__3548__auto____15207;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15214.call(this,h,tag);
case  3 :
return derive__15215.call(this,h,tag,parent);
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
var underive__15254 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15257 = (function (h,tag,parent){
var parentMap__15240 = "﷐'parents".call(null,h);
var childsParents__15245 = (cljs.core.truth_(parentMap__15240.call(null,tag))?cljs.core.disj.call(null,parentMap__15240.call(null,tag),parent):cljs.core.set([]));
var newParents__15246 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15245))?cljs.core.assoc.call(null,parentMap__15240,tag,childsParents__15245):cljs.core.dissoc.call(null,parentMap__15240,tag));
var deriv_seq__15248 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15195_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15195_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15195_SHARP_),cljs.core.second.call(null,p1__15195_SHARP_)));
}),cljs.core.seq.call(null,newParents__15246)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15240.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15196_SHARP_,p2__15197_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15196_SHARP_,p2__15197_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15248));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15254.call(this,h,tag);
case  3 :
return underive__15257.call(this,h,tag,parent);
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
var xprefs__15281 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15287 = (cljs.core.truth_((function (){var and__3546__auto____15282 = xprefs__15281;

if(cljs.core.truth_(and__3546__auto____15282))
{return xprefs__15281.call(null,y);
} else
{return and__3546__auto____15282;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15287))
{return or__3548__auto____15287;
} else
{var or__3548__auto____15290 = (function (){var ps__15288 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15288) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15288),prefer_table)))
{} else
{}
{
var G__15296 = cljs.core.rest.call(null,ps__15288);
ps__15288 = G__15296;
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
{var or__3548__auto____15292 = (function (){var ps__15291 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15291) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15291),y,prefer_table)))
{} else
{}
{
var G__15346 = cljs.core.rest.call(null,ps__15291);
ps__15291 = G__15346;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15292))
{return or__3548__auto____15292;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15353 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15353))
{return or__3548__auto____15353;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15367 = cljs.core.reduce.call(null,(function (be,p__15357){
var vec__15358__15360 = p__15357;
var k__15361 = cljs.core.nth.call(null,vec__15358__15360,0,null);
var ___15362 = cljs.core.nth.call(null,vec__15358__15360,1,null);
var e__15363 = vec__15358__15360;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15361)))
{var be2__15366 = (cljs.core.truth_((function (){var or__3548__auto____15364 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15364))
{return or__3548__auto____15364;
} else
{return cljs.core.dominates.call(null,k__15361,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15363:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15366),k__15361,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15361," and ",cljs.core.first.call(null,be2__15366),", and neither is preferred")));
}
return be2__15366;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15367))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15367));
return cljs.core.second.call(null,best_entry__15367);
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
if(cljs.core.truth_((function (){var and__3546__auto____15385 = mf;

if(cljs.core.truth_(and__3546__auto____15385))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15385;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15388 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15388))
{return or__3548__auto____15388;
} else
{var or__3548__auto____15389 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15389))
{return or__3548__auto____15389;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15392 = mf;

if(cljs.core.truth_(and__3546__auto____15392))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15392;
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
if(cljs.core.truth_((function (){var and__3546__auto____15398 = mf;

if(cljs.core.truth_(and__3546__auto____15398))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15398;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15400 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15400))
{return or__3548__auto____15400;
} else
{var or__3548__auto____15402 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15402))
{return or__3548__auto____15402;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15407 = mf;

if(cljs.core.truth_(and__3546__auto____15407))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15407;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15409 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15409))
{return or__3548__auto____15409;
} else
{var or__3548__auto____15411 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15411))
{return or__3548__auto____15411;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15416 = mf;

if(cljs.core.truth_(and__3546__auto____15416))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15416;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15418 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15418))
{return or__3548__auto____15418;
} else
{var or__3548__auto____15420 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15420))
{return or__3548__auto____15420;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15424 = mf;

if(cljs.core.truth_(and__3546__auto____15424))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15424;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15427 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15427))
{return or__3548__auto____15427;
} else
{var or__3548__auto____15428 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15428))
{return or__3548__auto____15428;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15433 = mf;

if(cljs.core.truth_(and__3546__auto____15433))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15433;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15435 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15435))
{return or__3548__auto____15435;
} else
{var or__3548__auto____15436 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15436))
{return or__3548__auto____15436;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15439 = mf;

if(cljs.core.truth_(and__3546__auto____15439))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15439;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15441 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15441))
{return or__3548__auto____15441;
} else
{var or__3548__auto____15442 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15442))
{return or__3548__auto____15442;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15459 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15460 = cljs.core._get_method.call(null,mf,dispatch_val__15459);

if(cljs.core.truth_(target_fn__15460))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15459)));
}
return cljs.core.apply.call(null,target_fn__15460,args);
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
var this__15465 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15466 = this;
cljs.core.swap_BANG_.call(null,this__15466.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15466.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15466.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15466.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15470 = this;
cljs.core.swap_BANG_.call(null,this__15470.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15470.method_cache,this__15470.method_table,this__15470.cached_hierarchy,this__15470.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15471 = this;
cljs.core.swap_BANG_.call(null,this__15471.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15471.method_cache,this__15471.method_table,this__15471.cached_hierarchy,this__15471.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15473 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15473.cached_hierarchy),cljs.core.deref.call(null,this__15473.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15473.method_cache,this__15473.method_table,this__15473.cached_hierarchy,this__15473.hierarchy);
}
var temp__3695__auto____15476 = cljs.core.deref.call(null,this__15473.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15476))
{var target_fn__15478 = temp__3695__auto____15476;

return target_fn__15478;
} else
{var temp__3695__auto____15479 = cljs.core.find_and_cache_best_method.call(null,this__15473.name,dispatch_val,this__15473.hierarchy,this__15473.method_table,this__15473.prefer_table,this__15473.method_cache,this__15473.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15479))
{var target_fn__15480 = temp__3695__auto____15479;

return target_fn__15480;
} else
{return cljs.core.deref.call(null,this__15473.method_table).call(null,this__15473.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15482 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15482.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15482.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15482.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15482.method_cache,this__15482.method_table,this__15482.cached_hierarchy,this__15482.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15490 = this;
return cljs.core.deref.call(null,this__15490.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15491 = this;
return cljs.core.deref.call(null,this__15491.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15499 = this;
return cljs.core.do_dispatch.call(null,mf,this__15499.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15514__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15514 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15514__delegate.call(this, _, args);
};
G__15514.cljs$lang$maxFixedArity = 1;
G__15514.cljs$lang$applyTo = (function (arglist__15516){
var _ = cljs.core.first(arglist__15516);
var args = cljs.core.rest(arglist__15516);
return G__15514__delegate.call(this, _, args);
});
return G__15514;
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
