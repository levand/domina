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
var or__3548__auto____7256 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7256))
{return or__3548__auto____7256;
} else
{var or__3548__auto____7257 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7257))
{return or__3548__auto____7257;
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
var _invoke__7637 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7262 = this$;

if(cljs.core.truth_(and__3546__auto____7262))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7262;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7263 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7263))
{return or__3548__auto____7263;
} else
{var or__3548__auto____7264 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7264))
{return or__3548__auto____7264;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7638 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7279 = this$;

if(cljs.core.truth_(and__3546__auto____7279))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7279;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7281 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7281))
{return or__3548__auto____7281;
} else
{var or__3548__auto____7282 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7282))
{return or__3548__auto____7282;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7639 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7285 = this$;

if(cljs.core.truth_(and__3546__auto____7285))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7285;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7287 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7287))
{return or__3548__auto____7287;
} else
{var or__3548__auto____7288 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7288))
{return or__3548__auto____7288;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7640 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7310 = this$;

if(cljs.core.truth_(and__3546__auto____7310))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7310;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7315 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7315))
{return or__3548__auto____7315;
} else
{var or__3548__auto____7318 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7318))
{return or__3548__auto____7318;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7641 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7340 = this$;

if(cljs.core.truth_(and__3546__auto____7340))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7340;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7346 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7346))
{return or__3548__auto____7346;
} else
{var or__3548__auto____7348 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7348))
{return or__3548__auto____7348;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7642 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7352 = this$;

if(cljs.core.truth_(and__3546__auto____7352))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7352;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
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
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7643 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7364 = this$;

if(cljs.core.truth_(and__3546__auto____7364))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7364;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7370 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7370))
{return or__3548__auto____7370;
} else
{var or__3548__auto____7372 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7372))
{return or__3548__auto____7372;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7644 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7375 = this$;

if(cljs.core.truth_(and__3546__auto____7375))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7375;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
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
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7645 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7385 = this$;

if(cljs.core.truth_(and__3546__auto____7385))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7385;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7390 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7390))
{return or__3548__auto____7390;
} else
{var or__3548__auto____7393 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7393))
{return or__3548__auto____7393;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7646 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7397 = this$;

if(cljs.core.truth_(and__3546__auto____7397))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7397;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7402 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7402))
{return or__3548__auto____7402;
} else
{var or__3548__auto____7405 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7405))
{return or__3548__auto____7405;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7647 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7409 = this$;

if(cljs.core.truth_(and__3546__auto____7409))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7409;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7414 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7414))
{return or__3548__auto____7414;
} else
{var or__3548__auto____7438 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7438))
{return or__3548__auto____7438;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7648 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7443 = this$;

if(cljs.core.truth_(and__3546__auto____7443))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7443;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7448 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7448))
{return or__3548__auto____7448;
} else
{var or__3548__auto____7450 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7450))
{return or__3548__auto____7450;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7649 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7455 = this$;

if(cljs.core.truth_(and__3546__auto____7455))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7455;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7460 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7460))
{return or__3548__auto____7460;
} else
{var or__3548__auto____7462 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7462))
{return or__3548__auto____7462;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7651 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7467 = this$;

if(cljs.core.truth_(and__3546__auto____7467))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7467;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7472 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7472))
{return or__3548__auto____7472;
} else
{var or__3548__auto____7473 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7473))
{return or__3548__auto____7473;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7652 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7479 = this$;

if(cljs.core.truth_(and__3546__auto____7479))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7479;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7653 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7490 = this$;

if(cljs.core.truth_(and__3546__auto____7490))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7490;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7654 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7499 = this$;

if(cljs.core.truth_(and__3546__auto____7499))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7499;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7507 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7507))
{return or__3548__auto____7507;
} else
{var or__3548__auto____7518 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7518))
{return or__3548__auto____7518;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7655 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7522 = this$;

if(cljs.core.truth_(and__3546__auto____7522))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7522;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7524 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7524))
{return or__3548__auto____7524;
} else
{var or__3548__auto____7527 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7527))
{return or__3548__auto____7527;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7656 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7531 = this$;

if(cljs.core.truth_(and__3546__auto____7531))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7531;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7534 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7534))
{return or__3548__auto____7534;
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
var _invoke__7657 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7538 = this$;

if(cljs.core.truth_(and__3546__auto____7538))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7538;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7540 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7540))
{return or__3548__auto____7540;
} else
{var or__3548__auto____7543 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7543))
{return or__3548__auto____7543;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7658 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7546 = this$;

if(cljs.core.truth_(and__3546__auto____7546))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7546;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7549 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7549))
{return or__3548__auto____7549;
} else
{var or__3548__auto____7551 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7551))
{return or__3548__auto____7551;
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
return _invoke__7637.call(this,this$);
case  2 :
return _invoke__7638.call(this,this$,a);
case  3 :
return _invoke__7639.call(this,this$,a,b);
case  4 :
return _invoke__7640.call(this,this$,a,b,c);
case  5 :
return _invoke__7641.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7642.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7643.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7644.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7645.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7646.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7647.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7648.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7649.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7651.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7652.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7653.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7654.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7655.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7656.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7657.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7658.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7789 = coll;

if(cljs.core.truth_(and__3546__auto____7789))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7789;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7791 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7791))
{return or__3548__auto____7791;
} else
{var or__3548__auto____7794 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7794))
{return or__3548__auto____7794;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7803 = coll;

if(cljs.core.truth_(and__3546__auto____7803))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7803;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7804 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{var or__3548__auto____7805 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7805))
{return or__3548__auto____7805;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7809 = coll;

if(cljs.core.truth_(and__3546__auto____7809))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7809;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7812 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7812))
{return or__3548__auto____7812;
} else
{var or__3548__auto____7814 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7814))
{return or__3548__auto____7814;
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
var _nth__7889 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7877 = coll;

if(cljs.core.truth_(and__3546__auto____7877))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7877;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7879 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7879))
{return or__3548__auto____7879;
} else
{var or__3548__auto____7880 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7880))
{return or__3548__auto____7880;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7890 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7883 = coll;

if(cljs.core.truth_(and__3546__auto____7883))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7883;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7885 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7885))
{return or__3548__auto____7885;
} else
{var or__3548__auto____7886 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7886))
{return or__3548__auto____7886;
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
return _nth__7889.call(this,coll,n);
case  3 :
return _nth__7890.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7897 = coll;

if(cljs.core.truth_(and__3546__auto____7897))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7897;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7899 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7899))
{return or__3548__auto____7899;
} else
{var or__3548__auto____7900 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7900))
{return or__3548__auto____7900;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7904 = coll;

if(cljs.core.truth_(and__3546__auto____7904))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7904;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7908 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7908))
{return or__3548__auto____7908;
} else
{var or__3548__auto____7909 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7909))
{return or__3548__auto____7909;
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
var _lookup__7943 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7933 = o;

if(cljs.core.truth_(and__3546__auto____7933))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7933;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7935 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7935))
{return or__3548__auto____7935;
} else
{var or__3548__auto____7936 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7936))
{return or__3548__auto____7936;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7944 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7937 = o;

if(cljs.core.truth_(and__3546__auto____7937))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7937;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7939 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7939))
{return or__3548__auto____7939;
} else
{var or__3548__auto____7940 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7940))
{return or__3548__auto____7940;
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
return _lookup__7943.call(this,o,k);
case  3 :
return _lookup__7944.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7960 = coll;

if(cljs.core.truth_(and__3546__auto____7960))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7960;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7964 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7964))
{return or__3548__auto____7964;
} else
{var or__3548__auto____7966 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7966))
{return or__3548__auto____7966;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7967 = coll;

if(cljs.core.truth_(and__3546__auto____7967))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7967;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7968 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7968))
{return or__3548__auto____7968;
} else
{var or__3548__auto____7971 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7971))
{return or__3548__auto____7971;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7994 = coll;

if(cljs.core.truth_(and__3546__auto____7994))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7994;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7999 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7999))
{return or__3548__auto____7999;
} else
{var or__3548__auto____8001 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____8001))
{return or__3548__auto____8001;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____8006 = coll;

if(cljs.core.truth_(and__3546__auto____8006))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____8006;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____8009 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8009))
{return or__3548__auto____8009;
} else
{var or__3548__auto____8011 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____8011))
{return or__3548__auto____8011;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8021 = coll;

if(cljs.core.truth_(and__3546__auto____8021))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____8021;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____8024 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8024))
{return or__3548__auto____8024;
} else
{var or__3548__auto____8025 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____8025))
{return or__3548__auto____8025;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8029 = coll;

if(cljs.core.truth_(and__3546__auto____8029))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____8029;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8032 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8032))
{return or__3548__auto____8032;
} else
{var or__3548__auto____8033 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8033))
{return or__3548__auto____8033;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8044 = coll;

if(cljs.core.truth_(and__3546__auto____8044))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8044;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8049 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{var or__3548__auto____8053 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8053))
{return or__3548__auto____8053;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8059 = o;

if(cljs.core.truth_(and__3546__auto____8059))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8059;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8061 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8061))
{return or__3548__auto____8061;
} else
{var or__3548__auto____8062 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8062))
{return or__3548__auto____8062;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8068 = o;

if(cljs.core.truth_(and__3546__auto____8068))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8068;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8070 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8070))
{return or__3548__auto____8070;
} else
{var or__3548__auto____8072 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8072))
{return or__3548__auto____8072;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8081 = o;

if(cljs.core.truth_(and__3546__auto____8081))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8081;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8082 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8082))
{return or__3548__auto____8082;
} else
{var or__3548__auto____8083 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8090 = o;

if(cljs.core.truth_(and__3546__auto____8090))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8090;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8091 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8091))
{return or__3548__auto____8091;
} else
{var or__3548__auto____8093 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8093))
{return or__3548__auto____8093;
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
var _reduce__8113 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8099 = coll;

if(cljs.core.truth_(and__3546__auto____8099))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8099;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8103 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8103))
{return or__3548__auto____8103;
} else
{var or__3548__auto____8105 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8105))
{return or__3548__auto____8105;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8114 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8108 = coll;

if(cljs.core.truth_(and__3546__auto____8108))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8108;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8110 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8110))
{return or__3548__auto____8110;
} else
{var or__3548__auto____8112 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8112))
{return or__3548__auto____8112;
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
return _reduce__8113.call(this,coll,f);
case  3 :
return _reduce__8114.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8138 = o;

if(cljs.core.truth_(and__3546__auto____8138))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8138;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8139 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8139))
{return or__3548__auto____8139;
} else
{var or__3548__auto____8140 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8140))
{return or__3548__auto____8140;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8141 = o;

if(cljs.core.truth_(and__3546__auto____8141))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8141;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8143 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8143))
{return or__3548__auto____8143;
} else
{var or__3548__auto____8145 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8145))
{return or__3548__auto____8145;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8165 = o;

if(cljs.core.truth_(and__3546__auto____8165))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8165;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8167 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8167))
{return or__3548__auto____8167;
} else
{var or__3548__auto____8169 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8169))
{return or__3548__auto____8169;
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
if(cljs.core.truth_((function (){var and__3546__auto____8174 = o;

if(cljs.core.truth_(and__3546__auto____8174))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8174;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8175 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8175))
{return or__3548__auto____8175;
} else
{var or__3548__auto____8176 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8176))
{return or__3548__auto____8176;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8180 = d;

if(cljs.core.truth_(and__3546__auto____8180))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8180;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8181 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8181))
{return or__3548__auto____8181;
} else
{var or__3548__auto____8186 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8186))
{return or__3548__auto____8186;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8191 = this$;

if(cljs.core.truth_(and__3546__auto____8191))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8191;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8192 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8192))
{return or__3548__auto____8192;
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
if(cljs.core.truth_((function (){var and__3546__auto____8194 = this$;

if(cljs.core.truth_(and__3546__auto____8194))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8194;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8195 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8195))
{return or__3548__auto____8195;
} else
{var or__3548__auto____8200 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8200))
{return or__3548__auto____8200;
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
{return (function (){var or__3548__auto____8202 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8202))
{return or__3548__auto____8202;
} else
{var or__3548__auto____8203 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8203))
{return or__3548__auto____8203;
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
var G__8244 = null;
var G__8244__8246 = (function (o,k){
return null;
});
var G__8244__8247 = (function (o,k,not_found){
return not_found;
});
G__8244 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8244__8246.call(this,o,k);
case  3 :
return G__8244__8247.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8244;
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
var G__8250 = null;
var G__8250__8251 = (function (_,f){
return f.call(null);
});
var G__8250__8252 = (function (_,f,start){
return start;
});
G__8250 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8250__8251.call(this,_,f);
case  3 :
return G__8250__8252.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8250;
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
var G__8255 = null;
var G__8255__8256 = (function (_,n){
return null;
});
var G__8255__8257 = (function (_,n,not_found){
return not_found;
});
G__8255 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8255__8256.call(this,_,n);
case  3 :
return G__8255__8257.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8255;
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
var ci_reduce__8277 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8271 = cljs.core._nth.call(null,cicoll,0);
var n__8272 = 1;

while(true){
if(cljs.core.truth_((n__8272 < cljs.core._count.call(null,cicoll))))
{{
var G__8281 = f.call(null,val__8271,cljs.core._nth.call(null,cicoll,n__8272));
var G__8282 = (n__8272 + 1);
val__8271 = G__8281;
n__8272 = G__8282;
continue;
}
} else
{return val__8271;
}
break;
}
}
});
var ci_reduce__8278 = (function (cicoll,f,val){
var val__8273 = val;
var n__8274 = 0;

while(true){
if(cljs.core.truth_((n__8274 < cljs.core._count.call(null,cicoll))))
{{
var G__8285 = f.call(null,val__8273,cljs.core._nth.call(null,cicoll,n__8274));
var G__8286 = (n__8274 + 1);
val__8273 = G__8285;
n__8274 = G__8286;
continue;
}
} else
{return val__8273;
}
break;
}
});
var ci_reduce__8279 = (function (cicoll,f,val,idx){
var val__8275 = val;
var n__8276 = idx;

while(true){
if(cljs.core.truth_((n__8276 < cljs.core._count.call(null,cicoll))))
{{
var G__8289 = f.call(null,val__8275,cljs.core._nth.call(null,cicoll,n__8276));
var G__8290 = (n__8276 + 1);
val__8275 = G__8289;
n__8276 = G__8290;
continue;
}
} else
{return val__8275;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8277.call(this,cicoll,f);
case  3 :
return ci_reduce__8278.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8279.call(this,cicoll,f,val,idx);
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
var this__8309 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8362 = null;
var G__8362__8363 = (function (_,f){
var this__8312 = this;
return cljs.core.ci_reduce.call(null,this__8312.a,f,(this__8312.a[this__8312.i]),(this__8312.i + 1));
});
var G__8362__8364 = (function (_,f,start){
var this__8316 = this;
return cljs.core.ci_reduce.call(null,this__8316.a,f,start,this__8316.i);
});
G__8362 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8362__8363.call(this,_,f);
case  3 :
return G__8362__8364.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8362;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8317 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8320 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8373 = null;
var G__8373__8374 = (function (coll,n){
var this__8325 = this;
var i__8329 = (n + this__8325.i);

if(cljs.core.truth_((i__8329 < this__8325.a.length)))
{return (this__8325.a[i__8329]);
} else
{return null;
}
});
var G__8373__8375 = (function (coll,n,not_found){
var this__8331 = this;
var i__8332 = (n + this__8331.i);

if(cljs.core.truth_((i__8332 < this__8331.a.length)))
{return (this__8331.a[i__8332]);
} else
{return not_found;
}
});
G__8373 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8373__8374.call(this,coll,n);
case  3 :
return G__8373__8375.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8373;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8339 = this;
return (this__8339.a.length - this__8339.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8341 = this;
return (this__8341.a[this__8341.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8345 = this;
if(cljs.core.truth_(((this__8345.i + 1) < this__8345.a.length)))
{return (new cljs.core.IndexedSeq(this__8345.a,(this__8345.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8352 = this;
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
var G__8453 = null;
var G__8453__8454 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8453__8455 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8453 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8453__8454.call(this,array,f);
case  3 :
return G__8453__8455.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8453;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8465 = null;
var G__8465__8466 = (function (array,k){
return (array[k]);
});
var G__8465__8467 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8465 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8465__8466.call(this,array,k);
case  3 :
return G__8465__8467.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8465;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8470 = null;
var G__8470__8472 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8470__8474 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8470 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8470__8472.call(this,array,n);
case  3 :
return G__8470__8474.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8470;
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
var temp__3698__auto____8477 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8477))
{var s__8478 = temp__3698__auto____8477;

return cljs.core._first.call(null,s__8478);
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
var G__8491 = cljs.core.next.call(null,s);
s = G__8491;
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
var s__8492 = cljs.core.seq.call(null,x);
var n__8493 = 0;

while(true){
if(cljs.core.truth_(s__8492))
{{
var G__8494 = cljs.core.next.call(null,s__8492);
var G__8495 = (n__8493 + 1);
s__8492 = G__8494;
n__8493 = G__8495;
continue;
}
} else
{return n__8493;
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
var conj__8502 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8503 = (function() { 
var G__8505__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8506 = conj.call(null,coll,x);
var G__8507 = cljs.core.first.call(null,xs);
var G__8508 = cljs.core.next.call(null,xs);
coll = G__8506;
x = G__8507;
xs = G__8508;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8505 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8505__delegate.call(this, coll, x, xs);
};
G__8505.cljs$lang$maxFixedArity = 2;
G__8505.cljs$lang$applyTo = (function (arglist__8509){
var coll = cljs.core.first(arglist__8509);
var x = cljs.core.first(cljs.core.next(arglist__8509));
var xs = cljs.core.rest(cljs.core.next(arglist__8509));
return G__8505__delegate.call(this, coll, x, xs);
});
return G__8505;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8502.call(this,coll,x);
default:
return conj__8503.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8503.cljs$lang$applyTo;
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
var nth__8513 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8514 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8513.call(this,coll,n);
case  3 :
return nth__8514.call(this,coll,n,not_found);
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
var get__8516 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8517 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8516.call(this,o,k);
case  3 :
return get__8517.call(this,o,k,not_found);
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
var assoc__8523 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8524 = (function() { 
var G__8529__delegate = function (coll,k,v,kvs){
while(true){
var ret__8522 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8530 = ret__8522;
var G__8531 = cljs.core.first.call(null,kvs);
var G__8532 = cljs.core.second.call(null,kvs);
var G__8533 = cljs.core.nnext.call(null,kvs);
coll = G__8530;
k = G__8531;
v = G__8532;
kvs = G__8533;
continue;
}
} else
{return ret__8522;
}
break;
}
};
var G__8529 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8529__delegate.call(this, coll, k, v, kvs);
};
G__8529.cljs$lang$maxFixedArity = 3;
G__8529.cljs$lang$applyTo = (function (arglist__8534){
var coll = cljs.core.first(arglist__8534);
var k = cljs.core.first(cljs.core.next(arglist__8534));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8534)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8534)));
return G__8529__delegate.call(this, coll, k, v, kvs);
});
return G__8529;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8523.call(this,coll,k,v);
default:
return assoc__8524.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8524.cljs$lang$applyTo;
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
var dissoc__8546 = (function (coll){
return coll;
});
var dissoc__8547 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8548 = (function() { 
var G__8551__delegate = function (coll,k,ks){
while(true){
var ret__8536 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8554 = ret__8536;
var G__8555 = cljs.core.first.call(null,ks);
var G__8556 = cljs.core.next.call(null,ks);
coll = G__8554;
k = G__8555;
ks = G__8556;
continue;
}
} else
{return ret__8536;
}
break;
}
};
var G__8551 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8551__delegate.call(this, coll, k, ks);
};
G__8551.cljs$lang$maxFixedArity = 2;
G__8551.cljs$lang$applyTo = (function (arglist__8557){
var coll = cljs.core.first(arglist__8557);
var k = cljs.core.first(cljs.core.next(arglist__8557));
var ks = cljs.core.rest(cljs.core.next(arglist__8557));
return G__8551__delegate.call(this, coll, k, ks);
});
return G__8551;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8546.call(this,coll);
case  2 :
return dissoc__8547.call(this,coll,k);
default:
return dissoc__8548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8548.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8564 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8568 = x__445__auto____8564;

if(cljs.core.truth_(and__3546__auto____8568))
{var and__3546__auto____8571 = x__445__auto____8564.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8571))
{return cljs.core.not.call(null,x__445__auto____8564.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8571;
}
} else
{return and__3546__auto____8568;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8564);
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
var disj__8585 = (function (coll){
return coll;
});
var disj__8586 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8587 = (function() { 
var G__8589__delegate = function (coll,k,ks){
while(true){
var ret__8584 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8590 = ret__8584;
var G__8591 = cljs.core.first.call(null,ks);
var G__8593 = cljs.core.next.call(null,ks);
coll = G__8590;
k = G__8591;
ks = G__8593;
continue;
}
} else
{return ret__8584;
}
break;
}
};
var G__8589 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8589__delegate.call(this, coll, k, ks);
};
G__8589.cljs$lang$maxFixedArity = 2;
G__8589.cljs$lang$applyTo = (function (arglist__8595){
var coll = cljs.core.first(arglist__8595);
var k = cljs.core.first(cljs.core.next(arglist__8595));
var ks = cljs.core.rest(cljs.core.next(arglist__8595));
return G__8589__delegate.call(this, coll, k, ks);
});
return G__8589;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8585.call(this,coll);
case  2 :
return disj__8586.call(this,coll,k);
default:
return disj__8587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8587.cljs$lang$applyTo;
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
{var x__445__auto____8640 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8641 = x__445__auto____8640;

if(cljs.core.truth_(and__3546__auto____8641))
{var and__3546__auto____8645 = x__445__auto____8640.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8645))
{return cljs.core.not.call(null,x__445__auto____8640.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8645;
}
} else
{return and__3546__auto____8641;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8640);
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
{var x__445__auto____8653 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8654 = x__445__auto____8653;

if(cljs.core.truth_(and__3546__auto____8654))
{var and__3546__auto____8659 = x__445__auto____8653.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8659))
{return cljs.core.not.call(null,x__445__auto____8653.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8659;
}
} else
{return and__3546__auto____8654;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8653);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8678 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8682 = x__445__auto____8678;

if(cljs.core.truth_(and__3546__auto____8682))
{var and__3546__auto____8683 = x__445__auto____8678.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8683))
{return cljs.core.not.call(null,x__445__auto____8678.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8683;
}
} else
{return and__3546__auto____8682;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8678);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8696 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8701 = x__445__auto____8696;

if(cljs.core.truth_(and__3546__auto____8701))
{var and__3546__auto____8703 = x__445__auto____8696.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8703))
{return cljs.core.not.call(null,x__445__auto____8696.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8703;
}
} else
{return and__3546__auto____8701;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8696);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8712 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8714 = x__445__auto____8712;

if(cljs.core.truth_(and__3546__auto____8714))
{var and__3546__auto____8716 = x__445__auto____8712.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8716))
{return cljs.core.not.call(null,x__445__auto____8712.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8716;
}
} else
{return and__3546__auto____8714;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8712);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8724 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8726 = x__445__auto____8724;

if(cljs.core.truth_(and__3546__auto____8726))
{var and__3546__auto____8728 = x__445__auto____8724.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8728))
{return cljs.core.not.call(null,x__445__auto____8724.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8728;
}
} else
{return and__3546__auto____8726;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8724);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8745 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8748 = x__445__auto____8745;

if(cljs.core.truth_(and__3546__auto____8748))
{var and__3546__auto____8755 = x__445__auto____8745.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8755))
{return cljs.core.not.call(null,x__445__auto____8745.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8755;
}
} else
{return and__3546__auto____8748;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8745);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8767 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8767.push(key);
}));
return keys__8767;
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
{var x__445__auto____8784 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8785 = x__445__auto____8784;

if(cljs.core.truth_(and__3546__auto____8785))
{var and__3546__auto____8786 = x__445__auto____8784.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8786))
{return cljs.core.not.call(null,x__445__auto____8784.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8786;
}
} else
{return and__3546__auto____8785;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8784);
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
var and__3546__auto____8797 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8797))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8801 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8801))
{return or__3548__auto____8801;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8797;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8811 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8811))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8811;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8816 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8816))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8816;
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
var and__3546__auto____8836 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8836))
{return (n == n.toFixed());
} else
{return and__3546__auto____8836;
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
if(cljs.core.truth_((function (){var and__3546__auto____8843 = coll;

if(cljs.core.truth_(and__3546__auto____8843))
{var and__3546__auto____8844 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8844))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8844;
}
} else
{return and__3546__auto____8843;
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
var distinct_QMARK___8867 = (function (x){
return true;
});
var distinct_QMARK___8868 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8869 = (function() { 
var G__8872__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8855 = cljs.core.set([y,x]);
var xs__8856 = more;

while(true){
var x__8860 = cljs.core.first.call(null,xs__8856);
var etc__8862 = cljs.core.next.call(null,xs__8856);

if(cljs.core.truth_(xs__8856))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8855,x__8860)))
{return false;
} else
{{
var G__8873 = cljs.core.conj.call(null,s__8855,x__8860);
var G__8874 = etc__8862;
s__8855 = G__8873;
xs__8856 = G__8874;
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
var G__8872 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8872__delegate.call(this, x, y, more);
};
G__8872.cljs$lang$maxFixedArity = 2;
G__8872.cljs$lang$applyTo = (function (arglist__8876){
var x = cljs.core.first(arglist__8876);
var y = cljs.core.first(cljs.core.next(arglist__8876));
var more = cljs.core.rest(cljs.core.next(arglist__8876));
return G__8872__delegate.call(this, x, y, more);
});
return G__8872;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8867.call(this,x);
case  2 :
return distinct_QMARK___8868.call(this,x,y);
default:
return distinct_QMARK___8869.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8869.cljs$lang$applyTo;
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
var r__8883 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8883)))
{return r__8883;
} else
{if(cljs.core.truth_(r__8883))
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
var sort__8902 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8903 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8890 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8890,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8890);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8902.call(this,comp);
case  2 :
return sort__8903.call(this,comp,coll);
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
var sort_by__8910 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8911 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8910.call(this,keyfn,comp);
case  3 :
return sort_by__8911.call(this,keyfn,comp,coll);
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
var reduce__8915 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8916 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8915.call(this,f,val);
case  3 :
return reduce__8916.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8924 = (function (f,coll){
var temp__3695__auto____8919 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8919))
{var s__8920 = temp__3695__auto____8919;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8920),cljs.core.next.call(null,s__8920));
} else
{return f.call(null);
}
});
var seq_reduce__8925 = (function (f,val,coll){
var val__8921 = val;
var coll__8922 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8922))
{{
var G__8927 = f.call(null,val__8921,cljs.core.first.call(null,coll__8922));
var G__8928 = cljs.core.next.call(null,coll__8922);
val__8921 = G__8927;
coll__8922 = G__8928;
continue;
}
} else
{return val__8921;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8924.call(this,f,val);
case  3 :
return seq_reduce__8925.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8929 = null;
var G__8929__8930 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8929__8931 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8929 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8929__8930.call(this,coll,f);
case  3 :
return G__8929__8931.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8929;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8933 = (function (){
return 0;
});
var _PLUS___8934 = (function (x){
return x;
});
var _PLUS___8935 = (function (x,y){
return (x + y);
});
var _PLUS___8936 = (function() { 
var G__8938__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8938 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8938__delegate.call(this, x, y, more);
};
G__8938.cljs$lang$maxFixedArity = 2;
G__8938.cljs$lang$applyTo = (function (arglist__8939){
var x = cljs.core.first(arglist__8939);
var y = cljs.core.first(cljs.core.next(arglist__8939));
var more = cljs.core.rest(cljs.core.next(arglist__8939));
return G__8938__delegate.call(this, x, y, more);
});
return G__8938;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8933.call(this);
case  1 :
return _PLUS___8934.call(this,x);
case  2 :
return _PLUS___8935.call(this,x,y);
default:
return _PLUS___8936.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8936.cljs$lang$applyTo;
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
var ___8940 = (function (x){
return (- x);
});
var ___8941 = (function (x,y){
return (x - y);
});
var ___8942 = (function() { 
var G__8944__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8944 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8944__delegate.call(this, x, y, more);
};
G__8944.cljs$lang$maxFixedArity = 2;
G__8944.cljs$lang$applyTo = (function (arglist__8945){
var x = cljs.core.first(arglist__8945);
var y = cljs.core.first(cljs.core.next(arglist__8945));
var more = cljs.core.rest(cljs.core.next(arglist__8945));
return G__8944__delegate.call(this, x, y, more);
});
return G__8944;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8940.call(this,x);
case  2 :
return ___8941.call(this,x,y);
default:
return ___8942.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8942.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8951 = (function (){
return 1;
});
var _STAR___8952 = (function (x){
return x;
});
var _STAR___8953 = (function (x,y){
return (x * y);
});
var _STAR___8954 = (function() { 
var G__8957__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8957 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8957__delegate.call(this, x, y, more);
};
G__8957.cljs$lang$maxFixedArity = 2;
G__8957.cljs$lang$applyTo = (function (arglist__9010){
var x = cljs.core.first(arglist__9010);
var y = cljs.core.first(cljs.core.next(arglist__9010));
var more = cljs.core.rest(cljs.core.next(arglist__9010));
return G__8957__delegate.call(this, x, y, more);
});
return G__8957;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8951.call(this);
case  1 :
return _STAR___8952.call(this,x);
case  2 :
return _STAR___8953.call(this,x,y);
default:
return _STAR___8954.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8954.cljs$lang$applyTo;
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
var _SLASH___9012 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9014 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9015 = (function() { 
var G__9017__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9017 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9017__delegate.call(this, x, y, more);
};
G__9017.cljs$lang$maxFixedArity = 2;
G__9017.cljs$lang$applyTo = (function (arglist__9018){
var x = cljs.core.first(arglist__9018);
var y = cljs.core.first(cljs.core.next(arglist__9018));
var more = cljs.core.rest(cljs.core.next(arglist__9018));
return G__9017__delegate.call(this, x, y, more);
});
return G__9017;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9012.call(this,x);
case  2 :
return _SLASH___9014.call(this,x,y);
default:
return _SLASH___9015.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9015.cljs$lang$applyTo;
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
var _LT___9023 = (function (x){
return true;
});
var _LT___9024 = (function (x,y){
return (x < y);
});
var _LT___9025 = (function() { 
var G__9027__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9028 = y;
var G__9029 = cljs.core.first.call(null,more);
var G__9030 = cljs.core.next.call(null,more);
x = G__9028;
y = G__9029;
more = G__9030;
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
var G__9027 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9027__delegate.call(this, x, y, more);
};
G__9027.cljs$lang$maxFixedArity = 2;
G__9027.cljs$lang$applyTo = (function (arglist__9031){
var x = cljs.core.first(arglist__9031);
var y = cljs.core.first(cljs.core.next(arglist__9031));
var more = cljs.core.rest(cljs.core.next(arglist__9031));
return G__9027__delegate.call(this, x, y, more);
});
return G__9027;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9023.call(this,x);
case  2 :
return _LT___9024.call(this,x,y);
default:
return _LT___9025.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9025.cljs$lang$applyTo;
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
var _LT__EQ___9038 = (function (x){
return true;
});
var _LT__EQ___9039 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9040 = (function() { 
var G__9042__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9044 = y;
var G__9045 = cljs.core.first.call(null,more);
var G__9046 = cljs.core.next.call(null,more);
x = G__9044;
y = G__9045;
more = G__9046;
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
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9038.call(this,x);
case  2 :
return _LT__EQ___9039.call(this,x,y);
default:
return _LT__EQ___9040.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9040.cljs$lang$applyTo;
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
var _GT___9060 = (function (x){
return true;
});
var _GT___9061 = (function (x,y){
return (x > y);
});
var _GT___9062 = (function() { 
var G__9065__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9066 = y;
var G__9067 = cljs.core.first.call(null,more);
var G__9068 = cljs.core.next.call(null,more);
x = G__9066;
y = G__9067;
more = G__9068;
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
var G__9065 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9065__delegate.call(this, x, y, more);
};
G__9065.cljs$lang$maxFixedArity = 2;
G__9065.cljs$lang$applyTo = (function (arglist__9073){
var x = cljs.core.first(arglist__9073);
var y = cljs.core.first(cljs.core.next(arglist__9073));
var more = cljs.core.rest(cljs.core.next(arglist__9073));
return G__9065__delegate.call(this, x, y, more);
});
return G__9065;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9060.call(this,x);
case  2 :
return _GT___9061.call(this,x,y);
default:
return _GT___9062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9062.cljs$lang$applyTo;
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
var _GT__EQ___9079 = (function (x){
return true;
});
var _GT__EQ___9080 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9081 = (function() { 
var G__9084__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9086 = y;
var G__9087 = cljs.core.first.call(null,more);
var G__9088 = cljs.core.next.call(null,more);
x = G__9086;
y = G__9087;
more = G__9088;
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
var G__9084 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9084__delegate.call(this, x, y, more);
};
G__9084.cljs$lang$maxFixedArity = 2;
G__9084.cljs$lang$applyTo = (function (arglist__9089){
var x = cljs.core.first(arglist__9089);
var y = cljs.core.first(cljs.core.next(arglist__9089));
var more = cljs.core.rest(cljs.core.next(arglist__9089));
return G__9084__delegate.call(this, x, y, more);
});
return G__9084;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9079.call(this,x);
case  2 :
return _GT__EQ___9080.call(this,x,y);
default:
return _GT__EQ___9081.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9081.cljs$lang$applyTo;
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
var max__9156 = (function (x){
return x;
});
var max__9157 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9158 = (function() { 
var G__9164__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9164 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9164__delegate.call(this, x, y, more);
};
G__9164.cljs$lang$maxFixedArity = 2;
G__9164.cljs$lang$applyTo = (function (arglist__9165){
var x = cljs.core.first(arglist__9165);
var y = cljs.core.first(cljs.core.next(arglist__9165));
var more = cljs.core.rest(cljs.core.next(arglist__9165));
return G__9164__delegate.call(this, x, y, more);
});
return G__9164;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9156.call(this,x);
case  2 :
return max__9157.call(this,x,y);
default:
return max__9158.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9158.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9175 = (function (x){
return x;
});
var min__9176 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9177 = (function() { 
var G__9179__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9179 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9179__delegate.call(this, x, y, more);
};
G__9179.cljs$lang$maxFixedArity = 2;
G__9179.cljs$lang$applyTo = (function (arglist__9183){
var x = cljs.core.first(arglist__9183);
var y = cljs.core.first(cljs.core.next(arglist__9183));
var more = cljs.core.rest(cljs.core.next(arglist__9183));
return G__9179__delegate.call(this, x, y, more);
});
return G__9179;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9175.call(this,x);
case  2 :
return min__9176.call(this,x,y);
default:
return min__9177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9177.cljs$lang$applyTo;
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
var rem__9190 = (n % d);

return cljs.core.fix.call(null,((n - rem__9190) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9197 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9197));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9209 = (function (){
return Math.random.call(null);
});
var rand__9211 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9209.call(this);
case  1 :
return rand__9211.call(this,n);
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
var _EQ__EQ___9384 = (function (x){
return true;
});
var _EQ__EQ___9385 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9386 = (function() { 
var G__9389__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9390 = y;
var G__9391 = cljs.core.first.call(null,more);
var G__9392 = cljs.core.next.call(null,more);
x = G__9390;
y = G__9391;
more = G__9392;
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
var G__9389 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9389__delegate.call(this, x, y, more);
};
G__9389.cljs$lang$maxFixedArity = 2;
G__9389.cljs$lang$applyTo = (function (arglist__9393){
var x = cljs.core.first(arglist__9393);
var y = cljs.core.first(cljs.core.next(arglist__9393));
var more = cljs.core.rest(cljs.core.next(arglist__9393));
return G__9389__delegate.call(this, x, y, more);
});
return G__9389;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9384.call(this,x);
case  2 :
return _EQ__EQ___9385.call(this,x,y);
default:
return _EQ__EQ___9386.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9386.cljs$lang$applyTo;
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
var n__9414 = n;
var xs__9418 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9419 = xs__9418;

if(cljs.core.truth_(and__3546__auto____9419))
{return (n__9414 > 0);
} else
{return and__3546__auto____9419;
}
})()))
{{
var G__9421 = (n__9414 - 1);
var G__9422 = cljs.core.next.call(null,xs__9418);
n__9414 = G__9421;
xs__9418 = G__9422;
continue;
}
} else
{return xs__9418;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9482 = null;
var G__9482__9483 = (function (coll,n){
var temp__3695__auto____9437 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9437))
{var xs__9438 = temp__3695__auto____9437;

return cljs.core.first.call(null,xs__9438);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9482__9484 = (function (coll,n,not_found){
var temp__3695__auto____9480 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9480))
{var xs__9481 = temp__3695__auto____9480;

return cljs.core.first.call(null,xs__9481);
} else
{return not_found;
}
});
G__9482 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9482__9483.call(this,coll,n);
case  3 :
return G__9482__9484.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9482;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9486 = (function (){
return "";
});
var str_STAR___9487 = (function (x){
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
var str_STAR___9488 = (function() { 
var G__9490__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9491 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9492 = cljs.core.next.call(null,more);
sb = G__9491;
more = G__9492;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9490 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9490__delegate.call(this, x, ys);
};
G__9490.cljs$lang$maxFixedArity = 1;
G__9490.cljs$lang$applyTo = (function (arglist__9493){
var x = cljs.core.first(arglist__9493);
var ys = cljs.core.rest(arglist__9493);
return G__9490__delegate.call(this, x, ys);
});
return G__9490;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9486.call(this);
case  1 :
return str_STAR___9487.call(this,x);
default:
return str_STAR___9488.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9488.cljs$lang$applyTo;
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
var str__9531 = (function (){
return "";
});
var str__9532 = (function (x){
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
var str__9533 = (function() { 
var G__9535__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9535 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9535__delegate.call(this, x, ys);
};
G__9535.cljs$lang$maxFixedArity = 1;
G__9535.cljs$lang$applyTo = (function (arglist__9536){
var x = cljs.core.first(arglist__9536);
var ys = cljs.core.rest(arglist__9536);
return G__9535__delegate.call(this, x, ys);
});
return G__9535;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9531.call(this);
case  1 :
return str__9532.call(this,x);
default:
return str__9533.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9533.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9555 = (function (s,start){
return s.substring(start);
});
var subs__9556 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9555.call(this,s,start);
case  3 :
return subs__9556.call(this,s,start,end);
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
var symbol__9582 = (function (name){
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
var symbol__9583 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9582.call(this,ns);
case  2 :
return symbol__9583.call(this,ns,name);
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
var keyword__9705 = (function (name){
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
var keyword__9706 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9705.call(this,ns);
case  2 :
return keyword__9706.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9708 = cljs.core.seq.call(null,x);
var ys__9709 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9708)))
{return cljs.core.nil_QMARK_.call(null,ys__9709);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9709)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9708),cljs.core.first.call(null,ys__9709))))
{{
var G__9715 = cljs.core.next.call(null,xs__9708);
var G__9716 = cljs.core.next.call(null,ys__9709);
xs__9708 = G__9715;
ys__9709 = G__9716;
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
return cljs.core.reduce.call(null,(function (p1__9717_SHARP_,p2__9718_SHARP_){
return cljs.core.hash_combine.call(null,p1__9717_SHARP_,cljs.core.hash.call(null,p2__9718_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9727__9728 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9727__9728))
{var G__9730__9732 = cljs.core.first.call(null,G__9727__9728);
var vec__9731__9733 = G__9730__9732;
var key_name__9734 = cljs.core.nth.call(null,vec__9731__9733,0,null);
var f__9735 = cljs.core.nth.call(null,vec__9731__9733,1,null);
var G__9727__9736 = G__9727__9728;

var G__9730__9737 = G__9730__9732;
var G__9727__9738 = G__9727__9736;

while(true){
var vec__9739__9740 = G__9730__9737;
var key_name__9741 = cljs.core.nth.call(null,vec__9739__9740,0,null);
var f__9742 = cljs.core.nth.call(null,vec__9739__9740,1,null);
var G__9727__9743 = G__9727__9738;

var str_name__9744 = cljs.core.name.call(null,key_name__9741);

obj[str_name__9744] = f__9742;
var temp__3698__auto____9745 = cljs.core.next.call(null,G__9727__9743);

if(cljs.core.truth_(temp__3698__auto____9745))
{var G__9727__9746 = temp__3698__auto____9745;

{
var G__9747 = cljs.core.first.call(null,G__9727__9746);
var G__9749 = G__9727__9746;
G__9730__9737 = G__9747;
G__9727__9738 = G__9749;
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
var this__9804 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9805 = this;
return (new cljs.core.List(this__9805.meta,o,coll,(this__9805.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9806 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9807 = this;
return this__9807.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9808 = this;
return this__9808.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9812 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9813 = this;
return this__9813.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9814 = this;
return this__9814.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9815 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9816 = this;
return (new cljs.core.List(meta,this__9816.first,this__9816.rest,this__9816.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9817 = this;
return this__9817.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9818 = this;
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
var this__9824 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9825 = this;
return (new cljs.core.List(this__9825.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9829 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9830 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9832 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9833 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9834 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9835 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9836 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9837 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9838 = this;
return this__9838.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9839 = this;
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
list.cljs$lang$applyTo = (function (arglist__10008){
var items = cljs.core.seq( arglist__10008 );;
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
var this__10014 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10015 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10016 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10017 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10017.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10018 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10019 = this;
return this__10019.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10020 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10020.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10020.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10021 = this;
return this__10021.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10023 = this;
return (new cljs.core.Cons(meta,this__10023.first,this__10023.rest));
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
var G__10031 = null;
var G__10031__10032 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10031__10033 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10031 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10031__10032.call(this,string,f);
case  3 :
return G__10031__10033.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10031;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10035 = null;
var G__10035__10036 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10035__10037 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10035 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10035__10036.call(this,string,k);
case  3 :
return G__10035__10037.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10035;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10040 = null;
var G__10040__10041 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10040__10042 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10040 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10040__10041.call(this,string,n);
case  3 :
return G__10040__10042.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10040;
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
var G__10070 = null;
var G__10070__10071 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10070__10072 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10070 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10070__10071.call(this,this$,coll);
case  3 :
return G__10070__10072.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10070;
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
var x__10083 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10083;
} else
{lazy_seq.x = x__10083.call(null);
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
var this__10102 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10104 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10105 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10106 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10106.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10107 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10108 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10109 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10110 = this;
return this__10110.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10111 = this;
return (new cljs.core.LazySeq(meta,this__10111.realized,this__10111.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10128 = cljs.core.array.call(null);

var s__10129 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10129)))
{ary__10128.push(cljs.core.first.call(null,s__10129));
{
var G__10137 = cljs.core.next.call(null,s__10129);
s__10129 = G__10137;
continue;
}
} else
{return ary__10128;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10140 = s;
var i__10143 = n;
var sum__10144 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10145 = (i__10143 > 0);

if(cljs.core.truth_(and__3546__auto____10145))
{return cljs.core.seq.call(null,s__10140);
} else
{return and__3546__auto____10145;
}
})()))
{{
var G__10150 = cljs.core.next.call(null,s__10140);
var G__10151 = (i__10143 - 1);
var G__10152 = (sum__10144 + 1);
s__10140 = G__10150;
i__10143 = G__10151;
sum__10144 = G__10152;
continue;
}
} else
{return sum__10144;
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
var concat__10189 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10190 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10191 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10180 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10180))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10180),concat.call(null,cljs.core.rest.call(null,s__10180),y));
} else
{return y;
}
})));
});
var concat__10192 = (function() { 
var G__10198__delegate = function (x,y,zs){
var cat__10188 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10187 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10187))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10187),cat.call(null,cljs.core.rest.call(null,xys__10187),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10188.call(null,concat.call(null,x,y),zs);
};
var G__10198 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10198__delegate.call(this, x, y, zs);
};
G__10198.cljs$lang$maxFixedArity = 2;
G__10198.cljs$lang$applyTo = (function (arglist__10208){
var x = cljs.core.first(arglist__10208);
var y = cljs.core.first(cljs.core.next(arglist__10208));
var zs = cljs.core.rest(cljs.core.next(arglist__10208));
return G__10198__delegate.call(this, x, y, zs);
});
return G__10198;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10189.call(this);
case  1 :
return concat__10190.call(this,x);
case  2 :
return concat__10191.call(this,x,y);
default:
return concat__10192.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10192.cljs$lang$applyTo;
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
var list_STAR___10211 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10212 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10213 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10215 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10216 = (function() { 
var G__10221__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10221 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10221__delegate.call(this, a, b, c, d, more);
};
G__10221.cljs$lang$maxFixedArity = 4;
G__10221.cljs$lang$applyTo = (function (arglist__10224){
var a = cljs.core.first(arglist__10224);
var b = cljs.core.first(cljs.core.next(arglist__10224));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10224)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10224))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10224))));
return G__10221__delegate.call(this, a, b, c, d, more);
});
return G__10221;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10211.call(this,a);
case  2 :
return list_STAR___10212.call(this,a,b);
case  3 :
return list_STAR___10213.call(this,a,b,c);
case  4 :
return list_STAR___10215.call(this,a,b,c,d);
default:
return list_STAR___10216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10216.cljs$lang$applyTo;
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
var apply__10262 = (function (f,args){
var fixed_arity__10227 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10227 + 1)) <= fixed_arity__10227)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10263 = (function (f,x,args){
var arglist__10236 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10237 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10236,fixed_arity__10237) <= fixed_arity__10237)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10236));
} else
{return f.cljs$lang$applyTo(arglist__10236);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10236));
}
});
var apply__10264 = (function (f,x,y,args){
var arglist__10243 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10244 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10243,fixed_arity__10244) <= fixed_arity__10244)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10243));
} else
{return f.cljs$lang$applyTo(arglist__10243);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10243));
}
});
var apply__10265 = (function (f,x,y,z,args){
var arglist__10250 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10251 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10250,fixed_arity__10251) <= fixed_arity__10251)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10250));
} else
{return f.cljs$lang$applyTo(arglist__10250);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10250));
}
});
var apply__10266 = (function() { 
var G__10281__delegate = function (f,a,b,c,d,args){
var arglist__10256 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10258 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10256,fixed_arity__10258) <= fixed_arity__10258)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10256));
} else
{return f.cljs$lang$applyTo(arglist__10256);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10256));
}
};
var G__10281 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10281__delegate.call(this, f, a, b, c, d, args);
};
G__10281.cljs$lang$maxFixedArity = 5;
G__10281.cljs$lang$applyTo = (function (arglist__10289){
var f = cljs.core.first(arglist__10289);
var a = cljs.core.first(cljs.core.next(arglist__10289));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10289)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10289))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10289)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10289)))));
return G__10281__delegate.call(this, f, a, b, c, d, args);
});
return G__10281;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10262.call(this,f,a);
case  3 :
return apply__10263.call(this,f,a,b);
case  4 :
return apply__10264.call(this,f,a,b,c);
case  5 :
return apply__10265.call(this,f,a,b,c,d);
default:
return apply__10266.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10266.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10302){
var obj = cljs.core.first(arglist__10302);
var f = cljs.core.first(cljs.core.next(arglist__10302));
var args = cljs.core.rest(cljs.core.next(arglist__10302));
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
var not_EQ___10305 = (function (x){
return false;
});
var not_EQ___10306 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10307 = (function() { 
var G__10310__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10310 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10310__delegate.call(this, x, y, more);
};
G__10310.cljs$lang$maxFixedArity = 2;
G__10310.cljs$lang$applyTo = (function (arglist__10311){
var x = cljs.core.first(arglist__10311);
var y = cljs.core.first(cljs.core.next(arglist__10311));
var more = cljs.core.rest(cljs.core.next(arglist__10311));
return G__10310__delegate.call(this, x, y, more);
});
return G__10310;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10305.call(this,x);
case  2 :
return not_EQ___10306.call(this,x,y);
default:
return not_EQ___10307.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10307.cljs$lang$applyTo;
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
var G__10328 = pred;
var G__10329 = cljs.core.next.call(null,coll);
pred = G__10328;
coll = G__10329;
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
{var or__3548__auto____10341 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10341))
{return or__3548__auto____10341;
} else
{{
var G__10350 = pred;
var G__10351 = cljs.core.next.call(null,coll);
pred = G__10350;
coll = G__10351;
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
var G__10365 = null;
var G__10365__10368 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10365__10369 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10365__10370 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10365__10371 = (function() { 
var G__10379__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10379 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10379__delegate.call(this, x, y, zs);
};
G__10379.cljs$lang$maxFixedArity = 2;
G__10379.cljs$lang$applyTo = (function (arglist__10381){
var x = cljs.core.first(arglist__10381);
var y = cljs.core.first(cljs.core.next(arglist__10381));
var zs = cljs.core.rest(cljs.core.next(arglist__10381));
return G__10379__delegate.call(this, x, y, zs);
});
return G__10379;
})()
;
G__10365 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10365__10368.call(this);
case  1 :
return G__10365__10369.call(this,x);
case  2 :
return G__10365__10370.call(this,x,y);
default:
return G__10365__10371.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10365.cljs$lang$maxFixedArity = 2;
G__10365.cljs$lang$applyTo = G__10365__10371.cljs$lang$applyTo;
return G__10365;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10385__delegate = function (args){
return x;
};
var G__10385 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10385__delegate.call(this, args);
};
G__10385.cljs$lang$maxFixedArity = 0;
G__10385.cljs$lang$applyTo = (function (arglist__10389){
var args = cljs.core.seq( arglist__10389 );;
return G__10385__delegate.call(this, args);
});
return G__10385;
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
var comp__10405 = (function (){
return cljs.core.identity;
});
var comp__10406 = (function (f){
return f;
});
var comp__10407 = (function (f,g){
return (function() {
var G__10412 = null;
var G__10412__10413 = (function (){
return f.call(null,g.call(null));
});
var G__10412__10414 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10412__10415 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10412__10416 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10412__10417 = (function() { 
var G__10430__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10430 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10430__delegate.call(this, x, y, z, args);
};
G__10430.cljs$lang$maxFixedArity = 3;
G__10430.cljs$lang$applyTo = (function (arglist__10437){
var x = cljs.core.first(arglist__10437);
var y = cljs.core.first(cljs.core.next(arglist__10437));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10437)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10437)));
return G__10430__delegate.call(this, x, y, z, args);
});
return G__10430;
})()
;
G__10412 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10412__10413.call(this);
case  1 :
return G__10412__10414.call(this,x);
case  2 :
return G__10412__10415.call(this,x,y);
case  3 :
return G__10412__10416.call(this,x,y,z);
default:
return G__10412__10417.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10412.cljs$lang$maxFixedArity = 3;
G__10412.cljs$lang$applyTo = G__10412__10417.cljs$lang$applyTo;
return G__10412;
})()
});
var comp__10408 = (function (f,g,h){
return (function() {
var G__10440 = null;
var G__10440__10441 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10440__10442 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10440__10443 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10440__10444 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10440__10445 = (function() { 
var G__10449__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10449 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10449__delegate.call(this, x, y, z, args);
};
G__10449.cljs$lang$maxFixedArity = 3;
G__10449.cljs$lang$applyTo = (function (arglist__10450){
var x = cljs.core.first(arglist__10450);
var y = cljs.core.first(cljs.core.next(arglist__10450));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10450)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10450)));
return G__10449__delegate.call(this, x, y, z, args);
});
return G__10449;
})()
;
G__10440 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10440__10441.call(this);
case  1 :
return G__10440__10442.call(this,x);
case  2 :
return G__10440__10443.call(this,x,y);
case  3 :
return G__10440__10444.call(this,x,y,z);
default:
return G__10440__10445.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10440.cljs$lang$maxFixedArity = 3;
G__10440.cljs$lang$applyTo = G__10440__10445.cljs$lang$applyTo;
return G__10440;
})()
});
var comp__10409 = (function() { 
var G__10493__delegate = function (f1,f2,f3,fs){
var fs__10394 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10494__delegate = function (args){
var ret__10401 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10394),args);
var fs__10402 = cljs.core.next.call(null,fs__10394);

while(true){
if(cljs.core.truth_(fs__10402))
{{
var G__10495 = cljs.core.first.call(null,fs__10402).call(null,ret__10401);
var G__10496 = cljs.core.next.call(null,fs__10402);
ret__10401 = G__10495;
fs__10402 = G__10496;
continue;
}
} else
{return ret__10401;
}
break;
}
};
var G__10494 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10494__delegate.call(this, args);
};
G__10494.cljs$lang$maxFixedArity = 0;
G__10494.cljs$lang$applyTo = (function (arglist__10497){
var args = cljs.core.seq( arglist__10497 );;
return G__10494__delegate.call(this, args);
});
return G__10494;
})()
;
};
var G__10493 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10493__delegate.call(this, f1, f2, f3, fs);
};
G__10493.cljs$lang$maxFixedArity = 3;
G__10493.cljs$lang$applyTo = (function (arglist__10499){
var f1 = cljs.core.first(arglist__10499);
var f2 = cljs.core.first(cljs.core.next(arglist__10499));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10499)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10499)));
return G__10493__delegate.call(this, f1, f2, f3, fs);
});
return G__10493;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10405.call(this);
case  1 :
return comp__10406.call(this,f1);
case  2 :
return comp__10407.call(this,f1,f2);
case  3 :
return comp__10408.call(this,f1,f2,f3);
default:
return comp__10409.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10409.cljs$lang$applyTo;
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
var partial__10517 = (function (f,arg1){
return (function() { 
var G__10522__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10522 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10522__delegate.call(this, args);
};
G__10522.cljs$lang$maxFixedArity = 0;
G__10522.cljs$lang$applyTo = (function (arglist__10523){
var args = cljs.core.seq( arglist__10523 );;
return G__10522__delegate.call(this, args);
});
return G__10522;
})()
;
});
var partial__10518 = (function (f,arg1,arg2){
return (function() { 
var G__10529__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10529 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10529__delegate.call(this, args);
};
G__10529.cljs$lang$maxFixedArity = 0;
G__10529.cljs$lang$applyTo = (function (arglist__10538){
var args = cljs.core.seq( arglist__10538 );;
return G__10529__delegate.call(this, args);
});
return G__10529;
})()
;
});
var partial__10519 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10539__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10539 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10539__delegate.call(this, args);
};
G__10539.cljs$lang$maxFixedArity = 0;
G__10539.cljs$lang$applyTo = (function (arglist__10717){
var args = cljs.core.seq( arglist__10717 );;
return G__10539__delegate.call(this, args);
});
return G__10539;
})()
;
});
var partial__10520 = (function() { 
var G__10718__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10719__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10719 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10719__delegate.call(this, args);
};
G__10719.cljs$lang$maxFixedArity = 0;
G__10719.cljs$lang$applyTo = (function (arglist__10721){
var args = cljs.core.seq( arglist__10721 );;
return G__10719__delegate.call(this, args);
});
return G__10719;
})()
;
};
var G__10718 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10718__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10718.cljs$lang$maxFixedArity = 4;
G__10718.cljs$lang$applyTo = (function (arglist__10727){
var f = cljs.core.first(arglist__10727);
var arg1 = cljs.core.first(cljs.core.next(arglist__10727));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10727)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10727))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10727))));
return G__10718__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10718;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10517.call(this,f,arg1);
case  3 :
return partial__10518.call(this,f,arg1,arg2);
case  4 :
return partial__10519.call(this,f,arg1,arg2,arg3);
default:
return partial__10520.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10520.cljs$lang$applyTo;
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
var fnil__10744 = (function (f,x){
return (function() {
var G__10749 = null;
var G__10749__10750 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10749__10751 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10749__10752 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10749__10753 = (function() { 
var G__10760__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10760 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10760__delegate.call(this, a, b, c, ds);
};
G__10760.cljs$lang$maxFixedArity = 3;
G__10760.cljs$lang$applyTo = (function (arglist__10762){
var a = cljs.core.first(arglist__10762);
var b = cljs.core.first(cljs.core.next(arglist__10762));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10762)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10762)));
return G__10760__delegate.call(this, a, b, c, ds);
});
return G__10760;
})()
;
G__10749 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10749__10750.call(this,a);
case  2 :
return G__10749__10751.call(this,a,b);
case  3 :
return G__10749__10752.call(this,a,b,c);
default:
return G__10749__10753.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10749.cljs$lang$maxFixedArity = 3;
G__10749.cljs$lang$applyTo = G__10749__10753.cljs$lang$applyTo;
return G__10749;
})()
});
var fnil__10745 = (function (f,x,y){
return (function() {
var G__10763 = null;
var G__10763__10764 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10763__10765 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10763__10766 = (function() { 
var G__10768__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10768 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10768__delegate.call(this, a, b, c, ds);
};
G__10768.cljs$lang$maxFixedArity = 3;
G__10768.cljs$lang$applyTo = (function (arglist__10770){
var a = cljs.core.first(arglist__10770);
var b = cljs.core.first(cljs.core.next(arglist__10770));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10770)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10770)));
return G__10768__delegate.call(this, a, b, c, ds);
});
return G__10768;
})()
;
G__10763 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10763__10764.call(this,a,b);
case  3 :
return G__10763__10765.call(this,a,b,c);
default:
return G__10763__10766.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10763.cljs$lang$maxFixedArity = 3;
G__10763.cljs$lang$applyTo = G__10763__10766.cljs$lang$applyTo;
return G__10763;
})()
});
var fnil__10746 = (function (f,x,y,z){
return (function() {
var G__10775 = null;
var G__10775__10776 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10775__10778 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10775__10779 = (function() { 
var G__10792__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10792 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10792__delegate.call(this, a, b, c, ds);
};
G__10792.cljs$lang$maxFixedArity = 3;
G__10792.cljs$lang$applyTo = (function (arglist__10796){
var a = cljs.core.first(arglist__10796);
var b = cljs.core.first(cljs.core.next(arglist__10796));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10796)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10796)));
return G__10792__delegate.call(this, a, b, c, ds);
});
return G__10792;
})()
;
G__10775 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10775__10776.call(this,a,b);
case  3 :
return G__10775__10778.call(this,a,b,c);
default:
return G__10775__10779.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10775.cljs$lang$maxFixedArity = 3;
G__10775.cljs$lang$applyTo = G__10775__10779.cljs$lang$applyTo;
return G__10775;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10744.call(this,f,x);
case  3 :
return fnil__10745.call(this,f,x,y);
case  4 :
return fnil__10746.call(this,f,x,y,z);
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
var mapi__10821 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10816 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10816))
{var s__10818 = temp__3698__auto____10816;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10818)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10818)));
} else
{return null;
}
})));
});

return mapi__10821.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10836 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10836))
{var s__10838 = temp__3698__auto____10836;

var x__10841 = f.call(null,cljs.core.first.call(null,s__10838));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10841)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10838));
} else
{return cljs.core.cons.call(null,x__10841,keep.call(null,f,cljs.core.rest.call(null,s__10838)));
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
var keepi__10915 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10908 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10908))
{var s__10909 = temp__3698__auto____10908;

var x__10911 = f.call(null,idx,cljs.core.first.call(null,s__10909));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10911)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10909));
} else
{return cljs.core.cons.call(null,x__10911,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10909)));
}
} else
{return null;
}
})));
});

return keepi__10915.call(null,0,coll);
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
var every_pred__11195 = (function (p){
return (function() {
var ep1 = null;
var ep1__11201 = (function (){
return true;
});
var ep1__11202 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11203 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10987 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10987))
{return p.call(null,y);
} else
{return and__3546__auto____10987;
}
})());
});
var ep1__11204 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10991 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10991))
{var and__3546__auto____10993 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10993))
{return p.call(null,z);
} else
{return and__3546__auto____10993;
}
} else
{return and__3546__auto____10991;
}
})());
});
var ep1__11205 = (function() { 
var G__11209__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10997 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10997))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10997;
}
})());
};
var G__11209 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11209__delegate.call(this, x, y, z, args);
};
G__11209.cljs$lang$maxFixedArity = 3;
G__11209.cljs$lang$applyTo = (function (arglist__11212){
var x = cljs.core.first(arglist__11212);
var y = cljs.core.first(cljs.core.next(arglist__11212));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11212)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11212)));
return G__11209__delegate.call(this, x, y, z, args);
});
return G__11209;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11201.call(this);
case  1 :
return ep1__11202.call(this,x);
case  2 :
return ep1__11203.call(this,x,y);
case  3 :
return ep1__11204.call(this,x,y,z);
default:
return ep1__11205.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11205.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11196 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11219 = (function (){
return true;
});
var ep2__11220 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11000 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11000))
{return p2.call(null,x);
} else
{return and__3546__auto____11000;
}
})());
});
var ep2__11221 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11009 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11009))
{var and__3546__auto____11011 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11011))
{var and__3546__auto____11013 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11013))
{return p2.call(null,y);
} else
{return and__3546__auto____11013;
}
} else
{return and__3546__auto____11011;
}
} else
{return and__3546__auto____11009;
}
})());
});
var ep2__11222 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11017 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11017))
{var and__3546__auto____11018 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11018))
{var and__3546__auto____11020 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11020))
{var and__3546__auto____11025 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11025))
{var and__3546__auto____11028 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11028))
{return p2.call(null,z);
} else
{return and__3546__auto____11028;
}
} else
{return and__3546__auto____11025;
}
} else
{return and__3546__auto____11020;
}
} else
{return and__3546__auto____11018;
}
} else
{return and__3546__auto____11017;
}
})());
});
var ep2__11223 = (function() { 
var G__11242__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11035 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11035))
{return cljs.core.every_QMARK_.call(null,(function (p1__10893_SHARP_){
var and__3546__auto____11037 = p1.call(null,p1__10893_SHARP_);

if(cljs.core.truth_(and__3546__auto____11037))
{return p2.call(null,p1__10893_SHARP_);
} else
{return and__3546__auto____11037;
}
}),args);
} else
{return and__3546__auto____11035;
}
})());
};
var G__11242 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11242__delegate.call(this, x, y, z, args);
};
G__11242.cljs$lang$maxFixedArity = 3;
G__11242.cljs$lang$applyTo = (function (arglist__11248){
var x = cljs.core.first(arglist__11248);
var y = cljs.core.first(cljs.core.next(arglist__11248));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11248)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11248)));
return G__11242__delegate.call(this, x, y, z, args);
});
return G__11242;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11219.call(this);
case  1 :
return ep2__11220.call(this,x);
case  2 :
return ep2__11221.call(this,x,y);
case  3 :
return ep2__11222.call(this,x,y,z);
default:
return ep2__11223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11223.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11198 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11256 = (function (){
return true;
});
var ep3__11258 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11042 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11042))
{var and__3546__auto____11043 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11043))
{return p3.call(null,x);
} else
{return and__3546__auto____11043;
}
} else
{return and__3546__auto____11042;
}
})());
});
var ep3__11259 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11051 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11051))
{var and__3546__auto____11052 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11052))
{var and__3546__auto____11055 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11055))
{var and__3546__auto____11058 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11058))
{var and__3546__auto____11065 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11065))
{return p3.call(null,y);
} else
{return and__3546__auto____11065;
}
} else
{return and__3546__auto____11058;
}
} else
{return and__3546__auto____11055;
}
} else
{return and__3546__auto____11052;
}
} else
{return and__3546__auto____11051;
}
})());
});
var ep3__11260 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11069 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11069))
{var and__3546__auto____11074 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11074))
{var and__3546__auto____11126 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11126))
{var and__3546__auto____11127 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11127))
{var and__3546__auto____11131 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11131))
{var and__3546__auto____11136 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11136))
{var and__3546__auto____11140 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11140))
{var and__3546__auto____11142 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11142))
{return p3.call(null,z);
} else
{return and__3546__auto____11142;
}
} else
{return and__3546__auto____11140;
}
} else
{return and__3546__auto____11136;
}
} else
{return and__3546__auto____11131;
}
} else
{return and__3546__auto____11127;
}
} else
{return and__3546__auto____11126;
}
} else
{return and__3546__auto____11074;
}
} else
{return and__3546__auto____11069;
}
})());
});
var ep3__11261 = (function() { 
var G__11355__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11146 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11146))
{return cljs.core.every_QMARK_.call(null,(function (p1__10897_SHARP_){
var and__3546__auto____11149 = p1.call(null,p1__10897_SHARP_);

if(cljs.core.truth_(and__3546__auto____11149))
{var and__3546__auto____11151 = p2.call(null,p1__10897_SHARP_);

if(cljs.core.truth_(and__3546__auto____11151))
{return p3.call(null,p1__10897_SHARP_);
} else
{return and__3546__auto____11151;
}
} else
{return and__3546__auto____11149;
}
}),args);
} else
{return and__3546__auto____11146;
}
})());
};
var G__11355 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11355__delegate.call(this, x, y, z, args);
};
G__11355.cljs$lang$maxFixedArity = 3;
G__11355.cljs$lang$applyTo = (function (arglist__11358){
var x = cljs.core.first(arglist__11358);
var y = cljs.core.first(cljs.core.next(arglist__11358));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11358)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11358)));
return G__11355__delegate.call(this, x, y, z, args);
});
return G__11355;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11256.call(this);
case  1 :
return ep3__11258.call(this,x);
case  2 :
return ep3__11259.call(this,x,y);
case  3 :
return ep3__11260.call(this,x,y,z);
default:
return ep3__11261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11261.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11199 = (function() { 
var G__11360__delegate = function (p1,p2,p3,ps){
var ps__11154 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11367 = (function (){
return true;
});
var epn__11368 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10899_SHARP_){
return p1__10899_SHARP_.call(null,x);
}),ps__11154);
});
var epn__11369 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10900_SHARP_){
var and__3546__auto____11170 = p1__10900_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11170))
{return p1__10900_SHARP_.call(null,y);
} else
{return and__3546__auto____11170;
}
}),ps__11154);
});
var epn__11370 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10901_SHARP_){
var and__3546__auto____11173 = p1__10901_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11173))
{var and__3546__auto____11174 = p1__10901_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11174))
{return p1__10901_SHARP_.call(null,z);
} else
{return and__3546__auto____11174;
}
} else
{return and__3546__auto____11173;
}
}),ps__11154);
});
var epn__11371 = (function() { 
var G__11373__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11190 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11190))
{return cljs.core.every_QMARK_.call(null,(function (p1__10903_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10903_SHARP_,args);
}),ps__11154);
} else
{return and__3546__auto____11190;
}
})());
};
var G__11373 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11373__delegate.call(this, x, y, z, args);
};
G__11373.cljs$lang$maxFixedArity = 3;
G__11373.cljs$lang$applyTo = (function (arglist__11375){
var x = cljs.core.first(arglist__11375);
var y = cljs.core.first(cljs.core.next(arglist__11375));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11375)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11375)));
return G__11373__delegate.call(this, x, y, z, args);
});
return G__11373;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11367.call(this);
case  1 :
return epn__11368.call(this,x);
case  2 :
return epn__11369.call(this,x,y);
case  3 :
return epn__11370.call(this,x,y,z);
default:
return epn__11371.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11371.cljs$lang$applyTo;
return epn;
})()
};
var G__11360 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11360__delegate.call(this, p1, p2, p3, ps);
};
G__11360.cljs$lang$maxFixedArity = 3;
G__11360.cljs$lang$applyTo = (function (arglist__11379){
var p1 = cljs.core.first(arglist__11379);
var p2 = cljs.core.first(cljs.core.next(arglist__11379));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11379)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11379)));
return G__11360__delegate.call(this, p1, p2, p3, ps);
});
return G__11360;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11195.call(this,p1);
case  2 :
return every_pred__11196.call(this,p1,p2);
case  3 :
return every_pred__11198.call(this,p1,p2,p3);
default:
return every_pred__11199.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11199.cljs$lang$applyTo;
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
var some_fn__11605 = (function (p){
return (function() {
var sp1 = null;
var sp1__11617 = (function (){
return null;
});
var sp1__11619 = (function (x){
return p.call(null,x);
});
var sp1__11621 = (function (x,y){
var or__3548__auto____11425 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11425))
{return or__3548__auto____11425;
} else
{return p.call(null,y);
}
});
var sp1__11622 = (function (x,y,z){
var or__3548__auto____11428 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11428))
{return or__3548__auto____11428;
} else
{var or__3548__auto____11429 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11429))
{return or__3548__auto____11429;
} else
{return p.call(null,z);
}
}
});
var sp1__11624 = (function() { 
var G__11633__delegate = function (x,y,z,args){
var or__3548__auto____11431 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11431))
{return or__3548__auto____11431;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11633 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11633__delegate.call(this, x, y, z, args);
};
G__11633.cljs$lang$maxFixedArity = 3;
G__11633.cljs$lang$applyTo = (function (arglist__11641){
var x = cljs.core.first(arglist__11641);
var y = cljs.core.first(cljs.core.next(arglist__11641));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11641)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11641)));
return G__11633__delegate.call(this, x, y, z, args);
});
return G__11633;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11617.call(this);
case  1 :
return sp1__11619.call(this,x);
case  2 :
return sp1__11621.call(this,x,y);
case  3 :
return sp1__11622.call(this,x,y,z);
default:
return sp1__11624.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11624.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11608 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11643 = (function (){
return null;
});
var sp2__11645 = (function (x){
var or__3548__auto____11440 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11440))
{return or__3548__auto____11440;
} else
{return p2.call(null,x);
}
});
var sp2__11647 = (function (x,y){
var or__3548__auto____11445 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11445))
{return or__3548__auto____11445;
} else
{var or__3548__auto____11448 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11448))
{return or__3548__auto____11448;
} else
{var or__3548__auto____11453 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11453))
{return or__3548__auto____11453;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11649 = (function (x,y,z){
var or__3548__auto____11461 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11461))
{return or__3548__auto____11461;
} else
{var or__3548__auto____11463 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11463))
{return or__3548__auto____11463;
} else
{var or__3548__auto____11465 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11465))
{return or__3548__auto____11465;
} else
{var or__3548__auto____11466 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11466))
{return or__3548__auto____11466;
} else
{var or__3548__auto____11467 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11467))
{return or__3548__auto____11467;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11660 = (function() { 
var G__11664__delegate = function (x,y,z,args){
var or__3548__auto____11476 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11476))
{return or__3548__auto____11476;
} else
{return cljs.core.some.call(null,(function (p1__10976_SHARP_){
var or__3548__auto____11478 = p1.call(null,p1__10976_SHARP_);

if(cljs.core.truth_(or__3548__auto____11478))
{return or__3548__auto____11478;
} else
{return p2.call(null,p1__10976_SHARP_);
}
}),args);
}
};
var G__11664 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11664__delegate.call(this, x, y, z, args);
};
G__11664.cljs$lang$maxFixedArity = 3;
G__11664.cljs$lang$applyTo = (function (arglist__11667){
var x = cljs.core.first(arglist__11667);
var y = cljs.core.first(cljs.core.next(arglist__11667));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11667)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11667)));
return G__11664__delegate.call(this, x, y, z, args);
});
return G__11664;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11643.call(this);
case  1 :
return sp2__11645.call(this,x);
case  2 :
return sp2__11647.call(this,x,y);
case  3 :
return sp2__11649.call(this,x,y,z);
default:
return sp2__11660.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11660.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11610 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11670 = (function (){
return null;
});
var sp3__11671 = (function (x){
var or__3548__auto____11482 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11482))
{return or__3548__auto____11482;
} else
{var or__3548__auto____11488 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11488))
{return or__3548__auto____11488;
} else
{return p3.call(null,x);
}
}
});
var sp3__11672 = (function (x,y){
var or__3548__auto____11490 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11490))
{return or__3548__auto____11490;
} else
{var or__3548__auto____11493 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11493))
{return or__3548__auto____11493;
} else
{var or__3548__auto____11494 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11494))
{return or__3548__auto____11494;
} else
{var or__3548__auto____11495 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11495))
{return or__3548__auto____11495;
} else
{var or__3548__auto____11497 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11497))
{return or__3548__auto____11497;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11673 = (function (x,y,z){
var or__3548__auto____11501 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11501))
{return or__3548__auto____11501;
} else
{var or__3548__auto____11503 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11503))
{return or__3548__auto____11503;
} else
{var or__3548__auto____11510 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11510))
{return or__3548__auto____11510;
} else
{var or__3548__auto____11513 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11513))
{return or__3548__auto____11513;
} else
{var or__3548__auto____11515 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11515))
{return or__3548__auto____11515;
} else
{var or__3548__auto____11517 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11517))
{return or__3548__auto____11517;
} else
{var or__3548__auto____11519 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11519))
{return or__3548__auto____11519;
} else
{var or__3548__auto____11522 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11522))
{return or__3548__auto____11522;
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
var sp3__11674 = (function() { 
var G__11686__delegate = function (x,y,z,args){
var or__3548__auto____11524 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11524))
{return or__3548__auto____11524;
} else
{return cljs.core.some.call(null,(function (p1__10980_SHARP_){
var or__3548__auto____11532 = p1.call(null,p1__10980_SHARP_);

if(cljs.core.truth_(or__3548__auto____11532))
{return or__3548__auto____11532;
} else
{var or__3548__auto____11533 = p2.call(null,p1__10980_SHARP_);

if(cljs.core.truth_(or__3548__auto____11533))
{return or__3548__auto____11533;
} else
{return p3.call(null,p1__10980_SHARP_);
}
}
}),args);
}
};
var G__11686 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11686__delegate.call(this, x, y, z, args);
};
G__11686.cljs$lang$maxFixedArity = 3;
G__11686.cljs$lang$applyTo = (function (arglist__11691){
var x = cljs.core.first(arglist__11691);
var y = cljs.core.first(cljs.core.next(arglist__11691));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11691)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11691)));
return G__11686__delegate.call(this, x, y, z, args);
});
return G__11686;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11670.call(this);
case  1 :
return sp3__11671.call(this,x);
case  2 :
return sp3__11672.call(this,x,y);
case  3 :
return sp3__11673.call(this,x,y,z);
default:
return sp3__11674.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11674.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11612 = (function() { 
var G__11695__delegate = function (p1,p2,p3,ps){
var ps__11535 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11696 = (function (){
return null;
});
var spn__11697 = (function (x){
return cljs.core.some.call(null,(function (p1__10981_SHARP_){
return p1__10981_SHARP_.call(null,x);
}),ps__11535);
});
var spn__11698 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10982_SHARP_){
var or__3548__auto____11540 = p1__10982_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11540))
{return or__3548__auto____11540;
} else
{return p1__10982_SHARP_.call(null,y);
}
}),ps__11535);
});
var spn__11699 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10983_SHARP_){
var or__3548__auto____11544 = p1__10983_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11544))
{return or__3548__auto____11544;
} else
{var or__3548__auto____11546 = p1__10983_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11546))
{return or__3548__auto____11546;
} else
{return p1__10983_SHARP_.call(null,z);
}
}
}),ps__11535);
});
var spn__11701 = (function() { 
var G__11710__delegate = function (x,y,z,args){
var or__3548__auto____11553 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11553))
{return or__3548__auto____11553;
} else
{return cljs.core.some.call(null,(function (p1__10985_SHARP_){
return cljs.core.some.call(null,p1__10985_SHARP_,args);
}),ps__11535);
}
};
var G__11710 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11710__delegate.call(this, x, y, z, args);
};
G__11710.cljs$lang$maxFixedArity = 3;
G__11710.cljs$lang$applyTo = (function (arglist__11713){
var x = cljs.core.first(arglist__11713);
var y = cljs.core.first(cljs.core.next(arglist__11713));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11713)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11713)));
return G__11710__delegate.call(this, x, y, z, args);
});
return G__11710;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11696.call(this);
case  1 :
return spn__11697.call(this,x);
case  2 :
return spn__11698.call(this,x,y);
case  3 :
return spn__11699.call(this,x,y,z);
default:
return spn__11701.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11701.cljs$lang$applyTo;
return spn;
})()
};
var G__11695 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11695__delegate.call(this, p1, p2, p3, ps);
};
G__11695.cljs$lang$maxFixedArity = 3;
G__11695.cljs$lang$applyTo = (function (arglist__11715){
var p1 = cljs.core.first(arglist__11715);
var p2 = cljs.core.first(cljs.core.next(arglist__11715));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11715)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11715)));
return G__11695__delegate.call(this, p1, p2, p3, ps);
});
return G__11695;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11605.call(this,p1);
case  2 :
return some_fn__11608.call(this,p1,p2);
case  3 :
return some_fn__11610.call(this,p1,p2,p3);
default:
return some_fn__11612.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11612.cljs$lang$applyTo;
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
var map__11754 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11720 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11720))
{var s__11721 = temp__3698__auto____11720;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11721)),map.call(null,f,cljs.core.rest.call(null,s__11721)));
} else
{return null;
}
})));
});
var map__11755 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11723 = cljs.core.seq.call(null,c1);
var s2__11724 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11736 = s1__11723;

if(cljs.core.truth_(and__3546__auto____11736))
{return s2__11724;
} else
{return and__3546__auto____11736;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11723),cljs.core.first.call(null,s2__11724)),map.call(null,f,cljs.core.rest.call(null,s1__11723),cljs.core.rest.call(null,s2__11724)));
} else
{return null;
}
})));
});
var map__11756 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11738 = cljs.core.seq.call(null,c1);
var s2__11739 = cljs.core.seq.call(null,c2);
var s3__11741 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11742 = s1__11738;

if(cljs.core.truth_(and__3546__auto____11742))
{var and__3546__auto____11743 = s2__11739;

if(cljs.core.truth_(and__3546__auto____11743))
{return s3__11741;
} else
{return and__3546__auto____11743;
}
} else
{return and__3546__auto____11742;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11738),cljs.core.first.call(null,s2__11739),cljs.core.first.call(null,s3__11741)),map.call(null,f,cljs.core.rest.call(null,s1__11738),cljs.core.rest.call(null,s2__11739),cljs.core.rest.call(null,s3__11741)));
} else
{return null;
}
})));
});
var map__11757 = (function() { 
var G__11789__delegate = function (f,c1,c2,c3,colls){
var step__11752 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11750 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11750)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11750),step.call(null,map.call(null,cljs.core.rest,ss__11750)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11413_SHARP_){
return cljs.core.apply.call(null,f,p1__11413_SHARP_);
}),step__11752.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11789 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11789__delegate.call(this, f, c1, c2, c3, colls);
};
G__11789.cljs$lang$maxFixedArity = 4;
G__11789.cljs$lang$applyTo = (function (arglist__11791){
var f = cljs.core.first(arglist__11791);
var c1 = cljs.core.first(cljs.core.next(arglist__11791));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11791)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11791))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11791))));
return G__11789__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11789;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11754.call(this,f,c1);
case  3 :
return map__11755.call(this,f,c1,c2);
case  4 :
return map__11756.call(this,f,c1,c2,c3);
default:
return map__11757.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11757.cljs$lang$applyTo;
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
{var temp__3698__auto____11814 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11814))
{var s__11871 = temp__3698__auto____11814;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11871),take.call(null,(n - 1),cljs.core.rest.call(null,s__11871)));
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
var step__11882 = (function (n,coll){
while(true){
var s__11880 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11881 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11881))
{return s__11880;
} else
{return and__3546__auto____11881;
}
})()))
{{
var G__11885 = (n - 1);
var G__11886 = cljs.core.rest.call(null,s__11880);
n = G__11885;
coll = G__11886;
continue;
}
} else
{return s__11880;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11882.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11893 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11894 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11893.call(this,n);
case  2 :
return drop_last__11894.call(this,n,s);
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
var s__11901 = cljs.core.seq.call(null,coll);
var lead__11902 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11902))
{{
var G__11903 = cljs.core.next.call(null,s__11901);
var G__11904 = cljs.core.next.call(null,lead__11902);
s__11901 = G__11903;
lead__11902 = G__11904;
continue;
}
} else
{return s__11901;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11911 = (function (pred,coll){
while(true){
var s__11908 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11909 = s__11908;

if(cljs.core.truth_(and__3546__auto____11909))
{return pred.call(null,cljs.core.first.call(null,s__11908));
} else
{return and__3546__auto____11909;
}
})()))
{{
var G__11913 = pred;
var G__11914 = cljs.core.rest.call(null,s__11908);
pred = G__11913;
coll = G__11914;
continue;
}
} else
{return s__11908;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11911.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11917 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11917))
{var s__11918 = temp__3698__auto____11917;

return cljs.core.concat.call(null,s__11918,cycle.call(null,s__11918));
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
var repeatedly__11932 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11933 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11932.call(this,n);
case  2 :
return repeatedly__11933.call(this,n,f);
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
var interleave__11951 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11943 = cljs.core.seq.call(null,c1);
var s2__11944 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11945 = s1__11943;

if(cljs.core.truth_(and__3546__auto____11945))
{return s2__11944;
} else
{return and__3546__auto____11945;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11943),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11944),interleave.call(null,cljs.core.rest.call(null,s1__11943),cljs.core.rest.call(null,s2__11944))));
} else
{return null;
}
})));
});
var interleave__11952 = (function() { 
var G__11957__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11948 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11948)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11948),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11948)));
} else
{return null;
}
})));
};
var G__11957 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11957__delegate.call(this, c1, c2, colls);
};
G__11957.cljs$lang$maxFixedArity = 2;
G__11957.cljs$lang$applyTo = (function (arglist__11967){
var c1 = cljs.core.first(arglist__11967);
var c2 = cljs.core.first(cljs.core.next(arglist__11967));
var colls = cljs.core.rest(cljs.core.next(arglist__11967));
return G__11957__delegate.call(this, c1, c2, colls);
});
return G__11957;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11951.call(this,c1,c2);
default:
return interleave__11952.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11952.cljs$lang$applyTo;
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
var cat__11973 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11969 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11969))
{var coll__11971 = temp__3695__auto____11969;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11971),cat.call(null,cljs.core.rest.call(null,coll__11971),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11973.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11977 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11979 = (function() { 
var G__11984__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11984 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11984__delegate.call(this, f, coll, colls);
};
G__11984.cljs$lang$maxFixedArity = 2;
G__11984.cljs$lang$applyTo = (function (arglist__11987){
var f = cljs.core.first(arglist__11987);
var coll = cljs.core.first(cljs.core.next(arglist__11987));
var colls = cljs.core.rest(cljs.core.next(arglist__11987));
return G__11984__delegate.call(this, f, coll, colls);
});
return G__11984;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11977.call(this,f,coll);
default:
return mapcat__11979.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11979.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11988 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11988))
{var s__11989 = temp__3698__auto____11988;

var f__11990 = cljs.core.first.call(null,s__11989);
var r__11991 = cljs.core.rest.call(null,s__11989);

if(cljs.core.truth_(pred.call(null,f__11990)))
{return cljs.core.cons.call(null,f__11990,filter.call(null,pred,r__11991));
} else
{return filter.call(null,pred,r__11991);
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
var walk__11993 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11993.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11992_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11992_SHARP_));
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
var partition__12020 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12021 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12007 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12007))
{var s__12010 = temp__3698__auto____12007;

var p__12012 = cljs.core.take.call(null,n,s__12010);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12012))))
{return cljs.core.cons.call(null,p__12012,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12010)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12022 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12016 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12016))
{var s__12018 = temp__3698__auto____12016;

var p__12019 = cljs.core.take.call(null,n,s__12018);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12019))))
{return cljs.core.cons.call(null,p__12019,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12018)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12019,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12020.call(this,n,step);
case  3 :
return partition__12021.call(this,n,step,pad);
case  4 :
return partition__12022.call(this,n,step,pad,coll);
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
var get_in__12039 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12040 = (function (m,ks,not_found){
var sentinel__12034 = cljs.core.lookup_sentinel;
var m__12035 = m;
var ks__12036 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12036))
{var m__12037 = cljs.core.get.call(null,m__12035,cljs.core.first.call(null,ks__12036),sentinel__12034);

if(cljs.core.truth_((sentinel__12034 === m__12037)))
{return not_found;
} else
{{
var G__12043 = sentinel__12034;
var G__12044 = m__12037;
var G__12045 = cljs.core.next.call(null,ks__12036);
sentinel__12034 = G__12043;
m__12035 = G__12044;
ks__12036 = G__12045;
continue;
}
}
} else
{return m__12035;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12039.call(this,m,ks);
case  3 :
return get_in__12040.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12046,v){
var vec__12048__12049 = p__12046;
var k__12050 = cljs.core.nth.call(null,vec__12048__12049,0,null);
var ks__12051 = cljs.core.nthnext.call(null,vec__12048__12049,1);

if(cljs.core.truth_(ks__12051))
{return cljs.core.assoc.call(null,m,k__12050,assoc_in.call(null,cljs.core.get.call(null,m,k__12050),ks__12051,v));
} else
{return cljs.core.assoc.call(null,m,k__12050,v);
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
var update_in__delegate = function (m,p__12120,f,args){
var vec__12123__12124 = p__12120;
var k__12125 = cljs.core.nth.call(null,vec__12123__12124,0,null);
var ks__12127 = cljs.core.nthnext.call(null,vec__12123__12124,1);

if(cljs.core.truth_(ks__12127))
{return cljs.core.assoc.call(null,m,k__12125,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12125),ks__12127,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12125,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12125),args));
}
};
var update_in = function (m,p__12120,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12120, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12132){
var m = cljs.core.first(arglist__12132);
var p__12120 = cljs.core.first(cljs.core.next(arglist__12132));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12132)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12132)));
return update_in__delegate.call(this, m, p__12120, f, args);
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
var this__12145 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12224 = null;
var G__12224__12225 = (function (coll,k){
var this__12146 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12224__12226 = (function (coll,k,not_found){
var this__12147 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12224 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12224__12225.call(this,coll,k);
case  3 :
return G__12224__12226.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12224;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12148 = this;
var new_array__12149 = cljs.core.aclone.call(null,this__12148.array);

(new_array__12149[k] = v);
return (new cljs.core.Vector(this__12148.meta,new_array__12149));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12231 = null;
var G__12231__12232 = (function (coll,k){
var this__12150 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12231__12233 = (function (coll,k,not_found){
var this__12167 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12231 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12231__12232.call(this,coll,k);
case  3 :
return G__12231__12233.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12231;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12170 = this;
var new_array__12175 = cljs.core.aclone.call(null,this__12170.array);

new_array__12175.push(o);
return (new cljs.core.Vector(this__12170.meta,new_array__12175));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12239 = null;
var G__12239__12240 = (function (v,f){
var this__12177 = this;
return cljs.core.ci_reduce.call(null,this__12177.array,f);
});
var G__12239__12241 = (function (v,f,start){
var this__12178 = this;
return cljs.core.ci_reduce.call(null,this__12178.array,f,start);
});
G__12239 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12239__12240.call(this,v,f);
case  3 :
return G__12239__12241.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12239;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12180 = this;
if(cljs.core.truth_((this__12180.array.length > 0)))
{var vector_seq__12181 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12180.array.length)))
{return cljs.core.cons.call(null,(this__12180.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12181.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12185 = this;
return this__12185.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12187 = this;
var count__12189 = this__12187.array.length;

if(cljs.core.truth_((count__12189 > 0)))
{return (this__12187.array[(count__12189 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12190 = this;
if(cljs.core.truth_((this__12190.array.length > 0)))
{var new_array__12191 = cljs.core.aclone.call(null,this__12190.array);

new_array__12191.pop();
return (new cljs.core.Vector(this__12190.meta,new_array__12191));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12195 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12200 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12203 = this;
return (new cljs.core.Vector(meta,this__12203.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12204 = this;
return this__12204.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12335 = null;
var G__12335__12336 = (function (coll,n){
var this__12206 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12210 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12210))
{return (n < this__12206.array.length);
} else
{return and__3546__auto____12210;
}
})()))
{return (this__12206.array[n]);
} else
{return null;
}
});
var G__12335__12337 = (function (coll,n,not_found){
var this__12212 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12214 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12214))
{return (n < this__12212.array.length);
} else
{return and__3546__auto____12214;
}
})()))
{return (this__12212.array[n]);
} else
{return not_found;
}
});
G__12335 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12335__12336.call(this,coll,n);
case  3 :
return G__12335__12337.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12335;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12216 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12216.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12400){
var args = cljs.core.seq( arglist__12400 );;
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
var this__12408 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12474 = null;
var G__12474__12475 = (function (coll,k){
var this__12410 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12474__12476 = (function (coll,k,not_found){
var this__12411 = this;
return cljs.core._nth.call(null,coll,k,not_found);
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
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12413 = this;
var v_pos__12415 = (this__12413.start + key);

return (new cljs.core.Subvec(this__12413.meta,cljs.core._assoc.call(null,this__12413.v,v_pos__12415,val),this__12413.start,((this__12413.end > (v_pos__12415 + 1)) ? this__12413.end : (v_pos__12415 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12482 = null;
var G__12482__12483 = (function (coll,k){
var this__12421 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12482__12484 = (function (coll,k,not_found){
var this__12422 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12482 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12482__12483.call(this,coll,k);
case  3 :
return G__12482__12484.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12482;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12428 = this;
return (new cljs.core.Subvec(this__12428.meta,cljs.core._assoc_n.call(null,this__12428.v,this__12428.end,o),this__12428.start,(this__12428.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12489 = null;
var G__12489__12490 = (function (coll,f){
var this__12431 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12489__12491 = (function (coll,f,start){
var this__12435 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12489 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12489__12490.call(this,coll,f);
case  3 :
return G__12489__12491.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12489;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12437 = this;
var subvec_seq__12445 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12437.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12437.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12445.call(null,this__12437.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12447 = this;
return (this__12447.end - this__12447.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12448 = this;
return cljs.core._nth.call(null,this__12448.v,(this__12448.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12450 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12450.start,this__12450.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12450.meta,this__12450.v,this__12450.start,(this__12450.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12453 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12455 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12458 = this;
return (new cljs.core.Subvec(meta,this__12458.v,this__12458.start,this__12458.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12460 = this;
return this__12460.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12512 = null;
var G__12512__12514 = (function (coll,n){
var this__12464 = this;
return cljs.core._nth.call(null,this__12464.v,(this__12464.start + n));
});
var G__12512__12515 = (function (coll,n,not_found){
var this__12468 = this;
return cljs.core._nth.call(null,this__12468.v,(this__12468.start + n),not_found);
});
G__12512 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12512__12514.call(this,coll,n);
case  3 :
return G__12512__12515.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12512;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12470 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12470.meta);
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
var subvec__12536 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12537 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12536.call(this,v,start);
case  3 :
return subvec__12537.call(this,v,start,end);
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
var this__12544 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12545 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12547 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12550 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12550.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12552 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12557 = this;
return cljs.core._first.call(null,this__12557.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12558 = this;
var temp__3695__auto____12562 = cljs.core.next.call(null,this__12558.front);

if(cljs.core.truth_(temp__3695__auto____12562))
{var f1__12563 = temp__3695__auto____12562;

return (new cljs.core.PersistentQueueSeq(this__12558.meta,f1__12563,this__12558.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12558.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12558.meta,this__12558.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12565 = this;
return this__12565.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12567 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12567.front,this__12567.rear));
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
var this__12642 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12643 = this;
if(cljs.core.truth_(this__12643.front))
{return (new cljs.core.PersistentQueue(this__12643.meta,(this__12643.count + 1),this__12643.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12647 = this__12643.rear;

if(cljs.core.truth_(or__3548__auto____12647))
{return or__3548__auto____12647;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12643.meta,(this__12643.count + 1),cljs.core.conj.call(null,this__12643.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12648 = this;
var rear__12649 = cljs.core.seq.call(null,this__12648.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12650 = this__12648.front;

if(cljs.core.truth_(or__3548__auto____12650))
{return or__3548__auto____12650;
} else
{return rear__12649;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12648.front,cljs.core.seq.call(null,rear__12649)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12651 = this;
return this__12651.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12652 = this;
return cljs.core._first.call(null,this__12652.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12653 = this;
if(cljs.core.truth_(this__12653.front))
{var temp__3695__auto____12654 = cljs.core.next.call(null,this__12653.front);

if(cljs.core.truth_(temp__3695__auto____12654))
{var f1__12655 = temp__3695__auto____12654;

return (new cljs.core.PersistentQueue(this__12653.meta,(this__12653.count - 1),f1__12655,this__12653.rear));
} else
{return (new cljs.core.PersistentQueue(this__12653.meta,(this__12653.count - 1),cljs.core.seq.call(null,this__12653.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12661 = this;
return cljs.core.first.call(null,this__12661.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12663 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12665 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12667 = this;
return (new cljs.core.PersistentQueue(meta,this__12667.count,this__12667.front,this__12667.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12669 = this;
return this__12669.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12671 = this;
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
var this__12690 = this;
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
var len__12709 = array.length;

var i__12710 = 0;

while(true){
if(cljs.core.truth_((i__12710 < len__12709)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12710]))))
{return i__12710;
} else
{{
var G__12717 = (i__12710 + incr);
i__12710 = G__12717;
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
var obj_map_contains_key_QMARK___12726 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12727 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12723 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12723))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12723;
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
return obj_map_contains_key_QMARK___12726.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12727.call(this,k,strobj,true_val,false_val);
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
var this__12769 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12804 = null;
var G__12804__12805 = (function (coll,k){
var this__12771 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12804__12806 = (function (coll,k,not_found){
var this__12773 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12773.strobj,(this__12773.strobj[k]),not_found);
});
G__12804 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12804__12805.call(this,coll,k);
case  3 :
return G__12804__12806.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12804;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12774 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12775 = goog.object.clone.call(null,this__12774.strobj);
var overwrite_QMARK___12776 = new_strobj__12775.hasOwnProperty(k);

(new_strobj__12775[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12776))
{return (new cljs.core.ObjMap(this__12774.meta,this__12774.keys,new_strobj__12775));
} else
{var new_keys__12777 = cljs.core.aclone.call(null,this__12774.keys);

new_keys__12777.push(k);
return (new cljs.core.ObjMap(this__12774.meta,new_keys__12777,new_strobj__12775));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12774.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12782 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12782.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12817 = null;
var G__12817__12818 = (function (coll,k){
var this__12783 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12817__12819 = (function (coll,k,not_found){
var this__12784 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12817 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12817__12818.call(this,coll,k);
case  3 :
return G__12817__12819.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12817;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12785 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12786 = this;
if(cljs.core.truth_((this__12786.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12741_SHARP_){
return cljs.core.vector.call(null,p1__12741_SHARP_,(this__12786.strobj[p1__12741_SHARP_]));
}),this__12786.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12787 = this;
return this__12787.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12791 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12793 = this;
return (new cljs.core.ObjMap(meta,this__12793.keys,this__12793.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12795 = this;
return this__12795.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12796 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12796.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12798 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12800 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12800))
{return this__12798.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12800;
}
})()))
{var new_keys__12801 = cljs.core.aclone.call(null,this__12798.keys);
var new_strobj__12802 = goog.object.clone.call(null,this__12798.strobj);

new_keys__12801.splice(cljs.core.scan_array.call(null,1,k,new_keys__12801),1);
cljs.core.js_delete.call(null,new_strobj__12802,k);
return (new cljs.core.ObjMap(this__12798.meta,new_keys__12801,new_strobj__12802));
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
var this__12846 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12916 = null;
var G__12916__12917 = (function (coll,k){
var this__12849 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12916__12918 = (function (coll,k,not_found){
var this__12852 = this;
var bucket__12854 = (this__12852.hashobj[cljs.core.hash.call(null,k)]);
var i__12857 = (cljs.core.truth_(bucket__12854)?cljs.core.scan_array.call(null,2,k,bucket__12854):null);

if(cljs.core.truth_(i__12857))
{return (bucket__12854[(i__12857 + 1)]);
} else
{return not_found;
}
});
G__12916 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12916__12917.call(this,coll,k);
case  3 :
return G__12916__12918.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12916;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12860 = this;
var h__12862 = cljs.core.hash.call(null,k);
var bucket__12864 = (this__12860.hashobj[h__12862]);

if(cljs.core.truth_(bucket__12864))
{var new_bucket__12866 = cljs.core.aclone.call(null,bucket__12864);
var new_hashobj__12867 = goog.object.clone.call(null,this__12860.hashobj);

(new_hashobj__12867[h__12862] = new_bucket__12866);
var temp__3695__auto____12872 = cljs.core.scan_array.call(null,2,k,new_bucket__12866);

if(cljs.core.truth_(temp__3695__auto____12872))
{var i__12873 = temp__3695__auto____12872;

(new_bucket__12866[(i__12873 + 1)] = v);
return (new cljs.core.HashMap(this__12860.meta,this__12860.count,new_hashobj__12867));
} else
{new_bucket__12866.push(k,v);
return (new cljs.core.HashMap(this__12860.meta,(this__12860.count + 1),new_hashobj__12867));
}
} else
{var new_hashobj__12877 = goog.object.clone.call(null,this__12860.hashobj);

(new_hashobj__12877[h__12862] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12860.meta,(this__12860.count + 1),new_hashobj__12877));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12881 = this;
var bucket__12882 = (this__12881.hashobj[cljs.core.hash.call(null,k)]);
var i__12885 = (cljs.core.truth_(bucket__12882)?cljs.core.scan_array.call(null,2,k,bucket__12882):null);

if(cljs.core.truth_(i__12885))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12928 = null;
var G__12928__12929 = (function (coll,k){
var this__12886 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12928__12930 = (function (coll,k,not_found){
var this__12891 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12928 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12928__12929.call(this,coll,k);
case  3 :
return G__12928__12930.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12928;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12893 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12895 = this;
if(cljs.core.truth_((this__12895.count > 0)))
{var hashes__12897 = cljs.core.js_keys.call(null,this__12895.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12840_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12895.hashobj[p1__12840_SHARP_])));
}),hashes__12897);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12898 = this;
return this__12898.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12899 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12900 = this;
return (new cljs.core.HashMap(meta,this__12900.count,this__12900.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12901 = this;
return this__12901.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12902 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12902.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12903 = this;
var h__12904 = cljs.core.hash.call(null,k);
var bucket__12905 = (this__12903.hashobj[h__12904]);
var i__12907 = (cljs.core.truth_(bucket__12905)?cljs.core.scan_array.call(null,2,k,bucket__12905):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12907)))
{return coll;
} else
{var new_hashobj__12909 = goog.object.clone.call(null,this__12903.hashobj);

if(cljs.core.truth_((3 > bucket__12905.length)))
{cljs.core.js_delete.call(null,new_hashobj__12909,h__12904);
} else
{var new_bucket__12911 = cljs.core.aclone.call(null,bucket__12905);

new_bucket__12911.splice(i__12907,2);
(new_hashobj__12909[h__12904] = new_bucket__12911);
}
return (new cljs.core.HashMap(this__12903.meta,(this__12903.count - 1),new_hashobj__12909));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13049 = ks.length;

var i__13051 = 0;
var out__13052 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13051 < len__13049)))
{{
var G__13054 = (i__13051 + 1);
var G__13055 = cljs.core.assoc.call(null,out__13052,(ks[i__13051]),(vs[i__13051]));
i__13051 = G__13054;
out__13052 = G__13055;
continue;
}
} else
{return out__13052;
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
var in$__13066 = cljs.core.seq.call(null,keyvals);
var out__13067 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13066))
{{
var G__13075 = cljs.core.nnext.call(null,in$__13066);
var G__13076 = cljs.core.assoc.call(null,out__13067,cljs.core.first.call(null,in$__13066),cljs.core.second.call(null,in$__13066));
in$__13066 = G__13075;
out__13067 = G__13076;
continue;
}
} else
{return out__13067;
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
hash_map.cljs$lang$applyTo = (function (arglist__13077){
var keyvals = cljs.core.seq( arglist__13077 );;
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
{return cljs.core.reduce.call(null,(function (p1__13082_SHARP_,p2__13084_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13137 = p1__13082_SHARP_;

if(cljs.core.truth_(or__3548__auto____13137))
{return or__3548__auto____13137;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13084_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13138){
var maps = cljs.core.seq( arglist__13138 );;
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
{var merge_entry__13141 = (function (m,e){
var k__13139 = cljs.core.first.call(null,e);
var v__13140 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13139)))
{return cljs.core.assoc.call(null,m,k__13139,f.call(null,cljs.core.get.call(null,m,k__13139),v__13140));
} else
{return cljs.core.assoc.call(null,m,k__13139,v__13140);
}
});
var merge2__13144 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13141,(function (){var or__3548__auto____13142 = m1;

if(cljs.core.truth_(or__3548__auto____13142))
{return or__3548__auto____13142;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13144,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13153){
var f = cljs.core.first(arglist__13153);
var maps = cljs.core.rest(arglist__13153);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13162 = cljs.core.ObjMap.fromObject([],{});
var keys__13163 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13163))
{var key__13164 = cljs.core.first.call(null,keys__13163);
var entry__13166 = cljs.core.get.call(null,map,key__13164,"﷐'user/not-found");

{
var G__13170 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13166,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13162,key__13164,entry__13166):ret__13162);
var G__13171 = cljs.core.next.call(null,keys__13163);
ret__13162 = G__13170;
keys__13163 = G__13171;
continue;
}
} else
{return ret__13162;
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
var this__13179 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13213 = null;
var G__13213__13214 = (function (coll,v){
var this__13180 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13213__13215 = (function (coll,v,not_found){
var this__13182 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13182.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13213 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13213__13214.call(this,coll,v);
case  3 :
return G__13213__13215.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13213;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13219 = null;
var G__13219__13220 = (function (coll,k){
var this__13184 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13219__13221 = (function (coll,k,not_found){
var this__13186 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13219 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13219__13220.call(this,coll,k);
case  3 :
return G__13219__13221.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13219;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13188 = this;
return (new cljs.core.Set(this__13188.meta,cljs.core.assoc.call(null,this__13188.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13190 = this;
return cljs.core.keys.call(null,this__13190.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13193 = this;
return (new cljs.core.Set(this__13193.meta,cljs.core.dissoc.call(null,this__13193.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13196 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13198 = this;
var and__3546__auto____13200 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13200))
{var and__3546__auto____13201 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13201))
{return cljs.core.every_QMARK_.call(null,(function (p1__13158_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13158_SHARP_);
}),other);
} else
{return and__3546__auto____13201;
}
} else
{return and__3546__auto____13200;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13202 = this;
return (new cljs.core.Set(meta,this__13202.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13206 = this;
return this__13206.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13210 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13210.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13262 = cljs.core.seq.call(null,coll);
var out__13263 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13262))))
{{
var G__13272 = cljs.core.rest.call(null,in$__13262);
var G__13273 = cljs.core.conj.call(null,out__13263,cljs.core.first.call(null,in$__13262));
in$__13262 = G__13272;
out__13263 = G__13273;
continue;
}
} else
{return out__13263;
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
{var n__13278 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13279 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13279))
{var e__13282 = temp__3695__auto____13279;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13282));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13278,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13259_SHARP_){
var temp__3695__auto____13283 = cljs.core.find.call(null,smap,p1__13259_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13283))
{var e__13284 = temp__3695__auto____13283;

return cljs.core.second.call(null,e__13284);
} else
{return p1__13259_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13303 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13289,seen){
while(true){
var vec__13290__13291 = p__13289;
var f__13292 = cljs.core.nth.call(null,vec__13290__13291,0,null);
var xs__13293 = vec__13290__13291;

var temp__3698__auto____13294 = cljs.core.seq.call(null,xs__13293);

if(cljs.core.truth_(temp__3698__auto____13294))
{var s__13297 = temp__3698__auto____13294;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13292)))
{{
var G__13306 = cljs.core.rest.call(null,s__13297);
var G__13307 = seen;
p__13289 = G__13306;
seen = G__13307;
continue;
}
} else
{return cljs.core.cons.call(null,f__13292,step.call(null,cljs.core.rest.call(null,s__13297),cljs.core.conj.call(null,seen,f__13292)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13303.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13309 = cljs.core.Vector.fromArray([]);
var s__13310 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13310)))
{{
var G__13312 = cljs.core.conj.call(null,ret__13309,cljs.core.first.call(null,s__13310));
var G__13313 = cljs.core.next.call(null,s__13310);
ret__13309 = G__13312;
s__13310 = G__13313;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13309);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13322 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13322))
{return or__3548__auto____13322;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13323 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13323 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13323 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13331 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13331))
{return or__3548__auto____13331;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13332 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13332 > -1)))
{return cljs.core.subs.call(null,x,2,i__13332);
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
var map__13351 = cljs.core.ObjMap.fromObject([],{});
var ks__13352 = cljs.core.seq.call(null,keys);
var vs__13353 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13354 = ks__13352;

if(cljs.core.truth_(and__3546__auto____13354))
{return vs__13353;
} else
{return and__3546__auto____13354;
}
})()))
{{
var G__13369 = cljs.core.assoc.call(null,map__13351,cljs.core.first.call(null,ks__13352),cljs.core.first.call(null,vs__13353));
var G__13370 = cljs.core.next.call(null,ks__13352);
var G__13371 = cljs.core.next.call(null,vs__13353);
map__13351 = G__13369;
ks__13352 = G__13370;
vs__13353 = G__13371;
continue;
}
} else
{return map__13351;
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
var max_key__13384 = (function (k,x){
return x;
});
var max_key__13385 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13386 = (function() { 
var G__13390__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13349_SHARP_,p2__13350_SHARP_){
return max_key.call(null,k,p1__13349_SHARP_,p2__13350_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13390 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13390__delegate.call(this, k, x, y, more);
};
G__13390.cljs$lang$maxFixedArity = 3;
G__13390.cljs$lang$applyTo = (function (arglist__13392){
var k = cljs.core.first(arglist__13392);
var x = cljs.core.first(cljs.core.next(arglist__13392));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13392)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13392)));
return G__13390__delegate.call(this, k, x, y, more);
});
return G__13390;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13384.call(this,k,x);
case  3 :
return max_key__13385.call(this,k,x,y);
default:
return max_key__13386.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13386.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13402 = (function (k,x){
return x;
});
var min_key__13403 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13404 = (function() { 
var G__13412__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13375_SHARP_,p2__13377_SHARP_){
return min_key.call(null,k,p1__13375_SHARP_,p2__13377_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13412 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13412__delegate.call(this, k, x, y, more);
};
G__13412.cljs$lang$maxFixedArity = 3;
G__13412.cljs$lang$applyTo = (function (arglist__13413){
var k = cljs.core.first(arglist__13413);
var x = cljs.core.first(cljs.core.next(arglist__13413));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13413)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13413)));
return G__13412__delegate.call(this, k, x, y, more);
});
return G__13412;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13402.call(this,k,x);
case  3 :
return min_key__13403.call(this,k,x,y);
default:
return min_key__13404.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13404.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13437 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13439 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13434 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13434))
{var s__13435 = temp__3698__auto____13434;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13435),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13435)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13437.call(this,n,step);
case  3 :
return partition_all__13439.call(this,n,step,coll);
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
var temp__3698__auto____13458 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13458))
{var s__13460 = temp__3698__auto____13458;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13460))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13460),take_while.call(null,pred,cljs.core.rest.call(null,s__13460)));
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
var this__13487 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13490 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13600 = null;
var G__13600__13601 = (function (rng,f){
var this__13551 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13600__13602 = (function (rng,f,s){
var this__13552 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13600 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13600__13601.call(this,rng,f);
case  3 :
return G__13600__13602.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13600;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13555 = this;
var comp__13557 = (cljs.core.truth_((this__13555.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13557.call(null,this__13555.start,this__13555.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13559 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13559.end - this__13559.start) / this__13559.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13563 = this;
return this__13563.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13566 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13566.meta,(this__13566.start + this__13566.step),this__13566.end,this__13566.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13569 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13570 = this;
return (new cljs.core.Range(meta,this__13570.start,this__13570.end,this__13570.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13571 = this;
return this__13571.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13612 = null;
var G__13612__13613 = (function (rng,n){
var this__13574 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13574.start + (n * this__13574.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13580 = (this__13574.start > this__13574.end);

if(cljs.core.truth_(and__3546__auto____13580))
{return cljs.core._EQ_.call(null,this__13574.step,0);
} else
{return and__3546__auto____13580;
}
})()))
{return this__13574.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13612__13614 = (function (rng,n,not_found){
var this__13583 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13583.start + (n * this__13583.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13586 = (this__13583.start > this__13583.end);

if(cljs.core.truth_(and__3546__auto____13586))
{return cljs.core._EQ_.call(null,this__13583.step,0);
} else
{return and__3546__auto____13586;
}
})()))
{return this__13583.start;
} else
{return not_found;
}
}
});
G__13612 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13612__13613.call(this,rng,n);
case  3 :
return G__13612__13614.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13612;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13591 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13591.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13633 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13634 = (function (end){
return range.call(null,0,end,1);
});
var range__13635 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13636 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13633.call(this);
case  1 :
return range__13634.call(this,start);
case  2 :
return range__13635.call(this,start,end);
case  3 :
return range__13636.call(this,start,end,step);
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
var temp__3698__auto____13649 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13649))
{var s__13650 = temp__3698__auto____13649;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13650),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13650)));
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
var temp__3698__auto____13660 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13660))
{var s__13661 = temp__3698__auto____13660;

var fst__13662 = cljs.core.first.call(null,s__13661);
var fv__13663 = f.call(null,fst__13662);
var run__13666 = cljs.core.cons.call(null,fst__13662,cljs.core.take_while.call(null,(function (p1__13651_SHARP_){
return cljs.core._EQ_.call(null,fv__13663,f.call(null,p1__13651_SHARP_));
}),cljs.core.next.call(null,s__13661)));

return cljs.core.cons.call(null,run__13666,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13666),s__13661))));
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
var reductions__13904 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13900 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13900))
{var s__13901 = temp__3695__auto____13900;

return reductions.call(null,f,cljs.core.first.call(null,s__13901),cljs.core.rest.call(null,s__13901));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13905 = (function (f,init,coll){
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
return reductions__13904.call(this,f,init);
case  3 :
return reductions__13905.call(this,f,init,coll);
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
var juxt__13918 = (function (f){
return (function() {
var G__13923 = null;
var G__13923__13924 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13923__13925 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13923__13926 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13923__13927 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13923__13928 = (function() { 
var G__13931__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13931 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13931__delegate.call(this, x, y, z, args);
};
G__13931.cljs$lang$maxFixedArity = 3;
G__13931.cljs$lang$applyTo = (function (arglist__13932){
var x = cljs.core.first(arglist__13932);
var y = cljs.core.first(cljs.core.next(arglist__13932));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13932)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13932)));
return G__13931__delegate.call(this, x, y, z, args);
});
return G__13931;
})()
;
G__13923 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13923__13924.call(this);
case  1 :
return G__13923__13925.call(this,x);
case  2 :
return G__13923__13926.call(this,x,y);
case  3 :
return G__13923__13927.call(this,x,y,z);
default:
return G__13923__13928.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13923.cljs$lang$maxFixedArity = 3;
G__13923.cljs$lang$applyTo = G__13923__13928.cljs$lang$applyTo;
return G__13923;
})()
});
var juxt__13919 = (function (f,g){
return (function() {
var G__14017 = null;
var G__14017__14018 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14017__14019 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14017__14020 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14017__14021 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14017__14022 = (function() { 
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
G__14030.cljs$lang$applyTo = (function (arglist__14042){
var x = cljs.core.first(arglist__14042);
var y = cljs.core.first(cljs.core.next(arglist__14042));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14042)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14042)));
return G__14030__delegate.call(this, x, y, z, args);
});
return G__14030;
})()
;
G__14017 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14017__14018.call(this);
case  1 :
return G__14017__14019.call(this,x);
case  2 :
return G__14017__14020.call(this,x,y);
case  3 :
return G__14017__14021.call(this,x,y,z);
default:
return G__14017__14022.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14017.cljs$lang$maxFixedArity = 3;
G__14017.cljs$lang$applyTo = G__14017__14022.cljs$lang$applyTo;
return G__14017;
})()
});
var juxt__13920 = (function (f,g,h){
return (function() {
var G__14044 = null;
var G__14044__14046 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14044__14047 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14044__14048 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14044__14049 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14044__14051 = (function() { 
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
G__14086.cljs$lang$applyTo = (function (arglist__14088){
var x = cljs.core.first(arglist__14088);
var y = cljs.core.first(cljs.core.next(arglist__14088));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14088)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14088)));
return G__14086__delegate.call(this, x, y, z, args);
});
return G__14086;
})()
;
G__14044 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14044__14046.call(this);
case  1 :
return G__14044__14047.call(this,x);
case  2 :
return G__14044__14048.call(this,x,y);
case  3 :
return G__14044__14049.call(this,x,y,z);
default:
return G__14044__14051.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14044.cljs$lang$maxFixedArity = 3;
G__14044.cljs$lang$applyTo = G__14044__14051.cljs$lang$applyTo;
return G__14044;
})()
});
var juxt__13921 = (function() { 
var G__14092__delegate = function (f,g,h,fs){
var fs__13915 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14093 = null;
var G__14093__14094 = (function (){
return cljs.core.reduce.call(null,(function (p1__13890_SHARP_,p2__13891_SHARP_){
return cljs.core.conj.call(null,p1__13890_SHARP_,p2__13891_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13915);
});
var G__14093__14095 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13892_SHARP_,p2__13893_SHARP_){
return cljs.core.conj.call(null,p1__13892_SHARP_,p2__13893_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13915);
});
var G__14093__14096 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13894_SHARP_,p2__13895_SHARP_){
return cljs.core.conj.call(null,p1__13894_SHARP_,p2__13895_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13915);
});
var G__14093__14097 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13896_SHARP_,p2__13897_SHARP_){
return cljs.core.conj.call(null,p1__13896_SHARP_,p2__13897_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13915);
});
var G__14093__14098 = (function() { 
var G__14109__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13898_SHARP_,p2__13899_SHARP_){
return cljs.core.conj.call(null,p1__13898_SHARP_,cljs.core.apply.call(null,p2__13899_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13915);
};
var G__14109 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14109__delegate.call(this, x, y, z, args);
};
G__14109.cljs$lang$maxFixedArity = 3;
G__14109.cljs$lang$applyTo = (function (arglist__14111){
var x = cljs.core.first(arglist__14111);
var y = cljs.core.first(cljs.core.next(arglist__14111));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14111)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14111)));
return G__14109__delegate.call(this, x, y, z, args);
});
return G__14109;
})()
;
G__14093 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14093__14094.call(this);
case  1 :
return G__14093__14095.call(this,x);
case  2 :
return G__14093__14096.call(this,x,y);
case  3 :
return G__14093__14097.call(this,x,y,z);
default:
return G__14093__14098.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14093.cljs$lang$maxFixedArity = 3;
G__14093.cljs$lang$applyTo = G__14093__14098.cljs$lang$applyTo;
return G__14093;
})()
};
var G__14092 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14092__delegate.call(this, f, g, h, fs);
};
G__14092.cljs$lang$maxFixedArity = 3;
G__14092.cljs$lang$applyTo = (function (arglist__14112){
var f = cljs.core.first(arglist__14112);
var g = cljs.core.first(cljs.core.next(arglist__14112));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14112)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14112)));
return G__14092__delegate.call(this, f, g, h, fs);
});
return G__14092;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13918.call(this,f);
case  2 :
return juxt__13919.call(this,f,g);
case  3 :
return juxt__13920.call(this,f,g,h);
default:
return juxt__13921.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13921.cljs$lang$applyTo;
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
var dorun__14123 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14126 = cljs.core.next.call(null,coll);
coll = G__14126;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14124 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14120 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14120))
{return (n > 0);
} else
{return and__3546__auto____14120;
}
})()))
{{
var G__14127 = (n - 1);
var G__14128 = cljs.core.next.call(null,coll);
n = G__14127;
coll = G__14128;
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
return dorun__14123.call(this,n);
case  2 :
return dorun__14124.call(this,n,coll);
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
var doall__14130 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14131 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14130.call(this,n);
case  2 :
return doall__14131.call(this,n,coll);
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
var matches__14137 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14137),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14137),1)))
{return cljs.core.first.call(null,matches__14137);
} else
{return cljs.core.vec.call(null,matches__14137);
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
var matches__14144 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14144)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14144),1)))
{return cljs.core.first.call(null,matches__14144);
} else
{return cljs.core.vec.call(null,matches__14144);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14147 = cljs.core.re_find.call(null,re,s);
var match_idx__14148 = s.search(re);
var match_str__14150 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14147))?cljs.core.first.call(null,match_data__14147):match_data__14147);
var post_match__14152 = cljs.core.subs.call(null,s,(match_idx__14148 + cljs.core.count.call(null,match_str__14150)));

if(cljs.core.truth_(match_data__14147))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14147,re_seq.call(null,re,post_match__14152));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14161_SHARP_){
return print_one.call(null,p1__14161_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14212 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14212))
{var and__3546__auto____14221 = (function (){var x__445__auto____14215 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14217 = x__445__auto____14215;

if(cljs.core.truth_(and__3546__auto____14217))
{var and__3546__auto____14219 = x__445__auto____14215.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14219))
{return cljs.core.not.call(null,x__445__auto____14215.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14219;
}
} else
{return and__3546__auto____14217;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14215);
}
})();

if(cljs.core.truth_(and__3546__auto____14221))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14221;
}
} else
{return and__3546__auto____14212;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14222 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14223 = x__445__auto____14222;

if(cljs.core.truth_(and__3546__auto____14223))
{var and__3546__auto____14224 = x__445__auto____14222.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14224))
{return cljs.core.not.call(null,x__445__auto____14222.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14224;
}
} else
{return and__3546__auto____14223;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14222);
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
var first_obj__14248 = cljs.core.first.call(null,objs);
var sb__14249 = (new goog.string.StringBuffer());

var G__14252__14253 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14252__14253))
{var obj__14255 = cljs.core.first.call(null,G__14252__14253);
var G__14252__14256 = G__14252__14253;

while(true){
if(cljs.core.truth_((obj__14255 === first_obj__14248)))
{} else
{sb__14249.append(" ");
}
var G__14264__14284 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14255,opts));

if(cljs.core.truth_(G__14264__14284))
{var string__14285 = cljs.core.first.call(null,G__14264__14284);
var G__14264__14286 = G__14264__14284;

while(true){
sb__14249.append(string__14285);
var temp__3698__auto____14288 = cljs.core.next.call(null,G__14264__14286);

if(cljs.core.truth_(temp__3698__auto____14288))
{var G__14264__14289 = temp__3698__auto____14288;

{
var G__14309 = cljs.core.first.call(null,G__14264__14289);
var G__14310 = G__14264__14289;
string__14285 = G__14309;
G__14264__14286 = G__14310;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14293 = cljs.core.next.call(null,G__14252__14256);

if(cljs.core.truth_(temp__3698__auto____14293))
{var G__14252__14295 = temp__3698__auto____14293;

{
var G__14312 = cljs.core.first.call(null,G__14252__14295);
var G__14313 = G__14252__14295;
obj__14255 = G__14312;
G__14252__14256 = G__14313;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14249);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14314 = cljs.core.first.call(null,objs);

var G__14315__14318 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14315__14318))
{var obj__14327 = cljs.core.first.call(null,G__14315__14318);
var G__14315__14328 = G__14315__14318;

while(true){
if(cljs.core.truth_((obj__14327 === first_obj__14314)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14330__14333 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14327,opts));

if(cljs.core.truth_(G__14330__14333))
{var string__14335 = cljs.core.first.call(null,G__14330__14333);
var G__14330__14337 = G__14330__14333;

while(true){
cljs.core.string_print.call(null,string__14335);
var temp__3698__auto____14339 = cljs.core.next.call(null,G__14330__14337);

if(cljs.core.truth_(temp__3698__auto____14339))
{var G__14330__14341 = temp__3698__auto____14339;

{
var G__14348 = cljs.core.first.call(null,G__14330__14341);
var G__14349 = G__14330__14341;
string__14335 = G__14348;
G__14330__14337 = G__14349;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14343 = cljs.core.next.call(null,G__14315__14328);

if(cljs.core.truth_(temp__3698__auto____14343))
{var G__14315__14345 = temp__3698__auto____14343;

{
var G__14353 = cljs.core.first.call(null,G__14315__14345);
var G__14354 = G__14315__14345;
obj__14327 = G__14353;
G__14315__14328 = G__14354;
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
pr_str.cljs$lang$applyTo = (function (arglist__14399){
var objs = cljs.core.seq( arglist__14399 );;
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
pr.cljs$lang$applyTo = (function (arglist__14402){
var objs = cljs.core.seq( arglist__14402 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14409){
var objs = cljs.core.seq( arglist__14409 );;
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
println.cljs$lang$applyTo = (function (arglist__14411){
var objs = cljs.core.seq( arglist__14411 );;
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
prn.cljs$lang$applyTo = (function (arglist__14419){
var objs = cljs.core.seq( arglist__14419 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14423 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14423,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14432 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14432))
{var nspc__14434 = temp__3698__auto____14432;

return cljs.core.str.call(null,nspc__14434,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14436 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14436))
{var nspc__14437 = temp__3698__auto____14436;

return cljs.core.str.call(null,nspc__14437,"/");
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
var pr_pair__14458 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14458,"{",", ","}",opts,coll);
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
var this__14532 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14534 = this;
var G__14536__14537 = cljs.core.seq.call(null,this__14534.watches);

if(cljs.core.truth_(G__14536__14537))
{var G__14539__14541 = cljs.core.first.call(null,G__14536__14537);
var vec__14540__14542 = G__14539__14541;
var key__14543 = cljs.core.nth.call(null,vec__14540__14542,0,null);
var f__14544 = cljs.core.nth.call(null,vec__14540__14542,1,null);
var G__14536__14545 = G__14536__14537;

var G__14539__14546 = G__14539__14541;
var G__14536__14547 = G__14536__14545;

while(true){
var vec__14548__14549 = G__14539__14546;
var key__14550 = cljs.core.nth.call(null,vec__14548__14549,0,null);
var f__14551 = cljs.core.nth.call(null,vec__14548__14549,1,null);
var G__14536__14552 = G__14536__14547;

f__14551.call(null,key__14550,this$,oldval,newval);
var temp__3698__auto____14560 = cljs.core.next.call(null,G__14536__14552);

if(cljs.core.truth_(temp__3698__auto____14560))
{var G__14536__14561 = temp__3698__auto____14560;

{
var G__14576 = cljs.core.first.call(null,G__14536__14561);
var G__14577 = G__14536__14561;
G__14539__14546 = G__14576;
G__14536__14547 = G__14577;
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
var this__14562 = this;
return this$.watches = cljs.core.assoc.call(null,this__14562.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14563 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14563.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14565 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14565.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14568 = this;
return this__14568.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14569 = this;
return this__14569.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14572 = this;
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
var atom__14591 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14593 = (function() { 
var G__14597__delegate = function (x,p__14580){
var map__14581__14582 = p__14580;
var map__14581__14583 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14581__14582))?cljs.core.apply.call(null,cljs.core.hash_map,map__14581__14582):map__14581__14582);
var validator__14584 = cljs.core.get.call(null,map__14581__14583,"﷐'validator");
var meta__14585 = cljs.core.get.call(null,map__14581__14583,"﷐'meta");

return (new cljs.core.Atom(x,meta__14585,validator__14584,null));
};
var G__14597 = function (x,var_args){
var p__14580 = null;
if (goog.isDef(var_args)) {
  p__14580 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14597__delegate.call(this, x, p__14580);
};
G__14597.cljs$lang$maxFixedArity = 1;
G__14597.cljs$lang$applyTo = (function (arglist__14601){
var x = cljs.core.first(arglist__14601);
var p__14580 = cljs.core.rest(arglist__14601);
return G__14597__delegate.call(this, x, p__14580);
});
return G__14597;
})()
;
atom = function(x,var_args){
var p__14580 = var_args;
switch(arguments.length){
case  1 :
return atom__14591.call(this,x);
default:
return atom__14593.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14593.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14607 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14607))
{var validate__14608 = temp__3698__auto____14607;

if(cljs.core.truth_(validate__14608.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14613 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14613,new_value);
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
var swap_BANG___14638 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14639 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14640 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14641 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14642 = (function() { 
var G__14645__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14645 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14645__delegate.call(this, a, f, x, y, z, more);
};
G__14645.cljs$lang$maxFixedArity = 5;
G__14645.cljs$lang$applyTo = (function (arglist__14648){
var a = cljs.core.first(arglist__14648);
var f = cljs.core.first(cljs.core.next(arglist__14648));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14648)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14648))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14648)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14648)))));
return G__14645__delegate.call(this, a, f, x, y, z, more);
});
return G__14645;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14638.call(this,a,f);
case  3 :
return swap_BANG___14639.call(this,a,f,x);
case  4 :
return swap_BANG___14640.call(this,a,f,x,y);
case  5 :
return swap_BANG___14641.call(this,a,f,x,y,z);
default:
return swap_BANG___14642.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14642.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14693){
var iref = cljs.core.first(arglist__14693);
var f = cljs.core.first(cljs.core.next(arglist__14693));
var args = cljs.core.rest(cljs.core.next(arglist__14693));
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
var gensym__14706 = (function (){
return gensym.call(null,"G__");
});
var gensym__14707 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14706.call(this);
case  1 :
return gensym__14707.call(this,prefix_string);
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
var this__14709 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14709.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14717 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14717.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14717.state,this__14717.f);
}
return cljs.core.deref.call(null,this__14717.state);
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
delay.cljs$lang$applyTo = (function (arglist__14721){
var body = cljs.core.seq( arglist__14721 );;
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
var map__14733__14734 = options;
var map__14733__14735 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14733__14734))?cljs.core.apply.call(null,cljs.core.hash_map,map__14733__14734):map__14733__14734);
var keywordize_keys__14736 = cljs.core.get.call(null,map__14733__14735,"﷐'keywordize-keys");
var keyfn__14738 = (cljs.core.truth_(keywordize_keys__14736)?cljs.core.keyword:cljs.core.str);
var f__14750 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14747 = (function iter__14739(s__14740){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14740__14741 = s__14740;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14740__14741)))
{var k__14743 = cljs.core.first.call(null,s__14740__14741);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14738.call(null,k__14743),thisfn.call(null,(x[k__14743]))]),iter__14739.call(null,cljs.core.rest.call(null,s__14740__14741)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14747.call(null,cljs.core.js_keys.call(null,x));
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

return f__14750.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14759){
var x = cljs.core.first(arglist__14759);
var options = cljs.core.rest(arglist__14759);
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
var mem__14764 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14784__delegate = function (args){
var temp__3695__auto____14770 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14764),args);

if(cljs.core.truth_(temp__3695__auto____14770))
{var v__14772 = temp__3695__auto____14770;

return v__14772;
} else
{var ret__14774 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14764,cljs.core.assoc,args,ret__14774);
return ret__14774;
}
};
var G__14784 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14784__delegate.call(this, args);
};
G__14784.cljs$lang$maxFixedArity = 0;
G__14784.cljs$lang$applyTo = (function (arglist__14790){
var args = cljs.core.seq( arglist__14790 );;
return G__14784__delegate.call(this, args);
});
return G__14784;
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
var trampoline__14795 = (function (f){
while(true){
var ret__14792 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14792)))
{{
var G__14799 = ret__14792;
f = G__14799;
continue;
}
} else
{return ret__14792;
}
break;
}
});
var trampoline__14796 = (function() { 
var G__14805__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14805 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14805__delegate.call(this, f, args);
};
G__14805.cljs$lang$maxFixedArity = 1;
G__14805.cljs$lang$applyTo = (function (arglist__14809){
var f = cljs.core.first(arglist__14809);
var args = cljs.core.rest(arglist__14809);
return G__14805__delegate.call(this, f, args);
});
return G__14805;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14795.call(this,f);
default:
return trampoline__14796.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14796.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14810 = (function (){
return rand.call(null,1);
});
var rand__14811 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14810.call(this);
case  1 :
return rand__14811.call(this,n);
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
var k__14816 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14816,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14816,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14931 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14932 = (function (h,child,parent){
var or__3548__auto____14910 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14910))
{return or__3548__auto____14910;
} else
{var or__3548__auto____14911 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14911))
{return or__3548__auto____14911;
} else
{var and__3546__auto____14912 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14912))
{var and__3546__auto____14913 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14913))
{var and__3546__auto____14914 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14914))
{var ret__14915 = true;
var i__14916 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14918 = cljs.core.not.call(null,ret__14915);

if(cljs.core.truth_(or__3548__auto____14918))
{return or__3548__auto____14918;
} else
{return cljs.core._EQ_.call(null,i__14916,cljs.core.count.call(null,parent));
}
})()))
{return ret__14915;
} else
{{
var G__14953 = isa_QMARK_.call(null,h,child.call(null,i__14916),parent.call(null,i__14916));
var G__14954 = (i__14916 + 1);
ret__14915 = G__14953;
i__14916 = G__14954;
continue;
}
}
break;
}
} else
{return and__3546__auto____14914;
}
} else
{return and__3546__auto____14913;
}
} else
{return and__3546__auto____14912;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14931.call(this,h,child);
case  3 :
return isa_QMARK___14932.call(this,h,child,parent);
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
var parents__14961 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14962 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14961.call(this,h);
case  2 :
return parents__14962.call(this,h,tag);
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
var ancestors__14968 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14969 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14968.call(this,h);
case  2 :
return ancestors__14969.call(this,h,tag);
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
var descendants__14976 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14977 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14976.call(this,h);
case  2 :
return descendants__14977.call(this,h,tag);
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
var derive__15000 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15001 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14989 = "﷐'parents".call(null,h);
var td__14990 = "﷐'descendants".call(null,h);
var ta__14991 = "﷐'ancestors".call(null,h);
var tf__14995 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14998 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14989.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14991.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14991.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14989,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14995.call(null,"﷐'ancestors".call(null,h),tag,td__14990,parent,ta__14991),"﷐'descendants":tf__14995.call(null,"﷐'descendants".call(null,h),parent,ta__14991,tag,td__14990)});
})());

if(cljs.core.truth_(or__3548__auto____14998))
{return or__3548__auto____14998;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15000.call(this,h,tag);
case  3 :
return derive__15001.call(this,h,tag,parent);
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
var underive__15031 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15033 = (function (h,tag,parent){
var parentMap__15023 = "﷐'parents".call(null,h);
var childsParents__15025 = (cljs.core.truth_(parentMap__15023.call(null,tag))?cljs.core.disj.call(null,parentMap__15023.call(null,tag),parent):cljs.core.set([]));
var newParents__15028 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15025))?cljs.core.assoc.call(null,parentMap__15023,tag,childsParents__15025):cljs.core.dissoc.call(null,parentMap__15023,tag));
var deriv_seq__15030 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14981_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14981_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14981_SHARP_),cljs.core.second.call(null,p1__14981_SHARP_)));
}),cljs.core.seq.call(null,newParents__15028)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15023.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14982_SHARP_,p2__14984_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14982_SHARP_,p2__14984_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15030));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15031.call(this,h,tag);
case  3 :
return underive__15033.call(this,h,tag,parent);
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
var xprefs__15150 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15152 = (cljs.core.truth_((function (){var and__3546__auto____15151 = xprefs__15150;

if(cljs.core.truth_(and__3546__auto____15151))
{return xprefs__15150.call(null,y);
} else
{return and__3546__auto____15151;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15152))
{return or__3548__auto____15152;
} else
{var or__3548__auto____15154 = (function (){var ps__15153 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15153) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15153),prefer_table)))
{} else
{}
{
var G__15157 = cljs.core.rest.call(null,ps__15153);
ps__15153 = G__15157;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15154))
{return or__3548__auto____15154;
} else
{var or__3548__auto____15156 = (function (){var ps__15155 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15155) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15155),y,prefer_table)))
{} else
{}
{
var G__15158 = cljs.core.rest.call(null,ps__15155);
ps__15155 = G__15158;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15156))
{return or__3548__auto____15156;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15159 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15159))
{return or__3548__auto____15159;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15204 = cljs.core.reduce.call(null,(function (be,p__15189){
var vec__15190__15191 = p__15189;
var k__15192 = cljs.core.nth.call(null,vec__15190__15191,0,null);
var ___15193 = cljs.core.nth.call(null,vec__15190__15191,1,null);
var e__15195 = vec__15190__15191;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15192)))
{var be2__15198 = (cljs.core.truth_((function (){var or__3548__auto____15197 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15197))
{return or__3548__auto____15197;
} else
{return cljs.core.dominates.call(null,k__15192,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15195:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15198),k__15192,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15192," and ",cljs.core.first.call(null,be2__15198),", and neither is preferred")));
}
return be2__15198;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15204))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15204));
return cljs.core.second.call(null,best_entry__15204);
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
if(cljs.core.truth_((function (){var and__3546__auto____15218 = mf;

if(cljs.core.truth_(and__3546__auto____15218))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15218;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15219 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15219))
{return or__3548__auto____15219;
} else
{var or__3548__auto____15220 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15220))
{return or__3548__auto____15220;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15221 = mf;

if(cljs.core.truth_(and__3546__auto____15221))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15221;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15222 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15222))
{return or__3548__auto____15222;
} else
{var or__3548__auto____15223 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15223))
{return or__3548__auto____15223;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15227 = mf;

if(cljs.core.truth_(and__3546__auto____15227))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15227;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15229 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15229))
{return or__3548__auto____15229;
} else
{var or__3548__auto____15231 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15231))
{return or__3548__auto____15231;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15234 = mf;

if(cljs.core.truth_(and__3546__auto____15234))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15234;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15235 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15235))
{return or__3548__auto____15235;
} else
{var or__3548__auto____15236 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15236))
{return or__3548__auto____15236;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15238 = mf;

if(cljs.core.truth_(and__3546__auto____15238))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15238;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15241 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15241))
{return or__3548__auto____15241;
} else
{var or__3548__auto____15242 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15242))
{return or__3548__auto____15242;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15243 = mf;

if(cljs.core.truth_(and__3546__auto____15243))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15243;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15244 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15244))
{return or__3548__auto____15244;
} else
{var or__3548__auto____15246 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15246))
{return or__3548__auto____15246;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15247 = mf;

if(cljs.core.truth_(and__3546__auto____15247))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15247;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15248 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15248))
{return or__3548__auto____15248;
} else
{var or__3548__auto____15249 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15249))
{return or__3548__auto____15249;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15256 = mf;

if(cljs.core.truth_(and__3546__auto____15256))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15256;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15259 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15259))
{return or__3548__auto____15259;
} else
{var or__3548__auto____15260 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15260))
{return or__3548__auto____15260;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15322 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15323 = cljs.core._get_method.call(null,mf,dispatch_val__15322);

if(cljs.core.truth_(target_fn__15323))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15322)));
}
return cljs.core.apply.call(null,target_fn__15323,args);
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
var this__15329 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15330 = this;
cljs.core.swap_BANG_.call(null,this__15330.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15330.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15330.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15330.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15331 = this;
cljs.core.swap_BANG_.call(null,this__15331.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15331.method_cache,this__15331.method_table,this__15331.cached_hierarchy,this__15331.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15332 = this;
cljs.core.swap_BANG_.call(null,this__15332.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15332.method_cache,this__15332.method_table,this__15332.cached_hierarchy,this__15332.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15333 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15333.cached_hierarchy),cljs.core.deref.call(null,this__15333.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15333.method_cache,this__15333.method_table,this__15333.cached_hierarchy,this__15333.hierarchy);
}
var temp__3695__auto____15334 = cljs.core.deref.call(null,this__15333.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15334))
{var target_fn__15335 = temp__3695__auto____15334;

return target_fn__15335;
} else
{var temp__3695__auto____15336 = cljs.core.find_and_cache_best_method.call(null,this__15333.name,dispatch_val,this__15333.hierarchy,this__15333.method_table,this__15333.prefer_table,this__15333.method_cache,this__15333.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15336))
{var target_fn__15337 = temp__3695__auto____15336;

return target_fn__15337;
} else
{return cljs.core.deref.call(null,this__15333.method_table).call(null,this__15333.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15338 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15338.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15338.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15338.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15338.method_cache,this__15338.method_table,this__15338.cached_hierarchy,this__15338.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15339 = this;
return cljs.core.deref.call(null,this__15339.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15340 = this;
return cljs.core.deref.call(null,this__15340.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15341 = this;
return cljs.core.do_dispatch.call(null,mf,this__15341.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15418__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15418 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15418__delegate.call(this, _, args);
};
G__15418.cljs$lang$maxFixedArity = 1;
G__15418.cljs$lang$applyTo = (function (arglist__15420){
var _ = cljs.core.first(arglist__15420);
var args = cljs.core.rest(arglist__15420);
return G__15418__delegate.call(this, _, args);
});
return G__15418;
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
