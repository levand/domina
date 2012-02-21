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
var _invoke__7695 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7374 = this$;

if(cljs.core.truth_(and__3546__auto____7374))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7374;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7376 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7376))
{return or__3548__auto____7376;
} else
{var or__3548__auto____7378 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7378))
{return or__3548__auto____7378;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7696 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7380 = this$;

if(cljs.core.truth_(and__3546__auto____7380))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7380;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7383 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7383))
{return or__3548__auto____7383;
} else
{var or__3548__auto____7386 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7386))
{return or__3548__auto____7386;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7697 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7390 = this$;

if(cljs.core.truth_(and__3546__auto____7390))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7390;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7395 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7395))
{return or__3548__auto____7395;
} else
{var or__3548__auto____7397 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7397))
{return or__3548__auto____7397;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7698 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7403 = this$;

if(cljs.core.truth_(and__3546__auto____7403))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7403;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7408 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7408))
{return or__3548__auto____7408;
} else
{var or__3548__auto____7411 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7411))
{return or__3548__auto____7411;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7699 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7415 = this$;

if(cljs.core.truth_(and__3546__auto____7415))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7415;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7420 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7420))
{return or__3548__auto____7420;
} else
{var or__3548__auto____7423 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7423))
{return or__3548__auto____7423;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7700 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7427 = this$;

if(cljs.core.truth_(and__3546__auto____7427))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7427;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7432 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7432))
{return or__3548__auto____7432;
} else
{var or__3548__auto____7439 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7439))
{return or__3548__auto____7439;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7701 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7444 = this$;

if(cljs.core.truth_(and__3546__auto____7444))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7444;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7448 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7448))
{return or__3548__auto____7448;
} else
{var or__3548__auto____7451 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7451))
{return or__3548__auto____7451;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7702 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7456 = this$;

if(cljs.core.truth_(and__3546__auto____7456))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7456;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7460 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7460))
{return or__3548__auto____7460;
} else
{var or__3548__auto____7462 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7462))
{return or__3548__auto____7462;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7703 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7468 = this$;

if(cljs.core.truth_(and__3546__auto____7468))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7468;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7472 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7472))
{return or__3548__auto____7472;
} else
{var or__3548__auto____7474 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7474))
{return or__3548__auto____7474;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7704 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7479 = this$;

if(cljs.core.truth_(and__3546__auto____7479))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7479;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7503 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7503))
{return or__3548__auto____7503;
} else
{var or__3548__auto____7506 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7506))
{return or__3548__auto____7506;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7705 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7511 = this$;

if(cljs.core.truth_(and__3546__auto____7511))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7511;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7515 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7515))
{return or__3548__auto____7515;
} else
{var or__3548__auto____7517 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7517))
{return or__3548__auto____7517;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7706 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7522 = this$;

if(cljs.core.truth_(and__3546__auto____7522))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7522;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7527 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7527))
{return or__3548__auto____7527;
} else
{var or__3548__auto____7529 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7529))
{return or__3548__auto____7529;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7707 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7534 = this$;

if(cljs.core.truth_(and__3546__auto____7534))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7534;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7537 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7537))
{return or__3548__auto____7537;
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
var _invoke__7708 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7551 = this$;

if(cljs.core.truth_(and__3546__auto____7551))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7551;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7709 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7573 = this$;

if(cljs.core.truth_(and__3546__auto____7573))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7573;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7576 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7576))
{return or__3548__auto____7576;
} else
{var or__3548__auto____7577 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7577))
{return or__3548__auto____7577;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7710 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7582 = this$;

if(cljs.core.truth_(and__3546__auto____7582))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7582;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7586 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7586))
{return or__3548__auto____7586;
} else
{var or__3548__auto____7587 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7587))
{return or__3548__auto____7587;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7711 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7594 = this$;

if(cljs.core.truth_(and__3546__auto____7594))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7594;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7712 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7606 = this$;

if(cljs.core.truth_(and__3546__auto____7606))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7606;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7609 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7609))
{return or__3548__auto____7609;
} else
{var or__3548__auto____7611 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7611))
{return or__3548__auto____7611;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7714 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7627 = this$;

if(cljs.core.truth_(and__3546__auto____7627))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7627;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7630 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7630))
{return or__3548__auto____7630;
} else
{var or__3548__auto____7632 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7632))
{return or__3548__auto____7632;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7716 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7637 = this$;

if(cljs.core.truth_(and__3546__auto____7637))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7637;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7718 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7689 = this$;

if(cljs.core.truth_(and__3546__auto____7689))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7689;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7691 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7691))
{return or__3548__auto____7691;
} else
{var or__3548__auto____7692 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7692))
{return or__3548__auto____7692;
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
return _invoke__7695.call(this,this$);
case  2 :
return _invoke__7696.call(this,this$,a);
case  3 :
return _invoke__7697.call(this,this$,a,b);
case  4 :
return _invoke__7698.call(this,this$,a,b,c);
case  5 :
return _invoke__7699.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7700.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7701.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7702.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7703.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7704.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7705.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7706.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7707.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7708.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7709.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7710.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7711.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7712.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7714.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7716.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7718.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
{return (function (){var or__3548__auto____7849 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7849))
{return or__3548__auto____7849;
} else
{var or__3548__auto____7851 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7851))
{return or__3548__auto____7851;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7865 = coll;

if(cljs.core.truth_(and__3546__auto____7865))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7865;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7866 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7866))
{return or__3548__auto____7866;
} else
{var or__3548__auto____7867 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7867))
{return or__3548__auto____7867;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7874 = coll;

if(cljs.core.truth_(and__3546__auto____7874))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7874;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7877 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7877))
{return or__3548__auto____7877;
} else
{var or__3548__auto____7880 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7880))
{return or__3548__auto____7880;
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
var _nth__7899 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7883 = coll;

if(cljs.core.truth_(and__3546__auto____7883))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7883;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7884 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7884))
{return or__3548__auto____7884;
} else
{var or__3548__auto____7885 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7885))
{return or__3548__auto____7885;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7900 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7888 = coll;

if(cljs.core.truth_(and__3546__auto____7888))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7888;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7893 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7893))
{return or__3548__auto____7893;
} else
{var or__3548__auto____7894 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7894))
{return or__3548__auto____7894;
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
return _nth__7899.call(this,coll,n);
case  3 :
return _nth__7900.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7968 = coll;

if(cljs.core.truth_(and__3546__auto____7968))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7968;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7972 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7972))
{return or__3548__auto____7972;
} else
{var or__3548__auto____7973 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7973))
{return or__3548__auto____7973;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7976 = coll;

if(cljs.core.truth_(and__3546__auto____7976))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7976;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7977 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7977))
{return or__3548__auto____7977;
} else
{var or__3548__auto____7978 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7978))
{return or__3548__auto____7978;
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
var _lookup__7999 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7985 = o;

if(cljs.core.truth_(and__3546__auto____7985))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7985;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7987 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7987))
{return or__3548__auto____7987;
} else
{var or__3548__auto____7988 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7988))
{return or__3548__auto____7988;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__8000 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7991 = o;

if(cljs.core.truth_(and__3546__auto____7991))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7991;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7994 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7994))
{return or__3548__auto____7994;
} else
{var or__3548__auto____7995 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7995))
{return or__3548__auto____7995;
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
return _lookup__7999.call(this,o,k);
case  3 :
return _lookup__8000.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____8011 = coll;

if(cljs.core.truth_(and__3546__auto____8011))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____8011;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____8013 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8013))
{return or__3548__auto____8013;
} else
{var or__3548__auto____8015 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8015))
{return or__3548__auto____8015;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____8017 = coll;

if(cljs.core.truth_(and__3546__auto____8017))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____8017;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____8019 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
} else
{var or__3548__auto____8021 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____8021))
{return or__3548__auto____8021;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____8031 = coll;

if(cljs.core.truth_(and__3546__auto____8031))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____8031;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____8036 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8036))
{return or__3548__auto____8036;
} else
{var or__3548__auto____8039 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____8039))
{return or__3548__auto____8039;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____8045 = coll;

if(cljs.core.truth_(and__3546__auto____8045))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____8045;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____8049 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{var or__3548__auto____8054 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____8054))
{return or__3548__auto____8054;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8061 = coll;

if(cljs.core.truth_(and__3546__auto____8061))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____8061;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____8064 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8064))
{return or__3548__auto____8064;
} else
{var or__3548__auto____8066 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____8066))
{return or__3548__auto____8066;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8070 = coll;

if(cljs.core.truth_(and__3546__auto____8070))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____8070;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8073 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
} else
{var or__3548__auto____8074 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8074))
{return or__3548__auto____8074;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8089 = coll;

if(cljs.core.truth_(and__3546__auto____8089))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8089;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8093 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8093))
{return or__3548__auto____8093;
} else
{var or__3548__auto____8096 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8096))
{return or__3548__auto____8096;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8111 = o;

if(cljs.core.truth_(and__3546__auto____8111))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8111;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8112 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8112))
{return or__3548__auto____8112;
} else
{var or__3548__auto____8113 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8113))
{return or__3548__auto____8113;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8116 = o;

if(cljs.core.truth_(and__3546__auto____8116))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8116;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8120 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8120))
{return or__3548__auto____8120;
} else
{var or__3548__auto____8122 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8122))
{return or__3548__auto____8122;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8129 = o;

if(cljs.core.truth_(and__3546__auto____8129))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8129;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8131 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8131))
{return or__3548__auto____8131;
} else
{var or__3548__auto____8132 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8132))
{return or__3548__auto____8132;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8141 = o;

if(cljs.core.truth_(and__3546__auto____8141))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8141;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8144 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8144))
{return or__3548__auto____8144;
} else
{var or__3548__auto____8146 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8146))
{return or__3548__auto____8146;
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
var _reduce__8164 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8152 = coll;

if(cljs.core.truth_(and__3546__auto____8152))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8152;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8154 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8154))
{return or__3548__auto____8154;
} else
{var or__3548__auto____8156 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8156))
{return or__3548__auto____8156;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8165 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8158 = coll;

if(cljs.core.truth_(and__3546__auto____8158))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8158;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8160 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8160))
{return or__3548__auto____8160;
} else
{var or__3548__auto____8162 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8162))
{return or__3548__auto____8162;
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
return _reduce__8164.call(this,coll,f);
case  3 :
return _reduce__8165.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8170 = o;

if(cljs.core.truth_(and__3546__auto____8170))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8170;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8174 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8174))
{return or__3548__auto____8174;
} else
{var or__3548__auto____8176 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8176))
{return or__3548__auto____8176;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8181 = o;

if(cljs.core.truth_(and__3546__auto____8181))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8181;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8182 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8182))
{return or__3548__auto____8182;
} else
{var or__3548__auto____8185 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8185))
{return or__3548__auto____8185;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8190 = o;

if(cljs.core.truth_(and__3546__auto____8190))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8190;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8191 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8191))
{return or__3548__auto____8191;
} else
{var or__3548__auto____8193 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8193))
{return or__3548__auto____8193;
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
if(cljs.core.truth_((function (){var and__3546__auto____8217 = o;

if(cljs.core.truth_(and__3546__auto____8217))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8217;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8218 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8218))
{return or__3548__auto____8218;
} else
{var or__3548__auto____8219 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8219))
{return or__3548__auto____8219;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8221 = d;

if(cljs.core.truth_(and__3546__auto____8221))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8221;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8225 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8225))
{return or__3548__auto____8225;
} else
{var or__3548__auto____8226 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8226))
{return or__3548__auto____8226;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8231 = this$;

if(cljs.core.truth_(and__3546__auto____8231))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8231;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8232 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8232))
{return or__3548__auto____8232;
} else
{var or__3548__auto____8235 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8235))
{return or__3548__auto____8235;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8238 = this$;

if(cljs.core.truth_(and__3546__auto____8238))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8238;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8251 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8251))
{return or__3548__auto____8251;
} else
{var or__3548__auto____8254 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8254))
{return or__3548__auto____8254;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8257 = this$;

if(cljs.core.truth_(and__3546__auto____8257))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8257;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8260 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8260))
{return or__3548__auto____8260;
} else
{var or__3548__auto____8261 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8261))
{return or__3548__auto____8261;
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
var G__8372 = null;
var G__8372__8373 = (function (_,n){
return null;
});
var G__8372__8374 = (function (_,n,not_found){
return not_found;
});
G__8372 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8372__8373.call(this,_,n);
case  3 :
return G__8372__8374.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8372;
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
var ci_reduce__8509 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8495 = cljs.core._nth.call(null,cicoll,0);
var n__8496 = 1;

while(true){
if(cljs.core.truth_((n__8496 < cljs.core._count.call(null,cicoll))))
{{
var G__8515 = f.call(null,val__8495,cljs.core._nth.call(null,cicoll,n__8496));
var G__8516 = (n__8496 + 1);
val__8495 = G__8515;
n__8496 = G__8516;
continue;
}
} else
{return val__8495;
}
break;
}
}
});
var ci_reduce__8510 = (function (cicoll,f,val){
var val__8501 = val;
var n__8502 = 0;

while(true){
if(cljs.core.truth_((n__8502 < cljs.core._count.call(null,cicoll))))
{{
var G__8517 = f.call(null,val__8501,cljs.core._nth.call(null,cicoll,n__8502));
var G__8518 = (n__8502 + 1);
val__8501 = G__8517;
n__8502 = G__8518;
continue;
}
} else
{return val__8501;
}
break;
}
});
var ci_reduce__8511 = (function (cicoll,f,val,idx){
var val__8505 = val;
var n__8506 = idx;

while(true){
if(cljs.core.truth_((n__8506 < cljs.core._count.call(null,cicoll))))
{{
var G__8519 = f.call(null,val__8505,cljs.core._nth.call(null,cicoll,n__8506));
var G__8520 = (n__8506 + 1);
val__8505 = G__8519;
n__8506 = G__8520;
continue;
}
} else
{return val__8505;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8509.call(this,cicoll,f);
case  3 :
return ci_reduce__8510.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8511.call(this,cicoll,f,val,idx);
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
var this__8524 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8547 = null;
var G__8547__8548 = (function (_,f){
var this__8525 = this;
return cljs.core.ci_reduce.call(null,this__8525.a,f,(this__8525.a[this__8525.i]),(this__8525.i + 1));
});
var G__8547__8549 = (function (_,f,start){
var this__8528 = this;
return cljs.core.ci_reduce.call(null,this__8528.a,f,start,this__8528.i);
});
G__8547 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8547__8548.call(this,_,f);
case  3 :
return G__8547__8549.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8547;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8529 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8530 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8551 = null;
var G__8551__8552 = (function (coll,n){
var this__8531 = this;
var i__8532 = (n + this__8531.i);

if(cljs.core.truth_((i__8532 < this__8531.a.length)))
{return (this__8531.a[i__8532]);
} else
{return null;
}
});
var G__8551__8553 = (function (coll,n,not_found){
var this__8533 = this;
var i__8534 = (n + this__8533.i);

if(cljs.core.truth_((i__8534 < this__8533.a.length)))
{return (this__8533.a[i__8534]);
} else
{return not_found;
}
});
G__8551 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8551__8552.call(this,coll,n);
case  3 :
return G__8551__8553.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8551;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8535 = this;
return (this__8535.a.length - this__8535.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8539 = this;
return (this__8539.a[this__8539.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8541 = this;
if(cljs.core.truth_(((this__8541.i + 1) < this__8541.a.length)))
{return (new cljs.core.IndexedSeq(this__8541.a,(this__8541.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8546 = this;
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
var G__8571 = null;
var G__8571__8574 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8571__8581 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8571 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8571__8574.call(this,array,f);
case  3 :
return G__8571__8581.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8571;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8584 = null;
var G__8584__8586 = (function (array,k){
return (array[k]);
});
var G__8584__8587 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8584 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8584__8586.call(this,array,k);
case  3 :
return G__8584__8587.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8584;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8592 = null;
var G__8592__8593 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8592__8594 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8592 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8592__8593.call(this,array,n);
case  3 :
return G__8592__8594.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8592;
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
var temp__3698__auto____8617 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8617))
{var s__8618 = temp__3698__auto____8617;

return cljs.core._first.call(null,s__8618);
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
var G__8656 = cljs.core.next.call(null,s);
s = G__8656;
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
var s__8657 = cljs.core.seq.call(null,x);
var n__8658 = 0;

while(true){
if(cljs.core.truth_(s__8657))
{{
var G__8661 = cljs.core.next.call(null,s__8657);
var G__8662 = (n__8658 + 1);
s__8657 = G__8661;
n__8658 = G__8662;
continue;
}
} else
{return n__8658;
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
var conj__8669 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8670 = (function() { 
var G__8672__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8673 = conj.call(null,coll,x);
var G__8674 = cljs.core.first.call(null,xs);
var G__8675 = cljs.core.next.call(null,xs);
coll = G__8673;
x = G__8674;
xs = G__8675;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8672 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8672__delegate.call(this, coll, x, xs);
};
G__8672.cljs$lang$maxFixedArity = 2;
G__8672.cljs$lang$applyTo = (function (arglist__8676){
var coll = cljs.core.first(arglist__8676);
var x = cljs.core.first(cljs.core.next(arglist__8676));
var xs = cljs.core.rest(cljs.core.next(arglist__8676));
return G__8672__delegate.call(this, coll, x, xs);
});
return G__8672;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8669.call(this,coll,x);
default:
return conj__8670.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8670.cljs$lang$applyTo;
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
var nth__8688 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8689 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8688.call(this,coll,n);
case  3 :
return nth__8689.call(this,coll,n,not_found);
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
var get__8692 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8693 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8692.call(this,o,k);
case  3 :
return get__8693.call(this,o,k,not_found);
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
var assoc__8705 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8706 = (function() { 
var G__8710__delegate = function (coll,k,v,kvs){
while(true){
var ret__8700 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8715 = ret__8700;
var G__8716 = cljs.core.first.call(null,kvs);
var G__8717 = cljs.core.second.call(null,kvs);
var G__8718 = cljs.core.nnext.call(null,kvs);
coll = G__8715;
k = G__8716;
v = G__8717;
kvs = G__8718;
continue;
}
} else
{return ret__8700;
}
break;
}
};
var G__8710 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8710__delegate.call(this, coll, k, v, kvs);
};
G__8710.cljs$lang$maxFixedArity = 3;
G__8710.cljs$lang$applyTo = (function (arglist__8723){
var coll = cljs.core.first(arglist__8723);
var k = cljs.core.first(cljs.core.next(arglist__8723));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8723)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8723)));
return G__8710__delegate.call(this, coll, k, v, kvs);
});
return G__8710;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8705.call(this,coll,k,v);
default:
return assoc__8706.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8706.cljs$lang$applyTo;
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
var dissoc__8729 = (function (coll){
return coll;
});
var dissoc__8730 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8731 = (function() { 
var G__8734__delegate = function (coll,k,ks){
while(true){
var ret__8728 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8735 = ret__8728;
var G__8736 = cljs.core.first.call(null,ks);
var G__8737 = cljs.core.next.call(null,ks);
coll = G__8735;
k = G__8736;
ks = G__8737;
continue;
}
} else
{return ret__8728;
}
break;
}
};
var G__8734 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8734__delegate.call(this, coll, k, ks);
};
G__8734.cljs$lang$maxFixedArity = 2;
G__8734.cljs$lang$applyTo = (function (arglist__8740){
var coll = cljs.core.first(arglist__8740);
var k = cljs.core.first(cljs.core.next(arglist__8740));
var ks = cljs.core.rest(cljs.core.next(arglist__8740));
return G__8734__delegate.call(this, coll, k, ks);
});
return G__8734;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8729.call(this,coll);
case  2 :
return dissoc__8730.call(this,coll,k);
default:
return dissoc__8731.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8731.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8746 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8748 = x__445__auto____8746;

if(cljs.core.truth_(and__3546__auto____8748))
{var and__3546__auto____8753 = x__445__auto____8746.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8753))
{return cljs.core.not.call(null,x__445__auto____8746.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8753;
}
} else
{return and__3546__auto____8748;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8746);
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
var disj__8781 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8784 = (function() { 
var G__8788__delegate = function (coll,k,ks){
while(true){
var ret__8772 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8790 = ret__8772;
var G__8793 = cljs.core.first.call(null,ks);
var G__8795 = cljs.core.next.call(null,ks);
coll = G__8790;
k = G__8793;
ks = G__8795;
continue;
}
} else
{return ret__8772;
}
break;
}
};
var G__8788 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8788__delegate.call(this, coll, k, ks);
};
G__8788.cljs$lang$maxFixedArity = 2;
G__8788.cljs$lang$applyTo = (function (arglist__8801){
var coll = cljs.core.first(arglist__8801);
var k = cljs.core.first(cljs.core.next(arglist__8801));
var ks = cljs.core.rest(cljs.core.next(arglist__8801));
return G__8788__delegate.call(this, coll, k, ks);
});
return G__8788;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8779.call(this,coll);
case  2 :
return disj__8781.call(this,coll,k);
default:
return disj__8784.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8784.cljs$lang$applyTo;
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
{var x__445__auto____8812 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8814 = x__445__auto____8812;

if(cljs.core.truth_(and__3546__auto____8814))
{var and__3546__auto____8820 = x__445__auto____8812.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8820))
{return cljs.core.not.call(null,x__445__auto____8812.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8820;
}
} else
{return and__3546__auto____8814;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8812);
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
{var x__445__auto____8825 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8827 = x__445__auto____8825;

if(cljs.core.truth_(and__3546__auto____8827))
{var and__3546__auto____8828 = x__445__auto____8825.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8828))
{return cljs.core.not.call(null,x__445__auto____8825.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8828;
}
} else
{return and__3546__auto____8827;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8825);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8833 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8834 = x__445__auto____8833;

if(cljs.core.truth_(and__3546__auto____8834))
{var and__3546__auto____8836 = x__445__auto____8833.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8836))
{return cljs.core.not.call(null,x__445__auto____8833.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8836;
}
} else
{return and__3546__auto____8834;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8833);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8914 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8917 = x__445__auto____8914;

if(cljs.core.truth_(and__3546__auto____8917))
{var and__3546__auto____8919 = x__445__auto____8914.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8919))
{return cljs.core.not.call(null,x__445__auto____8914.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8919;
}
} else
{return and__3546__auto____8917;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8914);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8921 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8923 = x__445__auto____8921;

if(cljs.core.truth_(and__3546__auto____8923))
{var and__3546__auto____8926 = x__445__auto____8921.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8926))
{return cljs.core.not.call(null,x__445__auto____8921.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8926;
}
} else
{return and__3546__auto____8923;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8921);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8934 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8935 = x__445__auto____8934;

if(cljs.core.truth_(and__3546__auto____8935))
{var and__3546__auto____8938 = x__445__auto____8934.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8938))
{return cljs.core.not.call(null,x__445__auto____8934.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8938;
}
} else
{return and__3546__auto____8935;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8934);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8942 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8943 = x__445__auto____8942;

if(cljs.core.truth_(and__3546__auto____8943))
{var and__3546__auto____8944 = x__445__auto____8942.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8944))
{return cljs.core.not.call(null,x__445__auto____8942.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8944;
}
} else
{return and__3546__auto____8943;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8942);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8949 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8949.push(key);
}));
return keys__8949;
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
{var x__445__auto____8951 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8952 = x__445__auto____8951;

if(cljs.core.truth_(and__3546__auto____8952))
{var and__3546__auto____8957 = x__445__auto____8951.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8957))
{return cljs.core.not.call(null,x__445__auto____8951.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8957;
}
} else
{return and__3546__auto____8952;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8951);
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
var and__3546__auto____9065 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9065))
{return cljs.core.not.call(null,(function (){var or__3548__auto____9066 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____9066))
{return or__3548__auto____9066;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____9065;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____9071 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9071))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____9071;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____9075 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9075))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____9075;
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
var and__3546__auto____9086 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____9086))
{return (n == n.toFixed());
} else
{return and__3546__auto____9086;
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
if(cljs.core.truth_((function (){var and__3546__auto____9094 = coll;

if(cljs.core.truth_(and__3546__auto____9094))
{var and__3546__auto____9100 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9100))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9100;
}
} else
{return and__3546__auto____9094;
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
var distinct_QMARK___9164 = (function (x){
return true;
});
var distinct_QMARK___9165 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9166 = (function() { 
var G__9168__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9153 = cljs.core.set([y,x]);
var xs__9155 = more;

while(true){
var x__9160 = cljs.core.first.call(null,xs__9155);
var etc__9161 = cljs.core.next.call(null,xs__9155);

if(cljs.core.truth_(xs__9155))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9153,x__9160)))
{return false;
} else
{{
var G__9169 = cljs.core.conj.call(null,s__9153,x__9160);
var G__9170 = etc__9161;
s__9153 = G__9169;
xs__9155 = G__9170;
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
var G__9168 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9168__delegate.call(this, x, y, more);
};
G__9168.cljs$lang$maxFixedArity = 2;
G__9168.cljs$lang$applyTo = (function (arglist__9173){
var x = cljs.core.first(arglist__9173);
var y = cljs.core.first(cljs.core.next(arglist__9173));
var more = cljs.core.rest(cljs.core.next(arglist__9173));
return G__9168__delegate.call(this, x, y, more);
});
return G__9168;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9164.call(this,x);
case  2 :
return distinct_QMARK___9165.call(this,x,y);
default:
return distinct_QMARK___9166.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9166.cljs$lang$applyTo;
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
var r__9189 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9189)))
{return r__9189;
} else
{if(cljs.core.truth_(r__9189))
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
var sort__9195 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9196 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9193 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9193,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9193);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9195.call(this,comp);
case  2 :
return sort__9196.call(this,comp,coll);
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
var sort_by__9205 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9206 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9205.call(this,keyfn,comp);
case  3 :
return sort_by__9206.call(this,keyfn,comp,coll);
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
var reduce__9216 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9217 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9216.call(this,f,val);
case  3 :
return reduce__9217.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9224 = (function (f,coll){
var temp__3695__auto____9219 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9219))
{var s__9220 = temp__3695__auto____9219;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9220),cljs.core.next.call(null,s__9220));
} else
{return f.call(null);
}
});
var seq_reduce__9225 = (function (f,val,coll){
var val__9222 = val;
var coll__9223 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9223))
{{
var G__9227 = f.call(null,val__9222,cljs.core.first.call(null,coll__9223));
var G__9228 = cljs.core.next.call(null,coll__9223);
val__9222 = G__9227;
coll__9223 = G__9228;
continue;
}
} else
{return val__9222;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9224.call(this,f,val);
case  3 :
return seq_reduce__9225.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9230 = null;
var G__9230__9231 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9230__9232 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9230 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9230__9231.call(this,coll,f);
case  3 :
return G__9230__9232.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9230;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9252 = (function (){
return 0;
});
var _PLUS___9253 = (function (x){
return x;
});
var _PLUS___9254 = (function (x,y){
return (x + y);
});
var _PLUS___9255 = (function() { 
var G__9257__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9257 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9257__delegate.call(this, x, y, more);
};
G__9257.cljs$lang$maxFixedArity = 2;
G__9257.cljs$lang$applyTo = (function (arglist__9258){
var x = cljs.core.first(arglist__9258);
var y = cljs.core.first(cljs.core.next(arglist__9258));
var more = cljs.core.rest(cljs.core.next(arglist__9258));
return G__9257__delegate.call(this, x, y, more);
});
return G__9257;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9252.call(this);
case  1 :
return _PLUS___9253.call(this,x);
case  2 :
return _PLUS___9254.call(this,x,y);
default:
return _PLUS___9255.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9255.cljs$lang$applyTo;
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
var ___9260 = (function (x){
return (- x);
});
var ___9261 = (function (x,y){
return (x - y);
});
var ___9262 = (function() { 
var G__9264__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9264 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9264__delegate.call(this, x, y, more);
};
G__9264.cljs$lang$maxFixedArity = 2;
G__9264.cljs$lang$applyTo = (function (arglist__9265){
var x = cljs.core.first(arglist__9265);
var y = cljs.core.first(cljs.core.next(arglist__9265));
var more = cljs.core.rest(cljs.core.next(arglist__9265));
return G__9264__delegate.call(this, x, y, more);
});
return G__9264;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9260.call(this,x);
case  2 :
return ___9261.call(this,x,y);
default:
return ___9262.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9262.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9267 = (function (){
return 1;
});
var _STAR___9268 = (function (x){
return x;
});
var _STAR___9269 = (function (x,y){
return (x * y);
});
var _STAR___9270 = (function() { 
var G__9272__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9272 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9272__delegate.call(this, x, y, more);
};
G__9272.cljs$lang$maxFixedArity = 2;
G__9272.cljs$lang$applyTo = (function (arglist__9273){
var x = cljs.core.first(arglist__9273);
var y = cljs.core.first(cljs.core.next(arglist__9273));
var more = cljs.core.rest(cljs.core.next(arglist__9273));
return G__9272__delegate.call(this, x, y, more);
});
return G__9272;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9267.call(this);
case  1 :
return _STAR___9268.call(this,x);
case  2 :
return _STAR___9269.call(this,x,y);
default:
return _STAR___9270.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9270.cljs$lang$applyTo;
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
var _SLASH___9278 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9279 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9280 = (function() { 
var G__9282__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9282 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9282__delegate.call(this, x, y, more);
};
G__9282.cljs$lang$maxFixedArity = 2;
G__9282.cljs$lang$applyTo = (function (arglist__9283){
var x = cljs.core.first(arglist__9283);
var y = cljs.core.first(cljs.core.next(arglist__9283));
var more = cljs.core.rest(cljs.core.next(arglist__9283));
return G__9282__delegate.call(this, x, y, more);
});
return G__9282;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9278.call(this,x);
case  2 :
return _SLASH___9279.call(this,x,y);
default:
return _SLASH___9280.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9280.cljs$lang$applyTo;
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
var _LT___9287 = (function (x){
return true;
});
var _LT___9288 = (function (x,y){
return (x < y);
});
var _LT___9289 = (function() { 
var G__9294__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9295 = y;
var G__9296 = cljs.core.first.call(null,more);
var G__9297 = cljs.core.next.call(null,more);
x = G__9295;
y = G__9296;
more = G__9297;
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
var G__9294 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9294__delegate.call(this, x, y, more);
};
G__9294.cljs$lang$maxFixedArity = 2;
G__9294.cljs$lang$applyTo = (function (arglist__9298){
var x = cljs.core.first(arglist__9298);
var y = cljs.core.first(cljs.core.next(arglist__9298));
var more = cljs.core.rest(cljs.core.next(arglist__9298));
return G__9294__delegate.call(this, x, y, more);
});
return G__9294;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9287.call(this,x);
case  2 :
return _LT___9288.call(this,x,y);
default:
return _LT___9289.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9289.cljs$lang$applyTo;
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
var _LT__EQ___9308 = (function (x){
return true;
});
var _LT__EQ___9309 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9310 = (function() { 
var G__9312__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9313 = y;
var G__9314 = cljs.core.first.call(null,more);
var G__9315 = cljs.core.next.call(null,more);
x = G__9313;
y = G__9314;
more = G__9315;
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
var G__9312 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9312__delegate.call(this, x, y, more);
};
G__9312.cljs$lang$maxFixedArity = 2;
G__9312.cljs$lang$applyTo = (function (arglist__9316){
var x = cljs.core.first(arglist__9316);
var y = cljs.core.first(cljs.core.next(arglist__9316));
var more = cljs.core.rest(cljs.core.next(arglist__9316));
return G__9312__delegate.call(this, x, y, more);
});
return G__9312;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9308.call(this,x);
case  2 :
return _LT__EQ___9309.call(this,x,y);
default:
return _LT__EQ___9310.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9310.cljs$lang$applyTo;
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
var _GT___9321 = (function (x){
return true;
});
var _GT___9323 = (function (x,y){
return (x > y);
});
var _GT___9324 = (function() { 
var G__9441__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9443 = y;
var G__9444 = cljs.core.first.call(null,more);
var G__9445 = cljs.core.next.call(null,more);
x = G__9443;
y = G__9444;
more = G__9445;
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
var G__9441 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9441__delegate.call(this, x, y, more);
};
G__9441.cljs$lang$maxFixedArity = 2;
G__9441.cljs$lang$applyTo = (function (arglist__9446){
var x = cljs.core.first(arglist__9446);
var y = cljs.core.first(cljs.core.next(arglist__9446));
var more = cljs.core.rest(cljs.core.next(arglist__9446));
return G__9441__delegate.call(this, x, y, more);
});
return G__9441;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9321.call(this,x);
case  2 :
return _GT___9323.call(this,x,y);
default:
return _GT___9324.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9324.cljs$lang$applyTo;
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
var _GT__EQ___9452 = (function (x){
return true;
});
var _GT__EQ___9454 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9456 = (function() { 
var G__9459__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9460 = y;
var G__9461 = cljs.core.first.call(null,more);
var G__9463 = cljs.core.next.call(null,more);
x = G__9460;
y = G__9461;
more = G__9463;
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
var G__9459 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9459__delegate.call(this, x, y, more);
};
G__9459.cljs$lang$maxFixedArity = 2;
G__9459.cljs$lang$applyTo = (function (arglist__9464){
var x = cljs.core.first(arglist__9464);
var y = cljs.core.first(cljs.core.next(arglist__9464));
var more = cljs.core.rest(cljs.core.next(arglist__9464));
return G__9459__delegate.call(this, x, y, more);
});
return G__9459;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9452.call(this,x);
case  2 :
return _GT__EQ___9454.call(this,x,y);
default:
return _GT__EQ___9456.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9456.cljs$lang$applyTo;
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
var max__9473 = (function (x){
return x;
});
var max__9474 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9475 = (function() { 
var G__9477__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9477 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9477__delegate.call(this, x, y, more);
};
G__9477.cljs$lang$maxFixedArity = 2;
G__9477.cljs$lang$applyTo = (function (arglist__9479){
var x = cljs.core.first(arglist__9479);
var y = cljs.core.first(cljs.core.next(arglist__9479));
var more = cljs.core.rest(cljs.core.next(arglist__9479));
return G__9477__delegate.call(this, x, y, more);
});
return G__9477;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9473.call(this,x);
case  2 :
return max__9474.call(this,x,y);
default:
return max__9475.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9475.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9480 = (function (x){
return x;
});
var min__9481 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9483 = (function() { 
var G__9489__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9489 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9489__delegate.call(this, x, y, more);
};
G__9489.cljs$lang$maxFixedArity = 2;
G__9489.cljs$lang$applyTo = (function (arglist__9493){
var x = cljs.core.first(arglist__9493);
var y = cljs.core.first(cljs.core.next(arglist__9493));
var more = cljs.core.rest(cljs.core.next(arglist__9493));
return G__9489__delegate.call(this, x, y, more);
});
return G__9489;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9480.call(this,x);
case  2 :
return min__9481.call(this,x,y);
default:
return min__9483.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9483.cljs$lang$applyTo;
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
var rem__9508 = (n % d);

return cljs.core.fix.call(null,((n - rem__9508) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9546 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9546));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9550 = (function (){
return Math.random.call(null);
});
var rand__9551 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9550.call(this);
case  1 :
return rand__9551.call(this,n);
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
var _EQ__EQ___9594 = (function (x){
return true;
});
var _EQ__EQ___9595 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9596 = (function() { 
var G__9598__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9599 = y;
var G__9600 = cljs.core.first.call(null,more);
var G__9601 = cljs.core.next.call(null,more);
x = G__9599;
y = G__9600;
more = G__9601;
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
var G__9598 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9598__delegate.call(this, x, y, more);
};
G__9598.cljs$lang$maxFixedArity = 2;
G__9598.cljs$lang$applyTo = (function (arglist__9602){
var x = cljs.core.first(arglist__9602);
var y = cljs.core.first(cljs.core.next(arglist__9602));
var more = cljs.core.rest(cljs.core.next(arglist__9602));
return G__9598__delegate.call(this, x, y, more);
});
return G__9598;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9594.call(this,x);
case  2 :
return _EQ__EQ___9595.call(this,x,y);
default:
return _EQ__EQ___9596.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9596.cljs$lang$applyTo;
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
var n__9690 = n;
var xs__9691 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9692 = xs__9691;

if(cljs.core.truth_(and__3546__auto____9692))
{return (n__9690 > 0);
} else
{return and__3546__auto____9692;
}
})()))
{{
var G__9697 = (n__9690 - 1);
var G__9698 = cljs.core.next.call(null,xs__9691);
n__9690 = G__9697;
xs__9691 = G__9698;
continue;
}
} else
{return xs__9691;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9703 = null;
var G__9703__9704 = (function (coll,n){
var temp__3695__auto____9699 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9699))
{var xs__9700 = temp__3695__auto____9699;

return cljs.core.first.call(null,xs__9700);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9703__9705 = (function (coll,n,not_found){
var temp__3695__auto____9701 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9701))
{var xs__9702 = temp__3695__auto____9701;

return cljs.core.first.call(null,xs__9702);
} else
{return not_found;
}
});
G__9703 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9703__9704.call(this,coll,n);
case  3 :
return G__9703__9705.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9703;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9716 = (function (){
return "";
});
var str_STAR___9717 = (function (x){
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
var str_STAR___9718 = (function() { 
var G__9720__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9721 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9722 = cljs.core.next.call(null,more);
sb = G__9721;
more = G__9722;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9720 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9720__delegate.call(this, x, ys);
};
G__9720.cljs$lang$maxFixedArity = 1;
G__9720.cljs$lang$applyTo = (function (arglist__9723){
var x = cljs.core.first(arglist__9723);
var ys = cljs.core.rest(arglist__9723);
return G__9720__delegate.call(this, x, ys);
});
return G__9720;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9716.call(this);
case  1 :
return str_STAR___9717.call(this,x);
default:
return str_STAR___9718.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9718.cljs$lang$applyTo;
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
var str__9731 = (function (){
return "";
});
var str__9732 = (function (x){
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
var str__9733 = (function() { 
var G__9738__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9738 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9738__delegate.call(this, x, ys);
};
G__9738.cljs$lang$maxFixedArity = 1;
G__9738.cljs$lang$applyTo = (function (arglist__9739){
var x = cljs.core.first(arglist__9739);
var ys = cljs.core.rest(arglist__9739);
return G__9738__delegate.call(this, x, ys);
});
return G__9738;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9731.call(this);
case  1 :
return str__9732.call(this,x);
default:
return str__9733.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9733.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9742 = (function (s,start){
return s.substring(start);
});
var subs__9743 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9742.call(this,s,start);
case  3 :
return subs__9743.call(this,s,start,end);
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
var symbol__9745 = (function (name){
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
var symbol__9746 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9745.call(this,ns);
case  2 :
return symbol__9746.call(this,ns,name);
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
var keyword__9838 = (function (name){
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
var keyword__9840 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9838.call(this,ns);
case  2 :
return keyword__9840.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9844 = cljs.core.seq.call(null,x);
var ys__9845 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9844)))
{return cljs.core.nil_QMARK_.call(null,ys__9845);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9845)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9844),cljs.core.first.call(null,ys__9845))))
{{
var G__9860 = cljs.core.next.call(null,xs__9844);
var G__9861 = cljs.core.next.call(null,ys__9845);
xs__9844 = G__9860;
ys__9845 = G__9861;
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
return cljs.core.reduce.call(null,(function (p1__9862_SHARP_,p2__9863_SHARP_){
return cljs.core.hash_combine.call(null,p1__9862_SHARP_,cljs.core.hash.call(null,p2__9863_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9876__9877 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9876__9877))
{var G__9879__9885 = cljs.core.first.call(null,G__9876__9877);
var vec__9884__9886 = G__9879__9885;
var key_name__9887 = cljs.core.nth.call(null,vec__9884__9886,0,null);
var f__9889 = cljs.core.nth.call(null,vec__9884__9886,1,null);
var G__9876__9890 = G__9876__9877;

var G__9879__9892 = G__9879__9885;
var G__9876__9895 = G__9876__9890;

while(true){
var vec__9896__9897 = G__9879__9892;
var key_name__9903 = cljs.core.nth.call(null,vec__9896__9897,0,null);
var f__9904 = cljs.core.nth.call(null,vec__9896__9897,1,null);
var G__9876__9905 = G__9876__9895;

var str_name__9906 = cljs.core.name.call(null,key_name__9903);

obj[str_name__9906] = f__9904;
var temp__3698__auto____9907 = cljs.core.next.call(null,G__9876__9905);

if(cljs.core.truth_(temp__3698__auto____9907))
{var G__9876__9909 = temp__3698__auto____9907;

{
var G__9910 = cljs.core.first.call(null,G__9876__9909);
var G__9911 = G__9876__9909;
G__9879__9892 = G__9910;
G__9876__9895 = G__9911;
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
var this__9913 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9916 = this;
return (new cljs.core.List(this__9916.meta,o,coll,(this__9916.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9917 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9918 = this;
return this__9918.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9919 = this;
return this__9919.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9920 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9922 = this;
return this__9922.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9923 = this;
return this__9923.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9924 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9925 = this;
return (new cljs.core.List(meta,this__9925.first,this__9925.rest,this__9925.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9926 = this;
return this__9926.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9927 = this;
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
var this__10009 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10010 = this;
return (new cljs.core.List(this__10010.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10011 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10012 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10013 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10014 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10015 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10018 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10020 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10021 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10022 = this;
return this__10022.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10023 = this;
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
list.cljs$lang$applyTo = (function (arglist__10036){
var items = cljs.core.seq( arglist__10036 );;
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
var this__10043 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10045 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10046 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10050 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10050.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10052 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10053 = this;
return this__10053.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10054 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10054.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10054.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10058 = this;
return this__10058.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10059 = this;
return (new cljs.core.Cons(meta,this__10059.first,this__10059.rest));
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
var G__10194 = null;
var G__10194__10195 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10194__10196 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10194 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10194__10195.call(this,string,f);
case  3 :
return G__10194__10196.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10194;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10200 = null;
var G__10200__10201 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10200__10202 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10200 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10200__10201.call(this,string,k);
case  3 :
return G__10200__10202.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10200;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10204 = null;
var G__10204__10205 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10204__10207 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10204 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10204__10205.call(this,string,n);
case  3 :
return G__10204__10207.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10204;
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
var G__10221 = null;
var G__10221__10222 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10221__10223 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10221 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10221__10222.call(this,this$,coll);
case  3 :
return G__10221__10223.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10221;
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
var x__10228 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10228;
} else
{lazy_seq.x = x__10228.call(null);
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
var this__10234 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10236 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10238 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10240 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10240.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10242 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10260 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10262 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10263 = this;
return this__10263.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10264 = this;
return (new cljs.core.LazySeq(meta,this__10264.realized,this__10264.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10266 = cljs.core.array.call(null);

var s__10268 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10268)))
{ary__10266.push(cljs.core.first.call(null,s__10268));
{
var G__10273 = cljs.core.next.call(null,s__10268);
s__10268 = G__10273;
continue;
}
} else
{return ary__10266;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10293 = s;
var i__10294 = n;
var sum__10295 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10296 = (i__10294 > 0);

if(cljs.core.truth_(and__3546__auto____10296))
{return cljs.core.seq.call(null,s__10293);
} else
{return and__3546__auto____10296;
}
})()))
{{
var G__10301 = cljs.core.next.call(null,s__10293);
var G__10302 = (i__10294 - 1);
var G__10303 = (sum__10295 + 1);
s__10293 = G__10301;
i__10294 = G__10302;
sum__10295 = G__10303;
continue;
}
} else
{return sum__10295;
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
var concat__10323 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10324 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10325 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10319 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10319))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10319),concat.call(null,cljs.core.rest.call(null,s__10319),y));
} else
{return y;
}
})));
});
var concat__10326 = (function() { 
var G__10330__delegate = function (x,y,zs){
var cat__10321 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10320 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10320))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10320),cat.call(null,cljs.core.rest.call(null,xys__10320),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10321.call(null,concat.call(null,x,y),zs);
};
var G__10330 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10330__delegate.call(this, x, y, zs);
};
G__10330.cljs$lang$maxFixedArity = 2;
G__10330.cljs$lang$applyTo = (function (arglist__10336){
var x = cljs.core.first(arglist__10336);
var y = cljs.core.first(cljs.core.next(arglist__10336));
var zs = cljs.core.rest(cljs.core.next(arglist__10336));
return G__10330__delegate.call(this, x, y, zs);
});
return G__10330;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10323.call(this);
case  1 :
return concat__10324.call(this,x);
case  2 :
return concat__10325.call(this,x,y);
default:
return concat__10326.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10326.cljs$lang$applyTo;
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
var list_STAR___10340 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10341 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10342 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10343 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10344 = (function() { 
var G__10347__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10347 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10347__delegate.call(this, a, b, c, d, more);
};
G__10347.cljs$lang$maxFixedArity = 4;
G__10347.cljs$lang$applyTo = (function (arglist__10349){
var a = cljs.core.first(arglist__10349);
var b = cljs.core.first(cljs.core.next(arglist__10349));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10349)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10349))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10349))));
return G__10347__delegate.call(this, a, b, c, d, more);
});
return G__10347;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10340.call(this,a);
case  2 :
return list_STAR___10341.call(this,a,b);
case  3 :
return list_STAR___10342.call(this,a,b,c);
case  4 :
return list_STAR___10343.call(this,a,b,c,d);
default:
return list_STAR___10344.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10344.cljs$lang$applyTo;
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
var apply__10409 = (function (f,args){
var fixed_arity__10356 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10356 + 1)) <= fixed_arity__10356)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10411 = (function (f,x,args){
var arglist__10371 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10372 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10371,fixed_arity__10372) <= fixed_arity__10372)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10371));
} else
{return f.cljs$lang$applyTo(arglist__10371);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10371));
}
});
var apply__10412 = (function (f,x,y,args){
var arglist__10376 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10378 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10376,fixed_arity__10378) <= fixed_arity__10378)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10376));
} else
{return f.cljs$lang$applyTo(arglist__10376);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10376));
}
});
var apply__10413 = (function (f,x,y,z,args){
var arglist__10386 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10387 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10386,fixed_arity__10387) <= fixed_arity__10387)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10386));
} else
{return f.cljs$lang$applyTo(arglist__10386);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10386));
}
});
var apply__10415 = (function() { 
var G__10431__delegate = function (f,a,b,c,d,args){
var arglist__10396 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10398 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10396,fixed_arity__10398) <= fixed_arity__10398)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10396));
} else
{return f.cljs$lang$applyTo(arglist__10396);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10396));
}
};
var G__10431 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10431__delegate.call(this, f, a, b, c, d, args);
};
G__10431.cljs$lang$maxFixedArity = 5;
G__10431.cljs$lang$applyTo = (function (arglist__10440){
var f = cljs.core.first(arglist__10440);
var a = cljs.core.first(cljs.core.next(arglist__10440));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10440)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10440))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10440)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10440)))));
return G__10431__delegate.call(this, f, a, b, c, d, args);
});
return G__10431;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10409.call(this,f,a);
case  3 :
return apply__10411.call(this,f,a,b);
case  4 :
return apply__10412.call(this,f,a,b,c);
case  5 :
return apply__10413.call(this,f,a,b,c,d);
default:
return apply__10415.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10415.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10449){
var obj = cljs.core.first(arglist__10449);
var f = cljs.core.first(cljs.core.next(arglist__10449));
var args = cljs.core.rest(cljs.core.next(arglist__10449));
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
var not_EQ___10450 = (function (x){
return false;
});
var not_EQ___10451 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10452 = (function() { 
var G__10455__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10455 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10455__delegate.call(this, x, y, more);
};
G__10455.cljs$lang$maxFixedArity = 2;
G__10455.cljs$lang$applyTo = (function (arglist__10456){
var x = cljs.core.first(arglist__10456);
var y = cljs.core.first(cljs.core.next(arglist__10456));
var more = cljs.core.rest(cljs.core.next(arglist__10456));
return G__10455__delegate.call(this, x, y, more);
});
return G__10455;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10450.call(this,x);
case  2 :
return not_EQ___10451.call(this,x,y);
default:
return not_EQ___10452.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10452.cljs$lang$applyTo;
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
var G__10509 = pred;
var G__10511 = cljs.core.next.call(null,coll);
pred = G__10509;
coll = G__10511;
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
{var or__3548__auto____10524 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10524))
{return or__3548__auto____10524;
} else
{{
var G__10536 = pred;
var G__10538 = cljs.core.next.call(null,coll);
pred = G__10536;
coll = G__10538;
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
var G__10550 = null;
var G__10550__10551 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10550__10552 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10550__10553 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10550__10554 = (function() { 
var G__10556__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10556 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10556__delegate.call(this, x, y, zs);
};
G__10556.cljs$lang$maxFixedArity = 2;
G__10556.cljs$lang$applyTo = (function (arglist__10590){
var x = cljs.core.first(arglist__10590);
var y = cljs.core.first(cljs.core.next(arglist__10590));
var zs = cljs.core.rest(cljs.core.next(arglist__10590));
return G__10556__delegate.call(this, x, y, zs);
});
return G__10556;
})()
;
G__10550 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10550__10551.call(this);
case  1 :
return G__10550__10552.call(this,x);
case  2 :
return G__10550__10553.call(this,x,y);
default:
return G__10550__10554.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10550.cljs$lang$maxFixedArity = 2;
G__10550.cljs$lang$applyTo = G__10550__10554.cljs$lang$applyTo;
return G__10550;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10593__delegate = function (args){
return x;
};
var G__10593 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10593__delegate.call(this, args);
};
G__10593.cljs$lang$maxFixedArity = 0;
G__10593.cljs$lang$applyTo = (function (arglist__10594){
var args = cljs.core.seq( arglist__10594 );;
return G__10593__delegate.call(this, args);
});
return G__10593;
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
var comp__10672 = (function (){
return cljs.core.identity;
});
var comp__10673 = (function (f){
return f;
});
var comp__10674 = (function (f,g){
return (function() {
var G__10679 = null;
var G__10679__10680 = (function (){
return f.call(null,g.call(null));
});
var G__10679__10681 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10679__10683 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10679__10684 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10679__10685 = (function() { 
var G__10691__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10691 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10691__delegate.call(this, x, y, z, args);
};
G__10691.cljs$lang$maxFixedArity = 3;
G__10691.cljs$lang$applyTo = (function (arglist__10692){
var x = cljs.core.first(arglist__10692);
var y = cljs.core.first(cljs.core.next(arglist__10692));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10692)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10692)));
return G__10691__delegate.call(this, x, y, z, args);
});
return G__10691;
})()
;
G__10679 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10679__10680.call(this);
case  1 :
return G__10679__10681.call(this,x);
case  2 :
return G__10679__10683.call(this,x,y);
case  3 :
return G__10679__10684.call(this,x,y,z);
default:
return G__10679__10685.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10679.cljs$lang$maxFixedArity = 3;
G__10679.cljs$lang$applyTo = G__10679__10685.cljs$lang$applyTo;
return G__10679;
})()
});
var comp__10675 = (function (f,g,h){
return (function() {
var G__10693 = null;
var G__10693__10694 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10693__10695 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10693__10696 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10693__10697 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10693__10698 = (function() { 
var G__10701__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10701 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10701__delegate.call(this, x, y, z, args);
};
G__10701.cljs$lang$maxFixedArity = 3;
G__10701.cljs$lang$applyTo = (function (arglist__10702){
var x = cljs.core.first(arglist__10702);
var y = cljs.core.first(cljs.core.next(arglist__10702));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10702)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10702)));
return G__10701__delegate.call(this, x, y, z, args);
});
return G__10701;
})()
;
G__10693 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10693__10694.call(this);
case  1 :
return G__10693__10695.call(this,x);
case  2 :
return G__10693__10696.call(this,x,y);
case  3 :
return G__10693__10697.call(this,x,y,z);
default:
return G__10693__10698.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10693.cljs$lang$maxFixedArity = 3;
G__10693.cljs$lang$applyTo = G__10693__10698.cljs$lang$applyTo;
return G__10693;
})()
});
var comp__10676 = (function() { 
var G__10703__delegate = function (f1,f2,f3,fs){
var fs__10602 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10705__delegate = function (args){
var ret__10603 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10602),args);
var fs__10604 = cljs.core.next.call(null,fs__10602);

while(true){
if(cljs.core.truth_(fs__10604))
{{
var G__10706 = cljs.core.first.call(null,fs__10604).call(null,ret__10603);
var G__10707 = cljs.core.next.call(null,fs__10604);
ret__10603 = G__10706;
fs__10604 = G__10707;
continue;
}
} else
{return ret__10603;
}
break;
}
};
var G__10705 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10705__delegate.call(this, args);
};
G__10705.cljs$lang$maxFixedArity = 0;
G__10705.cljs$lang$applyTo = (function (arglist__10708){
var args = cljs.core.seq( arglist__10708 );;
return G__10705__delegate.call(this, args);
});
return G__10705;
})()
;
};
var G__10703 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10703__delegate.call(this, f1, f2, f3, fs);
};
G__10703.cljs$lang$maxFixedArity = 3;
G__10703.cljs$lang$applyTo = (function (arglist__10709){
var f1 = cljs.core.first(arglist__10709);
var f2 = cljs.core.first(cljs.core.next(arglist__10709));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10709)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10709)));
return G__10703__delegate.call(this, f1, f2, f3, fs);
});
return G__10703;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10672.call(this);
case  1 :
return comp__10673.call(this,f1);
case  2 :
return comp__10674.call(this,f1,f2);
case  3 :
return comp__10675.call(this,f1,f2,f3);
default:
return comp__10676.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10676.cljs$lang$applyTo;
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
var partial__10728 = (function (f,arg1){
return (function() { 
var G__10734__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10734 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10734__delegate.call(this, args);
};
G__10734.cljs$lang$maxFixedArity = 0;
G__10734.cljs$lang$applyTo = (function (arglist__10736){
var args = cljs.core.seq( arglist__10736 );;
return G__10734__delegate.call(this, args);
});
return G__10734;
})()
;
});
var partial__10729 = (function (f,arg1,arg2){
return (function() { 
var G__10737__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10737 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10737__delegate.call(this, args);
};
G__10737.cljs$lang$maxFixedArity = 0;
G__10737.cljs$lang$applyTo = (function (arglist__10743){
var args = cljs.core.seq( arglist__10743 );;
return G__10737__delegate.call(this, args);
});
return G__10737;
})()
;
});
var partial__10730 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10744__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10744 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10744__delegate.call(this, args);
};
G__10744.cljs$lang$maxFixedArity = 0;
G__10744.cljs$lang$applyTo = (function (arglist__10746){
var args = cljs.core.seq( arglist__10746 );;
return G__10744__delegate.call(this, args);
});
return G__10744;
})()
;
});
var partial__10731 = (function() { 
var G__10747__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10749__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10749 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10749__delegate.call(this, args);
};
G__10749.cljs$lang$maxFixedArity = 0;
G__10749.cljs$lang$applyTo = (function (arglist__10750){
var args = cljs.core.seq( arglist__10750 );;
return G__10749__delegate.call(this, args);
});
return G__10749;
})()
;
};
var G__10747 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10747__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10747.cljs$lang$maxFixedArity = 4;
G__10747.cljs$lang$applyTo = (function (arglist__10751){
var f = cljs.core.first(arglist__10751);
var arg1 = cljs.core.first(cljs.core.next(arglist__10751));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10751)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10751))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10751))));
return G__10747__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10747;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10728.call(this,f,arg1);
case  3 :
return partial__10729.call(this,f,arg1,arg2);
case  4 :
return partial__10730.call(this,f,arg1,arg2,arg3);
default:
return partial__10731.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10731.cljs$lang$applyTo;
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
var fnil__10764 = (function (f,x){
return (function() {
var G__10768 = null;
var G__10768__10769 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10768__10770 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10768__10771 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10768__10772 = (function() { 
var G__10778__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10778 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10778__delegate.call(this, a, b, c, ds);
};
G__10778.cljs$lang$maxFixedArity = 3;
G__10778.cljs$lang$applyTo = (function (arglist__10780){
var a = cljs.core.first(arglist__10780);
var b = cljs.core.first(cljs.core.next(arglist__10780));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10780)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10780)));
return G__10778__delegate.call(this, a, b, c, ds);
});
return G__10778;
})()
;
G__10768 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10768__10769.call(this,a);
case  2 :
return G__10768__10770.call(this,a,b);
case  3 :
return G__10768__10771.call(this,a,b,c);
default:
return G__10768__10772.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10768.cljs$lang$maxFixedArity = 3;
G__10768.cljs$lang$applyTo = G__10768__10772.cljs$lang$applyTo;
return G__10768;
})()
});
var fnil__10765 = (function (f,x,y){
return (function() {
var G__10782 = null;
var G__10782__10783 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10782__10784 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10782__10785 = (function() { 
var G__10787__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10787 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10787__delegate.call(this, a, b, c, ds);
};
G__10787.cljs$lang$maxFixedArity = 3;
G__10787.cljs$lang$applyTo = (function (arglist__10788){
var a = cljs.core.first(arglist__10788);
var b = cljs.core.first(cljs.core.next(arglist__10788));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10788)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10788)));
return G__10787__delegate.call(this, a, b, c, ds);
});
return G__10787;
})()
;
G__10782 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10782__10783.call(this,a,b);
case  3 :
return G__10782__10784.call(this,a,b,c);
default:
return G__10782__10785.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10782.cljs$lang$maxFixedArity = 3;
G__10782.cljs$lang$applyTo = G__10782__10785.cljs$lang$applyTo;
return G__10782;
})()
});
var fnil__10766 = (function (f,x,y,z){
return (function() {
var G__10789 = null;
var G__10789__10790 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10789__10791 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10789__10792 = (function() { 
var G__10800__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10800 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10800__delegate.call(this, a, b, c, ds);
};
G__10800.cljs$lang$maxFixedArity = 3;
G__10800.cljs$lang$applyTo = (function (arglist__10801){
var a = cljs.core.first(arglist__10801);
var b = cljs.core.first(cljs.core.next(arglist__10801));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10801)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10801)));
return G__10800__delegate.call(this, a, b, c, ds);
});
return G__10800;
})()
;
G__10789 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10789__10790.call(this,a,b);
case  3 :
return G__10789__10791.call(this,a,b,c);
default:
return G__10789__10792.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10789.cljs$lang$maxFixedArity = 3;
G__10789.cljs$lang$applyTo = G__10789__10792.cljs$lang$applyTo;
return G__10789;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10764.call(this,f,x);
case  3 :
return fnil__10765.call(this,f,x,y);
case  4 :
return fnil__10766.call(this,f,x,y,z);
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
var mapi__10817 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10813 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10813))
{var s__10815 = temp__3698__auto____10813;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10815)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10815)));
} else
{return null;
}
})));
});

return mapi__10817.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10823 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10823))
{var s__10833 = temp__3698__auto____10823;

var x__10835 = f.call(null,cljs.core.first.call(null,s__10833));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10835)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10833));
} else
{return cljs.core.cons.call(null,x__10835,keep.call(null,f,cljs.core.rest.call(null,s__10833)));
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
var keepi__11054 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11049 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11049))
{var s__11050 = temp__3698__auto____11049;

var x__11051 = f.call(null,idx,cljs.core.first.call(null,s__11050));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11051)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11050));
} else
{return cljs.core.cons.call(null,x__11051,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11050)));
}
} else
{return null;
}
})));
});

return keepi__11054.call(null,0,coll);
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
var every_pred__11306 = (function (p){
return (function() {
var ep1 = null;
var ep1__11508 = (function (){
return true;
});
var ep1__11509 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11510 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11083 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11083))
{return p.call(null,y);
} else
{return and__3546__auto____11083;
}
})());
});
var ep1__11511 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11084 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11084))
{var and__3546__auto____11085 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11085))
{return p.call(null,z);
} else
{return and__3546__auto____11085;
}
} else
{return and__3546__auto____11084;
}
})());
});
var ep1__11512 = (function() { 
var G__11519__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11086 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11086))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11086;
}
})());
};
var G__11519 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11519__delegate.call(this, x, y, z, args);
};
G__11519.cljs$lang$maxFixedArity = 3;
G__11519.cljs$lang$applyTo = (function (arglist__11523){
var x = cljs.core.first(arglist__11523);
var y = cljs.core.first(cljs.core.next(arglist__11523));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11523)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11523)));
return G__11519__delegate.call(this, x, y, z, args);
});
return G__11519;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11508.call(this);
case  1 :
return ep1__11509.call(this,x);
case  2 :
return ep1__11510.call(this,x,y);
case  3 :
return ep1__11511.call(this,x,y,z);
default:
return ep1__11512.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11512.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11503 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11525 = (function (){
return true;
});
var ep2__11527 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11087 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11087))
{return p2.call(null,x);
} else
{return and__3546__auto____11087;
}
})());
});
var ep2__11528 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11088 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11088))
{var and__3546__auto____11089 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11089))
{var and__3546__auto____11090 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11090))
{return p2.call(null,y);
} else
{return and__3546__auto____11090;
}
} else
{return and__3546__auto____11089;
}
} else
{return and__3546__auto____11088;
}
})());
});
var ep2__11529 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11091 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11091))
{var and__3546__auto____11092 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11092))
{var and__3546__auto____11093 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11093))
{var and__3546__auto____11098 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11098))
{var and__3546__auto____11100 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11100))
{return p2.call(null,z);
} else
{return and__3546__auto____11100;
}
} else
{return and__3546__auto____11098;
}
} else
{return and__3546__auto____11093;
}
} else
{return and__3546__auto____11092;
}
} else
{return and__3546__auto____11091;
}
})());
});
var ep2__11530 = (function() { 
var G__11543__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11107 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11107))
{return cljs.core.every_QMARK_.call(null,(function (p1__10865_SHARP_){
var and__3546__auto____11108 = p1.call(null,p1__10865_SHARP_);

if(cljs.core.truth_(and__3546__auto____11108))
{return p2.call(null,p1__10865_SHARP_);
} else
{return and__3546__auto____11108;
}
}),args);
} else
{return and__3546__auto____11107;
}
})());
};
var G__11543 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11543__delegate.call(this, x, y, z, args);
};
G__11543.cljs$lang$maxFixedArity = 3;
G__11543.cljs$lang$applyTo = (function (arglist__11547){
var x = cljs.core.first(arglist__11547);
var y = cljs.core.first(cljs.core.next(arglist__11547));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11547)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11547)));
return G__11543__delegate.call(this, x, y, z, args);
});
return G__11543;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11525.call(this);
case  1 :
return ep2__11527.call(this,x);
case  2 :
return ep2__11528.call(this,x,y);
case  3 :
return ep2__11529.call(this,x,y,z);
default:
return ep2__11530.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11530.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11504 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11549 = (function (){
return true;
});
var ep3__11550 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11112 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11112))
{var and__3546__auto____11113 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11113))
{return p3.call(null,x);
} else
{return and__3546__auto____11113;
}
} else
{return and__3546__auto____11112;
}
})());
});
var ep3__11551 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11120 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11120))
{var and__3546__auto____11121 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11121))
{var and__3546__auto____11122 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11122))
{var and__3546__auto____11124 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11124))
{var and__3546__auto____11126 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11126))
{return p3.call(null,y);
} else
{return and__3546__auto____11126;
}
} else
{return and__3546__auto____11124;
}
} else
{return and__3546__auto____11122;
}
} else
{return and__3546__auto____11121;
}
} else
{return and__3546__auto____11120;
}
})());
});
var ep3__11552 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11128 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11128))
{var and__3546__auto____11129 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11129))
{var and__3546__auto____11130 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11130))
{var and__3546__auto____11136 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11136))
{var and__3546__auto____11138 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11138))
{var and__3546__auto____11226 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11226))
{var and__3546__auto____11229 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11229))
{var and__3546__auto____11231 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11231))
{return p3.call(null,z);
} else
{return and__3546__auto____11231;
}
} else
{return and__3546__auto____11229;
}
} else
{return and__3546__auto____11226;
}
} else
{return and__3546__auto____11138;
}
} else
{return and__3546__auto____11136;
}
} else
{return and__3546__auto____11130;
}
} else
{return and__3546__auto____11129;
}
} else
{return and__3546__auto____11128;
}
})());
});
var ep3__11553 = (function() { 
var G__11565__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11239 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11239))
{return cljs.core.every_QMARK_.call(null,(function (p1__10868_SHARP_){
var and__3546__auto____11243 = p1.call(null,p1__10868_SHARP_);

if(cljs.core.truth_(and__3546__auto____11243))
{var and__3546__auto____11245 = p2.call(null,p1__10868_SHARP_);

if(cljs.core.truth_(and__3546__auto____11245))
{return p3.call(null,p1__10868_SHARP_);
} else
{return and__3546__auto____11245;
}
} else
{return and__3546__auto____11243;
}
}),args);
} else
{return and__3546__auto____11239;
}
})());
};
var G__11565 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11565__delegate.call(this, x, y, z, args);
};
G__11565.cljs$lang$maxFixedArity = 3;
G__11565.cljs$lang$applyTo = (function (arglist__11574){
var x = cljs.core.first(arglist__11574);
var y = cljs.core.first(cljs.core.next(arglist__11574));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11574)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11574)));
return G__11565__delegate.call(this, x, y, z, args);
});
return G__11565;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11549.call(this);
case  1 :
return ep3__11550.call(this,x);
case  2 :
return ep3__11551.call(this,x,y);
case  3 :
return ep3__11552.call(this,x,y,z);
default:
return ep3__11553.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11553.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11505 = (function() { 
var G__11576__delegate = function (p1,p2,p3,ps){
var ps__11255 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11577 = (function (){
return true;
});
var epn__11579 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10869_SHARP_){
return p1__10869_SHARP_.call(null,x);
}),ps__11255);
});
var epn__11580 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10870_SHARP_){
var and__3546__auto____11266 = p1__10870_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11266))
{return p1__10870_SHARP_.call(null,y);
} else
{return and__3546__auto____11266;
}
}),ps__11255);
});
var epn__11581 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10874_SHARP_){
var and__3546__auto____11272 = p1__10874_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11272))
{var and__3546__auto____11273 = p1__10874_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11273))
{return p1__10874_SHARP_.call(null,z);
} else
{return and__3546__auto____11273;
}
} else
{return and__3546__auto____11272;
}
}),ps__11255);
});
var epn__11582 = (function() { 
var G__11589__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11278 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11278))
{return cljs.core.every_QMARK_.call(null,(function (p1__11048_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11048_SHARP_,args);
}),ps__11255);
} else
{return and__3546__auto____11278;
}
})());
};
var G__11589 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11589__delegate.call(this, x, y, z, args);
};
G__11589.cljs$lang$maxFixedArity = 3;
G__11589.cljs$lang$applyTo = (function (arglist__11594){
var x = cljs.core.first(arglist__11594);
var y = cljs.core.first(cljs.core.next(arglist__11594));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11594)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11594)));
return G__11589__delegate.call(this, x, y, z, args);
});
return G__11589;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11577.call(this);
case  1 :
return epn__11579.call(this,x);
case  2 :
return epn__11580.call(this,x,y);
case  3 :
return epn__11581.call(this,x,y,z);
default:
return epn__11582.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11582.cljs$lang$applyTo;
return epn;
})()
};
var G__11576 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11576__delegate.call(this, p1, p2, p3, ps);
};
G__11576.cljs$lang$maxFixedArity = 3;
G__11576.cljs$lang$applyTo = (function (arglist__11597){
var p1 = cljs.core.first(arglist__11597);
var p2 = cljs.core.first(cljs.core.next(arglist__11597));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11597)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11597)));
return G__11576__delegate.call(this, p1, p2, p3, ps);
});
return G__11576;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11306.call(this,p1);
case  2 :
return every_pred__11503.call(this,p1,p2);
case  3 :
return every_pred__11504.call(this,p1,p2,p3);
default:
return every_pred__11505.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11505.cljs$lang$applyTo;
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
var some_fn__11859 = (function (p){
return (function() {
var sp1 = null;
var sp1__11865 = (function (){
return null;
});
var sp1__11866 = (function (x){
return p.call(null,x);
});
var sp1__11867 = (function (x,y){
var or__3548__auto____11609 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11609))
{return or__3548__auto____11609;
} else
{return p.call(null,y);
}
});
var sp1__11868 = (function (x,y,z){
var or__3548__auto____11613 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11613))
{return or__3548__auto____11613;
} else
{var or__3548__auto____11615 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11615))
{return or__3548__auto____11615;
} else
{return p.call(null,z);
}
}
});
var sp1__11869 = (function() { 
var G__11903__delegate = function (x,y,z,args){
var or__3548__auto____11620 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11620))
{return or__3548__auto____11620;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11903 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11903__delegate.call(this, x, y, z, args);
};
G__11903.cljs$lang$maxFixedArity = 3;
G__11903.cljs$lang$applyTo = (function (arglist__11904){
var x = cljs.core.first(arglist__11904);
var y = cljs.core.first(cljs.core.next(arglist__11904));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11904)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11904)));
return G__11903__delegate.call(this, x, y, z, args);
});
return G__11903;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11865.call(this);
case  1 :
return sp1__11866.call(this,x);
case  2 :
return sp1__11867.call(this,x,y);
case  3 :
return sp1__11868.call(this,x,y,z);
default:
return sp1__11869.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11869.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11860 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11908 = (function (){
return null;
});
var sp2__11910 = (function (x){
var or__3548__auto____11779 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11779))
{return or__3548__auto____11779;
} else
{return p2.call(null,x);
}
});
var sp2__11912 = (function (x,y){
var or__3548__auto____11781 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11781))
{return or__3548__auto____11781;
} else
{var or__3548__auto____11782 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11782))
{return or__3548__auto____11782;
} else
{var or__3548__auto____11784 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11784))
{return or__3548__auto____11784;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11913 = (function (x,y,z){
var or__3548__auto____11791 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11791))
{return or__3548__auto____11791;
} else
{var or__3548__auto____11793 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11793))
{return or__3548__auto____11793;
} else
{var or__3548__auto____11794 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11794))
{return or__3548__auto____11794;
} else
{var or__3548__auto____11795 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11795))
{return or__3548__auto____11795;
} else
{var or__3548__auto____11796 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11796))
{return or__3548__auto____11796;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11914 = (function() { 
var G__11916__delegate = function (x,y,z,args){
var or__3548__auto____11802 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11802))
{return or__3548__auto____11802;
} else
{return cljs.core.some.call(null,(function (p1__11069_SHARP_){
var or__3548__auto____11803 = p1.call(null,p1__11069_SHARP_);

if(cljs.core.truth_(or__3548__auto____11803))
{return or__3548__auto____11803;
} else
{return p2.call(null,p1__11069_SHARP_);
}
}),args);
}
};
var G__11916 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11916__delegate.call(this, x, y, z, args);
};
G__11916.cljs$lang$maxFixedArity = 3;
G__11916.cljs$lang$applyTo = (function (arglist__11917){
var x = cljs.core.first(arglist__11917);
var y = cljs.core.first(cljs.core.next(arglist__11917));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11917)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11917)));
return G__11916__delegate.call(this, x, y, z, args);
});
return G__11916;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11908.call(this);
case  1 :
return sp2__11910.call(this,x);
case  2 :
return sp2__11912.call(this,x,y);
case  3 :
return sp2__11913.call(this,x,y,z);
default:
return sp2__11914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11914.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11861 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11919 = (function (){
return null;
});
var sp3__11920 = (function (x){
var or__3548__auto____11806 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11806))
{return or__3548__auto____11806;
} else
{var or__3548__auto____11807 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11807))
{return or__3548__auto____11807;
} else
{return p3.call(null,x);
}
}
});
var sp3__11921 = (function (x,y){
var or__3548__auto____11808 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11808))
{return or__3548__auto____11808;
} else
{var or__3548__auto____11809 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11809))
{return or__3548__auto____11809;
} else
{var or__3548__auto____11810 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11810))
{return or__3548__auto____11810;
} else
{var or__3548__auto____11815 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11815))
{return or__3548__auto____11815;
} else
{var or__3548__auto____11818 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11818))
{return or__3548__auto____11818;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11922 = (function (x,y,z){
var or__3548__auto____11819 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11819))
{return or__3548__auto____11819;
} else
{var or__3548__auto____11820 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11820))
{return or__3548__auto____11820;
} else
{var or__3548__auto____11822 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11822))
{return or__3548__auto____11822;
} else
{var or__3548__auto____11823 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11823))
{return or__3548__auto____11823;
} else
{var or__3548__auto____11825 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11825))
{return or__3548__auto____11825;
} else
{var or__3548__auto____11827 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11827))
{return or__3548__auto____11827;
} else
{var or__3548__auto____11828 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11828))
{return or__3548__auto____11828;
} else
{var or__3548__auto____11832 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11832))
{return or__3548__auto____11832;
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
var sp3__11923 = (function() { 
var G__11940__delegate = function (x,y,z,args){
var or__3548__auto____11835 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11835))
{return or__3548__auto____11835;
} else
{return cljs.core.some.call(null,(function (p1__11071_SHARP_){
var or__3548__auto____11837 = p1.call(null,p1__11071_SHARP_);

if(cljs.core.truth_(or__3548__auto____11837))
{return or__3548__auto____11837;
} else
{var or__3548__auto____11838 = p2.call(null,p1__11071_SHARP_);

if(cljs.core.truth_(or__3548__auto____11838))
{return or__3548__auto____11838;
} else
{return p3.call(null,p1__11071_SHARP_);
}
}
}),args);
}
};
var G__11940 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11940__delegate.call(this, x, y, z, args);
};
G__11940.cljs$lang$maxFixedArity = 3;
G__11940.cljs$lang$applyTo = (function (arglist__11945){
var x = cljs.core.first(arglist__11945);
var y = cljs.core.first(cljs.core.next(arglist__11945));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11945)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11945)));
return G__11940__delegate.call(this, x, y, z, args);
});
return G__11940;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11919.call(this);
case  1 :
return sp3__11920.call(this,x);
case  2 :
return sp3__11921.call(this,x,y);
case  3 :
return sp3__11922.call(this,x,y,z);
default:
return sp3__11923.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11923.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11862 = (function() { 
var G__11949__delegate = function (p1,p2,p3,ps){
var ps__11842 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11952 = (function (){
return null;
});
var spn__11953 = (function (x){
return cljs.core.some.call(null,(function (p1__11072_SHARP_){
return p1__11072_SHARP_.call(null,x);
}),ps__11842);
});
var spn__11954 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11073_SHARP_){
var or__3548__auto____11852 = p1__11073_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11852))
{return or__3548__auto____11852;
} else
{return p1__11073_SHARP_.call(null,y);
}
}),ps__11842);
});
var spn__11955 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11074_SHARP_){
var or__3548__auto____11853 = p1__11074_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11853))
{return or__3548__auto____11853;
} else
{var or__3548__auto____11854 = p1__11074_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11854))
{return or__3548__auto____11854;
} else
{return p1__11074_SHARP_.call(null,z);
}
}
}),ps__11842);
});
var spn__11956 = (function() { 
var G__11974__delegate = function (x,y,z,args){
var or__3548__auto____11857 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11857))
{return or__3548__auto____11857;
} else
{return cljs.core.some.call(null,(function (p1__11075_SHARP_){
return cljs.core.some.call(null,p1__11075_SHARP_,args);
}),ps__11842);
}
};
var G__11974 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11974__delegate.call(this, x, y, z, args);
};
G__11974.cljs$lang$maxFixedArity = 3;
G__11974.cljs$lang$applyTo = (function (arglist__11975){
var x = cljs.core.first(arglist__11975);
var y = cljs.core.first(cljs.core.next(arglist__11975));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11975)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11975)));
return G__11974__delegate.call(this, x, y, z, args);
});
return G__11974;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11952.call(this);
case  1 :
return spn__11953.call(this,x);
case  2 :
return spn__11954.call(this,x,y);
case  3 :
return spn__11955.call(this,x,y,z);
default:
return spn__11956.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11956.cljs$lang$applyTo;
return spn;
})()
};
var G__11949 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11949__delegate.call(this, p1, p2, p3, ps);
};
G__11949.cljs$lang$maxFixedArity = 3;
G__11949.cljs$lang$applyTo = (function (arglist__11978){
var p1 = cljs.core.first(arglist__11978);
var p2 = cljs.core.first(cljs.core.next(arglist__11978));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11978)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11978)));
return G__11949__delegate.call(this, p1, p2, p3, ps);
});
return G__11949;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11859.call(this,p1);
case  2 :
return some_fn__11860.call(this,p1,p2);
case  3 :
return some_fn__11861.call(this,p1,p2,p3);
default:
return some_fn__11862.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11862.cljs$lang$applyTo;
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
var map__12012 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11985 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11985))
{var s__11986 = temp__3698__auto____11985;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11986)),map.call(null,f,cljs.core.rest.call(null,s__11986)));
} else
{return null;
}
})));
});
var map__12013 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11989 = cljs.core.seq.call(null,c1);
var s2__11991 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11992 = s1__11989;

if(cljs.core.truth_(and__3546__auto____11992))
{return s2__11991;
} else
{return and__3546__auto____11992;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11989),cljs.core.first.call(null,s2__11991)),map.call(null,f,cljs.core.rest.call(null,s1__11989),cljs.core.rest.call(null,s2__11991)));
} else
{return null;
}
})));
});
var map__12014 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11994 = cljs.core.seq.call(null,c1);
var s2__11996 = cljs.core.seq.call(null,c2);
var s3__11999 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____12000 = s1__11994;

if(cljs.core.truth_(and__3546__auto____12000))
{var and__3546__auto____12001 = s2__11996;

if(cljs.core.truth_(and__3546__auto____12001))
{return s3__11999;
} else
{return and__3546__auto____12001;
}
} else
{return and__3546__auto____12000;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11994),cljs.core.first.call(null,s2__11996),cljs.core.first.call(null,s3__11999)),map.call(null,f,cljs.core.rest.call(null,s1__11994),cljs.core.rest.call(null,s2__11996),cljs.core.rest.call(null,s3__11999)));
} else
{return null;
}
})));
});
var map__12015 = (function() { 
var G__12073__delegate = function (f,c1,c2,c3,colls){
var step__12007 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12004 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12004)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12004),step.call(null,map.call(null,cljs.core.rest,ss__12004)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11602_SHARP_){
return cljs.core.apply.call(null,f,p1__11602_SHARP_);
}),step__12007.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12073 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12073__delegate.call(this, f, c1, c2, c3, colls);
};
G__12073.cljs$lang$maxFixedArity = 4;
G__12073.cljs$lang$applyTo = (function (arglist__12081){
var f = cljs.core.first(arglist__12081);
var c1 = cljs.core.first(cljs.core.next(arglist__12081));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12081)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12081))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12081))));
return G__12073__delegate.call(this, f, c1, c2, c3, colls);
});
return G__12073;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__12012.call(this,f,c1);
case  3 :
return map__12013.call(this,f,c1,c2);
case  4 :
return map__12014.call(this,f,c1,c2,c3);
default:
return map__12015.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__12015.cljs$lang$applyTo;
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
{var temp__3698__auto____12082 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12082))
{var s__12083 = temp__3698__auto____12082;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12083),take.call(null,(n - 1),cljs.core.rest.call(null,s__12083)));
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
var step__12093 = (function (n,coll){
while(true){
var s__12088 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12089 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12089))
{return s__12088;
} else
{return and__3546__auto____12089;
}
})()))
{{
var G__12106 = (n - 1);
var G__12107 = cljs.core.rest.call(null,s__12088);
n = G__12106;
coll = G__12107;
continue;
}
} else
{return s__12088;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12093.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12117 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12118 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12117.call(this,n);
case  2 :
return drop_last__12118.call(this,n,s);
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
var s__12123 = cljs.core.seq.call(null,coll);
var lead__12124 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12124))
{{
var G__12127 = cljs.core.next.call(null,s__12123);
var G__12128 = cljs.core.next.call(null,lead__12124);
s__12123 = G__12127;
lead__12124 = G__12128;
continue;
}
} else
{return s__12123;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12137 = (function (pred,coll){
while(true){
var s__12132 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12133 = s__12132;

if(cljs.core.truth_(and__3546__auto____12133))
{return pred.call(null,cljs.core.first.call(null,s__12132));
} else
{return and__3546__auto____12133;
}
})()))
{{
var G__12139 = pred;
var G__12140 = cljs.core.rest.call(null,s__12132);
pred = G__12139;
coll = G__12140;
continue;
}
} else
{return s__12132;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12137.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12149 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12149))
{var s__12151 = temp__3698__auto____12149;

return cljs.core.concat.call(null,s__12151,cycle.call(null,s__12151));
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
var repeat__12164 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12165 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12164.call(this,n);
case  2 :
return repeat__12165.call(this,n,x);
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
var repeatedly__12187 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12188 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12187.call(this,n);
case  2 :
return repeatedly__12188.call(this,n,f);
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
var interleave__12196 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12192 = cljs.core.seq.call(null,c1);
var s2__12193 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12194 = s1__12192;

if(cljs.core.truth_(and__3546__auto____12194))
{return s2__12193;
} else
{return and__3546__auto____12194;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12192),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12193),interleave.call(null,cljs.core.rest.call(null,s1__12192),cljs.core.rest.call(null,s2__12193))));
} else
{return null;
}
})));
});
var interleave__12197 = (function() { 
var G__12199__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12195 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12195)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12195),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12195)));
} else
{return null;
}
})));
};
var G__12199 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12199__delegate.call(this, c1, c2, colls);
};
G__12199.cljs$lang$maxFixedArity = 2;
G__12199.cljs$lang$applyTo = (function (arglist__12202){
var c1 = cljs.core.first(arglist__12202);
var c2 = cljs.core.first(cljs.core.next(arglist__12202));
var colls = cljs.core.rest(cljs.core.next(arglist__12202));
return G__12199__delegate.call(this, c1, c2, colls);
});
return G__12199;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12196.call(this,c1,c2);
default:
return interleave__12197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12197.cljs$lang$applyTo;
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
var cat__12282 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12280 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12280))
{var coll__12281 = temp__3695__auto____12280;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12281),cat.call(null,cljs.core.rest.call(null,coll__12281),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12282.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12284 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12285 = (function() { 
var G__12287__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12287 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12287__delegate.call(this, f, coll, colls);
};
G__12287.cljs$lang$maxFixedArity = 2;
G__12287.cljs$lang$applyTo = (function (arglist__12288){
var f = cljs.core.first(arglist__12288);
var coll = cljs.core.first(cljs.core.next(arglist__12288));
var colls = cljs.core.rest(cljs.core.next(arglist__12288));
return G__12287__delegate.call(this, f, coll, colls);
});
return G__12287;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12284.call(this,f,coll);
default:
return mapcat__12285.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12285.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12289 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12289))
{var s__12293 = temp__3698__auto____12289;

var f__12295 = cljs.core.first.call(null,s__12293);
var r__12296 = cljs.core.rest.call(null,s__12293);

if(cljs.core.truth_(pred.call(null,f__12295)))
{return cljs.core.cons.call(null,f__12295,filter.call(null,pred,r__12296));
} else
{return filter.call(null,pred,r__12296);
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
var walk__12342 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12342.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12335_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12335_SHARP_));
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
var partition__12380 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12382 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12361 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12361))
{var s__12363 = temp__3698__auto____12361;

var p__12364 = cljs.core.take.call(null,n,s__12363);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12364))))
{return cljs.core.cons.call(null,p__12364,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12363)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12383 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12369 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12369))
{var s__12370 = temp__3698__auto____12369;

var p__12372 = cljs.core.take.call(null,n,s__12370);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12372))))
{return cljs.core.cons.call(null,p__12372,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12370)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12372,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12380.call(this,n,step);
case  3 :
return partition__12382.call(this,n,step,pad);
case  4 :
return partition__12383.call(this,n,step,pad,coll);
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
var get_in__12449 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12450 = (function (m,ks,not_found){
var sentinel__12444 = cljs.core.lookup_sentinel;
var m__12445 = m;
var ks__12447 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12447))
{var m__12448 = cljs.core.get.call(null,m__12445,cljs.core.first.call(null,ks__12447),sentinel__12444);

if(cljs.core.truth_((sentinel__12444 === m__12448)))
{return not_found;
} else
{{
var G__12452 = sentinel__12444;
var G__12453 = m__12448;
var G__12454 = cljs.core.next.call(null,ks__12447);
sentinel__12444 = G__12452;
m__12445 = G__12453;
ks__12447 = G__12454;
continue;
}
}
} else
{return m__12445;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12449.call(this,m,ks);
case  3 :
return get_in__12450.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12455,v){
var vec__12458__12461 = p__12455;
var k__12462 = cljs.core.nth.call(null,vec__12458__12461,0,null);
var ks__12463 = cljs.core.nthnext.call(null,vec__12458__12461,1);

if(cljs.core.truth_(ks__12463))
{return cljs.core.assoc.call(null,m,k__12462,assoc_in.call(null,cljs.core.get.call(null,m,k__12462),ks__12463,v));
} else
{return cljs.core.assoc.call(null,m,k__12462,v);
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
var update_in__delegate = function (m,p__12471,f,args){
var vec__12478__12479 = p__12471;
var k__12481 = cljs.core.nth.call(null,vec__12478__12479,0,null);
var ks__12482 = cljs.core.nthnext.call(null,vec__12478__12479,1);

if(cljs.core.truth_(ks__12482))
{return cljs.core.assoc.call(null,m,k__12481,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12481),ks__12482,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12481,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12481),args));
}
};
var update_in = function (m,p__12471,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12471, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12492){
var m = cljs.core.first(arglist__12492);
var p__12471 = cljs.core.first(cljs.core.next(arglist__12492));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12492)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12492)));
return update_in__delegate.call(this, m, p__12471, f, args);
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
var this__12505 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12626 = null;
var G__12626__12627 = (function (coll,k){
var this__12507 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12626__12628 = (function (coll,k,not_found){
var this__12510 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12626 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12626__12627.call(this,coll,k);
case  3 :
return G__12626__12628.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12626;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12512 = this;
var new_array__12513 = cljs.core.aclone.call(null,this__12512.array);

(new_array__12513[k] = v);
return (new cljs.core.Vector(this__12512.meta,new_array__12513));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12634 = null;
var G__12634__12635 = (function (coll,k){
var this__12515 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12634__12636 = (function (coll,k,not_found){
var this__12518 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12634 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12634__12635.call(this,coll,k);
case  3 :
return G__12634__12636.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12634;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12520 = this;
var new_array__12521 = cljs.core.aclone.call(null,this__12520.array);

new_array__12521.push(o);
return (new cljs.core.Vector(this__12520.meta,new_array__12521));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12647 = null;
var G__12647__12648 = (function (v,f){
var this__12527 = this;
return cljs.core.ci_reduce.call(null,this__12527.array,f);
});
var G__12647__12649 = (function (v,f,start){
var this__12529 = this;
return cljs.core.ci_reduce.call(null,this__12529.array,f,start);
});
G__12647 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12647__12648.call(this,v,f);
case  3 :
return G__12647__12649.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12647;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12581 = this;
if(cljs.core.truth_((this__12581.array.length > 0)))
{var vector_seq__12587 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12581.array.length)))
{return cljs.core.cons.call(null,(this__12581.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12587.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12588 = this;
return this__12588.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12590 = this;
var count__12592 = this__12590.array.length;

if(cljs.core.truth_((count__12592 > 0)))
{return (this__12590.array[(count__12592 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12594 = this;
if(cljs.core.truth_((this__12594.array.length > 0)))
{var new_array__12600 = cljs.core.aclone.call(null,this__12594.array);

new_array__12600.pop();
return (new cljs.core.Vector(this__12594.meta,new_array__12600));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12602 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12604 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12605 = this;
return (new cljs.core.Vector(meta,this__12605.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12611 = this;
return this__12611.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12656 = null;
var G__12656__12657 = (function (coll,n){
var this__12613 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12615 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12615))
{return (n < this__12613.array.length);
} else
{return and__3546__auto____12615;
}
})()))
{return (this__12613.array[n]);
} else
{return null;
}
});
var G__12656__12658 = (function (coll,n,not_found){
var this__12617 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12623 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12623))
{return (n < this__12617.array.length);
} else
{return and__3546__auto____12623;
}
})()))
{return (this__12617.array[n]);
} else
{return not_found;
}
});
G__12656 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12656__12657.call(this,coll,n);
case  3 :
return G__12656__12658.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12656;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12625 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12625.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12686){
var args = cljs.core.seq( arglist__12686 );;
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
var this__12710 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12774 = null;
var G__12774__12775 = (function (coll,k){
var this__12714 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12774__12776 = (function (coll,k,not_found){
var this__12715 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12774 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12774__12775.call(this,coll,k);
case  3 :
return G__12774__12776.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12774;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12719 = this;
var v_pos__12722 = (this__12719.start + key);

return (new cljs.core.Subvec(this__12719.meta,cljs.core._assoc.call(null,this__12719.v,v_pos__12722,val),this__12719.start,((this__12719.end > (v_pos__12722 + 1)) ? this__12719.end : (v_pos__12722 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12789 = null;
var G__12789__12790 = (function (coll,k){
var this__12726 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12789__12791 = (function (coll,k,not_found){
var this__12727 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12789 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12789__12790.call(this,coll,k);
case  3 :
return G__12789__12791.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12789;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12730 = this;
return (new cljs.core.Subvec(this__12730.meta,cljs.core._assoc_n.call(null,this__12730.v,this__12730.end,o),this__12730.start,(this__12730.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12794 = null;
var G__12794__12795 = (function (coll,f){
var this__12735 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12794__12796 = (function (coll,f,start){
var this__12736 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12794 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12794__12795.call(this,coll,f);
case  3 :
return G__12794__12796.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12794;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12737 = this;
var subvec_seq__12742 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12737.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12737.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12742.call(null,this__12737.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12743 = this;
return (this__12743.end - this__12743.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12748 = this;
return cljs.core._nth.call(null,this__12748.v,(this__12748.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12749 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12749.start,this__12749.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12749.meta,this__12749.v,this__12749.start,(this__12749.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12752 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12754 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12756 = this;
return (new cljs.core.Subvec(meta,this__12756.v,this__12756.start,this__12756.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12761 = this;
return this__12761.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12801 = null;
var G__12801__12802 = (function (coll,n){
var this__12763 = this;
return cljs.core._nth.call(null,this__12763.v,(this__12763.start + n));
});
var G__12801__12803 = (function (coll,n,not_found){
var this__12765 = this;
return cljs.core._nth.call(null,this__12765.v,(this__12765.start + n),not_found);
});
G__12801 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12801__12802.call(this,coll,n);
case  3 :
return G__12801__12803.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12801;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12769 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12769.meta);
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
var subvec__12815 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12816 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12815.call(this,v,start);
case  3 :
return subvec__12816.call(this,v,start,end);
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
var this__12877 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12878 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12879 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12880 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12880.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12881 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12882 = this;
return cljs.core._first.call(null,this__12882.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12883 = this;
var temp__3695__auto____12886 = cljs.core.next.call(null,this__12883.front);

if(cljs.core.truth_(temp__3695__auto____12886))
{var f1__12887 = temp__3695__auto____12886;

return (new cljs.core.PersistentQueueSeq(this__12883.meta,f1__12887,this__12883.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12883.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12883.meta,this__12883.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12888 = this;
return this__12888.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12890 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12890.front,this__12890.rear));
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
var this__12904 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12905 = this;
if(cljs.core.truth_(this__12905.front))
{return (new cljs.core.PersistentQueue(this__12905.meta,(this__12905.count + 1),this__12905.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12906 = this__12905.rear;

if(cljs.core.truth_(or__3548__auto____12906))
{return or__3548__auto____12906;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12905.meta,(this__12905.count + 1),cljs.core.conj.call(null,this__12905.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12907 = this;
var rear__12908 = cljs.core.seq.call(null,this__12907.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12909 = this__12907.front;

if(cljs.core.truth_(or__3548__auto____12909))
{return or__3548__auto____12909;
} else
{return rear__12908;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12907.front,cljs.core.seq.call(null,rear__12908)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12910 = this;
return this__12910.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12913 = this;
return cljs.core._first.call(null,this__12913.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12915 = this;
if(cljs.core.truth_(this__12915.front))
{var temp__3695__auto____12918 = cljs.core.next.call(null,this__12915.front);

if(cljs.core.truth_(temp__3695__auto____12918))
{var f1__12919 = temp__3695__auto____12918;

return (new cljs.core.PersistentQueue(this__12915.meta,(this__12915.count - 1),f1__12919,this__12915.rear));
} else
{return (new cljs.core.PersistentQueue(this__12915.meta,(this__12915.count - 1),cljs.core.seq.call(null,this__12915.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12926 = this;
return cljs.core.first.call(null,this__12926.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12927 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12931 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12935 = this;
return (new cljs.core.PersistentQueue(meta,this__12935.count,this__12935.front,this__12935.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12938 = this;
return this__12938.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12941 = this;
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
var this__12966 = this;
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
var len__12979 = array.length;

var i__12980 = 0;

while(true){
if(cljs.core.truth_((i__12980 < len__12979)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12980]))))
{return i__12980;
} else
{{
var G__12987 = (i__12980 + incr);
i__12980 = G__12987;
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
var obj_map_contains_key_QMARK___13021 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___13022 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____13017 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13017))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13017;
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
return obj_map_contains_key_QMARK___13021.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___13022.call(this,k,strobj,true_val,false_val);
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
var this__13043 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13079 = null;
var G__13079__13080 = (function (coll,k){
var this__13047 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13079__13081 = (function (coll,k,not_found){
var this__13048 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13048.strobj,(this__13048.strobj[k]),not_found);
});
G__13079 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13079__13080.call(this,coll,k);
case  3 :
return G__13079__13081.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13079;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13049 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13050 = goog.object.clone.call(null,this__13049.strobj);
var overwrite_QMARK___13051 = new_strobj__13050.hasOwnProperty(k);

(new_strobj__13050[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13051))
{return (new cljs.core.ObjMap(this__13049.meta,this__13049.keys,new_strobj__13050));
} else
{var new_keys__13052 = cljs.core.aclone.call(null,this__13049.keys);

new_keys__13052.push(k);
return (new cljs.core.ObjMap(this__13049.meta,new_keys__13052,new_strobj__13050));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13049.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13053 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13053.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13143 = null;
var G__13143__13144 = (function (coll,k){
var this__13054 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13143__13145 = (function (coll,k,not_found){
var this__13055 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13143 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13143__13144.call(this,coll,k);
case  3 :
return G__13143__13145.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13143;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13056 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13057 = this;
if(cljs.core.truth_((this__13057.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__13029_SHARP_){
return cljs.core.vector.call(null,p1__13029_SHARP_,(this__13057.strobj[p1__13029_SHARP_]));
}),this__13057.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13059 = this;
return this__13059.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13061 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13063 = this;
return (new cljs.core.ObjMap(meta,this__13063.keys,this__13063.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13065 = this;
return this__13065.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13067 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13067.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13069 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13071 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13071))
{return this__13069.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13071;
}
})()))
{var new_keys__13074 = cljs.core.aclone.call(null,this__13069.keys);
var new_strobj__13076 = goog.object.clone.call(null,this__13069.strobj);

new_keys__13074.splice(cljs.core.scan_array.call(null,1,k,new_keys__13074),1);
cljs.core.js_delete.call(null,new_strobj__13076,k);
return (new cljs.core.ObjMap(this__13069.meta,new_keys__13074,new_strobj__13076));
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
var this__13165 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13252 = null;
var G__13252__13253 = (function (coll,k){
var this__13166 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13252__13254 = (function (coll,k,not_found){
var this__13167 = this;
var bucket__13168 = (this__13167.hashobj[cljs.core.hash.call(null,k)]);
var i__13169 = (cljs.core.truth_(bucket__13168)?cljs.core.scan_array.call(null,2,k,bucket__13168):null);

if(cljs.core.truth_(i__13169))
{return (bucket__13168[(i__13169 + 1)]);
} else
{return not_found;
}
});
G__13252 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13252__13253.call(this,coll,k);
case  3 :
return G__13252__13254.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13252;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13170 = this;
var h__13171 = cljs.core.hash.call(null,k);
var bucket__13172 = (this__13170.hashobj[h__13171]);

if(cljs.core.truth_(bucket__13172))
{var new_bucket__13173 = cljs.core.aclone.call(null,bucket__13172);
var new_hashobj__13174 = goog.object.clone.call(null,this__13170.hashobj);

(new_hashobj__13174[h__13171] = new_bucket__13173);
var temp__3695__auto____13179 = cljs.core.scan_array.call(null,2,k,new_bucket__13173);

if(cljs.core.truth_(temp__3695__auto____13179))
{var i__13180 = temp__3695__auto____13179;

(new_bucket__13173[(i__13180 + 1)] = v);
return (new cljs.core.HashMap(this__13170.meta,this__13170.count,new_hashobj__13174));
} else
{new_bucket__13173.push(k,v);
return (new cljs.core.HashMap(this__13170.meta,(this__13170.count + 1),new_hashobj__13174));
}
} else
{var new_hashobj__13181 = goog.object.clone.call(null,this__13170.hashobj);

(new_hashobj__13181[h__13171] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13170.meta,(this__13170.count + 1),new_hashobj__13181));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13182 = this;
var bucket__13183 = (this__13182.hashobj[cljs.core.hash.call(null,k)]);
var i__13184 = (cljs.core.truth_(bucket__13183)?cljs.core.scan_array.call(null,2,k,bucket__13183):null);

if(cljs.core.truth_(i__13184))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13420 = null;
var G__13420__13421 = (function (coll,k){
var this__13187 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13420__13422 = (function (coll,k,not_found){
var this__13188 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13420 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13420__13421.call(this,coll,k);
case  3 :
return G__13420__13422.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13420;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13190 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13192 = this;
if(cljs.core.truth_((this__13192.count > 0)))
{var hashes__13196 = cljs.core.js_keys.call(null,this__13192.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13154_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13192.hashobj[p1__13154_SHARP_])));
}),hashes__13196);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13199 = this;
return this__13199.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13200 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13202 = this;
return (new cljs.core.HashMap(meta,this__13202.count,this__13202.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13203 = this;
return this__13203.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13206 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13206.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13209 = this;
var h__13245 = cljs.core.hash.call(null,k);
var bucket__13246 = (this__13209.hashobj[h__13245]);
var i__13247 = (cljs.core.truth_(bucket__13246)?cljs.core.scan_array.call(null,2,k,bucket__13246):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13247)))
{return coll;
} else
{var new_hashobj__13248 = goog.object.clone.call(null,this__13209.hashobj);

if(cljs.core.truth_((3 > bucket__13246.length)))
{cljs.core.js_delete.call(null,new_hashobj__13248,h__13245);
} else
{var new_bucket__13249 = cljs.core.aclone.call(null,bucket__13246);

new_bucket__13249.splice(i__13247,2);
(new_hashobj__13248[h__13245] = new_bucket__13249);
}
return (new cljs.core.HashMap(this__13209.meta,(this__13209.count - 1),new_hashobj__13248));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13434 = ks.length;

var i__13435 = 0;
var out__13436 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13435 < len__13434)))
{{
var G__13438 = (i__13435 + 1);
var G__13440 = cljs.core.assoc.call(null,out__13436,(ks[i__13435]),(vs[i__13435]));
i__13435 = G__13438;
out__13436 = G__13440;
continue;
}
} else
{return out__13436;
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
var in$__13441 = cljs.core.seq.call(null,keyvals);
var out__13442 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13441))
{{
var G__13452 = cljs.core.nnext.call(null,in$__13441);
var G__13454 = cljs.core.assoc.call(null,out__13442,cljs.core.first.call(null,in$__13441),cljs.core.second.call(null,in$__13441));
in$__13441 = G__13452;
out__13442 = G__13454;
continue;
}
} else
{return out__13442;
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
hash_map.cljs$lang$applyTo = (function (arglist__13460){
var keyvals = cljs.core.seq( arglist__13460 );;
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
{return cljs.core.reduce.call(null,(function (p1__13471_SHARP_,p2__13472_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13488 = p1__13471_SHARP_;

if(cljs.core.truth_(or__3548__auto____13488))
{return or__3548__auto____13488;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13472_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13504){
var maps = cljs.core.seq( arglist__13504 );;
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
{var merge_entry__13511 = (function (m,e){
var k__13509 = cljs.core.first.call(null,e);
var v__13510 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13509)))
{return cljs.core.assoc.call(null,m,k__13509,f.call(null,cljs.core.get.call(null,m,k__13509),v__13510));
} else
{return cljs.core.assoc.call(null,m,k__13509,v__13510);
}
});
var merge2__13513 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13511,(function (){var or__3548__auto____13512 = m1;

if(cljs.core.truth_(or__3548__auto____13512))
{return or__3548__auto____13512;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13513,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13514){
var f = cljs.core.first(arglist__13514);
var maps = cljs.core.rest(arglist__13514);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13564 = cljs.core.ObjMap.fromObject([],{});
var keys__13566 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13566))
{var key__13570 = cljs.core.first.call(null,keys__13566);
var entry__13571 = cljs.core.get.call(null,map,key__13570,"﷐'user/not-found");

{
var G__13578 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13571,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13564,key__13570,entry__13571):ret__13564);
var G__13579 = cljs.core.next.call(null,keys__13566);
ret__13564 = G__13578;
keys__13566 = G__13579;
continue;
}
} else
{return ret__13564;
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
var this__13588 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13616 = null;
var G__13616__13617 = (function (coll,v){
var this__13590 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13616__13618 = (function (coll,v,not_found){
var this__13591 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13591.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13616 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13616__13617.call(this,coll,v);
case  3 :
return G__13616__13618.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13616;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13622 = null;
var G__13622__13623 = (function (coll,k){
var this__13593 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13622__13624 = (function (coll,k,not_found){
var this__13595 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13622 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13622__13623.call(this,coll,k);
case  3 :
return G__13622__13624.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13622;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13598 = this;
return (new cljs.core.Set(this__13598.meta,cljs.core.assoc.call(null,this__13598.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13601 = this;
return cljs.core.keys.call(null,this__13601.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13602 = this;
return (new cljs.core.Set(this__13602.meta,cljs.core.dissoc.call(null,this__13602.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13603 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13606 = this;
var and__3546__auto____13607 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13607))
{var and__3546__auto____13608 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13608))
{return cljs.core.every_QMARK_.call(null,(function (p1__13520_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13520_SHARP_);
}),other);
} else
{return and__3546__auto____13608;
}
} else
{return and__3546__auto____13607;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13610 = this;
return (new cljs.core.Set(meta,this__13610.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13612 = this;
return this__13612.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13614 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13614.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13644 = cljs.core.seq.call(null,coll);
var out__13645 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13644))))
{{
var G__13649 = cljs.core.rest.call(null,in$__13644);
var G__13650 = cljs.core.conj.call(null,out__13645,cljs.core.first.call(null,in$__13644));
in$__13644 = G__13649;
out__13645 = G__13650;
continue;
}
} else
{return out__13645;
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
{var n__13660 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13662 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13662))
{var e__13664 = temp__3695__auto____13662;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13664));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13660,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13642_SHARP_){
var temp__3695__auto____13666 = cljs.core.find.call(null,smap,p1__13642_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13666))
{var e__13667 = temp__3695__auto____13666;

return cljs.core.second.call(null,e__13667);
} else
{return p1__13642_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13682 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13672,seen){
while(true){
var vec__13676__13677 = p__13672;
var f__13678 = cljs.core.nth.call(null,vec__13676__13677,0,null);
var xs__13679 = vec__13676__13677;

var temp__3698__auto____13680 = cljs.core.seq.call(null,xs__13679);

if(cljs.core.truth_(temp__3698__auto____13680))
{var s__13681 = temp__3698__auto____13680;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13678)))
{{
var G__13784 = cljs.core.rest.call(null,s__13681);
var G__13785 = seen;
p__13672 = G__13784;
seen = G__13785;
continue;
}
} else
{return cljs.core.cons.call(null,f__13678,step.call(null,cljs.core.rest.call(null,s__13681),cljs.core.conj.call(null,seen,f__13678)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13682.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13791 = cljs.core.Vector.fromArray([]);
var s__13792 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13792)))
{{
var G__13793 = cljs.core.conj.call(null,ret__13791,cljs.core.first.call(null,s__13792));
var G__13794 = cljs.core.next.call(null,s__13792);
ret__13791 = G__13793;
s__13792 = G__13794;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13791);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13800 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13800))
{return or__3548__auto____13800;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13802 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13802 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13802 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13813 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13813))
{return or__3548__auto____13813;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13815 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13815 > -1)))
{return cljs.core.subs.call(null,x,2,i__13815);
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
var map__13823 = cljs.core.ObjMap.fromObject([],{});
var ks__13824 = cljs.core.seq.call(null,keys);
var vs__13825 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13828 = ks__13824;

if(cljs.core.truth_(and__3546__auto____13828))
{return vs__13825;
} else
{return and__3546__auto____13828;
}
})()))
{{
var G__13848 = cljs.core.assoc.call(null,map__13823,cljs.core.first.call(null,ks__13824),cljs.core.first.call(null,vs__13825));
var G__13849 = cljs.core.next.call(null,ks__13824);
var G__13850 = cljs.core.next.call(null,vs__13825);
map__13823 = G__13848;
ks__13824 = G__13849;
vs__13825 = G__13850;
continue;
}
} else
{return map__13823;
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
var max_key__13858 = (function (k,x){
return x;
});
var max_key__13859 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13860 = (function() { 
var G__13862__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13820_SHARP_,p2__13821_SHARP_){
return max_key.call(null,k,p1__13820_SHARP_,p2__13821_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13862 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13862__delegate.call(this, k, x, y, more);
};
G__13862.cljs$lang$maxFixedArity = 3;
G__13862.cljs$lang$applyTo = (function (arglist__13863){
var k = cljs.core.first(arglist__13863);
var x = cljs.core.first(cljs.core.next(arglist__13863));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13863)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13863)));
return G__13862__delegate.call(this, k, x, y, more);
});
return G__13862;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13858.call(this,k,x);
case  3 :
return max_key__13859.call(this,k,x,y);
default:
return max_key__13860.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13860.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13864 = (function (k,x){
return x;
});
var min_key__13865 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13866 = (function() { 
var G__13868__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13851_SHARP_,p2__13852_SHARP_){
return min_key.call(null,k,p1__13851_SHARP_,p2__13852_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13868 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13868__delegate.call(this, k, x, y, more);
};
G__13868.cljs$lang$maxFixedArity = 3;
G__13868.cljs$lang$applyTo = (function (arglist__13869){
var k = cljs.core.first(arglist__13869);
var x = cljs.core.first(cljs.core.next(arglist__13869));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13869)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13869)));
return G__13868__delegate.call(this, k, x, y, more);
});
return G__13868;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13864.call(this,k,x);
case  3 :
return min_key__13865.call(this,k,x,y);
default:
return min_key__13866.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13866.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13877 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13878 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13873 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13873))
{var s__13876 = temp__3698__auto____13873;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13876),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13876)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13877.call(this,n,step);
case  3 :
return partition_all__13878.call(this,n,step,coll);
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
var temp__3698__auto____13943 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13943))
{var s__13946 = temp__3698__auto____13943;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13946))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13946),take_while.call(null,pred,cljs.core.rest.call(null,s__13946)));
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
var this__13969 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13972 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__14038 = null;
var G__14038__14039 = (function (rng,f){
var this__13974 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__14038__14040 = (function (rng,f,s){
var this__13975 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__14038 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__14038__14039.call(this,rng,f);
case  3 :
return G__14038__14040.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14038;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13976 = this;
var comp__13978 = (cljs.core.truth_((this__13976.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13978.call(null,this__13976.start,this__13976.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13979 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13979.end - this__13979.start) / this__13979.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13980 = this;
return this__13980.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13981 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13981.meta,(this__13981.start + this__13981.step),this__13981.end,this__13981.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13982 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13987 = this;
return (new cljs.core.Range(meta,this__13987.start,this__13987.end,this__13987.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13996 = this;
return this__13996.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14054 = null;
var G__14054__14056 = (function (rng,n){
var this__14005 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14005.start + (n * this__14005.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14012 = (this__14005.start > this__14005.end);

if(cljs.core.truth_(and__3546__auto____14012))
{return cljs.core._EQ_.call(null,this__14005.step,0);
} else
{return and__3546__auto____14012;
}
})()))
{return this__14005.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14054__14057 = (function (rng,n,not_found){
var this__14015 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14015.start + (n * this__14015.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14030 = (this__14015.start > this__14015.end);

if(cljs.core.truth_(and__3546__auto____14030))
{return cljs.core._EQ_.call(null,this__14015.step,0);
} else
{return and__3546__auto____14030;
}
})()))
{return this__14015.start;
} else
{return not_found;
}
}
});
G__14054 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14054__14056.call(this,rng,n);
case  3 :
return G__14054__14057.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14054;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__14032 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14032.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14068 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14069 = (function (end){
return range.call(null,0,end,1);
});
var range__14070 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14071 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14068.call(this);
case  1 :
return range__14069.call(this,start);
case  2 :
return range__14070.call(this,start,end);
case  3 :
return range__14071.call(this,start,end,step);
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
var temp__3698__auto____14073 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14073))
{var s__14075 = temp__3698__auto____14073;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14075),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14075)));
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
var temp__3698__auto____14107 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14107))
{var s__14108 = temp__3698__auto____14107;

var fst__14109 = cljs.core.first.call(null,s__14108);
var fv__14110 = f.call(null,fst__14109);
var run__14112 = cljs.core.cons.call(null,fst__14109,cljs.core.take_while.call(null,(function (p1__14083_SHARP_){
return cljs.core._EQ_.call(null,fv__14110,f.call(null,p1__14083_SHARP_));
}),cljs.core.next.call(null,s__14108)));

return cljs.core.cons.call(null,run__14112,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14112),s__14108))));
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
var reductions__14203 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14177 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14177))
{var s__14178 = temp__3695__auto____14177;

return reductions.call(null,f,cljs.core.first.call(null,s__14178),cljs.core.rest.call(null,s__14178));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14204 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14186 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14186))
{var s__14187 = temp__3698__auto____14186;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14187)),cljs.core.rest.call(null,s__14187));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14203.call(this,f,init);
case  3 :
return reductions__14204.call(this,f,init,coll);
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
var juxt__14290 = (function (f){
return (function() {
var G__14295 = null;
var G__14295__14296 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14295__14297 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14295__14298 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14295__14299 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14295__14300 = (function() { 
var G__14302__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14302 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14302__delegate.call(this, x, y, z, args);
};
G__14302.cljs$lang$maxFixedArity = 3;
G__14302.cljs$lang$applyTo = (function (arglist__14303){
var x = cljs.core.first(arglist__14303);
var y = cljs.core.first(cljs.core.next(arglist__14303));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14303)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14303)));
return G__14302__delegate.call(this, x, y, z, args);
});
return G__14302;
})()
;
G__14295 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14295__14296.call(this);
case  1 :
return G__14295__14297.call(this,x);
case  2 :
return G__14295__14298.call(this,x,y);
case  3 :
return G__14295__14299.call(this,x,y,z);
default:
return G__14295__14300.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14295.cljs$lang$maxFixedArity = 3;
G__14295.cljs$lang$applyTo = G__14295__14300.cljs$lang$applyTo;
return G__14295;
})()
});
var juxt__14291 = (function (f,g){
return (function() {
var G__14304 = null;
var G__14304__14305 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14304__14306 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14304__14307 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14304__14308 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14304__14309 = (function() { 
var G__14318__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14318 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14318__delegate.call(this, x, y, z, args);
};
G__14318.cljs$lang$maxFixedArity = 3;
G__14318.cljs$lang$applyTo = (function (arglist__14320){
var x = cljs.core.first(arglist__14320);
var y = cljs.core.first(cljs.core.next(arglist__14320));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14320)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14320)));
return G__14318__delegate.call(this, x, y, z, args);
});
return G__14318;
})()
;
G__14304 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14304__14305.call(this);
case  1 :
return G__14304__14306.call(this,x);
case  2 :
return G__14304__14307.call(this,x,y);
case  3 :
return G__14304__14308.call(this,x,y,z);
default:
return G__14304__14309.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14304.cljs$lang$maxFixedArity = 3;
G__14304.cljs$lang$applyTo = G__14304__14309.cljs$lang$applyTo;
return G__14304;
})()
});
var juxt__14292 = (function (f,g,h){
return (function() {
var G__14326 = null;
var G__14326__14328 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14326__14329 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14326__14331 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14326__14332 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14326__14334 = (function() { 
var G__14340__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14340 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14340__delegate.call(this, x, y, z, args);
};
G__14340.cljs$lang$maxFixedArity = 3;
G__14340.cljs$lang$applyTo = (function (arglist__14345){
var x = cljs.core.first(arglist__14345);
var y = cljs.core.first(cljs.core.next(arglist__14345));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14345)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14345)));
return G__14340__delegate.call(this, x, y, z, args);
});
return G__14340;
})()
;
G__14326 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14326__14328.call(this);
case  1 :
return G__14326__14329.call(this,x);
case  2 :
return G__14326__14331.call(this,x,y);
case  3 :
return G__14326__14332.call(this,x,y,z);
default:
return G__14326__14334.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14326.cljs$lang$maxFixedArity = 3;
G__14326.cljs$lang$applyTo = G__14326__14334.cljs$lang$applyTo;
return G__14326;
})()
});
var juxt__14293 = (function() { 
var G__14347__delegate = function (f,g,h,fs){
var fs__14288 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14348 = null;
var G__14348__14349 = (function (){
return cljs.core.reduce.call(null,(function (p1__14135_SHARP_,p2__14137_SHARP_){
return cljs.core.conj.call(null,p1__14135_SHARP_,p2__14137_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14288);
});
var G__14348__14350 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14140_SHARP_,p2__14141_SHARP_){
return cljs.core.conj.call(null,p1__14140_SHARP_,p2__14141_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14288);
});
var G__14348__14351 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14144_SHARP_,p2__14145_SHARP_){
return cljs.core.conj.call(null,p1__14144_SHARP_,p2__14145_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14288);
});
var G__14348__14352 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14146_SHARP_,p2__14154_SHARP_){
return cljs.core.conj.call(null,p1__14146_SHARP_,p2__14154_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14288);
});
var G__14348__14353 = (function() { 
var G__14356__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14161_SHARP_,p2__14162_SHARP_){
return cljs.core.conj.call(null,p1__14161_SHARP_,cljs.core.apply.call(null,p2__14162_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14288);
};
var G__14356 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14356__delegate.call(this, x, y, z, args);
};
G__14356.cljs$lang$maxFixedArity = 3;
G__14356.cljs$lang$applyTo = (function (arglist__14357){
var x = cljs.core.first(arglist__14357);
var y = cljs.core.first(cljs.core.next(arglist__14357));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14357)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14357)));
return G__14356__delegate.call(this, x, y, z, args);
});
return G__14356;
})()
;
G__14348 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14348__14349.call(this);
case  1 :
return G__14348__14350.call(this,x);
case  2 :
return G__14348__14351.call(this,x,y);
case  3 :
return G__14348__14352.call(this,x,y,z);
default:
return G__14348__14353.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14348.cljs$lang$maxFixedArity = 3;
G__14348.cljs$lang$applyTo = G__14348__14353.cljs$lang$applyTo;
return G__14348;
})()
};
var G__14347 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14347__delegate.call(this, f, g, h, fs);
};
G__14347.cljs$lang$maxFixedArity = 3;
G__14347.cljs$lang$applyTo = (function (arglist__14358){
var f = cljs.core.first(arglist__14358);
var g = cljs.core.first(cljs.core.next(arglist__14358));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14358)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14358)));
return G__14347__delegate.call(this, f, g, h, fs);
});
return G__14347;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14290.call(this,f);
case  2 :
return juxt__14291.call(this,f,g);
case  3 :
return juxt__14292.call(this,f,g,h);
default:
return juxt__14293.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14293.cljs$lang$applyTo;
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
var dorun__14369 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14375 = cljs.core.next.call(null,coll);
coll = G__14375;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14370 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14362 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14362))
{return (n > 0);
} else
{return and__3546__auto____14362;
}
})()))
{{
var G__14377 = (n - 1);
var G__14378 = cljs.core.next.call(null,coll);
n = G__14377;
coll = G__14378;
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
return dorun__14369.call(this,n);
case  2 :
return dorun__14370.call(this,n,coll);
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
var doall__14382 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14383 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14382.call(this,n);
case  2 :
return doall__14383.call(this,n,coll);
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
var matches__14417 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14417),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14417),1)))
{return cljs.core.first.call(null,matches__14417);
} else
{return cljs.core.vec.call(null,matches__14417);
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
var matches__14493 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14493)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14493),1)))
{return cljs.core.first.call(null,matches__14493);
} else
{return cljs.core.vec.call(null,matches__14493);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14502 = cljs.core.re_find.call(null,re,s);
var match_idx__14504 = s.search(re);
var match_str__14505 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14502))?cljs.core.first.call(null,match_data__14502):match_data__14502);
var post_match__14506 = cljs.core.subs.call(null,s,(match_idx__14504 + cljs.core.count.call(null,match_str__14505)));

if(cljs.core.truth_(match_data__14502))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14502,re_seq.call(null,re,post_match__14506));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14513_SHARP_){
return print_one.call(null,p1__14513_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14519 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14519))
{var and__3546__auto____14527 = (function (){var x__445__auto____14521 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14522 = x__445__auto____14521;

if(cljs.core.truth_(and__3546__auto____14522))
{var and__3546__auto____14524 = x__445__auto____14521.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14524))
{return cljs.core.not.call(null,x__445__auto____14521.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14524;
}
} else
{return and__3546__auto____14522;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14521);
}
})();

if(cljs.core.truth_(and__3546__auto____14527))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14527;
}
} else
{return and__3546__auto____14519;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14528 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14529 = x__445__auto____14528;

if(cljs.core.truth_(and__3546__auto____14529))
{var and__3546__auto____14530 = x__445__auto____14528.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14530))
{return cljs.core.not.call(null,x__445__auto____14528.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14530;
}
} else
{return and__3546__auto____14529;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14528);
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
var first_obj__14536 = cljs.core.first.call(null,objs);
var sb__14537 = (new goog.string.StringBuffer());

var G__14538__14539 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14538__14539))
{var obj__14540 = cljs.core.first.call(null,G__14538__14539);
var G__14538__14541 = G__14538__14539;

while(true){
if(cljs.core.truth_((obj__14540 === first_obj__14536)))
{} else
{sb__14537.append(" ");
}
var G__14543__14544 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14540,opts));

if(cljs.core.truth_(G__14543__14544))
{var string__14545 = cljs.core.first.call(null,G__14543__14544);
var G__14543__14546 = G__14543__14544;

while(true){
sb__14537.append(string__14545);
var temp__3698__auto____14547 = cljs.core.next.call(null,G__14543__14546);

if(cljs.core.truth_(temp__3698__auto____14547))
{var G__14543__14548 = temp__3698__auto____14547;

{
var G__14556 = cljs.core.first.call(null,G__14543__14548);
var G__14557 = G__14543__14548;
string__14545 = G__14556;
G__14543__14546 = G__14557;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14549 = cljs.core.next.call(null,G__14538__14541);

if(cljs.core.truth_(temp__3698__auto____14549))
{var G__14538__14550 = temp__3698__auto____14549;

{
var G__14559 = cljs.core.first.call(null,G__14538__14550);
var G__14560 = G__14538__14550;
obj__14540 = G__14559;
G__14538__14541 = G__14560;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14537);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14561 = cljs.core.first.call(null,objs);

var G__14562__14563 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14562__14563))
{var obj__14656 = cljs.core.first.call(null,G__14562__14563);
var G__14562__14657 = G__14562__14563;

while(true){
if(cljs.core.truth_((obj__14656 === first_obj__14561)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14659__14663 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14656,opts));

if(cljs.core.truth_(G__14659__14663))
{var string__14665 = cljs.core.first.call(null,G__14659__14663);
var G__14659__14666 = G__14659__14663;

while(true){
cljs.core.string_print.call(null,string__14665);
var temp__3698__auto____14671 = cljs.core.next.call(null,G__14659__14666);

if(cljs.core.truth_(temp__3698__auto____14671))
{var G__14659__14674 = temp__3698__auto____14671;

{
var G__14689 = cljs.core.first.call(null,G__14659__14674);
var G__14690 = G__14659__14674;
string__14665 = G__14689;
G__14659__14666 = G__14690;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14678 = cljs.core.next.call(null,G__14562__14657);

if(cljs.core.truth_(temp__3698__auto____14678))
{var G__14562__14679 = temp__3698__auto____14678;

{
var G__14692 = cljs.core.first.call(null,G__14562__14679);
var G__14693 = G__14562__14679;
obj__14656 = G__14692;
G__14562__14657 = G__14693;
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
pr_str.cljs$lang$applyTo = (function (arglist__14706){
var objs = cljs.core.seq( arglist__14706 );;
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
pr.cljs$lang$applyTo = (function (arglist__14722){
var objs = cljs.core.seq( arglist__14722 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14727){
var objs = cljs.core.seq( arglist__14727 );;
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
println.cljs$lang$applyTo = (function (arglist__14745){
var objs = cljs.core.seq( arglist__14745 );;
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
prn.cljs$lang$applyTo = (function (arglist__14758){
var objs = cljs.core.seq( arglist__14758 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14763 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14763,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14769 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14769))
{var nspc__14770 = temp__3698__auto____14769;

return cljs.core.str.call(null,nspc__14770,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14771 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14771))
{var nspc__14772 = temp__3698__auto____14771;

return cljs.core.str.call(null,nspc__14772,"/");
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
var pr_pair__14774 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14774,"{",", ","}",opts,coll);
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
var this__14785 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14786 = this;
var G__14787__14788 = cljs.core.seq.call(null,this__14786.watches);

if(cljs.core.truth_(G__14787__14788))
{var G__14790__14792 = cljs.core.first.call(null,G__14787__14788);
var vec__14791__14793 = G__14790__14792;
var key__14794 = cljs.core.nth.call(null,vec__14791__14793,0,null);
var f__14795 = cljs.core.nth.call(null,vec__14791__14793,1,null);
var G__14787__14796 = G__14787__14788;

var G__14790__14797 = G__14790__14792;
var G__14787__14798 = G__14787__14796;

while(true){
var vec__14801__14802 = G__14790__14797;
var key__14804 = cljs.core.nth.call(null,vec__14801__14802,0,null);
var f__14805 = cljs.core.nth.call(null,vec__14801__14802,1,null);
var G__14787__14806 = G__14787__14798;

f__14805.call(null,key__14804,this$,oldval,newval);
var temp__3698__auto____14808 = cljs.core.next.call(null,G__14787__14806);

if(cljs.core.truth_(temp__3698__auto____14808))
{var G__14787__14810 = temp__3698__auto____14808;

{
var G__14821 = cljs.core.first.call(null,G__14787__14810);
var G__14822 = G__14787__14810;
G__14790__14797 = G__14821;
G__14787__14798 = G__14822;
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
var this__14814 = this;
return this$.watches = cljs.core.assoc.call(null,this__14814.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14815 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14815.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14817 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14817.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14818 = this;
return this__14818.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14819 = this;
return this__14819.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14820 = this;
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
var atom__14844 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14845 = (function() { 
var G__14848__delegate = function (x,p__14831){
var map__14833__14834 = p__14831;
var map__14833__14836 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14833__14834))?cljs.core.apply.call(null,cljs.core.hash_map,map__14833__14834):map__14833__14834);
var validator__14837 = cljs.core.get.call(null,map__14833__14836,"﷐'validator");
var meta__14838 = cljs.core.get.call(null,map__14833__14836,"﷐'meta");

return (new cljs.core.Atom(x,meta__14838,validator__14837,null));
};
var G__14848 = function (x,var_args){
var p__14831 = null;
if (goog.isDef(var_args)) {
  p__14831 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14848__delegate.call(this, x, p__14831);
};
G__14848.cljs$lang$maxFixedArity = 1;
G__14848.cljs$lang$applyTo = (function (arglist__14850){
var x = cljs.core.first(arglist__14850);
var p__14831 = cljs.core.rest(arglist__14850);
return G__14848__delegate.call(this, x, p__14831);
});
return G__14848;
})()
;
atom = function(x,var_args){
var p__14831 = var_args;
switch(arguments.length){
case  1 :
return atom__14844.call(this,x);
default:
return atom__14845.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14845.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14852 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14852))
{var validate__14853 = temp__3698__auto____14852;

if(cljs.core.truth_(validate__14853.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14872 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14872,new_value);
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
var swap_BANG___14919 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14920 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14921 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14922 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14923 = (function() { 
var G__14928__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14928 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14928__delegate.call(this, a, f, x, y, z, more);
};
G__14928.cljs$lang$maxFixedArity = 5;
G__14928.cljs$lang$applyTo = (function (arglist__14955){
var a = cljs.core.first(arglist__14955);
var f = cljs.core.first(cljs.core.next(arglist__14955));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14955)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14955))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14955)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14955)))));
return G__14928__delegate.call(this, a, f, x, y, z, more);
});
return G__14928;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14919.call(this,a,f);
case  3 :
return swap_BANG___14920.call(this,a,f,x);
case  4 :
return swap_BANG___14921.call(this,a,f,x,y);
case  5 :
return swap_BANG___14922.call(this,a,f,x,y,z);
default:
return swap_BANG___14923.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14923.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14969){
var iref = cljs.core.first(arglist__14969);
var f = cljs.core.first(cljs.core.next(arglist__14969));
var args = cljs.core.rest(cljs.core.next(arglist__14969));
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
var gensym__14994 = (function (){
return gensym.call(null,"G__");
});
var gensym__14995 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14994.call(this);
case  1 :
return gensym__14995.call(this,prefix_string);
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
var this__15012 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__15012.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15013 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__15013.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__15013.state,this__15013.f);
}
return cljs.core.deref.call(null,this__15013.state);
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
delay.cljs$lang$applyTo = (function (arglist__15016){
var body = cljs.core.seq( arglist__15016 );;
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
var map__15064__15065 = options;
var map__15064__15066 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15064__15065))?cljs.core.apply.call(null,cljs.core.hash_map,map__15064__15065):map__15064__15065);
var keywordize_keys__15067 = cljs.core.get.call(null,map__15064__15066,"﷐'keywordize-keys");
var keyfn__15068 = (cljs.core.truth_(keywordize_keys__15067)?cljs.core.keyword:cljs.core.str);
var f__15083 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15080 = (function iter__15070(s__15071){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15071__15076 = s__15071;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15071__15076)))
{var k__15077 = cljs.core.first.call(null,s__15071__15076);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15068.call(null,k__15077),thisfn.call(null,(x[k__15077]))]),iter__15070.call(null,cljs.core.rest.call(null,s__15071__15076)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15080.call(null,cljs.core.js_keys.call(null,x));
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

return f__15083.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15086){
var x = cljs.core.first(arglist__15086);
var options = cljs.core.rest(arglist__15086);
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
var mem__15087 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15097__delegate = function (args){
var temp__3695__auto____15090 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15087),args);

if(cljs.core.truth_(temp__3695__auto____15090))
{var v__15091 = temp__3695__auto____15090;

return v__15091;
} else
{var ret__15093 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15087,cljs.core.assoc,args,ret__15093);
return ret__15093;
}
};
var G__15097 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15097__delegate.call(this, args);
};
G__15097.cljs$lang$maxFixedArity = 0;
G__15097.cljs$lang$applyTo = (function (arglist__15107){
var args = cljs.core.seq( arglist__15107 );;
return G__15097__delegate.call(this, args);
});
return G__15097;
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
var trampoline__15115 = (function (f){
while(true){
var ret__15112 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15112)))
{{
var G__15118 = ret__15112;
f = G__15118;
continue;
}
} else
{return ret__15112;
}
break;
}
});
var trampoline__15116 = (function() { 
var G__15119__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15119 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15119__delegate.call(this, f, args);
};
G__15119.cljs$lang$maxFixedArity = 1;
G__15119.cljs$lang$applyTo = (function (arglist__15120){
var f = cljs.core.first(arglist__15120);
var args = cljs.core.rest(arglist__15120);
return G__15119__delegate.call(this, f, args);
});
return G__15119;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15115.call(this,f);
default:
return trampoline__15116.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15116.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15121 = (function (){
return rand.call(null,1);
});
var rand__15122 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15121.call(this);
case  1 :
return rand__15122.call(this,n);
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
var k__15152 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15152,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15152,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15176 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15178 = (function (h,child,parent){
var or__3548__auto____15158 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15158))
{return or__3548__auto____15158;
} else
{var or__3548__auto____15160 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15160))
{return or__3548__auto____15160;
} else
{var and__3546__auto____15163 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15163))
{var and__3546__auto____15165 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15165))
{var and__3546__auto____15166 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15166))
{var ret__15168 = true;
var i__15169 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15172 = cljs.core.not.call(null,ret__15168);

if(cljs.core.truth_(or__3548__auto____15172))
{return or__3548__auto____15172;
} else
{return cljs.core._EQ_.call(null,i__15169,cljs.core.count.call(null,parent));
}
})()))
{return ret__15168;
} else
{{
var G__15184 = isa_QMARK_.call(null,h,child.call(null,i__15169),parent.call(null,i__15169));
var G__15185 = (i__15169 + 1);
ret__15168 = G__15184;
i__15169 = G__15185;
continue;
}
}
break;
}
} else
{return and__3546__auto____15166;
}
} else
{return and__3546__auto____15165;
}
} else
{return and__3546__auto____15163;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15176.call(this,h,child);
case  3 :
return isa_QMARK___15178.call(this,h,child,parent);
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
var parents__15189 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15190 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15189.call(this,h);
case  2 :
return parents__15190.call(this,h,tag);
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
var ancestors__15192 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15193 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15192.call(this,h);
case  2 :
return ancestors__15193.call(this,h,tag);
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
var descendants__15203 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15204 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15203.call(this,h);
case  2 :
return descendants__15204.call(this,h,tag);
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
var derive__15286 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15287 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15260 = "﷐'parents".call(null,h);
var td__15262 = "﷐'descendants".call(null,h);
var ta__15263 = "﷐'ancestors".call(null,h);
var tf__15268 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15279 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15260.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15263.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15263.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15260,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15268.call(null,"﷐'ancestors".call(null,h),tag,td__15262,parent,ta__15263),"﷐'descendants":tf__15268.call(null,"﷐'descendants".call(null,h),parent,ta__15263,tag,td__15262)});
})());

if(cljs.core.truth_(or__3548__auto____15279))
{return or__3548__auto____15279;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15286.call(this,h,tag);
case  3 :
return derive__15287.call(this,h,tag,parent);
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
var underive__15331 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15332 = (function (h,tag,parent){
var parentMap__15316 = "﷐'parents".call(null,h);
var childsParents__15317 = (cljs.core.truth_(parentMap__15316.call(null,tag))?cljs.core.disj.call(null,parentMap__15316.call(null,tag),parent):cljs.core.set([]));
var newParents__15319 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15317))?cljs.core.assoc.call(null,parentMap__15316,tag,childsParents__15317):cljs.core.dissoc.call(null,parentMap__15316,tag));
var deriv_seq__15321 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15210_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15210_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15210_SHARP_),cljs.core.second.call(null,p1__15210_SHARP_)));
}),cljs.core.seq.call(null,newParents__15319)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15316.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15211_SHARP_,p2__15213_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15211_SHARP_,p2__15213_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15321));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15331.call(this,h,tag);
case  3 :
return underive__15332.call(this,h,tag,parent);
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
var xprefs__15342 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15345 = (cljs.core.truth_((function (){var and__3546__auto____15344 = xprefs__15342;

if(cljs.core.truth_(and__3546__auto____15344))
{return xprefs__15342.call(null,y);
} else
{return and__3546__auto____15344;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15345))
{return or__3548__auto____15345;
} else
{var or__3548__auto____15349 = (function (){var ps__15347 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15347) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15347),prefer_table)))
{} else
{}
{
var G__15362 = cljs.core.rest.call(null,ps__15347);
ps__15347 = G__15362;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15349))
{return or__3548__auto____15349;
} else
{var or__3548__auto____15356 = (function (){var ps__15352 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15352) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15352),y,prefer_table)))
{} else
{}
{
var G__15366 = cljs.core.rest.call(null,ps__15352);
ps__15352 = G__15366;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15356))
{return or__3548__auto____15356;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15370 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15370))
{return or__3548__auto____15370;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15425 = cljs.core.reduce.call(null,(function (be,p__15411){
var vec__15412__15413 = p__15411;
var k__15415 = cljs.core.nth.call(null,vec__15412__15413,0,null);
var ___15416 = cljs.core.nth.call(null,vec__15412__15413,1,null);
var e__15417 = vec__15412__15413;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15415)))
{var be2__15421 = (cljs.core.truth_((function (){var or__3548__auto____15420 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15420))
{return or__3548__auto____15420;
} else
{return cljs.core.dominates.call(null,k__15415,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15417:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15421),k__15415,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15415," and ",cljs.core.first.call(null,be2__15421),", and neither is preferred")));
}
return be2__15421;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15425))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15425));
return cljs.core.second.call(null,best_entry__15425);
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
if(cljs.core.truth_((function (){var and__3546__auto____15429 = mf;

if(cljs.core.truth_(and__3546__auto____15429))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15429;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15432 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15432))
{return or__3548__auto____15432;
} else
{var or__3548__auto____15433 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15433))
{return or__3548__auto____15433;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15434 = mf;

if(cljs.core.truth_(and__3546__auto____15434))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15434;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15436 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15436))
{return or__3548__auto____15436;
} else
{var or__3548__auto____15438 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15438))
{return or__3548__auto____15438;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15440 = mf;

if(cljs.core.truth_(and__3546__auto____15440))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15440;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15441 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15441))
{return or__3548__auto____15441;
} else
{var or__3548__auto____15443 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15443))
{return or__3548__auto____15443;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15445 = mf;

if(cljs.core.truth_(and__3546__auto____15445))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15445;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15447 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15447))
{return or__3548__auto____15447;
} else
{var or__3548__auto____15448 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15448))
{return or__3548__auto____15448;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15450 = mf;

if(cljs.core.truth_(and__3546__auto____15450))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15450;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15452 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15452))
{return or__3548__auto____15452;
} else
{var or__3548__auto____15454 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15454))
{return or__3548__auto____15454;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15455 = mf;

if(cljs.core.truth_(and__3546__auto____15455))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15455;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15457 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15457))
{return or__3548__auto____15457;
} else
{var or__3548__auto____15458 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15458))
{return or__3548__auto____15458;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15461 = mf;

if(cljs.core.truth_(and__3546__auto____15461))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15461;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15462 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15462))
{return or__3548__auto____15462;
} else
{var or__3548__auto____15463 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15463))
{return or__3548__auto____15463;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15465 = mf;

if(cljs.core.truth_(and__3546__auto____15465))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15465;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15468 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15468))
{return or__3548__auto____15468;
} else
{var or__3548__auto____15469 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15469))
{return or__3548__auto____15469;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15486 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15487 = cljs.core._get_method.call(null,mf,dispatch_val__15486);

if(cljs.core.truth_(target_fn__15487))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15486)));
}
return cljs.core.apply.call(null,target_fn__15487,args);
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
var this__15516 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15519 = this;
cljs.core.swap_BANG_.call(null,this__15519.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15519.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15519.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15519.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15528 = this;
cljs.core.swap_BANG_.call(null,this__15528.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15528.method_cache,this__15528.method_table,this__15528.cached_hierarchy,this__15528.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15536 = this;
cljs.core.swap_BANG_.call(null,this__15536.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15536.method_cache,this__15536.method_table,this__15536.cached_hierarchy,this__15536.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15539 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15539.cached_hierarchy),cljs.core.deref.call(null,this__15539.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15539.method_cache,this__15539.method_table,this__15539.cached_hierarchy,this__15539.hierarchy);
}
var temp__3695__auto____15555 = cljs.core.deref.call(null,this__15539.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15555))
{var target_fn__15556 = temp__3695__auto____15555;

return target_fn__15556;
} else
{var temp__3695__auto____15557 = cljs.core.find_and_cache_best_method.call(null,this__15539.name,dispatch_val,this__15539.hierarchy,this__15539.method_table,this__15539.prefer_table,this__15539.method_cache,this__15539.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15557))
{var target_fn__15558 = temp__3695__auto____15557;

return target_fn__15558;
} else
{return cljs.core.deref.call(null,this__15539.method_table).call(null,this__15539.default_dispatch_val);
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
var this__15560 = this;
return cljs.core.deref.call(null,this__15560.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15561 = this;
return cljs.core.deref.call(null,this__15561.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15562 = this;
return cljs.core.do_dispatch.call(null,mf,this__15562.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15578__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15578 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15578__delegate.call(this, _, args);
};
G__15578.cljs$lang$maxFixedArity = 1;
G__15578.cljs$lang$applyTo = (function (arglist__15579){
var _ = cljs.core.first(arglist__15579);
var args = cljs.core.rest(arglist__15579);
return G__15578__delegate.call(this, _, args);
});
return G__15578;
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
