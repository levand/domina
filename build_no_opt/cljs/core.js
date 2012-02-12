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
var or__3548__auto____7310 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7310))
{return or__3548__auto____7310;
} else
{var or__3548__auto____7311 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7311))
{return or__3548__auto____7311;
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
var _invoke__7608 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7360 = this$;

if(cljs.core.truth_(and__3546__auto____7360))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7360;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7362 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7362))
{return or__3548__auto____7362;
} else
{var or__3548__auto____7363 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7363))
{return or__3548__auto____7363;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7609 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7365 = this$;

if(cljs.core.truth_(and__3546__auto____7365))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7365;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7367 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7367))
{return or__3548__auto____7367;
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
var _invoke__7610 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7371 = this$;

if(cljs.core.truth_(and__3546__auto____7371))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7371;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7373 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7373))
{return or__3548__auto____7373;
} else
{var or__3548__auto____7375 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7375))
{return or__3548__auto____7375;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7611 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7377 = this$;

if(cljs.core.truth_(and__3546__auto____7377))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7377;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7379 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7379))
{return or__3548__auto____7379;
} else
{var or__3548__auto____7381 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7381))
{return or__3548__auto____7381;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7612 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7384 = this$;

if(cljs.core.truth_(and__3546__auto____7384))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7384;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7386 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7386))
{return or__3548__auto____7386;
} else
{var or__3548__auto____7388 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7388))
{return or__3548__auto____7388;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7613 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7391 = this$;

if(cljs.core.truth_(and__3546__auto____7391))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7391;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7393 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7393))
{return or__3548__auto____7393;
} else
{var or__3548__auto____7395 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7395))
{return or__3548__auto____7395;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7614 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7397 = this$;

if(cljs.core.truth_(and__3546__auto____7397))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7397;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7400 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7400))
{return or__3548__auto____7400;
} else
{var or__3548__auto____7401 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7401))
{return or__3548__auto____7401;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7615 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7405 = this$;

if(cljs.core.truth_(and__3546__auto____7405))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7405;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7407 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7407))
{return or__3548__auto____7407;
} else
{var or__3548__auto____7410 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7410))
{return or__3548__auto____7410;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7616 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7414 = this$;

if(cljs.core.truth_(and__3546__auto____7414))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7414;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7416 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7416))
{return or__3548__auto____7416;
} else
{var or__3548__auto____7418 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7418))
{return or__3548__auto____7418;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7617 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7420 = this$;

if(cljs.core.truth_(and__3546__auto____7420))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7420;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7422 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7422))
{return or__3548__auto____7422;
} else
{var or__3548__auto____7424 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7424))
{return or__3548__auto____7424;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7618 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7482 = this$;

if(cljs.core.truth_(and__3546__auto____7482))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7482;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7484 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7484))
{return or__3548__auto____7484;
} else
{var or__3548__auto____7485 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7485))
{return or__3548__auto____7485;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7619 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7486 = this$;

if(cljs.core.truth_(and__3546__auto____7486))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7486;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7488 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7488))
{return or__3548__auto____7488;
} else
{var or__3548__auto____7490 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7490))
{return or__3548__auto____7490;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7620 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7492 = this$;

if(cljs.core.truth_(and__3546__auto____7492))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7492;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7494 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7494))
{return or__3548__auto____7494;
} else
{var or__3548__auto____7496 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7496))
{return or__3548__auto____7496;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7621 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7497 = this$;

if(cljs.core.truth_(and__3546__auto____7497))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7497;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7498 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7498))
{return or__3548__auto____7498;
} else
{var or__3548__auto____7499 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7499))
{return or__3548__auto____7499;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7622 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7500 = this$;

if(cljs.core.truth_(and__3546__auto____7500))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7500;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7501 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7501))
{return or__3548__auto____7501;
} else
{var or__3548__auto____7502 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7502))
{return or__3548__auto____7502;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7623 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7525 = this$;

if(cljs.core.truth_(and__3546__auto____7525))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7525;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7526 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7526))
{return or__3548__auto____7526;
} else
{var or__3548__auto____7527 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7527))
{return or__3548__auto____7527;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7624 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7528 = this$;

if(cljs.core.truth_(and__3546__auto____7528))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7528;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7529 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7529))
{return or__3548__auto____7529;
} else
{var or__3548__auto____7530 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7530))
{return or__3548__auto____7530;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7625 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7531 = this$;

if(cljs.core.truth_(and__3546__auto____7531))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7531;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7532 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7532))
{return or__3548__auto____7532;
} else
{var or__3548__auto____7533 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7533))
{return or__3548__auto____7533;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7626 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7534 = this$;

if(cljs.core.truth_(and__3546__auto____7534))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7534;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7535 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7535))
{return or__3548__auto____7535;
} else
{var or__3548__auto____7536 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7536))
{return or__3548__auto____7536;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7627 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7537 = this$;

if(cljs.core.truth_(and__3546__auto____7537))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7537;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7593 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7593))
{return or__3548__auto____7593;
} else
{var or__3548__auto____7595 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7595))
{return or__3548__auto____7595;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7628 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7598 = this$;

if(cljs.core.truth_(and__3546__auto____7598))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7598;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7601 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7601))
{return or__3548__auto____7601;
} else
{var or__3548__auto____7602 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7602))
{return or__3548__auto____7602;
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
return _invoke__7608.call(this,this$);
case  2 :
return _invoke__7609.call(this,this$,a);
case  3 :
return _invoke__7610.call(this,this$,a,b);
case  4 :
return _invoke__7611.call(this,this$,a,b,c);
case  5 :
return _invoke__7612.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7613.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7614.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7615.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7616.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7617.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7618.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7619.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7620.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7621.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7622.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7623.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7624.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7625.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7626.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7627.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7628.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7773 = coll;

if(cljs.core.truth_(and__3546__auto____7773))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7773;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7776 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7776))
{return or__3548__auto____7776;
} else
{var or__3548__auto____7777 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7777))
{return or__3548__auto____7777;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7783 = coll;

if(cljs.core.truth_(and__3546__auto____7783))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7783;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7785 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7785))
{return or__3548__auto____7785;
} else
{var or__3548__auto____7786 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7786))
{return or__3548__auto____7786;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7792 = coll;

if(cljs.core.truth_(and__3546__auto____7792))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7792;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7794 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7794))
{return or__3548__auto____7794;
} else
{var or__3548__auto____7795 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7795))
{return or__3548__auto____7795;
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
var _nth__7812 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7802 = coll;

if(cljs.core.truth_(and__3546__auto____7802))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7802;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7803 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7803))
{return or__3548__auto____7803;
} else
{var or__3548__auto____7804 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7813 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7806 = coll;

if(cljs.core.truth_(and__3546__auto____7806))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7806;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7808 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7808))
{return or__3548__auto____7808;
} else
{var or__3548__auto____7810 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7810))
{return or__3548__auto____7810;
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
return _nth__7812.call(this,coll,n);
case  3 :
return _nth__7813.call(this,coll,n,not_found);
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
{return (function (){var or__3548__auto____7826 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7826))
{return or__3548__auto____7826;
} else
{var or__3548__auto____7828 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7828))
{return or__3548__auto____7828;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7830 = coll;

if(cljs.core.truth_(and__3546__auto____7830))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7830;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7832 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7832))
{return or__3548__auto____7832;
} else
{var or__3548__auto____7834 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7834))
{return or__3548__auto____7834;
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
var _lookup__7850 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7841 = o;

if(cljs.core.truth_(and__3546__auto____7841))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7841;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7842 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7842))
{return or__3548__auto____7842;
} else
{var or__3548__auto____7843 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7843))
{return or__3548__auto____7843;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7851 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7844 = o;

if(cljs.core.truth_(and__3546__auto____7844))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7844;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7846 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7846))
{return or__3548__auto____7846;
} else
{var or__3548__auto____7847 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7847))
{return or__3548__auto____7847;
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
return _lookup__7850.call(this,o,k);
case  3 :
return _lookup__7851.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7853 = coll;

if(cljs.core.truth_(and__3546__auto____7853))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7853;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7855 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7855))
{return or__3548__auto____7855;
} else
{var or__3548__auto____7857 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7857))
{return or__3548__auto____7857;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7859 = coll;

if(cljs.core.truth_(and__3546__auto____7859))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7859;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7860 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{var or__3548__auto____7861 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7861))
{return or__3548__auto____7861;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7865 = coll;

if(cljs.core.truth_(and__3546__auto____7865))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7865;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7867 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7867))
{return or__3548__auto____7867;
} else
{var or__3548__auto____7868 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7868))
{return or__3548__auto____7868;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7877 = coll;

if(cljs.core.truth_(and__3546__auto____7877))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7877;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7878 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7878))
{return or__3548__auto____7878;
} else
{var or__3548__auto____7879 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7879))
{return or__3548__auto____7879;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7898 = coll;

if(cljs.core.truth_(and__3546__auto____7898))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7898;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7899 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7899))
{return or__3548__auto____7899;
} else
{var or__3548__auto____7900 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7900))
{return or__3548__auto____7900;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7901 = coll;

if(cljs.core.truth_(and__3546__auto____7901))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7901;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7902 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7902))
{return or__3548__auto____7902;
} else
{var or__3548__auto____7903 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7903))
{return or__3548__auto____7903;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7947 = coll;

if(cljs.core.truth_(and__3546__auto____7947))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7947;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7949 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7949))
{return or__3548__auto____7949;
} else
{var or__3548__auto____7950 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7950))
{return or__3548__auto____7950;
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
if(cljs.core.truth_((function (){var and__3546__auto____7972 = o;

if(cljs.core.truth_(and__3546__auto____7972))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7972;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7974 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7974))
{return or__3548__auto____7974;
} else
{var or__3548__auto____7976 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7976))
{return or__3548__auto____7976;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7983 = o;

if(cljs.core.truth_(and__3546__auto____7983))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7983;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7984 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7984))
{return or__3548__auto____7984;
} else
{var or__3548__auto____7985 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7985))
{return or__3548__auto____7985;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8011 = o;

if(cljs.core.truth_(and__3546__auto____8011))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8011;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8014 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8014))
{return or__3548__auto____8014;
} else
{var or__3548__auto____8015 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8015))
{return or__3548__auto____8015;
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
var _reduce__8034 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8022 = coll;

if(cljs.core.truth_(and__3546__auto____8022))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8022;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8023 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8023))
{return or__3548__auto____8023;
} else
{var or__3548__auto____8029 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8029))
{return or__3548__auto____8029;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8035 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8031 = coll;

if(cljs.core.truth_(and__3546__auto____8031))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8031;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8032 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8032))
{return or__3548__auto____8032;
} else
{var or__3548__auto____8033 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8033))
{return or__3548__auto____8033;
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
return _reduce__8034.call(this,coll,f);
case  3 :
return _reduce__8035.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8076 = o;

if(cljs.core.truth_(and__3546__auto____8076))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8076;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8078 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8078))
{return or__3548__auto____8078;
} else
{var or__3548__auto____8080 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8080))
{return or__3548__auto____8080;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8088 = o;

if(cljs.core.truth_(and__3546__auto____8088))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8088;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8089 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8089))
{return or__3548__auto____8089;
} else
{var or__3548__auto____8091 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8091))
{return or__3548__auto____8091;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8094 = o;

if(cljs.core.truth_(and__3546__auto____8094))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8094;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8096 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8096))
{return or__3548__auto____8096;
} else
{var or__3548__auto____8099 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8099))
{return or__3548__auto____8099;
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
if(cljs.core.truth_((function (){var and__3546__auto____8128 = o;

if(cljs.core.truth_(and__3546__auto____8128))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8128;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8133 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8133))
{return or__3548__auto____8133;
} else
{var or__3548__auto____8134 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8134))
{return or__3548__auto____8134;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8142 = d;

if(cljs.core.truth_(and__3546__auto____8142))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8142;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8145 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8145))
{return or__3548__auto____8145;
} else
{var or__3548__auto____8147 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8147))
{return or__3548__auto____8147;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8187 = this$;

if(cljs.core.truth_(and__3546__auto____8187))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8187;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8188 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8188))
{return or__3548__auto____8188;
} else
{var or__3548__auto____8189 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8189))
{return or__3548__auto____8189;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8195 = this$;

if(cljs.core.truth_(and__3546__auto____8195))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8195;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8198 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8198))
{return or__3548__auto____8198;
} else
{var or__3548__auto____8199 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8199))
{return or__3548__auto____8199;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8203 = this$;

if(cljs.core.truth_(and__3546__auto____8203))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8203;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8204 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8204))
{return or__3548__auto____8204;
} else
{var or__3548__auto____8206 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8206))
{return or__3548__auto____8206;
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
var G__8233 = null;
var G__8233__8234 = (function (o,k){
return null;
});
var G__8233__8235 = (function (o,k,not_found){
return not_found;
});
G__8233 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8233__8234.call(this,o,k);
case  3 :
return G__8233__8235.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8233;
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
var G__8268 = null;
var G__8268__8269 = (function (_,n){
return null;
});
var G__8268__8270 = (function (_,n,not_found){
return not_found;
});
G__8268 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8268__8269.call(this,_,n);
case  3 :
return G__8268__8270.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8268;
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
var ci_reduce__8396 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8339 = cljs.core._nth.call(null,cicoll,0);
var n__8341 = 1;

while(true){
if(cljs.core.truth_((n__8341 < cljs.core._count.call(null,cicoll))))
{{
var G__8400 = f.call(null,val__8339,cljs.core._nth.call(null,cicoll,n__8341));
var G__8401 = (n__8341 + 1);
val__8339 = G__8400;
n__8341 = G__8401;
continue;
}
} else
{return val__8339;
}
break;
}
}
});
var ci_reduce__8397 = (function (cicoll,f,val){
var val__8346 = val;
var n__8347 = 0;

while(true){
if(cljs.core.truth_((n__8347 < cljs.core._count.call(null,cicoll))))
{{
var G__8402 = f.call(null,val__8346,cljs.core._nth.call(null,cicoll,n__8347));
var G__8403 = (n__8347 + 1);
val__8346 = G__8402;
n__8347 = G__8403;
continue;
}
} else
{return val__8346;
}
break;
}
});
var ci_reduce__8398 = (function (cicoll,f,val,idx){
var val__8348 = val;
var n__8349 = idx;

while(true){
if(cljs.core.truth_((n__8349 < cljs.core._count.call(null,cicoll))))
{{
var G__8408 = f.call(null,val__8348,cljs.core._nth.call(null,cicoll,n__8349));
var G__8409 = (n__8349 + 1);
val__8348 = G__8408;
n__8349 = G__8409;
continue;
}
} else
{return val__8348;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8396.call(this,cicoll,f);
case  3 :
return ci_reduce__8397.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8398.call(this,cicoll,f,val,idx);
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
var this__8420 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8444 = null;
var G__8444__8445 = (function (_,f){
var this__8421 = this;
return cljs.core.ci_reduce.call(null,this__8421.a,f,(this__8421.a[this__8421.i]),(this__8421.i + 1));
});
var G__8444__8446 = (function (_,f,start){
var this__8422 = this;
return cljs.core.ci_reduce.call(null,this__8422.a,f,start,this__8422.i);
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
var this__8427 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8428 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8453 = null;
var G__8453__8454 = (function (coll,n){
var this__8431 = this;
var i__8432 = (n + this__8431.i);

if(cljs.core.truth_((i__8432 < this__8431.a.length)))
{return (this__8431.a[i__8432]);
} else
{return null;
}
});
var G__8453__8455 = (function (coll,n,not_found){
var this__8435 = this;
var i__8436 = (n + this__8435.i);

if(cljs.core.truth_((i__8436 < this__8435.a.length)))
{return (this__8435.a[i__8436]);
} else
{return not_found;
}
});
G__8453 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8453__8454.call(this,coll,n);
case  3 :
return G__8453__8455.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8453;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8439 = this;
return (this__8439.a.length - this__8439.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8440 = this;
return (this__8440.a[this__8440.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8441 = this;
if(cljs.core.truth_(((this__8441.i + 1) < this__8441.a.length)))
{return (new cljs.core.IndexedSeq(this__8441.a,(this__8441.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8442 = this;
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
var G__8486 = null;
var G__8486__8487 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8486__8488 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8486 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8486__8487.call(this,array,f);
case  3 :
return G__8486__8488.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8486;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8490 = null;
var G__8490__8491 = (function (array,k){
return (array[k]);
});
var G__8490__8492 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8490 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8490__8491.call(this,array,k);
case  3 :
return G__8490__8492.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8490;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8494 = null;
var G__8494__8495 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8494__8496 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8494 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8494__8495.call(this,array,n);
case  3 :
return G__8494__8496.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8494;
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
var temp__3698__auto____8511 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8511))
{var s__8512 = temp__3698__auto____8511;

return cljs.core._first.call(null,s__8512);
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
var G__8551 = cljs.core.next.call(null,s);
s = G__8551;
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
var s__8552 = cljs.core.seq.call(null,x);
var n__8553 = 0;

while(true){
if(cljs.core.truth_(s__8552))
{{
var G__8554 = cljs.core.next.call(null,s__8552);
var G__8555 = (n__8553 + 1);
s__8552 = G__8554;
n__8553 = G__8555;
continue;
}
} else
{return n__8553;
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
var conj__8556 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8557 = (function() { 
var G__8559__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8560 = conj.call(null,coll,x);
var G__8561 = cljs.core.first.call(null,xs);
var G__8562 = cljs.core.next.call(null,xs);
coll = G__8560;
x = G__8561;
xs = G__8562;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8559 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8559__delegate.call(this, coll, x, xs);
};
G__8559.cljs$lang$maxFixedArity = 2;
G__8559.cljs$lang$applyTo = (function (arglist__8563){
var coll = cljs.core.first(arglist__8563);
var x = cljs.core.first(cljs.core.next(arglist__8563));
var xs = cljs.core.rest(cljs.core.next(arglist__8563));
return G__8559__delegate.call(this, coll, x, xs);
});
return G__8559;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8556.call(this,coll,x);
default:
return conj__8557.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8557.cljs$lang$applyTo;
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
var nth__8565 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8566 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8565.call(this,coll,n);
case  3 :
return nth__8566.call(this,coll,n,not_found);
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
var get__8576 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8577 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8576.call(this,o,k);
case  3 :
return get__8577.call(this,o,k,not_found);
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
var assoc__8587 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8588 = (function() { 
var G__8590__delegate = function (coll,k,v,kvs){
while(true){
var ret__8583 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8591 = ret__8583;
var G__8592 = cljs.core.first.call(null,kvs);
var G__8593 = cljs.core.second.call(null,kvs);
var G__8594 = cljs.core.nnext.call(null,kvs);
coll = G__8591;
k = G__8592;
v = G__8593;
kvs = G__8594;
continue;
}
} else
{return ret__8583;
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
G__8590.cljs$lang$applyTo = (function (arglist__8595){
var coll = cljs.core.first(arglist__8595);
var k = cljs.core.first(cljs.core.next(arglist__8595));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8595)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8595)));
return G__8590__delegate.call(this, coll, k, v, kvs);
});
return G__8590;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8587.call(this,coll,k,v);
default:
return assoc__8588.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8588.cljs$lang$applyTo;
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
var dissoc__8602 = (function (coll){
return coll;
});
var dissoc__8603 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8604 = (function() { 
var G__8606__delegate = function (coll,k,ks){
while(true){
var ret__8601 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8607 = ret__8601;
var G__8608 = cljs.core.first.call(null,ks);
var G__8609 = cljs.core.next.call(null,ks);
coll = G__8607;
k = G__8608;
ks = G__8609;
continue;
}
} else
{return ret__8601;
}
break;
}
};
var G__8606 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8606__delegate.call(this, coll, k, ks);
};
G__8606.cljs$lang$maxFixedArity = 2;
G__8606.cljs$lang$applyTo = (function (arglist__8611){
var coll = cljs.core.first(arglist__8611);
var k = cljs.core.first(cljs.core.next(arglist__8611));
var ks = cljs.core.rest(cljs.core.next(arglist__8611));
return G__8606__delegate.call(this, coll, k, ks);
});
return G__8606;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8602.call(this,coll);
case  2 :
return dissoc__8603.call(this,coll,k);
default:
return dissoc__8604.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8604.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8616 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8621 = x__445__auto____8616;

if(cljs.core.truth_(and__3546__auto____8621))
{var and__3546__auto____8622 = x__445__auto____8616.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8622))
{return cljs.core.not.call(null,x__445__auto____8616.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8622;
}
} else
{return and__3546__auto____8621;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8616);
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
var disj__8653 = (function (coll){
return coll;
});
var disj__8654 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8655 = (function() { 
var G__8657__delegate = function (coll,k,ks){
while(true){
var ret__8647 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8658 = ret__8647;
var G__8659 = cljs.core.first.call(null,ks);
var G__8660 = cljs.core.next.call(null,ks);
coll = G__8658;
k = G__8659;
ks = G__8660;
continue;
}
} else
{return ret__8647;
}
break;
}
};
var G__8657 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8657__delegate.call(this, coll, k, ks);
};
G__8657.cljs$lang$maxFixedArity = 2;
G__8657.cljs$lang$applyTo = (function (arglist__8664){
var coll = cljs.core.first(arglist__8664);
var k = cljs.core.first(cljs.core.next(arglist__8664));
var ks = cljs.core.rest(cljs.core.next(arglist__8664));
return G__8657__delegate.call(this, coll, k, ks);
});
return G__8657;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8653.call(this,coll);
case  2 :
return disj__8654.call(this,coll,k);
default:
return disj__8655.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8655.cljs$lang$applyTo;
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
{var x__445__auto____8676 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8677 = x__445__auto____8676;

if(cljs.core.truth_(and__3546__auto____8677))
{var and__3546__auto____8678 = x__445__auto____8676.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8678))
{return cljs.core.not.call(null,x__445__auto____8676.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8678;
}
} else
{return and__3546__auto____8677;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8676);
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
{var x__445__auto____8691 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8692 = x__445__auto____8691;

if(cljs.core.truth_(and__3546__auto____8692))
{var and__3546__auto____8693 = x__445__auto____8691.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8693))
{return cljs.core.not.call(null,x__445__auto____8691.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8693;
}
} else
{return and__3546__auto____8692;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8691);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8701 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8702 = x__445__auto____8701;

if(cljs.core.truth_(and__3546__auto____8702))
{var and__3546__auto____8703 = x__445__auto____8701.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8703))
{return cljs.core.not.call(null,x__445__auto____8701.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8703;
}
} else
{return and__3546__auto____8702;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8701);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8717 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8718 = x__445__auto____8717;

if(cljs.core.truth_(and__3546__auto____8718))
{var and__3546__auto____8719 = x__445__auto____8717.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8719))
{return cljs.core.not.call(null,x__445__auto____8717.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8719;
}
} else
{return and__3546__auto____8718;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8717);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8732 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8733 = x__445__auto____8732;

if(cljs.core.truth_(and__3546__auto____8733))
{var and__3546__auto____8734 = x__445__auto____8732.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8734))
{return cljs.core.not.call(null,x__445__auto____8732.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8734;
}
} else
{return and__3546__auto____8733;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8732);
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

if(cljs.core.truth_((function (){var and__3546__auto____8765 = x__445__auto____8763;

if(cljs.core.truth_(and__3546__auto____8765))
{var and__3546__auto____8767 = x__445__auto____8763.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8767))
{return cljs.core.not.call(null,x__445__auto____8763.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8767;
}
} else
{return and__3546__auto____8765;
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
var x__445__auto____8810 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8812 = x__445__auto____8810;

if(cljs.core.truth_(and__3546__auto____8812))
{var and__3546__auto____8813 = x__445__auto____8810.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8813))
{return cljs.core.not.call(null,x__445__auto____8810.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8813;
}
} else
{return and__3546__auto____8812;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8810);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8869 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8869.push(key);
}));
return keys__8869;
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
{var x__445__auto____8880 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8883 = x__445__auto____8880;

if(cljs.core.truth_(and__3546__auto____8883))
{var and__3546__auto____8885 = x__445__auto____8880.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8885))
{return cljs.core.not.call(null,x__445__auto____8880.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8885;
}
} else
{return and__3546__auto____8883;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8880);
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
var and__3546__auto____8891 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8891))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8894 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8894))
{return or__3548__auto____8894;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8891;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8895 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8895))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8895;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8899 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8899))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8899;
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
var and__3546__auto____8901 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8901))
{return (n == n.toFixed());
} else
{return and__3546__auto____8901;
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
if(cljs.core.truth_((function (){var and__3546__auto____8917 = coll;

if(cljs.core.truth_(and__3546__auto____8917))
{var and__3546__auto____8918 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8918))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8918;
}
} else
{return and__3546__auto____8917;
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
var distinct_QMARK___8963 = (function (x){
return true;
});
var distinct_QMARK___8964 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8965 = (function() { 
var G__8967__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8953 = cljs.core.set([y,x]);
var xs__8954 = more;

while(true){
var x__8957 = cljs.core.first.call(null,xs__8954);
var etc__8958 = cljs.core.next.call(null,xs__8954);

if(cljs.core.truth_(xs__8954))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8953,x__8957)))
{return false;
} else
{{
var G__8969 = cljs.core.conj.call(null,s__8953,x__8957);
var G__8970 = etc__8958;
s__8953 = G__8969;
xs__8954 = G__8970;
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
var G__8967 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8967__delegate.call(this, x, y, more);
};
G__8967.cljs$lang$maxFixedArity = 2;
G__8967.cljs$lang$applyTo = (function (arglist__8972){
var x = cljs.core.first(arglist__8972);
var y = cljs.core.first(cljs.core.next(arglist__8972));
var more = cljs.core.rest(cljs.core.next(arglist__8972));
return G__8967__delegate.call(this, x, y, more);
});
return G__8967;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8963.call(this,x);
case  2 :
return distinct_QMARK___8964.call(this,x,y);
default:
return distinct_QMARK___8965.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8965.cljs$lang$applyTo;
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
var r__8981 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8981)))
{return r__8981;
} else
{if(cljs.core.truth_(r__8981))
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
var sort__8992 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8993 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8991 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8991,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8991);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8992.call(this,comp);
case  2 :
return sort__8993.call(this,comp,coll);
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
var sort_by__8997 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8998 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8997.call(this,keyfn,comp);
case  3 :
return sort_by__8998.call(this,keyfn,comp,coll);
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
var reduce__9004 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9005 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9004.call(this,f,val);
case  3 :
return reduce__9005.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9014 = (function (f,coll){
var temp__3695__auto____9007 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9007))
{var s__9008 = temp__3695__auto____9007;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9008),cljs.core.next.call(null,s__9008));
} else
{return f.call(null);
}
});
var seq_reduce__9015 = (function (f,val,coll){
var val__9010 = val;
var coll__9013 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9013))
{{
var G__9017 = f.call(null,val__9010,cljs.core.first.call(null,coll__9013));
var G__9018 = cljs.core.next.call(null,coll__9013);
val__9010 = G__9017;
coll__9013 = G__9018;
continue;
}
} else
{return val__9010;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9014.call(this,f,val);
case  3 :
return seq_reduce__9015.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9065 = null;
var G__9065__9066 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9065__9067 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9065 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9065__9066.call(this,coll,f);
case  3 :
return G__9065__9067.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9065;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9076 = (function (){
return 0;
});
var _PLUS___9077 = (function (x){
return x;
});
var _PLUS___9078 = (function (x,y){
return (x + y);
});
var _PLUS___9080 = (function() { 
var G__9087__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9087 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9087__delegate.call(this, x, y, more);
};
G__9087.cljs$lang$maxFixedArity = 2;
G__9087.cljs$lang$applyTo = (function (arglist__9088){
var x = cljs.core.first(arglist__9088);
var y = cljs.core.first(cljs.core.next(arglist__9088));
var more = cljs.core.rest(cljs.core.next(arglist__9088));
return G__9087__delegate.call(this, x, y, more);
});
return G__9087;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9076.call(this);
case  1 :
return _PLUS___9077.call(this,x);
case  2 :
return _PLUS___9078.call(this,x,y);
default:
return _PLUS___9080.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9080.cljs$lang$applyTo;
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
var ___9099 = (function (x){
return (- x);
});
var ___9100 = (function (x,y){
return (x - y);
});
var ___9101 = (function() { 
var G__9104__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9104 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9104__delegate.call(this, x, y, more);
};
G__9104.cljs$lang$maxFixedArity = 2;
G__9104.cljs$lang$applyTo = (function (arglist__9105){
var x = cljs.core.first(arglist__9105);
var y = cljs.core.first(cljs.core.next(arglist__9105));
var more = cljs.core.rest(cljs.core.next(arglist__9105));
return G__9104__delegate.call(this, x, y, more);
});
return G__9104;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9099.call(this,x);
case  2 :
return ___9100.call(this,x,y);
default:
return ___9101.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9101.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9122 = (function (){
return 1;
});
var _STAR___9123 = (function (x){
return x;
});
var _STAR___9124 = (function (x,y){
return (x * y);
});
var _STAR___9125 = (function() { 
var G__9128__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9128 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9128__delegate.call(this, x, y, more);
};
G__9128.cljs$lang$maxFixedArity = 2;
G__9128.cljs$lang$applyTo = (function (arglist__9129){
var x = cljs.core.first(arglist__9129);
var y = cljs.core.first(cljs.core.next(arglist__9129));
var more = cljs.core.rest(cljs.core.next(arglist__9129));
return G__9128__delegate.call(this, x, y, more);
});
return G__9128;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9122.call(this);
case  1 :
return _STAR___9123.call(this,x);
case  2 :
return _STAR___9124.call(this,x,y);
default:
return _STAR___9125.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9125.cljs$lang$applyTo;
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
var _SLASH___9137 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9138 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9139 = (function() { 
var G__9142__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9142 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9142__delegate.call(this, x, y, more);
};
G__9142.cljs$lang$maxFixedArity = 2;
G__9142.cljs$lang$applyTo = (function (arglist__9143){
var x = cljs.core.first(arglist__9143);
var y = cljs.core.first(cljs.core.next(arglist__9143));
var more = cljs.core.rest(cljs.core.next(arglist__9143));
return G__9142__delegate.call(this, x, y, more);
});
return G__9142;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9137.call(this,x);
case  2 :
return _SLASH___9138.call(this,x,y);
default:
return _SLASH___9139.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9139.cljs$lang$applyTo;
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
var _LT___9153 = (function (x){
return true;
});
var _LT___9154 = (function (x,y){
return (x < y);
});
var _LT___9155 = (function() { 
var G__9158__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9159 = y;
var G__9160 = cljs.core.first.call(null,more);
var G__9161 = cljs.core.next.call(null,more);
x = G__9159;
y = G__9160;
more = G__9161;
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
var G__9158 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9158__delegate.call(this, x, y, more);
};
G__9158.cljs$lang$maxFixedArity = 2;
G__9158.cljs$lang$applyTo = (function (arglist__9162){
var x = cljs.core.first(arglist__9162);
var y = cljs.core.first(cljs.core.next(arglist__9162));
var more = cljs.core.rest(cljs.core.next(arglist__9162));
return G__9158__delegate.call(this, x, y, more);
});
return G__9158;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9153.call(this,x);
case  2 :
return _LT___9154.call(this,x,y);
default:
return _LT___9155.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9155.cljs$lang$applyTo;
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
var _LT__EQ___9171 = (function (x){
return true;
});
var _LT__EQ___9172 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9173 = (function() { 
var G__9176__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9177 = y;
var G__9178 = cljs.core.first.call(null,more);
var G__9179 = cljs.core.next.call(null,more);
x = G__9177;
y = G__9178;
more = G__9179;
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
var G__9176 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9176__delegate.call(this, x, y, more);
};
G__9176.cljs$lang$maxFixedArity = 2;
G__9176.cljs$lang$applyTo = (function (arglist__9180){
var x = cljs.core.first(arglist__9180);
var y = cljs.core.first(cljs.core.next(arglist__9180));
var more = cljs.core.rest(cljs.core.next(arglist__9180));
return G__9176__delegate.call(this, x, y, more);
});
return G__9176;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9171.call(this,x);
case  2 :
return _LT__EQ___9172.call(this,x,y);
default:
return _LT__EQ___9173.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9173.cljs$lang$applyTo;
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
var _GT___9181 = (function (x){
return true;
});
var _GT___9182 = (function (x,y){
return (x > y);
});
var _GT___9183 = (function() { 
var G__9185__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9186 = y;
var G__9187 = cljs.core.first.call(null,more);
var G__9188 = cljs.core.next.call(null,more);
x = G__9186;
y = G__9187;
more = G__9188;
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
var G__9185 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9185__delegate.call(this, x, y, more);
};
G__9185.cljs$lang$maxFixedArity = 2;
G__9185.cljs$lang$applyTo = (function (arglist__9189){
var x = cljs.core.first(arglist__9189);
var y = cljs.core.first(cljs.core.next(arglist__9189));
var more = cljs.core.rest(cljs.core.next(arglist__9189));
return G__9185__delegate.call(this, x, y, more);
});
return G__9185;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9181.call(this,x);
case  2 :
return _GT___9182.call(this,x,y);
default:
return _GT___9183.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9183.cljs$lang$applyTo;
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
var _GT__EQ___9190 = (function (x){
return true;
});
var _GT__EQ___9193 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9195 = (function() { 
var G__9197__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9198 = y;
var G__9199 = cljs.core.first.call(null,more);
var G__9200 = cljs.core.next.call(null,more);
x = G__9198;
y = G__9199;
more = G__9200;
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
var G__9197 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9197__delegate.call(this, x, y, more);
};
G__9197.cljs$lang$maxFixedArity = 2;
G__9197.cljs$lang$applyTo = (function (arglist__9201){
var x = cljs.core.first(arglist__9201);
var y = cljs.core.first(cljs.core.next(arglist__9201));
var more = cljs.core.rest(cljs.core.next(arglist__9201));
return G__9197__delegate.call(this, x, y, more);
});
return G__9197;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9190.call(this,x);
case  2 :
return _GT__EQ___9193.call(this,x,y);
default:
return _GT__EQ___9195.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9195.cljs$lang$applyTo;
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
var max__9205 = (function (x){
return x;
});
var max__9206 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9207 = (function() { 
var G__9209__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9209 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9209__delegate.call(this, x, y, more);
};
G__9209.cljs$lang$maxFixedArity = 2;
G__9209.cljs$lang$applyTo = (function (arglist__9210){
var x = cljs.core.first(arglist__9210);
var y = cljs.core.first(cljs.core.next(arglist__9210));
var more = cljs.core.rest(cljs.core.next(arglist__9210));
return G__9209__delegate.call(this, x, y, more);
});
return G__9209;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9205.call(this,x);
case  2 :
return max__9206.call(this,x,y);
default:
return max__9207.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9207.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9215 = (function (x){
return x;
});
var min__9216 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9217 = (function() { 
var G__9221__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9221 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9221__delegate.call(this, x, y, more);
};
G__9221.cljs$lang$maxFixedArity = 2;
G__9221.cljs$lang$applyTo = (function (arglist__9225){
var x = cljs.core.first(arglist__9225);
var y = cljs.core.first(cljs.core.next(arglist__9225));
var more = cljs.core.rest(cljs.core.next(arglist__9225));
return G__9221__delegate.call(this, x, y, more);
});
return G__9221;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9215.call(this,x);
case  2 :
return min__9216.call(this,x,y);
default:
return min__9217.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9217.cljs$lang$applyTo;
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
var rem__9239 = (n % d);

return cljs.core.fix.call(null,((n - rem__9239) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9241 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9241));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9269 = (function (){
return Math.random.call(null);
});
var rand__9270 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9269.call(this);
case  1 :
return rand__9270.call(this,n);
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
var _EQ__EQ___9374 = (function (x){
return true;
});
var _EQ__EQ___9375 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9376 = (function() { 
var G__9379__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9383 = y;
var G__9384 = cljs.core.first.call(null,more);
var G__9385 = cljs.core.next.call(null,more);
x = G__9383;
y = G__9384;
more = G__9385;
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
var G__9379 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9379__delegate.call(this, x, y, more);
};
G__9379.cljs$lang$maxFixedArity = 2;
G__9379.cljs$lang$applyTo = (function (arglist__9387){
var x = cljs.core.first(arglist__9387);
var y = cljs.core.first(cljs.core.next(arglist__9387));
var more = cljs.core.rest(cljs.core.next(arglist__9387));
return G__9379__delegate.call(this, x, y, more);
});
return G__9379;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9374.call(this,x);
case  2 :
return _EQ__EQ___9375.call(this,x,y);
default:
return _EQ__EQ___9376.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9376.cljs$lang$applyTo;
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
var n__9427 = n;
var xs__9428 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9429 = xs__9428;

if(cljs.core.truth_(and__3546__auto____9429))
{return (n__9427 > 0);
} else
{return and__3546__auto____9429;
}
})()))
{{
var G__9439 = (n__9427 - 1);
var G__9440 = cljs.core.next.call(null,xs__9428);
n__9427 = G__9439;
xs__9428 = G__9440;
continue;
}
} else
{return xs__9428;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9454 = null;
var G__9454__9455 = (function (coll,n){
var temp__3695__auto____9443 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9443))
{var xs__9444 = temp__3695__auto____9443;

return cljs.core.first.call(null,xs__9444);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9454__9456 = (function (coll,n,not_found){
var temp__3695__auto____9452 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9452))
{var xs__9453 = temp__3695__auto____9452;

return cljs.core.first.call(null,xs__9453);
} else
{return not_found;
}
});
G__9454 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9454__9455.call(this,coll,n);
case  3 :
return G__9454__9456.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9454;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9537 = (function (){
return "";
});
var str_STAR___9538 = (function (x){
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
var str_STAR___9539 = (function() { 
var G__9542__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9543 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9544 = cljs.core.next.call(null,more);
sb = G__9543;
more = G__9544;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9542 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9542__delegate.call(this, x, ys);
};
G__9542.cljs$lang$maxFixedArity = 1;
G__9542.cljs$lang$applyTo = (function (arglist__9545){
var x = cljs.core.first(arglist__9545);
var ys = cljs.core.rest(arglist__9545);
return G__9542__delegate.call(this, x, ys);
});
return G__9542;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9537.call(this);
case  1 :
return str_STAR___9538.call(this,x);
default:
return str_STAR___9539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9539.cljs$lang$applyTo;
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
var str__9546 = (function (){
return "";
});
var str__9547 = (function (x){
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
var str__9548 = (function() { 
var G__9551__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9551 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9551__delegate.call(this, x, ys);
};
G__9551.cljs$lang$maxFixedArity = 1;
G__9551.cljs$lang$applyTo = (function (arglist__9552){
var x = cljs.core.first(arglist__9552);
var ys = cljs.core.rest(arglist__9552);
return G__9551__delegate.call(this, x, ys);
});
return G__9551;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9546.call(this);
case  1 :
return str__9547.call(this,x);
default:
return str__9548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9548.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9558 = (function (s,start){
return s.substring(start);
});
var subs__9559 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9558.call(this,s,start);
case  3 :
return subs__9559.call(this,s,start,end);
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
var symbol__9571 = (function (name){
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
var symbol__9572 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9571.call(this,ns);
case  2 :
return symbol__9572.call(this,ns,name);
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
var keyword__9574 = (function (name){
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
var keyword__9575 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9574.call(this,ns);
case  2 :
return keyword__9575.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9578 = cljs.core.seq.call(null,x);
var ys__9579 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9578)))
{return cljs.core.nil_QMARK_.call(null,ys__9579);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9579)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9578),cljs.core.first.call(null,ys__9579))))
{{
var G__9581 = cljs.core.next.call(null,xs__9578);
var G__9582 = cljs.core.next.call(null,ys__9579);
xs__9578 = G__9581;
ys__9579 = G__9582;
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
return cljs.core.reduce.call(null,(function (p1__9631_SHARP_,p2__9632_SHARP_){
return cljs.core.hash_combine.call(null,p1__9631_SHARP_,cljs.core.hash.call(null,p2__9632_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9646__9647 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9646__9647))
{var G__9649__9653 = cljs.core.first.call(null,G__9646__9647);
var vec__9651__9654 = G__9649__9653;
var key_name__9657 = cljs.core.nth.call(null,vec__9651__9654,0,null);
var f__9660 = cljs.core.nth.call(null,vec__9651__9654,1,null);
var G__9646__9661 = G__9646__9647;

var G__9649__9663 = G__9649__9653;
var G__9646__9665 = G__9646__9661;

while(true){
var vec__9667__9702 = G__9649__9663;
var key_name__9796 = cljs.core.nth.call(null,vec__9667__9702,0,null);
var f__9797 = cljs.core.nth.call(null,vec__9667__9702,1,null);
var G__9646__9798 = G__9646__9665;

var str_name__9799 = cljs.core.name.call(null,key_name__9796);

obj[str_name__9799] = f__9797;
var temp__3698__auto____9801 = cljs.core.next.call(null,G__9646__9798);

if(cljs.core.truth_(temp__3698__auto____9801))
{var G__9646__9802 = temp__3698__auto____9801;

{
var G__9806 = cljs.core.first.call(null,G__9646__9802);
var G__9807 = G__9646__9802;
G__9649__9663 = G__9806;
G__9646__9665 = G__9807;
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
var this__9821 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9824 = this;
return (new cljs.core.List(this__9824.meta,o,coll,(this__9824.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9829 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9830 = this;
return this__9830.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9831 = this;
return this__9831.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9832 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9833 = this;
return this__9833.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9834 = this;
return this__9834.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9835 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9836 = this;
return (new cljs.core.List(meta,this__9836.first,this__9836.rest,this__9836.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9837 = this;
return this__9837.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9839 = this;
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
var this__9876 = this;
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
var this__9884 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9885 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9886 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9887 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9888 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9899 = this;
return this__9899.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9900 = this;
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
list.cljs$lang$applyTo = (function (arglist__9962){
var items = cljs.core.seq( arglist__9962 );;
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
var this__9968 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9970 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9973 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9976 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9976.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9979 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9981 = this;
return this__9981.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9983 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9983.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9983.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9985 = this;
return this__9985.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9987 = this;
return (new cljs.core.Cons(meta,this__9987.first,this__9987.rest));
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
var G__9998 = null;
var G__9998__9999 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9998__10000 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9998 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9998__9999.call(this,string,f);
case  3 :
return G__9998__10000.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9998;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10008 = null;
var G__10008__10009 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10008__10010 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10008 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10008__10009.call(this,string,k);
case  3 :
return G__10008__10010.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10008;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10012 = null;
var G__10012__10013 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10012__10014 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10012 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10012__10013.call(this,string,n);
case  3 :
return G__10012__10014.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10012;
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
var G__10031 = null;
var G__10031__10032 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10031__10033 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10031 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10031__10032.call(this,this$,coll);
case  3 :
return G__10031__10033.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10031;
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
var x__10049 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10049;
} else
{lazy_seq.x = x__10049.call(null);
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
var this__10050 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10051 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10052 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10053 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10053.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10054 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10055 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10057 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10058 = this;
return this__10058.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10059 = this;
return (new cljs.core.LazySeq(meta,this__10059.realized,this__10059.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10067 = cljs.core.array.call(null);

var s__10069 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10069)))
{ary__10067.push(cljs.core.first.call(null,s__10069));
{
var G__10071 = cljs.core.next.call(null,s__10069);
s__10069 = G__10071;
continue;
}
} else
{return ary__10067;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10072 = s;
var i__10073 = n;
var sum__10074 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10075 = (i__10073 > 0);

if(cljs.core.truth_(and__3546__auto____10075))
{return cljs.core.seq.call(null,s__10072);
} else
{return and__3546__auto____10075;
}
})()))
{{
var G__10119 = cljs.core.next.call(null,s__10072);
var G__10120 = (i__10073 - 1);
var G__10121 = (sum__10074 + 1);
s__10072 = G__10119;
i__10073 = G__10120;
sum__10074 = G__10121;
continue;
}
} else
{return sum__10074;
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
var concat__10135 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10136 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10137 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10132 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10132))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10132),concat.call(null,cljs.core.rest.call(null,s__10132),y));
} else
{return y;
}
})));
});
var concat__10138 = (function() { 
var G__10141__delegate = function (x,y,zs){
var cat__10134 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10133 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10133))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10133),cat.call(null,cljs.core.rest.call(null,xys__10133),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10134.call(null,concat.call(null,x,y),zs);
};
var G__10141 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10141__delegate.call(this, x, y, zs);
};
G__10141.cljs$lang$maxFixedArity = 2;
G__10141.cljs$lang$applyTo = (function (arglist__10143){
var x = cljs.core.first(arglist__10143);
var y = cljs.core.first(cljs.core.next(arglist__10143));
var zs = cljs.core.rest(cljs.core.next(arglist__10143));
return G__10141__delegate.call(this, x, y, zs);
});
return G__10141;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10135.call(this);
case  1 :
return concat__10136.call(this,x);
case  2 :
return concat__10137.call(this,x,y);
default:
return concat__10138.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10138.cljs$lang$applyTo;
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
var list_STAR___10145 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10146 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10147 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10148 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10149 = (function() { 
var G__10153__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10153 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10153__delegate.call(this, a, b, c, d, more);
};
G__10153.cljs$lang$maxFixedArity = 4;
G__10153.cljs$lang$applyTo = (function (arglist__10155){
var a = cljs.core.first(arglist__10155);
var b = cljs.core.first(cljs.core.next(arglist__10155));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10155)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10155))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10155))));
return G__10153__delegate.call(this, a, b, c, d, more);
});
return G__10153;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10145.call(this,a);
case  2 :
return list_STAR___10146.call(this,a,b);
case  3 :
return list_STAR___10147.call(this,a,b,c);
case  4 :
return list_STAR___10148.call(this,a,b,c,d);
default:
return list_STAR___10149.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10149.cljs$lang$applyTo;
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
var apply__10246 = (function (f,args){
var fixed_arity__10162 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10162 + 1)) <= fixed_arity__10162)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10247 = (function (f,x,args){
var arglist__10170 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10172 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10170,fixed_arity__10172) <= fixed_arity__10172)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10170));
} else
{return f.cljs$lang$applyTo(arglist__10170);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10170));
}
});
var apply__10248 = (function (f,x,y,args){
var arglist__10175 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10176 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10175,fixed_arity__10176) <= fixed_arity__10176)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10175));
} else
{return f.cljs$lang$applyTo(arglist__10175);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10175));
}
});
var apply__10249 = (function (f,x,y,z,args){
var arglist__10180 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10181 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10180,fixed_arity__10181) <= fixed_arity__10181)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10180));
} else
{return f.cljs$lang$applyTo(arglist__10180);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10180));
}
});
var apply__10250 = (function() { 
var G__10252__delegate = function (f,a,b,c,d,args){
var arglist__10238 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10239 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10238,fixed_arity__10239) <= fixed_arity__10239)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10238));
} else
{return f.cljs$lang$applyTo(arglist__10238);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10238));
}
};
var G__10252 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10252__delegate.call(this, f, a, b, c, d, args);
};
G__10252.cljs$lang$maxFixedArity = 5;
G__10252.cljs$lang$applyTo = (function (arglist__10254){
var f = cljs.core.first(arglist__10254);
var a = cljs.core.first(cljs.core.next(arglist__10254));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10254)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10254))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10254)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10254)))));
return G__10252__delegate.call(this, f, a, b, c, d, args);
});
return G__10252;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10246.call(this,f,a);
case  3 :
return apply__10247.call(this,f,a,b);
case  4 :
return apply__10248.call(this,f,a,b,c);
case  5 :
return apply__10249.call(this,f,a,b,c,d);
default:
return apply__10250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10250.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10256){
var obj = cljs.core.first(arglist__10256);
var f = cljs.core.first(cljs.core.next(arglist__10256));
var args = cljs.core.rest(cljs.core.next(arglist__10256));
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
var not_EQ___10257 = (function (x){
return false;
});
var not_EQ___10258 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10259 = (function() { 
var G__10261__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10261 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10261__delegate.call(this, x, y, more);
};
G__10261.cljs$lang$maxFixedArity = 2;
G__10261.cljs$lang$applyTo = (function (arglist__10262){
var x = cljs.core.first(arglist__10262);
var y = cljs.core.first(cljs.core.next(arglist__10262));
var more = cljs.core.rest(cljs.core.next(arglist__10262));
return G__10261__delegate.call(this, x, y, more);
});
return G__10261;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10257.call(this,x);
case  2 :
return not_EQ___10258.call(this,x,y);
default:
return not_EQ___10259.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10259.cljs$lang$applyTo;
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
var G__10267 = pred;
var G__10268 = cljs.core.next.call(null,coll);
pred = G__10267;
coll = G__10268;
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
{var or__3548__auto____10272 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10272))
{return or__3548__auto____10272;
} else
{{
var G__10294 = pred;
var G__10295 = cljs.core.next.call(null,coll);
pred = G__10294;
coll = G__10295;
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
var G__10305 = null;
var G__10305__10310 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10305__10311 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10305__10312 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10305__10313 = (function() { 
var G__10316__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10316 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10316__delegate.call(this, x, y, zs);
};
G__10316.cljs$lang$maxFixedArity = 2;
G__10316.cljs$lang$applyTo = (function (arglist__10318){
var x = cljs.core.first(arglist__10318);
var y = cljs.core.first(cljs.core.next(arglist__10318));
var zs = cljs.core.rest(cljs.core.next(arglist__10318));
return G__10316__delegate.call(this, x, y, zs);
});
return G__10316;
})()
;
G__10305 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10305__10310.call(this);
case  1 :
return G__10305__10311.call(this,x);
case  2 :
return G__10305__10312.call(this,x,y);
default:
return G__10305__10313.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10305.cljs$lang$maxFixedArity = 2;
G__10305.cljs$lang$applyTo = G__10305__10313.cljs$lang$applyTo;
return G__10305;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10321__delegate = function (args){
return x;
};
var G__10321 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10321__delegate.call(this, args);
};
G__10321.cljs$lang$maxFixedArity = 0;
G__10321.cljs$lang$applyTo = (function (arglist__10322){
var args = cljs.core.seq( arglist__10322 );;
return G__10321__delegate.call(this, args);
});
return G__10321;
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
var comp__10334 = (function (){
return cljs.core.identity;
});
var comp__10335 = (function (f){
return f;
});
var comp__10336 = (function (f,g){
return (function() {
var G__10340 = null;
var G__10340__10341 = (function (){
return f.call(null,g.call(null));
});
var G__10340__10342 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10340__10343 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10340__10344 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10340__10345 = (function() { 
var G__10347__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10347 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10347__delegate.call(this, x, y, z, args);
};
G__10347.cljs$lang$maxFixedArity = 3;
G__10347.cljs$lang$applyTo = (function (arglist__10348){
var x = cljs.core.first(arglist__10348);
var y = cljs.core.first(cljs.core.next(arglist__10348));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10348)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10348)));
return G__10347__delegate.call(this, x, y, z, args);
});
return G__10347;
})()
;
G__10340 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10340__10341.call(this);
case  1 :
return G__10340__10342.call(this,x);
case  2 :
return G__10340__10343.call(this,x,y);
case  3 :
return G__10340__10344.call(this,x,y,z);
default:
return G__10340__10345.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10340.cljs$lang$maxFixedArity = 3;
G__10340.cljs$lang$applyTo = G__10340__10345.cljs$lang$applyTo;
return G__10340;
})()
});
var comp__10337 = (function (f,g,h){
return (function() {
var G__10351 = null;
var G__10351__10356 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10351__10357 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10351__10358 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10351__10359 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10351__10360 = (function() { 
var G__10364__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10364 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10364__delegate.call(this, x, y, z, args);
};
G__10364.cljs$lang$maxFixedArity = 3;
G__10364.cljs$lang$applyTo = (function (arglist__10365){
var x = cljs.core.first(arglist__10365);
var y = cljs.core.first(cljs.core.next(arglist__10365));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10365)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10365)));
return G__10364__delegate.call(this, x, y, z, args);
});
return G__10364;
})()
;
G__10351 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10351__10356.call(this);
case  1 :
return G__10351__10357.call(this,x);
case  2 :
return G__10351__10358.call(this,x,y);
case  3 :
return G__10351__10359.call(this,x,y,z);
default:
return G__10351__10360.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10351.cljs$lang$maxFixedArity = 3;
G__10351.cljs$lang$applyTo = G__10351__10360.cljs$lang$applyTo;
return G__10351;
})()
});
var comp__10338 = (function() { 
var G__10395__delegate = function (f1,f2,f3,fs){
var fs__10329 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10398__delegate = function (args){
var ret__10330 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10329),args);
var fs__10331 = cljs.core.next.call(null,fs__10329);

while(true){
if(cljs.core.truth_(fs__10331))
{{
var G__10489 = cljs.core.first.call(null,fs__10331).call(null,ret__10330);
var G__10490 = cljs.core.next.call(null,fs__10331);
ret__10330 = G__10489;
fs__10331 = G__10490;
continue;
}
} else
{return ret__10330;
}
break;
}
};
var G__10398 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10398__delegate.call(this, args);
};
G__10398.cljs$lang$maxFixedArity = 0;
G__10398.cljs$lang$applyTo = (function (arglist__10491){
var args = cljs.core.seq( arglist__10491 );;
return G__10398__delegate.call(this, args);
});
return G__10398;
})()
;
};
var G__10395 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10395__delegate.call(this, f1, f2, f3, fs);
};
G__10395.cljs$lang$maxFixedArity = 3;
G__10395.cljs$lang$applyTo = (function (arglist__10493){
var f1 = cljs.core.first(arglist__10493);
var f2 = cljs.core.first(cljs.core.next(arglist__10493));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10493)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10493)));
return G__10395__delegate.call(this, f1, f2, f3, fs);
});
return G__10395;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10334.call(this);
case  1 :
return comp__10335.call(this,f1);
case  2 :
return comp__10336.call(this,f1,f2);
case  3 :
return comp__10337.call(this,f1,f2,f3);
default:
return comp__10338.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10338.cljs$lang$applyTo;
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
var partial__10495 = (function (f,arg1){
return (function() { 
var G__10501__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10501 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10501__delegate.call(this, args);
};
G__10501.cljs$lang$maxFixedArity = 0;
G__10501.cljs$lang$applyTo = (function (arglist__10503){
var args = cljs.core.seq( arglist__10503 );;
return G__10501__delegate.call(this, args);
});
return G__10501;
})()
;
});
var partial__10496 = (function (f,arg1,arg2){
return (function() { 
var G__10504__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10504 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10504__delegate.call(this, args);
};
G__10504.cljs$lang$maxFixedArity = 0;
G__10504.cljs$lang$applyTo = (function (arglist__10505){
var args = cljs.core.seq( arglist__10505 );;
return G__10504__delegate.call(this, args);
});
return G__10504;
})()
;
});
var partial__10497 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10510__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10510 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10510__delegate.call(this, args);
};
G__10510.cljs$lang$maxFixedArity = 0;
G__10510.cljs$lang$applyTo = (function (arglist__10513){
var args = cljs.core.seq( arglist__10513 );;
return G__10510__delegate.call(this, args);
});
return G__10510;
})()
;
});
var partial__10498 = (function() { 
var G__10515__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10517__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10517 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10517__delegate.call(this, args);
};
G__10517.cljs$lang$maxFixedArity = 0;
G__10517.cljs$lang$applyTo = (function (arglist__10523){
var args = cljs.core.seq( arglist__10523 );;
return G__10517__delegate.call(this, args);
});
return G__10517;
})()
;
};
var G__10515 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10515__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10515.cljs$lang$maxFixedArity = 4;
G__10515.cljs$lang$applyTo = (function (arglist__10524){
var f = cljs.core.first(arglist__10524);
var arg1 = cljs.core.first(cljs.core.next(arglist__10524));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10524)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10524))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10524))));
return G__10515__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10515;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10495.call(this,f,arg1);
case  3 :
return partial__10496.call(this,f,arg1,arg2);
case  4 :
return partial__10497.call(this,f,arg1,arg2,arg3);
default:
return partial__10498.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10498.cljs$lang$applyTo;
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
var fnil__10599 = (function (f,x){
return (function() {
var G__10603 = null;
var G__10603__10604 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10603__10605 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10603__10606 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10603__10607 = (function() { 
var G__10615__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10615 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10615__delegate.call(this, a, b, c, ds);
};
G__10615.cljs$lang$maxFixedArity = 3;
G__10615.cljs$lang$applyTo = (function (arglist__10616){
var a = cljs.core.first(arglist__10616);
var b = cljs.core.first(cljs.core.next(arglist__10616));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10616)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10616)));
return G__10615__delegate.call(this, a, b, c, ds);
});
return G__10615;
})()
;
G__10603 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10603__10604.call(this,a);
case  2 :
return G__10603__10605.call(this,a,b);
case  3 :
return G__10603__10606.call(this,a,b,c);
default:
return G__10603__10607.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10603.cljs$lang$maxFixedArity = 3;
G__10603.cljs$lang$applyTo = G__10603__10607.cljs$lang$applyTo;
return G__10603;
})()
});
var fnil__10600 = (function (f,x,y){
return (function() {
var G__10627 = null;
var G__10627__10739 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10627__10740 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10627__10741 = (function() { 
var G__10745__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10745 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10745__delegate.call(this, a, b, c, ds);
};
G__10745.cljs$lang$maxFixedArity = 3;
G__10745.cljs$lang$applyTo = (function (arglist__10747){
var a = cljs.core.first(arglist__10747);
var b = cljs.core.first(cljs.core.next(arglist__10747));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10747)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10747)));
return G__10745__delegate.call(this, a, b, c, ds);
});
return G__10745;
})()
;
G__10627 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10627__10739.call(this,a,b);
case  3 :
return G__10627__10740.call(this,a,b,c);
default:
return G__10627__10741.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10627.cljs$lang$maxFixedArity = 3;
G__10627.cljs$lang$applyTo = G__10627__10741.cljs$lang$applyTo;
return G__10627;
})()
});
var fnil__10601 = (function (f,x,y,z){
return (function() {
var G__10748 = null;
var G__10748__10749 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10748__10750 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10748__10751 = (function() { 
var G__10753__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10753 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10753__delegate.call(this, a, b, c, ds);
};
G__10753.cljs$lang$maxFixedArity = 3;
G__10753.cljs$lang$applyTo = (function (arglist__10754){
var a = cljs.core.first(arglist__10754);
var b = cljs.core.first(cljs.core.next(arglist__10754));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10754)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10754)));
return G__10753__delegate.call(this, a, b, c, ds);
});
return G__10753;
})()
;
G__10748 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10748__10749.call(this,a,b);
case  3 :
return G__10748__10750.call(this,a,b,c);
default:
return G__10748__10751.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10748.cljs$lang$maxFixedArity = 3;
G__10748.cljs$lang$applyTo = G__10748__10751.cljs$lang$applyTo;
return G__10748;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10599.call(this,f,x);
case  3 :
return fnil__10600.call(this,f,x,y);
case  4 :
return fnil__10601.call(this,f,x,y,z);
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
var mapi__10763 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10755 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10755))
{var s__10757 = temp__3698__auto____10755;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10757)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10757)));
} else
{return null;
}
})));
});

return mapi__10763.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10779 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10779))
{var s__10782 = temp__3698__auto____10779;

var x__10784 = f.call(null,cljs.core.first.call(null,s__10782));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10784)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10782));
} else
{return cljs.core.cons.call(null,x__10784,keep.call(null,f,cljs.core.rest.call(null,s__10782)));
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
var keepi__10823 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10815 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10815))
{var s__10818 = temp__3698__auto____10815;

var x__10821 = f.call(null,idx,cljs.core.first.call(null,s__10818));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10821)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10818));
} else
{return cljs.core.cons.call(null,x__10821,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10818)));
}
} else
{return null;
}
})));
});

return keepi__10823.call(null,0,coll);
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
var every_pred__11030 = (function (p){
return (function() {
var ep1 = null;
var ep1__11043 = (function (){
return true;
});
var ep1__11044 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11045 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10857 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10857))
{return p.call(null,y);
} else
{return and__3546__auto____10857;
}
})());
});
var ep1__11046 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10858 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10858))
{var and__3546__auto____10860 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10860))
{return p.call(null,z);
} else
{return and__3546__auto____10860;
}
} else
{return and__3546__auto____10858;
}
})());
});
var ep1__11047 = (function() { 
var G__11053__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10863 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10863))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10863;
}
})());
};
var G__11053 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11053__delegate.call(this, x, y, z, args);
};
G__11053.cljs$lang$maxFixedArity = 3;
G__11053.cljs$lang$applyTo = (function (arglist__11059){
var x = cljs.core.first(arglist__11059);
var y = cljs.core.first(cljs.core.next(arglist__11059));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11059)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11059)));
return G__11053__delegate.call(this, x, y, z, args);
});
return G__11053;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11043.call(this);
case  1 :
return ep1__11044.call(this,x);
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
var every_pred__11031 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11062 = (function (){
return true;
});
var ep2__11064 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10875 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10875))
{return p2.call(null,x);
} else
{return and__3546__auto____10875;
}
})());
});
var ep2__11066 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10882 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10882))
{var and__3546__auto____10885 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10885))
{var and__3546__auto____10886 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10886))
{return p2.call(null,y);
} else
{return and__3546__auto____10886;
}
} else
{return and__3546__auto____10885;
}
} else
{return and__3546__auto____10882;
}
})());
});
var ep2__11068 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10889 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10889))
{var and__3546__auto____10890 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10890))
{var and__3546__auto____10891 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10891))
{var and__3546__auto____10892 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10892))
{var and__3546__auto____10893 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10893))
{return p2.call(null,z);
} else
{return and__3546__auto____10893;
}
} else
{return and__3546__auto____10892;
}
} else
{return and__3546__auto____10891;
}
} else
{return and__3546__auto____10890;
}
} else
{return and__3546__auto____10889;
}
})());
});
var ep2__11070 = (function() { 
var G__11103__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10897 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10897))
{return cljs.core.every_QMARK_.call(null,(function (p1__10799_SHARP_){
var and__3546__auto____10953 = p1.call(null,p1__10799_SHARP_);

if(cljs.core.truth_(and__3546__auto____10953))
{return p2.call(null,p1__10799_SHARP_);
} else
{return and__3546__auto____10953;
}
}),args);
} else
{return and__3546__auto____10897;
}
})());
};
var G__11103 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11103__delegate.call(this, x, y, z, args);
};
G__11103.cljs$lang$maxFixedArity = 3;
G__11103.cljs$lang$applyTo = (function (arglist__11105){
var x = cljs.core.first(arglist__11105);
var y = cljs.core.first(cljs.core.next(arglist__11105));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11105)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11105)));
return G__11103__delegate.call(this, x, y, z, args);
});
return G__11103;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11062.call(this);
case  1 :
return ep2__11064.call(this,x);
case  2 :
return ep2__11066.call(this,x,y);
case  3 :
return ep2__11068.call(this,x,y,z);
default:
return ep2__11070.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11070.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11032 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11107 = (function (){
return true;
});
var ep3__11108 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10959 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10959))
{var and__3546__auto____10960 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10960))
{return p3.call(null,x);
} else
{return and__3546__auto____10960;
}
} else
{return and__3546__auto____10959;
}
})());
});
var ep3__11109 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10964 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10964))
{var and__3546__auto____10966 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10966))
{var and__3546__auto____10968 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10968))
{var and__3546__auto____10970 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10970))
{var and__3546__auto____10971 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10971))
{return p3.call(null,y);
} else
{return and__3546__auto____10971;
}
} else
{return and__3546__auto____10970;
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
var ep3__11110 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10974 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10974))
{var and__3546__auto____10976 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10976))
{var and__3546__auto____10979 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10979))
{var and__3546__auto____10980 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10980))
{var and__3546__auto____10982 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10982))
{var and__3546__auto____10984 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10984))
{var and__3546__auto____10986 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10986))
{var and__3546__auto____10987 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10987))
{return p3.call(null,z);
} else
{return and__3546__auto____10987;
}
} else
{return and__3546__auto____10986;
}
} else
{return and__3546__auto____10984;
}
} else
{return and__3546__auto____10982;
}
} else
{return and__3546__auto____10980;
}
} else
{return and__3546__auto____10979;
}
} else
{return and__3546__auto____10976;
}
} else
{return and__3546__auto____10974;
}
})());
});
var ep3__11111 = (function() { 
var G__11205__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10991 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10991))
{return cljs.core.every_QMARK_.call(null,(function (p1__10801_SHARP_){
var and__3546__auto____10996 = p1.call(null,p1__10801_SHARP_);

if(cljs.core.truth_(and__3546__auto____10996))
{var and__3546__auto____10999 = p2.call(null,p1__10801_SHARP_);

if(cljs.core.truth_(and__3546__auto____10999))
{return p3.call(null,p1__10801_SHARP_);
} else
{return and__3546__auto____10999;
}
} else
{return and__3546__auto____10996;
}
}),args);
} else
{return and__3546__auto____10991;
}
})());
};
var G__11205 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11205__delegate.call(this, x, y, z, args);
};
G__11205.cljs$lang$maxFixedArity = 3;
G__11205.cljs$lang$applyTo = (function (arglist__11209){
var x = cljs.core.first(arglist__11209);
var y = cljs.core.first(cljs.core.next(arglist__11209));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11209)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11209)));
return G__11205__delegate.call(this, x, y, z, args);
});
return G__11205;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11107.call(this);
case  1 :
return ep3__11108.call(this,x);
case  2 :
return ep3__11109.call(this,x,y);
case  3 :
return ep3__11110.call(this,x,y,z);
default:
return ep3__11111.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11111.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11033 = (function() { 
var G__11212__delegate = function (p1,p2,p3,ps){
var ps__11004 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11214 = (function (){
return true;
});
var epn__11215 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10802_SHARP_){
return p1__10802_SHARP_.call(null,x);
}),ps__11004);
});
var epn__11217 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10805_SHARP_){
var and__3546__auto____11010 = p1__10805_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11010))
{return p1__10805_SHARP_.call(null,y);
} else
{return and__3546__auto____11010;
}
}),ps__11004);
});
var epn__11219 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10809_SHARP_){
var and__3546__auto____11015 = p1__10809_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11015))
{var and__3546__auto____11017 = p1__10809_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11017))
{return p1__10809_SHARP_.call(null,z);
} else
{return and__3546__auto____11017;
}
} else
{return and__3546__auto____11015;
}
}),ps__11004);
});
var epn__11220 = (function() { 
var G__11234__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11021 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11021))
{return cljs.core.every_QMARK_.call(null,(function (p1__10812_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10812_SHARP_,args);
}),ps__11004);
} else
{return and__3546__auto____11021;
}
})());
};
var G__11234 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11234__delegate.call(this, x, y, z, args);
};
G__11234.cljs$lang$maxFixedArity = 3;
G__11234.cljs$lang$applyTo = (function (arglist__11240){
var x = cljs.core.first(arglist__11240);
var y = cljs.core.first(cljs.core.next(arglist__11240));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11240)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11240)));
return G__11234__delegate.call(this, x, y, z, args);
});
return G__11234;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11214.call(this);
case  1 :
return epn__11215.call(this,x);
case  2 :
return epn__11217.call(this,x,y);
case  3 :
return epn__11219.call(this,x,y,z);
default:
return epn__11220.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11220.cljs$lang$applyTo;
return epn;
})()
};
var G__11212 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11212__delegate.call(this, p1, p2, p3, ps);
};
G__11212.cljs$lang$maxFixedArity = 3;
G__11212.cljs$lang$applyTo = (function (arglist__11250){
var p1 = cljs.core.first(arglist__11250);
var p2 = cljs.core.first(cljs.core.next(arglist__11250));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11250)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11250)));
return G__11212__delegate.call(this, p1, p2, p3, ps);
});
return G__11212;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11030.call(this,p1);
case  2 :
return every_pred__11031.call(this,p1,p2);
case  3 :
return every_pred__11032.call(this,p1,p2,p3);
default:
return every_pred__11033.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11033.cljs$lang$applyTo;
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
var some_fn__11397 = (function (p){
return (function() {
var sp1 = null;
var sp1__11402 = (function (){
return null;
});
var sp1__11403 = (function (x){
return p.call(null,x);
});
var sp1__11404 = (function (x,y){
var or__3548__auto____11262 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11262))
{return or__3548__auto____11262;
} else
{return p.call(null,y);
}
});
var sp1__11405 = (function (x,y,z){
var or__3548__auto____11265 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11265))
{return or__3548__auto____11265;
} else
{var or__3548__auto____11272 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11272))
{return or__3548__auto____11272;
} else
{return p.call(null,z);
}
}
});
var sp1__11406 = (function() { 
var G__11410__delegate = function (x,y,z,args){
var or__3548__auto____11276 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11276))
{return or__3548__auto____11276;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11410 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11410__delegate.call(this, x, y, z, args);
};
G__11410.cljs$lang$maxFixedArity = 3;
G__11410.cljs$lang$applyTo = (function (arglist__11412){
var x = cljs.core.first(arglist__11412);
var y = cljs.core.first(cljs.core.next(arglist__11412));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11412)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11412)));
return G__11410__delegate.call(this, x, y, z, args);
});
return G__11410;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11402.call(this);
case  1 :
return sp1__11403.call(this,x);
case  2 :
return sp1__11404.call(this,x,y);
case  3 :
return sp1__11405.call(this,x,y,z);
default:
return sp1__11406.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11406.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11398 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11414 = (function (){
return null;
});
var sp2__11415 = (function (x){
var or__3548__auto____11279 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11279))
{return or__3548__auto____11279;
} else
{return p2.call(null,x);
}
});
var sp2__11416 = (function (x,y){
var or__3548__auto____11282 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11282))
{return or__3548__auto____11282;
} else
{var or__3548__auto____11285 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11285))
{return or__3548__auto____11285;
} else
{var or__3548__auto____11288 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11288))
{return or__3548__auto____11288;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11417 = (function (x,y,z){
var or__3548__auto____11292 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11292))
{return or__3548__auto____11292;
} else
{var or__3548__auto____11295 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11295))
{return or__3548__auto____11295;
} else
{var or__3548__auto____11297 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11297))
{return or__3548__auto____11297;
} else
{var or__3548__auto____11301 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11301))
{return or__3548__auto____11301;
} else
{var or__3548__auto____11303 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11303))
{return or__3548__auto____11303;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11418 = (function() { 
var G__11427__delegate = function (x,y,z,args){
var or__3548__auto____11308 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11308))
{return or__3548__auto____11308;
} else
{return cljs.core.some.call(null,(function (p1__10847_SHARP_){
var or__3548__auto____11313 = p1.call(null,p1__10847_SHARP_);

if(cljs.core.truth_(or__3548__auto____11313))
{return or__3548__auto____11313;
} else
{return p2.call(null,p1__10847_SHARP_);
}
}),args);
}
};
var G__11427 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11427__delegate.call(this, x, y, z, args);
};
G__11427.cljs$lang$maxFixedArity = 3;
G__11427.cljs$lang$applyTo = (function (arglist__11430){
var x = cljs.core.first(arglist__11430);
var y = cljs.core.first(cljs.core.next(arglist__11430));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11430)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11430)));
return G__11427__delegate.call(this, x, y, z, args);
});
return G__11427;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11414.call(this);
case  1 :
return sp2__11415.call(this,x);
case  2 :
return sp2__11416.call(this,x,y);
case  3 :
return sp2__11417.call(this,x,y,z);
default:
return sp2__11418.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11418.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11399 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11510 = (function (){
return null;
});
var sp3__11511 = (function (x){
var or__3548__auto____11323 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11323))
{return or__3548__auto____11323;
} else
{var or__3548__auto____11324 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11324))
{return or__3548__auto____11324;
} else
{return p3.call(null,x);
}
}
});
var sp3__11512 = (function (x,y){
var or__3548__auto____11328 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11328))
{return or__3548__auto____11328;
} else
{var or__3548__auto____11330 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11330))
{return or__3548__auto____11330;
} else
{var or__3548__auto____11333 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11333))
{return or__3548__auto____11333;
} else
{var or__3548__auto____11335 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11335))
{return or__3548__auto____11335;
} else
{var or__3548__auto____11337 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11337))
{return or__3548__auto____11337;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11513 = (function (x,y,z){
var or__3548__auto____11341 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11341))
{return or__3548__auto____11341;
} else
{var or__3548__auto____11342 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11342))
{return or__3548__auto____11342;
} else
{var or__3548__auto____11344 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11344))
{return or__3548__auto____11344;
} else
{var or__3548__auto____11346 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11346))
{return or__3548__auto____11346;
} else
{var or__3548__auto____11349 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11349))
{return or__3548__auto____11349;
} else
{var or__3548__auto____11351 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11351))
{return or__3548__auto____11351;
} else
{var or__3548__auto____11354 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11354))
{return or__3548__auto____11354;
} else
{var or__3548__auto____11356 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11356))
{return or__3548__auto____11356;
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
var sp3__11514 = (function() { 
var G__11541__delegate = function (x,y,z,args){
var or__3548__auto____11360 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11360))
{return or__3548__auto____11360;
} else
{return cljs.core.some.call(null,(function (p1__10849_SHARP_){
var or__3548__auto____11361 = p1.call(null,p1__10849_SHARP_);

if(cljs.core.truth_(or__3548__auto____11361))
{return or__3548__auto____11361;
} else
{var or__3548__auto____11362 = p2.call(null,p1__10849_SHARP_);

if(cljs.core.truth_(or__3548__auto____11362))
{return or__3548__auto____11362;
} else
{return p3.call(null,p1__10849_SHARP_);
}
}
}),args);
}
};
var G__11541 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11541__delegate.call(this, x, y, z, args);
};
G__11541.cljs$lang$maxFixedArity = 3;
G__11541.cljs$lang$applyTo = (function (arglist__11542){
var x = cljs.core.first(arglist__11542);
var y = cljs.core.first(cljs.core.next(arglist__11542));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11542)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11542)));
return G__11541__delegate.call(this, x, y, z, args);
});
return G__11541;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11510.call(this);
case  1 :
return sp3__11511.call(this,x);
case  2 :
return sp3__11512.call(this,x,y);
case  3 :
return sp3__11513.call(this,x,y,z);
default:
return sp3__11514.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11514.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11400 = (function() { 
var G__11600__delegate = function (p1,p2,p3,ps){
var ps__11369 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11602 = (function (){
return null;
});
var spn__11603 = (function (x){
return cljs.core.some.call(null,(function (p1__10850_SHARP_){
return p1__10850_SHARP_.call(null,x);
}),ps__11369);
});
var spn__11604 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10851_SHARP_){
var or__3548__auto____11383 = p1__10851_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11383))
{return or__3548__auto____11383;
} else
{return p1__10851_SHARP_.call(null,y);
}
}),ps__11369);
});
var spn__11606 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10852_SHARP_){
var or__3548__auto____11384 = p1__10852_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11384))
{return or__3548__auto____11384;
} else
{var or__3548__auto____11386 = p1__10852_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11386))
{return or__3548__auto____11386;
} else
{return p1__10852_SHARP_.call(null,z);
}
}
}),ps__11369);
});
var spn__11608 = (function() { 
var G__11621__delegate = function (x,y,z,args){
var or__3548__auto____11388 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11388))
{return or__3548__auto____11388;
} else
{return cljs.core.some.call(null,(function (p1__10853_SHARP_){
return cljs.core.some.call(null,p1__10853_SHARP_,args);
}),ps__11369);
}
};
var G__11621 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11621__delegate.call(this, x, y, z, args);
};
G__11621.cljs$lang$maxFixedArity = 3;
G__11621.cljs$lang$applyTo = (function (arglist__11622){
var x = cljs.core.first(arglist__11622);
var y = cljs.core.first(cljs.core.next(arglist__11622));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11622)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11622)));
return G__11621__delegate.call(this, x, y, z, args);
});
return G__11621;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11602.call(this);
case  1 :
return spn__11603.call(this,x);
case  2 :
return spn__11604.call(this,x,y);
case  3 :
return spn__11606.call(this,x,y,z);
default:
return spn__11608.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11608.cljs$lang$applyTo;
return spn;
})()
};
var G__11600 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11600__delegate.call(this, p1, p2, p3, ps);
};
G__11600.cljs$lang$maxFixedArity = 3;
G__11600.cljs$lang$applyTo = (function (arglist__11623){
var p1 = cljs.core.first(arglist__11623);
var p2 = cljs.core.first(cljs.core.next(arglist__11623));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11623)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11623)));
return G__11600__delegate.call(this, p1, p2, p3, ps);
});
return G__11600;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11397.call(this,p1);
case  2 :
return some_fn__11398.call(this,p1,p2);
case  3 :
return some_fn__11399.call(this,p1,p2,p3);
default:
return some_fn__11400.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11400.cljs$lang$applyTo;
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
var map__11636 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11624 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11624))
{var s__11625 = temp__3698__auto____11624;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11625)),map.call(null,f,cljs.core.rest.call(null,s__11625)));
} else
{return null;
}
})));
});
var map__11637 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11626 = cljs.core.seq.call(null,c1);
var s2__11627 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11628 = s1__11626;

if(cljs.core.truth_(and__3546__auto____11628))
{return s2__11627;
} else
{return and__3546__auto____11628;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11626),cljs.core.first.call(null,s2__11627)),map.call(null,f,cljs.core.rest.call(null,s1__11626),cljs.core.rest.call(null,s2__11627)));
} else
{return null;
}
})));
});
var map__11638 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11629 = cljs.core.seq.call(null,c1);
var s2__11630 = cljs.core.seq.call(null,c2);
var s3__11631 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11632 = s1__11629;

if(cljs.core.truth_(and__3546__auto____11632))
{var and__3546__auto____11633 = s2__11630;

if(cljs.core.truth_(and__3546__auto____11633))
{return s3__11631;
} else
{return and__3546__auto____11633;
}
} else
{return and__3546__auto____11632;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11629),cljs.core.first.call(null,s2__11630),cljs.core.first.call(null,s3__11631)),map.call(null,f,cljs.core.rest.call(null,s1__11629),cljs.core.rest.call(null,s2__11630),cljs.core.rest.call(null,s3__11631)));
} else
{return null;
}
})));
});
var map__11639 = (function() { 
var G__11649__delegate = function (f,c1,c2,c3,colls){
var step__11635 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11634 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11634)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11634),step.call(null,map.call(null,cljs.core.rest,ss__11634)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11258_SHARP_){
return cljs.core.apply.call(null,f,p1__11258_SHARP_);
}),step__11635.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11649 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11649__delegate.call(this, f, c1, c2, c3, colls);
};
G__11649.cljs$lang$maxFixedArity = 4;
G__11649.cljs$lang$applyTo = (function (arglist__11863){
var f = cljs.core.first(arglist__11863);
var c1 = cljs.core.first(cljs.core.next(arglist__11863));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11863)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11863))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11863))));
return G__11649__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11649;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11636.call(this,f,c1);
case  3 :
return map__11637.call(this,f,c1,c2);
case  4 :
return map__11638.call(this,f,c1,c2,c3);
default:
return map__11639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11639.cljs$lang$applyTo;
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
{var temp__3698__auto____11873 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11873))
{var s__11874 = temp__3698__auto____11873;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11874),take.call(null,(n - 1),cljs.core.rest.call(null,s__11874)));
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
var step__11943 = (function (n,coll){
while(true){
var s__11890 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11891 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11891))
{return s__11890;
} else
{return and__3546__auto____11891;
}
})()))
{{
var G__11944 = (n - 1);
var G__11945 = cljs.core.rest.call(null,s__11890);
n = G__11944;
coll = G__11945;
continue;
}
} else
{return s__11890;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11943.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11947 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11948 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11947.call(this,n);
case  2 :
return drop_last__11948.call(this,n,s);
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
var s__11951 = cljs.core.seq.call(null,coll);
var lead__11952 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11952))
{{
var G__11954 = cljs.core.next.call(null,s__11951);
var G__11955 = cljs.core.next.call(null,lead__11952);
s__11951 = G__11954;
lead__11952 = G__11955;
continue;
}
} else
{return s__11951;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11962 = (function (pred,coll){
while(true){
var s__11958 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11959 = s__11958;

if(cljs.core.truth_(and__3546__auto____11959))
{return pred.call(null,cljs.core.first.call(null,s__11958));
} else
{return and__3546__auto____11959;
}
})()))
{{
var G__11964 = pred;
var G__11965 = cljs.core.rest.call(null,s__11958);
pred = G__11964;
coll = G__11965;
continue;
}
} else
{return s__11958;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11962.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11971 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11971))
{var s__11973 = temp__3698__auto____11971;

return cljs.core.concat.call(null,s__11973,cycle.call(null,s__11973));
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
var repeat__12009 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12010 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12009.call(this,n);
case  2 :
return repeat__12010.call(this,n,x);
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
var repeatedly__12018 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12019 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12018.call(this,n);
case  2 :
return repeatedly__12019.call(this,n,f);
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
var interleave__12040 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12029 = cljs.core.seq.call(null,c1);
var s2__12030 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12033 = s1__12029;

if(cljs.core.truth_(and__3546__auto____12033))
{return s2__12030;
} else
{return and__3546__auto____12033;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12029),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12030),interleave.call(null,cljs.core.rest.call(null,s1__12029),cljs.core.rest.call(null,s2__12030))));
} else
{return null;
}
})));
});
var interleave__12041 = (function() { 
var G__12046__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12035 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12035)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12035),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12035)));
} else
{return null;
}
})));
};
var G__12046 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12046__delegate.call(this, c1, c2, colls);
};
G__12046.cljs$lang$maxFixedArity = 2;
G__12046.cljs$lang$applyTo = (function (arglist__12050){
var c1 = cljs.core.first(arglist__12050);
var c2 = cljs.core.first(cljs.core.next(arglist__12050));
var colls = cljs.core.rest(cljs.core.next(arglist__12050));
return G__12046__delegate.call(this, c1, c2, colls);
});
return G__12046;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12040.call(this,c1,c2);
default:
return interleave__12041.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12041.cljs$lang$applyTo;
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
var cat__12061 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12057 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12057))
{var coll__12058 = temp__3695__auto____12057;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12058),cat.call(null,cljs.core.rest.call(null,coll__12058),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12061.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12078 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12079 = (function() { 
var G__12081__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12081 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12081__delegate.call(this, f, coll, colls);
};
G__12081.cljs$lang$maxFixedArity = 2;
G__12081.cljs$lang$applyTo = (function (arglist__12082){
var f = cljs.core.first(arglist__12082);
var coll = cljs.core.first(cljs.core.next(arglist__12082));
var colls = cljs.core.rest(cljs.core.next(arglist__12082));
return G__12081__delegate.call(this, f, coll, colls);
});
return G__12081;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12078.call(this,f,coll);
default:
return mapcat__12079.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12079.cljs$lang$applyTo;
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
{var s__12086 = temp__3698__auto____12084;

var f__12088 = cljs.core.first.call(null,s__12086);
var r__12089 = cljs.core.rest.call(null,s__12086);

if(cljs.core.truth_(pred.call(null,f__12088)))
{return cljs.core.cons.call(null,f__12088,filter.call(null,pred,r__12089));
} else
{return filter.call(null,pred,r__12089);
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
var walk__12102 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12102.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12100_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12100_SHARP_));
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
var partition__12123 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12124 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12109 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12109))
{var s__12111 = temp__3698__auto____12109;

var p__12112 = cljs.core.take.call(null,n,s__12111);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12112))))
{return cljs.core.cons.call(null,p__12112,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12111)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12125 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12114 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12114))
{var s__12116 = temp__3698__auto____12114;

var p__12118 = cljs.core.take.call(null,n,s__12116);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12118))))
{return cljs.core.cons.call(null,p__12118,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12116)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12118,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12123.call(this,n,step);
case  3 :
return partition__12124.call(this,n,step,pad);
case  4 :
return partition__12125.call(this,n,step,pad,coll);
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
var get_in__12145 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12146 = (function (m,ks,not_found){
var sentinel__12140 = cljs.core.lookup_sentinel;
var m__12141 = m;
var ks__12143 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12143))
{var m__12144 = cljs.core.get.call(null,m__12141,cljs.core.first.call(null,ks__12143),sentinel__12140);

if(cljs.core.truth_((sentinel__12140 === m__12144)))
{return not_found;
} else
{{
var G__12148 = sentinel__12140;
var G__12149 = m__12144;
var G__12150 = cljs.core.next.call(null,ks__12143);
sentinel__12140 = G__12148;
m__12141 = G__12149;
ks__12143 = G__12150;
continue;
}
}
} else
{return m__12141;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12145.call(this,m,ks);
case  3 :
return get_in__12146.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12154,v){
var vec__12155__12156 = p__12154;
var k__12157 = cljs.core.nth.call(null,vec__12155__12156,0,null);
var ks__12158 = cljs.core.nthnext.call(null,vec__12155__12156,1);

if(cljs.core.truth_(ks__12158))
{return cljs.core.assoc.call(null,m,k__12157,assoc_in.call(null,cljs.core.get.call(null,m,k__12157),ks__12158,v));
} else
{return cljs.core.assoc.call(null,m,k__12157,v);
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
var update_in__delegate = function (m,p__12161,f,args){
var vec__12163__12165 = p__12161;
var k__12166 = cljs.core.nth.call(null,vec__12163__12165,0,null);
var ks__12167 = cljs.core.nthnext.call(null,vec__12163__12165,1);

if(cljs.core.truth_(ks__12167))
{return cljs.core.assoc.call(null,m,k__12166,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12166),ks__12167,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12166,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12166),args));
}
};
var update_in = function (m,p__12161,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12161, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12174){
var m = cljs.core.first(arglist__12174);
var p__12161 = cljs.core.first(cljs.core.next(arglist__12174));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12174)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12174)));
return update_in__delegate.call(this, m, p__12161, f, args);
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
var G__12340 = null;
var G__12340__12341 = (function (coll,k){
var this__12186 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12340__12342 = (function (coll,k,not_found){
var this__12188 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12340 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12340__12341.call(this,coll,k);
case  3 :
return G__12340__12342.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12340;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12192 = this;
var new_array__12193 = cljs.core.aclone.call(null,this__12192.array);

(new_array__12193[k] = v);
return (new cljs.core.Vector(this__12192.meta,new_array__12193));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12344 = null;
var G__12344__12345 = (function (coll,k){
var this__12194 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12344__12346 = (function (coll,k,not_found){
var this__12251 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12344 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12344__12345.call(this,coll,k);
case  3 :
return G__12344__12346.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12344;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12252 = this;
var new_array__12253 = cljs.core.aclone.call(null,this__12252.array);

new_array__12253.push(o);
return (new cljs.core.Vector(this__12252.meta,new_array__12253));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12354 = null;
var G__12354__12355 = (function (v,f){
var this__12255 = this;
return cljs.core.ci_reduce.call(null,this__12255.array,f);
});
var G__12354__12357 = (function (v,f,start){
var this__12300 = this;
return cljs.core.ci_reduce.call(null,this__12300.array,f,start);
});
G__12354 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12354__12355.call(this,v,f);
case  3 :
return G__12354__12357.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12354;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12303 = this;
if(cljs.core.truth_((this__12303.array.length > 0)))
{var vector_seq__12309 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12303.array.length)))
{return cljs.core.cons.call(null,(this__12303.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12309.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12311 = this;
return this__12311.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12315 = this;
var count__12316 = this__12315.array.length;

if(cljs.core.truth_((count__12316 > 0)))
{return (this__12315.array[(count__12316 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12317 = this;
if(cljs.core.truth_((this__12317.array.length > 0)))
{var new_array__12318 = cljs.core.aclone.call(null,this__12317.array);

new_array__12318.pop();
return (new cljs.core.Vector(this__12317.meta,new_array__12318));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12323 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12324 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12325 = this;
return (new cljs.core.Vector(meta,this__12325.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12330 = this;
return this__12330.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12370 = null;
var G__12370__12371 = (function (coll,n){
var this__12331 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12336 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12336))
{return (n < this__12331.array.length);
} else
{return and__3546__auto____12336;
}
})()))
{return (this__12331.array[n]);
} else
{return null;
}
});
var G__12370__12372 = (function (coll,n,not_found){
var this__12337 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12338 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12338))
{return (n < this__12337.array.length);
} else
{return and__3546__auto____12338;
}
})()))
{return (this__12337.array[n]);
} else
{return not_found;
}
});
G__12370 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12370__12371.call(this,coll,n);
case  3 :
return G__12370__12372.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12370;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12339 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12339.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12500){
var args = cljs.core.seq( arglist__12500 );;
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
var this__12509 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12561 = null;
var G__12561__12562 = (function (coll,k){
var this__12511 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12561__12563 = (function (coll,k,not_found){
var this__12516 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12561 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12561__12562.call(this,coll,k);
case  3 :
return G__12561__12563.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12561;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12517 = this;
var v_pos__12519 = (this__12517.start + key);

return (new cljs.core.Subvec(this__12517.meta,cljs.core._assoc.call(null,this__12517.v,v_pos__12519,val),this__12517.start,((this__12517.end > (v_pos__12519 + 1)) ? this__12517.end : (v_pos__12519 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12569 = null;
var G__12569__12570 = (function (coll,k){
var this__12522 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12569__12571 = (function (coll,k,not_found){
var this__12523 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12569 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12569__12570.call(this,coll,k);
case  3 :
return G__12569__12571.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12569;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12526 = this;
return (new cljs.core.Subvec(this__12526.meta,cljs.core._assoc_n.call(null,this__12526.v,this__12526.end,o),this__12526.start,(this__12526.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12573 = null;
var G__12573__12574 = (function (coll,f){
var this__12528 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12573__12575 = (function (coll,f,start){
var this__12529 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12573 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12573__12574.call(this,coll,f);
case  3 :
return G__12573__12575.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12573;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12531 = this;
var subvec_seq__12534 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12531.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12531.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12534.call(null,this__12531.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12535 = this;
return (this__12535.end - this__12535.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12537 = this;
return cljs.core._nth.call(null,this__12537.v,(this__12537.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12539 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12539.start,this__12539.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12539.meta,this__12539.v,this__12539.start,(this__12539.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12541 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12543 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12545 = this;
return (new cljs.core.Subvec(meta,this__12545.v,this__12545.start,this__12545.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12547 = this;
return this__12547.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12584 = null;
var G__12584__12585 = (function (coll,n){
var this__12549 = this;
return cljs.core._nth.call(null,this__12549.v,(this__12549.start + n));
});
var G__12584__12586 = (function (coll,n,not_found){
var this__12551 = this;
return cljs.core._nth.call(null,this__12551.v,(this__12551.start + n),not_found);
});
G__12584 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12584__12585.call(this,coll,n);
case  3 :
return G__12584__12586.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12584;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12556 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12556.meta);
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
var subvec__12590 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12592 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12590.call(this,v,start);
case  3 :
return subvec__12592.call(this,v,start,end);
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
var this__12641 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12643 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12645 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12647 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12647.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12649 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12650 = this;
return cljs.core._first.call(null,this__12650.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12651 = this;
var temp__3695__auto____12652 = cljs.core.next.call(null,this__12651.front);

if(cljs.core.truth_(temp__3695__auto____12652))
{var f1__12654 = temp__3695__auto____12652;

return (new cljs.core.PersistentQueueSeq(this__12651.meta,f1__12654,this__12651.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12651.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12651.meta,this__12651.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12655 = this;
return this__12655.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12656 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12656.front,this__12656.rear));
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
var this__12661 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12664 = this;
if(cljs.core.truth_(this__12664.front))
{return (new cljs.core.PersistentQueue(this__12664.meta,(this__12664.count + 1),this__12664.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12666 = this__12664.rear;

if(cljs.core.truth_(or__3548__auto____12666))
{return or__3548__auto____12666;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12664.meta,(this__12664.count + 1),cljs.core.conj.call(null,this__12664.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12669 = this;
var rear__12670 = cljs.core.seq.call(null,this__12669.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12672 = this__12669.front;

if(cljs.core.truth_(or__3548__auto____12672))
{return or__3548__auto____12672;
} else
{return rear__12670;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12669.front,cljs.core.seq.call(null,rear__12670)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12675 = this;
return this__12675.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12676 = this;
return cljs.core._first.call(null,this__12676.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12678 = this;
if(cljs.core.truth_(this__12678.front))
{var temp__3695__auto____12680 = cljs.core.next.call(null,this__12678.front);

if(cljs.core.truth_(temp__3695__auto____12680))
{var f1__12681 = temp__3695__auto____12680;

return (new cljs.core.PersistentQueue(this__12678.meta,(this__12678.count - 1),f1__12681,this__12678.rear));
} else
{return (new cljs.core.PersistentQueue(this__12678.meta,(this__12678.count - 1),cljs.core.seq.call(null,this__12678.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12682 = this;
return cljs.core.first.call(null,this__12682.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12683 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12684 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12685 = this;
return (new cljs.core.PersistentQueue(meta,this__12685.count,this__12685.front,this__12685.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12686 = this;
return this__12686.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12687 = this;
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
var this__12740 = this;
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
var len__12754 = array.length;

var i__12755 = 0;

while(true){
if(cljs.core.truth_((i__12755 < len__12754)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12755]))))
{return i__12755;
} else
{{
var G__12760 = (i__12755 + incr);
i__12755 = G__12760;
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
var obj_map_contains_key_QMARK___12765 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12766 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12764 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12764))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12764;
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
return obj_map_contains_key_QMARK___12765.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12766.call(this,k,strobj,true_val,false_val);
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
var this__12792 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12852 = null;
var G__12852__12853 = (function (coll,k){
var this__12795 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12852__12854 = (function (coll,k,not_found){
var this__12797 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12797.strobj,(this__12797.strobj[k]),not_found);
});
G__12852 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12852__12853.call(this,coll,k);
case  3 :
return G__12852__12854.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12852;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12798 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12799 = goog.object.clone.call(null,this__12798.strobj);
var overwrite_QMARK___12800 = new_strobj__12799.hasOwnProperty(k);

(new_strobj__12799[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12800))
{return (new cljs.core.ObjMap(this__12798.meta,this__12798.keys,new_strobj__12799));
} else
{var new_keys__12801 = cljs.core.aclone.call(null,this__12798.keys);

new_keys__12801.push(k);
return (new cljs.core.ObjMap(this__12798.meta,new_keys__12801,new_strobj__12799));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12798.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12802 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12802.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12882 = null;
var G__12882__12883 = (function (coll,k){
var this__12823 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12882__12884 = (function (coll,k,not_found){
var this__12825 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12882 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12882__12883.call(this,coll,k);
case  3 :
return G__12882__12884.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12882;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12827 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12832 = this;
if(cljs.core.truth_((this__12832.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12772_SHARP_){
return cljs.core.vector.call(null,p1__12772_SHARP_,(this__12832.strobj[p1__12772_SHARP_]));
}),this__12832.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12833 = this;
return this__12833.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12835 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12837 = this;
return (new cljs.core.ObjMap(meta,this__12837.keys,this__12837.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12839 = this;
return this__12839.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12842 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12842.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12843 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12845 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12845))
{return this__12843.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12845;
}
})()))
{var new_keys__12846 = cljs.core.aclone.call(null,this__12843.keys);
var new_strobj__12847 = goog.object.clone.call(null,this__12843.strobj);

new_keys__12846.splice(cljs.core.scan_array.call(null,1,k,new_keys__12846),1);
cljs.core.js_delete.call(null,new_strobj__12847,k);
return (new cljs.core.ObjMap(this__12843.meta,new_keys__12846,new_strobj__12847));
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
var this__12929 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13025 = null;
var G__13025__13029 = (function (coll,k){
var this__12931 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13025__13030 = (function (coll,k,not_found){
var this__12943 = this;
var bucket__12944 = (this__12943.hashobj[cljs.core.hash.call(null,k)]);
var i__12945 = (cljs.core.truth_(bucket__12944)?cljs.core.scan_array.call(null,2,k,bucket__12944):null);

if(cljs.core.truth_(i__12945))
{return (bucket__12944[(i__12945 + 1)]);
} else
{return not_found;
}
});
G__13025 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13025__13029.call(this,coll,k);
case  3 :
return G__13025__13030.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13025;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12947 = this;
var h__12948 = cljs.core.hash.call(null,k);
var bucket__12949 = (this__12947.hashobj[h__12948]);

if(cljs.core.truth_(bucket__12949))
{var new_bucket__12951 = cljs.core.aclone.call(null,bucket__12949);
var new_hashobj__12952 = goog.object.clone.call(null,this__12947.hashobj);

(new_hashobj__12952[h__12948] = new_bucket__12951);
var temp__3695__auto____12955 = cljs.core.scan_array.call(null,2,k,new_bucket__12951);

if(cljs.core.truth_(temp__3695__auto____12955))
{var i__12958 = temp__3695__auto____12955;

(new_bucket__12951[(i__12958 + 1)] = v);
return (new cljs.core.HashMap(this__12947.meta,this__12947.count,new_hashobj__12952));
} else
{new_bucket__12951.push(k,v);
return (new cljs.core.HashMap(this__12947.meta,(this__12947.count + 1),new_hashobj__12952));
}
} else
{var new_hashobj__12962 = goog.object.clone.call(null,this__12947.hashobj);

(new_hashobj__12962[h__12948] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12947.meta,(this__12947.count + 1),new_hashobj__12962));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12963 = this;
var bucket__12967 = (this__12963.hashobj[cljs.core.hash.call(null,k)]);
var i__12968 = (cljs.core.truth_(bucket__12967)?cljs.core.scan_array.call(null,2,k,bucket__12967):null);

if(cljs.core.truth_(i__12968))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13041 = null;
var G__13041__13042 = (function (coll,k){
var this__12969 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13041__13043 = (function (coll,k,not_found){
var this__12970 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13041 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13041__13042.call(this,coll,k);
case  3 :
return G__13041__13043.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13041;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12971 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12973 = this;
if(cljs.core.truth_((this__12973.count > 0)))
{var hashes__12976 = cljs.core.js_keys.call(null,this__12973.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12912_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12973.hashobj[p1__12912_SHARP_])));
}),hashes__12976);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12979 = this;
return this__12979.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12982 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12986 = this;
return (new cljs.core.HashMap(meta,this__12986.count,this__12986.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12988 = this;
return this__12988.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12990 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12990.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12992 = this;
var h__12993 = cljs.core.hash.call(null,k);
var bucket__13016 = (this__12992.hashobj[h__12993]);
var i__13017 = (cljs.core.truth_(bucket__13016)?cljs.core.scan_array.call(null,2,k,bucket__13016):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13017)))
{return coll;
} else
{var new_hashobj__13019 = goog.object.clone.call(null,this__12992.hashobj);

if(cljs.core.truth_((3 > bucket__13016.length)))
{cljs.core.js_delete.call(null,new_hashobj__13019,h__12993);
} else
{var new_bucket__13022 = cljs.core.aclone.call(null,bucket__13016);

new_bucket__13022.splice(i__13017,2);
(new_hashobj__13019[h__12993] = new_bucket__13022);
}
return (new cljs.core.HashMap(this__12992.meta,(this__12992.count - 1),new_hashobj__13019));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13072 = ks.length;

var i__13073 = 0;
var out__13074 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13073 < len__13072)))
{{
var G__13090 = (i__13073 + 1);
var G__13091 = cljs.core.assoc.call(null,out__13074,(ks[i__13073]),(vs[i__13073]));
i__13073 = G__13090;
out__13074 = G__13091;
continue;
}
} else
{return out__13074;
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
var in$__13095 = cljs.core.seq.call(null,keyvals);
var out__13096 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13095))
{{
var G__13103 = cljs.core.nnext.call(null,in$__13095);
var G__13104 = cljs.core.assoc.call(null,out__13096,cljs.core.first.call(null,in$__13095),cljs.core.second.call(null,in$__13095));
in$__13095 = G__13103;
out__13096 = G__13104;
continue;
}
} else
{return out__13096;
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
hash_map.cljs$lang$applyTo = (function (arglist__13107){
var keyvals = cljs.core.seq( arglist__13107 );;
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
{return cljs.core.reduce.call(null,(function (p1__13116_SHARP_,p2__13117_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13127 = p1__13116_SHARP_;

if(cljs.core.truth_(or__3548__auto____13127))
{return or__3548__auto____13127;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13117_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13140){
var maps = cljs.core.seq( arglist__13140 );;
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
{var merge_entry__13143 = (function (m,e){
var k__13141 = cljs.core.first.call(null,e);
var v__13142 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13141)))
{return cljs.core.assoc.call(null,m,k__13141,f.call(null,cljs.core.get.call(null,m,k__13141),v__13142));
} else
{return cljs.core.assoc.call(null,m,k__13141,v__13142);
}
});
var merge2__13145 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13143,(function (){var or__3548__auto____13144 = m1;

if(cljs.core.truth_(or__3548__auto____13144))
{return or__3548__auto____13144;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13145,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13147){
var f = cljs.core.first(arglist__13147);
var maps = cljs.core.rest(arglist__13147);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13153 = cljs.core.ObjMap.fromObject([],{});
var keys__13154 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13154))
{var key__13156 = cljs.core.first.call(null,keys__13154);
var entry__13157 = cljs.core.get.call(null,map,key__13156,"﷐'user/not-found");

{
var G__13161 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13157,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13153,key__13156,entry__13157):ret__13153);
var G__13162 = cljs.core.next.call(null,keys__13154);
ret__13153 = G__13161;
keys__13154 = G__13162;
continue;
}
} else
{return ret__13153;
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
var this__13169 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13226 = null;
var G__13226__13227 = (function (coll,v){
var this__13171 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13226__13228 = (function (coll,v,not_found){
var this__13172 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13172.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13226 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13226__13227.call(this,coll,v);
case  3 :
return G__13226__13228.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13226;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13232 = null;
var G__13232__13233 = (function (coll,k){
var this__13174 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13232__13234 = (function (coll,k,not_found){
var this__13177 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13232 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13232__13233.call(this,coll,k);
case  3 :
return G__13232__13234.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13232;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13178 = this;
return (new cljs.core.Set(this__13178.meta,cljs.core.assoc.call(null,this__13178.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13204 = this;
return cljs.core.keys.call(null,this__13204.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13206 = this;
return (new cljs.core.Set(this__13206.meta,cljs.core.dissoc.call(null,this__13206.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13208 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13211 = this;
var and__3546__auto____13214 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13214))
{var and__3546__auto____13215 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13215))
{return cljs.core.every_QMARK_.call(null,(function (p1__13148_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13148_SHARP_);
}),other);
} else
{return and__3546__auto____13215;
}
} else
{return and__3546__auto____13214;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13218 = this;
return (new cljs.core.Set(meta,this__13218.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13220 = this;
return this__13220.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13222 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13222.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13335 = cljs.core.seq.call(null,coll);
var out__13336 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13335))))
{{
var G__13342 = cljs.core.rest.call(null,in$__13335);
var G__13343 = cljs.core.conj.call(null,out__13336,cljs.core.first.call(null,in$__13335));
in$__13335 = G__13342;
out__13336 = G__13343;
continue;
}
} else
{return out__13336;
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
{var n__13350 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13351 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13351))
{var e__13352 = temp__3695__auto____13351;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13352));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13350,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13297_SHARP_){
var temp__3695__auto____13353 = cljs.core.find.call(null,smap,p1__13297_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13353))
{var e__13354 = temp__3695__auto____13353;

return cljs.core.second.call(null,e__13354);
} else
{return p1__13297_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13506 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13497,seen){
while(true){
var vec__13498__13500 = p__13497;
var f__13501 = cljs.core.nth.call(null,vec__13498__13500,0,null);
var xs__13502 = vec__13498__13500;

var temp__3698__auto____13503 = cljs.core.seq.call(null,xs__13502);

if(cljs.core.truth_(temp__3698__auto____13503))
{var s__13504 = temp__3698__auto____13503;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13501)))
{{
var G__13511 = cljs.core.rest.call(null,s__13504);
var G__13512 = seen;
p__13497 = G__13511;
seen = G__13512;
continue;
}
} else
{return cljs.core.cons.call(null,f__13501,step.call(null,cljs.core.rest.call(null,s__13504),cljs.core.conj.call(null,seen,f__13501)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13506.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13518 = cljs.core.Vector.fromArray([]);
var s__13519 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13519)))
{{
var G__13521 = cljs.core.conj.call(null,ret__13518,cljs.core.first.call(null,s__13519));
var G__13522 = cljs.core.next.call(null,s__13519);
ret__13518 = G__13521;
s__13519 = G__13522;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13518);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13523 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13523))
{return or__3548__auto____13523;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13524 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13524 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13524 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13536 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13536))
{return or__3548__auto____13536;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13538 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13538 > -1)))
{return cljs.core.subs.call(null,x,2,i__13538);
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
var map__13550 = cljs.core.ObjMap.fromObject([],{});
var ks__13551 = cljs.core.seq.call(null,keys);
var vs__13552 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13553 = ks__13551;

if(cljs.core.truth_(and__3546__auto____13553))
{return vs__13552;
} else
{return and__3546__auto____13553;
}
})()))
{{
var G__13721 = cljs.core.assoc.call(null,map__13550,cljs.core.first.call(null,ks__13551),cljs.core.first.call(null,vs__13552));
var G__13722 = cljs.core.next.call(null,ks__13551);
var G__13723 = cljs.core.next.call(null,vs__13552);
map__13550 = G__13721;
ks__13551 = G__13722;
vs__13552 = G__13723;
continue;
}
} else
{return map__13550;
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
var max_key__13730 = (function (k,x){
return x;
});
var max_key__13731 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13732 = (function() { 
var G__13734__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13547_SHARP_,p2__13548_SHARP_){
return max_key.call(null,k,p1__13547_SHARP_,p2__13548_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13734 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13734__delegate.call(this, k, x, y, more);
};
G__13734.cljs$lang$maxFixedArity = 3;
G__13734.cljs$lang$applyTo = (function (arglist__13735){
var k = cljs.core.first(arglist__13735);
var x = cljs.core.first(cljs.core.next(arglist__13735));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13735)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13735)));
return G__13734__delegate.call(this, k, x, y, more);
});
return G__13734;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13730.call(this,k,x);
case  3 :
return max_key__13731.call(this,k,x,y);
default:
return max_key__13732.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13732.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13740 = (function (k,x){
return x;
});
var min_key__13741 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13742 = (function() { 
var G__13744__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13724_SHARP_,p2__13725_SHARP_){
return min_key.call(null,k,p1__13724_SHARP_,p2__13725_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13744 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13744__delegate.call(this, k, x, y, more);
};
G__13744.cljs$lang$maxFixedArity = 3;
G__13744.cljs$lang$applyTo = (function (arglist__13745){
var k = cljs.core.first(arglist__13745);
var x = cljs.core.first(cljs.core.next(arglist__13745));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13745)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13745)));
return G__13744__delegate.call(this, k, x, y, more);
});
return G__13744;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13740.call(this,k,x);
case  3 :
return min_key__13741.call(this,k,x,y);
default:
return min_key__13742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13742.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13753 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13754 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13746 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13746))
{var s__13748 = temp__3698__auto____13746;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13748),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13748)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13753.call(this,n,step);
case  3 :
return partition_all__13754.call(this,n,step,coll);
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
var temp__3698__auto____13762 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13762))
{var s__13763 = temp__3698__auto____13762;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13763))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13763),take_while.call(null,pred,cljs.core.rest.call(null,s__13763)));
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
var this__13768 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13770 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13809 = null;
var G__13809__13811 = (function (rng,f){
var this__13775 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13809__13812 = (function (rng,f,s){
var this__13777 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13809 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13809__13811.call(this,rng,f);
case  3 :
return G__13809__13812.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13809;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13779 = this;
var comp__13781 = (cljs.core.truth_((this__13779.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13781.call(null,this__13779.start,this__13779.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13782 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13782.end - this__13782.start) / this__13782.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13783 = this;
return this__13783.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13786 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13786.meta,(this__13786.start + this__13786.step),this__13786.end,this__13786.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13787 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13788 = this;
return (new cljs.core.Range(meta,this__13788.start,this__13788.end,this__13788.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13791 = this;
return this__13791.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13826 = null;
var G__13826__13827 = (function (rng,n){
var this__13794 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13794.start + (n * this__13794.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13795 = (this__13794.start > this__13794.end);

if(cljs.core.truth_(and__3546__auto____13795))
{return cljs.core._EQ_.call(null,this__13794.step,0);
} else
{return and__3546__auto____13795;
}
})()))
{return this__13794.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13826__13828 = (function (rng,n,not_found){
var this__13796 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13796.start + (n * this__13796.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13799 = (this__13796.start > this__13796.end);

if(cljs.core.truth_(and__3546__auto____13799))
{return cljs.core._EQ_.call(null,this__13796.step,0);
} else
{return and__3546__auto____13799;
}
})()))
{return this__13796.start;
} else
{return not_found;
}
}
});
G__13826 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13826__13827.call(this,rng,n);
case  3 :
return G__13826__13828.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13826;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13800 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13800.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13841 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13842 = (function (end){
return range.call(null,0,end,1);
});
var range__13843 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13844 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13841.call(this);
case  1 :
return range__13842.call(this,start);
case  2 :
return range__13843.call(this,start,end);
case  3 :
return range__13844.call(this,start,end,step);
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
var temp__3698__auto____13851 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13851))
{var s__13853 = temp__3698__auto____13851;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13853),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13853)));
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
var temp__3698__auto____13889 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13889))
{var s__13890 = temp__3698__auto____13889;

var fst__13891 = cljs.core.first.call(null,s__13890);
var fv__13892 = f.call(null,fst__13891);
var run__13901 = cljs.core.cons.call(null,fst__13891,cljs.core.take_while.call(null,(function (p1__13872_SHARP_){
return cljs.core._EQ_.call(null,fv__13892,f.call(null,p1__13872_SHARP_));
}),cljs.core.next.call(null,s__13890)));

return cljs.core.cons.call(null,run__13901,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13901),s__13890))));
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
var reductions__13991 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13967 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13967))
{var s__13970 = temp__3695__auto____13967;

return reductions.call(null,f,cljs.core.first.call(null,s__13970),cljs.core.rest.call(null,s__13970));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13992 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13982 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13982))
{var s__13983 = temp__3698__auto____13982;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13983)),cljs.core.rest.call(null,s__13983));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13991.call(this,f,init);
case  3 :
return reductions__13992.call(this,f,init,coll);
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
var juxt__14032 = (function (f){
return (function() {
var G__14038 = null;
var G__14038__14039 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14038__14040 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14038__14041 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14038__14042 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14038__14043 = (function() { 
var G__14047__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14047 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14047__delegate.call(this, x, y, z, args);
};
G__14047.cljs$lang$maxFixedArity = 3;
G__14047.cljs$lang$applyTo = (function (arglist__14049){
var x = cljs.core.first(arglist__14049);
var y = cljs.core.first(cljs.core.next(arglist__14049));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14049)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14049)));
return G__14047__delegate.call(this, x, y, z, args);
});
return G__14047;
})()
;
G__14038 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14038__14039.call(this);
case  1 :
return G__14038__14040.call(this,x);
case  2 :
return G__14038__14041.call(this,x,y);
case  3 :
return G__14038__14042.call(this,x,y,z);
default:
return G__14038__14043.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14038.cljs$lang$maxFixedArity = 3;
G__14038.cljs$lang$applyTo = G__14038__14043.cljs$lang$applyTo;
return G__14038;
})()
});
var juxt__14033 = (function (f,g){
return (function() {
var G__14061 = null;
var G__14061__14062 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14061__14063 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14061__14064 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14061__14065 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14061__14066 = (function() { 
var G__14071__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14071 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14071__delegate.call(this, x, y, z, args);
};
G__14071.cljs$lang$maxFixedArity = 3;
G__14071.cljs$lang$applyTo = (function (arglist__14074){
var x = cljs.core.first(arglist__14074);
var y = cljs.core.first(cljs.core.next(arglist__14074));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14074)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14074)));
return G__14071__delegate.call(this, x, y, z, args);
});
return G__14071;
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
var juxt__14034 = (function (f,g,h){
return (function() {
var G__14077 = null;
var G__14077__14078 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14077__14079 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14077__14080 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14077__14081 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14077__14082 = (function() { 
var G__14086__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14086 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14086__delegate.call(this, x, y, z, args);
};
G__14086.cljs$lang$maxFixedArity = 3;
G__14086.cljs$lang$applyTo = (function (arglist__14097){
var x = cljs.core.first(arglist__14097);
var y = cljs.core.first(cljs.core.next(arglist__14097));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14097)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14097)));
return G__14086__delegate.call(this, x, y, z, args);
});
return G__14086;
})()
;
G__14077 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14077__14078.call(this);
case  1 :
return G__14077__14079.call(this,x);
case  2 :
return G__14077__14080.call(this,x,y);
case  3 :
return G__14077__14081.call(this,x,y,z);
default:
return G__14077__14082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14077.cljs$lang$maxFixedArity = 3;
G__14077.cljs$lang$applyTo = G__14077__14082.cljs$lang$applyTo;
return G__14077;
})()
});
var juxt__14035 = (function() { 
var G__14106__delegate = function (f,g,h,fs){
var fs__14020 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14107 = null;
var G__14107__14108 = (function (){
return cljs.core.reduce.call(null,(function (p1__13946_SHARP_,p2__13947_SHARP_){
return cljs.core.conj.call(null,p1__13946_SHARP_,p2__13947_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14020);
});
var G__14107__14109 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13949_SHARP_,p2__13951_SHARP_){
return cljs.core.conj.call(null,p1__13949_SHARP_,p2__13951_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14020);
});
var G__14107__14110 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13952_SHARP_,p2__13954_SHARP_){
return cljs.core.conj.call(null,p1__13952_SHARP_,p2__13954_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14020);
});
var G__14107__14111 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13957_SHARP_,p2__13960_SHARP_){
return cljs.core.conj.call(null,p1__13957_SHARP_,p2__13960_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14020);
});
var G__14107__14112 = (function() { 
var G__14128__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13965_SHARP_,p2__13966_SHARP_){
return cljs.core.conj.call(null,p1__13965_SHARP_,cljs.core.apply.call(null,p2__13966_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14020);
};
var G__14128 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14128__delegate.call(this, x, y, z, args);
};
G__14128.cljs$lang$maxFixedArity = 3;
G__14128.cljs$lang$applyTo = (function (arglist__14135){
var x = cljs.core.first(arglist__14135);
var y = cljs.core.first(cljs.core.next(arglist__14135));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14135)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14135)));
return G__14128__delegate.call(this, x, y, z, args);
});
return G__14128;
})()
;
G__14107 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14107__14108.call(this);
case  1 :
return G__14107__14109.call(this,x);
case  2 :
return G__14107__14110.call(this,x,y);
case  3 :
return G__14107__14111.call(this,x,y,z);
default:
return G__14107__14112.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14107.cljs$lang$maxFixedArity = 3;
G__14107.cljs$lang$applyTo = G__14107__14112.cljs$lang$applyTo;
return G__14107;
})()
};
var G__14106 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14106__delegate.call(this, f, g, h, fs);
};
G__14106.cljs$lang$maxFixedArity = 3;
G__14106.cljs$lang$applyTo = (function (arglist__14138){
var f = cljs.core.first(arglist__14138);
var g = cljs.core.first(cljs.core.next(arglist__14138));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14138)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14138)));
return G__14106__delegate.call(this, f, g, h, fs);
});
return G__14106;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14032.call(this,f);
case  2 :
return juxt__14033.call(this,f,g);
case  3 :
return juxt__14034.call(this,f,g,h);
default:
return juxt__14035.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14035.cljs$lang$applyTo;
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
var dorun__14150 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14154 = cljs.core.next.call(null,coll);
coll = G__14154;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14151 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14147 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14147))
{return (n > 0);
} else
{return and__3546__auto____14147;
}
})()))
{{
var G__14156 = (n - 1);
var G__14157 = cljs.core.next.call(null,coll);
n = G__14156;
coll = G__14157;
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
return dorun__14150.call(this,n);
case  2 :
return dorun__14151.call(this,n,coll);
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
var doall__14163 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14164 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14163.call(this,n);
case  2 :
return doall__14164.call(this,n,coll);
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
var matches__14167 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14167),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14167),1)))
{return cljs.core.first.call(null,matches__14167);
} else
{return cljs.core.vec.call(null,matches__14167);
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
var matches__14173 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14173)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14173),1)))
{return cljs.core.first.call(null,matches__14173);
} else
{return cljs.core.vec.call(null,matches__14173);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14177 = cljs.core.re_find.call(null,re,s);
var match_idx__14178 = s.search(re);
var match_str__14180 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14177))?cljs.core.first.call(null,match_data__14177):match_data__14177);
var post_match__14181 = cljs.core.subs.call(null,s,(match_idx__14178 + cljs.core.count.call(null,match_str__14180)));

if(cljs.core.truth_(match_data__14177))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14177,re_seq.call(null,re,post_match__14181));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14188_SHARP_){
return print_one.call(null,p1__14188_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14218 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14218))
{var and__3546__auto____14238 = (function (){var x__445__auto____14221 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14225 = x__445__auto____14221;

if(cljs.core.truth_(and__3546__auto____14225))
{var and__3546__auto____14231 = x__445__auto____14221.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14231))
{return cljs.core.not.call(null,x__445__auto____14221.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14231;
}
} else
{return and__3546__auto____14225;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14221);
}
})();

if(cljs.core.truth_(and__3546__auto____14238))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14238;
}
} else
{return and__3546__auto____14218;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14253 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14254 = x__445__auto____14253;

if(cljs.core.truth_(and__3546__auto____14254))
{var and__3546__auto____14256 = x__445__auto____14253.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14256))
{return cljs.core.not.call(null,x__445__auto____14253.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14256;
}
} else
{return and__3546__auto____14254;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14253);
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
var first_obj__14282 = cljs.core.first.call(null,objs);
var sb__14283 = (new goog.string.StringBuffer());

var G__14284__14285 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14284__14285))
{var obj__14286 = cljs.core.first.call(null,G__14284__14285);
var G__14284__14287 = G__14284__14285;

while(true){
if(cljs.core.truth_((obj__14286 === first_obj__14282)))
{} else
{sb__14283.append(" ");
}
var G__14289__14292 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14286,opts));

if(cljs.core.truth_(G__14289__14292))
{var string__14293 = cljs.core.first.call(null,G__14289__14292);
var G__14289__14296 = G__14289__14292;

while(true){
sb__14283.append(string__14293);
var temp__3698__auto____14299 = cljs.core.next.call(null,G__14289__14296);

if(cljs.core.truth_(temp__3698__auto____14299))
{var G__14289__14300 = temp__3698__auto____14299;

{
var G__14328 = cljs.core.first.call(null,G__14289__14300);
var G__14329 = G__14289__14300;
string__14293 = G__14328;
G__14289__14296 = G__14329;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14310 = cljs.core.next.call(null,G__14284__14287);

if(cljs.core.truth_(temp__3698__auto____14310))
{var G__14284__14313 = temp__3698__auto____14310;

{
var G__14334 = cljs.core.first.call(null,G__14284__14313);
var G__14336 = G__14284__14313;
obj__14286 = G__14334;
G__14284__14287 = G__14336;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14283);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14348 = cljs.core.first.call(null,objs);

var G__14349__14350 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14349__14350))
{var obj__14354 = cljs.core.first.call(null,G__14349__14350);
var G__14349__14355 = G__14349__14350;

while(true){
if(cljs.core.truth_((obj__14354 === first_obj__14348)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14361__14363 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14354,opts));

if(cljs.core.truth_(G__14361__14363))
{var string__14365 = cljs.core.first.call(null,G__14361__14363);
var G__14361__14367 = G__14361__14363;

while(true){
cljs.core.string_print.call(null,string__14365);
var temp__3698__auto____14374 = cljs.core.next.call(null,G__14361__14367);

if(cljs.core.truth_(temp__3698__auto____14374))
{var G__14361__14378 = temp__3698__auto____14374;

{
var G__14396 = cljs.core.first.call(null,G__14361__14378);
var G__14397 = G__14361__14378;
string__14365 = G__14396;
G__14361__14367 = G__14397;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14381 = cljs.core.next.call(null,G__14349__14355);

if(cljs.core.truth_(temp__3698__auto____14381))
{var G__14349__14383 = temp__3698__auto____14381;

{
var G__14398 = cljs.core.first.call(null,G__14349__14383);
var G__14399 = G__14349__14383;
obj__14354 = G__14398;
G__14349__14355 = G__14399;
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
pr_str.cljs$lang$applyTo = (function (arglist__14418){
var objs = cljs.core.seq( arglist__14418 );;
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
pr.cljs$lang$applyTo = (function (arglist__14422){
var objs = cljs.core.seq( arglist__14422 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14425){
var objs = cljs.core.seq( arglist__14425 );;
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
println.cljs$lang$applyTo = (function (arglist__14432){
var objs = cljs.core.seq( arglist__14432 );;
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
prn.cljs$lang$applyTo = (function (arglist__14461){
var objs = cljs.core.seq( arglist__14461 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14466 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14466,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14485 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14485))
{var nspc__14486 = temp__3698__auto____14485;

return cljs.core.str.call(null,nspc__14486,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14490 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14490))
{var nspc__14491 = temp__3698__auto____14490;

return cljs.core.str.call(null,nspc__14491,"/");
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
var pr_pair__14559 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14559,"{",", ","}",opts,coll);
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
var this__14633 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14637 = this;
var G__14639__14643 = cljs.core.seq.call(null,this__14637.watches);

if(cljs.core.truth_(G__14639__14643))
{var G__14647__14650 = cljs.core.first.call(null,G__14639__14643);
var vec__14649__14651 = G__14647__14650;
var key__14652 = cljs.core.nth.call(null,vec__14649__14651,0,null);
var f__14653 = cljs.core.nth.call(null,vec__14649__14651,1,null);
var G__14639__14654 = G__14639__14643;

var G__14647__14655 = G__14647__14650;
var G__14639__14656 = G__14639__14654;

while(true){
var vec__14657__14658 = G__14647__14655;
var key__14659 = cljs.core.nth.call(null,vec__14657__14658,0,null);
var f__14660 = cljs.core.nth.call(null,vec__14657__14658,1,null);
var G__14639__14661 = G__14639__14656;

f__14660.call(null,key__14659,this$,oldval,newval);
var temp__3698__auto____14662 = cljs.core.next.call(null,G__14639__14661);

if(cljs.core.truth_(temp__3698__auto____14662))
{var G__14639__14664 = temp__3698__auto____14662;

{
var G__14688 = cljs.core.first.call(null,G__14639__14664);
var G__14689 = G__14639__14664;
G__14647__14655 = G__14688;
G__14639__14656 = G__14689;
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
var this__14668 = this;
return this$.watches = cljs.core.assoc.call(null,this__14668.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14675 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14675.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14677 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14677.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14679 = this;
return this__14679.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14681 = this;
return this__14681.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14684 = this;
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
var atom__14714 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14715 = (function() { 
var G__14717__delegate = function (x,p__14698){
var map__14699__14701 = p__14698;
var map__14699__14703 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14699__14701))?cljs.core.apply.call(null,cljs.core.hash_map,map__14699__14701):map__14699__14701);
var validator__14705 = cljs.core.get.call(null,map__14699__14703,"﷐'validator");
var meta__14706 = cljs.core.get.call(null,map__14699__14703,"﷐'meta");

return (new cljs.core.Atom(x,meta__14706,validator__14705,null));
};
var G__14717 = function (x,var_args){
var p__14698 = null;
if (goog.isDef(var_args)) {
  p__14698 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14717__delegate.call(this, x, p__14698);
};
G__14717.cljs$lang$maxFixedArity = 1;
G__14717.cljs$lang$applyTo = (function (arglist__14718){
var x = cljs.core.first(arglist__14718);
var p__14698 = cljs.core.rest(arglist__14718);
return G__14717__delegate.call(this, x, p__14698);
});
return G__14717;
})()
;
atom = function(x,var_args){
var p__14698 = var_args;
switch(arguments.length){
case  1 :
return atom__14714.call(this,x);
default:
return atom__14715.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14715.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14726 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14726))
{var validate__14728 = temp__3698__auto____14726;

if(cljs.core.truth_(validate__14728.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14729 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14729,new_value);
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
var swap_BANG___14739 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14740 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14741 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14742 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14743 = (function() { 
var G__14745__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14745 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14745__delegate.call(this, a, f, x, y, z, more);
};
G__14745.cljs$lang$maxFixedArity = 5;
G__14745.cljs$lang$applyTo = (function (arglist__14747){
var a = cljs.core.first(arglist__14747);
var f = cljs.core.first(cljs.core.next(arglist__14747));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14747)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14747))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14747)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14747)))));
return G__14745__delegate.call(this, a, f, x, y, z, more);
});
return G__14745;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14739.call(this,a,f);
case  3 :
return swap_BANG___14740.call(this,a,f,x);
case  4 :
return swap_BANG___14741.call(this,a,f,x,y);
case  5 :
return swap_BANG___14742.call(this,a,f,x,y,z);
default:
return swap_BANG___14743.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14743.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14755){
var iref = cljs.core.first(arglist__14755);
var f = cljs.core.first(cljs.core.next(arglist__14755));
var args = cljs.core.rest(cljs.core.next(arglist__14755));
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
var gensym__14776 = (function (){
return gensym.call(null,"G__");
});
var gensym__14777 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14776.call(this);
case  1 :
return gensym__14777.call(this,prefix_string);
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
var this__14799 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14799.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14802 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14802.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14802.state,this__14802.f);
}
return cljs.core.deref.call(null,this__14802.state);
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
delay.cljs$lang$applyTo = (function (arglist__14829){
var body = cljs.core.seq( arglist__14829 );;
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
var map__14838__14840 = options;
var map__14838__14841 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14838__14840))?cljs.core.apply.call(null,cljs.core.hash_map,map__14838__14840):map__14838__14840);
var keywordize_keys__14842 = cljs.core.get.call(null,map__14838__14841,"﷐'keywordize-keys");
var keyfn__14843 = (cljs.core.truth_(keywordize_keys__14842)?cljs.core.keyword:cljs.core.str);
var f__14872 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14870 = (function iter__14848(s__14849){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14849__14855 = s__14849;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14849__14855)))
{var k__14862 = cljs.core.first.call(null,s__14849__14855);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14843.call(null,k__14862),thisfn.call(null,(x[k__14862]))]),iter__14848.call(null,cljs.core.rest.call(null,s__14849__14855)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14870.call(null,cljs.core.js_keys.call(null,x));
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

return f__14872.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14886){
var x = cljs.core.first(arglist__14886);
var options = cljs.core.rest(arglist__14886);
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
var mem__14890 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14899__delegate = function (args){
var temp__3695__auto____14891 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14890),args);

if(cljs.core.truth_(temp__3695__auto____14891))
{var v__14894 = temp__3695__auto____14891;

return v__14894;
} else
{var ret__14895 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14890,cljs.core.assoc,args,ret__14895);
return ret__14895;
}
};
var G__14899 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14899__delegate.call(this, args);
};
G__14899.cljs$lang$maxFixedArity = 0;
G__14899.cljs$lang$applyTo = (function (arglist__14900){
var args = cljs.core.seq( arglist__14900 );;
return G__14899__delegate.call(this, args);
});
return G__14899;
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
var trampoline__14956 = (function (f){
while(true){
var ret__14951 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14951)))
{{
var G__14959 = ret__14951;
f = G__14959;
continue;
}
} else
{return ret__14951;
}
break;
}
});
var trampoline__14957 = (function() { 
var G__14961__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14961 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14961__delegate.call(this, f, args);
};
G__14961.cljs$lang$maxFixedArity = 1;
G__14961.cljs$lang$applyTo = (function (arglist__14965){
var f = cljs.core.first(arglist__14965);
var args = cljs.core.rest(arglist__14965);
return G__14961__delegate.call(this, f, args);
});
return G__14961;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14956.call(this,f);
default:
return trampoline__14957.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14957.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14967 = (function (){
return rand.call(null,1);
});
var rand__14968 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14967.call(this);
case  1 :
return rand__14968.call(this,n);
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
var k__14975 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14975,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14975,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14994 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14995 = (function (h,child,parent){
var or__3548__auto____14983 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14983))
{return or__3548__auto____14983;
} else
{var or__3548__auto____14984 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14984))
{return or__3548__auto____14984;
} else
{var and__3546__auto____14985 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14985))
{var and__3546__auto____14987 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14987))
{var and__3546__auto____14990 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14990))
{var ret__14991 = true;
var i__14992 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14993 = cljs.core.not.call(null,ret__14991);

if(cljs.core.truth_(or__3548__auto____14993))
{return or__3548__auto____14993;
} else
{return cljs.core._EQ_.call(null,i__14992,cljs.core.count.call(null,parent));
}
})()))
{return ret__14991;
} else
{{
var G__15007 = isa_QMARK_.call(null,h,child.call(null,i__14992),parent.call(null,i__14992));
var G__15009 = (i__14992 + 1);
ret__14991 = G__15007;
i__14992 = G__15009;
continue;
}
}
break;
}
} else
{return and__3546__auto____14990;
}
} else
{return and__3546__auto____14987;
}
} else
{return and__3546__auto____14985;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14994.call(this,h,child);
case  3 :
return isa_QMARK___14995.call(this,h,child,parent);
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
var parents__15015 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15016 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15015.call(this,h);
case  2 :
return parents__15016.call(this,h,tag);
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
var ancestors__15021 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15022 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15021.call(this,h);
case  2 :
return ancestors__15022.call(this,h,tag);
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
var descendants__15181 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15190 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15181.call(this,h);
case  2 :
return descendants__15190.call(this,h,tag);
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
var derive__15212 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15213 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15206 = "﷐'parents".call(null,h);
var td__15207 = "﷐'descendants".call(null,h);
var ta__15208 = "﷐'ancestors".call(null,h);
var tf__15209 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15211 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15206.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15208.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15208.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15206,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15209.call(null,"﷐'ancestors".call(null,h),tag,td__15207,parent,ta__15208),"﷐'descendants":tf__15209.call(null,"﷐'descendants".call(null,h),parent,ta__15208,tag,td__15207)});
})());

if(cljs.core.truth_(or__3548__auto____15211))
{return or__3548__auto____15211;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15212.call(this,h,tag);
case  3 :
return derive__15213.call(this,h,tag,parent);
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
var underive__15250 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15251 = (function (h,tag,parent){
var parentMap__15215 = "﷐'parents".call(null,h);
var childsParents__15217 = (cljs.core.truth_(parentMap__15215.call(null,tag))?cljs.core.disj.call(null,parentMap__15215.call(null,tag),parent):cljs.core.set([]));
var newParents__15219 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15217))?cljs.core.assoc.call(null,parentMap__15215,tag,childsParents__15217):cljs.core.dissoc.call(null,parentMap__15215,tag));
var deriv_seq__15248 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15203_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15203_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15203_SHARP_),cljs.core.second.call(null,p1__15203_SHARP_)));
}),cljs.core.seq.call(null,newParents__15219)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15215.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15204_SHARP_,p2__15205_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15204_SHARP_,p2__15205_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15248));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15250.call(this,h,tag);
case  3 :
return underive__15251.call(this,h,tag,parent);
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

var or__3548__auto____15262 = (cljs.core.truth_((function (){var and__3546__auto____15261 = xprefs__15259;

if(cljs.core.truth_(and__3546__auto____15261))
{return xprefs__15259.call(null,y);
} else
{return and__3546__auto____15261;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15262))
{return or__3548__auto____15262;
} else
{var or__3548__auto____15268 = (function (){var ps__15265 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15265) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15265),prefer_table)))
{} else
{}
{
var G__15275 = cljs.core.rest.call(null,ps__15265);
ps__15265 = G__15275;
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
{var or__3548__auto____15271 = (function (){var ps__15270 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15270) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15270),y,prefer_table)))
{} else
{}
{
var G__15278 = cljs.core.rest.call(null,ps__15270);
ps__15270 = G__15278;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15271))
{return or__3548__auto____15271;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15285 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15285))
{return or__3548__auto____15285;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15294 = cljs.core.reduce.call(null,(function (be,p__15286){
var vec__15287__15288 = p__15286;
var k__15289 = cljs.core.nth.call(null,vec__15287__15288,0,null);
var ___15290 = cljs.core.nth.call(null,vec__15287__15288,1,null);
var e__15291 = vec__15287__15288;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15289)))
{var be2__15293 = (cljs.core.truth_((function (){var or__3548__auto____15292 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15292))
{return or__3548__auto____15292;
} else
{return cljs.core.dominates.call(null,k__15289,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15291:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15293),k__15289,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15289," and ",cljs.core.first.call(null,be2__15293),", and neither is preferred")));
}
return be2__15293;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15294))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15294));
return cljs.core.second.call(null,best_entry__15294);
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
if(cljs.core.truth_((function (){var and__3546__auto____15295 = mf;

if(cljs.core.truth_(and__3546__auto____15295))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15295;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15296 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15296))
{return or__3548__auto____15296;
} else
{var or__3548__auto____15297 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15297))
{return or__3548__auto____15297;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15298 = mf;

if(cljs.core.truth_(and__3546__auto____15298))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15298;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15299 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15299))
{return or__3548__auto____15299;
} else
{var or__3548__auto____15300 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15300))
{return or__3548__auto____15300;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15301 = mf;

if(cljs.core.truth_(and__3546__auto____15301))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15301;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15302 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15302))
{return or__3548__auto____15302;
} else
{var or__3548__auto____15303 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15303))
{return or__3548__auto____15303;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15304 = mf;

if(cljs.core.truth_(and__3546__auto____15304))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15304;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15305 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15305))
{return or__3548__auto____15305;
} else
{var or__3548__auto____15306 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15306))
{return or__3548__auto____15306;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15307 = mf;

if(cljs.core.truth_(and__3546__auto____15307))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15307;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15308 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15308))
{return or__3548__auto____15308;
} else
{var or__3548__auto____15309 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15309))
{return or__3548__auto____15309;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15310 = mf;

if(cljs.core.truth_(and__3546__auto____15310))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15310;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15312 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15312))
{return or__3548__auto____15312;
} else
{var or__3548__auto____15313 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15313))
{return or__3548__auto____15313;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15315 = mf;

if(cljs.core.truth_(and__3546__auto____15315))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15315;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15316 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15316))
{return or__3548__auto____15316;
} else
{var or__3548__auto____15317 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15317))
{return or__3548__auto____15317;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15318 = mf;

if(cljs.core.truth_(and__3546__auto____15318))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15318;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15319 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15319))
{return or__3548__auto____15319;
} else
{var or__3548__auto____15320 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15320))
{return or__3548__auto____15320;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15328 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15330 = cljs.core._get_method.call(null,mf,dispatch_val__15328);

if(cljs.core.truth_(target_fn__15330))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15328)));
}
return cljs.core.apply.call(null,target_fn__15330,args);
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
var this__15344 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15346 = this;
cljs.core.swap_BANG_.call(null,this__15346.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15346.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15346.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15346.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15351 = this;
cljs.core.swap_BANG_.call(null,this__15351.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15351.method_cache,this__15351.method_table,this__15351.cached_hierarchy,this__15351.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15352 = this;
cljs.core.swap_BANG_.call(null,this__15352.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15352.method_cache,this__15352.method_table,this__15352.cached_hierarchy,this__15352.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15353 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15353.cached_hierarchy),cljs.core.deref.call(null,this__15353.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15353.method_cache,this__15353.method_table,this__15353.cached_hierarchy,this__15353.hierarchy);
}
var temp__3695__auto____15354 = cljs.core.deref.call(null,this__15353.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15354))
{var target_fn__15355 = temp__3695__auto____15354;

return target_fn__15355;
} else
{var temp__3695__auto____15356 = cljs.core.find_and_cache_best_method.call(null,this__15353.name,dispatch_val,this__15353.hierarchy,this__15353.method_table,this__15353.prefer_table,this__15353.method_cache,this__15353.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15356))
{var target_fn__15357 = temp__3695__auto____15356;

return target_fn__15357;
} else
{return cljs.core.deref.call(null,this__15353.method_table).call(null,this__15353.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15358 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15358.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15358.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15358.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15358.method_cache,this__15358.method_table,this__15358.cached_hierarchy,this__15358.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15361 = this;
return cljs.core.deref.call(null,this__15361.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15364 = this;
return cljs.core.deref.call(null,this__15364.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15366 = this;
return cljs.core.do_dispatch.call(null,mf,this__15366.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15382__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15382 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15382__delegate.call(this, _, args);
};
G__15382.cljs$lang$maxFixedArity = 1;
G__15382.cljs$lang$applyTo = (function (arglist__15385){
var _ = cljs.core.first(arglist__15385);
var args = cljs.core.rest(arglist__15385);
return G__15382__delegate.call(this, _, args);
});
return G__15382;
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
