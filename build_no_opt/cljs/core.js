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
var or__3548__auto____7306 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7306))
{return or__3548__auto____7306;
} else
{var or__3548__auto____7307 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7307))
{return or__3548__auto____7307;
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
var _invoke__7577 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7310 = this$;

if(cljs.core.truth_(and__3546__auto____7310))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7310;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7312 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7312))
{return or__3548__auto____7312;
} else
{var or__3548__auto____7314 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7314))
{return or__3548__auto____7314;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7578 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7317 = this$;

if(cljs.core.truth_(and__3546__auto____7317))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7317;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7319 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7319))
{return or__3548__auto____7319;
} else
{var or__3548__auto____7320 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7320))
{return or__3548__auto____7320;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7579 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7322 = this$;

if(cljs.core.truth_(and__3546__auto____7322))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7322;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7330 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7330))
{return or__3548__auto____7330;
} else
{var or__3548__auto____7332 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7332))
{return or__3548__auto____7332;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7580 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7334 = this$;

if(cljs.core.truth_(and__3546__auto____7334))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7334;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
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
})().call(null,this$,a,b,c);
}
});
var _invoke__7582 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7409 = this$;

if(cljs.core.truth_(and__3546__auto____7409))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7409;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7411 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7411))
{return or__3548__auto____7411;
} else
{var or__3548__auto____7413 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7413))
{return or__3548__auto____7413;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7583 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7417 = this$;

if(cljs.core.truth_(and__3546__auto____7417))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7417;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7418 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7418))
{return or__3548__auto____7418;
} else
{var or__3548__auto____7419 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7419))
{return or__3548__auto____7419;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7584 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7428 = this$;

if(cljs.core.truth_(and__3546__auto____7428))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7428;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7430 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7430))
{return or__3548__auto____7430;
} else
{var or__3548__auto____7433 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7433))
{return or__3548__auto____7433;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7585 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7436 = this$;

if(cljs.core.truth_(and__3546__auto____7436))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7436;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7439 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7439))
{return or__3548__auto____7439;
} else
{var or__3548__auto____7441 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7441))
{return or__3548__auto____7441;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7586 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7451 = this$;

if(cljs.core.truth_(and__3546__auto____7451))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7451;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7452 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7452))
{return or__3548__auto____7452;
} else
{var or__3548__auto____7454 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7454))
{return or__3548__auto____7454;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7587 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7457 = this$;

if(cljs.core.truth_(and__3546__auto____7457))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7457;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7459 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7459))
{return or__3548__auto____7459;
} else
{var or__3548__auto____7462 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7462))
{return or__3548__auto____7462;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7588 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7468 = this$;

if(cljs.core.truth_(and__3546__auto____7468))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7468;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7470 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7470))
{return or__3548__auto____7470;
} else
{var or__3548__auto____7472 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7472))
{return or__3548__auto____7472;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7589 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7476 = this$;

if(cljs.core.truth_(and__3546__auto____7476))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7476;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7480 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7480))
{return or__3548__auto____7480;
} else
{var or__3548__auto____7483 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7483))
{return or__3548__auto____7483;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7590 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7488 = this$;

if(cljs.core.truth_(and__3546__auto____7488))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7488;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7491 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7491))
{return or__3548__auto____7491;
} else
{var or__3548__auto____7492 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7492))
{return or__3548__auto____7492;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7591 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7493 = this$;

if(cljs.core.truth_(and__3546__auto____7493))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7493;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7494 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7494))
{return or__3548__auto____7494;
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
var _invoke__7592 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7498 = this$;

if(cljs.core.truth_(and__3546__auto____7498))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7498;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7524 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7524))
{return or__3548__auto____7524;
} else
{var or__3548__auto____7526 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7526))
{return or__3548__auto____7526;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7593 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7529 = this$;

if(cljs.core.truth_(and__3546__auto____7529))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7529;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7594 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7538 = this$;

if(cljs.core.truth_(and__3546__auto____7538))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7538;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7595 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7548 = this$;

if(cljs.core.truth_(and__3546__auto____7548))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7548;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7552 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7552))
{return or__3548__auto____7552;
} else
{var or__3548__auto____7554 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7554))
{return or__3548__auto____7554;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7596 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7558 = this$;

if(cljs.core.truth_(and__3546__auto____7558))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7558;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7597 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7564 = this$;

if(cljs.core.truth_(and__3546__auto____7564))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7564;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7598 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7570 = this$;

if(cljs.core.truth_(and__3546__auto____7570))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7570;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__7577.call(this,this$);
case  2 :
return _invoke__7578.call(this,this$,a);
case  3 :
return _invoke__7579.call(this,this$,a,b);
case  4 :
return _invoke__7580.call(this,this$,a,b,c);
case  5 :
return _invoke__7582.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7583.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7584.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7585.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7586.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7587.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7588.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7589.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7590.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7591.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7592.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7593.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7594.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7595.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7596.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7597.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7598.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7713 = coll;

if(cljs.core.truth_(and__3546__auto____7713))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7713;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7714 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7714))
{return or__3548__auto____7714;
} else
{var or__3548__auto____7716 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7716))
{return or__3548__auto____7716;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7744 = coll;

if(cljs.core.truth_(and__3546__auto____7744))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7744;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7745 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7745))
{return or__3548__auto____7745;
} else
{var or__3548__auto____7746 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7746))
{return or__3548__auto____7746;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7747 = coll;

if(cljs.core.truth_(and__3546__auto____7747))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7747;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7748 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7748))
{return or__3548__auto____7748;
} else
{var or__3548__auto____7749 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7749))
{return or__3548__auto____7749;
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
var _nth__7763 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7753 = coll;

if(cljs.core.truth_(and__3546__auto____7753))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7753;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7754 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7754))
{return or__3548__auto____7754;
} else
{var or__3548__auto____7755 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7755))
{return or__3548__auto____7755;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7764 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7756 = coll;

if(cljs.core.truth_(and__3546__auto____7756))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7756;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7758 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7758))
{return or__3548__auto____7758;
} else
{var or__3548__auto____7760 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7760))
{return or__3548__auto____7760;
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
return _nth__7763.call(this,coll,n);
case  3 :
return _nth__7764.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7771 = coll;

if(cljs.core.truth_(and__3546__auto____7771))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7771;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7772 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7772))
{return or__3548__auto____7772;
} else
{var or__3548__auto____7773 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7773))
{return or__3548__auto____7773;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7774 = coll;

if(cljs.core.truth_(and__3546__auto____7774))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7774;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7777 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7777))
{return or__3548__auto____7777;
} else
{var or__3548__auto____7779 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7779))
{return or__3548__auto____7779;
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
var _lookup__7795 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7787 = o;

if(cljs.core.truth_(and__3546__auto____7787))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7787;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7788 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7788))
{return or__3548__auto____7788;
} else
{var or__3548__auto____7789 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7789))
{return or__3548__auto____7789;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7796 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7790 = o;

if(cljs.core.truth_(and__3546__auto____7790))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7790;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7792 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7792))
{return or__3548__auto____7792;
} else
{var or__3548__auto____7793 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7793))
{return or__3548__auto____7793;
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
return _lookup__7795.call(this,o,k);
case  3 :
return _lookup__7796.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7802 = coll;

if(cljs.core.truth_(and__3546__auto____7802))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7802;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7803 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7803))
{return or__3548__auto____7803;
} else
{var or__3548__auto____7804 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7805 = coll;

if(cljs.core.truth_(and__3546__auto____7805))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7805;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7807 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7807))
{return or__3548__auto____7807;
} else
{var or__3548__auto____7809 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7809))
{return or__3548__auto____7809;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7821 = coll;

if(cljs.core.truth_(and__3546__auto____7821))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7821;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7832 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7832))
{return or__3548__auto____7832;
} else
{var or__3548__auto____7834 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7834))
{return or__3548__auto____7834;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7842 = coll;

if(cljs.core.truth_(and__3546__auto____7842))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7842;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7844 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7844))
{return or__3548__auto____7844;
} else
{var or__3548__auto____7845 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7849 = coll;

if(cljs.core.truth_(and__3546__auto____7849))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7849;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7875 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7875))
{return or__3548__auto____7875;
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
if(cljs.core.truth_((function (){var and__3546__auto____7897 = coll;

if(cljs.core.truth_(and__3546__auto____7897))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7897;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7898 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7898))
{return or__3548__auto____7898;
} else
{var or__3548__auto____7899 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7899))
{return or__3548__auto____7899;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7908 = coll;

if(cljs.core.truth_(and__3546__auto____7908))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7908;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7910 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7910))
{return or__3548__auto____7910;
} else
{var or__3548__auto____7913 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7913))
{return or__3548__auto____7913;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7924 = o;

if(cljs.core.truth_(and__3546__auto____7924))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7924;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7927 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7927))
{return or__3548__auto____7927;
} else
{var or__3548__auto____7929 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7929))
{return or__3548__auto____7929;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7939 = o;

if(cljs.core.truth_(and__3546__auto____7939))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7939;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7941 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7941))
{return or__3548__auto____7941;
} else
{var or__3548__auto____7942 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7942))
{return or__3548__auto____7942;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7951 = o;

if(cljs.core.truth_(and__3546__auto____7951))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7951;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7953 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7953))
{return or__3548__auto____7953;
} else
{var or__3548__auto____7954 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7954))
{return or__3548__auto____7954;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7962 = o;

if(cljs.core.truth_(and__3546__auto____7962))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7962;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7963 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7963))
{return or__3548__auto____7963;
} else
{var or__3548__auto____7964 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7964))
{return or__3548__auto____7964;
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
var _reduce__7983 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7971 = coll;

if(cljs.core.truth_(and__3546__auto____7971))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7971;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7972 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7972))
{return or__3548__auto____7972;
} else
{var or__3548__auto____7973 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7973))
{return or__3548__auto____7973;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7984 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7975 = coll;

if(cljs.core.truth_(and__3546__auto____7975))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7975;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7979 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7979))
{return or__3548__auto____7979;
} else
{var or__3548__auto____7981 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7981))
{return or__3548__auto____7981;
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
return _reduce__7983.call(this,coll,f);
case  3 :
return _reduce__7984.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8008 = o;

if(cljs.core.truth_(and__3546__auto____8008))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8008;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8012 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8012))
{return or__3548__auto____8012;
} else
{var or__3548__auto____8013 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8013))
{return or__3548__auto____8013;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8018 = o;

if(cljs.core.truth_(and__3546__auto____8018))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8018;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8020 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8020))
{return or__3548__auto____8020;
} else
{var or__3548__auto____8022 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8022))
{return or__3548__auto____8022;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8027 = o;

if(cljs.core.truth_(and__3546__auto____8027))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8027;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8028 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8028))
{return or__3548__auto____8028;
} else
{var or__3548__auto____8030 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8030))
{return or__3548__auto____8030;
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
if(cljs.core.truth_((function (){var and__3546__auto____8037 = o;

if(cljs.core.truth_(and__3546__auto____8037))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8037;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8039 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8039))
{return or__3548__auto____8039;
} else
{var or__3548__auto____8041 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8041))
{return or__3548__auto____8041;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8047 = d;

if(cljs.core.truth_(and__3546__auto____8047))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8047;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8049 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{var or__3548__auto____8050 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8050))
{return or__3548__auto____8050;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8055 = this$;

if(cljs.core.truth_(and__3546__auto____8055))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8055;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8057 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8057))
{return or__3548__auto____8057;
} else
{var or__3548__auto____8058 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8058))
{return or__3548__auto____8058;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8072 = this$;

if(cljs.core.truth_(and__3546__auto____8072))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8072;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8076 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8076))
{return or__3548__auto____8076;
} else
{var or__3548__auto____8121 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8121))
{return or__3548__auto____8121;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8125 = this$;

if(cljs.core.truth_(and__3546__auto____8125))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8125;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8128 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8128))
{return or__3548__auto____8128;
} else
{var or__3548__auto____8129 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8129))
{return or__3548__auto____8129;
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
var G__8181 = null;
var G__8181__8182 = (function (o,k){
return null;
});
var G__8181__8183 = (function (o,k,not_found){
return not_found;
});
G__8181 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8181__8182.call(this,o,k);
case  3 :
return G__8181__8183.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8181;
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
var G__8187 = null;
var G__8187__8188 = (function (_,f){
return f.call(null);
});
var G__8187__8189 = (function (_,f,start){
return start;
});
G__8187 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8187__8188.call(this,_,f);
case  3 :
return G__8187__8189.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8187;
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
var G__8194 = null;
var G__8194__8195 = (function (_,n){
return null;
});
var G__8194__8196 = (function (_,n,not_found){
return not_found;
});
G__8194 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8194__8195.call(this,_,n);
case  3 :
return G__8194__8196.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8194;
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
var ci_reduce__8325 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8282 = cljs.core._nth.call(null,cicoll,0);
var n__8283 = 1;

while(true){
if(cljs.core.truth_((n__8283 < cljs.core._count.call(null,cicoll))))
{{
var G__8329 = f.call(null,val__8282,cljs.core._nth.call(null,cicoll,n__8283));
var G__8330 = (n__8283 + 1);
val__8282 = G__8329;
n__8283 = G__8330;
continue;
}
} else
{return val__8282;
}
break;
}
}
});
var ci_reduce__8326 = (function (cicoll,f,val){
var val__8317 = val;
var n__8318 = 0;

while(true){
if(cljs.core.truth_((n__8318 < cljs.core._count.call(null,cicoll))))
{{
var G__8331 = f.call(null,val__8317,cljs.core._nth.call(null,cicoll,n__8318));
var G__8332 = (n__8318 + 1);
val__8317 = G__8331;
n__8318 = G__8332;
continue;
}
} else
{return val__8317;
}
break;
}
});
var ci_reduce__8327 = (function (cicoll,f,val,idx){
var val__8323 = val;
var n__8324 = idx;

while(true){
if(cljs.core.truth_((n__8324 < cljs.core._count.call(null,cicoll))))
{{
var G__8333 = f.call(null,val__8323,cljs.core._nth.call(null,cicoll,n__8324));
var G__8334 = (n__8324 + 1);
val__8323 = G__8333;
n__8324 = G__8334;
continue;
}
} else
{return val__8323;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8325.call(this,cicoll,f);
case  3 :
return ci_reduce__8326.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8327.call(this,cicoll,f,val,idx);
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
var this__8336 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8365 = null;
var G__8365__8368 = (function (_,f){
var this__8338 = this;
return cljs.core.ci_reduce.call(null,this__8338.a,f,(this__8338.a[this__8338.i]),(this__8338.i + 1));
});
var G__8365__8369 = (function (_,f,start){
var this__8340 = this;
return cljs.core.ci_reduce.call(null,this__8340.a,f,start,this__8340.i);
});
G__8365 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8365__8368.call(this,_,f);
case  3 :
return G__8365__8369.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8365;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8342 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8344 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8373 = null;
var G__8373__8375 = (function (coll,n){
var this__8346 = this;
var i__8348 = (n + this__8346.i);

if(cljs.core.truth_((i__8348 < this__8346.a.length)))
{return (this__8346.a[i__8348]);
} else
{return null;
}
});
var G__8373__8378 = (function (coll,n,not_found){
var this__8354 = this;
var i__8356 = (n + this__8354.i);

if(cljs.core.truth_((i__8356 < this__8354.a.length)))
{return (this__8354.a[i__8356]);
} else
{return not_found;
}
});
G__8373 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8373__8375.call(this,coll,n);
case  3 :
return G__8373__8378.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8373;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8358 = this;
return (this__8358.a.length - this__8358.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8360 = this;
return (this__8360.a[this__8360.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8362 = this;
if(cljs.core.truth_(((this__8362.i + 1) < this__8362.a.length)))
{return (new cljs.core.IndexedSeq(this__8362.a,(this__8362.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8364 = this;
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
var G__8476 = null;
var G__8476__8477 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8476__8478 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8476 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8476__8477.call(this,array,f);
case  3 :
return G__8476__8478.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8476;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8484 = null;
var G__8484__8485 = (function (array,k){
return (array[k]);
});
var G__8484__8486 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8484 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8484__8485.call(this,array,k);
case  3 :
return G__8484__8486.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8484;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8488 = null;
var G__8488__8489 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8488__8490 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8488 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8488__8489.call(this,array,n);
case  3 :
return G__8488__8490.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8488;
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
{var s__8530 = temp__3698__auto____8526;

return cljs.core._first.call(null,s__8530);
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
var G__8599 = cljs.core.next.call(null,s);
s = G__8599;
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
var s__8604 = cljs.core.seq.call(null,x);
var n__8606 = 0;

while(true){
if(cljs.core.truth_(s__8604))
{{
var G__8615 = cljs.core.next.call(null,s__8604);
var G__8616 = (n__8606 + 1);
s__8604 = G__8615;
n__8606 = G__8616;
continue;
}
} else
{return n__8606;
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
var conj__8640 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8641 = (function() { 
var G__8644__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8645 = conj.call(null,coll,x);
var G__8646 = cljs.core.first.call(null,xs);
var G__8648 = cljs.core.next.call(null,xs);
coll = G__8645;
x = G__8646;
xs = G__8648;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8644 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8644__delegate.call(this, coll, x, xs);
};
G__8644.cljs$lang$maxFixedArity = 2;
G__8644.cljs$lang$applyTo = (function (arglist__8654){
var coll = cljs.core.first(arglist__8654);
var x = cljs.core.first(cljs.core.next(arglist__8654));
var xs = cljs.core.rest(cljs.core.next(arglist__8654));
return G__8644__delegate.call(this, coll, x, xs);
});
return G__8644;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8640.call(this,coll,x);
default:
return conj__8641.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8641.cljs$lang$applyTo;
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
var nth__8680 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8681 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8680.call(this,coll,n);
case  3 :
return nth__8681.call(this,coll,n,not_found);
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
var get__8691 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8692 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8691.call(this,o,k);
case  3 :
return get__8692.call(this,o,k,not_found);
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
var assoc__8703 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8704 = (function() { 
var G__8707__delegate = function (coll,k,v,kvs){
while(true){
var ret__8699 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8708 = ret__8699;
var G__8710 = cljs.core.first.call(null,kvs);
var G__8712 = cljs.core.second.call(null,kvs);
var G__8714 = cljs.core.nnext.call(null,kvs);
coll = G__8708;
k = G__8710;
v = G__8712;
kvs = G__8714;
continue;
}
} else
{return ret__8699;
}
break;
}
};
var G__8707 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8707__delegate.call(this, coll, k, v, kvs);
};
G__8707.cljs$lang$maxFixedArity = 3;
G__8707.cljs$lang$applyTo = (function (arglist__8718){
var coll = cljs.core.first(arglist__8718);
var k = cljs.core.first(cljs.core.next(arglist__8718));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8718)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8718)));
return G__8707__delegate.call(this, coll, k, v, kvs);
});
return G__8707;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8703.call(this,coll,k,v);
default:
return assoc__8704.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8704.cljs$lang$applyTo;
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
var dissoc__8736 = (function (coll){
return coll;
});
var dissoc__8737 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8738 = (function() { 
var G__8740__delegate = function (coll,k,ks){
while(true){
var ret__8734 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8741 = ret__8734;
var G__8742 = cljs.core.first.call(null,ks);
var G__8743 = cljs.core.next.call(null,ks);
coll = G__8741;
k = G__8742;
ks = G__8743;
continue;
}
} else
{return ret__8734;
}
break;
}
};
var G__8740 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8740__delegate.call(this, coll, k, ks);
};
G__8740.cljs$lang$maxFixedArity = 2;
G__8740.cljs$lang$applyTo = (function (arglist__8744){
var coll = cljs.core.first(arglist__8744);
var k = cljs.core.first(cljs.core.next(arglist__8744));
var ks = cljs.core.rest(cljs.core.next(arglist__8744));
return G__8740__delegate.call(this, coll, k, ks);
});
return G__8740;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8736.call(this,coll);
case  2 :
return dissoc__8737.call(this,coll,k);
default:
return dissoc__8738.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8738.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8759 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8760 = x__445__auto____8759;

if(cljs.core.truth_(and__3546__auto____8760))
{var and__3546__auto____8761 = x__445__auto____8759.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8761))
{return cljs.core.not.call(null,x__445__auto____8759.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8761;
}
} else
{return and__3546__auto____8760;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8759);
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
var disj__8779 = (function (coll){
return coll;
});
var disj__8781 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8790 = (function() { 
var G__8793__delegate = function (coll,k,ks){
while(true){
var ret__8775 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8794 = ret__8775;
var G__8795 = cljs.core.first.call(null,ks);
var G__8796 = cljs.core.next.call(null,ks);
coll = G__8794;
k = G__8795;
ks = G__8796;
continue;
}
} else
{return ret__8775;
}
break;
}
};
var G__8793 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8793__delegate.call(this, coll, k, ks);
};
G__8793.cljs$lang$maxFixedArity = 2;
G__8793.cljs$lang$applyTo = (function (arglist__8797){
var coll = cljs.core.first(arglist__8797);
var k = cljs.core.first(cljs.core.next(arglist__8797));
var ks = cljs.core.rest(cljs.core.next(arglist__8797));
return G__8793__delegate.call(this, coll, k, ks);
});
return G__8793;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8779.call(this,coll);
case  2 :
return disj__8781.call(this,coll,k);
default:
return disj__8790.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8790.cljs$lang$applyTo;
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
{var x__445__auto____8802 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8803 = x__445__auto____8802;

if(cljs.core.truth_(and__3546__auto____8803))
{var and__3546__auto____8805 = x__445__auto____8802.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8805))
{return cljs.core.not.call(null,x__445__auto____8802.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8805;
}
} else
{return and__3546__auto____8803;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8802);
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
{var x__445__auto____8822 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8823 = x__445__auto____8822;

if(cljs.core.truth_(and__3546__auto____8823))
{var and__3546__auto____8828 = x__445__auto____8822.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8828))
{return cljs.core.not.call(null,x__445__auto____8822.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8828;
}
} else
{return and__3546__auto____8823;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8822);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8831 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8834 = x__445__auto____8831;

if(cljs.core.truth_(and__3546__auto____8834))
{var and__3546__auto____8855 = x__445__auto____8831.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8855))
{return cljs.core.not.call(null,x__445__auto____8831.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8855;
}
} else
{return and__3546__auto____8834;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8831);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8861 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8862 = x__445__auto____8861;

if(cljs.core.truth_(and__3546__auto____8862))
{var and__3546__auto____8863 = x__445__auto____8861.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8863))
{return cljs.core.not.call(null,x__445__auto____8861.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8863;
}
} else
{return and__3546__auto____8862;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8861);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8870 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8871 = x__445__auto____8870;

if(cljs.core.truth_(and__3546__auto____8871))
{var and__3546__auto____8873 = x__445__auto____8870.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8873))
{return cljs.core.not.call(null,x__445__auto____8870.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8873;
}
} else
{return and__3546__auto____8871;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8870);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8884 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8885 = x__445__auto____8884;

if(cljs.core.truth_(and__3546__auto____8885))
{var and__3546__auto____8887 = x__445__auto____8884.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8887))
{return cljs.core.not.call(null,x__445__auto____8884.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8887;
}
} else
{return and__3546__auto____8885;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8884);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8891 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8893 = x__445__auto____8891;

if(cljs.core.truth_(and__3546__auto____8893))
{var and__3546__auto____8894 = x__445__auto____8891.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8894))
{return cljs.core.not.call(null,x__445__auto____8891.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8894;
}
} else
{return and__3546__auto____8893;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8891);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8900 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8900.push(key);
}));
return keys__8900;
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
{var x__445__auto____8922 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8924 = x__445__auto____8922;

if(cljs.core.truth_(and__3546__auto____8924))
{var and__3546__auto____8926 = x__445__auto____8922.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8926))
{return cljs.core.not.call(null,x__445__auto____8922.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8926;
}
} else
{return and__3546__auto____8924;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8922);
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
var and__3546__auto____8936 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8936))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8937 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8937))
{return or__3548__auto____8937;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8936;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8941 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8941))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8941;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8943 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8943))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8943;
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
var and__3546__auto____8947 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8947))
{return (n == n.toFixed());
} else
{return and__3546__auto____8947;
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
if(cljs.core.truth_((function (){var and__3546__auto____8954 = coll;

if(cljs.core.truth_(and__3546__auto____8954))
{var and__3546__auto____8957 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8957))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8957;
}
} else
{return and__3546__auto____8954;
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
var distinct_QMARK___8967 = (function (x){
return true;
});
var distinct_QMARK___8968 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8969 = (function() { 
var G__8972__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8961 = cljs.core.set([y,x]);
var xs__8962 = more;

while(true){
var x__8963 = cljs.core.first.call(null,xs__8962);
var etc__8965 = cljs.core.next.call(null,xs__8962);

if(cljs.core.truth_(xs__8962))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8961,x__8963)))
{return false;
} else
{{
var G__8973 = cljs.core.conj.call(null,s__8961,x__8963);
var G__8974 = etc__8965;
s__8961 = G__8973;
xs__8962 = G__8974;
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
var G__8972 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8972__delegate.call(this, x, y, more);
};
G__8972.cljs$lang$maxFixedArity = 2;
G__8972.cljs$lang$applyTo = (function (arglist__8975){
var x = cljs.core.first(arglist__8975);
var y = cljs.core.first(cljs.core.next(arglist__8975));
var more = cljs.core.rest(cljs.core.next(arglist__8975));
return G__8972__delegate.call(this, x, y, more);
});
return G__8972;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8967.call(this,x);
case  2 :
return distinct_QMARK___8968.call(this,x,y);
default:
return distinct_QMARK___8969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8969.cljs$lang$applyTo;
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
var sort__8999 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9000 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8994 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8994,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8994);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8999.call(this,comp);
case  2 :
return sort__9000.call(this,comp,coll);
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
var sort_by__9004 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9005 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9004.call(this,keyfn,comp);
case  3 :
return sort_by__9005.call(this,keyfn,comp,coll);
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
var reduce__9018 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9019 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9018.call(this,f,val);
case  3 :
return reduce__9019.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9038 = (function (f,coll){
var temp__3695__auto____9031 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9031))
{var s__9033 = temp__3695__auto____9031;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9033),cljs.core.next.call(null,s__9033));
} else
{return f.call(null);
}
});
var seq_reduce__9039 = (function (f,val,coll){
var val__9035 = val;
var coll__9037 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9037))
{{
var G__9045 = f.call(null,val__9035,cljs.core.first.call(null,coll__9037));
var G__9046 = cljs.core.next.call(null,coll__9037);
val__9035 = G__9045;
coll__9037 = G__9046;
continue;
}
} else
{return val__9035;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9038.call(this,f,val);
case  3 :
return seq_reduce__9039.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9051 = null;
var G__9051__9054 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9051__9055 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9051 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9051__9054.call(this,coll,f);
case  3 :
return G__9051__9055.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9051;
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
var _PLUS___9079 = (function() { 
var G__9081__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
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
return _PLUS___9079.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9079.cljs$lang$applyTo;
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
var ___9142 = (function (x){
return (- x);
});
var ___9143 = (function (x,y){
return (x - y);
});
var ___9144 = (function() { 
var G__9146__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9146 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9146__delegate.call(this, x, y, more);
};
G__9146.cljs$lang$maxFixedArity = 2;
G__9146.cljs$lang$applyTo = (function (arglist__9147){
var x = cljs.core.first(arglist__9147);
var y = cljs.core.first(cljs.core.next(arglist__9147));
var more = cljs.core.rest(cljs.core.next(arglist__9147));
return G__9146__delegate.call(this, x, y, more);
});
return G__9146;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9142.call(this,x);
case  2 :
return ___9143.call(this,x,y);
default:
return ___9144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9144.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9159 = (function (){
return 1;
});
var _STAR___9160 = (function (x){
return x;
});
var _STAR___9161 = (function (x,y){
return (x * y);
});
var _STAR___9162 = (function() { 
var G__9170__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9170 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9170__delegate.call(this, x, y, more);
};
G__9170.cljs$lang$maxFixedArity = 2;
G__9170.cljs$lang$applyTo = (function (arglist__9171){
var x = cljs.core.first(arglist__9171);
var y = cljs.core.first(cljs.core.next(arglist__9171));
var more = cljs.core.rest(cljs.core.next(arglist__9171));
return G__9170__delegate.call(this, x, y, more);
});
return G__9170;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9159.call(this);
case  1 :
return _STAR___9160.call(this,x);
case  2 :
return _STAR___9161.call(this,x,y);
default:
return _STAR___9162.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9162.cljs$lang$applyTo;
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
var _SLASH___9177 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9178 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9179 = (function() { 
var G__9181__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9181 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9181__delegate.call(this, x, y, more);
};
G__9181.cljs$lang$maxFixedArity = 2;
G__9181.cljs$lang$applyTo = (function (arglist__9185){
var x = cljs.core.first(arglist__9185);
var y = cljs.core.first(cljs.core.next(arglist__9185));
var more = cljs.core.rest(cljs.core.next(arglist__9185));
return G__9181__delegate.call(this, x, y, more);
});
return G__9181;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9177.call(this,x);
case  2 :
return _SLASH___9178.call(this,x,y);
default:
return _SLASH___9179.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9179.cljs$lang$applyTo;
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
var _LT___9193 = (function (x){
return true;
});
var _LT___9194 = (function (x,y){
return (x < y);
});
var _LT___9195 = (function() { 
var G__9197__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
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
{return (y < cljs.core.first.call(null,more));
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
G__9197.cljs$lang$applyTo = (function (arglist__9205){
var x = cljs.core.first(arglist__9205);
var y = cljs.core.first(cljs.core.next(arglist__9205));
var more = cljs.core.rest(cljs.core.next(arglist__9205));
return G__9197__delegate.call(this, x, y, more);
});
return G__9197;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9193.call(this,x);
case  2 :
return _LT___9194.call(this,x,y);
default:
return _LT___9195.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9195.cljs$lang$applyTo;
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
var _LT__EQ___9211 = (function (x){
return true;
});
var _LT__EQ___9212 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9213 = (function() { 
var G__9220__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9224 = y;
var G__9225 = cljs.core.first.call(null,more);
var G__9226 = cljs.core.next.call(null,more);
x = G__9224;
y = G__9225;
more = G__9226;
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
var G__9220 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9220__delegate.call(this, x, y, more);
};
G__9220.cljs$lang$maxFixedArity = 2;
G__9220.cljs$lang$applyTo = (function (arglist__9229){
var x = cljs.core.first(arglist__9229);
var y = cljs.core.first(cljs.core.next(arglist__9229));
var more = cljs.core.rest(cljs.core.next(arglist__9229));
return G__9220__delegate.call(this, x, y, more);
});
return G__9220;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9211.call(this,x);
case  2 :
return _LT__EQ___9212.call(this,x,y);
default:
return _LT__EQ___9213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9213.cljs$lang$applyTo;
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
var _GT___9241 = (function (x){
return true;
});
var _GT___9243 = (function (x,y){
return (x > y);
});
var _GT___9244 = (function() { 
var G__9246__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9248 = y;
var G__9250 = cljs.core.first.call(null,more);
var G__9251 = cljs.core.next.call(null,more);
x = G__9248;
y = G__9250;
more = G__9251;
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
var G__9246 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9246__delegate.call(this, x, y, more);
};
G__9246.cljs$lang$maxFixedArity = 2;
G__9246.cljs$lang$applyTo = (function (arglist__9252){
var x = cljs.core.first(arglist__9252);
var y = cljs.core.first(cljs.core.next(arglist__9252));
var more = cljs.core.rest(cljs.core.next(arglist__9252));
return G__9246__delegate.call(this, x, y, more);
});
return G__9246;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9241.call(this,x);
case  2 :
return _GT___9243.call(this,x,y);
default:
return _GT___9244.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9244.cljs$lang$applyTo;
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
var _GT__EQ___9257 = (function (x){
return true;
});
var _GT__EQ___9258 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9259 = (function() { 
var G__9261__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9262 = y;
var G__9263 = cljs.core.first.call(null,more);
var G__9264 = cljs.core.next.call(null,more);
x = G__9262;
y = G__9263;
more = G__9264;
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
var G__9261 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9261__delegate.call(this, x, y, more);
};
G__9261.cljs$lang$maxFixedArity = 2;
G__9261.cljs$lang$applyTo = (function (arglist__9277){
var x = cljs.core.first(arglist__9277);
var y = cljs.core.first(cljs.core.next(arglist__9277));
var more = cljs.core.rest(cljs.core.next(arglist__9277));
return G__9261__delegate.call(this, x, y, more);
});
return G__9261;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9257.call(this,x);
case  2 :
return _GT__EQ___9258.call(this,x,y);
default:
return _GT__EQ___9259.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9259.cljs$lang$applyTo;
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
var max__9353 = (function (x){
return x;
});
var max__9354 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9355 = (function() { 
var G__9357__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9357 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9357__delegate.call(this, x, y, more);
};
G__9357.cljs$lang$maxFixedArity = 2;
G__9357.cljs$lang$applyTo = (function (arglist__9358){
var x = cljs.core.first(arglist__9358);
var y = cljs.core.first(cljs.core.next(arglist__9358));
var more = cljs.core.rest(cljs.core.next(arglist__9358));
return G__9357__delegate.call(this, x, y, more);
});
return G__9357;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9353.call(this,x);
case  2 :
return max__9354.call(this,x,y);
default:
return max__9355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9355.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9368 = (function (x){
return x;
});
var min__9369 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9370 = (function() { 
var G__9372__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9372 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9372__delegate.call(this, x, y, more);
};
G__9372.cljs$lang$maxFixedArity = 2;
G__9372.cljs$lang$applyTo = (function (arglist__9378){
var x = cljs.core.first(arglist__9378);
var y = cljs.core.first(cljs.core.next(arglist__9378));
var more = cljs.core.rest(cljs.core.next(arglist__9378));
return G__9372__delegate.call(this, x, y, more);
});
return G__9372;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9368.call(this,x);
case  2 :
return min__9369.call(this,x,y);
default:
return min__9370.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9370.cljs$lang$applyTo;
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
var rem__9394 = (n % d);

return cljs.core.fix.call(null,((n - rem__9394) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9406 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9406));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9411 = (function (){
return Math.random.call(null);
});
var rand__9412 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9411.call(this);
case  1 :
return rand__9412.call(this,n);
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
var _EQ__EQ___9470 = (function (x){
return true;
});
var _EQ__EQ___9471 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9472 = (function() { 
var G__9474__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9475 = y;
var G__9476 = cljs.core.first.call(null,more);
var G__9477 = cljs.core.next.call(null,more);
x = G__9475;
y = G__9476;
more = G__9477;
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
var G__9474 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9474__delegate.call(this, x, y, more);
};
G__9474.cljs$lang$maxFixedArity = 2;
G__9474.cljs$lang$applyTo = (function (arglist__9479){
var x = cljs.core.first(arglist__9479);
var y = cljs.core.first(cljs.core.next(arglist__9479));
var more = cljs.core.rest(cljs.core.next(arglist__9479));
return G__9474__delegate.call(this, x, y, more);
});
return G__9474;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9470.call(this,x);
case  2 :
return _EQ__EQ___9471.call(this,x,y);
default:
return _EQ__EQ___9472.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9472.cljs$lang$applyTo;
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
var n__9575 = n;
var xs__9576 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9577 = xs__9576;

if(cljs.core.truth_(and__3546__auto____9577))
{return (n__9575 > 0);
} else
{return and__3546__auto____9577;
}
})()))
{{
var G__9586 = (n__9575 - 1);
var G__9587 = cljs.core.next.call(null,xs__9576);
n__9575 = G__9586;
xs__9576 = G__9587;
continue;
}
} else
{return xs__9576;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9593 = null;
var G__9593__9594 = (function (coll,n){
var temp__3695__auto____9588 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9588))
{var xs__9590 = temp__3695__auto____9588;

return cljs.core.first.call(null,xs__9590);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9593__9595 = (function (coll,n,not_found){
var temp__3695__auto____9591 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9591))
{var xs__9592 = temp__3695__auto____9591;

return cljs.core.first.call(null,xs__9592);
} else
{return not_found;
}
});
G__9593 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9593__9594.call(this,coll,n);
case  3 :
return G__9593__9595.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9593;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9600 = (function (){
return "";
});
var str_STAR___9601 = (function (x){
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
var str_STAR___9602 = (function() { 
var G__9604__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9605 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9606 = cljs.core.next.call(null,more);
sb = G__9605;
more = G__9606;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9604 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9604__delegate.call(this, x, ys);
};
G__9604.cljs$lang$maxFixedArity = 1;
G__9604.cljs$lang$applyTo = (function (arglist__9607){
var x = cljs.core.first(arglist__9607);
var ys = cljs.core.rest(arglist__9607);
return G__9604__delegate.call(this, x, ys);
});
return G__9604;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9600.call(this);
case  1 :
return str_STAR___9601.call(this,x);
default:
return str_STAR___9602.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9602.cljs$lang$applyTo;
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
var str__9608 = (function (){
return "";
});
var str__9609 = (function (x){
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
var str__9610 = (function() { 
var G__9612__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9612 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9612__delegate.call(this, x, ys);
};
G__9612.cljs$lang$maxFixedArity = 1;
G__9612.cljs$lang$applyTo = (function (arglist__9613){
var x = cljs.core.first(arglist__9613);
var ys = cljs.core.rest(arglist__9613);
return G__9612__delegate.call(this, x, ys);
});
return G__9612;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9608.call(this);
case  1 :
return str__9609.call(this,x);
default:
return str__9610.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9610.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9622 = (function (s,start){
return s.substring(start);
});
var subs__9623 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9622.call(this,s,start);
case  3 :
return subs__9623.call(this,s,start,end);
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
var symbol__9627 = (function (name){
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
var symbol__9629 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9627.call(this,ns);
case  2 :
return symbol__9629.call(this,ns,name);
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
var keyword__9641 = (function (name){
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
var keyword__9642 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9641.call(this,ns);
case  2 :
return keyword__9642.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9650 = cljs.core.seq.call(null,x);
var ys__9654 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9650)))
{return cljs.core.nil_QMARK_.call(null,ys__9654);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9654)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9650),cljs.core.first.call(null,ys__9654))))
{{
var G__9659 = cljs.core.next.call(null,xs__9650);
var G__9660 = cljs.core.next.call(null,ys__9654);
xs__9650 = G__9659;
ys__9654 = G__9660;
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
return cljs.core.reduce.call(null,(function (p1__9665_SHARP_,p2__9666_SHARP_){
return cljs.core.hash_combine.call(null,p1__9665_SHARP_,cljs.core.hash.call(null,p2__9666_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9675__9676 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9675__9676))
{var G__9678__9680 = cljs.core.first.call(null,G__9675__9676);
var vec__9679__9681 = G__9678__9680;
var key_name__9682 = cljs.core.nth.call(null,vec__9679__9681,0,null);
var f__9683 = cljs.core.nth.call(null,vec__9679__9681,1,null);
var G__9675__9684 = G__9675__9676;

var G__9678__9685 = G__9678__9680;
var G__9675__9686 = G__9675__9684;

while(true){
var vec__9687__9688 = G__9678__9685;
var key_name__9689 = cljs.core.nth.call(null,vec__9687__9688,0,null);
var f__9690 = cljs.core.nth.call(null,vec__9687__9688,1,null);
var G__9675__9691 = G__9675__9686;

var str_name__9692 = cljs.core.name.call(null,key_name__9689);

obj[str_name__9692] = f__9690;
var temp__3698__auto____9693 = cljs.core.next.call(null,G__9675__9691);

if(cljs.core.truth_(temp__3698__auto____9693))
{var G__9675__9694 = temp__3698__auto____9693;

{
var G__9713 = cljs.core.first.call(null,G__9675__9694);
var G__9714 = G__9675__9694;
G__9678__9685 = G__9713;
G__9675__9686 = G__9714;
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
var this__9719 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9722 = this;
return (new cljs.core.List(this__9722.meta,o,coll,(this__9722.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9723 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9752 = this;
return this__9752.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9754 = this;
return this__9754.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9756 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9760 = this;
return this__9760.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9761 = this;
return this__9761.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9762 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9765 = this;
return (new cljs.core.List(meta,this__9765.first,this__9765.rest,this__9765.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9766 = this;
return this__9766.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9769 = this;
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
var this__9786 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9790 = this;
return (new cljs.core.List(this__9790.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9792 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9794 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9796 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9798 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9801 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9802 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9804 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9806 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9807 = this;
return this__9807.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9808 = this;
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
list.cljs$lang$applyTo = (function (arglist__9878){
var items = cljs.core.seq( arglist__9878 );;
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
var this__9884 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9885 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9886 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9887 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9887.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9890 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9894 = this;
return this__9894.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9900 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9900.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9900.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9908 = this;
return this__9908.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9912 = this;
return (new cljs.core.Cons(meta,this__9912.first,this__9912.rest));
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
var G__9927 = null;
var G__9927__9929 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9927__9930 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9927 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9927__9929.call(this,string,f);
case  3 :
return G__9927__9930.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9927;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9941 = null;
var G__9941__9943 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9941__9944 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9941 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9941__9943.call(this,string,k);
case  3 :
return G__9941__9944.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9941;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9950 = null;
var G__9950__9951 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9950__9952 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9950 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9950__9951.call(this,string,n);
case  3 :
return G__9950__9952.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9950;
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
var G__10063 = null;
var G__10063__10064 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10063__10065 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10063 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10063__10064.call(this,this$,coll);
case  3 :
return G__10063__10065.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10063;
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
var x__10071 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10071;
} else
{lazy_seq.x = x__10071.call(null);
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
var this__10077 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10078 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10079 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10080 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10080.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10081 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10082 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10083 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10084 = this;
return this__10084.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10087 = this;
return (new cljs.core.LazySeq(meta,this__10087.realized,this__10087.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10089 = cljs.core.array.call(null);

var s__10090 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10090)))
{ary__10089.push(cljs.core.first.call(null,s__10090));
{
var G__10091 = cljs.core.next.call(null,s__10090);
s__10090 = G__10091;
continue;
}
} else
{return ary__10089;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10092 = s;
var i__10093 = n;
var sum__10094 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10095 = (i__10093 > 0);

if(cljs.core.truth_(and__3546__auto____10095))
{return cljs.core.seq.call(null,s__10092);
} else
{return and__3546__auto____10095;
}
})()))
{{
var G__10096 = cljs.core.next.call(null,s__10092);
var G__10097 = (i__10093 - 1);
var G__10098 = (sum__10094 + 1);
s__10092 = G__10096;
i__10093 = G__10097;
sum__10094 = G__10098;
continue;
}
} else
{return sum__10094;
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
var concat__10111 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10112 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10113 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10105 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10105))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10105),concat.call(null,cljs.core.rest.call(null,s__10105),y));
} else
{return y;
}
})));
});
var concat__10115 = (function() { 
var G__10118__delegate = function (x,y,zs){
var cat__10107 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10106 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10106))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10106),cat.call(null,cljs.core.rest.call(null,xys__10106),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10107.call(null,concat.call(null,x,y),zs);
};
var G__10118 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10118__delegate.call(this, x, y, zs);
};
G__10118.cljs$lang$maxFixedArity = 2;
G__10118.cljs$lang$applyTo = (function (arglist__10122){
var x = cljs.core.first(arglist__10122);
var y = cljs.core.first(cljs.core.next(arglist__10122));
var zs = cljs.core.rest(cljs.core.next(arglist__10122));
return G__10118__delegate.call(this, x, y, zs);
});
return G__10118;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10111.call(this);
case  1 :
return concat__10112.call(this,x);
case  2 :
return concat__10113.call(this,x,y);
default:
return concat__10115.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10115.cljs$lang$applyTo;
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
var list_STAR___10204 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10205 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10206 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10207 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10208 = (function() { 
var G__10211__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10211 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10211__delegate.call(this, a, b, c, d, more);
};
G__10211.cljs$lang$maxFixedArity = 4;
G__10211.cljs$lang$applyTo = (function (arglist__10214){
var a = cljs.core.first(arglist__10214);
var b = cljs.core.first(cljs.core.next(arglist__10214));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10214)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10214))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10214))));
return G__10211__delegate.call(this, a, b, c, d, more);
});
return G__10211;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10204.call(this,a);
case  2 :
return list_STAR___10205.call(this,a,b);
case  3 :
return list_STAR___10206.call(this,a,b,c);
case  4 :
return list_STAR___10207.call(this,a,b,c,d);
default:
return list_STAR___10208.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10208.cljs$lang$applyTo;
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
var apply__10243 = (function (f,args){
var fixed_arity__10219 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10219 + 1)) <= fixed_arity__10219)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10244 = (function (f,x,args){
var arglist__10223 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10224 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10223,fixed_arity__10224) <= fixed_arity__10224)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10223));
} else
{return f.cljs$lang$applyTo(arglist__10223);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10223));
}
});
var apply__10245 = (function (f,x,y,args){
var arglist__10234 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10236 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10234,fixed_arity__10236) <= fixed_arity__10236)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10234));
} else
{return f.cljs$lang$applyTo(arglist__10234);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10234));
}
});
var apply__10246 = (function (f,x,y,z,args){
var arglist__10237 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10238 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10237,fixed_arity__10238) <= fixed_arity__10238)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10237));
} else
{return f.cljs$lang$applyTo(arglist__10237);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10237));
}
});
var apply__10247 = (function() { 
var G__10251__delegate = function (f,a,b,c,d,args){
var arglist__10239 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10241 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10239,fixed_arity__10241) <= fixed_arity__10241)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10239));
} else
{return f.cljs$lang$applyTo(arglist__10239);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10239));
}
};
var G__10251 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10251__delegate.call(this, f, a, b, c, d, args);
};
G__10251.cljs$lang$maxFixedArity = 5;
G__10251.cljs$lang$applyTo = (function (arglist__10257){
var f = cljs.core.first(arglist__10257);
var a = cljs.core.first(cljs.core.next(arglist__10257));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10257)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10257))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10257)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10257)))));
return G__10251__delegate.call(this, f, a, b, c, d, args);
});
return G__10251;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10243.call(this,f,a);
case  3 :
return apply__10244.call(this,f,a,b);
case  4 :
return apply__10245.call(this,f,a,b,c);
case  5 :
return apply__10246.call(this,f,a,b,c,d);
default:
return apply__10247.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10247.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10262){
var obj = cljs.core.first(arglist__10262);
var f = cljs.core.first(cljs.core.next(arglist__10262));
var args = cljs.core.rest(cljs.core.next(arglist__10262));
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
var not_EQ___10273 = (function (x){
return false;
});
var not_EQ___10274 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10275 = (function() { 
var G__10277__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10277 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10277__delegate.call(this, x, y, more);
};
G__10277.cljs$lang$maxFixedArity = 2;
G__10277.cljs$lang$applyTo = (function (arglist__10278){
var x = cljs.core.first(arglist__10278);
var y = cljs.core.first(cljs.core.next(arglist__10278));
var more = cljs.core.rest(cljs.core.next(arglist__10278));
return G__10277__delegate.call(this, x, y, more);
});
return G__10277;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10273.call(this,x);
case  2 :
return not_EQ___10274.call(this,x,y);
default:
return not_EQ___10275.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10275.cljs$lang$applyTo;
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
var G__10287 = pred;
var G__10288 = cljs.core.next.call(null,coll);
pred = G__10287;
coll = G__10288;
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
{var or__3548__auto____10294 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10294))
{return or__3548__auto____10294;
} else
{{
var G__10297 = pred;
var G__10298 = cljs.core.next.call(null,coll);
pred = G__10297;
coll = G__10298;
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
var G__10320 = null;
var G__10320__10321 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10320__10322 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10320__10323 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10320__10324 = (function() { 
var G__10331__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10331 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10331__delegate.call(this, x, y, zs);
};
G__10331.cljs$lang$maxFixedArity = 2;
G__10331.cljs$lang$applyTo = (function (arglist__10334){
var x = cljs.core.first(arglist__10334);
var y = cljs.core.first(cljs.core.next(arglist__10334));
var zs = cljs.core.rest(cljs.core.next(arglist__10334));
return G__10331__delegate.call(this, x, y, zs);
});
return G__10331;
})()
;
G__10320 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10320__10321.call(this);
case  1 :
return G__10320__10322.call(this,x);
case  2 :
return G__10320__10323.call(this,x,y);
default:
return G__10320__10324.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10320.cljs$lang$maxFixedArity = 2;
G__10320.cljs$lang$applyTo = G__10320__10324.cljs$lang$applyTo;
return G__10320;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10338__delegate = function (args){
return x;
};
var G__10338 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10338__delegate.call(this, args);
};
G__10338.cljs$lang$maxFixedArity = 0;
G__10338.cljs$lang$applyTo = (function (arglist__10340){
var args = cljs.core.seq( arglist__10340 );;
return G__10338__delegate.call(this, args);
});
return G__10338;
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
var comp__10364 = (function (){
return cljs.core.identity;
});
var comp__10365 = (function (f){
return f;
});
var comp__10366 = (function (f,g){
return (function() {
var G__10372 = null;
var G__10372__10373 = (function (){
return f.call(null,g.call(null));
});
var G__10372__10374 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10372__10375 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10372__10376 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10372__10377 = (function() { 
var G__10380__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10380 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10380__delegate.call(this, x, y, z, args);
};
G__10380.cljs$lang$maxFixedArity = 3;
G__10380.cljs$lang$applyTo = (function (arglist__10382){
var x = cljs.core.first(arglist__10382);
var y = cljs.core.first(cljs.core.next(arglist__10382));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10382)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10382)));
return G__10380__delegate.call(this, x, y, z, args);
});
return G__10380;
})()
;
G__10372 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10372__10373.call(this);
case  1 :
return G__10372__10374.call(this,x);
case  2 :
return G__10372__10375.call(this,x,y);
case  3 :
return G__10372__10376.call(this,x,y,z);
default:
return G__10372__10377.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10372.cljs$lang$maxFixedArity = 3;
G__10372.cljs$lang$applyTo = G__10372__10377.cljs$lang$applyTo;
return G__10372;
})()
});
var comp__10367 = (function (f,g,h){
return (function() {
var G__10385 = null;
var G__10385__10386 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10385__10387 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10385__10388 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10385__10389 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10385__10390 = (function() { 
var G__10392__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10392 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10392__delegate.call(this, x, y, z, args);
};
G__10392.cljs$lang$maxFixedArity = 3;
G__10392.cljs$lang$applyTo = (function (arglist__10393){
var x = cljs.core.first(arglist__10393);
var y = cljs.core.first(cljs.core.next(arglist__10393));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10393)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10393)));
return G__10392__delegate.call(this, x, y, z, args);
});
return G__10392;
})()
;
G__10385 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10385__10386.call(this);
case  1 :
return G__10385__10387.call(this,x);
case  2 :
return G__10385__10388.call(this,x,y);
case  3 :
return G__10385__10389.call(this,x,y,z);
default:
return G__10385__10390.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10385.cljs$lang$maxFixedArity = 3;
G__10385.cljs$lang$applyTo = G__10385__10390.cljs$lang$applyTo;
return G__10385;
})()
});
var comp__10368 = (function() { 
var G__10396__delegate = function (f1,f2,f3,fs){
var fs__10347 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10397__delegate = function (args){
var ret__10354 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10347),args);
var fs__10355 = cljs.core.next.call(null,fs__10347);

while(true){
if(cljs.core.truth_(fs__10355))
{{
var G__10398 = cljs.core.first.call(null,fs__10355).call(null,ret__10354);
var G__10399 = cljs.core.next.call(null,fs__10355);
ret__10354 = G__10398;
fs__10355 = G__10399;
continue;
}
} else
{return ret__10354;
}
break;
}
};
var G__10397 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10397__delegate.call(this, args);
};
G__10397.cljs$lang$maxFixedArity = 0;
G__10397.cljs$lang$applyTo = (function (arglist__10406){
var args = cljs.core.seq( arglist__10406 );;
return G__10397__delegate.call(this, args);
});
return G__10397;
})()
;
};
var G__10396 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10396__delegate.call(this, f1, f2, f3, fs);
};
G__10396.cljs$lang$maxFixedArity = 3;
G__10396.cljs$lang$applyTo = (function (arglist__10407){
var f1 = cljs.core.first(arglist__10407);
var f2 = cljs.core.first(cljs.core.next(arglist__10407));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10407)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10407)));
return G__10396__delegate.call(this, f1, f2, f3, fs);
});
return G__10396;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10364.call(this);
case  1 :
return comp__10365.call(this,f1);
case  2 :
return comp__10366.call(this,f1,f2);
case  3 :
return comp__10367.call(this,f1,f2,f3);
default:
return comp__10368.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10368.cljs$lang$applyTo;
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
var partial__10417 = (function (f,arg1){
return (function() { 
var G__10422__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10422 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10422__delegate.call(this, args);
};
G__10422.cljs$lang$maxFixedArity = 0;
G__10422.cljs$lang$applyTo = (function (arglist__10424){
var args = cljs.core.seq( arglist__10424 );;
return G__10422__delegate.call(this, args);
});
return G__10422;
})()
;
});
var partial__10418 = (function (f,arg1,arg2){
return (function() { 
var G__10427__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10427 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10427__delegate.call(this, args);
};
G__10427.cljs$lang$maxFixedArity = 0;
G__10427.cljs$lang$applyTo = (function (arglist__10429){
var args = cljs.core.seq( arglist__10429 );;
return G__10427__delegate.call(this, args);
});
return G__10427;
})()
;
});
var partial__10419 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10430__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10430 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10430__delegate.call(this, args);
};
G__10430.cljs$lang$maxFixedArity = 0;
G__10430.cljs$lang$applyTo = (function (arglist__10433){
var args = cljs.core.seq( arglist__10433 );;
return G__10430__delegate.call(this, args);
});
return G__10430;
})()
;
});
var partial__10420 = (function() { 
var G__10438__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10439__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10439 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10439__delegate.call(this, args);
};
G__10439.cljs$lang$maxFixedArity = 0;
G__10439.cljs$lang$applyTo = (function (arglist__10440){
var args = cljs.core.seq( arglist__10440 );;
return G__10439__delegate.call(this, args);
});
return G__10439;
})()
;
};
var G__10438 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10438__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10438.cljs$lang$maxFixedArity = 4;
G__10438.cljs$lang$applyTo = (function (arglist__10442){
var f = cljs.core.first(arglist__10442);
var arg1 = cljs.core.first(cljs.core.next(arglist__10442));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10442)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10442))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10442))));
return G__10438__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10438;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10417.call(this,f,arg1);
case  3 :
return partial__10418.call(this,f,arg1,arg2);
case  4 :
return partial__10419.call(this,f,arg1,arg2,arg3);
default:
return partial__10420.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10420.cljs$lang$applyTo;
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
var fnil__10525 = (function (f,x){
return (function() {
var G__10529 = null;
var G__10529__10530 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10529__10531 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10529__10532 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10529__10533 = (function() { 
var G__10541__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10541 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10541__delegate.call(this, a, b, c, ds);
};
G__10541.cljs$lang$maxFixedArity = 3;
G__10541.cljs$lang$applyTo = (function (arglist__10542){
var a = cljs.core.first(arglist__10542);
var b = cljs.core.first(cljs.core.next(arglist__10542));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10542)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10542)));
return G__10541__delegate.call(this, a, b, c, ds);
});
return G__10541;
})()
;
G__10529 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10529__10530.call(this,a);
case  2 :
return G__10529__10531.call(this,a,b);
case  3 :
return G__10529__10532.call(this,a,b,c);
default:
return G__10529__10533.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10529.cljs$lang$maxFixedArity = 3;
G__10529.cljs$lang$applyTo = G__10529__10533.cljs$lang$applyTo;
return G__10529;
})()
});
var fnil__10526 = (function (f,x,y){
return (function() {
var G__10544 = null;
var G__10544__10545 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10544__10546 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10544__10547 = (function() { 
var G__10550__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10550 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10550__delegate.call(this, a, b, c, ds);
};
G__10550.cljs$lang$maxFixedArity = 3;
G__10550.cljs$lang$applyTo = (function (arglist__10562){
var a = cljs.core.first(arglist__10562);
var b = cljs.core.first(cljs.core.next(arglist__10562));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10562)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10562)));
return G__10550__delegate.call(this, a, b, c, ds);
});
return G__10550;
})()
;
G__10544 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10544__10545.call(this,a,b);
case  3 :
return G__10544__10546.call(this,a,b,c);
default:
return G__10544__10547.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10544.cljs$lang$maxFixedArity = 3;
G__10544.cljs$lang$applyTo = G__10544__10547.cljs$lang$applyTo;
return G__10544;
})()
});
var fnil__10527 = (function (f,x,y,z){
return (function() {
var G__10564 = null;
var G__10564__10565 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10564__10566 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10564__10567 = (function() { 
var G__10569__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10569 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10569__delegate.call(this, a, b, c, ds);
};
G__10569.cljs$lang$maxFixedArity = 3;
G__10569.cljs$lang$applyTo = (function (arglist__10580){
var a = cljs.core.first(arglist__10580);
var b = cljs.core.first(cljs.core.next(arglist__10580));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10580)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10580)));
return G__10569__delegate.call(this, a, b, c, ds);
});
return G__10569;
})()
;
G__10564 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10564__10565.call(this,a,b);
case  3 :
return G__10564__10566.call(this,a,b,c);
default:
return G__10564__10567.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10564.cljs$lang$maxFixedArity = 3;
G__10564.cljs$lang$applyTo = G__10564__10567.cljs$lang$applyTo;
return G__10564;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10525.call(this,f,x);
case  3 :
return fnil__10526.call(this,f,x,y);
case  4 :
return fnil__10527.call(this,f,x,y,z);
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
var mapi__10587 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10585 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10585))
{var s__10586 = temp__3698__auto____10585;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10586)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10586)));
} else
{return null;
}
})));
});

return mapi__10587.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10600 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10600))
{var s__10602 = temp__3698__auto____10600;

var x__10604 = f.call(null,cljs.core.first.call(null,s__10602));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10604)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10602));
} else
{return cljs.core.cons.call(null,x__10604,keep.call(null,f,cljs.core.rest.call(null,s__10602)));
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
var keepi__10628 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10619 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10619))
{var s__10620 = temp__3698__auto____10619;

var x__10621 = f.call(null,idx,cljs.core.first.call(null,s__10620));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10621)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10620));
} else
{return cljs.core.cons.call(null,x__10621,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10620)));
}
} else
{return null;
}
})));
});

return keepi__10628.call(null,0,coll);
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
var every_pred__10885 = (function (p){
return (function() {
var ep1 = null;
var ep1__10891 = (function (){
return true;
});
var ep1__10893 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10894 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10729 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10729))
{return p.call(null,y);
} else
{return and__3546__auto____10729;
}
})());
});
var ep1__10895 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10737 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10737))
{var and__3546__auto____10742 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10742))
{return p.call(null,z);
} else
{return and__3546__auto____10742;
}
} else
{return and__3546__auto____10737;
}
})());
});
var ep1__10897 = (function() { 
var G__10907__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10744 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10744))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10744;
}
})());
};
var G__10907 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10907__delegate.call(this, x, y, z, args);
};
G__10907.cljs$lang$maxFixedArity = 3;
G__10907.cljs$lang$applyTo = (function (arglist__10917){
var x = cljs.core.first(arglist__10917);
var y = cljs.core.first(cljs.core.next(arglist__10917));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10917)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10917)));
return G__10907__delegate.call(this, x, y, z, args);
});
return G__10907;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10891.call(this);
case  1 :
return ep1__10893.call(this,x);
case  2 :
return ep1__10894.call(this,x,y);
case  3 :
return ep1__10895.call(this,x,y,z);
default:
return ep1__10897.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10897.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10886 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10925 = (function (){
return true;
});
var ep2__10926 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10748 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10748))
{return p2.call(null,x);
} else
{return and__3546__auto____10748;
}
})());
});
var ep2__10927 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10754 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10754))
{var and__3546__auto____10761 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10761))
{var and__3546__auto____10762 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10762))
{return p2.call(null,y);
} else
{return and__3546__auto____10762;
}
} else
{return and__3546__auto____10761;
}
} else
{return and__3546__auto____10754;
}
})());
});
var ep2__10929 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10772 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10772))
{var and__3546__auto____10774 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10774))
{var and__3546__auto____10776 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10776))
{var and__3546__auto____10778 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10778))
{var and__3546__auto____10780 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10780))
{return p2.call(null,z);
} else
{return and__3546__auto____10780;
}
} else
{return and__3546__auto____10778;
}
} else
{return and__3546__auto____10776;
}
} else
{return and__3546__auto____10774;
}
} else
{return and__3546__auto____10772;
}
})());
});
var ep2__10930 = (function() { 
var G__11042__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10783 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10783))
{return cljs.core.every_QMARK_.call(null,(function (p1__10613_SHARP_){
var and__3546__auto____10785 = p1.call(null,p1__10613_SHARP_);

if(cljs.core.truth_(and__3546__auto____10785))
{return p2.call(null,p1__10613_SHARP_);
} else
{return and__3546__auto____10785;
}
}),args);
} else
{return and__3546__auto____10783;
}
})());
};
var G__11042 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11042__delegate.call(this, x, y, z, args);
};
G__11042.cljs$lang$maxFixedArity = 3;
G__11042.cljs$lang$applyTo = (function (arglist__11045){
var x = cljs.core.first(arglist__11045);
var y = cljs.core.first(cljs.core.next(arglist__11045));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11045)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11045)));
return G__11042__delegate.call(this, x, y, z, args);
});
return G__11042;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10925.call(this);
case  1 :
return ep2__10926.call(this,x);
case  2 :
return ep2__10927.call(this,x,y);
case  3 :
return ep2__10929.call(this,x,y,z);
default:
return ep2__10930.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10930.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10887 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11051 = (function (){
return true;
});
var ep3__11052 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10793 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10793))
{var and__3546__auto____10796 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10796))
{return p3.call(null,x);
} else
{return and__3546__auto____10796;
}
} else
{return and__3546__auto____10793;
}
})());
});
var ep3__11053 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10798 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10798))
{var and__3546__auto____10799 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10799))
{var and__3546__auto____10802 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10802))
{var and__3546__auto____10804 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10804))
{var and__3546__auto____10807 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10807))
{return p3.call(null,y);
} else
{return and__3546__auto____10807;
}
} else
{return and__3546__auto____10804;
}
} else
{return and__3546__auto____10802;
}
} else
{return and__3546__auto____10799;
}
} else
{return and__3546__auto____10798;
}
})());
});
var ep3__11054 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10812 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10812))
{var and__3546__auto____10815 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10815))
{var and__3546__auto____10831 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10831))
{var and__3546__auto____10833 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10833))
{var and__3546__auto____10834 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10834))
{var and__3546__auto____10835 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10835))
{var and__3546__auto____10836 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10836))
{var and__3546__auto____10837 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10837))
{return p3.call(null,z);
} else
{return and__3546__auto____10837;
}
} else
{return and__3546__auto____10836;
}
} else
{return and__3546__auto____10835;
}
} else
{return and__3546__auto____10834;
}
} else
{return and__3546__auto____10833;
}
} else
{return and__3546__auto____10831;
}
} else
{return and__3546__auto____10815;
}
} else
{return and__3546__auto____10812;
}
})());
});
var ep3__11055 = (function() { 
var G__11227__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10848 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10848))
{return cljs.core.every_QMARK_.call(null,(function (p1__10614_SHARP_){
var and__3546__auto____10851 = p1.call(null,p1__10614_SHARP_);

if(cljs.core.truth_(and__3546__auto____10851))
{var and__3546__auto____10853 = p2.call(null,p1__10614_SHARP_);

if(cljs.core.truth_(and__3546__auto____10853))
{return p3.call(null,p1__10614_SHARP_);
} else
{return and__3546__auto____10853;
}
} else
{return and__3546__auto____10851;
}
}),args);
} else
{return and__3546__auto____10848;
}
})());
};
var G__11227 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11227__delegate.call(this, x, y, z, args);
};
G__11227.cljs$lang$maxFixedArity = 3;
G__11227.cljs$lang$applyTo = (function (arglist__11235){
var x = cljs.core.first(arglist__11235);
var y = cljs.core.first(cljs.core.next(arglist__11235));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11235)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11235)));
return G__11227__delegate.call(this, x, y, z, args);
});
return G__11227;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11051.call(this);
case  1 :
return ep3__11052.call(this,x);
case  2 :
return ep3__11053.call(this,x,y);
case  3 :
return ep3__11054.call(this,x,y,z);
default:
return ep3__11055.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11055.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10888 = (function() { 
var G__11241__delegate = function (p1,p2,p3,ps){
var ps__10857 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11244 = (function (){
return true;
});
var epn__11245 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10615_SHARP_){
return p1__10615_SHARP_.call(null,x);
}),ps__10857);
});
var epn__11246 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10616_SHARP_){
var and__3546__auto____10861 = p1__10616_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10861))
{return p1__10616_SHARP_.call(null,y);
} else
{return and__3546__auto____10861;
}
}),ps__10857);
});
var epn__11247 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10617_SHARP_){
var and__3546__auto____10865 = p1__10617_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10865))
{var and__3546__auto____10867 = p1__10617_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10867))
{return p1__10617_SHARP_.call(null,z);
} else
{return and__3546__auto____10867;
}
} else
{return and__3546__auto____10865;
}
}),ps__10857);
});
var epn__11248 = (function() { 
var G__11260__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10871 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10871))
{return cljs.core.every_QMARK_.call(null,(function (p1__10618_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10618_SHARP_,args);
}),ps__10857);
} else
{return and__3546__auto____10871;
}
})());
};
var G__11260 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11260__delegate.call(this, x, y, z, args);
};
G__11260.cljs$lang$maxFixedArity = 3;
G__11260.cljs$lang$applyTo = (function (arglist__11265){
var x = cljs.core.first(arglist__11265);
var y = cljs.core.first(cljs.core.next(arglist__11265));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11265)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11265)));
return G__11260__delegate.call(this, x, y, z, args);
});
return G__11260;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11244.call(this);
case  1 :
return epn__11245.call(this,x);
case  2 :
return epn__11246.call(this,x,y);
case  3 :
return epn__11247.call(this,x,y,z);
default:
return epn__11248.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11248.cljs$lang$applyTo;
return epn;
})()
};
var G__11241 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11241__delegate.call(this, p1, p2, p3, ps);
};
G__11241.cljs$lang$maxFixedArity = 3;
G__11241.cljs$lang$applyTo = (function (arglist__11269){
var p1 = cljs.core.first(arglist__11269);
var p2 = cljs.core.first(cljs.core.next(arglist__11269));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11269)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11269)));
return G__11241__delegate.call(this, p1, p2, p3, ps);
});
return G__11241;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10885.call(this,p1);
case  2 :
return every_pred__10886.call(this,p1,p2);
case  3 :
return every_pred__10887.call(this,p1,p2,p3);
default:
return every_pred__10888.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10888.cljs$lang$applyTo;
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
var some_fn__11420 = (function (p){
return (function() {
var sp1 = null;
var sp1__11427 = (function (){
return null;
});
var sp1__11428 = (function (x){
return p.call(null,x);
});
var sp1__11429 = (function (x,y){
var or__3548__auto____11277 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11277))
{return or__3548__auto____11277;
} else
{return p.call(null,y);
}
});
var sp1__11430 = (function (x,y,z){
var or__3548__auto____11278 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11278))
{return or__3548__auto____11278;
} else
{var or__3548__auto____11279 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11279))
{return or__3548__auto____11279;
} else
{return p.call(null,z);
}
}
});
var sp1__11432 = (function() { 
var G__11437__delegate = function (x,y,z,args){
var or__3548__auto____11280 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11280))
{return or__3548__auto____11280;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11437 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11437__delegate.call(this, x, y, z, args);
};
G__11437.cljs$lang$maxFixedArity = 3;
G__11437.cljs$lang$applyTo = (function (arglist__11441){
var x = cljs.core.first(arglist__11441);
var y = cljs.core.first(cljs.core.next(arglist__11441));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11441)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11441)));
return G__11437__delegate.call(this, x, y, z, args);
});
return G__11437;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11427.call(this);
case  1 :
return sp1__11428.call(this,x);
case  2 :
return sp1__11429.call(this,x,y);
case  3 :
return sp1__11430.call(this,x,y,z);
default:
return sp1__11432.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11432.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11422 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11445 = (function (){
return null;
});
var sp2__11446 = (function (x){
var or__3548__auto____11292 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11292))
{return or__3548__auto____11292;
} else
{return p2.call(null,x);
}
});
var sp2__11447 = (function (x,y){
var or__3548__auto____11294 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11294))
{return or__3548__auto____11294;
} else
{var or__3548__auto____11297 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11297))
{return or__3548__auto____11297;
} else
{var or__3548__auto____11298 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11298))
{return or__3548__auto____11298;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11448 = (function (x,y,z){
var or__3548__auto____11301 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11301))
{return or__3548__auto____11301;
} else
{var or__3548__auto____11304 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11304))
{return or__3548__auto____11304;
} else
{var or__3548__auto____11306 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11306))
{return or__3548__auto____11306;
} else
{var or__3548__auto____11308 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11308))
{return or__3548__auto____11308;
} else
{var or__3548__auto____11311 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11311))
{return or__3548__auto____11311;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11449 = (function() { 
var G__11465__delegate = function (x,y,z,args){
var or__3548__auto____11318 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11318))
{return or__3548__auto____11318;
} else
{return cljs.core.some.call(null,(function (p1__10682_SHARP_){
var or__3548__auto____11319 = p1.call(null,p1__10682_SHARP_);

if(cljs.core.truth_(or__3548__auto____11319))
{return or__3548__auto____11319;
} else
{return p2.call(null,p1__10682_SHARP_);
}
}),args);
}
};
var G__11465 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11465__delegate.call(this, x, y, z, args);
};
G__11465.cljs$lang$maxFixedArity = 3;
G__11465.cljs$lang$applyTo = (function (arglist__11475){
var x = cljs.core.first(arglist__11475);
var y = cljs.core.first(cljs.core.next(arglist__11475));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11475)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11475)));
return G__11465__delegate.call(this, x, y, z, args);
});
return G__11465;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11445.call(this);
case  1 :
return sp2__11446.call(this,x);
case  2 :
return sp2__11447.call(this,x,y);
case  3 :
return sp2__11448.call(this,x,y,z);
default:
return sp2__11449.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11449.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11423 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11479 = (function (){
return null;
});
var sp3__11480 = (function (x){
var or__3548__auto____11321 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11321))
{return or__3548__auto____11321;
} else
{var or__3548__auto____11323 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11323))
{return or__3548__auto____11323;
} else
{return p3.call(null,x);
}
}
});
var sp3__11481 = (function (x,y){
var or__3548__auto____11325 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11325))
{return or__3548__auto____11325;
} else
{var or__3548__auto____11327 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11327))
{return or__3548__auto____11327;
} else
{var or__3548__auto____11329 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11329))
{return or__3548__auto____11329;
} else
{var or__3548__auto____11330 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11330))
{return or__3548__auto____11330;
} else
{var or__3548__auto____11331 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11331))
{return or__3548__auto____11331;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11482 = (function (x,y,z){
var or__3548__auto____11334 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11334))
{return or__3548__auto____11334;
} else
{var or__3548__auto____11335 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11335))
{return or__3548__auto____11335;
} else
{var or__3548__auto____11337 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11337))
{return or__3548__auto____11337;
} else
{var or__3548__auto____11340 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11340))
{return or__3548__auto____11340;
} else
{var or__3548__auto____11346 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11346))
{return or__3548__auto____11346;
} else
{var or__3548__auto____11347 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11347))
{return or__3548__auto____11347;
} else
{var or__3548__auto____11377 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11377))
{return or__3548__auto____11377;
} else
{var or__3548__auto____11378 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11378))
{return or__3548__auto____11378;
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
var sp3__11483 = (function() { 
var G__11499__delegate = function (x,y,z,args){
var or__3548__auto____11381 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11381))
{return or__3548__auto____11381;
} else
{return cljs.core.some.call(null,(function (p1__10684_SHARP_){
var or__3548__auto____11387 = p1.call(null,p1__10684_SHARP_);

if(cljs.core.truth_(or__3548__auto____11387))
{return or__3548__auto____11387;
} else
{var or__3548__auto____11394 = p2.call(null,p1__10684_SHARP_);

if(cljs.core.truth_(or__3548__auto____11394))
{return or__3548__auto____11394;
} else
{return p3.call(null,p1__10684_SHARP_);
}
}
}),args);
}
};
var G__11499 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11499__delegate.call(this, x, y, z, args);
};
G__11499.cljs$lang$maxFixedArity = 3;
G__11499.cljs$lang$applyTo = (function (arglist__11507){
var x = cljs.core.first(arglist__11507);
var y = cljs.core.first(cljs.core.next(arglist__11507));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11507)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11507)));
return G__11499__delegate.call(this, x, y, z, args);
});
return G__11499;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11479.call(this);
case  1 :
return sp3__11480.call(this,x);
case  2 :
return sp3__11481.call(this,x,y);
case  3 :
return sp3__11482.call(this,x,y,z);
default:
return sp3__11483.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11483.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11424 = (function() { 
var G__11510__delegate = function (p1,p2,p3,ps){
var ps__11397 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11648 = (function (){
return null;
});
var spn__11649 = (function (x){
return cljs.core.some.call(null,(function (p1__10685_SHARP_){
return p1__10685_SHARP_.call(null,x);
}),ps__11397);
});
var spn__11650 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10687_SHARP_){
var or__3548__auto____11402 = p1__10687_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11402))
{return or__3548__auto____11402;
} else
{return p1__10687_SHARP_.call(null,y);
}
}),ps__11397);
});
var spn__11651 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10688_SHARP_){
var or__3548__auto____11404 = p1__10688_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11404))
{return or__3548__auto____11404;
} else
{var or__3548__auto____11407 = p1__10688_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11407))
{return or__3548__auto____11407;
} else
{return p1__10688_SHARP_.call(null,z);
}
}
}),ps__11397);
});
var spn__11652 = (function() { 
var G__11671__delegate = function (x,y,z,args){
var or__3548__auto____11409 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11409))
{return or__3548__auto____11409;
} else
{return cljs.core.some.call(null,(function (p1__10689_SHARP_){
return cljs.core.some.call(null,p1__10689_SHARP_,args);
}),ps__11397);
}
};
var G__11671 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11671__delegate.call(this, x, y, z, args);
};
G__11671.cljs$lang$maxFixedArity = 3;
G__11671.cljs$lang$applyTo = (function (arglist__11674){
var x = cljs.core.first(arglist__11674);
var y = cljs.core.first(cljs.core.next(arglist__11674));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11674)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11674)));
return G__11671__delegate.call(this, x, y, z, args);
});
return G__11671;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11648.call(this);
case  1 :
return spn__11649.call(this,x);
case  2 :
return spn__11650.call(this,x,y);
case  3 :
return spn__11651.call(this,x,y,z);
default:
return spn__11652.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11652.cljs$lang$applyTo;
return spn;
})()
};
var G__11510 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11510__delegate.call(this, p1, p2, p3, ps);
};
G__11510.cljs$lang$maxFixedArity = 3;
G__11510.cljs$lang$applyTo = (function (arglist__11675){
var p1 = cljs.core.first(arglist__11675);
var p2 = cljs.core.first(cljs.core.next(arglist__11675));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11675)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11675)));
return G__11510__delegate.call(this, p1, p2, p3, ps);
});
return G__11510;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11420.call(this,p1);
case  2 :
return some_fn__11422.call(this,p1,p2);
case  3 :
return some_fn__11423.call(this,p1,p2,p3);
default:
return some_fn__11424.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11424.cljs$lang$applyTo;
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
var map__11711 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11684 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11684))
{var s__11685 = temp__3698__auto____11684;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11685)),map.call(null,f,cljs.core.rest.call(null,s__11685)));
} else
{return null;
}
})));
});
var map__11712 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11687 = cljs.core.seq.call(null,c1);
var s2__11688 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11691 = s1__11687;

if(cljs.core.truth_(and__3546__auto____11691))
{return s2__11688;
} else
{return and__3546__auto____11691;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11687),cljs.core.first.call(null,s2__11688)),map.call(null,f,cljs.core.rest.call(null,s1__11687),cljs.core.rest.call(null,s2__11688)));
} else
{return null;
}
})));
});
var map__11713 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11693 = cljs.core.seq.call(null,c1);
var s2__11695 = cljs.core.seq.call(null,c2);
var s3__11700 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11702 = s1__11693;

if(cljs.core.truth_(and__3546__auto____11702))
{var and__3546__auto____11703 = s2__11695;

if(cljs.core.truth_(and__3546__auto____11703))
{return s3__11700;
} else
{return and__3546__auto____11703;
}
} else
{return and__3546__auto____11702;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11693),cljs.core.first.call(null,s2__11695),cljs.core.first.call(null,s3__11700)),map.call(null,f,cljs.core.rest.call(null,s1__11693),cljs.core.rest.call(null,s2__11695),cljs.core.rest.call(null,s3__11700)));
} else
{return null;
}
})));
});
var map__11714 = (function() { 
var G__11723__delegate = function (f,c1,c2,c3,colls){
var step__11708 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11706 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11706)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11706),step.call(null,map.call(null,cljs.core.rest,ss__11706)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11273_SHARP_){
return cljs.core.apply.call(null,f,p1__11273_SHARP_);
}),step__11708.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11723 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11723__delegate.call(this, f, c1, c2, c3, colls);
};
G__11723.cljs$lang$maxFixedArity = 4;
G__11723.cljs$lang$applyTo = (function (arglist__11734){
var f = cljs.core.first(arglist__11734);
var c1 = cljs.core.first(cljs.core.next(arglist__11734));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11734)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11734))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11734))));
return G__11723__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11723;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11711.call(this,f,c1);
case  3 :
return map__11712.call(this,f,c1,c2);
case  4 :
return map__11713.call(this,f,c1,c2,c3);
default:
return map__11714.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11714.cljs$lang$applyTo;
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
{var temp__3698__auto____11737 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11737))
{var s__11738 = temp__3698__auto____11737;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11738),take.call(null,(n - 1),cljs.core.rest.call(null,s__11738)));
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
var step__11855 = (function (n,coll){
while(true){
var s__11853 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11854 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11854))
{return s__11853;
} else
{return and__3546__auto____11854;
}
})()))
{{
var G__11858 = (n - 1);
var G__11859 = cljs.core.rest.call(null,s__11853);
n = G__11858;
coll = G__11859;
continue;
}
} else
{return s__11853;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11855.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11870 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11871 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11870.call(this,n);
case  2 :
return drop_last__11871.call(this,n,s);
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
var s__11874 = cljs.core.seq.call(null,coll);
var lead__11875 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11875))
{{
var G__11885 = cljs.core.next.call(null,s__11874);
var G__11887 = cljs.core.next.call(null,lead__11875);
s__11874 = G__11885;
lead__11875 = G__11887;
continue;
}
} else
{return s__11874;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11895 = (function (pred,coll){
while(true){
var s__11889 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11892 = s__11889;

if(cljs.core.truth_(and__3546__auto____11892))
{return pred.call(null,cljs.core.first.call(null,s__11889));
} else
{return and__3546__auto____11892;
}
})()))
{{
var G__11896 = pred;
var G__11898 = cljs.core.rest.call(null,s__11889);
pred = G__11896;
coll = G__11898;
continue;
}
} else
{return s__11889;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11895.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11900 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11900))
{var s__11901 = temp__3698__auto____11900;

return cljs.core.concat.call(null,s__11901,cycle.call(null,s__11901));
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
var repeat__11911 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11912 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11911.call(this,n);
case  2 :
return repeat__11912.call(this,n,x);
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
var repeatedly__11918 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11919 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11918.call(this,n);
case  2 :
return repeatedly__11919.call(this,n,f);
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
var interleave__12005 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11994 = cljs.core.seq.call(null,c1);
var s2__11995 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11997 = s1__11994;

if(cljs.core.truth_(and__3546__auto____11997))
{return s2__11995;
} else
{return and__3546__auto____11997;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11994),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11995),interleave.call(null,cljs.core.rest.call(null,s1__11994),cljs.core.rest.call(null,s2__11995))));
} else
{return null;
}
})));
});
var interleave__12006 = (function() { 
var G__12011__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11999 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11999)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11999),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11999)));
} else
{return null;
}
})));
};
var G__12011 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12011__delegate.call(this, c1, c2, colls);
};
G__12011.cljs$lang$maxFixedArity = 2;
G__12011.cljs$lang$applyTo = (function (arglist__12016){
var c1 = cljs.core.first(arglist__12016);
var c2 = cljs.core.first(cljs.core.next(arglist__12016));
var colls = cljs.core.rest(cljs.core.next(arglist__12016));
return G__12011__delegate.call(this, c1, c2, colls);
});
return G__12011;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12005.call(this,c1,c2);
default:
return interleave__12006.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12006.cljs$lang$applyTo;
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
var cat__12042 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12023 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12023))
{var coll__12024 = temp__3695__auto____12023;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12024),cat.call(null,cljs.core.rest.call(null,coll__12024),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12042.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12054 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12055 = (function() { 
var G__12057__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12057 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12057__delegate.call(this, f, coll, colls);
};
G__12057.cljs$lang$maxFixedArity = 2;
G__12057.cljs$lang$applyTo = (function (arglist__12059){
var f = cljs.core.first(arglist__12059);
var coll = cljs.core.first(cljs.core.next(arglist__12059));
var colls = cljs.core.rest(cljs.core.next(arglist__12059));
return G__12057__delegate.call(this, f, coll, colls);
});
return G__12057;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12054.call(this,f,coll);
default:
return mapcat__12055.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12055.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12063 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12063))
{var s__12064 = temp__3698__auto____12063;

var f__12065 = cljs.core.first.call(null,s__12064);
var r__12066 = cljs.core.rest.call(null,s__12064);

if(cljs.core.truth_(pred.call(null,f__12065)))
{return cljs.core.cons.call(null,f__12065,filter.call(null,pred,r__12066));
} else
{return filter.call(null,pred,r__12066);
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
var walk__12117 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12117.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12116_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12116_SHARP_));
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
var partition__12139 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12140 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12132 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12132))
{var s__12134 = temp__3698__auto____12132;

var p__12135 = cljs.core.take.call(null,n,s__12134);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12135))))
{return cljs.core.cons.call(null,p__12135,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12134)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12141 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12136 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12136))
{var s__12137 = temp__3698__auto____12136;

var p__12138 = cljs.core.take.call(null,n,s__12137);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12138))))
{return cljs.core.cons.call(null,p__12138,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12137)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12138,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12139.call(this,n,step);
case  3 :
return partition__12140.call(this,n,step,pad);
case  4 :
return partition__12141.call(this,n,step,pad,coll);
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
var get_in__12213 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12214 = (function (m,ks,not_found){
var sentinel__12207 = cljs.core.lookup_sentinel;
var m__12208 = m;
var ks__12209 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12209))
{var m__12210 = cljs.core.get.call(null,m__12208,cljs.core.first.call(null,ks__12209),sentinel__12207);

if(cljs.core.truth_((sentinel__12207 === m__12210)))
{return not_found;
} else
{{
var G__12217 = sentinel__12207;
var G__12218 = m__12210;
var G__12219 = cljs.core.next.call(null,ks__12209);
sentinel__12207 = G__12217;
m__12208 = G__12218;
ks__12209 = G__12219;
continue;
}
}
} else
{return m__12208;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12213.call(this,m,ks);
case  3 :
return get_in__12214.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12223,v){
var vec__12224__12225 = p__12223;
var k__12226 = cljs.core.nth.call(null,vec__12224__12225,0,null);
var ks__12227 = cljs.core.nthnext.call(null,vec__12224__12225,1);

if(cljs.core.truth_(ks__12227))
{return cljs.core.assoc.call(null,m,k__12226,assoc_in.call(null,cljs.core.get.call(null,m,k__12226),ks__12227,v));
} else
{return cljs.core.assoc.call(null,m,k__12226,v);
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
var update_in__delegate = function (m,p__12232,f,args){
var vec__12233__12237 = p__12232;
var k__12238 = cljs.core.nth.call(null,vec__12233__12237,0,null);
var ks__12239 = cljs.core.nthnext.call(null,vec__12233__12237,1);

if(cljs.core.truth_(ks__12239))
{return cljs.core.assoc.call(null,m,k__12238,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12238),ks__12239,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12238,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12238),args));
}
};
var update_in = function (m,p__12232,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12232, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12245){
var m = cljs.core.first(arglist__12245);
var p__12232 = cljs.core.first(cljs.core.next(arglist__12245));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12245)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12245)));
return update_in__delegate.call(this, m, p__12232, f, args);
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
var this__12260 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12301 = null;
var G__12301__12302 = (function (coll,k){
var this__12264 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12301__12303 = (function (coll,k,not_found){
var this__12265 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12301 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12301__12302.call(this,coll,k);
case  3 :
return G__12301__12303.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12301;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12267 = this;
var new_array__12268 = cljs.core.aclone.call(null,this__12267.array);

(new_array__12268[k] = v);
return (new cljs.core.Vector(this__12267.meta,new_array__12268));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12305 = null;
var G__12305__12306 = (function (coll,k){
var this__12269 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12305__12307 = (function (coll,k,not_found){
var this__12270 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12305 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12305__12306.call(this,coll,k);
case  3 :
return G__12305__12307.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12305;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12271 = this;
var new_array__12272 = cljs.core.aclone.call(null,this__12271.array);

new_array__12272.push(o);
return (new cljs.core.Vector(this__12271.meta,new_array__12272));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12310 = null;
var G__12310__12311 = (function (v,f){
var this__12273 = this;
return cljs.core.ci_reduce.call(null,this__12273.array,f);
});
var G__12310__12312 = (function (v,f,start){
var this__12274 = this;
return cljs.core.ci_reduce.call(null,this__12274.array,f,start);
});
G__12310 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12310__12311.call(this,v,f);
case  3 :
return G__12310__12312.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12310;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12277 = this;
if(cljs.core.truth_((this__12277.array.length > 0)))
{var vector_seq__12278 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12277.array.length)))
{return cljs.core.cons.call(null,(this__12277.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12278.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12279 = this;
return this__12279.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12280 = this;
var count__12281 = this__12280.array.length;

if(cljs.core.truth_((count__12281 > 0)))
{return (this__12280.array[(count__12281 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12284 = this;
if(cljs.core.truth_((this__12284.array.length > 0)))
{var new_array__12286 = cljs.core.aclone.call(null,this__12284.array);

new_array__12286.pop();
return (new cljs.core.Vector(this__12284.meta,new_array__12286));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12287 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12289 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12290 = this;
return (new cljs.core.Vector(meta,this__12290.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12291 = this;
return this__12291.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12315 = null;
var G__12315__12316 = (function (coll,n){
var this__12292 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12293 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12293))
{return (n < this__12292.array.length);
} else
{return and__3546__auto____12293;
}
})()))
{return (this__12292.array[n]);
} else
{return null;
}
});
var G__12315__12317 = (function (coll,n,not_found){
var this__12294 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12299 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12299))
{return (n < this__12294.array.length);
} else
{return and__3546__auto____12299;
}
})()))
{return (this__12294.array[n]);
} else
{return not_found;
}
});
G__12315 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12315__12316.call(this,coll,n);
case  3 :
return G__12315__12317.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12315;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12300 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12300.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12356){
var args = cljs.core.seq( arglist__12356 );;
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
var this__12365 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12398 = null;
var G__12398__12399 = (function (coll,k){
var this__12366 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12398__12400 = (function (coll,k,not_found){
var this__12367 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12398 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12398__12399.call(this,coll,k);
case  3 :
return G__12398__12400.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12398;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12368 = this;
var v_pos__12369 = (this__12368.start + key);

return (new cljs.core.Subvec(this__12368.meta,cljs.core._assoc.call(null,this__12368.v,v_pos__12369,val),this__12368.start,((this__12368.end > (v_pos__12369 + 1)) ? this__12368.end : (v_pos__12369 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12406 = null;
var G__12406__12407 = (function (coll,k){
var this__12372 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12406__12409 = (function (coll,k,not_found){
var this__12375 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12406 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12406__12407.call(this,coll,k);
case  3 :
return G__12406__12409.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12406;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12376 = this;
return (new cljs.core.Subvec(this__12376.meta,cljs.core._assoc_n.call(null,this__12376.v,this__12376.end,o),this__12376.start,(this__12376.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12417 = null;
var G__12417__12418 = (function (coll,f){
var this__12377 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12417__12419 = (function (coll,f,start){
var this__12378 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12417 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12417__12418.call(this,coll,f);
case  3 :
return G__12417__12419.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12417;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12379 = this;
var subvec_seq__12381 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12379.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12379.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12381.call(null,this__12379.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12382 = this;
return (this__12382.end - this__12382.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12383 = this;
return cljs.core._nth.call(null,this__12383.v,(this__12383.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12384 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12384.start,this__12384.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12384.meta,this__12384.v,this__12384.start,(this__12384.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12385 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12386 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12387 = this;
return (new cljs.core.Subvec(meta,this__12387.v,this__12387.start,this__12387.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12388 = this;
return this__12388.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12544 = null;
var G__12544__12545 = (function (coll,n){
var this__12389 = this;
return cljs.core._nth.call(null,this__12389.v,(this__12389.start + n));
});
var G__12544__12546 = (function (coll,n,not_found){
var this__12391 = this;
return cljs.core._nth.call(null,this__12391.v,(this__12391.start + n),not_found);
});
G__12544 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12544__12545.call(this,coll,n);
case  3 :
return G__12544__12546.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12544;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12394 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12394.meta);
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
var subvec__12555 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12556 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12555.call(this,v,start);
case  3 :
return subvec__12556.call(this,v,start,end);
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
var this__12561 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12563 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12565 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12566 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12566.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12569 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12570 = this;
return cljs.core._first.call(null,this__12570.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12571 = this;
var temp__3695__auto____12572 = cljs.core.next.call(null,this__12571.front);

if(cljs.core.truth_(temp__3695__auto____12572))
{var f1__12573 = temp__3695__auto____12572;

return (new cljs.core.PersistentQueueSeq(this__12571.meta,f1__12573,this__12571.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12571.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12571.meta,this__12571.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12576 = this;
return this__12576.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12578 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12578.front,this__12578.rear));
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
var this__12592 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12594 = this;
if(cljs.core.truth_(this__12594.front))
{return (new cljs.core.PersistentQueue(this__12594.meta,(this__12594.count + 1),this__12594.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12595 = this__12594.rear;

if(cljs.core.truth_(or__3548__auto____12595))
{return or__3548__auto____12595;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12594.meta,(this__12594.count + 1),cljs.core.conj.call(null,this__12594.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12598 = this;
var rear__12599 = cljs.core.seq.call(null,this__12598.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12600 = this__12598.front;

if(cljs.core.truth_(or__3548__auto____12600))
{return or__3548__auto____12600;
} else
{return rear__12599;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12598.front,cljs.core.seq.call(null,rear__12599)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12602 = this;
return this__12602.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12648 = this;
return cljs.core._first.call(null,this__12648.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12652 = this;
if(cljs.core.truth_(this__12652.front))
{var temp__3695__auto____12654 = cljs.core.next.call(null,this__12652.front);

if(cljs.core.truth_(temp__3695__auto____12654))
{var f1__12656 = temp__3695__auto____12654;

return (new cljs.core.PersistentQueue(this__12652.meta,(this__12652.count - 1),f1__12656,this__12652.rear));
} else
{return (new cljs.core.PersistentQueue(this__12652.meta,(this__12652.count - 1),cljs.core.seq.call(null,this__12652.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12659 = this;
return cljs.core.first.call(null,this__12659.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12661 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12757 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12763 = this;
return (new cljs.core.PersistentQueue(meta,this__12763.count,this__12763.front,this__12763.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12764 = this;
return this__12764.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12765 = this;
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
var this__12773 = this;
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
var len__12787 = array.length;

var i__12788 = 0;

while(true){
if(cljs.core.truth_((i__12788 < len__12787)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12788]))))
{return i__12788;
} else
{{
var G__12801 = (i__12788 + incr);
i__12788 = G__12801;
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
var obj_map_contains_key_QMARK___12928 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12929 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12804 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12804))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12804;
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
return obj_map_contains_key_QMARK___12928.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12929.call(this,k,strobj,true_val,false_val);
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
var this__12954 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13003 = null;
var G__13003__13004 = (function (coll,k){
var this__12958 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13003__13005 = (function (coll,k,not_found){
var this__12960 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12960.strobj,(this__12960.strobj[k]),not_found);
});
G__13003 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13003__13004.call(this,coll,k);
case  3 :
return G__13003__13005.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13003;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12963 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12965 = goog.object.clone.call(null,this__12963.strobj);
var overwrite_QMARK___12966 = new_strobj__12965.hasOwnProperty(k);

(new_strobj__12965[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12966))
{return (new cljs.core.ObjMap(this__12963.meta,this__12963.keys,new_strobj__12965));
} else
{var new_keys__12969 = cljs.core.aclone.call(null,this__12963.keys);

new_keys__12969.push(k);
return (new cljs.core.ObjMap(this__12963.meta,new_keys__12969,new_strobj__12965));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12963.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12973 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12973.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13012 = null;
var G__13012__13013 = (function (coll,k){
var this__12976 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13012__13014 = (function (coll,k,not_found){
var this__12979 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13012 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13012__13013.call(this,coll,k);
case  3 :
return G__13012__13014.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13012;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12981 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12982 = this;
if(cljs.core.truth_((this__12982.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12937_SHARP_){
return cljs.core.vector.call(null,p1__12937_SHARP_,(this__12982.strobj[p1__12937_SHARP_]));
}),this__12982.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12983 = this;
return this__12983.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12984 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12986 = this;
return (new cljs.core.ObjMap(meta,this__12986.keys,this__12986.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12988 = this;
return this__12988.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12990 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12990.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12992 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12994 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12994))
{return this__12992.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12994;
}
})()))
{var new_keys__12996 = cljs.core.aclone.call(null,this__12992.keys);
var new_strobj__12998 = goog.object.clone.call(null,this__12992.strobj);

new_keys__12996.splice(cljs.core.scan_array.call(null,1,k,new_keys__12996),1);
cljs.core.js_delete.call(null,new_strobj__12998,k);
return (new cljs.core.ObjMap(this__12992.meta,new_keys__12996,new_strobj__12998));
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
var this__13054 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13110 = null;
var G__13110__13111 = (function (coll,k){
var this__13057 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13110__13112 = (function (coll,k,not_found){
var this__13059 = this;
var bucket__13060 = (this__13059.hashobj[cljs.core.hash.call(null,k)]);
var i__13061 = (cljs.core.truth_(bucket__13060)?cljs.core.scan_array.call(null,2,k,bucket__13060):null);

if(cljs.core.truth_(i__13061))
{return (bucket__13060[(i__13061 + 1)]);
} else
{return not_found;
}
});
G__13110 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13110__13111.call(this,coll,k);
case  3 :
return G__13110__13112.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13110;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13062 = this;
var h__13067 = cljs.core.hash.call(null,k);
var bucket__13068 = (this__13062.hashobj[h__13067]);

if(cljs.core.truth_(bucket__13068))
{var new_bucket__13069 = cljs.core.aclone.call(null,bucket__13068);
var new_hashobj__13070 = goog.object.clone.call(null,this__13062.hashobj);

(new_hashobj__13070[h__13067] = new_bucket__13069);
var temp__3695__auto____13073 = cljs.core.scan_array.call(null,2,k,new_bucket__13069);

if(cljs.core.truth_(temp__3695__auto____13073))
{var i__13074 = temp__3695__auto____13073;

(new_bucket__13069[(i__13074 + 1)] = v);
return (new cljs.core.HashMap(this__13062.meta,this__13062.count,new_hashobj__13070));
} else
{new_bucket__13069.push(k,v);
return (new cljs.core.HashMap(this__13062.meta,(this__13062.count + 1),new_hashobj__13070));
}
} else
{var new_hashobj__13076 = goog.object.clone.call(null,this__13062.hashobj);

(new_hashobj__13076[h__13067] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13062.meta,(this__13062.count + 1),new_hashobj__13076));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13078 = this;
var bucket__13082 = (this__13078.hashobj[cljs.core.hash.call(null,k)]);
var i__13084 = (cljs.core.truth_(bucket__13082)?cljs.core.scan_array.call(null,2,k,bucket__13082):null);

if(cljs.core.truth_(i__13084))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13125 = null;
var G__13125__13127 = (function (coll,k){
var this__13086 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13125__13128 = (function (coll,k,not_found){
var this__13087 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13125 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13125__13127.call(this,coll,k);
case  3 :
return G__13125__13128.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13125;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13088 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13089 = this;
if(cljs.core.truth_((this__13089.count > 0)))
{var hashes__13091 = cljs.core.js_keys.call(null,this__13089.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13029_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13089.hashobj[p1__13029_SHARP_])));
}),hashes__13091);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13092 = this;
return this__13092.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13094 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13095 = this;
return (new cljs.core.HashMap(meta,this__13095.count,this__13095.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13096 = this;
return this__13096.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13097 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13097.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13100 = this;
var h__13103 = cljs.core.hash.call(null,k);
var bucket__13104 = (this__13100.hashobj[h__13103]);
var i__13105 = (cljs.core.truth_(bucket__13104)?cljs.core.scan_array.call(null,2,k,bucket__13104):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13105)))
{return coll;
} else
{var new_hashobj__13107 = goog.object.clone.call(null,this__13100.hashobj);

if(cljs.core.truth_((3 > bucket__13104.length)))
{cljs.core.js_delete.call(null,new_hashobj__13107,h__13103);
} else
{var new_bucket__13109 = cljs.core.aclone.call(null,bucket__13104);

new_bucket__13109.splice(i__13105,2);
(new_hashobj__13107[h__13103] = new_bucket__13109);
}
return (new cljs.core.HashMap(this__13100.meta,(this__13100.count - 1),new_hashobj__13107));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13205 = ks.length;

var i__13206 = 0;
var out__13207 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13206 < len__13205)))
{{
var G__13212 = (i__13206 + 1);
var G__13213 = cljs.core.assoc.call(null,out__13207,(ks[i__13206]),(vs[i__13206]));
i__13206 = G__13212;
out__13207 = G__13213;
continue;
}
} else
{return out__13207;
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
var in$__13221 = cljs.core.seq.call(null,keyvals);
var out__13222 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13221))
{{
var G__13233 = cljs.core.nnext.call(null,in$__13221);
var G__13234 = cljs.core.assoc.call(null,out__13222,cljs.core.first.call(null,in$__13221),cljs.core.second.call(null,in$__13221));
in$__13221 = G__13233;
out__13222 = G__13234;
continue;
}
} else
{return out__13222;
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
hash_map.cljs$lang$applyTo = (function (arglist__13236){
var keyvals = cljs.core.seq( arglist__13236 );;
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
{return cljs.core.reduce.call(null,(function (p1__13245_SHARP_,p2__13246_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13262 = p1__13245_SHARP_;

if(cljs.core.truth_(or__3548__auto____13262))
{return or__3548__auto____13262;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13246_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13266){
var maps = cljs.core.seq( arglist__13266 );;
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
{var merge_entry__13278 = (function (m,e){
var k__13276 = cljs.core.first.call(null,e);
var v__13277 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13276)))
{return cljs.core.assoc.call(null,m,k__13276,f.call(null,cljs.core.get.call(null,m,k__13276),v__13277));
} else
{return cljs.core.assoc.call(null,m,k__13276,v__13277);
}
});
var merge2__13281 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13278,(function (){var or__3548__auto____13279 = m1;

if(cljs.core.truth_(or__3548__auto____13279))
{return or__3548__auto____13279;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13281,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13372){
var f = cljs.core.first(arglist__13372);
var maps = cljs.core.rest(arglist__13372);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13382 = cljs.core.ObjMap.fromObject([],{});
var keys__13384 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13384))
{var key__13385 = cljs.core.first.call(null,keys__13384);
var entry__13386 = cljs.core.get.call(null,map,key__13385,"﷐'user/not-found");

{
var G__13392 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13386,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13382,key__13385,entry__13386):ret__13382);
var G__13393 = cljs.core.next.call(null,keys__13384);
ret__13382 = G__13392;
keys__13384 = G__13393;
continue;
}
} else
{return ret__13382;
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
var this__13410 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13452 = null;
var G__13452__13453 = (function (coll,v){
var this__13412 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13452__13454 = (function (coll,v,not_found){
var this__13414 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13414.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13452 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13452__13453.call(this,coll,v);
case  3 :
return G__13452__13454.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13452;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13459 = null;
var G__13459__13461 = (function (coll,k){
var this__13418 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13459__13503 = (function (coll,k,not_found){
var this__13419 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13459 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13459__13461.call(this,coll,k);
case  3 :
return G__13459__13503.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13459;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13421 = this;
return (new cljs.core.Set(this__13421.meta,cljs.core.assoc.call(null,this__13421.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13423 = this;
return cljs.core.keys.call(null,this__13423.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13427 = this;
return (new cljs.core.Set(this__13427.meta,cljs.core.dissoc.call(null,this__13427.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13430 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13434 = this;
var and__3546__auto____13435 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13435))
{var and__3546__auto____13437 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13437))
{return cljs.core.every_QMARK_.call(null,(function (p1__13375_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13375_SHARP_);
}),other);
} else
{return and__3546__auto____13437;
}
} else
{return and__3546__auto____13435;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13442 = this;
return (new cljs.core.Set(meta,this__13442.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13444 = this;
return this__13444.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13446 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13446.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13530 = cljs.core.seq.call(null,coll);
var out__13531 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13530))))
{{
var G__13533 = cljs.core.rest.call(null,in$__13530);
var G__13534 = cljs.core.conj.call(null,out__13531,cljs.core.first.call(null,in$__13530));
in$__13530 = G__13533;
out__13531 = G__13534;
continue;
}
} else
{return out__13531;
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
{var n__13535 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13540 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13540))
{var e__13544 = temp__3695__auto____13540;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13544));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13535,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13528_SHARP_){
var temp__3695__auto____13557 = cljs.core.find.call(null,smap,p1__13528_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13557))
{var e__13558 = temp__3695__auto____13557;

return cljs.core.second.call(null,e__13558);
} else
{return p1__13528_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13582 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13573,seen){
while(true){
var vec__13574__13575 = p__13573;
var f__13576 = cljs.core.nth.call(null,vec__13574__13575,0,null);
var xs__13577 = vec__13574__13575;

var temp__3698__auto____13579 = cljs.core.seq.call(null,xs__13577);

if(cljs.core.truth_(temp__3698__auto____13579))
{var s__13581 = temp__3698__auto____13579;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13576)))
{{
var G__13590 = cljs.core.rest.call(null,s__13581);
var G__13591 = seen;
p__13573 = G__13590;
seen = G__13591;
continue;
}
} else
{return cljs.core.cons.call(null,f__13576,step.call(null,cljs.core.rest.call(null,s__13581),cljs.core.conj.call(null,seen,f__13576)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13582.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13598 = cljs.core.Vector.fromArray([]);
var s__13599 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13599)))
{{
var G__13600 = cljs.core.conj.call(null,ret__13598,cljs.core.first.call(null,s__13599));
var G__13601 = cljs.core.next.call(null,s__13599);
ret__13598 = G__13600;
s__13599 = G__13601;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13598);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13607 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13607))
{return or__3548__auto____13607;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13610 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13610 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13610 + 1));
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
{var i__13620 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13620 > -1)))
{return cljs.core.subs.call(null,x,2,i__13620);
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
var map__13629 = cljs.core.ObjMap.fromObject([],{});
var ks__13630 = cljs.core.seq.call(null,keys);
var vs__13631 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13632 = ks__13630;

if(cljs.core.truth_(and__3546__auto____13632))
{return vs__13631;
} else
{return and__3546__auto____13632;
}
})()))
{{
var G__13635 = cljs.core.assoc.call(null,map__13629,cljs.core.first.call(null,ks__13630),cljs.core.first.call(null,vs__13631));
var G__13636 = cljs.core.next.call(null,ks__13630);
var G__13637 = cljs.core.next.call(null,vs__13631);
map__13629 = G__13635;
ks__13630 = G__13636;
vs__13631 = G__13637;
continue;
}
} else
{return map__13629;
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
var max_key__13656 = (function (k,x){
return x;
});
var max_key__13657 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13658 = (function() { 
var G__13660__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13626_SHARP_,p2__13627_SHARP_){
return max_key.call(null,k,p1__13626_SHARP_,p2__13627_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13660 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13660__delegate.call(this, k, x, y, more);
};
G__13660.cljs$lang$maxFixedArity = 3;
G__13660.cljs$lang$applyTo = (function (arglist__13663){
var k = cljs.core.first(arglist__13663);
var x = cljs.core.first(cljs.core.next(arglist__13663));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13663)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13663)));
return G__13660__delegate.call(this, k, x, y, more);
});
return G__13660;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13656.call(this,k,x);
case  3 :
return max_key__13657.call(this,k,x,y);
default:
return max_key__13658.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13658.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13680 = (function (k,x){
return x;
});
var min_key__13681 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13682 = (function() { 
var G__13688__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13642_SHARP_,p2__13643_SHARP_){
return min_key.call(null,k,p1__13642_SHARP_,p2__13643_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13688 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13688__delegate.call(this, k, x, y, more);
};
G__13688.cljs$lang$maxFixedArity = 3;
G__13688.cljs$lang$applyTo = (function (arglist__13691){
var k = cljs.core.first(arglist__13691);
var x = cljs.core.first(cljs.core.next(arglist__13691));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13691)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13691)));
return G__13688__delegate.call(this, k, x, y, more);
});
return G__13688;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13680.call(this,k,x);
case  3 :
return min_key__13681.call(this,k,x,y);
default:
return min_key__13682.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13682.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13703 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13704 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13697 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13697))
{var s__13698 = temp__3698__auto____13697;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13698),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13698)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13703.call(this,n,step);
case  3 :
return partition_all__13704.call(this,n,step,coll);
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
var temp__3698__auto____13717 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13717))
{var s__13718 = temp__3698__auto____13717;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13718))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13718),take_while.call(null,pred,cljs.core.rest.call(null,s__13718)));
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
var this__13733 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13736 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13885 = null;
var G__13885__13886 = (function (rng,f){
var this__13737 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13885__13887 = (function (rng,f,s){
var this__13738 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13885 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13885__13886.call(this,rng,f);
case  3 :
return G__13885__13887.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13885;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13739 = this;
var comp__13743 = (cljs.core.truth_((this__13739.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13743.call(null,this__13739.start,this__13739.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13853 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13853.end - this__13853.start) / this__13853.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13854 = this;
return this__13854.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13856 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13856.meta,(this__13856.start + this__13856.step),this__13856.end,this__13856.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13858 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13861 = this;
return (new cljs.core.Range(meta,this__13861.start,this__13861.end,this__13861.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13863 = this;
return this__13863.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13892 = null;
var G__13892__13894 = (function (rng,n){
var this__13866 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13866.start + (n * this__13866.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13870 = (this__13866.start > this__13866.end);

if(cljs.core.truth_(and__3546__auto____13870))
{return cljs.core._EQ_.call(null,this__13866.step,0);
} else
{return and__3546__auto____13870;
}
})()))
{return this__13866.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13892__13895 = (function (rng,n,not_found){
var this__13872 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13872.start + (n * this__13872.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13874 = (this__13872.start > this__13872.end);

if(cljs.core.truth_(and__3546__auto____13874))
{return cljs.core._EQ_.call(null,this__13872.step,0);
} else
{return and__3546__auto____13874;
}
})()))
{return this__13872.start;
} else
{return not_found;
}
}
});
G__13892 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13892__13894.call(this,rng,n);
case  3 :
return G__13892__13895.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13892;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13878 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13878.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13922 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13923 = (function (end){
return range.call(null,0,end,1);
});
var range__13924 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13925 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13922.call(this);
case  1 :
return range__13923.call(this,start);
case  2 :
return range__13924.call(this,start,end);
case  3 :
return range__13925.call(this,start,end,step);
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
var temp__3698__auto____13934 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13934))
{var s__13935 = temp__3698__auto____13934;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13935),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13935)));
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
var temp__3698__auto____13950 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13950))
{var s__13951 = temp__3698__auto____13950;

var fst__13952 = cljs.core.first.call(null,s__13951);
var fv__13953 = f.call(null,fst__13952);
var run__13954 = cljs.core.cons.call(null,fst__13952,cljs.core.take_while.call(null,(function (p1__13943_SHARP_){
return cljs.core._EQ_.call(null,fv__13953,f.call(null,p1__13943_SHARP_));
}),cljs.core.next.call(null,s__13951)));

return cljs.core.cons.call(null,run__13954,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13954),s__13951))));
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
var reductions__14009 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14005 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14005))
{var s__14006 = temp__3695__auto____14005;

return reductions.call(null,f,cljs.core.first.call(null,s__14006),cljs.core.rest.call(null,s__14006));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14011 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14007 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14007))
{var s__14008 = temp__3698__auto____14007;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14008)),cljs.core.rest.call(null,s__14008));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14009.call(this,f,init);
case  3 :
return reductions__14011.call(this,f,init,coll);
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
var juxt__14056 = (function (f){
return (function() {
var G__14062 = null;
var G__14062__14063 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14062__14064 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14062__14065 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14062__14066 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14062__14067 = (function() { 
var G__14071__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14071 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14071__delegate.call(this, x, y, z, args);
};
G__14071.cljs$lang$maxFixedArity = 3;
G__14071.cljs$lang$applyTo = (function (arglist__14072){
var x = cljs.core.first(arglist__14072);
var y = cljs.core.first(cljs.core.next(arglist__14072));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14072)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14072)));
return G__14071__delegate.call(this, x, y, z, args);
});
return G__14071;
})()
;
G__14062 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14062__14063.call(this);
case  1 :
return G__14062__14064.call(this,x);
case  2 :
return G__14062__14065.call(this,x,y);
case  3 :
return G__14062__14066.call(this,x,y,z);
default:
return G__14062__14067.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14062.cljs$lang$maxFixedArity = 3;
G__14062.cljs$lang$applyTo = G__14062__14067.cljs$lang$applyTo;
return G__14062;
})()
});
var juxt__14057 = (function (f,g){
return (function() {
var G__14076 = null;
var G__14076__14077 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14076__14078 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14076__14079 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14076__14080 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14076__14081 = (function() { 
var G__14096__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14096 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14096__delegate.call(this, x, y, z, args);
};
G__14096.cljs$lang$maxFixedArity = 3;
G__14096.cljs$lang$applyTo = (function (arglist__14100){
var x = cljs.core.first(arglist__14100);
var y = cljs.core.first(cljs.core.next(arglist__14100));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14100)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14100)));
return G__14096__delegate.call(this, x, y, z, args);
});
return G__14096;
})()
;
G__14076 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14076__14077.call(this);
case  1 :
return G__14076__14078.call(this,x);
case  2 :
return G__14076__14079.call(this,x,y);
case  3 :
return G__14076__14080.call(this,x,y,z);
default:
return G__14076__14081.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14076.cljs$lang$maxFixedArity = 3;
G__14076.cljs$lang$applyTo = G__14076__14081.cljs$lang$applyTo;
return G__14076;
})()
});
var juxt__14058 = (function (f,g,h){
return (function() {
var G__14103 = null;
var G__14103__14104 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14103__14105 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14103__14106 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14103__14107 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14103__14108 = (function() { 
var G__14112__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14112 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14112__delegate.call(this, x, y, z, args);
};
G__14112.cljs$lang$maxFixedArity = 3;
G__14112.cljs$lang$applyTo = (function (arglist__14113){
var x = cljs.core.first(arglist__14113);
var y = cljs.core.first(cljs.core.next(arglist__14113));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14113)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14113)));
return G__14112__delegate.call(this, x, y, z, args);
});
return G__14112;
})()
;
G__14103 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14103__14104.call(this);
case  1 :
return G__14103__14105.call(this,x);
case  2 :
return G__14103__14106.call(this,x,y);
case  3 :
return G__14103__14107.call(this,x,y,z);
default:
return G__14103__14108.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14103.cljs$lang$maxFixedArity = 3;
G__14103.cljs$lang$applyTo = G__14103__14108.cljs$lang$applyTo;
return G__14103;
})()
});
var juxt__14060 = (function() { 
var G__14116__delegate = function (f,g,h,fs){
var fs__14036 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14117 = null;
var G__14117__14118 = (function (){
return cljs.core.reduce.call(null,(function (p1__13980_SHARP_,p2__13981_SHARP_){
return cljs.core.conj.call(null,p1__13980_SHARP_,p2__13981_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14036);
});
var G__14117__14119 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13986_SHARP_,p2__13987_SHARP_){
return cljs.core.conj.call(null,p1__13986_SHARP_,p2__13987_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14036);
});
var G__14117__14120 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13988_SHARP_,p2__13989_SHARP_){
return cljs.core.conj.call(null,p1__13988_SHARP_,p2__13989_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14036);
});
var G__14117__14122 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13990_SHARP_,p2__13991_SHARP_){
return cljs.core.conj.call(null,p1__13990_SHARP_,p2__13991_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14036);
});
var G__14117__14123 = (function() { 
var G__14131__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13994_SHARP_,p2__13996_SHARP_){
return cljs.core.conj.call(null,p1__13994_SHARP_,cljs.core.apply.call(null,p2__13996_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14036);
};
var G__14131 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14131__delegate.call(this, x, y, z, args);
};
G__14131.cljs$lang$maxFixedArity = 3;
G__14131.cljs$lang$applyTo = (function (arglist__14134){
var x = cljs.core.first(arglist__14134);
var y = cljs.core.first(cljs.core.next(arglist__14134));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14134)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14134)));
return G__14131__delegate.call(this, x, y, z, args);
});
return G__14131;
})()
;
G__14117 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14117__14118.call(this);
case  1 :
return G__14117__14119.call(this,x);
case  2 :
return G__14117__14120.call(this,x,y);
case  3 :
return G__14117__14122.call(this,x,y,z);
default:
return G__14117__14123.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14117.cljs$lang$maxFixedArity = 3;
G__14117.cljs$lang$applyTo = G__14117__14123.cljs$lang$applyTo;
return G__14117;
})()
};
var G__14116 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14116__delegate.call(this, f, g, h, fs);
};
G__14116.cljs$lang$maxFixedArity = 3;
G__14116.cljs$lang$applyTo = (function (arglist__14139){
var f = cljs.core.first(arglist__14139);
var g = cljs.core.first(cljs.core.next(arglist__14139));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14139)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14139)));
return G__14116__delegate.call(this, f, g, h, fs);
});
return G__14116;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14056.call(this,f);
case  2 :
return juxt__14057.call(this,f,g);
case  3 :
return juxt__14058.call(this,f,g,h);
default:
return juxt__14060.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14060.cljs$lang$applyTo;
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
var dorun__14147 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14150 = cljs.core.next.call(null,coll);
coll = G__14150;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14148 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14142 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14142))
{return (n > 0);
} else
{return and__3546__auto____14142;
}
})()))
{{
var G__14151 = (n - 1);
var G__14152 = cljs.core.next.call(null,coll);
n = G__14151;
coll = G__14152;
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
return dorun__14147.call(this,n);
case  2 :
return dorun__14148.call(this,n,coll);
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
var doall__14153 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14154 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14153.call(this,n);
case  2 :
return doall__14154.call(this,n,coll);
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
var matches__14232 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14232),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14232),1)))
{return cljs.core.first.call(null,matches__14232);
} else
{return cljs.core.vec.call(null,matches__14232);
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
var matches__14240 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14240)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14240),1)))
{return cljs.core.first.call(null,matches__14240);
} else
{return cljs.core.vec.call(null,matches__14240);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14253 = cljs.core.re_find.call(null,re,s);
var match_idx__14254 = s.search(re);
var match_str__14256 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14253))?cljs.core.first.call(null,match_data__14253):match_data__14253);
var post_match__14258 = cljs.core.subs.call(null,s,(match_idx__14254 + cljs.core.count.call(null,match_str__14256)));

if(cljs.core.truth_(match_data__14253))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14253,re_seq.call(null,re,post_match__14258));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14266_SHARP_){
return print_one.call(null,p1__14266_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14273 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14273))
{var and__3546__auto____14278 = (function (){var x__445__auto____14274 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14275 = x__445__auto____14274;

if(cljs.core.truth_(and__3546__auto____14275))
{var and__3546__auto____14276 = x__445__auto____14274.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14276))
{return cljs.core.not.call(null,x__445__auto____14274.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14276;
}
} else
{return and__3546__auto____14275;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14274);
}
})();

if(cljs.core.truth_(and__3546__auto____14278))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14278;
}
} else
{return and__3546__auto____14273;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14279 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14280 = x__445__auto____14279;

if(cljs.core.truth_(and__3546__auto____14280))
{var and__3546__auto____14281 = x__445__auto____14279.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14281))
{return cljs.core.not.call(null,x__445__auto____14279.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14281;
}
} else
{return and__3546__auto____14280;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14279);
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
var first_obj__14313 = cljs.core.first.call(null,objs);
var sb__14314 = (new goog.string.StringBuffer());

var G__14315__14322 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14315__14322))
{var obj__14324 = cljs.core.first.call(null,G__14315__14322);
var G__14315__14325 = G__14315__14322;

while(true){
if(cljs.core.truth_((obj__14324 === first_obj__14313)))
{} else
{sb__14314.append(" ");
}
var G__14326__14327 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14324,opts));

if(cljs.core.truth_(G__14326__14327))
{var string__14328 = cljs.core.first.call(null,G__14326__14327);
var G__14326__14329 = G__14326__14327;

while(true){
sb__14314.append(string__14328);
var temp__3698__auto____14331 = cljs.core.next.call(null,G__14326__14329);

if(cljs.core.truth_(temp__3698__auto____14331))
{var G__14326__14332 = temp__3698__auto____14331;

{
var G__14343 = cljs.core.first.call(null,G__14326__14332);
var G__14344 = G__14326__14332;
string__14328 = G__14343;
G__14326__14329 = G__14344;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14334 = cljs.core.next.call(null,G__14315__14325);

if(cljs.core.truth_(temp__3698__auto____14334))
{var G__14315__14335 = temp__3698__auto____14334;

{
var G__14346 = cljs.core.first.call(null,G__14315__14335);
var G__14347 = G__14315__14335;
obj__14324 = G__14346;
G__14315__14325 = G__14347;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14314);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14350 = cljs.core.first.call(null,objs);

var G__14351__14354 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14351__14354))
{var obj__14360 = cljs.core.first.call(null,G__14351__14354);
var G__14351__14361 = G__14351__14354;

while(true){
if(cljs.core.truth_((obj__14360 === first_obj__14350)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14362__14363 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14360,opts));

if(cljs.core.truth_(G__14362__14363))
{var string__14364 = cljs.core.first.call(null,G__14362__14363);
var G__14362__14365 = G__14362__14363;

while(true){
cljs.core.string_print.call(null,string__14364);
var temp__3698__auto____14366 = cljs.core.next.call(null,G__14362__14365);

if(cljs.core.truth_(temp__3698__auto____14366))
{var G__14362__14367 = temp__3698__auto____14366;

{
var G__14375 = cljs.core.first.call(null,G__14362__14367);
var G__14376 = G__14362__14367;
string__14364 = G__14375;
G__14362__14365 = G__14376;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14371 = cljs.core.next.call(null,G__14351__14361);

if(cljs.core.truth_(temp__3698__auto____14371))
{var G__14351__14372 = temp__3698__auto____14371;

{
var G__14381 = cljs.core.first.call(null,G__14351__14372);
var G__14382 = G__14351__14372;
obj__14360 = G__14381;
G__14351__14361 = G__14382;
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
pr_str.cljs$lang$applyTo = (function (arglist__14540){
var objs = cljs.core.seq( arglist__14540 );;
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
pr.cljs$lang$applyTo = (function (arglist__14542){
var objs = cljs.core.seq( arglist__14542 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14549){
var objs = cljs.core.seq( arglist__14549 );;
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
println.cljs$lang$applyTo = (function (arglist__14560){
var objs = cljs.core.seq( arglist__14560 );;
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
prn.cljs$lang$applyTo = (function (arglist__14569){
var objs = cljs.core.seq( arglist__14569 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14580 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14580,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14610 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14610))
{var nspc__14612 = temp__3698__auto____14610;

return cljs.core.str.call(null,nspc__14612,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14619 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14619))
{var nspc__14620 = temp__3698__auto____14619;

return cljs.core.str.call(null,nspc__14620,"/");
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
var pr_pair__14682 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14682,"{",", ","}",opts,coll);
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
var this__14761 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14762 = this;
var G__14763__14764 = cljs.core.seq.call(null,this__14762.watches);

if(cljs.core.truth_(G__14763__14764))
{var G__14766__14768 = cljs.core.first.call(null,G__14763__14764);
var vec__14767__14769 = G__14766__14768;
var key__14770 = cljs.core.nth.call(null,vec__14767__14769,0,null);
var f__14771 = cljs.core.nth.call(null,vec__14767__14769,1,null);
var G__14763__14772 = G__14763__14764;

var G__14766__14773 = G__14766__14768;
var G__14763__14774 = G__14763__14772;

while(true){
var vec__14775__14776 = G__14766__14773;
var key__14777 = cljs.core.nth.call(null,vec__14775__14776,0,null);
var f__14778 = cljs.core.nth.call(null,vec__14775__14776,1,null);
var G__14763__14779 = G__14763__14774;

f__14778.call(null,key__14777,this$,oldval,newval);
var temp__3698__auto____14780 = cljs.core.next.call(null,G__14763__14779);

if(cljs.core.truth_(temp__3698__auto____14780))
{var G__14763__14781 = temp__3698__auto____14780;

{
var G__14801 = cljs.core.first.call(null,G__14763__14781);
var G__14802 = G__14763__14781;
G__14766__14773 = G__14801;
G__14763__14774 = G__14802;
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
var this__14782 = this;
return this$.watches = cljs.core.assoc.call(null,this__14782.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14783 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14783.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14785 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14785.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14787 = this;
return this__14787.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14788 = this;
return this__14788.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14789 = this;
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
var atom__14871 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14872 = (function() { 
var G__14874__delegate = function (x,p__14853){
var map__14861__14862 = p__14853;
var map__14861__14864 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14861__14862))?cljs.core.apply.call(null,cljs.core.hash_map,map__14861__14862):map__14861__14862);
var validator__14865 = cljs.core.get.call(null,map__14861__14864,"﷐'validator");
var meta__14866 = cljs.core.get.call(null,map__14861__14864,"﷐'meta");

return (new cljs.core.Atom(x,meta__14866,validator__14865,null));
};
var G__14874 = function (x,var_args){
var p__14853 = null;
if (goog.isDef(var_args)) {
  p__14853 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14874__delegate.call(this, x, p__14853);
};
G__14874.cljs$lang$maxFixedArity = 1;
G__14874.cljs$lang$applyTo = (function (arglist__14875){
var x = cljs.core.first(arglist__14875);
var p__14853 = cljs.core.rest(arglist__14875);
return G__14874__delegate.call(this, x, p__14853);
});
return G__14874;
})()
;
atom = function(x,var_args){
var p__14853 = var_args;
switch(arguments.length){
case  1 :
return atom__14871.call(this,x);
default:
return atom__14872.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14872.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14879 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14879))
{var validate__14881 = temp__3698__auto____14879;

if(cljs.core.truth_(validate__14881.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14884 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14884,new_value);
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
var swap_BANG___14900 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14901 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14902 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14903 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14905 = (function() { 
var G__14912__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14912 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14912__delegate.call(this, a, f, x, y, z, more);
};
G__14912.cljs$lang$maxFixedArity = 5;
G__14912.cljs$lang$applyTo = (function (arglist__14914){
var a = cljs.core.first(arglist__14914);
var f = cljs.core.first(cljs.core.next(arglist__14914));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14914)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14914))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14914)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14914)))));
return G__14912__delegate.call(this, a, f, x, y, z, more);
});
return G__14912;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14900.call(this,a,f);
case  3 :
return swap_BANG___14901.call(this,a,f,x);
case  4 :
return swap_BANG___14902.call(this,a,f,x,y);
case  5 :
return swap_BANG___14903.call(this,a,f,x,y,z);
default:
return swap_BANG___14905.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14905.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14931){
var iref = cljs.core.first(arglist__14931);
var f = cljs.core.first(cljs.core.next(arglist__14931));
var args = cljs.core.rest(cljs.core.next(arglist__14931));
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
var gensym__14981 = (function (){
return gensym.call(null,"G__");
});
var gensym__14982 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14981.call(this);
case  1 :
return gensym__14982.call(this,prefix_string);
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
var this__14998 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14998.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15000 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__15000.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__15000.state,this__15000.f);
}
return cljs.core.deref.call(null,this__15000.state);
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
delay.cljs$lang$applyTo = (function (arglist__15031){
var body = cljs.core.seq( arglist__15031 );;
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
var map__15044__15046 = options;
var map__15044__15048 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15044__15046))?cljs.core.apply.call(null,cljs.core.hash_map,map__15044__15046):map__15044__15046);
var keywordize_keys__15049 = cljs.core.get.call(null,map__15044__15048,"﷐'keywordize-keys");
var keyfn__15050 = (cljs.core.truth_(keywordize_keys__15049)?cljs.core.keyword:cljs.core.str);
var f__15065 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15064 = (function iter__15056(s__15057){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15057__15061 = s__15057;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15057__15061)))
{var k__15063 = cljs.core.first.call(null,s__15057__15061);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15050.call(null,k__15063),thisfn.call(null,(x[k__15063]))]),iter__15056.call(null,cljs.core.rest.call(null,s__15057__15061)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15064.call(null,cljs.core.js_keys.call(null,x));
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

return f__15065.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15073){
var x = cljs.core.first(arglist__15073);
var options = cljs.core.rest(arglist__15073);
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
var mem__15079 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15086__delegate = function (args){
var temp__3695__auto____15082 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15079),args);

if(cljs.core.truth_(temp__3695__auto____15082))
{var v__15083 = temp__3695__auto____15082;

return v__15083;
} else
{var ret__15084 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15079,cljs.core.assoc,args,ret__15084);
return ret__15084;
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
G__15086.cljs$lang$applyTo = (function (arglist__15089){
var args = cljs.core.seq( arglist__15089 );;
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
var trampoline__15101 = (function (f){
while(true){
var ret__15094 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15094)))
{{
var G__15105 = ret__15094;
f = G__15105;
continue;
}
} else
{return ret__15094;
}
break;
}
});
var trampoline__15102 = (function() { 
var G__15109__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15109 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15109__delegate.call(this, f, args);
};
G__15109.cljs$lang$maxFixedArity = 1;
G__15109.cljs$lang$applyTo = (function (arglist__15111){
var f = cljs.core.first(arglist__15111);
var args = cljs.core.rest(arglist__15111);
return G__15109__delegate.call(this, f, args);
});
return G__15109;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15101.call(this,f);
default:
return trampoline__15102.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15102.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15115 = (function (){
return rand.call(null,1);
});
var rand__15116 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15115.call(this);
case  1 :
return rand__15116.call(this,n);
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
var k__15130 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15130,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15130,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15150 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15151 = (function (h,child,parent){
var or__3548__auto____15138 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15138))
{return or__3548__auto____15138;
} else
{var or__3548__auto____15139 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15139))
{return or__3548__auto____15139;
} else
{var and__3546__auto____15140 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15140))
{var and__3546__auto____15141 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15141))
{var and__3546__auto____15143 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15143))
{var ret__15144 = true;
var i__15145 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15146 = cljs.core.not.call(null,ret__15144);

if(cljs.core.truth_(or__3548__auto____15146))
{return or__3548__auto____15146;
} else
{return cljs.core._EQ_.call(null,i__15145,cljs.core.count.call(null,parent));
}
})()))
{return ret__15144;
} else
{{
var G__15157 = isa_QMARK_.call(null,h,child.call(null,i__15145),parent.call(null,i__15145));
var G__15158 = (i__15145 + 1);
ret__15144 = G__15157;
i__15145 = G__15158;
continue;
}
}
break;
}
} else
{return and__3546__auto____15143;
}
} else
{return and__3546__auto____15141;
}
} else
{return and__3546__auto____15140;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15150.call(this,h,child);
case  3 :
return isa_QMARK___15151.call(this,h,child,parent);
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
var parents__15169 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15170 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15169.call(this,h);
case  2 :
return parents__15170.call(this,h,tag);
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
var ancestors__15311 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15312 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15311.call(this,h);
case  2 :
return ancestors__15312.call(this,h,tag);
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
var descendants__15314 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15315 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15314.call(this,h);
case  2 :
return descendants__15315.call(this,h,tag);
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
var derive__15328 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15329 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15320 = "﷐'parents".call(null,h);
var td__15321 = "﷐'descendants".call(null,h);
var ta__15322 = "﷐'ancestors".call(null,h);
var tf__15323 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15326 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15320.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15322.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15322.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15320,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15323.call(null,"﷐'ancestors".call(null,h),tag,td__15321,parent,ta__15322),"﷐'descendants":tf__15323.call(null,"﷐'descendants".call(null,h),parent,ta__15322,tag,td__15321)});
})());

if(cljs.core.truth_(or__3548__auto____15326))
{return or__3548__auto____15326;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15328.call(this,h,tag);
case  3 :
return derive__15329.call(this,h,tag,parent);
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
var parentMap__15368 = "﷐'parents".call(null,h);
var childsParents__15370 = (cljs.core.truth_(parentMap__15368.call(null,tag))?cljs.core.disj.call(null,parentMap__15368.call(null,tag),parent):cljs.core.set([]));
var newParents__15371 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15370))?cljs.core.assoc.call(null,parentMap__15368,tag,childsParents__15370):cljs.core.dissoc.call(null,parentMap__15368,tag));
var deriv_seq__15374 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15317_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15317_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15317_SHARP_),cljs.core.second.call(null,p1__15317_SHARP_)));
}),cljs.core.seq.call(null,newParents__15371)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15368.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15318_SHARP_,p2__15319_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15318_SHARP_,p2__15319_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15374));
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
var xprefs__15400 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15402 = (cljs.core.truth_((function (){var and__3546__auto____15401 = xprefs__15400;

if(cljs.core.truth_(and__3546__auto____15401))
{return xprefs__15400.call(null,y);
} else
{return and__3546__auto____15401;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15402))
{return or__3548__auto____15402;
} else
{var or__3548__auto____15407 = (function (){var ps__15405 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15405) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15405),prefer_table)))
{} else
{}
{
var G__15415 = cljs.core.rest.call(null,ps__15405);
ps__15405 = G__15415;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15407))
{return or__3548__auto____15407;
} else
{var or__3548__auto____15411 = (function (){var ps__15409 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15409) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15409),y,prefer_table)))
{} else
{}
{
var G__15416 = cljs.core.rest.call(null,ps__15409);
ps__15409 = G__15416;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15411))
{return or__3548__auto____15411;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15423 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15423))
{return or__3548__auto____15423;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15437 = cljs.core.reduce.call(null,(function (be,p__15426){
var vec__15428__15429 = p__15426;
var k__15430 = cljs.core.nth.call(null,vec__15428__15429,0,null);
var ___15432 = cljs.core.nth.call(null,vec__15428__15429,1,null);
var e__15433 = vec__15428__15429;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15430)))
{var be2__15436 = (cljs.core.truth_((function (){var or__3548__auto____15435 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15435))
{return or__3548__auto____15435;
} else
{return cljs.core.dominates.call(null,k__15430,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15433:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15436),k__15430,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15430," and ",cljs.core.first.call(null,be2__15436),", and neither is preferred")));
}
return be2__15436;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15437))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15437));
return cljs.core.second.call(null,best_entry__15437);
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
if(cljs.core.truth_((function (){var and__3546__auto____15441 = mf;

if(cljs.core.truth_(and__3546__auto____15441))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15441;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15443 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15443))
{return or__3548__auto____15443;
} else
{var or__3548__auto____15444 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15444))
{return or__3548__auto____15444;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15448 = mf;

if(cljs.core.truth_(and__3546__auto____15448))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15448;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15449 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15449))
{return or__3548__auto____15449;
} else
{var or__3548__auto____15450 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15450))
{return or__3548__auto____15450;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15451 = mf;

if(cljs.core.truth_(and__3546__auto____15451))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15451;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15453 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15453))
{return or__3548__auto____15453;
} else
{var or__3548__auto____15455 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15455))
{return or__3548__auto____15455;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15456 = mf;

if(cljs.core.truth_(and__3546__auto____15456))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15456;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15457 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15457))
{return or__3548__auto____15457;
} else
{var or__3548__auto____15458 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15458))
{return or__3548__auto____15458;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15463 = mf;

if(cljs.core.truth_(and__3546__auto____15463))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15463;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15465 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15465))
{return or__3548__auto____15465;
} else
{var or__3548__auto____15467 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15467))
{return or__3548__auto____15467;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15468 = mf;

if(cljs.core.truth_(and__3546__auto____15468))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15468;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15470 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15470))
{return or__3548__auto____15470;
} else
{var or__3548__auto____15471 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15471))
{return or__3548__auto____15471;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15474 = mf;

if(cljs.core.truth_(and__3546__auto____15474))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15474;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15475 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15475))
{return or__3548__auto____15475;
} else
{var or__3548__auto____15477 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15477))
{return or__3548__auto____15477;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15482 = mf;

if(cljs.core.truth_(and__3546__auto____15482))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15482;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15483 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15483))
{return or__3548__auto____15483;
} else
{var or__3548__auto____15484 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15484))
{return or__3548__auto____15484;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15516 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15517 = cljs.core._get_method.call(null,mf,dispatch_val__15516);

if(cljs.core.truth_(target_fn__15517))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15516)));
}
return cljs.core.apply.call(null,target_fn__15517,args);
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
var this__15518 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15519 = this;
cljs.core.swap_BANG_.call(null,this__15519.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15519.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15519.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15519.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15522 = this;
cljs.core.swap_BANG_.call(null,this__15522.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15522.method_cache,this__15522.method_table,this__15522.cached_hierarchy,this__15522.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15526 = this;
cljs.core.swap_BANG_.call(null,this__15526.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15526.method_cache,this__15526.method_table,this__15526.cached_hierarchy,this__15526.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15527 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15527.cached_hierarchy),cljs.core.deref.call(null,this__15527.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15527.method_cache,this__15527.method_table,this__15527.cached_hierarchy,this__15527.hierarchy);
}
var temp__3695__auto____15528 = cljs.core.deref.call(null,this__15527.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15528))
{var target_fn__15529 = temp__3695__auto____15528;

return target_fn__15529;
} else
{var temp__3695__auto____15530 = cljs.core.find_and_cache_best_method.call(null,this__15527.name,dispatch_val,this__15527.hierarchy,this__15527.method_table,this__15527.prefer_table,this__15527.method_cache,this__15527.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15530))
{var target_fn__15531 = temp__3695__auto____15530;

return target_fn__15531;
} else
{return cljs.core.deref.call(null,this__15527.method_table).call(null,this__15527.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15532 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15532.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15532.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15532.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15532.method_cache,this__15532.method_table,this__15532.cached_hierarchy,this__15532.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15537 = this;
return cljs.core.deref.call(null,this__15537.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15538 = this;
return cljs.core.deref.call(null,this__15538.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15539 = this;
return cljs.core.do_dispatch.call(null,mf,this__15539.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15555__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15555 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15555__delegate.call(this, _, args);
};
G__15555.cljs$lang$maxFixedArity = 1;
G__15555.cljs$lang$applyTo = (function (arglist__15556){
var _ = cljs.core.first(arglist__15556);
var args = cljs.core.rest(arglist__15556);
return G__15555__delegate.call(this, _, args);
});
return G__15555;
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
