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
var or__3548__auto____7198 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7198))
{return or__3548__auto____7198;
} else
{var or__3548__auto____7206 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7206))
{return or__3548__auto____7206;
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
var _invoke__7523 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7257 = this$;

if(cljs.core.truth_(and__3546__auto____7257))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7257;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7260 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7260))
{return or__3548__auto____7260;
} else
{var or__3548__auto____7263 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7263))
{return or__3548__auto____7263;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7524 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7266 = this$;

if(cljs.core.truth_(and__3546__auto____7266))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7266;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7269 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7269))
{return or__3548__auto____7269;
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
var _invoke__7525 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7276 = this$;

if(cljs.core.truth_(and__3546__auto____7276))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7276;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7280 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7280))
{return or__3548__auto____7280;
} else
{var or__3548__auto____7282 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7282))
{return or__3548__auto____7282;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7526 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7293 = this$;

if(cljs.core.truth_(and__3546__auto____7293))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7293;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7296 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7296))
{return or__3548__auto____7296;
} else
{var or__3548__auto____7298 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7298))
{return or__3548__auto____7298;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7527 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7301 = this$;

if(cljs.core.truth_(and__3546__auto____7301))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7301;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7305 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7305))
{return or__3548__auto____7305;
} else
{var or__3548__auto____7306 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7306))
{return or__3548__auto____7306;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7528 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7310 = this$;

if(cljs.core.truth_(and__3546__auto____7310))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7310;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7314 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7314))
{return or__3548__auto____7314;
} else
{var or__3548__auto____7315 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7315))
{return or__3548__auto____7315;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7529 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7319 = this$;

if(cljs.core.truth_(and__3546__auto____7319))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7319;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7322 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7322))
{return or__3548__auto____7322;
} else
{var or__3548__auto____7324 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7324))
{return or__3548__auto____7324;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7530 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7328 = this$;

if(cljs.core.truth_(and__3546__auto____7328))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7328;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7331 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7331))
{return or__3548__auto____7331;
} else
{var or__3548__auto____7333 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7333))
{return or__3548__auto____7333;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7531 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7337 = this$;

if(cljs.core.truth_(and__3546__auto____7337))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7337;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7340 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7340))
{return or__3548__auto____7340;
} else
{var or__3548__auto____7342 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7342))
{return or__3548__auto____7342;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7532 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7346 = this$;

if(cljs.core.truth_(and__3546__auto____7346))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7346;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7533 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7352 = this$;

if(cljs.core.truth_(and__3546__auto____7352))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7352;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7354 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7354))
{return or__3548__auto____7354;
} else
{var or__3548__auto____7356 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7356))
{return or__3548__auto____7356;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7534 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7361 = this$;

if(cljs.core.truth_(and__3546__auto____7361))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7361;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7364 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7364))
{return or__3548__auto____7364;
} else
{var or__3548__auto____7365 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7365))
{return or__3548__auto____7365;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7535 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7370 = this$;

if(cljs.core.truth_(and__3546__auto____7370))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7370;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7372 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7372))
{return or__3548__auto____7372;
} else
{var or__3548__auto____7374 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7374))
{return or__3548__auto____7374;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7536 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7376 = this$;

if(cljs.core.truth_(and__3546__auto____7376))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7376;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7537 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7412 = this$;

if(cljs.core.truth_(and__3546__auto____7412))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7412;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7415 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7415))
{return or__3548__auto____7415;
} else
{var or__3548__auto____7418 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7418))
{return or__3548__auto____7418;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7538 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7421 = this$;

if(cljs.core.truth_(and__3546__auto____7421))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7421;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7423 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7423))
{return or__3548__auto____7423;
} else
{var or__3548__auto____7426 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7426))
{return or__3548__auto____7426;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7539 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7430 = this$;

if(cljs.core.truth_(and__3546__auto____7430))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7430;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7464 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7464))
{return or__3548__auto____7464;
} else
{var or__3548__auto____7467 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7467))
{return or__3548__auto____7467;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7540 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7470 = this$;

if(cljs.core.truth_(and__3546__auto____7470))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7470;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7472 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7472))
{return or__3548__auto____7472;
} else
{var or__3548__auto____7475 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7475))
{return or__3548__auto____7475;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7541 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7479 = this$;

if(cljs.core.truth_(and__3546__auto____7479))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7479;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7482 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7482))
{return or__3548__auto____7482;
} else
{var or__3548__auto____7485 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7485))
{return or__3548__auto____7485;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7542 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7488 = this$;

if(cljs.core.truth_(and__3546__auto____7488))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7488;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7492 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7492))
{return or__3548__auto____7492;
} else
{var or__3548__auto____7494 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7494))
{return or__3548__auto____7494;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7543 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7496 = this$;

if(cljs.core.truth_(and__3546__auto____7496))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7496;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7509 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7509))
{return or__3548__auto____7509;
} else
{var or__3548__auto____7522 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7522))
{return or__3548__auto____7522;
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
return _invoke__7523.call(this,this$);
case  2 :
return _invoke__7524.call(this,this$,a);
case  3 :
return _invoke__7525.call(this,this$,a,b);
case  4 :
return _invoke__7526.call(this,this$,a,b,c);
case  5 :
return _invoke__7527.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7528.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7529.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7530.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7531.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7532.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7533.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7534.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7535.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7536.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7537.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7538.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7539.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7540.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7541.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7542.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7543.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7633 = coll;

if(cljs.core.truth_(and__3546__auto____7633))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7633;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7634 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7634))
{return or__3548__auto____7634;
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
if(cljs.core.truth_((function (){var and__3546__auto____7650 = coll;

if(cljs.core.truth_(and__3546__auto____7650))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7650;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7654 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7654))
{return or__3548__auto____7654;
} else
{var or__3548__auto____7656 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7656))
{return or__3548__auto____7656;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7691 = coll;

if(cljs.core.truth_(and__3546__auto____7691))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7691;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7692 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7692))
{return or__3548__auto____7692;
} else
{var or__3548__auto____7693 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7693))
{return or__3548__auto____7693;
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
var _nth__7700 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7694 = coll;

if(cljs.core.truth_(and__3546__auto____7694))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7694;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7695 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7695))
{return or__3548__auto____7695;
} else
{var or__3548__auto____7696 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7696))
{return or__3548__auto____7696;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7701 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7697 = coll;

if(cljs.core.truth_(and__3546__auto____7697))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7697;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7698 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7698))
{return or__3548__auto____7698;
} else
{var or__3548__auto____7699 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7699))
{return or__3548__auto____7699;
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
return _nth__7700.call(this,coll,n);
case  3 :
return _nth__7701.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7703 = coll;

if(cljs.core.truth_(and__3546__auto____7703))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7703;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7705 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7705))
{return or__3548__auto____7705;
} else
{var or__3548__auto____7706 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7706))
{return or__3548__auto____7706;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7710 = coll;

if(cljs.core.truth_(and__3546__auto____7710))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7710;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7712 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7712))
{return or__3548__auto____7712;
} else
{var or__3548__auto____7714 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7714))
{return or__3548__auto____7714;
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
var _lookup__7735 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7723 = o;

if(cljs.core.truth_(and__3546__auto____7723))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7723;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7725 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7725))
{return or__3548__auto____7725;
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
var _lookup__7736 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7729 = o;

if(cljs.core.truth_(and__3546__auto____7729))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7729;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7731 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7731))
{return or__3548__auto____7731;
} else
{var or__3548__auto____7732 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7732))
{return or__3548__auto____7732;
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
return _lookup__7735.call(this,o,k);
case  3 :
return _lookup__7736.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7739 = coll;

if(cljs.core.truth_(and__3546__auto____7739))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7739;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7749 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7749))
{return or__3548__auto____7749;
} else
{var or__3548__auto____7751 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7751))
{return or__3548__auto____7751;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7753 = coll;

if(cljs.core.truth_(and__3546__auto____7753))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7753;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7754 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7754))
{return or__3548__auto____7754;
} else
{var or__3548__auto____7755 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7755))
{return or__3548__auto____7755;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7756 = coll;

if(cljs.core.truth_(and__3546__auto____7756))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7756;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7757 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7757))
{return or__3548__auto____7757;
} else
{var or__3548__auto____7758 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7758))
{return or__3548__auto____7758;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7763 = coll;

if(cljs.core.truth_(and__3546__auto____7763))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7763;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7766 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7766))
{return or__3548__auto____7766;
} else
{var or__3548__auto____7767 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7767))
{return or__3548__auto____7767;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7771 = coll;

if(cljs.core.truth_(and__3546__auto____7771))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7771;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7773 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7773))
{return or__3548__auto____7773;
} else
{var or__3548__auto____7774 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7774))
{return or__3548__auto____7774;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7778 = coll;

if(cljs.core.truth_(and__3546__auto____7778))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7778;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7781 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7781))
{return or__3548__auto____7781;
} else
{var or__3548__auto____7782 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7782))
{return or__3548__auto____7782;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7786 = coll;

if(cljs.core.truth_(and__3546__auto____7786))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7786;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7788 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7788))
{return or__3548__auto____7788;
} else
{var or__3548__auto____7789 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7789))
{return or__3548__auto____7789;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7813 = o;

if(cljs.core.truth_(and__3546__auto____7813))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7813;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7817 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7817))
{return or__3548__auto____7817;
} else
{var or__3548__auto____7820 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7820))
{return or__3548__auto____7820;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7829 = o;

if(cljs.core.truth_(and__3546__auto____7829))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7829;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7831 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7831))
{return or__3548__auto____7831;
} else
{var or__3548__auto____7833 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7833))
{return or__3548__auto____7833;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7839 = o;

if(cljs.core.truth_(and__3546__auto____7839))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7839;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7841 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7841))
{return or__3548__auto____7841;
} else
{var or__3548__auto____7842 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7842))
{return or__3548__auto____7842;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7847 = o;

if(cljs.core.truth_(and__3546__auto____7847))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7847;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7849 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7849))
{return or__3548__auto____7849;
} else
{var or__3548__auto____7850 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7850))
{return or__3548__auto____7850;
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
var _reduce__7910 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7862 = coll;

if(cljs.core.truth_(and__3546__auto____7862))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7862;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7900 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7900))
{return or__3548__auto____7900;
} else
{var or__3548__auto____7903 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7903))
{return or__3548__auto____7903;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7911 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7905 = coll;

if(cljs.core.truth_(and__3546__auto____7905))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7905;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7908 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7908))
{return or__3548__auto____7908;
} else
{var or__3548__auto____7909 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7909))
{return or__3548__auto____7909;
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
return _reduce__7910.call(this,coll,f);
case  3 :
return _reduce__7911.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7923 = o;

if(cljs.core.truth_(and__3546__auto____7923))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7923;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7926 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7926))
{return or__3548__auto____7926;
} else
{var or__3548__auto____7941 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7941))
{return or__3548__auto____7941;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7943 = o;

if(cljs.core.truth_(and__3546__auto____7943))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7943;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7946 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7946))
{return or__3548__auto____7946;
} else
{var or__3548__auto____7950 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7950))
{return or__3548__auto____7950;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7961 = o;

if(cljs.core.truth_(and__3546__auto____7961))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7961;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7964 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7964))
{return or__3548__auto____7964;
} else
{var or__3548__auto____7965 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7965))
{return or__3548__auto____7965;
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
if(cljs.core.truth_((function (){var and__3546__auto____7973 = o;

if(cljs.core.truth_(and__3546__auto____7973))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7973;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7976 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7976))
{return or__3548__auto____7976;
} else
{var or__3548__auto____7977 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7977))
{return or__3548__auto____7977;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7985 = d;

if(cljs.core.truth_(and__3546__auto____7985))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7985;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7988 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7988))
{return or__3548__auto____7988;
} else
{var or__3548__auto____7989 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7989))
{return or__3548__auto____7989;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8005 = this$;

if(cljs.core.truth_(and__3546__auto____8005))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8005;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8007 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8007))
{return or__3548__auto____8007;
} else
{var or__3548__auto____8009 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8009))
{return or__3548__auto____8009;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8013 = this$;

if(cljs.core.truth_(and__3546__auto____8013))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8013;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8015 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8015))
{return or__3548__auto____8015;
} else
{var or__3548__auto____8016 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8016))
{return or__3548__auto____8016;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8020 = this$;

if(cljs.core.truth_(and__3546__auto____8020))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8020;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8023 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8023))
{return or__3548__auto____8023;
} else
{var or__3548__auto____8024 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8024))
{return or__3548__auto____8024;
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
var G__8068 = null;
var G__8068__8069 = (function (o,k){
return null;
});
var G__8068__8071 = (function (o,k,not_found){
return not_found;
});
G__8068 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8068__8069.call(this,o,k);
case  3 :
return G__8068__8071.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8068;
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
var G__8078 = null;
var G__8078__8079 = (function (_,f){
return f.call(null);
});
var G__8078__8080 = (function (_,f,start){
return start;
});
G__8078 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8078__8079.call(this,_,f);
case  3 :
return G__8078__8080.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8078;
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
var G__8092 = null;
var G__8092__8093 = (function (_,n){
return null;
});
var G__8092__8094 = (function (_,n,not_found){
return not_found;
});
G__8092 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8092__8093.call(this,_,n);
case  3 :
return G__8092__8094.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8092;
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
var ci_reduce__8166 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8155 = cljs.core._nth.call(null,cicoll,0);
var n__8156 = 1;

while(true){
if(cljs.core.truth_((n__8156 < cljs.core._count.call(null,cicoll))))
{{
var G__8172 = f.call(null,val__8155,cljs.core._nth.call(null,cicoll,n__8156));
var G__8173 = (n__8156 + 1);
val__8155 = G__8172;
n__8156 = G__8173;
continue;
}
} else
{return val__8155;
}
break;
}
}
});
var ci_reduce__8167 = (function (cicoll,f,val){
var val__8158 = val;
var n__8159 = 0;

while(true){
if(cljs.core.truth_((n__8159 < cljs.core._count.call(null,cicoll))))
{{
var G__8175 = f.call(null,val__8158,cljs.core._nth.call(null,cicoll,n__8159));
var G__8176 = (n__8159 + 1);
val__8158 = G__8175;
n__8159 = G__8176;
continue;
}
} else
{return val__8158;
}
break;
}
});
var ci_reduce__8169 = (function (cicoll,f,val,idx){
var val__8162 = val;
var n__8163 = idx;

while(true){
if(cljs.core.truth_((n__8163 < cljs.core._count.call(null,cicoll))))
{{
var G__8178 = f.call(null,val__8162,cljs.core._nth.call(null,cicoll,n__8163));
var G__8179 = (n__8163 + 1);
val__8162 = G__8178;
n__8163 = G__8179;
continue;
}
} else
{return val__8162;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8166.call(this,cicoll,f);
case  3 :
return ci_reduce__8167.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8169.call(this,cicoll,f,val,idx);
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
var this__8186 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8240 = null;
var G__8240__8241 = (function (_,f){
var this__8189 = this;
return cljs.core.ci_reduce.call(null,this__8189.a,f,(this__8189.a[this__8189.i]),(this__8189.i + 1));
});
var G__8240__8242 = (function (_,f,start){
var this__8192 = this;
return cljs.core.ci_reduce.call(null,this__8192.a,f,start,this__8192.i);
});
G__8240 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8240__8241.call(this,_,f);
case  3 :
return G__8240__8242.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8240;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8195 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8198 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8256 = null;
var G__8256__8257 = (function (coll,n){
var this__8201 = this;
var i__8202 = (n + this__8201.i);

if(cljs.core.truth_((i__8202 < this__8201.a.length)))
{return (this__8201.a[i__8202]);
} else
{return null;
}
});
var G__8256__8258 = (function (coll,n,not_found){
var this__8203 = this;
var i__8204 = (n + this__8203.i);

if(cljs.core.truth_((i__8204 < this__8203.a.length)))
{return (this__8203.a[i__8204]);
} else
{return not_found;
}
});
G__8256 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8256__8257.call(this,coll,n);
case  3 :
return G__8256__8258.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8256;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8205 = this;
return (this__8205.a.length - this__8205.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8206 = this;
return (this__8206.a[this__8206.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8207 = this;
if(cljs.core.truth_(((this__8207.i + 1) < this__8207.a.length)))
{return (new cljs.core.IndexedSeq(this__8207.a,(this__8207.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8229 = this;
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
var G__8289 = null;
var G__8289__8290 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8289__8291 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8289 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8289__8290.call(this,array,f);
case  3 :
return G__8289__8291.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8289;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8294 = null;
var G__8294__8295 = (function (array,k){
return (array[k]);
});
var G__8294__8296 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8294 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8294__8295.call(this,array,k);
case  3 :
return G__8294__8296.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8294;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8299 = null;
var G__8299__8300 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8299__8301 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8299 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8299__8300.call(this,array,n);
case  3 :
return G__8299__8301.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8299;
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
var temp__3698__auto____8309 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8309))
{var s__8310 = temp__3698__auto____8309;

return cljs.core._first.call(null,s__8310);
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
var G__8390 = cljs.core.next.call(null,s);
s = G__8390;
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
var s__8391 = cljs.core.seq.call(null,x);
var n__8392 = 0;

while(true){
if(cljs.core.truth_(s__8391))
{{
var G__8393 = cljs.core.next.call(null,s__8391);
var G__8394 = (n__8392 + 1);
s__8391 = G__8393;
n__8392 = G__8394;
continue;
}
} else
{return n__8392;
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
var conj__8398 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8399 = (function() { 
var G__8404__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8406 = conj.call(null,coll,x);
var G__8407 = cljs.core.first.call(null,xs);
var G__8408 = cljs.core.next.call(null,xs);
coll = G__8406;
x = G__8407;
xs = G__8408;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8404 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8404__delegate.call(this, coll, x, xs);
};
G__8404.cljs$lang$maxFixedArity = 2;
G__8404.cljs$lang$applyTo = (function (arglist__8409){
var coll = cljs.core.first(arglist__8409);
var x = cljs.core.first(cljs.core.next(arglist__8409));
var xs = cljs.core.rest(cljs.core.next(arglist__8409));
return G__8404__delegate.call(this, coll, x, xs);
});
return G__8404;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8398.call(this,coll,x);
default:
return conj__8399.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8399.cljs$lang$applyTo;
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
var assoc__8528 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8529 = (function() { 
var G__8536__delegate = function (coll,k,v,kvs){
while(true){
var ret__8522 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8539 = ret__8522;
var G__8541 = cljs.core.first.call(null,kvs);
var G__8542 = cljs.core.second.call(null,kvs);
var G__8543 = cljs.core.nnext.call(null,kvs);
coll = G__8539;
k = G__8541;
v = G__8542;
kvs = G__8543;
continue;
}
} else
{return ret__8522;
}
break;
}
};
var G__8536 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8536__delegate.call(this, coll, k, v, kvs);
};
G__8536.cljs$lang$maxFixedArity = 3;
G__8536.cljs$lang$applyTo = (function (arglist__8548){
var coll = cljs.core.first(arglist__8548);
var k = cljs.core.first(cljs.core.next(arglist__8548));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8548)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8548)));
return G__8536__delegate.call(this, coll, k, v, kvs);
});
return G__8536;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8528.call(this,coll,k,v);
default:
return assoc__8529.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8529.cljs$lang$applyTo;
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
var dissoc__8560 = (function (coll){
return coll;
});
var dissoc__8561 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8562 = (function() { 
var G__8564__delegate = function (coll,k,ks){
while(true){
var ret__8555 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8566 = ret__8555;
var G__8567 = cljs.core.first.call(null,ks);
var G__8568 = cljs.core.next.call(null,ks);
coll = G__8566;
k = G__8567;
ks = G__8568;
continue;
}
} else
{return ret__8555;
}
break;
}
};
var G__8564 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8564__delegate.call(this, coll, k, ks);
};
G__8564.cljs$lang$maxFixedArity = 2;
G__8564.cljs$lang$applyTo = (function (arglist__8569){
var coll = cljs.core.first(arglist__8569);
var k = cljs.core.first(cljs.core.next(arglist__8569));
var ks = cljs.core.rest(cljs.core.next(arglist__8569));
return G__8564__delegate.call(this, coll, k, ks);
});
return G__8564;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8560.call(this,coll);
case  2 :
return dissoc__8561.call(this,coll,k);
default:
return dissoc__8562.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8562.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8589 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8590 = x__445__auto____8589;

if(cljs.core.truth_(and__3546__auto____8590))
{var and__3546__auto____8591 = x__445__auto____8589.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8591))
{return cljs.core.not.call(null,x__445__auto____8589.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8591;
}
} else
{return and__3546__auto____8590;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8589);
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
var disj__8621 = (function (coll){
return coll;
});
var disj__8622 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8623 = (function() { 
var G__8625__delegate = function (coll,k,ks){
while(true){
var ret__8619 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8626 = ret__8619;
var G__8627 = cljs.core.first.call(null,ks);
var G__8628 = cljs.core.next.call(null,ks);
coll = G__8626;
k = G__8627;
ks = G__8628;
continue;
}
} else
{return ret__8619;
}
break;
}
};
var G__8625 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8625__delegate.call(this, coll, k, ks);
};
G__8625.cljs$lang$maxFixedArity = 2;
G__8625.cljs$lang$applyTo = (function (arglist__8629){
var coll = cljs.core.first(arglist__8629);
var k = cljs.core.first(cljs.core.next(arglist__8629));
var ks = cljs.core.rest(cljs.core.next(arglist__8629));
return G__8625__delegate.call(this, coll, k, ks);
});
return G__8625;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8621.call(this,coll);
case  2 :
return disj__8622.call(this,coll,k);
default:
return disj__8623.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8623.cljs$lang$applyTo;
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
{var x__445__auto____8642 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8643 = x__445__auto____8642;

if(cljs.core.truth_(and__3546__auto____8643))
{var and__3546__auto____8645 = x__445__auto____8642.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8645))
{return cljs.core.not.call(null,x__445__auto____8642.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8645;
}
} else
{return and__3546__auto____8643;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8642);
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
{var x__445__auto____8655 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8656 = x__445__auto____8655;

if(cljs.core.truth_(and__3546__auto____8656))
{var and__3546__auto____8658 = x__445__auto____8655.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8658))
{return cljs.core.not.call(null,x__445__auto____8655.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8658;
}
} else
{return and__3546__auto____8656;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8655);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8667 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8670 = x__445__auto____8667;

if(cljs.core.truth_(and__3546__auto____8670))
{var and__3546__auto____8671 = x__445__auto____8667.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8671))
{return cljs.core.not.call(null,x__445__auto____8667.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8671;
}
} else
{return and__3546__auto____8670;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8667);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8685 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8686 = x__445__auto____8685;

if(cljs.core.truth_(and__3546__auto____8686))
{var and__3546__auto____8687 = x__445__auto____8685.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8687))
{return cljs.core.not.call(null,x__445__auto____8685.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8687;
}
} else
{return and__3546__auto____8686;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8685);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8694 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8698 = x__445__auto____8694;

if(cljs.core.truth_(and__3546__auto____8698))
{var and__3546__auto____8703 = x__445__auto____8694.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8703))
{return cljs.core.not.call(null,x__445__auto____8694.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8703;
}
} else
{return and__3546__auto____8698;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8694);
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

if(cljs.core.truth_((function (){var and__3546__auto____8709 = x__445__auto____8708;

if(cljs.core.truth_(and__3546__auto____8709))
{var and__3546__auto____8710 = x__445__auto____8708.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8710))
{return cljs.core.not.call(null,x__445__auto____8708.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8710;
}
} else
{return and__3546__auto____8709;
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

if(cljs.core.truth_((function (){var and__3546__auto____8724 = x__445__auto____8720;

if(cljs.core.truth_(and__3546__auto____8724))
{var and__3546__auto____8726 = x__445__auto____8720.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8726))
{return cljs.core.not.call(null,x__445__auto____8720.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8726;
}
} else
{return and__3546__auto____8724;
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
var keys__8731 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8731.push(key);
}));
return keys__8731;
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
{var x__445__auto____8752 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8753 = x__445__auto____8752;

if(cljs.core.truth_(and__3546__auto____8753))
{var and__3546__auto____8755 = x__445__auto____8752.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8755))
{return cljs.core.not.call(null,x__445__auto____8752.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8755;
}
} else
{return and__3546__auto____8753;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8752);
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
var and__3546__auto____8765 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8765))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8766 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8766))
{return or__3548__auto____8766;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8765;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8773 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8773))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8773;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8775 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8775))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8775;
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
var and__3546__auto____8784 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8784))
{return (n == n.toFixed());
} else
{return and__3546__auto____8784;
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
if(cljs.core.truth_((function (){var and__3546__auto____8796 = coll;

if(cljs.core.truth_(and__3546__auto____8796))
{var and__3546__auto____8805 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8805))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8805;
}
} else
{return and__3546__auto____8796;
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
var distinct_QMARK___8816 = (function (x){
return true;
});
var distinct_QMARK___8817 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8818 = (function() { 
var G__8822__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8811 = cljs.core.set([y,x]);
var xs__8812 = more;

while(true){
var x__8814 = cljs.core.first.call(null,xs__8812);
var etc__8815 = cljs.core.next.call(null,xs__8812);

if(cljs.core.truth_(xs__8812))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8811,x__8814)))
{return false;
} else
{{
var G__8826 = cljs.core.conj.call(null,s__8811,x__8814);
var G__8827 = etc__8815;
s__8811 = G__8826;
xs__8812 = G__8827;
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
var G__8822 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8822__delegate.call(this, x, y, more);
};
G__8822.cljs$lang$maxFixedArity = 2;
G__8822.cljs$lang$applyTo = (function (arglist__8828){
var x = cljs.core.first(arglist__8828);
var y = cljs.core.first(cljs.core.next(arglist__8828));
var more = cljs.core.rest(cljs.core.next(arglist__8828));
return G__8822__delegate.call(this, x, y, more);
});
return G__8822;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8816.call(this,x);
case  2 :
return distinct_QMARK___8817.call(this,x,y);
default:
return distinct_QMARK___8818.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8818.cljs$lang$applyTo;
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
var r__8830 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8830)))
{return r__8830;
} else
{if(cljs.core.truth_(r__8830))
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
var sort__8836 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8837 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8834 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8834,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8834);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8836.call(this,comp);
case  2 :
return sort__8837.call(this,comp,coll);
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
var sort_by__8844 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8845 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8844.call(this,keyfn,comp);
case  3 :
return sort_by__8845.call(this,keyfn,comp,coll);
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
var reduce__8855 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8856 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8855.call(this,f,val);
case  3 :
return reduce__8856.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8866 = (function (f,coll){
var temp__3695__auto____8860 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8860))
{var s__8862 = temp__3695__auto____8860;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8862),cljs.core.next.call(null,s__8862));
} else
{return f.call(null);
}
});
var seq_reduce__8867 = (function (f,val,coll){
var val__8864 = val;
var coll__8865 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8865))
{{
var G__8869 = f.call(null,val__8864,cljs.core.first.call(null,coll__8865));
var G__8870 = cljs.core.next.call(null,coll__8865);
val__8864 = G__8869;
coll__8865 = G__8870;
continue;
}
} else
{return val__8864;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8866.call(this,f,val);
case  3 :
return seq_reduce__8867.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8879 = null;
var G__8879__8880 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8879__8881 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8879 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8879__8880.call(this,coll,f);
case  3 :
return G__8879__8881.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8879;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8894 = (function (){
return 0;
});
var _PLUS___8895 = (function (x){
return x;
});
var _PLUS___8896 = (function (x,y){
return (x + y);
});
var _PLUS___8897 = (function() { 
var G__8899__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8899 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8899__delegate.call(this, x, y, more);
};
G__8899.cljs$lang$maxFixedArity = 2;
G__8899.cljs$lang$applyTo = (function (arglist__8903){
var x = cljs.core.first(arglist__8903);
var y = cljs.core.first(cljs.core.next(arglist__8903));
var more = cljs.core.rest(cljs.core.next(arglist__8903));
return G__8899__delegate.call(this, x, y, more);
});
return G__8899;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8894.call(this);
case  1 :
return _PLUS___8895.call(this,x);
case  2 :
return _PLUS___8896.call(this,x,y);
default:
return _PLUS___8897.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8897.cljs$lang$applyTo;
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
var ___8907 = (function (x){
return (- x);
});
var ___8908 = (function (x,y){
return (x - y);
});
var ___8909 = (function() { 
var G__8915__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8915 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8915__delegate.call(this, x, y, more);
};
G__8915.cljs$lang$maxFixedArity = 2;
G__8915.cljs$lang$applyTo = (function (arglist__8917){
var x = cljs.core.first(arglist__8917);
var y = cljs.core.first(cljs.core.next(arglist__8917));
var more = cljs.core.rest(cljs.core.next(arglist__8917));
return G__8915__delegate.call(this, x, y, more);
});
return G__8915;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8907.call(this,x);
case  2 :
return ___8908.call(this,x,y);
default:
return ___8909.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8909.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8926 = (function (){
return 1;
});
var _STAR___8927 = (function (x){
return x;
});
var _STAR___8928 = (function (x,y){
return (x * y);
});
var _STAR___8929 = (function() { 
var G__8936__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8936 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8936__delegate.call(this, x, y, more);
};
G__8936.cljs$lang$maxFixedArity = 2;
G__8936.cljs$lang$applyTo = (function (arglist__8938){
var x = cljs.core.first(arglist__8938);
var y = cljs.core.first(cljs.core.next(arglist__8938));
var more = cljs.core.rest(cljs.core.next(arglist__8938));
return G__8936__delegate.call(this, x, y, more);
});
return G__8936;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8926.call(this);
case  1 :
return _STAR___8927.call(this,x);
case  2 :
return _STAR___8928.call(this,x,y);
default:
return _STAR___8929.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8929.cljs$lang$applyTo;
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
var _SLASH___8947 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8949 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___8950 = (function() { 
var G__8954__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8954 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8954__delegate.call(this, x, y, more);
};
G__8954.cljs$lang$maxFixedArity = 2;
G__8954.cljs$lang$applyTo = (function (arglist__8955){
var x = cljs.core.first(arglist__8955);
var y = cljs.core.first(cljs.core.next(arglist__8955));
var more = cljs.core.rest(cljs.core.next(arglist__8955));
return G__8954__delegate.call(this, x, y, more);
});
return G__8954;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8947.call(this,x);
case  2 :
return _SLASH___8949.call(this,x,y);
default:
return _SLASH___8950.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8950.cljs$lang$applyTo;
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
var _LT___8964 = (function (x){
return true;
});
var _LT___8965 = (function (x,y){
return (x < y);
});
var _LT___8966 = (function() { 
var G__8968__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8969 = y;
var G__8970 = cljs.core.first.call(null,more);
var G__8971 = cljs.core.next.call(null,more);
x = G__8969;
y = G__8970;
more = G__8971;
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
var G__8968 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8968__delegate.call(this, x, y, more);
};
G__8968.cljs$lang$maxFixedArity = 2;
G__8968.cljs$lang$applyTo = (function (arglist__8973){
var x = cljs.core.first(arglist__8973);
var y = cljs.core.first(cljs.core.next(arglist__8973));
var more = cljs.core.rest(cljs.core.next(arglist__8973));
return G__8968__delegate.call(this, x, y, more);
});
return G__8968;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___8964.call(this,x);
case  2 :
return _LT___8965.call(this,x,y);
default:
return _LT___8966.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___8966.cljs$lang$applyTo;
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
var _LT__EQ___8981 = (function (x){
return true;
});
var _LT__EQ___8982 = (function (x,y){
return (x <= y);
});
var _LT__EQ___8983 = (function() { 
var G__8985__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8986 = y;
var G__8987 = cljs.core.first.call(null,more);
var G__8988 = cljs.core.next.call(null,more);
x = G__8986;
y = G__8987;
more = G__8988;
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
var G__8985 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8985__delegate.call(this, x, y, more);
};
G__8985.cljs$lang$maxFixedArity = 2;
G__8985.cljs$lang$applyTo = (function (arglist__8989){
var x = cljs.core.first(arglist__8989);
var y = cljs.core.first(cljs.core.next(arglist__8989));
var more = cljs.core.rest(cljs.core.next(arglist__8989));
return G__8985__delegate.call(this, x, y, more);
});
return G__8985;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___8981.call(this,x);
case  2 :
return _LT__EQ___8982.call(this,x,y);
default:
return _LT__EQ___8983.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___8983.cljs$lang$applyTo;
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
var _GT___8994 = (function (x){
return true;
});
var _GT___8995 = (function (x,y){
return (x > y);
});
var _GT___8996 = (function() { 
var G__9092__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9096 = y;
var G__9097 = cljs.core.first.call(null,more);
var G__9098 = cljs.core.next.call(null,more);
x = G__9096;
y = G__9097;
more = G__9098;
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
var G__9092 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9092__delegate.call(this, x, y, more);
};
G__9092.cljs$lang$maxFixedArity = 2;
G__9092.cljs$lang$applyTo = (function (arglist__9099){
var x = cljs.core.first(arglist__9099);
var y = cljs.core.first(cljs.core.next(arglist__9099));
var more = cljs.core.rest(cljs.core.next(arglist__9099));
return G__9092__delegate.call(this, x, y, more);
});
return G__9092;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___8994.call(this,x);
case  2 :
return _GT___8995.call(this,x,y);
default:
return _GT___8996.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___8996.cljs$lang$applyTo;
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
var _GT__EQ___9100 = (function (x){
return true;
});
var _GT__EQ___9101 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9102 = (function() { 
var G__9104__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9106 = y;
var G__9107 = cljs.core.first.call(null,more);
var G__9108 = cljs.core.next.call(null,more);
x = G__9106;
y = G__9107;
more = G__9108;
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
var G__9104 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9104__delegate.call(this, x, y, more);
};
G__9104.cljs$lang$maxFixedArity = 2;
G__9104.cljs$lang$applyTo = (function (arglist__9109){
var x = cljs.core.first(arglist__9109);
var y = cljs.core.first(cljs.core.next(arglist__9109));
var more = cljs.core.rest(cljs.core.next(arglist__9109));
return G__9104__delegate.call(this, x, y, more);
});
return G__9104;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9100.call(this,x);
case  2 :
return _GT__EQ___9101.call(this,x,y);
default:
return _GT__EQ___9102.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9102.cljs$lang$applyTo;
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
var max__9113 = (function (x){
return x;
});
var max__9114 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9115 = (function() { 
var G__9117__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9117 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9117__delegate.call(this, x, y, more);
};
G__9117.cljs$lang$maxFixedArity = 2;
G__9117.cljs$lang$applyTo = (function (arglist__9121){
var x = cljs.core.first(arglist__9121);
var y = cljs.core.first(cljs.core.next(arglist__9121));
var more = cljs.core.rest(cljs.core.next(arglist__9121));
return G__9117__delegate.call(this, x, y, more);
});
return G__9117;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9113.call(this,x);
case  2 :
return max__9114.call(this,x,y);
default:
return max__9115.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9115.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9122 = (function (x){
return x;
});
var min__9123 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9124 = (function() { 
var G__9126__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9126 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9126__delegate.call(this, x, y, more);
};
G__9126.cljs$lang$maxFixedArity = 2;
G__9126.cljs$lang$applyTo = (function (arglist__9130){
var x = cljs.core.first(arglist__9130);
var y = cljs.core.first(cljs.core.next(arglist__9130));
var more = cljs.core.rest(cljs.core.next(arglist__9130));
return G__9126__delegate.call(this, x, y, more);
});
return G__9126;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9122.call(this,x);
case  2 :
return min__9123.call(this,x,y);
default:
return min__9124.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9124.cljs$lang$applyTo;
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
var rem__9135 = (n % d);

return cljs.core.fix.call(null,((n - rem__9135) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9139 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9139));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9142 = (function (){
return Math.random.call(null);
});
var rand__9143 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9142.call(this);
case  1 :
return rand__9143.call(this,n);
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
var _EQ__EQ___9310 = (function (x){
return true;
});
var _EQ__EQ___9312 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9314 = (function() { 
var G__9316__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9318 = y;
var G__9319 = cljs.core.first.call(null,more);
var G__9320 = cljs.core.next.call(null,more);
x = G__9318;
y = G__9319;
more = G__9320;
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
var G__9316 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9316__delegate.call(this, x, y, more);
};
G__9316.cljs$lang$maxFixedArity = 2;
G__9316.cljs$lang$applyTo = (function (arglist__9321){
var x = cljs.core.first(arglist__9321);
var y = cljs.core.first(cljs.core.next(arglist__9321));
var more = cljs.core.rest(cljs.core.next(arglist__9321));
return G__9316__delegate.call(this, x, y, more);
});
return G__9316;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9310.call(this,x);
case  2 :
return _EQ__EQ___9312.call(this,x,y);
default:
return _EQ__EQ___9314.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9314.cljs$lang$applyTo;
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
var n__9426 = n;
var xs__9427 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9428 = xs__9427;

if(cljs.core.truth_(and__3546__auto____9428))
{return (n__9426 > 0);
} else
{return and__3546__auto____9428;
}
})()))
{{
var G__9431 = (n__9426 - 1);
var G__9432 = cljs.core.next.call(null,xs__9427);
n__9426 = G__9431;
xs__9427 = G__9432;
continue;
}
} else
{return xs__9427;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9443 = null;
var G__9443__9444 = (function (coll,n){
var temp__3695__auto____9434 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9434))
{var xs__9438 = temp__3695__auto____9434;

return cljs.core.first.call(null,xs__9438);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9443__9445 = (function (coll,n,not_found){
var temp__3695__auto____9440 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9440))
{var xs__9442 = temp__3695__auto____9440;

return cljs.core.first.call(null,xs__9442);
} else
{return not_found;
}
});
G__9443 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9443__9444.call(this,coll,n);
case  3 :
return G__9443__9445.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9443;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9449 = (function (){
return "";
});
var str_STAR___9453 = (function (x){
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
var str_STAR___9454 = (function() { 
var G__9456__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9457 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9458 = cljs.core.next.call(null,more);
sb = G__9457;
more = G__9458;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9456 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9456__delegate.call(this, x, ys);
};
G__9456.cljs$lang$maxFixedArity = 1;
G__9456.cljs$lang$applyTo = (function (arglist__9459){
var x = cljs.core.first(arglist__9459);
var ys = cljs.core.rest(arglist__9459);
return G__9456__delegate.call(this, x, ys);
});
return G__9456;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9449.call(this);
case  1 :
return str_STAR___9453.call(this,x);
default:
return str_STAR___9454.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9454.cljs$lang$applyTo;
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
var str__9465 = (function (){
return "";
});
var str__9466 = (function (x){
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
var str__9467 = (function() { 
var G__9469__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9469 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9469__delegate.call(this, x, ys);
};
G__9469.cljs$lang$maxFixedArity = 1;
G__9469.cljs$lang$applyTo = (function (arglist__9470){
var x = cljs.core.first(arglist__9470);
var ys = cljs.core.rest(arglist__9470);
return G__9469__delegate.call(this, x, ys);
});
return G__9469;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9465.call(this);
case  1 :
return str__9466.call(this,x);
default:
return str__9467.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9467.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9471 = (function (s,start){
return s.substring(start);
});
var subs__9472 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9471.call(this,s,start);
case  3 :
return subs__9472.call(this,s,start,end);
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
var keyword__9614 = (function (name){
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
var keyword__9615 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9614.call(this,ns);
case  2 :
return keyword__9615.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9620 = cljs.core.seq.call(null,x);
var ys__9621 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9620)))
{return cljs.core.nil_QMARK_.call(null,ys__9621);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9621)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9620),cljs.core.first.call(null,ys__9621))))
{{
var G__9628 = cljs.core.next.call(null,xs__9620);
var G__9629 = cljs.core.next.call(null,ys__9621);
xs__9620 = G__9628;
ys__9621 = G__9629;
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
return cljs.core.reduce.call(null,(function (p1__9632_SHARP_,p2__9634_SHARP_){
return cljs.core.hash_combine.call(null,p1__9632_SHARP_,cljs.core.hash.call(null,p2__9634_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9698__9701 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9698__9701))
{var G__9703__9705 = cljs.core.first.call(null,G__9698__9701);
var vec__9704__9707 = G__9703__9705;
var key_name__9708 = cljs.core.nth.call(null,vec__9704__9707,0,null);
var f__9709 = cljs.core.nth.call(null,vec__9704__9707,1,null);
var G__9698__9710 = G__9698__9701;

var G__9703__9711 = G__9703__9705;
var G__9698__9712 = G__9698__9710;

while(true){
var vec__9713__9714 = G__9703__9711;
var key_name__9715 = cljs.core.nth.call(null,vec__9713__9714,0,null);
var f__9716 = cljs.core.nth.call(null,vec__9713__9714,1,null);
var G__9698__9717 = G__9698__9712;

var str_name__9721 = cljs.core.name.call(null,key_name__9715);

obj[str_name__9721] = f__9716;
var temp__3698__auto____9722 = cljs.core.next.call(null,G__9698__9717);

if(cljs.core.truth_(temp__3698__auto____9722))
{var G__9698__9723 = temp__3698__auto____9722;

{
var G__9726 = cljs.core.first.call(null,G__9698__9723);
var G__9727 = G__9698__9723;
G__9703__9711 = G__9726;
G__9698__9712 = G__9727;
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
var this__9741 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9747 = this;
return this__9747.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9751 = this;
return this__9751.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9754 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9756 = this;
return this__9756.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9758 = this;
return this__9758.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9760 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9761 = this;
return (new cljs.core.List(meta,this__9761.first,this__9761.rest,this__9761.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9762 = this;
return this__9762.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9763 = this;
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
var this__9825 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9827 = this;
return (new cljs.core.List(this__9827.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9829 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9831 = this;
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
var this__9836 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9848 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9851 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9853 = this;
return this__9853.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9856 = this;
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
list.cljs$lang$applyTo = (function (arglist__9872){
var items = cljs.core.seq( arglist__9872 );;
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
var this__9878 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9879 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9880 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9881 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9881.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9882 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9883 = this;
return this__9883.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9885 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9885.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9885.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9887 = this;
return this__9887.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9889 = this;
return (new cljs.core.Cons(meta,this__9889.first,this__9889.rest));
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
var G__9970 = null;
var G__9970__9972 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9970__9973 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9970 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9970__9972.call(this,string,f);
case  3 :
return G__9970__9973.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9970;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9977 = null;
var G__9977__9979 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9977__9980 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9977 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9977__9979.call(this,string,k);
case  3 :
return G__9977__9980.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9977;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9987 = null;
var G__9987__9988 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9987__9989 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9987 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9987__9988.call(this,string,n);
case  3 :
return G__9987__9989.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9987;
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
var G__10011 = null;
var G__10011__10012 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10011__10013 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10011 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10011__10012.call(this,this$,coll);
case  3 :
return G__10011__10013.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10011;
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
var x__10021 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10021;
} else
{lazy_seq.x = x__10021.call(null);
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
var this__10071 = this;
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
var this__10075 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10077 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10078 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10080 = this;
return this__10080.meta;
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
var ary__10102 = cljs.core.array.call(null);

var s__10103 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10103)))
{ary__10102.push(cljs.core.first.call(null,s__10103));
{
var G__10104 = cljs.core.next.call(null,s__10103);
s__10103 = G__10104;
continue;
}
} else
{return ary__10102;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10105 = s;
var i__10106 = n;
var sum__10108 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10112 = (i__10106 > 0);

if(cljs.core.truth_(and__3546__auto____10112))
{return cljs.core.seq.call(null,s__10105);
} else
{return and__3546__auto____10112;
}
})()))
{{
var G__10113 = cljs.core.next.call(null,s__10105);
var G__10114 = (i__10106 - 1);
var G__10115 = (sum__10108 + 1);
s__10105 = G__10113;
i__10106 = G__10114;
sum__10108 = G__10115;
continue;
}
} else
{return sum__10108;
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
var concat__10231 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10232 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10233 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10227 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10227))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10227),concat.call(null,cljs.core.rest.call(null,s__10227),y));
} else
{return y;
}
})));
});
var concat__10234 = (function() { 
var G__10238__delegate = function (x,y,zs){
var cat__10230 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10228 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10228))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10228),cat.call(null,cljs.core.rest.call(null,xys__10228),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10230.call(null,concat.call(null,x,y),zs);
};
var G__10238 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10238__delegate.call(this, x, y, zs);
};
G__10238.cljs$lang$maxFixedArity = 2;
G__10238.cljs$lang$applyTo = (function (arglist__10239){
var x = cljs.core.first(arglist__10239);
var y = cljs.core.first(cljs.core.next(arglist__10239));
var zs = cljs.core.rest(cljs.core.next(arglist__10239));
return G__10238__delegate.call(this, x, y, zs);
});
return G__10238;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10231.call(this);
case  1 :
return concat__10232.call(this,x);
case  2 :
return concat__10233.call(this,x,y);
default:
return concat__10234.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10234.cljs$lang$applyTo;
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
var list_STAR___10243 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10244 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10245 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10246 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10247 = (function() { 
var G__10249__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10249 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10249__delegate.call(this, a, b, c, d, more);
};
G__10249.cljs$lang$maxFixedArity = 4;
G__10249.cljs$lang$applyTo = (function (arglist__10250){
var a = cljs.core.first(arglist__10250);
var b = cljs.core.first(cljs.core.next(arglist__10250));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10250)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10250))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10250))));
return G__10249__delegate.call(this, a, b, c, d, more);
});
return G__10249;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10243.call(this,a);
case  2 :
return list_STAR___10244.call(this,a,b);
case  3 :
return list_STAR___10245.call(this,a,b,c);
case  4 :
return list_STAR___10246.call(this,a,b,c,d);
default:
return list_STAR___10247.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10247.cljs$lang$applyTo;
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
var apply__10350 = (function (f,args){
var fixed_arity__10251 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10251 + 1)) <= fixed_arity__10251)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10351 = (function (f,x,args){
var arglist__10259 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10261 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10259,fixed_arity__10261) <= fixed_arity__10261)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10259));
} else
{return f.cljs$lang$applyTo(arglist__10259);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10259));
}
});
var apply__10352 = (function (f,x,y,args){
var arglist__10262 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10263 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10262,fixed_arity__10263) <= fixed_arity__10263)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10262));
} else
{return f.cljs$lang$applyTo(arglist__10262);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10262));
}
});
var apply__10353 = (function (f,x,y,z,args){
var arglist__10264 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10265 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10264,fixed_arity__10265) <= fixed_arity__10265)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10264));
} else
{return f.cljs$lang$applyTo(arglist__10264);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10264));
}
});
var apply__10354 = (function() { 
var G__10364__delegate = function (f,a,b,c,d,args){
var arglist__10346 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10347 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10346,fixed_arity__10347) <= fixed_arity__10347)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10346));
} else
{return f.cljs$lang$applyTo(arglist__10346);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10346));
}
};
var G__10364 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10364__delegate.call(this, f, a, b, c, d, args);
};
G__10364.cljs$lang$maxFixedArity = 5;
G__10364.cljs$lang$applyTo = (function (arglist__10370){
var f = cljs.core.first(arglist__10370);
var a = cljs.core.first(cljs.core.next(arglist__10370));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10370)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10370))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10370)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10370)))));
return G__10364__delegate.call(this, f, a, b, c, d, args);
});
return G__10364;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10350.call(this,f,a);
case  3 :
return apply__10351.call(this,f,a,b);
case  4 :
return apply__10352.call(this,f,a,b,c);
case  5 :
return apply__10353.call(this,f,a,b,c,d);
default:
return apply__10354.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10354.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10377){
var obj = cljs.core.first(arglist__10377);
var f = cljs.core.first(cljs.core.next(arglist__10377));
var args = cljs.core.rest(cljs.core.next(arglist__10377));
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
var not_EQ___10381 = (function (x){
return false;
});
var not_EQ___10382 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10383 = (function() { 
var G__10385__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10385 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10385__delegate.call(this, x, y, more);
};
G__10385.cljs$lang$maxFixedArity = 2;
G__10385.cljs$lang$applyTo = (function (arglist__10386){
var x = cljs.core.first(arglist__10386);
var y = cljs.core.first(cljs.core.next(arglist__10386));
var more = cljs.core.rest(cljs.core.next(arglist__10386));
return G__10385__delegate.call(this, x, y, more);
});
return G__10385;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10381.call(this,x);
case  2 :
return not_EQ___10382.call(this,x,y);
default:
return not_EQ___10383.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10383.cljs$lang$applyTo;
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
var G__10393 = pred;
var G__10394 = cljs.core.next.call(null,coll);
pred = G__10393;
coll = G__10394;
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
{var or__3548__auto____10397 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10397))
{return or__3548__auto____10397;
} else
{{
var G__10399 = pred;
var G__10400 = cljs.core.next.call(null,coll);
pred = G__10399;
coll = G__10400;
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
var G__10494 = null;
var G__10494__10495 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10494__10497 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10494__10498 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10494__10499 = (function() { 
var G__10503__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10503 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10503__delegate.call(this, x, y, zs);
};
G__10503.cljs$lang$maxFixedArity = 2;
G__10503.cljs$lang$applyTo = (function (arglist__10504){
var x = cljs.core.first(arglist__10504);
var y = cljs.core.first(cljs.core.next(arglist__10504));
var zs = cljs.core.rest(cljs.core.next(arglist__10504));
return G__10503__delegate.call(this, x, y, zs);
});
return G__10503;
})()
;
G__10494 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10494__10495.call(this);
case  1 :
return G__10494__10497.call(this,x);
case  2 :
return G__10494__10498.call(this,x,y);
default:
return G__10494__10499.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10494.cljs$lang$maxFixedArity = 2;
G__10494.cljs$lang$applyTo = G__10494__10499.cljs$lang$applyTo;
return G__10494;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10518__delegate = function (args){
return x;
};
var G__10518 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10518__delegate.call(this, args);
};
G__10518.cljs$lang$maxFixedArity = 0;
G__10518.cljs$lang$applyTo = (function (arglist__10520){
var args = cljs.core.seq( arglist__10520 );;
return G__10518__delegate.call(this, args);
});
return G__10518;
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
var comp__10538 = (function (){
return cljs.core.identity;
});
var comp__10539 = (function (f){
return f;
});
var comp__10540 = (function (f,g){
return (function() {
var G__10546 = null;
var G__10546__10547 = (function (){
return f.call(null,g.call(null));
});
var G__10546__10548 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10546__10549 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10546__10550 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10546__10551 = (function() { 
var G__10563__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10563 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10563__delegate.call(this, x, y, z, args);
};
G__10563.cljs$lang$maxFixedArity = 3;
G__10563.cljs$lang$applyTo = (function (arglist__10564){
var x = cljs.core.first(arglist__10564);
var y = cljs.core.first(cljs.core.next(arglist__10564));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10564)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10564)));
return G__10563__delegate.call(this, x, y, z, args);
});
return G__10563;
})()
;
G__10546 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10546__10547.call(this);
case  1 :
return G__10546__10548.call(this,x);
case  2 :
return G__10546__10549.call(this,x,y);
case  3 :
return G__10546__10550.call(this,x,y,z);
default:
return G__10546__10551.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10546.cljs$lang$maxFixedArity = 3;
G__10546.cljs$lang$applyTo = G__10546__10551.cljs$lang$applyTo;
return G__10546;
})()
});
var comp__10541 = (function (f,g,h){
return (function() {
var G__10567 = null;
var G__10567__10568 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10567__10569 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10567__10570 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10567__10571 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10567__10572 = (function() { 
var G__10585__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10585 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10585__delegate.call(this, x, y, z, args);
};
G__10585.cljs$lang$maxFixedArity = 3;
G__10585.cljs$lang$applyTo = (function (arglist__10587){
var x = cljs.core.first(arglist__10587);
var y = cljs.core.first(cljs.core.next(arglist__10587));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10587)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10587)));
return G__10585__delegate.call(this, x, y, z, args);
});
return G__10585;
})()
;
G__10567 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10567__10568.call(this);
case  1 :
return G__10567__10569.call(this,x);
case  2 :
return G__10567__10570.call(this,x,y);
case  3 :
return G__10567__10571.call(this,x,y,z);
default:
return G__10567__10572.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10567.cljs$lang$maxFixedArity = 3;
G__10567.cljs$lang$applyTo = G__10567__10572.cljs$lang$applyTo;
return G__10567;
})()
});
var comp__10543 = (function() { 
var G__10593__delegate = function (f1,f2,f3,fs){
var fs__10531 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10595__delegate = function (args){
var ret__10532 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10531),args);
var fs__10533 = cljs.core.next.call(null,fs__10531);

while(true){
if(cljs.core.truth_(fs__10533))
{{
var G__10599 = cljs.core.first.call(null,fs__10533).call(null,ret__10532);
var G__10600 = cljs.core.next.call(null,fs__10533);
ret__10532 = G__10599;
fs__10533 = G__10600;
continue;
}
} else
{return ret__10532;
}
break;
}
};
var G__10595 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10595__delegate.call(this, args);
};
G__10595.cljs$lang$maxFixedArity = 0;
G__10595.cljs$lang$applyTo = (function (arglist__10607){
var args = cljs.core.seq( arglist__10607 );;
return G__10595__delegate.call(this, args);
});
return G__10595;
})()
;
};
var G__10593 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10593__delegate.call(this, f1, f2, f3, fs);
};
G__10593.cljs$lang$maxFixedArity = 3;
G__10593.cljs$lang$applyTo = (function (arglist__10608){
var f1 = cljs.core.first(arglist__10608);
var f2 = cljs.core.first(cljs.core.next(arglist__10608));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10608)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10608)));
return G__10593__delegate.call(this, f1, f2, f3, fs);
});
return G__10593;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10538.call(this);
case  1 :
return comp__10539.call(this,f1);
case  2 :
return comp__10540.call(this,f1,f2);
case  3 :
return comp__10541.call(this,f1,f2,f3);
default:
return comp__10543.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10543.cljs$lang$applyTo;
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
var partial__10613 = (function (f,arg1){
return (function() { 
var G__10619__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10619 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10619__delegate.call(this, args);
};
G__10619.cljs$lang$maxFixedArity = 0;
G__10619.cljs$lang$applyTo = (function (arglist__10620){
var args = cljs.core.seq( arglist__10620 );;
return G__10619__delegate.call(this, args);
});
return G__10619;
})()
;
});
var partial__10614 = (function (f,arg1,arg2){
return (function() { 
var G__10621__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10621 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10621__delegate.call(this, args);
};
G__10621.cljs$lang$maxFixedArity = 0;
G__10621.cljs$lang$applyTo = (function (arglist__10622){
var args = cljs.core.seq( arglist__10622 );;
return G__10621__delegate.call(this, args);
});
return G__10621;
})()
;
});
var partial__10616 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10623__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10623 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10623__delegate.call(this, args);
};
G__10623.cljs$lang$maxFixedArity = 0;
G__10623.cljs$lang$applyTo = (function (arglist__10624){
var args = cljs.core.seq( arglist__10624 );;
return G__10623__delegate.call(this, args);
});
return G__10623;
})()
;
});
var partial__10617 = (function() { 
var G__10625__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10626__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10626 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10626__delegate.call(this, args);
};
G__10626.cljs$lang$maxFixedArity = 0;
G__10626.cljs$lang$applyTo = (function (arglist__10627){
var args = cljs.core.seq( arglist__10627 );;
return G__10626__delegate.call(this, args);
});
return G__10626;
})()
;
};
var G__10625 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10625__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10625.cljs$lang$maxFixedArity = 4;
G__10625.cljs$lang$applyTo = (function (arglist__10628){
var f = cljs.core.first(arglist__10628);
var arg1 = cljs.core.first(cljs.core.next(arglist__10628));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10628)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10628))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10628))));
return G__10625__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10625;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10613.call(this,f,arg1);
case  3 :
return partial__10614.call(this,f,arg1,arg2);
case  4 :
return partial__10616.call(this,f,arg1,arg2,arg3);
default:
return partial__10617.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10617.cljs$lang$applyTo;
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
var fnil__10632 = (function (f,x){
return (function() {
var G__10642 = null;
var G__10642__10643 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10642__10644 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10642__10645 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10642__10646 = (function() { 
var G__10655__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10655 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10655__delegate.call(this, a, b, c, ds);
};
G__10655.cljs$lang$maxFixedArity = 3;
G__10655.cljs$lang$applyTo = (function (arglist__10657){
var a = cljs.core.first(arglist__10657);
var b = cljs.core.first(cljs.core.next(arglist__10657));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10657)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10657)));
return G__10655__delegate.call(this, a, b, c, ds);
});
return G__10655;
})()
;
G__10642 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10642__10643.call(this,a);
case  2 :
return G__10642__10644.call(this,a,b);
case  3 :
return G__10642__10645.call(this,a,b,c);
default:
return G__10642__10646.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10642.cljs$lang$maxFixedArity = 3;
G__10642.cljs$lang$applyTo = G__10642__10646.cljs$lang$applyTo;
return G__10642;
})()
});
var fnil__10634 = (function (f,x,y){
return (function() {
var G__10659 = null;
var G__10659__10660 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10659__10661 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10659__10662 = (function() { 
var G__10671__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10671 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10671__delegate.call(this, a, b, c, ds);
};
G__10671.cljs$lang$maxFixedArity = 3;
G__10671.cljs$lang$applyTo = (function (arglist__10673){
var a = cljs.core.first(arglist__10673);
var b = cljs.core.first(cljs.core.next(arglist__10673));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10673)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10673)));
return G__10671__delegate.call(this, a, b, c, ds);
});
return G__10671;
})()
;
G__10659 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10659__10660.call(this,a,b);
case  3 :
return G__10659__10661.call(this,a,b,c);
default:
return G__10659__10662.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10659.cljs$lang$maxFixedArity = 3;
G__10659.cljs$lang$applyTo = G__10659__10662.cljs$lang$applyTo;
return G__10659;
})()
});
var fnil__10636 = (function (f,x,y,z){
return (function() {
var G__10681 = null;
var G__10681__10682 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10681__10683 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10681__10684 = (function() { 
var G__10686__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10686 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10686__delegate.call(this, a, b, c, ds);
};
G__10686.cljs$lang$maxFixedArity = 3;
G__10686.cljs$lang$applyTo = (function (arglist__10687){
var a = cljs.core.first(arglist__10687);
var b = cljs.core.first(cljs.core.next(arglist__10687));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10687)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10687)));
return G__10686__delegate.call(this, a, b, c, ds);
});
return G__10686;
})()
;
G__10681 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10681__10682.call(this,a,b);
case  3 :
return G__10681__10683.call(this,a,b,c);
default:
return G__10681__10684.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10681.cljs$lang$maxFixedArity = 3;
G__10681.cljs$lang$applyTo = G__10681__10684.cljs$lang$applyTo;
return G__10681;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10632.call(this,f,x);
case  3 :
return fnil__10634.call(this,f,x,y);
case  4 :
return fnil__10636.call(this,f,x,y,z);
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
var mapi__10690 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10688 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10688))
{var s__10689 = temp__3698__auto____10688;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10689)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10689)));
} else
{return null;
}
})));
});

return mapi__10690.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10706 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10706))
{var s__10717 = temp__3698__auto____10706;

var x__10718 = f.call(null,cljs.core.first.call(null,s__10717));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10718)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10717));
} else
{return cljs.core.cons.call(null,x__10718,keep.call(null,f,cljs.core.rest.call(null,s__10717)));
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
var keepi__10875 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10860 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10860))
{var s__10861 = temp__3698__auto____10860;

var x__10869 = f.call(null,idx,cljs.core.first.call(null,s__10861));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10869)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10861));
} else
{return cljs.core.cons.call(null,x__10869,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10861)));
}
} else
{return null;
}
})));
});

return keepi__10875.call(null,0,coll);
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
var every_pred__11123 = (function (p){
return (function() {
var ep1 = null;
var ep1__11128 = (function (){
return true;
});
var ep1__11129 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11130 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10946 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10946))
{return p.call(null,y);
} else
{return and__3546__auto____10946;
}
})());
});
var ep1__11131 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10947 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10947))
{var and__3546__auto____10949 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10949))
{return p.call(null,z);
} else
{return and__3546__auto____10949;
}
} else
{return and__3546__auto____10947;
}
})());
});
var ep1__11132 = (function() { 
var G__11134__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10950 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10950))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10950;
}
})());
};
var G__11134 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11134__delegate.call(this, x, y, z, args);
};
G__11134.cljs$lang$maxFixedArity = 3;
G__11134.cljs$lang$applyTo = (function (arglist__11135){
var x = cljs.core.first(arglist__11135);
var y = cljs.core.first(cljs.core.next(arglist__11135));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11135)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11135)));
return G__11134__delegate.call(this, x, y, z, args);
});
return G__11134;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11128.call(this);
case  1 :
return ep1__11129.call(this,x);
case  2 :
return ep1__11130.call(this,x,y);
case  3 :
return ep1__11131.call(this,x,y,z);
default:
return ep1__11132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11132.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11124 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11137 = (function (){
return true;
});
var ep2__11138 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10956 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10956))
{return p2.call(null,x);
} else
{return and__3546__auto____10956;
}
})());
});
var ep2__11139 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10963 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10963))
{var and__3546__auto____10964 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10964))
{var and__3546__auto____10965 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10965))
{return p2.call(null,y);
} else
{return and__3546__auto____10965;
}
} else
{return and__3546__auto____10964;
}
} else
{return and__3546__auto____10963;
}
})());
});
var ep2__11140 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10966 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10966))
{var and__3546__auto____10967 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10967))
{var and__3546__auto____10969 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10969))
{var and__3546__auto____10970 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10970))
{var and__3546__auto____10971 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10971))
{return p2.call(null,z);
} else
{return and__3546__auto____10971;
}
} else
{return and__3546__auto____10970;
}
} else
{return and__3546__auto____10969;
}
} else
{return and__3546__auto____10967;
}
} else
{return and__3546__auto____10966;
}
})());
});
var ep2__11141 = (function() { 
var G__11154__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10975 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10975))
{return cljs.core.every_QMARK_.call(null,(function (p1__10849_SHARP_){
var and__3546__auto____10983 = p1.call(null,p1__10849_SHARP_);

if(cljs.core.truth_(and__3546__auto____10983))
{return p2.call(null,p1__10849_SHARP_);
} else
{return and__3546__auto____10983;
}
}),args);
} else
{return and__3546__auto____10975;
}
})());
};
var G__11154 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11154__delegate.call(this, x, y, z, args);
};
G__11154.cljs$lang$maxFixedArity = 3;
G__11154.cljs$lang$applyTo = (function (arglist__11159){
var x = cljs.core.first(arglist__11159);
var y = cljs.core.first(cljs.core.next(arglist__11159));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11159)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11159)));
return G__11154__delegate.call(this, x, y, z, args);
});
return G__11154;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11137.call(this);
case  1 :
return ep2__11138.call(this,x);
case  2 :
return ep2__11139.call(this,x,y);
case  3 :
return ep2__11140.call(this,x,y,z);
default:
return ep2__11141.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11141.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11125 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11164 = (function (){
return true;
});
var ep3__11165 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10988 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10988))
{var and__3546__auto____10990 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10990))
{return p3.call(null,x);
} else
{return and__3546__auto____10990;
}
} else
{return and__3546__auto____10988;
}
})());
});
var ep3__11166 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10995 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10995))
{var and__3546__auto____11000 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11000))
{var and__3546__auto____11003 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11003))
{var and__3546__auto____11008 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11008))
{var and__3546__auto____11010 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11010))
{return p3.call(null,y);
} else
{return and__3546__auto____11010;
}
} else
{return and__3546__auto____11008;
}
} else
{return and__3546__auto____11003;
}
} else
{return and__3546__auto____11000;
}
} else
{return and__3546__auto____10995;
}
})());
});
var ep3__11167 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11014 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11014))
{var and__3546__auto____11017 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11017))
{var and__3546__auto____11020 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11020))
{var and__3546__auto____11051 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11051))
{var and__3546__auto____11052 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11052))
{var and__3546__auto____11053 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11053))
{var and__3546__auto____11059 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11059))
{var and__3546__auto____11061 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11061))
{return p3.call(null,z);
} else
{return and__3546__auto____11061;
}
} else
{return and__3546__auto____11059;
}
} else
{return and__3546__auto____11053;
}
} else
{return and__3546__auto____11052;
}
} else
{return and__3546__auto____11051;
}
} else
{return and__3546__auto____11020;
}
} else
{return and__3546__auto____11017;
}
} else
{return and__3546__auto____11014;
}
})());
});
var ep3__11168 = (function() { 
var G__11177__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11062 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11062))
{return cljs.core.every_QMARK_.call(null,(function (p1__10852_SHARP_){
var and__3546__auto____11063 = p1.call(null,p1__10852_SHARP_);

if(cljs.core.truth_(and__3546__auto____11063))
{var and__3546__auto____11064 = p2.call(null,p1__10852_SHARP_);

if(cljs.core.truth_(and__3546__auto____11064))
{return p3.call(null,p1__10852_SHARP_);
} else
{return and__3546__auto____11064;
}
} else
{return and__3546__auto____11063;
}
}),args);
} else
{return and__3546__auto____11062;
}
})());
};
var G__11177 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11177__delegate.call(this, x, y, z, args);
};
G__11177.cljs$lang$maxFixedArity = 3;
G__11177.cljs$lang$applyTo = (function (arglist__11180){
var x = cljs.core.first(arglist__11180);
var y = cljs.core.first(cljs.core.next(arglist__11180));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11180)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11180)));
return G__11177__delegate.call(this, x, y, z, args);
});
return G__11177;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11164.call(this);
case  1 :
return ep3__11165.call(this,x);
case  2 :
return ep3__11166.call(this,x,y);
case  3 :
return ep3__11167.call(this,x,y,z);
default:
return ep3__11168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11168.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11126 = (function() { 
var G__11187__delegate = function (p1,p2,p3,ps){
var ps__11103 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11188 = (function (){
return true;
});
var epn__11189 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10854_SHARP_){
return p1__10854_SHARP_.call(null,x);
}),ps__11103);
});
var epn__11190 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10855_SHARP_){
var and__3546__auto____11110 = p1__10855_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11110))
{return p1__10855_SHARP_.call(null,y);
} else
{return and__3546__auto____11110;
}
}),ps__11103);
});
var epn__11191 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10856_SHARP_){
var and__3546__auto____11112 = p1__10856_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11112))
{var and__3546__auto____11113 = p1__10856_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11113))
{return p1__10856_SHARP_.call(null,z);
} else
{return and__3546__auto____11113;
}
} else
{return and__3546__auto____11112;
}
}),ps__11103);
});
var epn__11192 = (function() { 
var G__11200__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11116 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11116))
{return cljs.core.every_QMARK_.call(null,(function (p1__10857_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10857_SHARP_,args);
}),ps__11103);
} else
{return and__3546__auto____11116;
}
})());
};
var G__11200 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11200__delegate.call(this, x, y, z, args);
};
G__11200.cljs$lang$maxFixedArity = 3;
G__11200.cljs$lang$applyTo = (function (arglist__11258){
var x = cljs.core.first(arglist__11258);
var y = cljs.core.first(cljs.core.next(arglist__11258));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11258)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11258)));
return G__11200__delegate.call(this, x, y, z, args);
});
return G__11200;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11188.call(this);
case  1 :
return epn__11189.call(this,x);
case  2 :
return epn__11190.call(this,x,y);
case  3 :
return epn__11191.call(this,x,y,z);
default:
return epn__11192.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11192.cljs$lang$applyTo;
return epn;
})()
};
var G__11187 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11187__delegate.call(this, p1, p2, p3, ps);
};
G__11187.cljs$lang$maxFixedArity = 3;
G__11187.cljs$lang$applyTo = (function (arglist__11261){
var p1 = cljs.core.first(arglist__11261);
var p2 = cljs.core.first(cljs.core.next(arglist__11261));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11261)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11261)));
return G__11187__delegate.call(this, p1, p2, p3, ps);
});
return G__11187;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11123.call(this,p1);
case  2 :
return every_pred__11124.call(this,p1,p2);
case  3 :
return every_pred__11125.call(this,p1,p2,p3);
default:
return every_pred__11126.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11126.cljs$lang$applyTo;
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
var some_fn__11373 = (function (p){
return (function() {
var sp1 = null;
var sp1__11379 = (function (){
return null;
});
var sp1__11381 = (function (x){
return p.call(null,x);
});
var sp1__11383 = (function (x,y){
var or__3548__auto____11266 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11266))
{return or__3548__auto____11266;
} else
{return p.call(null,y);
}
});
var sp1__11385 = (function (x,y,z){
var or__3548__auto____11268 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11268))
{return or__3548__auto____11268;
} else
{var or__3548__auto____11270 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11270))
{return or__3548__auto____11270;
} else
{return p.call(null,z);
}
}
});
var sp1__11387 = (function() { 
var G__11397__delegate = function (x,y,z,args){
var or__3548__auto____11272 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11272))
{return or__3548__auto____11272;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11397 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11397__delegate.call(this, x, y, z, args);
};
G__11397.cljs$lang$maxFixedArity = 3;
G__11397.cljs$lang$applyTo = (function (arglist__11401){
var x = cljs.core.first(arglist__11401);
var y = cljs.core.first(cljs.core.next(arglist__11401));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11401)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11401)));
return G__11397__delegate.call(this, x, y, z, args);
});
return G__11397;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11379.call(this);
case  1 :
return sp1__11381.call(this,x);
case  2 :
return sp1__11383.call(this,x,y);
case  3 :
return sp1__11385.call(this,x,y,z);
default:
return sp1__11387.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11387.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11374 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11536 = (function (){
return null;
});
var sp2__11537 = (function (x){
var or__3548__auto____11276 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11276))
{return or__3548__auto____11276;
} else
{return p2.call(null,x);
}
});
var sp2__11538 = (function (x,y){
var or__3548__auto____11279 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11279))
{return or__3548__auto____11279;
} else
{var or__3548__auto____11282 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11282))
{return or__3548__auto____11282;
} else
{var or__3548__auto____11285 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11285))
{return or__3548__auto____11285;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11539 = (function (x,y,z){
var or__3548__auto____11289 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11289))
{return or__3548__auto____11289;
} else
{var or__3548__auto____11291 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11291))
{return or__3548__auto____11291;
} else
{var or__3548__auto____11293 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11293))
{return or__3548__auto____11293;
} else
{var or__3548__auto____11296 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11296))
{return or__3548__auto____11296;
} else
{var or__3548__auto____11298 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11298))
{return or__3548__auto____11298;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11541 = (function() { 
var G__11609__delegate = function (x,y,z,args){
var or__3548__auto____11302 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11302))
{return or__3548__auto____11302;
} else
{return cljs.core.some.call(null,(function (p1__10933_SHARP_){
var or__3548__auto____11306 = p1.call(null,p1__10933_SHARP_);

if(cljs.core.truth_(or__3548__auto____11306))
{return or__3548__auto____11306;
} else
{return p2.call(null,p1__10933_SHARP_);
}
}),args);
}
};
var G__11609 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11609__delegate.call(this, x, y, z, args);
};
G__11609.cljs$lang$maxFixedArity = 3;
G__11609.cljs$lang$applyTo = (function (arglist__11614){
var x = cljs.core.first(arglist__11614);
var y = cljs.core.first(cljs.core.next(arglist__11614));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11614)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11614)));
return G__11609__delegate.call(this, x, y, z, args);
});
return G__11609;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11536.call(this);
case  1 :
return sp2__11537.call(this,x);
case  2 :
return sp2__11538.call(this,x,y);
case  3 :
return sp2__11539.call(this,x,y,z);
default:
return sp2__11541.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11541.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11375 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11620 = (function (){
return null;
});
var sp3__11621 = (function (x){
var or__3548__auto____11308 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11308))
{return or__3548__auto____11308;
} else
{var or__3548__auto____11309 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11309))
{return or__3548__auto____11309;
} else
{return p3.call(null,x);
}
}
});
var sp3__11623 = (function (x,y){
var or__3548__auto____11312 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11312))
{return or__3548__auto____11312;
} else
{var or__3548__auto____11315 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11315))
{return or__3548__auto____11315;
} else
{var or__3548__auto____11317 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11317))
{return or__3548__auto____11317;
} else
{var or__3548__auto____11320 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11320))
{return or__3548__auto____11320;
} else
{var or__3548__auto____11323 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11323))
{return or__3548__auto____11323;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11624 = (function (x,y,z){
var or__3548__auto____11327 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11327))
{return or__3548__auto____11327;
} else
{var or__3548__auto____11330 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11330))
{return or__3548__auto____11330;
} else
{var or__3548__auto____11333 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11333))
{return or__3548__auto____11333;
} else
{var or__3548__auto____11336 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11336))
{return or__3548__auto____11336;
} else
{var or__3548__auto____11338 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11338))
{return or__3548__auto____11338;
} else
{var or__3548__auto____11340 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11340))
{return or__3548__auto____11340;
} else
{var or__3548__auto____11343 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11343))
{return or__3548__auto____11343;
} else
{var or__3548__auto____11346 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11346))
{return or__3548__auto____11346;
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
var sp3__11625 = (function() { 
var G__11634__delegate = function (x,y,z,args){
var or__3548__auto____11351 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11351))
{return or__3548__auto____11351;
} else
{return cljs.core.some.call(null,(function (p1__10935_SHARP_){
var or__3548__auto____11353 = p1.call(null,p1__10935_SHARP_);

if(cljs.core.truth_(or__3548__auto____11353))
{return or__3548__auto____11353;
} else
{var or__3548__auto____11355 = p2.call(null,p1__10935_SHARP_);

if(cljs.core.truth_(or__3548__auto____11355))
{return or__3548__auto____11355;
} else
{return p3.call(null,p1__10935_SHARP_);
}
}
}),args);
}
};
var G__11634 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11634__delegate.call(this, x, y, z, args);
};
G__11634.cljs$lang$maxFixedArity = 3;
G__11634.cljs$lang$applyTo = (function (arglist__11635){
var x = cljs.core.first(arglist__11635);
var y = cljs.core.first(cljs.core.next(arglist__11635));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11635)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11635)));
return G__11634__delegate.call(this, x, y, z, args);
});
return G__11634;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11620.call(this);
case  1 :
return sp3__11621.call(this,x);
case  2 :
return sp3__11623.call(this,x,y);
case  3 :
return sp3__11624.call(this,x,y,z);
default:
return sp3__11625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11625.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11376 = (function() { 
var G__11637__delegate = function (p1,p2,p3,ps){
var ps__11359 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11638 = (function (){
return null;
});
var spn__11639 = (function (x){
return cljs.core.some.call(null,(function (p1__10937_SHARP_){
return p1__10937_SHARP_.call(null,x);
}),ps__11359);
});
var spn__11640 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10938_SHARP_){
var or__3548__auto____11362 = p1__10938_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11362))
{return or__3548__auto____11362;
} else
{return p1__10938_SHARP_.call(null,y);
}
}),ps__11359);
});
var spn__11641 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10940_SHARP_){
var or__3548__auto____11364 = p1__10940_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11364))
{return or__3548__auto____11364;
} else
{var or__3548__auto____11367 = p1__10940_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11367))
{return or__3548__auto____11367;
} else
{return p1__10940_SHARP_.call(null,z);
}
}
}),ps__11359);
});
var spn__11642 = (function() { 
var G__11645__delegate = function (x,y,z,args){
var or__3548__auto____11369 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11369))
{return or__3548__auto____11369;
} else
{return cljs.core.some.call(null,(function (p1__10942_SHARP_){
return cljs.core.some.call(null,p1__10942_SHARP_,args);
}),ps__11359);
}
};
var G__11645 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11645__delegate.call(this, x, y, z, args);
};
G__11645.cljs$lang$maxFixedArity = 3;
G__11645.cljs$lang$applyTo = (function (arglist__11646){
var x = cljs.core.first(arglist__11646);
var y = cljs.core.first(cljs.core.next(arglist__11646));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11646)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11646)));
return G__11645__delegate.call(this, x, y, z, args);
});
return G__11645;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11638.call(this);
case  1 :
return spn__11639.call(this,x);
case  2 :
return spn__11640.call(this,x,y);
case  3 :
return spn__11641.call(this,x,y,z);
default:
return spn__11642.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11642.cljs$lang$applyTo;
return spn;
})()
};
var G__11637 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11637__delegate.call(this, p1, p2, p3, ps);
};
G__11637.cljs$lang$maxFixedArity = 3;
G__11637.cljs$lang$applyTo = (function (arglist__11648){
var p1 = cljs.core.first(arglist__11648);
var p2 = cljs.core.first(cljs.core.next(arglist__11648));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11648)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11648)));
return G__11637__delegate.call(this, p1, p2, p3, ps);
});
return G__11637;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11373.call(this,p1);
case  2 :
return some_fn__11374.call(this,p1,p2);
case  3 :
return some_fn__11375.call(this,p1,p2,p3);
default:
return some_fn__11376.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11376.cljs$lang$applyTo;
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
var map__11663 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11651 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11651))
{var s__11652 = temp__3698__auto____11651;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11652)),map.call(null,f,cljs.core.rest.call(null,s__11652)));
} else
{return null;
}
})));
});
var map__11664 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11653 = cljs.core.seq.call(null,c1);
var s2__11654 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11655 = s1__11653;

if(cljs.core.truth_(and__3546__auto____11655))
{return s2__11654;
} else
{return and__3546__auto____11655;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11653),cljs.core.first.call(null,s2__11654)),map.call(null,f,cljs.core.rest.call(null,s1__11653),cljs.core.rest.call(null,s2__11654)));
} else
{return null;
}
})));
});
var map__11665 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11656 = cljs.core.seq.call(null,c1);
var s2__11657 = cljs.core.seq.call(null,c2);
var s3__11658 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11659 = s1__11656;

if(cljs.core.truth_(and__3546__auto____11659))
{var and__3546__auto____11660 = s2__11657;

if(cljs.core.truth_(and__3546__auto____11660))
{return s3__11658;
} else
{return and__3546__auto____11660;
}
} else
{return and__3546__auto____11659;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11656),cljs.core.first.call(null,s2__11657),cljs.core.first.call(null,s3__11658)),map.call(null,f,cljs.core.rest.call(null,s1__11656),cljs.core.rest.call(null,s2__11657),cljs.core.rest.call(null,s3__11658)));
} else
{return null;
}
})));
});
var map__11666 = (function() { 
var G__11669__delegate = function (f,c1,c2,c3,colls){
var step__11662 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11661 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11661)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11661),step.call(null,map.call(null,cljs.core.rest,ss__11661)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11263_SHARP_){
return cljs.core.apply.call(null,f,p1__11263_SHARP_);
}),step__11662.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11669 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11669__delegate.call(this, f, c1, c2, c3, colls);
};
G__11669.cljs$lang$maxFixedArity = 4;
G__11669.cljs$lang$applyTo = (function (arglist__11671){
var f = cljs.core.first(arglist__11671);
var c1 = cljs.core.first(cljs.core.next(arglist__11671));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11671)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11671))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11671))));
return G__11669__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11669;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11663.call(this,f,c1);
case  3 :
return map__11664.call(this,f,c1,c2);
case  4 :
return map__11665.call(this,f,c1,c2,c3);
default:
return map__11666.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11666.cljs$lang$applyTo;
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
{var temp__3698__auto____11672 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11672))
{var s__11674 = temp__3698__auto____11672;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11674),take.call(null,(n - 1),cljs.core.rest.call(null,s__11674)));
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
var step__11684 = (function (n,coll){
while(true){
var s__11682 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11683 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11683))
{return s__11682;
} else
{return and__3546__auto____11683;
}
})()))
{{
var G__11688 = (n - 1);
var G__11689 = cljs.core.rest.call(null,s__11682);
n = G__11688;
coll = G__11689;
continue;
}
} else
{return s__11682;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11684.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11692 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11693 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11692.call(this,n);
case  2 :
return drop_last__11693.call(this,n,s);
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
var s__11699 = cljs.core.seq.call(null,coll);
var lead__11700 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11700))
{{
var G__11702 = cljs.core.next.call(null,s__11699);
var G__11703 = cljs.core.next.call(null,lead__11700);
s__11699 = G__11702;
lead__11700 = G__11703;
continue;
}
} else
{return s__11699;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11708 = (function (pred,coll){
while(true){
var s__11706 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11707 = s__11706;

if(cljs.core.truth_(and__3546__auto____11707))
{return pred.call(null,cljs.core.first.call(null,s__11706));
} else
{return and__3546__auto____11707;
}
})()))
{{
var G__11713 = pred;
var G__11714 = cljs.core.rest.call(null,s__11706);
pred = G__11713;
coll = G__11714;
continue;
}
} else
{return s__11706;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11708.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11718 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11718))
{var s__11722 = temp__3698__auto____11718;

return cljs.core.concat.call(null,s__11722,cycle.call(null,s__11722));
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
var repeat__11726 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11727 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11726.call(this,n);
case  2 :
return repeat__11727.call(this,n,x);
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
var repeatedly__11733 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11734 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11733.call(this,n);
case  2 :
return repeatedly__11734.call(this,n,f);
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
var interleave__11745 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11739 = cljs.core.seq.call(null,c1);
var s2__11740 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11741 = s1__11739;

if(cljs.core.truth_(and__3546__auto____11741))
{return s2__11740;
} else
{return and__3546__auto____11741;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11739),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11740),interleave.call(null,cljs.core.rest.call(null,s1__11739),cljs.core.rest.call(null,s2__11740))));
} else
{return null;
}
})));
});
var interleave__11746 = (function() { 
var G__11748__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11742 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11742)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11742),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11742)));
} else
{return null;
}
})));
};
var G__11748 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11748__delegate.call(this, c1, c2, colls);
};
G__11748.cljs$lang$maxFixedArity = 2;
G__11748.cljs$lang$applyTo = (function (arglist__11749){
var c1 = cljs.core.first(arglist__11749);
var c2 = cljs.core.first(cljs.core.next(arglist__11749));
var colls = cljs.core.rest(cljs.core.next(arglist__11749));
return G__11748__delegate.call(this, c1, c2, colls);
});
return G__11748;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11745.call(this,c1,c2);
default:
return interleave__11746.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11746.cljs$lang$applyTo;
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
var cat__11752 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11750 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11750))
{var coll__11751 = temp__3695__auto____11750;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11751),cat.call(null,cljs.core.rest.call(null,coll__11751),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11752.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12032 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12033 = (function() { 
var G__12035__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12035 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12035__delegate.call(this, f, coll, colls);
};
G__12035.cljs$lang$maxFixedArity = 2;
G__12035.cljs$lang$applyTo = (function (arglist__12038){
var f = cljs.core.first(arglist__12038);
var coll = cljs.core.first(cljs.core.next(arglist__12038));
var colls = cljs.core.rest(cljs.core.next(arglist__12038));
return G__12035__delegate.call(this, f, coll, colls);
});
return G__12035;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12032.call(this,f,coll);
default:
return mapcat__12033.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12033.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12041 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12041))
{var s__12043 = temp__3698__auto____12041;

var f__12047 = cljs.core.first.call(null,s__12043);
var r__12048 = cljs.core.rest.call(null,s__12043);

if(cljs.core.truth_(pred.call(null,f__12047)))
{return cljs.core.cons.call(null,f__12047,filter.call(null,pred,r__12048));
} else
{return filter.call(null,pred,r__12048);
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
var walk__12062 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12062.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12058_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12058_SHARP_));
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
var partition__12075 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12076 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12068 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12068))
{var s__12069 = temp__3698__auto____12068;

var p__12070 = cljs.core.take.call(null,n,s__12069);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12070))))
{return cljs.core.cons.call(null,p__12070,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12069)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12077 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12072 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12072))
{var s__12073 = temp__3698__auto____12072;

var p__12074 = cljs.core.take.call(null,n,s__12073);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12074))))
{return cljs.core.cons.call(null,p__12074,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12073)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12074,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12075.call(this,n,step);
case  3 :
return partition__12076.call(this,n,step,pad);
case  4 :
return partition__12077.call(this,n,step,pad,coll);
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
var get_in__12101 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12102 = (function (m,ks,not_found){
var sentinel__12081 = cljs.core.lookup_sentinel;
var m__12082 = m;
var ks__12083 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12083))
{var m__12099 = cljs.core.get.call(null,m__12082,cljs.core.first.call(null,ks__12083),sentinel__12081);

if(cljs.core.truth_((sentinel__12081 === m__12099)))
{return not_found;
} else
{{
var G__12107 = sentinel__12081;
var G__12108 = m__12099;
var G__12110 = cljs.core.next.call(null,ks__12083);
sentinel__12081 = G__12107;
m__12082 = G__12108;
ks__12083 = G__12110;
continue;
}
}
} else
{return m__12082;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12101.call(this,m,ks);
case  3 :
return get_in__12102.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12112,v){
var vec__12113__12115 = p__12112;
var k__12116 = cljs.core.nth.call(null,vec__12113__12115,0,null);
var ks__12118 = cljs.core.nthnext.call(null,vec__12113__12115,1);

if(cljs.core.truth_(ks__12118))
{return cljs.core.assoc.call(null,m,k__12116,assoc_in.call(null,cljs.core.get.call(null,m,k__12116),ks__12118,v));
} else
{return cljs.core.assoc.call(null,m,k__12116,v);
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
var update_in__delegate = function (m,p__12165,f,args){
var vec__12166__12168 = p__12165;
var k__12169 = cljs.core.nth.call(null,vec__12166__12168,0,null);
var ks__12171 = cljs.core.nthnext.call(null,vec__12166__12168,1);

if(cljs.core.truth_(ks__12171))
{return cljs.core.assoc.call(null,m,k__12169,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12169),ks__12171,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12169,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12169),args));
}
};
var update_in = function (m,p__12165,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12165, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12172){
var m = cljs.core.first(arglist__12172);
var p__12165 = cljs.core.first(cljs.core.next(arglist__12172));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12172)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12172)));
return update_in__delegate.call(this, m, p__12165, f, args);
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
var this__12175 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12220 = null;
var G__12220__12221 = (function (coll,k){
var this__12176 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12220__12222 = (function (coll,k,not_found){
var this__12177 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12220 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12220__12221.call(this,coll,k);
case  3 :
return G__12220__12222.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12220;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12178 = this;
var new_array__12179 = cljs.core.aclone.call(null,this__12178.array);

(new_array__12179[k] = v);
return (new cljs.core.Vector(this__12178.meta,new_array__12179));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12324 = null;
var G__12324__12325 = (function (coll,k){
var this__12180 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12324__12326 = (function (coll,k,not_found){
var this__12181 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12324 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12324__12325.call(this,coll,k);
case  3 :
return G__12324__12326.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12324;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12182 = this;
var new_array__12183 = cljs.core.aclone.call(null,this__12182.array);

new_array__12183.push(o);
return (new cljs.core.Vector(this__12182.meta,new_array__12183));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12332 = null;
var G__12332__12334 = (function (v,f){
var this__12188 = this;
return cljs.core.ci_reduce.call(null,this__12188.array,f);
});
var G__12332__12335 = (function (v,f,start){
var this__12189 = this;
return cljs.core.ci_reduce.call(null,this__12189.array,f,start);
});
G__12332 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12332__12334.call(this,v,f);
case  3 :
return G__12332__12335.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12332;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12190 = this;
if(cljs.core.truth_((this__12190.array.length > 0)))
{var vector_seq__12194 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12190.array.length)))
{return cljs.core.cons.call(null,(this__12190.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12194.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12195 = this;
return this__12195.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12196 = this;
var count__12198 = this__12196.array.length;

if(cljs.core.truth_((count__12198 > 0)))
{return (this__12196.array[(count__12198 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12201 = this;
if(cljs.core.truth_((this__12201.array.length > 0)))
{var new_array__12202 = cljs.core.aclone.call(null,this__12201.array);

new_array__12202.pop();
return (new cljs.core.Vector(this__12201.meta,new_array__12202));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12203 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12208 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12209 = this;
return (new cljs.core.Vector(meta,this__12209.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12210 = this;
return this__12210.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12345 = null;
var G__12345__12346 = (function (coll,n){
var this__12211 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12212 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12212))
{return (n < this__12211.array.length);
} else
{return and__3546__auto____12212;
}
})()))
{return (this__12211.array[n]);
} else
{return null;
}
});
var G__12345__12347 = (function (coll,n,not_found){
var this__12213 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12214 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12214))
{return (n < this__12213.array.length);
} else
{return and__3546__auto____12214;
}
})()))
{return (this__12213.array[n]);
} else
{return not_found;
}
});
G__12345 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12345__12346.call(this,coll,n);
case  3 :
return G__12345__12347.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12345;
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
vector.cljs$lang$applyTo = (function (arglist__12359){
var args = cljs.core.seq( arglist__12359 );;
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
var this__12373 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12527 = null;
var G__12527__12528 = (function (coll,k){
var this__12374 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12527__12529 = (function (coll,k,not_found){
var this__12375 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12527 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12527__12528.call(this,coll,k);
case  3 :
return G__12527__12529.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12527;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12376 = this;
var v_pos__12377 = (this__12376.start + key);

return (new cljs.core.Subvec(this__12376.meta,cljs.core._assoc.call(null,this__12376.v,v_pos__12377,val),this__12376.start,((this__12376.end > (v_pos__12377 + 1)) ? this__12376.end : (v_pos__12377 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12535 = null;
var G__12535__12536 = (function (coll,k){
var this__12378 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12535__12537 = (function (coll,k,not_found){
var this__12379 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12535 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12535__12536.call(this,coll,k);
case  3 :
return G__12535__12537.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12535;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12380 = this;
return (new cljs.core.Subvec(this__12380.meta,cljs.core._assoc_n.call(null,this__12380.v,this__12380.end,o),this__12380.start,(this__12380.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12543 = null;
var G__12543__12544 = (function (coll,f){
var this__12381 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12543__12545 = (function (coll,f,start){
var this__12383 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12543 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12543__12544.call(this,coll,f);
case  3 :
return G__12543__12545.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12543;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12384 = this;
var subvec_seq__12385 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12384.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12384.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12385.call(null,this__12384.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12386 = this;
return (this__12386.end - this__12386.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12387 = this;
return cljs.core._nth.call(null,this__12387.v,(this__12387.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12388 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12388.start,this__12388.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12388.meta,this__12388.v,this__12388.start,(this__12388.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12391 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12393 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12395 = this;
return (new cljs.core.Subvec(meta,this__12395.v,this__12395.start,this__12395.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12397 = this;
return this__12397.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12562 = null;
var G__12562__12563 = (function (coll,n){
var this__12399 = this;
return cljs.core._nth.call(null,this__12399.v,(this__12399.start + n));
});
var G__12562__12564 = (function (coll,n,not_found){
var this__12401 = this;
return cljs.core._nth.call(null,this__12401.v,(this__12401.start + n),not_found);
});
G__12562 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12562__12563.call(this,coll,n);
case  3 :
return G__12562__12564.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12562;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12403 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12403.meta);
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
var subvec__12573 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12574 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12573.call(this,v,start);
case  3 :
return subvec__12574.call(this,v,start,end);
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
var this__12584 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12585 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12589 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12590 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12590.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12591 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12592 = this;
return cljs.core._first.call(null,this__12592.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12593 = this;
var temp__3695__auto____12595 = cljs.core.next.call(null,this__12593.front);

if(cljs.core.truth_(temp__3695__auto____12595))
{var f1__12596 = temp__3695__auto____12595;

return (new cljs.core.PersistentQueueSeq(this__12593.meta,f1__12596,this__12593.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12593.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12593.meta,this__12593.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12600 = this;
return this__12600.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12601 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12601.front,this__12601.rear));
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
var this__12620 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12621 = this;
if(cljs.core.truth_(this__12621.front))
{return (new cljs.core.PersistentQueue(this__12621.meta,(this__12621.count + 1),this__12621.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12622 = this__12621.rear;

if(cljs.core.truth_(or__3548__auto____12622))
{return or__3548__auto____12622;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12621.meta,(this__12621.count + 1),cljs.core.conj.call(null,this__12621.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12623 = this;
var rear__12624 = cljs.core.seq.call(null,this__12623.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12625 = this__12623.front;

if(cljs.core.truth_(or__3548__auto____12625))
{return or__3548__auto____12625;
} else
{return rear__12624;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12623.front,cljs.core.seq.call(null,rear__12624)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12628 = this;
return this__12628.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12630 = this;
return cljs.core._first.call(null,this__12630.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12631 = this;
if(cljs.core.truth_(this__12631.front))
{var temp__3695__auto____12634 = cljs.core.next.call(null,this__12631.front);

if(cljs.core.truth_(temp__3695__auto____12634))
{var f1__12635 = temp__3695__auto____12634;

return (new cljs.core.PersistentQueue(this__12631.meta,(this__12631.count - 1),f1__12635,this__12631.rear));
} else
{return (new cljs.core.PersistentQueue(this__12631.meta,(this__12631.count - 1),cljs.core.seq.call(null,this__12631.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12637 = this;
return cljs.core.first.call(null,this__12637.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12639 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12641 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12650 = this;
return (new cljs.core.PersistentQueue(meta,this__12650.count,this__12650.front,this__12650.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12652 = this;
return this__12652.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12653 = this;
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
var this__12729 = this;
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
var len__12829 = array.length;

var i__12832 = 0;

while(true){
if(cljs.core.truth_((i__12832 < len__12829)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12832]))))
{return i__12832;
} else
{{
var G__12835 = (i__12832 + incr);
i__12832 = G__12835;
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
var obj_map_contains_key_QMARK___12845 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12846 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12844 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12844))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12844;
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
return obj_map_contains_key_QMARK___12845.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12846.call(this,k,strobj,true_val,false_val);
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
var this__12866 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12969 = null;
var G__12969__12970 = (function (coll,k){
var this__12868 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12969__12971 = (function (coll,k,not_found){
var this__12869 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12869.strobj,(this__12869.strobj[k]),not_found);
});
G__12969 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12969__12970.call(this,coll,k);
case  3 :
return G__12969__12971.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12969;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12871 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12874 = goog.object.clone.call(null,this__12871.strobj);
var overwrite_QMARK___12875 = new_strobj__12874.hasOwnProperty(k);

(new_strobj__12874[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12875))
{return (new cljs.core.ObjMap(this__12871.meta,this__12871.keys,new_strobj__12874));
} else
{var new_keys__12877 = cljs.core.aclone.call(null,this__12871.keys);

new_keys__12877.push(k);
return (new cljs.core.ObjMap(this__12871.meta,new_keys__12877,new_strobj__12874));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12871.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12880 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12880.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12990 = null;
var G__12990__12991 = (function (coll,k){
var this__12882 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12990__12992 = (function (coll,k,not_found){
var this__12883 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12990 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12990__12991.call(this,coll,k);
case  3 :
return G__12990__12992.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12990;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12885 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12887 = this;
if(cljs.core.truth_((this__12887.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12848_SHARP_){
return cljs.core.vector.call(null,p1__12848_SHARP_,(this__12887.strobj[p1__12848_SHARP_]));
}),this__12887.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12890 = this;
return this__12890.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12892 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12894 = this;
return (new cljs.core.ObjMap(meta,this__12894.keys,this__12894.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12896 = this;
return this__12896.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12899 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12899.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12900 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12901 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12901))
{return this__12900.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12901;
}
})()))
{var new_keys__12903 = cljs.core.aclone.call(null,this__12900.keys);
var new_strobj__12904 = goog.object.clone.call(null,this__12900.strobj);

new_keys__12903.splice(cljs.core.scan_array.call(null,1,k,new_keys__12903),1);
cljs.core.js_delete.call(null,new_strobj__12904,k);
return (new cljs.core.ObjMap(this__12900.meta,new_keys__12903,new_strobj__12904));
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
var this__13146 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13262 = null;
var G__13262__13263 = (function (coll,k){
var this__13150 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13262__13264 = (function (coll,k,not_found){
var this__13151 = this;
var bucket__13152 = (this__13151.hashobj[cljs.core.hash.call(null,k)]);
var i__13153 = (cljs.core.truth_(bucket__13152)?cljs.core.scan_array.call(null,2,k,bucket__13152):null);

if(cljs.core.truth_(i__13153))
{return (bucket__13152[(i__13153 + 1)]);
} else
{return not_found;
}
});
G__13262 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13262__13263.call(this,coll,k);
case  3 :
return G__13262__13264.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13262;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13158 = this;
var h__13159 = cljs.core.hash.call(null,k);
var bucket__13160 = (this__13158.hashobj[h__13159]);

if(cljs.core.truth_(bucket__13160))
{var new_bucket__13161 = cljs.core.aclone.call(null,bucket__13160);
var new_hashobj__13164 = goog.object.clone.call(null,this__13158.hashobj);

(new_hashobj__13164[h__13159] = new_bucket__13161);
var temp__3695__auto____13165 = cljs.core.scan_array.call(null,2,k,new_bucket__13161);

if(cljs.core.truth_(temp__3695__auto____13165))
{var i__13167 = temp__3695__auto____13165;

(new_bucket__13161[(i__13167 + 1)] = v);
return (new cljs.core.HashMap(this__13158.meta,this__13158.count,new_hashobj__13164));
} else
{new_bucket__13161.push(k,v);
return (new cljs.core.HashMap(this__13158.meta,(this__13158.count + 1),new_hashobj__13164));
}
} else
{var new_hashobj__13170 = goog.object.clone.call(null,this__13158.hashobj);

(new_hashobj__13170[h__13159] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13158.meta,(this__13158.count + 1),new_hashobj__13170));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13171 = this;
var bucket__13172 = (this__13171.hashobj[cljs.core.hash.call(null,k)]);
var i__13173 = (cljs.core.truth_(bucket__13172)?cljs.core.scan_array.call(null,2,k,bucket__13172):null);

if(cljs.core.truth_(i__13173))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13274 = null;
var G__13274__13275 = (function (coll,k){
var this__13175 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13274__13276 = (function (coll,k,not_found){
var this__13180 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13274 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13274__13275.call(this,coll,k);
case  3 :
return G__13274__13276.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13274;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13182 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13183 = this;
if(cljs.core.truth_((this__13183.count > 0)))
{var hashes__13242 = cljs.core.js_keys.call(null,this__13183.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13040_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13183.hashobj[p1__13040_SHARP_])));
}),hashes__13242);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13245 = this;
return this__13245.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13246 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13247 = this;
return (new cljs.core.HashMap(meta,this__13247.count,this__13247.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13248 = this;
return this__13248.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13249 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13249.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13254 = this;
var h__13255 = cljs.core.hash.call(null,k);
var bucket__13256 = (this__13254.hashobj[h__13255]);
var i__13257 = (cljs.core.truth_(bucket__13256)?cljs.core.scan_array.call(null,2,k,bucket__13256):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13257)))
{return coll;
} else
{var new_hashobj__13258 = goog.object.clone.call(null,this__13254.hashobj);

if(cljs.core.truth_((3 > bucket__13256.length)))
{cljs.core.js_delete.call(null,new_hashobj__13258,h__13255);
} else
{var new_bucket__13261 = cljs.core.aclone.call(null,bucket__13256);

new_bucket__13261.splice(i__13257,2);
(new_hashobj__13258[h__13255] = new_bucket__13261);
}
return (new cljs.core.HashMap(this__13254.meta,(this__13254.count - 1),new_hashobj__13258));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13304 = ks.length;

var i__13305 = 0;
var out__13306 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13305 < len__13304)))
{{
var G__13307 = (i__13305 + 1);
var G__13308 = cljs.core.assoc.call(null,out__13306,(ks[i__13305]),(vs[i__13305]));
i__13305 = G__13307;
out__13306 = G__13308;
continue;
}
} else
{return out__13306;
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
var in$__13311 = cljs.core.seq.call(null,keyvals);
var out__13312 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13311))
{{
var G__13314 = cljs.core.nnext.call(null,in$__13311);
var G__13315 = cljs.core.assoc.call(null,out__13312,cljs.core.first.call(null,in$__13311),cljs.core.second.call(null,in$__13311));
in$__13311 = G__13314;
out__13312 = G__13315;
continue;
}
} else
{return out__13312;
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
hash_map.cljs$lang$applyTo = (function (arglist__13317){
var keyvals = cljs.core.seq( arglist__13317 );;
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
{return cljs.core.reduce.call(null,(function (p1__13322_SHARP_,p2__13323_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13344 = p1__13322_SHARP_;

if(cljs.core.truth_(or__3548__auto____13344))
{return or__3548__auto____13344;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13323_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13350){
var maps = cljs.core.seq( arglist__13350 );;
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
{var merge_entry__13361 = (function (m,e){
var k__13359 = cljs.core.first.call(null,e);
var v__13360 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13359)))
{return cljs.core.assoc.call(null,m,k__13359,f.call(null,cljs.core.get.call(null,m,k__13359),v__13360));
} else
{return cljs.core.assoc.call(null,m,k__13359,v__13360);
}
});
var merge2__13364 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13361,(function (){var or__3548__auto____13362 = m1;

if(cljs.core.truth_(or__3548__auto____13362))
{return or__3548__auto____13362;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13364,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13376){
var f = cljs.core.first(arglist__13376);
var maps = cljs.core.rest(arglist__13376);
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
var keys__13383 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13383))
{var key__13384 = cljs.core.first.call(null,keys__13383);
var entry__13386 = cljs.core.get.call(null,map,key__13384,"﷐'user/not-found");

{
var G__13388 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13386,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13382,key__13384,entry__13386):ret__13382);
var G__13389 = cljs.core.next.call(null,keys__13383);
ret__13382 = G__13388;
keys__13383 = G__13389;
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
var this__13401 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13441 = null;
var G__13441__13442 = (function (coll,v){
var this__13402 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13441__13443 = (function (coll,v,not_found){
var this__13404 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13404.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13441 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13441__13442.call(this,coll,v);
case  3 :
return G__13441__13443.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13441;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13450 = null;
var G__13450__13452 = (function (coll,k){
var this__13405 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13450__13453 = (function (coll,k,not_found){
var this__13406 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13450 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13450__13452.call(this,coll,k);
case  3 :
return G__13450__13453.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13450;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13407 = this;
return (new cljs.core.Set(this__13407.meta,cljs.core.assoc.call(null,this__13407.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13412 = this;
return cljs.core.keys.call(null,this__13412.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13415 = this;
return (new cljs.core.Set(this__13415.meta,cljs.core.dissoc.call(null,this__13415.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13419 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13421 = this;
var and__3546__auto____13425 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13425))
{var and__3546__auto____13427 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13427))
{return cljs.core.every_QMARK_.call(null,(function (p1__13379_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13379_SHARP_);
}),other);
} else
{return and__3546__auto____13427;
}
} else
{return and__3546__auto____13425;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13431 = this;
return (new cljs.core.Set(meta,this__13431.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13434 = this;
return this__13434.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13436 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13436.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13478 = cljs.core.seq.call(null,coll);
var out__13479 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13478))))
{{
var G__13484 = cljs.core.rest.call(null,in$__13478);
var G__13485 = cljs.core.conj.call(null,out__13479,cljs.core.first.call(null,in$__13478));
in$__13478 = G__13484;
out__13479 = G__13485;
continue;
}
} else
{return out__13479;
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
{var n__13490 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13495 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13495))
{var e__13496 = temp__3695__auto____13495;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13496));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13490,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13476_SHARP_){
var temp__3695__auto____13502 = cljs.core.find.call(null,smap,p1__13476_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13502))
{var e__13503 = temp__3695__auto____13502;

return cljs.core.second.call(null,e__13503);
} else
{return p1__13476_SHARP_;
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
return (function (p__13505,seen){
while(true){
var vec__13507__13508 = p__13505;
var f__13509 = cljs.core.nth.call(null,vec__13507__13508,0,null);
var xs__13510 = vec__13507__13508;

var temp__3698__auto____13511 = cljs.core.seq.call(null,xs__13510);

if(cljs.core.truth_(temp__3698__auto____13511))
{var s__13512 = temp__3698__auto____13511;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13509)))
{{
var G__13516 = cljs.core.rest.call(null,s__13512);
var G__13517 = seen;
p__13505 = G__13516;
seen = G__13517;
continue;
}
} else
{return cljs.core.cons.call(null,f__13509,step.call(null,cljs.core.rest.call(null,s__13512),cljs.core.conj.call(null,seen,f__13509)));
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
var ret__13522 = cljs.core.Vector.fromArray([]);
var s__13523 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13523)))
{{
var G__13529 = cljs.core.conj.call(null,ret__13522,cljs.core.first.call(null,s__13523));
var G__13530 = cljs.core.next.call(null,s__13523);
ret__13522 = G__13529;
s__13523 = G__13530;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13522);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13533 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13533))
{return or__3548__auto____13533;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13534 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13534 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13534 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13542 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13542))
{return or__3548__auto____13542;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13543 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13543 > -1)))
{return cljs.core.subs.call(null,x,2,i__13543);
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
var map__13572 = cljs.core.ObjMap.fromObject([],{});
var ks__13573 = cljs.core.seq.call(null,keys);
var vs__13574 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13575 = ks__13573;

if(cljs.core.truth_(and__3546__auto____13575))
{return vs__13574;
} else
{return and__3546__auto____13575;
}
})()))
{{
var G__13582 = cljs.core.assoc.call(null,map__13572,cljs.core.first.call(null,ks__13573),cljs.core.first.call(null,vs__13574));
var G__13583 = cljs.core.next.call(null,ks__13573);
var G__13584 = cljs.core.next.call(null,vs__13574);
map__13572 = G__13582;
ks__13573 = G__13583;
vs__13574 = G__13584;
continue;
}
} else
{return map__13572;
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
var max_key__13593 = (function (k,x){
return x;
});
var max_key__13595 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13598 = (function() { 
var G__13601__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13546_SHARP_,p2__13548_SHARP_){
return max_key.call(null,k,p1__13546_SHARP_,p2__13548_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13601 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13601__delegate.call(this, k, x, y, more);
};
G__13601.cljs$lang$maxFixedArity = 3;
G__13601.cljs$lang$applyTo = (function (arglist__13605){
var k = cljs.core.first(arglist__13605);
var x = cljs.core.first(cljs.core.next(arglist__13605));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13605)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13605)));
return G__13601__delegate.call(this, k, x, y, more);
});
return G__13601;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13593.call(this,k,x);
case  3 :
return max_key__13595.call(this,k,x,y);
default:
return max_key__13598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13598.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13613 = (function (k,x){
return x;
});
var min_key__13614 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13616 = (function() { 
var G__13619__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13587_SHARP_,p2__13590_SHARP_){
return min_key.call(null,k,p1__13587_SHARP_,p2__13590_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13619 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13619__delegate.call(this, k, x, y, more);
};
G__13619.cljs$lang$maxFixedArity = 3;
G__13619.cljs$lang$applyTo = (function (arglist__13621){
var k = cljs.core.first(arglist__13621);
var x = cljs.core.first(cljs.core.next(arglist__13621));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13621)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13621)));
return G__13619__delegate.call(this, k, x, y, more);
});
return G__13619;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13613.call(this,k,x);
case  3 :
return min_key__13614.call(this,k,x,y);
default:
return min_key__13616.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13616.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13630 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13631 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13628 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13628))
{var s__13629 = temp__3698__auto____13628;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13629),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13629)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13630.call(this,n,step);
case  3 :
return partition_all__13631.call(this,n,step,coll);
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
var temp__3698__auto____13639 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13639))
{var s__13640 = temp__3698__auto____13639;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13640))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13640),take_while.call(null,pred,cljs.core.rest.call(null,s__13640)));
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
var this__13648 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13649 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13686 = null;
var G__13686__13688 = (function (rng,f){
var this__13650 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13686__13689 = (function (rng,f,s){
var this__13651 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13686 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13686__13688.call(this,rng,f);
case  3 :
return G__13686__13689.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13686;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13652 = this;
var comp__13653 = (cljs.core.truth_((this__13652.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13653.call(null,this__13652.start,this__13652.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13654 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13654.end - this__13654.start) / this__13654.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13668 = this;
return this__13668.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13669 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13669.meta,(this__13669.start + this__13669.step),this__13669.end,this__13669.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13672 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13673 = this;
return (new cljs.core.Range(meta,this__13673.start,this__13673.end,this__13673.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13675 = this;
return this__13675.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13710 = null;
var G__13710__13712 = (function (rng,n){
var this__13678 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13678.start + (n * this__13678.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13679 = (this__13678.start > this__13678.end);

if(cljs.core.truth_(and__3546__auto____13679))
{return cljs.core._EQ_.call(null,this__13678.step,0);
} else
{return and__3546__auto____13679;
}
})()))
{return this__13678.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13710__13714 = (function (rng,n,not_found){
var this__13680 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13680.start + (n * this__13680.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13681 = (this__13680.start > this__13680.end);

if(cljs.core.truth_(and__3546__auto____13681))
{return cljs.core._EQ_.call(null,this__13680.step,0);
} else
{return and__3546__auto____13681;
}
})()))
{return this__13680.start;
} else
{return not_found;
}
}
});
G__13710 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13710__13712.call(this,rng,n);
case  3 :
return G__13710__13714.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13710;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13682 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13682.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13799 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13801 = (function (end){
return range.call(null,0,end,1);
});
var range__13802 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13803 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13799.call(this);
case  1 :
return range__13801.call(this,start);
case  2 :
return range__13802.call(this,start,end);
case  3 :
return range__13803.call(this,start,end,step);
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
var temp__3698__auto____13812 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13812))
{var s__13814 = temp__3698__auto____13812;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13814),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13814)));
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
var temp__3698__auto____13886 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13886))
{var s__13887 = temp__3698__auto____13886;

var fst__13888 = cljs.core.first.call(null,s__13887);
var fv__13889 = f.call(null,fst__13888);
var run__13890 = cljs.core.cons.call(null,fst__13888,cljs.core.take_while.call(null,(function (p1__13871_SHARP_){
return cljs.core._EQ_.call(null,fv__13889,f.call(null,p1__13871_SHARP_));
}),cljs.core.next.call(null,s__13887)));

return cljs.core.cons.call(null,run__13890,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13890),s__13887))));
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
var reductions__13971 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13956 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13956))
{var s__13957 = temp__3695__auto____13956;

return reductions.call(null,f,cljs.core.first.call(null,s__13957),cljs.core.rest.call(null,s__13957));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13972 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13960 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13960))
{var s__13961 = temp__3698__auto____13960;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13961)),cljs.core.rest.call(null,s__13961));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13971.call(this,f,init);
case  3 :
return reductions__13972.call(this,f,init,coll);
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
var juxt__14022 = (function (f){
return (function() {
var G__14028 = null;
var G__14028__14030 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14028__14031 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14028__14032 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14028__14033 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14028__14034 = (function() { 
var G__14043__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14043 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14043__delegate.call(this, x, y, z, args);
};
G__14043.cljs$lang$maxFixedArity = 3;
G__14043.cljs$lang$applyTo = (function (arglist__14049){
var x = cljs.core.first(arglist__14049);
var y = cljs.core.first(cljs.core.next(arglist__14049));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14049)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14049)));
return G__14043__delegate.call(this, x, y, z, args);
});
return G__14043;
})()
;
G__14028 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14028__14030.call(this);
case  1 :
return G__14028__14031.call(this,x);
case  2 :
return G__14028__14032.call(this,x,y);
case  3 :
return G__14028__14033.call(this,x,y,z);
default:
return G__14028__14034.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14028.cljs$lang$maxFixedArity = 3;
G__14028.cljs$lang$applyTo = G__14028__14034.cljs$lang$applyTo;
return G__14028;
})()
});
var juxt__14023 = (function (f,g){
return (function() {
var G__14054 = null;
var G__14054__14055 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14054__14056 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14054__14057 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14054__14064 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14054__14065 = (function() { 
var G__14082__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14082 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14082__delegate.call(this, x, y, z, args);
};
G__14082.cljs$lang$maxFixedArity = 3;
G__14082.cljs$lang$applyTo = (function (arglist__14083){
var x = cljs.core.first(arglist__14083);
var y = cljs.core.first(cljs.core.next(arglist__14083));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14083)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14083)));
return G__14082__delegate.call(this, x, y, z, args);
});
return G__14082;
})()
;
G__14054 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14054__14055.call(this);
case  1 :
return G__14054__14056.call(this,x);
case  2 :
return G__14054__14057.call(this,x,y);
case  3 :
return G__14054__14064.call(this,x,y,z);
default:
return G__14054__14065.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14054.cljs$lang$maxFixedArity = 3;
G__14054.cljs$lang$applyTo = G__14054__14065.cljs$lang$applyTo;
return G__14054;
})()
});
var juxt__14024 = (function (f,g,h){
return (function() {
var G__14086 = null;
var G__14086__14087 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14086__14088 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14086__14089 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14086__14090 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14086__14091 = (function() { 
var G__14101__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
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
G__14086 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14086__14087.call(this);
case  1 :
return G__14086__14088.call(this,x);
case  2 :
return G__14086__14089.call(this,x,y);
case  3 :
return G__14086__14090.call(this,x,y,z);
default:
return G__14086__14091.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14086.cljs$lang$maxFixedArity = 3;
G__14086.cljs$lang$applyTo = G__14086__14091.cljs$lang$applyTo;
return G__14086;
})()
});
var juxt__14025 = (function() { 
var G__14103__delegate = function (f,g,h,fs){
var fs__13999 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14105 = null;
var G__14105__14106 = (function (){
return cljs.core.reduce.call(null,(function (p1__13925_SHARP_,p2__13926_SHARP_){
return cljs.core.conj.call(null,p1__13925_SHARP_,p2__13926_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13999);
});
var G__14105__14107 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13927_SHARP_,p2__13928_SHARP_){
return cljs.core.conj.call(null,p1__13927_SHARP_,p2__13928_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13999);
});
var G__14105__14108 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13929_SHARP_,p2__13949_SHARP_){
return cljs.core.conj.call(null,p1__13929_SHARP_,p2__13949_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13999);
});
var G__14105__14109 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13950_SHARP_,p2__13951_SHARP_){
return cljs.core.conj.call(null,p1__13950_SHARP_,p2__13951_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13999);
});
var G__14105__14111 = (function() { 
var G__14115__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13952_SHARP_,p2__13953_SHARP_){
return cljs.core.conj.call(null,p1__13952_SHARP_,cljs.core.apply.call(null,p2__13953_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13999);
};
var G__14115 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14115__delegate.call(this, x, y, z, args);
};
G__14115.cljs$lang$maxFixedArity = 3;
G__14115.cljs$lang$applyTo = (function (arglist__14116){
var x = cljs.core.first(arglist__14116);
var y = cljs.core.first(cljs.core.next(arglist__14116));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14116)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14116)));
return G__14115__delegate.call(this, x, y, z, args);
});
return G__14115;
})()
;
G__14105 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14105__14106.call(this);
case  1 :
return G__14105__14107.call(this,x);
case  2 :
return G__14105__14108.call(this,x,y);
case  3 :
return G__14105__14109.call(this,x,y,z);
default:
return G__14105__14111.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14105.cljs$lang$maxFixedArity = 3;
G__14105.cljs$lang$applyTo = G__14105__14111.cljs$lang$applyTo;
return G__14105;
})()
};
var G__14103 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14103__delegate.call(this, f, g, h, fs);
};
G__14103.cljs$lang$maxFixedArity = 3;
G__14103.cljs$lang$applyTo = (function (arglist__14117){
var f = cljs.core.first(arglist__14117);
var g = cljs.core.first(cljs.core.next(arglist__14117));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14117)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14117)));
return G__14103__delegate.call(this, f, g, h, fs);
});
return G__14103;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14022.call(this,f);
case  2 :
return juxt__14023.call(this,f,g);
case  3 :
return juxt__14024.call(this,f,g,h);
default:
return juxt__14025.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14025.cljs$lang$applyTo;
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
var dorun__14144 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14148 = cljs.core.next.call(null,coll);
coll = G__14148;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14146 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14136 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14136))
{return (n > 0);
} else
{return and__3546__auto____14136;
}
})()))
{{
var G__14178 = (n - 1);
var G__14179 = cljs.core.next.call(null,coll);
n = G__14178;
coll = G__14179;
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
return dorun__14144.call(this,n);
case  2 :
return dorun__14146.call(this,n,coll);
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
var doall__14188 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14189 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14188.call(this,n);
case  2 :
return doall__14189.call(this,n,coll);
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
var matches__14204 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14204),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14204),1)))
{return cljs.core.first.call(null,matches__14204);
} else
{return cljs.core.vec.call(null,matches__14204);
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
var matches__14224 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14224)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14224),1)))
{return cljs.core.first.call(null,matches__14224);
} else
{return cljs.core.vec.call(null,matches__14224);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14233 = cljs.core.re_find.call(null,re,s);
var match_idx__14235 = s.search(re);
var match_str__14239 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14233))?cljs.core.first.call(null,match_data__14233):match_data__14233);
var post_match__14241 = cljs.core.subs.call(null,s,(match_idx__14235 + cljs.core.count.call(null,match_str__14239)));

if(cljs.core.truth_(match_data__14233))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14233,re_seq.call(null,re,post_match__14241));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14271_SHARP_){
return print_one.call(null,p1__14271_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14325 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14325))
{var and__3546__auto____14334 = (function (){var x__445__auto____14327 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14328 = x__445__auto____14327;

if(cljs.core.truth_(and__3546__auto____14328))
{var and__3546__auto____14330 = x__445__auto____14327.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14330))
{return cljs.core.not.call(null,x__445__auto____14327.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14330;
}
} else
{return and__3546__auto____14328;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14327);
}
})();

if(cljs.core.truth_(and__3546__auto____14334))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14334;
}
} else
{return and__3546__auto____14325;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14337 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14338 = x__445__auto____14337;

if(cljs.core.truth_(and__3546__auto____14338))
{var and__3546__auto____14339 = x__445__auto____14337.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14339))
{return cljs.core.not.call(null,x__445__auto____14337.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14339;
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
var first_obj__14390 = cljs.core.first.call(null,objs);
var sb__14392 = (new goog.string.StringBuffer());

var G__14395__14398 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14395__14398))
{var obj__14402 = cljs.core.first.call(null,G__14395__14398);
var G__14395__14405 = G__14395__14398;

while(true){
if(cljs.core.truth_((obj__14402 === first_obj__14390)))
{} else
{sb__14392.append(" ");
}
var G__14408__14412 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14402,opts));

if(cljs.core.truth_(G__14408__14412))
{var string__14414 = cljs.core.first.call(null,G__14408__14412);
var G__14408__14415 = G__14408__14412;

while(true){
sb__14392.append(string__14414);
var temp__3698__auto____14421 = cljs.core.next.call(null,G__14408__14415);

if(cljs.core.truth_(temp__3698__auto____14421))
{var G__14408__14422 = temp__3698__auto____14421;

{
var G__14453 = cljs.core.first.call(null,G__14408__14422);
var G__14454 = G__14408__14422;
string__14414 = G__14453;
G__14408__14415 = G__14454;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14424 = cljs.core.next.call(null,G__14395__14405);

if(cljs.core.truth_(temp__3698__auto____14424))
{var G__14395__14425 = temp__3698__auto____14424;

{
var G__14455 = cljs.core.first.call(null,G__14395__14425);
var G__14456 = G__14395__14425;
obj__14402 = G__14455;
G__14395__14405 = G__14456;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14392);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14458 = cljs.core.first.call(null,objs);

var G__14459__14460 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14459__14460))
{var obj__14461 = cljs.core.first.call(null,G__14459__14460);
var G__14459__14462 = G__14459__14460;

while(true){
if(cljs.core.truth_((obj__14461 === first_obj__14458)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14463__14464 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14461,opts));

if(cljs.core.truth_(G__14463__14464))
{var string__14466 = cljs.core.first.call(null,G__14463__14464);
var G__14463__14467 = G__14463__14464;

while(true){
cljs.core.string_print.call(null,string__14466);
var temp__3698__auto____14468 = cljs.core.next.call(null,G__14463__14467);

if(cljs.core.truth_(temp__3698__auto____14468))
{var G__14463__14469 = temp__3698__auto____14468;

{
var G__14472 = cljs.core.first.call(null,G__14463__14469);
var G__14473 = G__14463__14469;
string__14466 = G__14472;
G__14463__14467 = G__14473;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14470 = cljs.core.next.call(null,G__14459__14462);

if(cljs.core.truth_(temp__3698__auto____14470))
{var G__14459__14471 = temp__3698__auto____14470;

{
var G__14474 = cljs.core.first.call(null,G__14459__14471);
var G__14475 = G__14459__14471;
obj__14461 = G__14474;
G__14459__14462 = G__14475;
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
pr_str.cljs$lang$applyTo = (function (arglist__14492){
var objs = cljs.core.seq( arglist__14492 );;
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
pr.cljs$lang$applyTo = (function (arglist__14499){
var objs = cljs.core.seq( arglist__14499 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14502){
var objs = cljs.core.seq( arglist__14502 );;
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
println.cljs$lang$applyTo = (function (arglist__14514){
var objs = cljs.core.seq( arglist__14514 );;
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
prn.cljs$lang$applyTo = (function (arglist__14519){
var objs = cljs.core.seq( arglist__14519 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14526 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14526,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14552 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14552))
{var nspc__14554 = temp__3698__auto____14552;

return cljs.core.str.call(null,nspc__14554,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14556 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14556))
{var nspc__14557 = temp__3698__auto____14556;

return cljs.core.str.call(null,nspc__14557,"/");
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
var pr_pair__14608 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14608,"{",", ","}",opts,coll);
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
var this__14645 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14646 = this;
var G__14647__14648 = cljs.core.seq.call(null,this__14646.watches);

if(cljs.core.truth_(G__14647__14648))
{var G__14651__14654 = cljs.core.first.call(null,G__14647__14648);
var vec__14652__14655 = G__14651__14654;
var key__14657 = cljs.core.nth.call(null,vec__14652__14655,0,null);
var f__14658 = cljs.core.nth.call(null,vec__14652__14655,1,null);
var G__14647__14659 = G__14647__14648;

var G__14651__14661 = G__14651__14654;
var G__14647__14662 = G__14647__14659;

while(true){
var vec__14664__14666 = G__14651__14661;
var key__14670 = cljs.core.nth.call(null,vec__14664__14666,0,null);
var f__14671 = cljs.core.nth.call(null,vec__14664__14666,1,null);
var G__14647__14672 = G__14647__14662;

f__14671.call(null,key__14670,this$,oldval,newval);
var temp__3698__auto____14676 = cljs.core.next.call(null,G__14647__14672);

if(cljs.core.truth_(temp__3698__auto____14676))
{var G__14647__14680 = temp__3698__auto____14676;

{
var G__14709 = cljs.core.first.call(null,G__14647__14680);
var G__14710 = G__14647__14680;
G__14651__14661 = G__14709;
G__14647__14662 = G__14710;
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
var this__14685 = this;
return this$.watches = cljs.core.assoc.call(null,this__14685.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14689 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14689.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14692 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14692.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14695 = this;
return this__14695.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14698 = this;
return this__14698.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14703 = this;
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
var atom__14734 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14735 = (function() { 
var G__14737__delegate = function (x,p__14719){
var map__14720__14722 = p__14719;
var map__14720__14723 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14720__14722))?cljs.core.apply.call(null,cljs.core.hash_map,map__14720__14722):map__14720__14722);
var validator__14725 = cljs.core.get.call(null,map__14720__14723,"﷐'validator");
var meta__14726 = cljs.core.get.call(null,map__14720__14723,"﷐'meta");

return (new cljs.core.Atom(x,meta__14726,validator__14725,null));
};
var G__14737 = function (x,var_args){
var p__14719 = null;
if (goog.isDef(var_args)) {
  p__14719 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14737__delegate.call(this, x, p__14719);
};
G__14737.cljs$lang$maxFixedArity = 1;
G__14737.cljs$lang$applyTo = (function (arglist__14738){
var x = cljs.core.first(arglist__14738);
var p__14719 = cljs.core.rest(arglist__14738);
return G__14737__delegate.call(this, x, p__14719);
});
return G__14737;
})()
;
atom = function(x,var_args){
var p__14719 = var_args;
switch(arguments.length){
case  1 :
return atom__14734.call(this,x);
default:
return atom__14735.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14735.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14740 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14740))
{var validate__14750 = temp__3698__auto____14740;

if(cljs.core.truth_(validate__14750.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14752 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14752,new_value);
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
var swap_BANG___14766 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14768 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14769 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14770 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14771 = (function() { 
var G__14774__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14774 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14774__delegate.call(this, a, f, x, y, z, more);
};
G__14774.cljs$lang$maxFixedArity = 5;
G__14774.cljs$lang$applyTo = (function (arglist__14781){
var a = cljs.core.first(arglist__14781);
var f = cljs.core.first(cljs.core.next(arglist__14781));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14781)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14781))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14781)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14781)))));
return G__14774__delegate.call(this, a, f, x, y, z, more);
});
return G__14774;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14766.call(this,a,f);
case  3 :
return swap_BANG___14768.call(this,a,f,x);
case  4 :
return swap_BANG___14769.call(this,a,f,x,y);
case  5 :
return swap_BANG___14770.call(this,a,f,x,y,z);
default:
return swap_BANG___14771.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14771.cljs$lang$applyTo;
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
var gensym__14811 = (function (){
return gensym.call(null,"G__");
});
var gensym__14812 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14811.call(this);
case  1 :
return gensym__14812.call(this,prefix_string);
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
var this__14815 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14815.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14818 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14818.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14818.state,this__14818.f);
}
return cljs.core.deref.call(null,this__14818.state);
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
delay.cljs$lang$applyTo = (function (arglist__14828){
var body = cljs.core.seq( arglist__14828 );;
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
var map__14834__14835 = options;
var map__14834__14838 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14834__14835))?cljs.core.apply.call(null,cljs.core.hash_map,map__14834__14835):map__14834__14835);
var keywordize_keys__14839 = cljs.core.get.call(null,map__14834__14838,"﷐'keywordize-keys");
var keyfn__14841 = (cljs.core.truth_(keywordize_keys__14839)?cljs.core.keyword:cljs.core.str);
var f__14902 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14901 = (function iter__14895(s__14896){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14896__14898 = s__14896;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14896__14898)))
{var k__14899 = cljs.core.first.call(null,s__14896__14898);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14841.call(null,k__14899),thisfn.call(null,(x[k__14899]))]),iter__14895.call(null,cljs.core.rest.call(null,s__14896__14898)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14901.call(null,cljs.core.js_keys.call(null,x));
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

return f__14902.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14925){
var x = cljs.core.first(arglist__14925);
var options = cljs.core.rest(arglist__14925);
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
var mem__14929 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14939__delegate = function (args){
var temp__3695__auto____14932 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14929),args);

if(cljs.core.truth_(temp__3695__auto____14932))
{var v__14933 = temp__3695__auto____14932;

return v__14933;
} else
{var ret__14935 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14929,cljs.core.assoc,args,ret__14935);
return ret__14935;
}
};
var G__14939 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14939__delegate.call(this, args);
};
G__14939.cljs$lang$maxFixedArity = 0;
G__14939.cljs$lang$applyTo = (function (arglist__14941){
var args = cljs.core.seq( arglist__14941 );;
return G__14939__delegate.call(this, args);
});
return G__14939;
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
var trampoline__14947 = (function (f){
while(true){
var ret__14945 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14945)))
{{
var G__14954 = ret__14945;
f = G__14954;
continue;
}
} else
{return ret__14945;
}
break;
}
});
var trampoline__14948 = (function() { 
var G__14956__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14956 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14956__delegate.call(this, f, args);
};
G__14956.cljs$lang$maxFixedArity = 1;
G__14956.cljs$lang$applyTo = (function (arglist__14960){
var f = cljs.core.first(arglist__14960);
var args = cljs.core.rest(arglist__14960);
return G__14956__delegate.call(this, f, args);
});
return G__14956;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14947.call(this,f);
default:
return trampoline__14948.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14948.cljs$lang$applyTo;
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
var k__14988 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14988,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14988,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15070 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15071 = (function (h,child,parent){
var or__3548__auto____14994 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14994))
{return or__3548__auto____14994;
} else
{var or__3548__auto____14996 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14996))
{return or__3548__auto____14996;
} else
{var and__3546__auto____14997 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14997))
{var and__3546__auto____15054 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15054))
{var and__3546__auto____15058 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15058))
{var ret__15059 = true;
var i__15060 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15061 = cljs.core.not.call(null,ret__15059);

if(cljs.core.truth_(or__3548__auto____15061))
{return or__3548__auto____15061;
} else
{return cljs.core._EQ_.call(null,i__15060,cljs.core.count.call(null,parent));
}
})()))
{return ret__15059;
} else
{{
var G__15079 = isa_QMARK_.call(null,h,child.call(null,i__15060),parent.call(null,i__15060));
var G__15080 = (i__15060 + 1);
ret__15059 = G__15079;
i__15060 = G__15080;
continue;
}
}
break;
}
} else
{return and__3546__auto____15058;
}
} else
{return and__3546__auto____15054;
}
} else
{return and__3546__auto____14997;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15070.call(this,h,child);
case  3 :
return isa_QMARK___15071.call(this,h,child,parent);
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
var parents__15151 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15152 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15151.call(this,h);
case  2 :
return parents__15152.call(this,h,tag);
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
var ancestors__15168 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15169 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15168.call(this,h);
case  2 :
return ancestors__15169.call(this,h,tag);
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
var descendants__15266 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15267 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15266.call(this,h);
case  2 :
return descendants__15267.call(this,h,tag);
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
var derive__15277 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15278 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15272 = "﷐'parents".call(null,h);
var td__15273 = "﷐'descendants".call(null,h);
var ta__15274 = "﷐'ancestors".call(null,h);
var tf__15275 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15276 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15272.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15274.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15274.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15272,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15275.call(null,"﷐'ancestors".call(null,h),tag,td__15273,parent,ta__15274),"﷐'descendants":tf__15275.call(null,"﷐'descendants".call(null,h),parent,ta__15274,tag,td__15273)});
})());

if(cljs.core.truth_(or__3548__auto____15276))
{return or__3548__auto____15276;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15277.call(this,h,tag);
case  3 :
return derive__15278.call(this,h,tag,parent);
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
var underive__15299 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15300 = (function (h,tag,parent){
var parentMap__15288 = "﷐'parents".call(null,h);
var childsParents__15290 = (cljs.core.truth_(parentMap__15288.call(null,tag))?cljs.core.disj.call(null,parentMap__15288.call(null,tag),parent):cljs.core.set([]));
var newParents__15291 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15290))?cljs.core.assoc.call(null,parentMap__15288,tag,childsParents__15290):cljs.core.dissoc.call(null,parentMap__15288,tag));
var deriv_seq__15293 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15269_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15269_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15269_SHARP_),cljs.core.second.call(null,p1__15269_SHARP_)));
}),cljs.core.seq.call(null,newParents__15291)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15288.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15270_SHARP_,p2__15271_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15270_SHARP_,p2__15271_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15293));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15299.call(this,h,tag);
case  3 :
return underive__15300.call(this,h,tag,parent);
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
var xprefs__15346 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15349 = (cljs.core.truth_((function (){var and__3546__auto____15348 = xprefs__15346;

if(cljs.core.truth_(and__3546__auto____15348))
{return xprefs__15346.call(null,y);
} else
{return and__3546__auto____15348;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15349))
{return or__3548__auto____15349;
} else
{var or__3548__auto____15353 = (function (){var ps__15351 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15351) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15351),prefer_table)))
{} else
{}
{
var G__15362 = cljs.core.rest.call(null,ps__15351);
ps__15351 = G__15362;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15353))
{return or__3548__auto____15353;
} else
{var or__3548__auto____15356 = (function (){var ps__15354 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15354) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15354),y,prefer_table)))
{} else
{}
{
var G__15363 = cljs.core.rest.call(null,ps__15354);
ps__15354 = G__15363;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15356))
{return or__3548__auto____15356;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15367 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15367))
{return or__3548__auto____15367;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15383 = cljs.core.reduce.call(null,(function (be,p__15373){
var vec__15375__15376 = p__15373;
var k__15378 = cljs.core.nth.call(null,vec__15375__15376,0,null);
var ___15379 = cljs.core.nth.call(null,vec__15375__15376,1,null);
var e__15380 = vec__15375__15376;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15378)))
{var be2__15382 = (cljs.core.truth_((function (){var or__3548__auto____15381 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15381))
{return or__3548__auto____15381;
} else
{return cljs.core.dominates.call(null,k__15378,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15380:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15382),k__15378,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15378," and ",cljs.core.first.call(null,be2__15382),", and neither is preferred")));
}
return be2__15382;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15383))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15383));
return cljs.core.second.call(null,best_entry__15383);
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
if(cljs.core.truth_((function (){var and__3546__auto____15384 = mf;

if(cljs.core.truth_(and__3546__auto____15384))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15384;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15385 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15385))
{return or__3548__auto____15385;
} else
{var or__3548__auto____15386 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15386))
{return or__3548__auto____15386;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15387 = mf;

if(cljs.core.truth_(and__3546__auto____15387))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15387;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15388 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15388))
{return or__3548__auto____15388;
} else
{var or__3548__auto____15389 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15389))
{return or__3548__auto____15389;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15390 = mf;

if(cljs.core.truth_(and__3546__auto____15390))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15390;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15391 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15391))
{return or__3548__auto____15391;
} else
{var or__3548__auto____15392 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15392))
{return or__3548__auto____15392;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15393 = mf;

if(cljs.core.truth_(and__3546__auto____15393))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15393;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15394 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15394))
{return or__3548__auto____15394;
} else
{var or__3548__auto____15395 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15395))
{return or__3548__auto____15395;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15396 = mf;

if(cljs.core.truth_(and__3546__auto____15396))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15396;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15399 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15399))
{return or__3548__auto____15399;
} else
{var or__3548__auto____15400 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15400))
{return or__3548__auto____15400;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15405 = mf;

if(cljs.core.truth_(and__3546__auto____15405))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15405;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15408 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15408))
{return or__3548__auto____15408;
} else
{var or__3548__auto____15409 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15409))
{return or__3548__auto____15409;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15413 = mf;

if(cljs.core.truth_(and__3546__auto____15413))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15413;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15415 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15415))
{return or__3548__auto____15415;
} else
{var or__3548__auto____15417 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15417))
{return or__3548__auto____15417;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15422 = mf;

if(cljs.core.truth_(and__3546__auto____15422))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15422;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15424 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15424))
{return or__3548__auto____15424;
} else
{var or__3548__auto____15425 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15425))
{return or__3548__auto____15425;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15448 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15449 = cljs.core._get_method.call(null,mf,dispatch_val__15448);

if(cljs.core.truth_(target_fn__15449))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15448)));
}
return cljs.core.apply.call(null,target_fn__15449,args);
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
var this__15454 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15455 = this;
cljs.core.swap_BANG_.call(null,this__15455.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15455.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15455.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15455.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15456 = this;
cljs.core.swap_BANG_.call(null,this__15456.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15456.method_cache,this__15456.method_table,this__15456.cached_hierarchy,this__15456.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15457 = this;
cljs.core.swap_BANG_.call(null,this__15457.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15457.method_cache,this__15457.method_table,this__15457.cached_hierarchy,this__15457.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15458 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15458.cached_hierarchy),cljs.core.deref.call(null,this__15458.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15458.method_cache,this__15458.method_table,this__15458.cached_hierarchy,this__15458.hierarchy);
}
var temp__3695__auto____15459 = cljs.core.deref.call(null,this__15458.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15459))
{var target_fn__15460 = temp__3695__auto____15459;

return target_fn__15460;
} else
{var temp__3695__auto____15461 = cljs.core.find_and_cache_best_method.call(null,this__15458.name,dispatch_val,this__15458.hierarchy,this__15458.method_table,this__15458.prefer_table,this__15458.method_cache,this__15458.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15461))
{var target_fn__15462 = temp__3695__auto____15461;

return target_fn__15462;
} else
{return cljs.core.deref.call(null,this__15458.method_table).call(null,this__15458.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15463 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15463.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15463.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15463.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15463.method_cache,this__15463.method_table,this__15463.cached_hierarchy,this__15463.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15468 = this;
return cljs.core.deref.call(null,this__15468.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15470 = this;
return cljs.core.deref.call(null,this__15470.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15472 = this;
return cljs.core.do_dispatch.call(null,mf,this__15472.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15476__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15476 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15476__delegate.call(this, _, args);
};
G__15476.cljs$lang$maxFixedArity = 1;
G__15476.cljs$lang$applyTo = (function (arglist__15477){
var _ = cljs.core.first(arglist__15477);
var args = cljs.core.rest(arglist__15477);
return G__15476__delegate.call(this, _, args);
});
return G__15476;
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
