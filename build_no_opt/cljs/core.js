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
var or__3548__auto____7215 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7215))
{return or__3548__auto____7215;
} else
{var or__3548__auto____7216 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7216))
{return or__3548__auto____7216;
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
var _invoke__7522 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7219 = this$;

if(cljs.core.truth_(and__3546__auto____7219))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7219;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7220 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7220))
{return or__3548__auto____7220;
} else
{var or__3548__auto____7221 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7221))
{return or__3548__auto____7221;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7523 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7222 = this$;

if(cljs.core.truth_(and__3546__auto____7222))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7222;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7223 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7223))
{return or__3548__auto____7223;
} else
{var or__3548__auto____7224 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7224))
{return or__3548__auto____7224;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7524 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7226 = this$;

if(cljs.core.truth_(and__3546__auto____7226))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7226;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7229 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7229))
{return or__3548__auto____7229;
} else
{var or__3548__auto____7230 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7230))
{return or__3548__auto____7230;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7525 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7232 = this$;

if(cljs.core.truth_(and__3546__auto____7232))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7232;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7324 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7324))
{return or__3548__auto____7324;
} else
{var or__3548__auto____7325 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7325))
{return or__3548__auto____7325;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7526 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7326 = this$;

if(cljs.core.truth_(and__3546__auto____7326))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7326;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7328 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7328))
{return or__3548__auto____7328;
} else
{var or__3548__auto____7329 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7329))
{return or__3548__auto____7329;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7527 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7332 = this$;

if(cljs.core.truth_(and__3546__auto____7332))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7332;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7338 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7338))
{return or__3548__auto____7338;
} else
{var or__3548__auto____7372 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7372))
{return or__3548__auto____7372;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7528 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7375 = this$;

if(cljs.core.truth_(and__3546__auto____7375))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7375;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7376 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7376))
{return or__3548__auto____7376;
} else
{var or__3548__auto____7378 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7378))
{return or__3548__auto____7378;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7529 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7380 = this$;

if(cljs.core.truth_(and__3546__auto____7380))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7380;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7384 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7384))
{return or__3548__auto____7384;
} else
{var or__3548__auto____7387 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7387))
{return or__3548__auto____7387;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7530 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7390 = this$;

if(cljs.core.truth_(and__3546__auto____7390))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7390;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7531 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7398 = this$;

if(cljs.core.truth_(and__3546__auto____7398))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7398;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7533 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7407 = this$;

if(cljs.core.truth_(and__3546__auto____7407))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7407;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7412 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7412))
{return or__3548__auto____7412;
} else
{var or__3548__auto____7413 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7413))
{return or__3548__auto____7413;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7535 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7416 = this$;

if(cljs.core.truth_(and__3546__auto____7416))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7416;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7420 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7420))
{return or__3548__auto____7420;
} else
{var or__3548__auto____7422 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7422))
{return or__3548__auto____7422;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7536 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7425 = this$;

if(cljs.core.truth_(and__3546__auto____7425))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7425;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7429 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7429))
{return or__3548__auto____7429;
} else
{var or__3548__auto____7432 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7432))
{return or__3548__auto____7432;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7537 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7435 = this$;

if(cljs.core.truth_(and__3546__auto____7435))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7435;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7438 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7438))
{return or__3548__auto____7438;
} else
{var or__3548__auto____7440 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7440))
{return or__3548__auto____7440;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7538 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7442 = this$;

if(cljs.core.truth_(and__3546__auto____7442))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7442;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7539 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7448 = this$;

if(cljs.core.truth_(and__3546__auto____7448))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7448;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7452 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7452))
{return or__3548__auto____7452;
} else
{var or__3548__auto____7474 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7474))
{return or__3548__auto____7474;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7540 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7477 = this$;

if(cljs.core.truth_(and__3546__auto____7477))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7477;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7479 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7479))
{return or__3548__auto____7479;
} else
{var or__3548__auto____7480 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7480))
{return or__3548__auto____7480;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7541 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7486 = this$;

if(cljs.core.truth_(and__3546__auto____7486))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7486;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7489 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7489))
{return or__3548__auto____7489;
} else
{var or__3548__auto____7491 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7491))
{return or__3548__auto____7491;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7542 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7495 = this$;

if(cljs.core.truth_(and__3546__auto____7495))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7495;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7497 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7497))
{return or__3548__auto____7497;
} else
{var or__3548__auto____7499 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7499))
{return or__3548__auto____7499;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7543 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7502 = this$;

if(cljs.core.truth_(and__3546__auto____7502))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7502;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7505 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7505))
{return or__3548__auto____7505;
} else
{var or__3548__auto____7507 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7507))
{return or__3548__auto____7507;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7544 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7511 = this$;

if(cljs.core.truth_(and__3546__auto____7511))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7511;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7514 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7514))
{return or__3548__auto____7514;
} else
{var or__3548__auto____7517 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7517))
{return or__3548__auto____7517;
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
return _invoke__7522.call(this,this$);
case  2 :
return _invoke__7523.call(this,this$,a);
case  3 :
return _invoke__7524.call(this,this$,a,b);
case  4 :
return _invoke__7525.call(this,this$,a,b,c);
case  5 :
return _invoke__7526.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7527.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7528.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7529.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7530.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7531.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7533.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7535.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7536.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7537.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7538.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7539.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7540.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7541.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7542.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7543.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7544.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7631 = coll;

if(cljs.core.truth_(and__3546__auto____7631))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7631;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7633 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7633))
{return or__3548__auto____7633;
} else
{var or__3548__auto____7635 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7635))
{return or__3548__auto____7635;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7638 = coll;

if(cljs.core.truth_(and__3546__auto____7638))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7638;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7639 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7639))
{return or__3548__auto____7639;
} else
{var or__3548__auto____7641 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7641))
{return or__3548__auto____7641;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7666 = coll;

if(cljs.core.truth_(and__3546__auto____7666))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7666;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7668 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7668))
{return or__3548__auto____7668;
} else
{var or__3548__auto____7669 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7669))
{return or__3548__auto____7669;
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
var _nth__7680 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7672 = coll;

if(cljs.core.truth_(and__3546__auto____7672))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7672;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7674 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7674))
{return or__3548__auto____7674;
} else
{var or__3548__auto____7676 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7676))
{return or__3548__auto____7676;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7681 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7677 = coll;

if(cljs.core.truth_(and__3546__auto____7677))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7677;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7678 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7678))
{return or__3548__auto____7678;
} else
{var or__3548__auto____7679 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7679))
{return or__3548__auto____7679;
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
return _nth__7680.call(this,coll,n);
case  3 :
return _nth__7681.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7686 = coll;

if(cljs.core.truth_(and__3546__auto____7686))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7686;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7688 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7688))
{return or__3548__auto____7688;
} else
{var or__3548__auto____7689 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7689))
{return or__3548__auto____7689;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7692 = coll;

if(cljs.core.truth_(and__3546__auto____7692))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7692;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7694 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7694))
{return or__3548__auto____7694;
} else
{var or__3548__auto____7695 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7695))
{return or__3548__auto____7695;
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
var _lookup__7731 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7722 = o;

if(cljs.core.truth_(and__3546__auto____7722))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7722;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7724 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7724))
{return or__3548__auto____7724;
} else
{var or__3548__auto____7727 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7727))
{return or__3548__auto____7727;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7732 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7728 = o;

if(cljs.core.truth_(and__3546__auto____7728))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7728;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7729 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7729))
{return or__3548__auto____7729;
} else
{var or__3548__auto____7730 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7730))
{return or__3548__auto____7730;
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
return _lookup__7731.call(this,o,k);
case  3 :
return _lookup__7732.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7741 = coll;

if(cljs.core.truth_(and__3546__auto____7741))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7741;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7793 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7793))
{return or__3548__auto____7793;
} else
{var or__3548__auto____7794 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7794))
{return or__3548__auto____7794;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7797 = coll;

if(cljs.core.truth_(and__3546__auto____7797))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7797;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7798 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7798))
{return or__3548__auto____7798;
} else
{var or__3548__auto____7799 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7799))
{return or__3548__auto____7799;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7819 = coll;

if(cljs.core.truth_(and__3546__auto____7819))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7819;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7922 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7922))
{return or__3548__auto____7922;
} else
{var or__3548__auto____7924 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7924))
{return or__3548__auto____7924;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7943 = coll;

if(cljs.core.truth_(and__3546__auto____7943))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7943;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7946 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7946))
{return or__3548__auto____7946;
} else
{var or__3548__auto____7947 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7947))
{return or__3548__auto____7947;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7994 = coll;

if(cljs.core.truth_(and__3546__auto____7994))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7994;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7997 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7997))
{return or__3548__auto____7997;
} else
{var or__3548__auto____8000 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____8000))
{return or__3548__auto____8000;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8005 = coll;

if(cljs.core.truth_(and__3546__auto____8005))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____8005;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8006 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8006))
{return or__3548__auto____8006;
} else
{var or__3548__auto____8007 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8007))
{return or__3548__auto____8007;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8016 = coll;

if(cljs.core.truth_(and__3546__auto____8016))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8016;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8020 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8020))
{return or__3548__auto____8020;
} else
{var or__3548__auto____8021 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8021))
{return or__3548__auto____8021;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8027 = o;

if(cljs.core.truth_(and__3546__auto____8027))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8027;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8029 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8029))
{return or__3548__auto____8029;
} else
{var or__3548__auto____8030 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8030))
{return or__3548__auto____8030;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8034 = o;

if(cljs.core.truth_(and__3546__auto____8034))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8034;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8035 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8035))
{return or__3548__auto____8035;
} else
{var or__3548__auto____8036 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8036))
{return or__3548__auto____8036;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8041 = o;

if(cljs.core.truth_(and__3546__auto____8041))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8041;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8043 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8043))
{return or__3548__auto____8043;
} else
{var or__3548__auto____8045 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8045))
{return or__3548__auto____8045;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8049 = o;

if(cljs.core.truth_(and__3546__auto____8049))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8049;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8050 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8050))
{return or__3548__auto____8050;
} else
{var or__3548__auto____8051 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8051))
{return or__3548__auto____8051;
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
var _reduce__8068 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8056 = coll;

if(cljs.core.truth_(and__3546__auto____8056))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8056;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8057 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8057))
{return or__3548__auto____8057;
} else
{var or__3548__auto____8058 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8058))
{return or__3548__auto____8058;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8069 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8060 = coll;

if(cljs.core.truth_(and__3546__auto____8060))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8060;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8063 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8063))
{return or__3548__auto____8063;
} else
{var or__3548__auto____8065 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8065))
{return or__3548__auto____8065;
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
return _reduce__8068.call(this,coll,f);
case  3 :
return _reduce__8069.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8113 = o;

if(cljs.core.truth_(and__3546__auto____8113))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8113;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8115 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8115))
{return or__3548__auto____8115;
} else
{var or__3548__auto____8117 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8117))
{return or__3548__auto____8117;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8126 = o;

if(cljs.core.truth_(and__3546__auto____8126))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8126;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8128 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8128))
{return or__3548__auto____8128;
} else
{var or__3548__auto____8130 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8130))
{return or__3548__auto____8130;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8135 = o;

if(cljs.core.truth_(and__3546__auto____8135))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8135;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8136 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8136))
{return or__3548__auto____8136;
} else
{var or__3548__auto____8137 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8137))
{return or__3548__auto____8137;
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
if(cljs.core.truth_((function (){var and__3546__auto____8140 = o;

if(cljs.core.truth_(and__3546__auto____8140))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8140;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8143 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8143))
{return or__3548__auto____8143;
} else
{var or__3548__auto____8145 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8145))
{return or__3548__auto____8145;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8150 = d;

if(cljs.core.truth_(and__3546__auto____8150))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8150;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8153 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8153))
{return or__3548__auto____8153;
} else
{var or__3548__auto____8154 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8154))
{return or__3548__auto____8154;
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
if(cljs.core.truth_((function (){var and__3546__auto____8223 = this$;

if(cljs.core.truth_(and__3546__auto____8223))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8223;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8224 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8224))
{return or__3548__auto____8224;
} else
{var or__3548__auto____8225 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8225))
{return or__3548__auto____8225;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8234 = this$;

if(cljs.core.truth_(and__3546__auto____8234))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8234;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8235 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8235))
{return or__3548__auto____8235;
} else
{var or__3548__auto____8236 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8236))
{return or__3548__auto____8236;
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
var G__8395 = null;
var G__8395__8396 = (function (o,k){
return null;
});
var G__8395__8397 = (function (o,k,not_found){
return not_found;
});
G__8395 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8395__8396.call(this,o,k);
case  3 :
return G__8395__8397.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8395;
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
var G__8399 = null;
var G__8399__8400 = (function (_,f){
return f.call(null);
});
var G__8399__8401 = (function (_,f,start){
return start;
});
G__8399 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8399__8400.call(this,_,f);
case  3 :
return G__8399__8401.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8399;
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
var G__8415 = null;
var G__8415__8416 = (function (_,n){
return null;
});
var G__8415__8417 = (function (_,n,not_found){
return not_found;
});
G__8415 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8415__8416.call(this,_,n);
case  3 :
return G__8415__8417.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8415;
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
var ci_reduce__8433 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8425 = cljs.core._nth.call(null,cicoll,0);
var n__8426 = 1;

while(true){
if(cljs.core.truth_((n__8426 < cljs.core._count.call(null,cicoll))))
{{
var G__8438 = f.call(null,val__8425,cljs.core._nth.call(null,cicoll,n__8426));
var G__8439 = (n__8426 + 1);
val__8425 = G__8438;
n__8426 = G__8439;
continue;
}
} else
{return val__8425;
}
break;
}
}
});
var ci_reduce__8434 = (function (cicoll,f,val){
var val__8427 = val;
var n__8428 = 0;

while(true){
if(cljs.core.truth_((n__8428 < cljs.core._count.call(null,cicoll))))
{{
var G__8440 = f.call(null,val__8427,cljs.core._nth.call(null,cicoll,n__8428));
var G__8441 = (n__8428 + 1);
val__8427 = G__8440;
n__8428 = G__8441;
continue;
}
} else
{return val__8427;
}
break;
}
});
var ci_reduce__8435 = (function (cicoll,f,val,idx){
var val__8430 = val;
var n__8431 = idx;

while(true){
if(cljs.core.truth_((n__8431 < cljs.core._count.call(null,cicoll))))
{{
var G__8442 = f.call(null,val__8430,cljs.core._nth.call(null,cicoll,n__8431));
var G__8443 = (n__8431 + 1);
val__8430 = G__8442;
n__8431 = G__8443;
continue;
}
} else
{return val__8430;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8433.call(this,cicoll,f);
case  3 :
return ci_reduce__8434.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8435.call(this,cicoll,f,val,idx);
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
var this__8444 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8462 = null;
var G__8462__8463 = (function (_,f){
var this__8445 = this;
return cljs.core.ci_reduce.call(null,this__8445.a,f,(this__8445.a[this__8445.i]),(this__8445.i + 1));
});
var G__8462__8464 = (function (_,f,start){
var this__8446 = this;
return cljs.core.ci_reduce.call(null,this__8446.a,f,start,this__8446.i);
});
G__8462 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8462__8463.call(this,_,f);
case  3 :
return G__8462__8464.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8462;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8447 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8448 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8469 = null;
var G__8469__8470 = (function (coll,n){
var this__8449 = this;
var i__8450 = (n + this__8449.i);

if(cljs.core.truth_((i__8450 < this__8449.a.length)))
{return (this__8449.a[i__8450]);
} else
{return null;
}
});
var G__8469__8471 = (function (coll,n,not_found){
var this__8452 = this;
var i__8453 = (n + this__8452.i);

if(cljs.core.truth_((i__8453 < this__8452.a.length)))
{return (this__8452.a[i__8453]);
} else
{return not_found;
}
});
G__8469 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8469__8470.call(this,coll,n);
case  3 :
return G__8469__8471.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8469;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8454 = this;
return (this__8454.a.length - this__8454.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8457 = this;
return (this__8457.a[this__8457.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8458 = this;
if(cljs.core.truth_(((this__8458.i + 1) < this__8458.a.length)))
{return (new cljs.core.IndexedSeq(this__8458.a,(this__8458.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8461 = this;
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
var G__8492 = null;
var G__8492__8493 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8492__8494 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8492 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8492__8493.call(this,array,f);
case  3 :
return G__8492__8494.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8492;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8497 = null;
var G__8497__8498 = (function (array,k){
return (array[k]);
});
var G__8497__8499 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8497 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8497__8498.call(this,array,k);
case  3 :
return G__8497__8499.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8497;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8501 = null;
var G__8501__8502 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8501__8503 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8501 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8501__8502.call(this,array,n);
case  3 :
return G__8501__8503.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8501;
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
var temp__3698__auto____8533 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8533))
{var s__8535 = temp__3698__auto____8533;

return cljs.core._first.call(null,s__8535);
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
var G__8576 = cljs.core.next.call(null,s);
s = G__8576;
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
var s__8588 = cljs.core.seq.call(null,x);
var n__8589 = 0;

while(true){
if(cljs.core.truth_(s__8588))
{{
var G__8591 = cljs.core.next.call(null,s__8588);
var G__8592 = (n__8589 + 1);
s__8588 = G__8591;
n__8589 = G__8592;
continue;
}
} else
{return n__8589;
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
var conj__8611 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8612 = (function() { 
var G__8618__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8619 = conj.call(null,coll,x);
var G__8620 = cljs.core.first.call(null,xs);
var G__8621 = cljs.core.next.call(null,xs);
coll = G__8619;
x = G__8620;
xs = G__8621;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8618 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8618__delegate.call(this, coll, x, xs);
};
G__8618.cljs$lang$maxFixedArity = 2;
G__8618.cljs$lang$applyTo = (function (arglist__8623){
var coll = cljs.core.first(arglist__8623);
var x = cljs.core.first(cljs.core.next(arglist__8623));
var xs = cljs.core.rest(cljs.core.next(arglist__8623));
return G__8618__delegate.call(this, coll, x, xs);
});
return G__8618;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8611.call(this,coll,x);
default:
return conj__8612.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8612.cljs$lang$applyTo;
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
var nth__8637 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8638 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8637.call(this,coll,n);
case  3 :
return nth__8638.call(this,coll,n,not_found);
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
var get__8661 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8662 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8661.call(this,o,k);
case  3 :
return get__8662.call(this,o,k,not_found);
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
var assoc__8681 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8682 = (function() { 
var G__8684__delegate = function (coll,k,v,kvs){
while(true){
var ret__8678 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8687 = ret__8678;
var G__8688 = cljs.core.first.call(null,kvs);
var G__8689 = cljs.core.second.call(null,kvs);
var G__8690 = cljs.core.nnext.call(null,kvs);
coll = G__8687;
k = G__8688;
v = G__8689;
kvs = G__8690;
continue;
}
} else
{return ret__8678;
}
break;
}
};
var G__8684 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8684__delegate.call(this, coll, k, v, kvs);
};
G__8684.cljs$lang$maxFixedArity = 3;
G__8684.cljs$lang$applyTo = (function (arglist__8693){
var coll = cljs.core.first(arglist__8693);
var k = cljs.core.first(cljs.core.next(arglist__8693));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8693)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8693)));
return G__8684__delegate.call(this, coll, k, v, kvs);
});
return G__8684;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8681.call(this,coll,k,v);
default:
return assoc__8682.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8682.cljs$lang$applyTo;
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
var dissoc__8708 = (function (coll){
return coll;
});
var dissoc__8710 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8711 = (function() { 
var G__8714__delegate = function (coll,k,ks){
while(true){
var ret__8706 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8716 = ret__8706;
var G__8717 = cljs.core.first.call(null,ks);
var G__8718 = cljs.core.next.call(null,ks);
coll = G__8716;
k = G__8717;
ks = G__8718;
continue;
}
} else
{return ret__8706;
}
break;
}
};
var G__8714 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8714__delegate.call(this, coll, k, ks);
};
G__8714.cljs$lang$maxFixedArity = 2;
G__8714.cljs$lang$applyTo = (function (arglist__8721){
var coll = cljs.core.first(arglist__8721);
var k = cljs.core.first(cljs.core.next(arglist__8721));
var ks = cljs.core.rest(cljs.core.next(arglist__8721));
return G__8714__delegate.call(this, coll, k, ks);
});
return G__8714;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8708.call(this,coll);
case  2 :
return dissoc__8710.call(this,coll,k);
default:
return dissoc__8711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8711.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8730 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8731 = x__445__auto____8730;

if(cljs.core.truth_(and__3546__auto____8731))
{var and__3546__auto____8733 = x__445__auto____8730.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8733))
{return cljs.core.not.call(null,x__445__auto____8730.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8733;
}
} else
{return and__3546__auto____8731;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8730);
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
var disj__8750 = (function (coll){
return coll;
});
var disj__8751 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8752 = (function() { 
var G__8754__delegate = function (coll,k,ks){
while(true){
var ret__8747 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8755 = ret__8747;
var G__8756 = cljs.core.first.call(null,ks);
var G__8757 = cljs.core.next.call(null,ks);
coll = G__8755;
k = G__8756;
ks = G__8757;
continue;
}
} else
{return ret__8747;
}
break;
}
};
var G__8754 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8754__delegate.call(this, coll, k, ks);
};
G__8754.cljs$lang$maxFixedArity = 2;
G__8754.cljs$lang$applyTo = (function (arglist__8758){
var coll = cljs.core.first(arglist__8758);
var k = cljs.core.first(cljs.core.next(arglist__8758));
var ks = cljs.core.rest(cljs.core.next(arglist__8758));
return G__8754__delegate.call(this, coll, k, ks);
});
return G__8754;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8750.call(this,coll);
case  2 :
return disj__8751.call(this,coll,k);
default:
return disj__8752.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8752.cljs$lang$applyTo;
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
{var x__445__auto____8779 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8780 = x__445__auto____8779;

if(cljs.core.truth_(and__3546__auto____8780))
{var and__3546__auto____8782 = x__445__auto____8779.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8782))
{return cljs.core.not.call(null,x__445__auto____8779.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8782;
}
} else
{return and__3546__auto____8780;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8779);
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
{var x__445__auto____8789 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8791 = x__445__auto____8789;

if(cljs.core.truth_(and__3546__auto____8791))
{var and__3546__auto____8793 = x__445__auto____8789.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8793))
{return cljs.core.not.call(null,x__445__auto____8789.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8793;
}
} else
{return and__3546__auto____8791;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8789);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8798 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8800 = x__445__auto____8798;

if(cljs.core.truth_(and__3546__auto____8800))
{var and__3546__auto____8802 = x__445__auto____8798.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8802))
{return cljs.core.not.call(null,x__445__auto____8798.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8802;
}
} else
{return and__3546__auto____8800;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8798);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8811 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8812 = x__445__auto____8811;

if(cljs.core.truth_(and__3546__auto____8812))
{var and__3546__auto____8813 = x__445__auto____8811.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8813))
{return cljs.core.not.call(null,x__445__auto____8811.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8813;
}
} else
{return and__3546__auto____8812;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8811);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8832 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8833 = x__445__auto____8832;

if(cljs.core.truth_(and__3546__auto____8833))
{var and__3546__auto____8834 = x__445__auto____8832.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8834))
{return cljs.core.not.call(null,x__445__auto____8832.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8834;
}
} else
{return and__3546__auto____8833;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8832);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8841 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8842 = x__445__auto____8841;

if(cljs.core.truth_(and__3546__auto____8842))
{var and__3546__auto____8843 = x__445__auto____8841.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8843))
{return cljs.core.not.call(null,x__445__auto____8841.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8843;
}
} else
{return and__3546__auto____8842;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8841);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8846 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8847 = x__445__auto____8846;

if(cljs.core.truth_(and__3546__auto____8847))
{var and__3546__auto____8850 = x__445__auto____8846.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8850))
{return cljs.core.not.call(null,x__445__auto____8846.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8850;
}
} else
{return and__3546__auto____8847;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8846);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8853 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8853.push(key);
}));
return keys__8853;
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
{var x__445__auto____8859 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8860 = x__445__auto____8859;

if(cljs.core.truth_(and__3546__auto____8860))
{var and__3546__auto____8862 = x__445__auto____8859.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8862))
{return cljs.core.not.call(null,x__445__auto____8859.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8862;
}
} else
{return and__3546__auto____8860;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8859);
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
var and__3546__auto____8866 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8866))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8867 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8867))
{return or__3548__auto____8867;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8866;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8872 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8872))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8872;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8878 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8878))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8878;
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
var and__3546__auto____9043 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____9043))
{return (n == n.toFixed());
} else
{return and__3546__auto____9043;
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
if(cljs.core.truth_((function (){var and__3546__auto____9051 = coll;

if(cljs.core.truth_(and__3546__auto____9051))
{var and__3546__auto____9052 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9052))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9052;
}
} else
{return and__3546__auto____9051;
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
var distinct_QMARK___9067 = (function (x){
return true;
});
var distinct_QMARK___9068 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9069 = (function() { 
var G__9075__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9060 = cljs.core.set([y,x]);
var xs__9061 = more;

while(true){
var x__9062 = cljs.core.first.call(null,xs__9061);
var etc__9063 = cljs.core.next.call(null,xs__9061);

if(cljs.core.truth_(xs__9061))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9060,x__9062)))
{return false;
} else
{{
var G__9077 = cljs.core.conj.call(null,s__9060,x__9062);
var G__9078 = etc__9063;
s__9060 = G__9077;
xs__9061 = G__9078;
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
var G__9075 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9075__delegate.call(this, x, y, more);
};
G__9075.cljs$lang$maxFixedArity = 2;
G__9075.cljs$lang$applyTo = (function (arglist__9085){
var x = cljs.core.first(arglist__9085);
var y = cljs.core.first(cljs.core.next(arglist__9085));
var more = cljs.core.rest(cljs.core.next(arglist__9085));
return G__9075__delegate.call(this, x, y, more);
});
return G__9075;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9067.call(this,x);
case  2 :
return distinct_QMARK___9068.call(this,x,y);
default:
return distinct_QMARK___9069.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9069.cljs$lang$applyTo;
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
var r__9092 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9092)))
{return r__9092;
} else
{if(cljs.core.truth_(r__9092))
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
var sort__9111 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9112 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9104 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9104,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9104);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9111.call(this,comp);
case  2 :
return sort__9112.call(this,comp,coll);
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
var sort_by__9123 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9124 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9123.call(this,keyfn,comp);
case  3 :
return sort_by__9124.call(this,keyfn,comp,coll);
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
var reduce__9132 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9133 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9132.call(this,f,val);
case  3 :
return reduce__9133.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9202 = (function (f,coll){
var temp__3695__auto____9197 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9197))
{var s__9198 = temp__3695__auto____9197;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9198),cljs.core.next.call(null,s__9198));
} else
{return f.call(null);
}
});
var seq_reduce__9203 = (function (f,val,coll){
var val__9200 = val;
var coll__9201 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9201))
{{
var G__9216 = f.call(null,val__9200,cljs.core.first.call(null,coll__9201));
var G__9217 = cljs.core.next.call(null,coll__9201);
val__9200 = G__9216;
coll__9201 = G__9217;
continue;
}
} else
{return val__9200;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9202.call(this,f,val);
case  3 :
return seq_reduce__9203.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9229 = null;
var G__9229__9230 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9229__9231 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9229 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9229__9230.call(this,coll,f);
case  3 :
return G__9229__9231.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9229;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9250 = (function (){
return 0;
});
var _PLUS___9251 = (function (x){
return x;
});
var _PLUS___9252 = (function (x,y){
return (x + y);
});
var _PLUS___9253 = (function() { 
var G__9261__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9261 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9261__delegate.call(this, x, y, more);
};
G__9261.cljs$lang$maxFixedArity = 2;
G__9261.cljs$lang$applyTo = (function (arglist__9264){
var x = cljs.core.first(arglist__9264);
var y = cljs.core.first(cljs.core.next(arglist__9264));
var more = cljs.core.rest(cljs.core.next(arglist__9264));
return G__9261__delegate.call(this, x, y, more);
});
return G__9261;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9250.call(this);
case  1 :
return _PLUS___9251.call(this,x);
case  2 :
return _PLUS___9252.call(this,x,y);
default:
return _PLUS___9253.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9253.cljs$lang$applyTo;
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
var ___9273 = (function (x){
return (- x);
});
var ___9274 = (function (x,y){
return (x - y);
});
var ___9275 = (function() { 
var G__9284__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9284 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9284__delegate.call(this, x, y, more);
};
G__9284.cljs$lang$maxFixedArity = 2;
G__9284.cljs$lang$applyTo = (function (arglist__9286){
var x = cljs.core.first(arglist__9286);
var y = cljs.core.first(cljs.core.next(arglist__9286));
var more = cljs.core.rest(cljs.core.next(arglist__9286));
return G__9284__delegate.call(this, x, y, more);
});
return G__9284;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9273.call(this,x);
case  2 :
return ___9274.call(this,x,y);
default:
return ___9275.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9275.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9295 = (function (){
return 1;
});
var _STAR___9296 = (function (x){
return x;
});
var _STAR___9297 = (function (x,y){
return (x * y);
});
var _STAR___9298 = (function() { 
var G__9304__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9304 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9304__delegate.call(this, x, y, more);
};
G__9304.cljs$lang$maxFixedArity = 2;
G__9304.cljs$lang$applyTo = (function (arglist__9306){
var x = cljs.core.first(arglist__9306);
var y = cljs.core.first(cljs.core.next(arglist__9306));
var more = cljs.core.rest(cljs.core.next(arglist__9306));
return G__9304__delegate.call(this, x, y, more);
});
return G__9304;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9295.call(this);
case  1 :
return _STAR___9296.call(this,x);
case  2 :
return _STAR___9297.call(this,x,y);
default:
return _STAR___9298.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9298.cljs$lang$applyTo;
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
var _SLASH___9313 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9314 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9315 = (function() { 
var G__9321__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9321 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9321__delegate.call(this, x, y, more);
};
G__9321.cljs$lang$maxFixedArity = 2;
G__9321.cljs$lang$applyTo = (function (arglist__9327){
var x = cljs.core.first(arglist__9327);
var y = cljs.core.first(cljs.core.next(arglist__9327));
var more = cljs.core.rest(cljs.core.next(arglist__9327));
return G__9321__delegate.call(this, x, y, more);
});
return G__9321;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9313.call(this,x);
case  2 :
return _SLASH___9314.call(this,x,y);
default:
return _SLASH___9315.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9315.cljs$lang$applyTo;
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
var _LT___9334 = (function (x){
return true;
});
var _LT___9335 = (function (x,y){
return (x < y);
});
var _LT___9336 = (function() { 
var G__9341__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9343 = y;
var G__9344 = cljs.core.first.call(null,more);
var G__9345 = cljs.core.next.call(null,more);
x = G__9343;
y = G__9344;
more = G__9345;
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
var G__9341 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9341__delegate.call(this, x, y, more);
};
G__9341.cljs$lang$maxFixedArity = 2;
G__9341.cljs$lang$applyTo = (function (arglist__9350){
var x = cljs.core.first(arglist__9350);
var y = cljs.core.first(cljs.core.next(arglist__9350));
var more = cljs.core.rest(cljs.core.next(arglist__9350));
return G__9341__delegate.call(this, x, y, more);
});
return G__9341;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9334.call(this,x);
case  2 :
return _LT___9335.call(this,x,y);
default:
return _LT___9336.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9336.cljs$lang$applyTo;
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
var _LT__EQ___9354 = (function (x){
return true;
});
var _LT__EQ___9355 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9356 = (function() { 
var G__9358__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9359 = y;
var G__9360 = cljs.core.first.call(null,more);
var G__9361 = cljs.core.next.call(null,more);
x = G__9359;
y = G__9360;
more = G__9361;
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
var G__9358 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9358__delegate.call(this, x, y, more);
};
G__9358.cljs$lang$maxFixedArity = 2;
G__9358.cljs$lang$applyTo = (function (arglist__9369){
var x = cljs.core.first(arglist__9369);
var y = cljs.core.first(cljs.core.next(arglist__9369));
var more = cljs.core.rest(cljs.core.next(arglist__9369));
return G__9358__delegate.call(this, x, y, more);
});
return G__9358;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9354.call(this,x);
case  2 :
return _LT__EQ___9355.call(this,x,y);
default:
return _LT__EQ___9356.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9356.cljs$lang$applyTo;
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
var _GT___9372 = (function (x){
return true;
});
var _GT___9373 = (function (x,y){
return (x > y);
});
var _GT___9374 = (function() { 
var G__9380__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9381 = y;
var G__9382 = cljs.core.first.call(null,more);
var G__9383 = cljs.core.next.call(null,more);
x = G__9381;
y = G__9382;
more = G__9383;
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
var G__9380 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9380__delegate.call(this, x, y, more);
};
G__9380.cljs$lang$maxFixedArity = 2;
G__9380.cljs$lang$applyTo = (function (arglist__9435){
var x = cljs.core.first(arglist__9435);
var y = cljs.core.first(cljs.core.next(arglist__9435));
var more = cljs.core.rest(cljs.core.next(arglist__9435));
return G__9380__delegate.call(this, x, y, more);
});
return G__9380;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9372.call(this,x);
case  2 :
return _GT___9373.call(this,x,y);
default:
return _GT___9374.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9374.cljs$lang$applyTo;
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
var _GT__EQ___9437 = (function (x){
return true;
});
var _GT__EQ___9438 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9439 = (function() { 
var G__9442__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9443 = y;
var G__9444 = cljs.core.first.call(null,more);
var G__9445 = cljs.core.next.call(null,more);
x = G__9443;
y = G__9444;
more = G__9445;
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
var G__9442 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9442__delegate.call(this, x, y, more);
};
G__9442.cljs$lang$maxFixedArity = 2;
G__9442.cljs$lang$applyTo = (function (arglist__9446){
var x = cljs.core.first(arglist__9446);
var y = cljs.core.first(cljs.core.next(arglist__9446));
var more = cljs.core.rest(cljs.core.next(arglist__9446));
return G__9442__delegate.call(this, x, y, more);
});
return G__9442;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9437.call(this,x);
case  2 :
return _GT__EQ___9438.call(this,x,y);
default:
return _GT__EQ___9439.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9439.cljs$lang$applyTo;
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
var max__9450 = (function (x){
return x;
});
var max__9451 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9452 = (function() { 
var G__9454__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9454 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9454__delegate.call(this, x, y, more);
};
G__9454.cljs$lang$maxFixedArity = 2;
G__9454.cljs$lang$applyTo = (function (arglist__9455){
var x = cljs.core.first(arglist__9455);
var y = cljs.core.first(cljs.core.next(arglist__9455));
var more = cljs.core.rest(cljs.core.next(arglist__9455));
return G__9454__delegate.call(this, x, y, more);
});
return G__9454;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9450.call(this,x);
case  2 :
return max__9451.call(this,x,y);
default:
return max__9452.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9452.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9456 = (function (x){
return x;
});
var min__9457 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9458 = (function() { 
var G__9460__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9460 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9460__delegate.call(this, x, y, more);
};
G__9460.cljs$lang$maxFixedArity = 2;
G__9460.cljs$lang$applyTo = (function (arglist__9461){
var x = cljs.core.first(arglist__9461);
var y = cljs.core.first(cljs.core.next(arglist__9461));
var more = cljs.core.rest(cljs.core.next(arglist__9461));
return G__9460__delegate.call(this, x, y, more);
});
return G__9460;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9456.call(this,x);
case  2 :
return min__9457.call(this,x,y);
default:
return min__9458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9458.cljs$lang$applyTo;
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
var rem__9462 = (n % d);

return cljs.core.fix.call(null,((n - rem__9462) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9469 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9469));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9473 = (function (){
return Math.random.call(null);
});
var rand__9474 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9473.call(this);
case  1 :
return rand__9474.call(this,n);
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
var _EQ__EQ___9560 = (function (x){
return true;
});
var _EQ__EQ___9561 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9562 = (function() { 
var G__9564__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9568 = y;
var G__9569 = cljs.core.first.call(null,more);
var G__9570 = cljs.core.next.call(null,more);
x = G__9568;
y = G__9569;
more = G__9570;
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
var G__9564 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9564__delegate.call(this, x, y, more);
};
G__9564.cljs$lang$maxFixedArity = 2;
G__9564.cljs$lang$applyTo = (function (arglist__9571){
var x = cljs.core.first(arglist__9571);
var y = cljs.core.first(cljs.core.next(arglist__9571));
var more = cljs.core.rest(cljs.core.next(arglist__9571));
return G__9564__delegate.call(this, x, y, more);
});
return G__9564;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9560.call(this,x);
case  2 :
return _EQ__EQ___9561.call(this,x,y);
default:
return _EQ__EQ___9562.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9562.cljs$lang$applyTo;
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
var n__9585 = n;
var xs__9586 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9591 = xs__9586;

if(cljs.core.truth_(and__3546__auto____9591))
{return (n__9585 > 0);
} else
{return and__3546__auto____9591;
}
})()))
{{
var G__9596 = (n__9585 - 1);
var G__9597 = cljs.core.next.call(null,xs__9586);
n__9585 = G__9596;
xs__9586 = G__9597;
continue;
}
} else
{return xs__9586;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9610 = null;
var G__9610__9613 = (function (coll,n){
var temp__3695__auto____9600 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9600))
{var xs__9604 = temp__3695__auto____9600;

return cljs.core.first.call(null,xs__9604);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9610__9614 = (function (coll,n,not_found){
var temp__3695__auto____9608 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9608))
{var xs__9609 = temp__3695__auto____9608;

return cljs.core.first.call(null,xs__9609);
} else
{return not_found;
}
});
G__9610 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9610__9613.call(this,coll,n);
case  3 :
return G__9610__9614.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9610;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9624 = (function (){
return "";
});
var str_STAR___9625 = (function (x){
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
var str_STAR___9626 = (function() { 
var G__9634__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9635 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9636 = cljs.core.next.call(null,more);
sb = G__9635;
more = G__9636;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9634 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9634__delegate.call(this, x, ys);
};
G__9634.cljs$lang$maxFixedArity = 1;
G__9634.cljs$lang$applyTo = (function (arglist__9639){
var x = cljs.core.first(arglist__9639);
var ys = cljs.core.rest(arglist__9639);
return G__9634__delegate.call(this, x, ys);
});
return G__9634;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9624.call(this);
case  1 :
return str_STAR___9625.call(this,x);
default:
return str_STAR___9626.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9626.cljs$lang$applyTo;
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
var str__9668 = (function (){
return "";
});
var str__9669 = (function (x){
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
var str__9670 = (function() { 
var G__9676__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9676 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9676__delegate.call(this, x, ys);
};
G__9676.cljs$lang$maxFixedArity = 1;
G__9676.cljs$lang$applyTo = (function (arglist__9679){
var x = cljs.core.first(arglist__9679);
var ys = cljs.core.rest(arglist__9679);
return G__9676__delegate.call(this, x, ys);
});
return G__9676;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9668.call(this);
case  1 :
return str__9669.call(this,x);
default:
return str__9670.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9670.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9688 = (function (s,start){
return s.substring(start);
});
var subs__9689 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9688.call(this,s,start);
case  3 :
return subs__9689.call(this,s,start,end);
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
var symbol__9693 = (function (name){
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
var symbol__9694 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9693.call(this,ns);
case  2 :
return symbol__9694.call(this,ns,name);
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
var keyword__9715 = (function (name){
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
var keyword__9716 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9715.call(this,ns);
case  2 :
return keyword__9716.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9731 = cljs.core.seq.call(null,x);
var ys__9734 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9731)))
{return cljs.core.nil_QMARK_.call(null,ys__9734);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9734)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9731),cljs.core.first.call(null,ys__9734))))
{{
var G__9742 = cljs.core.next.call(null,xs__9731);
var G__9743 = cljs.core.next.call(null,ys__9734);
xs__9731 = G__9742;
ys__9734 = G__9743;
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
return cljs.core.reduce.call(null,(function (p1__9744_SHARP_,p2__9747_SHARP_){
return cljs.core.hash_combine.call(null,p1__9744_SHARP_,cljs.core.hash.call(null,p2__9747_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9850__9852 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9850__9852))
{var G__9855__9858 = cljs.core.first.call(null,G__9850__9852);
var vec__9857__9859 = G__9855__9858;
var key_name__9860 = cljs.core.nth.call(null,vec__9857__9859,0,null);
var f__9861 = cljs.core.nth.call(null,vec__9857__9859,1,null);
var G__9850__9863 = G__9850__9852;

var G__9855__9864 = G__9855__9858;
var G__9850__9865 = G__9850__9863;

while(true){
var vec__9866__9867 = G__9855__9864;
var key_name__9869 = cljs.core.nth.call(null,vec__9866__9867,0,null);
var f__9870 = cljs.core.nth.call(null,vec__9866__9867,1,null);
var G__9850__9871 = G__9850__9865;

var str_name__9873 = cljs.core.name.call(null,key_name__9869);

obj[str_name__9873] = f__9870;
var temp__3698__auto____9875 = cljs.core.next.call(null,G__9850__9871);

if(cljs.core.truth_(temp__3698__auto____9875))
{var G__9850__9878 = temp__3698__auto____9875;

{
var G__9887 = cljs.core.first.call(null,G__9850__9878);
var G__9888 = G__9850__9878;
G__9855__9864 = G__9887;
G__9850__9865 = G__9888;
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
var this__9891 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9892 = this;
return (new cljs.core.List(this__9892.meta,o,coll,(this__9892.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9893 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9894 = this;
return this__9894.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9924 = this;
return this__9924.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9926 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9928 = this;
return this__9928.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9930 = this;
return this__9930.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9932 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9935 = this;
return (new cljs.core.List(meta,this__9935.first,this__9935.rest,this__9935.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9938 = this;
return this__9938.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9940 = this;
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
var this__9952 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9954 = this;
return (new cljs.core.List(this__9954.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10021 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10022 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10023 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10024 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10025 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10026 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10027 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10028 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10031 = this;
return this__10031.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10034 = this;
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
list.cljs$lang$applyTo = (function (arglist__10045){
var items = cljs.core.seq( arglist__10045 );;
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
var this__10052 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10054 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10056 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10059 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10059.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10064 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10066 = this;
return this__10066.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10068 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10068.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10068.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10069 = this;
return this__10069.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10073 = this;
return (new cljs.core.Cons(meta,this__10073.first,this__10073.rest));
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
var G__10205 = null;
var G__10205__10208 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10205__10209 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10205 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10205__10208.call(this,string,f);
case  3 :
return G__10205__10209.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10205;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10213 = null;
var G__10213__10214 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10213__10215 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10213 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10213__10214.call(this,string,k);
case  3 :
return G__10213__10215.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10213;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10218 = null;
var G__10218__10219 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10218__10221 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10218 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10218__10219.call(this,string,n);
case  3 :
return G__10218__10221.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10218;
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
var G__10229 = null;
var G__10229__10230 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10229__10231 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10229 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10229__10230.call(this,this$,coll);
case  3 :
return G__10229__10231.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10229;
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
var x__10234 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10234;
} else
{lazy_seq.x = x__10234.call(null);
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
var this__10244 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10246 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10247 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10249 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10249.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10304 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10305 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10306 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10313 = this;
return this__10313.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10314 = this;
return (new cljs.core.LazySeq(meta,this__10314.realized,this__10314.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10319 = cljs.core.array.call(null);

var s__10320 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10320)))
{ary__10319.push(cljs.core.first.call(null,s__10320));
{
var G__10322 = cljs.core.next.call(null,s__10320);
s__10320 = G__10322;
continue;
}
} else
{return ary__10319;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10328 = s;
var i__10329 = n;
var sum__10331 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10332 = (i__10329 > 0);

if(cljs.core.truth_(and__3546__auto____10332))
{return cljs.core.seq.call(null,s__10328);
} else
{return and__3546__auto____10332;
}
})()))
{{
var G__10338 = cljs.core.next.call(null,s__10328);
var G__10339 = (i__10329 - 1);
var G__10340 = (sum__10331 + 1);
s__10328 = G__10338;
i__10329 = G__10339;
sum__10331 = G__10340;
continue;
}
} else
{return sum__10331;
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
var concat__10362 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10363 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10364 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10347 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10347))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10347),concat.call(null,cljs.core.rest.call(null,s__10347),y));
} else
{return y;
}
})));
});
var concat__10365 = (function() { 
var G__10370__delegate = function (x,y,zs){
var cat__10355 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10349 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10349))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10349),cat.call(null,cljs.core.rest.call(null,xys__10349),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10355.call(null,concat.call(null,x,y),zs);
};
var G__10370 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10370__delegate.call(this, x, y, zs);
};
G__10370.cljs$lang$maxFixedArity = 2;
G__10370.cljs$lang$applyTo = (function (arglist__10374){
var x = cljs.core.first(arglist__10374);
var y = cljs.core.first(cljs.core.next(arglist__10374));
var zs = cljs.core.rest(cljs.core.next(arglist__10374));
return G__10370__delegate.call(this, x, y, zs);
});
return G__10370;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10362.call(this);
case  1 :
return concat__10363.call(this,x);
case  2 :
return concat__10364.call(this,x,y);
default:
return concat__10365.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10365.cljs$lang$applyTo;
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
var list_STAR___10379 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10380 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10381 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10382 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10383 = (function() { 
var G__10391__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10391 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10391__delegate.call(this, a, b, c, d, more);
};
G__10391.cljs$lang$maxFixedArity = 4;
G__10391.cljs$lang$applyTo = (function (arglist__10405){
var a = cljs.core.first(arglist__10405);
var b = cljs.core.first(cljs.core.next(arglist__10405));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10405)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10405))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10405))));
return G__10391__delegate.call(this, a, b, c, d, more);
});
return G__10391;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10379.call(this,a);
case  2 :
return list_STAR___10380.call(this,a,b);
case  3 :
return list_STAR___10381.call(this,a,b,c);
case  4 :
return list_STAR___10382.call(this,a,b,c,d);
default:
return list_STAR___10383.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10383.cljs$lang$applyTo;
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
var apply__10452 = (function (f,args){
var fixed_arity__10410 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10410 + 1)) <= fixed_arity__10410)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10453 = (function (f,x,args){
var arglist__10420 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10422 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10420,fixed_arity__10422) <= fixed_arity__10422)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10420));
} else
{return f.cljs$lang$applyTo(arglist__10420);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10420));
}
});
var apply__10454 = (function (f,x,y,args){
var arglist__10424 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10426 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10424,fixed_arity__10426) <= fixed_arity__10426)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10424));
} else
{return f.cljs$lang$applyTo(arglist__10424);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10424));
}
});
var apply__10455 = (function (f,x,y,z,args){
var arglist__10430 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10432 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10430,fixed_arity__10432) <= fixed_arity__10432)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10430));
} else
{return f.cljs$lang$applyTo(arglist__10430);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10430));
}
});
var apply__10456 = (function() { 
var G__10461__delegate = function (f,a,b,c,d,args){
var arglist__10437 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10438 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10437,fixed_arity__10438) <= fixed_arity__10438)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10437));
} else
{return f.cljs$lang$applyTo(arglist__10437);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10437));
}
};
var G__10461 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10461__delegate.call(this, f, a, b, c, d, args);
};
G__10461.cljs$lang$maxFixedArity = 5;
G__10461.cljs$lang$applyTo = (function (arglist__10462){
var f = cljs.core.first(arglist__10462);
var a = cljs.core.first(cljs.core.next(arglist__10462));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10462)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10462))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10462)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10462)))));
return G__10461__delegate.call(this, f, a, b, c, d, args);
});
return G__10461;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10452.call(this,f,a);
case  3 :
return apply__10453.call(this,f,a,b);
case  4 :
return apply__10454.call(this,f,a,b,c);
case  5 :
return apply__10455.call(this,f,a,b,c,d);
default:
return apply__10456.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10456.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10463){
var obj = cljs.core.first(arglist__10463);
var f = cljs.core.first(cljs.core.next(arglist__10463));
var args = cljs.core.rest(cljs.core.next(arglist__10463));
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
{var or__3548__auto____10586 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10586))
{return or__3548__auto____10586;
} else
{{
var G__10589 = pred;
var G__10590 = cljs.core.next.call(null,coll);
pred = G__10589;
coll = G__10590;
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
var G__10626 = null;
var G__10626__10627 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10626__10628 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10626__10629 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10626__10630 = (function() { 
var G__10633__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10633 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10633__delegate.call(this, x, y, zs);
};
G__10633.cljs$lang$maxFixedArity = 2;
G__10633.cljs$lang$applyTo = (function (arglist__10635){
var x = cljs.core.first(arglist__10635);
var y = cljs.core.first(cljs.core.next(arglist__10635));
var zs = cljs.core.rest(cljs.core.next(arglist__10635));
return G__10633__delegate.call(this, x, y, zs);
});
return G__10633;
})()
;
G__10626 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10626__10627.call(this);
case  1 :
return G__10626__10628.call(this,x);
case  2 :
return G__10626__10629.call(this,x,y);
default:
return G__10626__10630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10626.cljs$lang$maxFixedArity = 2;
G__10626.cljs$lang$applyTo = G__10626__10630.cljs$lang$applyTo;
return G__10626;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10686__delegate = function (args){
return x;
};
var G__10686 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10686__delegate.call(this, args);
};
G__10686.cljs$lang$maxFixedArity = 0;
G__10686.cljs$lang$applyTo = (function (arglist__10688){
var args = cljs.core.seq( arglist__10688 );;
return G__10686__delegate.call(this, args);
});
return G__10686;
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
var comp__10722 = (function (){
return cljs.core.identity;
});
var comp__10723 = (function (f){
return f;
});
var comp__10724 = (function (f,g){
return (function() {
var G__10728 = null;
var G__10728__10729 = (function (){
return f.call(null,g.call(null));
});
var G__10728__10730 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10728__10731 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10728__10732 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10728__10733 = (function() { 
var G__10737__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10737 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10737__delegate.call(this, x, y, z, args);
};
G__10737.cljs$lang$maxFixedArity = 3;
G__10737.cljs$lang$applyTo = (function (arglist__10745){
var x = cljs.core.first(arglist__10745);
var y = cljs.core.first(cljs.core.next(arglist__10745));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10745)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10745)));
return G__10737__delegate.call(this, x, y, z, args);
});
return G__10737;
})()
;
G__10728 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10728__10729.call(this);
case  1 :
return G__10728__10730.call(this,x);
case  2 :
return G__10728__10731.call(this,x,y);
case  3 :
return G__10728__10732.call(this,x,y,z);
default:
return G__10728__10733.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10728.cljs$lang$maxFixedArity = 3;
G__10728.cljs$lang$applyTo = G__10728__10733.cljs$lang$applyTo;
return G__10728;
})()
});
var comp__10725 = (function (f,g,h){
return (function() {
var G__10746 = null;
var G__10746__10747 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10746__10748 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10746__10749 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10746__10750 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10746__10751 = (function() { 
var G__10758__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10758 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10758__delegate.call(this, x, y, z, args);
};
G__10758.cljs$lang$maxFixedArity = 3;
G__10758.cljs$lang$applyTo = (function (arglist__10762){
var x = cljs.core.first(arglist__10762);
var y = cljs.core.first(cljs.core.next(arglist__10762));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10762)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10762)));
return G__10758__delegate.call(this, x, y, z, args);
});
return G__10758;
})()
;
G__10746 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10746__10747.call(this);
case  1 :
return G__10746__10748.call(this,x);
case  2 :
return G__10746__10749.call(this,x,y);
case  3 :
return G__10746__10750.call(this,x,y,z);
default:
return G__10746__10751.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10746.cljs$lang$maxFixedArity = 3;
G__10746.cljs$lang$applyTo = G__10746__10751.cljs$lang$applyTo;
return G__10746;
})()
});
var comp__10726 = (function() { 
var G__10767__delegate = function (f1,f2,f3,fs){
var fs__10706 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10771__delegate = function (args){
var ret__10707 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10706),args);
var fs__10708 = cljs.core.next.call(null,fs__10706);

while(true){
if(cljs.core.truth_(fs__10708))
{{
var G__10773 = cljs.core.first.call(null,fs__10708).call(null,ret__10707);
var G__10774 = cljs.core.next.call(null,fs__10708);
ret__10707 = G__10773;
fs__10708 = G__10774;
continue;
}
} else
{return ret__10707;
}
break;
}
};
var G__10771 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10771__delegate.call(this, args);
};
G__10771.cljs$lang$maxFixedArity = 0;
G__10771.cljs$lang$applyTo = (function (arglist__10775){
var args = cljs.core.seq( arglist__10775 );;
return G__10771__delegate.call(this, args);
});
return G__10771;
})()
;
};
var G__10767 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10767__delegate.call(this, f1, f2, f3, fs);
};
G__10767.cljs$lang$maxFixedArity = 3;
G__10767.cljs$lang$applyTo = (function (arglist__10776){
var f1 = cljs.core.first(arglist__10776);
var f2 = cljs.core.first(cljs.core.next(arglist__10776));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10776)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10776)));
return G__10767__delegate.call(this, f1, f2, f3, fs);
});
return G__10767;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10722.call(this);
case  1 :
return comp__10723.call(this,f1);
case  2 :
return comp__10724.call(this,f1,f2);
case  3 :
return comp__10725.call(this,f1,f2,f3);
default:
return comp__10726.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10726.cljs$lang$applyTo;
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
var partial__10779 = (function (f,arg1){
return (function() { 
var G__10790__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10790 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10790__delegate.call(this, args);
};
G__10790.cljs$lang$maxFixedArity = 0;
G__10790.cljs$lang$applyTo = (function (arglist__10793){
var args = cljs.core.seq( arglist__10793 );;
return G__10790__delegate.call(this, args);
});
return G__10790;
})()
;
});
var partial__10781 = (function (f,arg1,arg2){
return (function() { 
var G__10795__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10795 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10795__delegate.call(this, args);
};
G__10795.cljs$lang$maxFixedArity = 0;
G__10795.cljs$lang$applyTo = (function (arglist__10797){
var args = cljs.core.seq( arglist__10797 );;
return G__10795__delegate.call(this, args);
});
return G__10795;
})()
;
});
var partial__10783 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10798__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10798 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10798__delegate.call(this, args);
};
G__10798.cljs$lang$maxFixedArity = 0;
G__10798.cljs$lang$applyTo = (function (arglist__10800){
var args = cljs.core.seq( arglist__10800 );;
return G__10798__delegate.call(this, args);
});
return G__10798;
})()
;
});
var partial__10786 = (function() { 
var G__10802__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10804__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10804 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10804__delegate.call(this, args);
};
G__10804.cljs$lang$maxFixedArity = 0;
G__10804.cljs$lang$applyTo = (function (arglist__10806){
var args = cljs.core.seq( arglist__10806 );;
return G__10804__delegate.call(this, args);
});
return G__10804;
})()
;
};
var G__10802 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10802__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10802.cljs$lang$maxFixedArity = 4;
G__10802.cljs$lang$applyTo = (function (arglist__10807){
var f = cljs.core.first(arglist__10807);
var arg1 = cljs.core.first(cljs.core.next(arglist__10807));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10807)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10807))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10807))));
return G__10802__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10802;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10779.call(this,f,arg1);
case  3 :
return partial__10781.call(this,f,arg1,arg2);
case  4 :
return partial__10783.call(this,f,arg1,arg2,arg3);
default:
return partial__10786.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10786.cljs$lang$applyTo;
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
var fnil__10977 = (function (f,x){
return (function() {
var G__10981 = null;
var G__10981__10982 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10981__10983 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10981__10984 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10981__10985 = (function() { 
var G__11012__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__11012 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11012__delegate.call(this, a, b, c, ds);
};
G__11012.cljs$lang$maxFixedArity = 3;
G__11012.cljs$lang$applyTo = (function (arglist__11015){
var a = cljs.core.first(arglist__11015);
var b = cljs.core.first(cljs.core.next(arglist__11015));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11015)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11015)));
return G__11012__delegate.call(this, a, b, c, ds);
});
return G__11012;
})()
;
G__10981 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10981__10982.call(this,a);
case  2 :
return G__10981__10983.call(this,a,b);
case  3 :
return G__10981__10984.call(this,a,b,c);
default:
return G__10981__10985.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10981.cljs$lang$maxFixedArity = 3;
G__10981.cljs$lang$applyTo = G__10981__10985.cljs$lang$applyTo;
return G__10981;
})()
});
var fnil__10978 = (function (f,x,y){
return (function() {
var G__11019 = null;
var G__11019__11022 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11019__11023 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11019__11024 = (function() { 
var G__11040__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11040 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11040__delegate.call(this, a, b, c, ds);
};
G__11040.cljs$lang$maxFixedArity = 3;
G__11040.cljs$lang$applyTo = (function (arglist__11042){
var a = cljs.core.first(arglist__11042);
var b = cljs.core.first(cljs.core.next(arglist__11042));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11042)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11042)));
return G__11040__delegate.call(this, a, b, c, ds);
});
return G__11040;
})()
;
G__11019 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11019__11022.call(this,a,b);
case  3 :
return G__11019__11023.call(this,a,b,c);
default:
return G__11019__11024.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11019.cljs$lang$maxFixedArity = 3;
G__11019.cljs$lang$applyTo = G__11019__11024.cljs$lang$applyTo;
return G__11019;
})()
});
var fnil__10979 = (function (f,x,y,z){
return (function() {
var G__11047 = null;
var G__11047__11048 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11047__11049 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11047__11050 = (function() { 
var G__11061__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11061 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11061__delegate.call(this, a, b, c, ds);
};
G__11061.cljs$lang$maxFixedArity = 3;
G__11061.cljs$lang$applyTo = (function (arglist__11065){
var a = cljs.core.first(arglist__11065);
var b = cljs.core.first(cljs.core.next(arglist__11065));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11065)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11065)));
return G__11061__delegate.call(this, a, b, c, ds);
});
return G__11061;
})()
;
G__11047 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11047__11048.call(this,a,b);
case  3 :
return G__11047__11049.call(this,a,b,c);
default:
return G__11047__11050.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11047.cljs$lang$maxFixedArity = 3;
G__11047.cljs$lang$applyTo = G__11047__11050.cljs$lang$applyTo;
return G__11047;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10977.call(this,f,x);
case  3 :
return fnil__10978.call(this,f,x,y);
case  4 :
return fnil__10979.call(this,f,x,y,z);
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
var mapi__11089 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11081 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11081))
{var s__11084 = temp__3698__auto____11081;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11084)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11084)));
} else
{return null;
}
})));
});

return mapi__11089.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11097 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11097))
{var s__11098 = temp__3698__auto____11097;

var x__11100 = f.call(null,cljs.core.first.call(null,s__11098));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11100)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11098));
} else
{return cljs.core.cons.call(null,x__11100,keep.call(null,f,cljs.core.rest.call(null,s__11098)));
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
var keepi__11133 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11127 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11127))
{var s__11128 = temp__3698__auto____11127;

var x__11130 = f.call(null,idx,cljs.core.first.call(null,s__11128));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11130)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11128));
} else
{return cljs.core.cons.call(null,x__11130,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11128)));
}
} else
{return null;
}
})));
});

return keepi__11133.call(null,0,coll);
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
var every_pred__11364 = (function (p){
return (function() {
var ep1 = null;
var ep1__11376 = (function (){
return true;
});
var ep1__11377 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11378 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11216 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11216))
{return p.call(null,y);
} else
{return and__3546__auto____11216;
}
})());
});
var ep1__11379 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11220 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11220))
{var and__3546__auto____11228 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11228))
{return p.call(null,z);
} else
{return and__3546__auto____11228;
}
} else
{return and__3546__auto____11220;
}
})());
});
var ep1__11380 = (function() { 
var G__11391__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11231 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11231))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11231;
}
})());
};
var G__11391 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11391__delegate.call(this, x, y, z, args);
};
G__11391.cljs$lang$maxFixedArity = 3;
G__11391.cljs$lang$applyTo = (function (arglist__11395){
var x = cljs.core.first(arglist__11395);
var y = cljs.core.first(cljs.core.next(arglist__11395));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11395)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11395)));
return G__11391__delegate.call(this, x, y, z, args);
});
return G__11391;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11376.call(this);
case  1 :
return ep1__11377.call(this,x);
case  2 :
return ep1__11378.call(this,x,y);
case  3 :
return ep1__11379.call(this,x,y,z);
default:
return ep1__11380.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11380.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11366 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11398 = (function (){
return true;
});
var ep2__11399 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11241 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11241))
{return p2.call(null,x);
} else
{return and__3546__auto____11241;
}
})());
});
var ep2__11400 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11244 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11244))
{var and__3546__auto____11246 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11246))
{var and__3546__auto____11248 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11248))
{return p2.call(null,y);
} else
{return and__3546__auto____11248;
}
} else
{return and__3546__auto____11246;
}
} else
{return and__3546__auto____11244;
}
})());
});
var ep2__11401 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11249 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11249))
{var and__3546__auto____11251 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11251))
{var and__3546__auto____11253 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11253))
{var and__3546__auto____11256 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11256))
{var and__3546__auto____11257 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11257))
{return p2.call(null,z);
} else
{return and__3546__auto____11257;
}
} else
{return and__3546__auto____11256;
}
} else
{return and__3546__auto____11253;
}
} else
{return and__3546__auto____11251;
}
} else
{return and__3546__auto____11249;
}
})());
});
var ep2__11402 = (function() { 
var G__11412__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11260 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11260))
{return cljs.core.every_QMARK_.call(null,(function (p1__11111_SHARP_){
var and__3546__auto____11261 = p1.call(null,p1__11111_SHARP_);

if(cljs.core.truth_(and__3546__auto____11261))
{return p2.call(null,p1__11111_SHARP_);
} else
{return and__3546__auto____11261;
}
}),args);
} else
{return and__3546__auto____11260;
}
})());
};
var G__11412 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11412__delegate.call(this, x, y, z, args);
};
G__11412.cljs$lang$maxFixedArity = 3;
G__11412.cljs$lang$applyTo = (function (arglist__11416){
var x = cljs.core.first(arglist__11416);
var y = cljs.core.first(cljs.core.next(arglist__11416));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11416)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11416)));
return G__11412__delegate.call(this, x, y, z, args);
});
return G__11412;
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
var every_pred__11367 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11427 = (function (){
return true;
});
var ep3__11428 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11270 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11270))
{var and__3546__auto____11272 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11272))
{return p3.call(null,x);
} else
{return and__3546__auto____11272;
}
} else
{return and__3546__auto____11270;
}
})());
});
var ep3__11429 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11274 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11274))
{var and__3546__auto____11276 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11276))
{var and__3546__auto____11277 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11277))
{var and__3546__auto____11278 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11278))
{var and__3546__auto____11279 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11279))
{return p3.call(null,y);
} else
{return and__3546__auto____11279;
}
} else
{return and__3546__auto____11278;
}
} else
{return and__3546__auto____11277;
}
} else
{return and__3546__auto____11276;
}
} else
{return and__3546__auto____11274;
}
})());
});
var ep3__11430 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11280 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11280))
{var and__3546__auto____11281 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11281))
{var and__3546__auto____11282 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11282))
{var and__3546__auto____11283 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11283))
{var and__3546__auto____11285 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11285))
{var and__3546__auto____11287 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11287))
{var and__3546__auto____11288 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11288))
{var and__3546__auto____11289 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11289))
{return p3.call(null,z);
} else
{return and__3546__auto____11289;
}
} else
{return and__3546__auto____11288;
}
} else
{return and__3546__auto____11287;
}
} else
{return and__3546__auto____11285;
}
} else
{return and__3546__auto____11283;
}
} else
{return and__3546__auto____11282;
}
} else
{return and__3546__auto____11281;
}
} else
{return and__3546__auto____11280;
}
})());
});
var ep3__11431 = (function() { 
var G__11443__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11292 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11292))
{return cljs.core.every_QMARK_.call(null,(function (p1__11113_SHARP_){
var and__3546__auto____11294 = p1.call(null,p1__11113_SHARP_);

if(cljs.core.truth_(and__3546__auto____11294))
{var and__3546__auto____11296 = p2.call(null,p1__11113_SHARP_);

if(cljs.core.truth_(and__3546__auto____11296))
{return p3.call(null,p1__11113_SHARP_);
} else
{return and__3546__auto____11296;
}
} else
{return and__3546__auto____11294;
}
}),args);
} else
{return and__3546__auto____11292;
}
})());
};
var G__11443 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11443__delegate.call(this, x, y, z, args);
};
G__11443.cljs$lang$maxFixedArity = 3;
G__11443.cljs$lang$applyTo = (function (arglist__11451){
var x = cljs.core.first(arglist__11451);
var y = cljs.core.first(cljs.core.next(arglist__11451));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11451)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11451)));
return G__11443__delegate.call(this, x, y, z, args);
});
return G__11443;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11427.call(this);
case  1 :
return ep3__11428.call(this,x);
case  2 :
return ep3__11429.call(this,x,y);
case  3 :
return ep3__11430.call(this,x,y,z);
default:
return ep3__11431.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11431.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11369 = (function() { 
var G__11454__delegate = function (p1,p2,p3,ps){
var ps__11309 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11455 = (function (){
return true;
});
var epn__11456 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11114_SHARP_){
return p1__11114_SHARP_.call(null,x);
}),ps__11309);
});
var epn__11457 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11116_SHARP_){
var and__3546__auto____11310 = p1__11116_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11310))
{return p1__11116_SHARP_.call(null,y);
} else
{return and__3546__auto____11310;
}
}),ps__11309);
});
var epn__11458 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11117_SHARP_){
var and__3546__auto____11350 = p1__11117_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11350))
{var and__3546__auto____11352 = p1__11117_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11352))
{return p1__11117_SHARP_.call(null,z);
} else
{return and__3546__auto____11352;
}
} else
{return and__3546__auto____11350;
}
}),ps__11309);
});
var epn__11459 = (function() { 
var G__11474__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11357 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11357))
{return cljs.core.every_QMARK_.call(null,(function (p1__11119_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11119_SHARP_,args);
}),ps__11309);
} else
{return and__3546__auto____11357;
}
})());
};
var G__11474 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11474__delegate.call(this, x, y, z, args);
};
G__11474.cljs$lang$maxFixedArity = 3;
G__11474.cljs$lang$applyTo = (function (arglist__11478){
var x = cljs.core.first(arglist__11478);
var y = cljs.core.first(cljs.core.next(arglist__11478));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11478)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11478)));
return G__11474__delegate.call(this, x, y, z, args);
});
return G__11474;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11455.call(this);
case  1 :
return epn__11456.call(this,x);
case  2 :
return epn__11457.call(this,x,y);
case  3 :
return epn__11458.call(this,x,y,z);
default:
return epn__11459.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11459.cljs$lang$applyTo;
return epn;
})()
};
var G__11454 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11454__delegate.call(this, p1, p2, p3, ps);
};
G__11454.cljs$lang$maxFixedArity = 3;
G__11454.cljs$lang$applyTo = (function (arglist__11481){
var p1 = cljs.core.first(arglist__11481);
var p2 = cljs.core.first(cljs.core.next(arglist__11481));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11481)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11481)));
return G__11454__delegate.call(this, p1, p2, p3, ps);
});
return G__11454;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11364.call(this,p1);
case  2 :
return every_pred__11366.call(this,p1,p2);
case  3 :
return every_pred__11367.call(this,p1,p2,p3);
default:
return every_pred__11369.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11369.cljs$lang$applyTo;
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
var some_fn__11741 = (function (p){
return (function() {
var sp1 = null;
var sp1__11751 = (function (){
return null;
});
var sp1__11752 = (function (x){
return p.call(null,x);
});
var sp1__11753 = (function (x,y){
var or__3548__auto____11493 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11493))
{return or__3548__auto____11493;
} else
{return p.call(null,y);
}
});
var sp1__11754 = (function (x,y,z){
var or__3548__auto____11606 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11606))
{return or__3548__auto____11606;
} else
{var or__3548__auto____11611 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11611))
{return or__3548__auto____11611;
} else
{return p.call(null,z);
}
}
});
var sp1__11755 = (function() { 
var G__11757__delegate = function (x,y,z,args){
var or__3548__auto____11614 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11614))
{return or__3548__auto____11614;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11757 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11757__delegate.call(this, x, y, z, args);
};
G__11757.cljs$lang$maxFixedArity = 3;
G__11757.cljs$lang$applyTo = (function (arglist__11760){
var x = cljs.core.first(arglist__11760);
var y = cljs.core.first(cljs.core.next(arglist__11760));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11760)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11760)));
return G__11757__delegate.call(this, x, y, z, args);
});
return G__11757;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11751.call(this);
case  1 :
return sp1__11752.call(this,x);
case  2 :
return sp1__11753.call(this,x,y);
case  3 :
return sp1__11754.call(this,x,y,z);
default:
return sp1__11755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11755.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11744 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11763 = (function (){
return null;
});
var sp2__11764 = (function (x){
var or__3548__auto____11619 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11619))
{return or__3548__auto____11619;
} else
{return p2.call(null,x);
}
});
var sp2__11765 = (function (x,y){
var or__3548__auto____11621 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11621))
{return or__3548__auto____11621;
} else
{var or__3548__auto____11626 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11626))
{return or__3548__auto____11626;
} else
{var or__3548__auto____11629 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11629))
{return or__3548__auto____11629;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11766 = (function (x,y,z){
var or__3548__auto____11639 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11639))
{return or__3548__auto____11639;
} else
{var or__3548__auto____11642 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11642))
{return or__3548__auto____11642;
} else
{var or__3548__auto____11644 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11644))
{return or__3548__auto____11644;
} else
{var or__3548__auto____11646 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11646))
{return or__3548__auto____11646;
} else
{var or__3548__auto____11647 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11647))
{return or__3548__auto____11647;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11768 = (function() { 
var G__11778__delegate = function (x,y,z,args){
var or__3548__auto____11654 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11654))
{return or__3548__auto____11654;
} else
{return cljs.core.some.call(null,(function (p1__11192_SHARP_){
var or__3548__auto____11657 = p1.call(null,p1__11192_SHARP_);

if(cljs.core.truth_(or__3548__auto____11657))
{return or__3548__auto____11657;
} else
{return p2.call(null,p1__11192_SHARP_);
}
}),args);
}
};
var G__11778 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11778__delegate.call(this, x, y, z, args);
};
G__11778.cljs$lang$maxFixedArity = 3;
G__11778.cljs$lang$applyTo = (function (arglist__11780){
var x = cljs.core.first(arglist__11780);
var y = cljs.core.first(cljs.core.next(arglist__11780));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11780)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11780)));
return G__11778__delegate.call(this, x, y, z, args);
});
return G__11778;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11763.call(this);
case  1 :
return sp2__11764.call(this,x);
case  2 :
return sp2__11765.call(this,x,y);
case  3 :
return sp2__11766.call(this,x,y,z);
default:
return sp2__11768.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11768.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11745 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11784 = (function (){
return null;
});
var sp3__11785 = (function (x){
var or__3548__auto____11668 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11668))
{return or__3548__auto____11668;
} else
{var or__3548__auto____11671 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11671))
{return or__3548__auto____11671;
} else
{return p3.call(null,x);
}
}
});
var sp3__11786 = (function (x,y){
var or__3548__auto____11672 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11672))
{return or__3548__auto____11672;
} else
{var or__3548__auto____11674 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11674))
{return or__3548__auto____11674;
} else
{var or__3548__auto____11676 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11676))
{return or__3548__auto____11676;
} else
{var or__3548__auto____11678 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11678))
{return or__3548__auto____11678;
} else
{var or__3548__auto____11679 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11679))
{return or__3548__auto____11679;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11787 = (function (x,y,z){
var or__3548__auto____11681 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11681))
{return or__3548__auto____11681;
} else
{var or__3548__auto____11683 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11683))
{return or__3548__auto____11683;
} else
{var or__3548__auto____11684 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11684))
{return or__3548__auto____11684;
} else
{var or__3548__auto____11686 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11686))
{return or__3548__auto____11686;
} else
{var or__3548__auto____11687 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11687))
{return or__3548__auto____11687;
} else
{var or__3548__auto____11689 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11689))
{return or__3548__auto____11689;
} else
{var or__3548__auto____11691 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11691))
{return or__3548__auto____11691;
} else
{var or__3548__auto____11695 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11695))
{return or__3548__auto____11695;
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
var G__11805__delegate = function (x,y,z,args){
var or__3548__auto____11704 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11704))
{return or__3548__auto____11704;
} else
{return cljs.core.some.call(null,(function (p1__11198_SHARP_){
var or__3548__auto____11705 = p1.call(null,p1__11198_SHARP_);

if(cljs.core.truth_(or__3548__auto____11705))
{return or__3548__auto____11705;
} else
{var or__3548__auto____11706 = p2.call(null,p1__11198_SHARP_);

if(cljs.core.truth_(or__3548__auto____11706))
{return or__3548__auto____11706;
} else
{return p3.call(null,p1__11198_SHARP_);
}
}
}),args);
}
};
var G__11805 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11805__delegate.call(this, x, y, z, args);
};
G__11805.cljs$lang$maxFixedArity = 3;
G__11805.cljs$lang$applyTo = (function (arglist__11807){
var x = cljs.core.first(arglist__11807);
var y = cljs.core.first(cljs.core.next(arglist__11807));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11807)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11807)));
return G__11805__delegate.call(this, x, y, z, args);
});
return G__11805;
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
var some_fn__11748 = (function() { 
var G__11814__delegate = function (p1,p2,p3,ps){
var ps__11708 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11815 = (function (){
return null;
});
var spn__11816 = (function (x){
return cljs.core.some.call(null,(function (p1__11200_SHARP_){
return p1__11200_SHARP_.call(null,x);
}),ps__11708);
});
var spn__11817 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11202_SHARP_){
var or__3548__auto____11720 = p1__11202_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11720))
{return or__3548__auto____11720;
} else
{return p1__11202_SHARP_.call(null,y);
}
}),ps__11708);
});
var spn__11819 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11204_SHARP_){
var or__3548__auto____11724 = p1__11204_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11724))
{return or__3548__auto____11724;
} else
{var or__3548__auto____11727 = p1__11204_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11727))
{return or__3548__auto____11727;
} else
{return p1__11204_SHARP_.call(null,z);
}
}
}),ps__11708);
});
var spn__11820 = (function() { 
var G__11822__delegate = function (x,y,z,args){
var or__3548__auto____11729 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11729))
{return or__3548__auto____11729;
} else
{return cljs.core.some.call(null,(function (p1__11208_SHARP_){
return cljs.core.some.call(null,p1__11208_SHARP_,args);
}),ps__11708);
}
};
var G__11822 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11822__delegate.call(this, x, y, z, args);
};
G__11822.cljs$lang$maxFixedArity = 3;
G__11822.cljs$lang$applyTo = (function (arglist__11825){
var x = cljs.core.first(arglist__11825);
var y = cljs.core.first(cljs.core.next(arglist__11825));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11825)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11825)));
return G__11822__delegate.call(this, x, y, z, args);
});
return G__11822;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11815.call(this);
case  1 :
return spn__11816.call(this,x);
case  2 :
return spn__11817.call(this,x,y);
case  3 :
return spn__11819.call(this,x,y,z);
default:
return spn__11820.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11820.cljs$lang$applyTo;
return spn;
})()
};
var G__11814 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11814__delegate.call(this, p1, p2, p3, ps);
};
G__11814.cljs$lang$maxFixedArity = 3;
G__11814.cljs$lang$applyTo = (function (arglist__11827){
var p1 = cljs.core.first(arglist__11827);
var p2 = cljs.core.first(cljs.core.next(arglist__11827));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11827)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11827)));
return G__11814__delegate.call(this, p1, p2, p3, ps);
});
return G__11814;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11741.call(this,p1);
case  2 :
return some_fn__11744.call(this,p1,p2);
case  3 :
return some_fn__11745.call(this,p1,p2,p3);
default:
return some_fn__11748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11748.cljs$lang$applyTo;
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
var map__11868 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11835 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11835))
{var s__11837 = temp__3698__auto____11835;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11837)),map.call(null,f,cljs.core.rest.call(null,s__11837)));
} else
{return null;
}
})));
});
var map__11869 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11848 = cljs.core.seq.call(null,c1);
var s2__11849 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11850 = s1__11848;

if(cljs.core.truth_(and__3546__auto____11850))
{return s2__11849;
} else
{return and__3546__auto____11850;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11848),cljs.core.first.call(null,s2__11849)),map.call(null,f,cljs.core.rest.call(null,s1__11848),cljs.core.rest.call(null,s2__11849)));
} else
{return null;
}
})));
});
var map__11870 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11854 = cljs.core.seq.call(null,c1);
var s2__11855 = cljs.core.seq.call(null,c2);
var s3__11856 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11857 = s1__11854;

if(cljs.core.truth_(and__3546__auto____11857))
{var and__3546__auto____11858 = s2__11855;

if(cljs.core.truth_(and__3546__auto____11858))
{return s3__11856;
} else
{return and__3546__auto____11858;
}
} else
{return and__3546__auto____11857;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11854),cljs.core.first.call(null,s2__11855),cljs.core.first.call(null,s3__11856)),map.call(null,f,cljs.core.rest.call(null,s1__11854),cljs.core.rest.call(null,s2__11855),cljs.core.rest.call(null,s3__11856)));
} else
{return null;
}
})));
});
var map__11871 = (function() { 
var G__11878__delegate = function (f,c1,c2,c3,colls){
var step__11862 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11861 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11861)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11861),step.call(null,map.call(null,cljs.core.rest,ss__11861)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11490_SHARP_){
return cljs.core.apply.call(null,f,p1__11490_SHARP_);
}),step__11862.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11878 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11878__delegate.call(this, f, c1, c2, c3, colls);
};
G__11878.cljs$lang$maxFixedArity = 4;
G__11878.cljs$lang$applyTo = (function (arglist__11886){
var f = cljs.core.first(arglist__11886);
var c1 = cljs.core.first(cljs.core.next(arglist__11886));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11886)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11886))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11886))));
return G__11878__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11878;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11868.call(this,f,c1);
case  3 :
return map__11869.call(this,f,c1,c2);
case  4 :
return map__11870.call(this,f,c1,c2,c3);
default:
return map__11871.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11871.cljs$lang$applyTo;
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
{var temp__3698__auto____11893 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11893))
{var s__11894 = temp__3698__auto____11893;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11894),take.call(null,(n - 1),cljs.core.rest.call(null,s__11894)));
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
var s__11941 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11942 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11942))
{return s__11941;
} else
{return and__3546__auto____11942;
}
})()))
{{
var G__11944 = (n - 1);
var G__11945 = cljs.core.rest.call(null,s__11941);
n = G__11944;
coll = G__11945;
continue;
}
} else
{return s__11941;
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
var drop_last__11949 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11950 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11949.call(this,n);
case  2 :
return drop_last__11950.call(this,n,s);
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
var s__11952 = cljs.core.seq.call(null,coll);
var lead__11957 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11957))
{{
var G__12027 = cljs.core.next.call(null,s__11952);
var G__12028 = cljs.core.next.call(null,lead__11957);
s__11952 = G__12027;
lead__11957 = G__12028;
continue;
}
} else
{return s__11952;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12031 = (function (pred,coll){
while(true){
var s__12029 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12030 = s__12029;

if(cljs.core.truth_(and__3546__auto____12030))
{return pred.call(null,cljs.core.first.call(null,s__12029));
} else
{return and__3546__auto____12030;
}
})()))
{{
var G__12036 = pred;
var G__12037 = cljs.core.rest.call(null,s__12029);
pred = G__12036;
coll = G__12037;
continue;
}
} else
{return s__12029;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12031.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12041 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12041))
{var s__12042 = temp__3698__auto____12041;

return cljs.core.concat.call(null,s__12042,cycle.call(null,s__12042));
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
var repeat__12047 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12048 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12047.call(this,n);
case  2 :
return repeat__12048.call(this,n,x);
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
var repeatedly__12052 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12053 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12052.call(this,n);
case  2 :
return repeatedly__12053.call(this,n,f);
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
var interleave__12065 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12055 = cljs.core.seq.call(null,c1);
var s2__12056 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12057 = s1__12055;

if(cljs.core.truth_(and__3546__auto____12057))
{return s2__12056;
} else
{return and__3546__auto____12057;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12055),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12056),interleave.call(null,cljs.core.rest.call(null,s1__12055),cljs.core.rest.call(null,s2__12056))));
} else
{return null;
}
})));
});
var interleave__12066 = (function() { 
var G__12072__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12061 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12061)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12061),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12061)));
} else
{return null;
}
})));
};
var G__12072 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12072__delegate.call(this, c1, c2, colls);
};
G__12072.cljs$lang$maxFixedArity = 2;
G__12072.cljs$lang$applyTo = (function (arglist__12073){
var c1 = cljs.core.first(arglist__12073);
var c2 = cljs.core.first(cljs.core.next(arglist__12073));
var colls = cljs.core.rest(cljs.core.next(arglist__12073));
return G__12072__delegate.call(this, c1, c2, colls);
});
return G__12072;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12065.call(this,c1,c2);
default:
return interleave__12066.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12066.cljs$lang$applyTo;
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
var cat__12079 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12076 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12076))
{var coll__12077 = temp__3695__auto____12076;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12077),cat.call(null,cljs.core.rest.call(null,coll__12077),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12079.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12082 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12083 = (function() { 
var G__12086__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12086 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12086__delegate.call(this, f, coll, colls);
};
G__12086.cljs$lang$maxFixedArity = 2;
G__12086.cljs$lang$applyTo = (function (arglist__12087){
var f = cljs.core.first(arglist__12087);
var coll = cljs.core.first(cljs.core.next(arglist__12087));
var colls = cljs.core.rest(cljs.core.next(arglist__12087));
return G__12086__delegate.call(this, f, coll, colls);
});
return G__12086;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12082.call(this,f,coll);
default:
return mapcat__12083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12083.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12104 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12104))
{var s__12105 = temp__3698__auto____12104;

var f__12106 = cljs.core.first.call(null,s__12105);
var r__12107 = cljs.core.rest.call(null,s__12105);

if(cljs.core.truth_(pred.call(null,f__12106)))
{return cljs.core.cons.call(null,f__12106,filter.call(null,pred,r__12107));
} else
{return filter.call(null,pred,r__12107);
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
var walk__12120 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12120.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12119_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12119_SHARP_));
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
var partition__12286 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12287 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12137 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12137))
{var s__12139 = temp__3698__auto____12137;

var p__12140 = cljs.core.take.call(null,n,s__12139);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12140))))
{return cljs.core.cons.call(null,p__12140,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12139)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12288 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12146 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12146))
{var s__12149 = temp__3698__auto____12146;

var p__12152 = cljs.core.take.call(null,n,s__12149);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12152))))
{return cljs.core.cons.call(null,p__12152,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12149)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12152,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12286.call(this,n,step);
case  3 :
return partition__12287.call(this,n,step,pad);
case  4 :
return partition__12288.call(this,n,step,pad,coll);
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
var get_in__12342 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12343 = (function (m,ks,not_found){
var sentinel__12303 = cljs.core.lookup_sentinel;
var m__12304 = m;
var ks__12306 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12306))
{var m__12308 = cljs.core.get.call(null,m__12304,cljs.core.first.call(null,ks__12306),sentinel__12303);

if(cljs.core.truth_((sentinel__12303 === m__12308)))
{return not_found;
} else
{{
var G__12347 = sentinel__12303;
var G__12348 = m__12308;
var G__12349 = cljs.core.next.call(null,ks__12306);
sentinel__12303 = G__12347;
m__12304 = G__12348;
ks__12306 = G__12349;
continue;
}
}
} else
{return m__12304;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12342.call(this,m,ks);
case  3 :
return get_in__12343.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12352,v){
var vec__12354__12355 = p__12352;
var k__12356 = cljs.core.nth.call(null,vec__12354__12355,0,null);
var ks__12357 = cljs.core.nthnext.call(null,vec__12354__12355,1);

if(cljs.core.truth_(ks__12357))
{return cljs.core.assoc.call(null,m,k__12356,assoc_in.call(null,cljs.core.get.call(null,m,k__12356),ks__12357,v));
} else
{return cljs.core.assoc.call(null,m,k__12356,v);
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
var update_in__delegate = function (m,p__12369,f,args){
var vec__12371__12372 = p__12369;
var k__12374 = cljs.core.nth.call(null,vec__12371__12372,0,null);
var ks__12375 = cljs.core.nthnext.call(null,vec__12371__12372,1);

if(cljs.core.truth_(ks__12375))
{return cljs.core.assoc.call(null,m,k__12374,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12374),ks__12375,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12374,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12374),args));
}
};
var update_in = function (m,p__12369,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12369, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12382){
var m = cljs.core.first(arglist__12382);
var p__12369 = cljs.core.first(cljs.core.next(arglist__12382));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12382)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12382)));
return update_in__delegate.call(this, m, p__12369, f, args);
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
var this__12385 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12433 = null;
var G__12433__12435 = (function (coll,k){
var this__12386 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12433__12437 = (function (coll,k,not_found){
var this__12387 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12433 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12433__12435.call(this,coll,k);
case  3 :
return G__12433__12437.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12433;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12389 = this;
var new_array__12391 = cljs.core.aclone.call(null,this__12389.array);

(new_array__12391[k] = v);
return (new cljs.core.Vector(this__12389.meta,new_array__12391));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12455 = null;
var G__12455__12457 = (function (coll,k){
var this__12393 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12455__12458 = (function (coll,k,not_found){
var this__12395 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12455 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12455__12457.call(this,coll,k);
case  3 :
return G__12455__12458.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12455;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12396 = this;
var new_array__12398 = cljs.core.aclone.call(null,this__12396.array);

new_array__12398.push(o);
return (new cljs.core.Vector(this__12396.meta,new_array__12398));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12463 = null;
var G__12463__12464 = (function (v,f){
var this__12400 = this;
return cljs.core.ci_reduce.call(null,this__12400.array,f);
});
var G__12463__12465 = (function (v,f,start){
var this__12401 = this;
return cljs.core.ci_reduce.call(null,this__12401.array,f,start);
});
G__12463 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12463__12464.call(this,v,f);
case  3 :
return G__12463__12465.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12463;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12403 = this;
if(cljs.core.truth_((this__12403.array.length > 0)))
{var vector_seq__12406 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12403.array.length)))
{return cljs.core.cons.call(null,(this__12403.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12406.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12408 = this;
return this__12408.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12409 = this;
var count__12410 = this__12409.array.length;

if(cljs.core.truth_((count__12410 > 0)))
{return (this__12409.array[(count__12410 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12413 = this;
if(cljs.core.truth_((this__12413.array.length > 0)))
{var new_array__12415 = cljs.core.aclone.call(null,this__12413.array);

new_array__12415.pop();
return (new cljs.core.Vector(this__12413.meta,new_array__12415));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12417 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12418 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12420 = this;
return (new cljs.core.Vector(meta,this__12420.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12422 = this;
return this__12422.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12477 = null;
var G__12477__12478 = (function (coll,n){
var this__12424 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12426 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12426))
{return (n < this__12424.array.length);
} else
{return and__3546__auto____12426;
}
})()))
{return (this__12424.array[n]);
} else
{return null;
}
});
var G__12477__12479 = (function (coll,n,not_found){
var this__12428 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12430 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12430))
{return (n < this__12428.array.length);
} else
{return and__3546__auto____12430;
}
})()))
{return (this__12428.array[n]);
} else
{return not_found;
}
});
G__12477 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12477__12478.call(this,coll,n);
case  3 :
return G__12477__12479.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12477;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12432 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12432.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12485){
var args = cljs.core.seq( arglist__12485 );;
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
var this__12489 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12618 = null;
var G__12618__12619 = (function (coll,k){
var this__12490 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12618__12620 = (function (coll,k,not_found){
var this__12491 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12618 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12618__12619.call(this,coll,k);
case  3 :
return G__12618__12620.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12618;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12492 = this;
var v_pos__12495 = (this__12492.start + key);

return (new cljs.core.Subvec(this__12492.meta,cljs.core._assoc.call(null,this__12492.v,v_pos__12495,val),this__12492.start,((this__12492.end > (v_pos__12495 + 1)) ? this__12492.end : (v_pos__12495 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12626 = null;
var G__12626__12627 = (function (coll,k){
var this__12497 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12626__12628 = (function (coll,k,not_found){
var this__12499 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12626 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12626__12627.call(this,coll,k);
case  3 :
return G__12626__12628.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12626;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12501 = this;
return (new cljs.core.Subvec(this__12501.meta,cljs.core._assoc_n.call(null,this__12501.v,this__12501.end,o),this__12501.start,(this__12501.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12634 = null;
var G__12634__12635 = (function (coll,f){
var this__12503 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12634__12636 = (function (coll,f,start){
var this__12590 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12634 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12634__12635.call(this,coll,f);
case  3 :
return G__12634__12636.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12634;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12592 = this;
var subvec_seq__12595 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12592.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12592.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12595.call(null,this__12592.start);
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
var this__12600 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12600.start,this__12600.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12600.meta,this__12600.v,this__12600.start,(this__12600.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12603 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12605 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12607 = this;
return (new cljs.core.Subvec(meta,this__12607.v,this__12607.start,this__12607.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12608 = this;
return this__12608.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12654 = null;
var G__12654__12655 = (function (coll,n){
var this__12610 = this;
return cljs.core._nth.call(null,this__12610.v,(this__12610.start + n));
});
var G__12654__12656 = (function (coll,n,not_found){
var this__12612 = this;
return cljs.core._nth.call(null,this__12612.v,(this__12612.start + n),not_found);
});
G__12654 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12654__12655.call(this,coll,n);
case  3 :
return G__12654__12656.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12654;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12614 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12614.meta);
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
var subvec__12658 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12659 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12658.call(this,v,start);
case  3 :
return subvec__12659.call(this,v,start,end);
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
var this__12662 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12663 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12664 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12665 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12665.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12666 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12667 = this;
return cljs.core._first.call(null,this__12667.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12668 = this;
var temp__3695__auto____12669 = cljs.core.next.call(null,this__12668.front);

if(cljs.core.truth_(temp__3695__auto____12669))
{var f1__12670 = temp__3695__auto____12669;

return (new cljs.core.PersistentQueueSeq(this__12668.meta,f1__12670,this__12668.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12668.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12668.meta,this__12668.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12672 = this;
return this__12672.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12674 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12674.front,this__12674.rear));
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
var this__12689 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12735 = this;
if(cljs.core.truth_(this__12735.front))
{return (new cljs.core.PersistentQueue(this__12735.meta,(this__12735.count + 1),this__12735.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12738 = this__12735.rear;

if(cljs.core.truth_(or__3548__auto____12738))
{return or__3548__auto____12738;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12735.meta,(this__12735.count + 1),cljs.core.conj.call(null,this__12735.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12740 = this;
var rear__12742 = cljs.core.seq.call(null,this__12740.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12743 = this__12740.front;

if(cljs.core.truth_(or__3548__auto____12743))
{return or__3548__auto____12743;
} else
{return rear__12742;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12740.front,cljs.core.seq.call(null,rear__12742)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12745 = this;
return this__12745.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12747 = this;
return cljs.core._first.call(null,this__12747.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12748 = this;
if(cljs.core.truth_(this__12748.front))
{var temp__3695__auto____12749 = cljs.core.next.call(null,this__12748.front);

if(cljs.core.truth_(temp__3695__auto____12749))
{var f1__12750 = temp__3695__auto____12749;

return (new cljs.core.PersistentQueue(this__12748.meta,(this__12748.count - 1),f1__12750,this__12748.rear));
} else
{return (new cljs.core.PersistentQueue(this__12748.meta,(this__12748.count - 1),cljs.core.seq.call(null,this__12748.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12751 = this;
return cljs.core.first.call(null,this__12751.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12752 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12754 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12756 = this;
return (new cljs.core.PersistentQueue(meta,this__12756.count,this__12756.front,this__12756.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12759 = this;
return this__12759.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12763 = this;
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
var this__12780 = this;
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
var len__12792 = array.length;

var i__12794 = 0;

while(true){
if(cljs.core.truth_((i__12794 < len__12792)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12794]))))
{return i__12794;
} else
{{
var G__12797 = (i__12794 + incr);
i__12794 = G__12797;
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
var obj_map_contains_key_QMARK___12823 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12824 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12798 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12798))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12798;
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
return obj_map_contains_key_QMARK___12823.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12824.call(this,k,strobj,true_val,false_val);
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
var this__12840 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12877 = null;
var G__12877__12879 = (function (coll,k){
var this__12841 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12877__12880 = (function (coll,k,not_found){
var this__12842 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12842.strobj,(this__12842.strobj[k]),not_found);
});
G__12877 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12877__12879.call(this,coll,k);
case  3 :
return G__12877__12880.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12877;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12844 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12846 = goog.object.clone.call(null,this__12844.strobj);
var overwrite_QMARK___12848 = new_strobj__12846.hasOwnProperty(k);

(new_strobj__12846[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12848))
{return (new cljs.core.ObjMap(this__12844.meta,this__12844.keys,new_strobj__12846));
} else
{var new_keys__12849 = cljs.core.aclone.call(null,this__12844.keys);

new_keys__12849.push(k);
return (new cljs.core.ObjMap(this__12844.meta,new_keys__12849,new_strobj__12846));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12844.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12853 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12853.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12887 = null;
var G__12887__12888 = (function (coll,k){
var this__12855 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12887__12889 = (function (coll,k,not_found){
var this__12856 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12887 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12887__12888.call(this,coll,k);
case  3 :
return G__12887__12889.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12887;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12858 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12861 = this;
if(cljs.core.truth_((this__12861.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12830_SHARP_){
return cljs.core.vector.call(null,p1__12830_SHARP_,(this__12861.strobj[p1__12830_SHARP_]));
}),this__12861.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12863 = this;
return this__12863.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12865 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12866 = this;
return (new cljs.core.ObjMap(meta,this__12866.keys,this__12866.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12867 = this;
return this__12867.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12868 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12868.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12869 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12871 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12871))
{return this__12869.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12871;
}
})()))
{var new_keys__12872 = cljs.core.aclone.call(null,this__12869.keys);
var new_strobj__12873 = goog.object.clone.call(null,this__12869.strobj);

new_keys__12872.splice(cljs.core.scan_array.call(null,1,k,new_keys__12872),1);
cljs.core.js_delete.call(null,new_strobj__12873,k);
return (new cljs.core.ObjMap(this__12869.meta,new_keys__12872,new_strobj__12873));
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
var this__12921 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13052 = null;
var G__13052__13080 = (function (coll,k){
var this__12922 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13052__13081 = (function (coll,k,not_found){
var this__12924 = this;
var bucket__12926 = (this__12924.hashobj[cljs.core.hash.call(null,k)]);
var i__12928 = (cljs.core.truth_(bucket__12926)?cljs.core.scan_array.call(null,2,k,bucket__12926):null);

if(cljs.core.truth_(i__12928))
{return (bucket__12926[(i__12928 + 1)]);
} else
{return not_found;
}
});
G__13052 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13052__13080.call(this,coll,k);
case  3 :
return G__13052__13081.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13052;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12930 = this;
var h__12932 = cljs.core.hash.call(null,k);
var bucket__12933 = (this__12930.hashobj[h__12932]);

if(cljs.core.truth_(bucket__12933))
{var new_bucket__12935 = cljs.core.aclone.call(null,bucket__12933);
var new_hashobj__12936 = goog.object.clone.call(null,this__12930.hashobj);

(new_hashobj__12936[h__12932] = new_bucket__12935);
var temp__3695__auto____12938 = cljs.core.scan_array.call(null,2,k,new_bucket__12935);

if(cljs.core.truth_(temp__3695__auto____12938))
{var i__12939 = temp__3695__auto____12938;

(new_bucket__12935[(i__12939 + 1)] = v);
return (new cljs.core.HashMap(this__12930.meta,this__12930.count,new_hashobj__12936));
} else
{new_bucket__12935.push(k,v);
return (new cljs.core.HashMap(this__12930.meta,(this__12930.count + 1),new_hashobj__12936));
}
} else
{var new_hashobj__12942 = goog.object.clone.call(null,this__12930.hashobj);

(new_hashobj__12942[h__12932] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12930.meta,(this__12930.count + 1),new_hashobj__12942));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12946 = this;
var bucket__12948 = (this__12946.hashobj[cljs.core.hash.call(null,k)]);
var i__12949 = (cljs.core.truth_(bucket__12948)?cljs.core.scan_array.call(null,2,k,bucket__12948):null);

if(cljs.core.truth_(i__12949))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13087 = null;
var G__13087__13088 = (function (coll,k){
var this__12951 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13087__13089 = (function (coll,k,not_found){
var this__12953 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13087 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13087__13088.call(this,coll,k);
case  3 :
return G__13087__13089.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13087;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12958 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12959 = this;
if(cljs.core.truth_((this__12959.count > 0)))
{var hashes__13020 = cljs.core.js_keys.call(null,this__12959.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12903_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12959.hashobj[p1__12903_SHARP_])));
}),hashes__13020);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13025 = this;
return this__13025.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13026 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13029 = this;
return (new cljs.core.HashMap(meta,this__13029.count,this__13029.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13031 = this;
return this__13031.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13033 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13033.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13036 = this;
var h__13037 = cljs.core.hash.call(null,k);
var bucket__13039 = (this__13036.hashobj[h__13037]);
var i__13040 = (cljs.core.truth_(bucket__13039)?cljs.core.scan_array.call(null,2,k,bucket__13039):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13040)))
{return coll;
} else
{var new_hashobj__13043 = goog.object.clone.call(null,this__13036.hashobj);

if(cljs.core.truth_((3 > bucket__13039.length)))
{cljs.core.js_delete.call(null,new_hashobj__13043,h__13037);
} else
{var new_bucket__13046 = cljs.core.aclone.call(null,bucket__13039);

new_bucket__13046.splice(i__13040,2);
(new_hashobj__13043[h__13037] = new_bucket__13046);
}
return (new cljs.core.HashMap(this__13036.meta,(this__13036.count - 1),new_hashobj__13043));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13110 = ks.length;

var i__13111 = 0;
var out__13112 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13111 < len__13110)))
{{
var G__13114 = (i__13111 + 1);
var G__13115 = cljs.core.assoc.call(null,out__13112,(ks[i__13111]),(vs[i__13111]));
i__13111 = G__13114;
out__13112 = G__13115;
continue;
}
} else
{return out__13112;
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
var in$__13118 = cljs.core.seq.call(null,keyvals);
var out__13119 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13118))
{{
var G__13124 = cljs.core.nnext.call(null,in$__13118);
var G__13125 = cljs.core.assoc.call(null,out__13119,cljs.core.first.call(null,in$__13118),cljs.core.second.call(null,in$__13118));
in$__13118 = G__13124;
out__13119 = G__13125;
continue;
}
} else
{return out__13119;
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
hash_map.cljs$lang$applyTo = (function (arglist__13128){
var keyvals = cljs.core.seq( arglist__13128 );;
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
{return cljs.core.reduce.call(null,(function (p1__13133_SHARP_,p2__13134_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13139 = p1__13133_SHARP_;

if(cljs.core.truth_(or__3548__auto____13139))
{return or__3548__auto____13139;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13134_SHARP_);
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
{var merge_entry__13196 = (function (m,e){
var k__13141 = cljs.core.first.call(null,e);
var v__13142 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13141)))
{return cljs.core.assoc.call(null,m,k__13141,f.call(null,cljs.core.get.call(null,m,k__13141),v__13142));
} else
{return cljs.core.assoc.call(null,m,k__13141,v__13142);
}
});
var merge2__13200 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13196,(function (){var or__3548__auto____13198 = m1;

if(cljs.core.truth_(or__3548__auto____13198))
{return or__3548__auto____13198;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13200,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13219){
var f = cljs.core.first(arglist__13219);
var maps = cljs.core.rest(arglist__13219);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13226 = cljs.core.ObjMap.fromObject([],{});
var keys__13227 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13227))
{var key__13230 = cljs.core.first.call(null,keys__13227);
var entry__13231 = cljs.core.get.call(null,map,key__13230,"﷐'user/not-found");

{
var G__13414 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13231,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13226,key__13230,entry__13231):ret__13226);
var G__13416 = cljs.core.next.call(null,keys__13227);
ret__13226 = G__13414;
keys__13227 = G__13416;
continue;
}
} else
{return ret__13226;
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
var this__13426 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13475 = null;
var G__13475__13476 = (function (coll,v){
var this__13428 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13475__13477 = (function (coll,v,not_found){
var this__13430 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13430.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13475 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13475__13476.call(this,coll,v);
case  3 :
return G__13475__13477.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13475;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13482 = null;
var G__13482__13483 = (function (coll,k){
var this__13434 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13482__13484 = (function (coll,k,not_found){
var this__13435 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13482 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13482__13483.call(this,coll,k);
case  3 :
return G__13482__13484.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13482;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13439 = this;
return (new cljs.core.Set(this__13439.meta,cljs.core.assoc.call(null,this__13439.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13443 = this;
return cljs.core.keys.call(null,this__13443.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13445 = this;
return (new cljs.core.Set(this__13445.meta,cljs.core.dissoc.call(null,this__13445.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13446 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13447 = this;
var and__3546__auto____13454 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13454))
{var and__3546__auto____13455 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13455))
{return cljs.core.every_QMARK_.call(null,(function (p1__13220_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13220_SHARP_);
}),other);
} else
{return and__3546__auto____13455;
}
} else
{return and__3546__auto____13454;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13461 = this;
return (new cljs.core.Set(meta,this__13461.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13465 = this;
return this__13465.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13469 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13469.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13511 = cljs.core.seq.call(null,coll);
var out__13513 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13511))))
{{
var G__13522 = cljs.core.rest.call(null,in$__13511);
var G__13523 = cljs.core.conj.call(null,out__13513,cljs.core.first.call(null,in$__13511));
in$__13511 = G__13522;
out__13513 = G__13523;
continue;
}
} else
{return out__13513;
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
{var n__13528 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13530 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13530))
{var e__13532 = temp__3695__auto____13530;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13532));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13528,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13502_SHARP_){
var temp__3695__auto____13535 = cljs.core.find.call(null,smap,p1__13502_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13535))
{var e__13539 = temp__3695__auto____13535;

return cljs.core.second.call(null,e__13539);
} else
{return p1__13502_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13571 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13552,seen){
while(true){
var vec__13554__13555 = p__13552;
var f__13557 = cljs.core.nth.call(null,vec__13554__13555,0,null);
var xs__13559 = vec__13554__13555;

var temp__3698__auto____13565 = cljs.core.seq.call(null,xs__13559);

if(cljs.core.truth_(temp__3698__auto____13565))
{var s__13567 = temp__3698__auto____13565;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13557)))
{{
var G__13575 = cljs.core.rest.call(null,s__13567);
var G__13577 = seen;
p__13552 = G__13575;
seen = G__13577;
continue;
}
} else
{return cljs.core.cons.call(null,f__13557,step.call(null,cljs.core.rest.call(null,s__13567),cljs.core.conj.call(null,seen,f__13557)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13571.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13584 = cljs.core.Vector.fromArray([]);
var s__13587 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13587)))
{{
var G__13594 = cljs.core.conj.call(null,ret__13584,cljs.core.first.call(null,s__13587));
var G__13596 = cljs.core.next.call(null,s__13587);
ret__13584 = G__13594;
s__13587 = G__13596;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13584);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13602 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13602))
{return or__3548__auto____13602;
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
if(cljs.core.truth_((function (){var or__3548__auto____13624 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13624))
{return or__3548__auto____13624;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13625 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13625 > -1)))
{return cljs.core.subs.call(null,x,2,i__13625);
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
var map__13634 = cljs.core.ObjMap.fromObject([],{});
var ks__13635 = cljs.core.seq.call(null,keys);
var vs__13636 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13637 = ks__13635;

if(cljs.core.truth_(and__3546__auto____13637))
{return vs__13636;
} else
{return and__3546__auto____13637;
}
})()))
{{
var G__13646 = cljs.core.assoc.call(null,map__13634,cljs.core.first.call(null,ks__13635),cljs.core.first.call(null,vs__13636));
var G__13647 = cljs.core.next.call(null,ks__13635);
var G__13648 = cljs.core.next.call(null,vs__13636);
map__13634 = G__13646;
ks__13635 = G__13647;
vs__13636 = G__13648;
continue;
}
} else
{return map__13634;
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
var G__13661__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13632_SHARP_,p2__13633_SHARP_){
return max_key.call(null,k,p1__13632_SHARP_,p2__13633_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13661 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13661__delegate.call(this, k, x, y, more);
};
G__13661.cljs$lang$maxFixedArity = 3;
G__13661.cljs$lang$applyTo = (function (arglist__13664){
var k = cljs.core.first(arglist__13664);
var x = cljs.core.first(cljs.core.next(arglist__13664));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13664)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13664)));
return G__13661__delegate.call(this, k, x, y, more);
});
return G__13661;
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
var min_key__13668 = (function (k,x){
return x;
});
var min_key__13669 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13670 = (function() { 
var G__13673__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13649_SHARP_,p2__13650_SHARP_){
return min_key.call(null,k,p1__13649_SHARP_,p2__13650_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13673 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13673__delegate.call(this, k, x, y, more);
};
G__13673.cljs$lang$maxFixedArity = 3;
G__13673.cljs$lang$applyTo = (function (arglist__13675){
var k = cljs.core.first(arglist__13675);
var x = cljs.core.first(cljs.core.next(arglist__13675));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13675)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13675)));
return G__13673__delegate.call(this, k, x, y, more);
});
return G__13673;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13668.call(this,k,x);
case  3 :
return min_key__13669.call(this,k,x,y);
default:
return min_key__13670.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13670.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13739 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13740 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13679 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13679))
{var s__13680 = temp__3698__auto____13679;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13680),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13680)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13739.call(this,n,step);
case  3 :
return partition_all__13740.call(this,n,step,coll);
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
var temp__3698__auto____13757 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13757))
{var s__13758 = temp__3698__auto____13757;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13758))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13758),take_while.call(null,pred,cljs.core.rest.call(null,s__13758)));
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
var this__13766 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13768 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13790 = null;
var G__13790__13791 = (function (rng,f){
var this__13770 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13790__13792 = (function (rng,f,s){
var this__13771 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13790 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13790__13791.call(this,rng,f);
case  3 :
return G__13790__13792.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13790;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13775 = this;
var comp__13776 = (cljs.core.truth_((this__13775.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13776.call(null,this__13775.start,this__13775.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13777 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13777.end - this__13777.start) / this__13777.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13778 = this;
return this__13778.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13779 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13779.meta,(this__13779.start + this__13779.step),this__13779.end,this__13779.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13780 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13783 = this;
return (new cljs.core.Range(meta,this__13783.start,this__13783.end,this__13783.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13784 = this;
return this__13784.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13815 = null;
var G__13815__13816 = (function (rng,n){
var this__13785 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13785.start + (n * this__13785.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13786 = (this__13785.start > this__13785.end);

if(cljs.core.truth_(and__3546__auto____13786))
{return cljs.core._EQ_.call(null,this__13785.step,0);
} else
{return and__3546__auto____13786;
}
})()))
{return this__13785.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13815__13817 = (function (rng,n,not_found){
var this__13787 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13787.start + (n * this__13787.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13788 = (this__13787.start > this__13787.end);

if(cljs.core.truth_(and__3546__auto____13788))
{return cljs.core._EQ_.call(null,this__13787.step,0);
} else
{return and__3546__auto____13788;
}
})()))
{return this__13787.start;
} else
{return not_found;
}
}
});
G__13815 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13815__13816.call(this,rng,n);
case  3 :
return G__13815__13817.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13815;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13789 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13789.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13831 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13832 = (function (end){
return range.call(null,0,end,1);
});
var range__13833 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13834 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13831.call(this);
case  1 :
return range__13832.call(this,start);
case  2 :
return range__13833.call(this,start,end);
case  3 :
return range__13834.call(this,start,end,step);
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
var temp__3698__auto____13846 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13846))
{var s__13847 = temp__3698__auto____13846;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13847),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13847)));
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
var temp__3698__auto____13861 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13861))
{var s__13862 = temp__3698__auto____13861;

var fst__13864 = cljs.core.first.call(null,s__13862);
var fv__13865 = f.call(null,fst__13864);
var run__13869 = cljs.core.cons.call(null,fst__13864,cljs.core.take_while.call(null,(function (p1__13853_SHARP_){
return cljs.core._EQ_.call(null,fv__13865,f.call(null,p1__13853_SHARP_));
}),cljs.core.next.call(null,s__13862)));

return cljs.core.cons.call(null,run__13869,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13869),s__13862))));
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
var reductions__13915 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13898 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13898))
{var s__13900 = temp__3695__auto____13898;

return reductions.call(null,f,cljs.core.first.call(null,s__13900),cljs.core.rest.call(null,s__13900));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13916 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13910 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13910))
{var s__13911 = temp__3698__auto____13910;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13911)),cljs.core.rest.call(null,s__13911));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13915.call(this,f,init);
case  3 :
return reductions__13916.call(this,f,init,coll);
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
var juxt__13986 = (function (f){
return (function() {
var G__13993 = null;
var G__13993__13994 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13993__13995 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13993__13996 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13993__13997 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13993__13998 = (function() { 
var G__14014__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14014 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14014__delegate.call(this, x, y, z, args);
};
G__14014.cljs$lang$maxFixedArity = 3;
G__14014.cljs$lang$applyTo = (function (arglist__14015){
var x = cljs.core.first(arglist__14015);
var y = cljs.core.first(cljs.core.next(arglist__14015));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14015)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14015)));
return G__14014__delegate.call(this, x, y, z, args);
});
return G__14014;
})()
;
G__13993 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13993__13994.call(this);
case  1 :
return G__13993__13995.call(this,x);
case  2 :
return G__13993__13996.call(this,x,y);
case  3 :
return G__13993__13997.call(this,x,y,z);
default:
return G__13993__13998.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13993.cljs$lang$maxFixedArity = 3;
G__13993.cljs$lang$applyTo = G__13993__13998.cljs$lang$applyTo;
return G__13993;
})()
});
var juxt__13987 = (function (f,g){
return (function() {
var G__14020 = null;
var G__14020__14021 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14020__14022 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14020__14023 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14020__14024 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14020__14025 = (function() { 
var G__14037__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14037 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14037__delegate.call(this, x, y, z, args);
};
G__14037.cljs$lang$maxFixedArity = 3;
G__14037.cljs$lang$applyTo = (function (arglist__14038){
var x = cljs.core.first(arglist__14038);
var y = cljs.core.first(cljs.core.next(arglist__14038));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14038)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14038)));
return G__14037__delegate.call(this, x, y, z, args);
});
return G__14037;
})()
;
G__14020 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14020__14021.call(this);
case  1 :
return G__14020__14022.call(this,x);
case  2 :
return G__14020__14023.call(this,x,y);
case  3 :
return G__14020__14024.call(this,x,y,z);
default:
return G__14020__14025.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14020.cljs$lang$maxFixedArity = 3;
G__14020.cljs$lang$applyTo = G__14020__14025.cljs$lang$applyTo;
return G__14020;
})()
});
var juxt__13988 = (function (f,g,h){
return (function() {
var G__14110 = null;
var G__14110__14111 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14110__14112 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14110__14113 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14110__14114 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14110__14115 = (function() { 
var G__14126__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14126 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14126__delegate.call(this, x, y, z, args);
};
G__14126.cljs$lang$maxFixedArity = 3;
G__14126.cljs$lang$applyTo = (function (arglist__14129){
var x = cljs.core.first(arglist__14129);
var y = cljs.core.first(cljs.core.next(arglist__14129));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14129)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14129)));
return G__14126__delegate.call(this, x, y, z, args);
});
return G__14126;
})()
;
G__14110 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14110__14111.call(this);
case  1 :
return G__14110__14112.call(this,x);
case  2 :
return G__14110__14113.call(this,x,y);
case  3 :
return G__14110__14114.call(this,x,y,z);
default:
return G__14110__14115.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14110.cljs$lang$maxFixedArity = 3;
G__14110.cljs$lang$applyTo = G__14110__14115.cljs$lang$applyTo;
return G__14110;
})()
});
var juxt__13989 = (function() { 
var G__14131__delegate = function (f,g,h,fs){
var fs__13939 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14133 = null;
var G__14133__14136 = (function (){
return cljs.core.reduce.call(null,(function (p1__13883_SHARP_,p2__13884_SHARP_){
return cljs.core.conj.call(null,p1__13883_SHARP_,p2__13884_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13939);
});
var G__14133__14138 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13886_SHARP_,p2__13887_SHARP_){
return cljs.core.conj.call(null,p1__13886_SHARP_,p2__13887_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13939);
});
var G__14133__14140 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13888_SHARP_,p2__13889_SHARP_){
return cljs.core.conj.call(null,p1__13888_SHARP_,p2__13889_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13939);
});
var G__14133__14142 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13890_SHARP_,p2__13891_SHARP_){
return cljs.core.conj.call(null,p1__13890_SHARP_,p2__13891_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13939);
});
var G__14133__14144 = (function() { 
var G__14160__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13892_SHARP_,p2__13893_SHARP_){
return cljs.core.conj.call(null,p1__13892_SHARP_,cljs.core.apply.call(null,p2__13893_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13939);
};
var G__14160 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14160__delegate.call(this, x, y, z, args);
};
G__14160.cljs$lang$maxFixedArity = 3;
G__14160.cljs$lang$applyTo = (function (arglist__14166){
var x = cljs.core.first(arglist__14166);
var y = cljs.core.first(cljs.core.next(arglist__14166));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14166)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14166)));
return G__14160__delegate.call(this, x, y, z, args);
});
return G__14160;
})()
;
G__14133 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14133__14136.call(this);
case  1 :
return G__14133__14138.call(this,x);
case  2 :
return G__14133__14140.call(this,x,y);
case  3 :
return G__14133__14142.call(this,x,y,z);
default:
return G__14133__14144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14133.cljs$lang$maxFixedArity = 3;
G__14133.cljs$lang$applyTo = G__14133__14144.cljs$lang$applyTo;
return G__14133;
})()
};
var G__14131 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14131__delegate.call(this, f, g, h, fs);
};
G__14131.cljs$lang$maxFixedArity = 3;
G__14131.cljs$lang$applyTo = (function (arglist__14173){
var f = cljs.core.first(arglist__14173);
var g = cljs.core.first(cljs.core.next(arglist__14173));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14173)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14173)));
return G__14131__delegate.call(this, f, g, h, fs);
});
return G__14131;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13986.call(this,f);
case  2 :
return juxt__13987.call(this,f,g);
case  3 :
return juxt__13988.call(this,f,g,h);
default:
return juxt__13989.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13989.cljs$lang$applyTo;
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
var dorun__14215 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14218 = cljs.core.next.call(null,coll);
coll = G__14218;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14216 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14213 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14213))
{return (n > 0);
} else
{return and__3546__auto____14213;
}
})()))
{{
var G__14233 = (n - 1);
var G__14235 = cljs.core.next.call(null,coll);
n = G__14233;
coll = G__14235;
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
return dorun__14215.call(this,n);
case  2 :
return dorun__14216.call(this,n,coll);
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
var doall__14237 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14238 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14237.call(this,n);
case  2 :
return doall__14238.call(this,n,coll);
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
var matches__14245 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14245),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14245),1)))
{return cljs.core.first.call(null,matches__14245);
} else
{return cljs.core.vec.call(null,matches__14245);
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
var matches__14256 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14256)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14256),1)))
{return cljs.core.first.call(null,matches__14256);
} else
{return cljs.core.vec.call(null,matches__14256);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14261 = cljs.core.re_find.call(null,re,s);
var match_idx__14262 = s.search(re);
var match_str__14263 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14261))?cljs.core.first.call(null,match_data__14261):match_data__14261);
var post_match__14264 = cljs.core.subs.call(null,s,(match_idx__14262 + cljs.core.count.call(null,match_str__14263)));

if(cljs.core.truth_(match_data__14261))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14261,re_seq.call(null,re,post_match__14264));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14276_SHARP_){
return print_one.call(null,p1__14276_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14285 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14285))
{var and__3546__auto____14294 = (function (){var x__445__auto____14287 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14288 = x__445__auto____14287;

if(cljs.core.truth_(and__3546__auto____14288))
{var and__3546__auto____14291 = x__445__auto____14287.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14291))
{return cljs.core.not.call(null,x__445__auto____14287.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14291;
}
} else
{return and__3546__auto____14288;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14287);
}
})();

if(cljs.core.truth_(and__3546__auto____14294))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14294;
}
} else
{return and__3546__auto____14285;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14299 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14302 = x__445__auto____14299;

if(cljs.core.truth_(and__3546__auto____14302))
{var and__3546__auto____14305 = x__445__auto____14299.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14305))
{return cljs.core.not.call(null,x__445__auto____14299.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14305;
}
} else
{return and__3546__auto____14302;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14299);
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
var first_obj__14330 = cljs.core.first.call(null,objs);
var sb__14331 = (new goog.string.StringBuffer());

var G__14332__14335 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14332__14335))
{var obj__14338 = cljs.core.first.call(null,G__14332__14335);
var G__14332__14339 = G__14332__14335;

while(true){
if(cljs.core.truth_((obj__14338 === first_obj__14330)))
{} else
{sb__14331.append(" ");
}
var G__14341__14343 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14338,opts));

if(cljs.core.truth_(G__14341__14343))
{var string__14345 = cljs.core.first.call(null,G__14341__14343);
var G__14341__14346 = G__14341__14343;

while(true){
sb__14331.append(string__14345);
var temp__3698__auto____14347 = cljs.core.next.call(null,G__14341__14346);

if(cljs.core.truth_(temp__3698__auto____14347))
{var G__14341__14348 = temp__3698__auto____14347;

{
var G__14365 = cljs.core.first.call(null,G__14341__14348);
var G__14367 = G__14341__14348;
string__14345 = G__14365;
G__14341__14346 = G__14367;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14352 = cljs.core.next.call(null,G__14332__14339);

if(cljs.core.truth_(temp__3698__auto____14352))
{var G__14332__14353 = temp__3698__auto____14352;

{
var G__14371 = cljs.core.first.call(null,G__14332__14353);
var G__14372 = G__14332__14353;
obj__14338 = G__14371;
G__14332__14339 = G__14372;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14331);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14380 = cljs.core.first.call(null,objs);

var G__14382__14383 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14382__14383))
{var obj__14385 = cljs.core.first.call(null,G__14382__14383);
var G__14382__14387 = G__14382__14383;

while(true){
if(cljs.core.truth_((obj__14385 === first_obj__14380)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14391__14393 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14385,opts));

if(cljs.core.truth_(G__14391__14393))
{var string__14396 = cljs.core.first.call(null,G__14391__14393);
var G__14391__14397 = G__14391__14393;

while(true){
cljs.core.string_print.call(null,string__14396);
var temp__3698__auto____14399 = cljs.core.next.call(null,G__14391__14397);

if(cljs.core.truth_(temp__3698__auto____14399))
{var G__14391__14401 = temp__3698__auto____14399;

{
var G__14459 = cljs.core.first.call(null,G__14391__14401);
var G__14460 = G__14391__14401;
string__14396 = G__14459;
G__14391__14397 = G__14460;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14404 = cljs.core.next.call(null,G__14382__14387);

if(cljs.core.truth_(temp__3698__auto____14404))
{var G__14382__14407 = temp__3698__auto____14404;

{
var G__14502 = cljs.core.first.call(null,G__14382__14407);
var G__14503 = G__14382__14407;
obj__14385 = G__14502;
G__14382__14387 = G__14503;
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
pr_str.cljs$lang$applyTo = (function (arglist__14511){
var objs = cljs.core.seq( arglist__14511 );;
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
pr.cljs$lang$applyTo = (function (arglist__14515){
var objs = cljs.core.seq( arglist__14515 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14518){
var objs = cljs.core.seq( arglist__14518 );;
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
println.cljs$lang$applyTo = (function (arglist__14522){
var objs = cljs.core.seq( arglist__14522 );;
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
prn.cljs$lang$applyTo = (function (arglist__14527){
var objs = cljs.core.seq( arglist__14527 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14529 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14529,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14539 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14539))
{var nspc__14541 = temp__3698__auto____14539;

return cljs.core.str.call(null,nspc__14541,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14542 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14542))
{var nspc__14543 = temp__3698__auto____14542;

return cljs.core.str.call(null,nspc__14543,"/");
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
var pr_pair__14550 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14550,"{",", ","}",opts,coll);
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
var this__14622 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14624 = this;
var G__14625__14627 = cljs.core.seq.call(null,this__14624.watches);

if(cljs.core.truth_(G__14625__14627))
{var G__14631__14635 = cljs.core.first.call(null,G__14625__14627);
var vec__14634__14637 = G__14631__14635;
var key__14639 = cljs.core.nth.call(null,vec__14634__14637,0,null);
var f__14673 = cljs.core.nth.call(null,vec__14634__14637,1,null);
var G__14625__14674 = G__14625__14627;

var G__14631__14675 = G__14631__14635;
var G__14625__14676 = G__14625__14674;

while(true){
var vec__14677__14678 = G__14631__14675;
var key__14679 = cljs.core.nth.call(null,vec__14677__14678,0,null);
var f__14680 = cljs.core.nth.call(null,vec__14677__14678,1,null);
var G__14625__14681 = G__14625__14676;

f__14680.call(null,key__14679,this$,oldval,newval);
var temp__3698__auto____14682 = cljs.core.next.call(null,G__14625__14681);

if(cljs.core.truth_(temp__3698__auto____14682))
{var G__14625__14683 = temp__3698__auto____14682;

{
var G__14709 = cljs.core.first.call(null,G__14625__14683);
var G__14710 = G__14625__14683;
G__14631__14675 = G__14709;
G__14625__14676 = G__14710;
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
var this__14684 = this;
return this$.watches = cljs.core.assoc.call(null,this__14684.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14686 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14686.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14690 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14690.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14693 = this;
return this__14693.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14694 = this;
return this__14694.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14696 = this;
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
var atom__14720 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14721 = (function() { 
var G__14723__delegate = function (x,p__14714){
var map__14715__14716 = p__14714;
var map__14715__14717 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14715__14716))?cljs.core.apply.call(null,cljs.core.hash_map,map__14715__14716):map__14715__14716);
var validator__14718 = cljs.core.get.call(null,map__14715__14717,"﷐'validator");
var meta__14719 = cljs.core.get.call(null,map__14715__14717,"﷐'meta");

return (new cljs.core.Atom(x,meta__14719,validator__14718,null));
};
var G__14723 = function (x,var_args){
var p__14714 = null;
if (goog.isDef(var_args)) {
  p__14714 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14723__delegate.call(this, x, p__14714);
};
G__14723.cljs$lang$maxFixedArity = 1;
G__14723.cljs$lang$applyTo = (function (arglist__14724){
var x = cljs.core.first(arglist__14724);
var p__14714 = cljs.core.rest(arglist__14724);
return G__14723__delegate.call(this, x, p__14714);
});
return G__14723;
})()
;
atom = function(x,var_args){
var p__14714 = var_args;
switch(arguments.length){
case  1 :
return atom__14720.call(this,x);
default:
return atom__14721.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14721.cljs$lang$applyTo;
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
{var validate__14727 = temp__3698__auto____14726;

if(cljs.core.truth_(validate__14727.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14728 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14728,new_value);
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
var swap_BANG___14779 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14780 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14781 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14782 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14783 = (function() { 
var G__14785__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14785 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14785__delegate.call(this, a, f, x, y, z, more);
};
G__14785.cljs$lang$maxFixedArity = 5;
G__14785.cljs$lang$applyTo = (function (arglist__14786){
var a = cljs.core.first(arglist__14786);
var f = cljs.core.first(cljs.core.next(arglist__14786));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14786)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14786))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14786)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14786)))));
return G__14785__delegate.call(this, a, f, x, y, z, more);
});
return G__14785;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14779.call(this,a,f);
case  3 :
return swap_BANG___14780.call(this,a,f,x);
case  4 :
return swap_BANG___14781.call(this,a,f,x,y);
case  5 :
return swap_BANG___14782.call(this,a,f,x,y,z);
default:
return swap_BANG___14783.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14783.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14805){
var iref = cljs.core.first(arglist__14805);
var f = cljs.core.first(cljs.core.next(arglist__14805));
var args = cljs.core.rest(cljs.core.next(arglist__14805));
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
var gensym__14817 = (function (){
return gensym.call(null,"G__");
});
var gensym__14818 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14817.call(this);
case  1 :
return gensym__14818.call(this,prefix_string);
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
var this__14838 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14838.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14840 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14840.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14840.state,this__14840.f);
}
return cljs.core.deref.call(null,this__14840.state);
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
delay.cljs$lang$applyTo = (function (arglist__14849){
var body = cljs.core.seq( arglist__14849 );;
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
var map__14868__14869 = options;
var map__14868__14871 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14868__14869))?cljs.core.apply.call(null,cljs.core.hash_map,map__14868__14869):map__14868__14869);
var keywordize_keys__14872 = cljs.core.get.call(null,map__14868__14871,"﷐'keywordize-keys");
var keyfn__14873 = (cljs.core.truth_(keywordize_keys__14872)?cljs.core.keyword:cljs.core.str);
var f__14886 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14884 = (function iter__14877(s__14878){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14878__14879 = s__14878;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14878__14879)))
{var k__14880 = cljs.core.first.call(null,s__14878__14879);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14873.call(null,k__14880),thisfn.call(null,(x[k__14880]))]),iter__14877.call(null,cljs.core.rest.call(null,s__14878__14879)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14884.call(null,cljs.core.js_keys.call(null,x));
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

return f__14886.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14899){
var x = cljs.core.first(arglist__14899);
var options = cljs.core.rest(arglist__14899);
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
var mem__14900 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14912__delegate = function (args){
var temp__3695__auto____14904 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14900),args);

if(cljs.core.truth_(temp__3695__auto____14904))
{var v__14905 = temp__3695__auto____14904;

return v__14905;
} else
{var ret__14906 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14900,cljs.core.assoc,args,ret__14906);
return ret__14906;
}
};
var G__14912 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14912__delegate.call(this, args);
};
G__14912.cljs$lang$maxFixedArity = 0;
G__14912.cljs$lang$applyTo = (function (arglist__14913){
var args = cljs.core.seq( arglist__14913 );;
return G__14912__delegate.call(this, args);
});
return G__14912;
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
var trampoline__14918 = (function (f){
while(true){
var ret__14917 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14917)))
{{
var G__14922 = ret__14917;
f = G__14922;
continue;
}
} else
{return ret__14917;
}
break;
}
});
var trampoline__14919 = (function() { 
var G__14923__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14923 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14923__delegate.call(this, f, args);
};
G__14923.cljs$lang$maxFixedArity = 1;
G__14923.cljs$lang$applyTo = (function (arglist__14925){
var f = cljs.core.first(arglist__14925);
var args = cljs.core.rest(arglist__14925);
return G__14923__delegate.call(this, f, args);
});
return G__14923;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14918.call(this,f);
default:
return trampoline__14919.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14919.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14927 = (function (){
return rand.call(null,1);
});
var rand__14928 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14927.call(this);
case  1 :
return rand__14928.call(this,n);
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
var k__14939 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14939,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14939,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14984 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14985 = (function (h,child,parent){
var or__3548__auto____14943 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14943))
{return or__3548__auto____14943;
} else
{var or__3548__auto____14944 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14944))
{return or__3548__auto____14944;
} else
{var and__3546__auto____14945 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14945))
{var and__3546__auto____14947 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14947))
{var and__3546__auto____14953 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14953))
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
var G__14991 = isa_QMARK_.call(null,h,child.call(null,i__14956),parent.call(null,i__14956));
var G__14992 = (i__14956 + 1);
ret__14955 = G__14991;
i__14956 = G__14992;
continue;
}
}
break;
}
} else
{return and__3546__auto____14953;
}
} else
{return and__3546__auto____14947;
}
} else
{return and__3546__auto____14945;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14984.call(this,h,child);
case  3 :
return isa_QMARK___14985.call(this,h,child,parent);
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
var parents__14993 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14994 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14993.call(this,h);
case  2 :
return parents__14994.call(this,h,tag);
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
var ancestors__15004 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15005 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15004.call(this,h);
case  2 :
return ancestors__15005.call(this,h,tag);
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
var descendants__15019 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15020 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15019.call(this,h);
case  2 :
return descendants__15020.call(this,h,tag);
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
var derive__15041 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15042 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15028 = "﷐'parents".call(null,h);
var td__15029 = "﷐'descendants".call(null,h);
var ta__15031 = "﷐'ancestors".call(null,h);
var tf__15032 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15039 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15028.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15031.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15031.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15028,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15032.call(null,"﷐'ancestors".call(null,h),tag,td__15029,parent,ta__15031),"﷐'descendants":tf__15032.call(null,"﷐'descendants".call(null,h),parent,ta__15031,tag,td__15029)});
})());

if(cljs.core.truth_(or__3548__auto____15039))
{return or__3548__auto____15039;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15041.call(this,h,tag);
case  3 :
return derive__15042.call(this,h,tag,parent);
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
var underive__15068 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15069 = (function (h,tag,parent){
var parentMap__15064 = "﷐'parents".call(null,h);
var childsParents__15065 = (cljs.core.truth_(parentMap__15064.call(null,tag))?cljs.core.disj.call(null,parentMap__15064.call(null,tag),parent):cljs.core.set([]));
var newParents__15066 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15065))?cljs.core.assoc.call(null,parentMap__15064,tag,childsParents__15065):cljs.core.dissoc.call(null,parentMap__15064,tag));
var deriv_seq__15067 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15025_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15025_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15025_SHARP_),cljs.core.second.call(null,p1__15025_SHARP_)));
}),cljs.core.seq.call(null,newParents__15066)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15064.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15026_SHARP_,p2__15027_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15026_SHARP_,p2__15027_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15067));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15068.call(this,h,tag);
case  3 :
return underive__15069.call(this,h,tag,parent);
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
var xprefs__15079 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15083 = (cljs.core.truth_((function (){var and__3546__auto____15081 = xprefs__15079;

if(cljs.core.truth_(and__3546__auto____15081))
{return xprefs__15079.call(null,y);
} else
{return and__3546__auto____15081;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15083))
{return or__3548__auto____15083;
} else
{var or__3548__auto____15090 = (function (){var ps__15086 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15086) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15086),prefer_table)))
{} else
{}
{
var G__15145 = cljs.core.rest.call(null,ps__15086);
ps__15086 = G__15145;
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
{var or__3548__auto____15144 = (function (){var ps__15092 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15092) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15092),y,prefer_table)))
{} else
{}
{
var G__15146 = cljs.core.rest.call(null,ps__15092);
ps__15092 = G__15146;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15144))
{return or__3548__auto____15144;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15156 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15156))
{return or__3548__auto____15156;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15178 = cljs.core.reduce.call(null,(function (be,p__15164){
var vec__15165__15169 = p__15164;
var k__15170 = cljs.core.nth.call(null,vec__15165__15169,0,null);
var ___15172 = cljs.core.nth.call(null,vec__15165__15169,1,null);
var e__15173 = vec__15165__15169;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15170)))
{var be2__15176 = (cljs.core.truth_((function (){var or__3548__auto____15175 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15175))
{return or__3548__auto____15175;
} else
{return cljs.core.dominates.call(null,k__15170,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15173:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15176),k__15170,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15170," and ",cljs.core.first.call(null,be2__15176),", and neither is preferred")));
}
return be2__15176;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15178))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15178));
return cljs.core.second.call(null,best_entry__15178);
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
if(cljs.core.truth_((function (){var and__3546__auto____15199 = mf;

if(cljs.core.truth_(and__3546__auto____15199))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15199;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15202 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15202))
{return or__3548__auto____15202;
} else
{var or__3548__auto____15203 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15203))
{return or__3548__auto____15203;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15205 = mf;

if(cljs.core.truth_(and__3546__auto____15205))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15205;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15210 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15210))
{return or__3548__auto____15210;
} else
{var or__3548__auto____15212 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15212))
{return or__3548__auto____15212;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15216 = mf;

if(cljs.core.truth_(and__3546__auto____15216))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15216;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15217 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15217))
{return or__3548__auto____15217;
} else
{var or__3548__auto____15219 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15219))
{return or__3548__auto____15219;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15223 = mf;

if(cljs.core.truth_(and__3546__auto____15223))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15223;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15225 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15225))
{return or__3548__auto____15225;
} else
{var or__3548__auto____15228 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15228))
{return or__3548__auto____15228;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15237 = mf;

if(cljs.core.truth_(and__3546__auto____15237))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15237;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15241 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15241))
{return or__3548__auto____15241;
} else
{var or__3548__auto____15243 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15243))
{return or__3548__auto____15243;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15248 = mf;

if(cljs.core.truth_(and__3546__auto____15248))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15248;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15251 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15251))
{return or__3548__auto____15251;
} else
{var or__3548__auto____15252 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15252))
{return or__3548__auto____15252;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15258 = mf;

if(cljs.core.truth_(and__3546__auto____15258))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15258;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15261 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15261))
{return or__3548__auto____15261;
} else
{var or__3548__auto____15293 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15293))
{return or__3548__auto____15293;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15294 = mf;

if(cljs.core.truth_(and__3546__auto____15294))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15294;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15299 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15299))
{return or__3548__auto____15299;
} else
{var or__3548__auto____15301 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15301))
{return or__3548__auto____15301;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15325 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15327 = cljs.core._get_method.call(null,mf,dispatch_val__15325);

if(cljs.core.truth_(target_fn__15327))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15325)));
}
return cljs.core.apply.call(null,target_fn__15327,args);
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
var this__15333 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15334 = this;
cljs.core.swap_BANG_.call(null,this__15334.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15334.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15334.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15334.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15348 = this;
cljs.core.swap_BANG_.call(null,this__15348.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15348.method_cache,this__15348.method_table,this__15348.cached_hierarchy,this__15348.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15352 = this;
cljs.core.swap_BANG_.call(null,this__15352.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15352.method_cache,this__15352.method_table,this__15352.cached_hierarchy,this__15352.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15355 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15355.cached_hierarchy),cljs.core.deref.call(null,this__15355.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15355.method_cache,this__15355.method_table,this__15355.cached_hierarchy,this__15355.hierarchy);
}
var temp__3695__auto____15356 = cljs.core.deref.call(null,this__15355.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15356))
{var target_fn__15357 = temp__3695__auto____15356;

return target_fn__15357;
} else
{var temp__3695__auto____15358 = cljs.core.find_and_cache_best_method.call(null,this__15355.name,dispatch_val,this__15355.hierarchy,this__15355.method_table,this__15355.prefer_table,this__15355.method_cache,this__15355.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15358))
{var target_fn__15359 = temp__3695__auto____15358;

return target_fn__15359;
} else
{return cljs.core.deref.call(null,this__15355.method_table).call(null,this__15355.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15360 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15360.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15360.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15360.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15360.method_cache,this__15360.method_table,this__15360.cached_hierarchy,this__15360.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15361 = this;
return cljs.core.deref.call(null,this__15361.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15362 = this;
return cljs.core.deref.call(null,this__15362.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15364 = this;
return cljs.core.do_dispatch.call(null,mf,this__15364.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15390__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15390 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15390__delegate.call(this, _, args);
};
G__15390.cljs$lang$maxFixedArity = 1;
G__15390.cljs$lang$applyTo = (function (arglist__15392){
var _ = cljs.core.first(arglist__15392);
var args = cljs.core.rest(arglist__15392);
return G__15390__delegate.call(this, _, args);
});
return G__15390;
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
