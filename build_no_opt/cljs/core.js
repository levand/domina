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
var or__3548__auto____7343 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7343))
{return or__3548__auto____7343;
} else
{var or__3548__auto____7351 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7351))
{return or__3548__auto____7351;
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
var _invoke__7662 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7424 = this$;

if(cljs.core.truth_(and__3546__auto____7424))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7424;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7426 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7426))
{return or__3548__auto____7426;
} else
{var or__3548__auto____7429 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7429))
{return or__3548__auto____7429;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7663 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7432 = this$;

if(cljs.core.truth_(and__3546__auto____7432))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7432;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7436 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7436))
{return or__3548__auto____7436;
} else
{var or__3548__auto____7439 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7439))
{return or__3548__auto____7439;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7664 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7444 = this$;

if(cljs.core.truth_(and__3546__auto____7444))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7444;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7449 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7449))
{return or__3548__auto____7449;
} else
{var or__3548__auto____7451 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7451))
{return or__3548__auto____7451;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7665 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7456 = this$;

if(cljs.core.truth_(and__3546__auto____7456))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7456;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7460 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7460))
{return or__3548__auto____7460;
} else
{var or__3548__auto____7463 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7463))
{return or__3548__auto____7463;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7666 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7467 = this$;

if(cljs.core.truth_(and__3546__auto____7467))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7467;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
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
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7667 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7478 = this$;

if(cljs.core.truth_(and__3546__auto____7478))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7478;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7483 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7483))
{return or__3548__auto____7483;
} else
{var or__3548__auto____7485 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7485))
{return or__3548__auto____7485;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7668 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7490 = this$;

if(cljs.core.truth_(and__3546__auto____7490))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7490;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7495 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7495))
{return or__3548__auto____7495;
} else
{var or__3548__auto____7497 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7497))
{return or__3548__auto____7497;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7669 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7501 = this$;

if(cljs.core.truth_(and__3546__auto____7501))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7501;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7505 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7505))
{return or__3548__auto____7505;
} else
{var or__3548__auto____7508 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7508))
{return or__3548__auto____7508;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7670 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7513 = this$;

if(cljs.core.truth_(and__3546__auto____7513))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7513;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7671 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7524 = this$;

if(cljs.core.truth_(and__3546__auto____7524))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7524;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7528 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7528))
{return or__3548__auto____7528;
} else
{var or__3548__auto____7530 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7530))
{return or__3548__auto____7530;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7672 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7536 = this$;

if(cljs.core.truth_(and__3546__auto____7536))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7536;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7673 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7545 = this$;

if(cljs.core.truth_(and__3546__auto____7545))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7545;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7548 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7548))
{return or__3548__auto____7548;
} else
{var or__3548__auto____7549 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7549))
{return or__3548__auto____7549;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7675 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7564 = this$;

if(cljs.core.truth_(and__3546__auto____7564))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7564;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7581 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7581))
{return or__3548__auto____7581;
} else
{var or__3548__auto____7583 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7583))
{return or__3548__auto____7583;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7676 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7586 = this$;

if(cljs.core.truth_(and__3546__auto____7586))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7586;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7590 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7590))
{return or__3548__auto____7590;
} else
{var or__3548__auto____7592 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7592))
{return or__3548__auto____7592;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7677 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7595 = this$;

if(cljs.core.truth_(and__3546__auto____7595))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7595;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7599 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7599))
{return or__3548__auto____7599;
} else
{var or__3548__auto____7612 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7612))
{return or__3548__auto____7612;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7678 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7615 = this$;

if(cljs.core.truth_(and__3546__auto____7615))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7615;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7616 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7616))
{return or__3548__auto____7616;
} else
{var or__3548__auto____7618 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7618))
{return or__3548__auto____7618;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7679 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7621 = this$;

if(cljs.core.truth_(and__3546__auto____7621))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7621;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7623 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7623))
{return or__3548__auto____7623;
} else
{var or__3548__auto____7624 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7624))
{return or__3548__auto____7624;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7680 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7629 = this$;

if(cljs.core.truth_(and__3546__auto____7629))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7629;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7632 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7632))
{return or__3548__auto____7632;
} else
{var or__3548__auto____7635 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7635))
{return or__3548__auto____7635;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7681 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7638 = this$;

if(cljs.core.truth_(and__3546__auto____7638))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7638;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7641 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7641))
{return or__3548__auto____7641;
} else
{var or__3548__auto____7644 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7644))
{return or__3548__auto____7644;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7682 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7649 = this$;

if(cljs.core.truth_(and__3546__auto____7649))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7649;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7651 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7651))
{return or__3548__auto____7651;
} else
{var or__3548__auto____7653 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7653))
{return or__3548__auto____7653;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7683 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7655 = this$;

if(cljs.core.truth_(and__3546__auto____7655))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7655;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__7662.call(this,this$);
case  2 :
return _invoke__7663.call(this,this$,a);
case  3 :
return _invoke__7664.call(this,this$,a,b);
case  4 :
return _invoke__7665.call(this,this$,a,b,c);
case  5 :
return _invoke__7666.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7667.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7668.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7669.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7670.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7671.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7672.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7673.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7675.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7676.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7677.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7678.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7679.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7680.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7681.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7682.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7683.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7781 = coll;

if(cljs.core.truth_(and__3546__auto____7781))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7781;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7783 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7783))
{return or__3548__auto____7783;
} else
{var or__3548__auto____7785 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7785))
{return or__3548__auto____7785;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7788 = coll;

if(cljs.core.truth_(and__3546__auto____7788))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7788;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7789 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7789))
{return or__3548__auto____7789;
} else
{var or__3548__auto____7790 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7790))
{return or__3548__auto____7790;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7793 = coll;

if(cljs.core.truth_(and__3546__auto____7793))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7793;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7795 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7795))
{return or__3548__auto____7795;
} else
{var or__3548__auto____7796 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7796))
{return or__3548__auto____7796;
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
var _nth__7807 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7800 = coll;

if(cljs.core.truth_(and__3546__auto____7800))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7800;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7801 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7801))
{return or__3548__auto____7801;
} else
{var or__3548__auto____7802 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7802))
{return or__3548__auto____7802;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7808 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7803 = coll;

if(cljs.core.truth_(and__3546__auto____7803))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7803;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7804 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{var or__3548__auto____7805 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7805))
{return or__3548__auto____7805;
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
return _nth__7807.call(this,coll,n);
case  3 :
return _nth__7808.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7818 = coll;

if(cljs.core.truth_(and__3546__auto____7818))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7818;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7820 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7820))
{return or__3548__auto____7820;
} else
{var or__3548__auto____7830 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7830))
{return or__3548__auto____7830;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7835 = coll;

if(cljs.core.truth_(and__3546__auto____7835))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7835;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7836 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7836))
{return or__3548__auto____7836;
} else
{var or__3548__auto____7839 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7839))
{return or__3548__auto____7839;
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
var _lookup__7888 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7875 = o;

if(cljs.core.truth_(and__3546__auto____7875))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7875;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7878 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7878))
{return or__3548__auto____7878;
} else
{var or__3548__auto____7880 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7880))
{return or__3548__auto____7880;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7890 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7883 = o;

if(cljs.core.truth_(and__3546__auto____7883))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7883;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7884 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7884))
{return or__3548__auto____7884;
} else
{var or__3548__auto____7886 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7886))
{return or__3548__auto____7886;
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
return _lookup__7888.call(this,o,k);
case  3 :
return _lookup__7890.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7915 = coll;

if(cljs.core.truth_(and__3546__auto____7915))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7915;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7924 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7924))
{return or__3548__auto____7924;
} else
{var or__3548__auto____7926 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7926))
{return or__3548__auto____7926;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7928 = coll;

if(cljs.core.truth_(and__3546__auto____7928))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7928;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7931 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7931))
{return or__3548__auto____7931;
} else
{var or__3548__auto____7932 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7932))
{return or__3548__auto____7932;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7948 = coll;

if(cljs.core.truth_(and__3546__auto____7948))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7948;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7955 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7955))
{return or__3548__auto____7955;
} else
{var or__3548__auto____7959 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7959))
{return or__3548__auto____7959;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7963 = coll;

if(cljs.core.truth_(and__3546__auto____7963))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7963;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7965 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7965))
{return or__3548__auto____7965;
} else
{var or__3548__auto____7967 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7967))
{return or__3548__auto____7967;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7977 = coll;

if(cljs.core.truth_(and__3546__auto____7977))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7977;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7978 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7978))
{return or__3548__auto____7978;
} else
{var or__3548__auto____7979 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7979))
{return or__3548__auto____7979;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7985 = coll;

if(cljs.core.truth_(and__3546__auto____7985))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7985;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7987 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7987))
{return or__3548__auto____7987;
} else
{var or__3548__auto____7988 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7988))
{return or__3548__auto____7988;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7992 = coll;

if(cljs.core.truth_(and__3546__auto____7992))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7992;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7994 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7994))
{return or__3548__auto____7994;
} else
{var or__3548__auto____7995 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7995))
{return or__3548__auto____7995;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7996 = o;

if(cljs.core.truth_(and__3546__auto____7996))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7996;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7999 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7999))
{return or__3548__auto____7999;
} else
{var or__3548__auto____8001 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8001))
{return or__3548__auto____8001;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8004 = o;

if(cljs.core.truth_(and__3546__auto____8004))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8004;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8007 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8007))
{return or__3548__auto____8007;
} else
{var or__3548__auto____8009 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8009))
{return or__3548__auto____8009;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8011 = o;

if(cljs.core.truth_(and__3546__auto____8011))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8011;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8015 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8015))
{return or__3548__auto____8015;
} else
{var or__3548__auto____8017 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8017))
{return or__3548__auto____8017;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8025 = o;

if(cljs.core.truth_(and__3546__auto____8025))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8025;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8027 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8027))
{return or__3548__auto____8027;
} else
{var or__3548__auto____8029 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8029))
{return or__3548__auto____8029;
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
var _reduce__8056 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8042 = coll;

if(cljs.core.truth_(and__3546__auto____8042))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8042;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8043 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8043))
{return or__3548__auto____8043;
} else
{var or__3548__auto____8044 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8044))
{return or__3548__auto____8044;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8057 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8046 = coll;

if(cljs.core.truth_(and__3546__auto____8046))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8046;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8049 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{var or__3548__auto____8052 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8052))
{return or__3548__auto____8052;
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
return _reduce__8056.call(this,coll,f);
case  3 :
return _reduce__8057.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8063 = o;

if(cljs.core.truth_(and__3546__auto____8063))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8063;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8065 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8065))
{return or__3548__auto____8065;
} else
{var or__3548__auto____8068 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8068))
{return or__3548__auto____8068;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8071 = o;

if(cljs.core.truth_(and__3546__auto____8071))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8071;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8073 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
} else
{var or__3548__auto____8076 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8076))
{return or__3548__auto____8076;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8086 = o;

if(cljs.core.truth_(and__3546__auto____8086))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8086;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8087 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
} else
{var or__3548__auto____8089 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8089))
{return or__3548__auto____8089;
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
if(cljs.core.truth_((function (){var and__3546__auto____8100 = o;

if(cljs.core.truth_(and__3546__auto____8100))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8100;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8107 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8107))
{return or__3548__auto____8107;
} else
{var or__3548__auto____8129 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8129))
{return or__3548__auto____8129;
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
{return (function (){var or__3548__auto____8140 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8140))
{return or__3548__auto____8140;
} else
{var or__3548__auto____8142 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8142))
{return or__3548__auto____8142;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8161 = this$;

if(cljs.core.truth_(and__3546__auto____8161))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8161;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8162 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8162))
{return or__3548__auto____8162;
} else
{var or__3548__auto____8163 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8163))
{return or__3548__auto____8163;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8165 = this$;

if(cljs.core.truth_(and__3546__auto____8165))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8165;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8170 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8170))
{return or__3548__auto____8170;
} else
{var or__3548__auto____8172 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8172))
{return or__3548__auto____8172;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8176 = this$;

if(cljs.core.truth_(and__3546__auto____8176))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8176;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8177 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8177))
{return or__3548__auto____8177;
} else
{var or__3548__auto____8178 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8178))
{return or__3548__auto____8178;
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
var G__8237 = null;
var G__8237__8238 = (function (o,k){
return null;
});
var G__8237__8239 = (function (o,k,not_found){
return not_found;
});
G__8237 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8237__8238.call(this,o,k);
case  3 :
return G__8237__8239.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8237;
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
var G__8241__8242 = (function (_,f){
return f.call(null);
});
var G__8241__8243 = (function (_,f,start){
return start;
});
G__8241 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8241__8242.call(this,_,f);
case  3 :
return G__8241__8243.call(this,_,f,start);
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
var G__8247 = null;
var G__8247__8248 = (function (_,n){
return null;
});
var G__8247__8249 = (function (_,n,not_found){
return not_found;
});
G__8247 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8247__8248.call(this,_,n);
case  3 :
return G__8247__8249.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8247;
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
var ci_reduce__8460 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8408 = cljs.core._nth.call(null,cicoll,0);
var n__8409 = 1;

while(true){
if(cljs.core.truth_((n__8409 < cljs.core._count.call(null,cicoll))))
{{
var G__8466 = f.call(null,val__8408,cljs.core._nth.call(null,cicoll,n__8409));
var G__8467 = (n__8409 + 1);
val__8408 = G__8466;
n__8409 = G__8467;
continue;
}
} else
{return val__8408;
}
break;
}
}
});
var ci_reduce__8461 = (function (cicoll,f,val){
var val__8414 = val;
var n__8415 = 0;

while(true){
if(cljs.core.truth_((n__8415 < cljs.core._count.call(null,cicoll))))
{{
var G__8474 = f.call(null,val__8414,cljs.core._nth.call(null,cicoll,n__8415));
var G__8475 = (n__8415 + 1);
val__8414 = G__8474;
n__8415 = G__8475;
continue;
}
} else
{return val__8414;
}
break;
}
});
var ci_reduce__8462 = (function (cicoll,f,val,idx){
var val__8416 = val;
var n__8417 = idx;

while(true){
if(cljs.core.truth_((n__8417 < cljs.core._count.call(null,cicoll))))
{{
var G__8476 = f.call(null,val__8416,cljs.core._nth.call(null,cicoll,n__8417));
var G__8477 = (n__8417 + 1);
val__8416 = G__8476;
n__8417 = G__8477;
continue;
}
} else
{return val__8416;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8460.call(this,cicoll,f);
case  3 :
return ci_reduce__8461.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8462.call(this,cicoll,f,val,idx);
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
var this__8487 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8505 = null;
var G__8505__8506 = (function (_,f){
var this__8488 = this;
return cljs.core.ci_reduce.call(null,this__8488.a,f,(this__8488.a[this__8488.i]),(this__8488.i + 1));
});
var G__8505__8507 = (function (_,f,start){
var this__8489 = this;
return cljs.core.ci_reduce.call(null,this__8489.a,f,start,this__8489.i);
});
G__8505 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8505__8506.call(this,_,f);
case  3 :
return G__8505__8507.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8505;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8490 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8491 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8512 = null;
var G__8512__8513 = (function (coll,n){
var this__8492 = this;
var i__8493 = (n + this__8492.i);

if(cljs.core.truth_((i__8493 < this__8492.a.length)))
{return (this__8492.a[i__8493]);
} else
{return null;
}
});
var G__8512__8514 = (function (coll,n,not_found){
var this__8494 = this;
var i__8496 = (n + this__8494.i);

if(cljs.core.truth_((i__8496 < this__8494.a.length)))
{return (this__8494.a[i__8496]);
} else
{return not_found;
}
});
G__8512 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8512__8513.call(this,coll,n);
case  3 :
return G__8512__8514.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8512;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8497 = this;
return (this__8497.a.length - this__8497.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8500 = this;
return (this__8500.a[this__8500.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8501 = this;
if(cljs.core.truth_(((this__8501.i + 1) < this__8501.a.length)))
{return (new cljs.core.IndexedSeq(this__8501.a,(this__8501.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8504 = this;
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
var G__8549 = null;
var G__8549__8550 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8549__8551 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8549 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8549__8550.call(this,array,f);
case  3 :
return G__8549__8551.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8549;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8561 = null;
var G__8561__8562 = (function (array,k){
return (array[k]);
});
var G__8561__8563 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8561 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8561__8562.call(this,array,k);
case  3 :
return G__8561__8563.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8561;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8591 = null;
var G__8591__8592 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8591__8593 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8591 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8591__8592.call(this,array,n);
case  3 :
return G__8591__8593.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8591;
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
var temp__3698__auto____8619 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8619))
{var s__8620 = temp__3698__auto____8619;

return cljs.core._first.call(null,s__8620);
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
var G__8708 = cljs.core.next.call(null,s);
s = G__8708;
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
var s__8716 = cljs.core.seq.call(null,x);
var n__8717 = 0;

while(true){
if(cljs.core.truth_(s__8716))
{{
var G__8719 = cljs.core.next.call(null,s__8716);
var G__8720 = (n__8717 + 1);
s__8716 = G__8719;
n__8717 = G__8720;
continue;
}
} else
{return n__8717;
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
var conj__8724 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8725 = (function() { 
var G__8727__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8728 = conj.call(null,coll,x);
var G__8729 = cljs.core.first.call(null,xs);
var G__8730 = cljs.core.next.call(null,xs);
coll = G__8728;
x = G__8729;
xs = G__8730;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8727 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8727__delegate.call(this, coll, x, xs);
};
G__8727.cljs$lang$maxFixedArity = 2;
G__8727.cljs$lang$applyTo = (function (arglist__8733){
var coll = cljs.core.first(arglist__8733);
var x = cljs.core.first(cljs.core.next(arglist__8733));
var xs = cljs.core.rest(cljs.core.next(arglist__8733));
return G__8727__delegate.call(this, coll, x, xs);
});
return G__8727;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8724.call(this,coll,x);
default:
return conj__8725.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8725.cljs$lang$applyTo;
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
var nth__8741 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8742 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8741.call(this,coll,n);
case  3 :
return nth__8742.call(this,coll,n,not_found);
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
var get__8749 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8750 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8749.call(this,o,k);
case  3 :
return get__8750.call(this,o,k,not_found);
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
var assoc__8763 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8764 = (function() { 
var G__8769__delegate = function (coll,k,v,kvs){
while(true){
var ret__8755 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8770 = ret__8755;
var G__8771 = cljs.core.first.call(null,kvs);
var G__8772 = cljs.core.second.call(null,kvs);
var G__8773 = cljs.core.nnext.call(null,kvs);
coll = G__8770;
k = G__8771;
v = G__8772;
kvs = G__8773;
continue;
}
} else
{return ret__8755;
}
break;
}
};
var G__8769 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8769__delegate.call(this, coll, k, v, kvs);
};
G__8769.cljs$lang$maxFixedArity = 3;
G__8769.cljs$lang$applyTo = (function (arglist__8774){
var coll = cljs.core.first(arglist__8774);
var k = cljs.core.first(cljs.core.next(arglist__8774));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8774)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8774)));
return G__8769__delegate.call(this, coll, k, v, kvs);
});
return G__8769;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8763.call(this,coll,k,v);
default:
return assoc__8764.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8764.cljs$lang$applyTo;
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
var dissoc__8782 = (function (coll){
return coll;
});
var dissoc__8783 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8784 = (function() { 
var G__8789__delegate = function (coll,k,ks){
while(true){
var ret__8781 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8791 = ret__8781;
var G__8792 = cljs.core.first.call(null,ks);
var G__8793 = cljs.core.next.call(null,ks);
coll = G__8791;
k = G__8792;
ks = G__8793;
continue;
}
} else
{return ret__8781;
}
break;
}
};
var G__8789 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8789__delegate.call(this, coll, k, ks);
};
G__8789.cljs$lang$maxFixedArity = 2;
G__8789.cljs$lang$applyTo = (function (arglist__8796){
var coll = cljs.core.first(arglist__8796);
var k = cljs.core.first(cljs.core.next(arglist__8796));
var ks = cljs.core.rest(cljs.core.next(arglist__8796));
return G__8789__delegate.call(this, coll, k, ks);
});
return G__8789;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8782.call(this,coll);
case  2 :
return dissoc__8783.call(this,coll,k);
default:
return dissoc__8784.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8784.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8801 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8802 = x__445__auto____8801;

if(cljs.core.truth_(and__3546__auto____8802))
{var and__3546__auto____8806 = x__445__auto____8801.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8806))
{return cljs.core.not.call(null,x__445__auto____8801.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8806;
}
} else
{return and__3546__auto____8802;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8801);
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
var disj__8827 = (function (coll){
return coll;
});
var disj__8828 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8829 = (function() { 
var G__8832__delegate = function (coll,k,ks){
while(true){
var ret__8822 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8833 = ret__8822;
var G__8834 = cljs.core.first.call(null,ks);
var G__8835 = cljs.core.next.call(null,ks);
coll = G__8833;
k = G__8834;
ks = G__8835;
continue;
}
} else
{return ret__8822;
}
break;
}
};
var G__8832 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8832__delegate.call(this, coll, k, ks);
};
G__8832.cljs$lang$maxFixedArity = 2;
G__8832.cljs$lang$applyTo = (function (arglist__8836){
var coll = cljs.core.first(arglist__8836);
var k = cljs.core.first(cljs.core.next(arglist__8836));
var ks = cljs.core.rest(cljs.core.next(arglist__8836));
return G__8832__delegate.call(this, coll, k, ks);
});
return G__8832;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8827.call(this,coll);
case  2 :
return disj__8828.call(this,coll,k);
default:
return disj__8829.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8829.cljs$lang$applyTo;
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
{var x__445__auto____8843 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8844 = x__445__auto____8843;

if(cljs.core.truth_(and__3546__auto____8844))
{var and__3546__auto____8845 = x__445__auto____8843.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8845))
{return cljs.core.not.call(null,x__445__auto____8843.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8845;
}
} else
{return and__3546__auto____8844;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8843);
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
{var x__445__auto____8847 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8849 = x__445__auto____8847;

if(cljs.core.truth_(and__3546__auto____8849))
{var and__3546__auto____8850 = x__445__auto____8847.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8850))
{return cljs.core.not.call(null,x__445__auto____8847.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8850;
}
} else
{return and__3546__auto____8849;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8847);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8854 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8855 = x__445__auto____8854;

if(cljs.core.truth_(and__3546__auto____8855))
{var and__3546__auto____8856 = x__445__auto____8854.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8856))
{return cljs.core.not.call(null,x__445__auto____8854.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8856;
}
} else
{return and__3546__auto____8855;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8854);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8860 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8861 = x__445__auto____8860;

if(cljs.core.truth_(and__3546__auto____8861))
{var and__3546__auto____8862 = x__445__auto____8860.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8862))
{return cljs.core.not.call(null,x__445__auto____8860.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8862;
}
} else
{return and__3546__auto____8861;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8860);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8872 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8873 = x__445__auto____8872;

if(cljs.core.truth_(and__3546__auto____8873))
{var and__3546__auto____8875 = x__445__auto____8872.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8875))
{return cljs.core.not.call(null,x__445__auto____8872.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8875;
}
} else
{return and__3546__auto____8873;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8872);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8940 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8941 = x__445__auto____8940;

if(cljs.core.truth_(and__3546__auto____8941))
{var and__3546__auto____8943 = x__445__auto____8940.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8943))
{return cljs.core.not.call(null,x__445__auto____8940.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8943;
}
} else
{return and__3546__auto____8941;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8940);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8957 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8958 = x__445__auto____8957;

if(cljs.core.truth_(and__3546__auto____8958))
{var and__3546__auto____8960 = x__445__auto____8957.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8960))
{return cljs.core.not.call(null,x__445__auto____8957.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8960;
}
} else
{return and__3546__auto____8958;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8957);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8967 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8967.push(key);
}));
return keys__8967;
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
{var x__445__auto____8985 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8986 = x__445__auto____8985;

if(cljs.core.truth_(and__3546__auto____8986))
{var and__3546__auto____8987 = x__445__auto____8985.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8987))
{return cljs.core.not.call(null,x__445__auto____8985.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8987;
}
} else
{return and__3546__auto____8986;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8985);
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
var and__3546__auto____8994 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8994))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8996 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8996))
{return or__3548__auto____8996;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8994;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8998 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8998))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8998;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____9005 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9005))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____9005;
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
var and__3546__auto____9025 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____9025))
{return (n == n.toFixed());
} else
{return and__3546__auto____9025;
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
if(cljs.core.truth_((function (){var and__3546__auto____9030 = coll;

if(cljs.core.truth_(and__3546__auto____9030))
{var and__3546__auto____9031 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9031))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9031;
}
} else
{return and__3546__auto____9030;
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
var distinct_QMARK___9048 = (function (x){
return true;
});
var distinct_QMARK___9049 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9050 = (function() { 
var G__9052__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9037 = cljs.core.set([y,x]);
var xs__9038 = more;

while(true){
var x__9039 = cljs.core.first.call(null,xs__9038);
var etc__9040 = cljs.core.next.call(null,xs__9038);

if(cljs.core.truth_(xs__9038))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9037,x__9039)))
{return false;
} else
{{
var G__9058 = cljs.core.conj.call(null,s__9037,x__9039);
var G__9059 = etc__9040;
s__9037 = G__9058;
xs__9038 = G__9059;
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
var G__9052 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9052__delegate.call(this, x, y, more);
};
G__9052.cljs$lang$maxFixedArity = 2;
G__9052.cljs$lang$applyTo = (function (arglist__9065){
var x = cljs.core.first(arglist__9065);
var y = cljs.core.first(cljs.core.next(arglist__9065));
var more = cljs.core.rest(cljs.core.next(arglist__9065));
return G__9052__delegate.call(this, x, y, more);
});
return G__9052;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9048.call(this,x);
case  2 :
return distinct_QMARK___9049.call(this,x,y);
default:
return distinct_QMARK___9050.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9050.cljs$lang$applyTo;
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
var r__9075 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9075)))
{return r__9075;
} else
{if(cljs.core.truth_(r__9075))
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
var sort__9083 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9084 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9080 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9080,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9080);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9083.call(this,comp);
case  2 :
return sort__9084.call(this,comp,coll);
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
var sort_by__9093 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9094 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9093.call(this,keyfn,comp);
case  3 :
return sort_by__9094.call(this,keyfn,comp,coll);
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
var reduce__9099 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9100 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9099.call(this,f,val);
case  3 :
return reduce__9100.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9213 = (function (f,coll){
var temp__3695__auto____9104 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9104))
{var s__9210 = temp__3695__auto____9104;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9210),cljs.core.next.call(null,s__9210));
} else
{return f.call(null);
}
});
var seq_reduce__9214 = (function (f,val,coll){
var val__9211 = val;
var coll__9212 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9212))
{{
var G__9223 = f.call(null,val__9211,cljs.core.first.call(null,coll__9212));
var G__9224 = cljs.core.next.call(null,coll__9212);
val__9211 = G__9223;
coll__9212 = G__9224;
continue;
}
} else
{return val__9211;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9213.call(this,f,val);
case  3 :
return seq_reduce__9214.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9231 = null;
var G__9231__9232 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9231__9233 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9231 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9231__9232.call(this,coll,f);
case  3 :
return G__9231__9233.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9231;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9242 = (function (){
return 0;
});
var _PLUS___9243 = (function (x){
return x;
});
var _PLUS___9244 = (function (x,y){
return (x + y);
});
var _PLUS___9245 = (function() { 
var G__9247__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9247 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9247__delegate.call(this, x, y, more);
};
G__9247.cljs$lang$maxFixedArity = 2;
G__9247.cljs$lang$applyTo = (function (arglist__9250){
var x = cljs.core.first(arglist__9250);
var y = cljs.core.first(cljs.core.next(arglist__9250));
var more = cljs.core.rest(cljs.core.next(arglist__9250));
return G__9247__delegate.call(this, x, y, more);
});
return G__9247;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9242.call(this);
case  1 :
return _PLUS___9243.call(this,x);
case  2 :
return _PLUS___9244.call(this,x,y);
default:
return _PLUS___9245.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9245.cljs$lang$applyTo;
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
var ___9258 = (function (x){
return (- x);
});
var ___9259 = (function (x,y){
return (x - y);
});
var ___9260 = (function() { 
var G__9262__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
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
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9258.call(this,x);
case  2 :
return ___9259.call(this,x,y);
default:
return ___9260.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9260.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9271 = (function (){
return 1;
});
var _STAR___9272 = (function (x){
return x;
});
var _STAR___9273 = (function (x,y){
return (x * y);
});
var _STAR___9274 = (function() { 
var G__9276__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9276 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9276__delegate.call(this, x, y, more);
};
G__9276.cljs$lang$maxFixedArity = 2;
G__9276.cljs$lang$applyTo = (function (arglist__9277){
var x = cljs.core.first(arglist__9277);
var y = cljs.core.first(cljs.core.next(arglist__9277));
var more = cljs.core.rest(cljs.core.next(arglist__9277));
return G__9276__delegate.call(this, x, y, more);
});
return G__9276;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9271.call(this);
case  1 :
return _STAR___9272.call(this,x);
case  2 :
return _STAR___9273.call(this,x,y);
default:
return _STAR___9274.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9274.cljs$lang$applyTo;
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
var _LT___9386 = (function (x){
return true;
});
var _LT___9387 = (function (x,y){
return (x < y);
});
var _LT___9388 = (function() { 
var G__9392__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9395 = y;
var G__9396 = cljs.core.first.call(null,more);
var G__9397 = cljs.core.next.call(null,more);
x = G__9395;
y = G__9396;
more = G__9397;
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
var G__9392 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9392__delegate.call(this, x, y, more);
};
G__9392.cljs$lang$maxFixedArity = 2;
G__9392.cljs$lang$applyTo = (function (arglist__9402){
var x = cljs.core.first(arglist__9402);
var y = cljs.core.first(cljs.core.next(arglist__9402));
var more = cljs.core.rest(cljs.core.next(arglist__9402));
return G__9392__delegate.call(this, x, y, more);
});
return G__9392;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9386.call(this,x);
case  2 :
return _LT___9387.call(this,x,y);
default:
return _LT___9388.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9388.cljs$lang$applyTo;
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
var _LT__EQ___9414 = (function (x){
return true;
});
var _LT__EQ___9417 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9419 = (function() { 
var G__9422__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9427 = y;
var G__9428 = cljs.core.first.call(null,more);
var G__9429 = cljs.core.next.call(null,more);
x = G__9427;
y = G__9428;
more = G__9429;
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
var G__9422 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9422__delegate.call(this, x, y, more);
};
G__9422.cljs$lang$maxFixedArity = 2;
G__9422.cljs$lang$applyTo = (function (arglist__9431){
var x = cljs.core.first(arglist__9431);
var y = cljs.core.first(cljs.core.next(arglist__9431));
var more = cljs.core.rest(cljs.core.next(arglist__9431));
return G__9422__delegate.call(this, x, y, more);
});
return G__9422;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9414.call(this,x);
case  2 :
return _LT__EQ___9417.call(this,x,y);
default:
return _LT__EQ___9419.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9419.cljs$lang$applyTo;
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
var _GT___9439 = (function (x){
return true;
});
var _GT___9442 = (function (x,y){
return (x > y);
});
var _GT___9444 = (function() { 
var G__9447__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9448 = y;
var G__9449 = cljs.core.first.call(null,more);
var G__9450 = cljs.core.next.call(null,more);
x = G__9448;
y = G__9449;
more = G__9450;
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
var G__9447 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9447__delegate.call(this, x, y, more);
};
G__9447.cljs$lang$maxFixedArity = 2;
G__9447.cljs$lang$applyTo = (function (arglist__9452){
var x = cljs.core.first(arglist__9452);
var y = cljs.core.first(cljs.core.next(arglist__9452));
var more = cljs.core.rest(cljs.core.next(arglist__9452));
return G__9447__delegate.call(this, x, y, more);
});
return G__9447;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9439.call(this,x);
case  2 :
return _GT___9442.call(this,x,y);
default:
return _GT___9444.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9444.cljs$lang$applyTo;
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
var _GT__EQ___9466 = (function (x){
return true;
});
var _GT__EQ___9467 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9468 = (function() { 
var G__9470__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9471 = y;
var G__9472 = cljs.core.first.call(null,more);
var G__9473 = cljs.core.next.call(null,more);
x = G__9471;
y = G__9472;
more = G__9473;
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
var G__9470 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9470__delegate.call(this, x, y, more);
};
G__9470.cljs$lang$maxFixedArity = 2;
G__9470.cljs$lang$applyTo = (function (arglist__9478){
var x = cljs.core.first(arglist__9478);
var y = cljs.core.first(cljs.core.next(arglist__9478));
var more = cljs.core.rest(cljs.core.next(arglist__9478));
return G__9470__delegate.call(this, x, y, more);
});
return G__9470;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9466.call(this,x);
case  2 :
return _GT__EQ___9467.call(this,x,y);
default:
return _GT__EQ___9468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9468.cljs$lang$applyTo;
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
var max__9483 = (function (x){
return x;
});
var max__9484 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9485 = (function() { 
var G__9488__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9488 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9488__delegate.call(this, x, y, more);
};
G__9488.cljs$lang$maxFixedArity = 2;
G__9488.cljs$lang$applyTo = (function (arglist__9493){
var x = cljs.core.first(arglist__9493);
var y = cljs.core.first(cljs.core.next(arglist__9493));
var more = cljs.core.rest(cljs.core.next(arglist__9493));
return G__9488__delegate.call(this, x, y, more);
});
return G__9488;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9483.call(this,x);
case  2 :
return max__9484.call(this,x,y);
default:
return max__9485.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9485.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9501 = (function (x){
return x;
});
var min__9502 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9503 = (function() { 
var G__9505__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9505 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9505__delegate.call(this, x, y, more);
};
G__9505.cljs$lang$maxFixedArity = 2;
G__9505.cljs$lang$applyTo = (function (arglist__9506){
var x = cljs.core.first(arglist__9506);
var y = cljs.core.first(cljs.core.next(arglist__9506));
var more = cljs.core.rest(cljs.core.next(arglist__9506));
return G__9505__delegate.call(this, x, y, more);
});
return G__9505;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9501.call(this,x);
case  2 :
return min__9502.call(this,x,y);
default:
return min__9503.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9503.cljs$lang$applyTo;
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
var rem__9607 = (n % d);

return cljs.core.fix.call(null,((n - rem__9607) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9611 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9611));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9618 = (function (){
return Math.random.call(null);
});
var rand__9619 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9618.call(this);
case  1 :
return rand__9619.call(this,n);
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
var _EQ__EQ___9661 = (function (x){
return true;
});
var _EQ__EQ___9662 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9663 = (function() { 
var G__9666__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9669 = y;
var G__9670 = cljs.core.first.call(null,more);
var G__9671 = cljs.core.next.call(null,more);
x = G__9669;
y = G__9670;
more = G__9671;
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
var G__9666 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9666__delegate.call(this, x, y, more);
};
G__9666.cljs$lang$maxFixedArity = 2;
G__9666.cljs$lang$applyTo = (function (arglist__9676){
var x = cljs.core.first(arglist__9676);
var y = cljs.core.first(cljs.core.next(arglist__9676));
var more = cljs.core.rest(cljs.core.next(arglist__9676));
return G__9666__delegate.call(this, x, y, more);
});
return G__9666;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9661.call(this,x);
case  2 :
return _EQ__EQ___9662.call(this,x,y);
default:
return _EQ__EQ___9663.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9663.cljs$lang$applyTo;
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
var n__9697 = n;
var xs__9699 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9700 = xs__9699;

if(cljs.core.truth_(and__3546__auto____9700))
{return (n__9697 > 0);
} else
{return and__3546__auto____9700;
}
})()))
{{
var G__9713 = (n__9697 - 1);
var G__9714 = cljs.core.next.call(null,xs__9699);
n__9697 = G__9713;
xs__9699 = G__9714;
continue;
}
} else
{return xs__9699;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9729 = null;
var G__9729__9731 = (function (coll,n){
var temp__3695__auto____9718 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9718))
{var xs__9720 = temp__3695__auto____9718;

return cljs.core.first.call(null,xs__9720);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9729__9734 = (function (coll,n,not_found){
var temp__3695__auto____9726 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9726))
{var xs__9728 = temp__3695__auto____9726;

return cljs.core.first.call(null,xs__9728);
} else
{return not_found;
}
});
G__9729 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9729__9731.call(this,coll,n);
case  3 :
return G__9729__9734.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9729;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9747 = (function (){
return "";
});
var str_STAR___9749 = (function (x){
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
var str_STAR___9751 = (function() { 
var G__9755__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9757 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9759 = cljs.core.next.call(null,more);
sb = G__9757;
more = G__9759;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9755 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9755__delegate.call(this, x, ys);
};
G__9755.cljs$lang$maxFixedArity = 1;
G__9755.cljs$lang$applyTo = (function (arglist__9763){
var x = cljs.core.first(arglist__9763);
var ys = cljs.core.rest(arglist__9763);
return G__9755__delegate.call(this, x, ys);
});
return G__9755;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9747.call(this);
case  1 :
return str_STAR___9749.call(this,x);
default:
return str_STAR___9751.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9751.cljs$lang$applyTo;
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
var str__9771 = (function (){
return "";
});
var str__9773 = (function (x){
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
var str__9775 = (function() { 
var G__9779__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9779 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9779__delegate.call(this, x, ys);
};
G__9779.cljs$lang$maxFixedArity = 1;
G__9779.cljs$lang$applyTo = (function (arglist__9801){
var x = cljs.core.first(arglist__9801);
var ys = cljs.core.rest(arglist__9801);
return G__9779__delegate.call(this, x, ys);
});
return G__9779;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9771.call(this);
case  1 :
return str__9773.call(this,x);
default:
return str__9775.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9775.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9818 = (function (s,start){
return s.substring(start);
});
var subs__9819 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9818.call(this,s,start);
case  3 :
return subs__9819.call(this,s,start,end);
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
var symbol__9824 = (function (name){
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
var symbol__9825 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9824.call(this,ns);
case  2 :
return symbol__9825.call(this,ns,name);
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
var keyword__9837 = (function (name){
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
var keyword__9838 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9837.call(this,ns);
case  2 :
return keyword__9838.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9944 = cljs.core.seq.call(null,x);
var ys__9946 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9944)))
{return cljs.core.nil_QMARK_.call(null,ys__9946);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9946)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9944),cljs.core.first.call(null,ys__9946))))
{{
var G__9960 = cljs.core.next.call(null,xs__9944);
var G__9961 = cljs.core.next.call(null,ys__9946);
xs__9944 = G__9960;
ys__9946 = G__9961;
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
return cljs.core.reduce.call(null,(function (p1__9964_SHARP_,p2__9965_SHARP_){
return cljs.core.hash_combine.call(null,p1__9964_SHARP_,cljs.core.hash.call(null,p2__9965_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9973__9974 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9973__9974))
{var G__9976__9978 = cljs.core.first.call(null,G__9973__9974);
var vec__9977__9979 = G__9976__9978;
var key_name__9980 = cljs.core.nth.call(null,vec__9977__9979,0,null);
var f__9981 = cljs.core.nth.call(null,vec__9977__9979,1,null);
var G__9973__9982 = G__9973__9974;

var G__9976__9983 = G__9976__9978;
var G__9973__9984 = G__9973__9982;

while(true){
var vec__9985__9986 = G__9976__9983;
var key_name__9987 = cljs.core.nth.call(null,vec__9985__9986,0,null);
var f__9988 = cljs.core.nth.call(null,vec__9985__9986,1,null);
var G__9973__9989 = G__9973__9984;

var str_name__9991 = cljs.core.name.call(null,key_name__9987);

obj[str_name__9991] = f__9988;
var temp__3698__auto____9992 = cljs.core.next.call(null,G__9973__9989);

if(cljs.core.truth_(temp__3698__auto____9992))
{var G__9973__9993 = temp__3698__auto____9992;

{
var G__9995 = cljs.core.first.call(null,G__9973__9993);
var G__9996 = G__9973__9993;
G__9976__9983 = G__9995;
G__9973__9984 = G__9996;
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
var this__10015 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10017 = this;
return (new cljs.core.List(this__10017.meta,o,coll,(this__10017.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10019 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10020 = this;
return this__10020.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10021 = this;
return this__10021.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10022 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10023 = this;
return this__10023.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10024 = this;
return this__10024.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10025 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10026 = this;
return (new cljs.core.List(meta,this__10026.first,this__10026.rest,this__10026.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10027 = this;
return this__10027.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10028 = this;
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
var this__10070 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10073 = this;
return (new cljs.core.List(this__10073.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10075 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10077 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10079 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10080 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10081 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10082 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10083 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10084 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10085 = this;
return this__10085.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10086 = this;
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
list.cljs$lang$applyTo = (function (arglist__10128){
var items = cljs.core.seq( arglist__10128 );;
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
var this__10129 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10130 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10135 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10136 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10136.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10137 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10138 = this;
return this__10138.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10139 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10139.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10139.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10140 = this;
return this__10140.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10146 = this;
return (new cljs.core.Cons(meta,this__10146.first,this__10146.rest));
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
var G__10179 = null;
var G__10179__10180 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10179__10181 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10179 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10179__10180.call(this,string,f);
case  3 :
return G__10179__10181.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10179;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10184 = null;
var G__10184__10185 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10184__10186 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10184 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10184__10185.call(this,string,k);
case  3 :
return G__10184__10186.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10184;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10196 = null;
var G__10196__10197 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10196__10198 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10196 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10196__10197.call(this,string,n);
case  3 :
return G__10196__10198.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10196;
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
var G__10207 = null;
var G__10207__10208 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10207__10209 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10207 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10207__10208.call(this,this$,coll);
case  3 :
return G__10207__10209.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10207;
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
var this__10242 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10243 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10244 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10245 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10245.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10247 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10248 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10249 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10252 = this;
return this__10252.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10254 = this;
return (new cljs.core.LazySeq(meta,this__10254.realized,this__10254.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10277 = cljs.core.array.call(null);

var s__10279 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10279)))
{ary__10277.push(cljs.core.first.call(null,s__10279));
{
var G__10282 = cljs.core.next.call(null,s__10279);
s__10279 = G__10282;
continue;
}
} else
{return ary__10277;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10283 = s;
var i__10284 = n;
var sum__10285 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10287 = (i__10284 > 0);

if(cljs.core.truth_(and__3546__auto____10287))
{return cljs.core.seq.call(null,s__10283);
} else
{return and__3546__auto____10287;
}
})()))
{{
var G__10308 = cljs.core.next.call(null,s__10283);
var G__10309 = (i__10284 - 1);
var G__10311 = (sum__10285 + 1);
s__10283 = G__10308;
i__10284 = G__10309;
sum__10285 = G__10311;
continue;
}
} else
{return sum__10285;
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
var concat__10380 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10381 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10382 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10369 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10369))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10369),concat.call(null,cljs.core.rest.call(null,s__10369),y));
} else
{return y;
}
})));
});
var concat__10383 = (function() { 
var G__10391__delegate = function (x,y,zs){
var cat__10379 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10371 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10371))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10371),cat.call(null,cljs.core.rest.call(null,xys__10371),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10379.call(null,concat.call(null,x,y),zs);
};
var G__10391 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10391__delegate.call(this, x, y, zs);
};
G__10391.cljs$lang$maxFixedArity = 2;
G__10391.cljs$lang$applyTo = (function (arglist__10392){
var x = cljs.core.first(arglist__10392);
var y = cljs.core.first(cljs.core.next(arglist__10392));
var zs = cljs.core.rest(cljs.core.next(arglist__10392));
return G__10391__delegate.call(this, x, y, zs);
});
return G__10391;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10380.call(this);
case  1 :
return concat__10381.call(this,x);
case  2 :
return concat__10382.call(this,x,y);
default:
return concat__10383.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10383.cljs$lang$applyTo;
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
var list_STAR___10406 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10407 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10408 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10410 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10411 = (function() { 
var G__10414__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10414 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10414__delegate.call(this, a, b, c, d, more);
};
G__10414.cljs$lang$maxFixedArity = 4;
G__10414.cljs$lang$applyTo = (function (arglist__10419){
var a = cljs.core.first(arglist__10419);
var b = cljs.core.first(cljs.core.next(arglist__10419));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10419)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10419))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10419))));
return G__10414__delegate.call(this, a, b, c, d, more);
});
return G__10414;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10406.call(this,a);
case  2 :
return list_STAR___10407.call(this,a,b);
case  3 :
return list_STAR___10408.call(this,a,b,c);
case  4 :
return list_STAR___10410.call(this,a,b,c,d);
default:
return list_STAR___10411.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10411.cljs$lang$applyTo;
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
var apply__10474 = (function (f,args){
var fixed_arity__10429 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10429 + 1)) <= fixed_arity__10429)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10475 = (function (f,x,args){
var arglist__10433 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10434 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10433,fixed_arity__10434) <= fixed_arity__10434)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10433));
} else
{return f.cljs$lang$applyTo(arglist__10433);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10433));
}
});
var apply__10476 = (function (f,x,y,args){
var arglist__10451 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10452 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10451,fixed_arity__10452) <= fixed_arity__10452)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10451));
} else
{return f.cljs$lang$applyTo(arglist__10451);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10451));
}
});
var apply__10477 = (function (f,x,y,z,args){
var arglist__10462 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10465 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10462,fixed_arity__10465) <= fixed_arity__10465)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10462));
} else
{return f.cljs$lang$applyTo(arglist__10462);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10462));
}
});
var apply__10478 = (function() { 
var G__10500__delegate = function (f,a,b,c,d,args){
var arglist__10466 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10470 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10466,fixed_arity__10470) <= fixed_arity__10470)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10466));
} else
{return f.cljs$lang$applyTo(arglist__10466);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10466));
}
};
var G__10500 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10500__delegate.call(this, f, a, b, c, d, args);
};
G__10500.cljs$lang$maxFixedArity = 5;
G__10500.cljs$lang$applyTo = (function (arglist__10508){
var f = cljs.core.first(arglist__10508);
var a = cljs.core.first(cljs.core.next(arglist__10508));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10508)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10508))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10508)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10508)))));
return G__10500__delegate.call(this, f, a, b, c, d, args);
});
return G__10500;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10474.call(this,f,a);
case  3 :
return apply__10475.call(this,f,a,b);
case  4 :
return apply__10476.call(this,f,a,b,c);
case  5 :
return apply__10477.call(this,f,a,b,c,d);
default:
return apply__10478.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10478.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10513){
var obj = cljs.core.first(arglist__10513);
var f = cljs.core.first(cljs.core.next(arglist__10513));
var args = cljs.core.rest(cljs.core.next(arglist__10513));
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
var not_EQ___10518 = (function (x){
return false;
});
var not_EQ___10519 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10520 = (function() { 
var G__10522__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10522 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10522__delegate.call(this, x, y, more);
};
G__10522.cljs$lang$maxFixedArity = 2;
G__10522.cljs$lang$applyTo = (function (arglist__10529){
var x = cljs.core.first(arglist__10529);
var y = cljs.core.first(cljs.core.next(arglist__10529));
var more = cljs.core.rest(cljs.core.next(arglist__10529));
return G__10522__delegate.call(this, x, y, more);
});
return G__10522;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10518.call(this,x);
case  2 :
return not_EQ___10519.call(this,x,y);
default:
return not_EQ___10520.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10520.cljs$lang$applyTo;
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
var G__10551 = pred;
var G__10552 = cljs.core.next.call(null,coll);
pred = G__10551;
coll = G__10552;
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
{var or__3548__auto____10553 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10553))
{return or__3548__auto____10553;
} else
{{
var G__10556 = pred;
var G__10557 = cljs.core.next.call(null,coll);
pred = G__10556;
coll = G__10557;
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
var G__10732 = null;
var G__10732__10733 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10732__10735 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10732__10736 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10732__10737 = (function() { 
var G__10744__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10744 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10744__delegate.call(this, x, y, zs);
};
G__10744.cljs$lang$maxFixedArity = 2;
G__10744.cljs$lang$applyTo = (function (arglist__10746){
var x = cljs.core.first(arglist__10746);
var y = cljs.core.first(cljs.core.next(arglist__10746));
var zs = cljs.core.rest(cljs.core.next(arglist__10746));
return G__10744__delegate.call(this, x, y, zs);
});
return G__10744;
})()
;
G__10732 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10732__10733.call(this);
case  1 :
return G__10732__10735.call(this,x);
case  2 :
return G__10732__10736.call(this,x,y);
default:
return G__10732__10737.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10732.cljs$lang$maxFixedArity = 2;
G__10732.cljs$lang$applyTo = G__10732__10737.cljs$lang$applyTo;
return G__10732;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10769__delegate = function (args){
return x;
};
var G__10769 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10769__delegate.call(this, args);
};
G__10769.cljs$lang$maxFixedArity = 0;
G__10769.cljs$lang$applyTo = (function (arglist__10771){
var args = cljs.core.seq( arglist__10771 );;
return G__10769__delegate.call(this, args);
});
return G__10769;
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
var comp__10784 = (function (){
return cljs.core.identity;
});
var comp__10785 = (function (f){
return f;
});
var comp__10786 = (function (f,g){
return (function() {
var G__10790 = null;
var G__10790__10791 = (function (){
return f.call(null,g.call(null));
});
var G__10790__10792 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10790__10793 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10790__10794 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10790__10795 = (function() { 
var G__10797__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10797 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10797__delegate.call(this, x, y, z, args);
};
G__10797.cljs$lang$maxFixedArity = 3;
G__10797.cljs$lang$applyTo = (function (arglist__10798){
var x = cljs.core.first(arglist__10798);
var y = cljs.core.first(cljs.core.next(arglist__10798));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10798)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10798)));
return G__10797__delegate.call(this, x, y, z, args);
});
return G__10797;
})()
;
G__10790 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10790__10791.call(this);
case  1 :
return G__10790__10792.call(this,x);
case  2 :
return G__10790__10793.call(this,x,y);
case  3 :
return G__10790__10794.call(this,x,y,z);
default:
return G__10790__10795.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10790.cljs$lang$maxFixedArity = 3;
G__10790.cljs$lang$applyTo = G__10790__10795.cljs$lang$applyTo;
return G__10790;
})()
});
var comp__10787 = (function (f,g,h){
return (function() {
var G__10799 = null;
var G__10799__10804 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10799__10805 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10799__10806 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10799__10807 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10799__10808 = (function() { 
var G__10816__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10816 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10816__delegate.call(this, x, y, z, args);
};
G__10816.cljs$lang$maxFixedArity = 3;
G__10816.cljs$lang$applyTo = (function (arglist__10817){
var x = cljs.core.first(arglist__10817);
var y = cljs.core.first(cljs.core.next(arglist__10817));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10817)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10817)));
return G__10816__delegate.call(this, x, y, z, args);
});
return G__10816;
})()
;
G__10799 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10799__10804.call(this);
case  1 :
return G__10799__10805.call(this,x);
case  2 :
return G__10799__10806.call(this,x,y);
case  3 :
return G__10799__10807.call(this,x,y,z);
default:
return G__10799__10808.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10799.cljs$lang$maxFixedArity = 3;
G__10799.cljs$lang$applyTo = G__10799__10808.cljs$lang$applyTo;
return G__10799;
})()
});
var comp__10788 = (function() { 
var G__10818__delegate = function (f1,f2,f3,fs){
var fs__10781 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10819__delegate = function (args){
var ret__10782 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10781),args);
var fs__10783 = cljs.core.next.call(null,fs__10781);

while(true){
if(cljs.core.truth_(fs__10783))
{{
var G__10821 = cljs.core.first.call(null,fs__10783).call(null,ret__10782);
var G__10822 = cljs.core.next.call(null,fs__10783);
ret__10782 = G__10821;
fs__10783 = G__10822;
continue;
}
} else
{return ret__10782;
}
break;
}
};
var G__10819 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10819__delegate.call(this, args);
};
G__10819.cljs$lang$maxFixedArity = 0;
G__10819.cljs$lang$applyTo = (function (arglist__10824){
var args = cljs.core.seq( arglist__10824 );;
return G__10819__delegate.call(this, args);
});
return G__10819;
})()
;
};
var G__10818 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10818__delegate.call(this, f1, f2, f3, fs);
};
G__10818.cljs$lang$maxFixedArity = 3;
G__10818.cljs$lang$applyTo = (function (arglist__10826){
var f1 = cljs.core.first(arglist__10826);
var f2 = cljs.core.first(cljs.core.next(arglist__10826));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10826)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10826)));
return G__10818__delegate.call(this, f1, f2, f3, fs);
});
return G__10818;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10784.call(this);
case  1 :
return comp__10785.call(this,f1);
case  2 :
return comp__10786.call(this,f1,f2);
case  3 :
return comp__10787.call(this,f1,f2,f3);
default:
return comp__10788.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10788.cljs$lang$applyTo;
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
var partial__10856 = (function (f,arg1){
return (function() { 
var G__10862__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10862 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10862__delegate.call(this, args);
};
G__10862.cljs$lang$maxFixedArity = 0;
G__10862.cljs$lang$applyTo = (function (arglist__10868){
var args = cljs.core.seq( arglist__10868 );;
return G__10862__delegate.call(this, args);
});
return G__10862;
})()
;
});
var partial__10857 = (function (f,arg1,arg2){
return (function() { 
var G__10873__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10873 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10873__delegate.call(this, args);
};
G__10873.cljs$lang$maxFixedArity = 0;
G__10873.cljs$lang$applyTo = (function (arglist__10882){
var args = cljs.core.seq( arglist__10882 );;
return G__10873__delegate.call(this, args);
});
return G__10873;
})()
;
});
var partial__10858 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10885__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10885 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10885__delegate.call(this, args);
};
G__10885.cljs$lang$maxFixedArity = 0;
G__10885.cljs$lang$applyTo = (function (arglist__10888){
var args = cljs.core.seq( arglist__10888 );;
return G__10885__delegate.call(this, args);
});
return G__10885;
})()
;
});
var partial__10859 = (function() { 
var G__10891__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10892__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10892 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10892__delegate.call(this, args);
};
G__10892.cljs$lang$maxFixedArity = 0;
G__10892.cljs$lang$applyTo = (function (arglist__10897){
var args = cljs.core.seq( arglist__10897 );;
return G__10892__delegate.call(this, args);
});
return G__10892;
})()
;
};
var G__10891 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10891__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10891.cljs$lang$maxFixedArity = 4;
G__10891.cljs$lang$applyTo = (function (arglist__10899){
var f = cljs.core.first(arglist__10899);
var arg1 = cljs.core.first(cljs.core.next(arglist__10899));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10899)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10899))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10899))));
return G__10891__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10891;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10856.call(this,f,arg1);
case  3 :
return partial__10857.call(this,f,arg1,arg2);
case  4 :
return partial__10858.call(this,f,arg1,arg2,arg3);
default:
return partial__10859.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10859.cljs$lang$applyTo;
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
var fnil__10933 = (function (f,x){
return (function() {
var G__10939 = null;
var G__10939__10940 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10939__10941 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10939__10942 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10939__10943 = (function() { 
var G__10959__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10959 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10959__delegate.call(this, a, b, c, ds);
};
G__10959.cljs$lang$maxFixedArity = 3;
G__10959.cljs$lang$applyTo = (function (arglist__10961){
var a = cljs.core.first(arglist__10961);
var b = cljs.core.first(cljs.core.next(arglist__10961));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10961)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10961)));
return G__10959__delegate.call(this, a, b, c, ds);
});
return G__10959;
})()
;
G__10939 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10939__10940.call(this,a);
case  2 :
return G__10939__10941.call(this,a,b);
case  3 :
return G__10939__10942.call(this,a,b,c);
default:
return G__10939__10943.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10939.cljs$lang$maxFixedArity = 3;
G__10939.cljs$lang$applyTo = G__10939__10943.cljs$lang$applyTo;
return G__10939;
})()
});
var fnil__10934 = (function (f,x,y){
return (function() {
var G__10964 = null;
var G__10964__10967 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10964__10968 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10964__10969 = (function() { 
var G__10980__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10980 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10980__delegate.call(this, a, b, c, ds);
};
G__10980.cljs$lang$maxFixedArity = 3;
G__10980.cljs$lang$applyTo = (function (arglist__10982){
var a = cljs.core.first(arglist__10982);
var b = cljs.core.first(cljs.core.next(arglist__10982));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10982)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10982)));
return G__10980__delegate.call(this, a, b, c, ds);
});
return G__10980;
})()
;
G__10964 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10964__10967.call(this,a,b);
case  3 :
return G__10964__10968.call(this,a,b,c);
default:
return G__10964__10969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10964.cljs$lang$maxFixedArity = 3;
G__10964.cljs$lang$applyTo = G__10964__10969.cljs$lang$applyTo;
return G__10964;
})()
});
var fnil__10935 = (function (f,x,y,z){
return (function() {
var G__10985 = null;
var G__10985__10986 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10985__10987 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10985__10989 = (function() { 
var G__10996__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10996 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10996__delegate.call(this, a, b, c, ds);
};
G__10996.cljs$lang$maxFixedArity = 3;
G__10996.cljs$lang$applyTo = (function (arglist__10997){
var a = cljs.core.first(arglist__10997);
var b = cljs.core.first(cljs.core.next(arglist__10997));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10997)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10997)));
return G__10996__delegate.call(this, a, b, c, ds);
});
return G__10996;
})()
;
G__10985 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10985__10986.call(this,a,b);
case  3 :
return G__10985__10987.call(this,a,b,c);
default:
return G__10985__10989.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10985.cljs$lang$maxFixedArity = 3;
G__10985.cljs$lang$applyTo = G__10985__10989.cljs$lang$applyTo;
return G__10985;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10933.call(this,f,x);
case  3 :
return fnil__10934.call(this,f,x,y);
case  4 :
return fnil__10935.call(this,f,x,y,z);
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
var mapi__11016 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11010 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11010))
{var s__11012 = temp__3698__auto____11010;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11012)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11012)));
} else
{return null;
}
})));
});

return mapi__11016.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11033 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11033))
{var s__11035 = temp__3698__auto____11033;

var x__11037 = f.call(null,cljs.core.first.call(null,s__11035));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11037)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11035));
} else
{return cljs.core.cons.call(null,x__11037,keep.call(null,f,cljs.core.rest.call(null,s__11035)));
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
var keepi__11144 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11132 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11132))
{var s__11134 = temp__3698__auto____11132;

var x__11136 = f.call(null,idx,cljs.core.first.call(null,s__11134));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11136)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11134));
} else
{return cljs.core.cons.call(null,x__11136,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11134)));
}
} else
{return null;
}
})));
});

return keepi__11144.call(null,0,coll);
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
var every_pred__11416 = (function (p){
return (function() {
var ep1 = null;
var ep1__11433 = (function (){
return true;
});
var ep1__11434 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11435 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11185 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11185))
{return p.call(null,y);
} else
{return and__3546__auto____11185;
}
})());
});
var ep1__11436 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11190 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11190))
{var and__3546__auto____11193 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11193))
{return p.call(null,z);
} else
{return and__3546__auto____11193;
}
} else
{return and__3546__auto____11190;
}
})());
});
var ep1__11437 = (function() { 
var G__11445__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11198 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11198))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11198;
}
})());
};
var G__11445 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11445__delegate.call(this, x, y, z, args);
};
G__11445.cljs$lang$maxFixedArity = 3;
G__11445.cljs$lang$applyTo = (function (arglist__11449){
var x = cljs.core.first(arglist__11449);
var y = cljs.core.first(cljs.core.next(arglist__11449));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11449)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11449)));
return G__11445__delegate.call(this, x, y, z, args);
});
return G__11445;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11433.call(this);
case  1 :
return ep1__11434.call(this,x);
case  2 :
return ep1__11435.call(this,x,y);
case  3 :
return ep1__11436.call(this,x,y,z);
default:
return ep1__11437.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11437.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11429 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11467 = (function (){
return true;
});
var ep2__11468 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11202 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11202))
{return p2.call(null,x);
} else
{return and__3546__auto____11202;
}
})());
});
var ep2__11469 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11208 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11208))
{var and__3546__auto____11213 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11213))
{var and__3546__auto____11214 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11214))
{return p2.call(null,y);
} else
{return and__3546__auto____11214;
}
} else
{return and__3546__auto____11213;
}
} else
{return and__3546__auto____11208;
}
})());
});
var ep2__11470 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11218 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11218))
{var and__3546__auto____11220 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11220))
{var and__3546__auto____11222 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11222))
{var and__3546__auto____11225 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11225))
{var and__3546__auto____11226 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11226))
{return p2.call(null,z);
} else
{return and__3546__auto____11226;
}
} else
{return and__3546__auto____11225;
}
} else
{return and__3546__auto____11222;
}
} else
{return and__3546__auto____11220;
}
} else
{return and__3546__auto____11218;
}
})());
});
var ep2__11471 = (function() { 
var G__11483__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11231 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11231))
{return cljs.core.every_QMARK_.call(null,(function (p1__11114_SHARP_){
var and__3546__auto____11233 = p1.call(null,p1__11114_SHARP_);

if(cljs.core.truth_(and__3546__auto____11233))
{return p2.call(null,p1__11114_SHARP_);
} else
{return and__3546__auto____11233;
}
}),args);
} else
{return and__3546__auto____11231;
}
})());
};
var G__11483 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11483__delegate.call(this, x, y, z, args);
};
G__11483.cljs$lang$maxFixedArity = 3;
G__11483.cljs$lang$applyTo = (function (arglist__11488){
var x = cljs.core.first(arglist__11488);
var y = cljs.core.first(cljs.core.next(arglist__11488));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11488)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11488)));
return G__11483__delegate.call(this, x, y, z, args);
});
return G__11483;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11467.call(this);
case  1 :
return ep2__11468.call(this,x);
case  2 :
return ep2__11469.call(this,x,y);
case  3 :
return ep2__11470.call(this,x,y,z);
default:
return ep2__11471.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11471.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11430 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11499 = (function (){
return true;
});
var ep3__11500 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11236 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11236))
{var and__3546__auto____11238 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11238))
{return p3.call(null,x);
} else
{return and__3546__auto____11238;
}
} else
{return and__3546__auto____11236;
}
})());
});
var ep3__11501 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11246 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11246))
{var and__3546__auto____11254 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11254))
{var and__3546__auto____11256 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11256))
{var and__3546__auto____11257 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11257))
{var and__3546__auto____11259 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11259))
{return p3.call(null,y);
} else
{return and__3546__auto____11259;
}
} else
{return and__3546__auto____11257;
}
} else
{return and__3546__auto____11256;
}
} else
{return and__3546__auto____11254;
}
} else
{return and__3546__auto____11246;
}
})());
});
var ep3__11502 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11263 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11263))
{var and__3546__auto____11266 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11266))
{var and__3546__auto____11268 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11268))
{var and__3546__auto____11270 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11270))
{var and__3546__auto____11273 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11273))
{var and__3546__auto____11274 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11274))
{var and__3546__auto____11275 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11275))
{var and__3546__auto____11283 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11283))
{return p3.call(null,z);
} else
{return and__3546__auto____11283;
}
} else
{return and__3546__auto____11275;
}
} else
{return and__3546__auto____11274;
}
} else
{return and__3546__auto____11273;
}
} else
{return and__3546__auto____11270;
}
} else
{return and__3546__auto____11268;
}
} else
{return and__3546__auto____11266;
}
} else
{return and__3546__auto____11263;
}
})());
});
var ep3__11503 = (function() { 
var G__11517__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11286 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11286))
{return cljs.core.every_QMARK_.call(null,(function (p1__11118_SHARP_){
var and__3546__auto____11288 = p1.call(null,p1__11118_SHARP_);

if(cljs.core.truth_(and__3546__auto____11288))
{var and__3546__auto____11289 = p2.call(null,p1__11118_SHARP_);

if(cljs.core.truth_(and__3546__auto____11289))
{return p3.call(null,p1__11118_SHARP_);
} else
{return and__3546__auto____11289;
}
} else
{return and__3546__auto____11288;
}
}),args);
} else
{return and__3546__auto____11286;
}
})());
};
var G__11517 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11517__delegate.call(this, x, y, z, args);
};
G__11517.cljs$lang$maxFixedArity = 3;
G__11517.cljs$lang$applyTo = (function (arglist__11526){
var x = cljs.core.first(arglist__11526);
var y = cljs.core.first(cljs.core.next(arglist__11526));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11526)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11526)));
return G__11517__delegate.call(this, x, y, z, args);
});
return G__11517;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11499.call(this);
case  1 :
return ep3__11500.call(this,x);
case  2 :
return ep3__11501.call(this,x,y);
case  3 :
return ep3__11502.call(this,x,y,z);
default:
return ep3__11503.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11503.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11431 = (function() { 
var G__11530__delegate = function (p1,p2,p3,ps){
var ps__11296 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11532 = (function (){
return true;
});
var epn__11533 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11119_SHARP_){
return p1__11119_SHARP_.call(null,x);
}),ps__11296);
});
var epn__11534 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11121_SHARP_){
var and__3546__auto____11297 = p1__11121_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11297))
{return p1__11121_SHARP_.call(null,y);
} else
{return and__3546__auto____11297;
}
}),ps__11296);
});
var epn__11535 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11122_SHARP_){
var and__3546__auto____11305 = p1__11122_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11305))
{var and__3546__auto____11407 = p1__11122_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11407))
{return p1__11122_SHARP_.call(null,z);
} else
{return and__3546__auto____11407;
}
} else
{return and__3546__auto____11305;
}
}),ps__11296);
});
var epn__11536 = (function() { 
var G__11548__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11409 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11409))
{return cljs.core.every_QMARK_.call(null,(function (p1__11124_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11124_SHARP_,args);
}),ps__11296);
} else
{return and__3546__auto____11409;
}
})());
};
var G__11548 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11548__delegate.call(this, x, y, z, args);
};
G__11548.cljs$lang$maxFixedArity = 3;
G__11548.cljs$lang$applyTo = (function (arglist__11551){
var x = cljs.core.first(arglist__11551);
var y = cljs.core.first(cljs.core.next(arglist__11551));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11551)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11551)));
return G__11548__delegate.call(this, x, y, z, args);
});
return G__11548;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11532.call(this);
case  1 :
return epn__11533.call(this,x);
case  2 :
return epn__11534.call(this,x,y);
case  3 :
return epn__11535.call(this,x,y,z);
default:
return epn__11536.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11536.cljs$lang$applyTo;
return epn;
})()
};
var G__11530 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11530__delegate.call(this, p1, p2, p3, ps);
};
G__11530.cljs$lang$maxFixedArity = 3;
G__11530.cljs$lang$applyTo = (function (arglist__11557){
var p1 = cljs.core.first(arglist__11557);
var p2 = cljs.core.first(cljs.core.next(arglist__11557));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11557)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11557)));
return G__11530__delegate.call(this, p1, p2, p3, ps);
});
return G__11530;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11416.call(this,p1);
case  2 :
return every_pred__11429.call(this,p1,p2);
case  3 :
return every_pred__11430.call(this,p1,p2,p3);
default:
return every_pred__11431.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11431.cljs$lang$applyTo;
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
var some_fn__11719 = (function (p){
return (function() {
var sp1 = null;
var sp1__11726 = (function (){
return null;
});
var sp1__11727 = (function (x){
return p.call(null,x);
});
var sp1__11728 = (function (x,y){
var or__3548__auto____11578 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11578))
{return or__3548__auto____11578;
} else
{return p.call(null,y);
}
});
var sp1__11729 = (function (x,y,z){
var or__3548__auto____11585 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11585))
{return or__3548__auto____11585;
} else
{var or__3548__auto____11586 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11586))
{return or__3548__auto____11586;
} else
{return p.call(null,z);
}
}
});
var sp1__11730 = (function() { 
var G__11743__delegate = function (x,y,z,args){
var or__3548__auto____11587 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11587))
{return or__3548__auto____11587;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11743 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11743__delegate.call(this, x, y, z, args);
};
G__11743.cljs$lang$maxFixedArity = 3;
G__11743.cljs$lang$applyTo = (function (arglist__11745){
var x = cljs.core.first(arglist__11745);
var y = cljs.core.first(cljs.core.next(arglist__11745));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11745)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11745)));
return G__11743__delegate.call(this, x, y, z, args);
});
return G__11743;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11726.call(this);
case  1 :
return sp1__11727.call(this,x);
case  2 :
return sp1__11728.call(this,x,y);
case  3 :
return sp1__11729.call(this,x,y,z);
default:
return sp1__11730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11730.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11720 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11752 = (function (){
return null;
});
var sp2__11754 = (function (x){
var or__3548__auto____11589 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11589))
{return or__3548__auto____11589;
} else
{return p2.call(null,x);
}
});
var sp2__11755 = (function (x,y){
var or__3548__auto____11592 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11592))
{return or__3548__auto____11592;
} else
{var or__3548__auto____11599 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11599))
{return or__3548__auto____11599;
} else
{var or__3548__auto____11601 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11601))
{return or__3548__auto____11601;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11756 = (function (x,y,z){
var or__3548__auto____11602 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11602))
{return or__3548__auto____11602;
} else
{var or__3548__auto____11604 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11604))
{return or__3548__auto____11604;
} else
{var or__3548__auto____11607 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11607))
{return or__3548__auto____11607;
} else
{var or__3548__auto____11609 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11609))
{return or__3548__auto____11609;
} else
{var or__3548__auto____11610 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11610))
{return or__3548__auto____11610;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11757 = (function() { 
var G__11775__delegate = function (x,y,z,args){
var or__3548__auto____11612 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11612))
{return or__3548__auto____11612;
} else
{return cljs.core.some.call(null,(function (p1__11167_SHARP_){
var or__3548__auto____11613 = p1.call(null,p1__11167_SHARP_);

if(cljs.core.truth_(or__3548__auto____11613))
{return or__3548__auto____11613;
} else
{return p2.call(null,p1__11167_SHARP_);
}
}),args);
}
};
var G__11775 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11775__delegate.call(this, x, y, z, args);
};
G__11775.cljs$lang$maxFixedArity = 3;
G__11775.cljs$lang$applyTo = (function (arglist__11780){
var x = cljs.core.first(arglist__11780);
var y = cljs.core.first(cljs.core.next(arglist__11780));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11780)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11780)));
return G__11775__delegate.call(this, x, y, z, args);
});
return G__11775;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11752.call(this);
case  1 :
return sp2__11754.call(this,x);
case  2 :
return sp2__11755.call(this,x,y);
case  3 :
return sp2__11756.call(this,x,y,z);
default:
return sp2__11757.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11757.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11722 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11784 = (function (){
return null;
});
var sp3__11785 = (function (x){
var or__3548__auto____11619 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11619))
{return or__3548__auto____11619;
} else
{var or__3548__auto____11626 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11626))
{return or__3548__auto____11626;
} else
{return p3.call(null,x);
}
}
});
var sp3__11786 = (function (x,y){
var or__3548__auto____11628 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11628))
{return or__3548__auto____11628;
} else
{var or__3548__auto____11631 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11631))
{return or__3548__auto____11631;
} else
{var or__3548__auto____11633 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11633))
{return or__3548__auto____11633;
} else
{var or__3548__auto____11637 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11637))
{return or__3548__auto____11637;
} else
{var or__3548__auto____11640 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11640))
{return or__3548__auto____11640;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11787 = (function (x,y,z){
var or__3548__auto____11644 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11644))
{return or__3548__auto____11644;
} else
{var or__3548__auto____11645 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11645))
{return or__3548__auto____11645;
} else
{var or__3548__auto____11647 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11647))
{return or__3548__auto____11647;
} else
{var or__3548__auto____11649 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11649))
{return or__3548__auto____11649;
} else
{var or__3548__auto____11665 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11665))
{return or__3548__auto____11665;
} else
{var or__3548__auto____11671 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11671))
{return or__3548__auto____11671;
} else
{var or__3548__auto____11674 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11674))
{return or__3548__auto____11674;
} else
{var or__3548__auto____11676 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11676))
{return or__3548__auto____11676;
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
var sp3__11788 = (function() { 
var G__11799__delegate = function (x,y,z,args){
var or__3548__auto____11678 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11678))
{return or__3548__auto____11678;
} else
{return cljs.core.some.call(null,(function (p1__11171_SHARP_){
var or__3548__auto____11680 = p1.call(null,p1__11171_SHARP_);

if(cljs.core.truth_(or__3548__auto____11680))
{return or__3548__auto____11680;
} else
{var or__3548__auto____11681 = p2.call(null,p1__11171_SHARP_);

if(cljs.core.truth_(or__3548__auto____11681))
{return or__3548__auto____11681;
} else
{return p3.call(null,p1__11171_SHARP_);
}
}
}),args);
}
};
var G__11799 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11799__delegate.call(this, x, y, z, args);
};
G__11799.cljs$lang$maxFixedArity = 3;
G__11799.cljs$lang$applyTo = (function (arglist__11801){
var x = cljs.core.first(arglist__11801);
var y = cljs.core.first(cljs.core.next(arglist__11801));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11801)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11801)));
return G__11799__delegate.call(this, x, y, z, args);
});
return G__11799;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11784.call(this);
case  1 :
return sp3__11785.call(this,x);
case  2 :
return sp3__11786.call(this,x,y);
case  3 :
return sp3__11787.call(this,x,y,z);
default:
return sp3__11788.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11788.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11723 = (function() { 
var G__11807__delegate = function (p1,p2,p3,ps){
var ps__11685 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11809 = (function (){
return null;
});
var spn__11810 = (function (x){
return cljs.core.some.call(null,(function (p1__11175_SHARP_){
return p1__11175_SHARP_.call(null,x);
}),ps__11685);
});
var spn__11811 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11176_SHARP_){
var or__3548__auto____11691 = p1__11176_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11691))
{return or__3548__auto____11691;
} else
{return p1__11176_SHARP_.call(null,y);
}
}),ps__11685);
});
var spn__11812 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11179_SHARP_){
var or__3548__auto____11694 = p1__11179_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11694))
{return or__3548__auto____11694;
} else
{var or__3548__auto____11701 = p1__11179_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11701))
{return or__3548__auto____11701;
} else
{return p1__11179_SHARP_.call(null,z);
}
}
}),ps__11685);
});
var spn__11813 = (function() { 
var G__11938__delegate = function (x,y,z,args){
var or__3548__auto____11708 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11708))
{return or__3548__auto____11708;
} else
{return cljs.core.some.call(null,(function (p1__11180_SHARP_){
return cljs.core.some.call(null,p1__11180_SHARP_,args);
}),ps__11685);
}
};
var G__11938 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11938__delegate.call(this, x, y, z, args);
};
G__11938.cljs$lang$maxFixedArity = 3;
G__11938.cljs$lang$applyTo = (function (arglist__11940){
var x = cljs.core.first(arglist__11940);
var y = cljs.core.first(cljs.core.next(arglist__11940));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11940)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11940)));
return G__11938__delegate.call(this, x, y, z, args);
});
return G__11938;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11809.call(this);
case  1 :
return spn__11810.call(this,x);
case  2 :
return spn__11811.call(this,x,y);
case  3 :
return spn__11812.call(this,x,y,z);
default:
return spn__11813.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11813.cljs$lang$applyTo;
return spn;
})()
};
var G__11807 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11807__delegate.call(this, p1, p2, p3, ps);
};
G__11807.cljs$lang$maxFixedArity = 3;
G__11807.cljs$lang$applyTo = (function (arglist__11944){
var p1 = cljs.core.first(arglist__11944);
var p2 = cljs.core.first(cljs.core.next(arglist__11944));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11944)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11944)));
return G__11807__delegate.call(this, p1, p2, p3, ps);
});
return G__11807;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11719.call(this,p1);
case  2 :
return some_fn__11720.call(this,p1,p2);
case  3 :
return some_fn__11722.call(this,p1,p2,p3);
default:
return some_fn__11723.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11723.cljs$lang$applyTo;
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
var map__11986 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11954 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11954))
{var s__11957 = temp__3698__auto____11954;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11957)),map.call(null,f,cljs.core.rest.call(null,s__11957)));
} else
{return null;
}
})));
});
var map__11987 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11959 = cljs.core.seq.call(null,c1);
var s2__11960 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11962 = s1__11959;

if(cljs.core.truth_(and__3546__auto____11962))
{return s2__11960;
} else
{return and__3546__auto____11962;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11959),cljs.core.first.call(null,s2__11960)),map.call(null,f,cljs.core.rest.call(null,s1__11959),cljs.core.rest.call(null,s2__11960)));
} else
{return null;
}
})));
});
var map__11988 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11965 = cljs.core.seq.call(null,c1);
var s2__11966 = cljs.core.seq.call(null,c2);
var s3__11967 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11968 = s1__11965;

if(cljs.core.truth_(and__3546__auto____11968))
{var and__3546__auto____11969 = s2__11966;

if(cljs.core.truth_(and__3546__auto____11969))
{return s3__11967;
} else
{return and__3546__auto____11969;
}
} else
{return and__3546__auto____11968;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11965),cljs.core.first.call(null,s2__11966),cljs.core.first.call(null,s3__11967)),map.call(null,f,cljs.core.rest.call(null,s1__11965),cljs.core.rest.call(null,s2__11966),cljs.core.rest.call(null,s3__11967)));
} else
{return null;
}
})));
});
var map__11989 = (function() { 
var G__12002__delegate = function (f,c1,c2,c3,colls){
var step__11980 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11977 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11977)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11977),step.call(null,map.call(null,cljs.core.rest,ss__11977)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11569_SHARP_){
return cljs.core.apply.call(null,f,p1__11569_SHARP_);
}),step__11980.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12002 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12002__delegate.call(this, f, c1, c2, c3, colls);
};
G__12002.cljs$lang$maxFixedArity = 4;
G__12002.cljs$lang$applyTo = (function (arglist__12009){
var f = cljs.core.first(arglist__12009);
var c1 = cljs.core.first(cljs.core.next(arglist__12009));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12009)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12009))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12009))));
return G__12002__delegate.call(this, f, c1, c2, c3, colls);
});
return G__12002;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11986.call(this,f,c1);
case  3 :
return map__11987.call(this,f,c1,c2);
case  4 :
return map__11988.call(this,f,c1,c2,c3);
default:
return map__11989.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11989.cljs$lang$applyTo;
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
{var temp__3698__auto____12013 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12013))
{var s__12014 = temp__3698__auto____12013;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12014),take.call(null,(n - 1),cljs.core.rest.call(null,s__12014)));
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
var step__12027 = (function (n,coll){
while(true){
var s__12024 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12026 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12026))
{return s__12024;
} else
{return and__3546__auto____12026;
}
})()))
{{
var G__12033 = (n - 1);
var G__12034 = cljs.core.rest.call(null,s__12024);
n = G__12033;
coll = G__12034;
continue;
}
} else
{return s__12024;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12027.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12040 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12041 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12040.call(this,n);
case  2 :
return drop_last__12041.call(this,n,s);
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
var s__12046 = cljs.core.seq.call(null,coll);
var lead__12048 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12048))
{{
var G__12056 = cljs.core.next.call(null,s__12046);
var G__12057 = cljs.core.next.call(null,lead__12048);
s__12046 = G__12056;
lead__12048 = G__12057;
continue;
}
} else
{return s__12046;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12067 = (function (pred,coll){
while(true){
var s__12061 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12065 = s__12061;

if(cljs.core.truth_(and__3546__auto____12065))
{return pred.call(null,cljs.core.first.call(null,s__12061));
} else
{return and__3546__auto____12065;
}
})()))
{{
var G__12069 = pred;
var G__12070 = cljs.core.rest.call(null,s__12061);
pred = G__12069;
coll = G__12070;
continue;
}
} else
{return s__12061;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12067.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12079 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12079))
{var s__12080 = temp__3698__auto____12079;

return cljs.core.concat.call(null,s__12080,cycle.call(null,s__12080));
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
var repeat__12095 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12096 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12095.call(this,n);
case  2 :
return repeat__12096.call(this,n,x);
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
var repeatedly__12128 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12129 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12128.call(this,n);
case  2 :
return repeatedly__12129.call(this,n,f);
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
var interleave__12157 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12141 = cljs.core.seq.call(null,c1);
var s2__12143 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12146 = s1__12141;

if(cljs.core.truth_(and__3546__auto____12146))
{return s2__12143;
} else
{return and__3546__auto____12146;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12141),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12143),interleave.call(null,cljs.core.rest.call(null,s1__12141),cljs.core.rest.call(null,s2__12143))));
} else
{return null;
}
})));
});
var interleave__12158 = (function() { 
var G__12161__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12149 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12149)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12149),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12149)));
} else
{return null;
}
})));
};
var G__12161 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12161__delegate.call(this, c1, c2, colls);
};
G__12161.cljs$lang$maxFixedArity = 2;
G__12161.cljs$lang$applyTo = (function (arglist__12207){
var c1 = cljs.core.first(arglist__12207);
var c2 = cljs.core.first(cljs.core.next(arglist__12207));
var colls = cljs.core.rest(cljs.core.next(arglist__12207));
return G__12161__delegate.call(this, c1, c2, colls);
});
return G__12161;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12157.call(this,c1,c2);
default:
return interleave__12158.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12158.cljs$lang$applyTo;
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
var cat__12321 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12318 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12318))
{var coll__12319 = temp__3695__auto____12318;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12319),cat.call(null,cljs.core.rest.call(null,coll__12319),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12321.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12326 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12327 = (function() { 
var G__12329__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12329 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12329__delegate.call(this, f, coll, colls);
};
G__12329.cljs$lang$maxFixedArity = 2;
G__12329.cljs$lang$applyTo = (function (arglist__12330){
var f = cljs.core.first(arglist__12330);
var coll = cljs.core.first(cljs.core.next(arglist__12330));
var colls = cljs.core.rest(cljs.core.next(arglist__12330));
return G__12329__delegate.call(this, f, coll, colls);
});
return G__12329;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12326.call(this,f,coll);
default:
return mapcat__12327.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12327.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12331 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12331))
{var s__12332 = temp__3698__auto____12331;

var f__12333 = cljs.core.first.call(null,s__12332);
var r__12335 = cljs.core.rest.call(null,s__12332);

if(cljs.core.truth_(pred.call(null,f__12333)))
{return cljs.core.cons.call(null,f__12333,filter.call(null,pred,r__12335));
} else
{return filter.call(null,pred,r__12335);
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
var walk__12347 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12347.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12346_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12346_SHARP_));
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
var partition__12410 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12412 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12369 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12369))
{var s__12370 = temp__3698__auto____12369;

var p__12371 = cljs.core.take.call(null,n,s__12370);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12371))))
{return cljs.core.cons.call(null,p__12371,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12370)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12414 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12374 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12374))
{var s__12376 = temp__3698__auto____12374;

var p__12377 = cljs.core.take.call(null,n,s__12376);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12377))))
{return cljs.core.cons.call(null,p__12377,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12376)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12377,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12410.call(this,n,step);
case  3 :
return partition__12412.call(this,n,step,pad);
case  4 :
return partition__12414.call(this,n,step,pad,coll);
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
var get_in__12434 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12435 = (function (m,ks,not_found){
var sentinel__12429 = cljs.core.lookup_sentinel;
var m__12430 = m;
var ks__12432 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12432))
{var m__12433 = cljs.core.get.call(null,m__12430,cljs.core.first.call(null,ks__12432),sentinel__12429);

if(cljs.core.truth_((sentinel__12429 === m__12433)))
{return not_found;
} else
{{
var G__12437 = sentinel__12429;
var G__12438 = m__12433;
var G__12439 = cljs.core.next.call(null,ks__12432);
sentinel__12429 = G__12437;
m__12430 = G__12438;
ks__12432 = G__12439;
continue;
}
}
} else
{return m__12430;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12434.call(this,m,ks);
case  3 :
return get_in__12435.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12440,v){
var vec__12441__12442 = p__12440;
var k__12444 = cljs.core.nth.call(null,vec__12441__12442,0,null);
var ks__12448 = cljs.core.nthnext.call(null,vec__12441__12442,1);

if(cljs.core.truth_(ks__12448))
{return cljs.core.assoc.call(null,m,k__12444,assoc_in.call(null,cljs.core.get.call(null,m,k__12444),ks__12448,v));
} else
{return cljs.core.assoc.call(null,m,k__12444,v);
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
var update_in__delegate = function (m,p__12449,f,args){
var vec__12450__12451 = p__12449;
var k__12452 = cljs.core.nth.call(null,vec__12450__12451,0,null);
var ks__12453 = cljs.core.nthnext.call(null,vec__12450__12451,1);

if(cljs.core.truth_(ks__12453))
{return cljs.core.assoc.call(null,m,k__12452,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12452),ks__12453,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12452,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12452),args));
}
};
var update_in = function (m,p__12449,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12449, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12457){
var m = cljs.core.first(arglist__12457);
var p__12449 = cljs.core.first(cljs.core.next(arglist__12457));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12457)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12457)));
return update_in__delegate.call(this, m, p__12449, f, args);
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
var this__12468 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12535 = null;
var G__12535__12536 = (function (coll,k){
var this__12469 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12535__12537 = (function (coll,k,not_found){
var this__12470 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12535 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12535__12536.call(this,coll,k);
case  3 :
return G__12535__12537.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12535;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12475 = this;
var new_array__12476 = cljs.core.aclone.call(null,this__12475.array);

(new_array__12476[k] = v);
return (new cljs.core.Vector(this__12475.meta,new_array__12476));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12543 = null;
var G__12543__12544 = (function (coll,k){
var this__12477 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12543__12545 = (function (coll,k,not_found){
var this__12478 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12543 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12543__12544.call(this,coll,k);
case  3 :
return G__12543__12545.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12543;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12483 = this;
var new_array__12484 = cljs.core.aclone.call(null,this__12483.array);

new_array__12484.push(o);
return (new cljs.core.Vector(this__12483.meta,new_array__12484));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12549 = null;
var G__12549__12550 = (function (v,f){
var this__12485 = this;
return cljs.core.ci_reduce.call(null,this__12485.array,f);
});
var G__12549__12551 = (function (v,f,start){
var this__12486 = this;
return cljs.core.ci_reduce.call(null,this__12486.array,f,start);
});
G__12549 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12549__12550.call(this,v,f);
case  3 :
return G__12549__12551.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12549;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12487 = this;
if(cljs.core.truth_((this__12487.array.length > 0)))
{var vector_seq__12501 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12487.array.length)))
{return cljs.core.cons.call(null,(this__12487.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12501.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12504 = this;
return this__12504.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12506 = this;
var count__12508 = this__12506.array.length;

if(cljs.core.truth_((count__12508 > 0)))
{return (this__12506.array[(count__12508 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12510 = this;
if(cljs.core.truth_((this__12510.array.length > 0)))
{var new_array__12512 = cljs.core.aclone.call(null,this__12510.array);

new_array__12512.pop();
return (new cljs.core.Vector(this__12510.meta,new_array__12512));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12515 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12517 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12519 = this;
return (new cljs.core.Vector(meta,this__12519.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12520 = this;
return this__12520.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12559 = null;
var G__12559__12561 = (function (coll,n){
var this__12522 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12524 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12524))
{return (n < this__12522.array.length);
} else
{return and__3546__auto____12524;
}
})()))
{return (this__12522.array[n]);
} else
{return null;
}
});
var G__12559__12562 = (function (coll,n,not_found){
var this__12527 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12529 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12529))
{return (n < this__12527.array.length);
} else
{return and__3546__auto____12529;
}
})()))
{return (this__12527.array[n]);
} else
{return not_found;
}
});
G__12559 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12559__12561.call(this,coll,n);
case  3 :
return G__12559__12562.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12559;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12531 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12531.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12752){
var args = cljs.core.seq( arglist__12752 );;
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
var this__12767 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12849 = null;
var G__12849__12850 = (function (coll,k){
var this__12769 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12849__12851 = (function (coll,k,not_found){
var this__12771 = this;
return cljs.core._nth.call(null,coll,k,not_found);
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
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12772 = this;
var v_pos__12773 = (this__12772.start + key);

return (new cljs.core.Subvec(this__12772.meta,cljs.core._assoc.call(null,this__12772.v,v_pos__12773,val),this__12772.start,((this__12772.end > (v_pos__12773 + 1)) ? this__12772.end : (v_pos__12773 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12862 = null;
var G__12862__12863 = (function (coll,k){
var this__12776 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12862__12864 = (function (coll,k,not_found){
var this__12781 = this;
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
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12815 = this;
return (new cljs.core.Subvec(this__12815.meta,cljs.core._assoc_n.call(null,this__12815.v,this__12815.end,o),this__12815.start,(this__12815.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12874 = null;
var G__12874__12875 = (function (coll,f){
var this__12816 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12874__12876 = (function (coll,f,start){
var this__12817 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12874 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12874__12875.call(this,coll,f);
case  3 :
return G__12874__12876.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12874;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12818 = this;
var subvec_seq__12820 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12818.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12818.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12820.call(null,this__12818.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12821 = this;
return (this__12821.end - this__12821.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12824 = this;
return cljs.core._nth.call(null,this__12824.v,(this__12824.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12826 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12826.start,this__12826.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12826.meta,this__12826.v,this__12826.start,(this__12826.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12829 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12831 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12833 = this;
return (new cljs.core.Subvec(meta,this__12833.v,this__12833.start,this__12833.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12836 = this;
return this__12836.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12885 = null;
var G__12885__12886 = (function (coll,n){
var this__12839 = this;
return cljs.core._nth.call(null,this__12839.v,(this__12839.start + n));
});
var G__12885__12887 = (function (coll,n,not_found){
var this__12841 = this;
return cljs.core._nth.call(null,this__12841.v,(this__12841.start + n),not_found);
});
G__12885 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12885__12886.call(this,coll,n);
case  3 :
return G__12885__12887.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12885;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12843 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12843.meta);
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
var subvec__12898 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12899 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12898.call(this,v,start);
case  3 :
return subvec__12899.call(this,v,start,end);
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
var this__12917 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12919 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12921 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12922 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12922.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12923 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12924 = this;
return cljs.core._first.call(null,this__12924.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12925 = this;
var temp__3695__auto____12926 = cljs.core.next.call(null,this__12925.front);

if(cljs.core.truth_(temp__3695__auto____12926))
{var f1__12927 = temp__3695__auto____12926;

return (new cljs.core.PersistentQueueSeq(this__12925.meta,f1__12927,this__12925.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12925.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12925.meta,this__12925.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12928 = this;
return this__12928.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12929 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12929.front,this__12929.rear));
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
var this__12934 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12935 = this;
if(cljs.core.truth_(this__12935.front))
{return (new cljs.core.PersistentQueue(this__12935.meta,(this__12935.count + 1),this__12935.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12937 = this__12935.rear;

if(cljs.core.truth_(or__3548__auto____12937))
{return or__3548__auto____12937;
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
var this__12940 = this;
var rear__12942 = cljs.core.seq.call(null,this__12940.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12944 = this__12940.front;

if(cljs.core.truth_(or__3548__auto____12944))
{return or__3548__auto____12944;
} else
{return rear__12942;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12940.front,cljs.core.seq.call(null,rear__12942)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12971 = this;
return this__12971.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12972 = this;
return cljs.core._first.call(null,this__12972.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12974 = this;
if(cljs.core.truth_(this__12974.front))
{var temp__3695__auto____12975 = cljs.core.next.call(null,this__12974.front);

if(cljs.core.truth_(temp__3695__auto____12975))
{var f1__12976 = temp__3695__auto____12975;

return (new cljs.core.PersistentQueue(this__12974.meta,(this__12974.count - 1),f1__12976,this__12974.rear));
} else
{return (new cljs.core.PersistentQueue(this__12974.meta,(this__12974.count - 1),cljs.core.seq.call(null,this__12974.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12979 = this;
return cljs.core.first.call(null,this__12979.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12980 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12983 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12985 = this;
return (new cljs.core.PersistentQueue(meta,this__12985.count,this__12985.front,this__12985.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12987 = this;
return this__12987.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12989 = this;
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
var this__13069 = this;
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
var len__13081 = array.length;

var i__13082 = 0;

while(true){
if(cljs.core.truth_((i__13082 < len__13081)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__13082]))))
{return i__13082;
} else
{{
var G__13089 = (i__13082 + incr);
i__13082 = G__13089;
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
var obj_map_contains_key_QMARK___13098 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___13099 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____13094 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13094))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13094;
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
return obj_map_contains_key_QMARK___13098.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___13099.call(this,k,strobj,true_val,false_val);
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
var this__13130 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13169 = null;
var G__13169__13170 = (function (coll,k){
var this__13136 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13169__13171 = (function (coll,k,not_found){
var this__13141 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13141.strobj,(this__13141.strobj[k]),not_found);
});
G__13169 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13169__13170.call(this,coll,k);
case  3 :
return G__13169__13171.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13169;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13142 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13143 = goog.object.clone.call(null,this__13142.strobj);
var overwrite_QMARK___13145 = new_strobj__13143.hasOwnProperty(k);

(new_strobj__13143[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13145))
{return (new cljs.core.ObjMap(this__13142.meta,this__13142.keys,new_strobj__13143));
} else
{var new_keys__13149 = cljs.core.aclone.call(null,this__13142.keys);

new_keys__13149.push(k);
return (new cljs.core.ObjMap(this__13142.meta,new_keys__13149,new_strobj__13143));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13142.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13150 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13150.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13177 = null;
var G__13177__13178 = (function (coll,k){
var this__13151 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13177__13179 = (function (coll,k,not_found){
var this__13152 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13177 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13177__13178.call(this,coll,k);
case  3 :
return G__13177__13179.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13177;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13153 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13158 = this;
if(cljs.core.truth_((this__13158.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__13107_SHARP_){
return cljs.core.vector.call(null,p1__13107_SHARP_,(this__13158.strobj[p1__13107_SHARP_]));
}),this__13158.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13159 = this;
return this__13159.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13160 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13161 = this;
return (new cljs.core.ObjMap(meta,this__13161.keys,this__13161.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13162 = this;
return this__13162.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13163 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13163.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13164 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13165 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13165))
{return this__13164.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13165;
}
})()))
{var new_keys__13167 = cljs.core.aclone.call(null,this__13164.keys);
var new_strobj__13168 = goog.object.clone.call(null,this__13164.strobj);

new_keys__13167.splice(cljs.core.scan_array.call(null,1,k,new_keys__13167),1);
cljs.core.js_delete.call(null,new_strobj__13168,k);
return (new cljs.core.ObjMap(this__13164.meta,new_keys__13167,new_strobj__13168));
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
var this__13220 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13375 = null;
var G__13375__13376 = (function (coll,k){
var this__13222 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13375__13377 = (function (coll,k,not_found){
var this__13225 = this;
var bucket__13227 = (this__13225.hashobj[cljs.core.hash.call(null,k)]);
var i__13231 = (cljs.core.truth_(bucket__13227)?cljs.core.scan_array.call(null,2,k,bucket__13227):null);

if(cljs.core.truth_(i__13231))
{return (bucket__13227[(i__13231 + 1)]);
} else
{return not_found;
}
});
G__13375 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13375__13376.call(this,coll,k);
case  3 :
return G__13375__13377.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13375;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13232 = this;
var h__13234 = cljs.core.hash.call(null,k);
var bucket__13235 = (this__13232.hashobj[h__13234]);

if(cljs.core.truth_(bucket__13235))
{var new_bucket__13237 = cljs.core.aclone.call(null,bucket__13235);
var new_hashobj__13241 = goog.object.clone.call(null,this__13232.hashobj);

(new_hashobj__13241[h__13234] = new_bucket__13237);
var temp__3695__auto____13243 = cljs.core.scan_array.call(null,2,k,new_bucket__13237);

if(cljs.core.truth_(temp__3695__auto____13243))
{var i__13246 = temp__3695__auto____13243;

(new_bucket__13237[(i__13246 + 1)] = v);
return (new cljs.core.HashMap(this__13232.meta,this__13232.count,new_hashobj__13241));
} else
{new_bucket__13237.push(k,v);
return (new cljs.core.HashMap(this__13232.meta,(this__13232.count + 1),new_hashobj__13241));
}
} else
{var new_hashobj__13252 = goog.object.clone.call(null,this__13232.hashobj);

(new_hashobj__13252[h__13234] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13232.meta,(this__13232.count + 1),new_hashobj__13252));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13254 = this;
var bucket__13255 = (this__13254.hashobj[cljs.core.hash.call(null,k)]);
var i__13257 = (cljs.core.truth_(bucket__13255)?cljs.core.scan_array.call(null,2,k,bucket__13255):null);

if(cljs.core.truth_(i__13257))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13389 = null;
var G__13389__13390 = (function (coll,k){
var this__13259 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13389__13391 = (function (coll,k,not_found){
var this__13261 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13389 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13389__13390.call(this,coll,k);
case  3 :
return G__13389__13391.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13389;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13263 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13267 = this;
if(cljs.core.truth_((this__13267.count > 0)))
{var hashes__13270 = cljs.core.js_keys.call(null,this__13267.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13199_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13267.hashobj[p1__13199_SHARP_])));
}),hashes__13270);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13278 = this;
return this__13278.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13280 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13356 = this;
return (new cljs.core.HashMap(meta,this__13356.count,this__13356.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13361 = this;
return this__13361.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13362 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13362.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13363 = this;
var h__13364 = cljs.core.hash.call(null,k);
var bucket__13365 = (this__13363.hashobj[h__13364]);
var i__13366 = (cljs.core.truth_(bucket__13365)?cljs.core.scan_array.call(null,2,k,bucket__13365):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13366)))
{return coll;
} else
{var new_hashobj__13367 = goog.object.clone.call(null,this__13363.hashobj);

if(cljs.core.truth_((3 > bucket__13365.length)))
{cljs.core.js_delete.call(null,new_hashobj__13367,h__13364);
} else
{var new_bucket__13372 = cljs.core.aclone.call(null,bucket__13365);

new_bucket__13372.splice(i__13366,2);
(new_hashobj__13367[h__13364] = new_bucket__13372);
}
return (new cljs.core.HashMap(this__13363.meta,(this__13363.count - 1),new_hashobj__13367));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13414 = ks.length;

var i__13417 = 0;
var out__13418 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13417 < len__13414)))
{{
var G__13423 = (i__13417 + 1);
var G__13424 = cljs.core.assoc.call(null,out__13418,(ks[i__13417]),(vs[i__13417]));
i__13417 = G__13423;
out__13418 = G__13424;
continue;
}
} else
{return out__13418;
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
var in$__13428 = cljs.core.seq.call(null,keyvals);
var out__13429 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13428))
{{
var G__13440 = cljs.core.nnext.call(null,in$__13428);
var G__13441 = cljs.core.assoc.call(null,out__13429,cljs.core.first.call(null,in$__13428),cljs.core.second.call(null,in$__13428));
in$__13428 = G__13440;
out__13429 = G__13441;
continue;
}
} else
{return out__13429;
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
hash_map.cljs$lang$applyTo = (function (arglist__13442){
var keyvals = cljs.core.seq( arglist__13442 );;
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
{return cljs.core.reduce.call(null,(function (p1__13448_SHARP_,p2__13449_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13494 = p1__13448_SHARP_;

if(cljs.core.truth_(or__3548__auto____13494))
{return or__3548__auto____13494;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13449_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13506){
var maps = cljs.core.seq( arglist__13506 );;
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
{var merge_entry__13515 = (function (m,e){
var k__13511 = cljs.core.first.call(null,e);
var v__13514 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13511)))
{return cljs.core.assoc.call(null,m,k__13511,f.call(null,cljs.core.get.call(null,m,k__13511),v__13514));
} else
{return cljs.core.assoc.call(null,m,k__13511,v__13514);
}
});
var merge2__13519 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13515,(function (){var or__3548__auto____13518 = m1;

if(cljs.core.truth_(or__3548__auto____13518))
{return or__3548__auto____13518;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13519,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13525){
var f = cljs.core.first(arglist__13525);
var maps = cljs.core.rest(arglist__13525);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13537 = cljs.core.ObjMap.fromObject([],{});
var keys__13538 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13538))
{var key__13541 = cljs.core.first.call(null,keys__13538);
var entry__13542 = cljs.core.get.call(null,map,key__13541,"﷐'user/not-found");

{
var G__13547 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13542,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13537,key__13541,entry__13542):ret__13537);
var G__13548 = cljs.core.next.call(null,keys__13538);
ret__13537 = G__13547;
keys__13538 = G__13548;
continue;
}
} else
{return ret__13537;
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
var this__13575 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13666 = null;
var G__13666__13667 = (function (coll,v){
var this__13577 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13666__13668 = (function (coll,v,not_found){
var this__13580 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13580.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13666 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13666__13667.call(this,coll,v);
case  3 :
return G__13666__13668.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13666;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13715 = null;
var G__13715__13716 = (function (coll,k){
var this__13585 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13715__13717 = (function (coll,k,not_found){
var this__13586 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13715 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13715__13716.call(this,coll,k);
case  3 :
return G__13715__13717.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13715;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13591 = this;
return (new cljs.core.Set(this__13591.meta,cljs.core.assoc.call(null,this__13591.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13599 = this;
return cljs.core.keys.call(null,this__13599.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13601 = this;
return (new cljs.core.Set(this__13601.meta,cljs.core.dissoc.call(null,this__13601.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13606 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13608 = this;
var and__3546__auto____13609 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13609))
{var and__3546__auto____13611 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13611))
{return cljs.core.every_QMARK_.call(null,(function (p1__13529_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13529_SHARP_);
}),other);
} else
{return and__3546__auto____13611;
}
} else
{return and__3546__auto____13609;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13613 = this;
return (new cljs.core.Set(meta,this__13613.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13621 = this;
return this__13621.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13663 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13663.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13758 = cljs.core.seq.call(null,coll);
var out__13759 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13758))))
{{
var G__13760 = cljs.core.rest.call(null,in$__13758);
var G__13761 = cljs.core.conj.call(null,out__13759,cljs.core.first.call(null,in$__13758));
in$__13758 = G__13760;
out__13759 = G__13761;
continue;
}
} else
{return out__13759;
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
{var n__13764 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13765 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13765))
{var e__13766 = temp__3695__auto____13765;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13766));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13764,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13751_SHARP_){
var temp__3695__auto____13769 = cljs.core.find.call(null,smap,p1__13751_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13769))
{var e__13770 = temp__3695__auto____13769;

return cljs.core.second.call(null,e__13770);
} else
{return p1__13751_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13787 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13780,seen){
while(true){
var vec__13781__13782 = p__13780;
var f__13783 = cljs.core.nth.call(null,vec__13781__13782,0,null);
var xs__13784 = vec__13781__13782;

var temp__3698__auto____13785 = cljs.core.seq.call(null,xs__13784);

if(cljs.core.truth_(temp__3698__auto____13785))
{var s__13786 = temp__3698__auto____13785;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13783)))
{{
var G__13795 = cljs.core.rest.call(null,s__13786);
var G__13796 = seen;
p__13780 = G__13795;
seen = G__13796;
continue;
}
} else
{return cljs.core.cons.call(null,f__13783,step.call(null,cljs.core.rest.call(null,s__13786),cljs.core.conj.call(null,seen,f__13783)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13787.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13800 = cljs.core.Vector.fromArray([]);
var s__13801 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13801)))
{{
var G__13806 = cljs.core.conj.call(null,ret__13800,cljs.core.first.call(null,s__13801));
var G__13807 = cljs.core.next.call(null,s__13801);
ret__13800 = G__13806;
s__13801 = G__13807;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13800);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13816 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13816))
{return or__3548__auto____13816;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13818 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13818 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13818 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13831 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13831))
{return or__3548__auto____13831;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13833 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13833 > -1)))
{return cljs.core.subs.call(null,x,2,i__13833);
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
var map__13840 = cljs.core.ObjMap.fromObject([],{});
var ks__13841 = cljs.core.seq.call(null,keys);
var vs__13842 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13844 = ks__13841;

if(cljs.core.truth_(and__3546__auto____13844))
{return vs__13842;
} else
{return and__3546__auto____13844;
}
})()))
{{
var G__13846 = cljs.core.assoc.call(null,map__13840,cljs.core.first.call(null,ks__13841),cljs.core.first.call(null,vs__13842));
var G__13847 = cljs.core.next.call(null,ks__13841);
var G__13848 = cljs.core.next.call(null,vs__13842);
map__13840 = G__13846;
ks__13841 = G__13847;
vs__13842 = G__13848;
continue;
}
} else
{return map__13840;
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
return cljs.core.reduce.call(null,(function (p1__13834_SHARP_,p2__13835_SHARP_){
return max_key.call(null,k,p1__13834_SHARP_,p2__13835_SHARP_);
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
var min_key__13866 = (function (k,x){
return x;
});
var min_key__13867 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13868 = (function() { 
var G__13871__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13852_SHARP_,p2__13853_SHARP_){
return min_key.call(null,k,p1__13852_SHARP_,p2__13853_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13871 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13871__delegate.call(this, k, x, y, more);
};
G__13871.cljs$lang$maxFixedArity = 3;
G__13871.cljs$lang$applyTo = (function (arglist__13874){
var k = cljs.core.first(arglist__13874);
var x = cljs.core.first(cljs.core.next(arglist__13874));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13874)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13874)));
return G__13871__delegate.call(this, k, x, y, more);
});
return G__13871;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13866.call(this,k,x);
case  3 :
return min_key__13867.call(this,k,x,y);
default:
return min_key__13868.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13868.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13894 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13895 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13879 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13879))
{var s__13880 = temp__3698__auto____13879;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13880),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13880)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13894.call(this,n,step);
case  3 :
return partition_all__13895.call(this,n,step,coll);
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
var temp__3698__auto____13910 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13910))
{var s__13911 = temp__3698__auto____13910;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13911))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13911),take_while.call(null,pred,cljs.core.rest.call(null,s__13911)));
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
var this__13932 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13934 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13988 = null;
var G__13988__13990 = (function (rng,f){
var this__13938 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13988__13991 = (function (rng,f,s){
var this__13939 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13988 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13988__13990.call(this,rng,f);
case  3 :
return G__13988__13991.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13988;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13943 = this;
var comp__13944 = (cljs.core.truth_((this__13943.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13944.call(null,this__13943.start,this__13943.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13945 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13945.end - this__13945.start) / this__13945.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13951 = this;
return this__13951.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13953 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13953.meta,(this__13953.start + this__13953.step),this__13953.end,this__13953.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13954 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13955 = this;
return (new cljs.core.Range(meta,this__13955.start,this__13955.end,this__13955.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13958 = this;
return this__13958.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14013 = null;
var G__14013__14014 = (function (rng,n){
var this__13959 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13959.start + (n * this__13959.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13964 = (this__13959.start > this__13959.end);

if(cljs.core.truth_(and__3546__auto____13964))
{return cljs.core._EQ_.call(null,this__13959.step,0);
} else
{return and__3546__auto____13964;
}
})()))
{return this__13959.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14013__14015 = (function (rng,n,not_found){
var this__13971 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13971.start + (n * this__13971.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13978 = (this__13971.start > this__13971.end);

if(cljs.core.truth_(and__3546__auto____13978))
{return cljs.core._EQ_.call(null,this__13971.step,0);
} else
{return and__3546__auto____13978;
}
})()))
{return this__13971.start;
} else
{return not_found;
}
}
});
G__14013 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14013__14014.call(this,rng,n);
case  3 :
return G__14013__14015.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14013;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13979 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13979.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14039 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14040 = (function (end){
return range.call(null,0,end,1);
});
var range__14041 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14042 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14039.call(this);
case  1 :
return range__14040.call(this,start);
case  2 :
return range__14041.call(this,start,end);
case  3 :
return range__14042.call(this,start,end,step);
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
var temp__3698__auto____14049 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14049))
{var s__14050 = temp__3698__auto____14049;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14050),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14050)));
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
var temp__3698__auto____14065 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14065))
{var s__14067 = temp__3698__auto____14065;

var fst__14068 = cljs.core.first.call(null,s__14067);
var fv__14069 = f.call(null,fst__14068);
var run__14071 = cljs.core.cons.call(null,fst__14068,cljs.core.take_while.call(null,(function (p1__14051_SHARP_){
return cljs.core._EQ_.call(null,fv__14069,f.call(null,p1__14051_SHARP_));
}),cljs.core.next.call(null,s__14067)));

return cljs.core.cons.call(null,run__14071,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14071),s__14067))));
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
var reductions__14170 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14151 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14151))
{var s__14152 = temp__3695__auto____14151;

return reductions.call(null,f,cljs.core.first.call(null,s__14152),cljs.core.rest.call(null,s__14152));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14171 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14158 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14158))
{var s__14159 = temp__3698__auto____14158;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14159)),cljs.core.rest.call(null,s__14159));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14170.call(this,f,init);
case  3 :
return reductions__14171.call(this,f,init,coll);
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
var juxt__14352 = (function (f){
return (function() {
var G__14360 = null;
var G__14360__14361 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14360__14362 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14360__14363 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14360__14364 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14360__14365 = (function() { 
var G__14376__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14376 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14376__delegate.call(this, x, y, z, args);
};
G__14376.cljs$lang$maxFixedArity = 3;
G__14376.cljs$lang$applyTo = (function (arglist__14379){
var x = cljs.core.first(arglist__14379);
var y = cljs.core.first(cljs.core.next(arglist__14379));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14379)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14379)));
return G__14376__delegate.call(this, x, y, z, args);
});
return G__14376;
})()
;
G__14360 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14360__14361.call(this);
case  1 :
return G__14360__14362.call(this,x);
case  2 :
return G__14360__14363.call(this,x,y);
case  3 :
return G__14360__14364.call(this,x,y,z);
default:
return G__14360__14365.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14360.cljs$lang$maxFixedArity = 3;
G__14360.cljs$lang$applyTo = G__14360__14365.cljs$lang$applyTo;
return G__14360;
})()
});
var juxt__14353 = (function (f,g){
return (function() {
var G__14384 = null;
var G__14384__14385 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14384__14387 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14384__14388 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14384__14389 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14384__14390 = (function() { 
var G__14402__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14402 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14402__delegate.call(this, x, y, z, args);
};
G__14402.cljs$lang$maxFixedArity = 3;
G__14402.cljs$lang$applyTo = (function (arglist__14409){
var x = cljs.core.first(arglist__14409);
var y = cljs.core.first(cljs.core.next(arglist__14409));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14409)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14409)));
return G__14402__delegate.call(this, x, y, z, args);
});
return G__14402;
})()
;
G__14384 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14384__14385.call(this);
case  1 :
return G__14384__14387.call(this,x);
case  2 :
return G__14384__14388.call(this,x,y);
case  3 :
return G__14384__14389.call(this,x,y,z);
default:
return G__14384__14390.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14384.cljs$lang$maxFixedArity = 3;
G__14384.cljs$lang$applyTo = G__14384__14390.cljs$lang$applyTo;
return G__14384;
})()
});
var juxt__14354 = (function (f,g,h){
return (function() {
var G__14413 = null;
var G__14413__14414 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14413__14415 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14413__14416 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14413__14417 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14413__14419 = (function() { 
var G__14429__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14429 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14429__delegate.call(this, x, y, z, args);
};
G__14429.cljs$lang$maxFixedArity = 3;
G__14429.cljs$lang$applyTo = (function (arglist__14439){
var x = cljs.core.first(arglist__14439);
var y = cljs.core.first(cljs.core.next(arglist__14439));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14439)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14439)));
return G__14429__delegate.call(this, x, y, z, args);
});
return G__14429;
})()
;
G__14413 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14413__14414.call(this);
case  1 :
return G__14413__14415.call(this,x);
case  2 :
return G__14413__14416.call(this,x,y);
case  3 :
return G__14413__14417.call(this,x,y,z);
default:
return G__14413__14419.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14413.cljs$lang$maxFixedArity = 3;
G__14413.cljs$lang$applyTo = G__14413__14419.cljs$lang$applyTo;
return G__14413;
})()
});
var juxt__14355 = (function() { 
var G__14440__delegate = function (f,g,h,fs){
var fs__14333 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14441 = null;
var G__14441__14442 = (function (){
return cljs.core.reduce.call(null,(function (p1__14118_SHARP_,p2__14119_SHARP_){
return cljs.core.conj.call(null,p1__14118_SHARP_,p2__14119_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14333);
});
var G__14441__14443 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14122_SHARP_,p2__14123_SHARP_){
return cljs.core.conj.call(null,p1__14122_SHARP_,p2__14123_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14333);
});
var G__14441__14444 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14127_SHARP_,p2__14131_SHARP_){
return cljs.core.conj.call(null,p1__14127_SHARP_,p2__14131_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14333);
});
var G__14441__14445 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14133_SHARP_,p2__14134_SHARP_){
return cljs.core.conj.call(null,p1__14133_SHARP_,p2__14134_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14333);
});
var G__14441__14446 = (function() { 
var G__14451__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14136_SHARP_,p2__14142_SHARP_){
return cljs.core.conj.call(null,p1__14136_SHARP_,cljs.core.apply.call(null,p2__14142_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14333);
};
var G__14451 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14451__delegate.call(this, x, y, z, args);
};
G__14451.cljs$lang$maxFixedArity = 3;
G__14451.cljs$lang$applyTo = (function (arglist__14452){
var x = cljs.core.first(arglist__14452);
var y = cljs.core.first(cljs.core.next(arglist__14452));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14452)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14452)));
return G__14451__delegate.call(this, x, y, z, args);
});
return G__14451;
})()
;
G__14441 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14441__14442.call(this);
case  1 :
return G__14441__14443.call(this,x);
case  2 :
return G__14441__14444.call(this,x,y);
case  3 :
return G__14441__14445.call(this,x,y,z);
default:
return G__14441__14446.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14441.cljs$lang$maxFixedArity = 3;
G__14441.cljs$lang$applyTo = G__14441__14446.cljs$lang$applyTo;
return G__14441;
})()
};
var G__14440 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14440__delegate.call(this, f, g, h, fs);
};
G__14440.cljs$lang$maxFixedArity = 3;
G__14440.cljs$lang$applyTo = (function (arglist__14455){
var f = cljs.core.first(arglist__14455);
var g = cljs.core.first(cljs.core.next(arglist__14455));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14455)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14455)));
return G__14440__delegate.call(this, f, g, h, fs);
});
return G__14440;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14352.call(this,f);
case  2 :
return juxt__14353.call(this,f,g);
case  3 :
return juxt__14354.call(this,f,g,h);
default:
return juxt__14355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14355.cljs$lang$applyTo;
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
var dorun__14466 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14469 = cljs.core.next.call(null,coll);
coll = G__14469;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14467 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14462 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14462))
{return (n > 0);
} else
{return and__3546__auto____14462;
}
})()))
{{
var G__14471 = (n - 1);
var G__14472 = cljs.core.next.call(null,coll);
n = G__14471;
coll = G__14472;
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
return dorun__14466.call(this,n);
case  2 :
return dorun__14467.call(this,n,coll);
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
var doall__14484 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14485 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14484.call(this,n);
case  2 :
return doall__14485.call(this,n,coll);
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
var matches__14495 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14495),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14495),1)))
{return cljs.core.first.call(null,matches__14495);
} else
{return cljs.core.vec.call(null,matches__14495);
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
var matches__14511 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14511)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14511),1)))
{return cljs.core.first.call(null,matches__14511);
} else
{return cljs.core.vec.call(null,matches__14511);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14523 = cljs.core.re_find.call(null,re,s);
var match_idx__14526 = s.search(re);
var match_str__14528 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14523))?cljs.core.first.call(null,match_data__14523):match_data__14523);
var post_match__14533 = cljs.core.subs.call(null,s,(match_idx__14526 + cljs.core.count.call(null,match_str__14528)));

if(cljs.core.truth_(match_data__14523))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14523,re_seq.call(null,re,post_match__14533));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14537_SHARP_){
return print_one.call(null,p1__14537_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14552 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14552))
{var and__3546__auto____14557 = (function (){var x__445__auto____14554 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14555 = x__445__auto____14554;

if(cljs.core.truth_(and__3546__auto____14555))
{var and__3546__auto____14556 = x__445__auto____14554.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14556))
{return cljs.core.not.call(null,x__445__auto____14554.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14556;
}
} else
{return and__3546__auto____14555;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14554);
}
})();

if(cljs.core.truth_(and__3546__auto____14557))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14557;
}
} else
{return and__3546__auto____14552;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14559 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14560 = x__445__auto____14559;

if(cljs.core.truth_(and__3546__auto____14560))
{var and__3546__auto____14562 = x__445__auto____14559.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14562))
{return cljs.core.not.call(null,x__445__auto____14559.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14562;
}
} else
{return and__3546__auto____14560;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14559);
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
var first_obj__14566 = cljs.core.first.call(null,objs);
var sb__14568 = (new goog.string.StringBuffer());

var G__14570__14572 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14570__14572))
{var obj__14574 = cljs.core.first.call(null,G__14570__14572);
var G__14570__14575 = G__14570__14572;

while(true){
if(cljs.core.truth_((obj__14574 === first_obj__14566)))
{} else
{sb__14568.append(" ");
}
var G__14576__14577 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14574,opts));

if(cljs.core.truth_(G__14576__14577))
{var string__14578 = cljs.core.first.call(null,G__14576__14577);
var G__14576__14579 = G__14576__14577;

while(true){
sb__14568.append(string__14578);
var temp__3698__auto____14580 = cljs.core.next.call(null,G__14576__14579);

if(cljs.core.truth_(temp__3698__auto____14580))
{var G__14576__14581 = temp__3698__auto____14580;

{
var G__14587 = cljs.core.first.call(null,G__14576__14581);
var G__14588 = G__14576__14581;
string__14578 = G__14587;
G__14576__14579 = G__14588;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14583 = cljs.core.next.call(null,G__14570__14575);

if(cljs.core.truth_(temp__3698__auto____14583))
{var G__14570__14584 = temp__3698__auto____14583;

{
var G__14590 = cljs.core.first.call(null,G__14570__14584);
var G__14591 = G__14570__14584;
obj__14574 = G__14590;
G__14570__14575 = G__14591;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14568);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14593 = cljs.core.first.call(null,objs);

var G__14594__14595 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14594__14595))
{var obj__14596 = cljs.core.first.call(null,G__14594__14595);
var G__14594__14597 = G__14594__14595;

while(true){
if(cljs.core.truth_((obj__14596 === first_obj__14593)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14598__14599 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14596,opts));

if(cljs.core.truth_(G__14598__14599))
{var string__14601 = cljs.core.first.call(null,G__14598__14599);
var G__14598__14623 = G__14598__14599;

while(true){
cljs.core.string_print.call(null,string__14601);
var temp__3698__auto____14626 = cljs.core.next.call(null,G__14598__14623);

if(cljs.core.truth_(temp__3698__auto____14626))
{var G__14598__14627 = temp__3698__auto____14626;

{
var G__14635 = cljs.core.first.call(null,G__14598__14627);
var G__14636 = G__14598__14627;
string__14601 = G__14635;
G__14598__14623 = G__14636;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14630 = cljs.core.next.call(null,G__14594__14597);

if(cljs.core.truth_(temp__3698__auto____14630))
{var G__14594__14633 = temp__3698__auto____14630;

{
var G__14639 = cljs.core.first.call(null,G__14594__14633);
var G__14640 = G__14594__14633;
obj__14596 = G__14639;
G__14594__14597 = G__14640;
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
pr_str.cljs$lang$applyTo = (function (arglist__14690){
var objs = cljs.core.seq( arglist__14690 );;
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
pr.cljs$lang$applyTo = (function (arglist__14695){
var objs = cljs.core.seq( arglist__14695 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14697){
var objs = cljs.core.seq( arglist__14697 );;
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
println.cljs$lang$applyTo = (function (arglist__14701){
var objs = cljs.core.seq( arglist__14701 );;
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
prn.cljs$lang$applyTo = (function (arglist__14710){
var objs = cljs.core.seq( arglist__14710 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14724 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14724,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14737 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14737))
{var nspc__14739 = temp__3698__auto____14737;

return cljs.core.str.call(null,nspc__14739,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14750 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14750))
{var nspc__14753 = temp__3698__auto____14750;

return cljs.core.str.call(null,nspc__14753,"/");
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
var pr_pair__14770 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14770,"{",", ","}",opts,coll);
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
var this__14807 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14808 = this;
var G__14809__14810 = cljs.core.seq.call(null,this__14808.watches);

if(cljs.core.truth_(G__14809__14810))
{var G__14813__14815 = cljs.core.first.call(null,G__14809__14810);
var vec__14814__14816 = G__14813__14815;
var key__14817 = cljs.core.nth.call(null,vec__14814__14816,0,null);
var f__14818 = cljs.core.nth.call(null,vec__14814__14816,1,null);
var G__14809__14819 = G__14809__14810;

var G__14813__14820 = G__14813__14815;
var G__14809__14821 = G__14809__14819;

while(true){
var vec__14822__14823 = G__14813__14820;
var key__14824 = cljs.core.nth.call(null,vec__14822__14823,0,null);
var f__14825 = cljs.core.nth.call(null,vec__14822__14823,1,null);
var G__14809__14826 = G__14809__14821;

f__14825.call(null,key__14824,this$,oldval,newval);
var temp__3698__auto____14827 = cljs.core.next.call(null,G__14809__14826);

if(cljs.core.truth_(temp__3698__auto____14827))
{var G__14809__14828 = temp__3698__auto____14827;

{
var G__14835 = cljs.core.first.call(null,G__14809__14828);
var G__14836 = G__14809__14828;
G__14813__14820 = G__14835;
G__14809__14821 = G__14836;
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
var this__14829 = this;
return this$.watches = cljs.core.assoc.call(null,this__14829.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14830 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14830.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14831 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14831.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14832 = this;
return this__14832.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14833 = this;
return this__14833.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14834 = this;
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
var atom__14865 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14866 = (function() { 
var G__14869__delegate = function (x,p__14841){
var map__14843__14845 = p__14841;
var map__14843__14847 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14843__14845))?cljs.core.apply.call(null,cljs.core.hash_map,map__14843__14845):map__14843__14845);
var validator__14848 = cljs.core.get.call(null,map__14843__14847,"﷐'validator");
var meta__14849 = cljs.core.get.call(null,map__14843__14847,"﷐'meta");

return (new cljs.core.Atom(x,meta__14849,validator__14848,null));
};
var G__14869 = function (x,var_args){
var p__14841 = null;
if (goog.isDef(var_args)) {
  p__14841 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14869__delegate.call(this, x, p__14841);
};
G__14869.cljs$lang$maxFixedArity = 1;
G__14869.cljs$lang$applyTo = (function (arglist__14872){
var x = cljs.core.first(arglist__14872);
var p__14841 = cljs.core.rest(arglist__14872);
return G__14869__delegate.call(this, x, p__14841);
});
return G__14869;
})()
;
atom = function(x,var_args){
var p__14841 = var_args;
switch(arguments.length){
case  1 :
return atom__14865.call(this,x);
default:
return atom__14866.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14866.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14881 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14881))
{var validate__14883 = temp__3698__auto____14881;

if(cljs.core.truth_(validate__14883.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14885 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14885,new_value);
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
var swap_BANG___14897 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14898 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14899 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14900 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14901 = (function() { 
var G__14918__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14918 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14918__delegate.call(this, a, f, x, y, z, more);
};
G__14918.cljs$lang$maxFixedArity = 5;
G__14918.cljs$lang$applyTo = (function (arglist__14919){
var a = cljs.core.first(arglist__14919);
var f = cljs.core.first(cljs.core.next(arglist__14919));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14919)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14919))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14919)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14919)))));
return G__14918__delegate.call(this, a, f, x, y, z, more);
});
return G__14918;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14897.call(this,a,f);
case  3 :
return swap_BANG___14898.call(this,a,f,x);
case  4 :
return swap_BANG___14899.call(this,a,f,x,y);
case  5 :
return swap_BANG___14900.call(this,a,f,x,y,z);
default:
return swap_BANG___14901.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14901.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14934){
var iref = cljs.core.first(arglist__14934);
var f = cljs.core.first(cljs.core.next(arglist__14934));
var args = cljs.core.rest(cljs.core.next(arglist__14934));
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
var gensym__14949 = (function (){
return gensym.call(null,"G__");
});
var gensym__14950 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14949.call(this);
case  1 :
return gensym__14950.call(this,prefix_string);
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
var this__14958 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14958.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14961 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14961.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14961.state,this__14961.f);
}
return cljs.core.deref.call(null,this__14961.state);
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
delay.cljs$lang$applyTo = (function (arglist__14967){
var body = cljs.core.seq( arglist__14967 );;
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
var map__15028__15030 = options;
var map__15028__15031 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15028__15030))?cljs.core.apply.call(null,cljs.core.hash_map,map__15028__15030):map__15028__15030);
var keywordize_keys__15032 = cljs.core.get.call(null,map__15028__15031,"﷐'keywordize-keys");
var keyfn__15033 = (cljs.core.truth_(keywordize_keys__15032)?cljs.core.keyword:cljs.core.str);
var f__15047 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15046 = (function iter__15037(s__15038){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15038__15041 = s__15038;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15038__15041)))
{var k__15045 = cljs.core.first.call(null,s__15038__15041);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15033.call(null,k__15045),thisfn.call(null,(x[k__15045]))]),iter__15037.call(null,cljs.core.rest.call(null,s__15038__15041)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15046.call(null,cljs.core.js_keys.call(null,x));
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

return f__15047.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15059){
var x = cljs.core.first(arglist__15059);
var options = cljs.core.rest(arglist__15059);
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
var mem__15060 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15067__delegate = function (args){
var temp__3695__auto____15064 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15060),args);

if(cljs.core.truth_(temp__3695__auto____15064))
{var v__15065 = temp__3695__auto____15064;

return v__15065;
} else
{var ret__15066 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15060,cljs.core.assoc,args,ret__15066);
return ret__15066;
}
};
var G__15067 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15067__delegate.call(this, args);
};
G__15067.cljs$lang$maxFixedArity = 0;
G__15067.cljs$lang$applyTo = (function (arglist__15068){
var args = cljs.core.seq( arglist__15068 );;
return G__15067__delegate.call(this, args);
});
return G__15067;
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
var trampoline__15072 = (function (f){
while(true){
var ret__15069 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15069)))
{{
var G__15075 = ret__15069;
f = G__15075;
continue;
}
} else
{return ret__15069;
}
break;
}
});
var trampoline__15073 = (function() { 
var G__15076__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15076 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15076__delegate.call(this, f, args);
};
G__15076.cljs$lang$maxFixedArity = 1;
G__15076.cljs$lang$applyTo = (function (arglist__15078){
var f = cljs.core.first(arglist__15078);
var args = cljs.core.rest(arglist__15078);
return G__15076__delegate.call(this, f, args);
});
return G__15076;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15072.call(this,f);
default:
return trampoline__15073.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15073.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15082 = (function (){
return rand.call(null,1);
});
var rand__15083 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15082.call(this);
case  1 :
return rand__15083.call(this,n);
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
var k__15099 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15099,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15099,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15132 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15134 = (function (h,child,parent){
var or__3548__auto____15111 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15111))
{return or__3548__auto____15111;
} else
{var or__3548__auto____15115 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15115))
{return or__3548__auto____15115;
} else
{var and__3546__auto____15116 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15116))
{var and__3546__auto____15120 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15120))
{var and__3546__auto____15121 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15121))
{var ret__15123 = true;
var i__15124 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15127 = cljs.core.not.call(null,ret__15123);

if(cljs.core.truth_(or__3548__auto____15127))
{return or__3548__auto____15127;
} else
{return cljs.core._EQ_.call(null,i__15124,cljs.core.count.call(null,parent));
}
})()))
{return ret__15123;
} else
{{
var G__15140 = isa_QMARK_.call(null,h,child.call(null,i__15124),parent.call(null,i__15124));
var G__15141 = (i__15124 + 1);
ret__15123 = G__15140;
i__15124 = G__15141;
continue;
}
}
break;
}
} else
{return and__3546__auto____15121;
}
} else
{return and__3546__auto____15120;
}
} else
{return and__3546__auto____15116;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15132.call(this,h,child);
case  3 :
return isa_QMARK___15134.call(this,h,child,parent);
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
var parents__15150 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15151 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15150.call(this,h);
case  2 :
return parents__15151.call(this,h,tag);
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
var ancestors__15159 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15160 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15159.call(this,h);
case  2 :
return ancestors__15160.call(this,h,tag);
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
var descendants__15169 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15170 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15169.call(this,h);
case  2 :
return descendants__15170.call(this,h,tag);
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
var derive__15197 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15198 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15187 = "﷐'parents".call(null,h);
var td__15189 = "﷐'descendants".call(null,h);
var ta__15192 = "﷐'ancestors".call(null,h);
var tf__15193 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15196 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15187.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15192.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15192.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15187,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15193.call(null,"﷐'ancestors".call(null,h),tag,td__15189,parent,ta__15192),"﷐'descendants":tf__15193.call(null,"﷐'descendants".call(null,h),parent,ta__15192,tag,td__15189)});
})());

if(cljs.core.truth_(or__3548__auto____15196))
{return or__3548__auto____15196;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15197.call(this,h,tag);
case  3 :
return derive__15198.call(this,h,tag,parent);
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
var underive__15223 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15224 = (function (h,tag,parent){
var parentMap__15216 = "﷐'parents".call(null,h);
var childsParents__15218 = (cljs.core.truth_(parentMap__15216.call(null,tag))?cljs.core.disj.call(null,parentMap__15216.call(null,tag),parent):cljs.core.set([]));
var newParents__15220 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15218))?cljs.core.assoc.call(null,parentMap__15216,tag,childsParents__15218):cljs.core.dissoc.call(null,parentMap__15216,tag));
var deriv_seq__15221 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15180_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15180_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15180_SHARP_),cljs.core.second.call(null,p1__15180_SHARP_)));
}),cljs.core.seq.call(null,newParents__15220)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15216.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15182_SHARP_,p2__15183_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15182_SHARP_,p2__15183_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15221));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15223.call(this,h,tag);
case  3 :
return underive__15224.call(this,h,tag,parent);
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
var xprefs__15240 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15245 = (cljs.core.truth_((function (){var and__3546__auto____15241 = xprefs__15240;

if(cljs.core.truth_(and__3546__auto____15241))
{return xprefs__15240.call(null,y);
} else
{return and__3546__auto____15241;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15245))
{return or__3548__auto____15245;
} else
{var or__3548__auto____15248 = (function (){var ps__15247 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15247) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15247),prefer_table)))
{} else
{}
{
var G__15259 = cljs.core.rest.call(null,ps__15247);
ps__15247 = G__15259;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15248))
{return or__3548__auto____15248;
} else
{var or__3548__auto____15256 = (function (){var ps__15249 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15249) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15249),y,prefer_table)))
{} else
{}
{
var G__15263 = cljs.core.rest.call(null,ps__15249);
ps__15249 = G__15263;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15256))
{return or__3548__auto____15256;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15267 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15267))
{return or__3548__auto____15267;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15329 = cljs.core.reduce.call(null,(function (be,p__15271){
var vec__15272__15273 = p__15271;
var k__15274 = cljs.core.nth.call(null,vec__15272__15273,0,null);
var ___15275 = cljs.core.nth.call(null,vec__15272__15273,1,null);
var e__15276 = vec__15272__15273;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15274)))
{var be2__15328 = (cljs.core.truth_((function (){var or__3548__auto____15326 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15326))
{return or__3548__auto____15326;
} else
{return cljs.core.dominates.call(null,k__15274,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15276:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15328),k__15274,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15274," and ",cljs.core.first.call(null,be2__15328),", and neither is preferred")));
}
return be2__15328;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15329))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15329));
return cljs.core.second.call(null,best_entry__15329);
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
if(cljs.core.truth_((function (){var and__3546__auto____15333 = mf;

if(cljs.core.truth_(and__3546__auto____15333))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15333;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15334 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15334))
{return or__3548__auto____15334;
} else
{var or__3548__auto____15335 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15335))
{return or__3548__auto____15335;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15339 = mf;

if(cljs.core.truth_(and__3546__auto____15339))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15339;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15340 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15340))
{return or__3548__auto____15340;
} else
{var or__3548__auto____15341 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15341))
{return or__3548__auto____15341;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15342 = mf;

if(cljs.core.truth_(and__3546__auto____15342))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15342;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15346 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15346))
{return or__3548__auto____15346;
} else
{var or__3548__auto____15347 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15347))
{return or__3548__auto____15347;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15348 = mf;

if(cljs.core.truth_(and__3546__auto____15348))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15348;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15349 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15349))
{return or__3548__auto____15349;
} else
{var or__3548__auto____15350 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15350))
{return or__3548__auto____15350;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15354 = mf;

if(cljs.core.truth_(and__3546__auto____15354))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15354;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15356 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15356))
{return or__3548__auto____15356;
} else
{var or__3548__auto____15359 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15359))
{return or__3548__auto____15359;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15360 = mf;

if(cljs.core.truth_(and__3546__auto____15360))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15360;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15361 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15361))
{return or__3548__auto____15361;
} else
{var or__3548__auto____15365 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15365))
{return or__3548__auto____15365;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15480 = mf;

if(cljs.core.truth_(and__3546__auto____15480))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15480;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15483 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15483))
{return or__3548__auto____15483;
} else
{var or__3548__auto____15485 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15485))
{return or__3548__auto____15485;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15488 = mf;

if(cljs.core.truth_(and__3546__auto____15488))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15488;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15490 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15490))
{return or__3548__auto____15490;
} else
{var or__3548__auto____15492 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15492))
{return or__3548__auto____15492;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15551 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15553 = cljs.core._get_method.call(null,mf,dispatch_val__15551);

if(cljs.core.truth_(target_fn__15553))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15551)));
}
return cljs.core.apply.call(null,target_fn__15553,args);
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
var this__15559 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15561 = this;
cljs.core.swap_BANG_.call(null,this__15561.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15561.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15561.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15561.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15564 = this;
cljs.core.swap_BANG_.call(null,this__15564.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15564.method_cache,this__15564.method_table,this__15564.cached_hierarchy,this__15564.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15565 = this;
cljs.core.swap_BANG_.call(null,this__15565.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15565.method_cache,this__15565.method_table,this__15565.cached_hierarchy,this__15565.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15566 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15566.cached_hierarchy),cljs.core.deref.call(null,this__15566.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15566.method_cache,this__15566.method_table,this__15566.cached_hierarchy,this__15566.hierarchy);
}
var temp__3695__auto____15567 = cljs.core.deref.call(null,this__15566.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15567))
{var target_fn__15568 = temp__3695__auto____15567;

return target_fn__15568;
} else
{var temp__3695__auto____15570 = cljs.core.find_and_cache_best_method.call(null,this__15566.name,dispatch_val,this__15566.hierarchy,this__15566.method_table,this__15566.prefer_table,this__15566.method_cache,this__15566.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15570))
{var target_fn__15571 = temp__3695__auto____15570;

return target_fn__15571;
} else
{return cljs.core.deref.call(null,this__15566.method_table).call(null,this__15566.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15573 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15573.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15573.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15573.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15573.method_cache,this__15573.method_table,this__15573.cached_hierarchy,this__15573.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15579 = this;
return cljs.core.deref.call(null,this__15579.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15581 = this;
return cljs.core.deref.call(null,this__15581.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15583 = this;
return cljs.core.do_dispatch.call(null,mf,this__15583.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15608__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15608 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15608__delegate.call(this, _, args);
};
G__15608.cljs$lang$maxFixedArity = 1;
G__15608.cljs$lang$applyTo = (function (arglist__15609){
var _ = cljs.core.first(arglist__15609);
var args = cljs.core.rest(arglist__15609);
return G__15608__delegate.call(this, _, args);
});
return G__15608;
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
