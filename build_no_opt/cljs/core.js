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
var or__3548__auto____7225 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7225))
{return or__3548__auto____7225;
} else
{var or__3548__auto____7226 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7226))
{return or__3548__auto____7226;
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
var _invoke__7544 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7241 = this$;

if(cljs.core.truth_(and__3546__auto____7241))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7241;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7243 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7243))
{return or__3548__auto____7243;
} else
{var or__3548__auto____7244 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7244))
{return or__3548__auto____7244;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7545 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7247 = this$;

if(cljs.core.truth_(and__3546__auto____7247))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7247;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7250 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7250))
{return or__3548__auto____7250;
} else
{var or__3548__auto____7252 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7252))
{return or__3548__auto____7252;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7546 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7256 = this$;

if(cljs.core.truth_(and__3546__auto____7256))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7256;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7259 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7259))
{return or__3548__auto____7259;
} else
{var or__3548__auto____7260 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7260))
{return or__3548__auto____7260;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7547 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7267 = this$;

if(cljs.core.truth_(and__3546__auto____7267))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7267;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7270 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7270))
{return or__3548__auto____7270;
} else
{var or__3548__auto____7272 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7272))
{return or__3548__auto____7272;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7548 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7276 = this$;

if(cljs.core.truth_(and__3546__auto____7276))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7276;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7280 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7280))
{return or__3548__auto____7280;
} else
{var or__3548__auto____7281 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7281))
{return or__3548__auto____7281;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7549 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7286 = this$;

if(cljs.core.truth_(and__3546__auto____7286))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7286;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7289 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7289))
{return or__3548__auto____7289;
} else
{var or__3548__auto____7290 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7290))
{return or__3548__auto____7290;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7550 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7292 = this$;

if(cljs.core.truth_(and__3546__auto____7292))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7292;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7294 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7294))
{return or__3548__auto____7294;
} else
{var or__3548__auto____7297 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7297))
{return or__3548__auto____7297;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7551 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7300 = this$;

if(cljs.core.truth_(and__3546__auto____7300))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7300;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7303 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7303))
{return or__3548__auto____7303;
} else
{var or__3548__auto____7304 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7304))
{return or__3548__auto____7304;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7552 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7307 = this$;

if(cljs.core.truth_(and__3546__auto____7307))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7307;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7310 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7310))
{return or__3548__auto____7310;
} else
{var or__3548__auto____7311 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7311))
{return or__3548__auto____7311;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7553 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7313 = this$;

if(cljs.core.truth_(and__3546__auto____7313))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7313;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7318 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7318))
{return or__3548__auto____7318;
} else
{var or__3548__auto____7319 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7319))
{return or__3548__auto____7319;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7555 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7322 = this$;

if(cljs.core.truth_(and__3546__auto____7322))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7322;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7326 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7326))
{return or__3548__auto____7326;
} else
{var or__3548__auto____7328 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7328))
{return or__3548__auto____7328;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7556 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7357 = this$;

if(cljs.core.truth_(and__3546__auto____7357))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7357;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7392 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7392))
{return or__3548__auto____7392;
} else
{var or__3548__auto____7395 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7395))
{return or__3548__auto____7395;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7557 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7399 = this$;

if(cljs.core.truth_(and__3546__auto____7399))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7399;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7403 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7403))
{return or__3548__auto____7403;
} else
{var or__3548__auto____7404 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7404))
{return or__3548__auto____7404;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7558 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7409 = this$;

if(cljs.core.truth_(and__3546__auto____7409))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7409;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7414 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7414))
{return or__3548__auto____7414;
} else
{var or__3548__auto____7416 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7416))
{return or__3548__auto____7416;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7559 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7422 = this$;

if(cljs.core.truth_(and__3546__auto____7422))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7422;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7560 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7433 = this$;

if(cljs.core.truth_(and__3546__auto____7433))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7433;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7561 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7444 = this$;

if(cljs.core.truth_(and__3546__auto____7444))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7444;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7448 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7448))
{return or__3548__auto____7448;
} else
{var or__3548__auto____7449 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7449))
{return or__3548__auto____7449;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7562 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7453 = this$;

if(cljs.core.truth_(and__3546__auto____7453))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7453;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7457 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7457))
{return or__3548__auto____7457;
} else
{var or__3548__auto____7458 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7458))
{return or__3548__auto____7458;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7563 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7466 = this$;

if(cljs.core.truth_(and__3546__auto____7466))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7466;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7564 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7493 = this$;

if(cljs.core.truth_(and__3546__auto____7493))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7493;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7565 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7502 = this$;

if(cljs.core.truth_(and__3546__auto____7502))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7502;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__7544.call(this,this$);
case  2 :
return _invoke__7545.call(this,this$,a);
case  3 :
return _invoke__7546.call(this,this$,a,b);
case  4 :
return _invoke__7547.call(this,this$,a,b,c);
case  5 :
return _invoke__7548.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7549.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7550.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7551.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7552.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7553.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7555.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7556.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7557.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7558.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7559.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7560.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7561.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7562.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7563.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7564.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7565.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7652 = coll;

if(cljs.core.truth_(and__3546__auto____7652))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7652;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7653 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7653))
{return or__3548__auto____7653;
} else
{var or__3548__auto____7654 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7654))
{return or__3548__auto____7654;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7735 = coll;

if(cljs.core.truth_(and__3546__auto____7735))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7735;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7737 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7737))
{return or__3548__auto____7737;
} else
{var or__3548__auto____7739 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7739))
{return or__3548__auto____7739;
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
{return (function (){var or__3548__auto____7747 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7747))
{return or__3548__auto____7747;
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
var _nth__7771 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7751 = coll;

if(cljs.core.truth_(and__3546__auto____7751))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7751;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7755 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7755))
{return or__3548__auto____7755;
} else
{var or__3548__auto____7757 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7757))
{return or__3548__auto____7757;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7772 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7758 = coll;

if(cljs.core.truth_(and__3546__auto____7758))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7758;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7762 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7762))
{return or__3548__auto____7762;
} else
{var or__3548__auto____7768 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7768))
{return or__3548__auto____7768;
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
return _nth__7771.call(this,coll,n);
case  3 :
return _nth__7772.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7784 = coll;

if(cljs.core.truth_(and__3546__auto____7784))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7784;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7787 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7787))
{return or__3548__auto____7787;
} else
{var or__3548__auto____7789 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7789))
{return or__3548__auto____7789;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7794 = coll;

if(cljs.core.truth_(and__3546__auto____7794))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7794;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7798 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7798))
{return or__3548__auto____7798;
} else
{var or__3548__auto____7800 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7800))
{return or__3548__auto____7800;
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
var _lookup__7821 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7809 = o;

if(cljs.core.truth_(and__3546__auto____7809))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7809;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7814 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7814))
{return or__3548__auto____7814;
} else
{var or__3548__auto____7815 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7815))
{return or__3548__auto____7815;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7822 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7816 = o;

if(cljs.core.truth_(and__3546__auto____7816))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7816;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7817 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7817))
{return or__3548__auto____7817;
} else
{var or__3548__auto____7819 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7819))
{return or__3548__auto____7819;
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
return _lookup__7821.call(this,o,k);
case  3 :
return _lookup__7822.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7827 = coll;

if(cljs.core.truth_(and__3546__auto____7827))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7827;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7829 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7829))
{return or__3548__auto____7829;
} else
{var or__3548__auto____7831 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7831))
{return or__3548__auto____7831;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7834 = coll;

if(cljs.core.truth_(and__3546__auto____7834))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7834;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7837 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7837))
{return or__3548__auto____7837;
} else
{var or__3548__auto____7838 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7838))
{return or__3548__auto____7838;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7844 = coll;

if(cljs.core.truth_(and__3546__auto____7844))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7844;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7845 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
} else
{var or__3548__auto____7846 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7846))
{return or__3548__auto____7846;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7851 = coll;

if(cljs.core.truth_(and__3546__auto____7851))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7851;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7855 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7855))
{return or__3548__auto____7855;
} else
{var or__3548__auto____7857 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7857))
{return or__3548__auto____7857;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7864 = coll;

if(cljs.core.truth_(and__3546__auto____7864))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7864;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7881 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7881))
{return or__3548__auto____7881;
} else
{var or__3548__auto____7882 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7882))
{return or__3548__auto____7882;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7886 = coll;

if(cljs.core.truth_(and__3546__auto____7886))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7886;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7887 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7887))
{return or__3548__auto____7887;
} else
{var or__3548__auto____7888 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7888))
{return or__3548__auto____7888;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7900 = coll;

if(cljs.core.truth_(and__3546__auto____7900))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7900;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7903 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7903))
{return or__3548__auto____7903;
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
if(cljs.core.truth_((function (){var and__3546__auto____7910 = o;

if(cljs.core.truth_(and__3546__auto____7910))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7910;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7912 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7912))
{return or__3548__auto____7912;
} else
{var or__3548__auto____7915 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7920 = o;

if(cljs.core.truth_(and__3546__auto____7920))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7920;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7921 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7921))
{return or__3548__auto____7921;
} else
{var or__3548__auto____7923 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7923))
{return or__3548__auto____7923;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7929 = o;

if(cljs.core.truth_(and__3546__auto____7929))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7929;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7930 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7930))
{return or__3548__auto____7930;
} else
{var or__3548__auto____7932 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7932))
{return or__3548__auto____7932;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7938 = o;

if(cljs.core.truth_(and__3546__auto____7938))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7938;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7940 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7940))
{return or__3548__auto____7940;
} else
{var or__3548__auto____7941 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7941))
{return or__3548__auto____7941;
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
var _reduce__8027 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7951 = coll;

if(cljs.core.truth_(and__3546__auto____7951))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7951;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7952 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7952))
{return or__3548__auto____7952;
} else
{var or__3548__auto____7953 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7953))
{return or__3548__auto____7953;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8028 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8019 = coll;

if(cljs.core.truth_(and__3546__auto____8019))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8019;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8023 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8023))
{return or__3548__auto____8023;
} else
{var or__3548__auto____8024 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8024))
{return or__3548__auto____8024;
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
return _reduce__8027.call(this,coll,f);
case  3 :
return _reduce__8028.call(this,coll,f,start);
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
{return (function (){var or__3548__auto____8071 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8071))
{return or__3548__auto____8071;
} else
{var or__3548__auto____8073 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8078 = o;

if(cljs.core.truth_(and__3546__auto____8078))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8078;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8080 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8080))
{return or__3548__auto____8080;
} else
{var or__3548__auto____8081 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8081))
{return or__3548__auto____8081;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8084 = o;

if(cljs.core.truth_(and__3546__auto____8084))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8084;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8085 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8085))
{return or__3548__auto____8085;
} else
{var or__3548__auto____8087 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
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
if(cljs.core.truth_((function (){var and__3546__auto____8090 = o;

if(cljs.core.truth_(and__3546__auto____8090))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8090;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8091 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8091))
{return or__3548__auto____8091;
} else
{var or__3548__auto____8093 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8093))
{return or__3548__auto____8093;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8100 = d;

if(cljs.core.truth_(and__3546__auto____8100))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8100;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8103 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8103))
{return or__3548__auto____8103;
} else
{var or__3548__auto____8104 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8104))
{return or__3548__auto____8104;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8106 = this$;

if(cljs.core.truth_(and__3546__auto____8106))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8106;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8107 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8107))
{return or__3548__auto____8107;
} else
{var or__3548__auto____8108 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8108))
{return or__3548__auto____8108;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8109 = this$;

if(cljs.core.truth_(and__3546__auto____8109))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8109;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8110 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8110))
{return or__3548__auto____8110;
} else
{var or__3548__auto____8111 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8111))
{return or__3548__auto____8111;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8113 = this$;

if(cljs.core.truth_(and__3546__auto____8113))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8113;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8115 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8115))
{return or__3548__auto____8115;
} else
{var or__3548__auto____8116 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8116))
{return or__3548__auto____8116;
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
var G__8135 = null;
var G__8135__8136 = (function (o,k){
return null;
});
var G__8135__8137 = (function (o,k,not_found){
return not_found;
});
G__8135 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8135__8136.call(this,o,k);
case  3 :
return G__8135__8137.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8135;
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
var G__8143 = null;
var G__8143__8144 = (function (_,f){
return f.call(null);
});
var G__8143__8145 = (function (_,f,start){
return start;
});
G__8143 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8143__8144.call(this,_,f);
case  3 :
return G__8143__8145.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8143;
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
var G__8149 = null;
var G__8149__8150 = (function (_,n){
return null;
});
var G__8149__8151 = (function (_,n,not_found){
return not_found;
});
G__8149 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8149__8150.call(this,_,n);
case  3 :
return G__8149__8151.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8149;
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
var ci_reduce__8188 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8180 = cljs.core._nth.call(null,cicoll,0);
var n__8181 = 1;

while(true){
if(cljs.core.truth_((n__8181 < cljs.core._count.call(null,cicoll))))
{{
var G__8193 = f.call(null,val__8180,cljs.core._nth.call(null,cicoll,n__8181));
var G__8194 = (n__8181 + 1);
val__8180 = G__8193;
n__8181 = G__8194;
continue;
}
} else
{return val__8180;
}
break;
}
}
});
var ci_reduce__8189 = (function (cicoll,f,val){
var val__8183 = val;
var n__8184 = 0;

while(true){
if(cljs.core.truth_((n__8184 < cljs.core._count.call(null,cicoll))))
{{
var G__8196 = f.call(null,val__8183,cljs.core._nth.call(null,cicoll,n__8184));
var G__8197 = (n__8184 + 1);
val__8183 = G__8196;
n__8184 = G__8197;
continue;
}
} else
{return val__8183;
}
break;
}
});
var ci_reduce__8190 = (function (cicoll,f,val,idx){
var val__8186 = val;
var n__8187 = idx;

while(true){
if(cljs.core.truth_((n__8187 < cljs.core._count.call(null,cicoll))))
{{
var G__8199 = f.call(null,val__8186,cljs.core._nth.call(null,cicoll,n__8187));
var G__8200 = (n__8187 + 1);
val__8186 = G__8199;
n__8187 = G__8200;
continue;
}
} else
{return val__8186;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8188.call(this,cicoll,f);
case  3 :
return ci_reduce__8189.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8190.call(this,cicoll,f,val,idx);
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
var this__8211 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8238 = null;
var G__8238__8239 = (function (_,f){
var this__8212 = this;
return cljs.core.ci_reduce.call(null,this__8212.a,f,(this__8212.a[this__8212.i]),(this__8212.i + 1));
});
var G__8238__8240 = (function (_,f,start){
var this__8213 = this;
return cljs.core.ci_reduce.call(null,this__8213.a,f,start,this__8213.i);
});
G__8238 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8238__8239.call(this,_,f);
case  3 :
return G__8238__8240.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8238;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8218 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8219 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8249 = null;
var G__8249__8250 = (function (coll,n){
var this__8222 = this;
var i__8225 = (n + this__8222.i);

if(cljs.core.truth_((i__8225 < this__8222.a.length)))
{return (this__8222.a[i__8225]);
} else
{return null;
}
});
var G__8249__8251 = (function (coll,n,not_found){
var this__8226 = this;
var i__8227 = (n + this__8226.i);

if(cljs.core.truth_((i__8227 < this__8226.a.length)))
{return (this__8226.a[i__8227]);
} else
{return not_found;
}
});
G__8249 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8249__8250.call(this,coll,n);
case  3 :
return G__8249__8251.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8249;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8230 = this;
return (this__8230.a.length - this__8230.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8231 = this;
return (this__8231.a[this__8231.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8232 = this;
if(cljs.core.truth_(((this__8232.i + 1) < this__8232.a.length)))
{return (new cljs.core.IndexedSeq(this__8232.a,(this__8232.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8235 = this;
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
var G__8298 = null;
var G__8298__8299 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8298__8300 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8298 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8298__8299.call(this,array,f);
case  3 :
return G__8298__8300.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8298;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8303 = null;
var G__8303__8307 = (function (array,k){
return (array[k]);
});
var G__8303__8308 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8303 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8303__8307.call(this,array,k);
case  3 :
return G__8303__8308.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8303;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8312 = null;
var G__8312__8313 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8312__8314 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8312 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8312__8313.call(this,array,n);
case  3 :
return G__8312__8314.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8312;
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
var temp__3698__auto____8320 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8320))
{var s__8321 = temp__3698__auto____8320;

return cljs.core._first.call(null,s__8321);
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
var G__8322 = cljs.core.next.call(null,s);
s = G__8322;
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
var s__8326 = cljs.core.seq.call(null,x);
var n__8327 = 0;

while(true){
if(cljs.core.truth_(s__8326))
{{
var G__8330 = cljs.core.next.call(null,s__8326);
var G__8331 = (n__8327 + 1);
s__8326 = G__8330;
n__8327 = G__8331;
continue;
}
} else
{return n__8327;
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
var conj__8374 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8375 = (function() { 
var G__8377__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8378 = conj.call(null,coll,x);
var G__8379 = cljs.core.first.call(null,xs);
var G__8380 = cljs.core.next.call(null,xs);
coll = G__8378;
x = G__8379;
xs = G__8380;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8377 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8377__delegate.call(this, coll, x, xs);
};
G__8377.cljs$lang$maxFixedArity = 2;
G__8377.cljs$lang$applyTo = (function (arglist__8387){
var coll = cljs.core.first(arglist__8387);
var x = cljs.core.first(cljs.core.next(arglist__8387));
var xs = cljs.core.rest(cljs.core.next(arglist__8387));
return G__8377__delegate.call(this, coll, x, xs);
});
return G__8377;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8374.call(this,coll,x);
default:
return conj__8375.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8375.cljs$lang$applyTo;
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
var nth__8406 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8407 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8406.call(this,coll,n);
case  3 :
return nth__8407.call(this,coll,n,not_found);
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
var get__8409 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8410 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8409.call(this,o,k);
case  3 :
return get__8410.call(this,o,k,not_found);
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
var assoc__8415 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8416 = (function() { 
var G__8418__delegate = function (coll,k,v,kvs){
while(true){
var ret__8414 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8419 = ret__8414;
var G__8420 = cljs.core.first.call(null,kvs);
var G__8421 = cljs.core.second.call(null,kvs);
var G__8422 = cljs.core.nnext.call(null,kvs);
coll = G__8419;
k = G__8420;
v = G__8421;
kvs = G__8422;
continue;
}
} else
{return ret__8414;
}
break;
}
};
var G__8418 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8418__delegate.call(this, coll, k, v, kvs);
};
G__8418.cljs$lang$maxFixedArity = 3;
G__8418.cljs$lang$applyTo = (function (arglist__8423){
var coll = cljs.core.first(arglist__8423);
var k = cljs.core.first(cljs.core.next(arglist__8423));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8423)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8423)));
return G__8418__delegate.call(this, coll, k, v, kvs);
});
return G__8418;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8415.call(this,coll,k,v);
default:
return assoc__8416.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8416.cljs$lang$applyTo;
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
var dissoc__8427 = (function (coll){
return coll;
});
var dissoc__8428 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8429 = (function() { 
var G__8431__delegate = function (coll,k,ks){
while(true){
var ret__8425 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8432 = ret__8425;
var G__8433 = cljs.core.first.call(null,ks);
var G__8434 = cljs.core.next.call(null,ks);
coll = G__8432;
k = G__8433;
ks = G__8434;
continue;
}
} else
{return ret__8425;
}
break;
}
};
var G__8431 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8431__delegate.call(this, coll, k, ks);
};
G__8431.cljs$lang$maxFixedArity = 2;
G__8431.cljs$lang$applyTo = (function (arglist__8435){
var coll = cljs.core.first(arglist__8435);
var k = cljs.core.first(cljs.core.next(arglist__8435));
var ks = cljs.core.rest(cljs.core.next(arglist__8435));
return G__8431__delegate.call(this, coll, k, ks);
});
return G__8431;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8427.call(this,coll);
case  2 :
return dissoc__8428.call(this,coll,k);
default:
return dissoc__8429.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8429.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8436 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8437 = x__445__auto____8436;

if(cljs.core.truth_(and__3546__auto____8437))
{var and__3546__auto____8438 = x__445__auto____8436.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8438))
{return cljs.core.not.call(null,x__445__auto____8436.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8438;
}
} else
{return and__3546__auto____8437;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8436);
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
var disj__8522 = (function (coll){
return coll;
});
var disj__8523 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8524 = (function() { 
var G__8554__delegate = function (coll,k,ks){
while(true){
var ret__8511 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8555 = ret__8511;
var G__8556 = cljs.core.first.call(null,ks);
var G__8557 = cljs.core.next.call(null,ks);
coll = G__8555;
k = G__8556;
ks = G__8557;
continue;
}
} else
{return ret__8511;
}
break;
}
};
var G__8554 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8554__delegate.call(this, coll, k, ks);
};
G__8554.cljs$lang$maxFixedArity = 2;
G__8554.cljs$lang$applyTo = (function (arglist__8558){
var coll = cljs.core.first(arglist__8558);
var k = cljs.core.first(cljs.core.next(arglist__8558));
var ks = cljs.core.rest(cljs.core.next(arglist__8558));
return G__8554__delegate.call(this, coll, k, ks);
});
return G__8554;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8522.call(this,coll);
case  2 :
return disj__8523.call(this,coll,k);
default:
return disj__8524.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8524.cljs$lang$applyTo;
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
{var x__445__auto____8561 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8562 = x__445__auto____8561;

if(cljs.core.truth_(and__3546__auto____8562))
{var and__3546__auto____8564 = x__445__auto____8561.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8564))
{return cljs.core.not.call(null,x__445__auto____8561.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8564;
}
} else
{return and__3546__auto____8562;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8561);
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
{var x__445__auto____8585 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8586 = x__445__auto____8585;

if(cljs.core.truth_(and__3546__auto____8586))
{var and__3546__auto____8587 = x__445__auto____8585.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8587))
{return cljs.core.not.call(null,x__445__auto____8585.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8587;
}
} else
{return and__3546__auto____8586;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8585);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8590 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8591 = x__445__auto____8590;

if(cljs.core.truth_(and__3546__auto____8591))
{var and__3546__auto____8592 = x__445__auto____8590.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8592))
{return cljs.core.not.call(null,x__445__auto____8590.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8592;
}
} else
{return and__3546__auto____8591;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8590);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8594 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8597 = x__445__auto____8594;

if(cljs.core.truth_(and__3546__auto____8597))
{var and__3546__auto____8598 = x__445__auto____8594.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8598))
{return cljs.core.not.call(null,x__445__auto____8594.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8598;
}
} else
{return and__3546__auto____8597;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8594);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8601 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8602 = x__445__auto____8601;

if(cljs.core.truth_(and__3546__auto____8602))
{var and__3546__auto____8603 = x__445__auto____8601.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8603))
{return cljs.core.not.call(null,x__445__auto____8601.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8603;
}
} else
{return and__3546__auto____8602;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8601);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8608 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8612 = x__445__auto____8608;

if(cljs.core.truth_(and__3546__auto____8612))
{var and__3546__auto____8613 = x__445__auto____8608.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8613))
{return cljs.core.not.call(null,x__445__auto____8608.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8613;
}
} else
{return and__3546__auto____8612;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8608);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8620 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8622 = x__445__auto____8620;

if(cljs.core.truth_(and__3546__auto____8622))
{var and__3546__auto____8623 = x__445__auto____8620.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8623))
{return cljs.core.not.call(null,x__445__auto____8620.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8623;
}
} else
{return and__3546__auto____8622;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8620);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8683 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8683.push(key);
}));
return keys__8683;
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
{var x__445__auto____8711 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8712 = x__445__auto____8711;

if(cljs.core.truth_(and__3546__auto____8712))
{var and__3546__auto____8713 = x__445__auto____8711.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8713))
{return cljs.core.not.call(null,x__445__auto____8711.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8713;
}
} else
{return and__3546__auto____8712;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8711);
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
var and__3546__auto____8726 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8726))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8727 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8727))
{return or__3548__auto____8727;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8726;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8728 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8728))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8728;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8731 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8731))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8731;
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
var and__3546__auto____8737 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8737))
{return (n == n.toFixed());
} else
{return and__3546__auto____8737;
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
if(cljs.core.truth_((function (){var and__3546__auto____8793 = coll;

if(cljs.core.truth_(and__3546__auto____8793))
{var and__3546__auto____8795 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8795))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8795;
}
} else
{return and__3546__auto____8793;
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
var distinct_QMARK___8808 = (function (x){
return true;
});
var distinct_QMARK___8809 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8810 = (function() { 
var G__8818__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8801 = cljs.core.set([y,x]);
var xs__8802 = more;

while(true){
var x__8804 = cljs.core.first.call(null,xs__8802);
var etc__8805 = cljs.core.next.call(null,xs__8802);

if(cljs.core.truth_(xs__8802))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8801,x__8804)))
{return false;
} else
{{
var G__8827 = cljs.core.conj.call(null,s__8801,x__8804);
var G__8829 = etc__8805;
s__8801 = G__8827;
xs__8802 = G__8829;
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
var G__8818 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8818__delegate.call(this, x, y, more);
};
G__8818.cljs$lang$maxFixedArity = 2;
G__8818.cljs$lang$applyTo = (function (arglist__8832){
var x = cljs.core.first(arglist__8832);
var y = cljs.core.first(cljs.core.next(arglist__8832));
var more = cljs.core.rest(cljs.core.next(arglist__8832));
return G__8818__delegate.call(this, x, y, more);
});
return G__8818;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8808.call(this,x);
case  2 :
return distinct_QMARK___8809.call(this,x,y);
default:
return distinct_QMARK___8810.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8810.cljs$lang$applyTo;
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
var r__8836 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8836)))
{return r__8836;
} else
{if(cljs.core.truth_(r__8836))
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
var sort__8841 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8842 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8840 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8840,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8840);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8841.call(this,comp);
case  2 :
return sort__8842.call(this,comp,coll);
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
var sort_by__8852 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8853 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8852.call(this,keyfn,comp);
case  3 :
return sort_by__8853.call(this,keyfn,comp,coll);
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
var reduce__8894 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8895 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8894.call(this,f,val);
case  3 :
return reduce__8895.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8933 = (function (f,coll){
var temp__3695__auto____8900 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8900))
{var s__8903 = temp__3695__auto____8900;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8903),cljs.core.next.call(null,s__8903));
} else
{return f.call(null);
}
});
var seq_reduce__8934 = (function (f,val,coll){
var val__8927 = val;
var coll__8931 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8931))
{{
var G__9003 = f.call(null,val__8927,cljs.core.first.call(null,coll__8931));
var G__9004 = cljs.core.next.call(null,coll__8931);
val__8927 = G__9003;
coll__8931 = G__9004;
continue;
}
} else
{return val__8927;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8933.call(this,f,val);
case  3 :
return seq_reduce__8934.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9015 = null;
var G__9015__9017 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9015__9018 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9015 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9015__9017.call(this,coll,f);
case  3 :
return G__9015__9018.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9015;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9047 = (function (){
return 0;
});
var _PLUS___9048 = (function (x){
return x;
});
var _PLUS___9049 = (function (x,y){
return (x + y);
});
var _PLUS___9050 = (function() { 
var G__9056__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9056 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9056__delegate.call(this, x, y, more);
};
G__9056.cljs$lang$maxFixedArity = 2;
G__9056.cljs$lang$applyTo = (function (arglist__9057){
var x = cljs.core.first(arglist__9057);
var y = cljs.core.first(cljs.core.next(arglist__9057));
var more = cljs.core.rest(cljs.core.next(arglist__9057));
return G__9056__delegate.call(this, x, y, more);
});
return G__9056;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9047.call(this);
case  1 :
return _PLUS___9048.call(this,x);
case  2 :
return _PLUS___9049.call(this,x,y);
default:
return _PLUS___9050.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9050.cljs$lang$applyTo;
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
var ___9067 = (function (x){
return (- x);
});
var ___9068 = (function (x,y){
return (x - y);
});
var ___9069 = (function() { 
var G__9071__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9071 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9071__delegate.call(this, x, y, more);
};
G__9071.cljs$lang$maxFixedArity = 2;
G__9071.cljs$lang$applyTo = (function (arglist__9072){
var x = cljs.core.first(arglist__9072);
var y = cljs.core.first(cljs.core.next(arglist__9072));
var more = cljs.core.rest(cljs.core.next(arglist__9072));
return G__9071__delegate.call(this, x, y, more);
});
return G__9071;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9067.call(this,x);
case  2 :
return ___9068.call(this,x,y);
default:
return ___9069.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9069.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9073 = (function (){
return 1;
});
var _STAR___9074 = (function (x){
return x;
});
var _STAR___9075 = (function (x,y){
return (x * y);
});
var _STAR___9076 = (function() { 
var G__9079__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9079 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9079__delegate.call(this, x, y, more);
};
G__9079.cljs$lang$maxFixedArity = 2;
G__9079.cljs$lang$applyTo = (function (arglist__9082){
var x = cljs.core.first(arglist__9082);
var y = cljs.core.first(cljs.core.next(arglist__9082));
var more = cljs.core.rest(cljs.core.next(arglist__9082));
return G__9079__delegate.call(this, x, y, more);
});
return G__9079;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9073.call(this);
case  1 :
return _STAR___9074.call(this,x);
case  2 :
return _STAR___9075.call(this,x,y);
default:
return _STAR___9076.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9076.cljs$lang$applyTo;
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
var _SLASH___9083 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9084 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9085 = (function() { 
var G__9090__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9090 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9090__delegate.call(this, x, y, more);
};
G__9090.cljs$lang$maxFixedArity = 2;
G__9090.cljs$lang$applyTo = (function (arglist__9091){
var x = cljs.core.first(arglist__9091);
var y = cljs.core.first(cljs.core.next(arglist__9091));
var more = cljs.core.rest(cljs.core.next(arglist__9091));
return G__9090__delegate.call(this, x, y, more);
});
return G__9090;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9083.call(this,x);
case  2 :
return _SLASH___9084.call(this,x,y);
default:
return _SLASH___9085.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9085.cljs$lang$applyTo;
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
var _LT___9176 = (function (x){
return true;
});
var _LT___9177 = (function (x,y){
return (x < y);
});
var _LT___9178 = (function() { 
var G__9184__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
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
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__9184 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9184__delegate.call(this, x, y, more);
};
G__9184.cljs$lang$maxFixedArity = 2;
G__9184.cljs$lang$applyTo = (function (arglist__9193){
var x = cljs.core.first(arglist__9193);
var y = cljs.core.first(cljs.core.next(arglist__9193));
var more = cljs.core.rest(cljs.core.next(arglist__9193));
return G__9184__delegate.call(this, x, y, more);
});
return G__9184;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9176.call(this,x);
case  2 :
return _LT___9177.call(this,x,y);
default:
return _LT___9178.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9178.cljs$lang$applyTo;
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
var _LT__EQ___9200 = (function (x){
return true;
});
var _LT__EQ___9201 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9202 = (function() { 
var G__9206__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9208 = y;
var G__9209 = cljs.core.first.call(null,more);
var G__9210 = cljs.core.next.call(null,more);
x = G__9208;
y = G__9209;
more = G__9210;
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
var G__9206 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9206__delegate.call(this, x, y, more);
};
G__9206.cljs$lang$maxFixedArity = 2;
G__9206.cljs$lang$applyTo = (function (arglist__9211){
var x = cljs.core.first(arglist__9211);
var y = cljs.core.first(cljs.core.next(arglist__9211));
var more = cljs.core.rest(cljs.core.next(arglist__9211));
return G__9206__delegate.call(this, x, y, more);
});
return G__9206;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9200.call(this,x);
case  2 :
return _LT__EQ___9201.call(this,x,y);
default:
return _LT__EQ___9202.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9202.cljs$lang$applyTo;
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
var _GT___9220 = (function (x){
return true;
});
var _GT___9221 = (function (x,y){
return (x > y);
});
var _GT___9223 = (function() { 
var G__9227__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9228 = y;
var G__9231 = cljs.core.first.call(null,more);
var G__9232 = cljs.core.next.call(null,more);
x = G__9228;
y = G__9231;
more = G__9232;
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
var G__9227 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9227__delegate.call(this, x, y, more);
};
G__9227.cljs$lang$maxFixedArity = 2;
G__9227.cljs$lang$applyTo = (function (arglist__9233){
var x = cljs.core.first(arglist__9233);
var y = cljs.core.first(cljs.core.next(arglist__9233));
var more = cljs.core.rest(cljs.core.next(arglist__9233));
return G__9227__delegate.call(this, x, y, more);
});
return G__9227;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9220.call(this,x);
case  2 :
return _GT___9221.call(this,x,y);
default:
return _GT___9223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9223.cljs$lang$applyTo;
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
var _GT__EQ___9234 = (function (x){
return true;
});
var _GT__EQ___9235 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9236 = (function() { 
var G__9239__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9241 = y;
var G__9242 = cljs.core.first.call(null,more);
var G__9243 = cljs.core.next.call(null,more);
x = G__9241;
y = G__9242;
more = G__9243;
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
var G__9239 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9239__delegate.call(this, x, y, more);
};
G__9239.cljs$lang$maxFixedArity = 2;
G__9239.cljs$lang$applyTo = (function (arglist__9252){
var x = cljs.core.first(arglist__9252);
var y = cljs.core.first(cljs.core.next(arglist__9252));
var more = cljs.core.rest(cljs.core.next(arglist__9252));
return G__9239__delegate.call(this, x, y, more);
});
return G__9239;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9234.call(this,x);
case  2 :
return _GT__EQ___9235.call(this,x,y);
default:
return _GT__EQ___9236.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9236.cljs$lang$applyTo;
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
var max__9262 = (function (x){
return x;
});
var max__9263 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9264 = (function() { 
var G__9267__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9267 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9267__delegate.call(this, x, y, more);
};
G__9267.cljs$lang$maxFixedArity = 2;
G__9267.cljs$lang$applyTo = (function (arglist__9268){
var x = cljs.core.first(arglist__9268);
var y = cljs.core.first(cljs.core.next(arglist__9268));
var more = cljs.core.rest(cljs.core.next(arglist__9268));
return G__9267__delegate.call(this, x, y, more);
});
return G__9267;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9262.call(this,x);
case  2 :
return max__9263.call(this,x,y);
default:
return max__9264.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9264.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9277 = (function (x){
return x;
});
var min__9278 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9279 = (function() { 
var G__9281__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9281 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9281__delegate.call(this, x, y, more);
};
G__9281.cljs$lang$maxFixedArity = 2;
G__9281.cljs$lang$applyTo = (function (arglist__9282){
var x = cljs.core.first(arglist__9282);
var y = cljs.core.first(cljs.core.next(arglist__9282));
var more = cljs.core.rest(cljs.core.next(arglist__9282));
return G__9281__delegate.call(this, x, y, more);
});
return G__9281;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9277.call(this,x);
case  2 :
return min__9278.call(this,x,y);
default:
return min__9279.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9279.cljs$lang$applyTo;
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
var rem__9287 = (n % d);

return cljs.core.fix.call(null,((n - rem__9287) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9291 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9291));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9292 = (function (){
return Math.random.call(null);
});
var rand__9293 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9292.call(this);
case  1 :
return rand__9293.call(this,n);
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
var _EQ__EQ___9444 = (function (x){
return true;
});
var _EQ__EQ___9445 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9446 = (function() { 
var G__9448__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9449 = y;
var G__9450 = cljs.core.first.call(null,more);
var G__9451 = cljs.core.next.call(null,more);
x = G__9449;
y = G__9450;
more = G__9451;
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
var G__9448 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9448__delegate.call(this, x, y, more);
};
G__9448.cljs$lang$maxFixedArity = 2;
G__9448.cljs$lang$applyTo = (function (arglist__9452){
var x = cljs.core.first(arglist__9452);
var y = cljs.core.first(cljs.core.next(arglist__9452));
var more = cljs.core.rest(cljs.core.next(arglist__9452));
return G__9448__delegate.call(this, x, y, more);
});
return G__9448;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9444.call(this,x);
case  2 :
return _EQ__EQ___9445.call(this,x,y);
default:
return _EQ__EQ___9446.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9446.cljs$lang$applyTo;
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
var n__9455 = n;
var xs__9456 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9457 = xs__9456;

if(cljs.core.truth_(and__3546__auto____9457))
{return (n__9455 > 0);
} else
{return and__3546__auto____9457;
}
})()))
{{
var G__9461 = (n__9455 - 1);
var G__9462 = cljs.core.next.call(null,xs__9456);
n__9455 = G__9461;
xs__9456 = G__9462;
continue;
}
} else
{return xs__9456;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9473 = null;
var G__9473__9474 = (function (coll,n){
var temp__3695__auto____9466 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9466))
{var xs__9467 = temp__3695__auto____9466;

return cljs.core.first.call(null,xs__9467);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9473__9475 = (function (coll,n,not_found){
var temp__3695__auto____9468 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9468))
{var xs__9469 = temp__3695__auto____9468;

return cljs.core.first.call(null,xs__9469);
} else
{return not_found;
}
});
G__9473 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9473__9474.call(this,coll,n);
case  3 :
return G__9473__9475.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9473;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9484 = (function (){
return "";
});
var str_STAR___9485 = (function (x){
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
var str_STAR___9486 = (function() { 
var G__9488__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9489 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9490 = cljs.core.next.call(null,more);
sb = G__9489;
more = G__9490;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9488 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9488__delegate.call(this, x, ys);
};
G__9488.cljs$lang$maxFixedArity = 1;
G__9488.cljs$lang$applyTo = (function (arglist__9491){
var x = cljs.core.first(arglist__9491);
var ys = cljs.core.rest(arglist__9491);
return G__9488__delegate.call(this, x, ys);
});
return G__9488;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9484.call(this);
case  1 :
return str_STAR___9485.call(this,x);
default:
return str_STAR___9486.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9486.cljs$lang$applyTo;
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
var str__9569 = (function (){
return "";
});
var str__9570 = (function (x){
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
var str__9571 = (function() { 
var G__9576__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9576 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9576__delegate.call(this, x, ys);
};
G__9576.cljs$lang$maxFixedArity = 1;
G__9576.cljs$lang$applyTo = (function (arglist__9580){
var x = cljs.core.first(arglist__9580);
var ys = cljs.core.rest(arglist__9580);
return G__9576__delegate.call(this, x, ys);
});
return G__9576;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9569.call(this);
case  1 :
return str__9570.call(this,x);
default:
return str__9571.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9571.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9587 = (function (s,start){
return s.substring(start);
});
var subs__9588 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9587.call(this,s,start);
case  3 :
return subs__9588.call(this,s,start,end);
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
var symbol__9602 = (function (name){
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
var symbol__9603 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9602.call(this,ns);
case  2 :
return symbol__9603.call(this,ns,name);
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
var keyword__9615 = (function (name){
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
var keyword__9616 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9615.call(this,ns);
case  2 :
return keyword__9616.call(this,ns,name);
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
var ys__9651 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9650)))
{return cljs.core.nil_QMARK_.call(null,ys__9651);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9651)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9650),cljs.core.first.call(null,ys__9651))))
{{
var G__9658 = cljs.core.next.call(null,xs__9650);
var G__9659 = cljs.core.next.call(null,ys__9651);
xs__9650 = G__9658;
ys__9651 = G__9659;
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
return cljs.core.reduce.call(null,(function (p1__9660_SHARP_,p2__9661_SHARP_){
return cljs.core.hash_combine.call(null,p1__9660_SHARP_,cljs.core.hash.call(null,p2__9661_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9680__9681 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9680__9681))
{var G__9683__9685 = cljs.core.first.call(null,G__9680__9681);
var vec__9684__9686 = G__9683__9685;
var key_name__9687 = cljs.core.nth.call(null,vec__9684__9686,0,null);
var f__9689 = cljs.core.nth.call(null,vec__9684__9686,1,null);
var G__9680__9691 = G__9680__9681;

var G__9683__9692 = G__9683__9685;
var G__9680__9693 = G__9680__9691;

while(true){
var vec__9694__9695 = G__9683__9692;
var key_name__9696 = cljs.core.nth.call(null,vec__9694__9695,0,null);
var f__9697 = cljs.core.nth.call(null,vec__9694__9695,1,null);
var G__9680__9698 = G__9680__9693;

var str_name__9699 = cljs.core.name.call(null,key_name__9696);

obj[str_name__9699] = f__9697;
var temp__3698__auto____9700 = cljs.core.next.call(null,G__9680__9698);

if(cljs.core.truth_(temp__3698__auto____9700))
{var G__9680__9739 = temp__3698__auto____9700;

{
var G__9747 = cljs.core.first.call(null,G__9680__9739);
var G__9748 = G__9680__9739;
G__9683__9692 = G__9747;
G__9680__9693 = G__9748;
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
var this__9754 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9755 = this;
return (new cljs.core.List(this__9755.meta,o,coll,(this__9755.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9756 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9758 = this;
return this__9758.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9760 = this;
return this__9760.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9762 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9764 = this;
return this__9764.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9767 = this;
return this__9767.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9771 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9773 = this;
return (new cljs.core.List(meta,this__9773.first,this__9773.rest,this__9773.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9775 = this;
return this__9775.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9782 = this;
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
var this__9794 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9796 = this;
return (new cljs.core.List(this__9796.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9798 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9800 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9802 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9804 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9805 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9806 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9807 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9808 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9809 = this;
return this__9809.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9814 = this;
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
list.cljs$lang$applyTo = (function (arglist__9822){
var items = cljs.core.seq( arglist__9822 );;
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
var this__9831 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9833 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9835 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9836 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9836.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9837 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9838 = this;
return this__9838.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9839 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9839.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9839.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9840 = this;
return this__9840.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9841 = this;
return (new cljs.core.Cons(meta,this__9841.first,this__9841.rest));
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
var G__9883 = null;
var G__9883__9884 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9883__9885 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9883 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9883__9884.call(this,string,f);
case  3 :
return G__9883__9885.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9883;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9887 = null;
var G__9887__9888 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9887__9889 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9887 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9887__9888.call(this,string,k);
case  3 :
return G__9887__9889.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9887;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9894 = null;
var G__9894__9895 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9894__9896 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9894 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9894__9895.call(this,string,n);
case  3 :
return G__9894__9896.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9894;
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
var G__9978 = null;
var G__9978__9980 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9978__9981 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9978 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9978__9980.call(this,this$,coll);
case  3 :
return G__9978__9981.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9978;
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
var x__10008 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10008;
} else
{lazy_seq.x = x__10008.call(null);
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
var this__10013 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10014 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10016 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10020 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10020.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10040 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10041 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10042 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10043 = this;
return this__10043.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10044 = this;
return (new cljs.core.LazySeq(meta,this__10044.realized,this__10044.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10045 = cljs.core.array.call(null);

var s__10048 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10048)))
{ary__10045.push(cljs.core.first.call(null,s__10048));
{
var G__10055 = cljs.core.next.call(null,s__10048);
s__10048 = G__10055;
continue;
}
} else
{return ary__10045;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10061 = s;
var i__10062 = n;
var sum__10063 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10064 = (i__10062 > 0);

if(cljs.core.truth_(and__3546__auto____10064))
{return cljs.core.seq.call(null,s__10061);
} else
{return and__3546__auto____10064;
}
})()))
{{
var G__10065 = cljs.core.next.call(null,s__10061);
var G__10066 = (i__10062 - 1);
var G__10067 = (sum__10063 + 1);
s__10061 = G__10065;
i__10062 = G__10066;
sum__10063 = G__10067;
continue;
}
} else
{return sum__10063;
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
var concat__10245 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10246 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10247 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10213 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10213))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10213),concat.call(null,cljs.core.rest.call(null,s__10213),y));
} else
{return y;
}
})));
});
var concat__10248 = (function() { 
var G__10264__delegate = function (x,y,zs){
var cat__10242 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10241 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10241))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10241),cat.call(null,cljs.core.rest.call(null,xys__10241),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10242.call(null,concat.call(null,x,y),zs);
};
var G__10264 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10264__delegate.call(this, x, y, zs);
};
G__10264.cljs$lang$maxFixedArity = 2;
G__10264.cljs$lang$applyTo = (function (arglist__10274){
var x = cljs.core.first(arglist__10274);
var y = cljs.core.first(cljs.core.next(arglist__10274));
var zs = cljs.core.rest(cljs.core.next(arglist__10274));
return G__10264__delegate.call(this, x, y, zs);
});
return G__10264;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10245.call(this);
case  1 :
return concat__10246.call(this,x);
case  2 :
return concat__10247.call(this,x,y);
default:
return concat__10248.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10248.cljs$lang$applyTo;
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
var list_STAR___10302 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10303 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10304 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10306 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10307 = (function() { 
var G__10311__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10311 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10311__delegate.call(this, a, b, c, d, more);
};
G__10311.cljs$lang$maxFixedArity = 4;
G__10311.cljs$lang$applyTo = (function (arglist__10318){
var a = cljs.core.first(arglist__10318);
var b = cljs.core.first(cljs.core.next(arglist__10318));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10318)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10318))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10318))));
return G__10311__delegate.call(this, a, b, c, d, more);
});
return G__10311;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10302.call(this,a);
case  2 :
return list_STAR___10303.call(this,a,b);
case  3 :
return list_STAR___10304.call(this,a,b,c);
case  4 :
return list_STAR___10306.call(this,a,b,c,d);
default:
return list_STAR___10307.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10307.cljs$lang$applyTo;
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
var apply__10344 = (function (f,args){
var fixed_arity__10319 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10319 + 1)) <= fixed_arity__10319)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10345 = (function (f,x,args){
var arglist__10322 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10326 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10322,fixed_arity__10326) <= fixed_arity__10326)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10322));
} else
{return f.cljs$lang$applyTo(arglist__10322);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10322));
}
});
var apply__10346 = (function (f,x,y,args){
var arglist__10329 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10330 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10329,fixed_arity__10330) <= fixed_arity__10330)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10329));
} else
{return f.cljs$lang$applyTo(arglist__10329);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10329));
}
});
var apply__10347 = (function (f,x,y,z,args){
var arglist__10332 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10333 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10332,fixed_arity__10333) <= fixed_arity__10333)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10332));
} else
{return f.cljs$lang$applyTo(arglist__10332);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10332));
}
});
var apply__10348 = (function() { 
var G__10353__delegate = function (f,a,b,c,d,args){
var arglist__10339 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10340 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10339,fixed_arity__10340) <= fixed_arity__10340)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10339));
} else
{return f.cljs$lang$applyTo(arglist__10339);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10339));
}
};
var G__10353 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10353__delegate.call(this, f, a, b, c, d, args);
};
G__10353.cljs$lang$maxFixedArity = 5;
G__10353.cljs$lang$applyTo = (function (arglist__10354){
var f = cljs.core.first(arglist__10354);
var a = cljs.core.first(cljs.core.next(arglist__10354));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10354)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10354))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10354)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10354)))));
return G__10353__delegate.call(this, f, a, b, c, d, args);
});
return G__10353;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10344.call(this,f,a);
case  3 :
return apply__10345.call(this,f,a,b);
case  4 :
return apply__10346.call(this,f,a,b,c);
case  5 :
return apply__10347.call(this,f,a,b,c,d);
default:
return apply__10348.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10348.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10422){
var obj = cljs.core.first(arglist__10422);
var f = cljs.core.first(cljs.core.next(arglist__10422));
var args = cljs.core.rest(cljs.core.next(arglist__10422));
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
var not_EQ___10427 = (function (x){
return false;
});
var not_EQ___10428 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10429 = (function() { 
var G__10431__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10431 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10431__delegate.call(this, x, y, more);
};
G__10431.cljs$lang$maxFixedArity = 2;
G__10431.cljs$lang$applyTo = (function (arglist__10432){
var x = cljs.core.first(arglist__10432);
var y = cljs.core.first(cljs.core.next(arglist__10432));
var more = cljs.core.rest(cljs.core.next(arglist__10432));
return G__10431__delegate.call(this, x, y, more);
});
return G__10431;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10427.call(this,x);
case  2 :
return not_EQ___10428.call(this,x,y);
default:
return not_EQ___10429.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10429.cljs$lang$applyTo;
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
var G__10469 = pred;
var G__10470 = cljs.core.next.call(null,coll);
pred = G__10469;
coll = G__10470;
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
{var or__3548__auto____10471 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10471))
{return or__3548__auto____10471;
} else
{{
var G__10510 = pred;
var G__10511 = cljs.core.next.call(null,coll);
pred = G__10510;
coll = G__10511;
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
var G__10623 = null;
var G__10623__10624 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10623__10625 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10623__10626 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10623__10627 = (function() { 
var G__10632__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10632 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10632__delegate.call(this, x, y, zs);
};
G__10632.cljs$lang$maxFixedArity = 2;
G__10632.cljs$lang$applyTo = (function (arglist__10634){
var x = cljs.core.first(arglist__10634);
var y = cljs.core.first(cljs.core.next(arglist__10634));
var zs = cljs.core.rest(cljs.core.next(arglist__10634));
return G__10632__delegate.call(this, x, y, zs);
});
return G__10632;
})()
;
G__10623 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10623__10624.call(this);
case  1 :
return G__10623__10625.call(this,x);
case  2 :
return G__10623__10626.call(this,x,y);
default:
return G__10623__10627.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10623.cljs$lang$maxFixedArity = 2;
G__10623.cljs$lang$applyTo = G__10623__10627.cljs$lang$applyTo;
return G__10623;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10643__delegate = function (args){
return x;
};
var G__10643 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10643__delegate.call(this, args);
};
G__10643.cljs$lang$maxFixedArity = 0;
G__10643.cljs$lang$applyTo = (function (arglist__10644){
var args = cljs.core.seq( arglist__10644 );;
return G__10643__delegate.call(this, args);
});
return G__10643;
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
var comp__10671 = (function (){
return cljs.core.identity;
});
var comp__10672 = (function (f){
return f;
});
var comp__10673 = (function (f,g){
return (function() {
var G__10678 = null;
var G__10678__10679 = (function (){
return f.call(null,g.call(null));
});
var G__10678__10680 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10678__10681 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10678__10682 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10678__10683 = (function() { 
var G__10687__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10687 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10687__delegate.call(this, x, y, z, args);
};
G__10687.cljs$lang$maxFixedArity = 3;
G__10687.cljs$lang$applyTo = (function (arglist__10688){
var x = cljs.core.first(arglist__10688);
var y = cljs.core.first(cljs.core.next(arglist__10688));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10688)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10688)));
return G__10687__delegate.call(this, x, y, z, args);
});
return G__10687;
})()
;
G__10678 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10678__10679.call(this);
case  1 :
return G__10678__10680.call(this,x);
case  2 :
return G__10678__10681.call(this,x,y);
case  3 :
return G__10678__10682.call(this,x,y,z);
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
var comp__10675 = (function (f,g,h){
return (function() {
var G__10689 = null;
var G__10689__10690 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10689__10691 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10689__10692 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10689__10693 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10689__10694 = (function() { 
var G__10696__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10696 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10696__delegate.call(this, x, y, z, args);
};
G__10696.cljs$lang$maxFixedArity = 3;
G__10696.cljs$lang$applyTo = (function (arglist__10701){
var x = cljs.core.first(arglist__10701);
var y = cljs.core.first(cljs.core.next(arglist__10701));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10701)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10701)));
return G__10696__delegate.call(this, x, y, z, args);
});
return G__10696;
})()
;
G__10689 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10689__10690.call(this);
case  1 :
return G__10689__10691.call(this,x);
case  2 :
return G__10689__10692.call(this,x,y);
case  3 :
return G__10689__10693.call(this,x,y,z);
default:
return G__10689__10694.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10689.cljs$lang$maxFixedArity = 3;
G__10689.cljs$lang$applyTo = G__10689__10694.cljs$lang$applyTo;
return G__10689;
})()
});
var comp__10676 = (function() { 
var G__10710__delegate = function (f1,f2,f3,fs){
var fs__10662 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10712__delegate = function (args){
var ret__10665 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10662),args);
var fs__10667 = cljs.core.next.call(null,fs__10662);

while(true){
if(cljs.core.truth_(fs__10667))
{{
var G__10714 = cljs.core.first.call(null,fs__10667).call(null,ret__10665);
var G__10715 = cljs.core.next.call(null,fs__10667);
ret__10665 = G__10714;
fs__10667 = G__10715;
continue;
}
} else
{return ret__10665;
}
break;
}
};
var G__10712 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10712__delegate.call(this, args);
};
G__10712.cljs$lang$maxFixedArity = 0;
G__10712.cljs$lang$applyTo = (function (arglist__10718){
var args = cljs.core.seq( arglist__10718 );;
return G__10712__delegate.call(this, args);
});
return G__10712;
})()
;
};
var G__10710 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10710__delegate.call(this, f1, f2, f3, fs);
};
G__10710.cljs$lang$maxFixedArity = 3;
G__10710.cljs$lang$applyTo = (function (arglist__10719){
var f1 = cljs.core.first(arglist__10719);
var f2 = cljs.core.first(cljs.core.next(arglist__10719));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10719)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10719)));
return G__10710__delegate.call(this, f1, f2, f3, fs);
});
return G__10710;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10671.call(this);
case  1 :
return comp__10672.call(this,f1);
case  2 :
return comp__10673.call(this,f1,f2);
case  3 :
return comp__10675.call(this,f1,f2,f3);
default:
return comp__10676.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10676.cljs$lang$applyTo;
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
var partial__10739 = (function (f,arg1){
return (function() { 
var G__10750__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10750 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10750__delegate.call(this, args);
};
G__10750.cljs$lang$maxFixedArity = 0;
G__10750.cljs$lang$applyTo = (function (arglist__10752){
var args = cljs.core.seq( arglist__10752 );;
return G__10750__delegate.call(this, args);
});
return G__10750;
})()
;
});
var partial__10740 = (function (f,arg1,arg2){
return (function() { 
var G__10753__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10753 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10753__delegate.call(this, args);
};
G__10753.cljs$lang$maxFixedArity = 0;
G__10753.cljs$lang$applyTo = (function (arglist__10756){
var args = cljs.core.seq( arglist__10756 );;
return G__10753__delegate.call(this, args);
});
return G__10753;
})()
;
});
var partial__10741 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10780__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10780 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10780__delegate.call(this, args);
};
G__10780.cljs$lang$maxFixedArity = 0;
G__10780.cljs$lang$applyTo = (function (arglist__10782){
var args = cljs.core.seq( arglist__10782 );;
return G__10780__delegate.call(this, args);
});
return G__10780;
})()
;
});
var partial__10742 = (function() { 
var G__10785__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10787__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10787 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10787__delegate.call(this, args);
};
G__10787.cljs$lang$maxFixedArity = 0;
G__10787.cljs$lang$applyTo = (function (arglist__10792){
var args = cljs.core.seq( arglist__10792 );;
return G__10787__delegate.call(this, args);
});
return G__10787;
})()
;
};
var G__10785 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10785__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10785.cljs$lang$maxFixedArity = 4;
G__10785.cljs$lang$applyTo = (function (arglist__10795){
var f = cljs.core.first(arglist__10795);
var arg1 = cljs.core.first(cljs.core.next(arglist__10795));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10795)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10795))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10795))));
return G__10785__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10785;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10739.call(this,f,arg1);
case  3 :
return partial__10740.call(this,f,arg1,arg2);
case  4 :
return partial__10741.call(this,f,arg1,arg2,arg3);
default:
return partial__10742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10742.cljs$lang$applyTo;
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
var fnil__10925 = (function (f,x){
return (function() {
var G__10934 = null;
var G__10934__10936 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10934__10937 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10934__10938 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10934__10939 = (function() { 
var G__10950__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10950 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10950__delegate.call(this, a, b, c, ds);
};
G__10950.cljs$lang$maxFixedArity = 3;
G__10950.cljs$lang$applyTo = (function (arglist__10956){
var a = cljs.core.first(arglist__10956);
var b = cljs.core.first(cljs.core.next(arglist__10956));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10956)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10956)));
return G__10950__delegate.call(this, a, b, c, ds);
});
return G__10950;
})()
;
G__10934 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10934__10936.call(this,a);
case  2 :
return G__10934__10937.call(this,a,b);
case  3 :
return G__10934__10938.call(this,a,b,c);
default:
return G__10934__10939.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10934.cljs$lang$maxFixedArity = 3;
G__10934.cljs$lang$applyTo = G__10934__10939.cljs$lang$applyTo;
return G__10934;
})()
});
var fnil__10927 = (function (f,x,y){
return (function() {
var G__10957 = null;
var G__10957__10958 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10957__10959 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10957__10960 = (function() { 
var G__10962__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10962 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10962__delegate.call(this, a, b, c, ds);
};
G__10962.cljs$lang$maxFixedArity = 3;
G__10962.cljs$lang$applyTo = (function (arglist__10964){
var a = cljs.core.first(arglist__10964);
var b = cljs.core.first(cljs.core.next(arglist__10964));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10964)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10964)));
return G__10962__delegate.call(this, a, b, c, ds);
});
return G__10962;
})()
;
G__10957 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10957__10958.call(this,a,b);
case  3 :
return G__10957__10959.call(this,a,b,c);
default:
return G__10957__10960.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10957.cljs$lang$maxFixedArity = 3;
G__10957.cljs$lang$applyTo = G__10957__10960.cljs$lang$applyTo;
return G__10957;
})()
});
var fnil__10928 = (function (f,x,y,z){
return (function() {
var G__10966 = null;
var G__10966__10967 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10966__10968 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10966__10969 = (function() { 
var G__10979__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10979 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10979__delegate.call(this, a, b, c, ds);
};
G__10979.cljs$lang$maxFixedArity = 3;
G__10979.cljs$lang$applyTo = (function (arglist__10982){
var a = cljs.core.first(arglist__10982);
var b = cljs.core.first(cljs.core.next(arglist__10982));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10982)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10982)));
return G__10979__delegate.call(this, a, b, c, ds);
});
return G__10979;
})()
;
G__10966 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10966__10967.call(this,a,b);
case  3 :
return G__10966__10968.call(this,a,b,c);
default:
return G__10966__10969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10966.cljs$lang$maxFixedArity = 3;
G__10966.cljs$lang$applyTo = G__10966__10969.cljs$lang$applyTo;
return G__10966;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10925.call(this,f,x);
case  3 :
return fnil__10927.call(this,f,x,y);
case  4 :
return fnil__10928.call(this,f,x,y,z);
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
var mapi__10986 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10983 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10983))
{var s__10984 = temp__3698__auto____10983;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10984)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10984)));
} else
{return null;
}
})));
});

return mapi__10986.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10995 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10995))
{var s__10996 = temp__3698__auto____10995;

var x__11001 = f.call(null,cljs.core.first.call(null,s__10996));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11001)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10996));
} else
{return cljs.core.cons.call(null,x__11001,keep.call(null,f,cljs.core.rest.call(null,s__10996)));
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
var keepi__11094 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11085 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11085))
{var s__11086 = temp__3698__auto____11085;

var x__11087 = f.call(null,idx,cljs.core.first.call(null,s__11086));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11087)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11086));
} else
{return cljs.core.cons.call(null,x__11087,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11086)));
}
} else
{return null;
}
})));
});

return keepi__11094.call(null,0,coll);
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
var every_pred__11419 = (function (p){
return (function() {
var ep1 = null;
var ep1__11425 = (function (){
return true;
});
var ep1__11426 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11427 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11220 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11220))
{return p.call(null,y);
} else
{return and__3546__auto____11220;
}
})());
});
var ep1__11428 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11279 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11279))
{var and__3546__auto____11283 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11283))
{return p.call(null,z);
} else
{return and__3546__auto____11283;
}
} else
{return and__3546__auto____11279;
}
})());
});
var ep1__11429 = (function() { 
var G__11435__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11288 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11288))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11288;
}
})());
};
var G__11435 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11435__delegate.call(this, x, y, z, args);
};
G__11435.cljs$lang$maxFixedArity = 3;
G__11435.cljs$lang$applyTo = (function (arglist__11437){
var x = cljs.core.first(arglist__11437);
var y = cljs.core.first(cljs.core.next(arglist__11437));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11437)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11437)));
return G__11435__delegate.call(this, x, y, z, args);
});
return G__11435;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11425.call(this);
case  1 :
return ep1__11426.call(this,x);
case  2 :
return ep1__11427.call(this,x,y);
case  3 :
return ep1__11428.call(this,x,y,z);
default:
return ep1__11429.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11429.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11420 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11442 = (function (){
return true;
});
var ep2__11443 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11296 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11296))
{return p2.call(null,x);
} else
{return and__3546__auto____11296;
}
})());
});
var ep2__11444 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11297 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11297))
{var and__3546__auto____11299 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11299))
{var and__3546__auto____11301 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11301))
{return p2.call(null,y);
} else
{return and__3546__auto____11301;
}
} else
{return and__3546__auto____11299;
}
} else
{return and__3546__auto____11297;
}
})());
});
var ep2__11445 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11305 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11305))
{var and__3546__auto____11307 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11307))
{var and__3546__auto____11367 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11367))
{var and__3546__auto____11369 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11369))
{var and__3546__auto____11370 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11370))
{return p2.call(null,z);
} else
{return and__3546__auto____11370;
}
} else
{return and__3546__auto____11369;
}
} else
{return and__3546__auto____11367;
}
} else
{return and__3546__auto____11307;
}
} else
{return and__3546__auto____11305;
}
})());
});
var ep2__11446 = (function() { 
var G__11469__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11372 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11372))
{return cljs.core.every_QMARK_.call(null,(function (p1__11072_SHARP_){
var and__3546__auto____11373 = p1.call(null,p1__11072_SHARP_);

if(cljs.core.truth_(and__3546__auto____11373))
{return p2.call(null,p1__11072_SHARP_);
} else
{return and__3546__auto____11373;
}
}),args);
} else
{return and__3546__auto____11372;
}
})());
};
var G__11469 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11469__delegate.call(this, x, y, z, args);
};
G__11469.cljs$lang$maxFixedArity = 3;
G__11469.cljs$lang$applyTo = (function (arglist__11472){
var x = cljs.core.first(arglist__11472);
var y = cljs.core.first(cljs.core.next(arglist__11472));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11472)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11472)));
return G__11469__delegate.call(this, x, y, z, args);
});
return G__11469;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11442.call(this);
case  1 :
return ep2__11443.call(this,x);
case  2 :
return ep2__11444.call(this,x,y);
case  3 :
return ep2__11445.call(this,x,y,z);
default:
return ep2__11446.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11446.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11421 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11479 = (function (){
return true;
});
var ep3__11480 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11380 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11380))
{var and__3546__auto____11381 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11381))
{return p3.call(null,x);
} else
{return and__3546__auto____11381;
}
} else
{return and__3546__auto____11380;
}
})());
});
var ep3__11481 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11382 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11382))
{var and__3546__auto____11383 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11383))
{var and__3546__auto____11384 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11384))
{var and__3546__auto____11385 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11385))
{var and__3546__auto____11386 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11386))
{return p3.call(null,y);
} else
{return and__3546__auto____11386;
}
} else
{return and__3546__auto____11385;
}
} else
{return and__3546__auto____11384;
}
} else
{return and__3546__auto____11383;
}
} else
{return and__3546__auto____11382;
}
})());
});
var ep3__11482 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11388 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11388))
{var and__3546__auto____11389 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11389))
{var and__3546__auto____11390 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11390))
{var and__3546__auto____11392 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11392))
{var and__3546__auto____11393 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11393))
{var and__3546__auto____11395 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11395))
{var and__3546__auto____11396 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11396))
{var and__3546__auto____11403 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11403))
{return p3.call(null,z);
} else
{return and__3546__auto____11403;
}
} else
{return and__3546__auto____11396;
}
} else
{return and__3546__auto____11395;
}
} else
{return and__3546__auto____11393;
}
} else
{return and__3546__auto____11392;
}
} else
{return and__3546__auto____11390;
}
} else
{return and__3546__auto____11389;
}
} else
{return and__3546__auto____11388;
}
})());
});
var ep3__11483 = (function() { 
var G__11489__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11404 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11404))
{return cljs.core.every_QMARK_.call(null,(function (p1__11073_SHARP_){
var and__3546__auto____11405 = p1.call(null,p1__11073_SHARP_);

if(cljs.core.truth_(and__3546__auto____11405))
{var and__3546__auto____11407 = p2.call(null,p1__11073_SHARP_);

if(cljs.core.truth_(and__3546__auto____11407))
{return p3.call(null,p1__11073_SHARP_);
} else
{return and__3546__auto____11407;
}
} else
{return and__3546__auto____11405;
}
}),args);
} else
{return and__3546__auto____11404;
}
})());
};
var G__11489 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11489__delegate.call(this, x, y, z, args);
};
G__11489.cljs$lang$maxFixedArity = 3;
G__11489.cljs$lang$applyTo = (function (arglist__11491){
var x = cljs.core.first(arglist__11491);
var y = cljs.core.first(cljs.core.next(arglist__11491));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11491)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11491)));
return G__11489__delegate.call(this, x, y, z, args);
});
return G__11489;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11479.call(this);
case  1 :
return ep3__11480.call(this,x);
case  2 :
return ep3__11481.call(this,x,y);
case  3 :
return ep3__11482.call(this,x,y,z);
default:
return ep3__11483.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11483.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11422 = (function() { 
var G__11495__delegate = function (p1,p2,p3,ps){
var ps__11409 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11498 = (function (){
return true;
});
var epn__11499 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11075_SHARP_){
return p1__11075_SHARP_.call(null,x);
}),ps__11409);
});
var epn__11500 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11076_SHARP_){
var and__3546__auto____11411 = p1__11076_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11411))
{return p1__11076_SHARP_.call(null,y);
} else
{return and__3546__auto____11411;
}
}),ps__11409);
});
var epn__11501 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11077_SHARP_){
var and__3546__auto____11412 = p1__11077_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11412))
{var and__3546__auto____11413 = p1__11077_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11413))
{return p1__11077_SHARP_.call(null,z);
} else
{return and__3546__auto____11413;
}
} else
{return and__3546__auto____11412;
}
}),ps__11409);
});
var epn__11502 = (function() { 
var G__11530__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11415 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11415))
{return cljs.core.every_QMARK_.call(null,(function (p1__11078_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11078_SHARP_,args);
}),ps__11409);
} else
{return and__3546__auto____11415;
}
})());
};
var G__11530 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11530__delegate.call(this, x, y, z, args);
};
G__11530.cljs$lang$maxFixedArity = 3;
G__11530.cljs$lang$applyTo = (function (arglist__11531){
var x = cljs.core.first(arglist__11531);
var y = cljs.core.first(cljs.core.next(arglist__11531));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11531)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11531)));
return G__11530__delegate.call(this, x, y, z, args);
});
return G__11530;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11498.call(this);
case  1 :
return epn__11499.call(this,x);
case  2 :
return epn__11500.call(this,x,y);
case  3 :
return epn__11501.call(this,x,y,z);
default:
return epn__11502.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11502.cljs$lang$applyTo;
return epn;
})()
};
var G__11495 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11495__delegate.call(this, p1, p2, p3, ps);
};
G__11495.cljs$lang$maxFixedArity = 3;
G__11495.cljs$lang$applyTo = (function (arglist__11533){
var p1 = cljs.core.first(arglist__11533);
var p2 = cljs.core.first(cljs.core.next(arglist__11533));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11533)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11533)));
return G__11495__delegate.call(this, p1, p2, p3, ps);
});
return G__11495;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11419.call(this,p1);
case  2 :
return every_pred__11420.call(this,p1,p2);
case  3 :
return every_pred__11421.call(this,p1,p2,p3);
default:
return every_pred__11422.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11422.cljs$lang$applyTo;
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
var some_fn__11702 = (function (p){
return (function() {
var sp1 = null;
var sp1__11708 = (function (){
return null;
});
var sp1__11709 = (function (x){
return p.call(null,x);
});
var sp1__11710 = (function (x,y){
var or__3548__auto____11541 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11541))
{return or__3548__auto____11541;
} else
{return p.call(null,y);
}
});
var sp1__11711 = (function (x,y,z){
var or__3548__auto____11542 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11542))
{return or__3548__auto____11542;
} else
{var or__3548__auto____11543 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11543))
{return or__3548__auto____11543;
} else
{return p.call(null,z);
}
}
});
var sp1__11712 = (function() { 
var G__11717__delegate = function (x,y,z,args){
var or__3548__auto____11555 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11555))
{return or__3548__auto____11555;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11717 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11717__delegate.call(this, x, y, z, args);
};
G__11717.cljs$lang$maxFixedArity = 3;
G__11717.cljs$lang$applyTo = (function (arglist__11720){
var x = cljs.core.first(arglist__11720);
var y = cljs.core.first(cljs.core.next(arglist__11720));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11720)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11720)));
return G__11717__delegate.call(this, x, y, z, args);
});
return G__11717;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11708.call(this);
case  1 :
return sp1__11709.call(this,x);
case  2 :
return sp1__11710.call(this,x,y);
case  3 :
return sp1__11711.call(this,x,y,z);
default:
return sp1__11712.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11712.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11704 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11724 = (function (){
return null;
});
var sp2__11725 = (function (x){
var or__3548__auto____11556 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11556))
{return or__3548__auto____11556;
} else
{return p2.call(null,x);
}
});
var sp2__11726 = (function (x,y){
var or__3548__auto____11557 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11557))
{return or__3548__auto____11557;
} else
{var or__3548__auto____11558 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11558))
{return or__3548__auto____11558;
} else
{var or__3548__auto____11559 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11559))
{return or__3548__auto____11559;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11727 = (function (x,y,z){
var or__3548__auto____11560 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11560))
{return or__3548__auto____11560;
} else
{var or__3548__auto____11561 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11561))
{return or__3548__auto____11561;
} else
{var or__3548__auto____11562 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11562))
{return or__3548__auto____11562;
} else
{var or__3548__auto____11569 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11569))
{return or__3548__auto____11569;
} else
{var or__3548__auto____11570 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11570))
{return or__3548__auto____11570;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11728 = (function() { 
var G__11737__delegate = function (x,y,z,args){
var or__3548__auto____11572 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11572))
{return or__3548__auto____11572;
} else
{return cljs.core.some.call(null,(function (p1__11097_SHARP_){
var or__3548__auto____11574 = p1.call(null,p1__11097_SHARP_);

if(cljs.core.truth_(or__3548__auto____11574))
{return or__3548__auto____11574;
} else
{return p2.call(null,p1__11097_SHARP_);
}
}),args);
}
};
var G__11737 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11737__delegate.call(this, x, y, z, args);
};
G__11737.cljs$lang$maxFixedArity = 3;
G__11737.cljs$lang$applyTo = (function (arglist__11738){
var x = cljs.core.first(arglist__11738);
var y = cljs.core.first(cljs.core.next(arglist__11738));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11738)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11738)));
return G__11737__delegate.call(this, x, y, z, args);
});
return G__11737;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11724.call(this);
case  1 :
return sp2__11725.call(this,x);
case  2 :
return sp2__11726.call(this,x,y);
case  3 :
return sp2__11727.call(this,x,y,z);
default:
return sp2__11728.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11728.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11705 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11744 = (function (){
return null;
});
var sp3__11745 = (function (x){
var or__3548__auto____11584 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11584))
{return or__3548__auto____11584;
} else
{var or__3548__auto____11585 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11585))
{return or__3548__auto____11585;
} else
{return p3.call(null,x);
}
}
});
var sp3__11746 = (function (x,y){
var or__3548__auto____11588 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11588))
{return or__3548__auto____11588;
} else
{var or__3548__auto____11589 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11589))
{return or__3548__auto____11589;
} else
{var or__3548__auto____11591 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11591))
{return or__3548__auto____11591;
} else
{var or__3548__auto____11593 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11593))
{return or__3548__auto____11593;
} else
{var or__3548__auto____11600 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11600))
{return or__3548__auto____11600;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11747 = (function (x,y,z){
var or__3548__auto____11602 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11602))
{return or__3548__auto____11602;
} else
{var or__3548__auto____11605 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11605))
{return or__3548__auto____11605;
} else
{var or__3548__auto____11606 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11606))
{return or__3548__auto____11606;
} else
{var or__3548__auto____11607 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11607))
{return or__3548__auto____11607;
} else
{var or__3548__auto____11675 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11675))
{return or__3548__auto____11675;
} else
{var or__3548__auto____11676 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11676))
{return or__3548__auto____11676;
} else
{var or__3548__auto____11677 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11677))
{return or__3548__auto____11677;
} else
{var or__3548__auto____11679 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11679))
{return or__3548__auto____11679;
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
var sp3__11748 = (function() { 
var G__11755__delegate = function (x,y,z,args){
var or__3548__auto____11681 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11681))
{return or__3548__auto____11681;
} else
{return cljs.core.some.call(null,(function (p1__11212_SHARP_){
var or__3548__auto____11689 = p1.call(null,p1__11212_SHARP_);

if(cljs.core.truth_(or__3548__auto____11689))
{return or__3548__auto____11689;
} else
{var or__3548__auto____11690 = p2.call(null,p1__11212_SHARP_);

if(cljs.core.truth_(or__3548__auto____11690))
{return or__3548__auto____11690;
} else
{return p3.call(null,p1__11212_SHARP_);
}
}
}),args);
}
};
var G__11755 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11755__delegate.call(this, x, y, z, args);
};
G__11755.cljs$lang$maxFixedArity = 3;
G__11755.cljs$lang$applyTo = (function (arglist__11761){
var x = cljs.core.first(arglist__11761);
var y = cljs.core.first(cljs.core.next(arglist__11761));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11761)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11761)));
return G__11755__delegate.call(this, x, y, z, args);
});
return G__11755;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11744.call(this);
case  1 :
return sp3__11745.call(this,x);
case  2 :
return sp3__11746.call(this,x,y);
case  3 :
return sp3__11747.call(this,x,y,z);
default:
return sp3__11748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11748.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11706 = (function() { 
var G__11763__delegate = function (p1,p2,p3,ps){
var ps__11692 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11767 = (function (){
return null;
});
var spn__11768 = (function (x){
return cljs.core.some.call(null,(function (p1__11213_SHARP_){
return p1__11213_SHARP_.call(null,x);
}),ps__11692);
});
var spn__11769 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11215_SHARP_){
var or__3548__auto____11694 = p1__11215_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11694))
{return or__3548__auto____11694;
} else
{return p1__11215_SHARP_.call(null,y);
}
}),ps__11692);
});
var spn__11770 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11216_SHARP_){
var or__3548__auto____11697 = p1__11216_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11697))
{return or__3548__auto____11697;
} else
{var or__3548__auto____11698 = p1__11216_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11698))
{return or__3548__auto____11698;
} else
{return p1__11216_SHARP_.call(null,z);
}
}
}),ps__11692);
});
var spn__11771 = (function() { 
var G__11779__delegate = function (x,y,z,args){
var or__3548__auto____11700 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11700))
{return or__3548__auto____11700;
} else
{return cljs.core.some.call(null,(function (p1__11217_SHARP_){
return cljs.core.some.call(null,p1__11217_SHARP_,args);
}),ps__11692);
}
};
var G__11779 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11779__delegate.call(this, x, y, z, args);
};
G__11779.cljs$lang$maxFixedArity = 3;
G__11779.cljs$lang$applyTo = (function (arglist__11784){
var x = cljs.core.first(arglist__11784);
var y = cljs.core.first(cljs.core.next(arglist__11784));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11784)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11784)));
return G__11779__delegate.call(this, x, y, z, args);
});
return G__11779;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11767.call(this);
case  1 :
return spn__11768.call(this,x);
case  2 :
return spn__11769.call(this,x,y);
case  3 :
return spn__11770.call(this,x,y,z);
default:
return spn__11771.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11771.cljs$lang$applyTo;
return spn;
})()
};
var G__11763 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11763__delegate.call(this, p1, p2, p3, ps);
};
G__11763.cljs$lang$maxFixedArity = 3;
G__11763.cljs$lang$applyTo = (function (arglist__11788){
var p1 = cljs.core.first(arglist__11788);
var p2 = cljs.core.first(cljs.core.next(arglist__11788));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11788)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11788)));
return G__11763__delegate.call(this, p1, p2, p3, ps);
});
return G__11763;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11702.call(this,p1);
case  2 :
return some_fn__11704.call(this,p1,p2);
case  3 :
return some_fn__11705.call(this,p1,p2,p3);
default:
return some_fn__11706.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11706.cljs$lang$applyTo;
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
var map__11808 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11791 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11791))
{var s__11792 = temp__3698__auto____11791;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11792)),map.call(null,f,cljs.core.rest.call(null,s__11792)));
} else
{return null;
}
})));
});
var map__11809 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11793 = cljs.core.seq.call(null,c1);
var s2__11794 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11796 = s1__11793;

if(cljs.core.truth_(and__3546__auto____11796))
{return s2__11794;
} else
{return and__3546__auto____11796;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11793),cljs.core.first.call(null,s2__11794)),map.call(null,f,cljs.core.rest.call(null,s1__11793),cljs.core.rest.call(null,s2__11794)));
} else
{return null;
}
})));
});
var map__11810 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11801 = cljs.core.seq.call(null,c1);
var s2__11802 = cljs.core.seq.call(null,c2);
var s3__11803 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11804 = s1__11801;

if(cljs.core.truth_(and__3546__auto____11804))
{var and__3546__auto____11805 = s2__11802;

if(cljs.core.truth_(and__3546__auto____11805))
{return s3__11803;
} else
{return and__3546__auto____11805;
}
} else
{return and__3546__auto____11804;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11801),cljs.core.first.call(null,s2__11802),cljs.core.first.call(null,s3__11803)),map.call(null,f,cljs.core.rest.call(null,s1__11801),cljs.core.rest.call(null,s2__11802),cljs.core.rest.call(null,s3__11803)));
} else
{return null;
}
})));
});
var map__11811 = (function() { 
var G__11815__delegate = function (f,c1,c2,c3,colls){
var step__11807 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11806 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11806)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11806),step.call(null,map.call(null,cljs.core.rest,ss__11806)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11539_SHARP_){
return cljs.core.apply.call(null,f,p1__11539_SHARP_);
}),step__11807.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11815 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11815__delegate.call(this, f, c1, c2, c3, colls);
};
G__11815.cljs$lang$maxFixedArity = 4;
G__11815.cljs$lang$applyTo = (function (arglist__11818){
var f = cljs.core.first(arglist__11818);
var c1 = cljs.core.first(cljs.core.next(arglist__11818));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11818)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11818))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11818))));
return G__11815__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11815;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11808.call(this,f,c1);
case  3 :
return map__11809.call(this,f,c1,c2);
case  4 :
return map__11810.call(this,f,c1,c2,c3);
default:
return map__11811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11811.cljs$lang$applyTo;
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
{var temp__3698__auto____11821 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11821))
{var s__11823 = temp__3698__auto____11821;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11823),take.call(null,(n - 1),cljs.core.rest.call(null,s__11823)));
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
var step__11898 = (function (n,coll){
while(true){
var s__11895 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11897 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11897))
{return s__11895;
} else
{return and__3546__auto____11897;
}
})()))
{{
var G__11929 = (n - 1);
var G__11931 = cljs.core.rest.call(null,s__11895);
n = G__11929;
coll = G__11931;
continue;
}
} else
{return s__11895;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11898.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11938 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11940 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11938.call(this,n);
case  2 :
return drop_last__11940.call(this,n,s);
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
var s__11949 = cljs.core.seq.call(null,coll);
var lead__11951 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11951))
{{
var G__11954 = cljs.core.next.call(null,s__11949);
var G__11955 = cljs.core.next.call(null,lead__11951);
s__11949 = G__11954;
lead__11951 = G__11955;
continue;
}
} else
{return s__11949;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11958 = (function (pred,coll){
while(true){
var s__11956 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11957 = s__11956;

if(cljs.core.truth_(and__3546__auto____11957))
{return pred.call(null,cljs.core.first.call(null,s__11956));
} else
{return and__3546__auto____11957;
}
})()))
{{
var G__11967 = pred;
var G__11968 = cljs.core.rest.call(null,s__11956);
pred = G__11967;
coll = G__11968;
continue;
}
} else
{return s__11956;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11958.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11972 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11972))
{var s__11973 = temp__3698__auto____11972;

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
var repeat__12000 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12001 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12000.call(this,n);
case  2 :
return repeat__12001.call(this,n,x);
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
var repeatedly__12051 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12052 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12051.call(this,n);
case  2 :
return repeatedly__12052.call(this,n,f);
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
var interleave__12073 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12063 = cljs.core.seq.call(null,c1);
var s2__12065 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12067 = s1__12063;

if(cljs.core.truth_(and__3546__auto____12067))
{return s2__12065;
} else
{return and__3546__auto____12067;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12063),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12065),interleave.call(null,cljs.core.rest.call(null,s1__12063),cljs.core.rest.call(null,s2__12065))));
} else
{return null;
}
})));
});
var interleave__12074 = (function() { 
var G__12084__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12069 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12069)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12069),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12069)));
} else
{return null;
}
})));
};
var G__12084 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12084__delegate.call(this, c1, c2, colls);
};
G__12084.cljs$lang$maxFixedArity = 2;
G__12084.cljs$lang$applyTo = (function (arglist__12088){
var c1 = cljs.core.first(arglist__12088);
var c2 = cljs.core.first(cljs.core.next(arglist__12088));
var colls = cljs.core.rest(cljs.core.next(arglist__12088));
return G__12084__delegate.call(this, c1, c2, colls);
});
return G__12084;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12073.call(this,c1,c2);
default:
return interleave__12074.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12074.cljs$lang$applyTo;
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
var cat__12115 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12110 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12110))
{var coll__12112 = temp__3695__auto____12110;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12112),cat.call(null,cljs.core.rest.call(null,coll__12112),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12115.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12125 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12126 = (function() { 
var G__12129__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12129 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12129__delegate.call(this, f, coll, colls);
};
G__12129.cljs$lang$maxFixedArity = 2;
G__12129.cljs$lang$applyTo = (function (arglist__12131){
var f = cljs.core.first(arglist__12131);
var coll = cljs.core.first(cljs.core.next(arglist__12131));
var colls = cljs.core.rest(cljs.core.next(arglist__12131));
return G__12129__delegate.call(this, f, coll, colls);
});
return G__12129;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12125.call(this,f,coll);
default:
return mapcat__12126.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12126.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12136 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12136))
{var s__12137 = temp__3698__auto____12136;

var f__12138 = cljs.core.first.call(null,s__12137);
var r__12139 = cljs.core.rest.call(null,s__12137);

if(cljs.core.truth_(pred.call(null,f__12138)))
{return cljs.core.cons.call(null,f__12138,filter.call(null,pred,r__12139));
} else
{return filter.call(null,pred,r__12139);
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
var walk__12145 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12145.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12143_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12143_SHARP_));
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
var partition__12172 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12159 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12159))
{var s__12161 = temp__3698__auto____12159;

var p__12162 = cljs.core.take.call(null,n,s__12161);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12162))))
{return cljs.core.cons.call(null,p__12162,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12161)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12173 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12163 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12163))
{var s__12164 = temp__3698__auto____12163;

var p__12165 = cljs.core.take.call(null,n,s__12164);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12165))))
{return cljs.core.cons.call(null,p__12165,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12164)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12165,pad)));
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
return partition__12172.call(this,n,step,pad);
case  4 :
return partition__12173.call(this,n,step,pad,coll);
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
var get_in__12190 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12192 = (function (m,ks,not_found){
var sentinel__12177 = cljs.core.lookup_sentinel;
var m__12179 = m;
var ks__12181 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12181))
{var m__12186 = cljs.core.get.call(null,m__12179,cljs.core.first.call(null,ks__12181),sentinel__12177);

if(cljs.core.truth_((sentinel__12177 === m__12186)))
{return not_found;
} else
{{
var G__12196 = sentinel__12177;
var G__12197 = m__12186;
var G__12198 = cljs.core.next.call(null,ks__12181);
sentinel__12177 = G__12196;
m__12179 = G__12197;
ks__12181 = G__12198;
continue;
}
}
} else
{return m__12179;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12190.call(this,m,ks);
case  3 :
return get_in__12192.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12201,v){
var vec__12202__12203 = p__12201;
var k__12204 = cljs.core.nth.call(null,vec__12202__12203,0,null);
var ks__12205 = cljs.core.nthnext.call(null,vec__12202__12203,1);

if(cljs.core.truth_(ks__12205))
{return cljs.core.assoc.call(null,m,k__12204,assoc_in.call(null,cljs.core.get.call(null,m,k__12204),ks__12205,v));
} else
{return cljs.core.assoc.call(null,m,k__12204,v);
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
var update_in__delegate = function (m,p__12222,f,args){
var vec__12224__12225 = p__12222;
var k__12226 = cljs.core.nth.call(null,vec__12224__12225,0,null);
var ks__12227 = cljs.core.nthnext.call(null,vec__12224__12225,1);

if(cljs.core.truth_(ks__12227))
{return cljs.core.assoc.call(null,m,k__12226,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12226),ks__12227,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12226,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12226),args));
}
};
var update_in = function (m,p__12222,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12222, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12294){
var m = cljs.core.first(arglist__12294);
var p__12222 = cljs.core.first(cljs.core.next(arglist__12294));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12294)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12294)));
return update_in__delegate.call(this, m, p__12222, f, args);
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
var this__12300 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12355 = null;
var G__12355__12356 = (function (coll,k){
var this__12301 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12355__12357 = (function (coll,k,not_found){
var this__12303 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12355 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12355__12356.call(this,coll,k);
case  3 :
return G__12355__12357.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12355;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12306 = this;
var new_array__12309 = cljs.core.aclone.call(null,this__12306.array);

(new_array__12309[k] = v);
return (new cljs.core.Vector(this__12306.meta,new_array__12309));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12363 = null;
var G__12363__12364 = (function (coll,k){
var this__12310 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12363__12365 = (function (coll,k,not_found){
var this__12311 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12363 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12363__12364.call(this,coll,k);
case  3 :
return G__12363__12365.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12363;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12312 = this;
var new_array__12314 = cljs.core.aclone.call(null,this__12312.array);

new_array__12314.push(o);
return (new cljs.core.Vector(this__12312.meta,new_array__12314));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12371 = null;
var G__12371__12372 = (function (v,f){
var this__12316 = this;
return cljs.core.ci_reduce.call(null,this__12316.array,f);
});
var G__12371__12373 = (function (v,f,start){
var this__12318 = this;
return cljs.core.ci_reduce.call(null,this__12318.array,f,start);
});
G__12371 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12371__12372.call(this,v,f);
case  3 :
return G__12371__12373.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12371;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12320 = this;
if(cljs.core.truth_((this__12320.array.length > 0)))
{var vector_seq__12321 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12320.array.length)))
{return cljs.core.cons.call(null,(this__12320.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12321.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12322 = this;
return this__12322.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12324 = this;
var count__12325 = this__12324.array.length;

if(cljs.core.truth_((count__12325 > 0)))
{return (this__12324.array[(count__12325 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12331 = this;
if(cljs.core.truth_((this__12331.array.length > 0)))
{var new_array__12333 = cljs.core.aclone.call(null,this__12331.array);

new_array__12333.pop();
return (new cljs.core.Vector(this__12331.meta,new_array__12333));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12335 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12337 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12339 = this;
return (new cljs.core.Vector(meta,this__12339.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12344 = this;
return this__12344.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12378 = null;
var G__12378__12379 = (function (coll,n){
var this__12345 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12347 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12347))
{return (n < this__12345.array.length);
} else
{return and__3546__auto____12347;
}
})()))
{return (this__12345.array[n]);
} else
{return null;
}
});
var G__12378__12380 = (function (coll,n,not_found){
var this__12348 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12349 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12349))
{return (n < this__12348.array.length);
} else
{return and__3546__auto____12349;
}
})()))
{return (this__12348.array[n]);
} else
{return not_found;
}
});
G__12378 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12378__12379.call(this,coll,n);
case  3 :
return G__12378__12380.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12378;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12354 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12354.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12403){
var args = cljs.core.seq( arglist__12403 );;
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
var this__12406 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12697 = null;
var G__12697__12698 = (function (coll,k){
var this__12407 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12697__12699 = (function (coll,k,not_found){
var this__12408 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12697 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12697__12698.call(this,coll,k);
case  3 :
return G__12697__12699.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12697;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12410 = this;
var v_pos__12412 = (this__12410.start + key);

return (new cljs.core.Subvec(this__12410.meta,cljs.core._assoc.call(null,this__12410.v,v_pos__12412,val),this__12410.start,((this__12410.end > (v_pos__12412 + 1)) ? this__12410.end : (v_pos__12412 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12708 = null;
var G__12708__12710 = (function (coll,k){
var this__12492 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12708__12711 = (function (coll,k,not_found){
var this__12494 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12708 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12708__12710.call(this,coll,k);
case  3 :
return G__12708__12711.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12708;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12523 = this;
return (new cljs.core.Subvec(this__12523.meta,cljs.core._assoc_n.call(null,this__12523.v,this__12523.end,o),this__12523.start,(this__12523.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12718 = null;
var G__12718__12719 = (function (coll,f){
var this__12582 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12718__12720 = (function (coll,f,start){
var this__12583 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12718 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12718__12719.call(this,coll,f);
case  3 :
return G__12718__12720.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12718;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12585 = this;
var subvec_seq__12667 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12585.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12585.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12667.call(null,this__12585.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12669 = this;
return (this__12669.end - this__12669.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12670 = this;
return cljs.core._nth.call(null,this__12670.v,(this__12670.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12675 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12675.start,this__12675.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12675.meta,this__12675.v,this__12675.start,(this__12675.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12679 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12681 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12683 = this;
return (new cljs.core.Subvec(meta,this__12683.v,this__12683.start,this__12683.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12685 = this;
return this__12685.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12731 = null;
var G__12731__12732 = (function (coll,n){
var this__12687 = this;
return cljs.core._nth.call(null,this__12687.v,(this__12687.start + n));
});
var G__12731__12733 = (function (coll,n,not_found){
var this__12689 = this;
return cljs.core._nth.call(null,this__12689.v,(this__12689.start + n),not_found);
});
G__12731 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12731__12732.call(this,coll,n);
case  3 :
return G__12731__12733.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12731;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12692 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12692.meta);
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
var subvec__12735 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12736 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12735.call(this,v,start);
case  3 :
return subvec__12736.call(this,v,start,end);
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
var this__12739 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12741 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12743 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12768 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12768.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12769 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12770 = this;
return cljs.core._first.call(null,this__12770.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12771 = this;
var temp__3695__auto____12773 = cljs.core.next.call(null,this__12771.front);

if(cljs.core.truth_(temp__3695__auto____12773))
{var f1__12777 = temp__3695__auto____12773;

return (new cljs.core.PersistentQueueSeq(this__12771.meta,f1__12777,this__12771.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12771.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12771.meta,this__12771.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12778 = this;
return this__12778.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12792 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12792.front,this__12792.rear));
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
var this__12819 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12820 = this;
if(cljs.core.truth_(this__12820.front))
{return (new cljs.core.PersistentQueue(this__12820.meta,(this__12820.count + 1),this__12820.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12824 = this__12820.rear;

if(cljs.core.truth_(or__3548__auto____12824))
{return or__3548__auto____12824;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12820.meta,(this__12820.count + 1),cljs.core.conj.call(null,this__12820.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12829 = this;
var rear__12830 = cljs.core.seq.call(null,this__12829.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12831 = this__12829.front;

if(cljs.core.truth_(or__3548__auto____12831))
{return or__3548__auto____12831;
} else
{return rear__12830;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12829.front,cljs.core.seq.call(null,rear__12830)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12835 = this;
return this__12835.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12836 = this;
return cljs.core._first.call(null,this__12836.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12838 = this;
if(cljs.core.truth_(this__12838.front))
{var temp__3695__auto____12844 = cljs.core.next.call(null,this__12838.front);

if(cljs.core.truth_(temp__3695__auto____12844))
{var f1__12846 = temp__3695__auto____12844;

return (new cljs.core.PersistentQueue(this__12838.meta,(this__12838.count - 1),f1__12846,this__12838.rear));
} else
{return (new cljs.core.PersistentQueue(this__12838.meta,(this__12838.count - 1),cljs.core.seq.call(null,this__12838.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12849 = this;
return cljs.core.first.call(null,this__12849.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12850 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12852 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12854 = this;
return (new cljs.core.PersistentQueue(meta,this__12854.count,this__12854.front,this__12854.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12857 = this;
return this__12857.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12865 = this;
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
var this__12911 = this;
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
var len__12927 = array.length;

var i__12928 = 0;

while(true){
if(cljs.core.truth_((i__12928 < len__12927)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12928]))))
{return i__12928;
} else
{{
var G__12938 = (i__12928 + incr);
i__12928 = G__12938;
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
var obj_map_contains_key_QMARK___12947 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12948 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12944 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12944))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12944;
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
return obj_map_contains_key_QMARK___12947.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12948.call(this,k,strobj,true_val,false_val);
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
var this__12971 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13027 = null;
var G__13027__13028 = (function (coll,k){
var this__12972 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13027__13029 = (function (coll,k,not_found){
var this__12973 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12973.strobj,(this__12973.strobj[k]),not_found);
});
G__13027 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13027__13028.call(this,coll,k);
case  3 :
return G__13027__13029.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13027;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12982 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12983 = goog.object.clone.call(null,this__12982.strobj);
var overwrite_QMARK___12984 = new_strobj__12983.hasOwnProperty(k);

(new_strobj__12983[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12984))
{return (new cljs.core.ObjMap(this__12982.meta,this__12982.keys,new_strobj__12983));
} else
{var new_keys__12989 = cljs.core.aclone.call(null,this__12982.keys);

new_keys__12989.push(k);
return (new cljs.core.ObjMap(this__12982.meta,new_keys__12989,new_strobj__12983));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12982.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12990 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12990.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13034 = null;
var G__13034__13035 = (function (coll,k){
var this__12991 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13034__13036 = (function (coll,k,not_found){
var this__12995 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13034 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13034__13035.call(this,coll,k);
case  3 :
return G__13034__13036.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13034;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12996 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12997 = this;
if(cljs.core.truth_((this__12997.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12956_SHARP_){
return cljs.core.vector.call(null,p1__12956_SHARP_,(this__12997.strobj[p1__12956_SHARP_]));
}),this__12997.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13000 = this;
return this__13000.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13006 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13007 = this;
return (new cljs.core.ObjMap(meta,this__13007.keys,this__13007.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13010 = this;
return this__13010.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13011 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13011.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13014 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13017 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13017))
{return this__13014.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13017;
}
})()))
{var new_keys__13020 = cljs.core.aclone.call(null,this__13014.keys);
var new_strobj__13021 = goog.object.clone.call(null,this__13014.strobj);

new_keys__13020.splice(cljs.core.scan_array.call(null,1,k,new_keys__13020),1);
cljs.core.js_delete.call(null,new_strobj__13021,k);
return (new cljs.core.ObjMap(this__13014.meta,new_keys__13020,new_strobj__13021));
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
var this__13081 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13174 = null;
var G__13174__13175 = (function (coll,k){
var this__13082 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13174__13176 = (function (coll,k,not_found){
var this__13083 = this;
var bucket__13087 = (this__13083.hashobj[cljs.core.hash.call(null,k)]);
var i__13088 = (cljs.core.truth_(bucket__13087)?cljs.core.scan_array.call(null,2,k,bucket__13087):null);

if(cljs.core.truth_(i__13088))
{return (bucket__13087[(i__13088 + 1)]);
} else
{return not_found;
}
});
G__13174 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13174__13175.call(this,coll,k);
case  3 :
return G__13174__13176.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13174;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13089 = this;
var h__13090 = cljs.core.hash.call(null,k);
var bucket__13091 = (this__13089.hashobj[h__13090]);

if(cljs.core.truth_(bucket__13091))
{var new_bucket__13093 = cljs.core.aclone.call(null,bucket__13091);
var new_hashobj__13094 = goog.object.clone.call(null,this__13089.hashobj);

(new_hashobj__13094[h__13090] = new_bucket__13093);
var temp__3695__auto____13097 = cljs.core.scan_array.call(null,2,k,new_bucket__13093);

if(cljs.core.truth_(temp__3695__auto____13097))
{var i__13098 = temp__3695__auto____13097;

(new_bucket__13093[(i__13098 + 1)] = v);
return (new cljs.core.HashMap(this__13089.meta,this__13089.count,new_hashobj__13094));
} else
{new_bucket__13093.push(k,v);
return (new cljs.core.HashMap(this__13089.meta,(this__13089.count + 1),new_hashobj__13094));
}
} else
{var new_hashobj__13101 = goog.object.clone.call(null,this__13089.hashobj);

(new_hashobj__13101[h__13090] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13089.meta,(this__13089.count + 1),new_hashobj__13101));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13104 = this;
var bucket__13107 = (this__13104.hashobj[cljs.core.hash.call(null,k)]);
var i__13111 = (cljs.core.truth_(bucket__13107)?cljs.core.scan_array.call(null,2,k,bucket__13107):null);

if(cljs.core.truth_(i__13111))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13197 = null;
var G__13197__13199 = (function (coll,k){
var this__13112 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13197__13200 = (function (coll,k,not_found){
var this__13117 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13197 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13197__13199.call(this,coll,k);
case  3 :
return G__13197__13200.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13197;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13122 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13128 = this;
if(cljs.core.truth_((this__13128.count > 0)))
{var hashes__13132 = cljs.core.js_keys.call(null,this__13128.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13055_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13128.hashobj[p1__13055_SHARP_])));
}),hashes__13132);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13136 = this;
return this__13136.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13139 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13144 = this;
return (new cljs.core.HashMap(meta,this__13144.count,this__13144.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13150 = this;
return this__13150.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13152 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13152.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13159 = this;
var h__13161 = cljs.core.hash.call(null,k);
var bucket__13164 = (this__13159.hashobj[h__13161]);
var i__13165 = (cljs.core.truth_(bucket__13164)?cljs.core.scan_array.call(null,2,k,bucket__13164):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13165)))
{return coll;
} else
{var new_hashobj__13167 = goog.object.clone.call(null,this__13159.hashobj);

if(cljs.core.truth_((3 > bucket__13164.length)))
{cljs.core.js_delete.call(null,new_hashobj__13167,h__13161);
} else
{var new_bucket__13169 = cljs.core.aclone.call(null,bucket__13164);

new_bucket__13169.splice(i__13165,2);
(new_hashobj__13167[h__13161] = new_bucket__13169);
}
return (new cljs.core.HashMap(this__13159.meta,(this__13159.count - 1),new_hashobj__13167));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13268 = ks.length;

var i__13270 = 0;
var out__13271 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13270 < len__13268)))
{{
var G__13274 = (i__13270 + 1);
var G__13275 = cljs.core.assoc.call(null,out__13271,(ks[i__13270]),(vs[i__13270]));
i__13270 = G__13274;
out__13271 = G__13275;
continue;
}
} else
{return out__13271;
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
var in$__13279 = cljs.core.seq.call(null,keyvals);
var out__13280 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13279))
{{
var G__13287 = cljs.core.nnext.call(null,in$__13279);
var G__13288 = cljs.core.assoc.call(null,out__13280,cljs.core.first.call(null,in$__13279),cljs.core.second.call(null,in$__13279));
in$__13279 = G__13287;
out__13280 = G__13288;
continue;
}
} else
{return out__13280;
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
hash_map.cljs$lang$applyTo = (function (arglist__13290){
var keyvals = cljs.core.seq( arglist__13290 );;
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
{return cljs.core.reduce.call(null,(function (p1__13295_SHARP_,p2__13296_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13301 = p1__13295_SHARP_;

if(cljs.core.truth_(or__3548__auto____13301))
{return or__3548__auto____13301;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13296_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13310){
var maps = cljs.core.seq( arglist__13310 );;
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
{var merge_entry__13317 = (function (m,e){
var k__13313 = cljs.core.first.call(null,e);
var v__13314 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13313)))
{return cljs.core.assoc.call(null,m,k__13313,f.call(null,cljs.core.get.call(null,m,k__13313),v__13314));
} else
{return cljs.core.assoc.call(null,m,k__13313,v__13314);
}
});
var merge2__13322 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13317,(function (){var or__3548__auto____13320 = m1;

if(cljs.core.truth_(or__3548__auto____13320))
{return or__3548__auto____13320;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13322,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13408){
var f = cljs.core.first(arglist__13408);
var maps = cljs.core.rest(arglist__13408);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13433 = cljs.core.ObjMap.fromObject([],{});
var keys__13434 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13434))
{var key__13439 = cljs.core.first.call(null,keys__13434);
var entry__13440 = cljs.core.get.call(null,map,key__13439,"﷐'user/not-found");

{
var G__13444 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13440,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13433,key__13439,entry__13440):ret__13433);
var G__13445 = cljs.core.next.call(null,keys__13434);
ret__13433 = G__13444;
keys__13434 = G__13445;
continue;
}
} else
{return ret__13433;
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
var this__13455 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13525 = null;
var G__13525__13526 = (function (coll,v){
var this__13460 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13525__13527 = (function (coll,v,not_found){
var this__13461 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13461.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13525 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13525__13526.call(this,coll,v);
case  3 :
return G__13525__13527.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13525;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13531 = null;
var G__13531__13532 = (function (coll,k){
var this__13462 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13531__13533 = (function (coll,k,not_found){
var this__13465 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13531 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13531__13532.call(this,coll,k);
case  3 :
return G__13531__13533.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13531;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13467 = this;
return (new cljs.core.Set(this__13467.meta,cljs.core.assoc.call(null,this__13467.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13469 = this;
return cljs.core.keys.call(null,this__13469.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13470 = this;
return (new cljs.core.Set(this__13470.meta,cljs.core.dissoc.call(null,this__13470.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13471 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13472 = this;
var and__3546__auto____13473 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13473))
{var and__3546__auto____13474 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13474))
{return cljs.core.every_QMARK_.call(null,(function (p1__13411_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13411_SHARP_);
}),other);
} else
{return and__3546__auto____13474;
}
} else
{return and__3546__auto____13473;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13475 = this;
return (new cljs.core.Set(meta,this__13475.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13477 = this;
return this__13477.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13523 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13523.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13547 = cljs.core.seq.call(null,coll);
var out__13548 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13547))))
{{
var G__13551 = cljs.core.rest.call(null,in$__13547);
var G__13552 = cljs.core.conj.call(null,out__13548,cljs.core.first.call(null,in$__13547));
in$__13547 = G__13551;
out__13548 = G__13552;
continue;
}
} else
{return out__13548;
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
{var n__13558 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13562 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13562))
{var e__13563 = temp__3695__auto____13562;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13563));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13558,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13545_SHARP_){
var temp__3695__auto____13564 = cljs.core.find.call(null,smap,p1__13545_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13564))
{var e__13565 = temp__3695__auto____13564;

return cljs.core.second.call(null,e__13565);
} else
{return p1__13545_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13583 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13574,seen){
while(true){
var vec__13575__13576 = p__13574;
var f__13577 = cljs.core.nth.call(null,vec__13575__13576,0,null);
var xs__13578 = vec__13575__13576;

var temp__3698__auto____13579 = cljs.core.seq.call(null,xs__13578);

if(cljs.core.truth_(temp__3698__auto____13579))
{var s__13580 = temp__3698__auto____13579;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13577)))
{{
var G__13584 = cljs.core.rest.call(null,s__13580);
var G__13585 = seen;
p__13574 = G__13584;
seen = G__13585;
continue;
}
} else
{return cljs.core.cons.call(null,f__13577,step.call(null,cljs.core.rest.call(null,s__13580),cljs.core.conj.call(null,seen,f__13577)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13583.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13586 = cljs.core.Vector.fromArray([]);
var s__13587 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13587)))
{{
var G__13590 = cljs.core.conj.call(null,ret__13586,cljs.core.first.call(null,s__13587));
var G__13591 = cljs.core.next.call(null,s__13587);
ret__13586 = G__13590;
s__13587 = G__13591;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13586);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13596 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13596))
{return or__3548__auto____13596;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13600 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13600 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13600 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13665 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13665))
{return or__3548__auto____13665;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13669 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13669 > -1)))
{return cljs.core.subs.call(null,x,2,i__13669);
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
var vs__13689 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13691 = ks__13688;

if(cljs.core.truth_(and__3546__auto____13691))
{return vs__13689;
} else
{return and__3546__auto____13691;
}
})()))
{{
var G__13694 = cljs.core.assoc.call(null,map__13687,cljs.core.first.call(null,ks__13688),cljs.core.first.call(null,vs__13689));
var G__13695 = cljs.core.next.call(null,ks__13688);
var G__13696 = cljs.core.next.call(null,vs__13689);
map__13687 = G__13694;
ks__13688 = G__13695;
vs__13689 = G__13696;
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
var max_key__13705 = (function (k,x){
return x;
});
var max_key__13706 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13707 = (function() { 
var G__13709__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13680_SHARP_,p2__13681_SHARP_){
return max_key.call(null,k,p1__13680_SHARP_,p2__13681_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13709 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13709__delegate.call(this, k, x, y, more);
};
G__13709.cljs$lang$maxFixedArity = 3;
G__13709.cljs$lang$applyTo = (function (arglist__13710){
var k = cljs.core.first(arglist__13710);
var x = cljs.core.first(cljs.core.next(arglist__13710));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13710)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13710)));
return G__13709__delegate.call(this, k, x, y, more);
});
return G__13709;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13705.call(this,k,x);
case  3 :
return max_key__13706.call(this,k,x,y);
default:
return max_key__13707.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13707.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13743 = (function (k,x){
return x;
});
var min_key__13744 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13745 = (function() { 
var G__13747__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13701_SHARP_,p2__13702_SHARP_){
return min_key.call(null,k,p1__13701_SHARP_,p2__13702_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13747 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13747__delegate.call(this, k, x, y, more);
};
G__13747.cljs$lang$maxFixedArity = 3;
G__13747.cljs$lang$applyTo = (function (arglist__13749){
var k = cljs.core.first(arglist__13749);
var x = cljs.core.first(cljs.core.next(arglist__13749));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13749)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13749)));
return G__13747__delegate.call(this, k, x, y, more);
});
return G__13747;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13743.call(this,k,x);
case  3 :
return min_key__13744.call(this,k,x,y);
default:
return min_key__13745.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13745.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13759 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13760 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13755 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13755))
{var s__13757 = temp__3698__auto____13755;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13757),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13757)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13759.call(this,n,step);
case  3 :
return partition_all__13760.call(this,n,step,coll);
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
var temp__3698__auto____13953 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13953))
{var s__13955 = temp__3698__auto____13953;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13955))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13955),take_while.call(null,pred,cljs.core.rest.call(null,s__13955)));
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
var this__13964 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13965 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__14037 = null;
var G__14037__14038 = (function (rng,f){
var this__13968 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__14037__14039 = (function (rng,f,s){
var this__13973 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__14037 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__14037__14038.call(this,rng,f);
case  3 :
return G__14037__14039.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14037;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13987 = this;
var comp__13988 = (cljs.core.truth_((this__13987.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13988.call(null,this__13987.start,this__13987.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13991 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13991.end - this__13991.start) / this__13991.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13995 = this;
return this__13995.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13997 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13997.meta,(this__13997.start + this__13997.step),this__13997.end,this__13997.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13999 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__14012 = this;
return (new cljs.core.Range(meta,this__14012.start,this__14012.end,this__14012.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__14014 = this;
return this__14014.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14104 = null;
var G__14104__14105 = (function (rng,n){
var this__14015 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14015.start + (n * this__14015.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14016 = (this__14015.start > this__14015.end);

if(cljs.core.truth_(and__3546__auto____14016))
{return cljs.core._EQ_.call(null,this__14015.step,0);
} else
{return and__3546__auto____14016;
}
})()))
{return this__14015.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14104__14106 = (function (rng,n,not_found){
var this__14017 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14017.start + (n * this__14017.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14020 = (this__14017.start > this__14017.end);

if(cljs.core.truth_(and__3546__auto____14020))
{return cljs.core._EQ_.call(null,this__14017.step,0);
} else
{return and__3546__auto____14020;
}
})()))
{return this__14017.start;
} else
{return not_found;
}
}
});
G__14104 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14104__14105.call(this,rng,n);
case  3 :
return G__14104__14106.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14104;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__14023 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14023.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14119 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14120 = (function (end){
return range.call(null,0,end,1);
});
var range__14121 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14122 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14119.call(this);
case  1 :
return range__14120.call(this,start);
case  2 :
return range__14121.call(this,start,end);
case  3 :
return range__14122.call(this,start,end,step);
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
var temp__3698__auto____14135 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14135))
{var s__14136 = temp__3698__auto____14135;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14136),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14136)));
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
var temp__3698__auto____14163 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14163))
{var s__14165 = temp__3698__auto____14163;

var fst__14166 = cljs.core.first.call(null,s__14165);
var fv__14167 = f.call(null,fst__14166);
var run__14168 = cljs.core.cons.call(null,fst__14166,cljs.core.take_while.call(null,(function (p1__14149_SHARP_){
return cljs.core._EQ_.call(null,fv__14167,f.call(null,p1__14149_SHARP_));
}),cljs.core.next.call(null,s__14165)));

return cljs.core.cons.call(null,run__14168,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14168),s__14165))));
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
var reductions__14202 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14192 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14192))
{var s__14194 = temp__3695__auto____14192;

return reductions.call(null,f,cljs.core.first.call(null,s__14194),cljs.core.rest.call(null,s__14194));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14203 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14196 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14196))
{var s__14197 = temp__3698__auto____14196;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14197)),cljs.core.rest.call(null,s__14197));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14202.call(this,f,init);
case  3 :
return reductions__14203.call(this,f,init,coll);
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
var juxt__14303 = (function (f){
return (function() {
var G__14308 = null;
var G__14308__14309 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14308__14310 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14308__14311 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14308__14312 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14308__14313 = (function() { 
var G__14330__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14330 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14330__delegate.call(this, x, y, z, args);
};
G__14330.cljs$lang$maxFixedArity = 3;
G__14330.cljs$lang$applyTo = (function (arglist__14332){
var x = cljs.core.first(arglist__14332);
var y = cljs.core.first(cljs.core.next(arglist__14332));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14332)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14332)));
return G__14330__delegate.call(this, x, y, z, args);
});
return G__14330;
})()
;
G__14308 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14308__14309.call(this);
case  1 :
return G__14308__14310.call(this,x);
case  2 :
return G__14308__14311.call(this,x,y);
case  3 :
return G__14308__14312.call(this,x,y,z);
default:
return G__14308__14313.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14308.cljs$lang$maxFixedArity = 3;
G__14308.cljs$lang$applyTo = G__14308__14313.cljs$lang$applyTo;
return G__14308;
})()
});
var juxt__14304 = (function (f,g){
return (function() {
var G__14335 = null;
var G__14335__14336 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14335__14337 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14335__14338 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14335__14339 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14335__14340 = (function() { 
var G__14346__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14346 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14346__delegate.call(this, x, y, z, args);
};
G__14346.cljs$lang$maxFixedArity = 3;
G__14346.cljs$lang$applyTo = (function (arglist__14349){
var x = cljs.core.first(arglist__14349);
var y = cljs.core.first(cljs.core.next(arglist__14349));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14349)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14349)));
return G__14346__delegate.call(this, x, y, z, args);
});
return G__14346;
})()
;
G__14335 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14335__14336.call(this);
case  1 :
return G__14335__14337.call(this,x);
case  2 :
return G__14335__14338.call(this,x,y);
case  3 :
return G__14335__14339.call(this,x,y,z);
default:
return G__14335__14340.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14335.cljs$lang$maxFixedArity = 3;
G__14335.cljs$lang$applyTo = G__14335__14340.cljs$lang$applyTo;
return G__14335;
})()
});
var juxt__14305 = (function (f,g,h){
return (function() {
var G__14354 = null;
var G__14354__14355 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14354__14356 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14354__14357 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14354__14358 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14354__14359 = (function() { 
var G__14367__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14367 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14367__delegate.call(this, x, y, z, args);
};
G__14367.cljs$lang$maxFixedArity = 3;
G__14367.cljs$lang$applyTo = (function (arglist__14371){
var x = cljs.core.first(arglist__14371);
var y = cljs.core.first(cljs.core.next(arglist__14371));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14371)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14371)));
return G__14367__delegate.call(this, x, y, z, args);
});
return G__14367;
})()
;
G__14354 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14354__14355.call(this);
case  1 :
return G__14354__14356.call(this,x);
case  2 :
return G__14354__14357.call(this,x,y);
case  3 :
return G__14354__14358.call(this,x,y,z);
default:
return G__14354__14359.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14354.cljs$lang$maxFixedArity = 3;
G__14354.cljs$lang$applyTo = G__14354__14359.cljs$lang$applyTo;
return G__14354;
})()
});
var juxt__14306 = (function() { 
var G__14374__delegate = function (f,g,h,fs){
var fs__14279 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14375 = null;
var G__14375__14377 = (function (){
return cljs.core.reduce.call(null,(function (p1__14175_SHARP_,p2__14176_SHARP_){
return cljs.core.conj.call(null,p1__14175_SHARP_,p2__14176_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14279);
});
var G__14375__14378 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14177_SHARP_,p2__14178_SHARP_){
return cljs.core.conj.call(null,p1__14177_SHARP_,p2__14178_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14279);
});
var G__14375__14379 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14179_SHARP_,p2__14180_SHARP_){
return cljs.core.conj.call(null,p1__14179_SHARP_,p2__14180_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14279);
});
var G__14375__14380 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14181_SHARP_,p2__14182_SHARP_){
return cljs.core.conj.call(null,p1__14181_SHARP_,p2__14182_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14279);
});
var G__14375__14381 = (function() { 
var G__14385__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14184_SHARP_,p2__14185_SHARP_){
return cljs.core.conj.call(null,p1__14184_SHARP_,cljs.core.apply.call(null,p2__14185_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14279);
};
var G__14385 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14385__delegate.call(this, x, y, z, args);
};
G__14385.cljs$lang$maxFixedArity = 3;
G__14385.cljs$lang$applyTo = (function (arglist__14388){
var x = cljs.core.first(arglist__14388);
var y = cljs.core.first(cljs.core.next(arglist__14388));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14388)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14388)));
return G__14385__delegate.call(this, x, y, z, args);
});
return G__14385;
})()
;
G__14375 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14375__14377.call(this);
case  1 :
return G__14375__14378.call(this,x);
case  2 :
return G__14375__14379.call(this,x,y);
case  3 :
return G__14375__14380.call(this,x,y,z);
default:
return G__14375__14381.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14375.cljs$lang$maxFixedArity = 3;
G__14375.cljs$lang$applyTo = G__14375__14381.cljs$lang$applyTo;
return G__14375;
})()
};
var G__14374 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14374__delegate.call(this, f, g, h, fs);
};
G__14374.cljs$lang$maxFixedArity = 3;
G__14374.cljs$lang$applyTo = (function (arglist__14393){
var f = cljs.core.first(arglist__14393);
var g = cljs.core.first(cljs.core.next(arglist__14393));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14393)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14393)));
return G__14374__delegate.call(this, f, g, h, fs);
});
return G__14374;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14303.call(this,f);
case  2 :
return juxt__14304.call(this,f,g);
case  3 :
return juxt__14305.call(this,f,g,h);
default:
return juxt__14306.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14306.cljs$lang$applyTo;
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
var dorun__14404 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14407 = cljs.core.next.call(null,coll);
coll = G__14407;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14405 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14399 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14399))
{return (n > 0);
} else
{return and__3546__auto____14399;
}
})()))
{{
var G__14434 = (n - 1);
var G__14435 = cljs.core.next.call(null,coll);
n = G__14434;
coll = G__14435;
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
return dorun__14404.call(this,n);
case  2 :
return dorun__14405.call(this,n,coll);
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
var doall__14438 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14439 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14438.call(this,n);
case  2 :
return doall__14439.call(this,n,coll);
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
var matches__14441 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14441),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14441),1)))
{return cljs.core.first.call(null,matches__14441);
} else
{return cljs.core.vec.call(null,matches__14441);
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
var matches__14451 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14451)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14451),1)))
{return cljs.core.first.call(null,matches__14451);
} else
{return cljs.core.vec.call(null,matches__14451);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14481 = cljs.core.re_find.call(null,re,s);
var match_idx__14484 = s.search(re);
var match_str__14486 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14481))?cljs.core.first.call(null,match_data__14481):match_data__14481);
var post_match__14488 = cljs.core.subs.call(null,s,(match_idx__14484 + cljs.core.count.call(null,match_str__14486)));

if(cljs.core.truth_(match_data__14481))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14481,re_seq.call(null,re,post_match__14488));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14501_SHARP_){
return print_one.call(null,p1__14501_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14505 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14505))
{var and__3546__auto____14511 = (function (){var x__445__auto____14507 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14508 = x__445__auto____14507;

if(cljs.core.truth_(and__3546__auto____14508))
{var and__3546__auto____14510 = x__445__auto____14507.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14510))
{return cljs.core.not.call(null,x__445__auto____14507.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14510;
}
} else
{return and__3546__auto____14508;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14507);
}
})();

if(cljs.core.truth_(and__3546__auto____14511))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14511;
}
} else
{return and__3546__auto____14505;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14512 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14513 = x__445__auto____14512;

if(cljs.core.truth_(and__3546__auto____14513))
{var and__3546__auto____14514 = x__445__auto____14512.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14514))
{return cljs.core.not.call(null,x__445__auto____14512.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14514;
}
} else
{return and__3546__auto____14513;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14512);
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
var first_obj__14565 = cljs.core.first.call(null,objs);
var sb__14566 = (new goog.string.StringBuffer());

var G__14567__14568 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14567__14568))
{var obj__14569 = cljs.core.first.call(null,G__14567__14568);
var G__14567__14570 = G__14567__14568;

while(true){
if(cljs.core.truth_((obj__14569 === first_obj__14565)))
{} else
{sb__14566.append(" ");
}
var G__14577__14579 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14569,opts));

if(cljs.core.truth_(G__14577__14579))
{var string__14580 = cljs.core.first.call(null,G__14577__14579);
var G__14577__14581 = G__14577__14579;

while(true){
sb__14566.append(string__14580);
var temp__3698__auto____14582 = cljs.core.next.call(null,G__14577__14581);

if(cljs.core.truth_(temp__3698__auto____14582))
{var G__14577__14584 = temp__3698__auto____14582;

{
var G__14588 = cljs.core.first.call(null,G__14577__14584);
var G__14589 = G__14577__14584;
string__14580 = G__14588;
G__14577__14581 = G__14589;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14586 = cljs.core.next.call(null,G__14567__14570);

if(cljs.core.truth_(temp__3698__auto____14586))
{var G__14567__14587 = temp__3698__auto____14586;

{
var G__14590 = cljs.core.first.call(null,G__14567__14587);
var G__14591 = G__14567__14587;
obj__14569 = G__14590;
G__14567__14570 = G__14591;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14566);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14592 = cljs.core.first.call(null,objs);

var G__14593__14594 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14593__14594))
{var obj__14595 = cljs.core.first.call(null,G__14593__14594);
var G__14593__14596 = G__14593__14594;

while(true){
if(cljs.core.truth_((obj__14595 === first_obj__14592)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14597__14598 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14595,opts));

if(cljs.core.truth_(G__14597__14598))
{var string__14599 = cljs.core.first.call(null,G__14597__14598);
var G__14597__14600 = G__14597__14598;

while(true){
cljs.core.string_print.call(null,string__14599);
var temp__3698__auto____14601 = cljs.core.next.call(null,G__14597__14600);

if(cljs.core.truth_(temp__3698__auto____14601))
{var G__14597__14602 = temp__3698__auto____14601;

{
var G__14638 = cljs.core.first.call(null,G__14597__14602);
var G__14639 = G__14597__14602;
string__14599 = G__14638;
G__14597__14600 = G__14639;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14603 = cljs.core.next.call(null,G__14593__14596);

if(cljs.core.truth_(temp__3698__auto____14603))
{var G__14593__14604 = temp__3698__auto____14603;

{
var G__14641 = cljs.core.first.call(null,G__14593__14604);
var G__14642 = G__14593__14604;
obj__14595 = G__14641;
G__14593__14596 = G__14642;
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
pr_str.cljs$lang$applyTo = (function (arglist__14733){
var objs = cljs.core.seq( arglist__14733 );;
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
pr.cljs$lang$applyTo = (function (arglist__14734){
var objs = cljs.core.seq( arglist__14734 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14742){
var objs = cljs.core.seq( arglist__14742 );;
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
println.cljs$lang$applyTo = (function (arglist__14743){
var objs = cljs.core.seq( arglist__14743 );;
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
prn.cljs$lang$applyTo = (function (arglist__14762){
var objs = cljs.core.seq( arglist__14762 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14763 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14763,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14786 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14786))
{var nspc__14788 = temp__3698__auto____14786;

return cljs.core.str.call(null,nspc__14788,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14790 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14790))
{var nspc__14791 = temp__3698__auto____14790;

return cljs.core.str.call(null,nspc__14791,"/");
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
var pr_pair__14793 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14793,"{",", ","}",opts,coll);
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
var this__14812 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14819 = this;
var G__14821__14824 = cljs.core.seq.call(null,this__14819.watches);

if(cljs.core.truth_(G__14821__14824))
{var G__14827__14832 = cljs.core.first.call(null,G__14821__14824);
var vec__14829__14833 = G__14827__14832;
var key__14834 = cljs.core.nth.call(null,vec__14829__14833,0,null);
var f__14836 = cljs.core.nth.call(null,vec__14829__14833,1,null);
var G__14821__14837 = G__14821__14824;

var G__14827__14838 = G__14827__14832;
var G__14821__14839 = G__14821__14837;

while(true){
var vec__14840__14841 = G__14827__14838;
var key__14842 = cljs.core.nth.call(null,vec__14840__14841,0,null);
var f__14843 = cljs.core.nth.call(null,vec__14840__14841,1,null);
var G__14821__14844 = G__14821__14839;

f__14843.call(null,key__14842,this$,oldval,newval);
var temp__3698__auto____14845 = cljs.core.next.call(null,G__14821__14844);

if(cljs.core.truth_(temp__3698__auto____14845))
{var G__14821__14846 = temp__3698__auto____14845;

{
var G__14862 = cljs.core.first.call(null,G__14821__14846);
var G__14863 = G__14821__14846;
G__14827__14838 = G__14862;
G__14821__14839 = G__14863;
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
var this__14850 = this;
return this$.watches = cljs.core.assoc.call(null,this__14850.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14851 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14851.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14852 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14852.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14856 = this;
return this__14856.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14857 = this;
return this__14857.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14858 = this;
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
var atom__14882 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14883 = (function() { 
var G__14885__delegate = function (x,p__14868){
var map__14870__14872 = p__14868;
var map__14870__14874 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14870__14872))?cljs.core.apply.call(null,cljs.core.hash_map,map__14870__14872):map__14870__14872);
var validator__14875 = cljs.core.get.call(null,map__14870__14874,"﷐'validator");
var meta__14877 = cljs.core.get.call(null,map__14870__14874,"﷐'meta");

return (new cljs.core.Atom(x,meta__14877,validator__14875,null));
};
var G__14885 = function (x,var_args){
var p__14868 = null;
if (goog.isDef(var_args)) {
  p__14868 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14885__delegate.call(this, x, p__14868);
};
G__14885.cljs$lang$maxFixedArity = 1;
G__14885.cljs$lang$applyTo = (function (arglist__14889){
var x = cljs.core.first(arglist__14889);
var p__14868 = cljs.core.rest(arglist__14889);
return G__14885__delegate.call(this, x, p__14868);
});
return G__14885;
})()
;
atom = function(x,var_args){
var p__14868 = var_args;
switch(arguments.length){
case  1 :
return atom__14882.call(this,x);
default:
return atom__14883.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14883.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14891 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14891))
{var validate__14896 = temp__3698__auto____14891;

if(cljs.core.truth_(validate__14896.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14897 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14897,new_value);
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
var swap_BANG___14904 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14905 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14906 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14907 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14908 = (function() { 
var G__14922__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14922 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14922__delegate.call(this, a, f, x, y, z, more);
};
G__14922.cljs$lang$maxFixedArity = 5;
G__14922.cljs$lang$applyTo = (function (arglist__14923){
var a = cljs.core.first(arglist__14923);
var f = cljs.core.first(cljs.core.next(arglist__14923));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14923)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14923))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14923)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14923)))));
return G__14922__delegate.call(this, a, f, x, y, z, more);
});
return G__14922;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14904.call(this,a,f);
case  3 :
return swap_BANG___14905.call(this,a,f,x);
case  4 :
return swap_BANG___14906.call(this,a,f,x,y);
case  5 :
return swap_BANG___14907.call(this,a,f,x,y,z);
default:
return swap_BANG___14908.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14908.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14951){
var iref = cljs.core.first(arglist__14951);
var f = cljs.core.first(cljs.core.next(arglist__14951));
var args = cljs.core.rest(cljs.core.next(arglist__14951));
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
var gensym__15004 = (function (){
return gensym.call(null,"G__");
});
var gensym__15005 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__15004.call(this);
case  1 :
return gensym__15005.call(this,prefix_string);
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
var this__15023 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__15023.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15027 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__15027.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__15027.state,this__15027.f);
}
return cljs.core.deref.call(null,this__15027.state);
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
delay.cljs$lang$applyTo = (function (arglist__15042){
var body = cljs.core.seq( arglist__15042 );;
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
var map__15049__15050 = options;
var map__15049__15051 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15049__15050))?cljs.core.apply.call(null,cljs.core.hash_map,map__15049__15050):map__15049__15050);
var keywordize_keys__15078 = cljs.core.get.call(null,map__15049__15051,"﷐'keywordize-keys");
var keyfn__15079 = (cljs.core.truth_(keywordize_keys__15078)?cljs.core.keyword:cljs.core.str);
var f__15092 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15090 = (function iter__15083(s__15084){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15084__15088 = s__15084;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15084__15088)))
{var k__15089 = cljs.core.first.call(null,s__15084__15088);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15079.call(null,k__15089),thisfn.call(null,(x[k__15089]))]),iter__15083.call(null,cljs.core.rest.call(null,s__15084__15088)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15090.call(null,cljs.core.js_keys.call(null,x));
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

return f__15092.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15112){
var x = cljs.core.first(arglist__15112);
var options = cljs.core.rest(arglist__15112);
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
var mem__15116 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15128__delegate = function (args){
var temp__3695__auto____15118 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15116),args);

if(cljs.core.truth_(temp__3695__auto____15118))
{var v__15119 = temp__3695__auto____15118;

return v__15119;
} else
{var ret__15121 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15116,cljs.core.assoc,args,ret__15121);
return ret__15121;
}
};
var G__15128 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15128__delegate.call(this, args);
};
G__15128.cljs$lang$maxFixedArity = 0;
G__15128.cljs$lang$applyTo = (function (arglist__15140){
var args = cljs.core.seq( arglist__15140 );;
return G__15128__delegate.call(this, args);
});
return G__15128;
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
var trampoline__15153 = (function (f){
while(true){
var ret__15143 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15143)))
{{
var G__15157 = ret__15143;
f = G__15157;
continue;
}
} else
{return ret__15143;
}
break;
}
});
var trampoline__15154 = (function() { 
var G__15158__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15158 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15158__delegate.call(this, f, args);
};
G__15158.cljs$lang$maxFixedArity = 1;
G__15158.cljs$lang$applyTo = (function (arglist__15160){
var f = cljs.core.first(arglist__15160);
var args = cljs.core.rest(arglist__15160);
return G__15158__delegate.call(this, f, args);
});
return G__15158;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15153.call(this,f);
default:
return trampoline__15154.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15154.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15166 = (function (){
return rand.call(null,1);
});
var rand__15167 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15166.call(this);
case  1 :
return rand__15167.call(this,n);
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
var k__15180 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15180,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15180,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15220 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15221 = (function (h,child,parent){
var or__3548__auto____15197 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15197))
{return or__3548__auto____15197;
} else
{var or__3548__auto____15198 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15198))
{return or__3548__auto____15198;
} else
{var and__3546__auto____15199 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15199))
{var and__3546__auto____15201 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15201))
{var and__3546__auto____15203 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15203))
{var ret__15205 = true;
var i__15206 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15212 = cljs.core.not.call(null,ret__15205);

if(cljs.core.truth_(or__3548__auto____15212))
{return or__3548__auto____15212;
} else
{return cljs.core._EQ_.call(null,i__15206,cljs.core.count.call(null,parent));
}
})()))
{return ret__15205;
} else
{{
var G__15227 = isa_QMARK_.call(null,h,child.call(null,i__15206),parent.call(null,i__15206));
var G__15228 = (i__15206 + 1);
ret__15205 = G__15227;
i__15206 = G__15228;
continue;
}
}
break;
}
} else
{return and__3546__auto____15203;
}
} else
{return and__3546__auto____15201;
}
} else
{return and__3546__auto____15199;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15220.call(this,h,child);
case  3 :
return isa_QMARK___15221.call(this,h,child,parent);
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
var parents__15255 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15256 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15255.call(this,h);
case  2 :
return parents__15256.call(this,h,tag);
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
var ancestors__15263 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15264 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15263.call(this,h);
case  2 :
return ancestors__15264.call(this,h,tag);
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
var descendants__15332 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15334 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15332.call(this,h);
case  2 :
return descendants__15334.call(this,h,tag);
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
var derive__15357 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15358 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15347 = "﷐'parents".call(null,h);
var td__15348 = "﷐'descendants".call(null,h);
var ta__15349 = "﷐'ancestors".call(null,h);
var tf__15352 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15356 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15347.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15349.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15349.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15347,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15352.call(null,"﷐'ancestors".call(null,h),tag,td__15348,parent,ta__15349),"﷐'descendants":tf__15352.call(null,"﷐'descendants".call(null,h),parent,ta__15349,tag,td__15348)});
})());

if(cljs.core.truth_(or__3548__auto____15356))
{return or__3548__auto____15356;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15357.call(this,h,tag);
case  3 :
return derive__15358.call(this,h,tag,parent);
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
var underive__15389 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15390 = (function (h,tag,parent){
var parentMap__15372 = "﷐'parents".call(null,h);
var childsParents__15375 = (cljs.core.truth_(parentMap__15372.call(null,tag))?cljs.core.disj.call(null,parentMap__15372.call(null,tag),parent):cljs.core.set([]));
var newParents__15376 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15375))?cljs.core.assoc.call(null,parentMap__15372,tag,childsParents__15375):cljs.core.dissoc.call(null,parentMap__15372,tag));
var deriv_seq__15383 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15339_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15339_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15339_SHARP_),cljs.core.second.call(null,p1__15339_SHARP_)));
}),cljs.core.seq.call(null,newParents__15376)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15372.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15340_SHARP_,p2__15341_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15340_SHARP_,p2__15341_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15383));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15389.call(this,h,tag);
case  3 :
return underive__15390.call(this,h,tag,parent);
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
var xprefs__15405 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15408 = (cljs.core.truth_((function (){var and__3546__auto____15407 = xprefs__15405;

if(cljs.core.truth_(and__3546__auto____15407))
{return xprefs__15405.call(null,y);
} else
{return and__3546__auto____15407;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15408))
{return or__3548__auto____15408;
} else
{var or__3548__auto____15415 = (function (){var ps__15410 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15410) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15410),prefer_table)))
{} else
{}
{
var G__15422 = cljs.core.rest.call(null,ps__15410);
ps__15410 = G__15422;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15415))
{return or__3548__auto____15415;
} else
{var or__3548__auto____15420 = (function (){var ps__15418 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15418) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15418),y,prefer_table)))
{} else
{}
{
var G__15425 = cljs.core.rest.call(null,ps__15418);
ps__15418 = G__15425;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15420))
{return or__3548__auto____15420;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15426 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15426))
{return or__3548__auto____15426;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15435 = cljs.core.reduce.call(null,(function (be,p__15427){
var vec__15428__15429 = p__15427;
var k__15430 = cljs.core.nth.call(null,vec__15428__15429,0,null);
var ___15431 = cljs.core.nth.call(null,vec__15428__15429,1,null);
var e__15432 = vec__15428__15429;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15430)))
{var be2__15434 = (cljs.core.truth_((function (){var or__3548__auto____15433 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15433))
{return or__3548__auto____15433;
} else
{return cljs.core.dominates.call(null,k__15430,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15432:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15434),k__15430,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15430," and ",cljs.core.first.call(null,be2__15434),", and neither is preferred")));
}
return be2__15434;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15435))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15435));
return cljs.core.second.call(null,best_entry__15435);
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
if(cljs.core.truth_((function (){var and__3546__auto____15440 = mf;

if(cljs.core.truth_(and__3546__auto____15440))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15440;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15441 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15441))
{return or__3548__auto____15441;
} else
{var or__3548__auto____15442 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15442))
{return or__3548__auto____15442;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15443 = mf;

if(cljs.core.truth_(and__3546__auto____15443))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15443;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15444 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15444))
{return or__3548__auto____15444;
} else
{var or__3548__auto____15445 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15445))
{return or__3548__auto____15445;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15447 = mf;

if(cljs.core.truth_(and__3546__auto____15447))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15447;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15448 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15448))
{return or__3548__auto____15448;
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
if(cljs.core.truth_((function (){var and__3546__auto____15450 = mf;

if(cljs.core.truth_(and__3546__auto____15450))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15450;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15451 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15451))
{return or__3548__auto____15451;
} else
{var or__3548__auto____15452 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15452))
{return or__3548__auto____15452;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15453 = mf;

if(cljs.core.truth_(and__3546__auto____15453))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15453;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15454 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15454))
{return or__3548__auto____15454;
} else
{var or__3548__auto____15455 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15455))
{return or__3548__auto____15455;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15515 = mf;

if(cljs.core.truth_(and__3546__auto____15515))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15515;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15519 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15519))
{return or__3548__auto____15519;
} else
{var or__3548__auto____15520 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15520))
{return or__3548__auto____15520;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15521 = mf;

if(cljs.core.truth_(and__3546__auto____15521))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15521;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15522 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15522))
{return or__3548__auto____15522;
} else
{var or__3548__auto____15523 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15523))
{return or__3548__auto____15523;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15524 = mf;

if(cljs.core.truth_(and__3546__auto____15524))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15524;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15528 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15528))
{return or__3548__auto____15528;
} else
{var or__3548__auto____15529 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15529))
{return or__3548__auto____15529;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15568 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15569 = cljs.core._get_method.call(null,mf,dispatch_val__15568);

if(cljs.core.truth_(target_fn__15569))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15568)));
}
return cljs.core.apply.call(null,target_fn__15569,args);
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
var this__15587 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15588 = this;
cljs.core.swap_BANG_.call(null,this__15588.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15588.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15588.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15588.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15594 = this;
cljs.core.swap_BANG_.call(null,this__15594.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15594.method_cache,this__15594.method_table,this__15594.cached_hierarchy,this__15594.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15599 = this;
cljs.core.swap_BANG_.call(null,this__15599.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15599.method_cache,this__15599.method_table,this__15599.cached_hierarchy,this__15599.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15607 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15607.cached_hierarchy),cljs.core.deref.call(null,this__15607.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15607.method_cache,this__15607.method_table,this__15607.cached_hierarchy,this__15607.hierarchy);
}
var temp__3695__auto____15612 = cljs.core.deref.call(null,this__15607.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15612))
{var target_fn__15658 = temp__3695__auto____15612;

return target_fn__15658;
} else
{var temp__3695__auto____15659 = cljs.core.find_and_cache_best_method.call(null,this__15607.name,dispatch_val,this__15607.hierarchy,this__15607.method_table,this__15607.prefer_table,this__15607.method_cache,this__15607.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15659))
{var target_fn__15661 = temp__3695__auto____15659;

return target_fn__15661;
} else
{return cljs.core.deref.call(null,this__15607.method_table).call(null,this__15607.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15663 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15663.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15663.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15663.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15663.method_cache,this__15663.method_table,this__15663.cached_hierarchy,this__15663.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15668 = this;
return cljs.core.deref.call(null,this__15668.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15669 = this;
return cljs.core.deref.call(null,this__15669.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15670 = this;
return cljs.core.do_dispatch.call(null,mf,this__15670.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15681__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15681 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15681__delegate.call(this, _, args);
};
G__15681.cljs$lang$maxFixedArity = 1;
G__15681.cljs$lang$applyTo = (function (arglist__15684){
var _ = cljs.core.first(arglist__15684);
var args = cljs.core.rest(arglist__15684);
return G__15681__delegate.call(this, _, args);
});
return G__15681;
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
