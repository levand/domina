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
var or__3548__auto____7303 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7303))
{return or__3548__auto____7303;
} else
{var or__3548__auto____7304 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7304))
{return or__3548__auto____7304;
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
var _invoke__7622 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7317 = this$;

if(cljs.core.truth_(and__3546__auto____7317))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7317;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
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
})().call(null,this$);
}
});
var _invoke__7623 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7321 = this$;

if(cljs.core.truth_(and__3546__auto____7321))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7321;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7322 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7322))
{return or__3548__auto____7322;
} else
{var or__3548__auto____7323 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7323))
{return or__3548__auto____7323;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7624 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7324 = this$;

if(cljs.core.truth_(and__3546__auto____7324))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7324;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
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
})().call(null,this$,a,b);
}
});
var _invoke__7625 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7330 = this$;

if(cljs.core.truth_(and__3546__auto____7330))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7330;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
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
})().call(null,this$,a,b,c);
}
});
var _invoke__7626 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7338 = this$;

if(cljs.core.truth_(and__3546__auto____7338))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7338;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7339 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7339))
{return or__3548__auto____7339;
} else
{var or__3548__auto____7340 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7340))
{return or__3548__auto____7340;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7627 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7347 = this$;

if(cljs.core.truth_(and__3546__auto____7347))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7347;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7349 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7349))
{return or__3548__auto____7349;
} else
{var or__3548__auto____7351 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7351))
{return or__3548__auto____7351;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7628 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7353 = this$;

if(cljs.core.truth_(and__3546__auto____7353))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7353;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7384 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7384))
{return or__3548__auto____7384;
} else
{var or__3548__auto____7385 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7385))
{return or__3548__auto____7385;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7629 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7388 = this$;

if(cljs.core.truth_(and__3546__auto____7388))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7388;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7390 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7390))
{return or__3548__auto____7390;
} else
{var or__3548__auto____7391 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7391))
{return or__3548__auto____7391;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7630 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7394 = this$;

if(cljs.core.truth_(and__3546__auto____7394))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7394;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7396 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7396))
{return or__3548__auto____7396;
} else
{var or__3548__auto____7397 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7397))
{return or__3548__auto____7397;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7631 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7401 = this$;

if(cljs.core.truth_(and__3546__auto____7401))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7401;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7405 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7405))
{return or__3548__auto____7405;
} else
{var or__3548__auto____7406 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7406))
{return or__3548__auto____7406;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7632 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7410 = this$;

if(cljs.core.truth_(and__3546__auto____7410))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7410;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7633 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7419 = this$;

if(cljs.core.truth_(and__3546__auto____7419))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7419;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7422 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7422))
{return or__3548__auto____7422;
} else
{var or__3548__auto____7425 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7425))
{return or__3548__auto____7425;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7634 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7428 = this$;

if(cljs.core.truth_(and__3546__auto____7428))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7428;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7432 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7432))
{return or__3548__auto____7432;
} else
{var or__3548__auto____7434 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7434))
{return or__3548__auto____7434;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7635 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7437 = this$;

if(cljs.core.truth_(and__3546__auto____7437))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7437;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7441 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7441))
{return or__3548__auto____7441;
} else
{var or__3548__auto____7442 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7442))
{return or__3548__auto____7442;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7636 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7447 = this$;

if(cljs.core.truth_(and__3546__auto____7447))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7447;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7450 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7450))
{return or__3548__auto____7450;
} else
{var or__3548__auto____7452 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7452))
{return or__3548__auto____7452;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7637 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7456 = this$;

if(cljs.core.truth_(and__3546__auto____7456))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7456;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7460 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7460))
{return or__3548__auto____7460;
} else
{var or__3548__auto____7461 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7461))
{return or__3548__auto____7461;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7638 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7465 = this$;

if(cljs.core.truth_(and__3546__auto____7465))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7465;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7468 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7468))
{return or__3548__auto____7468;
} else
{var or__3548__auto____7469 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7469))
{return or__3548__auto____7469;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7471 = this$;

if(cljs.core.truth_(and__3546__auto____7471))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7471;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7474 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7474))
{return or__3548__auto____7474;
} else
{var or__3548__auto____7476 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7476))
{return or__3548__auto____7476;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7640 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7481 = this$;

if(cljs.core.truth_(and__3546__auto____7481))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7481;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7641 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7537 = this$;

if(cljs.core.truth_(and__3546__auto____7537))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7537;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7611 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7611))
{return or__3548__auto____7611;
} else
{var or__3548__auto____7612 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7612))
{return or__3548__auto____7612;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7642 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7615 = this$;

if(cljs.core.truth_(and__3546__auto____7615))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7615;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7617 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7617))
{return or__3548__auto____7617;
} else
{var or__3548__auto____7618 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7618))
{return or__3548__auto____7618;
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
return _invoke__7622.call(this,this$);
case  2 :
return _invoke__7623.call(this,this$,a);
case  3 :
return _invoke__7624.call(this,this$,a,b);
case  4 :
return _invoke__7625.call(this,this$,a,b,c);
case  5 :
return _invoke__7626.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7627.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7628.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7629.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7630.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7631.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7632.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7633.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7634.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7635.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7636.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7637.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7638.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7639.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7640.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7641.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7642.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7777 = coll;

if(cljs.core.truth_(and__3546__auto____7777))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7777;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7779 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7779))
{return or__3548__auto____7779;
} else
{var or__3548__auto____7780 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7780))
{return or__3548__auto____7780;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7785 = coll;

if(cljs.core.truth_(and__3546__auto____7785))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7785;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7789 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7789))
{return or__3548__auto____7789;
} else
{var or__3548__auto____7791 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7791))
{return or__3548__auto____7791;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7797 = coll;

if(cljs.core.truth_(and__3546__auto____7797))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7797;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7798 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7798))
{return or__3548__auto____7798;
} else
{var or__3548__auto____7799 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7799))
{return or__3548__auto____7799;
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
var _nth__7822 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7806 = coll;

if(cljs.core.truth_(and__3546__auto____7806))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7806;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7808 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7808))
{return or__3548__auto____7808;
} else
{var or__3548__auto____7809 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7809))
{return or__3548__auto____7809;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7823 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7813 = coll;

if(cljs.core.truth_(and__3546__auto____7813))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7813;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7819 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7819))
{return or__3548__auto____7819;
} else
{var or__3548__auto____7820 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7820))
{return or__3548__auto____7820;
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
return _nth__7822.call(this,coll,n);
case  3 :
return _nth__7823.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7831 = coll;

if(cljs.core.truth_(and__3546__auto____7831))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7831;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7835 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7835))
{return or__3548__auto____7835;
} else
{var or__3548__auto____7836 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7836))
{return or__3548__auto____7836;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7838 = coll;

if(cljs.core.truth_(and__3546__auto____7838))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7838;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7841 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7841))
{return or__3548__auto____7841;
} else
{var or__3548__auto____7843 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7843))
{return or__3548__auto____7843;
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
var _lookup__7877 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7868 = o;

if(cljs.core.truth_(and__3546__auto____7868))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7868;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7870 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7870))
{return or__3548__auto____7870;
} else
{var or__3548__auto____7871 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7871))
{return or__3548__auto____7871;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7878 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7872 = o;

if(cljs.core.truth_(and__3546__auto____7872))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7872;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7873 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7873))
{return or__3548__auto____7873;
} else
{var or__3548__auto____7874 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7874))
{return or__3548__auto____7874;
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
return _lookup__7877.call(this,o,k);
case  3 :
return _lookup__7878.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7897 = coll;

if(cljs.core.truth_(and__3546__auto____7897))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7897;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7900 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7900))
{return or__3548__auto____7900;
} else
{var or__3548__auto____7901 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7901))
{return or__3548__auto____7901;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7903 = coll;

if(cljs.core.truth_(and__3546__auto____7903))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7903;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7906 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7906))
{return or__3548__auto____7906;
} else
{var or__3548__auto____7907 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7907))
{return or__3548__auto____7907;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7919 = coll;

if(cljs.core.truth_(and__3546__auto____7919))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7919;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7922 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7922))
{return or__3548__auto____7922;
} else
{var or__3548__auto____7923 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7923))
{return or__3548__auto____7923;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7930 = coll;

if(cljs.core.truth_(and__3546__auto____7930))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7930;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7932 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7932))
{return or__3548__auto____7932;
} else
{var or__3548__auto____7934 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7934))
{return or__3548__auto____7934;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7941 = coll;

if(cljs.core.truth_(and__3546__auto____7941))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7941;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7942 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7942))
{return or__3548__auto____7942;
} else
{var or__3548__auto____7994 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7994))
{return or__3548__auto____7994;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7999 = coll;

if(cljs.core.truth_(and__3546__auto____7999))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7999;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8002 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8002))
{return or__3548__auto____8002;
} else
{var or__3548__auto____8003 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8003))
{return or__3548__auto____8003;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8011 = coll;

if(cljs.core.truth_(and__3546__auto____8011))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8011;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8014 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8014))
{return or__3548__auto____8014;
} else
{var or__3548__auto____8015 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8015))
{return or__3548__auto____8015;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8017 = o;

if(cljs.core.truth_(and__3546__auto____8017))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8017;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8020 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8020))
{return or__3548__auto____8020;
} else
{var or__3548__auto____8021 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8021))
{return or__3548__auto____8021;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8025 = o;

if(cljs.core.truth_(and__3546__auto____8025))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8025;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8026 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8026))
{return or__3548__auto____8026;
} else
{var or__3548__auto____8028 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8028))
{return or__3548__auto____8028;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8035 = o;

if(cljs.core.truth_(and__3546__auto____8035))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8035;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8038 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8038))
{return or__3548__auto____8038;
} else
{var or__3548__auto____8039 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8039))
{return or__3548__auto____8039;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8098 = o;

if(cljs.core.truth_(and__3546__auto____8098))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8098;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8103 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8103))
{return or__3548__auto____8103;
} else
{var or__3548__auto____8105 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8105))
{return or__3548__auto____8105;
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
var _reduce__8120 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8108 = coll;

if(cljs.core.truth_(and__3546__auto____8108))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8108;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8113 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8113))
{return or__3548__auto____8113;
} else
{var or__3548__auto____8114 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8114))
{return or__3548__auto____8114;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8121 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8115 = coll;

if(cljs.core.truth_(and__3546__auto____8115))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8115;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8116 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8116))
{return or__3548__auto____8116;
} else
{var or__3548__auto____8117 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8117))
{return or__3548__auto____8117;
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
return _reduce__8120.call(this,coll,f);
case  3 :
return _reduce__8121.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8137 = o;

if(cljs.core.truth_(and__3546__auto____8137))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8137;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8140 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8140))
{return or__3548__auto____8140;
} else
{var or__3548__auto____8141 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8141))
{return or__3548__auto____8141;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8151 = o;

if(cljs.core.truth_(and__3546__auto____8151))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8151;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8153 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8153))
{return or__3548__auto____8153;
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
if(cljs.core.truth_((function (){var and__3546__auto____8160 = o;

if(cljs.core.truth_(and__3546__auto____8160))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8160;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8162 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8162))
{return or__3548__auto____8162;
} else
{var or__3548__auto____8164 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8164))
{return or__3548__auto____8164;
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
if(cljs.core.truth_((function (){var and__3546__auto____8165 = o;

if(cljs.core.truth_(and__3546__auto____8165))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8165;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8167 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8167))
{return or__3548__auto____8167;
} else
{var or__3548__auto____8169 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8169))
{return or__3548__auto____8169;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8174 = d;

if(cljs.core.truth_(and__3546__auto____8174))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8174;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8176 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8176))
{return or__3548__auto____8176;
} else
{var or__3548__auto____8178 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8178))
{return or__3548__auto____8178;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8185 = this$;

if(cljs.core.truth_(and__3546__auto____8185))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8185;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8188 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8188))
{return or__3548__auto____8188;
} else
{var or__3548__auto____8193 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8193))
{return or__3548__auto____8193;
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
{return (function (){var or__3548__auto____8197 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8197))
{return or__3548__auto____8197;
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
if(cljs.core.truth_((function (){var and__3546__auto____8201 = this$;

if(cljs.core.truth_(and__3546__auto____8201))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8201;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8207 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8207))
{return or__3548__auto____8207;
} else
{var or__3548__auto____8209 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8209))
{return or__3548__auto____8209;
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
var G__8272 = null;
var G__8272__8273 = (function (o,k){
return null;
});
var G__8272__8274 = (function (o,k,not_found){
return not_found;
});
G__8272 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8272__8273.call(this,o,k);
case  3 :
return G__8272__8274.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8272;
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
var G__8278 = null;
var G__8278__8279 = (function (_,f){
return f.call(null);
});
var G__8278__8280 = (function (_,f,start){
return start;
});
G__8278 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8278__8279.call(this,_,f);
case  3 :
return G__8278__8280.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8278;
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
var G__8291 = null;
var G__8291__8292 = (function (_,n){
return null;
});
var G__8291__8293 = (function (_,n,not_found){
return not_found;
});
G__8291 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8291__8292.call(this,_,n);
case  3 :
return G__8291__8293.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8291;
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
var ci_reduce__8323 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8311 = cljs.core._nth.call(null,cicoll,0);
var n__8312 = 1;

while(true){
if(cljs.core.truth_((n__8312 < cljs.core._count.call(null,cicoll))))
{{
var G__8331 = f.call(null,val__8311,cljs.core._nth.call(null,cicoll,n__8312));
var G__8332 = (n__8312 + 1);
val__8311 = G__8331;
n__8312 = G__8332;
continue;
}
} else
{return val__8311;
}
break;
}
}
});
var ci_reduce__8324 = (function (cicoll,f,val){
var val__8313 = val;
var n__8314 = 0;

while(true){
if(cljs.core.truth_((n__8314 < cljs.core._count.call(null,cicoll))))
{{
var G__8337 = f.call(null,val__8313,cljs.core._nth.call(null,cicoll,n__8314));
var G__8338 = (n__8314 + 1);
val__8313 = G__8337;
n__8314 = G__8338;
continue;
}
} else
{return val__8313;
}
break;
}
});
var ci_reduce__8325 = (function (cicoll,f,val,idx){
var val__8315 = val;
var n__8316 = idx;

while(true){
if(cljs.core.truth_((n__8316 < cljs.core._count.call(null,cicoll))))
{{
var G__8343 = f.call(null,val__8315,cljs.core._nth.call(null,cicoll,n__8316));
var G__8344 = (n__8316 + 1);
val__8315 = G__8343;
n__8316 = G__8344;
continue;
}
} else
{return val__8315;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8323.call(this,cicoll,f);
case  3 :
return ci_reduce__8324.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8325.call(this,cicoll,f,val,idx);
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
var this__8352 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8373 = null;
var G__8373__8374 = (function (_,f){
var this__8353 = this;
return cljs.core.ci_reduce.call(null,this__8353.a,f,(this__8353.a[this__8353.i]),(this__8353.i + 1));
});
var G__8373__8376 = (function (_,f,start){
var this__8358 = this;
return cljs.core.ci_reduce.call(null,this__8358.a,f,start,this__8358.i);
});
G__8373 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8373__8374.call(this,_,f);
case  3 :
return G__8373__8376.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8373;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8359 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8360 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8383 = null;
var G__8383__8386 = (function (coll,n){
var this__8361 = this;
var i__8362 = (n + this__8361.i);

if(cljs.core.truth_((i__8362 < this__8361.a.length)))
{return (this__8361.a[i__8362]);
} else
{return null;
}
});
var G__8383__8387 = (function (coll,n,not_found){
var this__8367 = this;
var i__8368 = (n + this__8367.i);

if(cljs.core.truth_((i__8368 < this__8367.a.length)))
{return (this__8367.a[i__8368]);
} else
{return not_found;
}
});
G__8383 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8383__8386.call(this,coll,n);
case  3 :
return G__8383__8387.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8383;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8369 = this;
return (this__8369.a.length - this__8369.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8370 = this;
return (this__8370.a[this__8370.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8371 = this;
if(cljs.core.truth_(((this__8371.i + 1) < this__8371.a.length)))
{return (new cljs.core.IndexedSeq(this__8371.a,(this__8371.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8372 = this;
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
var G__8393 = null;
var G__8393__8394 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8393__8395 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8393 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8393__8394.call(this,array,f);
case  3 :
return G__8393__8395.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8393;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8397 = null;
var G__8397__8398 = (function (array,k){
return (array[k]);
});
var G__8397__8399 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8397 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8397__8398.call(this,array,k);
case  3 :
return G__8397__8399.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8397;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8401 = null;
var G__8401__8402 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8401__8403 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8401 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8401__8402.call(this,array,n);
case  3 :
return G__8401__8403.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8401;
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
var temp__3698__auto____8407 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8407))
{var s__8408 = temp__3698__auto____8407;

return cljs.core._first.call(null,s__8408);
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
var G__8438 = cljs.core.next.call(null,s);
s = G__8438;
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
var s__8443 = cljs.core.seq.call(null,x);
var n__8444 = 0;

while(true){
if(cljs.core.truth_(s__8443))
{{
var G__8451 = cljs.core.next.call(null,s__8443);
var G__8452 = (n__8444 + 1);
s__8443 = G__8451;
n__8444 = G__8452;
continue;
}
} else
{return n__8444;
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
var conj__8472 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8473 = (function() { 
var G__8481__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8483 = conj.call(null,coll,x);
var G__8484 = cljs.core.first.call(null,xs);
var G__8485 = cljs.core.next.call(null,xs);
coll = G__8483;
x = G__8484;
xs = G__8485;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8481 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8481__delegate.call(this, coll, x, xs);
};
G__8481.cljs$lang$maxFixedArity = 2;
G__8481.cljs$lang$applyTo = (function (arglist__8491){
var coll = cljs.core.first(arglist__8491);
var x = cljs.core.first(cljs.core.next(arglist__8491));
var xs = cljs.core.rest(cljs.core.next(arglist__8491));
return G__8481__delegate.call(this, coll, x, xs);
});
return G__8481;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8472.call(this,coll,x);
default:
return conj__8473.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8473.cljs$lang$applyTo;
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
var nth__8496 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8497 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8496.call(this,coll,n);
case  3 :
return nth__8497.call(this,coll,n,not_found);
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
var get__8504 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8505 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8504.call(this,o,k);
case  3 :
return get__8505.call(this,o,k,not_found);
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
var assoc__8562 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8563 = (function() { 
var G__8565__delegate = function (coll,k,v,kvs){
while(true){
var ret__8560 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8570 = ret__8560;
var G__8571 = cljs.core.first.call(null,kvs);
var G__8572 = cljs.core.second.call(null,kvs);
var G__8573 = cljs.core.nnext.call(null,kvs);
coll = G__8570;
k = G__8571;
v = G__8572;
kvs = G__8573;
continue;
}
} else
{return ret__8560;
}
break;
}
};
var G__8565 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8565__delegate.call(this, coll, k, v, kvs);
};
G__8565.cljs$lang$maxFixedArity = 3;
G__8565.cljs$lang$applyTo = (function (arglist__8574){
var coll = cljs.core.first(arglist__8574);
var k = cljs.core.first(cljs.core.next(arglist__8574));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8574)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8574)));
return G__8565__delegate.call(this, coll, k, v, kvs);
});
return G__8565;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8562.call(this,coll,k,v);
default:
return assoc__8563.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8563.cljs$lang$applyTo;
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
var G__8613__delegate = function (coll,k,ks){
while(true){
var ret__8582 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8614 = ret__8582;
var G__8615 = cljs.core.first.call(null,ks);
var G__8616 = cljs.core.next.call(null,ks);
coll = G__8614;
k = G__8615;
ks = G__8616;
continue;
}
} else
{return ret__8582;
}
break;
}
};
var G__8613 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8613__delegate.call(this, coll, k, ks);
};
G__8613.cljs$lang$maxFixedArity = 2;
G__8613.cljs$lang$applyTo = (function (arglist__8619){
var coll = cljs.core.first(arglist__8619);
var k = cljs.core.first(cljs.core.next(arglist__8619));
var ks = cljs.core.rest(cljs.core.next(arglist__8619));
return G__8613__delegate.call(this, coll, k, ks);
});
return G__8613;
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
if(cljs.core.truth_((function (){var x__445__auto____8638 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8639 = x__445__auto____8638;

if(cljs.core.truth_(and__3546__auto____8639))
{var and__3546__auto____8640 = x__445__auto____8638.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8640))
{return cljs.core.not.call(null,x__445__auto____8638.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8640;
}
} else
{return and__3546__auto____8639;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8638);
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
var disj__8650 = (function (coll){
return coll;
});
var disj__8651 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8652 = (function() { 
var G__8657__delegate = function (coll,k,ks){
while(true){
var ret__8648 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8658 = ret__8648;
var G__8659 = cljs.core.first.call(null,ks);
var G__8660 = cljs.core.next.call(null,ks);
coll = G__8658;
k = G__8659;
ks = G__8660;
continue;
}
} else
{return ret__8648;
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
G__8657.cljs$lang$applyTo = (function (arglist__8668){
var coll = cljs.core.first(arglist__8668);
var k = cljs.core.first(cljs.core.next(arglist__8668));
var ks = cljs.core.rest(cljs.core.next(arglist__8668));
return G__8657__delegate.call(this, coll, k, ks);
});
return G__8657;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8650.call(this,coll);
case  2 :
return disj__8651.call(this,coll,k);
default:
return disj__8652.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8652.cljs$lang$applyTo;
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
{var x__445__auto____8681 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8683 = x__445__auto____8681;

if(cljs.core.truth_(and__3546__auto____8683))
{var and__3546__auto____8687 = x__445__auto____8681.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8687))
{return cljs.core.not.call(null,x__445__auto____8681.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8687;
}
} else
{return and__3546__auto____8683;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8681);
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
{var x__445__auto____8779 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8783 = x__445__auto____8779;

if(cljs.core.truth_(and__3546__auto____8783))
{var and__3546__auto____8787 = x__445__auto____8779.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8787))
{return cljs.core.not.call(null,x__445__auto____8779.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8787;
}
} else
{return and__3546__auto____8783;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8779);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8793 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8796 = x__445__auto____8793;

if(cljs.core.truth_(and__3546__auto____8796))
{var and__3546__auto____8806 = x__445__auto____8793.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8806))
{return cljs.core.not.call(null,x__445__auto____8793.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8806;
}
} else
{return and__3546__auto____8796;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8793);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8820 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8821 = x__445__auto____8820;

if(cljs.core.truth_(and__3546__auto____8821))
{var and__3546__auto____8822 = x__445__auto____8820.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8822))
{return cljs.core.not.call(null,x__445__auto____8820.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8822;
}
} else
{return and__3546__auto____8821;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8820);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8831 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8832 = x__445__auto____8831;

if(cljs.core.truth_(and__3546__auto____8832))
{var and__3546__auto____8837 = x__445__auto____8831.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8837))
{return cljs.core.not.call(null,x__445__auto____8831.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8837;
}
} else
{return and__3546__auto____8832;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8831);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8849 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8850 = x__445__auto____8849;

if(cljs.core.truth_(and__3546__auto____8850))
{var and__3546__auto____8851 = x__445__auto____8849.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8851))
{return cljs.core.not.call(null,x__445__auto____8849.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8851;
}
} else
{return and__3546__auto____8850;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8849);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8859 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8860 = x__445__auto____8859;

if(cljs.core.truth_(and__3546__auto____8860))
{var and__3546__auto____8861 = x__445__auto____8859.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8861))
{return cljs.core.not.call(null,x__445__auto____8859.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8861;
}
} else
{return and__3546__auto____8860;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8859);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8864 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8864.push(key);
}));
return keys__8864;
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
{var x__445__auto____8909 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8910 = x__445__auto____8909;

if(cljs.core.truth_(and__3546__auto____8910))
{var and__3546__auto____8911 = x__445__auto____8909.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8911))
{return cljs.core.not.call(null,x__445__auto____8909.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8911;
}
} else
{return and__3546__auto____8910;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8909);
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
var and__3546__auto____8917 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8917))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8918 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8918))
{return or__3548__auto____8918;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8917;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8922 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8922))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8922;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8926 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8926))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8926;
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
var and__3546__auto____8933 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8933))
{return (n == n.toFixed());
} else
{return and__3546__auto____8933;
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
if(cljs.core.truth_((function (){var and__3546__auto____8945 = coll;

if(cljs.core.truth_(and__3546__auto____8945))
{var and__3546__auto____8947 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8947))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8947;
}
} else
{return and__3546__auto____8945;
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
var distinct_QMARK___8961 = (function (x){
return true;
});
var distinct_QMARK___8962 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8963 = (function() { 
var G__8966__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8953 = cljs.core.set([y,x]);
var xs__8955 = more;

while(true){
var x__8957 = cljs.core.first.call(null,xs__8955);
var etc__8958 = cljs.core.next.call(null,xs__8955);

if(cljs.core.truth_(xs__8955))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8953,x__8957)))
{return false;
} else
{{
var G__8967 = cljs.core.conj.call(null,s__8953,x__8957);
var G__8968 = etc__8958;
s__8953 = G__8967;
xs__8955 = G__8968;
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
var G__8966 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8966__delegate.call(this, x, y, more);
};
G__8966.cljs$lang$maxFixedArity = 2;
G__8966.cljs$lang$applyTo = (function (arglist__8969){
var x = cljs.core.first(arglist__8969);
var y = cljs.core.first(cljs.core.next(arglist__8969));
var more = cljs.core.rest(cljs.core.next(arglist__8969));
return G__8966__delegate.call(this, x, y, more);
});
return G__8966;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8961.call(this,x);
case  2 :
return distinct_QMARK___8962.call(this,x,y);
default:
return distinct_QMARK___8963.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8963.cljs$lang$applyTo;
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
var r__8972 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8972)))
{return r__8972;
} else
{if(cljs.core.truth_(r__8972))
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
var sort__8983 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8984 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8982 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8982,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8982);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8983.call(this,comp);
case  2 :
return sort__8984.call(this,comp,coll);
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
var sort_by__8999 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9000 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8999.call(this,keyfn,comp);
case  3 :
return sort_by__9000.call(this,keyfn,comp,coll);
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
var reduce__9015 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9016 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9015.call(this,f,val);
case  3 :
return reduce__9016.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9028 = (function (f,coll){
var temp__3695__auto____9023 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9023))
{var s__9024 = temp__3695__auto____9023;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9024),cljs.core.next.call(null,s__9024));
} else
{return f.call(null);
}
});
var seq_reduce__9029 = (function (f,val,coll){
var val__9025 = val;
var coll__9026 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9026))
{{
var G__9046 = f.call(null,val__9025,cljs.core.first.call(null,coll__9026));
var G__9047 = cljs.core.next.call(null,coll__9026);
val__9025 = G__9046;
coll__9026 = G__9047;
continue;
}
} else
{return val__9025;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9028.call(this,f,val);
case  3 :
return seq_reduce__9029.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9052 = null;
var G__9052__9053 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9052__9054 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9052 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9052__9053.call(this,coll,f);
case  3 :
return G__9052__9054.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9052;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9062 = (function (){
return 0;
});
var _PLUS___9064 = (function (x){
return x;
});
var _PLUS___9065 = (function (x,y){
return (x + y);
});
var _PLUS___9066 = (function() { 
var G__9069__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9069 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9069__delegate.call(this, x, y, more);
};
G__9069.cljs$lang$maxFixedArity = 2;
G__9069.cljs$lang$applyTo = (function (arglist__9072){
var x = cljs.core.first(arglist__9072);
var y = cljs.core.first(cljs.core.next(arglist__9072));
var more = cljs.core.rest(cljs.core.next(arglist__9072));
return G__9069__delegate.call(this, x, y, more);
});
return G__9069;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9062.call(this);
case  1 :
return _PLUS___9064.call(this,x);
case  2 :
return _PLUS___9065.call(this,x,y);
default:
return _PLUS___9066.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9066.cljs$lang$applyTo;
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
var ___9080 = (function (x){
return (- x);
});
var ___9081 = (function (x,y){
return (x - y);
});
var ___9082 = (function() { 
var G__9087__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
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
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9080.call(this,x);
case  2 :
return ___9081.call(this,x,y);
default:
return ___9082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9082.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9183 = (function (){
return 1;
});
var _STAR___9184 = (function (x){
return x;
});
var _STAR___9185 = (function (x,y){
return (x * y);
});
var _STAR___9186 = (function() { 
var G__9190__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9190 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9190__delegate.call(this, x, y, more);
};
G__9190.cljs$lang$maxFixedArity = 2;
G__9190.cljs$lang$applyTo = (function (arglist__9191){
var x = cljs.core.first(arglist__9191);
var y = cljs.core.first(cljs.core.next(arglist__9191));
var more = cljs.core.rest(cljs.core.next(arglist__9191));
return G__9190__delegate.call(this, x, y, more);
});
return G__9190;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9183.call(this);
case  1 :
return _STAR___9184.call(this,x);
case  2 :
return _STAR___9185.call(this,x,y);
default:
return _STAR___9186.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9186.cljs$lang$applyTo;
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
var _SLASH___9204 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9205 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9206 = (function() { 
var G__9208__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9208 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9208__delegate.call(this, x, y, more);
};
G__9208.cljs$lang$maxFixedArity = 2;
G__9208.cljs$lang$applyTo = (function (arglist__9210){
var x = cljs.core.first(arglist__9210);
var y = cljs.core.first(cljs.core.next(arglist__9210));
var more = cljs.core.rest(cljs.core.next(arglist__9210));
return G__9208__delegate.call(this, x, y, more);
});
return G__9208;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9204.call(this,x);
case  2 :
return _SLASH___9205.call(this,x,y);
default:
return _SLASH___9206.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9206.cljs$lang$applyTo;
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
var _LT___9222 = (function (x){
return true;
});
var _LT___9223 = (function (x,y){
return (x < y);
});
var _LT___9224 = (function() { 
var G__9231__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9232 = y;
var G__9233 = cljs.core.first.call(null,more);
var G__9234 = cljs.core.next.call(null,more);
x = G__9232;
y = G__9233;
more = G__9234;
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
var G__9231 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9231__delegate.call(this, x, y, more);
};
G__9231.cljs$lang$maxFixedArity = 2;
G__9231.cljs$lang$applyTo = (function (arglist__9240){
var x = cljs.core.first(arglist__9240);
var y = cljs.core.first(cljs.core.next(arglist__9240));
var more = cljs.core.rest(cljs.core.next(arglist__9240));
return G__9231__delegate.call(this, x, y, more);
});
return G__9231;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9222.call(this,x);
case  2 :
return _LT___9223.call(this,x,y);
default:
return _LT___9224.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9224.cljs$lang$applyTo;
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
var _LT__EQ___9250 = (function (x){
return true;
});
var _LT__EQ___9252 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9254 = (function() { 
var G__9264__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9268 = y;
var G__9270 = cljs.core.first.call(null,more);
var G__9271 = cljs.core.next.call(null,more);
x = G__9268;
y = G__9270;
more = G__9271;
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
var G__9264 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9264__delegate.call(this, x, y, more);
};
G__9264.cljs$lang$maxFixedArity = 2;
G__9264.cljs$lang$applyTo = (function (arglist__9273){
var x = cljs.core.first(arglist__9273);
var y = cljs.core.first(cljs.core.next(arglist__9273));
var more = cljs.core.rest(cljs.core.next(arglist__9273));
return G__9264__delegate.call(this, x, y, more);
});
return G__9264;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9250.call(this,x);
case  2 :
return _LT__EQ___9252.call(this,x,y);
default:
return _LT__EQ___9254.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9254.cljs$lang$applyTo;
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
var _GT___9279 = (function (x){
return true;
});
var _GT___9280 = (function (x,y){
return (x > y);
});
var _GT___9281 = (function() { 
var G__9283__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
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
{return (y > cljs.core.first.call(null,more));
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
G__9283.cljs$lang$applyTo = (function (arglist__9296){
var x = cljs.core.first(arglist__9296);
var y = cljs.core.first(cljs.core.next(arglist__9296));
var more = cljs.core.rest(cljs.core.next(arglist__9296));
return G__9283__delegate.call(this, x, y, more);
});
return G__9283;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9279.call(this,x);
case  2 :
return _GT___9280.call(this,x,y);
default:
return _GT___9281.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9281.cljs$lang$applyTo;
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
var _GT__EQ___9303 = (function (x){
return true;
});
var _GT__EQ___9304 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9305 = (function() { 
var G__9311__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9312 = y;
var G__9313 = cljs.core.first.call(null,more);
var G__9314 = cljs.core.next.call(null,more);
x = G__9312;
y = G__9313;
more = G__9314;
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
var G__9311 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9311__delegate.call(this, x, y, more);
};
G__9311.cljs$lang$maxFixedArity = 2;
G__9311.cljs$lang$applyTo = (function (arglist__9319){
var x = cljs.core.first(arglist__9319);
var y = cljs.core.first(cljs.core.next(arglist__9319));
var more = cljs.core.rest(cljs.core.next(arglist__9319));
return G__9311__delegate.call(this, x, y, more);
});
return G__9311;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9303.call(this,x);
case  2 :
return _GT__EQ___9304.call(this,x,y);
default:
return _GT__EQ___9305.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9305.cljs$lang$applyTo;
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
var max__9331 = (function (x){
return x;
});
var max__9332 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9333 = (function() { 
var G__9340__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9340 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9340__delegate.call(this, x, y, more);
};
G__9340.cljs$lang$maxFixedArity = 2;
G__9340.cljs$lang$applyTo = (function (arglist__9345){
var x = cljs.core.first(arglist__9345);
var y = cljs.core.first(cljs.core.next(arglist__9345));
var more = cljs.core.rest(cljs.core.next(arglist__9345));
return G__9340__delegate.call(this, x, y, more);
});
return G__9340;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9331.call(this,x);
case  2 :
return max__9332.call(this,x,y);
default:
return max__9333.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9333.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9348 = (function (x){
return x;
});
var min__9349 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9350 = (function() { 
var G__9352__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9352 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9352__delegate.call(this, x, y, more);
};
G__9352.cljs$lang$maxFixedArity = 2;
G__9352.cljs$lang$applyTo = (function (arglist__9357){
var x = cljs.core.first(arglist__9357);
var y = cljs.core.first(cljs.core.next(arglist__9357));
var more = cljs.core.rest(cljs.core.next(arglist__9357));
return G__9352__delegate.call(this, x, y, more);
});
return G__9352;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9348.call(this,x);
case  2 :
return min__9349.call(this,x,y);
default:
return min__9350.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9350.cljs$lang$applyTo;
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
var rem__9365 = (n % d);

return cljs.core.fix.call(null,((n - rem__9365) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9370 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9370));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9379 = (function (){
return Math.random.call(null);
});
var rand__9380 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9379.call(this);
case  1 :
return rand__9380.call(this,n);
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
var _EQ__EQ___9477 = (function (x){
return true;
});
var _EQ__EQ___9478 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9479 = (function() { 
var G__9481__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9557 = y;
var G__9558 = cljs.core.first.call(null,more);
var G__9559 = cljs.core.next.call(null,more);
x = G__9557;
y = G__9558;
more = G__9559;
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
var G__9481 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9481__delegate.call(this, x, y, more);
};
G__9481.cljs$lang$maxFixedArity = 2;
G__9481.cljs$lang$applyTo = (function (arglist__9560){
var x = cljs.core.first(arglist__9560);
var y = cljs.core.first(cljs.core.next(arglist__9560));
var more = cljs.core.rest(cljs.core.next(arglist__9560));
return G__9481__delegate.call(this, x, y, more);
});
return G__9481;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9477.call(this,x);
case  2 :
return _EQ__EQ___9478.call(this,x,y);
default:
return _EQ__EQ___9479.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9479.cljs$lang$applyTo;
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
var n__9571 = n;
var xs__9573 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9575 = xs__9573;

if(cljs.core.truth_(and__3546__auto____9575))
{return (n__9571 > 0);
} else
{return and__3546__auto____9575;
}
})()))
{{
var G__9583 = (n__9571 - 1);
var G__9584 = cljs.core.next.call(null,xs__9573);
n__9571 = G__9583;
xs__9573 = G__9584;
continue;
}
} else
{return xs__9573;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9605 = null;
var G__9605__9606 = (function (coll,n){
var temp__3695__auto____9594 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9594))
{var xs__9595 = temp__3695__auto____9594;

return cljs.core.first.call(null,xs__9595);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9605__9607 = (function (coll,n,not_found){
var temp__3695__auto____9596 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9596))
{var xs__9597 = temp__3695__auto____9596;

return cljs.core.first.call(null,xs__9597);
} else
{return not_found;
}
});
G__9605 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9605__9606.call(this,coll,n);
case  3 :
return G__9605__9607.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9605;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9614 = (function (){
return "";
});
var str_STAR___9615 = (function (x){
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
var str_STAR___9616 = (function() { 
var G__9624__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9625 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9626 = cljs.core.next.call(null,more);
sb = G__9625;
more = G__9626;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9624 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9624__delegate.call(this, x, ys);
};
G__9624.cljs$lang$maxFixedArity = 1;
G__9624.cljs$lang$applyTo = (function (arglist__9627){
var x = cljs.core.first(arglist__9627);
var ys = cljs.core.rest(arglist__9627);
return G__9624__delegate.call(this, x, ys);
});
return G__9624;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9614.call(this);
case  1 :
return str_STAR___9615.call(this,x);
default:
return str_STAR___9616.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9616.cljs$lang$applyTo;
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
var str__9633 = (function (){
return "";
});
var str__9634 = (function (x){
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
var str__9635 = (function() { 
var G__9643__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9643 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9643__delegate.call(this, x, ys);
};
G__9643.cljs$lang$maxFixedArity = 1;
G__9643.cljs$lang$applyTo = (function (arglist__9645){
var x = cljs.core.first(arglist__9645);
var ys = cljs.core.rest(arglist__9645);
return G__9643__delegate.call(this, x, ys);
});
return G__9643;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9633.call(this);
case  1 :
return str__9634.call(this,x);
default:
return str__9635.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9635.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9649 = (function (s,start){
return s.substring(start);
});
var subs__9650 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9649.call(this,s,start);
case  3 :
return subs__9650.call(this,s,start,end);
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
var symbol__9657 = (function (name){
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
var symbol__9658 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9657.call(this,ns);
case  2 :
return symbol__9658.call(this,ns,name);
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
var keyword__9672 = (function (name){
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
var keyword__9673 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9672.call(this,ns);
case  2 :
return keyword__9673.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9868 = cljs.core.seq.call(null,x);
var ys__9870 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9868)))
{return cljs.core.nil_QMARK_.call(null,ys__9870);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9870)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9868),cljs.core.first.call(null,ys__9870))))
{{
var G__9914 = cljs.core.next.call(null,xs__9868);
var G__9916 = cljs.core.next.call(null,ys__9870);
xs__9868 = G__9914;
ys__9870 = G__9916;
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
return cljs.core.reduce.call(null,(function (p1__9919_SHARP_,p2__9921_SHARP_){
return cljs.core.hash_combine.call(null,p1__9919_SHARP_,cljs.core.hash.call(null,p2__9921_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9940__9942 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9940__9942))
{var G__9945__9947 = cljs.core.first.call(null,G__9940__9942);
var vec__9946__9949 = G__9945__9947;
var key_name__9950 = cljs.core.nth.call(null,vec__9946__9949,0,null);
var f__9951 = cljs.core.nth.call(null,vec__9946__9949,1,null);
var G__9940__9952 = G__9940__9942;

var G__9945__9953 = G__9945__9947;
var G__9940__9954 = G__9940__9952;

while(true){
var vec__9955__9956 = G__9945__9953;
var key_name__9957 = cljs.core.nth.call(null,vec__9955__9956,0,null);
var f__9958 = cljs.core.nth.call(null,vec__9955__9956,1,null);
var G__9940__9959 = G__9940__9954;

var str_name__9960 = cljs.core.name.call(null,key_name__9957);

obj[str_name__9960] = f__9958;
var temp__3698__auto____9961 = cljs.core.next.call(null,G__9940__9959);

if(cljs.core.truth_(temp__3698__auto____9961))
{var G__9940__9962 = temp__3698__auto____9961;

{
var G__9973 = cljs.core.first.call(null,G__9940__9962);
var G__9974 = G__9940__9962;
G__9945__9953 = G__9973;
G__9940__9954 = G__9974;
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
var this__9989 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9990 = this;
return (new cljs.core.List(this__9990.meta,o,coll,(this__9990.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9991 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9992 = this;
return this__9992.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9993 = this;
return this__9993.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9994 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9995 = this;
return this__9995.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9996 = this;
return this__9996.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9997 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9998 = this;
return (new cljs.core.List(meta,this__9998.first,this__9998.rest,this__9998.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9999 = this;
return this__9999.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10000 = this;
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
var this__10010 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10011 = this;
return (new cljs.core.List(this__10011.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10012 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10013 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10014 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10016 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10018 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10019 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10022 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10024 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10052 = this;
return this__10052.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10053 = this;
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
list.cljs$lang$applyTo = (function (arglist__10129){
var items = cljs.core.seq( arglist__10129 );;
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
var this__10137 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10138 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10139 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10141 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10141.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10142 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10143 = this;
return this__10143.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10144 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10144.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10144.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10145 = this;
return this__10145.meta;
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
var G__10197 = null;
var G__10197__10198 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10197__10199 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10197 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10197__10198.call(this,string,f);
case  3 :
return G__10197__10199.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10197;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10203 = null;
var G__10203__10204 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10203__10205 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10203 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10203__10204.call(this,string,k);
case  3 :
return G__10203__10205.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10203;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10210 = null;
var G__10210__10211 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10210__10212 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10210 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10210__10211.call(this,string,n);
case  3 :
return G__10210__10212.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10210;
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
var G__10230 = null;
var G__10230__10231 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10230__10232 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10230 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10230__10231.call(this,this$,coll);
case  3 :
return G__10230__10232.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10230;
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
var x__10250 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10250;
} else
{lazy_seq.x = x__10250.call(null);
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
var this__10255 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10257 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10258 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10264 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10264.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10271 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10273 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10274 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10276 = this;
return this__10276.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10277 = this;
return (new cljs.core.LazySeq(meta,this__10277.realized,this__10277.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10290 = cljs.core.array.call(null);

var s__10291 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10291)))
{ary__10290.push(cljs.core.first.call(null,s__10291));
{
var G__10294 = cljs.core.next.call(null,s__10291);
s__10291 = G__10294;
continue;
}
} else
{return ary__10290;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10297 = s;
var i__10298 = n;
var sum__10299 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10300 = (i__10298 > 0);

if(cljs.core.truth_(and__3546__auto____10300))
{return cljs.core.seq.call(null,s__10297);
} else
{return and__3546__auto____10300;
}
})()))
{{
var G__10303 = cljs.core.next.call(null,s__10297);
var G__10304 = (i__10298 - 1);
var G__10305 = (sum__10299 + 1);
s__10297 = G__10303;
i__10298 = G__10304;
sum__10299 = G__10305;
continue;
}
} else
{return sum__10299;
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
var concat__10337 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10338 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10339 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10324 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10324))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10324),concat.call(null,cljs.core.rest.call(null,s__10324),y));
} else
{return y;
}
})));
});
var concat__10340 = (function() { 
var G__10343__delegate = function (x,y,zs){
var cat__10331 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10328 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10328))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10328),cat.call(null,cljs.core.rest.call(null,xys__10328),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10331.call(null,concat.call(null,x,y),zs);
};
var G__10343 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10343__delegate.call(this, x, y, zs);
};
G__10343.cljs$lang$maxFixedArity = 2;
G__10343.cljs$lang$applyTo = (function (arglist__10351){
var x = cljs.core.first(arglist__10351);
var y = cljs.core.first(cljs.core.next(arglist__10351));
var zs = cljs.core.rest(cljs.core.next(arglist__10351));
return G__10343__delegate.call(this, x, y, zs);
});
return G__10343;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10337.call(this);
case  1 :
return concat__10338.call(this,x);
case  2 :
return concat__10339.call(this,x,y);
default:
return concat__10340.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10340.cljs$lang$applyTo;
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
var list_STAR___10420 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10421 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10422 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10423 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10424 = (function() { 
var G__10454__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10454 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10454__delegate.call(this, a, b, c, d, more);
};
G__10454.cljs$lang$maxFixedArity = 4;
G__10454.cljs$lang$applyTo = (function (arglist__10458){
var a = cljs.core.first(arglist__10458);
var b = cljs.core.first(cljs.core.next(arglist__10458));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10458)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10458))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10458))));
return G__10454__delegate.call(this, a, b, c, d, more);
});
return G__10454;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10420.call(this,a);
case  2 :
return list_STAR___10421.call(this,a,b);
case  3 :
return list_STAR___10422.call(this,a,b,c);
case  4 :
return list_STAR___10423.call(this,a,b,c,d);
default:
return list_STAR___10424.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10424.cljs$lang$applyTo;
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
var apply__10495 = (function (f,args){
var fixed_arity__10463 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10463 + 1)) <= fixed_arity__10463)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10496 = (function (f,x,args){
var arglist__10468 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10469 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10468,fixed_arity__10469) <= fixed_arity__10469)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10468));
} else
{return f.cljs$lang$applyTo(arglist__10468);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10468));
}
});
var apply__10497 = (function (f,x,y,args){
var arglist__10470 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10471 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10470,fixed_arity__10471) <= fixed_arity__10471)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10470));
} else
{return f.cljs$lang$applyTo(arglist__10470);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10470));
}
});
var apply__10498 = (function (f,x,y,z,args){
var arglist__10473 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10474 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10473,fixed_arity__10474) <= fixed_arity__10474)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10473));
} else
{return f.cljs$lang$applyTo(arglist__10473);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10473));
}
});
var apply__10499 = (function() { 
var G__10536__delegate = function (f,a,b,c,d,args){
var arglist__10485 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10486 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10485,fixed_arity__10486) <= fixed_arity__10486)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10485));
} else
{return f.cljs$lang$applyTo(arglist__10485);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10485));
}
};
var G__10536 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10536__delegate.call(this, f, a, b, c, d, args);
};
G__10536.cljs$lang$maxFixedArity = 5;
G__10536.cljs$lang$applyTo = (function (arglist__10538){
var f = cljs.core.first(arglist__10538);
var a = cljs.core.first(cljs.core.next(arglist__10538));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10538)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10538))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10538)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10538)))));
return G__10536__delegate.call(this, f, a, b, c, d, args);
});
return G__10536;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10495.call(this,f,a);
case  3 :
return apply__10496.call(this,f,a,b);
case  4 :
return apply__10497.call(this,f,a,b,c);
case  5 :
return apply__10498.call(this,f,a,b,c,d);
default:
return apply__10499.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10499.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10545){
var obj = cljs.core.first(arglist__10545);
var f = cljs.core.first(cljs.core.next(arglist__10545));
var args = cljs.core.rest(cljs.core.next(arglist__10545));
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
var not_EQ___10554 = (function (x){
return false;
});
var not_EQ___10556 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10557 = (function() { 
var G__10683__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10683 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10683__delegate.call(this, x, y, more);
};
G__10683.cljs$lang$maxFixedArity = 2;
G__10683.cljs$lang$applyTo = (function (arglist__10685){
var x = cljs.core.first(arglist__10685);
var y = cljs.core.first(cljs.core.next(arglist__10685));
var more = cljs.core.rest(cljs.core.next(arglist__10685));
return G__10683__delegate.call(this, x, y, more);
});
return G__10683;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10554.call(this,x);
case  2 :
return not_EQ___10556.call(this,x,y);
default:
return not_EQ___10557.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10557.cljs$lang$applyTo;
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
var G__10706 = pred;
var G__10707 = cljs.core.next.call(null,coll);
pred = G__10706;
coll = G__10707;
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
{var or__3548__auto____10723 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10723))
{return or__3548__auto____10723;
} else
{{
var G__10733 = pred;
var G__10734 = cljs.core.next.call(null,coll);
pred = G__10733;
coll = G__10734;
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
var G__10761 = null;
var G__10761__10763 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10761__10764 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10761__10765 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10761__10766 = (function() { 
var G__10770__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10770 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10770__delegate.call(this, x, y, zs);
};
G__10770.cljs$lang$maxFixedArity = 2;
G__10770.cljs$lang$applyTo = (function (arglist__10772){
var x = cljs.core.first(arglist__10772);
var y = cljs.core.first(cljs.core.next(arglist__10772));
var zs = cljs.core.rest(cljs.core.next(arglist__10772));
return G__10770__delegate.call(this, x, y, zs);
});
return G__10770;
})()
;
G__10761 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10761__10763.call(this);
case  1 :
return G__10761__10764.call(this,x);
case  2 :
return G__10761__10765.call(this,x,y);
default:
return G__10761__10766.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10761.cljs$lang$maxFixedArity = 2;
G__10761.cljs$lang$applyTo = G__10761__10766.cljs$lang$applyTo;
return G__10761;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10773__delegate = function (args){
return x;
};
var G__10773 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10773__delegate.call(this, args);
};
G__10773.cljs$lang$maxFixedArity = 0;
G__10773.cljs$lang$applyTo = (function (arglist__10774){
var args = cljs.core.seq( arglist__10774 );;
return G__10773__delegate.call(this, args);
});
return G__10773;
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
var comp__10828 = (function (){
return cljs.core.identity;
});
var comp__10829 = (function (f){
return f;
});
var comp__10830 = (function (f,g){
return (function() {
var G__10836 = null;
var G__10836__10837 = (function (){
return f.call(null,g.call(null));
});
var G__10836__10838 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10836__10839 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10836__10840 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10836__10841 = (function() { 
var G__10848__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10848 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10848__delegate.call(this, x, y, z, args);
};
G__10848.cljs$lang$maxFixedArity = 3;
G__10848.cljs$lang$applyTo = (function (arglist__10850){
var x = cljs.core.first(arglist__10850);
var y = cljs.core.first(cljs.core.next(arglist__10850));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10850)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10850)));
return G__10848__delegate.call(this, x, y, z, args);
});
return G__10848;
})()
;
G__10836 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10836__10837.call(this);
case  1 :
return G__10836__10838.call(this,x);
case  2 :
return G__10836__10839.call(this,x,y);
case  3 :
return G__10836__10840.call(this,x,y,z);
default:
return G__10836__10841.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10836.cljs$lang$maxFixedArity = 3;
G__10836.cljs$lang$applyTo = G__10836__10841.cljs$lang$applyTo;
return G__10836;
})()
});
var comp__10831 = (function (f,g,h){
return (function() {
var G__10852 = null;
var G__10852__10853 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10852__10854 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10852__10855 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10852__10856 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10852__10857 = (function() { 
var G__10869__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10869 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10869__delegate.call(this, x, y, z, args);
};
G__10869.cljs$lang$maxFixedArity = 3;
G__10869.cljs$lang$applyTo = (function (arglist__10876){
var x = cljs.core.first(arglist__10876);
var y = cljs.core.first(cljs.core.next(arglist__10876));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10876)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10876)));
return G__10869__delegate.call(this, x, y, z, args);
});
return G__10869;
})()
;
G__10852 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10852__10853.call(this);
case  1 :
return G__10852__10854.call(this,x);
case  2 :
return G__10852__10855.call(this,x,y);
case  3 :
return G__10852__10856.call(this,x,y,z);
default:
return G__10852__10857.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10852.cljs$lang$maxFixedArity = 3;
G__10852.cljs$lang$applyTo = G__10852__10857.cljs$lang$applyTo;
return G__10852;
})()
});
var comp__10832 = (function() { 
var G__10881__delegate = function (f1,f2,f3,fs){
var fs__10798 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10882__delegate = function (args){
var ret__10816 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10798),args);
var fs__10818 = cljs.core.next.call(null,fs__10798);

while(true){
if(cljs.core.truth_(fs__10818))
{{
var G__10885 = cljs.core.first.call(null,fs__10818).call(null,ret__10816);
var G__10886 = cljs.core.next.call(null,fs__10818);
ret__10816 = G__10885;
fs__10818 = G__10886;
continue;
}
} else
{return ret__10816;
}
break;
}
};
var G__10882 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10882__delegate.call(this, args);
};
G__10882.cljs$lang$maxFixedArity = 0;
G__10882.cljs$lang$applyTo = (function (arglist__10889){
var args = cljs.core.seq( arglist__10889 );;
return G__10882__delegate.call(this, args);
});
return G__10882;
})()
;
};
var G__10881 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10881__delegate.call(this, f1, f2, f3, fs);
};
G__10881.cljs$lang$maxFixedArity = 3;
G__10881.cljs$lang$applyTo = (function (arglist__10893){
var f1 = cljs.core.first(arglist__10893);
var f2 = cljs.core.first(cljs.core.next(arglist__10893));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10893)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10893)));
return G__10881__delegate.call(this, f1, f2, f3, fs);
});
return G__10881;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10828.call(this);
case  1 :
return comp__10829.call(this,f1);
case  2 :
return comp__10830.call(this,f1,f2);
case  3 :
return comp__10831.call(this,f1,f2,f3);
default:
return comp__10832.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10832.cljs$lang$applyTo;
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
var partial__10969 = (function (f,arg1){
return (function() { 
var G__10976__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10976 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10976__delegate.call(this, args);
};
G__10976.cljs$lang$maxFixedArity = 0;
G__10976.cljs$lang$applyTo = (function (arglist__10977){
var args = cljs.core.seq( arglist__10977 );;
return G__10976__delegate.call(this, args);
});
return G__10976;
})()
;
});
var partial__10971 = (function (f,arg1,arg2){
return (function() { 
var G__10984__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10984 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10984__delegate.call(this, args);
};
G__10984.cljs$lang$maxFixedArity = 0;
G__10984.cljs$lang$applyTo = (function (arglist__10987){
var args = cljs.core.seq( arglist__10987 );;
return G__10984__delegate.call(this, args);
});
return G__10984;
})()
;
});
var partial__10973 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10988__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10988 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10988__delegate.call(this, args);
};
G__10988.cljs$lang$maxFixedArity = 0;
G__10988.cljs$lang$applyTo = (function (arglist__10992){
var args = cljs.core.seq( arglist__10992 );;
return G__10988__delegate.call(this, args);
});
return G__10988;
})()
;
});
var partial__10974 = (function() { 
var G__10994__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10996__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10996 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10996__delegate.call(this, args);
};
G__10996.cljs$lang$maxFixedArity = 0;
G__10996.cljs$lang$applyTo = (function (arglist__10999){
var args = cljs.core.seq( arglist__10999 );;
return G__10996__delegate.call(this, args);
});
return G__10996;
})()
;
};
var G__10994 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10994__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10994.cljs$lang$maxFixedArity = 4;
G__10994.cljs$lang$applyTo = (function (arglist__11006){
var f = cljs.core.first(arglist__11006);
var arg1 = cljs.core.first(cljs.core.next(arglist__11006));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11006)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11006))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11006))));
return G__10994__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10994;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10969.call(this,f,arg1);
case  3 :
return partial__10971.call(this,f,arg1,arg2);
case  4 :
return partial__10973.call(this,f,arg1,arg2,arg3);
default:
return partial__10974.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10974.cljs$lang$applyTo;
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
var fnil__11038 = (function (f,x){
return (function() {
var G__11042 = null;
var G__11042__11043 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__11042__11044 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__11042__11045 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__11042__11046 = (function() { 
var G__11051__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__11051 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11051__delegate.call(this, a, b, c, ds);
};
G__11051.cljs$lang$maxFixedArity = 3;
G__11051.cljs$lang$applyTo = (function (arglist__11052){
var a = cljs.core.first(arglist__11052);
var b = cljs.core.first(cljs.core.next(arglist__11052));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11052)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11052)));
return G__11051__delegate.call(this, a, b, c, ds);
});
return G__11051;
})()
;
G__11042 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__11042__11043.call(this,a);
case  2 :
return G__11042__11044.call(this,a,b);
case  3 :
return G__11042__11045.call(this,a,b,c);
default:
return G__11042__11046.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11042.cljs$lang$maxFixedArity = 3;
G__11042.cljs$lang$applyTo = G__11042__11046.cljs$lang$applyTo;
return G__11042;
})()
});
var fnil__11039 = (function (f,x,y){
return (function() {
var G__11055 = null;
var G__11055__11059 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11055__11060 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11055__11061 = (function() { 
var G__11069__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11069 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11069__delegate.call(this, a, b, c, ds);
};
G__11069.cljs$lang$maxFixedArity = 3;
G__11069.cljs$lang$applyTo = (function (arglist__11070){
var a = cljs.core.first(arglist__11070);
var b = cljs.core.first(cljs.core.next(arglist__11070));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11070)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11070)));
return G__11069__delegate.call(this, a, b, c, ds);
});
return G__11069;
})()
;
G__11055 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11055__11059.call(this,a,b);
case  3 :
return G__11055__11060.call(this,a,b,c);
default:
return G__11055__11061.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11055.cljs$lang$maxFixedArity = 3;
G__11055.cljs$lang$applyTo = G__11055__11061.cljs$lang$applyTo;
return G__11055;
})()
});
var fnil__11040 = (function (f,x,y,z){
return (function() {
var G__11074 = null;
var G__11074__11075 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11074__11077 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11074__11078 = (function() { 
var G__11093__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11093 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11093__delegate.call(this, a, b, c, ds);
};
G__11093.cljs$lang$maxFixedArity = 3;
G__11093.cljs$lang$applyTo = (function (arglist__11094){
var a = cljs.core.first(arglist__11094);
var b = cljs.core.first(cljs.core.next(arglist__11094));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11094)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11094)));
return G__11093__delegate.call(this, a, b, c, ds);
});
return G__11093;
})()
;
G__11074 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11074__11075.call(this,a,b);
case  3 :
return G__11074__11077.call(this,a,b,c);
default:
return G__11074__11078.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11074.cljs$lang$maxFixedArity = 3;
G__11074.cljs$lang$applyTo = G__11074__11078.cljs$lang$applyTo;
return G__11074;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__11038.call(this,f,x);
case  3 :
return fnil__11039.call(this,f,x,y);
case  4 :
return fnil__11040.call(this,f,x,y,z);
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
var mapi__11105 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11100 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11100))
{var s__11104 = temp__3698__auto____11100;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11104)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11104)));
} else
{return null;
}
})));
});

return mapi__11105.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11119 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11119))
{var s__11126 = temp__3698__auto____11119;

var x__11128 = f.call(null,cljs.core.first.call(null,s__11126));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11128)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11126));
} else
{return cljs.core.cons.call(null,x__11128,keep.call(null,f,cljs.core.rest.call(null,s__11126)));
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
var keepi__11161 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11152 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11152))
{var s__11153 = temp__3698__auto____11152;

var x__11156 = f.call(null,idx,cljs.core.first.call(null,s__11153));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11156)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11153));
} else
{return cljs.core.cons.call(null,x__11156,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11153)));
}
} else
{return null;
}
})));
});

return keepi__11161.call(null,0,coll);
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
var every_pred__11368 = (function (p){
return (function() {
var ep1 = null;
var ep1__11374 = (function (){
return true;
});
var ep1__11375 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11376 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11221 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11221))
{return p.call(null,y);
} else
{return and__3546__auto____11221;
}
})());
});
var ep1__11377 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11225 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11225))
{var and__3546__auto____11229 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11229))
{return p.call(null,z);
} else
{return and__3546__auto____11229;
}
} else
{return and__3546__auto____11225;
}
})());
});
var ep1__11378 = (function() { 
var G__11388__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11233 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11233))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11233;
}
})());
};
var G__11388 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11388__delegate.call(this, x, y, z, args);
};
G__11388.cljs$lang$maxFixedArity = 3;
G__11388.cljs$lang$applyTo = (function (arglist__11395){
var x = cljs.core.first(arglist__11395);
var y = cljs.core.first(cljs.core.next(arglist__11395));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11395)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11395)));
return G__11388__delegate.call(this, x, y, z, args);
});
return G__11388;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11374.call(this);
case  1 :
return ep1__11375.call(this,x);
case  2 :
return ep1__11376.call(this,x,y);
case  3 :
return ep1__11377.call(this,x,y,z);
default:
return ep1__11378.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11378.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11369 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11398 = (function (){
return true;
});
var ep2__11399 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11236 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11236))
{return p2.call(null,x);
} else
{return and__3546__auto____11236;
}
})());
});
var ep2__11400 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11239 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11239))
{var and__3546__auto____11305 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11305))
{var and__3546__auto____11307 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11307))
{return p2.call(null,y);
} else
{return and__3546__auto____11307;
}
} else
{return and__3546__auto____11305;
}
} else
{return and__3546__auto____11239;
}
})());
});
var ep2__11401 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11311 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11311))
{var and__3546__auto____11314 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11314))
{var and__3546__auto____11316 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11316))
{var and__3546__auto____11318 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11318))
{var and__3546__auto____11321 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11321))
{return p2.call(null,z);
} else
{return and__3546__auto____11321;
}
} else
{return and__3546__auto____11318;
}
} else
{return and__3546__auto____11316;
}
} else
{return and__3546__auto____11314;
}
} else
{return and__3546__auto____11311;
}
})());
});
var ep2__11402 = (function() { 
var G__11410__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11331 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11331))
{return cljs.core.every_QMARK_.call(null,(function (p1__11138_SHARP_){
var and__3546__auto____11333 = p1.call(null,p1__11138_SHARP_);

if(cljs.core.truth_(and__3546__auto____11333))
{return p2.call(null,p1__11138_SHARP_);
} else
{return and__3546__auto____11333;
}
}),args);
} else
{return and__3546__auto____11331;
}
})());
};
var G__11410 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11410__delegate.call(this, x, y, z, args);
};
G__11410.cljs$lang$maxFixedArity = 3;
G__11410.cljs$lang$applyTo = (function (arglist__11413){
var x = cljs.core.first(arglist__11413);
var y = cljs.core.first(cljs.core.next(arglist__11413));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11413)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11413)));
return G__11410__delegate.call(this, x, y, z, args);
});
return G__11410;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11398.call(this);
case  1 :
return ep2__11399.call(this,x);
case  2 :
return ep2__11400.call(this,x,y);
case  3 :
return ep2__11401.call(this,x,y,z);
default:
return ep2__11402.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11402.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11370 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11418 = (function (){
return true;
});
var ep3__11420 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11334 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11334))
{var and__3546__auto____11335 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11335))
{return p3.call(null,x);
} else
{return and__3546__auto____11335;
}
} else
{return and__3546__auto____11334;
}
})());
});
var ep3__11421 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11336 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11336))
{var and__3546__auto____11337 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11337))
{var and__3546__auto____11338 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11338))
{var and__3546__auto____11339 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11339))
{var and__3546__auto____11341 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11341))
{return p3.call(null,y);
} else
{return and__3546__auto____11341;
}
} else
{return and__3546__auto____11339;
}
} else
{return and__3546__auto____11338;
}
} else
{return and__3546__auto____11337;
}
} else
{return and__3546__auto____11336;
}
})());
});
var ep3__11422 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11343 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11343))
{var and__3546__auto____11344 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11344))
{var and__3546__auto____11346 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11346))
{var and__3546__auto____11347 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11347))
{var and__3546__auto____11348 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11348))
{var and__3546__auto____11349 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11349))
{var and__3546__auto____11355 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11355))
{var and__3546__auto____11357 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11357))
{return p3.call(null,z);
} else
{return and__3546__auto____11357;
}
} else
{return and__3546__auto____11355;
}
} else
{return and__3546__auto____11349;
}
} else
{return and__3546__auto____11348;
}
} else
{return and__3546__auto____11347;
}
} else
{return and__3546__auto____11346;
}
} else
{return and__3546__auto____11344;
}
} else
{return and__3546__auto____11343;
}
})());
});
var ep3__11423 = (function() { 
var G__11450__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11358 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11358))
{return cljs.core.every_QMARK_.call(null,(function (p1__11140_SHARP_){
var and__3546__auto____11359 = p1.call(null,p1__11140_SHARP_);

if(cljs.core.truth_(and__3546__auto____11359))
{var and__3546__auto____11361 = p2.call(null,p1__11140_SHARP_);

if(cljs.core.truth_(and__3546__auto____11361))
{return p3.call(null,p1__11140_SHARP_);
} else
{return and__3546__auto____11361;
}
} else
{return and__3546__auto____11359;
}
}),args);
} else
{return and__3546__auto____11358;
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
G__11450.cljs$lang$applyTo = (function (arglist__11451){
var x = cljs.core.first(arglist__11451);
var y = cljs.core.first(cljs.core.next(arglist__11451));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11451)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11451)));
return G__11450__delegate.call(this, x, y, z, args);
});
return G__11450;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11418.call(this);
case  1 :
return ep3__11420.call(this,x);
case  2 :
return ep3__11421.call(this,x,y);
case  3 :
return ep3__11422.call(this,x,y,z);
default:
return ep3__11423.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11423.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11371 = (function() { 
var G__11452__delegate = function (p1,p2,p3,ps){
var ps__11362 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11454 = (function (){
return true;
});
var epn__11455 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11142_SHARP_){
return p1__11142_SHARP_.call(null,x);
}),ps__11362);
});
var epn__11456 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11143_SHARP_){
var and__3546__auto____11363 = p1__11143_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11363))
{return p1__11143_SHARP_.call(null,y);
} else
{return and__3546__auto____11363;
}
}),ps__11362);
});
var epn__11457 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11146_SHARP_){
var and__3546__auto____11364 = p1__11146_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11364))
{var and__3546__auto____11365 = p1__11146_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11365))
{return p1__11146_SHARP_.call(null,z);
} else
{return and__3546__auto____11365;
}
} else
{return and__3546__auto____11364;
}
}),ps__11362);
});
var epn__11458 = (function() { 
var G__11468__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11366 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11366))
{return cljs.core.every_QMARK_.call(null,(function (p1__11147_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11147_SHARP_,args);
}),ps__11362);
} else
{return and__3546__auto____11366;
}
})());
};
var G__11468 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11468__delegate.call(this, x, y, z, args);
};
G__11468.cljs$lang$maxFixedArity = 3;
G__11468.cljs$lang$applyTo = (function (arglist__11470){
var x = cljs.core.first(arglist__11470);
var y = cljs.core.first(cljs.core.next(arglist__11470));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11470)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11470)));
return G__11468__delegate.call(this, x, y, z, args);
});
return G__11468;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11454.call(this);
case  1 :
return epn__11455.call(this,x);
case  2 :
return epn__11456.call(this,x,y);
case  3 :
return epn__11457.call(this,x,y,z);
default:
return epn__11458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11458.cljs$lang$applyTo;
return epn;
})()
};
var G__11452 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11452__delegate.call(this, p1, p2, p3, ps);
};
G__11452.cljs$lang$maxFixedArity = 3;
G__11452.cljs$lang$applyTo = (function (arglist__11475){
var p1 = cljs.core.first(arglist__11475);
var p2 = cljs.core.first(cljs.core.next(arglist__11475));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11475)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11475)));
return G__11452__delegate.call(this, p1, p2, p3, ps);
});
return G__11452;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11368.call(this,p1);
case  2 :
return every_pred__11369.call(this,p1,p2);
case  3 :
return every_pred__11370.call(this,p1,p2,p3);
default:
return every_pred__11371.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11371.cljs$lang$applyTo;
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
var some_fn__11809 = (function (p){
return (function() {
var sp1 = null;
var sp1__11816 = (function (){
return null;
});
var sp1__11817 = (function (x){
return p.call(null,x);
});
var sp1__11818 = (function (x,y){
var or__3548__auto____11491 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11491))
{return or__3548__auto____11491;
} else
{return p.call(null,y);
}
});
var sp1__11819 = (function (x,y,z){
var or__3548__auto____11494 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11494))
{return or__3548__auto____11494;
} else
{var or__3548__auto____11496 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11496))
{return or__3548__auto____11496;
} else
{return p.call(null,z);
}
}
});
var sp1__11820 = (function() { 
var G__11831__delegate = function (x,y,z,args){
var or__3548__auto____11499 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11499))
{return or__3548__auto____11499;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11831 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11831__delegate.call(this, x, y, z, args);
};
G__11831.cljs$lang$maxFixedArity = 3;
G__11831.cljs$lang$applyTo = (function (arglist__11832){
var x = cljs.core.first(arglist__11832);
var y = cljs.core.first(cljs.core.next(arglist__11832));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11832)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11832)));
return G__11831__delegate.call(this, x, y, z, args);
});
return G__11831;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11816.call(this);
case  1 :
return sp1__11817.call(this,x);
case  2 :
return sp1__11818.call(this,x,y);
case  3 :
return sp1__11819.call(this,x,y,z);
default:
return sp1__11820.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11820.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11810 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11838 = (function (){
return null;
});
var sp2__11839 = (function (x){
var or__3548__auto____11602 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11602))
{return or__3548__auto____11602;
} else
{return p2.call(null,x);
}
});
var sp2__11840 = (function (x,y){
var or__3548__auto____11605 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11605))
{return or__3548__auto____11605;
} else
{var or__3548__auto____11607 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11607))
{return or__3548__auto____11607;
} else
{var or__3548__auto____11609 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11609))
{return or__3548__auto____11609;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11841 = (function (x,y,z){
var or__3548__auto____11611 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11611))
{return or__3548__auto____11611;
} else
{var or__3548__auto____11612 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11612))
{return or__3548__auto____11612;
} else
{var or__3548__auto____11613 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11613))
{return or__3548__auto____11613;
} else
{var or__3548__auto____11615 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11615))
{return or__3548__auto____11615;
} else
{var or__3548__auto____11616 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11616))
{return or__3548__auto____11616;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11842 = (function() { 
var G__11847__delegate = function (x,y,z,args){
var or__3548__auto____11617 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11617))
{return or__3548__auto____11617;
} else
{return cljs.core.some.call(null,(function (p1__11186_SHARP_){
var or__3548__auto____11618 = p1.call(null,p1__11186_SHARP_);

if(cljs.core.truth_(or__3548__auto____11618))
{return or__3548__auto____11618;
} else
{return p2.call(null,p1__11186_SHARP_);
}
}),args);
}
};
var G__11847 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11847__delegate.call(this, x, y, z, args);
};
G__11847.cljs$lang$maxFixedArity = 3;
G__11847.cljs$lang$applyTo = (function (arglist__11849){
var x = cljs.core.first(arglist__11849);
var y = cljs.core.first(cljs.core.next(arglist__11849));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11849)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11849)));
return G__11847__delegate.call(this, x, y, z, args);
});
return G__11847;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11838.call(this);
case  1 :
return sp2__11839.call(this,x);
case  2 :
return sp2__11840.call(this,x,y);
case  3 :
return sp2__11841.call(this,x,y,z);
default:
return sp2__11842.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11842.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11811 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11856 = (function (){
return null;
});
var sp3__11857 = (function (x){
var or__3548__auto____11623 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11623))
{return or__3548__auto____11623;
} else
{var or__3548__auto____11626 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11626))
{return or__3548__auto____11626;
} else
{return p3.call(null,x);
}
}
});
var sp3__11858 = (function (x,y){
var or__3548__auto____11631 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11631))
{return or__3548__auto____11631;
} else
{var or__3548__auto____11632 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11632))
{return or__3548__auto____11632;
} else
{var or__3548__auto____11635 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11635))
{return or__3548__auto____11635;
} else
{var or__3548__auto____11638 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11638))
{return or__3548__auto____11638;
} else
{var or__3548__auto____11642 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11642))
{return or__3548__auto____11642;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11859 = (function (x,y,z){
var or__3548__auto____11644 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11644))
{return or__3548__auto____11644;
} else
{var or__3548__auto____11770 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11770))
{return or__3548__auto____11770;
} else
{var or__3548__auto____11771 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11771))
{return or__3548__auto____11771;
} else
{var or__3548__auto____11772 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11772))
{return or__3548__auto____11772;
} else
{var or__3548__auto____11777 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11777))
{return or__3548__auto____11777;
} else
{var or__3548__auto____11779 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11779))
{return or__3548__auto____11779;
} else
{var or__3548__auto____11786 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11786))
{return or__3548__auto____11786;
} else
{var or__3548__auto____11787 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11787))
{return or__3548__auto____11787;
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
var sp3__11860 = (function() { 
var G__11875__delegate = function (x,y,z,args){
var or__3548__auto____11789 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11789))
{return or__3548__auto____11789;
} else
{return cljs.core.some.call(null,(function (p1__11212_SHARP_){
var or__3548__auto____11790 = p1.call(null,p1__11212_SHARP_);

if(cljs.core.truth_(or__3548__auto____11790))
{return or__3548__auto____11790;
} else
{var or__3548__auto____11793 = p2.call(null,p1__11212_SHARP_);

if(cljs.core.truth_(or__3548__auto____11793))
{return or__3548__auto____11793;
} else
{return p3.call(null,p1__11212_SHARP_);
}
}
}),args);
}
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
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11856.call(this);
case  1 :
return sp3__11857.call(this,x);
case  2 :
return sp3__11858.call(this,x,y);
case  3 :
return sp3__11859.call(this,x,y,z);
default:
return sp3__11860.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11860.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11812 = (function() { 
var G__11880__delegate = function (p1,p2,p3,ps){
var ps__11795 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11882 = (function (){
return null;
});
var spn__11884 = (function (x){
return cljs.core.some.call(null,(function (p1__11214_SHARP_){
return p1__11214_SHARP_.call(null,x);
}),ps__11795);
});
var spn__11885 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11215_SHARP_){
var or__3548__auto____11803 = p1__11215_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11803))
{return or__3548__auto____11803;
} else
{return p1__11215_SHARP_.call(null,y);
}
}),ps__11795);
});
var spn__11886 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11217_SHARP_){
var or__3548__auto____11804 = p1__11217_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11804))
{return or__3548__auto____11804;
} else
{var or__3548__auto____11805 = p1__11217_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11805))
{return or__3548__auto____11805;
} else
{return p1__11217_SHARP_.call(null,z);
}
}
}),ps__11795);
});
var spn__11887 = (function() { 
var G__11894__delegate = function (x,y,z,args){
var or__3548__auto____11806 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11806))
{return or__3548__auto____11806;
} else
{return cljs.core.some.call(null,(function (p1__11218_SHARP_){
return cljs.core.some.call(null,p1__11218_SHARP_,args);
}),ps__11795);
}
};
var G__11894 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11894__delegate.call(this, x, y, z, args);
};
G__11894.cljs$lang$maxFixedArity = 3;
G__11894.cljs$lang$applyTo = (function (arglist__11899){
var x = cljs.core.first(arglist__11899);
var y = cljs.core.first(cljs.core.next(arglist__11899));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11899)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11899)));
return G__11894__delegate.call(this, x, y, z, args);
});
return G__11894;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11882.call(this);
case  1 :
return spn__11884.call(this,x);
case  2 :
return spn__11885.call(this,x,y);
case  3 :
return spn__11886.call(this,x,y,z);
default:
return spn__11887.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11887.cljs$lang$applyTo;
return spn;
})()
};
var G__11880 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11880__delegate.call(this, p1, p2, p3, ps);
};
G__11880.cljs$lang$maxFixedArity = 3;
G__11880.cljs$lang$applyTo = (function (arglist__11902){
var p1 = cljs.core.first(arglist__11902);
var p2 = cljs.core.first(cljs.core.next(arglist__11902));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11902)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11902)));
return G__11880__delegate.call(this, p1, p2, p3, ps);
});
return G__11880;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11809.call(this,p1);
case  2 :
return some_fn__11810.call(this,p1,p2);
case  3 :
return some_fn__11811.call(this,p1,p2,p3);
default:
return some_fn__11812.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11812.cljs$lang$applyTo;
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
var map__11934 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11908 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11908))
{var s__11910 = temp__3698__auto____11908;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11910)),map.call(null,f,cljs.core.rest.call(null,s__11910)));
} else
{return null;
}
})));
});
var map__11935 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11911 = cljs.core.seq.call(null,c1);
var s2__11913 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11916 = s1__11911;

if(cljs.core.truth_(and__3546__auto____11916))
{return s2__11913;
} else
{return and__3546__auto____11916;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11911),cljs.core.first.call(null,s2__11913)),map.call(null,f,cljs.core.rest.call(null,s1__11911),cljs.core.rest.call(null,s2__11913)));
} else
{return null;
}
})));
});
var map__11936 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11919 = cljs.core.seq.call(null,c1);
var s2__11920 = cljs.core.seq.call(null,c2);
var s3__11921 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11922 = s1__11919;

if(cljs.core.truth_(and__3546__auto____11922))
{var and__3546__auto____11923 = s2__11920;

if(cljs.core.truth_(and__3546__auto____11923))
{return s3__11921;
} else
{return and__3546__auto____11923;
}
} else
{return and__3546__auto____11922;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11919),cljs.core.first.call(null,s2__11920),cljs.core.first.call(null,s3__11921)),map.call(null,f,cljs.core.rest.call(null,s1__11919),cljs.core.rest.call(null,s2__11920),cljs.core.rest.call(null,s3__11921)));
} else
{return null;
}
})));
});
var map__11937 = (function() { 
var G__11944__delegate = function (f,c1,c2,c3,colls){
var step__11933 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11929 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11929)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11929),step.call(null,map.call(null,cljs.core.rest,ss__11929)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11481_SHARP_){
return cljs.core.apply.call(null,f,p1__11481_SHARP_);
}),step__11933.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11944 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11944__delegate.call(this, f, c1, c2, c3, colls);
};
G__11944.cljs$lang$maxFixedArity = 4;
G__11944.cljs$lang$applyTo = (function (arglist__11948){
var f = cljs.core.first(arglist__11948);
var c1 = cljs.core.first(cljs.core.next(arglist__11948));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11948)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11948))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11948))));
return G__11944__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11944;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11934.call(this,f,c1);
case  3 :
return map__11935.call(this,f,c1,c2);
case  4 :
return map__11936.call(this,f,c1,c2,c3);
default:
return map__11937.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11937.cljs$lang$applyTo;
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
{var temp__3698__auto____11955 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11955))
{var s__11956 = temp__3698__auto____11955;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11956),take.call(null,(n - 1),cljs.core.rest.call(null,s__11956)));
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
var step__11966 = (function (n,coll){
while(true){
var s__11963 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11964 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11964))
{return s__11963;
} else
{return and__3546__auto____11964;
}
})()))
{{
var G__12011 = (n - 1);
var G__12012 = cljs.core.rest.call(null,s__11963);
n = G__12011;
coll = G__12012;
continue;
}
} else
{return s__11963;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11966.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12015 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12016 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12015.call(this,n);
case  2 :
return drop_last__12016.call(this,n,s);
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
var s__12023 = cljs.core.seq.call(null,coll);
var lead__12025 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12025))
{{
var G__12029 = cljs.core.next.call(null,s__12023);
var G__12030 = cljs.core.next.call(null,lead__12025);
s__12023 = G__12029;
lead__12025 = G__12030;
continue;
}
} else
{return s__12023;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12036 = (function (pred,coll){
while(true){
var s__12031 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12032 = s__12031;

if(cljs.core.truth_(and__3546__auto____12032))
{return pred.call(null,cljs.core.first.call(null,s__12031));
} else
{return and__3546__auto____12032;
}
})()))
{{
var G__12045 = pred;
var G__12046 = cljs.core.rest.call(null,s__12031);
pred = G__12045;
coll = G__12046;
continue;
}
} else
{return s__12031;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12036.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12047 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12047))
{var s__12048 = temp__3698__auto____12047;

return cljs.core.concat.call(null,s__12048,cycle.call(null,s__12048));
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
var repeat__12060 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12061 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12060.call(this,n);
case  2 :
return repeat__12061.call(this,n,x);
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
var repeatedly__12071 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12072 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12071.call(this,n);
case  2 :
return repeatedly__12072.call(this,n,f);
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
var interleave__12087 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12076 = cljs.core.seq.call(null,c1);
var s2__12077 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12081 = s1__12076;

if(cljs.core.truth_(and__3546__auto____12081))
{return s2__12077;
} else
{return and__3546__auto____12081;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12076),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12077),interleave.call(null,cljs.core.rest.call(null,s1__12076),cljs.core.rest.call(null,s2__12077))));
} else
{return null;
}
})));
});
var interleave__12089 = (function() { 
var G__12093__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12083 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12083)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12083),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12083)));
} else
{return null;
}
})));
};
var G__12093 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12093__delegate.call(this, c1, c2, colls);
};
G__12093.cljs$lang$maxFixedArity = 2;
G__12093.cljs$lang$applyTo = (function (arglist__12099){
var c1 = cljs.core.first(arglist__12099);
var c2 = cljs.core.first(cljs.core.next(arglist__12099));
var colls = cljs.core.rest(cljs.core.next(arglist__12099));
return G__12093__delegate.call(this, c1, c2, colls);
});
return G__12093;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12087.call(this,c1,c2);
default:
return interleave__12089.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12089.cljs$lang$applyTo;
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
var cat__12106 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12102 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12102))
{var coll__12103 = temp__3695__auto____12102;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12103),cat.call(null,cljs.core.rest.call(null,coll__12103),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12106.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12108 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12109 = (function() { 
var G__12111__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12111 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12111__delegate.call(this, f, coll, colls);
};
G__12111.cljs$lang$maxFixedArity = 2;
G__12111.cljs$lang$applyTo = (function (arglist__12112){
var f = cljs.core.first(arglist__12112);
var coll = cljs.core.first(cljs.core.next(arglist__12112));
var colls = cljs.core.rest(cljs.core.next(arglist__12112));
return G__12111__delegate.call(this, f, coll, colls);
});
return G__12111;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12108.call(this,f,coll);
default:
return mapcat__12109.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12109.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12113 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12113))
{var s__12114 = temp__3698__auto____12113;

var f__12115 = cljs.core.first.call(null,s__12114);
var r__12116 = cljs.core.rest.call(null,s__12114);

if(cljs.core.truth_(pred.call(null,f__12115)))
{return cljs.core.cons.call(null,f__12115,filter.call(null,pred,r__12116));
} else
{return filter.call(null,pred,r__12116);
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
var walk__12123 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12123.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12122_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12122_SHARP_));
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
var partition__12204 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12206 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12197 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12197))
{var s__12198 = temp__3698__auto____12197;

var p__12199 = cljs.core.take.call(null,n,s__12198);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12199))))
{return cljs.core.cons.call(null,p__12199,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12198)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12207 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12200 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12200))
{var s__12201 = temp__3698__auto____12200;

var p__12202 = cljs.core.take.call(null,n,s__12201);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12202))))
{return cljs.core.cons.call(null,p__12202,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12201)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12202,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12204.call(this,n,step);
case  3 :
return partition__12206.call(this,n,step,pad);
case  4 :
return partition__12207.call(this,n,step,pad,coll);
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
var get_in__12226 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12227 = (function (m,ks,not_found){
var sentinel__12218 = cljs.core.lookup_sentinel;
var m__12219 = m;
var ks__12221 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12221))
{var m__12225 = cljs.core.get.call(null,m__12219,cljs.core.first.call(null,ks__12221),sentinel__12218);

if(cljs.core.truth_((sentinel__12218 === m__12225)))
{return not_found;
} else
{{
var G__12229 = sentinel__12218;
var G__12230 = m__12225;
var G__12231 = cljs.core.next.call(null,ks__12221);
sentinel__12218 = G__12229;
m__12219 = G__12230;
ks__12221 = G__12231;
continue;
}
}
} else
{return m__12219;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12226.call(this,m,ks);
case  3 :
return get_in__12227.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12232,v){
var vec__12233__12234 = p__12232;
var k__12235 = cljs.core.nth.call(null,vec__12233__12234,0,null);
var ks__12236 = cljs.core.nthnext.call(null,vec__12233__12234,1);

if(cljs.core.truth_(ks__12236))
{return cljs.core.assoc.call(null,m,k__12235,assoc_in.call(null,cljs.core.get.call(null,m,k__12235),ks__12236,v));
} else
{return cljs.core.assoc.call(null,m,k__12235,v);
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
var update_in__delegate = function (m,p__12244,f,args){
var vec__12246__12247 = p__12244;
var k__12249 = cljs.core.nth.call(null,vec__12246__12247,0,null);
var ks__12250 = cljs.core.nthnext.call(null,vec__12246__12247,1);

if(cljs.core.truth_(ks__12250))
{return cljs.core.assoc.call(null,m,k__12249,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12249),ks__12250,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12249,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12249),args));
}
};
var update_in = function (m,p__12244,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12244, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12256){
var m = cljs.core.first(arglist__12256);
var p__12244 = cljs.core.first(cljs.core.next(arglist__12256));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12256)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12256)));
return update_in__delegate.call(this, m, p__12244, f, args);
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
var this__12264 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12314 = null;
var G__12314__12315 = (function (coll,k){
var this__12266 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12314__12316 = (function (coll,k,not_found){
var this__12267 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12314 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12314__12315.call(this,coll,k);
case  3 :
return G__12314__12316.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12314;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12268 = this;
var new_array__12269 = cljs.core.aclone.call(null,this__12268.array);

(new_array__12269[k] = v);
return (new cljs.core.Vector(this__12268.meta,new_array__12269));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12318 = null;
var G__12318__12319 = (function (coll,k){
var this__12270 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12318__12320 = (function (coll,k,not_found){
var this__12271 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12318 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12318__12319.call(this,coll,k);
case  3 :
return G__12318__12320.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12318;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12272 = this;
var new_array__12273 = cljs.core.aclone.call(null,this__12272.array);

new_array__12273.push(o);
return (new cljs.core.Vector(this__12272.meta,new_array__12273));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12327 = null;
var G__12327__12328 = (function (v,f){
var this__12274 = this;
return cljs.core.ci_reduce.call(null,this__12274.array,f);
});
var G__12327__12329 = (function (v,f,start){
var this__12275 = this;
return cljs.core.ci_reduce.call(null,this__12275.array,f,start);
});
G__12327 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12327__12328.call(this,v,f);
case  3 :
return G__12327__12329.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12327;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12276 = this;
if(cljs.core.truth_((this__12276.array.length > 0)))
{var vector_seq__12281 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12276.array.length)))
{return cljs.core.cons.call(null,(this__12276.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12281.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12283 = this;
return this__12283.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12285 = this;
var count__12287 = this__12285.array.length;

if(cljs.core.truth_((count__12287 > 0)))
{return (this__12285.array[(count__12287 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12288 = this;
if(cljs.core.truth_((this__12288.array.length > 0)))
{var new_array__12289 = cljs.core.aclone.call(null,this__12288.array);

new_array__12289.pop();
return (new cljs.core.Vector(this__12288.meta,new_array__12289));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12293 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12295 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12296 = this;
return (new cljs.core.Vector(meta,this__12296.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12298 = this;
return this__12298.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12332 = null;
var G__12332__12333 = (function (coll,n){
var this__12301 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12302 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12302))
{return (n < this__12301.array.length);
} else
{return and__3546__auto____12302;
}
})()))
{return (this__12301.array[n]);
} else
{return null;
}
});
var G__12332__12334 = (function (coll,n,not_found){
var this__12306 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12307 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12307))
{return (n < this__12306.array.length);
} else
{return and__3546__auto____12307;
}
})()))
{return (this__12306.array[n]);
} else
{return not_found;
}
});
G__12332 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12332__12333.call(this,coll,n);
case  3 :
return G__12332__12334.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12332;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12308 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12308.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12348){
var args = cljs.core.seq( arglist__12348 );;
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
var this__12384 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12466 = null;
var G__12466__12467 = (function (coll,k){
var this__12413 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12466__12468 = (function (coll,k,not_found){
var this__12414 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12466 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12466__12467.call(this,coll,k);
case  3 :
return G__12466__12468.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12466;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12417 = this;
var v_pos__12418 = (this__12417.start + key);

return (new cljs.core.Subvec(this__12417.meta,cljs.core._assoc.call(null,this__12417.v,v_pos__12418,val),this__12417.start,((this__12417.end > (v_pos__12418 + 1)) ? this__12417.end : (v_pos__12418 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12474 = null;
var G__12474__12475 = (function (coll,k){
var this__12421 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12474__12476 = (function (coll,k,not_found){
var this__12422 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12474 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12474__12475.call(this,coll,k);
case  3 :
return G__12474__12476.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12474;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12425 = this;
return (new cljs.core.Subvec(this__12425.meta,cljs.core._assoc_n.call(null,this__12425.v,this__12425.end,o),this__12425.start,(this__12425.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12482 = null;
var G__12482__12483 = (function (coll,f){
var this__12429 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12482__12484 = (function (coll,f,start){
var this__12430 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12482 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12482__12483.call(this,coll,f);
case  3 :
return G__12482__12484.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12482;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12431 = this;
var subvec_seq__12438 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12431.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12431.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12438.call(null,this__12431.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12441 = this;
return (this__12441.end - this__12441.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12442 = this;
return cljs.core._nth.call(null,this__12442.v,(this__12442.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12444 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12444.start,this__12444.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12444.meta,this__12444.v,this__12444.start,(this__12444.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12447 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12449 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12451 = this;
return (new cljs.core.Subvec(meta,this__12451.v,this__12451.start,this__12451.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12453 = this;
return this__12453.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12491 = null;
var G__12491__12492 = (function (coll,n){
var this__12455 = this;
return cljs.core._nth.call(null,this__12455.v,(this__12455.start + n));
});
var G__12491__12493 = (function (coll,n,not_found){
var this__12457 = this;
return cljs.core._nth.call(null,this__12457.v,(this__12457.start + n),not_found);
});
G__12491 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12491__12492.call(this,coll,n);
case  3 :
return G__12491__12493.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12491;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12460 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12460.meta);
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
var subvec__12543 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12544 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12543.call(this,v,start);
case  3 :
return subvec__12544.call(this,v,start,end);
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
var this__12565 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12566 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12568 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12569 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12569.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12576 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12578 = this;
return cljs.core._first.call(null,this__12578.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12579 = this;
var temp__3695__auto____12580 = cljs.core.next.call(null,this__12579.front);

if(cljs.core.truth_(temp__3695__auto____12580))
{var f1__12581 = temp__3695__auto____12580;

return (new cljs.core.PersistentQueueSeq(this__12579.meta,f1__12581,this__12579.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12579.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12579.meta,this__12579.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12588 = this;
return this__12588.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12590 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12590.front,this__12590.rear));
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
var this__12609 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12610 = this;
if(cljs.core.truth_(this__12610.front))
{return (new cljs.core.PersistentQueue(this__12610.meta,(this__12610.count + 1),this__12610.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12612 = this__12610.rear;

if(cljs.core.truth_(or__3548__auto____12612))
{return or__3548__auto____12612;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12610.meta,(this__12610.count + 1),cljs.core.conj.call(null,this__12610.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12617 = this;
var rear__12622 = cljs.core.seq.call(null,this__12617.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12623 = this__12617.front;

if(cljs.core.truth_(or__3548__auto____12623))
{return or__3548__auto____12623;
} else
{return rear__12622;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12617.front,cljs.core.seq.call(null,rear__12622)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12624 = this;
return this__12624.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12629 = this;
return cljs.core._first.call(null,this__12629.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12633 = this;
if(cljs.core.truth_(this__12633.front))
{var temp__3695__auto____12635 = cljs.core.next.call(null,this__12633.front);

if(cljs.core.truth_(temp__3695__auto____12635))
{var f1__12636 = temp__3695__auto____12635;

return (new cljs.core.PersistentQueue(this__12633.meta,(this__12633.count - 1),f1__12636,this__12633.rear));
} else
{return (new cljs.core.PersistentQueue(this__12633.meta,(this__12633.count - 1),cljs.core.seq.call(null,this__12633.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12641 = this;
return cljs.core.first.call(null,this__12641.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12642 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12644 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12660 = this;
return (new cljs.core.PersistentQueue(meta,this__12660.count,this__12660.front,this__12660.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12662 = this;
return this__12662.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12664 = this;
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
var this__12703 = this;
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
var len__12725 = array.length;

var i__12727 = 0;

while(true){
if(cljs.core.truth_((i__12727 < len__12725)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12727]))))
{return i__12727;
} else
{{
var G__12750 = (i__12727 + incr);
i__12727 = G__12750;
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
var obj_map_contains_key_QMARK___12760 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12761 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12759 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12759))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12759;
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
return obj_map_contains_key_QMARK___12760.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12761.call(this,k,strobj,true_val,false_val);
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
var this__12766 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12818 = null;
var G__12818__12819 = (function (coll,k){
var this__12767 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12818__12820 = (function (coll,k,not_found){
var this__12769 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12769.strobj,(this__12769.strobj[k]),not_found);
});
G__12818 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12818__12819.call(this,coll,k);
case  3 :
return G__12818__12820.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12818;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12770 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12771 = goog.object.clone.call(null,this__12770.strobj);
var overwrite_QMARK___12772 = new_strobj__12771.hasOwnProperty(k);

(new_strobj__12771[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12772))
{return (new cljs.core.ObjMap(this__12770.meta,this__12770.keys,new_strobj__12771));
} else
{var new_keys__12773 = cljs.core.aclone.call(null,this__12770.keys);

new_keys__12773.push(k);
return (new cljs.core.ObjMap(this__12770.meta,new_keys__12773,new_strobj__12771));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12770.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12775 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12775.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12828 = null;
var G__12828__12829 = (function (coll,k){
var this__12777 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12828__12830 = (function (coll,k,not_found){
var this__12779 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12828 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12828__12829.call(this,coll,k);
case  3 :
return G__12828__12830.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12828;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12781 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12787 = this;
if(cljs.core.truth_((this__12787.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12765_SHARP_){
return cljs.core.vector.call(null,p1__12765_SHARP_,(this__12787.strobj[p1__12765_SHARP_]));
}),this__12787.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12792 = this;
return this__12792.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12794 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12798 = this;
return (new cljs.core.ObjMap(meta,this__12798.keys,this__12798.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12800 = this;
return this__12800.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12803 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12803.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12805 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12807 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12807))
{return this__12805.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12807;
}
})()))
{var new_keys__12810 = cljs.core.aclone.call(null,this__12805.keys);
var new_strobj__12811 = goog.object.clone.call(null,this__12805.strobj);

new_keys__12810.splice(cljs.core.scan_array.call(null,1,k,new_keys__12810),1);
cljs.core.js_delete.call(null,new_strobj__12811,k);
return (new cljs.core.ObjMap(this__12805.meta,new_keys__12810,new_strobj__12811));
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
var this__12919 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13018 = null;
var G__13018__13019 = (function (coll,k){
var this__12922 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13018__13020 = (function (coll,k,not_found){
var this__12924 = this;
var bucket__12927 = (this__12924.hashobj[cljs.core.hash.call(null,k)]);
var i__12929 = (cljs.core.truth_(bucket__12927)?cljs.core.scan_array.call(null,2,k,bucket__12927):null);

if(cljs.core.truth_(i__12929))
{return (bucket__12927[(i__12929 + 1)]);
} else
{return not_found;
}
});
G__13018 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13018__13019.call(this,coll,k);
case  3 :
return G__13018__13020.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13018;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12933 = this;
var h__12964 = cljs.core.hash.call(null,k);
var bucket__12967 = (this__12933.hashobj[h__12964]);

if(cljs.core.truth_(bucket__12967))
{var new_bucket__12970 = cljs.core.aclone.call(null,bucket__12967);
var new_hashobj__12971 = goog.object.clone.call(null,this__12933.hashobj);

(new_hashobj__12971[h__12964] = new_bucket__12970);
var temp__3695__auto____12973 = cljs.core.scan_array.call(null,2,k,new_bucket__12970);

if(cljs.core.truth_(temp__3695__auto____12973))
{var i__12974 = temp__3695__auto____12973;

(new_bucket__12970[(i__12974 + 1)] = v);
return (new cljs.core.HashMap(this__12933.meta,this__12933.count,new_hashobj__12971));
} else
{new_bucket__12970.push(k,v);
return (new cljs.core.HashMap(this__12933.meta,(this__12933.count + 1),new_hashobj__12971));
}
} else
{var new_hashobj__12981 = goog.object.clone.call(null,this__12933.hashobj);

(new_hashobj__12981[h__12964] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12933.meta,(this__12933.count + 1),new_hashobj__12981));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12983 = this;
var bucket__12985 = (this__12983.hashobj[cljs.core.hash.call(null,k)]);
var i__12986 = (cljs.core.truth_(bucket__12985)?cljs.core.scan_array.call(null,2,k,bucket__12985):null);

if(cljs.core.truth_(i__12986))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13031 = null;
var G__13031__13032 = (function (coll,k){
var this__12988 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13031__13033 = (function (coll,k,not_found){
var this__12989 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13031 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13031__13032.call(this,coll,k);
case  3 :
return G__13031__13033.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13031;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12991 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12997 = this;
if(cljs.core.truth_((this__12997.count > 0)))
{var hashes__13001 = cljs.core.js_keys.call(null,this__12997.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12901_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12997.hashobj[p1__12901_SHARP_])));
}),hashes__13001);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13004 = this;
return this__13004.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13006 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13007 = this;
return (new cljs.core.HashMap(meta,this__13007.count,this__13007.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13008 = this;
return this__13008.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13009 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13009.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13010 = this;
var h__13011 = cljs.core.hash.call(null,k);
var bucket__13012 = (this__13010.hashobj[h__13011]);
var i__13013 = (cljs.core.truth_(bucket__13012)?cljs.core.scan_array.call(null,2,k,bucket__13012):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13013)))
{return coll;
} else
{var new_hashobj__13014 = goog.object.clone.call(null,this__13010.hashobj);

if(cljs.core.truth_((3 > bucket__13012.length)))
{cljs.core.js_delete.call(null,new_hashobj__13014,h__13011);
} else
{var new_bucket__13015 = cljs.core.aclone.call(null,bucket__13012);

new_bucket__13015.splice(i__13013,2);
(new_hashobj__13014[h__13011] = new_bucket__13015);
}
return (new cljs.core.HashMap(this__13010.meta,(this__13010.count - 1),new_hashobj__13014));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13074 = ks.length;

var i__13075 = 0;
var out__13076 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13075 < len__13074)))
{{
var G__13077 = (i__13075 + 1);
var G__13078 = cljs.core.assoc.call(null,out__13076,(ks[i__13075]),(vs[i__13075]));
i__13075 = G__13077;
out__13076 = G__13078;
continue;
}
} else
{return out__13076;
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
var in$__13079 = cljs.core.seq.call(null,keyvals);
var out__13080 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13079))
{{
var G__13085 = cljs.core.nnext.call(null,in$__13079);
var G__13087 = cljs.core.assoc.call(null,out__13080,cljs.core.first.call(null,in$__13079),cljs.core.second.call(null,in$__13079));
in$__13079 = G__13085;
out__13080 = G__13087;
continue;
}
} else
{return out__13080;
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
hash_map.cljs$lang$applyTo = (function (arglist__13090){
var keyvals = cljs.core.seq( arglist__13090 );;
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
{return cljs.core.reduce.call(null,(function (p1__13097_SHARP_,p2__13098_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13106 = p1__13097_SHARP_;

if(cljs.core.truth_(or__3548__auto____13106))
{return or__3548__auto____13106;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13098_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13113){
var maps = cljs.core.seq( arglist__13113 );;
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
{var merge_entry__13124 = (function (m,e){
var k__13119 = cljs.core.first.call(null,e);
var v__13121 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13119)))
{return cljs.core.assoc.call(null,m,k__13119,f.call(null,cljs.core.get.call(null,m,k__13119),v__13121));
} else
{return cljs.core.assoc.call(null,m,k__13119,v__13121);
}
});
var merge2__13129 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13124,(function (){var or__3548__auto____13126 = m1;

if(cljs.core.truth_(or__3548__auto____13126))
{return or__3548__auto____13126;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13129,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13146){
var f = cljs.core.first(arglist__13146);
var maps = cljs.core.rest(arglist__13146);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13154 = cljs.core.ObjMap.fromObject([],{});
var keys__13156 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13156))
{var key__13158 = cljs.core.first.call(null,keys__13156);
var entry__13162 = cljs.core.get.call(null,map,key__13158,"﷐'user/not-found");

{
var G__13169 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13162,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13154,key__13158,entry__13162):ret__13154);
var G__13170 = cljs.core.next.call(null,keys__13156);
ret__13154 = G__13169;
keys__13156 = G__13170;
continue;
}
} else
{return ret__13154;
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
var this__13208 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13241 = null;
var G__13241__13242 = (function (coll,v){
var this__13209 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13241__13243 = (function (coll,v,not_found){
var this__13210 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13210.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13241 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13241__13242.call(this,coll,v);
case  3 :
return G__13241__13243.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13241;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13247 = null;
var G__13247__13249 = (function (coll,k){
var this__13211 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13247__13250 = (function (coll,k,not_found){
var this__13214 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13247 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13247__13249.call(this,coll,k);
case  3 :
return G__13247__13250.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13247;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13220 = this;
return (new cljs.core.Set(this__13220.meta,cljs.core.assoc.call(null,this__13220.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13221 = this;
return cljs.core.keys.call(null,this__13221.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13224 = this;
return (new cljs.core.Set(this__13224.meta,cljs.core.dissoc.call(null,this__13224.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13225 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13226 = this;
var and__3546__auto____13231 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13231))
{var and__3546__auto____13232 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13232))
{return cljs.core.every_QMARK_.call(null,(function (p1__13151_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13151_SHARP_);
}),other);
} else
{return and__3546__auto____13232;
}
} else
{return and__3546__auto____13231;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13233 = this;
return (new cljs.core.Set(meta,this__13233.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13234 = this;
return this__13234.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13237 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13237.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13267 = cljs.core.seq.call(null,coll);
var out__13268 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13267))))
{{
var G__13269 = cljs.core.rest.call(null,in$__13267);
var G__13270 = cljs.core.conj.call(null,out__13268,cljs.core.first.call(null,in$__13267));
in$__13267 = G__13269;
out__13268 = G__13270;
continue;
}
} else
{return out__13268;
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
{var n__13276 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13279 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13279))
{var e__13280 = temp__3695__auto____13279;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13280));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13276,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13264_SHARP_){
var temp__3695__auto____13284 = cljs.core.find.call(null,smap,p1__13264_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13284))
{var e__13285 = temp__3695__auto____13284;

return cljs.core.second.call(null,e__13285);
} else
{return p1__13264_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13404 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13295,seen){
while(true){
var vec__13351__13353 = p__13295;
var f__13355 = cljs.core.nth.call(null,vec__13351__13353,0,null);
var xs__13356 = vec__13351__13353;

var temp__3698__auto____13401 = cljs.core.seq.call(null,xs__13356);

if(cljs.core.truth_(temp__3698__auto____13401))
{var s__13402 = temp__3698__auto____13401;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13355)))
{{
var G__13407 = cljs.core.rest.call(null,s__13402);
var G__13409 = seen;
p__13295 = G__13407;
seen = G__13409;
continue;
}
} else
{return cljs.core.cons.call(null,f__13355,step.call(null,cljs.core.rest.call(null,s__13402),cljs.core.conj.call(null,seen,f__13355)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13404.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13420 = cljs.core.Vector.fromArray([]);
var s__13421 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13421)))
{{
var G__13426 = cljs.core.conj.call(null,ret__13420,cljs.core.first.call(null,s__13421));
var G__13427 = cljs.core.next.call(null,s__13421);
ret__13420 = G__13426;
s__13421 = G__13427;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13420);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13436 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13436))
{return or__3548__auto____13436;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13437 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13437 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13437 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13448 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13448))
{return or__3548__auto____13448;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13451 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13451 > -1)))
{return cljs.core.subs.call(null,x,2,i__13451);
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
var map__13464 = cljs.core.ObjMap.fromObject([],{});
var ks__13467 = cljs.core.seq.call(null,keys);
var vs__13468 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13469 = ks__13467;

if(cljs.core.truth_(and__3546__auto____13469))
{return vs__13468;
} else
{return and__3546__auto____13469;
}
})()))
{{
var G__13588 = cljs.core.assoc.call(null,map__13464,cljs.core.first.call(null,ks__13467),cljs.core.first.call(null,vs__13468));
var G__13589 = cljs.core.next.call(null,ks__13467);
var G__13590 = cljs.core.next.call(null,vs__13468);
map__13464 = G__13588;
ks__13467 = G__13589;
vs__13468 = G__13590;
continue;
}
} else
{return map__13464;
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
var max_key__13601 = (function (k,x){
return x;
});
var max_key__13602 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13603 = (function() { 
var G__13607__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13460_SHARP_,p2__13461_SHARP_){
return max_key.call(null,k,p1__13460_SHARP_,p2__13461_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13607 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13607__delegate.call(this, k, x, y, more);
};
G__13607.cljs$lang$maxFixedArity = 3;
G__13607.cljs$lang$applyTo = (function (arglist__13609){
var k = cljs.core.first(arglist__13609);
var x = cljs.core.first(cljs.core.next(arglist__13609));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13609)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13609)));
return G__13607__delegate.call(this, k, x, y, more);
});
return G__13607;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13601.call(this,k,x);
case  3 :
return max_key__13602.call(this,k,x,y);
default:
return max_key__13603.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13603.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13644 = (function (k,x){
return x;
});
var min_key__13645 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13646 = (function() { 
var G__13649__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13591_SHARP_,p2__13592_SHARP_){
return min_key.call(null,k,p1__13591_SHARP_,p2__13592_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13649 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13649__delegate.call(this, k, x, y, more);
};
G__13649.cljs$lang$maxFixedArity = 3;
G__13649.cljs$lang$applyTo = (function (arglist__13652){
var k = cljs.core.first(arglist__13652);
var x = cljs.core.first(cljs.core.next(arglist__13652));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13652)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13652)));
return G__13649__delegate.call(this, k, x, y, more);
});
return G__13649;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13644.call(this,k,x);
case  3 :
return min_key__13645.call(this,k,x,y);
default:
return min_key__13646.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13646.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13664 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13665 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13659 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13659))
{var s__13661 = temp__3698__auto____13659;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13661),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13661)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13664.call(this,n,step);
case  3 :
return partition_all__13665.call(this,n,step,coll);
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
var temp__3698__auto____13672 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13672))
{var s__13678 = temp__3698__auto____13672;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13678))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13678),take_while.call(null,pred,cljs.core.rest.call(null,s__13678)));
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
var this__13700 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13703 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13758 = null;
var G__13758__13759 = (function (rng,f){
var this__13708 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13758__13760 = (function (rng,f,s){
var this__13710 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13758 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13758__13759.call(this,rng,f);
case  3 :
return G__13758__13760.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13758;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13713 = this;
var comp__13715 = (cljs.core.truth_((this__13713.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13715.call(null,this__13713.start,this__13713.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13719 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13719.end - this__13719.start) / this__13719.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13721 = this;
return this__13721.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13722 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13722.meta,(this__13722.start + this__13722.step),this__13722.end,this__13722.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13724 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13726 = this;
return (new cljs.core.Range(meta,this__13726.start,this__13726.end,this__13726.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13732 = this;
return this__13732.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13778 = null;
var G__13778__13779 = (function (rng,n){
var this__13734 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13734.start + (n * this__13734.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13736 = (this__13734.start > this__13734.end);

if(cljs.core.truth_(and__3546__auto____13736))
{return cljs.core._EQ_.call(null,this__13734.step,0);
} else
{return and__3546__auto____13736;
}
})()))
{return this__13734.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13778__13780 = (function (rng,n,not_found){
var this__13742 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13742.start + (n * this__13742.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13748 = (this__13742.start > this__13742.end);

if(cljs.core.truth_(and__3546__auto____13748))
{return cljs.core._EQ_.call(null,this__13742.step,0);
} else
{return and__3546__auto____13748;
}
})()))
{return this__13742.start;
} else
{return not_found;
}
}
});
G__13778 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13778__13779.call(this,rng,n);
case  3 :
return G__13778__13780.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13778;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13750 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13750.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13798 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13799 = (function (end){
return range.call(null,0,end,1);
});
var range__13800 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13801 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13798.call(this);
case  1 :
return range__13799.call(this,start);
case  2 :
return range__13800.call(this,start,end);
case  3 :
return range__13801.call(this,start,end,step);
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
var temp__3698__auto____13819 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13819))
{var s__13821 = temp__3698__auto____13819;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13821),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13821)));
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
var temp__3698__auto____13841 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13841))
{var s__13842 = temp__3698__auto____13841;

var fst__13844 = cljs.core.first.call(null,s__13842);
var fv__13845 = f.call(null,fst__13844);
var run__13847 = cljs.core.cons.call(null,fst__13844,cljs.core.take_while.call(null,(function (p1__13828_SHARP_){
return cljs.core._EQ_.call(null,fv__13845,f.call(null,p1__13828_SHARP_));
}),cljs.core.next.call(null,s__13842)));

return cljs.core.cons.call(null,run__13847,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13847),s__13842))));
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
var reductions__13907 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13899 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13899))
{var s__13900 = temp__3695__auto____13899;

return reductions.call(null,f,cljs.core.first.call(null,s__13900),cljs.core.rest.call(null,s__13900));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13908 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13902 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13902))
{var s__13903 = temp__3698__auto____13902;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13903)),cljs.core.rest.call(null,s__13903));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13907.call(this,f,init);
case  3 :
return reductions__13908.call(this,f,init,coll);
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
var juxt__13953 = (function (f){
return (function() {
var G__13961 = null;
var G__13961__13963 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13961__13964 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13961__13965 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13961__13966 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13961__13967 = (function() { 
var G__14006__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14006 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14006__delegate.call(this, x, y, z, args);
};
G__14006.cljs$lang$maxFixedArity = 3;
G__14006.cljs$lang$applyTo = (function (arglist__14008){
var x = cljs.core.first(arglist__14008);
var y = cljs.core.first(cljs.core.next(arglist__14008));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14008)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14008)));
return G__14006__delegate.call(this, x, y, z, args);
});
return G__14006;
})()
;
G__13961 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13961__13963.call(this);
case  1 :
return G__13961__13964.call(this,x);
case  2 :
return G__13961__13965.call(this,x,y);
case  3 :
return G__13961__13966.call(this,x,y,z);
default:
return G__13961__13967.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13961.cljs$lang$maxFixedArity = 3;
G__13961.cljs$lang$applyTo = G__13961__13967.cljs$lang$applyTo;
return G__13961;
})()
});
var juxt__13954 = (function (f,g){
return (function() {
var G__14012 = null;
var G__14012__14013 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14012__14014 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14012__14015 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14012__14016 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14012__14017 = (function() { 
var G__14021__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14021 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14021__delegate.call(this, x, y, z, args);
};
G__14021.cljs$lang$maxFixedArity = 3;
G__14021.cljs$lang$applyTo = (function (arglist__14024){
var x = cljs.core.first(arglist__14024);
var y = cljs.core.first(cljs.core.next(arglist__14024));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14024)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14024)));
return G__14021__delegate.call(this, x, y, z, args);
});
return G__14021;
})()
;
G__14012 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14012__14013.call(this);
case  1 :
return G__14012__14014.call(this,x);
case  2 :
return G__14012__14015.call(this,x,y);
case  3 :
return G__14012__14016.call(this,x,y,z);
default:
return G__14012__14017.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14012.cljs$lang$maxFixedArity = 3;
G__14012.cljs$lang$applyTo = G__14012__14017.cljs$lang$applyTo;
return G__14012;
})()
});
var juxt__13956 = (function (f,g,h){
return (function() {
var G__14033 = null;
var G__14033__14034 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14033__14035 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14033__14036 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14033__14037 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14033__14038 = (function() { 
var G__14049__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14049 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14049__delegate.call(this, x, y, z, args);
};
G__14049.cljs$lang$maxFixedArity = 3;
G__14049.cljs$lang$applyTo = (function (arglist__14050){
var x = cljs.core.first(arglist__14050);
var y = cljs.core.first(cljs.core.next(arglist__14050));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14050)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14050)));
return G__14049__delegate.call(this, x, y, z, args);
});
return G__14049;
})()
;
G__14033 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14033__14034.call(this);
case  1 :
return G__14033__14035.call(this,x);
case  2 :
return G__14033__14036.call(this,x,y);
case  3 :
return G__14033__14037.call(this,x,y,z);
default:
return G__14033__14038.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14033.cljs$lang$maxFixedArity = 3;
G__14033.cljs$lang$applyTo = G__14033__14038.cljs$lang$applyTo;
return G__14033;
})()
});
var juxt__13957 = (function() { 
var G__14052__delegate = function (f,g,h,fs){
var fs__13935 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14053 = null;
var G__14053__14054 = (function (){
return cljs.core.reduce.call(null,(function (p1__13880_SHARP_,p2__13881_SHARP_){
return cljs.core.conj.call(null,p1__13880_SHARP_,p2__13881_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13935);
});
var G__14053__14055 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13882_SHARP_,p2__13883_SHARP_){
return cljs.core.conj.call(null,p1__13882_SHARP_,p2__13883_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13935);
});
var G__14053__14056 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13884_SHARP_,p2__13885_SHARP_){
return cljs.core.conj.call(null,p1__13884_SHARP_,p2__13885_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13935);
});
var G__14053__14057 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13886_SHARP_,p2__13887_SHARP_){
return cljs.core.conj.call(null,p1__13886_SHARP_,p2__13887_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13935);
});
var G__14053__14058 = (function() { 
var G__14080__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13888_SHARP_,p2__13889_SHARP_){
return cljs.core.conj.call(null,p1__13888_SHARP_,cljs.core.apply.call(null,p2__13889_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13935);
};
var G__14080 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14080__delegate.call(this, x, y, z, args);
};
G__14080.cljs$lang$maxFixedArity = 3;
G__14080.cljs$lang$applyTo = (function (arglist__14086){
var x = cljs.core.first(arglist__14086);
var y = cljs.core.first(cljs.core.next(arglist__14086));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14086)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14086)));
return G__14080__delegate.call(this, x, y, z, args);
});
return G__14080;
})()
;
G__14053 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14053__14054.call(this);
case  1 :
return G__14053__14055.call(this,x);
case  2 :
return G__14053__14056.call(this,x,y);
case  3 :
return G__14053__14057.call(this,x,y,z);
default:
return G__14053__14058.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14053.cljs$lang$maxFixedArity = 3;
G__14053.cljs$lang$applyTo = G__14053__14058.cljs$lang$applyTo;
return G__14053;
})()
};
var G__14052 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14052__delegate.call(this, f, g, h, fs);
};
G__14052.cljs$lang$maxFixedArity = 3;
G__14052.cljs$lang$applyTo = (function (arglist__14093){
var f = cljs.core.first(arglist__14093);
var g = cljs.core.first(cljs.core.next(arglist__14093));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14093)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14093)));
return G__14052__delegate.call(this, f, g, h, fs);
});
return G__14052;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13953.call(this,f);
case  2 :
return juxt__13954.call(this,f,g);
case  3 :
return juxt__13956.call(this,f,g,h);
default:
return juxt__13957.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13957.cljs$lang$applyTo;
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
var dorun__14113 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14116 = cljs.core.next.call(null,coll);
coll = G__14116;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14114 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14102 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14102))
{return (n > 0);
} else
{return and__3546__auto____14102;
}
})()))
{{
var G__14125 = (n - 1);
var G__14126 = cljs.core.next.call(null,coll);
n = G__14125;
coll = G__14126;
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
return dorun__14113.call(this,n);
case  2 :
return dorun__14114.call(this,n,coll);
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
var doall__14182 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14185 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14182.call(this,n);
case  2 :
return doall__14185.call(this,n,coll);
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
var matches__14197 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14197),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14197),1)))
{return cljs.core.first.call(null,matches__14197);
} else
{return cljs.core.vec.call(null,matches__14197);
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
var matches__14206 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14206)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14206),1)))
{return cljs.core.first.call(null,matches__14206);
} else
{return cljs.core.vec.call(null,matches__14206);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14210 = cljs.core.re_find.call(null,re,s);
var match_idx__14212 = s.search(re);
var match_str__14213 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14210))?cljs.core.first.call(null,match_data__14210):match_data__14210);
var post_match__14214 = cljs.core.subs.call(null,s,(match_idx__14212 + cljs.core.count.call(null,match_str__14213)));

if(cljs.core.truth_(match_data__14210))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14210,re_seq.call(null,re,post_match__14214));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14310_SHARP_){
return print_one.call(null,p1__14310_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14340 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14340))
{var and__3546__auto____14350 = (function (){var x__445__auto____14343 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14344 = x__445__auto____14343;

if(cljs.core.truth_(and__3546__auto____14344))
{var and__3546__auto____14347 = x__445__auto____14343.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14347))
{return cljs.core.not.call(null,x__445__auto____14343.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14347;
}
} else
{return and__3546__auto____14344;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14343);
}
})();

if(cljs.core.truth_(and__3546__auto____14350))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14350;
}
} else
{return and__3546__auto____14340;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14353 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14354 = x__445__auto____14353;

if(cljs.core.truth_(and__3546__auto____14354))
{var and__3546__auto____14355 = x__445__auto____14353.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14355))
{return cljs.core.not.call(null,x__445__auto____14353.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14355;
}
} else
{return and__3546__auto____14354;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14353);
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
var first_obj__14394 = cljs.core.first.call(null,objs);
var sb__14395 = (new goog.string.StringBuffer());

var G__14397__14400 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14397__14400))
{var obj__14401 = cljs.core.first.call(null,G__14397__14400);
var G__14397__14403 = G__14397__14400;

while(true){
if(cljs.core.truth_((obj__14401 === first_obj__14394)))
{} else
{sb__14395.append(" ");
}
var G__14405__14408 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14401,opts));

if(cljs.core.truth_(G__14405__14408))
{var string__14409 = cljs.core.first.call(null,G__14405__14408);
var G__14405__14410 = G__14405__14408;

while(true){
sb__14395.append(string__14409);
var temp__3698__auto____14413 = cljs.core.next.call(null,G__14405__14410);

if(cljs.core.truth_(temp__3698__auto____14413))
{var G__14405__14414 = temp__3698__auto____14413;

{
var G__14423 = cljs.core.first.call(null,G__14405__14414);
var G__14425 = G__14405__14414;
string__14409 = G__14423;
G__14405__14410 = G__14425;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14417 = cljs.core.next.call(null,G__14397__14403);

if(cljs.core.truth_(temp__3698__auto____14417))
{var G__14397__14418 = temp__3698__auto____14417;

{
var G__14429 = cljs.core.first.call(null,G__14397__14418);
var G__14430 = G__14397__14418;
obj__14401 = G__14429;
G__14397__14403 = G__14430;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14395);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14436 = cljs.core.first.call(null,objs);

var G__14437__14439 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14437__14439))
{var obj__14443 = cljs.core.first.call(null,G__14437__14439);
var G__14437__14444 = G__14437__14439;

while(true){
if(cljs.core.truth_((obj__14443 === first_obj__14436)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14447__14450 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14443,opts));

if(cljs.core.truth_(G__14447__14450))
{var string__14453 = cljs.core.first.call(null,G__14447__14450);
var G__14447__14454 = G__14447__14450;

while(true){
cljs.core.string_print.call(null,string__14453);
var temp__3698__auto____14458 = cljs.core.next.call(null,G__14447__14454);

if(cljs.core.truth_(temp__3698__auto____14458))
{var G__14447__14459 = temp__3698__auto____14458;

{
var G__14468 = cljs.core.first.call(null,G__14447__14459);
var G__14470 = G__14447__14459;
string__14453 = G__14468;
G__14447__14454 = G__14470;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14462 = cljs.core.next.call(null,G__14437__14444);

if(cljs.core.truth_(temp__3698__auto____14462))
{var G__14437__14463 = temp__3698__auto____14462;

{
var G__14478 = cljs.core.first.call(null,G__14437__14463);
var G__14479 = G__14437__14463;
obj__14443 = G__14478;
G__14437__14444 = G__14479;
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
pr_str.cljs$lang$applyTo = (function (arglist__14506){
var objs = cljs.core.seq( arglist__14506 );;
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
pr.cljs$lang$applyTo = (function (arglist__14512){
var objs = cljs.core.seq( arglist__14512 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14526){
var objs = cljs.core.seq( arglist__14526 );;
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
println.cljs$lang$applyTo = (function (arglist__14534){
var objs = cljs.core.seq( arglist__14534 );;
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
prn.cljs$lang$applyTo = (function (arglist__14545){
var objs = cljs.core.seq( arglist__14545 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14549 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14549,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14561 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14561))
{var nspc__14562 = temp__3698__auto____14561;

return cljs.core.str.call(null,nspc__14562,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14565 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14565))
{var nspc__14566 = temp__3698__auto____14565;

return cljs.core.str.call(null,nspc__14566,"/");
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
var pr_pair__14572 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14572,"{",", ","}",opts,coll);
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
var this__14640 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14646 = this;
var G__14649__14651 = cljs.core.seq.call(null,this__14646.watches);

if(cljs.core.truth_(G__14649__14651))
{var G__14655__14660 = cljs.core.first.call(null,G__14649__14651);
var vec__14658__14662 = G__14655__14660;
var key__14664 = cljs.core.nth.call(null,vec__14658__14662,0,null);
var f__14667 = cljs.core.nth.call(null,vec__14658__14662,1,null);
var G__14649__14668 = G__14649__14651;

var G__14655__14670 = G__14655__14660;
var G__14649__14671 = G__14649__14668;

while(true){
var vec__14673__14682 = G__14655__14670;
var key__14684 = cljs.core.nth.call(null,vec__14673__14682,0,null);
var f__14685 = cljs.core.nth.call(null,vec__14673__14682,1,null);
var G__14649__14686 = G__14649__14671;

f__14685.call(null,key__14684,this$,oldval,newval);
var temp__3698__auto____14689 = cljs.core.next.call(null,G__14649__14686);

if(cljs.core.truth_(temp__3698__auto____14689))
{var G__14649__14691 = temp__3698__auto____14689;

{
var G__14739 = cljs.core.first.call(null,G__14649__14691);
var G__14740 = G__14649__14691;
G__14655__14670 = G__14739;
G__14649__14671 = G__14740;
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
var this__14733 = this;
return this$.watches = cljs.core.assoc.call(null,this__14733.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14734 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14734.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14735 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14735.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14736 = this;
return this__14736.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14737 = this;
return this__14737.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14738 = this;
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
var atom__14757 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14758 = (function() { 
var G__14760__delegate = function (x,p__14747){
var map__14748__14749 = p__14747;
var map__14748__14750 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14748__14749))?cljs.core.apply.call(null,cljs.core.hash_map,map__14748__14749):map__14748__14749);
var validator__14751 = cljs.core.get.call(null,map__14748__14750,"﷐'validator");
var meta__14752 = cljs.core.get.call(null,map__14748__14750,"﷐'meta");

return (new cljs.core.Atom(x,meta__14752,validator__14751,null));
};
var G__14760 = function (x,var_args){
var p__14747 = null;
if (goog.isDef(var_args)) {
  p__14747 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14760__delegate.call(this, x, p__14747);
};
G__14760.cljs$lang$maxFixedArity = 1;
G__14760.cljs$lang$applyTo = (function (arglist__14762){
var x = cljs.core.first(arglist__14762);
var p__14747 = cljs.core.rest(arglist__14762);
return G__14760__delegate.call(this, x, p__14747);
});
return G__14760;
})()
;
atom = function(x,var_args){
var p__14747 = var_args;
switch(arguments.length){
case  1 :
return atom__14757.call(this,x);
default:
return atom__14758.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14758.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14763 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14763))
{var validate__14764 = temp__3698__auto____14763;

if(cljs.core.truth_(validate__14764.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14767 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14767,new_value);
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
var swap_BANG___14778 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14784 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14785 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14786 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14787 = (function() { 
var G__14790__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14790 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14790__delegate.call(this, a, f, x, y, z, more);
};
G__14790.cljs$lang$maxFixedArity = 5;
G__14790.cljs$lang$applyTo = (function (arglist__14792){
var a = cljs.core.first(arglist__14792);
var f = cljs.core.first(cljs.core.next(arglist__14792));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14792)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14792))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14792)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14792)))));
return G__14790__delegate.call(this, a, f, x, y, z, more);
});
return G__14790;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14778.call(this,a,f);
case  3 :
return swap_BANG___14784.call(this,a,f,x);
case  4 :
return swap_BANG___14785.call(this,a,f,x,y);
case  5 :
return swap_BANG___14786.call(this,a,f,x,y,z);
default:
return swap_BANG___14787.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14787.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14794){
var iref = cljs.core.first(arglist__14794);
var f = cljs.core.first(cljs.core.next(arglist__14794));
var args = cljs.core.rest(cljs.core.next(arglist__14794));
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
var gensym__14807 = (function (){
return gensym.call(null,"G__");
});
var gensym__14809 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14807.call(this);
case  1 :
return gensym__14809.call(this,prefix_string);
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
var this__14830 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14830.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14833 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14833.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14833.state,this__14833.f);
}
return cljs.core.deref.call(null,this__14833.state);
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
delay.cljs$lang$applyTo = (function (arglist__14838){
var body = cljs.core.seq( arglist__14838 );;
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
var map__14842__14843 = options;
var map__14842__14844 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14842__14843))?cljs.core.apply.call(null,cljs.core.hash_map,map__14842__14843):map__14842__14843);
var keywordize_keys__14845 = cljs.core.get.call(null,map__14842__14844,"﷐'keywordize-keys");
var keyfn__14846 = (cljs.core.truth_(keywordize_keys__14845)?cljs.core.keyword:cljs.core.str);
var f__14858 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14857 = (function iter__14848(s__14849){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14849__14854 = s__14849;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14849__14854)))
{var k__14856 = cljs.core.first.call(null,s__14849__14854);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14846.call(null,k__14856),thisfn.call(null,(x[k__14856]))]),iter__14848.call(null,cljs.core.rest.call(null,s__14849__14854)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14857.call(null,cljs.core.js_keys.call(null,x));
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

return f__14858.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14868){
var x = cljs.core.first(arglist__14868);
var options = cljs.core.rest(arglist__14868);
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
var mem__14869 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14873__delegate = function (args){
var temp__3695__auto____14870 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14869),args);

if(cljs.core.truth_(temp__3695__auto____14870))
{var v__14871 = temp__3695__auto____14870;

return v__14871;
} else
{var ret__14872 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14869,cljs.core.assoc,args,ret__14872);
return ret__14872;
}
};
var G__14873 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14873__delegate.call(this, args);
};
G__14873.cljs$lang$maxFixedArity = 0;
G__14873.cljs$lang$applyTo = (function (arglist__14875){
var args = cljs.core.seq( arglist__14875 );;
return G__14873__delegate.call(this, args);
});
return G__14873;
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
var trampoline__14900 = (function (f){
while(true){
var ret__14878 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14878)))
{{
var G__14904 = ret__14878;
f = G__14904;
continue;
}
} else
{return ret__14878;
}
break;
}
});
var trampoline__14901 = (function() { 
var G__14905__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14905 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14905__delegate.call(this, f, args);
};
G__14905.cljs$lang$maxFixedArity = 1;
G__14905.cljs$lang$applyTo = (function (arglist__14907){
var f = cljs.core.first(arglist__14907);
var args = cljs.core.rest(arglist__14907);
return G__14905__delegate.call(this, f, args);
});
return G__14905;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14900.call(this,f);
default:
return trampoline__14901.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14901.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14914 = (function (){
return rand.call(null,1);
});
var rand__14916 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14914.call(this);
case  1 :
return rand__14916.call(this,n);
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
var k__14921 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14921,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14921,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14934 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14935 = (function (h,child,parent){
var or__3548__auto____14925 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14925))
{return or__3548__auto____14925;
} else
{var or__3548__auto____14926 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14926))
{return or__3548__auto____14926;
} else
{var and__3546__auto____14927 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14927))
{var and__3546__auto____14928 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14928))
{var and__3546__auto____14929 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14929))
{var ret__14930 = true;
var i__14931 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14932 = cljs.core.not.call(null,ret__14930);

if(cljs.core.truth_(or__3548__auto____14932))
{return or__3548__auto____14932;
} else
{return cljs.core._EQ_.call(null,i__14931,cljs.core.count.call(null,parent));
}
})()))
{return ret__14930;
} else
{{
var G__14940 = isa_QMARK_.call(null,h,child.call(null,i__14931),parent.call(null,i__14931));
var G__14941 = (i__14931 + 1);
ret__14930 = G__14940;
i__14931 = G__14941;
continue;
}
}
break;
}
} else
{return and__3546__auto____14929;
}
} else
{return and__3546__auto____14928;
}
} else
{return and__3546__auto____14927;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14934.call(this,h,child);
case  3 :
return isa_QMARK___14935.call(this,h,child,parent);
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
var parents__14948 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14949 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14948.call(this,h);
case  2 :
return parents__14949.call(this,h,tag);
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
var ancestors__14956 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14957 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14956.call(this,h);
case  2 :
return ancestors__14957.call(this,h,tag);
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
var descendants__15037 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15039 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15037.call(this,h);
case  2 :
return descendants__15039.call(this,h,tag);
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
var derive__15077 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15078 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15060 = "﷐'parents".call(null,h);
var td__15061 = "﷐'descendants".call(null,h);
var ta__15063 = "﷐'ancestors".call(null,h);
var tf__15067 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15071 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15060.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15063.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15063.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15060,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15067.call(null,"﷐'ancestors".call(null,h),tag,td__15061,parent,ta__15063),"﷐'descendants":tf__15067.call(null,"﷐'descendants".call(null,h),parent,ta__15063,tag,td__15061)});
})());

if(cljs.core.truth_(or__3548__auto____15071))
{return or__3548__auto____15071;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15077.call(this,h,tag);
case  3 :
return derive__15078.call(this,h,tag,parent);
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
var underive__15110 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15112 = (function (h,tag,parent){
var parentMap__15099 = "﷐'parents".call(null,h);
var childsParents__15100 = (cljs.core.truth_(parentMap__15099.call(null,tag))?cljs.core.disj.call(null,parentMap__15099.call(null,tag),parent):cljs.core.set([]));
var newParents__15102 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15100))?cljs.core.assoc.call(null,parentMap__15099,tag,childsParents__15100):cljs.core.dissoc.call(null,parentMap__15099,tag));
var deriv_seq__15105 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15050_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15050_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15050_SHARP_),cljs.core.second.call(null,p1__15050_SHARP_)));
}),cljs.core.seq.call(null,newParents__15102)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15099.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15051_SHARP_,p2__15052_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15051_SHARP_,p2__15052_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15105));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15110.call(this,h,tag);
case  3 :
return underive__15112.call(this,h,tag,parent);
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
var xprefs__15138 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15140 = (cljs.core.truth_((function (){var and__3546__auto____15139 = xprefs__15138;

if(cljs.core.truth_(and__3546__auto____15139))
{return xprefs__15138.call(null,y);
} else
{return and__3546__auto____15139;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15140))
{return or__3548__auto____15140;
} else
{var or__3548__auto____15145 = (function (){var ps__15144 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15144) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15144),prefer_table)))
{} else
{}
{
var G__15157 = cljs.core.rest.call(null,ps__15144);
ps__15144 = G__15157;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15145))
{return or__3548__auto____15145;
} else
{var or__3548__auto____15153 = (function (){var ps__15149 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15149) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15149),y,prefer_table)))
{} else
{}
{
var G__15161 = cljs.core.rest.call(null,ps__15149);
ps__15149 = G__15161;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15153))
{return or__3548__auto____15153;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15162 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15162))
{return or__3548__auto____15162;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15179 = cljs.core.reduce.call(null,(function (be,p__15169){
var vec__15170__15171 = p__15169;
var k__15172 = cljs.core.nth.call(null,vec__15170__15171,0,null);
var ___15173 = cljs.core.nth.call(null,vec__15170__15171,1,null);
var e__15174 = vec__15170__15171;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15172)))
{var be2__15176 = (cljs.core.truth_((function (){var or__3548__auto____15175 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15175))
{return or__3548__auto____15175;
} else
{return cljs.core.dominates.call(null,k__15172,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15174:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15176),k__15172,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15172," and ",cljs.core.first.call(null,be2__15176),", and neither is preferred")));
}
return be2__15176;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15179))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15179));
return cljs.core.second.call(null,best_entry__15179);
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
if(cljs.core.truth_((function (){var and__3546__auto____15198 = mf;

if(cljs.core.truth_(and__3546__auto____15198))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15198;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15199 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15199))
{return or__3548__auto____15199;
} else
{var or__3548__auto____15201 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15201))
{return or__3548__auto____15201;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15207 = mf;

if(cljs.core.truth_(and__3546__auto____15207))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15207;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15210 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15210))
{return or__3548__auto____15210;
} else
{var or__3548__auto____15211 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15211))
{return or__3548__auto____15211;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15214 = mf;

if(cljs.core.truth_(and__3546__auto____15214))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15214;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15357 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15357))
{return or__3548__auto____15357;
} else
{var or__3548__auto____15361 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15361))
{return or__3548__auto____15361;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15363 = mf;

if(cljs.core.truth_(and__3546__auto____15363))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15363;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15366 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15366))
{return or__3548__auto____15366;
} else
{var or__3548__auto____15367 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15367))
{return or__3548__auto____15367;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15372 = mf;

if(cljs.core.truth_(and__3546__auto____15372))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15372;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15374 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15374))
{return or__3548__auto____15374;
} else
{var or__3548__auto____15375 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15375))
{return or__3548__auto____15375;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15377 = mf;

if(cljs.core.truth_(and__3546__auto____15377))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15377;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15379 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15379))
{return or__3548__auto____15379;
} else
{var or__3548__auto____15381 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15381))
{return or__3548__auto____15381;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15382 = mf;

if(cljs.core.truth_(and__3546__auto____15382))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15382;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15385 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15385))
{return or__3548__auto____15385;
} else
{var or__3548__auto____15387 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15387))
{return or__3548__auto____15387;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15389 = mf;

if(cljs.core.truth_(and__3546__auto____15389))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15389;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15390 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15390))
{return or__3548__auto____15390;
} else
{var or__3548__auto____15391 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15391))
{return or__3548__auto____15391;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15414 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15415 = cljs.core._get_method.call(null,mf,dispatch_val__15414);

if(cljs.core.truth_(target_fn__15415))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15414)));
}
return cljs.core.apply.call(null,target_fn__15415,args);
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
var this__15435 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15436 = this;
cljs.core.swap_BANG_.call(null,this__15436.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15436.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15436.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15436.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15441 = this;
cljs.core.swap_BANG_.call(null,this__15441.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15441.method_cache,this__15441.method_table,this__15441.cached_hierarchy,this__15441.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15442 = this;
cljs.core.swap_BANG_.call(null,this__15442.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15442.method_cache,this__15442.method_table,this__15442.cached_hierarchy,this__15442.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15447 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15447.cached_hierarchy),cljs.core.deref.call(null,this__15447.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15447.method_cache,this__15447.method_table,this__15447.cached_hierarchy,this__15447.hierarchy);
}
var temp__3695__auto____15455 = cljs.core.deref.call(null,this__15447.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15455))
{var target_fn__15457 = temp__3695__auto____15455;

return target_fn__15457;
} else
{var temp__3695__auto____15458 = cljs.core.find_and_cache_best_method.call(null,this__15447.name,dispatch_val,this__15447.hierarchy,this__15447.method_table,this__15447.prefer_table,this__15447.method_cache,this__15447.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15458))
{var target_fn__15459 = temp__3695__auto____15458;

return target_fn__15459;
} else
{return cljs.core.deref.call(null,this__15447.method_table).call(null,this__15447.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15461 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15461.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15461.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15461.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15461.method_cache,this__15461.method_table,this__15461.cached_hierarchy,this__15461.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15466 = this;
return cljs.core.deref.call(null,this__15466.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15467 = this;
return cljs.core.deref.call(null,this__15467.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15468 = this;
return cljs.core.do_dispatch.call(null,mf,this__15468.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15483__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15483 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15483__delegate.call(this, _, args);
};
G__15483.cljs$lang$maxFixedArity = 1;
G__15483.cljs$lang$applyTo = (function (arglist__15486){
var _ = cljs.core.first(arglist__15486);
var args = cljs.core.rest(arglist__15486);
return G__15483__delegate.call(this, _, args);
});
return G__15483;
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
