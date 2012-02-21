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
var or__3548__auto____7340 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7340))
{return or__3548__auto____7340;
} else
{var or__3548__auto____7341 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7341))
{return or__3548__auto____7341;
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
var _invoke__7625 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7355 = this$;

if(cljs.core.truth_(and__3546__auto____7355))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7355;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7358 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7358))
{return or__3548__auto____7358;
} else
{var or__3548__auto____7360 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7360))
{return or__3548__auto____7360;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7631 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7363 = this$;

if(cljs.core.truth_(and__3546__auto____7363))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7363;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7368 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7368))
{return or__3548__auto____7368;
} else
{var or__3548__auto____7369 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7369))
{return or__3548__auto____7369;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7634 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7373 = this$;

if(cljs.core.truth_(and__3546__auto____7373))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7373;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7377 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7377))
{return or__3548__auto____7377;
} else
{var or__3548__auto____7378 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7378))
{return or__3548__auto____7378;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7637 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7382 = this$;

if(cljs.core.truth_(and__3546__auto____7382))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7382;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7385 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7385))
{return or__3548__auto____7385;
} else
{var or__3548__auto____7387 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7387))
{return or__3548__auto____7387;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7638 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7391 = this$;

if(cljs.core.truth_(and__3546__auto____7391))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7391;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7394 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7394))
{return or__3548__auto____7394;
} else
{var or__3548__auto____7398 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7398))
{return or__3548__auto____7398;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7401 = this$;

if(cljs.core.truth_(and__3546__auto____7401))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7401;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7406 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7406))
{return or__3548__auto____7406;
} else
{var or__3548__auto____7407 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7407))
{return or__3548__auto____7407;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7641 = (function (this$,a,b,c,d,e,f){
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
var _invoke__7643 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7417 = this$;

if(cljs.core.truth_(and__3546__auto____7417))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7417;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7419 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7419))
{return or__3548__auto____7419;
} else
{var or__3548__auto____7422 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7422))
{return or__3548__auto____7422;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7645 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7425 = this$;

if(cljs.core.truth_(and__3546__auto____7425))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7425;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7427 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7427))
{return or__3548__auto____7427;
} else
{var or__3548__auto____7431 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7431))
{return or__3548__auto____7431;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7647 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7434 = this$;

if(cljs.core.truth_(and__3546__auto____7434))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7434;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7438 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7438))
{return or__3548__auto____7438;
} else
{var or__3548__auto____7442 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7442))
{return or__3548__auto____7442;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7650 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7446 = this$;

if(cljs.core.truth_(and__3546__auto____7446))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7446;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7652 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7458 = this$;

if(cljs.core.truth_(and__3546__auto____7458))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7458;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7462 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7462))
{return or__3548__auto____7462;
} else
{var or__3548__auto____7465 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7465))
{return or__3548__auto____7465;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7654 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7470 = this$;

if(cljs.core.truth_(and__3546__auto____7470))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7470;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7475 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7475))
{return or__3548__auto____7475;
} else
{var or__3548__auto____7478 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7478))
{return or__3548__auto____7478;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7656 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7482 = this$;

if(cljs.core.truth_(and__3546__auto____7482))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7482;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7487 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7487))
{return or__3548__auto____7487;
} else
{var or__3548__auto____7490 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7490))
{return or__3548__auto____7490;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7658 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7494 = this$;

if(cljs.core.truth_(and__3546__auto____7494))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7494;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7498 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7498))
{return or__3548__auto____7498;
} else
{var or__3548__auto____7500 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7500))
{return or__3548__auto____7500;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7660 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7502 = this$;

if(cljs.core.truth_(and__3546__auto____7502))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7502;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7507 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7507))
{return or__3548__auto____7507;
} else
{var or__3548__auto____7508 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7508))
{return or__3548__auto____7508;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7667 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7511 = this$;

if(cljs.core.truth_(and__3546__auto____7511))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7511;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7669 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7522 = this$;

if(cljs.core.truth_(and__3546__auto____7522))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7522;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7671 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7533 = this$;

if(cljs.core.truth_(and__3546__auto____7533))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7533;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7536 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7536))
{return or__3548__auto____7536;
} else
{var or__3548__auto____7538 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7538))
{return or__3548__auto____7538;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7673 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7542 = this$;

if(cljs.core.truth_(and__3546__auto____7542))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7542;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7546 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7546))
{return or__3548__auto____7546;
} else
{var or__3548__auto____7548 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7548))
{return or__3548__auto____7548;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7675 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7552 = this$;

if(cljs.core.truth_(and__3546__auto____7552))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7552;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7556 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7556))
{return or__3548__auto____7556;
} else
{var or__3548__auto____7557 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7557))
{return or__3548__auto____7557;
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
return _invoke__7625.call(this,this$);
case  2 :
return _invoke__7631.call(this,this$,a);
case  3 :
return _invoke__7634.call(this,this$,a,b);
case  4 :
return _invoke__7637.call(this,this$,a,b,c);
case  5 :
return _invoke__7638.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7639.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7641.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7643.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7645.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7647.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7650.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7652.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7654.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7656.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7658.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7660.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7667.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7669.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7671.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7673.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7675.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7801 = coll;

if(cljs.core.truth_(and__3546__auto____7801))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7801;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7802 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7802))
{return or__3548__auto____7802;
} else
{var or__3548__auto____7804 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7808 = coll;

if(cljs.core.truth_(and__3546__auto____7808))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7808;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7814 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7814))
{return or__3548__auto____7814;
} else
{var or__3548__auto____7815 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7815))
{return or__3548__auto____7815;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7819 = coll;

if(cljs.core.truth_(and__3546__auto____7819))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7819;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7821 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7821))
{return or__3548__auto____7821;
} else
{var or__3548__auto____7823 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7823))
{return or__3548__auto____7823;
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
var _nth__7841 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7829 = coll;

if(cljs.core.truth_(and__3546__auto____7829))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7829;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7831 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7831))
{return or__3548__auto____7831;
} else
{var or__3548__auto____7833 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7833))
{return or__3548__auto____7833;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7842 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7835 = coll;

if(cljs.core.truth_(and__3546__auto____7835))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7835;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7839 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7839))
{return or__3548__auto____7839;
} else
{var or__3548__auto____7840 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7840))
{return or__3548__auto____7840;
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
return _nth__7841.call(this,coll,n);
case  3 :
return _nth__7842.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7846 = coll;

if(cljs.core.truth_(and__3546__auto____7846))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7846;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7848 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7848))
{return or__3548__auto____7848;
} else
{var or__3548__auto____7849 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7849))
{return or__3548__auto____7849;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7853 = coll;

if(cljs.core.truth_(and__3546__auto____7853))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7853;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7856 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7856))
{return or__3548__auto____7856;
} else
{var or__3548__auto____7857 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7857))
{return or__3548__auto____7857;
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
var _lookup__7897 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7858 = o;

if(cljs.core.truth_(and__3546__auto____7858))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7858;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7860 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{var or__3548__auto____7863 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7863))
{return or__3548__auto____7863;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7899 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7885 = o;

if(cljs.core.truth_(and__3546__auto____7885))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7885;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7892 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7892))
{return or__3548__auto____7892;
} else
{var or__3548__auto____7894 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7894))
{return or__3548__auto____7894;
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
return _lookup__7897.call(this,o,k);
case  3 :
return _lookup__7899.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7911 = coll;

if(cljs.core.truth_(and__3546__auto____7911))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7911;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7928 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7928))
{return or__3548__auto____7928;
} else
{var or__3548__auto____7929 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7929))
{return or__3548__auto____7929;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7930 = coll;

if(cljs.core.truth_(and__3546__auto____7930))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7930;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7932 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7932))
{return or__3548__auto____7932;
} else
{var or__3548__auto____7934 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7934))
{return or__3548__auto____7934;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7945 = coll;

if(cljs.core.truth_(and__3546__auto____7945))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7945;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7946 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7946))
{return or__3548__auto____7946;
} else
{var or__3548__auto____7947 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7947))
{return or__3548__auto____7947;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7954 = coll;

if(cljs.core.truth_(and__3546__auto____7954))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7954;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7956 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7956))
{return or__3548__auto____7956;
} else
{var or__3548__auto____7957 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7957))
{return or__3548__auto____7957;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7964 = coll;

if(cljs.core.truth_(and__3546__auto____7964))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7964;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7968 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7968))
{return or__3548__auto____7968;
} else
{var or__3548__auto____7969 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7969))
{return or__3548__auto____7969;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7972 = coll;

if(cljs.core.truth_(and__3546__auto____7972))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7972;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7977 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7977))
{return or__3548__auto____7977;
} else
{var or__3548__auto____7978 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7978))
{return or__3548__auto____7978;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7996 = coll;

if(cljs.core.truth_(and__3546__auto____7996))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7996;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7998 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
} else
{var or__3548__auto____7999 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7999))
{return or__3548__auto____7999;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8005 = o;

if(cljs.core.truth_(and__3546__auto____8005))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8005;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8007 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8007))
{return or__3548__auto____8007;
} else
{var or__3548__auto____8008 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8008))
{return or__3548__auto____8008;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8015 = o;

if(cljs.core.truth_(and__3546__auto____8015))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8015;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8016 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8016))
{return or__3548__auto____8016;
} else
{var or__3548__auto____8017 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8017))
{return or__3548__auto____8017;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8024 = o;

if(cljs.core.truth_(and__3546__auto____8024))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8024;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8039 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8039))
{return or__3548__auto____8039;
} else
{var or__3548__auto____8042 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8042))
{return or__3548__auto____8042;
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
{return (function (){var or__3548__auto____8048 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8048))
{return or__3548__auto____8048;
} else
{var or__3548__auto____8050 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8050))
{return or__3548__auto____8050;
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
var _reduce__8127 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8057 = coll;

if(cljs.core.truth_(and__3546__auto____8057))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8057;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8061 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8061))
{return or__3548__auto____8061;
} else
{var or__3548__auto____8062 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8062))
{return or__3548__auto____8062;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8128 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8063 = coll;

if(cljs.core.truth_(and__3546__auto____8063))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8063;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8065 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8065))
{return or__3548__auto____8065;
} else
{var or__3548__auto____8066 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8066))
{return or__3548__auto____8066;
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
return _reduce__8127.call(this,coll,f);
case  3 :
return _reduce__8128.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8136 = o;

if(cljs.core.truth_(and__3546__auto____8136))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8136;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8147 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8147))
{return or__3548__auto____8147;
} else
{var or__3548__auto____8148 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8148))
{return or__3548__auto____8148;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8153 = o;

if(cljs.core.truth_(and__3546__auto____8153))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8153;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8154 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8154))
{return or__3548__auto____8154;
} else
{var or__3548__auto____8155 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8155))
{return or__3548__auto____8155;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8159 = o;

if(cljs.core.truth_(and__3546__auto____8159))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8159;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8161 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8161))
{return or__3548__auto____8161;
} else
{var or__3548__auto____8162 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8162))
{return or__3548__auto____8162;
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
if(cljs.core.truth_((function (){var and__3546__auto____8195 = o;

if(cljs.core.truth_(and__3546__auto____8195))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8195;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8196 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8196))
{return or__3548__auto____8196;
} else
{var or__3548__auto____8197 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8197))
{return or__3548__auto____8197;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8198 = d;

if(cljs.core.truth_(and__3546__auto____8198))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8198;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8200 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8200))
{return or__3548__auto____8200;
} else
{var or__3548__auto____8201 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8201))
{return or__3548__auto____8201;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8207 = this$;

if(cljs.core.truth_(and__3546__auto____8207))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8207;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8210 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8210))
{return or__3548__auto____8210;
} else
{var or__3548__auto____8212 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8212))
{return or__3548__auto____8212;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8214 = this$;

if(cljs.core.truth_(and__3546__auto____8214))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8214;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8216 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8216))
{return or__3548__auto____8216;
} else
{var or__3548__auto____8218 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8218))
{return or__3548__auto____8218;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8219 = this$;

if(cljs.core.truth_(and__3546__auto____8219))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8219;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8220 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8220))
{return or__3548__auto____8220;
} else
{var or__3548__auto____8221 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8221))
{return or__3548__auto____8221;
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
var G__8284 = null;
var G__8284__8285 = (function (o,k){
return null;
});
var G__8284__8286 = (function (o,k,not_found){
return not_found;
});
G__8284 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8284__8285.call(this,o,k);
case  3 :
return G__8284__8286.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8284;
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
var G__8291 = null;
var G__8291__8292 = (function (_,f){
return f.call(null);
});
var G__8291__8293 = (function (_,f,start){
return start;
});
G__8291 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8291__8292.call(this,_,f);
case  3 :
return G__8291__8293.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8291;
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
var G__8297 = null;
var G__8297__8298 = (function (_,n){
return null;
});
var G__8297__8299 = (function (_,n,not_found){
return not_found;
});
G__8297 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8297__8298.call(this,_,n);
case  3 :
return G__8297__8299.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8297;
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
var ci_reduce__8331 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8325 = cljs.core._nth.call(null,cicoll,0);
var n__8326 = 1;

while(true){
if(cljs.core.truth_((n__8326 < cljs.core._count.call(null,cicoll))))
{{
var G__8335 = f.call(null,val__8325,cljs.core._nth.call(null,cicoll,n__8326));
var G__8336 = (n__8326 + 1);
val__8325 = G__8335;
n__8326 = G__8336;
continue;
}
} else
{return val__8325;
}
break;
}
}
});
var ci_reduce__8332 = (function (cicoll,f,val){
var val__8327 = val;
var n__8328 = 0;

while(true){
if(cljs.core.truth_((n__8328 < cljs.core._count.call(null,cicoll))))
{{
var G__8337 = f.call(null,val__8327,cljs.core._nth.call(null,cicoll,n__8328));
var G__8338 = (n__8328 + 1);
val__8327 = G__8337;
n__8328 = G__8338;
continue;
}
} else
{return val__8327;
}
break;
}
});
var ci_reduce__8333 = (function (cicoll,f,val,idx){
var val__8329 = val;
var n__8330 = idx;

while(true){
if(cljs.core.truth_((n__8330 < cljs.core._count.call(null,cicoll))))
{{
var G__8339 = f.call(null,val__8329,cljs.core._nth.call(null,cicoll,n__8330));
var G__8340 = (n__8330 + 1);
val__8329 = G__8339;
n__8330 = G__8340;
continue;
}
} else
{return val__8329;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8331.call(this,cicoll,f);
case  3 :
return ci_reduce__8332.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8333.call(this,cicoll,f,val,idx);
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
var this__8341 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8444 = null;
var G__8444__8445 = (function (_,f){
var this__8342 = this;
return cljs.core.ci_reduce.call(null,this__8342.a,f,(this__8342.a[this__8342.i]),(this__8342.i + 1));
});
var G__8444__8446 = (function (_,f,start){
var this__8343 = this;
return cljs.core.ci_reduce.call(null,this__8343.a,f,start,this__8343.i);
});
G__8444 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8444__8445.call(this,_,f);
case  3 :
return G__8444__8446.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8444;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8406 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8410 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8460 = null;
var G__8460__8461 = (function (coll,n){
var this__8414 = this;
var i__8416 = (n + this__8414.i);

if(cljs.core.truth_((i__8416 < this__8414.a.length)))
{return (this__8414.a[i__8416]);
} else
{return null;
}
});
var G__8460__8462 = (function (coll,n,not_found){
var this__8420 = this;
var i__8422 = (n + this__8420.i);

if(cljs.core.truth_((i__8422 < this__8420.a.length)))
{return (this__8420.a[i__8422]);
} else
{return not_found;
}
});
G__8460 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8460__8461.call(this,coll,n);
case  3 :
return G__8460__8462.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8460;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8426 = this;
return (this__8426.a.length - this__8426.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8428 = this;
return (this__8428.a[this__8428.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8429 = this;
if(cljs.core.truth_(((this__8429.i + 1) < this__8429.a.length)))
{return (new cljs.core.IndexedSeq(this__8429.a,(this__8429.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8439 = this;
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
var G__8470 = null;
var G__8470__8471 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8470__8472 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8470 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8470__8471.call(this,array,f);
case  3 :
return G__8470__8472.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8470;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8478 = null;
var G__8478__8479 = (function (array,k){
return (array[k]);
});
var G__8478__8480 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8478 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8478__8479.call(this,array,k);
case  3 :
return G__8478__8480.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8478;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8486 = null;
var G__8486__8487 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8486__8488 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8486 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8486__8487.call(this,array,n);
case  3 :
return G__8486__8488.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8486;
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
var temp__3698__auto____8504 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8504))
{var s__8505 = temp__3698__auto____8504;

return cljs.core._first.call(null,s__8505);
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
var G__8531 = cljs.core.next.call(null,s);
s = G__8531;
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
var s__8532 = cljs.core.seq.call(null,x);
var n__8533 = 0;

while(true){
if(cljs.core.truth_(s__8532))
{{
var G__8534 = cljs.core.next.call(null,s__8532);
var G__8535 = (n__8533 + 1);
s__8532 = G__8534;
n__8533 = G__8535;
continue;
}
} else
{return n__8533;
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
var conj__8536 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8537 = (function() { 
var G__8539__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8540 = conj.call(null,coll,x);
var G__8541 = cljs.core.first.call(null,xs);
var G__8542 = cljs.core.next.call(null,xs);
coll = G__8540;
x = G__8541;
xs = G__8542;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8539 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8539__delegate.call(this, coll, x, xs);
};
G__8539.cljs$lang$maxFixedArity = 2;
G__8539.cljs$lang$applyTo = (function (arglist__8543){
var coll = cljs.core.first(arglist__8543);
var x = cljs.core.first(cljs.core.next(arglist__8543));
var xs = cljs.core.rest(cljs.core.next(arglist__8543));
return G__8539__delegate.call(this, coll, x, xs);
});
return G__8539;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8536.call(this,coll,x);
default:
return conj__8537.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8537.cljs$lang$applyTo;
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
var nth__8569 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8570 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8569.call(this,coll,n);
case  3 :
return nth__8570.call(this,coll,n,not_found);
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
var get__8577 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8578 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8577.call(this,o,k);
case  3 :
return get__8578.call(this,o,k,not_found);
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
var assoc__8585 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8586 = (function() { 
var G__8590__delegate = function (coll,k,v,kvs){
while(true){
var ret__8580 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8591 = ret__8580;
var G__8592 = cljs.core.first.call(null,kvs);
var G__8593 = cljs.core.second.call(null,kvs);
var G__8595 = cljs.core.nnext.call(null,kvs);
coll = G__8591;
k = G__8592;
v = G__8593;
kvs = G__8595;
continue;
}
} else
{return ret__8580;
}
break;
}
};
var G__8590 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8590__delegate.call(this, coll, k, v, kvs);
};
G__8590.cljs$lang$maxFixedArity = 3;
G__8590.cljs$lang$applyTo = (function (arglist__8599){
var coll = cljs.core.first(arglist__8599);
var k = cljs.core.first(cljs.core.next(arglist__8599));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8599)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8599)));
return G__8590__delegate.call(this, coll, k, v, kvs);
});
return G__8590;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8585.call(this,coll,k,v);
default:
return assoc__8586.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8586.cljs$lang$applyTo;
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
var dissoc__8605 = (function (coll){
return coll;
});
var dissoc__8606 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8607 = (function() { 
var G__8609__delegate = function (coll,k,ks){
while(true){
var ret__8602 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8610 = ret__8602;
var G__8612 = cljs.core.first.call(null,ks);
var G__8614 = cljs.core.next.call(null,ks);
coll = G__8610;
k = G__8612;
ks = G__8614;
continue;
}
} else
{return ret__8602;
}
break;
}
};
var G__8609 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8609__delegate.call(this, coll, k, ks);
};
G__8609.cljs$lang$maxFixedArity = 2;
G__8609.cljs$lang$applyTo = (function (arglist__8620){
var coll = cljs.core.first(arglist__8620);
var k = cljs.core.first(cljs.core.next(arglist__8620));
var ks = cljs.core.rest(cljs.core.next(arglist__8620));
return G__8609__delegate.call(this, coll, k, ks);
});
return G__8609;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8605.call(this,coll);
case  2 :
return dissoc__8606.call(this,coll,k);
default:
return dissoc__8607.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8607.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8633 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8634 = x__445__auto____8633;

if(cljs.core.truth_(and__3546__auto____8634))
{var and__3546__auto____8635 = x__445__auto____8633.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8635))
{return cljs.core.not.call(null,x__445__auto____8633.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8635;
}
} else
{return and__3546__auto____8634;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8633);
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
var disj__8659 = (function (coll){
return coll;
});
var disj__8660 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8661 = (function() { 
var G__8663__delegate = function (coll,k,ks){
while(true){
var ret__8655 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8667 = ret__8655;
var G__8668 = cljs.core.first.call(null,ks);
var G__8669 = cljs.core.next.call(null,ks);
coll = G__8667;
k = G__8668;
ks = G__8669;
continue;
}
} else
{return ret__8655;
}
break;
}
};
var G__8663 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8663__delegate.call(this, coll, k, ks);
};
G__8663.cljs$lang$maxFixedArity = 2;
G__8663.cljs$lang$applyTo = (function (arglist__8671){
var coll = cljs.core.first(arglist__8671);
var k = cljs.core.first(cljs.core.next(arglist__8671));
var ks = cljs.core.rest(cljs.core.next(arglist__8671));
return G__8663__delegate.call(this, coll, k, ks);
});
return G__8663;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8659.call(this,coll);
case  2 :
return disj__8660.call(this,coll,k);
default:
return disj__8661.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8661.cljs$lang$applyTo;
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
{var x__445__auto____8692 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8693 = x__445__auto____8692;

if(cljs.core.truth_(and__3546__auto____8693))
{var and__3546__auto____8694 = x__445__auto____8692.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8694))
{return cljs.core.not.call(null,x__445__auto____8692.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8694;
}
} else
{return and__3546__auto____8693;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8692);
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
{var x__445__auto____8698 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8701 = x__445__auto____8698;

if(cljs.core.truth_(and__3546__auto____8701))
{var and__3546__auto____8704 = x__445__auto____8698.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8704))
{return cljs.core.not.call(null,x__445__auto____8698.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8704;
}
} else
{return and__3546__auto____8701;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8698);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8717 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8718 = x__445__auto____8717;

if(cljs.core.truth_(and__3546__auto____8718))
{var and__3546__auto____8719 = x__445__auto____8717.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8719))
{return cljs.core.not.call(null,x__445__auto____8717.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8719;
}
} else
{return and__3546__auto____8718;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8717);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8729 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8730 = x__445__auto____8729;

if(cljs.core.truth_(and__3546__auto____8730))
{var and__3546__auto____8732 = x__445__auto____8729.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8732))
{return cljs.core.not.call(null,x__445__auto____8729.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8732;
}
} else
{return and__3546__auto____8730;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8729);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8733 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8734 = x__445__auto____8733;

if(cljs.core.truth_(and__3546__auto____8734))
{var and__3546__auto____8737 = x__445__auto____8733.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8737))
{return cljs.core.not.call(null,x__445__auto____8733.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8737;
}
} else
{return and__3546__auto____8734;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8733);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8745 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8746 = x__445__auto____8745;

if(cljs.core.truth_(and__3546__auto____8746))
{var and__3546__auto____8747 = x__445__auto____8745.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8747))
{return cljs.core.not.call(null,x__445__auto____8745.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8747;
}
} else
{return and__3546__auto____8746;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8745);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8754 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8756 = x__445__auto____8754;

if(cljs.core.truth_(and__3546__auto____8756))
{var and__3546__auto____8757 = x__445__auto____8754.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8757))
{return cljs.core.not.call(null,x__445__auto____8754.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8757;
}
} else
{return and__3546__auto____8756;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8754);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8775 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8775.push(key);
}));
return keys__8775;
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
{var x__445__auto____8803 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8807 = x__445__auto____8803;

if(cljs.core.truth_(and__3546__auto____8807))
{var and__3546__auto____8809 = x__445__auto____8803.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8809))
{return cljs.core.not.call(null,x__445__auto____8803.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8809;
}
} else
{return and__3546__auto____8807;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8803);
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
var and__3546__auto____8832 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8832))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8834 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8834))
{return or__3548__auto____8834;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8832;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8859 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8859))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8859;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8865 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8865))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8865;
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
var and__3546__auto____8881 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8881))
{return (n == n.toFixed());
} else
{return and__3546__auto____8881;
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
if(cljs.core.truth_((function (){var and__3546__auto____8888 = coll;

if(cljs.core.truth_(and__3546__auto____8888))
{var and__3546__auto____8889 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8889))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8889;
}
} else
{return and__3546__auto____8888;
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
var distinct_QMARK___8902 = (function (x){
return true;
});
var distinct_QMARK___8903 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8904 = (function() { 
var G__8906__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8895 = cljs.core.set([y,x]);
var xs__8896 = more;

while(true){
var x__8897 = cljs.core.first.call(null,xs__8896);
var etc__8899 = cljs.core.next.call(null,xs__8896);

if(cljs.core.truth_(xs__8896))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8895,x__8897)))
{return false;
} else
{{
var G__8911 = cljs.core.conj.call(null,s__8895,x__8897);
var G__8912 = etc__8899;
s__8895 = G__8911;
xs__8896 = G__8912;
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
var G__8906 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8906__delegate.call(this, x, y, more);
};
G__8906.cljs$lang$maxFixedArity = 2;
G__8906.cljs$lang$applyTo = (function (arglist__8915){
var x = cljs.core.first(arglist__8915);
var y = cljs.core.first(cljs.core.next(arglist__8915));
var more = cljs.core.rest(cljs.core.next(arglist__8915));
return G__8906__delegate.call(this, x, y, more);
});
return G__8906;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8902.call(this,x);
case  2 :
return distinct_QMARK___8903.call(this,x,y);
default:
return distinct_QMARK___8904.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8904.cljs$lang$applyTo;
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
var r__8924 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8924)))
{return r__8924;
} else
{if(cljs.core.truth_(r__8924))
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
var sort__8934 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8935 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8930 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8930,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8930);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8934.call(this,comp);
case  2 :
return sort__8935.call(this,comp,coll);
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
var sort_by__9020 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9021 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9020.call(this,keyfn,comp);
case  3 :
return sort_by__9021.call(this,keyfn,comp,coll);
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
var reduce__9027 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9028 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9027.call(this,f,val);
case  3 :
return reduce__9028.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9096 = (function (f,coll){
var temp__3695__auto____9080 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9080))
{var s__9081 = temp__3695__auto____9080;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9081),cljs.core.next.call(null,s__9081));
} else
{return f.call(null);
}
});
var seq_reduce__9099 = (function (f,val,coll){
var val__9088 = val;
var coll__9091 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9091))
{{
var G__9117 = f.call(null,val__9088,cljs.core.first.call(null,coll__9091));
var G__9118 = cljs.core.next.call(null,coll__9091);
val__9088 = G__9117;
coll__9091 = G__9118;
continue;
}
} else
{return val__9088;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9096.call(this,f,val);
case  3 :
return seq_reduce__9099.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9129 = null;
var G__9129__9130 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9129__9131 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9129 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9129__9130.call(this,coll,f);
case  3 :
return G__9129__9131.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9129;
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
var G__9152__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9152 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9152__delegate.call(this, x, y, more);
};
G__9152.cljs$lang$maxFixedArity = 2;
G__9152.cljs$lang$applyTo = (function (arglist__9158){
var x = cljs.core.first(arglist__9158);
var y = cljs.core.first(cljs.core.next(arglist__9158));
var more = cljs.core.rest(cljs.core.next(arglist__9158));
return G__9152__delegate.call(this, x, y, more);
});
return G__9152;
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
var ___9171 = (function (x){
return (- x);
});
var ___9172 = (function (x,y){
return (x - y);
});
var ___9173 = (function() { 
var G__9176__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9176 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9176__delegate.call(this, x, y, more);
};
G__9176.cljs$lang$maxFixedArity = 2;
G__9176.cljs$lang$applyTo = (function (arglist__9179){
var x = cljs.core.first(arglist__9179);
var y = cljs.core.first(cljs.core.next(arglist__9179));
var more = cljs.core.rest(cljs.core.next(arglist__9179));
return G__9176__delegate.call(this, x, y, more);
});
return G__9176;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9171.call(this,x);
case  2 :
return ___9172.call(this,x,y);
default:
return ___9173.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9173.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9181 = (function (){
return 1;
});
var _STAR___9182 = (function (x){
return x;
});
var _STAR___9183 = (function (x,y){
return (x * y);
});
var _STAR___9184 = (function() { 
var G__9191__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9191 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9191__delegate.call(this, x, y, more);
};
G__9191.cljs$lang$maxFixedArity = 2;
G__9191.cljs$lang$applyTo = (function (arglist__9197){
var x = cljs.core.first(arglist__9197);
var y = cljs.core.first(cljs.core.next(arglist__9197));
var more = cljs.core.rest(cljs.core.next(arglist__9197));
return G__9191__delegate.call(this, x, y, more);
});
return G__9191;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9181.call(this);
case  1 :
return _STAR___9182.call(this,x);
case  2 :
return _STAR___9183.call(this,x,y);
default:
return _STAR___9184.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9184.cljs$lang$applyTo;
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
var _SLASH___9205 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9206 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9208 = (function() { 
var G__9215__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9215 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9215__delegate.call(this, x, y, more);
};
G__9215.cljs$lang$maxFixedArity = 2;
G__9215.cljs$lang$applyTo = (function (arglist__9219){
var x = cljs.core.first(arglist__9219);
var y = cljs.core.first(cljs.core.next(arglist__9219));
var more = cljs.core.rest(cljs.core.next(arglist__9219));
return G__9215__delegate.call(this, x, y, more);
});
return G__9215;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9205.call(this,x);
case  2 :
return _SLASH___9206.call(this,x,y);
default:
return _SLASH___9208.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9208.cljs$lang$applyTo;
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
var _LT___9248 = (function (x){
return true;
});
var _LT___9249 = (function (x,y){
return (x < y);
});
var _LT___9250 = (function() { 
var G__9252__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
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
{return (y < cljs.core.first.call(null,more));
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
G__9252.cljs$lang$applyTo = (function (arglist__9261){
var x = cljs.core.first(arglist__9261);
var y = cljs.core.first(cljs.core.next(arglist__9261));
var more = cljs.core.rest(cljs.core.next(arglist__9261));
return G__9252__delegate.call(this, x, y, more);
});
return G__9252;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9248.call(this,x);
case  2 :
return _LT___9249.call(this,x,y);
default:
return _LT___9250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9250.cljs$lang$applyTo;
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
var _LT__EQ___9278 = (function (x){
return true;
});
var _LT__EQ___9279 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9280 = (function() { 
var G__9283__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9288 = y;
var G__9289 = cljs.core.first.call(null,more);
var G__9290 = cljs.core.next.call(null,more);
x = G__9288;
y = G__9289;
more = G__9290;
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
var G__9283 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9283__delegate.call(this, x, y, more);
};
G__9283.cljs$lang$maxFixedArity = 2;
G__9283.cljs$lang$applyTo = (function (arglist__9295){
var x = cljs.core.first(arglist__9295);
var y = cljs.core.first(cljs.core.next(arglist__9295));
var more = cljs.core.rest(cljs.core.next(arglist__9295));
return G__9283__delegate.call(this, x, y, more);
});
return G__9283;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9278.call(this,x);
case  2 :
return _LT__EQ___9279.call(this,x,y);
default:
return _LT__EQ___9280.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9280.cljs$lang$applyTo;
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
var _GT___9304 = (function (x){
return true;
});
var _GT___9305 = (function (x,y){
return (x > y);
});
var _GT___9306 = (function() { 
var G__9308__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9309 = y;
var G__9310 = cljs.core.first.call(null,more);
var G__9311 = cljs.core.next.call(null,more);
x = G__9309;
y = G__9310;
more = G__9311;
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
var G__9308 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9308__delegate.call(this, x, y, more);
};
G__9308.cljs$lang$maxFixedArity = 2;
G__9308.cljs$lang$applyTo = (function (arglist__9315){
var x = cljs.core.first(arglist__9315);
var y = cljs.core.first(cljs.core.next(arglist__9315));
var more = cljs.core.rest(cljs.core.next(arglist__9315));
return G__9308__delegate.call(this, x, y, more);
});
return G__9308;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9304.call(this,x);
case  2 :
return _GT___9305.call(this,x,y);
default:
return _GT___9306.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9306.cljs$lang$applyTo;
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
var _GT__EQ___9478 = (function (x){
return true;
});
var _GT__EQ___9479 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9480 = (function() { 
var G__9483__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9484 = y;
var G__9485 = cljs.core.first.call(null,more);
var G__9486 = cljs.core.next.call(null,more);
x = G__9484;
y = G__9485;
more = G__9486;
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
var G__9483 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9483__delegate.call(this, x, y, more);
};
G__9483.cljs$lang$maxFixedArity = 2;
G__9483.cljs$lang$applyTo = (function (arglist__9487){
var x = cljs.core.first(arglist__9487);
var y = cljs.core.first(cljs.core.next(arglist__9487));
var more = cljs.core.rest(cljs.core.next(arglist__9487));
return G__9483__delegate.call(this, x, y, more);
});
return G__9483;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9478.call(this,x);
case  2 :
return _GT__EQ___9479.call(this,x,y);
default:
return _GT__EQ___9480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9480.cljs$lang$applyTo;
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
var max__9491 = (function (x){
return x;
});
var max__9492 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9493 = (function() { 
var G__9499__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9499 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9499__delegate.call(this, x, y, more);
};
G__9499.cljs$lang$maxFixedArity = 2;
G__9499.cljs$lang$applyTo = (function (arglist__9501){
var x = cljs.core.first(arglist__9501);
var y = cljs.core.first(cljs.core.next(arglist__9501));
var more = cljs.core.rest(cljs.core.next(arglist__9501));
return G__9499__delegate.call(this, x, y, more);
});
return G__9499;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9491.call(this,x);
case  2 :
return max__9492.call(this,x,y);
default:
return max__9493.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9493.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9503 = (function (x){
return x;
});
var min__9504 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9505 = (function() { 
var G__9507__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9507 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9507__delegate.call(this, x, y, more);
};
G__9507.cljs$lang$maxFixedArity = 2;
G__9507.cljs$lang$applyTo = (function (arglist__9508){
var x = cljs.core.first(arglist__9508);
var y = cljs.core.first(cljs.core.next(arglist__9508));
var more = cljs.core.rest(cljs.core.next(arglist__9508));
return G__9507__delegate.call(this, x, y, more);
});
return G__9507;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9503.call(this,x);
case  2 :
return min__9504.call(this,x,y);
default:
return min__9505.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9505.cljs$lang$applyTo;
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
var rem__9514 = (n % d);

return cljs.core.fix.call(null,((n - rem__9514) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9519 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9519));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9520 = (function (){
return Math.random.call(null);
});
var rand__9521 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9520.call(this);
case  1 :
return rand__9521.call(this,n);
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
var _EQ__EQ___9535 = (function (x){
return true;
});
var _EQ__EQ___9536 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9537 = (function() { 
var G__9539__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9540 = y;
var G__9541 = cljs.core.first.call(null,more);
var G__9542 = cljs.core.next.call(null,more);
x = G__9540;
y = G__9541;
more = G__9542;
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
var G__9539 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9539__delegate.call(this, x, y, more);
};
G__9539.cljs$lang$maxFixedArity = 2;
G__9539.cljs$lang$applyTo = (function (arglist__9544){
var x = cljs.core.first(arglist__9544);
var y = cljs.core.first(cljs.core.next(arglist__9544));
var more = cljs.core.rest(cljs.core.next(arglist__9544));
return G__9539__delegate.call(this, x, y, more);
});
return G__9539;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9535.call(this,x);
case  2 :
return _EQ__EQ___9536.call(this,x,y);
default:
return _EQ__EQ___9537.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9537.cljs$lang$applyTo;
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
var n__9554 = n;
var xs__9557 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9559 = xs__9557;

if(cljs.core.truth_(and__3546__auto____9559))
{return (n__9554 > 0);
} else
{return and__3546__auto____9559;
}
})()))
{{
var G__9606 = (n__9554 - 1);
var G__9607 = cljs.core.next.call(null,xs__9557);
n__9554 = G__9606;
xs__9557 = G__9607;
continue;
}
} else
{return xs__9557;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9616 = null;
var G__9616__9617 = (function (coll,n){
var temp__3695__auto____9608 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9608))
{var xs__9609 = temp__3695__auto____9608;

return cljs.core.first.call(null,xs__9609);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9616__9618 = (function (coll,n,not_found){
var temp__3695__auto____9610 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9610))
{var xs__9611 = temp__3695__auto____9610;

return cljs.core.first.call(null,xs__9611);
} else
{return not_found;
}
});
G__9616 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9616__9617.call(this,coll,n);
case  3 :
return G__9616__9618.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9616;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9626 = (function (){
return "";
});
var str_STAR___9627 = (function (x){
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
var str_STAR___9628 = (function() { 
var G__9631__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9633 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9635 = cljs.core.next.call(null,more);
sb = G__9633;
more = G__9635;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9631 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9631__delegate.call(this, x, ys);
};
G__9631.cljs$lang$maxFixedArity = 1;
G__9631.cljs$lang$applyTo = (function (arglist__9638){
var x = cljs.core.first(arglist__9638);
var ys = cljs.core.rest(arglist__9638);
return G__9631__delegate.call(this, x, ys);
});
return G__9631;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9626.call(this);
case  1 :
return str_STAR___9627.call(this,x);
default:
return str_STAR___9628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9628.cljs$lang$applyTo;
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
var str__9647 = (function (){
return "";
});
var str__9648 = (function (x){
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
var str__9649 = (function() { 
var G__9651__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9651 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9651__delegate.call(this, x, ys);
};
G__9651.cljs$lang$maxFixedArity = 1;
G__9651.cljs$lang$applyTo = (function (arglist__9652){
var x = cljs.core.first(arglist__9652);
var ys = cljs.core.rest(arglist__9652);
return G__9651__delegate.call(this, x, ys);
});
return G__9651;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9647.call(this);
case  1 :
return str__9648.call(this,x);
default:
return str__9649.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9649.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9658 = (function (s,start){
return s.substring(start);
});
var subs__9659 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9658.call(this,s,start);
case  3 :
return subs__9659.call(this,s,start,end);
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
var symbol__9666 = (function (name){
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
var symbol__9667 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9666.call(this,ns);
case  2 :
return symbol__9667.call(this,ns,name);
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
var keyword__9677 = (function (name){
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
var keyword__9678 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9677.call(this,ns);
case  2 :
return keyword__9678.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9698 = cljs.core.seq.call(null,x);
var ys__9699 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9698)))
{return cljs.core.nil_QMARK_.call(null,ys__9699);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9699)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9698),cljs.core.first.call(null,ys__9699))))
{{
var G__9704 = cljs.core.next.call(null,xs__9698);
var G__9705 = cljs.core.next.call(null,ys__9699);
xs__9698 = G__9704;
ys__9699 = G__9705;
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
return cljs.core.reduce.call(null,(function (p1__9709_SHARP_,p2__9710_SHARP_){
return cljs.core.hash_combine.call(null,p1__9709_SHARP_,cljs.core.hash.call(null,p2__9710_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9723__9725 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9723__9725))
{var G__9727__9729 = cljs.core.first.call(null,G__9723__9725);
var vec__9728__9730 = G__9727__9729;
var key_name__9731 = cljs.core.nth.call(null,vec__9728__9730,0,null);
var f__9733 = cljs.core.nth.call(null,vec__9728__9730,1,null);
var G__9723__9736 = G__9723__9725;

var G__9727__9737 = G__9727__9729;
var G__9723__9738 = G__9723__9736;

while(true){
var vec__9739__9740 = G__9727__9737;
var key_name__9744 = cljs.core.nth.call(null,vec__9739__9740,0,null);
var f__9745 = cljs.core.nth.call(null,vec__9739__9740,1,null);
var G__9723__9746 = G__9723__9738;

var str_name__9747 = cljs.core.name.call(null,key_name__9744);

obj[str_name__9747] = f__9745;
var temp__3698__auto____9748 = cljs.core.next.call(null,G__9723__9746);

if(cljs.core.truth_(temp__3698__auto____9748))
{var G__9723__9749 = temp__3698__auto____9748;

{
var G__9756 = cljs.core.first.call(null,G__9723__9749);
var G__9757 = G__9723__9749;
G__9727__9737 = G__9756;
G__9723__9738 = G__9757;
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
var this__9768 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9769 = this;
return (new cljs.core.List(this__9769.meta,o,coll,(this__9769.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9770 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9771 = this;
return this__9771.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9772 = this;
return this__9772.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9773 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9776 = this;
return this__9776.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9777 = this;
return this__9777.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9778 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9779 = this;
return (new cljs.core.List(meta,this__9779.first,this__9779.rest,this__9779.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9782 = this;
return this__9782.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9861 = this;
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
var this__9889 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9892 = this;
return (new cljs.core.List(this__9892.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9893 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9894 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9895 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9896 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9897 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9899 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9901 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9902 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9904 = this;
return this__9904.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9906 = this;
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
list.cljs$lang$applyTo = (function (arglist__9916){
var items = cljs.core.seq( arglist__9916 );;
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
var this__9918 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9919 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9920 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9921 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9921.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10020 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10048 = this;
return this__10048.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10049 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10049.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10049.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10051 = this;
return this__10051.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10052 = this;
return (new cljs.core.Cons(meta,this__10052.first,this__10052.rest));
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
var G__10077 = null;
var G__10077__10078 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10077__10079 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10077 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10077__10078.call(this,string,f);
case  3 :
return G__10077__10079.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10077;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10081 = null;
var G__10081__10082 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10081__10083 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10081 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10081__10082.call(this,string,k);
case  3 :
return G__10081__10083.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10081;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10085 = null;
var G__10085__10086 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10085__10087 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10085 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10085__10086.call(this,string,n);
case  3 :
return G__10085__10087.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10085;
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
var G__10099 = null;
var G__10099__10116 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10099__10117 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10099 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10099__10116.call(this,this$,coll);
case  3 :
return G__10099__10117.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10099;
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
var x__10127 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10127;
} else
{lazy_seq.x = x__10127.call(null);
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
var this__10132 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10133 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10134 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10135 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10135.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10136 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10137 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10138 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10139 = this;
return this__10139.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10140 = this;
return (new cljs.core.LazySeq(meta,this__10140.realized,this__10140.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10157 = cljs.core.array.call(null);

var s__10158 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10158)))
{ary__10157.push(cljs.core.first.call(null,s__10158));
{
var G__10159 = cljs.core.next.call(null,s__10158);
s__10158 = G__10159;
continue;
}
} else
{return ary__10157;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10164 = s;
var i__10165 = n;
var sum__10166 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10167 = (i__10165 > 0);

if(cljs.core.truth_(and__3546__auto____10167))
{return cljs.core.seq.call(null,s__10164);
} else
{return and__3546__auto____10167;
}
})()))
{{
var G__10172 = cljs.core.next.call(null,s__10164);
var G__10173 = (i__10165 - 1);
var G__10174 = (sum__10166 + 1);
s__10164 = G__10172;
i__10165 = G__10173;
sum__10166 = G__10174;
continue;
}
} else
{return sum__10166;
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
var concat__10223 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10224 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10225 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10218 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10218))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10218),concat.call(null,cljs.core.rest.call(null,s__10218),y));
} else
{return y;
}
})));
});
var concat__10226 = (function() { 
var G__10230__delegate = function (x,y,zs){
var cat__10222 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10221 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10221))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10221),cat.call(null,cljs.core.rest.call(null,xys__10221),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10222.call(null,concat.call(null,x,y),zs);
};
var G__10230 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10230__delegate.call(this, x, y, zs);
};
G__10230.cljs$lang$maxFixedArity = 2;
G__10230.cljs$lang$applyTo = (function (arglist__10233){
var x = cljs.core.first(arglist__10233);
var y = cljs.core.first(cljs.core.next(arglist__10233));
var zs = cljs.core.rest(cljs.core.next(arglist__10233));
return G__10230__delegate.call(this, x, y, zs);
});
return G__10230;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10223.call(this);
case  1 :
return concat__10224.call(this,x);
case  2 :
return concat__10225.call(this,x,y);
default:
return concat__10226.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10226.cljs$lang$applyTo;
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
var list_STAR___10248 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10249 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10250 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10251 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10252 = (function() { 
var G__10254__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10254 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10254__delegate.call(this, a, b, c, d, more);
};
G__10254.cljs$lang$maxFixedArity = 4;
G__10254.cljs$lang$applyTo = (function (arglist__10255){
var a = cljs.core.first(arglist__10255);
var b = cljs.core.first(cljs.core.next(arglist__10255));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10255)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10255))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10255))));
return G__10254__delegate.call(this, a, b, c, d, more);
});
return G__10254;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10248.call(this,a);
case  2 :
return list_STAR___10249.call(this,a,b);
case  3 :
return list_STAR___10250.call(this,a,b,c);
case  4 :
return list_STAR___10251.call(this,a,b,c,d);
default:
return list_STAR___10252.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10252.cljs$lang$applyTo;
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
var apply__10311 = (function (f,args){
var fixed_arity__10258 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10258 + 1)) <= fixed_arity__10258)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10313 = (function (f,x,args){
var arglist__10266 = cljs.core.list_STAR_.call(null,x,args);
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
});
var apply__10314 = (function (f,x,y,args){
var arglist__10270 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10271 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10270,fixed_arity__10271) <= fixed_arity__10271)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10270));
} else
{return f.cljs$lang$applyTo(arglist__10270);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10270));
}
});
var apply__10315 = (function (f,x,y,z,args){
var arglist__10294 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10295 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10294,fixed_arity__10295) <= fixed_arity__10295)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10294));
} else
{return f.cljs$lang$applyTo(arglist__10294);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10294));
}
});
var apply__10316 = (function() { 
var G__10350__delegate = function (f,a,b,c,d,args){
var arglist__10300 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10301 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10300,fixed_arity__10301) <= fixed_arity__10301)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10300));
} else
{return f.cljs$lang$applyTo(arglist__10300);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10300));
}
};
var G__10350 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10350__delegate.call(this, f, a, b, c, d, args);
};
G__10350.cljs$lang$maxFixedArity = 5;
G__10350.cljs$lang$applyTo = (function (arglist__10351){
var f = cljs.core.first(arglist__10351);
var a = cljs.core.first(cljs.core.next(arglist__10351));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10351)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10351))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10351)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10351)))));
return G__10350__delegate.call(this, f, a, b, c, d, args);
});
return G__10350;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10311.call(this,f,a);
case  3 :
return apply__10313.call(this,f,a,b);
case  4 :
return apply__10314.call(this,f,a,b,c);
case  5 :
return apply__10315.call(this,f,a,b,c,d);
default:
return apply__10316.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10316.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10360){
var obj = cljs.core.first(arglist__10360);
var f = cljs.core.first(cljs.core.next(arglist__10360));
var args = cljs.core.rest(cljs.core.next(arglist__10360));
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
var not_EQ___10369 = (function (x){
return false;
});
var not_EQ___10370 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10371 = (function() { 
var G__10373__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10373 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10373__delegate.call(this, x, y, more);
};
G__10373.cljs$lang$maxFixedArity = 2;
G__10373.cljs$lang$applyTo = (function (arglist__10374){
var x = cljs.core.first(arglist__10374);
var y = cljs.core.first(cljs.core.next(arglist__10374));
var more = cljs.core.rest(cljs.core.next(arglist__10374));
return G__10373__delegate.call(this, x, y, more);
});
return G__10373;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10369.call(this,x);
case  2 :
return not_EQ___10370.call(this,x,y);
default:
return not_EQ___10371.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10371.cljs$lang$applyTo;
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
var G__10377 = pred;
var G__10378 = cljs.core.next.call(null,coll);
pred = G__10377;
coll = G__10378;
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
{var or__3548__auto____10379 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10379))
{return or__3548__auto____10379;
} else
{{
var G__10386 = pred;
var G__10387 = cljs.core.next.call(null,coll);
pred = G__10386;
coll = G__10387;
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
var G__10408 = null;
var G__10408__10409 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10408__10410 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10408__10411 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10408__10412 = (function() { 
var G__10419__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10419 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10419__delegate.call(this, x, y, zs);
};
G__10419.cljs$lang$maxFixedArity = 2;
G__10419.cljs$lang$applyTo = (function (arglist__10421){
var x = cljs.core.first(arglist__10421);
var y = cljs.core.first(cljs.core.next(arglist__10421));
var zs = cljs.core.rest(cljs.core.next(arglist__10421));
return G__10419__delegate.call(this, x, y, zs);
});
return G__10419;
})()
;
G__10408 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10408__10409.call(this);
case  1 :
return G__10408__10410.call(this,x);
case  2 :
return G__10408__10411.call(this,x,y);
default:
return G__10408__10412.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10408.cljs$lang$maxFixedArity = 2;
G__10408.cljs$lang$applyTo = G__10408__10412.cljs$lang$applyTo;
return G__10408;
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
var comp__10463 = (function (){
return cljs.core.identity;
});
var comp__10464 = (function (f){
return f;
});
var comp__10465 = (function (f,g){
return (function() {
var G__10472 = null;
var G__10472__10473 = (function (){
return f.call(null,g.call(null));
});
var G__10472__10474 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10472__10475 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10472__10476 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10472__10477 = (function() { 
var G__10485__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10485 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10485__delegate.call(this, x, y, z, args);
};
G__10485.cljs$lang$maxFixedArity = 3;
G__10485.cljs$lang$applyTo = (function (arglist__10488){
var x = cljs.core.first(arglist__10488);
var y = cljs.core.first(cljs.core.next(arglist__10488));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10488)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10488)));
return G__10485__delegate.call(this, x, y, z, args);
});
return G__10485;
})()
;
G__10472 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10472__10473.call(this);
case  1 :
return G__10472__10474.call(this,x);
case  2 :
return G__10472__10475.call(this,x,y);
case  3 :
return G__10472__10476.call(this,x,y,z);
default:
return G__10472__10477.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10472.cljs$lang$maxFixedArity = 3;
G__10472.cljs$lang$applyTo = G__10472__10477.cljs$lang$applyTo;
return G__10472;
})()
});
var comp__10467 = (function (f,g,h){
return (function() {
var G__10489 = null;
var G__10489__10491 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10489__10492 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10489__10493 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10489__10494 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10489__10495 = (function() { 
var G__10498__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10498 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10498__delegate.call(this, x, y, z, args);
};
G__10498.cljs$lang$maxFixedArity = 3;
G__10498.cljs$lang$applyTo = (function (arglist__10499){
var x = cljs.core.first(arglist__10499);
var y = cljs.core.first(cljs.core.next(arglist__10499));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10499)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10499)));
return G__10498__delegate.call(this, x, y, z, args);
});
return G__10498;
})()
;
G__10489 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10489__10491.call(this);
case  1 :
return G__10489__10492.call(this,x);
case  2 :
return G__10489__10493.call(this,x,y);
case  3 :
return G__10489__10494.call(this,x,y,z);
default:
return G__10489__10495.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10489.cljs$lang$maxFixedArity = 3;
G__10489.cljs$lang$applyTo = G__10489__10495.cljs$lang$applyTo;
return G__10489;
})()
});
var comp__10468 = (function() { 
var G__10579__delegate = function (f1,f2,f3,fs){
var fs__10456 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10581__delegate = function (args){
var ret__10460 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10456),args);
var fs__10461 = cljs.core.next.call(null,fs__10456);

while(true){
if(cljs.core.truth_(fs__10461))
{{
var G__10584 = cljs.core.first.call(null,fs__10461).call(null,ret__10460);
var G__10585 = cljs.core.next.call(null,fs__10461);
ret__10460 = G__10584;
fs__10461 = G__10585;
continue;
}
} else
{return ret__10460;
}
break;
}
};
var G__10581 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10581__delegate.call(this, args);
};
G__10581.cljs$lang$maxFixedArity = 0;
G__10581.cljs$lang$applyTo = (function (arglist__10586){
var args = cljs.core.seq( arglist__10586 );;
return G__10581__delegate.call(this, args);
});
return G__10581;
})()
;
};
var G__10579 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10579__delegate.call(this, f1, f2, f3, fs);
};
G__10579.cljs$lang$maxFixedArity = 3;
G__10579.cljs$lang$applyTo = (function (arglist__10587){
var f1 = cljs.core.first(arglist__10587);
var f2 = cljs.core.first(cljs.core.next(arglist__10587));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10587)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10587)));
return G__10579__delegate.call(this, f1, f2, f3, fs);
});
return G__10579;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10463.call(this);
case  1 :
return comp__10464.call(this,f1);
case  2 :
return comp__10465.call(this,f1,f2);
case  3 :
return comp__10467.call(this,f1,f2,f3);
default:
return comp__10468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10468.cljs$lang$applyTo;
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
var partial__10633 = (function (f,arg1){
return (function() { 
var G__10638__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10638 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10638__delegate.call(this, args);
};
G__10638.cljs$lang$maxFixedArity = 0;
G__10638.cljs$lang$applyTo = (function (arglist__10639){
var args = cljs.core.seq( arglist__10639 );;
return G__10638__delegate.call(this, args);
});
return G__10638;
})()
;
});
var partial__10634 = (function (f,arg1,arg2){
return (function() { 
var G__10641__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10641 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10641__delegate.call(this, args);
};
G__10641.cljs$lang$maxFixedArity = 0;
G__10641.cljs$lang$applyTo = (function (arglist__10646){
var args = cljs.core.seq( arglist__10646 );;
return G__10641__delegate.call(this, args);
});
return G__10641;
})()
;
});
var partial__10635 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10647__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10647 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10647__delegate.call(this, args);
};
G__10647.cljs$lang$maxFixedArity = 0;
G__10647.cljs$lang$applyTo = (function (arglist__10648){
var args = cljs.core.seq( arglist__10648 );;
return G__10647__delegate.call(this, args);
});
return G__10647;
})()
;
});
var partial__10636 = (function() { 
var G__10650__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10651__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10651 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10651__delegate.call(this, args);
};
G__10651.cljs$lang$maxFixedArity = 0;
G__10651.cljs$lang$applyTo = (function (arglist__10652){
var args = cljs.core.seq( arglist__10652 );;
return G__10651__delegate.call(this, args);
});
return G__10651;
})()
;
};
var G__10650 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10650__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10650.cljs$lang$maxFixedArity = 4;
G__10650.cljs$lang$applyTo = (function (arglist__10654){
var f = cljs.core.first(arglist__10654);
var arg1 = cljs.core.first(cljs.core.next(arglist__10654));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10654)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10654))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10654))));
return G__10650__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10650;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10633.call(this,f,arg1);
case  3 :
return partial__10634.call(this,f,arg1,arg2);
case  4 :
return partial__10635.call(this,f,arg1,arg2,arg3);
default:
return partial__10636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10636.cljs$lang$applyTo;
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
var fnil__10673 = (function (f,x){
return (function() {
var G__10678 = null;
var G__10678__10680 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10678__10681 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10678__10682 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10678__10683 = (function() { 
var G__10685__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10685 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10685__delegate.call(this, a, b, c, ds);
};
G__10685.cljs$lang$maxFixedArity = 3;
G__10685.cljs$lang$applyTo = (function (arglist__10686){
var a = cljs.core.first(arglist__10686);
var b = cljs.core.first(cljs.core.next(arglist__10686));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10686)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10686)));
return G__10685__delegate.call(this, a, b, c, ds);
});
return G__10685;
})()
;
G__10678 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10678__10680.call(this,a);
case  2 :
return G__10678__10681.call(this,a,b);
case  3 :
return G__10678__10682.call(this,a,b,c);
default:
return G__10678__10683.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10678.cljs$lang$maxFixedArity = 3;
G__10678.cljs$lang$applyTo = G__10678__10683.cljs$lang$applyTo;
return G__10678;
})()
});
var fnil__10674 = (function (f,x,y){
return (function() {
var G__10687 = null;
var G__10687__10688 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10687__10689 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10687__10690 = (function() { 
var G__10693__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10693 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10693__delegate.call(this, a, b, c, ds);
};
G__10693.cljs$lang$maxFixedArity = 3;
G__10693.cljs$lang$applyTo = (function (arglist__10696){
var a = cljs.core.first(arglist__10696);
var b = cljs.core.first(cljs.core.next(arglist__10696));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10696)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10696)));
return G__10693__delegate.call(this, a, b, c, ds);
});
return G__10693;
})()
;
G__10687 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10687__10688.call(this,a,b);
case  3 :
return G__10687__10689.call(this,a,b,c);
default:
return G__10687__10690.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10687.cljs$lang$maxFixedArity = 3;
G__10687.cljs$lang$applyTo = G__10687__10690.cljs$lang$applyTo;
return G__10687;
})()
});
var fnil__10676 = (function (f,x,y,z){
return (function() {
var G__10697 = null;
var G__10697__10698 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10697__10699 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10697__10700 = (function() { 
var G__10715__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10715 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10715__delegate.call(this, a, b, c, ds);
};
G__10715.cljs$lang$maxFixedArity = 3;
G__10715.cljs$lang$applyTo = (function (arglist__10730){
var a = cljs.core.first(arglist__10730);
var b = cljs.core.first(cljs.core.next(arglist__10730));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10730)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10730)));
return G__10715__delegate.call(this, a, b, c, ds);
});
return G__10715;
})()
;
G__10697 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10697__10698.call(this,a,b);
case  3 :
return G__10697__10699.call(this,a,b,c);
default:
return G__10697__10700.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10697.cljs$lang$maxFixedArity = 3;
G__10697.cljs$lang$applyTo = G__10697__10700.cljs$lang$applyTo;
return G__10697;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10673.call(this,f,x);
case  3 :
return fnil__10674.call(this,f,x,y);
case  4 :
return fnil__10676.call(this,f,x,y,z);
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
var mapi__10737 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10735 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10735))
{var s__10736 = temp__3698__auto____10735;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10736)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10736)));
} else
{return null;
}
})));
});

return mapi__10737.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10759 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10759))
{var s__10760 = temp__3698__auto____10759;

var x__10763 = f.call(null,cljs.core.first.call(null,s__10760));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10763)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10760));
} else
{return cljs.core.cons.call(null,x__10763,keep.call(null,f,cljs.core.rest.call(null,s__10760)));
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
var keepi__10856 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10848 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10848))
{var s__10849 = temp__3698__auto____10848;

var x__10850 = f.call(null,idx,cljs.core.first.call(null,s__10849));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10850)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10849));
} else
{return cljs.core.cons.call(null,x__10850,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10849)));
}
} else
{return null;
}
})));
});

return keepi__10856.call(null,0,coll);
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
var every_pred__11035 = (function (p){
return (function() {
var ep1 = null;
var ep1__11042 = (function (){
return true;
});
var ep1__11043 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11045 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10867 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10867))
{return p.call(null,y);
} else
{return and__3546__auto____10867;
}
})());
});
var ep1__11046 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10868 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10868))
{var and__3546__auto____10869 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10869))
{return p.call(null,z);
} else
{return and__3546__auto____10869;
}
} else
{return and__3546__auto____10868;
}
})());
});
var ep1__11047 = (function() { 
var G__11057__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10870 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10870))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10870;
}
})());
};
var G__11057 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11057__delegate.call(this, x, y, z, args);
};
G__11057.cljs$lang$maxFixedArity = 3;
G__11057.cljs$lang$applyTo = (function (arglist__11063){
var x = cljs.core.first(arglist__11063);
var y = cljs.core.first(cljs.core.next(arglist__11063));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11063)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11063)));
return G__11057__delegate.call(this, x, y, z, args);
});
return G__11057;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11042.call(this);
case  1 :
return ep1__11043.call(this,x);
case  2 :
return ep1__11045.call(this,x,y);
case  3 :
return ep1__11046.call(this,x,y,z);
default:
return ep1__11047.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11047.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11036 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11073 = (function (){
return true;
});
var ep2__11074 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10883 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10883))
{return p2.call(null,x);
} else
{return and__3546__auto____10883;
}
})());
});
var ep2__11075 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10914 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10914))
{var and__3546__auto____10917 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10917))
{var and__3546__auto____10923 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10923))
{return p2.call(null,y);
} else
{return and__3546__auto____10923;
}
} else
{return and__3546__auto____10917;
}
} else
{return and__3546__auto____10914;
}
})());
});
var ep2__11076 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10926 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10926))
{var and__3546__auto____10927 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10927))
{var and__3546__auto____10929 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10929))
{var and__3546__auto____10930 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10930))
{var and__3546__auto____10931 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10931))
{return p2.call(null,z);
} else
{return and__3546__auto____10931;
}
} else
{return and__3546__auto____10930;
}
} else
{return and__3546__auto____10929;
}
} else
{return and__3546__auto____10927;
}
} else
{return and__3546__auto____10926;
}
})());
});
var ep2__11077 = (function() { 
var G__11105__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10932 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10932))
{return cljs.core.every_QMARK_.call(null,(function (p1__10771_SHARP_){
var and__3546__auto____10933 = p1.call(null,p1__10771_SHARP_);

if(cljs.core.truth_(and__3546__auto____10933))
{return p2.call(null,p1__10771_SHARP_);
} else
{return and__3546__auto____10933;
}
}),args);
} else
{return and__3546__auto____10932;
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
G__11105.cljs$lang$applyTo = (function (arglist__11112){
var x = cljs.core.first(arglist__11112);
var y = cljs.core.first(cljs.core.next(arglist__11112));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11112)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11112)));
return G__11105__delegate.call(this, x, y, z, args);
});
return G__11105;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11073.call(this);
case  1 :
return ep2__11074.call(this,x);
case  2 :
return ep2__11075.call(this,x,y);
case  3 :
return ep2__11076.call(this,x,y,z);
default:
return ep2__11077.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11077.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11038 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11127 = (function (){
return true;
});
var ep3__11128 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10953 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10953))
{var and__3546__auto____10955 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10955))
{return p3.call(null,x);
} else
{return and__3546__auto____10955;
}
} else
{return and__3546__auto____10953;
}
})());
});
var ep3__11130 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10962 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10962))
{var and__3546__auto____10965 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10965))
{var and__3546__auto____10967 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10967))
{var and__3546__auto____10969 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10969))
{var and__3546__auto____10971 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10971))
{return p3.call(null,y);
} else
{return and__3546__auto____10971;
}
} else
{return and__3546__auto____10969;
}
} else
{return and__3546__auto____10967;
}
} else
{return and__3546__auto____10965;
}
} else
{return and__3546__auto____10962;
}
})());
});
var ep3__11131 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10980 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10980))
{var and__3546__auto____10981 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10981))
{var and__3546__auto____10982 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10982))
{var and__3546__auto____10986 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10986))
{var and__3546__auto____10990 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10990))
{var and__3546__auto____10991 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10991))
{var and__3546__auto____10993 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10993))
{var and__3546__auto____10995 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10995))
{return p3.call(null,z);
} else
{return and__3546__auto____10995;
}
} else
{return and__3546__auto____10993;
}
} else
{return and__3546__auto____10991;
}
} else
{return and__3546__auto____10990;
}
} else
{return and__3546__auto____10986;
}
} else
{return and__3546__auto____10982;
}
} else
{return and__3546__auto____10981;
}
} else
{return and__3546__auto____10980;
}
})());
});
var ep3__11132 = (function() { 
var G__11152__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10999 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10999))
{return cljs.core.every_QMARK_.call(null,(function (p1__10772_SHARP_){
var and__3546__auto____11002 = p1.call(null,p1__10772_SHARP_);

if(cljs.core.truth_(and__3546__auto____11002))
{var and__3546__auto____11004 = p2.call(null,p1__10772_SHARP_);

if(cljs.core.truth_(and__3546__auto____11004))
{return p3.call(null,p1__10772_SHARP_);
} else
{return and__3546__auto____11004;
}
} else
{return and__3546__auto____11002;
}
}),args);
} else
{return and__3546__auto____10999;
}
})());
};
var G__11152 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11152__delegate.call(this, x, y, z, args);
};
G__11152.cljs$lang$maxFixedArity = 3;
G__11152.cljs$lang$applyTo = (function (arglist__11196){
var x = cljs.core.first(arglist__11196);
var y = cljs.core.first(cljs.core.next(arglist__11196));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11196)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11196)));
return G__11152__delegate.call(this, x, y, z, args);
});
return G__11152;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11127.call(this);
case  1 :
return ep3__11128.call(this,x);
case  2 :
return ep3__11130.call(this,x,y);
case  3 :
return ep3__11131.call(this,x,y,z);
default:
return ep3__11132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11132.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11039 = (function() { 
var G__11207__delegate = function (p1,p2,p3,ps){
var ps__11005 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11209 = (function (){
return true;
});
var epn__11210 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10773_SHARP_){
return p1__10773_SHARP_.call(null,x);
}),ps__11005);
});
var epn__11211 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10774_SHARP_){
var and__3546__auto____11008 = p1__10774_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11008))
{return p1__10774_SHARP_.call(null,y);
} else
{return and__3546__auto____11008;
}
}),ps__11005);
});
var epn__11212 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10819_SHARP_){
var and__3546__auto____11012 = p1__10819_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11012))
{var and__3546__auto____11015 = p1__10819_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11015))
{return p1__10819_SHARP_.call(null,z);
} else
{return and__3546__auto____11015;
}
} else
{return and__3546__auto____11012;
}
}),ps__11005);
});
var epn__11213 = (function() { 
var G__11224__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11021 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11021))
{return cljs.core.every_QMARK_.call(null,(function (p1__10827_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10827_SHARP_,args);
}),ps__11005);
} else
{return and__3546__auto____11021;
}
})());
};
var G__11224 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11224__delegate.call(this, x, y, z, args);
};
G__11224.cljs$lang$maxFixedArity = 3;
G__11224.cljs$lang$applyTo = (function (arglist__11226){
var x = cljs.core.first(arglist__11226);
var y = cljs.core.first(cljs.core.next(arglist__11226));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11226)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11226)));
return G__11224__delegate.call(this, x, y, z, args);
});
return G__11224;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11209.call(this);
case  1 :
return epn__11210.call(this,x);
case  2 :
return epn__11211.call(this,x,y);
case  3 :
return epn__11212.call(this,x,y,z);
default:
return epn__11213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11213.cljs$lang$applyTo;
return epn;
})()
};
var G__11207 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11207__delegate.call(this, p1, p2, p3, ps);
};
G__11207.cljs$lang$maxFixedArity = 3;
G__11207.cljs$lang$applyTo = (function (arglist__11230){
var p1 = cljs.core.first(arglist__11230);
var p2 = cljs.core.first(cljs.core.next(arglist__11230));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11230)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11230)));
return G__11207__delegate.call(this, p1, p2, p3, ps);
});
return G__11207;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11035.call(this,p1);
case  2 :
return every_pred__11036.call(this,p1,p2);
case  3 :
return every_pred__11038.call(this,p1,p2,p3);
default:
return every_pred__11039.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11039.cljs$lang$applyTo;
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
var some_fn__11383 = (function (p){
return (function() {
var sp1 = null;
var sp1__11389 = (function (){
return null;
});
var sp1__11390 = (function (x){
return p.call(null,x);
});
var sp1__11391 = (function (x,y){
var or__3548__auto____11247 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11247))
{return or__3548__auto____11247;
} else
{return p.call(null,y);
}
});
var sp1__11392 = (function (x,y,z){
var or__3548__auto____11248 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11248))
{return or__3548__auto____11248;
} else
{var or__3548__auto____11249 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11249))
{return or__3548__auto____11249;
} else
{return p.call(null,z);
}
}
});
var sp1__11393 = (function() { 
var G__11395__delegate = function (x,y,z,args){
var or__3548__auto____11250 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11250))
{return or__3548__auto____11250;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11395 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11395__delegate.call(this, x, y, z, args);
};
G__11395.cljs$lang$maxFixedArity = 3;
G__11395.cljs$lang$applyTo = (function (arglist__11396){
var x = cljs.core.first(arglist__11396);
var y = cljs.core.first(cljs.core.next(arglist__11396));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11396)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11396)));
return G__11395__delegate.call(this, x, y, z, args);
});
return G__11395;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11389.call(this);
case  1 :
return sp1__11390.call(this,x);
case  2 :
return sp1__11391.call(this,x,y);
case  3 :
return sp1__11392.call(this,x,y,z);
default:
return sp1__11393.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11393.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11384 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11398 = (function (){
return null;
});
var sp2__11399 = (function (x){
var or__3548__auto____11263 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11263))
{return or__3548__auto____11263;
} else
{return p2.call(null,x);
}
});
var sp2__11400 = (function (x,y){
var or__3548__auto____11270 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11270))
{return or__3548__auto____11270;
} else
{var or__3548__auto____11272 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11272))
{return or__3548__auto____11272;
} else
{var or__3548__auto____11274 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11274))
{return or__3548__auto____11274;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11401 = (function (x,y,z){
var or__3548__auto____11276 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11276))
{return or__3548__auto____11276;
} else
{var or__3548__auto____11277 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11277))
{return or__3548__auto____11277;
} else
{var or__3548__auto____11279 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11279))
{return or__3548__auto____11279;
} else
{var or__3548__auto____11280 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11280))
{return or__3548__auto____11280;
} else
{var or__3548__auto____11281 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11281))
{return or__3548__auto____11281;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11402 = (function() { 
var G__11408__delegate = function (x,y,z,args){
var or__3548__auto____11282 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11282))
{return or__3548__auto____11282;
} else
{return cljs.core.some.call(null,(function (p1__10859_SHARP_){
var or__3548__auto____11283 = p1.call(null,p1__10859_SHARP_);

if(cljs.core.truth_(or__3548__auto____11283))
{return or__3548__auto____11283;
} else
{return p2.call(null,p1__10859_SHARP_);
}
}),args);
}
};
var G__11408 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11408__delegate.call(this, x, y, z, args);
};
G__11408.cljs$lang$maxFixedArity = 3;
G__11408.cljs$lang$applyTo = (function (arglist__11410){
var x = cljs.core.first(arglist__11410);
var y = cljs.core.first(cljs.core.next(arglist__11410));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11410)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11410)));
return G__11408__delegate.call(this, x, y, z, args);
});
return G__11408;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11398.call(this);
case  1 :
return sp2__11399.call(this,x);
case  2 :
return sp2__11400.call(this,x,y);
case  3 :
return sp2__11401.call(this,x,y,z);
default:
return sp2__11402.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11402.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11385 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11414 = (function (){
return null;
});
var sp3__11415 = (function (x){
var or__3548__auto____11284 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11284))
{return or__3548__auto____11284;
} else
{var or__3548__auto____11285 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11285))
{return or__3548__auto____11285;
} else
{return p3.call(null,x);
}
}
});
var sp3__11416 = (function (x,y){
var or__3548__auto____11286 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11286))
{return or__3548__auto____11286;
} else
{var or__3548__auto____11287 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11287))
{return or__3548__auto____11287;
} else
{var or__3548__auto____11288 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11288))
{return or__3548__auto____11288;
} else
{var or__3548__auto____11289 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11289))
{return or__3548__auto____11289;
} else
{var or__3548__auto____11290 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11290))
{return or__3548__auto____11290;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11417 = (function (x,y,z){
var or__3548__auto____11292 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11292))
{return or__3548__auto____11292;
} else
{var or__3548__auto____11293 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11293))
{return or__3548__auto____11293;
} else
{var or__3548__auto____11294 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11294))
{return or__3548__auto____11294;
} else
{var or__3548__auto____11295 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11295))
{return or__3548__auto____11295;
} else
{var or__3548__auto____11296 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11296))
{return or__3548__auto____11296;
} else
{var or__3548__auto____11298 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11298))
{return or__3548__auto____11298;
} else
{var or__3548__auto____11299 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11299))
{return or__3548__auto____11299;
} else
{var or__3548__auto____11300 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11300))
{return or__3548__auto____11300;
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
var sp3__11418 = (function() { 
var G__11430__delegate = function (x,y,z,args){
var or__3548__auto____11311 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11311))
{return or__3548__auto____11311;
} else
{return cljs.core.some.call(null,(function (p1__10860_SHARP_){
var or__3548__auto____11325 = p1.call(null,p1__10860_SHARP_);

if(cljs.core.truth_(or__3548__auto____11325))
{return or__3548__auto____11325;
} else
{var or__3548__auto____11327 = p2.call(null,p1__10860_SHARP_);

if(cljs.core.truth_(or__3548__auto____11327))
{return or__3548__auto____11327;
} else
{return p3.call(null,p1__10860_SHARP_);
}
}
}),args);
}
};
var G__11430 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11430__delegate.call(this, x, y, z, args);
};
G__11430.cljs$lang$maxFixedArity = 3;
G__11430.cljs$lang$applyTo = (function (arglist__11433){
var x = cljs.core.first(arglist__11433);
var y = cljs.core.first(cljs.core.next(arglist__11433));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11433)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11433)));
return G__11430__delegate.call(this, x, y, z, args);
});
return G__11430;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11414.call(this);
case  1 :
return sp3__11415.call(this,x);
case  2 :
return sp3__11416.call(this,x,y);
case  3 :
return sp3__11417.call(this,x,y,z);
default:
return sp3__11418.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11418.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11387 = (function() { 
var G__11436__delegate = function (p1,p2,p3,ps){
var ps__11328 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11437 = (function (){
return null;
});
var spn__11438 = (function (x){
return cljs.core.some.call(null,(function (p1__10862_SHARP_){
return p1__10862_SHARP_.call(null,x);
}),ps__11328);
});
var spn__11439 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10863_SHARP_){
var or__3548__auto____11333 = p1__10863_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11333))
{return or__3548__auto____11333;
} else
{return p1__10863_SHARP_.call(null,y);
}
}),ps__11328);
});
var spn__11440 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10864_SHARP_){
var or__3548__auto____11337 = p1__10864_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11337))
{return or__3548__auto____11337;
} else
{var or__3548__auto____11339 = p1__10864_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11339))
{return or__3548__auto____11339;
} else
{return p1__10864_SHARP_.call(null,z);
}
}
}),ps__11328);
});
var spn__11441 = (function() { 
var G__11445__delegate = function (x,y,z,args){
var or__3548__auto____11376 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11376))
{return or__3548__auto____11376;
} else
{return cljs.core.some.call(null,(function (p1__10865_SHARP_){
return cljs.core.some.call(null,p1__10865_SHARP_,args);
}),ps__11328);
}
};
var G__11445 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11445__delegate.call(this, x, y, z, args);
};
G__11445.cljs$lang$maxFixedArity = 3;
G__11445.cljs$lang$applyTo = (function (arglist__11451){
var x = cljs.core.first(arglist__11451);
var y = cljs.core.first(cljs.core.next(arglist__11451));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11451)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11451)));
return G__11445__delegate.call(this, x, y, z, args);
});
return G__11445;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11437.call(this);
case  1 :
return spn__11438.call(this,x);
case  2 :
return spn__11439.call(this,x,y);
case  3 :
return spn__11440.call(this,x,y,z);
default:
return spn__11441.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11441.cljs$lang$applyTo;
return spn;
})()
};
var G__11436 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11436__delegate.call(this, p1, p2, p3, ps);
};
G__11436.cljs$lang$maxFixedArity = 3;
G__11436.cljs$lang$applyTo = (function (arglist__11457){
var p1 = cljs.core.first(arglist__11457);
var p2 = cljs.core.first(cljs.core.next(arglist__11457));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11457)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11457)));
return G__11436__delegate.call(this, p1, p2, p3, ps);
});
return G__11436;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11383.call(this,p1);
case  2 :
return some_fn__11384.call(this,p1,p2);
case  3 :
return some_fn__11385.call(this,p1,p2,p3);
default:
return some_fn__11387.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11387.cljs$lang$applyTo;
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
var map__11512 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11469 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11469))
{var s__11472 = temp__3698__auto____11469;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11472)),map.call(null,f,cljs.core.rest.call(null,s__11472)));
} else
{return null;
}
})));
});
var map__11514 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11478 = cljs.core.seq.call(null,c1);
var s2__11479 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11482 = s1__11478;

if(cljs.core.truth_(and__3546__auto____11482))
{return s2__11479;
} else
{return and__3546__auto____11482;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11478),cljs.core.first.call(null,s2__11479)),map.call(null,f,cljs.core.rest.call(null,s1__11478),cljs.core.rest.call(null,s2__11479)));
} else
{return null;
}
})));
});
var map__11515 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11487 = cljs.core.seq.call(null,c1);
var s2__11489 = cljs.core.seq.call(null,c2);
var s3__11491 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11492 = s1__11487;

if(cljs.core.truth_(and__3546__auto____11492))
{var and__3546__auto____11494 = s2__11489;

if(cljs.core.truth_(and__3546__auto____11494))
{return s3__11491;
} else
{return and__3546__auto____11494;
}
} else
{return and__3546__auto____11492;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11487),cljs.core.first.call(null,s2__11489),cljs.core.first.call(null,s3__11491)),map.call(null,f,cljs.core.rest.call(null,s1__11487),cljs.core.rest.call(null,s2__11489),cljs.core.rest.call(null,s3__11491)));
} else
{return null;
}
})));
});
var map__11516 = (function() { 
var G__11537__delegate = function (f,c1,c2,c3,colls){
var step__11505 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11502 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11502)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11502),step.call(null,map.call(null,cljs.core.rest,ss__11502)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11240_SHARP_){
return cljs.core.apply.call(null,f,p1__11240_SHARP_);
}),step__11505.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11537 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11537__delegate.call(this, f, c1, c2, c3, colls);
};
G__11537.cljs$lang$maxFixedArity = 4;
G__11537.cljs$lang$applyTo = (function (arglist__11545){
var f = cljs.core.first(arglist__11545);
var c1 = cljs.core.first(cljs.core.next(arglist__11545));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11545)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11545))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11545))));
return G__11537__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11537;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11512.call(this,f,c1);
case  3 :
return map__11514.call(this,f,c1,c2);
case  4 :
return map__11515.call(this,f,c1,c2,c3);
default:
return map__11516.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11516.cljs$lang$applyTo;
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
{var temp__3698__auto____11671 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11671))
{var s__11673 = temp__3698__auto____11671;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11673),take.call(null,(n - 1),cljs.core.rest.call(null,s__11673)));
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
var step__11692 = (function (n,coll){
while(true){
var s__11690 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11691 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11691))
{return s__11690;
} else
{return and__3546__auto____11691;
}
})()))
{{
var G__11697 = (n - 1);
var G__11698 = cljs.core.rest.call(null,s__11690);
n = G__11697;
coll = G__11698;
continue;
}
} else
{return s__11690;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11692.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11716 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11719 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11716.call(this,n);
case  2 :
return drop_last__11719.call(this,n,s);
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
var s__11728 = cljs.core.seq.call(null,coll);
var lead__11730 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11730))
{{
var G__11735 = cljs.core.next.call(null,s__11728);
var G__11736 = cljs.core.next.call(null,lead__11730);
s__11728 = G__11735;
lead__11730 = G__11736;
continue;
}
} else
{return s__11728;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11746 = (function (pred,coll){
while(true){
var s__11740 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11743 = s__11740;

if(cljs.core.truth_(and__3546__auto____11743))
{return pred.call(null,cljs.core.first.call(null,s__11740));
} else
{return and__3546__auto____11743;
}
})()))
{{
var G__11758 = pred;
var G__11760 = cljs.core.rest.call(null,s__11740);
pred = G__11758;
coll = G__11760;
continue;
}
} else
{return s__11740;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11746.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11771 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11771))
{var s__11773 = temp__3698__auto____11771;

return cljs.core.concat.call(null,s__11773,cycle.call(null,s__11773));
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
var repeat__11791 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11792 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11791.call(this,n);
case  2 :
return repeat__11792.call(this,n,x);
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
var repeatedly__11806 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11807 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11806.call(this,n);
case  2 :
return repeatedly__11807.call(this,n,f);
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
var interleave__11854 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11837 = cljs.core.seq.call(null,c1);
var s2__11838 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11839 = s1__11837;

if(cljs.core.truth_(and__3546__auto____11839))
{return s2__11838;
} else
{return and__3546__auto____11839;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11837),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11838),interleave.call(null,cljs.core.rest.call(null,s1__11837),cljs.core.rest.call(null,s2__11838))));
} else
{return null;
}
})));
});
var interleave__11855 = (function() { 
var G__11862__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11849 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11849)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11849),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11849)));
} else
{return null;
}
})));
};
var G__11862 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11862__delegate.call(this, c1, c2, colls);
};
G__11862.cljs$lang$maxFixedArity = 2;
G__11862.cljs$lang$applyTo = (function (arglist__11872){
var c1 = cljs.core.first(arglist__11872);
var c2 = cljs.core.first(cljs.core.next(arglist__11872));
var colls = cljs.core.rest(cljs.core.next(arglist__11872));
return G__11862__delegate.call(this, c1, c2, colls);
});
return G__11862;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11854.call(this,c1,c2);
default:
return interleave__11855.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11855.cljs$lang$applyTo;
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
var cat__11894 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11890 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11890))
{var coll__11891 = temp__3695__auto____11890;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11891),cat.call(null,cljs.core.rest.call(null,coll__11891),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11894.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11907 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11908 = (function() { 
var G__11910__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11910 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11910__delegate.call(this, f, coll, colls);
};
G__11910.cljs$lang$maxFixedArity = 2;
G__11910.cljs$lang$applyTo = (function (arglist__11911){
var f = cljs.core.first(arglist__11911);
var coll = cljs.core.first(cljs.core.next(arglist__11911));
var colls = cljs.core.rest(cljs.core.next(arglist__11911));
return G__11910__delegate.call(this, f, coll, colls);
});
return G__11910;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11907.call(this,f,coll);
default:
return mapcat__11908.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11908.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11920 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11920))
{var s__11921 = temp__3698__auto____11920;

var f__11922 = cljs.core.first.call(null,s__11921);
var r__11924 = cljs.core.rest.call(null,s__11921);

if(cljs.core.truth_(pred.call(null,f__11922)))
{return cljs.core.cons.call(null,f__11922,filter.call(null,pred,r__11924));
} else
{return filter.call(null,pred,r__11924);
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
var walk__11937 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11937.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11932_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11932_SHARP_));
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
var partition__11990 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11991 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11980 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11980))
{var s__11981 = temp__3698__auto____11980;

var p__11982 = cljs.core.take.call(null,n,s__11981);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11982))))
{return cljs.core.cons.call(null,p__11982,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11981)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11992 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11983 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11983))
{var s__11985 = temp__3698__auto____11983;

var p__11986 = cljs.core.take.call(null,n,s__11985);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11986))))
{return cljs.core.cons.call(null,p__11986,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11985)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11986,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11990.call(this,n,step);
case  3 :
return partition__11991.call(this,n,step,pad);
case  4 :
return partition__11992.call(this,n,step,pad,coll);
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
var get_in__12009 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12010 = (function (m,ks,not_found){
var sentinel__11999 = cljs.core.lookup_sentinel;
var m__12000 = m;
var ks__12001 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12001))
{var m__12002 = cljs.core.get.call(null,m__12000,cljs.core.first.call(null,ks__12001),sentinel__11999);

if(cljs.core.truth_((sentinel__11999 === m__12002)))
{return not_found;
} else
{{
var G__12012 = sentinel__11999;
var G__12013 = m__12002;
var G__12014 = cljs.core.next.call(null,ks__12001);
sentinel__11999 = G__12012;
m__12000 = G__12013;
ks__12001 = G__12014;
continue;
}
}
} else
{return m__12000;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12009.call(this,m,ks);
case  3 :
return get_in__12010.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12019,v){
var vec__12021__12022 = p__12019;
var k__12023 = cljs.core.nth.call(null,vec__12021__12022,0,null);
var ks__12024 = cljs.core.nthnext.call(null,vec__12021__12022,1);

if(cljs.core.truth_(ks__12024))
{return cljs.core.assoc.call(null,m,k__12023,assoc_in.call(null,cljs.core.get.call(null,m,k__12023),ks__12024,v));
} else
{return cljs.core.assoc.call(null,m,k__12023,v);
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
var update_in__delegate = function (m,p__12033,f,args){
var vec__12034__12035 = p__12033;
var k__12036 = cljs.core.nth.call(null,vec__12034__12035,0,null);
var ks__12037 = cljs.core.nthnext.call(null,vec__12034__12035,1);

if(cljs.core.truth_(ks__12037))
{return cljs.core.assoc.call(null,m,k__12036,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12036),ks__12037,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12036,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12036),args));
}
};
var update_in = function (m,p__12033,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12033, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12046){
var m = cljs.core.first(arglist__12046);
var p__12033 = cljs.core.first(cljs.core.next(arglist__12046));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12046)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12046)));
return update_in__delegate.call(this, m, p__12033, f, args);
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
var this__12056 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12259 = null;
var G__12259__12260 = (function (coll,k){
var this__12057 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12259__12261 = (function (coll,k,not_found){
var this__12058 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12259 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12259__12260.call(this,coll,k);
case  3 :
return G__12259__12261.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12259;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12063 = this;
var new_array__12064 = cljs.core.aclone.call(null,this__12063.array);

(new_array__12064[k] = v);
return (new cljs.core.Vector(this__12063.meta,new_array__12064));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12267 = null;
var G__12267__12268 = (function (coll,k){
var this__12065 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12267__12269 = (function (coll,k,not_found){
var this__12066 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12267 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12267__12268.call(this,coll,k);
case  3 :
return G__12267__12269.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12267;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12067 = this;
var new_array__12068 = cljs.core.aclone.call(null,this__12067.array);

new_array__12068.push(o);
return (new cljs.core.Vector(this__12067.meta,new_array__12068));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12271 = null;
var G__12271__12272 = (function (v,f){
var this__12069 = this;
return cljs.core.ci_reduce.call(null,this__12069.array,f);
});
var G__12271__12273 = (function (v,f,start){
var this__12072 = this;
return cljs.core.ci_reduce.call(null,this__12072.array,f,start);
});
G__12271 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12271__12272.call(this,v,f);
case  3 :
return G__12271__12273.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12271;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12076 = this;
if(cljs.core.truth_((this__12076.array.length > 0)))
{var vector_seq__12078 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12076.array.length)))
{return cljs.core.cons.call(null,(this__12076.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12078.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12079 = this;
return this__12079.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12080 = this;
var count__12081 = this__12080.array.length;

if(cljs.core.truth_((count__12081 > 0)))
{return (this__12080.array[(count__12081 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12082 = this;
if(cljs.core.truth_((this__12082.array.length > 0)))
{var new_array__12084 = cljs.core.aclone.call(null,this__12082.array);

new_array__12084.pop();
return (new cljs.core.Vector(this__12082.meta,new_array__12084));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12091 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12093 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12095 = this;
return (new cljs.core.Vector(meta,this__12095.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12098 = this;
return this__12098.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12322 = null;
var G__12322__12323 = (function (coll,n){
var this__12099 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12140 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12140))
{return (n < this__12099.array.length);
} else
{return and__3546__auto____12140;
}
})()))
{return (this__12099.array[n]);
} else
{return null;
}
});
var G__12322__12324 = (function (coll,n,not_found){
var this__12141 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12251 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12251))
{return (n < this__12141.array.length);
} else
{return and__3546__auto____12251;
}
})()))
{return (this__12141.array[n]);
} else
{return not_found;
}
});
G__12322 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12322__12323.call(this,coll,n);
case  3 :
return G__12322__12324.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12322;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12255 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12255.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12534){
var args = cljs.core.seq( arglist__12534 );;
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
var this__12550 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12628 = null;
var G__12628__12629 = (function (coll,k){
var this__12553 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12628__12630 = (function (coll,k,not_found){
var this__12558 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12628 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12628__12629.call(this,coll,k);
case  3 :
return G__12628__12630.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12628;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12562 = this;
var v_pos__12563 = (this__12562.start + key);

return (new cljs.core.Subvec(this__12562.meta,cljs.core._assoc.call(null,this__12562.v,v_pos__12563,val),this__12562.start,((this__12562.end > (v_pos__12563 + 1)) ? this__12562.end : (v_pos__12563 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12636 = null;
var G__12636__12638 = (function (coll,k){
var this__12569 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12636__12639 = (function (coll,k,not_found){
var this__12572 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12636 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12636__12638.call(this,coll,k);
case  3 :
return G__12636__12639.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12636;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12573 = this;
return (new cljs.core.Subvec(this__12573.meta,cljs.core._assoc_n.call(null,this__12573.v,this__12573.end,o),this__12573.start,(this__12573.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12652 = null;
var G__12652__12654 = (function (coll,f){
var this__12578 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12652__12655 = (function (coll,f,start){
var this__12580 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12652 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12652__12654.call(this,coll,f);
case  3 :
return G__12652__12655.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12652;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12589 = this;
var subvec_seq__12592 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12589.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12589.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12592.call(null,this__12589.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12597 = this;
return (this__12597.end - this__12597.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12599 = this;
return cljs.core._nth.call(null,this__12599.v,(this__12599.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12605 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12605.start,this__12605.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12605.meta,this__12605.v,this__12605.start,(this__12605.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12608 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12609 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12611 = this;
return (new cljs.core.Subvec(meta,this__12611.v,this__12611.start,this__12611.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12613 = this;
return this__12613.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12681 = null;
var G__12681__12682 = (function (coll,n){
var this__12618 = this;
return cljs.core._nth.call(null,this__12618.v,(this__12618.start + n));
});
var G__12681__12683 = (function (coll,n,not_found){
var this__12623 = this;
return cljs.core._nth.call(null,this__12623.v,(this__12623.start + n),not_found);
});
G__12681 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12681__12682.call(this,coll,n);
case  3 :
return G__12681__12683.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12681;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12624 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12624.meta);
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
var subvec__12695 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12696 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12695.call(this,v,start);
case  3 :
return subvec__12696.call(this,v,start,end);
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
var this__12708 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12710 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12712 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12714 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12714.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12718 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12720 = this;
return cljs.core._first.call(null,this__12720.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12722 = this;
var temp__3695__auto____12723 = cljs.core.next.call(null,this__12722.front);

if(cljs.core.truth_(temp__3695__auto____12723))
{var f1__12726 = temp__3695__auto____12723;

return (new cljs.core.PersistentQueueSeq(this__12722.meta,f1__12726,this__12722.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12722.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12722.meta,this__12722.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12735 = this;
return this__12735.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12737 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12737.front,this__12737.rear));
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
var this__12763 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12766 = this;
if(cljs.core.truth_(this__12766.front))
{return (new cljs.core.PersistentQueue(this__12766.meta,(this__12766.count + 1),this__12766.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12767 = this__12766.rear;

if(cljs.core.truth_(or__3548__auto____12767))
{return or__3548__auto____12767;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12766.meta,(this__12766.count + 1),cljs.core.conj.call(null,this__12766.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12769 = this;
var rear__12770 = cljs.core.seq.call(null,this__12769.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12772 = this__12769.front;

if(cljs.core.truth_(or__3548__auto____12772))
{return or__3548__auto____12772;
} else
{return rear__12770;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12769.front,cljs.core.seq.call(null,rear__12770)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12774 = this;
return this__12774.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12776 = this;
return cljs.core._first.call(null,this__12776.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12777 = this;
if(cljs.core.truth_(this__12777.front))
{var temp__3695__auto____12779 = cljs.core.next.call(null,this__12777.front);

if(cljs.core.truth_(temp__3695__auto____12779))
{var f1__12780 = temp__3695__auto____12779;

return (new cljs.core.PersistentQueue(this__12777.meta,(this__12777.count - 1),f1__12780,this__12777.rear));
} else
{return (new cljs.core.PersistentQueue(this__12777.meta,(this__12777.count - 1),cljs.core.seq.call(null,this__12777.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12785 = this;
return cljs.core.first.call(null,this__12785.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12787 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12789 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12790 = this;
return (new cljs.core.PersistentQueue(meta,this__12790.count,this__12790.front,this__12790.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12792 = this;
return this__12792.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12796 = this;
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
var this__12813 = this;
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
var len__12830 = array.length;

var i__12831 = 0;

while(true){
if(cljs.core.truth_((i__12831 < len__12830)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12831]))))
{return i__12831;
} else
{{
var G__12835 = (i__12831 + incr);
i__12831 = G__12835;
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
var obj_map_contains_key_QMARK___12853 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12854 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12838 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12838))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12838;
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
return obj_map_contains_key_QMARK___12853.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12854.call(this,k,strobj,true_val,false_val);
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
var this__12883 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12990 = null;
var G__12990__12991 = (function (coll,k){
var this__12887 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12990__12992 = (function (coll,k,not_found){
var this__12888 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12888.strobj,(this__12888.strobj[k]),not_found);
});
G__12990 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12990__12991.call(this,coll,k);
case  3 :
return G__12990__12992.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12990;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12893 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12895 = goog.object.clone.call(null,this__12893.strobj);
var overwrite_QMARK___12900 = new_strobj__12895.hasOwnProperty(k);

(new_strobj__12895[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12900))
{return (new cljs.core.ObjMap(this__12893.meta,this__12893.keys,new_strobj__12895));
} else
{var new_keys__12902 = cljs.core.aclone.call(null,this__12893.keys);

new_keys__12902.push(k);
return (new cljs.core.ObjMap(this__12893.meta,new_keys__12902,new_strobj__12895));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12893.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12907 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12907.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12994 = null;
var G__12994__12995 = (function (coll,k){
var this__12912 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12994__12996 = (function (coll,k,not_found){
var this__12914 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12994 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12994__12995.call(this,coll,k);
case  3 :
return G__12994__12996.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12994;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12917 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12940 = this;
if(cljs.core.truth_((this__12940.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12862_SHARP_){
return cljs.core.vector.call(null,p1__12862_SHARP_,(this__12940.strobj[p1__12862_SHARP_]));
}),this__12940.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12942 = this;
return this__12942.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12945 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12947 = this;
return (new cljs.core.ObjMap(meta,this__12947.keys,this__12947.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12962 = this;
return this__12962.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12976 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12976.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12980 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12982 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12982))
{return this__12980.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12982;
}
})()))
{var new_keys__12984 = cljs.core.aclone.call(null,this__12980.keys);
var new_strobj__12985 = goog.object.clone.call(null,this__12980.strobj);

new_keys__12984.splice(cljs.core.scan_array.call(null,1,k,new_keys__12984),1);
cljs.core.js_delete.call(null,new_strobj__12985,k);
return (new cljs.core.ObjMap(this__12980.meta,new_keys__12984,new_strobj__12985));
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
var this__13045 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13103 = null;
var G__13103__13104 = (function (coll,k){
var this__13046 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13103__13105 = (function (coll,k,not_found){
var this__13047 = this;
var bucket__13048 = (this__13047.hashobj[cljs.core.hash.call(null,k)]);
var i__13049 = (cljs.core.truth_(bucket__13048)?cljs.core.scan_array.call(null,2,k,bucket__13048):null);

if(cljs.core.truth_(i__13049))
{return (bucket__13048[(i__13049 + 1)]);
} else
{return not_found;
}
});
G__13103 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13103__13104.call(this,coll,k);
case  3 :
return G__13103__13105.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13103;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13050 = this;
var h__13051 = cljs.core.hash.call(null,k);
var bucket__13052 = (this__13050.hashobj[h__13051]);

if(cljs.core.truth_(bucket__13052))
{var new_bucket__13053 = cljs.core.aclone.call(null,bucket__13052);
var new_hashobj__13054 = goog.object.clone.call(null,this__13050.hashobj);

(new_hashobj__13054[h__13051] = new_bucket__13053);
var temp__3695__auto____13055 = cljs.core.scan_array.call(null,2,k,new_bucket__13053);

if(cljs.core.truth_(temp__3695__auto____13055))
{var i__13056 = temp__3695__auto____13055;

(new_bucket__13053[(i__13056 + 1)] = v);
return (new cljs.core.HashMap(this__13050.meta,this__13050.count,new_hashobj__13054));
} else
{new_bucket__13053.push(k,v);
return (new cljs.core.HashMap(this__13050.meta,(this__13050.count + 1),new_hashobj__13054));
}
} else
{var new_hashobj__13059 = goog.object.clone.call(null,this__13050.hashobj);

(new_hashobj__13059[h__13051] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13050.meta,(this__13050.count + 1),new_hashobj__13059));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13061 = this;
var bucket__13064 = (this__13061.hashobj[cljs.core.hash.call(null,k)]);
var i__13065 = (cljs.core.truth_(bucket__13064)?cljs.core.scan_array.call(null,2,k,bucket__13064):null);

if(cljs.core.truth_(i__13065))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13122 = null;
var G__13122__13123 = (function (coll,k){
var this__13067 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13122__13124 = (function (coll,k,not_found){
var this__13070 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13122 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13122__13123.call(this,coll,k);
case  3 :
return G__13122__13124.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13122;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13073 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13076 = this;
if(cljs.core.truth_((this__13076.count > 0)))
{var hashes__13078 = cljs.core.js_keys.call(null,this__13076.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13035_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13076.hashobj[p1__13035_SHARP_])));
}),hashes__13078);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13082 = this;
return this__13082.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13084 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13086 = this;
return (new cljs.core.HashMap(meta,this__13086.count,this__13086.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13088 = this;
return this__13088.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13089 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13089.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13091 = this;
var h__13092 = cljs.core.hash.call(null,k);
var bucket__13093 = (this__13091.hashobj[h__13092]);
var i__13095 = (cljs.core.truth_(bucket__13093)?cljs.core.scan_array.call(null,2,k,bucket__13093):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13095)))
{return coll;
} else
{var new_hashobj__13096 = goog.object.clone.call(null,this__13091.hashobj);

if(cljs.core.truth_((3 > bucket__13093.length)))
{cljs.core.js_delete.call(null,new_hashobj__13096,h__13092);
} else
{var new_bucket__13098 = cljs.core.aclone.call(null,bucket__13093);

new_bucket__13098.splice(i__13095,2);
(new_hashobj__13096[h__13092] = new_bucket__13098);
}
return (new cljs.core.HashMap(this__13091.meta,(this__13091.count - 1),new_hashobj__13096));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13193 = ks.length;

var i__13194 = 0;
var out__13195 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13194 < len__13193)))
{{
var G__13196 = (i__13194 + 1);
var G__13197 = cljs.core.assoc.call(null,out__13195,(ks[i__13194]),(vs[i__13194]));
i__13194 = G__13196;
out__13195 = G__13197;
continue;
}
} else
{return out__13195;
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
var in$__13206 = cljs.core.seq.call(null,keyvals);
var out__13207 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13206))
{{
var G__13209 = cljs.core.nnext.call(null,in$__13206);
var G__13210 = cljs.core.assoc.call(null,out__13207,cljs.core.first.call(null,in$__13206),cljs.core.second.call(null,in$__13206));
in$__13206 = G__13209;
out__13207 = G__13210;
continue;
}
} else
{return out__13207;
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
hash_map.cljs$lang$applyTo = (function (arglist__13211){
var keyvals = cljs.core.seq( arglist__13211 );;
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
{return cljs.core.reduce.call(null,(function (p1__13214_SHARP_,p2__13215_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13217 = p1__13214_SHARP_;

if(cljs.core.truth_(or__3548__auto____13217))
{return or__3548__auto____13217;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13215_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13218){
var maps = cljs.core.seq( arglist__13218 );;
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
{var merge_entry__13226 = (function (m,e){
var k__13222 = cljs.core.first.call(null,e);
var v__13223 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13222)))
{return cljs.core.assoc.call(null,m,k__13222,f.call(null,cljs.core.get.call(null,m,k__13222),v__13223));
} else
{return cljs.core.assoc.call(null,m,k__13222,v__13223);
}
});
var merge2__13231 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13226,(function (){var or__3548__auto____13230 = m1;

if(cljs.core.truth_(or__3548__auto____13230))
{return or__3548__auto____13230;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13231,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13240){
var f = cljs.core.first(arglist__13240);
var maps = cljs.core.rest(arglist__13240);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13244 = cljs.core.ObjMap.fromObject([],{});
var keys__13245 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13245))
{var key__13248 = cljs.core.first.call(null,keys__13245);
var entry__13354 = cljs.core.get.call(null,map,key__13248,"﷐'user/not-found");

{
var G__13363 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13354,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13244,key__13248,entry__13354):ret__13244);
var G__13364 = cljs.core.next.call(null,keys__13245);
ret__13244 = G__13363;
keys__13245 = G__13364;
continue;
}
} else
{return ret__13244;
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
var this__13380 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13419 = null;
var G__13419__13420 = (function (coll,v){
var this__13382 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13419__13421 = (function (coll,v,not_found){
var this__13383 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13383.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13419 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13419__13420.call(this,coll,v);
case  3 :
return G__13419__13421.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13419;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13429 = null;
var G__13429__13432 = (function (coll,k){
var this__13384 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13429__13433 = (function (coll,k,not_found){
var this__13385 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13429 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13429__13432.call(this,coll,k);
case  3 :
return G__13429__13433.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13429;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13388 = this;
return (new cljs.core.Set(this__13388.meta,cljs.core.assoc.call(null,this__13388.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13390 = this;
return cljs.core.keys.call(null,this__13390.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13392 = this;
return (new cljs.core.Set(this__13392.meta,cljs.core.dissoc.call(null,this__13392.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13394 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13397 = this;
var and__3546__auto____13400 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13400))
{var and__3546__auto____13402 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13402))
{return cljs.core.every_QMARK_.call(null,(function (p1__13241_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13241_SHARP_);
}),other);
} else
{return and__3546__auto____13402;
}
} else
{return and__3546__auto____13400;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13406 = this;
return (new cljs.core.Set(meta,this__13406.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13410 = this;
return this__13410.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13412 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13412.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13460 = cljs.core.seq.call(null,coll);
var out__13461 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13460))))
{{
var G__13472 = cljs.core.rest.call(null,in$__13460);
var G__13473 = cljs.core.conj.call(null,out__13461,cljs.core.first.call(null,in$__13460));
in$__13460 = G__13472;
out__13461 = G__13473;
continue;
}
} else
{return out__13461;
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
{var n__13475 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13477 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13477))
{var e__13478 = temp__3695__auto____13477;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13478));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13475,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13455_SHARP_){
var temp__3695__auto____13479 = cljs.core.find.call(null,smap,p1__13455_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13479))
{var e__13483 = temp__3695__auto____13479;

return cljs.core.second.call(null,e__13483);
} else
{return p1__13455_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13496 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13487,seen){
while(true){
var vec__13488__13489 = p__13487;
var f__13490 = cljs.core.nth.call(null,vec__13488__13489,0,null);
var xs__13491 = vec__13488__13489;

var temp__3698__auto____13492 = cljs.core.seq.call(null,xs__13491);

if(cljs.core.truth_(temp__3698__auto____13492))
{var s__13493 = temp__3698__auto____13492;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13490)))
{{
var G__13500 = cljs.core.rest.call(null,s__13493);
var G__13501 = seen;
p__13487 = G__13500;
seen = G__13501;
continue;
}
} else
{return cljs.core.cons.call(null,f__13490,step.call(null,cljs.core.rest.call(null,s__13493),cljs.core.conj.call(null,seen,f__13490)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13496.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13504 = cljs.core.Vector.fromArray([]);
var s__13505 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13505)))
{{
var G__13506 = cljs.core.conj.call(null,ret__13504,cljs.core.first.call(null,s__13505));
var G__13508 = cljs.core.next.call(null,s__13505);
ret__13504 = G__13506;
s__13505 = G__13508;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13504);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13513 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13513))
{return or__3548__auto____13513;
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
if(cljs.core.truth_((function (){var or__3548__auto____13522 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13522))
{return or__3548__auto____13522;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13525 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13525 > -1)))
{return cljs.core.subs.call(null,x,2,i__13525);
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
var map__13534 = cljs.core.ObjMap.fromObject([],{});
var ks__13535 = cljs.core.seq.call(null,keys);
var vs__13536 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13537 = ks__13535;

if(cljs.core.truth_(and__3546__auto____13537))
{return vs__13536;
} else
{return and__3546__auto____13537;
}
})()))
{{
var G__13538 = cljs.core.assoc.call(null,map__13534,cljs.core.first.call(null,ks__13535),cljs.core.first.call(null,vs__13536));
var G__13539 = cljs.core.next.call(null,ks__13535);
var G__13540 = cljs.core.next.call(null,vs__13536);
map__13534 = G__13538;
ks__13535 = G__13539;
vs__13536 = G__13540;
continue;
}
} else
{return map__13534;
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
var max_key__13549 = (function (k,x){
return x;
});
var max_key__13550 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13551 = (function() { 
var G__13556__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13532_SHARP_,p2__13533_SHARP_){
return max_key.call(null,k,p1__13532_SHARP_,p2__13533_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13556 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13556__delegate.call(this, k, x, y, more);
};
G__13556.cljs$lang$maxFixedArity = 3;
G__13556.cljs$lang$applyTo = (function (arglist__13562){
var k = cljs.core.first(arglist__13562);
var x = cljs.core.first(cljs.core.next(arglist__13562));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13562)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13562)));
return G__13556__delegate.call(this, k, x, y, more);
});
return G__13556;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13549.call(this,k,x);
case  3 :
return max_key__13550.call(this,k,x,y);
default:
return max_key__13551.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13551.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13569 = (function (k,x){
return x;
});
var min_key__13570 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13571 = (function() { 
var G__13577__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13543_SHARP_,p2__13544_SHARP_){
return min_key.call(null,k,p1__13543_SHARP_,p2__13544_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13577 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13577__delegate.call(this, k, x, y, more);
};
G__13577.cljs$lang$maxFixedArity = 3;
G__13577.cljs$lang$applyTo = (function (arglist__13582){
var k = cljs.core.first(arglist__13582);
var x = cljs.core.first(cljs.core.next(arglist__13582));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13582)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13582)));
return G__13577__delegate.call(this, k, x, y, more);
});
return G__13577;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13569.call(this,k,x);
case  3 :
return min_key__13570.call(this,k,x,y);
default:
return min_key__13571.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13571.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13596 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13597 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13591 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13591))
{var s__13592 = temp__3698__auto____13591;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13592),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13592)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13596.call(this,n,step);
case  3 :
return partition_all__13597.call(this,n,step,coll);
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
var temp__3698__auto____13612 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13612))
{var s__13615 = temp__3698__auto____13612;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13615))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13615),take_while.call(null,pred,cljs.core.rest.call(null,s__13615)));
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
var this__13646 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13648 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13705 = null;
var G__13705__13706 = (function (rng,f){
var this__13654 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13705__13707 = (function (rng,f,s){
var this__13657 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13705 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13705__13706.call(this,rng,f);
case  3 :
return G__13705__13707.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13705;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13659 = this;
var comp__13662 = (cljs.core.truth_((this__13659.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13662.call(null,this__13659.start,this__13659.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13663 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13663.end - this__13663.start) / this__13663.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13665 = this;
return this__13665.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13667 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13667.meta,(this__13667.start + this__13667.step),this__13667.end,this__13667.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13670 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13671 = this;
return (new cljs.core.Range(meta,this__13671.start,this__13671.end,this__13671.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13674 = this;
return this__13674.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13719 = null;
var G__13719__13720 = (function (rng,n){
var this__13675 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13675.start + (n * this__13675.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13701 = (this__13675.start > this__13675.end);

if(cljs.core.truth_(and__3546__auto____13701))
{return cljs.core._EQ_.call(null,this__13675.step,0);
} else
{return and__3546__auto____13701;
}
})()))
{return this__13675.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13719__13721 = (function (rng,n,not_found){
var this__13702 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13702.start + (n * this__13702.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13703 = (this__13702.start > this__13702.end);

if(cljs.core.truth_(and__3546__auto____13703))
{return cljs.core._EQ_.call(null,this__13702.step,0);
} else
{return and__3546__auto____13703;
}
})()))
{return this__13702.start;
} else
{return not_found;
}
}
});
G__13719 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13719__13720.call(this,rng,n);
case  3 :
return G__13719__13721.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13719;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13704 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13704.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13739 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13740 = (function (end){
return range.call(null,0,end,1);
});
var range__13741 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13742 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13739.call(this);
case  1 :
return range__13740.call(this,start);
case  2 :
return range__13741.call(this,start,end);
case  3 :
return range__13742.call(this,start,end,step);
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
var temp__3698__auto____13745 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13745))
{var s__13748 = temp__3698__auto____13745;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13748),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13748)));
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
var temp__3698__auto____13760 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13760))
{var s__13761 = temp__3698__auto____13760;

var fst__13764 = cljs.core.first.call(null,s__13761);
var fv__13765 = f.call(null,fst__13764);
var run__13767 = cljs.core.cons.call(null,fst__13764,cljs.core.take_while.call(null,(function (p1__13754_SHARP_){
return cljs.core._EQ_.call(null,fv__13765,f.call(null,p1__13754_SHARP_));
}),cljs.core.next.call(null,s__13761)));

return cljs.core.cons.call(null,run__13767,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13767),s__13761))));
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
var reductions__13806 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13797 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13797))
{var s__13798 = temp__3695__auto____13797;

return reductions.call(null,f,cljs.core.first.call(null,s__13798),cljs.core.rest.call(null,s__13798));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13807 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13800 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13800))
{var s__13801 = temp__3698__auto____13800;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13801)),cljs.core.rest.call(null,s__13801));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13806.call(this,f,init);
case  3 :
return reductions__13807.call(this,f,init,coll);
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
var juxt__13899 = (function (f){
return (function() {
var G__13947 = null;
var G__13947__13949 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13947__13950 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13947__13951 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13947__13952 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13947__13953 = (function() { 
var G__13956__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13956 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13956__delegate.call(this, x, y, z, args);
};
G__13956.cljs$lang$maxFixedArity = 3;
G__13956.cljs$lang$applyTo = (function (arglist__13957){
var x = cljs.core.first(arglist__13957);
var y = cljs.core.first(cljs.core.next(arglist__13957));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13957)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13957)));
return G__13956__delegate.call(this, x, y, z, args);
});
return G__13956;
})()
;
G__13947 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13947__13949.call(this);
case  1 :
return G__13947__13950.call(this,x);
case  2 :
return G__13947__13951.call(this,x,y);
case  3 :
return G__13947__13952.call(this,x,y,z);
default:
return G__13947__13953.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13947.cljs$lang$maxFixedArity = 3;
G__13947.cljs$lang$applyTo = G__13947__13953.cljs$lang$applyTo;
return G__13947;
})()
});
var juxt__13943 = (function (f,g){
return (function() {
var G__13985 = null;
var G__13985__13987 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13985__13988 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13985__14019 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13985__14020 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13985__14022 = (function() { 
var G__14030__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14030 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14030__delegate.call(this, x, y, z, args);
};
G__14030.cljs$lang$maxFixedArity = 3;
G__14030.cljs$lang$applyTo = (function (arglist__14038){
var x = cljs.core.first(arglist__14038);
var y = cljs.core.first(cljs.core.next(arglist__14038));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14038)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14038)));
return G__14030__delegate.call(this, x, y, z, args);
});
return G__14030;
})()
;
G__13985 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13985__13987.call(this);
case  1 :
return G__13985__13988.call(this,x);
case  2 :
return G__13985__14019.call(this,x,y);
case  3 :
return G__13985__14020.call(this,x,y,z);
default:
return G__13985__14022.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13985.cljs$lang$maxFixedArity = 3;
G__13985.cljs$lang$applyTo = G__13985__14022.cljs$lang$applyTo;
return G__13985;
})()
});
var juxt__13944 = (function (f,g,h){
return (function() {
var G__14041 = null;
var G__14041__14042 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14041__14043 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14041__14044 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14041__14045 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14041__14046 = (function() { 
var G__14051__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14051 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14051__delegate.call(this, x, y, z, args);
};
G__14051.cljs$lang$maxFixedArity = 3;
G__14051.cljs$lang$applyTo = (function (arglist__14052){
var x = cljs.core.first(arglist__14052);
var y = cljs.core.first(cljs.core.next(arglist__14052));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14052)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14052)));
return G__14051__delegate.call(this, x, y, z, args);
});
return G__14051;
})()
;
G__14041 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14041__14042.call(this);
case  1 :
return G__14041__14043.call(this,x);
case  2 :
return G__14041__14044.call(this,x,y);
case  3 :
return G__14041__14045.call(this,x,y,z);
default:
return G__14041__14046.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14041.cljs$lang$maxFixedArity = 3;
G__14041.cljs$lang$applyTo = G__14041__14046.cljs$lang$applyTo;
return G__14041;
})()
});
var juxt__13945 = (function() { 
var G__14055__delegate = function (f,g,h,fs){
var fs__13887 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14058 = null;
var G__14058__14060 = (function (){
return cljs.core.reduce.call(null,(function (p1__13778_SHARP_,p2__13779_SHARP_){
return cljs.core.conj.call(null,p1__13778_SHARP_,p2__13779_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13887);
});
var G__14058__14061 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13780_SHARP_,p2__13781_SHARP_){
return cljs.core.conj.call(null,p1__13780_SHARP_,p2__13781_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13887);
});
var G__14058__14062 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13783_SHARP_,p2__13784_SHARP_){
return cljs.core.conj.call(null,p1__13783_SHARP_,p2__13784_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13887);
});
var G__14058__14063 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13787_SHARP_,p2__13788_SHARP_){
return cljs.core.conj.call(null,p1__13787_SHARP_,p2__13788_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13887);
});
var G__14058__14064 = (function() { 
var G__14081__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13791_SHARP_,p2__13793_SHARP_){
return cljs.core.conj.call(null,p1__13791_SHARP_,cljs.core.apply.call(null,p2__13793_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13887);
};
var G__14081 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14081__delegate.call(this, x, y, z, args);
};
G__14081.cljs$lang$maxFixedArity = 3;
G__14081.cljs$lang$applyTo = (function (arglist__14082){
var x = cljs.core.first(arglist__14082);
var y = cljs.core.first(cljs.core.next(arglist__14082));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14082)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14082)));
return G__14081__delegate.call(this, x, y, z, args);
});
return G__14081;
})()
;
G__14058 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14058__14060.call(this);
case  1 :
return G__14058__14061.call(this,x);
case  2 :
return G__14058__14062.call(this,x,y);
case  3 :
return G__14058__14063.call(this,x,y,z);
default:
return G__14058__14064.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14058.cljs$lang$maxFixedArity = 3;
G__14058.cljs$lang$applyTo = G__14058__14064.cljs$lang$applyTo;
return G__14058;
})()
};
var G__14055 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14055__delegate.call(this, f, g, h, fs);
};
G__14055.cljs$lang$maxFixedArity = 3;
G__14055.cljs$lang$applyTo = (function (arglist__14084){
var f = cljs.core.first(arglist__14084);
var g = cljs.core.first(cljs.core.next(arglist__14084));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14084)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14084)));
return G__14055__delegate.call(this, f, g, h, fs);
});
return G__14055;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13899.call(this,f);
case  2 :
return juxt__13943.call(this,f,g);
case  3 :
return juxt__13944.call(this,f,g,h);
default:
return juxt__13945.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13945.cljs$lang$applyTo;
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
var dorun__14109 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14112 = cljs.core.next.call(null,coll);
coll = G__14112;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14110 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14087 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14087))
{return (n > 0);
} else
{return and__3546__auto____14087;
}
})()))
{{
var G__14116 = (n - 1);
var G__14117 = cljs.core.next.call(null,coll);
n = G__14116;
coll = G__14117;
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
return dorun__14109.call(this,n);
case  2 :
return dorun__14110.call(this,n,coll);
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
var doall__14128 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14129 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14128.call(this,n);
case  2 :
return doall__14129.call(this,n,coll);
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
var matches__14134 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14134),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14134),1)))
{return cljs.core.first.call(null,matches__14134);
} else
{return cljs.core.vec.call(null,matches__14134);
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
var matches__14142 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14142)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14142),1)))
{return cljs.core.first.call(null,matches__14142);
} else
{return cljs.core.vec.call(null,matches__14142);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14144 = cljs.core.re_find.call(null,re,s);
var match_idx__14146 = s.search(re);
var match_str__14147 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14144))?cljs.core.first.call(null,match_data__14144):match_data__14144);
var post_match__14148 = cljs.core.subs.call(null,s,(match_idx__14146 + cljs.core.count.call(null,match_str__14147)));

if(cljs.core.truth_(match_data__14144))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14144,re_seq.call(null,re,post_match__14148));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14156_SHARP_){
return print_one.call(null,p1__14156_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14270 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14270))
{var and__3546__auto____14276 = (function (){var x__445__auto____14271 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14273 = x__445__auto____14271;

if(cljs.core.truth_(and__3546__auto____14273))
{var and__3546__auto____14274 = x__445__auto____14271.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14274))
{return cljs.core.not.call(null,x__445__auto____14271.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14274;
}
} else
{return and__3546__auto____14273;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14271);
}
})();

if(cljs.core.truth_(and__3546__auto____14276))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14276;
}
} else
{return and__3546__auto____14270;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14282 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14287 = x__445__auto____14282;

if(cljs.core.truth_(and__3546__auto____14287))
{var and__3546__auto____14291 = x__445__auto____14282.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14291))
{return cljs.core.not.call(null,x__445__auto____14282.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14291;
}
} else
{return and__3546__auto____14287;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14282);
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
var first_obj__14423 = cljs.core.first.call(null,objs);
var sb__14426 = (new goog.string.StringBuffer());

var G__14427__14429 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14427__14429))
{var obj__14431 = cljs.core.first.call(null,G__14427__14429);
var G__14427__14432 = G__14427__14429;

while(true){
if(cljs.core.truth_((obj__14431 === first_obj__14423)))
{} else
{sb__14426.append(" ");
}
var G__14434__14435 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14431,opts));

if(cljs.core.truth_(G__14434__14435))
{var string__14441 = cljs.core.first.call(null,G__14434__14435);
var G__14434__14442 = G__14434__14435;

while(true){
sb__14426.append(string__14441);
var temp__3698__auto____14443 = cljs.core.next.call(null,G__14434__14442);

if(cljs.core.truth_(temp__3698__auto____14443))
{var G__14434__14445 = temp__3698__auto____14443;

{
var G__14453 = cljs.core.first.call(null,G__14434__14445);
var G__14454 = G__14434__14445;
string__14441 = G__14453;
G__14434__14442 = G__14454;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14447 = cljs.core.next.call(null,G__14427__14432);

if(cljs.core.truth_(temp__3698__auto____14447))
{var G__14427__14448 = temp__3698__auto____14447;

{
var G__14456 = cljs.core.first.call(null,G__14427__14448);
var G__14457 = G__14427__14448;
obj__14431 = G__14456;
G__14427__14432 = G__14457;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14426);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14458 = cljs.core.first.call(null,objs);

var G__14460__14463 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14460__14463))
{var obj__14464 = cljs.core.first.call(null,G__14460__14463);
var G__14460__14465 = G__14460__14463;

while(true){
if(cljs.core.truth_((obj__14464 === first_obj__14458)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14467__14469 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14464,opts));

if(cljs.core.truth_(G__14467__14469))
{var string__14476 = cljs.core.first.call(null,G__14467__14469);
var G__14467__14477 = G__14467__14469;

while(true){
cljs.core.string_print.call(null,string__14476);
var temp__3698__auto____14478 = cljs.core.next.call(null,G__14467__14477);

if(cljs.core.truth_(temp__3698__auto____14478))
{var G__14467__14479 = temp__3698__auto____14478;

{
var G__14495 = cljs.core.first.call(null,G__14467__14479);
var G__14496 = G__14467__14479;
string__14476 = G__14495;
G__14467__14477 = G__14496;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14480 = cljs.core.next.call(null,G__14460__14465);

if(cljs.core.truth_(temp__3698__auto____14480))
{var G__14460__14482 = temp__3698__auto____14480;

{
var G__14497 = cljs.core.first.call(null,G__14460__14482);
var G__14498 = G__14460__14482;
obj__14464 = G__14497;
G__14460__14465 = G__14498;
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
pr_str.cljs$lang$applyTo = (function (arglist__14508){
var objs = cljs.core.seq( arglist__14508 );;
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
pr.cljs$lang$applyTo = (function (arglist__14513){
var objs = cljs.core.seq( arglist__14513 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14517){
var objs = cljs.core.seq( arglist__14517 );;
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
println.cljs$lang$applyTo = (function (arglist__14519){
var objs = cljs.core.seq( arglist__14519 );;
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
prn.cljs$lang$applyTo = (function (arglist__14526){
var objs = cljs.core.seq( arglist__14526 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14598 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14598,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14619 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14619))
{var nspc__14620 = temp__3698__auto____14619;

return cljs.core.str.call(null,nspc__14620,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14621 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14621))
{var nspc__14622 = temp__3698__auto____14621;

return cljs.core.str.call(null,nspc__14622,"/");
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
var pr_pair__14635 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14635,"{",", ","}",opts,coll);
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
var this__14685 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14686 = this;
var G__14687__14688 = cljs.core.seq.call(null,this__14686.watches);

if(cljs.core.truth_(G__14687__14688))
{var G__14695__14705 = cljs.core.first.call(null,G__14687__14688);
var vec__14696__14706 = G__14695__14705;
var key__14707 = cljs.core.nth.call(null,vec__14696__14706,0,null);
var f__14708 = cljs.core.nth.call(null,vec__14696__14706,1,null);
var G__14687__14709 = G__14687__14688;

var G__14695__14710 = G__14695__14705;
var G__14687__14711 = G__14687__14709;

while(true){
var vec__14712__14713 = G__14695__14710;
var key__14714 = cljs.core.nth.call(null,vec__14712__14713,0,null);
var f__14716 = cljs.core.nth.call(null,vec__14712__14713,1,null);
var G__14687__14717 = G__14687__14711;

f__14716.call(null,key__14714,this$,oldval,newval);
var temp__3698__auto____14718 = cljs.core.next.call(null,G__14687__14717);

if(cljs.core.truth_(temp__3698__auto____14718))
{var G__14687__14719 = temp__3698__auto____14718;

{
var G__14742 = cljs.core.first.call(null,G__14687__14719);
var G__14743 = G__14687__14719;
G__14695__14710 = G__14742;
G__14687__14711 = G__14743;
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
var this__14720 = this;
return this$.watches = cljs.core.assoc.call(null,this__14720.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14722 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14722.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14723 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14723.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14726 = this;
return this__14726.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14727 = this;
return this__14727.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14731 = this;
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
var atom__14750 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14751 = (function() { 
var G__14753__delegate = function (x,p__14744){
var map__14745__14746 = p__14744;
var map__14745__14747 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14745__14746))?cljs.core.apply.call(null,cljs.core.hash_map,map__14745__14746):map__14745__14746);
var validator__14748 = cljs.core.get.call(null,map__14745__14747,"﷐'validator");
var meta__14749 = cljs.core.get.call(null,map__14745__14747,"﷐'meta");

return (new cljs.core.Atom(x,meta__14749,validator__14748,null));
};
var G__14753 = function (x,var_args){
var p__14744 = null;
if (goog.isDef(var_args)) {
  p__14744 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14753__delegate.call(this, x, p__14744);
};
G__14753.cljs$lang$maxFixedArity = 1;
G__14753.cljs$lang$applyTo = (function (arglist__14754){
var x = cljs.core.first(arglist__14754);
var p__14744 = cljs.core.rest(arglist__14754);
return G__14753__delegate.call(this, x, p__14744);
});
return G__14753;
})()
;
atom = function(x,var_args){
var p__14744 = var_args;
switch(arguments.length){
case  1 :
return atom__14750.call(this,x);
default:
return atom__14751.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14751.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14755 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14755))
{var validate__14756 = temp__3698__auto____14755;

if(cljs.core.truth_(validate__14756.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14760 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14760,new_value);
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
var swap_BANG___14767 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14768 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14769 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14770 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14771 = (function() { 
var G__14777__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14777 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14777__delegate.call(this, a, f, x, y, z, more);
};
G__14777.cljs$lang$maxFixedArity = 5;
G__14777.cljs$lang$applyTo = (function (arglist__14779){
var a = cljs.core.first(arglist__14779);
var f = cljs.core.first(cljs.core.next(arglist__14779));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14779)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14779))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14779)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14779)))));
return G__14777__delegate.call(this, a, f, x, y, z, more);
});
return G__14777;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14767.call(this,a,f);
case  3 :
return swap_BANG___14768.call(this,a,f,x);
case  4 :
return swap_BANG___14769.call(this,a,f,x,y);
case  5 :
return swap_BANG___14770.call(this,a,f,x,y,z);
default:
return swap_BANG___14771.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14771.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14827){
var iref = cljs.core.first(arglist__14827);
var f = cljs.core.first(cljs.core.next(arglist__14827));
var args = cljs.core.rest(cljs.core.next(arglist__14827));
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
var gensym__14850 = (function (){
return gensym.call(null,"G__");
});
var gensym__14851 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14850.call(this);
case  1 :
return gensym__14851.call(this,prefix_string);
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
var this__14859 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14859.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14860 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14860.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14860.state,this__14860.f);
}
return cljs.core.deref.call(null,this__14860.state);
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
delay.cljs$lang$applyTo = (function (arglist__14863){
var body = cljs.core.seq( arglist__14863 );;
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
var map__14885__14886 = options;
var map__14885__14889 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14885__14886))?cljs.core.apply.call(null,cljs.core.hash_map,map__14885__14886):map__14885__14886);
var keywordize_keys__14891 = cljs.core.get.call(null,map__14885__14889,"﷐'keywordize-keys");
var keyfn__14892 = (cljs.core.truth_(keywordize_keys__14891)?cljs.core.keyword:cljs.core.str);
var f__14901 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14900 = (function iter__14893(s__14894){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14894__14898 = s__14894;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14894__14898)))
{var k__14899 = cljs.core.first.call(null,s__14894__14898);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14892.call(null,k__14899),thisfn.call(null,(x[k__14899]))]),iter__14893.call(null,cljs.core.rest.call(null,s__14894__14898)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14900.call(null,cljs.core.js_keys.call(null,x));
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

return f__14901.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14906){
var x = cljs.core.first(arglist__14906);
var options = cljs.core.rest(arglist__14906);
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
var mem__14907 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14911__delegate = function (args){
var temp__3695__auto____14908 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14907),args);

if(cljs.core.truth_(temp__3695__auto____14908))
{var v__14909 = temp__3695__auto____14908;

return v__14909;
} else
{var ret__14910 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14907,cljs.core.assoc,args,ret__14910);
return ret__14910;
}
};
var G__14911 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14911__delegate.call(this, args);
};
G__14911.cljs$lang$maxFixedArity = 0;
G__14911.cljs$lang$applyTo = (function (arglist__14912){
var args = cljs.core.seq( arglist__14912 );;
return G__14911__delegate.call(this, args);
});
return G__14911;
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
var trampoline__14914 = (function (f){
while(true){
var ret__14913 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14913)))
{{
var G__14917 = ret__14913;
f = G__14917;
continue;
}
} else
{return ret__14913;
}
break;
}
});
var trampoline__14915 = (function() { 
var G__14918__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14918 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14918__delegate.call(this, f, args);
};
G__14918.cljs$lang$maxFixedArity = 1;
G__14918.cljs$lang$applyTo = (function (arglist__14919){
var f = cljs.core.first(arglist__14919);
var args = cljs.core.rest(arglist__14919);
return G__14918__delegate.call(this, f, args);
});
return G__14918;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14914.call(this,f);
default:
return trampoline__14915.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14915.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14920 = (function (){
return rand.call(null,1);
});
var rand__14921 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14920.call(this);
case  1 :
return rand__14921.call(this,n);
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
var k__14929 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14929,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14929,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14958 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14959 = (function (h,child,parent){
var or__3548__auto____14949 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14949))
{return or__3548__auto____14949;
} else
{var or__3548__auto____14950 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14950))
{return or__3548__auto____14950;
} else
{var and__3546__auto____14951 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14951))
{var and__3546__auto____14952 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14952))
{var and__3546__auto____14954 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14954))
{var ret__14955 = true;
var i__14956 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14957 = cljs.core.not.call(null,ret__14955);

if(cljs.core.truth_(or__3548__auto____14957))
{return or__3548__auto____14957;
} else
{return cljs.core._EQ_.call(null,i__14956,cljs.core.count.call(null,parent));
}
})()))
{return ret__14955;
} else
{{
var G__14961 = isa_QMARK_.call(null,h,child.call(null,i__14956),parent.call(null,i__14956));
var G__14962 = (i__14956 + 1);
ret__14955 = G__14961;
i__14956 = G__14962;
continue;
}
}
break;
}
} else
{return and__3546__auto____14954;
}
} else
{return and__3546__auto____14952;
}
} else
{return and__3546__auto____14951;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14958.call(this,h,child);
case  3 :
return isa_QMARK___14959.call(this,h,child,parent);
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
var parents__14964 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14965 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14964.call(this,h);
case  2 :
return parents__14965.call(this,h,tag);
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
var ancestors__14969 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14970 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14969.call(this,h);
case  2 :
return ancestors__14970.call(this,h,tag);
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
var descendants__14979 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14980 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14979.call(this,h);
case  2 :
return descendants__14980.call(this,h,tag);
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
var derive__14993 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14994 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14988 = "﷐'parents".call(null,h);
var td__14989 = "﷐'descendants".call(null,h);
var ta__14990 = "﷐'ancestors".call(null,h);
var tf__14991 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14992 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14988.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14990.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14990.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14988,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14991.call(null,"﷐'ancestors".call(null,h),tag,td__14989,parent,ta__14990),"﷐'descendants":tf__14991.call(null,"﷐'descendants".call(null,h),parent,ta__14990,tag,td__14989)});
})());

if(cljs.core.truth_(or__3548__auto____14992))
{return or__3548__auto____14992;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14993.call(this,h,tag);
case  3 :
return derive__14994.call(this,h,tag,parent);
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
var underive__15058 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15060 = (function (h,tag,parent){
var parentMap__15053 = "﷐'parents".call(null,h);
var childsParents__15054 = (cljs.core.truth_(parentMap__15053.call(null,tag))?cljs.core.disj.call(null,parentMap__15053.call(null,tag),parent):cljs.core.set([]));
var newParents__15055 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15054))?cljs.core.assoc.call(null,parentMap__15053,tag,childsParents__15054):cljs.core.dissoc.call(null,parentMap__15053,tag));
var deriv_seq__15056 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14984_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14984_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14984_SHARP_),cljs.core.second.call(null,p1__14984_SHARP_)));
}),cljs.core.seq.call(null,newParents__15055)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15053.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14985_SHARP_,p2__14986_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14985_SHARP_,p2__14986_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15056));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15058.call(this,h,tag);
case  3 :
return underive__15060.call(this,h,tag,parent);
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
var xprefs__15074 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15078 = (cljs.core.truth_((function (){var and__3546__auto____15076 = xprefs__15074;

if(cljs.core.truth_(and__3546__auto____15076))
{return xprefs__15074.call(null,y);
} else
{return and__3546__auto____15076;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15078))
{return or__3548__auto____15078;
} else
{var or__3548__auto____15080 = (function (){var ps__15079 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15079) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15079),prefer_table)))
{} else
{}
{
var G__15092 = cljs.core.rest.call(null,ps__15079);
ps__15079 = G__15092;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15080))
{return or__3548__auto____15080;
} else
{var or__3548__auto____15090 = (function (){var ps__15084 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15084) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15084),y,prefer_table)))
{} else
{}
{
var G__15096 = cljs.core.rest.call(null,ps__15084);
ps__15084 = G__15096;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15090))
{return or__3548__auto____15090;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15097 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15097))
{return or__3548__auto____15097;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15107 = cljs.core.reduce.call(null,(function (be,p__15099){
var vec__15100__15101 = p__15099;
var k__15102 = cljs.core.nth.call(null,vec__15100__15101,0,null);
var ___15103 = cljs.core.nth.call(null,vec__15100__15101,1,null);
var e__15104 = vec__15100__15101;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15102)))
{var be2__15106 = (cljs.core.truth_((function (){var or__3548__auto____15105 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15105))
{return or__3548__auto____15105;
} else
{return cljs.core.dominates.call(null,k__15102,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15104:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15106),k__15102,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15102," and ",cljs.core.first.call(null,be2__15106),", and neither is preferred")));
}
return be2__15106;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15107))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15107));
return cljs.core.second.call(null,best_entry__15107);
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
if(cljs.core.truth_((function (){var and__3546__auto____15123 = mf;

if(cljs.core.truth_(and__3546__auto____15123))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15123;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15126 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15126))
{return or__3548__auto____15126;
} else
{var or__3548__auto____15127 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15127))
{return or__3548__auto____15127;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15130 = mf;

if(cljs.core.truth_(and__3546__auto____15130))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15130;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15131 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15131))
{return or__3548__auto____15131;
} else
{var or__3548__auto____15132 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15132))
{return or__3548__auto____15132;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15136 = mf;

if(cljs.core.truth_(and__3546__auto____15136))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15136;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15139 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15139))
{return or__3548__auto____15139;
} else
{var or__3548__auto____15142 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15142))
{return or__3548__auto____15142;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15144 = mf;

if(cljs.core.truth_(and__3546__auto____15144))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15144;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15145 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15145))
{return or__3548__auto____15145;
} else
{var or__3548__auto____15149 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15149))
{return or__3548__auto____15149;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15150 = mf;

if(cljs.core.truth_(and__3546__auto____15150))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15150;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15151 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15151))
{return or__3548__auto____15151;
} else
{var or__3548__auto____15154 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15154))
{return or__3548__auto____15154;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15155 = mf;

if(cljs.core.truth_(and__3546__auto____15155))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15155;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15157 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15157))
{return or__3548__auto____15157;
} else
{var or__3548__auto____15158 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15158))
{return or__3548__auto____15158;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15161 = mf;

if(cljs.core.truth_(and__3546__auto____15161))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15161;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15166 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15166))
{return or__3548__auto____15166;
} else
{var or__3548__auto____15168 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15168))
{return or__3548__auto____15168;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15169 = mf;

if(cljs.core.truth_(and__3546__auto____15169))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15169;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15171 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15171))
{return or__3548__auto____15171;
} else
{var or__3548__auto____15175 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15175))
{return or__3548__auto____15175;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15209 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15210 = cljs.core._get_method.call(null,mf,dispatch_val__15209);

if(cljs.core.truth_(target_fn__15210))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15209)));
}
return cljs.core.apply.call(null,target_fn__15210,args);
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
var this__15214 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15215 = this;
cljs.core.swap_BANG_.call(null,this__15215.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15215.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15215.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15215.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15219 = this;
cljs.core.swap_BANG_.call(null,this__15219.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15219.method_cache,this__15219.method_table,this__15219.cached_hierarchy,this__15219.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15220 = this;
cljs.core.swap_BANG_.call(null,this__15220.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15220.method_cache,this__15220.method_table,this__15220.cached_hierarchy,this__15220.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15221 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15221.cached_hierarchy),cljs.core.deref.call(null,this__15221.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15221.method_cache,this__15221.method_table,this__15221.cached_hierarchy,this__15221.hierarchy);
}
var temp__3695__auto____15225 = cljs.core.deref.call(null,this__15221.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15225))
{var target_fn__15226 = temp__3695__auto____15225;

return target_fn__15226;
} else
{var temp__3695__auto____15227 = cljs.core.find_and_cache_best_method.call(null,this__15221.name,dispatch_val,this__15221.hierarchy,this__15221.method_table,this__15221.prefer_table,this__15221.method_cache,this__15221.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15227))
{var target_fn__15228 = temp__3695__auto____15227;

return target_fn__15228;
} else
{return cljs.core.deref.call(null,this__15221.method_table).call(null,this__15221.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15229 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15229.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15229.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15229.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15229.method_cache,this__15229.method_table,this__15229.cached_hierarchy,this__15229.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15233 = this;
return cljs.core.deref.call(null,this__15233.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15234 = this;
return cljs.core.deref.call(null,this__15234.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15310 = this;
return cljs.core.do_dispatch.call(null,mf,this__15310.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15332__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15332 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15332__delegate.call(this, _, args);
};
G__15332.cljs$lang$maxFixedArity = 1;
G__15332.cljs$lang$applyTo = (function (arglist__15333){
var _ = cljs.core.first(arglist__15333);
var args = cljs.core.rest(arglist__15333);
return G__15332__delegate.call(this, _, args);
});
return G__15332;
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
