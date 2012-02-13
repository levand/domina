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
var or__3548__auto____7315 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7315))
{return or__3548__auto____7315;
} else
{var or__3548__auto____7316 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7316))
{return or__3548__auto____7316;
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
var _invoke__7654 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7398 = this$;

if(cljs.core.truth_(and__3546__auto____7398))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7398;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7401 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7401))
{return or__3548__auto____7401;
} else
{var or__3548__auto____7403 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7403))
{return or__3548__auto____7403;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7655 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7404 = this$;

if(cljs.core.truth_(and__3546__auto____7404))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7404;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7408 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7408))
{return or__3548__auto____7408;
} else
{var or__3548__auto____7409 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7409))
{return or__3548__auto____7409;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7656 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7412 = this$;

if(cljs.core.truth_(and__3546__auto____7412))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7412;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7416 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7416))
{return or__3548__auto____7416;
} else
{var or__3548__auto____7420 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7420))
{return or__3548__auto____7420;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7657 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7422 = this$;

if(cljs.core.truth_(and__3546__auto____7422))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7422;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7426 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7426))
{return or__3548__auto____7426;
} else
{var or__3548__auto____7430 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7430))
{return or__3548__auto____7430;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7658 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7433 = this$;

if(cljs.core.truth_(and__3546__auto____7433))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7433;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7438 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7438))
{return or__3548__auto____7438;
} else
{var or__3548__auto____7440 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7440))
{return or__3548__auto____7440;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7659 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7446 = this$;

if(cljs.core.truth_(and__3546__auto____7446))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7446;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7449 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7449))
{return or__3548__auto____7449;
} else
{var or__3548__auto____7466 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7466))
{return or__3548__auto____7466;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7660 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7469 = this$;

if(cljs.core.truth_(and__3546__auto____7469))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7469;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7661 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7487 = this$;

if(cljs.core.truth_(and__3546__auto____7487))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7487;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7530 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7530))
{return or__3548__auto____7530;
} else
{var or__3548__auto____7532 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7532))
{return or__3548__auto____7532;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7662 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7534 = this$;

if(cljs.core.truth_(and__3546__auto____7534))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7534;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7536 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7536))
{return or__3548__auto____7536;
} else
{var or__3548__auto____7537 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7537))
{return or__3548__auto____7537;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7663 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7538 = this$;

if(cljs.core.truth_(and__3546__auto____7538))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7538;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7539 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7539))
{return or__3548__auto____7539;
} else
{var or__3548__auto____7540 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7540))
{return or__3548__auto____7540;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7664 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7543 = this$;

if(cljs.core.truth_(and__3546__auto____7543))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7543;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7545 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7545))
{return or__3548__auto____7545;
} else
{var or__3548__auto____7549 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7549))
{return or__3548__auto____7549;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7665 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7557 = this$;

if(cljs.core.truth_(and__3546__auto____7557))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7557;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7560 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7560))
{return or__3548__auto____7560;
} else
{var or__3548__auto____7562 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7562))
{return or__3548__auto____7562;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7666 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7564 = this$;

if(cljs.core.truth_(and__3546__auto____7564))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7564;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7566 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7566))
{return or__3548__auto____7566;
} else
{var or__3548__auto____7568 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7568))
{return or__3548__auto____7568;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7667 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7570 = this$;

if(cljs.core.truth_(and__3546__auto____7570))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7570;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7572 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7572))
{return or__3548__auto____7572;
} else
{var or__3548__auto____7574 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7574))
{return or__3548__auto____7574;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7668 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7578 = this$;

if(cljs.core.truth_(and__3546__auto____7578))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7578;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7581 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7581))
{return or__3548__auto____7581;
} else
{var or__3548__auto____7582 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7582))
{return or__3548__auto____7582;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7669 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7587 = this$;

if(cljs.core.truth_(and__3546__auto____7587))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7587;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7589 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7589))
{return or__3548__auto____7589;
} else
{var or__3548__auto____7591 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7591))
{return or__3548__auto____7591;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7670 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7593 = this$;

if(cljs.core.truth_(and__3546__auto____7593))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7593;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7594 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7594))
{return or__3548__auto____7594;
} else
{var or__3548__auto____7595 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7595))
{return or__3548__auto____7595;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7671 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7596 = this$;

if(cljs.core.truth_(and__3546__auto____7596))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7596;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7597 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7597))
{return or__3548__auto____7597;
} else
{var or__3548__auto____7598 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7598))
{return or__3548__auto____7598;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7672 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7621 = this$;

if(cljs.core.truth_(and__3546__auto____7621))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7621;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7624 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7624))
{return or__3548__auto____7624;
} else
{var or__3548__auto____7625 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7625))
{return or__3548__auto____7625;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7673 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7626 = this$;

if(cljs.core.truth_(and__3546__auto____7626))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7626;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7674 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7651 = this$;

if(cljs.core.truth_(and__3546__auto____7651))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7651;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__7654.call(this,this$);
case  2 :
return _invoke__7655.call(this,this$,a);
case  3 :
return _invoke__7656.call(this,this$,a,b);
case  4 :
return _invoke__7657.call(this,this$,a,b,c);
case  5 :
return _invoke__7658.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7659.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7660.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7661.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7662.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7663.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7664.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7665.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7666.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7667.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7668.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7669.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7670.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7671.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7672.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7673.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7674.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7736 = coll;

if(cljs.core.truth_(and__3546__auto____7736))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7736;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7749 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7749))
{return or__3548__auto____7749;
} else
{var or__3548__auto____7764 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7764))
{return or__3548__auto____7764;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7768 = coll;

if(cljs.core.truth_(and__3546__auto____7768))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7768;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7770 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7770))
{return or__3548__auto____7770;
} else
{var or__3548__auto____7772 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7772))
{return or__3548__auto____7772;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7777 = coll;

if(cljs.core.truth_(and__3546__auto____7777))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7777;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7778 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7778))
{return or__3548__auto____7778;
} else
{var or__3548__auto____7779 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7779))
{return or__3548__auto____7779;
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
var _nth__7794 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7783 = coll;

if(cljs.core.truth_(and__3546__auto____7783))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7783;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7785 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7785))
{return or__3548__auto____7785;
} else
{var or__3548__auto____7786 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7786))
{return or__3548__auto____7786;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7795 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7787 = coll;

if(cljs.core.truth_(and__3546__auto____7787))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7787;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7791 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7791))
{return or__3548__auto____7791;
} else
{var or__3548__auto____7793 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7793))
{return or__3548__auto____7793;
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
return _nth__7794.call(this,coll,n);
case  3 :
return _nth__7795.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7798 = coll;

if(cljs.core.truth_(and__3546__auto____7798))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7798;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7800 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7800))
{return or__3548__auto____7800;
} else
{var or__3548__auto____7802 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7802))
{return or__3548__auto____7802;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7804 = coll;

if(cljs.core.truth_(and__3546__auto____7804))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7804;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7807 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7807))
{return or__3548__auto____7807;
} else
{var or__3548__auto____7808 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7808))
{return or__3548__auto____7808;
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
var _lookup__7830 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7818 = o;

if(cljs.core.truth_(and__3546__auto____7818))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7818;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7820 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7820))
{return or__3548__auto____7820;
} else
{var or__3548__auto____7822 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7822))
{return or__3548__auto____7822;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7831 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7823 = o;

if(cljs.core.truth_(and__3546__auto____7823))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7823;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7825 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7825))
{return or__3548__auto____7825;
} else
{var or__3548__auto____7827 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7827))
{return or__3548__auto____7827;
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
return _lookup__7830.call(this,o,k);
case  3 :
return _lookup__7831.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7837 = coll;

if(cljs.core.truth_(and__3546__auto____7837))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7837;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7840 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7840))
{return or__3548__auto____7840;
} else
{var or__3548__auto____7841 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7841))
{return or__3548__auto____7841;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7842 = coll;

if(cljs.core.truth_(and__3546__auto____7842))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7842;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7843 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7843))
{return or__3548__auto____7843;
} else
{var or__3548__auto____7844 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7844))
{return or__3548__auto____7844;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7852 = coll;

if(cljs.core.truth_(and__3546__auto____7852))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7852;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7854 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7854))
{return or__3548__auto____7854;
} else
{var or__3548__auto____7856 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7856))
{return or__3548__auto____7856;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7860 = coll;

if(cljs.core.truth_(and__3546__auto____7860))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7860;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7861 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7861))
{return or__3548__auto____7861;
} else
{var or__3548__auto____7863 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7863))
{return or__3548__auto____7863;
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
{return (function (){var or__3548__auto____7877 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7877))
{return or__3548__auto____7877;
} else
{var or__3548__auto____7879 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7879))
{return or__3548__auto____7879;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7883 = coll;

if(cljs.core.truth_(and__3546__auto____7883))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7883;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7886 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7886))
{return or__3548__auto____7886;
} else
{var or__3548__auto____7887 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7887))
{return or__3548__auto____7887;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7897 = coll;

if(cljs.core.truth_(and__3546__auto____7897))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7897;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7900 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7900))
{return or__3548__auto____7900;
} else
{var or__3548__auto____7904 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7904))
{return or__3548__auto____7904;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7908 = o;

if(cljs.core.truth_(and__3546__auto____7908))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7908;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7910 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7910))
{return or__3548__auto____7910;
} else
{var or__3548__auto____7912 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7912))
{return or__3548__auto____7912;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7918 = o;

if(cljs.core.truth_(and__3546__auto____7918))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7918;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7923 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7923))
{return or__3548__auto____7923;
} else
{var or__3548__auto____7925 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7925))
{return or__3548__auto____7925;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7926 = o;

if(cljs.core.truth_(and__3546__auto____7926))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7926;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7994 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7994))
{return or__3548__auto____7994;
} else
{var or__3548__auto____7996 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7996))
{return or__3548__auto____7996;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8005 = o;

if(cljs.core.truth_(and__3546__auto____8005))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8005;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8008 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8008))
{return or__3548__auto____8008;
} else
{var or__3548__auto____8010 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8010))
{return or__3548__auto____8010;
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
if(cljs.core.truth_((function (){var and__3546__auto____8021 = coll;

if(cljs.core.truth_(and__3546__auto____8021))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8021;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8023 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8023))
{return or__3548__auto____8023;
} else
{var or__3548__auto____8025 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8025))
{return or__3548__auto____8025;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8058 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8026 = coll;

if(cljs.core.truth_(and__3546__auto____8026))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8026;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8054 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8054))
{return or__3548__auto____8054;
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
if(cljs.core.truth_((function (){var and__3546__auto____8069 = o;

if(cljs.core.truth_(and__3546__auto____8069))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8069;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8072 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8072))
{return or__3548__auto____8072;
} else
{var or__3548__auto____8074 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8074))
{return or__3548__auto____8074;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8076 = o;

if(cljs.core.truth_(and__3546__auto____8076))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8076;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8086 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8086))
{return or__3548__auto____8086;
} else
{var or__3548__auto____8088 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8088))
{return or__3548__auto____8088;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8103 = o;

if(cljs.core.truth_(and__3546__auto____8103))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8103;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8105 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8105))
{return or__3548__auto____8105;
} else
{var or__3548__auto____8106 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8106))
{return or__3548__auto____8106;
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
if(cljs.core.truth_((function (){var and__3546__auto____8122 = o;

if(cljs.core.truth_(and__3546__auto____8122))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8122;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8144 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8144))
{return or__3548__auto____8144;
} else
{var or__3548__auto____8146 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8146))
{return or__3548__auto____8146;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8236 = d;

if(cljs.core.truth_(and__3546__auto____8236))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8236;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8237 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8237))
{return or__3548__auto____8237;
} else
{var or__3548__auto____8240 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8240))
{return or__3548__auto____8240;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8317 = this$;

if(cljs.core.truth_(and__3546__auto____8317))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8317;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8320 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8320))
{return or__3548__auto____8320;
} else
{var or__3548__auto____8321 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8321))
{return or__3548__auto____8321;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8323 = this$;

if(cljs.core.truth_(and__3546__auto____8323))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8323;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8324 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8324))
{return or__3548__auto____8324;
} else
{var or__3548__auto____8329 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8329))
{return or__3548__auto____8329;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8334 = this$;

if(cljs.core.truth_(and__3546__auto____8334))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8334;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8336 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8336))
{return or__3548__auto____8336;
} else
{var or__3548__auto____8337 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8337))
{return or__3548__auto____8337;
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
var G__8415 = null;
var G__8415__8416 = (function (o,k){
return null;
});
var G__8415__8417 = (function (o,k,not_found){
return not_found;
});
G__8415 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8415__8416.call(this,o,k);
case  3 :
return G__8415__8417.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8415;
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
var G__8424 = null;
var G__8424__8425 = (function (_,f){
return f.call(null);
});
var G__8424__8427 = (function (_,f,start){
return start;
});
G__8424 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8424__8425.call(this,_,f);
case  3 :
return G__8424__8427.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8424;
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
var G__8441 = null;
var G__8441__8452 = (function (_,n){
return null;
});
var G__8441__8453 = (function (_,n,not_found){
return not_found;
});
G__8441 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8441__8452.call(this,_,n);
case  3 :
return G__8441__8453.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8441;
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
var ci_reduce__8475 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8466 = cljs.core._nth.call(null,cicoll,0);
var n__8467 = 1;

while(true){
if(cljs.core.truth_((n__8467 < cljs.core._count.call(null,cicoll))))
{{
var G__8479 = f.call(null,val__8466,cljs.core._nth.call(null,cicoll,n__8467));
var G__8480 = (n__8467 + 1);
val__8466 = G__8479;
n__8467 = G__8480;
continue;
}
} else
{return val__8466;
}
break;
}
}
});
var ci_reduce__8476 = (function (cicoll,f,val){
var val__8470 = val;
var n__8471 = 0;

while(true){
if(cljs.core.truth_((n__8471 < cljs.core._count.call(null,cicoll))))
{{
var G__8481 = f.call(null,val__8470,cljs.core._nth.call(null,cicoll,n__8471));
var G__8482 = (n__8471 + 1);
val__8470 = G__8481;
n__8471 = G__8482;
continue;
}
} else
{return val__8470;
}
break;
}
});
var ci_reduce__8477 = (function (cicoll,f,val,idx){
var val__8473 = val;
var n__8474 = idx;

while(true){
if(cljs.core.truth_((n__8474 < cljs.core._count.call(null,cicoll))))
{{
var G__8485 = f.call(null,val__8473,cljs.core._nth.call(null,cicoll,n__8474));
var G__8486 = (n__8474 + 1);
val__8473 = G__8485;
n__8474 = G__8486;
continue;
}
} else
{return val__8473;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8475.call(this,cicoll,f);
case  3 :
return ci_reduce__8476.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8477.call(this,cicoll,f,val,idx);
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
var this__8497 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8527 = null;
var G__8527__8554 = (function (_,f){
var this__8499 = this;
return cljs.core.ci_reduce.call(null,this__8499.a,f,(this__8499.a[this__8499.i]),(this__8499.i + 1));
});
var G__8527__8555 = (function (_,f,start){
var this__8503 = this;
return cljs.core.ci_reduce.call(null,this__8503.a,f,start,this__8503.i);
});
G__8527 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8527__8554.call(this,_,f);
case  3 :
return G__8527__8555.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8527;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8504 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8505 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8565 = null;
var G__8565__8566 = (function (coll,n){
var this__8507 = this;
var i__8508 = (n + this__8507.i);

if(cljs.core.truth_((i__8508 < this__8507.a.length)))
{return (this__8507.a[i__8508]);
} else
{return null;
}
});
var G__8565__8567 = (function (coll,n,not_found){
var this__8511 = this;
var i__8514 = (n + this__8511.i);

if(cljs.core.truth_((i__8514 < this__8511.a.length)))
{return (this__8511.a[i__8514]);
} else
{return not_found;
}
});
G__8565 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8565__8566.call(this,coll,n);
case  3 :
return G__8565__8567.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8565;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8515 = this;
return (this__8515.a.length - this__8515.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8516 = this;
return (this__8516.a[this__8516.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8517 = this;
if(cljs.core.truth_(((this__8517.i + 1) < this__8517.a.length)))
{return (new cljs.core.IndexedSeq(this__8517.a,(this__8517.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8521 = this;
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
var G__8610 = null;
var G__8610__8611 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8610__8612 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8610 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8610__8611.call(this,array,f);
case  3 :
return G__8610__8612.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8610;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8614 = null;
var G__8614__8615 = (function (array,k){
return (array[k]);
});
var G__8614__8616 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8614 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8614__8615.call(this,array,k);
case  3 :
return G__8614__8616.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8614;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8618 = null;
var G__8618__8619 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8618__8620 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8618 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8618__8619.call(this,array,n);
case  3 :
return G__8618__8620.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8618;
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
var temp__3698__auto____8634 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8634))
{var s__8636 = temp__3698__auto____8634;

return cljs.core._first.call(null,s__8636);
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
var G__8713 = cljs.core.next.call(null,s);
s = G__8713;
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
var s__8721 = cljs.core.seq.call(null,x);
var n__8722 = 0;

while(true){
if(cljs.core.truth_(s__8721))
{{
var G__8723 = cljs.core.next.call(null,s__8721);
var G__8724 = (n__8722 + 1);
s__8721 = G__8723;
n__8722 = G__8724;
continue;
}
} else
{return n__8722;
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
var conj__8732 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8733 = (function() { 
var G__8736__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8737 = conj.call(null,coll,x);
var G__8738 = cljs.core.first.call(null,xs);
var G__8739 = cljs.core.next.call(null,xs);
coll = G__8737;
x = G__8738;
xs = G__8739;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8736 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8736__delegate.call(this, coll, x, xs);
};
G__8736.cljs$lang$maxFixedArity = 2;
G__8736.cljs$lang$applyTo = (function (arglist__8742){
var coll = cljs.core.first(arglist__8742);
var x = cljs.core.first(cljs.core.next(arglist__8742));
var xs = cljs.core.rest(cljs.core.next(arglist__8742));
return G__8736__delegate.call(this, coll, x, xs);
});
return G__8736;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8732.call(this,coll,x);
default:
return conj__8733.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8733.cljs$lang$applyTo;
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
var nth__8781 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8782 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8781.call(this,coll,n);
case  3 :
return nth__8782.call(this,coll,n,not_found);
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
var get__8795 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8796 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8795.call(this,o,k);
case  3 :
return get__8796.call(this,o,k,not_found);
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
var assoc__8812 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8813 = (function() { 
var G__8819__delegate = function (coll,k,v,kvs){
while(true){
var ret__8810 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8821 = ret__8810;
var G__8823 = cljs.core.first.call(null,kvs);
var G__8825 = cljs.core.second.call(null,kvs);
var G__8826 = cljs.core.nnext.call(null,kvs);
coll = G__8821;
k = G__8823;
v = G__8825;
kvs = G__8826;
continue;
}
} else
{return ret__8810;
}
break;
}
};
var G__8819 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8819__delegate.call(this, coll, k, v, kvs);
};
G__8819.cljs$lang$maxFixedArity = 3;
G__8819.cljs$lang$applyTo = (function (arglist__8832){
var coll = cljs.core.first(arglist__8832);
var k = cljs.core.first(cljs.core.next(arglist__8832));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8832)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8832)));
return G__8819__delegate.call(this, coll, k, v, kvs);
});
return G__8819;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8812.call(this,coll,k,v);
default:
return assoc__8813.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8813.cljs$lang$applyTo;
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
var dissoc__8843 = (function (coll){
return coll;
});
var dissoc__8844 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8845 = (function() { 
var G__8847__delegate = function (coll,k,ks){
while(true){
var ret__8839 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8848 = ret__8839;
var G__8849 = cljs.core.first.call(null,ks);
var G__8850 = cljs.core.next.call(null,ks);
coll = G__8848;
k = G__8849;
ks = G__8850;
continue;
}
} else
{return ret__8839;
}
break;
}
};
var G__8847 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8847__delegate.call(this, coll, k, ks);
};
G__8847.cljs$lang$maxFixedArity = 2;
G__8847.cljs$lang$applyTo = (function (arglist__8855){
var coll = cljs.core.first(arglist__8855);
var k = cljs.core.first(cljs.core.next(arglist__8855));
var ks = cljs.core.rest(cljs.core.next(arglist__8855));
return G__8847__delegate.call(this, coll, k, ks);
});
return G__8847;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8843.call(this,coll);
case  2 :
return dissoc__8844.call(this,coll,k);
default:
return dissoc__8845.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8845.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8860 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8864 = x__445__auto____8860;

if(cljs.core.truth_(and__3546__auto____8864))
{var and__3546__auto____8868 = x__445__auto____8860.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8868))
{return cljs.core.not.call(null,x__445__auto____8860.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8868;
}
} else
{return and__3546__auto____8864;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8860);
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
var disj__8891 = (function (coll){
return coll;
});
var disj__8892 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8893 = (function() { 
var G__8896__delegate = function (coll,k,ks){
while(true){
var ret__8889 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8897 = ret__8889;
var G__8898 = cljs.core.first.call(null,ks);
var G__8899 = cljs.core.next.call(null,ks);
coll = G__8897;
k = G__8898;
ks = G__8899;
continue;
}
} else
{return ret__8889;
}
break;
}
};
var G__8896 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8896__delegate.call(this, coll, k, ks);
};
G__8896.cljs$lang$maxFixedArity = 2;
G__8896.cljs$lang$applyTo = (function (arglist__8902){
var coll = cljs.core.first(arglist__8902);
var k = cljs.core.first(cljs.core.next(arglist__8902));
var ks = cljs.core.rest(cljs.core.next(arglist__8902));
return G__8896__delegate.call(this, coll, k, ks);
});
return G__8896;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8891.call(this,coll);
case  2 :
return disj__8892.call(this,coll,k);
default:
return disj__8893.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8893.cljs$lang$applyTo;
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
{var x__445__auto____8906 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8913 = x__445__auto____8906;

if(cljs.core.truth_(and__3546__auto____8913))
{var and__3546__auto____8920 = x__445__auto____8906.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8920))
{return cljs.core.not.call(null,x__445__auto____8906.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8920;
}
} else
{return and__3546__auto____8913;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8906);
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
{var x__445__auto____8927 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8928 = x__445__auto____8927;

if(cljs.core.truth_(and__3546__auto____8928))
{var and__3546__auto____8929 = x__445__auto____8927.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8929))
{return cljs.core.not.call(null,x__445__auto____8927.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8929;
}
} else
{return and__3546__auto____8928;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8927);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8932 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8933 = x__445__auto____8932;

if(cljs.core.truth_(and__3546__auto____8933))
{var and__3546__auto____8934 = x__445__auto____8932.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8934))
{return cljs.core.not.call(null,x__445__auto____8932.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8934;
}
} else
{return and__3546__auto____8933;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8932);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8949 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8950 = x__445__auto____8949;

if(cljs.core.truth_(and__3546__auto____8950))
{var and__3546__auto____8954 = x__445__auto____8949.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8954))
{return cljs.core.not.call(null,x__445__auto____8949.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8954;
}
} else
{return and__3546__auto____8950;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8949);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8961 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8962 = x__445__auto____8961;

if(cljs.core.truth_(and__3546__auto____8962))
{var and__3546__auto____8963 = x__445__auto____8961.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8963))
{return cljs.core.not.call(null,x__445__auto____8961.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8963;
}
} else
{return and__3546__auto____8962;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8961);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8967 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8969 = x__445__auto____8967;

if(cljs.core.truth_(and__3546__auto____8969))
{var and__3546__auto____8995 = x__445__auto____8967.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8995))
{return cljs.core.not.call(null,x__445__auto____8967.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8995;
}
} else
{return and__3546__auto____8969;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8967);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____9017 = x;

if(cljs.core.truth_((function (){var and__3546__auto____9018 = x__445__auto____9017;

if(cljs.core.truth_(and__3546__auto____9018))
{var and__3546__auto____9022 = x__445__auto____9017.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____9022))
{return cljs.core.not.call(null,x__445__auto____9017.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____9022;
}
} else
{return and__3546__auto____9018;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____9017);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__9033 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__9033.push(key);
}));
return keys__9033;
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
{var x__445__auto____9043 = s;

if(cljs.core.truth_((function (){var and__3546__auto____9044 = x__445__auto____9043;

if(cljs.core.truth_(and__3546__auto____9044))
{var and__3546__auto____9045 = x__445__auto____9043.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____9045))
{return cljs.core.not.call(null,x__445__auto____9043.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____9045;
}
} else
{return and__3546__auto____9044;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____9043);
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
var and__3546__auto____9055 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9055))
{return cljs.core.not.call(null,(function (){var or__3548__auto____9056 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____9056))
{return or__3548__auto____9056;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____9055;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____9061 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9061))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____9061;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____9067 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9067))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____9067;
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
var and__3546__auto____9098 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____9098))
{return (n == n.toFixed());
} else
{return and__3546__auto____9098;
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
if(cljs.core.truth_((function (){var and__3546__auto____9100 = coll;

if(cljs.core.truth_(and__3546__auto____9100))
{var and__3546__auto____9101 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9101))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9101;
}
} else
{return and__3546__auto____9100;
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
var distinct_QMARK___9115 = (function (x){
return true;
});
var distinct_QMARK___9116 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9117 = (function() { 
var G__9119__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9111 = cljs.core.set([y,x]);
var xs__9112 = more;

while(true){
var x__9113 = cljs.core.first.call(null,xs__9112);
var etc__9114 = cljs.core.next.call(null,xs__9112);

if(cljs.core.truth_(xs__9112))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9111,x__9113)))
{return false;
} else
{{
var G__9120 = cljs.core.conj.call(null,s__9111,x__9113);
var G__9121 = etc__9114;
s__9111 = G__9120;
xs__9112 = G__9121;
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
var G__9119 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9119__delegate.call(this, x, y, more);
};
G__9119.cljs$lang$maxFixedArity = 2;
G__9119.cljs$lang$applyTo = (function (arglist__9122){
var x = cljs.core.first(arglist__9122);
var y = cljs.core.first(cljs.core.next(arglist__9122));
var more = cljs.core.rest(cljs.core.next(arglist__9122));
return G__9119__delegate.call(this, x, y, more);
});
return G__9119;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9115.call(this,x);
case  2 :
return distinct_QMARK___9116.call(this,x,y);
default:
return distinct_QMARK___9117.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9117.cljs$lang$applyTo;
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
var r__9128 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9128)))
{return r__9128;
} else
{if(cljs.core.truth_(r__9128))
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
var sort__9136 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9137 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9134 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9134,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9134);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9136.call(this,comp);
case  2 :
return sort__9137.call(this,comp,coll);
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
var sort_by__9142 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9145 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9142.call(this,keyfn,comp);
case  3 :
return sort_by__9145.call(this,keyfn,comp,coll);
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
var reduce__9297 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9298 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9297.call(this,f,val);
case  3 :
return reduce__9298.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9309 = (function (f,coll){
var temp__3695__auto____9301 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9301))
{var s__9302 = temp__3695__auto____9301;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9302),cljs.core.next.call(null,s__9302));
} else
{return f.call(null);
}
});
var seq_reduce__9311 = (function (f,val,coll){
var val__9305 = val;
var coll__9306 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9306))
{{
var G__9318 = f.call(null,val__9305,cljs.core.first.call(null,coll__9306));
var G__9319 = cljs.core.next.call(null,coll__9306);
val__9305 = G__9318;
coll__9306 = G__9319;
continue;
}
} else
{return val__9305;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9309.call(this,f,val);
case  3 :
return seq_reduce__9311.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9461 = null;
var G__9461__9462 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9461__9463 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9461 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9461__9462.call(this,coll,f);
case  3 :
return G__9461__9463.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9461;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9465 = (function (){
return 0;
});
var _PLUS___9466 = (function (x){
return x;
});
var _PLUS___9467 = (function (x,y){
return (x + y);
});
var _PLUS___9468 = (function() { 
var G__9470__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9470 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9470__delegate.call(this, x, y, more);
};
G__9470.cljs$lang$maxFixedArity = 2;
G__9470.cljs$lang$applyTo = (function (arglist__9472){
var x = cljs.core.first(arglist__9472);
var y = cljs.core.first(cljs.core.next(arglist__9472));
var more = cljs.core.rest(cljs.core.next(arglist__9472));
return G__9470__delegate.call(this, x, y, more);
});
return G__9470;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9465.call(this);
case  1 :
return _PLUS___9466.call(this,x);
case  2 :
return _PLUS___9467.call(this,x,y);
default:
return _PLUS___9468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9468.cljs$lang$applyTo;
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
var ___9481 = (function (x){
return (- x);
});
var ___9482 = (function (x,y){
return (x - y);
});
var ___9483 = (function() { 
var G__9486__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9486 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9486__delegate.call(this, x, y, more);
};
G__9486.cljs$lang$maxFixedArity = 2;
G__9486.cljs$lang$applyTo = (function (arglist__9492){
var x = cljs.core.first(arglist__9492);
var y = cljs.core.first(cljs.core.next(arglist__9492));
var more = cljs.core.rest(cljs.core.next(arglist__9492));
return G__9486__delegate.call(this, x, y, more);
});
return G__9486;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9481.call(this,x);
case  2 :
return ___9482.call(this,x,y);
default:
return ___9483.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9483.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9507 = (function (){
return 1;
});
var _STAR___9508 = (function (x){
return x;
});
var _STAR___9509 = (function (x,y){
return (x * y);
});
var _STAR___9510 = (function() { 
var G__9513__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9513 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9513__delegate.call(this, x, y, more);
};
G__9513.cljs$lang$maxFixedArity = 2;
G__9513.cljs$lang$applyTo = (function (arglist__9514){
var x = cljs.core.first(arglist__9514);
var y = cljs.core.first(cljs.core.next(arglist__9514));
var more = cljs.core.rest(cljs.core.next(arglist__9514));
return G__9513__delegate.call(this, x, y, more);
});
return G__9513;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9507.call(this);
case  1 :
return _STAR___9508.call(this,x);
case  2 :
return _STAR___9509.call(this,x,y);
default:
return _STAR___9510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9510.cljs$lang$applyTo;
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
var _SLASH___9515 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9517 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9518 = (function() { 
var G__9522__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9522 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9522__delegate.call(this, x, y, more);
};
G__9522.cljs$lang$maxFixedArity = 2;
G__9522.cljs$lang$applyTo = (function (arglist__9523){
var x = cljs.core.first(arglist__9523);
var y = cljs.core.first(cljs.core.next(arglist__9523));
var more = cljs.core.rest(cljs.core.next(arglist__9523));
return G__9522__delegate.call(this, x, y, more);
});
return G__9522;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9515.call(this,x);
case  2 :
return _SLASH___9517.call(this,x,y);
default:
return _SLASH___9518.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9518.cljs$lang$applyTo;
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
var _LT___9540 = (function (x){
return true;
});
var _LT___9541 = (function (x,y){
return (x < y);
});
var _LT___9542 = (function() { 
var G__9546__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9548 = y;
var G__9549 = cljs.core.first.call(null,more);
var G__9550 = cljs.core.next.call(null,more);
x = G__9548;
y = G__9549;
more = G__9550;
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
var G__9546 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9546__delegate.call(this, x, y, more);
};
G__9546.cljs$lang$maxFixedArity = 2;
G__9546.cljs$lang$applyTo = (function (arglist__9557){
var x = cljs.core.first(arglist__9557);
var y = cljs.core.first(cljs.core.next(arglist__9557));
var more = cljs.core.rest(cljs.core.next(arglist__9557));
return G__9546__delegate.call(this, x, y, more);
});
return G__9546;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9540.call(this,x);
case  2 :
return _LT___9541.call(this,x,y);
default:
return _LT___9542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9542.cljs$lang$applyTo;
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
var _LT__EQ___9573 = (function (x){
return true;
});
var _LT__EQ___9574 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9575 = (function() { 
var G__9578__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9579 = y;
var G__9580 = cljs.core.first.call(null,more);
var G__9581 = cljs.core.next.call(null,more);
x = G__9579;
y = G__9580;
more = G__9581;
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
var G__9578 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9578__delegate.call(this, x, y, more);
};
G__9578.cljs$lang$maxFixedArity = 2;
G__9578.cljs$lang$applyTo = (function (arglist__9582){
var x = cljs.core.first(arglist__9582);
var y = cljs.core.first(cljs.core.next(arglist__9582));
var more = cljs.core.rest(cljs.core.next(arglist__9582));
return G__9578__delegate.call(this, x, y, more);
});
return G__9578;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9573.call(this,x);
case  2 :
return _LT__EQ___9574.call(this,x,y);
default:
return _LT__EQ___9575.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9575.cljs$lang$applyTo;
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
var _GT___9592 = (function (x){
return true;
});
var _GT___9593 = (function (x,y){
return (x > y);
});
var _GT___9594 = (function() { 
var G__9596__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9597 = y;
var G__9598 = cljs.core.first.call(null,more);
var G__9599 = cljs.core.next.call(null,more);
x = G__9597;
y = G__9598;
more = G__9599;
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
var G__9596 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9596__delegate.call(this, x, y, more);
};
G__9596.cljs$lang$maxFixedArity = 2;
G__9596.cljs$lang$applyTo = (function (arglist__9604){
var x = cljs.core.first(arglist__9604);
var y = cljs.core.first(cljs.core.next(arglist__9604));
var more = cljs.core.rest(cljs.core.next(arglist__9604));
return G__9596__delegate.call(this, x, y, more);
});
return G__9596;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9592.call(this,x);
case  2 :
return _GT___9593.call(this,x,y);
default:
return _GT___9594.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9594.cljs$lang$applyTo;
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
var _GT__EQ___9615 = (function (x){
return true;
});
var _GT__EQ___9616 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9617 = (function() { 
var G__9619__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9620 = y;
var G__9621 = cljs.core.first.call(null,more);
var G__9622 = cljs.core.next.call(null,more);
x = G__9620;
y = G__9621;
more = G__9622;
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
var G__9619 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9619__delegate.call(this, x, y, more);
};
G__9619.cljs$lang$maxFixedArity = 2;
G__9619.cljs$lang$applyTo = (function (arglist__9626){
var x = cljs.core.first(arglist__9626);
var y = cljs.core.first(cljs.core.next(arglist__9626));
var more = cljs.core.rest(cljs.core.next(arglist__9626));
return G__9619__delegate.call(this, x, y, more);
});
return G__9619;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9615.call(this,x);
case  2 :
return _GT__EQ___9616.call(this,x,y);
default:
return _GT__EQ___9617.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9617.cljs$lang$applyTo;
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
var max__9636 = (function (x){
return x;
});
var max__9637 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9638 = (function() { 
var G__9640__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9640 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9640__delegate.call(this, x, y, more);
};
G__9640.cljs$lang$maxFixedArity = 2;
G__9640.cljs$lang$applyTo = (function (arglist__9645){
var x = cljs.core.first(arglist__9645);
var y = cljs.core.first(cljs.core.next(arglist__9645));
var more = cljs.core.rest(cljs.core.next(arglist__9645));
return G__9640__delegate.call(this, x, y, more);
});
return G__9640;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9636.call(this,x);
case  2 :
return max__9637.call(this,x,y);
default:
return max__9638.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9638.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9650 = (function (x){
return x;
});
var min__9651 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9652 = (function() { 
var G__9654__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9654 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9654__delegate.call(this, x, y, more);
};
G__9654.cljs$lang$maxFixedArity = 2;
G__9654.cljs$lang$applyTo = (function (arglist__9655){
var x = cljs.core.first(arglist__9655);
var y = cljs.core.first(cljs.core.next(arglist__9655));
var more = cljs.core.rest(cljs.core.next(arglist__9655));
return G__9654__delegate.call(this, x, y, more);
});
return G__9654;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9650.call(this,x);
case  2 :
return min__9651.call(this,x,y);
default:
return min__9652.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9652.cljs$lang$applyTo;
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
var rem__9659 = (n % d);

return cljs.core.fix.call(null,((n - rem__9659) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9662 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9662));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9665 = (function (){
return Math.random.call(null);
});
var rand__9666 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9665.call(this);
case  1 :
return rand__9666.call(this,n);
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
var _EQ__EQ___9778 = (function (x){
return true;
});
var _EQ__EQ___9779 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9780 = (function() { 
var G__9782__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9783 = y;
var G__9784 = cljs.core.first.call(null,more);
var G__9785 = cljs.core.next.call(null,more);
x = G__9783;
y = G__9784;
more = G__9785;
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
var G__9782 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9782__delegate.call(this, x, y, more);
};
G__9782.cljs$lang$maxFixedArity = 2;
G__9782.cljs$lang$applyTo = (function (arglist__9790){
var x = cljs.core.first(arglist__9790);
var y = cljs.core.first(cljs.core.next(arglist__9790));
var more = cljs.core.rest(cljs.core.next(arglist__9790));
return G__9782__delegate.call(this, x, y, more);
});
return G__9782;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9778.call(this,x);
case  2 :
return _EQ__EQ___9779.call(this,x,y);
default:
return _EQ__EQ___9780.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9780.cljs$lang$applyTo;
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
var n__9797 = n;
var xs__9799 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9803 = xs__9799;

if(cljs.core.truth_(and__3546__auto____9803))
{return (n__9797 > 0);
} else
{return and__3546__auto____9803;
}
})()))
{{
var G__9809 = (n__9797 - 1);
var G__9810 = cljs.core.next.call(null,xs__9799);
n__9797 = G__9809;
xs__9799 = G__9810;
continue;
}
} else
{return xs__9799;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9920 = null;
var G__9920__9921 = (function (coll,n){
var temp__3695__auto____9916 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9916))
{var xs__9917 = temp__3695__auto____9916;

return cljs.core.first.call(null,xs__9917);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9920__9922 = (function (coll,n,not_found){
var temp__3695__auto____9918 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9918))
{var xs__9919 = temp__3695__auto____9918;

return cljs.core.first.call(null,xs__9919);
} else
{return not_found;
}
});
G__9920 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9920__9921.call(this,coll,n);
case  3 :
return G__9920__9922.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9920;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9924 = (function (){
return "";
});
var str_STAR___9925 = (function (x){
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
var str_STAR___9926 = (function() { 
var G__9928__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9929 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9930 = cljs.core.next.call(null,more);
sb = G__9929;
more = G__9930;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9928 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9928__delegate.call(this, x, ys);
};
G__9928.cljs$lang$maxFixedArity = 1;
G__9928.cljs$lang$applyTo = (function (arglist__9932){
var x = cljs.core.first(arglist__9932);
var ys = cljs.core.rest(arglist__9932);
return G__9928__delegate.call(this, x, ys);
});
return G__9928;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9924.call(this);
case  1 :
return str_STAR___9925.call(this,x);
default:
return str_STAR___9926.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9926.cljs$lang$applyTo;
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
var str__9936 = (function (){
return "";
});
var str__9937 = (function (x){
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
var str__9938 = (function() { 
var G__9964__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9964 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9964__delegate.call(this, x, ys);
};
G__9964.cljs$lang$maxFixedArity = 1;
G__9964.cljs$lang$applyTo = (function (arglist__9965){
var x = cljs.core.first(arglist__9965);
var ys = cljs.core.rest(arglist__9965);
return G__9964__delegate.call(this, x, ys);
});
return G__9964;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9936.call(this);
case  1 :
return str__9937.call(this,x);
default:
return str__9938.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9938.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9966 = (function (s,start){
return s.substring(start);
});
var subs__9967 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9966.call(this,s,start);
case  3 :
return subs__9967.call(this,s,start,end);
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
var symbol__9973 = (function (name){
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
var symbol__9974 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9973.call(this,ns);
case  2 :
return symbol__9974.call(this,ns,name);
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
var keyword__10026 = (function (name){
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
var keyword__10027 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__10026.call(this,ns);
case  2 :
return keyword__10027.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__10035 = cljs.core.seq.call(null,x);
var ys__10036 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__10035)))
{return cljs.core.nil_QMARK_.call(null,ys__10036);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__10036)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__10035),cljs.core.first.call(null,ys__10036))))
{{
var G__10039 = cljs.core.next.call(null,xs__10035);
var G__10040 = cljs.core.next.call(null,ys__10036);
xs__10035 = G__10039;
ys__10036 = G__10040;
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
return cljs.core.reduce.call(null,(function (p1__10041_SHARP_,p2__10042_SHARP_){
return cljs.core.hash_combine.call(null,p1__10041_SHARP_,cljs.core.hash.call(null,p2__10042_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__10051__10052 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__10051__10052))
{var G__10054__10056 = cljs.core.first.call(null,G__10051__10052);
var vec__10055__10057 = G__10054__10056;
var key_name__10058 = cljs.core.nth.call(null,vec__10055__10057,0,null);
var f__10059 = cljs.core.nth.call(null,vec__10055__10057,1,null);
var G__10051__10060 = G__10051__10052;

var G__10054__10061 = G__10054__10056;
var G__10051__10062 = G__10051__10060;

while(true){
var vec__10063__10064 = G__10054__10061;
var key_name__10065 = cljs.core.nth.call(null,vec__10063__10064,0,null);
var f__10066 = cljs.core.nth.call(null,vec__10063__10064,1,null);
var G__10051__10067 = G__10051__10062;

var str_name__10069 = cljs.core.name.call(null,key_name__10065);

obj[str_name__10069] = f__10066;
var temp__3698__auto____10071 = cljs.core.next.call(null,G__10051__10067);

if(cljs.core.truth_(temp__3698__auto____10071))
{var G__10051__10072 = temp__3698__auto____10071;

{
var G__10163 = cljs.core.first.call(null,G__10051__10072);
var G__10165 = G__10051__10072;
G__10054__10061 = G__10163;
G__10051__10062 = G__10165;
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
var this__10175 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10177 = this;
return (new cljs.core.List(this__10177.meta,o,coll,(this__10177.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10179 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10181 = this;
return this__10181.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10183 = this;
return this__10183.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10185 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10188 = this;
return this__10188.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10189 = this;
return this__10189.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10190 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10192 = this;
return (new cljs.core.List(meta,this__10192.first,this__10192.rest,this__10192.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10194 = this;
return this__10194.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10218 = this;
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
var this__10226 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10239 = this;
return (new cljs.core.List(this__10239.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10240 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10241 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10242 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10243 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10244 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10245 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10246 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10247 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10248 = this;
return this__10248.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10249 = this;
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
list.cljs$lang$applyTo = (function (arglist__10266){
var items = cljs.core.seq( arglist__10266 );;
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
var this__10269 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10270 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10271 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10272 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10272.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10304 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10305 = this;
return this__10305.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10306 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10306.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10306.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10307 = this;
return this__10307.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10308 = this;
return (new cljs.core.Cons(meta,this__10308.first,this__10308.rest));
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
var G__10328 = null;
var G__10328__10329 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10328__10330 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10328 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10328__10329.call(this,string,f);
case  3 :
return G__10328__10330.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10328;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10332 = null;
var G__10332__10333 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10332__10334 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10332 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10332__10333.call(this,string,k);
case  3 :
return G__10332__10334.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10332;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10337 = null;
var G__10337__10338 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10337__10339 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10337 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10337__10338.call(this,string,n);
case  3 :
return G__10337__10339.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10337;
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
var G__10344 = null;
var G__10344__10345 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10344__10346 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10344 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10344__10345.call(this,this$,coll);
case  3 :
return G__10344__10346.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10344;
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
var x__10358 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10358;
} else
{lazy_seq.x = x__10358.call(null);
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
var this__10404 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10405 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10408 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10410 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10410.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10417 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10418 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10420 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10422 = this;
return this__10422.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10423 = this;
return (new cljs.core.LazySeq(meta,this__10423.realized,this__10423.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10458 = cljs.core.array.call(null);

var s__10460 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10460)))
{ary__10458.push(cljs.core.first.call(null,s__10460));
{
var G__10497 = cljs.core.next.call(null,s__10460);
s__10460 = G__10497;
continue;
}
} else
{return ary__10458;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10498 = s;
var i__10499 = n;
var sum__10500 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10501 = (i__10499 > 0);

if(cljs.core.truth_(and__3546__auto____10501))
{return cljs.core.seq.call(null,s__10498);
} else
{return and__3546__auto____10501;
}
})()))
{{
var G__10502 = cljs.core.next.call(null,s__10498);
var G__10503 = (i__10499 - 1);
var G__10504 = (sum__10500 + 1);
s__10498 = G__10502;
i__10499 = G__10503;
sum__10500 = G__10504;
continue;
}
} else
{return sum__10500;
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
var concat__10654 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10655 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10656 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10528 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10528))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10528),concat.call(null,cljs.core.rest.call(null,s__10528),y));
} else
{return y;
}
})));
});
var concat__10657 = (function() { 
var G__10666__delegate = function (x,y,zs){
var cat__10652 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10535 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10535))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10535),cat.call(null,cljs.core.rest.call(null,xys__10535),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10652.call(null,concat.call(null,x,y),zs);
};
var G__10666 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10666__delegate.call(this, x, y, zs);
};
G__10666.cljs$lang$maxFixedArity = 2;
G__10666.cljs$lang$applyTo = (function (arglist__10675){
var x = cljs.core.first(arglist__10675);
var y = cljs.core.first(cljs.core.next(arglist__10675));
var zs = cljs.core.rest(cljs.core.next(arglist__10675));
return G__10666__delegate.call(this, x, y, zs);
});
return G__10666;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10654.call(this);
case  1 :
return concat__10655.call(this,x);
case  2 :
return concat__10656.call(this,x,y);
default:
return concat__10657.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10657.cljs$lang$applyTo;
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
var list_STAR___10705 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10706 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10707 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10708 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10709 = (function() { 
var G__10718__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10718 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10718__delegate.call(this, a, b, c, d, more);
};
G__10718.cljs$lang$maxFixedArity = 4;
G__10718.cljs$lang$applyTo = (function (arglist__10723){
var a = cljs.core.first(arglist__10723);
var b = cljs.core.first(cljs.core.next(arglist__10723));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10723)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10723))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10723))));
return G__10718__delegate.call(this, a, b, c, d, more);
});
return G__10718;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10705.call(this,a);
case  2 :
return list_STAR___10706.call(this,a,b);
case  3 :
return list_STAR___10707.call(this,a,b,c);
case  4 :
return list_STAR___10708.call(this,a,b,c,d);
default:
return list_STAR___10709.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10709.cljs$lang$applyTo;
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
var apply__10766 = (function (f,args){
var fixed_arity__10731 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10731 + 1)) <= fixed_arity__10731)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10767 = (function (f,x,args){
var arglist__10734 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10735 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10734,fixed_arity__10735) <= fixed_arity__10735)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10734));
} else
{return f.cljs$lang$applyTo(arglist__10734);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10734));
}
});
var apply__10768 = (function (f,x,y,args){
var arglist__10738 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10739 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10738,fixed_arity__10739) <= fixed_arity__10739)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10738));
} else
{return f.cljs$lang$applyTo(arglist__10738);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10738));
}
});
var apply__10769 = (function (f,x,y,z,args){
var arglist__10750 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10751 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10750,fixed_arity__10751) <= fixed_arity__10751)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10750));
} else
{return f.cljs$lang$applyTo(arglist__10750);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10750));
}
});
var apply__10770 = (function() { 
var G__10791__delegate = function (f,a,b,c,d,args){
var arglist__10761 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10762 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10761,fixed_arity__10762) <= fixed_arity__10762)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10761));
} else
{return f.cljs$lang$applyTo(arglist__10761);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10761));
}
};
var G__10791 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10791__delegate.call(this, f, a, b, c, d, args);
};
G__10791.cljs$lang$maxFixedArity = 5;
G__10791.cljs$lang$applyTo = (function (arglist__10792){
var f = cljs.core.first(arglist__10792);
var a = cljs.core.first(cljs.core.next(arglist__10792));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10792)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10792))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10792)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10792)))));
return G__10791__delegate.call(this, f, a, b, c, d, args);
});
return G__10791;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10766.call(this,f,a);
case  3 :
return apply__10767.call(this,f,a,b);
case  4 :
return apply__10768.call(this,f,a,b,c);
case  5 :
return apply__10769.call(this,f,a,b,c,d);
default:
return apply__10770.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10770.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10900){
var obj = cljs.core.first(arglist__10900);
var f = cljs.core.first(cljs.core.next(arglist__10900));
var args = cljs.core.rest(cljs.core.next(arglist__10900));
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
var not_EQ___10904 = (function (x){
return false;
});
var not_EQ___10905 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10906 = (function() { 
var G__10912__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10912 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10912__delegate.call(this, x, y, more);
};
G__10912.cljs$lang$maxFixedArity = 2;
G__10912.cljs$lang$applyTo = (function (arglist__10914){
var x = cljs.core.first(arglist__10914);
var y = cljs.core.first(cljs.core.next(arglist__10914));
var more = cljs.core.rest(cljs.core.next(arglist__10914));
return G__10912__delegate.call(this, x, y, more);
});
return G__10912;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10904.call(this,x);
case  2 :
return not_EQ___10905.call(this,x,y);
default:
return not_EQ___10906.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10906.cljs$lang$applyTo;
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
var G__10934 = pred;
var G__10935 = cljs.core.next.call(null,coll);
pred = G__10934;
coll = G__10935;
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
{var or__3548__auto____10943 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10943))
{return or__3548__auto____10943;
} else
{{
var G__10954 = pred;
var G__10955 = cljs.core.next.call(null,coll);
pred = G__10954;
coll = G__10955;
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
var G__11028 = null;
var G__11028__11031 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__11028__11033 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__11028__11040 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__11028__11050 = (function() { 
var G__11270__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__11270 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11270__delegate.call(this, x, y, zs);
};
G__11270.cljs$lang$maxFixedArity = 2;
G__11270.cljs$lang$applyTo = (function (arglist__11272){
var x = cljs.core.first(arglist__11272);
var y = cljs.core.first(cljs.core.next(arglist__11272));
var zs = cljs.core.rest(cljs.core.next(arglist__11272));
return G__11270__delegate.call(this, x, y, zs);
});
return G__11270;
})()
;
G__11028 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__11028__11031.call(this);
case  1 :
return G__11028__11033.call(this,x);
case  2 :
return G__11028__11040.call(this,x,y);
default:
return G__11028__11050.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11028.cljs$lang$maxFixedArity = 2;
G__11028.cljs$lang$applyTo = G__11028__11050.cljs$lang$applyTo;
return G__11028;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__11374__delegate = function (args){
return x;
};
var G__11374 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11374__delegate.call(this, args);
};
G__11374.cljs$lang$maxFixedArity = 0;
G__11374.cljs$lang$applyTo = (function (arglist__11375){
var args = cljs.core.seq( arglist__11375 );;
return G__11374__delegate.call(this, args);
});
return G__11374;
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
var comp__11451 = (function (){
return cljs.core.identity;
});
var comp__11452 = (function (f){
return f;
});
var comp__11453 = (function (f,g){
return (function() {
var G__11458 = null;
var G__11458__11461 = (function (){
return f.call(null,g.call(null));
});
var G__11458__11462 = (function (x){
return f.call(null,g.call(null,x));
});
var G__11458__11464 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__11458__11467 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__11458__11468 = (function() { 
var G__11476__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__11476 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11476__delegate.call(this, x, y, z, args);
};
G__11476.cljs$lang$maxFixedArity = 3;
G__11476.cljs$lang$applyTo = (function (arglist__11477){
var x = cljs.core.first(arglist__11477);
var y = cljs.core.first(cljs.core.next(arglist__11477));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11477)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11477)));
return G__11476__delegate.call(this, x, y, z, args);
});
return G__11476;
})()
;
G__11458 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__11458__11461.call(this);
case  1 :
return G__11458__11462.call(this,x);
case  2 :
return G__11458__11464.call(this,x,y);
case  3 :
return G__11458__11467.call(this,x,y,z);
default:
return G__11458__11468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11458.cljs$lang$maxFixedArity = 3;
G__11458.cljs$lang$applyTo = G__11458__11468.cljs$lang$applyTo;
return G__11458;
})()
});
var comp__11454 = (function (f,g,h){
return (function() {
var G__11480 = null;
var G__11480__11481 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__11480__11484 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__11480__11485 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__11480__11486 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__11480__11487 = (function() { 
var G__11495__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__11495 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11495__delegate.call(this, x, y, z, args);
};
G__11495.cljs$lang$maxFixedArity = 3;
G__11495.cljs$lang$applyTo = (function (arglist__11497){
var x = cljs.core.first(arglist__11497);
var y = cljs.core.first(cljs.core.next(arglist__11497));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11497)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11497)));
return G__11495__delegate.call(this, x, y, z, args);
});
return G__11495;
})()
;
G__11480 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__11480__11481.call(this);
case  1 :
return G__11480__11484.call(this,x);
case  2 :
return G__11480__11485.call(this,x,y);
case  3 :
return G__11480__11486.call(this,x,y,z);
default:
return G__11480__11487.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11480.cljs$lang$maxFixedArity = 3;
G__11480.cljs$lang$applyTo = G__11480__11487.cljs$lang$applyTo;
return G__11480;
})()
});
var comp__11455 = (function() { 
var G__11504__delegate = function (f1,f2,f3,fs){
var fs__11378 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__11507__delegate = function (args){
var ret__11380 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__11378),args);
var fs__11381 = cljs.core.next.call(null,fs__11378);

while(true){
if(cljs.core.truth_(fs__11381))
{{
var G__11509 = cljs.core.first.call(null,fs__11381).call(null,ret__11380);
var G__11510 = cljs.core.next.call(null,fs__11381);
ret__11380 = G__11509;
fs__11381 = G__11510;
continue;
}
} else
{return ret__11380;
}
break;
}
};
var G__11507 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11507__delegate.call(this, args);
};
G__11507.cljs$lang$maxFixedArity = 0;
G__11507.cljs$lang$applyTo = (function (arglist__11513){
var args = cljs.core.seq( arglist__11513 );;
return G__11507__delegate.call(this, args);
});
return G__11507;
})()
;
};
var G__11504 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11504__delegate.call(this, f1, f2, f3, fs);
};
G__11504.cljs$lang$maxFixedArity = 3;
G__11504.cljs$lang$applyTo = (function (arglist__11515){
var f1 = cljs.core.first(arglist__11515);
var f2 = cljs.core.first(cljs.core.next(arglist__11515));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11515)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11515)));
return G__11504__delegate.call(this, f1, f2, f3, fs);
});
return G__11504;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__11451.call(this);
case  1 :
return comp__11452.call(this,f1);
case  2 :
return comp__11453.call(this,f1,f2);
case  3 :
return comp__11454.call(this,f1,f2,f3);
default:
return comp__11455.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__11455.cljs$lang$applyTo;
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
var partial__11536 = (function (f,arg1){
return (function() { 
var G__11542__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__11542 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11542__delegate.call(this, args);
};
G__11542.cljs$lang$maxFixedArity = 0;
G__11542.cljs$lang$applyTo = (function (arglist__11544){
var args = cljs.core.seq( arglist__11544 );;
return G__11542__delegate.call(this, args);
});
return G__11542;
})()
;
});
var partial__11537 = (function (f,arg1,arg2){
return (function() { 
var G__11547__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__11547 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11547__delegate.call(this, args);
};
G__11547.cljs$lang$maxFixedArity = 0;
G__11547.cljs$lang$applyTo = (function (arglist__11551){
var args = cljs.core.seq( arglist__11551 );;
return G__11547__delegate.call(this, args);
});
return G__11547;
})()
;
});
var partial__11538 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__11553__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__11553 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11553__delegate.call(this, args);
};
G__11553.cljs$lang$maxFixedArity = 0;
G__11553.cljs$lang$applyTo = (function (arglist__11555){
var args = cljs.core.seq( arglist__11555 );;
return G__11553__delegate.call(this, args);
});
return G__11553;
})()
;
});
var partial__11539 = (function() { 
var G__11557__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__11559__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__11559 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11559__delegate.call(this, args);
};
G__11559.cljs$lang$maxFixedArity = 0;
G__11559.cljs$lang$applyTo = (function (arglist__11562){
var args = cljs.core.seq( arglist__11562 );;
return G__11559__delegate.call(this, args);
});
return G__11559;
})()
;
};
var G__11557 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11557__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__11557.cljs$lang$maxFixedArity = 4;
G__11557.cljs$lang$applyTo = (function (arglist__11563){
var f = cljs.core.first(arglist__11563);
var arg1 = cljs.core.first(cljs.core.next(arglist__11563));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11563)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11563))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11563))));
return G__11557__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__11557;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__11536.call(this,f,arg1);
case  3 :
return partial__11537.call(this,f,arg1,arg2);
case  4 :
return partial__11538.call(this,f,arg1,arg2,arg3);
default:
return partial__11539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__11539.cljs$lang$applyTo;
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
var fnil__11597 = (function (f,x){
return (function() {
var G__11601 = null;
var G__11601__11603 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__11601__11604 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__11601__11605 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__11601__11606 = (function() { 
var G__11612__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__11612 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11612__delegate.call(this, a, b, c, ds);
};
G__11612.cljs$lang$maxFixedArity = 3;
G__11612.cljs$lang$applyTo = (function (arglist__11613){
var a = cljs.core.first(arglist__11613);
var b = cljs.core.first(cljs.core.next(arglist__11613));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11613)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11613)));
return G__11612__delegate.call(this, a, b, c, ds);
});
return G__11612;
})()
;
G__11601 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__11601__11603.call(this,a);
case  2 :
return G__11601__11604.call(this,a,b);
case  3 :
return G__11601__11605.call(this,a,b,c);
default:
return G__11601__11606.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11601.cljs$lang$maxFixedArity = 3;
G__11601.cljs$lang$applyTo = G__11601__11606.cljs$lang$applyTo;
return G__11601;
})()
});
var fnil__11598 = (function (f,x,y){
return (function() {
var G__11617 = null;
var G__11617__11618 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11617__11619 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11617__11620 = (function() { 
var G__11630__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11630 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11630__delegate.call(this, a, b, c, ds);
};
G__11630.cljs$lang$maxFixedArity = 3;
G__11630.cljs$lang$applyTo = (function (arglist__11632){
var a = cljs.core.first(arglist__11632);
var b = cljs.core.first(cljs.core.next(arglist__11632));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11632)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11632)));
return G__11630__delegate.call(this, a, b, c, ds);
});
return G__11630;
})()
;
G__11617 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11617__11618.call(this,a,b);
case  3 :
return G__11617__11619.call(this,a,b,c);
default:
return G__11617__11620.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11617.cljs$lang$maxFixedArity = 3;
G__11617.cljs$lang$applyTo = G__11617__11620.cljs$lang$applyTo;
return G__11617;
})()
});
var fnil__11599 = (function (f,x,y,z){
return (function() {
var G__11634 = null;
var G__11634__11635 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11634__11636 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11634__11637 = (function() { 
var G__11694__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11694 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11694__delegate.call(this, a, b, c, ds);
};
G__11694.cljs$lang$maxFixedArity = 3;
G__11694.cljs$lang$applyTo = (function (arglist__11697){
var a = cljs.core.first(arglist__11697);
var b = cljs.core.first(cljs.core.next(arglist__11697));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11697)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11697)));
return G__11694__delegate.call(this, a, b, c, ds);
});
return G__11694;
})()
;
G__11634 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11634__11635.call(this,a,b);
case  3 :
return G__11634__11636.call(this,a,b,c);
default:
return G__11634__11637.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11634.cljs$lang$maxFixedArity = 3;
G__11634.cljs$lang$applyTo = G__11634__11637.cljs$lang$applyTo;
return G__11634;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__11597.call(this,f,x);
case  3 :
return fnil__11598.call(this,f,x,y);
case  4 :
return fnil__11599.call(this,f,x,y,z);
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
var mapi__11706 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11703 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11703))
{var s__11704 = temp__3698__auto____11703;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11704)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11704)));
} else
{return null;
}
})));
});

return mapi__11706.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11719 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11719))
{var s__11722 = temp__3698__auto____11719;

var x__11723 = f.call(null,cljs.core.first.call(null,s__11722));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11723)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11722));
} else
{return cljs.core.cons.call(null,x__11723,keep.call(null,f,cljs.core.rest.call(null,s__11722)));
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
var keepi__11763 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11756 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11756))
{var s__11759 = temp__3698__auto____11756;

var x__11760 = f.call(null,idx,cljs.core.first.call(null,s__11759));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11760)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11759));
} else
{return cljs.core.cons.call(null,x__11760,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11759)));
}
} else
{return null;
}
})));
});

return keepi__11763.call(null,0,coll);
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
var every_pred__11900 = (function (p){
return (function() {
var ep1 = null;
var ep1__11911 = (function (){
return true;
});
var ep1__11913 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11914 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11799 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11799))
{return p.call(null,y);
} else
{return and__3546__auto____11799;
}
})());
});
var ep1__11915 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11802 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11802))
{var and__3546__auto____11804 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11804))
{return p.call(null,z);
} else
{return and__3546__auto____11804;
}
} else
{return and__3546__auto____11802;
}
})());
});
var ep1__11917 = (function() { 
var G__11922__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11807 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11807))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11807;
}
})());
};
var G__11922 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11922__delegate.call(this, x, y, z, args);
};
G__11922.cljs$lang$maxFixedArity = 3;
G__11922.cljs$lang$applyTo = (function (arglist__11927){
var x = cljs.core.first(arglist__11927);
var y = cljs.core.first(cljs.core.next(arglist__11927));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11927)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11927)));
return G__11922__delegate.call(this, x, y, z, args);
});
return G__11922;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11911.call(this);
case  1 :
return ep1__11913.call(this,x);
case  2 :
return ep1__11914.call(this,x,y);
case  3 :
return ep1__11915.call(this,x,y,z);
default:
return ep1__11917.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11917.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11901 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11931 = (function (){
return true;
});
var ep2__11932 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11810 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11810))
{return p2.call(null,x);
} else
{return and__3546__auto____11810;
}
})());
});
var ep2__11934 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11816 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11816))
{var and__3546__auto____11818 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11818))
{var and__3546__auto____11821 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11821))
{return p2.call(null,y);
} else
{return and__3546__auto____11821;
}
} else
{return and__3546__auto____11818;
}
} else
{return and__3546__auto____11816;
}
})());
});
var ep2__11935 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11822 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11822))
{var and__3546__auto____11824 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11824))
{var and__3546__auto____11826 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11826))
{var and__3546__auto____11832 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11832))
{var and__3546__auto____11835 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11835))
{return p2.call(null,z);
} else
{return and__3546__auto____11835;
}
} else
{return and__3546__auto____11832;
}
} else
{return and__3546__auto____11826;
}
} else
{return and__3546__auto____11824;
}
} else
{return and__3546__auto____11822;
}
})());
});
var ep2__11936 = (function() { 
var G__11968__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11838 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11838))
{return cljs.core.every_QMARK_.call(null,(function (p1__11738_SHARP_){
var and__3546__auto____11842 = p1.call(null,p1__11738_SHARP_);

if(cljs.core.truth_(and__3546__auto____11842))
{return p2.call(null,p1__11738_SHARP_);
} else
{return and__3546__auto____11842;
}
}),args);
} else
{return and__3546__auto____11838;
}
})());
};
var G__11968 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11968__delegate.call(this, x, y, z, args);
};
G__11968.cljs$lang$maxFixedArity = 3;
G__11968.cljs$lang$applyTo = (function (arglist__11974){
var x = cljs.core.first(arglist__11974);
var y = cljs.core.first(cljs.core.next(arglist__11974));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11974)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11974)));
return G__11968__delegate.call(this, x, y, z, args);
});
return G__11968;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11931.call(this);
case  1 :
return ep2__11932.call(this,x);
case  2 :
return ep2__11934.call(this,x,y);
case  3 :
return ep2__11935.call(this,x,y,z);
default:
return ep2__11936.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11936.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11902 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11976 = (function (){
return true;
});
var ep3__11977 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11845 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11845))
{var and__3546__auto____11848 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11848))
{return p3.call(null,x);
} else
{return and__3546__auto____11848;
}
} else
{return and__3546__auto____11845;
}
})());
});
var ep3__11978 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11850 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11850))
{var and__3546__auto____11852 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11852))
{var and__3546__auto____11854 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11854))
{var and__3546__auto____11856 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11856))
{var and__3546__auto____11857 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11857))
{return p3.call(null,y);
} else
{return and__3546__auto____11857;
}
} else
{return and__3546__auto____11856;
}
} else
{return and__3546__auto____11854;
}
} else
{return and__3546__auto____11852;
}
} else
{return and__3546__auto____11850;
}
})());
});
var ep3__11979 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11865 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11865))
{var and__3546__auto____11867 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11867))
{var and__3546__auto____11868 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11868))
{var and__3546__auto____11869 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11869))
{var and__3546__auto____11871 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11871))
{var and__3546__auto____11873 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11873))
{var and__3546__auto____11875 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11875))
{var and__3546__auto____11876 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11876))
{return p3.call(null,z);
} else
{return and__3546__auto____11876;
}
} else
{return and__3546__auto____11875;
}
} else
{return and__3546__auto____11873;
}
} else
{return and__3546__auto____11871;
}
} else
{return and__3546__auto____11869;
}
} else
{return and__3546__auto____11868;
}
} else
{return and__3546__auto____11867;
}
} else
{return and__3546__auto____11865;
}
})());
});
var ep3__11980 = (function() { 
var G__11992__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11877 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11877))
{return cljs.core.every_QMARK_.call(null,(function (p1__11744_SHARP_){
var and__3546__auto____11878 = p1.call(null,p1__11744_SHARP_);

if(cljs.core.truth_(and__3546__auto____11878))
{var and__3546__auto____11880 = p2.call(null,p1__11744_SHARP_);

if(cljs.core.truth_(and__3546__auto____11880))
{return p3.call(null,p1__11744_SHARP_);
} else
{return and__3546__auto____11880;
}
} else
{return and__3546__auto____11878;
}
}),args);
} else
{return and__3546__auto____11877;
}
})());
};
var G__11992 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11992__delegate.call(this, x, y, z, args);
};
G__11992.cljs$lang$maxFixedArity = 3;
G__11992.cljs$lang$applyTo = (function (arglist__11997){
var x = cljs.core.first(arglist__11997);
var y = cljs.core.first(cljs.core.next(arglist__11997));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11997)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11997)));
return G__11992__delegate.call(this, x, y, z, args);
});
return G__11992;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11976.call(this);
case  1 :
return ep3__11977.call(this,x);
case  2 :
return ep3__11978.call(this,x,y);
case  3 :
return ep3__11979.call(this,x,y,z);
default:
return ep3__11980.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11980.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11903 = (function() { 
var G__12001__delegate = function (p1,p2,p3,ps){
var ps__11881 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__12003 = (function (){
return true;
});
var epn__12004 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11745_SHARP_){
return p1__11745_SHARP_.call(null,x);
}),ps__11881);
});
var epn__12005 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11746_SHARP_){
var and__3546__auto____11886 = p1__11746_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11886))
{return p1__11746_SHARP_.call(null,y);
} else
{return and__3546__auto____11886;
}
}),ps__11881);
});
var epn__12006 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11747_SHARP_){
var and__3546__auto____11893 = p1__11747_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11893))
{var and__3546__auto____11895 = p1__11747_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11895))
{return p1__11747_SHARP_.call(null,z);
} else
{return and__3546__auto____11895;
}
} else
{return and__3546__auto____11893;
}
}),ps__11881);
});
var epn__12007 = (function() { 
var G__12019__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11898 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11898))
{return cljs.core.every_QMARK_.call(null,(function (p1__11749_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11749_SHARP_,args);
}),ps__11881);
} else
{return and__3546__auto____11898;
}
})());
};
var G__12019 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12019__delegate.call(this, x, y, z, args);
};
G__12019.cljs$lang$maxFixedArity = 3;
G__12019.cljs$lang$applyTo = (function (arglist__12023){
var x = cljs.core.first(arglist__12023);
var y = cljs.core.first(cljs.core.next(arglist__12023));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12023)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12023)));
return G__12019__delegate.call(this, x, y, z, args);
});
return G__12019;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__12003.call(this);
case  1 :
return epn__12004.call(this,x);
case  2 :
return epn__12005.call(this,x,y);
case  3 :
return epn__12006.call(this,x,y,z);
default:
return epn__12007.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__12007.cljs$lang$applyTo;
return epn;
})()
};
var G__12001 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12001__delegate.call(this, p1, p2, p3, ps);
};
G__12001.cljs$lang$maxFixedArity = 3;
G__12001.cljs$lang$applyTo = (function (arglist__12026){
var p1 = cljs.core.first(arglist__12026);
var p2 = cljs.core.first(cljs.core.next(arglist__12026));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12026)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12026)));
return G__12001__delegate.call(this, p1, p2, p3, ps);
});
return G__12001;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11900.call(this,p1);
case  2 :
return every_pred__11901.call(this,p1,p2);
case  3 :
return every_pred__11902.call(this,p1,p2,p3);
default:
return every_pred__11903.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11903.cljs$lang$applyTo;
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
var some_fn__12193 = (function (p){
return (function() {
var sp1 = null;
var sp1__12198 = (function (){
return null;
});
var sp1__12199 = (function (x){
return p.call(null,x);
});
var sp1__12200 = (function (x,y){
var or__3548__auto____12031 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____12031))
{return or__3548__auto____12031;
} else
{return p.call(null,y);
}
});
var sp1__12201 = (function (x,y,z){
var or__3548__auto____12032 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____12032))
{return or__3548__auto____12032;
} else
{var or__3548__auto____12035 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____12035))
{return or__3548__auto____12035;
} else
{return p.call(null,z);
}
}
});
var sp1__12202 = (function() { 
var G__12205__delegate = function (x,y,z,args){
var or__3548__auto____12037 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____12037))
{return or__3548__auto____12037;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__12205 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12205__delegate.call(this, x, y, z, args);
};
G__12205.cljs$lang$maxFixedArity = 3;
G__12205.cljs$lang$applyTo = (function (arglist__12207){
var x = cljs.core.first(arglist__12207);
var y = cljs.core.first(cljs.core.next(arglist__12207));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12207)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12207)));
return G__12205__delegate.call(this, x, y, z, args);
});
return G__12205;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__12198.call(this);
case  1 :
return sp1__12199.call(this,x);
case  2 :
return sp1__12200.call(this,x,y);
case  3 :
return sp1__12201.call(this,x,y,z);
default:
return sp1__12202.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__12202.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__12194 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__12209 = (function (){
return null;
});
var sp2__12295 = (function (x){
var or__3548__auto____12042 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12042))
{return or__3548__auto____12042;
} else
{return p2.call(null,x);
}
});
var sp2__12296 = (function (x,y){
var or__3548__auto____12043 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12043))
{return or__3548__auto____12043;
} else
{var or__3548__auto____12044 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____12044))
{return or__3548__auto____12044;
} else
{var or__3548__auto____12045 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____12045))
{return or__3548__auto____12045;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__12297 = (function (x,y,z){
var or__3548__auto____12050 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12050))
{return or__3548__auto____12050;
} else
{var or__3548__auto____12052 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____12052))
{return or__3548__auto____12052;
} else
{var or__3548__auto____12053 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____12053))
{return or__3548__auto____12053;
} else
{var or__3548__auto____12055 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____12055))
{return or__3548__auto____12055;
} else
{var or__3548__auto____12057 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____12057))
{return or__3548__auto____12057;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__12298 = (function() { 
var G__12309__delegate = function (x,y,z,args){
var or__3548__auto____12060 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____12060))
{return or__3548__auto____12060;
} else
{return cljs.core.some.call(null,(function (p1__11789_SHARP_){
var or__3548__auto____12063 = p1.call(null,p1__11789_SHARP_);

if(cljs.core.truth_(or__3548__auto____12063))
{return or__3548__auto____12063;
} else
{return p2.call(null,p1__11789_SHARP_);
}
}),args);
}
};
var G__12309 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12309__delegate.call(this, x, y, z, args);
};
G__12309.cljs$lang$maxFixedArity = 3;
G__12309.cljs$lang$applyTo = (function (arglist__12317){
var x = cljs.core.first(arglist__12317);
var y = cljs.core.first(cljs.core.next(arglist__12317));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12317)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12317)));
return G__12309__delegate.call(this, x, y, z, args);
});
return G__12309;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__12209.call(this);
case  1 :
return sp2__12295.call(this,x);
case  2 :
return sp2__12296.call(this,x,y);
case  3 :
return sp2__12297.call(this,x,y,z);
default:
return sp2__12298.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__12298.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__12195 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__12319 = (function (){
return null;
});
var sp3__12321 = (function (x){
var or__3548__auto____12065 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12065))
{return or__3548__auto____12065;
} else
{var or__3548__auto____12068 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____12068))
{return or__3548__auto____12068;
} else
{return p3.call(null,x);
}
}
});
var sp3__12323 = (function (x,y){
var or__3548__auto____12069 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12069))
{return or__3548__auto____12069;
} else
{var or__3548__auto____12070 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____12070))
{return or__3548__auto____12070;
} else
{var or__3548__auto____12071 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____12071))
{return or__3548__auto____12071;
} else
{var or__3548__auto____12073 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____12073))
{return or__3548__auto____12073;
} else
{var or__3548__auto____12075 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____12075))
{return or__3548__auto____12075;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__12325 = (function (x,y,z){
var or__3548__auto____12128 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12128))
{return or__3548__auto____12128;
} else
{var or__3548__auto____12129 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____12129))
{return or__3548__auto____12129;
} else
{var or__3548__auto____12131 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____12131))
{return or__3548__auto____12131;
} else
{var or__3548__auto____12133 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____12133))
{return or__3548__auto____12133;
} else
{var or__3548__auto____12134 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____12134))
{return or__3548__auto____12134;
} else
{var or__3548__auto____12138 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____12138))
{return or__3548__auto____12138;
} else
{var or__3548__auto____12140 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____12140))
{return or__3548__auto____12140;
} else
{var or__3548__auto____12143 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____12143))
{return or__3548__auto____12143;
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
var sp3__12326 = (function() { 
var G__12333__delegate = function (x,y,z,args){
var or__3548__auto____12184 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____12184))
{return or__3548__auto____12184;
} else
{return cljs.core.some.call(null,(function (p1__11790_SHARP_){
var or__3548__auto____12185 = p1.call(null,p1__11790_SHARP_);

if(cljs.core.truth_(or__3548__auto____12185))
{return or__3548__auto____12185;
} else
{var or__3548__auto____12186 = p2.call(null,p1__11790_SHARP_);

if(cljs.core.truth_(or__3548__auto____12186))
{return or__3548__auto____12186;
} else
{return p3.call(null,p1__11790_SHARP_);
}
}
}),args);
}
};
var G__12333 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12333__delegate.call(this, x, y, z, args);
};
G__12333.cljs$lang$maxFixedArity = 3;
G__12333.cljs$lang$applyTo = (function (arglist__12342){
var x = cljs.core.first(arglist__12342);
var y = cljs.core.first(cljs.core.next(arglist__12342));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12342)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12342)));
return G__12333__delegate.call(this, x, y, z, args);
});
return G__12333;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__12319.call(this);
case  1 :
return sp3__12321.call(this,x);
case  2 :
return sp3__12323.call(this,x,y);
case  3 :
return sp3__12325.call(this,x,y,z);
default:
return sp3__12326.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__12326.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__12196 = (function() { 
var G__12346__delegate = function (p1,p2,p3,ps){
var ps__12187 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__12347 = (function (){
return null;
});
var spn__12348 = (function (x){
return cljs.core.some.call(null,(function (p1__11792_SHARP_){
return p1__11792_SHARP_.call(null,x);
}),ps__12187);
});
var spn__12349 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11793_SHARP_){
var or__3548__auto____12188 = p1__11793_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____12188))
{return or__3548__auto____12188;
} else
{return p1__11793_SHARP_.call(null,y);
}
}),ps__12187);
});
var spn__12350 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11795_SHARP_){
var or__3548__auto____12189 = p1__11795_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____12189))
{return or__3548__auto____12189;
} else
{var or__3548__auto____12191 = p1__11795_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____12191))
{return or__3548__auto____12191;
} else
{return p1__11795_SHARP_.call(null,z);
}
}
}),ps__12187);
});
var spn__12351 = (function() { 
var G__12354__delegate = function (x,y,z,args){
var or__3548__auto____12192 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____12192))
{return or__3548__auto____12192;
} else
{return cljs.core.some.call(null,(function (p1__11796_SHARP_){
return cljs.core.some.call(null,p1__11796_SHARP_,args);
}),ps__12187);
}
};
var G__12354 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12354__delegate.call(this, x, y, z, args);
};
G__12354.cljs$lang$maxFixedArity = 3;
G__12354.cljs$lang$applyTo = (function (arglist__12355){
var x = cljs.core.first(arglist__12355);
var y = cljs.core.first(cljs.core.next(arglist__12355));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12355)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12355)));
return G__12354__delegate.call(this, x, y, z, args);
});
return G__12354;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__12347.call(this);
case  1 :
return spn__12348.call(this,x);
case  2 :
return spn__12349.call(this,x,y);
case  3 :
return spn__12350.call(this,x,y,z);
default:
return spn__12351.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__12351.cljs$lang$applyTo;
return spn;
})()
};
var G__12346 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12346__delegate.call(this, p1, p2, p3, ps);
};
G__12346.cljs$lang$maxFixedArity = 3;
G__12346.cljs$lang$applyTo = (function (arglist__12356){
var p1 = cljs.core.first(arglist__12356);
var p2 = cljs.core.first(cljs.core.next(arglist__12356));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12356)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12356)));
return G__12346__delegate.call(this, p1, p2, p3, ps);
});
return G__12346;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__12193.call(this,p1);
case  2 :
return some_fn__12194.call(this,p1,p2);
case  3 :
return some_fn__12195.call(this,p1,p2,p3);
default:
return some_fn__12196.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__12196.cljs$lang$applyTo;
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
var map__12404 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12358 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12358))
{var s__12360 = temp__3698__auto____12358;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__12360)),map.call(null,f,cljs.core.rest.call(null,s__12360)));
} else
{return null;
}
})));
});
var map__12405 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12365 = cljs.core.seq.call(null,c1);
var s2__12367 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12369 = s1__12365;

if(cljs.core.truth_(and__3546__auto____12369))
{return s2__12367;
} else
{return and__3546__auto____12369;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12365),cljs.core.first.call(null,s2__12367)),map.call(null,f,cljs.core.rest.call(null,s1__12365),cljs.core.rest.call(null,s2__12367)));
} else
{return null;
}
})));
});
var map__12406 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12375 = cljs.core.seq.call(null,c1);
var s2__12376 = cljs.core.seq.call(null,c2);
var s3__12379 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____12380 = s1__12375;

if(cljs.core.truth_(and__3546__auto____12380))
{var and__3546__auto____12383 = s2__12376;

if(cljs.core.truth_(and__3546__auto____12383))
{return s3__12379;
} else
{return and__3546__auto____12383;
}
} else
{return and__3546__auto____12380;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12375),cljs.core.first.call(null,s2__12376),cljs.core.first.call(null,s3__12379)),map.call(null,f,cljs.core.rest.call(null,s1__12375),cljs.core.rest.call(null,s2__12376),cljs.core.rest.call(null,s3__12379)));
} else
{return null;
}
})));
});
var map__12407 = (function() { 
var G__12446__delegate = function (f,c1,c2,c3,colls){
var step__12400 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12398 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12398)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12398),step.call(null,map.call(null,cljs.core.rest,ss__12398)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__12029_SHARP_){
return cljs.core.apply.call(null,f,p1__12029_SHARP_);
}),step__12400.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12446 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12446__delegate.call(this, f, c1, c2, c3, colls);
};
G__12446.cljs$lang$maxFixedArity = 4;
G__12446.cljs$lang$applyTo = (function (arglist__12447){
var f = cljs.core.first(arglist__12447);
var c1 = cljs.core.first(cljs.core.next(arglist__12447));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12447)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12447))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12447))));
return G__12446__delegate.call(this, f, c1, c2, c3, colls);
});
return G__12446;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__12404.call(this,f,c1);
case  3 :
return map__12405.call(this,f,c1,c2);
case  4 :
return map__12406.call(this,f,c1,c2,c3);
default:
return map__12407.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__12407.cljs$lang$applyTo;
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
{var temp__3698__auto____12457 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12457))
{var s__12458 = temp__3698__auto____12457;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12458),take.call(null,(n - 1),cljs.core.rest.call(null,s__12458)));
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
var step__12480 = (function (n,coll){
while(true){
var s__12477 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12479 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12479))
{return s__12477;
} else
{return and__3546__auto____12479;
}
})()))
{{
var G__12481 = (n - 1);
var G__12482 = cljs.core.rest.call(null,s__12477);
n = G__12481;
coll = G__12482;
continue;
}
} else
{return s__12477;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12480.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12488 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12490 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12488.call(this,n);
case  2 :
return drop_last__12490.call(this,n,s);
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
var s__12495 = cljs.core.seq.call(null,coll);
var lead__12496 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12496))
{{
var G__12498 = cljs.core.next.call(null,s__12495);
var G__12499 = cljs.core.next.call(null,lead__12496);
s__12495 = G__12498;
lead__12496 = G__12499;
continue;
}
} else
{return s__12495;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12502 = (function (pred,coll){
while(true){
var s__12500 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12501 = s__12500;

if(cljs.core.truth_(and__3546__auto____12501))
{return pred.call(null,cljs.core.first.call(null,s__12500));
} else
{return and__3546__auto____12501;
}
})()))
{{
var G__12503 = pred;
var G__12504 = cljs.core.rest.call(null,s__12500);
pred = G__12503;
coll = G__12504;
continue;
}
} else
{return s__12500;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12502.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12507 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12507))
{var s__12534 = temp__3698__auto____12507;

return cljs.core.concat.call(null,s__12534,cycle.call(null,s__12534));
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
var repeat__12538 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12539 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12538.call(this,n);
case  2 :
return repeat__12539.call(this,n,x);
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
var repeatedly__12543 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12544 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12543.call(this,n);
case  2 :
return repeatedly__12544.call(this,n,f);
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
var interleave__12559 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12555 = cljs.core.seq.call(null,c1);
var s2__12556 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12557 = s1__12555;

if(cljs.core.truth_(and__3546__auto____12557))
{return s2__12556;
} else
{return and__3546__auto____12557;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12555),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12556),interleave.call(null,cljs.core.rest.call(null,s1__12555),cljs.core.rest.call(null,s2__12556))));
} else
{return null;
}
})));
});
var interleave__12560 = (function() { 
var G__12562__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12558 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12558)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12558),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12558)));
} else
{return null;
}
})));
};
var G__12562 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12562__delegate.call(this, c1, c2, colls);
};
G__12562.cljs$lang$maxFixedArity = 2;
G__12562.cljs$lang$applyTo = (function (arglist__12563){
var c1 = cljs.core.first(arglist__12563);
var c2 = cljs.core.first(cljs.core.next(arglist__12563));
var colls = cljs.core.rest(cljs.core.next(arglist__12563));
return G__12562__delegate.call(this, c1, c2, colls);
});
return G__12562;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12559.call(this,c1,c2);
default:
return interleave__12560.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12560.cljs$lang$applyTo;
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
var cat__12570 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12566 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12566))
{var coll__12567 = temp__3695__auto____12566;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12567),cat.call(null,cljs.core.rest.call(null,coll__12567),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12570.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12721 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12722 = (function() { 
var G__12768__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12768 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12768__delegate.call(this, f, coll, colls);
};
G__12768.cljs$lang$maxFixedArity = 2;
G__12768.cljs$lang$applyTo = (function (arglist__12769){
var f = cljs.core.first(arglist__12769);
var coll = cljs.core.first(cljs.core.next(arglist__12769));
var colls = cljs.core.rest(cljs.core.next(arglist__12769));
return G__12768__delegate.call(this, f, coll, colls);
});
return G__12768;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12721.call(this,f,coll);
default:
return mapcat__12722.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12722.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12772 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12772))
{var s__12788 = temp__3698__auto____12772;

var f__12789 = cljs.core.first.call(null,s__12788);
var r__12790 = cljs.core.rest.call(null,s__12788);

if(cljs.core.truth_(pred.call(null,f__12789)))
{return cljs.core.cons.call(null,f__12789,filter.call(null,pred,r__12790));
} else
{return filter.call(null,pred,r__12790);
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
var walk__12803 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12803.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12798_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12798_SHARP_));
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
var partition__12946 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12947 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12810 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12810))
{var s__12814 = temp__3698__auto____12810;

var p__12880 = cljs.core.take.call(null,n,s__12814);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12880))))
{return cljs.core.cons.call(null,p__12880,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12814)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12948 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12888 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12888))
{var s__12891 = temp__3698__auto____12888;

var p__12892 = cljs.core.take.call(null,n,s__12891);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12892))))
{return cljs.core.cons.call(null,p__12892,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12891)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12892,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12946.call(this,n,step);
case  3 :
return partition__12947.call(this,n,step,pad);
case  4 :
return partition__12948.call(this,n,step,pad,coll);
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
var get_in__12966 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12967 = (function (m,ks,not_found){
var sentinel__12958 = cljs.core.lookup_sentinel;
var m__12959 = m;
var ks__12961 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12961))
{var m__12962 = cljs.core.get.call(null,m__12959,cljs.core.first.call(null,ks__12961),sentinel__12958);

if(cljs.core.truth_((sentinel__12958 === m__12962)))
{return not_found;
} else
{{
var G__12971 = sentinel__12958;
var G__12972 = m__12962;
var G__12973 = cljs.core.next.call(null,ks__12961);
sentinel__12958 = G__12971;
m__12959 = G__12972;
ks__12961 = G__12973;
continue;
}
}
} else
{return m__12959;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12966.call(this,m,ks);
case  3 :
return get_in__12967.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12976,v){
var vec__12978__12979 = p__12976;
var k__12980 = cljs.core.nth.call(null,vec__12978__12979,0,null);
var ks__12982 = cljs.core.nthnext.call(null,vec__12978__12979,1);

if(cljs.core.truth_(ks__12982))
{return cljs.core.assoc.call(null,m,k__12980,assoc_in.call(null,cljs.core.get.call(null,m,k__12980),ks__12982,v));
} else
{return cljs.core.assoc.call(null,m,k__12980,v);
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
var update_in__delegate = function (m,p__12999,f,args){
var vec__13000__13003 = p__12999;
var k__13006 = cljs.core.nth.call(null,vec__13000__13003,0,null);
var ks__13025 = cljs.core.nthnext.call(null,vec__13000__13003,1);

if(cljs.core.truth_(ks__13025))
{return cljs.core.assoc.call(null,m,k__13006,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__13006),ks__13025,f,args));
} else
{return cljs.core.assoc.call(null,m,k__13006,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__13006),args));
}
};
var update_in = function (m,p__12999,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12999, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__13036){
var m = cljs.core.first(arglist__13036);
var p__12999 = cljs.core.first(cljs.core.next(arglist__13036));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13036)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13036)));
return update_in__delegate.call(this, m, p__12999, f, args);
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
var this__13073 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13167 = null;
var G__13167__13168 = (function (coll,k){
var this__13075 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__13167__13169 = (function (coll,k,not_found){
var this__13077 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__13167 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13167__13168.call(this,coll,k);
case  3 :
return G__13167__13169.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13167;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13078 = this;
var new_array__13081 = cljs.core.aclone.call(null,this__13078.array);

(new_array__13081[k] = v);
return (new cljs.core.Vector(this__13078.meta,new_array__13081));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__13171 = null;
var G__13171__13172 = (function (coll,k){
var this__13084 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13171__13173 = (function (coll,k,not_found){
var this__13089 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13171 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13171__13172.call(this,coll,k);
case  3 :
return G__13171__13173.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13171;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13093 = this;
var new_array__13095 = cljs.core.aclone.call(null,this__13093.array);

new_array__13095.push(o);
return (new cljs.core.Vector(this__13093.meta,new_array__13095));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13178 = null;
var G__13178__13179 = (function (v,f){
var this__13098 = this;
return cljs.core.ci_reduce.call(null,this__13098.array,f);
});
var G__13178__13180 = (function (v,f,start){
var this__13101 = this;
return cljs.core.ci_reduce.call(null,this__13101.array,f,start);
});
G__13178 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__13178__13179.call(this,v,f);
case  3 :
return G__13178__13180.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13178;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13106 = this;
if(cljs.core.truth_((this__13106.array.length > 0)))
{var vector_seq__13113 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__13106.array.length)))
{return cljs.core.cons.call(null,(this__13106.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__13113.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13114 = this;
return this__13114.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__13115 = this;
var count__13120 = this__13115.array.length;

if(cljs.core.truth_((count__13120 > 0)))
{return (this__13115.array[(count__13120 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__13125 = this;
if(cljs.core.truth_((this__13125.array.length > 0)))
{var new_array__13126 = cljs.core.aclone.call(null,this__13125.array);

new_array__13126.pop();
return (new cljs.core.Vector(this__13125.meta,new_array__13126));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__13127 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13152 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13153 = this;
return (new cljs.core.Vector(meta,this__13153.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13157 = this;
return this__13157.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13198 = null;
var G__13198__13199 = (function (coll,n){
var this__13158 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13159 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____13159))
{return (n < this__13158.array.length);
} else
{return and__3546__auto____13159;
}
})()))
{return (this__13158.array[n]);
} else
{return null;
}
});
var G__13198__13200 = (function (coll,n,not_found){
var this__13160 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13161 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____13161))
{return (n < this__13160.array.length);
} else
{return and__3546__auto____13161;
}
})()))
{return (this__13160.array[n]);
} else
{return not_found;
}
});
G__13198 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__13198__13199.call(this,coll,n);
case  3 :
return G__13198__13200.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13198;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13162 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__13162.meta);
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
vector.cljs$lang$applyTo = (function (arglist__13219){
var args = cljs.core.seq( arglist__13219 );;
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
var this__13242 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13324 = null;
var G__13324__13325 = (function (coll,k){
var this__13244 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__13324__13326 = (function (coll,k,not_found){
var this__13245 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__13324 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13324__13325.call(this,coll,k);
case  3 :
return G__13324__13326.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13324;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__13249 = this;
var v_pos__13251 = (this__13249.start + key);

return (new cljs.core.Subvec(this__13249.meta,cljs.core._assoc.call(null,this__13249.v,v_pos__13251,val),this__13249.start,((this__13249.end > (v_pos__13251 + 1)) ? this__13249.end : (v_pos__13251 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__13331 = null;
var G__13331__13332 = (function (coll,k){
var this__13253 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13331__13333 = (function (coll,k,not_found){
var this__13254 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13331 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13331__13332.call(this,coll,k);
case  3 :
return G__13331__13333.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13331;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13255 = this;
return (new cljs.core.Subvec(this__13255.meta,cljs.core._assoc_n.call(null,this__13255.v,this__13255.end,o),this__13255.start,(this__13255.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13344 = null;
var G__13344__13345 = (function (coll,f){
var this__13260 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__13344__13346 = (function (coll,f,start){
var this__13261 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__13344 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__13344__13345.call(this,coll,f);
case  3 :
return G__13344__13346.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13344;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13262 = this;
var subvec_seq__13263 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__13262.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__13262.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__13263.call(null,this__13262.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13264 = this;
return (this__13264.end - this__13264.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__13265 = this;
return cljs.core._nth.call(null,this__13265.v,(this__13265.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__13266 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__13266.start,this__13266.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__13266.meta,this__13266.v,this__13266.start,(this__13266.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__13267 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13270 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13271 = this;
return (new cljs.core.Subvec(meta,this__13271.v,this__13271.start,this__13271.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13272 = this;
return this__13272.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13351 = null;
var G__13351__13352 = (function (coll,n){
var this__13307 = this;
return cljs.core._nth.call(null,this__13307.v,(this__13307.start + n));
});
var G__13351__13353 = (function (coll,n,not_found){
var this__13309 = this;
return cljs.core._nth.call(null,this__13309.v,(this__13309.start + n),not_found);
});
G__13351 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__13351__13352.call(this,coll,n);
case  3 :
return G__13351__13353.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13351;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13311 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__13311.meta);
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
var subvec__13363 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__13364 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__13363.call(this,v,start);
case  3 :
return subvec__13364.call(this,v,start,end);
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
var this__13380 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__13382 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13384 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13387 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13387.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13389 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__13390 = this;
return cljs.core._first.call(null,this__13390.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__13392 = this;
var temp__3695__auto____13396 = cljs.core.next.call(null,this__13392.front);

if(cljs.core.truth_(temp__3695__auto____13396))
{var f1__13397 = temp__3695__auto____13396;

return (new cljs.core.PersistentQueueSeq(this__13392.meta,f1__13397,this__13392.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__13392.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__13392.meta,this__13392.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13401 = this;
return this__13401.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13403 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__13403.front,this__13403.rear));
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
var this__13421 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13422 = this;
if(cljs.core.truth_(this__13422.front))
{return (new cljs.core.PersistentQueue(this__13422.meta,(this__13422.count + 1),this__13422.front,cljs.core.conj.call(null,(function (){var or__3548__auto____13428 = this__13422.rear;

if(cljs.core.truth_(or__3548__auto____13428))
{return or__3548__auto____13428;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__13422.meta,(this__13422.count + 1),cljs.core.conj.call(null,this__13422.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13429 = this;
var rear__13434 = cljs.core.seq.call(null,this__13429.rear);

if(cljs.core.truth_((function (){var or__3548__auto____13435 = this__13429.front;

if(cljs.core.truth_(or__3548__auto____13435))
{return or__3548__auto____13435;
} else
{return rear__13434;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__13429.front,cljs.core.seq.call(null,rear__13434)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13439 = this;
return this__13439.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__13442 = this;
return cljs.core._first.call(null,this__13442.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__13448 = this;
if(cljs.core.truth_(this__13448.front))
{var temp__3695__auto____13451 = cljs.core.next.call(null,this__13448.front);

if(cljs.core.truth_(temp__3695__auto____13451))
{var f1__13453 = temp__3695__auto____13451;

return (new cljs.core.PersistentQueue(this__13448.meta,(this__13448.count - 1),f1__13453,this__13448.rear));
} else
{return (new cljs.core.PersistentQueue(this__13448.meta,(this__13448.count - 1),cljs.core.seq.call(null,this__13448.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__13456 = this;
return cljs.core.first.call(null,this__13456.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__13458 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13461 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13464 = this;
return (new cljs.core.PersistentQueue(meta,this__13464.count,this__13464.front,this__13464.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13466 = this;
return this__13466.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13467 = this;
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
var this__13499 = this;
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
var len__13518 = array.length;

var i__13519 = 0;

while(true){
if(cljs.core.truth_((i__13519 < len__13518)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__13519]))))
{return i__13519;
} else
{{
var G__13575 = (i__13519 + incr);
i__13519 = G__13575;
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
var obj_map_contains_key_QMARK___13587 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___13588 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____13579 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13579))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13579;
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
return obj_map_contains_key_QMARK___13587.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___13588.call(this,k,strobj,true_val,false_val);
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
var this__13613 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13679 = null;
var G__13679__13680 = (function (coll,k){
var this__13618 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13679__13681 = (function (coll,k,not_found){
var this__13621 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13621.strobj,(this__13621.strobj[k]),not_found);
});
G__13679 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13679__13680.call(this,coll,k);
case  3 :
return G__13679__13681.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13679;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13626 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13627 = goog.object.clone.call(null,this__13626.strobj);
var overwrite_QMARK___13628 = new_strobj__13627.hasOwnProperty(k);

(new_strobj__13627[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13628))
{return (new cljs.core.ObjMap(this__13626.meta,this__13626.keys,new_strobj__13627));
} else
{var new_keys__13629 = cljs.core.aclone.call(null,this__13626.keys);

new_keys__13629.push(k);
return (new cljs.core.ObjMap(this__13626.meta,new_keys__13629,new_strobj__13627));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13626.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13630 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13630.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13688 = null;
var G__13688__13689 = (function (coll,k){
var this__13631 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13688__13690 = (function (coll,k,not_found){
var this__13632 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13688 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13688__13689.call(this,coll,k);
case  3 :
return G__13688__13690.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13688;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13633 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13634 = this;
if(cljs.core.truth_((this__13634.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__13598_SHARP_){
return cljs.core.vector.call(null,p1__13598_SHARP_,(this__13634.strobj[p1__13598_SHARP_]));
}),this__13634.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13636 = this;
return this__13636.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13638 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13639 = this;
return (new cljs.core.ObjMap(meta,this__13639.keys,this__13639.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13640 = this;
return this__13640.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13642 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13642.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13644 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13648 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13648))
{return this__13644.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13648;
}
})()))
{var new_keys__13673 = cljs.core.aclone.call(null,this__13644.keys);
var new_strobj__13675 = goog.object.clone.call(null,this__13644.strobj);

new_keys__13673.splice(cljs.core.scan_array.call(null,1,k,new_keys__13673),1);
cljs.core.js_delete.call(null,new_strobj__13675,k);
return (new cljs.core.ObjMap(this__13644.meta,new_keys__13673,new_strobj__13675));
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
var this__13713 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13862 = null;
var G__13862__13863 = (function (coll,k){
var this__13736 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13862__13864 = (function (coll,k,not_found){
var this__13737 = this;
var bucket__13741 = (this__13737.hashobj[cljs.core.hash.call(null,k)]);
var i__13743 = (cljs.core.truth_(bucket__13741)?cljs.core.scan_array.call(null,2,k,bucket__13741):null);

if(cljs.core.truth_(i__13743))
{return (bucket__13741[(i__13743 + 1)]);
} else
{return not_found;
}
});
G__13862 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13862__13863.call(this,coll,k);
case  3 :
return G__13862__13864.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13862;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13745 = this;
var h__13747 = cljs.core.hash.call(null,k);
var bucket__13748 = (this__13745.hashobj[h__13747]);

if(cljs.core.truth_(bucket__13748))
{var new_bucket__13749 = cljs.core.aclone.call(null,bucket__13748);
var new_hashobj__13751 = goog.object.clone.call(null,this__13745.hashobj);

(new_hashobj__13751[h__13747] = new_bucket__13749);
var temp__3695__auto____13753 = cljs.core.scan_array.call(null,2,k,new_bucket__13749);

if(cljs.core.truth_(temp__3695__auto____13753))
{var i__13754 = temp__3695__auto____13753;

(new_bucket__13749[(i__13754 + 1)] = v);
return (new cljs.core.HashMap(this__13745.meta,this__13745.count,new_hashobj__13751));
} else
{new_bucket__13749.push(k,v);
return (new cljs.core.HashMap(this__13745.meta,(this__13745.count + 1),new_hashobj__13751));
}
} else
{var new_hashobj__13756 = goog.object.clone.call(null,this__13745.hashobj);

(new_hashobj__13756[h__13747] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13745.meta,(this__13745.count + 1),new_hashobj__13756));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13822 = this;
var bucket__13824 = (this__13822.hashobj[cljs.core.hash.call(null,k)]);
var i__13826 = (cljs.core.truth_(bucket__13824)?cljs.core.scan_array.call(null,2,k,bucket__13824):null);

if(cljs.core.truth_(i__13826))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13889 = null;
var G__13889__13891 = (function (coll,k){
var this__13827 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13889__13892 = (function (coll,k,not_found){
var this__13828 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13889 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13889__13891.call(this,coll,k);
case  3 :
return G__13889__13892.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13889;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13833 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13835 = this;
if(cljs.core.truth_((this__13835.count > 0)))
{var hashes__13840 = cljs.core.js_keys.call(null,this__13835.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13703_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13835.hashobj[p1__13703_SHARP_])));
}),hashes__13840);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13841 = this;
return this__13841.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13842 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13844 = this;
return (new cljs.core.HashMap(meta,this__13844.count,this__13844.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13845 = this;
return this__13845.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13846 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13846.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13848 = this;
var h__13850 = cljs.core.hash.call(null,k);
var bucket__13851 = (this__13848.hashobj[h__13850]);
var i__13852 = (cljs.core.truth_(bucket__13851)?cljs.core.scan_array.call(null,2,k,bucket__13851):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13852)))
{return coll;
} else
{var new_hashobj__13855 = goog.object.clone.call(null,this__13848.hashobj);

if(cljs.core.truth_((3 > bucket__13851.length)))
{cljs.core.js_delete.call(null,new_hashobj__13855,h__13850);
} else
{var new_bucket__13859 = cljs.core.aclone.call(null,bucket__13851);

new_bucket__13859.splice(i__13852,2);
(new_hashobj__13855[h__13850] = new_bucket__13859);
}
return (new cljs.core.HashMap(this__13848.meta,(this__13848.count - 1),new_hashobj__13855));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13922 = ks.length;

var i__13923 = 0;
var out__13924 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13923 < len__13922)))
{{
var G__13929 = (i__13923 + 1);
var G__13930 = cljs.core.assoc.call(null,out__13924,(ks[i__13923]),(vs[i__13923]));
i__13923 = G__13929;
out__13924 = G__13930;
continue;
}
} else
{return out__13924;
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
var in$__13935 = cljs.core.seq.call(null,keyvals);
var out__13936 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13935))
{{
var G__13959 = cljs.core.nnext.call(null,in$__13935);
var G__13960 = cljs.core.assoc.call(null,out__13936,cljs.core.first.call(null,in$__13935),cljs.core.second.call(null,in$__13935));
in$__13935 = G__13959;
out__13936 = G__13960;
continue;
}
} else
{return out__13936;
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
hash_map.cljs$lang$applyTo = (function (arglist__13967){
var keyvals = cljs.core.seq( arglist__13967 );;
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
{return cljs.core.reduce.call(null,(function (p1__13975_SHARP_,p2__13977_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13989 = p1__13975_SHARP_;

if(cljs.core.truth_(or__3548__auto____13989))
{return or__3548__auto____13989;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13977_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13994){
var maps = cljs.core.seq( arglist__13994 );;
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
{var merge_entry__14004 = (function (m,e){
var k__14002 = cljs.core.first.call(null,e);
var v__14003 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__14002)))
{return cljs.core.assoc.call(null,m,k__14002,f.call(null,cljs.core.get.call(null,m,k__14002),v__14003));
} else
{return cljs.core.assoc.call(null,m,k__14002,v__14003);
}
});
var merge2__14007 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__14004,(function (){var or__3548__auto____14005 = m1;

if(cljs.core.truth_(or__3548__auto____14005))
{return or__3548__auto____14005;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__14007,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__14024){
var f = cljs.core.first(arglist__14024);
var maps = cljs.core.rest(arglist__14024);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__14033 = cljs.core.ObjMap.fromObject([],{});
var keys__14036 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__14036))
{var key__14049 = cljs.core.first.call(null,keys__14036);
var entry__14050 = cljs.core.get.call(null,map,key__14049,"﷐'user/not-found");

{
var G__14057 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__14050,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__14033,key__14049,entry__14050):ret__14033);
var G__14058 = cljs.core.next.call(null,keys__14036);
ret__14033 = G__14057;
keys__14036 = G__14058;
continue;
}
} else
{return ret__14033;
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
var this__14075 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__14100 = null;
var G__14100__14101 = (function (coll,v){
var this__14078 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__14100__14102 = (function (coll,v,not_found){
var this__14080 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__14080.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__14100 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__14100__14101.call(this,coll,v);
case  3 :
return G__14100__14102.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14100;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__14104 = null;
var G__14104__14105 = (function (coll,k){
var this__14081 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__14104__14106 = (function (coll,k,not_found){
var this__14082 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__14104 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__14104__14105.call(this,coll,k);
case  3 :
return G__14104__14106.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14104;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__14084 = this;
return (new cljs.core.Set(this__14084.meta,cljs.core.assoc.call(null,this__14084.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__14085 = this;
return cljs.core.keys.call(null,this__14085.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__14086 = this;
return (new cljs.core.Set(this__14086.meta,cljs.core.dissoc.call(null,this__14086.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__14087 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__14090 = this;
var and__3546__auto____14093 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____14093))
{var and__3546__auto____14095 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____14095))
{return cljs.core.every_QMARK_.call(null,(function (p1__14029_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__14029_SHARP_);
}),other);
} else
{return and__3546__auto____14095;
}
} else
{return and__3546__auto____14093;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__14096 = this;
return (new cljs.core.Set(meta,this__14096.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__14097 = this;
return this__14097.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__14098 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__14098.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__14125 = cljs.core.seq.call(null,coll);
var out__14126 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__14125))))
{{
var G__14131 = cljs.core.rest.call(null,in$__14125);
var G__14132 = cljs.core.conj.call(null,out__14126,cljs.core.first.call(null,in$__14125));
in$__14125 = G__14131;
out__14126 = G__14132;
continue;
}
} else
{return out__14126;
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
{var n__14139 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____14143 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____14143))
{var e__14145 = temp__3695__auto____14143;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__14145));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__14139,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__14124_SHARP_){
var temp__3695__auto____14248 = cljs.core.find.call(null,smap,p1__14124_SHARP_);

if(cljs.core.truth_(temp__3695__auto____14248))
{var e__14249 = temp__3695__auto____14248;

return cljs.core.second.call(null,e__14249);
} else
{return p1__14124_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__14290 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__14277,seen){
while(true){
var vec__14278__14279 = p__14277;
var f__14282 = cljs.core.nth.call(null,vec__14278__14279,0,null);
var xs__14283 = vec__14278__14279;

var temp__3698__auto____14285 = cljs.core.seq.call(null,xs__14283);

if(cljs.core.truth_(temp__3698__auto____14285))
{var s__14286 = temp__3698__auto____14285;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__14282)))
{{
var G__14300 = cljs.core.rest.call(null,s__14286);
var G__14301 = seen;
p__14277 = G__14300;
seen = G__14301;
continue;
}
} else
{return cljs.core.cons.call(null,f__14282,step.call(null,cljs.core.rest.call(null,s__14286),cljs.core.conj.call(null,seen,f__14282)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__14290.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__14310 = cljs.core.Vector.fromArray([]);
var s__14311 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__14311)))
{{
var G__14313 = cljs.core.conj.call(null,ret__14310,cljs.core.first.call(null,s__14311));
var G__14315 = cljs.core.next.call(null,s__14311);
ret__14310 = G__14313;
s__14311 = G__14315;
continue;
}
} else
{return cljs.core.seq.call(null,ret__14310);
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
{if(cljs.core.truth_((function (){var or__3548__auto____14320 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____14320))
{return or__3548__auto____14320;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__14321 = x.lastIndexOf("/");

if(cljs.core.truth_((i__14321 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__14321 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____14333 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____14333))
{return or__3548__auto____14333;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__14336 = x.lastIndexOf("/");

if(cljs.core.truth_((i__14336 > -1)))
{return cljs.core.subs.call(null,x,2,i__14336);
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
var map__14351 = cljs.core.ObjMap.fromObject([],{});
var ks__14352 = cljs.core.seq.call(null,keys);
var vs__14353 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14354 = ks__14352;

if(cljs.core.truth_(and__3546__auto____14354))
{return vs__14353;
} else
{return and__3546__auto____14354;
}
})()))
{{
var G__14356 = cljs.core.assoc.call(null,map__14351,cljs.core.first.call(null,ks__14352),cljs.core.first.call(null,vs__14353));
var G__14357 = cljs.core.next.call(null,ks__14352);
var G__14358 = cljs.core.next.call(null,vs__14353);
map__14351 = G__14356;
ks__14352 = G__14357;
vs__14353 = G__14358;
continue;
}
} else
{return map__14351;
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
var max_key__14366 = (function (k,x){
return x;
});
var max_key__14367 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__14368 = (function() { 
var G__14373__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__14345_SHARP_,p2__14346_SHARP_){
return max_key.call(null,k,p1__14345_SHARP_,p2__14346_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__14373 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14373__delegate.call(this, k, x, y, more);
};
G__14373.cljs$lang$maxFixedArity = 3;
G__14373.cljs$lang$applyTo = (function (arglist__14376){
var k = cljs.core.first(arglist__14376);
var x = cljs.core.first(cljs.core.next(arglist__14376));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14376)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14376)));
return G__14373__delegate.call(this, k, x, y, more);
});
return G__14373;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__14366.call(this,k,x);
case  3 :
return max_key__14367.call(this,k,x,y);
default:
return max_key__14368.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__14368.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__14382 = (function (k,x){
return x;
});
var min_key__14383 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__14384 = (function() { 
var G__14386__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__14360_SHARP_,p2__14361_SHARP_){
return min_key.call(null,k,p1__14360_SHARP_,p2__14361_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__14386 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14386__delegate.call(this, k, x, y, more);
};
G__14386.cljs$lang$maxFixedArity = 3;
G__14386.cljs$lang$applyTo = (function (arglist__14390){
var k = cljs.core.first(arglist__14390);
var x = cljs.core.first(cljs.core.next(arglist__14390));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14390)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14390)));
return G__14386__delegate.call(this, k, x, y, more);
});
return G__14386;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__14382.call(this,k,x);
case  3 :
return min_key__14383.call(this,k,x,y);
default:
return min_key__14384.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__14384.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__14400 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__14402 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14393 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14393))
{var s__14394 = temp__3698__auto____14393;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__14394),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__14394)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__14400.call(this,n,step);
case  3 :
return partition_all__14402.call(this,n,step,coll);
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
var temp__3698__auto____14422 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14422))
{var s__14423 = temp__3698__auto____14422;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__14423))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__14423),take_while.call(null,pred,cljs.core.rest.call(null,s__14423)));
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
var this__14435 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__14439 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__14495 = null;
var G__14495__14496 = (function (rng,f){
var this__14442 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__14495__14497 = (function (rng,f,s){
var this__14444 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__14495 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__14495__14496.call(this,rng,f);
case  3 :
return G__14495__14497.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14495;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__14447 = this;
var comp__14449 = (cljs.core.truth_((this__14447.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__14449.call(null,this__14447.start,this__14447.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__14452 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__14452.end - this__14452.start) / this__14452.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__14453 = this;
return this__14453.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__14454 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__14454.meta,(this__14454.start + this__14454.step),this__14454.end,this__14454.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__14455 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__14459 = this;
return (new cljs.core.Range(meta,this__14459.start,this__14459.end,this__14459.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__14465 = this;
return this__14465.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14511 = null;
var G__14511__14512 = (function (rng,n){
var this__14469 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14469.start + (n * this__14469.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14473 = (this__14469.start > this__14469.end);

if(cljs.core.truth_(and__3546__auto____14473))
{return cljs.core._EQ_.call(null,this__14469.step,0);
} else
{return and__3546__auto____14473;
}
})()))
{return this__14469.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14511__14513 = (function (rng,n,not_found){
var this__14479 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14479.start + (n * this__14479.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14485 = (this__14479.start > this__14479.end);

if(cljs.core.truth_(and__3546__auto____14485))
{return cljs.core._EQ_.call(null,this__14479.step,0);
} else
{return and__3546__auto____14485;
}
})()))
{return this__14479.start;
} else
{return not_found;
}
}
});
G__14511 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14511__14512.call(this,rng,n);
case  3 :
return G__14511__14513.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14511;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__14490 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14490.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14529 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14530 = (function (end){
return range.call(null,0,end,1);
});
var range__14531 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14532 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14529.call(this);
case  1 :
return range__14530.call(this,start);
case  2 :
return range__14531.call(this,start,end);
case  3 :
return range__14532.call(this,start,end,step);
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
var temp__3698__auto____14544 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14544))
{var s__14546 = temp__3698__auto____14544;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14546),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14546)));
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
var temp__3698__auto____14600 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14600))
{var s__14602 = temp__3698__auto____14600;

var fst__14604 = cljs.core.first.call(null,s__14602);
var fv__14605 = f.call(null,fst__14604);
var run__14616 = cljs.core.cons.call(null,fst__14604,cljs.core.take_while.call(null,(function (p1__14588_SHARP_){
return cljs.core._EQ_.call(null,fv__14605,f.call(null,p1__14588_SHARP_));
}),cljs.core.next.call(null,s__14602)));

return cljs.core.cons.call(null,run__14616,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14616),s__14602))));
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
var reductions__14710 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14697 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14697))
{var s__14699 = temp__3695__auto____14697;

return reductions.call(null,f,cljs.core.first.call(null,s__14699),cljs.core.rest.call(null,s__14699));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14711 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14705 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14705))
{var s__14707 = temp__3698__auto____14705;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14707)),cljs.core.rest.call(null,s__14707));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14710.call(this,f,init);
case  3 :
return reductions__14711.call(this,f,init,coll);
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
var juxt__14763 = (function (f){
return (function() {
var G__14772 = null;
var G__14772__14774 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14772__14776 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14772__14777 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14772__14778 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14772__14779 = (function() { 
var G__14783__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14783 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14783__delegate.call(this, x, y, z, args);
};
G__14783.cljs$lang$maxFixedArity = 3;
G__14783.cljs$lang$applyTo = (function (arglist__14784){
var x = cljs.core.first(arglist__14784);
var y = cljs.core.first(cljs.core.next(arglist__14784));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14784)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14784)));
return G__14783__delegate.call(this, x, y, z, args);
});
return G__14783;
})()
;
G__14772 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14772__14774.call(this);
case  1 :
return G__14772__14776.call(this,x);
case  2 :
return G__14772__14777.call(this,x,y);
case  3 :
return G__14772__14778.call(this,x,y,z);
default:
return G__14772__14779.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14772.cljs$lang$maxFixedArity = 3;
G__14772.cljs$lang$applyTo = G__14772__14779.cljs$lang$applyTo;
return G__14772;
})()
});
var juxt__14765 = (function (f,g){
return (function() {
var G__14787 = null;
var G__14787__14789 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14787__14790 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14787__14791 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14787__14792 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14787__14793 = (function() { 
var G__14902__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14902 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14902__delegate.call(this, x, y, z, args);
};
G__14902.cljs$lang$maxFixedArity = 3;
G__14902.cljs$lang$applyTo = (function (arglist__14904){
var x = cljs.core.first(arglist__14904);
var y = cljs.core.first(cljs.core.next(arglist__14904));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14904)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14904)));
return G__14902__delegate.call(this, x, y, z, args);
});
return G__14902;
})()
;
G__14787 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14787__14789.call(this);
case  1 :
return G__14787__14790.call(this,x);
case  2 :
return G__14787__14791.call(this,x,y);
case  3 :
return G__14787__14792.call(this,x,y,z);
default:
return G__14787__14793.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14787.cljs$lang$maxFixedArity = 3;
G__14787.cljs$lang$applyTo = G__14787__14793.cljs$lang$applyTo;
return G__14787;
})()
});
var juxt__14767 = (function (f,g,h){
return (function() {
var G__14909 = null;
var G__14909__14910 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14909__14911 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14909__14912 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14909__14913 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14909__14914 = (function() { 
var G__14921__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14921 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14921__delegate.call(this, x, y, z, args);
};
G__14921.cljs$lang$maxFixedArity = 3;
G__14921.cljs$lang$applyTo = (function (arglist__14923){
var x = cljs.core.first(arglist__14923);
var y = cljs.core.first(cljs.core.next(arglist__14923));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14923)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14923)));
return G__14921__delegate.call(this, x, y, z, args);
});
return G__14921;
})()
;
G__14909 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14909__14910.call(this);
case  1 :
return G__14909__14911.call(this,x);
case  2 :
return G__14909__14912.call(this,x,y);
case  3 :
return G__14909__14913.call(this,x,y,z);
default:
return G__14909__14914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14909.cljs$lang$maxFixedArity = 3;
G__14909.cljs$lang$applyTo = G__14909__14914.cljs$lang$applyTo;
return G__14909;
})()
});
var juxt__14769 = (function() { 
var G__14926__delegate = function (f,g,h,fs){
var fs__14723 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14927 = null;
var G__14927__14928 = (function (){
return cljs.core.reduce.call(null,(function (p1__14682_SHARP_,p2__14684_SHARP_){
return cljs.core.conj.call(null,p1__14682_SHARP_,p2__14684_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14723);
});
var G__14927__14929 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14685_SHARP_,p2__14686_SHARP_){
return cljs.core.conj.call(null,p1__14685_SHARP_,p2__14686_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14723);
});
var G__14927__14930 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14687_SHARP_,p2__14689_SHARP_){
return cljs.core.conj.call(null,p1__14687_SHARP_,p2__14689_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14723);
});
var G__14927__14931 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14692_SHARP_,p2__14693_SHARP_){
return cljs.core.conj.call(null,p1__14692_SHARP_,p2__14693_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14723);
});
var G__14927__14932 = (function() { 
var G__14934__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14694_SHARP_,p2__14696_SHARP_){
return cljs.core.conj.call(null,p1__14694_SHARP_,cljs.core.apply.call(null,p2__14696_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14723);
};
var G__14934 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14934__delegate.call(this, x, y, z, args);
};
G__14934.cljs$lang$maxFixedArity = 3;
G__14934.cljs$lang$applyTo = (function (arglist__14938){
var x = cljs.core.first(arglist__14938);
var y = cljs.core.first(cljs.core.next(arglist__14938));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14938)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14938)));
return G__14934__delegate.call(this, x, y, z, args);
});
return G__14934;
})()
;
G__14927 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14927__14928.call(this);
case  1 :
return G__14927__14929.call(this,x);
case  2 :
return G__14927__14930.call(this,x,y);
case  3 :
return G__14927__14931.call(this,x,y,z);
default:
return G__14927__14932.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14927.cljs$lang$maxFixedArity = 3;
G__14927.cljs$lang$applyTo = G__14927__14932.cljs$lang$applyTo;
return G__14927;
})()
};
var G__14926 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14926__delegate.call(this, f, g, h, fs);
};
G__14926.cljs$lang$maxFixedArity = 3;
G__14926.cljs$lang$applyTo = (function (arglist__14945){
var f = cljs.core.first(arglist__14945);
var g = cljs.core.first(cljs.core.next(arglist__14945));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14945)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14945)));
return G__14926__delegate.call(this, f, g, h, fs);
});
return G__14926;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14763.call(this,f);
case  2 :
return juxt__14765.call(this,f,g);
case  3 :
return juxt__14767.call(this,f,g,h);
default:
return juxt__14769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14769.cljs$lang$applyTo;
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
var dorun__14949 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14952 = cljs.core.next.call(null,coll);
coll = G__14952;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14950 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14946 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14946))
{return (n > 0);
} else
{return and__3546__auto____14946;
}
})()))
{{
var G__14955 = (n - 1);
var G__14956 = cljs.core.next.call(null,coll);
n = G__14955;
coll = G__14956;
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
return dorun__14949.call(this,n);
case  2 :
return dorun__14950.call(this,n,coll);
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
var doall__14960 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14961 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14960.call(this,n);
case  2 :
return doall__14961.call(this,n,coll);
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
var matches__14964 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14964),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14964),1)))
{return cljs.core.first.call(null,matches__14964);
} else
{return cljs.core.vec.call(null,matches__14964);
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
var matches__14965 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14965)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14965),1)))
{return cljs.core.first.call(null,matches__14965);
} else
{return cljs.core.vec.call(null,matches__14965);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14967 = cljs.core.re_find.call(null,re,s);
var match_idx__14968 = s.search(re);
var match_str__14969 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14967))?cljs.core.first.call(null,match_data__14967):match_data__14967);
var post_match__14970 = cljs.core.subs.call(null,s,(match_idx__14968 + cljs.core.count.call(null,match_str__14969)));

if(cljs.core.truth_(match_data__14967))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14967,re_seq.call(null,re,post_match__14970));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14974_SHARP_){
return print_one.call(null,p1__14974_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14987 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14987))
{var and__3546__auto____14993 = (function (){var x__445__auto____14989 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14990 = x__445__auto____14989;

if(cljs.core.truth_(and__3546__auto____14990))
{var and__3546__auto____14992 = x__445__auto____14989.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14992))
{return cljs.core.not.call(null,x__445__auto____14989.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14992;
}
} else
{return and__3546__auto____14990;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14989);
}
})();

if(cljs.core.truth_(and__3546__auto____14993))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14993;
}
} else
{return and__3546__auto____14987;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14994 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14995 = x__445__auto____14994;

if(cljs.core.truth_(and__3546__auto____14995))
{var and__3546__auto____14998 = x__445__auto____14994.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14998))
{return cljs.core.not.call(null,x__445__auto____14994.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14998;
}
} else
{return and__3546__auto____14995;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14994);
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
var first_obj__15018 = cljs.core.first.call(null,objs);
var sb__15019 = (new goog.string.StringBuffer());

var G__15021__15024 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__15021__15024))
{var obj__15026 = cljs.core.first.call(null,G__15021__15024);
var G__15021__15027 = G__15021__15024;

while(true){
if(cljs.core.truth_((obj__15026 === first_obj__15018)))
{} else
{sb__15019.append(" ");
}
var G__15029__15031 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__15026,opts));

if(cljs.core.truth_(G__15029__15031))
{var string__15032 = cljs.core.first.call(null,G__15029__15031);
var G__15029__15033 = G__15029__15031;

while(true){
sb__15019.append(string__15032);
var temp__3698__auto____15035 = cljs.core.next.call(null,G__15029__15033);

if(cljs.core.truth_(temp__3698__auto____15035))
{var G__15029__15037 = temp__3698__auto____15035;

{
var G__15047 = cljs.core.first.call(null,G__15029__15037);
var G__15048 = G__15029__15037;
string__15032 = G__15047;
G__15029__15033 = G__15048;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____15038 = cljs.core.next.call(null,G__15021__15027);

if(cljs.core.truth_(temp__3698__auto____15038))
{var G__15021__15039 = temp__3698__auto____15038;

{
var G__15051 = cljs.core.first.call(null,G__15021__15039);
var G__15052 = G__15021__15039;
obj__15026 = G__15051;
G__15021__15027 = G__15052;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__15019);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__15056 = cljs.core.first.call(null,objs);

var G__15057__15058 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__15057__15058))
{var obj__15059 = cljs.core.first.call(null,G__15057__15058);
var G__15057__15060 = G__15057__15058;

while(true){
if(cljs.core.truth_((obj__15059 === first_obj__15056)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__15062__15063 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__15059,opts));

if(cljs.core.truth_(G__15062__15063))
{var string__15064 = cljs.core.first.call(null,G__15062__15063);
var G__15062__15065 = G__15062__15063;

while(true){
cljs.core.string_print.call(null,string__15064);
var temp__3698__auto____15067 = cljs.core.next.call(null,G__15062__15065);

if(cljs.core.truth_(temp__3698__auto____15067))
{var G__15062__15068 = temp__3698__auto____15067;

{
var G__15074 = cljs.core.first.call(null,G__15062__15068);
var G__15075 = G__15062__15068;
string__15064 = G__15074;
G__15062__15065 = G__15075;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____15070 = cljs.core.next.call(null,G__15057__15060);

if(cljs.core.truth_(temp__3698__auto____15070))
{var G__15057__15071 = temp__3698__auto____15070;

{
var G__15078 = cljs.core.first.call(null,G__15057__15071);
var G__15079 = G__15057__15071;
obj__15059 = G__15078;
G__15057__15060 = G__15079;
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
pr_str.cljs$lang$applyTo = (function (arglist__15137){
var objs = cljs.core.seq( arglist__15137 );;
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
pr.cljs$lang$applyTo = (function (arglist__15145){
var objs = cljs.core.seq( arglist__15145 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__15152){
var objs = cljs.core.seq( arglist__15152 );;
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
println.cljs$lang$applyTo = (function (arglist__15153){
var objs = cljs.core.seq( arglist__15153 );;
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
prn.cljs$lang$applyTo = (function (arglist__15158){
var objs = cljs.core.seq( arglist__15158 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__15163 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__15163,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____15164 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____15164))
{var nspc__15165 = temp__3698__auto____15164;

return cljs.core.str.call(null,nspc__15165,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____15166 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____15166))
{var nspc__15168 = temp__3698__auto____15166;

return cljs.core.str.call(null,nspc__15168,"/");
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
var pr_pair__15189 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__15189,"{",", ","}",opts,coll);
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
var this__15204 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__15206 = this;
var G__15207__15208 = cljs.core.seq.call(null,this__15206.watches);

if(cljs.core.truth_(G__15207__15208))
{var G__15210__15212 = cljs.core.first.call(null,G__15207__15208);
var vec__15211__15213 = G__15210__15212;
var key__15214 = cljs.core.nth.call(null,vec__15211__15213,0,null);
var f__15215 = cljs.core.nth.call(null,vec__15211__15213,1,null);
var G__15207__15216 = G__15207__15208;

var G__15210__15217 = G__15210__15212;
var G__15207__15218 = G__15207__15216;

while(true){
var vec__15219__15220 = G__15210__15217;
var key__15221 = cljs.core.nth.call(null,vec__15219__15220,0,null);
var f__15222 = cljs.core.nth.call(null,vec__15219__15220,1,null);
var G__15207__15223 = G__15207__15218;

f__15222.call(null,key__15221,this$,oldval,newval);
var temp__3698__auto____15224 = cljs.core.next.call(null,G__15207__15223);

if(cljs.core.truth_(temp__3698__auto____15224))
{var G__15207__15266 = temp__3698__auto____15224;

{
var G__15305 = cljs.core.first.call(null,G__15207__15266);
var G__15306 = G__15207__15266;
G__15210__15217 = G__15305;
G__15207__15218 = G__15306;
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
var this__15267 = this;
return this$.watches = cljs.core.assoc.call(null,this__15267.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__15273 = this;
return this$.watches = cljs.core.dissoc.call(null,this__15273.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__15284 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__15284.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15288 = this;
return this__15288.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15291 = this;
return this__15291.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__15293 = this;
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
var atom__15320 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__15321 = (function() { 
var G__15325__delegate = function (x,p__15310){
var map__15311__15312 = p__15310;
var map__15311__15313 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15311__15312))?cljs.core.apply.call(null,cljs.core.hash_map,map__15311__15312):map__15311__15312);
var validator__15314 = cljs.core.get.call(null,map__15311__15313,"﷐'validator");
var meta__15315 = cljs.core.get.call(null,map__15311__15313,"﷐'meta");

return (new cljs.core.Atom(x,meta__15315,validator__15314,null));
};
var G__15325 = function (x,var_args){
var p__15310 = null;
if (goog.isDef(var_args)) {
  p__15310 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15325__delegate.call(this, x, p__15310);
};
G__15325.cljs$lang$maxFixedArity = 1;
G__15325.cljs$lang$applyTo = (function (arglist__15328){
var x = cljs.core.first(arglist__15328);
var p__15310 = cljs.core.rest(arglist__15328);
return G__15325__delegate.call(this, x, p__15310);
});
return G__15325;
})()
;
atom = function(x,var_args){
var p__15310 = var_args;
switch(arguments.length){
case  1 :
return atom__15320.call(this,x);
default:
return atom__15321.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__15321.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____15331 = a.validator;

if(cljs.core.truth_(temp__3698__auto____15331))
{var validate__15332 = temp__3698__auto____15331;

if(cljs.core.truth_(validate__15332.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__15334 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__15334,new_value);
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
var swap_BANG___15348 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___15349 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___15350 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___15351 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___15352 = (function() { 
var G__15359__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__15359 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__15359__delegate.call(this, a, f, x, y, z, more);
};
G__15359.cljs$lang$maxFixedArity = 5;
G__15359.cljs$lang$applyTo = (function (arglist__15361){
var a = cljs.core.first(arglist__15361);
var f = cljs.core.first(cljs.core.next(arglist__15361));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15361)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15361))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15361)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15361)))));
return G__15359__delegate.call(this, a, f, x, y, z, more);
});
return G__15359;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___15348.call(this,a,f);
case  3 :
return swap_BANG___15349.call(this,a,f,x);
case  4 :
return swap_BANG___15350.call(this,a,f,x,y);
case  5 :
return swap_BANG___15351.call(this,a,f,x,y,z);
default:
return swap_BANG___15352.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___15352.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15437){
var iref = cljs.core.first(arglist__15437);
var f = cljs.core.first(cljs.core.next(arglist__15437));
var args = cljs.core.rest(cljs.core.next(arglist__15437));
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
var gensym__15438 = (function (){
return gensym.call(null,"G__");
});
var gensym__15439 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__15438.call(this);
case  1 :
return gensym__15439.call(this,prefix_string);
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
var this__15441 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__15441.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15442 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__15442.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__15442.state,this__15442.f);
}
return cljs.core.deref.call(null,this__15442.state);
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
delay.cljs$lang$applyTo = (function (arglist__15443){
var body = cljs.core.seq( arglist__15443 );;
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
var map__15475__15476 = options;
var map__15475__15478 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15475__15476))?cljs.core.apply.call(null,cljs.core.hash_map,map__15475__15476):map__15475__15476);
var keywordize_keys__15479 = cljs.core.get.call(null,map__15475__15478,"﷐'keywordize-keys");
var keyfn__15489 = (cljs.core.truth_(keywordize_keys__15479)?cljs.core.keyword:cljs.core.str);
var f__15497 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15495 = (function iter__15491(s__15492){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15492__15493 = s__15492;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15492__15493)))
{var k__15494 = cljs.core.first.call(null,s__15492__15493);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15489.call(null,k__15494),thisfn.call(null,(x[k__15494]))]),iter__15491.call(null,cljs.core.rest.call(null,s__15492__15493)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15495.call(null,cljs.core.js_keys.call(null,x));
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

return f__15497.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15511){
var x = cljs.core.first(arglist__15511);
var options = cljs.core.rest(arglist__15511);
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
var mem__15513 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15519__delegate = function (args){
var temp__3695__auto____15514 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15513),args);

if(cljs.core.truth_(temp__3695__auto____15514))
{var v__15515 = temp__3695__auto____15514;

return v__15515;
} else
{var ret__15516 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15513,cljs.core.assoc,args,ret__15516);
return ret__15516;
}
};
var G__15519 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15519__delegate.call(this, args);
};
G__15519.cljs$lang$maxFixedArity = 0;
G__15519.cljs$lang$applyTo = (function (arglist__15521){
var args = cljs.core.seq( arglist__15521 );;
return G__15519__delegate.call(this, args);
});
return G__15519;
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
var trampoline__15526 = (function (f){
while(true){
var ret__15525 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15525)))
{{
var G__15529 = ret__15525;
f = G__15529;
continue;
}
} else
{return ret__15525;
}
break;
}
});
var trampoline__15527 = (function() { 
var G__15531__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15531 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15531__delegate.call(this, f, args);
};
G__15531.cljs$lang$maxFixedArity = 1;
G__15531.cljs$lang$applyTo = (function (arglist__15535){
var f = cljs.core.first(arglist__15535);
var args = cljs.core.rest(arglist__15535);
return G__15531__delegate.call(this, f, args);
});
return G__15531;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15526.call(this,f);
default:
return trampoline__15527.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15527.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15537 = (function (){
return rand.call(null,1);
});
var rand__15538 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15537.call(this);
case  1 :
return rand__15538.call(this,n);
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
var k__15549 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15549,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15549,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15567 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15568 = (function (h,child,parent){
var or__3548__auto____15555 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15555))
{return or__3548__auto____15555;
} else
{var or__3548__auto____15556 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15556))
{return or__3548__auto____15556;
} else
{var and__3546__auto____15557 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15557))
{var and__3546__auto____15558 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15558))
{var and__3546__auto____15559 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15559))
{var ret__15560 = true;
var i__15561 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15564 = cljs.core.not.call(null,ret__15560);

if(cljs.core.truth_(or__3548__auto____15564))
{return or__3548__auto____15564;
} else
{return cljs.core._EQ_.call(null,i__15561,cljs.core.count.call(null,parent));
}
})()))
{return ret__15560;
} else
{{
var G__15577 = isa_QMARK_.call(null,h,child.call(null,i__15561),parent.call(null,i__15561));
var G__15578 = (i__15561 + 1);
ret__15560 = G__15577;
i__15561 = G__15578;
continue;
}
}
break;
}
} else
{return and__3546__auto____15559;
}
} else
{return and__3546__auto____15558;
}
} else
{return and__3546__auto____15557;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15567.call(this,h,child);
case  3 :
return isa_QMARK___15568.call(this,h,child,parent);
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
var parents__15580 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15581 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15580.call(this,h);
case  2 :
return parents__15581.call(this,h,tag);
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
var ancestors__15584 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15585 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15584.call(this,h);
case  2 :
return ancestors__15585.call(this,h,tag);
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
var descendants__15594 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15595 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15594.call(this,h);
case  2 :
return descendants__15595.call(this,h,tag);
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
var derive__15696 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15697 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15681 = "﷐'parents".call(null,h);
var td__15682 = "﷐'descendants".call(null,h);
var ta__15683 = "﷐'ancestors".call(null,h);
var tf__15685 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15694 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15681.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15683.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15683.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15681,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15685.call(null,"﷐'ancestors".call(null,h),tag,td__15682,parent,ta__15683),"﷐'descendants":tf__15685.call(null,"﷐'descendants".call(null,h),parent,ta__15683,tag,td__15682)});
})());

if(cljs.core.truth_(or__3548__auto____15694))
{return or__3548__auto____15694;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15696.call(this,h,tag);
case  3 :
return derive__15697.call(this,h,tag,parent);
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
var underive__15754 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15755 = (function (h,tag,parent){
var parentMap__15742 = "﷐'parents".call(null,h);
var childsParents__15743 = (cljs.core.truth_(parentMap__15742.call(null,tag))?cljs.core.disj.call(null,parentMap__15742.call(null,tag),parent):cljs.core.set([]));
var newParents__15744 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15743))?cljs.core.assoc.call(null,parentMap__15742,tag,childsParents__15743):cljs.core.dissoc.call(null,parentMap__15742,tag));
var deriv_seq__15747 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15599_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15599_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15599_SHARP_),cljs.core.second.call(null,p1__15599_SHARP_)));
}),cljs.core.seq.call(null,newParents__15744)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15742.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15609_SHARP_,p2__15610_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15609_SHARP_,p2__15610_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15747));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15754.call(this,h,tag);
case  3 :
return underive__15755.call(this,h,tag,parent);
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
var xprefs__15758 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15761 = (cljs.core.truth_((function (){var and__3546__auto____15759 = xprefs__15758;

if(cljs.core.truth_(and__3546__auto____15759))
{return xprefs__15758.call(null,y);
} else
{return and__3546__auto____15759;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15761))
{return or__3548__auto____15761;
} else
{var or__3548__auto____15764 = (function (){var ps__15762 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15762) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15762),prefer_table)))
{} else
{}
{
var G__15768 = cljs.core.rest.call(null,ps__15762);
ps__15762 = G__15768;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15764))
{return or__3548__auto____15764;
} else
{var or__3548__auto____15767 = (function (){var ps__15766 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15766) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15766),y,prefer_table)))
{} else
{}
{
var G__15769 = cljs.core.rest.call(null,ps__15766);
ps__15766 = G__15769;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15767))
{return or__3548__auto____15767;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15770 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15770))
{return or__3548__auto____15770;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15795 = cljs.core.reduce.call(null,(function (be,p__15771){
var vec__15772__15773 = p__15771;
var k__15774 = cljs.core.nth.call(null,vec__15772__15773,0,null);
var ___15775 = cljs.core.nth.call(null,vec__15772__15773,1,null);
var e__15776 = vec__15772__15773;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15774)))
{var be2__15778 = (cljs.core.truth_((function (){var or__3548__auto____15777 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15777))
{return or__3548__auto____15777;
} else
{return cljs.core.dominates.call(null,k__15774,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15776:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15778),k__15774,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15774," and ",cljs.core.first.call(null,be2__15778),", and neither is preferred")));
}
return be2__15778;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15795))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15795));
return cljs.core.second.call(null,best_entry__15795);
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
if(cljs.core.truth_((function (){var and__3546__auto____15799 = mf;

if(cljs.core.truth_(and__3546__auto____15799))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15799;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15842 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15842))
{return or__3548__auto____15842;
} else
{var or__3548__auto____15848 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15848))
{return or__3548__auto____15848;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15855 = mf;

if(cljs.core.truth_(and__3546__auto____15855))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15855;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15857 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15857))
{return or__3548__auto____15857;
} else
{var or__3548__auto____15859 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15859))
{return or__3548__auto____15859;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15864 = mf;

if(cljs.core.truth_(and__3546__auto____15864))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15864;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15865 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15865))
{return or__3548__auto____15865;
} else
{var or__3548__auto____15866 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15866))
{return or__3548__auto____15866;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15869 = mf;

if(cljs.core.truth_(and__3546__auto____15869))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15869;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15872 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15872))
{return or__3548__auto____15872;
} else
{var or__3548__auto____15875 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15875))
{return or__3548__auto____15875;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15921 = mf;

if(cljs.core.truth_(and__3546__auto____15921))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15921;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15924 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15924))
{return or__3548__auto____15924;
} else
{var or__3548__auto____15925 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15925))
{return or__3548__auto____15925;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15926 = mf;

if(cljs.core.truth_(and__3546__auto____15926))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15926;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15928 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15928))
{return or__3548__auto____15928;
} else
{var or__3548__auto____15930 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15930))
{return or__3548__auto____15930;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15935 = mf;

if(cljs.core.truth_(and__3546__auto____15935))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15935;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15937 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15937))
{return or__3548__auto____15937;
} else
{var or__3548__auto____15939 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15939))
{return or__3548__auto____15939;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15940 = mf;

if(cljs.core.truth_(and__3546__auto____15940))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15940;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15941 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15941))
{return or__3548__auto____15941;
} else
{var or__3548__auto____15942 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15942))
{return or__3548__auto____15942;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__16032 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__16033 = cljs.core._get_method.call(null,mf,dispatch_val__16032);

if(cljs.core.truth_(target_fn__16033))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__16032)));
}
return cljs.core.apply.call(null,target_fn__16033,args);
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
var this__16035 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__16036 = this;
cljs.core.swap_BANG_.call(null,this__16036.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__16036.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__16036.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__16036.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__16037 = this;
cljs.core.swap_BANG_.call(null,this__16037.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__16037.method_cache,this__16037.method_table,this__16037.cached_hierarchy,this__16037.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__16038 = this;
cljs.core.swap_BANG_.call(null,this__16038.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__16038.method_cache,this__16038.method_table,this__16038.cached_hierarchy,this__16038.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__16041 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__16041.cached_hierarchy),cljs.core.deref.call(null,this__16041.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__16041.method_cache,this__16041.method_table,this__16041.cached_hierarchy,this__16041.hierarchy);
}
var temp__3695__auto____16042 = cljs.core.deref.call(null,this__16041.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____16042))
{var target_fn__16043 = temp__3695__auto____16042;

return target_fn__16043;
} else
{var temp__3695__auto____16044 = cljs.core.find_and_cache_best_method.call(null,this__16041.name,dispatch_val,this__16041.hierarchy,this__16041.method_table,this__16041.prefer_table,this__16041.method_cache,this__16041.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____16044))
{var target_fn__16045 = temp__3695__auto____16044;

return target_fn__16045;
} else
{return cljs.core.deref.call(null,this__16041.method_table).call(null,this__16041.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__16046 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__16046.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__16046.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__16046.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__16046.method_cache,this__16046.method_table,this__16046.cached_hierarchy,this__16046.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__16049 = this;
return cljs.core.deref.call(null,this__16049.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__16050 = this;
return cljs.core.deref.call(null,this__16050.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__16051 = this;
return cljs.core.do_dispatch.call(null,mf,this__16051.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__16071__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__16071 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16071__delegate.call(this, _, args);
};
G__16071.cljs$lang$maxFixedArity = 1;
G__16071.cljs$lang$applyTo = (function (arglist__16072){
var _ = cljs.core.first(arglist__16072);
var args = cljs.core.rest(arglist__16072);
return G__16071__delegate.call(this, _, args);
});
return G__16071;
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
