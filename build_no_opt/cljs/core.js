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
var _invoke__7643 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7308 = this$;

if(cljs.core.truth_(and__3546__auto____7308))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7308;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7311 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7311))
{return or__3548__auto____7311;
} else
{var or__3548__auto____7350 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7350))
{return or__3548__auto____7350;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7644 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7354 = this$;

if(cljs.core.truth_(and__3546__auto____7354))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7354;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7359 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7359))
{return or__3548__auto____7359;
} else
{var or__3548__auto____7361 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7361))
{return or__3548__auto____7361;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7645 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7366 = this$;

if(cljs.core.truth_(and__3546__auto____7366))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7366;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7370 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7370))
{return or__3548__auto____7370;
} else
{var or__3548__auto____7373 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7373))
{return or__3548__auto____7373;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7646 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7377 = this$;

if(cljs.core.truth_(and__3546__auto____7377))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7377;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7381 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7381))
{return or__3548__auto____7381;
} else
{var or__3548__auto____7384 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7384))
{return or__3548__auto____7384;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7647 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7388 = this$;

if(cljs.core.truth_(and__3546__auto____7388))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7388;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
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
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7648 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7399 = this$;

if(cljs.core.truth_(and__3546__auto____7399))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7399;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7403 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7403))
{return or__3548__auto____7403;
} else
{var or__3548__auto____7405 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7405))
{return or__3548__auto____7405;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7649 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7410 = this$;

if(cljs.core.truth_(and__3546__auto____7410))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7410;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7413 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7413))
{return or__3548__auto____7413;
} else
{var or__3548__auto____7415 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7415))
{return or__3548__auto____7415;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7650 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7434 = this$;

if(cljs.core.truth_(and__3546__auto____7434))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7434;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7517 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7517))
{return or__3548__auto____7517;
} else
{var or__3548__auto____7519 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7519))
{return or__3548__auto____7519;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7651 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7521 = this$;

if(cljs.core.truth_(and__3546__auto____7521))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7521;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7525 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7525))
{return or__3548__auto____7525;
} else
{var or__3548__auto____7527 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7527))
{return or__3548__auto____7527;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7652 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7530 = this$;

if(cljs.core.truth_(and__3546__auto____7530))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7530;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7533 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7533))
{return or__3548__auto____7533;
} else
{var or__3548__auto____7535 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7535))
{return or__3548__auto____7535;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7653 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7537 = this$;

if(cljs.core.truth_(and__3546__auto____7537))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7537;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7542 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7542))
{return or__3548__auto____7542;
} else
{var or__3548__auto____7544 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7544))
{return or__3548__auto____7544;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7654 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7546 = this$;

if(cljs.core.truth_(and__3546__auto____7546))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7546;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7655 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7562 = this$;

if(cljs.core.truth_(and__3546__auto____7562))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7562;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7575 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7575))
{return or__3548__auto____7575;
} else
{var or__3548__auto____7582 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7582))
{return or__3548__auto____7582;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7656 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7584 = this$;

if(cljs.core.truth_(and__3546__auto____7584))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7584;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7587 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7587))
{return or__3548__auto____7587;
} else
{var or__3548__auto____7588 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7588))
{return or__3548__auto____7588;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7657 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7590 = this$;

if(cljs.core.truth_(and__3546__auto____7590))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7590;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7593 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7593))
{return or__3548__auto____7593;
} else
{var or__3548__auto____7594 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7594))
{return or__3548__auto____7594;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7658 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7596 = this$;

if(cljs.core.truth_(and__3546__auto____7596))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7596;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7598 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7598))
{return or__3548__auto____7598;
} else
{var or__3548__auto____7600 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7600))
{return or__3548__auto____7600;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7659 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7602 = this$;

if(cljs.core.truth_(and__3546__auto____7602))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7602;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7604 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7604))
{return or__3548__auto____7604;
} else
{var or__3548__auto____7606 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7606))
{return or__3548__auto____7606;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7660 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7608 = this$;

if(cljs.core.truth_(and__3546__auto____7608))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7608;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7609 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7609))
{return or__3548__auto____7609;
} else
{var or__3548__auto____7610 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7610))
{return or__3548__auto____7610;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7661 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7612 = this$;

if(cljs.core.truth_(and__3546__auto____7612))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7612;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7662 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7633 = this$;

if(cljs.core.truth_(and__3546__auto____7633))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7633;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7663 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7640 = this$;

if(cljs.core.truth_(and__3546__auto____7640))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7640;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7641 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7641))
{return or__3548__auto____7641;
} else
{var or__3548__auto____7642 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7642))
{return or__3548__auto____7642;
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
return _invoke__7643.call(this,this$);
case  2 :
return _invoke__7644.call(this,this$,a);
case  3 :
return _invoke__7645.call(this,this$,a,b);
case  4 :
return _invoke__7646.call(this,this$,a,b,c);
case  5 :
return _invoke__7647.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7648.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7649.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7650.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7651.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7652.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7653.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7654.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7655.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7656.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7657.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7658.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7659.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7660.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7661.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7662.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7663.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7701 = coll;

if(cljs.core.truth_(and__3546__auto____7701))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7701;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7705 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7705))
{return or__3548__auto____7705;
} else
{var or__3548__auto____7706 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7706))
{return or__3548__auto____7706;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7709 = coll;

if(cljs.core.truth_(and__3546__auto____7709))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7709;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7711 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7711))
{return or__3548__auto____7711;
} else
{var or__3548__auto____7712 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7712))
{return or__3548__auto____7712;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7714 = coll;

if(cljs.core.truth_(and__3546__auto____7714))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7714;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7716 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7716))
{return or__3548__auto____7716;
} else
{var or__3548__auto____7718 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7718))
{return or__3548__auto____7718;
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
var _nth__7758 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7749 = coll;

if(cljs.core.truth_(and__3546__auto____7749))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7749;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7752 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7752))
{return or__3548__auto____7752;
} else
{var or__3548__auto____7753 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7753))
{return or__3548__auto____7753;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7759 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7755 = coll;

if(cljs.core.truth_(and__3546__auto____7755))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7755;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7756 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7756))
{return or__3548__auto____7756;
} else
{var or__3548__auto____7757 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7757))
{return or__3548__auto____7757;
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
return _nth__7758.call(this,coll,n);
case  3 :
return _nth__7759.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7775 = coll;

if(cljs.core.truth_(and__3546__auto____7775))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7775;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7781 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7781))
{return or__3548__auto____7781;
} else
{var or__3548__auto____7783 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7783))
{return or__3548__auto____7783;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7785 = coll;

if(cljs.core.truth_(and__3546__auto____7785))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7785;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7789 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7789))
{return or__3548__auto____7789;
} else
{var or__3548__auto____7790 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7790))
{return or__3548__auto____7790;
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
var _lookup__7813 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7799 = o;

if(cljs.core.truth_(and__3546__auto____7799))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7799;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7804 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{var or__3548__auto____7806 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7806))
{return or__3548__auto____7806;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7814 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7808 = o;

if(cljs.core.truth_(and__3546__auto____7808))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7808;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7811 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7811))
{return or__3548__auto____7811;
} else
{var or__3548__auto____7812 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7812))
{return or__3548__auto____7812;
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
return _lookup__7813.call(this,o,k);
case  3 :
return _lookup__7814.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7825 = coll;

if(cljs.core.truth_(and__3546__auto____7825))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7825;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7829 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7829))
{return or__3548__auto____7829;
} else
{var or__3548__auto____7830 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7830))
{return or__3548__auto____7830;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7847 = coll;

if(cljs.core.truth_(and__3546__auto____7847))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7847;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7874 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7874))
{return or__3548__auto____7874;
} else
{var or__3548__auto____7877 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7877))
{return or__3548__auto____7877;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7889 = coll;

if(cljs.core.truth_(and__3546__auto____7889))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7889;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7892 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7892))
{return or__3548__auto____7892;
} else
{var or__3548__auto____7894 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7894))
{return or__3548__auto____7894;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7902 = coll;

if(cljs.core.truth_(and__3546__auto____7902))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7902;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7916 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7916))
{return or__3548__auto____7916;
} else
{var or__3548__auto____7918 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7918))
{return or__3548__auto____7918;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7925 = coll;

if(cljs.core.truth_(and__3546__auto____7925))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7925;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7930 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7930))
{return or__3548__auto____7930;
} else
{var or__3548__auto____7931 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7931))
{return or__3548__auto____7931;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7934 = coll;

if(cljs.core.truth_(and__3546__auto____7934))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7934;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7938 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7938))
{return or__3548__auto____7938;
} else
{var or__3548__auto____7940 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7940))
{return or__3548__auto____7940;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7954 = coll;

if(cljs.core.truth_(and__3546__auto____7954))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7954;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7957 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7957))
{return or__3548__auto____7957;
} else
{var or__3548__auto____7959 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7959))
{return or__3548__auto____7959;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7963 = o;

if(cljs.core.truth_(and__3546__auto____7963))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7963;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7966 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7966))
{return or__3548__auto____7966;
} else
{var or__3548__auto____7967 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7967))
{return or__3548__auto____7967;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8016 = o;

if(cljs.core.truth_(and__3546__auto____8016))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8016;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8019 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
} else
{var or__3548__auto____8020 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8020))
{return or__3548__auto____8020;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8026 = o;

if(cljs.core.truth_(and__3546__auto____8026))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8026;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8027 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8027))
{return or__3548__auto____8027;
} else
{var or__3548__auto____8028 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8028))
{return or__3548__auto____8028;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8037 = o;

if(cljs.core.truth_(and__3546__auto____8037))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8037;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8040 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8040))
{return or__3548__auto____8040;
} else
{var or__3548__auto____8041 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8041))
{return or__3548__auto____8041;
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
var _reduce__8057 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8044 = coll;

if(cljs.core.truth_(and__3546__auto____8044))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8044;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8046 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8046))
{return or__3548__auto____8046;
} else
{var or__3548__auto____8048 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8048))
{return or__3548__auto____8048;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8058 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8051 = coll;

if(cljs.core.truth_(and__3546__auto____8051))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8051;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8055 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8055))
{return or__3548__auto____8055;
} else
{var or__3548__auto____8056 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8056))
{return or__3548__auto____8056;
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
return _reduce__8057.call(this,coll,f);
case  3 :
return _reduce__8058.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8066 = o;

if(cljs.core.truth_(and__3546__auto____8066))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8066;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8073 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
} else
{var or__3548__auto____8075 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8081 = o;

if(cljs.core.truth_(and__3546__auto____8081))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8081;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8085 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8085))
{return or__3548__auto____8085;
} else
{var or__3548__auto____8087 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8092 = o;

if(cljs.core.truth_(and__3546__auto____8092))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8092;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8094 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8094))
{return or__3548__auto____8094;
} else
{var or__3548__auto____8096 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8096))
{return or__3548__auto____8096;
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
if(cljs.core.truth_((function (){var and__3546__auto____8103 = o;

if(cljs.core.truth_(and__3546__auto____8103))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8103;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8107 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8107))
{return or__3548__auto____8107;
} else
{var or__3548__auto____8109 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8109))
{return or__3548__auto____8109;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8117 = d;

if(cljs.core.truth_(and__3546__auto____8117))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8117;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8120 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8120))
{return or__3548__auto____8120;
} else
{var or__3548__auto____8121 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8121))
{return or__3548__auto____8121;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8129 = this$;

if(cljs.core.truth_(and__3546__auto____8129))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8129;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8131 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8131))
{return or__3548__auto____8131;
} else
{var or__3548__auto____8132 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8132))
{return or__3548__auto____8132;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8136 = this$;

if(cljs.core.truth_(and__3546__auto____8136))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8136;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8139 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8139))
{return or__3548__auto____8139;
} else
{var or__3548__auto____8140 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8140))
{return or__3548__auto____8140;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8142 = this$;

if(cljs.core.truth_(and__3546__auto____8142))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8142;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8143 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8143))
{return or__3548__auto____8143;
} else
{var or__3548__auto____8144 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8144))
{return or__3548__auto____8144;
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
var G__8191 = null;
var G__8191__8192 = (function (o,k){
return null;
});
var G__8191__8193 = (function (o,k,not_found){
return not_found;
});
G__8191 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8191__8192.call(this,o,k);
case  3 :
return G__8191__8193.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8191;
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
var G__8195 = null;
var G__8195__8196 = (function (_,f){
return f.call(null);
});
var G__8195__8197 = (function (_,f,start){
return start;
});
G__8195 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8195__8196.call(this,_,f);
case  3 :
return G__8195__8197.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8195;
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
var G__8199 = null;
var G__8199__8200 = (function (_,n){
return null;
});
var G__8199__8201 = (function (_,n,not_found){
return not_found;
});
G__8199 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8199__8200.call(this,_,n);
case  3 :
return G__8199__8201.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8199;
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
var ci_reduce__8342 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8258 = cljs.core._nth.call(null,cicoll,0);
var n__8260 = 1;

while(true){
if(cljs.core.truth_((n__8260 < cljs.core._count.call(null,cicoll))))
{{
var G__8353 = f.call(null,val__8258,cljs.core._nth.call(null,cicoll,n__8260));
var G__8355 = (n__8260 + 1);
val__8258 = G__8353;
n__8260 = G__8355;
continue;
}
} else
{return val__8258;
}
break;
}
}
});
var ci_reduce__8343 = (function (cicoll,f,val){
var val__8264 = val;
var n__8265 = 0;

while(true){
if(cljs.core.truth_((n__8265 < cljs.core._count.call(null,cicoll))))
{{
var G__8360 = f.call(null,val__8264,cljs.core._nth.call(null,cicoll,n__8265));
var G__8361 = (n__8265 + 1);
val__8264 = G__8360;
n__8265 = G__8361;
continue;
}
} else
{return val__8264;
}
break;
}
});
var ci_reduce__8345 = (function (cicoll,f,val,idx){
var val__8337 = val;
var n__8338 = idx;

while(true){
if(cljs.core.truth_((n__8338 < cljs.core._count.call(null,cicoll))))
{{
var G__8365 = f.call(null,val__8337,cljs.core._nth.call(null,cicoll,n__8338));
var G__8366 = (n__8338 + 1);
val__8337 = G__8365;
n__8338 = G__8366;
continue;
}
} else
{return val__8337;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8342.call(this,cicoll,f);
case  3 :
return ci_reduce__8343.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8345.call(this,cicoll,f,val,idx);
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
var this__8375 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8412 = null;
var G__8412__8413 = (function (_,f){
var this__8377 = this;
return cljs.core.ci_reduce.call(null,this__8377.a,f,(this__8377.a[this__8377.i]),(this__8377.i + 1));
});
var G__8412__8414 = (function (_,f,start){
var this__8379 = this;
return cljs.core.ci_reduce.call(null,this__8379.a,f,start,this__8379.i);
});
G__8412 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8412__8413.call(this,_,f);
case  3 :
return G__8412__8414.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8412;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8381 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8387 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8416 = null;
var G__8416__8417 = (function (coll,n){
var this__8389 = this;
var i__8391 = (n + this__8389.i);

if(cljs.core.truth_((i__8391 < this__8389.a.length)))
{return (this__8389.a[i__8391]);
} else
{return null;
}
});
var G__8416__8418 = (function (coll,n,not_found){
var this__8393 = this;
var i__8395 = (n + this__8393.i);

if(cljs.core.truth_((i__8395 < this__8393.a.length)))
{return (this__8393.a[i__8395]);
} else
{return not_found;
}
});
G__8416 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8416__8417.call(this,coll,n);
case  3 :
return G__8416__8418.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8416;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8397 = this;
return (this__8397.a.length - this__8397.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8399 = this;
return (this__8399.a[this__8399.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8401 = this;
if(cljs.core.truth_(((this__8401.i + 1) < this__8401.a.length)))
{return (new cljs.core.IndexedSeq(this__8401.a,(this__8401.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8403 = this;
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
var G__8538 = null;
var G__8538__8539 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8538__8540 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8538 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8538__8539.call(this,array,f);
case  3 :
return G__8538__8540.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8538;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8546 = null;
var G__8546__8547 = (function (array,k){
return (array[k]);
});
var G__8546__8548 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8546 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8546__8547.call(this,array,k);
case  3 :
return G__8546__8548.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8546;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8551 = null;
var G__8551__8552 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8551__8553 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8551 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8551__8552.call(this,array,n);
case  3 :
return G__8551__8553.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8551;
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
var temp__3698__auto____8563 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8563))
{var s__8564 = temp__3698__auto____8563;

return cljs.core._first.call(null,s__8564);
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
var G__8665 = cljs.core.next.call(null,s);
s = G__8665;
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
var s__8672 = cljs.core.seq.call(null,x);
var n__8675 = 0;

while(true){
if(cljs.core.truth_(s__8672))
{{
var G__8681 = cljs.core.next.call(null,s__8672);
var G__8682 = (n__8675 + 1);
s__8672 = G__8681;
n__8675 = G__8682;
continue;
}
} else
{return n__8675;
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
var conj__8688 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8690 = (function() { 
var G__8693__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8694 = conj.call(null,coll,x);
var G__8695 = cljs.core.first.call(null,xs);
var G__8696 = cljs.core.next.call(null,xs);
coll = G__8694;
x = G__8695;
xs = G__8696;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8693 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8693__delegate.call(this, coll, x, xs);
};
G__8693.cljs$lang$maxFixedArity = 2;
G__8693.cljs$lang$applyTo = (function (arglist__8699){
var coll = cljs.core.first(arglist__8699);
var x = cljs.core.first(cljs.core.next(arglist__8699));
var xs = cljs.core.rest(cljs.core.next(arglist__8699));
return G__8693__delegate.call(this, coll, x, xs);
});
return G__8693;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8688.call(this,coll,x);
default:
return conj__8690.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8690.cljs$lang$applyTo;
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
var nth__8716 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8717 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8716.call(this,coll,n);
case  3 :
return nth__8717.call(this,coll,n,not_found);
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
var get__8726 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8727 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8726.call(this,o,k);
case  3 :
return get__8727.call(this,o,k,not_found);
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
var assoc__8811 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8812 = (function() { 
var G__8815__delegate = function (coll,k,v,kvs){
while(true){
var ret__8808 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8817 = ret__8808;
var G__8818 = cljs.core.first.call(null,kvs);
var G__8819 = cljs.core.second.call(null,kvs);
var G__8820 = cljs.core.nnext.call(null,kvs);
coll = G__8817;
k = G__8818;
v = G__8819;
kvs = G__8820;
continue;
}
} else
{return ret__8808;
}
break;
}
};
var G__8815 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8815__delegate.call(this, coll, k, v, kvs);
};
G__8815.cljs$lang$maxFixedArity = 3;
G__8815.cljs$lang$applyTo = (function (arglist__8822){
var coll = cljs.core.first(arglist__8822);
var k = cljs.core.first(cljs.core.next(arglist__8822));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8822)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8822)));
return G__8815__delegate.call(this, coll, k, v, kvs);
});
return G__8815;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8811.call(this,coll,k,v);
default:
return assoc__8812.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8812.cljs$lang$applyTo;
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
var dissoc__8827 = (function (coll){
return coll;
});
var dissoc__8828 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8829 = (function() { 
var G__8831__delegate = function (coll,k,ks){
while(true){
var ret__8824 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8832 = ret__8824;
var G__8833 = cljs.core.first.call(null,ks);
var G__8834 = cljs.core.next.call(null,ks);
coll = G__8832;
k = G__8833;
ks = G__8834;
continue;
}
} else
{return ret__8824;
}
break;
}
};
var G__8831 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8831__delegate.call(this, coll, k, ks);
};
G__8831.cljs$lang$maxFixedArity = 2;
G__8831.cljs$lang$applyTo = (function (arglist__8836){
var coll = cljs.core.first(arglist__8836);
var k = cljs.core.first(cljs.core.next(arglist__8836));
var ks = cljs.core.rest(cljs.core.next(arglist__8836));
return G__8831__delegate.call(this, coll, k, ks);
});
return G__8831;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8827.call(this,coll);
case  2 :
return dissoc__8828.call(this,coll,k);
default:
return dissoc__8829.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8829.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8845 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8846 = x__445__auto____8845;

if(cljs.core.truth_(and__3546__auto____8846))
{var and__3546__auto____8847 = x__445__auto____8845.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8847))
{return cljs.core.not.call(null,x__445__auto____8845.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8847;
}
} else
{return and__3546__auto____8846;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8845);
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
var disj__8857 = (function (coll){
return coll;
});
var disj__8858 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8859 = (function() { 
var G__8863__delegate = function (coll,k,ks){
while(true){
var ret__8856 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8865 = ret__8856;
var G__8866 = cljs.core.first.call(null,ks);
var G__8867 = cljs.core.next.call(null,ks);
coll = G__8865;
k = G__8866;
ks = G__8867;
continue;
}
} else
{return ret__8856;
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
G__8863.cljs$lang$applyTo = (function (arglist__8870){
var coll = cljs.core.first(arglist__8870);
var k = cljs.core.first(cljs.core.next(arglist__8870));
var ks = cljs.core.rest(cljs.core.next(arglist__8870));
return G__8863__delegate.call(this, coll, k, ks);
});
return G__8863;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8857.call(this,coll);
case  2 :
return disj__8858.call(this,coll,k);
default:
return disj__8859.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8859.cljs$lang$applyTo;
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
{var x__445__auto____8876 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8878 = x__445__auto____8876;

if(cljs.core.truth_(and__3546__auto____8878))
{var and__3546__auto____8879 = x__445__auto____8876.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8879))
{return cljs.core.not.call(null,x__445__auto____8876.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8879;
}
} else
{return and__3546__auto____8878;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8876);
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
{var x__445__auto____8883 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8884 = x__445__auto____8883;

if(cljs.core.truth_(and__3546__auto____8884))
{var and__3546__auto____8886 = x__445__auto____8883.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8886))
{return cljs.core.not.call(null,x__445__auto____8883.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8886;
}
} else
{return and__3546__auto____8884;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8883);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8894 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8895 = x__445__auto____8894;

if(cljs.core.truth_(and__3546__auto____8895))
{var and__3546__auto____8896 = x__445__auto____8894.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8896))
{return cljs.core.not.call(null,x__445__auto____8894.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8896;
}
} else
{return and__3546__auto____8895;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8894);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8910 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8912 = x__445__auto____8910;

if(cljs.core.truth_(and__3546__auto____8912))
{var and__3546__auto____8914 = x__445__auto____8910.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8914))
{return cljs.core.not.call(null,x__445__auto____8910.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8914;
}
} else
{return and__3546__auto____8912;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8910);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8926 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8927 = x__445__auto____8926;

if(cljs.core.truth_(and__3546__auto____8927))
{var and__3546__auto____8930 = x__445__auto____8926.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8930))
{return cljs.core.not.call(null,x__445__auto____8926.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8930;
}
} else
{return and__3546__auto____8927;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8926);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8942 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8943 = x__445__auto____8942;

if(cljs.core.truth_(and__3546__auto____8943))
{var and__3546__auto____8945 = x__445__auto____8942.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8945))
{return cljs.core.not.call(null,x__445__auto____8942.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8945;
}
} else
{return and__3546__auto____8943;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8942);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8952 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8955 = x__445__auto____8952;

if(cljs.core.truth_(and__3546__auto____8955))
{var and__3546__auto____8957 = x__445__auto____8952.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8957))
{return cljs.core.not.call(null,x__445__auto____8952.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8957;
}
} else
{return and__3546__auto____8955;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8952);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8962 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8962.push(key);
}));
return keys__8962;
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
{var x__445__auto____9071 = s;

if(cljs.core.truth_((function (){var and__3546__auto____9073 = x__445__auto____9071;

if(cljs.core.truth_(and__3546__auto____9073))
{var and__3546__auto____9075 = x__445__auto____9071.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____9075))
{return cljs.core.not.call(null,x__445__auto____9071.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____9075;
}
} else
{return and__3546__auto____9073;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____9071);
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
var and__3546__auto____9086 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9086))
{return cljs.core.not.call(null,(function (){var or__3548__auto____9092 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____9092))
{return or__3548__auto____9092;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____9086;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____9125 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9125))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____9125;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____9133 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9133))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____9133;
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
var and__3546__auto____9151 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____9151))
{return (n == n.toFixed());
} else
{return and__3546__auto____9151;
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
if(cljs.core.truth_((function (){var and__3546__auto____9164 = coll;

if(cljs.core.truth_(and__3546__auto____9164))
{var and__3546__auto____9166 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9166))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9166;
}
} else
{return and__3546__auto____9164;
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
var distinct_QMARK___9378 = (function (x){
return true;
});
var distinct_QMARK___9379 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9380 = (function() { 
var G__9382__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9239 = cljs.core.set([y,x]);
var xs__9240 = more;

while(true){
var x__9241 = cljs.core.first.call(null,xs__9240);
var etc__9245 = cljs.core.next.call(null,xs__9240);

if(cljs.core.truth_(xs__9240))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9239,x__9241)))
{return false;
} else
{{
var G__9383 = cljs.core.conj.call(null,s__9239,x__9241);
var G__9384 = etc__9245;
s__9239 = G__9383;
xs__9240 = G__9384;
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
var G__9382 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9382__delegate.call(this, x, y, more);
};
G__9382.cljs$lang$maxFixedArity = 2;
G__9382.cljs$lang$applyTo = (function (arglist__9385){
var x = cljs.core.first(arglist__9385);
var y = cljs.core.first(cljs.core.next(arglist__9385));
var more = cljs.core.rest(cljs.core.next(arglist__9385));
return G__9382__delegate.call(this, x, y, more);
});
return G__9382;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9378.call(this,x);
case  2 :
return distinct_QMARK___9379.call(this,x,y);
default:
return distinct_QMARK___9380.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9380.cljs$lang$applyTo;
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
var r__9390 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9390)))
{return r__9390;
} else
{if(cljs.core.truth_(r__9390))
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
var sort__9392 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9393 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9391 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9391,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9391);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9392.call(this,comp);
case  2 :
return sort__9393.call(this,comp,coll);
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
var sort_by__9395 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9396 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9395.call(this,keyfn,comp);
case  3 :
return sort_by__9396.call(this,keyfn,comp,coll);
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
var reduce__9407 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9408 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9407.call(this,f,val);
case  3 :
return reduce__9408.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9414 = (function (f,coll){
var temp__3695__auto____9410 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9410))
{var s__9411 = temp__3695__auto____9410;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9411),cljs.core.next.call(null,s__9411));
} else
{return f.call(null);
}
});
var seq_reduce__9415 = (function (f,val,coll){
var val__9412 = val;
var coll__9413 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9413))
{{
var G__9419 = f.call(null,val__9412,cljs.core.first.call(null,coll__9413));
var G__9420 = cljs.core.next.call(null,coll__9413);
val__9412 = G__9419;
coll__9413 = G__9420;
continue;
}
} else
{return val__9412;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9414.call(this,f,val);
case  3 :
return seq_reduce__9415.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9432 = null;
var G__9432__9434 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9432__9435 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9432 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9432__9434.call(this,coll,f);
case  3 :
return G__9432__9435.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9432;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9443 = (function (){
return 0;
});
var _PLUS___9444 = (function (x){
return x;
});
var _PLUS___9445 = (function (x,y){
return (x + y);
});
var _PLUS___9446 = (function() { 
var G__9448__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9448 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9448__delegate.call(this, x, y, more);
};
G__9448.cljs$lang$maxFixedArity = 2;
G__9448.cljs$lang$applyTo = (function (arglist__9449){
var x = cljs.core.first(arglist__9449);
var y = cljs.core.first(cljs.core.next(arglist__9449));
var more = cljs.core.rest(cljs.core.next(arglist__9449));
return G__9448__delegate.call(this, x, y, more);
});
return G__9448;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9443.call(this);
case  1 :
return _PLUS___9444.call(this,x);
case  2 :
return _PLUS___9445.call(this,x,y);
default:
return _PLUS___9446.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9446.cljs$lang$applyTo;
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
var ___9450 = (function (x){
return (- x);
});
var ___9451 = (function (x,y){
return (x - y);
});
var ___9452 = (function() { 
var G__9454__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9454 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9454__delegate.call(this, x, y, more);
};
G__9454.cljs$lang$maxFixedArity = 2;
G__9454.cljs$lang$applyTo = (function (arglist__9455){
var x = cljs.core.first(arglist__9455);
var y = cljs.core.first(cljs.core.next(arglist__9455));
var more = cljs.core.rest(cljs.core.next(arglist__9455));
return G__9454__delegate.call(this, x, y, more);
});
return G__9454;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9450.call(this,x);
case  2 :
return ___9451.call(this,x,y);
default:
return ___9452.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9452.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9456 = (function (){
return 1;
});
var _STAR___9457 = (function (x){
return x;
});
var _STAR___9458 = (function (x,y){
return (x * y);
});
var _STAR___9459 = (function() { 
var G__9461__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9461 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9461__delegate.call(this, x, y, more);
};
G__9461.cljs$lang$maxFixedArity = 2;
G__9461.cljs$lang$applyTo = (function (arglist__9462){
var x = cljs.core.first(arglist__9462);
var y = cljs.core.first(cljs.core.next(arglist__9462));
var more = cljs.core.rest(cljs.core.next(arglist__9462));
return G__9461__delegate.call(this, x, y, more);
});
return G__9461;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9456.call(this);
case  1 :
return _STAR___9457.call(this,x);
case  2 :
return _STAR___9458.call(this,x,y);
default:
return _STAR___9459.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9459.cljs$lang$applyTo;
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
var _SLASH___9472 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9473 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9474 = (function() { 
var G__9476__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9476 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9476__delegate.call(this, x, y, more);
};
G__9476.cljs$lang$maxFixedArity = 2;
G__9476.cljs$lang$applyTo = (function (arglist__9477){
var x = cljs.core.first(arglist__9477);
var y = cljs.core.first(cljs.core.next(arglist__9477));
var more = cljs.core.rest(cljs.core.next(arglist__9477));
return G__9476__delegate.call(this, x, y, more);
});
return G__9476;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9472.call(this,x);
case  2 :
return _SLASH___9473.call(this,x,y);
default:
return _SLASH___9474.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9474.cljs$lang$applyTo;
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
var _LT___9480 = (function (x){
return true;
});
var _LT___9481 = (function (x,y){
return (x < y);
});
var _LT___9482 = (function() { 
var G__9485__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9486 = y;
var G__9487 = cljs.core.first.call(null,more);
var G__9488 = cljs.core.next.call(null,more);
x = G__9486;
y = G__9487;
more = G__9488;
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
var G__9485 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9485__delegate.call(this, x, y, more);
};
G__9485.cljs$lang$maxFixedArity = 2;
G__9485.cljs$lang$applyTo = (function (arglist__9489){
var x = cljs.core.first(arglist__9489);
var y = cljs.core.first(cljs.core.next(arglist__9489));
var more = cljs.core.rest(cljs.core.next(arglist__9489));
return G__9485__delegate.call(this, x, y, more);
});
return G__9485;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9480.call(this,x);
case  2 :
return _LT___9481.call(this,x,y);
default:
return _LT___9482.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9482.cljs$lang$applyTo;
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
var _LT__EQ___9496 = (function (x){
return true;
});
var _LT__EQ___9497 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9498 = (function() { 
var G__9501__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
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
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__9501 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9501__delegate.call(this, x, y, more);
};
G__9501.cljs$lang$maxFixedArity = 2;
G__9501.cljs$lang$applyTo = (function (arglist__9508){
var x = cljs.core.first(arglist__9508);
var y = cljs.core.first(cljs.core.next(arglist__9508));
var more = cljs.core.rest(cljs.core.next(arglist__9508));
return G__9501__delegate.call(this, x, y, more);
});
return G__9501;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9496.call(this,x);
case  2 :
return _LT__EQ___9497.call(this,x,y);
default:
return _LT__EQ___9498.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9498.cljs$lang$applyTo;
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
var _GT___9564 = (function (x){
return true;
});
var _GT___9565 = (function (x,y){
return (x > y);
});
var _GT___9567 = (function() { 
var G__9573__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9574 = y;
var G__9575 = cljs.core.first.call(null,more);
var G__9576 = cljs.core.next.call(null,more);
x = G__9574;
y = G__9575;
more = G__9576;
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
var G__9573 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9573__delegate.call(this, x, y, more);
};
G__9573.cljs$lang$maxFixedArity = 2;
G__9573.cljs$lang$applyTo = (function (arglist__9578){
var x = cljs.core.first(arglist__9578);
var y = cljs.core.first(cljs.core.next(arglist__9578));
var more = cljs.core.rest(cljs.core.next(arglist__9578));
return G__9573__delegate.call(this, x, y, more);
});
return G__9573;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9564.call(this,x);
case  2 :
return _GT___9565.call(this,x,y);
default:
return _GT___9567.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9567.cljs$lang$applyTo;
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
var _GT__EQ___9638 = (function (x){
return true;
});
var _GT__EQ___9640 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9641 = (function() { 
var G__9645__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9646 = y;
var G__9647 = cljs.core.first.call(null,more);
var G__9648 = cljs.core.next.call(null,more);
x = G__9646;
y = G__9647;
more = G__9648;
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
var G__9645 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9645__delegate.call(this, x, y, more);
};
G__9645.cljs$lang$maxFixedArity = 2;
G__9645.cljs$lang$applyTo = (function (arglist__9649){
var x = cljs.core.first(arglist__9649);
var y = cljs.core.first(cljs.core.next(arglist__9649));
var more = cljs.core.rest(cljs.core.next(arglist__9649));
return G__9645__delegate.call(this, x, y, more);
});
return G__9645;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9638.call(this,x);
case  2 :
return _GT__EQ___9640.call(this,x,y);
default:
return _GT__EQ___9641.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9641.cljs$lang$applyTo;
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
var max__9656 = (function (x){
return x;
});
var max__9657 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9658 = (function() { 
var G__9664__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9664 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9664__delegate.call(this, x, y, more);
};
G__9664.cljs$lang$maxFixedArity = 2;
G__9664.cljs$lang$applyTo = (function (arglist__9665){
var x = cljs.core.first(arglist__9665);
var y = cljs.core.first(cljs.core.next(arglist__9665));
var more = cljs.core.rest(cljs.core.next(arglist__9665));
return G__9664__delegate.call(this, x, y, more);
});
return G__9664;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9656.call(this,x);
case  2 :
return max__9657.call(this,x,y);
default:
return max__9658.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9658.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9666 = (function (x){
return x;
});
var min__9667 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9668 = (function() { 
var G__9670__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9670 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9670__delegate.call(this, x, y, more);
};
G__9670.cljs$lang$maxFixedArity = 2;
G__9670.cljs$lang$applyTo = (function (arglist__9675){
var x = cljs.core.first(arglist__9675);
var y = cljs.core.first(cljs.core.next(arglist__9675));
var more = cljs.core.rest(cljs.core.next(arglist__9675));
return G__9670__delegate.call(this, x, y, more);
});
return G__9670;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9666.call(this,x);
case  2 :
return min__9667.call(this,x,y);
default:
return min__9668.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9668.cljs$lang$applyTo;
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
var rem__9680 = (n % d);

return cljs.core.fix.call(null,((n - rem__9680) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9685 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9685));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9688 = (function (){
return Math.random.call(null);
});
var rand__9689 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9688.call(this);
case  1 :
return rand__9689.call(this,n);
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
var _EQ__EQ___9899 = (function (x){
return true;
});
var _EQ__EQ___9900 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9901 = (function() { 
var G__9904__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9906 = y;
var G__9907 = cljs.core.first.call(null,more);
var G__9908 = cljs.core.next.call(null,more);
x = G__9906;
y = G__9907;
more = G__9908;
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
var G__9904 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9904__delegate.call(this, x, y, more);
};
G__9904.cljs$lang$maxFixedArity = 2;
G__9904.cljs$lang$applyTo = (function (arglist__9911){
var x = cljs.core.first(arglist__9911);
var y = cljs.core.first(cljs.core.next(arglist__9911));
var more = cljs.core.rest(cljs.core.next(arglist__9911));
return G__9904__delegate.call(this, x, y, more);
});
return G__9904;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9899.call(this,x);
case  2 :
return _EQ__EQ___9900.call(this,x,y);
default:
return _EQ__EQ___9901.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9901.cljs$lang$applyTo;
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
var n__9914 = n;
var xs__9915 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9916 = xs__9915;

if(cljs.core.truth_(and__3546__auto____9916))
{return (n__9914 > 0);
} else
{return and__3546__auto____9916;
}
})()))
{{
var G__9917 = (n__9914 - 1);
var G__9918 = cljs.core.next.call(null,xs__9915);
n__9914 = G__9917;
xs__9915 = G__9918;
continue;
}
} else
{return xs__9915;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9923 = null;
var G__9923__9924 = (function (coll,n){
var temp__3695__auto____9919 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9919))
{var xs__9920 = temp__3695__auto____9919;

return cljs.core.first.call(null,xs__9920);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9923__9925 = (function (coll,n,not_found){
var temp__3695__auto____9921 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9921))
{var xs__9922 = temp__3695__auto____9921;

return cljs.core.first.call(null,xs__9922);
} else
{return not_found;
}
});
G__9923 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9923__9924.call(this,coll,n);
case  3 :
return G__9923__9925.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9923;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9935 = (function (){
return "";
});
var str_STAR___9936 = (function (x){
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
var str_STAR___9937 = (function() { 
var G__9943__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9944 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9945 = cljs.core.next.call(null,more);
sb = G__9944;
more = G__9945;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9943 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9943__delegate.call(this, x, ys);
};
G__9943.cljs$lang$maxFixedArity = 1;
G__9943.cljs$lang$applyTo = (function (arglist__9946){
var x = cljs.core.first(arglist__9946);
var ys = cljs.core.rest(arglist__9946);
return G__9943__delegate.call(this, x, ys);
});
return G__9943;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9935.call(this);
case  1 :
return str_STAR___9936.call(this,x);
default:
return str_STAR___9937.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9937.cljs$lang$applyTo;
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
var str__9973 = (function (){
return "";
});
var str__9974 = (function (x){
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
var str__9975 = (function() { 
var G__9984__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9984 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9984__delegate.call(this, x, ys);
};
G__9984.cljs$lang$maxFixedArity = 1;
G__9984.cljs$lang$applyTo = (function (arglist__9986){
var x = cljs.core.first(arglist__9986);
var ys = cljs.core.rest(arglist__9986);
return G__9984__delegate.call(this, x, ys);
});
return G__9984;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9973.call(this);
case  1 :
return str__9974.call(this,x);
default:
return str__9975.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9975.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9989 = (function (s,start){
return s.substring(start);
});
var subs__9990 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9989.call(this,s,start);
case  3 :
return subs__9990.call(this,s,start,end);
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
var symbol__9993 = (function (name){
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
var symbol__9994 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9993.call(this,ns);
case  2 :
return symbol__9994.call(this,ns,name);
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
var keyword__10000 = (function (name){
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
var keyword__10001 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__10000.call(this,ns);
case  2 :
return keyword__10001.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__10003 = cljs.core.seq.call(null,x);
var ys__10004 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__10003)))
{return cljs.core.nil_QMARK_.call(null,ys__10004);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__10004)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__10003),cljs.core.first.call(null,ys__10004))))
{{
var G__10014 = cljs.core.next.call(null,xs__10003);
var G__10015 = cljs.core.next.call(null,ys__10004);
xs__10003 = G__10014;
ys__10004 = G__10015;
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
return cljs.core.reduce.call(null,(function (p1__10020_SHARP_,p2__10021_SHARP_){
return cljs.core.hash_combine.call(null,p1__10020_SHARP_,cljs.core.hash.call(null,p2__10021_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__10029__10030 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__10029__10030))
{var G__10034__10036 = cljs.core.first.call(null,G__10029__10030);
var vec__10035__10037 = G__10034__10036;
var key_name__10038 = cljs.core.nth.call(null,vec__10035__10037,0,null);
var f__10039 = cljs.core.nth.call(null,vec__10035__10037,1,null);
var G__10029__10040 = G__10029__10030;

var G__10034__10041 = G__10034__10036;
var G__10029__10042 = G__10029__10040;

while(true){
var vec__10043__10044 = G__10034__10041;
var key_name__10045 = cljs.core.nth.call(null,vec__10043__10044,0,null);
var f__10046 = cljs.core.nth.call(null,vec__10043__10044,1,null);
var G__10029__10047 = G__10029__10042;

var str_name__10094 = cljs.core.name.call(null,key_name__10045);

obj[str_name__10094] = f__10046;
var temp__3698__auto____10098 = cljs.core.next.call(null,G__10029__10047);

if(cljs.core.truth_(temp__3698__auto____10098))
{var G__10029__10100 = temp__3698__auto____10098;

{
var G__10106 = cljs.core.first.call(null,G__10029__10100);
var G__10107 = G__10029__10100;
G__10034__10041 = G__10106;
G__10029__10042 = G__10107;
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
var this__10117 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10122 = this;
return (new cljs.core.List(this__10122.meta,o,coll,(this__10122.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10123 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10125 = this;
return this__10125.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10130 = this;
return this__10130.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10131 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10133 = this;
return this__10133.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10135 = this;
return this__10135.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10137 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10139 = this;
return (new cljs.core.List(meta,this__10139.first,this__10139.rest,this__10139.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10141 = this;
return this__10141.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10143 = this;
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
var this__10158 = this;
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
var this__10164 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10165 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10166 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10167 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10171 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10172 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10173 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10174 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10175 = this;
return this__10175.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10176 = this;
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
list.cljs$lang$applyTo = (function (arglist__10272){
var items = cljs.core.seq( arglist__10272 );;
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
var this__10281 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10283 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10284 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10285 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10285.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10286 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10287 = this;
return this__10287.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10288 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10288.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10288.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10289 = this;
return this__10289.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10290 = this;
return (new cljs.core.Cons(meta,this__10290.first,this__10290.rest));
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
var G__10308 = null;
var G__10308__10309 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10308__10310 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10308 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10308__10309.call(this,string,f);
case  3 :
return G__10308__10310.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10308;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10346 = null;
var G__10346__10349 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10346__10350 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10346 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10346__10349.call(this,string,k);
case  3 :
return G__10346__10350.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10346;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10355 = null;
var G__10355__10356 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10355__10357 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10355 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10355__10356.call(this,string,n);
case  3 :
return G__10355__10357.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10355;
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
var G__10363 = null;
var G__10363__10364 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10363__10365 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10363 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10363__10364.call(this,this$,coll);
case  3 :
return G__10363__10365.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10363;
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
var x__10375 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10375;
} else
{lazy_seq.x = x__10375.call(null);
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
var this__10393 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10395 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10398 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10400 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10400.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10401 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10402 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10419 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10420 = this;
return this__10420.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10425 = this;
return (new cljs.core.LazySeq(meta,this__10425.realized,this__10425.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10450 = cljs.core.array.call(null);

var s__10452 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10452)))
{ary__10450.push(cljs.core.first.call(null,s__10452));
{
var G__10454 = cljs.core.next.call(null,s__10452);
s__10452 = G__10454;
continue;
}
} else
{return ary__10450;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10457 = s;
var i__10458 = n;
var sum__10459 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10460 = (i__10458 > 0);

if(cljs.core.truth_(and__3546__auto____10460))
{return cljs.core.seq.call(null,s__10457);
} else
{return and__3546__auto____10460;
}
})()))
{{
var G__10474 = cljs.core.next.call(null,s__10457);
var G__10475 = (i__10458 - 1);
var G__10476 = (sum__10459 + 1);
s__10457 = G__10474;
i__10458 = G__10475;
sum__10459 = G__10476;
continue;
}
} else
{return sum__10459;
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
var concat__10559 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10560 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10561 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10487 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10487))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10487),concat.call(null,cljs.core.rest.call(null,s__10487),y));
} else
{return y;
}
})));
});
var concat__10562 = (function() { 
var G__10571__delegate = function (x,y,zs){
var cat__10554 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10550 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10550))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10550),cat.call(null,cljs.core.rest.call(null,xys__10550),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10554.call(null,concat.call(null,x,y),zs);
};
var G__10571 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10571__delegate.call(this, x, y, zs);
};
G__10571.cljs$lang$maxFixedArity = 2;
G__10571.cljs$lang$applyTo = (function (arglist__10605){
var x = cljs.core.first(arglist__10605);
var y = cljs.core.first(cljs.core.next(arglist__10605));
var zs = cljs.core.rest(cljs.core.next(arglist__10605));
return G__10571__delegate.call(this, x, y, zs);
});
return G__10571;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10559.call(this);
case  1 :
return concat__10560.call(this,x);
case  2 :
return concat__10561.call(this,x,y);
default:
return concat__10562.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10562.cljs$lang$applyTo;
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
var list_STAR___10621 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10622 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10623 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10624 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10625 = (function() { 
var G__10634__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10634 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10634__delegate.call(this, a, b, c, d, more);
};
G__10634.cljs$lang$maxFixedArity = 4;
G__10634.cljs$lang$applyTo = (function (arglist__10635){
var a = cljs.core.first(arglist__10635);
var b = cljs.core.first(cljs.core.next(arglist__10635));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10635)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10635))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10635))));
return G__10634__delegate.call(this, a, b, c, d, more);
});
return G__10634;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10621.call(this,a);
case  2 :
return list_STAR___10622.call(this,a,b);
case  3 :
return list_STAR___10623.call(this,a,b,c);
case  4 :
return list_STAR___10624.call(this,a,b,c,d);
default:
return list_STAR___10625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10625.cljs$lang$applyTo;
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
var apply__10666 = (function (f,args){
var fixed_arity__10636 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10636 + 1)) <= fixed_arity__10636)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10667 = (function (f,x,args){
var arglist__10637 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10638 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10637,fixed_arity__10638) <= fixed_arity__10638)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10637));
} else
{return f.cljs$lang$applyTo(arglist__10637);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10637));
}
});
var apply__10668 = (function (f,x,y,args){
var arglist__10639 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10641 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10639,fixed_arity__10641) <= fixed_arity__10641)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10639));
} else
{return f.cljs$lang$applyTo(arglist__10639);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10639));
}
});
var apply__10669 = (function (f,x,y,z,args){
var arglist__10643 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10644 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10643,fixed_arity__10644) <= fixed_arity__10644)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10643));
} else
{return f.cljs$lang$applyTo(arglist__10643);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10643));
}
});
var apply__10670 = (function() { 
var G__10686__delegate = function (f,a,b,c,d,args){
var arglist__10659 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10662 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10659,fixed_arity__10662) <= fixed_arity__10662)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10659));
} else
{return f.cljs$lang$applyTo(arglist__10659);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10659));
}
};
var G__10686 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10686__delegate.call(this, f, a, b, c, d, args);
};
G__10686.cljs$lang$maxFixedArity = 5;
G__10686.cljs$lang$applyTo = (function (arglist__10689){
var f = cljs.core.first(arglist__10689);
var a = cljs.core.first(cljs.core.next(arglist__10689));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10689)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10689))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10689)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10689)))));
return G__10686__delegate.call(this, f, a, b, c, d, args);
});
return G__10686;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10666.call(this,f,a);
case  3 :
return apply__10667.call(this,f,a,b);
case  4 :
return apply__10668.call(this,f,a,b,c);
case  5 :
return apply__10669.call(this,f,a,b,c,d);
default:
return apply__10670.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10670.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10766){
var obj = cljs.core.first(arglist__10766);
var f = cljs.core.first(cljs.core.next(arglist__10766));
var args = cljs.core.rest(cljs.core.next(arglist__10766));
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
var not_EQ___10772 = (function (x){
return false;
});
var not_EQ___10774 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10775 = (function() { 
var G__10778__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10778 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10778__delegate.call(this, x, y, more);
};
G__10778.cljs$lang$maxFixedArity = 2;
G__10778.cljs$lang$applyTo = (function (arglist__10780){
var x = cljs.core.first(arglist__10780);
var y = cljs.core.first(cljs.core.next(arglist__10780));
var more = cljs.core.rest(cljs.core.next(arglist__10780));
return G__10778__delegate.call(this, x, y, more);
});
return G__10778;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10772.call(this,x);
case  2 :
return not_EQ___10774.call(this,x,y);
default:
return not_EQ___10775.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10775.cljs$lang$applyTo;
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
var G__10792 = pred;
var G__10793 = cljs.core.next.call(null,coll);
pred = G__10792;
coll = G__10793;
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
{var or__3548__auto____10804 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10804))
{return or__3548__auto____10804;
} else
{{
var G__10811 = pred;
var G__10812 = cljs.core.next.call(null,coll);
pred = G__10811;
coll = G__10812;
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
var G__10844 = null;
var G__10844__10846 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10844__10847 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10844__10848 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10844__10849 = (function() { 
var G__10852__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10852 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10852__delegate.call(this, x, y, zs);
};
G__10852.cljs$lang$maxFixedArity = 2;
G__10852.cljs$lang$applyTo = (function (arglist__10854){
var x = cljs.core.first(arglist__10854);
var y = cljs.core.first(cljs.core.next(arglist__10854));
var zs = cljs.core.rest(cljs.core.next(arglist__10854));
return G__10852__delegate.call(this, x, y, zs);
});
return G__10852;
})()
;
G__10844 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10844__10846.call(this);
case  1 :
return G__10844__10847.call(this,x);
case  2 :
return G__10844__10848.call(this,x,y);
default:
return G__10844__10849.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10844.cljs$lang$maxFixedArity = 2;
G__10844.cljs$lang$applyTo = G__10844__10849.cljs$lang$applyTo;
return G__10844;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10857__delegate = function (args){
return x;
};
var G__10857 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10857__delegate.call(this, args);
};
G__10857.cljs$lang$maxFixedArity = 0;
G__10857.cljs$lang$applyTo = (function (arglist__10862){
var args = cljs.core.seq( arglist__10862 );;
return G__10857__delegate.call(this, args);
});
return G__10857;
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
var comp__11096 = (function (){
return cljs.core.identity;
});
var comp__11097 = (function (f){
return f;
});
var comp__11098 = (function (f,g){
return (function() {
var G__11102 = null;
var G__11102__11103 = (function (){
return f.call(null,g.call(null));
});
var G__11102__11104 = (function (x){
return f.call(null,g.call(null,x));
});
var G__11102__11105 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__11102__11106 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__11102__11107 = (function() { 
var G__11131__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__11131 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11131__delegate.call(this, x, y, z, args);
};
G__11131.cljs$lang$maxFixedArity = 3;
G__11131.cljs$lang$applyTo = (function (arglist__11138){
var x = cljs.core.first(arglist__11138);
var y = cljs.core.first(cljs.core.next(arglist__11138));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11138)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11138)));
return G__11131__delegate.call(this, x, y, z, args);
});
return G__11131;
})()
;
G__11102 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__11102__11103.call(this);
case  1 :
return G__11102__11104.call(this,x);
case  2 :
return G__11102__11105.call(this,x,y);
case  3 :
return G__11102__11106.call(this,x,y,z);
default:
return G__11102__11107.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11102.cljs$lang$maxFixedArity = 3;
G__11102.cljs$lang$applyTo = G__11102__11107.cljs$lang$applyTo;
return G__11102;
})()
});
var comp__11099 = (function (f,g,h){
return (function() {
var G__11148 = null;
var G__11148__11149 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__11148__11150 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__11148__11152 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__11148__11153 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__11148__11154 = (function() { 
var G__11159__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__11159 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11159__delegate.call(this, x, y, z, args);
};
G__11159.cljs$lang$maxFixedArity = 3;
G__11159.cljs$lang$applyTo = (function (arglist__11172){
var x = cljs.core.first(arglist__11172);
var y = cljs.core.first(cljs.core.next(arglist__11172));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11172)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11172)));
return G__11159__delegate.call(this, x, y, z, args);
});
return G__11159;
})()
;
G__11148 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__11148__11149.call(this);
case  1 :
return G__11148__11150.call(this,x);
case  2 :
return G__11148__11152.call(this,x,y);
case  3 :
return G__11148__11153.call(this,x,y,z);
default:
return G__11148__11154.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11148.cljs$lang$maxFixedArity = 3;
G__11148.cljs$lang$applyTo = G__11148__11154.cljs$lang$applyTo;
return G__11148;
})()
});
var comp__11100 = (function() { 
var G__11174__delegate = function (f1,f2,f3,fs){
var fs__11076 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__11178__delegate = function (args){
var ret__11078 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__11076),args);
var fs__11079 = cljs.core.next.call(null,fs__11076);

while(true){
if(cljs.core.truth_(fs__11079))
{{
var G__11271 = cljs.core.first.call(null,fs__11079).call(null,ret__11078);
var G__11272 = cljs.core.next.call(null,fs__11079);
ret__11078 = G__11271;
fs__11079 = G__11272;
continue;
}
} else
{return ret__11078;
}
break;
}
};
var G__11178 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11178__delegate.call(this, args);
};
G__11178.cljs$lang$maxFixedArity = 0;
G__11178.cljs$lang$applyTo = (function (arglist__11273){
var args = cljs.core.seq( arglist__11273 );;
return G__11178__delegate.call(this, args);
});
return G__11178;
})()
;
};
var G__11174 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11174__delegate.call(this, f1, f2, f3, fs);
};
G__11174.cljs$lang$maxFixedArity = 3;
G__11174.cljs$lang$applyTo = (function (arglist__11274){
var f1 = cljs.core.first(arglist__11274);
var f2 = cljs.core.first(cljs.core.next(arglist__11274));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11274)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11274)));
return G__11174__delegate.call(this, f1, f2, f3, fs);
});
return G__11174;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__11096.call(this);
case  1 :
return comp__11097.call(this,f1);
case  2 :
return comp__11098.call(this,f1,f2);
case  3 :
return comp__11099.call(this,f1,f2,f3);
default:
return comp__11100.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__11100.cljs$lang$applyTo;
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
var partial__11281 = (function (f,arg1){
return (function() { 
var G__11292__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__11292 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11292__delegate.call(this, args);
};
G__11292.cljs$lang$maxFixedArity = 0;
G__11292.cljs$lang$applyTo = (function (arglist__11301){
var args = cljs.core.seq( arglist__11301 );;
return G__11292__delegate.call(this, args);
});
return G__11292;
})()
;
});
var partial__11282 = (function (f,arg1,arg2){
return (function() { 
var G__11303__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__11303 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11303__delegate.call(this, args);
};
G__11303.cljs$lang$maxFixedArity = 0;
G__11303.cljs$lang$applyTo = (function (arglist__11304){
var args = cljs.core.seq( arglist__11304 );;
return G__11303__delegate.call(this, args);
});
return G__11303;
})()
;
});
var partial__11283 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__11311__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__11311 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11311__delegate.call(this, args);
};
G__11311.cljs$lang$maxFixedArity = 0;
G__11311.cljs$lang$applyTo = (function (arglist__11312){
var args = cljs.core.seq( arglist__11312 );;
return G__11311__delegate.call(this, args);
});
return G__11311;
})()
;
});
var partial__11285 = (function() { 
var G__11313__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__11314__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__11314 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11314__delegate.call(this, args);
};
G__11314.cljs$lang$maxFixedArity = 0;
G__11314.cljs$lang$applyTo = (function (arglist__11316){
var args = cljs.core.seq( arglist__11316 );;
return G__11314__delegate.call(this, args);
});
return G__11314;
})()
;
};
var G__11313 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11313__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__11313.cljs$lang$maxFixedArity = 4;
G__11313.cljs$lang$applyTo = (function (arglist__11317){
var f = cljs.core.first(arglist__11317);
var arg1 = cljs.core.first(cljs.core.next(arglist__11317));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11317)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11317))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11317))));
return G__11313__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__11313;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__11281.call(this,f,arg1);
case  3 :
return partial__11282.call(this,f,arg1,arg2);
case  4 :
return partial__11283.call(this,f,arg1,arg2,arg3);
default:
return partial__11285.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__11285.cljs$lang$applyTo;
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
var fnil__11355 = (function (f,x){
return (function() {
var G__11360 = null;
var G__11360__11361 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__11360__11362 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__11360__11363 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__11360__11364 = (function() { 
var G__11372__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__11372 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11372__delegate.call(this, a, b, c, ds);
};
G__11372.cljs$lang$maxFixedArity = 3;
G__11372.cljs$lang$applyTo = (function (arglist__11464){
var a = cljs.core.first(arglist__11464);
var b = cljs.core.first(cljs.core.next(arglist__11464));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11464)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11464)));
return G__11372__delegate.call(this, a, b, c, ds);
});
return G__11372;
})()
;
G__11360 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__11360__11361.call(this,a);
case  2 :
return G__11360__11362.call(this,a,b);
case  3 :
return G__11360__11363.call(this,a,b,c);
default:
return G__11360__11364.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11360.cljs$lang$maxFixedArity = 3;
G__11360.cljs$lang$applyTo = G__11360__11364.cljs$lang$applyTo;
return G__11360;
})()
});
var fnil__11356 = (function (f,x,y){
return (function() {
var G__11468 = null;
var G__11468__11470 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11468__11471 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11468__11473 = (function() { 
var G__11480__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11480 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11480__delegate.call(this, a, b, c, ds);
};
G__11480.cljs$lang$maxFixedArity = 3;
G__11480.cljs$lang$applyTo = (function (arglist__11483){
var a = cljs.core.first(arglist__11483);
var b = cljs.core.first(cljs.core.next(arglist__11483));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11483)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11483)));
return G__11480__delegate.call(this, a, b, c, ds);
});
return G__11480;
})()
;
G__11468 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11468__11470.call(this,a,b);
case  3 :
return G__11468__11471.call(this,a,b,c);
default:
return G__11468__11473.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11468.cljs$lang$maxFixedArity = 3;
G__11468.cljs$lang$applyTo = G__11468__11473.cljs$lang$applyTo;
return G__11468;
})()
});
var fnil__11357 = (function (f,x,y,z){
return (function() {
var G__11484 = null;
var G__11484__11485 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11484__11487 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11484__11488 = (function() { 
var G__11493__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11493 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11493__delegate.call(this, a, b, c, ds);
};
G__11493.cljs$lang$maxFixedArity = 3;
G__11493.cljs$lang$applyTo = (function (arglist__11502){
var a = cljs.core.first(arglist__11502);
var b = cljs.core.first(cljs.core.next(arglist__11502));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11502)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11502)));
return G__11493__delegate.call(this, a, b, c, ds);
});
return G__11493;
})()
;
G__11484 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11484__11485.call(this,a,b);
case  3 :
return G__11484__11487.call(this,a,b,c);
default:
return G__11484__11488.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11484.cljs$lang$maxFixedArity = 3;
G__11484.cljs$lang$applyTo = G__11484__11488.cljs$lang$applyTo;
return G__11484;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__11355.call(this,f,x);
case  3 :
return fnil__11356.call(this,f,x,y);
case  4 :
return fnil__11357.call(this,f,x,y,z);
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
var mapi__11515 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11510 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11510))
{var s__11512 = temp__3698__auto____11510;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11512)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11512)));
} else
{return null;
}
})));
});

return mapi__11515.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11523 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11523))
{var s__11524 = temp__3698__auto____11523;

var x__11526 = f.call(null,cljs.core.first.call(null,s__11524));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11526)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11524));
} else
{return cljs.core.cons.call(null,x__11526,keep.call(null,f,cljs.core.rest.call(null,s__11524)));
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
var keepi__11566 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11557 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11557))
{var s__11560 = temp__3698__auto____11557;

var x__11563 = f.call(null,idx,cljs.core.first.call(null,s__11560));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11563)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11560));
} else
{return cljs.core.cons.call(null,x__11563,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11560)));
}
} else
{return null;
}
})));
});

return keepi__11566.call(null,0,coll);
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
var every_pred__11730 = (function (p){
return (function() {
var ep1 = null;
var ep1__11736 = (function (){
return true;
});
var ep1__11738 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11739 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11590 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11590))
{return p.call(null,y);
} else
{return and__3546__auto____11590;
}
})());
});
var ep1__11740 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11594 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11594))
{var and__3546__auto____11596 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11596))
{return p.call(null,z);
} else
{return and__3546__auto____11596;
}
} else
{return and__3546__auto____11594;
}
})());
});
var ep1__11741 = (function() { 
var G__11755__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11598 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11598))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11598;
}
})());
};
var G__11755 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11755__delegate.call(this, x, y, z, args);
};
G__11755.cljs$lang$maxFixedArity = 3;
G__11755.cljs$lang$applyTo = (function (arglist__11756){
var x = cljs.core.first(arglist__11756);
var y = cljs.core.first(cljs.core.next(arglist__11756));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11756)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11756)));
return G__11755__delegate.call(this, x, y, z, args);
});
return G__11755;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11736.call(this);
case  1 :
return ep1__11738.call(this,x);
case  2 :
return ep1__11739.call(this,x,y);
case  3 :
return ep1__11740.call(this,x,y,z);
default:
return ep1__11741.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11741.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11731 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11808 = (function (){
return true;
});
var ep2__11809 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11602 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11602))
{return p2.call(null,x);
} else
{return and__3546__auto____11602;
}
})());
});
var ep2__11810 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11604 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11604))
{var and__3546__auto____11606 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11606))
{var and__3546__auto____11608 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11608))
{return p2.call(null,y);
} else
{return and__3546__auto____11608;
}
} else
{return and__3546__auto____11606;
}
} else
{return and__3546__auto____11604;
}
})());
});
var ep2__11811 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11609 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11609))
{var and__3546__auto____11612 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11612))
{var and__3546__auto____11620 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11620))
{var and__3546__auto____11621 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11621))
{var and__3546__auto____11622 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11622))
{return p2.call(null,z);
} else
{return and__3546__auto____11622;
}
} else
{return and__3546__auto____11621;
}
} else
{return and__3546__auto____11620;
}
} else
{return and__3546__auto____11612;
}
} else
{return and__3546__auto____11609;
}
})());
});
var ep2__11812 = (function() { 
var G__11825__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11624 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11624))
{return cljs.core.every_QMARK_.call(null,(function (p1__11533_SHARP_){
var and__3546__auto____11625 = p1.call(null,p1__11533_SHARP_);

if(cljs.core.truth_(and__3546__auto____11625))
{return p2.call(null,p1__11533_SHARP_);
} else
{return and__3546__auto____11625;
}
}),args);
} else
{return and__3546__auto____11624;
}
})());
};
var G__11825 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11825__delegate.call(this, x, y, z, args);
};
G__11825.cljs$lang$maxFixedArity = 3;
G__11825.cljs$lang$applyTo = (function (arglist__11827){
var x = cljs.core.first(arglist__11827);
var y = cljs.core.first(cljs.core.next(arglist__11827));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11827)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11827)));
return G__11825__delegate.call(this, x, y, z, args);
});
return G__11825;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11808.call(this);
case  1 :
return ep2__11809.call(this,x);
case  2 :
return ep2__11810.call(this,x,y);
case  3 :
return ep2__11811.call(this,x,y,z);
default:
return ep2__11812.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11812.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11732 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11831 = (function (){
return true;
});
var ep3__11832 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11627 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11627))
{var and__3546__auto____11628 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11628))
{return p3.call(null,x);
} else
{return and__3546__auto____11628;
}
} else
{return and__3546__auto____11627;
}
})());
});
var ep3__11833 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11629 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11629))
{var and__3546__auto____11630 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11630))
{var and__3546__auto____11632 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11632))
{var and__3546__auto____11633 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11633))
{var and__3546__auto____11634 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11634))
{return p3.call(null,y);
} else
{return and__3546__auto____11634;
}
} else
{return and__3546__auto____11633;
}
} else
{return and__3546__auto____11632;
}
} else
{return and__3546__auto____11630;
}
} else
{return and__3546__auto____11629;
}
})());
});
var ep3__11834 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11635 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11635))
{var and__3546__auto____11636 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11636))
{var and__3546__auto____11638 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11638))
{var and__3546__auto____11639 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11639))
{var and__3546__auto____11640 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11640))
{var and__3546__auto____11641 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11641))
{var and__3546__auto____11642 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11642))
{var and__3546__auto____11643 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11643))
{return p3.call(null,z);
} else
{return and__3546__auto____11643;
}
} else
{return and__3546__auto____11642;
}
} else
{return and__3546__auto____11641;
}
} else
{return and__3546__auto____11640;
}
} else
{return and__3546__auto____11639;
}
} else
{return and__3546__auto____11638;
}
} else
{return and__3546__auto____11636;
}
} else
{return and__3546__auto____11635;
}
})());
});
var ep3__11835 = (function() { 
var G__11850__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11648 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11648))
{return cljs.core.every_QMARK_.call(null,(function (p1__11535_SHARP_){
var and__3546__auto____11656 = p1.call(null,p1__11535_SHARP_);

if(cljs.core.truth_(and__3546__auto____11656))
{var and__3546__auto____11657 = p2.call(null,p1__11535_SHARP_);

if(cljs.core.truth_(and__3546__auto____11657))
{return p3.call(null,p1__11535_SHARP_);
} else
{return and__3546__auto____11657;
}
} else
{return and__3546__auto____11656;
}
}),args);
} else
{return and__3546__auto____11648;
}
})());
};
var G__11850 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11850__delegate.call(this, x, y, z, args);
};
G__11850.cljs$lang$maxFixedArity = 3;
G__11850.cljs$lang$applyTo = (function (arglist__11856){
var x = cljs.core.first(arglist__11856);
var y = cljs.core.first(cljs.core.next(arglist__11856));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11856)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11856)));
return G__11850__delegate.call(this, x, y, z, args);
});
return G__11850;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11831.call(this);
case  1 :
return ep3__11832.call(this,x);
case  2 :
return ep3__11833.call(this,x,y);
case  3 :
return ep3__11834.call(this,x,y,z);
default:
return ep3__11835.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11835.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11733 = (function() { 
var G__11860__delegate = function (p1,p2,p3,ps){
var ps__11672 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11863 = (function (){
return true;
});
var epn__11864 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11542_SHARP_){
return p1__11542_SHARP_.call(null,x);
}),ps__11672);
});
var epn__11865 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11543_SHARP_){
var and__3546__auto____11679 = p1__11543_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11679))
{return p1__11543_SHARP_.call(null,y);
} else
{return and__3546__auto____11679;
}
}),ps__11672);
});
var epn__11867 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11544_SHARP_){
var and__3546__auto____11683 = p1__11544_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11683))
{var and__3546__auto____11686 = p1__11544_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11686))
{return p1__11544_SHARP_.call(null,z);
} else
{return and__3546__auto____11686;
}
} else
{return and__3546__auto____11683;
}
}),ps__11672);
});
var epn__11868 = (function() { 
var G__11875__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11689 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11689))
{return cljs.core.every_QMARK_.call(null,(function (p1__11545_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11545_SHARP_,args);
}),ps__11672);
} else
{return and__3546__auto____11689;
}
})());
};
var G__11875 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11875__delegate.call(this, x, y, z, args);
};
G__11875.cljs$lang$maxFixedArity = 3;
G__11875.cljs$lang$applyTo = (function (arglist__11878){
var x = cljs.core.first(arglist__11878);
var y = cljs.core.first(cljs.core.next(arglist__11878));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11878)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11878)));
return G__11875__delegate.call(this, x, y, z, args);
});
return G__11875;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11863.call(this);
case  1 :
return epn__11864.call(this,x);
case  2 :
return epn__11865.call(this,x,y);
case  3 :
return epn__11867.call(this,x,y,z);
default:
return epn__11868.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11868.cljs$lang$applyTo;
return epn;
})()
};
var G__11860 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11860__delegate.call(this, p1, p2, p3, ps);
};
G__11860.cljs$lang$maxFixedArity = 3;
G__11860.cljs$lang$applyTo = (function (arglist__11879){
var p1 = cljs.core.first(arglist__11879);
var p2 = cljs.core.first(cljs.core.next(arglist__11879));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11879)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11879)));
return G__11860__delegate.call(this, p1, p2, p3, ps);
});
return G__11860;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11730.call(this,p1);
case  2 :
return every_pred__11731.call(this,p1,p2);
case  3 :
return every_pred__11732.call(this,p1,p2,p3);
default:
return every_pred__11733.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11733.cljs$lang$applyTo;
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
var some_fn__11988 = (function (p){
return (function() {
var sp1 = null;
var sp1__11998 = (function (){
return null;
});
var sp1__12001 = (function (x){
return p.call(null,x);
});
var sp1__12002 = (function (x,y){
var or__3548__auto____11886 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11886))
{return or__3548__auto____11886;
} else
{return p.call(null,y);
}
});
var sp1__12003 = (function (x,y,z){
var or__3548__auto____11888 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11888))
{return or__3548__auto____11888;
} else
{var or__3548__auto____11890 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11890))
{return or__3548__auto____11890;
} else
{return p.call(null,z);
}
}
});
var sp1__12004 = (function() { 
var G__12012__delegate = function (x,y,z,args){
var or__3548__auto____11892 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11892))
{return or__3548__auto____11892;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__12012 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12012__delegate.call(this, x, y, z, args);
};
G__12012.cljs$lang$maxFixedArity = 3;
G__12012.cljs$lang$applyTo = (function (arglist__12015){
var x = cljs.core.first(arglist__12015);
var y = cljs.core.first(cljs.core.next(arglist__12015));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12015)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12015)));
return G__12012__delegate.call(this, x, y, z, args);
});
return G__12012;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11998.call(this);
case  1 :
return sp1__12001.call(this,x);
case  2 :
return sp1__12002.call(this,x,y);
case  3 :
return sp1__12003.call(this,x,y,z);
default:
return sp1__12004.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__12004.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11989 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__12019 = (function (){
return null;
});
var sp2__12021 = (function (x){
var or__3548__auto____11895 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11895))
{return or__3548__auto____11895;
} else
{return p2.call(null,x);
}
});
var sp2__12022 = (function (x,y){
var or__3548__auto____11897 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11897))
{return or__3548__auto____11897;
} else
{var or__3548__auto____11899 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11899))
{return or__3548__auto____11899;
} else
{var or__3548__auto____11901 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11901))
{return or__3548__auto____11901;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__12023 = (function (x,y,z){
var or__3548__auto____11903 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11903))
{return or__3548__auto____11903;
} else
{var or__3548__auto____11905 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11905))
{return or__3548__auto____11905;
} else
{var or__3548__auto____11906 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11906))
{return or__3548__auto____11906;
} else
{var or__3548__auto____11907 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11907))
{return or__3548__auto____11907;
} else
{var or__3548__auto____11908 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11908))
{return or__3548__auto____11908;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__12024 = (function() { 
var G__12031__delegate = function (x,y,z,args){
var or__3548__auto____11912 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11912))
{return or__3548__auto____11912;
} else
{return cljs.core.some.call(null,(function (p1__11580_SHARP_){
var or__3548__auto____11914 = p1.call(null,p1__11580_SHARP_);

if(cljs.core.truth_(or__3548__auto____11914))
{return or__3548__auto____11914;
} else
{return p2.call(null,p1__11580_SHARP_);
}
}),args);
}
};
var G__12031 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12031__delegate.call(this, x, y, z, args);
};
G__12031.cljs$lang$maxFixedArity = 3;
G__12031.cljs$lang$applyTo = (function (arglist__12036){
var x = cljs.core.first(arglist__12036);
var y = cljs.core.first(cljs.core.next(arglist__12036));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12036)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12036)));
return G__12031__delegate.call(this, x, y, z, args);
});
return G__12031;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__12019.call(this);
case  1 :
return sp2__12021.call(this,x);
case  2 :
return sp2__12022.call(this,x,y);
case  3 :
return sp2__12023.call(this,x,y,z);
default:
return sp2__12024.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__12024.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11990 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__12040 = (function (){
return null;
});
var sp3__12042 = (function (x){
var or__3548__auto____11923 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11923))
{return or__3548__auto____11923;
} else
{var or__3548__auto____11925 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11925))
{return or__3548__auto____11925;
} else
{return p3.call(null,x);
}
}
});
var sp3__12043 = (function (x,y){
var or__3548__auto____11927 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11927))
{return or__3548__auto____11927;
} else
{var or__3548__auto____11929 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11929))
{return or__3548__auto____11929;
} else
{var or__3548__auto____11931 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11931))
{return or__3548__auto____11931;
} else
{var or__3548__auto____11933 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11933))
{return or__3548__auto____11933;
} else
{var or__3548__auto____11935 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11935))
{return or__3548__auto____11935;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__12044 = (function (x,y,z){
var or__3548__auto____11936 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11936))
{return or__3548__auto____11936;
} else
{var or__3548__auto____11937 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11937))
{return or__3548__auto____11937;
} else
{var or__3548__auto____11945 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11945))
{return or__3548__auto____11945;
} else
{var or__3548__auto____11946 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11946))
{return or__3548__auto____11946;
} else
{var or__3548__auto____11947 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11947))
{return or__3548__auto____11947;
} else
{var or__3548__auto____11951 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11951))
{return or__3548__auto____11951;
} else
{var or__3548__auto____11952 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11952))
{return or__3548__auto____11952;
} else
{var or__3548__auto____11953 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11953))
{return or__3548__auto____11953;
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
var sp3__12046 = (function() { 
var G__12057__delegate = function (x,y,z,args){
var or__3548__auto____11956 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11956))
{return or__3548__auto____11956;
} else
{return cljs.core.some.call(null,(function (p1__11581_SHARP_){
var or__3548__auto____11958 = p1.call(null,p1__11581_SHARP_);

if(cljs.core.truth_(or__3548__auto____11958))
{return or__3548__auto____11958;
} else
{var or__3548__auto____11960 = p2.call(null,p1__11581_SHARP_);

if(cljs.core.truth_(or__3548__auto____11960))
{return or__3548__auto____11960;
} else
{return p3.call(null,p1__11581_SHARP_);
}
}
}),args);
}
};
var G__12057 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12057__delegate.call(this, x, y, z, args);
};
G__12057.cljs$lang$maxFixedArity = 3;
G__12057.cljs$lang$applyTo = (function (arglist__12067){
var x = cljs.core.first(arglist__12067);
var y = cljs.core.first(cljs.core.next(arglist__12067));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12067)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12067)));
return G__12057__delegate.call(this, x, y, z, args);
});
return G__12057;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__12040.call(this);
case  1 :
return sp3__12042.call(this,x);
case  2 :
return sp3__12043.call(this,x,y);
case  3 :
return sp3__12044.call(this,x,y,z);
default:
return sp3__12046.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__12046.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11992 = (function() { 
var G__12072__delegate = function (p1,p2,p3,ps){
var ps__11963 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__12073 = (function (){
return null;
});
var spn__12074 = (function (x){
return cljs.core.some.call(null,(function (p1__11584_SHARP_){
return p1__11584_SHARP_.call(null,x);
}),ps__11963);
});
var spn__12075 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11585_SHARP_){
var or__3548__auto____11971 = p1__11585_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11971))
{return or__3548__auto____11971;
} else
{return p1__11585_SHARP_.call(null,y);
}
}),ps__11963);
});
var spn__12076 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11586_SHARP_){
var or__3548__auto____11975 = p1__11586_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11975))
{return or__3548__auto____11975;
} else
{var or__3548__auto____11977 = p1__11586_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11977))
{return or__3548__auto____11977;
} else
{return p1__11586_SHARP_.call(null,z);
}
}
}),ps__11963);
});
var spn__12077 = (function() { 
var G__12129__delegate = function (x,y,z,args){
var or__3548__auto____11982 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11982))
{return or__3548__auto____11982;
} else
{return cljs.core.some.call(null,(function (p1__11588_SHARP_){
return cljs.core.some.call(null,p1__11588_SHARP_,args);
}),ps__11963);
}
};
var G__12129 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12129__delegate.call(this, x, y, z, args);
};
G__12129.cljs$lang$maxFixedArity = 3;
G__12129.cljs$lang$applyTo = (function (arglist__12136){
var x = cljs.core.first(arglist__12136);
var y = cljs.core.first(cljs.core.next(arglist__12136));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12136)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12136)));
return G__12129__delegate.call(this, x, y, z, args);
});
return G__12129;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__12073.call(this);
case  1 :
return spn__12074.call(this,x);
case  2 :
return spn__12075.call(this,x,y);
case  3 :
return spn__12076.call(this,x,y,z);
default:
return spn__12077.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__12077.cljs$lang$applyTo;
return spn;
})()
};
var G__12072 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12072__delegate.call(this, p1, p2, p3, ps);
};
G__12072.cljs$lang$maxFixedArity = 3;
G__12072.cljs$lang$applyTo = (function (arglist__12139){
var p1 = cljs.core.first(arglist__12139);
var p2 = cljs.core.first(cljs.core.next(arglist__12139));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12139)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12139)));
return G__12072__delegate.call(this, p1, p2, p3, ps);
});
return G__12072;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11988.call(this,p1);
case  2 :
return some_fn__11989.call(this,p1,p2);
case  3 :
return some_fn__11990.call(this,p1,p2,p3);
default:
return some_fn__11992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11992.cljs$lang$applyTo;
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
var map__12178 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12147 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12147))
{var s__12148 = temp__3698__auto____12147;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__12148)),map.call(null,f,cljs.core.rest.call(null,s__12148)));
} else
{return null;
}
})));
});
var map__12181 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12151 = cljs.core.seq.call(null,c1);
var s2__12152 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12154 = s1__12151;

if(cljs.core.truth_(and__3546__auto____12154))
{return s2__12152;
} else
{return and__3546__auto____12154;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12151),cljs.core.first.call(null,s2__12152)),map.call(null,f,cljs.core.rest.call(null,s1__12151),cljs.core.rest.call(null,s2__12152)));
} else
{return null;
}
})));
});
var map__12182 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12156 = cljs.core.seq.call(null,c1);
var s2__12157 = cljs.core.seq.call(null,c2);
var s3__12158 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____12160 = s1__12156;

if(cljs.core.truth_(and__3546__auto____12160))
{var and__3546__auto____12161 = s2__12157;

if(cljs.core.truth_(and__3546__auto____12161))
{return s3__12158;
} else
{return and__3546__auto____12161;
}
} else
{return and__3546__auto____12160;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12156),cljs.core.first.call(null,s2__12157),cljs.core.first.call(null,s3__12158)),map.call(null,f,cljs.core.rest.call(null,s1__12156),cljs.core.rest.call(null,s2__12157),cljs.core.rest.call(null,s3__12158)));
} else
{return null;
}
})));
});
var map__12184 = (function() { 
var G__12194__delegate = function (f,c1,c2,c3,colls){
var step__12172 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12170 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12170)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12170),step.call(null,map.call(null,cljs.core.rest,ss__12170)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11882_SHARP_){
return cljs.core.apply.call(null,f,p1__11882_SHARP_);
}),step__12172.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12194 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12194__delegate.call(this, f, c1, c2, c3, colls);
};
G__12194.cljs$lang$maxFixedArity = 4;
G__12194.cljs$lang$applyTo = (function (arglist__12198){
var f = cljs.core.first(arglist__12198);
var c1 = cljs.core.first(cljs.core.next(arglist__12198));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12198)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12198))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12198))));
return G__12194__delegate.call(this, f, c1, c2, c3, colls);
});
return G__12194;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__12178.call(this,f,c1);
case  3 :
return map__12181.call(this,f,c1,c2);
case  4 :
return map__12182.call(this,f,c1,c2,c3);
default:
return map__12184.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__12184.cljs$lang$applyTo;
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
{var temp__3698__auto____12205 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12205))
{var s__12206 = temp__3698__auto____12205;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12206),take.call(null,(n - 1),cljs.core.rest.call(null,s__12206)));
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
var step__12217 = (function (n,coll){
while(true){
var s__12211 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12215 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12215))
{return s__12211;
} else
{return and__3546__auto____12215;
}
})()))
{{
var G__12291 = (n - 1);
var G__12292 = cljs.core.rest.call(null,s__12211);
n = G__12291;
coll = G__12292;
continue;
}
} else
{return s__12211;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12217.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12299 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12300 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12299.call(this,n);
case  2 :
return drop_last__12300.call(this,n,s);
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
var s__12310 = cljs.core.seq.call(null,coll);
var lead__12311 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12311))
{{
var G__12312 = cljs.core.next.call(null,s__12310);
var G__12313 = cljs.core.next.call(null,lead__12311);
s__12310 = G__12312;
lead__12311 = G__12313;
continue;
}
} else
{return s__12310;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12321 = (function (pred,coll){
while(true){
var s__12314 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12316 = s__12314;

if(cljs.core.truth_(and__3546__auto____12316))
{return pred.call(null,cljs.core.first.call(null,s__12314));
} else
{return and__3546__auto____12316;
}
})()))
{{
var G__12325 = pred;
var G__12326 = cljs.core.rest.call(null,s__12314);
pred = G__12325;
coll = G__12326;
continue;
}
} else
{return s__12314;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12321.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12332 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12332))
{var s__12334 = temp__3698__auto____12332;

return cljs.core.concat.call(null,s__12334,cycle.call(null,s__12334));
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
var repeat__12338 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12339 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12338.call(this,n);
case  2 :
return repeat__12339.call(this,n,x);
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
var repeatedly__12356 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12357 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12356.call(this,n);
case  2 :
return repeatedly__12357.call(this,n,f);
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
var interleave__12381 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12371 = cljs.core.seq.call(null,c1);
var s2__12372 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12374 = s1__12371;

if(cljs.core.truth_(and__3546__auto____12374))
{return s2__12372;
} else
{return and__3546__auto____12374;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12371),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12372),interleave.call(null,cljs.core.rest.call(null,s1__12371),cljs.core.rest.call(null,s2__12372))));
} else
{return null;
}
})));
});
var interleave__12382 = (function() { 
var G__12388__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12377 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12377)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12377),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12377)));
} else
{return null;
}
})));
};
var G__12388 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12388__delegate.call(this, c1, c2, colls);
};
G__12388.cljs$lang$maxFixedArity = 2;
G__12388.cljs$lang$applyTo = (function (arglist__12391){
var c1 = cljs.core.first(arglist__12391);
var c2 = cljs.core.first(cljs.core.next(arglist__12391));
var colls = cljs.core.rest(cljs.core.next(arglist__12391));
return G__12388__delegate.call(this, c1, c2, colls);
});
return G__12388;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12381.call(this,c1,c2);
default:
return interleave__12382.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12382.cljs$lang$applyTo;
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
var cat__12404 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12400 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12400))
{var coll__12401 = temp__3695__auto____12400;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12401),cat.call(null,cljs.core.rest.call(null,coll__12401),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12404.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12407 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12408 = (function() { 
var G__12410__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12410 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12410__delegate.call(this, f, coll, colls);
};
G__12410.cljs$lang$maxFixedArity = 2;
G__12410.cljs$lang$applyTo = (function (arglist__12411){
var f = cljs.core.first(arglist__12411);
var coll = cljs.core.first(cljs.core.next(arglist__12411));
var colls = cljs.core.rest(cljs.core.next(arglist__12411));
return G__12410__delegate.call(this, f, coll, colls);
});
return G__12410;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12407.call(this,f,coll);
default:
return mapcat__12408.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12408.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12416 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12416))
{var s__12417 = temp__3698__auto____12416;

var f__12418 = cljs.core.first.call(null,s__12417);
var r__12472 = cljs.core.rest.call(null,s__12417);

if(cljs.core.truth_(pred.call(null,f__12418)))
{return cljs.core.cons.call(null,f__12418,filter.call(null,pred,r__12472));
} else
{return filter.call(null,pred,r__12472);
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
var walk__12488 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12488.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12486_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12486_SHARP_));
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
var partition__12523 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12524 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12506 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12506))
{var s__12507 = temp__3698__auto____12506;

var p__12508 = cljs.core.take.call(null,n,s__12507);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12508))))
{return cljs.core.cons.call(null,p__12508,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12507)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12525 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12516 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12516))
{var s__12518 = temp__3698__auto____12516;

var p__12519 = cljs.core.take.call(null,n,s__12518);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12519))))
{return cljs.core.cons.call(null,p__12519,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12518)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12519,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12523.call(this,n,step);
case  3 :
return partition__12524.call(this,n,step,pad);
case  4 :
return partition__12525.call(this,n,step,pad,coll);
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
var get_in__12543 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12544 = (function (m,ks,not_found){
var sentinel__12533 = cljs.core.lookup_sentinel;
var m__12534 = m;
var ks__12536 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12536))
{var m__12537 = cljs.core.get.call(null,m__12534,cljs.core.first.call(null,ks__12536),sentinel__12533);

if(cljs.core.truth_((sentinel__12533 === m__12537)))
{return not_found;
} else
{{
var G__12547 = sentinel__12533;
var G__12548 = m__12537;
var G__12549 = cljs.core.next.call(null,ks__12536);
sentinel__12533 = G__12547;
m__12534 = G__12548;
ks__12536 = G__12549;
continue;
}
}
} else
{return m__12534;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12543.call(this,m,ks);
case  3 :
return get_in__12544.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12554,v){
var vec__12555__12556 = p__12554;
var k__12557 = cljs.core.nth.call(null,vec__12555__12556,0,null);
var ks__12558 = cljs.core.nthnext.call(null,vec__12555__12556,1);

if(cljs.core.truth_(ks__12558))
{return cljs.core.assoc.call(null,m,k__12557,assoc_in.call(null,cljs.core.get.call(null,m,k__12557),ks__12558,v));
} else
{return cljs.core.assoc.call(null,m,k__12557,v);
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
var update_in__delegate = function (m,p__12571,f,args){
var vec__12572__12573 = p__12571;
var k__12574 = cljs.core.nth.call(null,vec__12572__12573,0,null);
var ks__12576 = cljs.core.nthnext.call(null,vec__12572__12573,1);

if(cljs.core.truth_(ks__12576))
{return cljs.core.assoc.call(null,m,k__12574,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12574),ks__12576,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12574,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12574),args));
}
};
var update_in = function (m,p__12571,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12571, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12586){
var m = cljs.core.first(arglist__12586);
var p__12571 = cljs.core.first(cljs.core.next(arglist__12586));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12586)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12586)));
return update_in__delegate.call(this, m, p__12571, f, args);
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
var this__12599 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12703 = null;
var G__12703__12726 = (function (coll,k){
var this__12600 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12703__12727 = (function (coll,k,not_found){
var this__12601 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12703 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12703__12726.call(this,coll,k);
case  3 :
return G__12703__12727.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12703;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12602 = this;
var new_array__12603 = cljs.core.aclone.call(null,this__12602.array);

(new_array__12603[k] = v);
return (new cljs.core.Vector(this__12602.meta,new_array__12603));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12729 = null;
var G__12729__12730 = (function (coll,k){
var this__12604 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12729__12731 = (function (coll,k,not_found){
var this__12606 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12729 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12729__12730.call(this,coll,k);
case  3 :
return G__12729__12731.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12729;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12609 = this;
var new_array__12612 = cljs.core.aclone.call(null,this__12609.array);

new_array__12612.push(o);
return (new cljs.core.Vector(this__12609.meta,new_array__12612));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12734 = null;
var G__12734__12735 = (function (v,f){
var this__12616 = this;
return cljs.core.ci_reduce.call(null,this__12616.array,f);
});
var G__12734__12736 = (function (v,f,start){
var this__12617 = this;
return cljs.core.ci_reduce.call(null,this__12617.array,f,start);
});
G__12734 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12734__12735.call(this,v,f);
case  3 :
return G__12734__12736.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12734;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12621 = this;
if(cljs.core.truth_((this__12621.array.length > 0)))
{var vector_seq__12633 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12621.array.length)))
{return cljs.core.cons.call(null,(this__12621.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12633.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12636 = this;
return this__12636.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12638 = this;
var count__12684 = this__12638.array.length;

if(cljs.core.truth_((count__12684 > 0)))
{return (this__12638.array[(count__12684 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12685 = this;
if(cljs.core.truth_((this__12685.array.length > 0)))
{var new_array__12686 = cljs.core.aclone.call(null,this__12685.array);

new_array__12686.pop();
return (new cljs.core.Vector(this__12685.meta,new_array__12686));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12687 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12691 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12692 = this;
return (new cljs.core.Vector(meta,this__12692.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12693 = this;
return this__12693.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12750 = null;
var G__12750__12752 = (function (coll,n){
var this__12694 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12695 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12695))
{return (n < this__12694.array.length);
} else
{return and__3546__auto____12695;
}
})()))
{return (this__12694.array[n]);
} else
{return null;
}
});
var G__12750__12753 = (function (coll,n,not_found){
var this__12696 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12700 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12700))
{return (n < this__12696.array.length);
} else
{return and__3546__auto____12700;
}
})()))
{return (this__12696.array[n]);
} else
{return not_found;
}
});
G__12750 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12750__12752.call(this,coll,n);
case  3 :
return G__12750__12753.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12750;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12701 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12701.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12776){
var args = cljs.core.seq( arglist__12776 );;
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
var this__12780 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12833 = null;
var G__12833__12835 = (function (coll,k){
var this__12782 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12833__12836 = (function (coll,k,not_found){
var this__12783 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12833 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12833__12835.call(this,coll,k);
case  3 :
return G__12833__12836.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12833;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12784 = this;
var v_pos__12785 = (this__12784.start + key);

return (new cljs.core.Subvec(this__12784.meta,cljs.core._assoc.call(null,this__12784.v,v_pos__12785,val),this__12784.start,((this__12784.end > (v_pos__12785 + 1)) ? this__12784.end : (v_pos__12785 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12903 = null;
var G__12903__12904 = (function (coll,k){
var this__12787 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12903__12905 = (function (coll,k,not_found){
var this__12789 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12903 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12903__12904.call(this,coll,k);
case  3 :
return G__12903__12905.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12903;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12795 = this;
return (new cljs.core.Subvec(this__12795.meta,cljs.core._assoc_n.call(null,this__12795.v,this__12795.end,o),this__12795.start,(this__12795.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12911 = null;
var G__12911__12912 = (function (coll,f){
var this__12801 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12911__12913 = (function (coll,f,start){
var this__12805 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12911 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12911__12912.call(this,coll,f);
case  3 :
return G__12911__12913.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12911;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12806 = this;
var subvec_seq__12812 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12806.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12806.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12812.call(null,this__12806.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12816 = this;
return (this__12816.end - this__12816.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12818 = this;
return cljs.core._nth.call(null,this__12818.v,(this__12818.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12820 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12820.start,this__12820.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12820.meta,this__12820.v,this__12820.start,(this__12820.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12823 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12824 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12825 = this;
return (new cljs.core.Subvec(meta,this__12825.v,this__12825.start,this__12825.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12826 = this;
return this__12826.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12922 = null;
var G__12922__12923 = (function (coll,n){
var this__12827 = this;
return cljs.core._nth.call(null,this__12827.v,(this__12827.start + n));
});
var G__12922__12924 = (function (coll,n,not_found){
var this__12829 = this;
return cljs.core._nth.call(null,this__12829.v,(this__12829.start + n),not_found);
});
G__12922 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12922__12923.call(this,coll,n);
case  3 :
return G__12922__12924.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12922;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12830 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12830.meta);
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
var subvec__12941 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12942 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12941.call(this,v,start);
case  3 :
return subvec__12942.call(this,v,start,end);
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
var this__12953 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12956 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12958 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12959 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12959.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12960 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12961 = this;
return cljs.core._first.call(null,this__12961.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12964 = this;
var temp__3695__auto____12965 = cljs.core.next.call(null,this__12964.front);

if(cljs.core.truth_(temp__3695__auto____12965))
{var f1__12966 = temp__3695__auto____12965;

return (new cljs.core.PersistentQueueSeq(this__12964.meta,f1__12966,this__12964.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12964.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12964.meta,this__12964.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12967 = this;
return this__12967.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12968 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12968.front,this__12968.rear));
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
var this__13021 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13027 = this;
if(cljs.core.truth_(this__13027.front))
{return (new cljs.core.PersistentQueue(this__13027.meta,(this__13027.count + 1),this__13027.front,cljs.core.conj.call(null,(function (){var or__3548__auto____13033 = this__13027.rear;

if(cljs.core.truth_(or__3548__auto____13033))
{return or__3548__auto____13033;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__13027.meta,(this__13027.count + 1),cljs.core.conj.call(null,this__13027.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13036 = this;
var rear__13039 = cljs.core.seq.call(null,this__13036.rear);

if(cljs.core.truth_((function (){var or__3548__auto____13040 = this__13036.front;

if(cljs.core.truth_(or__3548__auto____13040))
{return or__3548__auto____13040;
} else
{return rear__13039;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__13036.front,cljs.core.seq.call(null,rear__13039)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13044 = this;
return this__13044.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__13048 = this;
return cljs.core._first.call(null,this__13048.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__13052 = this;
if(cljs.core.truth_(this__13052.front))
{var temp__3695__auto____13054 = cljs.core.next.call(null,this__13052.front);

if(cljs.core.truth_(temp__3695__auto____13054))
{var f1__13056 = temp__3695__auto____13054;

return (new cljs.core.PersistentQueue(this__13052.meta,(this__13052.count - 1),f1__13056,this__13052.rear));
} else
{return (new cljs.core.PersistentQueue(this__13052.meta,(this__13052.count - 1),cljs.core.seq.call(null,this__13052.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__13149 = this;
return cljs.core.first.call(null,this__13149.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__13150 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13152 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13155 = this;
return (new cljs.core.PersistentQueue(meta,this__13155.count,this__13155.front,this__13155.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13158 = this;
return this__13158.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13159 = this;
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
var this__13322 = this;
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
var len__13350 = array.length;

var i__13351 = 0;

while(true){
if(cljs.core.truth_((i__13351 < len__13350)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__13351]))))
{return i__13351;
} else
{{
var G__13354 = (i__13351 + incr);
i__13351 = G__13354;
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
var obj_map_contains_key_QMARK___13362 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___13363 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____13360 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13360))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13360;
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
return obj_map_contains_key_QMARK___13362.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___13363.call(this,k,strobj,true_val,false_val);
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
var this__13386 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13511 = null;
var G__13511__13512 = (function (coll,k){
var this__13389 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13511__13513 = (function (coll,k,not_found){
var this__13392 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13392.strobj,(this__13392.strobj[k]),not_found);
});
G__13511 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13511__13512.call(this,coll,k);
case  3 :
return G__13511__13513.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13511;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13393 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13395 = goog.object.clone.call(null,this__13393.strobj);
var overwrite_QMARK___13396 = new_strobj__13395.hasOwnProperty(k);

(new_strobj__13395[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13396))
{return (new cljs.core.ObjMap(this__13393.meta,this__13393.keys,new_strobj__13395));
} else
{var new_keys__13399 = cljs.core.aclone.call(null,this__13393.keys);

new_keys__13399.push(k);
return (new cljs.core.ObjMap(this__13393.meta,new_keys__13399,new_strobj__13395));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13393.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13401 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13401.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13530 = null;
var G__13530__13531 = (function (coll,k){
var this__13405 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13530__13532 = (function (coll,k,not_found){
var this__13406 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13530 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13530__13531.call(this,coll,k);
case  3 :
return G__13530__13532.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13530;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13407 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13410 = this;
if(cljs.core.truth_((this__13410.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__13369_SHARP_){
return cljs.core.vector.call(null,p1__13369_SHARP_,(this__13410.strobj[p1__13369_SHARP_]));
}),this__13410.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13412 = this;
return this__13412.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13415 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13421 = this;
return (new cljs.core.ObjMap(meta,this__13421.keys,this__13421.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13426 = this;
return this__13426.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13428 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13428.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13432 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13433 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13433))
{return this__13432.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13433;
}
})()))
{var new_keys__13434 = cljs.core.aclone.call(null,this__13432.keys);
var new_strobj__13435 = goog.object.clone.call(null,this__13432.strobj);

new_keys__13434.splice(cljs.core.scan_array.call(null,1,k,new_keys__13434),1);
cljs.core.js_delete.call(null,new_strobj__13435,k);
return (new cljs.core.ObjMap(this__13432.meta,new_keys__13434,new_strobj__13435));
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
var this__13573 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13659 = null;
var G__13659__13668 = (function (coll,k){
var this__13576 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13659__13669 = (function (coll,k,not_found){
var this__13577 = this;
var bucket__13579 = (this__13577.hashobj[cljs.core.hash.call(null,k)]);
var i__13584 = (cljs.core.truth_(bucket__13579)?cljs.core.scan_array.call(null,2,k,bucket__13579):null);

if(cljs.core.truth_(i__13584))
{return (bucket__13579[(i__13584 + 1)]);
} else
{return not_found;
}
});
G__13659 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13659__13668.call(this,coll,k);
case  3 :
return G__13659__13669.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13659;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13587 = this;
var h__13589 = cljs.core.hash.call(null,k);
var bucket__13590 = (this__13587.hashobj[h__13589]);

if(cljs.core.truth_(bucket__13590))
{var new_bucket__13593 = cljs.core.aclone.call(null,bucket__13590);
var new_hashobj__13596 = goog.object.clone.call(null,this__13587.hashobj);

(new_hashobj__13596[h__13589] = new_bucket__13593);
var temp__3695__auto____13599 = cljs.core.scan_array.call(null,2,k,new_bucket__13593);

if(cljs.core.truth_(temp__3695__auto____13599))
{var i__13601 = temp__3695__auto____13599;

(new_bucket__13593[(i__13601 + 1)] = v);
return (new cljs.core.HashMap(this__13587.meta,this__13587.count,new_hashobj__13596));
} else
{new_bucket__13593.push(k,v);
return (new cljs.core.HashMap(this__13587.meta,(this__13587.count + 1),new_hashobj__13596));
}
} else
{var new_hashobj__13606 = goog.object.clone.call(null,this__13587.hashobj);

(new_hashobj__13606[h__13589] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13587.meta,(this__13587.count + 1),new_hashobj__13606));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13609 = this;
var bucket__13611 = (this__13609.hashobj[cljs.core.hash.call(null,k)]);
var i__13615 = (cljs.core.truth_(bucket__13611)?cljs.core.scan_array.call(null,2,k,bucket__13611):null);

if(cljs.core.truth_(i__13615))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13680 = null;
var G__13680__13681 = (function (coll,k){
var this__13616 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13680__13682 = (function (coll,k,not_found){
var this__13618 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13680 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13680__13681.call(this,coll,k);
case  3 :
return G__13680__13682.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13680;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13620 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13621 = this;
if(cljs.core.truth_((this__13621.count > 0)))
{var hashes__13626 = cljs.core.js_keys.call(null,this__13621.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13551_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13621.hashobj[p1__13551_SHARP_])));
}),hashes__13626);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13629 = this;
return this__13629.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13633 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13641 = this;
return (new cljs.core.HashMap(meta,this__13641.count,this__13641.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13643 = this;
return this__13643.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13649 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13649.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13650 = this;
var h__13654 = cljs.core.hash.call(null,k);
var bucket__13655 = (this__13650.hashobj[h__13654]);
var i__13656 = (cljs.core.truth_(bucket__13655)?cljs.core.scan_array.call(null,2,k,bucket__13655):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13656)))
{return coll;
} else
{var new_hashobj__13657 = goog.object.clone.call(null,this__13650.hashobj);

if(cljs.core.truth_((3 > bucket__13655.length)))
{cljs.core.js_delete.call(null,new_hashobj__13657,h__13654);
} else
{var new_bucket__13658 = cljs.core.aclone.call(null,bucket__13655);

new_bucket__13658.splice(i__13656,2);
(new_hashobj__13657[h__13654] = new_bucket__13658);
}
return (new cljs.core.HashMap(this__13650.meta,(this__13650.count - 1),new_hashobj__13657));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13747 = ks.length;

var i__13748 = 0;
var out__13749 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13748 < len__13747)))
{{
var G__13754 = (i__13748 + 1);
var G__13755 = cljs.core.assoc.call(null,out__13749,(ks[i__13748]),(vs[i__13748]));
i__13748 = G__13754;
out__13749 = G__13755;
continue;
}
} else
{return out__13749;
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
var in$__13756 = cljs.core.seq.call(null,keyvals);
var out__13757 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13756))
{{
var G__13766 = cljs.core.nnext.call(null,in$__13756);
var G__13767 = cljs.core.assoc.call(null,out__13757,cljs.core.first.call(null,in$__13756),cljs.core.second.call(null,in$__13756));
in$__13756 = G__13766;
out__13757 = G__13767;
continue;
}
} else
{return out__13757;
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
hash_map.cljs$lang$applyTo = (function (arglist__13768){
var keyvals = cljs.core.seq( arglist__13768 );;
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
{return cljs.core.reduce.call(null,(function (p1__13777_SHARP_,p2__13780_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13787 = p1__13777_SHARP_;

if(cljs.core.truth_(or__3548__auto____13787))
{return or__3548__auto____13787;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13780_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13802){
var maps = cljs.core.seq( arglist__13802 );;
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
{var merge_entry__13807 = (function (m,e){
var k__13804 = cljs.core.first.call(null,e);
var v__13806 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13804)))
{return cljs.core.assoc.call(null,m,k__13804,f.call(null,cljs.core.get.call(null,m,k__13804),v__13806));
} else
{return cljs.core.assoc.call(null,m,k__13804,v__13806);
}
});
var merge2__13812 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13807,(function (){var or__3548__auto____13810 = m1;

if(cljs.core.truth_(or__3548__auto____13810))
{return or__3548__auto____13810;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13812,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13818){
var f = cljs.core.first(arglist__13818);
var maps = cljs.core.rest(arglist__13818);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13825 = cljs.core.ObjMap.fromObject([],{});
var keys__13829 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13829))
{var key__13830 = cljs.core.first.call(null,keys__13829);
var entry__13854 = cljs.core.get.call(null,map,key__13830,"﷐'user/not-found");

{
var G__13857 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13854,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13825,key__13830,entry__13854):ret__13825);
var G__13858 = cljs.core.next.call(null,keys__13829);
ret__13825 = G__13857;
keys__13829 = G__13858;
continue;
}
} else
{return ret__13825;
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
var this__13872 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13951 = null;
var G__13951__13953 = (function (coll,v){
var this__13873 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13951__13954 = (function (coll,v,not_found){
var this__13899 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13899.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13951 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13951__13953.call(this,coll,v);
case  3 :
return G__13951__13954.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13951;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13960 = null;
var G__13960__13961 = (function (coll,k){
var this__13922 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13960__13962 = (function (coll,k,not_found){
var this__13923 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13960 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13960__13961.call(this,coll,k);
case  3 :
return G__13960__13962.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13960;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13924 = this;
return (new cljs.core.Set(this__13924.meta,cljs.core.assoc.call(null,this__13924.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13925 = this;
return cljs.core.keys.call(null,this__13925.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13927 = this;
return (new cljs.core.Set(this__13927.meta,cljs.core.dissoc.call(null,this__13927.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13929 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13930 = this;
var and__3546__auto____13931 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13931))
{var and__3546__auto____13932 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13932))
{return cljs.core.every_QMARK_.call(null,(function (p1__13819_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13819_SHARP_);
}),other);
} else
{return and__3546__auto____13932;
}
} else
{return and__3546__auto____13931;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13935 = this;
return (new cljs.core.Set(meta,this__13935.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13936 = this;
return this__13936.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13941 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13941.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__14024 = cljs.core.seq.call(null,coll);
var out__14025 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__14024))))
{{
var G__14031 = cljs.core.rest.call(null,in$__14024);
var G__14032 = cljs.core.conj.call(null,out__14025,cljs.core.first.call(null,in$__14024));
in$__14024 = G__14031;
out__14025 = G__14032;
continue;
}
} else
{return out__14025;
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
{var n__14044 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____14045 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____14045))
{var e__14046 = temp__3695__auto____14045;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__14046));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__14044,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__14001_SHARP_){
var temp__3695__auto____14059 = cljs.core.find.call(null,smap,p1__14001_SHARP_);

if(cljs.core.truth_(temp__3695__auto____14059))
{var e__14060 = temp__3695__auto____14059;

return cljs.core.second.call(null,e__14060);
} else
{return p1__14001_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__14096 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__14080,seen){
while(true){
var vec__14084__14085 = p__14080;
var f__14086 = cljs.core.nth.call(null,vec__14084__14085,0,null);
var xs__14087 = vec__14084__14085;

var temp__3698__auto____14090 = cljs.core.seq.call(null,xs__14087);

if(cljs.core.truth_(temp__3698__auto____14090))
{var s__14092 = temp__3698__auto____14090;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__14086)))
{{
var G__14104 = cljs.core.rest.call(null,s__14092);
var G__14105 = seen;
p__14080 = G__14104;
seen = G__14105;
continue;
}
} else
{return cljs.core.cons.call(null,f__14086,step.call(null,cljs.core.rest.call(null,s__14092),cljs.core.conj.call(null,seen,f__14086)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__14096.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__14112 = cljs.core.Vector.fromArray([]);
var s__14113 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__14113)))
{{
var G__14114 = cljs.core.conj.call(null,ret__14112,cljs.core.first.call(null,s__14113));
var G__14115 = cljs.core.next.call(null,s__14113);
ret__14112 = G__14114;
s__14113 = G__14115;
continue;
}
} else
{return cljs.core.seq.call(null,ret__14112);
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
{if(cljs.core.truth_((function (){var or__3548__auto____14124 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____14124))
{return or__3548__auto____14124;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__14125 = x.lastIndexOf("/");

if(cljs.core.truth_((i__14125 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__14125 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____14130 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____14130))
{return or__3548__auto____14130;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__14133 = x.lastIndexOf("/");

if(cljs.core.truth_((i__14133 > -1)))
{return cljs.core.subs.call(null,x,2,i__14133);
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
var map__14142 = cljs.core.ObjMap.fromObject([],{});
var ks__14143 = cljs.core.seq.call(null,keys);
var vs__14146 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14149 = ks__14143;

if(cljs.core.truth_(and__3546__auto____14149))
{return vs__14146;
} else
{return and__3546__auto____14149;
}
})()))
{{
var G__14162 = cljs.core.assoc.call(null,map__14142,cljs.core.first.call(null,ks__14143),cljs.core.first.call(null,vs__14146));
var G__14163 = cljs.core.next.call(null,ks__14143);
var G__14164 = cljs.core.next.call(null,vs__14146);
map__14142 = G__14162;
ks__14143 = G__14163;
vs__14146 = G__14164;
continue;
}
} else
{return map__14142;
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
var max_key__14183 = (function (k,x){
return x;
});
var max_key__14184 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__14185 = (function() { 
var G__14187__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__14139_SHARP_,p2__14140_SHARP_){
return max_key.call(null,k,p1__14139_SHARP_,p2__14140_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__14187 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14187__delegate.call(this, k, x, y, more);
};
G__14187.cljs$lang$maxFixedArity = 3;
G__14187.cljs$lang$applyTo = (function (arglist__14193){
var k = cljs.core.first(arglist__14193);
var x = cljs.core.first(cljs.core.next(arglist__14193));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14193)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14193)));
return G__14187__delegate.call(this, k, x, y, more);
});
return G__14187;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__14183.call(this,k,x);
case  3 :
return max_key__14184.call(this,k,x,y);
default:
return max_key__14185.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__14185.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__14205 = (function (k,x){
return x;
});
var min_key__14206 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__14208 = (function() { 
var G__14213__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__14171_SHARP_,p2__14172_SHARP_){
return min_key.call(null,k,p1__14171_SHARP_,p2__14172_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__14213 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14213__delegate.call(this, k, x, y, more);
};
G__14213.cljs$lang$maxFixedArity = 3;
G__14213.cljs$lang$applyTo = (function (arglist__14215){
var k = cljs.core.first(arglist__14215);
var x = cljs.core.first(cljs.core.next(arglist__14215));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14215)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14215)));
return G__14213__delegate.call(this, k, x, y, more);
});
return G__14213;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__14205.call(this,k,x);
case  3 :
return min_key__14206.call(this,k,x,y);
default:
return min_key__14208.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__14208.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__14229 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__14230 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14226 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14226))
{var s__14227 = temp__3698__auto____14226;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__14227),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__14227)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__14229.call(this,n,step);
case  3 :
return partition_all__14230.call(this,n,step,coll);
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
var temp__3698__auto____14239 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14239))
{var s__14241 = temp__3698__auto____14239;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__14241))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__14241),take_while.call(null,pred,cljs.core.rest.call(null,s__14241)));
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
var this__14248 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__14249 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__14279 = null;
var G__14279__14280 = (function (rng,f){
var this__14252 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__14279__14281 = (function (rng,f,s){
var this__14254 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__14279 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__14279__14280.call(this,rng,f);
case  3 :
return G__14279__14281.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14279;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__14255 = this;
var comp__14256 = (cljs.core.truth_((this__14255.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__14256.call(null,this__14255.start,this__14255.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__14259 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__14259.end - this__14259.start) / this__14259.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__14263 = this;
return this__14263.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__14264 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__14264.meta,(this__14264.start + this__14264.step),this__14264.end,this__14264.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__14266 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__14270 = this;
return (new cljs.core.Range(meta,this__14270.start,this__14270.end,this__14270.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__14272 = this;
return this__14272.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14295 = null;
var G__14295__14296 = (function (rng,n){
var this__14273 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14273.start + (n * this__14273.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14274 = (this__14273.start > this__14273.end);

if(cljs.core.truth_(and__3546__auto____14274))
{return cljs.core._EQ_.call(null,this__14273.step,0);
} else
{return and__3546__auto____14274;
}
})()))
{return this__14273.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14295__14297 = (function (rng,n,not_found){
var this__14275 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14275.start + (n * this__14275.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14277 = (this__14275.start > this__14275.end);

if(cljs.core.truth_(and__3546__auto____14277))
{return cljs.core._EQ_.call(null,this__14275.step,0);
} else
{return and__3546__auto____14277;
}
})()))
{return this__14275.start;
} else
{return not_found;
}
}
});
G__14295 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14295__14296.call(this,rng,n);
case  3 :
return G__14295__14297.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14295;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__14278 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14278.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14327 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14328 = (function (end){
return range.call(null,0,end,1);
});
var range__14329 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14330 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14327.call(this);
case  1 :
return range__14328.call(this,start);
case  2 :
return range__14329.call(this,start,end);
case  3 :
return range__14330.call(this,start,end,step);
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
var temp__3698__auto____14364 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14364))
{var s__14365 = temp__3698__auto____14364;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14365),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14365)));
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
var temp__3698__auto____14376 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14376))
{var s__14377 = temp__3698__auto____14376;

var fst__14378 = cljs.core.first.call(null,s__14377);
var fv__14379 = f.call(null,fst__14378);
var run__14380 = cljs.core.cons.call(null,fst__14378,cljs.core.take_while.call(null,(function (p1__14369_SHARP_){
return cljs.core._EQ_.call(null,fv__14379,f.call(null,p1__14369_SHARP_));
}),cljs.core.next.call(null,s__14377)));

return cljs.core.cons.call(null,run__14380,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14380),s__14377))));
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
var reductions__14415 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14405 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14405))
{var s__14407 = temp__3695__auto____14405;

return reductions.call(null,f,cljs.core.first.call(null,s__14407),cljs.core.rest.call(null,s__14407));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14417 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14410 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14410))
{var s__14413 = temp__3698__auto____14410;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14413)),cljs.core.rest.call(null,s__14413));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14415.call(this,f,init);
case  3 :
return reductions__14417.call(this,f,init,coll);
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
var juxt__14465 = (function (f){
return (function() {
var G__14473 = null;
var G__14473__14474 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14473__14475 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14473__14476 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14473__14477 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14473__14478 = (function() { 
var G__14485__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14485 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14485__delegate.call(this, x, y, z, args);
};
G__14485.cljs$lang$maxFixedArity = 3;
G__14485.cljs$lang$applyTo = (function (arglist__14487){
var x = cljs.core.first(arglist__14487);
var y = cljs.core.first(cljs.core.next(arglist__14487));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14487)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14487)));
return G__14485__delegate.call(this, x, y, z, args);
});
return G__14485;
})()
;
G__14473 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14473__14474.call(this);
case  1 :
return G__14473__14475.call(this,x);
case  2 :
return G__14473__14476.call(this,x,y);
case  3 :
return G__14473__14477.call(this,x,y,z);
default:
return G__14473__14478.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14473.cljs$lang$maxFixedArity = 3;
G__14473.cljs$lang$applyTo = G__14473__14478.cljs$lang$applyTo;
return G__14473;
})()
});
var juxt__14466 = (function (f,g){
return (function() {
var G__14488 = null;
var G__14488__14489 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14488__14490 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14488__14491 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14488__14492 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14488__14493 = (function() { 
var G__14497__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14497 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14497__delegate.call(this, x, y, z, args);
};
G__14497.cljs$lang$maxFixedArity = 3;
G__14497.cljs$lang$applyTo = (function (arglist__14500){
var x = cljs.core.first(arglist__14500);
var y = cljs.core.first(cljs.core.next(arglist__14500));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14500)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14500)));
return G__14497__delegate.call(this, x, y, z, args);
});
return G__14497;
})()
;
G__14488 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14488__14489.call(this);
case  1 :
return G__14488__14490.call(this,x);
case  2 :
return G__14488__14491.call(this,x,y);
case  3 :
return G__14488__14492.call(this,x,y,z);
default:
return G__14488__14493.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14488.cljs$lang$maxFixedArity = 3;
G__14488.cljs$lang$applyTo = G__14488__14493.cljs$lang$applyTo;
return G__14488;
})()
});
var juxt__14467 = (function (f,g,h){
return (function() {
var G__14503 = null;
var G__14503__14504 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14503__14507 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14503__14508 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14503__14509 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14503__14510 = (function() { 
var G__14522__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14522 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14522__delegate.call(this, x, y, z, args);
};
G__14522.cljs$lang$maxFixedArity = 3;
G__14522.cljs$lang$applyTo = (function (arglist__14525){
var x = cljs.core.first(arglist__14525);
var y = cljs.core.first(cljs.core.next(arglist__14525));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14525)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14525)));
return G__14522__delegate.call(this, x, y, z, args);
});
return G__14522;
})()
;
G__14503 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14503__14504.call(this);
case  1 :
return G__14503__14507.call(this,x);
case  2 :
return G__14503__14508.call(this,x,y);
case  3 :
return G__14503__14509.call(this,x,y,z);
default:
return G__14503__14510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14503.cljs$lang$maxFixedArity = 3;
G__14503.cljs$lang$applyTo = G__14503__14510.cljs$lang$applyTo;
return G__14503;
})()
});
var juxt__14468 = (function() { 
var G__14526__delegate = function (f,g,h,fs){
var fs__14440 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14529 = null;
var G__14529__14531 = (function (){
return cljs.core.reduce.call(null,(function (p1__14393_SHARP_,p2__14394_SHARP_){
return cljs.core.conj.call(null,p1__14393_SHARP_,p2__14394_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14440);
});
var G__14529__14532 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14395_SHARP_,p2__14396_SHARP_){
return cljs.core.conj.call(null,p1__14395_SHARP_,p2__14396_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14440);
});
var G__14529__14533 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14397_SHARP_,p2__14398_SHARP_){
return cljs.core.conj.call(null,p1__14397_SHARP_,p2__14398_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14440);
});
var G__14529__14534 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14400_SHARP_,p2__14401_SHARP_){
return cljs.core.conj.call(null,p1__14400_SHARP_,p2__14401_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14440);
});
var G__14529__14535 = (function() { 
var G__14545__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14402_SHARP_,p2__14403_SHARP_){
return cljs.core.conj.call(null,p1__14402_SHARP_,cljs.core.apply.call(null,p2__14403_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14440);
};
var G__14545 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14545__delegate.call(this, x, y, z, args);
};
G__14545.cljs$lang$maxFixedArity = 3;
G__14545.cljs$lang$applyTo = (function (arglist__14549){
var x = cljs.core.first(arglist__14549);
var y = cljs.core.first(cljs.core.next(arglist__14549));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14549)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14549)));
return G__14545__delegate.call(this, x, y, z, args);
});
return G__14545;
})()
;
G__14529 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14529__14531.call(this);
case  1 :
return G__14529__14532.call(this,x);
case  2 :
return G__14529__14533.call(this,x,y);
case  3 :
return G__14529__14534.call(this,x,y,z);
default:
return G__14529__14535.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14529.cljs$lang$maxFixedArity = 3;
G__14529.cljs$lang$applyTo = G__14529__14535.cljs$lang$applyTo;
return G__14529;
})()
};
var G__14526 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14526__delegate.call(this, f, g, h, fs);
};
G__14526.cljs$lang$maxFixedArity = 3;
G__14526.cljs$lang$applyTo = (function (arglist__14551){
var f = cljs.core.first(arglist__14551);
var g = cljs.core.first(cljs.core.next(arglist__14551));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14551)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14551)));
return G__14526__delegate.call(this, f, g, h, fs);
});
return G__14526;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14465.call(this,f);
case  2 :
return juxt__14466.call(this,f,g);
case  3 :
return juxt__14467.call(this,f,g,h);
default:
return juxt__14468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14468.cljs$lang$applyTo;
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
var dorun__14557 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14560 = cljs.core.next.call(null,coll);
coll = G__14560;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14558 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14554 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14554))
{return (n > 0);
} else
{return and__3546__auto____14554;
}
})()))
{{
var G__14562 = (n - 1);
var G__14563 = cljs.core.next.call(null,coll);
n = G__14562;
coll = G__14563;
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
return dorun__14557.call(this,n);
case  2 :
return dorun__14558.call(this,n,coll);
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
var doall__14576 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14577 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14576.call(this,n);
case  2 :
return doall__14577.call(this,n,coll);
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
var matches__14591 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14591),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14591),1)))
{return cljs.core.first.call(null,matches__14591);
} else
{return cljs.core.vec.call(null,matches__14591);
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
var matches__14599 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14599)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14599),1)))
{return cljs.core.first.call(null,matches__14599);
} else
{return cljs.core.vec.call(null,matches__14599);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14600 = cljs.core.re_find.call(null,re,s);
var match_idx__14601 = s.search(re);
var match_str__14602 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14600))?cljs.core.first.call(null,match_data__14600):match_data__14600);
var post_match__14603 = cljs.core.subs.call(null,s,(match_idx__14601 + cljs.core.count.call(null,match_str__14602)));

if(cljs.core.truth_(match_data__14600))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14600,re_seq.call(null,re,post_match__14603));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14607_SHARP_){
return print_one.call(null,p1__14607_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14617 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14617))
{var and__3546__auto____14662 = (function (){var x__445__auto____14620 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14622 = x__445__auto____14620;

if(cljs.core.truth_(and__3546__auto____14622))
{var and__3546__auto____14624 = x__445__auto____14620.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14624))
{return cljs.core.not.call(null,x__445__auto____14620.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14624;
}
} else
{return and__3546__auto____14622;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14620);
}
})();

if(cljs.core.truth_(and__3546__auto____14662))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14662;
}
} else
{return and__3546__auto____14617;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14665 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14668 = x__445__auto____14665;

if(cljs.core.truth_(and__3546__auto____14668))
{var and__3546__auto____14669 = x__445__auto____14665.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14669))
{return cljs.core.not.call(null,x__445__auto____14665.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14669;
}
} else
{return and__3546__auto____14668;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14665);
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
var first_obj__14682 = cljs.core.first.call(null,objs);
var sb__14683 = (new goog.string.StringBuffer());

var G__14684__14685 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14684__14685))
{var obj__14686 = cljs.core.first.call(null,G__14684__14685);
var G__14684__14687 = G__14684__14685;

while(true){
if(cljs.core.truth_((obj__14686 === first_obj__14682)))
{} else
{sb__14683.append(" ");
}
var G__14688__14689 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14686,opts));

if(cljs.core.truth_(G__14688__14689))
{var string__14690 = cljs.core.first.call(null,G__14688__14689);
var G__14688__14691 = G__14688__14689;

while(true){
sb__14683.append(string__14690);
var temp__3698__auto____14692 = cljs.core.next.call(null,G__14688__14691);

if(cljs.core.truth_(temp__3698__auto____14692))
{var G__14688__14694 = temp__3698__auto____14692;

{
var G__14708 = cljs.core.first.call(null,G__14688__14694);
var G__14710 = G__14688__14694;
string__14690 = G__14708;
G__14688__14691 = G__14710;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14695 = cljs.core.next.call(null,G__14684__14687);

if(cljs.core.truth_(temp__3698__auto____14695))
{var G__14684__14696 = temp__3698__auto____14695;

{
var G__14715 = cljs.core.first.call(null,G__14684__14696);
var G__14717 = G__14684__14696;
obj__14686 = G__14715;
G__14684__14687 = G__14717;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14683);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14728 = cljs.core.first.call(null,objs);

var G__14729__14731 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14729__14731))
{var obj__14734 = cljs.core.first.call(null,G__14729__14731);
var G__14729__14735 = G__14729__14731;

while(true){
if(cljs.core.truth_((obj__14734 === first_obj__14728)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14738__14741 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14734,opts));

if(cljs.core.truth_(G__14738__14741))
{var string__14743 = cljs.core.first.call(null,G__14738__14741);
var G__14738__14745 = G__14738__14741;

while(true){
cljs.core.string_print.call(null,string__14743);
var temp__3698__auto____14748 = cljs.core.next.call(null,G__14738__14745);

if(cljs.core.truth_(temp__3698__auto____14748))
{var G__14738__14751 = temp__3698__auto____14748;

{
var G__14759 = cljs.core.first.call(null,G__14738__14751);
var G__14760 = G__14738__14751;
string__14743 = G__14759;
G__14738__14745 = G__14760;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14753 = cljs.core.next.call(null,G__14729__14735);

if(cljs.core.truth_(temp__3698__auto____14753))
{var G__14729__14755 = temp__3698__auto____14753;

{
var G__14761 = cljs.core.first.call(null,G__14729__14755);
var G__14762 = G__14729__14755;
obj__14734 = G__14761;
G__14729__14735 = G__14762;
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
pr_str.cljs$lang$applyTo = (function (arglist__14789){
var objs = cljs.core.seq( arglist__14789 );;
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
pr.cljs$lang$applyTo = (function (arglist__14790){
var objs = cljs.core.seq( arglist__14790 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14791){
var objs = cljs.core.seq( arglist__14791 );;
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
println.cljs$lang$applyTo = (function (arglist__14795){
var objs = cljs.core.seq( arglist__14795 );;
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
prn.cljs$lang$applyTo = (function (arglist__14830){
var objs = cljs.core.seq( arglist__14830 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14843 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14843,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14855 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14855))
{var nspc__14858 = temp__3698__auto____14855;

return cljs.core.str.call(null,nspc__14858,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14860 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14860))
{var nspc__14862 = temp__3698__auto____14860;

return cljs.core.str.call(null,nspc__14862,"/");
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
var pr_pair__14872 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14872,"{",", ","}",opts,coll);
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
var this__14937 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14940 = this;
var G__14944__14948 = cljs.core.seq.call(null,this__14940.watches);

if(cljs.core.truth_(G__14944__14948))
{var G__14951__14955 = cljs.core.first.call(null,G__14944__14948);
var vec__14954__14957 = G__14951__14955;
var key__14958 = cljs.core.nth.call(null,vec__14954__14957,0,null);
var f__14959 = cljs.core.nth.call(null,vec__14954__14957,1,null);
var G__14944__14960 = G__14944__14948;

var G__14951__14962 = G__14951__14955;
var G__14944__14963 = G__14944__14960;

while(true){
var vec__14964__14965 = G__14951__14962;
var key__14967 = cljs.core.nth.call(null,vec__14964__14965,0,null);
var f__14968 = cljs.core.nth.call(null,vec__14964__14965,1,null);
var G__14944__14971 = G__14944__14963;

f__14968.call(null,key__14967,this$,oldval,newval);
var temp__3698__auto____14973 = cljs.core.next.call(null,G__14944__14971);

if(cljs.core.truth_(temp__3698__auto____14973))
{var G__14944__14976 = temp__3698__auto____14973;

{
var G__14998 = cljs.core.first.call(null,G__14944__14976);
var G__14999 = G__14944__14976;
G__14951__14962 = G__14998;
G__14944__14963 = G__14999;
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
var this__14981 = this;
return this$.watches = cljs.core.assoc.call(null,this__14981.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14984 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14984.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14986 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14986.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14990 = this;
return this__14990.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14991 = this;
return this__14991.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14994 = this;
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
var atom__15010 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__15011 = (function() { 
var G__15017__delegate = function (x,p__15000){
var map__15001__15002 = p__15000;
var map__15001__15003 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15001__15002))?cljs.core.apply.call(null,cljs.core.hash_map,map__15001__15002):map__15001__15002);
var validator__15004 = cljs.core.get.call(null,map__15001__15003,"﷐'validator");
var meta__15005 = cljs.core.get.call(null,map__15001__15003,"﷐'meta");

return (new cljs.core.Atom(x,meta__15005,validator__15004,null));
};
var G__15017 = function (x,var_args){
var p__15000 = null;
if (goog.isDef(var_args)) {
  p__15000 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15017__delegate.call(this, x, p__15000);
};
G__15017.cljs$lang$maxFixedArity = 1;
G__15017.cljs$lang$applyTo = (function (arglist__15019){
var x = cljs.core.first(arglist__15019);
var p__15000 = cljs.core.rest(arglist__15019);
return G__15017__delegate.call(this, x, p__15000);
});
return G__15017;
})()
;
atom = function(x,var_args){
var p__15000 = var_args;
switch(arguments.length){
case  1 :
return atom__15010.call(this,x);
default:
return atom__15011.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__15011.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____15023 = a.validator;

if(cljs.core.truth_(temp__3698__auto____15023))
{var validate__15024 = temp__3698__auto____15023;

if(cljs.core.truth_(validate__15024.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__15025 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__15025,new_value);
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
var swap_BANG___15040 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___15041 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___15042 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___15043 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___15044 = (function() { 
var G__15049__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__15049 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__15049__delegate.call(this, a, f, x, y, z, more);
};
G__15049.cljs$lang$maxFixedArity = 5;
G__15049.cljs$lang$applyTo = (function (arglist__15050){
var a = cljs.core.first(arglist__15050);
var f = cljs.core.first(cljs.core.next(arglist__15050));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15050)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15050))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15050)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15050)))));
return G__15049__delegate.call(this, a, f, x, y, z, more);
});
return G__15049;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___15040.call(this,a,f);
case  3 :
return swap_BANG___15041.call(this,a,f,x);
case  4 :
return swap_BANG___15042.call(this,a,f,x,y);
case  5 :
return swap_BANG___15043.call(this,a,f,x,y,z);
default:
return swap_BANG___15044.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___15044.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15059){
var iref = cljs.core.first(arglist__15059);
var f = cljs.core.first(cljs.core.next(arglist__15059));
var args = cljs.core.rest(cljs.core.next(arglist__15059));
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
var gensym__15076 = (function (){
return gensym.call(null,"G__");
});
var gensym__15077 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__15076.call(this);
case  1 :
return gensym__15077.call(this,prefix_string);
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
var this__15090 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__15090.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15091 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__15091.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__15091.state,this__15091.f);
}
return cljs.core.deref.call(null,this__15091.state);
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
delay.cljs$lang$applyTo = (function (arglist__15106){
var body = cljs.core.seq( arglist__15106 );;
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
var map__15112__15113 = options;
var map__15112__15114 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15112__15113))?cljs.core.apply.call(null,cljs.core.hash_map,map__15112__15113):map__15112__15113);
var keywordize_keys__15115 = cljs.core.get.call(null,map__15112__15114,"﷐'keywordize-keys");
var keyfn__15116 = (cljs.core.truth_(keywordize_keys__15115)?cljs.core.keyword:cljs.core.str);
var f__15128 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15127 = (function iter__15120(s__15121){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15121__15122 = s__15121;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15121__15122)))
{var k__15123 = cljs.core.first.call(null,s__15121__15122);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15116.call(null,k__15123),thisfn.call(null,(x[k__15123]))]),iter__15120.call(null,cljs.core.rest.call(null,s__15121__15122)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15127.call(null,cljs.core.js_keys.call(null,x));
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

return f__15128.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15139){
var x = cljs.core.first(arglist__15139);
var options = cljs.core.rest(arglist__15139);
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
var mem__15141 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15149__delegate = function (args){
var temp__3695__auto____15142 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15141),args);

if(cljs.core.truth_(temp__3695__auto____15142))
{var v__15143 = temp__3695__auto____15142;

return v__15143;
} else
{var ret__15145 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15141,cljs.core.assoc,args,ret__15145);
return ret__15145;
}
};
var G__15149 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15149__delegate.call(this, args);
};
G__15149.cljs$lang$maxFixedArity = 0;
G__15149.cljs$lang$applyTo = (function (arglist__15150){
var args = cljs.core.seq( arglist__15150 );;
return G__15149__delegate.call(this, args);
});
return G__15149;
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
var trampoline__15161 = (function (f){
while(true){
var ret__15153 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15153)))
{{
var G__15166 = ret__15153;
f = G__15166;
continue;
}
} else
{return ret__15153;
}
break;
}
});
var trampoline__15162 = (function() { 
var G__15167__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15167 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15167__delegate.call(this, f, args);
};
G__15167.cljs$lang$maxFixedArity = 1;
G__15167.cljs$lang$applyTo = (function (arglist__15169){
var f = cljs.core.first(arglist__15169);
var args = cljs.core.rest(arglist__15169);
return G__15167__delegate.call(this, f, args);
});
return G__15167;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15161.call(this,f);
default:
return trampoline__15162.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15162.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15172 = (function (){
return rand.call(null,1);
});
var rand__15173 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15172.call(this);
case  1 :
return rand__15173.call(this,n);
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
var k__15181 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15181,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15181,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15203 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15204 = (function (h,child,parent){
var or__3548__auto____15186 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15186))
{return or__3548__auto____15186;
} else
{var or__3548__auto____15187 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15187))
{return or__3548__auto____15187;
} else
{var and__3546__auto____15188 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15188))
{var and__3546__auto____15189 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15189))
{var and__3546__auto____15191 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15191))
{var ret__15193 = true;
var i__15195 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15198 = cljs.core.not.call(null,ret__15193);

if(cljs.core.truth_(or__3548__auto____15198))
{return or__3548__auto____15198;
} else
{return cljs.core._EQ_.call(null,i__15195,cljs.core.count.call(null,parent));
}
})()))
{return ret__15193;
} else
{{
var G__15218 = isa_QMARK_.call(null,h,child.call(null,i__15195),parent.call(null,i__15195));
var G__15219 = (i__15195 + 1);
ret__15193 = G__15218;
i__15195 = G__15219;
continue;
}
}
break;
}
} else
{return and__3546__auto____15191;
}
} else
{return and__3546__auto____15189;
}
} else
{return and__3546__auto____15188;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15203.call(this,h,child);
case  3 :
return isa_QMARK___15204.call(this,h,child,parent);
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
var parents__15226 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15227 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15226.call(this,h);
case  2 :
return parents__15227.call(this,h,tag);
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
var ancestors__15234 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15235 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15234.call(this,h);
case  2 :
return ancestors__15235.call(this,h,tag);
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
var descendants__15244 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15245 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15244.call(this,h);
case  2 :
return descendants__15245.call(this,h,tag);
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
var derive__15268 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15269 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15255 = "﷐'parents".call(null,h);
var td__15256 = "﷐'descendants".call(null,h);
var ta__15257 = "﷐'ancestors".call(null,h);
var tf__15259 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15261 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15255.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15257.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15257.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15255,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15259.call(null,"﷐'ancestors".call(null,h),tag,td__15256,parent,ta__15257),"﷐'descendants":tf__15259.call(null,"﷐'descendants".call(null,h),parent,ta__15257,tag,td__15256)});
})());

if(cljs.core.truth_(or__3548__auto____15261))
{return or__3548__auto____15261;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15268.call(this,h,tag);
case  3 :
return derive__15269.call(this,h,tag,parent);
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
var underive__15378 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15379 = (function (h,tag,parent){
var parentMap__15370 = "﷐'parents".call(null,h);
var childsParents__15372 = (cljs.core.truth_(parentMap__15370.call(null,tag))?cljs.core.disj.call(null,parentMap__15370.call(null,tag),parent):cljs.core.set([]));
var newParents__15375 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15372))?cljs.core.assoc.call(null,parentMap__15370,tag,childsParents__15372):cljs.core.dissoc.call(null,parentMap__15370,tag));
var deriv_seq__15376 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15250_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15250_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15250_SHARP_),cljs.core.second.call(null,p1__15250_SHARP_)));
}),cljs.core.seq.call(null,newParents__15375)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15370.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15251_SHARP_,p2__15252_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15251_SHARP_,p2__15252_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15376));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15378.call(this,h,tag);
case  3 :
return underive__15379.call(this,h,tag,parent);
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
var xprefs__15398 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15401 = (cljs.core.truth_((function (){var and__3546__auto____15399 = xprefs__15398;

if(cljs.core.truth_(and__3546__auto____15399))
{return xprefs__15398.call(null,y);
} else
{return and__3546__auto____15399;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15401))
{return or__3548__auto____15401;
} else
{var or__3548__auto____15404 = (function (){var ps__15402 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15402) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15402),prefer_table)))
{} else
{}
{
var G__15411 = cljs.core.rest.call(null,ps__15402);
ps__15402 = G__15411;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15404))
{return or__3548__auto____15404;
} else
{var or__3548__auto____15408 = (function (){var ps__15405 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15405) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15405),y,prefer_table)))
{} else
{}
{
var G__15412 = cljs.core.rest.call(null,ps__15405);
ps__15405 = G__15412;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15408))
{return or__3548__auto____15408;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15413 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15413))
{return or__3548__auto____15413;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15436 = cljs.core.reduce.call(null,(function (be,p__15418){
var vec__15421__15422 = p__15418;
var k__15423 = cljs.core.nth.call(null,vec__15421__15422,0,null);
var ___15427 = cljs.core.nth.call(null,vec__15421__15422,1,null);
var e__15428 = vec__15421__15422;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15423)))
{var be2__15432 = (cljs.core.truth_((function (){var or__3548__auto____15430 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15430))
{return or__3548__auto____15430;
} else
{return cljs.core.dominates.call(null,k__15423,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15428:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15432),k__15423,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15423," and ",cljs.core.first.call(null,be2__15432),", and neither is preferred")));
}
return be2__15432;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15436))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15436));
return cljs.core.second.call(null,best_entry__15436);
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
if(cljs.core.truth_((function (){var and__3546__auto____15447 = mf;

if(cljs.core.truth_(and__3546__auto____15447))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15447;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15449 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15449))
{return or__3548__auto____15449;
} else
{var or__3548__auto____15451 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15451))
{return or__3548__auto____15451;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15478 = mf;

if(cljs.core.truth_(and__3546__auto____15478))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15478;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15481 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15481))
{return or__3548__auto____15481;
} else
{var or__3548__auto____15484 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15484))
{return or__3548__auto____15484;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15488 = mf;

if(cljs.core.truth_(and__3546__auto____15488))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15488;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15491 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15491))
{return or__3548__auto____15491;
} else
{var or__3548__auto____15492 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15492))
{return or__3548__auto____15492;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15494 = mf;

if(cljs.core.truth_(and__3546__auto____15494))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15494;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15496 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15496))
{return or__3548__auto____15496;
} else
{var or__3548__auto____15497 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15497))
{return or__3548__auto____15497;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15499 = mf;

if(cljs.core.truth_(and__3546__auto____15499))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15499;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15500 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15500))
{return or__3548__auto____15500;
} else
{var or__3548__auto____15501 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15501))
{return or__3548__auto____15501;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15503 = mf;

if(cljs.core.truth_(and__3546__auto____15503))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15503;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15504 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15504))
{return or__3548__auto____15504;
} else
{var or__3548__auto____15505 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15505))
{return or__3548__auto____15505;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15509 = mf;

if(cljs.core.truth_(and__3546__auto____15509))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15509;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15515 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15515))
{return or__3548__auto____15515;
} else
{var or__3548__auto____15517 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15517))
{return or__3548__auto____15517;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15520 = mf;

if(cljs.core.truth_(and__3546__auto____15520))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15520;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15521 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15521))
{return or__3548__auto____15521;
} else
{var or__3548__auto____15523 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15523))
{return or__3548__auto____15523;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15546 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15547 = cljs.core._get_method.call(null,mf,dispatch_val__15546);

if(cljs.core.truth_(target_fn__15547))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15546)));
}
return cljs.core.apply.call(null,target_fn__15547,args);
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
var this__15550 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15551 = this;
cljs.core.swap_BANG_.call(null,this__15551.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15551.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15551.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15551.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15552 = this;
cljs.core.swap_BANG_.call(null,this__15552.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15552.method_cache,this__15552.method_table,this__15552.cached_hierarchy,this__15552.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15556 = this;
cljs.core.swap_BANG_.call(null,this__15556.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15556.method_cache,this__15556.method_table,this__15556.cached_hierarchy,this__15556.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15558 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15558.cached_hierarchy),cljs.core.deref.call(null,this__15558.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15558.method_cache,this__15558.method_table,this__15558.cached_hierarchy,this__15558.hierarchy);
}
var temp__3695__auto____15559 = cljs.core.deref.call(null,this__15558.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15559))
{var target_fn__15560 = temp__3695__auto____15559;

return target_fn__15560;
} else
{var temp__3695__auto____15563 = cljs.core.find_and_cache_best_method.call(null,this__15558.name,dispatch_val,this__15558.hierarchy,this__15558.method_table,this__15558.prefer_table,this__15558.method_cache,this__15558.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15563))
{var target_fn__15564 = temp__3695__auto____15563;

return target_fn__15564;
} else
{return cljs.core.deref.call(null,this__15558.method_table).call(null,this__15558.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15566 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15566.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15566.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15566.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15566.method_cache,this__15566.method_table,this__15566.cached_hierarchy,this__15566.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15567 = this;
return cljs.core.deref.call(null,this__15567.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15569 = this;
return cljs.core.deref.call(null,this__15569.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15578 = this;
return cljs.core.do_dispatch.call(null,mf,this__15578.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15602__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15602 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15602__delegate.call(this, _, args);
};
G__15602.cljs$lang$maxFixedArity = 1;
G__15602.cljs$lang$applyTo = (function (arglist__15603){
var _ = cljs.core.first(arglist__15603);
var args = cljs.core.rest(arglist__15603);
return G__15602__delegate.call(this, _, args);
});
return G__15602;
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
