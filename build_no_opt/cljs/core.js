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
var or__3548__auto____7257 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7257))
{return or__3548__auto____7257;
} else
{var or__3548__auto____7258 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7258))
{return or__3548__auto____7258;
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
var _invoke__7664 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7261 = this$;

if(cljs.core.truth_(and__3546__auto____7261))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7261;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7262 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7262))
{return or__3548__auto____7262;
} else
{var or__3548__auto____7263 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7263))
{return or__3548__auto____7263;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7665 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7266 = this$;

if(cljs.core.truth_(and__3546__auto____7266))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7266;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7268 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7268))
{return or__3548__auto____7268;
} else
{var or__3548__auto____7271 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7271))
{return or__3548__auto____7271;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7666 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7329 = this$;

if(cljs.core.truth_(and__3546__auto____7329))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7329;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7332 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7332))
{return or__3548__auto____7332;
} else
{var or__3548__auto____7335 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7335))
{return or__3548__auto____7335;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7667 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7338 = this$;

if(cljs.core.truth_(and__3546__auto____7338))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7338;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7341 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7341))
{return or__3548__auto____7341;
} else
{var or__3548__auto____7343 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7343))
{return or__3548__auto____7343;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7668 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7348 = this$;

if(cljs.core.truth_(and__3546__auto____7348))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7348;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7351 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7351))
{return or__3548__auto____7351;
} else
{var or__3548__auto____7353 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7353))
{return or__3548__auto____7353;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7669 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7357 = this$;

if(cljs.core.truth_(and__3546__auto____7357))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7357;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7375 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7375))
{return or__3548__auto____7375;
} else
{var or__3548__auto____7378 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7378))
{return or__3548__auto____7378;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7670 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7382 = this$;

if(cljs.core.truth_(and__3546__auto____7382))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7382;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7387 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7387))
{return or__3548__auto____7387;
} else
{var or__3548__auto____7390 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7390))
{return or__3548__auto____7390;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7671 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7393 = this$;

if(cljs.core.truth_(and__3546__auto____7393))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7393;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7398 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7398))
{return or__3548__auto____7398;
} else
{var or__3548__auto____7401 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7401))
{return or__3548__auto____7401;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7672 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7406 = this$;

if(cljs.core.truth_(and__3546__auto____7406))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7406;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7410 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7410))
{return or__3548__auto____7410;
} else
{var or__3548__auto____7413 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7413))
{return or__3548__auto____7413;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7673 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7418 = this$;

if(cljs.core.truth_(and__3546__auto____7418))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7418;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7469 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7469))
{return or__3548__auto____7469;
} else
{var or__3548__auto____7471 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7471))
{return or__3548__auto____7471;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7674 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7474 = this$;

if(cljs.core.truth_(and__3546__auto____7474))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7474;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7675 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7487 = this$;

if(cljs.core.truth_(and__3546__auto____7487))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7487;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7490 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7490))
{return or__3548__auto____7490;
} else
{var or__3548__auto____7492 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7492))
{return or__3548__auto____7492;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7676 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7592 = this$;

if(cljs.core.truth_(and__3546__auto____7592))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7592;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7677 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7598 = this$;

if(cljs.core.truth_(and__3546__auto____7598))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7598;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7678 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7604 = this$;

if(cljs.core.truth_(and__3546__auto____7604))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7604;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7607 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7607))
{return or__3548__auto____7607;
} else
{var or__3548__auto____7608 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7608))
{return or__3548__auto____7608;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7679 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7610 = this$;

if(cljs.core.truth_(and__3546__auto____7610))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7610;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7613 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7613))
{return or__3548__auto____7613;
} else
{var or__3548__auto____7614 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7614))
{return or__3548__auto____7614;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7680 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7616 = this$;

if(cljs.core.truth_(and__3546__auto____7616))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7616;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7619 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7619))
{return or__3548__auto____7619;
} else
{var or__3548__auto____7620 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7620))
{return or__3548__auto____7620;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7681 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7622 = this$;

if(cljs.core.truth_(and__3546__auto____7622))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7622;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7682 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7628 = this$;

if(cljs.core.truth_(and__3546__auto____7628))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7628;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7683 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7634 = this$;

if(cljs.core.truth_(and__3546__auto____7634))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7634;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7684 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7639 = this$;

if(cljs.core.truth_(and__3546__auto____7639))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7639;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7662 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7662))
{return or__3548__auto____7662;
} else
{var or__3548__auto____7663 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7663))
{return or__3548__auto____7663;
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
return _invoke__7664.call(this,this$);
case  2 :
return _invoke__7665.call(this,this$,a);
case  3 :
return _invoke__7666.call(this,this$,a,b);
case  4 :
return _invoke__7667.call(this,this$,a,b,c);
case  5 :
return _invoke__7668.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7669.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7670.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7671.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7672.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7673.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7674.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7675.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7676.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7677.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7678.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7679.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7680.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7681.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7682.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7683.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7684.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7723 = coll;

if(cljs.core.truth_(and__3546__auto____7723))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7723;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7788 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7788))
{return or__3548__auto____7788;
} else
{var or__3548__auto____7789 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7789))
{return or__3548__auto____7789;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7795 = coll;

if(cljs.core.truth_(and__3546__auto____7795))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7795;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7796 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7796))
{return or__3548__auto____7796;
} else
{var or__3548__auto____7797 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7797))
{return or__3548__auto____7797;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7804 = coll;

if(cljs.core.truth_(and__3546__auto____7804))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7804;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7806 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7806))
{return or__3548__auto____7806;
} else
{var or__3548__auto____7808 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7808))
{return or__3548__auto____7808;
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
var _nth__7836 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7813 = coll;

if(cljs.core.truth_(and__3546__auto____7813))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7813;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7814 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7814))
{return or__3548__auto____7814;
} else
{var or__3548__auto____7815 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7815))
{return or__3548__auto____7815;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7837 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7831 = coll;

if(cljs.core.truth_(and__3546__auto____7831))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7831;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7833 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7833))
{return or__3548__auto____7833;
} else
{var or__3548__auto____7835 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7835))
{return or__3548__auto____7835;
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
return _nth__7836.call(this,coll,n);
case  3 :
return _nth__7837.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7883 = coll;

if(cljs.core.truth_(and__3546__auto____7883))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7883;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7885 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7885))
{return or__3548__auto____7885;
} else
{var or__3548__auto____7886 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7886))
{return or__3548__auto____7886;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7887 = coll;

if(cljs.core.truth_(and__3546__auto____7887))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7887;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7889 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7889))
{return or__3548__auto____7889;
} else
{var or__3548__auto____7891 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7891))
{return or__3548__auto____7891;
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
var _lookup__7925 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7914 = o;

if(cljs.core.truth_(and__3546__auto____7914))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7914;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7915 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{var or__3548__auto____7916 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7916))
{return or__3548__auto____7916;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7926 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7918 = o;

if(cljs.core.truth_(and__3546__auto____7918))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7918;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7920 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7920))
{return or__3548__auto____7920;
} else
{var or__3548__auto____7923 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7923))
{return or__3548__auto____7923;
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
return _lookup__7925.call(this,o,k);
case  3 :
return _lookup__7926.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7934 = coll;

if(cljs.core.truth_(and__3546__auto____7934))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7934;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7936 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7936))
{return or__3548__auto____7936;
} else
{var or__3548__auto____7937 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7937))
{return or__3548__auto____7937;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7939 = coll;

if(cljs.core.truth_(and__3546__auto____7939))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7939;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7942 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7942))
{return or__3548__auto____7942;
} else
{var or__3548__auto____7944 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7944))
{return or__3548__auto____7944;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7959 = coll;

if(cljs.core.truth_(and__3546__auto____7959))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7959;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7960 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7960))
{return or__3548__auto____7960;
} else
{var or__3548__auto____7961 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7961))
{return or__3548__auto____7961;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7970 = coll;

if(cljs.core.truth_(and__3546__auto____7970))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7970;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7973 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7973))
{return or__3548__auto____7973;
} else
{var or__3548__auto____7974 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7974))
{return or__3548__auto____7974;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7982 = coll;

if(cljs.core.truth_(and__3546__auto____7982))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7982;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7985 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7985))
{return or__3548__auto____7985;
} else
{var or__3548__auto____7986 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7986))
{return or__3548__auto____7986;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7988 = coll;

if(cljs.core.truth_(and__3546__auto____7988))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7988;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7992 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7992))
{return or__3548__auto____7992;
} else
{var or__3548__auto____7994 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7994))
{return or__3548__auto____7994;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8026 = coll;

if(cljs.core.truth_(and__3546__auto____8026))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8026;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8030 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8030))
{return or__3548__auto____8030;
} else
{var or__3548__auto____8033 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8033))
{return or__3548__auto____8033;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8039 = o;

if(cljs.core.truth_(and__3546__auto____8039))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8039;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8042 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8042))
{return or__3548__auto____8042;
} else
{var or__3548__auto____8044 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8044))
{return or__3548__auto____8044;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8051 = o;

if(cljs.core.truth_(and__3546__auto____8051))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8051;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8054 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8054))
{return or__3548__auto____8054;
} else
{var or__3548__auto____8056 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8056))
{return or__3548__auto____8056;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8062 = o;

if(cljs.core.truth_(and__3546__auto____8062))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8062;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8064 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8064))
{return or__3548__auto____8064;
} else
{var or__3548__auto____8066 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8066))
{return or__3548__auto____8066;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8068 = o;

if(cljs.core.truth_(and__3546__auto____8068))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8068;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8069 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8069))
{return or__3548__auto____8069;
} else
{var or__3548__auto____8070 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8070))
{return or__3548__auto____8070;
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
var _reduce__8086 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8073 = coll;

if(cljs.core.truth_(and__3546__auto____8073))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8073;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8074 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8074))
{return or__3548__auto____8074;
} else
{var or__3548__auto____8075 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8087 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8080 = coll;

if(cljs.core.truth_(and__3546__auto____8080))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8080;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8081 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8081))
{return or__3548__auto____8081;
} else
{var or__3548__auto____8083 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
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
return _reduce__8086.call(this,coll,f);
case  3 :
return _reduce__8087.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8099 = o;

if(cljs.core.truth_(and__3546__auto____8099))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8099;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8104 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8104))
{return or__3548__auto____8104;
} else
{var or__3548__auto____8105 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8105))
{return or__3548__auto____8105;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8107 = o;

if(cljs.core.truth_(and__3546__auto____8107))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8107;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8110 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8110))
{return or__3548__auto____8110;
} else
{var or__3548__auto____8111 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8111))
{return or__3548__auto____8111;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8119 = o;

if(cljs.core.truth_(and__3546__auto____8119))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8119;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8124 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8124))
{return or__3548__auto____8124;
} else
{var or__3548__auto____8125 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8125))
{return or__3548__auto____8125;
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
if(cljs.core.truth_((function (){var and__3546__auto____8129 = o;

if(cljs.core.truth_(and__3546__auto____8129))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8129;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8134 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8134))
{return or__3548__auto____8134;
} else
{var or__3548__auto____8135 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8135))
{return or__3548__auto____8135;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8202 = d;

if(cljs.core.truth_(and__3546__auto____8202))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8202;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8263 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8263))
{return or__3548__auto____8263;
} else
{var or__3548__auto____8264 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8264))
{return or__3548__auto____8264;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8265 = this$;

if(cljs.core.truth_(and__3546__auto____8265))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8265;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8266 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8266))
{return or__3548__auto____8266;
} else
{var or__3548__auto____8267 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8267))
{return or__3548__auto____8267;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8268 = this$;

if(cljs.core.truth_(and__3546__auto____8268))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8268;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8269 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8269))
{return or__3548__auto____8269;
} else
{var or__3548__auto____8270 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8270))
{return or__3548__auto____8270;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8272 = this$;

if(cljs.core.truth_(and__3546__auto____8272))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8272;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8275 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8275))
{return or__3548__auto____8275;
} else
{var or__3548__auto____8276 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8276))
{return or__3548__auto____8276;
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
var G__8313 = null;
var G__8313__8314 = (function (o,k){
return null;
});
var G__8313__8315 = (function (o,k,not_found){
return not_found;
});
G__8313 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8313__8314.call(this,o,k);
case  3 :
return G__8313__8315.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8313;
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
var G__8319 = null;
var G__8319__8322 = (function (_,f){
return f.call(null);
});
var G__8319__8323 = (function (_,f,start){
return start;
});
G__8319 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8319__8322.call(this,_,f);
case  3 :
return G__8319__8323.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8319;
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
var G__8336 = null;
var G__8336__8337 = (function (_,n){
return null;
});
var G__8336__8338 = (function (_,n,not_found){
return not_found;
});
G__8336 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8336__8337.call(this,_,n);
case  3 :
return G__8336__8338.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8336;
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
var ci_reduce__8357 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8348 = cljs.core._nth.call(null,cicoll,0);
var n__8349 = 1;

while(true){
if(cljs.core.truth_((n__8349 < cljs.core._count.call(null,cicoll))))
{{
var G__8388 = f.call(null,val__8348,cljs.core._nth.call(null,cicoll,n__8349));
var G__8389 = (n__8349 + 1);
val__8348 = G__8388;
n__8349 = G__8389;
continue;
}
} else
{return val__8348;
}
break;
}
}
});
var ci_reduce__8358 = (function (cicoll,f,val){
var val__8350 = val;
var n__8351 = 0;

while(true){
if(cljs.core.truth_((n__8351 < cljs.core._count.call(null,cicoll))))
{{
var G__8390 = f.call(null,val__8350,cljs.core._nth.call(null,cicoll,n__8351));
var G__8391 = (n__8351 + 1);
val__8350 = G__8390;
n__8351 = G__8391;
continue;
}
} else
{return val__8350;
}
break;
}
});
var ci_reduce__8359 = (function (cicoll,f,val,idx){
var val__8353 = val;
var n__8354 = idx;

while(true){
if(cljs.core.truth_((n__8354 < cljs.core._count.call(null,cicoll))))
{{
var G__8392 = f.call(null,val__8353,cljs.core._nth.call(null,cicoll,n__8354));
var G__8393 = (n__8354 + 1);
val__8353 = G__8392;
n__8354 = G__8393;
continue;
}
} else
{return val__8353;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8357.call(this,cicoll,f);
case  3 :
return ci_reduce__8358.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8359.call(this,cicoll,f,val,idx);
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
var this__8475 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8512 = null;
var G__8512__8513 = (function (_,f){
var this__8476 = this;
return cljs.core.ci_reduce.call(null,this__8476.a,f,(this__8476.a[this__8476.i]),(this__8476.i + 1));
});
var G__8512__8514 = (function (_,f,start){
var this__8478 = this;
return cljs.core.ci_reduce.call(null,this__8478.a,f,start,this__8478.i);
});
G__8512 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8512__8513.call(this,_,f);
case  3 :
return G__8512__8514.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8512;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8479 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8484 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8517 = null;
var G__8517__8518 = (function (coll,n){
var this__8489 = this;
var i__8490 = (n + this__8489.i);

if(cljs.core.truth_((i__8490 < this__8489.a.length)))
{return (this__8489.a[i__8490]);
} else
{return null;
}
});
var G__8517__8519 = (function (coll,n,not_found){
var this__8492 = this;
var i__8493 = (n + this__8492.i);

if(cljs.core.truth_((i__8493 < this__8492.a.length)))
{return (this__8492.a[i__8493]);
} else
{return not_found;
}
});
G__8517 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8517__8518.call(this,coll,n);
case  3 :
return G__8517__8519.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8517;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8496 = this;
return (this__8496.a.length - this__8496.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8497 = this;
return (this__8497.a[this__8497.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8499 = this;
if(cljs.core.truth_(((this__8499.i + 1) < this__8499.a.length)))
{return (new cljs.core.IndexedSeq(this__8499.a,(this__8499.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8503 = this;
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
var G__8543 = null;
var G__8543__8545 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8543__8546 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8543 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8543__8545.call(this,array,f);
case  3 :
return G__8543__8546.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8543;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8555 = null;
var G__8555__8556 = (function (array,k){
return (array[k]);
});
var G__8555__8557 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8555 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8555__8556.call(this,array,k);
case  3 :
return G__8555__8557.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8555;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8560 = null;
var G__8560__8561 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8560__8562 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8560 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8560__8561.call(this,array,n);
case  3 :
return G__8560__8562.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8560;
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
var temp__3698__auto____8574 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8574))
{var s__8575 = temp__3698__auto____8574;

return cljs.core._first.call(null,s__8575);
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
var G__8649 = cljs.core.next.call(null,s);
s = G__8649;
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
var s__8652 = cljs.core.seq.call(null,x);
var n__8653 = 0;

while(true){
if(cljs.core.truth_(s__8652))
{{
var G__8655 = cljs.core.next.call(null,s__8652);
var G__8656 = (n__8653 + 1);
s__8652 = G__8655;
n__8653 = G__8656;
continue;
}
} else
{return n__8653;
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
var conj__8676 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8704 = (function() { 
var G__8706__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8707 = conj.call(null,coll,x);
var G__8708 = cljs.core.first.call(null,xs);
var G__8709 = cljs.core.next.call(null,xs);
coll = G__8707;
x = G__8708;
xs = G__8709;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8706 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8706__delegate.call(this, coll, x, xs);
};
G__8706.cljs$lang$maxFixedArity = 2;
G__8706.cljs$lang$applyTo = (function (arglist__8710){
var coll = cljs.core.first(arglist__8710);
var x = cljs.core.first(cljs.core.next(arglist__8710));
var xs = cljs.core.rest(cljs.core.next(arglist__8710));
return G__8706__delegate.call(this, coll, x, xs);
});
return G__8706;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8676.call(this,coll,x);
default:
return conj__8704.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8704.cljs$lang$applyTo;
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
var nth__8777 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8778 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8777.call(this,coll,n);
case  3 :
return nth__8778.call(this,coll,n,not_found);
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
var get__8794 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8795 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8794.call(this,o,k);
case  3 :
return get__8795.call(this,o,k,not_found);
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
var assoc__8825 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8826 = (function() { 
var G__8828__delegate = function (coll,k,v,kvs){
while(true){
var ret__8818 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8829 = ret__8818;
var G__8830 = cljs.core.first.call(null,kvs);
var G__8831 = cljs.core.second.call(null,kvs);
var G__8832 = cljs.core.nnext.call(null,kvs);
coll = G__8829;
k = G__8830;
v = G__8831;
kvs = G__8832;
continue;
}
} else
{return ret__8818;
}
break;
}
};
var G__8828 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8828__delegate.call(this, coll, k, v, kvs);
};
G__8828.cljs$lang$maxFixedArity = 3;
G__8828.cljs$lang$applyTo = (function (arglist__8833){
var coll = cljs.core.first(arglist__8833);
var k = cljs.core.first(cljs.core.next(arglist__8833));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8833)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8833)));
return G__8828__delegate.call(this, coll, k, v, kvs);
});
return G__8828;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8825.call(this,coll,k,v);
default:
return assoc__8826.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8826.cljs$lang$applyTo;
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
var dissoc__8840 = (function (coll){
return coll;
});
var dissoc__8841 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8842 = (function() { 
var G__8846__delegate = function (coll,k,ks){
while(true){
var ret__8838 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8847 = ret__8838;
var G__8848 = cljs.core.first.call(null,ks);
var G__8849 = cljs.core.next.call(null,ks);
coll = G__8847;
k = G__8848;
ks = G__8849;
continue;
}
} else
{return ret__8838;
}
break;
}
};
var G__8846 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8846__delegate.call(this, coll, k, ks);
};
G__8846.cljs$lang$maxFixedArity = 2;
G__8846.cljs$lang$applyTo = (function (arglist__8850){
var coll = cljs.core.first(arglist__8850);
var k = cljs.core.first(cljs.core.next(arglist__8850));
var ks = cljs.core.rest(cljs.core.next(arglist__8850));
return G__8846__delegate.call(this, coll, k, ks);
});
return G__8846;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8840.call(this,coll);
case  2 :
return dissoc__8841.call(this,coll,k);
default:
return dissoc__8842.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8842.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8856 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8857 = x__445__auto____8856;

if(cljs.core.truth_(and__3546__auto____8857))
{var and__3546__auto____8859 = x__445__auto____8856.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8859))
{return cljs.core.not.call(null,x__445__auto____8856.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8859;
}
} else
{return and__3546__auto____8857;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8856);
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
var disj__8881 = (function (coll){
return coll;
});
var disj__8883 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8885 = (function() { 
var G__8888__delegate = function (coll,k,ks){
while(true){
var ret__8874 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8894 = ret__8874;
var G__8895 = cljs.core.first.call(null,ks);
var G__8896 = cljs.core.next.call(null,ks);
coll = G__8894;
k = G__8895;
ks = G__8896;
continue;
}
} else
{return ret__8874;
}
break;
}
};
var G__8888 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8888__delegate.call(this, coll, k, ks);
};
G__8888.cljs$lang$maxFixedArity = 2;
G__8888.cljs$lang$applyTo = (function (arglist__8897){
var coll = cljs.core.first(arglist__8897);
var k = cljs.core.first(cljs.core.next(arglist__8897));
var ks = cljs.core.rest(cljs.core.next(arglist__8897));
return G__8888__delegate.call(this, coll, k, ks);
});
return G__8888;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8881.call(this,coll);
case  2 :
return disj__8883.call(this,coll,k);
default:
return disj__8885.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8885.cljs$lang$applyTo;
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
{var x__445__auto____8910 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8911 = x__445__auto____8910;

if(cljs.core.truth_(and__3546__auto____8911))
{var and__3546__auto____8917 = x__445__auto____8910.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8917))
{return cljs.core.not.call(null,x__445__auto____8910.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8917;
}
} else
{return and__3546__auto____8911;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8910);
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
{var x__445__auto____8925 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8926 = x__445__auto____8925;

if(cljs.core.truth_(and__3546__auto____8926))
{var and__3546__auto____8931 = x__445__auto____8925.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8931))
{return cljs.core.not.call(null,x__445__auto____8925.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8931;
}
} else
{return and__3546__auto____8926;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8925);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8945 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8946 = x__445__auto____8945;

if(cljs.core.truth_(and__3546__auto____8946))
{var and__3546__auto____8947 = x__445__auto____8945.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8947))
{return cljs.core.not.call(null,x__445__auto____8945.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8947;
}
} else
{return and__3546__auto____8946;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8945);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8956 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8957 = x__445__auto____8956;

if(cljs.core.truth_(and__3546__auto____8957))
{var and__3546__auto____8958 = x__445__auto____8956.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8958))
{return cljs.core.not.call(null,x__445__auto____8956.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8958;
}
} else
{return and__3546__auto____8957;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8956);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8974 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8976 = x__445__auto____8974;

if(cljs.core.truth_(and__3546__auto____8976))
{var and__3546__auto____8981 = x__445__auto____8974.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8981))
{return cljs.core.not.call(null,x__445__auto____8974.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8981;
}
} else
{return and__3546__auto____8976;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8974);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8982 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8983 = x__445__auto____8982;

if(cljs.core.truth_(and__3546__auto____8983))
{var and__3546__auto____8992 = x__445__auto____8982.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8992))
{return cljs.core.not.call(null,x__445__auto____8982.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8992;
}
} else
{return and__3546__auto____8983;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8982);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____9000 = x;

if(cljs.core.truth_((function (){var and__3546__auto____9001 = x__445__auto____9000;

if(cljs.core.truth_(and__3546__auto____9001))
{var and__3546__auto____9005 = x__445__auto____9000.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____9005))
{return cljs.core.not.call(null,x__445__auto____9000.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____9005;
}
} else
{return and__3546__auto____9001;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____9000);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__9022 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__9022.push(key);
}));
return keys__9022;
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
{var x__445__auto____9054 = s;

if(cljs.core.truth_((function (){var and__3546__auto____9056 = x__445__auto____9054;

if(cljs.core.truth_(and__3546__auto____9056))
{var and__3546__auto____9057 = x__445__auto____9054.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____9057))
{return cljs.core.not.call(null,x__445__auto____9054.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____9057;
}
} else
{return and__3546__auto____9056;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____9054);
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
var and__3546__auto____9073 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9073))
{return cljs.core.not.call(null,(function (){var or__3548__auto____9075 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____9075))
{return or__3548__auto____9075;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____9073;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____9077 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9077))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____9077;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____9088 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9088))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____9088;
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
var and__3546__auto____9138 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____9138))
{return (n == n.toFixed());
} else
{return and__3546__auto____9138;
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
if(cljs.core.truth_((function (){var and__3546__auto____9148 = coll;

if(cljs.core.truth_(and__3546__auto____9148))
{var and__3546__auto____9150 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9150))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9150;
}
} else
{return and__3546__auto____9148;
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
var distinct_QMARK___9162 = (function (x){
return true;
});
var distinct_QMARK___9163 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9164 = (function() { 
var G__9166__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9152 = cljs.core.set([y,x]);
var xs__9153 = more;

while(true){
var x__9158 = cljs.core.first.call(null,xs__9153);
var etc__9159 = cljs.core.next.call(null,xs__9153);

if(cljs.core.truth_(xs__9153))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9152,x__9158)))
{return false;
} else
{{
var G__9167 = cljs.core.conj.call(null,s__9152,x__9158);
var G__9168 = etc__9159;
s__9152 = G__9167;
xs__9153 = G__9168;
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
var G__9166 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9166__delegate.call(this, x, y, more);
};
G__9166.cljs$lang$maxFixedArity = 2;
G__9166.cljs$lang$applyTo = (function (arglist__9169){
var x = cljs.core.first(arglist__9169);
var y = cljs.core.first(cljs.core.next(arglist__9169));
var more = cljs.core.rest(cljs.core.next(arglist__9169));
return G__9166__delegate.call(this, x, y, more);
});
return G__9166;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9162.call(this,x);
case  2 :
return distinct_QMARK___9163.call(this,x,y);
default:
return distinct_QMARK___9164.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9164.cljs$lang$applyTo;
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
var r__9177 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9177)))
{return r__9177;
} else
{if(cljs.core.truth_(r__9177))
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
var sort__9232 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9233 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9231 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9231,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9231);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9232.call(this,comp);
case  2 :
return sort__9233.call(this,comp,coll);
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
var sort_by__9235 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9236 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9235.call(this,keyfn,comp);
case  3 :
return sort_by__9236.call(this,keyfn,comp,coll);
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
var reduce__9238 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9239 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9238.call(this,f,val);
case  3 :
return reduce__9239.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9245 = (function (f,coll){
var temp__3695__auto____9241 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9241))
{var s__9242 = temp__3695__auto____9241;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9242),cljs.core.next.call(null,s__9242));
} else
{return f.call(null);
}
});
var seq_reduce__9247 = (function (f,val,coll){
var val__9243 = val;
var coll__9244 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9244))
{{
var G__9249 = f.call(null,val__9243,cljs.core.first.call(null,coll__9244));
var G__9250 = cljs.core.next.call(null,coll__9244);
val__9243 = G__9249;
coll__9244 = G__9250;
continue;
}
} else
{return val__9243;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9245.call(this,f,val);
case  3 :
return seq_reduce__9247.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9251 = null;
var G__9251__9252 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9251__9253 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9251 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9251__9252.call(this,coll,f);
case  3 :
return G__9251__9253.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9251;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9257 = (function (){
return 0;
});
var _PLUS___9258 = (function (x){
return x;
});
var _PLUS___9259 = (function (x,y){
return (x + y);
});
var _PLUS___9260 = (function() { 
var G__9262__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9262 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9262__delegate.call(this, x, y, more);
};
G__9262.cljs$lang$maxFixedArity = 2;
G__9262.cljs$lang$applyTo = (function (arglist__9263){
var x = cljs.core.first(arglist__9263);
var y = cljs.core.first(cljs.core.next(arglist__9263));
var more = cljs.core.rest(cljs.core.next(arglist__9263));
return G__9262__delegate.call(this, x, y, more);
});
return G__9262;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9257.call(this);
case  1 :
return _PLUS___9258.call(this,x);
case  2 :
return _PLUS___9259.call(this,x,y);
default:
return _PLUS___9260.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9260.cljs$lang$applyTo;
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
var ___9273 = (function (x){
return (- x);
});
var ___9274 = (function (x,y){
return (x - y);
});
var ___9275 = (function() { 
var G__9277__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9277 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9277__delegate.call(this, x, y, more);
};
G__9277.cljs$lang$maxFixedArity = 2;
G__9277.cljs$lang$applyTo = (function (arglist__9280){
var x = cljs.core.first(arglist__9280);
var y = cljs.core.first(cljs.core.next(arglist__9280));
var more = cljs.core.rest(cljs.core.next(arglist__9280));
return G__9277__delegate.call(this, x, y, more);
});
return G__9277;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9273.call(this,x);
case  2 :
return ___9274.call(this,x,y);
default:
return ___9275.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9275.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9282 = (function (){
return 1;
});
var _STAR___9283 = (function (x){
return x;
});
var _STAR___9284 = (function (x,y){
return (x * y);
});
var _STAR___9285 = (function() { 
var G__9287__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9287 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9287__delegate.call(this, x, y, more);
};
G__9287.cljs$lang$maxFixedArity = 2;
G__9287.cljs$lang$applyTo = (function (arglist__9294){
var x = cljs.core.first(arglist__9294);
var y = cljs.core.first(cljs.core.next(arglist__9294));
var more = cljs.core.rest(cljs.core.next(arglist__9294));
return G__9287__delegate.call(this, x, y, more);
});
return G__9287;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9282.call(this);
case  1 :
return _STAR___9283.call(this,x);
case  2 :
return _STAR___9284.call(this,x,y);
default:
return _STAR___9285.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9285.cljs$lang$applyTo;
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
var _SLASH___9299 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9300 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9301 = (function() { 
var G__9304__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9304 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9304__delegate.call(this, x, y, more);
};
G__9304.cljs$lang$maxFixedArity = 2;
G__9304.cljs$lang$applyTo = (function (arglist__9306){
var x = cljs.core.first(arglist__9306);
var y = cljs.core.first(cljs.core.next(arglist__9306));
var more = cljs.core.rest(cljs.core.next(arglist__9306));
return G__9304__delegate.call(this, x, y, more);
});
return G__9304;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9299.call(this,x);
case  2 :
return _SLASH___9300.call(this,x,y);
default:
return _SLASH___9301.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9301.cljs$lang$applyTo;
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
var _LT___9371 = (function (x){
return true;
});
var _LT___9372 = (function (x,y){
return (x < y);
});
var _LT___9373 = (function() { 
var G__9375__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9376 = y;
var G__9377 = cljs.core.first.call(null,more);
var G__9378 = cljs.core.next.call(null,more);
x = G__9376;
y = G__9377;
more = G__9378;
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
var G__9375 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9375__delegate.call(this, x, y, more);
};
G__9375.cljs$lang$maxFixedArity = 2;
G__9375.cljs$lang$applyTo = (function (arglist__9381){
var x = cljs.core.first(arglist__9381);
var y = cljs.core.first(cljs.core.next(arglist__9381));
var more = cljs.core.rest(cljs.core.next(arglist__9381));
return G__9375__delegate.call(this, x, y, more);
});
return G__9375;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9371.call(this,x);
case  2 :
return _LT___9372.call(this,x,y);
default:
return _LT___9373.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9373.cljs$lang$applyTo;
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
var _LT__EQ___9391 = (function (x){
return true;
});
var _LT__EQ___9392 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9393 = (function() { 
var G__9396__delegate = function (x,y,more){
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
var G__9396 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9396__delegate.call(this, x, y, more);
};
G__9396.cljs$lang$maxFixedArity = 2;
G__9396.cljs$lang$applyTo = (function (arglist__9403){
var x = cljs.core.first(arglist__9403);
var y = cljs.core.first(cljs.core.next(arglist__9403));
var more = cljs.core.rest(cljs.core.next(arglist__9403));
return G__9396__delegate.call(this, x, y, more);
});
return G__9396;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9391.call(this,x);
case  2 :
return _LT__EQ___9392.call(this,x,y);
default:
return _LT__EQ___9393.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9393.cljs$lang$applyTo;
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
var _GT___9410 = (function (x){
return true;
});
var _GT___9411 = (function (x,y){
return (x > y);
});
var _GT___9412 = (function() { 
var G__9414__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9415 = y;
var G__9416 = cljs.core.first.call(null,more);
var G__9417 = cljs.core.next.call(null,more);
x = G__9415;
y = G__9416;
more = G__9417;
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
var G__9414 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9414__delegate.call(this, x, y, more);
};
G__9414.cljs$lang$maxFixedArity = 2;
G__9414.cljs$lang$applyTo = (function (arglist__9424){
var x = cljs.core.first(arglist__9424);
var y = cljs.core.first(cljs.core.next(arglist__9424));
var more = cljs.core.rest(cljs.core.next(arglist__9424));
return G__9414__delegate.call(this, x, y, more);
});
return G__9414;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9410.call(this,x);
case  2 :
return _GT___9411.call(this,x,y);
default:
return _GT___9412.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9412.cljs$lang$applyTo;
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
var _GT__EQ___9428 = (function (x){
return true;
});
var _GT__EQ___9429 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9430 = (function() { 
var G__9432__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9433 = y;
var G__9434 = cljs.core.first.call(null,more);
var G__9435 = cljs.core.next.call(null,more);
x = G__9433;
y = G__9434;
more = G__9435;
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
var G__9432 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9432__delegate.call(this, x, y, more);
};
G__9432.cljs$lang$maxFixedArity = 2;
G__9432.cljs$lang$applyTo = (function (arglist__9439){
var x = cljs.core.first(arglist__9439);
var y = cljs.core.first(cljs.core.next(arglist__9439));
var more = cljs.core.rest(cljs.core.next(arglist__9439));
return G__9432__delegate.call(this, x, y, more);
});
return G__9432;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9428.call(this,x);
case  2 :
return _GT__EQ___9429.call(this,x,y);
default:
return _GT__EQ___9430.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9430.cljs$lang$applyTo;
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
var max__9527 = (function (x){
return x;
});
var max__9528 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9529 = (function() { 
var G__9535__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9535 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9535__delegate.call(this, x, y, more);
};
G__9535.cljs$lang$maxFixedArity = 2;
G__9535.cljs$lang$applyTo = (function (arglist__9537){
var x = cljs.core.first(arglist__9537);
var y = cljs.core.first(cljs.core.next(arglist__9537));
var more = cljs.core.rest(cljs.core.next(arglist__9537));
return G__9535__delegate.call(this, x, y, more);
});
return G__9535;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9527.call(this,x);
case  2 :
return max__9528.call(this,x,y);
default:
return max__9529.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9529.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9543 = (function (x){
return x;
});
var min__9544 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9545 = (function() { 
var G__9547__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9547 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9547__delegate.call(this, x, y, more);
};
G__9547.cljs$lang$maxFixedArity = 2;
G__9547.cljs$lang$applyTo = (function (arglist__9549){
var x = cljs.core.first(arglist__9549);
var y = cljs.core.first(cljs.core.next(arglist__9549));
var more = cljs.core.rest(cljs.core.next(arglist__9549));
return G__9547__delegate.call(this, x, y, more);
});
return G__9547;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9543.call(this,x);
case  2 :
return min__9544.call(this,x,y);
default:
return min__9545.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9545.cljs$lang$applyTo;
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
var rem__9564 = (n % d);

return cljs.core.fix.call(null,((n - rem__9564) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9572 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9572));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9588 = (function (){
return Math.random.call(null);
});
var rand__9589 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9588.call(this);
case  1 :
return rand__9589.call(this,n);
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
var _EQ__EQ___9630 = (function (x){
return true;
});
var _EQ__EQ___9631 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9632 = (function() { 
var G__9634__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9635 = y;
var G__9636 = cljs.core.first.call(null,more);
var G__9637 = cljs.core.next.call(null,more);
x = G__9635;
y = G__9636;
more = G__9637;
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
var G__9634 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9634__delegate.call(this, x, y, more);
};
G__9634.cljs$lang$maxFixedArity = 2;
G__9634.cljs$lang$applyTo = (function (arglist__9642){
var x = cljs.core.first(arglist__9642);
var y = cljs.core.first(cljs.core.next(arglist__9642));
var more = cljs.core.rest(cljs.core.next(arglist__9642));
return G__9634__delegate.call(this, x, y, more);
});
return G__9634;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9630.call(this,x);
case  2 :
return _EQ__EQ___9631.call(this,x,y);
default:
return _EQ__EQ___9632.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9632.cljs$lang$applyTo;
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
var n__9658 = n;
var xs__9661 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9663 = xs__9661;

if(cljs.core.truth_(and__3546__auto____9663))
{return (n__9658 > 0);
} else
{return and__3546__auto____9663;
}
})()))
{{
var G__9666 = (n__9658 - 1);
var G__9667 = cljs.core.next.call(null,xs__9661);
n__9658 = G__9666;
xs__9661 = G__9667;
continue;
}
} else
{return xs__9661;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9685 = null;
var G__9685__9686 = (function (coll,n){
var temp__3695__auto____9672 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9672))
{var xs__9673 = temp__3695__auto____9672;

return cljs.core.first.call(null,xs__9673);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9685__9687 = (function (coll,n,not_found){
var temp__3695__auto____9682 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9682))
{var xs__9683 = temp__3695__auto____9682;

return cljs.core.first.call(null,xs__9683);
} else
{return not_found;
}
});
G__9685 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9685__9686.call(this,coll,n);
case  3 :
return G__9685__9687.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9685;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9699 = (function (){
return "";
});
var str_STAR___9700 = (function (x){
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
var str_STAR___9701 = (function() { 
var G__9727__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9728 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9730 = cljs.core.next.call(null,more);
sb = G__9728;
more = G__9730;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9727 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9727__delegate.call(this, x, ys);
};
G__9727.cljs$lang$maxFixedArity = 1;
G__9727.cljs$lang$applyTo = (function (arglist__9732){
var x = cljs.core.first(arglist__9732);
var ys = cljs.core.rest(arglist__9732);
return G__9727__delegate.call(this, x, ys);
});
return G__9727;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9699.call(this);
case  1 :
return str_STAR___9700.call(this,x);
default:
return str_STAR___9701.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9701.cljs$lang$applyTo;
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
var str__9737 = (function (){
return "";
});
var str__9738 = (function (x){
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
var str__9739 = (function() { 
var G__9741__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9741 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9741__delegate.call(this, x, ys);
};
G__9741.cljs$lang$maxFixedArity = 1;
G__9741.cljs$lang$applyTo = (function (arglist__9742){
var x = cljs.core.first(arglist__9742);
var ys = cljs.core.rest(arglist__9742);
return G__9741__delegate.call(this, x, ys);
});
return G__9741;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9737.call(this);
case  1 :
return str__9738.call(this,x);
default:
return str__9739.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9739.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9744 = (function (s,start){
return s.substring(start);
});
var subs__9745 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9744.call(this,s,start);
case  3 :
return subs__9745.call(this,s,start,end);
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
var symbol__9753 = (function (name){
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
var symbol__9754 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9753.call(this,ns);
case  2 :
return symbol__9754.call(this,ns,name);
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
var keyword__9763 = (function (name){
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
var keyword__9764 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9763.call(this,ns);
case  2 :
return keyword__9764.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9766 = cljs.core.seq.call(null,x);
var ys__9767 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9766)))
{return cljs.core.nil_QMARK_.call(null,ys__9767);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9767)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9766),cljs.core.first.call(null,ys__9767))))
{{
var G__9779 = cljs.core.next.call(null,xs__9766);
var G__9781 = cljs.core.next.call(null,ys__9767);
xs__9766 = G__9779;
ys__9767 = G__9781;
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
return cljs.core.reduce.call(null,(function (p1__9789_SHARP_,p2__9790_SHARP_){
return cljs.core.hash_combine.call(null,p1__9789_SHARP_,cljs.core.hash.call(null,p2__9790_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9826__9840 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9826__9840))
{var G__9843__9845 = cljs.core.first.call(null,G__9826__9840);
var vec__9844__9847 = G__9843__9845;
var key_name__9848 = cljs.core.nth.call(null,vec__9844__9847,0,null);
var f__9849 = cljs.core.nth.call(null,vec__9844__9847,1,null);
var G__9826__9851 = G__9826__9840;

var G__9843__9852 = G__9843__9845;
var G__9826__9853 = G__9826__9851;

while(true){
var vec__9854__9856 = G__9843__9852;
var key_name__9857 = cljs.core.nth.call(null,vec__9854__9856,0,null);
var f__9859 = cljs.core.nth.call(null,vec__9854__9856,1,null);
var G__9826__9860 = G__9826__9853;

var str_name__9862 = cljs.core.name.call(null,key_name__9857);

obj[str_name__9862] = f__9859;
var temp__3698__auto____9864 = cljs.core.next.call(null,G__9826__9860);

if(cljs.core.truth_(temp__3698__auto____9864))
{var G__9826__9866 = temp__3698__auto____9864;

{
var G__9871 = cljs.core.first.call(null,G__9826__9866);
var G__9872 = G__9826__9866;
G__9843__9852 = G__9871;
G__9826__9853 = G__9872;
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
var this__9875 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9877 = this;
return (new cljs.core.List(this__9877.meta,o,coll,(this__9877.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10133 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10134 = this;
return this__10134.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10135 = this;
return this__10135.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10136 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10139 = this;
return this__10139.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10142 = this;
return this__10142.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10143 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10145 = this;
return (new cljs.core.List(meta,this__10145.first,this__10145.rest,this__10145.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10147 = this;
return this__10147.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10148 = this;
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
var this__10161 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10162 = this;
return (new cljs.core.List(this__10162.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10163 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10164 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10165 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10166 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10167 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10168 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10169 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10170 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10171 = this;
return this__10171.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10172 = this;
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
list.cljs$lang$applyTo = (function (arglist__10244){
var items = cljs.core.seq( arglist__10244 );;
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
var this__10252 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10255 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10256 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10258 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10258.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10262 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10263 = this;
return this__10263.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10268 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10268.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10268.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10275 = this;
return this__10275.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10277 = this;
return (new cljs.core.Cons(meta,this__10277.first,this__10277.rest));
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
var G__10318 = null;
var G__10318__10319 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10318__10320 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10318 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10318__10319.call(this,string,f);
case  3 :
return G__10318__10320.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10318;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10322 = null;
var G__10322__10323 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10322__10324 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10322 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10322__10323.call(this,string,k);
case  3 :
return G__10322__10324.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10322;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10335 = null;
var G__10335__10336 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10335__10337 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10335 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10335__10336.call(this,string,n);
case  3 :
return G__10335__10337.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10335;
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
var G__10389 = null;
var G__10389__10390 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10389__10391 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10389 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10389__10390.call(this,this$,coll);
case  3 :
return G__10389__10391.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10389;
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
var x__10404 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10404;
} else
{lazy_seq.x = x__10404.call(null);
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
var this__10430 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10437 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10439 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10441 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10441.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10443 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10445 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10447 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10449 = this;
return this__10449.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10450 = this;
return (new cljs.core.LazySeq(meta,this__10450.realized,this__10450.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10462 = cljs.core.array.call(null);

var s__10464 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10464)))
{ary__10462.push(cljs.core.first.call(null,s__10464));
{
var G__10469 = cljs.core.next.call(null,s__10464);
s__10464 = G__10469;
continue;
}
} else
{return ary__10462;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10482 = s;
var i__10483 = n;
var sum__10484 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10485 = (i__10483 > 0);

if(cljs.core.truth_(and__3546__auto____10485))
{return cljs.core.seq.call(null,s__10482);
} else
{return and__3546__auto____10485;
}
})()))
{{
var G__10493 = cljs.core.next.call(null,s__10482);
var G__10494 = (i__10483 - 1);
var G__10495 = (sum__10484 + 1);
s__10482 = G__10493;
i__10483 = G__10494;
sum__10484 = G__10495;
continue;
}
} else
{return sum__10484;
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
var concat__10560 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10561 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10562 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10515 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10515))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10515),concat.call(null,cljs.core.rest.call(null,s__10515),y));
} else
{return y;
}
})));
});
var concat__10564 = (function() { 
var G__10583__delegate = function (x,y,zs){
var cat__10533 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10521 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10521))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10521),cat.call(null,cljs.core.rest.call(null,xys__10521),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10533.call(null,concat.call(null,x,y),zs);
};
var G__10583 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10583__delegate.call(this, x, y, zs);
};
G__10583.cljs$lang$maxFixedArity = 2;
G__10583.cljs$lang$applyTo = (function (arglist__10586){
var x = cljs.core.first(arglist__10586);
var y = cljs.core.first(cljs.core.next(arglist__10586));
var zs = cljs.core.rest(cljs.core.next(arglist__10586));
return G__10583__delegate.call(this, x, y, zs);
});
return G__10583;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10560.call(this);
case  1 :
return concat__10561.call(this,x);
case  2 :
return concat__10562.call(this,x,y);
default:
return concat__10564.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10564.cljs$lang$applyTo;
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
var list_STAR___10600 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10601 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10602 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10603 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10604 = (function() { 
var G__10613__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10613 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10613__delegate.call(this, a, b, c, d, more);
};
G__10613.cljs$lang$maxFixedArity = 4;
G__10613.cljs$lang$applyTo = (function (arglist__10618){
var a = cljs.core.first(arglist__10618);
var b = cljs.core.first(cljs.core.next(arglist__10618));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10618)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10618))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10618))));
return G__10613__delegate.call(this, a, b, c, d, more);
});
return G__10613;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10600.call(this,a);
case  2 :
return list_STAR___10601.call(this,a,b);
case  3 :
return list_STAR___10602.call(this,a,b,c);
case  4 :
return list_STAR___10603.call(this,a,b,c,d);
default:
return list_STAR___10604.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10604.cljs$lang$applyTo;
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
var apply__10658 = (function (f,args){
var fixed_arity__10627 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10627 + 1)) <= fixed_arity__10627)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10659 = (function (f,x,args){
var arglist__10628 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10629 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10628,fixed_arity__10629) <= fixed_arity__10629)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10628));
} else
{return f.cljs$lang$applyTo(arglist__10628);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10628));
}
});
var apply__10660 = (function (f,x,y,args){
var arglist__10630 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10632 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10630,fixed_arity__10632) <= fixed_arity__10632)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10630));
} else
{return f.cljs$lang$applyTo(arglist__10630);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10630));
}
});
var apply__10661 = (function (f,x,y,z,args){
var arglist__10634 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10635 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10634,fixed_arity__10635) <= fixed_arity__10635)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10634));
} else
{return f.cljs$lang$applyTo(arglist__10634);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10634));
}
});
var apply__10662 = (function() { 
var G__10697__delegate = function (f,a,b,c,d,args){
var arglist__10653 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10654 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10653,fixed_arity__10654) <= fixed_arity__10654)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10653));
} else
{return f.cljs$lang$applyTo(arglist__10653);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10653));
}
};
var G__10697 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10697__delegate.call(this, f, a, b, c, d, args);
};
G__10697.cljs$lang$maxFixedArity = 5;
G__10697.cljs$lang$applyTo = (function (arglist__10698){
var f = cljs.core.first(arglist__10698);
var a = cljs.core.first(cljs.core.next(arglist__10698));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10698)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10698))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10698)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10698)))));
return G__10697__delegate.call(this, f, a, b, c, d, args);
});
return G__10697;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10658.call(this,f,a);
case  3 :
return apply__10659.call(this,f,a,b);
case  4 :
return apply__10660.call(this,f,a,b,c);
case  5 :
return apply__10661.call(this,f,a,b,c,d);
default:
return apply__10662.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10662.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10706){
var obj = cljs.core.first(arglist__10706);
var f = cljs.core.first(cljs.core.next(arglist__10706));
var args = cljs.core.rest(cljs.core.next(arglist__10706));
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
var not_EQ___10713 = (function (x){
return false;
});
var not_EQ___10714 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10715 = (function() { 
var G__10717__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10717 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10717__delegate.call(this, x, y, more);
};
G__10717.cljs$lang$maxFixedArity = 2;
G__10717.cljs$lang$applyTo = (function (arglist__10718){
var x = cljs.core.first(arglist__10718);
var y = cljs.core.first(cljs.core.next(arglist__10718));
var more = cljs.core.rest(cljs.core.next(arglist__10718));
return G__10717__delegate.call(this, x, y, more);
});
return G__10717;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10713.call(this,x);
case  2 :
return not_EQ___10714.call(this,x,y);
default:
return not_EQ___10715.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10715.cljs$lang$applyTo;
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
var G__10744 = pred;
var G__10745 = cljs.core.next.call(null,coll);
pred = G__10744;
coll = G__10745;
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
{var or__3548__auto____10756 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10756))
{return or__3548__auto____10756;
} else
{{
var G__10757 = pred;
var G__10758 = cljs.core.next.call(null,coll);
pred = G__10757;
coll = G__10758;
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
var G__10776 = null;
var G__10776__10777 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10776__10778 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10776__10779 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10776__10780 = (function() { 
var G__10788__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10788 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10788__delegate.call(this, x, y, zs);
};
G__10788.cljs$lang$maxFixedArity = 2;
G__10788.cljs$lang$applyTo = (function (arglist__10791){
var x = cljs.core.first(arglist__10791);
var y = cljs.core.first(cljs.core.next(arglist__10791));
var zs = cljs.core.rest(cljs.core.next(arglist__10791));
return G__10788__delegate.call(this, x, y, zs);
});
return G__10788;
})()
;
G__10776 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10776__10777.call(this);
case  1 :
return G__10776__10778.call(this,x);
case  2 :
return G__10776__10779.call(this,x,y);
default:
return G__10776__10780.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10776.cljs$lang$maxFixedArity = 2;
G__10776.cljs$lang$applyTo = G__10776__10780.cljs$lang$applyTo;
return G__10776;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10805__delegate = function (args){
return x;
};
var G__10805 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10805__delegate.call(this, args);
};
G__10805.cljs$lang$maxFixedArity = 0;
G__10805.cljs$lang$applyTo = (function (arglist__10806){
var args = cljs.core.seq( arglist__10806 );;
return G__10805__delegate.call(this, args);
});
return G__10805;
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
var comp__10836 = (function (){
return cljs.core.identity;
});
var comp__10838 = (function (f){
return f;
});
var comp__10839 = (function (f,g){
return (function() {
var G__10849 = null;
var G__10849__10854 = (function (){
return f.call(null,g.call(null));
});
var G__10849__10856 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10849__10857 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10849__10858 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10849__10859 = (function() { 
var G__10865__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10865 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10865__delegate.call(this, x, y, z, args);
};
G__10865.cljs$lang$maxFixedArity = 3;
G__10865.cljs$lang$applyTo = (function (arglist__10868){
var x = cljs.core.first(arglist__10868);
var y = cljs.core.first(cljs.core.next(arglist__10868));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10868)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10868)));
return G__10865__delegate.call(this, x, y, z, args);
});
return G__10865;
})()
;
G__10849 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10849__10854.call(this);
case  1 :
return G__10849__10856.call(this,x);
case  2 :
return G__10849__10857.call(this,x,y);
case  3 :
return G__10849__10858.call(this,x,y,z);
default:
return G__10849__10859.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10849.cljs$lang$maxFixedArity = 3;
G__10849.cljs$lang$applyTo = G__10849__10859.cljs$lang$applyTo;
return G__10849;
})()
});
var comp__10840 = (function (f,g,h){
return (function() {
var G__10870 = null;
var G__10870__10872 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10870__10874 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10870__10876 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10870__10878 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10870__10879 = (function() { 
var G__10905__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10905 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10905__delegate.call(this, x, y, z, args);
};
G__10905.cljs$lang$maxFixedArity = 3;
G__10905.cljs$lang$applyTo = (function (arglist__10906){
var x = cljs.core.first(arglist__10906);
var y = cljs.core.first(cljs.core.next(arglist__10906));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10906)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10906)));
return G__10905__delegate.call(this, x, y, z, args);
});
return G__10905;
})()
;
G__10870 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10870__10872.call(this);
case  1 :
return G__10870__10874.call(this,x);
case  2 :
return G__10870__10876.call(this,x,y);
case  3 :
return G__10870__10878.call(this,x,y,z);
default:
return G__10870__10879.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10870.cljs$lang$maxFixedArity = 3;
G__10870.cljs$lang$applyTo = G__10870__10879.cljs$lang$applyTo;
return G__10870;
})()
});
var comp__10841 = (function() { 
var G__10908__delegate = function (f1,f2,f3,fs){
var fs__10823 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10910__delegate = function (args){
var ret__10826 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10823),args);
var fs__10828 = cljs.core.next.call(null,fs__10823);

while(true){
if(cljs.core.truth_(fs__10828))
{{
var G__10912 = cljs.core.first.call(null,fs__10828).call(null,ret__10826);
var G__10913 = cljs.core.next.call(null,fs__10828);
ret__10826 = G__10912;
fs__10828 = G__10913;
continue;
}
} else
{return ret__10826;
}
break;
}
};
var G__10910 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10910__delegate.call(this, args);
};
G__10910.cljs$lang$maxFixedArity = 0;
G__10910.cljs$lang$applyTo = (function (arglist__10917){
var args = cljs.core.seq( arglist__10917 );;
return G__10910__delegate.call(this, args);
});
return G__10910;
})()
;
};
var G__10908 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10908__delegate.call(this, f1, f2, f3, fs);
};
G__10908.cljs$lang$maxFixedArity = 3;
G__10908.cljs$lang$applyTo = (function (arglist__10921){
var f1 = cljs.core.first(arglist__10921);
var f2 = cljs.core.first(cljs.core.next(arglist__10921));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10921)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10921)));
return G__10908__delegate.call(this, f1, f2, f3, fs);
});
return G__10908;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10836.call(this);
case  1 :
return comp__10838.call(this,f1);
case  2 :
return comp__10839.call(this,f1,f2);
case  3 :
return comp__10840.call(this,f1,f2,f3);
default:
return comp__10841.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10841.cljs$lang$applyTo;
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
var partial__10926 = (function (f,arg1){
return (function() { 
var G__10932__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10932 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10932__delegate.call(this, args);
};
G__10932.cljs$lang$maxFixedArity = 0;
G__10932.cljs$lang$applyTo = (function (arglist__10938){
var args = cljs.core.seq( arglist__10938 );;
return G__10932__delegate.call(this, args);
});
return G__10932;
})()
;
});
var partial__10927 = (function (f,arg1,arg2){
return (function() { 
var G__10939__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10939 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10939__delegate.call(this, args);
};
G__10939.cljs$lang$maxFixedArity = 0;
G__10939.cljs$lang$applyTo = (function (arglist__10940){
var args = cljs.core.seq( arglist__10940 );;
return G__10939__delegate.call(this, args);
});
return G__10939;
})()
;
});
var partial__10928 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10941__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10941 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10941__delegate.call(this, args);
};
G__10941.cljs$lang$maxFixedArity = 0;
G__10941.cljs$lang$applyTo = (function (arglist__10942){
var args = cljs.core.seq( arglist__10942 );;
return G__10941__delegate.call(this, args);
});
return G__10941;
})()
;
});
var partial__10929 = (function() { 
var G__10943__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10944__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10944 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10944__delegate.call(this, args);
};
G__10944.cljs$lang$maxFixedArity = 0;
G__10944.cljs$lang$applyTo = (function (arglist__10945){
var args = cljs.core.seq( arglist__10945 );;
return G__10944__delegate.call(this, args);
});
return G__10944;
})()
;
};
var G__10943 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10943__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10943.cljs$lang$maxFixedArity = 4;
G__10943.cljs$lang$applyTo = (function (arglist__10949){
var f = cljs.core.first(arglist__10949);
var arg1 = cljs.core.first(cljs.core.next(arglist__10949));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10949)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10949))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10949))));
return G__10943__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10943;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10926.call(this,f,arg1);
case  3 :
return partial__10927.call(this,f,arg1,arg2);
case  4 :
return partial__10928.call(this,f,arg1,arg2,arg3);
default:
return partial__10929.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10929.cljs$lang$applyTo;
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
var fnil__10975 = (function (f,x){
return (function() {
var G__10981 = null;
var G__10981__10982 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10981__10983 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10981__10984 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10981__10985 = (function() { 
var G__10992__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10992 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10992__delegate.call(this, a, b, c, ds);
};
G__10992.cljs$lang$maxFixedArity = 3;
G__10992.cljs$lang$applyTo = (function (arglist__10994){
var a = cljs.core.first(arglist__10994);
var b = cljs.core.first(cljs.core.next(arglist__10994));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10994)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10994)));
return G__10992__delegate.call(this, a, b, c, ds);
});
return G__10992;
})()
;
G__10981 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10981__10982.call(this,a);
case  2 :
return G__10981__10983.call(this,a,b);
case  3 :
return G__10981__10984.call(this,a,b,c);
default:
return G__10981__10985.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10981.cljs$lang$maxFixedArity = 3;
G__10981.cljs$lang$applyTo = G__10981__10985.cljs$lang$applyTo;
return G__10981;
})()
});
var fnil__10976 = (function (f,x,y){
return (function() {
var G__11003 = null;
var G__11003__11005 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11003__11006 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11003__11007 = (function() { 
var G__11011__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11011 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11011__delegate.call(this, a, b, c, ds);
};
G__11011.cljs$lang$maxFixedArity = 3;
G__11011.cljs$lang$applyTo = (function (arglist__11013){
var a = cljs.core.first(arglist__11013);
var b = cljs.core.first(cljs.core.next(arglist__11013));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11013)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11013)));
return G__11011__delegate.call(this, a, b, c, ds);
});
return G__11011;
})()
;
G__11003 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11003__11005.call(this,a,b);
case  3 :
return G__11003__11006.call(this,a,b,c);
default:
return G__11003__11007.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11003.cljs$lang$maxFixedArity = 3;
G__11003.cljs$lang$applyTo = G__11003__11007.cljs$lang$applyTo;
return G__11003;
})()
});
var fnil__10978 = (function (f,x,y,z){
return (function() {
var G__11015 = null;
var G__11015__11017 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11015__11018 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11015__11019 = (function() { 
var G__11092__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11092 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11092__delegate.call(this, a, b, c, ds);
};
G__11092.cljs$lang$maxFixedArity = 3;
G__11092.cljs$lang$applyTo = (function (arglist__11095){
var a = cljs.core.first(arglist__11095);
var b = cljs.core.first(cljs.core.next(arglist__11095));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11095)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11095)));
return G__11092__delegate.call(this, a, b, c, ds);
});
return G__11092;
})()
;
G__11015 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11015__11017.call(this,a,b);
case  3 :
return G__11015__11018.call(this,a,b,c);
default:
return G__11015__11019.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11015.cljs$lang$maxFixedArity = 3;
G__11015.cljs$lang$applyTo = G__11015__11019.cljs$lang$applyTo;
return G__11015;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10975.call(this,f,x);
case  3 :
return fnil__10976.call(this,f,x,y);
case  4 :
return fnil__10978.call(this,f,x,y,z);
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
var mapi__11117 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11110 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11110))
{var s__11112 = temp__3698__auto____11110;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11112)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11112)));
} else
{return null;
}
})));
});

return mapi__11117.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11150 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11150))
{var s__11152 = temp__3698__auto____11150;

var x__11154 = f.call(null,cljs.core.first.call(null,s__11152));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11154)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11152));
} else
{return cljs.core.cons.call(null,x__11154,keep.call(null,f,cljs.core.rest.call(null,s__11152)));
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
var keepi__11196 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11188 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11188))
{var s__11191 = temp__3698__auto____11188;

var x__11193 = f.call(null,idx,cljs.core.first.call(null,s__11191));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11193)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11191));
} else
{return cljs.core.cons.call(null,x__11193,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11191)));
}
} else
{return null;
}
})));
});

return keepi__11196.call(null,0,coll);
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
var every_pred__11338 = (function (p){
return (function() {
var ep1 = null;
var ep1__11346 = (function (){
return true;
});
var ep1__11348 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11349 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11230 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11230))
{return p.call(null,y);
} else
{return and__3546__auto____11230;
}
})());
});
var ep1__11350 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11233 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11233))
{var and__3546__auto____11234 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11234))
{return p.call(null,z);
} else
{return and__3546__auto____11234;
}
} else
{return and__3546__auto____11233;
}
})());
});
var ep1__11351 = (function() { 
var G__11361__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11236 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11236))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11236;
}
})());
};
var G__11361 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11361__delegate.call(this, x, y, z, args);
};
G__11361.cljs$lang$maxFixedArity = 3;
G__11361.cljs$lang$applyTo = (function (arglist__11366){
var x = cljs.core.first(arglist__11366);
var y = cljs.core.first(cljs.core.next(arglist__11366));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11366)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11366)));
return G__11361__delegate.call(this, x, y, z, args);
});
return G__11361;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11346.call(this);
case  1 :
return ep1__11348.call(this,x);
case  2 :
return ep1__11349.call(this,x,y);
case  3 :
return ep1__11350.call(this,x,y,z);
default:
return ep1__11351.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11351.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11339 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11433 = (function (){
return true;
});
var ep2__11434 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11238 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11238))
{return p2.call(null,x);
} else
{return and__3546__auto____11238;
}
})());
});
var ep2__11435 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11240 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11240))
{var and__3546__auto____11243 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11243))
{var and__3546__auto____11246 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11246))
{return p2.call(null,y);
} else
{return and__3546__auto____11246;
}
} else
{return and__3546__auto____11243;
}
} else
{return and__3546__auto____11240;
}
})());
});
var ep2__11436 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11249 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11249))
{var and__3546__auto____11250 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11250))
{var and__3546__auto____11251 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11251))
{var and__3546__auto____11252 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11252))
{var and__3546__auto____11259 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11259))
{return p2.call(null,z);
} else
{return and__3546__auto____11259;
}
} else
{return and__3546__auto____11252;
}
} else
{return and__3546__auto____11251;
}
} else
{return and__3546__auto____11250;
}
} else
{return and__3546__auto____11249;
}
})());
});
var ep2__11437 = (function() { 
var G__11439__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11266 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11266))
{return cljs.core.every_QMARK_.call(null,(function (p1__11167_SHARP_){
var and__3546__auto____11267 = p1.call(null,p1__11167_SHARP_);

if(cljs.core.truth_(and__3546__auto____11267))
{return p2.call(null,p1__11167_SHARP_);
} else
{return and__3546__auto____11267;
}
}),args);
} else
{return and__3546__auto____11266;
}
})());
};
var G__11439 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11439__delegate.call(this, x, y, z, args);
};
G__11439.cljs$lang$maxFixedArity = 3;
G__11439.cljs$lang$applyTo = (function (arglist__11443){
var x = cljs.core.first(arglist__11443);
var y = cljs.core.first(cljs.core.next(arglist__11443));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11443)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11443)));
return G__11439__delegate.call(this, x, y, z, args);
});
return G__11439;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11433.call(this);
case  1 :
return ep2__11434.call(this,x);
case  2 :
return ep2__11435.call(this,x,y);
case  3 :
return ep2__11436.call(this,x,y,z);
default:
return ep2__11437.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11437.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11340 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11444 = (function (){
return true;
});
var ep3__11445 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11271 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11271))
{var and__3546__auto____11274 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11274))
{return p3.call(null,x);
} else
{return and__3546__auto____11274;
}
} else
{return and__3546__auto____11271;
}
})());
});
var ep3__11446 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11277 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11277))
{var and__3546__auto____11278 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11278))
{var and__3546__auto____11279 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11279))
{var and__3546__auto____11286 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11286))
{var and__3546__auto____11287 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11287))
{return p3.call(null,y);
} else
{return and__3546__auto____11287;
}
} else
{return and__3546__auto____11286;
}
} else
{return and__3546__auto____11279;
}
} else
{return and__3546__auto____11278;
}
} else
{return and__3546__auto____11277;
}
})());
});
var ep3__11447 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11288 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11288))
{var and__3546__auto____11289 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11289))
{var and__3546__auto____11291 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11291))
{var and__3546__auto____11294 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11294))
{var and__3546__auto____11295 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11295))
{var and__3546__auto____11298 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11298))
{var and__3546__auto____11301 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11301))
{var and__3546__auto____11303 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11303))
{return p3.call(null,z);
} else
{return and__3546__auto____11303;
}
} else
{return and__3546__auto____11301;
}
} else
{return and__3546__auto____11298;
}
} else
{return and__3546__auto____11295;
}
} else
{return and__3546__auto____11294;
}
} else
{return and__3546__auto____11291;
}
} else
{return and__3546__auto____11289;
}
} else
{return and__3546__auto____11288;
}
})());
});
var ep3__11448 = (function() { 
var G__11450__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11308 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11308))
{return cljs.core.every_QMARK_.call(null,(function (p1__11171_SHARP_){
var and__3546__auto____11312 = p1.call(null,p1__11171_SHARP_);

if(cljs.core.truth_(and__3546__auto____11312))
{var and__3546__auto____11313 = p2.call(null,p1__11171_SHARP_);

if(cljs.core.truth_(and__3546__auto____11313))
{return p3.call(null,p1__11171_SHARP_);
} else
{return and__3546__auto____11313;
}
} else
{return and__3546__auto____11312;
}
}),args);
} else
{return and__3546__auto____11308;
}
})());
};
var G__11450 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11450__delegate.call(this, x, y, z, args);
};
G__11450.cljs$lang$maxFixedArity = 3;
G__11450.cljs$lang$applyTo = (function (arglist__11454){
var x = cljs.core.first(arglist__11454);
var y = cljs.core.first(cljs.core.next(arglist__11454));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11454)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11454)));
return G__11450__delegate.call(this, x, y, z, args);
});
return G__11450;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11444.call(this);
case  1 :
return ep3__11445.call(this,x);
case  2 :
return ep3__11446.call(this,x,y);
case  3 :
return ep3__11447.call(this,x,y,z);
default:
return ep3__11448.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11448.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11342 = (function() { 
var G__11455__delegate = function (p1,p2,p3,ps){
var ps__11315 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11456 = (function (){
return true;
});
var epn__11457 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11172_SHARP_){
return p1__11172_SHARP_.call(null,x);
}),ps__11315);
});
var epn__11458 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11175_SHARP_){
var and__3546__auto____11326 = p1__11175_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11326))
{return p1__11175_SHARP_.call(null,y);
} else
{return and__3546__auto____11326;
}
}),ps__11315);
});
var epn__11459 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11180_SHARP_){
var and__3546__auto____11327 = p1__11180_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11327))
{var and__3546__auto____11328 = p1__11180_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11328))
{return p1__11180_SHARP_.call(null,z);
} else
{return and__3546__auto____11328;
}
} else
{return and__3546__auto____11327;
}
}),ps__11315);
});
var epn__11460 = (function() { 
var G__11462__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11331 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11331))
{return cljs.core.every_QMARK_.call(null,(function (p1__11183_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11183_SHARP_,args);
}),ps__11315);
} else
{return and__3546__auto____11331;
}
})());
};
var G__11462 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11462__delegate.call(this, x, y, z, args);
};
G__11462.cljs$lang$maxFixedArity = 3;
G__11462.cljs$lang$applyTo = (function (arglist__11463){
var x = cljs.core.first(arglist__11463);
var y = cljs.core.first(cljs.core.next(arglist__11463));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11463)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11463)));
return G__11462__delegate.call(this, x, y, z, args);
});
return G__11462;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11456.call(this);
case  1 :
return epn__11457.call(this,x);
case  2 :
return epn__11458.call(this,x,y);
case  3 :
return epn__11459.call(this,x,y,z);
default:
return epn__11460.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11460.cljs$lang$applyTo;
return epn;
})()
};
var G__11455 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11455__delegate.call(this, p1, p2, p3, ps);
};
G__11455.cljs$lang$maxFixedArity = 3;
G__11455.cljs$lang$applyTo = (function (arglist__11464){
var p1 = cljs.core.first(arglist__11464);
var p2 = cljs.core.first(cljs.core.next(arglist__11464));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11464)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11464)));
return G__11455__delegate.call(this, p1, p2, p3, ps);
});
return G__11455;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11338.call(this,p1);
case  2 :
return every_pred__11339.call(this,p1,p2);
case  3 :
return every_pred__11340.call(this,p1,p2,p3);
default:
return every_pred__11342.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11342.cljs$lang$applyTo;
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
var some_fn__11582 = (function (p){
return (function() {
var sp1 = null;
var sp1__11587 = (function (){
return null;
});
var sp1__11588 = (function (x){
return p.call(null,x);
});
var sp1__11589 = (function (x,y){
var or__3548__auto____11469 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11469))
{return or__3548__auto____11469;
} else
{return p.call(null,y);
}
});
var sp1__11590 = (function (x,y,z){
var or__3548__auto____11470 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11470))
{return or__3548__auto____11470;
} else
{var or__3548__auto____11473 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11473))
{return or__3548__auto____11473;
} else
{return p.call(null,z);
}
}
});
var sp1__11591 = (function() { 
var G__11599__delegate = function (x,y,z,args){
var or__3548__auto____11477 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11477))
{return or__3548__auto____11477;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11599 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11599__delegate.call(this, x, y, z, args);
};
G__11599.cljs$lang$maxFixedArity = 3;
G__11599.cljs$lang$applyTo = (function (arglist__11601){
var x = cljs.core.first(arglist__11601);
var y = cljs.core.first(cljs.core.next(arglist__11601));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11601)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11601)));
return G__11599__delegate.call(this, x, y, z, args);
});
return G__11599;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11587.call(this);
case  1 :
return sp1__11588.call(this,x);
case  2 :
return sp1__11589.call(this,x,y);
case  3 :
return sp1__11590.call(this,x,y,z);
default:
return sp1__11591.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11591.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11583 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11602 = (function (){
return null;
});
var sp2__11603 = (function (x){
var or__3548__auto____11482 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11482))
{return or__3548__auto____11482;
} else
{return p2.call(null,x);
}
});
var sp2__11604 = (function (x,y){
var or__3548__auto____11485 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11485))
{return or__3548__auto____11485;
} else
{var or__3548__auto____11491 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11491))
{return or__3548__auto____11491;
} else
{var or__3548__auto____11492 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11492))
{return or__3548__auto____11492;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11605 = (function (x,y,z){
var or__3548__auto____11495 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11495))
{return or__3548__auto____11495;
} else
{var or__3548__auto____11496 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11496))
{return or__3548__auto____11496;
} else
{var or__3548__auto____11499 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11499))
{return or__3548__auto____11499;
} else
{var or__3548__auto____11501 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11501))
{return or__3548__auto____11501;
} else
{var or__3548__auto____11507 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11507))
{return or__3548__auto____11507;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11606 = (function() { 
var G__11612__delegate = function (x,y,z,args){
var or__3548__auto____11516 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11516))
{return or__3548__auto____11516;
} else
{return cljs.core.some.call(null,(function (p1__11213_SHARP_){
var or__3548__auto____11517 = p1.call(null,p1__11213_SHARP_);

if(cljs.core.truth_(or__3548__auto____11517))
{return or__3548__auto____11517;
} else
{return p2.call(null,p1__11213_SHARP_);
}
}),args);
}
};
var G__11612 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11612__delegate.call(this, x, y, z, args);
};
G__11612.cljs$lang$maxFixedArity = 3;
G__11612.cljs$lang$applyTo = (function (arglist__11621){
var x = cljs.core.first(arglist__11621);
var y = cljs.core.first(cljs.core.next(arglist__11621));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11621)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11621)));
return G__11612__delegate.call(this, x, y, z, args);
});
return G__11612;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11602.call(this);
case  1 :
return sp2__11603.call(this,x);
case  2 :
return sp2__11604.call(this,x,y);
case  3 :
return sp2__11605.call(this,x,y,z);
default:
return sp2__11606.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11606.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11584 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11624 = (function (){
return null;
});
var sp3__11625 = (function (x){
var or__3548__auto____11519 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11519))
{return or__3548__auto____11519;
} else
{var or__3548__auto____11523 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11523))
{return or__3548__auto____11523;
} else
{return p3.call(null,x);
}
}
});
var sp3__11626 = (function (x,y){
var or__3548__auto____11526 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11526))
{return or__3548__auto____11526;
} else
{var or__3548__auto____11528 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11528))
{return or__3548__auto____11528;
} else
{var or__3548__auto____11530 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11530))
{return or__3548__auto____11530;
} else
{var or__3548__auto____11531 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11531))
{return or__3548__auto____11531;
} else
{var or__3548__auto____11532 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11532))
{return or__3548__auto____11532;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11627 = (function (x,y,z){
var or__3548__auto____11537 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11537))
{return or__3548__auto____11537;
} else
{var or__3548__auto____11541 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11541))
{return or__3548__auto____11541;
} else
{var or__3548__auto____11548 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11548))
{return or__3548__auto____11548;
} else
{var or__3548__auto____11550 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11550))
{return or__3548__auto____11550;
} else
{var or__3548__auto____11551 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11551))
{return or__3548__auto____11551;
} else
{var or__3548__auto____11552 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11552))
{return or__3548__auto____11552;
} else
{var or__3548__auto____11553 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11553))
{return or__3548__auto____11553;
} else
{var or__3548__auto____11554 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11554))
{return or__3548__auto____11554;
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
var sp3__11628 = (function() { 
var G__11640__delegate = function (x,y,z,args){
var or__3548__auto____11556 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11556))
{return or__3548__auto____11556;
} else
{return cljs.core.some.call(null,(function (p1__11216_SHARP_){
var or__3548__auto____11558 = p1.call(null,p1__11216_SHARP_);

if(cljs.core.truth_(or__3548__auto____11558))
{return or__3548__auto____11558;
} else
{var or__3548__auto____11559 = p2.call(null,p1__11216_SHARP_);

if(cljs.core.truth_(or__3548__auto____11559))
{return or__3548__auto____11559;
} else
{return p3.call(null,p1__11216_SHARP_);
}
}
}),args);
}
};
var G__11640 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11640__delegate.call(this, x, y, z, args);
};
G__11640.cljs$lang$maxFixedArity = 3;
G__11640.cljs$lang$applyTo = (function (arglist__11641){
var x = cljs.core.first(arglist__11641);
var y = cljs.core.first(cljs.core.next(arglist__11641));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11641)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11641)));
return G__11640__delegate.call(this, x, y, z, args);
});
return G__11640;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11624.call(this);
case  1 :
return sp3__11625.call(this,x);
case  2 :
return sp3__11626.call(this,x,y);
case  3 :
return sp3__11627.call(this,x,y,z);
default:
return sp3__11628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11628.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11585 = (function() { 
var G__11642__delegate = function (p1,p2,p3,ps){
var ps__11562 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11643 = (function (){
return null;
});
var spn__11644 = (function (x){
return cljs.core.some.call(null,(function (p1__11218_SHARP_){
return p1__11218_SHARP_.call(null,x);
}),ps__11562);
});
var spn__11645 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11219_SHARP_){
var or__3548__auto____11571 = p1__11219_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11571))
{return or__3548__auto____11571;
} else
{return p1__11219_SHARP_.call(null,y);
}
}),ps__11562);
});
var spn__11646 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11221_SHARP_){
var or__3548__auto____11573 = p1__11221_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11573))
{return or__3548__auto____11573;
} else
{var or__3548__auto____11574 = p1__11221_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11574))
{return or__3548__auto____11574;
} else
{return p1__11221_SHARP_.call(null,z);
}
}
}),ps__11562);
});
var spn__11647 = (function() { 
var G__11651__delegate = function (x,y,z,args){
var or__3548__auto____11576 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11576))
{return or__3548__auto____11576;
} else
{return cljs.core.some.call(null,(function (p1__11222_SHARP_){
return cljs.core.some.call(null,p1__11222_SHARP_,args);
}),ps__11562);
}
};
var G__11651 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11651__delegate.call(this, x, y, z, args);
};
G__11651.cljs$lang$maxFixedArity = 3;
G__11651.cljs$lang$applyTo = (function (arglist__11657){
var x = cljs.core.first(arglist__11657);
var y = cljs.core.first(cljs.core.next(arglist__11657));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11657)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11657)));
return G__11651__delegate.call(this, x, y, z, args);
});
return G__11651;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11643.call(this);
case  1 :
return spn__11644.call(this,x);
case  2 :
return spn__11645.call(this,x,y);
case  3 :
return spn__11646.call(this,x,y,z);
default:
return spn__11647.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11647.cljs$lang$applyTo;
return spn;
})()
};
var G__11642 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11642__delegate.call(this, p1, p2, p3, ps);
};
G__11642.cljs$lang$maxFixedArity = 3;
G__11642.cljs$lang$applyTo = (function (arglist__11661){
var p1 = cljs.core.first(arglist__11661);
var p2 = cljs.core.first(cljs.core.next(arglist__11661));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11661)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11661)));
return G__11642__delegate.call(this, p1, p2, p3, ps);
});
return G__11642;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11582.call(this,p1);
case  2 :
return some_fn__11583.call(this,p1,p2);
case  3 :
return some_fn__11584.call(this,p1,p2,p3);
default:
return some_fn__11585.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11585.cljs$lang$applyTo;
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
var map__11868 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11836 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11836))
{var s__11837 = temp__3698__auto____11836;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11837)),map.call(null,f,cljs.core.rest.call(null,s__11837)));
} else
{return null;
}
})));
});
var map__11869 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11841 = cljs.core.seq.call(null,c1);
var s2__11842 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11844 = s1__11841;

if(cljs.core.truth_(and__3546__auto____11844))
{return s2__11842;
} else
{return and__3546__auto____11844;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11841),cljs.core.first.call(null,s2__11842)),map.call(null,f,cljs.core.rest.call(null,s1__11841),cljs.core.rest.call(null,s2__11842)));
} else
{return null;
}
})));
});
var map__11870 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11852 = cljs.core.seq.call(null,c1);
var s2__11854 = cljs.core.seq.call(null,c2);
var s3__11855 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11856 = s1__11852;

if(cljs.core.truth_(and__3546__auto____11856))
{var and__3546__auto____11857 = s2__11854;

if(cljs.core.truth_(and__3546__auto____11857))
{return s3__11855;
} else
{return and__3546__auto____11857;
}
} else
{return and__3546__auto____11856;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11852),cljs.core.first.call(null,s2__11854),cljs.core.first.call(null,s3__11855)),map.call(null,f,cljs.core.rest.call(null,s1__11852),cljs.core.rest.call(null,s2__11854),cljs.core.rest.call(null,s3__11855)));
} else
{return null;
}
})));
});
var map__11871 = (function() { 
var G__11879__delegate = function (f,c1,c2,c3,colls){
var step__11865 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11863 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11863)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11863),step.call(null,map.call(null,cljs.core.rest,ss__11863)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11468_SHARP_){
return cljs.core.apply.call(null,f,p1__11468_SHARP_);
}),step__11865.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11879 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11879__delegate.call(this, f, c1, c2, c3, colls);
};
G__11879.cljs$lang$maxFixedArity = 4;
G__11879.cljs$lang$applyTo = (function (arglist__11883){
var f = cljs.core.first(arglist__11883);
var c1 = cljs.core.first(cljs.core.next(arglist__11883));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11883)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11883))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11883))));
return G__11879__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11879;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11868.call(this,f,c1);
case  3 :
return map__11869.call(this,f,c1,c2);
case  4 :
return map__11870.call(this,f,c1,c2,c3);
default:
return map__11871.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11871.cljs$lang$applyTo;
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
{var temp__3698__auto____11885 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11885))
{var s__11886 = temp__3698__auto____11885;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11886),take.call(null,(n - 1),cljs.core.rest.call(null,s__11886)));
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
var step__11895 = (function (n,coll){
while(true){
var s__11893 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11894 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11894))
{return s__11893;
} else
{return and__3546__auto____11894;
}
})()))
{{
var G__11898 = (n - 1);
var G__11900 = cljs.core.rest.call(null,s__11893);
n = G__11898;
coll = G__11900;
continue;
}
} else
{return s__11893;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11895.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11904 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11905 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11904.call(this,n);
case  2 :
return drop_last__11905.call(this,n,s);
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
var s__11911 = cljs.core.seq.call(null,coll);
var lead__11913 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11913))
{{
var G__11922 = cljs.core.next.call(null,s__11911);
var G__11923 = cljs.core.next.call(null,lead__11913);
s__11911 = G__11922;
lead__11913 = G__11923;
continue;
}
} else
{return s__11911;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11937 = (function (pred,coll){
while(true){
var s__11926 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11932 = s__11926;

if(cljs.core.truth_(and__3546__auto____11932))
{return pred.call(null,cljs.core.first.call(null,s__11926));
} else
{return and__3546__auto____11932;
}
})()))
{{
var G__11945 = pred;
var G__11947 = cljs.core.rest.call(null,s__11926);
pred = G__11945;
coll = G__11947;
continue;
}
} else
{return s__11926;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11937.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11953 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11953))
{var s__11954 = temp__3698__auto____11953;

return cljs.core.concat.call(null,s__11954,cycle.call(null,s__11954));
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
var repeat__11971 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11972 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11971.call(this,n);
case  2 :
return repeat__11972.call(this,n,x);
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
var repeatedly__11984 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11985 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11984.call(this,n);
case  2 :
return repeatedly__11985.call(this,n,f);
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
var interleave__12009 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11996 = cljs.core.seq.call(null,c1);
var s2__11999 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12000 = s1__11996;

if(cljs.core.truth_(and__3546__auto____12000))
{return s2__11999;
} else
{return and__3546__auto____12000;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11996),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11999),interleave.call(null,cljs.core.rest.call(null,s1__11996),cljs.core.rest.call(null,s2__11999))));
} else
{return null;
}
})));
});
var interleave__12010 = (function() { 
var G__12012__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12001 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12001)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12001),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12001)));
} else
{return null;
}
})));
};
var G__12012 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12012__delegate.call(this, c1, c2, colls);
};
G__12012.cljs$lang$maxFixedArity = 2;
G__12012.cljs$lang$applyTo = (function (arglist__12013){
var c1 = cljs.core.first(arglist__12013);
var c2 = cljs.core.first(cljs.core.next(arglist__12013));
var colls = cljs.core.rest(cljs.core.next(arglist__12013));
return G__12012__delegate.call(this, c1, c2, colls);
});
return G__12012;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12009.call(this,c1,c2);
default:
return interleave__12010.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12010.cljs$lang$applyTo;
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
var cat__12027 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12025 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12025))
{var coll__12026 = temp__3695__auto____12025;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12026),cat.call(null,cljs.core.rest.call(null,coll__12026),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12027.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12038 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12039 = (function() { 
var G__12041__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12041 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12041__delegate.call(this, f, coll, colls);
};
G__12041.cljs$lang$maxFixedArity = 2;
G__12041.cljs$lang$applyTo = (function (arglist__12042){
var f = cljs.core.first(arglist__12042);
var coll = cljs.core.first(cljs.core.next(arglist__12042));
var colls = cljs.core.rest(cljs.core.next(arglist__12042));
return G__12041__delegate.call(this, f, coll, colls);
});
return G__12041;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12038.call(this,f,coll);
default:
return mapcat__12039.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12039.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12043 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12043))
{var s__12044 = temp__3698__auto____12043;

var f__12045 = cljs.core.first.call(null,s__12044);
var r__12046 = cljs.core.rest.call(null,s__12044);

if(cljs.core.truth_(pred.call(null,f__12045)))
{return cljs.core.cons.call(null,f__12045,filter.call(null,pred,r__12046));
} else
{return filter.call(null,pred,r__12046);
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
var walk__12065 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12065.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12062_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12062_SHARP_));
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
var partition__12171 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12221 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12079 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12079))
{var s__12080 = temp__3698__auto____12079;

var p__12081 = cljs.core.take.call(null,n,s__12080);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12081))))
{return cljs.core.cons.call(null,p__12081,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12080)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12222 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12083 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12083))
{var s__12084 = temp__3698__auto____12083;

var p__12085 = cljs.core.take.call(null,n,s__12084);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12085))))
{return cljs.core.cons.call(null,p__12085,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12084)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12085,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12171.call(this,n,step);
case  3 :
return partition__12221.call(this,n,step,pad);
case  4 :
return partition__12222.call(this,n,step,pad,coll);
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
var get_in__12373 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12374 = (function (m,ks,not_found){
var sentinel__12367 = cljs.core.lookup_sentinel;
var m__12368 = m;
var ks__12369 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12369))
{var m__12370 = cljs.core.get.call(null,m__12368,cljs.core.first.call(null,ks__12369),sentinel__12367);

if(cljs.core.truth_((sentinel__12367 === m__12370)))
{return not_found;
} else
{{
var G__12377 = sentinel__12367;
var G__12378 = m__12370;
var G__12379 = cljs.core.next.call(null,ks__12369);
sentinel__12367 = G__12377;
m__12368 = G__12378;
ks__12369 = G__12379;
continue;
}
}
} else
{return m__12368;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12373.call(this,m,ks);
case  3 :
return get_in__12374.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12380,v){
var vec__12381__12382 = p__12380;
var k__12383 = cljs.core.nth.call(null,vec__12381__12382,0,null);
var ks__12384 = cljs.core.nthnext.call(null,vec__12381__12382,1);

if(cljs.core.truth_(ks__12384))
{return cljs.core.assoc.call(null,m,k__12383,assoc_in.call(null,cljs.core.get.call(null,m,k__12383),ks__12384,v));
} else
{return cljs.core.assoc.call(null,m,k__12383,v);
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
var update_in__delegate = function (m,p__12394,f,args){
var vec__12396__12397 = p__12394;
var k__12398 = cljs.core.nth.call(null,vec__12396__12397,0,null);
var ks__12399 = cljs.core.nthnext.call(null,vec__12396__12397,1);

if(cljs.core.truth_(ks__12399))
{return cljs.core.assoc.call(null,m,k__12398,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12398),ks__12399,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12398,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12398),args));
}
};
var update_in = function (m,p__12394,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12394, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12477){
var m = cljs.core.first(arglist__12477);
var p__12394 = cljs.core.first(cljs.core.next(arglist__12477));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12477)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12477)));
return update_in__delegate.call(this, m, p__12394, f, args);
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
var this__12484 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12578 = null;
var G__12578__12580 = (function (coll,k){
var this__12486 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12578__12581 = (function (coll,k,not_found){
var this__12487 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12578 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12578__12580.call(this,coll,k);
case  3 :
return G__12578__12581.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12578;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12489 = this;
var new_array__12491 = cljs.core.aclone.call(null,this__12489.array);

(new_array__12491[k] = v);
return (new cljs.core.Vector(this__12489.meta,new_array__12491));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12591 = null;
var G__12591__12593 = (function (coll,k){
var this__12492 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12591__12594 = (function (coll,k,not_found){
var this__12493 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12591 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12591__12593.call(this,coll,k);
case  3 :
return G__12591__12594.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12591;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12498 = this;
var new_array__12499 = cljs.core.aclone.call(null,this__12498.array);

new_array__12499.push(o);
return (new cljs.core.Vector(this__12498.meta,new_array__12499));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12603 = null;
var G__12603__12604 = (function (v,f){
var this__12501 = this;
return cljs.core.ci_reduce.call(null,this__12501.array,f);
});
var G__12603__12605 = (function (v,f,start){
var this__12502 = this;
return cljs.core.ci_reduce.call(null,this__12502.array,f,start);
});
G__12603 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12603__12604.call(this,v,f);
case  3 :
return G__12603__12605.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12603;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12504 = this;
if(cljs.core.truth_((this__12504.array.length > 0)))
{var vector_seq__12541 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12504.array.length)))
{return cljs.core.cons.call(null,(this__12504.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12541.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12543 = this;
return this__12543.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12545 = this;
var count__12548 = this__12545.array.length;

if(cljs.core.truth_((count__12548 > 0)))
{return (this__12545.array[(count__12548 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12550 = this;
if(cljs.core.truth_((this__12550.array.length > 0)))
{var new_array__12553 = cljs.core.aclone.call(null,this__12550.array);

new_array__12553.pop();
return (new cljs.core.Vector(this__12550.meta,new_array__12553));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12555 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12557 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12560 = this;
return (new cljs.core.Vector(meta,this__12560.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12562 = this;
return this__12562.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12627 = null;
var G__12627__12628 = (function (coll,n){
var this__12563 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12564 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12564))
{return (n < this__12563.array.length);
} else
{return and__3546__auto____12564;
}
})()))
{return (this__12563.array[n]);
} else
{return null;
}
});
var G__12627__12629 = (function (coll,n,not_found){
var this__12565 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12567 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12567))
{return (n < this__12565.array.length);
} else
{return and__3546__auto____12567;
}
})()))
{return (this__12565.array[n]);
} else
{return not_found;
}
});
G__12627 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12627__12628.call(this,coll,n);
case  3 :
return G__12627__12629.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12627;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12570 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12570.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12657){
var args = cljs.core.seq( arglist__12657 );;
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
var this__12667 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12765 = null;
var G__12765__12766 = (function (coll,k){
var this__12671 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12765__12767 = (function (coll,k,not_found){
var this__12672 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12765 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12765__12766.call(this,coll,k);
case  3 :
return G__12765__12767.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12765;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12673 = this;
var v_pos__12680 = (this__12673.start + key);

return (new cljs.core.Subvec(this__12673.meta,cljs.core._assoc.call(null,this__12673.v,v_pos__12680,val),this__12673.start,((this__12673.end > (v_pos__12680 + 1)) ? this__12673.end : (v_pos__12680 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12769 = null;
var G__12769__12770 = (function (coll,k){
var this__12684 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12769__12771 = (function (coll,k,not_found){
var this__12685 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12769 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12769__12770.call(this,coll,k);
case  3 :
return G__12769__12771.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12769;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12692 = this;
return (new cljs.core.Subvec(this__12692.meta,cljs.core._assoc_n.call(null,this__12692.v,this__12692.end,o),this__12692.start,(this__12692.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12773 = null;
var G__12773__12774 = (function (coll,f){
var this__12694 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12773__12775 = (function (coll,f,start){
var this__12695 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12773 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12773__12774.call(this,coll,f);
case  3 :
return G__12773__12775.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12773;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12698 = this;
var subvec_seq__12700 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12698.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12698.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12700.call(null,this__12698.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12701 = this;
return (this__12701.end - this__12701.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12704 = this;
return cljs.core._nth.call(null,this__12704.v,(this__12704.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12706 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12706.start,this__12706.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12706.meta,this__12706.v,this__12706.start,(this__12706.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12712 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12714 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12716 = this;
return (new cljs.core.Subvec(meta,this__12716.v,this__12716.start,this__12716.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12719 = this;
return this__12719.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12859 = null;
var G__12859__12860 = (function (coll,n){
var this__12720 = this;
return cljs.core._nth.call(null,this__12720.v,(this__12720.start + n));
});
var G__12859__12861 = (function (coll,n,not_found){
var this__12762 = this;
return cljs.core._nth.call(null,this__12762.v,(this__12762.start + n),not_found);
});
G__12859 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12859__12860.call(this,coll,n);
case  3 :
return G__12859__12861.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12859;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12764 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12764.meta);
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
var subvec__12865 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12866 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12865.call(this,v,start);
case  3 :
return subvec__12866.call(this,v,start,end);
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
var this__12878 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12879 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12880 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12884 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12884.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12908 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12909 = this;
return cljs.core._first.call(null,this__12909.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12910 = this;
var temp__3695__auto____12911 = cljs.core.next.call(null,this__12910.front);

if(cljs.core.truth_(temp__3695__auto____12911))
{var f1__12912 = temp__3695__auto____12911;

return (new cljs.core.PersistentQueueSeq(this__12910.meta,f1__12912,this__12910.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12910.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12910.meta,this__12910.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12915 = this;
return this__12915.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12917 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12917.front,this__12917.rear));
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
var this__12933 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12935 = this;
if(cljs.core.truth_(this__12935.front))
{return (new cljs.core.PersistentQueue(this__12935.meta,(this__12935.count + 1),this__12935.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12938 = this__12935.rear;

if(cljs.core.truth_(or__3548__auto____12938))
{return or__3548__auto____12938;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12935.meta,(this__12935.count + 1),cljs.core.conj.call(null,this__12935.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12945 = this;
var rear__12946 = cljs.core.seq.call(null,this__12945.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12947 = this__12945.front;

if(cljs.core.truth_(or__3548__auto____12947))
{return or__3548__auto____12947;
} else
{return rear__12946;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12945.front,cljs.core.seq.call(null,rear__12946)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12948 = this;
return this__12948.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12949 = this;
return cljs.core._first.call(null,this__12949.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12950 = this;
if(cljs.core.truth_(this__12950.front))
{var temp__3695__auto____12951 = cljs.core.next.call(null,this__12950.front);

if(cljs.core.truth_(temp__3695__auto____12951))
{var f1__12952 = temp__3695__auto____12951;

return (new cljs.core.PersistentQueue(this__12950.meta,(this__12950.count - 1),f1__12952,this__12950.rear));
} else
{return (new cljs.core.PersistentQueue(this__12950.meta,(this__12950.count - 1),cljs.core.seq.call(null,this__12950.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12954 = this;
return cljs.core.first.call(null,this__12954.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12956 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12958 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12961 = this;
return (new cljs.core.PersistentQueue(meta,this__12961.count,this__12961.front,this__12961.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12963 = this;
return this__12963.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12965 = this;
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
var this__12984 = this;
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
var len__13007 = array.length;

var i__13008 = 0;

while(true){
if(cljs.core.truth_((i__13008 < len__13007)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__13008]))))
{return i__13008;
} else
{{
var G__13015 = (i__13008 + incr);
i__13008 = G__13015;
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
var obj_map_contains_key_QMARK___13029 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___13030 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____13025 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13025))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13025;
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
return obj_map_contains_key_QMARK___13029.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___13030.call(this,k,strobj,true_val,false_val);
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
var this__13057 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13123 = null;
var G__13123__13124 = (function (coll,k){
var this__13061 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13123__13125 = (function (coll,k,not_found){
var this__13062 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13062.strobj,(this__13062.strobj[k]),not_found);
});
G__13123 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13123__13124.call(this,coll,k);
case  3 :
return G__13123__13125.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13123;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13065 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13071 = goog.object.clone.call(null,this__13065.strobj);
var overwrite_QMARK___13072 = new_strobj__13071.hasOwnProperty(k);

(new_strobj__13071[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13072))
{return (new cljs.core.ObjMap(this__13065.meta,this__13065.keys,new_strobj__13071));
} else
{var new_keys__13074 = cljs.core.aclone.call(null,this__13065.keys);

new_keys__13074.push(k);
return (new cljs.core.ObjMap(this__13065.meta,new_keys__13074,new_strobj__13071));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13065.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13079 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13079.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13142 = null;
var G__13142__13143 = (function (coll,k){
var this__13083 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13142__13144 = (function (coll,k,not_found){
var this__13091 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13142 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13142__13143.call(this,coll,k);
case  3 :
return G__13142__13144.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13142;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13092 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13097 = this;
if(cljs.core.truth_((this__13097.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__13039_SHARP_){
return cljs.core.vector.call(null,p1__13039_SHARP_,(this__13097.strobj[p1__13039_SHARP_]));
}),this__13097.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13102 = this;
return this__13102.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13104 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13106 = this;
return (new cljs.core.ObjMap(meta,this__13106.keys,this__13106.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13109 = this;
return this__13109.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13113 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13113.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13114 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13115 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13115))
{return this__13114.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13115;
}
})()))
{var new_keys__13116 = cljs.core.aclone.call(null,this__13114.keys);
var new_strobj__13117 = goog.object.clone.call(null,this__13114.strobj);

new_keys__13116.splice(cljs.core.scan_array.call(null,1,k,new_keys__13116),1);
cljs.core.js_delete.call(null,new_strobj__13117,k);
return (new cljs.core.ObjMap(this__13114.meta,new_keys__13116,new_strobj__13117));
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
var this__13258 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13329 = null;
var G__13329__13330 = (function (coll,k){
var this__13261 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13329__13331 = (function (coll,k,not_found){
var this__13263 = this;
var bucket__13267 = (this__13263.hashobj[cljs.core.hash.call(null,k)]);
var i__13268 = (cljs.core.truth_(bucket__13267)?cljs.core.scan_array.call(null,2,k,bucket__13267):null);

if(cljs.core.truth_(i__13268))
{return (bucket__13267[(i__13268 + 1)]);
} else
{return not_found;
}
});
G__13329 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13329__13330.call(this,coll,k);
case  3 :
return G__13329__13331.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13329;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13273 = this;
var h__13275 = cljs.core.hash.call(null,k);
var bucket__13276 = (this__13273.hashobj[h__13275]);

if(cljs.core.truth_(bucket__13276))
{var new_bucket__13277 = cljs.core.aclone.call(null,bucket__13276);
var new_hashobj__13278 = goog.object.clone.call(null,this__13273.hashobj);

(new_hashobj__13278[h__13275] = new_bucket__13277);
var temp__3695__auto____13279 = cljs.core.scan_array.call(null,2,k,new_bucket__13277);

if(cljs.core.truth_(temp__3695__auto____13279))
{var i__13280 = temp__3695__auto____13279;

(new_bucket__13277[(i__13280 + 1)] = v);
return (new cljs.core.HashMap(this__13273.meta,this__13273.count,new_hashobj__13278));
} else
{new_bucket__13277.push(k,v);
return (new cljs.core.HashMap(this__13273.meta,(this__13273.count + 1),new_hashobj__13278));
}
} else
{var new_hashobj__13283 = goog.object.clone.call(null,this__13273.hashobj);

(new_hashobj__13283[h__13275] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13273.meta,(this__13273.count + 1),new_hashobj__13283));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13286 = this;
var bucket__13287 = (this__13286.hashobj[cljs.core.hash.call(null,k)]);
var i__13289 = (cljs.core.truth_(bucket__13287)?cljs.core.scan_array.call(null,2,k,bucket__13287):null);

if(cljs.core.truth_(i__13289))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13344 = null;
var G__13344__13345 = (function (coll,k){
var this__13290 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13344__13346 = (function (coll,k,not_found){
var this__13291 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13344 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13344__13345.call(this,coll,k);
case  3 :
return G__13344__13346.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13344;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13292 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13293 = this;
if(cljs.core.truth_((this__13293.count > 0)))
{var hashes__13298 = cljs.core.js_keys.call(null,this__13293.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13247_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13293.hashobj[p1__13247_SHARP_])));
}),hashes__13298);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13303 = this;
return this__13303.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13305 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13308 = this;
return (new cljs.core.HashMap(meta,this__13308.count,this__13308.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13309 = this;
return this__13309.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13310 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13310.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13315 = this;
var h__13316 = cljs.core.hash.call(null,k);
var bucket__13317 = (this__13315.hashobj[h__13316]);
var i__13318 = (cljs.core.truth_(bucket__13317)?cljs.core.scan_array.call(null,2,k,bucket__13317):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13318)))
{return coll;
} else
{var new_hashobj__13320 = goog.object.clone.call(null,this__13315.hashobj);

if(cljs.core.truth_((3 > bucket__13317.length)))
{cljs.core.js_delete.call(null,new_hashobj__13320,h__13316);
} else
{var new_bucket__13325 = cljs.core.aclone.call(null,bucket__13317);

new_bucket__13325.splice(i__13318,2);
(new_hashobj__13320[h__13316] = new_bucket__13325);
}
return (new cljs.core.HashMap(this__13315.meta,(this__13315.count - 1),new_hashobj__13320));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13377 = ks.length;

var i__13378 = 0;
var out__13380 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13378 < len__13377)))
{{
var G__13407 = (i__13378 + 1);
var G__13408 = cljs.core.assoc.call(null,out__13380,(ks[i__13378]),(vs[i__13378]));
i__13378 = G__13407;
out__13380 = G__13408;
continue;
}
} else
{return out__13380;
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
var in$__13414 = cljs.core.seq.call(null,keyvals);
var out__13415 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13414))
{{
var G__13420 = cljs.core.nnext.call(null,in$__13414);
var G__13421 = cljs.core.assoc.call(null,out__13415,cljs.core.first.call(null,in$__13414),cljs.core.second.call(null,in$__13414));
in$__13414 = G__13420;
out__13415 = G__13421;
continue;
}
} else
{return out__13415;
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
hash_map.cljs$lang$applyTo = (function (arglist__13424){
var keyvals = cljs.core.seq( arglist__13424 );;
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
{return cljs.core.reduce.call(null,(function (p1__13425_SHARP_,p2__13426_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13428 = p1__13425_SHARP_;

if(cljs.core.truth_(or__3548__auto____13428))
{return or__3548__auto____13428;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13426_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13437){
var maps = cljs.core.seq( arglist__13437 );;
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
{var merge_entry__13448 = (function (m,e){
var k__13442 = cljs.core.first.call(null,e);
var v__13444 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13442)))
{return cljs.core.assoc.call(null,m,k__13442,f.call(null,cljs.core.get.call(null,m,k__13442),v__13444));
} else
{return cljs.core.assoc.call(null,m,k__13442,v__13444);
}
});
var merge2__13452 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13448,(function (){var or__3548__auto____13450 = m1;

if(cljs.core.truth_(or__3548__auto____13450))
{return or__3548__auto____13450;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13452,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13462){
var f = cljs.core.first(arglist__13462);
var maps = cljs.core.rest(arglist__13462);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13473 = cljs.core.ObjMap.fromObject([],{});
var keys__13475 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13475))
{var key__13480 = cljs.core.first.call(null,keys__13475);
var entry__13481 = cljs.core.get.call(null,map,key__13480,"﷐'user/not-found");

{
var G__13484 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13481,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13473,key__13480,entry__13481):ret__13473);
var G__13485 = cljs.core.next.call(null,keys__13475);
ret__13473 = G__13484;
keys__13475 = G__13485;
continue;
}
} else
{return ret__13473;
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
var this__13494 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13524 = null;
var G__13524__13525 = (function (coll,v){
var this__13495 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13524__13526 = (function (coll,v,not_found){
var this__13496 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13496.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13524 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13524__13525.call(this,coll,v);
case  3 :
return G__13524__13526.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13524;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13531 = null;
var G__13531__13533 = (function (coll,k){
var this__13497 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13531__13535 = (function (coll,k,not_found){
var this__13500 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13531 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13531__13533.call(this,coll,k);
case  3 :
return G__13531__13535.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13531;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13503 = this;
return (new cljs.core.Set(this__13503.meta,cljs.core.assoc.call(null,this__13503.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13505 = this;
return cljs.core.keys.call(null,this__13505.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13506 = this;
return (new cljs.core.Set(this__13506.meta,cljs.core.dissoc.call(null,this__13506.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13509 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13511 = this;
var and__3546__auto____13513 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13513))
{var and__3546__auto____13515 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13515))
{return cljs.core.every_QMARK_.call(null,(function (p1__13466_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13466_SHARP_);
}),other);
} else
{return and__3546__auto____13515;
}
} else
{return and__3546__auto____13513;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13516 = this;
return (new cljs.core.Set(meta,this__13516.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13517 = this;
return this__13517.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13518 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13518.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13569 = cljs.core.seq.call(null,coll);
var out__13570 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13569))))
{{
var G__13602 = cljs.core.rest.call(null,in$__13569);
var G__13603 = cljs.core.conj.call(null,out__13570,cljs.core.first.call(null,in$__13569));
in$__13569 = G__13602;
out__13570 = G__13603;
continue;
}
} else
{return out__13570;
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
{var n__13605 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13608 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13608))
{var e__13610 = temp__3695__auto____13608;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13610));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13605,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13564_SHARP_){
var temp__3695__auto____13612 = cljs.core.find.call(null,smap,p1__13564_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13612))
{var e__13613 = temp__3695__auto____13612;

return cljs.core.second.call(null,e__13613);
} else
{return p1__13564_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13629 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13619,seen){
while(true){
var vec__13620__13621 = p__13619;
var f__13622 = cljs.core.nth.call(null,vec__13620__13621,0,null);
var xs__13623 = vec__13620__13621;

var temp__3698__auto____13624 = cljs.core.seq.call(null,xs__13623);

if(cljs.core.truth_(temp__3698__auto____13624))
{var s__13626 = temp__3698__auto____13624;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13622)))
{{
var G__13634 = cljs.core.rest.call(null,s__13626);
var G__13635 = seen;
p__13619 = G__13634;
seen = G__13635;
continue;
}
} else
{return cljs.core.cons.call(null,f__13622,step.call(null,cljs.core.rest.call(null,s__13626),cljs.core.conj.call(null,seen,f__13622)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13629.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13641 = cljs.core.Vector.fromArray([]);
var s__13642 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13642)))
{{
var G__13643 = cljs.core.conj.call(null,ret__13641,cljs.core.first.call(null,s__13642));
var G__13644 = cljs.core.next.call(null,s__13642);
ret__13641 = G__13643;
s__13642 = G__13644;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13641);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13646 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13646))
{return or__3548__auto____13646;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13647 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13647 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13647 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13660 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13660))
{return or__3548__auto____13660;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13665 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13665 > -1)))
{return cljs.core.subs.call(null,x,2,i__13665);
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
var map__13687 = cljs.core.ObjMap.fromObject([],{});
var ks__13688 = cljs.core.seq.call(null,keys);
var vs__13690 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13696 = ks__13688;

if(cljs.core.truth_(and__3546__auto____13696))
{return vs__13690;
} else
{return and__3546__auto____13696;
}
})()))
{{
var G__13756 = cljs.core.assoc.call(null,map__13687,cljs.core.first.call(null,ks__13688),cljs.core.first.call(null,vs__13690));
var G__13757 = cljs.core.next.call(null,ks__13688);
var G__13758 = cljs.core.next.call(null,vs__13690);
map__13687 = G__13756;
ks__13688 = G__13757;
vs__13690 = G__13758;
continue;
}
} else
{return map__13687;
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
var max_key__13766 = (function (k,x){
return x;
});
var max_key__13767 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13768 = (function() { 
var G__13772__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13682_SHARP_,p2__13683_SHARP_){
return max_key.call(null,k,p1__13682_SHARP_,p2__13683_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13772 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13772__delegate.call(this, k, x, y, more);
};
G__13772.cljs$lang$maxFixedArity = 3;
G__13772.cljs$lang$applyTo = (function (arglist__13773){
var k = cljs.core.first(arglist__13773);
var x = cljs.core.first(cljs.core.next(arglist__13773));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13773)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13773)));
return G__13772__delegate.call(this, k, x, y, more);
});
return G__13772;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13766.call(this,k,x);
case  3 :
return max_key__13767.call(this,k,x,y);
default:
return max_key__13768.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13768.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13781 = (function (k,x){
return x;
});
var min_key__13782 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13783 = (function() { 
var G__13786__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13760_SHARP_,p2__13761_SHARP_){
return min_key.call(null,k,p1__13760_SHARP_,p2__13761_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13786 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13786__delegate.call(this, k, x, y, more);
};
G__13786.cljs$lang$maxFixedArity = 3;
G__13786.cljs$lang$applyTo = (function (arglist__13806){
var k = cljs.core.first(arglist__13806);
var x = cljs.core.first(cljs.core.next(arglist__13806));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13806)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13806)));
return G__13786__delegate.call(this, k, x, y, more);
});
return G__13786;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13781.call(this,k,x);
case  3 :
return min_key__13782.call(this,k,x,y);
default:
return min_key__13783.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13783.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13816 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13817 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13809 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13809))
{var s__13810 = temp__3698__auto____13809;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13810),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13810)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13816.call(this,n,step);
case  3 :
return partition_all__13817.call(this,n,step,coll);
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
var temp__3698__auto____13835 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13835))
{var s__13836 = temp__3698__auto____13835;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13836))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13836),take_while.call(null,pred,cljs.core.rest.call(null,s__13836)));
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
var this__13859 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13865 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13908 = null;
var G__13908__13909 = (function (rng,f){
var this__13866 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13908__13910 = (function (rng,f,s){
var this__13867 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13908 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13908__13909.call(this,rng,f);
case  3 :
return G__13908__13910.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13908;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13868 = this;
var comp__13870 = (cljs.core.truth_((this__13868.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13870.call(null,this__13868.start,this__13868.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13872 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13872.end - this__13872.start) / this__13872.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13873 = this;
return this__13873.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13874 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13874.meta,(this__13874.start + this__13874.step),this__13874.end,this__13874.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13883 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13884 = this;
return (new cljs.core.Range(meta,this__13884.start,this__13884.end,this__13884.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13885 = this;
return this__13885.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13953 = null;
var G__13953__13954 = (function (rng,n){
var this__13887 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13887.start + (n * this__13887.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13890 = (this__13887.start > this__13887.end);

if(cljs.core.truth_(and__3546__auto____13890))
{return cljs.core._EQ_.call(null,this__13887.step,0);
} else
{return and__3546__auto____13890;
}
})()))
{return this__13887.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13953__13956 = (function (rng,n,not_found){
var this__13892 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13892.start + (n * this__13892.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13894 = (this__13892.start > this__13892.end);

if(cljs.core.truth_(and__3546__auto____13894))
{return cljs.core._EQ_.call(null,this__13892.step,0);
} else
{return and__3546__auto____13894;
}
})()))
{return this__13892.start;
} else
{return not_found;
}
}
});
G__13953 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13953__13954.call(this,rng,n);
case  3 :
return G__13953__13956.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13953;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13896 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13896.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13989 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13990 = (function (end){
return range.call(null,0,end,1);
});
var range__13992 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13993 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13989.call(this);
case  1 :
return range__13990.call(this,start);
case  2 :
return range__13992.call(this,start,end);
case  3 :
return range__13993.call(this,start,end,step);
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
var temp__3698__auto____14004 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14004))
{var s__14009 = temp__3698__auto____14004;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14009),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14009)));
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
var temp__3698__auto____14025 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14025))
{var s__14026 = temp__3698__auto____14025;

var fst__14027 = cljs.core.first.call(null,s__14026);
var fv__14028 = f.call(null,fst__14027);
var run__14029 = cljs.core.cons.call(null,fst__14027,cljs.core.take_while.call(null,(function (p1__14012_SHARP_){
return cljs.core._EQ_.call(null,fv__14028,f.call(null,p1__14012_SHARP_));
}),cljs.core.next.call(null,s__14026)));

return cljs.core.cons.call(null,run__14029,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14029),s__14026))));
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
var reductions__14069 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14060 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14060))
{var s__14062 = temp__3695__auto____14060;

return reductions.call(null,f,cljs.core.first.call(null,s__14062),cljs.core.rest.call(null,s__14062));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14070 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14067 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14067))
{var s__14068 = temp__3698__auto____14067;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14068)),cljs.core.rest.call(null,s__14068));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14069.call(this,f,init);
case  3 :
return reductions__14070.call(this,f,init,coll);
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
var juxt__14170 = (function (f){
return (function() {
var G__14175 = null;
var G__14175__14176 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14175__14177 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14175__14178 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14175__14179 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14175__14180 = (function() { 
var G__14185__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14185 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14185__delegate.call(this, x, y, z, args);
};
G__14185.cljs$lang$maxFixedArity = 3;
G__14185.cljs$lang$applyTo = (function (arglist__14191){
var x = cljs.core.first(arglist__14191);
var y = cljs.core.first(cljs.core.next(arglist__14191));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14191)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14191)));
return G__14185__delegate.call(this, x, y, z, args);
});
return G__14185;
})()
;
G__14175 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14175__14176.call(this);
case  1 :
return G__14175__14177.call(this,x);
case  2 :
return G__14175__14178.call(this,x,y);
case  3 :
return G__14175__14179.call(this,x,y,z);
default:
return G__14175__14180.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14175.cljs$lang$maxFixedArity = 3;
G__14175.cljs$lang$applyTo = G__14175__14180.cljs$lang$applyTo;
return G__14175;
})()
});
var juxt__14171 = (function (f,g){
return (function() {
var G__14193 = null;
var G__14193__14194 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14193__14195 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14193__14196 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14193__14197 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14193__14198 = (function() { 
var G__14204__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14204 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14204__delegate.call(this, x, y, z, args);
};
G__14204.cljs$lang$maxFixedArity = 3;
G__14204.cljs$lang$applyTo = (function (arglist__14206){
var x = cljs.core.first(arglist__14206);
var y = cljs.core.first(cljs.core.next(arglist__14206));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14206)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14206)));
return G__14204__delegate.call(this, x, y, z, args);
});
return G__14204;
})()
;
G__14193 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14193__14194.call(this);
case  1 :
return G__14193__14195.call(this,x);
case  2 :
return G__14193__14196.call(this,x,y);
case  3 :
return G__14193__14197.call(this,x,y,z);
default:
return G__14193__14198.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14193.cljs$lang$maxFixedArity = 3;
G__14193.cljs$lang$applyTo = G__14193__14198.cljs$lang$applyTo;
return G__14193;
})()
});
var juxt__14172 = (function (f,g,h){
return (function() {
var G__14228 = null;
var G__14228__14230 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14228__14231 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14228__14232 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14228__14233 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14228__14234 = (function() { 
var G__14238__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14238 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14238__delegate.call(this, x, y, z, args);
};
G__14238.cljs$lang$maxFixedArity = 3;
G__14238.cljs$lang$applyTo = (function (arglist__14241){
var x = cljs.core.first(arglist__14241);
var y = cljs.core.first(cljs.core.next(arglist__14241));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14241)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14241)));
return G__14238__delegate.call(this, x, y, z, args);
});
return G__14238;
})()
;
G__14228 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14228__14230.call(this);
case  1 :
return G__14228__14231.call(this,x);
case  2 :
return G__14228__14232.call(this,x,y);
case  3 :
return G__14228__14233.call(this,x,y,z);
default:
return G__14228__14234.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14228.cljs$lang$maxFixedArity = 3;
G__14228.cljs$lang$applyTo = G__14228__14234.cljs$lang$applyTo;
return G__14228;
})()
});
var juxt__14173 = (function() { 
var G__14248__delegate = function (f,g,h,fs){
var fs__14158 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14249 = null;
var G__14249__14250 = (function (){
return cljs.core.reduce.call(null,(function (p1__14045_SHARP_,p2__14046_SHARP_){
return cljs.core.conj.call(null,p1__14045_SHARP_,p2__14046_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14158);
});
var G__14249__14251 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14047_SHARP_,p2__14048_SHARP_){
return cljs.core.conj.call(null,p1__14047_SHARP_,p2__14048_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14158);
});
var G__14249__14252 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14049_SHARP_,p2__14051_SHARP_){
return cljs.core.conj.call(null,p1__14049_SHARP_,p2__14051_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14158);
});
var G__14249__14253 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14054_SHARP_,p2__14055_SHARP_){
return cljs.core.conj.call(null,p1__14054_SHARP_,p2__14055_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14158);
});
var G__14249__14254 = (function() { 
var G__14260__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14057_SHARP_,p2__14058_SHARP_){
return cljs.core.conj.call(null,p1__14057_SHARP_,cljs.core.apply.call(null,p2__14058_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14158);
};
var G__14260 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14260__delegate.call(this, x, y, z, args);
};
G__14260.cljs$lang$maxFixedArity = 3;
G__14260.cljs$lang$applyTo = (function (arglist__14269){
var x = cljs.core.first(arglist__14269);
var y = cljs.core.first(cljs.core.next(arglist__14269));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14269)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14269)));
return G__14260__delegate.call(this, x, y, z, args);
});
return G__14260;
})()
;
G__14249 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14249__14250.call(this);
case  1 :
return G__14249__14251.call(this,x);
case  2 :
return G__14249__14252.call(this,x,y);
case  3 :
return G__14249__14253.call(this,x,y,z);
default:
return G__14249__14254.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14249.cljs$lang$maxFixedArity = 3;
G__14249.cljs$lang$applyTo = G__14249__14254.cljs$lang$applyTo;
return G__14249;
})()
};
var G__14248 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14248__delegate.call(this, f, g, h, fs);
};
G__14248.cljs$lang$maxFixedArity = 3;
G__14248.cljs$lang$applyTo = (function (arglist__14273){
var f = cljs.core.first(arglist__14273);
var g = cljs.core.first(cljs.core.next(arglist__14273));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14273)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14273)));
return G__14248__delegate.call(this, f, g, h, fs);
});
return G__14248;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14170.call(this,f);
case  2 :
return juxt__14171.call(this,f,g);
case  3 :
return juxt__14172.call(this,f,g,h);
default:
return juxt__14173.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14173.cljs$lang$applyTo;
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
var dorun__14303 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14309 = cljs.core.next.call(null,coll);
coll = G__14309;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14304 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14285 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14285))
{return (n > 0);
} else
{return and__3546__auto____14285;
}
})()))
{{
var G__14335 = (n - 1);
var G__14336 = cljs.core.next.call(null,coll);
n = G__14335;
coll = G__14336;
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
return dorun__14303.call(this,n);
case  2 :
return dorun__14304.call(this,n,coll);
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
var doall__14347 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14348 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14347.call(this,n);
case  2 :
return doall__14348.call(this,n,coll);
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
var matches__14354 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14354),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14354),1)))
{return cljs.core.first.call(null,matches__14354);
} else
{return cljs.core.vec.call(null,matches__14354);
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
var matches__14358 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14358)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14358),1)))
{return cljs.core.first.call(null,matches__14358);
} else
{return cljs.core.vec.call(null,matches__14358);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14368 = cljs.core.re_find.call(null,re,s);
var match_idx__14374 = s.search(re);
var match_str__14376 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14368))?cljs.core.first.call(null,match_data__14368):match_data__14368);
var post_match__14377 = cljs.core.subs.call(null,s,(match_idx__14374 + cljs.core.count.call(null,match_str__14376)));

if(cljs.core.truth_(match_data__14368))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14368,re_seq.call(null,re,post_match__14377));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14392_SHARP_){
return print_one.call(null,p1__14392_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14417 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14417))
{var and__3546__auto____14430 = (function (){var x__445__auto____14421 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14423 = x__445__auto____14421;

if(cljs.core.truth_(and__3546__auto____14423))
{var and__3546__auto____14424 = x__445__auto____14421.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14424))
{return cljs.core.not.call(null,x__445__auto____14421.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14424;
}
} else
{return and__3546__auto____14423;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14421);
}
})();

if(cljs.core.truth_(and__3546__auto____14430))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14430;
}
} else
{return and__3546__auto____14417;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14439 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14442 = x__445__auto____14439;

if(cljs.core.truth_(and__3546__auto____14442))
{var and__3546__auto____14443 = x__445__auto____14439.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14443))
{return cljs.core.not.call(null,x__445__auto____14439.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14443;
}
} else
{return and__3546__auto____14442;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14439);
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
var first_obj__14549 = cljs.core.first.call(null,objs);
var sb__14550 = (new goog.string.StringBuffer());

var G__14551__14552 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14551__14552))
{var obj__14553 = cljs.core.first.call(null,G__14551__14552);
var G__14551__14554 = G__14551__14552;

while(true){
if(cljs.core.truth_((obj__14553 === first_obj__14549)))
{} else
{sb__14550.append(" ");
}
var G__14557__14559 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14553,opts));

if(cljs.core.truth_(G__14557__14559))
{var string__14560 = cljs.core.first.call(null,G__14557__14559);
var G__14557__14561 = G__14557__14559;

while(true){
sb__14550.append(string__14560);
var temp__3698__auto____14562 = cljs.core.next.call(null,G__14557__14561);

if(cljs.core.truth_(temp__3698__auto____14562))
{var G__14557__14563 = temp__3698__auto____14562;

{
var G__14570 = cljs.core.first.call(null,G__14557__14563);
var G__14571 = G__14557__14563;
string__14560 = G__14570;
G__14557__14561 = G__14571;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14564 = cljs.core.next.call(null,G__14551__14554);

if(cljs.core.truth_(temp__3698__auto____14564))
{var G__14551__14565 = temp__3698__auto____14564;

{
var G__14572 = cljs.core.first.call(null,G__14551__14565);
var G__14573 = G__14551__14565;
obj__14553 = G__14572;
G__14551__14554 = G__14573;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14550);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14578 = cljs.core.first.call(null,objs);

var G__14580__14582 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14580__14582))
{var obj__14584 = cljs.core.first.call(null,G__14580__14582);
var G__14580__14585 = G__14580__14582;

while(true){
if(cljs.core.truth_((obj__14584 === first_obj__14578)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14587__14590 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14584,opts));

if(cljs.core.truth_(G__14587__14590))
{var string__14592 = cljs.core.first.call(null,G__14587__14590);
var G__14587__14593 = G__14587__14590;

while(true){
cljs.core.string_print.call(null,string__14592);
var temp__3698__auto____14595 = cljs.core.next.call(null,G__14587__14593);

if(cljs.core.truth_(temp__3698__auto____14595))
{var G__14587__14596 = temp__3698__auto____14595;

{
var G__14604 = cljs.core.first.call(null,G__14587__14596);
var G__14605 = G__14587__14596;
string__14592 = G__14604;
G__14587__14593 = G__14605;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14599 = cljs.core.next.call(null,G__14580__14585);

if(cljs.core.truth_(temp__3698__auto____14599))
{var G__14580__14600 = temp__3698__auto____14599;

{
var G__14608 = cljs.core.first.call(null,G__14580__14600);
var G__14609 = G__14580__14600;
obj__14584 = G__14608;
G__14580__14585 = G__14609;
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
pr_str.cljs$lang$applyTo = (function (arglist__14627){
var objs = cljs.core.seq( arglist__14627 );;
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
pr.cljs$lang$applyTo = (function (arglist__14632){
var objs = cljs.core.seq( arglist__14632 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14633){
var objs = cljs.core.seq( arglist__14633 );;
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
println.cljs$lang$applyTo = (function (arglist__14650){
var objs = cljs.core.seq( arglist__14650 );;
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
prn.cljs$lang$applyTo = (function (arglist__14671){
var objs = cljs.core.seq( arglist__14671 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14674 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14674,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14689 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14689))
{var nspc__14692 = temp__3698__auto____14689;

return cljs.core.str.call(null,nspc__14692,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14701 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14701))
{var nspc__14704 = temp__3698__auto____14701;

return cljs.core.str.call(null,nspc__14704,"/");
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
var pr_pair__14723 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14723,"{",", ","}",opts,coll);
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
var this__14755 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14757 = this;
var G__14760__14762 = cljs.core.seq.call(null,this__14757.watches);

if(cljs.core.truth_(G__14760__14762))
{var G__14764__14766 = cljs.core.first.call(null,G__14760__14762);
var vec__14765__14767 = G__14764__14766;
var key__14769 = cljs.core.nth.call(null,vec__14765__14767,0,null);
var f__14770 = cljs.core.nth.call(null,vec__14765__14767,1,null);
var G__14760__14771 = G__14760__14762;

var G__14764__14772 = G__14764__14766;
var G__14760__14773 = G__14760__14771;

while(true){
var vec__14776__14781 = G__14764__14772;
var key__14782 = cljs.core.nth.call(null,vec__14776__14781,0,null);
var f__14783 = cljs.core.nth.call(null,vec__14776__14781,1,null);
var G__14760__14784 = G__14760__14773;

f__14783.call(null,key__14782,this$,oldval,newval);
var temp__3698__auto____14785 = cljs.core.next.call(null,G__14760__14784);

if(cljs.core.truth_(temp__3698__auto____14785))
{var G__14760__14787 = temp__3698__auto____14785;

{
var G__14804 = cljs.core.first.call(null,G__14760__14787);
var G__14805 = G__14760__14787;
G__14764__14772 = G__14804;
G__14760__14773 = G__14805;
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
var this__14790 = this;
return this$.watches = cljs.core.assoc.call(null,this__14790.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14793 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14793.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14794 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14794.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14795 = this;
return this__14795.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14796 = this;
return this__14796.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14797 = this;
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
var atom__14847 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14848 = (function() { 
var G__14850__delegate = function (x,p__14835){
var map__14836__14837 = p__14835;
var map__14836__14841 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14836__14837))?cljs.core.apply.call(null,cljs.core.hash_map,map__14836__14837):map__14836__14837);
var validator__14842 = cljs.core.get.call(null,map__14836__14841,"﷐'validator");
var meta__14843 = cljs.core.get.call(null,map__14836__14841,"﷐'meta");

return (new cljs.core.Atom(x,meta__14843,validator__14842,null));
};
var G__14850 = function (x,var_args){
var p__14835 = null;
if (goog.isDef(var_args)) {
  p__14835 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14850__delegate.call(this, x, p__14835);
};
G__14850.cljs$lang$maxFixedArity = 1;
G__14850.cljs$lang$applyTo = (function (arglist__14851){
var x = cljs.core.first(arglist__14851);
var p__14835 = cljs.core.rest(arglist__14851);
return G__14850__delegate.call(this, x, p__14835);
});
return G__14850;
})()
;
atom = function(x,var_args){
var p__14835 = var_args;
switch(arguments.length){
case  1 :
return atom__14847.call(this,x);
default:
return atom__14848.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14848.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14857 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14857))
{var validate__14859 = temp__3698__auto____14857;

if(cljs.core.truth_(validate__14859.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14864 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14864,new_value);
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
var swap_BANG___14885 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14886 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14887 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14888 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14889 = (function() { 
var G__14891__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14891 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14891__delegate.call(this, a, f, x, y, z, more);
};
G__14891.cljs$lang$maxFixedArity = 5;
G__14891.cljs$lang$applyTo = (function (arglist__14894){
var a = cljs.core.first(arglist__14894);
var f = cljs.core.first(cljs.core.next(arglist__14894));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14894)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14894))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14894)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14894)))));
return G__14891__delegate.call(this, a, f, x, y, z, more);
});
return G__14891;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14885.call(this,a,f);
case  3 :
return swap_BANG___14886.call(this,a,f,x);
case  4 :
return swap_BANG___14887.call(this,a,f,x,y);
case  5 :
return swap_BANG___14888.call(this,a,f,x,y,z);
default:
return swap_BANG___14889.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14889.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14914){
var iref = cljs.core.first(arglist__14914);
var f = cljs.core.first(cljs.core.next(arglist__14914));
var args = cljs.core.rest(cljs.core.next(arglist__14914));
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
var gensym__14925 = (function (){
return gensym.call(null,"G__");
});
var gensym__14926 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14925.call(this);
case  1 :
return gensym__14926.call(this,prefix_string);
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
var this__14979 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14979.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14980 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14980.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14980.state,this__14980.f);
}
return cljs.core.deref.call(null,this__14980.state);
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
delay.cljs$lang$applyTo = (function (arglist__15028){
var body = cljs.core.seq( arglist__15028 );;
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
var map__15031__15033 = options;
var map__15031__15034 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15031__15033))?cljs.core.apply.call(null,cljs.core.hash_map,map__15031__15033):map__15031__15033);
var keywordize_keys__15036 = cljs.core.get.call(null,map__15031__15034,"﷐'keywordize-keys");
var keyfn__15038 = (cljs.core.truth_(keywordize_keys__15036)?cljs.core.keyword:cljs.core.str);
var f__15052 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15049 = (function iter__15040(s__15042){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15042__15044 = s__15042;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15042__15044)))
{var k__15046 = cljs.core.first.call(null,s__15042__15044);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15038.call(null,k__15046),thisfn.call(null,(x[k__15046]))]),iter__15040.call(null,cljs.core.rest.call(null,s__15042__15044)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15049.call(null,cljs.core.js_keys.call(null,x));
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

return f__15052.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15063){
var x = cljs.core.first(arglist__15063);
var options = cljs.core.rest(arglist__15063);
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
var mem__15066 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15086__delegate = function (args){
var temp__3695__auto____15067 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15066),args);

if(cljs.core.truth_(temp__3695__auto____15067))
{var v__15069 = temp__3695__auto____15067;

return v__15069;
} else
{var ret__15072 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15066,cljs.core.assoc,args,ret__15072);
return ret__15072;
}
};
var G__15086 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15086__delegate.call(this, args);
};
G__15086.cljs$lang$maxFixedArity = 0;
G__15086.cljs$lang$applyTo = (function (arglist__15088){
var args = cljs.core.seq( arglist__15088 );;
return G__15086__delegate.call(this, args);
});
return G__15086;
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
var trampoline__15091 = (function (f){
while(true){
var ret__15090 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15090)))
{{
var G__15094 = ret__15090;
f = G__15094;
continue;
}
} else
{return ret__15090;
}
break;
}
});
var trampoline__15092 = (function() { 
var G__15095__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15095 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15095__delegate.call(this, f, args);
};
G__15095.cljs$lang$maxFixedArity = 1;
G__15095.cljs$lang$applyTo = (function (arglist__15096){
var f = cljs.core.first(arglist__15096);
var args = cljs.core.rest(arglist__15096);
return G__15095__delegate.call(this, f, args);
});
return G__15095;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15091.call(this,f);
default:
return trampoline__15092.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15092.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15097 = (function (){
return rand.call(null,1);
});
var rand__15098 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15097.call(this);
case  1 :
return rand__15098.call(this,n);
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
var k__15150 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15150,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15150,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15173 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15174 = (function (h,child,parent){
var or__3548__auto____15162 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15162))
{return or__3548__auto____15162;
} else
{var or__3548__auto____15163 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15163))
{return or__3548__auto____15163;
} else
{var and__3546__auto____15164 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15164))
{var and__3546__auto____15165 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15165))
{var and__3546__auto____15169 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15169))
{var ret__15170 = true;
var i__15171 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15172 = cljs.core.not.call(null,ret__15170);

if(cljs.core.truth_(or__3548__auto____15172))
{return or__3548__auto____15172;
} else
{return cljs.core._EQ_.call(null,i__15171,cljs.core.count.call(null,parent));
}
})()))
{return ret__15170;
} else
{{
var G__15181 = isa_QMARK_.call(null,h,child.call(null,i__15171),parent.call(null,i__15171));
var G__15182 = (i__15171 + 1);
ret__15170 = G__15181;
i__15171 = G__15182;
continue;
}
}
break;
}
} else
{return and__3546__auto____15169;
}
} else
{return and__3546__auto____15165;
}
} else
{return and__3546__auto____15164;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15173.call(this,h,child);
case  3 :
return isa_QMARK___15174.call(this,h,child,parent);
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
var parents__15188 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15189 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15188.call(this,h);
case  2 :
return parents__15189.call(this,h,tag);
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
var ancestors__15215 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15216 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15215.call(this,h);
case  2 :
return ancestors__15216.call(this,h,tag);
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
var descendants__15230 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15231 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15230.call(this,h);
case  2 :
return descendants__15231.call(this,h,tag);
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
var derive__15283 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15284 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15267 = "﷐'parents".call(null,h);
var td__15268 = "﷐'descendants".call(null,h);
var ta__15270 = "﷐'ancestors".call(null,h);
var tf__15274 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15279 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15267.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15270.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15270.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15267,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15274.call(null,"﷐'ancestors".call(null,h),tag,td__15268,parent,ta__15270),"﷐'descendants":tf__15274.call(null,"﷐'descendants".call(null,h),parent,ta__15270,tag,td__15268)});
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
return derive__15283.call(this,h,tag);
case  3 :
return derive__15284.call(this,h,tag,parent);
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
var underive__15329 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15330 = (function (h,tag,parent){
var parentMap__15306 = "﷐'parents".call(null,h);
var childsParents__15310 = (cljs.core.truth_(parentMap__15306.call(null,tag))?cljs.core.disj.call(null,parentMap__15306.call(null,tag),parent):cljs.core.set([]));
var newParents__15313 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15310))?cljs.core.assoc.call(null,parentMap__15306,tag,childsParents__15310):cljs.core.dissoc.call(null,parentMap__15306,tag));
var deriv_seq__15323 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15236_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15236_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15236_SHARP_),cljs.core.second.call(null,p1__15236_SHARP_)));
}),cljs.core.seq.call(null,newParents__15313)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15306.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15237_SHARP_,p2__15238_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15237_SHARP_,p2__15238_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15323));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15329.call(this,h,tag);
case  3 :
return underive__15330.call(this,h,tag,parent);
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
var xprefs__15350 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15354 = (cljs.core.truth_((function (){var and__3546__auto____15353 = xprefs__15350;

if(cljs.core.truth_(and__3546__auto____15353))
{return xprefs__15350.call(null,y);
} else
{return and__3546__auto____15353;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15354))
{return or__3548__auto____15354;
} else
{var or__3548__auto____15359 = (function (){var ps__15356 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15356) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15356),prefer_table)))
{} else
{}
{
var G__15372 = cljs.core.rest.call(null,ps__15356);
ps__15356 = G__15372;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15359))
{return or__3548__auto____15359;
} else
{var or__3548__auto____15366 = (function (){var ps__15363 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15363) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15363),y,prefer_table)))
{} else
{}
{
var G__15375 = cljs.core.rest.call(null,ps__15363);
ps__15363 = G__15375;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15366))
{return or__3548__auto____15366;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15381 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15381))
{return or__3548__auto____15381;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15406 = cljs.core.reduce.call(null,(function (be,p__15391){
var vec__15392__15395 = p__15391;
var k__15397 = cljs.core.nth.call(null,vec__15392__15395,0,null);
var ___15398 = cljs.core.nth.call(null,vec__15392__15395,1,null);
var e__15399 = vec__15392__15395;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15397)))
{var be2__15403 = (cljs.core.truth_((function (){var or__3548__auto____15401 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15401))
{return or__3548__auto____15401;
} else
{return cljs.core.dominates.call(null,k__15397,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15399:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15403),k__15397,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15397," and ",cljs.core.first.call(null,be2__15403),", and neither is preferred")));
}
return be2__15403;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15406))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15406));
return cljs.core.second.call(null,best_entry__15406);
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
if(cljs.core.truth_((function (){var and__3546__auto____15435 = mf;

if(cljs.core.truth_(and__3546__auto____15435))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15435;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15436 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15436))
{return or__3548__auto____15436;
} else
{var or__3548__auto____15437 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15437))
{return or__3548__auto____15437;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15438 = mf;

if(cljs.core.truth_(and__3546__auto____15438))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15438;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15439 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15439))
{return or__3548__auto____15439;
} else
{var or__3548__auto____15440 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15440))
{return or__3548__auto____15440;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15443 = mf;

if(cljs.core.truth_(and__3546__auto____15443))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15443;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15446 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15446))
{return or__3548__auto____15446;
} else
{var or__3548__auto____15449 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15449))
{return or__3548__auto____15449;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15451 = mf;

if(cljs.core.truth_(and__3546__auto____15451))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15451;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15453 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15453))
{return or__3548__auto____15453;
} else
{var or__3548__auto____15456 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15456))
{return or__3548__auto____15456;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15461 = mf;

if(cljs.core.truth_(and__3546__auto____15461))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15461;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15463 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15463))
{return or__3548__auto____15463;
} else
{var or__3548__auto____15466 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15466))
{return or__3548__auto____15466;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15470 = mf;

if(cljs.core.truth_(and__3546__auto____15470))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15470;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15473 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15473))
{return or__3548__auto____15473;
} else
{var or__3548__auto____15475 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15475))
{return or__3548__auto____15475;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15476 = mf;

if(cljs.core.truth_(and__3546__auto____15476))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15476;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15477 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15477))
{return or__3548__auto____15477;
} else
{var or__3548__auto____15478 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15478))
{return or__3548__auto____15478;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15483 = mf;

if(cljs.core.truth_(and__3546__auto____15483))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15483;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15486 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15486))
{return or__3548__auto____15486;
} else
{var or__3548__auto____15487 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15487))
{return or__3548__auto____15487;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15517 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15518 = cljs.core._get_method.call(null,mf,dispatch_val__15517);

if(cljs.core.truth_(target_fn__15518))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15517)));
}
return cljs.core.apply.call(null,target_fn__15518,args);
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
var this__15529 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15533 = this;
cljs.core.swap_BANG_.call(null,this__15533.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15533.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15533.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15533.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15537 = this;
cljs.core.swap_BANG_.call(null,this__15537.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15537.method_cache,this__15537.method_table,this__15537.cached_hierarchy,this__15537.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15540 = this;
cljs.core.swap_BANG_.call(null,this__15540.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15540.method_cache,this__15540.method_table,this__15540.cached_hierarchy,this__15540.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15542 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15542.cached_hierarchy),cljs.core.deref.call(null,this__15542.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15542.method_cache,this__15542.method_table,this__15542.cached_hierarchy,this__15542.hierarchy);
}
var temp__3695__auto____15545 = cljs.core.deref.call(null,this__15542.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15545))
{var target_fn__15547 = temp__3695__auto____15545;

return target_fn__15547;
} else
{var temp__3695__auto____15549 = cljs.core.find_and_cache_best_method.call(null,this__15542.name,dispatch_val,this__15542.hierarchy,this__15542.method_table,this__15542.prefer_table,this__15542.method_cache,this__15542.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15549))
{var target_fn__15551 = temp__3695__auto____15549;

return target_fn__15551;
} else
{return cljs.core.deref.call(null,this__15542.method_table).call(null,this__15542.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15553 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15553.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15553.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15553.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15553.method_cache,this__15553.method_table,this__15553.cached_hierarchy,this__15553.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15558 = this;
return cljs.core.deref.call(null,this__15558.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15563 = this;
return cljs.core.deref.call(null,this__15563.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15565 = this;
return cljs.core.do_dispatch.call(null,mf,this__15565.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15595__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15595 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15595__delegate.call(this, _, args);
};
G__15595.cljs$lang$maxFixedArity = 1;
G__15595.cljs$lang$applyTo = (function (arglist__15596){
var _ = cljs.core.first(arglist__15596);
var args = cljs.core.rest(arglist__15596);
return G__15595__delegate.call(this, _, args);
});
return G__15595;
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
