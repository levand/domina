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
var or__3548__auto____7257 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7257))
{return or__3548__auto____7257;
} else
{var or__3548__auto____7258 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7258))
{return or__3548__auto____7258;
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
var _invoke__7559 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7265 = this$;

if(cljs.core.truth_(and__3546__auto____7265))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7265;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7266 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7266))
{return or__3548__auto____7266;
} else
{var or__3548__auto____7268 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7268))
{return or__3548__auto____7268;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7560 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7270 = this$;

if(cljs.core.truth_(and__3546__auto____7270))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7270;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7271 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7271))
{return or__3548__auto____7271;
} else
{var or__3548__auto____7272 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7272))
{return or__3548__auto____7272;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7561 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7273 = this$;

if(cljs.core.truth_(and__3546__auto____7273))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7273;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7275 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7275))
{return or__3548__auto____7275;
} else
{var or__3548__auto____7277 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7277))
{return or__3548__auto____7277;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7562 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7279 = this$;

if(cljs.core.truth_(and__3546__auto____7279))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7279;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7286 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7286))
{return or__3548__auto____7286;
} else
{var or__3548__auto____7288 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7288))
{return or__3548__auto____7288;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7563 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7291 = this$;

if(cljs.core.truth_(and__3546__auto____7291))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7291;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7295 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7295))
{return or__3548__auto____7295;
} else
{var or__3548__auto____7297 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7297))
{return or__3548__auto____7297;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7564 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7301 = this$;

if(cljs.core.truth_(and__3546__auto____7301))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7301;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7371 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7371))
{return or__3548__auto____7371;
} else
{var or__3548__auto____7375 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7375))
{return or__3548__auto____7375;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7565 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7379 = this$;

if(cljs.core.truth_(and__3546__auto____7379))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7379;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7382 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7382))
{return or__3548__auto____7382;
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
var _invoke__7566 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7388 = this$;

if(cljs.core.truth_(and__3546__auto____7388))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7388;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7394 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7394))
{return or__3548__auto____7394;
} else
{var or__3548__auto____7395 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7395))
{return or__3548__auto____7395;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7567 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7401 = this$;

if(cljs.core.truth_(and__3546__auto____7401))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7401;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7405 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7405))
{return or__3548__auto____7405;
} else
{var or__3548__auto____7409 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7409))
{return or__3548__auto____7409;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7568 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7413 = this$;

if(cljs.core.truth_(and__3546__auto____7413))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7413;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7417 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7417))
{return or__3548__auto____7417;
} else
{var or__3548__auto____7421 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7421))
{return or__3548__auto____7421;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7569 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7424 = this$;

if(cljs.core.truth_(and__3546__auto____7424))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7424;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7427 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7427))
{return or__3548__auto____7427;
} else
{var or__3548__auto____7429 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7429))
{return or__3548__auto____7429;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7570 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7432 = this$;

if(cljs.core.truth_(and__3546__auto____7432))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7432;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7437 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7437))
{return or__3548__auto____7437;
} else
{var or__3548__auto____7440 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7440))
{return or__3548__auto____7440;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7571 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7443 = this$;

if(cljs.core.truth_(and__3546__auto____7443))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7443;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7447 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7447))
{return or__3548__auto____7447;
} else
{var or__3548__auto____7449 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7449))
{return or__3548__auto____7449;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7573 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7453 = this$;

if(cljs.core.truth_(and__3546__auto____7453))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7453;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7456 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7456))
{return or__3548__auto____7456;
} else
{var or__3548__auto____7459 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7459))
{return or__3548__auto____7459;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7574 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7462 = this$;

if(cljs.core.truth_(and__3546__auto____7462))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7462;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7465 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7465))
{return or__3548__auto____7465;
} else
{var or__3548__auto____7468 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7468))
{return or__3548__auto____7468;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7575 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7471 = this$;

if(cljs.core.truth_(and__3546__auto____7471))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7471;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7576 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7483 = this$;

if(cljs.core.truth_(and__3546__auto____7483))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7483;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7486 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7486))
{return or__3548__auto____7486;
} else
{var or__3548__auto____7489 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7489))
{return or__3548__auto____7489;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7577 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7494 = this$;

if(cljs.core.truth_(and__3546__auto____7494))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7494;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7498 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7498))
{return or__3548__auto____7498;
} else
{var or__3548__auto____7501 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7501))
{return or__3548__auto____7501;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7578 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7536 = this$;

if(cljs.core.truth_(and__3546__auto____7536))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7536;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7579 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7546 = this$;

if(cljs.core.truth_(and__3546__auto____7546))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7546;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7548 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7548))
{return or__3548__auto____7548;
} else
{var or__3548__auto____7550 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7550))
{return or__3548__auto____7550;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7580 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7552 = this$;

if(cljs.core.truth_(and__3546__auto____7552))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7552;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7554 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7554))
{return or__3548__auto____7554;
} else
{var or__3548__auto____7556 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7556))
{return or__3548__auto____7556;
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
return _invoke__7559.call(this,this$);
case  2 :
return _invoke__7560.call(this,this$,a);
case  3 :
return _invoke__7561.call(this,this$,a,b);
case  4 :
return _invoke__7562.call(this,this$,a,b,c);
case  5 :
return _invoke__7563.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7564.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7565.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7566.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7567.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7568.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7569.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7570.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7571.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7573.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7574.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7575.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7576.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7577.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7578.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7579.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7580.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7672 = coll;

if(cljs.core.truth_(and__3546__auto____7672))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7672;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7673 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7673))
{return or__3548__auto____7673;
} else
{var or__3548__auto____7674 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7674))
{return or__3548__auto____7674;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7678 = coll;

if(cljs.core.truth_(and__3546__auto____7678))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7678;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7679 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7679))
{return or__3548__auto____7679;
} else
{var or__3548__auto____7681 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7681))
{return or__3548__auto____7681;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7724 = coll;

if(cljs.core.truth_(and__3546__auto____7724))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7724;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7725 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7725))
{return or__3548__auto____7725;
} else
{var or__3548__auto____7727 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7727))
{return or__3548__auto____7727;
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
var _nth__7738 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7730 = coll;

if(cljs.core.truth_(and__3546__auto____7730))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7730;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7731 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7731))
{return or__3548__auto____7731;
} else
{var or__3548__auto____7732 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7732))
{return or__3548__auto____7732;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7739 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7733 = coll;

if(cljs.core.truth_(and__3546__auto____7733))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7733;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7734 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7734))
{return or__3548__auto____7734;
} else
{var or__3548__auto____7736 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7736))
{return or__3548__auto____7736;
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
return _nth__7738.call(this,coll,n);
case  3 :
return _nth__7739.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7748 = coll;

if(cljs.core.truth_(and__3546__auto____7748))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7748;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7749 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7749))
{return or__3548__auto____7749;
} else
{var or__3548__auto____7750 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7750))
{return or__3548__auto____7750;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7751 = coll;

if(cljs.core.truth_(and__3546__auto____7751))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7751;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7752 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7752))
{return or__3548__auto____7752;
} else
{var or__3548__auto____7753 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7753))
{return or__3548__auto____7753;
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
var _lookup__7766 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7760 = o;

if(cljs.core.truth_(and__3546__auto____7760))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7760;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7761 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7761))
{return or__3548__auto____7761;
} else
{var or__3548__auto____7762 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7762))
{return or__3548__auto____7762;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7767 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7763 = o;

if(cljs.core.truth_(and__3546__auto____7763))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7763;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7764 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7764))
{return or__3548__auto____7764;
} else
{var or__3548__auto____7765 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7765))
{return or__3548__auto____7765;
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
return _lookup__7766.call(this,o,k);
case  3 :
return _lookup__7767.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7772 = coll;

if(cljs.core.truth_(and__3546__auto____7772))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7772;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7774 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7774))
{return or__3548__auto____7774;
} else
{var or__3548__auto____7775 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7775))
{return or__3548__auto____7775;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7776 = coll;

if(cljs.core.truth_(and__3546__auto____7776))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7776;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7777 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7777))
{return or__3548__auto____7777;
} else
{var or__3548__auto____7778 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7778))
{return or__3548__auto____7778;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7835 = coll;

if(cljs.core.truth_(and__3546__auto____7835))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7835;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7837 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7837))
{return or__3548__auto____7837;
} else
{var or__3548__auto____7839 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7839))
{return or__3548__auto____7839;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7841 = coll;

if(cljs.core.truth_(and__3546__auto____7841))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7841;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7845 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
} else
{var or__3548__auto____7848 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7848))
{return or__3548__auto____7848;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7851 = coll;

if(cljs.core.truth_(and__3546__auto____7851))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7851;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7854 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7854))
{return or__3548__auto____7854;
} else
{var or__3548__auto____7855 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7855))
{return or__3548__auto____7855;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7857 = coll;

if(cljs.core.truth_(and__3546__auto____7857))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7857;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7859 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7859))
{return or__3548__auto____7859;
} else
{var or__3548__auto____7862 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7862))
{return or__3548__auto____7862;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7885 = coll;

if(cljs.core.truth_(and__3546__auto____7885))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7885;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7932 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7932))
{return or__3548__auto____7932;
} else
{var or__3548__auto____7934 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7934))
{return or__3548__auto____7934;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7940 = o;

if(cljs.core.truth_(and__3546__auto____7940))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7940;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7943 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7943))
{return or__3548__auto____7943;
} else
{var or__3548__auto____7945 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7945))
{return or__3548__auto____7945;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7949 = o;

if(cljs.core.truth_(and__3546__auto____7949))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7949;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7950 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7950))
{return or__3548__auto____7950;
} else
{var or__3548__auto____7953 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7953))
{return or__3548__auto____7953;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7962 = o;

if(cljs.core.truth_(and__3546__auto____7962))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7962;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7964 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7964))
{return or__3548__auto____7964;
} else
{var or__3548__auto____7966 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7966))
{return or__3548__auto____7966;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7972 = o;

if(cljs.core.truth_(and__3546__auto____7972))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7972;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7974 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7974))
{return or__3548__auto____7974;
} else
{var or__3548__auto____7975 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7975))
{return or__3548__auto____7975;
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
var _reduce__7987 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7981 = coll;

if(cljs.core.truth_(and__3546__auto____7981))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7981;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7982 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7982))
{return or__3548__auto____7982;
} else
{var or__3548__auto____7983 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7983))
{return or__3548__auto____7983;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7988 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7984 = coll;

if(cljs.core.truth_(and__3546__auto____7984))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7984;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7985 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7985))
{return or__3548__auto____7985;
} else
{var or__3548__auto____7986 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7986))
{return or__3548__auto____7986;
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
return _reduce__7987.call(this,coll,f);
case  3 :
return _reduce__7988.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8005 = o;

if(cljs.core.truth_(and__3546__auto____8005))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8005;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8006 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8006))
{return or__3548__auto____8006;
} else
{var or__3548__auto____8007 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8007))
{return or__3548__auto____8007;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8011 = o;

if(cljs.core.truth_(and__3546__auto____8011))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8011;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8012 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8012))
{return or__3548__auto____8012;
} else
{var or__3548__auto____8013 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8013))
{return or__3548__auto____8013;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8017 = o;

if(cljs.core.truth_(and__3546__auto____8017))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8017;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8018 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8018))
{return or__3548__auto____8018;
} else
{var or__3548__auto____8019 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
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
if(cljs.core.truth_((function (){var and__3546__auto____8023 = o;

if(cljs.core.truth_(and__3546__auto____8023))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8023;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8025 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8025))
{return or__3548__auto____8025;
} else
{var or__3548__auto____8026 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8026))
{return or__3548__auto____8026;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8030 = d;

if(cljs.core.truth_(and__3546__auto____8030))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8030;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8031 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8031))
{return or__3548__auto____8031;
} else
{var or__3548__auto____8032 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8032))
{return or__3548__auto____8032;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8034 = this$;

if(cljs.core.truth_(and__3546__auto____8034))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8034;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8036 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8036))
{return or__3548__auto____8036;
} else
{var or__3548__auto____8039 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8039))
{return or__3548__auto____8039;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8041 = this$;

if(cljs.core.truth_(and__3546__auto____8041))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8041;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8042 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8042))
{return or__3548__auto____8042;
} else
{var or__3548__auto____8043 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8043))
{return or__3548__auto____8043;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8082 = this$;

if(cljs.core.truth_(and__3546__auto____8082))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8082;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8092 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8092))
{return or__3548__auto____8092;
} else
{var or__3548__auto____8094 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8094))
{return or__3548__auto____8094;
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
var G__8127 = null;
var G__8127__8128 = (function (o,k){
return null;
});
var G__8127__8129 = (function (o,k,not_found){
return not_found;
});
G__8127 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8127__8128.call(this,o,k);
case  3 :
return G__8127__8129.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8127;
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
var G__8134 = null;
var G__8134__8135 = (function (_,f){
return f.call(null);
});
var G__8134__8136 = (function (_,f,start){
return start;
});
G__8134 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8134__8135.call(this,_,f);
case  3 :
return G__8134__8136.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8134;
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
var G__8146 = null;
var G__8146__8147 = (function (_,n){
return null;
});
var G__8146__8148 = (function (_,n,not_found){
return not_found;
});
G__8146 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8146__8147.call(this,_,n);
case  3 :
return G__8146__8148.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8146;
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
var ci_reduce__8200 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8188 = cljs.core._nth.call(null,cicoll,0);
var n__8189 = 1;

while(true){
if(cljs.core.truth_((n__8189 < cljs.core._count.call(null,cicoll))))
{{
var G__8206 = f.call(null,val__8188,cljs.core._nth.call(null,cicoll,n__8189));
var G__8207 = (n__8189 + 1);
val__8188 = G__8206;
n__8189 = G__8207;
continue;
}
} else
{return val__8188;
}
break;
}
}
});
var ci_reduce__8201 = (function (cicoll,f,val){
var val__8191 = val;
var n__8193 = 0;

while(true){
if(cljs.core.truth_((n__8193 < cljs.core._count.call(null,cicoll))))
{{
var G__8208 = f.call(null,val__8191,cljs.core._nth.call(null,cicoll,n__8193));
var G__8209 = (n__8193 + 1);
val__8191 = G__8208;
n__8193 = G__8209;
continue;
}
} else
{return val__8191;
}
break;
}
});
var ci_reduce__8202 = (function (cicoll,f,val,idx){
var val__8197 = val;
var n__8198 = idx;

while(true){
if(cljs.core.truth_((n__8198 < cljs.core._count.call(null,cicoll))))
{{
var G__8211 = f.call(null,val__8197,cljs.core._nth.call(null,cicoll,n__8198));
var G__8212 = (n__8198 + 1);
val__8197 = G__8211;
n__8198 = G__8212;
continue;
}
} else
{return val__8197;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8200.call(this,cicoll,f);
case  3 :
return ci_reduce__8201.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8202.call(this,cicoll,f,val,idx);
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
var this__8215 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8253 = null;
var G__8253__8254 = (function (_,f){
var this__8216 = this;
return cljs.core.ci_reduce.call(null,this__8216.a,f,(this__8216.a[this__8216.i]),(this__8216.i + 1));
});
var G__8253__8255 = (function (_,f,start){
var this__8218 = this;
return cljs.core.ci_reduce.call(null,this__8218.a,f,start,this__8218.i);
});
G__8253 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8253__8254.call(this,_,f);
case  3 :
return G__8253__8255.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8253;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8221 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8222 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8260 = null;
var G__8260__8261 = (function (coll,n){
var this__8223 = this;
var i__8225 = (n + this__8223.i);

if(cljs.core.truth_((i__8225 < this__8223.a.length)))
{return (this__8223.a[i__8225]);
} else
{return null;
}
});
var G__8260__8262 = (function (coll,n,not_found){
var this__8227 = this;
var i__8229 = (n + this__8227.i);

if(cljs.core.truth_((i__8229 < this__8227.a.length)))
{return (this__8227.a[i__8229]);
} else
{return not_found;
}
});
G__8260 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8260__8261.call(this,coll,n);
case  3 :
return G__8260__8262.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8260;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8232 = this;
return (this__8232.a.length - this__8232.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8234 = this;
return (this__8234.a[this__8234.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8236 = this;
if(cljs.core.truth_(((this__8236.i + 1) < this__8236.a.length)))
{return (new cljs.core.IndexedSeq(this__8236.a,(this__8236.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8249 = this;
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
var G__8280 = null;
var G__8280__8281 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8280__8282 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8280 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8280__8281.call(this,array,f);
case  3 :
return G__8280__8282.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8280;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8315 = null;
var G__8315__8316 = (function (array,k){
return (array[k]);
});
var G__8315__8317 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8315 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8315__8316.call(this,array,k);
case  3 :
return G__8315__8317.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8315;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8322 = null;
var G__8322__8323 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8322__8324 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8322 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8322__8323.call(this,array,n);
case  3 :
return G__8322__8324.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8322;
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
var temp__3698__auto____8334 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8334))
{var s__8335 = temp__3698__auto____8334;

return cljs.core._first.call(null,s__8335);
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
var G__8373 = cljs.core.next.call(null,s);
s = G__8373;
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
var s__8374 = cljs.core.seq.call(null,x);
var n__8375 = 0;

while(true){
if(cljs.core.truth_(s__8374))
{{
var G__8421 = cljs.core.next.call(null,s__8374);
var G__8422 = (n__8375 + 1);
s__8374 = G__8421;
n__8375 = G__8422;
continue;
}
} else
{return n__8375;
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
var conj__8481 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8482 = (function() { 
var G__8484__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8485 = conj.call(null,coll,x);
var G__8486 = cljs.core.first.call(null,xs);
var G__8487 = cljs.core.next.call(null,xs);
coll = G__8485;
x = G__8486;
xs = G__8487;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8484 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8484__delegate.call(this, coll, x, xs);
};
G__8484.cljs$lang$maxFixedArity = 2;
G__8484.cljs$lang$applyTo = (function (arglist__8488){
var coll = cljs.core.first(arglist__8488);
var x = cljs.core.first(cljs.core.next(arglist__8488));
var xs = cljs.core.rest(cljs.core.next(arglist__8488));
return G__8484__delegate.call(this, coll, x, xs);
});
return G__8484;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8481.call(this,coll,x);
default:
return conj__8482.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8482.cljs$lang$applyTo;
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
var nth__8503 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8504 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8503.call(this,coll,n);
case  3 :
return nth__8504.call(this,coll,n,not_found);
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
var get__8507 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8509 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8507.call(this,o,k);
case  3 :
return get__8509.call(this,o,k,not_found);
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
var assoc__8522 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8523 = (function() { 
var G__8525__delegate = function (coll,k,v,kvs){
while(true){
var ret__8519 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8526 = ret__8519;
var G__8527 = cljs.core.first.call(null,kvs);
var G__8528 = cljs.core.second.call(null,kvs);
var G__8529 = cljs.core.nnext.call(null,kvs);
coll = G__8526;
k = G__8527;
v = G__8528;
kvs = G__8529;
continue;
}
} else
{return ret__8519;
}
break;
}
};
var G__8525 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8525__delegate.call(this, coll, k, v, kvs);
};
G__8525.cljs$lang$maxFixedArity = 3;
G__8525.cljs$lang$applyTo = (function (arglist__8530){
var coll = cljs.core.first(arglist__8530);
var k = cljs.core.first(cljs.core.next(arglist__8530));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8530)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8530)));
return G__8525__delegate.call(this, coll, k, v, kvs);
});
return G__8525;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8522.call(this,coll,k,v);
default:
return assoc__8523.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8523.cljs$lang$applyTo;
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
var dissoc__8542 = (function (coll){
return coll;
});
var dissoc__8543 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8544 = (function() { 
var G__8547__delegate = function (coll,k,ks){
while(true){
var ret__8538 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8548 = ret__8538;
var G__8549 = cljs.core.first.call(null,ks);
var G__8551 = cljs.core.next.call(null,ks);
coll = G__8548;
k = G__8549;
ks = G__8551;
continue;
}
} else
{return ret__8538;
}
break;
}
};
var G__8547 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8547__delegate.call(this, coll, k, ks);
};
G__8547.cljs$lang$maxFixedArity = 2;
G__8547.cljs$lang$applyTo = (function (arglist__8553){
var coll = cljs.core.first(arglist__8553);
var k = cljs.core.first(cljs.core.next(arglist__8553));
var ks = cljs.core.rest(cljs.core.next(arglist__8553));
return G__8547__delegate.call(this, coll, k, ks);
});
return G__8547;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8542.call(this,coll);
case  2 :
return dissoc__8543.call(this,coll,k);
default:
return dissoc__8544.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8544.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8566 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8572 = x__445__auto____8566;

if(cljs.core.truth_(and__3546__auto____8572))
{var and__3546__auto____8575 = x__445__auto____8566.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8575))
{return cljs.core.not.call(null,x__445__auto____8566.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8575;
}
} else
{return and__3546__auto____8572;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8566);
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
var disj__8642 = (function (coll){
return coll;
});
var disj__8643 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8644 = (function() { 
var G__8647__delegate = function (coll,k,ks){
while(true){
var ret__8639 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8648 = ret__8639;
var G__8649 = cljs.core.first.call(null,ks);
var G__8650 = cljs.core.next.call(null,ks);
coll = G__8648;
k = G__8649;
ks = G__8650;
continue;
}
} else
{return ret__8639;
}
break;
}
};
var G__8647 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8647__delegate.call(this, coll, k, ks);
};
G__8647.cljs$lang$maxFixedArity = 2;
G__8647.cljs$lang$applyTo = (function (arglist__8651){
var coll = cljs.core.first(arglist__8651);
var k = cljs.core.first(cljs.core.next(arglist__8651));
var ks = cljs.core.rest(cljs.core.next(arglist__8651));
return G__8647__delegate.call(this, coll, k, ks);
});
return G__8647;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8642.call(this,coll);
case  2 :
return disj__8643.call(this,coll,k);
default:
return disj__8644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8644.cljs$lang$applyTo;
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
{var x__445__auto____8661 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8662 = x__445__auto____8661;

if(cljs.core.truth_(and__3546__auto____8662))
{var and__3546__auto____8667 = x__445__auto____8661.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8667))
{return cljs.core.not.call(null,x__445__auto____8661.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8667;
}
} else
{return and__3546__auto____8662;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8661);
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
{var x__445__auto____8679 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8680 = x__445__auto____8679;

if(cljs.core.truth_(and__3546__auto____8680))
{var and__3546__auto____8681 = x__445__auto____8679.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8681))
{return cljs.core.not.call(null,x__445__auto____8679.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8681;
}
} else
{return and__3546__auto____8680;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8679);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8684 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8685 = x__445__auto____8684;

if(cljs.core.truth_(and__3546__auto____8685))
{var and__3546__auto____8687 = x__445__auto____8684.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8687))
{return cljs.core.not.call(null,x__445__auto____8684.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8687;
}
} else
{return and__3546__auto____8685;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8684);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8692 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8693 = x__445__auto____8692;

if(cljs.core.truth_(and__3546__auto____8693))
{var and__3546__auto____8695 = x__445__auto____8692.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8695))
{return cljs.core.not.call(null,x__445__auto____8692.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8695;
}
} else
{return and__3546__auto____8693;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8692);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8700 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8701 = x__445__auto____8700;

if(cljs.core.truth_(and__3546__auto____8701))
{var and__3546__auto____8703 = x__445__auto____8700.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8703))
{return cljs.core.not.call(null,x__445__auto____8700.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8703;
}
} else
{return and__3546__auto____8701;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8700);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8708 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8710 = x__445__auto____8708;

if(cljs.core.truth_(and__3546__auto____8710))
{var and__3546__auto____8712 = x__445__auto____8708.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8712))
{return cljs.core.not.call(null,x__445__auto____8708.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8712;
}
} else
{return and__3546__auto____8710;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8708);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8720 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8721 = x__445__auto____8720;

if(cljs.core.truth_(and__3546__auto____8721))
{var and__3546__auto____8722 = x__445__auto____8720.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8722))
{return cljs.core.not.call(null,x__445__auto____8720.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8722;
}
} else
{return and__3546__auto____8721;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8720);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8732 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8732.push(key);
}));
return keys__8732;
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
{var x__445__auto____8761 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8762 = x__445__auto____8761;

if(cljs.core.truth_(and__3546__auto____8762))
{var and__3546__auto____8763 = x__445__auto____8761.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8763))
{return cljs.core.not.call(null,x__445__auto____8761.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8763;
}
} else
{return and__3546__auto____8762;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8761);
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
var and__3546__auto____8776 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8776))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8782 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8782))
{return or__3548__auto____8782;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8776;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8803 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8803))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8803;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8807 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8807))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8807;
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
var and__3546__auto____8819 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8819))
{return (n == n.toFixed());
} else
{return and__3546__auto____8819;
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
if(cljs.core.truth_((function (){var and__3546__auto____8826 = coll;

if(cljs.core.truth_(and__3546__auto____8826))
{var and__3546__auto____8830 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8830))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8830;
}
} else
{return and__3546__auto____8826;
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
var distinct_QMARK___8839 = (function (x){
return true;
});
var distinct_QMARK___8840 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8841 = (function() { 
var G__8848__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8831 = cljs.core.set([y,x]);
var xs__8832 = more;

while(true){
var x__8835 = cljs.core.first.call(null,xs__8832);
var etc__8837 = cljs.core.next.call(null,xs__8832);

if(cljs.core.truth_(xs__8832))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8831,x__8835)))
{return false;
} else
{{
var G__8857 = cljs.core.conj.call(null,s__8831,x__8835);
var G__8858 = etc__8837;
s__8831 = G__8857;
xs__8832 = G__8858;
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
var G__8848 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8848__delegate.call(this, x, y, more);
};
G__8848.cljs$lang$maxFixedArity = 2;
G__8848.cljs$lang$applyTo = (function (arglist__8863){
var x = cljs.core.first(arglist__8863);
var y = cljs.core.first(cljs.core.next(arglist__8863));
var more = cljs.core.rest(cljs.core.next(arglist__8863));
return G__8848__delegate.call(this, x, y, more);
});
return G__8848;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8839.call(this,x);
case  2 :
return distinct_QMARK___8840.call(this,x,y);
default:
return distinct_QMARK___8841.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8841.cljs$lang$applyTo;
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
var r__8877 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8877)))
{return r__8877;
} else
{if(cljs.core.truth_(r__8877))
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
var sort__8892 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8893 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8891 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8891,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8891);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8892.call(this,comp);
case  2 :
return sort__8893.call(this,comp,coll);
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
var sort_by__8917 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8918 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8917.call(this,keyfn,comp);
case  3 :
return sort_by__8918.call(this,keyfn,comp,coll);
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
var reduce__8926 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8927 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8926.call(this,f,val);
case  3 :
return reduce__8927.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8939 = (function (f,coll){
var temp__3695__auto____8932 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8932))
{var s__8933 = temp__3695__auto____8932;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8933),cljs.core.next.call(null,s__8933));
} else
{return f.call(null);
}
});
var seq_reduce__8940 = (function (f,val,coll){
var val__8936 = val;
var coll__8937 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8937))
{{
var G__8945 = f.call(null,val__8936,cljs.core.first.call(null,coll__8937));
var G__8946 = cljs.core.next.call(null,coll__8937);
val__8936 = G__8945;
coll__8937 = G__8946;
continue;
}
} else
{return val__8936;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8939.call(this,f,val);
case  3 :
return seq_reduce__8940.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8950 = null;
var G__8950__8951 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8950__8952 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8950 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8950__8951.call(this,coll,f);
case  3 :
return G__8950__8952.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8950;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8959 = (function (){
return 0;
});
var _PLUS___8960 = (function (x){
return x;
});
var _PLUS___8961 = (function (x,y){
return (x + y);
});
var _PLUS___8962 = (function() { 
var G__8964__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8964 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8964__delegate.call(this, x, y, more);
};
G__8964.cljs$lang$maxFixedArity = 2;
G__8964.cljs$lang$applyTo = (function (arglist__8970){
var x = cljs.core.first(arglist__8970);
var y = cljs.core.first(cljs.core.next(arglist__8970));
var more = cljs.core.rest(cljs.core.next(arglist__8970));
return G__8964__delegate.call(this, x, y, more);
});
return G__8964;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8959.call(this);
case  1 :
return _PLUS___8960.call(this,x);
case  2 :
return _PLUS___8961.call(this,x,y);
default:
return _PLUS___8962.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8962.cljs$lang$applyTo;
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
var ___8976 = (function (x){
return (- x);
});
var ___8977 = (function (x,y){
return (x - y);
});
var ___8978 = (function() { 
var G__8980__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8980 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8980__delegate.call(this, x, y, more);
};
G__8980.cljs$lang$maxFixedArity = 2;
G__8980.cljs$lang$applyTo = (function (arglist__8985){
var x = cljs.core.first(arglist__8985);
var y = cljs.core.first(cljs.core.next(arglist__8985));
var more = cljs.core.rest(cljs.core.next(arglist__8985));
return G__8980__delegate.call(this, x, y, more);
});
return G__8980;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8976.call(this,x);
case  2 :
return ___8977.call(this,x,y);
default:
return ___8978.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8978.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8989 = (function (){
return 1;
});
var _STAR___8990 = (function (x){
return x;
});
var _STAR___8991 = (function (x,y){
return (x * y);
});
var _STAR___8992 = (function() { 
var G__8994__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8994 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8994__delegate.call(this, x, y, more);
};
G__8994.cljs$lang$maxFixedArity = 2;
G__8994.cljs$lang$applyTo = (function (arglist__8995){
var x = cljs.core.first(arglist__8995);
var y = cljs.core.first(cljs.core.next(arglist__8995));
var more = cljs.core.rest(cljs.core.next(arglist__8995));
return G__8994__delegate.call(this, x, y, more);
});
return G__8994;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8989.call(this);
case  1 :
return _STAR___8990.call(this,x);
case  2 :
return _STAR___8991.call(this,x,y);
default:
return _STAR___8992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8992.cljs$lang$applyTo;
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
var _SLASH___9005 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9025 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9026 = (function() { 
var G__9028__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9028 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9028__delegate.call(this, x, y, more);
};
G__9028.cljs$lang$maxFixedArity = 2;
G__9028.cljs$lang$applyTo = (function (arglist__9029){
var x = cljs.core.first(arglist__9029);
var y = cljs.core.first(cljs.core.next(arglist__9029));
var more = cljs.core.rest(cljs.core.next(arglist__9029));
return G__9028__delegate.call(this, x, y, more);
});
return G__9028;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9005.call(this,x);
case  2 :
return _SLASH___9025.call(this,x,y);
default:
return _SLASH___9026.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9026.cljs$lang$applyTo;
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
var _LT___9036 = (function (x){
return true;
});
var _LT___9037 = (function (x,y){
return (x < y);
});
var _LT___9038 = (function() { 
var G__9042__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9043 = y;
var G__9045 = cljs.core.first.call(null,more);
var G__9046 = cljs.core.next.call(null,more);
x = G__9043;
y = G__9045;
more = G__9046;
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
var G__9042 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9042__delegate.call(this, x, y, more);
};
G__9042.cljs$lang$maxFixedArity = 2;
G__9042.cljs$lang$applyTo = (function (arglist__9048){
var x = cljs.core.first(arglist__9048);
var y = cljs.core.first(cljs.core.next(arglist__9048));
var more = cljs.core.rest(cljs.core.next(arglist__9048));
return G__9042__delegate.call(this, x, y, more);
});
return G__9042;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9036.call(this,x);
case  2 :
return _LT___9037.call(this,x,y);
default:
return _LT___9038.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9038.cljs$lang$applyTo;
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
var _LT__EQ___9117 = (function (x){
return true;
});
var _LT__EQ___9118 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9119 = (function() { 
var G__9121__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9122 = y;
var G__9123 = cljs.core.first.call(null,more);
var G__9124 = cljs.core.next.call(null,more);
x = G__9122;
y = G__9123;
more = G__9124;
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
var G__9121 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9121__delegate.call(this, x, y, more);
};
G__9121.cljs$lang$maxFixedArity = 2;
G__9121.cljs$lang$applyTo = (function (arglist__9125){
var x = cljs.core.first(arglist__9125);
var y = cljs.core.first(cljs.core.next(arglist__9125));
var more = cljs.core.rest(cljs.core.next(arglist__9125));
return G__9121__delegate.call(this, x, y, more);
});
return G__9121;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9117.call(this,x);
case  2 :
return _LT__EQ___9118.call(this,x,y);
default:
return _LT__EQ___9119.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9119.cljs$lang$applyTo;
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
var _GT___9132 = (function (x){
return true;
});
var _GT___9133 = (function (x,y){
return (x > y);
});
var _GT___9134 = (function() { 
var G__9136__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9137 = y;
var G__9139 = cljs.core.first.call(null,more);
var G__9142 = cljs.core.next.call(null,more);
x = G__9137;
y = G__9139;
more = G__9142;
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
var G__9136 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9136__delegate.call(this, x, y, more);
};
G__9136.cljs$lang$maxFixedArity = 2;
G__9136.cljs$lang$applyTo = (function (arglist__9148){
var x = cljs.core.first(arglist__9148);
var y = cljs.core.first(cljs.core.next(arglist__9148));
var more = cljs.core.rest(cljs.core.next(arglist__9148));
return G__9136__delegate.call(this, x, y, more);
});
return G__9136;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9132.call(this,x);
case  2 :
return _GT___9133.call(this,x,y);
default:
return _GT___9134.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9134.cljs$lang$applyTo;
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
var _GT__EQ___9154 = (function (x){
return true;
});
var _GT__EQ___9157 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9159 = (function() { 
var G__9161__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9162 = y;
var G__9163 = cljs.core.first.call(null,more);
var G__9164 = cljs.core.next.call(null,more);
x = G__9162;
y = G__9163;
more = G__9164;
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
var G__9161 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9161__delegate.call(this, x, y, more);
};
G__9161.cljs$lang$maxFixedArity = 2;
G__9161.cljs$lang$applyTo = (function (arglist__9168){
var x = cljs.core.first(arglist__9168);
var y = cljs.core.first(cljs.core.next(arglist__9168));
var more = cljs.core.rest(cljs.core.next(arglist__9168));
return G__9161__delegate.call(this, x, y, more);
});
return G__9161;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9154.call(this,x);
case  2 :
return _GT__EQ___9157.call(this,x,y);
default:
return _GT__EQ___9159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9159.cljs$lang$applyTo;
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
var max__9177 = (function (x){
return x;
});
var max__9178 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9179 = (function() { 
var G__9181__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9181 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9181__delegate.call(this, x, y, more);
};
G__9181.cljs$lang$maxFixedArity = 2;
G__9181.cljs$lang$applyTo = (function (arglist__9187){
var x = cljs.core.first(arglist__9187);
var y = cljs.core.first(cljs.core.next(arglist__9187));
var more = cljs.core.rest(cljs.core.next(arglist__9187));
return G__9181__delegate.call(this, x, y, more);
});
return G__9181;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9177.call(this,x);
case  2 :
return max__9178.call(this,x,y);
default:
return max__9179.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9179.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9190 = (function (x){
return x;
});
var min__9191 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9192 = (function() { 
var G__9194__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9194 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9194__delegate.call(this, x, y, more);
};
G__9194.cljs$lang$maxFixedArity = 2;
G__9194.cljs$lang$applyTo = (function (arglist__9196){
var x = cljs.core.first(arglist__9196);
var y = cljs.core.first(cljs.core.next(arglist__9196));
var more = cljs.core.rest(cljs.core.next(arglist__9196));
return G__9194__delegate.call(this, x, y, more);
});
return G__9194;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9190.call(this,x);
case  2 :
return min__9191.call(this,x,y);
default:
return min__9192.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9192.cljs$lang$applyTo;
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
var rem__9202 = (n % d);

return cljs.core.fix.call(null,((n - rem__9202) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9203 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9203));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9270 = (function (){
return Math.random.call(null);
});
var rand__9271 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9270.call(this);
case  1 :
return rand__9271.call(this,n);
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
var _EQ__EQ___9323 = (function (x){
return true;
});
var _EQ__EQ___9324 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9325 = (function() { 
var G__9327__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9328 = y;
var G__9329 = cljs.core.first.call(null,more);
var G__9331 = cljs.core.next.call(null,more);
x = G__9328;
y = G__9329;
more = G__9331;
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
var G__9327 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9327__delegate.call(this, x, y, more);
};
G__9327.cljs$lang$maxFixedArity = 2;
G__9327.cljs$lang$applyTo = (function (arglist__9343){
var x = cljs.core.first(arglist__9343);
var y = cljs.core.first(cljs.core.next(arglist__9343));
var more = cljs.core.rest(cljs.core.next(arglist__9343));
return G__9327__delegate.call(this, x, y, more);
});
return G__9327;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9323.call(this,x);
case  2 :
return _EQ__EQ___9324.call(this,x,y);
default:
return _EQ__EQ___9325.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9325.cljs$lang$applyTo;
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
var n__9361 = n;
var xs__9362 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9363 = xs__9362;

if(cljs.core.truth_(and__3546__auto____9363))
{return (n__9361 > 0);
} else
{return and__3546__auto____9363;
}
})()))
{{
var G__9372 = (n__9361 - 1);
var G__9373 = cljs.core.next.call(null,xs__9362);
n__9361 = G__9372;
xs__9362 = G__9373;
continue;
}
} else
{return xs__9362;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9534 = null;
var G__9534__9535 = (function (coll,n){
var temp__3695__auto____9522 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9522))
{var xs__9523 = temp__3695__auto____9522;

return cljs.core.first.call(null,xs__9523);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9534__9536 = (function (coll,n,not_found){
var temp__3695__auto____9528 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9528))
{var xs__9530 = temp__3695__auto____9528;

return cljs.core.first.call(null,xs__9530);
} else
{return not_found;
}
});
G__9534 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9534__9535.call(this,coll,n);
case  3 :
return G__9534__9536.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9534;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9545 = (function (){
return "";
});
var str_STAR___9546 = (function (x){
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
var str_STAR___9547 = (function() { 
var G__9549__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9552 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9554 = cljs.core.next.call(null,more);
sb = G__9552;
more = G__9554;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9549 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9549__delegate.call(this, x, ys);
};
G__9549.cljs$lang$maxFixedArity = 1;
G__9549.cljs$lang$applyTo = (function (arglist__9557){
var x = cljs.core.first(arglist__9557);
var ys = cljs.core.rest(arglist__9557);
return G__9549__delegate.call(this, x, ys);
});
return G__9549;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9545.call(this);
case  1 :
return str_STAR___9546.call(this,x);
default:
return str_STAR___9547.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9547.cljs$lang$applyTo;
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
var str__9563 = (function (){
return "";
});
var str__9564 = (function (x){
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
var str__9565 = (function() { 
var G__9570__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9570 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9570__delegate.call(this, x, ys);
};
G__9570.cljs$lang$maxFixedArity = 1;
G__9570.cljs$lang$applyTo = (function (arglist__9571){
var x = cljs.core.first(arglist__9571);
var ys = cljs.core.rest(arglist__9571);
return G__9570__delegate.call(this, x, ys);
});
return G__9570;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9563.call(this);
case  1 :
return str__9564.call(this,x);
default:
return str__9565.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9565.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9573 = (function (s,start){
return s.substring(start);
});
var subs__9575 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9573.call(this,s,start);
case  3 :
return subs__9575.call(this,s,start,end);
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
var symbol__9579 = (function (name){
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
var symbol__9580 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9579.call(this,ns);
case  2 :
return symbol__9580.call(this,ns,name);
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
var keyword__9583 = (function (name){
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
var keyword__9584 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9583.call(this,ns);
case  2 :
return keyword__9584.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9596 = cljs.core.seq.call(null,x);
var ys__9598 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9596)))
{return cljs.core.nil_QMARK_.call(null,ys__9598);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9598)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9596),cljs.core.first.call(null,ys__9598))))
{{
var G__9601 = cljs.core.next.call(null,xs__9596);
var G__9602 = cljs.core.next.call(null,ys__9598);
xs__9596 = G__9601;
ys__9598 = G__9602;
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
return cljs.core.reduce.call(null,(function (p1__9604_SHARP_,p2__9606_SHARP_){
return cljs.core.hash_combine.call(null,p1__9604_SHARP_,cljs.core.hash.call(null,p2__9606_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9608__9610 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9608__9610))
{var G__9612__9615 = cljs.core.first.call(null,G__9608__9610);
var vec__9613__9616 = G__9612__9615;
var key_name__9618 = cljs.core.nth.call(null,vec__9613__9616,0,null);
var f__9619 = cljs.core.nth.call(null,vec__9613__9616,1,null);
var G__9608__9620 = G__9608__9610;

var G__9612__9621 = G__9612__9615;
var G__9608__9623 = G__9608__9620;

while(true){
var vec__9624__9625 = G__9612__9621;
var key_name__9627 = cljs.core.nth.call(null,vec__9624__9625,0,null);
var f__9723 = cljs.core.nth.call(null,vec__9624__9625,1,null);
var G__9608__9724 = G__9608__9623;

var str_name__9725 = cljs.core.name.call(null,key_name__9627);

obj[str_name__9725] = f__9723;
var temp__3698__auto____9726 = cljs.core.next.call(null,G__9608__9724);

if(cljs.core.truth_(temp__3698__auto____9726))
{var G__9608__9728 = temp__3698__auto____9726;

{
var G__9730 = cljs.core.first.call(null,G__9608__9728);
var G__9731 = G__9608__9728;
G__9612__9621 = G__9730;
G__9608__9623 = G__9731;
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
var this__9732 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9733 = this;
return (new cljs.core.List(this__9733.meta,o,coll,(this__9733.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9734 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9735 = this;
return this__9735.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9736 = this;
return this__9736.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9737 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9738 = this;
return this__9738.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9739 = this;
return this__9739.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9740 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9741 = this;
return (new cljs.core.List(meta,this__9741.first,this__9741.rest,this__9741.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9745 = this;
return this__9745.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9746 = this;
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
var this__9756 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9757 = this;
return (new cljs.core.List(this__9757.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9758 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9759 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9760 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9761 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9762 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9763 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9764 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9765 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9766 = this;
return this__9766.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9767 = this;
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
list.cljs$lang$applyTo = (function (arglist__9814){
var items = cljs.core.seq( arglist__9814 );;
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
var this__9817 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9818 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9823 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9825 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9825.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9832 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9833 = this;
return this__9833.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9834 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9834.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9834.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9835 = this;
return this__9835.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9836 = this;
return (new cljs.core.Cons(meta,this__9836.first,this__9836.rest));
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
var G__9847 = null;
var G__9847__9849 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9847__9850 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9847 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9847__9849.call(this,string,f);
case  3 :
return G__9847__9850.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9847;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9860 = null;
var G__9860__9862 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9860__9864 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9860 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9860__9862.call(this,string,k);
case  3 :
return G__9860__9864.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9860;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9874 = null;
var G__9874__9875 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9874__9876 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9874 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9874__9875.call(this,string,n);
case  3 :
return G__9874__9876.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9874;
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
var G__9880 = null;
var G__9880__9881 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9880__9882 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9880 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9880__9881.call(this,this$,coll);
case  3 :
return G__9880__9882.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9880;
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
var x__9925 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9925;
} else
{lazy_seq.x = x__9925.call(null);
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
var this__10066 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10072 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10073 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10074 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10074.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10076 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10078 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10080 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10081 = this;
return this__10081.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10082 = this;
return (new cljs.core.LazySeq(meta,this__10082.realized,this__10082.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10226 = cljs.core.array.call(null);

var s__10231 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10231)))
{ary__10226.push(cljs.core.first.call(null,s__10231));
{
var G__10239 = cljs.core.next.call(null,s__10231);
s__10231 = G__10239;
continue;
}
} else
{return ary__10226;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10241 = s;
var i__10242 = n;
var sum__10243 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10245 = (i__10242 > 0);

if(cljs.core.truth_(and__3546__auto____10245))
{return cljs.core.seq.call(null,s__10241);
} else
{return and__3546__auto____10245;
}
})()))
{{
var G__10248 = cljs.core.next.call(null,s__10241);
var G__10249 = (i__10242 - 1);
var G__10250 = (sum__10243 + 1);
s__10241 = G__10248;
i__10242 = G__10249;
sum__10243 = G__10250;
continue;
}
} else
{return sum__10243;
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
var concat__10265 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10266 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10267 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10258 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10258))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10258),concat.call(null,cljs.core.rest.call(null,s__10258),y));
} else
{return y;
}
})));
});
var concat__10268 = (function() { 
var G__10270__delegate = function (x,y,zs){
var cat__10262 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10261 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10261))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10261),cat.call(null,cljs.core.rest.call(null,xys__10261),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10262.call(null,concat.call(null,x,y),zs);
};
var G__10270 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10270__delegate.call(this, x, y, zs);
};
G__10270.cljs$lang$maxFixedArity = 2;
G__10270.cljs$lang$applyTo = (function (arglist__10277){
var x = cljs.core.first(arglist__10277);
var y = cljs.core.first(cljs.core.next(arglist__10277));
var zs = cljs.core.rest(cljs.core.next(arglist__10277));
return G__10270__delegate.call(this, x, y, zs);
});
return G__10270;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10265.call(this);
case  1 :
return concat__10266.call(this,x);
case  2 :
return concat__10267.call(this,x,y);
default:
return concat__10268.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10268.cljs$lang$applyTo;
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
var list_STAR___10330 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10331 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10332 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10333 = (function() { 
var G__10336__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10336 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10336__delegate.call(this, a, b, c, d, more);
};
G__10336.cljs$lang$maxFixedArity = 4;
G__10336.cljs$lang$applyTo = (function (arglist__10340){
var a = cljs.core.first(arglist__10340);
var b = cljs.core.first(cljs.core.next(arglist__10340));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10340)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10340))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10340))));
return G__10336__delegate.call(this, a, b, c, d, more);
});
return G__10336;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10329.call(this,a);
case  2 :
return list_STAR___10330.call(this,a,b);
case  3 :
return list_STAR___10331.call(this,a,b,c);
case  4 :
return list_STAR___10332.call(this,a,b,c,d);
default:
return list_STAR___10333.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10333.cljs$lang$applyTo;
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
var apply__10390 = (function (f,args){
var fixed_arity__10347 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10347 + 1)) <= fixed_arity__10347)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10391 = (function (f,x,args){
var arglist__10357 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10358 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10357,fixed_arity__10358) <= fixed_arity__10358)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10357));
} else
{return f.cljs$lang$applyTo(arglist__10357);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10357));
}
});
var apply__10392 = (function (f,x,y,args){
var arglist__10360 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10366 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10360,fixed_arity__10366) <= fixed_arity__10366)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10360));
} else
{return f.cljs$lang$applyTo(arglist__10360);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10360));
}
});
var apply__10393 = (function (f,x,y,z,args){
var arglist__10374 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10375 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10374,fixed_arity__10375) <= fixed_arity__10375)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10374));
} else
{return f.cljs$lang$applyTo(arglist__10374);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10374));
}
});
var apply__10394 = (function() { 
var G__10424__delegate = function (f,a,b,c,d,args){
var arglist__10379 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10380 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10379,fixed_arity__10380) <= fixed_arity__10380)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10379));
} else
{return f.cljs$lang$applyTo(arglist__10379);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10379));
}
};
var G__10424 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10424__delegate.call(this, f, a, b, c, d, args);
};
G__10424.cljs$lang$maxFixedArity = 5;
G__10424.cljs$lang$applyTo = (function (arglist__10425){
var f = cljs.core.first(arglist__10425);
var a = cljs.core.first(cljs.core.next(arglist__10425));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10425)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10425))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10425)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10425)))));
return G__10424__delegate.call(this, f, a, b, c, d, args);
});
return G__10424;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10390.call(this,f,a);
case  3 :
return apply__10391.call(this,f,a,b);
case  4 :
return apply__10392.call(this,f,a,b,c);
case  5 :
return apply__10393.call(this,f,a,b,c,d);
default:
return apply__10394.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10394.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10457){
var obj = cljs.core.first(arglist__10457);
var f = cljs.core.first(cljs.core.next(arglist__10457));
var args = cljs.core.rest(cljs.core.next(arglist__10457));
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
var not_EQ___10463 = (function (x){
return false;
});
var not_EQ___10464 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10465 = (function() { 
var G__10467__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10467 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10467__delegate.call(this, x, y, more);
};
G__10467.cljs$lang$maxFixedArity = 2;
G__10467.cljs$lang$applyTo = (function (arglist__10475){
var x = cljs.core.first(arglist__10475);
var y = cljs.core.first(cljs.core.next(arglist__10475));
var more = cljs.core.rest(cljs.core.next(arglist__10475));
return G__10467__delegate.call(this, x, y, more);
});
return G__10467;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10463.call(this,x);
case  2 :
return not_EQ___10464.call(this,x,y);
default:
return not_EQ___10465.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10465.cljs$lang$applyTo;
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
var G__10499 = pred;
var G__10500 = cljs.core.next.call(null,coll);
pred = G__10499;
coll = G__10500;
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
{var or__3548__auto____10517 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10517))
{return or__3548__auto____10517;
} else
{{
var G__10520 = pred;
var G__10521 = cljs.core.next.call(null,coll);
pred = G__10520;
coll = G__10521;
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
var G__10576 = null;
var G__10576__10577 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10576__10578 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10576__10579 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10576__10580 = (function() { 
var G__10584__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10584 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10584__delegate.call(this, x, y, zs);
};
G__10584.cljs$lang$maxFixedArity = 2;
G__10584.cljs$lang$applyTo = (function (arglist__10588){
var x = cljs.core.first(arglist__10588);
var y = cljs.core.first(cljs.core.next(arglist__10588));
var zs = cljs.core.rest(cljs.core.next(arglist__10588));
return G__10584__delegate.call(this, x, y, zs);
});
return G__10584;
})()
;
G__10576 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10576__10577.call(this);
case  1 :
return G__10576__10578.call(this,x);
case  2 :
return G__10576__10579.call(this,x,y);
default:
return G__10576__10580.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10576.cljs$lang$maxFixedArity = 2;
G__10576.cljs$lang$applyTo = G__10576__10580.cljs$lang$applyTo;
return G__10576;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10622__delegate = function (args){
return x;
};
var G__10622 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10622__delegate.call(this, args);
};
G__10622.cljs$lang$maxFixedArity = 0;
G__10622.cljs$lang$applyTo = (function (arglist__10624){
var args = cljs.core.seq( arglist__10624 );;
return G__10622__delegate.call(this, args);
});
return G__10622;
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
var comp__10641 = (function (){
return cljs.core.identity;
});
var comp__10642 = (function (f){
return f;
});
var comp__10643 = (function (f,g){
return (function() {
var G__10648 = null;
var G__10648__10652 = (function (){
return f.call(null,g.call(null));
});
var G__10648__10653 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10648__10654 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10648__10655 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10648__10678 = (function() { 
var G__10735__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10735 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10735__delegate.call(this, x, y, z, args);
};
G__10735.cljs$lang$maxFixedArity = 3;
G__10735.cljs$lang$applyTo = (function (arglist__10741){
var x = cljs.core.first(arglist__10741);
var y = cljs.core.first(cljs.core.next(arglist__10741));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10741)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10741)));
return G__10735__delegate.call(this, x, y, z, args);
});
return G__10735;
})()
;
G__10648 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10648__10652.call(this);
case  1 :
return G__10648__10653.call(this,x);
case  2 :
return G__10648__10654.call(this,x,y);
case  3 :
return G__10648__10655.call(this,x,y,z);
default:
return G__10648__10678.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10648.cljs$lang$maxFixedArity = 3;
G__10648.cljs$lang$applyTo = G__10648__10678.cljs$lang$applyTo;
return G__10648;
})()
});
var comp__10644 = (function (f,g,h){
return (function() {
var G__10743 = null;
var G__10743__10744 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10743__10745 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10743__10746 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10743__10747 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10743__10748 = (function() { 
var G__10753__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10753 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10753__delegate.call(this, x, y, z, args);
};
G__10753.cljs$lang$maxFixedArity = 3;
G__10753.cljs$lang$applyTo = (function (arglist__10755){
var x = cljs.core.first(arglist__10755);
var y = cljs.core.first(cljs.core.next(arglist__10755));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10755)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10755)));
return G__10753__delegate.call(this, x, y, z, args);
});
return G__10753;
})()
;
G__10743 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10743__10744.call(this);
case  1 :
return G__10743__10745.call(this,x);
case  2 :
return G__10743__10746.call(this,x,y);
case  3 :
return G__10743__10747.call(this,x,y,z);
default:
return G__10743__10748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10743.cljs$lang$maxFixedArity = 3;
G__10743.cljs$lang$applyTo = G__10743__10748.cljs$lang$applyTo;
return G__10743;
})()
});
var comp__10645 = (function() { 
var G__10756__delegate = function (f1,f2,f3,fs){
var fs__10638 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10757__delegate = function (args){
var ret__10639 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10638),args);
var fs__10640 = cljs.core.next.call(null,fs__10638);

while(true){
if(cljs.core.truth_(fs__10640))
{{
var G__10758 = cljs.core.first.call(null,fs__10640).call(null,ret__10639);
var G__10759 = cljs.core.next.call(null,fs__10640);
ret__10639 = G__10758;
fs__10640 = G__10759;
continue;
}
} else
{return ret__10639;
}
break;
}
};
var G__10757 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10757__delegate.call(this, args);
};
G__10757.cljs$lang$maxFixedArity = 0;
G__10757.cljs$lang$applyTo = (function (arglist__10760){
var args = cljs.core.seq( arglist__10760 );;
return G__10757__delegate.call(this, args);
});
return G__10757;
})()
;
};
var G__10756 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10756__delegate.call(this, f1, f2, f3, fs);
};
G__10756.cljs$lang$maxFixedArity = 3;
G__10756.cljs$lang$applyTo = (function (arglist__10761){
var f1 = cljs.core.first(arglist__10761);
var f2 = cljs.core.first(cljs.core.next(arglist__10761));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10761)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10761)));
return G__10756__delegate.call(this, f1, f2, f3, fs);
});
return G__10756;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10641.call(this);
case  1 :
return comp__10642.call(this,f1);
case  2 :
return comp__10643.call(this,f1,f2);
case  3 :
return comp__10644.call(this,f1,f2,f3);
default:
return comp__10645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10645.cljs$lang$applyTo;
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
var partial__10790 = (function (f,arg1){
return (function() { 
var G__10796__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10796 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10796__delegate.call(this, args);
};
G__10796.cljs$lang$maxFixedArity = 0;
G__10796.cljs$lang$applyTo = (function (arglist__10798){
var args = cljs.core.seq( arglist__10798 );;
return G__10796__delegate.call(this, args);
});
return G__10796;
})()
;
});
var partial__10791 = (function (f,arg1,arg2){
return (function() { 
var G__10800__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10800 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10800__delegate.call(this, args);
};
G__10800.cljs$lang$maxFixedArity = 0;
G__10800.cljs$lang$applyTo = (function (arglist__10804){
var args = cljs.core.seq( arglist__10804 );;
return G__10800__delegate.call(this, args);
});
return G__10800;
})()
;
});
var partial__10792 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10810__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10810 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10810__delegate.call(this, args);
};
G__10810.cljs$lang$maxFixedArity = 0;
G__10810.cljs$lang$applyTo = (function (arglist__10814){
var args = cljs.core.seq( arglist__10814 );;
return G__10810__delegate.call(this, args);
});
return G__10810;
})()
;
});
var partial__10793 = (function() { 
var G__10815__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10818__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10818 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10818__delegate.call(this, args);
};
G__10818.cljs$lang$maxFixedArity = 0;
G__10818.cljs$lang$applyTo = (function (arglist__10821){
var args = cljs.core.seq( arglist__10821 );;
return G__10818__delegate.call(this, args);
});
return G__10818;
})()
;
};
var G__10815 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10815__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10815.cljs$lang$maxFixedArity = 4;
G__10815.cljs$lang$applyTo = (function (arglist__10838){
var f = cljs.core.first(arglist__10838);
var arg1 = cljs.core.first(cljs.core.next(arglist__10838));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10838)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10838))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10838))));
return G__10815__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10815;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10790.call(this,f,arg1);
case  3 :
return partial__10791.call(this,f,arg1,arg2);
case  4 :
return partial__10792.call(this,f,arg1,arg2,arg3);
default:
return partial__10793.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10793.cljs$lang$applyTo;
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
var fnil__10861 = (function (f,x){
return (function() {
var G__10867 = null;
var G__10867__10868 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10867__10869 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10867__10870 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10867__10871 = (function() { 
var G__10877__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10877 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10877__delegate.call(this, a, b, c, ds);
};
G__10877.cljs$lang$maxFixedArity = 3;
G__10877.cljs$lang$applyTo = (function (arglist__10880){
var a = cljs.core.first(arglist__10880);
var b = cljs.core.first(cljs.core.next(arglist__10880));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10880)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10880)));
return G__10877__delegate.call(this, a, b, c, ds);
});
return G__10877;
})()
;
G__10867 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10867__10868.call(this,a);
case  2 :
return G__10867__10869.call(this,a,b);
case  3 :
return G__10867__10870.call(this,a,b,c);
default:
return G__10867__10871.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10867.cljs$lang$maxFixedArity = 3;
G__10867.cljs$lang$applyTo = G__10867__10871.cljs$lang$applyTo;
return G__10867;
})()
});
var fnil__10863 = (function (f,x,y){
return (function() {
var G__10881 = null;
var G__10881__10882 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10881__10883 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10881__10884 = (function() { 
var G__10886__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10886 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10886__delegate.call(this, a, b, c, ds);
};
G__10886.cljs$lang$maxFixedArity = 3;
G__10886.cljs$lang$applyTo = (function (arglist__10887){
var a = cljs.core.first(arglist__10887);
var b = cljs.core.first(cljs.core.next(arglist__10887));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10887)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10887)));
return G__10886__delegate.call(this, a, b, c, ds);
});
return G__10886;
})()
;
G__10881 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10881__10882.call(this,a,b);
case  3 :
return G__10881__10883.call(this,a,b,c);
default:
return G__10881__10884.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10881.cljs$lang$maxFixedArity = 3;
G__10881.cljs$lang$applyTo = G__10881__10884.cljs$lang$applyTo;
return G__10881;
})()
});
var fnil__10864 = (function (f,x,y,z){
return (function() {
var G__10891 = null;
var G__10891__10892 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10891__10893 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10891__10894 = (function() { 
var G__10902__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10902 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10902__delegate.call(this, a, b, c, ds);
};
G__10902.cljs$lang$maxFixedArity = 3;
G__10902.cljs$lang$applyTo = (function (arglist__10909){
var a = cljs.core.first(arglist__10909);
var b = cljs.core.first(cljs.core.next(arglist__10909));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10909)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10909)));
return G__10902__delegate.call(this, a, b, c, ds);
});
return G__10902;
})()
;
G__10891 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10891__10892.call(this,a,b);
case  3 :
return G__10891__10893.call(this,a,b,c);
default:
return G__10891__10894.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10891.cljs$lang$maxFixedArity = 3;
G__10891.cljs$lang$applyTo = G__10891__10894.cljs$lang$applyTo;
return G__10891;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10861.call(this,f,x);
case  3 :
return fnil__10863.call(this,f,x,y);
case  4 :
return fnil__10864.call(this,f,x,y,z);
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
var mapi__10928 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10918 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10918))
{var s__10919 = temp__3698__auto____10918;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10919)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10919)));
} else
{return null;
}
})));
});

return mapi__10928.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10938 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10938))
{var s__10939 = temp__3698__auto____10938;

var x__10941 = f.call(null,cljs.core.first.call(null,s__10939));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10941)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10939));
} else
{return cljs.core.cons.call(null,x__10941,keep.call(null,f,cljs.core.rest.call(null,s__10939)));
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
var keepi__11092 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11088 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11088))
{var s__11089 = temp__3698__auto____11088;

var x__11090 = f.call(null,idx,cljs.core.first.call(null,s__11089));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11090)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11089));
} else
{return cljs.core.cons.call(null,x__11090,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11089)));
}
} else
{return null;
}
})));
});

return keepi__11092.call(null,0,coll);
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
var every_pred__11286 = (function (p){
return (function() {
var ep1 = null;
var ep1__11292 = (function (){
return true;
});
var ep1__11294 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11295 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11136 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11136))
{return p.call(null,y);
} else
{return and__3546__auto____11136;
}
})());
});
var ep1__11296 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11140 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11140))
{var and__3546__auto____11141 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11141))
{return p.call(null,z);
} else
{return and__3546__auto____11141;
}
} else
{return and__3546__auto____11140;
}
})());
});
var ep1__11297 = (function() { 
var G__11319__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11147 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11147))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11147;
}
})());
};
var G__11319 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11319__delegate.call(this, x, y, z, args);
};
G__11319.cljs$lang$maxFixedArity = 3;
G__11319.cljs$lang$applyTo = (function (arglist__11326){
var x = cljs.core.first(arglist__11326);
var y = cljs.core.first(cljs.core.next(arglist__11326));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11326)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11326)));
return G__11319__delegate.call(this, x, y, z, args);
});
return G__11319;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11292.call(this);
case  1 :
return ep1__11294.call(this,x);
case  2 :
return ep1__11295.call(this,x,y);
case  3 :
return ep1__11296.call(this,x,y,z);
default:
return ep1__11297.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11297.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11287 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11331 = (function (){
return true;
});
var ep2__11332 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11155 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11155))
{return p2.call(null,x);
} else
{return and__3546__auto____11155;
}
})());
});
var ep2__11333 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11158 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11158))
{var and__3546__auto____11159 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11159))
{var and__3546__auto____11163 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11163))
{return p2.call(null,y);
} else
{return and__3546__auto____11163;
}
} else
{return and__3546__auto____11159;
}
} else
{return and__3546__auto____11158;
}
})());
});
var ep2__11334 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11168 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11168))
{var and__3546__auto____11174 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11174))
{var and__3546__auto____11176 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11176))
{var and__3546__auto____11178 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11178))
{var and__3546__auto____11179 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11179))
{return p2.call(null,z);
} else
{return and__3546__auto____11179;
}
} else
{return and__3546__auto____11178;
}
} else
{return and__3546__auto____11176;
}
} else
{return and__3546__auto____11174;
}
} else
{return and__3546__auto____11168;
}
})());
});
var ep2__11335 = (function() { 
var G__11347__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11183 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11183))
{return cljs.core.every_QMARK_.call(null,(function (p1__11077_SHARP_){
var and__3546__auto____11186 = p1.call(null,p1__11077_SHARP_);

if(cljs.core.truth_(and__3546__auto____11186))
{return p2.call(null,p1__11077_SHARP_);
} else
{return and__3546__auto____11186;
}
}),args);
} else
{return and__3546__auto____11183;
}
})());
};
var G__11347 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11347__delegate.call(this, x, y, z, args);
};
G__11347.cljs$lang$maxFixedArity = 3;
G__11347.cljs$lang$applyTo = (function (arglist__11378){
var x = cljs.core.first(arglist__11378);
var y = cljs.core.first(cljs.core.next(arglist__11378));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11378)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11378)));
return G__11347__delegate.call(this, x, y, z, args);
});
return G__11347;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11331.call(this);
case  1 :
return ep2__11332.call(this,x);
case  2 :
return ep2__11333.call(this,x,y);
case  3 :
return ep2__11334.call(this,x,y,z);
default:
return ep2__11335.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11335.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11288 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11383 = (function (){
return true;
});
var ep3__11385 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11192 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11192))
{var and__3546__auto____11195 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11195))
{return p3.call(null,x);
} else
{return and__3546__auto____11195;
}
} else
{return and__3546__auto____11192;
}
})());
});
var ep3__11386 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11198 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11198))
{var and__3546__auto____11200 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11200))
{var and__3546__auto____11201 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11201))
{var and__3546__auto____11207 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11207))
{var and__3546__auto____11211 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11211))
{return p3.call(null,y);
} else
{return and__3546__auto____11211;
}
} else
{return and__3546__auto____11207;
}
} else
{return and__3546__auto____11201;
}
} else
{return and__3546__auto____11200;
}
} else
{return and__3546__auto____11198;
}
})());
});
var ep3__11387 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11221 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11221))
{var and__3546__auto____11224 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11224))
{var and__3546__auto____11227 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11227))
{var and__3546__auto____11228 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11228))
{var and__3546__auto____11231 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11231))
{var and__3546__auto____11234 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11234))
{var and__3546__auto____11237 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11237))
{var and__3546__auto____11240 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11240))
{return p3.call(null,z);
} else
{return and__3546__auto____11240;
}
} else
{return and__3546__auto____11237;
}
} else
{return and__3546__auto____11234;
}
} else
{return and__3546__auto____11231;
}
} else
{return and__3546__auto____11228;
}
} else
{return and__3546__auto____11227;
}
} else
{return and__3546__auto____11224;
}
} else
{return and__3546__auto____11221;
}
})());
});
var ep3__11388 = (function() { 
var G__11408__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11247 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11247))
{return cljs.core.every_QMARK_.call(null,(function (p1__11081_SHARP_){
var and__3546__auto____11250 = p1.call(null,p1__11081_SHARP_);

if(cljs.core.truth_(and__3546__auto____11250))
{var and__3546__auto____11254 = p2.call(null,p1__11081_SHARP_);

if(cljs.core.truth_(and__3546__auto____11254))
{return p3.call(null,p1__11081_SHARP_);
} else
{return and__3546__auto____11254;
}
} else
{return and__3546__auto____11250;
}
}),args);
} else
{return and__3546__auto____11247;
}
})());
};
var G__11408 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11408__delegate.call(this, x, y, z, args);
};
G__11408.cljs$lang$maxFixedArity = 3;
G__11408.cljs$lang$applyTo = (function (arglist__11415){
var x = cljs.core.first(arglist__11415);
var y = cljs.core.first(cljs.core.next(arglist__11415));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11415)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11415)));
return G__11408__delegate.call(this, x, y, z, args);
});
return G__11408;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11383.call(this);
case  1 :
return ep3__11385.call(this,x);
case  2 :
return ep3__11386.call(this,x,y);
case  3 :
return ep3__11387.call(this,x,y,z);
default:
return ep3__11388.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11388.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11289 = (function() { 
var G__11424__delegate = function (p1,p2,p3,ps){
var ps__11258 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11427 = (function (){
return true;
});
var epn__11428 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11082_SHARP_){
return p1__11082_SHARP_.call(null,x);
}),ps__11258);
});
var epn__11429 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11083_SHARP_){
var and__3546__auto____11264 = p1__11083_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11264))
{return p1__11083_SHARP_.call(null,y);
} else
{return and__3546__auto____11264;
}
}),ps__11258);
});
var epn__11430 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11085_SHARP_){
var and__3546__auto____11267 = p1__11085_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11267))
{var and__3546__auto____11268 = p1__11085_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11268))
{return p1__11085_SHARP_.call(null,z);
} else
{return and__3546__auto____11268;
}
} else
{return and__3546__auto____11267;
}
}),ps__11258);
});
var epn__11431 = (function() { 
var G__11447__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11276 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11276))
{return cljs.core.every_QMARK_.call(null,(function (p1__11086_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11086_SHARP_,args);
}),ps__11258);
} else
{return and__3546__auto____11276;
}
})());
};
var G__11447 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11447__delegate.call(this, x, y, z, args);
};
G__11447.cljs$lang$maxFixedArity = 3;
G__11447.cljs$lang$applyTo = (function (arglist__11454){
var x = cljs.core.first(arglist__11454);
var y = cljs.core.first(cljs.core.next(arglist__11454));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11454)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11454)));
return G__11447__delegate.call(this, x, y, z, args);
});
return G__11447;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11427.call(this);
case  1 :
return epn__11428.call(this,x);
case  2 :
return epn__11429.call(this,x,y);
case  3 :
return epn__11430.call(this,x,y,z);
default:
return epn__11431.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11431.cljs$lang$applyTo;
return epn;
})()
};
var G__11424 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11424__delegate.call(this, p1, p2, p3, ps);
};
G__11424.cljs$lang$maxFixedArity = 3;
G__11424.cljs$lang$applyTo = (function (arglist__11456){
var p1 = cljs.core.first(arglist__11456);
var p2 = cljs.core.first(cljs.core.next(arglist__11456));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11456)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11456)));
return G__11424__delegate.call(this, p1, p2, p3, ps);
});
return G__11424;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11286.call(this,p1);
case  2 :
return every_pred__11287.call(this,p1,p2);
case  3 :
return every_pred__11288.call(this,p1,p2,p3);
default:
return every_pred__11289.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11289.cljs$lang$applyTo;
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
var some_fn__11596 = (function (p){
return (function() {
var sp1 = null;
var sp1__11606 = (function (){
return null;
});
var sp1__11608 = (function (x){
return p.call(null,x);
});
var sp1__11610 = (function (x,y){
var or__3548__auto____11466 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11466))
{return or__3548__auto____11466;
} else
{return p.call(null,y);
}
});
var sp1__11612 = (function (x,y,z){
var or__3548__auto____11469 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11469))
{return or__3548__auto____11469;
} else
{var or__3548__auto____11470 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11470))
{return or__3548__auto____11470;
} else
{return p.call(null,z);
}
}
});
var sp1__11614 = (function() { 
var G__11619__delegate = function (x,y,z,args){
var or__3548__auto____11479 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11479))
{return or__3548__auto____11479;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11619 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11619__delegate.call(this, x, y, z, args);
};
G__11619.cljs$lang$maxFixedArity = 3;
G__11619.cljs$lang$applyTo = (function (arglist__11622){
var x = cljs.core.first(arglist__11622);
var y = cljs.core.first(cljs.core.next(arglist__11622));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11622)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11622)));
return G__11619__delegate.call(this, x, y, z, args);
});
return G__11619;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11606.call(this);
case  1 :
return sp1__11608.call(this,x);
case  2 :
return sp1__11610.call(this,x,y);
case  3 :
return sp1__11612.call(this,x,y,z);
default:
return sp1__11614.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11614.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11599 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11625 = (function (){
return null;
});
var sp2__11627 = (function (x){
var or__3548__auto____11482 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11482))
{return or__3548__auto____11482;
} else
{return p2.call(null,x);
}
});
var sp2__11629 = (function (x,y){
var or__3548__auto____11486 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11486))
{return or__3548__auto____11486;
} else
{var or__3548__auto____11488 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11488))
{return or__3548__auto____11488;
} else
{var or__3548__auto____11489 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11489))
{return or__3548__auto____11489;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11632 = (function (x,y,z){
var or__3548__auto____11493 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11493))
{return or__3548__auto____11493;
} else
{var or__3548__auto____11500 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11500))
{return or__3548__auto____11500;
} else
{var or__3548__auto____11502 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11502))
{return or__3548__auto____11502;
} else
{var or__3548__auto____11511 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11511))
{return or__3548__auto____11511;
} else
{var or__3548__auto____11512 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11512))
{return or__3548__auto____11512;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11634 = (function() { 
var G__11642__delegate = function (x,y,z,args){
var or__3548__auto____11515 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11515))
{return or__3548__auto____11515;
} else
{return cljs.core.some.call(null,(function (p1__11103_SHARP_){
var or__3548__auto____11517 = p1.call(null,p1__11103_SHARP_);

if(cljs.core.truth_(or__3548__auto____11517))
{return or__3548__auto____11517;
} else
{return p2.call(null,p1__11103_SHARP_);
}
}),args);
}
};
var G__11642 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11642__delegate.call(this, x, y, z, args);
};
G__11642.cljs$lang$maxFixedArity = 3;
G__11642.cljs$lang$applyTo = (function (arglist__11644){
var x = cljs.core.first(arglist__11644);
var y = cljs.core.first(cljs.core.next(arglist__11644));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11644)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11644)));
return G__11642__delegate.call(this, x, y, z, args);
});
return G__11642;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11625.call(this);
case  1 :
return sp2__11627.call(this,x);
case  2 :
return sp2__11629.call(this,x,y);
case  3 :
return sp2__11632.call(this,x,y,z);
default:
return sp2__11634.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11634.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11601 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11647 = (function (){
return null;
});
var sp3__11648 = (function (x){
var or__3548__auto____11521 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11521))
{return or__3548__auto____11521;
} else
{var or__3548__auto____11523 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11523))
{return or__3548__auto____11523;
} else
{return p3.call(null,x);
}
}
});
var sp3__11649 = (function (x,y){
var or__3548__auto____11529 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11529))
{return or__3548__auto____11529;
} else
{var or__3548__auto____11531 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11531))
{return or__3548__auto____11531;
} else
{var or__3548__auto____11533 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11533))
{return or__3548__auto____11533;
} else
{var or__3548__auto____11537 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11537))
{return or__3548__auto____11537;
} else
{var or__3548__auto____11541 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11541))
{return or__3548__auto____11541;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11650 = (function (x,y,z){
var or__3548__auto____11544 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11544))
{return or__3548__auto____11544;
} else
{var or__3548__auto____11546 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11546))
{return or__3548__auto____11546;
} else
{var or__3548__auto____11548 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11548))
{return or__3548__auto____11548;
} else
{var or__3548__auto____11554 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11554))
{return or__3548__auto____11554;
} else
{var or__3548__auto____11559 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11559))
{return or__3548__auto____11559;
} else
{var or__3548__auto____11563 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11563))
{return or__3548__auto____11563;
} else
{var or__3548__auto____11566 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11566))
{return or__3548__auto____11566;
} else
{var or__3548__auto____11568 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11568))
{return or__3548__auto____11568;
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
var sp3__11651 = (function() { 
var G__11672__delegate = function (x,y,z,args){
var or__3548__auto____11570 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11570))
{return or__3548__auto____11570;
} else
{return cljs.core.some.call(null,(function (p1__11106_SHARP_){
var or__3548__auto____11574 = p1.call(null,p1__11106_SHARP_);

if(cljs.core.truth_(or__3548__auto____11574))
{return or__3548__auto____11574;
} else
{var or__3548__auto____11576 = p2.call(null,p1__11106_SHARP_);

if(cljs.core.truth_(or__3548__auto____11576))
{return or__3548__auto____11576;
} else
{return p3.call(null,p1__11106_SHARP_);
}
}
}),args);
}
};
var G__11672 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11672__delegate.call(this, x, y, z, args);
};
G__11672.cljs$lang$maxFixedArity = 3;
G__11672.cljs$lang$applyTo = (function (arglist__11676){
var x = cljs.core.first(arglist__11676);
var y = cljs.core.first(cljs.core.next(arglist__11676));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11676)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11676)));
return G__11672__delegate.call(this, x, y, z, args);
});
return G__11672;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11647.call(this);
case  1 :
return sp3__11648.call(this,x);
case  2 :
return sp3__11649.call(this,x,y);
case  3 :
return sp3__11650.call(this,x,y,z);
default:
return sp3__11651.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11651.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11603 = (function() { 
var G__11679__delegate = function (p1,p2,p3,ps){
var ps__11580 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11695 = (function (){
return null;
});
var spn__11696 = (function (x){
return cljs.core.some.call(null,(function (p1__11115_SHARP_){
return p1__11115_SHARP_.call(null,x);
}),ps__11580);
});
var spn__11697 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11117_SHARP_){
var or__3548__auto____11582 = p1__11117_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11582))
{return or__3548__auto____11582;
} else
{return p1__11117_SHARP_.call(null,y);
}
}),ps__11580);
});
var spn__11698 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11120_SHARP_){
var or__3548__auto____11585 = p1__11120_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11585))
{return or__3548__auto____11585;
} else
{var or__3548__auto____11586 = p1__11120_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11586))
{return or__3548__auto____11586;
} else
{return p1__11120_SHARP_.call(null,z);
}
}
}),ps__11580);
});
var spn__11699 = (function() { 
var G__11706__delegate = function (x,y,z,args){
var or__3548__auto____11594 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11594))
{return or__3548__auto____11594;
} else
{return cljs.core.some.call(null,(function (p1__11122_SHARP_){
return cljs.core.some.call(null,p1__11122_SHARP_,args);
}),ps__11580);
}
};
var G__11706 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11706__delegate.call(this, x, y, z, args);
};
G__11706.cljs$lang$maxFixedArity = 3;
G__11706.cljs$lang$applyTo = (function (arglist__11709){
var x = cljs.core.first(arglist__11709);
var y = cljs.core.first(cljs.core.next(arglist__11709));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11709)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11709)));
return G__11706__delegate.call(this, x, y, z, args);
});
return G__11706;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11695.call(this);
case  1 :
return spn__11696.call(this,x);
case  2 :
return spn__11697.call(this,x,y);
case  3 :
return spn__11698.call(this,x,y,z);
default:
return spn__11699.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11699.cljs$lang$applyTo;
return spn;
})()
};
var G__11679 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11679__delegate.call(this, p1, p2, p3, ps);
};
G__11679.cljs$lang$maxFixedArity = 3;
G__11679.cljs$lang$applyTo = (function (arglist__11714){
var p1 = cljs.core.first(arglist__11714);
var p2 = cljs.core.first(cljs.core.next(arglist__11714));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11714)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11714)));
return G__11679__delegate.call(this, p1, p2, p3, ps);
});
return G__11679;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11596.call(this,p1);
case  2 :
return some_fn__11599.call(this,p1,p2);
case  3 :
return some_fn__11601.call(this,p1,p2,p3);
default:
return some_fn__11603.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11603.cljs$lang$applyTo;
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
var map__11801 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11721 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11721))
{var s__11723 = temp__3698__auto____11721;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11723)),map.call(null,f,cljs.core.rest.call(null,s__11723)));
} else
{return null;
}
})));
});
var map__11802 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11727 = cljs.core.seq.call(null,c1);
var s2__11729 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11731 = s1__11727;

if(cljs.core.truth_(and__3546__auto____11731))
{return s2__11729;
} else
{return and__3546__auto____11731;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11727),cljs.core.first.call(null,s2__11729)),map.call(null,f,cljs.core.rest.call(null,s1__11727),cljs.core.rest.call(null,s2__11729)));
} else
{return null;
}
})));
});
var map__11803 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11735 = cljs.core.seq.call(null,c1);
var s2__11737 = cljs.core.seq.call(null,c2);
var s3__11738 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11739 = s1__11735;

if(cljs.core.truth_(and__3546__auto____11739))
{var and__3546__auto____11741 = s2__11737;

if(cljs.core.truth_(and__3546__auto____11741))
{return s3__11738;
} else
{return and__3546__auto____11741;
}
} else
{return and__3546__auto____11739;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11735),cljs.core.first.call(null,s2__11737),cljs.core.first.call(null,s3__11738)),map.call(null,f,cljs.core.rest.call(null,s1__11735),cljs.core.rest.call(null,s2__11737),cljs.core.rest.call(null,s3__11738)));
} else
{return null;
}
})));
});
var map__11804 = (function() { 
var G__11824__delegate = function (f,c1,c2,c3,colls){
var step__11752 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11749 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11749)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11749),step.call(null,map.call(null,cljs.core.rest,ss__11749)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11463_SHARP_){
return cljs.core.apply.call(null,f,p1__11463_SHARP_);
}),step__11752.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11824 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11824__delegate.call(this, f, c1, c2, c3, colls);
};
G__11824.cljs$lang$maxFixedArity = 4;
G__11824.cljs$lang$applyTo = (function (arglist__11829){
var f = cljs.core.first(arglist__11829);
var c1 = cljs.core.first(cljs.core.next(arglist__11829));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11829)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11829))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11829))));
return G__11824__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11824;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11801.call(this,f,c1);
case  3 :
return map__11802.call(this,f,c1,c2);
case  4 :
return map__11803.call(this,f,c1,c2,c3);
default:
return map__11804.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11804.cljs$lang$applyTo;
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
{var temp__3698__auto____11835 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11835))
{var s__11841 = temp__3698__auto____11835;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11841),take.call(null,(n - 1),cljs.core.rest.call(null,s__11841)));
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
var step__11864 = (function (n,coll){
while(true){
var s__11853 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11859 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11859))
{return s__11853;
} else
{return and__3546__auto____11859;
}
})()))
{{
var G__11865 = (n - 1);
var G__11866 = cljs.core.rest.call(null,s__11853);
n = G__11865;
coll = G__11866;
continue;
}
} else
{return s__11853;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11864.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11873 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11874 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11873.call(this,n);
case  2 :
return drop_last__11874.call(this,n,s);
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
var s__11885 = cljs.core.seq.call(null,coll);
var lead__11886 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11886))
{{
var G__11889 = cljs.core.next.call(null,s__11885);
var G__11890 = cljs.core.next.call(null,lead__11886);
s__11885 = G__11889;
lead__11886 = G__11890;
continue;
}
} else
{return s__11885;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11898 = (function (pred,coll){
while(true){
var s__11894 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11895 = s__11894;

if(cljs.core.truth_(and__3546__auto____11895))
{return pred.call(null,cljs.core.first.call(null,s__11894));
} else
{return and__3546__auto____11895;
}
})()))
{{
var G__11908 = pred;
var G__11909 = cljs.core.rest.call(null,s__11894);
pred = G__11908;
coll = G__11909;
continue;
}
} else
{return s__11894;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11898.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11911 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11911))
{var s__11914 = temp__3698__auto____11911;

return cljs.core.concat.call(null,s__11914,cycle.call(null,s__11914));
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
var repeat__11922 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11923 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11922.call(this,n);
case  2 :
return repeat__11923.call(this,n,x);
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
var repeatedly__11936 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11937 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11936.call(this,n);
case  2 :
return repeatedly__11937.call(this,n,f);
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
var interleave__12010 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11949 = cljs.core.seq.call(null,c1);
var s2__11950 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11951 = s1__11949;

if(cljs.core.truth_(and__3546__auto____11951))
{return s2__11950;
} else
{return and__3546__auto____11951;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11949),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11950),interleave.call(null,cljs.core.rest.call(null,s1__11949),cljs.core.rest.call(null,s2__11950))));
} else
{return null;
}
})));
});
var interleave__12012 = (function() { 
var G__12019__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11952 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11952)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11952),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11952)));
} else
{return null;
}
})));
};
var G__12019 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12019__delegate.call(this, c1, c2, colls);
};
G__12019.cljs$lang$maxFixedArity = 2;
G__12019.cljs$lang$applyTo = (function (arglist__12022){
var c1 = cljs.core.first(arglist__12022);
var c2 = cljs.core.first(cljs.core.next(arglist__12022));
var colls = cljs.core.rest(cljs.core.next(arglist__12022));
return G__12019__delegate.call(this, c1, c2, colls);
});
return G__12019;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12010.call(this,c1,c2);
default:
return interleave__12012.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12012.cljs$lang$applyTo;
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
var cat__12102 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12026 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12026))
{var coll__12028 = temp__3695__auto____12026;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12028),cat.call(null,cljs.core.rest.call(null,coll__12028),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12102.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12113 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12114 = (function() { 
var G__12116__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12116 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12116__delegate.call(this, f, coll, colls);
};
G__12116.cljs$lang$maxFixedArity = 2;
G__12116.cljs$lang$applyTo = (function (arglist__12117){
var f = cljs.core.first(arglist__12117);
var coll = cljs.core.first(cljs.core.next(arglist__12117));
var colls = cljs.core.rest(cljs.core.next(arglist__12117));
return G__12116__delegate.call(this, f, coll, colls);
});
return G__12116;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12113.call(this,f,coll);
default:
return mapcat__12114.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12114.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12118 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12118))
{var s__12119 = temp__3698__auto____12118;

var f__12123 = cljs.core.first.call(null,s__12119);
var r__12124 = cljs.core.rest.call(null,s__12119);

if(cljs.core.truth_(pred.call(null,f__12123)))
{return cljs.core.cons.call(null,f__12123,filter.call(null,pred,r__12124));
} else
{return filter.call(null,pred,r__12124);
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
var walk__12127 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12127.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12126_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12126_SHARP_));
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
var partition__12169 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12170 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12134 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12134))
{var s__12135 = temp__3698__auto____12134;

var p__12140 = cljs.core.take.call(null,n,s__12135);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12140))))
{return cljs.core.cons.call(null,p__12140,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12135)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12171 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12141 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12141))
{var s__12142 = temp__3698__auto____12141;

var p__12143 = cljs.core.take.call(null,n,s__12142);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12143))))
{return cljs.core.cons.call(null,p__12143,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12142)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12143,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12169.call(this,n,step);
case  3 :
return partition__12170.call(this,n,step,pad);
case  4 :
return partition__12171.call(this,n,step,pad,coll);
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
var get_in__12223 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12224 = (function (m,ks,not_found){
var sentinel__12219 = cljs.core.lookup_sentinel;
var m__12220 = m;
var ks__12221 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12221))
{var m__12222 = cljs.core.get.call(null,m__12220,cljs.core.first.call(null,ks__12221),sentinel__12219);

if(cljs.core.truth_((sentinel__12219 === m__12222)))
{return not_found;
} else
{{
var G__12227 = sentinel__12219;
var G__12228 = m__12222;
var G__12229 = cljs.core.next.call(null,ks__12221);
sentinel__12219 = G__12227;
m__12220 = G__12228;
ks__12221 = G__12229;
continue;
}
}
} else
{return m__12220;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12223.call(this,m,ks);
case  3 :
return get_in__12224.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12233,v){
var vec__12235__12236 = p__12233;
var k__12237 = cljs.core.nth.call(null,vec__12235__12236,0,null);
var ks__12238 = cljs.core.nthnext.call(null,vec__12235__12236,1);

if(cljs.core.truth_(ks__12238))
{return cljs.core.assoc.call(null,m,k__12237,assoc_in.call(null,cljs.core.get.call(null,m,k__12237),ks__12238,v));
} else
{return cljs.core.assoc.call(null,m,k__12237,v);
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
var update_in__delegate = function (m,p__12247,f,args){
var vec__12251__12252 = p__12247;
var k__12254 = cljs.core.nth.call(null,vec__12251__12252,0,null);
var ks__12255 = cljs.core.nthnext.call(null,vec__12251__12252,1);

if(cljs.core.truth_(ks__12255))
{return cljs.core.assoc.call(null,m,k__12254,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12254),ks__12255,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12254,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12254),args));
}
};
var update_in = function (m,p__12247,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12247, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12260){
var m = cljs.core.first(arglist__12260);
var p__12247 = cljs.core.first(cljs.core.next(arglist__12260));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12260)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12260)));
return update_in__delegate.call(this, m, p__12247, f, args);
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
var this__12272 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12424 = null;
var G__12424__12425 = (function (coll,k){
var this__12274 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12424__12427 = (function (coll,k,not_found){
var this__12275 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12424 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12424__12425.call(this,coll,k);
case  3 :
return G__12424__12427.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12424;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12277 = this;
var new_array__12279 = cljs.core.aclone.call(null,this__12277.array);

(new_array__12279[k] = v);
return (new cljs.core.Vector(this__12277.meta,new_array__12279));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12436 = null;
var G__12436__12437 = (function (coll,k){
var this__12280 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12436__12438 = (function (coll,k,not_found){
var this__12281 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12436 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12436__12437.call(this,coll,k);
case  3 :
return G__12436__12438.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12436;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12370 = this;
var new_array__12372 = cljs.core.aclone.call(null,this__12370.array);

new_array__12372.push(o);
return (new cljs.core.Vector(this__12370.meta,new_array__12372));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12451 = null;
var G__12451__12452 = (function (v,f){
var this__12374 = this;
return cljs.core.ci_reduce.call(null,this__12374.array,f);
});
var G__12451__12453 = (function (v,f,start){
var this__12376 = this;
return cljs.core.ci_reduce.call(null,this__12376.array,f,start);
});
G__12451 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12451__12452.call(this,v,f);
case  3 :
return G__12451__12453.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12451;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12378 = this;
if(cljs.core.truth_((this__12378.array.length > 0)))
{var vector_seq__12386 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12378.array.length)))
{return cljs.core.cons.call(null,(this__12378.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12386.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12387 = this;
return this__12387.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12389 = this;
var count__12390 = this__12389.array.length;

if(cljs.core.truth_((count__12390 > 0)))
{return (this__12389.array[(count__12390 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12392 = this;
if(cljs.core.truth_((this__12392.array.length > 0)))
{var new_array__12394 = cljs.core.aclone.call(null,this__12392.array);

new_array__12394.pop();
return (new cljs.core.Vector(this__12392.meta,new_array__12394));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12396 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12398 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12400 = this;
return (new cljs.core.Vector(meta,this__12400.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12401 = this;
return this__12401.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12529 = null;
var G__12529__12530 = (function (coll,n){
var this__12403 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12406 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12406))
{return (n < this__12403.array.length);
} else
{return and__3546__auto____12406;
}
})()))
{return (this__12403.array[n]);
} else
{return null;
}
});
var G__12529__12531 = (function (coll,n,not_found){
var this__12411 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12414 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12414))
{return (n < this__12411.array.length);
} else
{return and__3546__auto____12414;
}
})()))
{return (this__12411.array[n]);
} else
{return not_found;
}
});
G__12529 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12529__12530.call(this,coll,n);
case  3 :
return G__12529__12531.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12529;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12416 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12416.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12555){
var args = cljs.core.seq( arglist__12555 );;
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
var this__12573 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12616 = null;
var G__12616__12617 = (function (coll,k){
var this__12576 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12616__12618 = (function (coll,k,not_found){
var this__12577 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12616 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12616__12617.call(this,coll,k);
case  3 :
return G__12616__12618.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12616;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12578 = this;
var v_pos__12580 = (this__12578.start + key);

return (new cljs.core.Subvec(this__12578.meta,cljs.core._assoc.call(null,this__12578.v,v_pos__12580,val),this__12578.start,((this__12578.end > (v_pos__12580 + 1)) ? this__12578.end : (v_pos__12580 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12624 = null;
var G__12624__12625 = (function (coll,k){
var this__12582 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12624__12626 = (function (coll,k,not_found){
var this__12584 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12624 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12624__12625.call(this,coll,k);
case  3 :
return G__12624__12626.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12624;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12586 = this;
return (new cljs.core.Subvec(this__12586.meta,cljs.core._assoc_n.call(null,this__12586.v,this__12586.end,o),this__12586.start,(this__12586.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12632 = null;
var G__12632__12634 = (function (coll,f){
var this__12588 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12632__12635 = (function (coll,f,start){
var this__12590 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12632 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12632__12634.call(this,coll,f);
case  3 :
return G__12632__12635.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12632;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12592 = this;
var subvec_seq__12596 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12592.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12592.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12596.call(null,this__12592.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12598 = this;
return (this__12598.end - this__12598.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12600 = this;
return cljs.core._nth.call(null,this__12600.v,(this__12600.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12602 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12602.start,this__12602.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12602.meta,this__12602.v,this__12602.start,(this__12602.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12603 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12604 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12605 = this;
return (new cljs.core.Subvec(meta,this__12605.v,this__12605.start,this__12605.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12606 = this;
return this__12606.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12649 = null;
var G__12649__12651 = (function (coll,n){
var this__12611 = this;
return cljs.core._nth.call(null,this__12611.v,(this__12611.start + n));
});
var G__12649__12652 = (function (coll,n,not_found){
var this__12613 = this;
return cljs.core._nth.call(null,this__12613.v,(this__12613.start + n),not_found);
});
G__12649 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12649__12651.call(this,coll,n);
case  3 :
return G__12649__12652.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12649;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12615 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12615.meta);
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
var subvec__12674 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12675 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12674.call(this,v,start);
case  3 :
return subvec__12675.call(this,v,start,end);
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
var this__12688 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12689 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12704 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12708 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12708.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12710 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12711 = this;
return cljs.core._first.call(null,this__12711.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12713 = this;
var temp__3695__auto____12715 = cljs.core.next.call(null,this__12713.front);

if(cljs.core.truth_(temp__3695__auto____12715))
{var f1__12717 = temp__3695__auto____12715;

return (new cljs.core.PersistentQueueSeq(this__12713.meta,f1__12717,this__12713.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12713.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12713.meta,this__12713.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12723 = this;
return this__12723.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12724 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12724.front,this__12724.rear));
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
var this__12737 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12744 = this;
if(cljs.core.truth_(this__12744.front))
{return (new cljs.core.PersistentQueue(this__12744.meta,(this__12744.count + 1),this__12744.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12747 = this__12744.rear;

if(cljs.core.truth_(or__3548__auto____12747))
{return or__3548__auto____12747;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12744.meta,(this__12744.count + 1),cljs.core.conj.call(null,this__12744.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12749 = this;
var rear__12750 = cljs.core.seq.call(null,this__12749.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12751 = this__12749.front;

if(cljs.core.truth_(or__3548__auto____12751))
{return or__3548__auto____12751;
} else
{return rear__12750;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12749.front,cljs.core.seq.call(null,rear__12750)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12753 = this;
return this__12753.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12754 = this;
return cljs.core._first.call(null,this__12754.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12755 = this;
if(cljs.core.truth_(this__12755.front))
{var temp__3695__auto____12756 = cljs.core.next.call(null,this__12755.front);

if(cljs.core.truth_(temp__3695__auto____12756))
{var f1__12757 = temp__3695__auto____12756;

return (new cljs.core.PersistentQueue(this__12755.meta,(this__12755.count - 1),f1__12757,this__12755.rear));
} else
{return (new cljs.core.PersistentQueue(this__12755.meta,(this__12755.count - 1),cljs.core.seq.call(null,this__12755.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12761 = this;
return cljs.core.first.call(null,this__12761.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12762 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12764 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12774 = this;
return (new cljs.core.PersistentQueue(meta,this__12774.count,this__12774.front,this__12774.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12776 = this;
return this__12776.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12779 = this;
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
var this__12809 = this;
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

var i__12832 = 0;

while(true){
if(cljs.core.truth_((i__12832 < len__12830)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12832]))))
{return i__12832;
} else
{{
var G__12841 = (i__12832 + incr);
i__12832 = G__12841;
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
var obj_map_contains_key_QMARK___12852 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12853 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12848 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12848))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12848;
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
return obj_map_contains_key_QMARK___12852.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12853.call(this,k,strobj,true_val,false_val);
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
var this__12872 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12912 = null;
var G__12912__12913 = (function (coll,k){
var this__12874 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12912__12914 = (function (coll,k,not_found){
var this__12875 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12875.strobj,(this__12875.strobj[k]),not_found);
});
G__12912 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12912__12913.call(this,coll,k);
case  3 :
return G__12912__12914.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12912;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12877 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12879 = goog.object.clone.call(null,this__12877.strobj);
var overwrite_QMARK___12880 = new_strobj__12879.hasOwnProperty(k);

(new_strobj__12879[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12880))
{return (new cljs.core.ObjMap(this__12877.meta,this__12877.keys,new_strobj__12879));
} else
{var new_keys__12882 = cljs.core.aclone.call(null,this__12877.keys);

new_keys__12882.push(k);
return (new cljs.core.ObjMap(this__12877.meta,new_keys__12882,new_strobj__12879));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12877.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12884 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12884.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12923 = null;
var G__12923__12924 = (function (coll,k){
var this__12885 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12923__12925 = (function (coll,k,not_found){
var this__12886 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12923 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12923__12924.call(this,coll,k);
case  3 :
return G__12923__12925.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12923;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12889 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12892 = this;
if(cljs.core.truth_((this__12892.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12861_SHARP_){
return cljs.core.vector.call(null,p1__12861_SHARP_,(this__12892.strobj[p1__12861_SHARP_]));
}),this__12892.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12895 = this;
return this__12895.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12896 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12898 = this;
return (new cljs.core.ObjMap(meta,this__12898.keys,this__12898.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12900 = this;
return this__12900.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12901 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12901.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12904 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12905 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12905))
{return this__12904.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12905;
}
})()))
{var new_keys__12906 = cljs.core.aclone.call(null,this__12904.keys);
var new_strobj__12907 = goog.object.clone.call(null,this__12904.strobj);

new_keys__12906.splice(cljs.core.scan_array.call(null,1,k,new_keys__12906),1);
cljs.core.js_delete.call(null,new_strobj__12907,k);
return (new cljs.core.ObjMap(this__12904.meta,new_keys__12906,new_strobj__12907));
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
var this__13005 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13105 = null;
var G__13105__13106 = (function (coll,k){
var this__13009 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13105__13107 = (function (coll,k,not_found){
var this__13012 = this;
var bucket__13016 = (this__13012.hashobj[cljs.core.hash.call(null,k)]);
var i__13019 = (cljs.core.truth_(bucket__13016)?cljs.core.scan_array.call(null,2,k,bucket__13016):null);

if(cljs.core.truth_(i__13019))
{return (bucket__13016[(i__13019 + 1)]);
} else
{return not_found;
}
});
G__13105 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13105__13106.call(this,coll,k);
case  3 :
return G__13105__13107.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13105;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13022 = this;
var h__13024 = cljs.core.hash.call(null,k);
var bucket__13026 = (this__13022.hashobj[h__13024]);

if(cljs.core.truth_(bucket__13026))
{var new_bucket__13030 = cljs.core.aclone.call(null,bucket__13026);
var new_hashobj__13032 = goog.object.clone.call(null,this__13022.hashobj);

(new_hashobj__13032[h__13024] = new_bucket__13030);
var temp__3695__auto____13034 = cljs.core.scan_array.call(null,2,k,new_bucket__13030);

if(cljs.core.truth_(temp__3695__auto____13034))
{var i__13036 = temp__3695__auto____13034;

(new_bucket__13030[(i__13036 + 1)] = v);
return (new cljs.core.HashMap(this__13022.meta,this__13022.count,new_hashobj__13032));
} else
{new_bucket__13030.push(k,v);
return (new cljs.core.HashMap(this__13022.meta,(this__13022.count + 1),new_hashobj__13032));
}
} else
{var new_hashobj__13042 = goog.object.clone.call(null,this__13022.hashobj);

(new_hashobj__13042[h__13024] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13022.meta,(this__13022.count + 1),new_hashobj__13042));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13045 = this;
var bucket__13048 = (this__13045.hashobj[cljs.core.hash.call(null,k)]);
var i__13049 = (cljs.core.truth_(bucket__13048)?cljs.core.scan_array.call(null,2,k,bucket__13048):null);

if(cljs.core.truth_(i__13049))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13181 = null;
var G__13181__13182 = (function (coll,k){
var this__13056 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13181__13183 = (function (coll,k,not_found){
var this__13059 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13181 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13181__13182.call(this,coll,k);
case  3 :
return G__13181__13183.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13181;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13061 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13063 = this;
if(cljs.core.truth_((this__13063.count > 0)))
{var hashes__13069 = cljs.core.js_keys.call(null,this__13063.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12934_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13063.hashobj[p1__12934_SHARP_])));
}),hashes__13069);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13072 = this;
return this__13072.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13073 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13076 = this;
return (new cljs.core.HashMap(meta,this__13076.count,this__13076.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13078 = this;
return this__13078.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13082 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13082.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13092 = this;
var h__13094 = cljs.core.hash.call(null,k);
var bucket__13095 = (this__13092.hashobj[h__13094]);
var i__13098 = (cljs.core.truth_(bucket__13095)?cljs.core.scan_array.call(null,2,k,bucket__13095):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13098)))
{return coll;
} else
{var new_hashobj__13099 = goog.object.clone.call(null,this__13092.hashobj);

if(cljs.core.truth_((3 > bucket__13095.length)))
{cljs.core.js_delete.call(null,new_hashobj__13099,h__13094);
} else
{var new_bucket__13100 = cljs.core.aclone.call(null,bucket__13095);

new_bucket__13100.splice(i__13098,2);
(new_hashobj__13099[h__13094] = new_bucket__13100);
}
return (new cljs.core.HashMap(this__13092.meta,(this__13092.count - 1),new_hashobj__13099));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13192 = ks.length;

var i__13193 = 0;
var out__13195 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13193 < len__13192)))
{{
var G__13201 = (i__13193 + 1);
var G__13202 = cljs.core.assoc.call(null,out__13195,(ks[i__13193]),(vs[i__13193]));
i__13193 = G__13201;
out__13195 = G__13202;
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
var G__13215 = cljs.core.nnext.call(null,in$__13206);
var G__13216 = cljs.core.assoc.call(null,out__13207,cljs.core.first.call(null,in$__13206),cljs.core.second.call(null,in$__13206));
in$__13206 = G__13215;
out__13207 = G__13216;
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
hash_map.cljs$lang$applyTo = (function (arglist__13218){
var keyvals = cljs.core.seq( arglist__13218 );;
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
{return cljs.core.reduce.call(null,(function (p1__13224_SHARP_,p2__13225_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13244 = p1__13224_SHARP_;

if(cljs.core.truth_(or__3548__auto____13244))
{return or__3548__auto____13244;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13225_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13316){
var maps = cljs.core.seq( arglist__13316 );;
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
{var merge_entry__13326 = (function (m,e){
var k__13324 = cljs.core.first.call(null,e);
var v__13325 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13324)))
{return cljs.core.assoc.call(null,m,k__13324,f.call(null,cljs.core.get.call(null,m,k__13324),v__13325));
} else
{return cljs.core.assoc.call(null,m,k__13324,v__13325);
}
});
var merge2__13330 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13326,(function (){var or__3548__auto____13327 = m1;

if(cljs.core.truth_(or__3548__auto____13327))
{return or__3548__auto____13327;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13330,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13335){
var f = cljs.core.first(arglist__13335);
var maps = cljs.core.rest(arglist__13335);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13342 = cljs.core.ObjMap.fromObject([],{});
var keys__13343 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13343))
{var key__13344 = cljs.core.first.call(null,keys__13343);
var entry__13345 = cljs.core.get.call(null,map,key__13344,"﷐'user/not-found");

{
var G__13351 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13345,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13342,key__13344,entry__13345):ret__13342);
var G__13352 = cljs.core.next.call(null,keys__13343);
ret__13342 = G__13351;
keys__13343 = G__13352;
continue;
}
} else
{return ret__13342;
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
var this__13365 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13457 = null;
var G__13457__13458 = (function (coll,v){
var this__13367 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13457__13459 = (function (coll,v,not_found){
var this__13370 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13370.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13457 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13457__13458.call(this,coll,v);
case  3 :
return G__13457__13459.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13457;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13501 = null;
var G__13501__13502 = (function (coll,k){
var this__13372 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13501__13503 = (function (coll,k,not_found){
var this__13373 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13501 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13501__13502.call(this,coll,k);
case  3 :
return G__13501__13503.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13501;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13376 = this;
return (new cljs.core.Set(this__13376.meta,cljs.core.assoc.call(null,this__13376.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13428 = this;
return cljs.core.keys.call(null,this__13428.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13433 = this;
return (new cljs.core.Set(this__13433.meta,cljs.core.dissoc.call(null,this__13433.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13437 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13440 = this;
var and__3546__auto____13441 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13441))
{var and__3546__auto____13445 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13445))
{return cljs.core.every_QMARK_.call(null,(function (p1__13337_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13337_SHARP_);
}),other);
} else
{return and__3546__auto____13445;
}
} else
{return and__3546__auto____13441;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13447 = this;
return (new cljs.core.Set(meta,this__13447.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13449 = this;
return this__13449.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13451 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13451.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13523 = cljs.core.seq.call(null,coll);
var out__13524 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13523))))
{{
var G__13530 = cljs.core.rest.call(null,in$__13523);
var G__13531 = cljs.core.conj.call(null,out__13524,cljs.core.first.call(null,in$__13523));
in$__13523 = G__13530;
out__13524 = G__13531;
continue;
}
} else
{return out__13524;
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
{var n__13538 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13543 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13543))
{var e__13544 = temp__3695__auto____13543;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13544));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13538,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13517_SHARP_){
var temp__3695__auto____13549 = cljs.core.find.call(null,smap,p1__13517_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13549))
{var e__13552 = temp__3695__auto____13549;

return cljs.core.second.call(null,e__13552);
} else
{return p1__13517_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13579 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13568,seen){
while(true){
var vec__13569__13570 = p__13568;
var f__13571 = cljs.core.nth.call(null,vec__13569__13570,0,null);
var xs__13572 = vec__13569__13570;

var temp__3698__auto____13573 = cljs.core.seq.call(null,xs__13572);

if(cljs.core.truth_(temp__3698__auto____13573))
{var s__13574 = temp__3698__auto____13573;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13571)))
{{
var G__13587 = cljs.core.rest.call(null,s__13574);
var G__13588 = seen;
p__13568 = G__13587;
seen = G__13588;
continue;
}
} else
{return cljs.core.cons.call(null,f__13571,step.call(null,cljs.core.rest.call(null,s__13574),cljs.core.conj.call(null,seen,f__13571)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13579.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13591 = cljs.core.Vector.fromArray([]);
var s__13592 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13592)))
{{
var G__13598 = cljs.core.conj.call(null,ret__13591,cljs.core.first.call(null,s__13592));
var G__13600 = cljs.core.next.call(null,s__13592);
ret__13591 = G__13598;
s__13592 = G__13600;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13591);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13606 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13606))
{return or__3548__auto____13606;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13607 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13607 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13607 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13646 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13646))
{return or__3548__auto____13646;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13647 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13647 > -1)))
{return cljs.core.subs.call(null,x,2,i__13647);
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
var map__13650 = cljs.core.ObjMap.fromObject([],{});
var ks__13651 = cljs.core.seq.call(null,keys);
var vs__13652 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13654 = ks__13651;

if(cljs.core.truth_(and__3546__auto____13654))
{return vs__13652;
} else
{return and__3546__auto____13654;
}
})()))
{{
var G__13661 = cljs.core.assoc.call(null,map__13650,cljs.core.first.call(null,ks__13651),cljs.core.first.call(null,vs__13652));
var G__13662 = cljs.core.next.call(null,ks__13651);
var G__13663 = cljs.core.next.call(null,vs__13652);
map__13650 = G__13661;
ks__13651 = G__13662;
vs__13652 = G__13663;
continue;
}
} else
{return map__13650;
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
var max_key__13678 = (function (k,x){
return x;
});
var max_key__13679 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13680 = (function() { 
var G__13683__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13648_SHARP_,p2__13649_SHARP_){
return max_key.call(null,k,p1__13648_SHARP_,p2__13649_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13683 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13683__delegate.call(this, k, x, y, more);
};
G__13683.cljs$lang$maxFixedArity = 3;
G__13683.cljs$lang$applyTo = (function (arglist__13686){
var k = cljs.core.first(arglist__13686);
var x = cljs.core.first(cljs.core.next(arglist__13686));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13686)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13686)));
return G__13683__delegate.call(this, k, x, y, more);
});
return G__13683;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13678.call(this,k,x);
case  3 :
return max_key__13679.call(this,k,x,y);
default:
return max_key__13680.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13680.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13693 = (function (k,x){
return x;
});
var min_key__13694 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13695 = (function() { 
var G__13697__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13664_SHARP_,p2__13665_SHARP_){
return min_key.call(null,k,p1__13664_SHARP_,p2__13665_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13697 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13697__delegate.call(this, k, x, y, more);
};
G__13697.cljs$lang$maxFixedArity = 3;
G__13697.cljs$lang$applyTo = (function (arglist__13699){
var k = cljs.core.first(arglist__13699);
var x = cljs.core.first(cljs.core.next(arglist__13699));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13699)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13699)));
return G__13697__delegate.call(this, k, x, y, more);
});
return G__13697;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13693.call(this,k,x);
case  3 :
return min_key__13694.call(this,k,x,y);
default:
return min_key__13695.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13695.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13710 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13711 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13706 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13706))
{var s__13707 = temp__3698__auto____13706;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13707),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13707)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13710.call(this,n,step);
case  3 :
return partition_all__13711.call(this,n,step,coll);
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
var temp__3698__auto____13722 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13722))
{var s__13723 = temp__3698__auto____13722;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13723))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13723),take_while.call(null,pred,cljs.core.rest.call(null,s__13723)));
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
var this__13748 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13749 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13809 = null;
var G__13809__13811 = (function (rng,f){
var this__13751 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13809__13812 = (function (rng,f,s){
var this__13753 = this;
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
var this__13754 = this;
var comp__13755 = (cljs.core.truth_((this__13754.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13755.call(null,this__13754.start,this__13754.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13764 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13764.end - this__13764.start) / this__13764.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13777 = this;
return this__13777.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13778 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13778.meta,(this__13778.start + this__13778.step),this__13778.end,this__13778.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13782 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13785 = this;
return (new cljs.core.Range(meta,this__13785.start,this__13785.end,this__13785.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13787 = this;
return this__13787.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13819 = null;
var G__13819__13820 = (function (rng,n){
var this__13789 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13789.start + (n * this__13789.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13794 = (this__13789.start > this__13789.end);

if(cljs.core.truth_(and__3546__auto____13794))
{return cljs.core._EQ_.call(null,this__13789.step,0);
} else
{return and__3546__auto____13794;
}
})()))
{return this__13789.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13819__13821 = (function (rng,n,not_found){
var this__13795 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13795.start + (n * this__13795.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13800 = (this__13795.start > this__13795.end);

if(cljs.core.truth_(and__3546__auto____13800))
{return cljs.core._EQ_.call(null,this__13795.step,0);
} else
{return and__3546__auto____13800;
}
})()))
{return this__13795.start;
} else
{return not_found;
}
}
});
G__13819 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13819__13820.call(this,rng,n);
case  3 :
return G__13819__13821.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13819;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13802 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13802.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13890 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13891 = (function (end){
return range.call(null,0,end,1);
});
var range__13892 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13893 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13890.call(this);
case  1 :
return range__13891.call(this,start);
case  2 :
return range__13892.call(this,start,end);
case  3 :
return range__13893.call(this,start,end,step);
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
var temp__3698__auto____13902 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13902))
{var s__13903 = temp__3698__auto____13902;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13903),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13903)));
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
var temp__3698__auto____13920 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13920))
{var s__13922 = temp__3698__auto____13920;

var fst__13926 = cljs.core.first.call(null,s__13922);
var fv__13927 = f.call(null,fst__13926);
var run__13929 = cljs.core.cons.call(null,fst__13926,cljs.core.take_while.call(null,(function (p1__13913_SHARP_){
return cljs.core._EQ_.call(null,fv__13927,f.call(null,p1__13913_SHARP_));
}),cljs.core.next.call(null,s__13922)));

return cljs.core.cons.call(null,run__13929,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13929),s__13922))));
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
var reductions__13986 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13978 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13978))
{var s__13979 = temp__3695__auto____13978;

return reductions.call(null,f,cljs.core.first.call(null,s__13979),cljs.core.rest.call(null,s__13979));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13987 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13984 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13984))
{var s__13985 = temp__3698__auto____13984;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13985)),cljs.core.rest.call(null,s__13985));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13986.call(this,f,init);
case  3 :
return reductions__13987.call(this,f,init,coll);
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
var juxt__14112 = (function (f){
return (function() {
var G__14119 = null;
var G__14119__14120 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14119__14121 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14119__14123 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14119__14126 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14119__14127 = (function() { 
var G__14132__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14132 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14132__delegate.call(this, x, y, z, args);
};
G__14132.cljs$lang$maxFixedArity = 3;
G__14132.cljs$lang$applyTo = (function (arglist__14133){
var x = cljs.core.first(arglist__14133);
var y = cljs.core.first(cljs.core.next(arglist__14133));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14133)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14133)));
return G__14132__delegate.call(this, x, y, z, args);
});
return G__14132;
})()
;
G__14119 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14119__14120.call(this);
case  1 :
return G__14119__14121.call(this,x);
case  2 :
return G__14119__14123.call(this,x,y);
case  3 :
return G__14119__14126.call(this,x,y,z);
default:
return G__14119__14127.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14119.cljs$lang$maxFixedArity = 3;
G__14119.cljs$lang$applyTo = G__14119__14127.cljs$lang$applyTo;
return G__14119;
})()
});
var juxt__14113 = (function (f,g){
return (function() {
var G__14141 = null;
var G__14141__14142 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14141__14143 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14141__14144 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14141__14145 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14141__14146 = (function() { 
var G__14149__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14149 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14149__delegate.call(this, x, y, z, args);
};
G__14149.cljs$lang$maxFixedArity = 3;
G__14149.cljs$lang$applyTo = (function (arglist__14150){
var x = cljs.core.first(arglist__14150);
var y = cljs.core.first(cljs.core.next(arglist__14150));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14150)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14150)));
return G__14149__delegate.call(this, x, y, z, args);
});
return G__14149;
})()
;
G__14141 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14141__14142.call(this);
case  1 :
return G__14141__14143.call(this,x);
case  2 :
return G__14141__14144.call(this,x,y);
case  3 :
return G__14141__14145.call(this,x,y,z);
default:
return G__14141__14146.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14141.cljs$lang$maxFixedArity = 3;
G__14141.cljs$lang$applyTo = G__14141__14146.cljs$lang$applyTo;
return G__14141;
})()
});
var juxt__14114 = (function (f,g,h){
return (function() {
var G__14151 = null;
var G__14151__14152 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14151__14153 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14151__14154 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14151__14155 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14151__14156 = (function() { 
var G__14168__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14168 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14168__delegate.call(this, x, y, z, args);
};
G__14168.cljs$lang$maxFixedArity = 3;
G__14168.cljs$lang$applyTo = (function (arglist__14169){
var x = cljs.core.first(arglist__14169);
var y = cljs.core.first(cljs.core.next(arglist__14169));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14169)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14169)));
return G__14168__delegate.call(this, x, y, z, args);
});
return G__14168;
})()
;
G__14151 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14151__14152.call(this);
case  1 :
return G__14151__14153.call(this,x);
case  2 :
return G__14151__14154.call(this,x,y);
case  3 :
return G__14151__14155.call(this,x,y,z);
default:
return G__14151__14156.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14151.cljs$lang$maxFixedArity = 3;
G__14151.cljs$lang$applyTo = G__14151__14156.cljs$lang$applyTo;
return G__14151;
})()
});
var juxt__14115 = (function() { 
var G__14186__delegate = function (f,g,h,fs){
var fs__14027 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14188 = null;
var G__14188__14189 = (function (){
return cljs.core.reduce.call(null,(function (p1__13958_SHARP_,p2__13959_SHARP_){
return cljs.core.conj.call(null,p1__13958_SHARP_,p2__13959_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14027);
});
var G__14188__14190 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13960_SHARP_,p2__13964_SHARP_){
return cljs.core.conj.call(null,p1__13960_SHARP_,p2__13964_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14027);
});
var G__14188__14191 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13966_SHARP_,p2__13967_SHARP_){
return cljs.core.conj.call(null,p1__13966_SHARP_,p2__13967_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14027);
});
var G__14188__14192 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13968_SHARP_,p2__13969_SHARP_){
return cljs.core.conj.call(null,p1__13968_SHARP_,p2__13969_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14027);
});
var G__14188__14193 = (function() { 
var G__14200__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13970_SHARP_,p2__13971_SHARP_){
return cljs.core.conj.call(null,p1__13970_SHARP_,cljs.core.apply.call(null,p2__13971_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14027);
};
var G__14200 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14200__delegate.call(this, x, y, z, args);
};
G__14200.cljs$lang$maxFixedArity = 3;
G__14200.cljs$lang$applyTo = (function (arglist__14203){
var x = cljs.core.first(arglist__14203);
var y = cljs.core.first(cljs.core.next(arglist__14203));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14203)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14203)));
return G__14200__delegate.call(this, x, y, z, args);
});
return G__14200;
})()
;
G__14188 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14188__14189.call(this);
case  1 :
return G__14188__14190.call(this,x);
case  2 :
return G__14188__14191.call(this,x,y);
case  3 :
return G__14188__14192.call(this,x,y,z);
default:
return G__14188__14193.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14188.cljs$lang$maxFixedArity = 3;
G__14188.cljs$lang$applyTo = G__14188__14193.cljs$lang$applyTo;
return G__14188;
})()
};
var G__14186 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14186__delegate.call(this, f, g, h, fs);
};
G__14186.cljs$lang$maxFixedArity = 3;
G__14186.cljs$lang$applyTo = (function (arglist__14207){
var f = cljs.core.first(arglist__14207);
var g = cljs.core.first(cljs.core.next(arglist__14207));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14207)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14207)));
return G__14186__delegate.call(this, f, g, h, fs);
});
return G__14186;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14112.call(this,f);
case  2 :
return juxt__14113.call(this,f,g);
case  3 :
return juxt__14114.call(this,f,g,h);
default:
return juxt__14115.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14115.cljs$lang$applyTo;
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
var dorun__14226 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14231 = cljs.core.next.call(null,coll);
coll = G__14231;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14228 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14217 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14217))
{return (n > 0);
} else
{return and__3546__auto____14217;
}
})()))
{{
var G__14233 = (n - 1);
var G__14234 = cljs.core.next.call(null,coll);
n = G__14233;
coll = G__14234;
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
return dorun__14226.call(this,n);
case  2 :
return dorun__14228.call(this,n,coll);
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
var doall__14243 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14244 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14243.call(this,n);
case  2 :
return doall__14244.call(this,n,coll);
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
var matches__14246 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14246),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14246),1)))
{return cljs.core.first.call(null,matches__14246);
} else
{return cljs.core.vec.call(null,matches__14246);
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
var matches__14265 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14265)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14265),1)))
{return cljs.core.first.call(null,matches__14265);
} else
{return cljs.core.vec.call(null,matches__14265);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14279 = cljs.core.re_find.call(null,re,s);
var match_idx__14280 = s.search(re);
var match_str__14281 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14279))?cljs.core.first.call(null,match_data__14279):match_data__14279);
var post_match__14282 = cljs.core.subs.call(null,s,(match_idx__14280 + cljs.core.count.call(null,match_str__14281)));

if(cljs.core.truth_(match_data__14279))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14279,re_seq.call(null,re,post_match__14282));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14304_SHARP_){
return print_one.call(null,p1__14304_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14322 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14322))
{var and__3546__auto____14334 = (function (){var x__445__auto____14323 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14324 = x__445__auto____14323;

if(cljs.core.truth_(and__3546__auto____14324))
{var and__3546__auto____14325 = x__445__auto____14323.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14325))
{return cljs.core.not.call(null,x__445__auto____14323.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14325;
}
} else
{return and__3546__auto____14324;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14323);
}
})();

if(cljs.core.truth_(and__3546__auto____14334))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14334;
}
} else
{return and__3546__auto____14322;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14337 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14338 = x__445__auto____14337;

if(cljs.core.truth_(and__3546__auto____14338))
{var and__3546__auto____14341 = x__445__auto____14337.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14341))
{return cljs.core.not.call(null,x__445__auto____14337.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14341;
}
} else
{return and__3546__auto____14338;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14337);
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
var first_obj__14359 = cljs.core.first.call(null,objs);
var sb__14361 = (new goog.string.StringBuffer());

var G__14363__14367 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14363__14367))
{var obj__14368 = cljs.core.first.call(null,G__14363__14367);
var G__14363__14369 = G__14363__14367;

while(true){
if(cljs.core.truth_((obj__14368 === first_obj__14359)))
{} else
{sb__14361.append(" ");
}
var G__14370__14371 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14368,opts));

if(cljs.core.truth_(G__14370__14371))
{var string__14372 = cljs.core.first.call(null,G__14370__14371);
var G__14370__14373 = G__14370__14371;

while(true){
sb__14361.append(string__14372);
var temp__3698__auto____14374 = cljs.core.next.call(null,G__14370__14373);

if(cljs.core.truth_(temp__3698__auto____14374))
{var G__14370__14375 = temp__3698__auto____14374;

{
var G__14398 = cljs.core.first.call(null,G__14370__14375);
var G__14399 = G__14370__14375;
string__14372 = G__14398;
G__14370__14373 = G__14399;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14378 = cljs.core.next.call(null,G__14363__14369);

if(cljs.core.truth_(temp__3698__auto____14378))
{var G__14363__14383 = temp__3698__auto____14378;

{
var G__14400 = cljs.core.first.call(null,G__14363__14383);
var G__14401 = G__14363__14383;
obj__14368 = G__14400;
G__14363__14369 = G__14401;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14361);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14409 = cljs.core.first.call(null,objs);

var G__14410__14411 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14410__14411))
{var obj__14414 = cljs.core.first.call(null,G__14410__14411);
var G__14410__14415 = G__14410__14411;

while(true){
if(cljs.core.truth_((obj__14414 === first_obj__14409)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14416__14418 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14414,opts));

if(cljs.core.truth_(G__14416__14418))
{var string__14419 = cljs.core.first.call(null,G__14416__14418);
var G__14416__14420 = G__14416__14418;

while(true){
cljs.core.string_print.call(null,string__14419);
var temp__3698__auto____14428 = cljs.core.next.call(null,G__14416__14420);

if(cljs.core.truth_(temp__3698__auto____14428))
{var G__14416__14429 = temp__3698__auto____14428;

{
var G__14434 = cljs.core.first.call(null,G__14416__14429);
var G__14435 = G__14416__14429;
string__14419 = G__14434;
G__14416__14420 = G__14435;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14430 = cljs.core.next.call(null,G__14410__14415);

if(cljs.core.truth_(temp__3698__auto____14430))
{var G__14410__14431 = temp__3698__auto____14430;

{
var G__14438 = cljs.core.first.call(null,G__14410__14431);
var G__14439 = G__14410__14431;
obj__14414 = G__14438;
G__14410__14415 = G__14439;
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
pr_str.cljs$lang$applyTo = (function (arglist__14482){
var objs = cljs.core.seq( arglist__14482 );;
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
pr.cljs$lang$applyTo = (function (arglist__14495){
var objs = cljs.core.seq( arglist__14495 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14510){
var objs = cljs.core.seq( arglist__14510 );;
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
println.cljs$lang$applyTo = (function (arglist__14513){
var objs = cljs.core.seq( arglist__14513 );;
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
prn.cljs$lang$applyTo = (function (arglist__14590){
var objs = cljs.core.seq( arglist__14590 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14594 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14594,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14608 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14608))
{var nspc__14609 = temp__3698__auto____14608;

return cljs.core.str.call(null,nspc__14609,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14612 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14612))
{var nspc__14613 = temp__3698__auto____14612;

return cljs.core.str.call(null,nspc__14613,"/");
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
var pr_pair__14622 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14622,"{",", ","}",opts,coll);
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
var this__14647 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14650 = this;
var G__14711__14713 = cljs.core.seq.call(null,this__14650.watches);

if(cljs.core.truth_(G__14711__14713))
{var G__14715__14720 = cljs.core.first.call(null,G__14711__14713);
var vec__14716__14721 = G__14715__14720;
var key__14723 = cljs.core.nth.call(null,vec__14716__14721,0,null);
var f__14724 = cljs.core.nth.call(null,vec__14716__14721,1,null);
var G__14711__14725 = G__14711__14713;

var G__14715__14726 = G__14715__14720;
var G__14711__14727 = G__14711__14725;

while(true){
var vec__14728__14730 = G__14715__14726;
var key__14731 = cljs.core.nth.call(null,vec__14728__14730,0,null);
var f__14732 = cljs.core.nth.call(null,vec__14728__14730,1,null);
var G__14711__14733 = G__14711__14727;

f__14732.call(null,key__14731,this$,oldval,newval);
var temp__3698__auto____14735 = cljs.core.next.call(null,G__14711__14733);

if(cljs.core.truth_(temp__3698__auto____14735))
{var G__14711__14736 = temp__3698__auto____14735;

{
var G__14757 = cljs.core.first.call(null,G__14711__14736);
var G__14758 = G__14711__14736;
G__14715__14726 = G__14757;
G__14711__14727 = G__14758;
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
var this__14739 = this;
return this$.watches = cljs.core.assoc.call(null,this__14739.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14740 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14740.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14741 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14741.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14743 = this;
return this__14743.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14746 = this;
return this__14746.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14750 = this;
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
var atom__14779 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14780 = (function() { 
var G__14782__delegate = function (x,p__14768){
var map__14769__14770 = p__14768;
var map__14769__14772 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14769__14770))?cljs.core.apply.call(null,cljs.core.hash_map,map__14769__14770):map__14769__14770);
var validator__14773 = cljs.core.get.call(null,map__14769__14772,"﷐'validator");
var meta__14774 = cljs.core.get.call(null,map__14769__14772,"﷐'meta");

return (new cljs.core.Atom(x,meta__14774,validator__14773,null));
};
var G__14782 = function (x,var_args){
var p__14768 = null;
if (goog.isDef(var_args)) {
  p__14768 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14782__delegate.call(this, x, p__14768);
};
G__14782.cljs$lang$maxFixedArity = 1;
G__14782.cljs$lang$applyTo = (function (arglist__14783){
var x = cljs.core.first(arglist__14783);
var p__14768 = cljs.core.rest(arglist__14783);
return G__14782__delegate.call(this, x, p__14768);
});
return G__14782;
})()
;
atom = function(x,var_args){
var p__14768 = var_args;
switch(arguments.length){
case  1 :
return atom__14779.call(this,x);
default:
return atom__14780.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14780.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14788 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14788))
{var validate__14791 = temp__3698__auto____14788;

if(cljs.core.truth_(validate__14791.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14792 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14792,new_value);
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
var swap_BANG___14812 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14813 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14814 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14815 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14816 = (function() { 
var G__14818__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14818 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14818__delegate.call(this, a, f, x, y, z, more);
};
G__14818.cljs$lang$maxFixedArity = 5;
G__14818.cljs$lang$applyTo = (function (arglist__14819){
var a = cljs.core.first(arglist__14819);
var f = cljs.core.first(cljs.core.next(arglist__14819));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14819)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14819))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14819)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14819)))));
return G__14818__delegate.call(this, a, f, x, y, z, more);
});
return G__14818;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14812.call(this,a,f);
case  3 :
return swap_BANG___14813.call(this,a,f,x);
case  4 :
return swap_BANG___14814.call(this,a,f,x,y);
case  5 :
return swap_BANG___14815.call(this,a,f,x,y,z);
default:
return swap_BANG___14816.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14816.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14857){
var iref = cljs.core.first(arglist__14857);
var f = cljs.core.first(cljs.core.next(arglist__14857));
var args = cljs.core.rest(cljs.core.next(arglist__14857));
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
var gensym__14866 = (function (){
return gensym.call(null,"G__");
});
var gensym__14867 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14866.call(this);
case  1 :
return gensym__14867.call(this,prefix_string);
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
var this__14874 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14874.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14876 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14876.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14876.state,this__14876.f);
}
return cljs.core.deref.call(null,this__14876.state);
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
delay.cljs$lang$applyTo = (function (arglist__14894){
var body = cljs.core.seq( arglist__14894 );;
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
var map__14903__14904 = options;
var map__14903__14905 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14903__14904))?cljs.core.apply.call(null,cljs.core.hash_map,map__14903__14904):map__14903__14904);
var keywordize_keys__14906 = cljs.core.get.call(null,map__14903__14905,"﷐'keywordize-keys");
var keyfn__14909 = (cljs.core.truth_(keywordize_keys__14906)?cljs.core.keyword:cljs.core.str);
var f__14920 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14918 = (function iter__14911(s__14912){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14912__14916 = s__14912;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14912__14916)))
{var k__14917 = cljs.core.first.call(null,s__14912__14916);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14909.call(null,k__14917),thisfn.call(null,(x[k__14917]))]),iter__14911.call(null,cljs.core.rest.call(null,s__14912__14916)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14918.call(null,cljs.core.js_keys.call(null,x));
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

return f__14920.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14939){
var x = cljs.core.first(arglist__14939);
var options = cljs.core.rest(arglist__14939);
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
var mem__14942 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14946__delegate = function (args){
var temp__3695__auto____14943 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14942),args);

if(cljs.core.truth_(temp__3695__auto____14943))
{var v__14944 = temp__3695__auto____14943;

return v__14944;
} else
{var ret__14945 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14942,cljs.core.assoc,args,ret__14945);
return ret__14945;
}
};
var G__14946 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14946__delegate.call(this, args);
};
G__14946.cljs$lang$maxFixedArity = 0;
G__14946.cljs$lang$applyTo = (function (arglist__14947){
var args = cljs.core.seq( arglist__14947 );;
return G__14946__delegate.call(this, args);
});
return G__14946;
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
var trampoline__14963 = (function (f){
while(true){
var ret__14949 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14949)))
{{
var G__14967 = ret__14949;
f = G__14967;
continue;
}
} else
{return ret__14949;
}
break;
}
});
var trampoline__14964 = (function() { 
var G__14968__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14968 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14968__delegate.call(this, f, args);
};
G__14968.cljs$lang$maxFixedArity = 1;
G__14968.cljs$lang$applyTo = (function (arglist__14970){
var f = cljs.core.first(arglist__14970);
var args = cljs.core.rest(arglist__14970);
return G__14968__delegate.call(this, f, args);
});
return G__14968;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14963.call(this,f);
default:
return trampoline__14964.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14964.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14981 = (function (){
return rand.call(null,1);
});
var rand__14982 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14981.call(this);
case  1 :
return rand__14982.call(this,n);
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
var k__15010 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15010,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15010,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15034 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15035 = (function (h,child,parent){
var or__3548__auto____15014 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15014))
{return or__3548__auto____15014;
} else
{var or__3548__auto____15015 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15015))
{return or__3548__auto____15015;
} else
{var and__3546__auto____15017 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15017))
{var and__3546__auto____15021 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15021))
{var and__3546__auto____15025 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15025))
{var ret__15027 = true;
var i__15028 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15031 = cljs.core.not.call(null,ret__15027);

if(cljs.core.truth_(or__3548__auto____15031))
{return or__3548__auto____15031;
} else
{return cljs.core._EQ_.call(null,i__15028,cljs.core.count.call(null,parent));
}
})()))
{return ret__15027;
} else
{{
var G__15045 = isa_QMARK_.call(null,h,child.call(null,i__15028),parent.call(null,i__15028));
var G__15046 = (i__15028 + 1);
ret__15027 = G__15045;
i__15028 = G__15046;
continue;
}
}
break;
}
} else
{return and__3546__auto____15025;
}
} else
{return and__3546__auto____15021;
}
} else
{return and__3546__auto____15017;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15034.call(this,h,child);
case  3 :
return isa_QMARK___15035.call(this,h,child,parent);
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
var parents__15051 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15052 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15051.call(this,h);
case  2 :
return parents__15052.call(this,h,tag);
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
var ancestors__15054 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15055 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15054.call(this,h);
case  2 :
return ancestors__15055.call(this,h,tag);
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
var descendants__15066 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15067 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15066.call(this,h);
case  2 :
return descendants__15067.call(this,h,tag);
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
var derive__15148 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15149 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15085 = "﷐'parents".call(null,h);
var td__15086 = "﷐'descendants".call(null,h);
var ta__15087 = "﷐'ancestors".call(null,h);
var tf__15139 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15145 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15085.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15087.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15087.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15085,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15139.call(null,"﷐'ancestors".call(null,h),tag,td__15086,parent,ta__15087),"﷐'descendants":tf__15139.call(null,"﷐'descendants".call(null,h),parent,ta__15087,tag,td__15086)});
})());

if(cljs.core.truth_(or__3548__auto____15145))
{return or__3548__auto____15145;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15148.call(this,h,tag);
case  3 :
return derive__15149.call(this,h,tag,parent);
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
var underive__15186 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15187 = (function (h,tag,parent){
var parentMap__15168 = "﷐'parents".call(null,h);
var childsParents__15169 = (cljs.core.truth_(parentMap__15168.call(null,tag))?cljs.core.disj.call(null,parentMap__15168.call(null,tag),parent):cljs.core.set([]));
var newParents__15171 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15169))?cljs.core.assoc.call(null,parentMap__15168,tag,childsParents__15169):cljs.core.dissoc.call(null,parentMap__15168,tag));
var deriv_seq__15178 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15072_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15072_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15072_SHARP_),cljs.core.second.call(null,p1__15072_SHARP_)));
}),cljs.core.seq.call(null,newParents__15171)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15168.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15073_SHARP_,p2__15074_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15073_SHARP_,p2__15074_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15178));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15186.call(this,h,tag);
case  3 :
return underive__15187.call(this,h,tag,parent);
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
var xprefs__15196 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15201 = (cljs.core.truth_((function (){var and__3546__auto____15199 = xprefs__15196;

if(cljs.core.truth_(and__3546__auto____15199))
{return xprefs__15196.call(null,y);
} else
{return and__3546__auto____15199;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15201))
{return or__3548__auto____15201;
} else
{var or__3548__auto____15206 = (function (){var ps__15203 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15203) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15203),prefer_table)))
{} else
{}
{
var G__15219 = cljs.core.rest.call(null,ps__15203);
ps__15203 = G__15219;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15206))
{return or__3548__auto____15206;
} else
{var or__3548__auto____15211 = (function (){var ps__15209 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15209) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15209),y,prefer_table)))
{} else
{}
{
var G__15221 = cljs.core.rest.call(null,ps__15209);
ps__15209 = G__15221;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15211))
{return or__3548__auto____15211;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15228 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15228))
{return or__3548__auto____15228;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15251 = cljs.core.reduce.call(null,(function (be,p__15235){
var vec__15238__15241 = p__15235;
var k__15243 = cljs.core.nth.call(null,vec__15238__15241,0,null);
var ___15245 = cljs.core.nth.call(null,vec__15238__15241,1,null);
var e__15246 = vec__15238__15241;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15243)))
{var be2__15249 = (cljs.core.truth_((function (){var or__3548__auto____15247 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15247))
{return or__3548__auto____15247;
} else
{return cljs.core.dominates.call(null,k__15243,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15246:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15249),k__15243,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15243," and ",cljs.core.first.call(null,be2__15249),", and neither is preferred")));
}
return be2__15249;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15251))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15251));
return cljs.core.second.call(null,best_entry__15251);
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
if(cljs.core.truth_((function (){var and__3546__auto____15262 = mf;

if(cljs.core.truth_(and__3546__auto____15262))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15262;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15264 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15264))
{return or__3548__auto____15264;
} else
{var or__3548__auto____15265 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15265))
{return or__3548__auto____15265;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15270 = mf;

if(cljs.core.truth_(and__3546__auto____15270))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15270;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15306 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15306))
{return or__3548__auto____15306;
} else
{var or__3548__auto____15310 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15310))
{return or__3548__auto____15310;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15311 = mf;

if(cljs.core.truth_(and__3546__auto____15311))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15311;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15319 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15319))
{return or__3548__auto____15319;
} else
{var or__3548__auto____15321 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15321))
{return or__3548__auto____15321;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15326 = mf;

if(cljs.core.truth_(and__3546__auto____15326))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15326;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15328 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15328))
{return or__3548__auto____15328;
} else
{var or__3548__auto____15332 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15332))
{return or__3548__auto____15332;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15335 = mf;

if(cljs.core.truth_(and__3546__auto____15335))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15335;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15341 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15341))
{return or__3548__auto____15341;
} else
{var or__3548__auto____15342 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15342))
{return or__3548__auto____15342;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15343 = mf;

if(cljs.core.truth_(and__3546__auto____15343))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15343;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15346 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15346))
{return or__3548__auto____15346;
} else
{var or__3548__auto____15349 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15349))
{return or__3548__auto____15349;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15352 = mf;

if(cljs.core.truth_(and__3546__auto____15352))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15352;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15358 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15358))
{return or__3548__auto____15358;
} else
{var or__3548__auto____15360 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15360))
{return or__3548__auto____15360;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15363 = mf;

if(cljs.core.truth_(and__3546__auto____15363))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15363;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15366 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15366))
{return or__3548__auto____15366;
} else
{var or__3548__auto____15367 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15367))
{return or__3548__auto____15367;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15399 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15400 = cljs.core._get_method.call(null,mf,dispatch_val__15399);

if(cljs.core.truth_(target_fn__15400))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15399)));
}
return cljs.core.apply.call(null,target_fn__15400,args);
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
var this__15410 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15413 = this;
cljs.core.swap_BANG_.call(null,this__15413.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15413.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15413.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15413.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15416 = this;
cljs.core.swap_BANG_.call(null,this__15416.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15416.method_cache,this__15416.method_table,this__15416.cached_hierarchy,this__15416.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15417 = this;
cljs.core.swap_BANG_.call(null,this__15417.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15417.method_cache,this__15417.method_table,this__15417.cached_hierarchy,this__15417.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15418 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15418.cached_hierarchy),cljs.core.deref.call(null,this__15418.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15418.method_cache,this__15418.method_table,this__15418.cached_hierarchy,this__15418.hierarchy);
}
var temp__3695__auto____15422 = cljs.core.deref.call(null,this__15418.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15422))
{var target_fn__15423 = temp__3695__auto____15422;

return target_fn__15423;
} else
{var temp__3695__auto____15426 = cljs.core.find_and_cache_best_method.call(null,this__15418.name,dispatch_val,this__15418.hierarchy,this__15418.method_table,this__15418.prefer_table,this__15418.method_cache,this__15418.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15426))
{var target_fn__15427 = temp__3695__auto____15426;

return target_fn__15427;
} else
{return cljs.core.deref.call(null,this__15418.method_table).call(null,this__15418.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15430 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15430.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15430.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15430.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15430.method_cache,this__15430.method_table,this__15430.cached_hierarchy,this__15430.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15436 = this;
return cljs.core.deref.call(null,this__15436.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15463 = this;
return cljs.core.deref.call(null,this__15463.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15465 = this;
return cljs.core.do_dispatch.call(null,mf,this__15465.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15482__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15482 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15482__delegate.call(this, _, args);
};
G__15482.cljs$lang$maxFixedArity = 1;
G__15482.cljs$lang$applyTo = (function (arglist__15484){
var _ = cljs.core.first(arglist__15484);
var args = cljs.core.rest(arglist__15484);
return G__15482__delegate.call(this, _, args);
});
return G__15482;
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
