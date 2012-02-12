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
var or__3548__auto____7249 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7249))
{return or__3548__auto____7249;
} else
{var or__3548__auto____7250 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7250))
{return or__3548__auto____7250;
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
if(cljs.core.truth_((function (){var and__3546__auto____7253 = this$;

if(cljs.core.truth_(and__3546__auto____7253))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7253;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7254 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7254))
{return or__3548__auto____7254;
} else
{var or__3548__auto____7255 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7255))
{return or__3548__auto____7255;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7661 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7256 = this$;

if(cljs.core.truth_(and__3546__auto____7256))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7256;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7300 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7300))
{return or__3548__auto____7300;
} else
{var or__3548__auto____7303 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7303))
{return or__3548__auto____7303;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7662 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7307 = this$;

if(cljs.core.truth_(and__3546__auto____7307))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7307;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7311 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7311))
{return or__3548__auto____7311;
} else
{var or__3548__auto____7313 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7313))
{return or__3548__auto____7313;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7663 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7316 = this$;

if(cljs.core.truth_(and__3546__auto____7316))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7316;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7319 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7319))
{return or__3548__auto____7319;
} else
{var or__3548__auto____7321 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7321))
{return or__3548__auto____7321;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7664 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7325 = this$;

if(cljs.core.truth_(and__3546__auto____7325))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7325;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7329 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7329))
{return or__3548__auto____7329;
} else
{var or__3548__auto____7330 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7330))
{return or__3548__auto____7330;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7665 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7334 = this$;

if(cljs.core.truth_(and__3546__auto____7334))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7334;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7339 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7339))
{return or__3548__auto____7339;
} else
{var or__3548__auto____7341 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7341))
{return or__3548__auto____7341;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7666 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7346 = this$;

if(cljs.core.truth_(and__3546__auto____7346))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7346;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7351 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7351))
{return or__3548__auto____7351;
} else
{var or__3548__auto____7421 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7421))
{return or__3548__auto____7421;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7667 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7425 = this$;

if(cljs.core.truth_(and__3546__auto____7425))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7425;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7430 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7430))
{return or__3548__auto____7430;
} else
{var or__3548__auto____7432 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7432))
{return or__3548__auto____7432;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7668 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7435 = this$;

if(cljs.core.truth_(and__3546__auto____7435))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7435;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7439 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7439))
{return or__3548__auto____7439;
} else
{var or__3548__auto____7441 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7441))
{return or__3548__auto____7441;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7669 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7445 = this$;

if(cljs.core.truth_(and__3546__auto____7445))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7445;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7670 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7456 = this$;

if(cljs.core.truth_(and__3546__auto____7456))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7456;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7460 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7460))
{return or__3548__auto____7460;
} else
{var or__3548__auto____7461 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7461))
{return or__3548__auto____7461;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7671 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7466 = this$;

if(cljs.core.truth_(and__3546__auto____7466))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7466;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7472 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7472))
{return or__3548__auto____7472;
} else
{var or__3548__auto____7473 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7473))
{return or__3548__auto____7473;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7672 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7513 = this$;

if(cljs.core.truth_(and__3546__auto____7513))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7513;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7517 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7517))
{return or__3548__auto____7517;
} else
{var or__3548__auto____7562 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7562))
{return or__3548__auto____7562;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7673 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7567 = this$;

if(cljs.core.truth_(and__3546__auto____7567))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7567;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7569 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7569))
{return or__3548__auto____7569;
} else
{var or__3548__auto____7571 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7571))
{return or__3548__auto____7571;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7674 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7574 = this$;

if(cljs.core.truth_(and__3546__auto____7574))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7574;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7578 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7578))
{return or__3548__auto____7578;
} else
{var or__3548__auto____7580 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7580))
{return or__3548__auto____7580;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7675 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7583 = this$;

if(cljs.core.truth_(and__3546__auto____7583))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7583;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7587 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7587))
{return or__3548__auto____7587;
} else
{var or__3548__auto____7589 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7589))
{return or__3548__auto____7589;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7676 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7618 = this$;

if(cljs.core.truth_(and__3546__auto____7618))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7618;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7621 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7621))
{return or__3548__auto____7621;
} else
{var or__3548__auto____7622 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7622))
{return or__3548__auto____7622;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7677 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7625 = this$;

if(cljs.core.truth_(and__3546__auto____7625))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7625;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7627 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7627))
{return or__3548__auto____7627;
} else
{var or__3548__auto____7628 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7628))
{return or__3548__auto____7628;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7678 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7629 = this$;

if(cljs.core.truth_(and__3546__auto____7629))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7629;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7630 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7630))
{return or__3548__auto____7630;
} else
{var or__3548__auto____7631 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7631))
{return or__3548__auto____7631;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7679 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7634 = this$;

if(cljs.core.truth_(and__3546__auto____7634))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7634;
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
if(cljs.core.truth_((function (){var and__3546__auto____7700 = coll;

if(cljs.core.truth_(and__3546__auto____7700))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7700;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7702 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7702))
{return or__3548__auto____7702;
} else
{var or__3548__auto____7703 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7703))
{return or__3548__auto____7703;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7712 = coll;

if(cljs.core.truth_(and__3546__auto____7712))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7712;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7713 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7713))
{return or__3548__auto____7713;
} else
{var or__3548__auto____7714 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7714))
{return or__3548__auto____7714;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7718 = coll;

if(cljs.core.truth_(and__3546__auto____7718))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7718;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7720 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7720))
{return or__3548__auto____7720;
} else
{var or__3548__auto____7722 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7722))
{return or__3548__auto____7722;
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
if(cljs.core.truth_((function (){var and__3546__auto____7725 = coll;

if(cljs.core.truth_(and__3546__auto____7725))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7725;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7727 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7727))
{return or__3548__auto____7727;
} else
{var or__3548__auto____7729 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7729))
{return or__3548__auto____7729;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7746 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7731 = coll;

if(cljs.core.truth_(and__3546__auto____7731))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7731;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7733 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7733))
{return or__3548__auto____7733;
} else
{var or__3548__auto____7735 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7735))
{return or__3548__auto____7735;
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
if(cljs.core.truth_((function (){var and__3546__auto____7757 = coll;

if(cljs.core.truth_(and__3546__auto____7757))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7757;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7761 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7761))
{return or__3548__auto____7761;
} else
{var or__3548__auto____7762 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7762))
{return or__3548__auto____7762;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7764 = coll;

if(cljs.core.truth_(and__3546__auto____7764))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7764;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7766 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7766))
{return or__3548__auto____7766;
} else
{var or__3548__auto____7768 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7768))
{return or__3548__auto____7768;
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
var _lookup__7787 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7781 = o;

if(cljs.core.truth_(and__3546__auto____7781))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7781;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7782 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7782))
{return or__3548__auto____7782;
} else
{var or__3548__auto____7783 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7783))
{return or__3548__auto____7783;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7788 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7784 = o;

if(cljs.core.truth_(and__3546__auto____7784))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7784;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7785 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7785))
{return or__3548__auto____7785;
} else
{var or__3548__auto____7786 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7786))
{return or__3548__auto____7786;
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
return _lookup__7787.call(this,o,k);
case  3 :
return _lookup__7788.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7805 = coll;

if(cljs.core.truth_(and__3546__auto____7805))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7805;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7806 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7806))
{return or__3548__auto____7806;
} else
{var or__3548__auto____7807 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7807))
{return or__3548__auto____7807;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7808 = coll;

if(cljs.core.truth_(and__3546__auto____7808))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7808;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7811 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7811))
{return or__3548__auto____7811;
} else
{var or__3548__auto____7812 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7812))
{return or__3548__auto____7812;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7819 = coll;

if(cljs.core.truth_(and__3546__auto____7819))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7819;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7825 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7825))
{return or__3548__auto____7825;
} else
{var or__3548__auto____7828 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7828))
{return or__3548__auto____7828;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7831 = coll;

if(cljs.core.truth_(and__3546__auto____7831))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7831;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7833 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7833))
{return or__3548__auto____7833;
} else
{var or__3548__auto____7835 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7835))
{return or__3548__auto____7835;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7841 = coll;

if(cljs.core.truth_(and__3546__auto____7841))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7841;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7845 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
} else
{var or__3548__auto____7847 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7847))
{return or__3548__auto____7847;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7848 = coll;

if(cljs.core.truth_(and__3546__auto____7848))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7848;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7849 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7849))
{return or__3548__auto____7849;
} else
{var or__3548__auto____7850 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7850))
{return or__3548__auto____7850;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7861 = coll;

if(cljs.core.truth_(and__3546__auto____7861))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7861;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7866 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7866))
{return or__3548__auto____7866;
} else
{var or__3548__auto____7868 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7868))
{return or__3548__auto____7868;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7872 = o;

if(cljs.core.truth_(and__3546__auto____7872))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7872;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7882 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7882))
{return or__3548__auto____7882;
} else
{var or__3548__auto____7883 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7883))
{return or__3548__auto____7883;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7889 = o;

if(cljs.core.truth_(and__3546__auto____7889))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7889;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7895 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7895))
{return or__3548__auto____7895;
} else
{var or__3548__auto____7897 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7897))
{return or__3548__auto____7897;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7899 = o;

if(cljs.core.truth_(and__3546__auto____7899))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7899;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7947 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7947))
{return or__3548__auto____7947;
} else
{var or__3548__auto____7948 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7948))
{return or__3548__auto____7948;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7959 = o;

if(cljs.core.truth_(and__3546__auto____7959))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7959;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7962 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7962))
{return or__3548__auto____7962;
} else
{var or__3548__auto____7963 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7963))
{return or__3548__auto____7963;
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
var _reduce__7984 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7969 = coll;

if(cljs.core.truth_(and__3546__auto____7969))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7969;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7970 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7970))
{return or__3548__auto____7970;
} else
{var or__3548__auto____7972 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7972))
{return or__3548__auto____7972;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7985 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7975 = coll;

if(cljs.core.truth_(and__3546__auto____7975))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7975;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7980 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7980))
{return or__3548__auto____7980;
} else
{var or__3548__auto____7981 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7981))
{return or__3548__auto____7981;
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
return _reduce__7984.call(this,coll,f);
case  3 :
return _reduce__7985.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8031 = o;

if(cljs.core.truth_(and__3546__auto____8031))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8031;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8033 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8033))
{return or__3548__auto____8033;
} else
{var or__3548__auto____8036 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8036))
{return or__3548__auto____8036;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8087 = o;

if(cljs.core.truth_(and__3546__auto____8087))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8087;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8090 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8090))
{return or__3548__auto____8090;
} else
{var or__3548__auto____8094 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8094))
{return or__3548__auto____8094;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8100 = o;

if(cljs.core.truth_(and__3546__auto____8100))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8100;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8109 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8109))
{return or__3548__auto____8109;
} else
{var or__3548__auto____8113 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8113))
{return or__3548__auto____8113;
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
if(cljs.core.truth_((function (){var and__3546__auto____8121 = o;

if(cljs.core.truth_(and__3546__auto____8121))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8121;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8125 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8125))
{return or__3548__auto____8125;
} else
{var or__3548__auto____8127 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8127))
{return or__3548__auto____8127;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8138 = d;

if(cljs.core.truth_(and__3546__auto____8138))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8138;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8144 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8144))
{return or__3548__auto____8144;
} else
{var or__3548__auto____8145 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8145))
{return or__3548__auto____8145;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8148 = this$;

if(cljs.core.truth_(and__3546__auto____8148))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8148;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8150 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8150))
{return or__3548__auto____8150;
} else
{var or__3548__auto____8151 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8151))
{return or__3548__auto____8151;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8155 = this$;

if(cljs.core.truth_(and__3546__auto____8155))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8155;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8157 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8157))
{return or__3548__auto____8157;
} else
{var or__3548__auto____8159 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8159))
{return or__3548__auto____8159;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8161 = this$;

if(cljs.core.truth_(and__3546__auto____8161))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8161;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8163 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8163))
{return or__3548__auto____8163;
} else
{var or__3548__auto____8165 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8165))
{return or__3548__auto____8165;
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
var G__8189 = null;
var G__8189__8190 = (function (o,k){
return null;
});
var G__8189__8191 = (function (o,k,not_found){
return not_found;
});
G__8189 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8189__8190.call(this,o,k);
case  3 :
return G__8189__8191.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8189;
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
var G__8193 = null;
var G__8193__8194 = (function (_,f){
return f.call(null);
});
var G__8193__8195 = (function (_,f,start){
return start;
});
G__8193 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8193__8194.call(this,_,f);
case  3 :
return G__8193__8195.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8193;
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
var G__8201 = null;
var G__8201__8202 = (function (_,n){
return null;
});
var G__8201__8203 = (function (_,n,not_found){
return not_found;
});
G__8201 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8201__8202.call(this,_,n);
case  3 :
return G__8201__8203.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8201;
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
var ci_reduce__8231 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8225 = cljs.core._nth.call(null,cicoll,0);
var n__8226 = 1;

while(true){
if(cljs.core.truth_((n__8226 < cljs.core._count.call(null,cicoll))))
{{
var G__8235 = f.call(null,val__8225,cljs.core._nth.call(null,cicoll,n__8226));
var G__8236 = (n__8226 + 1);
val__8225 = G__8235;
n__8226 = G__8236;
continue;
}
} else
{return val__8225;
}
break;
}
}
});
var ci_reduce__8232 = (function (cicoll,f,val){
var val__8227 = val;
var n__8228 = 0;

while(true){
if(cljs.core.truth_((n__8228 < cljs.core._count.call(null,cicoll))))
{{
var G__8238 = f.call(null,val__8227,cljs.core._nth.call(null,cicoll,n__8228));
var G__8240 = (n__8228 + 1);
val__8227 = G__8238;
n__8228 = G__8240;
continue;
}
} else
{return val__8227;
}
break;
}
});
var ci_reduce__8233 = (function (cicoll,f,val,idx){
var val__8229 = val;
var n__8230 = idx;

while(true){
if(cljs.core.truth_((n__8230 < cljs.core._count.call(null,cicoll))))
{{
var G__8243 = f.call(null,val__8229,cljs.core._nth.call(null,cicoll,n__8230));
var G__8244 = (n__8230 + 1);
val__8229 = G__8243;
n__8230 = G__8244;
continue;
}
} else
{return val__8229;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8231.call(this,cicoll,f);
case  3 :
return ci_reduce__8232.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8233.call(this,cicoll,f,val,idx);
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
var this__8263 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8295 = null;
var G__8295__8297 = (function (_,f){
var this__8266 = this;
return cljs.core.ci_reduce.call(null,this__8266.a,f,(this__8266.a[this__8266.i]),(this__8266.i + 1));
});
var G__8295__8298 = (function (_,f,start){
var this__8269 = this;
return cljs.core.ci_reduce.call(null,this__8269.a,f,start,this__8269.i);
});
G__8295 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8295__8297.call(this,_,f);
case  3 :
return G__8295__8298.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8295;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8270 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8273 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8308 = null;
var G__8308__8309 = (function (coll,n){
var this__8278 = this;
var i__8279 = (n + this__8278.i);

if(cljs.core.truth_((i__8279 < this__8278.a.length)))
{return (this__8278.a[i__8279]);
} else
{return null;
}
});
var G__8308__8310 = (function (coll,n,not_found){
var this__8280 = this;
var i__8281 = (n + this__8280.i);

if(cljs.core.truth_((i__8281 < this__8280.a.length)))
{return (this__8280.a[i__8281]);
} else
{return not_found;
}
});
G__8308 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8308__8309.call(this,coll,n);
case  3 :
return G__8308__8310.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8308;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8286 = this;
return (this__8286.a.length - this__8286.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8287 = this;
return (this__8287.a[this__8287.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8289 = this;
if(cljs.core.truth_(((this__8289.i + 1) < this__8289.a.length)))
{return (new cljs.core.IndexedSeq(this__8289.a,(this__8289.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8292 = this;
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
var G__8319 = null;
var G__8319__8320 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8319__8321 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8319 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8319__8320.call(this,array,f);
case  3 :
return G__8319__8321.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8319;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8325 = null;
var G__8325__8326 = (function (array,k){
return (array[k]);
});
var G__8325__8327 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8325 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8325__8326.call(this,array,k);
case  3 :
return G__8325__8327.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8325;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8333 = null;
var G__8333__8334 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8333__8335 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8333 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8333__8334.call(this,array,n);
case  3 :
return G__8333__8335.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8333;
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
var temp__3698__auto____8442 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8442))
{var s__8444 = temp__3698__auto____8442;

return cljs.core._first.call(null,s__8444);
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
var G__8464 = cljs.core.next.call(null,s);
s = G__8464;
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
var s__8465 = cljs.core.seq.call(null,x);
var n__8466 = 0;

while(true){
if(cljs.core.truth_(s__8465))
{{
var G__8467 = cljs.core.next.call(null,s__8465);
var G__8468 = (n__8466 + 1);
s__8465 = G__8467;
n__8466 = G__8468;
continue;
}
} else
{return n__8466;
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
var conj__8489 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8490 = (function() { 
var G__8493__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8497 = conj.call(null,coll,x);
var G__8498 = cljs.core.first.call(null,xs);
var G__8499 = cljs.core.next.call(null,xs);
coll = G__8497;
x = G__8498;
xs = G__8499;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8493 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8493__delegate.call(this, coll, x, xs);
};
G__8493.cljs$lang$maxFixedArity = 2;
G__8493.cljs$lang$applyTo = (function (arglist__8500){
var coll = cljs.core.first(arglist__8500);
var x = cljs.core.first(cljs.core.next(arglist__8500));
var xs = cljs.core.rest(cljs.core.next(arglist__8500));
return G__8493__delegate.call(this, coll, x, xs);
});
return G__8493;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8489.call(this,coll,x);
default:
return conj__8490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8490.cljs$lang$applyTo;
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
var nth__8573 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8574 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8573.call(this,coll,n);
case  3 :
return nth__8574.call(this,coll,n,not_found);
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
var get__8585 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8586 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8585.call(this,o,k);
case  3 :
return get__8586.call(this,o,k,not_found);
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
var assoc__8599 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8600 = (function() { 
var G__8602__delegate = function (coll,k,v,kvs){
while(true){
var ret__8595 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8603 = ret__8595;
var G__8604 = cljs.core.first.call(null,kvs);
var G__8605 = cljs.core.second.call(null,kvs);
var G__8606 = cljs.core.nnext.call(null,kvs);
coll = G__8603;
k = G__8604;
v = G__8605;
kvs = G__8606;
continue;
}
} else
{return ret__8595;
}
break;
}
};
var G__8602 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8602__delegate.call(this, coll, k, v, kvs);
};
G__8602.cljs$lang$maxFixedArity = 3;
G__8602.cljs$lang$applyTo = (function (arglist__8607){
var coll = cljs.core.first(arglist__8607);
var k = cljs.core.first(cljs.core.next(arglist__8607));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8607)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8607)));
return G__8602__delegate.call(this, coll, k, v, kvs);
});
return G__8602;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8599.call(this,coll,k,v);
default:
return assoc__8600.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8600.cljs$lang$applyTo;
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
var dissoc__8612 = (function (coll){
return coll;
});
var dissoc__8613 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8614 = (function() { 
var G__8616__delegate = function (coll,k,ks){
while(true){
var ret__8608 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8617 = ret__8608;
var G__8618 = cljs.core.first.call(null,ks);
var G__8619 = cljs.core.next.call(null,ks);
coll = G__8617;
k = G__8618;
ks = G__8619;
continue;
}
} else
{return ret__8608;
}
break;
}
};
var G__8616 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8616__delegate.call(this, coll, k, ks);
};
G__8616.cljs$lang$maxFixedArity = 2;
G__8616.cljs$lang$applyTo = (function (arglist__8623){
var coll = cljs.core.first(arglist__8623);
var k = cljs.core.first(cljs.core.next(arglist__8623));
var ks = cljs.core.rest(cljs.core.next(arglist__8623));
return G__8616__delegate.call(this, coll, k, ks);
});
return G__8616;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8612.call(this,coll);
case  2 :
return dissoc__8613.call(this,coll,k);
default:
return dissoc__8614.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8614.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8629 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8634 = x__445__auto____8629;

if(cljs.core.truth_(and__3546__auto____8634))
{var and__3546__auto____8636 = x__445__auto____8629.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8636))
{return cljs.core.not.call(null,x__445__auto____8629.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8636;
}
} else
{return and__3546__auto____8634;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8629);
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
var disj__8684 = (function (coll){
return coll;
});
var disj__8685 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8686 = (function() { 
var G__8688__delegate = function (coll,k,ks){
while(true){
var ret__8679 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8689 = ret__8679;
var G__8690 = cljs.core.first.call(null,ks);
var G__8691 = cljs.core.next.call(null,ks);
coll = G__8689;
k = G__8690;
ks = G__8691;
continue;
}
} else
{return ret__8679;
}
break;
}
};
var G__8688 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8688__delegate.call(this, coll, k, ks);
};
G__8688.cljs$lang$maxFixedArity = 2;
G__8688.cljs$lang$applyTo = (function (arglist__8692){
var coll = cljs.core.first(arglist__8692);
var k = cljs.core.first(cljs.core.next(arglist__8692));
var ks = cljs.core.rest(cljs.core.next(arglist__8692));
return G__8688__delegate.call(this, coll, k, ks);
});
return G__8688;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8684.call(this,coll);
case  2 :
return disj__8685.call(this,coll,k);
default:
return disj__8686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8686.cljs$lang$applyTo;
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
{var x__445__auto____8700 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8702 = x__445__auto____8700;

if(cljs.core.truth_(and__3546__auto____8702))
{var and__3546__auto____8707 = x__445__auto____8700.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8707))
{return cljs.core.not.call(null,x__445__auto____8700.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8707;
}
} else
{return and__3546__auto____8702;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8700);
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
{var x__445__auto____8731 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8732 = x__445__auto____8731;

if(cljs.core.truth_(and__3546__auto____8732))
{var and__3546__auto____8734 = x__445__auto____8731.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8734))
{return cljs.core.not.call(null,x__445__auto____8731.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8734;
}
} else
{return and__3546__auto____8732;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8731);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8760 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8762 = x__445__auto____8760;

if(cljs.core.truth_(and__3546__auto____8762))
{var and__3546__auto____8764 = x__445__auto____8760.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8764))
{return cljs.core.not.call(null,x__445__auto____8760.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8764;
}
} else
{return and__3546__auto____8762;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8760);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8768 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8774 = x__445__auto____8768;

if(cljs.core.truth_(and__3546__auto____8774))
{var and__3546__auto____8775 = x__445__auto____8768.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8775))
{return cljs.core.not.call(null,x__445__auto____8768.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8775;
}
} else
{return and__3546__auto____8774;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8768);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8784 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8786 = x__445__auto____8784;

if(cljs.core.truth_(and__3546__auto____8786))
{var and__3546__auto____8787 = x__445__auto____8784.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8787))
{return cljs.core.not.call(null,x__445__auto____8784.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8787;
}
} else
{return and__3546__auto____8786;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8784);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8800 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8801 = x__445__auto____8800;

if(cljs.core.truth_(and__3546__auto____8801))
{var and__3546__auto____8802 = x__445__auto____8800.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8802))
{return cljs.core.not.call(null,x__445__auto____8800.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8802;
}
} else
{return and__3546__auto____8801;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8800);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8808 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8809 = x__445__auto____8808;

if(cljs.core.truth_(and__3546__auto____8809))
{var and__3546__auto____8811 = x__445__auto____8808.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8811))
{return cljs.core.not.call(null,x__445__auto____8808.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8811;
}
} else
{return and__3546__auto____8809;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8808);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8820 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8820.push(key);
}));
return keys__8820;
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
{var x__445__auto____8833 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8834 = x__445__auto____8833;

if(cljs.core.truth_(and__3546__auto____8834))
{var and__3546__auto____8836 = x__445__auto____8833.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8836))
{return cljs.core.not.call(null,x__445__auto____8833.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8836;
}
} else
{return and__3546__auto____8834;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8833);
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
var and__3546__auto____8843 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8843))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8845 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8845))
{return or__3548__auto____8845;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8843;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8850 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8850))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8850;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8852 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8852))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8852;
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
var and__3546__auto____8861 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8861))
{return (n == n.toFixed());
} else
{return and__3546__auto____8861;
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
if(cljs.core.truth_((function (){var and__3546__auto____8871 = coll;

if(cljs.core.truth_(and__3546__auto____8871))
{var and__3546__auto____8873 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8873))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8873;
}
} else
{return and__3546__auto____8871;
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
var distinct_QMARK___8882 = (function (x){
return true;
});
var distinct_QMARK___8883 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8884 = (function() { 
var G__8887__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8877 = cljs.core.set([y,x]);
var xs__8878 = more;

while(true){
var x__8880 = cljs.core.first.call(null,xs__8878);
var etc__8881 = cljs.core.next.call(null,xs__8878);

if(cljs.core.truth_(xs__8878))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8877,x__8880)))
{return false;
} else
{{
var G__8888 = cljs.core.conj.call(null,s__8877,x__8880);
var G__8889 = etc__8881;
s__8877 = G__8888;
xs__8878 = G__8889;
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
var G__8887 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8887__delegate.call(this, x, y, more);
};
G__8887.cljs$lang$maxFixedArity = 2;
G__8887.cljs$lang$applyTo = (function (arglist__8893){
var x = cljs.core.first(arglist__8893);
var y = cljs.core.first(cljs.core.next(arglist__8893));
var more = cljs.core.rest(cljs.core.next(arglist__8893));
return G__8887__delegate.call(this, x, y, more);
});
return G__8887;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8882.call(this,x);
case  2 :
return distinct_QMARK___8883.call(this,x,y);
default:
return distinct_QMARK___8884.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8884.cljs$lang$applyTo;
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
var r__8905 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8905)))
{return r__8905;
} else
{if(cljs.core.truth_(r__8905))
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
var sort__8925 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8926 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8920 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8920,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8920);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8925.call(this,comp);
case  2 :
return sort__8926.call(this,comp,coll);
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
var sort_by__8937 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8938 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8937.call(this,keyfn,comp);
case  3 :
return sort_by__8938.call(this,keyfn,comp,coll);
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
var reduce__8956 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8957 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8956.call(this,f,val);
case  3 :
return reduce__8957.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8971 = (function (f,coll){
var temp__3695__auto____8961 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8961))
{var s__8962 = temp__3695__auto____8961;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8962),cljs.core.next.call(null,s__8962));
} else
{return f.call(null);
}
});
var seq_reduce__8972 = (function (f,val,coll){
var val__8964 = val;
var coll__8965 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8965))
{{
var G__8974 = f.call(null,val__8964,cljs.core.first.call(null,coll__8965));
var G__8975 = cljs.core.next.call(null,coll__8965);
val__8964 = G__8974;
coll__8965 = G__8975;
continue;
}
} else
{return val__8964;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8971.call(this,f,val);
case  3 :
return seq_reduce__8972.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8985 = null;
var G__8985__8986 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8985__8987 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8985 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8985__8986.call(this,coll,f);
case  3 :
return G__8985__8987.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8985;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8992 = (function (){
return 0;
});
var _PLUS___8993 = (function (x){
return x;
});
var _PLUS___8994 = (function (x,y){
return (x + y);
});
var _PLUS___8995 = (function() { 
var G__9001__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9001 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9001__delegate.call(this, x, y, more);
};
G__9001.cljs$lang$maxFixedArity = 2;
G__9001.cljs$lang$applyTo = (function (arglist__9004){
var x = cljs.core.first(arglist__9004);
var y = cljs.core.first(cljs.core.next(arglist__9004));
var more = cljs.core.rest(cljs.core.next(arglist__9004));
return G__9001__delegate.call(this, x, y, more);
});
return G__9001;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8992.call(this);
case  1 :
return _PLUS___8993.call(this,x);
case  2 :
return _PLUS___8994.call(this,x,y);
default:
return _PLUS___8995.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8995.cljs$lang$applyTo;
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
var ___9009 = (function (x){
return (- x);
});
var ___9010 = (function (x,y){
return (x - y);
});
var ___9011 = (function() { 
var G__9018__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9018 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9018__delegate.call(this, x, y, more);
};
G__9018.cljs$lang$maxFixedArity = 2;
G__9018.cljs$lang$applyTo = (function (arglist__9020){
var x = cljs.core.first(arglist__9020);
var y = cljs.core.first(cljs.core.next(arglist__9020));
var more = cljs.core.rest(cljs.core.next(arglist__9020));
return G__9018__delegate.call(this, x, y, more);
});
return G__9018;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9009.call(this,x);
case  2 :
return ___9010.call(this,x,y);
default:
return ___9011.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9011.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9025 = (function (){
return 1;
});
var _STAR___9026 = (function (x){
return x;
});
var _STAR___9027 = (function (x,y){
return (x * y);
});
var _STAR___9028 = (function() { 
var G__9034__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9034 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9034__delegate.call(this, x, y, more);
};
G__9034.cljs$lang$maxFixedArity = 2;
G__9034.cljs$lang$applyTo = (function (arglist__9036){
var x = cljs.core.first(arglist__9036);
var y = cljs.core.first(cljs.core.next(arglist__9036));
var more = cljs.core.rest(cljs.core.next(arglist__9036));
return G__9034__delegate.call(this, x, y, more);
});
return G__9034;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9025.call(this);
case  1 :
return _STAR___9026.call(this,x);
case  2 :
return _STAR___9027.call(this,x,y);
default:
return _STAR___9028.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9028.cljs$lang$applyTo;
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
var _SLASH___9088 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9089 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9090 = (function() { 
var G__9092__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9092 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9092__delegate.call(this, x, y, more);
};
G__9092.cljs$lang$maxFixedArity = 2;
G__9092.cljs$lang$applyTo = (function (arglist__9093){
var x = cljs.core.first(arglist__9093);
var y = cljs.core.first(cljs.core.next(arglist__9093));
var more = cljs.core.rest(cljs.core.next(arglist__9093));
return G__9092__delegate.call(this, x, y, more);
});
return G__9092;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9088.call(this,x);
case  2 :
return _SLASH___9089.call(this,x,y);
default:
return _SLASH___9090.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9090.cljs$lang$applyTo;
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
var _LT___9097 = (function (x){
return true;
});
var _LT___9098 = (function (x,y){
return (x < y);
});
var _LT___9099 = (function() { 
var G__9101__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9102 = y;
var G__9103 = cljs.core.first.call(null,more);
var G__9104 = cljs.core.next.call(null,more);
x = G__9102;
y = G__9103;
more = G__9104;
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
var G__9101 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9101__delegate.call(this, x, y, more);
};
G__9101.cljs$lang$maxFixedArity = 2;
G__9101.cljs$lang$applyTo = (function (arglist__9108){
var x = cljs.core.first(arglist__9108);
var y = cljs.core.first(cljs.core.next(arglist__9108));
var more = cljs.core.rest(cljs.core.next(arglist__9108));
return G__9101__delegate.call(this, x, y, more);
});
return G__9101;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9097.call(this,x);
case  2 :
return _LT___9098.call(this,x,y);
default:
return _LT___9099.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9099.cljs$lang$applyTo;
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
var _LT__EQ___9115 = (function (x){
return true;
});
var _LT__EQ___9117 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9118 = (function() { 
var G__9120__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9121 = y;
var G__9122 = cljs.core.first.call(null,more);
var G__9123 = cljs.core.next.call(null,more);
x = G__9121;
y = G__9122;
more = G__9123;
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
var G__9120 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9120__delegate.call(this, x, y, more);
};
G__9120.cljs$lang$maxFixedArity = 2;
G__9120.cljs$lang$applyTo = (function (arglist__9126){
var x = cljs.core.first(arglist__9126);
var y = cljs.core.first(cljs.core.next(arglist__9126));
var more = cljs.core.rest(cljs.core.next(arglist__9126));
return G__9120__delegate.call(this, x, y, more);
});
return G__9120;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9115.call(this,x);
case  2 :
return _LT__EQ___9117.call(this,x,y);
default:
return _LT__EQ___9118.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9118.cljs$lang$applyTo;
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
var _GT___9132 = (function (x){
return true;
});
var _GT___9133 = (function (x,y){
return (x > y);
});
var _GT___9134 = (function() { 
var G__9136__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9137 = y;
var G__9138 = cljs.core.first.call(null,more);
var G__9139 = cljs.core.next.call(null,more);
x = G__9137;
y = G__9138;
more = G__9139;
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
var G__9136 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9136__delegate.call(this, x, y, more);
};
G__9136.cljs$lang$maxFixedArity = 2;
G__9136.cljs$lang$applyTo = (function (arglist__9140){
var x = cljs.core.first(arglist__9140);
var y = cljs.core.first(cljs.core.next(arglist__9140));
var more = cljs.core.rest(cljs.core.next(arglist__9140));
return G__9136__delegate.call(this, x, y, more);
});
return G__9136;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9132.call(this,x);
case  2 :
return _GT___9133.call(this,x,y);
default:
return _GT___9134.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9134.cljs$lang$applyTo;
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
var _GT__EQ___9142 = (function (x){
return true;
});
var _GT__EQ___9143 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9144 = (function() { 
var G__9146__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9147 = y;
var G__9148 = cljs.core.first.call(null,more);
var G__9150 = cljs.core.next.call(null,more);
x = G__9147;
y = G__9148;
more = G__9150;
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
var G__9146 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9146__delegate.call(this, x, y, more);
};
G__9146.cljs$lang$maxFixedArity = 2;
G__9146.cljs$lang$applyTo = (function (arglist__9151){
var x = cljs.core.first(arglist__9151);
var y = cljs.core.first(cljs.core.next(arglist__9151));
var more = cljs.core.rest(cljs.core.next(arglist__9151));
return G__9146__delegate.call(this, x, y, more);
});
return G__9146;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9142.call(this,x);
case  2 :
return _GT__EQ___9143.call(this,x,y);
default:
return _GT__EQ___9144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9144.cljs$lang$applyTo;
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
var max__9158 = (function (x){
return x;
});
var max__9159 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9160 = (function() { 
var G__9162__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9162 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9162__delegate.call(this, x, y, more);
};
G__9162.cljs$lang$maxFixedArity = 2;
G__9162.cljs$lang$applyTo = (function (arglist__9163){
var x = cljs.core.first(arglist__9163);
var y = cljs.core.first(cljs.core.next(arglist__9163));
var more = cljs.core.rest(cljs.core.next(arglist__9163));
return G__9162__delegate.call(this, x, y, more);
});
return G__9162;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9158.call(this,x);
case  2 :
return max__9159.call(this,x,y);
default:
return max__9160.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9160.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9290 = (function (x){
return x;
});
var min__9291 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9292 = (function() { 
var G__9297__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9297 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9297__delegate.call(this, x, y, more);
};
G__9297.cljs$lang$maxFixedArity = 2;
G__9297.cljs$lang$applyTo = (function (arglist__9303){
var x = cljs.core.first(arglist__9303);
var y = cljs.core.first(cljs.core.next(arglist__9303));
var more = cljs.core.rest(cljs.core.next(arglist__9303));
return G__9297__delegate.call(this, x, y, more);
});
return G__9297;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9290.call(this,x);
case  2 :
return min__9291.call(this,x,y);
default:
return min__9292.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9292.cljs$lang$applyTo;
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
var rem__9317 = (n % d);

return cljs.core.fix.call(null,((n - rem__9317) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9320 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9320));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9321 = (function (){
return Math.random.call(null);
});
var rand__9323 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9321.call(this);
case  1 :
return rand__9323.call(this,n);
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
var _EQ__EQ___9421 = (function (x){
return true;
});
var _EQ__EQ___9422 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9424 = (function() { 
var G__9432__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9434 = y;
var G__9435 = cljs.core.first.call(null,more);
var G__9436 = cljs.core.next.call(null,more);
x = G__9434;
y = G__9435;
more = G__9436;
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
var G__9432 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9432__delegate.call(this, x, y, more);
};
G__9432.cljs$lang$maxFixedArity = 2;
G__9432.cljs$lang$applyTo = (function (arglist__9441){
var x = cljs.core.first(arglist__9441);
var y = cljs.core.first(cljs.core.next(arglist__9441));
var more = cljs.core.rest(cljs.core.next(arglist__9441));
return G__9432__delegate.call(this, x, y, more);
});
return G__9432;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9421.call(this,x);
case  2 :
return _EQ__EQ___9422.call(this,x,y);
default:
return _EQ__EQ___9424.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9424.cljs$lang$applyTo;
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
var n__9444 = n;
var xs__9470 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9471 = xs__9470;

if(cljs.core.truth_(and__3546__auto____9471))
{return (n__9444 > 0);
} else
{return and__3546__auto____9471;
}
})()))
{{
var G__9476 = (n__9444 - 1);
var G__9477 = cljs.core.next.call(null,xs__9470);
n__9444 = G__9476;
xs__9470 = G__9477;
continue;
}
} else
{return xs__9470;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9495 = null;
var G__9495__9496 = (function (coll,n){
var temp__3695__auto____9483 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9483))
{var xs__9485 = temp__3695__auto____9483;

return cljs.core.first.call(null,xs__9485);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9495__9497 = (function (coll,n,not_found){
var temp__3695__auto____9488 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9488))
{var xs__9489 = temp__3695__auto____9488;

return cljs.core.first.call(null,xs__9489);
} else
{return not_found;
}
});
G__9495 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9495__9496.call(this,coll,n);
case  3 :
return G__9495__9497.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9495;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9514 = (function (){
return "";
});
var str_STAR___9515 = (function (x){
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
var str_STAR___9516 = (function() { 
var G__9519__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9520 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9521 = cljs.core.next.call(null,more);
sb = G__9520;
more = G__9521;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9519 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9519__delegate.call(this, x, ys);
};
G__9519.cljs$lang$maxFixedArity = 1;
G__9519.cljs$lang$applyTo = (function (arglist__9522){
var x = cljs.core.first(arglist__9522);
var ys = cljs.core.rest(arglist__9522);
return G__9519__delegate.call(this, x, ys);
});
return G__9519;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9514.call(this);
case  1 :
return str_STAR___9515.call(this,x);
default:
return str_STAR___9516.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9516.cljs$lang$applyTo;
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
var str__9529 = (function (){
return "";
});
var str__9530 = (function (x){
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
var str__9531 = (function() { 
var G__9533__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9533 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9533__delegate.call(this, x, ys);
};
G__9533.cljs$lang$maxFixedArity = 1;
G__9533.cljs$lang$applyTo = (function (arglist__9536){
var x = cljs.core.first(arglist__9536);
var ys = cljs.core.rest(arglist__9536);
return G__9533__delegate.call(this, x, ys);
});
return G__9533;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9529.call(this);
case  1 :
return str__9530.call(this,x);
default:
return str__9531.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9531.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9538 = (function (s,start){
return s.substring(start);
});
var subs__9539 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9538.call(this,s,start);
case  3 :
return subs__9539.call(this,s,start,end);
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
var symbol__9549 = (function (name){
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
var symbol__9550 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9549.call(this,ns);
case  2 :
return symbol__9550.call(this,ns,name);
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
var keyword__9561 = (function (name){
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
var keyword__9562 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9561.call(this,ns);
case  2 :
return keyword__9562.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9569 = cljs.core.seq.call(null,x);
var ys__9572 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9569)))
{return cljs.core.nil_QMARK_.call(null,ys__9572);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9572)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9569),cljs.core.first.call(null,ys__9572))))
{{
var G__9629 = cljs.core.next.call(null,xs__9569);
var G__9631 = cljs.core.next.call(null,ys__9572);
xs__9569 = G__9629;
ys__9572 = G__9631;
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
return cljs.core.reduce.call(null,(function (p1__9633_SHARP_,p2__9635_SHARP_){
return cljs.core.hash_combine.call(null,p1__9633_SHARP_,cljs.core.hash.call(null,p2__9635_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9653__9654 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9653__9654))
{var G__9656__9658 = cljs.core.first.call(null,G__9653__9654);
var vec__9657__9659 = G__9656__9658;
var key_name__9660 = cljs.core.nth.call(null,vec__9657__9659,0,null);
var f__9661 = cljs.core.nth.call(null,vec__9657__9659,1,null);
var G__9653__9662 = G__9653__9654;

var G__9656__9663 = G__9656__9658;
var G__9653__9664 = G__9653__9662;

while(true){
var vec__9665__9666 = G__9656__9663;
var key_name__9667 = cljs.core.nth.call(null,vec__9665__9666,0,null);
var f__9668 = cljs.core.nth.call(null,vec__9665__9666,1,null);
var G__9653__9669 = G__9653__9664;

var str_name__9670 = cljs.core.name.call(null,key_name__9667);

obj[str_name__9670] = f__9668;
var temp__3698__auto____9674 = cljs.core.next.call(null,G__9653__9669);

if(cljs.core.truth_(temp__3698__auto____9674))
{var G__9653__9679 = temp__3698__auto____9674;

{
var G__9688 = cljs.core.first.call(null,G__9653__9679);
var G__9689 = G__9653__9679;
G__9656__9663 = G__9688;
G__9653__9664 = G__9689;
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
var this__9700 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9703 = this;
return (new cljs.core.List(this__9703.meta,o,coll,(this__9703.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9705 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9706 = this;
return this__9706.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9713 = this;
return this__9713.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9714 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9716 = this;
return this__9716.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9719 = this;
return this__9719.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9722 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9727 = this;
return (new cljs.core.List(meta,this__9727.first,this__9727.rest,this__9727.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9733 = this;
return this__9733.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9737 = this;
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
var this__9771 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9792 = this;
return (new cljs.core.List(this__9792.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9794 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9796 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9797 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9798 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9799 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9800 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9803 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9863 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9864 = this;
return this__9864.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9865 = this;
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
list.cljs$lang$applyTo = (function (arglist__9866){
var items = cljs.core.seq( arglist__9866 );;
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
var this__9867 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9868 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9870 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9872 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9872.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9877 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9881 = this;
return this__9881.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9884 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9884.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9884.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9885 = this;
return this__9885.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9886 = this;
return (new cljs.core.Cons(meta,this__9886.first,this__9886.rest));
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
var G__9955 = null;
var G__9955__9956 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9955__9957 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9955 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9955__9956.call(this,string,f);
case  3 :
return G__9955__9957.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9955;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9959 = null;
var G__9959__9960 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9959__9961 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9959 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9959__9960.call(this,string,k);
case  3 :
return G__9959__9961.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9959;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9963 = null;
var G__9963__9964 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9963__9965 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9963 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9963__9964.call(this,string,n);
case  3 :
return G__9963__9965.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9963;
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
var x__9997 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9997;
} else
{lazy_seq.x = x__9997.call(null);
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
var this__10006 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10012 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10014 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10016 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10016.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10020 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10021 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10022 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10026 = this;
return this__10026.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10027 = this;
return (new cljs.core.LazySeq(meta,this__10027.realized,this__10027.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10035 = cljs.core.array.call(null);

var s__10036 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10036)))
{ary__10035.push(cljs.core.first.call(null,s__10036));
{
var G__10040 = cljs.core.next.call(null,s__10036);
s__10036 = G__10040;
continue;
}
} else
{return ary__10035;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10042 = s;
var i__10044 = n;
var sum__10045 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10047 = (i__10044 > 0);

if(cljs.core.truth_(and__3546__auto____10047))
{return cljs.core.seq.call(null,s__10042);
} else
{return and__3546__auto____10047;
}
})()))
{{
var G__10048 = cljs.core.next.call(null,s__10042);
var G__10049 = (i__10044 - 1);
var G__10050 = (sum__10045 + 1);
s__10042 = G__10048;
i__10044 = G__10049;
sum__10045 = G__10050;
continue;
}
} else
{return sum__10045;
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
var concat__10204 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10205 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10206 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10198 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10198))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10198),concat.call(null,cljs.core.rest.call(null,s__10198),y));
} else
{return y;
}
})));
});
var concat__10207 = (function() { 
var G__10211__delegate = function (x,y,zs){
var cat__10202 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10200 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10200))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10200),cat.call(null,cljs.core.rest.call(null,xys__10200),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10202.call(null,concat.call(null,x,y),zs);
};
var G__10211 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10211__delegate.call(this, x, y, zs);
};
G__10211.cljs$lang$maxFixedArity = 2;
G__10211.cljs$lang$applyTo = (function (arglist__10217){
var x = cljs.core.first(arglist__10217);
var y = cljs.core.first(cljs.core.next(arglist__10217));
var zs = cljs.core.rest(cljs.core.next(arglist__10217));
return G__10211__delegate.call(this, x, y, zs);
});
return G__10211;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10204.call(this);
case  1 :
return concat__10205.call(this,x);
case  2 :
return concat__10206.call(this,x,y);
default:
return concat__10207.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10207.cljs$lang$applyTo;
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
var list_STAR___10233 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10234 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10236 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10237 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10238 = (function() { 
var G__10242__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10242 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10242__delegate.call(this, a, b, c, d, more);
};
G__10242.cljs$lang$maxFixedArity = 4;
G__10242.cljs$lang$applyTo = (function (arglist__10243){
var a = cljs.core.first(arglist__10243);
var b = cljs.core.first(cljs.core.next(arglist__10243));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10243)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10243))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10243))));
return G__10242__delegate.call(this, a, b, c, d, more);
});
return G__10242;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10233.call(this,a);
case  2 :
return list_STAR___10234.call(this,a,b);
case  3 :
return list_STAR___10236.call(this,a,b,c);
case  4 :
return list_STAR___10237.call(this,a,b,c,d);
default:
return list_STAR___10238.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10238.cljs$lang$applyTo;
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
var apply__10307 = (function (f,args){
var fixed_arity__10246 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10246 + 1)) <= fixed_arity__10246)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10309 = (function (f,x,args){
var arglist__10248 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10250 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10248,fixed_arity__10250) <= fixed_arity__10250)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10248));
} else
{return f.cljs$lang$applyTo(arglist__10248);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10248));
}
});
var apply__10310 = (function (f,x,y,args){
var arglist__10283 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10284 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10283,fixed_arity__10284) <= fixed_arity__10284)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10283));
} else
{return f.cljs$lang$applyTo(arglist__10283);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10283));
}
});
var apply__10311 = (function (f,x,y,z,args){
var arglist__10290 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10291 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10290,fixed_arity__10291) <= fixed_arity__10291)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10290));
} else
{return f.cljs$lang$applyTo(arglist__10290);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10290));
}
});
var apply__10312 = (function() { 
var G__10320__delegate = function (f,a,b,c,d,args){
var arglist__10295 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10296 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10295,fixed_arity__10296) <= fixed_arity__10296)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10295));
} else
{return f.cljs$lang$applyTo(arglist__10295);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10295));
}
};
var G__10320 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10320__delegate.call(this, f, a, b, c, d, args);
};
G__10320.cljs$lang$maxFixedArity = 5;
G__10320.cljs$lang$applyTo = (function (arglist__10321){
var f = cljs.core.first(arglist__10321);
var a = cljs.core.first(cljs.core.next(arglist__10321));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10321)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10321))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10321)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10321)))));
return G__10320__delegate.call(this, f, a, b, c, d, args);
});
return G__10320;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10307.call(this,f,a);
case  3 :
return apply__10309.call(this,f,a,b);
case  4 :
return apply__10310.call(this,f,a,b,c);
case  5 :
return apply__10311.call(this,f,a,b,c,d);
default:
return apply__10312.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10312.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10333){
var obj = cljs.core.first(arglist__10333);
var f = cljs.core.first(cljs.core.next(arglist__10333));
var args = cljs.core.rest(cljs.core.next(arglist__10333));
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
var not_EQ___10340 = (function (x){
return false;
});
var not_EQ___10341 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10342 = (function() { 
var G__10345__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10345 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10345__delegate.call(this, x, y, more);
};
G__10345.cljs$lang$maxFixedArity = 2;
G__10345.cljs$lang$applyTo = (function (arglist__10347){
var x = cljs.core.first(arglist__10347);
var y = cljs.core.first(cljs.core.next(arglist__10347));
var more = cljs.core.rest(cljs.core.next(arglist__10347));
return G__10345__delegate.call(this, x, y, more);
});
return G__10345;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10340.call(this,x);
case  2 :
return not_EQ___10341.call(this,x,y);
default:
return not_EQ___10342.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10342.cljs$lang$applyTo;
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
var G__10366 = pred;
var G__10367 = cljs.core.next.call(null,coll);
pred = G__10366;
coll = G__10367;
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
{var or__3548__auto____10373 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10373))
{return or__3548__auto____10373;
} else
{{
var G__10379 = pred;
var G__10380 = cljs.core.next.call(null,coll);
pred = G__10379;
coll = G__10380;
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
var G__10396 = null;
var G__10396__10398 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10396__10399 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10396__10400 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10396__10401 = (function() { 
var G__10404__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10404 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10404__delegate.call(this, x, y, zs);
};
G__10404.cljs$lang$maxFixedArity = 2;
G__10404.cljs$lang$applyTo = (function (arglist__10411){
var x = cljs.core.first(arglist__10411);
var y = cljs.core.first(cljs.core.next(arglist__10411));
var zs = cljs.core.rest(cljs.core.next(arglist__10411));
return G__10404__delegate.call(this, x, y, zs);
});
return G__10404;
})()
;
G__10396 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10396__10398.call(this);
case  1 :
return G__10396__10399.call(this,x);
case  2 :
return G__10396__10400.call(this,x,y);
default:
return G__10396__10401.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10396.cljs$lang$maxFixedArity = 2;
G__10396.cljs$lang$applyTo = G__10396__10401.cljs$lang$applyTo;
return G__10396;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10438__delegate = function (args){
return x;
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
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__10470 = (function (){
return cljs.core.identity;
});
var comp__10472 = (function (f){
return f;
});
var comp__10473 = (function (f,g){
return (function() {
var G__10483 = null;
var G__10483__10484 = (function (){
return f.call(null,g.call(null));
});
var G__10483__10485 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10483__10486 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10483__10487 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10483__10488 = (function() { 
var G__10499__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10499 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10499__delegate.call(this, x, y, z, args);
};
G__10499.cljs$lang$maxFixedArity = 3;
G__10499.cljs$lang$applyTo = (function (arglist__10502){
var x = cljs.core.first(arglist__10502);
var y = cljs.core.first(cljs.core.next(arglist__10502));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10502)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10502)));
return G__10499__delegate.call(this, x, y, z, args);
});
return G__10499;
})()
;
G__10483 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10483__10484.call(this);
case  1 :
return G__10483__10485.call(this,x);
case  2 :
return G__10483__10486.call(this,x,y);
case  3 :
return G__10483__10487.call(this,x,y,z);
default:
return G__10483__10488.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10483.cljs$lang$maxFixedArity = 3;
G__10483.cljs$lang$applyTo = G__10483__10488.cljs$lang$applyTo;
return G__10483;
})()
});
var comp__10474 = (function (f,g,h){
return (function() {
var G__10506 = null;
var G__10506__10508 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10506__10509 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10506__10510 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10506__10511 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10506__10512 = (function() { 
var G__10520__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10520 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10520__delegate.call(this, x, y, z, args);
};
G__10520.cljs$lang$maxFixedArity = 3;
G__10520.cljs$lang$applyTo = (function (arglist__10522){
var x = cljs.core.first(arglist__10522);
var y = cljs.core.first(cljs.core.next(arglist__10522));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10522)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10522)));
return G__10520__delegate.call(this, x, y, z, args);
});
return G__10520;
})()
;
G__10506 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10506__10508.call(this);
case  1 :
return G__10506__10509.call(this,x);
case  2 :
return G__10506__10510.call(this,x,y);
case  3 :
return G__10506__10511.call(this,x,y,z);
default:
return G__10506__10512.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10506.cljs$lang$maxFixedArity = 3;
G__10506.cljs$lang$applyTo = G__10506__10512.cljs$lang$applyTo;
return G__10506;
})()
});
var comp__10475 = (function() { 
var G__10524__delegate = function (f1,f2,f3,fs){
var fs__10465 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10526__delegate = function (args){
var ret__10467 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10465),args);
var fs__10468 = cljs.core.next.call(null,fs__10465);

while(true){
if(cljs.core.truth_(fs__10468))
{{
var G__10529 = cljs.core.first.call(null,fs__10468).call(null,ret__10467);
var G__10530 = cljs.core.next.call(null,fs__10468);
ret__10467 = G__10529;
fs__10468 = G__10530;
continue;
}
} else
{return ret__10467;
}
break;
}
};
var G__10526 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10526__delegate.call(this, args);
};
G__10526.cljs$lang$maxFixedArity = 0;
G__10526.cljs$lang$applyTo = (function (arglist__10533){
var args = cljs.core.seq( arglist__10533 );;
return G__10526__delegate.call(this, args);
});
return G__10526;
})()
;
};
var G__10524 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10524__delegate.call(this, f1, f2, f3, fs);
};
G__10524.cljs$lang$maxFixedArity = 3;
G__10524.cljs$lang$applyTo = (function (arglist__10534){
var f1 = cljs.core.first(arglist__10534);
var f2 = cljs.core.first(cljs.core.next(arglist__10534));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10534)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10534)));
return G__10524__delegate.call(this, f1, f2, f3, fs);
});
return G__10524;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10470.call(this);
case  1 :
return comp__10472.call(this,f1);
case  2 :
return comp__10473.call(this,f1,f2);
case  3 :
return comp__10474.call(this,f1,f2,f3);
default:
return comp__10475.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10475.cljs$lang$applyTo;
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
var partial__10556 = (function (f,arg1){
return (function() { 
var G__10562__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10562 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10562__delegate.call(this, args);
};
G__10562.cljs$lang$maxFixedArity = 0;
G__10562.cljs$lang$applyTo = (function (arglist__10563){
var args = cljs.core.seq( arglist__10563 );;
return G__10562__delegate.call(this, args);
});
return G__10562;
})()
;
});
var partial__10558 = (function (f,arg1,arg2){
return (function() { 
var G__10564__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10564 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10564__delegate.call(this, args);
};
G__10564.cljs$lang$maxFixedArity = 0;
G__10564.cljs$lang$applyTo = (function (arglist__10565){
var args = cljs.core.seq( arglist__10565 );;
return G__10564__delegate.call(this, args);
});
return G__10564;
})()
;
});
var partial__10559 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10566__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10566 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10566__delegate.call(this, args);
};
G__10566.cljs$lang$maxFixedArity = 0;
G__10566.cljs$lang$applyTo = (function (arglist__10567){
var args = cljs.core.seq( arglist__10567 );;
return G__10566__delegate.call(this, args);
});
return G__10566;
})()
;
});
var partial__10560 = (function() { 
var G__10568__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10569__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10569 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10569__delegate.call(this, args);
};
G__10569.cljs$lang$maxFixedArity = 0;
G__10569.cljs$lang$applyTo = (function (arglist__10570){
var args = cljs.core.seq( arglist__10570 );;
return G__10569__delegate.call(this, args);
});
return G__10569;
})()
;
};
var G__10568 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10568__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10568.cljs$lang$maxFixedArity = 4;
G__10568.cljs$lang$applyTo = (function (arglist__10571){
var f = cljs.core.first(arglist__10571);
var arg1 = cljs.core.first(cljs.core.next(arglist__10571));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10571)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10571))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10571))));
return G__10568__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10568;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10556.call(this,f,arg1);
case  3 :
return partial__10558.call(this,f,arg1,arg2);
case  4 :
return partial__10559.call(this,f,arg1,arg2,arg3);
default:
return partial__10560.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10560.cljs$lang$applyTo;
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
var fnil__10651 = (function (f,x){
return (function() {
var G__10655 = null;
var G__10655__10656 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10655__10657 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10655__10658 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10655__10659 = (function() { 
var G__10662__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10662 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10662__delegate.call(this, a, b, c, ds);
};
G__10662.cljs$lang$maxFixedArity = 3;
G__10662.cljs$lang$applyTo = (function (arglist__10663){
var a = cljs.core.first(arglist__10663);
var b = cljs.core.first(cljs.core.next(arglist__10663));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10663)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10663)));
return G__10662__delegate.call(this, a, b, c, ds);
});
return G__10662;
})()
;
G__10655 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10655__10656.call(this,a);
case  2 :
return G__10655__10657.call(this,a,b);
case  3 :
return G__10655__10658.call(this,a,b,c);
default:
return G__10655__10659.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10655.cljs$lang$maxFixedArity = 3;
G__10655.cljs$lang$applyTo = G__10655__10659.cljs$lang$applyTo;
return G__10655;
})()
});
var fnil__10652 = (function (f,x,y){
return (function() {
var G__10665 = null;
var G__10665__10666 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10665__10667 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10665__10668 = (function() { 
var G__10674__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10674 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10674__delegate.call(this, a, b, c, ds);
};
G__10674.cljs$lang$maxFixedArity = 3;
G__10674.cljs$lang$applyTo = (function (arglist__10681){
var a = cljs.core.first(arglist__10681);
var b = cljs.core.first(cljs.core.next(arglist__10681));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10681)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10681)));
return G__10674__delegate.call(this, a, b, c, ds);
});
return G__10674;
})()
;
G__10665 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10665__10666.call(this,a,b);
case  3 :
return G__10665__10667.call(this,a,b,c);
default:
return G__10665__10668.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10665.cljs$lang$maxFixedArity = 3;
G__10665.cljs$lang$applyTo = G__10665__10668.cljs$lang$applyTo;
return G__10665;
})()
});
var fnil__10653 = (function (f,x,y,z){
return (function() {
var G__10683 = null;
var G__10683__10685 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10683__10686 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10683__10687 = (function() { 
var G__10754__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10754 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10754__delegate.call(this, a, b, c, ds);
};
G__10754.cljs$lang$maxFixedArity = 3;
G__10754.cljs$lang$applyTo = (function (arglist__10759){
var a = cljs.core.first(arglist__10759);
var b = cljs.core.first(cljs.core.next(arglist__10759));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10759)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10759)));
return G__10754__delegate.call(this, a, b, c, ds);
});
return G__10754;
})()
;
G__10683 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10683__10685.call(this,a,b);
case  3 :
return G__10683__10686.call(this,a,b,c);
default:
return G__10683__10687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10683.cljs$lang$maxFixedArity = 3;
G__10683.cljs$lang$applyTo = G__10683__10687.cljs$lang$applyTo;
return G__10683;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10651.call(this,f,x);
case  3 :
return fnil__10652.call(this,f,x,y);
case  4 :
return fnil__10653.call(this,f,x,y,z);
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
var mapi__10782 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10774 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10774))
{var s__10775 = temp__3698__auto____10774;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10775)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10775)));
} else
{return null;
}
})));
});

return mapi__10782.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10801 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10801))
{var s__10802 = temp__3698__auto____10801;

var x__10803 = f.call(null,cljs.core.first.call(null,s__10802));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10803)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10802));
} else
{return cljs.core.cons.call(null,x__10803,keep.call(null,f,cljs.core.rest.call(null,s__10802)));
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
var keepi__10887 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10829 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10829))
{var s__10830 = temp__3698__auto____10829;

var x__10831 = f.call(null,idx,cljs.core.first.call(null,s__10830));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10831)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10830));
} else
{return cljs.core.cons.call(null,x__10831,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10830)));
}
} else
{return null;
}
})));
});

return keepi__10887.call(null,0,coll);
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
var every_pred__11049 = (function (p){
return (function() {
var ep1 = null;
var ep1__11056 = (function (){
return true;
});
var ep1__11057 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11058 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10901 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10901))
{return p.call(null,y);
} else
{return and__3546__auto____10901;
}
})());
});
var ep1__11059 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10903 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10903))
{var and__3546__auto____10905 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10905))
{return p.call(null,z);
} else
{return and__3546__auto____10905;
}
} else
{return and__3546__auto____10903;
}
})());
});
var ep1__11060 = (function() { 
var G__11069__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10907 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10907))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10907;
}
})());
};
var G__11069 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11069__delegate.call(this, x, y, z, args);
};
G__11069.cljs$lang$maxFixedArity = 3;
G__11069.cljs$lang$applyTo = (function (arglist__11075){
var x = cljs.core.first(arglist__11075);
var y = cljs.core.first(cljs.core.next(arglist__11075));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11075)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11075)));
return G__11069__delegate.call(this, x, y, z, args);
});
return G__11069;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11056.call(this);
case  1 :
return ep1__11057.call(this,x);
case  2 :
return ep1__11058.call(this,x,y);
case  3 :
return ep1__11059.call(this,x,y,z);
default:
return ep1__11060.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11060.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11050 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11080 = (function (){
return true;
});
var ep2__11081 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10909 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10909))
{return p2.call(null,x);
} else
{return and__3546__auto____10909;
}
})());
});
var ep2__11082 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10914 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10914))
{var and__3546__auto____10915 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10915))
{var and__3546__auto____10917 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10917))
{return p2.call(null,y);
} else
{return and__3546__auto____10917;
}
} else
{return and__3546__auto____10915;
}
} else
{return and__3546__auto____10914;
}
})());
});
var ep2__11083 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10920 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10920))
{var and__3546__auto____10922 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10922))
{var and__3546__auto____10924 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10924))
{var and__3546__auto____10926 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10926))
{var and__3546__auto____10927 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10927))
{return p2.call(null,z);
} else
{return and__3546__auto____10927;
}
} else
{return and__3546__auto____10926;
}
} else
{return and__3546__auto____10924;
}
} else
{return and__3546__auto____10922;
}
} else
{return and__3546__auto____10920;
}
})());
});
var ep2__11084 = (function() { 
var G__11105__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10936 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10936))
{return cljs.core.every_QMARK_.call(null,(function (p1__10815_SHARP_){
var and__3546__auto____10940 = p1.call(null,p1__10815_SHARP_);

if(cljs.core.truth_(and__3546__auto____10940))
{return p2.call(null,p1__10815_SHARP_);
} else
{return and__3546__auto____10940;
}
}),args);
} else
{return and__3546__auto____10936;
}
})());
};
var G__11105 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11105__delegate.call(this, x, y, z, args);
};
G__11105.cljs$lang$maxFixedArity = 3;
G__11105.cljs$lang$applyTo = (function (arglist__11107){
var x = cljs.core.first(arglist__11107);
var y = cljs.core.first(cljs.core.next(arglist__11107));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11107)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11107)));
return G__11105__delegate.call(this, x, y, z, args);
});
return G__11105;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11080.call(this);
case  1 :
return ep2__11081.call(this,x);
case  2 :
return ep2__11082.call(this,x,y);
case  3 :
return ep2__11083.call(this,x,y,z);
default:
return ep2__11084.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11084.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11051 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11231 = (function (){
return true;
});
var ep3__11232 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10947 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10947))
{var and__3546__auto____10950 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10950))
{return p3.call(null,x);
} else
{return and__3546__auto____10950;
}
} else
{return and__3546__auto____10947;
}
})());
});
var ep3__11233 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10953 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10953))
{var and__3546__auto____10956 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10956))
{var and__3546__auto____10958 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10958))
{var and__3546__auto____10959 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10959))
{var and__3546__auto____10961 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10961))
{return p3.call(null,y);
} else
{return and__3546__auto____10961;
}
} else
{return and__3546__auto____10959;
}
} else
{return and__3546__auto____10958;
}
} else
{return and__3546__auto____10956;
}
} else
{return and__3546__auto____10953;
}
})());
});
var ep3__11234 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10964 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10964))
{var and__3546__auto____10966 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10966))
{var and__3546__auto____10968 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10968))
{var and__3546__auto____10969 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10969))
{var and__3546__auto____10973 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10973))
{var and__3546__auto____10978 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10978))
{var and__3546__auto____10980 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10980))
{var and__3546__auto____10983 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10983))
{return p3.call(null,z);
} else
{return and__3546__auto____10983;
}
} else
{return and__3546__auto____10980;
}
} else
{return and__3546__auto____10978;
}
} else
{return and__3546__auto____10973;
}
} else
{return and__3546__auto____10969;
}
} else
{return and__3546__auto____10968;
}
} else
{return and__3546__auto____10966;
}
} else
{return and__3546__auto____10964;
}
})());
});
var ep3__11235 = (function() { 
var G__11247__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10989 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10989))
{return cljs.core.every_QMARK_.call(null,(function (p1__10819_SHARP_){
var and__3546__auto____10993 = p1.call(null,p1__10819_SHARP_);

if(cljs.core.truth_(and__3546__auto____10993))
{var and__3546__auto____10994 = p2.call(null,p1__10819_SHARP_);

if(cljs.core.truth_(and__3546__auto____10994))
{return p3.call(null,p1__10819_SHARP_);
} else
{return and__3546__auto____10994;
}
} else
{return and__3546__auto____10993;
}
}),args);
} else
{return and__3546__auto____10989;
}
})());
};
var G__11247 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11247__delegate.call(this, x, y, z, args);
};
G__11247.cljs$lang$maxFixedArity = 3;
G__11247.cljs$lang$applyTo = (function (arglist__11250){
var x = cljs.core.first(arglist__11250);
var y = cljs.core.first(cljs.core.next(arglist__11250));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11250)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11250)));
return G__11247__delegate.call(this, x, y, z, args);
});
return G__11247;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11231.call(this);
case  1 :
return ep3__11232.call(this,x);
case  2 :
return ep3__11233.call(this,x,y);
case  3 :
return ep3__11234.call(this,x,y,z);
default:
return ep3__11235.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11235.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11052 = (function() { 
var G__11253__delegate = function (p1,p2,p3,ps){
var ps__10999 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11255 = (function (){
return true;
});
var epn__11256 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10821_SHARP_){
return p1__10821_SHARP_.call(null,x);
}),ps__10999);
});
var epn__11257 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10822_SHARP_){
var and__3546__auto____11005 = p1__10822_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11005))
{return p1__10822_SHARP_.call(null,y);
} else
{return and__3546__auto____11005;
}
}),ps__10999);
});
var epn__11259 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10824_SHARP_){
var and__3546__auto____11006 = p1__10824_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11006))
{var and__3546__auto____11040 = p1__10824_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11040))
{return p1__10824_SHARP_.call(null,z);
} else
{return and__3546__auto____11040;
}
} else
{return and__3546__auto____11006;
}
}),ps__10999);
});
var epn__11260 = (function() { 
var G__11274__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11043 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11043))
{return cljs.core.every_QMARK_.call(null,(function (p1__10826_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10826_SHARP_,args);
}),ps__10999);
} else
{return and__3546__auto____11043;
}
})());
};
var G__11274 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11274__delegate.call(this, x, y, z, args);
};
G__11274.cljs$lang$maxFixedArity = 3;
G__11274.cljs$lang$applyTo = (function (arglist__11278){
var x = cljs.core.first(arglist__11278);
var y = cljs.core.first(cljs.core.next(arglist__11278));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11278)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11278)));
return G__11274__delegate.call(this, x, y, z, args);
});
return G__11274;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11255.call(this);
case  1 :
return epn__11256.call(this,x);
case  2 :
return epn__11257.call(this,x,y);
case  3 :
return epn__11259.call(this,x,y,z);
default:
return epn__11260.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11260.cljs$lang$applyTo;
return epn;
})()
};
var G__11253 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11253__delegate.call(this, p1, p2, p3, ps);
};
G__11253.cljs$lang$maxFixedArity = 3;
G__11253.cljs$lang$applyTo = (function (arglist__11281){
var p1 = cljs.core.first(arglist__11281);
var p2 = cljs.core.first(cljs.core.next(arglist__11281));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11281)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11281)));
return G__11253__delegate.call(this, p1, p2, p3, ps);
});
return G__11253;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11049.call(this,p1);
case  2 :
return every_pred__11050.call(this,p1,p2);
case  3 :
return every_pred__11051.call(this,p1,p2,p3);
default:
return every_pred__11052.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11052.cljs$lang$applyTo;
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
var some_fn__11420 = (function (p){
return (function() {
var sp1 = null;
var sp1__11428 = (function (){
return null;
});
var sp1__11429 = (function (x){
return p.call(null,x);
});
var sp1__11431 = (function (x,y){
var or__3548__auto____11289 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11289))
{return or__3548__auto____11289;
} else
{return p.call(null,y);
}
});
var sp1__11432 = (function (x,y,z){
var or__3548__auto____11293 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11293))
{return or__3548__auto____11293;
} else
{var or__3548__auto____11294 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11294))
{return or__3548__auto____11294;
} else
{return p.call(null,z);
}
}
});
var sp1__11434 = (function() { 
var G__11444__delegate = function (x,y,z,args){
var or__3548__auto____11298 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11298))
{return or__3548__auto____11298;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11444 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11444__delegate.call(this, x, y, z, args);
};
G__11444.cljs$lang$maxFixedArity = 3;
G__11444.cljs$lang$applyTo = (function (arglist__11453){
var x = cljs.core.first(arglist__11453);
var y = cljs.core.first(cljs.core.next(arglist__11453));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11453)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11453)));
return G__11444__delegate.call(this, x, y, z, args);
});
return G__11444;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11428.call(this);
case  1 :
return sp1__11429.call(this,x);
case  2 :
return sp1__11431.call(this,x,y);
case  3 :
return sp1__11432.call(this,x,y,z);
default:
return sp1__11434.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11434.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11421 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11462 = (function (){
return null;
});
var sp2__11463 = (function (x){
var or__3548__auto____11303 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11303))
{return or__3548__auto____11303;
} else
{return p2.call(null,x);
}
});
var sp2__11464 = (function (x,y){
var or__3548__auto____11305 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11305))
{return or__3548__auto____11305;
} else
{var or__3548__auto____11306 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11306))
{return or__3548__auto____11306;
} else
{var or__3548__auto____11308 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11308))
{return or__3548__auto____11308;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11465 = (function (x,y,z){
var or__3548__auto____11311 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11311))
{return or__3548__auto____11311;
} else
{var or__3548__auto____11313 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11313))
{return or__3548__auto____11313;
} else
{var or__3548__auto____11315 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11315))
{return or__3548__auto____11315;
} else
{var or__3548__auto____11316 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11316))
{return or__3548__auto____11316;
} else
{var or__3548__auto____11318 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11318))
{return or__3548__auto____11318;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11466 = (function() { 
var G__11495__delegate = function (x,y,z,args){
var or__3548__auto____11322 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11322))
{return or__3548__auto____11322;
} else
{return cljs.core.some.call(null,(function (p1__10889_SHARP_){
var or__3548__auto____11326 = p1.call(null,p1__10889_SHARP_);

if(cljs.core.truth_(or__3548__auto____11326))
{return or__3548__auto____11326;
} else
{return p2.call(null,p1__10889_SHARP_);
}
}),args);
}
};
var G__11495 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11495__delegate.call(this, x, y, z, args);
};
G__11495.cljs$lang$maxFixedArity = 3;
G__11495.cljs$lang$applyTo = (function (arglist__11500){
var x = cljs.core.first(arglist__11500);
var y = cljs.core.first(cljs.core.next(arglist__11500));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11500)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11500)));
return G__11495__delegate.call(this, x, y, z, args);
});
return G__11495;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11462.call(this);
case  1 :
return sp2__11463.call(this,x);
case  2 :
return sp2__11464.call(this,x,y);
case  3 :
return sp2__11465.call(this,x,y,z);
default:
return sp2__11466.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11466.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11422 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11511 = (function (){
return null;
});
var sp3__11512 = (function (x){
var or__3548__auto____11332 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11332))
{return or__3548__auto____11332;
} else
{var or__3548__auto____11335 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11335))
{return or__3548__auto____11335;
} else
{return p3.call(null,x);
}
}
});
var sp3__11513 = (function (x,y){
var or__3548__auto____11340 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11340))
{return or__3548__auto____11340;
} else
{var or__3548__auto____11343 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11343))
{return or__3548__auto____11343;
} else
{var or__3548__auto____11346 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11346))
{return or__3548__auto____11346;
} else
{var or__3548__auto____11348 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11348))
{return or__3548__auto____11348;
} else
{var or__3548__auto____11350 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11350))
{return or__3548__auto____11350;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11514 = (function (x,y,z){
var or__3548__auto____11354 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11354))
{return or__3548__auto____11354;
} else
{var or__3548__auto____11356 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11356))
{return or__3548__auto____11356;
} else
{var or__3548__auto____11358 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11358))
{return or__3548__auto____11358;
} else
{var or__3548__auto____11361 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11361))
{return or__3548__auto____11361;
} else
{var or__3548__auto____11363 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11363))
{return or__3548__auto____11363;
} else
{var or__3548__auto____11367 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11367))
{return or__3548__auto____11367;
} else
{var or__3548__auto____11370 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11370))
{return or__3548__auto____11370;
} else
{var or__3548__auto____11372 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11372))
{return or__3548__auto____11372;
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
var sp3__11516 = (function() { 
var G__11582__delegate = function (x,y,z,args){
var or__3548__auto____11376 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11376))
{return or__3548__auto____11376;
} else
{return cljs.core.some.call(null,(function (p1__10892_SHARP_){
var or__3548__auto____11378 = p1.call(null,p1__10892_SHARP_);

if(cljs.core.truth_(or__3548__auto____11378))
{return or__3548__auto____11378;
} else
{var or__3548__auto____11381 = p2.call(null,p1__10892_SHARP_);

if(cljs.core.truth_(or__3548__auto____11381))
{return or__3548__auto____11381;
} else
{return p3.call(null,p1__10892_SHARP_);
}
}
}),args);
}
};
var G__11582 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11582__delegate.call(this, x, y, z, args);
};
G__11582.cljs$lang$maxFixedArity = 3;
G__11582.cljs$lang$applyTo = (function (arglist__11584){
var x = cljs.core.first(arglist__11584);
var y = cljs.core.first(cljs.core.next(arglist__11584));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11584)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11584)));
return G__11582__delegate.call(this, x, y, z, args);
});
return G__11582;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11511.call(this);
case  1 :
return sp3__11512.call(this,x);
case  2 :
return sp3__11513.call(this,x,y);
case  3 :
return sp3__11514.call(this,x,y,z);
default:
return sp3__11516.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11516.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11424 = (function() { 
var G__11586__delegate = function (p1,p2,p3,ps){
var ps__11388 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11588 = (function (){
return null;
});
var spn__11589 = (function (x){
return cljs.core.some.call(null,(function (p1__10895_SHARP_){
return p1__10895_SHARP_.call(null,x);
}),ps__11388);
});
var spn__11590 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10896_SHARP_){
var or__3548__auto____11399 = p1__10896_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11399))
{return or__3548__auto____11399;
} else
{return p1__10896_SHARP_.call(null,y);
}
}),ps__11388);
});
var spn__11591 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10898_SHARP_){
var or__3548__auto____11404 = p1__10898_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11404))
{return or__3548__auto____11404;
} else
{var or__3548__auto____11406 = p1__10898_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11406))
{return or__3548__auto____11406;
} else
{return p1__10898_SHARP_.call(null,z);
}
}
}),ps__11388);
});
var spn__11592 = (function() { 
var G__11606__delegate = function (x,y,z,args){
var or__3548__auto____11412 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11412))
{return or__3548__auto____11412;
} else
{return cljs.core.some.call(null,(function (p1__10899_SHARP_){
return cljs.core.some.call(null,p1__10899_SHARP_,args);
}),ps__11388);
}
};
var G__11606 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11606__delegate.call(this, x, y, z, args);
};
G__11606.cljs$lang$maxFixedArity = 3;
G__11606.cljs$lang$applyTo = (function (arglist__11615){
var x = cljs.core.first(arglist__11615);
var y = cljs.core.first(cljs.core.next(arglist__11615));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11615)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11615)));
return G__11606__delegate.call(this, x, y, z, args);
});
return G__11606;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11588.call(this);
case  1 :
return spn__11589.call(this,x);
case  2 :
return spn__11590.call(this,x,y);
case  3 :
return spn__11591.call(this,x,y,z);
default:
return spn__11592.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11592.cljs$lang$applyTo;
return spn;
})()
};
var G__11586 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11586__delegate.call(this, p1, p2, p3, ps);
};
G__11586.cljs$lang$maxFixedArity = 3;
G__11586.cljs$lang$applyTo = (function (arglist__11616){
var p1 = cljs.core.first(arglist__11616);
var p2 = cljs.core.first(cljs.core.next(arglist__11616));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11616)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11616)));
return G__11586__delegate.call(this, p1, p2, p3, ps);
});
return G__11586;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11420.call(this,p1);
case  2 :
return some_fn__11421.call(this,p1,p2);
case  3 :
return some_fn__11422.call(this,p1,p2,p3);
default:
return some_fn__11424.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11424.cljs$lang$applyTo;
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
var map__11665 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11630 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11630))
{var s__11632 = temp__3698__auto____11630;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11632)),map.call(null,f,cljs.core.rest.call(null,s__11632)));
} else
{return null;
}
})));
});
var map__11666 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11640 = cljs.core.seq.call(null,c1);
var s2__11641 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11643 = s1__11640;

if(cljs.core.truth_(and__3546__auto____11643))
{return s2__11641;
} else
{return and__3546__auto____11643;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11640),cljs.core.first.call(null,s2__11641)),map.call(null,f,cljs.core.rest.call(null,s1__11640),cljs.core.rest.call(null,s2__11641)));
} else
{return null;
}
})));
});
var map__11667 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11649 = cljs.core.seq.call(null,c1);
var s2__11650 = cljs.core.seq.call(null,c2);
var s3__11651 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11652 = s1__11649;

if(cljs.core.truth_(and__3546__auto____11652))
{var and__3546__auto____11653 = s2__11650;

if(cljs.core.truth_(and__3546__auto____11653))
{return s3__11651;
} else
{return and__3546__auto____11653;
}
} else
{return and__3546__auto____11652;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11649),cljs.core.first.call(null,s2__11650),cljs.core.first.call(null,s3__11651)),map.call(null,f,cljs.core.rest.call(null,s1__11649),cljs.core.rest.call(null,s2__11650),cljs.core.rest.call(null,s3__11651)));
} else
{return null;
}
})));
});
var map__11668 = (function() { 
var G__11684__delegate = function (f,c1,c2,c3,colls){
var step__11661 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11660 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11660)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11660),step.call(null,map.call(null,cljs.core.rest,ss__11660)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11285_SHARP_){
return cljs.core.apply.call(null,f,p1__11285_SHARP_);
}),step__11661.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11684 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11684__delegate.call(this, f, c1, c2, c3, colls);
};
G__11684.cljs$lang$maxFixedArity = 4;
G__11684.cljs$lang$applyTo = (function (arglist__11688){
var f = cljs.core.first(arglist__11688);
var c1 = cljs.core.first(cljs.core.next(arglist__11688));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11688)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11688))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11688))));
return G__11684__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11684;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11665.call(this,f,c1);
case  3 :
return map__11666.call(this,f,c1,c2);
case  4 :
return map__11667.call(this,f,c1,c2,c3);
default:
return map__11668.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11668.cljs$lang$applyTo;
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
{var temp__3698__auto____11691 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11691))
{var s__11727 = temp__3698__auto____11691;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11727),take.call(null,(n - 1),cljs.core.rest.call(null,s__11727)));
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
var step__11837 = (function (n,coll){
while(true){
var s__11829 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11830 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11830))
{return s__11829;
} else
{return and__3546__auto____11830;
}
})()))
{{
var G__11838 = (n - 1);
var G__11839 = cljs.core.rest.call(null,s__11829);
n = G__11838;
coll = G__11839;
continue;
}
} else
{return s__11829;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11837.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11849 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11850 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11849.call(this,n);
case  2 :
return drop_last__11850.call(this,n,s);
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
var s__11853 = cljs.core.seq.call(null,coll);
var lead__11854 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11854))
{{
var G__11857 = cljs.core.next.call(null,s__11853);
var G__11858 = cljs.core.next.call(null,lead__11854);
s__11853 = G__11857;
lead__11854 = G__11858;
continue;
}
} else
{return s__11853;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11869 = (function (pred,coll){
while(true){
var s__11867 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11868 = s__11867;

if(cljs.core.truth_(and__3546__auto____11868))
{return pred.call(null,cljs.core.first.call(null,s__11867));
} else
{return and__3546__auto____11868;
}
})()))
{{
var G__11870 = pred;
var G__11871 = cljs.core.rest.call(null,s__11867);
pred = G__11870;
coll = G__11871;
continue;
}
} else
{return s__11867;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11869.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11876 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11876))
{var s__11877 = temp__3698__auto____11876;

return cljs.core.concat.call(null,s__11877,cycle.call(null,s__11877));
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
var repeat__11891 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11892 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11891.call(this,n);
case  2 :
return repeat__11892.call(this,n,x);
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
var repeatedly__11902 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11903 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11902.call(this,n);
case  2 :
return repeatedly__11903.call(this,n,f);
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
var interleave__12002 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11992 = cljs.core.seq.call(null,c1);
var s2__11993 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11994 = s1__11992;

if(cljs.core.truth_(and__3546__auto____11994))
{return s2__11993;
} else
{return and__3546__auto____11994;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11992),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11993),interleave.call(null,cljs.core.rest.call(null,s1__11992),cljs.core.rest.call(null,s2__11993))));
} else
{return null;
}
})));
});
var interleave__12003 = (function() { 
var G__12007__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11998 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11998)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11998),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11998)));
} else
{return null;
}
})));
};
var G__12007 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12007__delegate.call(this, c1, c2, colls);
};
G__12007.cljs$lang$maxFixedArity = 2;
G__12007.cljs$lang$applyTo = (function (arglist__12010){
var c1 = cljs.core.first(arglist__12010);
var c2 = cljs.core.first(cljs.core.next(arglist__12010));
var colls = cljs.core.rest(cljs.core.next(arglist__12010));
return G__12007__delegate.call(this, c1, c2, colls);
});
return G__12007;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12002.call(this,c1,c2);
default:
return interleave__12003.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12003.cljs$lang$applyTo;
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
var cat__12021 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12016 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12016))
{var coll__12018 = temp__3695__auto____12016;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12018),cat.call(null,cljs.core.rest.call(null,coll__12018),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12021.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12028 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12029 = (function() { 
var G__12032__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12032 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12032__delegate.call(this, f, coll, colls);
};
G__12032.cljs$lang$maxFixedArity = 2;
G__12032.cljs$lang$applyTo = (function (arglist__12033){
var f = cljs.core.first(arglist__12033);
var coll = cljs.core.first(cljs.core.next(arglist__12033));
var colls = cljs.core.rest(cljs.core.next(arglist__12033));
return G__12032__delegate.call(this, f, coll, colls);
});
return G__12032;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12028.call(this,f,coll);
default:
return mapcat__12029.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12029.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12034 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12034))
{var s__12035 = temp__3698__auto____12034;

var f__12036 = cljs.core.first.call(null,s__12035);
var r__12037 = cljs.core.rest.call(null,s__12035);

if(cljs.core.truth_(pred.call(null,f__12036)))
{return cljs.core.cons.call(null,f__12036,filter.call(null,pred,r__12037));
} else
{return filter.call(null,pred,r__12037);
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
var walk__12052 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12052.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12047_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12047_SHARP_));
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
var partition__12085 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12086 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12076 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12076))
{var s__12079 = temp__3698__auto____12076;

var p__12080 = cljs.core.take.call(null,n,s__12079);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12080))))
{return cljs.core.cons.call(null,p__12080,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12079)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12087 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12082 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12082))
{var s__12083 = temp__3698__auto____12082;

var p__12084 = cljs.core.take.call(null,n,s__12083);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12084))))
{return cljs.core.cons.call(null,p__12084,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12083)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12084,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12085.call(this,n,step);
case  3 :
return partition__12086.call(this,n,step,pad);
case  4 :
return partition__12087.call(this,n,step,pad,coll);
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
var get_in__12209 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12210 = (function (m,ks,not_found){
var sentinel__12176 = cljs.core.lookup_sentinel;
var m__12177 = m;
var ks__12178 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12178))
{var m__12179 = cljs.core.get.call(null,m__12177,cljs.core.first.call(null,ks__12178),sentinel__12176);

if(cljs.core.truth_((sentinel__12176 === m__12179)))
{return not_found;
} else
{{
var G__12215 = sentinel__12176;
var G__12216 = m__12179;
var G__12217 = cljs.core.next.call(null,ks__12178);
sentinel__12176 = G__12215;
m__12177 = G__12216;
ks__12178 = G__12217;
continue;
}
}
} else
{return m__12177;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12209.call(this,m,ks);
case  3 :
return get_in__12210.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12220,v){
var vec__12221__12222 = p__12220;
var k__12224 = cljs.core.nth.call(null,vec__12221__12222,0,null);
var ks__12225 = cljs.core.nthnext.call(null,vec__12221__12222,1);

if(cljs.core.truth_(ks__12225))
{return cljs.core.assoc.call(null,m,k__12224,assoc_in.call(null,cljs.core.get.call(null,m,k__12224),ks__12225,v));
} else
{return cljs.core.assoc.call(null,m,k__12224,v);
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
var update_in__delegate = function (m,p__12242,f,args){
var vec__12243__12244 = p__12242;
var k__12246 = cljs.core.nth.call(null,vec__12243__12244,0,null);
var ks__12250 = cljs.core.nthnext.call(null,vec__12243__12244,1);

if(cljs.core.truth_(ks__12250))
{return cljs.core.assoc.call(null,m,k__12246,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12246),ks__12250,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12246,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12246),args));
}
};
var update_in = function (m,p__12242,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12242, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12255){
var m = cljs.core.first(arglist__12255);
var p__12242 = cljs.core.first(cljs.core.next(arglist__12255));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12255)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12255)));
return update_in__delegate.call(this, m, p__12242, f, args);
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
var this__12262 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12320 = null;
var G__12320__12321 = (function (coll,k){
var this__12263 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12320__12322 = (function (coll,k,not_found){
var this__12264 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12320 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12320__12321.call(this,coll,k);
case  3 :
return G__12320__12322.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12320;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12267 = this;
var new_array__12268 = cljs.core.aclone.call(null,this__12267.array);

(new_array__12268[k] = v);
return (new cljs.core.Vector(this__12267.meta,new_array__12268));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12332 = null;
var G__12332__12333 = (function (coll,k){
var this__12269 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12332__12334 = (function (coll,k,not_found){
var this__12270 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12332 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12332__12333.call(this,coll,k);
case  3 :
return G__12332__12334.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12332;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12271 = this;
var new_array__12272 = cljs.core.aclone.call(null,this__12271.array);

new_array__12272.push(o);
return (new cljs.core.Vector(this__12271.meta,new_array__12272));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12405 = null;
var G__12405__12406 = (function (v,f){
var this__12276 = this;
return cljs.core.ci_reduce.call(null,this__12276.array,f);
});
var G__12405__12407 = (function (v,f,start){
var this__12277 = this;
return cljs.core.ci_reduce.call(null,this__12277.array,f,start);
});
G__12405 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12405__12406.call(this,v,f);
case  3 :
return G__12405__12407.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12405;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12279 = this;
if(cljs.core.truth_((this__12279.array.length > 0)))
{var vector_seq__12286 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12279.array.length)))
{return cljs.core.cons.call(null,(this__12279.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12286.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12288 = this;
return this__12288.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12290 = this;
var count__12294 = this__12290.array.length;

if(cljs.core.truth_((count__12294 > 0)))
{return (this__12290.array[(count__12294 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12297 = this;
if(cljs.core.truth_((this__12297.array.length > 0)))
{var new_array__12299 = cljs.core.aclone.call(null,this__12297.array);

new_array__12299.pop();
return (new cljs.core.Vector(this__12297.meta,new_array__12299));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12302 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12304 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12306 = this;
return (new cljs.core.Vector(meta,this__12306.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12309 = this;
return this__12309.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12435 = null;
var G__12435__12436 = (function (coll,n){
var this__12310 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12311 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12311))
{return (n < this__12310.array.length);
} else
{return and__3546__auto____12311;
}
})()))
{return (this__12310.array[n]);
} else
{return null;
}
});
var G__12435__12437 = (function (coll,n,not_found){
var this__12313 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12314 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12314))
{return (n < this__12313.array.length);
} else
{return and__3546__auto____12314;
}
})()))
{return (this__12313.array[n]);
} else
{return not_found;
}
});
G__12435 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12435__12436.call(this,coll,n);
case  3 :
return G__12435__12437.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12435;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12315 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12315.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12455){
var args = cljs.core.seq( arglist__12455 );;
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
var this__12461 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12571 = null;
var G__12571__12574 = (function (coll,k){
var this__12462 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12571__12575 = (function (coll,k,not_found){
var this__12463 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12571 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12571__12574.call(this,coll,k);
case  3 :
return G__12571__12575.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12571;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12464 = this;
var v_pos__12465 = (this__12464.start + key);

return (new cljs.core.Subvec(this__12464.meta,cljs.core._assoc.call(null,this__12464.v,v_pos__12465,val),this__12464.start,((this__12464.end > (v_pos__12465 + 1)) ? this__12464.end : (v_pos__12465 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12578 = null;
var G__12578__12581 = (function (coll,k){
var this__12468 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12578__12583 = (function (coll,k,not_found){
var this__12470 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12578 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12578__12581.call(this,coll,k);
case  3 :
return G__12578__12583.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12578;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12473 = this;
return (new cljs.core.Subvec(this__12473.meta,cljs.core._assoc_n.call(null,this__12473.v,this__12473.end,o),this__12473.start,(this__12473.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12589 = null;
var G__12589__12590 = (function (coll,f){
var this__12477 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12589__12591 = (function (coll,f,start){
var this__12479 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12589 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12589__12590.call(this,coll,f);
case  3 :
return G__12589__12591.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12589;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12482 = this;
var subvec_seq__12540 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12482.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12482.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12540.call(null,this__12482.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12542 = this;
return (this__12542.end - this__12542.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12545 = this;
return cljs.core._nth.call(null,this__12545.v,(this__12545.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12548 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12548.start,this__12548.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12548.meta,this__12548.v,this__12548.start,(this__12548.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12552 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12554 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12556 = this;
return (new cljs.core.Subvec(meta,this__12556.v,this__12556.start,this__12556.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12561 = this;
return this__12561.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12596 = null;
var G__12596__12597 = (function (coll,n){
var this__12562 = this;
return cljs.core._nth.call(null,this__12562.v,(this__12562.start + n));
});
var G__12596__12598 = (function (coll,n,not_found){
var this__12567 = this;
return cljs.core._nth.call(null,this__12567.v,(this__12567.start + n),not_found);
});
G__12596 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12596__12597.call(this,coll,n);
case  3 :
return G__12596__12598.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12596;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12568 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12568.meta);
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
var subvec__12603 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12604 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12603.call(this,v,start);
case  3 :
return subvec__12604.call(this,v,start,end);
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
var this__12618 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12619 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12620 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12621 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12621.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12639 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12640 = this;
return cljs.core._first.call(null,this__12640.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12642 = this;
var temp__3695__auto____12644 = cljs.core.next.call(null,this__12642.front);

if(cljs.core.truth_(temp__3695__auto____12644))
{var f1__12646 = temp__3695__auto____12644;

return (new cljs.core.PersistentQueueSeq(this__12642.meta,f1__12646,this__12642.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12642.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12642.meta,this__12642.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12649 = this;
return this__12649.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12651 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12651.front,this__12651.rear));
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
var this__12677 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12679 = this;
if(cljs.core.truth_(this__12679.front))
{return (new cljs.core.PersistentQueue(this__12679.meta,(this__12679.count + 1),this__12679.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12683 = this__12679.rear;

if(cljs.core.truth_(or__3548__auto____12683))
{return or__3548__auto____12683;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12679.meta,(this__12679.count + 1),cljs.core.conj.call(null,this__12679.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12685 = this;
var rear__12687 = cljs.core.seq.call(null,this__12685.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12688 = this__12685.front;

if(cljs.core.truth_(or__3548__auto____12688))
{return or__3548__auto____12688;
} else
{return rear__12687;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12685.front,cljs.core.seq.call(null,rear__12687)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12690 = this;
return this__12690.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12692 = this;
return cljs.core._first.call(null,this__12692.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12694 = this;
if(cljs.core.truth_(this__12694.front))
{var temp__3695__auto____12696 = cljs.core.next.call(null,this__12694.front);

if(cljs.core.truth_(temp__3695__auto____12696))
{var f1__12697 = temp__3695__auto____12696;

return (new cljs.core.PersistentQueue(this__12694.meta,(this__12694.count - 1),f1__12697,this__12694.rear));
} else
{return (new cljs.core.PersistentQueue(this__12694.meta,(this__12694.count - 1),cljs.core.seq.call(null,this__12694.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12698 = this;
return cljs.core.first.call(null,this__12698.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12699 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12700 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12701 = this;
return (new cljs.core.PersistentQueue(meta,this__12701.count,this__12701.front,this__12701.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12702 = this;
return this__12702.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12704 = this;
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
var this__12736 = this;
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
var len__12793 = array.length;

var i__12794 = 0;

while(true){
if(cljs.core.truth_((i__12794 < len__12793)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12794]))))
{return i__12794;
} else
{{
var G__12799 = (i__12794 + incr);
i__12794 = G__12799;
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
var obj_map_contains_key_QMARK___12807 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12808 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12805 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12805))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12805;
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
return obj_map_contains_key_QMARK___12807.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12808.call(this,k,strobj,true_val,false_val);
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
var this__12825 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12886 = null;
var G__12886__12888 = (function (coll,k){
var this__12827 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12886__12889 = (function (coll,k,not_found){
var this__12829 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12829.strobj,(this__12829.strobj[k]),not_found);
});
G__12886 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12886__12888.call(this,coll,k);
case  3 :
return G__12886__12889.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12886;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12831 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12841 = goog.object.clone.call(null,this__12831.strobj);
var overwrite_QMARK___12842 = new_strobj__12841.hasOwnProperty(k);

(new_strobj__12841[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12842))
{return (new cljs.core.ObjMap(this__12831.meta,this__12831.keys,new_strobj__12841));
} else
{var new_keys__12845 = cljs.core.aclone.call(null,this__12831.keys);

new_keys__12845.push(k);
return (new cljs.core.ObjMap(this__12831.meta,new_keys__12845,new_strobj__12841));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12831.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12847 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12847.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12900 = null;
var G__12900__12901 = (function (coll,k){
var this__12849 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12900__12902 = (function (coll,k,not_found){
var this__12851 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12900 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12900__12901.call(this,coll,k);
case  3 :
return G__12900__12902.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12900;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12853 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12855 = this;
if(cljs.core.truth_((this__12855.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12814_SHARP_){
return cljs.core.vector.call(null,p1__12814_SHARP_,(this__12855.strobj[p1__12814_SHARP_]));
}),this__12855.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12861 = this;
return this__12861.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12863 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12865 = this;
return (new cljs.core.ObjMap(meta,this__12865.keys,this__12865.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12866 = this;
return this__12866.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12867 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12867.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12869 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12871 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12871))
{return this__12869.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12871;
}
})()))
{var new_keys__12874 = cljs.core.aclone.call(null,this__12869.keys);
var new_strobj__12875 = goog.object.clone.call(null,this__12869.strobj);

new_keys__12874.splice(cljs.core.scan_array.call(null,1,k,new_keys__12874),1);
cljs.core.js_delete.call(null,new_strobj__12875,k);
return (new cljs.core.ObjMap(this__12869.meta,new_keys__12874,new_strobj__12875));
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
var this__12962 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13055 = null;
var G__13055__13058 = (function (coll,k){
var this__12974 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13055__13059 = (function (coll,k,not_found){
var this__12975 = this;
var bucket__12977 = (this__12975.hashobj[cljs.core.hash.call(null,k)]);
var i__12978 = (cljs.core.truth_(bucket__12977)?cljs.core.scan_array.call(null,2,k,bucket__12977):null);

if(cljs.core.truth_(i__12978))
{return (bucket__12977[(i__12978 + 1)]);
} else
{return not_found;
}
});
G__13055 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13055__13058.call(this,coll,k);
case  3 :
return G__13055__13059.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13055;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12983 = this;
var h__12987 = cljs.core.hash.call(null,k);
var bucket__12988 = (this__12983.hashobj[h__12987]);

if(cljs.core.truth_(bucket__12988))
{var new_bucket__12991 = cljs.core.aclone.call(null,bucket__12988);
var new_hashobj__12992 = goog.object.clone.call(null,this__12983.hashobj);

(new_hashobj__12992[h__12987] = new_bucket__12991);
var temp__3695__auto____12995 = cljs.core.scan_array.call(null,2,k,new_bucket__12991);

if(cljs.core.truth_(temp__3695__auto____12995))
{var i__12997 = temp__3695__auto____12995;

(new_bucket__12991[(i__12997 + 1)] = v);
return (new cljs.core.HashMap(this__12983.meta,this__12983.count,new_hashobj__12992));
} else
{new_bucket__12991.push(k,v);
return (new cljs.core.HashMap(this__12983.meta,(this__12983.count + 1),new_hashobj__12992));
}
} else
{var new_hashobj__13004 = goog.object.clone.call(null,this__12983.hashobj);

(new_hashobj__13004[h__12987] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12983.meta,(this__12983.count + 1),new_hashobj__13004));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13005 = this;
var bucket__13007 = (this__13005.hashobj[cljs.core.hash.call(null,k)]);
var i__13008 = (cljs.core.truth_(bucket__13007)?cljs.core.scan_array.call(null,2,k,bucket__13007):null);

if(cljs.core.truth_(i__13008))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13067 = null;
var G__13067__13068 = (function (coll,k){
var this__13014 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13067__13069 = (function (coll,k,not_found){
var this__13015 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13067 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13067__13068.call(this,coll,k);
case  3 :
return G__13067__13069.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13067;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13021 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13025 = this;
if(cljs.core.truth_((this__13025.count > 0)))
{var hashes__13029 = cljs.core.js_keys.call(null,this__13025.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12935_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13025.hashobj[p1__12935_SHARP_])));
}),hashes__13029);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13031 = this;
return this__13031.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13034 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13036 = this;
return (new cljs.core.HashMap(meta,this__13036.count,this__13036.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13038 = this;
return this__13038.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13040 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13040.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13041 = this;
var h__13043 = cljs.core.hash.call(null,k);
var bucket__13045 = (this__13041.hashobj[h__13043]);
var i__13046 = (cljs.core.truth_(bucket__13045)?cljs.core.scan_array.call(null,2,k,bucket__13045):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13046)))
{return coll;
} else
{var new_hashobj__13047 = goog.object.clone.call(null,this__13041.hashobj);

if(cljs.core.truth_((3 > bucket__13045.length)))
{cljs.core.js_delete.call(null,new_hashobj__13047,h__13043);
} else
{var new_bucket__13049 = cljs.core.aclone.call(null,bucket__13045);

new_bucket__13049.splice(i__13046,2);
(new_hashobj__13047[h__13043] = new_bucket__13049);
}
return (new cljs.core.HashMap(this__13041.meta,(this__13041.count - 1),new_hashobj__13047));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13146 = ks.length;

var i__13148 = 0;
var out__13149 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13148 < len__13146)))
{{
var G__13152 = (i__13148 + 1);
var G__13153 = cljs.core.assoc.call(null,out__13149,(ks[i__13148]),(vs[i__13148]));
i__13148 = G__13152;
out__13149 = G__13153;
continue;
}
} else
{return out__13149;
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
var in$__13156 = cljs.core.seq.call(null,keyvals);
var out__13157 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13156))
{{
var G__13195 = cljs.core.nnext.call(null,in$__13156);
var G__13196 = cljs.core.assoc.call(null,out__13157,cljs.core.first.call(null,in$__13156),cljs.core.second.call(null,in$__13156));
in$__13156 = G__13195;
out__13157 = G__13196;
continue;
}
} else
{return out__13157;
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
hash_map.cljs$lang$applyTo = (function (arglist__13199){
var keyvals = cljs.core.seq( arglist__13199 );;
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
{return cljs.core.reduce.call(null,(function (p1__13202_SHARP_,p2__13204_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13209 = p1__13202_SHARP_;

if(cljs.core.truth_(or__3548__auto____13209))
{return or__3548__auto____13209;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13204_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13211){
var maps = cljs.core.seq( arglist__13211 );;
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
var v__13216 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13214)))
{return cljs.core.assoc.call(null,m,k__13214,f.call(null,cljs.core.get.call(null,m,k__13214),v__13216));
} else
{return cljs.core.assoc.call(null,m,k__13214,v__13216);
}
});
var merge2__13223 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13218,(function (){var or__3548__auto____13221 = m1;

if(cljs.core.truth_(or__3548__auto____13221))
{return or__3548__auto____13221;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13223,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13230){
var f = cljs.core.first(arglist__13230);
var maps = cljs.core.rest(arglist__13230);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13242 = cljs.core.ObjMap.fromObject([],{});
var keys__13243 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13243))
{var key__13244 = cljs.core.first.call(null,keys__13243);
var entry__13246 = cljs.core.get.call(null,map,key__13244,"﷐'user/not-found");

{
var G__13250 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13246,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13242,key__13244,entry__13246):ret__13242);
var G__13251 = cljs.core.next.call(null,keys__13243);
ret__13242 = G__13250;
keys__13243 = G__13251;
continue;
}
} else
{return ret__13242;
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
var this__13258 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13347 = null;
var G__13347__13348 = (function (coll,v){
var this__13259 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13347__13349 = (function (coll,v,not_found){
var this__13322 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13322.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13347 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13347__13348.call(this,coll,v);
case  3 :
return G__13347__13349.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13347;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13355 = null;
var G__13355__13357 = (function (coll,k){
var this__13323 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13355__13359 = (function (coll,k,not_found){
var this__13328 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13355 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13355__13357.call(this,coll,k);
case  3 :
return G__13355__13359.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13355;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13329 = this;
return (new cljs.core.Set(this__13329.meta,cljs.core.assoc.call(null,this__13329.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13330 = this;
return cljs.core.keys.call(null,this__13330.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13331 = this;
return (new cljs.core.Set(this__13331.meta,cljs.core.dissoc.call(null,this__13331.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13332 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13333 = this;
var and__3546__auto____13338 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13338))
{var and__3546__auto____13339 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13339))
{return cljs.core.every_QMARK_.call(null,(function (p1__13235_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13235_SHARP_);
}),other);
} else
{return and__3546__auto____13339;
}
} else
{return and__3546__auto____13338;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13342 = this;
return (new cljs.core.Set(meta,this__13342.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13343 = this;
return this__13343.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13344 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13344.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13376 = cljs.core.seq.call(null,coll);
var out__13378 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13376))))
{{
var G__13383 = cljs.core.rest.call(null,in$__13376);
var G__13385 = cljs.core.conj.call(null,out__13378,cljs.core.first.call(null,in$__13376));
in$__13376 = G__13383;
out__13378 = G__13385;
continue;
}
} else
{return out__13378;
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
{var n__13390 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13393 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13393))
{var e__13394 = temp__3695__auto____13393;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13394));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13390,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13370_SHARP_){
var temp__3695__auto____13399 = cljs.core.find.call(null,smap,p1__13370_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13399))
{var e__13400 = temp__3695__auto____13399;

return cljs.core.second.call(null,e__13400);
} else
{return p1__13370_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13422 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13415,seen){
while(true){
var vec__13416__13417 = p__13415;
var f__13418 = cljs.core.nth.call(null,vec__13416__13417,0,null);
var xs__13419 = vec__13416__13417;

var temp__3698__auto____13420 = cljs.core.seq.call(null,xs__13419);

if(cljs.core.truth_(temp__3698__auto____13420))
{var s__13421 = temp__3698__auto____13420;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13418)))
{{
var G__13448 = cljs.core.rest.call(null,s__13421);
var G__13449 = seen;
p__13415 = G__13448;
seen = G__13449;
continue;
}
} else
{return cljs.core.cons.call(null,f__13418,step.call(null,cljs.core.rest.call(null,s__13421),cljs.core.conj.call(null,seen,f__13418)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13422.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13452 = cljs.core.Vector.fromArray([]);
var s__13453 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13453)))
{{
var G__13502 = cljs.core.conj.call(null,ret__13452,cljs.core.first.call(null,s__13453));
var G__13503 = cljs.core.next.call(null,s__13453);
ret__13452 = G__13502;
s__13453 = G__13503;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13452);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13510 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13510))
{return or__3548__auto____13510;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13514 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13514 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13514 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13535 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13535))
{return or__3548__auto____13535;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13539 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13539 > -1)))
{return cljs.core.subs.call(null,x,2,i__13539);
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
var map__13556 = cljs.core.ObjMap.fromObject([],{});
var ks__13557 = cljs.core.seq.call(null,keys);
var vs__13558 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13561 = ks__13557;

if(cljs.core.truth_(and__3546__auto____13561))
{return vs__13558;
} else
{return and__3546__auto____13561;
}
})()))
{{
var G__13565 = cljs.core.assoc.call(null,map__13556,cljs.core.first.call(null,ks__13557),cljs.core.first.call(null,vs__13558));
var G__13566 = cljs.core.next.call(null,ks__13557);
var G__13567 = cljs.core.next.call(null,vs__13558);
map__13556 = G__13565;
ks__13557 = G__13566;
vs__13558 = G__13567;
continue;
}
} else
{return map__13556;
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
var max_key__13575 = (function (k,x){
return x;
});
var max_key__13576 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13577 = (function() { 
var G__13580__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13545_SHARP_,p2__13546_SHARP_){
return max_key.call(null,k,p1__13545_SHARP_,p2__13546_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13580 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13580__delegate.call(this, k, x, y, more);
};
G__13580.cljs$lang$maxFixedArity = 3;
G__13580.cljs$lang$applyTo = (function (arglist__13584){
var k = cljs.core.first(arglist__13584);
var x = cljs.core.first(cljs.core.next(arglist__13584));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13584)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13584)));
return G__13580__delegate.call(this, k, x, y, more);
});
return G__13580;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13575.call(this,k,x);
case  3 :
return max_key__13576.call(this,k,x,y);
default:
return max_key__13577.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13577.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13587 = (function (k,x){
return x;
});
var min_key__13588 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13589 = (function() { 
var G__13591__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13568_SHARP_,p2__13569_SHARP_){
return min_key.call(null,k,p1__13568_SHARP_,p2__13569_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13591 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13591__delegate.call(this, k, x, y, more);
};
G__13591.cljs$lang$maxFixedArity = 3;
G__13591.cljs$lang$applyTo = (function (arglist__13592){
var k = cljs.core.first(arglist__13592);
var x = cljs.core.first(cljs.core.next(arglist__13592));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13592)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13592)));
return G__13591__delegate.call(this, k, x, y, more);
});
return G__13591;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13587.call(this,k,x);
case  3 :
return min_key__13588.call(this,k,x,y);
default:
return min_key__13589.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13589.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13597 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13598 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13594 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13594))
{var s__13595 = temp__3698__auto____13594;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13595),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13595)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13597.call(this,n,step);
case  3 :
return partition_all__13598.call(this,n,step,coll);
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
var temp__3698__auto____13602 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13602))
{var s__13603 = temp__3698__auto____13602;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13603))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13603),take_while.call(null,pred,cljs.core.rest.call(null,s__13603)));
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
var this__13624 = this;
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
var G__13665 = null;
var G__13665__13666 = (function (rng,f){
var this__13628 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13665__13667 = (function (rng,f,s){
var this__13629 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13665 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13665__13666.call(this,rng,f);
case  3 :
return G__13665__13667.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13665;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13631 = this;
var comp__13637 = (cljs.core.truth_((this__13631.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13637.call(null,this__13631.start,this__13631.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13639 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13639.end - this__13639.start) / this__13639.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13642 = this;
return this__13642.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13644 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13644.meta,(this__13644.start + this__13644.step),this__13644.end,this__13644.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13647 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13648 = this;
return (new cljs.core.Range(meta,this__13648.start,this__13648.end,this__13648.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13649 = this;
return this__13649.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13705 = null;
var G__13705__13706 = (function (rng,n){
var this__13651 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13651.start + (n * this__13651.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13655 = (this__13651.start > this__13651.end);

if(cljs.core.truth_(and__3546__auto____13655))
{return cljs.core._EQ_.call(null,this__13651.step,0);
} else
{return and__3546__auto____13655;
}
})()))
{return this__13651.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13705__13707 = (function (rng,n,not_found){
var this__13656 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13656.start + (n * this__13656.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13661 = (this__13656.start > this__13656.end);

if(cljs.core.truth_(and__3546__auto____13661))
{return cljs.core._EQ_.call(null,this__13656.step,0);
} else
{return and__3546__auto____13661;
}
})()))
{return this__13656.start;
} else
{return not_found;
}
}
});
G__13705 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13705__13706.call(this,rng,n);
case  3 :
return G__13705__13707.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13705;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13662 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13662.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13720 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13721 = (function (end){
return range.call(null,0,end,1);
});
var range__13722 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13723 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13720.call(this);
case  1 :
return range__13721.call(this,start);
case  2 :
return range__13722.call(this,start,end);
case  3 :
return range__13723.call(this,start,end,step);
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
var temp__3698__auto____13729 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13729))
{var s__13730 = temp__3698__auto____13729;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13730),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13730)));
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
var temp__3698__auto____13743 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13743))
{var s__13744 = temp__3698__auto____13743;

var fst__13745 = cljs.core.first.call(null,s__13744);
var fv__13746 = f.call(null,fst__13745);
var run__13748 = cljs.core.cons.call(null,fst__13745,cljs.core.take_while.call(null,(function (p1__13736_SHARP_){
return cljs.core._EQ_.call(null,fv__13746,f.call(null,p1__13736_SHARP_));
}),cljs.core.next.call(null,s__13744)));

return cljs.core.cons.call(null,run__13748,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13748),s__13744))));
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
var reductions__13846 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13812 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13812))
{var s__13814 = temp__3695__auto____13812;

return reductions.call(null,f,cljs.core.first.call(null,s__13814),cljs.core.rest.call(null,s__13814));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13847 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13821 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13821))
{var s__13823 = temp__3698__auto____13821;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13823)),cljs.core.rest.call(null,s__13823));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13846.call(this,f,init);
case  3 :
return reductions__13847.call(this,f,init,coll);
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
var juxt__13921 = (function (f){
return (function() {
var G__13927 = null;
var G__13927__13928 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13927__13929 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13927__13930 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13927__13931 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13927__13932 = (function() { 
var G__13934__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13934 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13934__delegate.call(this, x, y, z, args);
};
G__13934.cljs$lang$maxFixedArity = 3;
G__13934.cljs$lang$applyTo = (function (arglist__13935){
var x = cljs.core.first(arglist__13935);
var y = cljs.core.first(cljs.core.next(arglist__13935));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13935)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13935)));
return G__13934__delegate.call(this, x, y, z, args);
});
return G__13934;
})()
;
G__13927 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13927__13928.call(this);
case  1 :
return G__13927__13929.call(this,x);
case  2 :
return G__13927__13930.call(this,x,y);
case  3 :
return G__13927__13931.call(this,x,y,z);
default:
return G__13927__13932.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13927.cljs$lang$maxFixedArity = 3;
G__13927.cljs$lang$applyTo = G__13927__13932.cljs$lang$applyTo;
return G__13927;
})()
});
var juxt__13922 = (function (f,g){
return (function() {
var G__13936 = null;
var G__13936__13937 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13936__13938 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13936__13939 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13936__13940 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13936__13941 = (function() { 
var G__13957__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13957 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13957__delegate.call(this, x, y, z, args);
};
G__13957.cljs$lang$maxFixedArity = 3;
G__13957.cljs$lang$applyTo = (function (arglist__13961){
var x = cljs.core.first(arglist__13961);
var y = cljs.core.first(cljs.core.next(arglist__13961));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13961)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13961)));
return G__13957__delegate.call(this, x, y, z, args);
});
return G__13957;
})()
;
G__13936 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13936__13937.call(this);
case  1 :
return G__13936__13938.call(this,x);
case  2 :
return G__13936__13939.call(this,x,y);
case  3 :
return G__13936__13940.call(this,x,y,z);
default:
return G__13936__13941.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13936.cljs$lang$maxFixedArity = 3;
G__13936.cljs$lang$applyTo = G__13936__13941.cljs$lang$applyTo;
return G__13936;
})()
});
var juxt__13923 = (function (f,g,h){
return (function() {
var G__13965 = null;
var G__13965__13966 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13965__13967 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13965__13968 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13965__13969 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13965__13970 = (function() { 
var G__13980__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13980 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13980__delegate.call(this, x, y, z, args);
};
G__13980.cljs$lang$maxFixedArity = 3;
G__13980.cljs$lang$applyTo = (function (arglist__13983){
var x = cljs.core.first(arglist__13983);
var y = cljs.core.first(cljs.core.next(arglist__13983));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13983)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13983)));
return G__13980__delegate.call(this, x, y, z, args);
});
return G__13980;
})()
;
G__13965 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13965__13966.call(this);
case  1 :
return G__13965__13967.call(this,x);
case  2 :
return G__13965__13968.call(this,x,y);
case  3 :
return G__13965__13969.call(this,x,y,z);
default:
return G__13965__13970.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13965.cljs$lang$maxFixedArity = 3;
G__13965.cljs$lang$applyTo = G__13965__13970.cljs$lang$applyTo;
return G__13965;
})()
});
var juxt__13924 = (function() { 
var G__13987__delegate = function (f,g,h,fs){
var fs__13901 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13992 = null;
var G__13992__13994 = (function (){
return cljs.core.reduce.call(null,(function (p1__13780_SHARP_,p2__13782_SHARP_){
return cljs.core.conj.call(null,p1__13780_SHARP_,p2__13782_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13901);
});
var G__13992__13995 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13785_SHARP_,p2__13786_SHARP_){
return cljs.core.conj.call(null,p1__13785_SHARP_,p2__13786_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13901);
});
var G__13992__13996 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13788_SHARP_,p2__13790_SHARP_){
return cljs.core.conj.call(null,p1__13788_SHARP_,p2__13790_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13901);
});
var G__13992__13998 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13804_SHARP_,p2__13805_SHARP_){
return cljs.core.conj.call(null,p1__13804_SHARP_,p2__13805_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13901);
});
var G__13992__14000 = (function() { 
var G__14010__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13806_SHARP_,p2__13807_SHARP_){
return cljs.core.conj.call(null,p1__13806_SHARP_,cljs.core.apply.call(null,p2__13807_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13901);
};
var G__14010 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14010__delegate.call(this, x, y, z, args);
};
G__14010.cljs$lang$maxFixedArity = 3;
G__14010.cljs$lang$applyTo = (function (arglist__14018){
var x = cljs.core.first(arglist__14018);
var y = cljs.core.first(cljs.core.next(arglist__14018));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14018)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14018)));
return G__14010__delegate.call(this, x, y, z, args);
});
return G__14010;
})()
;
G__13992 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13992__13994.call(this);
case  1 :
return G__13992__13995.call(this,x);
case  2 :
return G__13992__13996.call(this,x,y);
case  3 :
return G__13992__13998.call(this,x,y,z);
default:
return G__13992__14000.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13992.cljs$lang$maxFixedArity = 3;
G__13992.cljs$lang$applyTo = G__13992__14000.cljs$lang$applyTo;
return G__13992;
})()
};
var G__13987 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13987__delegate.call(this, f, g, h, fs);
};
G__13987.cljs$lang$maxFixedArity = 3;
G__13987.cljs$lang$applyTo = (function (arglist__14019){
var f = cljs.core.first(arglist__14019);
var g = cljs.core.first(cljs.core.next(arglist__14019));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14019)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14019)));
return G__13987__delegate.call(this, f, g, h, fs);
});
return G__13987;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13921.call(this,f);
case  2 :
return juxt__13922.call(this,f,g);
case  3 :
return juxt__13923.call(this,f,g,h);
default:
return juxt__13924.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13924.cljs$lang$applyTo;
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
var dorun__14035 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14039 = cljs.core.next.call(null,coll);
coll = G__14039;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14036 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14032 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14032))
{return (n > 0);
} else
{return and__3546__auto____14032;
}
})()))
{{
var G__14046 = (n - 1);
var G__14049 = cljs.core.next.call(null,coll);
n = G__14046;
coll = G__14049;
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
return dorun__14035.call(this,n);
case  2 :
return dorun__14036.call(this,n,coll);
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
var doall__14069 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14070 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14069.call(this,n);
case  2 :
return doall__14070.call(this,n,coll);
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
var matches__14103 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14103),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14103),1)))
{return cljs.core.first.call(null,matches__14103);
} else
{return cljs.core.vec.call(null,matches__14103);
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
var matches__14116 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14116)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14116),1)))
{return cljs.core.first.call(null,matches__14116);
} else
{return cljs.core.vec.call(null,matches__14116);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14176 = cljs.core.re_find.call(null,re,s);
var match_idx__14177 = s.search(re);
var match_str__14178 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14176))?cljs.core.first.call(null,match_data__14176):match_data__14176);
var post_match__14180 = cljs.core.subs.call(null,s,(match_idx__14177 + cljs.core.count.call(null,match_str__14178)));

if(cljs.core.truth_(match_data__14176))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14176,re_seq.call(null,re,post_match__14180));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14187_SHARP_){
return print_one.call(null,p1__14187_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14211 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14211))
{var and__3546__auto____14221 = (function (){var x__445__auto____14212 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14214 = x__445__auto____14212;

if(cljs.core.truth_(and__3546__auto____14214))
{var and__3546__auto____14216 = x__445__auto____14212.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14216))
{return cljs.core.not.call(null,x__445__auto____14212.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14216;
}
} else
{return and__3546__auto____14214;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14212);
}
})();

if(cljs.core.truth_(and__3546__auto____14221))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14221;
}
} else
{return and__3546__auto____14211;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14223 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14225 = x__445__auto____14223;

if(cljs.core.truth_(and__3546__auto____14225))
{var and__3546__auto____14226 = x__445__auto____14223.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14226))
{return cljs.core.not.call(null,x__445__auto____14223.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14226;
}
} else
{return and__3546__auto____14225;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14223);
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
var first_obj__14234 = cljs.core.first.call(null,objs);
var sb__14235 = (new goog.string.StringBuffer());

var G__14236__14237 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14236__14237))
{var obj__14240 = cljs.core.first.call(null,G__14236__14237);
var G__14236__14243 = G__14236__14237;

while(true){
if(cljs.core.truth_((obj__14240 === first_obj__14234)))
{} else
{sb__14235.append(" ");
}
var G__14244__14245 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14240,opts));

if(cljs.core.truth_(G__14244__14245))
{var string__14246 = cljs.core.first.call(null,G__14244__14245);
var G__14244__14247 = G__14244__14245;

while(true){
sb__14235.append(string__14246);
var temp__3698__auto____14248 = cljs.core.next.call(null,G__14244__14247);

if(cljs.core.truth_(temp__3698__auto____14248))
{var G__14244__14249 = temp__3698__auto____14248;

{
var G__14263 = cljs.core.first.call(null,G__14244__14249);
var G__14264 = G__14244__14249;
string__14246 = G__14263;
G__14244__14247 = G__14264;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14260 = cljs.core.next.call(null,G__14236__14243);

if(cljs.core.truth_(temp__3698__auto____14260))
{var G__14236__14262 = temp__3698__auto____14260;

{
var G__14265 = cljs.core.first.call(null,G__14236__14262);
var G__14266 = G__14236__14262;
obj__14240 = G__14265;
G__14236__14243 = G__14266;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14235);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14267 = cljs.core.first.call(null,objs);

var G__14268__14270 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14268__14270))
{var obj__14272 = cljs.core.first.call(null,G__14268__14270);
var G__14268__14274 = G__14268__14270;

while(true){
if(cljs.core.truth_((obj__14272 === first_obj__14267)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14275__14276 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14272,opts));

if(cljs.core.truth_(G__14275__14276))
{var string__14277 = cljs.core.first.call(null,G__14275__14276);
var G__14275__14279 = G__14275__14276;

while(true){
cljs.core.string_print.call(null,string__14277);
var temp__3698__auto____14280 = cljs.core.next.call(null,G__14275__14279);

if(cljs.core.truth_(temp__3698__auto____14280))
{var G__14275__14281 = temp__3698__auto____14280;

{
var G__14293 = cljs.core.first.call(null,G__14275__14281);
var G__14294 = G__14275__14281;
string__14277 = G__14293;
G__14275__14279 = G__14294;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14284 = cljs.core.next.call(null,G__14268__14274);

if(cljs.core.truth_(temp__3698__auto____14284))
{var G__14268__14288 = temp__3698__auto____14284;

{
var G__14300 = cljs.core.first.call(null,G__14268__14288);
var G__14301 = G__14268__14288;
obj__14272 = G__14300;
G__14268__14274 = G__14301;
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
pr_str.cljs$lang$applyTo = (function (arglist__14327){
var objs = cljs.core.seq( arglist__14327 );;
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
pr.cljs$lang$applyTo = (function (arglist__14341){
var objs = cljs.core.seq( arglist__14341 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14351){
var objs = cljs.core.seq( arglist__14351 );;
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
println.cljs$lang$applyTo = (function (arglist__14359){
var objs = cljs.core.seq( arglist__14359 );;
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
prn.cljs$lang$applyTo = (function (arglist__14411){
var objs = cljs.core.seq( arglist__14411 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14424 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14424,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14453 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14453))
{var nspc__14454 = temp__3698__auto____14453;

return cljs.core.str.call(null,nspc__14454,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14456 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14456))
{var nspc__14458 = temp__3698__auto____14456;

return cljs.core.str.call(null,nspc__14458,"/");
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
var pr_pair__14479 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14479,"{",", ","}",opts,coll);
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
var this__14524 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14525 = this;
var G__14526__14528 = cljs.core.seq.call(null,this__14525.watches);

if(cljs.core.truth_(G__14526__14528))
{var G__14530__14532 = cljs.core.first.call(null,G__14526__14528);
var vec__14531__14533 = G__14530__14532;
var key__14535 = cljs.core.nth.call(null,vec__14531__14533,0,null);
var f__14536 = cljs.core.nth.call(null,vec__14531__14533,1,null);
var G__14526__14537 = G__14526__14528;

var G__14530__14538 = G__14530__14532;
var G__14526__14539 = G__14526__14537;

while(true){
var vec__14540__14541 = G__14530__14538;
var key__14542 = cljs.core.nth.call(null,vec__14540__14541,0,null);
var f__14543 = cljs.core.nth.call(null,vec__14540__14541,1,null);
var G__14526__14544 = G__14526__14539;

f__14543.call(null,key__14542,this$,oldval,newval);
var temp__3698__auto____14545 = cljs.core.next.call(null,G__14526__14544);

if(cljs.core.truth_(temp__3698__auto____14545))
{var G__14526__14546 = temp__3698__auto____14545;

{
var G__14559 = cljs.core.first.call(null,G__14526__14546);
var G__14560 = G__14526__14546;
G__14530__14538 = G__14559;
G__14526__14539 = G__14560;
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
var this__14549 = this;
return this$.watches = cljs.core.assoc.call(null,this__14549.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14552 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14552.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14553 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14553.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14554 = this;
return this__14554.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14555 = this;
return this__14555.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14556 = this;
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
var atom__14591 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14592 = (function() { 
var G__14597__delegate = function (x,p__14561){
var map__14562__14564 = p__14561;
var map__14562__14567 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14562__14564))?cljs.core.apply.call(null,cljs.core.hash_map,map__14562__14564):map__14562__14564);
var validator__14569 = cljs.core.get.call(null,map__14562__14567,"﷐'validator");
var meta__14570 = cljs.core.get.call(null,map__14562__14567,"﷐'meta");

return (new cljs.core.Atom(x,meta__14570,validator__14569,null));
};
var G__14597 = function (x,var_args){
var p__14561 = null;
if (goog.isDef(var_args)) {
  p__14561 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14597__delegate.call(this, x, p__14561);
};
G__14597.cljs$lang$maxFixedArity = 1;
G__14597.cljs$lang$applyTo = (function (arglist__14601){
var x = cljs.core.first(arglist__14601);
var p__14561 = cljs.core.rest(arglist__14601);
return G__14597__delegate.call(this, x, p__14561);
});
return G__14597;
})()
;
atom = function(x,var_args){
var p__14561 = var_args;
switch(arguments.length){
case  1 :
return atom__14591.call(this,x);
default:
return atom__14592.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14592.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14604 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14604))
{var validate__14605 = temp__3698__auto____14604;

if(cljs.core.truth_(validate__14605.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14608 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14608,new_value);
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
var swap_BANG___14650 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14651 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14652 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14653 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14654 = (function() { 
var G__14670__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14670 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14670__delegate.call(this, a, f, x, y, z, more);
};
G__14670.cljs$lang$maxFixedArity = 5;
G__14670.cljs$lang$applyTo = (function (arglist__14673){
var a = cljs.core.first(arglist__14673);
var f = cljs.core.first(cljs.core.next(arglist__14673));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14673)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14673))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14673)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14673)))));
return G__14670__delegate.call(this, a, f, x, y, z, more);
});
return G__14670;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14650.call(this,a,f);
case  3 :
return swap_BANG___14651.call(this,a,f,x);
case  4 :
return swap_BANG___14652.call(this,a,f,x,y);
case  5 :
return swap_BANG___14653.call(this,a,f,x,y,z);
default:
return swap_BANG___14654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14654.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14743){
var iref = cljs.core.first(arglist__14743);
var f = cljs.core.first(cljs.core.next(arglist__14743));
var args = cljs.core.rest(cljs.core.next(arglist__14743));
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
var gensym__14747 = (function (){
return gensym.call(null,"G__");
});
var gensym__14748 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14747.call(this);
case  1 :
return gensym__14748.call(this,prefix_string);
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
var this__14771 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14771.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14773 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14773.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14773.state,this__14773.f);
}
return cljs.core.deref.call(null,this__14773.state);
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
delay.cljs$lang$applyTo = (function (arglist__14779){
var body = cljs.core.seq( arglist__14779 );;
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
var map__14826__14827 = options;
var map__14826__14829 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14826__14827))?cljs.core.apply.call(null,cljs.core.hash_map,map__14826__14827):map__14826__14827);
var keywordize_keys__14831 = cljs.core.get.call(null,map__14826__14829,"﷐'keywordize-keys");
var keyfn__14832 = (cljs.core.truth_(keywordize_keys__14831)?cljs.core.keyword:cljs.core.str);
var f__14844 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14843 = (function iter__14837(s__14838){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14838__14841 = s__14838;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14838__14841)))
{var k__14842 = cljs.core.first.call(null,s__14838__14841);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14832.call(null,k__14842),thisfn.call(null,(x[k__14842]))]),iter__14837.call(null,cljs.core.rest.call(null,s__14838__14841)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14843.call(null,cljs.core.js_keys.call(null,x));
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

return f__14844.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14863){
var x = cljs.core.first(arglist__14863);
var options = cljs.core.rest(arglist__14863);
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
var mem__14867 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14874__delegate = function (args){
var temp__3695__auto____14868 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14867),args);

if(cljs.core.truth_(temp__3695__auto____14868))
{var v__14869 = temp__3695__auto____14868;

return v__14869;
} else
{var ret__14870 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14867,cljs.core.assoc,args,ret__14870);
return ret__14870;
}
};
var G__14874 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14874__delegate.call(this, args);
};
G__14874.cljs$lang$maxFixedArity = 0;
G__14874.cljs$lang$applyTo = (function (arglist__14876){
var args = cljs.core.seq( arglist__14876 );;
return G__14874__delegate.call(this, args);
});
return G__14874;
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
var trampoline__14893 = (function (f){
while(true){
var ret__14877 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14877)))
{{
var G__14896 = ret__14877;
f = G__14896;
continue;
}
} else
{return ret__14877;
}
break;
}
});
var trampoline__14894 = (function() { 
var G__14897__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14897 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14897__delegate.call(this, f, args);
};
G__14897.cljs$lang$maxFixedArity = 1;
G__14897.cljs$lang$applyTo = (function (arglist__14898){
var f = cljs.core.first(arglist__14898);
var args = cljs.core.rest(arglist__14898);
return G__14897__delegate.call(this, f, args);
});
return G__14897;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14893.call(this,f);
default:
return trampoline__14894.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14894.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14906 = (function (){
return rand.call(null,1);
});
var rand__14907 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14906.call(this);
case  1 :
return rand__14907.call(this,n);
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
var k__14948 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14948,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14948,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14974 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14975 = (function (h,child,parent){
var or__3548__auto____14962 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14962))
{return or__3548__auto____14962;
} else
{var or__3548__auto____14963 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14963))
{return or__3548__auto____14963;
} else
{var and__3546__auto____14964 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14964))
{var and__3546__auto____14966 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14966))
{var and__3546__auto____14967 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14967))
{var ret__14968 = true;
var i__14969 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14970 = cljs.core.not.call(null,ret__14968);

if(cljs.core.truth_(or__3548__auto____14970))
{return or__3548__auto____14970;
} else
{return cljs.core._EQ_.call(null,i__14969,cljs.core.count.call(null,parent));
}
})()))
{return ret__14968;
} else
{{
var G__14984 = isa_QMARK_.call(null,h,child.call(null,i__14969),parent.call(null,i__14969));
var G__14985 = (i__14969 + 1);
ret__14968 = G__14984;
i__14969 = G__14985;
continue;
}
}
break;
}
} else
{return and__3546__auto____14967;
}
} else
{return and__3546__auto____14966;
}
} else
{return and__3546__auto____14964;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14974.call(this,h,child);
case  3 :
return isa_QMARK___14975.call(this,h,child,parent);
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
var parents__14991 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14992 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14991.call(this,h);
case  2 :
return parents__14992.call(this,h,tag);
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
var ancestors__14997 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14998 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14997.call(this,h);
case  2 :
return ancestors__14998.call(this,h,tag);
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
var descendants__15009 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15010 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15009.call(this,h);
case  2 :
return descendants__15010.call(this,h,tag);
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
var derive__15063 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15064 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15024 = "﷐'parents".call(null,h);
var td__15025 = "﷐'descendants".call(null,h);
var ta__15026 = "﷐'ancestors".call(null,h);
var tf__15030 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15036 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15024.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15026.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15026.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15024,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15030.call(null,"﷐'ancestors".call(null,h),tag,td__15025,parent,ta__15026),"﷐'descendants":tf__15030.call(null,"﷐'descendants".call(null,h),parent,ta__15026,tag,td__15025)});
})());

if(cljs.core.truth_(or__3548__auto____15036))
{return or__3548__auto____15036;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15063.call(this,h,tag);
case  3 :
return derive__15064.call(this,h,tag,parent);
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
var underive__15096 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15097 = (function (h,tag,parent){
var parentMap__15083 = "﷐'parents".call(null,h);
var childsParents__15084 = (cljs.core.truth_(parentMap__15083.call(null,tag))?cljs.core.disj.call(null,parentMap__15083.call(null,tag),parent):cljs.core.set([]));
var newParents__15085 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15084))?cljs.core.assoc.call(null,parentMap__15083,tag,childsParents__15084):cljs.core.dissoc.call(null,parentMap__15083,tag));
var deriv_seq__15089 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15015_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15015_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15015_SHARP_),cljs.core.second.call(null,p1__15015_SHARP_)));
}),cljs.core.seq.call(null,newParents__15085)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15083.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15017_SHARP_,p2__15018_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15017_SHARP_,p2__15018_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15089));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15096.call(this,h,tag);
case  3 :
return underive__15097.call(this,h,tag,parent);
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
var xprefs__15109 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15111 = (cljs.core.truth_((function (){var and__3546__auto____15110 = xprefs__15109;

if(cljs.core.truth_(and__3546__auto____15110))
{return xprefs__15109.call(null,y);
} else
{return and__3546__auto____15110;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15111))
{return or__3548__auto____15111;
} else
{var or__3548__auto____15113 = (function (){var ps__15112 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15112) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15112),prefer_table)))
{} else
{}
{
var G__15126 = cljs.core.rest.call(null,ps__15112);
ps__15112 = G__15126;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15113))
{return or__3548__auto____15113;
} else
{var or__3548__auto____15119 = (function (){var ps__15117 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15117) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15117),y,prefer_table)))
{} else
{}
{
var G__15127 = cljs.core.rest.call(null,ps__15117);
ps__15117 = G__15127;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15119))
{return or__3548__auto____15119;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15135 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15135))
{return or__3548__auto____15135;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15148 = cljs.core.reduce.call(null,(function (be,p__15137){
var vec__15138__15139 = p__15137;
var k__15140 = cljs.core.nth.call(null,vec__15138__15139,0,null);
var ___15141 = cljs.core.nth.call(null,vec__15138__15139,1,null);
var e__15143 = vec__15138__15139;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15140)))
{var be2__15147 = (cljs.core.truth_((function (){var or__3548__auto____15146 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15146))
{return or__3548__auto____15146;
} else
{return cljs.core.dominates.call(null,k__15140,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15143:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15147),k__15140,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15140," and ",cljs.core.first.call(null,be2__15147),", and neither is preferred")));
}
return be2__15147;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15148))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15148));
return cljs.core.second.call(null,best_entry__15148);
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
if(cljs.core.truth_((function (){var and__3546__auto____15156 = mf;

if(cljs.core.truth_(and__3546__auto____15156))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15156;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15157 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15157))
{return or__3548__auto____15157;
} else
{var or__3548__auto____15159 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15159))
{return or__3548__auto____15159;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15164 = mf;

if(cljs.core.truth_(and__3546__auto____15164))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15164;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15165 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15165))
{return or__3548__auto____15165;
} else
{var or__3548__auto____15166 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15166))
{return or__3548__auto____15166;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15173 = mf;

if(cljs.core.truth_(and__3546__auto____15173))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15173;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15175 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15175))
{return or__3548__auto____15175;
} else
{var or__3548__auto____15177 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15177))
{return or__3548__auto____15177;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15182 = mf;

if(cljs.core.truth_(and__3546__auto____15182))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15182;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15183 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15183))
{return or__3548__auto____15183;
} else
{var or__3548__auto____15184 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15184))
{return or__3548__auto____15184;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15188 = mf;

if(cljs.core.truth_(and__3546__auto____15188))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15188;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15189 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15189))
{return or__3548__auto____15189;
} else
{var or__3548__auto____15191 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15191))
{return or__3548__auto____15191;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15192 = mf;

if(cljs.core.truth_(and__3546__auto____15192))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15192;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15195 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15195))
{return or__3548__auto____15195;
} else
{var or__3548__auto____15196 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15196))
{return or__3548__auto____15196;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15203 = mf;

if(cljs.core.truth_(and__3546__auto____15203))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15203;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15205 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15205))
{return or__3548__auto____15205;
} else
{var or__3548__auto____15206 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15206))
{return or__3548__auto____15206;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15208 = mf;

if(cljs.core.truth_(and__3546__auto____15208))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15208;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15210 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15210))
{return or__3548__auto____15210;
} else
{var or__3548__auto____15211 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15211))
{return or__3548__auto____15211;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15391 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15392 = cljs.core._get_method.call(null,mf,dispatch_val__15391);

if(cljs.core.truth_(target_fn__15392))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15391)));
}
return cljs.core.apply.call(null,target_fn__15392,args);
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
var this__15394 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15395 = this;
cljs.core.swap_BANG_.call(null,this__15395.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15395.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15395.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15395.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15424 = this;
cljs.core.swap_BANG_.call(null,this__15424.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15424.method_cache,this__15424.method_table,this__15424.cached_hierarchy,this__15424.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15425 = this;
cljs.core.swap_BANG_.call(null,this__15425.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15425.method_cache,this__15425.method_table,this__15425.cached_hierarchy,this__15425.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15427 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15427.cached_hierarchy),cljs.core.deref.call(null,this__15427.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15427.method_cache,this__15427.method_table,this__15427.cached_hierarchy,this__15427.hierarchy);
}
var temp__3695__auto____15430 = cljs.core.deref.call(null,this__15427.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15430))
{var target_fn__15431 = temp__3695__auto____15430;

return target_fn__15431;
} else
{var temp__3695__auto____15432 = cljs.core.find_and_cache_best_method.call(null,this__15427.name,dispatch_val,this__15427.hierarchy,this__15427.method_table,this__15427.prefer_table,this__15427.method_cache,this__15427.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15432))
{var target_fn__15433 = temp__3695__auto____15432;

return target_fn__15433;
} else
{return cljs.core.deref.call(null,this__15427.method_table).call(null,this__15427.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15434 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15434.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15434.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15434.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15434.method_cache,this__15434.method_table,this__15434.cached_hierarchy,this__15434.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15435 = this;
return cljs.core.deref.call(null,this__15435.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15436 = this;
return cljs.core.deref.call(null,this__15436.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15437 = this;
return cljs.core.do_dispatch.call(null,mf,this__15437.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15443__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15443 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15443__delegate.call(this, _, args);
};
G__15443.cljs$lang$maxFixedArity = 1;
G__15443.cljs$lang$applyTo = (function (arglist__15445){
var _ = cljs.core.first(arglist__15445);
var args = cljs.core.rest(arglist__15445);
return G__15443__delegate.call(this, _, args);
});
return G__15443;
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
