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
var or__3548__auto____7312 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7312))
{return or__3548__auto____7312;
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
var _invoke__7583 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7368 = this$;

if(cljs.core.truth_(and__3546__auto____7368))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7368;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7371 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7371))
{return or__3548__auto____7371;
} else
{var or__3548__auto____7374 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7374))
{return or__3548__auto____7374;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7584 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7377 = this$;

if(cljs.core.truth_(and__3546__auto____7377))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7377;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7380 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7380))
{return or__3548__auto____7380;
} else
{var or__3548__auto____7382 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7382))
{return or__3548__auto____7382;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7585 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7384 = this$;

if(cljs.core.truth_(and__3546__auto____7384))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7384;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7388 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7388))
{return or__3548__auto____7388;
} else
{var or__3548__auto____7390 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7390))
{return or__3548__auto____7390;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7586 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7393 = this$;

if(cljs.core.truth_(and__3546__auto____7393))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7393;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7396 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7396))
{return or__3548__auto____7396;
} else
{var or__3548__auto____7399 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7399))
{return or__3548__auto____7399;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7587 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7400 = this$;

if(cljs.core.truth_(and__3546__auto____7400))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7400;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7404 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7404))
{return or__3548__auto____7404;
} else
{var or__3548__auto____7406 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7406))
{return or__3548__auto____7406;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7588 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7409 = this$;

if(cljs.core.truth_(and__3546__auto____7409))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7409;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7412 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7412))
{return or__3548__auto____7412;
} else
{var or__3548__auto____7414 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7414))
{return or__3548__auto____7414;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7590 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7416 = this$;

if(cljs.core.truth_(and__3546__auto____7416))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7416;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7421 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7421))
{return or__3548__auto____7421;
} else
{var or__3548__auto____7422 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7422))
{return or__3548__auto____7422;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7591 = (function (this$,a,b,c,d,e,f,g){
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
{var or__3548__auto____7431 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7431))
{return or__3548__auto____7431;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7592 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7433 = this$;

if(cljs.core.truth_(and__3546__auto____7433))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7433;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7593 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7441 = this$;

if(cljs.core.truth_(and__3546__auto____7441))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7441;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7444 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7444))
{return or__3548__auto____7444;
} else
{var or__3548__auto____7446 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7446))
{return or__3548__auto____7446;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7594 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7449 = this$;

if(cljs.core.truth_(and__3546__auto____7449))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7449;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7453 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7453))
{return or__3548__auto____7453;
} else
{var or__3548__auto____7455 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7455))
{return or__3548__auto____7455;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7595 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7458 = this$;

if(cljs.core.truth_(and__3546__auto____7458))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7458;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7461 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7461))
{return or__3548__auto____7461;
} else
{var or__3548__auto____7463 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7463))
{return or__3548__auto____7463;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7596 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7466 = this$;

if(cljs.core.truth_(and__3546__auto____7466))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7466;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7467 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7467))
{return or__3548__auto____7467;
} else
{var or__3548__auto____7469 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7469))
{return or__3548__auto____7469;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7597 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7488 = this$;

if(cljs.core.truth_(and__3546__auto____7488))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7488;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7492 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7492))
{return or__3548__auto____7492;
} else
{var or__3548__auto____7495 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7495))
{return or__3548__auto____7495;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7598 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7498 = this$;

if(cljs.core.truth_(and__3546__auto____7498))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7498;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7503 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7503))
{return or__3548__auto____7503;
} else
{var or__3548__auto____7505 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7505))
{return or__3548__auto____7505;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7599 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7509 = this$;

if(cljs.core.truth_(and__3546__auto____7509))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7509;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7511 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7511))
{return or__3548__auto____7511;
} else
{var or__3548__auto____7513 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7513))
{return or__3548__auto____7513;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7600 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7518 = this$;

if(cljs.core.truth_(and__3546__auto____7518))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7518;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7534 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7534))
{return or__3548__auto____7534;
} else
{var or__3548__auto____7535 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7535))
{return or__3548__auto____7535;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7601 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7537 = this$;

if(cljs.core.truth_(and__3546__auto____7537))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7537;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7540 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7540))
{return or__3548__auto____7540;
} else
{var or__3548__auto____7542 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7542))
{return or__3548__auto____7542;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7603 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7543 = this$;

if(cljs.core.truth_(and__3546__auto____7543))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7543;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7568 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7568))
{return or__3548__auto____7568;
} else
{var or__3548__auto____7570 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7570))
{return or__3548__auto____7570;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7604 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7573 = this$;

if(cljs.core.truth_(and__3546__auto____7573))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7573;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7575 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7575))
{return or__3548__auto____7575;
} else
{var or__3548__auto____7576 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7576))
{return or__3548__auto____7576;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7605 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7579 = this$;

if(cljs.core.truth_(and__3546__auto____7579))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7579;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7580 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7580))
{return or__3548__auto____7580;
} else
{var or__3548__auto____7582 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7582))
{return or__3548__auto____7582;
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
return _invoke__7584.call(this,this$,a);
case  3 :
return _invoke__7585.call(this,this$,a,b);
case  4 :
return _invoke__7586.call(this,this$,a,b,c);
case  5 :
return _invoke__7587.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7588.call(this,this$,a,b,c,d,e);
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
return _invoke__7603.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7604.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7605.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7739 = coll;

if(cljs.core.truth_(and__3546__auto____7739))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7739;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7740 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7740))
{return or__3548__auto____7740;
} else
{var or__3548__auto____7741 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7741))
{return or__3548__auto____7741;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7742 = coll;

if(cljs.core.truth_(and__3546__auto____7742))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7742;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7743 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7743))
{return or__3548__auto____7743;
} else
{var or__3548__auto____7744 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7744))
{return or__3548__auto____7744;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7745 = coll;

if(cljs.core.truth_(and__3546__auto____7745))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7745;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7746 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7746))
{return or__3548__auto____7746;
} else
{var or__3548__auto____7747 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7747))
{return or__3548__auto____7747;
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
var _nth__7760 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7751 = coll;

if(cljs.core.truth_(and__3546__auto____7751))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7751;
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
var _nth__7761 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7755 = coll;

if(cljs.core.truth_(and__3546__auto____7755))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7755;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7757 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7757))
{return or__3548__auto____7757;
} else
{var or__3548__auto____7759 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7759))
{return or__3548__auto____7759;
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
return _nth__7760.call(this,coll,n);
case  3 :
return _nth__7761.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7766 = coll;

if(cljs.core.truth_(and__3546__auto____7766))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7766;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7767 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7767))
{return or__3548__auto____7767;
} else
{var or__3548__auto____7768 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7768))
{return or__3548__auto____7768;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7772 = coll;

if(cljs.core.truth_(and__3546__auto____7772))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7772;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7774 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7774))
{return or__3548__auto____7774;
} else
{var or__3548__auto____7775 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7775))
{return or__3548__auto____7775;
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
if(cljs.core.truth_((function (){var and__3546__auto____7802 = o;

if(cljs.core.truth_(and__3546__auto____7802))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7802;
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
{return (function (){var or__3548__auto____7810 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7810))
{return or__3548__auto____7810;
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
if(cljs.core.truth_((function (){var and__3546__auto____7820 = coll;

if(cljs.core.truth_(and__3546__auto____7820))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7820;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7822 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7822))
{return or__3548__auto____7822;
} else
{var or__3548__auto____7824 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7824))
{return or__3548__auto____7824;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7828 = coll;

if(cljs.core.truth_(and__3546__auto____7828))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7828;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7829 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7829))
{return or__3548__auto____7829;
} else
{var or__3548__auto____7830 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7830))
{return or__3548__auto____7830;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7832 = coll;

if(cljs.core.truth_(and__3546__auto____7832))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7832;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7907 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7907))
{return or__3548__auto____7907;
} else
{var or__3548__auto____7909 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7909))
{return or__3548__auto____7909;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7918 = coll;

if(cljs.core.truth_(and__3546__auto____7918))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7918;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7919 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7919))
{return or__3548__auto____7919;
} else
{var or__3548__auto____7921 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7921))
{return or__3548__auto____7921;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7924 = coll;

if(cljs.core.truth_(and__3546__auto____7924))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7924;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7925 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7925))
{return or__3548__auto____7925;
} else
{var or__3548__auto____7926 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7926))
{return or__3548__auto____7926;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7928 = coll;

if(cljs.core.truth_(and__3546__auto____7928))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7928;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7930 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7930))
{return or__3548__auto____7930;
} else
{var or__3548__auto____7932 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7932))
{return or__3548__auto____7932;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7939 = coll;

if(cljs.core.truth_(and__3546__auto____7939))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7939;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7940 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7940))
{return or__3548__auto____7940;
} else
{var or__3548__auto____7942 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7942))
{return or__3548__auto____7942;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7953 = o;

if(cljs.core.truth_(and__3546__auto____7953))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7953;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7955 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7955))
{return or__3548__auto____7955;
} else
{var or__3548__auto____7956 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7956))
{return or__3548__auto____7956;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7961 = o;

if(cljs.core.truth_(and__3546__auto____7961))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7961;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7963 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7963))
{return or__3548__auto____7963;
} else
{var or__3548__auto____7965 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7965))
{return or__3548__auto____7965;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7970 = o;

if(cljs.core.truth_(and__3546__auto____7970))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7970;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7972 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7972))
{return or__3548__auto____7972;
} else
{var or__3548__auto____7974 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7974))
{return or__3548__auto____7974;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7979 = o;

if(cljs.core.truth_(and__3546__auto____7979))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7979;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7980 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7980))
{return or__3548__auto____7980;
} else
{var or__3548__auto____7981 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7981))
{return or__3548__auto____7981;
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
var _reduce__7999 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7988 = coll;

if(cljs.core.truth_(and__3546__auto____7988))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7988;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7989 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7989))
{return or__3548__auto____7989;
} else
{var or__3548__auto____7990 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7990))
{return or__3548__auto____7990;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8000 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7991 = coll;

if(cljs.core.truth_(and__3546__auto____7991))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7991;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7994 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7994))
{return or__3548__auto____7994;
} else
{var or__3548__auto____7996 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7996))
{return or__3548__auto____7996;
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
return _reduce__7999.call(this,coll,f);
case  3 :
return _reduce__8000.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8017 = o;

if(cljs.core.truth_(and__3546__auto____8017))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8017;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8033 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8033))
{return or__3548__auto____8033;
} else
{var or__3548__auto____8035 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8035))
{return or__3548__auto____8035;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8043 = o;

if(cljs.core.truth_(and__3546__auto____8043))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8043;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8047 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8047))
{return or__3548__auto____8047;
} else
{var or__3548__auto____8049 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8052 = o;

if(cljs.core.truth_(and__3546__auto____8052))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8052;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8054 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8054))
{return or__3548__auto____8054;
} else
{var or__3548__auto____8057 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8057))
{return or__3548__auto____8057;
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
if(cljs.core.truth_((function (){var and__3546__auto____8061 = o;

if(cljs.core.truth_(and__3546__auto____8061))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8061;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8065 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8065))
{return or__3548__auto____8065;
} else
{var or__3548__auto____8067 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8067))
{return or__3548__auto____8067;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8069 = d;

if(cljs.core.truth_(and__3546__auto____8069))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8069;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8070 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8070))
{return or__3548__auto____8070;
} else
{var or__3548__auto____8071 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8071))
{return or__3548__auto____8071;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8077 = this$;

if(cljs.core.truth_(and__3546__auto____8077))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8077;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8079 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8079))
{return or__3548__auto____8079;
} else
{var or__3548__auto____8081 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8081))
{return or__3548__auto____8081;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8099 = this$;

if(cljs.core.truth_(and__3546__auto____8099))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8099;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8100 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8100))
{return or__3548__auto____8100;
} else
{var or__3548__auto____8102 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8102))
{return or__3548__auto____8102;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8108 = this$;

if(cljs.core.truth_(and__3546__auto____8108))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8108;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8110 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8110))
{return or__3548__auto____8110;
} else
{var or__3548__auto____8111 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8111))
{return or__3548__auto____8111;
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
var G__8194 = null;
var G__8194__8196 = (function (o,k){
return null;
});
var G__8194__8197 = (function (o,k,not_found){
return not_found;
});
G__8194 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8194__8196.call(this,o,k);
case  3 :
return G__8194__8197.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8194;
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
var G__8203 = null;
var G__8203__8204 = (function (_,f){
return f.call(null);
});
var G__8203__8205 = (function (_,f,start){
return start;
});
G__8203 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8203__8204.call(this,_,f);
case  3 :
return G__8203__8205.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8203;
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
var G__8214 = null;
var G__8214__8215 = (function (_,n){
return null;
});
var G__8214__8216 = (function (_,n,not_found){
return not_found;
});
G__8214 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8214__8215.call(this,_,n);
case  3 :
return G__8214__8216.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8214;
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
var ci_reduce__8296 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8286 = cljs.core._nth.call(null,cicoll,0);
var n__8287 = 1;

while(true){
if(cljs.core.truth_((n__8287 < cljs.core._count.call(null,cicoll))))
{{
var G__8302 = f.call(null,val__8286,cljs.core._nth.call(null,cicoll,n__8287));
var G__8303 = (n__8287 + 1);
val__8286 = G__8302;
n__8287 = G__8303;
continue;
}
} else
{return val__8286;
}
break;
}
}
});
var ci_reduce__8297 = (function (cicoll,f,val){
var val__8288 = val;
var n__8289 = 0;

while(true){
if(cljs.core.truth_((n__8289 < cljs.core._count.call(null,cicoll))))
{{
var G__8306 = f.call(null,val__8288,cljs.core._nth.call(null,cicoll,n__8289));
var G__8307 = (n__8289 + 1);
val__8288 = G__8306;
n__8289 = G__8307;
continue;
}
} else
{return val__8288;
}
break;
}
});
var ci_reduce__8298 = (function (cicoll,f,val,idx){
var val__8291 = val;
var n__8292 = idx;

while(true){
if(cljs.core.truth_((n__8292 < cljs.core._count.call(null,cicoll))))
{{
var G__8351 = f.call(null,val__8291,cljs.core._nth.call(null,cicoll,n__8292));
var G__8352 = (n__8292 + 1);
val__8291 = G__8351;
n__8292 = G__8352;
continue;
}
} else
{return val__8291;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8296.call(this,cicoll,f);
case  3 :
return ci_reduce__8297.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8298.call(this,cicoll,f,val,idx);
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
var this__8369 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8411 = null;
var G__8411__8412 = (function (_,f){
var this__8370 = this;
return cljs.core.ci_reduce.call(null,this__8370.a,f,(this__8370.a[this__8370.i]),(this__8370.i + 1));
});
var G__8411__8413 = (function (_,f,start){
var this__8371 = this;
return cljs.core.ci_reduce.call(null,this__8371.a,f,start,this__8371.i);
});
G__8411 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8411__8412.call(this,_,f);
case  3 :
return G__8411__8413.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8411;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8372 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8373 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8415 = null;
var G__8415__8416 = (function (coll,n){
var this__8374 = this;
var i__8376 = (n + this__8374.i);

if(cljs.core.truth_((i__8376 < this__8374.a.length)))
{return (this__8374.a[i__8376]);
} else
{return null;
}
});
var G__8415__8417 = (function (coll,n,not_found){
var this__8378 = this;
var i__8379 = (n + this__8378.i);

if(cljs.core.truth_((i__8379 < this__8378.a.length)))
{return (this__8378.a[i__8379]);
} else
{return not_found;
}
});
G__8415 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8415__8416.call(this,coll,n);
case  3 :
return G__8415__8417.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8415;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8380 = this;
return (this__8380.a.length - this__8380.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8385 = this;
return (this__8385.a[this__8385.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8386 = this;
if(cljs.core.truth_(((this__8386.i + 1) < this__8386.a.length)))
{return (new cljs.core.IndexedSeq(this__8386.a,(this__8386.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8410 = this;
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
var G__8431 = null;
var G__8431__8432 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8431__8433 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8431 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8431__8432.call(this,array,f);
case  3 :
return G__8431__8433.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8431;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8437 = null;
var G__8437__8438 = (function (array,k){
return (array[k]);
});
var G__8437__8439 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8437 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8437__8438.call(this,array,k);
case  3 :
return G__8437__8439.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8437;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8459 = null;
var G__8459__8460 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8459__8461 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8459 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8459__8460.call(this,array,n);
case  3 :
return G__8459__8461.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8459;
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
var temp__3698__auto____8470 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8470))
{var s__8472 = temp__3698__auto____8470;

return cljs.core._first.call(null,s__8472);
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
var G__8497 = cljs.core.next.call(null,s);
s = G__8497;
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
var s__8504 = cljs.core.seq.call(null,x);
var n__8505 = 0;

while(true){
if(cljs.core.truth_(s__8504))
{{
var G__8506 = cljs.core.next.call(null,s__8504);
var G__8507 = (n__8505 + 1);
s__8504 = G__8506;
n__8505 = G__8507;
continue;
}
} else
{return n__8505;
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
var conj__8509 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8510 = (function() { 
var G__8513__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8514 = conj.call(null,coll,x);
var G__8515 = cljs.core.first.call(null,xs);
var G__8516 = cljs.core.next.call(null,xs);
coll = G__8514;
x = G__8515;
xs = G__8516;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8513 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8513__delegate.call(this, coll, x, xs);
};
G__8513.cljs$lang$maxFixedArity = 2;
G__8513.cljs$lang$applyTo = (function (arglist__8519){
var coll = cljs.core.first(arglist__8519);
var x = cljs.core.first(cljs.core.next(arglist__8519));
var xs = cljs.core.rest(cljs.core.next(arglist__8519));
return G__8513__delegate.call(this, coll, x, xs);
});
return G__8513;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8509.call(this,coll,x);
default:
return conj__8510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8510.cljs$lang$applyTo;
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
var nth__8549 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8550 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8549.call(this,coll,n);
case  3 :
return nth__8550.call(this,coll,n,not_found);
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
var get__8555 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8556 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8555.call(this,o,k);
case  3 :
return get__8556.call(this,o,k,not_found);
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
var assoc__8561 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8562 = (function() { 
var G__8564__delegate = function (coll,k,v,kvs){
while(true){
var ret__8560 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8565 = ret__8560;
var G__8566 = cljs.core.first.call(null,kvs);
var G__8567 = cljs.core.second.call(null,kvs);
var G__8568 = cljs.core.nnext.call(null,kvs);
coll = G__8565;
k = G__8566;
v = G__8567;
kvs = G__8568;
continue;
}
} else
{return ret__8560;
}
break;
}
};
var G__8564 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8564__delegate.call(this, coll, k, v, kvs);
};
G__8564.cljs$lang$maxFixedArity = 3;
G__8564.cljs$lang$applyTo = (function (arglist__8569){
var coll = cljs.core.first(arglist__8569);
var k = cljs.core.first(cljs.core.next(arglist__8569));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8569)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8569)));
return G__8564__delegate.call(this, coll, k, v, kvs);
});
return G__8564;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8561.call(this,coll,k,v);
default:
return assoc__8562.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8562.cljs$lang$applyTo;
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
var dissoc__8575 = (function (coll){
return coll;
});
var dissoc__8576 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8577 = (function() { 
var G__8579__delegate = function (coll,k,ks){
while(true){
var ret__8570 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8580 = ret__8570;
var G__8581 = cljs.core.first.call(null,ks);
var G__8582 = cljs.core.next.call(null,ks);
coll = G__8580;
k = G__8581;
ks = G__8582;
continue;
}
} else
{return ret__8570;
}
break;
}
};
var G__8579 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8579__delegate.call(this, coll, k, ks);
};
G__8579.cljs$lang$maxFixedArity = 2;
G__8579.cljs$lang$applyTo = (function (arglist__8583){
var coll = cljs.core.first(arglist__8583);
var k = cljs.core.first(cljs.core.next(arglist__8583));
var ks = cljs.core.rest(cljs.core.next(arglist__8583));
return G__8579__delegate.call(this, coll, k, ks);
});
return G__8579;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8575.call(this,coll);
case  2 :
return dissoc__8576.call(this,coll,k);
default:
return dissoc__8577.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8577.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8586 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8587 = x__445__auto____8586;

if(cljs.core.truth_(and__3546__auto____8587))
{var and__3546__auto____8588 = x__445__auto____8586.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8588))
{return cljs.core.not.call(null,x__445__auto____8586.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8588;
}
} else
{return and__3546__auto____8587;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8586);
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
var disj__8638 = (function (coll){
return coll;
});
var disj__8639 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8640 = (function() { 
var G__8643__delegate = function (coll,k,ks){
while(true){
var ret__8629 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8645 = ret__8629;
var G__8646 = cljs.core.first.call(null,ks);
var G__8647 = cljs.core.next.call(null,ks);
coll = G__8645;
k = G__8646;
ks = G__8647;
continue;
}
} else
{return ret__8629;
}
break;
}
};
var G__8643 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8643__delegate.call(this, coll, k, ks);
};
G__8643.cljs$lang$maxFixedArity = 2;
G__8643.cljs$lang$applyTo = (function (arglist__8649){
var coll = cljs.core.first(arglist__8649);
var k = cljs.core.first(cljs.core.next(arglist__8649));
var ks = cljs.core.rest(cljs.core.next(arglist__8649));
return G__8643__delegate.call(this, coll, k, ks);
});
return G__8643;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8638.call(this,coll);
case  2 :
return disj__8639.call(this,coll,k);
default:
return disj__8640.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8640.cljs$lang$applyTo;
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
{var x__445__auto____8685 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8686 = x__445__auto____8685;

if(cljs.core.truth_(and__3546__auto____8686))
{var and__3546__auto____8687 = x__445__auto____8685.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8687))
{return cljs.core.not.call(null,x__445__auto____8685.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8687;
}
} else
{return and__3546__auto____8686;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8685);
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
{var x__445__auto____8690 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8693 = x__445__auto____8690;

if(cljs.core.truth_(and__3546__auto____8693))
{var and__3546__auto____8698 = x__445__auto____8690.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8698))
{return cljs.core.not.call(null,x__445__auto____8690.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8698;
}
} else
{return and__3546__auto____8693;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8690);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8712 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8713 = x__445__auto____8712;

if(cljs.core.truth_(and__3546__auto____8713))
{var and__3546__auto____8714 = x__445__auto____8712.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8714))
{return cljs.core.not.call(null,x__445__auto____8712.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8714;
}
} else
{return and__3546__auto____8713;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8712);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8733 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8735 = x__445__auto____8733;

if(cljs.core.truth_(and__3546__auto____8735))
{var and__3546__auto____8743 = x__445__auto____8733.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8743))
{return cljs.core.not.call(null,x__445__auto____8733.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8743;
}
} else
{return and__3546__auto____8735;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8733);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8747 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8751 = x__445__auto____8747;

if(cljs.core.truth_(and__3546__auto____8751))
{var and__3546__auto____8756 = x__445__auto____8747.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8756))
{return cljs.core.not.call(null,x__445__auto____8747.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8756;
}
} else
{return and__3546__auto____8751;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8747);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8763 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8764 = x__445__auto____8763;

if(cljs.core.truth_(and__3546__auto____8764))
{var and__3546__auto____8768 = x__445__auto____8763.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8768))
{return cljs.core.not.call(null,x__445__auto____8763.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8768;
}
} else
{return and__3546__auto____8764;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8763);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8774 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8778 = x__445__auto____8774;

if(cljs.core.truth_(and__3546__auto____8778))
{var and__3546__auto____8784 = x__445__auto____8774.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8784))
{return cljs.core.not.call(null,x__445__auto____8774.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8784;
}
} else
{return and__3546__auto____8778;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8774);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8808 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8808.push(key);
}));
return keys__8808;
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
{var x__445__auto____8841 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8843 = x__445__auto____8841;

if(cljs.core.truth_(and__3546__auto____8843))
{var and__3546__auto____8844 = x__445__auto____8841.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8844))
{return cljs.core.not.call(null,x__445__auto____8841.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8844;
}
} else
{return and__3546__auto____8843;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8841);
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
var and__3546__auto____8848 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8848))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8849 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8849))
{return or__3548__auto____8849;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8848;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8854 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8854))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8854;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8863 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8863))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8863;
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
var and__3546__auto____8929 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8929))
{return (n == n.toFixed());
} else
{return and__3546__auto____8929;
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
if(cljs.core.truth_((function (){var and__3546__auto____8935 = coll;

if(cljs.core.truth_(and__3546__auto____8935))
{var and__3546__auto____8939 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8939))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8939;
}
} else
{return and__3546__auto____8935;
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
var distinct_QMARK___8950 = (function (x){
return true;
});
var distinct_QMARK___8951 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8952 = (function() { 
var G__8954__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8946 = cljs.core.set([y,x]);
var xs__8947 = more;

while(true){
var x__8948 = cljs.core.first.call(null,xs__8947);
var etc__8949 = cljs.core.next.call(null,xs__8947);

if(cljs.core.truth_(xs__8947))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8946,x__8948)))
{return false;
} else
{{
var G__8956 = cljs.core.conj.call(null,s__8946,x__8948);
var G__8957 = etc__8949;
s__8946 = G__8956;
xs__8947 = G__8957;
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
var G__8954 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8954__delegate.call(this, x, y, more);
};
G__8954.cljs$lang$maxFixedArity = 2;
G__8954.cljs$lang$applyTo = (function (arglist__8958){
var x = cljs.core.first(arglist__8958);
var y = cljs.core.first(cljs.core.next(arglist__8958));
var more = cljs.core.rest(cljs.core.next(arglist__8958));
return G__8954__delegate.call(this, x, y, more);
});
return G__8954;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8950.call(this,x);
case  2 :
return distinct_QMARK___8951.call(this,x,y);
default:
return distinct_QMARK___8952.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8952.cljs$lang$applyTo;
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
var r__8963 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8963)))
{return r__8963;
} else
{if(cljs.core.truth_(r__8963))
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
var sort__8969 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8970 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8967 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8967,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8967);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8969.call(this,comp);
case  2 :
return sort__8970.call(this,comp,coll);
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
var sort_by__8975 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8976 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8975.call(this,keyfn,comp);
case  3 :
return sort_by__8976.call(this,keyfn,comp,coll);
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
var reduce__8982 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8983 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8982.call(this,f,val);
case  3 :
return reduce__8983.call(this,f,val,coll);
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
var G__9023 = null;
var G__9023__9024 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9023__9025 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9023 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9023__9024.call(this,coll,f);
case  3 :
return G__9023__9025.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9023;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9028 = (function (){
return 0;
});
var _PLUS___9029 = (function (x){
return x;
});
var _PLUS___9030 = (function (x,y){
return (x + y);
});
var _PLUS___9031 = (function() { 
var G__9034__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9034 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9034__delegate.call(this, x, y, more);
};
G__9034.cljs$lang$maxFixedArity = 2;
G__9034.cljs$lang$applyTo = (function (arglist__9035){
var x = cljs.core.first(arglist__9035);
var y = cljs.core.first(cljs.core.next(arglist__9035));
var more = cljs.core.rest(cljs.core.next(arglist__9035));
return G__9034__delegate.call(this, x, y, more);
});
return G__9034;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9028.call(this);
case  1 :
return _PLUS___9029.call(this,x);
case  2 :
return _PLUS___9030.call(this,x,y);
default:
return _PLUS___9031.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9031.cljs$lang$applyTo;
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
var ___9044 = (function (x){
return (- x);
});
var ___9046 = (function (x,y){
return (x - y);
});
var ___9047 = (function() { 
var G__9051__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9051 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9051__delegate.call(this, x, y, more);
};
G__9051.cljs$lang$maxFixedArity = 2;
G__9051.cljs$lang$applyTo = (function (arglist__9054){
var x = cljs.core.first(arglist__9054);
var y = cljs.core.first(cljs.core.next(arglist__9054));
var more = cljs.core.rest(cljs.core.next(arglist__9054));
return G__9051__delegate.call(this, x, y, more);
});
return G__9051;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9044.call(this,x);
case  2 :
return ___9046.call(this,x,y);
default:
return ___9047.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9047.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9058 = (function (){
return 1;
});
var _STAR___9059 = (function (x){
return x;
});
var _STAR___9060 = (function (x,y){
return (x * y);
});
var _STAR___9062 = (function() { 
var G__9065__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9065 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9065__delegate.call(this, x, y, more);
};
G__9065.cljs$lang$maxFixedArity = 2;
G__9065.cljs$lang$applyTo = (function (arglist__9068){
var x = cljs.core.first(arglist__9068);
var y = cljs.core.first(cljs.core.next(arglist__9068));
var more = cljs.core.rest(cljs.core.next(arglist__9068));
return G__9065__delegate.call(this, x, y, more);
});
return G__9065;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9058.call(this);
case  1 :
return _STAR___9059.call(this,x);
case  2 :
return _STAR___9060.call(this,x,y);
default:
return _STAR___9062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9062.cljs$lang$applyTo;
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
var _SLASH___9076 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9077 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9078 = (function() { 
var G__9081__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9081 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9081__delegate.call(this, x, y, more);
};
G__9081.cljs$lang$maxFixedArity = 2;
G__9081.cljs$lang$applyTo = (function (arglist__9082){
var x = cljs.core.first(arglist__9082);
var y = cljs.core.first(cljs.core.next(arglist__9082));
var more = cljs.core.rest(cljs.core.next(arglist__9082));
return G__9081__delegate.call(this, x, y, more);
});
return G__9081;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9076.call(this,x);
case  2 :
return _SLASH___9077.call(this,x,y);
default:
return _SLASH___9078.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9078.cljs$lang$applyTo;
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
var _LT___9087 = (function (x){
return true;
});
var _LT___9088 = (function (x,y){
return (x < y);
});
var _LT___9089 = (function() { 
var G__9094__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9095 = y;
var G__9096 = cljs.core.first.call(null,more);
var G__9097 = cljs.core.next.call(null,more);
x = G__9095;
y = G__9096;
more = G__9097;
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
var G__9094 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9094__delegate.call(this, x, y, more);
};
G__9094.cljs$lang$maxFixedArity = 2;
G__9094.cljs$lang$applyTo = (function (arglist__9098){
var x = cljs.core.first(arglist__9098);
var y = cljs.core.first(cljs.core.next(arglist__9098));
var more = cljs.core.rest(cljs.core.next(arglist__9098));
return G__9094__delegate.call(this, x, y, more);
});
return G__9094;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9087.call(this,x);
case  2 :
return _LT___9088.call(this,x,y);
default:
return _LT___9089.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9089.cljs$lang$applyTo;
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
var _LT__EQ___9102 = (function (x){
return true;
});
var _LT__EQ___9103 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9104 = (function() { 
var G__9106__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9108 = y;
var G__9109 = cljs.core.first.call(null,more);
var G__9110 = cljs.core.next.call(null,more);
x = G__9108;
y = G__9109;
more = G__9110;
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
var G__9106 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9106__delegate.call(this, x, y, more);
};
G__9106.cljs$lang$maxFixedArity = 2;
G__9106.cljs$lang$applyTo = (function (arglist__9112){
var x = cljs.core.first(arglist__9112);
var y = cljs.core.first(cljs.core.next(arglist__9112));
var more = cljs.core.rest(cljs.core.next(arglist__9112));
return G__9106__delegate.call(this, x, y, more);
});
return G__9106;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9102.call(this,x);
case  2 :
return _LT__EQ___9103.call(this,x,y);
default:
return _LT__EQ___9104.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9104.cljs$lang$applyTo;
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
var _GT___9128 = (function (x){
return true;
});
var _GT___9129 = (function (x,y){
return (x > y);
});
var _GT___9130 = (function() { 
var G__9360__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9361 = y;
var G__9362 = cljs.core.first.call(null,more);
var G__9363 = cljs.core.next.call(null,more);
x = G__9361;
y = G__9362;
more = G__9363;
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
var G__9360 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9360__delegate.call(this, x, y, more);
};
G__9360.cljs$lang$maxFixedArity = 2;
G__9360.cljs$lang$applyTo = (function (arglist__9368){
var x = cljs.core.first(arglist__9368);
var y = cljs.core.first(cljs.core.next(arglist__9368));
var more = cljs.core.rest(cljs.core.next(arglist__9368));
return G__9360__delegate.call(this, x, y, more);
});
return G__9360;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9128.call(this,x);
case  2 :
return _GT___9129.call(this,x,y);
default:
return _GT___9130.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9130.cljs$lang$applyTo;
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
var _GT__EQ___9456 = (function (x){
return true;
});
var _GT__EQ___9457 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9458 = (function() { 
var G__9460__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9466 = y;
var G__9467 = cljs.core.first.call(null,more);
var G__9468 = cljs.core.next.call(null,more);
x = G__9466;
y = G__9467;
more = G__9468;
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
var G__9460 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9460__delegate.call(this, x, y, more);
};
G__9460.cljs$lang$maxFixedArity = 2;
G__9460.cljs$lang$applyTo = (function (arglist__9473){
var x = cljs.core.first(arglist__9473);
var y = cljs.core.first(cljs.core.next(arglist__9473));
var more = cljs.core.rest(cljs.core.next(arglist__9473));
return G__9460__delegate.call(this, x, y, more);
});
return G__9460;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9456.call(this,x);
case  2 :
return _GT__EQ___9457.call(this,x,y);
default:
return _GT__EQ___9458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9458.cljs$lang$applyTo;
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
var max__9540 = (function (x){
return x;
});
var max__9541 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9542 = (function() { 
var G__9547__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9547 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9547__delegate.call(this, x, y, more);
};
G__9547.cljs$lang$maxFixedArity = 2;
G__9547.cljs$lang$applyTo = (function (arglist__9552){
var x = cljs.core.first(arglist__9552);
var y = cljs.core.first(cljs.core.next(arglist__9552));
var more = cljs.core.rest(cljs.core.next(arglist__9552));
return G__9547__delegate.call(this, x, y, more);
});
return G__9547;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9540.call(this,x);
case  2 :
return max__9541.call(this,x,y);
default:
return max__9542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9542.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9557 = (function (x){
return x;
});
var min__9558 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9560 = (function() { 
var G__9565__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9565 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9565__delegate.call(this, x, y, more);
};
G__9565.cljs$lang$maxFixedArity = 2;
G__9565.cljs$lang$applyTo = (function (arglist__9570){
var x = cljs.core.first(arglist__9570);
var y = cljs.core.first(cljs.core.next(arglist__9570));
var more = cljs.core.rest(cljs.core.next(arglist__9570));
return G__9565__delegate.call(this, x, y, more);
});
return G__9565;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9557.call(this,x);
case  2 :
return min__9558.call(this,x,y);
default:
return min__9560.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9560.cljs$lang$applyTo;
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
var rem__9585 = (n % d);

return cljs.core.fix.call(null,((n - rem__9585) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9591 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9591));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9596 = (function (){
return Math.random.call(null);
});
var rand__9597 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9596.call(this);
case  1 :
return rand__9597.call(this,n);
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
var _EQ__EQ___9641 = (function (x){
return true;
});
var _EQ__EQ___9642 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9643 = (function() { 
var G__9647__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9648 = y;
var G__9649 = cljs.core.first.call(null,more);
var G__9650 = cljs.core.next.call(null,more);
x = G__9648;
y = G__9649;
more = G__9650;
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
var G__9647 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9647__delegate.call(this, x, y, more);
};
G__9647.cljs$lang$maxFixedArity = 2;
G__9647.cljs$lang$applyTo = (function (arglist__9654){
var x = cljs.core.first(arglist__9654);
var y = cljs.core.first(cljs.core.next(arglist__9654));
var more = cljs.core.rest(cljs.core.next(arglist__9654));
return G__9647__delegate.call(this, x, y, more);
});
return G__9647;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9641.call(this,x);
case  2 :
return _EQ__EQ___9642.call(this,x,y);
default:
return _EQ__EQ___9643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9643.cljs$lang$applyTo;
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
var n__9667 = n;
var xs__9668 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9671 = xs__9668;

if(cljs.core.truth_(and__3546__auto____9671))
{return (n__9667 > 0);
} else
{return and__3546__auto____9671;
}
})()))
{{
var G__9679 = (n__9667 - 1);
var G__9680 = cljs.core.next.call(null,xs__9668);
n__9667 = G__9679;
xs__9668 = G__9680;
continue;
}
} else
{return xs__9668;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9699 = null;
var G__9699__9700 = (function (coll,n){
var temp__3695__auto____9689 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9689))
{var xs__9690 = temp__3695__auto____9689;

return cljs.core.first.call(null,xs__9690);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9699__9701 = (function (coll,n,not_found){
var temp__3695__auto____9695 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9695))
{var xs__9697 = temp__3695__auto____9695;

return cljs.core.first.call(null,xs__9697);
} else
{return not_found;
}
});
G__9699 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9699__9700.call(this,coll,n);
case  3 :
return G__9699__9701.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9699;
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
var str_STAR___9748 = (function (x){
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
var str_STAR___9750 = (function() { 
var G__9753__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9754 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9755 = cljs.core.next.call(null,more);
sb = G__9754;
more = G__9755;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9753 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9753__delegate.call(this, x, ys);
};
G__9753.cljs$lang$maxFixedArity = 1;
G__9753.cljs$lang$applyTo = (function (arglist__9897){
var x = cljs.core.first(arglist__9897);
var ys = cljs.core.rest(arglist__9897);
return G__9753__delegate.call(this, x, ys);
});
return G__9753;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9747.call(this);
case  1 :
return str_STAR___9748.call(this,x);
default:
return str_STAR___9750.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9750.cljs$lang$applyTo;
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
var str__9902 = (function (){
return "";
});
var str__9903 = (function (x){
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
var str__9904 = (function() { 
var G__9906__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9906 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9906__delegate.call(this, x, ys);
};
G__9906.cljs$lang$maxFixedArity = 1;
G__9906.cljs$lang$applyTo = (function (arglist__9907){
var x = cljs.core.first(arglist__9907);
var ys = cljs.core.rest(arglist__9907);
return G__9906__delegate.call(this, x, ys);
});
return G__9906;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9902.call(this);
case  1 :
return str__9903.call(this,x);
default:
return str__9904.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9904.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9910 = (function (s,start){
return s.substring(start);
});
var subs__9911 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9910.call(this,s,start);
case  3 :
return subs__9911.call(this,s,start,end);
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
var symbol__9929 = (function (name){
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
var symbol__9930 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9929.call(this,ns);
case  2 :
return symbol__9930.call(this,ns,name);
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
var keyword__9934 = (function (name){
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
var keyword__9935 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9934.call(this,ns);
case  2 :
return keyword__9935.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9939 = cljs.core.seq.call(null,x);
var ys__9940 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9939)))
{return cljs.core.nil_QMARK_.call(null,ys__9940);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9940)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9939),cljs.core.first.call(null,ys__9940))))
{{
var G__9941 = cljs.core.next.call(null,xs__9939);
var G__9942 = cljs.core.next.call(null,ys__9940);
xs__9939 = G__9941;
ys__9940 = G__9942;
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
return cljs.core.reduce.call(null,(function (p1__9943_SHARP_,p2__9944_SHARP_){
return cljs.core.hash_combine.call(null,p1__9943_SHARP_,cljs.core.hash.call(null,p2__9944_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9961__9964 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9961__9964))
{var G__10010__10012 = cljs.core.first.call(null,G__9961__9964);
var vec__10011__10013 = G__10010__10012;
var key_name__10014 = cljs.core.nth.call(null,vec__10011__10013,0,null);
var f__10015 = cljs.core.nth.call(null,vec__10011__10013,1,null);
var G__9961__10016 = G__9961__9964;

var G__10010__10017 = G__10010__10012;
var G__9961__10018 = G__9961__10016;

while(true){
var vec__10019__10020 = G__10010__10017;
var key_name__10021 = cljs.core.nth.call(null,vec__10019__10020,0,null);
var f__10022 = cljs.core.nth.call(null,vec__10019__10020,1,null);
var G__9961__10023 = G__9961__10018;

var str_name__10024 = cljs.core.name.call(null,key_name__10021);

obj[str_name__10024] = f__10022;
var temp__3698__auto____10025 = cljs.core.next.call(null,G__9961__10023);

if(cljs.core.truth_(temp__3698__auto____10025))
{var G__9961__10027 = temp__3698__auto____10025;

{
var G__10035 = cljs.core.first.call(null,G__9961__10027);
var G__10036 = G__9961__10027;
G__10010__10017 = G__10035;
G__9961__10018 = G__10036;
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
var this__10037 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10038 = this;
return (new cljs.core.List(this__10038.meta,o,coll,(this__10038.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10039 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10040 = this;
return this__10040.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10041 = this;
return this__10041.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10042 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10043 = this;
return this__10043.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10044 = this;
return this__10044.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10046 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10047 = this;
return (new cljs.core.List(meta,this__10047.first,this__10047.rest,this__10047.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10048 = this;
return this__10048.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10049 = this;
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
var this__10050 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10051 = this;
return (new cljs.core.List(this__10051.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10052 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10053 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10054 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10055 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10056 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10057 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10058 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10059 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10060 = this;
return this__10060.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10061 = this;
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
list.cljs$lang$applyTo = (function (arglist__10062){
var items = cljs.core.seq( arglist__10062 );;
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
var this__10069 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10071 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10073 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10075 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10075.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10076 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10077 = this;
return this__10077.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10078 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10078.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10078.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10079 = this;
return this__10079.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10080 = this;
return (new cljs.core.Cons(meta,this__10080.first,this__10080.rest));
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
var G__10117 = null;
var G__10117__10118 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10117__10119 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10117 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10117__10118.call(this,string,f);
case  3 :
return G__10117__10119.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10117;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10122 = null;
var G__10122__10125 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10122__10127 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10122 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10122__10125.call(this,string,k);
case  3 :
return G__10122__10127.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10122;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10129 = null;
var G__10129__10130 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10129__10131 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10129 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10129__10130.call(this,string,n);
case  3 :
return G__10129__10131.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10129;
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
var G__10175 = null;
var G__10175__10176 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10175__10177 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10175 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10175__10176.call(this,this$,coll);
case  3 :
return G__10175__10177.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10175;
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
var x__10181 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10181;
} else
{lazy_seq.x = x__10181.call(null);
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
var this__10195 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10197 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10239 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10242 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10242.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10243 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10244 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10245 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10247 = this;
return this__10247.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10258 = this;
return (new cljs.core.LazySeq(meta,this__10258.realized,this__10258.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10269 = cljs.core.array.call(null);

var s__10270 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10270)))
{ary__10269.push(cljs.core.first.call(null,s__10270));
{
var G__10272 = cljs.core.next.call(null,s__10270);
s__10270 = G__10272;
continue;
}
} else
{return ary__10269;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10273 = s;
var i__10274 = n;
var sum__10275 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10278 = (i__10274 > 0);

if(cljs.core.truth_(and__3546__auto____10278))
{return cljs.core.seq.call(null,s__10273);
} else
{return and__3546__auto____10278;
}
})()))
{{
var G__10280 = cljs.core.next.call(null,s__10273);
var G__10281 = (i__10274 - 1);
var G__10282 = (sum__10275 + 1);
s__10273 = G__10280;
i__10274 = G__10281;
sum__10275 = G__10282;
continue;
}
} else
{return sum__10275;
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
var concat__10317 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10318 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10319 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10294 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10294))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10294),concat.call(null,cljs.core.rest.call(null,s__10294),y));
} else
{return y;
}
})));
});
var concat__10320 = (function() { 
var G__10323__delegate = function (x,y,zs){
var cat__10311 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10296 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10296))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10296),cat.call(null,cljs.core.rest.call(null,xys__10296),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10311.call(null,concat.call(null,x,y),zs);
};
var G__10323 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10323__delegate.call(this, x, y, zs);
};
G__10323.cljs$lang$maxFixedArity = 2;
G__10323.cljs$lang$applyTo = (function (arglist__10325){
var x = cljs.core.first(arglist__10325);
var y = cljs.core.first(cljs.core.next(arglist__10325));
var zs = cljs.core.rest(cljs.core.next(arglist__10325));
return G__10323__delegate.call(this, x, y, zs);
});
return G__10323;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10317.call(this);
case  1 :
return concat__10318.call(this,x);
case  2 :
return concat__10319.call(this,x,y);
default:
return concat__10320.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10320.cljs$lang$applyTo;
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
var list_STAR___10329 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10331 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10332 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10334 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10336 = (function() { 
var G__10341__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10341 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10341__delegate.call(this, a, b, c, d, more);
};
G__10341.cljs$lang$maxFixedArity = 4;
G__10341.cljs$lang$applyTo = (function (arglist__10348){
var a = cljs.core.first(arglist__10348);
var b = cljs.core.first(cljs.core.next(arglist__10348));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10348)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10348))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10348))));
return G__10341__delegate.call(this, a, b, c, d, more);
});
return G__10341;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10329.call(this,a);
case  2 :
return list_STAR___10331.call(this,a,b);
case  3 :
return list_STAR___10332.call(this,a,b,c);
case  4 :
return list_STAR___10334.call(this,a,b,c,d);
default:
return list_STAR___10336.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10336.cljs$lang$applyTo;
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
var apply__10366 = (function (f,args){
var fixed_arity__10352 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10352 + 1)) <= fixed_arity__10352)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10367 = (function (f,x,args){
var arglist__10353 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10354 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10353,fixed_arity__10354) <= fixed_arity__10354)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10353));
} else
{return f.cljs$lang$applyTo(arglist__10353);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10353));
}
});
var apply__10368 = (function (f,x,y,args){
var arglist__10356 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10357 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10356,fixed_arity__10357) <= fixed_arity__10357)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10356));
} else
{return f.cljs$lang$applyTo(arglist__10356);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10356));
}
});
var apply__10369 = (function (f,x,y,z,args){
var arglist__10360 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10361 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10360,fixed_arity__10361) <= fixed_arity__10361)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10360));
} else
{return f.cljs$lang$applyTo(arglist__10360);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10360));
}
});
var apply__10370 = (function() { 
var G__10374__delegate = function (f,a,b,c,d,args){
var arglist__10362 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10364 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10362,fixed_arity__10364) <= fixed_arity__10364)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10362));
} else
{return f.cljs$lang$applyTo(arglist__10362);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10362));
}
};
var G__10374 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10374__delegate.call(this, f, a, b, c, d, args);
};
G__10374.cljs$lang$maxFixedArity = 5;
G__10374.cljs$lang$applyTo = (function (arglist__10418){
var f = cljs.core.first(arglist__10418);
var a = cljs.core.first(cljs.core.next(arglist__10418));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10418)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10418))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10418)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10418)))));
return G__10374__delegate.call(this, f, a, b, c, d, args);
});
return G__10374;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10366.call(this,f,a);
case  3 :
return apply__10367.call(this,f,a,b);
case  4 :
return apply__10368.call(this,f,a,b,c);
case  5 :
return apply__10369.call(this,f,a,b,c,d);
default:
return apply__10370.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10370.cljs$lang$applyTo;
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
var not_EQ___10472 = (function (x){
return false;
});
var not_EQ___10473 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10474 = (function() { 
var G__10476__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10476 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10476__delegate.call(this, x, y, more);
};
G__10476.cljs$lang$maxFixedArity = 2;
G__10476.cljs$lang$applyTo = (function (arglist__10477){
var x = cljs.core.first(arglist__10477);
var y = cljs.core.first(cljs.core.next(arglist__10477));
var more = cljs.core.rest(cljs.core.next(arglist__10477));
return G__10476__delegate.call(this, x, y, more);
});
return G__10476;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10472.call(this,x);
case  2 :
return not_EQ___10473.call(this,x,y);
default:
return not_EQ___10474.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10474.cljs$lang$applyTo;
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
var G__10480 = pred;
var G__10481 = cljs.core.next.call(null,coll);
pred = G__10480;
coll = G__10481;
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
{var or__3548__auto____10484 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10484))
{return or__3548__auto____10484;
} else
{{
var G__10493 = pred;
var G__10494 = cljs.core.next.call(null,coll);
pred = G__10493;
coll = G__10494;
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
var G__10518 = null;
var G__10518__10519 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10518__10520 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10518__10521 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10518__10522 = (function() { 
var G__10531__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10531 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10531__delegate.call(this, x, y, zs);
};
G__10531.cljs$lang$maxFixedArity = 2;
G__10531.cljs$lang$applyTo = (function (arglist__10532){
var x = cljs.core.first(arglist__10532);
var y = cljs.core.first(cljs.core.next(arglist__10532));
var zs = cljs.core.rest(cljs.core.next(arglist__10532));
return G__10531__delegate.call(this, x, y, zs);
});
return G__10531;
})()
;
G__10518 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10518__10519.call(this);
case  1 :
return G__10518__10520.call(this,x);
case  2 :
return G__10518__10521.call(this,x,y);
default:
return G__10518__10522.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10518.cljs$lang$maxFixedArity = 2;
G__10518.cljs$lang$applyTo = G__10518__10522.cljs$lang$applyTo;
return G__10518;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10667__delegate = function (args){
return x;
};
var G__10667 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10667__delegate.call(this, args);
};
G__10667.cljs$lang$maxFixedArity = 0;
G__10667.cljs$lang$applyTo = (function (arglist__10668){
var args = cljs.core.seq( arglist__10668 );;
return G__10667__delegate.call(this, args);
});
return G__10667;
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
var comp__10694 = (function (){
return cljs.core.identity;
});
var comp__10696 = (function (f){
return f;
});
var comp__10697 = (function (f,g){
return (function() {
var G__10702 = null;
var G__10702__10703 = (function (){
return f.call(null,g.call(null));
});
var G__10702__10704 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10702__10705 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10702__10706 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10702__10707 = (function() { 
var G__10711__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10711 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10711__delegate.call(this, x, y, z, args);
};
G__10711.cljs$lang$maxFixedArity = 3;
G__10711.cljs$lang$applyTo = (function (arglist__10712){
var x = cljs.core.first(arglist__10712);
var y = cljs.core.first(cljs.core.next(arglist__10712));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10712)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10712)));
return G__10711__delegate.call(this, x, y, z, args);
});
return G__10711;
})()
;
G__10702 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10702__10703.call(this);
case  1 :
return G__10702__10704.call(this,x);
case  2 :
return G__10702__10705.call(this,x,y);
case  3 :
return G__10702__10706.call(this,x,y,z);
default:
return G__10702__10707.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10702.cljs$lang$maxFixedArity = 3;
G__10702.cljs$lang$applyTo = G__10702__10707.cljs$lang$applyTo;
return G__10702;
})()
});
var comp__10698 = (function (f,g,h){
return (function() {
var G__10714 = null;
var G__10714__10715 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10714__10716 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10714__10717 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10714__10718 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10714__10719 = (function() { 
var G__10722__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10722 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10722__delegate.call(this, x, y, z, args);
};
G__10722.cljs$lang$maxFixedArity = 3;
G__10722.cljs$lang$applyTo = (function (arglist__10723){
var x = cljs.core.first(arglist__10723);
var y = cljs.core.first(cljs.core.next(arglist__10723));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10723)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10723)));
return G__10722__delegate.call(this, x, y, z, args);
});
return G__10722;
})()
;
G__10714 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10714__10715.call(this);
case  1 :
return G__10714__10716.call(this,x);
case  2 :
return G__10714__10717.call(this,x,y);
case  3 :
return G__10714__10718.call(this,x,y,z);
default:
return G__10714__10719.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10714.cljs$lang$maxFixedArity = 3;
G__10714.cljs$lang$applyTo = G__10714__10719.cljs$lang$applyTo;
return G__10714;
})()
});
var comp__10699 = (function() { 
var G__10724__delegate = function (f1,f2,f3,fs){
var fs__10676 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10725__delegate = function (args){
var ret__10678 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10676),args);
var fs__10683 = cljs.core.next.call(null,fs__10676);

while(true){
if(cljs.core.truth_(fs__10683))
{{
var G__10728 = cljs.core.first.call(null,fs__10683).call(null,ret__10678);
var G__10729 = cljs.core.next.call(null,fs__10683);
ret__10678 = G__10728;
fs__10683 = G__10729;
continue;
}
} else
{return ret__10678;
}
break;
}
};
var G__10725 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10725__delegate.call(this, args);
};
G__10725.cljs$lang$maxFixedArity = 0;
G__10725.cljs$lang$applyTo = (function (arglist__10730){
var args = cljs.core.seq( arglist__10730 );;
return G__10725__delegate.call(this, args);
});
return G__10725;
})()
;
};
var G__10724 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10724__delegate.call(this, f1, f2, f3, fs);
};
G__10724.cljs$lang$maxFixedArity = 3;
G__10724.cljs$lang$applyTo = (function (arglist__10731){
var f1 = cljs.core.first(arglist__10731);
var f2 = cljs.core.first(cljs.core.next(arglist__10731));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10731)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10731)));
return G__10724__delegate.call(this, f1, f2, f3, fs);
});
return G__10724;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10694.call(this);
case  1 :
return comp__10696.call(this,f1);
case  2 :
return comp__10697.call(this,f1,f2);
case  3 :
return comp__10698.call(this,f1,f2,f3);
default:
return comp__10699.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10699.cljs$lang$applyTo;
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
var partial__10750 = (function (f,arg1){
return (function() { 
var G__10756__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
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
var partial__10751 = (function (f,arg1,arg2){
return (function() { 
var G__10758__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10758 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10758__delegate.call(this, args);
};
G__10758.cljs$lang$maxFixedArity = 0;
G__10758.cljs$lang$applyTo = (function (arglist__10762){
var args = cljs.core.seq( arglist__10762 );;
return G__10758__delegate.call(this, args);
});
return G__10758;
})()
;
});
var partial__10752 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10766__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10766 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10766__delegate.call(this, args);
};
G__10766.cljs$lang$maxFixedArity = 0;
G__10766.cljs$lang$applyTo = (function (arglist__10768){
var args = cljs.core.seq( arglist__10768 );;
return G__10766__delegate.call(this, args);
});
return G__10766;
})()
;
});
var partial__10753 = (function() { 
var G__10775__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10777__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10777 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10777__delegate.call(this, args);
};
G__10777.cljs$lang$maxFixedArity = 0;
G__10777.cljs$lang$applyTo = (function (arglist__10780){
var args = cljs.core.seq( arglist__10780 );;
return G__10777__delegate.call(this, args);
});
return G__10777;
})()
;
};
var G__10775 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10775__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10775.cljs$lang$maxFixedArity = 4;
G__10775.cljs$lang$applyTo = (function (arglist__10781){
var f = cljs.core.first(arglist__10781);
var arg1 = cljs.core.first(cljs.core.next(arglist__10781));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10781)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10781))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10781))));
return G__10775__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10775;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10750.call(this,f,arg1);
case  3 :
return partial__10751.call(this,f,arg1,arg2);
case  4 :
return partial__10752.call(this,f,arg1,arg2,arg3);
default:
return partial__10753.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10753.cljs$lang$applyTo;
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
var fnil__10826 = (function (f,x){
return (function() {
var G__10830 = null;
var G__10830__10831 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10830__10832 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10830__10833 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10830__10834 = (function() { 
var G__10838__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10838 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10838__delegate.call(this, a, b, c, ds);
};
G__10838.cljs$lang$maxFixedArity = 3;
G__10838.cljs$lang$applyTo = (function (arglist__10839){
var a = cljs.core.first(arglist__10839);
var b = cljs.core.first(cljs.core.next(arglist__10839));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10839)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10839)));
return G__10838__delegate.call(this, a, b, c, ds);
});
return G__10838;
})()
;
G__10830 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10830__10831.call(this,a);
case  2 :
return G__10830__10832.call(this,a,b);
case  3 :
return G__10830__10833.call(this,a,b,c);
default:
return G__10830__10834.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10830.cljs$lang$maxFixedArity = 3;
G__10830.cljs$lang$applyTo = G__10830__10834.cljs$lang$applyTo;
return G__10830;
})()
});
var fnil__10827 = (function (f,x,y){
return (function() {
var G__10846 = null;
var G__10846__10848 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10846__10849 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10846__10850 = (function() { 
var G__10856__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10856 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10856__delegate.call(this, a, b, c, ds);
};
G__10856.cljs$lang$maxFixedArity = 3;
G__10856.cljs$lang$applyTo = (function (arglist__10858){
var a = cljs.core.first(arglist__10858);
var b = cljs.core.first(cljs.core.next(arglist__10858));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10858)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10858)));
return G__10856__delegate.call(this, a, b, c, ds);
});
return G__10856;
})()
;
G__10846 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10846__10848.call(this,a,b);
case  3 :
return G__10846__10849.call(this,a,b,c);
default:
return G__10846__10850.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10846.cljs$lang$maxFixedArity = 3;
G__10846.cljs$lang$applyTo = G__10846__10850.cljs$lang$applyTo;
return G__10846;
})()
});
var fnil__10828 = (function (f,x,y,z){
return (function() {
var G__10861 = null;
var G__10861__10862 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10861__10863 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10861__10864 = (function() { 
var G__10868__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10868 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10868__delegate.call(this, a, b, c, ds);
};
G__10868.cljs$lang$maxFixedArity = 3;
G__10868.cljs$lang$applyTo = (function (arglist__10876){
var a = cljs.core.first(arglist__10876);
var b = cljs.core.first(cljs.core.next(arglist__10876));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10876)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10876)));
return G__10868__delegate.call(this, a, b, c, ds);
});
return G__10868;
})()
;
G__10861 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10861__10862.call(this,a,b);
case  3 :
return G__10861__10863.call(this,a,b,c);
default:
return G__10861__10864.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10861.cljs$lang$maxFixedArity = 3;
G__10861.cljs$lang$applyTo = G__10861__10864.cljs$lang$applyTo;
return G__10861;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10826.call(this,f,x);
case  3 :
return fnil__10827.call(this,f,x,y);
case  4 :
return fnil__10828.call(this,f,x,y,z);
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
var mapi__10890 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10886 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10886))
{var s__10888 = temp__3698__auto____10886;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10888)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10888)));
} else
{return null;
}
})));
});

return mapi__10890.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10904 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10904))
{var s__10905 = temp__3698__auto____10904;

var x__10906 = f.call(null,cljs.core.first.call(null,s__10905));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10906)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10905));
} else
{return cljs.core.cons.call(null,x__10906,keep.call(null,f,cljs.core.rest.call(null,s__10905)));
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
var keepi__10955 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10941 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10941))
{var s__10942 = temp__3698__auto____10941;

var x__10945 = f.call(null,idx,cljs.core.first.call(null,s__10942));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10945)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10942));
} else
{return cljs.core.cons.call(null,x__10945,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10942)));
}
} else
{return null;
}
})));
});

return keepi__10955.call(null,0,coll);
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
var every_pred__11078 = (function (p){
return (function() {
var ep1 = null;
var ep1__11085 = (function (){
return true;
});
var ep1__11087 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11088 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10986 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10986))
{return p.call(null,y);
} else
{return and__3546__auto____10986;
}
})());
});
var ep1__11089 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10988 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10988))
{var and__3546__auto____10989 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10989))
{return p.call(null,z);
} else
{return and__3546__auto____10989;
}
} else
{return and__3546__auto____10988;
}
})());
});
var ep1__11090 = (function() { 
var G__11096__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10992 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10992))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10992;
}
})());
};
var G__11096 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11096__delegate.call(this, x, y, z, args);
};
G__11096.cljs$lang$maxFixedArity = 3;
G__11096.cljs$lang$applyTo = (function (arglist__11102){
var x = cljs.core.first(arglist__11102);
var y = cljs.core.first(cljs.core.next(arglist__11102));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11102)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11102)));
return G__11096__delegate.call(this, x, y, z, args);
});
return G__11096;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11085.call(this);
case  1 :
return ep1__11087.call(this,x);
case  2 :
return ep1__11088.call(this,x,y);
case  3 :
return ep1__11089.call(this,x,y,z);
default:
return ep1__11090.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11090.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11079 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11107 = (function (){
return true;
});
var ep2__11108 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10996 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10996))
{return p2.call(null,x);
} else
{return and__3546__auto____10996;
}
})());
});
var ep2__11109 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10998 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10998))
{var and__3546__auto____10999 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10999))
{var and__3546__auto____11000 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11000))
{return p2.call(null,y);
} else
{return and__3546__auto____11000;
}
} else
{return and__3546__auto____10999;
}
} else
{return and__3546__auto____10998;
}
})());
});
var ep2__11110 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11004 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11004))
{var and__3546__auto____11007 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11007))
{var and__3546__auto____11008 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11008))
{var and__3546__auto____11011 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11011))
{var and__3546__auto____11014 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11014))
{return p2.call(null,z);
} else
{return and__3546__auto____11014;
}
} else
{return and__3546__auto____11011;
}
} else
{return and__3546__auto____11008;
}
} else
{return and__3546__auto____11007;
}
} else
{return and__3546__auto____11004;
}
})());
});
var ep2__11111 = (function() { 
var G__11127__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11021 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11021))
{return cljs.core.every_QMARK_.call(null,(function (p1__10918_SHARP_){
var and__3546__auto____11022 = p1.call(null,p1__10918_SHARP_);

if(cljs.core.truth_(and__3546__auto____11022))
{return p2.call(null,p1__10918_SHARP_);
} else
{return and__3546__auto____11022;
}
}),args);
} else
{return and__3546__auto____11021;
}
})());
};
var G__11127 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11127__delegate.call(this, x, y, z, args);
};
G__11127.cljs$lang$maxFixedArity = 3;
G__11127.cljs$lang$applyTo = (function (arglist__11131){
var x = cljs.core.first(arglist__11131);
var y = cljs.core.first(cljs.core.next(arglist__11131));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11131)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11131)));
return G__11127__delegate.call(this, x, y, z, args);
});
return G__11127;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11107.call(this);
case  1 :
return ep2__11108.call(this,x);
case  2 :
return ep2__11109.call(this,x,y);
case  3 :
return ep2__11110.call(this,x,y,z);
default:
return ep2__11111.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11111.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11080 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11135 = (function (){
return true;
});
var ep3__11137 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11027 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11027))
{var and__3546__auto____11028 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11028))
{return p3.call(null,x);
} else
{return and__3546__auto____11028;
}
} else
{return and__3546__auto____11027;
}
})());
});
var ep3__11138 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11031 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11031))
{var and__3546__auto____11032 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11032))
{var and__3546__auto____11034 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11034))
{var and__3546__auto____11035 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11035))
{var and__3546__auto____11036 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11036))
{return p3.call(null,y);
} else
{return and__3546__auto____11036;
}
} else
{return and__3546__auto____11035;
}
} else
{return and__3546__auto____11034;
}
} else
{return and__3546__auto____11032;
}
} else
{return and__3546__auto____11031;
}
})());
});
var ep3__11139 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11037 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11037))
{var and__3546__auto____11038 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11038))
{var and__3546__auto____11039 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11039))
{var and__3546__auto____11041 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11041))
{var and__3546__auto____11044 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11044))
{var and__3546__auto____11047 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11047))
{var and__3546__auto____11048 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11048))
{var and__3546__auto____11050 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11050))
{return p3.call(null,z);
} else
{return and__3546__auto____11050;
}
} else
{return and__3546__auto____11048;
}
} else
{return and__3546__auto____11047;
}
} else
{return and__3546__auto____11044;
}
} else
{return and__3546__auto____11041;
}
} else
{return and__3546__auto____11039;
}
} else
{return and__3546__auto____11038;
}
} else
{return and__3546__auto____11037;
}
})());
});
var ep3__11140 = (function() { 
var G__11181__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11051 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11051))
{return cljs.core.every_QMARK_.call(null,(function (p1__10926_SHARP_){
var and__3546__auto____11052 = p1.call(null,p1__10926_SHARP_);

if(cljs.core.truth_(and__3546__auto____11052))
{var and__3546__auto____11053 = p2.call(null,p1__10926_SHARP_);

if(cljs.core.truth_(and__3546__auto____11053))
{return p3.call(null,p1__10926_SHARP_);
} else
{return and__3546__auto____11053;
}
} else
{return and__3546__auto____11052;
}
}),args);
} else
{return and__3546__auto____11051;
}
})());
};
var G__11181 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11181__delegate.call(this, x, y, z, args);
};
G__11181.cljs$lang$maxFixedArity = 3;
G__11181.cljs$lang$applyTo = (function (arglist__11331){
var x = cljs.core.first(arglist__11331);
var y = cljs.core.first(cljs.core.next(arglist__11331));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11331)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11331)));
return G__11181__delegate.call(this, x, y, z, args);
});
return G__11181;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11135.call(this);
case  1 :
return ep3__11137.call(this,x);
case  2 :
return ep3__11138.call(this,x,y);
case  3 :
return ep3__11139.call(this,x,y,z);
default:
return ep3__11140.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11140.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11081 = (function() { 
var G__11333__delegate = function (p1,p2,p3,ps){
var ps__11054 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11335 = (function (){
return true;
});
var epn__11336 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10930_SHARP_){
return p1__10930_SHARP_.call(null,x);
}),ps__11054);
});
var epn__11338 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10934_SHARP_){
var and__3546__auto____11057 = p1__10934_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11057))
{return p1__10934_SHARP_.call(null,y);
} else
{return and__3546__auto____11057;
}
}),ps__11054);
});
var epn__11339 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10935_SHARP_){
var and__3546__auto____11064 = p1__10935_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11064))
{var and__3546__auto____11065 = p1__10935_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11065))
{return p1__10935_SHARP_.call(null,z);
} else
{return and__3546__auto____11065;
}
} else
{return and__3546__auto____11064;
}
}),ps__11054);
});
var epn__11340 = (function() { 
var G__11352__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11072 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11072))
{return cljs.core.every_QMARK_.call(null,(function (p1__10936_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10936_SHARP_,args);
}),ps__11054);
} else
{return and__3546__auto____11072;
}
})());
};
var G__11352 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11352__delegate.call(this, x, y, z, args);
};
G__11352.cljs$lang$maxFixedArity = 3;
G__11352.cljs$lang$applyTo = (function (arglist__11363){
var x = cljs.core.first(arglist__11363);
var y = cljs.core.first(cljs.core.next(arglist__11363));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11363)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11363)));
return G__11352__delegate.call(this, x, y, z, args);
});
return G__11352;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11335.call(this);
case  1 :
return epn__11336.call(this,x);
case  2 :
return epn__11338.call(this,x,y);
case  3 :
return epn__11339.call(this,x,y,z);
default:
return epn__11340.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11340.cljs$lang$applyTo;
return epn;
})()
};
var G__11333 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11333__delegate.call(this, p1, p2, p3, ps);
};
G__11333.cljs$lang$maxFixedArity = 3;
G__11333.cljs$lang$applyTo = (function (arglist__11365){
var p1 = cljs.core.first(arglist__11365);
var p2 = cljs.core.first(cljs.core.next(arglist__11365));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11365)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11365)));
return G__11333__delegate.call(this, p1, p2, p3, ps);
});
return G__11333;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11078.call(this,p1);
case  2 :
return every_pred__11079.call(this,p1,p2);
case  3 :
return every_pred__11080.call(this,p1,p2,p3);
default:
return every_pred__11081.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11081.cljs$lang$applyTo;
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
var some_fn__11647 = (function (p){
return (function() {
var sp1 = null;
var sp1__11654 = (function (){
return null;
});
var sp1__11655 = (function (x){
return p.call(null,x);
});
var sp1__11656 = (function (x,y){
var or__3548__auto____11381 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11381))
{return or__3548__auto____11381;
} else
{return p.call(null,y);
}
});
var sp1__11657 = (function (x,y,z){
var or__3548__auto____11384 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11384))
{return or__3548__auto____11384;
} else
{var or__3548__auto____11388 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11388))
{return or__3548__auto____11388;
} else
{return p.call(null,z);
}
}
});
var sp1__11658 = (function() { 
var G__11665__delegate = function (x,y,z,args){
var or__3548__auto____11424 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11424))
{return or__3548__auto____11424;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11665 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11665__delegate.call(this, x, y, z, args);
};
G__11665.cljs$lang$maxFixedArity = 3;
G__11665.cljs$lang$applyTo = (function (arglist__11666){
var x = cljs.core.first(arglist__11666);
var y = cljs.core.first(cljs.core.next(arglist__11666));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11666)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11666)));
return G__11665__delegate.call(this, x, y, z, args);
});
return G__11665;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11654.call(this);
case  1 :
return sp1__11655.call(this,x);
case  2 :
return sp1__11656.call(this,x,y);
case  3 :
return sp1__11657.call(this,x,y,z);
default:
return sp1__11658.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11658.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11648 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11669 = (function (){
return null;
});
var sp2__11670 = (function (x){
var or__3548__auto____11464 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11464))
{return or__3548__auto____11464;
} else
{return p2.call(null,x);
}
});
var sp2__11671 = (function (x,y){
var or__3548__auto____11471 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11471))
{return or__3548__auto____11471;
} else
{var or__3548__auto____11472 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11472))
{return or__3548__auto____11472;
} else
{var or__3548__auto____11473 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11473))
{return or__3548__auto____11473;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11672 = (function (x,y,z){
var or__3548__auto____11474 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11474))
{return or__3548__auto____11474;
} else
{var or__3548__auto____11476 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11476))
{return or__3548__auto____11476;
} else
{var or__3548__auto____11477 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11477))
{return or__3548__auto____11477;
} else
{var or__3548__auto____11479 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11479))
{return or__3548__auto____11479;
} else
{var or__3548__auto____11480 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11480))
{return or__3548__auto____11480;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11673 = (function() { 
var G__11688__delegate = function (x,y,z,args){
var or__3548__auto____11484 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11484))
{return or__3548__auto____11484;
} else
{return cljs.core.some.call(null,(function (p1__10976_SHARP_){
var or__3548__auto____11488 = p1.call(null,p1__10976_SHARP_);

if(cljs.core.truth_(or__3548__auto____11488))
{return or__3548__auto____11488;
} else
{return p2.call(null,p1__10976_SHARP_);
}
}),args);
}
};
var G__11688 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11688__delegate.call(this, x, y, z, args);
};
G__11688.cljs$lang$maxFixedArity = 3;
G__11688.cljs$lang$applyTo = (function (arglist__11698){
var x = cljs.core.first(arglist__11698);
var y = cljs.core.first(cljs.core.next(arglist__11698));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11698)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11698)));
return G__11688__delegate.call(this, x, y, z, args);
});
return G__11688;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11669.call(this);
case  1 :
return sp2__11670.call(this,x);
case  2 :
return sp2__11671.call(this,x,y);
case  3 :
return sp2__11672.call(this,x,y,z);
default:
return sp2__11673.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11673.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11650 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11703 = (function (){
return null;
});
var sp3__11704 = (function (x){
var or__3548__auto____11489 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11489))
{return or__3548__auto____11489;
} else
{var or__3548__auto____11490 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11490))
{return or__3548__auto____11490;
} else
{return p3.call(null,x);
}
}
});
var sp3__11705 = (function (x,y){
var or__3548__auto____11491 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11491))
{return or__3548__auto____11491;
} else
{var or__3548__auto____11492 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11492))
{return or__3548__auto____11492;
} else
{var or__3548__auto____11494 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11494))
{return or__3548__auto____11494;
} else
{var or__3548__auto____11495 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11495))
{return or__3548__auto____11495;
} else
{var or__3548__auto____11496 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11496))
{return or__3548__auto____11496;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11706 = (function (x,y,z){
var or__3548__auto____11497 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11497))
{return or__3548__auto____11497;
} else
{var or__3548__auto____11498 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11498))
{return or__3548__auto____11498;
} else
{var or__3548__auto____11499 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11499))
{return or__3548__auto____11499;
} else
{var or__3548__auto____11500 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11500))
{return or__3548__auto____11500;
} else
{var or__3548__auto____11501 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11501))
{return or__3548__auto____11501;
} else
{var or__3548__auto____11502 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11502))
{return or__3548__auto____11502;
} else
{var or__3548__auto____11504 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11504))
{return or__3548__auto____11504;
} else
{var or__3548__auto____11506 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11506))
{return or__3548__auto____11506;
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
var sp3__11707 = (function() { 
var G__11748__delegate = function (x,y,z,args){
var or__3548__auto____11509 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11509))
{return or__3548__auto____11509;
} else
{return cljs.core.some.call(null,(function (p1__10977_SHARP_){
var or__3548__auto____11512 = p1.call(null,p1__10977_SHARP_);

if(cljs.core.truth_(or__3548__auto____11512))
{return or__3548__auto____11512;
} else
{var or__3548__auto____11514 = p2.call(null,p1__10977_SHARP_);

if(cljs.core.truth_(or__3548__auto____11514))
{return or__3548__auto____11514;
} else
{return p3.call(null,p1__10977_SHARP_);
}
}
}),args);
}
};
var G__11748 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11748__delegate.call(this, x, y, z, args);
};
G__11748.cljs$lang$maxFixedArity = 3;
G__11748.cljs$lang$applyTo = (function (arglist__11749){
var x = cljs.core.first(arglist__11749);
var y = cljs.core.first(cljs.core.next(arglist__11749));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11749)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11749)));
return G__11748__delegate.call(this, x, y, z, args);
});
return G__11748;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11703.call(this);
case  1 :
return sp3__11704.call(this,x);
case  2 :
return sp3__11705.call(this,x,y);
case  3 :
return sp3__11706.call(this,x,y,z);
default:
return sp3__11707.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11707.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11651 = (function() { 
var G__11751__delegate = function (p1,p2,p3,ps){
var ps__11516 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11752 = (function (){
return null;
});
var spn__11753 = (function (x){
return cljs.core.some.call(null,(function (p1__10979_SHARP_){
return p1__10979_SHARP_.call(null,x);
}),ps__11516);
});
var spn__11754 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10980_SHARP_){
var or__3548__auto____11620 = p1__10980_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11620))
{return or__3548__auto____11620;
} else
{return p1__10980_SHARP_.call(null,y);
}
}),ps__11516);
});
var spn__11755 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10981_SHARP_){
var or__3548__auto____11627 = p1__10981_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11627))
{return or__3548__auto____11627;
} else
{var or__3548__auto____11628 = p1__10981_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11628))
{return or__3548__auto____11628;
} else
{return p1__10981_SHARP_.call(null,z);
}
}
}),ps__11516);
});
var spn__11756 = (function() { 
var G__11761__delegate = function (x,y,z,args){
var or__3548__auto____11632 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11632))
{return or__3548__auto____11632;
} else
{return cljs.core.some.call(null,(function (p1__10982_SHARP_){
return cljs.core.some.call(null,p1__10982_SHARP_,args);
}),ps__11516);
}
};
var G__11761 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11761__delegate.call(this, x, y, z, args);
};
G__11761.cljs$lang$maxFixedArity = 3;
G__11761.cljs$lang$applyTo = (function (arglist__11764){
var x = cljs.core.first(arglist__11764);
var y = cljs.core.first(cljs.core.next(arglist__11764));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11764)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11764)));
return G__11761__delegate.call(this, x, y, z, args);
});
return G__11761;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11752.call(this);
case  1 :
return spn__11753.call(this,x);
case  2 :
return spn__11754.call(this,x,y);
case  3 :
return spn__11755.call(this,x,y,z);
default:
return spn__11756.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11756.cljs$lang$applyTo;
return spn;
})()
};
var G__11751 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11751__delegate.call(this, p1, p2, p3, ps);
};
G__11751.cljs$lang$maxFixedArity = 3;
G__11751.cljs$lang$applyTo = (function (arglist__11770){
var p1 = cljs.core.first(arglist__11770);
var p2 = cljs.core.first(cljs.core.next(arglist__11770));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11770)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11770)));
return G__11751__delegate.call(this, p1, p2, p3, ps);
});
return G__11751;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11647.call(this,p1);
case  2 :
return some_fn__11648.call(this,p1,p2);
case  3 :
return some_fn__11650.call(this,p1,p2,p3);
default:
return some_fn__11651.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11651.cljs$lang$applyTo;
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
var map__11818 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11784 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11784))
{var s__11786 = temp__3698__auto____11784;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11786)),map.call(null,f,cljs.core.rest.call(null,s__11786)));
} else
{return null;
}
})));
});
var map__11819 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11788 = cljs.core.seq.call(null,c1);
var s2__11789 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11792 = s1__11788;

if(cljs.core.truth_(and__3546__auto____11792))
{return s2__11789;
} else
{return and__3546__auto____11792;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11788),cljs.core.first.call(null,s2__11789)),map.call(null,f,cljs.core.rest.call(null,s1__11788),cljs.core.rest.call(null,s2__11789)));
} else
{return null;
}
})));
});
var map__11820 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11798 = cljs.core.seq.call(null,c1);
var s2__11799 = cljs.core.seq.call(null,c2);
var s3__11800 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11801 = s1__11798;

if(cljs.core.truth_(and__3546__auto____11801))
{var and__3546__auto____11803 = s2__11799;

if(cljs.core.truth_(and__3546__auto____11803))
{return s3__11800;
} else
{return and__3546__auto____11803;
}
} else
{return and__3546__auto____11801;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11798),cljs.core.first.call(null,s2__11799),cljs.core.first.call(null,s3__11800)),map.call(null,f,cljs.core.rest.call(null,s1__11798),cljs.core.rest.call(null,s2__11799),cljs.core.rest.call(null,s3__11800)));
} else
{return null;
}
})));
});
var map__11821 = (function() { 
var G__11832__delegate = function (f,c1,c2,c3,colls){
var step__11809 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11806 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11806)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11806),step.call(null,map.call(null,cljs.core.rest,ss__11806)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11378_SHARP_){
return cljs.core.apply.call(null,f,p1__11378_SHARP_);
}),step__11809.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11832 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11832__delegate.call(this, f, c1, c2, c3, colls);
};
G__11832.cljs$lang$maxFixedArity = 4;
G__11832.cljs$lang$applyTo = (function (arglist__11841){
var f = cljs.core.first(arglist__11841);
var c1 = cljs.core.first(cljs.core.next(arglist__11841));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11841)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11841))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11841))));
return G__11832__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11832;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11818.call(this,f,c1);
case  3 :
return map__11819.call(this,f,c1,c2);
case  4 :
return map__11820.call(this,f,c1,c2,c3);
default:
return map__11821.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11821.cljs$lang$applyTo;
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
{var temp__3698__auto____11844 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11844))
{var s__11849 = temp__3698__auto____11844;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11849),take.call(null,(n - 1),cljs.core.rest.call(null,s__11849)));
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
var step__11884 = (function (n,coll){
while(true){
var s__11882 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11883 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11883))
{return s__11882;
} else
{return and__3546__auto____11883;
}
})()))
{{
var G__11887 = (n - 1);
var G__11888 = cljs.core.rest.call(null,s__11882);
n = G__11887;
coll = G__11888;
continue;
}
} else
{return s__11882;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11884.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11897 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11898 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11897.call(this,n);
case  2 :
return drop_last__11898.call(this,n,s);
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
var s__11905 = cljs.core.seq.call(null,coll);
var lead__11906 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11906))
{{
var G__11908 = cljs.core.next.call(null,s__11905);
var G__11910 = cljs.core.next.call(null,lead__11906);
s__11905 = G__11908;
lead__11906 = G__11910;
continue;
}
} else
{return s__11905;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11918 = (function (pred,coll){
while(true){
var s__11914 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11915 = s__11914;

if(cljs.core.truth_(and__3546__auto____11915))
{return pred.call(null,cljs.core.first.call(null,s__11914));
} else
{return and__3546__auto____11915;
}
})()))
{{
var G__11921 = pred;
var G__11922 = cljs.core.rest.call(null,s__11914);
pred = G__11921;
coll = G__11922;
continue;
}
} else
{return s__11914;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11918.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11925 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11925))
{var s__11927 = temp__3698__auto____11925;

return cljs.core.concat.call(null,s__11927,cycle.call(null,s__11927));
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
var repeat__11937 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11939 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11937.call(this,n);
case  2 :
return repeat__11939.call(this,n,x);
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
var repeatedly__11946 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11947 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11946.call(this,n);
case  2 :
return repeatedly__11947.call(this,n,f);
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
var interleave__11969 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11961 = cljs.core.seq.call(null,c1);
var s2__11962 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11964 = s1__11961;

if(cljs.core.truth_(and__3546__auto____11964))
{return s2__11962;
} else
{return and__3546__auto____11964;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11961),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11962),interleave.call(null,cljs.core.rest.call(null,s1__11961),cljs.core.rest.call(null,s2__11962))));
} else
{return null;
}
})));
});
var interleave__11971 = (function() { 
var G__11973__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11967 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11967)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11967),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11967)));
} else
{return null;
}
})));
};
var G__11973 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11973__delegate.call(this, c1, c2, colls);
};
G__11973.cljs$lang$maxFixedArity = 2;
G__11973.cljs$lang$applyTo = (function (arglist__11974){
var c1 = cljs.core.first(arglist__11974);
var c2 = cljs.core.first(cljs.core.next(arglist__11974));
var colls = cljs.core.rest(cljs.core.next(arglist__11974));
return G__11973__delegate.call(this, c1, c2, colls);
});
return G__11973;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11969.call(this,c1,c2);
default:
return interleave__11971.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11971.cljs$lang$applyTo;
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
var cat__11986 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11982 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11982))
{var coll__11983 = temp__3695__auto____11982;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11983),cat.call(null,cljs.core.rest.call(null,coll__11983),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11986.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11992 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11993 = (function() { 
var G__11995__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11995 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11995__delegate.call(this, f, coll, colls);
};
G__11995.cljs$lang$maxFixedArity = 2;
G__11995.cljs$lang$applyTo = (function (arglist__11996){
var f = cljs.core.first(arglist__11996);
var coll = cljs.core.first(cljs.core.next(arglist__11996));
var colls = cljs.core.rest(cljs.core.next(arglist__11996));
return G__11995__delegate.call(this, f, coll, colls);
});
return G__11995;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11992.call(this,f,coll);
default:
return mapcat__11993.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11993.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11997 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11997))
{var s__11998 = temp__3698__auto____11997;

var f__11999 = cljs.core.first.call(null,s__11998);
var r__12000 = cljs.core.rest.call(null,s__11998);

if(cljs.core.truth_(pred.call(null,f__11999)))
{return cljs.core.cons.call(null,f__11999,filter.call(null,pred,r__12000));
} else
{return filter.call(null,pred,r__12000);
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
var walk__12110 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12110.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12106_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12106_SHARP_));
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
var partition__12210 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12211 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12170 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12170))
{var s__12171 = temp__3698__auto____12170;

var p__12172 = cljs.core.take.call(null,n,s__12171);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12172))))
{return cljs.core.cons.call(null,p__12172,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12171)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12212 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12183 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12183))
{var s__12184 = temp__3698__auto____12183;

var p__12185 = cljs.core.take.call(null,n,s__12184);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12185))))
{return cljs.core.cons.call(null,p__12185,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12184)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12185,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12210.call(this,n,step);
case  3 :
return partition__12211.call(this,n,step,pad);
case  4 :
return partition__12212.call(this,n,step,pad,coll);
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
var get_in__12235 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12236 = (function (m,ks,not_found){
var sentinel__12225 = cljs.core.lookup_sentinel;
var m__12226 = m;
var ks__12228 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12228))
{var m__12229 = cljs.core.get.call(null,m__12226,cljs.core.first.call(null,ks__12228),sentinel__12225);

if(cljs.core.truth_((sentinel__12225 === m__12229)))
{return not_found;
} else
{{
var G__12239 = sentinel__12225;
var G__12240 = m__12229;
var G__12241 = cljs.core.next.call(null,ks__12228);
sentinel__12225 = G__12239;
m__12226 = G__12240;
ks__12228 = G__12241;
continue;
}
}
} else
{return m__12226;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12235.call(this,m,ks);
case  3 :
return get_in__12236.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12246,v){
var vec__12248__12249 = p__12246;
var k__12251 = cljs.core.nth.call(null,vec__12248__12249,0,null);
var ks__12254 = cljs.core.nthnext.call(null,vec__12248__12249,1);

if(cljs.core.truth_(ks__12254))
{return cljs.core.assoc.call(null,m,k__12251,assoc_in.call(null,cljs.core.get.call(null,m,k__12251),ks__12254,v));
} else
{return cljs.core.assoc.call(null,m,k__12251,v);
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
var update_in__delegate = function (m,p__12302,f,args){
var vec__12304__12306 = p__12302;
var k__12308 = cljs.core.nth.call(null,vec__12304__12306,0,null);
var ks__12310 = cljs.core.nthnext.call(null,vec__12304__12306,1);

if(cljs.core.truth_(ks__12310))
{return cljs.core.assoc.call(null,m,k__12308,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12308),ks__12310,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12308,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12308),args));
}
};
var update_in = function (m,p__12302,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12302, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12334){
var m = cljs.core.first(arglist__12334);
var p__12302 = cljs.core.first(cljs.core.next(arglist__12334));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12334)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12334)));
return update_in__delegate.call(this, m, p__12302, f, args);
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
var this__12352 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12483 = null;
var G__12483__12484 = (function (coll,k){
var this__12354 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12483__12485 = (function (coll,k,not_found){
var this__12358 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12483 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12483__12484.call(this,coll,k);
case  3 :
return G__12483__12485.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12483;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12363 = this;
var new_array__12364 = cljs.core.aclone.call(null,this__12363.array);

(new_array__12364[k] = v);
return (new cljs.core.Vector(this__12363.meta,new_array__12364));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12491 = null;
var G__12491__12492 = (function (coll,k){
var this__12365 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12491__12493 = (function (coll,k,not_found){
var this__12366 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12491 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12491__12492.call(this,coll,k);
case  3 :
return G__12491__12493.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12491;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12394 = this;
var new_array__12395 = cljs.core.aclone.call(null,this__12394.array);

new_array__12395.push(o);
return (new cljs.core.Vector(this__12394.meta,new_array__12395));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12502 = null;
var G__12502__12503 = (function (v,f){
var this__12396 = this;
return cljs.core.ci_reduce.call(null,this__12396.array,f);
});
var G__12502__12504 = (function (v,f,start){
var this__12397 = this;
return cljs.core.ci_reduce.call(null,this__12397.array,f,start);
});
G__12502 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12502__12503.call(this,v,f);
case  3 :
return G__12502__12504.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12502;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12402 = this;
if(cljs.core.truth_((this__12402.array.length > 0)))
{var vector_seq__12429 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12402.array.length)))
{return cljs.core.cons.call(null,(this__12402.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12429.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12431 = this;
return this__12431.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12433 = this;
var count__12434 = this__12433.array.length;

if(cljs.core.truth_((count__12434 > 0)))
{return (this__12433.array[(count__12434 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12449 = this;
if(cljs.core.truth_((this__12449.array.length > 0)))
{var new_array__12453 = cljs.core.aclone.call(null,this__12449.array);

new_array__12453.pop();
return (new cljs.core.Vector(this__12449.meta,new_array__12453));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12464 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12465 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12466 = this;
return (new cljs.core.Vector(meta,this__12466.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12472 = this;
return this__12472.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12572 = null;
var G__12572__12573 = (function (coll,n){
var this__12473 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12474 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12474))
{return (n < this__12473.array.length);
} else
{return and__3546__auto____12474;
}
})()))
{return (this__12473.array[n]);
} else
{return null;
}
});
var G__12572__12574 = (function (coll,n,not_found){
var this__12475 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12480 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12480))
{return (n < this__12475.array.length);
} else
{return and__3546__auto____12480;
}
})()))
{return (this__12475.array[n]);
} else
{return not_found;
}
});
G__12572 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12572__12573.call(this,coll,n);
case  3 :
return G__12572__12574.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12572;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12481 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12481.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12597){
var args = cljs.core.seq( arglist__12597 );;
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
var this__12602 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12646 = null;
var G__12646__12647 = (function (coll,k){
var this__12603 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12646__12648 = (function (coll,k,not_found){
var this__12608 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12646 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12646__12647.call(this,coll,k);
case  3 :
return G__12646__12648.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12646;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12609 = this;
var v_pos__12610 = (this__12609.start + key);

return (new cljs.core.Subvec(this__12609.meta,cljs.core._assoc.call(null,this__12609.v,v_pos__12610,val),this__12609.start,((this__12609.end > (v_pos__12610 + 1)) ? this__12609.end : (v_pos__12610 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12650 = null;
var G__12650__12651 = (function (coll,k){
var this__12613 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12650__12652 = (function (coll,k,not_found){
var this__12616 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12650 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12650__12651.call(this,coll,k);
case  3 :
return G__12650__12652.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12650;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12617 = this;
return (new cljs.core.Subvec(this__12617.meta,cljs.core._assoc_n.call(null,this__12617.v,this__12617.end,o),this__12617.start,(this__12617.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12654 = null;
var G__12654__12655 = (function (coll,f){
var this__12618 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12654__12656 = (function (coll,f,start){
var this__12619 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12654 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12654__12655.call(this,coll,f);
case  3 :
return G__12654__12656.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12654;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12624 = this;
var subvec_seq__12625 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12624.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12624.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12625.call(null,this__12624.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12626 = this;
return (this__12626.end - this__12626.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12627 = this;
return cljs.core._nth.call(null,this__12627.v,(this__12627.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12628 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12628.start,this__12628.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12628.meta,this__12628.v,this__12628.start,(this__12628.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12629 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12630 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12631 = this;
return (new cljs.core.Subvec(meta,this__12631.v,this__12631.start,this__12631.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12639 = this;
return this__12639.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12660 = null;
var G__12660__12661 = (function (coll,n){
var this__12640 = this;
return cljs.core._nth.call(null,this__12640.v,(this__12640.start + n));
});
var G__12660__12663 = (function (coll,n,not_found){
var this__12642 = this;
return cljs.core._nth.call(null,this__12642.v,(this__12642.start + n),not_found);
});
G__12660 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12660__12661.call(this,coll,n);
case  3 :
return G__12660__12663.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12660;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12645 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12645.meta);
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
var subvec__12671 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12673 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12671.call(this,v,start);
case  3 :
return subvec__12673.call(this,v,start,end);
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
var this__12689 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12690 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12692 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12694 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12694.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12695 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12697 = this;
return cljs.core._first.call(null,this__12697.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12701 = this;
var temp__3695__auto____12702 = cljs.core.next.call(null,this__12701.front);

if(cljs.core.truth_(temp__3695__auto____12702))
{var f1__12703 = temp__3695__auto____12702;

return (new cljs.core.PersistentQueueSeq(this__12701.meta,f1__12703,this__12701.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12701.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12701.meta,this__12701.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12747 = this;
return this__12747.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12816 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12816.front,this__12816.rear));
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
var this__12849 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12850 = this;
if(cljs.core.truth_(this__12850.front))
{return (new cljs.core.PersistentQueue(this__12850.meta,(this__12850.count + 1),this__12850.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12851 = this__12850.rear;

if(cljs.core.truth_(or__3548__auto____12851))
{return or__3548__auto____12851;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12850.meta,(this__12850.count + 1),cljs.core.conj.call(null,this__12850.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12852 = this;
var rear__12853 = cljs.core.seq.call(null,this__12852.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12854 = this__12852.front;

if(cljs.core.truth_(or__3548__auto____12854))
{return or__3548__auto____12854;
} else
{return rear__12853;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12852.front,cljs.core.seq.call(null,rear__12853)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12855 = this;
return this__12855.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12857 = this;
return cljs.core._first.call(null,this__12857.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12859 = this;
if(cljs.core.truth_(this__12859.front))
{var temp__3695__auto____12861 = cljs.core.next.call(null,this__12859.front);

if(cljs.core.truth_(temp__3695__auto____12861))
{var f1__12863 = temp__3695__auto____12861;

return (new cljs.core.PersistentQueue(this__12859.meta,(this__12859.count - 1),f1__12863,this__12859.rear));
} else
{return (new cljs.core.PersistentQueue(this__12859.meta,(this__12859.count - 1),cljs.core.seq.call(null,this__12859.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12866 = this;
return cljs.core.first.call(null,this__12866.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12868 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12870 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12936 = this;
return (new cljs.core.PersistentQueue(meta,this__12936.count,this__12936.front,this__12936.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12937 = this;
return this__12937.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12939 = this;
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
var this__12958 = this;
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
var len__12966 = array.length;

var i__12968 = 0;

while(true){
if(cljs.core.truth_((i__12968 < len__12966)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12968]))))
{return i__12968;
} else
{{
var G__12972 = (i__12968 + incr);
i__12968 = G__12972;
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
var obj_map_contains_key_QMARK___12976 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12977 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12975 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12975))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12975;
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
return obj_map_contains_key_QMARK___12976.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12977.call(this,k,strobj,true_val,false_val);
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
var this__12988 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13017 = null;
var G__13017__13018 = (function (coll,k){
var this__12990 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13017__13019 = (function (coll,k,not_found){
var this__12991 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12991.strobj,(this__12991.strobj[k]),not_found);
});
G__13017 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13017__13018.call(this,coll,k);
case  3 :
return G__13017__13019.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13017;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12993 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12994 = goog.object.clone.call(null,this__12993.strobj);
var overwrite_QMARK___12995 = new_strobj__12994.hasOwnProperty(k);

(new_strobj__12994[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12995))
{return (new cljs.core.ObjMap(this__12993.meta,this__12993.keys,new_strobj__12994));
} else
{var new_keys__12996 = cljs.core.aclone.call(null,this__12993.keys);

new_keys__12996.push(k);
return (new cljs.core.ObjMap(this__12993.meta,new_keys__12996,new_strobj__12994));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12993.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12997 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12997.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13021 = null;
var G__13021__13022 = (function (coll,k){
var this__12998 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13021__13023 = (function (coll,k,not_found){
var this__12999 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13021 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13021__13022.call(this,coll,k);
case  3 :
return G__13021__13023.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13021;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13000 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13001 = this;
if(cljs.core.truth_((this__13001.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12985_SHARP_){
return cljs.core.vector.call(null,p1__12985_SHARP_,(this__13001.strobj[p1__12985_SHARP_]));
}),this__13001.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13003 = this;
return this__13003.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13006 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13008 = this;
return (new cljs.core.ObjMap(meta,this__13008.keys,this__13008.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13010 = this;
return this__13010.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13012 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13012.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13013 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13014 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13014))
{return this__13013.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13014;
}
})()))
{var new_keys__13015 = cljs.core.aclone.call(null,this__13013.keys);
var new_strobj__13016 = goog.object.clone.call(null,this__13013.strobj);

new_keys__13015.splice(cljs.core.scan_array.call(null,1,k,new_keys__13015),1);
cljs.core.js_delete.call(null,new_strobj__13016,k);
return (new cljs.core.ObjMap(this__13013.meta,new_keys__13015,new_strobj__13016));
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
var this__13064 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13133 = null;
var G__13133__13135 = (function (coll,k){
var this__13066 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13133__13136 = (function (coll,k,not_found){
var this__13067 = this;
var bucket__13068 = (this__13067.hashobj[cljs.core.hash.call(null,k)]);
var i__13070 = (cljs.core.truth_(bucket__13068)?cljs.core.scan_array.call(null,2,k,bucket__13068):null);

if(cljs.core.truth_(i__13070))
{return (bucket__13068[(i__13070 + 1)]);
} else
{return not_found;
}
});
G__13133 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13133__13135.call(this,coll,k);
case  3 :
return G__13133__13136.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13133;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13073 = this;
var h__13078 = cljs.core.hash.call(null,k);
var bucket__13079 = (this__13073.hashobj[h__13078]);

if(cljs.core.truth_(bucket__13079))
{var new_bucket__13081 = cljs.core.aclone.call(null,bucket__13079);
var new_hashobj__13083 = goog.object.clone.call(null,this__13073.hashobj);

(new_hashobj__13083[h__13078] = new_bucket__13081);
var temp__3695__auto____13085 = cljs.core.scan_array.call(null,2,k,new_bucket__13081);

if(cljs.core.truth_(temp__3695__auto____13085))
{var i__13086 = temp__3695__auto____13085;

(new_bucket__13081[(i__13086 + 1)] = v);
return (new cljs.core.HashMap(this__13073.meta,this__13073.count,new_hashobj__13083));
} else
{new_bucket__13081.push(k,v);
return (new cljs.core.HashMap(this__13073.meta,(this__13073.count + 1),new_hashobj__13083));
}
} else
{var new_hashobj__13089 = goog.object.clone.call(null,this__13073.hashobj);

(new_hashobj__13089[h__13078] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13073.meta,(this__13073.count + 1),new_hashobj__13089));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13090 = this;
var bucket__13091 = (this__13090.hashobj[cljs.core.hash.call(null,k)]);
var i__13092 = (cljs.core.truth_(bucket__13091)?cljs.core.scan_array.call(null,2,k,bucket__13091):null);

if(cljs.core.truth_(i__13092))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13162 = null;
var G__13162__13163 = (function (coll,k){
var this__13095 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13162__13165 = (function (coll,k,not_found){
var this__13097 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13162 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13162__13163.call(this,coll,k);
case  3 :
return G__13162__13165.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13162;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13103 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13105 = this;
if(cljs.core.truth_((this__13105.count > 0)))
{var hashes__13108 = cljs.core.js_keys.call(null,this__13105.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13031_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13105.hashobj[p1__13031_SHARP_])));
}),hashes__13108);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13112 = this;
return this__13112.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13113 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13115 = this;
return (new cljs.core.HashMap(meta,this__13115.count,this__13115.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13117 = this;
return this__13117.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13118 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13118.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13120 = this;
var h__13121 = cljs.core.hash.call(null,k);
var bucket__13122 = (this__13120.hashobj[h__13121]);
var i__13124 = (cljs.core.truth_(bucket__13122)?cljs.core.scan_array.call(null,2,k,bucket__13122):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13124)))
{return coll;
} else
{var new_hashobj__13126 = goog.object.clone.call(null,this__13120.hashobj);

if(cljs.core.truth_((3 > bucket__13122.length)))
{cljs.core.js_delete.call(null,new_hashobj__13126,h__13121);
} else
{var new_bucket__13128 = cljs.core.aclone.call(null,bucket__13122);

new_bucket__13128.splice(i__13124,2);
(new_hashobj__13126[h__13121] = new_bucket__13128);
}
return (new cljs.core.HashMap(this__13120.meta,(this__13120.count - 1),new_hashobj__13126));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13203 = ks.length;

var i__13204 = 0;
var out__13205 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13204 < len__13203)))
{{
var G__13208 = (i__13204 + 1);
var G__13209 = cljs.core.assoc.call(null,out__13205,(ks[i__13204]),(vs[i__13204]));
i__13204 = G__13208;
out__13205 = G__13209;
continue;
}
} else
{return out__13205;
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
var in$__13214 = cljs.core.seq.call(null,keyvals);
var out__13215 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13214))
{{
var G__13217 = cljs.core.nnext.call(null,in$__13214);
var G__13218 = cljs.core.assoc.call(null,out__13215,cljs.core.first.call(null,in$__13214),cljs.core.second.call(null,in$__13214));
in$__13214 = G__13217;
out__13215 = G__13218;
continue;
}
} else
{return out__13215;
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
hash_map.cljs$lang$applyTo = (function (arglist__13219){
var keyvals = cljs.core.seq( arglist__13219 );;
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
{return cljs.core.reduce.call(null,(function (p1__13223_SHARP_,p2__13224_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13235 = p1__13223_SHARP_;

if(cljs.core.truth_(or__3548__auto____13235))
{return or__3548__auto____13235;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13224_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13241){
var maps = cljs.core.seq( arglist__13241 );;
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
{var merge_entry__13253 = (function (m,e){
var k__13250 = cljs.core.first.call(null,e);
var v__13251 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13250)))
{return cljs.core.assoc.call(null,m,k__13250,f.call(null,cljs.core.get.call(null,m,k__13250),v__13251));
} else
{return cljs.core.assoc.call(null,m,k__13250,v__13251);
}
});
var merge2__13257 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13253,(function (){var or__3548__auto____13256 = m1;

if(cljs.core.truth_(or__3548__auto____13256))
{return or__3548__auto____13256;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13257,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13269){
var f = cljs.core.first(arglist__13269);
var maps = cljs.core.rest(arglist__13269);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13275 = cljs.core.ObjMap.fromObject([],{});
var keys__13276 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13276))
{var key__13277 = cljs.core.first.call(null,keys__13276);
var entry__13278 = cljs.core.get.call(null,map,key__13277,"﷐'user/not-found");

{
var G__13280 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13278,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13275,key__13277,entry__13278):ret__13275);
var G__13281 = cljs.core.next.call(null,keys__13276);
ret__13275 = G__13280;
keys__13276 = G__13281;
continue;
}
} else
{return ret__13275;
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
var this__13304 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13381 = null;
var G__13381__13383 = (function (coll,v){
var this__13307 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13381__13384 = (function (coll,v,not_found){
var this__13310 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13310.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13381 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13381__13383.call(this,coll,v);
case  3 :
return G__13381__13384.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13381;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13390 = null;
var G__13390__13391 = (function (coll,k){
var this__13311 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13390__13392 = (function (coll,k,not_found){
var this__13312 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13390 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13390__13391.call(this,coll,k);
case  3 :
return G__13390__13392.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13390;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13313 = this;
return (new cljs.core.Set(this__13313.meta,cljs.core.assoc.call(null,this__13313.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13316 = this;
return cljs.core.keys.call(null,this__13316.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13317 = this;
return (new cljs.core.Set(this__13317.meta,cljs.core.dissoc.call(null,this__13317.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13358 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13359 = this;
var and__3546__auto____13363 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13363))
{var and__3546__auto____13364 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13364))
{return cljs.core.every_QMARK_.call(null,(function (p1__13272_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13272_SHARP_);
}),other);
} else
{return and__3546__auto____13364;
}
} else
{return and__3546__auto____13363;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13370 = this;
return (new cljs.core.Set(meta,this__13370.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13372 = this;
return this__13372.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13374 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13374.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13417 = cljs.core.seq.call(null,coll);
var out__13420 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13417))))
{{
var G__13426 = cljs.core.rest.call(null,in$__13417);
var G__13428 = cljs.core.conj.call(null,out__13420,cljs.core.first.call(null,in$__13417));
in$__13417 = G__13426;
out__13420 = G__13428;
continue;
}
} else
{return out__13420;
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
{var n__13437 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13443 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13443))
{var e__13445 = temp__3695__auto____13443;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13445));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13437,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13405_SHARP_){
var temp__3695__auto____13501 = cljs.core.find.call(null,smap,p1__13405_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13501))
{var e__13502 = temp__3695__auto____13501;

return cljs.core.second.call(null,e__13502);
} else
{return p1__13405_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13531 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13514,seen){
while(true){
var vec__13515__13518 = p__13514;
var f__13519 = cljs.core.nth.call(null,vec__13515__13518,0,null);
var xs__13520 = vec__13515__13518;

var temp__3698__auto____13521 = cljs.core.seq.call(null,xs__13520);

if(cljs.core.truth_(temp__3698__auto____13521))
{var s__13523 = temp__3698__auto____13521;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13519)))
{{
var G__13585 = cljs.core.rest.call(null,s__13523);
var G__13586 = seen;
p__13514 = G__13585;
seen = G__13586;
continue;
}
} else
{return cljs.core.cons.call(null,f__13519,step.call(null,cljs.core.rest.call(null,s__13523),cljs.core.conj.call(null,seen,f__13519)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13531.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13589 = cljs.core.Vector.fromArray([]);
var s__13590 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13590)))
{{
var G__13594 = cljs.core.conj.call(null,ret__13589,cljs.core.first.call(null,s__13590));
var G__13595 = cljs.core.next.call(null,s__13590);
ret__13589 = G__13594;
s__13590 = G__13595;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13589);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13597 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13597))
{return or__3548__auto____13597;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13612 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13612 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13612 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13618 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13618))
{return or__3548__auto____13618;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13619 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13619 > -1)))
{return cljs.core.subs.call(null,x,2,i__13619);
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
var map__13623 = cljs.core.ObjMap.fromObject([],{});
var ks__13624 = cljs.core.seq.call(null,keys);
var vs__13625 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13626 = ks__13624;

if(cljs.core.truth_(and__3546__auto____13626))
{return vs__13625;
} else
{return and__3546__auto____13626;
}
})()))
{{
var G__13628 = cljs.core.assoc.call(null,map__13623,cljs.core.first.call(null,ks__13624),cljs.core.first.call(null,vs__13625));
var G__13629 = cljs.core.next.call(null,ks__13624);
var G__13630 = cljs.core.next.call(null,vs__13625);
map__13623 = G__13628;
ks__13624 = G__13629;
vs__13625 = G__13630;
continue;
}
} else
{return map__13623;
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
var max_key__13638 = (function (k,x){
return x;
});
var max_key__13639 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13640 = (function() { 
var G__13642__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13621_SHARP_,p2__13622_SHARP_){
return max_key.call(null,k,p1__13621_SHARP_,p2__13622_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13642 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13642__delegate.call(this, k, x, y, more);
};
G__13642.cljs$lang$maxFixedArity = 3;
G__13642.cljs$lang$applyTo = (function (arglist__13643){
var k = cljs.core.first(arglist__13643);
var x = cljs.core.first(cljs.core.next(arglist__13643));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13643)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13643)));
return G__13642__delegate.call(this, k, x, y, more);
});
return G__13642;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13638.call(this,k,x);
case  3 :
return max_key__13639.call(this,k,x,y);
default:
return max_key__13640.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13640.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13650 = (function (k,x){
return x;
});
var min_key__13652 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13653 = (function() { 
var G__13658__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13633_SHARP_,p2__13634_SHARP_){
return min_key.call(null,k,p1__13633_SHARP_,p2__13634_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13658 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13658__delegate.call(this, k, x, y, more);
};
G__13658.cljs$lang$maxFixedArity = 3;
G__13658.cljs$lang$applyTo = (function (arglist__13662){
var k = cljs.core.first(arglist__13662);
var x = cljs.core.first(cljs.core.next(arglist__13662));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13662)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13662)));
return G__13658__delegate.call(this, k, x, y, more);
});
return G__13658;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13650.call(this,k,x);
case  3 :
return min_key__13652.call(this,k,x,y);
default:
return min_key__13653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13653.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13687 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13688 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13668 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13668))
{var s__13669 = temp__3698__auto____13668;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13669),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13669)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13687.call(this,n,step);
case  3 :
return partition_all__13688.call(this,n,step,coll);
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
var temp__3698__auto____13730 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13730))
{var s__13731 = temp__3698__auto____13730;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13731))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13731),take_while.call(null,pred,cljs.core.rest.call(null,s__13731)));
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
var this__13755 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13756 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13822 = null;
var G__13822__13824 = (function (rng,f){
var this__13759 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13822__13825 = (function (rng,f,s){
var this__13760 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13822 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13822__13824.call(this,rng,f);
case  3 :
return G__13822__13825.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13822;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13761 = this;
var comp__13762 = (cljs.core.truth_((this__13761.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13762.call(null,this__13761.start,this__13761.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13767 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13767.end - this__13767.start) / this__13767.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13768 = this;
return this__13768.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13769 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13769.meta,(this__13769.start + this__13769.step),this__13769.end,this__13769.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13800 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13805 = this;
return (new cljs.core.Range(meta,this__13805.start,this__13805.end,this__13805.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13806 = this;
return this__13806.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13836 = null;
var G__13836__13838 = (function (rng,n){
var this__13808 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13808.start + (n * this__13808.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13810 = (this__13808.start > this__13808.end);

if(cljs.core.truth_(and__3546__auto____13810))
{return cljs.core._EQ_.call(null,this__13808.step,0);
} else
{return and__3546__auto____13810;
}
})()))
{return this__13808.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13836__13839 = (function (rng,n,not_found){
var this__13812 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13812.start + (n * this__13812.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13815 = (this__13812.start > this__13812.end);

if(cljs.core.truth_(and__3546__auto____13815))
{return cljs.core._EQ_.call(null,this__13812.step,0);
} else
{return and__3546__auto____13815;
}
})()))
{return this__13812.start;
} else
{return not_found;
}
}
});
G__13836 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13836__13838.call(this,rng,n);
case  3 :
return G__13836__13839.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13836;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13817 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13817.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13871 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13872 = (function (end){
return range.call(null,0,end,1);
});
var range__13873 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13874 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13871.call(this);
case  1 :
return range__13872.call(this,start);
case  2 :
return range__13873.call(this,start,end);
case  3 :
return range__13874.call(this,start,end,step);
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
var temp__3698__auto____13880 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13880))
{var s__13881 = temp__3698__auto____13880;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13881),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13881)));
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
var temp__3698__auto____13893 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13893))
{var s__13894 = temp__3698__auto____13893;

var fst__13895 = cljs.core.first.call(null,s__13894);
var fv__13896 = f.call(null,fst__13895);
var run__13898 = cljs.core.cons.call(null,fst__13895,cljs.core.take_while.call(null,(function (p1__13882_SHARP_){
return cljs.core._EQ_.call(null,fv__13896,f.call(null,p1__13882_SHARP_));
}),cljs.core.next.call(null,s__13894)));

return cljs.core.cons.call(null,run__13898,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13898),s__13894))));
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
var reductions__13946 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13935 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13935))
{var s__13936 = temp__3695__auto____13935;

return reductions.call(null,f,cljs.core.first.call(null,s__13936),cljs.core.rest.call(null,s__13936));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13947 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13938 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13938))
{var s__13939 = temp__3698__auto____13938;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13939)),cljs.core.rest.call(null,s__13939));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13946.call(this,f,init);
case  3 :
return reductions__13947.call(this,f,init,coll);
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
var juxt__13990 = (function (f){
return (function() {
var G__14004 = null;
var G__14004__14005 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14004__14006 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14004__14007 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14004__14008 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14004__14009 = (function() { 
var G__14017__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14017 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14017__delegate.call(this, x, y, z, args);
};
G__14017.cljs$lang$maxFixedArity = 3;
G__14017.cljs$lang$applyTo = (function (arglist__14022){
var x = cljs.core.first(arglist__14022);
var y = cljs.core.first(cljs.core.next(arglist__14022));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14022)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14022)));
return G__14017__delegate.call(this, x, y, z, args);
});
return G__14017;
})()
;
G__14004 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14004__14005.call(this);
case  1 :
return G__14004__14006.call(this,x);
case  2 :
return G__14004__14007.call(this,x,y);
case  3 :
return G__14004__14008.call(this,x,y,z);
default:
return G__14004__14009.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14004.cljs$lang$maxFixedArity = 3;
G__14004.cljs$lang$applyTo = G__14004__14009.cljs$lang$applyTo;
return G__14004;
})()
});
var juxt__13993 = (function (f,g){
return (function() {
var G__14028 = null;
var G__14028__14039 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14028__14040 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14028__14041 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14028__14042 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14028__14044 = (function() { 
var G__14049__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14049 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14049__delegate.call(this, x, y, z, args);
};
G__14049.cljs$lang$maxFixedArity = 3;
G__14049.cljs$lang$applyTo = (function (arglist__14057){
var x = cljs.core.first(arglist__14057);
var y = cljs.core.first(cljs.core.next(arglist__14057));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14057)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14057)));
return G__14049__delegate.call(this, x, y, z, args);
});
return G__14049;
})()
;
G__14028 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14028__14039.call(this);
case  1 :
return G__14028__14040.call(this,x);
case  2 :
return G__14028__14041.call(this,x,y);
case  3 :
return G__14028__14042.call(this,x,y,z);
default:
return G__14028__14044.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14028.cljs$lang$maxFixedArity = 3;
G__14028.cljs$lang$applyTo = G__14028__14044.cljs$lang$applyTo;
return G__14028;
})()
});
var juxt__13994 = (function (f,g,h){
return (function() {
var G__14061 = null;
var G__14061__14062 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14061__14063 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14061__14064 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14061__14065 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14061__14066 = (function() { 
var G__14077__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14077 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14077__delegate.call(this, x, y, z, args);
};
G__14077.cljs$lang$maxFixedArity = 3;
G__14077.cljs$lang$applyTo = (function (arglist__14084){
var x = cljs.core.first(arglist__14084);
var y = cljs.core.first(cljs.core.next(arglist__14084));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14084)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14084)));
return G__14077__delegate.call(this, x, y, z, args);
});
return G__14077;
})()
;
G__14061 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14061__14062.call(this);
case  1 :
return G__14061__14063.call(this,x);
case  2 :
return G__14061__14064.call(this,x,y);
case  3 :
return G__14061__14065.call(this,x,y,z);
default:
return G__14061__14066.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14061.cljs$lang$maxFixedArity = 3;
G__14061.cljs$lang$applyTo = G__14061__14066.cljs$lang$applyTo;
return G__14061;
})()
});
var juxt__13997 = (function() { 
var G__14086__delegate = function (f,g,h,fs){
var fs__13973 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14088 = null;
var G__14088__14089 = (function (){
return cljs.core.reduce.call(null,(function (p1__13915_SHARP_,p2__13917_SHARP_){
return cljs.core.conj.call(null,p1__13915_SHARP_,p2__13917_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13973);
});
var G__14088__14090 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13920_SHARP_,p2__13922_SHARP_){
return cljs.core.conj.call(null,p1__13920_SHARP_,p2__13922_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13973);
});
var G__14088__14091 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13924_SHARP_,p2__13926_SHARP_){
return cljs.core.conj.call(null,p1__13924_SHARP_,p2__13926_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13973);
});
var G__14088__14092 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13929_SHARP_,p2__13930_SHARP_){
return cljs.core.conj.call(null,p1__13929_SHARP_,p2__13930_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13973);
});
var G__14088__14094 = (function() { 
var G__14101__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13931_SHARP_,p2__13933_SHARP_){
return cljs.core.conj.call(null,p1__13931_SHARP_,cljs.core.apply.call(null,p2__13933_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13973);
};
var G__14101 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14101__delegate.call(this, x, y, z, args);
};
G__14101.cljs$lang$maxFixedArity = 3;
G__14101.cljs$lang$applyTo = (function (arglist__14102){
var x = cljs.core.first(arglist__14102);
var y = cljs.core.first(cljs.core.next(arglist__14102));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14102)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14102)));
return G__14101__delegate.call(this, x, y, z, args);
});
return G__14101;
})()
;
G__14088 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14088__14089.call(this);
case  1 :
return G__14088__14090.call(this,x);
case  2 :
return G__14088__14091.call(this,x,y);
case  3 :
return G__14088__14092.call(this,x,y,z);
default:
return G__14088__14094.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14088.cljs$lang$maxFixedArity = 3;
G__14088.cljs$lang$applyTo = G__14088__14094.cljs$lang$applyTo;
return G__14088;
})()
};
var G__14086 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14086__delegate.call(this, f, g, h, fs);
};
G__14086.cljs$lang$maxFixedArity = 3;
G__14086.cljs$lang$applyTo = (function (arglist__14103){
var f = cljs.core.first(arglist__14103);
var g = cljs.core.first(cljs.core.next(arglist__14103));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14103)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14103)));
return G__14086__delegate.call(this, f, g, h, fs);
});
return G__14086;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13990.call(this,f);
case  2 :
return juxt__13993.call(this,f,g);
case  3 :
return juxt__13994.call(this,f,g,h);
default:
return juxt__13997.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13997.cljs$lang$applyTo;
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
var dorun__14126 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14130 = cljs.core.next.call(null,coll);
coll = G__14130;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14127 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14117 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14117))
{return (n > 0);
} else
{return and__3546__auto____14117;
}
})()))
{{
var G__14133 = (n - 1);
var G__14134 = cljs.core.next.call(null,coll);
n = G__14133;
coll = G__14134;
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
return dorun__14126.call(this,n);
case  2 :
return dorun__14127.call(this,n,coll);
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
var doall__14151 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14152 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14151.call(this,n);
case  2 :
return doall__14152.call(this,n,coll);
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
var matches__14179 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14179),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14179),1)))
{return cljs.core.first.call(null,matches__14179);
} else
{return cljs.core.vec.call(null,matches__14179);
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
var matches__14399 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14399)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14399),1)))
{return cljs.core.first.call(null,matches__14399);
} else
{return cljs.core.vec.call(null,matches__14399);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14402 = cljs.core.re_find.call(null,re,s);
var match_idx__14403 = s.search(re);
var match_str__14404 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14402))?cljs.core.first.call(null,match_data__14402):match_data__14402);
var post_match__14406 = cljs.core.subs.call(null,s,(match_idx__14403 + cljs.core.count.call(null,match_str__14404)));

if(cljs.core.truth_(match_data__14402))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14402,re_seq.call(null,re,post_match__14406));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14407_SHARP_){
return print_one.call(null,p1__14407_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14409 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14409))
{var and__3546__auto____14420 = (function (){var x__445__auto____14413 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14414 = x__445__auto____14413;

if(cljs.core.truth_(and__3546__auto____14414))
{var and__3546__auto____14417 = x__445__auto____14413.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14417))
{return cljs.core.not.call(null,x__445__auto____14413.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14417;
}
} else
{return and__3546__auto____14414;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14413);
}
})();

if(cljs.core.truth_(and__3546__auto____14420))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14420;
}
} else
{return and__3546__auto____14409;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14423 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14424 = x__445__auto____14423;

if(cljs.core.truth_(and__3546__auto____14424))
{var and__3546__auto____14427 = x__445__auto____14423.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14427))
{return cljs.core.not.call(null,x__445__auto____14423.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14427;
}
} else
{return and__3546__auto____14424;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14423);
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
var first_obj__14433 = cljs.core.first.call(null,objs);
var sb__14434 = (new goog.string.StringBuffer());

var G__14435__14436 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14435__14436))
{var obj__14437 = cljs.core.first.call(null,G__14435__14436);
var G__14435__14438 = G__14435__14436;

while(true){
if(cljs.core.truth_((obj__14437 === first_obj__14433)))
{} else
{sb__14434.append(" ");
}
var G__14440__14441 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14437,opts));

if(cljs.core.truth_(G__14440__14441))
{var string__14443 = cljs.core.first.call(null,G__14440__14441);
var G__14440__14444 = G__14440__14441;

while(true){
sb__14434.append(string__14443);
var temp__3698__auto____14445 = cljs.core.next.call(null,G__14440__14444);

if(cljs.core.truth_(temp__3698__auto____14445))
{var G__14440__14446 = temp__3698__auto____14445;

{
var G__14546 = cljs.core.first.call(null,G__14440__14446);
var G__14547 = G__14440__14446;
string__14443 = G__14546;
G__14440__14444 = G__14547;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14541 = cljs.core.next.call(null,G__14435__14438);

if(cljs.core.truth_(temp__3698__auto____14541))
{var G__14435__14542 = temp__3698__auto____14541;

{
var G__14550 = cljs.core.first.call(null,G__14435__14542);
var G__14551 = G__14435__14542;
obj__14437 = G__14550;
G__14435__14438 = G__14551;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14434);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14558 = cljs.core.first.call(null,objs);

var G__14559__14564 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14559__14564))
{var obj__14568 = cljs.core.first.call(null,G__14559__14564);
var G__14559__14569 = G__14559__14564;

while(true){
if(cljs.core.truth_((obj__14568 === first_obj__14558)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14574__14575 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14568,opts));

if(cljs.core.truth_(G__14574__14575))
{var string__14578 = cljs.core.first.call(null,G__14574__14575);
var G__14574__14579 = G__14574__14575;

while(true){
cljs.core.string_print.call(null,string__14578);
var temp__3698__auto____14580 = cljs.core.next.call(null,G__14574__14579);

if(cljs.core.truth_(temp__3698__auto____14580))
{var G__14574__14583 = temp__3698__auto____14580;

{
var G__14591 = cljs.core.first.call(null,G__14574__14583);
var G__14592 = G__14574__14583;
string__14578 = G__14591;
G__14574__14579 = G__14592;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14585 = cljs.core.next.call(null,G__14559__14569);

if(cljs.core.truth_(temp__3698__auto____14585))
{var G__14559__14586 = temp__3698__auto____14585;

{
var G__14593 = cljs.core.first.call(null,G__14559__14586);
var G__14594 = G__14559__14586;
obj__14568 = G__14593;
G__14559__14569 = G__14594;
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
pr_str.cljs$lang$applyTo = (function (arglist__14603){
var objs = cljs.core.seq( arglist__14603 );;
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
pr.cljs$lang$applyTo = (function (arglist__14605){
var objs = cljs.core.seq( arglist__14605 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14607){
var objs = cljs.core.seq( arglist__14607 );;
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
println.cljs$lang$applyTo = (function (arglist__14613){
var objs = cljs.core.seq( arglist__14613 );;
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
prn.cljs$lang$applyTo = (function (arglist__14619){
var objs = cljs.core.seq( arglist__14619 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14622 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14622,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14633 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14633))
{var nspc__14634 = temp__3698__auto____14633;

return cljs.core.str.call(null,nspc__14634,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14638 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14638))
{var nspc__14640 = temp__3698__auto____14638;

return cljs.core.str.call(null,nspc__14640,"/");
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
var pr_pair__14663 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14663,"{",", ","}",opts,coll);
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
var this__14718 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14719 = this;
var G__14720__14721 = cljs.core.seq.call(null,this__14719.watches);

if(cljs.core.truth_(G__14720__14721))
{var G__14723__14725 = cljs.core.first.call(null,G__14720__14721);
var vec__14724__14726 = G__14723__14725;
var key__14728 = cljs.core.nth.call(null,vec__14724__14726,0,null);
var f__14729 = cljs.core.nth.call(null,vec__14724__14726,1,null);
var G__14720__14730 = G__14720__14721;

var G__14723__14731 = G__14723__14725;
var G__14720__14732 = G__14720__14730;

while(true){
var vec__14733__14734 = G__14723__14731;
var key__14735 = cljs.core.nth.call(null,vec__14733__14734,0,null);
var f__14736 = cljs.core.nth.call(null,vec__14733__14734,1,null);
var G__14720__14737 = G__14720__14732;

f__14736.call(null,key__14735,this$,oldval,newval);
var temp__3698__auto____14738 = cljs.core.next.call(null,G__14720__14737);

if(cljs.core.truth_(temp__3698__auto____14738))
{var G__14720__14739 = temp__3698__auto____14738;

{
var G__14755 = cljs.core.first.call(null,G__14720__14739);
var G__14756 = G__14720__14739;
G__14723__14731 = G__14755;
G__14720__14732 = G__14756;
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
var this__14740 = this;
return this$.watches = cljs.core.assoc.call(null,this__14740.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14742 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14742.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14743 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14743.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14745 = this;
return this__14745.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14746 = this;
return this__14746.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14747 = this;
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
var atom__14812 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14813 = (function() { 
var G__14816__delegate = function (x,p__14764){
var map__14766__14769 = p__14764;
var map__14766__14806 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14766__14769))?cljs.core.apply.call(null,cljs.core.hash_map,map__14766__14769):map__14766__14769);
var validator__14807 = cljs.core.get.call(null,map__14766__14806,"﷐'validator");
var meta__14808 = cljs.core.get.call(null,map__14766__14806,"﷐'meta");

return (new cljs.core.Atom(x,meta__14808,validator__14807,null));
};
var G__14816 = function (x,var_args){
var p__14764 = null;
if (goog.isDef(var_args)) {
  p__14764 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14816__delegate.call(this, x, p__14764);
};
G__14816.cljs$lang$maxFixedArity = 1;
G__14816.cljs$lang$applyTo = (function (arglist__14819){
var x = cljs.core.first(arglist__14819);
var p__14764 = cljs.core.rest(arglist__14819);
return G__14816__delegate.call(this, x, p__14764);
});
return G__14816;
})()
;
atom = function(x,var_args){
var p__14764 = var_args;
switch(arguments.length){
case  1 :
return atom__14812.call(this,x);
default:
return atom__14813.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14813.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14823 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14823))
{var validate__14824 = temp__3698__auto____14823;

if(cljs.core.truth_(validate__14824.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14827 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14827,new_value);
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
var swap_BANG___14839 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14840 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14841 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14842 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14844 = (function() { 
var G__14853__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14853 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14853__delegate.call(this, a, f, x, y, z, more);
};
G__14853.cljs$lang$maxFixedArity = 5;
G__14853.cljs$lang$applyTo = (function (arglist__14859){
var a = cljs.core.first(arglist__14859);
var f = cljs.core.first(cljs.core.next(arglist__14859));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14859)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14859))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14859)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14859)))));
return G__14853__delegate.call(this, a, f, x, y, z, more);
});
return G__14853;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14839.call(this,a,f);
case  3 :
return swap_BANG___14840.call(this,a,f,x);
case  4 :
return swap_BANG___14841.call(this,a,f,x,y);
case  5 :
return swap_BANG___14842.call(this,a,f,x,y,z);
default:
return swap_BANG___14844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14844.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14874){
var iref = cljs.core.first(arglist__14874);
var f = cljs.core.first(cljs.core.next(arglist__14874));
var args = cljs.core.rest(cljs.core.next(arglist__14874));
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
var gensym__14889 = (function (){
return gensym.call(null,"G__");
});
var gensym__14890 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14889.call(this);
case  1 :
return gensym__14890.call(this,prefix_string);
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
var this__14907 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14907.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14909 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14909.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14909.state,this__14909.f);
}
return cljs.core.deref.call(null,this__14909.state);
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
delay.cljs$lang$applyTo = (function (arglist__14915){
var body = cljs.core.seq( arglist__14915 );;
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
var map__14959__14960 = options;
var map__14959__14961 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14959__14960))?cljs.core.apply.call(null,cljs.core.hash_map,map__14959__14960):map__14959__14960);
var keywordize_keys__14963 = cljs.core.get.call(null,map__14959__14961,"﷐'keywordize-keys");
var keyfn__14965 = (cljs.core.truth_(keywordize_keys__14963)?cljs.core.keyword:cljs.core.str);
var f__14975 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14973 = (function iter__14966(s__14967){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14967__14968 = s__14967;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14967__14968)))
{var k__14969 = cljs.core.first.call(null,s__14967__14968);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14965.call(null,k__14969),thisfn.call(null,(x[k__14969]))]),iter__14966.call(null,cljs.core.rest.call(null,s__14967__14968)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14973.call(null,cljs.core.js_keys.call(null,x));
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

return f__14975.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14982){
var x = cljs.core.first(arglist__14982);
var options = cljs.core.rest(arglist__14982);
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
var mem__14984 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14993__delegate = function (args){
var temp__3695__auto____14987 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14984),args);

if(cljs.core.truth_(temp__3695__auto____14987))
{var v__14989 = temp__3695__auto____14987;

return v__14989;
} else
{var ret__14992 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14984,cljs.core.assoc,args,ret__14992);
return ret__14992;
}
};
var G__14993 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14993__delegate.call(this, args);
};
G__14993.cljs$lang$maxFixedArity = 0;
G__14993.cljs$lang$applyTo = (function (arglist__14998){
var args = cljs.core.seq( arglist__14998 );;
return G__14993__delegate.call(this, args);
});
return G__14993;
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
var trampoline__15041 = (function (f){
while(true){
var ret__14999 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14999)))
{{
var G__15044 = ret__14999;
f = G__15044;
continue;
}
} else
{return ret__14999;
}
break;
}
});
var trampoline__15042 = (function() { 
var G__15045__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15045 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15045__delegate.call(this, f, args);
};
G__15045.cljs$lang$maxFixedArity = 1;
G__15045.cljs$lang$applyTo = (function (arglist__15046){
var f = cljs.core.first(arglist__15046);
var args = cljs.core.rest(arglist__15046);
return G__15045__delegate.call(this, f, args);
});
return G__15045;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15041.call(this,f);
default:
return trampoline__15042.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15042.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15053 = (function (){
return rand.call(null,1);
});
var rand__15054 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15053.call(this);
case  1 :
return rand__15054.call(this,n);
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
var k__15059 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15059,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15059,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15088 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15091 = (function (h,child,parent){
var or__3548__auto____15074 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15074))
{return or__3548__auto____15074;
} else
{var or__3548__auto____15075 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15075))
{return or__3548__auto____15075;
} else
{var and__3546__auto____15076 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15076))
{var and__3546__auto____15077 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15077))
{var and__3546__auto____15078 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15078))
{var ret__15082 = true;
var i__15083 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15084 = cljs.core.not.call(null,ret__15082);

if(cljs.core.truth_(or__3548__auto____15084))
{return or__3548__auto____15084;
} else
{return cljs.core._EQ_.call(null,i__15083,cljs.core.count.call(null,parent));
}
})()))
{return ret__15082;
} else
{{
var G__15097 = isa_QMARK_.call(null,h,child.call(null,i__15083),parent.call(null,i__15083));
var G__15098 = (i__15083 + 1);
ret__15082 = G__15097;
i__15083 = G__15098;
continue;
}
}
break;
}
} else
{return and__3546__auto____15078;
}
} else
{return and__3546__auto____15077;
}
} else
{return and__3546__auto____15076;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15088.call(this,h,child);
case  3 :
return isa_QMARK___15091.call(this,h,child,parent);
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
var parents__15104 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15105 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15104.call(this,h);
case  2 :
return parents__15105.call(this,h,tag);
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
var ancestors__15116 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15117 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15116.call(this,h);
case  2 :
return ancestors__15117.call(this,h,tag);
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
var descendants__15125 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15126 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15125.call(this,h);
case  2 :
return descendants__15126.call(this,h,tag);
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
var derive__15149 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15150 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15135 = "﷐'parents".call(null,h);
var td__15136 = "﷐'descendants".call(null,h);
var ta__15137 = "﷐'ancestors".call(null,h);
var tf__15141 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15143 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15135.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15137.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15137.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15135,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15141.call(null,"﷐'ancestors".call(null,h),tag,td__15136,parent,ta__15137),"﷐'descendants":tf__15141.call(null,"﷐'descendants".call(null,h),parent,ta__15137,tag,td__15136)});
})());

if(cljs.core.truth_(or__3548__auto____15143))
{return or__3548__auto____15143;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15149.call(this,h,tag);
case  3 :
return derive__15150.call(this,h,tag,parent);
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
var underive__15242 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15243 = (function (h,tag,parent){
var parentMap__15171 = "﷐'parents".call(null,h);
var childsParents__15173 = (cljs.core.truth_(parentMap__15171.call(null,tag))?cljs.core.disj.call(null,parentMap__15171.call(null,tag),parent):cljs.core.set([]));
var newParents__15175 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15173))?cljs.core.assoc.call(null,parentMap__15171,tag,childsParents__15173):cljs.core.dissoc.call(null,parentMap__15171,tag));
var deriv_seq__15239 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15129_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15129_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15129_SHARP_),cljs.core.second.call(null,p1__15129_SHARP_)));
}),cljs.core.seq.call(null,newParents__15175)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15171.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15130_SHARP_,p2__15131_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15130_SHARP_,p2__15131_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15239));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15242.call(this,h,tag);
case  3 :
return underive__15243.call(this,h,tag,parent);
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
var xprefs__15259 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15261 = (cljs.core.truth_((function (){var and__3546__auto____15260 = xprefs__15259;

if(cljs.core.truth_(and__3546__auto____15260))
{return xprefs__15259.call(null,y);
} else
{return and__3546__auto____15260;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15261))
{return or__3548__auto____15261;
} else
{var or__3548__auto____15266 = (function (){var ps__15265 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15265) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15265),prefer_table)))
{} else
{}
{
var G__15269 = cljs.core.rest.call(null,ps__15265);
ps__15265 = G__15269;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15266))
{return or__3548__auto____15266;
} else
{var or__3548__auto____15268 = (function (){var ps__15267 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15267) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15267),y,prefer_table)))
{} else
{}
{
var G__15270 = cljs.core.rest.call(null,ps__15267);
ps__15267 = G__15270;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15268))
{return or__3548__auto____15268;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15274 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15274))
{return or__3548__auto____15274;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15295 = cljs.core.reduce.call(null,(function (be,p__15279){
var vec__15281__15282 = p__15279;
var k__15285 = cljs.core.nth.call(null,vec__15281__15282,0,null);
var ___15286 = cljs.core.nth.call(null,vec__15281__15282,1,null);
var e__15287 = vec__15281__15282;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15285)))
{var be2__15294 = (cljs.core.truth_((function (){var or__3548__auto____15291 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15291))
{return or__3548__auto____15291;
} else
{return cljs.core.dominates.call(null,k__15285,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15287:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15294),k__15285,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15285," and ",cljs.core.first.call(null,be2__15294),", and neither is preferred")));
}
return be2__15294;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15295))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15295));
return cljs.core.second.call(null,best_entry__15295);
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
if(cljs.core.truth_((function (){var and__3546__auto____15308 = mf;

if(cljs.core.truth_(and__3546__auto____15308))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15308;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15310 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15310))
{return or__3548__auto____15310;
} else
{var or__3548__auto____15312 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15312))
{return or__3548__auto____15312;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15319 = mf;

if(cljs.core.truth_(and__3546__auto____15319))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15319;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15320 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15320))
{return or__3548__auto____15320;
} else
{var or__3548__auto____15321 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15321))
{return or__3548__auto____15321;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15330 = mf;

if(cljs.core.truth_(and__3546__auto____15330))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15330;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15332 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15332))
{return or__3548__auto____15332;
} else
{var or__3548__auto____15334 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15334))
{return or__3548__auto____15334;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15342 = mf;

if(cljs.core.truth_(and__3546__auto____15342))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15342;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15344 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15344))
{return or__3548__auto____15344;
} else
{var or__3548__auto____15345 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15345))
{return or__3548__auto____15345;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15350 = mf;

if(cljs.core.truth_(and__3546__auto____15350))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15350;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15352 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15352))
{return or__3548__auto____15352;
} else
{var or__3548__auto____15353 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15353))
{return or__3548__auto____15353;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15456 = mf;

if(cljs.core.truth_(and__3546__auto____15456))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15456;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15458 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15458))
{return or__3548__auto____15458;
} else
{var or__3548__auto____15459 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15459))
{return or__3548__auto____15459;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15466 = mf;

if(cljs.core.truth_(and__3546__auto____15466))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15466;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15469 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15469))
{return or__3548__auto____15469;
} else
{var or__3548__auto____15470 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15470))
{return or__3548__auto____15470;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15472 = mf;

if(cljs.core.truth_(and__3546__auto____15472))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15472;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15473 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15473))
{return or__3548__auto____15473;
} else
{var or__3548__auto____15477 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15477))
{return or__3548__auto____15477;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15525 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15526 = cljs.core._get_method.call(null,mf,dispatch_val__15525);

if(cljs.core.truth_(target_fn__15526))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15525)));
}
return cljs.core.apply.call(null,target_fn__15526,args);
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
var this__15534 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15535 = this;
cljs.core.swap_BANG_.call(null,this__15535.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15535.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15535.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15535.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15539 = this;
cljs.core.swap_BANG_.call(null,this__15539.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15539.method_cache,this__15539.method_table,this__15539.cached_hierarchy,this__15539.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15542 = this;
cljs.core.swap_BANG_.call(null,this__15542.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15542.method_cache,this__15542.method_table,this__15542.cached_hierarchy,this__15542.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15545 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15545.cached_hierarchy),cljs.core.deref.call(null,this__15545.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15545.method_cache,this__15545.method_table,this__15545.cached_hierarchy,this__15545.hierarchy);
}
var temp__3695__auto____15546 = cljs.core.deref.call(null,this__15545.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15546))
{var target_fn__15547 = temp__3695__auto____15546;

return target_fn__15547;
} else
{var temp__3695__auto____15548 = cljs.core.find_and_cache_best_method.call(null,this__15545.name,dispatch_val,this__15545.hierarchy,this__15545.method_table,this__15545.prefer_table,this__15545.method_cache,this__15545.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15548))
{var target_fn__15550 = temp__3695__auto____15548;

return target_fn__15550;
} else
{return cljs.core.deref.call(null,this__15545.method_table).call(null,this__15545.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15552 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15552.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15552.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15552.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15552.method_cache,this__15552.method_table,this__15552.cached_hierarchy,this__15552.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15553 = this;
return cljs.core.deref.call(null,this__15553.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15554 = this;
return cljs.core.deref.call(null,this__15554.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15555 = this;
return cljs.core.do_dispatch.call(null,mf,this__15555.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15556__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15556 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15556__delegate.call(this, _, args);
};
G__15556.cljs$lang$maxFixedArity = 1;
G__15556.cljs$lang$applyTo = (function (arglist__15557){
var _ = cljs.core.first(arglist__15557);
var args = cljs.core.rest(arglist__15557);
return G__15556__delegate.call(this, _, args);
});
return G__15556;
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
