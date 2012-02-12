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
var or__3548__auto____7253 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7253))
{return or__3548__auto____7253;
} else
{var or__3548__auto____7254 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7254))
{return or__3548__auto____7254;
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
var _invoke__7571 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7313 = this$;

if(cljs.core.truth_(and__3546__auto____7313))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7313;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
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
})().call(null,this$);
}
});
var _invoke__7572 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7317 = this$;

if(cljs.core.truth_(and__3546__auto____7317))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7317;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7318 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7318))
{return or__3548__auto____7318;
} else
{var or__3548__auto____7321 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7321))
{return or__3548__auto____7321;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7573 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7324 = this$;

if(cljs.core.truth_(and__3546__auto____7324))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7324;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7327 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7327))
{return or__3548__auto____7327;
} else
{var or__3548__auto____7329 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7329))
{return or__3548__auto____7329;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7574 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7332 = this$;

if(cljs.core.truth_(and__3546__auto____7332))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7332;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
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
})().call(null,this$,a,b,c);
}
});
var _invoke__7575 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7341 = this$;

if(cljs.core.truth_(and__3546__auto____7341))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7341;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7344 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7344))
{return or__3548__auto____7344;
} else
{var or__3548__auto____7345 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7345))
{return or__3548__auto____7345;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7576 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7347 = this$;

if(cljs.core.truth_(and__3546__auto____7347))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7347;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7350 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7350))
{return or__3548__auto____7350;
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
var _invoke__7577 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7353 = this$;

if(cljs.core.truth_(and__3546__auto____7353))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7353;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7356 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7356))
{return or__3548__auto____7356;
} else
{var or__3548__auto____7358 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7358))
{return or__3548__auto____7358;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7578 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7383 = this$;

if(cljs.core.truth_(and__3546__auto____7383))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7383;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7386 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7386))
{return or__3548__auto____7386;
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
var _invoke__7579 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7389 = this$;

if(cljs.core.truth_(and__3546__auto____7389))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7389;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7392 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7392))
{return or__3548__auto____7392;
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
var _invoke__7580 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7395 = this$;

if(cljs.core.truth_(and__3546__auto____7395))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7395;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7398 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7398))
{return or__3548__auto____7398;
} else
{var or__3548__auto____7399 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7399))
{return or__3548__auto____7399;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7581 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7401 = this$;

if(cljs.core.truth_(and__3546__auto____7401))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7401;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7404 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7404))
{return or__3548__auto____7404;
} else
{var or__3548__auto____7405 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7405))
{return or__3548__auto____7405;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7582 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7407 = this$;

if(cljs.core.truth_(and__3546__auto____7407))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7407;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7410 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7410))
{return or__3548__auto____7410;
} else
{var or__3548__auto____7411 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7411))
{return or__3548__auto____7411;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7583 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7413 = this$;

if(cljs.core.truth_(and__3546__auto____7413))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7413;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7584 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7419 = this$;

if(cljs.core.truth_(and__3546__auto____7419))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7419;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7421 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7421))
{return or__3548__auto____7421;
} else
{var or__3548__auto____7422 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7422))
{return or__3548__auto____7422;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7585 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7424 = this$;

if(cljs.core.truth_(and__3546__auto____7424))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7424;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7426 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7426))
{return or__3548__auto____7426;
} else
{var or__3548__auto____7428 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7428))
{return or__3548__auto____7428;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7586 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7494 = this$;

if(cljs.core.truth_(and__3546__auto____7494))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7494;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7587 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7503 = this$;

if(cljs.core.truth_(and__3546__auto____7503))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7503;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7506 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7506))
{return or__3548__auto____7506;
} else
{var or__3548__auto____7508 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7508))
{return or__3548__auto____7508;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7588 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7512 = this$;

if(cljs.core.truth_(and__3546__auto____7512))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7512;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7518 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7518))
{return or__3548__auto____7518;
} else
{var or__3548__auto____7521 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7521))
{return or__3548__auto____7521;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7590 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7524 = this$;

if(cljs.core.truth_(and__3546__auto____7524))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7524;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7528 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7528))
{return or__3548__auto____7528;
} else
{var or__3548__auto____7530 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7530))
{return or__3548__auto____7530;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7591 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7534 = this$;

if(cljs.core.truth_(and__3546__auto____7534))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7534;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7536 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7536))
{return or__3548__auto____7536;
} else
{var or__3548__auto____7538 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7538))
{return or__3548__auto____7538;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7592 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7542 = this$;

if(cljs.core.truth_(and__3546__auto____7542))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7542;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7544 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7544))
{return or__3548__auto____7544;
} else
{var or__3548__auto____7545 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7545))
{return or__3548__auto____7545;
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
return _invoke__7571.call(this,this$);
case  2 :
return _invoke__7572.call(this,this$,a);
case  3 :
return _invoke__7573.call(this,this$,a,b);
case  4 :
return _invoke__7574.call(this,this$,a,b,c);
case  5 :
return _invoke__7575.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7576.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7577.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7578.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7579.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7580.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7581.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7582.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7583.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7584.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7585.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7586.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7587.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7588.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7590.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7591.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7592.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7686 = coll;

if(cljs.core.truth_(and__3546__auto____7686))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7686;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7692 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7692))
{return or__3548__auto____7692;
} else
{var or__3548__auto____7694 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7694))
{return or__3548__auto____7694;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7751 = coll;

if(cljs.core.truth_(and__3546__auto____7751))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7751;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7754 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7754))
{return or__3548__auto____7754;
} else
{var or__3548__auto____7759 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7759))
{return or__3548__auto____7759;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7764 = coll;

if(cljs.core.truth_(and__3546__auto____7764))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7764;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7765 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7765))
{return or__3548__auto____7765;
} else
{var or__3548__auto____7767 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7767))
{return or__3548__auto____7767;
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
var _nth__7789 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7773 = coll;

if(cljs.core.truth_(and__3546__auto____7773))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7773;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7776 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7776))
{return or__3548__auto____7776;
} else
{var or__3548__auto____7779 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7779))
{return or__3548__auto____7779;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7791 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7782 = coll;

if(cljs.core.truth_(and__3546__auto____7782))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7782;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7785 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7785))
{return or__3548__auto____7785;
} else
{var or__3548__auto____7787 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7787))
{return or__3548__auto____7787;
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
return _nth__7789.call(this,coll,n);
case  3 :
return _nth__7791.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7807 = coll;

if(cljs.core.truth_(and__3546__auto____7807))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7807;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7810 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7810))
{return or__3548__auto____7810;
} else
{var or__3548__auto____7811 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7811))
{return or__3548__auto____7811;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7816 = coll;

if(cljs.core.truth_(and__3546__auto____7816))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7816;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7821 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7821))
{return or__3548__auto____7821;
} else
{var or__3548__auto____7823 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7823))
{return or__3548__auto____7823;
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
if(cljs.core.truth_((function (){var and__3546__auto____7833 = o;

if(cljs.core.truth_(and__3546__auto____7833))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7833;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7837 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7837))
{return or__3548__auto____7837;
} else
{var or__3548__auto____7840 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7840))
{return or__3548__auto____7840;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7851 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7842 = o;

if(cljs.core.truth_(and__3546__auto____7842))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7842;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7845 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
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
if(cljs.core.truth_((function (){var and__3546__auto____7863 = coll;

if(cljs.core.truth_(and__3546__auto____7863))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7863;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7866 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7866))
{return or__3548__auto____7866;
} else
{var or__3548__auto____7868 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7868))
{return or__3548__auto____7868;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7872 = coll;

if(cljs.core.truth_(and__3546__auto____7872))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7872;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7874 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7874))
{return or__3548__auto____7874;
} else
{var or__3548__auto____7876 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7876))
{return or__3548__auto____7876;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7890 = coll;

if(cljs.core.truth_(and__3546__auto____7890))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7890;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7891 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7891))
{return or__3548__auto____7891;
} else
{var or__3548__auto____7893 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7893))
{return or__3548__auto____7893;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7897 = coll;

if(cljs.core.truth_(and__3546__auto____7897))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7897;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7900 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7900))
{return or__3548__auto____7900;
} else
{var or__3548__auto____7901 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7901))
{return or__3548__auto____7901;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7908 = coll;

if(cljs.core.truth_(and__3546__auto____7908))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7908;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7910 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7910))
{return or__3548__auto____7910;
} else
{var or__3548__auto____7912 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7912))
{return or__3548__auto____7912;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7914 = coll;

if(cljs.core.truth_(and__3546__auto____7914))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7914;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7916 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7916))
{return or__3548__auto____7916;
} else
{var or__3548__auto____7917 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7917))
{return or__3548__auto____7917;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7941 = coll;

if(cljs.core.truth_(and__3546__auto____7941))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7941;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7942 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7942))
{return or__3548__auto____7942;
} else
{var or__3548__auto____7943 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7943))
{return or__3548__auto____7943;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7953 = o;

if(cljs.core.truth_(and__3546__auto____7953))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7953;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7955 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7955))
{return or__3548__auto____7955;
} else
{var or__3548__auto____7956 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7956))
{return or__3548__auto____7956;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7980 = o;

if(cljs.core.truth_(and__3546__auto____7980))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7980;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7982 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7982))
{return or__3548__auto____7982;
} else
{var or__3548__auto____7983 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7983))
{return or__3548__auto____7983;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7989 = o;

if(cljs.core.truth_(and__3546__auto____7989))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7989;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7991 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7991))
{return or__3548__auto____7991;
} else
{var or__3548__auto____7993 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7993))
{return or__3548__auto____7993;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8001 = o;

if(cljs.core.truth_(and__3546__auto____8001))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8001;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8003 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8003))
{return or__3548__auto____8003;
} else
{var or__3548__auto____8006 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8006))
{return or__3548__auto____8006;
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
if(cljs.core.truth_((function (){var and__3546__auto____8013 = coll;

if(cljs.core.truth_(and__3546__auto____8013))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8013;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8015 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8015))
{return or__3548__auto____8015;
} else
{var or__3548__auto____8016 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8016))
{return or__3548__auto____8016;
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
{return (function (){var or__3548__auto____8021 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8021))
{return or__3548__auto____8021;
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
if(cljs.core.truth_((function (){var and__3546__auto____8040 = o;

if(cljs.core.truth_(and__3546__auto____8040))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8040;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8043 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8043))
{return or__3548__auto____8043;
} else
{var or__3548__auto____8046 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8046))
{return or__3548__auto____8046;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8058 = o;

if(cljs.core.truth_(and__3546__auto____8058))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8058;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8061 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8061))
{return or__3548__auto____8061;
} else
{var or__3548__auto____8063 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8063))
{return or__3548__auto____8063;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8067 = o;

if(cljs.core.truth_(and__3546__auto____8067))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8067;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8068 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8068))
{return or__3548__auto____8068;
} else
{var or__3548__auto____8070 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8070))
{return or__3548__auto____8070;
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
if(cljs.core.truth_((function (){var and__3546__auto____8079 = o;

if(cljs.core.truth_(and__3546__auto____8079))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8079;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8082 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8082))
{return or__3548__auto____8082;
} else
{var or__3548__auto____8086 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8086))
{return or__3548__auto____8086;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8097 = d;

if(cljs.core.truth_(and__3546__auto____8097))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8097;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8099 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8099))
{return or__3548__auto____8099;
} else
{var or__3548__auto____8100 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8100))
{return or__3548__auto____8100;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8110 = this$;

if(cljs.core.truth_(and__3546__auto____8110))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8110;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8112 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8112))
{return or__3548__auto____8112;
} else
{var or__3548__auto____8114 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8114))
{return or__3548__auto____8114;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8117 = this$;

if(cljs.core.truth_(and__3546__auto____8117))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8117;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8118 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8118))
{return or__3548__auto____8118;
} else
{var or__3548__auto____8119 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8119))
{return or__3548__auto____8119;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8122 = this$;

if(cljs.core.truth_(and__3546__auto____8122))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8122;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8124 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8124))
{return or__3548__auto____8124;
} else
{var or__3548__auto____8126 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8126))
{return or__3548__auto____8126;
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
var G__8163 = null;
var G__8163__8164 = (function (o,k){
return null;
});
var G__8163__8165 = (function (o,k,not_found){
return not_found;
});
G__8163 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8163__8164.call(this,o,k);
case  3 :
return G__8163__8165.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8163;
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
var G__8169 = null;
var G__8169__8170 = (function (_,f){
return f.call(null);
});
var G__8169__8171 = (function (_,f,start){
return start;
});
G__8169 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8169__8170.call(this,_,f);
case  3 :
return G__8169__8171.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8169;
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
var G__8201 = null;
var G__8201__8202 = (function (_,n){
return null;
});
var G__8201__8203 = (function (_,n,not_found){
return not_found;
});
G__8201 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8201__8202.call(this,_,n);
case  3 :
return G__8201__8203.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8201;
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
var ci_reduce__8318 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8312 = cljs.core._nth.call(null,cicoll,0);
var n__8313 = 1;

while(true){
if(cljs.core.truth_((n__8313 < cljs.core._count.call(null,cicoll))))
{{
var G__8324 = f.call(null,val__8312,cljs.core._nth.call(null,cicoll,n__8313));
var G__8325 = (n__8313 + 1);
val__8312 = G__8324;
n__8313 = G__8325;
continue;
}
} else
{return val__8312;
}
break;
}
}
});
var ci_reduce__8319 = (function (cicoll,f,val){
var val__8314 = val;
var n__8315 = 0;

while(true){
if(cljs.core.truth_((n__8315 < cljs.core._count.call(null,cicoll))))
{{
var G__8328 = f.call(null,val__8314,cljs.core._nth.call(null,cicoll,n__8315));
var G__8329 = (n__8315 + 1);
val__8314 = G__8328;
n__8315 = G__8329;
continue;
}
} else
{return val__8314;
}
break;
}
});
var ci_reduce__8320 = (function (cicoll,f,val,idx){
var val__8316 = val;
var n__8317 = idx;

while(true){
if(cljs.core.truth_((n__8317 < cljs.core._count.call(null,cicoll))))
{{
var G__8331 = f.call(null,val__8316,cljs.core._nth.call(null,cicoll,n__8317));
var G__8333 = (n__8317 + 1);
val__8316 = G__8331;
n__8317 = G__8333;
continue;
}
} else
{return val__8316;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8318.call(this,cicoll,f);
case  3 :
return ci_reduce__8319.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8320.call(this,cicoll,f,val,idx);
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
var this__8342 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8364 = null;
var G__8364__8365 = (function (_,f){
var this__8345 = this;
return cljs.core.ci_reduce.call(null,this__8345.a,f,(this__8345.a[this__8345.i]),(this__8345.i + 1));
});
var G__8364__8366 = (function (_,f,start){
var this__8346 = this;
return cljs.core.ci_reduce.call(null,this__8346.a,f,start,this__8346.i);
});
G__8364 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8364__8365.call(this,_,f);
case  3 :
return G__8364__8366.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8364;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8347 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8348 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8376 = null;
var G__8376__8377 = (function (coll,n){
var this__8349 = this;
var i__8350 = (n + this__8349.i);

if(cljs.core.truth_((i__8350 < this__8349.a.length)))
{return (this__8349.a[i__8350]);
} else
{return null;
}
});
var G__8376__8378 = (function (coll,n,not_found){
var this__8351 = this;
var i__8352 = (n + this__8351.i);

if(cljs.core.truth_((i__8352 < this__8351.a.length)))
{return (this__8351.a[i__8352]);
} else
{return not_found;
}
});
G__8376 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8376__8377.call(this,coll,n);
case  3 :
return G__8376__8378.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8376;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8354 = this;
return (this__8354.a.length - this__8354.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8356 = this;
return (this__8356.a[this__8356.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8358 = this;
if(cljs.core.truth_(((this__8358.i + 1) < this__8358.a.length)))
{return (new cljs.core.IndexedSeq(this__8358.a,(this__8358.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8361 = this;
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
var G__8459 = null;
var G__8459__8461 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8459__8464 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8459 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8459__8461.call(this,array,f);
case  3 :
return G__8459__8464.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8459;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8467 = null;
var G__8467__8468 = (function (array,k){
return (array[k]);
});
var G__8467__8469 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8467 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8467__8468.call(this,array,k);
case  3 :
return G__8467__8469.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8467;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8471 = null;
var G__8471__8472 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8471__8473 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8471 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8471__8472.call(this,array,n);
case  3 :
return G__8471__8473.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8471;
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
var temp__3698__auto____8486 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8486))
{var s__8489 = temp__3698__auto____8486;

return cljs.core._first.call(null,s__8489);
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
var G__8538 = cljs.core.next.call(null,s);
s = G__8538;
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
var s__8540 = cljs.core.seq.call(null,x);
var n__8542 = 0;

while(true){
if(cljs.core.truth_(s__8540))
{{
var G__8551 = cljs.core.next.call(null,s__8540);
var G__8552 = (n__8542 + 1);
s__8540 = G__8551;
n__8542 = G__8552;
continue;
}
} else
{return n__8542;
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
var conj__8561 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8562 = (function() { 
var G__8564__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8565 = conj.call(null,coll,x);
var G__8566 = cljs.core.first.call(null,xs);
var G__8567 = cljs.core.next.call(null,xs);
coll = G__8565;
x = G__8566;
xs = G__8567;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8564 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8564__delegate.call(this, coll, x, xs);
};
G__8564.cljs$lang$maxFixedArity = 2;
G__8564.cljs$lang$applyTo = (function (arglist__8568){
var coll = cljs.core.first(arglist__8568);
var x = cljs.core.first(cljs.core.next(arglist__8568));
var xs = cljs.core.rest(cljs.core.next(arglist__8568));
return G__8564__delegate.call(this, coll, x, xs);
});
return G__8564;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8561.call(this,coll,x);
default:
return conj__8562.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8562.cljs$lang$applyTo;
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
var nth__8585 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8586 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8585.call(this,coll,n);
case  3 :
return nth__8586.call(this,coll,n,not_found);
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
var get__8594 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8596 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8594.call(this,o,k);
case  3 :
return get__8596.call(this,o,k,not_found);
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
var assoc__8617 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8618 = (function() { 
var G__8621__delegate = function (coll,k,v,kvs){
while(true){
var ret__8604 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8623 = ret__8604;
var G__8624 = cljs.core.first.call(null,kvs);
var G__8626 = cljs.core.second.call(null,kvs);
var G__8628 = cljs.core.nnext.call(null,kvs);
coll = G__8623;
k = G__8624;
v = G__8626;
kvs = G__8628;
continue;
}
} else
{return ret__8604;
}
break;
}
};
var G__8621 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8621__delegate.call(this, coll, k, v, kvs);
};
G__8621.cljs$lang$maxFixedArity = 3;
G__8621.cljs$lang$applyTo = (function (arglist__8631){
var coll = cljs.core.first(arglist__8631);
var k = cljs.core.first(cljs.core.next(arglist__8631));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8631)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8631)));
return G__8621__delegate.call(this, coll, k, v, kvs);
});
return G__8621;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8617.call(this,coll,k,v);
default:
return assoc__8618.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8618.cljs$lang$applyTo;
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
var dissoc__8642 = (function (coll){
return coll;
});
var dissoc__8643 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8644 = (function() { 
var G__8656__delegate = function (coll,k,ks){
while(true){
var ret__8637 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8657 = ret__8637;
var G__8658 = cljs.core.first.call(null,ks);
var G__8659 = cljs.core.next.call(null,ks);
coll = G__8657;
k = G__8658;
ks = G__8659;
continue;
}
} else
{return ret__8637;
}
break;
}
};
var G__8656 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8656__delegate.call(this, coll, k, ks);
};
G__8656.cljs$lang$maxFixedArity = 2;
G__8656.cljs$lang$applyTo = (function (arglist__8660){
var coll = cljs.core.first(arglist__8660);
var k = cljs.core.first(cljs.core.next(arglist__8660));
var ks = cljs.core.rest(cljs.core.next(arglist__8660));
return G__8656__delegate.call(this, coll, k, ks);
});
return G__8656;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8642.call(this,coll);
case  2 :
return dissoc__8643.call(this,coll,k);
default:
return dissoc__8644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8644.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8668 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8669 = x__445__auto____8668;

if(cljs.core.truth_(and__3546__auto____8669))
{var and__3546__auto____8670 = x__445__auto____8668.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8670))
{return cljs.core.not.call(null,x__445__auto____8668.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8670;
}
} else
{return and__3546__auto____8669;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8668);
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
var disj__8714 = (function (coll){
return coll;
});
var disj__8715 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8716 = (function() { 
var G__8719__delegate = function (coll,k,ks){
while(true){
var ret__8712 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8720 = ret__8712;
var G__8721 = cljs.core.first.call(null,ks);
var G__8722 = cljs.core.next.call(null,ks);
coll = G__8720;
k = G__8721;
ks = G__8722;
continue;
}
} else
{return ret__8712;
}
break;
}
};
var G__8719 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8719__delegate.call(this, coll, k, ks);
};
G__8719.cljs$lang$maxFixedArity = 2;
G__8719.cljs$lang$applyTo = (function (arglist__8724){
var coll = cljs.core.first(arglist__8724);
var k = cljs.core.first(cljs.core.next(arglist__8724));
var ks = cljs.core.rest(cljs.core.next(arglist__8724));
return G__8719__delegate.call(this, coll, k, ks);
});
return G__8719;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8714.call(this,coll);
case  2 :
return disj__8715.call(this,coll,k);
default:
return disj__8716.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8716.cljs$lang$applyTo;
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
{var x__445__auto____8739 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8741 = x__445__auto____8739;

if(cljs.core.truth_(and__3546__auto____8741))
{var and__3546__auto____8743 = x__445__auto____8739.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8743))
{return cljs.core.not.call(null,x__445__auto____8739.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8743;
}
} else
{return and__3546__auto____8741;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8739);
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
{var x__445__auto____8750 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8752 = x__445__auto____8750;

if(cljs.core.truth_(and__3546__auto____8752))
{var and__3546__auto____8756 = x__445__auto____8750.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8756))
{return cljs.core.not.call(null,x__445__auto____8750.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8756;
}
} else
{return and__3546__auto____8752;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8750);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8761 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8764 = x__445__auto____8761;

if(cljs.core.truth_(and__3546__auto____8764))
{var and__3546__auto____8767 = x__445__auto____8761.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8767))
{return cljs.core.not.call(null,x__445__auto____8761.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8767;
}
} else
{return and__3546__auto____8764;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8761);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8770 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8772 = x__445__auto____8770;

if(cljs.core.truth_(and__3546__auto____8772))
{var and__3546__auto____8779 = x__445__auto____8770.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8779))
{return cljs.core.not.call(null,x__445__auto____8770.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8779;
}
} else
{return and__3546__auto____8772;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8770);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8794 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8795 = x__445__auto____8794;

if(cljs.core.truth_(and__3546__auto____8795))
{var and__3546__auto____8797 = x__445__auto____8794.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8797))
{return cljs.core.not.call(null,x__445__auto____8794.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8797;
}
} else
{return and__3546__auto____8795;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8794);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8803 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8804 = x__445__auto____8803;

if(cljs.core.truth_(and__3546__auto____8804))
{var and__3546__auto____8805 = x__445__auto____8803.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8805))
{return cljs.core.not.call(null,x__445__auto____8803.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8805;
}
} else
{return and__3546__auto____8804;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8803);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8812 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8813 = x__445__auto____8812;

if(cljs.core.truth_(and__3546__auto____8813))
{var and__3546__auto____8814 = x__445__auto____8812.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8814))
{return cljs.core.not.call(null,x__445__auto____8812.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8814;
}
} else
{return and__3546__auto____8813;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8812);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8821 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8821.push(key);
}));
return keys__8821;
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
{var x__445__auto____8830 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8832 = x__445__auto____8830;

if(cljs.core.truth_(and__3546__auto____8832))
{var and__3546__auto____8834 = x__445__auto____8830.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8834))
{return cljs.core.not.call(null,x__445__auto____8830.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8834;
}
} else
{return and__3546__auto____8832;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8830);
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
var and__3546__auto____8841 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8841))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8842 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8842))
{return or__3548__auto____8842;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8841;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8851 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8851))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8851;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8853 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8853))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8853;
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
var and__3546__auto____8857 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8857))
{return (n == n.toFixed());
} else
{return and__3546__auto____8857;
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
if(cljs.core.truth_((function (){var and__3546__auto____8870 = coll;

if(cljs.core.truth_(and__3546__auto____8870))
{var and__3546__auto____8871 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8871))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8871;
}
} else
{return and__3546__auto____8870;
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
var distinct_QMARK___8886 = (function (x){
return true;
});
var distinct_QMARK___8887 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8888 = (function() { 
var G__8891__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8880 = cljs.core.set([y,x]);
var xs__8881 = more;

while(true){
var x__8882 = cljs.core.first.call(null,xs__8881);
var etc__8883 = cljs.core.next.call(null,xs__8881);

if(cljs.core.truth_(xs__8881))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8880,x__8882)))
{return false;
} else
{{
var G__8901 = cljs.core.conj.call(null,s__8880,x__8882);
var G__8902 = etc__8883;
s__8880 = G__8901;
xs__8881 = G__8902;
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
var G__8891 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8891__delegate.call(this, x, y, more);
};
G__8891.cljs$lang$maxFixedArity = 2;
G__8891.cljs$lang$applyTo = (function (arglist__8903){
var x = cljs.core.first(arglist__8903);
var y = cljs.core.first(cljs.core.next(arglist__8903));
var more = cljs.core.rest(cljs.core.next(arglist__8903));
return G__8891__delegate.call(this, x, y, more);
});
return G__8891;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8886.call(this,x);
case  2 :
return distinct_QMARK___8887.call(this,x,y);
default:
return distinct_QMARK___8888.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8888.cljs$lang$applyTo;
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
var r__8906 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8906)))
{return r__8906;
} else
{if(cljs.core.truth_(r__8906))
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
var sort__8968 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8969 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8942 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8942,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8942);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8968.call(this,comp);
case  2 :
return sort__8969.call(this,comp,coll);
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
var sort_by__8973 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8974 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8973.call(this,keyfn,comp);
case  3 :
return sort_by__8974.call(this,keyfn,comp,coll);
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
var reduce__8978 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8980 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8978.call(this,f,val);
case  3 :
return reduce__8980.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8990 = (function (f,coll){
var temp__3695__auto____8984 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8984))
{var s__8986 = temp__3695__auto____8984;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8986),cljs.core.next.call(null,s__8986));
} else
{return f.call(null);
}
});
var seq_reduce__8991 = (function (f,val,coll){
var val__8988 = val;
var coll__8989 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8989))
{{
var G__8993 = f.call(null,val__8988,cljs.core.first.call(null,coll__8989));
var G__8994 = cljs.core.next.call(null,coll__8989);
val__8988 = G__8993;
coll__8989 = G__8994;
continue;
}
} else
{return val__8988;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8990.call(this,f,val);
case  3 :
return seq_reduce__8991.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8998 = null;
var G__8998__8999 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8998__9000 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8998 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8998__8999.call(this,coll,f);
case  3 :
return G__8998__9000.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8998;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9003 = (function (){
return 0;
});
var _PLUS___9004 = (function (x){
return x;
});
var _PLUS___9005 = (function (x,y){
return (x + y);
});
var _PLUS___9006 = (function() { 
var G__9008__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9008 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9008__delegate.call(this, x, y, more);
};
G__9008.cljs$lang$maxFixedArity = 2;
G__9008.cljs$lang$applyTo = (function (arglist__9009){
var x = cljs.core.first(arglist__9009);
var y = cljs.core.first(cljs.core.next(arglist__9009));
var more = cljs.core.rest(cljs.core.next(arglist__9009));
return G__9008__delegate.call(this, x, y, more);
});
return G__9008;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9003.call(this);
case  1 :
return _PLUS___9004.call(this,x);
case  2 :
return _PLUS___9005.call(this,x,y);
default:
return _PLUS___9006.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9006.cljs$lang$applyTo;
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
var ___9010 = (function (x){
return (- x);
});
var ___9011 = (function (x,y){
return (x - y);
});
var ___9012 = (function() { 
var G__9014__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9014 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9014__delegate.call(this, x, y, more);
};
G__9014.cljs$lang$maxFixedArity = 2;
G__9014.cljs$lang$applyTo = (function (arglist__9015){
var x = cljs.core.first(arglist__9015);
var y = cljs.core.first(cljs.core.next(arglist__9015));
var more = cljs.core.rest(cljs.core.next(arglist__9015));
return G__9014__delegate.call(this, x, y, more);
});
return G__9014;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9010.call(this,x);
case  2 :
return ___9011.call(this,x,y);
default:
return ___9012.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9012.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9016 = (function (){
return 1;
});
var _STAR___9017 = (function (x){
return x;
});
var _STAR___9018 = (function (x,y){
return (x * y);
});
var _STAR___9019 = (function() { 
var G__9024__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9024 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9024__delegate.call(this, x, y, more);
};
G__9024.cljs$lang$maxFixedArity = 2;
G__9024.cljs$lang$applyTo = (function (arglist__9025){
var x = cljs.core.first(arglist__9025);
var y = cljs.core.first(cljs.core.next(arglist__9025));
var more = cljs.core.rest(cljs.core.next(arglist__9025));
return G__9024__delegate.call(this, x, y, more);
});
return G__9024;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9016.call(this);
case  1 :
return _STAR___9017.call(this,x);
case  2 :
return _STAR___9018.call(this,x,y);
default:
return _STAR___9019.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9019.cljs$lang$applyTo;
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
var _SLASH___9028 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9030 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9032 = (function() { 
var G__9035__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9035 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9035__delegate.call(this, x, y, more);
};
G__9035.cljs$lang$maxFixedArity = 2;
G__9035.cljs$lang$applyTo = (function (arglist__9037){
var x = cljs.core.first(arglist__9037);
var y = cljs.core.first(cljs.core.next(arglist__9037));
var more = cljs.core.rest(cljs.core.next(arglist__9037));
return G__9035__delegate.call(this, x, y, more);
});
return G__9035;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9028.call(this,x);
case  2 :
return _SLASH___9030.call(this,x,y);
default:
return _SLASH___9032.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9032.cljs$lang$applyTo;
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
var _LT___9053 = (function (x){
return true;
});
var _LT___9054 = (function (x,y){
return (x < y);
});
var _LT___9055 = (function() { 
var G__9057__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9058 = y;
var G__9059 = cljs.core.first.call(null,more);
var G__9060 = cljs.core.next.call(null,more);
x = G__9058;
y = G__9059;
more = G__9060;
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
var G__9057 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9057__delegate.call(this, x, y, more);
};
G__9057.cljs$lang$maxFixedArity = 2;
G__9057.cljs$lang$applyTo = (function (arglist__9063){
var x = cljs.core.first(arglist__9063);
var y = cljs.core.first(cljs.core.next(arglist__9063));
var more = cljs.core.rest(cljs.core.next(arglist__9063));
return G__9057__delegate.call(this, x, y, more);
});
return G__9057;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9053.call(this,x);
case  2 :
return _LT___9054.call(this,x,y);
default:
return _LT___9055.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9055.cljs$lang$applyTo;
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
var _LT__EQ___9079 = (function (x){
return true;
});
var _LT__EQ___9080 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9081 = (function() { 
var G__9084__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9085 = y;
var G__9086 = cljs.core.first.call(null,more);
var G__9088 = cljs.core.next.call(null,more);
x = G__9085;
y = G__9086;
more = G__9088;
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
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9079.call(this,x);
case  2 :
return _LT__EQ___9080.call(this,x,y);
default:
return _LT__EQ___9081.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9081.cljs$lang$applyTo;
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
var _GT___9099 = (function (x){
return true;
});
var _GT___9100 = (function (x,y){
return (x > y);
});
var _GT___9101 = (function() { 
var G__9104__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9105 = y;
var G__9106 = cljs.core.first.call(null,more);
var G__9107 = cljs.core.next.call(null,more);
x = G__9105;
y = G__9106;
more = G__9107;
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
var G__9104 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9104__delegate.call(this, x, y, more);
};
G__9104.cljs$lang$maxFixedArity = 2;
G__9104.cljs$lang$applyTo = (function (arglist__9111){
var x = cljs.core.first(arglist__9111);
var y = cljs.core.first(cljs.core.next(arglist__9111));
var more = cljs.core.rest(cljs.core.next(arglist__9111));
return G__9104__delegate.call(this, x, y, more);
});
return G__9104;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9099.call(this,x);
case  2 :
return _GT___9100.call(this,x,y);
default:
return _GT___9101.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9101.cljs$lang$applyTo;
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
var _GT__EQ___9119 = (function (x){
return true;
});
var _GT__EQ___9120 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9121 = (function() { 
var G__9126__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9127 = y;
var G__9128 = cljs.core.first.call(null,more);
var G__9129 = cljs.core.next.call(null,more);
x = G__9127;
y = G__9128;
more = G__9129;
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
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9119.call(this,x);
case  2 :
return _GT__EQ___9120.call(this,x,y);
default:
return _GT__EQ___9121.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9121.cljs$lang$applyTo;
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
var max__9139 = (function (x){
return x;
});
var max__9140 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9141 = (function() { 
var G__9143__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9143 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9143__delegate.call(this, x, y, more);
};
G__9143.cljs$lang$maxFixedArity = 2;
G__9143.cljs$lang$applyTo = (function (arglist__9144){
var x = cljs.core.first(arglist__9144);
var y = cljs.core.first(cljs.core.next(arglist__9144));
var more = cljs.core.rest(cljs.core.next(arglist__9144));
return G__9143__delegate.call(this, x, y, more);
});
return G__9143;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9139.call(this,x);
case  2 :
return max__9140.call(this,x,y);
default:
return max__9141.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9141.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9205 = (function (x){
return x;
});
var min__9206 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9207 = (function() { 
var G__9211__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9211 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9211__delegate.call(this, x, y, more);
};
G__9211.cljs$lang$maxFixedArity = 2;
G__9211.cljs$lang$applyTo = (function (arglist__9213){
var x = cljs.core.first(arglist__9213);
var y = cljs.core.first(cljs.core.next(arglist__9213));
var more = cljs.core.rest(cljs.core.next(arglist__9213));
return G__9211__delegate.call(this, x, y, more);
});
return G__9211;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9205.call(this,x);
case  2 :
return min__9206.call(this,x,y);
default:
return min__9207.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9207.cljs$lang$applyTo;
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
var rem__9230 = (n % d);

return cljs.core.fix.call(null,((n - rem__9230) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9239 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9239));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9243 = (function (){
return Math.random.call(null);
});
var rand__9245 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9243.call(this);
case  1 :
return rand__9245.call(this,n);
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
var _EQ__EQ___9378 = (function (x){
return true;
});
var _EQ__EQ___9379 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9380 = (function() { 
var G__9385__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9386 = y;
var G__9387 = cljs.core.first.call(null,more);
var G__9388 = cljs.core.next.call(null,more);
x = G__9386;
y = G__9387;
more = G__9388;
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
var G__9385 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9385__delegate.call(this, x, y, more);
};
G__9385.cljs$lang$maxFixedArity = 2;
G__9385.cljs$lang$applyTo = (function (arglist__9389){
var x = cljs.core.first(arglist__9389);
var y = cljs.core.first(cljs.core.next(arglist__9389));
var more = cljs.core.rest(cljs.core.next(arglist__9389));
return G__9385__delegate.call(this, x, y, more);
});
return G__9385;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9378.call(this,x);
case  2 :
return _EQ__EQ___9379.call(this,x,y);
default:
return _EQ__EQ___9380.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9380.cljs$lang$applyTo;
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
var n__9393 = n;
var xs__9397 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9398 = xs__9397;

if(cljs.core.truth_(and__3546__auto____9398))
{return (n__9393 > 0);
} else
{return and__3546__auto____9398;
}
})()))
{{
var G__9401 = (n__9393 - 1);
var G__9402 = cljs.core.next.call(null,xs__9397);
n__9393 = G__9401;
xs__9397 = G__9402;
continue;
}
} else
{return xs__9397;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9414 = null;
var G__9414__9415 = (function (coll,n){
var temp__3695__auto____9408 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9408))
{var xs__9409 = temp__3695__auto____9408;

return cljs.core.first.call(null,xs__9409);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9414__9416 = (function (coll,n,not_found){
var temp__3695__auto____9412 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9412))
{var xs__9413 = temp__3695__auto____9412;

return cljs.core.first.call(null,xs__9413);
} else
{return not_found;
}
});
G__9414 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9414__9415.call(this,coll,n);
case  3 :
return G__9414__9416.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9414;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9427 = (function (){
return "";
});
var str_STAR___9429 = (function (x){
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
var str_STAR___9430 = (function() { 
var G__9432__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9433 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9434 = cljs.core.next.call(null,more);
sb = G__9433;
more = G__9434;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9432 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9432__delegate.call(this, x, ys);
};
G__9432.cljs$lang$maxFixedArity = 1;
G__9432.cljs$lang$applyTo = (function (arglist__9435){
var x = cljs.core.first(arglist__9435);
var ys = cljs.core.rest(arglist__9435);
return G__9432__delegate.call(this, x, ys);
});
return G__9432;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9427.call(this);
case  1 :
return str_STAR___9429.call(this,x);
default:
return str_STAR___9430.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9430.cljs$lang$applyTo;
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
var str__9442 = (function (){
return "";
});
var str__9443 = (function (x){
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
var str__9444 = (function() { 
var G__9447__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9447 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9447__delegate.call(this, x, ys);
};
G__9447.cljs$lang$maxFixedArity = 1;
G__9447.cljs$lang$applyTo = (function (arglist__9448){
var x = cljs.core.first(arglist__9448);
var ys = cljs.core.rest(arglist__9448);
return G__9447__delegate.call(this, x, ys);
});
return G__9447;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9442.call(this);
case  1 :
return str__9443.call(this,x);
default:
return str__9444.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9444.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9476 = (function (s,start){
return s.substring(start);
});
var subs__9477 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9476.call(this,s,start);
case  3 :
return subs__9477.call(this,s,start,end);
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
var symbol__9489 = (function (name){
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
var symbol__9490 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9489.call(this,ns);
case  2 :
return symbol__9490.call(this,ns,name);
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
var keyword__9504 = (function (name){
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
var keyword__9505 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9504.call(this,ns);
case  2 :
return keyword__9505.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9512 = cljs.core.seq.call(null,x);
var ys__9513 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9512)))
{return cljs.core.nil_QMARK_.call(null,ys__9513);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9513)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9512),cljs.core.first.call(null,ys__9513))))
{{
var G__9520 = cljs.core.next.call(null,xs__9512);
var G__9521 = cljs.core.next.call(null,ys__9513);
xs__9512 = G__9520;
ys__9513 = G__9521;
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
return cljs.core.reduce.call(null,(function (p1__9524_SHARP_,p2__9526_SHARP_){
return cljs.core.hash_combine.call(null,p1__9524_SHARP_,cljs.core.hash.call(null,p2__9526_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9547__9552 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9547__9552))
{var G__9554__9687 = cljs.core.first.call(null,G__9547__9552);
var vec__9683__9688 = G__9554__9687;
var key_name__9689 = cljs.core.nth.call(null,vec__9683__9688,0,null);
var f__9690 = cljs.core.nth.call(null,vec__9683__9688,1,null);
var G__9547__9691 = G__9547__9552;

var G__9554__9692 = G__9554__9687;
var G__9547__9693 = G__9547__9691;

while(true){
var vec__9694__9695 = G__9554__9692;
var key_name__9696 = cljs.core.nth.call(null,vec__9694__9695,0,null);
var f__9697 = cljs.core.nth.call(null,vec__9694__9695,1,null);
var G__9547__9698 = G__9547__9693;

var str_name__9699 = cljs.core.name.call(null,key_name__9696);

obj[str_name__9699] = f__9697;
var temp__3698__auto____9700 = cljs.core.next.call(null,G__9547__9698);

if(cljs.core.truth_(temp__3698__auto____9700))
{var G__9547__9701 = temp__3698__auto____9700;

{
var G__9711 = cljs.core.first.call(null,G__9547__9701);
var G__9712 = G__9547__9701;
G__9554__9692 = G__9711;
G__9547__9693 = G__9712;
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
var this__9720 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9723 = this;
return (new cljs.core.List(this__9723.meta,o,coll,(this__9723.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9725 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9727 = this;
return this__9727.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9728 = this;
return this__9728.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9729 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9730 = this;
return this__9730.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9731 = this;
return this__9731.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9732 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9736 = this;
return (new cljs.core.List(meta,this__9736.first,this__9736.rest,this__9736.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9737 = this;
return this__9737.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9738 = this;
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
var this__9747 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9748 = this;
return (new cljs.core.List(this__9748.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9749 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9750 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9751 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9858 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9941 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9942 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9943 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9944 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9945 = this;
return this__9945.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9946 = this;
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
list.cljs$lang$applyTo = (function (arglist__10017){
var items = cljs.core.seq( arglist__10017 );;
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
var this__10033 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10038 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10039 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10044 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10044.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10045 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10049 = this;
return this__10049.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10051 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10051.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10051.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10052 = this;
return this__10052.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10053 = this;
return (new cljs.core.Cons(meta,this__10053.first,this__10053.rest));
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
var G__10074 = null;
var G__10074__10075 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10074__10076 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10074 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10074__10075.call(this,string,f);
case  3 :
return G__10074__10076.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10074;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10079 = null;
var G__10079__10080 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10079__10081 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10079 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10079__10080.call(this,string,k);
case  3 :
return G__10079__10081.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10079;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10084 = null;
var G__10084__10085 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10084__10086 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10084 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10084__10085.call(this,string,n);
case  3 :
return G__10084__10086.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10084;
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
var G__10200 = null;
var G__10200__10201 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10200__10202 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10200 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10200__10201.call(this,this$,coll);
case  3 :
return G__10200__10202.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10200;
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
var x__10211 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10211;
} else
{lazy_seq.x = x__10211.call(null);
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
var this__10217 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10224 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10226 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10228 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10228.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10231 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10232 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10234 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10240 = this;
return this__10240.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10242 = this;
return (new cljs.core.LazySeq(meta,this__10242.realized,this__10242.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10283 = cljs.core.array.call(null);

var s__10284 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10284)))
{ary__10283.push(cljs.core.first.call(null,s__10284));
{
var G__10285 = cljs.core.next.call(null,s__10284);
s__10284 = G__10285;
continue;
}
} else
{return ary__10283;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10288 = s;
var i__10289 = n;
var sum__10290 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10292 = (i__10289 > 0);

if(cljs.core.truth_(and__3546__auto____10292))
{return cljs.core.seq.call(null,s__10288);
} else
{return and__3546__auto____10292;
}
})()))
{{
var G__10295 = cljs.core.next.call(null,s__10288);
var G__10296 = (i__10289 - 1);
var G__10297 = (sum__10290 + 1);
s__10288 = G__10295;
i__10289 = G__10296;
sum__10290 = G__10297;
continue;
}
} else
{return sum__10290;
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
var concat__10343 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10344 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10345 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10329 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10329))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10329),concat.call(null,cljs.core.rest.call(null,s__10329),y));
} else
{return y;
}
})));
});
var concat__10346 = (function() { 
var G__10349__delegate = function (x,y,zs){
var cat__10332 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10330 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10330))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10330),cat.call(null,cljs.core.rest.call(null,xys__10330),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10332.call(null,concat.call(null,x,y),zs);
};
var G__10349 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10349__delegate.call(this, x, y, zs);
};
G__10349.cljs$lang$maxFixedArity = 2;
G__10349.cljs$lang$applyTo = (function (arglist__10396){
var x = cljs.core.first(arglist__10396);
var y = cljs.core.first(cljs.core.next(arglist__10396));
var zs = cljs.core.rest(cljs.core.next(arglist__10396));
return G__10349__delegate.call(this, x, y, zs);
});
return G__10349;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10343.call(this);
case  1 :
return concat__10344.call(this,x);
case  2 :
return concat__10345.call(this,x,y);
default:
return concat__10346.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10346.cljs$lang$applyTo;
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
var list_STAR___10465 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10466 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10467 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10468 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10469 = (function() { 
var G__10471__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10471 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10471__delegate.call(this, a, b, c, d, more);
};
G__10471.cljs$lang$maxFixedArity = 4;
G__10471.cljs$lang$applyTo = (function (arglist__10473){
var a = cljs.core.first(arglist__10473);
var b = cljs.core.first(cljs.core.next(arglist__10473));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10473)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10473))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10473))));
return G__10471__delegate.call(this, a, b, c, d, more);
});
return G__10471;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10465.call(this,a);
case  2 :
return list_STAR___10466.call(this,a,b);
case  3 :
return list_STAR___10467.call(this,a,b,c);
case  4 :
return list_STAR___10468.call(this,a,b,c,d);
default:
return list_STAR___10469.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10469.cljs$lang$applyTo;
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
var apply__10529 = (function (f,args){
var fixed_arity__10476 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10476 + 1)) <= fixed_arity__10476)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10531 = (function (f,x,args){
var arglist__10503 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10505 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10503,fixed_arity__10505) <= fixed_arity__10505)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10503));
} else
{return f.cljs$lang$applyTo(arglist__10503);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10503));
}
});
var apply__10533 = (function (f,x,y,args){
var arglist__10506 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10507 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10506,fixed_arity__10507) <= fixed_arity__10507)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10506));
} else
{return f.cljs$lang$applyTo(arglist__10506);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10506));
}
});
var apply__10536 = (function (f,x,y,z,args){
var arglist__10518 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10519 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10518,fixed_arity__10519) <= fixed_arity__10519)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10518));
} else
{return f.cljs$lang$applyTo(arglist__10518);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10518));
}
});
var apply__10538 = (function() { 
var G__10557__delegate = function (f,a,b,c,d,args){
var arglist__10522 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10523 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10522,fixed_arity__10523) <= fixed_arity__10523)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10522));
} else
{return f.cljs$lang$applyTo(arglist__10522);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10522));
}
};
var G__10557 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10557__delegate.call(this, f, a, b, c, d, args);
};
G__10557.cljs$lang$maxFixedArity = 5;
G__10557.cljs$lang$applyTo = (function (arglist__10560){
var f = cljs.core.first(arglist__10560);
var a = cljs.core.first(cljs.core.next(arglist__10560));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10560)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10560))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10560)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10560)))));
return G__10557__delegate.call(this, f, a, b, c, d, args);
});
return G__10557;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10529.call(this,f,a);
case  3 :
return apply__10531.call(this,f,a,b);
case  4 :
return apply__10533.call(this,f,a,b,c);
case  5 :
return apply__10536.call(this,f,a,b,c,d);
default:
return apply__10538.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10538.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10577){
var obj = cljs.core.first(arglist__10577);
var f = cljs.core.first(cljs.core.next(arglist__10577));
var args = cljs.core.rest(cljs.core.next(arglist__10577));
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
var not_EQ___10584 = (function (x){
return false;
});
var not_EQ___10585 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10587 = (function() { 
var G__10591__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10591 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10591__delegate.call(this, x, y, more);
};
G__10591.cljs$lang$maxFixedArity = 2;
G__10591.cljs$lang$applyTo = (function (arglist__10594){
var x = cljs.core.first(arglist__10594);
var y = cljs.core.first(cljs.core.next(arglist__10594));
var more = cljs.core.rest(cljs.core.next(arglist__10594));
return G__10591__delegate.call(this, x, y, more);
});
return G__10591;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10584.call(this,x);
case  2 :
return not_EQ___10585.call(this,x,y);
default:
return not_EQ___10587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10587.cljs$lang$applyTo;
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
var G__10634 = pred;
var G__10635 = cljs.core.next.call(null,coll);
pred = G__10634;
coll = G__10635;
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
{var or__3548__auto____10650 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10650))
{return or__3548__auto____10650;
} else
{{
var G__10653 = pred;
var G__10654 = cljs.core.next.call(null,coll);
pred = G__10653;
coll = G__10654;
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
var G__10708 = null;
var G__10708__10709 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10708__10710 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10708__10711 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10708__10712 = (function() { 
var G__10715__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10715 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10715__delegate.call(this, x, y, zs);
};
G__10715.cljs$lang$maxFixedArity = 2;
G__10715.cljs$lang$applyTo = (function (arglist__10717){
var x = cljs.core.first(arglist__10717);
var y = cljs.core.first(cljs.core.next(arglist__10717));
var zs = cljs.core.rest(cljs.core.next(arglist__10717));
return G__10715__delegate.call(this, x, y, zs);
});
return G__10715;
})()
;
G__10708 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10708__10709.call(this);
case  1 :
return G__10708__10710.call(this,x);
case  2 :
return G__10708__10711.call(this,x,y);
default:
return G__10708__10712.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10708.cljs$lang$maxFixedArity = 2;
G__10708.cljs$lang$applyTo = G__10708__10712.cljs$lang$applyTo;
return G__10708;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10719__delegate = function (args){
return x;
};
var G__10719 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10719__delegate.call(this, args);
};
G__10719.cljs$lang$maxFixedArity = 0;
G__10719.cljs$lang$applyTo = (function (arglist__10724){
var args = cljs.core.seq( arglist__10724 );;
return G__10719__delegate.call(this, args);
});
return G__10719;
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
var comp__10749 = (function (){
return cljs.core.identity;
});
var comp__10750 = (function (f){
return f;
});
var comp__10751 = (function (f,g){
return (function() {
var G__10759 = null;
var G__10759__10760 = (function (){
return f.call(null,g.call(null));
});
var G__10759__10761 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10759__10762 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10759__10763 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10759__10764 = (function() { 
var G__10768__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10768 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10768__delegate.call(this, x, y, z, args);
};
G__10768.cljs$lang$maxFixedArity = 3;
G__10768.cljs$lang$applyTo = (function (arglist__10771){
var x = cljs.core.first(arglist__10771);
var y = cljs.core.first(cljs.core.next(arglist__10771));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10771)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10771)));
return G__10768__delegate.call(this, x, y, z, args);
});
return G__10768;
})()
;
G__10759 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10759__10760.call(this);
case  1 :
return G__10759__10761.call(this,x);
case  2 :
return G__10759__10762.call(this,x,y);
case  3 :
return G__10759__10763.call(this,x,y,z);
default:
return G__10759__10764.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10759.cljs$lang$maxFixedArity = 3;
G__10759.cljs$lang$applyTo = G__10759__10764.cljs$lang$applyTo;
return G__10759;
})()
});
var comp__10753 = (function (f,g,h){
return (function() {
var G__10776 = null;
var G__10776__10777 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10776__10778 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10776__10779 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10776__10780 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10776__10781 = (function() { 
var G__10784__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10784 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10784__delegate.call(this, x, y, z, args);
};
G__10784.cljs$lang$maxFixedArity = 3;
G__10784.cljs$lang$applyTo = (function (arglist__10790){
var x = cljs.core.first(arglist__10790);
var y = cljs.core.first(cljs.core.next(arglist__10790));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10790)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10790)));
return G__10784__delegate.call(this, x, y, z, args);
});
return G__10784;
})()
;
G__10776 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10776__10777.call(this);
case  1 :
return G__10776__10778.call(this,x);
case  2 :
return G__10776__10779.call(this,x,y);
case  3 :
return G__10776__10780.call(this,x,y,z);
default:
return G__10776__10781.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10776.cljs$lang$maxFixedArity = 3;
G__10776.cljs$lang$applyTo = G__10776__10781.cljs$lang$applyTo;
return G__10776;
})()
});
var comp__10755 = (function() { 
var G__10791__delegate = function (f1,f2,f3,fs){
var fs__10740 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10793__delegate = function (args){
var ret__10744 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10740),args);
var fs__10745 = cljs.core.next.call(null,fs__10740);

while(true){
if(cljs.core.truth_(fs__10745))
{{
var G__10794 = cljs.core.first.call(null,fs__10745).call(null,ret__10744);
var G__10795 = cljs.core.next.call(null,fs__10745);
ret__10744 = G__10794;
fs__10745 = G__10795;
continue;
}
} else
{return ret__10744;
}
break;
}
};
var G__10793 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10793__delegate.call(this, args);
};
G__10793.cljs$lang$maxFixedArity = 0;
G__10793.cljs$lang$applyTo = (function (arglist__10799){
var args = cljs.core.seq( arglist__10799 );;
return G__10793__delegate.call(this, args);
});
return G__10793;
})()
;
};
var G__10791 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10791__delegate.call(this, f1, f2, f3, fs);
};
G__10791.cljs$lang$maxFixedArity = 3;
G__10791.cljs$lang$applyTo = (function (arglist__10800){
var f1 = cljs.core.first(arglist__10800);
var f2 = cljs.core.first(cljs.core.next(arglist__10800));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10800)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10800)));
return G__10791__delegate.call(this, f1, f2, f3, fs);
});
return G__10791;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10749.call(this);
case  1 :
return comp__10750.call(this,f1);
case  2 :
return comp__10751.call(this,f1,f2);
case  3 :
return comp__10753.call(this,f1,f2,f3);
default:
return comp__10755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10755.cljs$lang$applyTo;
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
var partial__10824 = (function (f,arg1){
return (function() { 
var G__10830__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10830 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10830__delegate.call(this, args);
};
G__10830.cljs$lang$maxFixedArity = 0;
G__10830.cljs$lang$applyTo = (function (arglist__10831){
var args = cljs.core.seq( arglist__10831 );;
return G__10830__delegate.call(this, args);
});
return G__10830;
})()
;
});
var partial__10825 = (function (f,arg1,arg2){
return (function() { 
var G__10832__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10832 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10832__delegate.call(this, args);
};
G__10832.cljs$lang$maxFixedArity = 0;
G__10832.cljs$lang$applyTo = (function (arglist__10834){
var args = cljs.core.seq( arglist__10834 );;
return G__10832__delegate.call(this, args);
});
return G__10832;
})()
;
});
var partial__10826 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10836__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10836 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10836__delegate.call(this, args);
};
G__10836.cljs$lang$maxFixedArity = 0;
G__10836.cljs$lang$applyTo = (function (arglist__10837){
var args = cljs.core.seq( arglist__10837 );;
return G__10836__delegate.call(this, args);
});
return G__10836;
})()
;
});
var partial__10827 = (function() { 
var G__10838__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10839__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10839 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10839__delegate.call(this, args);
};
G__10839.cljs$lang$maxFixedArity = 0;
G__10839.cljs$lang$applyTo = (function (arglist__10846){
var args = cljs.core.seq( arglist__10846 );;
return G__10839__delegate.call(this, args);
});
return G__10839;
})()
;
};
var G__10838 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10838__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10838.cljs$lang$maxFixedArity = 4;
G__10838.cljs$lang$applyTo = (function (arglist__10849){
var f = cljs.core.first(arglist__10849);
var arg1 = cljs.core.first(cljs.core.next(arglist__10849));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10849)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10849))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10849))));
return G__10838__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10838;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10824.call(this,f,arg1);
case  3 :
return partial__10825.call(this,f,arg1,arg2);
case  4 :
return partial__10826.call(this,f,arg1,arg2,arg3);
default:
return partial__10827.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10827.cljs$lang$applyTo;
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
var fnil__10888 = (function (f,x){
return (function() {
var G__10895 = null;
var G__10895__10896 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10895__10897 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10895__10898 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10895__10900 = (function() { 
var G__10906__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10906 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10906__delegate.call(this, a, b, c, ds);
};
G__10906.cljs$lang$maxFixedArity = 3;
G__10906.cljs$lang$applyTo = (function (arglist__10909){
var a = cljs.core.first(arglist__10909);
var b = cljs.core.first(cljs.core.next(arglist__10909));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10909)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10909)));
return G__10906__delegate.call(this, a, b, c, ds);
});
return G__10906;
})()
;
G__10895 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10895__10896.call(this,a);
case  2 :
return G__10895__10897.call(this,a,b);
case  3 :
return G__10895__10898.call(this,a,b,c);
default:
return G__10895__10900.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10895.cljs$lang$maxFixedArity = 3;
G__10895.cljs$lang$applyTo = G__10895__10900.cljs$lang$applyTo;
return G__10895;
})()
});
var fnil__10890 = (function (f,x,y){
return (function() {
var G__10912 = null;
var G__10912__10913 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10912__10914 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10912__10915 = (function() { 
var G__10927__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10927 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10927__delegate.call(this, a, b, c, ds);
};
G__10927.cljs$lang$maxFixedArity = 3;
G__10927.cljs$lang$applyTo = (function (arglist__10934){
var a = cljs.core.first(arglist__10934);
var b = cljs.core.first(cljs.core.next(arglist__10934));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10934)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10934)));
return G__10927__delegate.call(this, a, b, c, ds);
});
return G__10927;
})()
;
G__10912 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10912__10913.call(this,a,b);
case  3 :
return G__10912__10914.call(this,a,b,c);
default:
return G__10912__10915.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10912.cljs$lang$maxFixedArity = 3;
G__10912.cljs$lang$applyTo = G__10912__10915.cljs$lang$applyTo;
return G__10912;
})()
});
var fnil__10891 = (function (f,x,y,z){
return (function() {
var G__10940 = null;
var G__10940__10941 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10940__10942 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10940__10943 = (function() { 
var G__10952__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10952 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10952__delegate.call(this, a, b, c, ds);
};
G__10952.cljs$lang$maxFixedArity = 3;
G__10952.cljs$lang$applyTo = (function (arglist__10959){
var a = cljs.core.first(arglist__10959);
var b = cljs.core.first(cljs.core.next(arglist__10959));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10959)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10959)));
return G__10952__delegate.call(this, a, b, c, ds);
});
return G__10952;
})()
;
G__10940 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10940__10941.call(this,a,b);
case  3 :
return G__10940__10942.call(this,a,b,c);
default:
return G__10940__10943.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10940.cljs$lang$maxFixedArity = 3;
G__10940.cljs$lang$applyTo = G__10940__10943.cljs$lang$applyTo;
return G__10940;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10888.call(this,f,x);
case  3 :
return fnil__10890.call(this,f,x,y);
case  4 :
return fnil__10891.call(this,f,x,y,z);
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
var mapi__10981 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10976 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10976))
{var s__10977 = temp__3698__auto____10976;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10977)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10977)));
} else
{return null;
}
})));
});

return mapi__10981.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10998 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10998))
{var s__11001 = temp__3698__auto____10998;

var x__11003 = f.call(null,cljs.core.first.call(null,s__11001));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11003)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11001));
} else
{return cljs.core.cons.call(null,x__11003,keep.call(null,f,cljs.core.rest.call(null,s__11001)));
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
var keepi__11055 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11045 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11045))
{var s__11052 = temp__3698__auto____11045;

var x__11053 = f.call(null,idx,cljs.core.first.call(null,s__11052));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11053)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11052));
} else
{return cljs.core.cons.call(null,x__11053,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11052)));
}
} else
{return null;
}
})));
});

return keepi__11055.call(null,0,coll);
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
var every_pred__11240 = (function (p){
return (function() {
var ep1 = null;
var ep1__11247 = (function (){
return true;
});
var ep1__11248 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11249 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11078 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11078))
{return p.call(null,y);
} else
{return and__3546__auto____11078;
}
})());
});
var ep1__11250 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11081 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11081))
{var and__3546__auto____11082 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11082))
{return p.call(null,z);
} else
{return and__3546__auto____11082;
}
} else
{return and__3546__auto____11081;
}
})());
});
var ep1__11251 = (function() { 
var G__11255__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11084 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11084))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11084;
}
})());
};
var G__11255 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11255__delegate.call(this, x, y, z, args);
};
G__11255.cljs$lang$maxFixedArity = 3;
G__11255.cljs$lang$applyTo = (function (arglist__11262){
var x = cljs.core.first(arglist__11262);
var y = cljs.core.first(cljs.core.next(arglist__11262));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11262)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11262)));
return G__11255__delegate.call(this, x, y, z, args);
});
return G__11255;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11247.call(this);
case  1 :
return ep1__11248.call(this,x);
case  2 :
return ep1__11249.call(this,x,y);
case  3 :
return ep1__11250.call(this,x,y,z);
default:
return ep1__11251.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11251.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11242 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11270 = (function (){
return true;
});
var ep2__11271 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11085 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11085))
{return p2.call(null,x);
} else
{return and__3546__auto____11085;
}
})());
});
var ep2__11272 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11093 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11093))
{var and__3546__auto____11146 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11146))
{var and__3546__auto____11149 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11149))
{return p2.call(null,y);
} else
{return and__3546__auto____11149;
}
} else
{return and__3546__auto____11146;
}
} else
{return and__3546__auto____11093;
}
})());
});
var ep2__11273 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11153 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11153))
{var and__3546__auto____11154 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11154))
{var and__3546__auto____11157 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11157))
{var and__3546__auto____11160 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11160))
{var and__3546__auto____11163 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11163))
{return p2.call(null,z);
} else
{return and__3546__auto____11163;
}
} else
{return and__3546__auto____11160;
}
} else
{return and__3546__auto____11157;
}
} else
{return and__3546__auto____11154;
}
} else
{return and__3546__auto____11153;
}
})());
});
var ep2__11274 = (function() { 
var G__11365__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11168 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11168))
{return cljs.core.every_QMARK_.call(null,(function (p1__11024_SHARP_){
var and__3546__auto____11170 = p1.call(null,p1__11024_SHARP_);

if(cljs.core.truth_(and__3546__auto____11170))
{return p2.call(null,p1__11024_SHARP_);
} else
{return and__3546__auto____11170;
}
}),args);
} else
{return and__3546__auto____11168;
}
})());
};
var G__11365 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11365__delegate.call(this, x, y, z, args);
};
G__11365.cljs$lang$maxFixedArity = 3;
G__11365.cljs$lang$applyTo = (function (arglist__11372){
var x = cljs.core.first(arglist__11372);
var y = cljs.core.first(cljs.core.next(arglist__11372));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11372)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11372)));
return G__11365__delegate.call(this, x, y, z, args);
});
return G__11365;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11270.call(this);
case  1 :
return ep2__11271.call(this,x);
case  2 :
return ep2__11272.call(this,x,y);
case  3 :
return ep2__11273.call(this,x,y,z);
default:
return ep2__11274.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11274.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11243 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11373 = (function (){
return true;
});
var ep3__11374 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11171 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11171))
{var and__3546__auto____11172 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11172))
{return p3.call(null,x);
} else
{return and__3546__auto____11172;
}
} else
{return and__3546__auto____11171;
}
})());
});
var ep3__11375 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11173 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11173))
{var and__3546__auto____11175 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11175))
{var and__3546__auto____11177 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11177))
{var and__3546__auto____11179 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11179))
{var and__3546__auto____11183 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11183))
{return p3.call(null,y);
} else
{return and__3546__auto____11183;
}
} else
{return and__3546__auto____11179;
}
} else
{return and__3546__auto____11177;
}
} else
{return and__3546__auto____11175;
}
} else
{return and__3546__auto____11173;
}
})());
});
var ep3__11376 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11184 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11184))
{var and__3546__auto____11185 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11185))
{var and__3546__auto____11186 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11186))
{var and__3546__auto____11188 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11188))
{var and__3546__auto____11191 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11191))
{var and__3546__auto____11194 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11194))
{var and__3546__auto____11198 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11198))
{var and__3546__auto____11200 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11200))
{return p3.call(null,z);
} else
{return and__3546__auto____11200;
}
} else
{return and__3546__auto____11198;
}
} else
{return and__3546__auto____11194;
}
} else
{return and__3546__auto____11191;
}
} else
{return and__3546__auto____11188;
}
} else
{return and__3546__auto____11186;
}
} else
{return and__3546__auto____11185;
}
} else
{return and__3546__auto____11184;
}
})());
});
var ep3__11377 = (function() { 
var G__11380__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11206 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11206))
{return cljs.core.every_QMARK_.call(null,(function (p1__11025_SHARP_){
var and__3546__auto____11210 = p1.call(null,p1__11025_SHARP_);

if(cljs.core.truth_(and__3546__auto____11210))
{var and__3546__auto____11213 = p2.call(null,p1__11025_SHARP_);

if(cljs.core.truth_(and__3546__auto____11213))
{return p3.call(null,p1__11025_SHARP_);
} else
{return and__3546__auto____11213;
}
} else
{return and__3546__auto____11210;
}
}),args);
} else
{return and__3546__auto____11206;
}
})());
};
var G__11380 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11380__delegate.call(this, x, y, z, args);
};
G__11380.cljs$lang$maxFixedArity = 3;
G__11380.cljs$lang$applyTo = (function (arglist__11383){
var x = cljs.core.first(arglist__11383);
var y = cljs.core.first(cljs.core.next(arglist__11383));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11383)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11383)));
return G__11380__delegate.call(this, x, y, z, args);
});
return G__11380;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11373.call(this);
case  1 :
return ep3__11374.call(this,x);
case  2 :
return ep3__11375.call(this,x,y);
case  3 :
return ep3__11376.call(this,x,y,z);
default:
return ep3__11377.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11377.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11244 = (function() { 
var G__11394__delegate = function (p1,p2,p3,ps){
var ps__11219 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11399 = (function (){
return true;
});
var epn__11401 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11028_SHARP_){
return p1__11028_SHARP_.call(null,x);
}),ps__11219);
});
var epn__11403 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11029_SHARP_){
var and__3546__auto____11222 = p1__11029_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11222))
{return p1__11029_SHARP_.call(null,y);
} else
{return and__3546__auto____11222;
}
}),ps__11219);
});
var epn__11405 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11030_SHARP_){
var and__3546__auto____11226 = p1__11030_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11226))
{var and__3546__auto____11228 = p1__11030_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11228))
{return p1__11030_SHARP_.call(null,z);
} else
{return and__3546__auto____11228;
}
} else
{return and__3546__auto____11226;
}
}),ps__11219);
});
var epn__11406 = (function() { 
var G__11411__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11231 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11231))
{return cljs.core.every_QMARK_.call(null,(function (p1__11031_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11031_SHARP_,args);
}),ps__11219);
} else
{return and__3546__auto____11231;
}
})());
};
var G__11411 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11411__delegate.call(this, x, y, z, args);
};
G__11411.cljs$lang$maxFixedArity = 3;
G__11411.cljs$lang$applyTo = (function (arglist__11414){
var x = cljs.core.first(arglist__11414);
var y = cljs.core.first(cljs.core.next(arglist__11414));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11414)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11414)));
return G__11411__delegate.call(this, x, y, z, args);
});
return G__11411;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11399.call(this);
case  1 :
return epn__11401.call(this,x);
case  2 :
return epn__11403.call(this,x,y);
case  3 :
return epn__11405.call(this,x,y,z);
default:
return epn__11406.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11406.cljs$lang$applyTo;
return epn;
})()
};
var G__11394 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11394__delegate.call(this, p1, p2, p3, ps);
};
G__11394.cljs$lang$maxFixedArity = 3;
G__11394.cljs$lang$applyTo = (function (arglist__11421){
var p1 = cljs.core.first(arglist__11421);
var p2 = cljs.core.first(cljs.core.next(arglist__11421));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11421)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11421)));
return G__11394__delegate.call(this, p1, p2, p3, ps);
});
return G__11394;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11240.call(this,p1);
case  2 :
return every_pred__11242.call(this,p1,p2);
case  3 :
return every_pred__11243.call(this,p1,p2,p3);
default:
return every_pred__11244.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11244.cljs$lang$applyTo;
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
var some_fn__11509 = (function (p){
return (function() {
var sp1 = null;
var sp1__11579 = (function (){
return null;
});
var sp1__11580 = (function (x){
return p.call(null,x);
});
var sp1__11581 = (function (x,y){
var or__3548__auto____11428 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11428))
{return or__3548__auto____11428;
} else
{return p.call(null,y);
}
});
var sp1__11582 = (function (x,y,z){
var or__3548__auto____11429 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11429))
{return or__3548__auto____11429;
} else
{var or__3548__auto____11431 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11431))
{return or__3548__auto____11431;
} else
{return p.call(null,z);
}
}
});
var sp1__11583 = (function() { 
var G__11591__delegate = function (x,y,z,args){
var or__3548__auto____11433 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11433))
{return or__3548__auto____11433;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11591 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11591__delegate.call(this, x, y, z, args);
};
G__11591.cljs$lang$maxFixedArity = 3;
G__11591.cljs$lang$applyTo = (function (arglist__11592){
var x = cljs.core.first(arglist__11592);
var y = cljs.core.first(cljs.core.next(arglist__11592));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11592)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11592)));
return G__11591__delegate.call(this, x, y, z, args);
});
return G__11591;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11579.call(this);
case  1 :
return sp1__11580.call(this,x);
case  2 :
return sp1__11581.call(this,x,y);
case  3 :
return sp1__11582.call(this,x,y,z);
default:
return sp1__11583.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11583.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11511 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11595 = (function (){
return null;
});
var sp2__11596 = (function (x){
var or__3548__auto____11442 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11442))
{return or__3548__auto____11442;
} else
{return p2.call(null,x);
}
});
var sp2__11597 = (function (x,y){
var or__3548__auto____11444 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11444))
{return or__3548__auto____11444;
} else
{var or__3548__auto____11446 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11446))
{return or__3548__auto____11446;
} else
{var or__3548__auto____11448 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11448))
{return or__3548__auto____11448;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11598 = (function (x,y,z){
var or__3548__auto____11449 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11449))
{return or__3548__auto____11449;
} else
{var or__3548__auto____11450 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11450))
{return or__3548__auto____11450;
} else
{var or__3548__auto____11451 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11451))
{return or__3548__auto____11451;
} else
{var or__3548__auto____11452 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11452))
{return or__3548__auto____11452;
} else
{var or__3548__auto____11453 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11453))
{return or__3548__auto____11453;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11599 = (function() { 
var G__11603__delegate = function (x,y,z,args){
var or__3548__auto____11454 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11454))
{return or__3548__auto____11454;
} else
{return cljs.core.some.call(null,(function (p1__11065_SHARP_){
var or__3548__auto____11456 = p1.call(null,p1__11065_SHARP_);

if(cljs.core.truth_(or__3548__auto____11456))
{return or__3548__auto____11456;
} else
{return p2.call(null,p1__11065_SHARP_);
}
}),args);
}
};
var G__11603 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11603__delegate.call(this, x, y, z, args);
};
G__11603.cljs$lang$maxFixedArity = 3;
G__11603.cljs$lang$applyTo = (function (arglist__11608){
var x = cljs.core.first(arglist__11608);
var y = cljs.core.first(cljs.core.next(arglist__11608));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11608)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11608)));
return G__11603__delegate.call(this, x, y, z, args);
});
return G__11603;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11595.call(this);
case  1 :
return sp2__11596.call(this,x);
case  2 :
return sp2__11597.call(this,x,y);
case  3 :
return sp2__11598.call(this,x,y,z);
default:
return sp2__11599.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11599.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11512 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11624 = (function (){
return null;
});
var sp3__11627 = (function (x){
var or__3548__auto____11457 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11457))
{return or__3548__auto____11457;
} else
{var or__3548__auto____11458 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11458))
{return or__3548__auto____11458;
} else
{return p3.call(null,x);
}
}
});
var sp3__11628 = (function (x,y){
var or__3548__auto____11460 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11460))
{return or__3548__auto____11460;
} else
{var or__3548__auto____11461 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11461))
{return or__3548__auto____11461;
} else
{var or__3548__auto____11463 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11463))
{return or__3548__auto____11463;
} else
{var or__3548__auto____11466 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11466))
{return or__3548__auto____11466;
} else
{var or__3548__auto____11471 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11471))
{return or__3548__auto____11471;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11629 = (function (x,y,z){
var or__3548__auto____11472 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11472))
{return or__3548__auto____11472;
} else
{var or__3548__auto____11473 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11473))
{return or__3548__auto____11473;
} else
{var or__3548__auto____11474 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11474))
{return or__3548__auto____11474;
} else
{var or__3548__auto____11475 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11475))
{return or__3548__auto____11475;
} else
{var or__3548__auto____11476 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11476))
{return or__3548__auto____11476;
} else
{var or__3548__auto____11478 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11478))
{return or__3548__auto____11478;
} else
{var or__3548__auto____11479 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11479))
{return or__3548__auto____11479;
} else
{var or__3548__auto____11480 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11480))
{return or__3548__auto____11480;
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
var sp3__11630 = (function() { 
var G__11649__delegate = function (x,y,z,args){
var or__3548__auto____11482 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11482))
{return or__3548__auto____11482;
} else
{return cljs.core.some.call(null,(function (p1__11066_SHARP_){
var or__3548__auto____11484 = p1.call(null,p1__11066_SHARP_);

if(cljs.core.truth_(or__3548__auto____11484))
{return or__3548__auto____11484;
} else
{var or__3548__auto____11485 = p2.call(null,p1__11066_SHARP_);

if(cljs.core.truth_(or__3548__auto____11485))
{return or__3548__auto____11485;
} else
{return p3.call(null,p1__11066_SHARP_);
}
}
}),args);
}
};
var G__11649 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11649__delegate.call(this, x, y, z, args);
};
G__11649.cljs$lang$maxFixedArity = 3;
G__11649.cljs$lang$applyTo = (function (arglist__11651){
var x = cljs.core.first(arglist__11651);
var y = cljs.core.first(cljs.core.next(arglist__11651));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11651)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11651)));
return G__11649__delegate.call(this, x, y, z, args);
});
return G__11649;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11624.call(this);
case  1 :
return sp3__11627.call(this,x);
case  2 :
return sp3__11628.call(this,x,y);
case  3 :
return sp3__11629.call(this,x,y,z);
default:
return sp3__11630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11630.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11513 = (function() { 
var G__11657__delegate = function (p1,p2,p3,ps){
var ps__11486 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11659 = (function (){
return null;
});
var spn__11660 = (function (x){
return cljs.core.some.call(null,(function (p1__11067_SHARP_){
return p1__11067_SHARP_.call(null,x);
}),ps__11486);
});
var spn__11661 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11069_SHARP_){
var or__3548__auto____11488 = p1__11069_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11488))
{return or__3548__auto____11488;
} else
{return p1__11069_SHARP_.call(null,y);
}
}),ps__11486);
});
var spn__11662 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11074_SHARP_){
var or__3548__auto____11490 = p1__11074_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11490))
{return or__3548__auto____11490;
} else
{var or__3548__auto____11492 = p1__11074_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11492))
{return or__3548__auto____11492;
} else
{return p1__11074_SHARP_.call(null,z);
}
}
}),ps__11486);
});
var spn__11664 = (function() { 
var G__11756__delegate = function (x,y,z,args){
var or__3548__auto____11495 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11495))
{return or__3548__auto____11495;
} else
{return cljs.core.some.call(null,(function (p1__11076_SHARP_){
return cljs.core.some.call(null,p1__11076_SHARP_,args);
}),ps__11486);
}
};
var G__11756 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11756__delegate.call(this, x, y, z, args);
};
G__11756.cljs$lang$maxFixedArity = 3;
G__11756.cljs$lang$applyTo = (function (arglist__11763){
var x = cljs.core.first(arglist__11763);
var y = cljs.core.first(cljs.core.next(arglist__11763));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11763)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11763)));
return G__11756__delegate.call(this, x, y, z, args);
});
return G__11756;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11659.call(this);
case  1 :
return spn__11660.call(this,x);
case  2 :
return spn__11661.call(this,x,y);
case  3 :
return spn__11662.call(this,x,y,z);
default:
return spn__11664.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11664.cljs$lang$applyTo;
return spn;
})()
};
var G__11657 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11657__delegate.call(this, p1, p2, p3, ps);
};
G__11657.cljs$lang$maxFixedArity = 3;
G__11657.cljs$lang$applyTo = (function (arglist__11764){
var p1 = cljs.core.first(arglist__11764);
var p2 = cljs.core.first(cljs.core.next(arglist__11764));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11764)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11764)));
return G__11657__delegate.call(this, p1, p2, p3, ps);
});
return G__11657;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11509.call(this,p1);
case  2 :
return some_fn__11511.call(this,p1,p2);
case  3 :
return some_fn__11512.call(this,p1,p2,p3);
default:
return some_fn__11513.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11513.cljs$lang$applyTo;
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
var map__11799 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11772 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11772))
{var s__11774 = temp__3698__auto____11772;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11774)),map.call(null,f,cljs.core.rest.call(null,s__11774)));
} else
{return null;
}
})));
});
var map__11800 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11775 = cljs.core.seq.call(null,c1);
var s2__11776 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11777 = s1__11775;

if(cljs.core.truth_(and__3546__auto____11777))
{return s2__11776;
} else
{return and__3546__auto____11777;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11775),cljs.core.first.call(null,s2__11776)),map.call(null,f,cljs.core.rest.call(null,s1__11775),cljs.core.rest.call(null,s2__11776)));
} else
{return null;
}
})));
});
var map__11801 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11780 = cljs.core.seq.call(null,c1);
var s2__11781 = cljs.core.seq.call(null,c2);
var s3__11784 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11786 = s1__11780;

if(cljs.core.truth_(and__3546__auto____11786))
{var and__3546__auto____11788 = s2__11781;

if(cljs.core.truth_(and__3546__auto____11788))
{return s3__11784;
} else
{return and__3546__auto____11788;
}
} else
{return and__3546__auto____11786;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11780),cljs.core.first.call(null,s2__11781),cljs.core.first.call(null,s3__11784)),map.call(null,f,cljs.core.rest.call(null,s1__11780),cljs.core.rest.call(null,s2__11781),cljs.core.rest.call(null,s3__11784)));
} else
{return null;
}
})));
});
var map__11802 = (function() { 
var G__11812__delegate = function (f,c1,c2,c3,colls){
var step__11796 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11793 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11793)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11793),step.call(null,map.call(null,cljs.core.rest,ss__11793)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11423_SHARP_){
return cljs.core.apply.call(null,f,p1__11423_SHARP_);
}),step__11796.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11812 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11812__delegate.call(this, f, c1, c2, c3, colls);
};
G__11812.cljs$lang$maxFixedArity = 4;
G__11812.cljs$lang$applyTo = (function (arglist__11816){
var f = cljs.core.first(arglist__11816);
var c1 = cljs.core.first(cljs.core.next(arglist__11816));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11816)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11816))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11816))));
return G__11812__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11812;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11799.call(this,f,c1);
case  3 :
return map__11800.call(this,f,c1,c2);
case  4 :
return map__11801.call(this,f,c1,c2,c3);
default:
return map__11802.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11802.cljs$lang$applyTo;
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
{var temp__3698__auto____11820 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11820))
{var s__11821 = temp__3698__auto____11820;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11821),take.call(null,(n - 1),cljs.core.rest.call(null,s__11821)));
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
var step__11833 = (function (n,coll){
while(true){
var s__11829 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11830 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11830))
{return s__11829;
} else
{return and__3546__auto____11830;
}
})()))
{{
var G__11838 = (n - 1);
var G__11839 = cljs.core.rest.call(null,s__11829);
n = G__11838;
coll = G__11839;
continue;
}
} else
{return s__11829;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11833.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11859 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11860 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11859.call(this,n);
case  2 :
return drop_last__11860.call(this,n,s);
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
var s__11869 = cljs.core.seq.call(null,coll);
var lead__11870 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11870))
{{
var G__11872 = cljs.core.next.call(null,s__11869);
var G__11873 = cljs.core.next.call(null,lead__11870);
s__11869 = G__11872;
lead__11870 = G__11873;
continue;
}
} else
{return s__11869;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11883 = (function (pred,coll){
while(true){
var s__11879 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11880 = s__11879;

if(cljs.core.truth_(and__3546__auto____11880))
{return pred.call(null,cljs.core.first.call(null,s__11879));
} else
{return and__3546__auto____11880;
}
})()))
{{
var G__11888 = pred;
var G__11889 = cljs.core.rest.call(null,s__11879);
pred = G__11888;
coll = G__11889;
continue;
}
} else
{return s__11879;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11883.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11893 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11893))
{var s__11896 = temp__3698__auto____11893;

return cljs.core.concat.call(null,s__11896,cycle.call(null,s__11896));
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
var repeat__11904 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11905 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11904.call(this,n);
case  2 :
return repeat__11905.call(this,n,x);
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
var repeatedly__11912 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11913 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11912.call(this,n);
case  2 :
return repeatedly__11913.call(this,n,f);
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
var interleave__11931 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11921 = cljs.core.seq.call(null,c1);
var s2__11922 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11923 = s1__11921;

if(cljs.core.truth_(and__3546__auto____11923))
{return s2__11922;
} else
{return and__3546__auto____11923;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11921),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11922),interleave.call(null,cljs.core.rest.call(null,s1__11921),cljs.core.rest.call(null,s2__11922))));
} else
{return null;
}
})));
});
var interleave__11932 = (function() { 
var G__11957__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11927 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11927)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11927),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11927)));
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
G__11957.cljs$lang$applyTo = (function (arglist__11962){
var c1 = cljs.core.first(arglist__11962);
var c2 = cljs.core.first(cljs.core.next(arglist__11962));
var colls = cljs.core.rest(cljs.core.next(arglist__11962));
return G__11957__delegate.call(this, c1, c2, colls);
});
return G__11957;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11931.call(this,c1,c2);
default:
return interleave__11932.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11932.cljs$lang$applyTo;
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
var cat__11970 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11966 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11966))
{var coll__11968 = temp__3695__auto____11966;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11968),cat.call(null,cljs.core.rest.call(null,coll__11968),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11970.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11975 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11976 = (function() { 
var G__11978__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11978 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11978__delegate.call(this, f, coll, colls);
};
G__11978.cljs$lang$maxFixedArity = 2;
G__11978.cljs$lang$applyTo = (function (arglist__11979){
var f = cljs.core.first(arglist__11979);
var coll = cljs.core.first(cljs.core.next(arglist__11979));
var colls = cljs.core.rest(cljs.core.next(arglist__11979));
return G__11978__delegate.call(this, f, coll, colls);
});
return G__11978;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11975.call(this,f,coll);
default:
return mapcat__11976.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11976.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11982 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11982))
{var s__11984 = temp__3698__auto____11982;

var f__11985 = cljs.core.first.call(null,s__11984);
var r__11986 = cljs.core.rest.call(null,s__11984);

if(cljs.core.truth_(pred.call(null,f__11985)))
{return cljs.core.cons.call(null,f__11985,filter.call(null,pred,r__11986));
} else
{return filter.call(null,pred,r__11986);
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
var walk__11994 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11994.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11993_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11993_SHARP_));
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
var partition__12036 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12037 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12027 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12027))
{var s__12029 = temp__3698__auto____12027;

var p__12030 = cljs.core.take.call(null,n,s__12029);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12030))))
{return cljs.core.cons.call(null,p__12030,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12029)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12038 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12033 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12033))
{var s__12034 = temp__3698__auto____12033;

var p__12035 = cljs.core.take.call(null,n,s__12034);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12035))))
{return cljs.core.cons.call(null,p__12035,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12034)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12035,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12036.call(this,n,step);
case  3 :
return partition__12037.call(this,n,step,pad);
case  4 :
return partition__12038.call(this,n,step,pad,coll);
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
var get_in__12053 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12054 = (function (m,ks,not_found){
var sentinel__12043 = cljs.core.lookup_sentinel;
var m__12044 = m;
var ks__12045 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12045))
{var m__12047 = cljs.core.get.call(null,m__12044,cljs.core.first.call(null,ks__12045),sentinel__12043);

if(cljs.core.truth_((sentinel__12043 === m__12047)))
{return not_found;
} else
{{
var G__12061 = sentinel__12043;
var G__12062 = m__12047;
var G__12063 = cljs.core.next.call(null,ks__12045);
sentinel__12043 = G__12061;
m__12044 = G__12062;
ks__12045 = G__12063;
continue;
}
}
} else
{return m__12044;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12053.call(this,m,ks);
case  3 :
return get_in__12054.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12064,v){
var vec__12066__12068 = p__12064;
var k__12070 = cljs.core.nth.call(null,vec__12066__12068,0,null);
var ks__12076 = cljs.core.nthnext.call(null,vec__12066__12068,1);

if(cljs.core.truth_(ks__12076))
{return cljs.core.assoc.call(null,m,k__12070,assoc_in.call(null,cljs.core.get.call(null,m,k__12070),ks__12076,v));
} else
{return cljs.core.assoc.call(null,m,k__12070,v);
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
var update_in__delegate = function (m,p__12078,f,args){
var vec__12080__12082 = p__12078;
var k__12084 = cljs.core.nth.call(null,vec__12080__12082,0,null);
var ks__12085 = cljs.core.nthnext.call(null,vec__12080__12082,1);

if(cljs.core.truth_(ks__12085))
{return cljs.core.assoc.call(null,m,k__12084,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12084),ks__12085,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12084,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12084),args));
}
};
var update_in = function (m,p__12078,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12078, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12095){
var m = cljs.core.first(arglist__12095);
var p__12078 = cljs.core.first(cljs.core.next(arglist__12095));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12095)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12095)));
return update_in__delegate.call(this, m, p__12078, f, args);
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
var this__12297 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12504 = null;
var G__12504__12505 = (function (coll,k){
var this__12320 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12504__12506 = (function (coll,k,not_found){
var this__12321 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12504 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12504__12505.call(this,coll,k);
case  3 :
return G__12504__12506.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12504;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12322 = this;
var new_array__12338 = cljs.core.aclone.call(null,this__12322.array);

(new_array__12338[k] = v);
return (new cljs.core.Vector(this__12322.meta,new_array__12338));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12520 = null;
var G__12520__12521 = (function (coll,k){
var this__12340 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12520__12522 = (function (coll,k,not_found){
var this__12342 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12520 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12520__12521.call(this,coll,k);
case  3 :
return G__12520__12522.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12520;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12346 = this;
var new_array__12401 = cljs.core.aclone.call(null,this__12346.array);

new_array__12401.push(o);
return (new cljs.core.Vector(this__12346.meta,new_array__12401));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12532 = null;
var G__12532__12533 = (function (v,f){
var this__12404 = this;
return cljs.core.ci_reduce.call(null,this__12404.array,f);
});
var G__12532__12534 = (function (v,f,start){
var this__12407 = this;
return cljs.core.ci_reduce.call(null,this__12407.array,f,start);
});
G__12532 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12532__12533.call(this,v,f);
case  3 :
return G__12532__12534.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12532;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12457 = this;
if(cljs.core.truth_((this__12457.array.length > 0)))
{var vector_seq__12467 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12457.array.length)))
{return cljs.core.cons.call(null,(this__12457.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12467.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12469 = this;
return this__12469.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12470 = this;
var count__12475 = this__12470.array.length;

if(cljs.core.truth_((count__12475 > 0)))
{return (this__12470.array[(count__12475 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12477 = this;
if(cljs.core.truth_((this__12477.array.length > 0)))
{var new_array__12479 = cljs.core.aclone.call(null,this__12477.array);

new_array__12479.pop();
return (new cljs.core.Vector(this__12477.meta,new_array__12479));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12485 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12487 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12488 = this;
return (new cljs.core.Vector(meta,this__12488.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12492 = this;
return this__12492.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12548 = null;
var G__12548__12549 = (function (coll,n){
var this__12494 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12495 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12495))
{return (n < this__12494.array.length);
} else
{return and__3546__auto____12495;
}
})()))
{return (this__12494.array[n]);
} else
{return null;
}
});
var G__12548__12550 = (function (coll,n,not_found){
var this__12497 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12498 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12498))
{return (n < this__12497.array.length);
} else
{return and__3546__auto____12498;
}
})()))
{return (this__12497.array[n]);
} else
{return not_found;
}
});
G__12548 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12548__12549.call(this,coll,n);
case  3 :
return G__12548__12550.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12548;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12500 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12500.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12569){
var args = cljs.core.seq( arglist__12569 );;
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
var this__12586 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12639 = null;
var G__12639__12640 = (function (coll,k){
var this__12591 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12639__12641 = (function (coll,k,not_found){
var this__12592 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12639 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12639__12640.call(this,coll,k);
case  3 :
return G__12639__12641.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12639;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12593 = this;
var v_pos__12595 = (this__12593.start + key);

return (new cljs.core.Subvec(this__12593.meta,cljs.core._assoc.call(null,this__12593.v,v_pos__12595,val),this__12593.start,((this__12593.end > (v_pos__12595 + 1)) ? this__12593.end : (v_pos__12595 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12647 = null;
var G__12647__12648 = (function (coll,k){
var this__12598 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12647__12649 = (function (coll,k,not_found){
var this__12599 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12647 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12647__12648.call(this,coll,k);
case  3 :
return G__12647__12649.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12647;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12600 = this;
return (new cljs.core.Subvec(this__12600.meta,cljs.core._assoc_n.call(null,this__12600.v,this__12600.end,o),this__12600.start,(this__12600.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12652 = null;
var G__12652__12653 = (function (coll,f){
var this__12603 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12652__12654 = (function (coll,f,start){
var this__12605 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12652 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12652__12653.call(this,coll,f);
case  3 :
return G__12652__12654.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12652;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12611 = this;
var subvec_seq__12614 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12611.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12611.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12614.call(null,this__12611.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12615 = this;
return (this__12615.end - this__12615.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12617 = this;
return cljs.core._nth.call(null,this__12617.v,(this__12617.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12619 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12619.start,this__12619.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12619.meta,this__12619.v,this__12619.start,(this__12619.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12622 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12623 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12625 = this;
return (new cljs.core.Subvec(meta,this__12625.v,this__12625.start,this__12625.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12626 = this;
return this__12626.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12713 = null;
var G__12713__12714 = (function (coll,n){
var this__12628 = this;
return cljs.core._nth.call(null,this__12628.v,(this__12628.start + n));
});
var G__12713__12715 = (function (coll,n,not_found){
var this__12632 = this;
return cljs.core._nth.call(null,this__12632.v,(this__12632.start + n),not_found);
});
G__12713 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12713__12714.call(this,coll,n);
case  3 :
return G__12713__12715.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12713;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12633 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12633.meta);
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
var subvec__12726 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12727 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12726.call(this,v,start);
case  3 :
return subvec__12727.call(this,v,start,end);
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
var this__12738 = this;
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
var this__12745 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12745.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12748 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12752 = this;
return cljs.core._first.call(null,this__12752.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12754 = this;
var temp__3695__auto____12756 = cljs.core.next.call(null,this__12754.front);

if(cljs.core.truth_(temp__3695__auto____12756))
{var f1__12757 = temp__3695__auto____12756;

return (new cljs.core.PersistentQueueSeq(this__12754.meta,f1__12757,this__12754.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12754.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12754.meta,this__12754.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12763 = this;
return this__12763.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12765 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12765.front,this__12765.rear));
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
var this__12792 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12794 = this;
if(cljs.core.truth_(this__12794.front))
{return (new cljs.core.PersistentQueue(this__12794.meta,(this__12794.count + 1),this__12794.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12798 = this__12794.rear;

if(cljs.core.truth_(or__3548__auto____12798))
{return or__3548__auto____12798;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12794.meta,(this__12794.count + 1),cljs.core.conj.call(null,this__12794.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12801 = this;
var rear__12803 = cljs.core.seq.call(null,this__12801.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12804 = this__12801.front;

if(cljs.core.truth_(or__3548__auto____12804))
{return or__3548__auto____12804;
} else
{return rear__12803;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12801.front,cljs.core.seq.call(null,rear__12803)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12805 = this;
return this__12805.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12806 = this;
return cljs.core._first.call(null,this__12806.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12807 = this;
if(cljs.core.truth_(this__12807.front))
{var temp__3695__auto____12808 = cljs.core.next.call(null,this__12807.front);

if(cljs.core.truth_(temp__3695__auto____12808))
{var f1__12809 = temp__3695__auto____12808;

return (new cljs.core.PersistentQueue(this__12807.meta,(this__12807.count - 1),f1__12809,this__12807.rear));
} else
{return (new cljs.core.PersistentQueue(this__12807.meta,(this__12807.count - 1),cljs.core.seq.call(null,this__12807.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12810 = this;
return cljs.core.first.call(null,this__12810.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12813 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12818 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12820 = this;
return (new cljs.core.PersistentQueue(meta,this__12820.count,this__12820.front,this__12820.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12821 = this;
return this__12821.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12823 = this;
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
var this__12841 = this;
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
var len__12852 = array.length;

var i__12854 = 0;

while(true){
if(cljs.core.truth_((i__12854 < len__12852)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12854]))))
{return i__12854;
} else
{{
var G__12866 = (i__12854 + incr);
i__12854 = G__12866;
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
var obj_map_contains_key_QMARK___12876 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12877 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12871 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12871))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12871;
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
return obj_map_contains_key_QMARK___12876.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12877.call(this,k,strobj,true_val,false_val);
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
var this__12929 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12998 = null;
var G__12998__12999 = (function (coll,k){
var this__12932 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12998__13000 = (function (coll,k,not_found){
var this__12934 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12934.strobj,(this__12934.strobj[k]),not_found);
});
G__12998 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12998__12999.call(this,coll,k);
case  3 :
return G__12998__13000.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12998;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12939 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12940 = goog.object.clone.call(null,this__12939.strobj);
var overwrite_QMARK___12942 = new_strobj__12940.hasOwnProperty(k);

(new_strobj__12940[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12942))
{return (new cljs.core.ObjMap(this__12939.meta,this__12939.keys,new_strobj__12940));
} else
{var new_keys__12944 = cljs.core.aclone.call(null,this__12939.keys);

new_keys__12944.push(k);
return (new cljs.core.ObjMap(this__12939.meta,new_keys__12944,new_strobj__12940));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12939.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12951 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12951.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13007 = null;
var G__13007__13008 = (function (coll,k){
var this__12952 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13007__13009 = (function (coll,k,not_found){
var this__12953 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13007 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13007__13008.call(this,coll,k);
case  3 :
return G__13007__13009.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13007;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12958 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12959 = this;
if(cljs.core.truth_((this__12959.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12891_SHARP_){
return cljs.core.vector.call(null,p1__12891_SHARP_,(this__12959.strobj[p1__12891_SHARP_]));
}),this__12959.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12970 = this;
return this__12970.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12972 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12974 = this;
return (new cljs.core.ObjMap(meta,this__12974.keys,this__12974.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12979 = this;
return this__12979.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12989 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12989.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12990 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12993 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12993))
{return this__12990.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12993;
}
})()))
{var new_keys__12994 = cljs.core.aclone.call(null,this__12990.keys);
var new_strobj__12995 = goog.object.clone.call(null,this__12990.strobj);

new_keys__12994.splice(cljs.core.scan_array.call(null,1,k,new_keys__12994),1);
cljs.core.js_delete.call(null,new_strobj__12995,k);
return (new cljs.core.ObjMap(this__12990.meta,new_keys__12994,new_strobj__12995));
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
var this__13049 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13225 = null;
var G__13225__13226 = (function (coll,k){
var this__13050 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13225__13227 = (function (coll,k,not_found){
var this__13051 = this;
var bucket__13053 = (this__13051.hashobj[cljs.core.hash.call(null,k)]);
var i__13054 = (cljs.core.truth_(bucket__13053)?cljs.core.scan_array.call(null,2,k,bucket__13053):null);

if(cljs.core.truth_(i__13054))
{return (bucket__13053[(i__13054 + 1)]);
} else
{return not_found;
}
});
G__13225 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13225__13226.call(this,coll,k);
case  3 :
return G__13225__13227.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13225;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13055 = this;
var h__13060 = cljs.core.hash.call(null,k);
var bucket__13061 = (this__13055.hashobj[h__13060]);

if(cljs.core.truth_(bucket__13061))
{var new_bucket__13063 = cljs.core.aclone.call(null,bucket__13061);
var new_hashobj__13064 = goog.object.clone.call(null,this__13055.hashobj);

(new_hashobj__13064[h__13060] = new_bucket__13063);
var temp__3695__auto____13068 = cljs.core.scan_array.call(null,2,k,new_bucket__13063);

if(cljs.core.truth_(temp__3695__auto____13068))
{var i__13070 = temp__3695__auto____13068;

(new_bucket__13063[(i__13070 + 1)] = v);
return (new cljs.core.HashMap(this__13055.meta,this__13055.count,new_hashobj__13064));
} else
{new_bucket__13063.push(k,v);
return (new cljs.core.HashMap(this__13055.meta,(this__13055.count + 1),new_hashobj__13064));
}
} else
{var new_hashobj__13113 = goog.object.clone.call(null,this__13055.hashobj);

(new_hashobj__13113[h__13060] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13055.meta,(this__13055.count + 1),new_hashobj__13113));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13132 = this;
var bucket__13192 = (this__13132.hashobj[cljs.core.hash.call(null,k)]);
var i__13193 = (cljs.core.truth_(bucket__13192)?cljs.core.scan_array.call(null,2,k,bucket__13192):null);

if(cljs.core.truth_(i__13193))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13285 = null;
var G__13285__13286 = (function (coll,k){
var this__13194 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13285__13287 = (function (coll,k,not_found){
var this__13196 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13285 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13285__13286.call(this,coll,k);
case  3 :
return G__13285__13287.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13285;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13197 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13200 = this;
if(cljs.core.truth_((this__13200.count > 0)))
{var hashes__13202 = cljs.core.js_keys.call(null,this__13200.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13039_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13200.hashobj[p1__13039_SHARP_])));
}),hashes__13202);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13203 = this;
return this__13203.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13204 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13205 = this;
return (new cljs.core.HashMap(meta,this__13205.count,this__13205.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13206 = this;
return this__13206.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13207 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13207.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13209 = this;
var h__13210 = cljs.core.hash.call(null,k);
var bucket__13212 = (this__13209.hashobj[h__13210]);
var i__13213 = (cljs.core.truth_(bucket__13212)?cljs.core.scan_array.call(null,2,k,bucket__13212):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13213)))
{return coll;
} else
{var new_hashobj__13215 = goog.object.clone.call(null,this__13209.hashobj);

if(cljs.core.truth_((3 > bucket__13212.length)))
{cljs.core.js_delete.call(null,new_hashobj__13215,h__13210);
} else
{var new_bucket__13218 = cljs.core.aclone.call(null,bucket__13212);

new_bucket__13218.splice(i__13213,2);
(new_hashobj__13215[h__13210] = new_bucket__13218);
}
return (new cljs.core.HashMap(this__13209.meta,(this__13209.count - 1),new_hashobj__13215));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13355 = ks.length;

var i__13357 = 0;
var out__13359 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13357 < len__13355)))
{{
var G__13360 = (i__13357 + 1);
var G__13361 = cljs.core.assoc.call(null,out__13359,(ks[i__13357]),(vs[i__13357]));
i__13357 = G__13360;
out__13359 = G__13361;
continue;
}
} else
{return out__13359;
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
var in$__13370 = cljs.core.seq.call(null,keyvals);
var out__13372 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13370))
{{
var G__13378 = cljs.core.nnext.call(null,in$__13370);
var G__13379 = cljs.core.assoc.call(null,out__13372,cljs.core.first.call(null,in$__13370),cljs.core.second.call(null,in$__13370));
in$__13370 = G__13378;
out__13372 = G__13379;
continue;
}
} else
{return out__13372;
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
hash_map.cljs$lang$applyTo = (function (arglist__13382){
var keyvals = cljs.core.seq( arglist__13382 );;
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
{return cljs.core.reduce.call(null,(function (p1__13389_SHARP_,p2__13391_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13400 = p1__13389_SHARP_;

if(cljs.core.truth_(or__3548__auto____13400))
{return or__3548__auto____13400;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13391_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13405){
var maps = cljs.core.seq( arglist__13405 );;
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
{var merge_entry__13418 = (function (m,e){
var k__13415 = cljs.core.first.call(null,e);
var v__13416 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13415)))
{return cljs.core.assoc.call(null,m,k__13415,f.call(null,cljs.core.get.call(null,m,k__13415),v__13416));
} else
{return cljs.core.assoc.call(null,m,k__13415,v__13416);
}
});
var merge2__13423 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13418,(function (){var or__3548__auto____13420 = m1;

if(cljs.core.truth_(or__3548__auto____13420))
{return or__3548__auto____13420;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13423,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13443){
var f = cljs.core.first(arglist__13443);
var maps = cljs.core.rest(arglist__13443);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13453 = cljs.core.ObjMap.fromObject([],{});
var keys__13454 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13454))
{var key__13456 = cljs.core.first.call(null,keys__13454);
var entry__13458 = cljs.core.get.call(null,map,key__13456,"﷐'user/not-found");

{
var G__13464 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13458,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13453,key__13456,entry__13458):ret__13453);
var G__13465 = cljs.core.next.call(null,keys__13454);
ret__13453 = G__13464;
keys__13454 = G__13465;
continue;
}
} else
{return ret__13453;
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
var this__13477 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13526 = null;
var G__13526__13527 = (function (coll,v){
var this__13480 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13526__13528 = (function (coll,v,not_found){
var this__13492 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13492.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13526 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13526__13527.call(this,coll,v);
case  3 :
return G__13526__13528.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13526;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13534 = null;
var G__13534__13535 = (function (coll,k){
var this__13493 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13534__13536 = (function (coll,k,not_found){
var this__13495 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13534 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13534__13535.call(this,coll,k);
case  3 :
return G__13534__13536.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13534;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13498 = this;
return (new cljs.core.Set(this__13498.meta,cljs.core.assoc.call(null,this__13498.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13503 = this;
return cljs.core.keys.call(null,this__13503.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13506 = this;
return (new cljs.core.Set(this__13506.meta,cljs.core.dissoc.call(null,this__13506.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13509 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13510 = this;
var and__3546__auto____13512 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13512))
{var and__3546__auto____13514 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13514))
{return cljs.core.every_QMARK_.call(null,(function (p1__13445_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13445_SHARP_);
}),other);
} else
{return and__3546__auto____13514;
}
} else
{return and__3546__auto____13512;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13518 = this;
return (new cljs.core.Set(meta,this__13518.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13519 = this;
return this__13519.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13520 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13520.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13566 = cljs.core.seq.call(null,coll);
var out__13567 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13566))))
{{
var G__13575 = cljs.core.rest.call(null,in$__13566);
var G__13576 = cljs.core.conj.call(null,out__13567,cljs.core.first.call(null,in$__13566));
in$__13566 = G__13575;
out__13567 = G__13576;
continue;
}
} else
{return out__13567;
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
{var n__13583 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13584 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13584))
{var e__13585 = temp__3695__auto____13584;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13585));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13583,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13562_SHARP_){
var temp__3695__auto____13586 = cljs.core.find.call(null,smap,p1__13562_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13586))
{var e__13588 = temp__3695__auto____13586;

return cljs.core.second.call(null,e__13588);
} else
{return p1__13562_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13606 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13595,seen){
while(true){
var vec__13597__13598 = p__13595;
var f__13600 = cljs.core.nth.call(null,vec__13597__13598,0,null);
var xs__13601 = vec__13597__13598;

var temp__3698__auto____13602 = cljs.core.seq.call(null,xs__13601);

if(cljs.core.truth_(temp__3698__auto____13602))
{var s__13603 = temp__3698__auto____13602;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13600)))
{{
var G__13610 = cljs.core.rest.call(null,s__13603);
var G__13611 = seen;
p__13595 = G__13610;
seen = G__13611;
continue;
}
} else
{return cljs.core.cons.call(null,f__13600,step.call(null,cljs.core.rest.call(null,s__13603),cljs.core.conj.call(null,seen,f__13600)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13606.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13615 = cljs.core.Vector.fromArray([]);
var s__13616 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13616)))
{{
var G__13617 = cljs.core.conj.call(null,ret__13615,cljs.core.first.call(null,s__13616));
var G__13618 = cljs.core.next.call(null,s__13616);
ret__13615 = G__13617;
s__13616 = G__13618;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13615);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13623 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13623))
{return or__3548__auto____13623;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13628 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13628 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13628 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13633 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13633))
{return or__3548__auto____13633;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13634 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13634 > -1)))
{return cljs.core.subs.call(null,x,2,i__13634);
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
var map__13637 = cljs.core.ObjMap.fromObject([],{});
var ks__13639 = cljs.core.seq.call(null,keys);
var vs__13640 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13642 = ks__13639;

if(cljs.core.truth_(and__3546__auto____13642))
{return vs__13640;
} else
{return and__3546__auto____13642;
}
})()))
{{
var G__13660 = cljs.core.assoc.call(null,map__13637,cljs.core.first.call(null,ks__13639),cljs.core.first.call(null,vs__13640));
var G__13661 = cljs.core.next.call(null,ks__13639);
var G__13662 = cljs.core.next.call(null,vs__13640);
map__13637 = G__13660;
ks__13639 = G__13661;
vs__13640 = G__13662;
continue;
}
} else
{return map__13637;
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
var max_key__13671 = (function (k,x){
return x;
});
var max_key__13673 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13674 = (function() { 
var G__13678__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13635_SHARP_,p2__13636_SHARP_){
return max_key.call(null,k,p1__13635_SHARP_,p2__13636_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13678 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13678__delegate.call(this, k, x, y, more);
};
G__13678.cljs$lang$maxFixedArity = 3;
G__13678.cljs$lang$applyTo = (function (arglist__13683){
var k = cljs.core.first(arglist__13683);
var x = cljs.core.first(cljs.core.next(arglist__13683));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13683)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13683)));
return G__13678__delegate.call(this, k, x, y, more);
});
return G__13678;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13671.call(this,k,x);
case  3 :
return max_key__13673.call(this,k,x,y);
default:
return max_key__13674.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13674.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13684 = (function (k,x){
return x;
});
var min_key__13685 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13686 = (function() { 
var G__13688__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13665_SHARP_,p2__13666_SHARP_){
return min_key.call(null,k,p1__13665_SHARP_,p2__13666_SHARP_);
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
G__13688.cljs$lang$applyTo = (function (arglist__13689){
var k = cljs.core.first(arglist__13689);
var x = cljs.core.first(cljs.core.next(arglist__13689));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13689)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13689)));
return G__13688__delegate.call(this, k, x, y, more);
});
return G__13688;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13684.call(this,k,x);
case  3 :
return min_key__13685.call(this,k,x,y);
default:
return min_key__13686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13686.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13695 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13696 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13690 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13690))
{var s__13692 = temp__3698__auto____13690;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13692),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13692)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13695.call(this,n,step);
case  3 :
return partition_all__13696.call(this,n,step,coll);
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
var temp__3698__auto____13707 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13707))
{var s__13708 = temp__3698__auto____13707;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13708))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13708),take_while.call(null,pred,cljs.core.rest.call(null,s__13708)));
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
var this__13845 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13858 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13956 = null;
var G__13956__13958 = (function (rng,f){
var this__13867 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13956__13961 = (function (rng,f,s){
var this__13868 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13956 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13956__13958.call(this,rng,f);
case  3 :
return G__13956__13961.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13956;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13873 = this;
var comp__13909 = (cljs.core.truth_((this__13873.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13909.call(null,this__13873.start,this__13873.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13911 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13911.end - this__13911.start) / this__13911.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13916 = this;
return this__13916.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13918 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13918.meta,(this__13918.start + this__13918.step),this__13918.end,this__13918.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13920 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13925 = this;
return (new cljs.core.Range(meta,this__13925.start,this__13925.end,this__13925.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13930 = this;
return this__13930.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13973 = null;
var G__13973__13974 = (function (rng,n){
var this__13947 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13947.start + (n * this__13947.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13949 = (this__13947.start > this__13947.end);

if(cljs.core.truth_(and__3546__auto____13949))
{return cljs.core._EQ_.call(null,this__13947.step,0);
} else
{return and__3546__auto____13949;
}
})()))
{return this__13947.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13973__13975 = (function (rng,n,not_found){
var this__13951 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13951.start + (n * this__13951.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13952 = (this__13951.start > this__13951.end);

if(cljs.core.truth_(and__3546__auto____13952))
{return cljs.core._EQ_.call(null,this__13951.step,0);
} else
{return and__3546__auto____13952;
}
})()))
{return this__13951.start;
} else
{return not_found;
}
}
});
G__13973 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13973__13974.call(this,rng,n);
case  3 :
return G__13973__13975.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13973;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13953 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13953.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13989 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13990 = (function (end){
return range.call(null,0,end,1);
});
var range__13991 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13992 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13989.call(this);
case  1 :
return range__13990.call(this,start);
case  2 :
return range__13991.call(this,start,end);
case  3 :
return range__13992.call(this,start,end,step);
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
var temp__3698__auto____14007 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14007))
{var s__14008 = temp__3698__auto____14007;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14008),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14008)));
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
var temp__3698__auto____14021 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14021))
{var s__14023 = temp__3698__auto____14021;

var fst__14029 = cljs.core.first.call(null,s__14023);
var fv__14030 = f.call(null,fst__14029);
var run__14033 = cljs.core.cons.call(null,fst__14029,cljs.core.take_while.call(null,(function (p1__14014_SHARP_){
return cljs.core._EQ_.call(null,fv__14030,f.call(null,p1__14014_SHARP_));
}),cljs.core.next.call(null,s__14023)));

return cljs.core.cons.call(null,run__14033,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14033),s__14023))));
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
var reductions__14117 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14103 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14103))
{var s__14105 = temp__3695__auto____14103;

return reductions.call(null,f,cljs.core.first.call(null,s__14105),cljs.core.rest.call(null,s__14105));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14118 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14111 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14111))
{var s__14113 = temp__3698__auto____14111;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14113)),cljs.core.rest.call(null,s__14113));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14117.call(this,f,init);
case  3 :
return reductions__14118.call(this,f,init,coll);
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
var juxt__14152 = (function (f){
return (function() {
var G__14157 = null;
var G__14157__14158 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14157__14159 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14157__14160 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14157__14161 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14157__14162 = (function() { 
var G__14164__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14164 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14164__delegate.call(this, x, y, z, args);
};
G__14164.cljs$lang$maxFixedArity = 3;
G__14164.cljs$lang$applyTo = (function (arglist__14165){
var x = cljs.core.first(arglist__14165);
var y = cljs.core.first(cljs.core.next(arglist__14165));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14165)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14165)));
return G__14164__delegate.call(this, x, y, z, args);
});
return G__14164;
})()
;
G__14157 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14157__14158.call(this);
case  1 :
return G__14157__14159.call(this,x);
case  2 :
return G__14157__14160.call(this,x,y);
case  3 :
return G__14157__14161.call(this,x,y,z);
default:
return G__14157__14162.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14157.cljs$lang$maxFixedArity = 3;
G__14157.cljs$lang$applyTo = G__14157__14162.cljs$lang$applyTo;
return G__14157;
})()
});
var juxt__14153 = (function (f,g){
return (function() {
var G__14166 = null;
var G__14166__14167 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14166__14168 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14166__14169 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14166__14170 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14166__14171 = (function() { 
var G__14177__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14177 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14177__delegate.call(this, x, y, z, args);
};
G__14177.cljs$lang$maxFixedArity = 3;
G__14177.cljs$lang$applyTo = (function (arglist__14183){
var x = cljs.core.first(arglist__14183);
var y = cljs.core.first(cljs.core.next(arglist__14183));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14183)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14183)));
return G__14177__delegate.call(this, x, y, z, args);
});
return G__14177;
})()
;
G__14166 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14166__14167.call(this);
case  1 :
return G__14166__14168.call(this,x);
case  2 :
return G__14166__14169.call(this,x,y);
case  3 :
return G__14166__14170.call(this,x,y,z);
default:
return G__14166__14171.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14166.cljs$lang$maxFixedArity = 3;
G__14166.cljs$lang$applyTo = G__14166__14171.cljs$lang$applyTo;
return G__14166;
})()
});
var juxt__14154 = (function (f,g,h){
return (function() {
var G__14185 = null;
var G__14185__14226 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14185__14228 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14185__14229 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14185__14230 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14185__14233 = (function() { 
var G__14241__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14241 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14241__delegate.call(this, x, y, z, args);
};
G__14241.cljs$lang$maxFixedArity = 3;
G__14241.cljs$lang$applyTo = (function (arglist__14244){
var x = cljs.core.first(arglist__14244);
var y = cljs.core.first(cljs.core.next(arglist__14244));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14244)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14244)));
return G__14241__delegate.call(this, x, y, z, args);
});
return G__14241;
})()
;
G__14185 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14185__14226.call(this);
case  1 :
return G__14185__14228.call(this,x);
case  2 :
return G__14185__14229.call(this,x,y);
case  3 :
return G__14185__14230.call(this,x,y,z);
default:
return G__14185__14233.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14185.cljs$lang$maxFixedArity = 3;
G__14185.cljs$lang$applyTo = G__14185__14233.cljs$lang$applyTo;
return G__14185;
})()
});
var juxt__14155 = (function() { 
var G__14246__delegate = function (f,g,h,fs){
var fs__14145 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14247 = null;
var G__14247__14248 = (function (){
return cljs.core.reduce.call(null,(function (p1__14079_SHARP_,p2__14082_SHARP_){
return cljs.core.conj.call(null,p1__14079_SHARP_,p2__14082_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14145);
});
var G__14247__14249 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14083_SHARP_,p2__14084_SHARP_){
return cljs.core.conj.call(null,p1__14083_SHARP_,p2__14084_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14145);
});
var G__14247__14250 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14085_SHARP_,p2__14086_SHARP_){
return cljs.core.conj.call(null,p1__14085_SHARP_,p2__14086_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14145);
});
var G__14247__14251 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14088_SHARP_,p2__14090_SHARP_){
return cljs.core.conj.call(null,p1__14088_SHARP_,p2__14090_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14145);
});
var G__14247__14252 = (function() { 
var G__14265__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14094_SHARP_,p2__14095_SHARP_){
return cljs.core.conj.call(null,p1__14094_SHARP_,cljs.core.apply.call(null,p2__14095_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14145);
};
var G__14265 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14265__delegate.call(this, x, y, z, args);
};
G__14265.cljs$lang$maxFixedArity = 3;
G__14265.cljs$lang$applyTo = (function (arglist__14267){
var x = cljs.core.first(arglist__14267);
var y = cljs.core.first(cljs.core.next(arglist__14267));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14267)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14267)));
return G__14265__delegate.call(this, x, y, z, args);
});
return G__14265;
})()
;
G__14247 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14247__14248.call(this);
case  1 :
return G__14247__14249.call(this,x);
case  2 :
return G__14247__14250.call(this,x,y);
case  3 :
return G__14247__14251.call(this,x,y,z);
default:
return G__14247__14252.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14247.cljs$lang$maxFixedArity = 3;
G__14247.cljs$lang$applyTo = G__14247__14252.cljs$lang$applyTo;
return G__14247;
})()
};
var G__14246 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14246__delegate.call(this, f, g, h, fs);
};
G__14246.cljs$lang$maxFixedArity = 3;
G__14246.cljs$lang$applyTo = (function (arglist__14270){
var f = cljs.core.first(arglist__14270);
var g = cljs.core.first(cljs.core.next(arglist__14270));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14270)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14270)));
return G__14246__delegate.call(this, f, g, h, fs);
});
return G__14246;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14152.call(this,f);
case  2 :
return juxt__14153.call(this,f,g);
case  3 :
return juxt__14154.call(this,f,g,h);
default:
return juxt__14155.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14155.cljs$lang$applyTo;
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
var dorun__14371 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14376 = cljs.core.next.call(null,coll);
coll = G__14376;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14372 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14274 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14274))
{return (n > 0);
} else
{return and__3546__auto____14274;
}
})()))
{{
var G__14384 = (n - 1);
var G__14385 = cljs.core.next.call(null,coll);
n = G__14384;
coll = G__14385;
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
return dorun__14371.call(this,n);
case  2 :
return dorun__14372.call(this,n,coll);
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
var doall__14407 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14408 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14407.call(this,n);
case  2 :
return doall__14408.call(this,n,coll);
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
var matches__14414 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14414),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14414),1)))
{return cljs.core.first.call(null,matches__14414);
} else
{return cljs.core.vec.call(null,matches__14414);
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
var matches__14427 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14427)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14427),1)))
{return cljs.core.first.call(null,matches__14427);
} else
{return cljs.core.vec.call(null,matches__14427);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14432 = cljs.core.re_find.call(null,re,s);
var match_idx__14433 = s.search(re);
var match_str__14437 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14432))?cljs.core.first.call(null,match_data__14432):match_data__14432);
var post_match__14439 = cljs.core.subs.call(null,s,(match_idx__14433 + cljs.core.count.call(null,match_str__14437)));

if(cljs.core.truth_(match_data__14432))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14432,re_seq.call(null,re,post_match__14439));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14447_SHARP_){
return print_one.call(null,p1__14447_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14468 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14468))
{var and__3546__auto____14473 = (function (){var x__445__auto____14470 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14471 = x__445__auto____14470;

if(cljs.core.truth_(and__3546__auto____14471))
{var and__3546__auto____14472 = x__445__auto____14470.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14472))
{return cljs.core.not.call(null,x__445__auto____14470.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14472;
}
} else
{return and__3546__auto____14471;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14470);
}
})();

if(cljs.core.truth_(and__3546__auto____14473))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14473;
}
} else
{return and__3546__auto____14468;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14476 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14477 = x__445__auto____14476;

if(cljs.core.truth_(and__3546__auto____14477))
{var and__3546__auto____14480 = x__445__auto____14476.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14480))
{return cljs.core.not.call(null,x__445__auto____14476.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14480;
}
} else
{return and__3546__auto____14477;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14476);
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
var first_obj__14490 = cljs.core.first.call(null,objs);
var sb__14491 = (new goog.string.StringBuffer());

var G__14492__14494 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14492__14494))
{var obj__14496 = cljs.core.first.call(null,G__14492__14494);
var G__14492__14497 = G__14492__14494;

while(true){
if(cljs.core.truth_((obj__14496 === first_obj__14490)))
{} else
{sb__14491.append(" ");
}
var G__14499__14506 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14496,opts));

if(cljs.core.truth_(G__14499__14506))
{var string__14507 = cljs.core.first.call(null,G__14499__14506);
var G__14499__14508 = G__14499__14506;

while(true){
sb__14491.append(string__14507);
var temp__3698__auto____14509 = cljs.core.next.call(null,G__14499__14508);

if(cljs.core.truth_(temp__3698__auto____14509))
{var G__14499__14510 = temp__3698__auto____14509;

{
var G__14513 = cljs.core.first.call(null,G__14499__14510);
var G__14514 = G__14499__14510;
string__14507 = G__14513;
G__14499__14508 = G__14514;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14511 = cljs.core.next.call(null,G__14492__14497);

if(cljs.core.truth_(temp__3698__auto____14511))
{var G__14492__14512 = temp__3698__auto____14511;

{
var G__14519 = cljs.core.first.call(null,G__14492__14512);
var G__14520 = G__14492__14512;
obj__14496 = G__14519;
G__14492__14497 = G__14520;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14491);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14526 = cljs.core.first.call(null,objs);

var G__14527__14529 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14527__14529))
{var obj__14532 = cljs.core.first.call(null,G__14527__14529);
var G__14527__14533 = G__14527__14529;

while(true){
if(cljs.core.truth_((obj__14532 === first_obj__14526)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14536__14538 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14532,opts));

if(cljs.core.truth_(G__14536__14538))
{var string__14540 = cljs.core.first.call(null,G__14536__14538);
var G__14536__14541 = G__14536__14538;

while(true){
cljs.core.string_print.call(null,string__14540);
var temp__3698__auto____14544 = cljs.core.next.call(null,G__14536__14541);

if(cljs.core.truth_(temp__3698__auto____14544))
{var G__14536__14545 = temp__3698__auto____14544;

{
var G__14553 = cljs.core.first.call(null,G__14536__14545);
var G__14554 = G__14536__14545;
string__14540 = G__14553;
G__14536__14541 = G__14554;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14546 = cljs.core.next.call(null,G__14527__14533);

if(cljs.core.truth_(temp__3698__auto____14546))
{var G__14527__14547 = temp__3698__auto____14546;

{
var G__14555 = cljs.core.first.call(null,G__14527__14547);
var G__14556 = G__14527__14547;
obj__14532 = G__14555;
G__14527__14533 = G__14556;
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
pr_str.cljs$lang$applyTo = (function (arglist__14616){
var objs = cljs.core.seq( arglist__14616 );;
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
pr.cljs$lang$applyTo = (function (arglist__14622){
var objs = cljs.core.seq( arglist__14622 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14631){
var objs = cljs.core.seq( arglist__14631 );;
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
println.cljs$lang$applyTo = (function (arglist__14636){
var objs = cljs.core.seq( arglist__14636 );;
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
prn.cljs$lang$applyTo = (function (arglist__14640){
var objs = cljs.core.seq( arglist__14640 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14641 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14641,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14684 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14684))
{var nspc__14688 = temp__3698__auto____14684;

return cljs.core.str.call(null,nspc__14688,"/");
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
var pr_pair__14727 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14727,"{",", ","}",opts,coll);
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
var this__14769 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14774 = this;
var G__14775__14777 = cljs.core.seq.call(null,this__14774.watches);

if(cljs.core.truth_(G__14775__14777))
{var G__14781__14783 = cljs.core.first.call(null,G__14775__14777);
var vec__14782__14784 = G__14781__14783;
var key__14786 = cljs.core.nth.call(null,vec__14782__14784,0,null);
var f__14787 = cljs.core.nth.call(null,vec__14782__14784,1,null);
var G__14775__14789 = G__14775__14777;

var G__14781__14790 = G__14781__14783;
var G__14775__14791 = G__14775__14789;

while(true){
var vec__14793__14794 = G__14781__14790;
var key__14796 = cljs.core.nth.call(null,vec__14793__14794,0,null);
var f__14797 = cljs.core.nth.call(null,vec__14793__14794,1,null);
var G__14775__14798 = G__14775__14791;

f__14797.call(null,key__14796,this$,oldval,newval);
var temp__3698__auto____14800 = cljs.core.next.call(null,G__14775__14798);

if(cljs.core.truth_(temp__3698__auto____14800))
{var G__14775__14802 = temp__3698__auto____14800;

{
var G__14817 = cljs.core.first.call(null,G__14775__14802);
var G__14818 = G__14775__14802;
G__14781__14790 = G__14817;
G__14775__14791 = G__14818;
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
var this__14804 = this;
return this$.watches = cljs.core.assoc.call(null,this__14804.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14805 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14805.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14807 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14807.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14808 = this;
return this__14808.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14811 = this;
return this__14811.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14812 = this;
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
var atom__14935 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14936 = (function() { 
var G__14938__delegate = function (x,p__14826){
var map__14925__14927 = p__14826;
var map__14925__14928 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14925__14927))?cljs.core.apply.call(null,cljs.core.hash_map,map__14925__14927):map__14925__14927);
var validator__14929 = cljs.core.get.call(null,map__14925__14928,"﷐'validator");
var meta__14931 = cljs.core.get.call(null,map__14925__14928,"﷐'meta");

return (new cljs.core.Atom(x,meta__14931,validator__14929,null));
};
var G__14938 = function (x,var_args){
var p__14826 = null;
if (goog.isDef(var_args)) {
  p__14826 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14938__delegate.call(this, x, p__14826);
};
G__14938.cljs$lang$maxFixedArity = 1;
G__14938.cljs$lang$applyTo = (function (arglist__14940){
var x = cljs.core.first(arglist__14940);
var p__14826 = cljs.core.rest(arglist__14940);
return G__14938__delegate.call(this, x, p__14826);
});
return G__14938;
})()
;
atom = function(x,var_args){
var p__14826 = var_args;
switch(arguments.length){
case  1 :
return atom__14935.call(this,x);
default:
return atom__14936.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14936.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14951 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14951))
{var validate__14953 = temp__3698__auto____14951;

if(cljs.core.truth_(validate__14953.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14954 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14954,new_value);
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
var swap_BANG___14968 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14969 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14970 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14971 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14972 = (function() { 
var G__14979__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14979 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14979__delegate.call(this, a, f, x, y, z, more);
};
G__14979.cljs$lang$maxFixedArity = 5;
G__14979.cljs$lang$applyTo = (function (arglist__14981){
var a = cljs.core.first(arglist__14981);
var f = cljs.core.first(cljs.core.next(arglist__14981));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14981)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14981))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14981)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14981)))));
return G__14979__delegate.call(this, a, f, x, y, z, more);
});
return G__14979;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14968.call(this,a,f);
case  3 :
return swap_BANG___14969.call(this,a,f,x);
case  4 :
return swap_BANG___14970.call(this,a,f,x,y);
case  5 :
return swap_BANG___14971.call(this,a,f,x,y,z);
default:
return swap_BANG___14972.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14972.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15001){
var iref = cljs.core.first(arglist__15001);
var f = cljs.core.first(cljs.core.next(arglist__15001));
var args = cljs.core.rest(cljs.core.next(arglist__15001));
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
var gensym__15013 = (function (){
return gensym.call(null,"G__");
});
var gensym__15014 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__15013.call(this);
case  1 :
return gensym__15014.call(this,prefix_string);
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
var this__15120 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__15120.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15121 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__15121.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__15121.state,this__15121.f);
}
return cljs.core.deref.call(null,this__15121.state);
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
delay.cljs$lang$applyTo = (function (arglist__15186){
var body = cljs.core.seq( arglist__15186 );;
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
var map__15194__15195 = options;
var map__15194__15196 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15194__15195))?cljs.core.apply.call(null,cljs.core.hash_map,map__15194__15195):map__15194__15195);
var keywordize_keys__15197 = cljs.core.get.call(null,map__15194__15196,"﷐'keywordize-keys");
var keyfn__15198 = (cljs.core.truth_(keywordize_keys__15197)?cljs.core.keyword:cljs.core.str);
var f__15204 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15203 = (function iter__15199(s__15200){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15200__15201 = s__15200;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15200__15201)))
{var k__15202 = cljs.core.first.call(null,s__15200__15201);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15198.call(null,k__15202),thisfn.call(null,(x[k__15202]))]),iter__15199.call(null,cljs.core.rest.call(null,s__15200__15201)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15203.call(null,cljs.core.js_keys.call(null,x));
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

return f__15204.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15211){
var x = cljs.core.first(arglist__15211);
var options = cljs.core.rest(arglist__15211);
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
var mem__15212 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15219__delegate = function (args){
var temp__3695__auto____15213 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15212),args);

if(cljs.core.truth_(temp__3695__auto____15213))
{var v__15214 = temp__3695__auto____15213;

return v__15214;
} else
{var ret__15215 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15212,cljs.core.assoc,args,ret__15215);
return ret__15215;
}
};
var G__15219 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15219__delegate.call(this, args);
};
G__15219.cljs$lang$maxFixedArity = 0;
G__15219.cljs$lang$applyTo = (function (arglist__15220){
var args = cljs.core.seq( arglist__15220 );;
return G__15219__delegate.call(this, args);
});
return G__15219;
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
var trampoline__15222 = (function (f){
while(true){
var ret__15221 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15221)))
{{
var G__15225 = ret__15221;
f = G__15225;
continue;
}
} else
{return ret__15221;
}
break;
}
});
var trampoline__15223 = (function() { 
var G__15226__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15226 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15226__delegate.call(this, f, args);
};
G__15226.cljs$lang$maxFixedArity = 1;
G__15226.cljs$lang$applyTo = (function (arglist__15227){
var f = cljs.core.first(arglist__15227);
var args = cljs.core.rest(arglist__15227);
return G__15226__delegate.call(this, f, args);
});
return G__15226;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15222.call(this,f);
default:
return trampoline__15223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15223.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15308 = (function (){
return rand.call(null,1);
});
var rand__15309 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15308.call(this);
case  1 :
return rand__15309.call(this,n);
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
var k__15331 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15331,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15331,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15362 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15363 = (function (h,child,parent){
var or__3548__auto____15347 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15347))
{return or__3548__auto____15347;
} else
{var or__3548__auto____15348 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15348))
{return or__3548__auto____15348;
} else
{var and__3546__auto____15350 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15350))
{var and__3546__auto____15351 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15351))
{var and__3546__auto____15352 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15352))
{var ret__15353 = true;
var i__15354 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15356 = cljs.core.not.call(null,ret__15353);

if(cljs.core.truth_(or__3548__auto____15356))
{return or__3548__auto____15356;
} else
{return cljs.core._EQ_.call(null,i__15354,cljs.core.count.call(null,parent));
}
})()))
{return ret__15353;
} else
{{
var G__15373 = isa_QMARK_.call(null,h,child.call(null,i__15354),parent.call(null,i__15354));
var G__15374 = (i__15354 + 1);
ret__15353 = G__15373;
i__15354 = G__15374;
continue;
}
}
break;
}
} else
{return and__3546__auto____15352;
}
} else
{return and__3546__auto____15351;
}
} else
{return and__3546__auto____15350;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15362.call(this,h,child);
case  3 :
return isa_QMARK___15363.call(this,h,child,parent);
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
var parents__15376 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15377 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15376.call(this,h);
case  2 :
return parents__15377.call(this,h,tag);
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
var ancestors__15379 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15380 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15379.call(this,h);
case  2 :
return ancestors__15380.call(this,h,tag);
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
var descendants__15385 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15386 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15385.call(this,h);
case  2 :
return descendants__15386.call(this,h,tag);
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
var derive__15473 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15474 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15459 = "﷐'parents".call(null,h);
var td__15461 = "﷐'descendants".call(null,h);
var ta__15462 = "﷐'ancestors".call(null,h);
var tf__15466 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15472 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15459.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15462.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15462.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15459,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15466.call(null,"﷐'ancestors".call(null,h),tag,td__15461,parent,ta__15462),"﷐'descendants":tf__15466.call(null,"﷐'descendants".call(null,h),parent,ta__15462,tag,td__15461)});
})());

if(cljs.core.truth_(or__3548__auto____15472))
{return or__3548__auto____15472;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15473.call(this,h,tag);
case  3 :
return derive__15474.call(this,h,tag,parent);
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
var underive__15506 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15507 = (function (h,tag,parent){
var parentMap__15493 = "﷐'parents".call(null,h);
var childsParents__15496 = (cljs.core.truth_(parentMap__15493.call(null,tag))?cljs.core.disj.call(null,parentMap__15493.call(null,tag),parent):cljs.core.set([]));
var newParents__15497 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15496))?cljs.core.assoc.call(null,parentMap__15493,tag,childsParents__15496):cljs.core.dissoc.call(null,parentMap__15493,tag));
var deriv_seq__15501 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15439_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15439_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15439_SHARP_),cljs.core.second.call(null,p1__15439_SHARP_)));
}),cljs.core.seq.call(null,newParents__15497)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15493.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15444_SHARP_,p2__15447_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15444_SHARP_,p2__15447_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15501));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15506.call(this,h,tag);
case  3 :
return underive__15507.call(this,h,tag,parent);
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
var xprefs__15526 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15529 = (cljs.core.truth_((function (){var and__3546__auto____15528 = xprefs__15526;

if(cljs.core.truth_(and__3546__auto____15528))
{return xprefs__15526.call(null,y);
} else
{return and__3546__auto____15528;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15529))
{return or__3548__auto____15529;
} else
{var or__3548__auto____15535 = (function (){var ps__15533 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15533) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15533),prefer_table)))
{} else
{}
{
var G__15544 = cljs.core.rest.call(null,ps__15533);
ps__15533 = G__15544;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15535))
{return or__3548__auto____15535;
} else
{var or__3548__auto____15538 = (function (){var ps__15536 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15536) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15536),y,prefer_table)))
{} else
{}
{
var G__15577 = cljs.core.rest.call(null,ps__15536);
ps__15536 = G__15577;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15538))
{return or__3548__auto____15538;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15588 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15588))
{return or__3548__auto____15588;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15604 = cljs.core.reduce.call(null,(function (be,p__15596){
var vec__15597__15598 = p__15596;
var k__15599 = cljs.core.nth.call(null,vec__15597__15598,0,null);
var ___15600 = cljs.core.nth.call(null,vec__15597__15598,1,null);
var e__15601 = vec__15597__15598;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15599)))
{var be2__15603 = (cljs.core.truth_((function (){var or__3548__auto____15602 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15602))
{return or__3548__auto____15602;
} else
{return cljs.core.dominates.call(null,k__15599,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15601:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15603),k__15599,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15599," and ",cljs.core.first.call(null,be2__15603),", and neither is preferred")));
}
return be2__15603;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15604))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15604));
return cljs.core.second.call(null,best_entry__15604);
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
if(cljs.core.truth_((function (){var and__3546__auto____15621 = mf;

if(cljs.core.truth_(and__3546__auto____15621))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15621;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15626 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15626))
{return or__3548__auto____15626;
} else
{var or__3548__auto____15627 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15627))
{return or__3548__auto____15627;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15630 = mf;

if(cljs.core.truth_(and__3546__auto____15630))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15630;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15631 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15631))
{return or__3548__auto____15631;
} else
{var or__3548__auto____15633 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15633))
{return or__3548__auto____15633;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15634 = mf;

if(cljs.core.truth_(and__3546__auto____15634))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15634;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15637 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15637))
{return or__3548__auto____15637;
} else
{var or__3548__auto____15638 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15638))
{return or__3548__auto____15638;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15639 = mf;

if(cljs.core.truth_(and__3546__auto____15639))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15639;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15640 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15640))
{return or__3548__auto____15640;
} else
{var or__3548__auto____15641 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15641))
{return or__3548__auto____15641;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15642 = mf;

if(cljs.core.truth_(and__3546__auto____15642))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15642;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15643 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15643))
{return or__3548__auto____15643;
} else
{var or__3548__auto____15644 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15644))
{return or__3548__auto____15644;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15645 = mf;

if(cljs.core.truth_(and__3546__auto____15645))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15645;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15646 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15646))
{return or__3548__auto____15646;
} else
{var or__3548__auto____15647 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15647))
{return or__3548__auto____15647;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15648 = mf;

if(cljs.core.truth_(and__3546__auto____15648))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15648;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15649 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15649))
{return or__3548__auto____15649;
} else
{var or__3548__auto____15650 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15650))
{return or__3548__auto____15650;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15651 = mf;

if(cljs.core.truth_(and__3546__auto____15651))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15651;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15655 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15655))
{return or__3548__auto____15655;
} else
{var or__3548__auto____15656 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15656))
{return or__3548__auto____15656;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15694 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15695 = cljs.core._get_method.call(null,mf,dispatch_val__15694);

if(cljs.core.truth_(target_fn__15695))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15694)));
}
return cljs.core.apply.call(null,target_fn__15695,args);
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
var this__15698 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15701 = this;
cljs.core.swap_BANG_.call(null,this__15701.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15701.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15701.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15701.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15703 = this;
cljs.core.swap_BANG_.call(null,this__15703.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15703.method_cache,this__15703.method_table,this__15703.cached_hierarchy,this__15703.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15705 = this;
cljs.core.swap_BANG_.call(null,this__15705.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15705.method_cache,this__15705.method_table,this__15705.cached_hierarchy,this__15705.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15706 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15706.cached_hierarchy),cljs.core.deref.call(null,this__15706.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15706.method_cache,this__15706.method_table,this__15706.cached_hierarchy,this__15706.hierarchy);
}
var temp__3695__auto____15710 = cljs.core.deref.call(null,this__15706.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15710))
{var target_fn__15711 = temp__3695__auto____15710;

return target_fn__15711;
} else
{var temp__3695__auto____15712 = cljs.core.find_and_cache_best_method.call(null,this__15706.name,dispatch_val,this__15706.hierarchy,this__15706.method_table,this__15706.prefer_table,this__15706.method_cache,this__15706.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15712))
{var target_fn__15713 = temp__3695__auto____15712;

return target_fn__15713;
} else
{return cljs.core.deref.call(null,this__15706.method_table).call(null,this__15706.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15714 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15714.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15714.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15714.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15714.method_cache,this__15714.method_table,this__15714.cached_hierarchy,this__15714.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15717 = this;
return cljs.core.deref.call(null,this__15717.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15719 = this;
return cljs.core.deref.call(null,this__15719.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15721 = this;
return cljs.core.do_dispatch.call(null,mf,this__15721.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15732__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15732 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15732__delegate.call(this, _, args);
};
G__15732.cljs$lang$maxFixedArity = 1;
G__15732.cljs$lang$applyTo = (function (arglist__15734){
var _ = cljs.core.first(arglist__15734);
var args = cljs.core.rest(arglist__15734);
return G__15732__delegate.call(this, _, args);
});
return G__15732;
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
