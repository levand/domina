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
var or__3548__auto____7202 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7202))
{return or__3548__auto____7202;
} else
{var or__3548__auto____7203 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7203))
{return or__3548__auto____7203;
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
var _invoke__7490 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7255 = this$;

if(cljs.core.truth_(and__3546__auto____7255))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7255;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7258 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7258))
{return or__3548__auto____7258;
} else
{var or__3548__auto____7260 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7260))
{return or__3548__auto____7260;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7491 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7278 = this$;

if(cljs.core.truth_(and__3546__auto____7278))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7278;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7282 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7282))
{return or__3548__auto____7282;
} else
{var or__3548__auto____7283 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7283))
{return or__3548__auto____7283;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7492 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7287 = this$;

if(cljs.core.truth_(and__3546__auto____7287))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7287;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7291 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7291))
{return or__3548__auto____7291;
} else
{var or__3548__auto____7292 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7292))
{return or__3548__auto____7292;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7493 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7296 = this$;

if(cljs.core.truth_(and__3546__auto____7296))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7296;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7299 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7299))
{return or__3548__auto____7299;
} else
{var or__3548__auto____7301 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7301))
{return or__3548__auto____7301;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7494 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7304 = this$;

if(cljs.core.truth_(and__3546__auto____7304))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7304;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7307 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7307))
{return or__3548__auto____7307;
} else
{var or__3548__auto____7310 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7310))
{return or__3548__auto____7310;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7495 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7313 = this$;

if(cljs.core.truth_(and__3546__auto____7313))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7313;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7316 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7316))
{return or__3548__auto____7316;
} else
{var or__3548__auto____7319 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7319))
{return or__3548__auto____7319;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7496 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7321 = this$;

if(cljs.core.truth_(and__3546__auto____7321))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7321;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7324 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7324))
{return or__3548__auto____7324;
} else
{var or__3548__auto____7326 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7326))
{return or__3548__auto____7326;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7497 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7330 = this$;

if(cljs.core.truth_(and__3546__auto____7330))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7330;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7336 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7336))
{return or__3548__auto____7336;
} else
{var or__3548__auto____7337 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7337))
{return or__3548__auto____7337;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7498 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7342 = this$;

if(cljs.core.truth_(and__3546__auto____7342))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7342;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7348 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7348))
{return or__3548__auto____7348;
} else
{var or__3548__auto____7350 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7350))
{return or__3548__auto____7350;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7499 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7354 = this$;

if(cljs.core.truth_(and__3546__auto____7354))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7354;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7359 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7359))
{return or__3548__auto____7359;
} else
{var or__3548__auto____7360 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7360))
{return or__3548__auto____7360;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7500 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7364 = this$;

if(cljs.core.truth_(and__3546__auto____7364))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7364;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7501 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7376 = this$;

if(cljs.core.truth_(and__3546__auto____7376))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7376;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7502 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7388 = this$;

if(cljs.core.truth_(and__3546__auto____7388))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7388;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7503 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7398 = this$;

if(cljs.core.truth_(and__3546__auto____7398))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7398;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7402 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7402))
{return or__3548__auto____7402;
} else
{var or__3548__auto____7403 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7403))
{return or__3548__auto____7403;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7505 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7407 = this$;

if(cljs.core.truth_(and__3546__auto____7407))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7407;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7409 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7409))
{return or__3548__auto____7409;
} else
{var or__3548__auto____7411 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7411))
{return or__3548__auto____7411;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7506 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7415 = this$;

if(cljs.core.truth_(and__3546__auto____7415))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7415;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7417 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7417))
{return or__3548__auto____7417;
} else
{var or__3548__auto____7419 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7419))
{return or__3548__auto____7419;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7507 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7422 = this$;

if(cljs.core.truth_(and__3546__auto____7422))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7422;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7439 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7439))
{return or__3548__auto____7439;
} else
{var or__3548__auto____7450 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7450))
{return or__3548__auto____7450;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7508 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
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
{var or__3548__auto____7459 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7459))
{return or__3548__auto____7459;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7509 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7462 = this$;

if(cljs.core.truth_(and__3546__auto____7462))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7462;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7466 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7466))
{return or__3548__auto____7466;
} else
{var or__3548__auto____7467 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7467))
{return or__3548__auto____7467;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7510 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7471 = this$;

if(cljs.core.truth_(and__3546__auto____7471))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7471;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7475 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7475))
{return or__3548__auto____7475;
} else
{var or__3548__auto____7477 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7477))
{return or__3548__auto____7477;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7511 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7479 = this$;

if(cljs.core.truth_(and__3546__auto____7479))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7479;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7481 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7481))
{return or__3548__auto____7481;
} else
{var or__3548__auto____7484 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7484))
{return or__3548__auto____7484;
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
return _invoke__7490.call(this,this$);
case  2 :
return _invoke__7491.call(this,this$,a);
case  3 :
return _invoke__7492.call(this,this$,a,b);
case  4 :
return _invoke__7493.call(this,this$,a,b,c);
case  5 :
return _invoke__7494.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7495.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7496.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7497.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7498.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7499.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7500.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7501.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7502.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7503.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7505.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7506.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7507.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7508.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7509.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7510.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7511.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7628 = coll;

if(cljs.core.truth_(and__3546__auto____7628))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7628;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7629 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7629))
{return or__3548__auto____7629;
} else
{var or__3548__auto____7630 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7630))
{return or__3548__auto____7630;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7669 = coll;

if(cljs.core.truth_(and__3546__auto____7669))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7669;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7671 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7671))
{return or__3548__auto____7671;
} else
{var or__3548__auto____7673 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7673))
{return or__3548__auto____7673;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7678 = coll;

if(cljs.core.truth_(and__3546__auto____7678))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7678;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7679 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7679))
{return or__3548__auto____7679;
} else
{var or__3548__auto____7680 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7680))
{return or__3548__auto____7680;
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
var _nth__7693 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7683 = coll;

if(cljs.core.truth_(and__3546__auto____7683))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7683;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7686 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7686))
{return or__3548__auto____7686;
} else
{var or__3548__auto____7689 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7689))
{return or__3548__auto____7689;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7695 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7690 = coll;

if(cljs.core.truth_(and__3546__auto____7690))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7690;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7691 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7691))
{return or__3548__auto____7691;
} else
{var or__3548__auto____7692 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7692))
{return or__3548__auto____7692;
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
return _nth__7693.call(this,coll,n);
case  3 :
return _nth__7695.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7702 = coll;

if(cljs.core.truth_(and__3546__auto____7702))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7702;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7704 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7704))
{return or__3548__auto____7704;
} else
{var or__3548__auto____7705 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7705))
{return or__3548__auto____7705;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7758 = coll;

if(cljs.core.truth_(and__3546__auto____7758))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7758;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7760 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7760))
{return or__3548__auto____7760;
} else
{var or__3548__auto____7762 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7762))
{return or__3548__auto____7762;
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
var _lookup__7878 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7866 = o;

if(cljs.core.truth_(and__3546__auto____7866))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7866;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7868 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7868))
{return or__3548__auto____7868;
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
var _lookup__7879 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7872 = o;

if(cljs.core.truth_(and__3546__auto____7872))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7872;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7875 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7875))
{return or__3548__auto____7875;
} else
{var or__3548__auto____7876 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7876))
{return or__3548__auto____7876;
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
return _lookup__7878.call(this,o,k);
case  3 :
return _lookup__7879.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7891 = coll;

if(cljs.core.truth_(and__3546__auto____7891))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7891;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7897 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7897))
{return or__3548__auto____7897;
} else
{var or__3548__auto____7898 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7898))
{return or__3548__auto____7898;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7902 = coll;

if(cljs.core.truth_(and__3546__auto____7902))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7902;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7905 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7905))
{return or__3548__auto____7905;
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
if(cljs.core.truth_((function (){var and__3546__auto____7994 = coll;

if(cljs.core.truth_(and__3546__auto____7994))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7994;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7997 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7997))
{return or__3548__auto____7997;
} else
{var or__3548__auto____8000 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____8000))
{return or__3548__auto____8000;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____8007 = coll;

if(cljs.core.truth_(and__3546__auto____8007))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____8007;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____8012 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8012))
{return or__3548__auto____8012;
} else
{var or__3548__auto____8013 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____8013))
{return or__3548__auto____8013;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8018 = coll;

if(cljs.core.truth_(and__3546__auto____8018))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____8018;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____8021 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8021))
{return or__3548__auto____8021;
} else
{var or__3548__auto____8023 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____8023))
{return or__3548__auto____8023;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8026 = coll;

if(cljs.core.truth_(and__3546__auto____8026))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____8026;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8027 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8027))
{return or__3548__auto____8027;
} else
{var or__3548__auto____8029 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8029))
{return or__3548__auto____8029;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8035 = coll;

if(cljs.core.truth_(and__3546__auto____8035))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8035;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8039 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8039))
{return or__3548__auto____8039;
} else
{var or__3548__auto____8041 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8041))
{return or__3548__auto____8041;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8047 = o;

if(cljs.core.truth_(and__3546__auto____8047))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8047;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8053 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8053))
{return or__3548__auto____8053;
} else
{var or__3548__auto____8055 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8055))
{return or__3548__auto____8055;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8063 = o;

if(cljs.core.truth_(and__3546__auto____8063))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8063;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8065 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8065))
{return or__3548__auto____8065;
} else
{var or__3548__auto____8067 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8067))
{return or__3548__auto____8067;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8078 = o;

if(cljs.core.truth_(and__3546__auto____8078))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8078;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8083 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
} else
{var or__3548__auto____8085 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8085))
{return or__3548__auto____8085;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8091 = o;

if(cljs.core.truth_(and__3546__auto____8091))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8091;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8094 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8094))
{return or__3548__auto____8094;
} else
{var or__3548__auto____8095 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8095))
{return or__3548__auto____8095;
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
var _reduce__8117 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8107 = coll;

if(cljs.core.truth_(and__3546__auto____8107))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8107;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8109 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8109))
{return or__3548__auto____8109;
} else
{var or__3548__auto____8111 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8111))
{return or__3548__auto____8111;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8118 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8113 = coll;

if(cljs.core.truth_(and__3546__auto____8113))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8113;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8114 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8114))
{return or__3548__auto____8114;
} else
{var or__3548__auto____8115 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8115))
{return or__3548__auto____8115;
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
return _reduce__8117.call(this,coll,f);
case  3 :
return _reduce__8118.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8123 = o;

if(cljs.core.truth_(and__3546__auto____8123))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8123;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8124 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8124))
{return or__3548__auto____8124;
} else
{var or__3548__auto____8125 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8125))
{return or__3548__auto____8125;
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
{return (function (){var or__3548__auto____8127 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8127))
{return or__3548__auto____8127;
} else
{var or__3548__auto____8128 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8128))
{return or__3548__auto____8128;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8132 = o;

if(cljs.core.truth_(and__3546__auto____8132))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8132;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8136 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8136))
{return or__3548__auto____8136;
} else
{var or__3548__auto____8139 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8139))
{return or__3548__auto____8139;
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
if(cljs.core.truth_((function (){var and__3546__auto____8160 = o;

if(cljs.core.truth_(and__3546__auto____8160))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8160;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8167 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8167))
{return or__3548__auto____8167;
} else
{var or__3548__auto____8168 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8168))
{return or__3548__auto____8168;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8172 = d;

if(cljs.core.truth_(and__3546__auto____8172))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8172;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8175 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8175))
{return or__3548__auto____8175;
} else
{var or__3548__auto____8177 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8177))
{return or__3548__auto____8177;
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
{return (function (){var or__3548__auto____8189 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8189))
{return or__3548__auto____8189;
} else
{var or__3548__auto____8191 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8191))
{return or__3548__auto____8191;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8193 = this$;

if(cljs.core.truth_(and__3546__auto____8193))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8193;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8200 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8200))
{return or__3548__auto____8200;
} else
{var or__3548__auto____8202 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8202))
{return or__3548__auto____8202;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8208 = this$;

if(cljs.core.truth_(and__3546__auto____8208))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8208;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8213 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8213))
{return or__3548__auto____8213;
} else
{var or__3548__auto____8214 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8214))
{return or__3548__auto____8214;
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
var G__8235 = null;
var G__8235__8236 = (function (o,k){
return null;
});
var G__8235__8237 = (function (o,k,not_found){
return not_found;
});
G__8235 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8235__8236.call(this,o,k);
case  3 :
return G__8235__8237.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8235;
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
var G__8243 = null;
var G__8243__8244 = (function (_,f){
return f.call(null);
});
var G__8243__8245 = (function (_,f,start){
return start;
});
G__8243 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8243__8244.call(this,_,f);
case  3 :
return G__8243__8245.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8243;
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
var G__8259 = null;
var G__8259__8260 = (function (_,n){
return null;
});
var G__8259__8261 = (function (_,n,not_found){
return not_found;
});
G__8259 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8259__8260.call(this,_,n);
case  3 :
return G__8259__8261.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8259;
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
var ci_reduce__8386 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8372 = cljs.core._nth.call(null,cicoll,0);
var n__8373 = 1;

while(true){
if(cljs.core.truth_((n__8373 < cljs.core._count.call(null,cicoll))))
{{
var G__8391 = f.call(null,val__8372,cljs.core._nth.call(null,cicoll,n__8373));
var G__8392 = (n__8373 + 1);
val__8372 = G__8391;
n__8373 = G__8392;
continue;
}
} else
{return val__8372;
}
break;
}
}
});
var ci_reduce__8387 = (function (cicoll,f,val){
var val__8374 = val;
var n__8375 = 0;

while(true){
if(cljs.core.truth_((n__8375 < cljs.core._count.call(null,cicoll))))
{{
var G__8393 = f.call(null,val__8374,cljs.core._nth.call(null,cicoll,n__8375));
var G__8394 = (n__8375 + 1);
val__8374 = G__8393;
n__8375 = G__8394;
continue;
}
} else
{return val__8374;
}
break;
}
});
var ci_reduce__8388 = (function (cicoll,f,val,idx){
var val__8378 = val;
var n__8381 = idx;

while(true){
if(cljs.core.truth_((n__8381 < cljs.core._count.call(null,cicoll))))
{{
var G__8395 = f.call(null,val__8378,cljs.core._nth.call(null,cicoll,n__8381));
var G__8396 = (n__8381 + 1);
val__8378 = G__8395;
n__8381 = G__8396;
continue;
}
} else
{return val__8378;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8386.call(this,cicoll,f);
case  3 :
return ci_reduce__8387.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8388.call(this,cicoll,f,val,idx);
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
var this__8403 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8447 = null;
var G__8447__8448 = (function (_,f){
var this__8404 = this;
return cljs.core.ci_reduce.call(null,this__8404.a,f,(this__8404.a[this__8404.i]),(this__8404.i + 1));
});
var G__8447__8449 = (function (_,f,start){
var this__8405 = this;
return cljs.core.ci_reduce.call(null,this__8405.a,f,start,this__8405.i);
});
G__8447 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8447__8448.call(this,_,f);
case  3 :
return G__8447__8449.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8447;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8409 = this;
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
var G__8456 = null;
var G__8456__8457 = (function (coll,n){
var this__8411 = this;
var i__8412 = (n + this__8411.i);

if(cljs.core.truth_((i__8412 < this__8411.a.length)))
{return (this__8411.a[i__8412]);
} else
{return null;
}
});
var G__8456__8458 = (function (coll,n,not_found){
var this__8413 = this;
var i__8414 = (n + this__8413.i);

if(cljs.core.truth_((i__8414 < this__8413.a.length)))
{return (this__8413.a[i__8414]);
} else
{return not_found;
}
});
G__8456 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8456__8457.call(this,coll,n);
case  3 :
return G__8456__8458.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8456;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8419 = this;
return (this__8419.a.length - this__8419.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8421 = this;
return (this__8421.a[this__8421.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8426 = this;
if(cljs.core.truth_(((this__8426.i + 1) < this__8426.a.length)))
{return (new cljs.core.IndexedSeq(this__8426.a,(this__8426.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8440 = this;
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
var G__8481 = null;
var G__8481__8482 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8481__8483 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8481 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8481__8482.call(this,array,f);
case  3 :
return G__8481__8483.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8481;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8488 = null;
var G__8488__8489 = (function (array,k){
return (array[k]);
});
var G__8488__8491 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8488 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8488__8489.call(this,array,k);
case  3 :
return G__8488__8491.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8488;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8498 = null;
var G__8498__8499 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8498__8500 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8498 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8498__8499.call(this,array,n);
case  3 :
return G__8498__8500.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8498;
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
var temp__3698__auto____8514 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8514))
{var s__8515 = temp__3698__auto____8514;

return cljs.core._first.call(null,s__8515);
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
var G__8543 = cljs.core.next.call(null,s);
s = G__8543;
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
var s__8548 = cljs.core.seq.call(null,x);
var n__8549 = 0;

while(true){
if(cljs.core.truth_(s__8548))
{{
var G__8562 = cljs.core.next.call(null,s__8548);
var G__8563 = (n__8549 + 1);
s__8548 = G__8562;
n__8549 = G__8563;
continue;
}
} else
{return n__8549;
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
var conj__8576 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8577 = (function() { 
var G__8579__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8580 = conj.call(null,coll,x);
var G__8581 = cljs.core.first.call(null,xs);
var G__8582 = cljs.core.next.call(null,xs);
coll = G__8580;
x = G__8581;
xs = G__8582;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8579 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8579__delegate.call(this, coll, x, xs);
};
G__8579.cljs$lang$maxFixedArity = 2;
G__8579.cljs$lang$applyTo = (function (arglist__8584){
var coll = cljs.core.first(arglist__8584);
var x = cljs.core.first(cljs.core.next(arglist__8584));
var xs = cljs.core.rest(cljs.core.next(arglist__8584));
return G__8579__delegate.call(this, coll, x, xs);
});
return G__8579;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8576.call(this,coll,x);
default:
return conj__8577.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8577.cljs$lang$applyTo;
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
var nth__8611 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8612 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8611.call(this,coll,n);
case  3 :
return nth__8612.call(this,coll,n,not_found);
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
var get__8616 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8617 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8616.call(this,o,k);
case  3 :
return get__8617.call(this,o,k,not_found);
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
var assoc__8621 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8622 = (function() { 
var G__8624__delegate = function (coll,k,v,kvs){
while(true){
var ret__8619 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8625 = ret__8619;
var G__8626 = cljs.core.first.call(null,kvs);
var G__8627 = cljs.core.second.call(null,kvs);
var G__8628 = cljs.core.nnext.call(null,kvs);
coll = G__8625;
k = G__8626;
v = G__8627;
kvs = G__8628;
continue;
}
} else
{return ret__8619;
}
break;
}
};
var G__8624 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8624__delegate.call(this, coll, k, v, kvs);
};
G__8624.cljs$lang$maxFixedArity = 3;
G__8624.cljs$lang$applyTo = (function (arglist__8629){
var coll = cljs.core.first(arglist__8629);
var k = cljs.core.first(cljs.core.next(arglist__8629));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8629)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8629)));
return G__8624__delegate.call(this, coll, k, v, kvs);
});
return G__8624;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8621.call(this,coll,k,v);
default:
return assoc__8622.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8622.cljs$lang$applyTo;
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
var dissoc__8634 = (function (coll){
return coll;
});
var dissoc__8635 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8636 = (function() { 
var G__8638__delegate = function (coll,k,ks){
while(true){
var ret__8633 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8639 = ret__8633;
var G__8640 = cljs.core.first.call(null,ks);
var G__8641 = cljs.core.next.call(null,ks);
coll = G__8639;
k = G__8640;
ks = G__8641;
continue;
}
} else
{return ret__8633;
}
break;
}
};
var G__8638 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8638__delegate.call(this, coll, k, ks);
};
G__8638.cljs$lang$maxFixedArity = 2;
G__8638.cljs$lang$applyTo = (function (arglist__8642){
var coll = cljs.core.first(arglist__8642);
var k = cljs.core.first(cljs.core.next(arglist__8642));
var ks = cljs.core.rest(cljs.core.next(arglist__8642));
return G__8638__delegate.call(this, coll, k, ks);
});
return G__8638;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8634.call(this,coll);
case  2 :
return dissoc__8635.call(this,coll,k);
default:
return dissoc__8636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8636.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8643 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8645 = x__445__auto____8643;

if(cljs.core.truth_(and__3546__auto____8645))
{var and__3546__auto____8646 = x__445__auto____8643.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8646))
{return cljs.core.not.call(null,x__445__auto____8643.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8646;
}
} else
{return and__3546__auto____8645;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8643);
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
var disj__8667 = (function (coll){
return coll;
});
var disj__8668 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8669 = (function() { 
var G__8671__delegate = function (coll,k,ks){
while(true){
var ret__8666 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8675 = ret__8666;
var G__8676 = cljs.core.first.call(null,ks);
var G__8677 = cljs.core.next.call(null,ks);
coll = G__8675;
k = G__8676;
ks = G__8677;
continue;
}
} else
{return ret__8666;
}
break;
}
};
var G__8671 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8671__delegate.call(this, coll, k, ks);
};
G__8671.cljs$lang$maxFixedArity = 2;
G__8671.cljs$lang$applyTo = (function (arglist__8679){
var coll = cljs.core.first(arglist__8679);
var k = cljs.core.first(cljs.core.next(arglist__8679));
var ks = cljs.core.rest(cljs.core.next(arglist__8679));
return G__8671__delegate.call(this, coll, k, ks);
});
return G__8671;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8667.call(this,coll);
case  2 :
return disj__8668.call(this,coll,k);
default:
return disj__8669.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8669.cljs$lang$applyTo;
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
{var x__445__auto____8694 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8696 = x__445__auto____8694;

if(cljs.core.truth_(and__3546__auto____8696))
{var and__3546__auto____8697 = x__445__auto____8694.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8697))
{return cljs.core.not.call(null,x__445__auto____8694.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8697;
}
} else
{return and__3546__auto____8696;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8694);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8709 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8710 = x__445__auto____8709;

if(cljs.core.truth_(and__3546__auto____8710))
{var and__3546__auto____8711 = x__445__auto____8709.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8711))
{return cljs.core.not.call(null,x__445__auto____8709.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8711;
}
} else
{return and__3546__auto____8710;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8709);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8722 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8723 = x__445__auto____8722;

if(cljs.core.truth_(and__3546__auto____8723))
{var and__3546__auto____8724 = x__445__auto____8722.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8724))
{return cljs.core.not.call(null,x__445__auto____8722.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8724;
}
} else
{return and__3546__auto____8723;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8722);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8729 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8730 = x__445__auto____8729;

if(cljs.core.truth_(and__3546__auto____8730))
{var and__3546__auto____8731 = x__445__auto____8729.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8731))
{return cljs.core.not.call(null,x__445__auto____8729.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8731;
}
} else
{return and__3546__auto____8730;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8729);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8732 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8734 = x__445__auto____8732;

if(cljs.core.truth_(and__3546__auto____8734))
{var and__3546__auto____8749 = x__445__auto____8732.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8749))
{return cljs.core.not.call(null,x__445__auto____8732.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8749;
}
} else
{return and__3546__auto____8734;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8732);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8755 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8756 = x__445__auto____8755;

if(cljs.core.truth_(and__3546__auto____8756))
{var and__3546__auto____8757 = x__445__auto____8755.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8757))
{return cljs.core.not.call(null,x__445__auto____8755.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8757;
}
} else
{return and__3546__auto____8756;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8755);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8766 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8766.push(key);
}));
return keys__8766;
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
{var x__445__auto____8789 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8790 = x__445__auto____8789;

if(cljs.core.truth_(and__3546__auto____8790))
{var and__3546__auto____8791 = x__445__auto____8789.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8791))
{return cljs.core.not.call(null,x__445__auto____8789.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8791;
}
} else
{return and__3546__auto____8790;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8789);
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
var and__3546__auto____8811 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8811))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8812 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8812))
{return or__3548__auto____8812;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8811;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8824 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8824))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8824;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8827 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8827))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8827;
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
var and__3546__auto____8841 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8841))
{return (n == n.toFixed());
} else
{return and__3546__auto____8841;
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
if(cljs.core.truth_((function (){var and__3546__auto____8854 = coll;

if(cljs.core.truth_(and__3546__auto____8854))
{var and__3546__auto____8855 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8855))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8855;
}
} else
{return and__3546__auto____8854;
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
var distinct_QMARK___8874 = (function (x){
return true;
});
var distinct_QMARK___8876 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8877 = (function() { 
var G__8879__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8862 = cljs.core.set([y,x]);
var xs__8865 = more;

while(true){
var x__8866 = cljs.core.first.call(null,xs__8865);
var etc__8867 = cljs.core.next.call(null,xs__8865);

if(cljs.core.truth_(xs__8865))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8862,x__8866)))
{return false;
} else
{{
var G__8880 = cljs.core.conj.call(null,s__8862,x__8866);
var G__8881 = etc__8867;
s__8862 = G__8880;
xs__8865 = G__8881;
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
var G__8879 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8879__delegate.call(this, x, y, more);
};
G__8879.cljs$lang$maxFixedArity = 2;
G__8879.cljs$lang$applyTo = (function (arglist__8885){
var x = cljs.core.first(arglist__8885);
var y = cljs.core.first(cljs.core.next(arglist__8885));
var more = cljs.core.rest(cljs.core.next(arglist__8885));
return G__8879__delegate.call(this, x, y, more);
});
return G__8879;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8874.call(this,x);
case  2 :
return distinct_QMARK___8876.call(this,x,y);
default:
return distinct_QMARK___8877.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8877.cljs$lang$applyTo;
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
var r__8898 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8898)))
{return r__8898;
} else
{if(cljs.core.truth_(r__8898))
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
var sort__8920 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8921 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8918 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8918,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8918);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8920.call(this,comp);
case  2 :
return sort__8921.call(this,comp,coll);
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
var sort_by__8935 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8936 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8935.call(this,keyfn,comp);
case  3 :
return sort_by__8936.call(this,keyfn,comp,coll);
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
var reduce__8947 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8948 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8947.call(this,f,val);
case  3 :
return reduce__8948.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9025 = (function (f,coll){
var temp__3695__auto____8955 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8955))
{var s__8959 = temp__3695__auto____8955;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8959),cljs.core.next.call(null,s__8959));
} else
{return f.call(null);
}
});
var seq_reduce__9026 = (function (f,val,coll){
var val__8964 = val;
var coll__8965 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8965))
{{
var G__9033 = f.call(null,val__8964,cljs.core.first.call(null,coll__8965));
var G__9034 = cljs.core.next.call(null,coll__8965);
val__8964 = G__9033;
coll__8965 = G__9034;
continue;
}
} else
{return val__8964;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9025.call(this,f,val);
case  3 :
return seq_reduce__9026.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9035 = null;
var G__9035__9036 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9035__9037 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9035 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9035__9036.call(this,coll,f);
case  3 :
return G__9035__9037.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9035;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9039 = (function (){
return 0;
});
var _PLUS___9040 = (function (x){
return x;
});
var _PLUS___9041 = (function (x,y){
return (x + y);
});
var _PLUS___9042 = (function() { 
var G__9044__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9044 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9044__delegate.call(this, x, y, more);
};
G__9044.cljs$lang$maxFixedArity = 2;
G__9044.cljs$lang$applyTo = (function (arglist__9045){
var x = cljs.core.first(arglist__9045);
var y = cljs.core.first(cljs.core.next(arglist__9045));
var more = cljs.core.rest(cljs.core.next(arglist__9045));
return G__9044__delegate.call(this, x, y, more);
});
return G__9044;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9039.call(this);
case  1 :
return _PLUS___9040.call(this,x);
case  2 :
return _PLUS___9041.call(this,x,y);
default:
return _PLUS___9042.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9042.cljs$lang$applyTo;
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
var ___9046 = (function (x){
return (- x);
});
var ___9047 = (function (x,y){
return (x - y);
});
var ___9048 = (function() { 
var G__9050__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9050 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9050__delegate.call(this, x, y, more);
};
G__9050.cljs$lang$maxFixedArity = 2;
G__9050.cljs$lang$applyTo = (function (arglist__9051){
var x = cljs.core.first(arglist__9051);
var y = cljs.core.first(cljs.core.next(arglist__9051));
var more = cljs.core.rest(cljs.core.next(arglist__9051));
return G__9050__delegate.call(this, x, y, more);
});
return G__9050;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9046.call(this,x);
case  2 :
return ___9047.call(this,x,y);
default:
return ___9048.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9048.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9055 = (function (){
return 1;
});
var _STAR___9056 = (function (x){
return x;
});
var _STAR___9057 = (function (x,y){
return (x * y);
});
var _STAR___9058 = (function() { 
var G__9060__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9060 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9060__delegate.call(this, x, y, more);
};
G__9060.cljs$lang$maxFixedArity = 2;
G__9060.cljs$lang$applyTo = (function (arglist__9061){
var x = cljs.core.first(arglist__9061);
var y = cljs.core.first(cljs.core.next(arglist__9061));
var more = cljs.core.rest(cljs.core.next(arglist__9061));
return G__9060__delegate.call(this, x, y, more);
});
return G__9060;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9055.call(this);
case  1 :
return _STAR___9056.call(this,x);
case  2 :
return _STAR___9057.call(this,x,y);
default:
return _STAR___9058.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9058.cljs$lang$applyTo;
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
var _SLASH___9065 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9066 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9067 = (function() { 
var G__9069__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9069 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9069__delegate.call(this, x, y, more);
};
G__9069.cljs$lang$maxFixedArity = 2;
G__9069.cljs$lang$applyTo = (function (arglist__9070){
var x = cljs.core.first(arglist__9070);
var y = cljs.core.first(cljs.core.next(arglist__9070));
var more = cljs.core.rest(cljs.core.next(arglist__9070));
return G__9069__delegate.call(this, x, y, more);
});
return G__9069;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9065.call(this,x);
case  2 :
return _SLASH___9066.call(this,x,y);
default:
return _SLASH___9067.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9067.cljs$lang$applyTo;
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
var _LT___9072 = (function (x){
return true;
});
var _LT___9073 = (function (x,y){
return (x < y);
});
var _LT___9074 = (function() { 
var G__9076__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9077 = y;
var G__9078 = cljs.core.first.call(null,more);
var G__9079 = cljs.core.next.call(null,more);
x = G__9077;
y = G__9078;
more = G__9079;
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
var G__9076 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9076__delegate.call(this, x, y, more);
};
G__9076.cljs$lang$maxFixedArity = 2;
G__9076.cljs$lang$applyTo = (function (arglist__9080){
var x = cljs.core.first(arglist__9080);
var y = cljs.core.first(cljs.core.next(arglist__9080));
var more = cljs.core.rest(cljs.core.next(arglist__9080));
return G__9076__delegate.call(this, x, y, more);
});
return G__9076;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9072.call(this,x);
case  2 :
return _LT___9073.call(this,x,y);
default:
return _LT___9074.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9074.cljs$lang$applyTo;
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
var _LT__EQ___9081 = (function (x){
return true;
});
var _LT__EQ___9082 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9083 = (function() { 
var G__9085__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9087 = y;
var G__9088 = cljs.core.first.call(null,more);
var G__9089 = cljs.core.next.call(null,more);
x = G__9087;
y = G__9088;
more = G__9089;
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
var G__9085 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9085__delegate.call(this, x, y, more);
};
G__9085.cljs$lang$maxFixedArity = 2;
G__9085.cljs$lang$applyTo = (function (arglist__9092){
var x = cljs.core.first(arglist__9092);
var y = cljs.core.first(cljs.core.next(arglist__9092));
var more = cljs.core.rest(cljs.core.next(arglist__9092));
return G__9085__delegate.call(this, x, y, more);
});
return G__9085;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9081.call(this,x);
case  2 :
return _LT__EQ___9082.call(this,x,y);
default:
return _LT__EQ___9083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9083.cljs$lang$applyTo;
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
var _GT___9193 = (function (x){
return true;
});
var _GT___9194 = (function (x,y){
return (x > y);
});
var _GT___9195 = (function() { 
var G__9197__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9201 = y;
var G__9202 = cljs.core.first.call(null,more);
var G__9203 = cljs.core.next.call(null,more);
x = G__9201;
y = G__9202;
more = G__9203;
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
var G__9197 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9197__delegate.call(this, x, y, more);
};
G__9197.cljs$lang$maxFixedArity = 2;
G__9197.cljs$lang$applyTo = (function (arglist__9204){
var x = cljs.core.first(arglist__9204);
var y = cljs.core.first(cljs.core.next(arglist__9204));
var more = cljs.core.rest(cljs.core.next(arglist__9204));
return G__9197__delegate.call(this, x, y, more);
});
return G__9197;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9193.call(this,x);
case  2 :
return _GT___9194.call(this,x,y);
default:
return _GT___9195.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9195.cljs$lang$applyTo;
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
var _GT__EQ___9209 = (function (x){
return true;
});
var _GT__EQ___9210 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9211 = (function() { 
var G__9213__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9214 = y;
var G__9215 = cljs.core.first.call(null,more);
var G__9216 = cljs.core.next.call(null,more);
x = G__9214;
y = G__9215;
more = G__9216;
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
var G__9213 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9213__delegate.call(this, x, y, more);
};
G__9213.cljs$lang$maxFixedArity = 2;
G__9213.cljs$lang$applyTo = (function (arglist__9221){
var x = cljs.core.first(arglist__9221);
var y = cljs.core.first(cljs.core.next(arglist__9221));
var more = cljs.core.rest(cljs.core.next(arglist__9221));
return G__9213__delegate.call(this, x, y, more);
});
return G__9213;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9209.call(this,x);
case  2 :
return _GT__EQ___9210.call(this,x,y);
default:
return _GT__EQ___9211.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9211.cljs$lang$applyTo;
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
var max__9230 = (function (x){
return x;
});
var max__9231 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9232 = (function() { 
var G__9234__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9234 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9234__delegate.call(this, x, y, more);
};
G__9234.cljs$lang$maxFixedArity = 2;
G__9234.cljs$lang$applyTo = (function (arglist__9235){
var x = cljs.core.first(arglist__9235);
var y = cljs.core.first(cljs.core.next(arglist__9235));
var more = cljs.core.rest(cljs.core.next(arglist__9235));
return G__9234__delegate.call(this, x, y, more);
});
return G__9234;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9230.call(this,x);
case  2 :
return max__9231.call(this,x,y);
default:
return max__9232.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9232.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9295 = (function (x){
return x;
});
var min__9296 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9297 = (function() { 
var G__9304__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9304 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9304__delegate.call(this, x, y, more);
};
G__9304.cljs$lang$maxFixedArity = 2;
G__9304.cljs$lang$applyTo = (function (arglist__9310){
var x = cljs.core.first(arglist__9310);
var y = cljs.core.first(cljs.core.next(arglist__9310));
var more = cljs.core.rest(cljs.core.next(arglist__9310));
return G__9304__delegate.call(this, x, y, more);
});
return G__9304;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9295.call(this,x);
case  2 :
return min__9296.call(this,x,y);
default:
return min__9297.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9297.cljs$lang$applyTo;
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
var rem__9328 = (n % d);

return cljs.core.fix.call(null,((n - rem__9328) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9331 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9331));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9343 = (function (){
return Math.random.call(null);
});
var rand__9344 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9343.call(this);
case  1 :
return rand__9344.call(this,n);
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
var _EQ__EQ___9492 = (function (x){
return true;
});
var _EQ__EQ___9493 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9494 = (function() { 
var G__9496__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9497 = y;
var G__9498 = cljs.core.first.call(null,more);
var G__9499 = cljs.core.next.call(null,more);
x = G__9497;
y = G__9498;
more = G__9499;
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
var G__9496 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9496__delegate.call(this, x, y, more);
};
G__9496.cljs$lang$maxFixedArity = 2;
G__9496.cljs$lang$applyTo = (function (arglist__9526){
var x = cljs.core.first(arglist__9526);
var y = cljs.core.first(cljs.core.next(arglist__9526));
var more = cljs.core.rest(cljs.core.next(arglist__9526));
return G__9496__delegate.call(this, x, y, more);
});
return G__9496;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9492.call(this,x);
case  2 :
return _EQ__EQ___9493.call(this,x,y);
default:
return _EQ__EQ___9494.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9494.cljs$lang$applyTo;
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
var n__9628 = n;
var xs__9630 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9635 = xs__9630;

if(cljs.core.truth_(and__3546__auto____9635))
{return (n__9628 > 0);
} else
{return and__3546__auto____9635;
}
})()))
{{
var G__9643 = (n__9628 - 1);
var G__9644 = cljs.core.next.call(null,xs__9630);
n__9628 = G__9643;
xs__9630 = G__9644;
continue;
}
} else
{return xs__9630;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9657 = null;
var G__9657__9658 = (function (coll,n){
var temp__3695__auto____9647 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9647))
{var xs__9648 = temp__3695__auto____9647;

return cljs.core.first.call(null,xs__9648);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9657__9659 = (function (coll,n,not_found){
var temp__3695__auto____9653 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9653))
{var xs__9654 = temp__3695__auto____9653;

return cljs.core.first.call(null,xs__9654);
} else
{return not_found;
}
});
G__9657 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9657__9658.call(this,coll,n);
case  3 :
return G__9657__9659.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9657;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9672 = (function (){
return "";
});
var str_STAR___9673 = (function (x){
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
var str_STAR___9674 = (function() { 
var G__9677__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9680 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9681 = cljs.core.next.call(null,more);
sb = G__9680;
more = G__9681;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9677 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9677__delegate.call(this, x, ys);
};
G__9677.cljs$lang$maxFixedArity = 1;
G__9677.cljs$lang$applyTo = (function (arglist__9682){
var x = cljs.core.first(arglist__9682);
var ys = cljs.core.rest(arglist__9682);
return G__9677__delegate.call(this, x, ys);
});
return G__9677;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9672.call(this);
case  1 :
return str_STAR___9673.call(this,x);
default:
return str_STAR___9674.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9674.cljs$lang$applyTo;
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
var str__9686 = (function (){
return "";
});
var str__9687 = (function (x){
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
var str__9688 = (function() { 
var G__9690__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9690 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9690__delegate.call(this, x, ys);
};
G__9690.cljs$lang$maxFixedArity = 1;
G__9690.cljs$lang$applyTo = (function (arglist__9691){
var x = cljs.core.first(arglist__9691);
var ys = cljs.core.rest(arglist__9691);
return G__9690__delegate.call(this, x, ys);
});
return G__9690;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9686.call(this);
case  1 :
return str__9687.call(this,x);
default:
return str__9688.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9688.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9696 = (function (s,start){
return s.substring(start);
});
var subs__9697 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9696.call(this,s,start);
case  3 :
return subs__9697.call(this,s,start,end);
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
var symbol__9706 = (function (name){
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
var symbol__9707 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9706.call(this,ns);
case  2 :
return symbol__9707.call(this,ns,name);
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
var keyword__9716 = (function (name){
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
var keyword__9717 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9716.call(this,ns);
case  2 :
return keyword__9717.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9719 = cljs.core.seq.call(null,x);
var ys__9720 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9719)))
{return cljs.core.nil_QMARK_.call(null,ys__9720);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9720)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9719),cljs.core.first.call(null,ys__9720))))
{{
var G__9731 = cljs.core.next.call(null,xs__9719);
var G__9732 = cljs.core.next.call(null,ys__9720);
xs__9719 = G__9731;
ys__9720 = G__9732;
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
return cljs.core.reduce.call(null,(function (p1__9740_SHARP_,p2__9741_SHARP_){
return cljs.core.hash_combine.call(null,p1__9740_SHARP_,cljs.core.hash.call(null,p2__9741_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9761__9762 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9761__9762))
{var G__9767__9769 = cljs.core.first.call(null,G__9761__9762);
var vec__9768__9770 = G__9767__9769;
var key_name__9772 = cljs.core.nth.call(null,vec__9768__9770,0,null);
var f__9777 = cljs.core.nth.call(null,vec__9768__9770,1,null);
var G__9761__9778 = G__9761__9762;

var G__9767__9779 = G__9767__9769;
var G__9761__9780 = G__9761__9778;

while(true){
var vec__9781__9782 = G__9767__9779;
var key_name__9783 = cljs.core.nth.call(null,vec__9781__9782,0,null);
var f__9784 = cljs.core.nth.call(null,vec__9781__9782,1,null);
var G__9761__9786 = G__9761__9780;

var str_name__9788 = cljs.core.name.call(null,key_name__9783);

obj[str_name__9788] = f__9784;
var temp__3698__auto____9792 = cljs.core.next.call(null,G__9761__9786);

if(cljs.core.truth_(temp__3698__auto____9792))
{var G__9761__9795 = temp__3698__auto____9792;

{
var G__9830 = cljs.core.first.call(null,G__9761__9795);
var G__9831 = G__9761__9795;
G__9767__9779 = G__9830;
G__9761__9780 = G__9831;
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
var this__9836 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9839 = this;
return (new cljs.core.List(this__9839.meta,o,coll,(this__9839.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9843 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9847 = this;
return this__9847.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9859 = this;
return this__9859.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9865 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9866 = this;
return this__9866.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9867 = this;
return this__9867.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9868 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9876 = this;
return (new cljs.core.List(meta,this__9876.first,this__9876.rest,this__9876.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9877 = this;
return this__9877.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9878 = this;
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
var this__9905 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9906 = this;
return (new cljs.core.List(this__9906.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9907 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9908 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9911 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9912 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9913 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9914 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9915 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9916 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9917 = this;
return this__9917.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9918 = this;
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
list.cljs$lang$applyTo = (function (arglist__9948){
var items = cljs.core.seq( arglist__9948 );;
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
var this__9997 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9998 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10000 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10002 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10002.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10004 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10008 = this;
return this__10008.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10009 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10009.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10009.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10010 = this;
return this__10010.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10011 = this;
return (new cljs.core.Cons(meta,this__10011.first,this__10011.rest));
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
var G__10013 = null;
var G__10013__10014 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10013__10015 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10013 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10013__10014.call(this,string,f);
case  3 :
return G__10013__10015.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10013;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10018 = null;
var G__10018__10019 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10018__10020 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10018 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10018__10019.call(this,string,k);
case  3 :
return G__10018__10020.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10018;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10039 = null;
var G__10039__10040 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10039__10041 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10039 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10039__10040.call(this,string,n);
case  3 :
return G__10039__10041.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10039;
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
var G__10083 = null;
var G__10083__10084 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10083__10085 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10083 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10083__10084.call(this,this$,coll);
case  3 :
return G__10083__10085.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10083;
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
var x__10095 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10095;
} else
{lazy_seq.x = x__10095.call(null);
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
var this__10103 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10104 = this;
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
var this__10108 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10110 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10112 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10114 = this;
return this__10114.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10116 = this;
return (new cljs.core.LazySeq(meta,this__10116.realized,this__10116.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10122 = cljs.core.array.call(null);

var s__10123 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10123)))
{ary__10122.push(cljs.core.first.call(null,s__10123));
{
var G__10129 = cljs.core.next.call(null,s__10123);
s__10123 = G__10129;
continue;
}
} else
{return ary__10122;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10133 = s;
var i__10134 = n;
var sum__10135 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10136 = (i__10134 > 0);

if(cljs.core.truth_(and__3546__auto____10136))
{return cljs.core.seq.call(null,s__10133);
} else
{return and__3546__auto____10136;
}
})()))
{{
var G__10139 = cljs.core.next.call(null,s__10133);
var G__10140 = (i__10134 - 1);
var G__10141 = (sum__10135 + 1);
s__10133 = G__10139;
i__10134 = G__10140;
sum__10135 = G__10141;
continue;
}
} else
{return sum__10135;
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
var concat__10192 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10193 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10194 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10187 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10187))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10187),concat.call(null,cljs.core.rest.call(null,s__10187),y));
} else
{return y;
}
})));
});
var concat__10195 = (function() { 
var G__10197__delegate = function (x,y,zs){
var cat__10191 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10190 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10190))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10190),cat.call(null,cljs.core.rest.call(null,xys__10190),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10191.call(null,concat.call(null,x,y),zs);
};
var G__10197 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10197__delegate.call(this, x, y, zs);
};
G__10197.cljs$lang$maxFixedArity = 2;
G__10197.cljs$lang$applyTo = (function (arglist__10200){
var x = cljs.core.first(arglist__10200);
var y = cljs.core.first(cljs.core.next(arglist__10200));
var zs = cljs.core.rest(cljs.core.next(arglist__10200));
return G__10197__delegate.call(this, x, y, zs);
});
return G__10197;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10192.call(this);
case  1 :
return concat__10193.call(this,x);
case  2 :
return concat__10194.call(this,x,y);
default:
return concat__10195.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10195.cljs$lang$applyTo;
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
var list_STAR___10294 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10295 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10296 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10297 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10298 = (function() { 
var G__10322__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10322 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10322__delegate.call(this, a, b, c, d, more);
};
G__10322.cljs$lang$maxFixedArity = 4;
G__10322.cljs$lang$applyTo = (function (arglist__10326){
var a = cljs.core.first(arglist__10326);
var b = cljs.core.first(cljs.core.next(arglist__10326));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10326)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10326))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10326))));
return G__10322__delegate.call(this, a, b, c, d, more);
});
return G__10322;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10294.call(this,a);
case  2 :
return list_STAR___10295.call(this,a,b);
case  3 :
return list_STAR___10296.call(this,a,b,c);
case  4 :
return list_STAR___10297.call(this,a,b,c,d);
default:
return list_STAR___10298.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10298.cljs$lang$applyTo;
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
var apply__10448 = (function (f,args){
var fixed_arity__10328 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10328 + 1)) <= fixed_arity__10328)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10449 = (function (f,x,args){
var arglist__10440 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10441 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10440,fixed_arity__10441) <= fixed_arity__10441)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10440));
} else
{return f.cljs$lang$applyTo(arglist__10440);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10440));
}
});
var apply__10450 = (function (f,x,y,args){
var arglist__10442 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10443 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10442,fixed_arity__10443) <= fixed_arity__10443)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10442));
} else
{return f.cljs$lang$applyTo(arglist__10442);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10442));
}
});
var apply__10451 = (function (f,x,y,z,args){
var arglist__10444 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10445 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10444,fixed_arity__10445) <= fixed_arity__10445)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10444));
} else
{return f.cljs$lang$applyTo(arglist__10444);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10444));
}
});
var apply__10452 = (function() { 
var G__10454__delegate = function (f,a,b,c,d,args){
var arglist__10446 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10447 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10446,fixed_arity__10447) <= fixed_arity__10447)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10446));
} else
{return f.cljs$lang$applyTo(arglist__10446);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10446));
}
};
var G__10454 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10454__delegate.call(this, f, a, b, c, d, args);
};
G__10454.cljs$lang$maxFixedArity = 5;
G__10454.cljs$lang$applyTo = (function (arglist__10455){
var f = cljs.core.first(arglist__10455);
var a = cljs.core.first(cljs.core.next(arglist__10455));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10455)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10455))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10455)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10455)))));
return G__10454__delegate.call(this, f, a, b, c, d, args);
});
return G__10454;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10448.call(this,f,a);
case  3 :
return apply__10449.call(this,f,a,b);
case  4 :
return apply__10450.call(this,f,a,b,c);
case  5 :
return apply__10451.call(this,f,a,b,c,d);
default:
return apply__10452.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10452.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10456){
var obj = cljs.core.first(arglist__10456);
var f = cljs.core.first(cljs.core.next(arglist__10456));
var args = cljs.core.rest(cljs.core.next(arglist__10456));
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
var not_EQ___10457 = (function (x){
return false;
});
var not_EQ___10458 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10459 = (function() { 
var G__10461__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10461 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10461__delegate.call(this, x, y, more);
};
G__10461.cljs$lang$maxFixedArity = 2;
G__10461.cljs$lang$applyTo = (function (arglist__10462){
var x = cljs.core.first(arglist__10462);
var y = cljs.core.first(cljs.core.next(arglist__10462));
var more = cljs.core.rest(cljs.core.next(arglist__10462));
return G__10461__delegate.call(this, x, y, more);
});
return G__10461;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10457.call(this,x);
case  2 :
return not_EQ___10458.call(this,x,y);
default:
return not_EQ___10459.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10459.cljs$lang$applyTo;
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
var G__10479 = pred;
var G__10480 = cljs.core.next.call(null,coll);
pred = G__10479;
coll = G__10480;
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
{var or__3548__auto____10485 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10485))
{return or__3548__auto____10485;
} else
{{
var G__10486 = pred;
var G__10487 = cljs.core.next.call(null,coll);
pred = G__10486;
coll = G__10487;
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
var G__10507 = null;
var G__10507__10508 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10507__10509 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10507__10510 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10507__10551 = (function() { 
var G__10571__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10571 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10571__delegate.call(this, x, y, zs);
};
G__10571.cljs$lang$maxFixedArity = 2;
G__10571.cljs$lang$applyTo = (function (arglist__10572){
var x = cljs.core.first(arglist__10572);
var y = cljs.core.first(cljs.core.next(arglist__10572));
var zs = cljs.core.rest(cljs.core.next(arglist__10572));
return G__10571__delegate.call(this, x, y, zs);
});
return G__10571;
})()
;
G__10507 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10507__10508.call(this);
case  1 :
return G__10507__10509.call(this,x);
case  2 :
return G__10507__10510.call(this,x,y);
default:
return G__10507__10551.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10507.cljs$lang$maxFixedArity = 2;
G__10507.cljs$lang$applyTo = G__10507__10551.cljs$lang$applyTo;
return G__10507;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10583__delegate = function (args){
return x;
};
var G__10583 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10583__delegate.call(this, args);
};
G__10583.cljs$lang$maxFixedArity = 0;
G__10583.cljs$lang$applyTo = (function (arglist__10584){
var args = cljs.core.seq( arglist__10584 );;
return G__10583__delegate.call(this, args);
});
return G__10583;
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
var comp__10602 = (function (){
return cljs.core.identity;
});
var comp__10603 = (function (f){
return f;
});
var comp__10605 = (function (f,g){
return (function() {
var G__10610 = null;
var G__10610__10611 = (function (){
return f.call(null,g.call(null));
});
var G__10610__10612 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10610__10613 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10610__10614 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10610__10615 = (function() { 
var G__10619__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10619 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10619__delegate.call(this, x, y, z, args);
};
G__10619.cljs$lang$maxFixedArity = 3;
G__10619.cljs$lang$applyTo = (function (arglist__10625){
var x = cljs.core.first(arglist__10625);
var y = cljs.core.first(cljs.core.next(arglist__10625));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10625)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10625)));
return G__10619__delegate.call(this, x, y, z, args);
});
return G__10619;
})()
;
G__10610 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10610__10611.call(this);
case  1 :
return G__10610__10612.call(this,x);
case  2 :
return G__10610__10613.call(this,x,y);
case  3 :
return G__10610__10614.call(this,x,y,z);
default:
return G__10610__10615.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10610.cljs$lang$maxFixedArity = 3;
G__10610.cljs$lang$applyTo = G__10610__10615.cljs$lang$applyTo;
return G__10610;
})()
});
var comp__10606 = (function (f,g,h){
return (function() {
var G__10629 = null;
var G__10629__10630 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10629__10631 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10629__10632 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10629__10633 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10629__10634 = (function() { 
var G__10641__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10641 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10641__delegate.call(this, x, y, z, args);
};
G__10641.cljs$lang$maxFixedArity = 3;
G__10641.cljs$lang$applyTo = (function (arglist__10642){
var x = cljs.core.first(arglist__10642);
var y = cljs.core.first(cljs.core.next(arglist__10642));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10642)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10642)));
return G__10641__delegate.call(this, x, y, z, args);
});
return G__10641;
})()
;
G__10629 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10629__10630.call(this);
case  1 :
return G__10629__10631.call(this,x);
case  2 :
return G__10629__10632.call(this,x,y);
case  3 :
return G__10629__10633.call(this,x,y,z);
default:
return G__10629__10634.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10629.cljs$lang$maxFixedArity = 3;
G__10629.cljs$lang$applyTo = G__10629__10634.cljs$lang$applyTo;
return G__10629;
})()
});
var comp__10607 = (function() { 
var G__10643__delegate = function (f1,f2,f3,fs){
var fs__10599 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10644__delegate = function (args){
var ret__10600 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10599),args);
var fs__10601 = cljs.core.next.call(null,fs__10599);

while(true){
if(cljs.core.truth_(fs__10601))
{{
var G__10645 = cljs.core.first.call(null,fs__10601).call(null,ret__10600);
var G__10646 = cljs.core.next.call(null,fs__10601);
ret__10600 = G__10645;
fs__10601 = G__10646;
continue;
}
} else
{return ret__10600;
}
break;
}
};
var G__10644 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10644__delegate.call(this, args);
};
G__10644.cljs$lang$maxFixedArity = 0;
G__10644.cljs$lang$applyTo = (function (arglist__10647){
var args = cljs.core.seq( arglist__10647 );;
return G__10644__delegate.call(this, args);
});
return G__10644;
})()
;
};
var G__10643 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10643__delegate.call(this, f1, f2, f3, fs);
};
G__10643.cljs$lang$maxFixedArity = 3;
G__10643.cljs$lang$applyTo = (function (arglist__10648){
var f1 = cljs.core.first(arglist__10648);
var f2 = cljs.core.first(cljs.core.next(arglist__10648));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10648)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10648)));
return G__10643__delegate.call(this, f1, f2, f3, fs);
});
return G__10643;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10602.call(this);
case  1 :
return comp__10603.call(this,f1);
case  2 :
return comp__10605.call(this,f1,f2);
case  3 :
return comp__10606.call(this,f1,f2,f3);
default:
return comp__10607.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10607.cljs$lang$applyTo;
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
var partial__10664 = (function (f,arg1){
return (function() { 
var G__10669__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10669 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10669__delegate.call(this, args);
};
G__10669.cljs$lang$maxFixedArity = 0;
G__10669.cljs$lang$applyTo = (function (arglist__10671){
var args = cljs.core.seq( arglist__10671 );;
return G__10669__delegate.call(this, args);
});
return G__10669;
})()
;
});
var partial__10665 = (function (f,arg1,arg2){
return (function() { 
var G__10672__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10672 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10672__delegate.call(this, args);
};
G__10672.cljs$lang$maxFixedArity = 0;
G__10672.cljs$lang$applyTo = (function (arglist__10673){
var args = cljs.core.seq( arglist__10673 );;
return G__10672__delegate.call(this, args);
});
return G__10672;
})()
;
});
var partial__10666 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10675__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10675 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10675__delegate.call(this, args);
};
G__10675.cljs$lang$maxFixedArity = 0;
G__10675.cljs$lang$applyTo = (function (arglist__10681){
var args = cljs.core.seq( arglist__10681 );;
return G__10675__delegate.call(this, args);
});
return G__10675;
})()
;
});
var partial__10667 = (function() { 
var G__10682__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10683__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10683 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10683__delegate.call(this, args);
};
G__10683.cljs$lang$maxFixedArity = 0;
G__10683.cljs$lang$applyTo = (function (arglist__10684){
var args = cljs.core.seq( arglist__10684 );;
return G__10683__delegate.call(this, args);
});
return G__10683;
})()
;
};
var G__10682 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10682__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10682.cljs$lang$maxFixedArity = 4;
G__10682.cljs$lang$applyTo = (function (arglist__10685){
var f = cljs.core.first(arglist__10685);
var arg1 = cljs.core.first(cljs.core.next(arglist__10685));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10685)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10685))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10685))));
return G__10682__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10682;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10664.call(this,f,arg1);
case  3 :
return partial__10665.call(this,f,arg1,arg2);
case  4 :
return partial__10666.call(this,f,arg1,arg2,arg3);
default:
return partial__10667.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10667.cljs$lang$applyTo;
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
var fnil__10913 = (function (f,x){
return (function() {
var G__10918 = null;
var G__10918__10919 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10918__10929 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10918__10930 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10918__10931 = (function() { 
var G__10942__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10942 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10942__delegate.call(this, a, b, c, ds);
};
G__10942.cljs$lang$maxFixedArity = 3;
G__10942.cljs$lang$applyTo = (function (arglist__10945){
var a = cljs.core.first(arglist__10945);
var b = cljs.core.first(cljs.core.next(arglist__10945));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10945)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10945)));
return G__10942__delegate.call(this, a, b, c, ds);
});
return G__10942;
})()
;
G__10918 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10918__10919.call(this,a);
case  2 :
return G__10918__10929.call(this,a,b);
case  3 :
return G__10918__10930.call(this,a,b,c);
default:
return G__10918__10931.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10918.cljs$lang$maxFixedArity = 3;
G__10918.cljs$lang$applyTo = G__10918__10931.cljs$lang$applyTo;
return G__10918;
})()
});
var fnil__10914 = (function (f,x,y){
return (function() {
var G__10951 = null;
var G__10951__10952 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10951__10953 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10951__10955 = (function() { 
var G__10964__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10964 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10964__delegate.call(this, a, b, c, ds);
};
G__10964.cljs$lang$maxFixedArity = 3;
G__10964.cljs$lang$applyTo = (function (arglist__10968){
var a = cljs.core.first(arglist__10968);
var b = cljs.core.first(cljs.core.next(arglist__10968));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10968)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10968)));
return G__10964__delegate.call(this, a, b, c, ds);
});
return G__10964;
})()
;
G__10951 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10951__10952.call(this,a,b);
case  3 :
return G__10951__10953.call(this,a,b,c);
default:
return G__10951__10955.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10951.cljs$lang$maxFixedArity = 3;
G__10951.cljs$lang$applyTo = G__10951__10955.cljs$lang$applyTo;
return G__10951;
})()
});
var fnil__10915 = (function (f,x,y,z){
return (function() {
var G__10972 = null;
var G__10972__10974 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10972__10975 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10972__10977 = (function() { 
var G__10993__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10993 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10993__delegate.call(this, a, b, c, ds);
};
G__10993.cljs$lang$maxFixedArity = 3;
G__10993.cljs$lang$applyTo = (function (arglist__10996){
var a = cljs.core.first(arglist__10996);
var b = cljs.core.first(cljs.core.next(arglist__10996));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10996)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10996)));
return G__10993__delegate.call(this, a, b, c, ds);
});
return G__10993;
})()
;
G__10972 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10972__10974.call(this,a,b);
case  3 :
return G__10972__10975.call(this,a,b,c);
default:
return G__10972__10977.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10972.cljs$lang$maxFixedArity = 3;
G__10972.cljs$lang$applyTo = G__10972__10977.cljs$lang$applyTo;
return G__10972;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10913.call(this,f,x);
case  3 :
return fnil__10914.call(this,f,x,y);
case  4 :
return fnil__10915.call(this,f,x,y,z);
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
var mapi__11016 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11010 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11010))
{var s__11013 = temp__3698__auto____11010;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11013)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11013)));
} else
{return null;
}
})));
});

return mapi__11016.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11029 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11029))
{var s__11030 = temp__3698__auto____11029;

var x__11031 = f.call(null,cljs.core.first.call(null,s__11030));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11031)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11030));
} else
{return cljs.core.cons.call(null,x__11031,keep.call(null,f,cljs.core.rest.call(null,s__11030)));
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
var keepi__11079 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11072 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11072))
{var s__11075 = temp__3698__auto____11072;

var x__11076 = f.call(null,idx,cljs.core.first.call(null,s__11075));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11076)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11075));
} else
{return cljs.core.cons.call(null,x__11076,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11075)));
}
} else
{return null;
}
})));
});

return keepi__11079.call(null,0,coll);
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
var every_pred__11201 = (function (p){
return (function() {
var ep1 = null;
var ep1__11234 = (function (){
return true;
});
var ep1__11235 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11236 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11095 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11095))
{return p.call(null,y);
} else
{return and__3546__auto____11095;
}
})());
});
var ep1__11237 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11097 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11097))
{var and__3546__auto____11099 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11099))
{return p.call(null,z);
} else
{return and__3546__auto____11099;
}
} else
{return and__3546__auto____11097;
}
})());
});
var ep1__11238 = (function() { 
var G__11251__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11100 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11100))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11100;
}
})());
};
var G__11251 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11251__delegate.call(this, x, y, z, args);
};
G__11251.cljs$lang$maxFixedArity = 3;
G__11251.cljs$lang$applyTo = (function (arglist__11256){
var x = cljs.core.first(arglist__11256);
var y = cljs.core.first(cljs.core.next(arglist__11256));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11256)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11256)));
return G__11251__delegate.call(this, x, y, z, args);
});
return G__11251;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11234.call(this);
case  1 :
return ep1__11235.call(this,x);
case  2 :
return ep1__11236.call(this,x,y);
case  3 :
return ep1__11237.call(this,x,y,z);
default:
return ep1__11238.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11238.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11203 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11259 = (function (){
return true;
});
var ep2__11262 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11104 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11104))
{return p2.call(null,x);
} else
{return and__3546__auto____11104;
}
})());
});
var ep2__11263 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11116 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11116))
{var and__3546__auto____11120 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11120))
{var and__3546__auto____11121 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11121))
{return p2.call(null,y);
} else
{return and__3546__auto____11121;
}
} else
{return and__3546__auto____11120;
}
} else
{return and__3546__auto____11116;
}
})());
});
var ep2__11264 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11123 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11123))
{var and__3546__auto____11125 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11125))
{var and__3546__auto____11127 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11127))
{var and__3546__auto____11129 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11129))
{var and__3546__auto____11130 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11130))
{return p2.call(null,z);
} else
{return and__3546__auto____11130;
}
} else
{return and__3546__auto____11129;
}
} else
{return and__3546__auto____11127;
}
} else
{return and__3546__auto____11125;
}
} else
{return and__3546__auto____11123;
}
})());
});
var ep2__11265 = (function() { 
var G__11284__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11133 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11133))
{return cljs.core.every_QMARK_.call(null,(function (p1__11042_SHARP_){
var and__3546__auto____11134 = p1.call(null,p1__11042_SHARP_);

if(cljs.core.truth_(and__3546__auto____11134))
{return p2.call(null,p1__11042_SHARP_);
} else
{return and__3546__auto____11134;
}
}),args);
} else
{return and__3546__auto____11133;
}
})());
};
var G__11284 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11284__delegate.call(this, x, y, z, args);
};
G__11284.cljs$lang$maxFixedArity = 3;
G__11284.cljs$lang$applyTo = (function (arglist__11290){
var x = cljs.core.first(arglist__11290);
var y = cljs.core.first(cljs.core.next(arglist__11290));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11290)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11290)));
return G__11284__delegate.call(this, x, y, z, args);
});
return G__11284;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11259.call(this);
case  1 :
return ep2__11262.call(this,x);
case  2 :
return ep2__11263.call(this,x,y);
case  3 :
return ep2__11264.call(this,x,y,z);
default:
return ep2__11265.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11265.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11205 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11296 = (function (){
return true;
});
var ep3__11297 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11141 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11141))
{var and__3546__auto____11142 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11142))
{return p3.call(null,x);
} else
{return and__3546__auto____11142;
}
} else
{return and__3546__auto____11141;
}
})());
});
var ep3__11298 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11143 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11143))
{var and__3546__auto____11145 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11145))
{var and__3546__auto____11146 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11146))
{var and__3546__auto____11149 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11149))
{var and__3546__auto____11152 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11152))
{return p3.call(null,y);
} else
{return and__3546__auto____11152;
}
} else
{return and__3546__auto____11149;
}
} else
{return and__3546__auto____11146;
}
} else
{return and__3546__auto____11145;
}
} else
{return and__3546__auto____11143;
}
})());
});
var ep3__11299 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11155 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11155))
{var and__3546__auto____11156 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11156))
{var and__3546__auto____11157 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11157))
{var and__3546__auto____11160 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11160))
{var and__3546__auto____11162 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11162))
{var and__3546__auto____11164 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11164))
{var and__3546__auto____11165 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11165))
{var and__3546__auto____11170 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11170))
{return p3.call(null,z);
} else
{return and__3546__auto____11170;
}
} else
{return and__3546__auto____11165;
}
} else
{return and__3546__auto____11164;
}
} else
{return and__3546__auto____11162;
}
} else
{return and__3546__auto____11160;
}
} else
{return and__3546__auto____11157;
}
} else
{return and__3546__auto____11156;
}
} else
{return and__3546__auto____11155;
}
})());
});
var ep3__11300 = (function() { 
var G__11325__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11176 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11176))
{return cljs.core.every_QMARK_.call(null,(function (p1__11045_SHARP_){
var and__3546__auto____11179 = p1.call(null,p1__11045_SHARP_);

if(cljs.core.truth_(and__3546__auto____11179))
{var and__3546__auto____11180 = p2.call(null,p1__11045_SHARP_);

if(cljs.core.truth_(and__3546__auto____11180))
{return p3.call(null,p1__11045_SHARP_);
} else
{return and__3546__auto____11180;
}
} else
{return and__3546__auto____11179;
}
}),args);
} else
{return and__3546__auto____11176;
}
})());
};
var G__11325 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11325__delegate.call(this, x, y, z, args);
};
G__11325.cljs$lang$maxFixedArity = 3;
G__11325.cljs$lang$applyTo = (function (arglist__11329){
var x = cljs.core.first(arglist__11329);
var y = cljs.core.first(cljs.core.next(arglist__11329));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11329)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11329)));
return G__11325__delegate.call(this, x, y, z, args);
});
return G__11325;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11296.call(this);
case  1 :
return ep3__11297.call(this,x);
case  2 :
return ep3__11298.call(this,x,y);
case  3 :
return ep3__11299.call(this,x,y,z);
default:
return ep3__11300.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11300.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11206 = (function() { 
var G__11338__delegate = function (p1,p2,p3,ps){
var ps__11182 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11339 = (function (){
return true;
});
var epn__11340 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11057_SHARP_){
return p1__11057_SHARP_.call(null,x);
}),ps__11182);
});
var epn__11341 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11058_SHARP_){
var and__3546__auto____11183 = p1__11058_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11183))
{return p1__11058_SHARP_.call(null,y);
} else
{return and__3546__auto____11183;
}
}),ps__11182);
});
var epn__11342 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11060_SHARP_){
var and__3546__auto____11189 = p1__11060_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11189))
{var and__3546__auto____11191 = p1__11060_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11191))
{return p1__11060_SHARP_.call(null,z);
} else
{return and__3546__auto____11191;
}
} else
{return and__3546__auto____11189;
}
}),ps__11182);
});
var epn__11343 = (function() { 
var G__11348__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11192 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11192))
{return cljs.core.every_QMARK_.call(null,(function (p1__11062_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11062_SHARP_,args);
}),ps__11182);
} else
{return and__3546__auto____11192;
}
})());
};
var G__11348 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11348__delegate.call(this, x, y, z, args);
};
G__11348.cljs$lang$maxFixedArity = 3;
G__11348.cljs$lang$applyTo = (function (arglist__11352){
var x = cljs.core.first(arglist__11352);
var y = cljs.core.first(cljs.core.next(arglist__11352));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11352)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11352)));
return G__11348__delegate.call(this, x, y, z, args);
});
return G__11348;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11339.call(this);
case  1 :
return epn__11340.call(this,x);
case  2 :
return epn__11341.call(this,x,y);
case  3 :
return epn__11342.call(this,x,y,z);
default:
return epn__11343.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11343.cljs$lang$applyTo;
return epn;
})()
};
var G__11338 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11338__delegate.call(this, p1, p2, p3, ps);
};
G__11338.cljs$lang$maxFixedArity = 3;
G__11338.cljs$lang$applyTo = (function (arglist__11363){
var p1 = cljs.core.first(arglist__11363);
var p2 = cljs.core.first(cljs.core.next(arglist__11363));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11363)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11363)));
return G__11338__delegate.call(this, p1, p2, p3, ps);
});
return G__11338;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11201.call(this,p1);
case  2 :
return every_pred__11203.call(this,p1,p2);
case  3 :
return every_pred__11205.call(this,p1,p2,p3);
default:
return every_pred__11206.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11206.cljs$lang$applyTo;
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
var some_fn__11518 = (function (p){
return (function() {
var sp1 = null;
var sp1__11615 = (function (){
return null;
});
var sp1__11616 = (function (x){
return p.call(null,x);
});
var sp1__11617 = (function (x,y){
var or__3548__auto____11374 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11374))
{return or__3548__auto____11374;
} else
{return p.call(null,y);
}
});
var sp1__11618 = (function (x,y,z){
var or__3548__auto____11379 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11379))
{return or__3548__auto____11379;
} else
{var or__3548__auto____11380 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11380))
{return or__3548__auto____11380;
} else
{return p.call(null,z);
}
}
});
var sp1__11620 = (function() { 
var G__11624__delegate = function (x,y,z,args){
var or__3548__auto____11383 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11383))
{return or__3548__auto____11383;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11624 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11624__delegate.call(this, x, y, z, args);
};
G__11624.cljs$lang$maxFixedArity = 3;
G__11624.cljs$lang$applyTo = (function (arglist__11629){
var x = cljs.core.first(arglist__11629);
var y = cljs.core.first(cljs.core.next(arglist__11629));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11629)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11629)));
return G__11624__delegate.call(this, x, y, z, args);
});
return G__11624;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11615.call(this);
case  1 :
return sp1__11616.call(this,x);
case  2 :
return sp1__11617.call(this,x,y);
case  3 :
return sp1__11618.call(this,x,y,z);
default:
return sp1__11620.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11620.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11519 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11632 = (function (){
return null;
});
var sp2__11633 = (function (x){
var or__3548__auto____11387 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11387))
{return or__3548__auto____11387;
} else
{return p2.call(null,x);
}
});
var sp2__11634 = (function (x,y){
var or__3548__auto____11392 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11392))
{return or__3548__auto____11392;
} else
{var or__3548__auto____11393 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11393))
{return or__3548__auto____11393;
} else
{var or__3548__auto____11396 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11396))
{return or__3548__auto____11396;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11635 = (function (x,y,z){
var or__3548__auto____11405 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11405))
{return or__3548__auto____11405;
} else
{var or__3548__auto____11409 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11409))
{return or__3548__auto____11409;
} else
{var or__3548__auto____11411 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11411))
{return or__3548__auto____11411;
} else
{var or__3548__auto____11412 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11412))
{return or__3548__auto____11412;
} else
{var or__3548__auto____11414 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11414))
{return or__3548__auto____11414;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11636 = (function() { 
var G__11641__delegate = function (x,y,z,args){
var or__3548__auto____11418 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11418))
{return or__3548__auto____11418;
} else
{return cljs.core.some.call(null,(function (p1__11083_SHARP_){
var or__3548__auto____11427 = p1.call(null,p1__11083_SHARP_);

if(cljs.core.truth_(or__3548__auto____11427))
{return or__3548__auto____11427;
} else
{return p2.call(null,p1__11083_SHARP_);
}
}),args);
}
};
var G__11641 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11641__delegate.call(this, x, y, z, args);
};
G__11641.cljs$lang$maxFixedArity = 3;
G__11641.cljs$lang$applyTo = (function (arglist__11644){
var x = cljs.core.first(arglist__11644);
var y = cljs.core.first(cljs.core.next(arglist__11644));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11644)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11644)));
return G__11641__delegate.call(this, x, y, z, args);
});
return G__11641;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11632.call(this);
case  1 :
return sp2__11633.call(this,x);
case  2 :
return sp2__11634.call(this,x,y);
case  3 :
return sp2__11635.call(this,x,y,z);
default:
return sp2__11636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11636.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11520 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11646 = (function (){
return null;
});
var sp3__11647 = (function (x){
var or__3548__auto____11430 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11430))
{return or__3548__auto____11430;
} else
{var or__3548__auto____11432 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11432))
{return or__3548__auto____11432;
} else
{return p3.call(null,x);
}
}
});
var sp3__11648 = (function (x,y){
var or__3548__auto____11436 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11436))
{return or__3548__auto____11436;
} else
{var or__3548__auto____11438 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11438))
{return or__3548__auto____11438;
} else
{var or__3548__auto____11440 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11440))
{return or__3548__auto____11440;
} else
{var or__3548__auto____11441 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11441))
{return or__3548__auto____11441;
} else
{var or__3548__auto____11444 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11444))
{return or__3548__auto____11444;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11649 = (function (x,y,z){
var or__3548__auto____11452 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11452))
{return or__3548__auto____11452;
} else
{var or__3548__auto____11461 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11461))
{return or__3548__auto____11461;
} else
{var or__3548__auto____11462 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11462))
{return or__3548__auto____11462;
} else
{var or__3548__auto____11463 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11463))
{return or__3548__auto____11463;
} else
{var or__3548__auto____11465 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11465))
{return or__3548__auto____11465;
} else
{var or__3548__auto____11467 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11467))
{return or__3548__auto____11467;
} else
{var or__3548__auto____11474 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11474))
{return or__3548__auto____11474;
} else
{var or__3548__auto____11478 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11478))
{return or__3548__auto____11478;
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
var G__11674__delegate = function (x,y,z,args){
var or__3548__auto____11485 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11485))
{return or__3548__auto____11485;
} else
{return cljs.core.some.call(null,(function (p1__11085_SHARP_){
var or__3548__auto____11488 = p1.call(null,p1__11085_SHARP_);

if(cljs.core.truth_(or__3548__auto____11488))
{return or__3548__auto____11488;
} else
{var or__3548__auto____11490 = p2.call(null,p1__11085_SHARP_);

if(cljs.core.truth_(or__3548__auto____11490))
{return or__3548__auto____11490;
} else
{return p3.call(null,p1__11085_SHARP_);
}
}
}),args);
}
};
var G__11674 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11674__delegate.call(this, x, y, z, args);
};
G__11674.cljs$lang$maxFixedArity = 3;
G__11674.cljs$lang$applyTo = (function (arglist__11678){
var x = cljs.core.first(arglist__11678);
var y = cljs.core.first(cljs.core.next(arglist__11678));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11678)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11678)));
return G__11674__delegate.call(this, x, y, z, args);
});
return G__11674;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11646.call(this);
case  1 :
return sp3__11647.call(this,x);
case  2 :
return sp3__11648.call(this,x,y);
case  3 :
return sp3__11649.call(this,x,y,z);
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
var some_fn__11521 = (function() { 
var G__11682__delegate = function (p1,p2,p3,ps){
var ps__11494 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11685 = (function (){
return null;
});
var spn__11686 = (function (x){
return cljs.core.some.call(null,(function (p1__11087_SHARP_){
return p1__11087_SHARP_.call(null,x);
}),ps__11494);
});
var spn__11687 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11088_SHARP_){
var or__3548__auto____11503 = p1__11088_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11503))
{return or__3548__auto____11503;
} else
{return p1__11088_SHARP_.call(null,y);
}
}),ps__11494);
});
var spn__11688 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11090_SHARP_){
var or__3548__auto____11506 = p1__11090_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11506))
{return or__3548__auto____11506;
} else
{var or__3548__auto____11508 = p1__11090_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11508))
{return or__3548__auto____11508;
} else
{return p1__11090_SHARP_.call(null,z);
}
}
}),ps__11494);
});
var spn__11689 = (function() { 
var G__11702__delegate = function (x,y,z,args){
var or__3548__auto____11512 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11512))
{return or__3548__auto____11512;
} else
{return cljs.core.some.call(null,(function (p1__11091_SHARP_){
return cljs.core.some.call(null,p1__11091_SHARP_,args);
}),ps__11494);
}
};
var G__11702 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11702__delegate.call(this, x, y, z, args);
};
G__11702.cljs$lang$maxFixedArity = 3;
G__11702.cljs$lang$applyTo = (function (arglist__11707){
var x = cljs.core.first(arglist__11707);
var y = cljs.core.first(cljs.core.next(arglist__11707));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11707)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11707)));
return G__11702__delegate.call(this, x, y, z, args);
});
return G__11702;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11685.call(this);
case  1 :
return spn__11686.call(this,x);
case  2 :
return spn__11687.call(this,x,y);
case  3 :
return spn__11688.call(this,x,y,z);
default:
return spn__11689.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11689.cljs$lang$applyTo;
return spn;
})()
};
var G__11682 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11682__delegate.call(this, p1, p2, p3, ps);
};
G__11682.cljs$lang$maxFixedArity = 3;
G__11682.cljs$lang$applyTo = (function (arglist__11711){
var p1 = cljs.core.first(arglist__11711);
var p2 = cljs.core.first(cljs.core.next(arglist__11711));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11711)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11711)));
return G__11682__delegate.call(this, p1, p2, p3, ps);
});
return G__11682;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11518.call(this,p1);
case  2 :
return some_fn__11519.call(this,p1,p2);
case  3 :
return some_fn__11520.call(this,p1,p2,p3);
default:
return some_fn__11521.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11521.cljs$lang$applyTo;
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
var map__11803 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11745 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11745))
{var s__11746 = temp__3698__auto____11745;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11746)),map.call(null,f,cljs.core.rest.call(null,s__11746)));
} else
{return null;
}
})));
});
var map__11804 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11757 = cljs.core.seq.call(null,c1);
var s2__11759 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11760 = s1__11757;

if(cljs.core.truth_(and__3546__auto____11760))
{return s2__11759;
} else
{return and__3546__auto____11760;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11757),cljs.core.first.call(null,s2__11759)),map.call(null,f,cljs.core.rest.call(null,s1__11757),cljs.core.rest.call(null,s2__11759)));
} else
{return null;
}
})));
});
var map__11805 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11765 = cljs.core.seq.call(null,c1);
var s2__11766 = cljs.core.seq.call(null,c2);
var s3__11775 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11776 = s1__11765;

if(cljs.core.truth_(and__3546__auto____11776))
{var and__3546__auto____11777 = s2__11766;

if(cljs.core.truth_(and__3546__auto____11777))
{return s3__11775;
} else
{return and__3546__auto____11777;
}
} else
{return and__3546__auto____11776;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11765),cljs.core.first.call(null,s2__11766),cljs.core.first.call(null,s3__11775)),map.call(null,f,cljs.core.rest.call(null,s1__11765),cljs.core.rest.call(null,s2__11766),cljs.core.rest.call(null,s3__11775)));
} else
{return null;
}
})));
});
var map__11806 = (function() { 
var G__11821__delegate = function (f,c1,c2,c3,colls){
var step__11790 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11782 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11782)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11782),step.call(null,map.call(null,cljs.core.rest,ss__11782)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11370_SHARP_){
return cljs.core.apply.call(null,f,p1__11370_SHARP_);
}),step__11790.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11821 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11821__delegate.call(this, f, c1, c2, c3, colls);
};
G__11821.cljs$lang$maxFixedArity = 4;
G__11821.cljs$lang$applyTo = (function (arglist__11831){
var f = cljs.core.first(arglist__11831);
var c1 = cljs.core.first(cljs.core.next(arglist__11831));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11831)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11831))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11831))));
return G__11821__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11821;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11803.call(this,f,c1);
case  3 :
return map__11804.call(this,f,c1,c2);
case  4 :
return map__11805.call(this,f,c1,c2,c3);
default:
return map__11806.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11806.cljs$lang$applyTo;
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
{var temp__3698__auto____11838 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11838))
{var s__11839 = temp__3698__auto____11838;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11839),take.call(null,(n - 1),cljs.core.rest.call(null,s__11839)));
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
var s__11852 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11853 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11853))
{return s__11852;
} else
{return and__3546__auto____11853;
}
})()))
{{
var G__11859 = (n - 1);
var G__11861 = cljs.core.rest.call(null,s__11852);
n = G__11859;
coll = G__11861;
continue;
}
} else
{return s__11852;
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
var drop_last__11906 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11908 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11906.call(this,n);
case  2 :
return drop_last__11908.call(this,n,s);
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
var s__11919 = cljs.core.seq.call(null,coll);
var lead__11921 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11921))
{{
var G__11930 = cljs.core.next.call(null,s__11919);
var G__11932 = cljs.core.next.call(null,lead__11921);
s__11919 = G__11930;
lead__11921 = G__11932;
continue;
}
} else
{return s__11919;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11941 = (function (pred,coll){
while(true){
var s__11935 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11936 = s__11935;

if(cljs.core.truth_(and__3546__auto____11936))
{return pred.call(null,cljs.core.first.call(null,s__11935));
} else
{return and__3546__auto____11936;
}
})()))
{{
var G__11947 = pred;
var G__11948 = cljs.core.rest.call(null,s__11935);
pred = G__11947;
coll = G__11948;
continue;
}
} else
{return s__11935;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11941.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11956 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11956))
{var s__11957 = temp__3698__auto____11956;

return cljs.core.concat.call(null,s__11957,cycle.call(null,s__11957));
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
var repeat__11972 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11973 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11972.call(this,n);
case  2 :
return repeat__11973.call(this,n,x);
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
var repeatedly__11987 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11989 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11987.call(this,n);
case  2 :
return repeatedly__11989.call(this,n,f);
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
var interleave__12004 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11997 = cljs.core.seq.call(null,c1);
var s2__11999 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12000 = s1__11997;

if(cljs.core.truth_(and__3546__auto____12000))
{return s2__11999;
} else
{return and__3546__auto____12000;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11997),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11999),interleave.call(null,cljs.core.rest.call(null,s1__11997),cljs.core.rest.call(null,s2__11999))));
} else
{return null;
}
})));
});
var interleave__12005 = (function() { 
var G__12032__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12002 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12002)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12002),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12002)));
} else
{return null;
}
})));
};
var G__12032 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12032__delegate.call(this, c1, c2, colls);
};
G__12032.cljs$lang$maxFixedArity = 2;
G__12032.cljs$lang$applyTo = (function (arglist__12035){
var c1 = cljs.core.first(arglist__12035);
var c2 = cljs.core.first(cljs.core.next(arglist__12035));
var colls = cljs.core.rest(cljs.core.next(arglist__12035));
return G__12032__delegate.call(this, c1, c2, colls);
});
return G__12032;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12004.call(this,c1,c2);
default:
return interleave__12005.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12005.cljs$lang$applyTo;
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
var cat__12047 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12043 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12043))
{var coll__12044 = temp__3695__auto____12043;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12044),cat.call(null,cljs.core.rest.call(null,coll__12044),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12047.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12057 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12058 = (function() { 
var G__12066__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12066 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12066__delegate.call(this, f, coll, colls);
};
G__12066.cljs$lang$maxFixedArity = 2;
G__12066.cljs$lang$applyTo = (function (arglist__12068){
var f = cljs.core.first(arglist__12068);
var coll = cljs.core.first(cljs.core.next(arglist__12068));
var colls = cljs.core.rest(cljs.core.next(arglist__12068));
return G__12066__delegate.call(this, f, coll, colls);
});
return G__12066;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12057.call(this,f,coll);
default:
return mapcat__12058.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12058.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12077 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12077))
{var s__12079 = temp__3698__auto____12077;

var f__12080 = cljs.core.first.call(null,s__12079);
var r__12081 = cljs.core.rest.call(null,s__12079);

if(cljs.core.truth_(pred.call(null,f__12080)))
{return cljs.core.cons.call(null,f__12080,filter.call(null,pred,r__12081));
} else
{return filter.call(null,pred,r__12081);
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
var walk__12094 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12094.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12087_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12087_SHARP_));
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
var partition__12161 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12162 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12104 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12104))
{var s__12105 = temp__3698__auto____12104;

var p__12106 = cljs.core.take.call(null,n,s__12105);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12106))))
{return cljs.core.cons.call(null,p__12106,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12105)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12163 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12156 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12156))
{var s__12158 = temp__3698__auto____12156;

var p__12160 = cljs.core.take.call(null,n,s__12158);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12160))))
{return cljs.core.cons.call(null,p__12160,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12158)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12160,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12161.call(this,n,step);
case  3 :
return partition__12162.call(this,n,step,pad);
case  4 :
return partition__12163.call(this,n,step,pad,coll);
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
var get_in__12181 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12183 = (function (m,ks,not_found){
var sentinel__12167 = cljs.core.lookup_sentinel;
var m__12168 = m;
var ks__12169 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12169))
{var m__12170 = cljs.core.get.call(null,m__12168,cljs.core.first.call(null,ks__12169),sentinel__12167);

if(cljs.core.truth_((sentinel__12167 === m__12170)))
{return not_found;
} else
{{
var G__12215 = sentinel__12167;
var G__12216 = m__12170;
var G__12217 = cljs.core.next.call(null,ks__12169);
sentinel__12167 = G__12215;
m__12168 = G__12216;
ks__12169 = G__12217;
continue;
}
}
} else
{return m__12168;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12181.call(this,m,ks);
case  3 :
return get_in__12183.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12218,v){
var vec__12219__12220 = p__12218;
var k__12221 = cljs.core.nth.call(null,vec__12219__12220,0,null);
var ks__12222 = cljs.core.nthnext.call(null,vec__12219__12220,1);

if(cljs.core.truth_(ks__12222))
{return cljs.core.assoc.call(null,m,k__12221,assoc_in.call(null,cljs.core.get.call(null,m,k__12221),ks__12222,v));
} else
{return cljs.core.assoc.call(null,m,k__12221,v);
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
var update_in__delegate = function (m,p__12235,f,args){
var vec__12236__12237 = p__12235;
var k__12238 = cljs.core.nth.call(null,vec__12236__12237,0,null);
var ks__12239 = cljs.core.nthnext.call(null,vec__12236__12237,1);

if(cljs.core.truth_(ks__12239))
{return cljs.core.assoc.call(null,m,k__12238,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12238),ks__12239,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12238,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12238),args));
}
};
var update_in = function (m,p__12235,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12235, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12245){
var m = cljs.core.first(arglist__12245);
var p__12235 = cljs.core.first(cljs.core.next(arglist__12245));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12245)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12245)));
return update_in__delegate.call(this, m, p__12235, f, args);
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
var this__12255 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12376 = null;
var G__12376__12377 = (function (coll,k){
var this__12259 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12376__12378 = (function (coll,k,not_found){
var this__12260 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12376 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12376__12377.call(this,coll,k);
case  3 :
return G__12376__12378.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12376;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12261 = this;
var new_array__12262 = cljs.core.aclone.call(null,this__12261.array);

(new_array__12262[k] = v);
return (new cljs.core.Vector(this__12261.meta,new_array__12262));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12387 = null;
var G__12387__12388 = (function (coll,k){
var this__12267 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12387__12389 = (function (coll,k,not_found){
var this__12268 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12387 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12387__12388.call(this,coll,k);
case  3 :
return G__12387__12389.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12387;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12269 = this;
var new_array__12270 = cljs.core.aclone.call(null,this__12269.array);

new_array__12270.push(o);
return (new cljs.core.Vector(this__12269.meta,new_array__12270));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12398 = null;
var G__12398__12400 = (function (v,f){
var this__12271 = this;
return cljs.core.ci_reduce.call(null,this__12271.array,f);
});
var G__12398__12401 = (function (v,f,start){
var this__12272 = this;
return cljs.core.ci_reduce.call(null,this__12272.array,f,start);
});
G__12398 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12398__12400.call(this,v,f);
case  3 :
return G__12398__12401.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12398;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12273 = this;
if(cljs.core.truth_((this__12273.array.length > 0)))
{var vector_seq__12278 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12273.array.length)))
{return cljs.core.cons.call(null,(this__12273.array[i]),vector_seq.call(null,(i + 1)));
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
var this__12283 = this;
return this__12283.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12286 = this;
var count__12288 = this__12286.array.length;

if(cljs.core.truth_((count__12288 > 0)))
{return (this__12286.array[(count__12288 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12290 = this;
if(cljs.core.truth_((this__12290.array.length > 0)))
{var new_array__12294 = cljs.core.aclone.call(null,this__12290.array);

new_array__12294.pop();
return (new cljs.core.Vector(this__12290.meta,new_array__12294));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12296 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12312 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12313 = this;
return (new cljs.core.Vector(meta,this__12313.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12314 = this;
return this__12314.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12420 = null;
var G__12420__12421 = (function (coll,n){
var this__12315 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12316 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12316))
{return (n < this__12315.array.length);
} else
{return and__3546__auto____12316;
}
})()))
{return (this__12315.array[n]);
} else
{return null;
}
});
var G__12420__12422 = (function (coll,n,not_found){
var this__12369 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12371 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12371))
{return (n < this__12369.array.length);
} else
{return and__3546__auto____12371;
}
})()))
{return (this__12369.array[n]);
} else
{return not_found;
}
});
G__12420 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12420__12421.call(this,coll,n);
case  3 :
return G__12420__12422.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12420;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12374 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12374.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12439){
var args = cljs.core.seq( arglist__12439 );;
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
var this__12456 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12511 = null;
var G__12511__12512 = (function (coll,k){
var this__12458 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12511__12513 = (function (coll,k,not_found){
var this__12459 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12511 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12511__12512.call(this,coll,k);
case  3 :
return G__12511__12513.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12511;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12465 = this;
var v_pos__12467 = (this__12465.start + key);

return (new cljs.core.Subvec(this__12465.meta,cljs.core._assoc.call(null,this__12465.v,v_pos__12467,val),this__12465.start,((this__12465.end > (v_pos__12467 + 1)) ? this__12465.end : (v_pos__12467 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12516 = null;
var G__12516__12518 = (function (coll,k){
var this__12474 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12516__12519 = (function (coll,k,not_found){
var this__12476 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12516 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12516__12518.call(this,coll,k);
case  3 :
return G__12516__12519.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12516;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12478 = this;
return (new cljs.core.Subvec(this__12478.meta,cljs.core._assoc_n.call(null,this__12478.v,this__12478.end,o),this__12478.start,(this__12478.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12522 = null;
var G__12522__12523 = (function (coll,f){
var this__12480 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12522__12524 = (function (coll,f,start){
var this__12484 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12522 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12522__12523.call(this,coll,f);
case  3 :
return G__12522__12524.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12522;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12489 = this;
var subvec_seq__12491 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12489.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12489.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12491.call(null,this__12489.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12492 = this;
return (this__12492.end - this__12492.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12493 = this;
return cljs.core._nth.call(null,this__12493.v,(this__12493.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12495 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12495.start,this__12495.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12495.meta,this__12495.v,this__12495.start,(this__12495.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12499 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12500 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12502 = this;
return (new cljs.core.Subvec(meta,this__12502.v,this__12502.start,this__12502.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12503 = this;
return this__12503.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12528 = null;
var G__12528__12529 = (function (coll,n){
var this__12508 = this;
return cljs.core._nth.call(null,this__12508.v,(this__12508.start + n));
});
var G__12528__12530 = (function (coll,n,not_found){
var this__12509 = this;
return cljs.core._nth.call(null,this__12509.v,(this__12509.start + n),not_found);
});
G__12528 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12528__12529.call(this,coll,n);
case  3 :
return G__12528__12530.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12528;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12510 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12510.meta);
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
var subvec__12542 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12543 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12542.call(this,v,start);
case  3 :
return subvec__12543.call(this,v,start,end);
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
var this__12683 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12688 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12691 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12693 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12693.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12695 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12701 = this;
return cljs.core._first.call(null,this__12701.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12704 = this;
var temp__3695__auto____12706 = cljs.core.next.call(null,this__12704.front);

if(cljs.core.truth_(temp__3695__auto____12706))
{var f1__12707 = temp__3695__auto____12706;

return (new cljs.core.PersistentQueueSeq(this__12704.meta,f1__12707,this__12704.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12704.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12704.meta,this__12704.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12710 = this;
return this__12710.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12712 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12712.front,this__12712.rear));
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
var this__12725 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12727 = this;
if(cljs.core.truth_(this__12727.front))
{return (new cljs.core.PersistentQueue(this__12727.meta,(this__12727.count + 1),this__12727.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12729 = this__12727.rear;

if(cljs.core.truth_(or__3548__auto____12729))
{return or__3548__auto____12729;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12727.meta,(this__12727.count + 1),cljs.core.conj.call(null,this__12727.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12732 = this;
var rear__12734 = cljs.core.seq.call(null,this__12732.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12735 = this__12732.front;

if(cljs.core.truth_(or__3548__auto____12735))
{return or__3548__auto____12735;
} else
{return rear__12734;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12732.front,cljs.core.seq.call(null,rear__12734)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12738 = this;
return this__12738.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12740 = this;
return cljs.core._first.call(null,this__12740.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12742 = this;
if(cljs.core.truth_(this__12742.front))
{var temp__3695__auto____12743 = cljs.core.next.call(null,this__12742.front);

if(cljs.core.truth_(temp__3695__auto____12743))
{var f1__12744 = temp__3695__auto____12743;

return (new cljs.core.PersistentQueue(this__12742.meta,(this__12742.count - 1),f1__12744,this__12742.rear));
} else
{return (new cljs.core.PersistentQueue(this__12742.meta,(this__12742.count - 1),cljs.core.seq.call(null,this__12742.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12745 = this;
return cljs.core.first.call(null,this__12745.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12746 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12747 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12748 = this;
return (new cljs.core.PersistentQueue(meta,this__12748.count,this__12748.front,this__12748.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12749 = this;
return this__12749.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12750 = this;
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
var this__12790 = this;
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
var len__12813 = array.length;

var i__12816 = 0;

while(true){
if(cljs.core.truth_((i__12816 < len__12813)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12816]))))
{return i__12816;
} else
{{
var G__12822 = (i__12816 + incr);
i__12816 = G__12822;
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
var obj_map_contains_key_QMARK___12906 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12907 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12902 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12902))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12902;
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
return obj_map_contains_key_QMARK___12906.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12907.call(this,k,strobj,true_val,false_val);
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
var this__12930 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12989 = null;
var G__12989__12990 = (function (coll,k){
var this__12932 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12989__12991 = (function (coll,k,not_found){
var this__12934 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12934.strobj,(this__12934.strobj[k]),not_found);
});
G__12989 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12989__12990.call(this,coll,k);
case  3 :
return G__12989__12991.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12989;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12937 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12939 = goog.object.clone.call(null,this__12937.strobj);
var overwrite_QMARK___12943 = new_strobj__12939.hasOwnProperty(k);

(new_strobj__12939[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12943))
{return (new cljs.core.ObjMap(this__12937.meta,this__12937.keys,new_strobj__12939));
} else
{var new_keys__12945 = cljs.core.aclone.call(null,this__12937.keys);

new_keys__12945.push(k);
return (new cljs.core.ObjMap(this__12937.meta,new_keys__12945,new_strobj__12939));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12937.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12948 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12948.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13005 = null;
var G__13005__13006 = (function (coll,k){
var this__12950 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13005__13007 = (function (coll,k,not_found){
var this__12951 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13005 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13005__13006.call(this,coll,k);
case  3 :
return G__13005__13007.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13005;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12952 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12954 = this;
if(cljs.core.truth_((this__12954.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12921_SHARP_){
return cljs.core.vector.call(null,p1__12921_SHARP_,(this__12954.strobj[p1__12921_SHARP_]));
}),this__12954.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12966 = this;
return this__12966.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12968 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12974 = this;
return (new cljs.core.ObjMap(meta,this__12974.keys,this__12974.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12977 = this;
return this__12977.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12978 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12978.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12979 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12981 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12981))
{return this__12979.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12981;
}
})()))
{var new_keys__12984 = cljs.core.aclone.call(null,this__12979.keys);
var new_strobj__12985 = goog.object.clone.call(null,this__12979.strobj);

new_keys__12984.splice(cljs.core.scan_array.call(null,1,k,new_keys__12984),1);
cljs.core.js_delete.call(null,new_strobj__12985,k);
return (new cljs.core.ObjMap(this__12979.meta,new_keys__12984,new_strobj__12985));
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
var this__13061 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13197 = null;
var G__13197__13198 = (function (coll,k){
var this__13064 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13197__13199 = (function (coll,k,not_found){
var this__13065 = this;
var bucket__13068 = (this__13065.hashobj[cljs.core.hash.call(null,k)]);
var i__13070 = (cljs.core.truth_(bucket__13068)?cljs.core.scan_array.call(null,2,k,bucket__13068):null);

if(cljs.core.truth_(i__13070))
{return (bucket__13068[(i__13070 + 1)]);
} else
{return not_found;
}
});
G__13197 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13197__13198.call(this,coll,k);
case  3 :
return G__13197__13199.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13197;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13074 = this;
var h__13104 = cljs.core.hash.call(null,k);
var bucket__13105 = (this__13074.hashobj[h__13104]);

if(cljs.core.truth_(bucket__13105))
{var new_bucket__13147 = cljs.core.aclone.call(null,bucket__13105);
var new_hashobj__13148 = goog.object.clone.call(null,this__13074.hashobj);

(new_hashobj__13148[h__13104] = new_bucket__13147);
var temp__3695__auto____13149 = cljs.core.scan_array.call(null,2,k,new_bucket__13147);

if(cljs.core.truth_(temp__3695__auto____13149))
{var i__13150 = temp__3695__auto____13149;

(new_bucket__13147[(i__13150 + 1)] = v);
return (new cljs.core.HashMap(this__13074.meta,this__13074.count,new_hashobj__13148));
} else
{new_bucket__13147.push(k,v);
return (new cljs.core.HashMap(this__13074.meta,(this__13074.count + 1),new_hashobj__13148));
}
} else
{var new_hashobj__13151 = goog.object.clone.call(null,this__13074.hashobj);

(new_hashobj__13151[h__13104] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13074.meta,(this__13074.count + 1),new_hashobj__13151));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13152 = this;
var bucket__13154 = (this__13152.hashobj[cljs.core.hash.call(null,k)]);
var i__13155 = (cljs.core.truth_(bucket__13154)?cljs.core.scan_array.call(null,2,k,bucket__13154):null);

if(cljs.core.truth_(i__13155))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13219 = null;
var G__13219__13220 = (function (coll,k){
var this__13156 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13219__13221 = (function (coll,k,not_found){
var this__13157 = this;
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
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13158 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13162 = this;
if(cljs.core.truth_((this__13162.count > 0)))
{var hashes__13163 = cljs.core.js_keys.call(null,this__13162.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13022_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13162.hashobj[p1__13022_SHARP_])));
}),hashes__13163);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13169 = this;
return this__13169.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13171 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13173 = this;
return (new cljs.core.HashMap(meta,this__13173.count,this__13173.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13176 = this;
return this__13176.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13177 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13177.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13181 = this;
var h__13183 = cljs.core.hash.call(null,k);
var bucket__13184 = (this__13181.hashobj[h__13183]);
var i__13185 = (cljs.core.truth_(bucket__13184)?cljs.core.scan_array.call(null,2,k,bucket__13184):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13185)))
{return coll;
} else
{var new_hashobj__13186 = goog.object.clone.call(null,this__13181.hashobj);

if(cljs.core.truth_((3 > bucket__13184.length)))
{cljs.core.js_delete.call(null,new_hashobj__13186,h__13183);
} else
{var new_bucket__13190 = cljs.core.aclone.call(null,bucket__13184);

new_bucket__13190.splice(i__13185,2);
(new_hashobj__13186[h__13183] = new_bucket__13190);
}
return (new cljs.core.HashMap(this__13181.meta,(this__13181.count - 1),new_hashobj__13186));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13265 = ks.length;

var i__13267 = 0;
var out__13269 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13267 < len__13265)))
{{
var G__13299 = (i__13267 + 1);
var G__13300 = cljs.core.assoc.call(null,out__13269,(ks[i__13267]),(vs[i__13267]));
i__13267 = G__13299;
out__13269 = G__13300;
continue;
}
} else
{return out__13269;
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
var in$__13303 = cljs.core.seq.call(null,keyvals);
var out__13304 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13303))
{{
var G__13308 = cljs.core.nnext.call(null,in$__13303);
var G__13309 = cljs.core.assoc.call(null,out__13304,cljs.core.first.call(null,in$__13303),cljs.core.second.call(null,in$__13303));
in$__13303 = G__13308;
out__13304 = G__13309;
continue;
}
} else
{return out__13304;
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
hash_map.cljs$lang$applyTo = (function (arglist__13310){
var keyvals = cljs.core.seq( arglist__13310 );;
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
{return cljs.core.reduce.call(null,(function (p1__13315_SHARP_,p2__13316_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13319 = p1__13315_SHARP_;

if(cljs.core.truth_(or__3548__auto____13319))
{return or__3548__auto____13319;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13316_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13320){
var maps = cljs.core.seq( arglist__13320 );;
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
{var merge_entry__13324 = (function (m,e){
var k__13321 = cljs.core.first.call(null,e);
var v__13322 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13321)))
{return cljs.core.assoc.call(null,m,k__13321,f.call(null,cljs.core.get.call(null,m,k__13321),v__13322));
} else
{return cljs.core.assoc.call(null,m,k__13321,v__13322);
}
});
var merge2__13327 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13324,(function (){var or__3548__auto____13325 = m1;

if(cljs.core.truth_(or__3548__auto____13325))
{return or__3548__auto____13325;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13327,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13336){
var f = cljs.core.first(arglist__13336);
var maps = cljs.core.rest(arglist__13336);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13346 = cljs.core.ObjMap.fromObject([],{});
var keys__13348 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13348))
{var key__13405 = cljs.core.first.call(null,keys__13348);
var entry__13406 = cljs.core.get.call(null,map,key__13405,"﷐'user/not-found");

{
var G__13407 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13406,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13346,key__13405,entry__13406):ret__13346);
var G__13408 = cljs.core.next.call(null,keys__13348);
ret__13346 = G__13407;
keys__13348 = G__13408;
continue;
}
} else
{return ret__13346;
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
var this__13412 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13444 = null;
var G__13444__13447 = (function (coll,v){
var this__13413 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13444__13449 = (function (coll,v,not_found){
var this__13414 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13414.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13444 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13444__13447.call(this,coll,v);
case  3 :
return G__13444__13449.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13444;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13454 = null;
var G__13454__13456 = (function (coll,k){
var this__13418 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13454__13457 = (function (coll,k,not_found){
var this__13419 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13454 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13454__13456.call(this,coll,k);
case  3 :
return G__13454__13457.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13454;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13420 = this;
return (new cljs.core.Set(this__13420.meta,cljs.core.assoc.call(null,this__13420.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13422 = this;
return cljs.core.keys.call(null,this__13422.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13425 = this;
return (new cljs.core.Set(this__13425.meta,cljs.core.dissoc.call(null,this__13425.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13426 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13429 = this;
var and__3546__auto____13431 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13431))
{var and__3546__auto____13433 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13433))
{return cljs.core.every_QMARK_.call(null,(function (p1__13341_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13341_SHARP_);
}),other);
} else
{return and__3546__auto____13433;
}
} else
{return and__3546__auto____13431;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13435 = this;
return (new cljs.core.Set(meta,this__13435.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13437 = this;
return this__13437.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13440 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13440.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13465 = cljs.core.seq.call(null,coll);
var out__13468 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13465))))
{{
var G__13483 = cljs.core.rest.call(null,in$__13465);
var G__13484 = cljs.core.conj.call(null,out__13468,cljs.core.first.call(null,in$__13465));
in$__13465 = G__13483;
out__13468 = G__13484;
continue;
}
} else
{return out__13468;
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
{var n__13487 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13488 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13488))
{var e__13489 = temp__3695__auto____13488;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13489));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13487,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13463_SHARP_){
var temp__3695__auto____13490 = cljs.core.find.call(null,smap,p1__13463_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13490))
{var e__13491 = temp__3695__auto____13490;

return cljs.core.second.call(null,e__13491);
} else
{return p1__13463_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13513 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13500,seen){
while(true){
var vec__13501__13504 = p__13500;
var f__13505 = cljs.core.nth.call(null,vec__13501__13504,0,null);
var xs__13507 = vec__13501__13504;

var temp__3698__auto____13509 = cljs.core.seq.call(null,xs__13507);

if(cljs.core.truth_(temp__3698__auto____13509))
{var s__13510 = temp__3698__auto____13509;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13505)))
{{
var G__13517 = cljs.core.rest.call(null,s__13510);
var G__13518 = seen;
p__13500 = G__13517;
seen = G__13518;
continue;
}
} else
{return cljs.core.cons.call(null,f__13505,step.call(null,cljs.core.rest.call(null,s__13510),cljs.core.conj.call(null,seen,f__13505)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13513.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13548 = cljs.core.Vector.fromArray([]);
var s__13549 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13549)))
{{
var G__13556 = cljs.core.conj.call(null,ret__13548,cljs.core.first.call(null,s__13549));
var G__13557 = cljs.core.next.call(null,s__13549);
ret__13548 = G__13556;
s__13549 = G__13557;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13548);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13561 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13561))
{return or__3548__auto____13561;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13564 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13564 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13564 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13712 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13712))
{return or__3548__auto____13712;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13714 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13714 > -1)))
{return cljs.core.subs.call(null,x,2,i__13714);
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
var map__13723 = cljs.core.ObjMap.fromObject([],{});
var ks__13724 = cljs.core.seq.call(null,keys);
var vs__13725 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13727 = ks__13724;

if(cljs.core.truth_(and__3546__auto____13727))
{return vs__13725;
} else
{return and__3546__auto____13727;
}
})()))
{{
var G__13728 = cljs.core.assoc.call(null,map__13723,cljs.core.first.call(null,ks__13724),cljs.core.first.call(null,vs__13725));
var G__13729 = cljs.core.next.call(null,ks__13724);
var G__13730 = cljs.core.next.call(null,vs__13725);
map__13723 = G__13728;
ks__13724 = G__13729;
vs__13725 = G__13730;
continue;
}
} else
{return map__13723;
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
var max_key__13737 = (function (k,x){
return x;
});
var max_key__13738 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13739 = (function() { 
var G__13741__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13720_SHARP_,p2__13721_SHARP_){
return max_key.call(null,k,p1__13720_SHARP_,p2__13721_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13741 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13741__delegate.call(this, k, x, y, more);
};
G__13741.cljs$lang$maxFixedArity = 3;
G__13741.cljs$lang$applyTo = (function (arglist__13742){
var k = cljs.core.first(arglist__13742);
var x = cljs.core.first(cljs.core.next(arglist__13742));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13742)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13742)));
return G__13741__delegate.call(this, k, x, y, more);
});
return G__13741;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13737.call(this,k,x);
case  3 :
return max_key__13738.call(this,k,x,y);
default:
return max_key__13739.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13739.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13747 = (function (k,x){
return x;
});
var min_key__13748 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13749 = (function() { 
var G__13751__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13735_SHARP_,p2__13736_SHARP_){
return min_key.call(null,k,p1__13735_SHARP_,p2__13736_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13751 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13751__delegate.call(this, k, x, y, more);
};
G__13751.cljs$lang$maxFixedArity = 3;
G__13751.cljs$lang$applyTo = (function (arglist__13752){
var k = cljs.core.first(arglist__13752);
var x = cljs.core.first(cljs.core.next(arglist__13752));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13752)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13752)));
return G__13751__delegate.call(this, k, x, y, more);
});
return G__13751;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13747.call(this,k,x);
case  3 :
return min_key__13748.call(this,k,x,y);
default:
return min_key__13749.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13749.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13762 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13800 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13759 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13759))
{var s__13760 = temp__3698__auto____13759;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13760),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13760)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13762.call(this,n,step);
case  3 :
return partition_all__13800.call(this,n,step,coll);
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
var temp__3698__auto____13865 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13865))
{var s__13866 = temp__3698__auto____13865;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13866))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13866),take_while.call(null,pred,cljs.core.rest.call(null,s__13866)));
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
var this__13878 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13879 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13918 = null;
var G__13918__13919 = (function (rng,f){
var this__13880 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13918__13920 = (function (rng,f,s){
var this__13881 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13918 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13918__13919.call(this,rng,f);
case  3 :
return G__13918__13920.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13918;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13883 = this;
var comp__13886 = (cljs.core.truth_((this__13883.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13886.call(null,this__13883.start,this__13883.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13888 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13888.end - this__13888.start) / this__13888.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13891 = this;
return this__13891.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13896 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13896.meta,(this__13896.start + this__13896.step),this__13896.end,this__13896.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13901 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13902 = this;
return (new cljs.core.Range(meta,this__13902.start,this__13902.end,this__13902.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13905 = this;
return this__13905.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13922 = null;
var G__13922__13923 = (function (rng,n){
var this__13906 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13906.start + (n * this__13906.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13908 = (this__13906.start > this__13906.end);

if(cljs.core.truth_(and__3546__auto____13908))
{return cljs.core._EQ_.call(null,this__13906.step,0);
} else
{return and__3546__auto____13908;
}
})()))
{return this__13906.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13922__13924 = (function (rng,n,not_found){
var this__13912 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13912.start + (n * this__13912.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13913 = (this__13912.start > this__13912.end);

if(cljs.core.truth_(and__3546__auto____13913))
{return cljs.core._EQ_.call(null,this__13912.step,0);
} else
{return and__3546__auto____13913;
}
})()))
{return this__13912.start;
} else
{return not_found;
}
}
});
G__13922 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13922__13923.call(this,rng,n);
case  3 :
return G__13922__13924.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13922;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13917 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13917.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13973 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13974 = (function (end){
return range.call(null,0,end,1);
});
var range__13975 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13976 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13973.call(this);
case  1 :
return range__13974.call(this,start);
case  2 :
return range__13975.call(this,start,end);
case  3 :
return range__13976.call(this,start,end,step);
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
var temp__3698__auto____13982 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13982))
{var s__13983 = temp__3698__auto____13982;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13983),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13983)));
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
var temp__3698__auto____13992 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13992))
{var s__13994 = temp__3698__auto____13992;

var fst__13996 = cljs.core.first.call(null,s__13994);
var fv__14094 = f.call(null,fst__13996);
var run__14100 = cljs.core.cons.call(null,fst__13996,cljs.core.take_while.call(null,(function (p1__13988_SHARP_){
return cljs.core._EQ_.call(null,fv__14094,f.call(null,p1__13988_SHARP_));
}),cljs.core.next.call(null,s__13994)));

return cljs.core.cons.call(null,run__14100,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14100),s__13994))));
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
var reductions__14143 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14128 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14128))
{var s__14129 = temp__3695__auto____14128;

return reductions.call(null,f,cljs.core.first.call(null,s__14129),cljs.core.rest.call(null,s__14129));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14144 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14135 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14135))
{var s__14138 = temp__3698__auto____14135;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14138)),cljs.core.rest.call(null,s__14138));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14143.call(this,f,init);
case  3 :
return reductions__14144.call(this,f,init,coll);
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
var juxt__14172 = (function (f){
return (function() {
var G__14177 = null;
var G__14177__14178 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14177__14179 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14177__14180 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14177__14181 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14177__14182 = (function() { 
var G__14184__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14184 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14184__delegate.call(this, x, y, z, args);
};
G__14184.cljs$lang$maxFixedArity = 3;
G__14184.cljs$lang$applyTo = (function (arglist__14185){
var x = cljs.core.first(arglist__14185);
var y = cljs.core.first(cljs.core.next(arglist__14185));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14185)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14185)));
return G__14184__delegate.call(this, x, y, z, args);
});
return G__14184;
})()
;
G__14177 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14177__14178.call(this);
case  1 :
return G__14177__14179.call(this,x);
case  2 :
return G__14177__14180.call(this,x,y);
case  3 :
return G__14177__14181.call(this,x,y,z);
default:
return G__14177__14182.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14177.cljs$lang$maxFixedArity = 3;
G__14177.cljs$lang$applyTo = G__14177__14182.cljs$lang$applyTo;
return G__14177;
})()
});
var juxt__14173 = (function (f,g){
return (function() {
var G__14198 = null;
var G__14198__14209 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14198__14210 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14198__14211 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14198__14212 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14198__14213 = (function() { 
var G__14227__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14227 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14227__delegate.call(this, x, y, z, args);
};
G__14227.cljs$lang$maxFixedArity = 3;
G__14227.cljs$lang$applyTo = (function (arglist__14230){
var x = cljs.core.first(arglist__14230);
var y = cljs.core.first(cljs.core.next(arglist__14230));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14230)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14230)));
return G__14227__delegate.call(this, x, y, z, args);
});
return G__14227;
})()
;
G__14198 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14198__14209.call(this);
case  1 :
return G__14198__14210.call(this,x);
case  2 :
return G__14198__14211.call(this,x,y);
case  3 :
return G__14198__14212.call(this,x,y,z);
default:
return G__14198__14213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14198.cljs$lang$maxFixedArity = 3;
G__14198.cljs$lang$applyTo = G__14198__14213.cljs$lang$applyTo;
return G__14198;
})()
});
var juxt__14174 = (function (f,g,h){
return (function() {
var G__14232 = null;
var G__14232__14233 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14232__14234 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14232__14236 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14232__14237 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14232__14238 = (function() { 
var G__14245__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14245 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14245__delegate.call(this, x, y, z, args);
};
G__14245.cljs$lang$maxFixedArity = 3;
G__14245.cljs$lang$applyTo = (function (arglist__14247){
var x = cljs.core.first(arglist__14247);
var y = cljs.core.first(cljs.core.next(arglist__14247));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14247)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14247)));
return G__14245__delegate.call(this, x, y, z, args);
});
return G__14245;
})()
;
G__14232 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14232__14233.call(this);
case  1 :
return G__14232__14234.call(this,x);
case  2 :
return G__14232__14236.call(this,x,y);
case  3 :
return G__14232__14237.call(this,x,y,z);
default:
return G__14232__14238.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14232.cljs$lang$maxFixedArity = 3;
G__14232.cljs$lang$applyTo = G__14232__14238.cljs$lang$applyTo;
return G__14232;
})()
});
var juxt__14175 = (function() { 
var G__14250__delegate = function (f,g,h,fs){
var fs__14164 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14252 = null;
var G__14252__14253 = (function (){
return cljs.core.reduce.call(null,(function (p1__14112_SHARP_,p2__14113_SHARP_){
return cljs.core.conj.call(null,p1__14112_SHARP_,p2__14113_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14164);
});
var G__14252__14254 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14115_SHARP_,p2__14116_SHARP_){
return cljs.core.conj.call(null,p1__14115_SHARP_,p2__14116_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14164);
});
var G__14252__14255 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14117_SHARP_,p2__14119_SHARP_){
return cljs.core.conj.call(null,p1__14117_SHARP_,p2__14119_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14164);
});
var G__14252__14256 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14120_SHARP_,p2__14124_SHARP_){
return cljs.core.conj.call(null,p1__14120_SHARP_,p2__14124_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14164);
});
var G__14252__14257 = (function() { 
var G__14263__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14126_SHARP_,p2__14127_SHARP_){
return cljs.core.conj.call(null,p1__14126_SHARP_,cljs.core.apply.call(null,p2__14127_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14164);
};
var G__14263 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14263__delegate.call(this, x, y, z, args);
};
G__14263.cljs$lang$maxFixedArity = 3;
G__14263.cljs$lang$applyTo = (function (arglist__14267){
var x = cljs.core.first(arglist__14267);
var y = cljs.core.first(cljs.core.next(arglist__14267));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14267)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14267)));
return G__14263__delegate.call(this, x, y, z, args);
});
return G__14263;
})()
;
G__14252 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14252__14253.call(this);
case  1 :
return G__14252__14254.call(this,x);
case  2 :
return G__14252__14255.call(this,x,y);
case  3 :
return G__14252__14256.call(this,x,y,z);
default:
return G__14252__14257.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14252.cljs$lang$maxFixedArity = 3;
G__14252.cljs$lang$applyTo = G__14252__14257.cljs$lang$applyTo;
return G__14252;
})()
};
var G__14250 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14250__delegate.call(this, f, g, h, fs);
};
G__14250.cljs$lang$maxFixedArity = 3;
G__14250.cljs$lang$applyTo = (function (arglist__14271){
var f = cljs.core.first(arglist__14271);
var g = cljs.core.first(cljs.core.next(arglist__14271));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14271)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14271)));
return G__14250__delegate.call(this, f, g, h, fs);
});
return G__14250;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14172.call(this,f);
case  2 :
return juxt__14173.call(this,f,g);
case  3 :
return juxt__14174.call(this,f,g,h);
default:
return juxt__14175.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14175.cljs$lang$applyTo;
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
var dorun__14295 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14298 = cljs.core.next.call(null,coll);
coll = G__14298;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14296 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14285 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14285))
{return (n > 0);
} else
{return and__3546__auto____14285;
}
})()))
{{
var G__14299 = (n - 1);
var G__14301 = cljs.core.next.call(null,coll);
n = G__14299;
coll = G__14301;
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
return dorun__14295.call(this,n);
case  2 :
return dorun__14296.call(this,n,coll);
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
var doall__14304 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14305 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14304.call(this,n);
case  2 :
return doall__14305.call(this,n,coll);
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
var matches__14308 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14308),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14308),1)))
{return cljs.core.first.call(null,matches__14308);
} else
{return cljs.core.vec.call(null,matches__14308);
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
var matches__14320 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14320)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14320),1)))
{return cljs.core.first.call(null,matches__14320);
} else
{return cljs.core.vec.call(null,matches__14320);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14324 = cljs.core.re_find.call(null,re,s);
var match_idx__14326 = s.search(re);
var match_str__14327 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14324))?cljs.core.first.call(null,match_data__14324):match_data__14324);
var post_match__14329 = cljs.core.subs.call(null,s,(match_idx__14326 + cljs.core.count.call(null,match_str__14327)));

if(cljs.core.truth_(match_data__14324))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14324,re_seq.call(null,re,post_match__14329));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14337_SHARP_){
return print_one.call(null,p1__14337_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14371 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14371))
{var and__3546__auto____14383 = (function (){var x__445__auto____14374 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14377 = x__445__auto____14374;

if(cljs.core.truth_(and__3546__auto____14377))
{var and__3546__auto____14382 = x__445__auto____14374.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14382))
{return cljs.core.not.call(null,x__445__auto____14374.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14382;
}
} else
{return and__3546__auto____14377;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14374);
}
})();

if(cljs.core.truth_(and__3546__auto____14383))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14383;
}
} else
{return and__3546__auto____14371;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14384 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14385 = x__445__auto____14384;

if(cljs.core.truth_(and__3546__auto____14385))
{var and__3546__auto____14386 = x__445__auto____14384.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14386))
{return cljs.core.not.call(null,x__445__auto____14384.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14386;
}
} else
{return and__3546__auto____14385;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14384);
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
var first_obj__14397 = cljs.core.first.call(null,objs);
var sb__14399 = (new goog.string.StringBuffer());

var G__14400__14403 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14400__14403))
{var obj__14406 = cljs.core.first.call(null,G__14400__14403);
var G__14400__14407 = G__14400__14403;

while(true){
if(cljs.core.truth_((obj__14406 === first_obj__14397)))
{} else
{sb__14399.append(" ");
}
var G__14411__14415 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14406,opts));

if(cljs.core.truth_(G__14411__14415))
{var string__14417 = cljs.core.first.call(null,G__14411__14415);
var G__14411__14418 = G__14411__14415;

while(true){
sb__14399.append(string__14417);
var temp__3698__auto____14421 = cljs.core.next.call(null,G__14411__14418);

if(cljs.core.truth_(temp__3698__auto____14421))
{var G__14411__14423 = temp__3698__auto____14421;

{
var G__14483 = cljs.core.first.call(null,G__14411__14423);
var G__14484 = G__14411__14423;
string__14417 = G__14483;
G__14411__14418 = G__14484;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14475 = cljs.core.next.call(null,G__14400__14407);

if(cljs.core.truth_(temp__3698__auto____14475))
{var G__14400__14476 = temp__3698__auto____14475;

{
var G__14487 = cljs.core.first.call(null,G__14400__14476);
var G__14488 = G__14400__14476;
obj__14406 = G__14487;
G__14400__14407 = G__14488;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14399);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14492 = cljs.core.first.call(null,objs);

var G__14494__14495 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14494__14495))
{var obj__14497 = cljs.core.first.call(null,G__14494__14495);
var G__14494__14498 = G__14494__14495;

while(true){
if(cljs.core.truth_((obj__14497 === first_obj__14492)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14500__14501 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14497,opts));

if(cljs.core.truth_(G__14500__14501))
{var string__14503 = cljs.core.first.call(null,G__14500__14501);
var G__14500__14504 = G__14500__14501;

while(true){
cljs.core.string_print.call(null,string__14503);
var temp__3698__auto____14506 = cljs.core.next.call(null,G__14500__14504);

if(cljs.core.truth_(temp__3698__auto____14506))
{var G__14500__14507 = temp__3698__auto____14506;

{
var G__14515 = cljs.core.first.call(null,G__14500__14507);
var G__14516 = G__14500__14507;
string__14503 = G__14515;
G__14500__14504 = G__14516;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14510 = cljs.core.next.call(null,G__14494__14498);

if(cljs.core.truth_(temp__3698__auto____14510))
{var G__14494__14513 = temp__3698__auto____14510;

{
var G__14566 = cljs.core.first.call(null,G__14494__14513);
var G__14567 = G__14494__14513;
obj__14497 = G__14566;
G__14494__14498 = G__14567;
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
pr_str.cljs$lang$applyTo = (function (arglist__14585){
var objs = cljs.core.seq( arglist__14585 );;
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
pr.cljs$lang$applyTo = (function (arglist__14591){
var objs = cljs.core.seq( arglist__14591 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14593){
var objs = cljs.core.seq( arglist__14593 );;
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
println.cljs$lang$applyTo = (function (arglist__14602){
var objs = cljs.core.seq( arglist__14602 );;
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
prn.cljs$lang$applyTo = (function (arglist__14622){
var objs = cljs.core.seq( arglist__14622 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14634 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14634,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14683 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14683))
{var nspc__14685 = temp__3698__auto____14683;

return cljs.core.str.call(null,nspc__14685,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14692 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14692))
{var nspc__14693 = temp__3698__auto____14692;

return cljs.core.str.call(null,nspc__14693,"/");
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
var pr_pair__14712 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14712,"{",", ","}",opts,coll);
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
var this__14776 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14778 = this;
var G__14779__14781 = cljs.core.seq.call(null,this__14778.watches);

if(cljs.core.truth_(G__14779__14781))
{var G__14783__14785 = cljs.core.first.call(null,G__14779__14781);
var vec__14784__14786 = G__14783__14785;
var key__14788 = cljs.core.nth.call(null,vec__14784__14786,0,null);
var f__14789 = cljs.core.nth.call(null,vec__14784__14786,1,null);
var G__14779__14790 = G__14779__14781;

var G__14783__14791 = G__14783__14785;
var G__14779__14792 = G__14779__14790;

while(true){
var vec__14793__14794 = G__14783__14791;
var key__14795 = cljs.core.nth.call(null,vec__14793__14794,0,null);
var f__14796 = cljs.core.nth.call(null,vec__14793__14794,1,null);
var G__14779__14797 = G__14779__14792;

f__14796.call(null,key__14795,this$,oldval,newval);
var temp__3698__auto____14798 = cljs.core.next.call(null,G__14779__14797);

if(cljs.core.truth_(temp__3698__auto____14798))
{var G__14779__14799 = temp__3698__auto____14798;

{
var G__14824 = cljs.core.first.call(null,G__14779__14799);
var G__14825 = G__14779__14799;
G__14783__14791 = G__14824;
G__14779__14792 = G__14825;
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
var this__14800 = this;
return this$.watches = cljs.core.assoc.call(null,this__14800.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14802 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14802.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14805 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14805.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14809 = this;
return this__14809.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14811 = this;
return this__14811.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14815 = this;
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
var atom__14858 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14859 = (function() { 
var G__14861__delegate = function (x,p__14847){
var map__14849__14850 = p__14847;
var map__14849__14852 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14849__14850))?cljs.core.apply.call(null,cljs.core.hash_map,map__14849__14850):map__14849__14850);
var validator__14853 = cljs.core.get.call(null,map__14849__14852,"﷐'validator");
var meta__14854 = cljs.core.get.call(null,map__14849__14852,"﷐'meta");

return (new cljs.core.Atom(x,meta__14854,validator__14853,null));
};
var G__14861 = function (x,var_args){
var p__14847 = null;
if (goog.isDef(var_args)) {
  p__14847 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14861__delegate.call(this, x, p__14847);
};
G__14861.cljs$lang$maxFixedArity = 1;
G__14861.cljs$lang$applyTo = (function (arglist__14865){
var x = cljs.core.first(arglist__14865);
var p__14847 = cljs.core.rest(arglist__14865);
return G__14861__delegate.call(this, x, p__14847);
});
return G__14861;
})()
;
atom = function(x,var_args){
var p__14847 = var_args;
switch(arguments.length){
case  1 :
return atom__14858.call(this,x);
default:
return atom__14859.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14859.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14871 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14871))
{var validate__14873 = temp__3698__auto____14871;

if(cljs.core.truth_(validate__14873.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14879 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14879,new_value);
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
var swap_BANG___14901 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14902 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14903 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14904 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14905 = (function() { 
var G__14908__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14908 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14908__delegate.call(this, a, f, x, y, z, more);
};
G__14908.cljs$lang$maxFixedArity = 5;
G__14908.cljs$lang$applyTo = (function (arglist__14909){
var a = cljs.core.first(arglist__14909);
var f = cljs.core.first(cljs.core.next(arglist__14909));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14909)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14909))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14909)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14909)))));
return G__14908__delegate.call(this, a, f, x, y, z, more);
});
return G__14908;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14901.call(this,a,f);
case  3 :
return swap_BANG___14902.call(this,a,f,x);
case  4 :
return swap_BANG___14903.call(this,a,f,x,y);
case  5 :
return swap_BANG___14904.call(this,a,f,x,y,z);
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14949){
var iref = cljs.core.first(arglist__14949);
var f = cljs.core.first(cljs.core.next(arglist__14949));
var args = cljs.core.rest(cljs.core.next(arglist__14949));
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
var gensym__14973 = (function (){
return gensym.call(null,"G__");
});
var gensym__14974 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14973.call(this);
case  1 :
return gensym__14974.call(this,prefix_string);
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
var this__14988 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14988.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14989 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14989.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14989.state,this__14989.f);
}
return cljs.core.deref.call(null,this__14989.state);
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
delay.cljs$lang$applyTo = (function (arglist__15006){
var body = cljs.core.seq( arglist__15006 );;
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
var map__15016__15020 = options;
var map__15016__15021 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15016__15020))?cljs.core.apply.call(null,cljs.core.hash_map,map__15016__15020):map__15016__15020);
var keywordize_keys__15022 = cljs.core.get.call(null,map__15016__15021,"﷐'keywordize-keys");
var keyfn__15023 = (cljs.core.truth_(keywordize_keys__15022)?cljs.core.keyword:cljs.core.str);
var f__15033 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15032 = (function iter__15025(s__15026){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15026__15029 = s__15026;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15026__15029)))
{var k__15031 = cljs.core.first.call(null,s__15026__15029);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15023.call(null,k__15031),thisfn.call(null,(x[k__15031]))]),iter__15025.call(null,cljs.core.rest.call(null,s__15026__15029)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15032.call(null,cljs.core.js_keys.call(null,x));
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

return f__15033.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15041){
var x = cljs.core.first(arglist__15041);
var options = cljs.core.rest(arglist__15041);
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
var mem__15042 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15053__delegate = function (args){
var temp__3695__auto____15046 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15042),args);

if(cljs.core.truth_(temp__3695__auto____15046))
{var v__15047 = temp__3695__auto____15046;

return v__15047;
} else
{var ret__15049 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15042,cljs.core.assoc,args,ret__15049);
return ret__15049;
}
};
var G__15053 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15053__delegate.call(this, args);
};
G__15053.cljs$lang$maxFixedArity = 0;
G__15053.cljs$lang$applyTo = (function (arglist__15056){
var args = cljs.core.seq( arglist__15056 );;
return G__15053__delegate.call(this, args);
});
return G__15053;
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
var trampoline__15139 = (function (f){
while(true){
var ret__15059 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15059)))
{{
var G__15142 = ret__15059;
f = G__15142;
continue;
}
} else
{return ret__15059;
}
break;
}
});
var trampoline__15140 = (function() { 
var G__15143__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15143 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15143__delegate.call(this, f, args);
};
G__15143.cljs$lang$maxFixedArity = 1;
G__15143.cljs$lang$applyTo = (function (arglist__15147){
var f = cljs.core.first(arglist__15147);
var args = cljs.core.rest(arglist__15147);
return G__15143__delegate.call(this, f, args);
});
return G__15143;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15139.call(this,f);
default:
return trampoline__15140.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15140.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15182 = (function (){
return rand.call(null,1);
});
var rand__15183 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15182.call(this);
case  1 :
return rand__15183.call(this,n);
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
var k__15191 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15191,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15191,cljs.core.Vector.fromArray([])),x));
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
var or__3548__auto____15202 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15202))
{return or__3548__auto____15202;
} else
{var or__3548__auto____15206 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15206))
{return or__3548__auto____15206;
} else
{var and__3546__auto____15209 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15209))
{var and__3546__auto____15210 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15210))
{var and__3546__auto____15214 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15214))
{var ret__15215 = true;
var i__15216 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15217 = cljs.core.not.call(null,ret__15215);

if(cljs.core.truth_(or__3548__auto____15217))
{return or__3548__auto____15217;
} else
{return cljs.core._EQ_.call(null,i__15216,cljs.core.count.call(null,parent));
}
})()))
{return ret__15215;
} else
{{
var G__15225 = isa_QMARK_.call(null,h,child.call(null,i__15216),parent.call(null,i__15216));
var G__15226 = (i__15216 + 1);
ret__15215 = G__15225;
i__15216 = G__15226;
continue;
}
}
break;
}
} else
{return and__3546__auto____15214;
}
} else
{return and__3546__auto____15210;
}
} else
{return and__3546__auto____15209;
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
var parents__15239 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15242 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15239.call(this,h);
case  2 :
return parents__15242.call(this,h,tag);
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
var ancestors__15250 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15251 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15250.call(this,h);
case  2 :
return ancestors__15251.call(this,h,tag);
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
var descendants__15262 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15264 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15262.call(this,h);
case  2 :
return descendants__15264.call(this,h,tag);
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
var derive__15324 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15325 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15311 = "﷐'parents".call(null,h);
var td__15312 = "﷐'descendants".call(null,h);
var ta__15313 = "﷐'ancestors".call(null,h);
var tf__15315 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15320 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15311.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15313.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15313.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15311,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15315.call(null,"﷐'ancestors".call(null,h),tag,td__15312,parent,ta__15313),"﷐'descendants":tf__15315.call(null,"﷐'descendants".call(null,h),parent,ta__15313,tag,td__15312)});
})());

if(cljs.core.truth_(or__3548__auto____15320))
{return or__3548__auto____15320;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15324.call(this,h,tag);
case  3 :
return derive__15325.call(this,h,tag,parent);
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
var underive__15343 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15344 = (function (h,tag,parent){
var parentMap__15337 = "﷐'parents".call(null,h);
var childsParents__15339 = (cljs.core.truth_(parentMap__15337.call(null,tag))?cljs.core.disj.call(null,parentMap__15337.call(null,tag),parent):cljs.core.set([]));
var newParents__15340 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15339))?cljs.core.assoc.call(null,parentMap__15337,tag,childsParents__15339):cljs.core.dissoc.call(null,parentMap__15337,tag));
var deriv_seq__15341 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15268_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15268_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15268_SHARP_),cljs.core.second.call(null,p1__15268_SHARP_)));
}),cljs.core.seq.call(null,newParents__15340)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15337.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15269_SHARP_,p2__15270_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15269_SHARP_,p2__15270_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15341));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15343.call(this,h,tag);
case  3 :
return underive__15344.call(this,h,tag,parent);
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
var xprefs__15356 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15359 = (cljs.core.truth_((function (){var and__3546__auto____15357 = xprefs__15356;

if(cljs.core.truth_(and__3546__auto____15357))
{return xprefs__15356.call(null,y);
} else
{return and__3546__auto____15357;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15359))
{return or__3548__auto____15359;
} else
{var or__3548__auto____15363 = (function (){var ps__15360 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15360) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15360),prefer_table)))
{} else
{}
{
var G__15369 = cljs.core.rest.call(null,ps__15360);
ps__15360 = G__15369;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15363))
{return or__3548__auto____15363;
} else
{var or__3548__auto____15366 = (function (){var ps__15364 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15364) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15364),y,prefer_table)))
{} else
{}
{
var G__15371 = cljs.core.rest.call(null,ps__15364);
ps__15364 = G__15371;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15366))
{return or__3548__auto____15366;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15438 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15438))
{return or__3548__auto____15438;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15451 = cljs.core.reduce.call(null,(function (be,p__15442){
var vec__15444__15445 = p__15442;
var k__15446 = cljs.core.nth.call(null,vec__15444__15445,0,null);
var ___15447 = cljs.core.nth.call(null,vec__15444__15445,1,null);
var e__15448 = vec__15444__15445;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15446)))
{var be2__15450 = (cljs.core.truth_((function (){var or__3548__auto____15449 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15449))
{return or__3548__auto____15449;
} else
{return cljs.core.dominates.call(null,k__15446,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15448:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15450),k__15446,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15446," and ",cljs.core.first.call(null,be2__15450),", and neither is preferred")));
}
return be2__15450;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15451))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15451));
return cljs.core.second.call(null,best_entry__15451);
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
if(cljs.core.truth_((function (){var and__3546__auto____15454 = mf;

if(cljs.core.truth_(and__3546__auto____15454))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15454;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15455 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15455))
{return or__3548__auto____15455;
} else
{var or__3548__auto____15456 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15456))
{return or__3548__auto____15456;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15457 = mf;

if(cljs.core.truth_(and__3546__auto____15457))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15457;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15458 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15458))
{return or__3548__auto____15458;
} else
{var or__3548__auto____15459 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15459))
{return or__3548__auto____15459;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15460 = mf;

if(cljs.core.truth_(and__3546__auto____15460))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15460;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15461 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15461))
{return or__3548__auto____15461;
} else
{var or__3548__auto____15462 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15462))
{return or__3548__auto____15462;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15463 = mf;

if(cljs.core.truth_(and__3546__auto____15463))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15463;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15464 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15464))
{return or__3548__auto____15464;
} else
{var or__3548__auto____15465 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15465))
{return or__3548__auto____15465;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15466 = mf;

if(cljs.core.truth_(and__3546__auto____15466))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15466;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15467 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15467))
{return or__3548__auto____15467;
} else
{var or__3548__auto____15468 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15468))
{return or__3548__auto____15468;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15469 = mf;

if(cljs.core.truth_(and__3546__auto____15469))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15469;
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
if(cljs.core.truth_((function (){var and__3546__auto____15472 = mf;

if(cljs.core.truth_(and__3546__auto____15472))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15472;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15473 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15473))
{return or__3548__auto____15473;
} else
{var or__3548__auto____15474 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15474))
{return or__3548__auto____15474;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15475 = mf;

if(cljs.core.truth_(and__3546__auto____15475))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15475;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15476 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15476))
{return or__3548__auto____15476;
} else
{var or__3548__auto____15531 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15531))
{return or__3548__auto____15531;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15627 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15628 = cljs.core._get_method.call(null,mf,dispatch_val__15627);

if(cljs.core.truth_(target_fn__15628))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15627)));
}
return cljs.core.apply.call(null,target_fn__15628,args);
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
var this__15637 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15641 = this;
cljs.core.swap_BANG_.call(null,this__15641.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15641.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15641.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15641.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15648 = this;
cljs.core.swap_BANG_.call(null,this__15648.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15648.method_cache,this__15648.method_table,this__15648.cached_hierarchy,this__15648.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15649 = this;
cljs.core.swap_BANG_.call(null,this__15649.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15649.method_cache,this__15649.method_table,this__15649.cached_hierarchy,this__15649.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15652 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15652.cached_hierarchy),cljs.core.deref.call(null,this__15652.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15652.method_cache,this__15652.method_table,this__15652.cached_hierarchy,this__15652.hierarchy);
}
var temp__3695__auto____15653 = cljs.core.deref.call(null,this__15652.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15653))
{var target_fn__15654 = temp__3695__auto____15653;

return target_fn__15654;
} else
{var temp__3695__auto____15655 = cljs.core.find_and_cache_best_method.call(null,this__15652.name,dispatch_val,this__15652.hierarchy,this__15652.method_table,this__15652.prefer_table,this__15652.method_cache,this__15652.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15655))
{var target_fn__15656 = temp__3695__auto____15655;

return target_fn__15656;
} else
{return cljs.core.deref.call(null,this__15652.method_table).call(null,this__15652.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15657 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15657.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15657.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15657.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15657.method_cache,this__15657.method_table,this__15657.cached_hierarchy,this__15657.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15658 = this;
return cljs.core.deref.call(null,this__15658.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15659 = this;
return cljs.core.deref.call(null,this__15659.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15662 = this;
return cljs.core.do_dispatch.call(null,mf,this__15662.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15670__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15670 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15670__delegate.call(this, _, args);
};
G__15670.cljs$lang$maxFixedArity = 1;
G__15670.cljs$lang$applyTo = (function (arglist__15671){
var _ = cljs.core.first(arglist__15671);
var args = cljs.core.rest(arglist__15671);
return G__15670__delegate.call(this, _, args);
});
return G__15670;
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
