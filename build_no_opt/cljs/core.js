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
var or__3548__auto____7267 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7267))
{return or__3548__auto____7267;
} else
{var or__3548__auto____7268 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7268))
{return or__3548__auto____7268;
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
var _invoke__7541 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7276 = this$;

if(cljs.core.truth_(and__3546__auto____7276))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7276;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7278 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7278))
{return or__3548__auto____7278;
} else
{var or__3548__auto____7280 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7280))
{return or__3548__auto____7280;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7547 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7282 = this$;

if(cljs.core.truth_(and__3546__auto____7282))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7282;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7286 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7286))
{return or__3548__auto____7286;
} else
{var or__3548__auto____7287 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7287))
{return or__3548__auto____7287;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7549 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7292 = this$;

if(cljs.core.truth_(and__3546__auto____7292))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7292;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7294 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7294))
{return or__3548__auto____7294;
} else
{var or__3548__auto____7295 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7295))
{return or__3548__auto____7295;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7550 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7298 = this$;

if(cljs.core.truth_(and__3546__auto____7298))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7298;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7301 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7301))
{return or__3548__auto____7301;
} else
{var or__3548__auto____7302 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7302))
{return or__3548__auto____7302;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7551 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7316 = this$;

if(cljs.core.truth_(and__3546__auto____7316))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7316;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7319 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7319))
{return or__3548__auto____7319;
} else
{var or__3548__auto____7321 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7321))
{return or__3548__auto____7321;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7552 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7324 = this$;

if(cljs.core.truth_(and__3546__auto____7324))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7324;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7328 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7328))
{return or__3548__auto____7328;
} else
{var or__3548__auto____7330 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7330))
{return or__3548__auto____7330;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7553 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7333 = this$;

if(cljs.core.truth_(and__3546__auto____7333))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7333;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7335 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7335))
{return or__3548__auto____7335;
} else
{var or__3548__auto____7337 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7337))
{return or__3548__auto____7337;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7554 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7339 = this$;

if(cljs.core.truth_(and__3546__auto____7339))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7339;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7342 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7342))
{return or__3548__auto____7342;
} else
{var or__3548__auto____7344 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7344))
{return or__3548__auto____7344;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7555 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7347 = this$;

if(cljs.core.truth_(and__3546__auto____7347))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7347;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7352 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7352))
{return or__3548__auto____7352;
} else
{var or__3548__auto____7353 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7353))
{return or__3548__auto____7353;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7557 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7357 = this$;

if(cljs.core.truth_(and__3546__auto____7357))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7357;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7362 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7362))
{return or__3548__auto____7362;
} else
{var or__3548__auto____7363 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7363))
{return or__3548__auto____7363;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7558 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7368 = this$;

if(cljs.core.truth_(and__3546__auto____7368))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7368;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7373 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7373))
{return or__3548__auto____7373;
} else
{var or__3548__auto____7376 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7376))
{return or__3548__auto____7376;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7559 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7381 = this$;

if(cljs.core.truth_(and__3546__auto____7381))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7381;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7385 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7385))
{return or__3548__auto____7385;
} else
{var or__3548__auto____7388 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7388))
{return or__3548__auto____7388;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7560 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7393 = this$;

if(cljs.core.truth_(and__3546__auto____7393))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7393;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7397 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7397))
{return or__3548__auto____7397;
} else
{var or__3548__auto____7400 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7400))
{return or__3548__auto____7400;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7561 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7405 = this$;

if(cljs.core.truth_(and__3546__auto____7405))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7405;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7409 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7409))
{return or__3548__auto____7409;
} else
{var or__3548__auto____7412 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7412))
{return or__3548__auto____7412;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7562 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7417 = this$;

if(cljs.core.truth_(and__3546__auto____7417))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7417;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7563 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7428 = this$;

if(cljs.core.truth_(and__3546__auto____7428))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7428;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7431 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7431))
{return or__3548__auto____7431;
} else
{var or__3548__auto____7435 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7435))
{return or__3548__auto____7435;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7564 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7439 = this$;

if(cljs.core.truth_(and__3546__auto____7439))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7439;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7443 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7443))
{return or__3548__auto____7443;
} else
{var or__3548__auto____7446 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7446))
{return or__3548__auto____7446;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7565 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7460 = this$;

if(cljs.core.truth_(and__3546__auto____7460))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7460;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7461 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7461))
{return or__3548__auto____7461;
} else
{var or__3548__auto____7465 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7465))
{return or__3548__auto____7465;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7566 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7470 = this$;

if(cljs.core.truth_(and__3546__auto____7470))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7470;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7567 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7497 = this$;

if(cljs.core.truth_(and__3546__auto____7497))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7497;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7500 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7500))
{return or__3548__auto____7500;
} else
{var or__3548__auto____7502 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7502))
{return or__3548__auto____7502;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7569 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7507 = this$;

if(cljs.core.truth_(and__3546__auto____7507))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7507;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7517 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7517))
{return or__3548__auto____7517;
} else
{var or__3548__auto____7532 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7532))
{return or__3548__auto____7532;
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
return _invoke__7541.call(this,this$);
case  2 :
return _invoke__7547.call(this,this$,a);
case  3 :
return _invoke__7549.call(this,this$,a,b);
case  4 :
return _invoke__7550.call(this,this$,a,b,c);
case  5 :
return _invoke__7551.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7552.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7553.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7554.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7555.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7557.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7558.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7559.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7560.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7561.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7562.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7563.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7564.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7565.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7566.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7567.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7569.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7699 = coll;

if(cljs.core.truth_(and__3546__auto____7699))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7699;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7700 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7700))
{return or__3548__auto____7700;
} else
{var or__3548__auto____7701 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7701))
{return or__3548__auto____7701;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7705 = coll;

if(cljs.core.truth_(and__3546__auto____7705))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7705;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7706 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7706))
{return or__3548__auto____7706;
} else
{var or__3548__auto____7707 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7707))
{return or__3548__auto____7707;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7711 = coll;

if(cljs.core.truth_(and__3546__auto____7711))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7711;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7712 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7712))
{return or__3548__auto____7712;
} else
{var or__3548__auto____7713 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7713))
{return or__3548__auto____7713;
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
var _nth__7792 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7720 = coll;

if(cljs.core.truth_(and__3546__auto____7720))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7720;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7722 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7722))
{return or__3548__auto____7722;
} else
{var or__3548__auto____7724 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7724))
{return or__3548__auto____7724;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7793 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7727 = coll;

if(cljs.core.truth_(and__3546__auto____7727))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7727;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7729 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7729))
{return or__3548__auto____7729;
} else
{var or__3548__auto____7731 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7731))
{return or__3548__auto____7731;
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
return _nth__7792.call(this,coll,n);
case  3 :
return _nth__7793.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7817 = coll;

if(cljs.core.truth_(and__3546__auto____7817))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7817;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7827 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7827))
{return or__3548__auto____7827;
} else
{var or__3548__auto____7829 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7829))
{return or__3548__auto____7829;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7832 = coll;

if(cljs.core.truth_(and__3546__auto____7832))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7832;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7836 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7836))
{return or__3548__auto____7836;
} else
{var or__3548__auto____7837 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7837))
{return or__3548__auto____7837;
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
var _lookup__7930 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7854 = o;

if(cljs.core.truth_(and__3546__auto____7854))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7854;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7898 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7898))
{return or__3548__auto____7898;
} else
{var or__3548__auto____7900 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7900))
{return or__3548__auto____7900;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7931 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7904 = o;

if(cljs.core.truth_(and__3546__auto____7904))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7904;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7926 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7926))
{return or__3548__auto____7926;
} else
{var or__3548__auto____7928 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7928))
{return or__3548__auto____7928;
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
return _lookup__7930.call(this,o,k);
case  3 :
return _lookup__7931.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7946 = coll;

if(cljs.core.truth_(and__3546__auto____7946))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7946;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7948 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7948))
{return or__3548__auto____7948;
} else
{var or__3548__auto____7950 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7950))
{return or__3548__auto____7950;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7952 = coll;

if(cljs.core.truth_(and__3546__auto____7952))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7952;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7956 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7956))
{return or__3548__auto____7956;
} else
{var or__3548__auto____7957 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7957))
{return or__3548__auto____7957;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7969 = coll;

if(cljs.core.truth_(and__3546__auto____7969))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7969;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7971 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7971))
{return or__3548__auto____7971;
} else
{var or__3548__auto____7973 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7973))
{return or__3548__auto____7973;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7980 = coll;

if(cljs.core.truth_(and__3546__auto____7980))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7980;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7984 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7984))
{return or__3548__auto____7984;
} else
{var or__3548__auto____7986 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7986))
{return or__3548__auto____7986;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7991 = coll;

if(cljs.core.truth_(and__3546__auto____7991))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7991;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7994 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7994))
{return or__3548__auto____7994;
} else
{var or__3548__auto____7996 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7996))
{return or__3548__auto____7996;
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
if(cljs.core.truth_((function (){var and__3546__auto____8017 = coll;

if(cljs.core.truth_(and__3546__auto____8017))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8017;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8019 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
} else
{var or__3548__auto____8022 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8022))
{return or__3548__auto____8022;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8030 = o;

if(cljs.core.truth_(and__3546__auto____8030))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8030;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8031 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8031))
{return or__3548__auto____8031;
} else
{var or__3548__auto____8033 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8033))
{return or__3548__auto____8033;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8042 = o;

if(cljs.core.truth_(and__3546__auto____8042))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8042;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8046 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8046))
{return or__3548__auto____8046;
} else
{var or__3548__auto____8048 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8048))
{return or__3548__auto____8048;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8050 = o;

if(cljs.core.truth_(and__3546__auto____8050))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8050;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8051 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8051))
{return or__3548__auto____8051;
} else
{var or__3548__auto____8053 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8053))
{return or__3548__auto____8053;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8056 = o;

if(cljs.core.truth_(and__3546__auto____8056))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8056;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8058 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8058))
{return or__3548__auto____8058;
} else
{var or__3548__auto____8059 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8059))
{return or__3548__auto____8059;
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
var _reduce__8069 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8062 = coll;

if(cljs.core.truth_(and__3546__auto____8062))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8062;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8063 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8063))
{return or__3548__auto____8063;
} else
{var or__3548__auto____8064 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8064))
{return or__3548__auto____8064;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8070 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8065 = coll;

if(cljs.core.truth_(and__3546__auto____8065))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8065;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8066 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8066))
{return or__3548__auto____8066;
} else
{var or__3548__auto____8067 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8067))
{return or__3548__auto____8067;
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
return _reduce__8069.call(this,coll,f);
case  3 :
return _reduce__8070.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8078 = o;

if(cljs.core.truth_(and__3546__auto____8078))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8078;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8079 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8079))
{return or__3548__auto____8079;
} else
{var or__3548__auto____8080 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8080))
{return or__3548__auto____8080;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8081 = o;

if(cljs.core.truth_(and__3546__auto____8081))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8081;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8086 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8086))
{return or__3548__auto____8086;
} else
{var or__3548__auto____8087 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8090 = o;

if(cljs.core.truth_(and__3546__auto____8090))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8090;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8091 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8091))
{return or__3548__auto____8091;
} else
{var or__3548__auto____8092 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8092))
{return or__3548__auto____8092;
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
if(cljs.core.truth_((function (){var and__3546__auto____8093 = o;

if(cljs.core.truth_(and__3546__auto____8093))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8093;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8094 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8094))
{return or__3548__auto____8094;
} else
{var or__3548__auto____8095 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8095))
{return or__3548__auto____8095;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8104 = d;

if(cljs.core.truth_(and__3546__auto____8104))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8104;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8113 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8113))
{return or__3548__auto____8113;
} else
{var or__3548__auto____8114 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8114))
{return or__3548__auto____8114;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8117 = this$;

if(cljs.core.truth_(and__3546__auto____8117))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8117;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8118 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8118))
{return or__3548__auto____8118;
} else
{var or__3548__auto____8120 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8120))
{return or__3548__auto____8120;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8126 = this$;

if(cljs.core.truth_(and__3546__auto____8126))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8126;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8130 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8130))
{return or__3548__auto____8130;
} else
{var or__3548__auto____8132 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8132))
{return or__3548__auto____8132;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8136 = this$;

if(cljs.core.truth_(and__3546__auto____8136))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8136;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8138 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8138))
{return or__3548__auto____8138;
} else
{var or__3548__auto____8139 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8139))
{return or__3548__auto____8139;
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
var G__8219 = null;
var G__8219__8220 = (function (o,k){
return null;
});
var G__8219__8221 = (function (o,k,not_found){
return not_found;
});
G__8219 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8219__8220.call(this,o,k);
case  3 :
return G__8219__8221.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8219;
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
var G__8223 = null;
var G__8223__8224 = (function (_,f){
return f.call(null);
});
var G__8223__8225 = (function (_,f,start){
return start;
});
G__8223 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8223__8224.call(this,_,f);
case  3 :
return G__8223__8225.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8223;
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
var G__8246 = null;
var G__8246__8247 = (function (_,n){
return null;
});
var G__8246__8248 = (function (_,n,not_found){
return not_found;
});
G__8246 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8246__8247.call(this,_,n);
case  3 :
return G__8246__8248.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8246;
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
var ci_reduce__8284 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8272 = cljs.core._nth.call(null,cicoll,0);
var n__8273 = 1;

while(true){
if(cljs.core.truth_((n__8273 < cljs.core._count.call(null,cicoll))))
{{
var G__8292 = f.call(null,val__8272,cljs.core._nth.call(null,cicoll,n__8273));
var G__8293 = (n__8273 + 1);
val__8272 = G__8292;
n__8273 = G__8293;
continue;
}
} else
{return val__8272;
}
break;
}
}
});
var ci_reduce__8285 = (function (cicoll,f,val){
var val__8277 = val;
var n__8278 = 0;

while(true){
if(cljs.core.truth_((n__8278 < cljs.core._count.call(null,cicoll))))
{{
var G__8294 = f.call(null,val__8277,cljs.core._nth.call(null,cicoll,n__8278));
var G__8295 = (n__8278 + 1);
val__8277 = G__8294;
n__8278 = G__8295;
continue;
}
} else
{return val__8277;
}
break;
}
});
var ci_reduce__8286 = (function (cicoll,f,val,idx){
var val__8281 = val;
var n__8282 = idx;

while(true){
if(cljs.core.truth_((n__8282 < cljs.core._count.call(null,cicoll))))
{{
var G__8306 = f.call(null,val__8281,cljs.core._nth.call(null,cicoll,n__8282));
var G__8307 = (n__8282 + 1);
val__8281 = G__8306;
n__8282 = G__8307;
continue;
}
} else
{return val__8281;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8284.call(this,cicoll,f);
case  3 :
return ci_reduce__8285.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8286.call(this,cicoll,f,val,idx);
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
var this__8308 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8321 = null;
var G__8321__8322 = (function (_,f){
var this__8309 = this;
return cljs.core.ci_reduce.call(null,this__8309.a,f,(this__8309.a[this__8309.i]),(this__8309.i + 1));
});
var G__8321__8323 = (function (_,f,start){
var this__8310 = this;
return cljs.core.ci_reduce.call(null,this__8310.a,f,start,this__8310.i);
});
G__8321 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8321__8322.call(this,_,f);
case  3 :
return G__8321__8323.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8321;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8311 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8312 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8330 = null;
var G__8330__8331 = (function (coll,n){
var this__8313 = this;
var i__8314 = (n + this__8313.i);

if(cljs.core.truth_((i__8314 < this__8313.a.length)))
{return (this__8313.a[i__8314]);
} else
{return null;
}
});
var G__8330__8332 = (function (coll,n,not_found){
var this__8315 = this;
var i__8316 = (n + this__8315.i);

if(cljs.core.truth_((i__8316 < this__8315.a.length)))
{return (this__8315.a[i__8316]);
} else
{return not_found;
}
});
G__8330 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8330__8331.call(this,coll,n);
case  3 :
return G__8330__8332.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8330;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8317 = this;
return (this__8317.a.length - this__8317.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8318 = this;
return (this__8318.a[this__8318.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8319 = this;
if(cljs.core.truth_(((this__8319.i + 1) < this__8319.a.length)))
{return (new cljs.core.IndexedSeq(this__8319.a,(this__8319.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8320 = this;
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
var G__8348 = null;
var G__8348__8349 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8348__8350 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8348 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8348__8349.call(this,array,f);
case  3 :
return G__8348__8350.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8348;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8359 = null;
var G__8359__8360 = (function (array,k){
return (array[k]);
});
var G__8359__8361 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8359 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8359__8360.call(this,array,k);
case  3 :
return G__8359__8361.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8359;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8363 = null;
var G__8363__8364 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8363__8365 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8363 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8363__8364.call(this,array,n);
case  3 :
return G__8363__8365.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8363;
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
var temp__3698__auto____8375 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8375))
{var s__8376 = temp__3698__auto____8375;

return cljs.core._first.call(null,s__8376);
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
var G__8422 = cljs.core.next.call(null,s);
s = G__8422;
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
var s__8427 = cljs.core.seq.call(null,x);
var n__8428 = 0;

while(true){
if(cljs.core.truth_(s__8427))
{{
var G__8433 = cljs.core.next.call(null,s__8427);
var G__8434 = (n__8428 + 1);
s__8427 = G__8433;
n__8428 = G__8434;
continue;
}
} else
{return n__8428;
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
var conj__8437 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8438 = (function() { 
var G__8440__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8441 = conj.call(null,coll,x);
var G__8442 = cljs.core.first.call(null,xs);
var G__8443 = cljs.core.next.call(null,xs);
coll = G__8441;
x = G__8442;
xs = G__8443;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8440 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8440__delegate.call(this, coll, x, xs);
};
G__8440.cljs$lang$maxFixedArity = 2;
G__8440.cljs$lang$applyTo = (function (arglist__8444){
var coll = cljs.core.first(arglist__8444);
var x = cljs.core.first(cljs.core.next(arglist__8444));
var xs = cljs.core.rest(cljs.core.next(arglist__8444));
return G__8440__delegate.call(this, coll, x, xs);
});
return G__8440;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8437.call(this,coll,x);
default:
return conj__8438.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8438.cljs$lang$applyTo;
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
var nth__8477 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8478 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8477.call(this,coll,n);
case  3 :
return nth__8478.call(this,coll,n,not_found);
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
var get__8488 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8489 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8488.call(this,o,k);
case  3 :
return get__8489.call(this,o,k,not_found);
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
var assoc__8495 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8496 = (function() { 
var G__8499__delegate = function (coll,k,v,kvs){
while(true){
var ret__8492 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8500 = ret__8492;
var G__8501 = cljs.core.first.call(null,kvs);
var G__8502 = cljs.core.second.call(null,kvs);
var G__8503 = cljs.core.nnext.call(null,kvs);
coll = G__8500;
k = G__8501;
v = G__8502;
kvs = G__8503;
continue;
}
} else
{return ret__8492;
}
break;
}
};
var G__8499 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8499__delegate.call(this, coll, k, v, kvs);
};
G__8499.cljs$lang$maxFixedArity = 3;
G__8499.cljs$lang$applyTo = (function (arglist__8504){
var coll = cljs.core.first(arglist__8504);
var k = cljs.core.first(cljs.core.next(arglist__8504));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8504)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8504)));
return G__8499__delegate.call(this, coll, k, v, kvs);
});
return G__8499;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8495.call(this,coll,k,v);
default:
return assoc__8496.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8496.cljs$lang$applyTo;
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
var dissoc__8506 = (function (coll){
return coll;
});
var dissoc__8507 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8508 = (function() { 
var G__8510__delegate = function (coll,k,ks){
while(true){
var ret__8505 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8511 = ret__8505;
var G__8512 = cljs.core.first.call(null,ks);
var G__8513 = cljs.core.next.call(null,ks);
coll = G__8511;
k = G__8512;
ks = G__8513;
continue;
}
} else
{return ret__8505;
}
break;
}
};
var G__8510 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8510__delegate.call(this, coll, k, ks);
};
G__8510.cljs$lang$maxFixedArity = 2;
G__8510.cljs$lang$applyTo = (function (arglist__8514){
var coll = cljs.core.first(arglist__8514);
var k = cljs.core.first(cljs.core.next(arglist__8514));
var ks = cljs.core.rest(cljs.core.next(arglist__8514));
return G__8510__delegate.call(this, coll, k, ks);
});
return G__8510;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8506.call(this,coll);
case  2 :
return dissoc__8507.call(this,coll,k);
default:
return dissoc__8508.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8508.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8515 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8516 = x__445__auto____8515;

if(cljs.core.truth_(and__3546__auto____8516))
{var and__3546__auto____8517 = x__445__auto____8515.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8517))
{return cljs.core.not.call(null,x__445__auto____8515.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8517;
}
} else
{return and__3546__auto____8516;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8515);
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
var disj__8543 = (function (coll){
return coll;
});
var disj__8544 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8545 = (function() { 
var G__8547__delegate = function (coll,k,ks){
while(true){
var ret__8522 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8552 = ret__8522;
var G__8553 = cljs.core.first.call(null,ks);
var G__8554 = cljs.core.next.call(null,ks);
coll = G__8552;
k = G__8553;
ks = G__8554;
continue;
}
} else
{return ret__8522;
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
G__8547.cljs$lang$applyTo = (function (arglist__8555){
var coll = cljs.core.first(arglist__8555);
var k = cljs.core.first(cljs.core.next(arglist__8555));
var ks = cljs.core.rest(cljs.core.next(arglist__8555));
return G__8547__delegate.call(this, coll, k, ks);
});
return G__8547;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8543.call(this,coll);
case  2 :
return disj__8544.call(this,coll,k);
default:
return disj__8545.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8545.cljs$lang$applyTo;
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
{var x__445__auto____8562 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8570 = x__445__auto____8562;

if(cljs.core.truth_(and__3546__auto____8570))
{var and__3546__auto____8571 = x__445__auto____8562.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8571))
{return cljs.core.not.call(null,x__445__auto____8562.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8571;
}
} else
{return and__3546__auto____8570;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8562);
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
{var x__445__auto____8589 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8591 = x__445__auto____8589;

if(cljs.core.truth_(and__3546__auto____8591))
{var and__3546__auto____8592 = x__445__auto____8589.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8592))
{return cljs.core.not.call(null,x__445__auto____8589.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8592;
}
} else
{return and__3546__auto____8591;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8589);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8595 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8596 = x__445__auto____8595;

if(cljs.core.truth_(and__3546__auto____8596))
{var and__3546__auto____8598 = x__445__auto____8595.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8598))
{return cljs.core.not.call(null,x__445__auto____8595.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8598;
}
} else
{return and__3546__auto____8596;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8595);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8611 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8612 = x__445__auto____8611;

if(cljs.core.truth_(and__3546__auto____8612))
{var and__3546__auto____8616 = x__445__auto____8611.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8616))
{return cljs.core.not.call(null,x__445__auto____8611.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8616;
}
} else
{return and__3546__auto____8612;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8611);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8623 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8626 = x__445__auto____8623;

if(cljs.core.truth_(and__3546__auto____8626))
{var and__3546__auto____8629 = x__445__auto____8623.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8629))
{return cljs.core.not.call(null,x__445__auto____8623.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8629;
}
} else
{return and__3546__auto____8626;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8623);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8635 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8636 = x__445__auto____8635;

if(cljs.core.truth_(and__3546__auto____8636))
{var and__3546__auto____8637 = x__445__auto____8635.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8637))
{return cljs.core.not.call(null,x__445__auto____8635.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8637;
}
} else
{return and__3546__auto____8636;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8635);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8641 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8644 = x__445__auto____8641;

if(cljs.core.truth_(and__3546__auto____8644))
{var and__3546__auto____8645 = x__445__auto____8641.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8645))
{return cljs.core.not.call(null,x__445__auto____8641.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8645;
}
} else
{return and__3546__auto____8644;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8641);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8658 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8658.push(key);
}));
return keys__8658;
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
{var x__445__auto____8685 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8686 = x__445__auto____8685;

if(cljs.core.truth_(and__3546__auto____8686))
{var and__3546__auto____8687 = x__445__auto____8685.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8687))
{return cljs.core.not.call(null,x__445__auto____8685.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8687;
}
} else
{return and__3546__auto____8686;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8685);
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
var and__3546__auto____8697 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8697))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8701 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8701))
{return or__3548__auto____8701;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8697;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8710 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8710))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8710;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8725 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8725))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8725;
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
var and__3546__auto____8733 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8733))
{return (n == n.toFixed());
} else
{return and__3546__auto____8733;
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
if(cljs.core.truth_((function (){var and__3546__auto____8746 = coll;

if(cljs.core.truth_(and__3546__auto____8746))
{var and__3546__auto____8747 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8747))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8747;
}
} else
{return and__3546__auto____8746;
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
var distinct_QMARK___8765 = (function (x){
return true;
});
var distinct_QMARK___8766 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8767 = (function() { 
var G__8769__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8753 = cljs.core.set([y,x]);
var xs__8754 = more;

while(true){
var x__8755 = cljs.core.first.call(null,xs__8754);
var etc__8757 = cljs.core.next.call(null,xs__8754);

if(cljs.core.truth_(xs__8754))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8753,x__8755)))
{return false;
} else
{{
var G__8774 = cljs.core.conj.call(null,s__8753,x__8755);
var G__8775 = etc__8757;
s__8753 = G__8774;
xs__8754 = G__8775;
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
var G__8769 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8769__delegate.call(this, x, y, more);
};
G__8769.cljs$lang$maxFixedArity = 2;
G__8769.cljs$lang$applyTo = (function (arglist__8777){
var x = cljs.core.first(arglist__8777);
var y = cljs.core.first(cljs.core.next(arglist__8777));
var more = cljs.core.rest(cljs.core.next(arglist__8777));
return G__8769__delegate.call(this, x, y, more);
});
return G__8769;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8765.call(this,x);
case  2 :
return distinct_QMARK___8766.call(this,x,y);
default:
return distinct_QMARK___8767.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8767.cljs$lang$applyTo;
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
var r__8798 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8798)))
{return r__8798;
} else
{if(cljs.core.truth_(r__8798))
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
var sort__8806 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8807 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8805 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8805,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8805);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8806.call(this,comp);
case  2 :
return sort__8807.call(this,comp,coll);
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
var sort_by__8811 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8812 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8811.call(this,keyfn,comp);
case  3 :
return sort_by__8812.call(this,keyfn,comp,coll);
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
var reduce__8817 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8818 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8817.call(this,f,val);
case  3 :
return reduce__8818.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8832 = (function (f,coll){
var temp__3695__auto____8826 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8826))
{var s__8827 = temp__3695__auto____8826;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8827),cljs.core.next.call(null,s__8827));
} else
{return f.call(null);
}
});
var seq_reduce__8833 = (function (f,val,coll){
var val__8830 = val;
var coll__8831 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8831))
{{
var G__8835 = f.call(null,val__8830,cljs.core.first.call(null,coll__8831));
var G__8836 = cljs.core.next.call(null,coll__8831);
val__8830 = G__8835;
coll__8831 = G__8836;
continue;
}
} else
{return val__8830;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8832.call(this,f,val);
case  3 :
return seq_reduce__8833.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8847 = null;
var G__8847__8848 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8847__8849 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8847 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8847__8848.call(this,coll,f);
case  3 :
return G__8847__8849.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8847;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8854 = (function (){
return 0;
});
var _PLUS___8855 = (function (x){
return x;
});
var _PLUS___8856 = (function (x,y){
return (x + y);
});
var _PLUS___8857 = (function() { 
var G__8860__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8860 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8860__delegate.call(this, x, y, more);
};
G__8860.cljs$lang$maxFixedArity = 2;
G__8860.cljs$lang$applyTo = (function (arglist__8862){
var x = cljs.core.first(arglist__8862);
var y = cljs.core.first(cljs.core.next(arglist__8862));
var more = cljs.core.rest(cljs.core.next(arglist__8862));
return G__8860__delegate.call(this, x, y, more);
});
return G__8860;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8854.call(this);
case  1 :
return _PLUS___8855.call(this,x);
case  2 :
return _PLUS___8856.call(this,x,y);
default:
return _PLUS___8857.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8857.cljs$lang$applyTo;
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
var ___8866 = (function (x){
return (- x);
});
var ___8867 = (function (x,y){
return (x - y);
});
var ___8868 = (function() { 
var G__8875__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8875 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8875__delegate.call(this, x, y, more);
};
G__8875.cljs$lang$maxFixedArity = 2;
G__8875.cljs$lang$applyTo = (function (arglist__8876){
var x = cljs.core.first(arglist__8876);
var y = cljs.core.first(cljs.core.next(arglist__8876));
var more = cljs.core.rest(cljs.core.next(arglist__8876));
return G__8875__delegate.call(this, x, y, more);
});
return G__8875;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8866.call(this,x);
case  2 :
return ___8867.call(this,x,y);
default:
return ___8868.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8868.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8887 = (function (){
return 1;
});
var _STAR___8888 = (function (x){
return x;
});
var _STAR___8889 = (function (x,y){
return (x * y);
});
var _STAR___8890 = (function() { 
var G__8893__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8893 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8893__delegate.call(this, x, y, more);
};
G__8893.cljs$lang$maxFixedArity = 2;
G__8893.cljs$lang$applyTo = (function (arglist__8894){
var x = cljs.core.first(arglist__8894);
var y = cljs.core.first(cljs.core.next(arglist__8894));
var more = cljs.core.rest(cljs.core.next(arglist__8894));
return G__8893__delegate.call(this, x, y, more);
});
return G__8893;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8887.call(this);
case  1 :
return _STAR___8888.call(this,x);
case  2 :
return _STAR___8889.call(this,x,y);
default:
return _STAR___8890.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8890.cljs$lang$applyTo;
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
var _SLASH___8903 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8904 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___8905 = (function() { 
var G__8907__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8907 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8907__delegate.call(this, x, y, more);
};
G__8907.cljs$lang$maxFixedArity = 2;
G__8907.cljs$lang$applyTo = (function (arglist__8908){
var x = cljs.core.first(arglist__8908);
var y = cljs.core.first(cljs.core.next(arglist__8908));
var more = cljs.core.rest(cljs.core.next(arglist__8908));
return G__8907__delegate.call(this, x, y, more);
});
return G__8907;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8903.call(this,x);
case  2 :
return _SLASH___8904.call(this,x,y);
default:
return _SLASH___8905.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8905.cljs$lang$applyTo;
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
var _LT___8925 = (function (x){
return true;
});
var _LT___8926 = (function (x,y){
return (x < y);
});
var _LT___8927 = (function() { 
var G__8929__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8931 = y;
var G__8933 = cljs.core.first.call(null,more);
var G__8934 = cljs.core.next.call(null,more);
x = G__8931;
y = G__8933;
more = G__8934;
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
var G__8929 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8929__delegate.call(this, x, y, more);
};
G__8929.cljs$lang$maxFixedArity = 2;
G__8929.cljs$lang$applyTo = (function (arglist__8937){
var x = cljs.core.first(arglist__8937);
var y = cljs.core.first(cljs.core.next(arglist__8937));
var more = cljs.core.rest(cljs.core.next(arglist__8937));
return G__8929__delegate.call(this, x, y, more);
});
return G__8929;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___8925.call(this,x);
case  2 :
return _LT___8926.call(this,x,y);
default:
return _LT___8927.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___8927.cljs$lang$applyTo;
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
var _LT__EQ___8951 = (function (x){
return true;
});
var _LT__EQ___8952 = (function (x,y){
return (x <= y);
});
var _LT__EQ___8953 = (function() { 
var G__8958__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8959 = y;
var G__8960 = cljs.core.first.call(null,more);
var G__8961 = cljs.core.next.call(null,more);
x = G__8959;
y = G__8960;
more = G__8961;
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
var G__8958 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8958__delegate.call(this, x, y, more);
};
G__8958.cljs$lang$maxFixedArity = 2;
G__8958.cljs$lang$applyTo = (function (arglist__8963){
var x = cljs.core.first(arglist__8963);
var y = cljs.core.first(cljs.core.next(arglist__8963));
var more = cljs.core.rest(cljs.core.next(arglist__8963));
return G__8958__delegate.call(this, x, y, more);
});
return G__8958;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___8951.call(this,x);
case  2 :
return _LT__EQ___8952.call(this,x,y);
default:
return _LT__EQ___8953.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___8953.cljs$lang$applyTo;
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
var _GT___8975 = (function (x){
return true;
});
var _GT___8976 = (function (x,y){
return (x > y);
});
var _GT___8977 = (function() { 
var G__8980__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8981 = y;
var G__8982 = cljs.core.first.call(null,more);
var G__8983 = cljs.core.next.call(null,more);
x = G__8981;
y = G__8982;
more = G__8983;
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
var G__8980 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8980__delegate.call(this, x, y, more);
};
G__8980.cljs$lang$maxFixedArity = 2;
G__8980.cljs$lang$applyTo = (function (arglist__8991){
var x = cljs.core.first(arglist__8991);
var y = cljs.core.first(cljs.core.next(arglist__8991));
var more = cljs.core.rest(cljs.core.next(arglist__8991));
return G__8980__delegate.call(this, x, y, more);
});
return G__8980;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___8975.call(this,x);
case  2 :
return _GT___8976.call(this,x,y);
default:
return _GT___8977.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___8977.cljs$lang$applyTo;
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
var _GT__EQ___9024 = (function (x){
return true;
});
var _GT__EQ___9025 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9026 = (function() { 
var G__9029__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9030 = y;
var G__9031 = cljs.core.first.call(null,more);
var G__9032 = cljs.core.next.call(null,more);
x = G__9030;
y = G__9031;
more = G__9032;
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
var G__9029 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9029__delegate.call(this, x, y, more);
};
G__9029.cljs$lang$maxFixedArity = 2;
G__9029.cljs$lang$applyTo = (function (arglist__9081){
var x = cljs.core.first(arglist__9081);
var y = cljs.core.first(cljs.core.next(arglist__9081));
var more = cljs.core.rest(cljs.core.next(arglist__9081));
return G__9029__delegate.call(this, x, y, more);
});
return G__9029;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9024.call(this,x);
case  2 :
return _GT__EQ___9025.call(this,x,y);
default:
return _GT__EQ___9026.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9026.cljs$lang$applyTo;
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
var max__9084 = (function (x){
return x;
});
var max__9086 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9087 = (function() { 
var G__9090__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
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
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9084.call(this,x);
case  2 :
return max__9086.call(this,x,y);
default:
return max__9087.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9087.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9100 = (function (x){
return x;
});
var min__9101 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9102 = (function() { 
var G__9104__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9104 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9104__delegate.call(this, x, y, more);
};
G__9104.cljs$lang$maxFixedArity = 2;
G__9104.cljs$lang$applyTo = (function (arglist__9105){
var x = cljs.core.first(arglist__9105);
var y = cljs.core.first(cljs.core.next(arglist__9105));
var more = cljs.core.rest(cljs.core.next(arglist__9105));
return G__9104__delegate.call(this, x, y, more);
});
return G__9104;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9100.call(this,x);
case  2 :
return min__9101.call(this,x,y);
default:
return min__9102.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9102.cljs$lang$applyTo;
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
var rem__9107 = (n % d);

return cljs.core.fix.call(null,((n - rem__9107) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9112 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9112));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9113 = (function (){
return Math.random.call(null);
});
var rand__9114 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9113.call(this);
case  1 :
return rand__9114.call(this,n);
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
var _EQ__EQ___9242 = (function (x){
return true;
});
var _EQ__EQ___9244 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9246 = (function() { 
var G__9250__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9253 = y;
var G__9254 = cljs.core.first.call(null,more);
var G__9255 = cljs.core.next.call(null,more);
x = G__9253;
y = G__9254;
more = G__9255;
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
var G__9250 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9250__delegate.call(this, x, y, more);
};
G__9250.cljs$lang$maxFixedArity = 2;
G__9250.cljs$lang$applyTo = (function (arglist__9257){
var x = cljs.core.first(arglist__9257);
var y = cljs.core.first(cljs.core.next(arglist__9257));
var more = cljs.core.rest(cljs.core.next(arglist__9257));
return G__9250__delegate.call(this, x, y, more);
});
return G__9250;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9242.call(this,x);
case  2 :
return _EQ__EQ___9244.call(this,x,y);
default:
return _EQ__EQ___9246.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9246.cljs$lang$applyTo;
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
var n__9276 = n;
var xs__9277 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9278 = xs__9277;

if(cljs.core.truth_(and__3546__auto____9278))
{return (n__9276 > 0);
} else
{return and__3546__auto____9278;
}
})()))
{{
var G__9279 = (n__9276 - 1);
var G__9280 = cljs.core.next.call(null,xs__9277);
n__9276 = G__9279;
xs__9277 = G__9280;
continue;
}
} else
{return xs__9277;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9300 = null;
var G__9300__9301 = (function (coll,n){
var temp__3695__auto____9295 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9295))
{var xs__9296 = temp__3695__auto____9295;

return cljs.core.first.call(null,xs__9296);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9300__9302 = (function (coll,n,not_found){
var temp__3695__auto____9298 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9298))
{var xs__9299 = temp__3695__auto____9298;

return cljs.core.first.call(null,xs__9299);
} else
{return not_found;
}
});
G__9300 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9300__9301.call(this,coll,n);
case  3 :
return G__9300__9302.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9300;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9319 = (function (){
return "";
});
var str_STAR___9320 = (function (x){
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
var str_STAR___9321 = (function() { 
var G__9323__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9481 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9482 = cljs.core.next.call(null,more);
sb = G__9481;
more = G__9482;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9323 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9323__delegate.call(this, x, ys);
};
G__9323.cljs$lang$maxFixedArity = 1;
G__9323.cljs$lang$applyTo = (function (arglist__9483){
var x = cljs.core.first(arglist__9483);
var ys = cljs.core.rest(arglist__9483);
return G__9323__delegate.call(this, x, ys);
});
return G__9323;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9319.call(this);
case  1 :
return str_STAR___9320.call(this,x);
default:
return str_STAR___9321.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9321.cljs$lang$applyTo;
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
var str__9486 = (function (){
return "";
});
var str__9487 = (function (x){
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
var str__9488 = (function() { 
var G__9493__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9493 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9493__delegate.call(this, x, ys);
};
G__9493.cljs$lang$maxFixedArity = 1;
G__9493.cljs$lang$applyTo = (function (arglist__9494){
var x = cljs.core.first(arglist__9494);
var ys = cljs.core.rest(arglist__9494);
return G__9493__delegate.call(this, x, ys);
});
return G__9493;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9486.call(this);
case  1 :
return str__9487.call(this,x);
default:
return str__9488.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9488.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9498 = (function (s,start){
return s.substring(start);
});
var subs__9499 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9498.call(this,s,start);
case  3 :
return subs__9499.call(this,s,start,end);
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
var symbol__9501 = (function (name){
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
var symbol__9502 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9501.call(this,ns);
case  2 :
return symbol__9502.call(this,ns,name);
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
var keyword__9511 = (function (name){
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
var keyword__9512 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9511.call(this,ns);
case  2 :
return keyword__9512.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9519 = cljs.core.seq.call(null,x);
var ys__9520 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9519)))
{return cljs.core.nil_QMARK_.call(null,ys__9520);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9520)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9519),cljs.core.first.call(null,ys__9520))))
{{
var G__9521 = cljs.core.next.call(null,xs__9519);
var G__9522 = cljs.core.next.call(null,ys__9520);
xs__9519 = G__9521;
ys__9520 = G__9522;
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
return cljs.core.reduce.call(null,(function (p1__9523_SHARP_,p2__9524_SHARP_){
return cljs.core.hash_combine.call(null,p1__9523_SHARP_,cljs.core.hash.call(null,p2__9524_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9619__9620 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9619__9620))
{var G__9622__9624 = cljs.core.first.call(null,G__9619__9620);
var vec__9623__9625 = G__9622__9624;
var key_name__9626 = cljs.core.nth.call(null,vec__9623__9625,0,null);
var f__9627 = cljs.core.nth.call(null,vec__9623__9625,1,null);
var G__9619__9628 = G__9619__9620;

var G__9622__9630 = G__9622__9624;
var G__9619__9631 = G__9619__9628;

while(true){
var vec__9633__9634 = G__9622__9630;
var key_name__9636 = cljs.core.nth.call(null,vec__9633__9634,0,null);
var f__9637 = cljs.core.nth.call(null,vec__9633__9634,1,null);
var G__9619__9638 = G__9619__9631;

var str_name__9639 = cljs.core.name.call(null,key_name__9636);

obj[str_name__9639] = f__9637;
var temp__3698__auto____9640 = cljs.core.next.call(null,G__9619__9638);

if(cljs.core.truth_(temp__3698__auto____9640))
{var G__9619__9641 = temp__3698__auto____9640;

{
var G__9646 = cljs.core.first.call(null,G__9619__9641);
var G__9647 = G__9619__9641;
G__9622__9630 = G__9646;
G__9619__9631 = G__9647;
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
var this__9654 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9655 = this;
return (new cljs.core.List(this__9655.meta,o,coll,(this__9655.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9660 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9662 = this;
return this__9662.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9665 = this;
return this__9665.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9666 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9671 = this;
return this__9671.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9672 = this;
return this__9672.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9673 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9674 = this;
return (new cljs.core.List(meta,this__9674.first,this__9674.rest,this__9674.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9675 = this;
return this__9675.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9677 = this;
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
var this__9752 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9753 = this;
return (new cljs.core.List(this__9753.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9754 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9756 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9758 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9759 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9760 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9761 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9762 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9763 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9764 = this;
return this__9764.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9766 = this;
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
list.cljs$lang$applyTo = (function (arglist__9852){
var items = cljs.core.seq( arglist__9852 );;
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
var this__9854 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9855 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9857 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9859 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9859.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9861 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9863 = this;
return this__9863.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9865 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9865.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9865.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9867 = this;
return this__9867.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9869 = this;
return (new cljs.core.Cons(meta,this__9869.first,this__9869.rest));
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
var G__9885 = null;
var G__9885__9886 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9885__9887 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9885 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9885__9886.call(this,string,f);
case  3 :
return G__9885__9887.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9885;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9895 = null;
var G__9895__9896 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9895__9897 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9895 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9895__9896.call(this,string,k);
case  3 :
return G__9895__9897.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9895;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9905 = null;
var G__9905__9906 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9905__9907 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9905 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9905__9906.call(this,string,n);
case  3 :
return G__9905__9907.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9905;
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
var G__9936 = null;
var G__9936__9937 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9936__9938 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9936 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9936__9937.call(this,this$,coll);
case  3 :
return G__9936__9938.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9936;
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
var x__9954 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9954;
} else
{lazy_seq.x = x__9954.call(null);
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
var this__9969 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9970 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9971 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9972 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9972.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9973 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9975 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9976 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9978 = this;
return this__9978.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9979 = this;
return (new cljs.core.LazySeq(meta,this__9979.realized,this__9979.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10009 = cljs.core.array.call(null);

var s__10011 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10011)))
{ary__10009.push(cljs.core.first.call(null,s__10011));
{
var G__10014 = cljs.core.next.call(null,s__10011);
s__10011 = G__10014;
continue;
}
} else
{return ary__10009;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10015 = s;
var i__10016 = n;
var sum__10017 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10022 = (i__10016 > 0);

if(cljs.core.truth_(and__3546__auto____10022))
{return cljs.core.seq.call(null,s__10015);
} else
{return and__3546__auto____10022;
}
})()))
{{
var G__10023 = cljs.core.next.call(null,s__10015);
var G__10024 = (i__10016 - 1);
var G__10025 = (sum__10017 + 1);
s__10015 = G__10023;
i__10016 = G__10024;
sum__10017 = G__10025;
continue;
}
} else
{return sum__10017;
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
var concat__10076 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10077 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10078 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10071 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10071))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10071),concat.call(null,cljs.core.rest.call(null,s__10071),y));
} else
{return y;
}
})));
});
var concat__10079 = (function() { 
var G__10083__delegate = function (x,y,zs){
var cat__10075 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10072 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10072))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10072),cat.call(null,cljs.core.rest.call(null,xys__10072),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10075.call(null,concat.call(null,x,y),zs);
};
var G__10083 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10083__delegate.call(this, x, y, zs);
};
G__10083.cljs$lang$maxFixedArity = 2;
G__10083.cljs$lang$applyTo = (function (arglist__10087){
var x = cljs.core.first(arglist__10087);
var y = cljs.core.first(cljs.core.next(arglist__10087));
var zs = cljs.core.rest(cljs.core.next(arglist__10087));
return G__10083__delegate.call(this, x, y, zs);
});
return G__10083;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10076.call(this);
case  1 :
return concat__10077.call(this,x);
case  2 :
return concat__10078.call(this,x,y);
default:
return concat__10079.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10079.cljs$lang$applyTo;
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
var list_STAR___10091 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10092 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10093 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10094 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10095 = (function() { 
var G__10103__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10103 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10103__delegate.call(this, a, b, c, d, more);
};
G__10103.cljs$lang$maxFixedArity = 4;
G__10103.cljs$lang$applyTo = (function (arglist__10105){
var a = cljs.core.first(arglist__10105);
var b = cljs.core.first(cljs.core.next(arglist__10105));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10105)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10105))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10105))));
return G__10103__delegate.call(this, a, b, c, d, more);
});
return G__10103;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10091.call(this,a);
case  2 :
return list_STAR___10092.call(this,a,b);
case  3 :
return list_STAR___10093.call(this,a,b,c);
case  4 :
return list_STAR___10094.call(this,a,b,c,d);
default:
return list_STAR___10095.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10095.cljs$lang$applyTo;
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
var apply__10158 = (function (f,args){
var fixed_arity__10108 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10108 + 1)) <= fixed_arity__10108)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10159 = (function (f,x,args){
var arglist__10110 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10112 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10110,fixed_arity__10112) <= fixed_arity__10112)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10110));
} else
{return f.cljs$lang$applyTo(arglist__10110);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10110));
}
});
var apply__10160 = (function (f,x,y,args){
var arglist__10115 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10116 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10115,fixed_arity__10116) <= fixed_arity__10116)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10115));
} else
{return f.cljs$lang$applyTo(arglist__10115);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10115));
}
});
var apply__10161 = (function (f,x,y,z,args){
var arglist__10149 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10150 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10149,fixed_arity__10150) <= fixed_arity__10150)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10149));
} else
{return f.cljs$lang$applyTo(arglist__10149);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10149));
}
});
var apply__10162 = (function() { 
var G__10176__delegate = function (f,a,b,c,d,args){
var arglist__10151 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10153 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10151,fixed_arity__10153) <= fixed_arity__10153)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10151));
} else
{return f.cljs$lang$applyTo(arglist__10151);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10151));
}
};
var G__10176 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10176__delegate.call(this, f, a, b, c, d, args);
};
G__10176.cljs$lang$maxFixedArity = 5;
G__10176.cljs$lang$applyTo = (function (arglist__10181){
var f = cljs.core.first(arglist__10181);
var a = cljs.core.first(cljs.core.next(arglist__10181));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10181)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10181))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10181)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10181)))));
return G__10176__delegate.call(this, f, a, b, c, d, args);
});
return G__10176;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10158.call(this,f,a);
case  3 :
return apply__10159.call(this,f,a,b);
case  4 :
return apply__10160.call(this,f,a,b,c);
case  5 :
return apply__10161.call(this,f,a,b,c,d);
default:
return apply__10162.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10162.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10184){
var obj = cljs.core.first(arglist__10184);
var f = cljs.core.first(cljs.core.next(arglist__10184));
var args = cljs.core.rest(cljs.core.next(arglist__10184));
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
var not_EQ___10190 = (function (x){
return false;
});
var not_EQ___10192 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10193 = (function() { 
var G__10195__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10195 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10195__delegate.call(this, x, y, more);
};
G__10195.cljs$lang$maxFixedArity = 2;
G__10195.cljs$lang$applyTo = (function (arglist__10196){
var x = cljs.core.first(arglist__10196);
var y = cljs.core.first(cljs.core.next(arglist__10196));
var more = cljs.core.rest(cljs.core.next(arglist__10196));
return G__10195__delegate.call(this, x, y, more);
});
return G__10195;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10190.call(this,x);
case  2 :
return not_EQ___10192.call(this,x,y);
default:
return not_EQ___10193.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10193.cljs$lang$applyTo;
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
var G__10203 = pred;
var G__10204 = cljs.core.next.call(null,coll);
pred = G__10203;
coll = G__10204;
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
{var or__3548__auto____10218 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10218))
{return or__3548__auto____10218;
} else
{{
var G__10256 = pred;
var G__10257 = cljs.core.next.call(null,coll);
pred = G__10256;
coll = G__10257;
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
var G__10269 = null;
var G__10269__10271 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10269__10273 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10269__10275 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10269__10277 = (function() { 
var G__10281__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10281 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10281__delegate.call(this, x, y, zs);
};
G__10281.cljs$lang$maxFixedArity = 2;
G__10281.cljs$lang$applyTo = (function (arglist__10283){
var x = cljs.core.first(arglist__10283);
var y = cljs.core.first(cljs.core.next(arglist__10283));
var zs = cljs.core.rest(cljs.core.next(arglist__10283));
return G__10281__delegate.call(this, x, y, zs);
});
return G__10281;
})()
;
G__10269 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10269__10271.call(this);
case  1 :
return G__10269__10273.call(this,x);
case  2 :
return G__10269__10275.call(this,x,y);
default:
return G__10269__10277.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10269.cljs$lang$maxFixedArity = 2;
G__10269.cljs$lang$applyTo = G__10269__10277.cljs$lang$applyTo;
return G__10269;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10288__delegate = function (args){
return x;
};
var G__10288 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10288__delegate.call(this, args);
};
G__10288.cljs$lang$maxFixedArity = 0;
G__10288.cljs$lang$applyTo = (function (arglist__10317){
var args = cljs.core.seq( arglist__10317 );;
return G__10288__delegate.call(this, args);
});
return G__10288;
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
var comp__10347 = (function (){
return cljs.core.identity;
});
var comp__10348 = (function (f){
return f;
});
var comp__10349 = (function (f,g){
return (function() {
var G__10353 = null;
var G__10353__10354 = (function (){
return f.call(null,g.call(null));
});
var G__10353__10355 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10353__10356 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10353__10357 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10353__10358 = (function() { 
var G__10365__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10365 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10365__delegate.call(this, x, y, z, args);
};
G__10365.cljs$lang$maxFixedArity = 3;
G__10365.cljs$lang$applyTo = (function (arglist__10367){
var x = cljs.core.first(arglist__10367);
var y = cljs.core.first(cljs.core.next(arglist__10367));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10367)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10367)));
return G__10365__delegate.call(this, x, y, z, args);
});
return G__10365;
})()
;
G__10353 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10353__10354.call(this);
case  1 :
return G__10353__10355.call(this,x);
case  2 :
return G__10353__10356.call(this,x,y);
case  3 :
return G__10353__10357.call(this,x,y,z);
default:
return G__10353__10358.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10353.cljs$lang$maxFixedArity = 3;
G__10353.cljs$lang$applyTo = G__10353__10358.cljs$lang$applyTo;
return G__10353;
})()
});
var comp__10350 = (function (f,g,h){
return (function() {
var G__10371 = null;
var G__10371__10374 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10371__10375 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10371__10377 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10371__10378 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10371__10379 = (function() { 
var G__10386__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10386 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10386__delegate.call(this, x, y, z, args);
};
G__10386.cljs$lang$maxFixedArity = 3;
G__10386.cljs$lang$applyTo = (function (arglist__10389){
var x = cljs.core.first(arglist__10389);
var y = cljs.core.first(cljs.core.next(arglist__10389));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10389)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10389)));
return G__10386__delegate.call(this, x, y, z, args);
});
return G__10386;
})()
;
G__10371 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10371__10374.call(this);
case  1 :
return G__10371__10375.call(this,x);
case  2 :
return G__10371__10377.call(this,x,y);
case  3 :
return G__10371__10378.call(this,x,y,z);
default:
return G__10371__10379.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10371.cljs$lang$maxFixedArity = 3;
G__10371.cljs$lang$applyTo = G__10371__10379.cljs$lang$applyTo;
return G__10371;
})()
});
var comp__10351 = (function() { 
var G__10390__delegate = function (f1,f2,f3,fs){
var fs__10329 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10393__delegate = function (args){
var ret__10332 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10329),args);
var fs__10333 = cljs.core.next.call(null,fs__10329);

while(true){
if(cljs.core.truth_(fs__10333))
{{
var G__10394 = cljs.core.first.call(null,fs__10333).call(null,ret__10332);
var G__10395 = cljs.core.next.call(null,fs__10333);
ret__10332 = G__10394;
fs__10333 = G__10395;
continue;
}
} else
{return ret__10332;
}
break;
}
};
var G__10393 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10393__delegate.call(this, args);
};
G__10393.cljs$lang$maxFixedArity = 0;
G__10393.cljs$lang$applyTo = (function (arglist__10396){
var args = cljs.core.seq( arglist__10396 );;
return G__10393__delegate.call(this, args);
});
return G__10393;
})()
;
};
var G__10390 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10390__delegate.call(this, f1, f2, f3, fs);
};
G__10390.cljs$lang$maxFixedArity = 3;
G__10390.cljs$lang$applyTo = (function (arglist__10397){
var f1 = cljs.core.first(arglist__10397);
var f2 = cljs.core.first(cljs.core.next(arglist__10397));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10397)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10397)));
return G__10390__delegate.call(this, f1, f2, f3, fs);
});
return G__10390;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10347.call(this);
case  1 :
return comp__10348.call(this,f1);
case  2 :
return comp__10349.call(this,f1,f2);
case  3 :
return comp__10350.call(this,f1,f2,f3);
default:
return comp__10351.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10351.cljs$lang$applyTo;
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
var partial__10414 = (function (f,arg1){
return (function() { 
var G__10420__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10420 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10420__delegate.call(this, args);
};
G__10420.cljs$lang$maxFixedArity = 0;
G__10420.cljs$lang$applyTo = (function (arglist__10421){
var args = cljs.core.seq( arglist__10421 );;
return G__10420__delegate.call(this, args);
});
return G__10420;
})()
;
});
var partial__10415 = (function (f,arg1,arg2){
return (function() { 
var G__10422__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10422 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10422__delegate.call(this, args);
};
G__10422.cljs$lang$maxFixedArity = 0;
G__10422.cljs$lang$applyTo = (function (arglist__10423){
var args = cljs.core.seq( arglist__10423 );;
return G__10422__delegate.call(this, args);
});
return G__10422;
})()
;
});
var partial__10416 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10424__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10424 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10424__delegate.call(this, args);
};
G__10424.cljs$lang$maxFixedArity = 0;
G__10424.cljs$lang$applyTo = (function (arglist__10426){
var args = cljs.core.seq( arglist__10426 );;
return G__10424__delegate.call(this, args);
});
return G__10424;
})()
;
});
var partial__10417 = (function() { 
var G__10427__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10429__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10429 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10429__delegate.call(this, args);
};
G__10429.cljs$lang$maxFixedArity = 0;
G__10429.cljs$lang$applyTo = (function (arglist__10438){
var args = cljs.core.seq( arglist__10438 );;
return G__10429__delegate.call(this, args);
});
return G__10429;
})()
;
};
var G__10427 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10427__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10427.cljs$lang$maxFixedArity = 4;
G__10427.cljs$lang$applyTo = (function (arglist__10440){
var f = cljs.core.first(arglist__10440);
var arg1 = cljs.core.first(cljs.core.next(arglist__10440));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10440)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10440))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10440))));
return G__10427__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10427;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10414.call(this,f,arg1);
case  3 :
return partial__10415.call(this,f,arg1,arg2);
case  4 :
return partial__10416.call(this,f,arg1,arg2,arg3);
default:
return partial__10417.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10417.cljs$lang$applyTo;
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
var fnil__10459 = (function (f,x){
return (function() {
var G__10463 = null;
var G__10463__10464 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10463__10465 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10463__10466 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10463__10467 = (function() { 
var G__10469__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10469 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10469__delegate.call(this, a, b, c, ds);
};
G__10469.cljs$lang$maxFixedArity = 3;
G__10469.cljs$lang$applyTo = (function (arglist__10484){
var a = cljs.core.first(arglist__10484);
var b = cljs.core.first(cljs.core.next(arglist__10484));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10484)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10484)));
return G__10469__delegate.call(this, a, b, c, ds);
});
return G__10469;
})()
;
G__10463 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10463__10464.call(this,a);
case  2 :
return G__10463__10465.call(this,a,b);
case  3 :
return G__10463__10466.call(this,a,b,c);
default:
return G__10463__10467.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10463.cljs$lang$maxFixedArity = 3;
G__10463.cljs$lang$applyTo = G__10463__10467.cljs$lang$applyTo;
return G__10463;
})()
});
var fnil__10460 = (function (f,x,y){
return (function() {
var G__10485 = null;
var G__10485__10487 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10485__10488 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10485__10489 = (function() { 
var G__10493__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10493 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10493__delegate.call(this, a, b, c, ds);
};
G__10493.cljs$lang$maxFixedArity = 3;
G__10493.cljs$lang$applyTo = (function (arglist__10495){
var a = cljs.core.first(arglist__10495);
var b = cljs.core.first(cljs.core.next(arglist__10495));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10495)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10495)));
return G__10493__delegate.call(this, a, b, c, ds);
});
return G__10493;
})()
;
G__10485 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10485__10487.call(this,a,b);
case  3 :
return G__10485__10488.call(this,a,b,c);
default:
return G__10485__10489.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10485.cljs$lang$maxFixedArity = 3;
G__10485.cljs$lang$applyTo = G__10485__10489.cljs$lang$applyTo;
return G__10485;
})()
});
var fnil__10461 = (function (f,x,y,z){
return (function() {
var G__10498 = null;
var G__10498__10499 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10498__10500 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10498__10501 = (function() { 
var G__10503__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10503 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10503__delegate.call(this, a, b, c, ds);
};
G__10503.cljs$lang$maxFixedArity = 3;
G__10503.cljs$lang$applyTo = (function (arglist__10504){
var a = cljs.core.first(arglist__10504);
var b = cljs.core.first(cljs.core.next(arglist__10504));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10504)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10504)));
return G__10503__delegate.call(this, a, b, c, ds);
});
return G__10503;
})()
;
G__10498 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10498__10499.call(this,a,b);
case  3 :
return G__10498__10500.call(this,a,b,c);
default:
return G__10498__10501.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10498.cljs$lang$maxFixedArity = 3;
G__10498.cljs$lang$applyTo = G__10498__10501.cljs$lang$applyTo;
return G__10498;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10459.call(this,f,x);
case  3 :
return fnil__10460.call(this,f,x,y);
case  4 :
return fnil__10461.call(this,f,x,y,z);
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
var mapi__10507 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10505 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10505))
{var s__10506 = temp__3698__auto____10505;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10506)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10506)));
} else
{return null;
}
})));
});

return mapi__10507.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10572 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10572))
{var s__10575 = temp__3698__auto____10572;

var x__10576 = f.call(null,cljs.core.first.call(null,s__10575));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10576)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10575));
} else
{return cljs.core.cons.call(null,x__10576,keep.call(null,f,cljs.core.rest.call(null,s__10575)));
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
var keepi__10616 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10611 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10611))
{var s__10612 = temp__3698__auto____10611;

var x__10613 = f.call(null,idx,cljs.core.first.call(null,s__10612));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10613)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10612));
} else
{return cljs.core.cons.call(null,x__10613,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10612)));
}
} else
{return null;
}
})));
});

return keepi__10616.call(null,0,coll);
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
var every_pred__10783 = (function (p){
return (function() {
var ep1 = null;
var ep1__10795 = (function (){
return true;
});
var ep1__10796 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10797 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10649 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10649))
{return p.call(null,y);
} else
{return and__3546__auto____10649;
}
})());
});
var ep1__10798 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10680 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10680))
{var and__3546__auto____10682 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10682))
{return p.call(null,z);
} else
{return and__3546__auto____10682;
}
} else
{return and__3546__auto____10680;
}
})());
});
var ep1__10799 = (function() { 
var G__10812__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10686 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10686))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10686;
}
})());
};
var G__10812 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10812__delegate.call(this, x, y, z, args);
};
G__10812.cljs$lang$maxFixedArity = 3;
G__10812.cljs$lang$applyTo = (function (arglist__10819){
var x = cljs.core.first(arglist__10819);
var y = cljs.core.first(cljs.core.next(arglist__10819));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10819)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10819)));
return G__10812__delegate.call(this, x, y, z, args);
});
return G__10812;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10795.call(this);
case  1 :
return ep1__10796.call(this,x);
case  2 :
return ep1__10797.call(this,x,y);
case  3 :
return ep1__10798.call(this,x,y,z);
default:
return ep1__10799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10799.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10784 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10825 = (function (){
return true;
});
var ep2__10827 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10691 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10691))
{return p2.call(null,x);
} else
{return and__3546__auto____10691;
}
})());
});
var ep2__10829 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10693 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10693))
{var and__3546__auto____10694 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10694))
{var and__3546__auto____10696 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10696))
{return p2.call(null,y);
} else
{return and__3546__auto____10696;
}
} else
{return and__3546__auto____10694;
}
} else
{return and__3546__auto____10693;
}
})());
});
var ep2__10830 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10697 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10697))
{var and__3546__auto____10699 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10699))
{var and__3546__auto____10701 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10701))
{var and__3546__auto____10702 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10702))
{var and__3546__auto____10703 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10703))
{return p2.call(null,z);
} else
{return and__3546__auto____10703;
}
} else
{return and__3546__auto____10702;
}
} else
{return and__3546__auto____10701;
}
} else
{return and__3546__auto____10699;
}
} else
{return and__3546__auto____10697;
}
})());
});
var ep2__10831 = (function() { 
var G__10883__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10708 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10708))
{return cljs.core.every_QMARK_.call(null,(function (p1__10599_SHARP_){
var and__3546__auto____10709 = p1.call(null,p1__10599_SHARP_);

if(cljs.core.truth_(and__3546__auto____10709))
{return p2.call(null,p1__10599_SHARP_);
} else
{return and__3546__auto____10709;
}
}),args);
} else
{return and__3546__auto____10708;
}
})());
};
var G__10883 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10883__delegate.call(this, x, y, z, args);
};
G__10883.cljs$lang$maxFixedArity = 3;
G__10883.cljs$lang$applyTo = (function (arglist__10885){
var x = cljs.core.first(arglist__10885);
var y = cljs.core.first(cljs.core.next(arglist__10885));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10885)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10885)));
return G__10883__delegate.call(this, x, y, z, args);
});
return G__10883;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10825.call(this);
case  1 :
return ep2__10827.call(this,x);
case  2 :
return ep2__10829.call(this,x,y);
case  3 :
return ep2__10830.call(this,x,y,z);
default:
return ep2__10831.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10831.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10785 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10889 = (function (){
return true;
});
var ep3__10890 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10715 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10715))
{var and__3546__auto____10717 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10717))
{return p3.call(null,x);
} else
{return and__3546__auto____10717;
}
} else
{return and__3546__auto____10715;
}
})());
});
var ep3__10893 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10719 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10719))
{var and__3546__auto____10721 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10721))
{var and__3546__auto____10722 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10722))
{var and__3546__auto____10726 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10726))
{var and__3546__auto____10730 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10730))
{return p3.call(null,y);
} else
{return and__3546__auto____10730;
}
} else
{return and__3546__auto____10726;
}
} else
{return and__3546__auto____10722;
}
} else
{return and__3546__auto____10721;
}
} else
{return and__3546__auto____10719;
}
})());
});
var ep3__10895 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10735 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10735))
{var and__3546__auto____10738 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10738))
{var and__3546__auto____10739 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10739))
{var and__3546__auto____10740 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10740))
{var and__3546__auto____10741 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10741))
{var and__3546__auto____10742 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10742))
{var and__3546__auto____10743 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10743))
{var and__3546__auto____10745 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10745))
{return p3.call(null,z);
} else
{return and__3546__auto____10745;
}
} else
{return and__3546__auto____10743;
}
} else
{return and__3546__auto____10742;
}
} else
{return and__3546__auto____10741;
}
} else
{return and__3546__auto____10740;
}
} else
{return and__3546__auto____10739;
}
} else
{return and__3546__auto____10738;
}
} else
{return and__3546__auto____10735;
}
})());
});
var ep3__10897 = (function() { 
var G__10930__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10748 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10748))
{return cljs.core.every_QMARK_.call(null,(function (p1__10602_SHARP_){
var and__3546__auto____10754 = p1.call(null,p1__10602_SHARP_);

if(cljs.core.truth_(and__3546__auto____10754))
{var and__3546__auto____10756 = p2.call(null,p1__10602_SHARP_);

if(cljs.core.truth_(and__3546__auto____10756))
{return p3.call(null,p1__10602_SHARP_);
} else
{return and__3546__auto____10756;
}
} else
{return and__3546__auto____10754;
}
}),args);
} else
{return and__3546__auto____10748;
}
})());
};
var G__10930 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10930__delegate.call(this, x, y, z, args);
};
G__10930.cljs$lang$maxFixedArity = 3;
G__10930.cljs$lang$applyTo = (function (arglist__10931){
var x = cljs.core.first(arglist__10931);
var y = cljs.core.first(cljs.core.next(arglist__10931));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10931)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10931)));
return G__10930__delegate.call(this, x, y, z, args);
});
return G__10930;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10889.call(this);
case  1 :
return ep3__10890.call(this,x);
case  2 :
return ep3__10893.call(this,x,y);
case  3 :
return ep3__10895.call(this,x,y,z);
default:
return ep3__10897.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10897.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10786 = (function() { 
var G__10932__delegate = function (p1,p2,p3,ps){
var ps__10760 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10934 = (function (){
return true;
});
var epn__10935 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10603_SHARP_){
return p1__10603_SHARP_.call(null,x);
}),ps__10760);
});
var epn__10938 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10605_SHARP_){
var and__3546__auto____10768 = p1__10605_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10768))
{return p1__10605_SHARP_.call(null,y);
} else
{return and__3546__auto____10768;
}
}),ps__10760);
});
var epn__10939 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10606_SHARP_){
var and__3546__auto____10771 = p1__10606_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10771))
{var and__3546__auto____10772 = p1__10606_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10772))
{return p1__10606_SHARP_.call(null,z);
} else
{return and__3546__auto____10772;
}
} else
{return and__3546__auto____10771;
}
}),ps__10760);
});
var epn__10940 = (function() { 
var G__10950__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10773 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10773))
{return cljs.core.every_QMARK_.call(null,(function (p1__10607_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10607_SHARP_,args);
}),ps__10760);
} else
{return and__3546__auto____10773;
}
})());
};
var G__10950 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10950__delegate.call(this, x, y, z, args);
};
G__10950.cljs$lang$maxFixedArity = 3;
G__10950.cljs$lang$applyTo = (function (arglist__10952){
var x = cljs.core.first(arglist__10952);
var y = cljs.core.first(cljs.core.next(arglist__10952));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10952)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10952)));
return G__10950__delegate.call(this, x, y, z, args);
});
return G__10950;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10934.call(this);
case  1 :
return epn__10935.call(this,x);
case  2 :
return epn__10938.call(this,x,y);
case  3 :
return epn__10939.call(this,x,y,z);
default:
return epn__10940.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10940.cljs$lang$applyTo;
return epn;
})()
};
var G__10932 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10932__delegate.call(this, p1, p2, p3, ps);
};
G__10932.cljs$lang$maxFixedArity = 3;
G__10932.cljs$lang$applyTo = (function (arglist__10953){
var p1 = cljs.core.first(arglist__10953);
var p2 = cljs.core.first(cljs.core.next(arglist__10953));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10953)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10953)));
return G__10932__delegate.call(this, p1, p2, p3, ps);
});
return G__10932;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10783.call(this,p1);
case  2 :
return every_pred__10784.call(this,p1,p2);
case  3 :
return every_pred__10785.call(this,p1,p2,p3);
default:
return every_pred__10786.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10786.cljs$lang$applyTo;
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
var some_fn__11134 = (function (p){
return (function() {
var sp1 = null;
var sp1__11142 = (function (){
return null;
});
var sp1__11143 = (function (x){
return p.call(null,x);
});
var sp1__11144 = (function (x,y){
var or__3548__auto____10956 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10956))
{return or__3548__auto____10956;
} else
{return p.call(null,y);
}
});
var sp1__11145 = (function (x,y,z){
var or__3548__auto____10957 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10957))
{return or__3548__auto____10957;
} else
{var or__3548__auto____10958 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____10958))
{return or__3548__auto____10958;
} else
{return p.call(null,z);
}
}
});
var sp1__11146 = (function() { 
var G__11155__delegate = function (x,y,z,args){
var or__3548__auto____10959 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10959))
{return or__3548__auto____10959;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11155 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11155__delegate.call(this, x, y, z, args);
};
G__11155.cljs$lang$maxFixedArity = 3;
G__11155.cljs$lang$applyTo = (function (arglist__11159){
var x = cljs.core.first(arglist__11159);
var y = cljs.core.first(cljs.core.next(arglist__11159));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11159)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11159)));
return G__11155__delegate.call(this, x, y, z, args);
});
return G__11155;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11142.call(this);
case  1 :
return sp1__11143.call(this,x);
case  2 :
return sp1__11144.call(this,x,y);
case  3 :
return sp1__11145.call(this,x,y,z);
default:
return sp1__11146.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11146.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11135 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11165 = (function (){
return null;
});
var sp2__11166 = (function (x){
var or__3548__auto____10960 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10960))
{return or__3548__auto____10960;
} else
{return p2.call(null,x);
}
});
var sp2__11167 = (function (x,y){
var or__3548__auto____10961 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10961))
{return or__3548__auto____10961;
} else
{var or__3548__auto____10962 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10962))
{return or__3548__auto____10962;
} else
{var or__3548__auto____10963 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10963))
{return or__3548__auto____10963;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11168 = (function (x,y,z){
var or__3548__auto____10964 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10964))
{return or__3548__auto____10964;
} else
{var or__3548__auto____10969 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10969))
{return or__3548__auto____10969;
} else
{var or__3548__auto____10971 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10971))
{return or__3548__auto____10971;
} else
{var or__3548__auto____10977 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10977))
{return or__3548__auto____10977;
} else
{var or__3548__auto____10978 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10978))
{return or__3548__auto____10978;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11169 = (function() { 
var G__11178__delegate = function (x,y,z,args){
var or__3548__auto____10979 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10979))
{return or__3548__auto____10979;
} else
{return cljs.core.some.call(null,(function (p1__10627_SHARP_){
var or__3548__auto____10981 = p1.call(null,p1__10627_SHARP_);

if(cljs.core.truth_(or__3548__auto____10981))
{return or__3548__auto____10981;
} else
{return p2.call(null,p1__10627_SHARP_);
}
}),args);
}
};
var G__11178 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11178__delegate.call(this, x, y, z, args);
};
G__11178.cljs$lang$maxFixedArity = 3;
G__11178.cljs$lang$applyTo = (function (arglist__11180){
var x = cljs.core.first(arglist__11180);
var y = cljs.core.first(cljs.core.next(arglist__11180));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11180)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11180)));
return G__11178__delegate.call(this, x, y, z, args);
});
return G__11178;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11165.call(this);
case  1 :
return sp2__11166.call(this,x);
case  2 :
return sp2__11167.call(this,x,y);
case  3 :
return sp2__11168.call(this,x,y,z);
default:
return sp2__11169.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11169.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11136 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11187 = (function (){
return null;
});
var sp3__11188 = (function (x){
var or__3548__auto____10984 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10984))
{return or__3548__auto____10984;
} else
{var or__3548__auto____10989 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10989))
{return or__3548__auto____10989;
} else
{return p3.call(null,x);
}
}
});
var sp3__11189 = (function (x,y){
var or__3548__auto____10990 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10990))
{return or__3548__auto____10990;
} else
{var or__3548__auto____10991 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10991))
{return or__3548__auto____10991;
} else
{var or__3548__auto____10994 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____10994))
{return or__3548__auto____10994;
} else
{var or__3548__auto____10996 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10996))
{return or__3548__auto____10996;
} else
{var or__3548__auto____10998 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10998))
{return or__3548__auto____10998;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11190 = (function (x,y,z){
var or__3548__auto____11003 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11003))
{return or__3548__auto____11003;
} else
{var or__3548__auto____11005 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11005))
{return or__3548__auto____11005;
} else
{var or__3548__auto____11010 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11010))
{return or__3548__auto____11010;
} else
{var or__3548__auto____11011 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11011))
{return or__3548__auto____11011;
} else
{var or__3548__auto____11013 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11013))
{return or__3548__auto____11013;
} else
{var or__3548__auto____11015 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11015))
{return or__3548__auto____11015;
} else
{var or__3548__auto____11016 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11016))
{return or__3548__auto____11016;
} else
{var or__3548__auto____11019 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11019))
{return or__3548__auto____11019;
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
var sp3__11191 = (function() { 
var G__11227__delegate = function (x,y,z,args){
var or__3548__auto____11021 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11021))
{return or__3548__auto____11021;
} else
{return cljs.core.some.call(null,(function (p1__10636_SHARP_){
var or__3548__auto____11023 = p1.call(null,p1__10636_SHARP_);

if(cljs.core.truth_(or__3548__auto____11023))
{return or__3548__auto____11023;
} else
{var or__3548__auto____11024 = p2.call(null,p1__10636_SHARP_);

if(cljs.core.truth_(or__3548__auto____11024))
{return or__3548__auto____11024;
} else
{return p3.call(null,p1__10636_SHARP_);
}
}
}),args);
}
};
var G__11227 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11227__delegate.call(this, x, y, z, args);
};
G__11227.cljs$lang$maxFixedArity = 3;
G__11227.cljs$lang$applyTo = (function (arglist__11229){
var x = cljs.core.first(arglist__11229);
var y = cljs.core.first(cljs.core.next(arglist__11229));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11229)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11229)));
return G__11227__delegate.call(this, x, y, z, args);
});
return G__11227;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11187.call(this);
case  1 :
return sp3__11188.call(this,x);
case  2 :
return sp3__11189.call(this,x,y);
case  3 :
return sp3__11190.call(this,x,y,z);
default:
return sp3__11191.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11191.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11137 = (function() { 
var G__11230__delegate = function (p1,p2,p3,ps){
var ps__11025 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11233 = (function (){
return null;
});
var spn__11234 = (function (x){
return cljs.core.some.call(null,(function (p1__10637_SHARP_){
return p1__10637_SHARP_.call(null,x);
}),ps__11025);
});
var spn__11235 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10638_SHARP_){
var or__3548__auto____11115 = p1__10638_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11115))
{return or__3548__auto____11115;
} else
{return p1__10638_SHARP_.call(null,y);
}
}),ps__11025);
});
var spn__11236 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10639_SHARP_){
var or__3548__auto____11127 = p1__10639_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11127))
{return or__3548__auto____11127;
} else
{var or__3548__auto____11128 = p1__10639_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11128))
{return or__3548__auto____11128;
} else
{return p1__10639_SHARP_.call(null,z);
}
}
}),ps__11025);
});
var spn__11238 = (function() { 
var G__11250__delegate = function (x,y,z,args){
var or__3548__auto____11129 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11129))
{return or__3548__auto____11129;
} else
{return cljs.core.some.call(null,(function (p1__10644_SHARP_){
return cljs.core.some.call(null,p1__10644_SHARP_,args);
}),ps__11025);
}
};
var G__11250 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11250__delegate.call(this, x, y, z, args);
};
G__11250.cljs$lang$maxFixedArity = 3;
G__11250.cljs$lang$applyTo = (function (arglist__11251){
var x = cljs.core.first(arglist__11251);
var y = cljs.core.first(cljs.core.next(arglist__11251));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11251)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11251)));
return G__11250__delegate.call(this, x, y, z, args);
});
return G__11250;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11233.call(this);
case  1 :
return spn__11234.call(this,x);
case  2 :
return spn__11235.call(this,x,y);
case  3 :
return spn__11236.call(this,x,y,z);
default:
return spn__11238.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11238.cljs$lang$applyTo;
return spn;
})()
};
var G__11230 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11230__delegate.call(this, p1, p2, p3, ps);
};
G__11230.cljs$lang$maxFixedArity = 3;
G__11230.cljs$lang$applyTo = (function (arglist__11257){
var p1 = cljs.core.first(arglist__11257);
var p2 = cljs.core.first(cljs.core.next(arglist__11257));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11257)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11257)));
return G__11230__delegate.call(this, p1, p2, p3, ps);
});
return G__11230;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11134.call(this,p1);
case  2 :
return some_fn__11135.call(this,p1,p2);
case  3 :
return some_fn__11136.call(this,p1,p2,p3);
default:
return some_fn__11137.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11137.cljs$lang$applyTo;
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
var map__11382 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11272 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11272))
{var s__11333 = temp__3698__auto____11272;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11333)),map.call(null,f,cljs.core.rest.call(null,s__11333)));
} else
{return null;
}
})));
});
var map__11383 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11336 = cljs.core.seq.call(null,c1);
var s2__11338 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11339 = s1__11336;

if(cljs.core.truth_(and__3546__auto____11339))
{return s2__11338;
} else
{return and__3546__auto____11339;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11336),cljs.core.first.call(null,s2__11338)),map.call(null,f,cljs.core.rest.call(null,s1__11336),cljs.core.rest.call(null,s2__11338)));
} else
{return null;
}
})));
});
var map__11384 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11342 = cljs.core.seq.call(null,c1);
var s2__11344 = cljs.core.seq.call(null,c2);
var s3__11345 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11349 = s1__11342;

if(cljs.core.truth_(and__3546__auto____11349))
{var and__3546__auto____11353 = s2__11344;

if(cljs.core.truth_(and__3546__auto____11353))
{return s3__11345;
} else
{return and__3546__auto____11353;
}
} else
{return and__3546__auto____11349;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11342),cljs.core.first.call(null,s2__11344),cljs.core.first.call(null,s3__11345)),map.call(null,f,cljs.core.rest.call(null,s1__11342),cljs.core.rest.call(null,s2__11344),cljs.core.rest.call(null,s3__11345)));
} else
{return null;
}
})));
});
var map__11385 = (function() { 
var G__11399__delegate = function (f,c1,c2,c3,colls){
var step__11370 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11366 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11366)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11366),step.call(null,map.call(null,cljs.core.rest,ss__11366)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__10954_SHARP_){
return cljs.core.apply.call(null,f,p1__10954_SHARP_);
}),step__11370.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11399 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11399__delegate.call(this, f, c1, c2, c3, colls);
};
G__11399.cljs$lang$maxFixedArity = 4;
G__11399.cljs$lang$applyTo = (function (arglist__11410){
var f = cljs.core.first(arglist__11410);
var c1 = cljs.core.first(cljs.core.next(arglist__11410));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11410)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11410))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11410))));
return G__11399__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11399;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11382.call(this,f,c1);
case  3 :
return map__11383.call(this,f,c1,c2);
case  4 :
return map__11384.call(this,f,c1,c2,c3);
default:
return map__11385.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11385.cljs$lang$applyTo;
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
{var temp__3698__auto____11422 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11422))
{var s__11425 = temp__3698__auto____11422;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11425),take.call(null,(n - 1),cljs.core.rest.call(null,s__11425)));
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
var step__11452 = (function (n,coll){
while(true){
var s__11448 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11450 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11450))
{return s__11448;
} else
{return and__3546__auto____11450;
}
})()))
{{
var G__11459 = (n - 1);
var G__11460 = cljs.core.rest.call(null,s__11448);
n = G__11459;
coll = G__11460;
continue;
}
} else
{return s__11448;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11452.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11471 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11472 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11471.call(this,n);
case  2 :
return drop_last__11472.call(this,n,s);
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
var s__11557 = cljs.core.seq.call(null,coll);
var lead__11558 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11558))
{{
var G__11630 = cljs.core.next.call(null,s__11557);
var G__11631 = cljs.core.next.call(null,lead__11558);
s__11557 = G__11630;
lead__11558 = G__11631;
continue;
}
} else
{return s__11557;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11790 = (function (pred,coll){
while(true){
var s__11637 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11642 = s__11637;

if(cljs.core.truth_(and__3546__auto____11642))
{return pred.call(null,cljs.core.first.call(null,s__11637));
} else
{return and__3546__auto____11642;
}
})()))
{{
var G__11795 = pred;
var G__11796 = cljs.core.rest.call(null,s__11637);
pred = G__11795;
coll = G__11796;
continue;
}
} else
{return s__11637;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11790.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11807 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11807))
{var s__11809 = temp__3698__auto____11807;

return cljs.core.concat.call(null,s__11809,cycle.call(null,s__11809));
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
var repeat__11823 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11824 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11823.call(this,n);
case  2 :
return repeat__11824.call(this,n,x);
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
var repeatedly__11844 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11845 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11844.call(this,n);
case  2 :
return repeatedly__11845.call(this,n,f);
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
var interleave__11873 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11860 = cljs.core.seq.call(null,c1);
var s2__11861 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11862 = s1__11860;

if(cljs.core.truth_(and__3546__auto____11862))
{return s2__11861;
} else
{return and__3546__auto____11862;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11860),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11861),interleave.call(null,cljs.core.rest.call(null,s1__11860),cljs.core.rest.call(null,s2__11861))));
} else
{return null;
}
})));
});
var interleave__11874 = (function() { 
var G__11877__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11872 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11872)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11872),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11872)));
} else
{return null;
}
})));
};
var G__11877 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11877__delegate.call(this, c1, c2, colls);
};
G__11877.cljs$lang$maxFixedArity = 2;
G__11877.cljs$lang$applyTo = (function (arglist__11880){
var c1 = cljs.core.first(arglist__11880);
var c2 = cljs.core.first(cljs.core.next(arglist__11880));
var colls = cljs.core.rest(cljs.core.next(arglist__11880));
return G__11877__delegate.call(this, c1, c2, colls);
});
return G__11877;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11873.call(this,c1,c2);
default:
return interleave__11874.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11874.cljs$lang$applyTo;
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
var cat__11897 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11893 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11893))
{var coll__11894 = temp__3695__auto____11893;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11894),cat.call(null,cljs.core.rest.call(null,coll__11894),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11897.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11907 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11908 = (function() { 
var G__11911__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11911 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11911__delegate.call(this, f, coll, colls);
};
G__11911.cljs$lang$maxFixedArity = 2;
G__11911.cljs$lang$applyTo = (function (arglist__11912){
var f = cljs.core.first(arglist__11912);
var coll = cljs.core.first(cljs.core.next(arglist__11912));
var colls = cljs.core.rest(cljs.core.next(arglist__11912));
return G__11911__delegate.call(this, f, coll, colls);
});
return G__11911;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11907.call(this,f,coll);
default:
return mapcat__11908.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11908.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11917 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11917))
{var s__11918 = temp__3698__auto____11917;

var f__11919 = cljs.core.first.call(null,s__11918);
var r__11921 = cljs.core.rest.call(null,s__11918);

if(cljs.core.truth_(pred.call(null,f__11919)))
{return cljs.core.cons.call(null,f__11919,filter.call(null,pred,r__11921));
} else
{return filter.call(null,pred,r__11921);
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
var walk__11938 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11938.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11934_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11934_SHARP_));
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
var partition__12006 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12007 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11957 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11957))
{var s__11958 = temp__3698__auto____11957;

var p__11960 = cljs.core.take.call(null,n,s__11958);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11960))))
{return cljs.core.cons.call(null,p__11960,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11958)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12008 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11985 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11985))
{var s__12003 = temp__3698__auto____11985;

var p__12004 = cljs.core.take.call(null,n,s__12003);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12004))))
{return cljs.core.cons.call(null,p__12004,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12003)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12004,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12006.call(this,n,step);
case  3 :
return partition__12007.call(this,n,step,pad);
case  4 :
return partition__12008.call(this,n,step,pad,coll);
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
var get_in__12025 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12026 = (function (m,ks,not_found){
var sentinel__12018 = cljs.core.lookup_sentinel;
var m__12019 = m;
var ks__12020 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12020))
{var m__12021 = cljs.core.get.call(null,m__12019,cljs.core.first.call(null,ks__12020),sentinel__12018);

if(cljs.core.truth_((sentinel__12018 === m__12021)))
{return not_found;
} else
{{
var G__12029 = sentinel__12018;
var G__12030 = m__12021;
var G__12031 = cljs.core.next.call(null,ks__12020);
sentinel__12018 = G__12029;
m__12019 = G__12030;
ks__12020 = G__12031;
continue;
}
}
} else
{return m__12019;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12025.call(this,m,ks);
case  3 :
return get_in__12026.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12034,v){
var vec__12035__12036 = p__12034;
var k__12037 = cljs.core.nth.call(null,vec__12035__12036,0,null);
var ks__12038 = cljs.core.nthnext.call(null,vec__12035__12036,1);

if(cljs.core.truth_(ks__12038))
{return cljs.core.assoc.call(null,m,k__12037,assoc_in.call(null,cljs.core.get.call(null,m,k__12037),ks__12038,v));
} else
{return cljs.core.assoc.call(null,m,k__12037,v);
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
var update_in__delegate = function (m,p__12051,f,args){
var vec__12056__12058 = p__12051;
var k__12059 = cljs.core.nth.call(null,vec__12056__12058,0,null);
var ks__12060 = cljs.core.nthnext.call(null,vec__12056__12058,1);

if(cljs.core.truth_(ks__12060))
{return cljs.core.assoc.call(null,m,k__12059,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12059),ks__12060,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12059,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12059),args));
}
};
var update_in = function (m,p__12051,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12051, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12061){
var m = cljs.core.first(arglist__12061);
var p__12051 = cljs.core.first(cljs.core.next(arglist__12061));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12061)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12061)));
return update_in__delegate.call(this, m, p__12051, f, args);
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
var this__12077 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12325 = null;
var G__12325__12326 = (function (coll,k){
var this__12081 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12325__12327 = (function (coll,k,not_found){
var this__12085 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12325 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12325__12326.call(this,coll,k);
case  3 :
return G__12325__12327.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12325;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12086 = this;
var new_array__12091 = cljs.core.aclone.call(null,this__12086.array);

(new_array__12091[k] = v);
return (new cljs.core.Vector(this__12086.meta,new_array__12091));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12336 = null;
var G__12336__12337 = (function (coll,k){
var this__12092 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12336__12338 = (function (coll,k,not_found){
var this__12094 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12336 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12336__12337.call(this,coll,k);
case  3 :
return G__12336__12338.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12336;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12099 = this;
var new_array__12100 = cljs.core.aclone.call(null,this__12099.array);

new_array__12100.push(o);
return (new cljs.core.Vector(this__12099.meta,new_array__12100));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12344 = null;
var G__12344__12345 = (function (v,f){
var this__12101 = this;
return cljs.core.ci_reduce.call(null,this__12101.array,f);
});
var G__12344__12346 = (function (v,f,start){
var this__12102 = this;
return cljs.core.ci_reduce.call(null,this__12102.array,f,start);
});
G__12344 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12344__12345.call(this,v,f);
case  3 :
return G__12344__12346.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12344;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12103 = this;
if(cljs.core.truth_((this__12103.array.length > 0)))
{var vector_seq__12120 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12103.array.length)))
{return cljs.core.cons.call(null,(this__12103.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12120.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12123 = this;
return this__12123.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12124 = this;
var count__12134 = this__12124.array.length;

if(cljs.core.truth_((count__12134 > 0)))
{return (this__12124.array[(count__12134 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12138 = this;
if(cljs.core.truth_((this__12138.array.length > 0)))
{var new_array__12139 = cljs.core.aclone.call(null,this__12138.array);

new_array__12139.pop();
return (new cljs.core.Vector(this__12138.meta,new_array__12139));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12140 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12141 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12168 = this;
return (new cljs.core.Vector(meta,this__12168.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12305 = this;
return this__12305.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12358 = null;
var G__12358__12359 = (function (coll,n){
var this__12306 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12308 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12308))
{return (n < this__12306.array.length);
} else
{return and__3546__auto____12308;
}
})()))
{return (this__12306.array[n]);
} else
{return null;
}
});
var G__12358__12360 = (function (coll,n,not_found){
var this__12311 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12315 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12315))
{return (n < this__12311.array.length);
} else
{return and__3546__auto____12315;
}
})()))
{return (this__12311.array[n]);
} else
{return not_found;
}
});
G__12358 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12358__12359.call(this,coll,n);
case  3 :
return G__12358__12360.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12358;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12317 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12317.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12373){
var args = cljs.core.seq( arglist__12373 );;
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
var this__12387 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12515 = null;
var G__12515__12516 = (function (coll,k){
var this__12388 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12515__12589 = (function (coll,k,not_found){
var this__12421 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12515 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12515__12516.call(this,coll,k);
case  3 :
return G__12515__12589.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12515;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12424 = this;
var v_pos__12428 = (this__12424.start + key);

return (new cljs.core.Subvec(this__12424.meta,cljs.core._assoc.call(null,this__12424.v,v_pos__12428,val),this__12424.start,((this__12424.end > (v_pos__12428 + 1)) ? this__12424.end : (v_pos__12428 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12596 = null;
var G__12596__12597 = (function (coll,k){
var this__12430 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12596__12598 = (function (coll,k,not_found){
var this__12431 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12596 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12596__12597.call(this,coll,k);
case  3 :
return G__12596__12598.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12596;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12437 = this;
return (new cljs.core.Subvec(this__12437.meta,cljs.core._assoc_n.call(null,this__12437.v,this__12437.end,o),this__12437.start,(this__12437.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12605 = null;
var G__12605__12606 = (function (coll,f){
var this__12442 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12605__12607 = (function (coll,f,start){
var this__12444 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12605 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12605__12606.call(this,coll,f);
case  3 :
return G__12605__12607.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12605;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12448 = this;
var subvec_seq__12453 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12448.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12448.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12453.call(null,this__12448.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12455 = this;
return (this__12455.end - this__12455.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12459 = this;
return cljs.core._nth.call(null,this__12459.v,(this__12459.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12462 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12462.start,this__12462.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12462.meta,this__12462.v,this__12462.start,(this__12462.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12466 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12493 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12494 = this;
return (new cljs.core.Subvec(meta,this__12494.v,this__12494.start,this__12494.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12499 = this;
return this__12499.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12629 = null;
var G__12629__12630 = (function (coll,n){
var this__12502 = this;
return cljs.core._nth.call(null,this__12502.v,(this__12502.start + n));
});
var G__12629__12631 = (function (coll,n,not_found){
var this__12503 = this;
return cljs.core._nth.call(null,this__12503.v,(this__12503.start + n),not_found);
});
G__12629 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12629__12630.call(this,coll,n);
case  3 :
return G__12629__12631.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12629;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12504 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12504.meta);
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
var subvec__12652 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12654 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12652.call(this,v,start);
case  3 :
return subvec__12654.call(this,v,start,end);
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
var this__12674 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12675 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12677 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12685 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12685.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12687 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12691 = this;
return cljs.core._first.call(null,this__12691.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12693 = this;
var temp__3695__auto____12697 = cljs.core.next.call(null,this__12693.front);

if(cljs.core.truth_(temp__3695__auto____12697))
{var f1__12698 = temp__3695__auto____12697;

return (new cljs.core.PersistentQueueSeq(this__12693.meta,f1__12698,this__12693.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12693.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12693.meta,this__12693.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12701 = this;
return this__12701.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12703 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12703.front,this__12703.rear));
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
var this__12723 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12724 = this;
if(cljs.core.truth_(this__12724.front))
{return (new cljs.core.PersistentQueue(this__12724.meta,(this__12724.count + 1),this__12724.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12725 = this__12724.rear;

if(cljs.core.truth_(or__3548__auto____12725))
{return or__3548__auto____12725;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12724.meta,(this__12724.count + 1),cljs.core.conj.call(null,this__12724.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12727 = this;
var rear__12728 = cljs.core.seq.call(null,this__12727.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12732 = this__12727.front;

if(cljs.core.truth_(or__3548__auto____12732))
{return or__3548__auto____12732;
} else
{return rear__12728;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12727.front,cljs.core.seq.call(null,rear__12728)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12735 = this;
return this__12735.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12736 = this;
return cljs.core._first.call(null,this__12736.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12737 = this;
if(cljs.core.truth_(this__12737.front))
{var temp__3695__auto____12738 = cljs.core.next.call(null,this__12737.front);

if(cljs.core.truth_(temp__3695__auto____12738))
{var f1__12739 = temp__3695__auto____12738;

return (new cljs.core.PersistentQueue(this__12737.meta,(this__12737.count - 1),f1__12739,this__12737.rear));
} else
{return (new cljs.core.PersistentQueue(this__12737.meta,(this__12737.count - 1),cljs.core.seq.call(null,this__12737.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12740 = this;
return cljs.core.first.call(null,this__12740.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12741 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12742 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12743 = this;
return (new cljs.core.PersistentQueue(meta,this__12743.count,this__12743.front,this__12743.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12746 = this;
return this__12746.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12768 = this;
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
var len__12902 = array.length;

var i__12904 = 0;

while(true){
if(cljs.core.truth_((i__12904 < len__12902)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12904]))))
{return i__12904;
} else
{{
var G__12910 = (i__12904 + incr);
i__12904 = G__12910;
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
var obj_map_contains_key_QMARK___12916 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12917 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12915 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12915))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12915;
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
return obj_map_contains_key_QMARK___12916.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12917.call(this,k,strobj,true_val,false_val);
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
var G__12983 = null;
var G__12983__12984 = (function (coll,k){
var this__12930 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12983__12985 = (function (coll,k,not_found){
var this__12931 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12931.strobj,(this__12931.strobj[k]),not_found);
});
G__12983 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12983__12984.call(this,coll,k);
case  3 :
return G__12983__12985.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12983;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12932 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12933 = goog.object.clone.call(null,this__12932.strobj);
var overwrite_QMARK___12934 = new_strobj__12933.hasOwnProperty(k);

(new_strobj__12933[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12934))
{return (new cljs.core.ObjMap(this__12932.meta,this__12932.keys,new_strobj__12933));
} else
{var new_keys__12935 = cljs.core.aclone.call(null,this__12932.keys);

new_keys__12935.push(k);
return (new cljs.core.ObjMap(this__12932.meta,new_keys__12935,new_strobj__12933));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12932.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12940 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12940.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12996 = null;
var G__12996__12997 = (function (coll,k){
var this__12941 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12996__12998 = (function (coll,k,not_found){
var this__12942 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12996 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12996__12997.call(this,coll,k);
case  3 :
return G__12996__12998.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12996;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12945 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12952 = this;
if(cljs.core.truth_((this__12952.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12923_SHARP_){
return cljs.core.vector.call(null,p1__12923_SHARP_,(this__12952.strobj[p1__12923_SHARP_]));
}),this__12952.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12954 = this;
return this__12954.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12957 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12959 = this;
return (new cljs.core.ObjMap(meta,this__12959.keys,this__12959.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12962 = this;
return this__12962.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12965 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12965.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12968 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12969 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12969))
{return this__12968.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12969;
}
})()))
{var new_keys__12971 = cljs.core.aclone.call(null,this__12968.keys);
var new_strobj__12973 = goog.object.clone.call(null,this__12968.strobj);

new_keys__12971.splice(cljs.core.scan_array.call(null,1,k,new_keys__12971),1);
cljs.core.js_delete.call(null,new_strobj__12973,k);
return (new cljs.core.ObjMap(this__12968.meta,new_keys__12971,new_strobj__12973));
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
var this__13098 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13161 = null;
var G__13161__13162 = (function (coll,k){
var this__13099 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13161__13163 = (function (coll,k,not_found){
var this__13101 = this;
var bucket__13103 = (this__13101.hashobj[cljs.core.hash.call(null,k)]);
var i__13105 = (cljs.core.truth_(bucket__13103)?cljs.core.scan_array.call(null,2,k,bucket__13103):null);

if(cljs.core.truth_(i__13105))
{return (bucket__13103[(i__13105 + 1)]);
} else
{return not_found;
}
});
G__13161 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13161__13162.call(this,coll,k);
case  3 :
return G__13161__13163.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13161;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13108 = this;
var h__13110 = cljs.core.hash.call(null,k);
var bucket__13111 = (this__13108.hashobj[h__13110]);

if(cljs.core.truth_(bucket__13111))
{var new_bucket__13112 = cljs.core.aclone.call(null,bucket__13111);
var new_hashobj__13114 = goog.object.clone.call(null,this__13108.hashobj);

(new_hashobj__13114[h__13110] = new_bucket__13112);
var temp__3695__auto____13115 = cljs.core.scan_array.call(null,2,k,new_bucket__13112);

if(cljs.core.truth_(temp__3695__auto____13115))
{var i__13116 = temp__3695__auto____13115;

(new_bucket__13112[(i__13116 + 1)] = v);
return (new cljs.core.HashMap(this__13108.meta,this__13108.count,new_hashobj__13114));
} else
{new_bucket__13112.push(k,v);
return (new cljs.core.HashMap(this__13108.meta,(this__13108.count + 1),new_hashobj__13114));
}
} else
{var new_hashobj__13119 = goog.object.clone.call(null,this__13108.hashobj);

(new_hashobj__13119[h__13110] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13108.meta,(this__13108.count + 1),new_hashobj__13119));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13121 = this;
var bucket__13122 = (this__13121.hashobj[cljs.core.hash.call(null,k)]);
var i__13124 = (cljs.core.truth_(bucket__13122)?cljs.core.scan_array.call(null,2,k,bucket__13122):null);

if(cljs.core.truth_(i__13124))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13193 = null;
var G__13193__13194 = (function (coll,k){
var this__13128 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13193__13195 = (function (coll,k,not_found){
var this__13129 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13193 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13193__13194.call(this,coll,k);
case  3 :
return G__13193__13195.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13193;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13133 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13137 = this;
if(cljs.core.truth_((this__13137.count > 0)))
{var hashes__13141 = cljs.core.js_keys.call(null,this__13137.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13077_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13137.hashobj[p1__13077_SHARP_])));
}),hashes__13141);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13144 = this;
return this__13144.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13146 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13148 = this;
return (new cljs.core.HashMap(meta,this__13148.count,this__13148.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13149 = this;
return this__13149.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13150 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13150.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13155 = this;
var h__13156 = cljs.core.hash.call(null,k);
var bucket__13157 = (this__13155.hashobj[h__13156]);
var i__13158 = (cljs.core.truth_(bucket__13157)?cljs.core.scan_array.call(null,2,k,bucket__13157):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13158)))
{return coll;
} else
{var new_hashobj__13159 = goog.object.clone.call(null,this__13155.hashobj);

if(cljs.core.truth_((3 > bucket__13157.length)))
{cljs.core.js_delete.call(null,new_hashobj__13159,h__13156);
} else
{var new_bucket__13160 = cljs.core.aclone.call(null,bucket__13157);

new_bucket__13160.splice(i__13158,2);
(new_hashobj__13159[h__13156] = new_bucket__13160);
}
return (new cljs.core.HashMap(this__13155.meta,(this__13155.count - 1),new_hashobj__13159));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13202 = ks.length;

var i__13203 = 0;
var out__13204 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13203 < len__13202)))
{{
var G__13208 = (i__13203 + 1);
var G__13209 = cljs.core.assoc.call(null,out__13204,(ks[i__13203]),(vs[i__13203]));
i__13203 = G__13208;
out__13204 = G__13209;
continue;
}
} else
{return out__13204;
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
var in$__13212 = cljs.core.seq.call(null,keyvals);
var out__13213 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13212))
{{
var G__13218 = cljs.core.nnext.call(null,in$__13212);
var G__13219 = cljs.core.assoc.call(null,out__13213,cljs.core.first.call(null,in$__13212),cljs.core.second.call(null,in$__13212));
in$__13212 = G__13218;
out__13213 = G__13219;
continue;
}
} else
{return out__13213;
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
hash_map.cljs$lang$applyTo = (function (arglist__13224){
var keyvals = cljs.core.seq( arglist__13224 );;
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
{return cljs.core.reduce.call(null,(function (p1__13225_SHARP_,p2__13226_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13230 = p1__13225_SHARP_;

if(cljs.core.truth_(or__3548__auto____13230))
{return or__3548__auto____13230;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13226_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13235){
var maps = cljs.core.seq( arglist__13235 );;
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
{var merge_entry__13241 = (function (m,e){
var k__13237 = cljs.core.first.call(null,e);
var v__13238 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13237)))
{return cljs.core.assoc.call(null,m,k__13237,f.call(null,cljs.core.get.call(null,m,k__13237),v__13238));
} else
{return cljs.core.assoc.call(null,m,k__13237,v__13238);
}
});
var merge2__13244 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13241,(function (){var or__3548__auto____13242 = m1;

if(cljs.core.truth_(or__3548__auto____13242))
{return or__3548__auto____13242;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13244,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13252){
var f = cljs.core.first(arglist__13252);
var maps = cljs.core.rest(arglist__13252);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13317 = cljs.core.ObjMap.fromObject([],{});
var keys__13320 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13320))
{var key__13321 = cljs.core.first.call(null,keys__13320);
var entry__13322 = cljs.core.get.call(null,map,key__13321,"﷐'user/not-found");

{
var G__13326 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13322,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13317,key__13321,entry__13322):ret__13317);
var G__13327 = cljs.core.next.call(null,keys__13320);
ret__13317 = G__13326;
keys__13320 = G__13327;
continue;
}
} else
{return ret__13317;
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
var this__13342 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13389 = null;
var G__13389__13390 = (function (coll,v){
var this__13343 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13389__13391 = (function (coll,v,not_found){
var this__13345 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13345.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13389 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13389__13390.call(this,coll,v);
case  3 :
return G__13389__13391.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13389;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13394 = null;
var G__13394__13395 = (function (coll,k){
var this__13350 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13394__13396 = (function (coll,k,not_found){
var this__13353 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13394 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13394__13395.call(this,coll,k);
case  3 :
return G__13394__13396.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13394;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13355 = this;
return (new cljs.core.Set(this__13355.meta,cljs.core.assoc.call(null,this__13355.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13358 = this;
return cljs.core.keys.call(null,this__13358.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13359 = this;
return (new cljs.core.Set(this__13359.meta,cljs.core.dissoc.call(null,this__13359.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13360 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13364 = this;
var and__3546__auto____13369 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13369))
{var and__3546__auto____13372 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13372))
{return cljs.core.every_QMARK_.call(null,(function (p1__13315_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13315_SHARP_);
}),other);
} else
{return and__3546__auto____13372;
}
} else
{return and__3546__auto____13369;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13375 = this;
return (new cljs.core.Set(meta,this__13375.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13376 = this;
return this__13376.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13387 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13387.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13408 = cljs.core.seq.call(null,coll);
var out__13409 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13408))))
{{
var G__13418 = cljs.core.rest.call(null,in$__13408);
var G__13419 = cljs.core.conj.call(null,out__13409,cljs.core.first.call(null,in$__13408));
in$__13408 = G__13418;
out__13409 = G__13419;
continue;
}
} else
{return out__13409;
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
{var n__13425 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13429 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13429))
{var e__13433 = temp__3695__auto____13429;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13433));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13425,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13407_SHARP_){
var temp__3695__auto____13434 = cljs.core.find.call(null,smap,p1__13407_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13434))
{var e__13436 = temp__3695__auto____13434;

return cljs.core.second.call(null,e__13436);
} else
{return p1__13407_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13477 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13462,seen){
while(true){
var vec__13464__13466 = p__13462;
var f__13467 = cljs.core.nth.call(null,vec__13464__13466,0,null);
var xs__13468 = vec__13464__13466;

var temp__3698__auto____13471 = cljs.core.seq.call(null,xs__13468);

if(cljs.core.truth_(temp__3698__auto____13471))
{var s__13473 = temp__3698__auto____13471;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13467)))
{{
var G__13485 = cljs.core.rest.call(null,s__13473);
var G__13486 = seen;
p__13462 = G__13485;
seen = G__13486;
continue;
}
} else
{return cljs.core.cons.call(null,f__13467,step.call(null,cljs.core.rest.call(null,s__13473),cljs.core.conj.call(null,seen,f__13467)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13477.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13507 = cljs.core.Vector.fromArray([]);
var s__13508 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13508)))
{{
var G__13515 = cljs.core.conj.call(null,ret__13507,cljs.core.first.call(null,s__13508));
var G__13516 = cljs.core.next.call(null,s__13508);
ret__13507 = G__13515;
s__13508 = G__13516;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13507);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13549 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13549))
{return or__3548__auto____13549;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13550 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13550 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13550 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13562 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13562))
{return or__3548__auto____13562;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13564 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13564 > -1)))
{return cljs.core.subs.call(null,x,2,i__13564);
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
var map__13577 = cljs.core.ObjMap.fromObject([],{});
var ks__13579 = cljs.core.seq.call(null,keys);
var vs__13580 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13581 = ks__13579;

if(cljs.core.truth_(and__3546__auto____13581))
{return vs__13580;
} else
{return and__3546__auto____13581;
}
})()))
{{
var G__13583 = cljs.core.assoc.call(null,map__13577,cljs.core.first.call(null,ks__13579),cljs.core.first.call(null,vs__13580));
var G__13584 = cljs.core.next.call(null,ks__13579);
var G__13585 = cljs.core.next.call(null,vs__13580);
map__13577 = G__13583;
ks__13579 = G__13584;
vs__13580 = G__13585;
continue;
}
} else
{return map__13577;
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
var max_key__13607 = (function (k,x){
return x;
});
var max_key__13608 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13609 = (function() { 
var G__13613__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13571_SHARP_,p2__13572_SHARP_){
return max_key.call(null,k,p1__13571_SHARP_,p2__13572_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13613 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13613__delegate.call(this, k, x, y, more);
};
G__13613.cljs$lang$maxFixedArity = 3;
G__13613.cljs$lang$applyTo = (function (arglist__13615){
var k = cljs.core.first(arglist__13615);
var x = cljs.core.first(cljs.core.next(arglist__13615));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13615)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13615)));
return G__13613__delegate.call(this, k, x, y, more);
});
return G__13613;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13607.call(this,k,x);
case  3 :
return max_key__13608.call(this,k,x,y);
default:
return max_key__13609.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13609.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13618 = (function (k,x){
return x;
});
var min_key__13619 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13620 = (function() { 
var G__13624__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13603_SHARP_,p2__13604_SHARP_){
return min_key.call(null,k,p1__13603_SHARP_,p2__13604_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13624 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13624__delegate.call(this, k, x, y, more);
};
G__13624.cljs$lang$maxFixedArity = 3;
G__13624.cljs$lang$applyTo = (function (arglist__13625){
var k = cljs.core.first(arglist__13625);
var x = cljs.core.first(cljs.core.next(arglist__13625));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13625)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13625)));
return G__13624__delegate.call(this, k, x, y, more);
});
return G__13624;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13618.call(this,k,x);
case  3 :
return min_key__13619.call(this,k,x,y);
default:
return min_key__13620.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13620.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13632 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13633 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13630 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13630))
{var s__13631 = temp__3698__auto____13630;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13631),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13631)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13632.call(this,n,step);
case  3 :
return partition_all__13633.call(this,n,step,coll);
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
var this__13671 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13677 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13732 = null;
var G__13732__13733 = (function (rng,f){
var this__13679 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13732__13734 = (function (rng,f,s){
var this__13684 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13732 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13732__13733.call(this,rng,f);
case  3 :
return G__13732__13734.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13732;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13686 = this;
var comp__13689 = (cljs.core.truth_((this__13686.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13689.call(null,this__13686.start,this__13686.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13693 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13693.end - this__13693.start) / this__13693.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13694 = this;
return this__13694.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13695 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13695.meta,(this__13695.start + this__13695.step),this__13695.end,this__13695.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13698 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13706 = this;
return (new cljs.core.Range(meta,this__13706.start,this__13706.end,this__13706.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13708 = this;
return this__13708.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13747 = null;
var G__13747__13749 = (function (rng,n){
var this__13710 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13710.start + (n * this__13710.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13712 = (this__13710.start > this__13710.end);

if(cljs.core.truth_(and__3546__auto____13712))
{return cljs.core._EQ_.call(null,this__13710.step,0);
} else
{return and__3546__auto____13712;
}
})()))
{return this__13710.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13747__13750 = (function (rng,n,not_found){
var this__13713 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13713.start + (n * this__13713.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13714 = (this__13713.start > this__13713.end);

if(cljs.core.truth_(and__3546__auto____13714))
{return cljs.core._EQ_.call(null,this__13713.step,0);
} else
{return and__3546__auto____13714;
}
})()))
{return this__13713.start;
} else
{return not_found;
}
}
});
G__13747 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13747__13749.call(this,rng,n);
case  3 :
return G__13747__13750.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13747;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13718 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13718.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13777 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13778 = (function (end){
return range.call(null,0,end,1);
});
var range__13779 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13780 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13777.call(this);
case  1 :
return range__13778.call(this,start);
case  2 :
return range__13779.call(this,start,end);
case  3 :
return range__13780.call(this,start,end,step);
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
var temp__3698__auto____13785 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13785))
{var s__13786 = temp__3698__auto____13785;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13786),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13786)));
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
var temp__3698__auto____13807 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13807))
{var s__13809 = temp__3698__auto____13807;

var fst__13810 = cljs.core.first.call(null,s__13809);
var fv__13811 = f.call(null,fst__13810);
var run__13813 = cljs.core.cons.call(null,fst__13810,cljs.core.take_while.call(null,(function (p1__13797_SHARP_){
return cljs.core._EQ_.call(null,fv__13811,f.call(null,p1__13797_SHARP_));
}),cljs.core.next.call(null,s__13809)));

return cljs.core.cons.call(null,run__13813,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13813),s__13809))));
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
var reductions__13916 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13859 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13859))
{var s__13860 = temp__3695__auto____13859;

return reductions.call(null,f,cljs.core.first.call(null,s__13860),cljs.core.rest.call(null,s__13860));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13917 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13864 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13864))
{var s__13866 = temp__3698__auto____13864;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13866)),cljs.core.rest.call(null,s__13866));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13916.call(this,f,init);
case  3 :
return reductions__13917.call(this,f,init,coll);
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
var juxt__14050 = (function (f){
return (function() {
var G__14057 = null;
var G__14057__14058 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14057__14059 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14057__14060 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14057__14061 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14057__14062 = (function() { 
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
G__14057 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14057__14058.call(this);
case  1 :
return G__14057__14059.call(this,x);
case  2 :
return G__14057__14060.call(this,x,y);
case  3 :
return G__14057__14061.call(this,x,y,z);
default:
return G__14057__14062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14057.cljs$lang$maxFixedArity = 3;
G__14057.cljs$lang$applyTo = G__14057__14062.cljs$lang$applyTo;
return G__14057;
})()
});
var juxt__14051 = (function (f,g){
return (function() {
var G__14077 = null;
var G__14077__14079 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14077__14080 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14077__14081 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14077__14082 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14077__14083 = (function() { 
var G__14092__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14092 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14092__delegate.call(this, x, y, z, args);
};
G__14092.cljs$lang$maxFixedArity = 3;
G__14092.cljs$lang$applyTo = (function (arglist__14135){
var x = cljs.core.first(arglist__14135);
var y = cljs.core.first(cljs.core.next(arglist__14135));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14135)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14135)));
return G__14092__delegate.call(this, x, y, z, args);
});
return G__14092;
})()
;
G__14077 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14077__14079.call(this);
case  1 :
return G__14077__14080.call(this,x);
case  2 :
return G__14077__14081.call(this,x,y);
case  3 :
return G__14077__14082.call(this,x,y,z);
default:
return G__14077__14083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14077.cljs$lang$maxFixedArity = 3;
G__14077.cljs$lang$applyTo = G__14077__14083.cljs$lang$applyTo;
return G__14077;
})()
});
var juxt__14052 = (function (f,g,h){
return (function() {
var G__14141 = null;
var G__14141__14142 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14141__14143 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14141__14145 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14141__14147 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14141__14148 = (function() { 
var G__14159__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14159 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14159__delegate.call(this, x, y, z, args);
};
G__14159.cljs$lang$maxFixedArity = 3;
G__14159.cljs$lang$applyTo = (function (arglist__14163){
var x = cljs.core.first(arglist__14163);
var y = cljs.core.first(cljs.core.next(arglist__14163));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14163)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14163)));
return G__14159__delegate.call(this, x, y, z, args);
});
return G__14159;
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
return G__14141__14145.call(this,x,y);
case  3 :
return G__14141__14147.call(this,x,y,z);
default:
return G__14141__14148.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14141.cljs$lang$maxFixedArity = 3;
G__14141.cljs$lang$applyTo = G__14141__14148.cljs$lang$applyTo;
return G__14141;
})()
});
var juxt__14053 = (function() { 
var G__14166__delegate = function (f,g,h,fs){
var fs__14025 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14167 = null;
var G__14167__14169 = (function (){
return cljs.core.reduce.call(null,(function (p1__13839_SHARP_,p2__13840_SHARP_){
return cljs.core.conj.call(null,p1__13839_SHARP_,p2__13840_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14025);
});
var G__14167__14170 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13841_SHARP_,p2__13842_SHARP_){
return cljs.core.conj.call(null,p1__13841_SHARP_,p2__13842_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14025);
});
var G__14167__14171 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13843_SHARP_,p2__13844_SHARP_){
return cljs.core.conj.call(null,p1__13843_SHARP_,p2__13844_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14025);
});
var G__14167__14172 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13845_SHARP_,p2__13846_SHARP_){
return cljs.core.conj.call(null,p1__13845_SHARP_,p2__13846_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14025);
});
var G__14167__14173 = (function() { 
var G__14186__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13847_SHARP_,p2__13848_SHARP_){
return cljs.core.conj.call(null,p1__13847_SHARP_,cljs.core.apply.call(null,p2__13848_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14025);
};
var G__14186 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14186__delegate.call(this, x, y, z, args);
};
G__14186.cljs$lang$maxFixedArity = 3;
G__14186.cljs$lang$applyTo = (function (arglist__14189){
var x = cljs.core.first(arglist__14189);
var y = cljs.core.first(cljs.core.next(arglist__14189));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14189)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14189)));
return G__14186__delegate.call(this, x, y, z, args);
});
return G__14186;
})()
;
G__14167 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14167__14169.call(this);
case  1 :
return G__14167__14170.call(this,x);
case  2 :
return G__14167__14171.call(this,x,y);
case  3 :
return G__14167__14172.call(this,x,y,z);
default:
return G__14167__14173.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14167.cljs$lang$maxFixedArity = 3;
G__14167.cljs$lang$applyTo = G__14167__14173.cljs$lang$applyTo;
return G__14167;
})()
};
var G__14166 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14166__delegate.call(this, f, g, h, fs);
};
G__14166.cljs$lang$maxFixedArity = 3;
G__14166.cljs$lang$applyTo = (function (arglist__14198){
var f = cljs.core.first(arglist__14198);
var g = cljs.core.first(cljs.core.next(arglist__14198));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14198)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14198)));
return G__14166__delegate.call(this, f, g, h, fs);
});
return G__14166;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14050.call(this,f);
case  2 :
return juxt__14051.call(this,f,g);
case  3 :
return juxt__14052.call(this,f,g,h);
default:
return juxt__14053.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14053.cljs$lang$applyTo;
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
var dorun__14207 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14216 = cljs.core.next.call(null,coll);
coll = G__14216;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14208 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14205 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14205))
{return (n > 0);
} else
{return and__3546__auto____14205;
}
})()))
{{
var G__14218 = (n - 1);
var G__14219 = cljs.core.next.call(null,coll);
n = G__14218;
coll = G__14219;
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
return dorun__14207.call(this,n);
case  2 :
return dorun__14208.call(this,n,coll);
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
var doall__14224 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14225 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14224.call(this,n);
case  2 :
return doall__14225.call(this,n,coll);
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
var matches__14236 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14236),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14236),1)))
{return cljs.core.first.call(null,matches__14236);
} else
{return cljs.core.vec.call(null,matches__14236);
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
var matches__14242 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14242)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14242),1)))
{return cljs.core.first.call(null,matches__14242);
} else
{return cljs.core.vec.call(null,matches__14242);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14244 = cljs.core.re_find.call(null,re,s);
var match_idx__14245 = s.search(re);
var match_str__14246 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14244))?cljs.core.first.call(null,match_data__14244):match_data__14244);
var post_match__14247 = cljs.core.subs.call(null,s,(match_idx__14245 + cljs.core.count.call(null,match_str__14246)));

if(cljs.core.truth_(match_data__14244))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14244,re_seq.call(null,re,post_match__14247));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14258_SHARP_){
return print_one.call(null,p1__14258_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14298 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14298))
{var and__3546__auto____14305 = (function (){var x__445__auto____14301 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14303 = x__445__auto____14301;

if(cljs.core.truth_(and__3546__auto____14303))
{var and__3546__auto____14304 = x__445__auto____14301.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14304))
{return cljs.core.not.call(null,x__445__auto____14301.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14304;
}
} else
{return and__3546__auto____14303;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14301);
}
})();

if(cljs.core.truth_(and__3546__auto____14305))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14305;
}
} else
{return and__3546__auto____14298;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14306 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14307 = x__445__auto____14306;

if(cljs.core.truth_(and__3546__auto____14307))
{var and__3546__auto____14308 = x__445__auto____14306.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14308))
{return cljs.core.not.call(null,x__445__auto____14306.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14308;
}
} else
{return and__3546__auto____14307;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14306);
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
var first_obj__14319 = cljs.core.first.call(null,objs);
var sb__14320 = (new goog.string.StringBuffer());

var G__14321__14325 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14321__14325))
{var obj__14330 = cljs.core.first.call(null,G__14321__14325);
var G__14321__14332 = G__14321__14325;

while(true){
if(cljs.core.truth_((obj__14330 === first_obj__14319)))
{} else
{sb__14320.append(" ");
}
var G__14337__14340 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14330,opts));

if(cljs.core.truth_(G__14337__14340))
{var string__14341 = cljs.core.first.call(null,G__14337__14340);
var G__14337__14342 = G__14337__14340;

while(true){
sb__14320.append(string__14341);
var temp__3698__auto____14345 = cljs.core.next.call(null,G__14337__14342);

if(cljs.core.truth_(temp__3698__auto____14345))
{var G__14337__14346 = temp__3698__auto____14345;

{
var G__14356 = cljs.core.first.call(null,G__14337__14346);
var G__14357 = G__14337__14346;
string__14341 = G__14356;
G__14337__14342 = G__14357;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14350 = cljs.core.next.call(null,G__14321__14332);

if(cljs.core.truth_(temp__3698__auto____14350))
{var G__14321__14351 = temp__3698__auto____14350;

{
var G__14360 = cljs.core.first.call(null,G__14321__14351);
var G__14361 = G__14321__14351;
obj__14330 = G__14360;
G__14321__14332 = G__14361;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14320);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14366 = cljs.core.first.call(null,objs);

var G__14367__14370 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14367__14370))
{var obj__14373 = cljs.core.first.call(null,G__14367__14370);
var G__14367__14374 = G__14367__14370;

while(true){
if(cljs.core.truth_((obj__14373 === first_obj__14366)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14376__14379 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14373,opts));

if(cljs.core.truth_(G__14376__14379))
{var string__14384 = cljs.core.first.call(null,G__14376__14379);
var G__14376__14386 = G__14376__14379;

while(true){
cljs.core.string_print.call(null,string__14384);
var temp__3698__auto____14389 = cljs.core.next.call(null,G__14376__14386);

if(cljs.core.truth_(temp__3698__auto____14389))
{var G__14376__14390 = temp__3698__auto____14389;

{
var G__14420 = cljs.core.first.call(null,G__14376__14390);
var G__14421 = G__14376__14390;
string__14384 = G__14420;
G__14376__14386 = G__14421;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14391 = cljs.core.next.call(null,G__14367__14374);

if(cljs.core.truth_(temp__3698__auto____14391))
{var G__14367__14392 = temp__3698__auto____14391;

{
var G__14423 = cljs.core.first.call(null,G__14367__14392);
var G__14425 = G__14367__14392;
obj__14373 = G__14423;
G__14367__14374 = G__14425;
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
pr_str.cljs$lang$applyTo = (function (arglist__14459){
var objs = cljs.core.seq( arglist__14459 );;
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
pr.cljs$lang$applyTo = (function (arglist__14464){
var objs = cljs.core.seq( arglist__14464 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14471){
var objs = cljs.core.seq( arglist__14471 );;
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
println.cljs$lang$applyTo = (function (arglist__14474){
var objs = cljs.core.seq( arglist__14474 );;
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
prn.cljs$lang$applyTo = (function (arglist__14476){
var objs = cljs.core.seq( arglist__14476 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14478 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14478,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14498 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14498))
{var nspc__14499 = temp__3698__auto____14498;

return cljs.core.str.call(null,nspc__14499,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14502 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14502))
{var nspc__14504 = temp__3698__auto____14502;

return cljs.core.str.call(null,nspc__14504,"/");
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
var pr_pair__14524 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14524,"{",", ","}",opts,coll);
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
var this__14569 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14571 = this;
var G__14572__14575 = cljs.core.seq.call(null,this__14571.watches);

if(cljs.core.truth_(G__14572__14575))
{var G__14577__14580 = cljs.core.first.call(null,G__14572__14575);
var vec__14578__14581 = G__14577__14580;
var key__14582 = cljs.core.nth.call(null,vec__14578__14581,0,null);
var f__14584 = cljs.core.nth.call(null,vec__14578__14581,1,null);
var G__14572__14585 = G__14572__14575;

var G__14577__14587 = G__14577__14580;
var G__14572__14590 = G__14572__14585;

while(true){
var vec__14591__14593 = G__14577__14587;
var key__14594 = cljs.core.nth.call(null,vec__14591__14593,0,null);
var f__14596 = cljs.core.nth.call(null,vec__14591__14593,1,null);
var G__14572__14597 = G__14572__14590;

f__14596.call(null,key__14594,this$,oldval,newval);
var temp__3698__auto____14599 = cljs.core.next.call(null,G__14572__14597);

if(cljs.core.truth_(temp__3698__auto____14599))
{var G__14572__14600 = temp__3698__auto____14599;

{
var G__14620 = cljs.core.first.call(null,G__14572__14600);
var G__14621 = G__14572__14600;
G__14577__14587 = G__14620;
G__14572__14590 = G__14621;
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
var this__14601 = this;
return this$.watches = cljs.core.assoc.call(null,this__14601.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14607 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14607.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14611 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14611.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14614 = this;
return this__14614.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14615 = this;
return this__14615.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14616 = this;
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
var atom__14638 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14639 = (function() { 
var G__14654__delegate = function (x,p__14629){
var map__14631__14633 = p__14629;
var map__14631__14634 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14631__14633))?cljs.core.apply.call(null,cljs.core.hash_map,map__14631__14633):map__14631__14633);
var validator__14635 = cljs.core.get.call(null,map__14631__14634,"﷐'validator");
var meta__14636 = cljs.core.get.call(null,map__14631__14634,"﷐'meta");

return (new cljs.core.Atom(x,meta__14636,validator__14635,null));
};
var G__14654 = function (x,var_args){
var p__14629 = null;
if (goog.isDef(var_args)) {
  p__14629 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14654__delegate.call(this, x, p__14629);
};
G__14654.cljs$lang$maxFixedArity = 1;
G__14654.cljs$lang$applyTo = (function (arglist__14655){
var x = cljs.core.first(arglist__14655);
var p__14629 = cljs.core.rest(arglist__14655);
return G__14654__delegate.call(this, x, p__14629);
});
return G__14654;
})()
;
atom = function(x,var_args){
var p__14629 = var_args;
switch(arguments.length){
case  1 :
return atom__14638.call(this,x);
default:
return atom__14639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14639.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14656 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14656))
{var validate__14657 = temp__3698__auto____14656;

if(cljs.core.truth_(validate__14657.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14658 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14658,new_value);
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
var swap_BANG___14725 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14726 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14727 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14728 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14729 = (function() { 
var G__14731__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14731 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14731__delegate.call(this, a, f, x, y, z, more);
};
G__14731.cljs$lang$maxFixedArity = 5;
G__14731.cljs$lang$applyTo = (function (arglist__14732){
var a = cljs.core.first(arglist__14732);
var f = cljs.core.first(cljs.core.next(arglist__14732));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14732)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14732))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14732)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14732)))));
return G__14731__delegate.call(this, a, f, x, y, z, more);
});
return G__14731;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14725.call(this,a,f);
case  3 :
return swap_BANG___14726.call(this,a,f,x);
case  4 :
return swap_BANG___14727.call(this,a,f,x,y);
case  5 :
return swap_BANG___14728.call(this,a,f,x,y,z);
default:
return swap_BANG___14729.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14729.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14763){
var iref = cljs.core.first(arglist__14763);
var f = cljs.core.first(cljs.core.next(arglist__14763));
var args = cljs.core.rest(cljs.core.next(arglist__14763));
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
var gensym__14797 = (function (){
return gensym.call(null,"G__");
});
var gensym__14798 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14797.call(this);
case  1 :
return gensym__14798.call(this,prefix_string);
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
var this__14802 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14802.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14803 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14803.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14803.state,this__14803.f);
}
return cljs.core.deref.call(null,this__14803.state);
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
delay.cljs$lang$applyTo = (function (arglist__14811){
var body = cljs.core.seq( arglist__14811 );;
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
var map__14820__14821 = options;
var map__14820__14822 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14820__14821))?cljs.core.apply.call(null,cljs.core.hash_map,map__14820__14821):map__14820__14821);
var keywordize_keys__14823 = cljs.core.get.call(null,map__14820__14822,"﷐'keywordize-keys");
var keyfn__14825 = (cljs.core.truth_(keywordize_keys__14823)?cljs.core.keyword:cljs.core.str);
var f__14837 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14830 = (function iter__14826(s__14827){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14827__14828 = s__14827;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14827__14828)))
{var k__14829 = cljs.core.first.call(null,s__14827__14828);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14825.call(null,k__14829),thisfn.call(null,(x[k__14829]))]),iter__14826.call(null,cljs.core.rest.call(null,s__14827__14828)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14830.call(null,cljs.core.js_keys.call(null,x));
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

return f__14837.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14858){
var x = cljs.core.first(arglist__14858);
var options = cljs.core.rest(arglist__14858);
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
var mem__14860 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14866__delegate = function (args){
var temp__3695__auto____14861 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14860),args);

if(cljs.core.truth_(temp__3695__auto____14861))
{var v__14862 = temp__3695__auto____14861;

return v__14862;
} else
{var ret__14863 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14860,cljs.core.assoc,args,ret__14863);
return ret__14863;
}
};
var G__14866 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14866__delegate.call(this, args);
};
G__14866.cljs$lang$maxFixedArity = 0;
G__14866.cljs$lang$applyTo = (function (arglist__14870){
var args = cljs.core.seq( arglist__14870 );;
return G__14866__delegate.call(this, args);
});
return G__14866;
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
var trampoline__14881 = (function (f){
while(true){
var ret__14873 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14873)))
{{
var G__14886 = ret__14873;
f = G__14886;
continue;
}
} else
{return ret__14873;
}
break;
}
});
var trampoline__14882 = (function() { 
var G__14889__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14889 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14889__delegate.call(this, f, args);
};
G__14889.cljs$lang$maxFixedArity = 1;
G__14889.cljs$lang$applyTo = (function (arglist__14893){
var f = cljs.core.first(arglist__14893);
var args = cljs.core.rest(arglist__14893);
return G__14889__delegate.call(this, f, args);
});
return G__14889;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14881.call(this,f);
default:
return trampoline__14882.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14882.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14909 = (function (){
return rand.call(null,1);
});
var rand__14910 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14909.call(this);
case  1 :
return rand__14910.call(this,n);
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
var k__14925 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14925,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14925,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14969 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14970 = (function (h,child,parent){
var or__3548__auto____14947 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14947))
{return or__3548__auto____14947;
} else
{var or__3548__auto____14949 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14949))
{return or__3548__auto____14949;
} else
{var and__3546__auto____14951 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14951))
{var and__3546__auto____14956 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14956))
{var and__3546__auto____14960 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14960))
{var ret__14961 = true;
var i__14962 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14963 = cljs.core.not.call(null,ret__14961);

if(cljs.core.truth_(or__3548__auto____14963))
{return or__3548__auto____14963;
} else
{return cljs.core._EQ_.call(null,i__14962,cljs.core.count.call(null,parent));
}
})()))
{return ret__14961;
} else
{{
var G__14976 = isa_QMARK_.call(null,h,child.call(null,i__14962),parent.call(null,i__14962));
var G__14977 = (i__14962 + 1);
ret__14961 = G__14976;
i__14962 = G__14977;
continue;
}
}
break;
}
} else
{return and__3546__auto____14960;
}
} else
{return and__3546__auto____14956;
}
} else
{return and__3546__auto____14951;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14969.call(this,h,child);
case  3 :
return isa_QMARK___14970.call(this,h,child,parent);
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
var parents__14982 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14983 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14982.call(this,h);
case  2 :
return parents__14983.call(this,h,tag);
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
var ancestors__14997 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14998 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14997.call(this,h);
case  2 :
return ancestors__14998.call(this,h,tag);
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
var descendants__15017 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15018 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15017.call(this,h);
case  2 :
return descendants__15018.call(this,h,tag);
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
var derive__15045 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15046 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15031 = "﷐'parents".call(null,h);
var td__15032 = "﷐'descendants".call(null,h);
var ta__15033 = "﷐'ancestors".call(null,h);
var tf__15037 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15041 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15031.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15033.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15033.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15031,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15037.call(null,"﷐'ancestors".call(null,h),tag,td__15032,parent,ta__15033),"﷐'descendants":tf__15037.call(null,"﷐'descendants".call(null,h),parent,ta__15033,tag,td__15032)});
})());

if(cljs.core.truth_(or__3548__auto____15041))
{return or__3548__auto____15041;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15045.call(this,h,tag);
case  3 :
return derive__15046.call(this,h,tag,parent);
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
var underive__15133 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15134 = (function (h,tag,parent){
var parentMap__15124 = "﷐'parents".call(null,h);
var childsParents__15125 = (cljs.core.truth_(parentMap__15124.call(null,tag))?cljs.core.disj.call(null,parentMap__15124.call(null,tag),parent):cljs.core.set([]));
var newParents__15126 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15125))?cljs.core.assoc.call(null,parentMap__15124,tag,childsParents__15125):cljs.core.dissoc.call(null,parentMap__15124,tag));
var deriv_seq__15129 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15022_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15022_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15022_SHARP_),cljs.core.second.call(null,p1__15022_SHARP_)));
}),cljs.core.seq.call(null,newParents__15126)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15124.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15026_SHARP_,p2__15027_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15026_SHARP_,p2__15027_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15129));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15133.call(this,h,tag);
case  3 :
return underive__15134.call(this,h,tag,parent);
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

var or__3548__auto____15153 = (cljs.core.truth_((function (){var and__3546__auto____15152 = xprefs__15150;

if(cljs.core.truth_(and__3546__auto____15152))
{return xprefs__15150.call(null,y);
} else
{return and__3546__auto____15152;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15153))
{return or__3548__auto____15153;
} else
{var or__3548__auto____15157 = (function (){var ps__15155 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15155) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15155),prefer_table)))
{} else
{}
{
var G__15164 = cljs.core.rest.call(null,ps__15155);
ps__15155 = G__15164;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15157))
{return or__3548__auto____15157;
} else
{var or__3548__auto____15161 = (function (){var ps__15159 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15159) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15159),y,prefer_table)))
{} else
{}
{
var G__15166 = cljs.core.rest.call(null,ps__15159);
ps__15159 = G__15166;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15161))
{return or__3548__auto____15161;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15174 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15174))
{return or__3548__auto____15174;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15194 = cljs.core.reduce.call(null,(function (be,p__15182){
var vec__15183__15184 = p__15182;
var k__15186 = cljs.core.nth.call(null,vec__15183__15184,0,null);
var ___15187 = cljs.core.nth.call(null,vec__15183__15184,1,null);
var e__15189 = vec__15183__15184;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15186)))
{var be2__15193 = (cljs.core.truth_((function (){var or__3548__auto____15191 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15191))
{return or__3548__auto____15191;
} else
{return cljs.core.dominates.call(null,k__15186,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15189:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15193),k__15186,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15186," and ",cljs.core.first.call(null,be2__15193),", and neither is preferred")));
}
return be2__15193;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15194))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15194));
return cljs.core.second.call(null,best_entry__15194);
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
if(cljs.core.truth_((function (){var and__3546__auto____15214 = mf;

if(cljs.core.truth_(and__3546__auto____15214))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15214;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15215 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15215))
{return or__3548__auto____15215;
} else
{var or__3548__auto____15216 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15216))
{return or__3548__auto____15216;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15217 = mf;

if(cljs.core.truth_(and__3546__auto____15217))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15217;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15219 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15219))
{return or__3548__auto____15219;
} else
{var or__3548__auto____15220 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15220))
{return or__3548__auto____15220;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15221 = mf;

if(cljs.core.truth_(and__3546__auto____15221))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15221;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15222 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15222))
{return or__3548__auto____15222;
} else
{var or__3548__auto____15223 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15223))
{return or__3548__auto____15223;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15224 = mf;

if(cljs.core.truth_(and__3546__auto____15224))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15224;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15225 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15225))
{return or__3548__auto____15225;
} else
{var or__3548__auto____15226 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15226))
{return or__3548__auto____15226;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15227 = mf;

if(cljs.core.truth_(and__3546__auto____15227))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15227;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15229 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15229))
{return or__3548__auto____15229;
} else
{var or__3548__auto____15231 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15231))
{return or__3548__auto____15231;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15235 = mf;

if(cljs.core.truth_(and__3546__auto____15235))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15235;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15239 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15239))
{return or__3548__auto____15239;
} else
{var or__3548__auto____15240 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15240))
{return or__3548__auto____15240;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15241 = mf;

if(cljs.core.truth_(and__3546__auto____15241))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15241;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15247 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15247))
{return or__3548__auto____15247;
} else
{var or__3548__auto____15248 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15248))
{return or__3548__auto____15248;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15249 = mf;

if(cljs.core.truth_(and__3546__auto____15249))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15249;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15250 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15250))
{return or__3548__auto____15250;
} else
{var or__3548__auto____15253 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15253))
{return or__3548__auto____15253;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15288 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15289 = cljs.core._get_method.call(null,mf,dispatch_val__15288);

if(cljs.core.truth_(target_fn__15289))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15288)));
}
return cljs.core.apply.call(null,target_fn__15289,args);
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
var this__15299 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15300 = this;
cljs.core.swap_BANG_.call(null,this__15300.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15300.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15300.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15300.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15305 = this;
cljs.core.swap_BANG_.call(null,this__15305.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15305.method_cache,this__15305.method_table,this__15305.cached_hierarchy,this__15305.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15310 = this;
cljs.core.swap_BANG_.call(null,this__15310.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15310.method_cache,this__15310.method_table,this__15310.cached_hierarchy,this__15310.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15311 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15311.cached_hierarchy),cljs.core.deref.call(null,this__15311.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15311.method_cache,this__15311.method_table,this__15311.cached_hierarchy,this__15311.hierarchy);
}
var temp__3695__auto____15313 = cljs.core.deref.call(null,this__15311.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15313))
{var target_fn__15314 = temp__3695__auto____15313;

return target_fn__15314;
} else
{var temp__3695__auto____15316 = cljs.core.find_and_cache_best_method.call(null,this__15311.name,dispatch_val,this__15311.hierarchy,this__15311.method_table,this__15311.prefer_table,this__15311.method_cache,this__15311.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15316))
{var target_fn__15317 = temp__3695__auto____15316;

return target_fn__15317;
} else
{return cljs.core.deref.call(null,this__15311.method_table).call(null,this__15311.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15319 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15319.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15319.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15319.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15319.method_cache,this__15319.method_table,this__15319.cached_hierarchy,this__15319.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15320 = this;
return cljs.core.deref.call(null,this__15320.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15321 = this;
return cljs.core.deref.call(null,this__15321.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15322 = this;
return cljs.core.do_dispatch.call(null,mf,this__15322.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15339__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15339 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15339__delegate.call(this, _, args);
};
G__15339.cljs$lang$maxFixedArity = 1;
G__15339.cljs$lang$applyTo = (function (arglist__15341){
var _ = cljs.core.first(arglist__15341);
var args = cljs.core.rest(arglist__15341);
return G__15339__delegate.call(this, _, args);
});
return G__15339;
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
