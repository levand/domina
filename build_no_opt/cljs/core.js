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
var or__3548__auto____7265 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7265))
{return or__3548__auto____7265;
} else
{var or__3548__auto____7266 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7266))
{return or__3548__auto____7266;
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
var _invoke__7583 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7292 = this$;

if(cljs.core.truth_(and__3546__auto____7292))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7292;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7295 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7295))
{return or__3548__auto____7295;
} else
{var or__3548__auto____7298 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7298))
{return or__3548__auto____7298;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7585 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7301 = this$;

if(cljs.core.truth_(and__3546__auto____7301))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7301;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7303 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7303))
{return or__3548__auto____7303;
} else
{var or__3548__auto____7306 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7306))
{return or__3548__auto____7306;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7586 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7308 = this$;

if(cljs.core.truth_(and__3546__auto____7308))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7308;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7312 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7312))
{return or__3548__auto____7312;
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
var _invoke__7587 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7317 = this$;

if(cljs.core.truth_(and__3546__auto____7317))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7317;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7320 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7320))
{return or__3548__auto____7320;
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
var _invoke__7588 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7322 = this$;

if(cljs.core.truth_(and__3546__auto____7322))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7322;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7324 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7324))
{return or__3548__auto____7324;
} else
{var or__3548__auto____7327 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7327))
{return or__3548__auto____7327;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7589 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7330 = this$;

if(cljs.core.truth_(and__3546__auto____7330))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7330;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7333 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7333))
{return or__3548__auto____7333;
} else
{var or__3548__auto____7336 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7336))
{return or__3548__auto____7336;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7590 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7339 = this$;

if(cljs.core.truth_(and__3546__auto____7339))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7339;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7342 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7342))
{return or__3548__auto____7342;
} else
{var or__3548__auto____7345 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7345))
{return or__3548__auto____7345;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7591 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7382 = this$;

if(cljs.core.truth_(and__3546__auto____7382))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7382;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7387 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7387))
{return or__3548__auto____7387;
} else
{var or__3548__auto____7389 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7389))
{return or__3548__auto____7389;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7592 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7392 = this$;

if(cljs.core.truth_(and__3546__auto____7392))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7392;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7593 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7402 = this$;

if(cljs.core.truth_(and__3546__auto____7402))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7402;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7406 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7406))
{return or__3548__auto____7406;
} else
{var or__3548__auto____7408 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7408))
{return or__3548__auto____7408;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7594 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7414 = this$;

if(cljs.core.truth_(and__3546__auto____7414))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7414;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7418 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7418))
{return or__3548__auto____7418;
} else
{var or__3548__auto____7420 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7420))
{return or__3548__auto____7420;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7595 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7425 = this$;

if(cljs.core.truth_(and__3546__auto____7425))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7425;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7428 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7428))
{return or__3548__auto____7428;
} else
{var or__3548__auto____7432 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7432))
{return or__3548__auto____7432;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7596 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7436 = this$;

if(cljs.core.truth_(and__3546__auto____7436))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7436;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7439 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7439))
{return or__3548__auto____7439;
} else
{var or__3548__auto____7440 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7440))
{return or__3548__auto____7440;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7597 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7445 = this$;

if(cljs.core.truth_(and__3546__auto____7445))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7445;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7450 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7450))
{return or__3548__auto____7450;
} else
{var or__3548__auto____7452 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7452))
{return or__3548__auto____7452;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7598 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7457 = this$;

if(cljs.core.truth_(and__3546__auto____7457))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7457;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7599 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7467 = this$;

if(cljs.core.truth_(and__3546__auto____7467))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7467;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7472 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7472))
{return or__3548__auto____7472;
} else
{var or__3548__auto____7475 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7475))
{return or__3548__auto____7475;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7600 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7478 = this$;

if(cljs.core.truth_(and__3546__auto____7478))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7478;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7481 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7481))
{return or__3548__auto____7481;
} else
{var or__3548__auto____7483 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7483))
{return or__3548__auto____7483;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7601 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7487 = this$;

if(cljs.core.truth_(and__3546__auto____7487))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7487;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7496 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7496))
{return or__3548__auto____7496;
} else
{var or__3548__auto____7508 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7508))
{return or__3548__auto____7508;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7602 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7552 = this$;

if(cljs.core.truth_(and__3546__auto____7552))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7552;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7603 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7563 = this$;

if(cljs.core.truth_(and__3546__auto____7563))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7563;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7566 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7566))
{return or__3548__auto____7566;
} else
{var or__3548__auto____7567 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7567))
{return or__3548__auto____7567;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7604 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7572 = this$;

if(cljs.core.truth_(and__3546__auto____7572))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7572;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7575 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7575))
{return or__3548__auto____7575;
} else
{var or__3548__auto____7578 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7578))
{return or__3548__auto____7578;
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
return _invoke__7583.call(this,this$);
case  2 :
return _invoke__7585.call(this,this$,a);
case  3 :
return _invoke__7586.call(this,this$,a,b);
case  4 :
return _invoke__7587.call(this,this$,a,b,c);
case  5 :
return _invoke__7588.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7589.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7590.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7591.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7592.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7593.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7594.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7595.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7596.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7597.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7598.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7599.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7600.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7601.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7602.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7603.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7604.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7699 = coll;

if(cljs.core.truth_(and__3546__auto____7699))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7699;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7700 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7700))
{return or__3548__auto____7700;
} else
{var or__3548__auto____7701 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7701))
{return or__3548__auto____7701;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7702 = coll;

if(cljs.core.truth_(and__3546__auto____7702))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7702;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7703 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7703))
{return or__3548__auto____7703;
} else
{var or__3548__auto____7704 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7704))
{return or__3548__auto____7704;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7705 = coll;

if(cljs.core.truth_(and__3546__auto____7705))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7705;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7706 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7706))
{return or__3548__auto____7706;
} else
{var or__3548__auto____7707 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7707))
{return or__3548__auto____7707;
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
var _nth__7781 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7709 = coll;

if(cljs.core.truth_(and__3546__auto____7709))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7709;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7766 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7766))
{return or__3548__auto____7766;
} else
{var or__3548__auto____7767 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7767))
{return or__3548__auto____7767;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7782 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7771 = coll;

if(cljs.core.truth_(and__3546__auto____7771))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7771;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7779 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7779))
{return or__3548__auto____7779;
} else
{var or__3548__auto____7780 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7780))
{return or__3548__auto____7780;
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
return _nth__7781.call(this,coll,n);
case  3 :
return _nth__7782.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7791 = coll;

if(cljs.core.truth_(and__3546__auto____7791))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7791;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7793 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7793))
{return or__3548__auto____7793;
} else
{var or__3548__auto____7795 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7795))
{return or__3548__auto____7795;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7796 = coll;

if(cljs.core.truth_(and__3546__auto____7796))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7796;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7797 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7797))
{return or__3548__auto____7797;
} else
{var or__3548__auto____7798 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7798))
{return or__3548__auto____7798;
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
var _lookup__7822 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7811 = o;

if(cljs.core.truth_(and__3546__auto____7811))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7811;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7814 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7814))
{return or__3548__auto____7814;
} else
{var or__3548__auto____7816 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7816))
{return or__3548__auto____7816;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7823 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7817 = o;

if(cljs.core.truth_(and__3546__auto____7817))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7817;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7819 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7819))
{return or__3548__auto____7819;
} else
{var or__3548__auto____7821 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7821))
{return or__3548__auto____7821;
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
return _lookup__7822.call(this,o,k);
case  3 :
return _lookup__7823.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7834 = coll;

if(cljs.core.truth_(and__3546__auto____7834))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7834;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7835 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7835))
{return or__3548__auto____7835;
} else
{var or__3548__auto____7836 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7836))
{return or__3548__auto____7836;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7838 = coll;

if(cljs.core.truth_(and__3546__auto____7838))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7838;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7841 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7841))
{return or__3548__auto____7841;
} else
{var or__3548__auto____7853 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7853))
{return or__3548__auto____7853;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7859 = coll;

if(cljs.core.truth_(and__3546__auto____7859))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7859;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7861 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7861))
{return or__3548__auto____7861;
} else
{var or__3548__auto____7865 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7865))
{return or__3548__auto____7865;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7866 = coll;

if(cljs.core.truth_(and__3546__auto____7866))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7866;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7867 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7867))
{return or__3548__auto____7867;
} else
{var or__3548__auto____7869 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7869))
{return or__3548__auto____7869;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7873 = coll;

if(cljs.core.truth_(and__3546__auto____7873))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7873;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7876 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7876))
{return or__3548__auto____7876;
} else
{var or__3548__auto____7877 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7877))
{return or__3548__auto____7877;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7878 = coll;

if(cljs.core.truth_(and__3546__auto____7878))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7878;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7879 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7879))
{return or__3548__auto____7879;
} else
{var or__3548__auto____7880 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7880))
{return or__3548__auto____7880;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7886 = coll;

if(cljs.core.truth_(and__3546__auto____7886))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7886;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7887 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7887))
{return or__3548__auto____7887;
} else
{var or__3548__auto____7888 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7888))
{return or__3548__auto____7888;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7919 = o;

if(cljs.core.truth_(and__3546__auto____7919))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7919;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8003 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8003))
{return or__3548__auto____8003;
} else
{var or__3548__auto____8006 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8006))
{return or__3548__auto____8006;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8013 = o;

if(cljs.core.truth_(and__3546__auto____8013))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8013;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8015 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8015))
{return or__3548__auto____8015;
} else
{var or__3548__auto____8016 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8016))
{return or__3548__auto____8016;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8023 = o;

if(cljs.core.truth_(and__3546__auto____8023))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8023;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8047 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8047))
{return or__3548__auto____8047;
} else
{var or__3548__auto____8049 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8070 = o;

if(cljs.core.truth_(and__3546__auto____8070))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8070;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8072 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8072))
{return or__3548__auto____8072;
} else
{var or__3548__auto____8074 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8074))
{return or__3548__auto____8074;
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
var _reduce__8092 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8082 = coll;

if(cljs.core.truth_(and__3546__auto____8082))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8082;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8083 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
} else
{var or__3548__auto____8084 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8084))
{return or__3548__auto____8084;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8093 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8085 = coll;

if(cljs.core.truth_(and__3546__auto____8085))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8085;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8087 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
} else
{var or__3548__auto____8088 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8088))
{return or__3548__auto____8088;
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
return _reduce__8092.call(this,coll,f);
case  3 :
return _reduce__8093.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8125 = o;

if(cljs.core.truth_(and__3546__auto____8125))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8125;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8126 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8126))
{return or__3548__auto____8126;
} else
{var or__3548__auto____8127 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8127))
{return or__3548__auto____8127;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8135 = o;

if(cljs.core.truth_(and__3546__auto____8135))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8135;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8137 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8137))
{return or__3548__auto____8137;
} else
{var or__3548__auto____8138 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8138))
{return or__3548__auto____8138;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8143 = o;

if(cljs.core.truth_(and__3546__auto____8143))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8143;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8147 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8147))
{return or__3548__auto____8147;
} else
{var or__3548__auto____8149 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8149))
{return or__3548__auto____8149;
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
if(cljs.core.truth_((function (){var and__3546__auto____8151 = o;

if(cljs.core.truth_(and__3546__auto____8151))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8151;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8153 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8153))
{return or__3548__auto____8153;
} else
{var or__3548__auto____8154 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8154))
{return or__3548__auto____8154;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8157 = d;

if(cljs.core.truth_(and__3546__auto____8157))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8157;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8159 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8159))
{return or__3548__auto____8159;
} else
{var or__3548__auto____8160 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8160))
{return or__3548__auto____8160;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8163 = this$;

if(cljs.core.truth_(and__3546__auto____8163))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8163;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8164 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8164))
{return or__3548__auto____8164;
} else
{var or__3548__auto____8165 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8165))
{return or__3548__auto____8165;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8166 = this$;

if(cljs.core.truth_(and__3546__auto____8166))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8166;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8167 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8167))
{return or__3548__auto____8167;
} else
{var or__3548__auto____8168 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8168))
{return or__3548__auto____8168;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8169 = this$;

if(cljs.core.truth_(and__3546__auto____8169))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8169;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8171 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8171))
{return or__3548__auto____8171;
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
var G__8221 = null;
var G__8221__8222 = (function (o,k){
return null;
});
var G__8221__8223 = (function (o,k,not_found){
return not_found;
});
G__8221 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8221__8222.call(this,o,k);
case  3 :
return G__8221__8223.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8221;
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
var G__8241 = null;
var G__8241__8307 = (function (_,f){
return f.call(null);
});
var G__8241__8308 = (function (_,f,start){
return start;
});
G__8241 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8241__8307.call(this,_,f);
case  3 :
return G__8241__8308.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8241;
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
var ci_reduce__8405 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8389 = cljs.core._nth.call(null,cicoll,0);
var n__8390 = 1;

while(true){
if(cljs.core.truth_((n__8390 < cljs.core._count.call(null,cicoll))))
{{
var G__8409 = f.call(null,val__8389,cljs.core._nth.call(null,cicoll,n__8390));
var G__8410 = (n__8390 + 1);
val__8389 = G__8409;
n__8390 = G__8410;
continue;
}
} else
{return val__8389;
}
break;
}
}
});
var ci_reduce__8406 = (function (cicoll,f,val){
var val__8393 = val;
var n__8395 = 0;

while(true){
if(cljs.core.truth_((n__8395 < cljs.core._count.call(null,cicoll))))
{{
var G__8415 = f.call(null,val__8393,cljs.core._nth.call(null,cicoll,n__8395));
var G__8416 = (n__8395 + 1);
val__8393 = G__8415;
n__8395 = G__8416;
continue;
}
} else
{return val__8393;
}
break;
}
});
var ci_reduce__8407 = (function (cicoll,f,val,idx){
var val__8401 = val;
var n__8402 = idx;

while(true){
if(cljs.core.truth_((n__8402 < cljs.core._count.call(null,cicoll))))
{{
var G__8418 = f.call(null,val__8401,cljs.core._nth.call(null,cicoll,n__8402));
var G__8419 = (n__8402 + 1);
val__8401 = G__8418;
n__8402 = G__8419;
continue;
}
} else
{return val__8401;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8405.call(this,cicoll,f);
case  3 :
return ci_reduce__8406.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8407.call(this,cicoll,f,val,idx);
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
var this__8429 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8469 = null;
var G__8469__8470 = (function (_,f){
var this__8430 = this;
return cljs.core.ci_reduce.call(null,this__8430.a,f,(this__8430.a[this__8430.i]),(this__8430.i + 1));
});
var G__8469__8471 = (function (_,f,start){
var this__8435 = this;
return cljs.core.ci_reduce.call(null,this__8435.a,f,start,this__8435.i);
});
G__8469 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8469__8470.call(this,_,f);
case  3 :
return G__8469__8471.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8469;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8436 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8438 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8473 = null;
var G__8473__8474 = (function (coll,n){
var this__8442 = this;
var i__8443 = (n + this__8442.i);

if(cljs.core.truth_((i__8443 < this__8442.a.length)))
{return (this__8442.a[i__8443]);
} else
{return null;
}
});
var G__8473__8475 = (function (coll,n,not_found){
var this__8444 = this;
var i__8445 = (n + this__8444.i);

if(cljs.core.truth_((i__8445 < this__8444.a.length)))
{return (this__8444.a[i__8445]);
} else
{return not_found;
}
});
G__8473 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8473__8474.call(this,coll,n);
case  3 :
return G__8473__8475.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8473;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8446 = this;
return (this__8446.a.length - this__8446.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8447 = this;
return (this__8447.a[this__8447.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8448 = this;
if(cljs.core.truth_(((this__8448.i + 1) < this__8448.a.length)))
{return (new cljs.core.IndexedSeq(this__8448.a,(this__8448.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8450 = this;
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
var G__8496 = null;
var G__8496__8497 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8496__8498 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8496 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8496__8497.call(this,array,f);
case  3 :
return G__8496__8498.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8496;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8500 = null;
var G__8500__8501 = (function (array,k){
return (array[k]);
});
var G__8500__8502 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8500 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8500__8501.call(this,array,k);
case  3 :
return G__8500__8502.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8500;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8504 = null;
var G__8504__8505 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8504__8507 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8504 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8504__8505.call(this,array,n);
case  3 :
return G__8504__8507.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8504;
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
var temp__3698__auto____8526 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8526))
{var s__8527 = temp__3698__auto____8526;

return cljs.core._first.call(null,s__8527);
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
var G__8585 = cljs.core.next.call(null,s);
s = G__8585;
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
var s__8587 = cljs.core.seq.call(null,x);
var n__8588 = 0;

while(true){
if(cljs.core.truth_(s__8587))
{{
var G__8590 = cljs.core.next.call(null,s__8587);
var G__8591 = (n__8588 + 1);
s__8587 = G__8590;
n__8588 = G__8591;
continue;
}
} else
{return n__8588;
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
var conj__8602 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8604 = (function() { 
var G__8606__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8607 = conj.call(null,coll,x);
var G__8608 = cljs.core.first.call(null,xs);
var G__8609 = cljs.core.next.call(null,xs);
coll = G__8607;
x = G__8608;
xs = G__8609;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8606 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8606__delegate.call(this, coll, x, xs);
};
G__8606.cljs$lang$maxFixedArity = 2;
G__8606.cljs$lang$applyTo = (function (arglist__8613){
var coll = cljs.core.first(arglist__8613);
var x = cljs.core.first(cljs.core.next(arglist__8613));
var xs = cljs.core.rest(cljs.core.next(arglist__8613));
return G__8606__delegate.call(this, coll, x, xs);
});
return G__8606;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8602.call(this,coll,x);
default:
return conj__8604.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8604.cljs$lang$applyTo;
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
var nth__8639 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8640 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8639.call(this,coll,n);
case  3 :
return nth__8640.call(this,coll,n,not_found);
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
var get__8660 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8661 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8660.call(this,o,k);
case  3 :
return get__8661.call(this,o,k,not_found);
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
var assoc__8670 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8671 = (function() { 
var G__8677__delegate = function (coll,k,v,kvs){
while(true){
var ret__8665 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8679 = ret__8665;
var G__8680 = cljs.core.first.call(null,kvs);
var G__8681 = cljs.core.second.call(null,kvs);
var G__8682 = cljs.core.nnext.call(null,kvs);
coll = G__8679;
k = G__8680;
v = G__8681;
kvs = G__8682;
continue;
}
} else
{return ret__8665;
}
break;
}
};
var G__8677 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8677__delegate.call(this, coll, k, v, kvs);
};
G__8677.cljs$lang$maxFixedArity = 3;
G__8677.cljs$lang$applyTo = (function (arglist__8684){
var coll = cljs.core.first(arglist__8684);
var k = cljs.core.first(cljs.core.next(arglist__8684));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8684)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8684)));
return G__8677__delegate.call(this, coll, k, v, kvs);
});
return G__8677;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8670.call(this,coll,k,v);
default:
return assoc__8671.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8671.cljs$lang$applyTo;
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
var dissoc__8688 = (function (coll){
return coll;
});
var dissoc__8689 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8690 = (function() { 
var G__8692__delegate = function (coll,k,ks){
while(true){
var ret__8686 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8693 = ret__8686;
var G__8694 = cljs.core.first.call(null,ks);
var G__8695 = cljs.core.next.call(null,ks);
coll = G__8693;
k = G__8694;
ks = G__8695;
continue;
}
} else
{return ret__8686;
}
break;
}
};
var G__8692 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8692__delegate.call(this, coll, k, ks);
};
G__8692.cljs$lang$maxFixedArity = 2;
G__8692.cljs$lang$applyTo = (function (arglist__8696){
var coll = cljs.core.first(arglist__8696);
var k = cljs.core.first(cljs.core.next(arglist__8696));
var ks = cljs.core.rest(cljs.core.next(arglist__8696));
return G__8692__delegate.call(this, coll, k, ks);
});
return G__8692;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8688.call(this,coll);
case  2 :
return dissoc__8689.call(this,coll,k);
default:
return dissoc__8690.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8690.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8718 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8720 = x__445__auto____8718;

if(cljs.core.truth_(and__3546__auto____8720))
{var and__3546__auto____8724 = x__445__auto____8718.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8724))
{return cljs.core.not.call(null,x__445__auto____8718.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8724;
}
} else
{return and__3546__auto____8720;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8718);
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
var disj__8754 = (function (coll){
return coll;
});
var disj__8755 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8756 = (function() { 
var G__8767__delegate = function (coll,k,ks){
while(true){
var ret__8753 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8768 = ret__8753;
var G__8769 = cljs.core.first.call(null,ks);
var G__8770 = cljs.core.next.call(null,ks);
coll = G__8768;
k = G__8769;
ks = G__8770;
continue;
}
} else
{return ret__8753;
}
break;
}
};
var G__8767 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8767__delegate.call(this, coll, k, ks);
};
G__8767.cljs$lang$maxFixedArity = 2;
G__8767.cljs$lang$applyTo = (function (arglist__8771){
var coll = cljs.core.first(arglist__8771);
var k = cljs.core.first(cljs.core.next(arglist__8771));
var ks = cljs.core.rest(cljs.core.next(arglist__8771));
return G__8767__delegate.call(this, coll, k, ks);
});
return G__8767;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8754.call(this,coll);
case  2 :
return disj__8755.call(this,coll,k);
default:
return disj__8756.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8756.cljs$lang$applyTo;
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
{var x__445__auto____8792 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8793 = x__445__auto____8792;

if(cljs.core.truth_(and__3546__auto____8793))
{var and__3546__auto____8794 = x__445__auto____8792.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8794))
{return cljs.core.not.call(null,x__445__auto____8792.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8794;
}
} else
{return and__3546__auto____8793;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8792);
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
{var x__445__auto____8804 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8805 = x__445__auto____8804;

if(cljs.core.truth_(and__3546__auto____8805))
{var and__3546__auto____8806 = x__445__auto____8804.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8806))
{return cljs.core.not.call(null,x__445__auto____8804.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8806;
}
} else
{return and__3546__auto____8805;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8804);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8814 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8816 = x__445__auto____8814;

if(cljs.core.truth_(and__3546__auto____8816))
{var and__3546__auto____8818 = x__445__auto____8814.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8818))
{return cljs.core.not.call(null,x__445__auto____8814.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8818;
}
} else
{return and__3546__auto____8816;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8814);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8823 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8825 = x__445__auto____8823;

if(cljs.core.truth_(and__3546__auto____8825))
{var and__3546__auto____8827 = x__445__auto____8823.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8827))
{return cljs.core.not.call(null,x__445__auto____8823.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8827;
}
} else
{return and__3546__auto____8825;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8823);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8832 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8834 = x__445__auto____8832;

if(cljs.core.truth_(and__3546__auto____8834))
{var and__3546__auto____8836 = x__445__auto____8832.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8836))
{return cljs.core.not.call(null,x__445__auto____8832.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8836;
}
} else
{return and__3546__auto____8834;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8832);
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
var x__445__auto____8853 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8854 = x__445__auto____8853;

if(cljs.core.truth_(and__3546__auto____8854))
{var and__3546__auto____8857 = x__445__auto____8853.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8857))
{return cljs.core.not.call(null,x__445__auto____8853.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8857;
}
} else
{return and__3546__auto____8854;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8853);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8863 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8863.push(key);
}));
return keys__8863;
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
{var x__445__auto____8877 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8880 = x__445__auto____8877;

if(cljs.core.truth_(and__3546__auto____8880))
{var and__3546__auto____8882 = x__445__auto____8877.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8882))
{return cljs.core.not.call(null,x__445__auto____8877.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8882;
}
} else
{return and__3546__auto____8880;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8877);
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
var and__3546__auto____8895 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8895))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8898 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8898))
{return or__3548__auto____8898;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8895;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8908 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8908))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8908;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8913 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8913))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8913;
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
var and__3546__auto____8921 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8921))
{return (n == n.toFixed());
} else
{return and__3546__auto____8921;
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
if(cljs.core.truth_((function (){var and__3546__auto____8946 = coll;

if(cljs.core.truth_(and__3546__auto____8946))
{var and__3546__auto____8947 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8947))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8947;
}
} else
{return and__3546__auto____8946;
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
var distinct_QMARK___8976 = (function (x){
return true;
});
var distinct_QMARK___8977 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8978 = (function() { 
var G__8990__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8955 = cljs.core.set([y,x]);
var xs__8956 = more;

while(true){
var x__8962 = cljs.core.first.call(null,xs__8956);
var etc__8963 = cljs.core.next.call(null,xs__8956);

if(cljs.core.truth_(xs__8956))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8955,x__8962)))
{return false;
} else
{{
var G__8991 = cljs.core.conj.call(null,s__8955,x__8962);
var G__8992 = etc__8963;
s__8955 = G__8991;
xs__8956 = G__8992;
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
var G__8990 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8990__delegate.call(this, x, y, more);
};
G__8990.cljs$lang$maxFixedArity = 2;
G__8990.cljs$lang$applyTo = (function (arglist__8994){
var x = cljs.core.first(arglist__8994);
var y = cljs.core.first(cljs.core.next(arglist__8994));
var more = cljs.core.rest(cljs.core.next(arglist__8994));
return G__8990__delegate.call(this, x, y, more);
});
return G__8990;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8976.call(this,x);
case  2 :
return distinct_QMARK___8977.call(this,x,y);
default:
return distinct_QMARK___8978.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8978.cljs$lang$applyTo;
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
var r__9004 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9004)))
{return r__9004;
} else
{if(cljs.core.truth_(r__9004))
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
var sort__9079 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9080 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9075 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9075,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9075);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9079.call(this,comp);
case  2 :
return sort__9080.call(this,comp,coll);
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
var sort_by__9088 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9089 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9088.call(this,keyfn,comp);
case  3 :
return sort_by__9089.call(this,keyfn,comp,coll);
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
var reduce__9101 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9102 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9101.call(this,f,val);
case  3 :
return reduce__9102.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9114 = (function (f,coll){
var temp__3695__auto____9106 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9106))
{var s__9107 = temp__3695__auto____9106;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9107),cljs.core.next.call(null,s__9107));
} else
{return f.call(null);
}
});
var seq_reduce__9115 = (function (f,val,coll){
var val__9111 = val;
var coll__9113 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9113))
{{
var G__9119 = f.call(null,val__9111,cljs.core.first.call(null,coll__9113));
var G__9120 = cljs.core.next.call(null,coll__9113);
val__9111 = G__9119;
coll__9113 = G__9120;
continue;
}
} else
{return val__9111;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9114.call(this,f,val);
case  3 :
return seq_reduce__9115.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9135 = null;
var G__9135__9136 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9135__9137 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9135 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9135__9136.call(this,coll,f);
case  3 :
return G__9135__9137.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9135;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9146 = (function (){
return 0;
});
var _PLUS___9147 = (function (x){
return x;
});
var _PLUS___9148 = (function (x,y){
return (x + y);
});
var _PLUS___9149 = (function() { 
var G__9151__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9151 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9151__delegate.call(this, x, y, more);
};
G__9151.cljs$lang$maxFixedArity = 2;
G__9151.cljs$lang$applyTo = (function (arglist__9156){
var x = cljs.core.first(arglist__9156);
var y = cljs.core.first(cljs.core.next(arglist__9156));
var more = cljs.core.rest(cljs.core.next(arglist__9156));
return G__9151__delegate.call(this, x, y, more);
});
return G__9151;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9146.call(this);
case  1 :
return _PLUS___9147.call(this,x);
case  2 :
return _PLUS___9148.call(this,x,y);
default:
return _PLUS___9149.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9149.cljs$lang$applyTo;
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
var ___9159 = (function (x){
return (- x);
});
var ___9160 = (function (x,y){
return (x - y);
});
var ___9161 = (function() { 
var G__9163__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9163 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9163__delegate.call(this, x, y, more);
};
G__9163.cljs$lang$maxFixedArity = 2;
G__9163.cljs$lang$applyTo = (function (arglist__9169){
var x = cljs.core.first(arglist__9169);
var y = cljs.core.first(cljs.core.next(arglist__9169));
var more = cljs.core.rest(cljs.core.next(arglist__9169));
return G__9163__delegate.call(this, x, y, more);
});
return G__9163;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9159.call(this,x);
case  2 :
return ___9160.call(this,x,y);
default:
return ___9161.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9161.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9172 = (function (){
return 1;
});
var _STAR___9173 = (function (x){
return x;
});
var _STAR___9174 = (function (x,y){
return (x * y);
});
var _STAR___9175 = (function() { 
var G__9181__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9181 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9181__delegate.call(this, x, y, more);
};
G__9181.cljs$lang$maxFixedArity = 2;
G__9181.cljs$lang$applyTo = (function (arglist__9184){
var x = cljs.core.first(arglist__9184);
var y = cljs.core.first(cljs.core.next(arglist__9184));
var more = cljs.core.rest(cljs.core.next(arglist__9184));
return G__9181__delegate.call(this, x, y, more);
});
return G__9181;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9172.call(this);
case  1 :
return _STAR___9173.call(this,x);
case  2 :
return _STAR___9174.call(this,x,y);
default:
return _STAR___9175.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9175.cljs$lang$applyTo;
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
var _SLASH___9185 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9186 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9187 = (function() { 
var G__9189__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9189 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9189__delegate.call(this, x, y, more);
};
G__9189.cljs$lang$maxFixedArity = 2;
G__9189.cljs$lang$applyTo = (function (arglist__9194){
var x = cljs.core.first(arglist__9194);
var y = cljs.core.first(cljs.core.next(arglist__9194));
var more = cljs.core.rest(cljs.core.next(arglist__9194));
return G__9189__delegate.call(this, x, y, more);
});
return G__9189;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9185.call(this,x);
case  2 :
return _SLASH___9186.call(this,x,y);
default:
return _SLASH___9187.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9187.cljs$lang$applyTo;
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
var _LT___9200 = (function (x){
return true;
});
var _LT___9201 = (function (x,y){
return (x < y);
});
var _LT___9202 = (function() { 
var G__9204__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9205 = y;
var G__9206 = cljs.core.first.call(null,more);
var G__9207 = cljs.core.next.call(null,more);
x = G__9205;
y = G__9206;
more = G__9207;
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
var G__9204 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9204__delegate.call(this, x, y, more);
};
G__9204.cljs$lang$maxFixedArity = 2;
G__9204.cljs$lang$applyTo = (function (arglist__9210){
var x = cljs.core.first(arglist__9210);
var y = cljs.core.first(cljs.core.next(arglist__9210));
var more = cljs.core.rest(cljs.core.next(arglist__9210));
return G__9204__delegate.call(this, x, y, more);
});
return G__9204;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9200.call(this,x);
case  2 :
return _LT___9201.call(this,x,y);
default:
return _LT___9202.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9202.cljs$lang$applyTo;
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
var _LT__EQ___9218 = (function (x){
return true;
});
var _LT__EQ___9219 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9220 = (function() { 
var G__9223__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9228 = y;
var G__9230 = cljs.core.first.call(null,more);
var G__9232 = cljs.core.next.call(null,more);
x = G__9228;
y = G__9230;
more = G__9232;
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
var G__9223 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9223__delegate.call(this, x, y, more);
};
G__9223.cljs$lang$maxFixedArity = 2;
G__9223.cljs$lang$applyTo = (function (arglist__9235){
var x = cljs.core.first(arglist__9235);
var y = cljs.core.first(cljs.core.next(arglist__9235));
var more = cljs.core.rest(cljs.core.next(arglist__9235));
return G__9223__delegate.call(this, x, y, more);
});
return G__9223;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9218.call(this,x);
case  2 :
return _LT__EQ___9219.call(this,x,y);
default:
return _LT__EQ___9220.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9220.cljs$lang$applyTo;
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
var _GT___9331 = (function (x){
return true;
});
var _GT___9356 = (function (x,y){
return (x > y);
});
var _GT___9357 = (function() { 
var G__9359__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9360 = y;
var G__9361 = cljs.core.first.call(null,more);
var G__9362 = cljs.core.next.call(null,more);
x = G__9360;
y = G__9361;
more = G__9362;
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
var G__9359 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9359__delegate.call(this, x, y, more);
};
G__9359.cljs$lang$maxFixedArity = 2;
G__9359.cljs$lang$applyTo = (function (arglist__9363){
var x = cljs.core.first(arglist__9363);
var y = cljs.core.first(cljs.core.next(arglist__9363));
var more = cljs.core.rest(cljs.core.next(arglist__9363));
return G__9359__delegate.call(this, x, y, more);
});
return G__9359;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9331.call(this,x);
case  2 :
return _GT___9356.call(this,x,y);
default:
return _GT___9357.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9357.cljs$lang$applyTo;
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
var _GT__EQ___9375 = (function (x){
return true;
});
var _GT__EQ___9376 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9377 = (function() { 
var G__9379__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9380 = y;
var G__9381 = cljs.core.first.call(null,more);
var G__9382 = cljs.core.next.call(null,more);
x = G__9380;
y = G__9381;
more = G__9382;
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
var G__9379 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9379__delegate.call(this, x, y, more);
};
G__9379.cljs$lang$maxFixedArity = 2;
G__9379.cljs$lang$applyTo = (function (arglist__9388){
var x = cljs.core.first(arglist__9388);
var y = cljs.core.first(cljs.core.next(arglist__9388));
var more = cljs.core.rest(cljs.core.next(arglist__9388));
return G__9379__delegate.call(this, x, y, more);
});
return G__9379;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9375.call(this,x);
case  2 :
return _GT__EQ___9376.call(this,x,y);
default:
return _GT__EQ___9377.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9377.cljs$lang$applyTo;
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
var max__9390 = (function (x){
return x;
});
var max__9391 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9392 = (function() { 
var G__9395__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9395 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9395__delegate.call(this, x, y, more);
};
G__9395.cljs$lang$maxFixedArity = 2;
G__9395.cljs$lang$applyTo = (function (arglist__9396){
var x = cljs.core.first(arglist__9396);
var y = cljs.core.first(cljs.core.next(arglist__9396));
var more = cljs.core.rest(cljs.core.next(arglist__9396));
return G__9395__delegate.call(this, x, y, more);
});
return G__9395;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9390.call(this,x);
case  2 :
return max__9391.call(this,x,y);
default:
return max__9392.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9392.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9398 = (function (x){
return x;
});
var min__9400 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9402 = (function() { 
var G__9405__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9405 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9405__delegate.call(this, x, y, more);
};
G__9405.cljs$lang$maxFixedArity = 2;
G__9405.cljs$lang$applyTo = (function (arglist__9406){
var x = cljs.core.first(arglist__9406);
var y = cljs.core.first(cljs.core.next(arglist__9406));
var more = cljs.core.rest(cljs.core.next(arglist__9406));
return G__9405__delegate.call(this, x, y, more);
});
return G__9405;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9398.call(this,x);
case  2 :
return min__9400.call(this,x,y);
default:
return min__9402.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9402.cljs$lang$applyTo;
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
var rem__9415 = (n % d);

return cljs.core.fix.call(null,((n - rem__9415) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9416 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9416));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9422 = (function (){
return Math.random.call(null);
});
var rand__9424 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9422.call(this);
case  1 :
return rand__9424.call(this,n);
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
var _EQ__EQ___9446 = (function (x){
return true;
});
var _EQ__EQ___9447 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9448 = (function() { 
var G__9450__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9451 = y;
var G__9453 = cljs.core.first.call(null,more);
var G__9455 = cljs.core.next.call(null,more);
x = G__9451;
y = G__9453;
more = G__9455;
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
var G__9450 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9450__delegate.call(this, x, y, more);
};
G__9450.cljs$lang$maxFixedArity = 2;
G__9450.cljs$lang$applyTo = (function (arglist__9459){
var x = cljs.core.first(arglist__9459);
var y = cljs.core.first(cljs.core.next(arglist__9459));
var more = cljs.core.rest(cljs.core.next(arglist__9459));
return G__9450__delegate.call(this, x, y, more);
});
return G__9450;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9446.call(this,x);
case  2 :
return _EQ__EQ___9447.call(this,x,y);
default:
return _EQ__EQ___9448.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9448.cljs$lang$applyTo;
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
var n__9550 = n;
var xs__9551 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9552 = xs__9551;

if(cljs.core.truth_(and__3546__auto____9552))
{return (n__9550 > 0);
} else
{return and__3546__auto____9552;
}
})()))
{{
var G__9557 = (n__9550 - 1);
var G__9558 = cljs.core.next.call(null,xs__9551);
n__9550 = G__9557;
xs__9551 = G__9558;
continue;
}
} else
{return xs__9551;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9567 = null;
var G__9567__9568 = (function (coll,n){
var temp__3695__auto____9562 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9562))
{var xs__9564 = temp__3695__auto____9562;

return cljs.core.first.call(null,xs__9564);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9567__9569 = (function (coll,n,not_found){
var temp__3695__auto____9565 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9565))
{var xs__9566 = temp__3695__auto____9565;

return cljs.core.first.call(null,xs__9566);
} else
{return not_found;
}
});
G__9567 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9567__9568.call(this,coll,n);
case  3 :
return G__9567__9569.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9567;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9577 = (function (){
return "";
});
var str_STAR___9578 = (function (x){
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
var str_STAR___9579 = (function() { 
var G__9581__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9582 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9583 = cljs.core.next.call(null,more);
sb = G__9582;
more = G__9583;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9581 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9581__delegate.call(this, x, ys);
};
G__9581.cljs$lang$maxFixedArity = 1;
G__9581.cljs$lang$applyTo = (function (arglist__9587){
var x = cljs.core.first(arglist__9587);
var ys = cljs.core.rest(arglist__9587);
return G__9581__delegate.call(this, x, ys);
});
return G__9581;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9577.call(this);
case  1 :
return str_STAR___9578.call(this,x);
default:
return str_STAR___9579.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9579.cljs$lang$applyTo;
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
var str__9591 = (function (){
return "";
});
var str__9592 = (function (x){
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
var str__9593 = (function() { 
var G__9595__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9595 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9595__delegate.call(this, x, ys);
};
G__9595.cljs$lang$maxFixedArity = 1;
G__9595.cljs$lang$applyTo = (function (arglist__9596){
var x = cljs.core.first(arglist__9596);
var ys = cljs.core.rest(arglist__9596);
return G__9595__delegate.call(this, x, ys);
});
return G__9595;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9591.call(this);
case  1 :
return str__9592.call(this,x);
default:
return str__9593.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9593.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9604 = (function (s,start){
return s.substring(start);
});
var subs__9605 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9604.call(this,s,start);
case  3 :
return subs__9605.call(this,s,start,end);
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
var symbol__9722 = (function (name){
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
var symbol__9723 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9722.call(this,ns);
case  2 :
return symbol__9723.call(this,ns,name);
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
var keyword__9727 = (function (name){
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
var keyword__9728 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9727.call(this,ns);
case  2 :
return keyword__9728.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9736 = cljs.core.seq.call(null,x);
var ys__9738 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9736)))
{return cljs.core.nil_QMARK_.call(null,ys__9738);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9738)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9736),cljs.core.first.call(null,ys__9738))))
{{
var G__9748 = cljs.core.next.call(null,xs__9736);
var G__9749 = cljs.core.next.call(null,ys__9738);
xs__9736 = G__9748;
ys__9738 = G__9749;
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
return cljs.core.reduce.call(null,(function (p1__9752_SHARP_,p2__9754_SHARP_){
return cljs.core.hash_combine.call(null,p1__9752_SHARP_,cljs.core.hash.call(null,p2__9754_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9758__9759 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9758__9759))
{var G__9761__9763 = cljs.core.first.call(null,G__9758__9759);
var vec__9762__9764 = G__9761__9763;
var key_name__9765 = cljs.core.nth.call(null,vec__9762__9764,0,null);
var f__9766 = cljs.core.nth.call(null,vec__9762__9764,1,null);
var G__9758__9767 = G__9758__9759;

var G__9761__9768 = G__9761__9763;
var G__9758__9769 = G__9758__9767;

while(true){
var vec__9770__9771 = G__9761__9768;
var key_name__9772 = cljs.core.nth.call(null,vec__9770__9771,0,null);
var f__9773 = cljs.core.nth.call(null,vec__9770__9771,1,null);
var G__9758__9774 = G__9758__9769;

var str_name__9775 = cljs.core.name.call(null,key_name__9772);

obj[str_name__9775] = f__9773;
var temp__3698__auto____9776 = cljs.core.next.call(null,G__9758__9774);

if(cljs.core.truth_(temp__3698__auto____9776))
{var G__9758__9777 = temp__3698__auto____9776;

{
var G__9794 = cljs.core.first.call(null,G__9758__9777);
var G__9795 = G__9758__9777;
G__9761__9768 = G__9794;
G__9758__9769 = G__9795;
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
var this__9804 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9806 = this;
return (new cljs.core.List(this__9806.meta,o,coll,(this__9806.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9809 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9810 = this;
return this__9810.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9811 = this;
return this__9811.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9813 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9815 = this;
return this__9815.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9816 = this;
return this__9816.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9818 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9820 = this;
return (new cljs.core.List(meta,this__9820.first,this__9820.rest,this__9820.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9823 = this;
return this__9823.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9825 = this;
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
var this__9873 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9877 = this;
return (new cljs.core.List(this__9877.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9878 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9879 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9880 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9881 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9883 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9884 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9890 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9894 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9899 = this;
return this__9899.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9903 = this;
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
list.cljs$lang$applyTo = (function (arglist__9913){
var items = cljs.core.seq( arglist__9913 );;
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
var this__9914 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9915 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9916 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9917 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9917.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9918 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9919 = this;
return this__9919.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9920 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9920.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9920.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9921 = this;
return this__9921.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9925 = this;
return (new cljs.core.Cons(meta,this__9925.first,this__9925.rest));
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
var G__9987 = null;
var G__9987__9989 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9987__9990 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9987 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9987__9989.call(this,string,f);
case  3 :
return G__9987__9990.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9987;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9994 = null;
var G__9994__9995 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9994__9996 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9994 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9994__9995.call(this,string,k);
case  3 :
return G__9994__9996.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9994;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10044 = null;
var G__10044__10045 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10044__10046 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10044 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10044__10045.call(this,string,n);
case  3 :
return G__10044__10046.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10044;
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
var G__10052 = null;
var G__10052__10057 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10052__10058 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10052 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10052__10057.call(this,this$,coll);
case  3 :
return G__10052__10058.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10052;
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
var x__10067 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10067;
} else
{lazy_seq.x = x__10067.call(null);
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
var this__10125 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10126 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10127 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10128 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10128.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10129 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10130 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10131 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10134 = this;
return this__10134.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10135 = this;
return (new cljs.core.LazySeq(meta,this__10135.realized,this__10135.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10137 = cljs.core.array.call(null);

var s__10138 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10138)))
{ary__10137.push(cljs.core.first.call(null,s__10138));
{
var G__10139 = cljs.core.next.call(null,s__10138);
s__10138 = G__10139;
continue;
}
} else
{return ary__10137;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10140 = s;
var i__10141 = n;
var sum__10142 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10143 = (i__10141 > 0);

if(cljs.core.truth_(and__3546__auto____10143))
{return cljs.core.seq.call(null,s__10140);
} else
{return and__3546__auto____10143;
}
})()))
{{
var G__10144 = cljs.core.next.call(null,s__10140);
var G__10145 = (i__10141 - 1);
var G__10146 = (sum__10142 + 1);
s__10140 = G__10144;
i__10141 = G__10145;
sum__10142 = G__10146;
continue;
}
} else
{return sum__10142;
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
var concat__10229 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10230 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10231 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10221 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10221))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10221),concat.call(null,cljs.core.rest.call(null,s__10221),y));
} else
{return y;
}
})));
});
var concat__10232 = (function() { 
var G__10239__delegate = function (x,y,zs){
var cat__10227 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10223 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10223))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10223),cat.call(null,cljs.core.rest.call(null,xys__10223),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10227.call(null,concat.call(null,x,y),zs);
};
var G__10239 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10239__delegate.call(this, x, y, zs);
};
G__10239.cljs$lang$maxFixedArity = 2;
G__10239.cljs$lang$applyTo = (function (arglist__10245){
var x = cljs.core.first(arglist__10245);
var y = cljs.core.first(cljs.core.next(arglist__10245));
var zs = cljs.core.rest(cljs.core.next(arglist__10245));
return G__10239__delegate.call(this, x, y, zs);
});
return G__10239;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10229.call(this);
case  1 :
return concat__10230.call(this,x);
case  2 :
return concat__10231.call(this,x,y);
default:
return concat__10232.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10232.cljs$lang$applyTo;
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
var list_STAR___10258 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10262 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10264 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10266 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10267 = (function() { 
var G__10271__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10271 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10271__delegate.call(this, a, b, c, d, more);
};
G__10271.cljs$lang$maxFixedArity = 4;
G__10271.cljs$lang$applyTo = (function (arglist__10273){
var a = cljs.core.first(arglist__10273);
var b = cljs.core.first(cljs.core.next(arglist__10273));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10273)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10273))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10273))));
return G__10271__delegate.call(this, a, b, c, d, more);
});
return G__10271;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10258.call(this,a);
case  2 :
return list_STAR___10262.call(this,a,b);
case  3 :
return list_STAR___10264.call(this,a,b,c);
case  4 :
return list_STAR___10266.call(this,a,b,c,d);
default:
return list_STAR___10267.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10267.cljs$lang$applyTo;
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
var apply__10289 = (function (f,args){
var fixed_arity__10274 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10274 + 1)) <= fixed_arity__10274)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10290 = (function (f,x,args){
var arglist__10277 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10278 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10277,fixed_arity__10278) <= fixed_arity__10278)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10277));
} else
{return f.cljs$lang$applyTo(arglist__10277);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10277));
}
});
var apply__10291 = (function (f,x,y,args){
var arglist__10279 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10280 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10279,fixed_arity__10280) <= fixed_arity__10280)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10279));
} else
{return f.cljs$lang$applyTo(arglist__10279);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10279));
}
});
var apply__10292 = (function (f,x,y,z,args){
var arglist__10282 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10283 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10282,fixed_arity__10283) <= fixed_arity__10283)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10282));
} else
{return f.cljs$lang$applyTo(arglist__10282);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10282));
}
});
var apply__10293 = (function() { 
var G__10295__delegate = function (f,a,b,c,d,args){
var arglist__10286 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10287 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10286,fixed_arity__10287) <= fixed_arity__10287)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10286));
} else
{return f.cljs$lang$applyTo(arglist__10286);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10286));
}
};
var G__10295 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10295__delegate.call(this, f, a, b, c, d, args);
};
G__10295.cljs$lang$maxFixedArity = 5;
G__10295.cljs$lang$applyTo = (function (arglist__10304){
var f = cljs.core.first(arglist__10304);
var a = cljs.core.first(cljs.core.next(arglist__10304));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10304)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10304))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10304)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10304)))));
return G__10295__delegate.call(this, f, a, b, c, d, args);
});
return G__10295;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10289.call(this,f,a);
case  3 :
return apply__10290.call(this,f,a,b);
case  4 :
return apply__10291.call(this,f,a,b,c);
case  5 :
return apply__10292.call(this,f,a,b,c,d);
default:
return apply__10293.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10293.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10443){
var obj = cljs.core.first(arglist__10443);
var f = cljs.core.first(cljs.core.next(arglist__10443));
var args = cljs.core.rest(cljs.core.next(arglist__10443));
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
var not_EQ___10446 = (function (x){
return false;
});
var not_EQ___10447 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10448 = (function() { 
var G__10452__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10452 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10452__delegate.call(this, x, y, more);
};
G__10452.cljs$lang$maxFixedArity = 2;
G__10452.cljs$lang$applyTo = (function (arglist__10454){
var x = cljs.core.first(arglist__10454);
var y = cljs.core.first(cljs.core.next(arglist__10454));
var more = cljs.core.rest(cljs.core.next(arglist__10454));
return G__10452__delegate.call(this, x, y, more);
});
return G__10452;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10446.call(this,x);
case  2 :
return not_EQ___10447.call(this,x,y);
default:
return not_EQ___10448.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10448.cljs$lang$applyTo;
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
var G__10456 = pred;
var G__10457 = cljs.core.next.call(null,coll);
pred = G__10456;
coll = G__10457;
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
{var or__3548__auto____10466 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10466))
{return or__3548__auto____10466;
} else
{{
var G__10468 = pred;
var G__10469 = cljs.core.next.call(null,coll);
pred = G__10468;
coll = G__10469;
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
var G__10478 = null;
var G__10478__10479 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10478__10480 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10478__10481 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10478__10482 = (function() { 
var G__10484__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10484 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10484__delegate.call(this, x, y, zs);
};
G__10484.cljs$lang$maxFixedArity = 2;
G__10484.cljs$lang$applyTo = (function (arglist__10485){
var x = cljs.core.first(arglist__10485);
var y = cljs.core.first(cljs.core.next(arglist__10485));
var zs = cljs.core.rest(cljs.core.next(arglist__10485));
return G__10484__delegate.call(this, x, y, zs);
});
return G__10484;
})()
;
G__10478 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10478__10479.call(this);
case  1 :
return G__10478__10480.call(this,x);
case  2 :
return G__10478__10481.call(this,x,y);
default:
return G__10478__10482.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10478.cljs$lang$maxFixedArity = 2;
G__10478.cljs$lang$applyTo = G__10478__10482.cljs$lang$applyTo;
return G__10478;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10510__delegate = function (args){
return x;
};
var G__10510 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10510__delegate.call(this, args);
};
G__10510.cljs$lang$maxFixedArity = 0;
G__10510.cljs$lang$applyTo = (function (arglist__10567){
var args = cljs.core.seq( arglist__10567 );;
return G__10510__delegate.call(this, args);
});
return G__10510;
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
var comp__10647 = (function (){
return cljs.core.identity;
});
var comp__10648 = (function (f){
return f;
});
var comp__10650 = (function (f,g){
return (function() {
var G__10656 = null;
var G__10656__10657 = (function (){
return f.call(null,g.call(null));
});
var G__10656__10658 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10656__10659 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10656__10661 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10656__10663 = (function() { 
var G__10675__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10675 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10675__delegate.call(this, x, y, z, args);
};
G__10675.cljs$lang$maxFixedArity = 3;
G__10675.cljs$lang$applyTo = (function (arglist__10677){
var x = cljs.core.first(arglist__10677);
var y = cljs.core.first(cljs.core.next(arglist__10677));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10677)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10677)));
return G__10675__delegate.call(this, x, y, z, args);
});
return G__10675;
})()
;
G__10656 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10656__10657.call(this);
case  1 :
return G__10656__10658.call(this,x);
case  2 :
return G__10656__10659.call(this,x,y);
case  3 :
return G__10656__10661.call(this,x,y,z);
default:
return G__10656__10663.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10656.cljs$lang$maxFixedArity = 3;
G__10656.cljs$lang$applyTo = G__10656__10663.cljs$lang$applyTo;
return G__10656;
})()
});
var comp__10651 = (function (f,g,h){
return (function() {
var G__10681 = null;
var G__10681__10683 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10681__10684 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10681__10685 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10681__10686 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10681__10688 = (function() { 
var G__10695__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10695 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10695__delegate.call(this, x, y, z, args);
};
G__10695.cljs$lang$maxFixedArity = 3;
G__10695.cljs$lang$applyTo = (function (arglist__10698){
var x = cljs.core.first(arglist__10698);
var y = cljs.core.first(cljs.core.next(arglist__10698));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10698)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10698)));
return G__10695__delegate.call(this, x, y, z, args);
});
return G__10695;
})()
;
G__10681 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10681__10683.call(this);
case  1 :
return G__10681__10684.call(this,x);
case  2 :
return G__10681__10685.call(this,x,y);
case  3 :
return G__10681__10686.call(this,x,y,z);
default:
return G__10681__10688.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10681.cljs$lang$maxFixedArity = 3;
G__10681.cljs$lang$applyTo = G__10681__10688.cljs$lang$applyTo;
return G__10681;
})()
});
var comp__10652 = (function() { 
var G__10707__delegate = function (f1,f2,f3,fs){
var fs__10576 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10709__delegate = function (args){
var ret__10639 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10576),args);
var fs__10640 = cljs.core.next.call(null,fs__10576);

while(true){
if(cljs.core.truth_(fs__10640))
{{
var G__10712 = cljs.core.first.call(null,fs__10640).call(null,ret__10639);
var G__10713 = cljs.core.next.call(null,fs__10640);
ret__10639 = G__10712;
fs__10640 = G__10713;
continue;
}
} else
{return ret__10639;
}
break;
}
};
var G__10709 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10709__delegate.call(this, args);
};
G__10709.cljs$lang$maxFixedArity = 0;
G__10709.cljs$lang$applyTo = (function (arglist__10714){
var args = cljs.core.seq( arglist__10714 );;
return G__10709__delegate.call(this, args);
});
return G__10709;
})()
;
};
var G__10707 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10707__delegate.call(this, f1, f2, f3, fs);
};
G__10707.cljs$lang$maxFixedArity = 3;
G__10707.cljs$lang$applyTo = (function (arglist__10715){
var f1 = cljs.core.first(arglist__10715);
var f2 = cljs.core.first(cljs.core.next(arglist__10715));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10715)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10715)));
return G__10707__delegate.call(this, f1, f2, f3, fs);
});
return G__10707;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10647.call(this);
case  1 :
return comp__10648.call(this,f1);
case  2 :
return comp__10650.call(this,f1,f2);
case  3 :
return comp__10651.call(this,f1,f2,f3);
default:
return comp__10652.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10652.cljs$lang$applyTo;
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
var partial__10744 = (function (f,arg1){
return (function() { 
var G__10751__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10751 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10751__delegate.call(this, args);
};
G__10751.cljs$lang$maxFixedArity = 0;
G__10751.cljs$lang$applyTo = (function (arglist__10753){
var args = cljs.core.seq( arglist__10753 );;
return G__10751__delegate.call(this, args);
});
return G__10751;
})()
;
});
var partial__10745 = (function (f,arg1,arg2){
return (function() { 
var G__10756__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10756 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10756__delegate.call(this, args);
};
G__10756.cljs$lang$maxFixedArity = 0;
G__10756.cljs$lang$applyTo = (function (arglist__10757){
var args = cljs.core.seq( arglist__10757 );;
return G__10756__delegate.call(this, args);
});
return G__10756;
})()
;
});
var partial__10746 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10758__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10758 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10758__delegate.call(this, args);
};
G__10758.cljs$lang$maxFixedArity = 0;
G__10758.cljs$lang$applyTo = (function (arglist__10759){
var args = cljs.core.seq( arglist__10759 );;
return G__10758__delegate.call(this, args);
});
return G__10758;
})()
;
});
var partial__10747 = (function() { 
var G__10760__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10789__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10789 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10789__delegate.call(this, args);
};
G__10789.cljs$lang$maxFixedArity = 0;
G__10789.cljs$lang$applyTo = (function (arglist__10791){
var args = cljs.core.seq( arglist__10791 );;
return G__10789__delegate.call(this, args);
});
return G__10789;
})()
;
};
var G__10760 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10760__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10760.cljs$lang$maxFixedArity = 4;
G__10760.cljs$lang$applyTo = (function (arglist__10792){
var f = cljs.core.first(arglist__10792);
var arg1 = cljs.core.first(cljs.core.next(arglist__10792));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10792)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10792))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10792))));
return G__10760__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10760;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10744.call(this,f,arg1);
case  3 :
return partial__10745.call(this,f,arg1,arg2);
case  4 :
return partial__10746.call(this,f,arg1,arg2,arg3);
default:
return partial__10747.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10747.cljs$lang$applyTo;
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
var fnil__10855 = (function (f,x){
return (function() {
var G__10859 = null;
var G__10859__10860 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10859__10861 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10859__10863 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10859__10864 = (function() { 
var G__10874__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10874 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10874__delegate.call(this, a, b, c, ds);
};
G__10874.cljs$lang$maxFixedArity = 3;
G__10874.cljs$lang$applyTo = (function (arglist__10876){
var a = cljs.core.first(arglist__10876);
var b = cljs.core.first(cljs.core.next(arglist__10876));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10876)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10876)));
return G__10874__delegate.call(this, a, b, c, ds);
});
return G__10874;
})()
;
G__10859 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10859__10860.call(this,a);
case  2 :
return G__10859__10861.call(this,a,b);
case  3 :
return G__10859__10863.call(this,a,b,c);
default:
return G__10859__10864.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10859.cljs$lang$maxFixedArity = 3;
G__10859.cljs$lang$applyTo = G__10859__10864.cljs$lang$applyTo;
return G__10859;
})()
});
var fnil__10856 = (function (f,x,y){
return (function() {
var G__10879 = null;
var G__10879__10880 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10879__10881 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10879__10882 = (function() { 
var G__10894__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10894 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10894__delegate.call(this, a, b, c, ds);
};
G__10894.cljs$lang$maxFixedArity = 3;
G__10894.cljs$lang$applyTo = (function (arglist__10896){
var a = cljs.core.first(arglist__10896);
var b = cljs.core.first(cljs.core.next(arglist__10896));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10896)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10896)));
return G__10894__delegate.call(this, a, b, c, ds);
});
return G__10894;
})()
;
G__10879 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10879__10880.call(this,a,b);
case  3 :
return G__10879__10881.call(this,a,b,c);
default:
return G__10879__10882.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10879.cljs$lang$maxFixedArity = 3;
G__10879.cljs$lang$applyTo = G__10879__10882.cljs$lang$applyTo;
return G__10879;
})()
});
var fnil__10857 = (function (f,x,y,z){
return (function() {
var G__10901 = null;
var G__10901__10903 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10901__10904 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10901__10905 = (function() { 
var G__10914__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10914 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10914__delegate.call(this, a, b, c, ds);
};
G__10914.cljs$lang$maxFixedArity = 3;
G__10914.cljs$lang$applyTo = (function (arglist__10919){
var a = cljs.core.first(arglist__10919);
var b = cljs.core.first(cljs.core.next(arglist__10919));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10919)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10919)));
return G__10914__delegate.call(this, a, b, c, ds);
});
return G__10914;
})()
;
G__10901 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10901__10903.call(this,a,b);
case  3 :
return G__10901__10904.call(this,a,b,c);
default:
return G__10901__10905.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10901.cljs$lang$maxFixedArity = 3;
G__10901.cljs$lang$applyTo = G__10901__10905.cljs$lang$applyTo;
return G__10901;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10855.call(this,f,x);
case  3 :
return fnil__10856.call(this,f,x,y);
case  4 :
return fnil__10857.call(this,f,x,y,z);
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
var mapi__11021 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11018 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11018))
{var s__11020 = temp__3698__auto____11018;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11020)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11020)));
} else
{return null;
}
})));
});

return mapi__11021.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11036 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11036))
{var s__11043 = temp__3698__auto____11036;

var x__11044 = f.call(null,cljs.core.first.call(null,s__11043));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11044)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11043));
} else
{return cljs.core.cons.call(null,x__11044,keep.call(null,f,cljs.core.rest.call(null,s__11043)));
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
var keepi__11213 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11208 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11208))
{var s__11209 = temp__3698__auto____11208;

var x__11211 = f.call(null,idx,cljs.core.first.call(null,s__11209));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11211)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11209));
} else
{return cljs.core.cons.call(null,x__11211,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11209)));
}
} else
{return null;
}
})));
});

return keepi__11213.call(null,0,coll);
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
var every_pred__11439 = (function (p){
return (function() {
var ep1 = null;
var ep1__11445 = (function (){
return true;
});
var ep1__11446 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11447 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11242 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11242))
{return p.call(null,y);
} else
{return and__3546__auto____11242;
}
})());
});
var ep1__11449 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11244 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11244))
{var and__3546__auto____11245 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11245))
{return p.call(null,z);
} else
{return and__3546__auto____11245;
}
} else
{return and__3546__auto____11244;
}
})());
});
var ep1__11450 = (function() { 
var G__11461__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11248 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11248))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11248;
}
})());
};
var G__11461 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11461__delegate.call(this, x, y, z, args);
};
G__11461.cljs$lang$maxFixedArity = 3;
G__11461.cljs$lang$applyTo = (function (arglist__11466){
var x = cljs.core.first(arglist__11466);
var y = cljs.core.first(cljs.core.next(arglist__11466));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11466)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11466)));
return G__11461__delegate.call(this, x, y, z, args);
});
return G__11461;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11445.call(this);
case  1 :
return ep1__11446.call(this,x);
case  2 :
return ep1__11447.call(this,x,y);
case  3 :
return ep1__11449.call(this,x,y,z);
default:
return ep1__11450.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11450.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11440 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11471 = (function (){
return true;
});
var ep2__11472 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11250 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11250))
{return p2.call(null,x);
} else
{return and__3546__auto____11250;
}
})());
});
var ep2__11473 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11253 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11253))
{var and__3546__auto____11254 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11254))
{var and__3546__auto____11256 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11256))
{return p2.call(null,y);
} else
{return and__3546__auto____11256;
}
} else
{return and__3546__auto____11254;
}
} else
{return and__3546__auto____11253;
}
})());
});
var ep2__11474 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11261 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11261))
{var and__3546__auto____11262 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11262))
{var and__3546__auto____11265 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11265))
{var and__3546__auto____11266 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11266))
{var and__3546__auto____11274 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11274))
{return p2.call(null,z);
} else
{return and__3546__auto____11274;
}
} else
{return and__3546__auto____11266;
}
} else
{return and__3546__auto____11265;
}
} else
{return and__3546__auto____11262;
}
} else
{return and__3546__auto____11261;
}
})());
});
var ep2__11476 = (function() { 
var G__11494__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11278 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11278))
{return cljs.core.every_QMARK_.call(null,(function (p1__11060_SHARP_){
var and__3546__auto____11281 = p1.call(null,p1__11060_SHARP_);

if(cljs.core.truth_(and__3546__auto____11281))
{return p2.call(null,p1__11060_SHARP_);
} else
{return and__3546__auto____11281;
}
}),args);
} else
{return and__3546__auto____11278;
}
})());
};
var G__11494 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11494__delegate.call(this, x, y, z, args);
};
G__11494.cljs$lang$maxFixedArity = 3;
G__11494.cljs$lang$applyTo = (function (arglist__11498){
var x = cljs.core.first(arglist__11498);
var y = cljs.core.first(cljs.core.next(arglist__11498));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11498)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11498)));
return G__11494__delegate.call(this, x, y, z, args);
});
return G__11494;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11471.call(this);
case  1 :
return ep2__11472.call(this,x);
case  2 :
return ep2__11473.call(this,x,y);
case  3 :
return ep2__11474.call(this,x,y,z);
default:
return ep2__11476.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11476.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11441 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11506 = (function (){
return true;
});
var ep3__11509 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11285 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11285))
{var and__3546__auto____11286 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11286))
{return p3.call(null,x);
} else
{return and__3546__auto____11286;
}
} else
{return and__3546__auto____11285;
}
})());
});
var ep3__11510 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11289 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11289))
{var and__3546__auto____11290 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11290))
{var and__3546__auto____11291 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11291))
{var and__3546__auto____11363 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11363))
{var and__3546__auto____11370 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11370))
{return p3.call(null,y);
} else
{return and__3546__auto____11370;
}
} else
{return and__3546__auto____11363;
}
} else
{return and__3546__auto____11291;
}
} else
{return and__3546__auto____11290;
}
} else
{return and__3546__auto____11289;
}
})());
});
var ep3__11511 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11371 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11371))
{var and__3546__auto____11372 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11372))
{var and__3546__auto____11373 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11373))
{var and__3546__auto____11374 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11374))
{var and__3546__auto____11376 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11376))
{var and__3546__auto____11378 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11378))
{var and__3546__auto____11379 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11379))
{var and__3546__auto____11381 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11381))
{return p3.call(null,z);
} else
{return and__3546__auto____11381;
}
} else
{return and__3546__auto____11379;
}
} else
{return and__3546__auto____11378;
}
} else
{return and__3546__auto____11376;
}
} else
{return and__3546__auto____11374;
}
} else
{return and__3546__auto____11373;
}
} else
{return and__3546__auto____11372;
}
} else
{return and__3546__auto____11371;
}
})());
});
var ep3__11512 = (function() { 
var G__11529__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11385 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11385))
{return cljs.core.every_QMARK_.call(null,(function (p1__11062_SHARP_){
var and__3546__auto____11386 = p1.call(null,p1__11062_SHARP_);

if(cljs.core.truth_(and__3546__auto____11386))
{var and__3546__auto____11390 = p2.call(null,p1__11062_SHARP_);

if(cljs.core.truth_(and__3546__auto____11390))
{return p3.call(null,p1__11062_SHARP_);
} else
{return and__3546__auto____11390;
}
} else
{return and__3546__auto____11386;
}
}),args);
} else
{return and__3546__auto____11385;
}
})());
};
var G__11529 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11529__delegate.call(this, x, y, z, args);
};
G__11529.cljs$lang$maxFixedArity = 3;
G__11529.cljs$lang$applyTo = (function (arglist__11532){
var x = cljs.core.first(arglist__11532);
var y = cljs.core.first(cljs.core.next(arglist__11532));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11532)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11532)));
return G__11529__delegate.call(this, x, y, z, args);
});
return G__11529;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11506.call(this);
case  1 :
return ep3__11509.call(this,x);
case  2 :
return ep3__11510.call(this,x,y);
case  3 :
return ep3__11511.call(this,x,y,z);
default:
return ep3__11512.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11512.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11442 = (function() { 
var G__11549__delegate = function (p1,p2,p3,ps){
var ps__11393 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11554 = (function (){
return true;
});
var epn__11556 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11063_SHARP_){
return p1__11063_SHARP_.call(null,x);
}),ps__11393);
});
var epn__11558 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11064_SHARP_){
var and__3546__auto____11401 = p1__11064_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11401))
{return p1__11064_SHARP_.call(null,y);
} else
{return and__3546__auto____11401;
}
}),ps__11393);
});
var epn__11559 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11068_SHARP_){
var and__3546__auto____11406 = p1__11068_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11406))
{var and__3546__auto____11410 = p1__11068_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11410))
{return p1__11068_SHARP_.call(null,z);
} else
{return and__3546__auto____11410;
}
} else
{return and__3546__auto____11406;
}
}),ps__11393);
});
var epn__11560 = (function() { 
var G__11565__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11424 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11424))
{return cljs.core.every_QMARK_.call(null,(function (p1__11205_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11205_SHARP_,args);
}),ps__11393);
} else
{return and__3546__auto____11424;
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
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11554.call(this);
case  1 :
return epn__11556.call(this,x);
case  2 :
return epn__11558.call(this,x,y);
case  3 :
return epn__11559.call(this,x,y,z);
default:
return epn__11560.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11560.cljs$lang$applyTo;
return epn;
})()
};
var G__11549 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11549__delegate.call(this, p1, p2, p3, ps);
};
G__11549.cljs$lang$maxFixedArity = 3;
G__11549.cljs$lang$applyTo = (function (arglist__11578){
var p1 = cljs.core.first(arglist__11578);
var p2 = cljs.core.first(cljs.core.next(arglist__11578));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11578)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11578)));
return G__11549__delegate.call(this, p1, p2, p3, ps);
});
return G__11549;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11439.call(this,p1);
case  2 :
return every_pred__11440.call(this,p1,p2);
case  3 :
return every_pred__11441.call(this,p1,p2,p3);
default:
return every_pred__11442.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11442.cljs$lang$applyTo;
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
var some_fn__11777 = (function (p){
return (function() {
var sp1 = null;
var sp1__11782 = (function (){
return null;
});
var sp1__11783 = (function (x){
return p.call(null,x);
});
var sp1__11784 = (function (x,y){
var or__3548__auto____11587 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11587))
{return or__3548__auto____11587;
} else
{return p.call(null,y);
}
});
var sp1__11785 = (function (x,y,z){
var or__3548__auto____11590 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11590))
{return or__3548__auto____11590;
} else
{var or__3548__auto____11596 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11596))
{return or__3548__auto____11596;
} else
{return p.call(null,z);
}
}
});
var sp1__11786 = (function() { 
var G__11791__delegate = function (x,y,z,args){
var or__3548__auto____11601 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11601))
{return or__3548__auto____11601;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11791 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11791__delegate.call(this, x, y, z, args);
};
G__11791.cljs$lang$maxFixedArity = 3;
G__11791.cljs$lang$applyTo = (function (arglist__11792){
var x = cljs.core.first(arglist__11792);
var y = cljs.core.first(cljs.core.next(arglist__11792));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11792)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11792)));
return G__11791__delegate.call(this, x, y, z, args);
});
return G__11791;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11782.call(this);
case  1 :
return sp1__11783.call(this,x);
case  2 :
return sp1__11784.call(this,x,y);
case  3 :
return sp1__11785.call(this,x,y,z);
default:
return sp1__11786.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11786.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11778 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11801 = (function (){
return null;
});
var sp2__11803 = (function (x){
var or__3548__auto____11604 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11604))
{return or__3548__auto____11604;
} else
{return p2.call(null,x);
}
});
var sp2__11804 = (function (x,y){
var or__3548__auto____11607 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11607))
{return or__3548__auto____11607;
} else
{var or__3548__auto____11609 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11609))
{return or__3548__auto____11609;
} else
{var or__3548__auto____11611 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11611))
{return or__3548__auto____11611;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11805 = (function (x,y,z){
var or__3548__auto____11614 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11614))
{return or__3548__auto____11614;
} else
{var or__3548__auto____11615 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11615))
{return or__3548__auto____11615;
} else
{var or__3548__auto____11617 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11617))
{return or__3548__auto____11617;
} else
{var or__3548__auto____11619 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11619))
{return or__3548__auto____11619;
} else
{var or__3548__auto____11621 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11621))
{return or__3548__auto____11621;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11806 = (function() { 
var G__11814__delegate = function (x,y,z,args){
var or__3548__auto____11623 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11623))
{return or__3548__auto____11623;
} else
{return cljs.core.some.call(null,(function (p1__11224_SHARP_){
var or__3548__auto____11626 = p1.call(null,p1__11224_SHARP_);

if(cljs.core.truth_(or__3548__auto____11626))
{return or__3548__auto____11626;
} else
{return p2.call(null,p1__11224_SHARP_);
}
}),args);
}
};
var G__11814 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11814__delegate.call(this, x, y, z, args);
};
G__11814.cljs$lang$maxFixedArity = 3;
G__11814.cljs$lang$applyTo = (function (arglist__11821){
var x = cljs.core.first(arglist__11821);
var y = cljs.core.first(cljs.core.next(arglist__11821));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11821)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11821)));
return G__11814__delegate.call(this, x, y, z, args);
});
return G__11814;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11801.call(this);
case  1 :
return sp2__11803.call(this,x);
case  2 :
return sp2__11804.call(this,x,y);
case  3 :
return sp2__11805.call(this,x,y,z);
default:
return sp2__11806.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11806.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11779 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11823 = (function (){
return null;
});
var sp3__11825 = (function (x){
var or__3548__auto____11629 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11629))
{return or__3548__auto____11629;
} else
{var or__3548__auto____11635 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11635))
{return or__3548__auto____11635;
} else
{return p3.call(null,x);
}
}
});
var sp3__11826 = (function (x,y){
var or__3548__auto____11638 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11638))
{return or__3548__auto____11638;
} else
{var or__3548__auto____11640 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11640))
{return or__3548__auto____11640;
} else
{var or__3548__auto____11641 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11641))
{return or__3548__auto____11641;
} else
{var or__3548__auto____11643 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11643))
{return or__3548__auto____11643;
} else
{var or__3548__auto____11644 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11644))
{return or__3548__auto____11644;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11827 = (function (x,y,z){
var or__3548__auto____11647 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11647))
{return or__3548__auto____11647;
} else
{var or__3548__auto____11648 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11648))
{return or__3548__auto____11648;
} else
{var or__3548__auto____11649 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11649))
{return or__3548__auto____11649;
} else
{var or__3548__auto____11654 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11654))
{return or__3548__auto____11654;
} else
{var or__3548__auto____11657 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11657))
{return or__3548__auto____11657;
} else
{var or__3548__auto____11719 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11719))
{return or__3548__auto____11719;
} else
{var or__3548__auto____11721 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11721))
{return or__3548__auto____11721;
} else
{var or__3548__auto____11723 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11723))
{return or__3548__auto____11723;
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
var sp3__11828 = (function() { 
var G__11849__delegate = function (x,y,z,args){
var or__3548__auto____11724 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11724))
{return or__3548__auto____11724;
} else
{return cljs.core.some.call(null,(function (p1__11237_SHARP_){
var or__3548__auto____11730 = p1.call(null,p1__11237_SHARP_);

if(cljs.core.truth_(or__3548__auto____11730))
{return or__3548__auto____11730;
} else
{var or__3548__auto____11731 = p2.call(null,p1__11237_SHARP_);

if(cljs.core.truth_(or__3548__auto____11731))
{return or__3548__auto____11731;
} else
{return p3.call(null,p1__11237_SHARP_);
}
}
}),args);
}
};
var G__11849 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11849__delegate.call(this, x, y, z, args);
};
G__11849.cljs$lang$maxFixedArity = 3;
G__11849.cljs$lang$applyTo = (function (arglist__11907){
var x = cljs.core.first(arglist__11907);
var y = cljs.core.first(cljs.core.next(arglist__11907));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11907)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11907)));
return G__11849__delegate.call(this, x, y, z, args);
});
return G__11849;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11823.call(this);
case  1 :
return sp3__11825.call(this,x);
case  2 :
return sp3__11826.call(this,x,y);
case  3 :
return sp3__11827.call(this,x,y,z);
default:
return sp3__11828.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11828.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11780 = (function() { 
var G__11911__delegate = function (p1,p2,p3,ps){
var ps__11734 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11912 = (function (){
return null;
});
var spn__11913 = (function (x){
return cljs.core.some.call(null,(function (p1__11238_SHARP_){
return p1__11238_SHARP_.call(null,x);
}),ps__11734);
});
var spn__11914 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11239_SHARP_){
var or__3548__auto____11745 = p1__11239_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11745))
{return or__3548__auto____11745;
} else
{return p1__11239_SHARP_.call(null,y);
}
}),ps__11734);
});
var spn__11915 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11240_SHARP_){
var or__3548__auto____11746 = p1__11240_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11746))
{return or__3548__auto____11746;
} else
{var or__3548__auto____11765 = p1__11240_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11765))
{return or__3548__auto____11765;
} else
{return p1__11240_SHARP_.call(null,z);
}
}
}),ps__11734);
});
var spn__11916 = (function() { 
var G__11924__delegate = function (x,y,z,args){
var or__3548__auto____11774 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11774))
{return or__3548__auto____11774;
} else
{return cljs.core.some.call(null,(function (p1__11241_SHARP_){
return cljs.core.some.call(null,p1__11241_SHARP_,args);
}),ps__11734);
}
};
var G__11924 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11924__delegate.call(this, x, y, z, args);
};
G__11924.cljs$lang$maxFixedArity = 3;
G__11924.cljs$lang$applyTo = (function (arglist__11926){
var x = cljs.core.first(arglist__11926);
var y = cljs.core.first(cljs.core.next(arglist__11926));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11926)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11926)));
return G__11924__delegate.call(this, x, y, z, args);
});
return G__11924;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11912.call(this);
case  1 :
return spn__11913.call(this,x);
case  2 :
return spn__11914.call(this,x,y);
case  3 :
return spn__11915.call(this,x,y,z);
default:
return spn__11916.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11916.cljs$lang$applyTo;
return spn;
})()
};
var G__11911 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11911__delegate.call(this, p1, p2, p3, ps);
};
G__11911.cljs$lang$maxFixedArity = 3;
G__11911.cljs$lang$applyTo = (function (arglist__11927){
var p1 = cljs.core.first(arglist__11927);
var p2 = cljs.core.first(cljs.core.next(arglist__11927));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11927)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11927)));
return G__11911__delegate.call(this, p1, p2, p3, ps);
});
return G__11911;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11777.call(this,p1);
case  2 :
return some_fn__11778.call(this,p1,p2);
case  3 :
return some_fn__11779.call(this,p1,p2,p3);
default:
return some_fn__11780.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11780.cljs$lang$applyTo;
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
var map__11976 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11931 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11931))
{var s__11933 = temp__3698__auto____11931;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11933)),map.call(null,f,cljs.core.rest.call(null,s__11933)));
} else
{return null;
}
})));
});
var map__11977 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11937 = cljs.core.seq.call(null,c1);
var s2__11938 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11941 = s1__11937;

if(cljs.core.truth_(and__3546__auto____11941))
{return s2__11938;
} else
{return and__3546__auto____11941;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11937),cljs.core.first.call(null,s2__11938)),map.call(null,f,cljs.core.rest.call(null,s1__11937),cljs.core.rest.call(null,s2__11938)));
} else
{return null;
}
})));
});
var map__11978 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11951 = cljs.core.seq.call(null,c1);
var s2__11952 = cljs.core.seq.call(null,c2);
var s3__11953 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11954 = s1__11951;

if(cljs.core.truth_(and__3546__auto____11954))
{var and__3546__auto____11956 = s2__11952;

if(cljs.core.truth_(and__3546__auto____11956))
{return s3__11953;
} else
{return and__3546__auto____11956;
}
} else
{return and__3546__auto____11954;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11951),cljs.core.first.call(null,s2__11952),cljs.core.first.call(null,s3__11953)),map.call(null,f,cljs.core.rest.call(null,s1__11951),cljs.core.rest.call(null,s2__11952),cljs.core.rest.call(null,s3__11953)));
} else
{return null;
}
})));
});
var map__11979 = (function() { 
var G__11993__delegate = function (f,c1,c2,c3,colls){
var step__11969 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11966 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11966)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11966),step.call(null,map.call(null,cljs.core.rest,ss__11966)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11583_SHARP_){
return cljs.core.apply.call(null,f,p1__11583_SHARP_);
}),step__11969.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11993 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11993__delegate.call(this, f, c1, c2, c3, colls);
};
G__11993.cljs$lang$maxFixedArity = 4;
G__11993.cljs$lang$applyTo = (function (arglist__11997){
var f = cljs.core.first(arglist__11997);
var c1 = cljs.core.first(cljs.core.next(arglist__11997));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11997)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11997))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11997))));
return G__11993__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11993;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11976.call(this,f,c1);
case  3 :
return map__11977.call(this,f,c1,c2);
case  4 :
return map__11978.call(this,f,c1,c2,c3);
default:
return map__11979.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11979.cljs$lang$applyTo;
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
{var temp__3698__auto____12002 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12002))
{var s__12003 = temp__3698__auto____12002;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12003),take.call(null,(n - 1),cljs.core.rest.call(null,s__12003)));
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
var step__12011 = (function (n,coll){
while(true){
var s__12008 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12009 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12009))
{return s__12008;
} else
{return and__3546__auto____12009;
}
})()))
{{
var G__12015 = (n - 1);
var G__12016 = cljs.core.rest.call(null,s__12008);
n = G__12015;
coll = G__12016;
continue;
}
} else
{return s__12008;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12011.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12020 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12021 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12020.call(this,n);
case  2 :
return drop_last__12021.call(this,n,s);
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
var s__12030 = cljs.core.seq.call(null,coll);
var lead__12032 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12032))
{{
var G__12044 = cljs.core.next.call(null,s__12030);
var G__12045 = cljs.core.next.call(null,lead__12032);
s__12030 = G__12044;
lead__12032 = G__12045;
continue;
}
} else
{return s__12030;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12052 = (function (pred,coll){
while(true){
var s__12047 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12051 = s__12047;

if(cljs.core.truth_(and__3546__auto____12051))
{return pred.call(null,cljs.core.first.call(null,s__12047));
} else
{return and__3546__auto____12051;
}
})()))
{{
var G__12058 = pred;
var G__12059 = cljs.core.rest.call(null,s__12047);
pred = G__12058;
coll = G__12059;
continue;
}
} else
{return s__12047;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12052.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12067 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12067))
{var s__12068 = temp__3698__auto____12067;

return cljs.core.concat.call(null,s__12068,cycle.call(null,s__12068));
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
var repeat__12083 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12084 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12083.call(this,n);
case  2 :
return repeat__12084.call(this,n,x);
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
var repeatedly__12097 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12098 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12097.call(this,n);
case  2 :
return repeatedly__12098.call(this,n,f);
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
var interleave__12118 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12104 = cljs.core.seq.call(null,c1);
var s2__12105 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12106 = s1__12104;

if(cljs.core.truth_(and__3546__auto____12106))
{return s2__12105;
} else
{return and__3546__auto____12106;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12104),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12105),interleave.call(null,cljs.core.rest.call(null,s1__12104),cljs.core.rest.call(null,s2__12105))));
} else
{return null;
}
})));
});
var interleave__12119 = (function() { 
var G__12125__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12112 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12112)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12112),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12112)));
} else
{return null;
}
})));
};
var G__12125 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12125__delegate.call(this, c1, c2, colls);
};
G__12125.cljs$lang$maxFixedArity = 2;
G__12125.cljs$lang$applyTo = (function (arglist__12132){
var c1 = cljs.core.first(arglist__12132);
var c2 = cljs.core.first(cljs.core.next(arglist__12132));
var colls = cljs.core.rest(cljs.core.next(arglist__12132));
return G__12125__delegate.call(this, c1, c2, colls);
});
return G__12125;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12118.call(this,c1,c2);
default:
return interleave__12119.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12119.cljs$lang$applyTo;
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
var cat__12202 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12198 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12198))
{var coll__12199 = temp__3695__auto____12198;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12199),cat.call(null,cljs.core.rest.call(null,coll__12199),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12202.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12212 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12213 = (function() { 
var G__12215__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12215 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12215__delegate.call(this, f, coll, colls);
};
G__12215.cljs$lang$maxFixedArity = 2;
G__12215.cljs$lang$applyTo = (function (arglist__12216){
var f = cljs.core.first(arglist__12216);
var coll = cljs.core.first(cljs.core.next(arglist__12216));
var colls = cljs.core.rest(cljs.core.next(arglist__12216));
return G__12215__delegate.call(this, f, coll, colls);
});
return G__12215;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12212.call(this,f,coll);
default:
return mapcat__12213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12213.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12221 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12221))
{var s__12222 = temp__3698__auto____12221;

var f__12224 = cljs.core.first.call(null,s__12222);
var r__12225 = cljs.core.rest.call(null,s__12222);

if(cljs.core.truth_(pred.call(null,f__12224)))
{return cljs.core.cons.call(null,f__12224,filter.call(null,pred,r__12225));
} else
{return filter.call(null,pred,r__12225);
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
var walk__12332 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12332.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12331_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12331_SHARP_));
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
var partition__12446 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12448 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12406 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12406))
{var s__12408 = temp__3698__auto____12406;

var p__12411 = cljs.core.take.call(null,n,s__12408);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12411))))
{return cljs.core.cons.call(null,p__12411,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12408)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12449 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12415 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12415))
{var s__12417 = temp__3698__auto____12415;

var p__12420 = cljs.core.take.call(null,n,s__12417);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12420))))
{return cljs.core.cons.call(null,p__12420,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12417)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12420,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12446.call(this,n,step);
case  3 :
return partition__12448.call(this,n,step,pad);
case  4 :
return partition__12449.call(this,n,step,pad,coll);
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
var get_in__12476 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12477 = (function (m,ks,not_found){
var sentinel__12466 = cljs.core.lookup_sentinel;
var m__12467 = m;
var ks__12468 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12468))
{var m__12471 = cljs.core.get.call(null,m__12467,cljs.core.first.call(null,ks__12468),sentinel__12466);

if(cljs.core.truth_((sentinel__12466 === m__12471)))
{return not_found;
} else
{{
var G__12481 = sentinel__12466;
var G__12482 = m__12471;
var G__12483 = cljs.core.next.call(null,ks__12468);
sentinel__12466 = G__12481;
m__12467 = G__12482;
ks__12468 = G__12483;
continue;
}
}
} else
{return m__12467;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12476.call(this,m,ks);
case  3 :
return get_in__12477.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12485,v){
var vec__12489__12490 = p__12485;
var k__12491 = cljs.core.nth.call(null,vec__12489__12490,0,null);
var ks__12492 = cljs.core.nthnext.call(null,vec__12489__12490,1);

if(cljs.core.truth_(ks__12492))
{return cljs.core.assoc.call(null,m,k__12491,assoc_in.call(null,cljs.core.get.call(null,m,k__12491),ks__12492,v));
} else
{return cljs.core.assoc.call(null,m,k__12491,v);
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
var update_in__delegate = function (m,p__12505,f,args){
var vec__12506__12507 = p__12505;
var k__12508 = cljs.core.nth.call(null,vec__12506__12507,0,null);
var ks__12509 = cljs.core.nthnext.call(null,vec__12506__12507,1);

if(cljs.core.truth_(ks__12509))
{return cljs.core.assoc.call(null,m,k__12508,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12508),ks__12509,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12508,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12508),args));
}
};
var update_in = function (m,p__12505,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12505, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12513){
var m = cljs.core.first(arglist__12513);
var p__12505 = cljs.core.first(cljs.core.next(arglist__12513));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12513)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12513)));
return update_in__delegate.call(this, m, p__12505, f, args);
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
var this__12526 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12608 = null;
var G__12608__12609 = (function (coll,k){
var this__12528 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12608__12611 = (function (coll,k,not_found){
var this__12529 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12608 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12608__12609.call(this,coll,k);
case  3 :
return G__12608__12611.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12608;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12531 = this;
var new_array__12533 = cljs.core.aclone.call(null,this__12531.array);

(new_array__12533[k] = v);
return (new cljs.core.Vector(this__12531.meta,new_array__12533));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12616 = null;
var G__12616__12617 = (function (coll,k){
var this__12534 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12616__12618 = (function (coll,k,not_found){
var this__12536 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12616 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12616__12617.call(this,coll,k);
case  3 :
return G__12616__12618.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12616;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12537 = this;
var new_array__12538 = cljs.core.aclone.call(null,this__12537.array);

new_array__12538.push(o);
return (new cljs.core.Vector(this__12537.meta,new_array__12538));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12622 = null;
var G__12622__12623 = (function (v,f){
var this__12539 = this;
return cljs.core.ci_reduce.call(null,this__12539.array,f);
});
var G__12622__12624 = (function (v,f,start){
var this__12540 = this;
return cljs.core.ci_reduce.call(null,this__12540.array,f,start);
});
G__12622 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12622__12623.call(this,v,f);
case  3 :
return G__12622__12624.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12622;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12541 = this;
if(cljs.core.truth_((this__12541.array.length > 0)))
{var vector_seq__12542 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12541.array.length)))
{return cljs.core.cons.call(null,(this__12541.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12542.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12544 = this;
return this__12544.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12545 = this;
var count__12586 = this__12545.array.length;

if(cljs.core.truth_((count__12586 > 0)))
{return (this__12545.array[(count__12586 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12591 = this;
if(cljs.core.truth_((this__12591.array.length > 0)))
{var new_array__12593 = cljs.core.aclone.call(null,this__12591.array);

new_array__12593.pop();
return (new cljs.core.Vector(this__12591.meta,new_array__12593));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12594 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12595 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12596 = this;
return (new cljs.core.Vector(meta,this__12596.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12597 = this;
return this__12597.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12653 = null;
var G__12653__12656 = (function (coll,n){
var this__12598 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12599 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12599))
{return (n < this__12598.array.length);
} else
{return and__3546__auto____12599;
}
})()))
{return (this__12598.array[n]);
} else
{return null;
}
});
var G__12653__12657 = (function (coll,n,not_found){
var this__12600 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12602 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12602))
{return (n < this__12600.array.length);
} else
{return and__3546__auto____12602;
}
})()))
{return (this__12600.array[n]);
} else
{return not_found;
}
});
G__12653 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12653__12656.call(this,coll,n);
case  3 :
return G__12653__12657.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12653;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12605 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12605.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12674){
var args = cljs.core.seq( arglist__12674 );;
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
var this__12680 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12725 = null;
var G__12725__12727 = (function (coll,k){
var this__12681 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12725__12728 = (function (coll,k,not_found){
var this__12682 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12725 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12725__12727.call(this,coll,k);
case  3 :
return G__12725__12728.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12725;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12683 = this;
var v_pos__12684 = (this__12683.start + key);

return (new cljs.core.Subvec(this__12683.meta,cljs.core._assoc.call(null,this__12683.v,v_pos__12684,val),this__12683.start,((this__12683.end > (v_pos__12684 + 1)) ? this__12683.end : (v_pos__12684 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12734 = null;
var G__12734__12735 = (function (coll,k){
var this__12686 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12734__12736 = (function (coll,k,not_found){
var this__12687 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12734 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12734__12735.call(this,coll,k);
case  3 :
return G__12734__12736.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12734;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12688 = this;
return (new cljs.core.Subvec(this__12688.meta,cljs.core._assoc_n.call(null,this__12688.v,this__12688.end,o),this__12688.start,(this__12688.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12744 = null;
var G__12744__12746 = (function (coll,f){
var this__12689 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12744__12748 = (function (coll,f,start){
var this__12690 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12744 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12744__12746.call(this,coll,f);
case  3 :
return G__12744__12748.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12744;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12691 = this;
var subvec_seq__12693 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12691.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12691.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12693.call(null,this__12691.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12694 = this;
return (this__12694.end - this__12694.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12695 = this;
return cljs.core._nth.call(null,this__12695.v,(this__12695.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12696 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12696.start,this__12696.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12696.meta,this__12696.v,this__12696.start,(this__12696.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12697 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12700 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12701 = this;
return (new cljs.core.Subvec(meta,this__12701.v,this__12701.start,this__12701.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12709 = this;
return this__12709.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12767 = null;
var G__12767__12768 = (function (coll,n){
var this__12711 = this;
return cljs.core._nth.call(null,this__12711.v,(this__12711.start + n));
});
var G__12767__12770 = (function (coll,n,not_found){
var this__12713 = this;
return cljs.core._nth.call(null,this__12713.v,(this__12713.start + n),not_found);
});
G__12767 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12767__12768.call(this,coll,n);
case  3 :
return G__12767__12770.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12767;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12718 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12718.meta);
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
var subvec__12786 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12787 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12786.call(this,v,start);
case  3 :
return subvec__12787.call(this,v,start,end);
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
var this__12797 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12798 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12799 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12800 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12800.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12801 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12802 = this;
return cljs.core._first.call(null,this__12802.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12803 = this;
var temp__3695__auto____12805 = cljs.core.next.call(null,this__12803.front);

if(cljs.core.truth_(temp__3695__auto____12805))
{var f1__12809 = temp__3695__auto____12805;

return (new cljs.core.PersistentQueueSeq(this__12803.meta,f1__12809,this__12803.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12803.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12803.meta,this__12803.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12810 = this;
return this__12810.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12811 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12811.front,this__12811.rear));
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
var this__12836 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12837 = this;
if(cljs.core.truth_(this__12837.front))
{return (new cljs.core.PersistentQueue(this__12837.meta,(this__12837.count + 1),this__12837.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12841 = this__12837.rear;

if(cljs.core.truth_(or__3548__auto____12841))
{return or__3548__auto____12841;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12837.meta,(this__12837.count + 1),cljs.core.conj.call(null,this__12837.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12844 = this;
var rear__12845 = cljs.core.seq.call(null,this__12844.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12847 = this__12844.front;

if(cljs.core.truth_(or__3548__auto____12847))
{return or__3548__auto____12847;
} else
{return rear__12845;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12844.front,cljs.core.seq.call(null,rear__12845)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12848 = this;
return this__12848.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12914 = this;
return cljs.core._first.call(null,this__12914.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12916 = this;
if(cljs.core.truth_(this__12916.front))
{var temp__3695__auto____12918 = cljs.core.next.call(null,this__12916.front);

if(cljs.core.truth_(temp__3695__auto____12918))
{var f1__12919 = temp__3695__auto____12918;

return (new cljs.core.PersistentQueue(this__12916.meta,(this__12916.count - 1),f1__12919,this__12916.rear));
} else
{return (new cljs.core.PersistentQueue(this__12916.meta,(this__12916.count - 1),cljs.core.seq.call(null,this__12916.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12922 = this;
return cljs.core.first.call(null,this__12922.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12924 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12926 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12927 = this;
return (new cljs.core.PersistentQueue(meta,this__12927.count,this__12927.front,this__12927.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12929 = this;
return this__12929.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12930 = this;
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
var this__12949 = this;
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
var len__12956 = array.length;

var i__12957 = 0;

while(true){
if(cljs.core.truth_((i__12957 < len__12956)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12957]))))
{return i__12957;
} else
{{
var G__12959 = (i__12957 + incr);
i__12957 = G__12959;
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
var obj_map_contains_key_QMARK___12963 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12964 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12962 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12962))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12962;
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
return obj_map_contains_key_QMARK___12963.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12964.call(this,k,strobj,true_val,false_val);
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
var this__12979 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13195 = null;
var G__13195__13197 = (function (coll,k){
var this__12980 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13195__13198 = (function (coll,k,not_found){
var this__12981 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12981.strobj,(this__12981.strobj[k]),not_found);
});
G__13195 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13195__13197.call(this,coll,k);
case  3 :
return G__13195__13198.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13195;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12982 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12983 = goog.object.clone.call(null,this__12982.strobj);
var overwrite_QMARK___12988 = new_strobj__12983.hasOwnProperty(k);

(new_strobj__12983[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12988))
{return (new cljs.core.ObjMap(this__12982.meta,this__12982.keys,new_strobj__12983));
} else
{var new_keys__12992 = cljs.core.aclone.call(null,this__12982.keys);

new_keys__12992.push(k);
return (new cljs.core.ObjMap(this__12982.meta,new_keys__12992,new_strobj__12983));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12982.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12994 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12994.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13217 = null;
var G__13217__13218 = (function (coll,k){
var this__12996 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13217__13219 = (function (coll,k,not_found){
var this__12999 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13217 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13217__13218.call(this,coll,k);
case  3 :
return G__13217__13219.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13217;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13005 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13009 = this;
if(cljs.core.truth_((this__13009.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12970_SHARP_){
return cljs.core.vector.call(null,p1__12970_SHARP_,(this__13009.strobj[p1__12970_SHARP_]));
}),this__13009.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13018 = this;
return this__13018.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13021 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13023 = this;
return (new cljs.core.ObjMap(meta,this__13023.keys,this__13023.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13026 = this;
return this__13026.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13029 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13029.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13186 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13189 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13189))
{return this__13186.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13189;
}
})()))
{var new_keys__13191 = cljs.core.aclone.call(null,this__13186.keys);
var new_strobj__13192 = goog.object.clone.call(null,this__13186.strobj);

new_keys__13191.splice(cljs.core.scan_array.call(null,1,k,new_keys__13191),1);
cljs.core.js_delete.call(null,new_strobj__13192,k);
return (new cljs.core.ObjMap(this__13186.meta,new_keys__13191,new_strobj__13192));
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
var this__13284 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13404 = null;
var G__13404__13405 = (function (coll,k){
var this__13287 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13404__13406 = (function (coll,k,not_found){
var this__13289 = this;
var bucket__13292 = (this__13289.hashobj[cljs.core.hash.call(null,k)]);
var i__13293 = (cljs.core.truth_(bucket__13292)?cljs.core.scan_array.call(null,2,k,bucket__13292):null);

if(cljs.core.truth_(i__13293))
{return (bucket__13292[(i__13293 + 1)]);
} else
{return not_found;
}
});
G__13404 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13404__13405.call(this,coll,k);
case  3 :
return G__13404__13406.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13404;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13308 = this;
var h__13309 = cljs.core.hash.call(null,k);
var bucket__13310 = (this__13308.hashobj[h__13309]);

if(cljs.core.truth_(bucket__13310))
{var new_bucket__13313 = cljs.core.aclone.call(null,bucket__13310);
var new_hashobj__13314 = goog.object.clone.call(null,this__13308.hashobj);

(new_hashobj__13314[h__13309] = new_bucket__13313);
var temp__3695__auto____13315 = cljs.core.scan_array.call(null,2,k,new_bucket__13313);

if(cljs.core.truth_(temp__3695__auto____13315))
{var i__13316 = temp__3695__auto____13315;

(new_bucket__13313[(i__13316 + 1)] = v);
return (new cljs.core.HashMap(this__13308.meta,this__13308.count,new_hashobj__13314));
} else
{new_bucket__13313.push(k,v);
return (new cljs.core.HashMap(this__13308.meta,(this__13308.count + 1),new_hashobj__13314));
}
} else
{var new_hashobj__13317 = goog.object.clone.call(null,this__13308.hashobj);

(new_hashobj__13317[h__13309] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13308.meta,(this__13308.count + 1),new_hashobj__13317));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13321 = this;
var bucket__13323 = (this__13321.hashobj[cljs.core.hash.call(null,k)]);
var i__13324 = (cljs.core.truth_(bucket__13323)?cljs.core.scan_array.call(null,2,k,bucket__13323):null);

if(cljs.core.truth_(i__13324))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13425 = null;
var G__13425__13426 = (function (coll,k){
var this__13327 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13425__13428 = (function (coll,k,not_found){
var this__13328 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13425 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13425__13426.call(this,coll,k);
case  3 :
return G__13425__13428.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13425;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13333 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13359 = this;
if(cljs.core.truth_((this__13359.count > 0)))
{var hashes__13363 = cljs.core.js_keys.call(null,this__13359.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13261_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13359.hashobj[p1__13261_SHARP_])));
}),hashes__13363);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13375 = this;
return this__13375.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13376 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13379 = this;
return (new cljs.core.HashMap(meta,this__13379.count,this__13379.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13382 = this;
return this__13382.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13385 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13385.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13387 = this;
var h__13389 = cljs.core.hash.call(null,k);
var bucket__13391 = (this__13387.hashobj[h__13389]);
var i__13392 = (cljs.core.truth_(bucket__13391)?cljs.core.scan_array.call(null,2,k,bucket__13391):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13392)))
{return coll;
} else
{var new_hashobj__13393 = goog.object.clone.call(null,this__13387.hashobj);

if(cljs.core.truth_((3 > bucket__13391.length)))
{cljs.core.js_delete.call(null,new_hashobj__13393,h__13389);
} else
{var new_bucket__13400 = cljs.core.aclone.call(null,bucket__13391);

new_bucket__13400.splice(i__13392,2);
(new_hashobj__13393[h__13389] = new_bucket__13400);
}
return (new cljs.core.HashMap(this__13387.meta,(this__13387.count - 1),new_hashobj__13393));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13461 = ks.length;

var i__13462 = 0;
var out__13463 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13462 < len__13461)))
{{
var G__13468 = (i__13462 + 1);
var G__13470 = cljs.core.assoc.call(null,out__13463,(ks[i__13462]),(vs[i__13462]));
i__13462 = G__13468;
out__13463 = G__13470;
continue;
}
} else
{return out__13463;
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
var in$__13477 = cljs.core.seq.call(null,keyvals);
var out__13478 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13477))
{{
var G__13483 = cljs.core.nnext.call(null,in$__13477);
var G__13484 = cljs.core.assoc.call(null,out__13478,cljs.core.first.call(null,in$__13477),cljs.core.second.call(null,in$__13477));
in$__13477 = G__13483;
out__13478 = G__13484;
continue;
}
} else
{return out__13478;
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
hash_map.cljs$lang$applyTo = (function (arglist__13485){
var keyvals = cljs.core.seq( arglist__13485 );;
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
{return cljs.core.reduce.call(null,(function (p1__13488_SHARP_,p2__13489_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13572 = p1__13488_SHARP_;

if(cljs.core.truth_(or__3548__auto____13572))
{return or__3548__auto____13572;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13489_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13584){
var maps = cljs.core.seq( arglist__13584 );;
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
{var merge_entry__13594 = (function (m,e){
var k__13590 = cljs.core.first.call(null,e);
var v__13591 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13590)))
{return cljs.core.assoc.call(null,m,k__13590,f.call(null,cljs.core.get.call(null,m,k__13590),v__13591));
} else
{return cljs.core.assoc.call(null,m,k__13590,v__13591);
}
});
var merge2__13598 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13594,(function (){var or__3548__auto____13595 = m1;

if(cljs.core.truth_(or__3548__auto____13595))
{return or__3548__auto____13595;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13598,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13606){
var f = cljs.core.first(arglist__13606);
var maps = cljs.core.rest(arglist__13606);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13608 = cljs.core.ObjMap.fromObject([],{});
var keys__13609 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13609))
{var key__13610 = cljs.core.first.call(null,keys__13609);
var entry__13611 = cljs.core.get.call(null,map,key__13610,"﷐'user/not-found");

{
var G__13613 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13611,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13608,key__13610,entry__13611):ret__13608);
var G__13614 = cljs.core.next.call(null,keys__13609);
ret__13608 = G__13613;
keys__13609 = G__13614;
continue;
}
} else
{return ret__13608;
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
var this__13622 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13669 = null;
var G__13669__13687 = (function (coll,v){
var this__13624 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13669__13688 = (function (coll,v,not_found){
var this__13625 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13625.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13669 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13669__13687.call(this,coll,v);
case  3 :
return G__13669__13688.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13669;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13703 = null;
var G__13703__13704 = (function (coll,k){
var this__13627 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13703__13705 = (function (coll,k,not_found){
var this__13629 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13703 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13703__13704.call(this,coll,k);
case  3 :
return G__13703__13705.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13703;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13631 = this;
return (new cljs.core.Set(this__13631.meta,cljs.core.assoc.call(null,this__13631.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13633 = this;
return cljs.core.keys.call(null,this__13633.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13635 = this;
return (new cljs.core.Set(this__13635.meta,cljs.core.dissoc.call(null,this__13635.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13637 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13638 = this;
var and__3546__auto____13640 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13640))
{var and__3546__auto____13642 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13642))
{return cljs.core.every_QMARK_.call(null,(function (p1__13607_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13607_SHARP_);
}),other);
} else
{return and__3546__auto____13642;
}
} else
{return and__3546__auto____13640;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13643 = this;
return (new cljs.core.Set(meta,this__13643.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13644 = this;
return this__13644.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13645 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13645.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13727 = cljs.core.seq.call(null,coll);
var out__13729 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13727))))
{{
var G__13736 = cljs.core.rest.call(null,in$__13727);
var G__13739 = cljs.core.conj.call(null,out__13729,cljs.core.first.call(null,in$__13727));
in$__13727 = G__13736;
out__13729 = G__13739;
continue;
}
} else
{return out__13729;
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
{var n__13741 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13742 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13742))
{var e__13744 = temp__3695__auto____13742;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13744));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13741,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13726_SHARP_){
var temp__3695__auto____13745 = cljs.core.find.call(null,smap,p1__13726_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13745))
{var e__13746 = temp__3695__auto____13745;

return cljs.core.second.call(null,e__13746);
} else
{return p1__13726_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13773 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13764,seen){
while(true){
var vec__13765__13766 = p__13764;
var f__13767 = cljs.core.nth.call(null,vec__13765__13766,0,null);
var xs__13768 = vec__13765__13766;

var temp__3698__auto____13770 = cljs.core.seq.call(null,xs__13768);

if(cljs.core.truth_(temp__3698__auto____13770))
{var s__13772 = temp__3698__auto____13770;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13767)))
{{
var G__13788 = cljs.core.rest.call(null,s__13772);
var G__13789 = seen;
p__13764 = G__13788;
seen = G__13789;
continue;
}
} else
{return cljs.core.cons.call(null,f__13767,step.call(null,cljs.core.rest.call(null,s__13772),cljs.core.conj.call(null,seen,f__13767)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13773.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13797 = cljs.core.Vector.fromArray([]);
var s__13798 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13798)))
{{
var G__13805 = cljs.core.conj.call(null,ret__13797,cljs.core.first.call(null,s__13798));
var G__13807 = cljs.core.next.call(null,s__13798);
ret__13797 = G__13805;
s__13798 = G__13807;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13797);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13812 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13812))
{return or__3548__auto____13812;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13815 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13815 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13815 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13876 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13876))
{return or__3548__auto____13876;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13877 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13877 > -1)))
{return cljs.core.subs.call(null,x,2,i__13877);
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
var map__13889 = cljs.core.ObjMap.fromObject([],{});
var ks__13890 = cljs.core.seq.call(null,keys);
var vs__13891 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13892 = ks__13890;

if(cljs.core.truth_(and__3546__auto____13892))
{return vs__13891;
} else
{return and__3546__auto____13892;
}
})()))
{{
var G__13898 = cljs.core.assoc.call(null,map__13889,cljs.core.first.call(null,ks__13890),cljs.core.first.call(null,vs__13891));
var G__13899 = cljs.core.next.call(null,ks__13890);
var G__13900 = cljs.core.next.call(null,vs__13891);
map__13889 = G__13898;
ks__13890 = G__13899;
vs__13891 = G__13900;
continue;
}
} else
{return map__13889;
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
var max_key__13910 = (function (k,x){
return x;
});
var max_key__13911 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13912 = (function() { 
var G__13956__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13887_SHARP_,p2__13888_SHARP_){
return max_key.call(null,k,p1__13887_SHARP_,p2__13888_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13956 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13956__delegate.call(this, k, x, y, more);
};
G__13956.cljs$lang$maxFixedArity = 3;
G__13956.cljs$lang$applyTo = (function (arglist__13958){
var k = cljs.core.first(arglist__13958);
var x = cljs.core.first(cljs.core.next(arglist__13958));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13958)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13958)));
return G__13956__delegate.call(this, k, x, y, more);
});
return G__13956;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13910.call(this,k,x);
case  3 :
return max_key__13911.call(this,k,x,y);
default:
return max_key__13912.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13912.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13972 = (function (k,x){
return x;
});
var min_key__13973 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13974 = (function() { 
var G__13979__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13908_SHARP_,p2__13909_SHARP_){
return min_key.call(null,k,p1__13908_SHARP_,p2__13909_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13979 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13979__delegate.call(this, k, x, y, more);
};
G__13979.cljs$lang$maxFixedArity = 3;
G__13979.cljs$lang$applyTo = (function (arglist__13982){
var k = cljs.core.first(arglist__13982);
var x = cljs.core.first(cljs.core.next(arglist__13982));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13982)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13982)));
return G__13979__delegate.call(this, k, x, y, more);
});
return G__13979;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13972.call(this,k,x);
case  3 :
return min_key__13973.call(this,k,x,y);
default:
return min_key__13974.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13974.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13986 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13987 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13983 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13983))
{var s__13985 = temp__3698__auto____13983;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13985),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13985)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13986.call(this,n,step);
case  3 :
return partition_all__13987.call(this,n,step,coll);
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
var temp__3698__auto____14008 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14008))
{var s__14010 = temp__3698__auto____14008;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__14010))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__14010),take_while.call(null,pred,cljs.core.rest.call(null,s__14010)));
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
var this__14022 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__14024 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__14066 = null;
var G__14066__14067 = (function (rng,f){
var this__14025 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__14066__14068 = (function (rng,f,s){
var this__14026 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__14066 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__14066__14067.call(this,rng,f);
case  3 :
return G__14066__14068.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14066;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__14027 = this;
var comp__14029 = (cljs.core.truth_((this__14027.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__14029.call(null,this__14027.start,this__14027.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__14030 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__14030.end - this__14030.start) / this__14030.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__14031 = this;
return this__14031.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__14033 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__14033.meta,(this__14033.start + this__14033.step),this__14033.end,this__14033.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__14038 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__14042 = this;
return (new cljs.core.Range(meta,this__14042.start,this__14042.end,this__14042.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__14045 = this;
return this__14045.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14085 = null;
var G__14085__14086 = (function (rng,n){
var this__14048 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14048.start + (n * this__14048.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14050 = (this__14048.start > this__14048.end);

if(cljs.core.truth_(and__3546__auto____14050))
{return cljs.core._EQ_.call(null,this__14048.step,0);
} else
{return and__3546__auto____14050;
}
})()))
{return this__14048.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14085__14087 = (function (rng,n,not_found){
var this__14051 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14051.start + (n * this__14051.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14052 = (this__14051.start > this__14051.end);

if(cljs.core.truth_(and__3546__auto____14052))
{return cljs.core._EQ_.call(null,this__14051.step,0);
} else
{return and__3546__auto____14052;
}
})()))
{return this__14051.start;
} else
{return not_found;
}
}
});
G__14085 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14085__14086.call(this,rng,n);
case  3 :
return G__14085__14087.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14085;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__14053 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14053.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14116 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14118 = (function (end){
return range.call(null,0,end,1);
});
var range__14119 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14120 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14116.call(this);
case  1 :
return range__14118.call(this,start);
case  2 :
return range__14119.call(this,start,end);
case  3 :
return range__14120.call(this,start,end,step);
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
var temp__3698__auto____14142 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14142))
{var s__14144 = temp__3698__auto____14142;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14144),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14144)));
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
var temp__3698__auto____14159 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14159))
{var s__14161 = temp__3698__auto____14159;

var fst__14162 = cljs.core.first.call(null,s__14161);
var fv__14163 = f.call(null,fst__14162);
var run__14169 = cljs.core.cons.call(null,fst__14162,cljs.core.take_while.call(null,(function (p1__14151_SHARP_){
return cljs.core._EQ_.call(null,fv__14163,f.call(null,p1__14151_SHARP_));
}),cljs.core.next.call(null,s__14161)));

return cljs.core.cons.call(null,run__14169,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14169),s__14161))));
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
var reductions__14216 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14199 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14199))
{var s__14203 = temp__3695__auto____14199;

return reductions.call(null,f,cljs.core.first.call(null,s__14203),cljs.core.rest.call(null,s__14203));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14217 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14208 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14208))
{var s__14211 = temp__3698__auto____14208;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14211)),cljs.core.rest.call(null,s__14211));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14216.call(this,f,init);
case  3 :
return reductions__14217.call(this,f,init,coll);
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
var juxt__14266 = (function (f){
return (function() {
var G__14272 = null;
var G__14272__14275 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14272__14276 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14272__14277 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14272__14278 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14272__14279 = (function() { 
var G__14285__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14285 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14285__delegate.call(this, x, y, z, args);
};
G__14285.cljs$lang$maxFixedArity = 3;
G__14285.cljs$lang$applyTo = (function (arglist__14288){
var x = cljs.core.first(arglist__14288);
var y = cljs.core.first(cljs.core.next(arglist__14288));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14288)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14288)));
return G__14285__delegate.call(this, x, y, z, args);
});
return G__14285;
})()
;
G__14272 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14272__14275.call(this);
case  1 :
return G__14272__14276.call(this,x);
case  2 :
return G__14272__14277.call(this,x,y);
case  3 :
return G__14272__14278.call(this,x,y,z);
default:
return G__14272__14279.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14272.cljs$lang$maxFixedArity = 3;
G__14272.cljs$lang$applyTo = G__14272__14279.cljs$lang$applyTo;
return G__14272;
})()
});
var juxt__14267 = (function (f,g){
return (function() {
var G__14296 = null;
var G__14296__14298 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14296__14299 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14296__14300 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14296__14301 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14296__14302 = (function() { 
var G__14310__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14310 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14310__delegate.call(this, x, y, z, args);
};
G__14310.cljs$lang$maxFixedArity = 3;
G__14310.cljs$lang$applyTo = (function (arglist__14313){
var x = cljs.core.first(arglist__14313);
var y = cljs.core.first(cljs.core.next(arglist__14313));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14313)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14313)));
return G__14310__delegate.call(this, x, y, z, args);
});
return G__14310;
})()
;
G__14296 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14296__14298.call(this);
case  1 :
return G__14296__14299.call(this,x);
case  2 :
return G__14296__14300.call(this,x,y);
case  3 :
return G__14296__14301.call(this,x,y,z);
default:
return G__14296__14302.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14296.cljs$lang$maxFixedArity = 3;
G__14296.cljs$lang$applyTo = G__14296__14302.cljs$lang$applyTo;
return G__14296;
})()
});
var juxt__14268 = (function (f,g,h){
return (function() {
var G__14317 = null;
var G__14317__14318 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14317__14319 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14317__14320 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14317__14321 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14317__14322 = (function() { 
var G__14329__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14329 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14329__delegate.call(this, x, y, z, args);
};
G__14329.cljs$lang$maxFixedArity = 3;
G__14329.cljs$lang$applyTo = (function (arglist__14331){
var x = cljs.core.first(arglist__14331);
var y = cljs.core.first(cljs.core.next(arglist__14331));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14331)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14331)));
return G__14329__delegate.call(this, x, y, z, args);
});
return G__14329;
})()
;
G__14317 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14317__14318.call(this);
case  1 :
return G__14317__14319.call(this,x);
case  2 :
return G__14317__14320.call(this,x,y);
case  3 :
return G__14317__14321.call(this,x,y,z);
default:
return G__14317__14322.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14317.cljs$lang$maxFixedArity = 3;
G__14317.cljs$lang$applyTo = G__14317__14322.cljs$lang$applyTo;
return G__14317;
})()
});
var juxt__14269 = (function() { 
var G__14332__delegate = function (f,g,h,fs){
var fs__14237 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14334 = null;
var G__14334__14335 = (function (){
return cljs.core.reduce.call(null,(function (p1__14183_SHARP_,p2__14184_SHARP_){
return cljs.core.conj.call(null,p1__14183_SHARP_,p2__14184_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14237);
});
var G__14334__14336 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14185_SHARP_,p2__14186_SHARP_){
return cljs.core.conj.call(null,p1__14185_SHARP_,p2__14186_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14237);
});
var G__14334__14337 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14187_SHARP_,p2__14188_SHARP_){
return cljs.core.conj.call(null,p1__14187_SHARP_,p2__14188_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14237);
});
var G__14334__14338 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14189_SHARP_,p2__14190_SHARP_){
return cljs.core.conj.call(null,p1__14189_SHARP_,p2__14190_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14237);
});
var G__14334__14340 = (function() { 
var G__14343__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14191_SHARP_,p2__14192_SHARP_){
return cljs.core.conj.call(null,p1__14191_SHARP_,cljs.core.apply.call(null,p2__14192_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14237);
};
var G__14343 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14343__delegate.call(this, x, y, z, args);
};
G__14343.cljs$lang$maxFixedArity = 3;
G__14343.cljs$lang$applyTo = (function (arglist__14345){
var x = cljs.core.first(arglist__14345);
var y = cljs.core.first(cljs.core.next(arglist__14345));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14345)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14345)));
return G__14343__delegate.call(this, x, y, z, args);
});
return G__14343;
})()
;
G__14334 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14334__14335.call(this);
case  1 :
return G__14334__14336.call(this,x);
case  2 :
return G__14334__14337.call(this,x,y);
case  3 :
return G__14334__14338.call(this,x,y,z);
default:
return G__14334__14340.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14334.cljs$lang$maxFixedArity = 3;
G__14334.cljs$lang$applyTo = G__14334__14340.cljs$lang$applyTo;
return G__14334;
})()
};
var G__14332 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14332__delegate.call(this, f, g, h, fs);
};
G__14332.cljs$lang$maxFixedArity = 3;
G__14332.cljs$lang$applyTo = (function (arglist__14350){
var f = cljs.core.first(arglist__14350);
var g = cljs.core.first(cljs.core.next(arglist__14350));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14350)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14350)));
return G__14332__delegate.call(this, f, g, h, fs);
});
return G__14332;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14266.call(this,f);
case  2 :
return juxt__14267.call(this,f,g);
case  3 :
return juxt__14268.call(this,f,g,h);
default:
return juxt__14269.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14269.cljs$lang$applyTo;
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
var dorun__14360 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14453 = cljs.core.next.call(null,coll);
coll = G__14453;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14361 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14358 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14358))
{return (n > 0);
} else
{return and__3546__auto____14358;
}
})()))
{{
var G__14454 = (n - 1);
var G__14455 = cljs.core.next.call(null,coll);
n = G__14454;
coll = G__14455;
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
return dorun__14360.call(this,n);
case  2 :
return dorun__14361.call(this,n,coll);
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
var doall__14458 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14460 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14458.call(this,n);
case  2 :
return doall__14460.call(this,n,coll);
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
var matches__14467 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14467),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14467),1)))
{return cljs.core.first.call(null,matches__14467);
} else
{return cljs.core.vec.call(null,matches__14467);
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
var matches__14492 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14492)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14492),1)))
{return cljs.core.first.call(null,matches__14492);
} else
{return cljs.core.vec.call(null,matches__14492);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14500 = cljs.core.re_find.call(null,re,s);
var match_idx__14502 = s.search(re);
var match_str__14504 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14500))?cljs.core.first.call(null,match_data__14500):match_data__14500);
var post_match__14505 = cljs.core.subs.call(null,s,(match_idx__14502 + cljs.core.count.call(null,match_str__14504)));

if(cljs.core.truth_(match_data__14500))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14500,re_seq.call(null,re,post_match__14505));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14508_SHARP_){
return print_one.call(null,p1__14508_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14516 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14516))
{var and__3546__auto____14581 = (function (){var x__445__auto____14558 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14559 = x__445__auto____14558;

if(cljs.core.truth_(and__3546__auto____14559))
{var and__3546__auto____14560 = x__445__auto____14558.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14560))
{return cljs.core.not.call(null,x__445__auto____14558.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14560;
}
} else
{return and__3546__auto____14559;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14558);
}
})();

if(cljs.core.truth_(and__3546__auto____14581))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14581;
}
} else
{return and__3546__auto____14516;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14582 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14583 = x__445__auto____14582;

if(cljs.core.truth_(and__3546__auto____14583))
{var and__3546__auto____14584 = x__445__auto____14582.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14584))
{return cljs.core.not.call(null,x__445__auto____14582.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14584;
}
} else
{return and__3546__auto____14583;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14582);
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
var first_obj__14603 = cljs.core.first.call(null,objs);
var sb__14604 = (new goog.string.StringBuffer());

var G__14605__14627 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14605__14627))
{var obj__14629 = cljs.core.first.call(null,G__14605__14627);
var G__14605__14630 = G__14605__14627;

while(true){
if(cljs.core.truth_((obj__14629 === first_obj__14603)))
{} else
{sb__14604.append(" ");
}
var G__14631__14632 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14629,opts));

if(cljs.core.truth_(G__14631__14632))
{var string__14636 = cljs.core.first.call(null,G__14631__14632);
var G__14631__14637 = G__14631__14632;

while(true){
sb__14604.append(string__14636);
var temp__3698__auto____14639 = cljs.core.next.call(null,G__14631__14637);

if(cljs.core.truth_(temp__3698__auto____14639))
{var G__14631__14640 = temp__3698__auto____14639;

{
var G__14716 = cljs.core.first.call(null,G__14631__14640);
var G__14717 = G__14631__14640;
string__14636 = G__14716;
G__14631__14637 = G__14717;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14644 = cljs.core.next.call(null,G__14605__14630);

if(cljs.core.truth_(temp__3698__auto____14644))
{var G__14605__14645 = temp__3698__auto____14644;

{
var G__14718 = cljs.core.first.call(null,G__14605__14645);
var G__14719 = G__14605__14645;
obj__14629 = G__14718;
G__14605__14630 = G__14719;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14604);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14721 = cljs.core.first.call(null,objs);

var G__14722__14723 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14722__14723))
{var obj__14724 = cljs.core.first.call(null,G__14722__14723);
var G__14722__14725 = G__14722__14723;

while(true){
if(cljs.core.truth_((obj__14724 === first_obj__14721)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14726__14727 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14724,opts));

if(cljs.core.truth_(G__14726__14727))
{var string__14728 = cljs.core.first.call(null,G__14726__14727);
var G__14726__14729 = G__14726__14727;

while(true){
cljs.core.string_print.call(null,string__14728);
var temp__3698__auto____14730 = cljs.core.next.call(null,G__14726__14729);

if(cljs.core.truth_(temp__3698__auto____14730))
{var G__14726__14731 = temp__3698__auto____14730;

{
var G__14738 = cljs.core.first.call(null,G__14726__14731);
var G__14739 = G__14726__14731;
string__14728 = G__14738;
G__14726__14729 = G__14739;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14732 = cljs.core.next.call(null,G__14722__14725);

if(cljs.core.truth_(temp__3698__auto____14732))
{var G__14722__14734 = temp__3698__auto____14732;

{
var G__14740 = cljs.core.first.call(null,G__14722__14734);
var G__14741 = G__14722__14734;
obj__14724 = G__14740;
G__14722__14725 = G__14741;
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
pr_str.cljs$lang$applyTo = (function (arglist__14749){
var objs = cljs.core.seq( arglist__14749 );;
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
pr.cljs$lang$applyTo = (function (arglist__14755){
var objs = cljs.core.seq( arglist__14755 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14757){
var objs = cljs.core.seq( arglist__14757 );;
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
println.cljs$lang$applyTo = (function (arglist__14758){
var objs = cljs.core.seq( arglist__14758 );;
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
prn.cljs$lang$applyTo = (function (arglist__14805){
var objs = cljs.core.seq( arglist__14805 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14814 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14814,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14816 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14816))
{var nspc__14817 = temp__3698__auto____14816;

return cljs.core.str.call(null,nspc__14817,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14819 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14819))
{var nspc__14820 = temp__3698__auto____14819;

return cljs.core.str.call(null,nspc__14820,"/");
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
var pr_pair__14834 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14834,"{",", ","}",opts,coll);
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
var this__14868 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14873 = this;
var G__14874__14875 = cljs.core.seq.call(null,this__14873.watches);

if(cljs.core.truth_(G__14874__14875))
{var G__14877__14880 = cljs.core.first.call(null,G__14874__14875);
var vec__14879__14881 = G__14877__14880;
var key__14882 = cljs.core.nth.call(null,vec__14879__14881,0,null);
var f__14883 = cljs.core.nth.call(null,vec__14879__14881,1,null);
var G__14874__14884 = G__14874__14875;

var G__14877__14885 = G__14877__14880;
var G__14874__14886 = G__14874__14884;

while(true){
var vec__14887__14888 = G__14877__14885;
var key__14889 = cljs.core.nth.call(null,vec__14887__14888,0,null);
var f__14890 = cljs.core.nth.call(null,vec__14887__14888,1,null);
var G__14874__14891 = G__14874__14886;

f__14890.call(null,key__14889,this$,oldval,newval);
var temp__3698__auto____14894 = cljs.core.next.call(null,G__14874__14891);

if(cljs.core.truth_(temp__3698__auto____14894))
{var G__14874__14895 = temp__3698__auto____14894;

{
var G__14927 = cljs.core.first.call(null,G__14874__14895);
var G__14928 = G__14874__14895;
G__14877__14885 = G__14927;
G__14874__14886 = G__14928;
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
var this__14899 = this;
return this$.watches = cljs.core.assoc.call(null,this__14899.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14906 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14906.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14909 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14909.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14913 = this;
return this__14913.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14916 = this;
return this__14916.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14918 = this;
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
var atom__14950 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14951 = (function() { 
var G__14953__delegate = function (x,p__14940){
var map__14941__14942 = p__14940;
var map__14941__14943 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14941__14942))?cljs.core.apply.call(null,cljs.core.hash_map,map__14941__14942):map__14941__14942);
var validator__14944 = cljs.core.get.call(null,map__14941__14943,"﷐'validator");
var meta__14945 = cljs.core.get.call(null,map__14941__14943,"﷐'meta");

return (new cljs.core.Atom(x,meta__14945,validator__14944,null));
};
var G__14953 = function (x,var_args){
var p__14940 = null;
if (goog.isDef(var_args)) {
  p__14940 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14953__delegate.call(this, x, p__14940);
};
G__14953.cljs$lang$maxFixedArity = 1;
G__14953.cljs$lang$applyTo = (function (arglist__14954){
var x = cljs.core.first(arglist__14954);
var p__14940 = cljs.core.rest(arglist__14954);
return G__14953__delegate.call(this, x, p__14940);
});
return G__14953;
})()
;
atom = function(x,var_args){
var p__14940 = var_args;
switch(arguments.length){
case  1 :
return atom__14950.call(this,x);
default:
return atom__14951.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14951.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14958 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14958))
{var validate__14959 = temp__3698__auto____14958;

if(cljs.core.truth_(validate__14959.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14962 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14962,new_value);
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
var swap_BANG___14983 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14984 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14985 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14986 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14987 = (function() { 
var G__14991__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14991 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14991__delegate.call(this, a, f, x, y, z, more);
};
G__14991.cljs$lang$maxFixedArity = 5;
G__14991.cljs$lang$applyTo = (function (arglist__14992){
var a = cljs.core.first(arglist__14992);
var f = cljs.core.first(cljs.core.next(arglist__14992));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14992)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14992))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14992)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14992)))));
return G__14991__delegate.call(this, a, f, x, y, z, more);
});
return G__14991;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14983.call(this,a,f);
case  3 :
return swap_BANG___14984.call(this,a,f,x);
case  4 :
return swap_BANG___14985.call(this,a,f,x,y);
case  5 :
return swap_BANG___14986.call(this,a,f,x,y,z);
default:
return swap_BANG___14987.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14987.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15026){
var iref = cljs.core.first(arglist__15026);
var f = cljs.core.first(cljs.core.next(arglist__15026));
var args = cljs.core.rest(cljs.core.next(arglist__15026));
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
var gensym__15042 = (function (){
return gensym.call(null,"G__");
});
var gensym__15043 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__15042.call(this);
case  1 :
return gensym__15043.call(this,prefix_string);
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
var this__15053 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__15053.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15123 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__15123.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__15123.state,this__15123.f);
}
return cljs.core.deref.call(null,this__15123.state);
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
delay.cljs$lang$applyTo = (function (arglist__15189){
var body = cljs.core.seq( arglist__15189 );;
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
var map__15249__15250 = options;
var map__15249__15251 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15249__15250))?cljs.core.apply.call(null,cljs.core.hash_map,map__15249__15250):map__15249__15250);
var keywordize_keys__15252 = cljs.core.get.call(null,map__15249__15251,"﷐'keywordize-keys");
var keyfn__15253 = (cljs.core.truth_(keywordize_keys__15252)?cljs.core.keyword:cljs.core.str);
var f__15276 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15274 = (function iter__15257(s__15258){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15258__15260 = s__15258;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15258__15260)))
{var k__15273 = cljs.core.first.call(null,s__15258__15260);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15253.call(null,k__15273),thisfn.call(null,(x[k__15273]))]),iter__15257.call(null,cljs.core.rest.call(null,s__15258__15260)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15274.call(null,cljs.core.js_keys.call(null,x));
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

return f__15276.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15282){
var x = cljs.core.first(arglist__15282);
var options = cljs.core.rest(arglist__15282);
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
var mem__15285 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15293__delegate = function (args){
var temp__3695__auto____15286 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15285),args);

if(cljs.core.truth_(temp__3695__auto____15286))
{var v__15288 = temp__3695__auto____15286;

return v__15288;
} else
{var ret__15289 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15285,cljs.core.assoc,args,ret__15289);
return ret__15289;
}
};
var G__15293 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15293__delegate.call(this, args);
};
G__15293.cljs$lang$maxFixedArity = 0;
G__15293.cljs$lang$applyTo = (function (arglist__15295){
var args = cljs.core.seq( arglist__15295 );;
return G__15293__delegate.call(this, args);
});
return G__15293;
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
var trampoline__15300 = (function (f){
while(true){
var ret__15296 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15296)))
{{
var G__15304 = ret__15296;
f = G__15304;
continue;
}
} else
{return ret__15296;
}
break;
}
});
var trampoline__15301 = (function() { 
var G__15305__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15305 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15305__delegate.call(this, f, args);
};
G__15305.cljs$lang$maxFixedArity = 1;
G__15305.cljs$lang$applyTo = (function (arglist__15308){
var f = cljs.core.first(arglist__15308);
var args = cljs.core.rest(arglist__15308);
return G__15305__delegate.call(this, f, args);
});
return G__15305;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15300.call(this,f);
default:
return trampoline__15301.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15301.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15320 = (function (){
return rand.call(null,1);
});
var rand__15321 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15320.call(this);
case  1 :
return rand__15321.call(this,n);
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
var k__15338 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15338,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15338,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15363 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15365 = (function (h,child,parent){
var or__3548__auto____15348 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15348))
{return or__3548__auto____15348;
} else
{var or__3548__auto____15351 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15351))
{return or__3548__auto____15351;
} else
{var and__3546__auto____15352 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15352))
{var and__3546__auto____15355 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15355))
{var and__3546__auto____15356 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15356))
{var ret__15357 = true;
var i__15358 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15359 = cljs.core.not.call(null,ret__15357);

if(cljs.core.truth_(or__3548__auto____15359))
{return or__3548__auto____15359;
} else
{return cljs.core._EQ_.call(null,i__15358,cljs.core.count.call(null,parent));
}
})()))
{return ret__15357;
} else
{{
var G__15374 = isa_QMARK_.call(null,h,child.call(null,i__15358),parent.call(null,i__15358));
var G__15375 = (i__15358 + 1);
ret__15357 = G__15374;
i__15358 = G__15375;
continue;
}
}
break;
}
} else
{return and__3546__auto____15356;
}
} else
{return and__3546__auto____15355;
}
} else
{return and__3546__auto____15352;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15363.call(this,h,child);
case  3 :
return isa_QMARK___15365.call(this,h,child,parent);
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
var parents__15381 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15382 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15381.call(this,h);
case  2 :
return parents__15382.call(this,h,tag);
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
var ancestors__15420 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15421 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15420.call(this,h);
case  2 :
return ancestors__15421.call(this,h,tag);
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
var descendants__15435 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15436 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15435.call(this,h);
case  2 :
return descendants__15436.call(this,h,tag);
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
var derive__15450 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15451 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15441 = "﷐'parents".call(null,h);
var td__15442 = "﷐'descendants".call(null,h);
var ta__15443 = "﷐'ancestors".call(null,h);
var tf__15444 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15448 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15441.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15443.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15443.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15441,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15444.call(null,"﷐'ancestors".call(null,h),tag,td__15442,parent,ta__15443),"﷐'descendants":tf__15444.call(null,"﷐'descendants".call(null,h),parent,ta__15443,tag,td__15442)});
})());

if(cljs.core.truth_(or__3548__auto____15448))
{return or__3548__auto____15448;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15450.call(this,h,tag);
case  3 :
return derive__15451.call(this,h,tag,parent);
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
var underive__15481 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15482 = (function (h,tag,parent){
var parentMap__15464 = "﷐'parents".call(null,h);
var childsParents__15465 = (cljs.core.truth_(parentMap__15464.call(null,tag))?cljs.core.disj.call(null,parentMap__15464.call(null,tag),parent):cljs.core.set([]));
var newParents__15466 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15465))?cljs.core.assoc.call(null,parentMap__15464,tag,childsParents__15465):cljs.core.dissoc.call(null,parentMap__15464,tag));
var deriv_seq__15468 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15438_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15438_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15438_SHARP_),cljs.core.second.call(null,p1__15438_SHARP_)));
}),cljs.core.seq.call(null,newParents__15466)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15464.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15439_SHARP_,p2__15440_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15439_SHARP_,p2__15440_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15468));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15481.call(this,h,tag);
case  3 :
return underive__15482.call(this,h,tag,parent);
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
var xprefs__15506 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15508 = (cljs.core.truth_((function (){var and__3546__auto____15507 = xprefs__15506;

if(cljs.core.truth_(and__3546__auto____15507))
{return xprefs__15506.call(null,y);
} else
{return and__3546__auto____15507;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15508))
{return or__3548__auto____15508;
} else
{var or__3548__auto____15513 = (function (){var ps__15510 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15510) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15510),prefer_table)))
{} else
{}
{
var G__15524 = cljs.core.rest.call(null,ps__15510);
ps__15510 = G__15524;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15513))
{return or__3548__auto____15513;
} else
{var or__3548__auto____15518 = (function (){var ps__15515 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15515) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15515),y,prefer_table)))
{} else
{}
{
var G__15525 = cljs.core.rest.call(null,ps__15515);
ps__15515 = G__15525;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15518))
{return or__3548__auto____15518;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15529 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15529))
{return or__3548__auto____15529;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15562 = cljs.core.reduce.call(null,(function (be,p__15541){
var vec__15543__15545 = p__15541;
var k__15546 = cljs.core.nth.call(null,vec__15543__15545,0,null);
var ___15548 = cljs.core.nth.call(null,vec__15543__15545,1,null);
var e__15549 = vec__15543__15545;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15546)))
{var be2__15559 = (cljs.core.truth_((function (){var or__3548__auto____15550 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15550))
{return or__3548__auto____15550;
} else
{return cljs.core.dominates.call(null,k__15546,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15549:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15559),k__15546,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15546," and ",cljs.core.first.call(null,be2__15559),", and neither is preferred")));
}
return be2__15559;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15562))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15562));
return cljs.core.second.call(null,best_entry__15562);
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
if(cljs.core.truth_((function (){var and__3546__auto____15576 = mf;

if(cljs.core.truth_(and__3546__auto____15576))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15576;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15577 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15577))
{return or__3548__auto____15577;
} else
{var or__3548__auto____15620 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15620))
{return or__3548__auto____15620;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15623 = mf;

if(cljs.core.truth_(and__3546__auto____15623))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15623;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15624 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15624))
{return or__3548__auto____15624;
} else
{var or__3548__auto____15625 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15625))
{return or__3548__auto____15625;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15626 = mf;

if(cljs.core.truth_(and__3546__auto____15626))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15626;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15627 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15627))
{return or__3548__auto____15627;
} else
{var or__3548__auto____15628 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15628))
{return or__3548__auto____15628;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15629 = mf;

if(cljs.core.truth_(and__3546__auto____15629))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15629;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15630 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15630))
{return or__3548__auto____15630;
} else
{var or__3548__auto____15631 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15631))
{return or__3548__auto____15631;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15632 = mf;

if(cljs.core.truth_(and__3546__auto____15632))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15632;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15633 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15633))
{return or__3548__auto____15633;
} else
{var or__3548__auto____15634 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15634))
{return or__3548__auto____15634;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15637 = mf;

if(cljs.core.truth_(and__3546__auto____15637))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15637;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15638 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15638))
{return or__3548__auto____15638;
} else
{var or__3548__auto____15639 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15639))
{return or__3548__auto____15639;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15640 = mf;

if(cljs.core.truth_(and__3546__auto____15640))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15640;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15641 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15641))
{return or__3548__auto____15641;
} else
{var or__3548__auto____15642 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15642))
{return or__3548__auto____15642;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15644 = mf;

if(cljs.core.truth_(and__3546__auto____15644))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15644;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15645 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15645))
{return or__3548__auto____15645;
} else
{var or__3548__auto____15646 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15646))
{return or__3548__auto____15646;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15661 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15662 = cljs.core._get_method.call(null,mf,dispatch_val__15661);

if(cljs.core.truth_(target_fn__15662))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15661)));
}
return cljs.core.apply.call(null,target_fn__15662,args);
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
var this__15663 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15665 = this;
cljs.core.swap_BANG_.call(null,this__15665.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15665.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15665.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15665.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15667 = this;
cljs.core.swap_BANG_.call(null,this__15667.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15667.method_cache,this__15667.method_table,this__15667.cached_hierarchy,this__15667.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15668 = this;
cljs.core.swap_BANG_.call(null,this__15668.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15668.method_cache,this__15668.method_table,this__15668.cached_hierarchy,this__15668.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15669 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15669.cached_hierarchy),cljs.core.deref.call(null,this__15669.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15669.method_cache,this__15669.method_table,this__15669.cached_hierarchy,this__15669.hierarchy);
}
var temp__3695__auto____15670 = cljs.core.deref.call(null,this__15669.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15670))
{var target_fn__15671 = temp__3695__auto____15670;

return target_fn__15671;
} else
{var temp__3695__auto____15672 = cljs.core.find_and_cache_best_method.call(null,this__15669.name,dispatch_val,this__15669.hierarchy,this__15669.method_table,this__15669.prefer_table,this__15669.method_cache,this__15669.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15672))
{var target_fn__15673 = temp__3695__auto____15672;

return target_fn__15673;
} else
{return cljs.core.deref.call(null,this__15669.method_table).call(null,this__15669.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15674 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15674.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15674.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15674.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15674.method_cache,this__15674.method_table,this__15674.cached_hierarchy,this__15674.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15678 = this;
return cljs.core.deref.call(null,this__15678.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15680 = this;
return cljs.core.deref.call(null,this__15680.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15682 = this;
return cljs.core.do_dispatch.call(null,mf,this__15682.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15689__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15689 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15689__delegate.call(this, _, args);
};
G__15689.cljs$lang$maxFixedArity = 1;
G__15689.cljs$lang$applyTo = (function (arglist__15691){
var _ = cljs.core.first(arglist__15691);
var args = cljs.core.rest(arglist__15691);
return G__15689__delegate.call(this, _, args);
});
return G__15689;
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
