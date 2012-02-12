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
var or__3548__auto____7259 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7259))
{return or__3548__auto____7259;
} else
{var or__3548__auto____7260 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7260))
{return or__3548__auto____7260;
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
var _invoke__7634 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7337 = this$;

if(cljs.core.truth_(and__3546__auto____7337))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7337;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7340 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7340))
{return or__3548__auto____7340;
} else
{var or__3548__auto____7342 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7342))
{return or__3548__auto____7342;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7635 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7346 = this$;

if(cljs.core.truth_(and__3546__auto____7346))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7346;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7348 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7348))
{return or__3548__auto____7348;
} else
{var or__3548__auto____7351 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7351))
{return or__3548__auto____7351;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7636 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7354 = this$;

if(cljs.core.truth_(and__3546__auto____7354))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7354;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7356 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7356))
{return or__3548__auto____7356;
} else
{var or__3548__auto____7359 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7359))
{return or__3548__auto____7359;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7637 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7362 = this$;

if(cljs.core.truth_(and__3546__auto____7362))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7362;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7365 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7365))
{return or__3548__auto____7365;
} else
{var or__3548__auto____7412 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7412))
{return or__3548__auto____7412;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7638 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7414 = this$;

if(cljs.core.truth_(and__3546__auto____7414))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7414;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7416 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7416))
{return or__3548__auto____7416;
} else
{var or__3548__auto____7417 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7417))
{return or__3548__auto____7417;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7419 = this$;

if(cljs.core.truth_(and__3546__auto____7419))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7419;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7421 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7421))
{return or__3548__auto____7421;
} else
{var or__3548__auto____7423 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7423))
{return or__3548__auto____7423;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7640 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7425 = this$;

if(cljs.core.truth_(and__3546__auto____7425))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7425;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7427 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7427))
{return or__3548__auto____7427;
} else
{var or__3548__auto____7429 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7429))
{return or__3548__auto____7429;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7641 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7431 = this$;

if(cljs.core.truth_(and__3546__auto____7431))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7431;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7433 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7433))
{return or__3548__auto____7433;
} else
{var or__3548__auto____7435 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7435))
{return or__3548__auto____7435;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7642 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7438 = this$;

if(cljs.core.truth_(and__3546__auto____7438))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7438;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7462 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7462))
{return or__3548__auto____7462;
} else
{var or__3548__auto____7464 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7464))
{return or__3548__auto____7464;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7643 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7468 = this$;

if(cljs.core.truth_(and__3546__auto____7468))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7468;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7471 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7471))
{return or__3548__auto____7471;
} else
{var or__3548__auto____7474 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7474))
{return or__3548__auto____7474;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7644 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7477 = this$;

if(cljs.core.truth_(and__3546__auto____7477))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7477;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7490 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7490))
{return or__3548__auto____7490;
} else
{var or__3548__auto____7505 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7505))
{return or__3548__auto____7505;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7645 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7507 = this$;

if(cljs.core.truth_(and__3546__auto____7507))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7507;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7510 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7510))
{return or__3548__auto____7510;
} else
{var or__3548__auto____7512 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7512))
{return or__3548__auto____7512;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7646 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7514 = this$;

if(cljs.core.truth_(and__3546__auto____7514))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7514;
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
var _invoke__7647 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7540 = this$;

if(cljs.core.truth_(and__3546__auto____7540))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7540;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7543 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7543))
{return or__3548__auto____7543;
} else
{var or__3548__auto____7544 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7544))
{return or__3548__auto____7544;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7648 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7546 = this$;

if(cljs.core.truth_(and__3546__auto____7546))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7546;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7549 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7549))
{return or__3548__auto____7549;
} else
{var or__3548__auto____7550 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7550))
{return or__3548__auto____7550;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7649 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7552 = this$;

if(cljs.core.truth_(and__3546__auto____7552))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7552;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7650 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7558 = this$;

if(cljs.core.truth_(and__3546__auto____7558))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7558;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7651 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7566 = this$;

if(cljs.core.truth_(and__3546__auto____7566))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7566;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7568 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7568))
{return or__3548__auto____7568;
} else
{var or__3548__auto____7569 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7569))
{return or__3548__auto____7569;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7652 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7622 = this$;

if(cljs.core.truth_(and__3546__auto____7622))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7622;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7624 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7624))
{return or__3548__auto____7624;
} else
{var or__3548__auto____7626 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7626))
{return or__3548__auto____7626;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7653 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7628 = this$;

if(cljs.core.truth_(and__3546__auto____7628))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7628;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7629 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7629))
{return or__3548__auto____7629;
} else
{var or__3548__auto____7630 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7630))
{return or__3548__auto____7630;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7654 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7631 = this$;

if(cljs.core.truth_(and__3546__auto____7631))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7631;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7632 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7632))
{return or__3548__auto____7632;
} else
{var or__3548__auto____7633 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7633))
{return or__3548__auto____7633;
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
return _invoke__7634.call(this,this$);
case  2 :
return _invoke__7635.call(this,this$,a);
case  3 :
return _invoke__7636.call(this,this$,a,b);
case  4 :
return _invoke__7637.call(this,this$,a,b,c);
case  5 :
return _invoke__7638.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7639.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7640.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7641.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7642.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7643.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7644.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7645.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7646.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7647.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7648.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7649.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7650.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7651.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7652.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7653.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7654.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7702 = coll;

if(cljs.core.truth_(and__3546__auto____7702))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7702;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7715 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7715))
{return or__3548__auto____7715;
} else
{var or__3548__auto____7717 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7717))
{return or__3548__auto____7717;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7726 = coll;

if(cljs.core.truth_(and__3546__auto____7726))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7726;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7729 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7729))
{return or__3548__auto____7729;
} else
{var or__3548__auto____7755 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7755))
{return or__3548__auto____7755;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7768 = coll;

if(cljs.core.truth_(and__3546__auto____7768))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7768;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7772 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7772))
{return or__3548__auto____7772;
} else
{var or__3548__auto____7773 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7773))
{return or__3548__auto____7773;
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
var _nth__7817 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7778 = coll;

if(cljs.core.truth_(and__3546__auto____7778))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7778;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7780 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7780))
{return or__3548__auto____7780;
} else
{var or__3548__auto____7782 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7782))
{return or__3548__auto____7782;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7818 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7784 = coll;

if(cljs.core.truth_(and__3546__auto____7784))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7784;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7814 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7814))
{return or__3548__auto____7814;
} else
{var or__3548__auto____7816 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7816))
{return or__3548__auto____7816;
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
return _nth__7817.call(this,coll,n);
case  3 :
return _nth__7818.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7824 = coll;

if(cljs.core.truth_(and__3546__auto____7824))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7824;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7825 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7825))
{return or__3548__auto____7825;
} else
{var or__3548__auto____7826 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7826))
{return or__3548__auto____7826;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7827 = coll;

if(cljs.core.truth_(and__3546__auto____7827))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7827;
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
var _lookup__7900 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7890 = o;

if(cljs.core.truth_(and__3546__auto____7890))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7890;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7891 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7891))
{return or__3548__auto____7891;
} else
{var or__3548__auto____7892 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7892))
{return or__3548__auto____7892;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7901 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7893 = o;

if(cljs.core.truth_(and__3546__auto____7893))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7893;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7894 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7894))
{return or__3548__auto____7894;
} else
{var or__3548__auto____7897 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7897))
{return or__3548__auto____7897;
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
return _lookup__7900.call(this,o,k);
case  3 :
return _lookup__7901.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7909 = coll;

if(cljs.core.truth_(and__3546__auto____7909))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7909;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7912 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7912))
{return or__3548__auto____7912;
} else
{var or__3548__auto____7913 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7913))
{return or__3548__auto____7913;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7914 = coll;

if(cljs.core.truth_(and__3546__auto____7914))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7914;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7915 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{var or__3548__auto____7916 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7916))
{return or__3548__auto____7916;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7920 = coll;

if(cljs.core.truth_(and__3546__auto____7920))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7920;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7921 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7921))
{return or__3548__auto____7921;
} else
{var or__3548__auto____7922 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7922))
{return or__3548__auto____7922;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7928 = coll;

if(cljs.core.truth_(and__3546__auto____7928))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7928;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7931 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7931))
{return or__3548__auto____7931;
} else
{var or__3548__auto____7935 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7935))
{return or__3548__auto____7935;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7938 = coll;

if(cljs.core.truth_(and__3546__auto____7938))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7938;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7939 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7939))
{return or__3548__auto____7939;
} else
{var or__3548__auto____7942 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7942))
{return or__3548__auto____7942;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7947 = coll;

if(cljs.core.truth_(and__3546__auto____7947))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7947;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7948 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7948))
{return or__3548__auto____7948;
} else
{var or__3548__auto____7949 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7949))
{return or__3548__auto____7949;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7953 = coll;

if(cljs.core.truth_(and__3546__auto____7953))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7953;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7954 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7954))
{return or__3548__auto____7954;
} else
{var or__3548__auto____7955 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7955))
{return or__3548__auto____7955;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7959 = o;

if(cljs.core.truth_(and__3546__auto____7959))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7959;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7960 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7960))
{return or__3548__auto____7960;
} else
{var or__3548__auto____7961 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7961))
{return or__3548__auto____7961;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7965 = o;

if(cljs.core.truth_(and__3546__auto____7965))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7965;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7966 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7966))
{return or__3548__auto____7966;
} else
{var or__3548__auto____7967 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7967))
{return or__3548__auto____7967;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7975 = o;

if(cljs.core.truth_(and__3546__auto____7975))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7975;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7977 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7977))
{return or__3548__auto____7977;
} else
{var or__3548__auto____7979 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7979))
{return or__3548__auto____7979;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7982 = o;

if(cljs.core.truth_(and__3546__auto____7982))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7982;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7987 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7987))
{return or__3548__auto____7987;
} else
{var or__3548__auto____7988 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7988))
{return or__3548__auto____7988;
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
var _reduce__8049 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7995 = coll;

if(cljs.core.truth_(and__3546__auto____7995))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7995;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7998 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
} else
{var or__3548__auto____7999 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7999))
{return or__3548__auto____7999;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8050 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8002 = coll;

if(cljs.core.truth_(and__3546__auto____8002))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8002;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8047 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8047))
{return or__3548__auto____8047;
} else
{var or__3548__auto____8048 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8048))
{return or__3548__auto____8048;
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
return _reduce__8049.call(this,coll,f);
case  3 :
return _reduce__8050.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8052 = o;

if(cljs.core.truth_(and__3546__auto____8052))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8052;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8053 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8053))
{return or__3548__auto____8053;
} else
{var or__3548__auto____8054 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8054))
{return or__3548__auto____8054;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8055 = o;

if(cljs.core.truth_(and__3546__auto____8055))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8055;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8056 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8056))
{return or__3548__auto____8056;
} else
{var or__3548__auto____8057 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8057))
{return or__3548__auto____8057;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8058 = o;

if(cljs.core.truth_(and__3546__auto____8058))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8058;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8059 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8059))
{return or__3548__auto____8059;
} else
{var or__3548__auto____8060 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8060))
{return or__3548__auto____8060;
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
if(cljs.core.truth_((function (){var and__3546__auto____8062 = o;

if(cljs.core.truth_(and__3546__auto____8062))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8062;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8064 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8064))
{return or__3548__auto____8064;
} else
{var or__3548__auto____8066 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8066))
{return or__3548__auto____8066;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8085 = d;

if(cljs.core.truth_(and__3546__auto____8085))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8085;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8086 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8086))
{return or__3548__auto____8086;
} else
{var or__3548__auto____8087 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8089 = this$;

if(cljs.core.truth_(and__3546__auto____8089))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8089;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8090 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8090))
{return or__3548__auto____8090;
} else
{var or__3548__auto____8091 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8091))
{return or__3548__auto____8091;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8092 = this$;

if(cljs.core.truth_(and__3546__auto____8092))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8092;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8093 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8093))
{return or__3548__auto____8093;
} else
{var or__3548__auto____8094 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8094))
{return or__3548__auto____8094;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8096 = this$;

if(cljs.core.truth_(and__3546__auto____8096))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8096;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8113 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8113))
{return or__3548__auto____8113;
} else
{var or__3548__auto____8114 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8114))
{return or__3548__auto____8114;
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
var G__8270 = null;
var G__8270__8271 = (function (o,k){
return null;
});
var G__8270__8272 = (function (o,k,not_found){
return not_found;
});
G__8270 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8270__8271.call(this,o,k);
case  3 :
return G__8270__8272.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8270;
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
var G__8274 = null;
var G__8274__8275 = (function (_,f){
return f.call(null);
});
var G__8274__8276 = (function (_,f,start){
return start;
});
G__8274 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8274__8275.call(this,_,f);
case  3 :
return G__8274__8276.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8274;
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
var ci_reduce__8321 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8307 = cljs.core._nth.call(null,cicoll,0);
var n__8308 = 1;

while(true){
if(cljs.core.truth_((n__8308 < cljs.core._count.call(null,cicoll))))
{{
var G__8325 = f.call(null,val__8307,cljs.core._nth.call(null,cicoll,n__8308));
var G__8326 = (n__8308 + 1);
val__8307 = G__8325;
n__8308 = G__8326;
continue;
}
} else
{return val__8307;
}
break;
}
}
});
var ci_reduce__8322 = (function (cicoll,f,val){
var val__8309 = val;
var n__8310 = 0;

while(true){
if(cljs.core.truth_((n__8310 < cljs.core._count.call(null,cicoll))))
{{
var G__8327 = f.call(null,val__8309,cljs.core._nth.call(null,cicoll,n__8310));
var G__8328 = (n__8310 + 1);
val__8309 = G__8327;
n__8310 = G__8328;
continue;
}
} else
{return val__8309;
}
break;
}
});
var ci_reduce__8323 = (function (cicoll,f,val,idx){
var val__8319 = val;
var n__8320 = idx;

while(true){
if(cljs.core.truth_((n__8320 < cljs.core._count.call(null,cicoll))))
{{
var G__8329 = f.call(null,val__8319,cljs.core._nth.call(null,cicoll,n__8320));
var G__8330 = (n__8320 + 1);
val__8319 = G__8329;
n__8320 = G__8330;
continue;
}
} else
{return val__8319;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8321.call(this,cicoll,f);
case  3 :
return ci_reduce__8322.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8323.call(this,cicoll,f,val,idx);
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
var this__8333 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8354 = null;
var G__8354__8356 = (function (_,f){
var this__8334 = this;
return cljs.core.ci_reduce.call(null,this__8334.a,f,(this__8334.a[this__8334.i]),(this__8334.i + 1));
});
var G__8354__8357 = (function (_,f,start){
var this__8335 = this;
return cljs.core.ci_reduce.call(null,this__8335.a,f,start,this__8335.i);
});
G__8354 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8354__8356.call(this,_,f);
case  3 :
return G__8354__8357.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8354;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8336 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8337 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8438 = null;
var G__8438__8439 = (function (coll,n){
var this__8338 = this;
var i__8339 = (n + this__8338.i);

if(cljs.core.truth_((i__8339 < this__8338.a.length)))
{return (this__8338.a[i__8339]);
} else
{return null;
}
});
var G__8438__8440 = (function (coll,n,not_found){
var this__8340 = this;
var i__8341 = (n + this__8340.i);

if(cljs.core.truth_((i__8341 < this__8340.a.length)))
{return (this__8340.a[i__8341]);
} else
{return not_found;
}
});
G__8438 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8438__8439.call(this,coll,n);
case  3 :
return G__8438__8440.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8438;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8342 = this;
return (this__8342.a.length - this__8342.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8343 = this;
return (this__8343.a[this__8343.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8344 = this;
if(cljs.core.truth_(((this__8344.i + 1) < this__8344.a.length)))
{return (new cljs.core.IndexedSeq(this__8344.a,(this__8344.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8349 = this;
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
var G__8455 = null;
var G__8455__8456 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8455__8457 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8455 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8455__8456.call(this,array,f);
case  3 :
return G__8455__8457.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8455;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8459 = null;
var G__8459__8460 = (function (array,k){
return (array[k]);
});
var G__8459__8461 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8459 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8459__8460.call(this,array,k);
case  3 :
return G__8459__8461.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8459;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8463 = null;
var G__8463__8464 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8463__8465 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8463 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8463__8464.call(this,array,n);
case  3 :
return G__8463__8465.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8463;
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
var temp__3698__auto____8468 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8468))
{var s__8469 = temp__3698__auto____8468;

return cljs.core._first.call(null,s__8469);
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
var G__8528 = cljs.core.next.call(null,s);
s = G__8528;
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
var s__8529 = cljs.core.seq.call(null,x);
var n__8530 = 0;

while(true){
if(cljs.core.truth_(s__8529))
{{
var G__8534 = cljs.core.next.call(null,s__8529);
var G__8535 = (n__8530 + 1);
s__8529 = G__8534;
n__8530 = G__8535;
continue;
}
} else
{return n__8530;
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
var conj__8549 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8550 = (function() { 
var G__8553__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8554 = conj.call(null,coll,x);
var G__8555 = cljs.core.first.call(null,xs);
var G__8556 = cljs.core.next.call(null,xs);
coll = G__8554;
x = G__8555;
xs = G__8556;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8553 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8553__delegate.call(this, coll, x, xs);
};
G__8553.cljs$lang$maxFixedArity = 2;
G__8553.cljs$lang$applyTo = (function (arglist__8558){
var coll = cljs.core.first(arglist__8558);
var x = cljs.core.first(cljs.core.next(arglist__8558));
var xs = cljs.core.rest(cljs.core.next(arglist__8558));
return G__8553__delegate.call(this, coll, x, xs);
});
return G__8553;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8549.call(this,coll,x);
default:
return conj__8550.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8550.cljs$lang$applyTo;
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
var nth__8571 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8572 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8571.call(this,coll,n);
case  3 :
return nth__8572.call(this,coll,n,not_found);
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
var get__8588 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8589 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8588.call(this,o,k);
case  3 :
return get__8589.call(this,o,k,not_found);
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
var assoc__8601 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8602 = (function() { 
var G__8612__delegate = function (coll,k,v,kvs){
while(true){
var ret__8595 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8614 = ret__8595;
var G__8615 = cljs.core.first.call(null,kvs);
var G__8616 = cljs.core.second.call(null,kvs);
var G__8617 = cljs.core.nnext.call(null,kvs);
coll = G__8614;
k = G__8615;
v = G__8616;
kvs = G__8617;
continue;
}
} else
{return ret__8595;
}
break;
}
};
var G__8612 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8612__delegate.call(this, coll, k, v, kvs);
};
G__8612.cljs$lang$maxFixedArity = 3;
G__8612.cljs$lang$applyTo = (function (arglist__8629){
var coll = cljs.core.first(arglist__8629);
var k = cljs.core.first(cljs.core.next(arglist__8629));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8629)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8629)));
return G__8612__delegate.call(this, coll, k, v, kvs);
});
return G__8612;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8601.call(this,coll,k,v);
default:
return assoc__8602.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8602.cljs$lang$applyTo;
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
var dissoc__8644 = (function (coll){
return coll;
});
var dissoc__8645 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8646 = (function() { 
var G__8648__delegate = function (coll,k,ks){
while(true){
var ret__8638 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8649 = ret__8638;
var G__8650 = cljs.core.first.call(null,ks);
var G__8651 = cljs.core.next.call(null,ks);
coll = G__8649;
k = G__8650;
ks = G__8651;
continue;
}
} else
{return ret__8638;
}
break;
}
};
var G__8648 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8648__delegate.call(this, coll, k, ks);
};
G__8648.cljs$lang$maxFixedArity = 2;
G__8648.cljs$lang$applyTo = (function (arglist__8652){
var coll = cljs.core.first(arglist__8652);
var k = cljs.core.first(cljs.core.next(arglist__8652));
var ks = cljs.core.rest(cljs.core.next(arglist__8652));
return G__8648__delegate.call(this, coll, k, ks);
});
return G__8648;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8644.call(this,coll);
case  2 :
return dissoc__8645.call(this,coll,k);
default:
return dissoc__8646.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8646.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8656 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8657 = x__445__auto____8656;

if(cljs.core.truth_(and__3546__auto____8657))
{var and__3546__auto____8658 = x__445__auto____8656.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8658))
{return cljs.core.not.call(null,x__445__auto____8656.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8658;
}
} else
{return and__3546__auto____8657;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8656);
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
var disj__8682 = (function (coll){
return coll;
});
var disj__8683 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8684 = (function() { 
var G__8691__delegate = function (coll,k,ks){
while(true){
var ret__8675 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8692 = ret__8675;
var G__8693 = cljs.core.first.call(null,ks);
var G__8694 = cljs.core.next.call(null,ks);
coll = G__8692;
k = G__8693;
ks = G__8694;
continue;
}
} else
{return ret__8675;
}
break;
}
};
var G__8691 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8691__delegate.call(this, coll, k, ks);
};
G__8691.cljs$lang$maxFixedArity = 2;
G__8691.cljs$lang$applyTo = (function (arglist__8696){
var coll = cljs.core.first(arglist__8696);
var k = cljs.core.first(cljs.core.next(arglist__8696));
var ks = cljs.core.rest(cljs.core.next(arglist__8696));
return G__8691__delegate.call(this, coll, k, ks);
});
return G__8691;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8682.call(this,coll);
case  2 :
return disj__8683.call(this,coll,k);
default:
return disj__8684.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8684.cljs$lang$applyTo;
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
{var x__445__auto____8711 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8712 = x__445__auto____8711;

if(cljs.core.truth_(and__3546__auto____8712))
{var and__3546__auto____8714 = x__445__auto____8711.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8714))
{return cljs.core.not.call(null,x__445__auto____8711.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8714;
}
} else
{return and__3546__auto____8712;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8711);
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
{var x__445__auto____8722 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8723 = x__445__auto____8722;

if(cljs.core.truth_(and__3546__auto____8723))
{var and__3546__auto____8724 = x__445__auto____8722.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8724))
{return cljs.core.not.call(null,x__445__auto____8722.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8724;
}
} else
{return and__3546__auto____8723;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8722);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8774 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8776 = x__445__auto____8774;

if(cljs.core.truth_(and__3546__auto____8776))
{var and__3546__auto____8778 = x__445__auto____8774.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8778))
{return cljs.core.not.call(null,x__445__auto____8774.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8778;
}
} else
{return and__3546__auto____8776;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8774);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8781 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8782 = x__445__auto____8781;

if(cljs.core.truth_(and__3546__auto____8782))
{var and__3546__auto____8785 = x__445__auto____8781.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8785))
{return cljs.core.not.call(null,x__445__auto____8781.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8785;
}
} else
{return and__3546__auto____8782;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8781);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8788 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8789 = x__445__auto____8788;

if(cljs.core.truth_(and__3546__auto____8789))
{var and__3546__auto____8790 = x__445__auto____8788.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8790))
{return cljs.core.not.call(null,x__445__auto____8788.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8790;
}
} else
{return and__3546__auto____8789;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8788);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8795 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8796 = x__445__auto____8795;

if(cljs.core.truth_(and__3546__auto____8796))
{var and__3546__auto____8800 = x__445__auto____8795.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8800))
{return cljs.core.not.call(null,x__445__auto____8795.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8800;
}
} else
{return and__3546__auto____8796;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8795);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8804 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8805 = x__445__auto____8804;

if(cljs.core.truth_(and__3546__auto____8805))
{var and__3546__auto____8806 = x__445__auto____8804.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8806))
{return cljs.core.not.call(null,x__445__auto____8804.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8806;
}
} else
{return and__3546__auto____8805;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8804);
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
{var and__3546__auto____8835 = x__445__auto____8833.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8835))
{return cljs.core.not.call(null,x__445__auto____8833.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8835;
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
var and__3546__auto____8837 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8837))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8840 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8840))
{return or__3548__auto____8840;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8837;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8852 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8852))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8852;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8857 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8857))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8857;
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
var and__3546__auto____8868 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8868))
{return (n == n.toFixed());
} else
{return and__3546__auto____8868;
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
if(cljs.core.truth_((function (){var and__3546__auto____8878 = coll;

if(cljs.core.truth_(and__3546__auto____8878))
{var and__3546__auto____8879 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8879))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8879;
}
} else
{return and__3546__auto____8878;
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
var distinct_QMARK___8918 = (function (x){
return true;
});
var distinct_QMARK___8920 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8921 = (function() { 
var G__8923__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8907 = cljs.core.set([y,x]);
var xs__8908 = more;

while(true){
var x__8909 = cljs.core.first.call(null,xs__8908);
var etc__8910 = cljs.core.next.call(null,xs__8908);

if(cljs.core.truth_(xs__8908))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8907,x__8909)))
{return false;
} else
{{
var G__8927 = cljs.core.conj.call(null,s__8907,x__8909);
var G__8928 = etc__8910;
s__8907 = G__8927;
xs__8908 = G__8928;
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
var G__8923 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8923__delegate.call(this, x, y, more);
};
G__8923.cljs$lang$maxFixedArity = 2;
G__8923.cljs$lang$applyTo = (function (arglist__8932){
var x = cljs.core.first(arglist__8932);
var y = cljs.core.first(cljs.core.next(arglist__8932));
var more = cljs.core.rest(cljs.core.next(arglist__8932));
return G__8923__delegate.call(this, x, y, more);
});
return G__8923;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8918.call(this,x);
case  2 :
return distinct_QMARK___8920.call(this,x,y);
default:
return distinct_QMARK___8921.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8921.cljs$lang$applyTo;
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
var r__8946 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8946)))
{return r__8946;
} else
{if(cljs.core.truth_(r__8946))
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
var sort__8957 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8958 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8956 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8956,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8956);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8957.call(this,comp);
case  2 :
return sort__8958.call(this,comp,coll);
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
var sort_by__8964 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8965 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8964.call(this,keyfn,comp);
case  3 :
return sort_by__8965.call(this,keyfn,comp,coll);
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
var reduce__8975 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8976 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8975.call(this,f,val);
case  3 :
return reduce__8976.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8989 = (function (f,coll){
var temp__3695__auto____8985 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8985))
{var s__8986 = temp__3695__auto____8985;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8986),cljs.core.next.call(null,s__8986));
} else
{return f.call(null);
}
});
var seq_reduce__8990 = (function (f,val,coll){
var val__8987 = val;
var coll__8988 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8988))
{{
var G__8992 = f.call(null,val__8987,cljs.core.first.call(null,coll__8988));
var G__8993 = cljs.core.next.call(null,coll__8988);
val__8987 = G__8992;
coll__8988 = G__8993;
continue;
}
} else
{return val__8987;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8989.call(this,f,val);
case  3 :
return seq_reduce__8990.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9006 = null;
var G__9006__9007 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9006__9009 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9006 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9006__9007.call(this,coll,f);
case  3 :
return G__9006__9009.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9006;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9034 = (function (){
return 0;
});
var _PLUS___9035 = (function (x){
return x;
});
var _PLUS___9036 = (function (x,y){
return (x + y);
});
var _PLUS___9037 = (function() { 
var G__9039__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9039 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9039__delegate.call(this, x, y, more);
};
G__9039.cljs$lang$maxFixedArity = 2;
G__9039.cljs$lang$applyTo = (function (arglist__9040){
var x = cljs.core.first(arglist__9040);
var y = cljs.core.first(cljs.core.next(arglist__9040));
var more = cljs.core.rest(cljs.core.next(arglist__9040));
return G__9039__delegate.call(this, x, y, more);
});
return G__9039;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9034.call(this);
case  1 :
return _PLUS___9035.call(this,x);
case  2 :
return _PLUS___9036.call(this,x,y);
default:
return _PLUS___9037.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9037.cljs$lang$applyTo;
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
var ___9053 = (function (x){
return (- x);
});
var ___9055 = (function (x,y){
return (x - y);
});
var ___9056 = (function() { 
var G__9058__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9058 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9058__delegate.call(this, x, y, more);
};
G__9058.cljs$lang$maxFixedArity = 2;
G__9058.cljs$lang$applyTo = (function (arglist__9059){
var x = cljs.core.first(arglist__9059);
var y = cljs.core.first(cljs.core.next(arglist__9059));
var more = cljs.core.rest(cljs.core.next(arglist__9059));
return G__9058__delegate.call(this, x, y, more);
});
return G__9058;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9053.call(this,x);
case  2 :
return ___9055.call(this,x,y);
default:
return ___9056.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9056.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9063 = (function (){
return 1;
});
var _STAR___9064 = (function (x){
return x;
});
var _STAR___9065 = (function (x,y){
return (x * y);
});
var _STAR___9066 = (function() { 
var G__9068__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9068 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9068__delegate.call(this, x, y, more);
};
G__9068.cljs$lang$maxFixedArity = 2;
G__9068.cljs$lang$applyTo = (function (arglist__9069){
var x = cljs.core.first(arglist__9069);
var y = cljs.core.first(cljs.core.next(arglist__9069));
var more = cljs.core.rest(cljs.core.next(arglist__9069));
return G__9068__delegate.call(this, x, y, more);
});
return G__9068;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9063.call(this);
case  1 :
return _STAR___9064.call(this,x);
case  2 :
return _STAR___9065.call(this,x,y);
default:
return _STAR___9066.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9066.cljs$lang$applyTo;
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
var _SLASH___9227 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9228 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9229 = (function() { 
var G__9234__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9234 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9234__delegate.call(this, x, y, more);
};
G__9234.cljs$lang$maxFixedArity = 2;
G__9234.cljs$lang$applyTo = (function (arglist__9235){
var x = cljs.core.first(arglist__9235);
var y = cljs.core.first(cljs.core.next(arglist__9235));
var more = cljs.core.rest(cljs.core.next(arglist__9235));
return G__9234__delegate.call(this, x, y, more);
});
return G__9234;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9227.call(this,x);
case  2 :
return _SLASH___9228.call(this,x,y);
default:
return _SLASH___9229.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9229.cljs$lang$applyTo;
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
var _LT___9239 = (function (x){
return true;
});
var _LT___9248 = (function (x,y){
return (x < y);
});
var _LT___9249 = (function() { 
var G__9251__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9252 = y;
var G__9253 = cljs.core.first.call(null,more);
var G__9254 = cljs.core.next.call(null,more);
x = G__9252;
y = G__9253;
more = G__9254;
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
var G__9251 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9251__delegate.call(this, x, y, more);
};
G__9251.cljs$lang$maxFixedArity = 2;
G__9251.cljs$lang$applyTo = (function (arglist__9256){
var x = cljs.core.first(arglist__9256);
var y = cljs.core.first(cljs.core.next(arglist__9256));
var more = cljs.core.rest(cljs.core.next(arglist__9256));
return G__9251__delegate.call(this, x, y, more);
});
return G__9251;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9239.call(this,x);
case  2 :
return _LT___9248.call(this,x,y);
default:
return _LT___9249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9249.cljs$lang$applyTo;
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
var _LT__EQ___9267 = (function (x){
return true;
});
var _LT__EQ___9269 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9270 = (function() { 
var G__9272__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9273 = y;
var G__9274 = cljs.core.first.call(null,more);
var G__9275 = cljs.core.next.call(null,more);
x = G__9273;
y = G__9274;
more = G__9275;
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
var G__9272 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9272__delegate.call(this, x, y, more);
};
G__9272.cljs$lang$maxFixedArity = 2;
G__9272.cljs$lang$applyTo = (function (arglist__9276){
var x = cljs.core.first(arglist__9276);
var y = cljs.core.first(cljs.core.next(arglist__9276));
var more = cljs.core.rest(cljs.core.next(arglist__9276));
return G__9272__delegate.call(this, x, y, more);
});
return G__9272;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9267.call(this,x);
case  2 :
return _LT__EQ___9269.call(this,x,y);
default:
return _LT__EQ___9270.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9270.cljs$lang$applyTo;
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
var _GT___9292 = (function (x){
return true;
});
var _GT___9293 = (function (x,y){
return (x > y);
});
var _GT___9294 = (function() { 
var G__9300__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9301 = y;
var G__9302 = cljs.core.first.call(null,more);
var G__9303 = cljs.core.next.call(null,more);
x = G__9301;
y = G__9302;
more = G__9303;
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
var G__9300 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9300__delegate.call(this, x, y, more);
};
G__9300.cljs$lang$maxFixedArity = 2;
G__9300.cljs$lang$applyTo = (function (arglist__9309){
var x = cljs.core.first(arglist__9309);
var y = cljs.core.first(cljs.core.next(arglist__9309));
var more = cljs.core.rest(cljs.core.next(arglist__9309));
return G__9300__delegate.call(this, x, y, more);
});
return G__9300;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9292.call(this,x);
case  2 :
return _GT___9293.call(this,x,y);
default:
return _GT___9294.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9294.cljs$lang$applyTo;
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
var _GT__EQ___9316 = (function (x){
return true;
});
var _GT__EQ___9317 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9318 = (function() { 
var G__9320__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9321 = y;
var G__9322 = cljs.core.first.call(null,more);
var G__9323 = cljs.core.next.call(null,more);
x = G__9321;
y = G__9322;
more = G__9323;
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
var G__9320 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9320__delegate.call(this, x, y, more);
};
G__9320.cljs$lang$maxFixedArity = 2;
G__9320.cljs$lang$applyTo = (function (arglist__9324){
var x = cljs.core.first(arglist__9324);
var y = cljs.core.first(cljs.core.next(arglist__9324));
var more = cljs.core.rest(cljs.core.next(arglist__9324));
return G__9320__delegate.call(this, x, y, more);
});
return G__9320;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9316.call(this,x);
case  2 :
return _GT__EQ___9317.call(this,x,y);
default:
return _GT__EQ___9318.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9318.cljs$lang$applyTo;
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
var max__9337 = (function (x){
return x;
});
var max__9338 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9339 = (function() { 
var G__9341__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9341 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9341__delegate.call(this, x, y, more);
};
G__9341.cljs$lang$maxFixedArity = 2;
G__9341.cljs$lang$applyTo = (function (arglist__9345){
var x = cljs.core.first(arglist__9345);
var y = cljs.core.first(cljs.core.next(arglist__9345));
var more = cljs.core.rest(cljs.core.next(arglist__9345));
return G__9341__delegate.call(this, x, y, more);
});
return G__9341;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9337.call(this,x);
case  2 :
return max__9338.call(this,x,y);
default:
return max__9339.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9339.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9351 = (function (x){
return x;
});
var min__9352 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9354 = (function() { 
var G__9356__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9356 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9356__delegate.call(this, x, y, more);
};
G__9356.cljs$lang$maxFixedArity = 2;
G__9356.cljs$lang$applyTo = (function (arglist__9358){
var x = cljs.core.first(arglist__9358);
var y = cljs.core.first(cljs.core.next(arglist__9358));
var more = cljs.core.rest(cljs.core.next(arglist__9358));
return G__9356__delegate.call(this, x, y, more);
});
return G__9356;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9351.call(this,x);
case  2 :
return min__9352.call(this,x,y);
default:
return min__9354.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9354.cljs$lang$applyTo;
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
var rem__9419 = (n % d);

return cljs.core.fix.call(null,((n - rem__9419) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9424 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9424));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9428 = (function (){
return Math.random.call(null);
});
var rand__9429 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9428.call(this);
case  1 :
return rand__9429.call(this,n);
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
var _EQ__EQ___9494 = (function (x){
return true;
});
var _EQ__EQ___9495 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9496 = (function() { 
var G__9499__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9500 = y;
var G__9501 = cljs.core.first.call(null,more);
var G__9502 = cljs.core.next.call(null,more);
x = G__9500;
y = G__9501;
more = G__9502;
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
var G__9499 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9499__delegate.call(this, x, y, more);
};
G__9499.cljs$lang$maxFixedArity = 2;
G__9499.cljs$lang$applyTo = (function (arglist__9504){
var x = cljs.core.first(arglist__9504);
var y = cljs.core.first(cljs.core.next(arglist__9504));
var more = cljs.core.rest(cljs.core.next(arglist__9504));
return G__9499__delegate.call(this, x, y, more);
});
return G__9499;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9494.call(this,x);
case  2 :
return _EQ__EQ___9495.call(this,x,y);
default:
return _EQ__EQ___9496.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9496.cljs$lang$applyTo;
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
var n__9513 = n;
var xs__9514 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9516 = xs__9514;

if(cljs.core.truth_(and__3546__auto____9516))
{return (n__9513 > 0);
} else
{return and__3546__auto____9516;
}
})()))
{{
var G__9520 = (n__9513 - 1);
var G__9521 = cljs.core.next.call(null,xs__9514);
n__9513 = G__9520;
xs__9514 = G__9521;
continue;
}
} else
{return xs__9514;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9533 = null;
var G__9533__9534 = (function (coll,n){
var temp__3695__auto____9524 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9524))
{var xs__9525 = temp__3695__auto____9524;

return cljs.core.first.call(null,xs__9525);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9533__9535 = (function (coll,n,not_found){
var temp__3695__auto____9526 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9526))
{var xs__9527 = temp__3695__auto____9526;

return cljs.core.first.call(null,xs__9527);
} else
{return not_found;
}
});
G__9533 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9533__9534.call(this,coll,n);
case  3 :
return G__9533__9535.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9533;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9544 = (function (){
return "";
});
var str_STAR___9545 = (function (x){
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
var str_STAR___9546 = (function() { 
var G__9549__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9550 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9551 = cljs.core.next.call(null,more);
sb = G__9550;
more = G__9551;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9549 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9549__delegate.call(this, x, ys);
};
G__9549.cljs$lang$maxFixedArity = 1;
G__9549.cljs$lang$applyTo = (function (arglist__9553){
var x = cljs.core.first(arglist__9553);
var ys = cljs.core.rest(arglist__9553);
return G__9549__delegate.call(this, x, ys);
});
return G__9549;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9544.call(this);
case  1 :
return str_STAR___9545.call(this,x);
default:
return str_STAR___9546.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9546.cljs$lang$applyTo;
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
var str__9567 = (function (){
return "";
});
var str__9568 = (function (x){
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
var str__9569 = (function() { 
var G__9577__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9577 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9577__delegate.call(this, x, ys);
};
G__9577.cljs$lang$maxFixedArity = 1;
G__9577.cljs$lang$applyTo = (function (arglist__9579){
var x = cljs.core.first(arglist__9579);
var ys = cljs.core.rest(arglist__9579);
return G__9577__delegate.call(this, x, ys);
});
return G__9577;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9567.call(this);
case  1 :
return str__9568.call(this,x);
default:
return str__9569.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9569.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9580 = (function (s,start){
return s.substring(start);
});
var subs__9581 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9580.call(this,s,start);
case  3 :
return subs__9581.call(this,s,start,end);
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
var symbol__9592 = (function (name){
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
var symbol__9593 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9592.call(this,ns);
case  2 :
return symbol__9593.call(this,ns,name);
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
var keyword__9601 = (function (name){
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
var keyword__9602 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9601.call(this,ns);
case  2 :
return keyword__9602.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9608 = cljs.core.seq.call(null,x);
var ys__9609 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9608)))
{return cljs.core.nil_QMARK_.call(null,ys__9609);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9609)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9608),cljs.core.first.call(null,ys__9609))))
{{
var G__9726 = cljs.core.next.call(null,xs__9608);
var G__9727 = cljs.core.next.call(null,ys__9609);
xs__9608 = G__9726;
ys__9609 = G__9727;
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
return cljs.core.reduce.call(null,(function (p1__9728_SHARP_,p2__9729_SHARP_){
return cljs.core.hash_combine.call(null,p1__9728_SHARP_,cljs.core.hash.call(null,p2__9729_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9866__9867 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9866__9867))
{var G__9869__9871 = cljs.core.first.call(null,G__9866__9867);
var vec__9870__9873 = G__9869__9871;
var key_name__9874 = cljs.core.nth.call(null,vec__9870__9873,0,null);
var f__9875 = cljs.core.nth.call(null,vec__9870__9873,1,null);
var G__9866__9877 = G__9866__9867;

var G__9869__9878 = G__9869__9871;
var G__9866__9879 = G__9866__9877;

while(true){
var vec__9880__9881 = G__9869__9878;
var key_name__9882 = cljs.core.nth.call(null,vec__9880__9881,0,null);
var f__9883 = cljs.core.nth.call(null,vec__9880__9881,1,null);
var G__9866__9884 = G__9866__9879;

var str_name__9885 = cljs.core.name.call(null,key_name__9882);

obj[str_name__9885] = f__9883;
var temp__3698__auto____9886 = cljs.core.next.call(null,G__9866__9884);

if(cljs.core.truth_(temp__3698__auto____9886))
{var G__9866__9887 = temp__3698__auto____9886;

{
var G__9892 = cljs.core.first.call(null,G__9866__9887);
var G__9893 = G__9866__9887;
G__9869__9878 = G__9892;
G__9866__9879 = G__9893;
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
var this__9901 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9902 = this;
return (new cljs.core.List(this__9902.meta,o,coll,(this__9902.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9903 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9904 = this;
return this__9904.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9905 = this;
return this__9905.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9910 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9912 = this;
return this__9912.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9913 = this;
return this__9913.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9915 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9917 = this;
return (new cljs.core.List(meta,this__9917.first,this__9917.rest,this__9917.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9919 = this;
return this__9919.meta;
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
var this__9989 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10000 = this;
return (new cljs.core.List(this__10000.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10001 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10002 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10005 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10006 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10007 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10009 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10011 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10017 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10021 = this;
return this__10021.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10026 = this;
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
list.cljs$lang$applyTo = (function (arglist__10072){
var items = cljs.core.seq( arglist__10072 );;
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
var this__10073 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10074 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10075 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10076 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10076.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10077 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10078 = this;
return this__10078.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10079 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10079.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10079.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10080 = this;
return this__10080.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10081 = this;
return (new cljs.core.Cons(meta,this__10081.first,this__10081.rest));
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
var G__10144 = null;
var G__10144__10145 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10144__10146 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10144 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10144__10145.call(this,string,f);
case  3 :
return G__10144__10146.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10144;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10148 = null;
var G__10148__10149 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10148__10150 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10148 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10148__10149.call(this,string,k);
case  3 :
return G__10148__10150.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10148;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10152 = null;
var G__10152__10154 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10152__10155 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10152 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10152__10154.call(this,string,n);
case  3 :
return G__10152__10155.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10152;
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
var G__10169 = null;
var G__10169__10170 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10169__10171 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10169 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10169__10170.call(this,this$,coll);
case  3 :
return G__10169__10171.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10169;
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
var x__10174 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10174;
} else
{lazy_seq.x = x__10174.call(null);
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
var this__10175 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10177 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10179 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10181 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10181.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10182 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10183 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10221 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10222 = this;
return this__10222.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10224 = this;
return (new cljs.core.LazySeq(meta,this__10224.realized,this__10224.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10235 = cljs.core.array.call(null);

var s__10236 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10236)))
{ary__10235.push(cljs.core.first.call(null,s__10236));
{
var G__10252 = cljs.core.next.call(null,s__10236);
s__10236 = G__10252;
continue;
}
} else
{return ary__10235;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10255 = s;
var i__10256 = n;
var sum__10257 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10258 = (i__10256 > 0);

if(cljs.core.truth_(and__3546__auto____10258))
{return cljs.core.seq.call(null,s__10255);
} else
{return and__3546__auto____10258;
}
})()))
{{
var G__10259 = cljs.core.next.call(null,s__10255);
var G__10260 = (i__10256 - 1);
var G__10261 = (sum__10257 + 1);
s__10255 = G__10259;
i__10256 = G__10260;
sum__10257 = G__10261;
continue;
}
} else
{return sum__10257;
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
var concat__10303 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10305 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10306 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10272 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10272))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10272),concat.call(null,cljs.core.rest.call(null,s__10272),y));
} else
{return y;
}
})));
});
var concat__10307 = (function() { 
var G__10315__delegate = function (x,y,zs){
var cat__10287 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10280 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10280))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10280),cat.call(null,cljs.core.rest.call(null,xys__10280),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10287.call(null,concat.call(null,x,y),zs);
};
var G__10315 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10315__delegate.call(this, x, y, zs);
};
G__10315.cljs$lang$maxFixedArity = 2;
G__10315.cljs$lang$applyTo = (function (arglist__10319){
var x = cljs.core.first(arglist__10319);
var y = cljs.core.first(cljs.core.next(arglist__10319));
var zs = cljs.core.rest(cljs.core.next(arglist__10319));
return G__10315__delegate.call(this, x, y, zs);
});
return G__10315;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10303.call(this);
case  1 :
return concat__10305.call(this,x);
case  2 :
return concat__10306.call(this,x,y);
default:
return concat__10307.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10307.cljs$lang$applyTo;
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
var list_STAR___10444 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10445 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10446 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10447 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10448 = (function() { 
var G__10456__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10456 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10456__delegate.call(this, a, b, c, d, more);
};
G__10456.cljs$lang$maxFixedArity = 4;
G__10456.cljs$lang$applyTo = (function (arglist__10459){
var a = cljs.core.first(arglist__10459);
var b = cljs.core.first(cljs.core.next(arglist__10459));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10459)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10459))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10459))));
return G__10456__delegate.call(this, a, b, c, d, more);
});
return G__10456;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10444.call(this,a);
case  2 :
return list_STAR___10445.call(this,a,b);
case  3 :
return list_STAR___10446.call(this,a,b,c);
case  4 :
return list_STAR___10447.call(this,a,b,c,d);
default:
return list_STAR___10448.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10448.cljs$lang$applyTo;
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
var apply__10485 = (function (f,args){
var fixed_arity__10461 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10461 + 1)) <= fixed_arity__10461)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10488 = (function (f,x,args){
var arglist__10466 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10468 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10466,fixed_arity__10468) <= fixed_arity__10468)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10466));
} else
{return f.cljs$lang$applyTo(arglist__10466);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10466));
}
});
var apply__10490 = (function (f,x,y,args){
var arglist__10470 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10472 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10470,fixed_arity__10472) <= fixed_arity__10472)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10470));
} else
{return f.cljs$lang$applyTo(arglist__10470);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10470));
}
});
var apply__10492 = (function (f,x,y,z,args){
var arglist__10474 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10476 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10474,fixed_arity__10476) <= fixed_arity__10476)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10474));
} else
{return f.cljs$lang$applyTo(arglist__10474);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10474));
}
});
var apply__10494 = (function() { 
var G__10504__delegate = function (f,a,b,c,d,args){
var arglist__10480 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10482 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10480,fixed_arity__10482) <= fixed_arity__10482)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10480));
} else
{return f.cljs$lang$applyTo(arglist__10480);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10480));
}
};
var G__10504 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10504__delegate.call(this, f, a, b, c, d, args);
};
G__10504.cljs$lang$maxFixedArity = 5;
G__10504.cljs$lang$applyTo = (function (arglist__10509){
var f = cljs.core.first(arglist__10509);
var a = cljs.core.first(cljs.core.next(arglist__10509));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10509)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10509))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10509)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10509)))));
return G__10504__delegate.call(this, f, a, b, c, d, args);
});
return G__10504;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10485.call(this,f,a);
case  3 :
return apply__10488.call(this,f,a,b);
case  4 :
return apply__10490.call(this,f,a,b,c);
case  5 :
return apply__10492.call(this,f,a,b,c,d);
default:
return apply__10494.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10494.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10593){
var obj = cljs.core.first(arglist__10593);
var f = cljs.core.first(cljs.core.next(arglist__10593));
var args = cljs.core.rest(cljs.core.next(arglist__10593));
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
var not_EQ___10594 = (function (x){
return false;
});
var not_EQ___10595 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10596 = (function() { 
var G__10598__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10598 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10598__delegate.call(this, x, y, more);
};
G__10598.cljs$lang$maxFixedArity = 2;
G__10598.cljs$lang$applyTo = (function (arglist__10599){
var x = cljs.core.first(arglist__10599);
var y = cljs.core.first(cljs.core.next(arglist__10599));
var more = cljs.core.rest(cljs.core.next(arglist__10599));
return G__10598__delegate.call(this, x, y, more);
});
return G__10598;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10594.call(this,x);
case  2 :
return not_EQ___10595.call(this,x,y);
default:
return not_EQ___10596.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10596.cljs$lang$applyTo;
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
var G__10600 = pred;
var G__10601 = cljs.core.next.call(null,coll);
pred = G__10600;
coll = G__10601;
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
{var or__3548__auto____10602 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10602))
{return or__3548__auto____10602;
} else
{{
var G__10603 = pred;
var G__10604 = cljs.core.next.call(null,coll);
pred = G__10603;
coll = G__10604;
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
var G__10605 = null;
var G__10605__10606 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10605__10607 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10605__10608 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10605__10609 = (function() { 
var G__10611__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10611 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10611__delegate.call(this, x, y, zs);
};
G__10611.cljs$lang$maxFixedArity = 2;
G__10611.cljs$lang$applyTo = (function (arglist__10617){
var x = cljs.core.first(arglist__10617);
var y = cljs.core.first(cljs.core.next(arglist__10617));
var zs = cljs.core.rest(cljs.core.next(arglist__10617));
return G__10611__delegate.call(this, x, y, zs);
});
return G__10611;
})()
;
G__10605 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10605__10606.call(this);
case  1 :
return G__10605__10607.call(this,x);
case  2 :
return G__10605__10608.call(this,x,y);
default:
return G__10605__10609.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10605.cljs$lang$maxFixedArity = 2;
G__10605.cljs$lang$applyTo = G__10605__10609.cljs$lang$applyTo;
return G__10605;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10646__delegate = function (args){
return x;
};
var G__10646 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10646__delegate.call(this, args);
};
G__10646.cljs$lang$maxFixedArity = 0;
G__10646.cljs$lang$applyTo = (function (arglist__10647){
var args = cljs.core.seq( arglist__10647 );;
return G__10646__delegate.call(this, args);
});
return G__10646;
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
var comp__10667 = (function (){
return cljs.core.identity;
});
var comp__10668 = (function (f){
return f;
});
var comp__10669 = (function (f,g){
return (function() {
var G__10675 = null;
var G__10675__10677 = (function (){
return f.call(null,g.call(null));
});
var G__10675__10679 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10675__10680 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10675__10681 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10675__10682 = (function() { 
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
G__10675 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10675__10677.call(this);
case  1 :
return G__10675__10679.call(this,x);
case  2 :
return G__10675__10680.call(this,x,y);
case  3 :
return G__10675__10681.call(this,x,y,z);
default:
return G__10675__10682.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10675.cljs$lang$maxFixedArity = 3;
G__10675.cljs$lang$applyTo = G__10675__10682.cljs$lang$applyTo;
return G__10675;
})()
});
var comp__10670 = (function (f,g,h){
return (function() {
var G__10695 = null;
var G__10695__10696 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10695__10697 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10695__10698 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10695__10699 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10695__10700 = (function() { 
var G__10714__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10714 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10714__delegate.call(this, x, y, z, args);
};
G__10714.cljs$lang$maxFixedArity = 3;
G__10714.cljs$lang$applyTo = (function (arglist__10718){
var x = cljs.core.first(arglist__10718);
var y = cljs.core.first(cljs.core.next(arglist__10718));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10718)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10718)));
return G__10714__delegate.call(this, x, y, z, args);
});
return G__10714;
})()
;
G__10695 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10695__10696.call(this);
case  1 :
return G__10695__10697.call(this,x);
case  2 :
return G__10695__10698.call(this,x,y);
case  3 :
return G__10695__10699.call(this,x,y,z);
default:
return G__10695__10700.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10695.cljs$lang$maxFixedArity = 3;
G__10695.cljs$lang$applyTo = G__10695__10700.cljs$lang$applyTo;
return G__10695;
})()
});
var comp__10671 = (function() { 
var G__10752__delegate = function (f1,f2,f3,fs){
var fs__10653 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10754__delegate = function (args){
var ret__10658 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10653),args);
var fs__10659 = cljs.core.next.call(null,fs__10653);

while(true){
if(cljs.core.truth_(fs__10659))
{{
var G__10756 = cljs.core.first.call(null,fs__10659).call(null,ret__10658);
var G__10757 = cljs.core.next.call(null,fs__10659);
ret__10658 = G__10756;
fs__10659 = G__10757;
continue;
}
} else
{return ret__10658;
}
break;
}
};
var G__10754 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10754__delegate.call(this, args);
};
G__10754.cljs$lang$maxFixedArity = 0;
G__10754.cljs$lang$applyTo = (function (arglist__10760){
var args = cljs.core.seq( arglist__10760 );;
return G__10754__delegate.call(this, args);
});
return G__10754;
})()
;
};
var G__10752 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10752__delegate.call(this, f1, f2, f3, fs);
};
G__10752.cljs$lang$maxFixedArity = 3;
G__10752.cljs$lang$applyTo = (function (arglist__10767){
var f1 = cljs.core.first(arglist__10767);
var f2 = cljs.core.first(cljs.core.next(arglist__10767));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10767)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10767)));
return G__10752__delegate.call(this, f1, f2, f3, fs);
});
return G__10752;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10667.call(this);
case  1 :
return comp__10668.call(this,f1);
case  2 :
return comp__10669.call(this,f1,f2);
case  3 :
return comp__10670.call(this,f1,f2,f3);
default:
return comp__10671.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10671.cljs$lang$applyTo;
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
var partial__10802 = (function (f,arg1){
return (function() { 
var G__10808__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10808 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10808__delegate.call(this, args);
};
G__10808.cljs$lang$maxFixedArity = 0;
G__10808.cljs$lang$applyTo = (function (arglist__10809){
var args = cljs.core.seq( arglist__10809 );;
return G__10808__delegate.call(this, args);
});
return G__10808;
})()
;
});
var partial__10803 = (function (f,arg1,arg2){
return (function() { 
var G__10810__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10810 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10810__delegate.call(this, args);
};
G__10810.cljs$lang$maxFixedArity = 0;
G__10810.cljs$lang$applyTo = (function (arglist__10811){
var args = cljs.core.seq( arglist__10811 );;
return G__10810__delegate.call(this, args);
});
return G__10810;
})()
;
});
var partial__10804 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10812__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10812 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10812__delegate.call(this, args);
};
G__10812.cljs$lang$maxFixedArity = 0;
G__10812.cljs$lang$applyTo = (function (arglist__10813){
var args = cljs.core.seq( arglist__10813 );;
return G__10812__delegate.call(this, args);
});
return G__10812;
})()
;
});
var partial__10805 = (function() { 
var G__10814__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10815__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10815 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10815__delegate.call(this, args);
};
G__10815.cljs$lang$maxFixedArity = 0;
G__10815.cljs$lang$applyTo = (function (arglist__10818){
var args = cljs.core.seq( arglist__10818 );;
return G__10815__delegate.call(this, args);
});
return G__10815;
})()
;
};
var G__10814 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10814__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10814.cljs$lang$maxFixedArity = 4;
G__10814.cljs$lang$applyTo = (function (arglist__10819){
var f = cljs.core.first(arglist__10819);
var arg1 = cljs.core.first(cljs.core.next(arglist__10819));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10819)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10819))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10819))));
return G__10814__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10814;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10802.call(this,f,arg1);
case  3 :
return partial__10803.call(this,f,arg1,arg2);
case  4 :
return partial__10804.call(this,f,arg1,arg2,arg3);
default:
return partial__10805.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10805.cljs$lang$applyTo;
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
var fnil__10840 = (function (f,x){
return (function() {
var G__10844 = null;
var G__10844__10846 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10844__10847 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10844__10848 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10844__10849 = (function() { 
var G__10855__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10855 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10855__delegate.call(this, a, b, c, ds);
};
G__10855.cljs$lang$maxFixedArity = 3;
G__10855.cljs$lang$applyTo = (function (arglist__10857){
var a = cljs.core.first(arglist__10857);
var b = cljs.core.first(cljs.core.next(arglist__10857));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10857)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10857)));
return G__10855__delegate.call(this, a, b, c, ds);
});
return G__10855;
})()
;
G__10844 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10844__10846.call(this,a);
case  2 :
return G__10844__10847.call(this,a,b);
case  3 :
return G__10844__10848.call(this,a,b,c);
default:
return G__10844__10849.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10844.cljs$lang$maxFixedArity = 3;
G__10844.cljs$lang$applyTo = G__10844__10849.cljs$lang$applyTo;
return G__10844;
})()
});
var fnil__10841 = (function (f,x,y){
return (function() {
var G__10860 = null;
var G__10860__10861 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10860__10862 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10860__10863 = (function() { 
var G__10876__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10876 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10876__delegate.call(this, a, b, c, ds);
};
G__10876.cljs$lang$maxFixedArity = 3;
G__10876.cljs$lang$applyTo = (function (arglist__10885){
var a = cljs.core.first(arglist__10885);
var b = cljs.core.first(cljs.core.next(arglist__10885));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10885)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10885)));
return G__10876__delegate.call(this, a, b, c, ds);
});
return G__10876;
})()
;
G__10860 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10860__10861.call(this,a,b);
case  3 :
return G__10860__10862.call(this,a,b,c);
default:
return G__10860__10863.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10860.cljs$lang$maxFixedArity = 3;
G__10860.cljs$lang$applyTo = G__10860__10863.cljs$lang$applyTo;
return G__10860;
})()
});
var fnil__10842 = (function (f,x,y,z){
return (function() {
var G__10888 = null;
var G__10888__10889 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10888__10890 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10888__10891 = (function() { 
var G__10895__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10895 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10895__delegate.call(this, a, b, c, ds);
};
G__10895.cljs$lang$maxFixedArity = 3;
G__10895.cljs$lang$applyTo = (function (arglist__10971){
var a = cljs.core.first(arglist__10971);
var b = cljs.core.first(cljs.core.next(arglist__10971));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10971)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10971)));
return G__10895__delegate.call(this, a, b, c, ds);
});
return G__10895;
})()
;
G__10888 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10888__10889.call(this,a,b);
case  3 :
return G__10888__10890.call(this,a,b,c);
default:
return G__10888__10891.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10888.cljs$lang$maxFixedArity = 3;
G__10888.cljs$lang$applyTo = G__10888__10891.cljs$lang$applyTo;
return G__10888;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10840.call(this,f,x);
case  3 :
return fnil__10841.call(this,f,x,y);
case  4 :
return fnil__10842.call(this,f,x,y,z);
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
var mapi__10984 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10981 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10981))
{var s__10982 = temp__3698__auto____10981;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10982)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10982)));
} else
{return null;
}
})));
});

return mapi__10984.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10988 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10988))
{var s__10992 = temp__3698__auto____10988;

var x__10995 = f.call(null,cljs.core.first.call(null,s__10992));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10995)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10992));
} else
{return cljs.core.cons.call(null,x__10995,keep.call(null,f,cljs.core.rest.call(null,s__10992)));
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
var keepi__11024 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11019 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11019))
{var s__11020 = temp__3698__auto____11019;

var x__11022 = f.call(null,idx,cljs.core.first.call(null,s__11020));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11022)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11020));
} else
{return cljs.core.cons.call(null,x__11022,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11020)));
}
} else
{return null;
}
})));
});

return keepi__11024.call(null,0,coll);
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
var ep1__11311 = (function (){
return true;
});
var ep1__11312 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11313 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11052 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11052))
{return p.call(null,y);
} else
{return and__3546__auto____11052;
}
})());
});
var ep1__11314 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11129 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11129))
{var and__3546__auto____11131 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11131))
{return p.call(null,z);
} else
{return and__3546__auto____11131;
}
} else
{return and__3546__auto____11129;
}
})());
});
var ep1__11315 = (function() { 
var G__11317__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11133 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11133))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11133;
}
})());
};
var G__11317 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11317__delegate.call(this, x, y, z, args);
};
G__11317.cljs$lang$maxFixedArity = 3;
G__11317.cljs$lang$applyTo = (function (arglist__11319){
var x = cljs.core.first(arglist__11319);
var y = cljs.core.first(cljs.core.next(arglist__11319));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11319)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11319)));
return G__11317__delegate.call(this, x, y, z, args);
});
return G__11317;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11311.call(this);
case  1 :
return ep1__11312.call(this,x);
case  2 :
return ep1__11313.call(this,x,y);
case  3 :
return ep1__11314.call(this,x,y,z);
default:
return ep1__11315.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11315.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11307 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11320 = (function (){
return true;
});
var ep2__11322 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11135 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11135))
{return p2.call(null,x);
} else
{return and__3546__auto____11135;
}
})());
});
var ep2__11323 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11137 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11137))
{var and__3546__auto____11139 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11139))
{var and__3546__auto____11140 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11140))
{return p2.call(null,y);
} else
{return and__3546__auto____11140;
}
} else
{return and__3546__auto____11139;
}
} else
{return and__3546__auto____11137;
}
})());
});
var ep2__11324 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11142 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11142))
{var and__3546__auto____11144 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11144))
{var and__3546__auto____11145 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11145))
{var and__3546__auto____11147 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11147))
{var and__3546__auto____11149 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11149))
{return p2.call(null,z);
} else
{return and__3546__auto____11149;
}
} else
{return and__3546__auto____11147;
}
} else
{return and__3546__auto____11145;
}
} else
{return and__3546__auto____11144;
}
} else
{return and__3546__auto____11142;
}
})());
});
var ep2__11325 = (function() { 
var G__11335__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11213 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11213))
{return cljs.core.every_QMARK_.call(null,(function (p1__11008_SHARP_){
var and__3546__auto____11216 = p1.call(null,p1__11008_SHARP_);

if(cljs.core.truth_(and__3546__auto____11216))
{return p2.call(null,p1__11008_SHARP_);
} else
{return and__3546__auto____11216;
}
}),args);
} else
{return and__3546__auto____11213;
}
})());
};
var G__11335 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11335__delegate.call(this, x, y, z, args);
};
G__11335.cljs$lang$maxFixedArity = 3;
G__11335.cljs$lang$applyTo = (function (arglist__11337){
var x = cljs.core.first(arglist__11337);
var y = cljs.core.first(cljs.core.next(arglist__11337));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11337)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11337)));
return G__11335__delegate.call(this, x, y, z, args);
});
return G__11335;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11320.call(this);
case  1 :
return ep2__11322.call(this,x);
case  2 :
return ep2__11323.call(this,x,y);
case  3 :
return ep2__11324.call(this,x,y,z);
default:
return ep2__11325.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11325.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11308 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11345 = (function (){
return true;
});
var ep3__11346 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11221 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11221))
{var and__3546__auto____11222 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11222))
{return p3.call(null,x);
} else
{return and__3546__auto____11222;
}
} else
{return and__3546__auto____11221;
}
})());
});
var ep3__11347 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11225 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11225))
{var and__3546__auto____11227 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11227))
{var and__3546__auto____11229 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11229))
{var and__3546__auto____11231 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11231))
{var and__3546__auto____11234 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11234))
{return p3.call(null,y);
} else
{return and__3546__auto____11234;
}
} else
{return and__3546__auto____11231;
}
} else
{return and__3546__auto____11229;
}
} else
{return and__3546__auto____11227;
}
} else
{return and__3546__auto____11225;
}
})());
});
var ep3__11348 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11243 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11243))
{var and__3546__auto____11263 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11263))
{var and__3546__auto____11265 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11265))
{var and__3546__auto____11266 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11266))
{var and__3546__auto____11269 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11269))
{var and__3546__auto____11273 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11273))
{var and__3546__auto____11278 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11278))
{var and__3546__auto____11281 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11281))
{return p3.call(null,z);
} else
{return and__3546__auto____11281;
}
} else
{return and__3546__auto____11278;
}
} else
{return and__3546__auto____11273;
}
} else
{return and__3546__auto____11269;
}
} else
{return and__3546__auto____11266;
}
} else
{return and__3546__auto____11265;
}
} else
{return and__3546__auto____11263;
}
} else
{return and__3546__auto____11243;
}
})());
});
var ep3__11349 = (function() { 
var G__11386__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11282 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11282))
{return cljs.core.every_QMARK_.call(null,(function (p1__11010_SHARP_){
var and__3546__auto____11283 = p1.call(null,p1__11010_SHARP_);

if(cljs.core.truth_(and__3546__auto____11283))
{var and__3546__auto____11285 = p2.call(null,p1__11010_SHARP_);

if(cljs.core.truth_(and__3546__auto____11285))
{return p3.call(null,p1__11010_SHARP_);
} else
{return and__3546__auto____11285;
}
} else
{return and__3546__auto____11283;
}
}),args);
} else
{return and__3546__auto____11282;
}
})());
};
var G__11386 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11386__delegate.call(this, x, y, z, args);
};
G__11386.cljs$lang$maxFixedArity = 3;
G__11386.cljs$lang$applyTo = (function (arglist__11394){
var x = cljs.core.first(arglist__11394);
var y = cljs.core.first(cljs.core.next(arglist__11394));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11394)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11394)));
return G__11386__delegate.call(this, x, y, z, args);
});
return G__11386;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11345.call(this);
case  1 :
return ep3__11346.call(this,x);
case  2 :
return ep3__11347.call(this,x,y);
case  3 :
return ep3__11348.call(this,x,y,z);
default:
return ep3__11349.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11349.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11309 = (function() { 
var G__11396__delegate = function (p1,p2,p3,ps){
var ps__11293 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11399 = (function (){
return true;
});
var epn__11400 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11011_SHARP_){
return p1__11011_SHARP_.call(null,x);
}),ps__11293);
});
var epn__11401 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11012_SHARP_){
var and__3546__auto____11294 = p1__11012_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11294))
{return p1__11012_SHARP_.call(null,y);
} else
{return and__3546__auto____11294;
}
}),ps__11293);
});
var epn__11402 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11014_SHARP_){
var and__3546__auto____11296 = p1__11014_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11296))
{var and__3546__auto____11297 = p1__11014_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11297))
{return p1__11014_SHARP_.call(null,z);
} else
{return and__3546__auto____11297;
}
} else
{return and__3546__auto____11296;
}
}),ps__11293);
});
var epn__11403 = (function() { 
var G__11427__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11299 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11299))
{return cljs.core.every_QMARK_.call(null,(function (p1__11015_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11015_SHARP_,args);
}),ps__11293);
} else
{return and__3546__auto____11299;
}
})());
};
var G__11427 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11427__delegate.call(this, x, y, z, args);
};
G__11427.cljs$lang$maxFixedArity = 3;
G__11427.cljs$lang$applyTo = (function (arglist__11429){
var x = cljs.core.first(arglist__11429);
var y = cljs.core.first(cljs.core.next(arglist__11429));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11429)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11429)));
return G__11427__delegate.call(this, x, y, z, args);
});
return G__11427;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11399.call(this);
case  1 :
return epn__11400.call(this,x);
case  2 :
return epn__11401.call(this,x,y);
case  3 :
return epn__11402.call(this,x,y,z);
default:
return epn__11403.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11403.cljs$lang$applyTo;
return epn;
})()
};
var G__11396 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11396__delegate.call(this, p1, p2, p3, ps);
};
G__11396.cljs$lang$maxFixedArity = 3;
G__11396.cljs$lang$applyTo = (function (arglist__11437){
var p1 = cljs.core.first(arglist__11437);
var p2 = cljs.core.first(cljs.core.next(arglist__11437));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11437)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11437)));
return G__11396__delegate.call(this, p1, p2, p3, ps);
});
return G__11396;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11306.call(this,p1);
case  2 :
return every_pred__11307.call(this,p1,p2);
case  3 :
return every_pred__11308.call(this,p1,p2,p3);
default:
return every_pred__11309.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11309.cljs$lang$applyTo;
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
var some_fn__11590 = (function (p){
return (function() {
var sp1 = null;
var sp1__11596 = (function (){
return null;
});
var sp1__11597 = (function (x){
return p.call(null,x);
});
var sp1__11598 = (function (x,y){
var or__3548__auto____11443 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11443))
{return or__3548__auto____11443;
} else
{return p.call(null,y);
}
});
var sp1__11599 = (function (x,y,z){
var or__3548__auto____11446 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11446))
{return or__3548__auto____11446;
} else
{var or__3548__auto____11447 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11447))
{return or__3548__auto____11447;
} else
{return p.call(null,z);
}
}
});
var sp1__11600 = (function() { 
var G__11604__delegate = function (x,y,z,args){
var or__3548__auto____11456 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11456))
{return or__3548__auto____11456;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11604 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11604__delegate.call(this, x, y, z, args);
};
G__11604.cljs$lang$maxFixedArity = 3;
G__11604.cljs$lang$applyTo = (function (arglist__11606){
var x = cljs.core.first(arglist__11606);
var y = cljs.core.first(cljs.core.next(arglist__11606));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11606)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11606)));
return G__11604__delegate.call(this, x, y, z, args);
});
return G__11604;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11596.call(this);
case  1 :
return sp1__11597.call(this,x);
case  2 :
return sp1__11598.call(this,x,y);
case  3 :
return sp1__11599.call(this,x,y,z);
default:
return sp1__11600.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11600.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11591 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11608 = (function (){
return null;
});
var sp2__11609 = (function (x){
var or__3548__auto____11458 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11458))
{return or__3548__auto____11458;
} else
{return p2.call(null,x);
}
});
var sp2__11610 = (function (x,y){
var or__3548__auto____11460 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11460))
{return or__3548__auto____11460;
} else
{var or__3548__auto____11461 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11461))
{return or__3548__auto____11461;
} else
{var or__3548__auto____11464 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11464))
{return or__3548__auto____11464;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11611 = (function (x,y,z){
var or__3548__auto____11466 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11466))
{return or__3548__auto____11466;
} else
{var or__3548__auto____11468 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11468))
{return or__3548__auto____11468;
} else
{var or__3548__auto____11469 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11469))
{return or__3548__auto____11469;
} else
{var or__3548__auto____11471 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11471))
{return or__3548__auto____11471;
} else
{var or__3548__auto____11473 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11473))
{return or__3548__auto____11473;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11612 = (function() { 
var G__11625__delegate = function (x,y,z,args){
var or__3548__auto____11477 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11477))
{return or__3548__auto____11477;
} else
{return cljs.core.some.call(null,(function (p1__11036_SHARP_){
var or__3548__auto____11482 = p1.call(null,p1__11036_SHARP_);

if(cljs.core.truth_(or__3548__auto____11482))
{return or__3548__auto____11482;
} else
{return p2.call(null,p1__11036_SHARP_);
}
}),args);
}
};
var G__11625 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11625__delegate.call(this, x, y, z, args);
};
G__11625.cljs$lang$maxFixedArity = 3;
G__11625.cljs$lang$applyTo = (function (arglist__11629){
var x = cljs.core.first(arglist__11629);
var y = cljs.core.first(cljs.core.next(arglist__11629));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11629)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11629)));
return G__11625__delegate.call(this, x, y, z, args);
});
return G__11625;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11608.call(this);
case  1 :
return sp2__11609.call(this,x);
case  2 :
return sp2__11610.call(this,x,y);
case  3 :
return sp2__11611.call(this,x,y,z);
default:
return sp2__11612.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11612.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11592 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11637 = (function (){
return null;
});
var sp3__11640 = (function (x){
var or__3548__auto____11486 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11486))
{return or__3548__auto____11486;
} else
{var or__3548__auto____11489 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11489))
{return or__3548__auto____11489;
} else
{return p3.call(null,x);
}
}
});
var sp3__11641 = (function (x,y){
var or__3548__auto____11496 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11496))
{return or__3548__auto____11496;
} else
{var or__3548__auto____11499 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11499))
{return or__3548__auto____11499;
} else
{var or__3548__auto____11500 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11500))
{return or__3548__auto____11500;
} else
{var or__3548__auto____11502 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11502))
{return or__3548__auto____11502;
} else
{var or__3548__auto____11506 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11506))
{return or__3548__auto____11506;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11642 = (function (x,y,z){
var or__3548__auto____11508 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11508))
{return or__3548__auto____11508;
} else
{var or__3548__auto____11509 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11509))
{return or__3548__auto____11509;
} else
{var or__3548__auto____11510 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11510))
{return or__3548__auto____11510;
} else
{var or__3548__auto____11516 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11516))
{return or__3548__auto____11516;
} else
{var or__3548__auto____11518 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11518))
{return or__3548__auto____11518;
} else
{var or__3548__auto____11519 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11519))
{return or__3548__auto____11519;
} else
{var or__3548__auto____11520 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11520))
{return or__3548__auto____11520;
} else
{var or__3548__auto____11561 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11561))
{return or__3548__auto____11561;
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
var sp3__11643 = (function() { 
var G__11664__delegate = function (x,y,z,args){
var or__3548__auto____11564 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11564))
{return or__3548__auto____11564;
} else
{return cljs.core.some.call(null,(function (p1__11037_SHARP_){
var or__3548__auto____11566 = p1.call(null,p1__11037_SHARP_);

if(cljs.core.truth_(or__3548__auto____11566))
{return or__3548__auto____11566;
} else
{var or__3548__auto____11569 = p2.call(null,p1__11037_SHARP_);

if(cljs.core.truth_(or__3548__auto____11569))
{return or__3548__auto____11569;
} else
{return p3.call(null,p1__11037_SHARP_);
}
}
}),args);
}
};
var G__11664 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11664__delegate.call(this, x, y, z, args);
};
G__11664.cljs$lang$maxFixedArity = 3;
G__11664.cljs$lang$applyTo = (function (arglist__11676){
var x = cljs.core.first(arglist__11676);
var y = cljs.core.first(cljs.core.next(arglist__11676));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11676)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11676)));
return G__11664__delegate.call(this, x, y, z, args);
});
return G__11664;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11637.call(this);
case  1 :
return sp3__11640.call(this,x);
case  2 :
return sp3__11641.call(this,x,y);
case  3 :
return sp3__11642.call(this,x,y,z);
default:
return sp3__11643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11643.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11593 = (function() { 
var G__11682__delegate = function (p1,p2,p3,ps){
var ps__11572 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11683 = (function (){
return null;
});
var spn__11684 = (function (x){
return cljs.core.some.call(null,(function (p1__11039_SHARP_){
return p1__11039_SHARP_.call(null,x);
}),ps__11572);
});
var spn__11685 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11040_SHARP_){
var or__3548__auto____11576 = p1__11040_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11576))
{return or__3548__auto____11576;
} else
{return p1__11040_SHARP_.call(null,y);
}
}),ps__11572);
});
var spn__11686 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11041_SHARP_){
var or__3548__auto____11580 = p1__11041_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11580))
{return or__3548__auto____11580;
} else
{var or__3548__auto____11582 = p1__11041_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11582))
{return or__3548__auto____11582;
} else
{return p1__11041_SHARP_.call(null,z);
}
}
}),ps__11572);
});
var spn__11687 = (function() { 
var G__11692__delegate = function (x,y,z,args){
var or__3548__auto____11585 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11585))
{return or__3548__auto____11585;
} else
{return cljs.core.some.call(null,(function (p1__11043_SHARP_){
return cljs.core.some.call(null,p1__11043_SHARP_,args);
}),ps__11572);
}
};
var G__11692 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11692__delegate.call(this, x, y, z, args);
};
G__11692.cljs$lang$maxFixedArity = 3;
G__11692.cljs$lang$applyTo = (function (arglist__11693){
var x = cljs.core.first(arglist__11693);
var y = cljs.core.first(cljs.core.next(arglist__11693));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11693)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11693)));
return G__11692__delegate.call(this, x, y, z, args);
});
return G__11692;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11683.call(this);
case  1 :
return spn__11684.call(this,x);
case  2 :
return spn__11685.call(this,x,y);
case  3 :
return spn__11686.call(this,x,y,z);
default:
return spn__11687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11687.cljs$lang$applyTo;
return spn;
})()
};
var G__11682 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11682__delegate.call(this, p1, p2, p3, ps);
};
G__11682.cljs$lang$maxFixedArity = 3;
G__11682.cljs$lang$applyTo = (function (arglist__11732){
var p1 = cljs.core.first(arglist__11732);
var p2 = cljs.core.first(cljs.core.next(arglist__11732));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11732)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11732)));
return G__11682__delegate.call(this, p1, p2, p3, ps);
});
return G__11682;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11590.call(this,p1);
case  2 :
return some_fn__11591.call(this,p1,p2);
case  3 :
return some_fn__11592.call(this,p1,p2,p3);
default:
return some_fn__11593.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11593.cljs$lang$applyTo;
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
var map__11771 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11736 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11736))
{var s__11737 = temp__3698__auto____11736;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11737)),map.call(null,f,cljs.core.rest.call(null,s__11737)));
} else
{return null;
}
})));
});
var map__11773 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11739 = cljs.core.seq.call(null,c1);
var s2__11740 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11742 = s1__11739;

if(cljs.core.truth_(and__3546__auto____11742))
{return s2__11740;
} else
{return and__3546__auto____11742;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11739),cljs.core.first.call(null,s2__11740)),map.call(null,f,cljs.core.rest.call(null,s1__11739),cljs.core.rest.call(null,s2__11740)));
} else
{return null;
}
})));
});
var map__11774 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11745 = cljs.core.seq.call(null,c1);
var s2__11746 = cljs.core.seq.call(null,c2);
var s3__11748 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11749 = s1__11745;

if(cljs.core.truth_(and__3546__auto____11749))
{var and__3546__auto____11750 = s2__11746;

if(cljs.core.truth_(and__3546__auto____11750))
{return s3__11748;
} else
{return and__3546__auto____11750;
}
} else
{return and__3546__auto____11749;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11745),cljs.core.first.call(null,s2__11746),cljs.core.first.call(null,s3__11748)),map.call(null,f,cljs.core.rest.call(null,s1__11745),cljs.core.rest.call(null,s2__11746),cljs.core.rest.call(null,s3__11748)));
} else
{return null;
}
})));
});
var map__11775 = (function() { 
var G__11796__delegate = function (f,c1,c2,c3,colls){
var step__11763 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11756 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11756)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11756),step.call(null,map.call(null,cljs.core.rest,ss__11756)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11440_SHARP_){
return cljs.core.apply.call(null,f,p1__11440_SHARP_);
}),step__11763.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11796 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11796__delegate.call(this, f, c1, c2, c3, colls);
};
G__11796.cljs$lang$maxFixedArity = 4;
G__11796.cljs$lang$applyTo = (function (arglist__11802){
var f = cljs.core.first(arglist__11802);
var c1 = cljs.core.first(cljs.core.next(arglist__11802));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11802)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11802))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11802))));
return G__11796__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11796;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11771.call(this,f,c1);
case  3 :
return map__11773.call(this,f,c1,c2);
case  4 :
return map__11774.call(this,f,c1,c2,c3);
default:
return map__11775.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11775.cljs$lang$applyTo;
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
{var temp__3698__auto____11804 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11804))
{var s__11806 = temp__3698__auto____11804;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11806),take.call(null,(n - 1),cljs.core.rest.call(null,s__11806)));
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
var step__11826 = (function (n,coll){
while(true){
var s__11823 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11824 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11824))
{return s__11823;
} else
{return and__3546__auto____11824;
}
})()))
{{
var G__11829 = (n - 1);
var G__11830 = cljs.core.rest.call(null,s__11823);
n = G__11829;
coll = G__11830;
continue;
}
} else
{return s__11823;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11826.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11835 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11836 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11835.call(this,n);
case  2 :
return drop_last__11836.call(this,n,s);
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
var s__11843 = cljs.core.seq.call(null,coll);
var lead__11844 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11844))
{{
var G__11848 = cljs.core.next.call(null,s__11843);
var G__11849 = cljs.core.next.call(null,lead__11844);
s__11843 = G__11848;
lead__11844 = G__11849;
continue;
}
} else
{return s__11843;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11860 = (function (pred,coll){
while(true){
var s__11857 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11859 = s__11857;

if(cljs.core.truth_(and__3546__auto____11859))
{return pred.call(null,cljs.core.first.call(null,s__11857));
} else
{return and__3546__auto____11859;
}
})()))
{{
var G__11864 = pred;
var G__11865 = cljs.core.rest.call(null,s__11857);
pred = G__11864;
coll = G__11865;
continue;
}
} else
{return s__11857;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11860.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11869 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11869))
{var s__11873 = temp__3698__auto____11869;

return cljs.core.concat.call(null,s__11873,cycle.call(null,s__11873));
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
var repeat__11915 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11916 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11915.call(this,n);
case  2 :
return repeat__11916.call(this,n,x);
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
var repeatedly__11925 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11926 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11925.call(this,n);
case  2 :
return repeatedly__11926.call(this,n,f);
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
var interleave__11951 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11938 = cljs.core.seq.call(null,c1);
var s2__11940 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11942 = s1__11938;

if(cljs.core.truth_(and__3546__auto____11942))
{return s2__11940;
} else
{return and__3546__auto____11942;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11938),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11940),interleave.call(null,cljs.core.rest.call(null,s1__11938),cljs.core.rest.call(null,s2__11940))));
} else
{return null;
}
})));
});
var interleave__11952 = (function() { 
var G__11955__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11947 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11947)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11947),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11947)));
} else
{return null;
}
})));
};
var G__11955 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11955__delegate.call(this, c1, c2, colls);
};
G__11955.cljs$lang$maxFixedArity = 2;
G__11955.cljs$lang$applyTo = (function (arglist__11957){
var c1 = cljs.core.first(arglist__11957);
var c2 = cljs.core.first(cljs.core.next(arglist__11957));
var colls = cljs.core.rest(cljs.core.next(arglist__11957));
return G__11955__delegate.call(this, c1, c2, colls);
});
return G__11955;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11951.call(this,c1,c2);
default:
return interleave__11952.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11952.cljs$lang$applyTo;
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
var cat__11994 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11991 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11991))
{var coll__11992 = temp__3695__auto____11991;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11992),cat.call(null,cljs.core.rest.call(null,coll__11992),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11994.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12077 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12078 = (function() { 
var G__12080__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12080 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12080__delegate.call(this, f, coll, colls);
};
G__12080.cljs$lang$maxFixedArity = 2;
G__12080.cljs$lang$applyTo = (function (arglist__12081){
var f = cljs.core.first(arglist__12081);
var coll = cljs.core.first(cljs.core.next(arglist__12081));
var colls = cljs.core.rest(cljs.core.next(arglist__12081));
return G__12080__delegate.call(this, f, coll, colls);
});
return G__12080;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12077.call(this,f,coll);
default:
return mapcat__12078.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12078.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12084 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12084))
{var s__12085 = temp__3698__auto____12084;

var f__12086 = cljs.core.first.call(null,s__12085);
var r__12087 = cljs.core.rest.call(null,s__12085);

if(cljs.core.truth_(pred.call(null,f__12086)))
{return cljs.core.cons.call(null,f__12086,filter.call(null,pred,r__12087));
} else
{return filter.call(null,pred,r__12087);
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
var walk__12093 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12093.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12091_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12091_SHARP_));
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
var partition__12116 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12117 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12103 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12103))
{var s__12105 = temp__3698__auto____12103;

var p__12106 = cljs.core.take.call(null,n,s__12105);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12106))))
{return cljs.core.cons.call(null,p__12106,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12105)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12118 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12110 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12110))
{var s__12111 = temp__3698__auto____12110;

var p__12112 = cljs.core.take.call(null,n,s__12111);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12112))))
{return cljs.core.cons.call(null,p__12112,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12111)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12112,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12116.call(this,n,step);
case  3 :
return partition__12117.call(this,n,step,pad);
case  4 :
return partition__12118.call(this,n,step,pad,coll);
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
var get_in__12134 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12135 = (function (m,ks,not_found){
var sentinel__12123 = cljs.core.lookup_sentinel;
var m__12124 = m;
var ks__12125 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12125))
{var m__12126 = cljs.core.get.call(null,m__12124,cljs.core.first.call(null,ks__12125),sentinel__12123);

if(cljs.core.truth_((sentinel__12123 === m__12126)))
{return not_found;
} else
{{
var G__12141 = sentinel__12123;
var G__12142 = m__12126;
var G__12143 = cljs.core.next.call(null,ks__12125);
sentinel__12123 = G__12141;
m__12124 = G__12142;
ks__12125 = G__12143;
continue;
}
}
} else
{return m__12124;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12134.call(this,m,ks);
case  3 :
return get_in__12135.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12147,v){
var vec__12148__12149 = p__12147;
var k__12151 = cljs.core.nth.call(null,vec__12148__12149,0,null);
var ks__12152 = cljs.core.nthnext.call(null,vec__12148__12149,1);

if(cljs.core.truth_(ks__12152))
{return cljs.core.assoc.call(null,m,k__12151,assoc_in.call(null,cljs.core.get.call(null,m,k__12151),ks__12152,v));
} else
{return cljs.core.assoc.call(null,m,k__12151,v);
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
var update_in__delegate = function (m,p__12162,f,args){
var vec__12163__12164 = p__12162;
var k__12165 = cljs.core.nth.call(null,vec__12163__12164,0,null);
var ks__12166 = cljs.core.nthnext.call(null,vec__12163__12164,1);

if(cljs.core.truth_(ks__12166))
{return cljs.core.assoc.call(null,m,k__12165,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12165),ks__12166,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12165,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12165),args));
}
};
var update_in = function (m,p__12162,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12162, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12171){
var m = cljs.core.first(arglist__12171);
var p__12162 = cljs.core.first(cljs.core.next(arglist__12171));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12171)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12171)));
return update_in__delegate.call(this, m, p__12162, f, args);
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
var this__12183 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12269 = null;
var G__12269__12270 = (function (coll,k){
var this__12184 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12269__12272 = (function (coll,k,not_found){
var this__12185 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12269 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12269__12270.call(this,coll,k);
case  3 :
return G__12269__12272.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12269;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12186 = this;
var new_array__12187 = cljs.core.aclone.call(null,this__12186.array);

(new_array__12187[k] = v);
return (new cljs.core.Vector(this__12186.meta,new_array__12187));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12284 = null;
var G__12284__12285 = (function (coll,k){
var this__12189 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12284__12286 = (function (coll,k,not_found){
var this__12214 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12284 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12284__12285.call(this,coll,k);
case  3 :
return G__12284__12286.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12284;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12216 = this;
var new_array__12218 = cljs.core.aclone.call(null,this__12216.array);

new_array__12218.push(o);
return (new cljs.core.Vector(this__12216.meta,new_array__12218));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12297 = null;
var G__12297__12298 = (function (v,f){
var this__12221 = this;
return cljs.core.ci_reduce.call(null,this__12221.array,f);
});
var G__12297__12299 = (function (v,f,start){
var this__12223 = this;
return cljs.core.ci_reduce.call(null,this__12223.array,f,start);
});
G__12297 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12297__12298.call(this,v,f);
case  3 :
return G__12297__12299.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12297;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12225 = this;
if(cljs.core.truth_((this__12225.array.length > 0)))
{var vector_seq__12229 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12225.array.length)))
{return cljs.core.cons.call(null,(this__12225.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12229.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12230 = this;
return this__12230.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12233 = this;
var count__12236 = this__12233.array.length;

if(cljs.core.truth_((count__12236 > 0)))
{return (this__12233.array[(count__12236 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12239 = this;
if(cljs.core.truth_((this__12239.array.length > 0)))
{var new_array__12241 = cljs.core.aclone.call(null,this__12239.array);

new_array__12241.pop();
return (new cljs.core.Vector(this__12239.meta,new_array__12241));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12244 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12245 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12247 = this;
return (new cljs.core.Vector(meta,this__12247.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12249 = this;
return this__12249.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12312 = null;
var G__12312__12313 = (function (coll,n){
var this__12251 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12253 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12253))
{return (n < this__12251.array.length);
} else
{return and__3546__auto____12253;
}
})()))
{return (this__12251.array[n]);
} else
{return null;
}
});
var G__12312__12315 = (function (coll,n,not_found){
var this__12257 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12260 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12260))
{return (n < this__12257.array.length);
} else
{return and__3546__auto____12260;
}
})()))
{return (this__12257.array[n]);
} else
{return not_found;
}
});
G__12312 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12312__12313.call(this,coll,n);
case  3 :
return G__12312__12315.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12312;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12265 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12265.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12419){
var args = cljs.core.seq( arglist__12419 );;
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
var this__12423 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12464 = null;
var G__12464__12465 = (function (coll,k){
var this__12424 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12464__12466 = (function (coll,k,not_found){
var this__12425 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12464 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12464__12465.call(this,coll,k);
case  3 :
return G__12464__12466.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12464;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12426 = this;
var v_pos__12427 = (this__12426.start + key);

return (new cljs.core.Subvec(this__12426.meta,cljs.core._assoc.call(null,this__12426.v,v_pos__12427,val),this__12426.start,((this__12426.end > (v_pos__12427 + 1)) ? this__12426.end : (v_pos__12427 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12473 = null;
var G__12473__12475 = (function (coll,k){
var this__12428 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12473__12478 = (function (coll,k,not_found){
var this__12429 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12473 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12473__12475.call(this,coll,k);
case  3 :
return G__12473__12478.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12473;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12430 = this;
return (new cljs.core.Subvec(this__12430.meta,cljs.core._assoc_n.call(null,this__12430.v,this__12430.end,o),this__12430.start,(this__12430.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12482 = null;
var G__12482__12484 = (function (coll,f){
var this__12433 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12482__12485 = (function (coll,f,start){
var this__12434 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12482 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12482__12484.call(this,coll,f);
case  3 :
return G__12482__12485.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12482;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12435 = this;
var subvec_seq__12440 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12435.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12435.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12440.call(null,this__12435.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12441 = this;
return (this__12441.end - this__12441.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12442 = this;
return cljs.core._nth.call(null,this__12442.v,(this__12442.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12443 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12443.start,this__12443.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12443.meta,this__12443.v,this__12443.start,(this__12443.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12448 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12449 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12450 = this;
return (new cljs.core.Subvec(meta,this__12450.v,this__12450.start,this__12450.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12455 = this;
return this__12455.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12537 = null;
var G__12537__12538 = (function (coll,n){
var this__12456 = this;
return cljs.core._nth.call(null,this__12456.v,(this__12456.start + n));
});
var G__12537__12539 = (function (coll,n,not_found){
var this__12458 = this;
return cljs.core._nth.call(null,this__12458.v,(this__12458.start + n),not_found);
});
G__12537 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12537__12538.call(this,coll,n);
case  3 :
return G__12537__12539.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12537;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12460 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12460.meta);
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
var subvec__12544 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12545 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12544.call(this,v,start);
case  3 :
return subvec__12545.call(this,v,start,end);
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
var this__12549 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12551 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12552 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12555 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12555.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12557 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12559 = this;
return cljs.core._first.call(null,this__12559.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12561 = this;
var temp__3695__auto____12563 = cljs.core.next.call(null,this__12561.front);

if(cljs.core.truth_(temp__3695__auto____12563))
{var f1__12564 = temp__3695__auto____12563;

return (new cljs.core.PersistentQueueSeq(this__12561.meta,f1__12564,this__12561.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12561.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12561.meta,this__12561.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12567 = this;
return this__12567.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12568 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12568.front,this__12568.rear));
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
var this__12575 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12643 = this;
if(cljs.core.truth_(this__12643.front))
{return (new cljs.core.PersistentQueue(this__12643.meta,(this__12643.count + 1),this__12643.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12646 = this__12643.rear;

if(cljs.core.truth_(or__3548__auto____12646))
{return or__3548__auto____12646;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12643.meta,(this__12643.count + 1),cljs.core.conj.call(null,this__12643.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12650 = this;
var rear__12653 = cljs.core.seq.call(null,this__12650.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12654 = this__12650.front;

if(cljs.core.truth_(or__3548__auto____12654))
{return or__3548__auto____12654;
} else
{return rear__12653;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12650.front,cljs.core.seq.call(null,rear__12653)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12655 = this;
return this__12655.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12656 = this;
return cljs.core._first.call(null,this__12656.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12657 = this;
if(cljs.core.truth_(this__12657.front))
{var temp__3695__auto____12659 = cljs.core.next.call(null,this__12657.front);

if(cljs.core.truth_(temp__3695__auto____12659))
{var f1__12661 = temp__3695__auto____12659;

return (new cljs.core.PersistentQueue(this__12657.meta,(this__12657.count - 1),f1__12661,this__12657.rear));
} else
{return (new cljs.core.PersistentQueue(this__12657.meta,(this__12657.count - 1),cljs.core.seq.call(null,this__12657.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12663 = this;
return cljs.core.first.call(null,this__12663.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12665 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12667 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12670 = this;
return (new cljs.core.PersistentQueue(meta,this__12670.count,this__12670.front,this__12670.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12672 = this;
return this__12672.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12673 = this;
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
var this__12701 = this;
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
var len__12710 = array.length;

var i__12711 = 0;

while(true){
if(cljs.core.truth_((i__12711 < len__12710)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12711]))))
{return i__12711;
} else
{{
var G__12715 = (i__12711 + incr);
i__12711 = G__12715;
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
var obj_map_contains_key_QMARK___12724 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12725 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12718 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12718))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12718;
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
return obj_map_contains_key_QMARK___12724.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12725.call(this,k,strobj,true_val,false_val);
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
var this__12743 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12797 = null;
var G__12797__12798 = (function (coll,k){
var this__12744 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12797__12799 = (function (coll,k,not_found){
var this__12745 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12745.strobj,(this__12745.strobj[k]),not_found);
});
G__12797 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12797__12798.call(this,coll,k);
case  3 :
return G__12797__12799.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12797;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12746 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12748 = goog.object.clone.call(null,this__12746.strobj);
var overwrite_QMARK___12750 = new_strobj__12748.hasOwnProperty(k);

(new_strobj__12748[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12750))
{return (new cljs.core.ObjMap(this__12746.meta,this__12746.keys,new_strobj__12748));
} else
{var new_keys__12753 = cljs.core.aclone.call(null,this__12746.keys);

new_keys__12753.push(k);
return (new cljs.core.ObjMap(this__12746.meta,new_keys__12753,new_strobj__12748));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12746.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12756 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12756.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12805 = null;
var G__12805__12807 = (function (coll,k){
var this__12758 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12805__12808 = (function (coll,k,not_found){
var this__12759 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12805 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12805__12807.call(this,coll,k);
case  3 :
return G__12805__12808.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12805;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12762 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12765 = this;
if(cljs.core.truth_((this__12765.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12731_SHARP_){
return cljs.core.vector.call(null,p1__12731_SHARP_,(this__12765.strobj[p1__12731_SHARP_]));
}),this__12765.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12767 = this;
return this__12767.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12768 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12770 = this;
return (new cljs.core.ObjMap(meta,this__12770.keys,this__12770.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12773 = this;
return this__12773.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12779 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12779.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12782 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12785 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12785))
{return this__12782.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12785;
}
})()))
{var new_keys__12788 = cljs.core.aclone.call(null,this__12782.keys);
var new_strobj__12789 = goog.object.clone.call(null,this__12782.strobj);

new_keys__12788.splice(cljs.core.scan_array.call(null,1,k,new_keys__12788),1);
cljs.core.js_delete.call(null,new_strobj__12789,k);
return (new cljs.core.ObjMap(this__12782.meta,new_keys__12788,new_strobj__12789));
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
var this__13082 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13199 = null;
var G__13199__13202 = (function (coll,k){
var this__13084 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13199__13203 = (function (coll,k,not_found){
var this__13085 = this;
var bucket__13087 = (this__13085.hashobj[cljs.core.hash.call(null,k)]);
var i__13088 = (cljs.core.truth_(bucket__13087)?cljs.core.scan_array.call(null,2,k,bucket__13087):null);

if(cljs.core.truth_(i__13088))
{return (bucket__13087[(i__13088 + 1)]);
} else
{return not_found;
}
});
G__13199 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13199__13202.call(this,coll,k);
case  3 :
return G__13199__13203.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13199;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13091 = this;
var h__13093 = cljs.core.hash.call(null,k);
var bucket__13094 = (this__13091.hashobj[h__13093]);

if(cljs.core.truth_(bucket__13094))
{var new_bucket__13096 = cljs.core.aclone.call(null,bucket__13094);
var new_hashobj__13097 = goog.object.clone.call(null,this__13091.hashobj);

(new_hashobj__13097[h__13093] = new_bucket__13096);
var temp__3695__auto____13100 = cljs.core.scan_array.call(null,2,k,new_bucket__13096);

if(cljs.core.truth_(temp__3695__auto____13100))
{var i__13101 = temp__3695__auto____13100;

(new_bucket__13096[(i__13101 + 1)] = v);
return (new cljs.core.HashMap(this__13091.meta,this__13091.count,new_hashobj__13097));
} else
{new_bucket__13096.push(k,v);
return (new cljs.core.HashMap(this__13091.meta,(this__13091.count + 1),new_hashobj__13097));
}
} else
{var new_hashobj__13102 = goog.object.clone.call(null,this__13091.hashobj);

(new_hashobj__13102[h__13093] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13091.meta,(this__13091.count + 1),new_hashobj__13102));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13107 = this;
var bucket__13108 = (this__13107.hashobj[cljs.core.hash.call(null,k)]);
var i__13109 = (cljs.core.truth_(bucket__13108)?cljs.core.scan_array.call(null,2,k,bucket__13108):null);

if(cljs.core.truth_(i__13109))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13211 = null;
var G__13211__13212 = (function (coll,k){
var this__13110 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13211__13213 = (function (coll,k,not_found){
var this__13111 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13211 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13211__13212.call(this,coll,k);
case  3 :
return G__13211__13213.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13211;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13112 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13115 = this;
if(cljs.core.truth_((this__13115.count > 0)))
{var hashes__13118 = cljs.core.js_keys.call(null,this__13115.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13067_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13115.hashobj[p1__13067_SHARP_])));
}),hashes__13118);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13119 = this;
return this__13119.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13120 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13189 = this;
return (new cljs.core.HashMap(meta,this__13189.count,this__13189.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13190 = this;
return this__13190.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13191 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13191.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13192 = this;
var h__13193 = cljs.core.hash.call(null,k);
var bucket__13194 = (this__13192.hashobj[h__13193]);
var i__13195 = (cljs.core.truth_(bucket__13194)?cljs.core.scan_array.call(null,2,k,bucket__13194):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13195)))
{return coll;
} else
{var new_hashobj__13196 = goog.object.clone.call(null,this__13192.hashobj);

if(cljs.core.truth_((3 > bucket__13194.length)))
{cljs.core.js_delete.call(null,new_hashobj__13196,h__13193);
} else
{var new_bucket__13197 = cljs.core.aclone.call(null,bucket__13194);

new_bucket__13197.splice(i__13195,2);
(new_hashobj__13196[h__13193] = new_bucket__13197);
}
return (new cljs.core.HashMap(this__13192.meta,(this__13192.count - 1),new_hashobj__13196));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13234 = ks.length;

var i__13235 = 0;
var out__13236 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13235 < len__13234)))
{{
var G__13239 = (i__13235 + 1);
var G__13241 = cljs.core.assoc.call(null,out__13236,(ks[i__13235]),(vs[i__13235]));
i__13235 = G__13239;
out__13236 = G__13241;
continue;
}
} else
{return out__13236;
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
var in$__13248 = cljs.core.seq.call(null,keyvals);
var out__13249 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13248))
{{
var G__13276 = cljs.core.nnext.call(null,in$__13248);
var G__13277 = cljs.core.assoc.call(null,out__13249,cljs.core.first.call(null,in$__13248),cljs.core.second.call(null,in$__13248));
in$__13248 = G__13276;
out__13249 = G__13277;
continue;
}
} else
{return out__13249;
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
hash_map.cljs$lang$applyTo = (function (arglist__13280){
var keyvals = cljs.core.seq( arglist__13280 );;
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
{return cljs.core.reduce.call(null,(function (p1__13288_SHARP_,p2__13289_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13298 = p1__13288_SHARP_;

if(cljs.core.truth_(or__3548__auto____13298))
{return or__3548__auto____13298;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13289_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13304){
var maps = cljs.core.seq( arglist__13304 );;
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
{var merge_entry__13307 = (function (m,e){
var k__13305 = cljs.core.first.call(null,e);
var v__13306 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13305)))
{return cljs.core.assoc.call(null,m,k__13305,f.call(null,cljs.core.get.call(null,m,k__13305),v__13306));
} else
{return cljs.core.assoc.call(null,m,k__13305,v__13306);
}
});
var merge2__13316 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13307,(function (){var or__3548__auto____13313 = m1;

if(cljs.core.truth_(or__3548__auto____13313))
{return or__3548__auto____13313;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13316,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13321){
var f = cljs.core.first(arglist__13321);
var maps = cljs.core.rest(arglist__13321);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13325 = cljs.core.ObjMap.fromObject([],{});
var keys__13326 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13326))
{var key__13329 = cljs.core.first.call(null,keys__13326);
var entry__13330 = cljs.core.get.call(null,map,key__13329,"﷐'user/not-found");

{
var G__13334 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13330,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13325,key__13329,entry__13330):ret__13325);
var G__13336 = cljs.core.next.call(null,keys__13326);
ret__13325 = G__13334;
keys__13326 = G__13336;
continue;
}
} else
{return ret__13325;
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
var this__13345 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13444 = null;
var G__13444__13466 = (function (coll,v){
var this__13348 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13444__13467 = (function (coll,v,not_found){
var this__13351 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13351.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13444 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13444__13466.call(this,coll,v);
case  3 :
return G__13444__13467.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13444;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13474 = null;
var G__13474__13476 = (function (coll,k){
var this__13352 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13474__13477 = (function (coll,k,not_found){
var this__13353 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13474 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13474__13476.call(this,coll,k);
case  3 :
return G__13474__13477.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13474;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13357 = this;
return (new cljs.core.Set(this__13357.meta,cljs.core.assoc.call(null,this__13357.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13361 = this;
return cljs.core.keys.call(null,this__13361.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13364 = this;
return (new cljs.core.Set(this__13364.meta,cljs.core.dissoc.call(null,this__13364.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13366 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13369 = this;
var and__3546__auto____13372 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13372))
{var and__3546__auto____13374 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13374))
{return cljs.core.every_QMARK_.call(null,(function (p1__13322_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13322_SHARP_);
}),other);
} else
{return and__3546__auto____13374;
}
} else
{return and__3546__auto____13372;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13401 = this;
return (new cljs.core.Set(meta,this__13401.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13403 = this;
return this__13403.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13406 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13406.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13560 = cljs.core.seq.call(null,coll);
var out__13561 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13560))))
{{
var G__13567 = cljs.core.rest.call(null,in$__13560);
var G__13568 = cljs.core.conj.call(null,out__13561,cljs.core.first.call(null,in$__13560));
in$__13560 = G__13567;
out__13561 = G__13568;
continue;
}
} else
{return out__13561;
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
{var n__13575 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13578 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13578))
{var e__13579 = temp__3695__auto____13578;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13579));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13575,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13558_SHARP_){
var temp__3695__auto____13581 = cljs.core.find.call(null,smap,p1__13558_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13581))
{var e__13582 = temp__3695__auto____13581;

return cljs.core.second.call(null,e__13582);
} else
{return p1__13558_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13609 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13598,seen){
while(true){
var vec__13599__13600 = p__13598;
var f__13601 = cljs.core.nth.call(null,vec__13599__13600,0,null);
var xs__13602 = vec__13599__13600;

var temp__3698__auto____13603 = cljs.core.seq.call(null,xs__13602);

if(cljs.core.truth_(temp__3698__auto____13603))
{var s__13604 = temp__3698__auto____13603;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13601)))
{{
var G__13612 = cljs.core.rest.call(null,s__13604);
var G__13613 = seen;
p__13598 = G__13612;
seen = G__13613;
continue;
}
} else
{return cljs.core.cons.call(null,f__13601,step.call(null,cljs.core.rest.call(null,s__13604),cljs.core.conj.call(null,seen,f__13601)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13609.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13614 = cljs.core.Vector.fromArray([]);
var s__13615 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13615)))
{{
var G__13616 = cljs.core.conj.call(null,ret__13614,cljs.core.first.call(null,s__13615));
var G__13617 = cljs.core.next.call(null,s__13615);
ret__13614 = G__13616;
s__13615 = G__13617;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13614);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13623 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13623))
{return or__3548__auto____13623;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13624 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13624 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13624 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13654 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13654))
{return or__3548__auto____13654;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13655 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13655 > -1)))
{return cljs.core.subs.call(null,x,2,i__13655);
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
var map__13661 = cljs.core.ObjMap.fromObject([],{});
var ks__13662 = cljs.core.seq.call(null,keys);
var vs__13664 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13666 = ks__13662;

if(cljs.core.truth_(and__3546__auto____13666))
{return vs__13664;
} else
{return and__3546__auto____13666;
}
})()))
{{
var G__13700 = cljs.core.assoc.call(null,map__13661,cljs.core.first.call(null,ks__13662),cljs.core.first.call(null,vs__13664));
var G__13701 = cljs.core.next.call(null,ks__13662);
var G__13702 = cljs.core.next.call(null,vs__13664);
map__13661 = G__13700;
ks__13662 = G__13701;
vs__13664 = G__13702;
continue;
}
} else
{return map__13661;
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
var max_key__13719 = (function (k,x){
return x;
});
var max_key__13720 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13721 = (function() { 
var G__13729__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13657_SHARP_,p2__13658_SHARP_){
return max_key.call(null,k,p1__13657_SHARP_,p2__13658_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13729 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13729__delegate.call(this, k, x, y, more);
};
G__13729.cljs$lang$maxFixedArity = 3;
G__13729.cljs$lang$applyTo = (function (arglist__13748){
var k = cljs.core.first(arglist__13748);
var x = cljs.core.first(cljs.core.next(arglist__13748));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13748)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13748)));
return G__13729__delegate.call(this, k, x, y, more);
});
return G__13729;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13719.call(this,k,x);
case  3 :
return max_key__13720.call(this,k,x,y);
default:
return max_key__13721.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13721.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13756 = (function (k,x){
return x;
});
var min_key__13757 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13758 = (function() { 
var G__13766__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13705_SHARP_,p2__13706_SHARP_){
return min_key.call(null,k,p1__13705_SHARP_,p2__13706_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13766 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13766__delegate.call(this, k, x, y, more);
};
G__13766.cljs$lang$maxFixedArity = 3;
G__13766.cljs$lang$applyTo = (function (arglist__13769){
var k = cljs.core.first(arglist__13769);
var x = cljs.core.first(cljs.core.next(arglist__13769));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13769)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13769)));
return G__13766__delegate.call(this, k, x, y, more);
});
return G__13766;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13756.call(this,k,x);
case  3 :
return min_key__13757.call(this,k,x,y);
default:
return min_key__13758.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13758.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13783 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13784 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13773 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13773))
{var s__13774 = temp__3698__auto____13773;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13774),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13774)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13783.call(this,n,step);
case  3 :
return partition_all__13784.call(this,n,step,coll);
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
var temp__3698__auto____13792 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13792))
{var s__13793 = temp__3698__auto____13792;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13793))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13793),take_while.call(null,pred,cljs.core.rest.call(null,s__13793)));
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
var this__13977 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13982 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__14027 = null;
var G__14027__14028 = (function (rng,f){
var this__13983 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__14027__14029 = (function (rng,f,s){
var this__13985 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__14027 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__14027__14028.call(this,rng,f);
case  3 :
return G__14027__14029.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14027;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13987 = this;
var comp__13988 = (cljs.core.truth_((this__13987.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13988.call(null,this__13987.start,this__13987.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13989 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13989.end - this__13989.start) / this__13989.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13990 = this;
return this__13990.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13991 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13991.meta,(this__13991.start + this__13991.step),this__13991.end,this__13991.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13996 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13998 = this;
return (new cljs.core.Range(meta,this__13998.start,this__13998.end,this__13998.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__14000 = this;
return this__14000.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14052 = null;
var G__14052__14054 = (function (rng,n){
var this__14001 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14001.start + (n * this__14001.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14017 = (this__14001.start > this__14001.end);

if(cljs.core.truth_(and__3546__auto____14017))
{return cljs.core._EQ_.call(null,this__14001.step,0);
} else
{return and__3546__auto____14017;
}
})()))
{return this__14001.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14052__14055 = (function (rng,n,not_found){
var this__14020 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14020.start + (n * this__14020.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14022 = (this__14020.start > this__14020.end);

if(cljs.core.truth_(and__3546__auto____14022))
{return cljs.core._EQ_.call(null,this__14020.step,0);
} else
{return and__3546__auto____14022;
}
})()))
{return this__14020.start;
} else
{return not_found;
}
}
});
G__14052 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14052__14054.call(this,rng,n);
case  3 :
return G__14052__14055.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14052;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__14023 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14023.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14071 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14072 = (function (end){
return range.call(null,0,end,1);
});
var range__14073 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14075 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14071.call(this);
case  1 :
return range__14072.call(this,start);
case  2 :
return range__14073.call(this,start,end);
case  3 :
return range__14075.call(this,start,end,step);
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
var temp__3698__auto____14097 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14097))
{var s__14103 = temp__3698__auto____14097;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14103),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14103)));
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
var temp__3698__auto____14112 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14112))
{var s__14113 = temp__3698__auto____14112;

var fst__14114 = cljs.core.first.call(null,s__14113);
var fv__14115 = f.call(null,fst__14114);
var run__14116 = cljs.core.cons.call(null,fst__14114,cljs.core.take_while.call(null,(function (p1__14106_SHARP_){
return cljs.core._EQ_.call(null,fv__14115,f.call(null,p1__14106_SHARP_));
}),cljs.core.next.call(null,s__14113)));

return cljs.core.cons.call(null,run__14116,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14116),s__14113))));
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
var reductions__14169 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14155 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14155))
{var s__14157 = temp__3695__auto____14155;

return reductions.call(null,f,cljs.core.first.call(null,s__14157),cljs.core.rest.call(null,s__14157));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14170 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14167 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14167))
{var s__14168 = temp__3698__auto____14167;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14168)),cljs.core.rest.call(null,s__14168));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14169.call(this,f,init);
case  3 :
return reductions__14170.call(this,f,init,coll);
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
var juxt__14193 = (function (f){
return (function() {
var G__14200 = null;
var G__14200__14201 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14200__14202 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14200__14203 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14200__14204 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14200__14206 = (function() { 
var G__14213__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14213 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14213__delegate.call(this, x, y, z, args);
};
G__14213.cljs$lang$maxFixedArity = 3;
G__14213.cljs$lang$applyTo = (function (arglist__14215){
var x = cljs.core.first(arglist__14215);
var y = cljs.core.first(cljs.core.next(arglist__14215));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14215)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14215)));
return G__14213__delegate.call(this, x, y, z, args);
});
return G__14213;
})()
;
G__14200 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14200__14201.call(this);
case  1 :
return G__14200__14202.call(this,x);
case  2 :
return G__14200__14203.call(this,x,y);
case  3 :
return G__14200__14204.call(this,x,y,z);
default:
return G__14200__14206.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14200.cljs$lang$maxFixedArity = 3;
G__14200.cljs$lang$applyTo = G__14200__14206.cljs$lang$applyTo;
return G__14200;
})()
});
var juxt__14195 = (function (f,g){
return (function() {
var G__14219 = null;
var G__14219__14220 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14219__14221 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14219__14222 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14219__14223 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14219__14224 = (function() { 
var G__14226__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14226 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14226__delegate.call(this, x, y, z, args);
};
G__14226.cljs$lang$maxFixedArity = 3;
G__14226.cljs$lang$applyTo = (function (arglist__14227){
var x = cljs.core.first(arglist__14227);
var y = cljs.core.first(cljs.core.next(arglist__14227));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14227)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14227)));
return G__14226__delegate.call(this, x, y, z, args);
});
return G__14226;
})()
;
G__14219 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14219__14220.call(this);
case  1 :
return G__14219__14221.call(this,x);
case  2 :
return G__14219__14222.call(this,x,y);
case  3 :
return G__14219__14223.call(this,x,y,z);
default:
return G__14219__14224.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14219.cljs$lang$maxFixedArity = 3;
G__14219.cljs$lang$applyTo = G__14219__14224.cljs$lang$applyTo;
return G__14219;
})()
});
var juxt__14196 = (function (f,g,h){
return (function() {
var G__14228 = null;
var G__14228__14229 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14228__14230 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14228__14231 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14228__14232 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14228__14233 = (function() { 
var G__14239__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14239 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14239__delegate.call(this, x, y, z, args);
};
G__14239.cljs$lang$maxFixedArity = 3;
G__14239.cljs$lang$applyTo = (function (arglist__14241){
var x = cljs.core.first(arglist__14241);
var y = cljs.core.first(cljs.core.next(arglist__14241));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14241)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14241)));
return G__14239__delegate.call(this, x, y, z, args);
});
return G__14239;
})()
;
G__14228 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14228__14229.call(this);
case  1 :
return G__14228__14230.call(this,x);
case  2 :
return G__14228__14231.call(this,x,y);
case  3 :
return G__14228__14232.call(this,x,y,z);
default:
return G__14228__14233.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14228.cljs$lang$maxFixedArity = 3;
G__14228.cljs$lang$applyTo = G__14228__14233.cljs$lang$applyTo;
return G__14228;
})()
});
var juxt__14197 = (function() { 
var G__14243__delegate = function (f,g,h,fs){
var fs__14187 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14244 = null;
var G__14244__14245 = (function (){
return cljs.core.reduce.call(null,(function (p1__14143_SHARP_,p2__14144_SHARP_){
return cljs.core.conj.call(null,p1__14143_SHARP_,p2__14144_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14187);
});
var G__14244__14247 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14145_SHARP_,p2__14146_SHARP_){
return cljs.core.conj.call(null,p1__14145_SHARP_,p2__14146_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14187);
});
var G__14244__14248 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14147_SHARP_,p2__14149_SHARP_){
return cljs.core.conj.call(null,p1__14147_SHARP_,p2__14149_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14187);
});
var G__14244__14249 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14150_SHARP_,p2__14151_SHARP_){
return cljs.core.conj.call(null,p1__14150_SHARP_,p2__14151_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14187);
});
var G__14244__14250 = (function() { 
var G__14257__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14152_SHARP_,p2__14153_SHARP_){
return cljs.core.conj.call(null,p1__14152_SHARP_,cljs.core.apply.call(null,p2__14153_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14187);
};
var G__14257 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14257__delegate.call(this, x, y, z, args);
};
G__14257.cljs$lang$maxFixedArity = 3;
G__14257.cljs$lang$applyTo = (function (arglist__14259){
var x = cljs.core.first(arglist__14259);
var y = cljs.core.first(cljs.core.next(arglist__14259));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14259)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14259)));
return G__14257__delegate.call(this, x, y, z, args);
});
return G__14257;
})()
;
G__14244 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14244__14245.call(this);
case  1 :
return G__14244__14247.call(this,x);
case  2 :
return G__14244__14248.call(this,x,y);
case  3 :
return G__14244__14249.call(this,x,y,z);
default:
return G__14244__14250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14244.cljs$lang$maxFixedArity = 3;
G__14244.cljs$lang$applyTo = G__14244__14250.cljs$lang$applyTo;
return G__14244;
})()
};
var G__14243 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14243__delegate.call(this, f, g, h, fs);
};
G__14243.cljs$lang$maxFixedArity = 3;
G__14243.cljs$lang$applyTo = (function (arglist__14261){
var f = cljs.core.first(arglist__14261);
var g = cljs.core.first(cljs.core.next(arglist__14261));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14261)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14261)));
return G__14243__delegate.call(this, f, g, h, fs);
});
return G__14243;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14193.call(this,f);
case  2 :
return juxt__14195.call(this,f,g);
case  3 :
return juxt__14196.call(this,f,g,h);
default:
return juxt__14197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14197.cljs$lang$applyTo;
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
var dorun__14263 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14266 = cljs.core.next.call(null,coll);
coll = G__14266;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14264 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14262 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14262))
{return (n > 0);
} else
{return and__3546__auto____14262;
}
})()))
{{
var G__14267 = (n - 1);
var G__14268 = cljs.core.next.call(null,coll);
n = G__14267;
coll = G__14268;
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
return dorun__14263.call(this,n);
case  2 :
return dorun__14264.call(this,n,coll);
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
var doall__14274 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14275 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14274.call(this,n);
case  2 :
return doall__14275.call(this,n,coll);
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
var matches__14283 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14283),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14283),1)))
{return cljs.core.first.call(null,matches__14283);
} else
{return cljs.core.vec.call(null,matches__14283);
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
var matches__14284 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14284)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14284),1)))
{return cljs.core.first.call(null,matches__14284);
} else
{return cljs.core.vec.call(null,matches__14284);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14299 = cljs.core.re_find.call(null,re,s);
var match_idx__14300 = s.search(re);
var match_str__14302 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14299))?cljs.core.first.call(null,match_data__14299):match_data__14299);
var post_match__14304 = cljs.core.subs.call(null,s,(match_idx__14300 + cljs.core.count.call(null,match_str__14302)));

if(cljs.core.truth_(match_data__14299))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14299,re_seq.call(null,re,post_match__14304));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14312_SHARP_){
return print_one.call(null,p1__14312_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14316 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14316))
{var and__3546__auto____14325 = (function (){var x__445__auto____14317 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14319 = x__445__auto____14317;

if(cljs.core.truth_(and__3546__auto____14319))
{var and__3546__auto____14323 = x__445__auto____14317.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14323))
{return cljs.core.not.call(null,x__445__auto____14317.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14323;
}
} else
{return and__3546__auto____14319;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14317);
}
})();

if(cljs.core.truth_(and__3546__auto____14325))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14325;
}
} else
{return and__3546__auto____14316;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14326 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14327 = x__445__auto____14326;

if(cljs.core.truth_(and__3546__auto____14327))
{var and__3546__auto____14328 = x__445__auto____14326.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14328))
{return cljs.core.not.call(null,x__445__auto____14326.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14328;
}
} else
{return and__3546__auto____14327;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14326);
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
var first_obj__14343 = cljs.core.first.call(null,objs);
var sb__14345 = (new goog.string.StringBuffer());

var G__14347__14351 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14347__14351))
{var obj__14356 = cljs.core.first.call(null,G__14347__14351);
var G__14347__14357 = G__14347__14351;

while(true){
if(cljs.core.truth_((obj__14356 === first_obj__14343)))
{} else
{sb__14345.append(" ");
}
var G__14360__14361 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14356,opts));

if(cljs.core.truth_(G__14360__14361))
{var string__14362 = cljs.core.first.call(null,G__14360__14361);
var G__14360__14363 = G__14360__14361;

while(true){
sb__14345.append(string__14362);
var temp__3698__auto____14366 = cljs.core.next.call(null,G__14360__14363);

if(cljs.core.truth_(temp__3698__auto____14366))
{var G__14360__14367 = temp__3698__auto____14366;

{
var G__14422 = cljs.core.first.call(null,G__14360__14367);
var G__14423 = G__14360__14367;
string__14362 = G__14422;
G__14360__14363 = G__14423;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14406 = cljs.core.next.call(null,G__14347__14357);

if(cljs.core.truth_(temp__3698__auto____14406))
{var G__14347__14407 = temp__3698__auto____14406;

{
var G__14424 = cljs.core.first.call(null,G__14347__14407);
var G__14425 = G__14347__14407;
obj__14356 = G__14424;
G__14347__14357 = G__14425;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14345);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14427 = cljs.core.first.call(null,objs);

var G__14428__14430 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14428__14430))
{var obj__14431 = cljs.core.first.call(null,G__14428__14430);
var G__14428__14432 = G__14428__14430;

while(true){
if(cljs.core.truth_((obj__14431 === first_obj__14427)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14433__14434 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14431,opts));

if(cljs.core.truth_(G__14433__14434))
{var string__14436 = cljs.core.first.call(null,G__14433__14434);
var G__14433__14437 = G__14433__14434;

while(true){
cljs.core.string_print.call(null,string__14436);
var temp__3698__auto____14438 = cljs.core.next.call(null,G__14433__14437);

if(cljs.core.truth_(temp__3698__auto____14438))
{var G__14433__14439 = temp__3698__auto____14438;

{
var G__14443 = cljs.core.first.call(null,G__14433__14439);
var G__14444 = G__14433__14439;
string__14436 = G__14443;
G__14433__14437 = G__14444;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14440 = cljs.core.next.call(null,G__14428__14432);

if(cljs.core.truth_(temp__3698__auto____14440))
{var G__14428__14441 = temp__3698__auto____14440;

{
var G__14445 = cljs.core.first.call(null,G__14428__14441);
var G__14446 = G__14428__14441;
obj__14431 = G__14445;
G__14428__14432 = G__14446;
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
pr_str.cljs$lang$applyTo = (function (arglist__14451){
var objs = cljs.core.seq( arglist__14451 );;
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
pr.cljs$lang$applyTo = (function (arglist__14457){
var objs = cljs.core.seq( arglist__14457 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14465){
var objs = cljs.core.seq( arglist__14465 );;
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
println.cljs$lang$applyTo = (function (arglist__14466){
var objs = cljs.core.seq( arglist__14466 );;
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
prn.cljs$lang$applyTo = (function (arglist__14468){
var objs = cljs.core.seq( arglist__14468 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14469 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14469,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14472 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14472))
{var nspc__14473 = temp__3698__auto____14472;

return cljs.core.str.call(null,nspc__14473,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14477 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14477))
{var nspc__14482 = temp__3698__auto____14477;

return cljs.core.str.call(null,nspc__14482,"/");
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
var pr_pair__14503 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14503,"{",", ","}",opts,coll);
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
var this__14655 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14658 = this;
var G__14660__14663 = cljs.core.seq.call(null,this__14658.watches);

if(cljs.core.truth_(G__14660__14663))
{var G__14666__14669 = cljs.core.first.call(null,G__14660__14663);
var vec__14667__14670 = G__14666__14669;
var key__14671 = cljs.core.nth.call(null,vec__14667__14670,0,null);
var f__14673 = cljs.core.nth.call(null,vec__14667__14670,1,null);
var G__14660__14674 = G__14660__14663;

var G__14666__14675 = G__14666__14669;
var G__14660__14676 = G__14660__14674;

while(true){
var vec__14677__14678 = G__14666__14675;
var key__14679 = cljs.core.nth.call(null,vec__14677__14678,0,null);
var f__14680 = cljs.core.nth.call(null,vec__14677__14678,1,null);
var G__14660__14681 = G__14660__14676;

f__14680.call(null,key__14679,this$,oldval,newval);
var temp__3698__auto____14682 = cljs.core.next.call(null,G__14660__14681);

if(cljs.core.truth_(temp__3698__auto____14682))
{var G__14660__14683 = temp__3698__auto____14682;

{
var G__14714 = cljs.core.first.call(null,G__14660__14683);
var G__14715 = G__14660__14683;
G__14666__14675 = G__14714;
G__14660__14676 = G__14715;
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
var this__14684 = this;
return this$.watches = cljs.core.assoc.call(null,this__14684.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14686 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14686.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14688 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14688.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14690 = this;
return this__14690.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14692 = this;
return this__14692.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14694 = this;
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
var atom__14741 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14742 = (function() { 
var G__14745__delegate = function (x,p__14726){
var map__14729__14733 = p__14726;
var map__14729__14735 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14729__14733))?cljs.core.apply.call(null,cljs.core.hash_map,map__14729__14733):map__14729__14733);
var validator__14736 = cljs.core.get.call(null,map__14729__14735,"﷐'validator");
var meta__14737 = cljs.core.get.call(null,map__14729__14735,"﷐'meta");

return (new cljs.core.Atom(x,meta__14737,validator__14736,null));
};
var G__14745 = function (x,var_args){
var p__14726 = null;
if (goog.isDef(var_args)) {
  p__14726 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14745__delegate.call(this, x, p__14726);
};
G__14745.cljs$lang$maxFixedArity = 1;
G__14745.cljs$lang$applyTo = (function (arglist__14750){
var x = cljs.core.first(arglist__14750);
var p__14726 = cljs.core.rest(arglist__14750);
return G__14745__delegate.call(this, x, p__14726);
});
return G__14745;
})()
;
atom = function(x,var_args){
var p__14726 = var_args;
switch(arguments.length){
case  1 :
return atom__14741.call(this,x);
default:
return atom__14742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14742.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14753 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14753))
{var validate__14754 = temp__3698__auto____14753;

if(cljs.core.truth_(validate__14754.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14755 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14755,new_value);
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
var swap_BANG___14777 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14778 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14779 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14780 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14781 = (function() { 
var G__14787__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14787 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14787__delegate.call(this, a, f, x, y, z, more);
};
G__14787.cljs$lang$maxFixedArity = 5;
G__14787.cljs$lang$applyTo = (function (arglist__14793){
var a = cljs.core.first(arglist__14793);
var f = cljs.core.first(cljs.core.next(arglist__14793));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14793)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14793))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14793)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14793)))));
return G__14787__delegate.call(this, a, f, x, y, z, more);
});
return G__14787;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14777.call(this,a,f);
case  3 :
return swap_BANG___14778.call(this,a,f,x);
case  4 :
return swap_BANG___14779.call(this,a,f,x,y);
case  5 :
return swap_BANG___14780.call(this,a,f,x,y,z);
default:
return swap_BANG___14781.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14781.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14814){
var iref = cljs.core.first(arglist__14814);
var f = cljs.core.first(cljs.core.next(arglist__14814));
var args = cljs.core.rest(cljs.core.next(arglist__14814));
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
var this__14853 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14853.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14854 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14854.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14854.state,this__14854.f);
}
return cljs.core.deref.call(null,this__14854.state);
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
delay.cljs$lang$applyTo = (function (arglist__14862){
var body = cljs.core.seq( arglist__14862 );;
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
var map__14869__14870 = options;
var map__14869__14871 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14869__14870))?cljs.core.apply.call(null,cljs.core.hash_map,map__14869__14870):map__14869__14870);
var keywordize_keys__14872 = cljs.core.get.call(null,map__14869__14871,"﷐'keywordize-keys");
var keyfn__14874 = (cljs.core.truth_(keywordize_keys__14872)?cljs.core.keyword:cljs.core.str);
var f__14880 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14879 = (function iter__14875(s__14876){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14876__14877 = s__14876;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14876__14877)))
{var k__14878 = cljs.core.first.call(null,s__14876__14877);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14874.call(null,k__14878),thisfn.call(null,(x[k__14878]))]),iter__14875.call(null,cljs.core.rest.call(null,s__14876__14877)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14879.call(null,cljs.core.js_keys.call(null,x));
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

return f__14880.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14919){
var x = cljs.core.first(arglist__14919);
var options = cljs.core.rest(arglist__14919);
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
var mem__14920 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14931__delegate = function (args){
var temp__3695__auto____14922 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14920),args);

if(cljs.core.truth_(temp__3695__auto____14922))
{var v__14923 = temp__3695__auto____14922;

return v__14923;
} else
{var ret__14925 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14920,cljs.core.assoc,args,ret__14925);
return ret__14925;
}
};
var G__14931 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14931__delegate.call(this, args);
};
G__14931.cljs$lang$maxFixedArity = 0;
G__14931.cljs$lang$applyTo = (function (arglist__14938){
var args = cljs.core.seq( arglist__14938 );;
return G__14931__delegate.call(this, args);
});
return G__14931;
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
var trampoline__14941 = (function (f){
while(true){
var ret__14940 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14940)))
{{
var G__14944 = ret__14940;
f = G__14944;
continue;
}
} else
{return ret__14940;
}
break;
}
});
var trampoline__14942 = (function() { 
var G__14945__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14945 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14945__delegate.call(this, f, args);
};
G__14945.cljs$lang$maxFixedArity = 1;
G__14945.cljs$lang$applyTo = (function (arglist__14947){
var f = cljs.core.first(arglist__14947);
var args = cljs.core.rest(arglist__14947);
return G__14945__delegate.call(this, f, args);
});
return G__14945;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14941.call(this,f);
default:
return trampoline__14942.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14942.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14949 = (function (){
return rand.call(null,1);
});
var rand__14950 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14949.call(this);
case  1 :
return rand__14950.call(this,n);
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
var k__14962 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14962,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14962,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15025 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15026 = (function (h,child,parent){
var or__3548__auto____15000 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15000))
{return or__3548__auto____15000;
} else
{var or__3548__auto____15001 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15001))
{return or__3548__auto____15001;
} else
{var and__3546__auto____15002 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15002))
{var and__3546__auto____15003 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15003))
{var and__3546__auto____15016 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15016))
{var ret__15017 = true;
var i__15018 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15020 = cljs.core.not.call(null,ret__15017);

if(cljs.core.truth_(or__3548__auto____15020))
{return or__3548__auto____15020;
} else
{return cljs.core._EQ_.call(null,i__15018,cljs.core.count.call(null,parent));
}
})()))
{return ret__15017;
} else
{{
var G__15056 = isa_QMARK_.call(null,h,child.call(null,i__15018),parent.call(null,i__15018));
var G__15057 = (i__15018 + 1);
ret__15017 = G__15056;
i__15018 = G__15057;
continue;
}
}
break;
}
} else
{return and__3546__auto____15016;
}
} else
{return and__3546__auto____15003;
}
} else
{return and__3546__auto____15002;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15025.call(this,h,child);
case  3 :
return isa_QMARK___15026.call(this,h,child,parent);
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
var parents__15066 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15067 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15066.call(this,h);
case  2 :
return parents__15067.call(this,h,tag);
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
var ancestors__15073 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15074 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15073.call(this,h);
case  2 :
return ancestors__15074.call(this,h,tag);
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
var descendants__15102 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15103 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15102.call(this,h);
case  2 :
return descendants__15103.call(this,h,tag);
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
var derive__15141 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15142 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15117 = "﷐'parents".call(null,h);
var td__15118 = "﷐'descendants".call(null,h);
var ta__15119 = "﷐'ancestors".call(null,h);
var tf__15126 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15139 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15117.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15119.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15119.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15117,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15126.call(null,"﷐'ancestors".call(null,h),tag,td__15118,parent,ta__15119),"﷐'descendants":tf__15126.call(null,"﷐'descendants".call(null,h),parent,ta__15119,tag,td__15118)});
})());

if(cljs.core.truth_(or__3548__auto____15139))
{return or__3548__auto____15139;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15141.call(this,h,tag);
case  3 :
return derive__15142.call(this,h,tag,parent);
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
var underive__15171 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15172 = (function (h,tag,parent){
var parentMap__15161 = "﷐'parents".call(null,h);
var childsParents__15165 = (cljs.core.truth_(parentMap__15161.call(null,tag))?cljs.core.disj.call(null,parentMap__15161.call(null,tag),parent):cljs.core.set([]));
var newParents__15166 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15165))?cljs.core.assoc.call(null,parentMap__15161,tag,childsParents__15165):cljs.core.dissoc.call(null,parentMap__15161,tag));
var deriv_seq__15167 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15108_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15108_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15108_SHARP_),cljs.core.second.call(null,p1__15108_SHARP_)));
}),cljs.core.seq.call(null,newParents__15166)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15161.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15109_SHARP_,p2__15110_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15109_SHARP_,p2__15110_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15167));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15171.call(this,h,tag);
case  3 :
return underive__15172.call(this,h,tag,parent);
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
var xprefs__15188 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15191 = (cljs.core.truth_((function (){var and__3546__auto____15190 = xprefs__15188;

if(cljs.core.truth_(and__3546__auto____15190))
{return xprefs__15188.call(null,y);
} else
{return and__3546__auto____15190;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15191))
{return or__3548__auto____15191;
} else
{var or__3548__auto____15197 = (function (){var ps__15195 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15195) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15195),prefer_table)))
{} else
{}
{
var G__15206 = cljs.core.rest.call(null,ps__15195);
ps__15195 = G__15206;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15197))
{return or__3548__auto____15197;
} else
{var or__3548__auto____15201 = (function (){var ps__15199 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15199) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15199),y,prefer_table)))
{} else
{}
{
var G__15207 = cljs.core.rest.call(null,ps__15199);
ps__15199 = G__15207;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15201))
{return or__3548__auto____15201;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15211 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15211))
{return or__3548__auto____15211;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15230 = cljs.core.reduce.call(null,(function (be,p__15217){
var vec__15218__15220 = p__15217;
var k__15221 = cljs.core.nth.call(null,vec__15218__15220,0,null);
var ___15222 = cljs.core.nth.call(null,vec__15218__15220,1,null);
var e__15223 = vec__15218__15220;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15221)))
{var be2__15226 = (cljs.core.truth_((function (){var or__3548__auto____15224 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15224))
{return or__3548__auto____15224;
} else
{return cljs.core.dominates.call(null,k__15221,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15223:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15226),k__15221,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15221," and ",cljs.core.first.call(null,be2__15226),", and neither is preferred")));
}
return be2__15226;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15230))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15230));
return cljs.core.second.call(null,best_entry__15230);
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
if(cljs.core.truth_((function (){var and__3546__auto____15252 = mf;

if(cljs.core.truth_(and__3546__auto____15252))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15252;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15254 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15254))
{return or__3548__auto____15254;
} else
{var or__3548__auto____15256 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15256))
{return or__3548__auto____15256;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15260 = mf;

if(cljs.core.truth_(and__3546__auto____15260))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15260;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15262 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15262))
{return or__3548__auto____15262;
} else
{var or__3548__auto____15268 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15268))
{return or__3548__auto____15268;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15270 = mf;

if(cljs.core.truth_(and__3546__auto____15270))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15270;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15271 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15271))
{return or__3548__auto____15271;
} else
{var or__3548__auto____15273 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15273))
{return or__3548__auto____15273;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15275 = mf;

if(cljs.core.truth_(and__3546__auto____15275))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15275;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15276 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15276))
{return or__3548__auto____15276;
} else
{var or__3548__auto____15277 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15277))
{return or__3548__auto____15277;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15279 = mf;

if(cljs.core.truth_(and__3546__auto____15279))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15279;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15280 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15280))
{return or__3548__auto____15280;
} else
{var or__3548__auto____15281 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15281))
{return or__3548__auto____15281;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15298 = mf;

if(cljs.core.truth_(and__3546__auto____15298))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15298;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15303 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15303))
{return or__3548__auto____15303;
} else
{var or__3548__auto____15304 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15304))
{return or__3548__auto____15304;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15305 = mf;

if(cljs.core.truth_(and__3546__auto____15305))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15305;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15306 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15306))
{return or__3548__auto____15306;
} else
{var or__3548__auto____15307 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15307))
{return or__3548__auto____15307;
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
{return (function (){var or__3548__auto____15330 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15330))
{return or__3548__auto____15330;
} else
{var or__3548__auto____15331 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15331))
{return or__3548__auto____15331;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15364 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15365 = cljs.core._get_method.call(null,mf,dispatch_val__15364);

if(cljs.core.truth_(target_fn__15365))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15364)));
}
return cljs.core.apply.call(null,target_fn__15365,args);
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
var this__15377 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15379 = this;
cljs.core.swap_BANG_.call(null,this__15379.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15379.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15379.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15379.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15381 = this;
cljs.core.swap_BANG_.call(null,this__15381.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15381.method_cache,this__15381.method_table,this__15381.cached_hierarchy,this__15381.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15385 = this;
cljs.core.swap_BANG_.call(null,this__15385.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15385.method_cache,this__15385.method_table,this__15385.cached_hierarchy,this__15385.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15386 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15386.cached_hierarchy),cljs.core.deref.call(null,this__15386.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15386.method_cache,this__15386.method_table,this__15386.cached_hierarchy,this__15386.hierarchy);
}
var temp__3695__auto____15387 = cljs.core.deref.call(null,this__15386.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15387))
{var target_fn__15391 = temp__3695__auto____15387;

return target_fn__15391;
} else
{var temp__3695__auto____15393 = cljs.core.find_and_cache_best_method.call(null,this__15386.name,dispatch_val,this__15386.hierarchy,this__15386.method_table,this__15386.prefer_table,this__15386.method_cache,this__15386.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15393))
{var target_fn__15394 = temp__3695__auto____15393;

return target_fn__15394;
} else
{return cljs.core.deref.call(null,this__15386.method_table).call(null,this__15386.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15395 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15395.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15395.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15395.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15395.method_cache,this__15395.method_table,this__15395.cached_hierarchy,this__15395.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15399 = this;
return cljs.core.deref.call(null,this__15399.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15400 = this;
return cljs.core.deref.call(null,this__15400.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15404 = this;
return cljs.core.do_dispatch.call(null,mf,this__15404.dispatch_fn,args);
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
G__15443.cljs$lang$applyTo = (function (arglist__15444){
var _ = cljs.core.first(arglist__15444);
var args = cljs.core.rest(arglist__15444);
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
