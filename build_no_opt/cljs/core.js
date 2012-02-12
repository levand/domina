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
var or__3548__auto____6345 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____6345))
{return or__3548__auto____6345;
} else
{var or__3548__auto____6348 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____6348))
{return or__3548__auto____6348;
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
var _invoke__6744 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____6354 = this$;

if(cljs.core.truth_(and__3546__auto____6354))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6354;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____6356 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6356))
{return or__3548__auto____6356;
} else
{var or__3548__auto____6358 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6358))
{return or__3548__auto____6358;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__6745 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____6361 = this$;

if(cljs.core.truth_(and__3546__auto____6361))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6361;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____6365 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6365))
{return or__3548__auto____6365;
} else
{var or__3548__auto____6366 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6366))
{return or__3548__auto____6366;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__6774 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____6370 = this$;

if(cljs.core.truth_(and__3546__auto____6370))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6370;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____6373 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6373))
{return or__3548__auto____6373;
} else
{var or__3548__auto____6375 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6375))
{return or__3548__auto____6375;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__6775 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____6379 = this$;

if(cljs.core.truth_(and__3546__auto____6379))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6379;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____6382 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6382))
{return or__3548__auto____6382;
} else
{var or__3548__auto____6384 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6384))
{return or__3548__auto____6384;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__6776 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____6388 = this$;

if(cljs.core.truth_(and__3546__auto____6388))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6388;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____6391 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6391))
{return or__3548__auto____6391;
} else
{var or__3548__auto____6393 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6393))
{return or__3548__auto____6393;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6777 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____6397 = this$;

if(cljs.core.truth_(and__3546__auto____6397))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6397;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____6400 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6400))
{return or__3548__auto____6400;
} else
{var or__3548__auto____6402 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6402))
{return or__3548__auto____6402;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__6778 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____6411 = this$;

if(cljs.core.truth_(and__3546__auto____6411))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6411;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____6414 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6414))
{return or__3548__auto____6414;
} else
{var or__3548__auto____6416 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6416))
{return or__3548__auto____6416;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__6779 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____6419 = this$;

if(cljs.core.truth_(and__3546__auto____6419))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6419;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____6423 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6423))
{return or__3548__auto____6423;
} else
{var or__3548__auto____6425 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6425))
{return or__3548__auto____6425;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__6780 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____6428 = this$;

if(cljs.core.truth_(and__3546__auto____6428))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6428;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____6432 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6432))
{return or__3548__auto____6432;
} else
{var or__3548__auto____6433 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6433))
{return or__3548__auto____6433;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__6781 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____6437 = this$;

if(cljs.core.truth_(and__3546__auto____6437))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6437;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____6441 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6441))
{return or__3548__auto____6441;
} else
{var or__3548__auto____6442 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6442))
{return or__3548__auto____6442;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__6782 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____6446 = this$;

if(cljs.core.truth_(and__3546__auto____6446))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6446;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____6451 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6451))
{return or__3548__auto____6451;
} else
{var or__3548__auto____6453 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6453))
{return or__3548__auto____6453;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__6783 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____6459 = this$;

if(cljs.core.truth_(and__3546__auto____6459))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6459;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____6464 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6464))
{return or__3548__auto____6464;
} else
{var or__3548__auto____6466 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6466))
{return or__3548__auto____6466;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__6784 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____6471 = this$;

if(cljs.core.truth_(and__3546__auto____6471))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6471;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____6477 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6477))
{return or__3548__auto____6477;
} else
{var or__3548__auto____6478 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6478))
{return or__3548__auto____6478;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__6785 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____6485 = this$;

if(cljs.core.truth_(and__3546__auto____6485))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6485;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____6490 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6490))
{return or__3548__auto____6490;
} else
{var or__3548__auto____6493 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6493))
{return or__3548__auto____6493;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__6786 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____6497 = this$;

if(cljs.core.truth_(and__3546__auto____6497))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6497;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____6501 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6501))
{return or__3548__auto____6501;
} else
{var or__3548__auto____6504 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6504))
{return or__3548__auto____6504;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__6787 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____6508 = this$;

if(cljs.core.truth_(and__3546__auto____6508))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6508;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____6512 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6512))
{return or__3548__auto____6512;
} else
{var or__3548__auto____6513 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6513))
{return or__3548__auto____6513;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__6788 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____6517 = this$;

if(cljs.core.truth_(and__3546__auto____6517))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6517;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____6658 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6658))
{return or__3548__auto____6658;
} else
{var or__3548__auto____6666 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6666))
{return or__3548__auto____6666;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__6789 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____6669 = this$;

if(cljs.core.truth_(and__3546__auto____6669))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6669;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____6671 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6671))
{return or__3548__auto____6671;
} else
{var or__3548__auto____6673 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6673))
{return or__3548__auto____6673;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__6790 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____6675 = this$;

if(cljs.core.truth_(and__3546__auto____6675))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6675;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____6677 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6677))
{return or__3548__auto____6677;
} else
{var or__3548__auto____6680 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6680))
{return or__3548__auto____6680;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__6791 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____6725 = this$;

if(cljs.core.truth_(and__3546__auto____6725))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6725;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____6727 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6727))
{return or__3548__auto____6727;
} else
{var or__3548__auto____6730 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6730))
{return or__3548__auto____6730;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__6792 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____6731 = this$;

if(cljs.core.truth_(and__3546__auto____6731))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6731;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____6738 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6738))
{return or__3548__auto____6738;
} else
{var or__3548__auto____6740 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6740))
{return or__3548__auto____6740;
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
return _invoke__6744.call(this,this$);
case  2 :
return _invoke__6745.call(this,this$,a);
case  3 :
return _invoke__6774.call(this,this$,a,b);
case  4 :
return _invoke__6775.call(this,this$,a,b,c);
case  5 :
return _invoke__6776.call(this,this$,a,b,c,d);
case  6 :
return _invoke__6777.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__6778.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__6779.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__6780.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__6781.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__6782.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__6783.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__6784.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__6785.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__6786.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__6787.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__6788.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__6789.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__6790.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__6791.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__6792.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6911 = coll;

if(cljs.core.truth_(and__3546__auto____6911))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____6911;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____6913 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6913))
{return or__3548__auto____6913;
} else
{var or__3548__auto____6914 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____6914))
{return or__3548__auto____6914;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6918 = coll;

if(cljs.core.truth_(and__3546__auto____6918))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____6918;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____6920 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6920))
{return or__3548__auto____6920;
} else
{var or__3548__auto____6922 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____6922))
{return or__3548__auto____6922;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____6924 = coll;

if(cljs.core.truth_(and__3546__auto____6924))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____6924;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____6926 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6926))
{return or__3548__auto____6926;
} else
{var or__3548__auto____6928 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____6928))
{return or__3548__auto____6928;
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
var _nth__6944 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____6932 = coll;

if(cljs.core.truth_(and__3546__auto____6932))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6932;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____6934 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6934))
{return or__3548__auto____6934;
} else
{var or__3548__auto____6935 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6935))
{return or__3548__auto____6935;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__6945 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6936 = coll;

if(cljs.core.truth_(and__3546__auto____6936))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6936;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____6938 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6938))
{return or__3548__auto____6938;
} else
{var or__3548__auto____6940 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6940))
{return or__3548__auto____6940;
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
return _nth__6944.call(this,coll,n);
case  3 :
return _nth__6945.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7002 = coll;

if(cljs.core.truth_(and__3546__auto____7002))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7002;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7004 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7004))
{return or__3548__auto____7004;
} else
{var or__3548__auto____7007 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7007))
{return or__3548__auto____7007;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7011 = coll;

if(cljs.core.truth_(and__3546__auto____7011))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7011;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7014 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7014))
{return or__3548__auto____7014;
} else
{var or__3548__auto____7015 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7015))
{return or__3548__auto____7015;
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
var _lookup__7039 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7026 = o;

if(cljs.core.truth_(and__3546__auto____7026))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7026;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7029 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7029))
{return or__3548__auto____7029;
} else
{var or__3548__auto____7031 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7031))
{return or__3548__auto____7031;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7040 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7033 = o;

if(cljs.core.truth_(and__3546__auto____7033))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7033;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7035 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7035))
{return or__3548__auto____7035;
} else
{var or__3548__auto____7037 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7037))
{return or__3548__auto____7037;
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
return _lookup__7039.call(this,o,k);
case  3 :
return _lookup__7040.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7051 = coll;

if(cljs.core.truth_(and__3546__auto____7051))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7051;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7054 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7054))
{return or__3548__auto____7054;
} else
{var or__3548__auto____7056 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7056))
{return or__3548__auto____7056;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7061 = coll;

if(cljs.core.truth_(and__3546__auto____7061))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7061;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7076 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7076))
{return or__3548__auto____7076;
} else
{var or__3548__auto____7077 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7077))
{return or__3548__auto____7077;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7104 = coll;

if(cljs.core.truth_(and__3546__auto____7104))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7104;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7108 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7108))
{return or__3548__auto____7108;
} else
{var or__3548__auto____7110 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7110))
{return or__3548__auto____7110;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7116 = coll;

if(cljs.core.truth_(and__3546__auto____7116))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7116;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7118 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7118))
{return or__3548__auto____7118;
} else
{var or__3548__auto____7121 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7121))
{return or__3548__auto____7121;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7127 = coll;

if(cljs.core.truth_(and__3546__auto____7127))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7127;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7130 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7130))
{return or__3548__auto____7130;
} else
{var or__3548__auto____7133 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7133))
{return or__3548__auto____7133;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7136 = coll;

if(cljs.core.truth_(and__3546__auto____7136))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7136;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7137 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7137))
{return or__3548__auto____7137;
} else
{var or__3548__auto____7138 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7138))
{return or__3548__auto____7138;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7149 = coll;

if(cljs.core.truth_(and__3546__auto____7149))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7149;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7151 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7151))
{return or__3548__auto____7151;
} else
{var or__3548__auto____7154 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7154))
{return or__3548__auto____7154;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7167 = o;

if(cljs.core.truth_(and__3546__auto____7167))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7167;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7168 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7168))
{return or__3548__auto____7168;
} else
{var or__3548__auto____7170 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7170))
{return or__3548__auto____7170;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7175 = o;

if(cljs.core.truth_(and__3546__auto____7175))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7175;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7179 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7179))
{return or__3548__auto____7179;
} else
{var or__3548__auto____7181 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7181))
{return or__3548__auto____7181;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7186 = o;

if(cljs.core.truth_(and__3546__auto____7186))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7186;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7189 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7189))
{return or__3548__auto____7189;
} else
{var or__3548__auto____7191 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7191))
{return or__3548__auto____7191;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7238 = o;

if(cljs.core.truth_(and__3546__auto____7238))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7238;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7239 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7239))
{return or__3548__auto____7239;
} else
{var or__3548__auto____7240 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7240))
{return or__3548__auto____7240;
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
var _reduce__7247 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7241 = coll;

if(cljs.core.truth_(and__3546__auto____7241))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7241;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7242 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7242))
{return or__3548__auto____7242;
} else
{var or__3548__auto____7243 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7243))
{return or__3548__auto____7243;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7248 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7244 = coll;

if(cljs.core.truth_(and__3546__auto____7244))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7244;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7245 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7245))
{return or__3548__auto____7245;
} else
{var or__3548__auto____7246 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7246))
{return or__3548__auto____7246;
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
return _reduce__7247.call(this,coll,f);
case  3 :
return _reduce__7248.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7250 = o;

if(cljs.core.truth_(and__3546__auto____7250))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7250;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7251 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7251))
{return or__3548__auto____7251;
} else
{var or__3548__auto____7252 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7252))
{return or__3548__auto____7252;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7253 = o;

if(cljs.core.truth_(and__3546__auto____7253))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7253;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7254 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7254))
{return or__3548__auto____7254;
} else
{var or__3548__auto____7255 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7255))
{return or__3548__auto____7255;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7259 = o;

if(cljs.core.truth_(and__3546__auto____7259))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7259;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7265 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7265))
{return or__3548__auto____7265;
} else
{var or__3548__auto____7266 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7266))
{return or__3548__auto____7266;
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
if(cljs.core.truth_((function (){var and__3546__auto____7283 = o;

if(cljs.core.truth_(and__3546__auto____7283))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7283;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7284 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7284))
{return or__3548__auto____7284;
} else
{var or__3548__auto____7285 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7285))
{return or__3548__auto____7285;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7290 = d;

if(cljs.core.truth_(and__3546__auto____7290))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7290;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7294 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7294))
{return or__3548__auto____7294;
} else
{var or__3548__auto____7296 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7296))
{return or__3548__auto____7296;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7297 = this$;

if(cljs.core.truth_(and__3546__auto____7297))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7297;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7298 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7298))
{return or__3548__auto____7298;
} else
{var or__3548__auto____7303 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7303))
{return or__3548__auto____7303;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7304 = this$;

if(cljs.core.truth_(and__3546__auto____7304))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7304;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7305 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7305))
{return or__3548__auto____7305;
} else
{var or__3548__auto____7306 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7306))
{return or__3548__auto____7306;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7307 = this$;

if(cljs.core.truth_(and__3546__auto____7307))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7307;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____7308 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7308))
{return or__3548__auto____7308;
} else
{var or__3548__auto____7309 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7309))
{return or__3548__auto____7309;
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
var G__7366 = null;
var G__7366__7367 = (function (o,k){
return null;
});
var G__7366__7368 = (function (o,k,not_found){
return not_found;
});
G__7366 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__7366__7367.call(this,o,k);
case  3 :
return G__7366__7368.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7366;
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
var G__7403 = null;
var G__7403__7404 = (function (_,f){
return f.call(null);
});
var G__7403__7405 = (function (_,f,start){
return start;
});
G__7403 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7403__7404.call(this,_,f);
case  3 :
return G__7403__7405.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7403;
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
var G__7419 = null;
var G__7419__7420 = (function (_,n){
return null;
});
var G__7419__7421 = (function (_,n,not_found){
return not_found;
});
G__7419 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__7419__7420.call(this,_,n);
case  3 :
return G__7419__7421.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7419;
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
var ci_reduce__7463 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__7455 = cljs.core._nth.call(null,cicoll,0);
var n__7456 = 1;

while(true){
if(cljs.core.truth_((n__7456 < cljs.core._count.call(null,cicoll))))
{{
var G__7469 = f.call(null,val__7455,cljs.core._nth.call(null,cicoll,n__7456));
var G__7470 = (n__7456 + 1);
val__7455 = G__7469;
n__7456 = G__7470;
continue;
}
} else
{return val__7455;
}
break;
}
}
});
var ci_reduce__7464 = (function (cicoll,f,val){
var val__7457 = val;
var n__7458 = 0;

while(true){
if(cljs.core.truth_((n__7458 < cljs.core._count.call(null,cicoll))))
{{
var G__7473 = f.call(null,val__7457,cljs.core._nth.call(null,cicoll,n__7458));
var G__7474 = (n__7458 + 1);
val__7457 = G__7473;
n__7458 = G__7474;
continue;
}
} else
{return val__7457;
}
break;
}
});
var ci_reduce__7465 = (function (cicoll,f,val,idx){
var val__7459 = val;
var n__7460 = idx;

while(true){
if(cljs.core.truth_((n__7460 < cljs.core._count.call(null,cicoll))))
{{
var G__7479 = f.call(null,val__7459,cljs.core._nth.call(null,cicoll,n__7460));
var G__7480 = (n__7460 + 1);
val__7459 = G__7479;
n__7460 = G__7480;
continue;
}
} else
{return val__7459;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__7463.call(this,cicoll,f);
case  3 :
return ci_reduce__7464.call(this,cicoll,f,val);
case  4 :
return ci_reduce__7465.call(this,cicoll,f,val,idx);
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
var this__7522 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7539 = null;
var G__7539__7540 = (function (_,f){
var this__7523 = this;
return cljs.core.ci_reduce.call(null,this__7523.a,f,(this__7523.a[this__7523.i]),(this__7523.i + 1));
});
var G__7539__7541 = (function (_,f,start){
var this__7528 = this;
return cljs.core.ci_reduce.call(null,this__7528.a,f,start,this__7528.i);
});
G__7539 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7539__7540.call(this,_,f);
case  3 :
return G__7539__7541.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7539;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7529 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7530 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7543 = null;
var G__7543__7544 = (function (coll,n){
var this__7531 = this;
var i__7532 = (n + this__7531.i);

if(cljs.core.truth_((i__7532 < this__7531.a.length)))
{return (this__7531.a[i__7532]);
} else
{return null;
}
});
var G__7543__7545 = (function (coll,n,not_found){
var this__7533 = this;
var i__7534 = (n + this__7533.i);

if(cljs.core.truth_((i__7534 < this__7533.a.length)))
{return (this__7533.a[i__7534]);
} else
{return not_found;
}
});
G__7543 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7543__7544.call(this,coll,n);
case  3 :
return G__7543__7545.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7543;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__7535 = this;
return (this__7535.a.length - this__7535.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__7536 = this;
return (this__7536.a[this__7536.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__7537 = this;
if(cljs.core.truth_(((this__7537.i + 1) < this__7537.a.length)))
{return (new cljs.core.IndexedSeq(this__7537.a,(this__7537.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__7538 = this;
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
var G__7561 = null;
var G__7561__7562 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7561__7563 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7561 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__7561__7562.call(this,array,f);
case  3 :
return G__7561__7563.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7561;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7565 = null;
var G__7565__7566 = (function (array,k){
return (array[k]);
});
var G__7565__7567 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7565 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__7565__7566.call(this,array,k);
case  3 :
return G__7565__7567.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7565;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7569 = null;
var G__7569__7570 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__7569__7571 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__7569 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__7569__7570.call(this,array,n);
case  3 :
return G__7569__7571.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7569;
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
var temp__3698__auto____7576 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7576))
{var s__7577 = temp__3698__auto____7576;

return cljs.core._first.call(null,s__7577);
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
var G__7578 = cljs.core.next.call(null,s);
s = G__7578;
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
var s__7579 = cljs.core.seq.call(null,x);
var n__7580 = 0;

while(true){
if(cljs.core.truth_(s__7579))
{{
var G__7585 = cljs.core.next.call(null,s__7579);
var G__7586 = (n__7580 + 1);
s__7579 = G__7585;
n__7580 = G__7586;
continue;
}
} else
{return n__7580;
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
var conj__7596 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__7597 = (function() { 
var G__7599__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7600 = conj.call(null,coll,x);
var G__7601 = cljs.core.first.call(null,xs);
var G__7602 = cljs.core.next.call(null,xs);
coll = G__7600;
x = G__7601;
xs = G__7602;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7599 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7599__delegate.call(this, coll, x, xs);
};
G__7599.cljs$lang$maxFixedArity = 2;
G__7599.cljs$lang$applyTo = (function (arglist__7605){
var coll = cljs.core.first(arglist__7605);
var x = cljs.core.first(cljs.core.next(arglist__7605));
var xs = cljs.core.rest(cljs.core.next(arglist__7605));
return G__7599__delegate.call(this, coll, x, xs);
});
return G__7599;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__7596.call(this,coll,x);
default:
return conj__7597.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__7597.cljs$lang$applyTo;
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
var nth__7616 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__7617 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__7616.call(this,coll,n);
case  3 :
return nth__7617.call(this,coll,n,not_found);
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
var get__7621 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__7622 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__7621.call(this,o,k);
case  3 :
return get__7622.call(this,o,k,not_found);
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
var assoc__7628 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__7629 = (function() { 
var G__7631__delegate = function (coll,k,v,kvs){
while(true){
var ret__7624 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__7632 = ret__7624;
var G__7633 = cljs.core.first.call(null,kvs);
var G__7634 = cljs.core.second.call(null,kvs);
var G__7635 = cljs.core.nnext.call(null,kvs);
coll = G__7632;
k = G__7633;
v = G__7634;
kvs = G__7635;
continue;
}
} else
{return ret__7624;
}
break;
}
};
var G__7631 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7631__delegate.call(this, coll, k, v, kvs);
};
G__7631.cljs$lang$maxFixedArity = 3;
G__7631.cljs$lang$applyTo = (function (arglist__7636){
var coll = cljs.core.first(arglist__7636);
var k = cljs.core.first(cljs.core.next(arglist__7636));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7636)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7636)));
return G__7631__delegate.call(this, coll, k, v, kvs);
});
return G__7631;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__7628.call(this,coll,k,v);
default:
return assoc__7629.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__7629.cljs$lang$applyTo;
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
var dissoc__7642 = (function (coll){
return coll;
});
var dissoc__7643 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__7644 = (function() { 
var G__7649__delegate = function (coll,k,ks){
while(true){
var ret__7640 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7651 = ret__7640;
var G__7652 = cljs.core.first.call(null,ks);
var G__7653 = cljs.core.next.call(null,ks);
coll = G__7651;
k = G__7652;
ks = G__7653;
continue;
}
} else
{return ret__7640;
}
break;
}
};
var G__7649 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7649__delegate.call(this, coll, k, ks);
};
G__7649.cljs$lang$maxFixedArity = 2;
G__7649.cljs$lang$applyTo = (function (arglist__7658){
var coll = cljs.core.first(arglist__7658);
var k = cljs.core.first(cljs.core.next(arglist__7658));
var ks = cljs.core.rest(cljs.core.next(arglist__7658));
return G__7649__delegate.call(this, coll, k, ks);
});
return G__7649;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__7642.call(this,coll);
case  2 :
return dissoc__7643.call(this,coll,k);
default:
return dissoc__7644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__7644.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____7662 = o;

if(cljs.core.truth_((function (){var and__3546__auto____7667 = x__445__auto____7662;

if(cljs.core.truth_(and__3546__auto____7667))
{var and__3546__auto____7669 = x__445__auto____7662.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7669))
{return cljs.core.not.call(null,x__445__auto____7662.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7669;
}
} else
{return and__3546__auto____7667;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____7662);
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
var disj__7904 = (function (coll){
return coll;
});
var disj__7906 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__7907 = (function() { 
var G__7910__delegate = function (coll,k,ks){
while(true){
var ret__7751 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7912 = ret__7751;
var G__7913 = cljs.core.first.call(null,ks);
var G__7914 = cljs.core.next.call(null,ks);
coll = G__7912;
k = G__7913;
ks = G__7914;
continue;
}
} else
{return ret__7751;
}
break;
}
};
var G__7910 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7910__delegate.call(this, coll, k, ks);
};
G__7910.cljs$lang$maxFixedArity = 2;
G__7910.cljs$lang$applyTo = (function (arglist__7916){
var coll = cljs.core.first(arglist__7916);
var k = cljs.core.first(cljs.core.next(arglist__7916));
var ks = cljs.core.rest(cljs.core.next(arglist__7916));
return G__7910__delegate.call(this, coll, k, ks);
});
return G__7910;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__7904.call(this,coll);
case  2 :
return disj__7906.call(this,coll,k);
default:
return disj__7907.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__7907.cljs$lang$applyTo;
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
{var x__445__auto____7923 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7924 = x__445__auto____7923;

if(cljs.core.truth_(and__3546__auto____7924))
{var and__3546__auto____7927 = x__445__auto____7923.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____7927))
{return cljs.core.not.call(null,x__445__auto____7923.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____7927;
}
} else
{return and__3546__auto____7924;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____7923);
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
{var x__445__auto____7934 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7936 = x__445__auto____7934;

if(cljs.core.truth_(and__3546__auto____7936))
{var and__3546__auto____7944 = x__445__auto____7934.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____7944))
{return cljs.core.not.call(null,x__445__auto____7934.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____7944;
}
} else
{return and__3546__auto____7936;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____7934);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____7948 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7949 = x__445__auto____7948;

if(cljs.core.truth_(and__3546__auto____7949))
{var and__3546__auto____7950 = x__445__auto____7948.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____7950))
{return cljs.core.not.call(null,x__445__auto____7948.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____7950;
}
} else
{return and__3546__auto____7949;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____7948);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____7951 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7952 = x__445__auto____7951;

if(cljs.core.truth_(and__3546__auto____7952))
{var and__3546__auto____7953 = x__445__auto____7951.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____7953))
{return cljs.core.not.call(null,x__445__auto____7951.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____7953;
}
} else
{return and__3546__auto____7952;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____7951);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8012 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8013 = x__445__auto____8012;

if(cljs.core.truth_(and__3546__auto____8013))
{var and__3546__auto____8016 = x__445__auto____8012.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8016))
{return cljs.core.not.call(null,x__445__auto____8012.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8016;
}
} else
{return and__3546__auto____8013;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8012);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8018 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8019 = x__445__auto____8018;

if(cljs.core.truth_(and__3546__auto____8019))
{var and__3546__auto____8020 = x__445__auto____8018.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8020))
{return cljs.core.not.call(null,x__445__auto____8018.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8020;
}
} else
{return and__3546__auto____8019;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8018);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8021 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8022 = x__445__auto____8021;

if(cljs.core.truth_(and__3546__auto____8022))
{var and__3546__auto____8023 = x__445__auto____8021.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8023))
{return cljs.core.not.call(null,x__445__auto____8021.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8023;
}
} else
{return and__3546__auto____8022;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8021);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8024 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8024.push(key);
}));
return keys__8024;
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
{var x__445__auto____8025 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8026 = x__445__auto____8025;

if(cljs.core.truth_(and__3546__auto____8026))
{var and__3546__auto____8027 = x__445__auto____8025.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8027))
{return cljs.core.not.call(null,x__445__auto____8025.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8027;
}
} else
{return and__3546__auto____8026;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8025);
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
var and__3546__auto____8028 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8028))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8029 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8029))
{return or__3548__auto____8029;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8028;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8032 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8032))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8032;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8034 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8034))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8034;
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
var and__3546__auto____8070 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8070))
{return (n == n.toFixed());
} else
{return and__3546__auto____8070;
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
if(cljs.core.truth_((function (){var and__3546__auto____8120 = coll;

if(cljs.core.truth_(and__3546__auto____8120))
{var and__3546__auto____8121 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8121))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8121;
}
} else
{return and__3546__auto____8120;
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
var distinct_QMARK___8140 = (function (x){
return true;
});
var distinct_QMARK___8141 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8142 = (function() { 
var G__8144__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8136 = cljs.core.set([y,x]);
var xs__8137 = more;

while(true){
var x__8138 = cljs.core.first.call(null,xs__8137);
var etc__8139 = cljs.core.next.call(null,xs__8137);

if(cljs.core.truth_(xs__8137))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8136,x__8138)))
{return false;
} else
{{
var G__8152 = cljs.core.conj.call(null,s__8136,x__8138);
var G__8153 = etc__8139;
s__8136 = G__8152;
xs__8137 = G__8153;
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
var G__8144 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8144__delegate.call(this, x, y, more);
};
G__8144.cljs$lang$maxFixedArity = 2;
G__8144.cljs$lang$applyTo = (function (arglist__8162){
var x = cljs.core.first(arglist__8162);
var y = cljs.core.first(cljs.core.next(arglist__8162));
var more = cljs.core.rest(cljs.core.next(arglist__8162));
return G__8144__delegate.call(this, x, y, more);
});
return G__8144;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8140.call(this,x);
case  2 :
return distinct_QMARK___8141.call(this,x,y);
default:
return distinct_QMARK___8142.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8142.cljs$lang$applyTo;
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
var r__8179 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8179)))
{return r__8179;
} else
{if(cljs.core.truth_(r__8179))
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
var sort__8203 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8204 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8201 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8201,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8201);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8203.call(this,comp);
case  2 :
return sort__8204.call(this,comp,coll);
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
var sort_by__8220 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8221 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8220.call(this,keyfn,comp);
case  3 :
return sort_by__8221.call(this,keyfn,comp,coll);
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
var reduce__8238 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8239 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8238.call(this,f,val);
case  3 :
return reduce__8239.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8331 = (function (f,coll){
var temp__3695__auto____8319 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8319))
{var s__8326 = temp__3695__auto____8319;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8326),cljs.core.next.call(null,s__8326));
} else
{return f.call(null);
}
});
var seq_reduce__8332 = (function (f,val,coll){
var val__8329 = val;
var coll__8330 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8330))
{{
var G__8334 = f.call(null,val__8329,cljs.core.first.call(null,coll__8330));
var G__8335 = cljs.core.next.call(null,coll__8330);
val__8329 = G__8334;
coll__8330 = G__8335;
continue;
}
} else
{return val__8329;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8331.call(this,f,val);
case  3 :
return seq_reduce__8332.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8360 = null;
var G__8360__8361 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8360__8362 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8360 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8360__8361.call(this,coll,f);
case  3 :
return G__8360__8362.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8360;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8376 = (function (){
return 0;
});
var _PLUS___8377 = (function (x){
return x;
});
var _PLUS___8378 = (function (x,y){
return (x + y);
});
var _PLUS___8379 = (function() { 
var G__8386__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8386 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8386__delegate.call(this, x, y, more);
};
G__8386.cljs$lang$maxFixedArity = 2;
G__8386.cljs$lang$applyTo = (function (arglist__8387){
var x = cljs.core.first(arglist__8387);
var y = cljs.core.first(cljs.core.next(arglist__8387));
var more = cljs.core.rest(cljs.core.next(arglist__8387));
return G__8386__delegate.call(this, x, y, more);
});
return G__8386;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8376.call(this);
case  1 :
return _PLUS___8377.call(this,x);
case  2 :
return _PLUS___8378.call(this,x,y);
default:
return _PLUS___8379.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8379.cljs$lang$applyTo;
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
var ___8396 = (function (x){
return (- x);
});
var ___8397 = (function (x,y){
return (x - y);
});
var ___8399 = (function() { 
var G__8405__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8405 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8405__delegate.call(this, x, y, more);
};
G__8405.cljs$lang$maxFixedArity = 2;
G__8405.cljs$lang$applyTo = (function (arglist__8407){
var x = cljs.core.first(arglist__8407);
var y = cljs.core.first(cljs.core.next(arglist__8407));
var more = cljs.core.rest(cljs.core.next(arglist__8407));
return G__8405__delegate.call(this, x, y, more);
});
return G__8405;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8396.call(this,x);
case  2 :
return ___8397.call(this,x,y);
default:
return ___8399.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8399.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8418 = (function (){
return 1;
});
var _STAR___8419 = (function (x){
return x;
});
var _STAR___8420 = (function (x,y){
return (x * y);
});
var _STAR___8421 = (function() { 
var G__8427__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8427 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8427__delegate.call(this, x, y, more);
};
G__8427.cljs$lang$maxFixedArity = 2;
G__8427.cljs$lang$applyTo = (function (arglist__8428){
var x = cljs.core.first(arglist__8428);
var y = cljs.core.first(cljs.core.next(arglist__8428));
var more = cljs.core.rest(cljs.core.next(arglist__8428));
return G__8427__delegate.call(this, x, y, more);
});
return G__8427;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8418.call(this);
case  1 :
return _STAR___8419.call(this,x);
case  2 :
return _STAR___8420.call(this,x,y);
default:
return _STAR___8421.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8421.cljs$lang$applyTo;
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
var _SLASH___8439 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8441 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___8442 = (function() { 
var G__8447__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8447 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8447__delegate.call(this, x, y, more);
};
G__8447.cljs$lang$maxFixedArity = 2;
G__8447.cljs$lang$applyTo = (function (arglist__8449){
var x = cljs.core.first(arglist__8449);
var y = cljs.core.first(cljs.core.next(arglist__8449));
var more = cljs.core.rest(cljs.core.next(arglist__8449));
return G__8447__delegate.call(this, x, y, more);
});
return G__8447;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8439.call(this,x);
case  2 :
return _SLASH___8441.call(this,x,y);
default:
return _SLASH___8442.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8442.cljs$lang$applyTo;
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
var _LT___8476 = (function (x){
return true;
});
var _LT___8477 = (function (x,y){
return (x < y);
});
var _LT___8478 = (function() { 
var G__8480__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8485 = y;
var G__8486 = cljs.core.first.call(null,more);
var G__8487 = cljs.core.next.call(null,more);
x = G__8485;
y = G__8486;
more = G__8487;
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
var G__8480 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8480__delegate.call(this, x, y, more);
};
G__8480.cljs$lang$maxFixedArity = 2;
G__8480.cljs$lang$applyTo = (function (arglist__8492){
var x = cljs.core.first(arglist__8492);
var y = cljs.core.first(cljs.core.next(arglist__8492));
var more = cljs.core.rest(cljs.core.next(arglist__8492));
return G__8480__delegate.call(this, x, y, more);
});
return G__8480;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___8476.call(this,x);
case  2 :
return _LT___8477.call(this,x,y);
default:
return _LT___8478.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___8478.cljs$lang$applyTo;
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
var _LT__EQ___8522 = (function (x){
return true;
});
var _LT__EQ___8523 = (function (x,y){
return (x <= y);
});
var _LT__EQ___8525 = (function() { 
var G__8530__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8531 = y;
var G__8532 = cljs.core.first.call(null,more);
var G__8533 = cljs.core.next.call(null,more);
x = G__8531;
y = G__8532;
more = G__8533;
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
var G__8530 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8530__delegate.call(this, x, y, more);
};
G__8530.cljs$lang$maxFixedArity = 2;
G__8530.cljs$lang$applyTo = (function (arglist__8535){
var x = cljs.core.first(arglist__8535);
var y = cljs.core.first(cljs.core.next(arglist__8535));
var more = cljs.core.rest(cljs.core.next(arglist__8535));
return G__8530__delegate.call(this, x, y, more);
});
return G__8530;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___8522.call(this,x);
case  2 :
return _LT__EQ___8523.call(this,x,y);
default:
return _LT__EQ___8525.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___8525.cljs$lang$applyTo;
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
var _GT___8537 = (function (x){
return true;
});
var _GT___8538 = (function (x,y){
return (x > y);
});
var _GT___8539 = (function() { 
var G__8543__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8544 = y;
var G__8545 = cljs.core.first.call(null,more);
var G__8546 = cljs.core.next.call(null,more);
x = G__8544;
y = G__8545;
more = G__8546;
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
var G__8543 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8543__delegate.call(this, x, y, more);
};
G__8543.cljs$lang$maxFixedArity = 2;
G__8543.cljs$lang$applyTo = (function (arglist__8551){
var x = cljs.core.first(arglist__8551);
var y = cljs.core.first(cljs.core.next(arglist__8551));
var more = cljs.core.rest(cljs.core.next(arglist__8551));
return G__8543__delegate.call(this, x, y, more);
});
return G__8543;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___8537.call(this,x);
case  2 :
return _GT___8538.call(this,x,y);
default:
return _GT___8539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___8539.cljs$lang$applyTo;
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
var _GT__EQ___8558 = (function (x){
return true;
});
var _GT__EQ___8560 = (function (x,y){
return (x >= y);
});
var _GT__EQ___8562 = (function() { 
var G__8569__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8571 = y;
var G__8572 = cljs.core.first.call(null,more);
var G__8573 = cljs.core.next.call(null,more);
x = G__8571;
y = G__8572;
more = G__8573;
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
var G__8569 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8569__delegate.call(this, x, y, more);
};
G__8569.cljs$lang$maxFixedArity = 2;
G__8569.cljs$lang$applyTo = (function (arglist__8578){
var x = cljs.core.first(arglist__8578);
var y = cljs.core.first(cljs.core.next(arglist__8578));
var more = cljs.core.rest(cljs.core.next(arglist__8578));
return G__8569__delegate.call(this, x, y, more);
});
return G__8569;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___8558.call(this,x);
case  2 :
return _GT__EQ___8560.call(this,x,y);
default:
return _GT__EQ___8562.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___8562.cljs$lang$applyTo;
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
var max__8581 = (function (x){
return x;
});
var max__8582 = (function (x,y){
return ((x > y) ? x : y);
});
var max__8583 = (function() { 
var G__8585__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8585 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8585__delegate.call(this, x, y, more);
};
G__8585.cljs$lang$maxFixedArity = 2;
G__8585.cljs$lang$applyTo = (function (arglist__8586){
var x = cljs.core.first(arglist__8586);
var y = cljs.core.first(cljs.core.next(arglist__8586));
var more = cljs.core.rest(cljs.core.next(arglist__8586));
return G__8585__delegate.call(this, x, y, more);
});
return G__8585;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__8581.call(this,x);
case  2 :
return max__8582.call(this,x,y);
default:
return max__8583.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__8583.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__8596 = (function (x){
return x;
});
var min__8597 = (function (x,y){
return ((x < y) ? x : y);
});
var min__8598 = (function() { 
var G__8600__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8600 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8600__delegate.call(this, x, y, more);
};
G__8600.cljs$lang$maxFixedArity = 2;
G__8600.cljs$lang$applyTo = (function (arglist__8601){
var x = cljs.core.first(arglist__8601);
var y = cljs.core.first(cljs.core.next(arglist__8601));
var more = cljs.core.rest(cljs.core.next(arglist__8601));
return G__8600__delegate.call(this, x, y, more);
});
return G__8600;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__8596.call(this,x);
case  2 :
return min__8597.call(this,x,y);
default:
return min__8598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__8598.cljs$lang$applyTo;
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
var rem__8605 = (n % d);

return cljs.core.fix.call(null,((n - rem__8605) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8612 = cljs.core.quot.call(null,n,d);

return (n - (d * q__8612));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8683 = (function (){
return Math.random.call(null);
});
var rand__8684 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8683.call(this);
case  1 :
return rand__8684.call(this,n);
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
var _EQ__EQ___8765 = (function (x){
return true;
});
var _EQ__EQ___8767 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___8768 = (function() { 
var G__8775__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8779 = y;
var G__8781 = cljs.core.first.call(null,more);
var G__8782 = cljs.core.next.call(null,more);
x = G__8779;
y = G__8781;
more = G__8782;
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
var G__8775 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8775__delegate.call(this, x, y, more);
};
G__8775.cljs$lang$maxFixedArity = 2;
G__8775.cljs$lang$applyTo = (function (arglist__8795){
var x = cljs.core.first(arglist__8795);
var y = cljs.core.first(cljs.core.next(arglist__8795));
var more = cljs.core.rest(cljs.core.next(arglist__8795));
return G__8775__delegate.call(this, x, y, more);
});
return G__8775;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___8765.call(this,x);
case  2 :
return _EQ__EQ___8767.call(this,x,y);
default:
return _EQ__EQ___8768.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___8768.cljs$lang$applyTo;
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
var n__8815 = n;
var xs__8816 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8817 = xs__8816;

if(cljs.core.truth_(and__3546__auto____8817))
{return (n__8815 > 0);
} else
{return and__3546__auto____8817;
}
})()))
{{
var G__8821 = (n__8815 - 1);
var G__8822 = cljs.core.next.call(null,xs__8816);
n__8815 = G__8821;
xs__8816 = G__8822;
continue;
}
} else
{return xs__8816;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__8840 = null;
var G__8840__8841 = (function (coll,n){
var temp__3695__auto____8826 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8826))
{var xs__8827 = temp__3695__auto____8826;

return cljs.core.first.call(null,xs__8827);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__8840__8842 = (function (coll,n,not_found){
var temp__3695__auto____8832 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8832))
{var xs__8834 = temp__3695__auto____8832;

return cljs.core.first.call(null,xs__8834);
} else
{return not_found;
}
});
G__8840 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8840__8841.call(this,coll,n);
case  3 :
return G__8840__8842.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8840;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___8865 = (function (){
return "";
});
var str_STAR___8867 = (function (x){
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
var str_STAR___8869 = (function() { 
var G__8873__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8874 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8875 = cljs.core.next.call(null,more);
sb = G__8874;
more = G__8875;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8873 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8873__delegate.call(this, x, ys);
};
G__8873.cljs$lang$maxFixedArity = 1;
G__8873.cljs$lang$applyTo = (function (arglist__8876){
var x = cljs.core.first(arglist__8876);
var ys = cljs.core.rest(arglist__8876);
return G__8873__delegate.call(this, x, ys);
});
return G__8873;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___8865.call(this);
case  1 :
return str_STAR___8867.call(this,x);
default:
return str_STAR___8869.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___8869.cljs$lang$applyTo;
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
var str__8881 = (function (){
return "";
});
var str__8882 = (function (x){
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
var str__8883 = (function() { 
var G__8896__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__8896 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8896__delegate.call(this, x, ys);
};
G__8896.cljs$lang$maxFixedArity = 1;
G__8896.cljs$lang$applyTo = (function (arglist__8901){
var x = cljs.core.first(arglist__8901);
var ys = cljs.core.rest(arglist__8901);
return G__8896__delegate.call(this, x, ys);
});
return G__8896;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__8881.call(this);
case  1 :
return str__8882.call(this,x);
default:
return str__8883.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__8883.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__8916 = (function (s,start){
return s.substring(start);
});
var subs__8917 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__8916.call(this,s,start);
case  3 :
return subs__8917.call(this,s,start,end);
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
var symbol__8919 = (function (name){
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
var symbol__8920 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__8919.call(this,ns);
case  2 :
return symbol__8920.call(this,ns,name);
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
var keyword__8936 = (function (name){
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
var keyword__8938 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__8936.call(this,ns);
case  2 :
return keyword__8938.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8955 = cljs.core.seq.call(null,x);
var ys__8957 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__8955)))
{return cljs.core.nil_QMARK_.call(null,ys__8957);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__8957)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8955),cljs.core.first.call(null,ys__8957))))
{{
var G__8976 = cljs.core.next.call(null,xs__8955);
var G__8977 = cljs.core.next.call(null,ys__8957);
xs__8955 = G__8976;
ys__8957 = G__8977;
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
return cljs.core.reduce.call(null,(function (p1__8978_SHARP_,p2__8979_SHARP_){
return cljs.core.hash_combine.call(null,p1__8978_SHARP_,cljs.core.hash.call(null,p2__8979_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8981__8983 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__8981__8983))
{var G__8986__8988 = cljs.core.first.call(null,G__8981__8983);
var vec__8987__8990 = G__8986__8988;
var key_name__8991 = cljs.core.nth.call(null,vec__8987__8990,0,null);
var f__8992 = cljs.core.nth.call(null,vec__8987__8990,1,null);
var G__8981__8993 = G__8981__8983;

var G__8986__8994 = G__8986__8988;
var G__8981__8996 = G__8981__8993;

while(true){
var vec__8997__8998 = G__8986__8994;
var key_name__8999 = cljs.core.nth.call(null,vec__8997__8998,0,null);
var f__9001 = cljs.core.nth.call(null,vec__8997__8998,1,null);
var G__8981__9002 = G__8981__8996;

var str_name__9003 = cljs.core.name.call(null,key_name__8999);

obj[str_name__9003] = f__9001;
var temp__3698__auto____9006 = cljs.core.next.call(null,G__8981__9002);

if(cljs.core.truth_(temp__3698__auto____9006))
{var G__8981__9007 = temp__3698__auto____9006;

{
var G__9010 = cljs.core.first.call(null,G__8981__9007);
var G__9011 = G__8981__9007;
G__8986__8994 = G__9010;
G__8981__8996 = G__9011;
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
var this__9020 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9024 = this;
return (new cljs.core.List(this__9024.meta,o,coll,(this__9024.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9026 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9027 = this;
return this__9027.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9028 = this;
return this__9028.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9030 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9031 = this;
return this__9031.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9033 = this;
return this__9033.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9035 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9038 = this;
return (new cljs.core.List(meta,this__9038.first,this__9038.rest,this__9038.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9043 = this;
return this__9043.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9046 = this;
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
var this__9056 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9058 = this;
return (new cljs.core.List(this__9058.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9059 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9060 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9062 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9063 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9066 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9069 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9072 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9075 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9080 = this;
return this__9080.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9083 = this;
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
list.cljs$lang$applyTo = (function (arglist__9114){
var items = cljs.core.seq( arglist__9114 );;
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
var this__9125 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9127 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9129 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9130 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9130.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9131 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9132 = this;
return this__9132.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9133 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9133.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9133.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9134 = this;
return this__9134.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9139 = this;
return (new cljs.core.Cons(meta,this__9139.first,this__9139.rest));
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
var G__9187 = null;
var G__9187__9188 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9187__9189 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9187 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9187__9188.call(this,string,f);
case  3 :
return G__9187__9189.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9187;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9195 = null;
var G__9195__9196 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9195__9197 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9195 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9195__9196.call(this,string,k);
case  3 :
return G__9195__9197.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9195;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9199 = null;
var G__9199__9200 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9199__9201 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9199 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9199__9200.call(this,string,n);
case  3 :
return G__9199__9201.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9199;
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
var G__9219 = null;
var G__9219__9220 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9219__9221 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9219 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9219__9220.call(this,this$,coll);
case  3 :
return G__9219__9221.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9219;
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
var x__9277 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9277;
} else
{lazy_seq.x = x__9277.call(null);
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
var this__9295 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9296 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9298 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9302 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9302.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9305 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9308 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9309 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9310 = this;
return this__9310.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9312 = this;
return (new cljs.core.LazySeq(meta,this__9312.realized,this__9312.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__9334 = cljs.core.array.call(null);

var s__9335 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9335)))
{ary__9334.push(cljs.core.first.call(null,s__9335));
{
var G__9339 = cljs.core.next.call(null,s__9335);
s__9335 = G__9339;
continue;
}
} else
{return ary__9334;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__9341 = s;
var i__9342 = n;
var sum__9343 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9346 = (i__9342 > 0);

if(cljs.core.truth_(and__3546__auto____9346))
{return cljs.core.seq.call(null,s__9341);
} else
{return and__3546__auto____9346;
}
})()))
{{
var G__9351 = cljs.core.next.call(null,s__9341);
var G__9352 = (i__9342 - 1);
var G__9353 = (sum__9343 + 1);
s__9341 = G__9351;
i__9342 = G__9352;
sum__9343 = G__9353;
continue;
}
} else
{return sum__9343;
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
var concat__9409 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__9410 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__9411 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9371 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__9371))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9371),concat.call(null,cljs.core.rest.call(null,s__9371),y));
} else
{return y;
}
})));
});
var concat__9412 = (function() { 
var G__9414__delegate = function (x,y,zs){
var cat__9373 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9372 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__9372))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9372),cat.call(null,cljs.core.rest.call(null,xys__9372),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__9373.call(null,concat.call(null,x,y),zs);
};
var G__9414 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9414__delegate.call(this, x, y, zs);
};
G__9414.cljs$lang$maxFixedArity = 2;
G__9414.cljs$lang$applyTo = (function (arglist__9415){
var x = cljs.core.first(arglist__9415);
var y = cljs.core.first(cljs.core.next(arglist__9415));
var zs = cljs.core.rest(cljs.core.next(arglist__9415));
return G__9414__delegate.call(this, x, y, zs);
});
return G__9414;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__9409.call(this);
case  1 :
return concat__9410.call(this,x);
case  2 :
return concat__9411.call(this,x,y);
default:
return concat__9412.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__9412.cljs$lang$applyTo;
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
var list_STAR___9426 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___9427 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___9428 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___9429 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___9430 = (function() { 
var G__9434__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9434 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9434__delegate.call(this, a, b, c, d, more);
};
G__9434.cljs$lang$maxFixedArity = 4;
G__9434.cljs$lang$applyTo = (function (arglist__9436){
var a = cljs.core.first(arglist__9436);
var b = cljs.core.first(cljs.core.next(arglist__9436));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9436)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9436))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9436))));
return G__9434__delegate.call(this, a, b, c, d, more);
});
return G__9434;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___9426.call(this,a);
case  2 :
return list_STAR___9427.call(this,a,b);
case  3 :
return list_STAR___9428.call(this,a,b,c);
case  4 :
return list_STAR___9429.call(this,a,b,c,d);
default:
return list_STAR___9430.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___9430.cljs$lang$applyTo;
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
var apply__9536 = (function (f,args){
var fixed_arity__9443 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__9443 + 1)) <= fixed_arity__9443)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__9537 = (function (f,x,args){
var arglist__9450 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__9451 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9450,fixed_arity__9451) <= fixed_arity__9451)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9450));
} else
{return f.cljs$lang$applyTo(arglist__9450);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9450));
}
});
var apply__9538 = (function (f,x,y,args){
var arglist__9454 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__9456 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9454,fixed_arity__9456) <= fixed_arity__9456)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9454));
} else
{return f.cljs$lang$applyTo(arglist__9454);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9454));
}
});
var apply__9539 = (function (f,x,y,z,args){
var arglist__9520 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__9521 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9520,fixed_arity__9521) <= fixed_arity__9521)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9520));
} else
{return f.cljs$lang$applyTo(arglist__9520);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9520));
}
});
var apply__9540 = (function() { 
var G__9561__delegate = function (f,a,b,c,d,args){
var arglist__9531 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__9532 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9531,fixed_arity__9532) <= fixed_arity__9532)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9531));
} else
{return f.cljs$lang$applyTo(arglist__9531);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9531));
}
};
var G__9561 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9561__delegate.call(this, f, a, b, c, d, args);
};
G__9561.cljs$lang$maxFixedArity = 5;
G__9561.cljs$lang$applyTo = (function (arglist__9564){
var f = cljs.core.first(arglist__9564);
var a = cljs.core.first(cljs.core.next(arglist__9564));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9564)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9564))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9564)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9564)))));
return G__9561__delegate.call(this, f, a, b, c, d, args);
});
return G__9561;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__9536.call(this,f,a);
case  3 :
return apply__9537.call(this,f,a,b);
case  4 :
return apply__9538.call(this,f,a,b,c);
case  5 :
return apply__9539.call(this,f,a,b,c,d);
default:
return apply__9540.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__9540.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__9577){
var obj = cljs.core.first(arglist__9577);
var f = cljs.core.first(cljs.core.next(arglist__9577));
var args = cljs.core.rest(cljs.core.next(arglist__9577));
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
var not_EQ___9585 = (function (x){
return false;
});
var not_EQ___9586 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___9587 = (function() { 
var G__9589__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__9589 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9589__delegate.call(this, x, y, more);
};
G__9589.cljs$lang$maxFixedArity = 2;
G__9589.cljs$lang$applyTo = (function (arglist__9590){
var x = cljs.core.first(arglist__9590);
var y = cljs.core.first(cljs.core.next(arglist__9590));
var more = cljs.core.rest(cljs.core.next(arglist__9590));
return G__9589__delegate.call(this, x, y, more);
});
return G__9589;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___9585.call(this,x);
case  2 :
return not_EQ___9586.call(this,x,y);
default:
return not_EQ___9587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___9587.cljs$lang$applyTo;
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
var G__9601 = pred;
var G__9602 = cljs.core.next.call(null,coll);
pred = G__9601;
coll = G__9602;
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
{var or__3548__auto____9615 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____9615))
{return or__3548__auto____9615;
} else
{{
var G__9618 = pred;
var G__9619 = cljs.core.next.call(null,coll);
pred = G__9618;
coll = G__9619;
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
var G__9689 = null;
var G__9689__9690 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__9689__9691 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__9689__9692 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__9689__9693 = (function() { 
var G__9698__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__9698 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9698__delegate.call(this, x, y, zs);
};
G__9698.cljs$lang$maxFixedArity = 2;
G__9698.cljs$lang$applyTo = (function (arglist__9700){
var x = cljs.core.first(arglist__9700);
var y = cljs.core.first(cljs.core.next(arglist__9700));
var zs = cljs.core.rest(cljs.core.next(arglist__9700));
return G__9698__delegate.call(this, x, y, zs);
});
return G__9698;
})()
;
G__9689 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__9689__9690.call(this);
case  1 :
return G__9689__9691.call(this,x);
case  2 :
return G__9689__9692.call(this,x,y);
default:
return G__9689__9693.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9689.cljs$lang$maxFixedArity = 2;
G__9689.cljs$lang$applyTo = G__9689__9693.cljs$lang$applyTo;
return G__9689;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__9709__delegate = function (args){
return x;
};
var G__9709 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9709__delegate.call(this, args);
};
G__9709.cljs$lang$maxFixedArity = 0;
G__9709.cljs$lang$applyTo = (function (arglist__9710){
var args = cljs.core.seq( arglist__9710 );;
return G__9709__delegate.call(this, args);
});
return G__9709;
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
var comp__9747 = (function (){
return cljs.core.identity;
});
var comp__9748 = (function (f){
return f;
});
var comp__9749 = (function (f,g){
return (function() {
var G__9754 = null;
var G__9754__9755 = (function (){
return f.call(null,g.call(null));
});
var G__9754__9757 = (function (x){
return f.call(null,g.call(null,x));
});
var G__9754__9758 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__9754__9759 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__9754__9760 = (function() { 
var G__9765__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9765 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9765__delegate.call(this, x, y, z, args);
};
G__9765.cljs$lang$maxFixedArity = 3;
G__9765.cljs$lang$applyTo = (function (arglist__9773){
var x = cljs.core.first(arglist__9773);
var y = cljs.core.first(cljs.core.next(arglist__9773));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9773)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9773)));
return G__9765__delegate.call(this, x, y, z, args);
});
return G__9765;
})()
;
G__9754 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9754__9755.call(this);
case  1 :
return G__9754__9757.call(this,x);
case  2 :
return G__9754__9758.call(this,x,y);
case  3 :
return G__9754__9759.call(this,x,y,z);
default:
return G__9754__9760.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9754.cljs$lang$maxFixedArity = 3;
G__9754.cljs$lang$applyTo = G__9754__9760.cljs$lang$applyTo;
return G__9754;
})()
});
var comp__9750 = (function (f,g,h){
return (function() {
var G__9776 = null;
var G__9776__9778 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__9776__9779 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__9776__9780 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__9776__9781 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__9776__9782 = (function() { 
var G__9787__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__9787 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9787__delegate.call(this, x, y, z, args);
};
G__9787.cljs$lang$maxFixedArity = 3;
G__9787.cljs$lang$applyTo = (function (arglist__9791){
var x = cljs.core.first(arglist__9791);
var y = cljs.core.first(cljs.core.next(arglist__9791));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9791)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9791)));
return G__9787__delegate.call(this, x, y, z, args);
});
return G__9787;
})()
;
G__9776 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9776__9778.call(this);
case  1 :
return G__9776__9779.call(this,x);
case  2 :
return G__9776__9780.call(this,x,y);
case  3 :
return G__9776__9781.call(this,x,y,z);
default:
return G__9776__9782.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9776.cljs$lang$maxFixedArity = 3;
G__9776.cljs$lang$applyTo = G__9776__9782.cljs$lang$applyTo;
return G__9776;
})()
});
var comp__9751 = (function() { 
var G__9793__delegate = function (f1,f2,f3,fs){
var fs__9726 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__9794__delegate = function (args){
var ret__9734 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__9726),args);
var fs__9735 = cljs.core.next.call(null,fs__9726);

while(true){
if(cljs.core.truth_(fs__9735))
{{
var G__9796 = cljs.core.first.call(null,fs__9735).call(null,ret__9734);
var G__9797 = cljs.core.next.call(null,fs__9735);
ret__9734 = G__9796;
fs__9735 = G__9797;
continue;
}
} else
{return ret__9734;
}
break;
}
};
var G__9794 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9794__delegate.call(this, args);
};
G__9794.cljs$lang$maxFixedArity = 0;
G__9794.cljs$lang$applyTo = (function (arglist__9798){
var args = cljs.core.seq( arglist__9798 );;
return G__9794__delegate.call(this, args);
});
return G__9794;
})()
;
};
var G__9793 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9793__delegate.call(this, f1, f2, f3, fs);
};
G__9793.cljs$lang$maxFixedArity = 3;
G__9793.cljs$lang$applyTo = (function (arglist__9799){
var f1 = cljs.core.first(arglist__9799);
var f2 = cljs.core.first(cljs.core.next(arglist__9799));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9799)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9799)));
return G__9793__delegate.call(this, f1, f2, f3, fs);
});
return G__9793;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__9747.call(this);
case  1 :
return comp__9748.call(this,f1);
case  2 :
return comp__9749.call(this,f1,f2);
case  3 :
return comp__9750.call(this,f1,f2,f3);
default:
return comp__9751.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__9751.cljs$lang$applyTo;
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
var partial__9902 = (function (f,arg1){
return (function() { 
var G__9909__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__9909 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9909__delegate.call(this, args);
};
G__9909.cljs$lang$maxFixedArity = 0;
G__9909.cljs$lang$applyTo = (function (arglist__9911){
var args = cljs.core.seq( arglist__9911 );;
return G__9909__delegate.call(this, args);
});
return G__9909;
})()
;
});
var partial__9904 = (function (f,arg1,arg2){
return (function() { 
var G__9912__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__9912 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9912__delegate.call(this, args);
};
G__9912.cljs$lang$maxFixedArity = 0;
G__9912.cljs$lang$applyTo = (function (arglist__9913){
var args = cljs.core.seq( arglist__9913 );;
return G__9912__delegate.call(this, args);
});
return G__9912;
})()
;
});
var partial__9905 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__9919__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__9919 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9919__delegate.call(this, args);
};
G__9919.cljs$lang$maxFixedArity = 0;
G__9919.cljs$lang$applyTo = (function (arglist__9922){
var args = cljs.core.seq( arglist__9922 );;
return G__9919__delegate.call(this, args);
});
return G__9919;
})()
;
});
var partial__9906 = (function() { 
var G__9923__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__9924__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__9924 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9924__delegate.call(this, args);
};
G__9924.cljs$lang$maxFixedArity = 0;
G__9924.cljs$lang$applyTo = (function (arglist__9925){
var args = cljs.core.seq( arglist__9925 );;
return G__9924__delegate.call(this, args);
});
return G__9924;
})()
;
};
var G__9923 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9923__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__9923.cljs$lang$maxFixedArity = 4;
G__9923.cljs$lang$applyTo = (function (arglist__9927){
var f = cljs.core.first(arglist__9927);
var arg1 = cljs.core.first(cljs.core.next(arglist__9927));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9927)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9927))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9927))));
return G__9923__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__9923;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__9902.call(this,f,arg1);
case  3 :
return partial__9904.call(this,f,arg1,arg2);
case  4 :
return partial__9905.call(this,f,arg1,arg2,arg3);
default:
return partial__9906.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__9906.cljs$lang$applyTo;
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
var fnil__9947 = (function (f,x){
return (function() {
var G__9954 = null;
var G__9954__9957 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__9954__9958 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__9954__9959 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__9954__9960 = (function() { 
var G__9963__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__9963 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9963__delegate.call(this, a, b, c, ds);
};
G__9963.cljs$lang$maxFixedArity = 3;
G__9963.cljs$lang$applyTo = (function (arglist__9965){
var a = cljs.core.first(arglist__9965);
var b = cljs.core.first(cljs.core.next(arglist__9965));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9965)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9965)));
return G__9963__delegate.call(this, a, b, c, ds);
});
return G__9963;
})()
;
G__9954 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__9954__9957.call(this,a);
case  2 :
return G__9954__9958.call(this,a,b);
case  3 :
return G__9954__9959.call(this,a,b,c);
default:
return G__9954__9960.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9954.cljs$lang$maxFixedArity = 3;
G__9954.cljs$lang$applyTo = G__9954__9960.cljs$lang$applyTo;
return G__9954;
})()
});
var fnil__9948 = (function (f,x,y){
return (function() {
var G__9971 = null;
var G__9971__9972 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__9971__9973 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__9971__9974 = (function() { 
var G__9977__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__9977 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9977__delegate.call(this, a, b, c, ds);
};
G__9977.cljs$lang$maxFixedArity = 3;
G__9977.cljs$lang$applyTo = (function (arglist__9979){
var a = cljs.core.first(arglist__9979);
var b = cljs.core.first(cljs.core.next(arglist__9979));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9979)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9979)));
return G__9977__delegate.call(this, a, b, c, ds);
});
return G__9977;
})()
;
G__9971 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__9971__9972.call(this,a,b);
case  3 :
return G__9971__9973.call(this,a,b,c);
default:
return G__9971__9974.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9971.cljs$lang$maxFixedArity = 3;
G__9971.cljs$lang$applyTo = G__9971__9974.cljs$lang$applyTo;
return G__9971;
})()
});
var fnil__9949 = (function (f,x,y,z){
return (function() {
var G__9980 = null;
var G__9980__9981 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__9980__9982 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__9980__9983 = (function() { 
var G__9986__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__9986 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9986__delegate.call(this, a, b, c, ds);
};
G__9986.cljs$lang$maxFixedArity = 3;
G__9986.cljs$lang$applyTo = (function (arglist__9988){
var a = cljs.core.first(arglist__9988);
var b = cljs.core.first(cljs.core.next(arglist__9988));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9988)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9988)));
return G__9986__delegate.call(this, a, b, c, ds);
});
return G__9986;
})()
;
G__9980 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__9980__9981.call(this,a,b);
case  3 :
return G__9980__9982.call(this,a,b,c);
default:
return G__9980__9983.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9980.cljs$lang$maxFixedArity = 3;
G__9980.cljs$lang$applyTo = G__9980__9983.cljs$lang$applyTo;
return G__9980;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__9947.call(this,f,x);
case  3 :
return fnil__9948.call(this,f,x,y);
case  4 :
return fnil__9949.call(this,f,x,y,z);
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
var mapi__9992 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9990 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9990))
{var s__9991 = temp__3698__auto____9990;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__9991)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__9991)));
} else
{return null;
}
})));
});

return mapi__9992.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10124 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10124))
{var s__10128 = temp__3698__auto____10124;

var x__10130 = f.call(null,cljs.core.first.call(null,s__10128));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10130)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10128));
} else
{return cljs.core.cons.call(null,x__10130,keep.call(null,f,cljs.core.rest.call(null,s__10128)));
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
var keepi__10162 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10152 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10152))
{var s__10154 = temp__3698__auto____10152;

var x__10157 = f.call(null,idx,cljs.core.first.call(null,s__10154));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10157)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10154));
} else
{return cljs.core.cons.call(null,x__10157,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10154)));
}
} else
{return null;
}
})));
});

return keepi__10162.call(null,0,coll);
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
var every_pred__10417 = (function (p){
return (function() {
var ep1 = null;
var ep1__10424 = (function (){
return true;
});
var ep1__10425 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10426 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10195 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10195))
{return p.call(null,y);
} else
{return and__3546__auto____10195;
}
})());
});
var ep1__10427 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10199 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10199))
{var and__3546__auto____10201 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10201))
{return p.call(null,z);
} else
{return and__3546__auto____10201;
}
} else
{return and__3546__auto____10199;
}
})());
});
var ep1__10428 = (function() { 
var G__10437__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10203 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10203))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10203;
}
})());
};
var G__10437 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10437__delegate.call(this, x, y, z, args);
};
G__10437.cljs$lang$maxFixedArity = 3;
G__10437.cljs$lang$applyTo = (function (arglist__10440){
var x = cljs.core.first(arglist__10440);
var y = cljs.core.first(cljs.core.next(arglist__10440));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10440)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10440)));
return G__10437__delegate.call(this, x, y, z, args);
});
return G__10437;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10424.call(this);
case  1 :
return ep1__10425.call(this,x);
case  2 :
return ep1__10426.call(this,x,y);
case  3 :
return ep1__10427.call(this,x,y,z);
default:
return ep1__10428.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10428.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10418 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10441 = (function (){
return true;
});
var ep2__10442 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10207 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10207))
{return p2.call(null,x);
} else
{return and__3546__auto____10207;
}
})());
});
var ep2__10443 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10209 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10209))
{var and__3546__auto____10211 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10211))
{var and__3546__auto____10213 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10213))
{return p2.call(null,y);
} else
{return and__3546__auto____10213;
}
} else
{return and__3546__auto____10211;
}
} else
{return and__3546__auto____10209;
}
})());
});
var ep2__10444 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10216 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10216))
{var and__3546__auto____10218 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10218))
{var and__3546__auto____10220 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10220))
{var and__3546__auto____10221 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10221))
{var and__3546__auto____10222 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10222))
{return p2.call(null,z);
} else
{return and__3546__auto____10222;
}
} else
{return and__3546__auto____10221;
}
} else
{return and__3546__auto____10220;
}
} else
{return and__3546__auto____10218;
}
} else
{return and__3546__auto____10216;
}
})());
});
var ep2__10445 = (function() { 
var G__10448__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10224 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10224))
{return cljs.core.every_QMARK_.call(null,(function (p1__10137_SHARP_){
var and__3546__auto____10226 = p1.call(null,p1__10137_SHARP_);

if(cljs.core.truth_(and__3546__auto____10226))
{return p2.call(null,p1__10137_SHARP_);
} else
{return and__3546__auto____10226;
}
}),args);
} else
{return and__3546__auto____10224;
}
})());
};
var G__10448 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10448__delegate.call(this, x, y, z, args);
};
G__10448.cljs$lang$maxFixedArity = 3;
G__10448.cljs$lang$applyTo = (function (arglist__10450){
var x = cljs.core.first(arglist__10450);
var y = cljs.core.first(cljs.core.next(arglist__10450));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10450)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10450)));
return G__10448__delegate.call(this, x, y, z, args);
});
return G__10448;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10441.call(this);
case  1 :
return ep2__10442.call(this,x);
case  2 :
return ep2__10443.call(this,x,y);
case  3 :
return ep2__10444.call(this,x,y,z);
default:
return ep2__10445.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10445.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10419 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10453 = (function (){
return true;
});
var ep3__10454 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10276 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10276))
{var and__3546__auto____10358 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10358))
{return p3.call(null,x);
} else
{return and__3546__auto____10358;
}
} else
{return and__3546__auto____10276;
}
})());
});
var ep3__10455 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10362 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10362))
{var and__3546__auto____10363 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10363))
{var and__3546__auto____10364 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10364))
{var and__3546__auto____10367 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10367))
{var and__3546__auto____10368 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10368))
{return p3.call(null,y);
} else
{return and__3546__auto____10368;
}
} else
{return and__3546__auto____10367;
}
} else
{return and__3546__auto____10364;
}
} else
{return and__3546__auto____10363;
}
} else
{return and__3546__auto____10362;
}
})());
});
var ep3__10456 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10371 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10371))
{var and__3546__auto____10372 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10372))
{var and__3546__auto____10373 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10373))
{var and__3546__auto____10375 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10375))
{var and__3546__auto____10377 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10377))
{var and__3546__auto____10378 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10378))
{var and__3546__auto____10380 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10380))
{var and__3546__auto____10381 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10381))
{return p3.call(null,z);
} else
{return and__3546__auto____10381;
}
} else
{return and__3546__auto____10380;
}
} else
{return and__3546__auto____10378;
}
} else
{return and__3546__auto____10377;
}
} else
{return and__3546__auto____10375;
}
} else
{return and__3546__auto____10373;
}
} else
{return and__3546__auto____10372;
}
} else
{return and__3546__auto____10371;
}
})());
});
var ep3__10457 = (function() { 
var G__10467__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10382 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10382))
{return cljs.core.every_QMARK_.call(null,(function (p1__10140_SHARP_){
var and__3546__auto____10384 = p1.call(null,p1__10140_SHARP_);

if(cljs.core.truth_(and__3546__auto____10384))
{var and__3546__auto____10389 = p2.call(null,p1__10140_SHARP_);

if(cljs.core.truth_(and__3546__auto____10389))
{return p3.call(null,p1__10140_SHARP_);
} else
{return and__3546__auto____10389;
}
} else
{return and__3546__auto____10384;
}
}),args);
} else
{return and__3546__auto____10382;
}
})());
};
var G__10467 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10467__delegate.call(this, x, y, z, args);
};
G__10467.cljs$lang$maxFixedArity = 3;
G__10467.cljs$lang$applyTo = (function (arglist__10569){
var x = cljs.core.first(arglist__10569);
var y = cljs.core.first(cljs.core.next(arglist__10569));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10569)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10569)));
return G__10467__delegate.call(this, x, y, z, args);
});
return G__10467;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10453.call(this);
case  1 :
return ep3__10454.call(this,x);
case  2 :
return ep3__10455.call(this,x,y);
case  3 :
return ep3__10456.call(this,x,y,z);
default:
return ep3__10457.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10457.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10420 = (function() { 
var G__10573__delegate = function (p1,p2,p3,ps){
var ps__10397 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10577 = (function (){
return true;
});
var epn__10578 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10142_SHARP_){
return p1__10142_SHARP_.call(null,x);
}),ps__10397);
});
var epn__10579 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10143_SHARP_){
var and__3546__auto____10399 = p1__10143_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10399))
{return p1__10143_SHARP_.call(null,y);
} else
{return and__3546__auto____10399;
}
}),ps__10397);
});
var epn__10580 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10145_SHARP_){
var and__3546__auto____10402 = p1__10145_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10402))
{var and__3546__auto____10404 = p1__10145_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10404))
{return p1__10145_SHARP_.call(null,z);
} else
{return and__3546__auto____10404;
}
} else
{return and__3546__auto____10402;
}
}),ps__10397);
});
var epn__10581 = (function() { 
var G__10604__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10407 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10407))
{return cljs.core.every_QMARK_.call(null,(function (p1__10146_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10146_SHARP_,args);
}),ps__10397);
} else
{return and__3546__auto____10407;
}
})());
};
var G__10604 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10604__delegate.call(this, x, y, z, args);
};
G__10604.cljs$lang$maxFixedArity = 3;
G__10604.cljs$lang$applyTo = (function (arglist__10660){
var x = cljs.core.first(arglist__10660);
var y = cljs.core.first(cljs.core.next(arglist__10660));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10660)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10660)));
return G__10604__delegate.call(this, x, y, z, args);
});
return G__10604;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10577.call(this);
case  1 :
return epn__10578.call(this,x);
case  2 :
return epn__10579.call(this,x,y);
case  3 :
return epn__10580.call(this,x,y,z);
default:
return epn__10581.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10581.cljs$lang$applyTo;
return epn;
})()
};
var G__10573 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10573__delegate.call(this, p1, p2, p3, ps);
};
G__10573.cljs$lang$maxFixedArity = 3;
G__10573.cljs$lang$applyTo = (function (arglist__10663){
var p1 = cljs.core.first(arglist__10663);
var p2 = cljs.core.first(cljs.core.next(arglist__10663));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10663)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10663)));
return G__10573__delegate.call(this, p1, p2, p3, ps);
});
return G__10573;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10417.call(this,p1);
case  2 :
return every_pred__10418.call(this,p1,p2);
case  3 :
return every_pred__10419.call(this,p1,p2,p3);
default:
return every_pred__10420.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10420.cljs$lang$applyTo;
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
var some_fn__10757 = (function (p){
return (function() {
var sp1 = null;
var sp1__10763 = (function (){
return null;
});
var sp1__10764 = (function (x){
return p.call(null,x);
});
var sp1__10765 = (function (x,y){
var or__3548__auto____10670 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10670))
{return or__3548__auto____10670;
} else
{return p.call(null,y);
}
});
var sp1__10766 = (function (x,y,z){
var or__3548__auto____10671 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10671))
{return or__3548__auto____10671;
} else
{var or__3548__auto____10672 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____10672))
{return or__3548__auto____10672;
} else
{return p.call(null,z);
}
}
});
var sp1__10768 = (function() { 
var G__10781__delegate = function (x,y,z,args){
var or__3548__auto____10673 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10673))
{return or__3548__auto____10673;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__10781 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10781__delegate.call(this, x, y, z, args);
};
G__10781.cljs$lang$maxFixedArity = 3;
G__10781.cljs$lang$applyTo = (function (arglist__10784){
var x = cljs.core.first(arglist__10784);
var y = cljs.core.first(cljs.core.next(arglist__10784));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10784)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10784)));
return G__10781__delegate.call(this, x, y, z, args);
});
return G__10781;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__10763.call(this);
case  1 :
return sp1__10764.call(this,x);
case  2 :
return sp1__10765.call(this,x,y);
case  3 :
return sp1__10766.call(this,x,y,z);
default:
return sp1__10768.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__10768.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__10758 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__10791 = (function (){
return null;
});
var sp2__10792 = (function (x){
var or__3548__auto____10674 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10674))
{return or__3548__auto____10674;
} else
{return p2.call(null,x);
}
});
var sp2__10793 = (function (x,y){
var or__3548__auto____10675 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10675))
{return or__3548__auto____10675;
} else
{var or__3548__auto____10676 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10676))
{return or__3548__auto____10676;
} else
{var or__3548__auto____10677 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10677))
{return or__3548__auto____10677;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__10794 = (function (x,y,z){
var or__3548__auto____10678 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10678))
{return or__3548__auto____10678;
} else
{var or__3548__auto____10679 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10679))
{return or__3548__auto____10679;
} else
{var or__3548__auto____10680 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10680))
{return or__3548__auto____10680;
} else
{var or__3548__auto____10681 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10681))
{return or__3548__auto____10681;
} else
{var or__3548__auto____10683 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10683))
{return or__3548__auto____10683;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__10795 = (function() { 
var G__10812__delegate = function (x,y,z,args){
var or__3548__auto____10685 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10685))
{return or__3548__auto____10685;
} else
{return cljs.core.some.call(null,(function (p1__10176_SHARP_){
var or__3548__auto____10691 = p1.call(null,p1__10176_SHARP_);

if(cljs.core.truth_(or__3548__auto____10691))
{return or__3548__auto____10691;
} else
{return p2.call(null,p1__10176_SHARP_);
}
}),args);
}
};
var G__10812 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10812__delegate.call(this, x, y, z, args);
};
G__10812.cljs$lang$maxFixedArity = 3;
G__10812.cljs$lang$applyTo = (function (arglist__10814){
var x = cljs.core.first(arglist__10814);
var y = cljs.core.first(cljs.core.next(arglist__10814));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10814)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10814)));
return G__10812__delegate.call(this, x, y, z, args);
});
return G__10812;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__10791.call(this);
case  1 :
return sp2__10792.call(this,x);
case  2 :
return sp2__10793.call(this,x,y);
case  3 :
return sp2__10794.call(this,x,y,z);
default:
return sp2__10795.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__10795.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__10759 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__10817 = (function (){
return null;
});
var sp3__10818 = (function (x){
var or__3548__auto____10698 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10698))
{return or__3548__auto____10698;
} else
{var or__3548__auto____10699 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10699))
{return or__3548__auto____10699;
} else
{return p3.call(null,x);
}
}
});
var sp3__10819 = (function (x,y){
var or__3548__auto____10702 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10702))
{return or__3548__auto____10702;
} else
{var or__3548__auto____10704 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10704))
{return or__3548__auto____10704;
} else
{var or__3548__auto____10705 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____10705))
{return or__3548__auto____10705;
} else
{var or__3548__auto____10706 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10706))
{return or__3548__auto____10706;
} else
{var or__3548__auto____10708 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10708))
{return or__3548__auto____10708;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__10820 = (function (x,y,z){
var or__3548__auto____10716 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10716))
{return or__3548__auto____10716;
} else
{var or__3548__auto____10718 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10718))
{return or__3548__auto____10718;
} else
{var or__3548__auto____10719 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____10719))
{return or__3548__auto____10719;
} else
{var or__3548__auto____10721 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10721))
{return or__3548__auto____10721;
} else
{var or__3548__auto____10722 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10722))
{return or__3548__auto____10722;
} else
{var or__3548__auto____10723 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____10723))
{return or__3548__auto____10723;
} else
{var or__3548__auto____10725 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10725))
{return or__3548__auto____10725;
} else
{var or__3548__auto____10727 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____10727))
{return or__3548__auto____10727;
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
var sp3__10821 = (function() { 
var G__10832__delegate = function (x,y,z,args){
var or__3548__auto____10730 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10730))
{return or__3548__auto____10730;
} else
{return cljs.core.some.call(null,(function (p1__10180_SHARP_){
var or__3548__auto____10732 = p1.call(null,p1__10180_SHARP_);

if(cljs.core.truth_(or__3548__auto____10732))
{return or__3548__auto____10732;
} else
{var or__3548__auto____10733 = p2.call(null,p1__10180_SHARP_);

if(cljs.core.truth_(or__3548__auto____10733))
{return or__3548__auto____10733;
} else
{return p3.call(null,p1__10180_SHARP_);
}
}
}),args);
}
};
var G__10832 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10832__delegate.call(this, x, y, z, args);
};
G__10832.cljs$lang$maxFixedArity = 3;
G__10832.cljs$lang$applyTo = (function (arglist__10835){
var x = cljs.core.first(arglist__10835);
var y = cljs.core.first(cljs.core.next(arglist__10835));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10835)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10835)));
return G__10832__delegate.call(this, x, y, z, args);
});
return G__10832;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__10817.call(this);
case  1 :
return sp3__10818.call(this,x);
case  2 :
return sp3__10819.call(this,x,y);
case  3 :
return sp3__10820.call(this,x,y,z);
default:
return sp3__10821.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__10821.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__10760 = (function() { 
var G__10839__delegate = function (p1,p2,p3,ps){
var ps__10740 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__10840 = (function (){
return null;
});
var spn__10841 = (function (x){
return cljs.core.some.call(null,(function (p1__10181_SHARP_){
return p1__10181_SHARP_.call(null,x);
}),ps__10740);
});
var spn__10842 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10182_SHARP_){
var or__3548__auto____10743 = p1__10182_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____10743))
{return or__3548__auto____10743;
} else
{return p1__10182_SHARP_.call(null,y);
}
}),ps__10740);
});
var spn__10843 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10183_SHARP_){
var or__3548__auto____10747 = p1__10183_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____10747))
{return or__3548__auto____10747;
} else
{var or__3548__auto____10748 = p1__10183_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____10748))
{return or__3548__auto____10748;
} else
{return p1__10183_SHARP_.call(null,z);
}
}
}),ps__10740);
});
var spn__10844 = (function() { 
var G__10850__delegate = function (x,y,z,args){
var or__3548__auto____10751 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10751))
{return or__3548__auto____10751;
} else
{return cljs.core.some.call(null,(function (p1__10185_SHARP_){
return cljs.core.some.call(null,p1__10185_SHARP_,args);
}),ps__10740);
}
};
var G__10850 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10850__delegate.call(this, x, y, z, args);
};
G__10850.cljs$lang$maxFixedArity = 3;
G__10850.cljs$lang$applyTo = (function (arglist__10858){
var x = cljs.core.first(arglist__10858);
var y = cljs.core.first(cljs.core.next(arglist__10858));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10858)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10858)));
return G__10850__delegate.call(this, x, y, z, args);
});
return G__10850;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__10840.call(this);
case  1 :
return spn__10841.call(this,x);
case  2 :
return spn__10842.call(this,x,y);
case  3 :
return spn__10843.call(this,x,y,z);
default:
return spn__10844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__10844.cljs$lang$applyTo;
return spn;
})()
};
var G__10839 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10839__delegate.call(this, p1, p2, p3, ps);
};
G__10839.cljs$lang$maxFixedArity = 3;
G__10839.cljs$lang$applyTo = (function (arglist__10860){
var p1 = cljs.core.first(arglist__10860);
var p2 = cljs.core.first(cljs.core.next(arglist__10860));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10860)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10860)));
return G__10839__delegate.call(this, p1, p2, p3, ps);
});
return G__10839;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__10757.call(this,p1);
case  2 :
return some_fn__10758.call(this,p1,p2);
case  3 :
return some_fn__10759.call(this,p1,p2,p3);
default:
return some_fn__10760.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__10760.cljs$lang$applyTo;
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
var map__10884 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10866 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10866))
{var s__10868 = temp__3698__auto____10866;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__10868)),map.call(null,f,cljs.core.rest.call(null,s__10868)));
} else
{return null;
}
})));
});
var map__10885 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10870 = cljs.core.seq.call(null,c1);
var s2__10871 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____10872 = s1__10870;

if(cljs.core.truth_(and__3546__auto____10872))
{return s2__10871;
} else
{return and__3546__auto____10872;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10870),cljs.core.first.call(null,s2__10871)),map.call(null,f,cljs.core.rest.call(null,s1__10870),cljs.core.rest.call(null,s2__10871)));
} else
{return null;
}
})));
});
var map__10886 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10875 = cljs.core.seq.call(null,c1);
var s2__10876 = cljs.core.seq.call(null,c2);
var s3__10877 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____10878 = s1__10875;

if(cljs.core.truth_(and__3546__auto____10878))
{var and__3546__auto____10879 = s2__10876;

if(cljs.core.truth_(and__3546__auto____10879))
{return s3__10877;
} else
{return and__3546__auto____10879;
}
} else
{return and__3546__auto____10878;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10875),cljs.core.first.call(null,s2__10876),cljs.core.first.call(null,s3__10877)),map.call(null,f,cljs.core.rest.call(null,s1__10875),cljs.core.rest.call(null,s2__10876),cljs.core.rest.call(null,s3__10877)));
} else
{return null;
}
})));
});
var map__10887 = (function() { 
var G__10955__delegate = function (f,c1,c2,c3,colls){
var step__10883 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10882 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10882)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__10882),step.call(null,map.call(null,cljs.core.rest,ss__10882)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__10666_SHARP_){
return cljs.core.apply.call(null,f,p1__10666_SHARP_);
}),step__10883.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__10955 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10955__delegate.call(this, f, c1, c2, c3, colls);
};
G__10955.cljs$lang$maxFixedArity = 4;
G__10955.cljs$lang$applyTo = (function (arglist__10959){
var f = cljs.core.first(arglist__10959);
var c1 = cljs.core.first(cljs.core.next(arglist__10959));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10959)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10959))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10959))));
return G__10955__delegate.call(this, f, c1, c2, c3, colls);
});
return G__10955;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__10884.call(this,f,c1);
case  3 :
return map__10885.call(this,f,c1,c2);
case  4 :
return map__10886.call(this,f,c1,c2,c3);
default:
return map__10887.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__10887.cljs$lang$applyTo;
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
{var temp__3698__auto____10964 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10964))
{var s__10967 = temp__3698__auto____10964;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__10967),take.call(null,(n - 1),cljs.core.rest.call(null,s__10967)));
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
var step__10977 = (function (n,coll){
while(true){
var s__10973 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____10975 = (n > 0);

if(cljs.core.truth_(and__3546__auto____10975))
{return s__10973;
} else
{return and__3546__auto____10975;
}
})()))
{{
var G__10980 = (n - 1);
var G__10981 = cljs.core.rest.call(null,s__10973);
n = G__10980;
coll = G__10981;
continue;
}
} else
{return s__10973;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__10977.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__10990 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__10991 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__10990.call(this,n);
case  2 :
return drop_last__10991.call(this,n,s);
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
var s__10994 = cljs.core.seq.call(null,coll);
var lead__10995 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__10995))
{{
var G__10997 = cljs.core.next.call(null,s__10994);
var G__10998 = cljs.core.next.call(null,lead__10995);
s__10994 = G__10997;
lead__10995 = G__10998;
continue;
}
} else
{return s__10994;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11009 = (function (pred,coll){
while(true){
var s__11005 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11007 = s__11005;

if(cljs.core.truth_(and__3546__auto____11007))
{return pred.call(null,cljs.core.first.call(null,s__11005));
} else
{return and__3546__auto____11007;
}
})()))
{{
var G__11011 = pred;
var G__11012 = cljs.core.rest.call(null,s__11005);
pred = G__11011;
coll = G__11012;
continue;
}
} else
{return s__11005;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11009.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11015 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11015))
{var s__11016 = temp__3698__auto____11015;

return cljs.core.concat.call(null,s__11016,cycle.call(null,s__11016));
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
var repeat__11097 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11098 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11097.call(this,n);
case  2 :
return repeat__11098.call(this,n,x);
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
var repeatedly__11113 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11114 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11113.call(this,n);
case  2 :
return repeatedly__11114.call(this,n,f);
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
var interleave__11143 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11132 = cljs.core.seq.call(null,c1);
var s2__11133 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11138 = s1__11132;

if(cljs.core.truth_(and__3546__auto____11138))
{return s2__11133;
} else
{return and__3546__auto____11138;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11132),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11133),interleave.call(null,cljs.core.rest.call(null,s1__11132),cljs.core.rest.call(null,s2__11133))));
} else
{return null;
}
})));
});
var interleave__11144 = (function() { 
var G__11158__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11139 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11139)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11139),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11139)));
} else
{return null;
}
})));
};
var G__11158 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11158__delegate.call(this, c1, c2, colls);
};
G__11158.cljs$lang$maxFixedArity = 2;
G__11158.cljs$lang$applyTo = (function (arglist__11165){
var c1 = cljs.core.first(arglist__11165);
var c2 = cljs.core.first(cljs.core.next(arglist__11165));
var colls = cljs.core.rest(cljs.core.next(arglist__11165));
return G__11158__delegate.call(this, c1, c2, colls);
});
return G__11158;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11143.call(this,c1,c2);
default:
return interleave__11144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11144.cljs$lang$applyTo;
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
var cat__11184 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11178 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11178))
{var coll__11179 = temp__3695__auto____11178;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11179),cat.call(null,cljs.core.rest.call(null,coll__11179),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11184.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11192 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11193 = (function() { 
var G__11195__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11195 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11195__delegate.call(this, f, coll, colls);
};
G__11195.cljs$lang$maxFixedArity = 2;
G__11195.cljs$lang$applyTo = (function (arglist__11196){
var f = cljs.core.first(arglist__11196);
var coll = cljs.core.first(cljs.core.next(arglist__11196));
var colls = cljs.core.rest(cljs.core.next(arglist__11196));
return G__11195__delegate.call(this, f, coll, colls);
});
return G__11195;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11192.call(this,f,coll);
default:
return mapcat__11193.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11193.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11200 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11200))
{var s__11207 = temp__3698__auto____11200;

var f__11209 = cljs.core.first.call(null,s__11207);
var r__11211 = cljs.core.rest.call(null,s__11207);

if(cljs.core.truth_(pred.call(null,f__11209)))
{return cljs.core.cons.call(null,f__11209,filter.call(null,pred,r__11211));
} else
{return filter.call(null,pred,r__11211);
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
var walk__11231 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11231.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11219_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11219_SHARP_));
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
var partition__11312 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11313 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11303 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11303))
{var s__11304 = temp__3698__auto____11303;

var p__11306 = cljs.core.take.call(null,n,s__11304);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11306))))
{return cljs.core.cons.call(null,p__11306,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11304)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11314 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11309 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11309))
{var s__11310 = temp__3698__auto____11309;

var p__11311 = cljs.core.take.call(null,n,s__11310);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11311))))
{return cljs.core.cons.call(null,p__11311,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11310)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11311,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11312.call(this,n,step);
case  3 :
return partition__11313.call(this,n,step,pad);
case  4 :
return partition__11314.call(this,n,step,pad,coll);
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
var get_in__11322 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__11323 = (function (m,ks,not_found){
var sentinel__11318 = cljs.core.lookup_sentinel;
var m__11319 = m;
var ks__11320 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__11320))
{var m__11321 = cljs.core.get.call(null,m__11319,cljs.core.first.call(null,ks__11320),sentinel__11318);

if(cljs.core.truth_((sentinel__11318 === m__11321)))
{return not_found;
} else
{{
var G__11329 = sentinel__11318;
var G__11330 = m__11321;
var G__11331 = cljs.core.next.call(null,ks__11320);
sentinel__11318 = G__11329;
m__11319 = G__11330;
ks__11320 = G__11331;
continue;
}
}
} else
{return m__11319;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__11322.call(this,m,ks);
case  3 :
return get_in__11323.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__11332,v){
var vec__11333__11334 = p__11332;
var k__11335 = cljs.core.nth.call(null,vec__11333__11334,0,null);
var ks__11336 = cljs.core.nthnext.call(null,vec__11333__11334,1);

if(cljs.core.truth_(ks__11336))
{return cljs.core.assoc.call(null,m,k__11335,assoc_in.call(null,cljs.core.get.call(null,m,k__11335),ks__11336,v));
} else
{return cljs.core.assoc.call(null,m,k__11335,v);
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
var update_in__delegate = function (m,p__11341,f,args){
var vec__11342__11343 = p__11341;
var k__11344 = cljs.core.nth.call(null,vec__11342__11343,0,null);
var ks__11345 = cljs.core.nthnext.call(null,vec__11342__11343,1);

if(cljs.core.truth_(ks__11345))
{return cljs.core.assoc.call(null,m,k__11344,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__11344),ks__11345,f,args));
} else
{return cljs.core.assoc.call(null,m,k__11344,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__11344),args));
}
};
var update_in = function (m,p__11341,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__11341, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__11346){
var m = cljs.core.first(arglist__11346);
var p__11341 = cljs.core.first(cljs.core.next(arglist__11346));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11346)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11346)));
return update_in__delegate.call(this, m, p__11341, f, args);
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
var this__11402 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11476 = null;
var G__11476__11477 = (function (coll,k){
var this__11403 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__11476__11478 = (function (coll,k,not_found){
var this__11408 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__11476 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11476__11477.call(this,coll,k);
case  3 :
return G__11476__11478.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11476;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11409 = this;
var new_array__11410 = cljs.core.aclone.call(null,this__11409.array);

(new_array__11410[k] = v);
return (new cljs.core.Vector(this__11409.meta,new_array__11410));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__11485 = null;
var G__11485__11486 = (function (coll,k){
var this__11411 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11485__11487 = (function (coll,k,not_found){
var this__11412 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11485 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11485__11486.call(this,coll,k);
case  3 :
return G__11485__11487.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11485;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11414 = this;
var new_array__11415 = cljs.core.aclone.call(null,this__11414.array);

new_array__11415.push(o);
return (new cljs.core.Vector(this__11414.meta,new_array__11415));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__11499 = null;
var G__11499__11501 = (function (v,f){
var this__11416 = this;
return cljs.core.ci_reduce.call(null,this__11416.array,f);
});
var G__11499__11502 = (function (v,f,start){
var this__11417 = this;
return cljs.core.ci_reduce.call(null,this__11417.array,f,start);
});
G__11499 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__11499__11501.call(this,v,f);
case  3 :
return G__11499__11502.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11499;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11420 = this;
if(cljs.core.truth_((this__11420.array.length > 0)))
{var vector_seq__11423 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__11420.array.length)))
{return cljs.core.cons.call(null,(this__11420.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__11423.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11427 = this;
return this__11427.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11428 = this;
var count__11430 = this__11428.array.length;

if(cljs.core.truth_((count__11430 > 0)))
{return (this__11428.array[(count__11430 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11435 = this;
if(cljs.core.truth_((this__11435.array.length > 0)))
{var new_array__11437 = cljs.core.aclone.call(null,this__11435.array);

new_array__11437.pop();
return (new cljs.core.Vector(this__11435.meta,new_array__11437));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__11443 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11446 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11447 = this;
return (new cljs.core.Vector(meta,this__11447.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11450 = this;
return this__11450.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__11513 = null;
var G__11513__11516 = (function (coll,n){
var this__11451 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11453 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11453))
{return (n < this__11451.array.length);
} else
{return and__3546__auto____11453;
}
})()))
{return (this__11451.array[n]);
} else
{return null;
}
});
var G__11513__11518 = (function (coll,n,not_found){
var this__11471 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11472 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11472))
{return (n < this__11471.array.length);
} else
{return and__3546__auto____11472;
}
})()))
{return (this__11471.array[n]);
} else
{return not_found;
}
});
G__11513 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__11513__11516.call(this,coll,n);
case  3 :
return G__11513__11518.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11513;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11473 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__11473.meta);
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
vector.cljs$lang$applyTo = (function (arglist__11529){
var args = cljs.core.seq( arglist__11529 );;
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
var this__11572 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11630 = null;
var G__11630__11631 = (function (coll,k){
var this__11574 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__11630__11632 = (function (coll,k,not_found){
var this__11575 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__11630 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11630__11631.call(this,coll,k);
case  3 :
return G__11630__11632.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11630;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__11577 = this;
var v_pos__11579 = (this__11577.start + key);

return (new cljs.core.Subvec(this__11577.meta,cljs.core._assoc.call(null,this__11577.v,v_pos__11579,val),this__11577.start,((this__11577.end > (v_pos__11579 + 1)) ? this__11577.end : (v_pos__11579 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__11693 = null;
var G__11693__11694 = (function (coll,k){
var this__11581 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11693__11695 = (function (coll,k,not_found){
var this__11583 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11693 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11693__11694.call(this,coll,k);
case  3 :
return G__11693__11695.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11693;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11589 = this;
return (new cljs.core.Subvec(this__11589.meta,cljs.core._assoc_n.call(null,this__11589.v,this__11589.end,o),this__11589.start,(this__11589.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__11701 = null;
var G__11701__11702 = (function (coll,f){
var this__11590 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__11701__11703 = (function (coll,f,start){
var this__11591 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__11701 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__11701__11702.call(this,coll,f);
case  3 :
return G__11701__11703.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11701;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11593 = this;
var subvec_seq__11596 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__11593.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__11593.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__11596.call(null,this__11593.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11598 = this;
return (this__11598.end - this__11598.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11599 = this;
return cljs.core._nth.call(null,this__11599.v,(this__11599.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11601 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__11601.start,this__11601.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__11601.meta,this__11601.v,this__11601.start,(this__11601.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__11609 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11612 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11616 = this;
return (new cljs.core.Subvec(meta,this__11616.v,this__11616.start,this__11616.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11617 = this;
return this__11617.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__11712 = null;
var G__11712__11713 = (function (coll,n){
var this__11618 = this;
return cljs.core._nth.call(null,this__11618.v,(this__11618.start + n));
});
var G__11712__11714 = (function (coll,n,not_found){
var this__11623 = this;
return cljs.core._nth.call(null,this__11623.v,(this__11623.start + n),not_found);
});
G__11712 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__11712__11713.call(this,coll,n);
case  3 :
return G__11712__11714.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11712;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11624 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__11624.meta);
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
var subvec__11737 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__11738 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__11737.call(this,v,start);
case  3 :
return subvec__11738.call(this,v,start,end);
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
var this__11755 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__11757 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11759 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11763 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11763.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11771 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__11773 = this;
return cljs.core._first.call(null,this__11773.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__11777 = this;
var temp__3695__auto____11778 = cljs.core.next.call(null,this__11777.front);

if(cljs.core.truth_(temp__3695__auto____11778))
{var f1__11783 = temp__3695__auto____11778;

return (new cljs.core.PersistentQueueSeq(this__11777.meta,f1__11783,this__11777.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__11777.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__11777.meta,this__11777.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11786 = this;
return this__11786.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11788 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__11788.front,this__11788.rear));
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
var this__11830 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11832 = this;
if(cljs.core.truth_(this__11832.front))
{return (new cljs.core.PersistentQueue(this__11832.meta,(this__11832.count + 1),this__11832.front,cljs.core.conj.call(null,(function (){var or__3548__auto____11852 = this__11832.rear;

if(cljs.core.truth_(or__3548__auto____11852))
{return or__3548__auto____11852;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__11832.meta,(this__11832.count + 1),cljs.core.conj.call(null,this__11832.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11855 = this;
var rear__11857 = cljs.core.seq.call(null,this__11855.rear);

if(cljs.core.truth_((function (){var or__3548__auto____11858 = this__11855.front;

if(cljs.core.truth_(or__3548__auto____11858))
{return or__3548__auto____11858;
} else
{return rear__11857;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__11855.front,cljs.core.seq.call(null,rear__11857)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11860 = this;
return this__11860.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11864 = this;
return cljs.core._first.call(null,this__11864.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11865 = this;
if(cljs.core.truth_(this__11865.front))
{var temp__3695__auto____11866 = cljs.core.next.call(null,this__11865.front);

if(cljs.core.truth_(temp__3695__auto____11866))
{var f1__11867 = temp__3695__auto____11866;

return (new cljs.core.PersistentQueue(this__11865.meta,(this__11865.count - 1),f1__11867,this__11865.rear));
} else
{return (new cljs.core.PersistentQueue(this__11865.meta,(this__11865.count - 1),cljs.core.seq.call(null,this__11865.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__11869 = this;
return cljs.core.first.call(null,this__11869.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__11870 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11873 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11874 = this;
return (new cljs.core.PersistentQueue(meta,this__11874.count,this__11874.front,this__11874.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11875 = this;
return this__11875.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11877 = this;
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
var this__11903 = this;
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
var len__11926 = array.length;

var i__11927 = 0;

while(true){
if(cljs.core.truth_((i__11927 < len__11926)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__11927]))))
{return i__11927;
} else
{{
var G__11929 = (i__11927 + incr);
i__11927 = G__11929;
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
var obj_map_contains_key_QMARK___11935 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___11936 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____11933 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____11933))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____11933;
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
return obj_map_contains_key_QMARK___11935.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___11936.call(this,k,strobj,true_val,false_val);
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
var this__12097 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12158 = null;
var G__12158__12159 = (function (coll,k){
var this__12100 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12158__12160 = (function (coll,k,not_found){
var this__12102 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12102.strobj,(this__12102.strobj[k]),not_found);
});
G__12158 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12158__12159.call(this,coll,k);
case  3 :
return G__12158__12160.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12158;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12105 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12107 = goog.object.clone.call(null,this__12105.strobj);
var overwrite_QMARK___12109 = new_strobj__12107.hasOwnProperty(k);

(new_strobj__12107[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12109))
{return (new cljs.core.ObjMap(this__12105.meta,this__12105.keys,new_strobj__12107));
} else
{var new_keys__12110 = cljs.core.aclone.call(null,this__12105.keys);

new_keys__12110.push(k);
return (new cljs.core.ObjMap(this__12105.meta,new_keys__12110,new_strobj__12107));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12105.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12112 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12112.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12163 = null;
var G__12163__12164 = (function (coll,k){
var this__12114 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12163__12165 = (function (coll,k,not_found){
var this__12115 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12163 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12163__12164.call(this,coll,k);
case  3 :
return G__12163__12165.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12163;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12117 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12120 = this;
if(cljs.core.truth_((this__12120.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12077_SHARP_){
return cljs.core.vector.call(null,p1__12077_SHARP_,(this__12120.strobj[p1__12077_SHARP_]));
}),this__12120.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12123 = this;
return this__12123.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12125 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12128 = this;
return (new cljs.core.ObjMap(meta,this__12128.keys,this__12128.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12144 = this;
return this__12144.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12148 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12148.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12149 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12150 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12150))
{return this__12149.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12150;
}
})()))
{var new_keys__12152 = cljs.core.aclone.call(null,this__12149.keys);
var new_strobj__12153 = goog.object.clone.call(null,this__12149.strobj);

new_keys__12152.splice(cljs.core.scan_array.call(null,1,k,new_keys__12152),1);
cljs.core.js_delete.call(null,new_strobj__12153,k);
return (new cljs.core.ObjMap(this__12149.meta,new_keys__12152,new_strobj__12153));
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
var this__12204 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12467 = null;
var G__12467__12469 = (function (coll,k){
var this__12205 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12467__12471 = (function (coll,k,not_found){
var this__12207 = this;
var bucket__12208 = (this__12207.hashobj[cljs.core.hash.call(null,k)]);
var i__12213 = (cljs.core.truth_(bucket__12208)?cljs.core.scan_array.call(null,2,k,bucket__12208):null);

if(cljs.core.truth_(i__12213))
{return (bucket__12208[(i__12213 + 1)]);
} else
{return not_found;
}
});
G__12467 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12467__12469.call(this,coll,k);
case  3 :
return G__12467__12471.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12467;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12215 = this;
var h__12216 = cljs.core.hash.call(null,k);
var bucket__12217 = (this__12215.hashobj[h__12216]);

if(cljs.core.truth_(bucket__12217))
{var new_bucket__12218 = cljs.core.aclone.call(null,bucket__12217);
var new_hashobj__12219 = goog.object.clone.call(null,this__12215.hashobj);

(new_hashobj__12219[h__12216] = new_bucket__12218);
var temp__3695__auto____12250 = cljs.core.scan_array.call(null,2,k,new_bucket__12218);

if(cljs.core.truth_(temp__3695__auto____12250))
{var i__12252 = temp__3695__auto____12250;

(new_bucket__12218[(i__12252 + 1)] = v);
return (new cljs.core.HashMap(this__12215.meta,this__12215.count,new_hashobj__12219));
} else
{new_bucket__12218.push(k,v);
return (new cljs.core.HashMap(this__12215.meta,(this__12215.count + 1),new_hashobj__12219));
}
} else
{var new_hashobj__12257 = goog.object.clone.call(null,this__12215.hashobj);

(new_hashobj__12257[h__12216] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12215.meta,(this__12215.count + 1),new_hashobj__12257));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12263 = this;
var bucket__12264 = (this__12263.hashobj[cljs.core.hash.call(null,k)]);
var i__12266 = (cljs.core.truth_(bucket__12264)?cljs.core.scan_array.call(null,2,k,bucket__12264):null);

if(cljs.core.truth_(i__12266))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12494 = null;
var G__12494__12495 = (function (coll,k){
var this__12272 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12494__12496 = (function (coll,k,not_found){
var this__12275 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12494 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12494__12495.call(this,coll,k);
case  3 :
return G__12494__12496.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12494;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12277 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12279 = this;
if(cljs.core.truth_((this__12279.count > 0)))
{var hashes__12282 = cljs.core.js_keys.call(null,this__12279.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12187_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12279.hashobj[p1__12187_SHARP_])));
}),hashes__12282);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12283 = this;
return this__12283.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12284 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12285 = this;
return (new cljs.core.HashMap(meta,this__12285.count,this__12285.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12286 = this;
return this__12286.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12287 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12287.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12288 = this;
var h__12454 = cljs.core.hash.call(null,k);
var bucket__12455 = (this__12288.hashobj[h__12454]);
var i__12457 = (cljs.core.truth_(bucket__12455)?cljs.core.scan_array.call(null,2,k,bucket__12455):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12457)))
{return coll;
} else
{var new_hashobj__12458 = goog.object.clone.call(null,this__12288.hashobj);

if(cljs.core.truth_((3 > bucket__12455.length)))
{cljs.core.js_delete.call(null,new_hashobj__12458,h__12454);
} else
{var new_bucket__12461 = cljs.core.aclone.call(null,bucket__12455);

new_bucket__12461.splice(i__12457,2);
(new_hashobj__12458[h__12454] = new_bucket__12461);
}
return (new cljs.core.HashMap(this__12288.meta,(this__12288.count - 1),new_hashobj__12458));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12545 = ks.length;

var i__12547 = 0;
var out__12548 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12547 < len__12545)))
{{
var G__12560 = (i__12547 + 1);
var G__12561 = cljs.core.assoc.call(null,out__12548,(ks[i__12547]),(vs[i__12547]));
i__12547 = G__12560;
out__12548 = G__12561;
continue;
}
} else
{return out__12548;
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
var in$__12570 = cljs.core.seq.call(null,keyvals);
var out__12571 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__12570))
{{
var G__12574 = cljs.core.nnext.call(null,in$__12570);
var G__12575 = cljs.core.assoc.call(null,out__12571,cljs.core.first.call(null,in$__12570),cljs.core.second.call(null,in$__12570));
in$__12570 = G__12574;
out__12571 = G__12575;
continue;
}
} else
{return out__12571;
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
hash_map.cljs$lang$applyTo = (function (arglist__12576){
var keyvals = cljs.core.seq( arglist__12576 );;
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
{return cljs.core.reduce.call(null,(function (p1__12587_SHARP_,p2__12588_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____12589 = p1__12587_SHARP_;

if(cljs.core.truth_(or__3548__auto____12589))
{return or__3548__auto____12589;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__12588_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__12598){
var maps = cljs.core.seq( arglist__12598 );;
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
{var merge_entry__12608 = (function (m,e){
var k__12605 = cljs.core.first.call(null,e);
var v__12606 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__12605)))
{return cljs.core.assoc.call(null,m,k__12605,f.call(null,cljs.core.get.call(null,m,k__12605),v__12606));
} else
{return cljs.core.assoc.call(null,m,k__12605,v__12606);
}
});
var merge2__12613 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__12608,(function (){var or__3548__auto____12610 = m1;

if(cljs.core.truth_(or__3548__auto____12610))
{return or__3548__auto____12610;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__12613,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__12628){
var f = cljs.core.first(arglist__12628);
var maps = cljs.core.rest(arglist__12628);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__12638 = cljs.core.ObjMap.fromObject([],{});
var keys__12639 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__12639))
{var key__12657 = cljs.core.first.call(null,keys__12639);
var entry__12658 = cljs.core.get.call(null,map,key__12657,"﷐'user/not-found");

{
var G__12664 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__12658,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__12638,key__12657,entry__12658):ret__12638);
var G__12665 = cljs.core.next.call(null,keys__12639);
ret__12638 = G__12664;
keys__12639 = G__12665;
continue;
}
} else
{return ret__12638;
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
var this__12678 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12717 = null;
var G__12717__12718 = (function (coll,v){
var this__12687 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__12717__12719 = (function (coll,v,not_found){
var this__12689 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__12689.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__12717 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__12717__12718.call(this,coll,v);
case  3 :
return G__12717__12719.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12717;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__12725 = null;
var G__12725__12726 = (function (coll,k){
var this__12690 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12725__12727 = (function (coll,k,not_found){
var this__12692 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12725 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12725__12726.call(this,coll,k);
case  3 :
return G__12725__12727.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12725;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12694 = this;
return (new cljs.core.Set(this__12694.meta,cljs.core.assoc.call(null,this__12694.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12696 = this;
return cljs.core.keys.call(null,this__12696.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__12698 = this;
return (new cljs.core.Set(this__12698.meta,cljs.core.dissoc.call(null,this__12698.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12699 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12703 = this;
var and__3546__auto____12704 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____12704))
{var and__3546__auto____12705 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____12705))
{return cljs.core.every_QMARK_.call(null,(function (p1__12632_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__12632_SHARP_);
}),other);
} else
{return and__3546__auto____12705;
}
} else
{return and__3546__auto____12704;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12708 = this;
return (new cljs.core.Set(meta,this__12708.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12709 = this;
return this__12709.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12712 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__12712.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__12769 = cljs.core.seq.call(null,coll);
var out__12771 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__12769))))
{{
var G__12785 = cljs.core.rest.call(null,in$__12769);
var G__12786 = cljs.core.conj.call(null,out__12771,cljs.core.first.call(null,in$__12769));
in$__12769 = G__12785;
out__12771 = G__12786;
continue;
}
} else
{return out__12771;
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
{var n__12795 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____12798 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____12798))
{var e__12799 = temp__3695__auto____12798;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__12799));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__12795,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__12759_SHARP_){
var temp__3695__auto____12807 = cljs.core.find.call(null,smap,p1__12759_SHARP_);

if(cljs.core.truth_(temp__3695__auto____12807))
{var e__12808 = temp__3695__auto____12807;

return cljs.core.second.call(null,e__12808);
} else
{return p1__12759_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__12868 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__12859,seen){
while(true){
var vec__12860__12861 = p__12859;
var f__12862 = cljs.core.nth.call(null,vec__12860__12861,0,null);
var xs__12863 = vec__12860__12861;

var temp__3698__auto____12865 = cljs.core.seq.call(null,xs__12863);

if(cljs.core.truth_(temp__3698__auto____12865))
{var s__12867 = temp__3698__auto____12865;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__12862)))
{{
var G__12886 = cljs.core.rest.call(null,s__12867);
var G__12887 = seen;
p__12859 = G__12886;
seen = G__12887;
continue;
}
} else
{return cljs.core.cons.call(null,f__12862,step.call(null,cljs.core.rest.call(null,s__12867),cljs.core.conj.call(null,seen,f__12862)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__12868.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__12892 = cljs.core.Vector.fromArray([]);
var s__12893 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__12893)))
{{
var G__12897 = cljs.core.conj.call(null,ret__12892,cljs.core.first.call(null,s__12893));
var G__12898 = cljs.core.next.call(null,s__12893);
ret__12892 = G__12897;
s__12893 = G__12898;
continue;
}
} else
{return cljs.core.seq.call(null,ret__12892);
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
{if(cljs.core.truth_((function (){var or__3548__auto____12906 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____12906))
{return or__3548__auto____12906;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__12909 = x.lastIndexOf("/");

if(cljs.core.truth_((i__12909 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__12909 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____12918 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____12918))
{return or__3548__auto____12918;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__12919 = x.lastIndexOf("/");

if(cljs.core.truth_((i__12919 > -1)))
{return cljs.core.subs.call(null,x,2,i__12919);
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
var map__12926 = cljs.core.ObjMap.fromObject([],{});
var ks__12927 = cljs.core.seq.call(null,keys);
var vs__12928 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____12929 = ks__12927;

if(cljs.core.truth_(and__3546__auto____12929))
{return vs__12928;
} else
{return and__3546__auto____12929;
}
})()))
{{
var G__12937 = cljs.core.assoc.call(null,map__12926,cljs.core.first.call(null,ks__12927),cljs.core.first.call(null,vs__12928));
var G__12938 = cljs.core.next.call(null,ks__12927);
var G__12939 = cljs.core.next.call(null,vs__12928);
map__12926 = G__12937;
ks__12927 = G__12938;
vs__12928 = G__12939;
continue;
}
} else
{return map__12926;
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
var max_key__12948 = (function (k,x){
return x;
});
var max_key__12972 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__12973 = (function() { 
var G__12975__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12924_SHARP_,p2__12925_SHARP_){
return max_key.call(null,k,p1__12924_SHARP_,p2__12925_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__12975 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12975__delegate.call(this, k, x, y, more);
};
G__12975.cljs$lang$maxFixedArity = 3;
G__12975.cljs$lang$applyTo = (function (arglist__12976){
var k = cljs.core.first(arglist__12976);
var x = cljs.core.first(cljs.core.next(arglist__12976));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12976)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12976)));
return G__12975__delegate.call(this, k, x, y, more);
});
return G__12975;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__12948.call(this,k,x);
case  3 :
return max_key__12972.call(this,k,x,y);
default:
return max_key__12973.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__12973.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__12995 = (function (k,x){
return x;
});
var min_key__12996 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__12997 = (function() { 
var G__12999__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12943_SHARP_,p2__12944_SHARP_){
return min_key.call(null,k,p1__12943_SHARP_,p2__12944_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__12999 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12999__delegate.call(this, k, x, y, more);
};
G__12999.cljs$lang$maxFixedArity = 3;
G__12999.cljs$lang$applyTo = (function (arglist__13000){
var k = cljs.core.first(arglist__13000);
var x = cljs.core.first(cljs.core.next(arglist__13000));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13000)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13000)));
return G__12999__delegate.call(this, k, x, y, more);
});
return G__12999;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__12995.call(this,k,x);
case  3 :
return min_key__12996.call(this,k,x,y);
default:
return min_key__12997.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__12997.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13008 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13009 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13006 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13006))
{var s__13007 = temp__3698__auto____13006;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13007),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13007)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13008.call(this,n,step);
case  3 :
return partition_all__13009.call(this,n,step,coll);
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
var temp__3698__auto____13016 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13016))
{var s__13017 = temp__3698__auto____13016;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13017))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13017),take_while.call(null,pred,cljs.core.rest.call(null,s__13017)));
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
var this__13032 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13034 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13117 = null;
var G__13117__13118 = (function (rng,f){
var this__13036 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13117__13119 = (function (rng,f,s){
var this__13037 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13117 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13117__13118.call(this,rng,f);
case  3 :
return G__13117__13119.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13117;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13039 = this;
var comp__13040 = (cljs.core.truth_((this__13039.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13040.call(null,this__13039.start,this__13039.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13042 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13042.end - this__13042.start) / this__13042.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13093 = this;
return this__13093.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13094 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13094.meta,(this__13094.start + this__13094.step),this__13094.end,this__13094.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13097 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13099 = this;
return (new cljs.core.Range(meta,this__13099.start,this__13099.end,this__13099.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13101 = this;
return this__13101.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13125 = null;
var G__13125__13126 = (function (rng,n){
var this__13103 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13103.start + (n * this__13103.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13104 = (this__13103.start > this__13103.end);

if(cljs.core.truth_(and__3546__auto____13104))
{return cljs.core._EQ_.call(null,this__13103.step,0);
} else
{return and__3546__auto____13104;
}
})()))
{return this__13103.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13125__13127 = (function (rng,n,not_found){
var this__13105 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13105.start + (n * this__13105.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13111 = (this__13105.start > this__13105.end);

if(cljs.core.truth_(and__3546__auto____13111))
{return cljs.core._EQ_.call(null,this__13105.step,0);
} else
{return and__3546__auto____13111;
}
})()))
{return this__13105.start;
} else
{return not_found;
}
}
});
G__13125 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13125__13126.call(this,rng,n);
case  3 :
return G__13125__13127.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13125;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13112 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13112.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13136 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13137 = (function (end){
return range.call(null,0,end,1);
});
var range__13138 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13139 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13136.call(this);
case  1 :
return range__13137.call(this,start);
case  2 :
return range__13138.call(this,start,end);
case  3 :
return range__13139.call(this,start,end,step);
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
var temp__3698__auto____13152 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13152))
{var s__13154 = temp__3698__auto____13152;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13154),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13154)));
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
var temp__3698__auto____13165 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13165))
{var s__13167 = temp__3698__auto____13165;

var fst__13170 = cljs.core.first.call(null,s__13167);
var fv__13172 = f.call(null,fst__13170);
var run__13177 = cljs.core.cons.call(null,fst__13170,cljs.core.take_while.call(null,(function (p1__13158_SHARP_){
return cljs.core._EQ_.call(null,fv__13172,f.call(null,p1__13158_SHARP_));
}),cljs.core.next.call(null,s__13167)));

return cljs.core.cons.call(null,run__13177,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13177),s__13167))));
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
var reductions__13205 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13200 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13200))
{var s__13201 = temp__3695__auto____13200;

return reductions.call(null,f,cljs.core.first.call(null,s__13201),cljs.core.rest.call(null,s__13201));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13206 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13202 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13202))
{var s__13203 = temp__3698__auto____13202;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13203)),cljs.core.rest.call(null,s__13203));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13205.call(this,f,init);
case  3 :
return reductions__13206.call(this,f,init,coll);
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
var juxt__13216 = (function (f){
return (function() {
var G__13225 = null;
var G__13225__13226 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13225__13227 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13225__13228 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13225__13229 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13225__13230 = (function() { 
var G__13232__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13232 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13232__delegate.call(this, x, y, z, args);
};
G__13232.cljs$lang$maxFixedArity = 3;
G__13232.cljs$lang$applyTo = (function (arglist__13234){
var x = cljs.core.first(arglist__13234);
var y = cljs.core.first(cljs.core.next(arglist__13234));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13234)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13234)));
return G__13232__delegate.call(this, x, y, z, args);
});
return G__13232;
})()
;
G__13225 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13225__13226.call(this);
case  1 :
return G__13225__13227.call(this,x);
case  2 :
return G__13225__13228.call(this,x,y);
case  3 :
return G__13225__13229.call(this,x,y,z);
default:
return G__13225__13230.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13225.cljs$lang$maxFixedArity = 3;
G__13225.cljs$lang$applyTo = G__13225__13230.cljs$lang$applyTo;
return G__13225;
})()
});
var juxt__13217 = (function (f,g){
return (function() {
var G__13240 = null;
var G__13240__13241 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13240__13242 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13240__13243 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13240__13244 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13240__13245 = (function() { 
var G__13251__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13251 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13251__delegate.call(this, x, y, z, args);
};
G__13251.cljs$lang$maxFixedArity = 3;
G__13251.cljs$lang$applyTo = (function (arglist__13252){
var x = cljs.core.first(arglist__13252);
var y = cljs.core.first(cljs.core.next(arglist__13252));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13252)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13252)));
return G__13251__delegate.call(this, x, y, z, args);
});
return G__13251;
})()
;
G__13240 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13240__13241.call(this);
case  1 :
return G__13240__13242.call(this,x);
case  2 :
return G__13240__13243.call(this,x,y);
case  3 :
return G__13240__13244.call(this,x,y,z);
default:
return G__13240__13245.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13240.cljs$lang$maxFixedArity = 3;
G__13240.cljs$lang$applyTo = G__13240__13245.cljs$lang$applyTo;
return G__13240;
})()
});
var juxt__13219 = (function (f,g,h){
return (function() {
var G__13260 = null;
var G__13260__13261 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13260__13262 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13260__13263 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13260__13264 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13260__13265 = (function() { 
var G__13274__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13274 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13274__delegate.call(this, x, y, z, args);
};
G__13274.cljs$lang$maxFixedArity = 3;
G__13274.cljs$lang$applyTo = (function (arglist__13275){
var x = cljs.core.first(arglist__13275);
var y = cljs.core.first(cljs.core.next(arglist__13275));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13275)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13275)));
return G__13274__delegate.call(this, x, y, z, args);
});
return G__13274;
})()
;
G__13260 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13260__13261.call(this);
case  1 :
return G__13260__13262.call(this,x);
case  2 :
return G__13260__13263.call(this,x,y);
case  3 :
return G__13260__13264.call(this,x,y,z);
default:
return G__13260__13265.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13260.cljs$lang$maxFixedArity = 3;
G__13260.cljs$lang$applyTo = G__13260__13265.cljs$lang$applyTo;
return G__13260;
})()
});
var juxt__13220 = (function() { 
var G__13276__delegate = function (f,g,h,fs){
var fs__13212 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13277 = null;
var G__13277__13279 = (function (){
return cljs.core.reduce.call(null,(function (p1__13190_SHARP_,p2__13191_SHARP_){
return cljs.core.conj.call(null,p1__13190_SHARP_,p2__13191_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13212);
});
var G__13277__13280 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13192_SHARP_,p2__13193_SHARP_){
return cljs.core.conj.call(null,p1__13192_SHARP_,p2__13193_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13212);
});
var G__13277__13281 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13194_SHARP_,p2__13195_SHARP_){
return cljs.core.conj.call(null,p1__13194_SHARP_,p2__13195_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13212);
});
var G__13277__13282 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13196_SHARP_,p2__13197_SHARP_){
return cljs.core.conj.call(null,p1__13196_SHARP_,p2__13197_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13212);
});
var G__13277__13283 = (function() { 
var G__13285__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13198_SHARP_,p2__13199_SHARP_){
return cljs.core.conj.call(null,p1__13198_SHARP_,cljs.core.apply.call(null,p2__13199_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13212);
};
var G__13285 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13285__delegate.call(this, x, y, z, args);
};
G__13285.cljs$lang$maxFixedArity = 3;
G__13285.cljs$lang$applyTo = (function (arglist__13287){
var x = cljs.core.first(arglist__13287);
var y = cljs.core.first(cljs.core.next(arglist__13287));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13287)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13287)));
return G__13285__delegate.call(this, x, y, z, args);
});
return G__13285;
})()
;
G__13277 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13277__13279.call(this);
case  1 :
return G__13277__13280.call(this,x);
case  2 :
return G__13277__13281.call(this,x,y);
case  3 :
return G__13277__13282.call(this,x,y,z);
default:
return G__13277__13283.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13277.cljs$lang$maxFixedArity = 3;
G__13277.cljs$lang$applyTo = G__13277__13283.cljs$lang$applyTo;
return G__13277;
})()
};
var G__13276 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13276__delegate.call(this, f, g, h, fs);
};
G__13276.cljs$lang$maxFixedArity = 3;
G__13276.cljs$lang$applyTo = (function (arglist__13291){
var f = cljs.core.first(arglist__13291);
var g = cljs.core.first(cljs.core.next(arglist__13291));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13291)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13291)));
return G__13276__delegate.call(this, f, g, h, fs);
});
return G__13276;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13216.call(this,f);
case  2 :
return juxt__13217.call(this,f,g);
case  3 :
return juxt__13219.call(this,f,g,h);
default:
return juxt__13220.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13220.cljs$lang$applyTo;
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
var dorun__13296 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13299 = cljs.core.next.call(null,coll);
coll = G__13299;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13297 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13294 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13294))
{return (n > 0);
} else
{return and__3546__auto____13294;
}
})()))
{{
var G__13300 = (n - 1);
var G__13301 = cljs.core.next.call(null,coll);
n = G__13300;
coll = G__13301;
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
return dorun__13296.call(this,n);
case  2 :
return dorun__13297.call(this,n,coll);
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
var doall__13309 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13310 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13309.call(this,n);
case  2 :
return doall__13310.call(this,n,coll);
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
var matches__13440 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13440),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13440),1)))
{return cljs.core.first.call(null,matches__13440);
} else
{return cljs.core.vec.call(null,matches__13440);
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
var matches__13442 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__13442)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13442),1)))
{return cljs.core.first.call(null,matches__13442);
} else
{return cljs.core.vec.call(null,matches__13442);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13444 = cljs.core.re_find.call(null,re,s);
var match_idx__13446 = s.search(re);
var match_str__13449 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__13444))?cljs.core.first.call(null,match_data__13444):match_data__13444);
var post_match__13452 = cljs.core.subs.call(null,s,(match_idx__13446 + cljs.core.count.call(null,match_str__13449)));

if(cljs.core.truth_(match_data__13444))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13444,re_seq.call(null,re,post_match__13452));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__13462_SHARP_){
return print_one.call(null,p1__13462_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____13477 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____13477))
{var and__3546__auto____13489 = (function (){var x__445__auto____13479 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13484 = x__445__auto____13479;

if(cljs.core.truth_(and__3546__auto____13484))
{var and__3546__auto____13486 = x__445__auto____13479.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____13486))
{return cljs.core.not.call(null,x__445__auto____13479.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____13486;
}
} else
{return and__3546__auto____13484;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____13479);
}
})();

if(cljs.core.truth_(and__3546__auto____13489))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____13489;
}
} else
{return and__3546__auto____13477;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____13490 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13491 = x__445__auto____13490;

if(cljs.core.truth_(and__3546__auto____13491))
{var and__3546__auto____13492 = x__445__auto____13490.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____13492))
{return cljs.core.not.call(null,x__445__auto____13490.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____13492;
}
} else
{return and__3546__auto____13491;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____13490);
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
var first_obj__13511 = cljs.core.first.call(null,objs);
var sb__13513 = (new goog.string.StringBuffer());

var G__13515__13517 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13515__13517))
{var obj__13518 = cljs.core.first.call(null,G__13515__13517);
var G__13515__13519 = G__13515__13517;

while(true){
if(cljs.core.truth_((obj__13518 === first_obj__13511)))
{} else
{sb__13513.append(" ");
}
var G__13520__13521 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13518,opts));

if(cljs.core.truth_(G__13520__13521))
{var string__13522 = cljs.core.first.call(null,G__13520__13521);
var G__13520__13523 = G__13520__13521;

while(true){
sb__13513.append(string__13522);
var temp__3698__auto____13524 = cljs.core.next.call(null,G__13520__13523);

if(cljs.core.truth_(temp__3698__auto____13524))
{var G__13520__13527 = temp__3698__auto____13524;

{
var G__13536 = cljs.core.first.call(null,G__13520__13527);
var G__13537 = G__13520__13527;
string__13522 = G__13536;
G__13520__13523 = G__13537;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13531 = cljs.core.next.call(null,G__13515__13519);

if(cljs.core.truth_(temp__3698__auto____13531))
{var G__13515__13532 = temp__3698__auto____13531;

{
var G__13539 = cljs.core.first.call(null,G__13515__13532);
var G__13540 = G__13515__13532;
obj__13518 = G__13539;
G__13515__13519 = G__13540;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__13513);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__13541 = cljs.core.first.call(null,objs);

var G__13542__13543 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13542__13543))
{var obj__13544 = cljs.core.first.call(null,G__13542__13543);
var G__13542__13545 = G__13542__13543;

while(true){
if(cljs.core.truth_((obj__13544 === first_obj__13541)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__13547__13548 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13544,opts));

if(cljs.core.truth_(G__13547__13548))
{var string__13549 = cljs.core.first.call(null,G__13547__13548);
var G__13547__13550 = G__13547__13548;

while(true){
cljs.core.string_print.call(null,string__13549);
var temp__3698__auto____13551 = cljs.core.next.call(null,G__13547__13550);

if(cljs.core.truth_(temp__3698__auto____13551))
{var G__13547__13552 = temp__3698__auto____13551;

{
var G__13557 = cljs.core.first.call(null,G__13547__13552);
var G__13558 = G__13547__13552;
string__13549 = G__13557;
G__13547__13550 = G__13558;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13554 = cljs.core.next.call(null,G__13542__13545);

if(cljs.core.truth_(temp__3698__auto____13554))
{var G__13542__13555 = temp__3698__auto____13554;

{
var G__13589 = cljs.core.first.call(null,G__13542__13555);
var G__13590 = G__13542__13555;
obj__13544 = G__13589;
G__13542__13545 = G__13590;
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
pr_str.cljs$lang$applyTo = (function (arglist__13591){
var objs = cljs.core.seq( arglist__13591 );;
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
pr.cljs$lang$applyTo = (function (arglist__13598){
var objs = cljs.core.seq( arglist__13598 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__13605){
var objs = cljs.core.seq( arglist__13605 );;
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
println.cljs$lang$applyTo = (function (arglist__13617){
var objs = cljs.core.seq( arglist__13617 );;
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
prn.cljs$lang$applyTo = (function (arglist__13623){
var objs = cljs.core.seq( arglist__13623 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__13624 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__13624,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____13626 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____13626))
{var nspc__13628 = temp__3698__auto____13626;

return cljs.core.str.call(null,nspc__13628,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____13629 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____13629))
{var nspc__13630 = temp__3698__auto____13629;

return cljs.core.str.call(null,nspc__13630,"/");
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
var pr_pair__13677 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__13677,"{",", ","}",opts,coll);
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
var this__13714 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__13717 = this;
var G__13718__13719 = cljs.core.seq.call(null,this__13717.watches);

if(cljs.core.truth_(G__13718__13719))
{var G__13722__13724 = cljs.core.first.call(null,G__13718__13719);
var vec__13723__13725 = G__13722__13724;
var key__13726 = cljs.core.nth.call(null,vec__13723__13725,0,null);
var f__13727 = cljs.core.nth.call(null,vec__13723__13725,1,null);
var G__13718__13728 = G__13718__13719;

var G__13722__13729 = G__13722__13724;
var G__13718__13730 = G__13718__13728;

while(true){
var vec__13731__13732 = G__13722__13729;
var key__13733 = cljs.core.nth.call(null,vec__13731__13732,0,null);
var f__13734 = cljs.core.nth.call(null,vec__13731__13732,1,null);
var G__13718__13735 = G__13718__13730;

f__13734.call(null,key__13733,this$,oldval,newval);
var temp__3698__auto____13736 = cljs.core.next.call(null,G__13718__13735);

if(cljs.core.truth_(temp__3698__auto____13736))
{var G__13718__13737 = temp__3698__auto____13736;

{
var G__13787 = cljs.core.first.call(null,G__13718__13737);
var G__13788 = G__13718__13737;
G__13722__13729 = G__13787;
G__13718__13730 = G__13788;
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
var this__13738 = this;
return this$.watches = cljs.core.assoc.call(null,this__13738.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__13741 = this;
return this$.watches = cljs.core.dissoc.call(null,this__13741.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__13745 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__13745.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__13746 = this;
return this__13746.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__13747 = this;
return this__13747.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__13748 = this;
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
var atom__13838 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__13839 = (function() { 
var G__13841__delegate = function (x,p__13792){
var map__13793__13795 = p__13792;
var map__13793__13796 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13793__13795))?cljs.core.apply.call(null,cljs.core.hash_map,map__13793__13795):map__13793__13795);
var validator__13797 = cljs.core.get.call(null,map__13793__13796,"﷐'validator");
var meta__13798 = cljs.core.get.call(null,map__13793__13796,"﷐'meta");

return (new cljs.core.Atom(x,meta__13798,validator__13797,null));
};
var G__13841 = function (x,var_args){
var p__13792 = null;
if (goog.isDef(var_args)) {
  p__13792 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13841__delegate.call(this, x, p__13792);
};
G__13841.cljs$lang$maxFixedArity = 1;
G__13841.cljs$lang$applyTo = (function (arglist__13842){
var x = cljs.core.first(arglist__13842);
var p__13792 = cljs.core.rest(arglist__13842);
return G__13841__delegate.call(this, x, p__13792);
});
return G__13841;
})()
;
atom = function(x,var_args){
var p__13792 = var_args;
switch(arguments.length){
case  1 :
return atom__13838.call(this,x);
default:
return atom__13839.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__13839.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____13855 = a.validator;

if(cljs.core.truth_(temp__3698__auto____13855))
{var validate__13861 = temp__3698__auto____13855;

if(cljs.core.truth_(validate__13861.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__13872 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__13872,new_value);
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
var swap_BANG___13901 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___13902 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___13903 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___13904 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___13905 = (function() { 
var G__13910__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__13910 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__13910__delegate.call(this, a, f, x, y, z, more);
};
G__13910.cljs$lang$maxFixedArity = 5;
G__13910.cljs$lang$applyTo = (function (arglist__13911){
var a = cljs.core.first(arglist__13911);
var f = cljs.core.first(cljs.core.next(arglist__13911));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13911)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13911))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13911)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13911)))));
return G__13910__delegate.call(this, a, f, x, y, z, more);
});
return G__13910;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___13901.call(this,a,f);
case  3 :
return swap_BANG___13902.call(this,a,f,x);
case  4 :
return swap_BANG___13903.call(this,a,f,x,y);
case  5 :
return swap_BANG___13904.call(this,a,f,x,y,z);
default:
return swap_BANG___13905.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___13905.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__13951){
var iref = cljs.core.first(arglist__13951);
var f = cljs.core.first(cljs.core.next(arglist__13951));
var args = cljs.core.rest(cljs.core.next(arglist__13951));
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
var gensym__13968 = (function (){
return gensym.call(null,"G__");
});
var gensym__13969 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__13968.call(this);
case  1 :
return gensym__13969.call(this,prefix_string);
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
var this__14033 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14033.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14037 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14037.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14037.state,this__14037.f);
}
return cljs.core.deref.call(null,this__14037.state);
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
delay.cljs$lang$applyTo = (function (arglist__14044){
var body = cljs.core.seq( arglist__14044 );;
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
var map__14053__14054 = options;
var map__14053__14056 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14053__14054))?cljs.core.apply.call(null,cljs.core.hash_map,map__14053__14054):map__14053__14054);
var keywordize_keys__14057 = cljs.core.get.call(null,map__14053__14056,"﷐'keywordize-keys");
var keyfn__14058 = (cljs.core.truth_(keywordize_keys__14057)?cljs.core.keyword:cljs.core.str);
var f__14068 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14067 = (function iter__14062(s__14063){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14063__14065 = s__14063;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14063__14065)))
{var k__14066 = cljs.core.first.call(null,s__14063__14065);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14058.call(null,k__14066),thisfn.call(null,(x[k__14066]))]),iter__14062.call(null,cljs.core.rest.call(null,s__14063__14065)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14067.call(null,cljs.core.js_keys.call(null,x));
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

return f__14068.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14081){
var x = cljs.core.first(arglist__14081);
var options = cljs.core.rest(arglist__14081);
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
var mem__14084 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14089__delegate = function (args){
var temp__3695__auto____14086 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14084),args);

if(cljs.core.truth_(temp__3695__auto____14086))
{var v__14087 = temp__3695__auto____14086;

return v__14087;
} else
{var ret__14088 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14084,cljs.core.assoc,args,ret__14088);
return ret__14088;
}
};
var G__14089 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14089__delegate.call(this, args);
};
G__14089.cljs$lang$maxFixedArity = 0;
G__14089.cljs$lang$applyTo = (function (arglist__14090){
var args = cljs.core.seq( arglist__14090 );;
return G__14089__delegate.call(this, args);
});
return G__14089;
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
var trampoline__14107 = (function (f){
while(true){
var ret__14092 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14092)))
{{
var G__14113 = ret__14092;
f = G__14113;
continue;
}
} else
{return ret__14092;
}
break;
}
});
var trampoline__14109 = (function() { 
var G__14114__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14114 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14114__delegate.call(this, f, args);
};
G__14114.cljs$lang$maxFixedArity = 1;
G__14114.cljs$lang$applyTo = (function (arglist__14115){
var f = cljs.core.first(arglist__14115);
var args = cljs.core.rest(arglist__14115);
return G__14114__delegate.call(this, f, args);
});
return G__14114;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14107.call(this,f);
default:
return trampoline__14109.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14109.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14131 = (function (){
return rand.call(null,1);
});
var rand__14132 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14131.call(this);
case  1 :
return rand__14132.call(this,n);
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
var k__14143 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14143,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14143,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14176 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14177 = (function (h,child,parent){
var or__3548__auto____14156 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14156))
{return or__3548__auto____14156;
} else
{var or__3548__auto____14157 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14157))
{return or__3548__auto____14157;
} else
{var and__3546__auto____14158 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14158))
{var and__3546__auto____14159 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14159))
{var and__3546__auto____14160 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14160))
{var ret__14161 = true;
var i__14162 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14163 = cljs.core.not.call(null,ret__14161);

if(cljs.core.truth_(or__3548__auto____14163))
{return or__3548__auto____14163;
} else
{return cljs.core._EQ_.call(null,i__14162,cljs.core.count.call(null,parent));
}
})()))
{return ret__14161;
} else
{{
var G__14183 = isa_QMARK_.call(null,h,child.call(null,i__14162),parent.call(null,i__14162));
var G__14184 = (i__14162 + 1);
ret__14161 = G__14183;
i__14162 = G__14184;
continue;
}
}
break;
}
} else
{return and__3546__auto____14160;
}
} else
{return and__3546__auto____14159;
}
} else
{return and__3546__auto____14158;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14176.call(this,h,child);
case  3 :
return isa_QMARK___14177.call(this,h,child,parent);
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
var parents__14190 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14191 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14190.call(this,h);
case  2 :
return parents__14191.call(this,h,tag);
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
var ancestors__14194 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14195 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14194.call(this,h);
case  2 :
return ancestors__14195.call(this,h,tag);
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
var descendants__14292 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14293 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14292.call(this,h);
case  2 :
return descendants__14293.call(this,h,tag);
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
var derive__14326 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14327 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14314 = "﷐'parents".call(null,h);
var td__14315 = "﷐'descendants".call(null,h);
var ta__14316 = "﷐'ancestors".call(null,h);
var tf__14319 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14322 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14314.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14316.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14316.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14314,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14319.call(null,"﷐'ancestors".call(null,h),tag,td__14315,parent,ta__14316),"﷐'descendants":tf__14319.call(null,"﷐'descendants".call(null,h),parent,ta__14316,tag,td__14315)});
})());

if(cljs.core.truth_(or__3548__auto____14322))
{return or__3548__auto____14322;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14326.call(this,h,tag);
case  3 :
return derive__14327.call(this,h,tag,parent);
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
var underive__14347 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__14348 = (function (h,tag,parent){
var parentMap__14336 = "﷐'parents".call(null,h);
var childsParents__14337 = (cljs.core.truth_(parentMap__14336.call(null,tag))?cljs.core.disj.call(null,parentMap__14336.call(null,tag),parent):cljs.core.set([]));
var newParents__14339 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14337))?cljs.core.assoc.call(null,parentMap__14336,tag,childsParents__14337):cljs.core.dissoc.call(null,parentMap__14336,tag));
var deriv_seq__14342 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14302_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14302_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14302_SHARP_),cljs.core.second.call(null,p1__14302_SHARP_)));
}),cljs.core.seq.call(null,newParents__14339)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__14336.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14304_SHARP_,p2__14305_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14304_SHARP_,p2__14305_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14342));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__14347.call(this,h,tag);
case  3 :
return underive__14348.call(this,h,tag,parent);
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
var xprefs__14361 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____14366 = (cljs.core.truth_((function (){var and__3546__auto____14365 = xprefs__14361;

if(cljs.core.truth_(and__3546__auto____14365))
{return xprefs__14361.call(null,y);
} else
{return and__3546__auto____14365;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____14366))
{return or__3548__auto____14366;
} else
{var or__3548__auto____14370 = (function (){var ps__14368 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14368) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__14368),prefer_table)))
{} else
{}
{
var G__14374 = cljs.core.rest.call(null,ps__14368);
ps__14368 = G__14374;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14370))
{return or__3548__auto____14370;
} else
{var or__3548__auto____14373 = (function (){var ps__14372 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14372) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__14372),y,prefer_table)))
{} else
{}
{
var G__14375 = cljs.core.rest.call(null,ps__14372);
ps__14372 = G__14375;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14373))
{return or__3548__auto____14373;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____14444 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____14444))
{return or__3548__auto____14444;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__14458 = cljs.core.reduce.call(null,(function (be,p__14449){
var vec__14450__14451 = p__14449;
var k__14452 = cljs.core.nth.call(null,vec__14450__14451,0,null);
var ___14453 = cljs.core.nth.call(null,vec__14450__14451,1,null);
var e__14454 = vec__14450__14451;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__14452)))
{var be2__14456 = (cljs.core.truth_((function (){var or__3548__auto____14455 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____14455))
{return or__3548__auto____14455;
} else
{return cljs.core.dominates.call(null,k__14452,cljs.core.first.call(null,be),prefer_table);
}
})())?e__14454:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__14456),k__14452,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__14452," and ",cljs.core.first.call(null,be2__14456),", and neither is preferred")));
}
return be2__14456;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__14458))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__14458));
return cljs.core.second.call(null,best_entry__14458);
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
if(cljs.core.truth_((function (){var and__3546__auto____14469 = mf;

if(cljs.core.truth_(and__3546__auto____14469))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____14469;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____14503 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14503))
{return or__3548__auto____14503;
} else
{var or__3548__auto____14505 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____14505))
{return or__3548__auto____14505;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____14506 = mf;

if(cljs.core.truth_(and__3546__auto____14506))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____14506;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____14510 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14510))
{return or__3548__auto____14510;
} else
{var or__3548__auto____14511 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____14511))
{return or__3548__auto____14511;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____14512 = mf;

if(cljs.core.truth_(and__3546__auto____14512))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____14512;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____14513 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14513))
{return or__3548__auto____14513;
} else
{var or__3548__auto____14514 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____14514))
{return or__3548__auto____14514;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____14515 = mf;

if(cljs.core.truth_(and__3546__auto____14515))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____14515;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____14516 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14516))
{return or__3548__auto____14516;
} else
{var or__3548__auto____14517 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____14517))
{return or__3548__auto____14517;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____14518 = mf;

if(cljs.core.truth_(and__3546__auto____14518))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____14518;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____14519 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14519))
{return or__3548__auto____14519;
} else
{var or__3548__auto____14520 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____14520))
{return or__3548__auto____14520;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____14523 = mf;

if(cljs.core.truth_(and__3546__auto____14523))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____14523;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____14524 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14524))
{return or__3548__auto____14524;
} else
{var or__3548__auto____14525 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____14525))
{return or__3548__auto____14525;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____14526 = mf;

if(cljs.core.truth_(and__3546__auto____14526))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____14526;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____14527 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14527))
{return or__3548__auto____14527;
} else
{var or__3548__auto____14528 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____14528))
{return or__3548__auto____14528;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____14530 = mf;

if(cljs.core.truth_(and__3546__auto____14530))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____14530;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____14534 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14534))
{return or__3548__auto____14534;
} else
{var or__3548__auto____14535 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____14535))
{return or__3548__auto____14535;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__14550 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__14551 = cljs.core._get_method.call(null,mf,dispatch_val__14550);

if(cljs.core.truth_(target_fn__14551))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__14550)));
}
return cljs.core.apply.call(null,target_fn__14551,args);
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
var this__14554 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__14557 = this;
cljs.core.swap_BANG_.call(null,this__14557.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__14557.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__14557.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__14557.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__14588 = this;
cljs.core.swap_BANG_.call(null,this__14588.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__14588.method_cache,this__14588.method_table,this__14588.cached_hierarchy,this__14588.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__14676 = this;
cljs.core.swap_BANG_.call(null,this__14676.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__14676.method_cache,this__14676.method_table,this__14676.cached_hierarchy,this__14676.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__14677 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__14677.cached_hierarchy),cljs.core.deref.call(null,this__14677.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__14677.method_cache,this__14677.method_table,this__14677.cached_hierarchy,this__14677.hierarchy);
}
var temp__3695__auto____14679 = cljs.core.deref.call(null,this__14677.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____14679))
{var target_fn__14680 = temp__3695__auto____14679;

return target_fn__14680;
} else
{var temp__3695__auto____14682 = cljs.core.find_and_cache_best_method.call(null,this__14677.name,dispatch_val,this__14677.hierarchy,this__14677.method_table,this__14677.prefer_table,this__14677.method_cache,this__14677.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____14682))
{var target_fn__14683 = temp__3695__auto____14682;

return target_fn__14683;
} else
{return cljs.core.deref.call(null,this__14677.method_table).call(null,this__14677.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__14684 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__14684.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__14684.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__14684.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__14684.method_cache,this__14684.method_table,this__14684.cached_hierarchy,this__14684.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__14685 = this;
return cljs.core.deref.call(null,this__14685.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__14687 = this;
return cljs.core.deref.call(null,this__14687.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__14688 = this;
return cljs.core.do_dispatch.call(null,mf,this__14688.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__14797__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__14797 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14797__delegate.call(this, _, args);
};
G__14797.cljs$lang$maxFixedArity = 1;
G__14797.cljs$lang$applyTo = (function (arglist__14798){
var _ = cljs.core.first(arglist__14798);
var args = cljs.core.rest(arglist__14798);
return G__14797__delegate.call(this, _, args);
});
return G__14797;
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
