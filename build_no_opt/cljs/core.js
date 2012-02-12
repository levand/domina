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
var or__3548__auto____7348 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7348))
{return or__3548__auto____7348;
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
var _invoke__7673 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7410 = this$;

if(cljs.core.truth_(and__3546__auto____7410))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7410;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7411 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7411))
{return or__3548__auto____7411;
} else
{var or__3548__auto____7413 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7413))
{return or__3548__auto____7413;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7674 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7415 = this$;

if(cljs.core.truth_(and__3546__auto____7415))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7415;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7417 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7417))
{return or__3548__auto____7417;
} else
{var or__3548__auto____7418 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7418))
{return or__3548__auto____7418;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7675 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7419 = this$;

if(cljs.core.truth_(and__3546__auto____7419))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7419;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7420 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7420))
{return or__3548__auto____7420;
} else
{var or__3548__auto____7421 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7421))
{return or__3548__auto____7421;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7676 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7423 = this$;

if(cljs.core.truth_(and__3546__auto____7423))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7423;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7425 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7425))
{return or__3548__auto____7425;
} else
{var or__3548__auto____7427 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7427))
{return or__3548__auto____7427;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7677 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7428 = this$;

if(cljs.core.truth_(and__3546__auto____7428))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7428;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7431 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7431))
{return or__3548__auto____7431;
} else
{var or__3548__auto____7432 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7432))
{return or__3548__auto____7432;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7678 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7434 = this$;

if(cljs.core.truth_(and__3546__auto____7434))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7434;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7437 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7437))
{return or__3548__auto____7437;
} else
{var or__3548__auto____7438 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7438))
{return or__3548__auto____7438;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7679 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7440 = this$;

if(cljs.core.truth_(and__3546__auto____7440))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7440;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7441 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7441))
{return or__3548__auto____7441;
} else
{var or__3548__auto____7444 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7444))
{return or__3548__auto____7444;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7680 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7445 = this$;

if(cljs.core.truth_(and__3546__auto____7445))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7445;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
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
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7681 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7451 = this$;

if(cljs.core.truth_(and__3546__auto____7451))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7451;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7453 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7453))
{return or__3548__auto____7453;
} else
{var or__3548__auto____7454 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7454))
{return or__3548__auto____7454;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7682 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7457 = this$;

if(cljs.core.truth_(and__3546__auto____7457))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7457;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7459 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7459))
{return or__3548__auto____7459;
} else
{var or__3548__auto____7460 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7460))
{return or__3548__auto____7460;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7683 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7463 = this$;

if(cljs.core.truth_(and__3546__auto____7463))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7463;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7464 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7464))
{return or__3548__auto____7464;
} else
{var or__3548__auto____7466 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7466))
{return or__3548__auto____7466;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7684 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7469 = this$;

if(cljs.core.truth_(and__3546__auto____7469))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7469;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7471 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7471))
{return or__3548__auto____7471;
} else
{var or__3548__auto____7636 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7636))
{return or__3548__auto____7636;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7685 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7637 = this$;

if(cljs.core.truth_(and__3546__auto____7637))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7637;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7639 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7639))
{return or__3548__auto____7639;
} else
{var or__3548__auto____7640 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7640))
{return or__3548__auto____7640;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7686 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7642 = this$;

if(cljs.core.truth_(and__3546__auto____7642))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7642;
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
var _invoke__7687 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7647 = this$;

if(cljs.core.truth_(and__3546__auto____7647))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7647;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7648 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7648))
{return or__3548__auto____7648;
} else
{var or__3548__auto____7649 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7649))
{return or__3548__auto____7649;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7688 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7650 = this$;

if(cljs.core.truth_(and__3546__auto____7650))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7650;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7651 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7651))
{return or__3548__auto____7651;
} else
{var or__3548__auto____7652 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7652))
{return or__3548__auto____7652;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7689 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7653 = this$;

if(cljs.core.truth_(and__3546__auto____7653))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7653;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7690 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7656 = this$;

if(cljs.core.truth_(and__3546__auto____7656))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7656;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7657 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7657))
{return or__3548__auto____7657;
} else
{var or__3548__auto____7658 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7658))
{return or__3548__auto____7658;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7691 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7659 = this$;

if(cljs.core.truth_(and__3546__auto____7659))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7659;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7660 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7660))
{return or__3548__auto____7660;
} else
{var or__3548__auto____7661 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7661))
{return or__3548__auto____7661;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7692 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7662 = this$;

if(cljs.core.truth_(and__3546__auto____7662))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7662;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7664 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7664))
{return or__3548__auto____7664;
} else
{var or__3548__auto____7665 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7665))
{return or__3548__auto____7665;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7693 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7668 = this$;

if(cljs.core.truth_(and__3546__auto____7668))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7668;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7669 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7669))
{return or__3548__auto____7669;
} else
{var or__3548__auto____7670 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7670))
{return or__3548__auto____7670;
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
return _invoke__7673.call(this,this$);
case  2 :
return _invoke__7674.call(this,this$,a);
case  3 :
return _invoke__7675.call(this,this$,a,b);
case  4 :
return _invoke__7676.call(this,this$,a,b,c);
case  5 :
return _invoke__7677.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7678.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7679.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7680.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7681.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7682.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7683.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7684.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7685.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7686.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7687.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7688.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7689.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7690.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7691.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7692.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7693.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7770 = coll;

if(cljs.core.truth_(and__3546__auto____7770))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7770;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7771 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7771))
{return or__3548__auto____7771;
} else
{var or__3548__auto____7772 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7772))
{return or__3548__auto____7772;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7780 = coll;

if(cljs.core.truth_(and__3546__auto____7780))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7780;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7786 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7786))
{return or__3548__auto____7786;
} else
{var or__3548__auto____7788 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7788))
{return or__3548__auto____7788;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7799 = coll;

if(cljs.core.truth_(and__3546__auto____7799))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7799;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7801 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7801))
{return or__3548__auto____7801;
} else
{var or__3548__auto____7803 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7803))
{return or__3548__auto____7803;
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
var _nth__7888 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7816 = coll;

if(cljs.core.truth_(and__3546__auto____7816))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7816;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7822 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7822))
{return or__3548__auto____7822;
} else
{var or__3548__auto____7826 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7826))
{return or__3548__auto____7826;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7889 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7827 = coll;

if(cljs.core.truth_(and__3546__auto____7827))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7827;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7883 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7883))
{return or__3548__auto____7883;
} else
{var or__3548__auto____7885 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7885))
{return or__3548__auto____7885;
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
return _nth__7888.call(this,coll,n);
case  3 :
return _nth__7889.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7898 = coll;

if(cljs.core.truth_(and__3546__auto____7898))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7898;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7901 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7901))
{return or__3548__auto____7901;
} else
{var or__3548__auto____7904 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7904))
{return or__3548__auto____7904;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7907 = coll;

if(cljs.core.truth_(and__3546__auto____7907))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7907;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7913 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7913))
{return or__3548__auto____7913;
} else
{var or__3548__auto____7915 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
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
var _lookup__7936 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7920 = o;

if(cljs.core.truth_(and__3546__auto____7920))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7920;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7924 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7924))
{return or__3548__auto____7924;
} else
{var or__3548__auto____7927 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7927))
{return or__3548__auto____7927;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7937 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7930 = o;

if(cljs.core.truth_(and__3546__auto____7930))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7930;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7933 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7933))
{return or__3548__auto____7933;
} else
{var or__3548__auto____7935 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7935))
{return or__3548__auto____7935;
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
return _lookup__7936.call(this,o,k);
case  3 :
return _lookup__7937.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7949 = coll;

if(cljs.core.truth_(and__3546__auto____7949))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7949;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7951 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7951))
{return or__3548__auto____7951;
} else
{var or__3548__auto____7954 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7954))
{return or__3548__auto____7954;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7958 = coll;

if(cljs.core.truth_(and__3546__auto____7958))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7958;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7961 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7961))
{return or__3548__auto____7961;
} else
{var or__3548__auto____7962 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7962))
{return or__3548__auto____7962;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7973 = coll;

if(cljs.core.truth_(and__3546__auto____7973))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7973;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7976 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7976))
{return or__3548__auto____7976;
} else
{var or__3548__auto____7977 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7977))
{return or__3548__auto____7977;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7985 = coll;

if(cljs.core.truth_(and__3546__auto____7985))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7985;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7988 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7988))
{return or__3548__auto____7988;
} else
{var or__3548__auto____7989 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7989))
{return or__3548__auto____7989;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8026 = coll;

if(cljs.core.truth_(and__3546__auto____8026))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____8026;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____8028 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8028))
{return or__3548__auto____8028;
} else
{var or__3548__auto____8030 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____8030))
{return or__3548__auto____8030;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8031 = coll;

if(cljs.core.truth_(and__3546__auto____8031))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____8031;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8032 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8032))
{return or__3548__auto____8032;
} else
{var or__3548__auto____8034 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8034))
{return or__3548__auto____8034;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8047 = coll;

if(cljs.core.truth_(and__3546__auto____8047))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8047;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8050 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8050))
{return or__3548__auto____8050;
} else
{var or__3548__auto____8073 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8112 = o;

if(cljs.core.truth_(and__3546__auto____8112))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8112;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8113 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8113))
{return or__3548__auto____8113;
} else
{var or__3548__auto____8115 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8115))
{return or__3548__auto____8115;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8120 = o;

if(cljs.core.truth_(and__3546__auto____8120))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8120;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8122 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8122))
{return or__3548__auto____8122;
} else
{var or__3548__auto____8124 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8124))
{return or__3548__auto____8124;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8132 = o;

if(cljs.core.truth_(and__3546__auto____8132))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8132;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8136 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8136))
{return or__3548__auto____8136;
} else
{var or__3548__auto____8138 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8138))
{return or__3548__auto____8138;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8142 = o;

if(cljs.core.truth_(and__3546__auto____8142))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8142;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8143 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8143))
{return or__3548__auto____8143;
} else
{var or__3548__auto____8144 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8144))
{return or__3548__auto____8144;
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
if(cljs.core.truth_((function (){var and__3546__auto____8145 = coll;

if(cljs.core.truth_(and__3546__auto____8145))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8145;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8146 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8146))
{return or__3548__auto____8146;
} else
{var or__3548__auto____8147 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8147))
{return or__3548__auto____8147;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8152 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8148 = coll;

if(cljs.core.truth_(and__3546__auto____8148))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8148;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8149 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8149))
{return or__3548__auto____8149;
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
if(cljs.core.truth_((function (){var and__3546__auto____8154 = o;

if(cljs.core.truth_(and__3546__auto____8154))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8154;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8155 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8155))
{return or__3548__auto____8155;
} else
{var or__3548__auto____8156 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8156))
{return or__3548__auto____8156;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8168 = o;

if(cljs.core.truth_(and__3546__auto____8168))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8168;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8169 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8169))
{return or__3548__auto____8169;
} else
{var or__3548__auto____8170 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8170))
{return or__3548__auto____8170;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8179 = o;

if(cljs.core.truth_(and__3546__auto____8179))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8179;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8184 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8184))
{return or__3548__auto____8184;
} else
{var or__3548__auto____8189 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8189))
{return or__3548__auto____8189;
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
if(cljs.core.truth_((function (){var and__3546__auto____8194 = o;

if(cljs.core.truth_(and__3546__auto____8194))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8194;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8199 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8199))
{return or__3548__auto____8199;
} else
{var or__3548__auto____8200 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8200))
{return or__3548__auto____8200;
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
{return (function (){var or__3548__auto____8206 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8206))
{return or__3548__auto____8206;
} else
{var or__3548__auto____8207 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8207))
{return or__3548__auto____8207;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8268 = this$;

if(cljs.core.truth_(and__3546__auto____8268))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8268;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8269 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8269))
{return or__3548__auto____8269;
} else
{var or__3548__auto____8270 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8270))
{return or__3548__auto____8270;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8271 = this$;

if(cljs.core.truth_(and__3546__auto____8271))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8271;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8272 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8272))
{return or__3548__auto____8272;
} else
{var or__3548__auto____8275 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8275))
{return or__3548__auto____8275;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8278 = this$;

if(cljs.core.truth_(and__3546__auto____8278))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8278;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8281 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8281))
{return or__3548__auto____8281;
} else
{var or__3548__auto____8282 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8282))
{return or__3548__auto____8282;
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
var G__8293 = null;
var G__8293__8294 = (function (o,k){
return null;
});
var G__8293__8295 = (function (o,k,not_found){
return not_found;
});
G__8293 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8293__8294.call(this,o,k);
case  3 :
return G__8293__8295.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8293;
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
var G__8297 = null;
var G__8297__8298 = (function (_,f){
return f.call(null);
});
var G__8297__8299 = (function (_,f,start){
return start;
});
G__8297 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8297__8298.call(this,_,f);
case  3 :
return G__8297__8299.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8297;
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
var G__8305 = null;
var G__8305__8308 = (function (_,n){
return null;
});
var G__8305__8309 = (function (_,n,not_found){
return not_found;
});
G__8305 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8305__8308.call(this,_,n);
case  3 :
return G__8305__8309.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8305;
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
var ci_reduce__8358 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8345 = cljs.core._nth.call(null,cicoll,0);
var n__8346 = 1;

while(true){
if(cljs.core.truth_((n__8346 < cljs.core._count.call(null,cicoll))))
{{
var G__8364 = f.call(null,val__8345,cljs.core._nth.call(null,cicoll,n__8346));
var G__8365 = (n__8346 + 1);
val__8345 = G__8364;
n__8346 = G__8365;
continue;
}
} else
{return val__8345;
}
break;
}
}
});
var ci_reduce__8359 = (function (cicoll,f,val){
var val__8347 = val;
var n__8348 = 0;

while(true){
if(cljs.core.truth_((n__8348 < cljs.core._count.call(null,cicoll))))
{{
var G__8366 = f.call(null,val__8347,cljs.core._nth.call(null,cicoll,n__8348));
var G__8367 = (n__8348 + 1);
val__8347 = G__8366;
n__8348 = G__8367;
continue;
}
} else
{return val__8347;
}
break;
}
});
var ci_reduce__8360 = (function (cicoll,f,val,idx){
var val__8349 = val;
var n__8350 = idx;

while(true){
if(cljs.core.truth_((n__8350 < cljs.core._count.call(null,cicoll))))
{{
var G__8370 = f.call(null,val__8349,cljs.core._nth.call(null,cicoll,n__8350));
var G__8371 = (n__8350 + 1);
val__8349 = G__8370;
n__8350 = G__8371;
continue;
}
} else
{return val__8349;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8358.call(this,cicoll,f);
case  3 :
return ci_reduce__8359.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8360.call(this,cicoll,f,val,idx);
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
var this__8388 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8479 = null;
var G__8479__8481 = (function (_,f){
var this__8389 = this;
return cljs.core.ci_reduce.call(null,this__8389.a,f,(this__8389.a[this__8389.i]),(this__8389.i + 1));
});
var G__8479__8482 = (function (_,f,start){
var this__8394 = this;
return cljs.core.ci_reduce.call(null,this__8394.a,f,start,this__8394.i);
});
G__8479 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8479__8481.call(this,_,f);
case  3 :
return G__8479__8482.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8479;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8395 = this;
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
var G__8495 = null;
var G__8495__8496 = (function (coll,n){
var this__8403 = this;
var i__8404 = (n + this__8403.i);

if(cljs.core.truth_((i__8404 < this__8403.a.length)))
{return (this__8403.a[i__8404]);
} else
{return null;
}
});
var G__8495__8498 = (function (coll,n,not_found){
var this__8406 = this;
var i__8408 = (n + this__8406.i);

if(cljs.core.truth_((i__8408 < this__8406.a.length)))
{return (this__8406.a[i__8408]);
} else
{return not_found;
}
});
G__8495 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8495__8496.call(this,coll,n);
case  3 :
return G__8495__8498.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8495;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8410 = this;
return (this__8410.a.length - this__8410.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8413 = this;
return (this__8413.a[this__8413.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8468 = this;
if(cljs.core.truth_(((this__8468.i + 1) < this__8468.a.length)))
{return (new cljs.core.IndexedSeq(this__8468.a,(this__8468.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8473 = this;
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
var G__8540 = null;
var G__8540__8541 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8540__8542 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8540 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8540__8541.call(this,array,f);
case  3 :
return G__8540__8542.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8540;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8549 = null;
var G__8549__8550 = (function (array,k){
return (array[k]);
});
var G__8549__8551 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8549 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8549__8550.call(this,array,k);
case  3 :
return G__8549__8551.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8549;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8567 = null;
var G__8567__8568 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8567__8569 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8567 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8567__8568.call(this,array,n);
case  3 :
return G__8567__8569.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8567;
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
var temp__3698__auto____8581 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8581))
{var s__8585 = temp__3698__auto____8581;

return cljs.core._first.call(null,s__8585);
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
var G__8622 = cljs.core.next.call(null,s);
s = G__8622;
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
var s__8624 = cljs.core.seq.call(null,x);
var n__8625 = 0;

while(true){
if(cljs.core.truth_(s__8624))
{{
var G__8633 = cljs.core.next.call(null,s__8624);
var G__8635 = (n__8625 + 1);
s__8624 = G__8633;
n__8625 = G__8635;
continue;
}
} else
{return n__8625;
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
var conj__8652 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8653 = (function() { 
var G__8656__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8657 = conj.call(null,coll,x);
var G__8658 = cljs.core.first.call(null,xs);
var G__8659 = cljs.core.next.call(null,xs);
coll = G__8657;
x = G__8658;
xs = G__8659;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8656 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8656__delegate.call(this, coll, x, xs);
};
G__8656.cljs$lang$maxFixedArity = 2;
G__8656.cljs$lang$applyTo = (function (arglist__8660){
var coll = cljs.core.first(arglist__8660);
var x = cljs.core.first(cljs.core.next(arglist__8660));
var xs = cljs.core.rest(cljs.core.next(arglist__8660));
return G__8656__delegate.call(this, coll, x, xs);
});
return G__8656;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8652.call(this,coll,x);
default:
return conj__8653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8653.cljs$lang$applyTo;
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
var nth__8677 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8678 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8677.call(this,coll,n);
case  3 :
return nth__8678.call(this,coll,n,not_found);
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
var get__8686 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8687 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8686.call(this,o,k);
case  3 :
return get__8687.call(this,o,k,not_found);
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
var assoc__8698 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8699 = (function() { 
var G__8701__delegate = function (coll,k,v,kvs){
while(true){
var ret__8696 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8702 = ret__8696;
var G__8703 = cljs.core.first.call(null,kvs);
var G__8704 = cljs.core.second.call(null,kvs);
var G__8705 = cljs.core.nnext.call(null,kvs);
coll = G__8702;
k = G__8703;
v = G__8704;
kvs = G__8705;
continue;
}
} else
{return ret__8696;
}
break;
}
};
var G__8701 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8701__delegate.call(this, coll, k, v, kvs);
};
G__8701.cljs$lang$maxFixedArity = 3;
G__8701.cljs$lang$applyTo = (function (arglist__8710){
var coll = cljs.core.first(arglist__8710);
var k = cljs.core.first(cljs.core.next(arglist__8710));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8710)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8710)));
return G__8701__delegate.call(this, coll, k, v, kvs);
});
return G__8701;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8698.call(this,coll,k,v);
default:
return assoc__8699.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8699.cljs$lang$applyTo;
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
var dissoc__8719 = (function (coll){
return coll;
});
var dissoc__8720 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8721 = (function() { 
var G__8725__delegate = function (coll,k,ks){
while(true){
var ret__8716 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8727 = ret__8716;
var G__8728 = cljs.core.first.call(null,ks);
var G__8729 = cljs.core.next.call(null,ks);
coll = G__8727;
k = G__8728;
ks = G__8729;
continue;
}
} else
{return ret__8716;
}
break;
}
};
var G__8725 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8725__delegate.call(this, coll, k, ks);
};
G__8725.cljs$lang$maxFixedArity = 2;
G__8725.cljs$lang$applyTo = (function (arglist__8730){
var coll = cljs.core.first(arglist__8730);
var k = cljs.core.first(cljs.core.next(arglist__8730));
var ks = cljs.core.rest(cljs.core.next(arglist__8730));
return G__8725__delegate.call(this, coll, k, ks);
});
return G__8725;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8719.call(this,coll);
case  2 :
return dissoc__8720.call(this,coll,k);
default:
return dissoc__8721.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8721.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8755 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8757 = x__445__auto____8755;

if(cljs.core.truth_(and__3546__auto____8757))
{var and__3546__auto____8759 = x__445__auto____8755.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8759))
{return cljs.core.not.call(null,x__445__auto____8755.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8759;
}
} else
{return and__3546__auto____8757;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8755);
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
var disj__8779 = (function (coll){
return coll;
});
var disj__8780 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8781 = (function() { 
var G__8784__delegate = function (coll,k,ks){
while(true){
var ret__8778 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8787 = ret__8778;
var G__8788 = cljs.core.first.call(null,ks);
var G__8789 = cljs.core.next.call(null,ks);
coll = G__8787;
k = G__8788;
ks = G__8789;
continue;
}
} else
{return ret__8778;
}
break;
}
};
var G__8784 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8784__delegate.call(this, coll, k, ks);
};
G__8784.cljs$lang$maxFixedArity = 2;
G__8784.cljs$lang$applyTo = (function (arglist__8791){
var coll = cljs.core.first(arglist__8791);
var k = cljs.core.first(cljs.core.next(arglist__8791));
var ks = cljs.core.rest(cljs.core.next(arglist__8791));
return G__8784__delegate.call(this, coll, k, ks);
});
return G__8784;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8779.call(this,coll);
case  2 :
return disj__8780.call(this,coll,k);
default:
return disj__8781.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8781.cljs$lang$applyTo;
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
{var x__445__auto____8801 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8802 = x__445__auto____8801;

if(cljs.core.truth_(and__3546__auto____8802))
{var and__3546__auto____8803 = x__445__auto____8801.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8803))
{return cljs.core.not.call(null,x__445__auto____8801.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8803;
}
} else
{return and__3546__auto____8802;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8801);
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
{var x__445__auto____8808 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8809 = x__445__auto____8808;

if(cljs.core.truth_(and__3546__auto____8809))
{var and__3546__auto____8810 = x__445__auto____8808.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8810))
{return cljs.core.not.call(null,x__445__auto____8808.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8810;
}
} else
{return and__3546__auto____8809;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8808);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8811 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8812 = x__445__auto____8811;

if(cljs.core.truth_(and__3546__auto____8812))
{var and__3546__auto____8815 = x__445__auto____8811.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8815))
{return cljs.core.not.call(null,x__445__auto____8811.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8815;
}
} else
{return and__3546__auto____8812;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8811);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8828 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8830 = x__445__auto____8828;

if(cljs.core.truth_(and__3546__auto____8830))
{var and__3546__auto____8832 = x__445__auto____8828.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8832))
{return cljs.core.not.call(null,x__445__auto____8828.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8832;
}
} else
{return and__3546__auto____8830;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8828);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8839 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8840 = x__445__auto____8839;

if(cljs.core.truth_(and__3546__auto____8840))
{var and__3546__auto____8841 = x__445__auto____8839.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8841))
{return cljs.core.not.call(null,x__445__auto____8839.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8841;
}
} else
{return and__3546__auto____8840;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8839);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8843 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8845 = x__445__auto____8843;

if(cljs.core.truth_(and__3546__auto____8845))
{var and__3546__auto____8847 = x__445__auto____8843.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8847))
{return cljs.core.not.call(null,x__445__auto____8843.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8847;
}
} else
{return and__3546__auto____8845;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8843);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8850 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8853 = x__445__auto____8850;

if(cljs.core.truth_(and__3546__auto____8853))
{var and__3546__auto____8855 = x__445__auto____8850.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8855))
{return cljs.core.not.call(null,x__445__auto____8850.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8855;
}
} else
{return and__3546__auto____8853;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8850);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8864 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8864.push(key);
}));
return keys__8864;
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
{var x__445__auto____8875 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8876 = x__445__auto____8875;

if(cljs.core.truth_(and__3546__auto____8876))
{var and__3546__auto____8877 = x__445__auto____8875.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8877))
{return cljs.core.not.call(null,x__445__auto____8875.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8877;
}
} else
{return and__3546__auto____8876;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8875);
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
var and__3546__auto____8892 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8892))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8894 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8894))
{return or__3548__auto____8894;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8892;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8899 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8899))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8899;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8908 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8908))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8908;
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
var and__3546__auto____8917 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8917))
{return (n == n.toFixed());
} else
{return and__3546__auto____8917;
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
if(cljs.core.truth_((function (){var and__3546__auto____8933 = coll;

if(cljs.core.truth_(and__3546__auto____8933))
{var and__3546__auto____8934 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8934))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8934;
}
} else
{return and__3546__auto____8933;
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
var distinct_QMARK___8947 = (function (x){
return true;
});
var distinct_QMARK___8948 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8949 = (function() { 
var G__8952__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8943 = cljs.core.set([y,x]);
var xs__8944 = more;

while(true){
var x__8945 = cljs.core.first.call(null,xs__8944);
var etc__8946 = cljs.core.next.call(null,xs__8944);

if(cljs.core.truth_(xs__8944))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8943,x__8945)))
{return false;
} else
{{
var G__8955 = cljs.core.conj.call(null,s__8943,x__8945);
var G__8956 = etc__8946;
s__8943 = G__8955;
xs__8944 = G__8956;
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
var G__8952 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8952__delegate.call(this, x, y, more);
};
G__8952.cljs$lang$maxFixedArity = 2;
G__8952.cljs$lang$applyTo = (function (arglist__8957){
var x = cljs.core.first(arglist__8957);
var y = cljs.core.first(cljs.core.next(arglist__8957));
var more = cljs.core.rest(cljs.core.next(arglist__8957));
return G__8952__delegate.call(this, x, y, more);
});
return G__8952;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8947.call(this,x);
case  2 :
return distinct_QMARK___8948.call(this,x,y);
default:
return distinct_QMARK___8949.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8949.cljs$lang$applyTo;
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
var r__8964 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8964)))
{return r__8964;
} else
{if(cljs.core.truth_(r__8964))
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
var sort__8979 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8980 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8974 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8974,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8974);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8979.call(this,comp);
case  2 :
return sort__8980.call(this,comp,coll);
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
var sort_by__8989 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8990 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8989.call(this,keyfn,comp);
case  3 :
return sort_by__8990.call(this,keyfn,comp,coll);
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
var reduce__8998 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8999 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8998.call(this,f,val);
case  3 :
return reduce__8999.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9029 = (function (f,coll){
var temp__3695__auto____9005 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9005))
{var s__9008 = temp__3695__auto____9005;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9008),cljs.core.next.call(null,s__9008));
} else
{return f.call(null);
}
});
var seq_reduce__9030 = (function (f,val,coll){
var val__9012 = val;
var coll__9013 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9013))
{{
var G__9036 = f.call(null,val__9012,cljs.core.first.call(null,coll__9013));
var G__9037 = cljs.core.next.call(null,coll__9013);
val__9012 = G__9036;
coll__9013 = G__9037;
continue;
}
} else
{return val__9012;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9029.call(this,f,val);
case  3 :
return seq_reduce__9030.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9046 = null;
var G__9046__9047 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9046__9048 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9046 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9046__9047.call(this,coll,f);
case  3 :
return G__9046__9048.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9046;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9058 = (function (){
return 0;
});
var _PLUS___9059 = (function (x){
return x;
});
var _PLUS___9061 = (function (x,y){
return (x + y);
});
var _PLUS___9063 = (function() { 
var G__9069__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9069 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9069__delegate.call(this, x, y, more);
};
G__9069.cljs$lang$maxFixedArity = 2;
G__9069.cljs$lang$applyTo = (function (arglist__9071){
var x = cljs.core.first(arglist__9071);
var y = cljs.core.first(cljs.core.next(arglist__9071));
var more = cljs.core.rest(cljs.core.next(arglist__9071));
return G__9069__delegate.call(this, x, y, more);
});
return G__9069;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9058.call(this);
case  1 :
return _PLUS___9059.call(this,x);
case  2 :
return _PLUS___9061.call(this,x,y);
default:
return _PLUS___9063.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9063.cljs$lang$applyTo;
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
var ___9078 = (function (x){
return (- x);
});
var ___9079 = (function (x,y){
return (x - y);
});
var ___9080 = (function() { 
var G__9084__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9084 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9084__delegate.call(this, x, y, more);
};
G__9084.cljs$lang$maxFixedArity = 2;
G__9084.cljs$lang$applyTo = (function (arglist__9086){
var x = cljs.core.first(arglist__9086);
var y = cljs.core.first(cljs.core.next(arglist__9086));
var more = cljs.core.rest(cljs.core.next(arglist__9086));
return G__9084__delegate.call(this, x, y, more);
});
return G__9084;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9078.call(this,x);
case  2 :
return ___9079.call(this,x,y);
default:
return ___9080.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9080.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9097 = (function (){
return 1;
});
var _STAR___9098 = (function (x){
return x;
});
var _STAR___9099 = (function (x,y){
return (x * y);
});
var _STAR___9100 = (function() { 
var G__9102__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9102 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9102__delegate.call(this, x, y, more);
};
G__9102.cljs$lang$maxFixedArity = 2;
G__9102.cljs$lang$applyTo = (function (arglist__9106){
var x = cljs.core.first(arglist__9106);
var y = cljs.core.first(cljs.core.next(arglist__9106));
var more = cljs.core.rest(cljs.core.next(arglist__9106));
return G__9102__delegate.call(this, x, y, more);
});
return G__9102;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9097.call(this);
case  1 :
return _STAR___9098.call(this,x);
case  2 :
return _STAR___9099.call(this,x,y);
default:
return _STAR___9100.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9100.cljs$lang$applyTo;
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
var _SLASH___9116 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9117 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9118 = (function() { 
var G__9121__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9121 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9121__delegate.call(this, x, y, more);
};
G__9121.cljs$lang$maxFixedArity = 2;
G__9121.cljs$lang$applyTo = (function (arglist__9123){
var x = cljs.core.first(arglist__9123);
var y = cljs.core.first(cljs.core.next(arglist__9123));
var more = cljs.core.rest(cljs.core.next(arglist__9123));
return G__9121__delegate.call(this, x, y, more);
});
return G__9121;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9116.call(this,x);
case  2 :
return _SLASH___9117.call(this,x,y);
default:
return _SLASH___9118.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9118.cljs$lang$applyTo;
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
var _LT___9172 = (function (x){
return true;
});
var _LT___9174 = (function (x,y){
return (x < y);
});
var _LT___9177 = (function() { 
var G__9181__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9183 = y;
var G__9184 = cljs.core.first.call(null,more);
var G__9185 = cljs.core.next.call(null,more);
x = G__9183;
y = G__9184;
more = G__9185;
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
var G__9181 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9181__delegate.call(this, x, y, more);
};
G__9181.cljs$lang$maxFixedArity = 2;
G__9181.cljs$lang$applyTo = (function (arglist__9187){
var x = cljs.core.first(arglist__9187);
var y = cljs.core.first(cljs.core.next(arglist__9187));
var more = cljs.core.rest(cljs.core.next(arglist__9187));
return G__9181__delegate.call(this, x, y, more);
});
return G__9181;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9172.call(this,x);
case  2 :
return _LT___9174.call(this,x,y);
default:
return _LT___9177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9177.cljs$lang$applyTo;
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
var _LT__EQ___9205 = (function (x){
return true;
});
var _LT__EQ___9206 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9207 = (function() { 
var G__9210__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9211 = y;
var G__9212 = cljs.core.first.call(null,more);
var G__9213 = cljs.core.next.call(null,more);
x = G__9211;
y = G__9212;
more = G__9213;
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
var G__9210 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9210__delegate.call(this, x, y, more);
};
G__9210.cljs$lang$maxFixedArity = 2;
G__9210.cljs$lang$applyTo = (function (arglist__9214){
var x = cljs.core.first(arglist__9214);
var y = cljs.core.first(cljs.core.next(arglist__9214));
var more = cljs.core.rest(cljs.core.next(arglist__9214));
return G__9210__delegate.call(this, x, y, more);
});
return G__9210;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9205.call(this,x);
case  2 :
return _LT__EQ___9206.call(this,x,y);
default:
return _LT__EQ___9207.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9207.cljs$lang$applyTo;
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
var _GT___9226 = (function (x){
return true;
});
var _GT___9227 = (function (x,y){
return (x > y);
});
var _GT___9228 = (function() { 
var G__9230__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9235 = y;
var G__9236 = cljs.core.first.call(null,more);
var G__9237 = cljs.core.next.call(null,more);
x = G__9235;
y = G__9236;
more = G__9237;
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
var G__9230 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9230__delegate.call(this, x, y, more);
};
G__9230.cljs$lang$maxFixedArity = 2;
G__9230.cljs$lang$applyTo = (function (arglist__9240){
var x = cljs.core.first(arglist__9240);
var y = cljs.core.first(cljs.core.next(arglist__9240));
var more = cljs.core.rest(cljs.core.next(arglist__9240));
return G__9230__delegate.call(this, x, y, more);
});
return G__9230;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9226.call(this,x);
case  2 :
return _GT___9227.call(this,x,y);
default:
return _GT___9228.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9228.cljs$lang$applyTo;
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
var _GT__EQ___9250 = (function (x){
return true;
});
var _GT__EQ___9251 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9252 = (function() { 
var G__9254__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9255 = y;
var G__9256 = cljs.core.first.call(null,more);
var G__9257 = cljs.core.next.call(null,more);
x = G__9255;
y = G__9256;
more = G__9257;
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
var G__9254 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9254__delegate.call(this, x, y, more);
};
G__9254.cljs$lang$maxFixedArity = 2;
G__9254.cljs$lang$applyTo = (function (arglist__9258){
var x = cljs.core.first(arglist__9258);
var y = cljs.core.first(cljs.core.next(arglist__9258));
var more = cljs.core.rest(cljs.core.next(arglist__9258));
return G__9254__delegate.call(this, x, y, more);
});
return G__9254;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9250.call(this,x);
case  2 :
return _GT__EQ___9251.call(this,x,y);
default:
return _GT__EQ___9252.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9252.cljs$lang$applyTo;
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
var max__9265 = (function (x){
return x;
});
var max__9266 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9267 = (function() { 
var G__9269__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9269 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9269__delegate.call(this, x, y, more);
};
G__9269.cljs$lang$maxFixedArity = 2;
G__9269.cljs$lang$applyTo = (function (arglist__9270){
var x = cljs.core.first(arglist__9270);
var y = cljs.core.first(cljs.core.next(arglist__9270));
var more = cljs.core.rest(cljs.core.next(arglist__9270));
return G__9269__delegate.call(this, x, y, more);
});
return G__9269;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9265.call(this,x);
case  2 :
return max__9266.call(this,x,y);
default:
return max__9267.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9267.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9271 = (function (x){
return x;
});
var min__9272 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9273 = (function() { 
var G__9275__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9275 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9275__delegate.call(this, x, y, more);
};
G__9275.cljs$lang$maxFixedArity = 2;
G__9275.cljs$lang$applyTo = (function (arglist__9276){
var x = cljs.core.first(arglist__9276);
var y = cljs.core.first(cljs.core.next(arglist__9276));
var more = cljs.core.rest(cljs.core.next(arglist__9276));
return G__9275__delegate.call(this, x, y, more);
});
return G__9275;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9271.call(this,x);
case  2 :
return min__9272.call(this,x,y);
default:
return min__9273.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9273.cljs$lang$applyTo;
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
var rem__9277 = (n % d);

return cljs.core.fix.call(null,((n - rem__9277) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9278 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9278));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9279 = (function (){
return Math.random.call(null);
});
var rand__9280 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9279.call(this);
case  1 :
return rand__9280.call(this,n);
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
var _EQ__EQ___9302 = (function (x){
return true;
});
var _EQ__EQ___9303 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9304 = (function() { 
var G__9309__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9310 = y;
var G__9311 = cljs.core.first.call(null,more);
var G__9312 = cljs.core.next.call(null,more);
x = G__9310;
y = G__9311;
more = G__9312;
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
var G__9309 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9309__delegate.call(this, x, y, more);
};
G__9309.cljs$lang$maxFixedArity = 2;
G__9309.cljs$lang$applyTo = (function (arglist__9313){
var x = cljs.core.first(arglist__9313);
var y = cljs.core.first(cljs.core.next(arglist__9313));
var more = cljs.core.rest(cljs.core.next(arglist__9313));
return G__9309__delegate.call(this, x, y, more);
});
return G__9309;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9302.call(this,x);
case  2 :
return _EQ__EQ___9303.call(this,x,y);
default:
return _EQ__EQ___9304.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9304.cljs$lang$applyTo;
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
var n__9317 = n;
var xs__9318 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9319 = xs__9318;

if(cljs.core.truth_(and__3546__auto____9319))
{return (n__9317 > 0);
} else
{return and__3546__auto____9319;
}
})()))
{{
var G__9323 = (n__9317 - 1);
var G__9324 = cljs.core.next.call(null,xs__9318);
n__9317 = G__9323;
xs__9318 = G__9324;
continue;
}
} else
{return xs__9318;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9349 = null;
var G__9349__9350 = (function (coll,n){
var temp__3695__auto____9327 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9327))
{var xs__9330 = temp__3695__auto____9327;

return cljs.core.first.call(null,xs__9330);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9349__9351 = (function (coll,n,not_found){
var temp__3695__auto____9334 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9334))
{var xs__9335 = temp__3695__auto____9334;

return cljs.core.first.call(null,xs__9335);
} else
{return not_found;
}
});
G__9349 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9349__9350.call(this,coll,n);
case  3 :
return G__9349__9351.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9349;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9365 = (function (){
return "";
});
var str_STAR___9366 = (function (x){
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
var str_STAR___9367 = (function() { 
var G__9416__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9417 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9418 = cljs.core.next.call(null,more);
sb = G__9417;
more = G__9418;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9416 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9416__delegate.call(this, x, ys);
};
G__9416.cljs$lang$maxFixedArity = 1;
G__9416.cljs$lang$applyTo = (function (arglist__9424){
var x = cljs.core.first(arglist__9424);
var ys = cljs.core.rest(arglist__9424);
return G__9416__delegate.call(this, x, ys);
});
return G__9416;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9365.call(this);
case  1 :
return str_STAR___9366.call(this,x);
default:
return str_STAR___9367.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9367.cljs$lang$applyTo;
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
var str__9427 = (function (){
return "";
});
var str__9428 = (function (x){
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
var str__9429 = (function() { 
var G__9431__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9431 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9431__delegate.call(this, x, ys);
};
G__9431.cljs$lang$maxFixedArity = 1;
G__9431.cljs$lang$applyTo = (function (arglist__9432){
var x = cljs.core.first(arglist__9432);
var ys = cljs.core.rest(arglist__9432);
return G__9431__delegate.call(this, x, ys);
});
return G__9431;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9427.call(this);
case  1 :
return str__9428.call(this,x);
default:
return str__9429.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9429.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9438 = (function (s,start){
return s.substring(start);
});
var subs__9439 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9438.call(this,s,start);
case  3 :
return subs__9439.call(this,s,start,end);
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
var symbol__9454 = (function (name){
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
var symbol__9455 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9454.call(this,ns);
case  2 :
return symbol__9455.call(this,ns,name);
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
var keyword__9458 = (function (name){
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
var keyword__9459 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9458.call(this,ns);
case  2 :
return keyword__9459.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9487 = cljs.core.seq.call(null,x);
var ys__9489 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9487)))
{return cljs.core.nil_QMARK_.call(null,ys__9489);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9489)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9487),cljs.core.first.call(null,ys__9489))))
{{
var G__9497 = cljs.core.next.call(null,xs__9487);
var G__9498 = cljs.core.next.call(null,ys__9489);
xs__9487 = G__9497;
ys__9489 = G__9498;
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
return cljs.core.reduce.call(null,(function (p1__9503_SHARP_,p2__9504_SHARP_){
return cljs.core.hash_combine.call(null,p1__9503_SHARP_,cljs.core.hash.call(null,p2__9504_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9519__9520 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9519__9520))
{var G__9522__9524 = cljs.core.first.call(null,G__9519__9520);
var vec__9523__9525 = G__9522__9524;
var key_name__9526 = cljs.core.nth.call(null,vec__9523__9525,0,null);
var f__9527 = cljs.core.nth.call(null,vec__9523__9525,1,null);
var G__9519__9528 = G__9519__9520;

var G__9522__9531 = G__9522__9524;
var G__9519__9578 = G__9519__9528;

while(true){
var vec__9579__9580 = G__9522__9531;
var key_name__9582 = cljs.core.nth.call(null,vec__9579__9580,0,null);
var f__9586 = cljs.core.nth.call(null,vec__9579__9580,1,null);
var G__9519__9587 = G__9519__9578;

var str_name__9588 = cljs.core.name.call(null,key_name__9582);

obj[str_name__9588] = f__9586;
var temp__3698__auto____9593 = cljs.core.next.call(null,G__9519__9587);

if(cljs.core.truth_(temp__3698__auto____9593))
{var G__9519__9594 = temp__3698__auto____9593;

{
var G__9600 = cljs.core.first.call(null,G__9519__9594);
var G__9602 = G__9519__9594;
G__9522__9531 = G__9600;
G__9519__9578 = G__9602;
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
var this__9615 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9616 = this;
return (new cljs.core.List(this__9616.meta,o,coll,(this__9616.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9620 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9621 = this;
return this__9621.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9622 = this;
return this__9622.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9623 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9624 = this;
return this__9624.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9625 = this;
return this__9625.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9626 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9627 = this;
return (new cljs.core.List(meta,this__9627.first,this__9627.rest,this__9627.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9628 = this;
return this__9628.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9629 = this;
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
var this__9639 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9646 = this;
return (new cljs.core.List(this__9646.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9648 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9649 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9650 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9651 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9656 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9658 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9659 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9660 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9661 = this;
return this__9661.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9663 = this;
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
list.cljs$lang$applyTo = (function (arglist__9701){
var items = cljs.core.seq( arglist__9701 );;
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
var this__9714 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9717 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9718 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9721 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9721.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9722 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9723 = this;
return this__9723.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9724 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9724.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9724.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9725 = this;
return this__9725.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9726 = this;
return (new cljs.core.Cons(meta,this__9726.first,this__9726.rest));
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
var G__9780 = null;
var G__9780__9781 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9780__9782 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9780 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9780__9781.call(this,string,f);
case  3 :
return G__9780__9782.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9780;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9787 = null;
var G__9787__9789 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9787__9790 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9787 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9787__9789.call(this,string,k);
case  3 :
return G__9787__9790.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9787;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9794 = null;
var G__9794__9795 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9794__9797 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9794 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9794__9795.call(this,string,n);
case  3 :
return G__9794__9797.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9794;
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
var G__9814 = null;
var G__9814__9815 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9814__9816 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9814 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9814__9815.call(this,this$,coll);
case  3 :
return G__9814__9816.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9814;
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
var x__9825 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9825;
} else
{lazy_seq.x = x__9825.call(null);
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
var this__9879 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9880 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9881 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9882 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9882.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9885 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9887 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9889 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9891 = this;
return this__9891.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9892 = this;
return (new cljs.core.LazySeq(meta,this__9892.realized,this__9892.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__9899 = cljs.core.array.call(null);

var s__9900 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9900)))
{ary__9899.push(cljs.core.first.call(null,s__9900));
{
var G__9901 = cljs.core.next.call(null,s__9900);
s__9900 = G__9901;
continue;
}
} else
{return ary__9899;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__9902 = s;
var i__9903 = n;
var sum__9904 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9905 = (i__9903 > 0);

if(cljs.core.truth_(and__3546__auto____9905))
{return cljs.core.seq.call(null,s__9902);
} else
{return and__3546__auto____9905;
}
})()))
{{
var G__9908 = cljs.core.next.call(null,s__9902);
var G__9909 = (i__9903 - 1);
var G__9910 = (sum__9904 + 1);
s__9902 = G__9908;
i__9903 = G__9909;
sum__9904 = G__9910;
continue;
}
} else
{return sum__9904;
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
var concat__10017 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10018 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10019 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9915 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__9915))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9915),concat.call(null,cljs.core.rest.call(null,s__9915),y));
} else
{return y;
}
})));
});
var concat__10021 = (function() { 
var G__10027__delegate = function (x,y,zs){
var cat__9981 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9920 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__9920))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9920),cat.call(null,cljs.core.rest.call(null,xys__9920),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__9981.call(null,concat.call(null,x,y),zs);
};
var G__10027 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10027__delegate.call(this, x, y, zs);
};
G__10027.cljs$lang$maxFixedArity = 2;
G__10027.cljs$lang$applyTo = (function (arglist__10037){
var x = cljs.core.first(arglist__10037);
var y = cljs.core.first(cljs.core.next(arglist__10037));
var zs = cljs.core.rest(cljs.core.next(arglist__10037));
return G__10027__delegate.call(this, x, y, zs);
});
return G__10027;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10017.call(this);
case  1 :
return concat__10018.call(this,x);
case  2 :
return concat__10019.call(this,x,y);
default:
return concat__10021.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10021.cljs$lang$applyTo;
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
var list_STAR___10079 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10080 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10081 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10082 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10083 = (function() { 
var G__10085__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10085 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10085__delegate.call(this, a, b, c, d, more);
};
G__10085.cljs$lang$maxFixedArity = 4;
G__10085.cljs$lang$applyTo = (function (arglist__10086){
var a = cljs.core.first(arglist__10086);
var b = cljs.core.first(cljs.core.next(arglist__10086));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10086)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10086))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10086))));
return G__10085__delegate.call(this, a, b, c, d, more);
});
return G__10085;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10079.call(this,a);
case  2 :
return list_STAR___10080.call(this,a,b);
case  3 :
return list_STAR___10081.call(this,a,b,c);
case  4 :
return list_STAR___10082.call(this,a,b,c,d);
default:
return list_STAR___10083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10083.cljs$lang$applyTo;
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
var apply__10179 = (function (f,args){
var fixed_arity__10087 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10087 + 1)) <= fixed_arity__10087)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10180 = (function (f,x,args){
var arglist__10088 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10089 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10088,fixed_arity__10089) <= fixed_arity__10089)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10088));
} else
{return f.cljs$lang$applyTo(arglist__10088);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10088));
}
});
var apply__10181 = (function (f,x,y,args){
var arglist__10173 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10174 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10173,fixed_arity__10174) <= fixed_arity__10174)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10173));
} else
{return f.cljs$lang$applyTo(arglist__10173);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10173));
}
});
var apply__10182 = (function (f,x,y,z,args){
var arglist__10175 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10176 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10175,fixed_arity__10176) <= fixed_arity__10176)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10175));
} else
{return f.cljs$lang$applyTo(arglist__10175);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10175));
}
});
var apply__10183 = (function() { 
var G__10188__delegate = function (f,a,b,c,d,args){
var arglist__10177 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10178 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10177,fixed_arity__10178) <= fixed_arity__10178)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10177));
} else
{return f.cljs$lang$applyTo(arglist__10177);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10177));
}
};
var G__10188 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10188__delegate.call(this, f, a, b, c, d, args);
};
G__10188.cljs$lang$maxFixedArity = 5;
G__10188.cljs$lang$applyTo = (function (arglist__10196){
var f = cljs.core.first(arglist__10196);
var a = cljs.core.first(cljs.core.next(arglist__10196));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10196)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10196))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10196)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10196)))));
return G__10188__delegate.call(this, f, a, b, c, d, args);
});
return G__10188;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10179.call(this,f,a);
case  3 :
return apply__10180.call(this,f,a,b);
case  4 :
return apply__10181.call(this,f,a,b,c);
case  5 :
return apply__10182.call(this,f,a,b,c,d);
default:
return apply__10183.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10183.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10212){
var obj = cljs.core.first(arglist__10212);
var f = cljs.core.first(cljs.core.next(arglist__10212));
var args = cljs.core.rest(cljs.core.next(arglist__10212));
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
var not_EQ___10222 = (function (x){
return false;
});
var not_EQ___10223 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10224 = (function() { 
var G__10228__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10228 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10228__delegate.call(this, x, y, more);
};
G__10228.cljs$lang$maxFixedArity = 2;
G__10228.cljs$lang$applyTo = (function (arglist__10230){
var x = cljs.core.first(arglist__10230);
var y = cljs.core.first(cljs.core.next(arglist__10230));
var more = cljs.core.rest(cljs.core.next(arglist__10230));
return G__10228__delegate.call(this, x, y, more);
});
return G__10228;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10222.call(this,x);
case  2 :
return not_EQ___10223.call(this,x,y);
default:
return not_EQ___10224.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10224.cljs$lang$applyTo;
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
var G__10236 = pred;
var G__10237 = cljs.core.next.call(null,coll);
pred = G__10236;
coll = G__10237;
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
{var or__3548__auto____10240 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10240))
{return or__3548__auto____10240;
} else
{{
var G__10242 = pred;
var G__10243 = cljs.core.next.call(null,coll);
pred = G__10242;
coll = G__10243;
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
var G__10281 = null;
var G__10281__10282 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10281__10283 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10281__10284 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10281__10286 = (function() { 
var G__10289__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10289 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10289__delegate.call(this, x, y, zs);
};
G__10289.cljs$lang$maxFixedArity = 2;
G__10289.cljs$lang$applyTo = (function (arglist__10291){
var x = cljs.core.first(arglist__10291);
var y = cljs.core.first(cljs.core.next(arglist__10291));
var zs = cljs.core.rest(cljs.core.next(arglist__10291));
return G__10289__delegate.call(this, x, y, zs);
});
return G__10289;
})()
;
G__10281 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10281__10282.call(this);
case  1 :
return G__10281__10283.call(this,x);
case  2 :
return G__10281__10284.call(this,x,y);
default:
return G__10281__10286.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10281.cljs$lang$maxFixedArity = 2;
G__10281.cljs$lang$applyTo = G__10281__10286.cljs$lang$applyTo;
return G__10281;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10300__delegate = function (args){
return x;
};
var G__10300 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10300__delegate.call(this, args);
};
G__10300.cljs$lang$maxFixedArity = 0;
G__10300.cljs$lang$applyTo = (function (arglist__10302){
var args = cljs.core.seq( arglist__10302 );;
return G__10300__delegate.call(this, args);
});
return G__10300;
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
var comp__10380 = (function (){
return cljs.core.identity;
});
var comp__10381 = (function (f){
return f;
});
var comp__10382 = (function (f,g){
return (function() {
var G__10387 = null;
var G__10387__10389 = (function (){
return f.call(null,g.call(null));
});
var G__10387__10390 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10387__10391 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10387__10392 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10387__10393 = (function() { 
var G__10418__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10418 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10418__delegate.call(this, x, y, z, args);
};
G__10418.cljs$lang$maxFixedArity = 3;
G__10418.cljs$lang$applyTo = (function (arglist__10420){
var x = cljs.core.first(arglist__10420);
var y = cljs.core.first(cljs.core.next(arglist__10420));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10420)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10420)));
return G__10418__delegate.call(this, x, y, z, args);
});
return G__10418;
})()
;
G__10387 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10387__10389.call(this);
case  1 :
return G__10387__10390.call(this,x);
case  2 :
return G__10387__10391.call(this,x,y);
case  3 :
return G__10387__10392.call(this,x,y,z);
default:
return G__10387__10393.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10387.cljs$lang$maxFixedArity = 3;
G__10387.cljs$lang$applyTo = G__10387__10393.cljs$lang$applyTo;
return G__10387;
})()
});
var comp__10383 = (function (f,g,h){
return (function() {
var G__10427 = null;
var G__10427__10432 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10427__10433 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10427__10434 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10427__10435 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10427__10436 = (function() { 
var G__10442__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10442 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10442__delegate.call(this, x, y, z, args);
};
G__10442.cljs$lang$maxFixedArity = 3;
G__10442.cljs$lang$applyTo = (function (arglist__10450){
var x = cljs.core.first(arglist__10450);
var y = cljs.core.first(cljs.core.next(arglist__10450));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10450)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10450)));
return G__10442__delegate.call(this, x, y, z, args);
});
return G__10442;
})()
;
G__10427 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10427__10432.call(this);
case  1 :
return G__10427__10433.call(this,x);
case  2 :
return G__10427__10434.call(this,x,y);
case  3 :
return G__10427__10435.call(this,x,y,z);
default:
return G__10427__10436.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10427.cljs$lang$maxFixedArity = 3;
G__10427.cljs$lang$applyTo = G__10427__10436.cljs$lang$applyTo;
return G__10427;
})()
});
var comp__10384 = (function() { 
var G__10451__delegate = function (f1,f2,f3,fs){
var fs__10336 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10452__delegate = function (args){
var ret__10337 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10336),args);
var fs__10338 = cljs.core.next.call(null,fs__10336);

while(true){
if(cljs.core.truth_(fs__10338))
{{
var G__10453 = cljs.core.first.call(null,fs__10338).call(null,ret__10337);
var G__10454 = cljs.core.next.call(null,fs__10338);
ret__10337 = G__10453;
fs__10338 = G__10454;
continue;
}
} else
{return ret__10337;
}
break;
}
};
var G__10452 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10452__delegate.call(this, args);
};
G__10452.cljs$lang$maxFixedArity = 0;
G__10452.cljs$lang$applyTo = (function (arglist__10457){
var args = cljs.core.seq( arglist__10457 );;
return G__10452__delegate.call(this, args);
});
return G__10452;
})()
;
};
var G__10451 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10451__delegate.call(this, f1, f2, f3, fs);
};
G__10451.cljs$lang$maxFixedArity = 3;
G__10451.cljs$lang$applyTo = (function (arglist__10464){
var f1 = cljs.core.first(arglist__10464);
var f2 = cljs.core.first(cljs.core.next(arglist__10464));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10464)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10464)));
return G__10451__delegate.call(this, f1, f2, f3, fs);
});
return G__10451;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10380.call(this);
case  1 :
return comp__10381.call(this,f1);
case  2 :
return comp__10382.call(this,f1,f2);
case  3 :
return comp__10383.call(this,f1,f2,f3);
default:
return comp__10384.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10384.cljs$lang$applyTo;
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
var partial__10470 = (function (f,arg1){
return (function() { 
var G__10475__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10475 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10475__delegate.call(this, args);
};
G__10475.cljs$lang$maxFixedArity = 0;
G__10475.cljs$lang$applyTo = (function (arglist__10476){
var args = cljs.core.seq( arglist__10476 );;
return G__10475__delegate.call(this, args);
});
return G__10475;
})()
;
});
var partial__10471 = (function (f,arg1,arg2){
return (function() { 
var G__10478__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10478 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10478__delegate.call(this, args);
};
G__10478.cljs$lang$maxFixedArity = 0;
G__10478.cljs$lang$applyTo = (function (arglist__10480){
var args = cljs.core.seq( arglist__10480 );;
return G__10478__delegate.call(this, args);
});
return G__10478;
})()
;
});
var partial__10472 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10481__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10481 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10481__delegate.call(this, args);
};
G__10481.cljs$lang$maxFixedArity = 0;
G__10481.cljs$lang$applyTo = (function (arglist__10482){
var args = cljs.core.seq( arglist__10482 );;
return G__10481__delegate.call(this, args);
});
return G__10481;
})()
;
});
var partial__10473 = (function() { 
var G__10483__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10484__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10484 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10484__delegate.call(this, args);
};
G__10484.cljs$lang$maxFixedArity = 0;
G__10484.cljs$lang$applyTo = (function (arglist__10485){
var args = cljs.core.seq( arglist__10485 );;
return G__10484__delegate.call(this, args);
});
return G__10484;
})()
;
};
var G__10483 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10483__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10483.cljs$lang$maxFixedArity = 4;
G__10483.cljs$lang$applyTo = (function (arglist__10486){
var f = cljs.core.first(arglist__10486);
var arg1 = cljs.core.first(cljs.core.next(arglist__10486));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10486)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10486))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10486))));
return G__10483__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10483;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10470.call(this,f,arg1);
case  3 :
return partial__10471.call(this,f,arg1,arg2);
case  4 :
return partial__10472.call(this,f,arg1,arg2,arg3);
default:
return partial__10473.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10473.cljs$lang$applyTo;
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
var fnil__10502 = (function (f,x){
return (function() {
var G__10512 = null;
var G__10512__10513 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10512__10514 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10512__10515 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10512__10516 = (function() { 
var G__10539__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10539 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10539__delegate.call(this, a, b, c, ds);
};
G__10539.cljs$lang$maxFixedArity = 3;
G__10539.cljs$lang$applyTo = (function (arglist__10540){
var a = cljs.core.first(arglist__10540);
var b = cljs.core.first(cljs.core.next(arglist__10540));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10540)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10540)));
return G__10539__delegate.call(this, a, b, c, ds);
});
return G__10539;
})()
;
G__10512 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10512__10513.call(this,a);
case  2 :
return G__10512__10514.call(this,a,b);
case  3 :
return G__10512__10515.call(this,a,b,c);
default:
return G__10512__10516.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10512.cljs$lang$maxFixedArity = 3;
G__10512.cljs$lang$applyTo = G__10512__10516.cljs$lang$applyTo;
return G__10512;
})()
});
var fnil__10503 = (function (f,x,y){
return (function() {
var G__10541 = null;
var G__10541__10542 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10541__10543 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10541__10544 = (function() { 
var G__10546__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10546 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10546__delegate.call(this, a, b, c, ds);
};
G__10546.cljs$lang$maxFixedArity = 3;
G__10546.cljs$lang$applyTo = (function (arglist__10547){
var a = cljs.core.first(arglist__10547);
var b = cljs.core.first(cljs.core.next(arglist__10547));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10547)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10547)));
return G__10546__delegate.call(this, a, b, c, ds);
});
return G__10546;
})()
;
G__10541 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10541__10542.call(this,a,b);
case  3 :
return G__10541__10543.call(this,a,b,c);
default:
return G__10541__10544.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10541.cljs$lang$maxFixedArity = 3;
G__10541.cljs$lang$applyTo = G__10541__10544.cljs$lang$applyTo;
return G__10541;
})()
});
var fnil__10504 = (function (f,x,y,z){
return (function() {
var G__10548 = null;
var G__10548__10549 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10548__10550 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10548__10551 = (function() { 
var G__10554__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10554 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10554__delegate.call(this, a, b, c, ds);
};
G__10554.cljs$lang$maxFixedArity = 3;
G__10554.cljs$lang$applyTo = (function (arglist__10556){
var a = cljs.core.first(arglist__10556);
var b = cljs.core.first(cljs.core.next(arglist__10556));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10556)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10556)));
return G__10554__delegate.call(this, a, b, c, ds);
});
return G__10554;
})()
;
G__10548 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10548__10549.call(this,a,b);
case  3 :
return G__10548__10550.call(this,a,b,c);
default:
return G__10548__10551.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10548.cljs$lang$maxFixedArity = 3;
G__10548.cljs$lang$applyTo = G__10548__10551.cljs$lang$applyTo;
return G__10548;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10502.call(this,f,x);
case  3 :
return fnil__10503.call(this,f,x,y);
case  4 :
return fnil__10504.call(this,f,x,y,z);
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
var mapi__10566 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10563 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10563))
{var s__10564 = temp__3698__auto____10563;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10564)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10564)));
} else
{return null;
}
})));
});

return mapi__10566.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10570 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10570))
{var s__10571 = temp__3698__auto____10570;

var x__10572 = f.call(null,cljs.core.first.call(null,s__10571));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10572)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10571));
} else
{return cljs.core.cons.call(null,x__10572,keep.call(null,f,cljs.core.rest.call(null,s__10571)));
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
var keepi__10600 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10595 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10595))
{var s__10597 = temp__3698__auto____10595;

var x__10599 = f.call(null,idx,cljs.core.first.call(null,s__10597));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10599)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10597));
} else
{return cljs.core.cons.call(null,x__10599,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10597)));
}
} else
{return null;
}
})));
});

return keepi__10600.call(null,0,coll);
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
var every_pred__10865 = (function (p){
return (function() {
var ep1 = null;
var ep1__10876 = (function (){
return true;
});
var ep1__10878 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10880 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10635 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10635))
{return p.call(null,y);
} else
{return and__3546__auto____10635;
}
})());
});
var ep1__10882 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10636 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10636))
{var and__3546__auto____10637 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10637))
{return p.call(null,z);
} else
{return and__3546__auto____10637;
}
} else
{return and__3546__auto____10636;
}
})());
});
var ep1__10884 = (function() { 
var G__10889__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10639 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10639))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10639;
}
})());
};
var G__10889 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10889__delegate.call(this, x, y, z, args);
};
G__10889.cljs$lang$maxFixedArity = 3;
G__10889.cljs$lang$applyTo = (function (arglist__10891){
var x = cljs.core.first(arglist__10891);
var y = cljs.core.first(cljs.core.next(arglist__10891));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10891)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10891)));
return G__10889__delegate.call(this, x, y, z, args);
});
return G__10889;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10876.call(this);
case  1 :
return ep1__10878.call(this,x);
case  2 :
return ep1__10880.call(this,x,y);
case  3 :
return ep1__10882.call(this,x,y,z);
default:
return ep1__10884.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10884.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10867 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10893 = (function (){
return true;
});
var ep2__10894 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10641 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10641))
{return p2.call(null,x);
} else
{return and__3546__auto____10641;
}
})());
});
var ep2__10895 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10642 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10642))
{var and__3546__auto____10643 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10643))
{var and__3546__auto____10644 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10644))
{return p2.call(null,y);
} else
{return and__3546__auto____10644;
}
} else
{return and__3546__auto____10643;
}
} else
{return and__3546__auto____10642;
}
})());
});
var ep2__10896 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10646 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10646))
{var and__3546__auto____10647 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10647))
{var and__3546__auto____10648 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10648))
{var and__3546__auto____10649 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10649))
{var and__3546__auto____10651 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10651))
{return p2.call(null,z);
} else
{return and__3546__auto____10651;
}
} else
{return and__3546__auto____10649;
}
} else
{return and__3546__auto____10648;
}
} else
{return and__3546__auto____10647;
}
} else
{return and__3546__auto____10646;
}
})());
});
var ep2__10897 = (function() { 
var G__10907__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10653 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10653))
{return cljs.core.every_QMARK_.call(null,(function (p1__10581_SHARP_){
var and__3546__auto____10654 = p1.call(null,p1__10581_SHARP_);

if(cljs.core.truth_(and__3546__auto____10654))
{return p2.call(null,p1__10581_SHARP_);
} else
{return and__3546__auto____10654;
}
}),args);
} else
{return and__3546__auto____10653;
}
})());
};
var G__10907 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10907__delegate.call(this, x, y, z, args);
};
G__10907.cljs$lang$maxFixedArity = 3;
G__10907.cljs$lang$applyTo = (function (arglist__10910){
var x = cljs.core.first(arglist__10910);
var y = cljs.core.first(cljs.core.next(arglist__10910));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10910)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10910)));
return G__10907__delegate.call(this, x, y, z, args);
});
return G__10907;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10893.call(this);
case  1 :
return ep2__10894.call(this,x);
case  2 :
return ep2__10895.call(this,x,y);
case  3 :
return ep2__10896.call(this,x,y,z);
default:
return ep2__10897.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10897.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10869 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10914 = (function (){
return true;
});
var ep3__10915 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10808 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10808))
{var and__3546__auto____10814 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10814))
{return p3.call(null,x);
} else
{return and__3546__auto____10814;
}
} else
{return and__3546__auto____10808;
}
})());
});
var ep3__10916 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10816 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10816))
{var and__3546__auto____10818 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10818))
{var and__3546__auto____10820 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10820))
{var and__3546__auto____10822 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10822))
{var and__3546__auto____10824 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10824))
{return p3.call(null,y);
} else
{return and__3546__auto____10824;
}
} else
{return and__3546__auto____10822;
}
} else
{return and__3546__auto____10820;
}
} else
{return and__3546__auto____10818;
}
} else
{return and__3546__auto____10816;
}
})());
});
var ep3__10918 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10827 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10827))
{var and__3546__auto____10828 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10828))
{var and__3546__auto____10830 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10830))
{var and__3546__auto____10832 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10832))
{var and__3546__auto____10835 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10835))
{var and__3546__auto____10837 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10837))
{var and__3546__auto____10839 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10839))
{var and__3546__auto____10842 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10842))
{return p3.call(null,z);
} else
{return and__3546__auto____10842;
}
} else
{return and__3546__auto____10839;
}
} else
{return and__3546__auto____10837;
}
} else
{return and__3546__auto____10835;
}
} else
{return and__3546__auto____10832;
}
} else
{return and__3546__auto____10830;
}
} else
{return and__3546__auto____10828;
}
} else
{return and__3546__auto____10827;
}
})());
});
var ep3__10919 = (function() { 
var G__10936__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10844 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10844))
{return cljs.core.every_QMARK_.call(null,(function (p1__10583_SHARP_){
var and__3546__auto____10845 = p1.call(null,p1__10583_SHARP_);

if(cljs.core.truth_(and__3546__auto____10845))
{var and__3546__auto____10848 = p2.call(null,p1__10583_SHARP_);

if(cljs.core.truth_(and__3546__auto____10848))
{return p3.call(null,p1__10583_SHARP_);
} else
{return and__3546__auto____10848;
}
} else
{return and__3546__auto____10845;
}
}),args);
} else
{return and__3546__auto____10844;
}
})());
};
var G__10936 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10936__delegate.call(this, x, y, z, args);
};
G__10936.cljs$lang$maxFixedArity = 3;
G__10936.cljs$lang$applyTo = (function (arglist__10943){
var x = cljs.core.first(arglist__10943);
var y = cljs.core.first(cljs.core.next(arglist__10943));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10943)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10943)));
return G__10936__delegate.call(this, x, y, z, args);
});
return G__10936;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10914.call(this);
case  1 :
return ep3__10915.call(this,x);
case  2 :
return ep3__10916.call(this,x,y);
case  3 :
return ep3__10918.call(this,x,y,z);
default:
return ep3__10919.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10919.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10870 = (function() { 
var G__10946__delegate = function (p1,p2,p3,ps){
var ps__10850 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10947 = (function (){
return true;
});
var epn__10948 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10585_SHARP_){
return p1__10585_SHARP_.call(null,x);
}),ps__10850);
});
var epn__10950 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10588_SHARP_){
var and__3546__auto____10852 = p1__10588_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10852))
{return p1__10588_SHARP_.call(null,y);
} else
{return and__3546__auto____10852;
}
}),ps__10850);
});
var epn__10951 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10589_SHARP_){
var and__3546__auto____10854 = p1__10589_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10854))
{var and__3546__auto____10856 = p1__10589_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10856))
{return p1__10589_SHARP_.call(null,z);
} else
{return and__3546__auto____10856;
}
} else
{return and__3546__auto____10854;
}
}),ps__10850);
});
var epn__10952 = (function() { 
var G__10958__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10859 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10859))
{return cljs.core.every_QMARK_.call(null,(function (p1__10591_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10591_SHARP_,args);
}),ps__10850);
} else
{return and__3546__auto____10859;
}
})());
};
var G__10958 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10958__delegate.call(this, x, y, z, args);
};
G__10958.cljs$lang$maxFixedArity = 3;
G__10958.cljs$lang$applyTo = (function (arglist__10959){
var x = cljs.core.first(arglist__10959);
var y = cljs.core.first(cljs.core.next(arglist__10959));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10959)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10959)));
return G__10958__delegate.call(this, x, y, z, args);
});
return G__10958;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10947.call(this);
case  1 :
return epn__10948.call(this,x);
case  2 :
return epn__10950.call(this,x,y);
case  3 :
return epn__10951.call(this,x,y,z);
default:
return epn__10952.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10952.cljs$lang$applyTo;
return epn;
})()
};
var G__10946 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10946__delegate.call(this, p1, p2, p3, ps);
};
G__10946.cljs$lang$maxFixedArity = 3;
G__10946.cljs$lang$applyTo = (function (arglist__10960){
var p1 = cljs.core.first(arglist__10960);
var p2 = cljs.core.first(cljs.core.next(arglist__10960));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10960)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10960)));
return G__10946__delegate.call(this, p1, p2, p3, ps);
});
return G__10946;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10865.call(this,p1);
case  2 :
return every_pred__10867.call(this,p1,p2);
case  3 :
return every_pred__10869.call(this,p1,p2,p3);
default:
return every_pred__10870.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10870.cljs$lang$applyTo;
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
var some_fn__11249 = (function (p){
return (function() {
var sp1 = null;
var sp1__11255 = (function (){
return null;
});
var sp1__11256 = (function (x){
return p.call(null,x);
});
var sp1__11259 = (function (x,y){
var or__3548__auto____10968 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10968))
{return or__3548__auto____10968;
} else
{return p.call(null,y);
}
});
var sp1__11261 = (function (x,y,z){
var or__3548__auto____10969 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10969))
{return or__3548__auto____10969;
} else
{var or__3548__auto____10970 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____10970))
{return or__3548__auto____10970;
} else
{return p.call(null,z);
}
}
});
var sp1__11263 = (function() { 
var G__11266__delegate = function (x,y,z,args){
var or__3548__auto____10971 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10971))
{return or__3548__auto____10971;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11266 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11266__delegate.call(this, x, y, z, args);
};
G__11266.cljs$lang$maxFixedArity = 3;
G__11266.cljs$lang$applyTo = (function (arglist__11267){
var x = cljs.core.first(arglist__11267);
var y = cljs.core.first(cljs.core.next(arglist__11267));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11267)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11267)));
return G__11266__delegate.call(this, x, y, z, args);
});
return G__11266;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11255.call(this);
case  1 :
return sp1__11256.call(this,x);
case  2 :
return sp1__11259.call(this,x,y);
case  3 :
return sp1__11261.call(this,x,y,z);
default:
return sp1__11263.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11263.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11250 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11270 = (function (){
return null;
});
var sp2__11271 = (function (x){
var or__3548__auto____10972 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10972))
{return or__3548__auto____10972;
} else
{return p2.call(null,x);
}
});
var sp2__11272 = (function (x,y){
var or__3548__auto____10976 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10976))
{return or__3548__auto____10976;
} else
{var or__3548__auto____10979 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10979))
{return or__3548__auto____10979;
} else
{var or__3548__auto____10982 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10982))
{return or__3548__auto____10982;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11274 = (function (x,y,z){
var or__3548__auto____10985 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10985))
{return or__3548__auto____10985;
} else
{var or__3548__auto____10986 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10986))
{return or__3548__auto____10986;
} else
{var or__3548__auto____10987 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10987))
{return or__3548__auto____10987;
} else
{var or__3548__auto____10988 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10988))
{return or__3548__auto____10988;
} else
{var or__3548__auto____10990 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10990))
{return or__3548__auto____10990;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11327 = (function() { 
var G__11338__delegate = function (x,y,z,args){
var or__3548__auto____10993 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10993))
{return or__3548__auto____10993;
} else
{return cljs.core.some.call(null,(function (p1__10604_SHARP_){
var or__3548__auto____10996 = p1.call(null,p1__10604_SHARP_);

if(cljs.core.truth_(or__3548__auto____10996))
{return or__3548__auto____10996;
} else
{return p2.call(null,p1__10604_SHARP_);
}
}),args);
}
};
var G__11338 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11338__delegate.call(this, x, y, z, args);
};
G__11338.cljs$lang$maxFixedArity = 3;
G__11338.cljs$lang$applyTo = (function (arglist__11342){
var x = cljs.core.first(arglist__11342);
var y = cljs.core.first(cljs.core.next(arglist__11342));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11342)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11342)));
return G__11338__delegate.call(this, x, y, z, args);
});
return G__11338;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11270.call(this);
case  1 :
return sp2__11271.call(this,x);
case  2 :
return sp2__11272.call(this,x,y);
case  3 :
return sp2__11274.call(this,x,y,z);
default:
return sp2__11327.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11327.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11251 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11344 = (function (){
return null;
});
var sp3__11345 = (function (x){
var or__3548__auto____11001 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11001))
{return or__3548__auto____11001;
} else
{var or__3548__auto____11003 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11003))
{return or__3548__auto____11003;
} else
{return p3.call(null,x);
}
}
});
var sp3__11346 = (function (x,y){
var or__3548__auto____11004 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11004))
{return or__3548__auto____11004;
} else
{var or__3548__auto____11005 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11005))
{return or__3548__auto____11005;
} else
{var or__3548__auto____11006 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11006))
{return or__3548__auto____11006;
} else
{var or__3548__auto____11007 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11007))
{return or__3548__auto____11007;
} else
{var or__3548__auto____11009 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11009))
{return or__3548__auto____11009;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11347 = (function (x,y,z){
var or__3548__auto____11135 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11135))
{return or__3548__auto____11135;
} else
{var or__3548__auto____11138 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11138))
{return or__3548__auto____11138;
} else
{var or__3548__auto____11154 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11154))
{return or__3548__auto____11154;
} else
{var or__3548__auto____11156 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11156))
{return or__3548__auto____11156;
} else
{var or__3548__auto____11158 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11158))
{return or__3548__auto____11158;
} else
{var or__3548__auto____11165 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11165))
{return or__3548__auto____11165;
} else
{var or__3548__auto____11171 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11171))
{return or__3548__auto____11171;
} else
{var or__3548__auto____11176 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11176))
{return or__3548__auto____11176;
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
var sp3__11348 = (function() { 
var G__11361__delegate = function (x,y,z,args){
var or__3548__auto____11187 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11187))
{return or__3548__auto____11187;
} else
{return cljs.core.some.call(null,(function (p1__10611_SHARP_){
var or__3548__auto____11192 = p1.call(null,p1__10611_SHARP_);

if(cljs.core.truth_(or__3548__auto____11192))
{return or__3548__auto____11192;
} else
{var or__3548__auto____11193 = p2.call(null,p1__10611_SHARP_);

if(cljs.core.truth_(or__3548__auto____11193))
{return or__3548__auto____11193;
} else
{return p3.call(null,p1__10611_SHARP_);
}
}
}),args);
}
};
var G__11361 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11361__delegate.call(this, x, y, z, args);
};
G__11361.cljs$lang$maxFixedArity = 3;
G__11361.cljs$lang$applyTo = (function (arglist__11369){
var x = cljs.core.first(arglist__11369);
var y = cljs.core.first(cljs.core.next(arglist__11369));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11369)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11369)));
return G__11361__delegate.call(this, x, y, z, args);
});
return G__11361;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11344.call(this);
case  1 :
return sp3__11345.call(this,x);
case  2 :
return sp3__11346.call(this,x,y);
case  3 :
return sp3__11347.call(this,x,y,z);
default:
return sp3__11348.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11348.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11252 = (function() { 
var G__11370__delegate = function (p1,p2,p3,ps){
var ps__11227 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11371 = (function (){
return null;
});
var spn__11372 = (function (x){
return cljs.core.some.call(null,(function (p1__10612_SHARP_){
return p1__10612_SHARP_.call(null,x);
}),ps__11227);
});
var spn__11373 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10613_SHARP_){
var or__3548__auto____11229 = p1__10613_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11229))
{return or__3548__auto____11229;
} else
{return p1__10613_SHARP_.call(null,y);
}
}),ps__11227);
});
var spn__11374 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10614_SHARP_){
var or__3548__auto____11232 = p1__10614_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11232))
{return or__3548__auto____11232;
} else
{var or__3548__auto____11234 = p1__10614_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11234))
{return or__3548__auto____11234;
} else
{return p1__10614_SHARP_.call(null,z);
}
}
}),ps__11227);
});
var spn__11375 = (function() { 
var G__11383__delegate = function (x,y,z,args){
var or__3548__auto____11238 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11238))
{return or__3548__auto____11238;
} else
{return cljs.core.some.call(null,(function (p1__10616_SHARP_){
return cljs.core.some.call(null,p1__10616_SHARP_,args);
}),ps__11227);
}
};
var G__11383 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11383__delegate.call(this, x, y, z, args);
};
G__11383.cljs$lang$maxFixedArity = 3;
G__11383.cljs$lang$applyTo = (function (arglist__11416){
var x = cljs.core.first(arglist__11416);
var y = cljs.core.first(cljs.core.next(arglist__11416));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11416)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11416)));
return G__11383__delegate.call(this, x, y, z, args);
});
return G__11383;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11371.call(this);
case  1 :
return spn__11372.call(this,x);
case  2 :
return spn__11373.call(this,x,y);
case  3 :
return spn__11374.call(this,x,y,z);
default:
return spn__11375.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11375.cljs$lang$applyTo;
return spn;
})()
};
var G__11370 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11370__delegate.call(this, p1, p2, p3, ps);
};
G__11370.cljs$lang$maxFixedArity = 3;
G__11370.cljs$lang$applyTo = (function (arglist__11421){
var p1 = cljs.core.first(arglist__11421);
var p2 = cljs.core.first(cljs.core.next(arglist__11421));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11421)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11421)));
return G__11370__delegate.call(this, p1, p2, p3, ps);
});
return G__11370;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11249.call(this,p1);
case  2 :
return some_fn__11250.call(this,p1,p2);
case  3 :
return some_fn__11251.call(this,p1,p2,p3);
default:
return some_fn__11252.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11252.cljs$lang$applyTo;
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
var map__11515 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11439 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11439))
{var s__11441 = temp__3698__auto____11439;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11441)),map.call(null,f,cljs.core.rest.call(null,s__11441)));
} else
{return null;
}
})));
});
var map__11517 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11452 = cljs.core.seq.call(null,c1);
var s2__11453 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11455 = s1__11452;

if(cljs.core.truth_(and__3546__auto____11455))
{return s2__11453;
} else
{return and__3546__auto____11455;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11452),cljs.core.first.call(null,s2__11453)),map.call(null,f,cljs.core.rest.call(null,s1__11452),cljs.core.rest.call(null,s2__11453)));
} else
{return null;
}
})));
});
var map__11518 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11463 = cljs.core.seq.call(null,c1);
var s2__11465 = cljs.core.seq.call(null,c2);
var s3__11466 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11491 = s1__11463;

if(cljs.core.truth_(and__3546__auto____11491))
{var and__3546__auto____11494 = s2__11465;

if(cljs.core.truth_(and__3546__auto____11494))
{return s3__11466;
} else
{return and__3546__auto____11494;
}
} else
{return and__3546__auto____11491;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11463),cljs.core.first.call(null,s2__11465),cljs.core.first.call(null,s3__11466)),map.call(null,f,cljs.core.rest.call(null,s1__11463),cljs.core.rest.call(null,s2__11465),cljs.core.rest.call(null,s3__11466)));
} else
{return null;
}
})));
});
var map__11519 = (function() { 
var G__11547__delegate = function (f,c1,c2,c3,colls){
var step__11502 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11500 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11500)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11500),step.call(null,map.call(null,cljs.core.rest,ss__11500)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__10965_SHARP_){
return cljs.core.apply.call(null,f,p1__10965_SHARP_);
}),step__11502.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11547 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11547__delegate.call(this, f, c1, c2, c3, colls);
};
G__11547.cljs$lang$maxFixedArity = 4;
G__11547.cljs$lang$applyTo = (function (arglist__11554){
var f = cljs.core.first(arglist__11554);
var c1 = cljs.core.first(cljs.core.next(arglist__11554));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11554)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11554))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11554))));
return G__11547__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11547;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11515.call(this,f,c1);
case  3 :
return map__11517.call(this,f,c1,c2);
case  4 :
return map__11518.call(this,f,c1,c2,c3);
default:
return map__11519.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11519.cljs$lang$applyTo;
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
{var temp__3698__auto____11565 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11565))
{var s__11567 = temp__3698__auto____11565;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11567),take.call(null,(n - 1),cljs.core.rest.call(null,s__11567)));
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
var step__11580 = (function (n,coll){
while(true){
var s__11576 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11578 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11578))
{return s__11576;
} else
{return and__3546__auto____11578;
}
})()))
{{
var G__11589 = (n - 1);
var G__11590 = cljs.core.rest.call(null,s__11576);
n = G__11589;
coll = G__11590;
continue;
}
} else
{return s__11576;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11580.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11594 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11595 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11594.call(this,n);
case  2 :
return drop_last__11595.call(this,n,s);
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
var s__11631 = cljs.core.seq.call(null,coll);
var lead__11636 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11636))
{{
var G__11643 = cljs.core.next.call(null,s__11631);
var G__11644 = cljs.core.next.call(null,lead__11636);
s__11631 = G__11643;
lead__11636 = G__11644;
continue;
}
} else
{return s__11631;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11656 = (function (pred,coll){
while(true){
var s__11647 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11650 = s__11647;

if(cljs.core.truth_(and__3546__auto____11650))
{return pred.call(null,cljs.core.first.call(null,s__11647));
} else
{return and__3546__auto____11650;
}
})()))
{{
var G__11660 = pred;
var G__11661 = cljs.core.rest.call(null,s__11647);
pred = G__11660;
coll = G__11661;
continue;
}
} else
{return s__11647;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11656.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11665 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11665))
{var s__11666 = temp__3698__auto____11665;

return cljs.core.concat.call(null,s__11666,cycle.call(null,s__11666));
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
var repeat__11681 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11682 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11681.call(this,n);
case  2 :
return repeat__11682.call(this,n,x);
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
var repeatedly__11695 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11696 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11695.call(this,n);
case  2 :
return repeatedly__11696.call(this,n,f);
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
var interleave__11716 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11702 = cljs.core.seq.call(null,c1);
var s2__11703 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11704 = s1__11702;

if(cljs.core.truth_(and__3546__auto____11704))
{return s2__11703;
} else
{return and__3546__auto____11704;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11702),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11703),interleave.call(null,cljs.core.rest.call(null,s1__11702),cljs.core.rest.call(null,s2__11703))));
} else
{return null;
}
})));
});
var interleave__11717 = (function() { 
var G__11722__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11714 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11714)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11714),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11714)));
} else
{return null;
}
})));
};
var G__11722 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11722__delegate.call(this, c1, c2, colls);
};
G__11722.cljs$lang$maxFixedArity = 2;
G__11722.cljs$lang$applyTo = (function (arglist__11727){
var c1 = cljs.core.first(arglist__11727);
var c2 = cljs.core.first(cljs.core.next(arglist__11727));
var colls = cljs.core.rest(cljs.core.next(arglist__11727));
return G__11722__delegate.call(this, c1, c2, colls);
});
return G__11722;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11716.call(this,c1,c2);
default:
return interleave__11717.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11717.cljs$lang$applyTo;
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
var cat__11741 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11737 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11737))
{var coll__11738 = temp__3695__auto____11737;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11738),cat.call(null,cljs.core.rest.call(null,coll__11738),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11741.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11756 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11758 = (function() { 
var G__11766__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11766 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11766__delegate.call(this, f, coll, colls);
};
G__11766.cljs$lang$maxFixedArity = 2;
G__11766.cljs$lang$applyTo = (function (arglist__11769){
var f = cljs.core.first(arglist__11769);
var coll = cljs.core.first(cljs.core.next(arglist__11769));
var colls = cljs.core.rest(cljs.core.next(arglist__11769));
return G__11766__delegate.call(this, f, coll, colls);
});
return G__11766;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11756.call(this,f,coll);
default:
return mapcat__11758.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11758.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11772 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11772))
{var s__11774 = temp__3698__auto____11772;

var f__11775 = cljs.core.first.call(null,s__11774);
var r__11776 = cljs.core.rest.call(null,s__11774);

if(cljs.core.truth_(pred.call(null,f__11775)))
{return cljs.core.cons.call(null,f__11775,filter.call(null,pred,r__11776));
} else
{return filter.call(null,pred,r__11776);
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
var walk__11785 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11785.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11784_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11784_SHARP_));
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
var partition__11835 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11836 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11820 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11820))
{var s__11821 = temp__3698__auto____11820;

var p__11824 = cljs.core.take.call(null,n,s__11821);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11824))))
{return cljs.core.cons.call(null,p__11824,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11821)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11838 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11826 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11826))
{var s__11829 = temp__3698__auto____11826;

var p__11830 = cljs.core.take.call(null,n,s__11829);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11830))))
{return cljs.core.cons.call(null,p__11830,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11829)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11830,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11835.call(this,n,step);
case  3 :
return partition__11836.call(this,n,step,pad);
case  4 :
return partition__11838.call(this,n,step,pad,coll);
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
var get_in__11856 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__11857 = (function (m,ks,not_found){
var sentinel__11848 = cljs.core.lookup_sentinel;
var m__11850 = m;
var ks__11851 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__11851))
{var m__11852 = cljs.core.get.call(null,m__11850,cljs.core.first.call(null,ks__11851),sentinel__11848);

if(cljs.core.truth_((sentinel__11848 === m__11852)))
{return not_found;
} else
{{
var G__11859 = sentinel__11848;
var G__11860 = m__11852;
var G__11861 = cljs.core.next.call(null,ks__11851);
sentinel__11848 = G__11859;
m__11850 = G__11860;
ks__11851 = G__11861;
continue;
}
}
} else
{return m__11850;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__11856.call(this,m,ks);
case  3 :
return get_in__11857.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__11864,v){
var vec__11865__11866 = p__11864;
var k__11868 = cljs.core.nth.call(null,vec__11865__11866,0,null);
var ks__11869 = cljs.core.nthnext.call(null,vec__11865__11866,1);

if(cljs.core.truth_(ks__11869))
{return cljs.core.assoc.call(null,m,k__11868,assoc_in.call(null,cljs.core.get.call(null,m,k__11868),ks__11869,v));
} else
{return cljs.core.assoc.call(null,m,k__11868,v);
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
var update_in__delegate = function (m,p__11878,f,args){
var vec__11880__11881 = p__11878;
var k__11882 = cljs.core.nth.call(null,vec__11880__11881,0,null);
var ks__11883 = cljs.core.nthnext.call(null,vec__11880__11881,1);

if(cljs.core.truth_(ks__11883))
{return cljs.core.assoc.call(null,m,k__11882,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__11882),ks__11883,f,args));
} else
{return cljs.core.assoc.call(null,m,k__11882,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__11882),args));
}
};
var update_in = function (m,p__11878,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__11878, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__11894){
var m = cljs.core.first(arglist__11894);
var p__11878 = cljs.core.first(cljs.core.next(arglist__11894));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11894)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11894)));
return update_in__delegate.call(this, m, p__11878, f, args);
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
var this__11911 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11952 = null;
var G__11952__11953 = (function (coll,k){
var this__11912 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__11952__11954 = (function (coll,k,not_found){
var this__11914 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__11952 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11952__11953.call(this,coll,k);
case  3 :
return G__11952__11954.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11952;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11916 = this;
var new_array__11918 = cljs.core.aclone.call(null,this__11916.array);

(new_array__11918[k] = v);
return (new cljs.core.Vector(this__11916.meta,new_array__11918));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__11958 = null;
var G__11958__11960 = (function (coll,k){
var this__11920 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11958__11961 = (function (coll,k,not_found){
var this__11921 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11958 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11958__11960.call(this,coll,k);
case  3 :
return G__11958__11961.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11958;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11922 = this;
var new_array__11923 = cljs.core.aclone.call(null,this__11922.array);

new_array__11923.push(o);
return (new cljs.core.Vector(this__11922.meta,new_array__11923));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__11965 = null;
var G__11965__11968 = (function (v,f){
var this__11924 = this;
return cljs.core.ci_reduce.call(null,this__11924.array,f);
});
var G__11965__11970 = (function (v,f,start){
var this__11925 = this;
return cljs.core.ci_reduce.call(null,this__11925.array,f,start);
});
G__11965 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__11965__11968.call(this,v,f);
case  3 :
return G__11965__11970.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11965;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11926 = this;
if(cljs.core.truth_((this__11926.array.length > 0)))
{var vector_seq__11927 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__11926.array.length)))
{return cljs.core.cons.call(null,(this__11926.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__11927.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11928 = this;
return this__11928.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11929 = this;
var count__11930 = this__11929.array.length;

if(cljs.core.truth_((count__11930 > 0)))
{return (this__11929.array[(count__11930 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11931 = this;
if(cljs.core.truth_((this__11931.array.length > 0)))
{var new_array__11935 = cljs.core.aclone.call(null,this__11931.array);

new_array__11935.pop();
return (new cljs.core.Vector(this__11931.meta,new_array__11935));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__11936 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11937 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11939 = this;
return (new cljs.core.Vector(meta,this__11939.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11941 = this;
return this__11941.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__11974 = null;
var G__11974__11975 = (function (coll,n){
var this__11942 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11943 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11943))
{return (n < this__11942.array.length);
} else
{return and__3546__auto____11943;
}
})()))
{return (this__11942.array[n]);
} else
{return null;
}
});
var G__11974__11976 = (function (coll,n,not_found){
var this__11946 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11947 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11947))
{return (n < this__11946.array.length);
} else
{return and__3546__auto____11947;
}
})()))
{return (this__11946.array[n]);
} else
{return not_found;
}
});
G__11974 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__11974__11975.call(this,coll,n);
case  3 :
return G__11974__11976.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11974;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11950 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__11950.meta);
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
vector.cljs$lang$applyTo = (function (arglist__11985){
var args = cljs.core.seq( arglist__11985 );;
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
var this__11994 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12230 = null;
var G__12230__12232 = (function (coll,k){
var this__11995 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12230__12233 = (function (coll,k,not_found){
var this__11996 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12230 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12230__12232.call(this,coll,k);
case  3 :
return G__12230__12233.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12230;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__11997 = this;
var v_pos__11999 = (this__11997.start + key);

return (new cljs.core.Subvec(this__11997.meta,cljs.core._assoc.call(null,this__11997.v,v_pos__11999,val),this__11997.start,((this__11997.end > (v_pos__11999 + 1)) ? this__11997.end : (v_pos__11999 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12241 = null;
var G__12241__12242 = (function (coll,k){
var this__12003 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12241__12243 = (function (coll,k,not_found){
var this__12005 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12241 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12241__12242.call(this,coll,k);
case  3 :
return G__12241__12243.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12241;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12006 = this;
return (new cljs.core.Subvec(this__12006.meta,cljs.core._assoc_n.call(null,this__12006.v,this__12006.end,o),this__12006.start,(this__12006.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12245 = null;
var G__12245__12246 = (function (coll,f){
var this__12010 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12245__12247 = (function (coll,f,start){
var this__12017 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12245 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12245__12246.call(this,coll,f);
case  3 :
return G__12245__12247.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12245;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12020 = this;
var subvec_seq__12068 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12020.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12020.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12068.call(null,this__12020.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12071 = this;
return (this__12071.end - this__12071.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12073 = this;
return cljs.core._nth.call(null,this__12073.v,(this__12073.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12077 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12077.start,this__12077.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12077.meta,this__12077.v,this__12077.start,(this__12077.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12202 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12208 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12209 = this;
return (new cljs.core.Subvec(meta,this__12209.v,this__12209.start,this__12209.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12211 = this;
return this__12211.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12260 = null;
var G__12260__12262 = (function (coll,n){
var this__12217 = this;
return cljs.core._nth.call(null,this__12217.v,(this__12217.start + n));
});
var G__12260__12263 = (function (coll,n,not_found){
var this__12220 = this;
return cljs.core._nth.call(null,this__12220.v,(this__12220.start + n),not_found);
});
G__12260 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12260__12262.call(this,coll,n);
case  3 :
return G__12260__12263.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12260;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12224 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12224.meta);
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
var subvec__12267 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12269 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12267.call(this,v,start);
case  3 :
return subvec__12269.call(this,v,start,end);
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
var this__12281 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12282 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12283 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12284 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12284.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12286 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12288 = this;
return cljs.core._first.call(null,this__12288.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12317 = this;
var temp__3695__auto____12320 = cljs.core.next.call(null,this__12317.front);

if(cljs.core.truth_(temp__3695__auto____12320))
{var f1__12321 = temp__3695__auto____12320;

return (new cljs.core.PersistentQueueSeq(this__12317.meta,f1__12321,this__12317.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12317.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12317.meta,this__12317.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12326 = this;
return this__12326.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12329 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12329.front,this__12329.rear));
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
var this__12347 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12348 = this;
if(cljs.core.truth_(this__12348.front))
{return (new cljs.core.PersistentQueue(this__12348.meta,(this__12348.count + 1),this__12348.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12349 = this__12348.rear;

if(cljs.core.truth_(or__3548__auto____12349))
{return or__3548__auto____12349;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12348.meta,(this__12348.count + 1),cljs.core.conj.call(null,this__12348.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12350 = this;
var rear__12351 = cljs.core.seq.call(null,this__12350.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12352 = this__12350.front;

if(cljs.core.truth_(or__3548__auto____12352))
{return or__3548__auto____12352;
} else
{return rear__12351;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12350.front,cljs.core.seq.call(null,rear__12351)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12353 = this;
return this__12353.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12354 = this;
return cljs.core._first.call(null,this__12354.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12355 = this;
if(cljs.core.truth_(this__12355.front))
{var temp__3695__auto____12356 = cljs.core.next.call(null,this__12355.front);

if(cljs.core.truth_(temp__3695__auto____12356))
{var f1__12357 = temp__3695__auto____12356;

return (new cljs.core.PersistentQueue(this__12355.meta,(this__12355.count - 1),f1__12357,this__12355.rear));
} else
{return (new cljs.core.PersistentQueue(this__12355.meta,(this__12355.count - 1),cljs.core.seq.call(null,this__12355.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12358 = this;
return cljs.core.first.call(null,this__12358.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12359 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12360 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12361 = this;
return (new cljs.core.PersistentQueue(meta,this__12361.count,this__12361.front,this__12361.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12362 = this;
return this__12362.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12363 = this;
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
var this__12385 = this;
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
var len__12397 = array.length;

var i__12398 = 0;

while(true){
if(cljs.core.truth_((i__12398 < len__12397)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12398]))))
{return i__12398;
} else
{{
var G__12403 = (i__12398 + incr);
i__12398 = G__12403;
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
var obj_map_contains_key_QMARK___12410 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12411 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12404 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12404))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12404;
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
return obj_map_contains_key_QMARK___12410.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12411.call(this,k,strobj,true_val,false_val);
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
var this__12448 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12492 = null;
var G__12492__12493 = (function (coll,k){
var this__12450 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12492__12494 = (function (coll,k,not_found){
var this__12451 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12451.strobj,(this__12451.strobj[k]),not_found);
});
G__12492 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12492__12493.call(this,coll,k);
case  3 :
return G__12492__12494.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12492;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12452 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12453 = goog.object.clone.call(null,this__12452.strobj);
var overwrite_QMARK___12456 = new_strobj__12453.hasOwnProperty(k);

(new_strobj__12453[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12456))
{return (new cljs.core.ObjMap(this__12452.meta,this__12452.keys,new_strobj__12453));
} else
{var new_keys__12458 = cljs.core.aclone.call(null,this__12452.keys);

new_keys__12458.push(k);
return (new cljs.core.ObjMap(this__12452.meta,new_keys__12458,new_strobj__12453));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12452.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12469 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12469.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12504 = null;
var G__12504__12505 = (function (coll,k){
var this__12471 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12504__12506 = (function (coll,k,not_found){
var this__12472 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12504 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12504__12505.call(this,coll,k);
case  3 :
return G__12504__12506.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12504;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12473 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12474 = this;
if(cljs.core.truth_((this__12474.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12413_SHARP_){
return cljs.core.vector.call(null,p1__12413_SHARP_,(this__12474.strobj[p1__12413_SHARP_]));
}),this__12474.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12475 = this;
return this__12475.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12476 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12477 = this;
return (new cljs.core.ObjMap(meta,this__12477.keys,this__12477.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12479 = this;
return this__12479.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12481 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12481.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12483 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12484 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12484))
{return this__12483.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12484;
}
})()))
{var new_keys__12485 = cljs.core.aclone.call(null,this__12483.keys);
var new_strobj__12486 = goog.object.clone.call(null,this__12483.strobj);

new_keys__12485.splice(cljs.core.scan_array.call(null,1,k,new_keys__12485),1);
cljs.core.js_delete.call(null,new_strobj__12486,k);
return (new cljs.core.ObjMap(this__12483.meta,new_keys__12485,new_strobj__12486));
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
var this__12529 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12685 = null;
var G__12685__12686 = (function (coll,k){
var this__12531 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12685__12688 = (function (coll,k,not_found){
var this__12534 = this;
var bucket__12535 = (this__12534.hashobj[cljs.core.hash.call(null,k)]);
var i__12537 = (cljs.core.truth_(bucket__12535)?cljs.core.scan_array.call(null,2,k,bucket__12535):null);

if(cljs.core.truth_(i__12537))
{return (bucket__12535[(i__12537 + 1)]);
} else
{return not_found;
}
});
G__12685 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12685__12686.call(this,coll,k);
case  3 :
return G__12685__12688.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12685;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12538 = this;
var h__12540 = cljs.core.hash.call(null,k);
var bucket__12541 = (this__12538.hashobj[h__12540]);

if(cljs.core.truth_(bucket__12541))
{var new_bucket__12543 = cljs.core.aclone.call(null,bucket__12541);
var new_hashobj__12544 = goog.object.clone.call(null,this__12538.hashobj);

(new_hashobj__12544[h__12540] = new_bucket__12543);
var temp__3695__auto____12546 = cljs.core.scan_array.call(null,2,k,new_bucket__12543);

if(cljs.core.truth_(temp__3695__auto____12546))
{var i__12547 = temp__3695__auto____12546;

(new_bucket__12543[(i__12547 + 1)] = v);
return (new cljs.core.HashMap(this__12538.meta,this__12538.count,new_hashobj__12544));
} else
{new_bucket__12543.push(k,v);
return (new cljs.core.HashMap(this__12538.meta,(this__12538.count + 1),new_hashobj__12544));
}
} else
{var new_hashobj__12549 = goog.object.clone.call(null,this__12538.hashobj);

(new_hashobj__12549[h__12540] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12538.meta,(this__12538.count + 1),new_hashobj__12549));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12556 = this;
var bucket__12557 = (this__12556.hashobj[cljs.core.hash.call(null,k)]);
var i__12560 = (cljs.core.truth_(bucket__12557)?cljs.core.scan_array.call(null,2,k,bucket__12557):null);

if(cljs.core.truth_(i__12560))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12700 = null;
var G__12700__12701 = (function (coll,k){
var this__12561 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12700__12702 = (function (coll,k,not_found){
var this__12562 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12700 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12700__12701.call(this,coll,k);
case  3 :
return G__12700__12702.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12700;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12564 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12571 = this;
if(cljs.core.truth_((this__12571.count > 0)))
{var hashes__12661 = cljs.core.js_keys.call(null,this__12571.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12519_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12571.hashobj[p1__12519_SHARP_])));
}),hashes__12661);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12662 = this;
return this__12662.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12663 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12664 = this;
return (new cljs.core.HashMap(meta,this__12664.count,this__12664.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12665 = this;
return this__12665.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12666 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12666.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12671 = this;
var h__12673 = cljs.core.hash.call(null,k);
var bucket__12674 = (this__12671.hashobj[h__12673]);
var i__12676 = (cljs.core.truth_(bucket__12674)?cljs.core.scan_array.call(null,2,k,bucket__12674):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12676)))
{return coll;
} else
{var new_hashobj__12678 = goog.object.clone.call(null,this__12671.hashobj);

if(cljs.core.truth_((3 > bucket__12674.length)))
{cljs.core.js_delete.call(null,new_hashobj__12678,h__12673);
} else
{var new_bucket__12680 = cljs.core.aclone.call(null,bucket__12674);

new_bucket__12680.splice(i__12676,2);
(new_hashobj__12678[h__12673] = new_bucket__12680);
}
return (new cljs.core.HashMap(this__12671.meta,(this__12671.count - 1),new_hashobj__12678));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12741 = ks.length;

var i__12743 = 0;
var out__12745 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12743 < len__12741)))
{{
var G__12751 = (i__12743 + 1);
var G__12752 = cljs.core.assoc.call(null,out__12745,(ks[i__12743]),(vs[i__12743]));
i__12743 = G__12751;
out__12745 = G__12752;
continue;
}
} else
{return out__12745;
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
var in$__12756 = cljs.core.seq.call(null,keyvals);
var out__12757 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__12756))
{{
var G__12777 = cljs.core.nnext.call(null,in$__12756);
var G__12778 = cljs.core.assoc.call(null,out__12757,cljs.core.first.call(null,in$__12756),cljs.core.second.call(null,in$__12756));
in$__12756 = G__12777;
out__12757 = G__12778;
continue;
}
} else
{return out__12757;
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
hash_map.cljs$lang$applyTo = (function (arglist__12779){
var keyvals = cljs.core.seq( arglist__12779 );;
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
{return cljs.core.reduce.call(null,(function (p1__12780_SHARP_,p2__12781_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____12783 = p1__12780_SHARP_;

if(cljs.core.truth_(or__3548__auto____12783))
{return or__3548__auto____12783;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__12781_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__12786){
var maps = cljs.core.seq( arglist__12786 );;
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
{var merge_entry__12791 = (function (m,e){
var k__12788 = cljs.core.first.call(null,e);
var v__12789 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__12788)))
{return cljs.core.assoc.call(null,m,k__12788,f.call(null,cljs.core.get.call(null,m,k__12788),v__12789));
} else
{return cljs.core.assoc.call(null,m,k__12788,v__12789);
}
});
var merge2__12794 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__12791,(function (){var or__3548__auto____12792 = m1;

if(cljs.core.truth_(or__3548__auto____12792))
{return or__3548__auto____12792;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__12794,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__12801){
var f = cljs.core.first(arglist__12801);
var maps = cljs.core.rest(arglist__12801);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__12807 = cljs.core.ObjMap.fromObject([],{});
var keys__12808 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__12808))
{var key__12809 = cljs.core.first.call(null,keys__12808);
var entry__12810 = cljs.core.get.call(null,map,key__12809,"﷐'user/not-found");

{
var G__12812 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__12810,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__12807,key__12809,entry__12810):ret__12807);
var G__12813 = cljs.core.next.call(null,keys__12808);
ret__12807 = G__12812;
keys__12808 = G__12813;
continue;
}
} else
{return ret__12807;
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
var this__12825 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12876 = null;
var G__12876__12877 = (function (coll,v){
var this__12828 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__12876__12878 = (function (coll,v,not_found){
var this__12831 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__12831.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__12876 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__12876__12877.call(this,coll,v);
case  3 :
return G__12876__12878.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12876;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__12884 = null;
var G__12884__12885 = (function (coll,k){
var this__12837 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12884__12886 = (function (coll,k,not_found){
var this__12839 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12884 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12884__12885.call(this,coll,k);
case  3 :
return G__12884__12886.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12884;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12844 = this;
return (new cljs.core.Set(this__12844.meta,cljs.core.assoc.call(null,this__12844.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12848 = this;
return cljs.core.keys.call(null,this__12848.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__12852 = this;
return (new cljs.core.Set(this__12852.meta,cljs.core.dissoc.call(null,this__12852.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12856 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12860 = this;
var and__3546__auto____12862 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____12862))
{var and__3546__auto____12863 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____12863))
{return cljs.core.every_QMARK_.call(null,(function (p1__12802_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__12802_SHARP_);
}),other);
} else
{return and__3546__auto____12863;
}
} else
{return and__3546__auto____12862;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12865 = this;
return (new cljs.core.Set(meta,this__12865.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12867 = this;
return this__12867.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12870 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__12870.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__12918 = cljs.core.seq.call(null,coll);
var out__12919 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__12918))))
{{
var G__12922 = cljs.core.rest.call(null,in$__12918);
var G__12923 = cljs.core.conj.call(null,out__12919,cljs.core.first.call(null,in$__12918));
in$__12918 = G__12922;
out__12919 = G__12923;
continue;
}
} else
{return out__12919;
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
{var n__12928 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13006 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13006))
{var e__13012 = temp__3695__auto____13006;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13012));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__12928,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__12917_SHARP_){
var temp__3695__auto____13020 = cljs.core.find.call(null,smap,p1__12917_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13020))
{var e__13021 = temp__3695__auto____13020;

return cljs.core.second.call(null,e__13021);
} else
{return p1__12917_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13056 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13039,seen){
while(true){
var vec__13040__13042 = p__13039;
var f__13045 = cljs.core.nth.call(null,vec__13040__13042,0,null);
var xs__13047 = vec__13040__13042;

var temp__3698__auto____13049 = cljs.core.seq.call(null,xs__13047);

if(cljs.core.truth_(temp__3698__auto____13049))
{var s__13050 = temp__3698__auto____13049;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13045)))
{{
var G__13060 = cljs.core.rest.call(null,s__13050);
var G__13061 = seen;
p__13039 = G__13060;
seen = G__13061;
continue;
}
} else
{return cljs.core.cons.call(null,f__13045,step.call(null,cljs.core.rest.call(null,s__13050),cljs.core.conj.call(null,seen,f__13045)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13056.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13072 = cljs.core.Vector.fromArray([]);
var s__13074 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13074)))
{{
var G__13080 = cljs.core.conj.call(null,ret__13072,cljs.core.first.call(null,s__13074));
var G__13081 = cljs.core.next.call(null,s__13074);
ret__13072 = G__13080;
s__13074 = G__13081;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13072);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13083 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13083))
{return or__3548__auto____13083;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13087 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13087 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13087 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13255 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13255))
{return or__3548__auto____13255;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13258 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13258 > -1)))
{return cljs.core.subs.call(null,x,2,i__13258);
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
var map__13266 = cljs.core.ObjMap.fromObject([],{});
var ks__13268 = cljs.core.seq.call(null,keys);
var vs__13269 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13272 = ks__13268;

if(cljs.core.truth_(and__3546__auto____13272))
{return vs__13269;
} else
{return and__3546__auto____13272;
}
})()))
{{
var G__13276 = cljs.core.assoc.call(null,map__13266,cljs.core.first.call(null,ks__13268),cljs.core.first.call(null,vs__13269));
var G__13277 = cljs.core.next.call(null,ks__13268);
var G__13278 = cljs.core.next.call(null,vs__13269);
map__13266 = G__13276;
ks__13268 = G__13277;
vs__13269 = G__13278;
continue;
}
} else
{return map__13266;
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
var max_key__13289 = (function (k,x){
return x;
});
var max_key__13290 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13291 = (function() { 
var G__13297__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13262_SHARP_,p2__13263_SHARP_){
return max_key.call(null,k,p1__13262_SHARP_,p2__13263_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13297 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13297__delegate.call(this, k, x, y, more);
};
G__13297.cljs$lang$maxFixedArity = 3;
G__13297.cljs$lang$applyTo = (function (arglist__13301){
var k = cljs.core.first(arglist__13301);
var x = cljs.core.first(cljs.core.next(arglist__13301));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13301)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13301)));
return G__13297__delegate.call(this, k, x, y, more);
});
return G__13297;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13289.call(this,k,x);
case  3 :
return max_key__13290.call(this,k,x,y);
default:
return max_key__13291.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13291.cljs$lang$applyTo;
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
var G__13308__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13281_SHARP_,p2__13282_SHARP_){
return min_key.call(null,k,p1__13281_SHARP_,p2__13282_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13308 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13308__delegate.call(this, k, x, y, more);
};
G__13308.cljs$lang$maxFixedArity = 3;
G__13308.cljs$lang$applyTo = (function (arglist__13311){
var k = cljs.core.first(arglist__13311);
var x = cljs.core.first(cljs.core.next(arglist__13311));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13311)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13311)));
return G__13308__delegate.call(this, k, x, y, more);
});
return G__13308;
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
var partition_all__13373 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13375 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13313 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13313))
{var s__13314 = temp__3698__auto____13313;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13314),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13314)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13373.call(this,n,step);
case  3 :
return partition_all__13375.call(this,n,step,coll);
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
var temp__3698__auto____13389 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13389))
{var s__13390 = temp__3698__auto____13389;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13390))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13390),take_while.call(null,pred,cljs.core.rest.call(null,s__13390)));
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
var this__13429 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13430 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13485 = null;
var G__13485__13486 = (function (rng,f){
var this__13432 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13485__13487 = (function (rng,f,s){
var this__13435 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13485 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13485__13486.call(this,rng,f);
case  3 :
return G__13485__13487.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13485;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13438 = this;
var comp__13440 = (cljs.core.truth_((this__13438.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13440.call(null,this__13438.start,this__13438.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13443 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13443.end - this__13443.start) / this__13443.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13448 = this;
return this__13448.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13450 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13450.meta,(this__13450.start + this__13450.step),this__13450.end,this__13450.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13454 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13457 = this;
return (new cljs.core.Range(meta,this__13457.start,this__13457.end,this__13457.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13460 = this;
return this__13460.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13505 = null;
var G__13505__13506 = (function (rng,n){
var this__13461 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13461.start + (n * this__13461.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13464 = (this__13461.start > this__13461.end);

if(cljs.core.truth_(and__3546__auto____13464))
{return cljs.core._EQ_.call(null,this__13461.step,0);
} else
{return and__3546__auto____13464;
}
})()))
{return this__13461.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13505__13507 = (function (rng,n,not_found){
var this__13466 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13466.start + (n * this__13466.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13468 = (this__13466.start > this__13466.end);

if(cljs.core.truth_(and__3546__auto____13468))
{return cljs.core._EQ_.call(null,this__13466.step,0);
} else
{return and__3546__auto____13468;
}
})()))
{return this__13466.start;
} else
{return not_found;
}
}
});
G__13505 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13505__13506.call(this,rng,n);
case  3 :
return G__13505__13507.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13505;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13474 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13474.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13684 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13685 = (function (end){
return range.call(null,0,end,1);
});
var range__13686 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13687 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13684.call(this);
case  1 :
return range__13685.call(this,start);
case  2 :
return range__13686.call(this,start,end);
case  3 :
return range__13687.call(this,start,end,step);
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
var temp__3698__auto____13726 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13726))
{var s__13727 = temp__3698__auto____13726;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13727),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13727)));
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
var temp__3698__auto____13797 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13797))
{var s__13800 = temp__3698__auto____13797;

var fst__13802 = cljs.core.first.call(null,s__13800);
var fv__13803 = f.call(null,fst__13802);
var run__13805 = cljs.core.cons.call(null,fst__13802,cljs.core.take_while.call(null,(function (p1__13735_SHARP_){
return cljs.core._EQ_.call(null,fv__13803,f.call(null,p1__13735_SHARP_));
}),cljs.core.next.call(null,s__13800)));

return cljs.core.cons.call(null,run__13805,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13805),s__13800))));
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
var reductions__13867 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13859 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13859))
{var s__13861 = temp__3695__auto____13859;

return reductions.call(null,f,cljs.core.first.call(null,s__13861),cljs.core.rest.call(null,s__13861));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13868 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13865 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13865))
{var s__13866 = temp__3698__auto____13865;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13866)),cljs.core.rest.call(null,s__13866));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13867.call(this,f,init);
case  3 :
return reductions__13868.call(this,f,init,coll);
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
var juxt__13913 = (function (f){
return (function() {
var G__13919 = null;
var G__13919__13920 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13919__13921 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13919__13922 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13919__13923 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13919__13924 = (function() { 
var G__13938__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13938 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13938__delegate.call(this, x, y, z, args);
};
G__13938.cljs$lang$maxFixedArity = 3;
G__13938.cljs$lang$applyTo = (function (arglist__13939){
var x = cljs.core.first(arglist__13939);
var y = cljs.core.first(cljs.core.next(arglist__13939));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13939)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13939)));
return G__13938__delegate.call(this, x, y, z, args);
});
return G__13938;
})()
;
G__13919 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13919__13920.call(this);
case  1 :
return G__13919__13921.call(this,x);
case  2 :
return G__13919__13922.call(this,x,y);
case  3 :
return G__13919__13923.call(this,x,y,z);
default:
return G__13919__13924.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13919.cljs$lang$maxFixedArity = 3;
G__13919.cljs$lang$applyTo = G__13919__13924.cljs$lang$applyTo;
return G__13919;
})()
});
var juxt__13914 = (function (f,g){
return (function() {
var G__13941 = null;
var G__13941__13942 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13941__13943 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13941__13944 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13941__13945 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13941__13946 = (function() { 
var G__13971__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13971 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13971__delegate.call(this, x, y, z, args);
};
G__13971.cljs$lang$maxFixedArity = 3;
G__13971.cljs$lang$applyTo = (function (arglist__13972){
var x = cljs.core.first(arglist__13972);
var y = cljs.core.first(cljs.core.next(arglist__13972));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13972)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13972)));
return G__13971__delegate.call(this, x, y, z, args);
});
return G__13971;
})()
;
G__13941 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13941__13942.call(this);
case  1 :
return G__13941__13943.call(this,x);
case  2 :
return G__13941__13944.call(this,x,y);
case  3 :
return G__13941__13945.call(this,x,y,z);
default:
return G__13941__13946.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13941.cljs$lang$maxFixedArity = 3;
G__13941.cljs$lang$applyTo = G__13941__13946.cljs$lang$applyTo;
return G__13941;
})()
});
var juxt__13915 = (function (f,g,h){
return (function() {
var G__13976 = null;
var G__13976__13977 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13976__13978 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13976__13979 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13976__13980 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13976__13981 = (function() { 
var G__13999__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13999 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13999__delegate.call(this, x, y, z, args);
};
G__13999.cljs$lang$maxFixedArity = 3;
G__13999.cljs$lang$applyTo = (function (arglist__14002){
var x = cljs.core.first(arglist__14002);
var y = cljs.core.first(cljs.core.next(arglist__14002));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14002)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14002)));
return G__13999__delegate.call(this, x, y, z, args);
});
return G__13999;
})()
;
G__13976 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13976__13977.call(this);
case  1 :
return G__13976__13978.call(this,x);
case  2 :
return G__13976__13979.call(this,x,y);
case  3 :
return G__13976__13980.call(this,x,y,z);
default:
return G__13976__13981.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13976.cljs$lang$maxFixedArity = 3;
G__13976.cljs$lang$applyTo = G__13976__13981.cljs$lang$applyTo;
return G__13976;
})()
});
var juxt__13916 = (function() { 
var G__14010__delegate = function (f,g,h,fs){
var fs__13892 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14011 = null;
var G__14011__14012 = (function (){
return cljs.core.reduce.call(null,(function (p1__13841_SHARP_,p2__13842_SHARP_){
return cljs.core.conj.call(null,p1__13841_SHARP_,p2__13842_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13892);
});
var G__14011__14013 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13844_SHARP_,p2__13845_SHARP_){
return cljs.core.conj.call(null,p1__13844_SHARP_,p2__13845_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13892);
});
var G__14011__14014 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13846_SHARP_,p2__13847_SHARP_){
return cljs.core.conj.call(null,p1__13846_SHARP_,p2__13847_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13892);
});
var G__14011__14015 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13848_SHARP_,p2__13849_SHARP_){
return cljs.core.conj.call(null,p1__13848_SHARP_,p2__13849_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13892);
});
var G__14011__14016 = (function() { 
var G__14027__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13853_SHARP_,p2__13855_SHARP_){
return cljs.core.conj.call(null,p1__13853_SHARP_,cljs.core.apply.call(null,p2__13855_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13892);
};
var G__14027 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14027__delegate.call(this, x, y, z, args);
};
G__14027.cljs$lang$maxFixedArity = 3;
G__14027.cljs$lang$applyTo = (function (arglist__14035){
var x = cljs.core.first(arglist__14035);
var y = cljs.core.first(cljs.core.next(arglist__14035));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14035)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14035)));
return G__14027__delegate.call(this, x, y, z, args);
});
return G__14027;
})()
;
G__14011 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14011__14012.call(this);
case  1 :
return G__14011__14013.call(this,x);
case  2 :
return G__14011__14014.call(this,x,y);
case  3 :
return G__14011__14015.call(this,x,y,z);
default:
return G__14011__14016.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14011.cljs$lang$maxFixedArity = 3;
G__14011.cljs$lang$applyTo = G__14011__14016.cljs$lang$applyTo;
return G__14011;
})()
};
var G__14010 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14010__delegate.call(this, f, g, h, fs);
};
G__14010.cljs$lang$maxFixedArity = 3;
G__14010.cljs$lang$applyTo = (function (arglist__14039){
var f = cljs.core.first(arglist__14039);
var g = cljs.core.first(cljs.core.next(arglist__14039));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14039)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14039)));
return G__14010__delegate.call(this, f, g, h, fs);
});
return G__14010;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13913.call(this,f);
case  2 :
return juxt__13914.call(this,f,g);
case  3 :
return juxt__13915.call(this,f,g,h);
default:
return juxt__13916.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13916.cljs$lang$applyTo;
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
var dorun__14064 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14067 = cljs.core.next.call(null,coll);
coll = G__14067;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14065 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14053 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14053))
{return (n > 0);
} else
{return and__3546__auto____14053;
}
})()))
{{
var G__14070 = (n - 1);
var G__14071 = cljs.core.next.call(null,coll);
n = G__14070;
coll = G__14071;
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
return dorun__14064.call(this,n);
case  2 :
return dorun__14065.call(this,n,coll);
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
var doall__14081 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14082 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14081.call(this,n);
case  2 :
return doall__14082.call(this,n,coll);
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
var matches__14090 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14090),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14090),1)))
{return cljs.core.first.call(null,matches__14090);
} else
{return cljs.core.vec.call(null,matches__14090);
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
var matches__14104 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14104)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14104),1)))
{return cljs.core.first.call(null,matches__14104);
} else
{return cljs.core.vec.call(null,matches__14104);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14121 = cljs.core.re_find.call(null,re,s);
var match_idx__14123 = s.search(re);
var match_str__14126 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14121))?cljs.core.first.call(null,match_data__14121):match_data__14121);
var post_match__14134 = cljs.core.subs.call(null,s,(match_idx__14123 + cljs.core.count.call(null,match_str__14126)));

if(cljs.core.truth_(match_data__14121))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14121,re_seq.call(null,re,post_match__14134));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14149_SHARP_){
return print_one.call(null,p1__14149_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14224 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14224))
{var and__3546__auto____14232 = (function (){var x__445__auto____14226 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14228 = x__445__auto____14226;

if(cljs.core.truth_(and__3546__auto____14228))
{var and__3546__auto____14229 = x__445__auto____14226.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14229))
{return cljs.core.not.call(null,x__445__auto____14226.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14229;
}
} else
{return and__3546__auto____14228;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14226);
}
})();

if(cljs.core.truth_(and__3546__auto____14232))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14232;
}
} else
{return and__3546__auto____14224;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14239 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14241 = x__445__auto____14239;

if(cljs.core.truth_(and__3546__auto____14241))
{var and__3546__auto____14243 = x__445__auto____14239.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14243))
{return cljs.core.not.call(null,x__445__auto____14239.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14243;
}
} else
{return and__3546__auto____14241;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14239);
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
var first_obj__14263 = cljs.core.first.call(null,objs);
var sb__14264 = (new goog.string.StringBuffer());

var G__14265__14268 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14265__14268))
{var obj__14269 = cljs.core.first.call(null,G__14265__14268);
var G__14265__14270 = G__14265__14268;

while(true){
if(cljs.core.truth_((obj__14269 === first_obj__14263)))
{} else
{sb__14264.append(" ");
}
var G__14271__14272 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14269,opts));

if(cljs.core.truth_(G__14271__14272))
{var string__14273 = cljs.core.first.call(null,G__14271__14272);
var G__14271__14274 = G__14271__14272;

while(true){
sb__14264.append(string__14273);
var temp__3698__auto____14275 = cljs.core.next.call(null,G__14271__14274);

if(cljs.core.truth_(temp__3698__auto____14275))
{var G__14271__14276 = temp__3698__auto____14275;

{
var G__14321 = cljs.core.first.call(null,G__14271__14276);
var G__14322 = G__14271__14276;
string__14273 = G__14321;
G__14271__14274 = G__14322;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14309 = cljs.core.next.call(null,G__14265__14270);

if(cljs.core.truth_(temp__3698__auto____14309))
{var G__14265__14310 = temp__3698__auto____14309;

{
var G__14326 = cljs.core.first.call(null,G__14265__14310);
var G__14327 = G__14265__14310;
obj__14269 = G__14326;
G__14265__14270 = G__14327;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14264);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14335 = cljs.core.first.call(null,objs);

var G__14336__14338 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14336__14338))
{var obj__14341 = cljs.core.first.call(null,G__14336__14338);
var G__14336__14342 = G__14336__14338;

while(true){
if(cljs.core.truth_((obj__14341 === first_obj__14335)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14345__14347 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14341,opts));

if(cljs.core.truth_(G__14345__14347))
{var string__14348 = cljs.core.first.call(null,G__14345__14347);
var G__14345__14349 = G__14345__14347;

while(true){
cljs.core.string_print.call(null,string__14348);
var temp__3698__auto____14351 = cljs.core.next.call(null,G__14345__14349);

if(cljs.core.truth_(temp__3698__auto____14351))
{var G__14345__14352 = temp__3698__auto____14351;

{
var G__14362 = cljs.core.first.call(null,G__14345__14352);
var G__14363 = G__14345__14352;
string__14348 = G__14362;
G__14345__14349 = G__14363;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14355 = cljs.core.next.call(null,G__14336__14342);

if(cljs.core.truth_(temp__3698__auto____14355))
{var G__14336__14357 = temp__3698__auto____14355;

{
var G__14364 = cljs.core.first.call(null,G__14336__14357);
var G__14365 = G__14336__14357;
obj__14341 = G__14364;
G__14336__14342 = G__14365;
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
pr_str.cljs$lang$applyTo = (function (arglist__14383){
var objs = cljs.core.seq( arglist__14383 );;
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
pr.cljs$lang$applyTo = (function (arglist__14429){
var objs = cljs.core.seq( arglist__14429 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14434){
var objs = cljs.core.seq( arglist__14434 );;
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
println.cljs$lang$applyTo = (function (arglist__14438){
var objs = cljs.core.seq( arglist__14438 );;
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
prn.cljs$lang$applyTo = (function (arglist__14445){
var objs = cljs.core.seq( arglist__14445 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14447 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14447,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14452 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14452))
{var nspc__14454 = temp__3698__auto____14452;

return cljs.core.str.call(null,nspc__14454,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14462 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14462))
{var nspc__14465 = temp__3698__auto____14462;

return cljs.core.str.call(null,nspc__14465,"/");
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
var pr_pair__14475 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14475,"{",", ","}",opts,coll);
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
var this__14641 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14642 = this;
var G__14643__14644 = cljs.core.seq.call(null,this__14642.watches);

if(cljs.core.truth_(G__14643__14644))
{var G__14646__14651 = cljs.core.first.call(null,G__14643__14644);
var vec__14649__14652 = G__14646__14651;
var key__14653 = cljs.core.nth.call(null,vec__14649__14652,0,null);
var f__14654 = cljs.core.nth.call(null,vec__14649__14652,1,null);
var G__14643__14655 = G__14643__14644;

var G__14646__14656 = G__14646__14651;
var G__14643__14657 = G__14643__14655;

while(true){
var vec__14661__14662 = G__14646__14656;
var key__14663 = cljs.core.nth.call(null,vec__14661__14662,0,null);
var f__14664 = cljs.core.nth.call(null,vec__14661__14662,1,null);
var G__14643__14665 = G__14643__14657;

f__14664.call(null,key__14663,this$,oldval,newval);
var temp__3698__auto____14666 = cljs.core.next.call(null,G__14643__14665);

if(cljs.core.truth_(temp__3698__auto____14666))
{var G__14643__14668 = temp__3698__auto____14666;

{
var G__14681 = cljs.core.first.call(null,G__14643__14668);
var G__14682 = G__14643__14668;
G__14646__14656 = G__14681;
G__14643__14657 = G__14682;
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
var this__14671 = this;
return this$.watches = cljs.core.assoc.call(null,this__14671.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14673 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14673.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14674 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14674.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14675 = this;
return this__14675.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14676 = this;
return this__14676.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14677 = this;
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
var atom__14730 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14731 = (function() { 
var G__14733__delegate = function (x,p__14687){
var map__14689__14691 = p__14687;
var map__14689__14721 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14689__14691))?cljs.core.apply.call(null,cljs.core.hash_map,map__14689__14691):map__14689__14691);
var validator__14722 = cljs.core.get.call(null,map__14689__14721,"﷐'validator");
var meta__14723 = cljs.core.get.call(null,map__14689__14721,"﷐'meta");

return (new cljs.core.Atom(x,meta__14723,validator__14722,null));
};
var G__14733 = function (x,var_args){
var p__14687 = null;
if (goog.isDef(var_args)) {
  p__14687 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14733__delegate.call(this, x, p__14687);
};
G__14733.cljs$lang$maxFixedArity = 1;
G__14733.cljs$lang$applyTo = (function (arglist__14736){
var x = cljs.core.first(arglist__14736);
var p__14687 = cljs.core.rest(arglist__14736);
return G__14733__delegate.call(this, x, p__14687);
});
return G__14733;
})()
;
atom = function(x,var_args){
var p__14687 = var_args;
switch(arguments.length){
case  1 :
return atom__14730.call(this,x);
default:
return atom__14731.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14731.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14737 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14737))
{var validate__14738 = temp__3698__auto____14737;

if(cljs.core.truth_(validate__14738.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14741 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14741,new_value);
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
var swap_BANG___14749 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14750 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14751 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14752 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14753 = (function() { 
var G__14761__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14761 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14761__delegate.call(this, a, f, x, y, z, more);
};
G__14761.cljs$lang$maxFixedArity = 5;
G__14761.cljs$lang$applyTo = (function (arglist__14762){
var a = cljs.core.first(arglist__14762);
var f = cljs.core.first(cljs.core.next(arglist__14762));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14762)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14762))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14762)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14762)))));
return G__14761__delegate.call(this, a, f, x, y, z, more);
});
return G__14761;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14749.call(this,a,f);
case  3 :
return swap_BANG___14750.call(this,a,f,x);
case  4 :
return swap_BANG___14751.call(this,a,f,x,y);
case  5 :
return swap_BANG___14752.call(this,a,f,x,y,z);
default:
return swap_BANG___14753.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14753.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14824){
var iref = cljs.core.first(arglist__14824);
var f = cljs.core.first(cljs.core.next(arglist__14824));
var args = cljs.core.rest(cljs.core.next(arglist__14824));
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
var gensym__14865 = (function (){
return gensym.call(null,"G__");
});
var gensym__14866 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14865.call(this);
case  1 :
return gensym__14866.call(this,prefix_string);
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
var this__14878 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14878.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14879 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14879.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14879.state,this__14879.f);
}
return cljs.core.deref.call(null,this__14879.state);
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
delay.cljs$lang$applyTo = (function (arglist__14893){
var body = cljs.core.seq( arglist__14893 );;
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
var map__14907__14908 = options;
var map__14907__14909 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14907__14908))?cljs.core.apply.call(null,cljs.core.hash_map,map__14907__14908):map__14907__14908);
var keywordize_keys__14911 = cljs.core.get.call(null,map__14907__14909,"﷐'keywordize-keys");
var keyfn__14912 = (cljs.core.truth_(keywordize_keys__14911)?cljs.core.keyword:cljs.core.str);
var f__14924 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14920 = (function iter__14916(s__14917){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14917__14918 = s__14917;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14917__14918)))
{var k__14919 = cljs.core.first.call(null,s__14917__14918);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14912.call(null,k__14919),thisfn.call(null,(x[k__14919]))]),iter__14916.call(null,cljs.core.rest.call(null,s__14917__14918)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14920.call(null,cljs.core.js_keys.call(null,x));
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

return f__14924.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14980){
var x = cljs.core.first(arglist__14980);
var options = cljs.core.rest(arglist__14980);
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
var mem__14983 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14990__delegate = function (args){
var temp__3695__auto____14984 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14983),args);

if(cljs.core.truth_(temp__3695__auto____14984))
{var v__14985 = temp__3695__auto____14984;

return v__14985;
} else
{var ret__14986 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14983,cljs.core.assoc,args,ret__14986);
return ret__14986;
}
};
var G__14990 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14990__delegate.call(this, args);
};
G__14990.cljs$lang$maxFixedArity = 0;
G__14990.cljs$lang$applyTo = (function (arglist__14991){
var args = cljs.core.seq( arglist__14991 );;
return G__14990__delegate.call(this, args);
});
return G__14990;
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
var ret__14992 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14992)))
{{
var G__15105 = ret__14992;
f = G__15105;
continue;
}
} else
{return ret__14992;
}
break;
}
});
var trampoline__15102 = (function() { 
var G__15106__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15106 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15106__delegate.call(this, f, args);
};
G__15106.cljs$lang$maxFixedArity = 1;
G__15106.cljs$lang$applyTo = (function (arglist__15107){
var f = cljs.core.first(arglist__15107);
var args = cljs.core.rest(arglist__15107);
return G__15106__delegate.call(this, f, args);
});
return G__15106;
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
var k__15123 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15123,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15123,cljs.core.Vector.fromArray([])),x));
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
var or__3548__auto____15134 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15134))
{return or__3548__auto____15134;
} else
{var or__3548__auto____15135 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15135))
{return or__3548__auto____15135;
} else
{var and__3546__auto____15136 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15136))
{var and__3546__auto____15137 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15137))
{var and__3546__auto____15138 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15138))
{var ret__15139 = true;
var i__15140 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15142 = cljs.core.not.call(null,ret__15139);

if(cljs.core.truth_(or__3548__auto____15142))
{return or__3548__auto____15142;
} else
{return cljs.core._EQ_.call(null,i__15140,cljs.core.count.call(null,parent));
}
})()))
{return ret__15139;
} else
{{
var G__15151 = isa_QMARK_.call(null,h,child.call(null,i__15140),parent.call(null,i__15140));
var G__15152 = (i__15140 + 1);
ret__15139 = G__15151;
i__15140 = G__15152;
continue;
}
}
break;
}
} else
{return and__3546__auto____15138;
}
} else
{return and__3546__auto____15137;
}
} else
{return and__3546__auto____15136;
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
var parents__15158 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15159 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15158.call(this,h);
case  2 :
return parents__15159.call(this,h,tag);
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
var ancestors__15211 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15212 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15211.call(this,h);
case  2 :
return ancestors__15212.call(this,h,tag);
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
var descendants__15216 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15217 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15216.call(this,h);
case  2 :
return descendants__15217.call(this,h,tag);
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
var derive__15233 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15234 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15224 = "﷐'parents".call(null,h);
var td__15225 = "﷐'descendants".call(null,h);
var ta__15226 = "﷐'ancestors".call(null,h);
var tf__15227 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15231 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15224.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15226.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15226.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15224,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15227.call(null,"﷐'ancestors".call(null,h),tag,td__15225,parent,ta__15226),"﷐'descendants":tf__15227.call(null,"﷐'descendants".call(null,h),parent,ta__15226,tag,td__15225)});
})());

if(cljs.core.truth_(or__3548__auto____15231))
{return or__3548__auto____15231;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15233.call(this,h,tag);
case  3 :
return derive__15234.call(this,h,tag,parent);
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
var underive__15274 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15275 = (function (h,tag,parent){
var parentMap__15266 = "﷐'parents".call(null,h);
var childsParents__15268 = (cljs.core.truth_(parentMap__15266.call(null,tag))?cljs.core.disj.call(null,parentMap__15266.call(null,tag),parent):cljs.core.set([]));
var newParents__15269 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15268))?cljs.core.assoc.call(null,parentMap__15266,tag,childsParents__15268):cljs.core.dissoc.call(null,parentMap__15266,tag));
var deriv_seq__15271 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15219_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15219_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15219_SHARP_),cljs.core.second.call(null,p1__15219_SHARP_)));
}),cljs.core.seq.call(null,newParents__15269)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15266.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15220_SHARP_,p2__15221_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15220_SHARP_,p2__15221_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15271));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15274.call(this,h,tag);
case  3 :
return underive__15275.call(this,h,tag,parent);
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
var xprefs__15297 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15300 = (cljs.core.truth_((function (){var and__3546__auto____15298 = xprefs__15297;

if(cljs.core.truth_(and__3546__auto____15298))
{return xprefs__15297.call(null,y);
} else
{return and__3546__auto____15298;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15300))
{return or__3548__auto____15300;
} else
{var or__3548__auto____15304 = (function (){var ps__15301 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15301) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15301),prefer_table)))
{} else
{}
{
var G__15307 = cljs.core.rest.call(null,ps__15301);
ps__15301 = G__15307;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15304))
{return or__3548__auto____15304;
} else
{var or__3548__auto____15306 = (function (){var ps__15305 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15305) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15305),y,prefer_table)))
{} else
{}
{
var G__15309 = cljs.core.rest.call(null,ps__15305);
ps__15305 = G__15309;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15306))
{return or__3548__auto____15306;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15314 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15314))
{return or__3548__auto____15314;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15347 = cljs.core.reduce.call(null,(function (be,p__15317){
var vec__15319__15320 = p__15317;
var k__15321 = cljs.core.nth.call(null,vec__15319__15320,0,null);
var ___15323 = cljs.core.nth.call(null,vec__15319__15320,1,null);
var e__15324 = vec__15319__15320;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15321)))
{var be2__15326 = (cljs.core.truth_((function (){var or__3548__auto____15325 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15325))
{return or__3548__auto____15325;
} else
{return cljs.core.dominates.call(null,k__15321,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15324:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15326),k__15321,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15321," and ",cljs.core.first.call(null,be2__15326),", and neither is preferred")));
}
return be2__15326;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15347))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15347));
return cljs.core.second.call(null,best_entry__15347);
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
if(cljs.core.truth_((function (){var and__3546__auto____15365 = mf;

if(cljs.core.truth_(and__3546__auto____15365))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15365;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15369 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15369))
{return or__3548__auto____15369;
} else
{var or__3548__auto____15371 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15371))
{return or__3548__auto____15371;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15373 = mf;

if(cljs.core.truth_(and__3546__auto____15373))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15373;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15374 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15374))
{return or__3548__auto____15374;
} else
{var or__3548__auto____15376 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15376))
{return or__3548__auto____15376;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15377 = mf;

if(cljs.core.truth_(and__3546__auto____15377))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15377;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15380 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15380))
{return or__3548__auto____15380;
} else
{var or__3548__auto____15381 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15381))
{return or__3548__auto____15381;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15382 = mf;

if(cljs.core.truth_(and__3546__auto____15382))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15382;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15383 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15383))
{return or__3548__auto____15383;
} else
{var or__3548__auto____15384 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15384))
{return or__3548__auto____15384;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15386 = mf;

if(cljs.core.truth_(and__3546__auto____15386))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15386;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15388 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15388))
{return or__3548__auto____15388;
} else
{var or__3548__auto____15389 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15389))
{return or__3548__auto____15389;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15394 = mf;

if(cljs.core.truth_(and__3546__auto____15394))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15394;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15398 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15398))
{return or__3548__auto____15398;
} else
{var or__3548__auto____15401 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15401))
{return or__3548__auto____15401;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15404 = mf;

if(cljs.core.truth_(and__3546__auto____15404))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15404;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15407 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15407))
{return or__3548__auto____15407;
} else
{var or__3548__auto____15409 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15409))
{return or__3548__auto____15409;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15416 = mf;

if(cljs.core.truth_(and__3546__auto____15416))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15416;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15418 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15418))
{return or__3548__auto____15418;
} else
{var or__3548__auto____15419 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15419))
{return or__3548__auto____15419;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15456 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15457 = cljs.core._get_method.call(null,mf,dispatch_val__15456);

if(cljs.core.truth_(target_fn__15457))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15456)));
}
return cljs.core.apply.call(null,target_fn__15457,args);
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
var this__15464 = this;
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
var this__15475 = this;
cljs.core.swap_BANG_.call(null,this__15475.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15475.method_cache,this__15475.method_table,this__15475.cached_hierarchy,this__15475.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15477 = this;
cljs.core.swap_BANG_.call(null,this__15477.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15477.method_cache,this__15477.method_table,this__15477.cached_hierarchy,this__15477.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15478 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15478.cached_hierarchy),cljs.core.deref.call(null,this__15478.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15478.method_cache,this__15478.method_table,this__15478.cached_hierarchy,this__15478.hierarchy);
}
var temp__3695__auto____15479 = cljs.core.deref.call(null,this__15478.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15479))
{var target_fn__15480 = temp__3695__auto____15479;

return target_fn__15480;
} else
{var temp__3695__auto____15482 = cljs.core.find_and_cache_best_method.call(null,this__15478.name,dispatch_val,this__15478.hierarchy,this__15478.method_table,this__15478.prefer_table,this__15478.method_cache,this__15478.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15482))
{var target_fn__15483 = temp__3695__auto____15482;

return target_fn__15483;
} else
{return cljs.core.deref.call(null,this__15478.method_table).call(null,this__15478.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15486 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15486.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15486.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15486.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15486.method_cache,this__15486.method_table,this__15486.cached_hierarchy,this__15486.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15487 = this;
return cljs.core.deref.call(null,this__15487.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15488 = this;
return cljs.core.deref.call(null,this__15488.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15490 = this;
return cljs.core.do_dispatch.call(null,mf,this__15490.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15531__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15531 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15531__delegate.call(this, _, args);
};
G__15531.cljs$lang$maxFixedArity = 1;
G__15531.cljs$lang$applyTo = (function (arglist__15532){
var _ = cljs.core.first(arglist__15532);
var args = cljs.core.rest(arglist__15532);
return G__15531__delegate.call(this, _, args);
});
return G__15531;
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
